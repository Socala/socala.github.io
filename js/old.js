$(document).ready(function() {
  alert('good to go');
  var topOfHeader = $('#special').offset().top;
  var heightOfHeader = $('#special').outerHeight();

  $(window).scroll(function() {
    //$('.navbar').animate({background: "#990000"});
    $('.navbar').css('background', '#990000');

    alert('hello');
    if ($(window).scrollTop() > (topOfHeader + heightOfHeader)) {
      $('.navbar').css('background', 'rgba(153, 0, 0 ,1)');
      alert('bye');
    } else {
      $('.navbar').css('background', 'rgba(153, 0, 0 ,0)');
      alert('bye');
    }
  });
});

$('#rotate').click(function() {

  var stylesheet = document.styleSheets[2];
  var mozRotateRule = stylesheet.cssRules[0];
  var webkitRotateRule = stylesheet.cssRules[0];
  alert(mozRotateRule.name);

  $(this).addClass('rotation');
});

/*
var rotation = 0;

jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

$('.rotate').click(function() {
  $(this).rotate('90');
});

$('.rotate').click(function() {
  alert("hi");
  if ((this).css("-moz-animation-name") == "rotate0") {
    $(this).css({"-moz-animation-name":"rotate90",
    "-webkit-animation-name":"rotate90",});
  } else if ((this).css("-moz-animation-name") == "rotate90") {
    $(this).css({"-moz-animation-name":"rotate180",
    "-webkit-animation-name":"rotate180",});
  } else if ((this).css("-moz-animation-name") == "rotate180") {
    $(this).css({"-moz-animation-name":"rotate270",
    "-webkit-animation-name":"rotate270",});
  } else {
    $(this).css({"-moz-animation-name":"rotate0",
    "-webkit-animation-name":"rotate0",});
    alert("hi");
  }

  $(this).css({
    "-moz-animation-duration":"0.8s",
    "-moz-animation-iteration-count":"1",
    "-moz-animation-fill-mode":"forwards",
    "-webkit-animation-duration":"0.8s",
    "-webkit-animation-iteration-count":"1",
    "-webkit-animation-fill-mode" : "forwards",
  });
});
*/
