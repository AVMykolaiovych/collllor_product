// JavaScript Document
function __doValidate(ParamArray) {
    var GlobalArray = new Array();
    if (isArray(ParamArray) == true) {
        for (var i = 0; i < ParamArray.length; i++) {
            var ArrayString = ParamArray[i];
            // Spit for Seperation
            var detail = ArrayString.split(",");

            switch (detail[3]) {
                case "isEmpty":
                    if (isEmpty(detail[0], detail[1], detail[2]) == false) {
                        GlobalArray[i] = "error";
                    }
                    break;
                case "isCvvNumber":
                    if (isCvvNumber(detail[0], detail[1], detail[2]) == false) {
                        GlobalArray[i] = "error";
                    }
                    break;
                case "isPassword":
                    if (isPassword(detail[0], detail[1], detail[2]) == false) {
                        GlobalArray[i] = "error";
                    }
                    break;
                case "isConfirmPassword":
                    if (isConfirmPassword(detail[0], detail[1], detail[2], detail[4]) == false) {
                        GlobalArray[i] = "error";
                    }
                    break;
                case "isEmail":
                    if (isEmail(detail[0], detail[1], detail[2]) == false) {
                        GlobalArray[i] = "error";
                    }
                    break;
                case "isPhone":
                    if (isPhone(detail[0], detail[1], detail[2]) == false) {
                        GlobalArray[i] = "error";
                    }
                    break;
                case "isURL":
                    if (isURL(detail[0], detail[1], detail[2]) == false) {
                        GlobalArray[i] = "error";
                    }
                    break;
                case "setCombo":
                    if (setCombo(detail[0], detail[1], detail[2]) == false) {
                        GlobalArray[i] = "error";
                    }
                    break;
                case "setMultipleCombo":
                    if (setMultipleCombo(detail[0], detail[1], detail[2]) == false) {
                        GlobalArray[i] = "error";
                    }
                    break;
                case "CheckAttachment":
                    if (CheckAttachment(detail[0], detail[1], detail[2]) == false) {
                        GlobalArray[i] = "error";
                    }
                    break;
                case "isImage":
                    if (isImage(detail[0], detail[1], detail[2]) == false) {
                        GlobalArray[i] = "error";
                    }
                    break;
                case "isResume":
                    if (isResume(detail[0], detail[1], detail[2]) == false) {
                        GlobalArray[i] = "error";
                    }
                    break;
                case "isTicketAttachment":
                    if (isTicketAttachment(detail[0], detail[1], detail[2]) == false) {
                        GlobalArray[i] = "error";
                    }
                    break;
                case "isLogo":
                    if (isLogo(detail[0], detail[1], detail[2]) == false) {
                        GlobalArray[i] = "error";
                    }
                    break;
                case "isEmptyRadio":
                    if (isEmptyRadio(detail[0], detail[1], detail[2]) == false) {
                        GlobalArray[i] = "error";
                    }
                    break;
                case "isEmptyCheck":
                    if (isEmptyCheck(detail[0], detail[1], detail[2], detail[4]) == false) {
                        GlobalArray[i] = "error";
                    }
                    break;
                case "isMobile":
                    if (isMobile(detail[0], detail[1], detail[2], detail[4]) == false) {
                        GlobalArray[i] = "error";
                    }
                    break;
                /*case "isOtherPhone":
                 if(isOtherPhone(detail[0],detail[1],detail[2],detail[4])==false) {
                 GlobalArray[i] = "error";
                 }
                 case "isOtherMobile":
                 if(isOtherMobile(detail[0],detail[1],detail[2],detail[4])==false) {
                 GlobalArray[i] = "error";
                 }*/
            }
        }


        //	alert(GlobalArray)
        //	alert(GlobalArray.length)

        if (GlobalArray.length > 0) {
            return false;
        } else {
            return true;
        }
    } else {
        alert("Something Wrong into the Array    ");
        return false;
    }
}

function isArray(obj) {
    if (obj.constructor.toString().indexOf("Array") == -1) {
        return false;
    } else {
        return true;
    }
}

