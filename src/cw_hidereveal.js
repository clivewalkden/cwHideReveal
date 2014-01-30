/*
 * cw_hidereveal
 * https://github.com/clivewalkden/cwHideReveal
 *
 * Copyright (c) 2013 Clive Walkden
 * Licensed under the MIT license.
 */

(function ($) {
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
            activeLinkClass: 'cw_active'
        };

        // Merge default and user settings
        var settings = $.extend({}, defaults, custom);

		var prop = {
			container		: null,
			currentLink		: null
		};

		var methods = {
			toggle: function(){
				prop.container.slideToggle(settings.speed, settings.easing, function() {

					if(settings.changeText === true){
						methods.changeText(prop.currentLink);
					}

					if ($(this).hasClass(settings.openClass)) {
						$(this).removeClass(settings.openClass);
					}else{
						$(this).addClass(settings.openClass);
					}
				});
			},
			show: function(){
				console.log('show');
				prop.container.slideDown(settings.speed, settings.easing, function(){

					if(settings.changeText === true){
						methods.changeText(prop.currentLink);
					}

					$(this).addClass(settings.openClass);
				});
			},
			hide: function() {
				console.log('hide');
				$('.'+settings.openClass).slideUp(settings.speed, settings.easing,function(){
					$('.'+settings.openClass).removeClass(settings.openClass);
				});
			},
			hideAll: function(el) {
				console.log('hide all');
				el.css({
					'display' : 'none'
				});
			},
			changeText: function(el) {
				console.log('change text');
				console.log($('.'+settings.openClass).is(':visible'));
				if($('.'+settings.openClass).is(":visible")) {
					console.log('hideText');
					el.text(settings.hideText);
				}else{
					console.log('showText');
					el.text(settings.showText);
				}
			}
		};

        this.each(function(){
			// Get the link
			prop.currentLink = $(this);

			// Get the container id
			prop.container = $('#'+prop.currentLink.data('id'));

            // Auto hide the divs
            methods.hideAll(prop.container);

            // When a link is clicked toggle the container
            prop.currentLink.on('click',function(e){

                // Prevent the default action of the link
                e.preventDefault();

				// Get the link
				prop.currentLink = $(this);

				// Get the container id
				prop.container = $('#'+prop.currentLink.data('id'));

                // If accordian is set automatically close all open divs
                if(settings.accordian === true){
                    methods.hide();

                    if (prop.container.is(':hidden')) {
                        methods.show();
                    }
                }else{
                    methods.toggle();
                }

                if(settings.activeLinkMode === true){
                    if (prop.currentLink.hasClass(settings.activeLinkClass)){
                        prop.currentLink.removeClass(settings.activeLinkClass);
                    }else{
                        prop.currentLink.addClass(settings.activeLinkClass);
                    }
                }

                return this;
            });
        });
    };
})(jQuery);
