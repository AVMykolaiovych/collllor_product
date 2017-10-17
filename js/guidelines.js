	
function openTab(e, s) {
    var t, l, n;
    if (screen.width >= 991 && $(window).width() >= 991) {
        for (l = document.getElementsByClassName("tab-content__item"), t = 0; t < l.length; t++) l[t].style.display = "none";
        for (n = document.getElementsByClassName("tabs__btn"), t = 0; t < n.length; t++) n[t].className = n[t].className.replace(" tabs__btn--active", "")
    }
    "block" == document.getElementById(s).style.display ? (document.getElementById(s).style.display = "none", e.currentTarget.className = "tabs__btn hidden-md hidden-lg") : (document.getElementById(s).style.display = "block", e.currentTarget.className += " tabs__btn--active"), slideIndex = 1, showSlides(1, s)
}

function plusSlides(e, s) {
    showSlides(slideIndex += e, s)
}

function currentSlide(e, s) {
    showSlides(slideIndex = e, s)
}

function showSlides(e, s) {
    var t, l = document.getElementById(s),
        n = l.getElementsByClassName("slider"),
        a = l.getElementsByClassName("slider__dots-btn");
    for (e > n.length && (slideIndex = 1), e < 1 && (slideIndex = n.length), t = 0; t < n.length; t++) n[t].style.display = "none";
    for (t = 0; t < a.length; t++) a[t].className = a[t].className.replace(" slider__dots-btn--active", ""), a[t].getElementsByClassName("slider__dots-number")[0].className = a[t].getElementsByClassName("slider__dots-number")[0].className.replace(" slider__dots-number--active", "");
    checkDisplay(slideIndex, l), n[slideIndex - 1].style.display = "block", a[slideIndex - 1].className += " slider__dots-btn--active", a[slideIndex - 1].getElementsByClassName("slider__dots-number")[0].className += " slider__dots-number--active"
}

function checkDisplay(e, s) {
    var t = s.getElementsByClassName("slider__prev"),
        l = s.getElementsByClassName("slider__next"),
        n = s.getElementsByClassName("slider").length;
    1 == e ? (t[0].style.display = "none", l[0].style.display = "block") : e == n ? (t[0].style.display = "block", l[0].style.display = "none") : (t[0].style.display = "block", l[0].style.display = "block")
}
var slideIndex = 1;
$(document).ready(function() {
    $("#Profile").css("display", "block"), showSlides(1, "Profile")
}), $(window).resize(function() {
    for (tabContentItem = document.getElementsByClassName("tab-content__item"), i = 0; i < tabContentItem.length; i++) tabContentItem[i].style.display = "none";
    for (tabBtn = document.getElementsByClassName("tabs__btn"), i = 0; i < tabBtn.length; i++) tabBtn[i].className = tabBtn[i].className.replace(" tabs__btn--active", "");
    $("#Profile").css("display", "block")
});