function isEmpty(controlId, theElement, theMess) {
    var d = window.document;
    var str = d.getElementById(controlId).value;

    if (str == "") {
        d.getElementById(theElement).className = "required";
        d.getElementById(theElement).innerHTML = theMess;
        return false;
    } else {
        d.getElementById(theElement).className = "normal";
        d.getElementById(theElement).innerHTML = "&nbsp;";
        return true;
    }
}


function isCvvNumber(controlId, theElement, theMess) {

    var d = window.document;
    var str = d.getElementById(controlId).value;
    str = str.replace(/^\s+|\s+$/g, "");
    if (str == "") {
        d.getElementById(theElement).className = "required";
        d.getElementById(theElement).innerHTML = theMess;
        return false;
    } else if (str != "") {
        if (!isValid(str, "numeric")) {
            d.getElementById(theElement).className = "required";
            d.getElementById(theElement).innerHTML = "Please enter digits only";
            d.getElementById(controlId).focus();
            return false;
        } else if (str.length != 3) {
            d.getElementById(theElement).className = "required";
            d.getElementById(theElement).innerHTML = "Please enter your 3 digit Cvv number";
            d.getElementById(controlId).focus();
            return false
        } else {
            d.getElementById(theElement).className = "normal";
            d.getElementById(theElement).innerHTML = "&nbsp;";
            return true;
        }
    }
}

function CheckAttachment(controlId, theElement, theMess) {
    var d = window.document;
    var fileVal = d.getElementById(controlId).value;
    if (fileVal != "") {
        var ext = fileVal.substr(fileVal.lastIndexOf(".")).toLowerCase();
        if (ext == ".exe") {
            d.getElementById(theElement).className = "required";
            d.getElementById(theElement).innerHTML = "EXE attachment not allowed";
            return false;
        }
    } else {
        return true;
    }
}

function isImage(controlId, theElement, theMess) {
    var d = window.document;
    var fileVal = d.getElementById(controlId).value;
    if (fileVal == "") {
        d.getElementById(theElement).className = "required";
        d.getElementById(theElement).innerHTML = theMess;
        return false;
    } else {
        var ext = fileVal.substr(fileVal.lastIndexOf(".")).toLowerCase();
        if (ext != ".jpg" && ext != ".jpeg" && ext != ".gif" && ext != ".png") {
            d.getElementById(theElement).className = "required";
            d.getElementById(theElement).innerHTML = "Only image file allowed";
            return false;
        } else {
            d.getElementById(theElement).className = "normal";
            d.getElementById(theElement).innerHTML = "&nbsp;";
            return true;
        }
    }
}

function isResume(controlId, theElement, theMess) {
    var d = window.document;
    var fileVal = d.getElementById(controlId).value;
    if (fileVal == "") {
        d.getElementById(theElement).className = "required";
        d.getElementById(theElement).innerHTML = theMess;
        return false;
    } else {
        var ext = fileVal.substr(fileVal.lastIndexOf(".")).toLowerCase();
        if (ext != ".doc" && ext != ".docx" && ext != ".txt" && ext != ".pdf") {
            d.getElementById(theElement).className = "required";
            d.getElementById(theElement).innerHTML = "Only doc, docx, txt and pdf file allowed";
            return false;
        } else {
            d.getElementById(theElement).className = "normal";
            d.getElementById(theElement).innerHTML = "&nbsp;";
            return true;
        }
    }
}

function isTicketAttachment(controlId, theElement, theMess) {
    var d = window.document;
    var fileVal = d.getElementById(controlId).value;
    if (fileVal == "") {
        d.getElementById(theElement).className = "required";
        d.getElementById(theElement).innerHTML = theMess;
        return false;
    } else {
        var ext = fileVal.substr(fileVal.lastIndexOf(".")).toLowerCase();
        if (ext != ".doc" && ext != ".docx" && ext != ".txt" && ext != ".pdf" && ext != ".xls" && ext != ".xlsx" && ext != ".zip") {
            d.getElementById(theElement).className = "required";
            d.getElementById(theElement).innerHTML = "Only doc, docx, xls, xlsx, txt, pdf and zip file allowed";
            return false;
        } else {
            d.getElementById(theElement).className = "normal";
            d.getElementById(theElement).innerHTML = "&nbsp;";
            return true;
        }
    }
}

