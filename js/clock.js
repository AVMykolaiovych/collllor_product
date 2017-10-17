var timerID = null;
var timerRunning = false;
function stopclock() {
    if (timerRunning)
        clearTimeout(timerID);
    timerRunning = false;
}
function showtime() {
    var sp = "";
    var now = new Date();
    var month = MonthName(now.getMonth());
    var week = WeekDayName(now.getDay());
    var day = now.getDate();
    if (day == 1 || day == 31) {
        sp = "<sup>st</sup>";
    } else if (day == 2) {
        sp = "<sup>nd</sup>";
    } else if (day == 3) {
        sp = "<sup>rd</sup>";
    } else {
        sp = "<sup>th</sup>";
    }
    day = day + sp;
    /****************************************************************/
    var today = week + " " + day + " " + month + ", " + now.getFullYear();
    /****************************************************************/
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds()
    var timeValue = "" + ((hours > 12) ? hours - 12 : hours)
    timeValue += ((minutes < 10) ? ":0" : ":") + minutes
    timeValue += ((seconds < 10) ? ":0" : ":") + seconds
    timeValue += (hours >= 12) ? " P.M." : " A.M."
    var TotalDate = "Today : " + today + " " + timeValue;
    window.document.getElementById('showDate').innerHTML = TotalDate;
    timerID = setTimeout("showtime()", 1000);
    timerRunning = true;
}
function startclock() {
    stopclock();
    showtime();
}
function MonthName(MonthNumber) {
    var i;
    var MonthFullName;
    var Month = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
    for (i = 0; i <= 11; i++) {
        if (MonthNumber == i) {
            MonthFullName = Month[i];
            return MonthFullName;
        }
    }
}
function WeekDayName(WeekDayNumber) {
    var j;
    var Week = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
    for (j = 0; j <= 6; j++) {
        if (WeekDayNumber == j) {
            WeekDayFullName = Week[j];
            return WeekDayFullName;
        }
    }
}



