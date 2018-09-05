$(function() {


});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        760: {
            items:2
        },
        1000:{
            items:3
        },
        1300:{
            items:4
        }
    }
});

var selector = $('.owl-carousel');

$('.my-next-button').click(function() {
    selector.trigger('next.owl.carousel');
});

$('.my-prev-button').click(function() {
    selector.trigger('prev.owl.carousel');
});
