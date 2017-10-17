$(document).ready(function(){
 $('#mm').meanmenu({
 meanScreenWidth: "480",
/* meanMenuContainer: "div.meanm",*/
meanScreenWidth: "767",
 meanRevealPosition:"left"
 });
$('#mm2').meanmenu({
 meanScreenWidth: "480",
/* meanMenuContainer: "div.meanm",*/
meanScreenWidth: "767",
 meanRevealPosition:"left"
 });
	
	// SHADOW BLOCK
	$(function () {
       /* $('.menu__sub').mouseover(function () {
            $('.invisibly').css("display", "block");
        });
        $('.menu__sub').mouseout(function () {
            $('.invisibly').css("display", "none");
        });*/
    });
	// SHADOW BLOCK END

	//  OPEN MENU
    /* $(".header__nav-menu").click(function() {
       $(".menu__hidden").toggle('slow');
    });*/
    // OPEN MENU END
	
$('.header__category .header__category-link').hover(
  function() {
    $('.header__dropdown .top_red .header__subdropdown').show();
  },
  function() {
    $('.header__dropdown .header__dropdown-printing .header__subdropdown').css("display","none");
  }
);
$('.all_dd').hover(
  function() {
    $(this).find('.header__subdropdown').show();
  }
  ,
  function() {
    $('.header__dropdown .all_dd .header__subdropdown').css("display","none");
  }
);

});
