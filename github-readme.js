(function ($) {

	function insertReadme( $el, options ) {
		// Provide the options via arguments or data attributes
		options = jQuery.extend({
			username: 			'_missing_',
			repo: 					'_missing_',
			headingReduce: 	0,
		}, options, $el.data());

		if ( options.githubReadme ) {
			var t = options.githubReadme.replace(/\/$/).split(/\//);
			options.username = t[t.length - 2];
			options.repo = t[t.length - 1];
		}

		$.ajax({
		  // github API: repos/username/reponame/readme
		  url: 'https://api.github.com/repos/'+options.username+'/'+options.repo+'/readme',
		  dataType: 'jsonp',
		  success: function(results) {
		  	var markdown = Base64.decode( results.data.content );
						headingReplacement = '#';

				// Add additional hashes to the headings, to reduce their level
				for ( var i = 0; i < options.headingReduce; i++ ) { headingReplacement += '#'; }
				markdown = markdown.replace(/^#|[\n\r]#/g, headingReplacement);

		  	$el.html( marked(markdown) );
		  }
		});
	}

	$.fn.githubReadme = function (options) {
		$.each(this, function() {
			insertReadme($(this), options);
		});
	};

})(jQuery);
