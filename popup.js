$(window).click(function(e) {
  $(".popup").css({left: e.pageX});
  $(".popup").css({top: e.pageY});
  $(".popup").show();
});
