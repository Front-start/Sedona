(function ($) {
    'use strict';

    $(document).ready(function () {

        $('.navbar-toggle, .close-menu-button').click(function () {
            $('.navbar').toggleClass('active');
        });

        $(window).resize(function () {
            if ($(window).width() > 767) {
                $('.navbar').removeClass('active');
            }
        });

    }); //end ready

}(jQuery));
