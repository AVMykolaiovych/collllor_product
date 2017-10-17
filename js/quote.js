! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = oe.type(e);
        return "function" !== n && !oe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t, n) {
        if (oe.isFunction(t)) return oe.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return oe.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (fe.test(t)) return oe.filter(t, e, n);
            t = oe.filter(t, e)
        }
        return oe.grep(e, function(e) {
            return Z.call(t, e) > -1 !== n
        })
    }

    function r(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = {};
        return oe.each(e.match(me) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        Q.removeEventListener("DOMContentLoaded", a), e.removeEventListener("load", a), oe.ready()
    }

    function s() {
        this.expando = oe.expando + s.uid++
    }

    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Te, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ke.test(n) ? oe.parseJSON(n) : n)
                } catch (e) {}
                Ce.set(e, t, n)
            } else n = void 0;
        return n
    }

    function c(e, t, n, i) {
        var r, o = 1,
            a = 20,
            s = i ? function() {
                return i.cur()
            } : function() {
                return oe.css(e, t, "")
            },
            l = s(),
            c = n && n[3] || (oe.cssNumber[t] ? "" : "px"),
            u = (oe.cssNumber[t] || "px" !== c && +l) && Se.exec(oe.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do {
                o = o || ".5", u /= o, oe.style(e, t, u + c)
            } while (o !== (o = s() / l) && 1 !== o && --a)
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }

    function u(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], n) : n
    }

    function d(e, t) {
        for (var n = 0, i = e.length; i > n; n++) we.set(e[n], "globalEval", !t || we.get(t[n], "globalEval"))
    }

    function f(e, t, n, i, r) {
        for (var o, a, s, l, c, f, p = t.createDocumentFragment(), h = [], g = 0, v = e.length; v > g; g++)
            if ((o = e[g]) || 0 === o)
                if ("object" === oe.type(o)) oe.merge(h, o.nodeType ? [o] : o);
                else if (Oe.test(o)) {
            for (a = a || p.appendChild(t.createElement("div")), s = (je.exec(o) || ["", ""])[1].toLowerCase(), l = qe[s] || qe._default, a.innerHTML = l[1] + oe.htmlPrefilter(o) + l[2], f = l[0]; f--;) a = a.lastChild;
            oe.merge(h, a.childNodes), a = p.firstChild, a.textContent = ""
        } else h.push(t.createTextNode(o));
        for (p.textContent = "", g = 0; o = h[g++];)
            if (i && oe.inArray(o, i) > -1) r && r.push(o);
            else if (c = oe.contains(o.ownerDocument, o), a = u(p.appendChild(o), "script"), c && d(a), n)
            for (f = 0; o = a[f++];) Le.test(o.type || "") && n.push(o);
        return p
    }

    function p() {
        return !0
    }

    function h() {
        return !1
    }

    function g() {
        try {
            return Q.activeElement
        } catch (e) {}
    }

    function v(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (s in t) v(e, s, n, i, t[s], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = h;
        else if (!r) return e;
        return 1 === o && (a = r, r = function(e) {
            return oe().off(e), a.apply(this, arguments)
        }, r.guid = a.guid || (a.guid = oe.guid++)), e.each(function() {
            oe.event.add(this, t, r, i, n)
        })
    }

    function m(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function x(e) {
        var t = Re.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function b(e, t) {
        var n, i, r, o, a, s, l, c;
        if (1 === t.nodeType) {
            if (we.hasData(e) && (o = we.access(e), a = we.set(t, o), c = o.events)) {
                delete a.handle, a.events = {};
                for (r in c)
                    for (n = 0, i = c[r].length; i > n; n++) oe.event.add(t, r, c[r][n])
            }
            Ce.hasData(e) && (s = Ce.access(e), l = oe.extend({}, s), Ce.set(t, l))
        }
    }

    function w(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ne.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function C(e, t, n, i) {
        t = J.apply([], t);
        var r, o, a, s, l, c, d = 0,
            p = e.length,
            h = p - 1,
            g = t[0],
            v = oe.isFunction(g);
        if (v || p > 1 && "string" == typeof g && !ie.checkClone && Pe.test(g)) return e.each(function(r) {
            var o = e.eq(r);
            v && (t[0] = g.call(this, r, o.html())), C(o, t, n, i)
        });
        if (p && (r = f(t, e[0].ownerDocument, !1, e, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
            for (a = oe.map(u(r, "script"), y), s = a.length; p > d; d++) l = r, d !== h && (l = oe.clone(l, !0, !0), s && oe.merge(a, u(l, "script"))), n.call(e[d], l, d);
            if (s)
                for (c = a[a.length - 1].ownerDocument, oe.map(a, x), d = 0; s > d; d++) l = a[d], Le.test(l.type || "") && !we.access(l, "globalEval") && oe.contains(c, l) && (l.src ? oe._evalUrl && oe._evalUrl(l.src) : oe.globalEval(l.textContent.replace($e, "")))
        }
        return e
    }

    function k(e, t, n) {
        for (var i, r = t ? oe.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || oe.cleanData(u(i)), i.parentNode && (n && oe.contains(i.ownerDocument, i) && d(u(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function T(e, t) {
        var n = oe(t.createElement(e)).appendTo(t.body),
            i = oe.css(n[0], "display");
        return n.detach(), i
    }

    function D(e) {
        var t = Q,
            n = _e[e];
        return n || (n = T(e, t), "none" !== n && n || (We = (We || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = We[0].contentDocument, t.write(), t.close(), n = T(e, t), We.detach()), _e[e] = n), n
    }

    function S(e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || Xe(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== a && void 0 !== a || oe.contains(e.ownerDocument, e) || (a = oe.style(e, t)), n && !ie.pixelMarginRight() && ze.test(a) && Be.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o), void 0 !== a ? a + "" : a
    }

    function A(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function E(e) {
        if (e in Ke) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Je.length; n--;)
            if ((e = Je[n] + t) in Ke) return e
    }

    function N(e, t, n) {
        var i = Se.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function j(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += oe.css(e, n + Ae[o], !0, r)), i ? ("content" === n && (a -= oe.css(e, "padding" + Ae[o], !0, r)), "margin" !== n && (a -= oe.css(e, "border" + Ae[o] + "Width", !0, r))) : (a += oe.css(e, "padding" + Ae[o], !0, r), "padding" !== n && (a += oe.css(e, "border" + Ae[o] + "Width", !0, r)));
        return a
    }

    function L(t, n, i) {
        var r = !0,
            o = "width" === n ? t.offsetWidth : t.offsetHeight,
            a = Xe(t),
            s = "border-box" === oe.css(t, "boxSizing", !1, a);
        if (Q.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= o || null == o) {
            if (o = S(t, n, a), (0 > o || null == o) && (o = t.style[n]), ze.test(o)) return o;
            r = s && (ie.boxSizingReliable() || o === t.style[n]), o = parseFloat(o) || 0
        }
        return o + j(t, n, i || (s ? "border" : "content"), r, a) + "px"
    }

    function q(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = we.get(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ee(i) && (o[a] = we.access(i, "olddisplay", D(i.nodeName)))) : (r = Ee(i), "none" === n && r || we.set(i, "olddisplay", r ? n : oe.css(i, "display"))));
        for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function O(e, t, n, i, r) {
        return new O.prototype.init(e, t, n, i, r)
    }

    function H() {
        return e.setTimeout(function() {
            Ze = void 0
        }), Ze = oe.now()
    }

    function I(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Ae[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function F(e, t, n) {
        for (var i, r = (R.tweeners[t] || []).concat(R.tweeners["*"]), o = 0, a = r.length; a > o; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function M(e, t, n) {
        var i, r, o, a, s, l, c, u = this,
            d = {},
            f = e.style,
            p = e.nodeType && Ee(e),
            h = we.get(e, "fxshow");
        n.queue || (s = oe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, u.always(function() {
            u.always(function() {
                s.unqueued--, oe.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = oe.css(e, "display"), "inline" === ("none" === c ? we.get(e, "olddisplay") || D(e.nodeName) : c) && "none" === oe.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", u.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i], tt.exec(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                    if ("show" !== r || !h || void 0 === h[i]) continue;
                    p = !0
                }
                d[i] = h && h[i] || oe.style(e, i)
            } else c = void 0;
        if (oe.isEmptyObject(d)) "inline" === ("none" === c ? D(e.nodeName) : c) && (f.display = c);
        else {
            h ? "hidden" in h && (p = h.hidden) : h = we.access(e, "fxshow", {}), o && (h.hidden = !p), p ? oe(e).show() : u.done(function() {
                oe(e).hide()
            }), u.done(function() {
                var t;
                we.remove(e, "fxshow");
                for (t in d) oe.style(e, t, d[t])
            });
            for (i in d) a = F(p ? h[i] : 0, i, u), i in h || (h[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function P(e, t) {
        var n, i, r, o, a;
        for (n in e)
            if (i = oe.camelCase(n), r = t[i], o = e[n], oe.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = oe.cssHooks[i]) && "expand" in a) {
                o = a.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
    }

    function R(e, t, n) {
        var i, r, o = 0,
            a = R.prefilters.length,
            s = oe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = Ze || H(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o);
                return s.notifyWith(e, [c, o, n]), 1 > o && l ? n : (s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: oe.extend({}, t),
                opts: oe.extend(!0, {
                    specialEasing: {},
                    easing: oe.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ze || H(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = oe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (P(u, c.opts.specialEasing); a > o; o++)
            if (i = R.prefilters[o].call(c, e, u, c.opts)) return oe.isFunction(i.stop) && (oe._queueHooks(c.elem, c.opts.queue).stop = oe.proxy(i.stop, i)), i;
        return oe.map(u, F, c), oe.isFunction(c.opts.start) && c.opts.start.call(e, c), oe.fx.timer(oe.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function $(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function W(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(me) || [];
            if (oe.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function _(e, t, n, i) {
        function r(s) {
            var l;
            return o[s] = !0, oe.each(e[s] || [], function(e, s) {
                var c = s(t, n, i);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
            }), l
        }
        var o = {},
            a = e === mt;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function B(e, t) {
        var n, i, r = oe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && oe.extend(!0, e, i), e
    }

    function z(e, t, n) {
        for (var i, r, o, a, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in s)
                if (s[r] && s[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                a || (a = r)
            }
            o = o || a
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function X(e, t, n, i) {
        var r, o, a, s, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (o = u.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (!(a = c[l + " " + o] || c["* " + o]))
                for (r in c)
                    if (s = r.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                        !0 === a ? a = c[r] : !0 !== c[r] && (o = s[0], u.unshift(s[1]));
                        break
                    }
            if (!0 !== a)
                if (a && e.throws) t = a(t);
                else try {
                    t = a(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function U(e, t, n, i) {
        var r;
        if (oe.isArray(t)) oe.each(t, function(t, r) {
            n || bt.test(e) ? i(e, r) : U(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== oe.type(t)) i(e, t);
        else
            for (r in t) U(e + "[" + r + "]", t[r], n, i)
    }

    function V(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var Y = [],
        Q = e.document,
        G = Y.slice,
        J = Y.concat,
        K = Y.push,
        Z = Y.indexOf,
        ee = {},
        te = ee.toString,
        ne = ee.hasOwnProperty,
        ie = {},
        re = "2.2.1",
        oe = function(e, t) {
            return new oe.fn.init(e, t)
        },
        ae = function(e, t) {
            return t.toUpperCase()
        };
    oe.fn = oe.prototype = {
        jquery: re,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function() {
            return G.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : G.call(this)
        },
        pushStack: function(e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return oe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(oe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(G.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: K,
        sort: Y.sort,
        splice: Y.splice
    }, oe.extend = oe.fn.extend = function() {
        var e, t, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || oe.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], i = e[t], a !== i && (c && i && (oe.isPlainObject(i) || (r = oe.isArray(i))) ? (r ? (r = !1, o = n && oe.isArray(n) ? n : []) : o = n && oe.isPlainObject(n) ? n : {}, a[t] = oe.extend(c, o, i)) : void 0 !== i && (a[t] = i));
        return a
    }, oe.extend({
        expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === oe.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" === oe.type(e) && !e.nodeType && !oe.isWindow(e) && !(e.constructor && !ne.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = oe.trim(e)) && (1 === e.indexOf("use strict") ? (t = Q.createElement("script"), t.text = e, Q.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, ae)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var i, r = 0;
            if (n(e))
                for (i = e.length; i > r && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? oe.merge(i, "string" == typeof e ? [e] : e) : K.call(i, e)), i
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : Z.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, a = !n; o > r; r++) !t(e[r], r) !== a && i.push(e[r]);
            return i
        },
        map: function(e, t, i) {
            var r, o, a = 0,
                s = [];
            if (n(e))
                for (r = e.length; r > a; a++) null != (o = t(e[a], a, i)) && s.push(o);
            else
                for (a in e) null != (o = t(e[a], a, i)) && s.push(o);
            return J.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            return "string" == typeof t && (n = e[t], t = e, e = n), oe.isFunction(e) ? (i = G.call(arguments, 2), r = function() {
                return e.apply(t || this, i.concat(G.call(arguments)))
            }, r.guid = e.guid = e.guid || oe.guid++, r) : void 0
        },
        now: Date.now,
        support: ie
    }), "function" == typeof Symbol && (oe.fn[Symbol.iterator] = Y[Symbol.iterator]), oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var se = function(e) {
        function t(e, t, n, i) {
            var r, o, a, s, c, d, f, p, h = t && t.ownerDocument,
                g = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
            if (!i && ((t ? t.ownerDocument || t : P) !== j && N(t), t = t || j, q)) {
                if (11 !== g && (d = ge.exec(e)))
                    if (r = d[1]) {
                        if (9 === g) {
                            if (!(a = t.getElementById(r))) return n;
                            if (a.id === r) return n.push(a), n
                        } else if (h && (a = h.getElementById(r)) && F(t, a) && a.id === r) return n.push(a), n
                    } else {
                        if (d[2]) return G.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = d[3]) && x.getElementsByClassName && t.getElementsByClassName) return G.apply(n, t.getElementsByClassName(r)), n
                    }
                if (x.qsa && !B[e + " "] && (!O || !O.test(e))) {
                    if (1 !== g) h = t, p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(me, "\\$&") : t.setAttribute("id", s = M), f = k(e), o = f.length, c = ue.test(s) ? "#" + s : "[id='" + s + "']"; o--;) f[o] = c + " " + u(f[o]);
                        p = f.join(","), h = ve.test(e) && l(t.parentNode) || t
                    }
                    if (p) try {
                        return G.apply(n, h.querySelectorAll(p)), n
                    } catch (e) {} finally {
                        s === M && t.removeAttribute("id")
                    }
                }
            }
            return D(e.replace(oe, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > b.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[M] = !0, e
        }

        function r(e) {
            var t = j.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) b.attrHandle[n[i]] = t
        }

        function a(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function l(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function c() {}

        function u(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function d(e, t, n) {
            var i = t.dir,
                r = n && "parentNode" === i,
                o = $++;
            return t.first ? function(t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || r) return e(t, n, o)
            } : function(t, n, a) {
                var s, l, c, u = [R, o];
                if (a) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) {
                            if (c = t[M] || (t[M] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (s = l[i]) && s[0] === R && s[1] === o) return u[2] = s[2];
                            if (l[i] = u, u[2] = e(t, n, a)) return !0
                        }
            }
        }

        function f(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function p(e, n, i) {
            for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
            return i
        }

        function h(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), c && t.push(s));
            return a
        }

        function g(e, t, n, r, o, a) {
            return r && !r[M] && (r = g(r)), o && !o[M] && (o = g(o, a)), i(function(i, a, s, l) {
                var c, u, d, f = [],
                    g = [],
                    v = a.length,
                    m = i || p(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? m : h(m, f, e, s, l),
                    x = n ? o || (i ? e : v || r) ? [] : a : y;
                if (n && n(y, x, s, l), r)
                    for (c = h(x, g), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (x[g[u]] = !(y[g[u]] = d));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = x.length; u--;)(d = x[u]) && c.push(y[u] = d);
                            o(null, x = [], c, l)
                        }
                        for (u = x.length; u--;)(d = x[u]) && (c = o ? K(i, d) : f[u]) > -1 && (i[c] = !(a[c] = d))
                    }
                } else x = h(x === a ? x.splice(v, x.length) : x), o ? o(null, a, x, l) : G.apply(a, x)
            })
        }

        function v(e) {
            for (var t, n, i, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, l = d(function(e) {
                    return e === t
                }, a, !0), c = d(function(e) {
                    return K(t, e) > -1
                }, a, !0), p = [function(e, n, i) {
                    var r = !o && (i || n !== S) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                    return t = null, r
                }]; r > s; s++)
                if (n = b.relative[e[s].type]) p = [d(f(p), n)];
                else {
                    if (n = b.filter[e[s].type].apply(null, e[s].matches), n[M]) {
                        for (i = ++s; r > i && !b.relative[e[i].type]; i++);
                        return g(s > 1 && f(p), s > 1 && u(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(oe, "$1"), n, i > s && v(e.slice(s, i)), r > i && v(e = e.slice(i)), r > i && u(e))
                    }
                    p.push(n)
                }
            return f(p)
        }

        function m(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                a = function(i, a, s, l, c) {
                    var u, d, f, p = 0,
                        g = "0",
                        v = i && [],
                        m = [],
                        y = S,
                        x = i || o && b.find.TAG("*", c),
                        w = R += null == y ? 1 : Math.random() || .1,
                        C = x.length;
                    for (c && (S = a === j || a || c); g !== C && null != (u = x[g]); g++) {
                        if (o && u) {
                            for (d = 0, a || u.ownerDocument === j || (N(u), s = !q); f = e[d++];)
                                if (f(u, a || j, s)) {
                                    l.push(u);
                                    break
                                }
                            c && (R = w)
                        }
                        r && ((u = !f && u) && p--, i && v.push(u))
                    }
                    if (p += g, r && g !== p) {
                        for (d = 0; f = n[d++];) f(v, m, a, s);
                        if (i) {
                            if (p > 0)
                                for (; g--;) v[g] || m[g] || (m[g] = Y.call(l));
                            m = h(m)
                        }
                        G.apply(l, m), c && !i && m.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (R = w, S = y), v
                };
            return r ? i(a) : a
        }
        var y, x, b, w, C, k, T, D, S, A, E, N, j, L, q, O, H, I, F, M = "sizzle" + 1 * new Date,
            P = e.document,
            R = 0,
            $ = 0,
            W = n(),
            _ = n(),
            B = n(),
            z = function(e, t) {
                return e === t && (E = !0), 0
            },
            X = 1 << 31,
            U = {}.hasOwnProperty,
            V = [],
            Y = V.pop,
            Q = V.push,
            G = V.push,
            J = V.slice,
            K = function(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            re = new RegExp(ee + "+", "g"),
            oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            ae = new RegExp("^" + ee + "*," + ee + "*"),
            se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            ce = new RegExp(ie),
            ue = new RegExp("^" + te + "$"),
            de = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            },
            fe = /^(?:input|select|textarea|button)$/i,
            pe = /^h\d$/i,
            he = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            me = /'|\\/g,
            ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            xe = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            be = function() {
                N()
            };
        try {
            G.apply(V = J.call(P.childNodes), P.childNodes), V[P.childNodes.length].nodeType
        } catch (e) {
            G = {
                apply: V.length ? function(e, t) {
                    Q.apply(e, J.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        x = t.support = {}, C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, N = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : P;
            return i !== j && 9 === i.nodeType && i.documentElement ? (j = i, L = j.documentElement, q = !C(j), (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", be, !1) : n.attachEvent && n.attachEvent("onunload", be)), x.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = r(function(e) {
                return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = he.test(j.getElementsByClassName), x.getById = r(function(e) {
                return L.appendChild(e).id = M, !j.getElementsByName || !j.getElementsByName(M).length
            }), x.getById ? (b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && q) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, b.filter.ID = function(e) {
                var t = e.replace(ye, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete b.find.ID, b.filter.ID = function(e) {
                var t = e.replace(ye, xe);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), b.find.TAG = x.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, b.find.CLASS = x.getElementsByClassName && function(e, t) {
                return void 0 !== t.getElementsByClassName && q ? t.getElementsByClassName(e) : void 0
            }, H = [], O = [], (x.qsa = he.test(j.querySelectorAll)) && (r(function(e) {
                L.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + M + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || O.push(".#.+[+~]")
            }), r(function(e) {
                var t = j.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
            })), (x.matchesSelector = he.test(I = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(e) {
                x.disconnectedMatch = I.call(e, "div"), I.call(e, "[s!='']:x"), H.push("!=", ie)
            }), O = O.length && new RegExp(O.join("|")), H = H.length && new RegExp(H.join("|")), t = he.test(L.compareDocumentPosition), F = t || he.test(L.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, z = t ? function(e, t) {
                if (e === t) return E = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === j || e.ownerDocument === P && F(P, e) ? -1 : t === j || t.ownerDocument === P && F(P, t) ? 1 : A ? K(A, e) - K(A, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return E = !0, 0;
                var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    l = [t];
                if (!r || !o) return e === j ? -1 : t === j ? 1 : r ? -1 : o ? 1 : A ? K(A, e) - K(A, t) : 0;
                if (r === o) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[i] === l[i];) i++;
                return i ? a(s[i], l[i]) : s[i] === P ? -1 : l[i] === P ? 1 : 0
            }, j) : j
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== j && N(e), n = n.replace(le, "='$1']"), x.matchesSelector && q && !B[n + " "] && (!H || !H.test(n)) && (!O || !O.test(n))) try {
                var i = I.call(e, n);
                if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {}
            return t(n, j, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== j && N(e), F(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== j && N(e);
            var n = b.attrHandle[t.toLowerCase()],
                i = n && U.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
            return void 0 !== i ? i : x.attributes || !q ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (E = !x.detectDuplicates, A = !x.sortStable && e.slice(0), e.sort(z), E) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return A = null, e
        }, w = t.getText = function(e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += w(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += w(t);
            return n
        }, b = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ye, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ye, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var c, u, d, f, p, h, g = o !== a ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            m = s && t.nodeName.toLowerCase(),
                            y = !l && !s,
                            x = !1;
                        if (v) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];)
                                        if (s ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                for (f = v, d = f[M] || (f[M] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], p = c[0] === R && c[1], x = p && c[2], f = p && v.childNodes[p]; f = ++p && f && f[g] || (x = p = 0) || h.pop();)
                                    if (1 === f.nodeType && ++x && f === t) {
                                        u[e] = [R, p, x];
                                        break
                                    }
                            } else if (y && (f = t, d = f[M] || (f[M] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], p = c[0] === R && c[1], x = p), !1 === x)
                                for (;
                                    (f = ++p && f && f[g] || (x = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++x || (y && (d = f[M] || (f[M] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), u[e] = [R, x]), f !== t)););
                            return (x -= r) === i || x % i == 0 && x / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[M] ? o(n) : o.length > 1 ? (r = [e, e, "", n], b.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), a = r.length; a--;) i = K(e, r[a]), e[i] = !(t[i] = r[a])
                    }) : function(e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        r = T(e.replace(oe, "$1"));
                    return r[M] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(ye, xe),
                        function(t) {
                            return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, xe).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = q ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === L
                },
                focus: function(e) {
                    return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return pe.test(e.nodeName)
                },
                input: function(e) {
                    return fe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: s(function() {
                    return [0]
                }),
                last: s(function(e, t) {
                    return [t - 1]
                }),
                eq: s(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: s(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: s(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: s(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: s(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, b.pseudos.nth = b.pseudos.eq;
        for (y in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[y] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(y);
        for (y in {
                submit: !0,
                reset: !0
            }) b.pseudos[y] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(y);
        return c.prototype = b.filters = b.pseudos, b.setFilters = new c, k = t.tokenize = function(e, n) {
            var i, r, o, a, s, l, c, u = _[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = e, l = [], c = b.preFilter; s;) {
                (!i || (r = ae.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = se.exec(s)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(oe, " ")
                }), s = s.slice(i.length));
                for (a in b.filter) !(r = de[a].exec(s)) || c[a] && !(r = c[a](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: a,
                    matches: r
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length : s ? t.error(e) : _(e, l).slice(0)
        }, T = t.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = B[e + " "];
            if (!o) {
                for (t || (t = k(e)), n = t.length; n--;) o = v(t[n]), o[M] ? i.push(o) : r.push(o);
                o = B(e, m(r, i)), o.selector = e
            }
            return o
        }, D = t.select = function(e, t, n, i) {
            var r, o, a, s, c, d = "function" == typeof e && e,
                f = !i && k(e = d.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && q && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(ye, xe), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = de.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !b.relative[s = a.type]);)
                    if ((c = b.find[s]) && (i = c(a.matches[0].replace(ye, xe), ve.test(o[0].type) && l(t.parentNode) || t))) {
                        if (o.splice(r, 1), !(e = i.length && u(o))) return G.apply(n, i), n;
                        break
                    }
            }
            return (d || T(e, f))(i, t, !q, n, !t || ve.test(e) && l(t.parentNode) || t), n
        }, x.sortStable = M.split("").sort(z).join("") === M, x.detectDuplicates = !!E, N(), x.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(j.createElement("div"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(Z, function(e, t, n) {
            var i;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    oe.find = se, oe.expr = se.selectors, oe.expr[":"] = oe.expr.pseudos, oe.uniqueSort = oe.unique = se.uniqueSort, oe.text = se.getText, oe.isXMLDoc = se.isXML, oe.contains = se.contains;
    var le = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && oe(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        ce = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        ue = oe.expr.match.needsContext,
        de = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        fe = /^.[^:#\[\.,]*$/;
    oe.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, oe.fn.extend({
        find: function(e) {
            var t, n = this.length,
                i = [],
                r = this;
            if ("string" != typeof e) return this.pushStack(oe(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (oe.contains(r[t], this)) return !0
            }));
            for (t = 0; n > t; t++) oe.find(e, r[t], i);
            return i = this.pushStack(n > 1 ? oe.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && ue.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var pe, he = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (oe.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || pe, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : he.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : Q, !0)), de.test(i[1]) && oe.isPlainObject(t))
                    for (i in t) oe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return r = Q.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Q, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
    }).prototype = oe.fn, pe = oe(Q);
    var ge = /^(?:parents|prev(?:Until|All))/,
        ve = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    oe.fn.extend({
        has: function(e) {
            var t = oe(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (oe.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], a = ue.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? Z.call(oe(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), oe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return le(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return le(e, "parentNode", n)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return le(e, "nextSibling")
        },
        prevAll: function(e) {
            return le(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return le(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return le(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ce((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ce(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || oe.merge([], e.childNodes)
        }
    }, function(e, t) {
        oe.fn[e] = function(n, i) {
            var r = oe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = oe.filter(i, r)), this.length > 1 && (ve[e] || oe.uniqueSort(r), ge.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var me = /\S+/g;
    oe.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : oe.extend({}, e);
        var t, n, i, r, a = [],
            s = [],
            l = -1,
            c = function() {
                for (r = e.once, i = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < a.length;) !1 === a[l].apply(n[0], n[1]) && e.stopOnFalse && (l = a.length, n = !1);
                e.memory || (n = !1), t = !1, r && (a = n ? [] : "")
            },
            u = {
                add: function() {
                    return a && (n && !t && (l = a.length - 1, s.push(n)), function t(n) {
                        oe.each(n, function(n, i) {
                            oe.isFunction(i) ? e.unique && u.has(i) || a.push(i) : i && i.length && "string" !== oe.type(i) && t(i)
                        })
                    }(arguments), n && !t && c()), this
                },
                remove: function() {
                    return oe.each(arguments, function(e, t) {
                        for (var n;
                            (n = oe.inArray(t, a, n)) > -1;) a.splice(n, 1), l >= n && l--
                    }), this
                },
                has: function(e) {
                    return e ? oe.inArray(e, a) > -1 : a.length > 0
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return r = s = [], a = n = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return r = s = [], n || (a = n = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, n) {
                    return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return u
    }, oe.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", oe.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return oe.Deferred(function(n) {
                            oe.each(t, function(t, o) {
                                var a = oe.isFunction(e[t]) && e[t];
                                r[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && oe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? oe.extend(e, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, oe.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                i[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = a.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function(e) {
            var t, n, i, r = 0,
                o = G.call(arguments),
                a = o.length,
                s = 1 !== a || e && oe.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : oe.Deferred(),
                c = function(e, n, i) {
                    return function(r) {
                        n[e] = this, i[e] = arguments.length > 1 ? G.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && oe.isFunction(o[r].promise) ? o[r].promise().progress(c(r, n, t)).done(c(r, i, o)).fail(l.reject) : --s;
            return s || l.resolveWith(i, o), l.promise()
        }
    });
    var ye;
    oe.fn.ready = function(e) {
        return oe.ready.promise().done(e), this
    }, oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --oe.readyWait : oe.isReady) || (oe.isReady = !0, !0 !== e && --oe.readyWait > 0 || (ye.resolveWith(Q, [oe]), oe.fn.triggerHandler && (oe(Q).triggerHandler("ready"), oe(Q).off("ready"))))
        }
    }), oe.ready.promise = function(t) {
        return ye || (ye = oe.Deferred(), "complete" === Q.readyState || "loading" !== Q.readyState && !Q.documentElement.doScroll ? e.setTimeout(oe.ready) : (Q.addEventListener("DOMContentLoaded", a), e.addEventListener("load", a))), ye.promise(t)
    }, oe.ready.promise();
    var xe = function(e, t, n, i, r, o, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === oe.type(n)) {
                r = !0;
                for (s in n) xe(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== i && (r = !0, oe.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(oe(e), n)
                })), t))
                for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
        },
        be = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    s.uid = 1, s.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function(e) {
            if (!be(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, be(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[t] = n;
            else
                for (i in t) r[i] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, oe.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i, r, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t) this.register(e);
                else {
                    oe.isArray(t) ? i = t.concat(t.map(oe.camelCase)) : (r = oe.camelCase(t), t in o ? i = [t, r] : (i = r, i = i in o ? [i] : i.match(me) || [])), n = i.length;
                    for (; n--;) delete o[i[n]]
                }(void 0 === t || oe.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !oe.isEmptyObject(t)
        }
    };
    var we = new s,
        Ce = new s,
        ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Te = /[A-Z]/g;
    oe.extend({
        hasData: function(e) {
            return Ce.hasData(e) || we.hasData(e)
        },
        data: function(e, t, n) {
            return Ce.access(e, t, n)
        },
        removeData: function(e, t) {
            Ce.remove(e, t)
        },
        _data: function(e, t, n) {
            return we.access(e, t, n)
        },
        _removeData: function(e, t) {
            we.remove(e, t)
        }
    }), oe.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = Ce.get(o), 1 === o.nodeType && !we.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), l(o, i, r[i])));
                    we.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                Ce.set(this, e)
            }) : xe(this, function(t) {
                var n, i;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Ce.get(o, e) || Ce.get(o, e.replace(Te, "-$&").toLowerCase()))) return n;
                    if (i = oe.camelCase(e), void 0 !== (n = Ce.get(o, i))) return n;
                    if (void 0 !== (n = l(o, i, void 0))) return n
                } else i = oe.camelCase(e), this.each(function() {
                    var n = Ce.get(this, i);
                    Ce.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && Ce.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Ce.remove(this, e)
            })
        }
    }), oe.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = we.get(e, t), n && (!i || oe.isArray(n) ? i = we.access(e, t, oe.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = oe.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = oe._queueHooks(e, t),
                a = function() {
                    oe.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return we.get(e, n) || we.access(e, n, {
                empty: oe.Callbacks("once memory").add(function() {
                    we.remove(e, [t + "queue", n])
                })
            })
        }
    }), oe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = oe.queue(this, e, t);
                oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                oe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = oe.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = we.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var De = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Se = new RegExp("^(?:([+-])=|)(" + De + ")([a-z%]*)$", "i"),
        Ae = ["Top", "Right", "Bottom", "Left"],
        Ee = function(e, t) {
            return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
        },
        Ne = /^(?:checkbox|radio)$/i,
        je = /<([\w:-]+)/,
        Le = /^$|\/(?:java|ecma)script/i,
        qe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    qe.optgroup = qe.option, qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead, qe.th = qe.td;
    var Oe = /<|&#?\w+;/;
    ! function() {
        var e = Q.createDocumentFragment(),
            t = e.appendChild(Q.createElement("div")),
            n = Q.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var He = /^key/,
        Ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Fe = /^([^.]*)(?:\.(.+)|)/;
    oe.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, a, s, l, c, u, d, f, p, h, g, v = we.get(e);
            if (v)
                for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = oe.guid++), (l = v.events) || (l = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
                        return void 0 !== oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(me) || [""], c = t.length; c--;) s = Fe.exec(t[c]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p && (d = oe.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, d = oe.event.special[p] || {}, u = oe.extend({
                    type: p,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && oe.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, o), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, h, a) || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, u) : f.push(u), oe.event.global[p] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, l, c, u, d, f, p, h, g, v = we.hasData(e) && we.get(e);
            if (v && (l = v.events)) {
                for (t = (t || "").match(me) || [""], c = t.length; c--;)
                    if (s = Fe.exec(t[c]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = oe.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) u = f[o], !r && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                        a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, v.handle) || oe.removeEvent(e, p, v.handle), delete l[p])
                    } else
                        for (p in l) oe.event.remove(e, p + t[c], n, i, !0);
                oe.isEmptyObject(l) && we.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = oe.event.fix(e);
            var t, n, i, r, o, a = [],
                s = G.call(arguments),
                l = (we.get(this, "events") || {})[e.type] || [],
                c = oe.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (a = oe.event.handlers.call(this, e, l), t = 0;
                    (r = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.rnamespace || e.rnamespace.test(o.namespace)) && (e.handleObj = o, e.data = o.data, void 0 !== (i = ((oe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (i = [], n = 0; s > n; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? oe(r, this).index(l) > -1 : oe.find(r, this, null, [l]).length), i[r] && i.push(o);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Q, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[oe.expando]) return e;
            var t, n, i, r = e.type,
                o = e,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = Ie.test(r) ? this.mouseHooks : He.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new oe.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
            return e.target || (e.target = Q), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== g() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === g() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && oe.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, oe.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, oe.Event = function(e, t) {
        return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? p : h) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
    }, oe.Event.prototype = {
        constructor: oe.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = p, e && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = p, e && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        oe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return (!r || r !== i && !oe.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), oe.fn.extend({
        on: function(e, t, n, i) {
            return v(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return v(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = h), this.each(function() {
                oe.event.remove(this, e, n, t)
            })
        }
    });
    var Me = /<script|<style|<link/i,
        Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Re = /^true\/(.*)/,
        $e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    oe.extend({
        htmlPrefilter: function(e) {
            return e.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, a, s = e.cloneNode(!0),
                l = oe.contains(e.ownerDocument, e);
            if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (a = u(s), o = u(e), i = 0, r = o.length; r > i; i++) w(o[i], a[i]);
            if (t)
                if (n)
                    for (o = o || u(e), a = a || u(s), i = 0, r = o.length; r > i; i++) b(o[i], a[i]);
                else b(e, s);
            return a = u(s, "script"), a.length > 0 && d(a, !l && u(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, i, r = oe.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (be(n)) {
                    if (t = n[we.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, t.handle);
                        n[we.expando] = void 0
                    }
                    n[Ce.expando] && (n[Ce.expando] = void 0)
                }
        }
    }), oe.fn.extend({
        domManip: C,
        detach: function(e) {
            return k(this, e, !0)
        },
        remove: function(e) {
            return k(this, e)
        },
        text: function(e) {
            return xe(this, function(e) {
                return void 0 === e ? oe.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return C(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    m(this, e).appendChild(e)
                }
            })
        },
        prepend: function() {
            return C(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = m(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return C(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return C(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (oe.cleanData(u(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return oe.clone(this, e, t)
            })
        },
        html: function(e) {
            return xe(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Me.test(e) && !qe[(je.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = oe.htmlPrefilter(e);
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(u(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return C(this, arguments, function(t) {
                var n = this.parentNode;
                oe.inArray(this, e) < 0 && (oe.cleanData(u(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        oe.fn[e] = function(e) {
            for (var n, i = [], r = oe(e), o = r.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), oe(r[a])[t](n), K.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var We, _e = {
            HTML: "block",
            BODY: "block"
        },
        Be = /^margin/,
        ze = new RegExp("^(" + De + ")(?!px)[a-z%]+$", "i"),
        Xe = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Ue = function(e, t, n, i) {
            var r, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = a[o];
            return r
        },
        Ve = Q.documentElement;
    ! function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ve.appendChild(a);
            var t = e.getComputedStyle(s);
            n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", r = "4px" === t.marginRight, Ve.removeChild(a)
        }
        var n, i, r, o, a = Q.createElement("div"),
            s = Q.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), oe.extend(ie, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return null == i && t(), i
            },
            pixelMarginRight: function() {
                return null == i && t(), r
            },
            reliableMarginLeft: function() {
                return null == i && t(), o
            },
            reliableMarginRight: function() {
                var t, n = s.appendChild(Q.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", Ve.appendChild(a), t = !parseFloat(e.getComputedStyle(n).marginRight), Ve.removeChild(a), s.removeChild(n), t
            }
        }))
    }();
    var Ye = /^(none|table(?!-c[ea]).+)/,
        Qe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ge = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Je = ["Webkit", "O", "Moz", "ms"],
        Ke = Q.createElement("div").style;
    oe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = S(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = oe.camelCase(t),
                    l = e.style;
                return t = oe.cssProps[s] || (oe.cssProps[s] = E(s) || s), a = oe.cssHooks[t] || oe.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t] : (o = typeof n, "string" === o && (r = Se.exec(n)) && r[1] && (n = c(e, t, r), o = "number"), void(null != n && n === n && ("number" === o && (n += r && r[3] || (oe.cssNumber[s] ? "" : "px")), ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n))))
            }
        },
        css: function(e, t, n, i) {
            var r, o, a, s = oe.camelCase(t);
            return t = oe.cssProps[s] || (oe.cssProps[s] = E(s) || s), a = oe.cssHooks[t] || oe.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = S(e, t, i)), "normal" === r && t in Ge && (r = Ge[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), oe.each(["height", "width"], function(e, t) {
        oe.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? Ye.test(oe.css(e, "display")) && 0 === e.offsetWidth ? Ue(e, Qe, function() {
                    return L(e, t, i)
                }) : L(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var r, o = i && Xe(e),
                    a = i && j(e, t, i, "border-box" === oe.css(e, "boxSizing", !1, o), o);
                return a && (r = Se.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = oe.css(e, t)), N(e, n, a)
            }
        }
    }), oe.cssHooks.marginLeft = A(ie.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(S(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), oe.cssHooks.marginRight = A(ie.reliableMarginRight, function(e, t) {
        return t ? Ue(e, {
            display: "inline-block"
        }, S, [e, "marginRight"]) : void 0
    }), oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        oe.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Ae[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, Be.test(e) || (oe.cssHooks[e + t].set = N)
    }), oe.fn.extend({
        css: function(e, t) {
            return xe(this, function(e, t, n) {
                var i, r, o = {},
                    a = 0;
                if (oe.isArray(t)) {
                    for (i = Xe(e), r = t.length; r > a; a++) o[t[a]] = oe.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return q(this, !0)
        },
        hide: function() {
            return q(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ee(this) ? oe(this).show() : oe(this).hide()
            })
        }
    }), oe.Tween = O, O.prototype = {
        constructor: O,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || oe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (oe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = O.propHooks[this.prop];
            return e && e.get ? e.get(this) : O.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = O.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this
        }
    }, O.prototype.init.prototype = O.prototype, O.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, oe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, oe.fx = O.prototype.init, oe.fx.step = {};
    var Ze, et, tt = /^(?:toggle|show|hide)$/,
        nt = /queueHooks$/;
    oe.Animation = oe.extend(R, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return c(n.elem, e, Se.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(me);
                for (var n, i = 0, r = e.length; r > i; i++) n = e[i], R.tweeners[n] = R.tweeners[n] || [], R.tweeners[n].unshift(t)
            },
            prefilters: [M],
            prefilter: function(e, t) {
                t ? R.prefilters.unshift(e) : R.prefilters.push(e)
            }
        }), oe.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? oe.extend({}, e) : {
                complete: n || !n && t || oe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !oe.isFunction(t) && t
            };
            return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
            }, i
        }, oe.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Ee).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = oe.isEmptyObject(e),
                    o = oe.speed(t, n, i),
                    a = function() {
                        var t = R(this, oe.extend({}, e), o);
                        (r || we.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = oe.timers,
                        a = we.get(this);
                    if (r) a[r] && a[r].stop && i(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && nt.test(r) && i(a[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    (t || !n) && oe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = we.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = oe.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, oe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), oe.each(["toggle", "show", "hide"], function(e, t) {
            var n = oe.fn[t];
            oe.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, i, r)
            }
        }), oe.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            oe.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), oe.timers = [], oe.fx.tick = function() {
            var e, t = 0,
                n = oe.timers;
            for (Ze = oe.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || oe.fx.stop(), Ze = void 0
        }, oe.fx.timer = function(e) {
            oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
        }, oe.fx.interval = 13, oe.fx.start = function() {
            et || (et = e.setInterval(oe.fx.tick, oe.fx.interval))
        }, oe.fx.stop = function() {
            e.clearInterval(et), et = null
        }, oe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, oe.fn.delay = function(t, n) {
            return t = oe.fx ? oe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(r)
                }
            })
        },
        function() {
            var e = Q.createElement("input"),
                t = Q.createElement("select"),
                n = t.appendChild(Q.createElement("option"));
            e.type = "checkbox", ie.checkOn = "" !== e.value, ie.optSelected = n.selected, t.disabled = !0, ie.optDisabled = !n.disabled, e = Q.createElement("input"), e.value = "t", e.type = "radio", ie.radioValue = "t" === e.value
        }();
    var it, rt = oe.expr.attrHandle;
    oe.fn.extend({
        attr: function(e, t) {
            return xe(this, oe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                oe.removeAttr(this, e)
            })
        }
    }), oe.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(), r = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? it : void 0)), void 0 !== n ? null === n ? void oe.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = oe.find.attr(e, t), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ie.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i, r = 0,
                o = t && t.match(me);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) i = oe.propFix[n] || n, oe.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        }
    }), it = {
        set: function(e, t, n) {
            return !1 === t ? oe.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = rt[t] || oe.find.attr;
        rt[t] = function(e, t, i) {
            var r, o;
            return i || (o = rt[t], rt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, rt[t] = o), r
        }
    });
    var ot = /^(?:input|select|textarea|button)$/i,
        at = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function(e, t) {
            return xe(this, oe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[oe.propFix[e] || e]
            })
        }
    }), oe.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && oe.isXMLDoc(e) || (t = oe.propFix[t] || t, r = oe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ot.test(e.nodeName) || at.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), ie.optSelected || (oe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        oe.propFix[this.toLowerCase()] = this
    });
    var st = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, a, s, l = 0;
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).addClass(e.call(this, t, $(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(me) || []; n = this[l++];)
                    if (r = $(n), i = 1 === n.nodeType && (" " + r + " ").replace(st, " ")) {
                        for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        s = oe.trim(i), r !== s && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, a, s, l = 0;
            if (oe.isFunction(e)) return this.each(function(t) {
                oe(this).removeClass(e.call(this, t, $(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(me) || []; n = this[l++];)
                    if (r = $(n), i = 1 === n.nodeType && (" " + r + " ").replace(st, " ")) {
                        for (a = 0; o = t[a++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        s = oe.trim(i), r !== s && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function(n) {
                oe(this).toggleClass(e.call(this, n, $(this), t), t)
            }) : this.each(function() {
                var t, i, r, o;
                if ("string" === n)
                    for (i = 0, r = oe(this), o = e.match(me) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else(void 0 === e || "boolean" === n) && (t = $(this), t && we.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : we.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + $(n) + " ").replace(st, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    oe.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = oe.isFunction(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (r = i ? e.call(this, n, oe(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : oe.isArray(r) && (r = oe.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), (t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = oe.valHooks[r.type] || oe.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(/\r/g, "") : null == n ? "" : n)) : void 0
        }
    }), oe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    return oe.trim(e.value)
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                        if (n = i[l], (n.selected || l === r) && (ie.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = oe(n).val(), o) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = oe.makeArray(t), a = r.length; a--;) i = r[a], (i.selected = oe.inArray(oe.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), oe.each(["radio", "checkbox"], function() {
        oe.valHooks[this] = {
            set: function(e, t) {
                return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) > -1 : void 0
            }
        }, ie.checkOn || (oe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var lt = /^(?:focusinfocus|focusoutblur)$/;
    oe.extend(oe.event, {
        trigger: function(t, n, i, r) {
            var o, a, s, l, c, u, d, f = [i || Q],
                p = ne.call(t, "type") ? t.type : t,
                h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = i = i || Q, 3 !== i.nodeType && 8 !== i.nodeType && !lt.test(p + oe.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[oe.expando] ? t : new oe.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : oe.makeArray(n, [t]), d = oe.event.special[p] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!r && !d.noBubble && !oe.isWindow(i)) {
                    for (l = d.delegateType || p, lt.test(l + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;
                    s === (i.ownerDocument || Q) && f.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = f[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : d.bindType || p, u = (we.get(a, "events") || {})[t.type] && we.get(a, "handle"), u && u.apply(a, n), (u = c && a[c]) && u.apply && be(a) && (t.result = u.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = p, r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), n) || !be(i) || c && oe.isFunction(i[p]) && !oe.isWindow(i) && (s = i[c], s && (i[c] = null), oe.event.triggered = p, i[p](), oe.event.triggered = void 0, s && (i[c] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = oe.extend(new oe.Event, n, {
                type: e,
                isSimulated: !0
            });
            oe.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
        }
    }), oe.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                oe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? oe.event.trigger(e, t, n, !0) : void 0
        }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        oe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), oe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), ie.focusin = "onfocusin" in e, ie.focusin || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            oe.event.simulate(t, e.target, oe.event.fix(e))
        };
        oe.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = we.access(i, t);
                r || i.addEventListener(e, n, !0), we.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = we.access(i, t) - 1;
                r ? we.access(i, t, r) : (i.removeEventListener(e, n, !0), we.remove(i, t))
            }
        }
    });
    var ct = e.location,
        ut = oe.now(),
        dt = /\?/;
    oe.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, oe.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return (!n || n.getElementsByTagName("parsererror").length) && oe.error("Invalid XML: " + t), n
    };
    var ft = /([?&])_=[^&]*/,
        pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        gt = /^(?:GET|HEAD)$/,
        vt = {},
        mt = {},
        yt = "*/".concat("*"),
        xt = Q.createElement("a");
    xt.href = ct.href, oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ct.href,
            type: "GET",
            isLocal: ht.test(ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": yt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? B(B(e, oe.ajaxSettings), t) : B(oe.ajaxSettings, e)
        },
        ajaxPrefilter: W(vt),
        ajaxTransport: W(mt),
        ajax: function(t, n) {
            function i(t, n, i, s) {
                var c, d, y, x, w, k = n;
                2 !== b && (b = 2, l && e.clearTimeout(l), r = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, i && (x = z(f, C, i)), x = X(f, x, C, c), c ? (f.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (oe.lastModified[o] = w), (w = C.getResponseHeader("etag")) && (oe.etag[o] = w)), 204 === t || "HEAD" === f.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = x.state, d = x.data, y = x.error, c = !y)) : (y = k, (t || !k) && (k = "error", 0 > t && (t = 0))), C.status = t, C.statusText = (n || k) + "", c ? g.resolveWith(p, [d, k, C]) : g.rejectWith(p, [C, k, y]), C.statusCode(m), m = void 0, u && h.trigger(c ? "ajaxSuccess" : "ajaxError", [C, f, c ? d : y]), v.fireWith(p, [C, k]), u && (h.trigger("ajaxComplete", [C, f]), --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, a, s, l, c, u, d, f = oe.ajaxSetup({}, n),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? oe(p) : oe.event,
                g = oe.Deferred(),
                v = oe.Callbacks("once memory"),
                m = f.statusCode || {},
                y = {},
                x = {},
                b = 0,
                w = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!s)
                                for (s = {}; t = pt.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = x[n] = x[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else C.always(e[C.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return r && r.abort(t), i(0, t), this
                    }
                };
            if (g.promise(C).complete = v.add, C.success = C.done, C.error = C.fail, f.url = ((t || f.url || ct.href) + "").replace(/#.*$/, "").replace(/^\/\//, ct.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = oe.trim(f.dataType || "*").toLowerCase().match(me) || [""], null == f.crossDomain) {
                c = Q.createElement("a");
                try {
                    c.href = f.url, c.href = c.href, f.crossDomain = xt.protocol + "//" + xt.host != c.protocol + "//" + c.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = oe.param(f.data, f.traditional)), _(vt, f, n, C), 2 === b) return C;
            u = oe.event && f.global, u && 0 == oe.active++ && oe.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !gt.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (dt.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = ft.test(o) ? o.replace(ft, "$1_=" + ut++) : o + (dt.test(o) ? "&" : "?") + "_=" + ut++)), f.ifModified && (oe.lastModified[o] && C.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && C.setRequestHeader("If-None-Match", oe.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + yt + "; q=0.01" : "") : f.accepts["*"]);
            for (d in f.headers) C.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(p, C, f) || 2 === b)) return C.abort();
            w = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) C[d](f[d]);
            if (r = _(mt, f, n, C)) {
                if (C.readyState = 1, u && h.trigger("ajaxSend", [C, f]), 2 === b) return C;
                f.async && f.timeout > 0 && (l = e.setTimeout(function() {
                    C.abort("timeout")
                }, f.timeout));
                try {
                    b = 1, r.send(y, i)
                } catch (e) {
                    if (!(2 > b)) throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return C
        },
        getJSON: function(e, t, n) {
            return oe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }), oe.each(["get", "post"], function(e, t) {
        oe[t] = function(e, n, i, r) {
            return oe.isFunction(n) && (r = r || i, i = n, n = void 0), oe.ajax(oe.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, oe.isPlainObject(e) && e))
        }
    }), oe._evalUrl = function(e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, oe.fn.extend({
        wrapAll: function(e) {
            var t;
            return oe.isFunction(e) ? this.each(function(t) {
                oe(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return oe.isFunction(e) ? this.each(function(t) {
                oe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = oe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = oe.isFunction(e);
            return this.each(function(n) {
                oe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), oe.expr.filters.hidden = function(e) {
        return !oe.expr.filters.visible(e)
    }, oe.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var bt = /\[\]$/,
        wt = /^(?:submit|button|image|reset|file)$/i,
        Ct = /^(?:input|select|textarea|keygen)/i;
    oe.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                t = oe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) U(n, e[n], t, r);
        return i.join("&").replace(/%20/g, "+")
    }, oe.fn.extend({
        serialize: function() {
            return oe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && Ct.test(this.nodeName) && !wt.test(e) && (this.checked || !Ne.test(e))
            }).map(function(e, t) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(/\r?\n/g, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(/\r?\n/g, "\r\n")
                }
            }).get()
        }
    }), oe.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var kt = {
            0: 200,
            1223: 204
        },
        Tt = oe.ajaxSettings.xhr();
    ie.cors = !!Tt && "withCredentials" in Tt, ie.ajax = Tt = !!Tt, oe.ajaxTransport(function(t) {
        var n, i;
        return ie.cors || Tt && !t.crossDomain ? {
            send: function(r, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (a in r) s.setRequestHeader(a, r[a]);
                n = function(e) {
                    return function() {
                        n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(kt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        } : void 0
    }), oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return oe.globalEval(e), e
            }
        }
    }), oe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), oe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, r) {
                    t = oe("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), Q.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Dt = [],
        St = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Dt.pop() || oe.expando + "_" + ut++;
            return this[e] = !0, e
        }
    }), oe.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, a, s = !1 !== t.jsonp && (St.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && St.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(St, "$1" + r) : !1 !== t.jsonp && (t.url += (dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return a || oe.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            a = arguments
        }, i.always(function() {
            void 0 === o ? oe(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Dt.push(r)), a && oe.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), ie.createHTMLDocument = function() {
        var e = Q.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), oe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || (ie.createHTMLDocument ? Q.implementation.createHTMLDocument("") : Q);
        var i = de.exec(e),
            r = !n && [];
        return i ? [t.createElement(i[1])] : (i = f([e], t, r), r && r.length && oe(r).remove(), oe.merge([], i.childNodes))
    };
    var At = oe.fn.load;
    oe.fn.load = function(e, t, n) {
        if ("string" != typeof e && At) return At.apply(this, arguments);
        var i, r, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (i = oe.trim(e.slice(s)), e = e.slice(0, s)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && oe.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(a, o || [e.responseText, t, e])
            })
        }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        oe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), oe.expr.filters.animated = function(e) {
        return oe.grep(oe.timers, function(t) {
            return e === t.elem
        }).length
    }, oe.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, a, s, l, c, u = oe.css(e, "position"),
                d = oe(e),
                f = {};
            "static" === u && (e.style.position = "relative"), s = d.offset(), o = oe.css(e, "top"), l = oe.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
        }
    }, oe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                oe.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                o = i && i.ownerDocument;
            return o ? (t = o.documentElement, oe.contains(t, i) ? (r = i.getBoundingClientRect(), n = V(o), {
                top: r.top + n.pageYOffset - t.clientTop,
                left: r.left + n.pageXOffset - t.clientLeft
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (i = e.offset()), i.top += oe.css(e[0], "borderTopWidth", !0), i.left += oe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - oe.css(n, "marginTop", !0),
                    left: t.left - i.left - oe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === oe.css(e, "position");) e = e.offsetParent;
                return e || Ve
            })
        }
    }), oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        oe.fn[e] = function(i) {
            return xe(this, function(e, i, r) {
                var o = V(e);
                return void 0 === r ? o ? o[t] : e[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r)
            }, e, i, arguments.length)
        }
    }), oe.each(["top", "left"], function(e, t) {
        oe.cssHooks[t] = A(ie.pixelPosition, function(e, n) {
            return n ? (n = S(e, t), ze.test(n) ? oe(e).position()[t] + "px" : n) : void 0
        })
    }), oe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        oe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            oe.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    a = n || (!0 === i || !0 === r ? "margin" : "border");
                return xe(this, function(t, n, i) {
                    var r;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? oe.css(t, n, a) : oe.style(t, n, i, a)
                }, t, o ? i : void 0, o, null)
            }
        })
    }), oe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }), oe.fn.andSelf = oe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return oe
    });
    var Et = e.jQuery,
        Nt = e.$;
    return oe.noConflict = function(t) {
        return e.$ === oe && (e.$ = Nt), t && e.jQuery === oe && (e.jQuery = Et), oe
    }, t || (e.jQuery = e.$ = oe), oe
}),
function(e) {
    function t(e) {
        var t = 0,
            n = e;
        return n = n.clone().attr("class", "hidden_element").appendTo("body"), t = n.width(!0), n.remove(), t
    }

    function n(e, t) {
        e && window.console && window.console.log && window.console.log("jQuery-LABELAUTY: " + t)
    }

    function i(e, t, n, i, r, o, a) {
        var s, l, c = "";
        return null == r ? s = l = "" : (s = r[0], l = null == r[1] ? s : r[1]), c = null == t ? "" : 'tabindex="0" role="' + i + '" aria-checked="' + n + '" aria-label="' + t + '"', 1 == o && 1 == a ? '<label for="' + e + '" ' + c + '><span class="labelauty-unchecked-image"></span><span class="labelauty-unchecked">' + s + '</span><span class="labelauty-checked-image"></span><span class="labelauty-checked">' + l + "</span></label>" : 1 == o ? '<label for="' + e + '" ' + c + '><span class="labelauty-unchecked">' + s + '</span><span class="labelauty-checked">' + l + "</span></label>" : '<label for="' + e + '" ' + c + '><span class="labelauty-unchecked-image"></span><span class="labelauty-checked-image"></span></label>'
    }
    e.fn.labelauty = function(r) {
        var o = e.extend({
            development: !1,
            class: "labelauty",
            icon: !0,
            label: !1,
            separator: "|",
            checked_label: "Checked",
            unchecked_label: "Unchecked",
            force_random_id: !1,
            minimum_width: !1,
            same_width: !0
        }, r);
        return this.each(function() {
            var r, a, s, l = e(this),
                c = l.is(":checked"),
                u = l.attr("type"),
                d = !0,
                f = !0,
                p = l.attr("aria-label");
            if (l.attr("aria-hidden", !0), !1 === l.is(":checkbox") && !1 === l.is(":radio")) return this;
            if (l.addClass(o.class), r = l.attr("data-labelauty"), f = o.label, d = o.icon, !0 === f && (null == r || 0 === r.length ? a = [o.unchecked_label, o.checked_label] : (a = r.split(o.separator), a.length > 2 ? (f = !1, n(o.development, "There's more than two labels. LABELAUTY will not use labels.")) : 1 === a.length && n(o.development, "There's just one label. LABELAUTY will use this one for both cases."))), l.css({
                    display: "none"
                }), l.removeAttr("data-labelauty"), s = l.attr("id"), o.force_random_id || null == s || "" === s.trim()) {
                var h = 1 + Math.floor(1024e3 * Math.random());
                for (s = "labelauty-" + h; 0 !== e(s).length;) h++, s = "labelauty-" + h, n(o.development, "Holy crap, between 1024 thousand numbers, one raised a conflict. Trying again.");
                l.attr("id", s)
            }
            var g = jQuery(i(s, p, c, u, a, f, d));
            if (g.click(function() {
                    l.is(":checked") ? e(g).attr("aria-checked", !1) : e(g).attr("aria-checked", !0)
                }), g.keypress(function(t) {
                    t.preventDefault(), 32 !== t.keyCode && 13 !== t.keyCode || (l.is(":checked") ? (l.prop("checked", !1), e(g).attr("aria-checked", !1)) : (l.prop("checked", !0), e(g).attr("aria-checked", !0)))
                }), l.after(g), !1 !== o.minimum_width && l.next("label[for=" + s + "]").css({
                    "min-width": o.minimum_width
                }), 0 != o.same_width && 1 == o.label) {
                var v = l.next("label[for=" + s + "]"),
                    m = t(v.find("span.labelauty-unchecked")),
                    y = t(v.find("span.labelauty-checked"));
                m > y ? v.find("span.labelauty-checked").width(m) : v.find("span.labelauty-unchecked").width(y)
            }
        })
    }
}(jQuery),
function(e, t) {
    "use strict";

    function n(e) {
        return {
            fast: 200,
            normal: 400,
            slow: 600
        }[e] || e
    }

    function i(e, t, n, i) {
        if ("function" != typeof n) {
            var o = e + ("string" == typeof n ? "." + n : "string" == typeof i ? "." + i : "");
            t.trigger(o)
        } else r.call(t, e, n, i);
        return this
    }

    function r(e, t, n) {
        var i = e + ("string" == typeof n ? "." + n : "");
        this.bind(i, t)
    }

    function o() {
        return JSON.parse(this.find(T + S).val() || "[]")
    }

    function a() {
        var t = e(this).find(T + q + " p"),
            n = e(this).children(T + S),
            i = [];
        t.each(function() {
            var t = e(this);
            t.find(":checkbox").prop("checked") && i.push(t.data("value"))
        }), e(this).children("select").val(i), n.val(JSON.stringify(i))
    }

    function s(t) {
        for (var n, i = e(this).find(T + q + " p"), r = e(this).children(T + S), o = [], a = 0; a < i.length; a++) {
            var s = i.eq(a),
                l = t.indexOf(s.data("value"));
            t.indexOf(s.data("value")) >= 0 ? (n = s.find(":checkbox").prop("checked", !0), o.push(t[l])) : s.find(":checkbox").prop("checked", !1)
        }
        e(this).children("select").val(t), n && (n.trigger(k + "-chupdate", [!0]), r.val(JSON.stringify(o)))
    }

    function l(t) {
        var n = e(this),
            i = this.data(k),
            r = n.children("select"),
            o = n.children(T + S),
            a = n.children(T + D),
            s = r.find("option").filter(function() {
                return this.value == t
            });
        return a.removeClass(k + A).siblings(T + M).removeClass(k + M + A), s.length ? (n.find(T + q + " p").eq(s[0].index).addClass(k + H).siblings().removeClass(k + H), o.val(t).data("changed", !0), void r.val(t).change()) : (n.find(T + q + " p").removeClass(k + H), r.children().prop("selected", !1), i.invalidAsValue ? (i.highlightInvalid || (i.invalidAsValue ? i.highlightInvalid : null === i.highlightInvalid)) && a.addClass(k + A).siblings(T + M).addClass(k + M + A) : t = "", o.val(t), void a.val(t))
    }

    function c() {
        if (!this.data("listenersAdded")) {
            var n = this,
                i = n.data(k),
                r = null;
            this.on("keyup", T + D + ", " + T + E, function(t) {
                    if (!([38, 40, 13, 27, 9, 37, 39, 17, 18, 16, 20, 33, 34, 35, 36].indexOf(t.which) >= 0)) {
                        var n = function(t) {
                                if ((t.ctrlKey || t.shiftKey || 45 != t.which) && (!t.ctrlKey || 65 != t.which)) {
                                    var n = i.fullMatch,
                                        r = i.highlight;
                                    r = n ? !1 !== r : !!r;
                                    var o = e(this),
                                        a = this.value.trim();
                                    i.filterIgnoreCase && (a = a.toLowerCase()), i.filterIgnoreAccents && String.prototype.latinize && (a = a.latinize());
                                    var s = o.closest(T).children(T + q);
                                    m.call(s, "down", !0);
                                    var l = o.closest(T).find("select option");
                                    if (e(T + " " + T + q).each(function() {
                                            s[0] != this && m.call(e(this), "up")
                                        }), !a) return void s.children("p").show().each(function() {
                                        e(T + "-marker", this).contents().unwrap()
                                    });
                                    var c = i.hideSeparatorsOnSearch ? "p" : "p:not(" + T + I + ", " + T + F + ")";
                                    s.children(c).hide(), l.each(function() {
                                        var t = e(this).text().trim();
                                        if (i.filterIgnoreCase && (t = t.toLowerCase()), i.filterIgnoreAccents && String.prototype.latinize && (t = t.latinize()), n ? t.indexOf(a) >= 0 : 0 == t.indexOf(a)) {
                                            var o = i.filterIgnoreCase ? "i" : "",
                                                c = new RegExp("(" + a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1") + ")", n ? o + "g" : o),
                                                u = s.children("p:eq(" + l.index(this) + "):not(" + T + I + ", " + T + F + ")").show();
                                            r && u.each(function() {
                                                e(T + "-marker", this).contents().unwrap();
                                                var t = e(T + O, this)[0];
                                                t.innerHTML = t.innerHTML.replace(c, '<span class="' + k + '-marker">$1</span>')
                                            })
                                        }
                                    })
                                }
                            },
                            o = this,
                            a = i.filterDelay;
                        a ? (clearTimeout(r), r = setTimeout(function() {
                            n.call(o, t)
                        }, a)) : n.call(o, t)
                    }
                }), this.on("keydown", T + D, function(t) {
                    if ([38, 40, 13, 27, 9].indexOf(t.which) >= 0) {
                        9 != t.which && t.preventDefault();
                        var n, r, o = e(this).closest(T),
                            a = o.children(T + q),
                            s = e(T + H, a[0]),
                            l = e("p:first", a[0]),
                            c = i.loopScrolling,
                            u = ":not(" + T + I + "):not(" + T + F + ")",
                            d = "default" == i.mode && i.fillOnArrowPress;
                        if (!a.is(":animated")) {
                            var f = this.value.trim();
                            f = i.filterIgnoreCase ? f.toLowerCase() : f;
                            var p = a.scrollTop();
                            if (40 == t.which) {
                                if (a.is(":hidden")) return void m.call(a, "down");
                                if (0 == s.length) n = l.is(":visible" + u) ? l.addClass(k + H) : l.nextAll(":visible" + u).first().addClass(k + H);
                                else {
                                    if (!c && !s.nextAll(":visible" + u).first().length) return;
                                    n = s.removeClass(k + H).nextAll(":visible" + u).first().addClass(k + H), 0 == n.length && (n = l.is(":visible") ? l.addClass(k + H) : l.nextAll(":visible" + u).first().addClass(k + H)), 0 == n.length && (n = l), r = n.position().top - a.position().top;
                                    var h = n.outerHeight();
                                    r + 6 * h > a.height() ? r + 6 * h - a.height() > 1.5 * h ? a.scrollTop(p + r) : a.scrollTop(p + h) : 0 > r && a.scrollTop(p - -r)
                                }
                                d && (this.value = n.find(T + O).text(), o.children(T + D).data("fillonarrow", !0))
                            } else if (38 == t.which) {
                                if (a.is(":visible")) {
                                    if (!c && !s.prevAll(":visible" + u).first().length) return;
                                    n = s.removeClass(k + H).prevAll(":visible" + u).first().addClass(k + H), 0 == n.length && (n = e("p:visible" + u + ":last", a[0]).addClass(k + H)), r = n.position().top - a.position().top, h = n.outerHeight(), 3 * h > r ? a.scrollTop(p - -r - 3 * h) : r > a.height() - 3 * h && a.scrollTop(p + r - 3 * h), d && (this.value = n.find(T + O).text(), o.children(T + D).data("fillonarrow", !0))
                                }
                            } else if (13 == t.which) {
                                if (i.fillOnBlur) return void b(a).click();
                                a.children(T + H).click(), "default" == i.mode && m.call(a, "up")
                            } else if (27 == t.which) i.blurOnEscape ? e(this).blur() : e(this), a.is(":visible") && (m.call(a, "up"), t.stopPropagation());
                            else if (9 == t.which && i.fillOnTab && f) {
                                var g = a.children(T + H);
                                g.length && g.click()
                            }
                        }
                    }
                }), this.on("change", "select", function(t, n) {
                    var i = e(this).closest(T),
                        r = e("option:selected", this).text();
                    i.children(T + D).val(r).data("value", r);
                    var o = i.children(T + S);
                    return o.data("changed") ? void o.data("changed", !1) : n ? (a.call(i), void o.change()) : (o.change(), void m.call(i.children(T + q), "up"))
                }), this.on(k + "-chupdate", T + q + " p :checkbox", function(t, n) {
                    n && (t.stopPropagation(), y.call(e(this).parent(), t, !0))
                }), this.on("click", T + q + " p", function(t) {
                    if (clearTimeout(C), t.stopPropagation(), !e(this).is(T + I + ", " + T + F)) {
                        n.children(T + A).removeClass(k + A), n.children(T + M).removeClass(k + M + A);
                        var i = e(this),
                            r = i.parent(),
                            o = r.children(),
                            a = o.index(this);
                        if ("checkboxes" == n.data(k).mode) return void y.call(this, t);
                        var s = r.closest(T).children("select");
                        s.children("option").eq(a).prop("selected", !0), s.siblings(T + S).val(s.val()), s.change(), m.call(i.parent(), "up"), i.addClass(k + H).siblings().removeClass(k + H)
                    }
                }), this.on("blur", T + D, function(r) {
                    var o = e(this),
                        a = e(r.relatedTarget).closest(T);
                    if (!(a.length > 0 && a[0] === o.closest(T)[0])) {
                        C = setTimeout(function() {
                            var i = e(this);
                            n.data(k), this === t.activeElement && i.data("silentfocus", !0), i.data("fillonarrow", !1), m.call(i.closest(T).children(T + q), "up")
                        }.bind(this), 200);
                        var s = o.val().trim(),
                            l = o.siblings(T + S),
                            c = l.val();
                        if (s) {
                            var u;
                            o.siblings("select").find("option").each(function() {
                                i.filterIgnoreCase ? s.toLowerCase() == e(this).text().trim().toLowerCase() && (u = this.value) : s == e(this).text().trim() && (u = this.value)
                            }), u ? l.val(u) : l.val(i.invalidAsValue ? s : "")
                        } else l.val("");
                        c !== l.val() && l.change().data("changed", !0)
                    }
                }), this.on("focus", T + D, function() {
                    if (e(this).data("silentfocus")) return void e(this).data("silentfocus", !1);
                    if (this.value.trim()) {
                        if (n.data(k).expandOnFocusWithValue || e(this).data("expandfocus"))
                            if (n[k]("val")) {
                                var t = n.children(T + q);
                                t.children().show(), m.call(t, "down")
                            } else e(this).keyup()
                    } else(n.data(k).expandOnFocus || e(this).data("expandfocus")) && e(this).keyup();
                    e(this).data("expandfocus", !1)
                }), this.on("click", T + D + "-div", function() {
                    n.data(k).disabled || m.call(e(this).siblings(T + q), "down")
                }), this.on("click", T + D, function(t) {
                    var n = e(this).closest(T)[0];
                    e(T).each(function() {
                        this != n && e(this)[k]("close")
                    }), t.stopPropagation()
                }), this.on("click", T + P, function(t) {
                    clearTimeout(C);
                    var n = e(this),
                        i = n.closest(T),
                        r = i.children(T + q);
                    r.is(":visible") ? (m.call(r, "up"), i.children(T + D).data("silentfocus", !0).focus()) : i.children(T + D).data("expandfocus", !0).focus()
                }), this.on("click", T + j, function(t) {
                    clearTimeout(C), t.stopPropagation();
                    var r = e(this),
                        o = r.parent();
                    n.children(T + q).children("p").eq(r.data("index")).find(":checkbox").prop("checked", !1), o.fadeOut(i.animation.duration), r.closest(T).children("select").trigger("change", [!0])
                }),
                i.autoLoad != e.noop && e(T + q, this).scroll(function() {
                    var t = e(this),
                        r = n.children("select"),
                        o = t.scrollTop();
                    o > t.data("scrollTop") ? this.scrollHeight - o - 50 < t.height() && (n.data("pending") || (n.data("pending", !0), i.autoLoad.call(n, r.find("option[value]:last").val(), "bottom"))) : o < t.height() / 2 && (n.data("pending") || (n.data("pending", !0), i.autoLoad.call(n, r.find("option[value]:first").val(), "top"))), t.data("scrollTop", o)
                }).data("scrollTop", 0), e(t).bind("click." + k, {
                    thisIs: this
                }, function(t) {
                    m.call(e(t.data.thisIs).children(T + q), "up")
                }), this.data("listenersAdded", !0)
        }
    }

    function u(t) {
        if ("string" == typeof t && null == (t = e.parseJSON(t))) return [];
        if (!t) return !1;
        if (!(t instanceof Array)) {
            if ("object" != typeof t) return !1;
            void 0 === t.length && (t.length = Object.keys(t).length), t = [].slice.call(t)
        }
        return t
    }

    function d(e) {
        for (var t = 0; t < e.length; t++) e[t].value && e[t].text || e[t].hasOwnProperty("separator") || e.splice(t, 1)
    }

    function f(t) {
        for (var n = 0; n < t.length; n++) t[n].value || e(t[n]).hasClass(k + I) || "optgroup" == t[n].tagName.toLowerCase() || e(t[n]).remove()
    }

    function p(e, t) {
        var n = e.text.trim().toLowerCase(),
            i = t.text.trim().toLowerCase();
        return n > i ? 1 : n == i ? 0 : -1
    }

    function h(e) {
        for (var t = 0; t < e.length; t++)
            for (var n = t + 1; n < e.length; n++) e[t] && e[n] && e[t].value == e[n].value && e.splice(t, 1)
    }

    function g(t) {
        for (var n = 0; n < t.length; n++)
            for (var i = n + 1; i < t.length; i++) t[n] && t[i] && t[n].value == t[i].value && "optgroup" != t[n].tagName.toLowerCase() && e(t[n]).remove()
    }

    function v() {
        var t, n = this.children(T + D),
            i = this.children("select"),
            r = this.data(k),
            o = n.val().trim();
        o = r.filterIgnoreCase ? o.toLowerCase() : o, i.find("option").each(function() {
            var n = e(this).text().trim();
            (n = r.filterIgnoreCase ? n.toLowerCase() : n) == o && (t = this.value)
        }), !t && o ? (r.forbidInvalid ? n.closest(T).find(T + D).val("").data("value", "") : (r.highlightInvalid || (r.invalidAsValue ? r.highlightInvalid : null === r.highlightInvalid)) && n.addClass(k + A).siblings(T + M).addClass(k + M + A), r.invalidAsValue || n.siblings("select, " + T + S).val("")) : n.removeClass(k + A).siblings(T + M).removeClass(k + M + A)
    }

    function m(t, n) {
        if (!this.is(":animated") && this.length && ("up" != t || !this.is(":hidden") || 1 != this.length)) {
            var i = this.parent().data(k).animation;
            e.easing[i.easing] || (console.warn("no such easing: " + i.easing), i.easing = "swing");
            var r = this.parent(),
                o = r.data(k);
            "up" == t ? (o.beforeClose.call(r), i.complete = function() {
                "checkboxes" != o.mode && v.call(r), o.afterClose.call(r)
            }, this.slideUp(i).data("p-clicked-index", -1), r.children(T + P).removeClass(k + P + "-up")) : (o.beforeOpen.call(r), i.complete = function() {
                o.afterOpen.call(r)
            }, this.slideDown(i), r.children(T + P).addClass(k + P + "-up"), r.find(T + H).removeClass(k + H), e(T + "-marker", r).contents().unwrap(), r.children(T + q).children("p").show());
            r.children(T + D).each(function() {
                var i = e(this);
                if (i.data("fillonarrow") && !n && i.data("fillonarrow", !1).val(i.data("value")), "down" == t) {
                    var a = this.value.trim();
                    o.filterIgnoreCase && (a = a.toLowerCase());
                    var s = r.find("select option");
                    s.each(function() {
                        var t = e(this).text().trim();
                        return o.filterIgnoreCase && (t = t.toLowerCase()), t == a ? (r.children(T + q).children("p:eq(" + s.index(this) + "):not(" + T + I + ", " + T + F + ")").first().addClass(k + H), !1) : void 0
                    })
                }
            })
        }
    }

    function y(t, i) {
        var r = e(this),
            o = r.closest(T),
            a = r.parent(),
            s = a.children("p"),
            l = s.index(this),
            c = n(a.parent().data(k).animation.duration);
        if (!i) {
            var u = r.find(":checkbox");
            e(t.target).is(":checkbox") || u.prop("checked", !u.prop("checked"));
            var d = u.prop("checked");
            if (t.shiftKey && a.data("p-clicked-index") >= 0)
                for (var f = a.data("p-clicked-index"), p = l > f ? f : l, h = l > f ? l : f, g = p; h >= g; g++) e(s[g]).find(":checkbox").prop("checked", d)
        }
        var v = o.find(T + L).prepend("<span />");
        o.find(T + L).fadeOut(c / 5, function() {
            v.empty().show(), s.each(function(t) {
                var n = e(this);
                n.find(":checkbox").prop("checked") && v.append(e("<div />").addClass(k + N).append(e("<div />").addClass(k + N + "-text").text(n.find(T + O).text())).append(e("<div />").addClass(k + j).text("×").data("index", t)).fadeIn(1.5 * c).attr("title", n.attr("title")))
            }), v.append('<div style="clear: both" />')
        }), a.data("p-clicked-index", l), r.closest(T).children("select").trigger("change", [!0])
    }

    function x(t, n) {
        for (var i = this.data(k), r = this.find("select"), o = this.find(T + q), a = 0; a < t.length; a++) {
            if (t[a].hasOwnProperty("separator")) {
                if (t[a].hasOwnProperty("header")) s = e('<p class="' + k + F + '" />').text(t[a].header);
                else var s = e('<p class="' + k + I + '" />');
                var l = e("<option />")
            } else l = e("<option />").val(t[a].value).text(t[a].text).prop("selected", !!t[a].selected), s = i.pFillFunc.call(this, t[a], i), "checkboxes" == i.mode && s.prepend('<input type="checkbox" />');
            s.data("value", t[a].value), n ? (r.prepend(l), o.prepend(s)) : (r.append(l), o.append(s))
        }
    }

    function b(e) {
        var t = e.children(T + H + ":visible");
        return 0 == t.length && (t = e.children(":visible:first")), t
    }

    function w(e) {
        if (null == e) return null;
        for (var t = Object.keys(e), n = 0; n < t.length; n++) {
            var i = t[n].replace(/-([a-z])/g, function(e) {
                return e[1].toUpperCase()
            });
            t[n] != i && (e[i] = e[t[n]], delete e[t[n]]), "object" == typeof e[i] && "data" != i && w(e[i])
        }
        return e
    }
    var C, k = "scombobox",
        T = "." + k,
        D = "-display",
        S = "-value",
        A = "-invalid",
        E = D + "-div",
        N = E + "-item",
        j = N + "-remove",
        L = E + "-holder",
        q = "-list",
        O = "-mainspan",
        H = "-hovered",
        I = "-separator",
        F = "-header",
        M = "-dropdown-background",
        P = "-dropdown-arrow",
        R = "-disabled",
        $ = parseInt,
        W = {
            init: function() {
                var t = this.find(T + q),
                    n = this.find("select"),
                    i = this.find(T + M),
                    r = this.find(T + P),
                    o = this.data(k);
                if (this.addClass(k), 0 == n.length && this.append(e("<select />")), this.attr("id") && n.removeAttr("id"), n.attr("multiple") && (this.data(k).mode = "checkboxes"), 0 == i.length && this.append('<div class="' + k + M + '" />'), 0 == r.length && this.append('<div class="' + k + P + '" />'), W.displayDropdown.call(this, o.showDropDown), "checkboxes" != o.mode && 0 == this.find(T + D).length) {
                    var a = e('<input class="' + k + D + '" type="text" />');
                    a.attr("title", n.attr("title")), a.attr("placeholder", o.placeholder), this.append(a), this.height(+a.css("font-size") + +a.css("padding-top") + +a.css("padding-bottom"))
                }
                if (null != o.tabindex && this.find(T + D).attr("tabindex", o.tabindex), 0 == this.find(T + S).length && this.append('<input class="' + k + S + '" type="hidden" />'), (this.find(T + D).is(":disabled") || o.disabled) && this.find(T + M + ", " + T + P).hide(), o.disabled && (this.find(T + D).prop("disabled", !0), this.addClass(k + R)), (n.attr("required") || o.required) && (this.find(T + D).prop("required", "required"), this.addClass(k + "-required")), 0 == t.length && this.append(t = e('<div class="' + k + q + '"></div>')), "checkboxes" == o.mode) {
                    this.addClass(k + "-checkboxes"), this.find(T + D).remove();
                    var s = this.find(T + D + "-div");
                    0 == s.length && (s = this.append('<div class="' + k + E + '"><div class="' + k + L + '" /></div>')), s.attr("title", n.attr("title")), t.insertAfter(this.find(T + D + "-div"));
                    var l = this.find(T + L),
                        u = e('<div class="' + k + N + '" id="' + k + '-test-item"><div class="' + k + N + '-text">x</div></div>');
                    l.append(u.css("margin-left", "-9999px").show());
                    var d = u.height() + $(u.css("padding-top")) + $(u.css("padding-top")) + $(u.css("margin-top")) + $(u.css("margin-top")) + $(u.css("border-top-width")) + $(u.css("border-top-width")) + $(l.css("padding-top")) + $(l.css("padding-top"));
                    this.find(T + D + "-div").css("min-height", d + "px"), u.remove()
                } else this.find(T + "-display-div").remove(), t.insertAfter(this.find(T + D));
                return t.css({
                    "max-width": o.listMaxWidth,
                    "max-height": o.maxHeight
                }), 1 == o.wrap && t.css("white-space", "normal"), o.autoLoad != e.noop && (o.loopScrolling = !1), c.call(this), this.data(k + "-init", !0), W.fill.call(this, o.data)
            },
            fill: function(t, n) {
                var i = this.find("select").children("option, optgroup"),
                    r = this.find("." + k + q),
                    o = this.find("select");
                t = u(t);
                var a = this.data(k),
                    s = a.mode;
                if (t ? (a.removeDuplicates && h(t), d(t), a.sort && (t.sort(p), a.sortAsc || t.reverse()), n || (o.empty(), r.empty(), this.children(T + S + ", " + T + D).val("")), x.call(this, t, 2 == n)) : (a.removeDuplicates && (g(i), f(i), i = this.find("select").children("option, optgroup")), 0 == i.length || i.each(function() {
                        var t = e(this),
                            n = e("<p />");
                        if (n.attr("title", t.attr("title")), t.hasClass(k + I)) t.hasClass(k + F) ? r.append(n.addClass(k + F).text(t.text())) : n.addClass(k + I);
                        else {
                            if ("optgroup" == this.tagName.toLowerCase()) {
                                var i = t.attr("label"),
                                    o = e("option", this);
                                return t.before("<option />"), t.after(o), t.remove(), r.append(i ? n.addClass(k + F).text(i) : n.addClass(k + I)), void o.each(function() {
                                    r.append(e("<p />").attr("title", this.title).append(e('<span class="' + k + O + '" />').text(e(this).text())).data("value", this.value))
                                })
                            }
                            n.append(e('<span class="' + k + O + '" />').text(t.text())).data("value", this.value), "checkboxes" == s && n.prepend('<input type="checkbox" />')
                        }
                        r.append(n)
                    })), this.data(k + "-init") && (a.callback.func.apply(this, a.callback.args), this.data(k + "-init", !1)), i = this.find("select").children("option"), !a.empty)
                    if ("checkboxes" != s) this[k]("val", i.filter("option:selected:last").val());
                    else {
                        var l = i.filter(":selected").map(function() {
                            return e(this).val()
                        }).get();
                        this[k]("val", l)
                    }
                return this
            },
            clear: function() {
                return this.children("select").empty(), this.children(T + q).empty().width(""), this.children(T + D).removeClass(k + A), this.children(T + M).removeClass(k + M + A), this
            },
            data: function(e) {
                return 0 == arguments.length ? this.data(k).data : (this.data(k).data = e, this)
            },
            disabled: function(e) {
                var t = this.data(k).mode;
                return 0 == arguments.length ? "checkboxes" == t ? this.hasClass(k + R) : this.children(T + D).prop("disabled") : (e = !!e, this.children(T + D).prop("disabled", e), e ? (this.addClass(k + R), this.children(T + M + ", " + T + P).hide()) : (this.removeClass(k + R), this.children(T + M + ", " + T + P).show()), this)
            },
            tabindex: function(e) {
                var t = this.find(T + D);
                return 0 == arguments.length ? t.attr("tabindex") : (t.attr("tabindex", e), this)
            },
            options: function(t) {
                return 0 == arguments.length ? this.data(k) : (e.extend(!0, this.data(k), w(t)), this)
            },
            val: function(e) {
                var t = this.data(k),
                    n = t.mode;
                if (0 == arguments.length) {
                    if ("default" == n) var i = this.find(T + S).val();
                    return "default" == n ? this.find(T + D).is(":disabled") ? "" : i : "checkboxes" == n ? o.call(this) : null
                }
                return "default" == n ? l.call(this, e) : "checkboxes" == n && s.call(this, e), this
            },
            open: function() {
                return m.call(this.children(T + q), "down"), this
            },
            close: function() {
                return m.call(this.children(T + q), "up"), this
            },
            change: function(e, t) {
                return i.call(this, "change", this.children(T + S), e, t)
            },
            focus: function(e, t) {
                return i.call(this, "focus", this.children(T + D), e, t)
            },
            blur: function(e, t) {
                return i.call(this, "blur", this.children(T + D), e, t)
            },
            keyup: function(e, t) {
                return i.call(this, "keyup", this.children(T + D), e, t)
            },
            keydown: function(e, t) {
                return i.call(this, "keydown", this.children(T + D), e, t)
            },
            keypress: function(e, t) {
                return i.call(this, "keypress", this.children(T + D), e, t)
            },
            click: function(e, t) {
                return i.call(this, "click", this.children(T + D), e, t)
            },
            mousedown: function(e, t) {
                return i.call(this, "mousedown", this.children(T + D), e, t)
            },
            clickDropdown: function(e, t) {
                return i.call(this, "click", this.children(T + P), e, t)
            },
            toSelect: function() {
                var e = this.children("select").insertAfter(this);
                return this.data(k).reassignId && e.attr("id", this.attr("id")), this.remove(), e
            },
            displayDropdown: function(e) {
                return arguments.length ? e ? this.children(T + P + ", " + T + M).show() : this.children(T + P + ", " + T + M).hide() : this.data(k).showDropdown ? this.children(T + P + ", " + T + M).show() : this.children(T + P + ", " + T + M).hide(), this
            },
            placeholder: function(e) {
                var t = this.children(T + D);
                return arguments.length ? (t.attr("placeholder", e), this) : t.attr("placeholder")
            }
        };
    e.fn[k] = function(t) {
        if ("string" == typeof t) {
            this.length || e.error("Calling " + k + "." + t + "() method on empty collection"), null == this.data(k + "-init") && e.error("Calling " + k + "." + t + "() method prior to initialization");
            var n = W[t];
            n || e.error("No such method: " + t + " in jQuery." + k + "()")
        } else {
            if (!(["object", "undefined"].indexOf(typeof t) >= 0)) return e.error("Incorrect usage"), this;
            var i = e.extend(!0, {}, e.fn[k].defaults, w(t))
        }
        return n ? n.apply(this, Array.prototype.slice.call(arguments, 1)) : this.each(function() {
            var t = e(this);
            t.parent().hasClass(k) || (t.is("select") && (t.wrap("<div />"), i.reassignId && t.parent().attr("id", t.attr("id")), t = t.parent()), t.data(k, e.extend(!0, {}, i)), W.init.apply(t))
        })
    }, e.fn[k].defaults = {
        data: null,
        empty: !1,
        required: !1,
        disabled: !1,
        sort: !0,
        sortAsc: !0,
        removeDuplicates: !0,
        fullMatch: !1,
        highlight: null,
        filterIgnoreCase: !0,
        filterIgnoreAccents: !1,
        filterDelay: 0,
        hideSeparatorsOnSearch: !1,
        expandOnFocus: !0,
        expandOnFocusWithValue: !0,
        tabindex: null,
        forbidInvalid: !1,
        invalidAsValue: !1,
        highlightInvalid: null,
        reassignId: !0,
        mode: "default",
        pMarkup: '<span class="' + k + O + '">${text}</span> <span>${additional}</span>',
        pFillFunc: function(t, n) {
            return e("<p />").html(n.pMarkup.replace("${text}", t.text).replace("${additional}", t.additional ? t.additional : ""))
        },
        animation: {
            duration: "fast",
            easing: "swing"
        },
        listMaxWidth: window.screen.width / 2,
        wrap: !0,
        maxHeight: "",
        fillOnArrowPress: !0,
        fillOnBlur: !1,
        blurOnEscape: !1,
        fillOnTab: !0,
        showDropDown: !0,
        callback: {
            func: e.noop,
            args: []
        },
        beforeOpen: e.noop,
        beforeClose: e.noop,
        afterOpen: e.noop,
        afterClose: e.noop,
        autoLoad: e.noop,
        loopScrolling: !0,
        placeholder: ""
    }, e.fn[k].extendDefaults = function(t) {
        e.extend(!0, e.fn[k].defaults, t)
    }
}(jQuery, document), $(document).ready(function() {
    $(".signin__memory").labelauty(), $(".user__check").labelauty(), $(".user__link").click(function() {
        $(".user__registration").toggle("slow")
    }), $(document).mousemove(function(e) {
        $("#blueBg").css("opacity", "" + (1 - e.pageY / 1e3))
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
    })
});