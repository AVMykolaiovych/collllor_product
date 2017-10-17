function customCheckbox(t) {
    var e = $('input[name="' + t + '"]');
    $(e).each(function() {
        $(this).wrap("<span class='custom-checkbox'></span>"), $(this).is(":checked") && ($(this).parent().addClass("custom-checkbox--selected"), $(this).parent().parent().addClass("custom-checkbox--active"))
    }), $(e).click(function() {
        $(this).parent().toggleClass("custom-checkbox--selected"), $(this).parent().parent().toggleClass("custom-checkbox--active")
    })
}

function customCheckboxOptGroup(t) {
    var e;
    for (e = 0; e < t.inputs.length; e++) {
        var i = $(t.inputs[e]);
        0 != t.checked ? (i.parent().addClass("custom-checkbox--selected"), i.parent().parent().addClass("custom-checkbox--active")) : (i.parent().removeClass("custom-checkbox--selected"), i.parent().parent().removeClass("custom-checkbox--active"))
    }
}

function customCheckboxCheckAll(t, e) {
    var i, s = $('input[name="' + t + '"]');
    for (i = 0; i < s.length; i++) {
        var n = $(s[i]);
        e ? (n.parent().addClass("custom-checkbox--selected"), n.parent().parent().addClass("custom-checkbox--active")) : (n.parent().removeClass("custom-checkbox--selected"), n.parent().parent().removeClass("custom-checkbox--active"))
    }
}