function isPassword(controlId, theElement, theMess) {
    var d = window.document;
    var str = d.getElementById(controlId).value;
    if (str == "") {
        d.getElementById(theElement).className = "required";
        d.getElementById(theElement).innerHTML = theMess;
        return false;
    } else {
        if (str.length < 6) {
            d.getElementById(theElement).className = "required";
            d.getElementById(theElement).innerHTML = "Required at least six characters";
            return false;
        } else {
            d.getElementById(theElement).className = "normal";
            d.getElementById(theElement).innerHTML = "&nbsp;";
            return true;
        }
    }
}


function isConfirmPassword(controlId, controlId2, theElement, theMess) {
    var d = window.document;
    var str = d.getElementById(controlId).value;
    var str2 = d.getElementById(controlId2).value;

    if (str == "") {
        d.getElementById(theElement).className = "required";
        d.getElementById(theElement).innerHTML = "retype password";
        return false;
    } else {
        if (str != str2) {
            d.getElementById(theElement).className = "required";
            d.getElementById(theElement).innerHTML = "Password and confirm password does not match";
            return false;
        } else {
            d.getElementById(theElement).className = "normal";
            d.getElementById(theElement).innerHTML = "&nbsp;";
            return true;
        }
    }
}

function isEmail(controlId, theElement, theMess) {
    var d = window.document;
    var str = d.getElementById(controlId).value;
    if (str == "") {
        d.getElementById(theElement).className = "required";
        d.getElementById(theElement).innerHTML = theMess;
        return false;
    } else {
        var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
        if (re.test(str) == false) {
            d.getElementById(theElement).className = "required";
            d.getElementById(theElement).innerHTML = "Invalid Email Format";
            return false;
        } else {
            d.getElementById(theElement).className = "normal";
            d.getElementById(theElement).innerHTML = "&nbsp;";
            return true;
        }
    }
}

function isPhone(controlId, theElement, theMess) {
    var d = window.document;
    var str = d.getElementById(controlId).value;
    str = str.replace(/^\s+|\s+$/g, "");

    if (str == "") {
        d.getElementById(theElement).className = "required";
        d.getElementById(theElement).innerHTML = theMess;
        return false;
    } else if (str != "") {
        if (!isValid(str, "numeric")) {
            d.getElementById(theElement).className = "required";
            d.getElementById(theElement).innerHTML = "Please enter numbers only";
            d.getElementById(controlId).focus();
            return false;
        } else if (str.length < 10 || str.length > 10) {
            d.getElementById(theElement).className = "required";
            d.getElementById(theElement).innerHTML = "Please enter valid Phone number";
            d.getElementById(controlId).focus();
            return false
        } else {
            d.getElementById(theElement).className = "normal";
            d.getElementById(theElement).innerHTML = "&nbsp;";
            return true;
        }
    }
}
/*function isOtherPhone(controlId,theElement,theMess) {
 var d = window.document;
 var str = d.getElementById(controlId).value;
 str=str.replace(/^\s+|\s+$/g,"");
 if(str!="") {
 if(!isValid(str,"numeric")){
 d.getElementById(theElement).className = "required";
 d.getElementById(theElement).innerHTML = "Please enter numbers only";
 d.getElementById(controlId).focus();
 return false;
 } else if(str.length<8||str.length>8){
 d.getElementById(theElement).className = "required";
 d.getElementById(theElement).innerHTML = "Please enter valid Phone number";
 d.getElementById(controlId).focus();
 return false
 }else {
 d.getElementById(theElement).className = "normal";
 d.getElementById(theElement).innerHTML = "&nbsp;";
 return true;
 }
 }
 }
 */
