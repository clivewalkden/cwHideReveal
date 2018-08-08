# CW Hide Reveal

A working jQuery hide reveal script

[![Build Status](https://travis-ci.org/clivewalkden/cwHideReveal.png?branch=master)](https://travis-ci.org/clivewalkden/cwHideReveal)
[![Join the chat at https://gitter.im/clivewalkden/cwHideReveal](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/clivewalkden/cwHideReveal?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/clivewalkden/cwHideReveal/master/dist/cw_hidereveal.min.js
[max]: https://raw.github.com/clivewalkden/cwHideReveal/master/dist/cw_hidereveal.js

In your web page:

```html
<a href="#" class="hidereveal" data-id="hidereveal01">Read More</a>
<div id="hidereveal01">
	More content is here
</div>

<script src="libs/jquery/jquery.js"></script>
<script src="dist/cw_hidereveal.min.js"></script>
<script>
jQuery(function($) {
	$('.hidereveal').CWHideReveal();
});
</script>
```

## Documentation
_(Coming soon)_

## Examples
http://clivewalkden.co.uk/code/cw_hide_reveal/

## Release History

#### v0.7.1 - 10th May 2017 ####
* Added main field to the package.json

#### v0.7.0 - 20th July 2015 ####
* Added callbacks
* Added support for internal buttons triggering other dropdowns

>>>>>>> c4ac055750f8f979beefbf8c4ac8fbaaef3c1bc1
#### v0.6.2 - 18th March 2015 ####
* Changed the bower ignore files slightly

#### v0.6.1 - 3rd February 2015 ####
* Added Bower support

#### v0.6.0 - 3rd February 2015 ####
* Updated the script for AMD

#### v0.5.0 - 30th January 2014 ####
* Completely re-coded the script.
* Added the ability to have a container open by default through the script options. (As requested by [Mark Plunkett][markurl])
[markurl]: http://www.mark-plunkett.co.uk

#### v0.4 - 27th September 2013 ####
* Added unit test.
* Gave the plugin a small update to improve compatability

#### v0.3 - 28th March 2013 ####
* Added the option to add an active class to the current selected link on click.

#### v0.2 - 29nd January 2013 ####
* Finalised the accordian command.

#### v0.1 - 22nd January 2013 ####
* Created the first version of the script based on previous created scripts.
