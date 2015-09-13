$(document).ready(function(){
  overlay_width_overlay_fix();
});
$(window).resize(function(){
  overlay_width_overlay_fix();
})

var overlay_width_overlay_fix = function(){
  $('.m-2colentry--entry').each(function(){
    _width = $(this).outerWidth() - gutter*2;
    $(this).find('.m-2colentry--overlay').outerWidth(_width);
  })
}