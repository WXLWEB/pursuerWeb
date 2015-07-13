$(function() {
  var ws = [];
  $('.navbar-nav li').each(function(index){
    ws[index] = $(this).outerWidth();
  });
  activeBorder = function(){
    var activeIndex = $('.navbar-nav li').index($('.navbar .active'));
    var left=0;
    for(var i =0; i<activeIndex;i++){
      left = left+ ws[i];
    }
    $('.marker').css({
      left:left,
      width:ws[activeIndex]
    });
  };
  activeBorder();
  $('.navbar-nav li a').on({
    mouseover:function(){
      index  = $(this).parent().index();
      var left=0;
      for(var i =0; i<index;i++){
        left = left+ ws[i];
      }
      $('.marker').css({
        left:left,
        width:ws[index]
      });
    },mouseout:function(){
        activeBorder();
      }
    }
  );
});
