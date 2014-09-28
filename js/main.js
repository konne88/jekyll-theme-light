$('table').addClass('table well');

var height = 250;
// var width = 300;

adjustHeader = function () {
  var h = height- document.body.scrollTop;
  $('#header').css('height', h);
  $('#logo').css('height', h);

//  var w = $(window).width() - width;
//  $('#name').css('width', w);
}


window.onscroll = adjustHeader
window.onresize = adjustHeader
adjustHeader()

$('body').css('padding-top', height);
