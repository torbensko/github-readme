(function ($) {

	function insertReadme( $el, options ) {
		// Provide the options via arguments or data attributes
		options = jQuery.extend({
			user: 'torbensko',
			repo: 'github-readme',
			headingAdjust: 0,
		}, options, $el.data());

		if ( options.src ) {
			var t = options.src.replace(/\/$/).split(/\//);
			options.user = t[t.length - 2];
			options.repo = t[t.length - 1];
		}

		$.ajax({
		  // github API: repos/username/reponame/readme
		  url: 'https://api.github.com/repos/'+options.user+'/'+options.repo+'/readme',
		  dataType: 'jsonp',
		  success: function(results) {
		  	var html = marked( Base64.decode( results.data.content ) );

		  	if ( options.headingAdjust ) {
		  		// Ensure it's a number, not just a true value
		  		if ( parseInt(options.headingAdjust) !== options.headingAdjust ) {
		  			options.headingAdjust = 1;
		  		}
		  		html = html.replace(/(<\/?h)(\d)/g, function(match, tag, level) { 
		  			return tag+(parseInt(level) + options.headingAdjust);
		  		});
		  	}
		  	$el.html( html );
		  }
		});
	}

	$.fn.githubReadme = function (options) {
		$.each(this, function() {
			insertReadme($(this), options);
		});
	};

	$('[data-readme]').githubReadme();

})(jQuery);
