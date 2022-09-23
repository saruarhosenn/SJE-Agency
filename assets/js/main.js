(function ($) {
  "use strict";
  /* ======= Sticky Menu ======= */
  var windows = $(window);
  var sticky = $(".header-sticky");
  windows.on("scroll", function () {
    var scroll = windows.scrollTop();
    if (scroll < 200) {
      sticky.removeClass("stick");
    } else {
      sticky.addClass("stick");
    }
  });

  /* ====== Open Mobile Menu ====== */
  $(".menu-show-btn").click(function () {
    $(".main-menu").addClass("navBar show-menu");
  });
  $(".menu-hide-btn").click(function () {
    $(".main-menu").removeClass("navBar show-menu");
  });

  /*====== One Page nav ======*/
	$('#one-page-nav').onePageNav()
})(jQuery);
