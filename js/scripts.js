(function($) {
    $(window).on('load', function() {
        $('.fade-in').css({ position: 'relative', opacity: 0, top: -14 });
        setTimeout(
            function() {
                $('#preload-content').fadeOut(400, function() {
                    $('#preload').fadeOut(800);
                    setTimeout(
                        function() {
                            $('.fade-in').each(function(index) {
                                $(this).delay(400 * index).animate({ top: 0, opacity: 1 }, 800);
                            });
                        },
                        800
                    );
                });
            },
            400
        );
    });

    $(document).ready(function() {
        // Countdown timer
        // Change the launchDay according to your needs.
        // The month ranges from 0 to 11. I specify the month from 1 to 12 and manually subtract the 1.
        // Thus the launchDay below denotes 7 December, 2017.
        var launchDay = new Date(2021, 4 - 1, 15, 15);
        $('#timer').countdown({
            until: launchDay,
            format: 'dHMS'
        });

        // Background image
        $.backstretch('images/cover.png');
    });
})(jQuery);
