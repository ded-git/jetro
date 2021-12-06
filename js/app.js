$(".slider__for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev.svg?sanitize=true" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg?sanitize=true" alt=""></button>',
    responsive: [
        {
            breakpoint: 941,
            settings: {
                asNavFor: '.slider__nav',
            }
        }
    ]
});



$('.slider__nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__for',
    infinite: true,
    focusOnSelect: true,
    variableWidth: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 941,
            settings: {
                // variableWidth: false,
                slidesToShow: 5,
                slidesToScroll: 1,
                centerMode: true,
            }
        },
    ]
  });


  $('.header__menu-icon').on('click', function() {
      $('.header__menu-list').slideToggle();
  })