function changeOptGroup() {
    var t = $(".ui-multiselect-optgroup");
    for (i = 0; i < t.length; i++) {
        $(t[i]).children("a").after('<span class="multiselect__span">(click to check all)</span>')
    }
}

	$(document).ready(function() {
         $(".account-payment__agree-input").labelauty(), $(".account-payment__accept-input").labelauty(), $(".account-capabilities__heading").click(function() {
            $(".account-capabilities__form").toggle("slow")
        }), $(".account-contact__heading").click(function() {
            $(".account-contact__form").toggle("slow")
        }), $(".account-password__heading").click(function() {
            $(".account-password__form").toggle("slow")
        }), $(".account-payment__heading").click(function() {
            $(".account-payment__form").toggle("slow")
        }), $(".account-verify__heading").click(function() {
            $(".account-verify__form").toggle("slow")
        }), $(".signin__memory").labelauty(), $(".user__check").labelauty(), $(".user__link").click(function() {
            $(".user__registration").toggle("slow")
        }), $(".seller-header__check-input").labelauty(), $(".seller-header__sign").on("click", function(t) {
            t.preventDefault(), $(this).parent().addClass("active"), $(this).parent().siblings().removeClass("active"), target = $(this).attr("href"), $(".seller-header__content > div").not(target).hide(), $(target).fadeIn(600)
        }), $("#state").scombobox({
            filterDelay: 300,
            highlight: !0,
            filterIgnoreCase: !0,
            fillOnTab: !0,
            showDropDown: !0,
            placeholder: " "
        }), $("#country").scombobox({
            filterDelay: 300,
            highlight: !0,
            filterIgnoreCase: !0,
            fillOnTab: !0,
            showDropDown: !0,
            placeholder: " "
        }), $(".seller-header__link").click(function() {
            var t = $(this).next();
            return t.stop().animate({
                height: "toggle"
            }, .1, "linear"), (!t.is("form") || !t.is(":visible")) && (!(!t.is("form") || !t.is(":hidden")) || void 0)
        }), $(document).click(function(t) {
            $(t.target).closest("form").length || ($(".registration").fadeOut("0.1"), t.stopPropagation())
        }), $(document).mousemove(function(t) {
            $("#blueBg").css("opacity", "" + (1 - t.pageY / 1e3))
        });
        var t = $("#seller_subcategory_capability");
        t.multiselect({
            header: !0,
            width: 466,
            maxWidth: 466,
            noneSelectedText: "Category",
            showCheckAll: !1,
            showUncheckAll: !1,
            closeIcon: "ui-multiselect-icon-closethick"
        }), changeOptGroup(), customCheckbox("multiselect_seller_subcategory_capability"), t.bind("multiselectoptgrouptoggle", function(t, e) {
            customCheckboxOptGroup(e)
        });
		
		
		
		
        var e = $(".capibil");
        e.multiselect({
            header: !0,
		}), customCheckbox("multiselect_perforation"), e.bind("multiselectcheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_perforation", !0)
        }), e.bind("multiselectuncheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_perforation", !1)
        }), 
		e.multiselect({
            header: !0,
		}), customCheckbox("multiselect_Paper Type"), e.bind("multiselectcheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_Paper Type", !0)
        }), e.bind("multiselectuncheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_Paper Type", !1)
        }), 
		e.multiselect({
            header: !0,
		}), customCheckbox("multiselect_coating"), e.bind("multiselectcheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_coating", !0)
        }), e.bind("multiselectuncheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_coating", !1)
        }), 
		e.multiselect({
            header: !0,
		}), customCheckbox("multiselect_foil"), e.bind("multiselectcheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_foil", !0)
        }), e.bind("multiselectuncheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_foil", !1)
        }), e.multiselect({
            header: !0,

        }), customCheckbox("multiselect_stamping"), e.bind("multiselectcheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_stamping", !0)
        }), e.bind("multiselectuncheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_stamping", !1)
        }), e.multiselect({
            header: !0,

        }), customCheckbox("multiselect_corners"), e.bind("multiselectcheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_corners", !0)
        }), e.bind("multiselectuncheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_corners", !1)
        }), e.multiselect({
            header: !0,

        }), customCheckbox("multiselect_numbering"), e.bind("multiselectcheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_numbering", !0)
        }), e.bind("multiselectuncheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_numbering", !1)
        }), e.multiselect({
            header: !0,

        }), customCheckbox("multiselect_shape"), e.bind("multiselectcheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_shape", !0)
        }), e.bind("multiselectuncheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_shape", !1)
        }), e.multiselect({
            header: !0,

        }), customCheckbox("multiselect_die cut"), e.bind("multiselectcheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_die cut", !0)
        }), e.bind("multiselectuncheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_die cut", !1)
        }), e.multiselect({
            header: !0,

        }), customCheckbox("multiselect_binding"), e.bind("multiselectcheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_binding", !0)
        }), e.bind("multiselectuncheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_binding", !1)
        }), e.multiselect({
            header: !0,

        }), customCheckbox("multiselect_material"), e.bind("multiselectcheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_material", !0)
        }), e.bind("multiselectuncheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_material", !1)
        }), e.multiselect({
            header: !0,

        }), customCheckbox("multiselect_mailing services"), e.bind("multiselectcheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_mailing services", !0)
        }), e.bind("multiselectuncheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_mailing services", !1)
        }), e.multiselect({
            header: !0,

        }), customCheckbox("multiselect_embossing"), e.bind("multiselectcheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_embossing", !0)
        }), e.bind("multiselectuncheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_embossing", !1)
        }),e.multiselect({
            header: !0,

        }), customCheckbox("multiselect_Raised/Flat ink"), e.bind("multiselectcheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_Raised/Flat ink", !0)
        }), e.bind("multiselectuncheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_Raised/Flat ink", !1)
        }), e.multiselect({
            header: !0,

        }), customCheckbox("multiselect_folding"), e.bind("multiselectcheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_folding", !0)
        }), e.bind("multiselectuncheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_folding", !1)
        }), e.multiselect({
            header: !0,

        }), customCheckbox("multiselect_Coating"), e.bind("multiselectcheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_Coating", !0)
        }), e.bind("multiselectuncheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_Coating", !1)
        }), e.multiselect({
            header: !0,

        }), customCheckbox("multiselect_scoring"), e.bind("multiselectcheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_scoring", !0)
        }), e.bind("multiselectuncheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_scoring", !1)
        }), e.multiselect({
            header: !0,

        }), customCheckbox("multiselect_order_quantity_capability"), e.bind("multiselectcheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_order_quantity_capability", !0)
        }), e.bind("multiselectuncheckall", function(t, e) {
            customCheckboxCheckAll("multiselect_order_quantity_capability", !1)
        }), $(".chosen-select").chosen({
            width: "100%",
            disable_search_threshold: 10
        }), $("#selectState").scombobox({
            filterDelay: 300,
            highlight: !0,
            filterIgnoreCase: !0,
            fillOnTab: !0,
            showDropDown: !0,
            placeholder: " "
        }), $("#type").scombobox({
            filterDelay: 300,
            highlight: !0,
            filterIgnoreCase: !0,
            fillOnTab: !0,
            showDropDown: !0,
            placeholder: " "
        }), $("#individual").scombobox({
            filterDelay: 300,
            highlight: !0,
            filterIgnoreCase: !0,
            fillOnTab: !0,
            showDropDown: !0,
            placeholder: " "
        }), $("#self").scombobox({
            filterDelay: 300,
            highlight: !0,
            filterIgnoreCase: !0,
            fillOnTab: !0,
            showDropDown: !0,
            placeholder: " "
        }), $("#payment_by").scombobox({
            filterDelay: 300,
            highlight: !0,
            filterIgnoreCase: !0,
            fillOnTab: !0,
            showDropDown: !0,
            placeholder: " "
        }), $("#check_country").scombobox({
            filterDelay: 300,
            highlight: !0,
            filterIgnoreCase: !0,
            fillOnTab: !0,
            showDropDown: !0,
            placeholder: " "
        }), $("#seller_tax_state").scombobox({
            filterDelay: 300,
            highlight: !0,
            filterIgnoreCase: !0,
            fillOnTab: !0,
            showDropDown: !0,
            placeholder: " "
        }), $("#originTerm").scombobox({
            filterDelay: 300,
            highlight: !0,
            filterIgnoreCase: !0,
            fillOnTab: !0,
            showDropDown: !0,
            placeholder: " "
        }), $("#selectSubCategory").scombobox({
            filterDelay: 300,
            highlight: !0,
            filterIgnoreCase: !0,
            fillOnTab: !0,
            showDropDown: !1,
            placeholder: "Sub-category"
        }), $("#selectSize").scombobox({
            filterDelay: 300,
            highlight: !0,
            filterIgnoreCase: !0,
            fillOnTab: !0,
            showDropDown: !1,
            placeholder: "Size"
        }), $("#selectMaterial").scombobox({
            filterDelay: 300,
            highlight: !0,
            filterIgnoreCase: !0,
            fillOnTab: !0,
            showDropDown: !1,
            placeholder: "Material"
        }), $("#selectFinish").scombobox({
            filterDelay: 300,
            highlight: !0,
            filterIgnoreCase: !0,
            fillOnTab: !0,
            showDropDown: !1,
            placeholder: "Finish"
        }), $("#selectMore").scombobox({
            filterDelay: 300,
            highlight: !0,
            filterIgnoreCase: !0,
            fillOnTab: !0,
            showDropDown: !1,
            placeholder: "More"
        }), $('select[name="sell[payment_by]"]').change(function() {
            var t = $(this).val();
			//alert(t);
            console.log(t), "cheque" == t && ($("#paymentpaychek").css("display", "block"), $("#paymentpaypal").css("display", "none"), $("#paymentbank").css("display", "none"), $("#paymentindividual").css("display", "none"), $("#paymentcompany").css("display", "none")), "paypal_payment" == t && ($("#paymentpaychek").css("display", "none"), $("#paymentpaypal").css("display", "block"), $("#paymentbank").css("display", "none"), $("#paymentindividual").css("display", "none"), $("#paymentcompany").css("display", "none")), "online_payment" == t && ($("#paymentpaychek").css("display", "none"), $("#paymentpaypal").css("display", "none"), $("#paymentbank").css("display", "block"), $("#paymentcompany").css("display", "block"), $("#paymentindividual").css("display", "none"))
        }), $('select[name="company"]').change(function() {
            "company" == $(this).val() ? ($("#paymentpaychek").css("display", "none"), $("#paymentpaypal").css("display", "none"), $("#paymentbank").css("display", "block"), $("#paymentcompany").css("display", "block"), $("#paymentindividual").css("display", "none")) : ($("#paymentpaychek").css("display", "none"), $("#paymentpaypal").css("display", "none"), $("#paymentbank").css("display", "block"), $("#paymentcompany").css("display", "none"), $("#paymentindividual").css("display", "block"))
        }), $(function() {
            $("#dob_day").datepicker()
        }), $(function() {
            $("#dob_month").datepicker()
        }), $(function() {
            $("#dob_year").datepicker()
        })
    });