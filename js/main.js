$(document).ready(function() {
  var height = $(window).height();
  $('.special').css('height', height);

  if ($(window).scrollTop() > (height - 70)) {
    $('.navbar').css('background', 'rgba(153, 0, 0 ,1)');
    $('.dropdown-menu').css('margin-top', '14px');
  } else {
    $('.navbar').css('background', 'rgba(153, 0, 0 ,0)');
    $('.dropdown-menu').css('margin-top', '-5px');
  }

  var $root = $('html, body');
  $root.animate({scrollTop: 0}, 0);
  var down = 0;

  (function($,sr){
    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
    }
    // smartresize 
    jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

  })(jQuery,'smartresize');

  $(window).on('scroll', function() {
    if ($(window).scrollTop() >= (height - 70)) {
      $('.navbar').css('background', 'rgba(153, 0, 0 ,1)');
    } else {
      $('.navbar').css('background', 'rgba(153, 0, 0 ,0)');
    }

    if ($(window).scrollTop() < (height - 70) && down == 0) {
      //scroll down to secondary header
      $root.animate({scrollTop: height - 70}, {queue: false, duration: 1000});
      $('.dropdown-menu').css('margin-top', '14px');
    } else if ($(window).scrollTop() < (height - 70) && down == 1) {
      //scroll up to welcome header
      $root.animate({scrollTop: 0}, {queue: false, duration: 1000});
      $('.dropdown-menu').css('margin-top', '-5px');
    }

    if ($(window).scrollTop() >= height - 70) {
      down = 1; //We're "down"
    } else if ($(window).scrollTop() == 0) {
      down = 0; //We're "up"
    } else {
      down = 2; //We're "in between"
    }
  });

  $('.btn-hdr').on('click', function() {
    $root.animate({scrollTop: height - 70}, 1000);    
  });

  $('.down-arrow').on('click', function() {
    $root.animate({scrollTop: height - 70}, 1000);    
  });

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

  $(window).smartresize(function(){
    height = $(window).height();
    $('.special').css('height', height);    
  });


});
