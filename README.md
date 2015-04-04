# GitHub Readme

Display a github readme on your website.

## Install

	bower install ts-github-readme

## Usage

### Provide options via javascript

	<div id="readme"></div>

	...

	<script>
		$('#readme').githubReadme({
			user: 'torbensko',
			repo: 'github-readme'
		});
	</script>

### Provide options via data attributes

	<div class="readme" data-user="torbensko" data-repo="github-readme"></div>
	<div class="readme" data-user="torbensko" data-repo="Kinect-to-Maya-motion-capture"></div>
	<div class="readme" data-src="https://github.com/torbensko/HAL"></div>

	...

	<script>
		$('.readme').githubReadme();
	</script>

### Automatic initialisation:
	
*Please note:* the script must be included after the container element

	<div data-readme data-user="torbensko" data-repo="billboard"></div>

	...

	<script src=".../github-readme.js"></script>

