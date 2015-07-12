/**
 * Created by WXL on 7/12/15.
 */
$(window).scroll(function() {
  var t = document.documentElement.scrollTop || document.body.scrollTop;
  if(t>0){
    $('.navbar').removeClass('navbar-default').addClass('navbar-default-blue');
    $('.navbar-brand').empty().append("<img class='img-responsive' src='images/public/logo2.png' style='height: 40px;'/>");
  }else{
    $('.navbar').removeClass('navbar-default-blue').addClass('navbar-default');
    $('.navbar-brand').empty().append("<span class='iconfont logo1'>&#xe60c;</span>");
  }
});
