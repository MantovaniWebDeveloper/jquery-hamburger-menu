var buttonResponsive = $('#btnMR');
var buttonResponsiveClose = $('.btnClose');
var containerMenu = $('.wrapMenu');
var nav = $('.menuNav');

buttonResponsive.click(function(){
  containerMenu.removeClass('wrapMenu');
});
buttonResponsive.click(function(){
  containerMenu.addClass('apriMenu');
});
buttonResponsive.click(function(){
  nav.removeClass('menuNav');
});
buttonResponsive.click(function(){
  nav.addClass('menuNavHamuberger');
});
buttonResponsive.click(function(){
  buttonResponsiveClose.removeClass('btnClose');
});
buttonResponsive.click(function(){
  buttonResponsiveClose.addClass('btnCloseOpen');
});
buttonResponsiveClose.click(function(){
  containerMenu.removeClass('apriMenu');
});
buttonResponsiveClose.click(function(){
  containerMenu.addClass('wrapMenu');
});
buttonResponsiveClose.click(function(){
  buttonResponsiveClose.removeClass('btnCloseOpen');
});
buttonResponsiveClose.click(function(){
  buttonResponsiveClose.addClass('btnClose');
});
