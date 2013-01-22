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

        // Get the link
        var link = this;

        // Get the container id
        var container = $('#'+link.data('id'));

        // Auto hide the divs
        container.each(function(){
            container.css({
                'display' : 'none'
            });
        });

        this.each(function(){

        });

        $(this).click(function () {
            // Add class cw_close to any div you want to automatically close
            $('.cw_close').slideUp(settings.speed, settings.easing);

            var object = $(this);

            var object_id = '#'+object.data('id');

            $(object_id).slideToggle(settings.speed, settings.easing, function() {
                if(settings.changeText==true){
                    $(object_id).is(":visible") ? object.text(settings.hideText) : object.text(settings.showText);
                }
            });

            return false;
        });
    };
})(jQuery);
