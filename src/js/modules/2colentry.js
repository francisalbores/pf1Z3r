$(document).ready(function(){
  overlay_width_overlay_fix();
  remove_is_active_on_mobile();
});
$(window).resize(function(){
  overlay_width_overlay_fix();
  remove_is_active_on_mobile();
})

var overlay_width_overlay_fix = function(){
  $('.m-2colentry--entry').each(function(){
    _width = $(this).outerWidth() - gutter*2;
    $(this).find('.m-2colentry--overlay').outerWidth(_width);
  })
}

var remove_is_active_on_mobile = function(){
  if (Modernizr.mq('(max-width: 992px)')){
    $('.is-active').removeClass('is-active').addClass('is-desktop-active');
  }
  else{
    $('.is-desktop-active').removeClass('is-desktop-active').addClass('is-active');
  }
}