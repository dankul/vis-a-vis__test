const $window = $(window);
initVisible();

$(window).on('scroll', initVisible);

function initVisible() {
  if ($window.scrollTop() > 100) {
    $('body').addClass('is-scrolled');
  } else {
    $('body').removeClass('is-scrolled');
  }
}
