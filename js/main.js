var buttonResponsive = $('#btnMR');
var containerMenu = $('.wrapMenu');
var nav = $('.menuNav');

buttonResponsive.click(function(){
  containerMenu.removeClass('wrapMenu');
});
buttonResponsive.click(function(){
  containerMenu.addClass('apriMenu');
});
buttonResponsive.click(function(){
  nav.addClass('menuNavHamuberger');
});
