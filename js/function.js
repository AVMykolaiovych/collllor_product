/**********************************************************************************************
 function.js Created by Subhasish Nag 6th February 2005
 **********************************************************************************************/
function setCheckBox(theForm, theStatus) {
    var sus = eval("window.document." + theForm + ".elements.length");
    for (j = 0; j < sus; j++) {
        if (eval("window.document." + theForm + ".elements[" + j + "].type") == "checkbox") {
            eval("window.document." + theForm + ".elements[" + j + "].checked=" + theStatus);
        }
    }
}
function getDeleteConfirm(theURL, theValue, theMsg) {
    var str = "Are you sure you want to delete this " + theMsg + " : " + theValue + " ?    ";
    choice = confirm(str);
    if (choice) {
        window.location.href = theURL;
    } else {
        return false;
    }
}

function CheckFileField(theForm, theElement, theValue) {
    var fileVal = eval("window.document." + theForm + "." + theElement + ".value");
    if (fileVal == "") {
        alert("Please provide a " + theValue + " Image    ");
        eval("window.document." + theForm + "." + theElement + ".focus()");
        return false;
    }
    var ext = fileVal.substr(fileVal.lastIndexOf(".")).toLowerCase();
    if (ext != ".gif" && ext != ".jpeg" && ext != ".png" && ext != ".jpg") {
        alert("Image file should be .gif or .png or .jpeg format    ");
        eval("window.document." + theForm + "." + theElement + ".focus()");
        eval("window.document." + theForm + "." + theElement + ".select()");
        return false;
    }
}

function CheckAttachment(theForm, theElement) {
    var fileVal = eval("window.document." + theForm + "." + theElement + ".value");
    var ext = fileVal.substr(fileVal.lastIndexOf(".")).toLowerCase();
    if (ext == ".exe") {
        alert("EXE attachment not allowed    ");
        eval("window.document." + theForm + "." + theElement + ".focus()");
        eval("window.document." + theForm + "." + theElement + ".select()");
        return false;
    }
}

function isEmpty(theForm, theElement, theMess) {
    var str = eval("window.document." + theForm + "." + theElement + ".value");
    if (str == "") {
        alert("" + theMess + " should not be empty    ");
        eval("window.document." + theForm + "." + theElement + ".focus()");
        return false;
    }
}

function isPassword(theForm, theElement, theMess) {
    var str = eval("window.document." + theForm + "." + theElement + ".value");
    if (str == "") {
        alert("" + theMess + " should not be empty    ");
        eval("window.document." + theForm + "." + theElement + ".focus()");
        return false;
    }
    if (str.length < 6) {
        alert("" + theMess + " should not be less than six characters    ");
        eval("window.document." + theForm + "." + theElement + ".focus()");
        return false;
    }
}

function IsNumeric(theForm, theElement, theMess) {
    var str = eval("window.document." + theForm + "." + theElement + ".value");
    if (str == "") {
        alert("" + theMess + " should not be empty    ");
        eval("window.document." + theForm + "." + theElement + ".focus()");
        return false;
    }
    if (isNaN(str) == true || parseInt(str) <= 0) {
        alert("" + theMess + " should not be alpha numeric and always greater than Zero    ");
        eval("window.document." + theForm + "." + theElement + ".focus()");
        eval("window.document." + theForm + "." + theElement + ".select()");
        return false;
    }
}

function isEmail(theForm, theElement, theMess) {
    var str = eval("window.document." + theForm + "." + theElement + ".value");
    if (str == "") {
        alert("" + theMess + " should not be empty !!! Please provide a valid email address    ");
        eval("window.document." + theForm + "." + theElement + ".focus()");
        return false;
    }
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (re.test(str) == false) {
        alert("That is not a valid Email address. Please enter again.    ");
        eval("window.document." + theForm + "." + theElement + ".focus()");
        eval("window.document." + theForm + "." + theElement + ".select()");
        return false;
    }
}

function isPhone(theForm, theElement, theMess) {
    var str = eval("window.document." + theForm + "." + theElement + ".value");
    if (str == "") {
        alert("" + theMess + " should not be empty !!! Please provide a valid phone number    ");
        eval("window.document." + theForm + "." + theElement + ".focus()");
        return false;
    }
    var re = /^\(?[2-9]\d{2}[\)\.-]?\s?\d{3}[\s\.-]?\d{4}$/;
    if (re.test(str) == false) {
        alert("That is not a valid phone number. Please enter again.    ");
        eval("window.document." + theForm + "." + theElement + ".focus()");
        eval("window.document." + theForm + "." + theElement + ".select()");
        return false;
    }
}

