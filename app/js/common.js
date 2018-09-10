$(function() {


});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
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


$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 900);
    });



});
$(document).ready(function(){
    $("#menu-2").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 900);
    });



});