function isMobile(controlId, theElement, theMess) {
    var d = window.document;
    var str = d.getElementById(controlId).value;
    str = str.replace(/^\s+|\s+$/g, "");
    var e = str.charAt(0);

    if (str == "") {
        d.getElementById(theElement).className = "required";
        d.getElementById(theElement).innerHTML = theMess;
        return false;
    } else if (str != "") {
        /*alert(str.length);*/
        if (!isValid(str, "numeric")) {
            d.getElementById(theElement).className = "required";
            d.getElementById(theElement).innerHTML = "Please enter numbers only";
            d.getElementById(controlId).focus();
            return false;
        } else if (str.length < 10 || str.length > 10) {
            d.getElementById(theElement).className = "required";
            d.getElementById(theElement).innerHTML = "Please enter your 10 digit mobile number.";
            d.getElementById(controlId).focus();
            return false
        } else if (e != 9 && e != 8 && e != 7) {
            d.getElementById(theElement).className = "required";
            d.getElementById(theElement).innerHTML = "Please enter a valid mobile number.";
            d.getElementById(controlId).focus();
            return false
        } else {
            d.getElementById(theElement).className = "normal";
            d.getElementById(theElement).innerHTML = "&nbsp;";
            return true;
        }
    }
}
/*function isOtherMobile(controlId,theElement,theMess) {
 var d = window.document;
 var str = d.getElementById(controlId).value;
 str=str.replace(/^\s+|\s+$/g,"");
 var e=str.charAt(0);

 if(str!="") {
 if(!isValid(str,"numeric")){
 d.getElementById(theElement).className = "required";
 d.getElementById(theElement).innerHTML = "Please enter numbers only";
 d.getElementById(controlId).focus();
 return false;
 } else if(str.length<10||str.length>10){
 d.getElementById(theElement).className = "required";
 d.getElementById(theElement).innerHTML = "Please enter your 10 digit mobile number.";
 d.getElementById(controlId).focus();
 return false
 } else if(e!=9&&e!=8&&e!=7){
 d.getElementById(theElement).className = "required";
 d.getElementById(theElement).innerHTML = "Please enter a valid mobile number.";
 d.getElementById(controlId).focus();
 return false
 }
 }else {
 d.getElementById(theElement).className = "normal";
 d.getElementById(theElement).innerHTML = "&nbsp;";
 return true;
 }
 }
 */
