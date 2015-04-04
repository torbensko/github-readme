(function ($) {

	function insertReadme( $el, options ) {
		// Provide the options via arguments or data attributes
		options = jQuery.extend({
			user: 'torbensko',
			repo: 'github-readme'
		}, options, $el.data());

		$.ajax({
		  // github API: repos/username/reponame/readme
		  url: 'https://api.github.com/repos/'+options.user+'/'+options.repo+'/readme',
		  dataType: 'jsonp',
		  success: function(results) {
		  	$el.html( marked( Base64.decode( results.data.content ) ) );
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
