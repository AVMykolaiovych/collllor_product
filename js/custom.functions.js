// JavaScript Document
$(document).ready(function () {
    $(this).bind("contextmenu", function (e) {
        e.preventDefault();
    });

    $("#loading").dialog({
        closeOnEscape: false,
        autoOpen: false,
        dialogClass: 'alert',
        modal: true,
        resizable: false
    });
});
// Thickbox Image Path
var tb_pathToImage = "../images/loadingAnimation.gif";
var tb_pathToDeleteIcon = "../images/delet-icon.png";
