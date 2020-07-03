$(function () {
  const $oneSlider = $('.section__one--slider');
  
  $oneSlider.slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    dots: true,
    arrows: true,
  });
});