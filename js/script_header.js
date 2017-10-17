$(function () {
    /*nav*/
	/*var hh_nav = $(".show_sub_menu").height();
	alert(hh_nav);*/
    $(".nav_wrap").css({"min-height": $(".nav_wrap").height()});
    $(".header .nav_icon").hover(function () {
        $(".nav_wrap").find("a").first().siblings("ul").addClass("show_sub_menu");
        subNavHeight();
    });
    function subNavHeight() {
        var subNav = $(".show_sub_menu").outerHeight();
        $(".nav_wrap").outerHeight(subNav);
    }

    $(".nav_wrap .left_nav>ul>li>a").hover(function () {
        $(".nav_wrap").find(".show_sub_menu").removeClass("show_sub_menu");
        $(this).siblings("ul").addClass("show_sub_menu");
        subNavHeight();
    });
    $(".nav_wrap").mouseleave(function () {
       // $(this).css({"height": "auto"});
	   $(this).css({"height": hh_nav});
    });
    /*end of nav*/
    $(window).scroll(function () {
        if ($(this).scrollTop() >= $(".main_section").height()) {
            $(".fixed_header").addClass("fixed");
        }
        else {
            $(".fixed_header").removeClass("fixed");
        }
    });

    $(".main_section .input_wrap input").focusin(function () {
        $(".main_section .placeholder").hide();
    });
    $(".main_section .input_wrap input").focusout(function () {
        if ($(this).val() === "") {
            $(".main_section .placeholder").show();
        }
    });

    $(".main_section .why_color").click(function () {
        $('html,body').animate({scrollTop: $(".main_section").height()}, 500);
    });

    function firstSectionHeight() {
        var video = $(".main_section .video");
        $(".main_section").height($(window).height());
        video.css({"left": -(video.width() - $(window).width()) / 2});

    }

    firstSectionHeight();
    $(window).resize(firstSectionHeight);
    $(".choice_section .choice_wrap").click(function () {
        $(this).toggleClass("roll_down");
        return false;
    });
   // $('.animate_selector').appear();
    $(".animate_selector").on('appear', function (event, $all_appeared_elements) {
        $(this).addClass("animate");
    });
});