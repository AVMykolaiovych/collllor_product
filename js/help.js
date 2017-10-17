$(document).ready(function(){

    /*Variables*/
    var helpFirst = $('.collllor__help-first');
    var helpSecond = $(".collllor__help-second");
    var helpThird = $(".collllor__help-third");
    var helpFourth = $(".collllor__help-fourth");
    var helpFifth = $(".collllor__help-fifth");
    var helpSixth = $(".collllor__help-sixth");
    var helpSeventh = $(".collllor__help-seventh");
    var helpLast = $(".collllor__help-last");
    var helpIcon = $(".collllor__help-icon");

    /*Check cookie with jquery_cookie plugin and delay on emergence of the hint*/
    setTimeout (function(){
        // Check cookie for visits
        if (!$.cookie('hideModal')) {
            // if no cookie emergence the hint with delay 1,5s
            helpFirst.css('display', 'block');
            if (helpFirst.css('display') == 'block') {
                helpIcon.css('display', 'none');
            }
        }
        $.cookie('hideModal', true, {
            // Storage time in days
            expires: 7,
            path: '/'
        });
    }, 1500);

    /*Close the hint*/
    $('.not-now, .button-last').click(function() {
        $('.collllor__help').fadeOut(100);
        helpIcon.css('display', 'block');
    });

    /*Open the hint with click help icon*/
    helpIcon.click(function() {
        helpFirst.css('display', 'block');
        if(helpFirst.css('display') == 'block') {
            helpIcon.css('display', 'none');
        }
    });

    /*Transition to the following hint*/
    $(".button-first").click(function() {
        helpSecond.css('display', 'block');
        if(helpSecond.css('display') == 'block') {
            helpFirst.css('display', 'none');
        }
    });

    /*Transition to the following hint*/
    $(".button-second").click(function() {
        helpThird.css('display', 'block');
        if(helpThird.css('display') == 'block') {
            helpSecond.css('display', 'none');
        }
    });

    /*Transition to the following hint*/
    $(".button-third").click(function() {
        helpFourth.css('display', 'block');
        if(helpFourth.css('display') == 'block') {
            helpThird.css('display', 'none');
        }
    });

    /*Transition to the following hint*/
    $(".button-fourth").click(function() {
        helpFifth.css('display', 'block');
        if(helpFifth.css('display') == 'block') {
            helpFourth.css('display', 'none');
        }
    });

    /*Transition to the following hint*/
    $(".button-fifth").click(function() {
        helpSixth.css('display', 'block');
        if(helpSixth.css('display') == 'block') {
            helpFifth.css('display', 'none');
        }
    });

    /*Transition to the following hint*/
    $(".button-sixth").click(function() {
        helpSeventh.css('display', 'block');
        if(helpSeventh.css('display') == 'block') {
            helpSixth.css('display', 'none');
        }
    });

    /*Transition to the following hint*/
    $(".button-seventh").click(function() {
        helpLast.css('display', 'block');
        if(helpLast.css('display') == 'block') {
            helpSeventh.css('display', 'none');
        }
    });

    $("[data-scroll-to]").click(function() {
        var $this = $(this),
            $toElement      = $this.attr('data-scroll-to'),
            $focusElement   = $this.attr('data-scroll-focus'),
            $offset         = $this.attr('data-scroll-offset') * 1 || 0,
            $speed          = $this.attr('data-scroll-speed') * 1 || 500;

        $('html, body').animate({
            scrollTop: $($toElement).offset().top + $offset
        }, $speed);
        console.log($($toElement).offset().top + $offset);
        if ($focusElement) $($focusElement).focus();
    });
});



