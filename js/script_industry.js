$(function () {
    /*******************************/
    // slider

    function lgSlider() {
        var itemWidth = $(".lg_slider .slider_item").width();
        var activeIndex = $(".slider_section li.active").index();
        $(".lg_slider").css({"left": -(activeIndex) * itemWidth});
    }

    lgSlider();
    $(".slider_section .slider_nav li").hover(function () {
        $(this).addClass("active").siblings("li").removeClass("active");
        lgSlider();
    });
    $(window).resize(lgSlider);

    // end of slider
    /*******************************/
    // animate
    $('.animate_elector').appear();
    $(".animate_elector").on('appear', function (event, $all_appeared_elements) {
        $(this).addClass("animate");
    });
    //end of  animate
    /*******************************/

    //modal
    $(".modal_open_btn").click(function () {
        $(".order_modal_wrap").addClass("modla_is_open");
        return false;
    });
    $(".close_order_modal").click(function () {
        $(".order_modal_wrap").removeClass("modla_is_open");
    });


});


