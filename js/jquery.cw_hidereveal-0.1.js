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
 */

(function ($) {
    $.fn.CWHideReveal = function (settings) {

        // Default plugin settings
        var defaults = {
            speed: 300,
            easing: '',
            changeText: false,
            showText: 'Show',
            hideText: 'Hide'
        };

        // Merge default and user settings
        var settings = $.extend({}, defaults, settings);

        this.each(function(){
            // Get the link
            var link = this;

            // Get the container id
            var container = $('#'+link.data('id'));

            // Auto hide the divs
            container.css({
                'display' : 'none'
            });

            link.on('click',function(){
                // Add class cw_close to any div you want to automatically close
                $('.cw_close').slideUp(settings.speed, settings.easing);

                $(container).slideToggle(settings.speed, settings.easing, function() {
                    if(settings.changeText==true){
                        $(container).is(":visible") ? container.text(settings.hideText) : container.text(settings.showText);
                    }
                });

                return false;
            });
        });
    };
})(jQuery);