function isValid(str, a) {
    switch (a) {
        case"numeric":
            return /^[0-9]*$/.test(str)
    }
}
function isURL(controlId, theElement, theMess) {
    var d = window.document;
    var str = d.getElementById(controlId).value;
    if (str == "") {
        d.getElementById(theElement).className = "required";
        d.getElementById(theElement).innerHTML = theMess;
        return false;
    } else {
        var re = /^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/;
        if (re.test(str) == false) {
            d.getElementById(theElement).className = "required";
            d.getElementById(theElement).innerHTML = "Invalid Website URL Format";
            return false;
        } else {
            d.getElementById(theElement).className = "normal";
            d.getElementById(theElement).innerHTML = "&nbsp;";
            return true;
        }
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

function setCombo(controlId, theElement, theMess) {
    var d = window.document;
    var str = d.getElementById(controlId).selectedIndex;
    //alert(str);
    if (str == 0) {
        d.getElementById(theElement).className = "required";
        d.getElementById(theElement).innerHTML = theMess;
        return false;
    } else {
        d.getElementById(theElement).className = "normal";
        d.getElementById(theElement).innerHTML = "&nbsp;";
        return true;
    }
}

function setMultipleCombo(controlId, theElement, theMess) {
    var d = window.document;
    var str = d.getElementById(controlId).selectedIndex;
    if (str == -1) {
        d.getElementById(theElement).className = "required";
        d.getElementById(theElement).innerHTML = theMess;
        return false;
    } else {
        d.getElementById(theElement).className = "normal";
        d.getElementById(theElement).innerHTML = "&nbsp;";
        return true;
    }
}

function SetClassNormal(theElement) {
    window.document.getElementById(theElement).className = "normal";
    window.document.getElementById(theElement).innerHTML = "&nbsp;";
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

function _doPagination(page, query) {
    var d = window.document;
    var str = d.getElementById('cmbPage')[d.getElementById('cmbPage').selectedIndex].value;
    if (query == "") {
        window.location.href = page + "?page=" + str;
    } else {
        window.location.href = page + "?page=" + str + "&" + query;
    }
}

function Filter4Characters(evt) {
    if (navigator.appName.indexOf('Microsoft') != -1) {
        if (event.keyCode < 46 || event.keyCode > 57) {
            event.returnValue = false;
        }
    } else {
        if (evt.charCode && (evt.charCode < 46 || evt.charCode > 57)) {
            if (evt.preventDefault) {
                evt.preventDefault();
            }
        }
    }
}

function init(ID) {
    if (navigator.appName.indexOf('Microsoft') != -1) {
        document.getElementById(ID).onkeypress = Filter4Characters;
    } else {
        document.getElementById(ID).addEventListener("keypress", Filter4Characters, true);
    }
}

function AddOption(selectbox, text, value) {
    var optn = document.createElement("option");
    optn.text = text;
    optn.value = value;
    document.getElementById(selectbox).options.add(optn);
}

function RemoveAllOption(selectbox) {
    var i;
    for (i = document.getElementById(selectbox).options.length - 1; i >= 0; i--) {
        document.getElementById(selectbox).remove(i);
    }
}

function RemoveOptions(selectbox) {
    var i;
    for (i = document.getElementById(selectbox).options.length - 1; i >= 0; i--) {
        if (document.getElementById(selectbox).options[i].selected)
            document.getElementById(selectbox).remove(i);
    }
}

function SetMaxLength(object, len) {
    return (object.value.length <= len);
}

function createHtmlAttribute(name, value) {
    var attribute = document.createAttribute(name);
    attribute.nodeValue = value;
    return attribute;
}

function setCheckBox(theForm, theStatus) {
    var sus = eval("window.document." + theForm + ".elements.length");
    for (j = 0; j < sus; j++) {
        if (eval("window.document." + theForm + ".elements[" + j + "].type") == "checkbox") {
            eval("window.document." + theForm + ".elements[" + j + "].checked=" + theStatus);
        }
    }
}

function isEmptyRadio(controlId, theElement, theMess) {
    var j = 0;
    var d = window.document;
    var str = d.getElementsByName(controlId);
    var len = str.length;
    for (i = 0; i < len; i++) {
        if (str[i].checked == false)
            j++;
    }
    if (j == len && len > 1) {
        d.getElementById(theElement).className = "required";
        d.getElementById(theElement).innerHTML = theMess;
        return false;

    }
    else {
        d.getElementById(theElement).className = "normal";
        d.getElementById(theElement).innerHTML = "&nbsp;";
        return true;
    }
}
function isEmptyCheck(controlId, theElement, theMess, type) {
    var j = 0;
    var d = window.document;
    if (type == 'true') {
        var str = d.getElementsByName(controlId);
        var len = str.length;
        for (i = 0; i < len; i++) {
            if (str[i].checked == true)
                j++;
        }
        if (j == 0) {
            d.getElementById(theElement).className = "required";
            d.getElementById(theElement).innerHTML = theMess;
            return false;

        }
        else {
            d.getElementById(theElement).className = "normal";
            d.getElementById(theElement).innerHTML = "&nbsp;";
            return true;
        }
    }
    else {
        if (d.getElementById(controlId).checked == false) {
            d.getElementById(theElement).className = "required";
            d.getElementById(theElement).innerHTML = theMess;
            return false;
        }
        else {
            d.getElementById(theElement).className = "normal";
            d.getElementById(theElement).innerHTML = "&nbsp;";
            return true;
        }
    }
}

function encode(str) {
    return encodeURIComponent(str);
}
function GetPageHTMLAJAX(url, IdToSet) {
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'html',
        success: function (data) {
            //alert(data);
            $("#" + IdToSet).html(data);
        }
    });
}