$('table').addClass('table well');

var height = parseInt($('#header').css('height'), 10)
$('body').css('padding-top', height);

adjustHeader = function () {
  var h = height - document.body.scrollTop;
  $('#header').css('height', h);
}

window.onscroll = adjustHeader
adjustHeader()

scrollToHeading = function(id) {
  var height = parseInt($('#header').css('min-height'), 10)
  scrollTo($('#'+id).offset().top - height - 10);
}

scrollTo = function(pos) {
  $('html, body').animate({
    scrollTop: pos
  }, 200); 
}

download = function(url) {
  window.location = url;
}