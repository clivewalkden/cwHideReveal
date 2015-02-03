/*! CW Hide Reveal - v0.6.1 - 2015-02-03
* https://github.com/clivewalkden/cwHideReveal
* Copyright (c) 2015 Clive Walkden; Licensed MIT */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.fn.CWHideReveal = function (custom) {

        // Default plugin settings
        var defaults = {
            speed: 300,
            easing: '',
            changeText: false,
            showText: this.text(),
            hideText: 'Hide',
            accordian: false,
            openClass: 'cw_open',
            activeLinkMode: true,
            activeLinkClass: 'cw_active',
            defaultOpen : null
        };

        // Merge default and user settings
        var settings = $.extend({}, defaults, custom);

		var prop = {
			container		: null,
			currentLink		: null,
			accordians		: []
		};

		var methods = {
			checkData: function($this) {
				if (null === prop.currentLink) {
					prop.currentLink = $($this);
				}

				if (null === prop.container) {
					prop.container = $('#'+prop.currentLink.data('id'));
				}
			},
			hidden: function() {
				return prop.container.hasClass(settings.openClass);
			},
			toggle: function($this){
				if(methods.hidden($this)) {
					methods.hide($this);
				}else{
					methods.show($this);
				}

				return false;
			},
			show: function($this){
				methods.checkData($this);

				prop.container.slideDown(settings.speed, settings.easing, function(){

					if(settings.changeText === true){
						methods.changeText($this);
					}

					if(settings.activeLinkMode) {
						prop.currentLink.addClass(settings.activeLinkClass);
					}

					prop.container.addClass(settings.openClass);
				});

				// Close other accordians
				if (settings.accordian) {
					methods.hideAccordian();
					prop.accordians.push(prop.container);
				}
			},
			hide: function($this) {
				if(settings.activeLinkMode) {
					prop.currentLink.removeClass(settings.activeLinkClass);
				}

				prop.container.removeClass(settings.openClass);

				prop.container.slideUp(settings.speed, settings.easing,function(){

					if(settings.changeText === true){
						methods.changeText($this);
					}
				});
			},
			hideAccordian: function() {
				// Save current values
				var o_container = prop.container;
				var o_link = prop.currentLink;

				// Check if the same accordian is being closed
				if(prop.accordians.length && o_container.attr('id') === prop.accordians[0].attr('id')) {
					// Remove the accordian
					prop.accordians.shift();

					return false;
				}

				$.each(prop.accordians,function(){
					prop.container = $(this);
					prop.currentLink = $('[data-id="'+$(this).attr('id')+'"]');
					methods.hide($(this));
				});

				// Restore current values
				prop.container = o_container;
				prop.currentLink = o_link;

				// Remove the accordian
				prop.accordians.shift();
			},
			hideAll: function($el) {
				$el.css({
					'display' : 'none'
				});
			},
			changeText: function($this) {
				if(prop.container.is(":visible")) {
					$this.text($this.data('hideText'));
				}else{
					$this.text($this.data('showText'));
				}
			},
			saveLink: function($this) {
				$this.data('showText',$this.text()).data('hideText',settings.hideText);
			}
		};

        this.each(function(){
			// Get the link
			var obj = $(this);

            // Auto hide the divs
            methods.hideAll($('#'+obj.data('id')));

			if(settings.changeText) {
				methods.saveLink(obj);
			}

			if(settings.defaultOpen && obj.data('id') === settings.defaultOpen){
				methods.show(obj);
			}

            // When a link is clicked toggle the container
            obj.on('click',function(e){
                // Prevent the default action of the link
                e.preventDefault();

                prop.currentLink = $(this);

				// Get the container id
				prop.container = $('#'+prop.currentLink.data('id'));

				// Get the link
				methods.toggle(prop.currentLink);

				return this;
            });
        });
    };
}));
