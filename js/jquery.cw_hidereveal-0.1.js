/*!
 * Hide Reveal - for jQuery 1.7+
 * http://www.cwenterprises.co.uk
 *
 * Copyright 2013, Clive Walkden (http://www.cwenterprises.co.uk)
 *
 * @package Hide Reveal
 * @author Clive Walkden (http://www.cwenterprises.co.uk)
 * @version 1.0.0
 * @copyright Copyright (c) 2012 SOZO Design Ltd (http://www.cwenterprises.co.uk)
 * @date: 22-01-2013
 * @todo Tidy up the script now that it works
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
            openClass: 'cw_open'

        };

        // Merge default and user settings
        var settings = $.extend({}, defaults, custom);

        this.each(function(){
            // Get the link
            var link = $(this);

            // Get the container id
            var container = $('#'+link.data('id'));

            // Auto hide the divs
            container.css({
                'display' : 'none'
            });

            // When a link is clicked toggle the container
            link.on('click',function(e){
                // Prevent the default action of the link
                e.preventDefault();

                // If accordian is set automatically close all open divs
                if(settings.accordian==true){

                    $('.'+settings.openClass).slideUp(settings.speed, settings.easing,function(){
                        $('.'+settings.openClass).removeClass(settings.openClass);
                    });

                    if ($(container).is(':hidden')) {

                        $(container).slideDown(settings.speed, settings.easing, function(){

                            if(settings.changeText==true){
                                $('.'+settings.openClass).is(":visible") ? $(this).text(settings.hideText) : $(this).text(settings.showText);
                            }

                            $(this).addClass(settings.openClass);
                        });
                    }

                }else{

                    $(container).slideToggle(settings.speed, settings.easing, function() {

                        if(settings.changeText==true){
                            $(container).is(":visible") ? link.text(settings.hideText) : link.text(settings.showText);
                        }

                        if ($(this).hasClass(settings.openClass)) {
                            $(this).removeClass(settings.openClass);
                        }else{
                            $(this).addClass(settings.openClass);
                        }
                    });
                }

                return this;
            });
        });
    };
})(jQuery);
