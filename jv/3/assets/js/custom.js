


$('.screenshot_slider').owlCarousel({
    loop: true,
    margin:20,
    center:true,
    responsiveClass: true,
    nav: true,    
    autoplayTimeout: 4000,
    smartSpeed: 400,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
});

/****************************/


$('#astrology').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
}) 




$('#product').owlCarousel({
    loop:true,
    margin:16,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
}) 



