$(function () {

  // $('.header-slider').slick({
  //   vertical: true,
  //   dots: true,
  //   verticalSwiping: true,
  //   prevArrow: '<button type="button" class="slick-prev" alt="" > <img src="img/prev-arrow.svg"</button>',
  //   nextArrow: '<button type="button" class="slick-next"  alt="" ><img src="img/next-arrow.svg"</button>'
  // });

  $('.product__name').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.product__content',
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
  })
  $('.product__content').slick({
    asNavFor: '.product__name',
    slidesToShow: 1,
    vertical: true,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  })

});