function isURL(theForm, theElement, theMess) {
    var str = eval("window.document." + theForm + "." + theElement + ".value");
    if (str == "") {
        alert("" + theMess + " should not be empty !!! Please provide a valid website url    ");
        eval("window.document." + theForm + "." + theElement + ".focus()");
        return false;
    }
    var re = /^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/;
    if (re.test(str) == false) {
        alert("That is not a valid website address. Please enter again.    ");
        eval("window.document." + theForm + "." + theElement + ".focus()");
        eval("window.document." + theForm + "." + theElement + ".select()");
        return false;
    }
}
function isSpecialChar(theForm, theElement, theMsg) {
    var iChars = "!@#$%^&*~`()+=[]\\\';,/{}|\":<>?";
    for (var i = 0; i < eval("window.document." + theForm + "." + theElement + ".value.length"); i++) {
        if (iChars.indexOf(eval("window.document." + theForm + "." + theElement + ".value.charAt(" + i + ")")) != -1) {
            alert(theMsg);
            eval("window.document." + theForm + "." + theElement + ".focus()");
            eval("window.document." + theForm + "." + theElement + ".select()");
            return false;
        }
    }
}
function setCombo(theForm, theElement, theMess) {
    var str = eval("window.document." + theForm + "." + theElement + ".selectedIndex");
    if (str == 0) {
        alert("Please select a value for " + theMess + "    ");
        eval("window.document." + theForm + "." + theElement + ".focus()");
        return false
    }
}
function _doPagination(page, query) {
    var d = window.document;
    var str = d.getElementById('cmbPage')[d.getElementById('cmbPage').selectedIndex].value;
    if (query == "") {
        window.location.href = page + "?page=" + str;
    } else {
        window.location.href = page + "?page=" + str + "&" + query;
    }
}
function _doPaging(param, pWebsite, pCategory, pPage, pRecord) {
    var d = window.document;
    if (param == "record") {
        var str = d.getElementById('cRecord')[d.getElementById('cRecord').selectedIndex].value;
        var goto = pWebsite + "/portfolio/" + pCategory + "/" + pPage + "/" + str + ".xml";
    } else if (param == "category") {
        var str = d.getElementById('cCategory')[d.getElementById('cCategory').selectedIndex].value;
        var goto = pWebsite + "/portfolio/" + str + "/1/" + pRecord + ".xml";
    } else {
        var str = d.getElementById('cPage')[d.getElementById('cPage').selectedIndex].value;
        var goto = pWebsite + "/portfolio/" + pCategory + "/" + str + "/" + pRecord + ".xml";
    }
    window.location.href = goto;
}
function LoadPopup(getFileName, getWindowName, getHeight, getWidth) {
    var _file = getFileName;
    var _window = getWindowName;
    var _toolbar = 0;
    var _menubar = 0;
    var _status = 1;
    var _resizable = 1;
    var _width = getWidth;
    var _height = getHeight;
    var _top = (screen.height - _height) / 2;
    var _left = (screen.width - _width) / 2;
    var _scrollbars = 1;

    var _condition = "toolbar=" + _toolbar + ",menubar=" + _menubar + ",status=" + _status + ",resizable=" + _resizable;
    _condition += ",width=" + _width + ",height=" + _height + ",left=" + _left + ",top=" + _top + ",scrollbars=" + _scrollbars + "";

    window.open(_file, _window, _condition);
}
function _doInputNumberOnly() {
    if (event.keyCode < 46 || event.keyCode > 57) {
        event.returnValue = false;
    }
}
function modelessDialogShow(url, width, height) {
    window.showModelessDialog(url, window, "dialogWidth:" + width + "px;dialogHeight:" + height + "px;edge:Raised;center:1;help:0;resizable:1;");
}
function modalDialogShow(url, width, height) {
    window.showModalDialog(url, window, "dialogWidth:" + width + "px;dialogHeight:" + height + "px;edge:Raised;center:1;help:0;resizable:1;maximize:1");
}
function setImageClass(cId, cClassName) {
    window.document.getElementById(cId).className = cClassName;
}