/**
 * Created by WXL on 7/12/15.
 */
$(function(){
  var tophtml="<div id=\"izl_rmenu\" class=\"izl-rmenu\">" +
    "<div class=\"btn btn-top\">" +
    "<i class=\"iconfont iconTop\">&#xe60e;</i>" +
    "</div>" +
    "</div>";
  $("#top").html(tophtml);
  $(".btn-top").click(function(){
    $("html, body").animate({
      "scroll-top":0
    },"fast");
  });
  $(".btn-top").on({
    mouseover:function(){
      $('.iconTop').replaceWith(
        "<i class=\"iconTopword\">返回</i>"
      );
    },mouseout:function(){
      $('.iconTopword').replaceWith(
        "<i class=\"iconfont iconTop\">&#xe60e;</i>"
      )}
  });
  var lastRmenuStatus=false;
  $(window).scroll(function(){//bug
    var _top=$(window).scrollTop();
    if(_top>200){
      $("#izl_rmenu").data("expanded",true);
    }else{
      $("#izl_rmenu").data("expanded",false);
    }
    if($("#izl_rmenu").data("expanded")!=lastRmenuStatus){
      lastRmenuStatus=$("#izl_rmenu").data("expanded");
      if(lastRmenuStatus){
        $("#izl_rmenu .btn-top").slideDown();
      }else{
        $("#izl_rmenu .btn-top").slideUp();
      }
    }
  });
});
