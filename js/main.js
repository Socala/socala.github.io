$(document).ready(function() {
  var topOfHeader = $('#header').offset().top;
  var heightOfHeader = $('#header').outerHeight();
  if ($(window).scrollTop() > (topOfHeader + heightOfHeader - 68)) {
    $('.navbar').css('background', 'rgba(153, 0, 0 ,1)');
    $('.dropdown-menu').css('margin-top', '14px');
  } else {
    $('.navbar').css('background', 'rgba(153, 0, 0 ,0)');
    $('.dropdown-menu').css('margin-top', '-5px');
  }

  var height = $(window).height();
  $('.special').css('height', height);

  var $root = $('html, body');
  $root.animate({scrollTop: 0}, 0);
  var down = 0;

  $(window).on('scroll', function() {
    var topOfHeader = $('#header').offset().top;
    var heightOfHeader = $('#header').outerHeight();

    if ($(window).scrollTop() > (topOfHeader + heightOfHeader - 68)) {
      $('.navbar').css('background', 'rgba(153, 0, 0 ,1)');
    } else {
      $('.navbar').css('background', 'rgba(153, 0, 0 ,0)');
    }

    if ($(window).scrollTop() < (topOfHeader + heightOfHeader - 68) && down == 0) {
      //scroll down to secondary header
      $root.animate({scrollTop: topOfHeader + heightOfHeader - 67}, {queue: false, duration: 1000});
      $('.dropdown-menu').css('margin-top', '14px');
    } else if ($(window).scrollTop() < (topOfHeader + heightOfHeader - 68) && down == 1) {
      //scroll up to welcome header
      $root.animate({scrollTop: 0}, {queue: false, duration: 1000});
      $('.dropdown-menu').css('margin-top', '-5px');
    }

    if ($(window).scrollTop() >= topOfHeader + heightOfHeader - 67) {
      down = 1; //We're "down"
    } else if ($(window).scrollTop() == 0) {
      down = 0; //We're "up"
    } else {
      down = 2; //We're "in between"
    }
  });

  $('.btn-hdr').on('click', function() {
    $root.animate({scrollTop: topOfHeader + heightOfHeader - 67}, 1000);    
  });

  $('.down-arrow').on('click', function() {
    $root.animate({scrollTop: topOfHeader + heightOfHeader - 67}, 1000);    
  });

  $('.dropdown-toggle').on('mouseenter', function() {
    $(this).next().slideDown();
  });

  $('.dropdown').on('mouseleave', function() {
    $(this).find('.dropdown-menu').delay(500);
    $(this).find('.dropdown-menu').slideUp();
  });
});
