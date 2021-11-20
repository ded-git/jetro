$(".slider__for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.slider__nav',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="../images/prev.svg" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="../images/next.svg" alt=""></button>',
});

// $('.slick-arrow').on('click', function(){
//     $('.slick-arrow').css('transform', 'scale(0.8)');
// });

$('.slider__nav').slick({
    slidesToShow: all,
    slidesToScroll: 1,
    asNavFor: '.slider__for',
    focusOnSelect: true,
//     centerPadding: 0,
    infinite: true,
  });
