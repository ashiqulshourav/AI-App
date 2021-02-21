$(document).ready(function() {
    /* Navbar Shrink */
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 90) {
            $('.navbar').addClass('navbar-shrink');
        } else {
            $('.navbar').removeClass('navbar-shrink');
        }
    });

    /* Video Popup */
    const videSrc = $('#player-1').attr('src');
    $('.video-play-btn, .video-popup').on('click', function() {
        if ($('.video-popup').hasClass('open')) {
            $('.video-popup').removeClass('open');
            $('#player-1').attr('src', "");
        } else {
            $('.video-popup').addClass('open');
            if ($('#player-1').attr('src') == '') {
                $('#player-1').attr('src', videSrc);
            }
        }
    });

    /* Feature, Team & Testimonials Owl Carousel */
    $('.features-carousel,.team-carousel, .testimonials-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });

    /* Feature Owl Carousel */
    $('.screenshots-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            }
        }
    });

    /* Page Scrolling - ScrollIT */
    $.scrollIt({
        topOffset: -50
    })

    /* Navbar Collapse */
    $('.nav-link').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    /* Toggle Theme - Light & Dark */
    function toggleTheme() {
        if (localStorage.getItem('AI-Theme') !== null) {
            if (localStorage.getItem('AI-Theme') === 'dark') {
                $('body').addClass('dark');
            } else {
                $('body').removeClass('dark')
            }
        }
        updateIcon();
    }

    toggleTheme();

    $('.toggle-theme').on('click', function() {
        $('body').toggleClass('dark');
        if ($('body').hasClass('dark')) {
            localStorage.setItem('AI-Theme', 'dark')
        } else {
            localStorage.setItem('AI-Theme', 'light');
        }
        updateIcon();
    });

    function updateIcon() {
        if ($('body').hasClass('dark')) {
            $('.toggle-theme i').removeClass('fa-moon');
            $('.toggle-theme i').addClass('fa-sun');
        } else {
            $('.toggle-theme i').removeClass('fa-sun');
            $('.toggle-theme i').addClass('fa-moon');
        }
    }
});
/* Preloader */
window.addEventListener('load', function() {
    document.querySelector('.preloader').style.display = 'none';
});