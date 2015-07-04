$(document).ready(function() {
  var topOfHeader = $('#header').offset().top;
  var heightOfHeader = $('#header').outerHeight();
  if ($(window).scrollTop() > (topOfHeader + heightOfHeader - 68)) {
    $('.navbar').css('background', 'rgba(153, 0, 0 ,1)');
  } else {
    $('.navbar').css('background', 'rgba(153, 0, 0 ,0)');
  }

  $(window).on('scroll', function() {
    if ($(window).scrollTop() > (topOfHeader + heightOfHeader - 68)) {
      $('.navbar').css('background', 'rgba(153, 0, 0 ,1)');
    } else {
      $('.navbar').css('background', 'rgba(153, 0, 0 ,0)');
    }

  $('.btn').on('click', function() {
    alert($(window).scrollTop());
    alert(topOfHeader + heightOfHeader);
  });

  });
});
