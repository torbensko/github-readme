# GitHub Readme

Display a github readme on your website.

## Install

	bower install ts-github-readme

## Options

The readme script accepts the following options as either data attributes or arguments to the `githubReadme` method:

- **user** and **repo**: the project repo as specified by the owner and repo name
- **src**: the full project repo URL
- **headingAdjust**: makes it possible to reduce the heading levels.
- **readme**: causes the element to be automatically initialised, assuming the DOM element exists at the time the readme script is included

## Intialising

### Using data attributes

		<div class="readme" data-user="torbensko" data-repo="github-readme"></div>
		<div class="readme" data-user="torbensko" data-repo="Kinect-to-Maya-motion-capture"></div>
		<div class="readme" data-src="https://github.com/torbensko/HAL"></div>
		...
		<script>
			$('.readme').githubReadme();
		</script>

### Javascript call with arguments

		<div id="readme"></div>
		...
		<script>
			$('#readme').githubReadme({
				user: 'torbensko',
				repo: 'github-readme',
				headingAdjust: 1,
			});
		</script>


### Automatic initialisation
	
*Please note:* the script must be included after the container element

		<div data-readme data-user="torbensko" data-repo="billboard"></div>
		...
		<script src=".../github-readme.js"></script>

