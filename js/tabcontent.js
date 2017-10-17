/* http://www.menucool.com/tabbed-content Version 2012.8.31 */

var tabs = function () {
    var c = function (c, a) {
        var b = new RegExp("(^| )" + a + "( |$)");
        return b.test(c.className) ? true : false
    }, j = function (a, b) {
        if (!c(a, b))if (a.className == "")a.className = b; else a.className += " " + b
    }, h = function (a, b) {
        var c = new RegExp("(^| )" + b + "( |$)");
        a.className = a.className.replace(c, "$1");
        a.className = a.className.replace(/ $/, "")
    }, g = function (c, b) {
        var a = document.getElementsByTagName("html");
        if (a)a[0].scrollTop += b
    }, e = function () {
        var a = window.location.pathname;
        if (a.indexOf("/") != -1)a = a.split("/");
        var b = a[a.length - 1] || "root";
        if (b > 20)b = b.substring(b.length - 19);
        return b
    }, a = e(), d = function (a) {
        this.a = 0;
        this.b = [];
        this.c = [];
        this.d = [];
        this.e = 0;
        this.f(a)
    };
    d.prototype = {
        g: function (c) {
            var d = new RegExp(a + c + "=[^;&]+"), b = document.cookie.match(d);
            return b ? b[0].split("=")[1] : this.h()
        }, h: function () {
            for (var a = 0, b = this.d.length; a < b; a++)if (c(this.d[a], "selected"))return a;
            return 0
        }, j: function (d, c) {
            for (var b = d.getAttribute("rel"), a = 0; a < this.b.length; a++)if (this.b[a].getAttribute("rel") == b) {
                j(this.b[a].parentNode, "selected");
                c && this.e && this.k(this.a, a)
            } else h(this.b[a].parentNode, "selected");
            this.l(b)
        }, k: function (b, c) {
            if (document.cookie.indexOf("tabContent=") == -1)document.cookie = "tabContent=" + a + b + "=" + c + ";path=/"; else if (document.cookie.indexOf(a + b) == -1) {
                var e = new RegExp("tabContent=[^;]+");
                document.cookie = document.cookie.match(e)[0] + "&" + a + b + "=" + c + ";path=/"
            } else {
                var e = new RegExp(a + b + "=\\d+", "g"), d = document.cookie.replace(e, a + b + "=" + c);
                document.cookie = d.substring(d.indexOf("tabContent="))
            }
        }, l: function (b) {
            for (var a = 0; a < this.c.length; a++)this.c[a].style.display = this.c[a].id == b ? "block" : "none"
        }, m: function (a) {
            if (a.id)for (var b = 0; b < this.b.length; b++)if (this.b[b].getAttribute("rel") == a.id)return this.b[b];
            return a.parentNode.nodeName != "BODY" ? this.m(a.parentNode) : null
        }, n: function (d, c) {
            var a = document.getElementById(d);
            if (a) {
                var b = this.m(a);
                if (b) {
                    this.j(b, 0);
                    if (!c)setTimeout(function () {
                        a.scrollIntoView();
                        g(a, -120)
                    }, 0); else setTimeout(function () {
                        window.scrollTo(0, 0)
                    }, 0);
                    return 1
                } else return 0
            }
        }, f: function (a) {
            this.a = a.i;
            this.b = a.getElementsByTagName("a");
            this.d = a.getElementsByTagName("li");
            for (var b = 0; b < this.b.length; b++)if (this.b[b].getAttribute("rel")) {
                this.c.push(document.getElementById(this.b[b].getAttribute("rel")));
                var f = this;
                this.b[b].onclick = function () {
                    f.j(this, 1);
                    return false
                }
            }
            var e = a.getAttribute("persist") || "";
            this.e = e.toLowerCase() == "true" ? 1 : 0;
            var d = window.location.hash;
            if (d && d.length > 1)if (this.n(d.substring(1), window.location.search.indexOf("noscroll=true") > -1))return;
            var c = this.e ? parseInt(this.g(a.i)) : this.h();
            if (c >= this.b.length)c = 0;
            this.j(this.b[c], 0)
        }
    };
    var b = [], i = function (d) {
        var b = false;

        function a() {
            if (b)return;
            b = true;
            setTimeout(d, 4)
        }

        if (document.addEventListener)document.addEventListener("DOMContentLoaded", a, false); else if (document.attachEvent) {
            try {
                var e = window.frameElement != null
            } catch (f) {
            }
            if (document.documentElement.doScroll && !e) {
                function c() {
                    if (b)return;
                    try {
                        document.documentElement.doScroll("left");
                        a()
                    } catch (d) {
                        setTimeout(c, 10)
                    }
                }

                c()
            }
            document.attachEvent("onreadystatechange", function () {
                document.readyState === "complete" && a()
            })
        }
        if (window.addEventListener)window.addEventListener("load", a, false); else window.attachEvent && window.attachEvent("onload", a)
    }, f = function () {
        for (var e = document.getElementsByTagName("ul"), a = 0, f = e.length; a < f; a++)if (c(e[a], "tabs")) {
            e[a].i = b.length;
            b.push(new d(e[a]))
        }
    };
    i(f);
    return {
        open: function (c, d) {
            for (var a = 0; a < b.length; a++)b[a].n(c, d)
        }
    }
}()