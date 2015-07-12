/**
 * Created by WXL on 7/11/15.
 */
  $("#banner").owlCarousel({
    autoPlay : false,
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    navigationText : ["<i class='iconfont icon-left hidden-xs'>&#xe60d</i>", "<i class='iconfont icon-right hidden-xs'>&#xe60f</i>"]

    // "singleItem:true" is a shortcut for:
    // items : 1,
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false

  });

