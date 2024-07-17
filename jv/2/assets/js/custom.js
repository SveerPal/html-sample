


$('.screenshot_slider').owlCarousel({
    loop: true,
    margin:20,
    responsiveClass: true,
    nav: true,    
    autoplayTimeout: 4000,
    smartSpeed: 400,
    navText: ['&#8592;', '&#8594;'],
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
    navText: ['&#8592;', '&#8594;'],
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
            items:4
        }
    }
}) 




$('#product').owlCarousel({
    loop:true,
    margin:16,
    nav:true,
    autoplay:true,
    navText: ['&#8592;', '&#8594;'],
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
            items:4
        }
    }
}) 


// Fancybox Config
$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
  ],
  loop: false,
  protect: true
});



