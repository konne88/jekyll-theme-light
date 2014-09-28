$('table').addClass('table well');

var height = parseInt($('#header').css('height'), 10)
$('body').css('padding-top', height);

adjustHeader = function () {
  var h = height - document.body.scrollTop;
  $('#header').css('height', h);
}

window.onscroll = adjustHeader
adjustHeader()
