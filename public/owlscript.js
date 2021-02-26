$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        center: true,
        loop: true,
        nav: true,
        navText: ['<', '>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            900: {
                items: 3,
                nav: true,
            },
        },
    });
});
