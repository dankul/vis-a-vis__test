const $toggler = $('.js-toggler');

$toggler.on('click', function() {
  $('body').toggleClass('is-menu');
});
