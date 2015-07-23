$(document).ready(function() {
  $('.dropdown').on('mouseenter', function() {
    $(this).find('.dropdown-menu').slideDown();
    clearTimeout($(this).data('timeoutId'));
  });

  $('.dropdown').on('mouseleave', function() {
    var someElement = $(this);
    var timeoutId = setTimeout(function() {
      someElement.find('.dropdown-menu').slideUp();
    }, 500);
    someElement.data('timeoutId', timeoutId);
  });
});
