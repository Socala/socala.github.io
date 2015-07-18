$(document).ready(function() {
  var topOfHeader = $('#header').offset().top;
  var heightOfHeader = $('#header').outerHeight();
  if ($(window).scrollTop() > (topOfHeader + heightOfHeader - 68)) {
    $('.navbar').css('background', 'rgba(153, 0, 0 ,1)');
  } else {
    $('.navbar').css('background', 'rgba(153, 0, 0 ,0)');
  }

  prevScrollTop = $(window).scrollTop();
  var $root = $('html, body');
  $root.animate({scrollTop: 0}, 0);
  var down = 0;

  $(window).on('scroll', function() {
    if ($(window).scrollTop() > (topOfHeader + heightOfHeader - 68)) {
      $('.navbar').css('background', 'rgba(153, 0, 0 ,1)');
    } else {
      $('.navbar').css('background', 'rgba(153, 0, 0 ,0)');
    }

    var newScrollTop = $(window).scrollTop();
    if ($(window).scrollTop() < (topOfHeader + heightOfHeader - 68) && $(window).scrollTop() > 0 && newScrollTop > prevScrollTop) {
      //scroll down to secondary header
      //newScrollTop = topOfHeader + heightOfHeader - 67;
      //alert('hi');
      $root.animate({scrollTop: topOfHeader + heightOfHeader - 67}, 1000);
    } else if ($(window).scrollTop() < (topOfHeader + heightOfHeader - 68) && $(window).scrollTop() > 0 && newScrollTop < prevScrollTop) {
      //scroll up to welcome header
      //newScrollTop = 0;
      //alert('bye');
      $root.animate({scrollTop: 0}, 1000);

    } else if ($(window).scrollTop() > (topOfHeader + heightOfHeader - 66)) { 
      //act like a normal website
      //alert('ayyyy');
      newScrollTop = $(window).scrollTop();
      $root.css({scrollTop: $(window).scrollTop()});
    }
    prevScrollTop = newScrollTop;
  });

  $('.btn').on('click', function() {
    alert(newScrollTop);
  });
});
