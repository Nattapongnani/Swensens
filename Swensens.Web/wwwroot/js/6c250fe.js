/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [104], {
        1327: function(t, e, n) {
            "use strict";
            n.d(e, "c", (function() {
                return i
            })), n.d(e, "a", (function() {
                return o
            })), n.d(e, "b", (function() {
                return s
            })), n.d(e, "d", (function() {
                return u
            })), n.d(e, "h", (function() {
                return a
            })), n.d(e, "e", (function() {
                return c
            })), n.d(e, "f", (function() {
                return h
            })), n.d(e, "g", (function() {
                return f
            }));
            var r = function(t, e) {
                return (r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            };

            function i(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var o = function() {
                return (o = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }).apply(this, arguments)
            };

            function s(t, e, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function s(t) {
                        try {
                            a(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(t) {
                        try {
                            a(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                            t(e)
                        }))).then(s, u)
                    }
                    a((r = r.apply(t, e || [])).next())
                }))
            }

            function u(t, e) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function u(o) {
                    return function(u) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = s.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            s.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            s.label = i[1], i = o;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(o);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                o = e.call(t, s)
                            } catch (t) {
                                o = [6, t], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, u])
                    }
                }
            }

            function a(t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                    n = e && t[e],
                    r = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && r >= t.length && (t = void 0), {
                            value: t && t[r++],
                            done: !t
                        }
                    }
                };
                throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function c(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, i, o = n.call(t),
                    s = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = o.next()).done;) s.push(r.value)
                } catch (t) {
                    i = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return s
            }

            function h() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(c(arguments[e]));
                return t
            }

            function f() {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                var r = Array(t),
                    i = 0;
                for (e = 0; e < n; e++)
                    for (var o = arguments[e], s = 0, u = o.length; s < u; s++, i++) r[i] = o[s];
                return r
            }
        },
        1409: function(t, e, n) {
            "use strict";
            (function(t) {
                n.d(e, "a", (function() {
                    return or
                })), n.d(e, "b", (function() {
                    return ur
                })), n.d(e, "c", (function() {
                    return sr
                })), n.d(e, "d", (function() {
                    return ar
                })), n.d(e, "e", (function() {
                    return cr
                })), n.d(e, "f", (function() {
                    return hr
                })), n.d(e, "g", (function() {
                    return rr
                })), n.d(e, "h", (function() {
                    return ir
                }));
                var r = function(t, e) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(t, e) {
                            t.__proto__ = e
                        } || function(t, e) {
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                        })(t, e)
                };

                function i(t) {
                    var e = "function" == typeof Symbol && Symbol.iterator,
                        n = e && t[e],
                        r = 0;
                    if (n) return n.call(t);
                    if (t && "number" == typeof t.length) return {
                        next: function() {
                            return t && r >= t.length && (t = void 0), {
                                value: t && t[r++],
                                done: !t
                            }
                        }
                    };
                    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
                }
                var o, s = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
                    u = u || {},
                    a = s || self;

                function c() {}

                function h(t) {
                    var e = typeof t;
                    return "array" == (e = "object" != e ? e : t ? Array.isArray(t) ? "array" : e : "null") || "object" == e && "number" == typeof t.length
                }

                function f(t) {
                    var e = typeof t;
                    return "object" == e && null != t || "function" == e
                }
                var l = "closure_uid_" + (1e9 * Math.random() >>> 0),
                    p = 0;

                function d(t, e, n) {
                    return t.call.apply(t.bind, arguments)
                }

                function v(t, e, n) {
                    if (!t) throw Error();
                    if (2 < arguments.length) {
                        var r = Array.prototype.slice.call(arguments, 2);
                        return function() {
                            var n = Array.prototype.slice.call(arguments);
                            return Array.prototype.unshift.apply(n, r), t.apply(e, n)
                        }
                    }
                    return function() {
                        return t.apply(e, arguments)
                    }
                }

                function y(t, e, n) {
                    return (y = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? d : v).apply(null, arguments)
                }

                function g(t, e) {
                    var n = Array.prototype.slice.call(arguments, 1);
                    return function() {
                        var e = n.slice();
                        return e.push.apply(e, arguments), t.apply(this, e)
                    }
                }

                function b() {
                    return Date.now()
                }

                function m(t, e) {
                    function n() {}
                    n.prototype = e.prototype, t.X = e.prototype, t.prototype = new n, t.prototype.constructor = t, t.Kb = function(t, n, r) {
                        for (var i = Array(arguments.length - 2), o = 2; o < arguments.length; o++) i[o - 2] = arguments[o];
                        return e.prototype[n].apply(t, i)
                    }
                }

                function w() {
                    this.j = this.j, this.i = this.i
                }
                w.prototype.j = !1, w.prototype.ja = function() {
                    if (!this.j && (this.j = !0, this.G(), 0))(function(t) {
                        Object.prototype.hasOwnProperty.call(t, l) && t[l] || (t[l] = ++p)
                    })(this)
                }, w.prototype.G = function() {
                    if (this.i)
                        for (; this.i.length;) this.i.shift()()
                };
                var _ = Array.prototype.indexOf ? function(t, e) {
                        return Array.prototype.indexOf.call(t, e, void 0)
                    } : function(t, e) {
                        if ("string" == typeof t) return "string" != typeof e || 1 != e.length ? -1 : t.indexOf(e, 0);
                        for (var n = 0; n < t.length; n++)
                            if (n in t && t[n] === e) return n;
                        return -1
                    },
                    I = Array.prototype.forEach ? function(t, e, n) {
                        Array.prototype.forEach.call(t, e, n)
                    } : function(t, e, n) {
                        for (var r = t.length, i = "string" == typeof t ? t.split("") : t, o = 0; o < r; o++) o in i && e.call(n, i[o], o, t)
                    };

                function E(t) {
                    return Array.prototype.concat.apply([], arguments)
                }

                function O(t) {
                    var e = t.length;
                    if (0 < e) {
                        for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r];
                        return n
                    }
                    return []
                }

                function T(t) {
                    return /^[\s\xa0]*$/.test(t)
                }
                var j, N = String.prototype.trim ? function(t) {
                    return t.trim()
                } : function(t) {
                    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]
                };

                function A(t, e) {
                    return -1 != t.indexOf(e)
                }

                function S(t, e) {
                    return t < e ? -1 : t > e ? 1 : 0
                }
                t: {
                    var x = a.navigator;
                    if (x) {
                        var D = x.userAgent;
                        if (D) {
                            j = D;
                            break t
                        }
                    }
                    j = ""
                }

                function k(t, e, n) {
                    for (var r in t) e.call(n, t[r], r, t)
                }

                function P(t) {
                    var e = {};
                    for (var n in t) e[n] = t[n];
                    return e
                }
                var C = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

                function R(t, e) {
                    for (var n, r, i = 1; i < arguments.length; i++) {
                        for (n in r = arguments[i]) t[n] = r[n];
                        for (var o = 0; o < C.length; o++) n = C[o], Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                }

                function L(t) {
                    return L[" "](t), t
                }
                L[" "] = c;
                var V, M, U = A(j, "Opera"),
                    F = A(j, "Trident") || A(j, "MSIE"),
                    q = A(j, "Edge"),
                    z = q || F,
                    G = A(j, "Gecko") && !(A(j.toLowerCase(), "webkit") && !A(j, "Edge")) && !(A(j, "Trident") || A(j, "MSIE")) && !A(j, "Edge"),
                    B = A(j.toLowerCase(), "webkit") && !A(j, "Edge");

                function H() {
                    var t = a.document;
                    return t ? t.documentMode : void 0
                }
                t: {
                    var Q = "",
                        Y = (M = j, G ? /rv:([^\);]+)(\)|;)/.exec(M) : q ? /Edge\/([\d\.]+)/.exec(M) : F ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(M) : B ? /WebKit\/(\S+)/.exec(M) : U ? /(?:Version)[ \/]?(\S+)/.exec(M) : void 0);
                    if (Y && (Q = Y ? Y[1] : ""), F) {
                        var K = H();
                        if (null != K && K > parseFloat(Q)) {
                            V = String(K);
                            break t
                        }
                    }
                    V = Q
                }
                var X, W = {};

                function J(t) {
                    return function(t, e) {
                        var n = W;
                        return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t)
                    }(t, (function() {
                        for (var e = 0, n = N(String(V)).split("."), r = N(String(t)).split("."), i = Math.max(n.length, r.length), o = 0; 0 == e && o < i; o++) {
                            var s = n[o] || "",
                                u = r[o] || "";
                            do {
                                if (s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""], u = /(\d*)(\D*)(.*)/.exec(u) || ["", "", "", ""], 0 == s[0].length && 0 == u[0].length) break;
                                e = S(0 == s[1].length ? 0 : parseInt(s[1], 10), 0 == u[1].length ? 0 : parseInt(u[1], 10)) || S(0 == s[2].length, 0 == u[2].length) || S(s[2], u[2]), s = s[3], u = u[3]
                            } while (0 == e)
                        }
                        return 0 <= e
                    }))
                }
                if (a.document && F) {
                    var Z = H();
                    X = Z || (parseInt(V, 10) || void 0)
                } else X = void 0;
                var $ = X,
                    tt = !F || 9 <= Number($),
                    et = F && !J("9"),
                    nt = function() {
                        if (!a.addEventListener || !Object.defineProperty) return !1;
                        var t = !1,
                            e = Object.defineProperty({}, "passive", {
                                get: function() {
                                    t = !0
                                }
                            });
                        try {
                            a.addEventListener("test", c, e), a.removeEventListener("test", c, e)
                        } catch (t) {}
                        return t
                    }();

                function rt(t, e) {
                    this.type = t, this.a = this.target = e, this.defaultPrevented = !1
                }

                function it(t, e) {
                    if (rt.call(this, t ? t.type : ""), this.relatedTarget = this.a = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.c = null, t) {
                        var n = this.type = t.type,
                            r = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
                        if (this.target = t.target || t.srcElement, this.a = e, e = t.relatedTarget) {
                            if (G) {
                                t: {
                                    try {
                                        L(e.nodeName);
                                        var i = !0;
                                        break t
                                    } catch (t) {}
                                    i = !1
                                }
                                i || (e = null)
                            }
                        } else "mouseover" == n ? e = t.fromElement : "mouseout" == n && (e = t.toElement);
                        this.relatedTarget = e, r ? (this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX, this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY, this.screenX = r.screenX || 0, this.screenY = r.screenY || 0) : (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, this.screenY = t.screenY || 0), this.button = t.button, this.key = t.key || "", this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = "string" == typeof t.pointerType ? t.pointerType : ot[t.pointerType] || "", this.c = t, t.defaultPrevented && this.b()
                    }
                }
                rt.prototype.b = function() {
                    this.defaultPrevented = !0
                }, m(it, rt);
                var ot = {
                    2: "touch",
                    3: "pen",
                    4: "mouse"
                };
                it.prototype.b = function() {
                    it.X.b.call(this);
                    var t = this.c;
                    if (t.preventDefault) t.preventDefault();
                    else if (t.returnValue = !1, et) try {
                        (t.ctrlKey || 112 <= t.keyCode && 123 >= t.keyCode) && (t.keyCode = -1)
                    } catch (t) {}
                };
                var st = "closure_listenable_" + (1e6 * Math.random() | 0),
                    ut = 0;

                function at(t, e, n, r, i) {
                    this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!r, this.ca = i, this.key = ++ut, this.Y = this.Z = !1
                }

                function ct(t) {
                    t.Y = !0, t.listener = null, t.proxy = null, t.src = null, t.ca = null
                }

                function ht(t) {
                    this.src = t, this.a = {}, this.b = 0
                }

                function ft(t, e) {
                    var n = e.type;
                    if (n in t.a) {
                        var r, i = t.a[n],
                            o = _(i, e);
                        (r = 0 <= o) && Array.prototype.splice.call(i, o, 1), r && (ct(e), 0 == t.a[n].length && (delete t.a[n], t.b--))
                    }
                }

                function lt(t, e, n, r) {
                    for (var i = 0; i < t.length; ++i) {
                        var o = t[i];
                        if (!o.Y && o.listener == e && o.capture == !!n && o.ca == r) return i
                    }
                    return -1
                }
                ht.prototype.add = function(t, e, n, r, i) {
                    var o = t.toString();
                    (t = this.a[o]) || (t = this.a[o] = [], this.b++);
                    var s = lt(t, e, r, i);
                    return -1 < s ? (e = t[s], n || (e.Z = !1)) : ((e = new at(e, this.src, o, !!r, i)).Z = n, t.push(e)), e
                };
                var pt = "closure_lm_" + (1e6 * Math.random() | 0),
                    dt = {};

                function vt(t, e, n, r, i) {
                    if (r && r.once) return gt(t, e, n, r, i);
                    if (Array.isArray(e)) {
                        for (var o = 0; o < e.length; o++) vt(t, e[o], n, r, i);
                        return null
                    }
                    return n = Tt(n), t && t[st] ? t.va(e, n, f(r) ? !!r.capture : !!r, i) : yt(t, e, n, !1, r, i)
                }

                function yt(t, e, n, r, i, o) {
                    if (!e) throw Error("Invalid event type");
                    var s = f(i) ? !!i.capture : !!i;
                    if (s && !tt) return null;
                    var u = Et(t);
                    if (u || (t[pt] = u = new ht(t)), (n = u.add(e, n, r, s, o)).proxy) return n;
                    if (r = function() {
                            var t = It,
                                e = tt ? function(n) {
                                    return t.call(e.src, e.listener, n)
                                } : function(n) {
                                    if (!(n = t.call(e.src, e.listener, n))) return n
                                };
                            return e
                        }(), n.proxy = r, r.src = t, r.listener = n, t.addEventListener) nt || (i = s), void 0 === i && (i = !1), t.addEventListener(e.toString(), r, i);
                    else if (t.attachEvent) t.attachEvent(wt(e.toString()), r);
                    else {
                        if (!t.addListener || !t.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
                        t.addListener(r)
                    }
                    return n
                }

                function gt(t, e, n, r, i) {
                    if (Array.isArray(e)) {
                        for (var o = 0; o < e.length; o++) gt(t, e[o], n, r, i);
                        return null
                    }
                    return n = Tt(n), t && t[st] ? t.wa(e, n, f(r) ? !!r.capture : !!r, i) : yt(t, e, n, !0, r, i)
                }

                function bt(t, e, n, r, i) {
                    if (Array.isArray(e))
                        for (var o = 0; o < e.length; o++) bt(t, e[o], n, r, i);
                    else r = f(r) ? !!r.capture : !!r, n = Tt(n), t && t[st] ? (t = t.c, (e = String(e).toString()) in t.a && (-1 < (n = lt(o = t.a[e], n, r, i)) && (ct(o[n]), Array.prototype.splice.call(o, n, 1), 0 == o.length && (delete t.a[e], t.b--)))) : t && (t = Et(t)) && (e = t.a[e.toString()], t = -1, e && (t = lt(e, n, r, i)), (n = -1 < t ? e[t] : null) && mt(n))
                }

                function mt(t) {
                    if ("number" != typeof t && t && !t.Y) {
                        var e = t.src;
                        if (e && e[st]) ft(e.c, t);
                        else {
                            var n = t.type,
                                r = t.proxy;
                            e.removeEventListener ? e.removeEventListener(n, r, t.capture) : e.detachEvent ? e.detachEvent(wt(n), r) : e.addListener && e.removeListener && e.removeListener(r), (n = Et(e)) ? (ft(n, t), 0 == n.b && (n.src = null, e[pt] = null)) : ct(t)
                        }
                    }
                }

                function wt(t) {
                    return t in dt ? dt[t] : dt[t] = "on" + t
                }

                function _t(t, e) {
                    var n = t.listener,
                        r = t.ca || t.src;
                    return t.Z && mt(t), n.call(r, e)
                }

                function It(t, e) {
                    if (t.Y) return !0;
                    if (!tt) {
                        if (!e) t: {
                            e = ["window", "event"];
                            for (var n = a, r = 0; r < e.length; r++)
                                if (null == (n = n[e[r]])) {
                                    e = null;
                                    break t
                                }
                            e = n
                        }
                        return _t(t, e = new it(e, this))
                    }
                    return _t(t, new it(e, this))
                }

                function Et(t) {
                    return (t = t[pt]) instanceof ht ? t : null
                }
                var Ot = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

                function Tt(t) {
                    return "function" == typeof t ? t : (t[Ot] || (t[Ot] = function(e) {
                        return t.handleEvent(e)
                    }), t[Ot])
                }

                function jt() {
                    w.call(this), this.c = new ht(this), this.J = this, this.C = null
                }

                function Nt(t, e) {
                    var n, r = t.C;
                    if (r)
                        for (n = []; r; r = r.C) n.push(r);
                    if (t = t.J, r = e.type || e, "string" == typeof e) e = new rt(e, t);
                    else if (e instanceof rt) e.target = e.target || t;
                    else {
                        var i = e;
                        R(e = new rt(r, t), i)
                    }
                    if (i = !0, n)
                        for (var o = n.length - 1; 0 <= o; o--) {
                            var s = e.a = n[o];
                            i = At(s, r, !0, e) && i
                        }
                    if (i = At(s = e.a = t, r, !0, e) && i, i = At(s, r, !1, e) && i, n)
                        for (o = 0; o < n.length; o++) i = At(s = e.a = n[o], r, !1, e) && i
                }

                function At(t, e, n, r) {
                    if (!(e = t.c.a[String(e)])) return !0;
                    e = e.concat();
                    for (var i = !0, o = 0; o < e.length; ++o) {
                        var s = e[o];
                        if (s && !s.Y && s.capture == n) {
                            var u = s.listener,
                                a = s.ca || s.src;
                            s.Z && ft(t.c, s), i = !1 !== u.call(a, r) && i
                        }
                    }
                    return i && !r.defaultPrevented
                }
                m(jt, w), jt.prototype[st] = !0, (o = jt.prototype).addEventListener = function(t, e, n, r) {
                    vt(this, t, e, n, r)
                }, o.removeEventListener = function(t, e, n, r) {
                    bt(this, t, e, n, r)
                }, o.G = function() {
                    if (jt.X.G.call(this), this.c) {
                        var t, e = this.c;
                        for (t in e.a) {
                            for (var n = e.a[t], r = 0; r < n.length; r++) ct(n[r]);
                            delete e.a[t], e.b--
                        }
                    }
                    this.C = null
                }, o.va = function(t, e, n, r) {
                    return this.c.add(String(t), e, !1, n, r)
                }, o.wa = function(t, e, n, r) {
                    return this.c.add(String(t), e, !0, n, r)
                };
                var St = a.JSON.stringify;

                function xt() {
                    this.b = this.a = null
                }
                var Dt, kt = new(function() {
                    function t(t, e) {
                        this.c = t, this.f = e, this.b = 0, this.a = null
                    }
                    return t.prototype.get = function() {
                        var t;
                        return 0 < this.b ? (this.b--, t = this.a, this.a = t.next, t.next = null) : t = this.c(), t
                    }, t
                }())((function() {
                    return new Ct
                }), (function(t) {
                    t.reset()
                }));

                function Pt() {
                    var t = Mt,
                        e = null;
                    return t.a && (e = t.a, t.a = t.a.next, t.a || (t.b = null), e.next = null), e
                }

                function Ct() {
                    this.next = this.b = this.a = null
                }

                function Rt(t) {
                    a.setTimeout((function() {
                        throw t
                    }), 0)
                }

                function Lt(t, e) {
                    Dt || function() {
                        var t = a.Promise.resolve(void 0);
                        Dt = function() {
                            t.then(Ut)
                        }
                    }(), Vt || (Dt(), Vt = !0), Mt.add(t, e)
                }
                xt.prototype.add = function(t, e) {
                    var n = kt.get();
                    n.set(t, e), this.b ? this.b.next = n : this.a = n, this.b = n
                }, Ct.prototype.set = function(t, e) {
                    this.a = t, this.b = e, this.next = null
                }, Ct.prototype.reset = function() {
                    this.next = this.b = this.a = null
                };
                var Vt = !1,
                    Mt = new xt;

                function Ut() {
                    for (var t; t = Pt();) {
                        try {
                            t.a.call(t.b)
                        } catch (t) {
                            Rt(t)
                        }
                        var e = kt;
                        e.f(t), 100 > e.b && (e.b++, t.next = e.a, e.a = t)
                    }
                    Vt = !1
                }

                function Ft(t, e) {
                    jt.call(this), this.b = t || 1, this.a = e || a, this.f = y(this.Za, this), this.g = b()
                }

                function qt(t) {
                    t.aa = !1, t.M && (t.a.clearTimeout(t.M), t.M = null)
                }

                function zt(t, e, n) {
                    if ("function" == typeof t) n && (t = y(t, n));
                    else {
                        if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
                        t = y(t.handleEvent, t)
                    }
                    return 2147483647 < Number(e) ? -1 : a.setTimeout(t, e || 0)
                }

                function Gt(t) {
                    t.a = zt((function() {
                        t.a = null, t.c && (t.c = !1, Gt(t))
                    }), t.h);
                    var e = t.b;
                    t.b = null, t.g.apply(null, e)
                }
                m(Ft, jt), (o = Ft.prototype).aa = !1, o.M = null, o.Za = function() {
                    if (this.aa) {
                        var t = b() - this.g;
                        0 < t && t < .8 * this.b ? this.M = this.a.setTimeout(this.f, this.b - t) : (this.M && (this.a.clearTimeout(this.M), this.M = null), Nt(this, "tick"), this.aa && (qt(this), this.start()))
                    }
                }, o.start = function() {
                    this.aa = !0, this.M || (this.M = this.a.setTimeout(this.f, this.b), this.g = b())
                }, o.G = function() {
                    Ft.X.G.call(this), qt(this), delete this.a
                };
                var Bt = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.g = e, r.h = n, r.b = null, r.c = !1, r.a = null, r
                    }
                    return function(t, e) {
                        function n() {
                            this.constructor = t
                        }
                        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                    }(e, t), e.prototype.f = function(t) {
                        this.b = arguments, this.a ? this.c = !0 : Gt(this)
                    }, e.prototype.G = function() {
                        t.prototype.G.call(this), this.a && (a.clearTimeout(this.a), this.a = null, this.c = !1, this.b = null)
                    }, e
                }(w);

                function Ht(t) {
                    w.call(this), this.b = t, this.a = {}
                }
                m(Ht, w);
                var Qt = [];

                function Yt(t, e, n, r) {
                    Array.isArray(n) || (n && (Qt[0] = n.toString()), n = Qt);
                    for (var i = 0; i < n.length; i++) {
                        var o = vt(e, n[i], r || t.handleEvent, !1, t.b || t);
                        if (!o) break;
                        t.a[o.key] = o
                    }
                }

                function Kt(t) {
                    k(t.a, (function(t, e) {
                        this.a.hasOwnProperty(e) && mt(t)
                    }), t), t.a = {}
                }

                function Xt() {
                    this.a = !0
                }

                function Wt(t, e, n, r) {
                    t.info((function() {
                        return "XMLHTTP TEXT (" + e + "): " + function(t, e) {
                            if (!t.a) return e;
                            if (!e) return null;
                            try {
                                var n = JSON.parse(e);
                                if (n)
                                    for (t = 0; t < n.length; t++)
                                        if (Array.isArray(n[t])) {
                                            var r = n[t];
                                            if (!(2 > r.length)) {
                                                var i = r[1];
                                                if (Array.isArray(i) && !(1 > i.length)) {
                                                    var o = i[0];
                                                    if ("noop" != o && "stop" != o && "close" != o)
                                                        for (var s = 1; s < i.length; s++) i[s] = ""
                                                }
                                            }
                                        }
                                return St(n)
                            } catch (t) {
                                return e
                            }
                        }(t, n) + (r ? " " + r : "")
                    }))
                }
                Ht.prototype.G = function() {
                    Ht.X.G.call(this), Kt(this)
                }, Ht.prototype.handleEvent = function() {
                    throw Error("EventHandler.handleEvent not implemented")
                }, Xt.prototype.info = function() {};
                var Jt = {},
                    Zt = null;

                function $t() {
                    return Zt = Zt || new jt
                }

                function te(t) {
                    rt.call(this, Jt.Fa, t)
                }

                function ee(t) {
                    var e = $t();
                    Nt(e, new te(e, t))
                }

                function ne(t, e) {
                    rt.call(this, Jt.STAT_EVENT, t), this.stat = e
                }

                function re(t) {
                    var e = $t();
                    Nt(e, new ne(e, t))
                }

                function ie(t) {
                    rt.call(this, Jt.Ga, t)
                }

                function oe(t, e) {
                    if ("function" != typeof t) throw Error("Fn must not be null and must be a function");
                    return a.setTimeout((function() {
                        t()
                    }), e)
                }
                Jt.Fa = "serverreachability", m(te, rt), Jt.STAT_EVENT = "statevent", m(ne, rt), Jt.Ga = "timingevent", m(ie, rt);
                var se = {
                        NO_ERROR: 0,
                        $a: 1,
                        nb: 2,
                        mb: 3,
                        hb: 4,
                        lb: 5,
                        ob: 6,
                        Da: 7,
                        TIMEOUT: 8,
                        rb: 9
                    },
                    ue = {
                        fb: "complete",
                        Bb: "success",
                        Ea: "error",
                        Da: "abort",
                        tb: "ready",
                        ub: "readystatechange",
                        TIMEOUT: "timeout",
                        pb: "incrementaldata",
                        sb: "progress",
                        ib: "downloadprogress",
                        Jb: "uploadprogress"
                    };

                function ae() {}

                function ce(t) {
                    var e;
                    return (e = t.a) || (e = t.a = {}), e
                }

                function he() {}
                ae.prototype.a = null;
                var fe, le = {
                    OPEN: "a",
                    eb: "b",
                    Ea: "c",
                    qb: "d"
                };

                function pe() {
                    rt.call(this, "d")
                }

                function de() {
                    rt.call(this, "c")
                }

                function ve() {}

                function ye(t, e, n, r) {
                    this.g = t, this.c = e, this.f = n, this.S = r || 1, this.J = new Ht(this), this.P = ge, t = z ? 125 : void 0, this.R = new Ft(t), this.B = null, this.b = !1, this.j = this.l = this.i = this.H = this.u = this.T = this.o = null, this.s = [], this.a = null, this.D = 0, this.h = this.m = null, this.N = -1, this.A = !1, this.O = 0, this.F = null, this.V = this.C = this.U = this.I = !1
                }
                m(pe, rt), m(de, rt), m(ve, ae), fe = new ve;
                var ge = 45e3,
                    be = {},
                    me = {};

                function we(t, e, n) {
                    t.H = 1, t.i = ze(Le(e)), t.j = n, t.I = !0, _e(t, null)
                }

                function _e(t, e) {
                    t.u = b(), Oe(t), t.l = Le(t.i);
                    var n = t.l,
                        r = t.S;
                    Array.isArray(r) || (r = [String(r)]), en(n.b, "t", r), t.D = 0, t.a = Wn(t.g, t.g.C ? e : null), 0 < t.O && (t.F = new Bt(y(t.Ca, t, t.a), t.O)), Yt(t.J, t.a, "readystatechange", t.Xa), e = t.B ? P(t.B) : {}, t.j ? (t.m || (t.m = "POST"), e["Content-Type"] = "application/x-www-form-urlencoded", t.a.ba(t.l, t.m, t.j, e)) : (t.m = "GET", t.a.ba(t.l, t.m, null, e)), ee(1),
                        function(t, e, n, r, i, o) {
                            t.info((function() {
                                if (t.a)
                                    if (o)
                                        for (var s = "", u = o.split("&"), a = 0; a < u.length; a++) {
                                            var c = u[a].split("=");
                                            if (1 < c.length) {
                                                var h = c[0];
                                                c = c[1];
                                                var f = h.split("_");
                                                s = 2 <= f.length && "type" == f[1] ? s + (h + "=") + c + "&" : s + (h + "=redacted&")
                                            }
                                        } else s = null;
                                    else s = o;
                                return "XMLHTTP REQ (" + r + ") [attempt " + i + "]: " + e + "\n" + n + "\n" + s
                            }))
                        }(t.c, t.m, t.l, t.f, t.S, t.j)
                }

                function Ie(t, e, n) {
                    for (var r = !0; !t.A && t.D < n.length;) {
                        var i = Ee(t, n);
                        if (i == me) {
                            4 == e && (t.h = 4, re(14), r = !1), Wt(t.c, t.f, null, "[Incomplete Response]");
                            break
                        }
                        if (i == be) {
                            t.h = 4, re(15), Wt(t.c, t.f, n, "[Invalid Chunk]"), r = !1;
                            break
                        }
                        Wt(t.c, t.f, i, null), Se(t, i)
                    }
                    4 == e && 0 == n.length && (t.h = 1, re(16), r = !1), t.b = t.b && r, r ? 0 < n.length && !t.V && (t.V = !0, (e = t.g).a == t && e.U && !e.F && (e.c.info("Great, no buffering proxy detected. Bytes received: " + n.length), zn(e), e.F = !0, re(11))) : (Wt(t.c, t.f, n, "[Invalid Chunked Response]"), Ae(t), Ne(t))
                }

                function Ee(t, e) {
                    var n = t.D,
                        r = e.indexOf("\n", n);
                    return -1 == r ? me : (n = Number(e.substring(n, r)), isNaN(n) ? be : (r += 1) + n > e.length ? me : (e = e.substr(r, n), t.D = r + n, e))
                }

                function Oe(t) {
                    t.T = b() + t.P, Te(t, t.P)
                }

                function Te(t, e) {
                    if (null != t.o) throw Error("WatchDog timer not null");
                    t.o = oe(y(t.Va, t), e)
                }

                function je(t) {
                    t.o && (a.clearTimeout(t.o), t.o = null)
                }

                function Ne(t) {
                    0 == t.g.v || t.A || Hn(t.g, t)
                }

                function Ae(t) {
                    je(t);
                    var e = t.F;
                    e && "function" == typeof e.ja && e.ja(), t.F = null, qt(t.R), Kt(t.J), t.a && (e = t.a, t.a = null, e.abort(), e.ja())
                }

                function Se(t, e) {
                    try {
                        var n = t.g;
                        if (0 != n.v && (n.a == t || cn(n.b, t)))
                            if (n.I = t.N, !t.C && cn(n.b, t) && 3 == n.v) {
                                try {
                                    var r = n.ka.a.parse(e)
                                } catch (t) {
                                    r = null
                                }
                                if (Array.isArray(r) && 3 == r.length) {
                                    var i = r;
                                    if (0 == i[0]) {
                                        t: if (!n.j) {
                                            if (n.a) {
                                                if (!(n.a.u + 3e3 < t.u)) break t;
                                                Bn(n), Pn(n)
                                            }
                                            qn(n), re(18)
                                        }
                                    }
                                    else n.oa = i[1], 0 < n.oa - n.P && 37500 > i[2] && n.H && 0 == n.o && !n.m && (n.m = oe(y(n.Sa, n), 6e3));
                                    if (1 >= an(n.b) && n.ea) {
                                        try {
                                            n.ea()
                                        } catch (t) {}
                                        n.ea = void 0
                                    }
                                } else Yn(n, 11)
                            } else if ((t.C || n.a == t) && Bn(n), !T(e))
                            for (e = r = n.ka.a.parse(e), r = 0; r < e.length; r++)
                                if (i = e[r], n.P = i[0], i = i[1], 2 == n.v)
                                    if ("c" == i[0]) {
                                        n.J = i[1], n.ga = i[2];
                                        var o = i[3];
                                        null != o && (n.ha = o, n.c.info("VER=" + n.ha));
                                        var s = i[4];
                                        null != s && (n.pa = s, n.c.info("SVER=" + n.pa));
                                        var u = i[5];
                                        if (null != u && "number" == typeof u && 0 < u) {
                                            var a = 1.5 * u;
                                            n.D = a, n.c.info("backChannelRequestTimeoutMs_=" + a)
                                        }
                                        a = n;
                                        var c = t.a;
                                        if (c) {
                                            var h = c.a ? c.a.getResponseHeader("X-Client-Wire-Protocol") : null;
                                            if (h) {
                                                var f = a.b;
                                                !f.a && (A(h, "spdy") || A(h, "quic") || A(h, "h2")) && (f.f = f.g, f.a = new Set, f.b && (hn(f, f.b), f.b = null))
                                            }
                                            if (a.A) {
                                                var l = c.a ? c.a.getResponseHeader("X-HTTP-Session-Id") : null;
                                                l && (a.na = l, qe(a.B, a.A, l))
                                            }
                                        }
                                        n.v = 3, n.f && n.f.ta(), n.U && (n.N = b() - t.u, n.c.info("Handshake RTT: " + n.N + "ms"));
                                        var p = t;
                                        if ((a = n).la = Xn(a, a.C ? a.ga : null, a.fa), p.C) {
                                            fn(a.b, p);
                                            var d = p,
                                                v = a.D;
                                            v && d.setTimeout(v), d.o && (je(d), Oe(d)), a.a = p
                                        } else Fn(a);
                                        0 < n.g.length && Ln(n)
                                    } else "stop" != i[0] && "close" != i[0] || Yn(n, 7);
                        else 3 == n.v && ("stop" == i[0] || "close" == i[0] ? "stop" == i[0] ? Yn(n, 7) : kn(n) : "noop" != i[0] && n.f && n.f.sa(i), n.o = 0);
                        ee(4)
                    } catch (t) {}
                }

                function xe(t, e) {
                    if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
                    else if (h(t) || "string" == typeof t) I(t, e, void 0);
                    else {
                        if (t.L && "function" == typeof t.L) var n = t.L();
                        else if (t.K && "function" == typeof t.K) n = void 0;
                        else if (h(t) || "string" == typeof t) {
                            n = [];
                            for (var r = t.length, i = 0; i < r; i++) n.push(i)
                        } else
                            for (i in n = [], r = 0, t) n[r++] = i;
                        i = (r = function(t) {
                            if (t.K && "function" == typeof t.K) return t.K();
                            if ("string" == typeof t) return t.split("");
                            if (h(t)) {
                                for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
                                return e
                            }
                            for (r in e = [], n = 0, t) e[n++] = t[r];
                            return e
                        }(t)).length;
                        for (var o = 0; o < i; o++) e.call(void 0, r[o], n && n[o], t)
                    }
                }

                function De(t, e) {
                    this.b = {}, this.a = [], this.c = 0;
                    var n = arguments.length;
                    if (1 < n) {
                        if (n % 2) throw Error("Uneven number of arguments");
                        for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1])
                    } else if (t)
                        if (t instanceof De)
                            for (n = t.L(), r = 0; r < n.length; r++) this.set(n[r], t.get(n[r]));
                        else
                            for (r in t) this.set(r, t[r])
                }

                function ke(t) {
                    if (t.c != t.a.length) {
                        for (var e = 0, n = 0; e < t.a.length;) {
                            var r = t.a[e];
                            Pe(t.b, r) && (t.a[n++] = r), e++
                        }
                        t.a.length = n
                    }
                    if (t.c != t.a.length) {
                        var i = {};
                        for (n = e = 0; e < t.a.length;) Pe(i, r = t.a[e]) || (t.a[n++] = r, i[r] = 1), e++;
                        t.a.length = n
                    }
                }

                function Pe(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }(o = ye.prototype).setTimeout = function(t) {
                    this.P = t
                }, o.Xa = function(t) {
                    t = t.target;
                    var e = this.F;
                    e && 3 == An(t) ? e.f() : this.Ca(t)
                }, o.Ca = function(t) {
                    try {
                        if (t == this.a) t: {
                            var e = An(this.a),
                                n = this.a.ua(),
                                r = this.a.W();
                            if (!(3 > e || 3 == e && !z && !this.a.$())) {
                                this.A || 4 != e || 7 == n || ee(8 == n || 0 >= r ? 3 : 2), je(this);
                                var i = this.a.W();
                                this.N = i;
                                var o = this.a.$();
                                if (this.b = 200 == i, function(t, e, n, r, i, o, s) {
                                        t.info((function() {
                                            return "XMLHTTP RESP (" + r + ") [ attempt " + i + "]: " + e + "\n" + n + "\n" + o + " " + s
                                        }))
                                    }(this.c, this.m, this.l, this.f, this.S, e, i), this.b) {
                                    if (this.U && !this.C) {
                                        e: {
                                            if (this.a) {
                                                var s, u = this.a;
                                                if ((s = u.a ? u.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !T(s)) {
                                                    var a = s;
                                                    break e
                                                }
                                            }
                                            a = null
                                        }
                                        if (!a) {
                                            this.b = !1, this.h = 3, re(12), Ae(this), Ne(this);
                                            break t
                                        }
                                        Wt(this.c, this.f, a, "Initial handshake response via X-HTTP-Initial-Response"),
                                        this.C = !0,
                                        Se(this, a)
                                    }
                                    this.I ? (Ie(this, e, o), z && this.b && 3 == e && (Yt(this.J, this.R, "tick", this.Wa), this.R.start())) : (Wt(this.c, this.f, o, null), Se(this, o)), 4 == e && Ae(this), this.b && !this.A && (4 == e ? Hn(this.g, this) : (this.b = !1, Oe(this)))
                                } else 400 == i && 0 < o.indexOf("Unknown SID") ? (this.h = 3, re(12)) : (this.h = 0, re(13)), Ae(this), Ne(this)
                            }
                        }
                    } catch (t) {}
                }, o.Wa = function() {
                    if (this.a) {
                        var t = An(this.a),
                            e = this.a.$();
                        this.D < e.length && (je(this), Ie(this, t, e), this.b && 4 != t && Oe(this))
                    }
                }, o.cancel = function() {
                    this.A = !0, Ae(this)
                }, o.Va = function() {
                    this.o = null;
                    var t = b();
                    0 <= t - this.T ? (function(t, e) {
                        t.info((function() {
                            return "TIMEOUT: " + e
                        }))
                    }(this.c, this.l), 2 != this.H && (ee(3), re(17)), Ae(this), this.h = 2, Ne(this)) : Te(this, this.T - t)
                }, (o = De.prototype).K = function() {
                    ke(this);
                    for (var t = [], e = 0; e < this.a.length; e++) t.push(this.b[this.a[e]]);
                    return t
                }, o.L = function() {
                    return ke(this), this.a.concat()
                }, o.get = function(t, e) {
                    return Pe(this.b, t) ? this.b[t] : e
                }, o.set = function(t, e) {
                    Pe(this.b, t) || (this.c++, this.a.push(t)), this.b[t] = e
                }, o.forEach = function(t, e) {
                    for (var n = this.L(), r = 0; r < n.length; r++) {
                        var i = n[r],
                            o = this.get(i);
                        t.call(e, o, i, this)
                    }
                };
                var Ce = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

                function Re(t, e) {
                    if (this.c = this.j = this.f = "", this.h = null, this.i = this.g = "", this.a = !1, t instanceof Re) {
                        this.a = void 0 !== e ? e : t.a, Ve(this, t.f), this.j = t.j, Me(this, t.c), Ue(this, t.h), this.g = t.g, e = t.b;
                        var n = new Je;
                        n.c = e.c, e.a && (n.a = new De(e.a), n.b = e.b), Fe(this, n), this.i = t.i
                    } else t && (n = String(t).match(Ce)) ? (this.a = !!e, Ve(this, n[1] || "", !0), this.j = Ge(n[2] || ""), Me(this, n[3] || "", !0), Ue(this, n[4]), this.g = Ge(n[5] || "", !0), Fe(this, n[6] || "", !0), this.i = Ge(n[7] || "")) : (this.a = !!e, this.b = new Je(null, this.a))
                }

                function Le(t) {
                    return new Re(t)
                }

                function Ve(t, e, n) {
                    t.f = n ? Ge(e, !0) : e, t.f && (t.f = t.f.replace(/:$/, ""))
                }

                function Me(t, e, n) {
                    t.c = n ? Ge(e, !0) : e
                }

                function Ue(t, e) {
                    if (e) {
                        if (e = Number(e), isNaN(e) || 0 > e) throw Error("Bad port number " + e);
                        t.h = e
                    } else t.h = null
                }

                function Fe(t, e, n) {
                    e instanceof Je ? (t.b = e, function(t, e) {
                        e && !t.f && (Ze(t), t.c = null, t.a.forEach((function(t, e) {
                            var n = e.toLowerCase();
                            e != n && ($e(this, e), en(this, n, t))
                        }), t)), t.f = e
                    }(t.b, t.a)) : (n || (e = Be(e, Xe)), t.b = new Je(e, t.a))
                }

                function qe(t, e, n) {
                    t.b.set(e, n)
                }

                function ze(t) {
                    return qe(t, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ b()).toString(36)), t
                }

                function Ge(t, e) {
                    return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : ""
                }

                function Be(t, e, n) {
                    return "string" == typeof t ? (t = encodeURI(t).replace(e, He), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), t) : null
                }

                function He(t) {
                    return "%" + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16)
                }
                Re.prototype.toString = function() {
                    var t = [],
                        e = this.f;
                    e && t.push(Be(e, Qe, !0), ":");
                    var n = this.c;
                    return (n || "file" == e) && (t.push("//"), (e = this.j) && t.push(Be(e, Qe, !0), "@"), t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.h) && t.push(":", String(n))), (n = this.g) && (this.c && "/" != n.charAt(0) && t.push("/"), t.push(Be(n, "/" == n.charAt(0) ? Ke : Ye, !0))), (n = this.b.toString()) && t.push("?", n), (n = this.i) && t.push("#", Be(n, We)), t.join("")
                };
                var Qe = /[#\/\?@]/g,
                    Ye = /[#\?:]/g,
                    Ke = /[#\?]/g,
                    Xe = /[#\?@]/g,
                    We = /#/g;

                function Je(t, e) {
                    this.b = this.a = null, this.c = t || null, this.f = !!e
                }

                function Ze(t) {
                    t.a || (t.a = new De, t.b = 0, t.c && function(t, e) {
                        if (t) {
                            t = t.split("&");
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n].indexOf("="),
                                    i = null;
                                if (0 <= r) {
                                    var o = t[n].substring(0, r);
                                    i = t[n].substring(r + 1)
                                } else o = t[n];
                                e(o, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "")
                            }
                        }
                    }(t.c, (function(e, n) {
                        t.add(decodeURIComponent(e.replace(/\+/g, " ")), n)
                    })))
                }

                function $e(t, e) {
                    Ze(t), e = nn(t, e), Pe(t.a.b, e) && (t.c = null, t.b -= t.a.get(e).length, Pe((t = t.a).b, e) && (delete t.b[e], t.c--, t.a.length > 2 * t.c && ke(t)))
                }

                function tn(t, e) {
                    return Ze(t), e = nn(t, e), Pe(t.a.b, e)
                }

                function en(t, e, n) {
                    $e(t, e), 0 < n.length && (t.c = null, t.a.set(nn(t, e), O(n)), t.b += n.length)
                }

                function nn(t, e) {
                    return e = String(e), t.f && (e = e.toLowerCase()), e
                }(o = Je.prototype).add = function(t, e) {
                    Ze(this), this.c = null, t = nn(this, t);
                    var n = this.a.get(t);
                    return n || this.a.set(t, n = []), n.push(e), this.b += 1, this
                }, o.forEach = function(t, e) {
                    Ze(this), this.a.forEach((function(n, r) {
                        I(n, (function(n) {
                            t.call(e, n, r, this)
                        }), this)
                    }), this)
                }, o.L = function() {
                    Ze(this);
                    for (var t = this.a.K(), e = this.a.L(), n = [], r = 0; r < e.length; r++)
                        for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]);
                    return n
                }, o.K = function(t) {
                    Ze(this);
                    var e = [];
                    if ("string" == typeof t) tn(this, t) && (e = E(e, this.a.get(nn(this, t))));
                    else {
                        t = this.a.K();
                        for (var n = 0; n < t.length; n++) e = E(e, t[n])
                    }
                    return e
                }, o.set = function(t, e) {
                    return Ze(this), this.c = null, tn(this, t = nn(this, t)) && (this.b -= this.a.get(t).length), this.a.set(t, [e]), this.b += 1, this
                }, o.get = function(t, e) {
                    return t && 0 < (t = this.K(t)).length ? String(t[0]) : e
                }, o.toString = function() {
                    if (this.c) return this.c;
                    if (!this.a) return "";
                    for (var t = [], e = this.a.L(), n = 0; n < e.length; n++) {
                        var r = e[n],
                            i = encodeURIComponent(String(r));
                        r = this.K(r);
                        for (var o = 0; o < r.length; o++) {
                            var s = i;
                            "" !== r[o] && (s += "=" + encodeURIComponent(String(r[o]))), t.push(s)
                        }
                    }
                    return this.c = t.join("&")
                };
                var rn = function(t, e) {
                    this.b = t, this.a = e
                };

                function on(t) {
                    this.g = t || sn, a.PerformanceNavigationTiming ? t = 0 < (t = a.performance.getEntriesByType("navigation")).length && ("hq" == t[0].nextHopProtocol || "h2" == t[0].nextHopProtocol) : t = !!(a.ia && a.ia.ya && a.ia.ya() && a.ia.ya().Lb), this.f = t ? this.g : 1, this.a = null, 1 < this.f && (this.a = new Set), this.b = null, this.c = []
                }
                var sn = 10;

                function un(t) {
                    return !!t.b || !!t.a && t.a.size >= t.f
                }

                function an(t) {
                    return t.b ? 1 : t.a ? t.a.size : 0
                }

                function cn(t, e) {
                    return t.b ? t.b == e : !!t.a && t.a.has(e)
                }

                function hn(t, e) {
                    t.a ? t.a.add(e) : t.b = e
                }

                function fn(t, e) {
                    t.b && t.b == e ? t.b = null : t.a && t.a.has(e) && t.a.delete(e)
                }

                function ln(t) {
                    var e, n;
                    if (null != t.b) return t.c.concat(t.b.s);
                    if (null != t.a && 0 !== t.a.size) {
                        var r = t.c;
                        try {
                            for (var o = i(t.a.values()), s = o.next(); !s.done; s = o.next()) {
                                var u = s.value;
                                r = r.concat(u.s)
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                s && !s.done && (n = o.return) && n.call(o)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                        return r
                    }
                    return O(t.c)
                }

                function pn() {}

                function dn() {
                    this.a = new pn
                }

                function vn(t, e, n) {
                    var r = n || "";
                    try {
                        xe(t, (function(t, n) {
                            var i = t;
                            f(t) && (i = St(t)), e.push(r + n + "=" + encodeURIComponent(i))
                        }))
                    } catch (t) {
                        throw e.push(r + "type=" + encodeURIComponent("_badmap")), t
                    }
                }

                function yn(t, e, n, r, i) {
                    try {
                        e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null, i(r)
                    } catch (t) {}
                }
                on.prototype.cancel = function() {
                    var t, e;
                    if (this.c = ln(this), this.b) this.b.cancel(), this.b = null;
                    else if (this.a && 0 !== this.a.size) {
                        try {
                            for (var n = i(this.a.values()), r = n.next(); !r.done; r = n.next()) {
                                r.value.cancel()
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                r && !r.done && (e = n.return) && e.call(n)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        this.a.clear()
                    }
                }, pn.prototype.stringify = function(t) {
                    return a.JSON.stringify(t, void 0)
                }, pn.prototype.parse = function(t) {
                    return a.JSON.parse(t, void 0)
                };
                var gn = a.JSON.parse;

                function bn(t) {
                    jt.call(this), this.headers = new De, this.H = t || null, this.b = !1, this.s = this.a = null, this.B = "", this.h = 0, this.f = "", this.g = this.A = this.l = this.u = !1, this.o = 0, this.m = null, this.I = mn, this.D = this.F = !1
                }
                m(bn, jt);
                var mn = "",
                    wn = /^https?$/i,
                    _n = ["POST", "PUT"];

                function In(t) {
                    return "content-type" == t.toLowerCase()
                }

                function En(t, e) {
                    t.b = !1, t.a && (t.g = !0, t.a.abort(), t.g = !1), t.f = e, t.h = 5, On(t), jn(t)
                }

                function On(t) {
                    t.u || (t.u = !0, Nt(t, "complete"), Nt(t, "error"))
                }

                function Tn(t) {
                    if (t.b && void 0 !== u && (!t.s[1] || 4 != An(t) || 2 != t.W()))
                        if (t.l && 4 == An(t)) zt(t.za, 0, t);
                        else if (Nt(t, "readystatechange"), 4 == An(t)) {
                        t.b = !1;
                        try {
                            var e, n = t.W();
                            t: switch (n) {
                                case 200:
                                case 201:
                                case 202:
                                case 204:
                                case 206:
                                case 304:
                                case 1223:
                                    var r = !0;
                                    break t;
                                default:
                                    r = !1
                            }
                            if (!(e = r)) {
                                var i;
                                if (i = 0 === n) {
                                    var o = String(t.B).match(Ce)[1] || null;
                                    if (!o && a.self && a.self.location) {
                                        var s = a.self.location.protocol;
                                        o = s.substr(0, s.length - 1)
                                    }
                                    i = !wn.test(o ? o.toLowerCase() : "")
                                }
                                e = i
                            }
                            if (e) Nt(t, "complete"), Nt(t, "success");
                            else {
                                t.h = 6;
                                try {
                                    var c = 2 < An(t) ? t.a.statusText : ""
                                } catch (n) {
                                    c = ""
                                }
                                t.f = c + " [" + t.W() + "]", On(t)
                            }
                        } finally {
                            jn(t)
                        }
                    }
                }

                function jn(t, e) {
                    if (t.a) {
                        Nn(t);
                        var n = t.a,
                            r = t.s[0] ? c : null;
                        t.a = null, t.s = null, e || Nt(t, "ready");
                        try {
                            n.onreadystatechange = r
                        } catch (t) {}
                    }
                }

                function Nn(t) {
                    t.a && t.D && (t.a.ontimeout = null), t.m && (a.clearTimeout(t.m), t.m = null)
                }

                function An(t) {
                    return t.a ? t.a.readyState : 0
                }

                function Sn(t, e, n) {
                    t: {
                        for (r in n) {
                            var r = !1;
                            break t
                        }
                        r = !0
                    }
                    r || (n = function(t) {
                        var e = "";
                        return k(t, (function(t, n) {
                            e += n, e += ":", e += t, e += "\r\n"
                        })), e
                    }(n), "string" == typeof t ? null != n && encodeURIComponent(String(n)) : qe(t, e, n))
                }

                function xn(t, e, n) {
                    return n && n.internalChannelParams && n.internalChannelParams[t] || e
                }

                function Dn(t) {
                    this.pa = 0, this.g = [], this.c = new Xt, this.ga = this.la = this.B = this.fa = this.a = this.na = this.A = this.V = this.i = this.O = this.l = null, this.Oa = this.R = 0, this.La = xn("failFast", !1, t), this.H = this.m = this.j = this.h = this.f = null, this.S = !0, this.I = this.oa = this.P = -1, this.T = this.o = this.u = 0, this.Ha = xn("baseRetryDelayMs", 5e3, t), this.Ra = xn("retryDelaySeedMs", 1e4, t), this.Ma = xn("forwardChannelMaxRetries", 2, t), this.ma = xn("forwardChannelRequestTimeoutMs", 2e4, t), this.Na = t && t.g || void 0, this.D = void 0, this.C = t && t.supportsCrossDomainXhr || !1, this.J = "", this.b = new on(t && t.concurrentRequestLimit), this.ka = new dn, this.da = t && t.fastHandshake || !1, this.Ia = t && t.b || !1, t && t.f && (this.c.a = !1), t && t.forceLongPolling && (this.S = !1), this.U = !this.da && this.S && t && t.detectBufferingProxy || !1, this.ea = void 0, this.N = 0, this.F = !1, this.s = null, (this.Ka = t && t.c || !1) && this.c.info("Opt-in to enable Chrome Origin Trials.")
                }

                function kn(t) {
                    if (Cn(t), 3 == t.v) {
                        var e = t.R++,
                            n = Le(t.B);
                        qe(n, "SID", t.J), qe(n, "RID", e), qe(n, "TYPE", "terminate"), Mn(t, n), (e = new ye(t, t.c, e, void 0)).H = 2, e.i = ze(Le(n)), n = !1, a.navigator && a.navigator.sendBeacon && (n = a.navigator.sendBeacon(e.i.toString(), "")), !n && a.Image && ((new Image).src = e.i, n = !0), n || (e.a = Wn(e.g, null), e.a.ba(e.i)), e.u = b(), Oe(e)
                    }
                    Kn(t)
                }

                function Pn(t) {
                    t.a && (zn(t), t.a.cancel(), t.a = null)
                }

                function Cn(t) {
                    Pn(t), t.j && (a.clearTimeout(t.j), t.j = null), Bn(t), t.b.cancel(), t.h && ("number" == typeof t.h && a.clearTimeout(t.h), t.h = null)
                }

                function Rn(t, e) {
                    t.g.push(new rn(t.Oa++, e)), 3 == t.v && Ln(t)
                }

                function Ln(t) {
                    un(t.b) || t.h || (t.h = !0, Lt(t.Ba, t), t.u = 0)
                }

                function Vn(t, e) {
                    var n;
                    n = e ? e.f : t.R++;
                    var r = Le(t.B);
                    qe(r, "SID", t.J), qe(r, "RID", n), qe(r, "AID", t.P), Mn(t, r), t.i && t.l && Sn(r, t.i, t.l), n = new ye(t, t.c, n, t.u + 1), null === t.i && (n.B = t.l), e && (t.g = e.s.concat(t.g)), e = Un(t, n, 1e3), n.setTimeout(Math.round(.5 * t.ma) + Math.round(.5 * t.ma * Math.random())), hn(t.b, n), we(n, r, e)
                }

                function Mn(t, e) {
                    t.f && xe({}, (function(t, n) {
                        qe(e, n, t)
                    }))
                }

                function Un(t, e, n) {
                    n = Math.min(t.g.length, n);
                    var r = t.f ? y(t.f.Ja, t.f, t) : null;
                    t: for (var i = t.g, o = -1;;) {
                        var s = ["count=" + n]; - 1 == o ? 0 < n ? (o = i[0].b, s.push("ofs=" + o)) : o = 0 : s.push("ofs=" + o);
                        for (var u = !0, a = 0; a < n; a++) {
                            var c = i[a].b,
                                h = i[a].a;
                            if (0 > (c -= o)) o = Math.max(0, i[a].b - 100), u = !1;
                            else try {
                                vn(h, s, "req" + c + "_")
                            } catch (t) {
                                r && r(h)
                            }
                        }
                        if (u) {
                            r = s.join("&");
                            break t
                        }
                    }
                    return t = t.g.splice(0, n), e.s = t, r
                }

                function Fn(t) {
                    t.a || t.j || (t.T = 1, Lt(t.Aa, t), t.o = 0)
                }

                function qn(t) {
                    return !(t.a || t.j || 3 <= t.o) && (t.T++, t.j = oe(y(t.Aa, t), Qn(t, t.o)), t.o++, !0)
                }

                function zn(t) {
                    null != t.s && (a.clearTimeout(t.s), t.s = null)
                }

                function Gn(t) {
                    t.a = new ye(t, t.c, "rpc", t.T), null === t.i && (t.a.B = t.l), t.a.O = 0;
                    var e = Le(t.la);
                    qe(e, "RID", "rpc"), qe(e, "SID", t.J), qe(e, "CI", t.H ? "0" : "1"), qe(e, "AID", t.P), Mn(t, e), qe(e, "TYPE", "xmlhttp"), t.i && t.l && Sn(e, t.i, t.l), t.D && t.a.setTimeout(t.D);
                    var n = t.a;
                    t = t.ga, n.H = 1, n.i = ze(Le(e)), n.j = null, n.I = !0, _e(n, t)
                }

                function Bn(t) {
                    null != t.m && (a.clearTimeout(t.m), t.m = null)
                }

                function Hn(t, e) {
                    var n = null;
                    if (t.a == e) {
                        Bn(t), zn(t), t.a = null;
                        var r = 2
                    } else {
                        if (!cn(t.b, e)) return;
                        n = e.s, fn(t.b, e), r = 1
                    }
                    if (t.I = e.N, 0 != t.v)
                        if (e.b)
                            if (1 == r) {
                                n = e.j ? e.j.length : 0, e = b() - e.u;
                                var i = t.u;
                                Nt(r = $t(), new ie(r, n, e, i)), Ln(t)
                            } else Fn(t);
                    else if (3 == (i = e.h) || 0 == i && 0 < t.I || !(1 == r && function(t, e) {
                            return !(an(t.b) >= t.b.f - (t.h ? 1 : 0) || (t.h ? (t.g = e.s.concat(t.g), 0) : 1 == t.v || 2 == t.v || t.u >= (t.La ? 0 : t.Ma) || (t.h = oe(y(t.Ba, t, e), Qn(t, t.u)), t.u++, 0)))
                        }(t, e) || 2 == r && qn(t))) switch (n && 0 < n.length && (e = t.b, e.c = e.c.concat(n)), i) {
                        case 1:
                            Yn(t, 5);
                            break;
                        case 4:
                            Yn(t, 10);
                            break;
                        case 3:
                            Yn(t, 6);
                            break;
                        default:
                            Yn(t, 2)
                    }
                }

                function Qn(t, e) {
                    var n = t.Ha + Math.floor(Math.random() * t.Ra);
                    return t.f || (n *= 2), n * e
                }

                function Yn(t, e) {
                    if (t.c.info("Error code " + e), 2 == e) {
                        var n = null;
                        t.f && (n = null);
                        var r = y(t.Ya, t);
                        n || (n = new Re("//www.google.com/images/cleardot.gif"), a.location && "http" == a.location.protocol || Ve(n, "https"), ze(n)),
                            function(t, e) {
                                var n = new Xt;
                                if (a.Image) {
                                    var r = new Image;
                                    r.onload = g(yn, n, r, "TestLoadImage: loaded", !0, e), r.onerror = g(yn, n, r, "TestLoadImage: error", !1, e), r.onabort = g(yn, n, r, "TestLoadImage: abort", !1, e), r.ontimeout = g(yn, n, r, "TestLoadImage: timeout", !1, e), a.setTimeout((function() {
                                        r.ontimeout && r.ontimeout()
                                    }), 1e4), r.src = t
                                } else e(!1)
                            }(n.toString(), r)
                    } else re(2);
                    t.v = 0, t.f && t.f.ra(e), Kn(t), Cn(t)
                }

                function Kn(t) {
                    t.v = 0, t.I = -1, t.f && (0 == ln(t.b).length && 0 == t.g.length || (t.b.c.length = 0, O(t.g), t.g.length = 0), t.f.qa())
                }

                function Xn(t, e, n) {
                    var r = function(t) {
                        return t instanceof Re ? Le(t) : new Re(t, void 0)
                    }(n);
                    if ("" != r.c) e && Me(r, e + "." + r.c), Ue(r, r.h);
                    else {
                        var i = a.location;
                        r = function(t, e, n, r) {
                            var i = new Re(null, void 0);
                            return t && Ve(i, t), e && Me(i, e), n && Ue(i, n), r && (i.g = r), i
                        }(i.protocol, e ? e + "." + i.hostname : i.hostname, +i.port, n)
                    }
                    return t.V && k(t.V, (function(t, e) {
                        qe(r, e, t)
                    })), e = t.A, n = t.na, e && n && qe(r, e, n), qe(r, "VER", t.ha), Mn(t, r), r
                }

                function Wn(t, e) {
                    if (e && !t.C) throw Error("Can't create secondary domain capable XhrIo object.");
                    return (e = new bn(t.Na)).F = t.C, e
                }

                function Jn() {}

                function Zn() {
                    if (F && !(10 <= Number($))) throw Error("Environmental error: no available transport.")
                }

                function $n(t, e) {
                    jt.call(this), this.a = new Dn(e), this.o = t, this.b = e && e.messageUrlParams || null, t = e && e.messageHeaders || null, e && e.clientProtocolHeaderRequired && (t ? t["X-Client-Protocol"] = "webchannel" : t = {
                        "X-Client-Protocol": "webchannel"
                    }), this.a.l = t, t = e && e.initMessageHeaders || null, e && e.messageContentType && (t ? t["X-WebChannel-Content-Type"] = e.messageContentType : t = {
                        "X-WebChannel-Content-Type": e.messageContentType
                    }), e && e.a && (t ? t["X-WebChannel-Client-Profile"] = e.a : t = {
                        "X-WebChannel-Client-Profile": e.a
                    }), this.a.O = t, (t = e && e.httpHeadersOverwriteParam) && !T(t) && (this.a.i = t), this.m = e && e.supportsCrossDomainXhr || !1, this.l = e && e.sendRawJson || !1, (e = e && e.httpSessionIdParam) && !T(e) && (this.a.A = e, null !== (t = this.b) && e in t && (e in (t = this.b) && delete t[e])), this.f = new nr(this)
                }

                function tr(t) {
                    pe.call(this);
                    var e = t.__sm__;
                    if (e) {
                        t: {
                            for (var n in e) {
                                t = n;
                                break t
                            }
                            t = void 0
                        }(this.c = t) ? (t = this.c, this.data = null !== e && t in e ? e[t] : void 0) : this.data = e
                    }
                    else this.data = t
                }

                function er() {
                    de.call(this), this.status = 1
                }

                function nr(t) {
                    this.a = t
                }(o = bn.prototype).ba = function(t, e, n, r) {
                    if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.B + "; newUri=" + t);
                    e = e ? e.toUpperCase() : "GET", this.B = t, this.f = "", this.h = 0, this.u = !1, this.b = !0, this.a = new XMLHttpRequest, this.s = this.H ? ce(this.H) : ce(fe), this.a.onreadystatechange = y(this.za, this);
                    try {
                        this.A = !0, this.a.open(e, String(t), !0), this.A = !1
                    } catch (t) {
                        return void En(this, t)
                    }
                    t = n || "";
                    var i = new De(this.headers);
                    r && xe(r, (function(t, e) {
                        i.set(e, t)
                    })), r = function(t) {
                        t: {
                            for (var e = In, n = t.length, r = "string" == typeof t ? t.split("") : t, i = 0; i < n; i++)
                                if (i in r && e.call(void 0, r[i], i, t)) {
                                    e = i;
                                    break t
                                }
                            e = -1
                        }
                        return 0 > e ? null : "string" == typeof t ? t.charAt(e) : t[e]
                    }(i.L()), n = a.FormData && t instanceof a.FormData, !(0 <= _(_n, e)) || r || n || i.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), i.forEach((function(t, e) {
                        this.a.setRequestHeader(e, t)
                    }), this), this.I && (this.a.responseType = this.I), "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);
                    try {
                        Nn(this), 0 < this.o && ((this.D = function(t) {
                            return F && J(9) && "number" == typeof t.timeout && void 0 !== t.ontimeout
                        }(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = y(this.xa, this)) : this.m = zt(this.xa, this.o, this)), this.l = !0, this.a.send(t), this.l = !1
                    } catch (t) {
                        En(this, t)
                    }
                }, o.xa = function() {
                    void 0 !== u && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, Nt(this, "timeout"), this.abort(8))
                }, o.abort = function(t) {
                    this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = t || 7, Nt(this, "complete"), Nt(this, "abort"), jn(this))
                }, o.G = function() {
                    this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), jn(this, !0)), bn.X.G.call(this)
                }, o.za = function() {
                    this.j || (this.A || this.l || this.g ? Tn(this) : this.Ua())
                }, o.Ua = function() {
                    Tn(this)
                }, o.W = function() {
                    try {
                        return 2 < An(this) ? this.a.status : -1
                    } catch (t) {
                        return -1
                    }
                }, o.$ = function() {
                    try {
                        return this.a ? this.a.responseText : ""
                    } catch (t) {
                        return ""
                    }
                }, o.Pa = function(t) {
                    if (this.a) {
                        var e = this.a.responseText;
                        return t && 0 == e.indexOf(t) && (e = e.substring(t.length)), gn(e)
                    }
                }, o.ua = function() {
                    return this.h
                }, o.Qa = function() {
                    return "string" == typeof this.f ? this.f : String(this.f)
                }, (o = Dn.prototype).ha = 8, o.v = 1, o.Ba = function(t) {
                    if (this.h)
                        if (this.h = null, 1 == this.v) {
                            if (!t) {
                                this.R = Math.floor(1e5 * Math.random()), t = this.R++;
                                var e, n = new ye(this, this.c, t, void 0),
                                    r = this.l;
                                if (this.O && (r ? R(r = P(r), this.O) : r = this.O), null === this.i && (n.B = r), this.da) t: {
                                    for (var i = e = 0; i < this.g.length; i++) {
                                        var o = this.g[i];
                                        if (void 0 === (o = "__data__" in o.a && "string" == typeof(o = o.a.__data__) ? o.length : void 0)) break;
                                        if (4096 < (e += o)) {
                                            e = i;
                                            break t
                                        }
                                        if (4096 === e || i === this.g.length - 1) {
                                            e = i + 1;
                                            break t
                                        }
                                    }
                                    e = 1e3
                                }
                                else e = 1e3;
                                e = Un(this, n, e), qe(i = Le(this.B), "RID", t), qe(i, "CVER", 22), this.A && qe(i, "X-HTTP-Session-Id", this.A), Mn(this, i), this.i && r && Sn(i, this.i, r), hn(this.b, n), this.Ia && qe(i, "TYPE", "init"), this.da ? (qe(i, "$req", e), qe(i, "SID", "null"), n.U = !0, we(n, i, null)) : we(n, i, e), this.v = 2
                            }
                        } else 3 == this.v && (t ? Vn(this, t) : 0 == this.g.length || un(this.b) || Vn(this))
                }, o.Aa = function() {
                    if (this.j = null, Gn(this), this.U && !(this.F || null == this.a || 0 >= this.N)) {
                        var t = 2 * this.N;
                        this.c.info("BP detection timer enabled: " + t), this.s = oe(y(this.Ta, this), t)
                    }
                }, o.Ta = function() {
                    this.s && (this.s = null, this.c.info("BP detection timeout reached."), this.c.info("Buffering proxy detected and switch to long-polling!"), this.H = !1, this.F = !0, re(10), Pn(this), Gn(this))
                }, o.Sa = function() {
                    null != this.m && (this.m = null, Pn(this), qn(this), re(19))
                }, o.Ya = function(t) {
                    t ? (this.c.info("Successfully pinged google.com"), re(2)) : (this.c.info("Failed to ping google.com"), re(1))
                }, (o = Jn.prototype).ta = function() {}, o.sa = function() {}, o.ra = function() {}, o.qa = function() {}, o.Ja = function() {}, Zn.prototype.a = function(t, e) {
                    return new $n(t, e)
                }, m($n, jt), $n.prototype.g = function() {
                    this.a.f = this.f, this.m && (this.a.C = !0);
                    var t = this.a,
                        e = this.o,
                        n = this.b || void 0;
                    re(0), t.fa = e, t.V = n || {}, t.H = t.S, t.B = Xn(t, null, t.fa), Ln(t)
                }, $n.prototype.close = function() {
                    kn(this.a)
                }, $n.prototype.h = function(t) {
                    if ("string" == typeof t) {
                        var e = {};
                        e.__data__ = t, Rn(this.a, e)
                    } else this.l ? ((e = {}).__data__ = St(t), Rn(this.a, e)) : Rn(this.a, t)
                }, $n.prototype.G = function() {
                    this.a.f = null, delete this.f, kn(this.a), delete this.a, $n.X.G.call(this)
                }, m(tr, pe), m(er, de), m(nr, Jn), nr.prototype.ta = function() {
                    Nt(this.a, "a")
                }, nr.prototype.sa = function(t) {
                    Nt(this.a, new tr(t))
                }, nr.prototype.ra = function(t) {
                    Nt(this.a, new er(t))
                }, nr.prototype.qa = function() {
                    Nt(this.a, "b")
                }, Zn.prototype.createWebChannel = Zn.prototype.a, $n.prototype.send = $n.prototype.h, $n.prototype.open = $n.prototype.g, $n.prototype.close = $n.prototype.close, se.NO_ERROR = 0, se.TIMEOUT = 8, se.HTTP_ERROR = 6, ue.COMPLETE = "complete", he.EventType = le, le.OPEN = "a", le.CLOSE = "b", le.ERROR = "c", le.MESSAGE = "d", jt.prototype.listen = jt.prototype.va, bn.prototype.listenOnce = bn.prototype.wa, bn.prototype.getLastError = bn.prototype.Qa, bn.prototype.getLastErrorCode = bn.prototype.ua, bn.prototype.getStatus = bn.prototype.W, bn.prototype.getResponseJson = bn.prototype.Pa, bn.prototype.getResponseText = bn.prototype.$, bn.prototype.send = bn.prototype.ba;
                var rr = function() {
                        return new Zn
                    },
                    ir = function() {
                        return $t()
                    },
                    or = se,
                    sr = ue,
                    ur = Jt,
                    ar = {
                        gb: 0,
                        jb: 1,
                        kb: 2,
                        Db: 3,
                        Ib: 4,
                        Fb: 5,
                        Gb: 6,
                        Eb: 7,
                        Cb: 8,
                        Hb: 9,
                        PROXY: 10,
                        NOPROXY: 11,
                        Ab: 12,
                        wb: 13,
                        xb: 14,
                        vb: 15,
                        yb: 16,
                        zb: 17,
                        bb: 18,
                        ab: 19,
                        cb: 20
                    },
                    cr = he,
                    hr = bn
            }).call(this, n(38))
        },
        1640: function(t, e, n) {
            "use strict";
            (function(t) {
                n.d(e, "a", (function() {
                    return hc
                })), n.d(e, "b", (function() {
                    return lc
                })), n.d(e, "c", (function() {
                    return C
                })), n.d(e, "d", (function() {
                    return ic
                })), n.d(e, "e", (function() {
                    return sc
                })), n.d(e, "f", (function() {
                    return oc
                })), n.d(e, "g", (function() {
                    return ac
                })), n.d(e, "h", (function() {
                    return ma
                })), n.d(e, "i", (function() {
                    return ba
                })), n.d(e, "j", (function() {
                    return Su
                })), n.d(e, "k", (function() {
                    return yc
                })), n.d(e, "l", (function() {
                    return Oc
                })), n.d(e, "m", (function() {
                    return bc
                })), n.d(e, "n", (function() {
                    return _c
                })), n.d(e, "o", (function() {
                    return cc
                })), n.d(e, "p", (function() {
                    return Ec
                })), n.d(e, "q", (function() {
                    return wc
                })), n.d(e, "r", (function() {
                    return gc
                }));
                var r = n(173),
                    i = n(41),
                    o = n(1409),
                    s = n(1327),
                    u = function(t, e, n, r, i, o) {
                        this.t = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i, this.i = o
                    },
                    a = function() {
                        function t(t, e) {
                            this.projectId = t, this.database = e || "(default)"
                        }
                        return Object.defineProperty(t.prototype, "o", {
                            get: function() {
                                return "(default)" === this.database
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.isEqual = function(e) {
                            return e instanceof t && e.projectId === this.projectId && e.database === this.database
                        }, t
                    }(),
                    c = new r.b("@firebase/firestore");

                function h() {
                    return c.logLevel
                }

                function f(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    if (c.logLevel <= r.a.DEBUG) {
                        var i = e.map(d);
                        c.debug.apply(c, Object(s.g)(["Firestore (8.2.9): " + t], i))
                    }
                }

                function l(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    if (c.logLevel <= r.a.ERROR) {
                        var i = e.map(d);
                        c.error.apply(c, Object(s.g)(["Firestore (8.2.9): " + t], i))
                    }
                }

                function p(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    if (c.logLevel <= r.a.WARN) {
                        var i = e.map(d);
                        c.warn.apply(c, Object(s.g)(["Firestore (8.2.9): " + t], i))
                    }
                }

                function d(t) {
                    if ("string" == typeof t) return t;
                    try {
                        return e = t, JSON.stringify(e)
                    } catch (e) {
                        return t
                    }
                    var e
                }

                function v(t) {
                    void 0 === t && (t = "Unexpected state");
                    var e = "FIRESTORE (8.2.9) INTERNAL ASSERTION FAILED: " + t;
                    throw l(e), new Error(e)
                }

                function y(t, e) {
                    t || v()
                }

                function g(t, e) {
                    return t
                }

                function b(t) {
                    var e = "undefined" != typeof self && (self.crypto || self.msCrypto),
                        n = new Uint8Array(t);
                    if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n);
                    else
                        for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
                    return n
                }
                var m = function() {
                    function t() {}
                    return t.u = function() {
                        for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = ""; n.length < 20;)
                            for (var r = b(40), i = 0; i < r.length; ++i) n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
                        return n
                    }, t
                }();

                function w(t, e) {
                    return t < e ? -1 : t > e ? 1 : 0
                }

                function _(t, e, n) {
                    return t.length === e.length && t.every((function(t, r) {
                        return n(t, e[r])
                    }))
                }

                function I(t) {
                    return t + "\0"
                }
                var E = function() {
                    function t(t) {
                        this.h = t
                    }
                    return t.fromBase64String = function(e) {
                        return new t(atob(e))
                    }, t.fromUint8Array = function(e) {
                        return new t(function(t) {
                            for (var e = "", n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
                            return e
                        }(e))
                    }, t.prototype.toBase64 = function() {
                        return t = this.h, btoa(t);
                        var t
                    }, t.prototype.toUint8Array = function() {
                        return function(t) {
                            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
                            return e
                        }(this.h)
                    }, t.prototype.l = function() {
                        return 2 * this.h.length
                    }, t.prototype._ = function(t) {
                        return w(this.h, t.h)
                    }, t.prototype.isEqual = function(t) {
                        return this.h === t.h
                    }, t
                }();
                E.T = new E("");
                var O = {
                        OK: "ok",
                        CANCELLED: "cancelled",
                        UNKNOWN: "unknown",
                        INVALID_ARGUMENT: "invalid-argument",
                        DEADLINE_EXCEEDED: "deadline-exceeded",
                        NOT_FOUND: "not-found",
                        ALREADY_EXISTS: "already-exists",
                        PERMISSION_DENIED: "permission-denied",
                        UNAUTHENTICATED: "unauthenticated",
                        RESOURCE_EXHAUSTED: "resource-exhausted",
                        FAILED_PRECONDITION: "failed-precondition",
                        ABORTED: "aborted",
                        OUT_OF_RANGE: "out-of-range",
                        UNIMPLEMENTED: "unimplemented",
                        INTERNAL: "internal",
                        UNAVAILABLE: "unavailable",
                        DATA_LOSS: "data-loss"
                    },
                    T = function(t) {
                        function e(e, n) {
                            var r = this;
                            return (r = t.call(this, n) || this).code = e, r.message = n, r.name = "FirebaseError", r.toString = function() {
                                return r.name + ": [code=" + r.code + "]: " + r.message
                            }, r
                        }
                        return Object(s.c)(e, t), e
                    }(Error),
                    j = function() {
                        function t(t) {
                            this.I = t
                        }
                        return t.fromBase64String = function(e) {
                            try {
                                return new t(E.fromBase64String(e))
                            } catch (e) {
                                throw new T(O.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + e)
                            }
                        }, t.fromUint8Array = function(e) {
                            return new t(E.fromUint8Array(e))
                        }, t.prototype.toBase64 = function() {
                            return this.I.toBase64()
                        }, t.prototype.toUint8Array = function() {
                            return this.I.toUint8Array()
                        }, t.prototype.toString = function() {
                            return "Bytes(base64: " + this.toBase64() + ")"
                        }, t.prototype.isEqual = function(t) {
                            return this.I.isEqual(t.I)
                        }, t
                    }(),
                    N = function() {
                        function t(t) {
                            this.uid = t
                        }
                        return t.prototype.m = function() {
                            return null != this.uid
                        }, t.prototype.A = function() {
                            return this.m() ? "uid:" + this.uid : "anonymous-user"
                        }, t.prototype.isEqual = function(t) {
                            return t.uid === this.uid
                        }, t
                    }();
                N.UNAUTHENTICATED = new N(null), N.R = new N("google-credentials-uid"), N.P = new N("first-party-uid");
                var A = function(t, e) {
                        this.user = e, this.type = "OAuth", this.g = {}, this.g.Authorization = "Bearer " + t
                    },
                    S = function() {
                        function t() {
                            this.V = null
                        }
                        return t.prototype.getToken = function() {
                            return Promise.resolve(null)
                        }, t.prototype.p = function() {}, t.prototype.v = function(t) {
                            this.V = t, t(N.UNAUTHENTICATED)
                        }, t.prototype.S = function() {
                            this.V = null
                        }, t
                    }(),
                    x = function() {
                        function t(t) {
                            var e = this;
                            this.D = null, this.currentUser = N.UNAUTHENTICATED, this.C = !1, this.N = 0, this.V = null, this.forceRefresh = !1, this.D = function() {
                                e.N++, e.currentUser = e.$(), e.C = !0, e.V && e.V(e.currentUser)
                            }, this.N = 0, this.auth = t.getImmediate({
                                optional: !0
                            }), this.auth ? this.auth.addAuthTokenListener(this.D) : (this.D(null), t.get().then((function(t) {
                                e.auth = t, e.D && e.auth.addAuthTokenListener(e.D)
                            }), (function() {})))
                        }
                        return t.prototype.getToken = function() {
                            var t = this,
                                e = this.N,
                                n = this.forceRefresh;
                            return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then((function(n) {
                                return t.N !== e ? (f("FirebaseCredentialsProvider", "getToken aborted due to token change."), t.getToken()) : n ? (y("string" == typeof n.accessToken), new A(n.accessToken, t.currentUser)) : null
                            })) : Promise.resolve(null)
                        }, t.prototype.p = function() {
                            this.forceRefresh = !0
                        }, t.prototype.v = function(t) {
                            this.V = t, this.C && t(this.currentUser)
                        }, t.prototype.S = function() {
                            this.auth && this.auth.removeAuthTokenListener(this.D), this.D = null, this.V = null
                        }, t.prototype.$ = function() {
                            var t = this.auth && this.auth.getUid();
                            return y(null === t || "string" == typeof t), new N(t)
                        }, t
                    }(),
                    D = function() {
                        function t(t, e) {
                            this.F = t, this.O = e, this.type = "FirstParty", this.user = N.P
                        }
                        return Object.defineProperty(t.prototype, "g", {
                            get: function() {
                                var t = {
                                        "X-Goog-AuthUser": this.O
                                    },
                                    e = this.F.auth.getAuthHeaderValueForFirstParty([]);
                                return e && (t.Authorization = e), t
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t
                    }(),
                    k = function() {
                        function t(t, e) {
                            this.F = t, this.O = e
                        }
                        return t.prototype.getToken = function() {
                            return Promise.resolve(new D(this.F, this.O))
                        }, t.prototype.v = function(t) {
                            t(N.P)
                        }, t.prototype.S = function() {}, t.prototype.p = function() {}, t
                    }(),
                    P = function() {
                        function t(t, e) {
                            var n = this;
                            this.previousValue = t, e && (e.k = function(t) {
                                return n.M(t)
                            }, this.L = function(t) {
                                return e.B(t)
                            })
                        }
                        return t.prototype.M = function(t) {
                            return this.previousValue = Math.max(t, this.previousValue), this.previousValue
                        }, t.prototype.next = function() {
                            var t = ++this.previousValue;
                            return this.L && this.L(t), t
                        }, t
                    }();
                P.q = -1;
                var C = function() {
                        function t(t, e) {
                            if (this.seconds = t, this.nanoseconds = e, e < 0) throw new T(O.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
                            if (e >= 1e9) throw new T(O.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
                            if (t < -62135596800) throw new T(O.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
                            if (t >= 253402300800) throw new T(O.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t)
                        }
                        return t.now = function() {
                            return t.fromMillis(Date.now())
                        }, t.fromDate = function(e) {
                            return t.fromMillis(e.getTime())
                        }, t.fromMillis = function(e) {
                            var n = Math.floor(e / 1e3);
                            return new t(n, 1e6 * (e - 1e3 * n))
                        }, t.prototype.toDate = function() {
                            return new Date(this.toMillis())
                        }, t.prototype.toMillis = function() {
                            return 1e3 * this.seconds + this.nanoseconds / 1e6
                        }, t.prototype.U = function(t) {
                            return this.seconds === t.seconds ? w(this.nanoseconds, t.nanoseconds) : w(this.seconds, t.seconds)
                        }, t.prototype.isEqual = function(t) {
                            return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds
                        }, t.prototype.toString = function() {
                            return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")"
                        }, t.prototype.toJSON = function() {
                            return {
                                seconds: this.seconds,
                                nanoseconds: this.nanoseconds
                            }
                        }, t.prototype.valueOf = function() {
                            var t = this.seconds - -62135596800;
                            return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0")
                        }, t
                    }(),
                    R = function() {
                        function t(t) {
                            this.timestamp = t
                        }
                        return t.K = function(e) {
                            return new t(e)
                        }, t.min = function() {
                            return new t(new C(0, 0))
                        }, t.prototype._ = function(t) {
                            return this.timestamp.U(t.timestamp)
                        }, t.prototype.isEqual = function(t) {
                            return this.timestamp.isEqual(t.timestamp)
                        }, t.prototype.W = function() {
                            return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
                        }, t.prototype.toString = function() {
                            return "SnapshotVersion(" + this.timestamp.toString() + ")"
                        }, t.prototype.j = function() {
                            return this.timestamp
                        }, t
                    }(),
                    L = function() {
                        function t(t, e, n) {
                            void 0 === e ? e = 0 : e > t.length && v(), void 0 === n ? n = t.length - e : n > t.length - e && v(), this.segments = t, this.offset = e, this.G = n
                        }
                        return Object.defineProperty(t.prototype, "length", {
                            get: function() {
                                return this.G
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.isEqual = function(e) {
                            return 0 === t.H(this, e)
                        }, t.prototype.child = function(e) {
                            var n = this.segments.slice(this.offset, this.limit());
                            return e instanceof t ? e.forEach((function(t) {
                                n.push(t)
                            })) : n.push(e), this.J(n)
                        }, t.prototype.limit = function() {
                            return this.offset + this.length
                        }, t.prototype.Y = function(t) {
                            return t = void 0 === t ? 1 : t, this.J(this.segments, this.offset + t, this.length - t)
                        }, t.prototype.X = function() {
                            return this.J(this.segments, this.offset, this.length - 1)
                        }, t.prototype.Z = function() {
                            return this.segments[this.offset]
                        }, t.prototype.tt = function() {
                            return this.get(this.length - 1)
                        }, t.prototype.get = function(t) {
                            return this.segments[this.offset + t]
                        }, t.prototype.et = function() {
                            return 0 === this.length
                        }, t.prototype.nt = function(t) {
                            if (t.length < this.length) return !1;
                            for (var e = 0; e < this.length; e++)
                                if (this.get(e) !== t.get(e)) return !1;
                            return !0
                        }, t.prototype.st = function(t) {
                            if (this.length + 1 !== t.length) return !1;
                            for (var e = 0; e < this.length; e++)
                                if (this.get(e) !== t.get(e)) return !1;
                            return !0
                        }, t.prototype.forEach = function(t) {
                            for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e])
                        }, t.prototype.it = function() {
                            return this.segments.slice(this.offset, this.limit())
                        }, t.H = function(t, e) {
                            for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
                                var i = t.get(r),
                                    o = e.get(r);
                                if (i < o) return -1;
                                if (i > o) return 1
                            }
                            return t.length < e.length ? -1 : t.length > e.length ? 1 : 0
                        }, t
                    }(),
                    V = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return Object(s.c)(e, t), e.prototype.J = function(t, n, r) {
                            return new e(t, n, r)
                        }, e.prototype.rt = function() {
                            return this.it().join("/")
                        }, e.prototype.toString = function() {
                            return this.rt()
                        }, e.ot = function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            for (var r = [], i = 0, o = t; i < o.length; i++) {
                                var s = o[i];
                                if (s.indexOf("//") >= 0) throw new T(O.INVALID_ARGUMENT, "Invalid segment (" + s + "). Paths must not contain // in them.");
                                r.push.apply(r, s.split("/").filter((function(t) {
                                    return t.length > 0
                                })))
                            }
                            return new e(r)
                        }, e.ct = function() {
                            return new e([])
                        }, e
                    }(L),
                    M = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
                    U = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return Object(s.c)(e, t), e.prototype.J = function(t, n, r) {
                            return new e(t, n, r)
                        }, e.at = function(t) {
                            return M.test(t)
                        }, e.prototype.rt = function() {
                            return this.it().map((function(t) {
                                return t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), e.at(t) || (t = "`" + t + "`"), t
                            })).join(".")
                        }, e.prototype.toString = function() {
                            return this.rt()
                        }, e.prototype.ut = function() {
                            return 1 === this.length && "__name__" === this.get(0)
                        }, e.ht = function() {
                            return new e(["__name__"])
                        }, e.lt = function(t) {
                            for (var n = [], r = "", i = 0, o = function() {
                                    if (0 === r.length) throw new T(O.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
                                    n.push(r), r = ""
                                }, s = !1; i < t.length;) {
                                var u = t[i];
                                if ("\\" === u) {
                                    if (i + 1 === t.length) throw new T(O.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                                    var a = t[i + 1];
                                    if ("\\" !== a && "." !== a && "`" !== a) throw new T(O.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                                    r += a, i += 2
                                } else "`" === u ? (s = !s, i++) : "." !== u || s ? (r += u, i++) : (o(), i++)
                            }
                            if (o(), s) throw new T(O.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
                            return new e(n)
                        }, e.ct = function() {
                            return new e([])
                        }, e
                    }(L),
                    F = function() {
                        function t(t) {
                            this.path = t
                        }
                        return t._t = function(e) {
                            return new t(V.ot(e))
                        }, t.ft = function(e) {
                            return new t(V.ot(e).Y(5))
                        }, t.prototype.dt = function(t) {
                            return this.path.length >= 2 && this.path.get(this.path.length - 2) === t
                        }, t.prototype.isEqual = function(t) {
                            return null !== t && 0 === V.H(this.path, t.path)
                        }, t.prototype.toString = function() {
                            return this.path.toString()
                        }, t.H = function(t, e) {
                            return V.H(t.path, e.path)
                        }, t.wt = function(t) {
                            return t.length % 2 == 0
                        }, t.Et = function(e) {
                            return new t(new V(e.slice()))
                        }, t
                    }();

                function q(t) {
                    var e = 0;
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
                    return e
                }

                function z(t, e) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
                }

                function G(t) {
                    for (var e in t)
                        if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
                    return !0
                }
                var B = function() {
                        function t(t) {
                            this.fields = t, t.sort(U.H)
                        }
                        return t.prototype.Tt = function(t) {
                            for (var e = 0, n = this.fields; e < n.length; e++)
                                if (n[e].nt(t)) return !0;
                            return !1
                        }, t.prototype.isEqual = function(t) {
                            return _(this.fields, t.fields, (function(t, e) {
                                return t.isEqual(e)
                            }))
                        }, t
                    }(),
                    H = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

                function Q(t) {
                    if (y(!!t), "string" == typeof t) {
                        var e = 0,
                            n = H.exec(t);
                        if (y(!!n), n[1]) {
                            var r = n[1];
                            r = (r + "000000000").substr(0, 9), e = Number(r)
                        }
                        var i = new Date(t);
                        return {
                            seconds: Math.floor(i.getTime() / 1e3),
                            nanos: e
                        }
                    }
                    return {
                        seconds: Y(t.seconds),
                        nanos: Y(t.nanos)
                    }
                }

                function Y(t) {
                    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0
                }

                function K(t) {
                    return "string" == typeof t ? E.fromBase64String(t) : E.fromUint8Array(t)
                }

                function X(t) {
                    var e, n;
                    return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue)
                }

                function W(t) {
                    var e = t.mapValue.fields.__previous_value__;
                    return X(e) ? W(e) : e
                }

                function J(t) {
                    var e = Q(t.mapValue.fields.__local_write_time__.timestampValue);
                    return new C(e.seconds, e.nanos)
                }

                function Z(t) {
                    return null == t
                }

                function $(t) {
                    return 0 === t && 1 / t == -1 / 0
                }

                function tt(t) {
                    return "number" == typeof t && Number.isInteger(t) && !$(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER
                }

                function et(t) {
                    return "nullValue" in t ? 0 : "booleanValue" in t ? 1 : "integerValue" in t || "doubleValue" in t ? 2 : "timestampValue" in t ? 3 : "stringValue" in t ? 5 : "bytesValue" in t ? 6 : "referenceValue" in t ? 7 : "geoPointValue" in t ? 8 : "arrayValue" in t ? 9 : "mapValue" in t ? X(t) ? 4 : 10 : v()
                }

                function nt(t, e) {
                    var n = et(t);
                    if (n !== et(e)) return !1;
                    switch (n) {
                        case 0:
                            return !0;
                        case 1:
                            return t.booleanValue === e.booleanValue;
                        case 4:
                            return J(t).isEqual(J(e));
                        case 3:
                            return function(t, e) {
                                if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) return t.timestampValue === e.timestampValue;
                                var n = Q(t.timestampValue),
                                    r = Q(e.timestampValue);
                                return n.seconds === r.seconds && n.nanos === r.nanos
                            }(t, e);
                        case 5:
                            return t.stringValue === e.stringValue;
                        case 6:
                            return function(t, e) {
                                return K(t.bytesValue).isEqual(K(e.bytesValue))
                            }(t, e);
                        case 7:
                            return t.referenceValue === e.referenceValue;
                        case 8:
                            return function(t, e) {
                                return Y(t.geoPointValue.latitude) === Y(e.geoPointValue.latitude) && Y(t.geoPointValue.longitude) === Y(e.geoPointValue.longitude)
                            }(t, e);
                        case 2:
                            return function(t, e) {
                                if ("integerValue" in t && "integerValue" in e) return Y(t.integerValue) === Y(e.integerValue);
                                if ("doubleValue" in t && "doubleValue" in e) {
                                    var n = Y(t.doubleValue),
                                        r = Y(e.doubleValue);
                                    return n === r ? $(n) === $(r) : isNaN(n) && isNaN(r)
                                }
                                return !1
                            }(t, e);
                        case 9:
                            return _(t.arrayValue.values || [], e.arrayValue.values || [], nt);
                        case 10:
                            return function(t, e) {
                                var n = t.mapValue.fields || {},
                                    r = e.mapValue.fields || {};
                                if (q(n) !== q(r)) return !1;
                                for (var i in n)
                                    if (n.hasOwnProperty(i) && (void 0 === r[i] || !nt(n[i], r[i]))) return !1;
                                return !0
                            }(t, e);
                        default:
                            return v()
                    }
                }

                function rt(t, e) {
                    return void 0 !== (t.values || []).find((function(t) {
                        return nt(t, e)
                    }))
                }

                function it(t, e) {
                    var n = et(t),
                        r = et(e);
                    if (n !== r) return w(n, r);
                    switch (n) {
                        case 0:
                            return 0;
                        case 1:
                            return w(t.booleanValue, e.booleanValue);
                        case 2:
                            return function(t, e) {
                                var n = Y(t.integerValue || t.doubleValue),
                                    r = Y(e.integerValue || e.doubleValue);
                                return n < r ? -1 : n > r ? 1 : n === r ? 0 : isNaN(n) ? isNaN(r) ? 0 : -1 : 1
                            }(t, e);
                        case 3:
                            return ot(t.timestampValue, e.timestampValue);
                        case 4:
                            return ot(J(t), J(e));
                        case 5:
                            return w(t.stringValue, e.stringValue);
                        case 6:
                            return function(t, e) {
                                var n = K(t),
                                    r = K(e);
                                return n._(r)
                            }(t.bytesValue, e.bytesValue);
                        case 7:
                            return function(t, e) {
                                for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
                                    var o = w(n[i], r[i]);
                                    if (0 !== o) return o
                                }
                                return w(n.length, r.length)
                            }(t.referenceValue, e.referenceValue);
                        case 8:
                            return function(t, e) {
                                var n = w(Y(t.latitude), Y(e.latitude));
                                return 0 !== n ? n : w(Y(t.longitude), Y(e.longitude))
                            }(t.geoPointValue, e.geoPointValue);
                        case 9:
                            return function(t, e) {
                                for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
                                    var o = it(n[i], r[i]);
                                    if (o) return o
                                }
                                return w(n.length, r.length)
                            }(t.arrayValue, e.arrayValue);
                        case 10:
                            return function(t, e) {
                                var n = t.fields || {},
                                    r = Object.keys(n),
                                    i = e.fields || {},
                                    o = Object.keys(i);
                                r.sort(), o.sort();
                                for (var s = 0; s < r.length && s < o.length; ++s) {
                                    var u = w(r[s], o[s]);
                                    if (0 !== u) return u;
                                    var a = it(n[r[s]], i[o[s]]);
                                    if (0 !== a) return a
                                }
                                return w(r.length, o.length)
                            }(t.mapValue, e.mapValue);
                        default:
                            throw v()
                    }
                }

                function ot(t, e) {
                    if ("string" == typeof t && "string" == typeof e && t.length === e.length) return w(t, e);
                    var n = Q(t),
                        r = Q(e),
                        i = w(n.seconds, r.seconds);
                    return 0 !== i ? i : w(n.nanos, r.nanos)
                }

                function st(t) {
                    return ut(t)
                }

                function ut(t) {
                    return "nullValue" in t ? "null" : "booleanValue" in t ? "" + t.booleanValue : "integerValue" in t ? "" + t.integerValue : "doubleValue" in t ? "" + t.doubleValue : "timestampValue" in t ? function(t) {
                        var e = Q(t);
                        return "time(" + e.seconds + "," + e.nanos + ")"
                    }(t.timestampValue) : "stringValue" in t ? t.stringValue : "bytesValue" in t ? K(t.bytesValue).toBase64() : "referenceValue" in t ? (n = t.referenceValue, F.ft(n).toString()) : "geoPointValue" in t ? "geo(" + (e = t.geoPointValue).latitude + "," + e.longitude + ")" : "arrayValue" in t ? function(t) {
                        for (var e = "[", n = !0, r = 0, i = t.values || []; r < i.length; r++) n ? n = !1 : e += ",", e += ut(i[r]);
                        return e + "]"
                    }(t.arrayValue) : "mapValue" in t ? function(t) {
                        for (var e = "{", n = !0, r = 0, i = Object.keys(t.fields || {}).sort(); r < i.length; r++) {
                            var o = i[r];
                            n ? n = !1 : e += ",", e += o + ":" + ut(t.fields[o])
                        }
                        return e + "}"
                    }(t.mapValue) : v();
                    var e, n
                }

                function at(t, e) {
                    return {
                        referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.rt()
                    }
                }

                function ct(t) {
                    return !!t && "integerValue" in t
                }

                function ht(t) {
                    return !!t && "arrayValue" in t
                }

                function ft(t) {
                    return !!t && "nullValue" in t
                }

                function lt(t) {
                    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue))
                }

                function pt(t) {
                    return !!t && "mapValue" in t
                }
                var dt = function() {
                        function t(t) {
                            this.proto = t
                        }
                        return t.empty = function() {
                            return new t({
                                mapValue: {}
                            })
                        }, t.prototype.field = function(t) {
                            if (t.et()) return this.proto;
                            for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
                                if (!e.mapValue.fields) return null;
                                if (!pt(e = e.mapValue.fields[t.get(n)])) return null
                            }
                            return (e = (e.mapValue.fields || {})[t.tt()]) || null
                        }, t.prototype.isEqual = function(t) {
                            return nt(this.proto, t.proto)
                        }, t
                    }(),
                    vt = function() {
                        function t(t) {
                            void 0 === t && (t = dt.empty()), this.It = t, this.At = new Map
                        }
                        return t.prototype.set = function(t, e) {
                            return this.Rt(t, e), this
                        }, t.prototype.delete = function(t) {
                            return this.Rt(t, null), this
                        }, t.prototype.Rt = function(t, e) {
                            for (var n = this.At, r = 0; r < t.length - 1; ++r) {
                                var i = t.get(r),
                                    o = n.get(i);
                                o instanceof Map ? n = o : o && 10 === et(o) ? (o = new Map(Object.entries(o.mapValue.fields || {})), n.set(i, o), n = o) : (o = new Map, n.set(i, o), n = o)
                            }
                            n.set(t.tt(), e)
                        }, t.prototype.Pt = function() {
                            var t = this.yt(U.ct(), this.At);
                            return null != t ? new dt(t) : this.It
                        }, t.prototype.yt = function(t, e) {
                            var n = this,
                                r = !1,
                                i = this.It.field(t),
                                o = pt(i) ? Object.assign({}, i.mapValue.fields) : {};
                            return e.forEach((function(e, i) {
                                if (e instanceof Map) {
                                    var s = n.yt(t.child(i), e);
                                    null != s && (o[i] = s, r = !0)
                                } else null !== e ? (o[i] = e, r = !0) : o.hasOwnProperty(i) && (delete o[i], r = !0)
                            })), r ? {
                                mapValue: {
                                    fields: o
                                }
                            } : null
                        }, t
                    }();

                function yt(t) {
                    var e = [];
                    return z(t.fields || {}, (function(t, n) {
                        var r = new U([t]);
                        if (pt(n)) {
                            var i = yt(n.mapValue).fields;
                            if (0 === i.length) e.push(r);
                            else
                                for (var o = 0, s = i; o < s.length; o++) {
                                    var u = s[o];
                                    e.push(r.child(u))
                                }
                        } else e.push(r)
                    })), new B(e)
                }
                var gt = function(t, e) {
                        this.key = t, this.version = e
                    },
                    bt = function(t) {
                        function e(e, n, r, i) {
                            var o = this;
                            return (o = t.call(this, e, n) || this).gt = r, o.Vt = !!i.Vt, o.hasCommittedMutations = !!i.hasCommittedMutations, o
                        }
                        return Object(s.c)(e, t), e.prototype.field = function(t) {
                            return this.gt.field(t)
                        }, e.prototype.data = function() {
                            return this.gt
                        }, e.prototype.bt = function() {
                            return this.gt.proto
                        }, e.prototype.isEqual = function(t) {
                            return t instanceof e && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.Vt === t.Vt && this.hasCommittedMutations === t.hasCommittedMutations && this.gt.isEqual(t.gt)
                        }, e.prototype.toString = function() {
                            return "Document(" + this.key + ", " + this.version + ", " + this.gt.toString() + ", {hasLocalMutations: " + this.Vt + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})"
                        }, Object.defineProperty(e.prototype, "hasPendingWrites", {
                            get: function() {
                                return this.Vt || this.hasCommittedMutations
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e
                    }(gt),
                    mt = function(t) {
                        function e(e, n, r) {
                            var i = this;
                            return (i = t.call(this, e, n) || this).hasCommittedMutations = !(!r || !r.hasCommittedMutations), i
                        }
                        return Object(s.c)(e, t), e.prototype.toString = function() {
                            return "NoDocument(" + this.key + ", " + this.version + ")"
                        }, Object.defineProperty(e.prototype, "hasPendingWrites", {
                            get: function() {
                                return this.hasCommittedMutations
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.isEqual = function(t) {
                            return t instanceof e && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key)
                        }, e
                    }(gt),
                    wt = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return Object(s.c)(e, t), e.prototype.toString = function() {
                            return "UnknownDocument(" + this.key + ", " + this.version + ")"
                        }, Object.defineProperty(e.prototype, "hasPendingWrites", {
                            get: function() {
                                return !0
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.isEqual = function(t) {
                            return t instanceof e && t.version.isEqual(this.version) && t.key.isEqual(this.key)
                        }, e
                    }(gt),
                    _t = function(t, e, n, r, i, o, s) {
                        void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, this.startAt = o, this.endAt = s, this.vt = null
                    };

                function It(t, e, n, r, i, o, s) {
                    return void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), new _t(t, e, n, r, i, o, s)
                }

                function Et(t) {
                    var e = g(t);
                    if (null === e.vt) {
                        var n = e.path.rt();
                        null !== e.collectionGroup && (n += "|cg:" + e.collectionGroup), n += "|f:", n += e.filters.map((function(t) {
                            return function(t) {
                                return t.field.rt() + t.op.toString() + st(t.value)
                            }(t)
                        })).join(","), n += "|ob:", n += e.orderBy.map((function(t) {
                            return function(t) {
                                return t.field.rt() + t.dir
                            }(t)
                        })).join(","), Z(e.limit) || (n += "|l:", n += e.limit), e.startAt && (n += "|lb:", n += Lt(e.startAt)), e.endAt && (n += "|ub:", n += Lt(e.endAt)), e.vt = n
                    }
                    return e.vt
                }

                function Ot(t, e) {
                    if (t.limit !== e.limit) return !1;
                    if (t.orderBy.length !== e.orderBy.length) return !1;
                    for (var n = 0; n < t.orderBy.length; n++)
                        if (!Mt(t.orderBy[n], e.orderBy[n])) return !1;
                    if (t.filters.length !== e.filters.length) return !1;
                    for (var r = 0; r < t.filters.length; r++)
                        if (i = t.filters[r], o = e.filters[r], i.op !== o.op || !i.field.isEqual(o.field) || !nt(i.value, o.value)) return !1;
                    var i, o;
                    return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!Ft(t.startAt, e.startAt) && Ft(t.endAt, e.endAt)
                }

                function Tt(t) {
                    return F.wt(t.path) && null === t.collectionGroup && 0 === t.filters.length
                }
                var jt = function(t) {
                        function e(e, n, r) {
                            var i = this;
                            return (i = t.call(this) || this).field = e, i.op = n, i.value = r, i
                        }
                        return Object(s.c)(e, t), e.create = function(t, n, r) {
                            return t.ut() ? "in" === n || "not-in" === n ? this.St(t, n, r) : new Nt(t, n, r) : "array-contains" === n ? new Dt(t, r) : "in" === n ? new kt(t, r) : "not-in" === n ? new Pt(t, r) : "array-contains-any" === n ? new Ct(t, r) : new e(t, n, r)
                        }, e.St = function(t, e, n) {
                            return "in" === e ? new At(t, n) : new St(t, n)
                        }, e.prototype.matches = function(t) {
                            var e = t.field(this.field);
                            return "!=" === this.op ? null !== e && this.Dt(it(e, this.value)) : null !== e && et(this.value) === et(e) && this.Dt(it(e, this.value))
                        }, e.prototype.Dt = function(t) {
                            switch (this.op) {
                                case "<":
                                    return t < 0;
                                case "<=":
                                    return t <= 0;
                                case "==":
                                    return 0 === t;
                                case "!=":
                                    return 0 !== t;
                                case ">":
                                    return t > 0;
                                case ">=":
                                    return t >= 0;
                                default:
                                    return v()
                            }
                        }, e.prototype.Ct = function() {
                            return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0
                        }, e
                    }((function() {})),
                    Nt = function(t) {
                        function e(e, n, r) {
                            var i = this;
                            return (i = t.call(this, e, n, r) || this).key = F.ft(r.referenceValue), i
                        }
                        return Object(s.c)(e, t), e.prototype.matches = function(t) {
                            var e = F.H(t.key, this.key);
                            return this.Dt(e)
                        }, e
                    }(jt),
                    At = function(t) {
                        function e(e, n) {
                            var r = this;
                            return (r = t.call(this, e, "in", n) || this).keys = xt("in", n), r
                        }
                        return Object(s.c)(e, t), e.prototype.matches = function(t) {
                            return this.keys.some((function(e) {
                                return e.isEqual(t.key)
                            }))
                        }, e
                    }(jt),
                    St = function(t) {
                        function e(e, n) {
                            var r = this;
                            return (r = t.call(this, e, "not-in", n) || this).keys = xt("not-in", n), r
                        }
                        return Object(s.c)(e, t), e.prototype.matches = function(t) {
                            return !this.keys.some((function(e) {
                                return e.isEqual(t.key)
                            }))
                        }, e
                    }(jt);

                function xt(t, e) {
                    var n;
                    return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((function(t) {
                        return F.ft(t.referenceValue)
                    }))
                }
                var Dt = function(t) {
                        function e(e, n) {
                            return t.call(this, e, "array-contains", n) || this
                        }
                        return Object(s.c)(e, t), e.prototype.matches = function(t) {
                            var e = t.field(this.field);
                            return ht(e) && rt(e.arrayValue, this.value)
                        }, e
                    }(jt),
                    kt = function(t) {
                        function e(e, n) {
                            return t.call(this, e, "in", n) || this
                        }
                        return Object(s.c)(e, t), e.prototype.matches = function(t) {
                            var e = t.field(this.field);
                            return null !== e && rt(this.value.arrayValue, e)
                        }, e
                    }(jt),
                    Pt = function(t) {
                        function e(e, n) {
                            return t.call(this, e, "not-in", n) || this
                        }
                        return Object(s.c)(e, t), e.prototype.matches = function(t) {
                            if (rt(this.value.arrayValue, {
                                    nullValue: "NULL_VALUE"
                                })) return !1;
                            var e = t.field(this.field);
                            return null !== e && !rt(this.value.arrayValue, e)
                        }, e
                    }(jt),
                    Ct = function(t) {
                        function e(e, n) {
                            return t.call(this, e, "array-contains-any", n) || this
                        }
                        return Object(s.c)(e, t), e.prototype.matches = function(t) {
                            var e = this,
                                n = t.field(this.field);
                            return !(!ht(n) || !n.arrayValue.values) && n.arrayValue.values.some((function(t) {
                                return rt(e.value.arrayValue, t)
                            }))
                        }, e
                    }(jt),
                    Rt = function(t, e) {
                        this.position = t, this.before = e
                    };

                function Lt(t) {
                    return (t.before ? "b" : "a") + ":" + t.position.map((function(t) {
                        return st(t)
                    })).join(",")
                }
                var Vt = function(t, e) {
                    void 0 === e && (e = "asc"), this.field = t, this.dir = e
                };

                function Mt(t, e) {
                    return t.dir === e.dir && t.field.isEqual(e.field)
                }

                function Ut(t, e, n) {
                    for (var r = 0, i = 0; i < t.position.length; i++) {
                        var o = e[i],
                            s = t.position[i];
                        if (r = o.field.ut() ? F.H(F.ft(s.referenceValue), n.key) : it(s, n.field(o.field)), "desc" === o.dir && (r *= -1), 0 !== r) break
                    }
                    return t.before ? r <= 0 : r < 0
                }

                function Ft(t, e) {
                    if (null === t) return null === e;
                    if (null === e) return !1;
                    if (t.before !== e.before || t.position.length !== e.position.length) return !1;
                    for (var n = 0; n < t.position.length; n++)
                        if (!nt(t.position[n], e.position[n])) return !1;
                    return !0
                }
                var qt = function(t, e, n, r, i, o, s, u) {
                    void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), void 0 === u && (u = null), this.path = t, this.collectionGroup = e, this.xt = n, this.filters = r, this.limit = i, this.limitType = o, this.startAt = s, this.endAt = u, this.Nt = null, this.$t = null, this.startAt, this.endAt
                };

                function zt(t, e, n, r, i, o, s, u) {
                    return new qt(t, e, n, r, i, o, s, u)
                }

                function Gt(t) {
                    return new qt(t)
                }

                function Bt(t) {
                    return !Z(t.limit) && "F" === t.limitType
                }

                function Ht(t) {
                    return !Z(t.limit) && "L" === t.limitType
                }

                function Qt(t) {
                    return t.xt.length > 0 ? t.xt[0].field : null
                }

                function Yt(t) {
                    for (var e = 0, n = t.filters; e < n.length; e++) {
                        var r = n[e];
                        if (r.Ct()) return r.field
                    }
                    return null
                }

                function Kt(t) {
                    return null !== t.collectionGroup
                }

                function Xt(t) {
                    var e = g(t);
                    if (null === e.Nt) {
                        e.Nt = [];
                        var n = Yt(e),
                            r = Qt(e);
                        if (null !== n && null === r) n.ut() || e.Nt.push(new Vt(n)), e.Nt.push(new Vt(U.ht(), "asc"));
                        else {
                            for (var i = !1, o = 0, s = e.xt; o < s.length; o++) {
                                var u = s[o];
                                e.Nt.push(u), u.field.ut() && (i = !0)
                            }
                            if (!i) {
                                var a = e.xt.length > 0 ? e.xt[e.xt.length - 1].dir : "asc";
                                e.Nt.push(new Vt(U.ht(), a))
                            }
                        }
                    }
                    return e.Nt
                }

                function Wt(t) {
                    var e = g(t);
                    if (!e.$t)
                        if ("F" === e.limitType) e.$t = It(e.path, e.collectionGroup, Xt(e), e.filters, e.limit, e.startAt, e.endAt);
                        else {
                            for (var n = [], r = 0, i = Xt(e); r < i.length; r++) {
                                var o = i[r],
                                    s = "desc" === o.dir ? "asc" : "desc";
                                n.push(new Vt(o.field, s))
                            }
                            var u = e.endAt ? new Rt(e.endAt.position, !e.endAt.before) : null,
                                a = e.startAt ? new Rt(e.startAt.position, !e.startAt.before) : null;
                            e.$t = It(e.path, e.collectionGroup, n, e.filters, e.limit, u, a)
                        }
                    return e.$t
                }

                function Jt(t, e, n) {
                    return new qt(t.path, t.collectionGroup, t.xt.slice(), t.filters.slice(), e, n, t.startAt, t.endAt)
                }

                function Zt(t, e) {
                    return Ot(Wt(t), Wt(e)) && t.limitType === e.limitType
                }

                function $t(t) {
                    return Et(Wt(t)) + "|lt:" + t.limitType
                }

                function te(t) {
                    return "Query(target=" + function(t) {
                        var e = t.path.rt();
                        return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), t.filters.length > 0 && (e += ", filters: [" + t.filters.map((function(t) {
                            return (e = t).field.rt() + " " + e.op + " " + st(e.value);
                            var e
                        })).join(", ") + "]"), Z(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += ", orderBy: [" + t.orderBy.map((function(t) {
                            return function(t) {
                                return t.field.rt() + " (" + t.dir + ")"
                            }(t)
                        })).join(", ") + "]"), t.startAt && (e += ", startAt: " + Lt(t.startAt)), t.endAt && (e += ", endAt: " + Lt(t.endAt)), "Target(" + e + ")"
                    }(Wt(t)) + "; limitType=" + t.limitType + ")"
                }

                function ee(t, e) {
                    return function(t, e) {
                        var n = e.key.path;
                        return null !== t.collectionGroup ? e.key.dt(t.collectionGroup) && t.path.nt(n) : F.wt(t.path) ? t.path.isEqual(n) : t.path.st(n)
                    }(t, e) && function(t, e) {
                        for (var n = 0, r = t.xt; n < r.length; n++) {
                            var i = r[n];
                            if (!i.field.ut() && null === e.field(i.field)) return !1
                        }
                        return !0
                    }(t, e) && function(t, e) {
                        for (var n = 0, r = t.filters; n < r.length; n++)
                            if (!r[n].matches(e)) return !1;
                        return !0
                    }(t, e) && function(t, e) {
                        return !(t.startAt && !Ut(t.startAt, Xt(t), e) || t.endAt && Ut(t.endAt, Xt(t), e))
                    }(t, e)
                }

                function ne(t) {
                    return function(e, n) {
                        for (var r = !1, i = 0, o = Xt(t); i < o.length; i++) {
                            var s = o[i],
                                u = re(s, e, n);
                            if (0 !== u) return u;
                            r = r || s.field.ut()
                        }
                        return 0
                    }
                }

                function re(t, e, n) {
                    var r = t.field.ut() ? F.H(e.key, n.key) : function(t, e, n) {
                        var r = e.field(t),
                            i = n.field(t);
                        return null !== r && null !== i ? it(r, i) : v()
                    }(t.field, e, n);
                    switch (t.dir) {
                        case "asc":
                            return r;
                        case "desc":
                            return -1 * r;
                        default:
                            return v()
                    }
                }
                var ie = function() {
                    function t(t, e, n, r, i, o, s) {
                        void 0 === i && (i = R.min()), void 0 === o && (o = R.min()), void 0 === s && (s = E.T), this.target = t, this.targetId = e, this.Ft = n, this.sequenceNumber = r, this.Ot = i, this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s
                    }
                    return t.prototype.kt = function(e) {
                        return new t(this.target, this.targetId, this.Ft, e, this.Ot, this.lastLimboFreeSnapshotVersion, this.resumeToken)
                    }, t.prototype.Mt = function(e, n) {
                        return new t(this.target, this.targetId, this.Ft, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e)
                    }, t.prototype.Lt = function(e) {
                        return new t(this.target, this.targetId, this.Ft, this.sequenceNumber, this.Ot, e, this.resumeToken)
                    }, t
                }();

                function oe(t, e) {
                    if (t.Bt) {
                        if (isNaN(e)) return {
                            doubleValue: "NaN"
                        };
                        if (e === 1 / 0) return {
                            doubleValue: "Infinity"
                        };
                        if (e === -1 / 0) return {
                            doubleValue: "-Infinity"
                        }
                    }
                    return {
                        doubleValue: $(e) ? "-0" : e
                    }
                }

                function se(t) {
                    return {
                        integerValue: "" + t
                    }
                }

                function ue(t, e) {
                    return tt(e) ? se(e) : oe(t, e)
                }
                var ae = function() {
                    this.qt = void 0
                };

                function ce(t, e, n) {
                    return t instanceof le ? function(t, e) {
                        var n = {
                            fields: {
                                __type__: {
                                    stringValue: "server_timestamp"
                                },
                                __local_write_time__: {
                                    timestampValue: {
                                        seconds: t.seconds,
                                        nanos: t.nanoseconds
                                    }
                                }
                            }
                        };
                        return e && (n.fields.__previous_value__ = e), {
                            mapValue: n
                        }
                    }(n, e) : t instanceof pe ? de(t, e) : t instanceof ve ? ye(t, e) : function(t, e) {
                        var n = fe(t, e),
                            r = be(n) + be(t.Ut);
                        return ct(n) && ct(t.Ut) ? se(r) : oe(t.Qt, r)
                    }(t, e)
                }

                function he(t, e, n) {
                    return t instanceof pe ? de(t, e) : t instanceof ve ? ye(t, e) : n
                }

                function fe(t, e) {
                    return t instanceof ge ? ct(n = e) || function(t) {
                        return !!t && "doubleValue" in t
                    }(n) ? e : {
                        integerValue: 0
                    } : null;
                    var n
                }
                var le = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return Object(s.c)(e, t), e
                    }(ae),
                    pe = function(t) {
                        function e(e) {
                            var n = this;
                            return (n = t.call(this) || this).elements = e, n
                        }
                        return Object(s.c)(e, t), e
                    }(ae);

                function de(t, e) {
                    for (var n = me(e), r = function(t) {
                            n.some((function(e) {
                                return nt(e, t)
                            })) || n.push(t)
                        }, i = 0, o = t.elements; i < o.length; i++) r(o[i]);
                    return {
                        arrayValue: {
                            values: n
                        }
                    }
                }
                var ve = function(t) {
                    function e(e) {
                        var n = this;
                        return (n = t.call(this) || this).elements = e, n
                    }
                    return Object(s.c)(e, t), e
                }(ae);

                function ye(t, e) {
                    for (var n = me(e), r = function(t) {
                            n = n.filter((function(e) {
                                return !nt(e, t)
                            }))
                        }, i = 0, o = t.elements; i < o.length; i++) r(o[i]);
                    return {
                        arrayValue: {
                            values: n
                        }
                    }
                }
                var ge = function(t) {
                    function e(e, n) {
                        var r = this;
                        return (r = t.call(this) || this).Qt = e, r.Ut = n, r
                    }
                    return Object(s.c)(e, t), e
                }(ae);

                function be(t) {
                    return Y(t.integerValue || t.doubleValue)
                }

                function me(t) {
                    return ht(t) && t.arrayValue.values ? t.arrayValue.values.slice() : []
                }
                var we = function(t, e) {
                        this.field = t, this.transform = e
                    },
                    _e = function(t, e) {
                        this.version = t, this.transformResults = e
                    },
                    Ie = function() {
                        function t(t, e) {
                            this.updateTime = t, this.exists = e
                        }
                        return t.Kt = function() {
                            return new t
                        }, t.exists = function(e) {
                            return new t(void 0, e)
                        }, t.updateTime = function(e) {
                            return new t(e)
                        }, Object.defineProperty(t.prototype, "Wt", {
                            get: function() {
                                return void 0 === this.updateTime && void 0 === this.exists
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.isEqual = function(t) {
                            return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime)
                        }, t
                    }();

                function Ee(t, e) {
                    return void 0 !== t.updateTime ? e instanceof bt && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e instanceof bt
                }
                var Oe = function() {};

                function Te(t, e, n) {
                    return t instanceof xe ? function(t, e, n) {
                        var r = t.value;
                        if (n.transformResults) {
                            var i = Pe(t.fieldTransforms, e, n.transformResults);
                            r = Re(t.fieldTransforms, r, i)
                        }
                        return new bt(t.key, n.version, r, {
                            hasCommittedMutations: !0
                        })
                    }(t, e, n) : t instanceof De ? function(t, e, n) {
                        if (!Ee(t.jt, e)) return new wt(t.key, n.version);
                        var r = ke(t, e, n.transformResults ? Pe(t.fieldTransforms, e, n.transformResults) : []);
                        return new bt(t.key, n.version, r, {
                            hasCommittedMutations: !0
                        })
                    }(t, e, n) : function(t, e, n) {
                        return new mt(t.key, n.version, {
                            hasCommittedMutations: !0
                        })
                    }(t, 0, n)
                }

                function je(t, e, n) {
                    return t instanceof xe ? function(t, e, n) {
                        if (!Ee(t.jt, e)) return e;
                        var r = t.value,
                            i = Ce(t.fieldTransforms, n, e);
                        r = Re(t.fieldTransforms, r, i);
                        var o = Se(e);
                        return new bt(t.key, o, r, {
                            Vt: !0
                        })
                    }(t, e, n) : t instanceof De ? function(t, e, n) {
                        if (!Ee(t.jt, e)) return e;
                        var r = Se(e),
                            i = ke(t, e, Ce(t.fieldTransforms, n, e));
                        return new bt(t.key, r, i, {
                            Vt: !0
                        })
                    }(t, e, n) : function(t, e) {
                        return Ee(t.jt, e) ? new mt(t.key, R.min()) : e
                    }(t, e)
                }

                function Ne(t, e) {
                    return function(t, e) {
                        for (var n = null, r = 0, i = t; r < i.length; r++) {
                            var o = i[r],
                                s = e instanceof bt ? e.field(o.field) : void 0,
                                u = fe(o.transform, s || null);
                            null != u && (n = null == n ? (new vt).set(o.field, u) : n.set(o.field, u))
                        }
                        return n ? n.Pt() : null
                    }(t.fieldTransforms, e)
                }

                function Ae(t, e) {
                    return t.type === e.type && !!t.key.isEqual(e.key) && !!t.jt.isEqual(e.jt) && !! function(t, e) {
                        return void 0 === t && void 0 === e || !(!t || !e) && _(t, e, (function(t, e) {
                            return function(t, e) {
                                return t.field.isEqual(e.field) && function(t, e) {
                                    return t instanceof pe && e instanceof pe || t instanceof ve && e instanceof ve ? _(t.elements, e.elements, nt) : t instanceof ge && e instanceof ge ? nt(t.Ut, e.Ut) : t instanceof le && e instanceof le
                                }(t.transform, e.transform)
                            }(t, e)
                        }))
                    }(t.fieldTransforms, e.fieldTransforms) && (0 === t.type ? t.value.isEqual(e.value) : 1 !== t.type || t.data.isEqual(e.data) && t.Gt.isEqual(e.Gt))
                }

                function Se(t) {
                    return t instanceof bt ? t.version : R.min()
                }
                var xe = function(t) {
                        function e(e, n, r, i) {
                            void 0 === i && (i = []);
                            var o = this;
                            return (o = t.call(this) || this).key = e, o.value = n, o.jt = r, o.fieldTransforms = i, o.type = 0, o
                        }
                        return Object(s.c)(e, t), e
                    }(Oe),
                    De = function(t) {
                        function e(e, n, r, i, o) {
                            void 0 === o && (o = []);
                            var s = this;
                            return (s = t.call(this) || this).key = e, s.data = n, s.Gt = r, s.jt = i, s.fieldTransforms = o, s.type = 1, s
                        }
                        return Object(s.c)(e, t), e
                    }(Oe);

                function ke(t, e, n) {
                    var r;
                    return r = function(t, e) {
                        var n = new vt(e);
                        return t.Gt.fields.forEach((function(e) {
                            if (!e.et()) {
                                var r = t.data.field(e);
                                null !== r ? n.set(e, r) : n.delete(e)
                            }
                        })), n.Pt()
                    }(t, r = e instanceof bt ? e.data() : dt.empty()), Re(t.fieldTransforms, r, n)
                }

                function Pe(t, e, n) {
                    var r = [];
                    y(t.length === n.length);
                    for (var i = 0; i < n.length; i++) {
                        var o = t[i],
                            s = o.transform,
                            u = null;
                        e instanceof bt && (u = e.field(o.field)), r.push(he(s, u, n[i]))
                    }
                    return r
                }

                function Ce(t, e, n) {
                    for (var r = [], i = 0, o = t; i < o.length; i++) {
                        var s = o[i],
                            u = s.transform,
                            a = null;
                        n instanceof bt && (a = n.field(s.field)), r.push(ce(u, a, e))
                    }
                    return r
                }

                function Re(t, e, n) {
                    for (var r = new vt(e), i = 0; i < t.length; i++) {
                        var o = t[i];
                        r.set(o.field, n[i])
                    }
                    return r.Pt()
                }
                var Le, Ve, Me = function(t) {
                        function e(e, n) {
                            var r = this;
                            return (r = t.call(this) || this).key = e, r.jt = n, r.type = 2, r.fieldTransforms = [], r
                        }
                        return Object(s.c)(e, t), e
                    }(Oe),
                    Ue = function(t) {
                        function e(e, n) {
                            var r = this;
                            return (r = t.call(this) || this).key = e, r.jt = n, r.type = 3, r.fieldTransforms = [], r
                        }
                        return Object(s.c)(e, t), e
                    }(Oe),
                    Fe = function(t) {
                        this.count = t
                    };

                function qe(t) {
                    switch (t) {
                        case O.OK:
                            return v();
                        case O.CANCELLED:
                        case O.UNKNOWN:
                        case O.DEADLINE_EXCEEDED:
                        case O.RESOURCE_EXHAUSTED:
                        case O.INTERNAL:
                        case O.UNAVAILABLE:
                        case O.UNAUTHENTICATED:
                            return !1;
                        case O.INVALID_ARGUMENT:
                        case O.NOT_FOUND:
                        case O.ALREADY_EXISTS:
                        case O.PERMISSION_DENIED:
                        case O.FAILED_PRECONDITION:
                        case O.ABORTED:
                        case O.OUT_OF_RANGE:
                        case O.UNIMPLEMENTED:
                        case O.DATA_LOSS:
                            return !0;
                        default:
                            return v()
                    }
                }

                function ze(t) {
                    if (void 0 === t) return l("GRPC error has no .code"), O.UNKNOWN;
                    switch (t) {
                        case Le.OK:
                            return O.OK;
                        case Le.CANCELLED:
                            return O.CANCELLED;
                        case Le.UNKNOWN:
                            return O.UNKNOWN;
                        case Le.DEADLINE_EXCEEDED:
                            return O.DEADLINE_EXCEEDED;
                        case Le.RESOURCE_EXHAUSTED:
                            return O.RESOURCE_EXHAUSTED;
                        case Le.INTERNAL:
                            return O.INTERNAL;
                        case Le.UNAVAILABLE:
                            return O.UNAVAILABLE;
                        case Le.UNAUTHENTICATED:
                            return O.UNAUTHENTICATED;
                        case Le.INVALID_ARGUMENT:
                            return O.INVALID_ARGUMENT;
                        case Le.NOT_FOUND:
                            return O.NOT_FOUND;
                        case Le.ALREADY_EXISTS:
                            return O.ALREADY_EXISTS;
                        case Le.PERMISSION_DENIED:
                            return O.PERMISSION_DENIED;
                        case Le.FAILED_PRECONDITION:
                            return O.FAILED_PRECONDITION;
                        case Le.ABORTED:
                            return O.ABORTED;
                        case Le.OUT_OF_RANGE:
                            return O.OUT_OF_RANGE;
                        case Le.UNIMPLEMENTED:
                            return O.UNIMPLEMENTED;
                        case Le.DATA_LOSS:
                            return O.DATA_LOSS;
                        default:
                            return v()
                    }
                }(Ve = Le || (Le = {}))[Ve.OK = 0] = "OK", Ve[Ve.CANCELLED = 1] = "CANCELLED", Ve[Ve.UNKNOWN = 2] = "UNKNOWN", Ve[Ve.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", Ve[Ve.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Ve[Ve.NOT_FOUND = 5] = "NOT_FOUND", Ve[Ve.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Ve[Ve.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", Ve[Ve.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Ve[Ve.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", Ve[Ve.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Ve[Ve.ABORTED = 10] = "ABORTED", Ve[Ve.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Ve[Ve.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", Ve[Ve.INTERNAL = 13] = "INTERNAL", Ve[Ve.UNAVAILABLE = 14] = "UNAVAILABLE", Ve[Ve.DATA_LOSS = 15] = "DATA_LOSS";
                var Ge = function() {
                        function t(t, e) {
                            this.H = t, this.root = e || He.EMPTY
                        }
                        return t.prototype.zt = function(e, n) {
                            return new t(this.H, this.root.zt(e, n, this.H).copy(null, null, He.Ht, null, null))
                        }, t.prototype.remove = function(e) {
                            return new t(this.H, this.root.remove(e, this.H).copy(null, null, He.Ht, null, null))
                        }, t.prototype.get = function(t) {
                            for (var e = this.root; !e.et();) {
                                var n = this.H(t, e.key);
                                if (0 === n) return e.value;
                                n < 0 ? e = e.left : n > 0 && (e = e.right)
                            }
                            return null
                        }, t.prototype.indexOf = function(t) {
                            for (var e = 0, n = this.root; !n.et();) {
                                var r = this.H(t, n.key);
                                if (0 === r) return e + n.left.size;
                                r < 0 ? n = n.left : (e += n.left.size + 1, n = n.right)
                            }
                            return -1
                        }, t.prototype.et = function() {
                            return this.root.et()
                        }, Object.defineProperty(t.prototype, "size", {
                            get: function() {
                                return this.root.size
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.Jt = function() {
                            return this.root.Jt()
                        }, t.prototype.Yt = function() {
                            return this.root.Yt()
                        }, t.prototype.Xt = function(t) {
                            return this.root.Xt(t)
                        }, t.prototype.forEach = function(t) {
                            this.Xt((function(e, n) {
                                return t(e, n), !1
                            }))
                        }, t.prototype.toString = function() {
                            var t = [];
                            return this.Xt((function(e, n) {
                                return t.push(e + ":" + n), !1
                            })), "{" + t.join(", ") + "}"
                        }, t.prototype.Zt = function(t) {
                            return this.root.Zt(t)
                        }, t.prototype.te = function() {
                            return new Be(this.root, null, this.H, !1)
                        }, t.prototype.ee = function(t) {
                            return new Be(this.root, t, this.H, !1)
                        }, t.prototype.ne = function() {
                            return new Be(this.root, null, this.H, !0)
                        }, t.prototype.se = function(t) {
                            return new Be(this.root, t, this.H, !0)
                        }, t
                    }(),
                    Be = function() {
                        function t(t, e, n, r) {
                            this.ie = r, this.re = [];
                            for (var i = 1; !t.et();)
                                if (i = e ? n(t.key, e) : 1, r && (i *= -1), i < 0) t = this.ie ? t.left : t.right;
                                else {
                                    if (0 === i) {
                                        this.re.push(t);
                                        break
                                    }
                                    this.re.push(t), t = this.ie ? t.right : t.left
                                }
                        }
                        return t.prototype.oe = function() {
                            var t = this.re.pop(),
                                e = {
                                    key: t.key,
                                    value: t.value
                                };
                            if (this.ie)
                                for (t = t.left; !t.et();) this.re.push(t), t = t.right;
                            else
                                for (t = t.right; !t.et();) this.re.push(t), t = t.left;
                            return e
                        }, t.prototype.ce = function() {
                            return this.re.length > 0
                        }, t.prototype.ae = function() {
                            if (0 === this.re.length) return null;
                            var t = this.re[this.re.length - 1];
                            return {
                                key: t.key,
                                value: t.value
                            }
                        }, t
                    }(),
                    He = function() {
                        function t(e, n, r, i, o) {
                            this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size
                        }
                        return t.prototype.copy = function(e, n, r, i, o) {
                            return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right)
                        }, t.prototype.et = function() {
                            return !1
                        }, t.prototype.Xt = function(t) {
                            return this.left.Xt(t) || t(this.key, this.value) || this.right.Xt(t)
                        }, t.prototype.Zt = function(t) {
                            return this.right.Zt(t) || t(this.key, this.value) || this.left.Zt(t)
                        }, t.prototype.min = function() {
                            return this.left.et() ? this : this.left.min()
                        }, t.prototype.Jt = function() {
                            return this.min().key
                        }, t.prototype.Yt = function() {
                            return this.right.et() ? this.key : this.right.Yt()
                        }, t.prototype.zt = function(t, e, n) {
                            var r = this,
                                i = n(t, r.key);
                            return (r = i < 0 ? r.copy(null, null, null, r.left.zt(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.zt(t, e, n))).ue()
                        }, t.prototype.he = function() {
                            if (this.left.et()) return t.EMPTY;
                            var e = this;
                            return e.left.le() || e.left.left.le() || (e = e._e()), (e = e.copy(null, null, null, e.left.he(), null)).ue()
                        }, t.prototype.remove = function(e, n) {
                            var r, i = this;
                            if (n(e, i.key) < 0) i.left.et() || i.left.le() || i.left.left.le() || (i = i._e()), i = i.copy(null, null, null, i.left.remove(e, n), null);
                            else {
                                if (i.left.le() && (i = i.fe()), i.right.et() || i.right.le() || i.right.left.le() || (i = i.de()), 0 === n(e, i.key)) {
                                    if (i.right.et()) return t.EMPTY;
                                    r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.he())
                                }
                                i = i.copy(null, null, null, null, i.right.remove(e, n))
                            }
                            return i.ue()
                        }, t.prototype.le = function() {
                            return this.color
                        }, t.prototype.ue = function() {
                            var t = this;
                            return t.right.le() && !t.left.le() && (t = t.we()), t.left.le() && t.left.left.le() && (t = t.fe()), t.left.le() && t.right.le() && (t = t.Ee()), t
                        }, t.prototype._e = function() {
                            var t = this.Ee();
                            return t.right.left.le() && (t = (t = (t = t.copy(null, null, null, null, t.right.fe())).we()).Ee()), t
                        }, t.prototype.de = function() {
                            var t = this.Ee();
                            return t.left.left.le() && (t = (t = t.fe()).Ee()), t
                        }, t.prototype.we = function() {
                            var e = this.copy(null, null, t.RED, null, this.right.left);
                            return this.right.copy(null, null, this.color, e, null)
                        }, t.prototype.fe = function() {
                            var e = this.copy(null, null, t.RED, this.left.right, null);
                            return this.left.copy(null, null, this.color, null, e)
                        }, t.prototype.Ee = function() {
                            var t = this.left.copy(null, null, !this.left.color, null, null),
                                e = this.right.copy(null, null, !this.right.color, null, null);
                            return this.copy(null, null, !this.color, t, e)
                        }, t.prototype.Te = function() {
                            var t = this.Ie();
                            return Math.pow(2, t) <= this.size + 1
                        }, t.prototype.Ie = function() {
                            if (this.le() && this.left.le()) throw v();
                            if (this.right.le()) throw v();
                            var t = this.left.Ie();
                            if (t !== this.right.Ie()) throw v();
                            return t + (this.le() ? 0 : 1)
                        }, t
                    }();
                He.EMPTY = null, He.RED = !0, He.Ht = !1, He.EMPTY = new(function() {
                    function t() {
                        this.size = 0
                    }
                    return Object.defineProperty(t.prototype, "key", {
                        get: function() {
                            throw v()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "value", {
                        get: function() {
                            throw v()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "color", {
                        get: function() {
                            throw v()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "left", {
                        get: function() {
                            throw v()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "right", {
                        get: function() {
                            throw v()
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.copy = function(t, e, n, r, i) {
                        return this
                    }, t.prototype.zt = function(t, e, n) {
                        return new He(t, e)
                    }, t.prototype.remove = function(t, e) {
                        return this
                    }, t.prototype.et = function() {
                        return !0
                    }, t.prototype.Xt = function(t) {
                        return !1
                    }, t.prototype.Zt = function(t) {
                        return !1
                    }, t.prototype.Jt = function() {
                        return null
                    }, t.prototype.Yt = function() {
                        return null
                    }, t.prototype.le = function() {
                        return !1
                    }, t.prototype.Te = function() {
                        return !0
                    }, t.prototype.Ie = function() {
                        return 0
                    }, t
                }());
                var Qe = function() {
                        function t(t) {
                            this.H = t, this.data = new Ge(this.H)
                        }
                        return t.prototype.has = function(t) {
                            return null !== this.data.get(t)
                        }, t.prototype.first = function() {
                            return this.data.Jt()
                        }, t.prototype.last = function() {
                            return this.data.Yt()
                        }, Object.defineProperty(t.prototype, "size", {
                            get: function() {
                                return this.data.size
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.indexOf = function(t) {
                            return this.data.indexOf(t)
                        }, t.prototype.forEach = function(t) {
                            this.data.Xt((function(e, n) {
                                return t(e), !1
                            }))
                        }, t.prototype.me = function(t, e) {
                            for (var n = this.data.ee(t[0]); n.ce();) {
                                var r = n.oe();
                                if (this.H(r.key, t[1]) >= 0) return;
                                e(r.key)
                            }
                        }, t.prototype.Ae = function(t, e) {
                            var n;
                            for (n = void 0 !== e ? this.data.ee(e) : this.data.te(); n.ce();)
                                if (!t(n.oe().key)) return
                        }, t.prototype.Re = function(t) {
                            var e = this.data.ee(t);
                            return e.ce() ? e.oe().key : null
                        }, t.prototype.te = function() {
                            return new Ye(this.data.te())
                        }, t.prototype.ee = function(t) {
                            return new Ye(this.data.ee(t))
                        }, t.prototype.add = function(t) {
                            return this.copy(this.data.remove(t).zt(t, !0))
                        }, t.prototype.delete = function(t) {
                            return this.has(t) ? this.copy(this.data.remove(t)) : this
                        }, t.prototype.et = function() {
                            return this.data.et()
                        }, t.prototype.Pe = function(t) {
                            var e = this;
                            return e.size < t.size && (e = t, t = this), t.forEach((function(t) {
                                e = e.add(t)
                            })), e
                        }, t.prototype.isEqual = function(e) {
                            if (!(e instanceof t)) return !1;
                            if (this.size !== e.size) return !1;
                            for (var n = this.data.te(), r = e.data.te(); n.ce();) {
                                var i = n.oe().key,
                                    o = r.oe().key;
                                if (0 !== this.H(i, o)) return !1
                            }
                            return !0
                        }, t.prototype.it = function() {
                            var t = [];
                            return this.forEach((function(e) {
                                t.push(e)
                            })), t
                        }, t.prototype.toString = function() {
                            var t = [];
                            return this.forEach((function(e) {
                                return t.push(e)
                            })), "SortedSet(" + t.toString() + ")"
                        }, t.prototype.copy = function(e) {
                            var n = new t(this.H);
                            return n.data = e, n
                        }, t
                    }(),
                    Ye = function() {
                        function t(t) {
                            this.ye = t
                        }
                        return t.prototype.oe = function() {
                            return this.ye.oe().key
                        }, t.prototype.ce = function() {
                            return this.ye.ce()
                        }, t
                    }(),
                    Ke = new Ge(F.H);

                function Xe() {
                    return Ke
                }

                function We() {
                    return Xe()
                }
                var Je = new Ge(F.H);

                function Ze() {
                    return Je
                }
                var $e = new Ge(F.H);

                function tn() {
                    return $e
                }
                var en = new Qe(F.H);

                function nn() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    for (var n = en, r = 0, i = t; r < i.length; r++) {
                        var o = i[r];
                        n = n.add(o)
                    }
                    return n
                }
                var rn = new Qe(w);

                function on() {
                    return rn
                }
                var sn = function() {
                        function t(t) {
                            this.H = t ? function(e, n) {
                                return t(e, n) || F.H(e.key, n.key)
                            } : function(t, e) {
                                return F.H(t.key, e.key)
                            }, this.ge = Ze(), this.Ve = new Ge(this.H)
                        }
                        return t.pe = function(e) {
                            return new t(e.H)
                        }, t.prototype.has = function(t) {
                            return null != this.ge.get(t)
                        }, t.prototype.get = function(t) {
                            return this.ge.get(t)
                        }, t.prototype.first = function() {
                            return this.Ve.Jt()
                        }, t.prototype.last = function() {
                            return this.Ve.Yt()
                        }, t.prototype.et = function() {
                            return this.Ve.et()
                        }, t.prototype.indexOf = function(t) {
                            var e = this.ge.get(t);
                            return e ? this.Ve.indexOf(e) : -1
                        }, Object.defineProperty(t.prototype, "size", {
                            get: function() {
                                return this.Ve.size
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.forEach = function(t) {
                            this.Ve.Xt((function(e, n) {
                                return t(e), !1
                            }))
                        }, t.prototype.add = function(t) {
                            var e = this.delete(t.key);
                            return e.copy(e.ge.zt(t.key, t), e.Ve.zt(t, null))
                        }, t.prototype.delete = function(t) {
                            var e = this.get(t);
                            return e ? this.copy(this.ge.remove(t), this.Ve.remove(e)) : this
                        }, t.prototype.isEqual = function(e) {
                            if (!(e instanceof t)) return !1;
                            if (this.size !== e.size) return !1;
                            for (var n = this.Ve.te(), r = e.Ve.te(); n.ce();) {
                                var i = n.oe().key,
                                    o = r.oe().key;
                                if (!i.isEqual(o)) return !1
                            }
                            return !0
                        }, t.prototype.toString = function() {
                            var t = [];
                            return this.forEach((function(e) {
                                t.push(e.toString())
                            })), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)"
                        }, t.prototype.copy = function(e, n) {
                            var r = new t;
                            return r.H = this.H, r.ge = e, r.Ve = n, r
                        }, t
                    }(),
                    un = function() {
                        function t() {
                            this.be = new Ge(F.H)
                        }
                        return t.prototype.track = function(t) {
                            var e = t.doc.key,
                                n = this.be.get(e);
                            n ? 0 !== t.type && 3 === n.type ? this.be = this.be.zt(e, t) : 3 === t.type && 1 !== n.type ? this.be = this.be.zt(e, {
                                type: n.type,
                                doc: t.doc
                            }) : 2 === t.type && 2 === n.type ? this.be = this.be.zt(e, {
                                type: 2,
                                doc: t.doc
                            }) : 2 === t.type && 0 === n.type ? this.be = this.be.zt(e, {
                                type: 0,
                                doc: t.doc
                            }) : 1 === t.type && 0 === n.type ? this.be = this.be.remove(e) : 1 === t.type && 2 === n.type ? this.be = this.be.zt(e, {
                                type: 1,
                                doc: n.doc
                            }) : 0 === t.type && 1 === n.type ? this.be = this.be.zt(e, {
                                type: 2,
                                doc: t.doc
                            }) : v() : this.be = this.be.zt(e, t)
                        }, t.prototype.ve = function() {
                            var t = [];
                            return this.be.Xt((function(e, n) {
                                t.push(n)
                            })), t
                        }, t
                    }(),
                    an = function() {
                        function t(t, e, n, r, i, o, s, u) {
                            this.query = t, this.docs = e, this.Se = n, this.docChanges = r, this.De = i, this.fromCache = o, this.Ce = s, this.xe = u
                        }
                        return t.Ne = function(e, n, r, i) {
                            var o = [];
                            return n.forEach((function(t) {
                                o.push({
                                    type: 0,
                                    doc: t
                                })
                            })), new t(e, n, sn.pe(n), o, r, i, !0, !1)
                        }, Object.defineProperty(t.prototype, "hasPendingWrites", {
                            get: function() {
                                return !this.De.et()
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.isEqual = function(t) {
                            if (!(this.fromCache === t.fromCache && this.Ce === t.Ce && this.De.isEqual(t.De) && Zt(this.query, t.query) && this.docs.isEqual(t.docs) && this.Se.isEqual(t.Se))) return !1;
                            var e = this.docChanges,
                                n = t.docChanges;
                            if (e.length !== n.length) return !1;
                            for (var r = 0; r < e.length; r++)
                                if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
                            return !0
                        }, t
                    }(),
                    cn = function() {
                        function t(t, e, n, r, i) {
                            this.Ot = t, this.$e = e, this.Fe = n, this.Oe = r, this.ke = i
                        }
                        return t.Me = function(e, n) {
                            var r = new Map;
                            return r.set(e, hn.Le(e, n)), new t(R.min(), r, on(), Xe(), nn())
                        }, t
                    }(),
                    hn = function() {
                        function t(t, e, n, r, i) {
                            this.resumeToken = t, this.Be = e, this.qe = n, this.Ue = r, this.Qe = i
                        }
                        return t.Le = function(e, n) {
                            return new t(E.T, n, nn(), nn(), nn())
                        }, t
                    }(),
                    fn = function(t, e, n, r) {
                        this.Ke = t, this.removedTargetIds = e, this.key = n, this.We = r
                    },
                    ln = function(t, e) {
                        this.targetId = t, this.je = e
                    },
                    pn = function(t, e, n, r) {
                        void 0 === n && (n = E.T), void 0 === r && (r = null), this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = r
                    },
                    dn = function() {
                        function t() {
                            this.Ge = 0, this.ze = gn(), this.He = E.T, this.Je = !1, this.Ye = !0
                        }
                        return Object.defineProperty(t.prototype, "Be", {
                            get: function() {
                                return this.Je
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "resumeToken", {
                            get: function() {
                                return this.He
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "Xe", {
                            get: function() {
                                return 0 !== this.Ge
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "Ze", {
                            get: function() {
                                return this.Ye
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.tn = function(t) {
                            t.l() > 0 && (this.Ye = !0, this.He = t)
                        }, t.prototype.en = function() {
                            var t = nn(),
                                e = nn(),
                                n = nn();
                            return this.ze.forEach((function(r, i) {
                                switch (i) {
                                    case 0:
                                        t = t.add(r);
                                        break;
                                    case 2:
                                        e = e.add(r);
                                        break;
                                    case 1:
                                        n = n.add(r);
                                        break;
                                    default:
                                        v()
                                }
                            })), new hn(this.He, this.Je, t, e, n)
                        }, t.prototype.nn = function() {
                            this.Ye = !1, this.ze = gn()
                        }, t.prototype.sn = function(t, e) {
                            this.Ye = !0, this.ze = this.ze.zt(t, e)
                        }, t.prototype.rn = function(t) {
                            this.Ye = !0, this.ze = this.ze.remove(t)
                        }, t.prototype.on = function() {
                            this.Ge += 1
                        }, t.prototype.cn = function() {
                            this.Ge -= 1
                        }, t.prototype.an = function() {
                            this.Ye = !0, this.Je = !0
                        }, t
                    }(),
                    vn = function() {
                        function t(t) {
                            this.un = t, this.hn = new Map, this.ln = Xe(), this._n = yn(), this.fn = new Qe(w)
                        }
                        return t.prototype.dn = function(t) {
                            for (var e = 0, n = t.Ke; e < n.length; e++) {
                                var r = n[e];
                                t.We instanceof bt ? this.wn(r, t.We) : t.We instanceof mt && this.En(r, t.key, t.We)
                            }
                            for (var i = 0, o = t.removedTargetIds; i < o.length; i++) r = o[i], this.En(r, t.key, t.We)
                        }, t.prototype.Tn = function(t) {
                            var e = this;
                            this.In(t, (function(n) {
                                var r = e.mn(n);
                                switch (t.state) {
                                    case 0:
                                        e.An(n) && r.tn(t.resumeToken);
                                        break;
                                    case 1:
                                        r.cn(), r.Xe || r.nn(), r.tn(t.resumeToken);
                                        break;
                                    case 2:
                                        r.cn(), r.Xe || e.removeTarget(n);
                                        break;
                                    case 3:
                                        e.An(n) && (r.an(), r.tn(t.resumeToken));
                                        break;
                                    case 4:
                                        e.An(n) && (e.Rn(n), r.tn(t.resumeToken));
                                        break;
                                    default:
                                        v()
                                }
                            }))
                        }, t.prototype.In = function(t, e) {
                            var n = this;
                            t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.hn.forEach((function(t, r) {
                                n.An(r) && e(r)
                            }))
                        }, t.prototype.Pn = function(t) {
                            var e = t.targetId,
                                n = t.je.count,
                                r = this.yn(e);
                            if (r) {
                                var i = r.target;
                                if (Tt(i))
                                    if (0 === n) {
                                        var o = new F(i.path);
                                        this.En(e, o, new mt(o, R.min()))
                                    } else y(1 === n);
                                else this.gn(e) !== n && (this.Rn(e), this.fn = this.fn.add(e))
                            }
                        }, t.prototype.Vn = function(t) {
                            var e = this,
                                n = new Map;
                            this.hn.forEach((function(r, i) {
                                var o = e.yn(i);
                                if (o) {
                                    if (r.Be && Tt(o.target)) {
                                        var s = new F(o.target.path);
                                        null !== e.ln.get(s) || e.pn(i, s) || e.En(i, s, new mt(s, t))
                                    }
                                    r.Ze && (n.set(i, r.en()), r.nn())
                                }
                            }));
                            var r = nn();
                            this._n.forEach((function(t, n) {
                                var i = !0;
                                n.Ae((function(t) {
                                    var n = e.yn(t);
                                    return !n || 2 === n.Ft || (i = !1, !1)
                                })), i && (r = r.add(t))
                            }));
                            var i = new cn(t, n, this.fn, this.ln, r);
                            return this.ln = Xe(), this._n = yn(), this.fn = new Qe(w), i
                        }, t.prototype.wn = function(t, e) {
                            if (this.An(t)) {
                                var n = this.pn(t, e.key) ? 2 : 0;
                                this.mn(t).sn(e.key, n), this.ln = this.ln.zt(e.key, e), this._n = this._n.zt(e.key, this.bn(e.key).add(t))
                            }
                        }, t.prototype.En = function(t, e, n) {
                            if (this.An(t)) {
                                var r = this.mn(t);
                                this.pn(t, e) ? r.sn(e, 1) : r.rn(e), this._n = this._n.zt(e, this.bn(e).delete(t)), n && (this.ln = this.ln.zt(e, n))
                            }
                        }, t.prototype.removeTarget = function(t) {
                            this.hn.delete(t)
                        }, t.prototype.gn = function(t) {
                            var e = this.mn(t).en();
                            return this.un.vn(t).size + e.qe.size - e.Qe.size
                        }, t.prototype.on = function(t) {
                            this.mn(t).on()
                        }, t.prototype.mn = function(t) {
                            var e = this.hn.get(t);
                            return e || (e = new dn, this.hn.set(t, e)), e
                        }, t.prototype.bn = function(t) {
                            var e = this._n.get(t);
                            return e || (e = new Qe(w), this._n = this._n.zt(t, e)), e
                        }, t.prototype.An = function(t) {
                            var e = null !== this.yn(t);
                            return e || f("WatchChangeAggregator", "Detected inactive target", t), e
                        }, t.prototype.yn = function(t) {
                            var e = this.hn.get(t);
                            return e && e.Xe ? null : this.un.Sn(t)
                        }, t.prototype.Rn = function(t) {
                            var e = this;
                            this.hn.set(t, new dn), this.un.vn(t).forEach((function(n) {
                                e.En(t, n, null)
                            }))
                        }, t.prototype.pn = function(t, e) {
                            return this.un.vn(t).has(e)
                        }, t
                    }();

                function yn() {
                    return new Ge(F.H)
                }

                function gn() {
                    return new Ge(F.H)
                }
                var bn = {
                        asc: "ASCENDING",
                        desc: "DESCENDING"
                    },
                    mn = {
                        "<": "LESS_THAN",
                        "<=": "LESS_THAN_OR_EQUAL",
                        ">": "GREATER_THAN",
                        ">=": "GREATER_THAN_OR_EQUAL",
                        "==": "EQUAL",
                        "!=": "NOT_EQUAL",
                        "array-contains": "ARRAY_CONTAINS",
                        in: "IN",
                        "not-in": "NOT_IN",
                        "array-contains-any": "ARRAY_CONTAINS_ANY"
                    },
                    wn = function(t, e) {
                        this.t = t, this.Bt = e
                    };

                function _n(t, e) {
                    return t.Bt ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
                        seconds: "" + e.seconds,
                        nanos: e.nanoseconds
                    }
                }

                function In(t, e) {
                    return t.Bt ? e.toBase64() : e.toUint8Array()
                }

                function En(t, e) {
                    return _n(t, e.j())
                }

                function On(t) {
                    return y(!!t), R.K(function(t) {
                        var e = Q(t);
                        return new C(e.seconds, e.nanos)
                    }(t))
                }

                function Tn(t, e) {
                    return function(t) {
                        return new V(["projects", t.projectId, "databases", t.database])
                    }(t).child("documents").child(e).rt()
                }

                function jn(t) {
                    var e = V.ot(t);
                    return y(Wn(e)), e
                }

                function Nn(t, e) {
                    return Tn(t.t, e.path)
                }

                function An(t, e) {
                    var n = jn(e);
                    if (n.get(1) !== t.t.projectId) throw new T(O.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t.t.projectId);
                    if (n.get(3) !== t.t.database) throw new T(O.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t.t.database);
                    return new F(kn(n))
                }

                function Sn(t, e) {
                    return Tn(t.t, e)
                }

                function xn(t) {
                    var e = jn(t);
                    return 4 === e.length ? V.ct() : kn(e)
                }

                function Dn(t) {
                    return new V(["projects", t.t.projectId, "databases", t.t.database]).rt()
                }

                function kn(t) {
                    return y(t.length > 4 && "documents" === t.get(4)), t.Y(5)
                }

                function Pn(t, e, n) {
                    return {
                        name: Nn(t, e),
                        fields: n.proto.mapValue.fields
                    }
                }

                function Cn(t, e, n) {
                    var r = An(t, e.name),
                        i = On(e.updateTime),
                        o = new dt({
                            mapValue: {
                                fields: e.fields
                            }
                        });
                    return new bt(r, i, o, {
                        hasCommittedMutations: !!n
                    })
                }

                function Rn(t, e) {
                    var n;
                    if (e instanceof xe) n = {
                        update: Pn(t, e.key, e.value)
                    };
                    else if (e instanceof Me) n = {
                        delete: Nn(t, e.key)
                    };
                    else if (e instanceof De) n = {
                        update: Pn(t, e.key, e.data),
                        updateMask: Xn(e.Gt)
                    };
                    else {
                        if (!(e instanceof Ue)) return v();
                        n = {
                            verify: Nn(t, e.key)
                        }
                    }
                    return e.fieldTransforms.length > 0 && (n.updateTransforms = e.fieldTransforms.map((function(t) {
                        return function(t, e) {
                            var n = e.transform;
                            if (n instanceof le) return {
                                fieldPath: e.field.rt(),
                                setToServerValue: "REQUEST_TIME"
                            };
                            if (n instanceof pe) return {
                                fieldPath: e.field.rt(),
                                appendMissingElements: {
                                    values: n.elements
                                }
                            };
                            if (n instanceof ve) return {
                                fieldPath: e.field.rt(),
                                removeAllFromArray: {
                                    values: n.elements
                                }
                            };
                            if (n instanceof ge) return {
                                fieldPath: e.field.rt(),
                                increment: n.Ut
                            };
                            throw v()
                        }(0, t)
                    }))), e.jt.Wt || (n.currentDocument = function(t, e) {
                        return void 0 !== e.updateTime ? {
                            updateTime: En(t, e.updateTime)
                        } : void 0 !== e.exists ? {
                            exists: e.exists
                        } : v()
                    }(t, e.jt)), n
                }

                function Ln(t, e) {
                    var n = e.currentDocument ? function(t) {
                            return void 0 !== t.updateTime ? Ie.updateTime(On(t.updateTime)) : void 0 !== t.exists ? Ie.exists(t.exists) : Ie.Kt()
                        }(e.currentDocument) : Ie.Kt(),
                        r = e.updateTransforms ? e.updateTransforms.map((function(e) {
                            return function(t, e) {
                                var n = null;
                                if ("setToServerValue" in e) y("REQUEST_TIME" === e.setToServerValue), n = new le;
                                else if ("appendMissingElements" in e) {
                                    var r = e.appendMissingElements.values || [];
                                    n = new pe(r)
                                } else if ("removeAllFromArray" in e) {
                                    var i = e.removeAllFromArray.values || [];
                                    n = new ve(i)
                                } else "increment" in e ? n = new ge(t, e.increment) : v();
                                var o = U.lt(e.fieldPath);
                                return new we(o, n)
                            }(t, e)
                        })) : [];
                    if (e.update) {
                        e.update.name;
                        var i = An(t, e.update.name),
                            o = new dt({
                                mapValue: {
                                    fields: e.update.fields
                                }
                            });
                        if (e.updateMask) {
                            var s = function(t) {
                                var e = t.fieldPaths || [];
                                return new B(e.map((function(t) {
                                    return U.lt(t)
                                })))
                            }(e.updateMask);
                            return new De(i, o, s, n, r)
                        }
                        return new xe(i, o, n, r)
                    }
                    if (e.delete) {
                        var u = An(t, e.delete);
                        return new Me(u, n)
                    }
                    if (e.verify) {
                        var a = An(t, e.verify);
                        return new Ue(a, n)
                    }
                    return v()
                }

                function Vn(t, e) {
                    return {
                        documents: [Sn(t, e.path)]
                    }
                }

                function Mn(t, e) {
                    var n = {
                            structuredQuery: {}
                        },
                        r = e.path;
                    null !== e.collectionGroup ? (n.parent = Sn(t, r), n.structuredQuery.from = [{
                        collectionId: e.collectionGroup,
                        allDescendants: !0
                    }]) : (n.parent = Sn(t, r.X()), n.structuredQuery.from = [{
                        collectionId: r.tt()
                    }]);
                    var i = function(t) {
                        if (0 !== t.length) {
                            var e = t.map((function(t) {
                                return function(t) {
                                    if ("==" === t.op) {
                                        if (lt(t.value)) return {
                                            unaryFilter: {
                                                field: Hn(t.field),
                                                op: "IS_NAN"
                                            }
                                        };
                                        if (ft(t.value)) return {
                                            unaryFilter: {
                                                field: Hn(t.field),
                                                op: "IS_NULL"
                                            }
                                        }
                                    } else if ("!=" === t.op) {
                                        if (lt(t.value)) return {
                                            unaryFilter: {
                                                field: Hn(t.field),
                                                op: "IS_NOT_NAN"
                                            }
                                        };
                                        if (ft(t.value)) return {
                                            unaryFilter: {
                                                field: Hn(t.field),
                                                op: "IS_NOT_NULL"
                                            }
                                        }
                                    }
                                    return {
                                        fieldFilter: {
                                            field: Hn(t.field),
                                            op: Bn(t.op),
                                            value: t.value
                                        }
                                    }
                                }(t)
                            }));
                            return 1 === e.length ? e[0] : {
                                compositeFilter: {
                                    op: "AND",
                                    filters: e
                                }
                            }
                        }
                    }(e.filters);
                    i && (n.structuredQuery.where = i);
                    var o = function(t) {
                        if (0 !== t.length) return t.map((function(t) {
                            return function(t) {
                                return {
                                    field: Hn(t.field),
                                    direction: Gn(t.dir)
                                }
                            }(t)
                        }))
                    }(e.orderBy);
                    o && (n.structuredQuery.orderBy = o);
                    var s = function(t, e) {
                        return t.Bt || Z(e) ? e : {
                            value: e
                        }
                    }(t, e.limit);
                    return null !== s && (n.structuredQuery.limit = s), e.startAt && (n.structuredQuery.startAt = qn(e.startAt)), e.endAt && (n.structuredQuery.endAt = qn(e.endAt)), n
                }

                function Un(t) {
                    var e = xn(t.parent),
                        n = t.structuredQuery,
                        r = n.from ? n.from.length : 0,
                        i = null;
                    if (r > 0) {
                        y(1 === r);
                        var o = n.from[0];
                        o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId)
                    }
                    var s = [];
                    n.where && (s = Fn(n.where));
                    var u = [];
                    n.orderBy && (u = n.orderBy.map((function(t) {
                        return function(t) {
                            return new Vt(Qn(t.field), function(t) {
                                switch (t) {
                                    case "ASCENDING":
                                        return "asc";
                                    case "DESCENDING":
                                        return "desc";
                                    default:
                                        return
                                }
                            }(t.direction))
                        }(t)
                    })));
                    var a = null;
                    n.limit && (a = function(t) {
                        var e;
                        return Z(e = "object" == typeof t ? t.value : t) ? null : e
                    }(n.limit));
                    var c = null;
                    n.startAt && (c = zn(n.startAt));
                    var h = null;
                    return n.endAt && (h = zn(n.endAt)), zt(e, i, u, s, a, "F", c, h)
                }

                function Fn(t) {
                    return t ? void 0 !== t.unaryFilter ? [Kn(t)] : void 0 !== t.fieldFilter ? [Yn(t)] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map((function(t) {
                        return Fn(t)
                    })).reduce((function(t, e) {
                        return t.concat(e)
                    })) : v() : []
                }

                function qn(t) {
                    return {
                        before: t.before,
                        values: t.position
                    }
                }

                function zn(t) {
                    var e = !!t.before,
                        n = t.values || [];
                    return new Rt(n, e)
                }

                function Gn(t) {
                    return bn[t]
                }

                function Bn(t) {
                    return mn[t]
                }

                function Hn(t) {
                    return {
                        fieldPath: t.rt()
                    }
                }

                function Qn(t) {
                    return U.lt(t.fieldPath)
                }

                function Yn(t) {
                    return jt.create(Qn(t.fieldFilter.field), function(t) {
                        switch (t) {
                            case "EQUAL":
                                return "==";
                            case "NOT_EQUAL":
                                return "!=";
                            case "GREATER_THAN":
                                return ">";
                            case "GREATER_THAN_OR_EQUAL":
                                return ">=";
                            case "LESS_THAN":
                                return "<";
                            case "LESS_THAN_OR_EQUAL":
                                return "<=";
                            case "ARRAY_CONTAINS":
                                return "array-contains";
                            case "IN":
                                return "in";
                            case "NOT_IN":
                                return "not-in";
                            case "ARRAY_CONTAINS_ANY":
                                return "array-contains-any";
                            case "OPERATOR_UNSPECIFIED":
                            default:
                                return v()
                        }
                    }(t.fieldFilter.op), t.fieldFilter.value)
                }

                function Kn(t) {
                    switch (t.unaryFilter.op) {
                        case "IS_NAN":
                            var e = Qn(t.unaryFilter.field);
                            return jt.create(e, "==", {
                                doubleValue: NaN
                            });
                        case "IS_NULL":
                            var n = Qn(t.unaryFilter.field);
                            return jt.create(n, "==", {
                                nullValue: "NULL_VALUE"
                            });
                        case "IS_NOT_NAN":
                            var r = Qn(t.unaryFilter.field);
                            return jt.create(r, "!=", {
                                doubleValue: NaN
                            });
                        case "IS_NOT_NULL":
                            var i = Qn(t.unaryFilter.field);
                            return jt.create(i, "!=", {
                                nullValue: "NULL_VALUE"
                            });
                        case "OPERATOR_UNSPECIFIED":
                        default:
                            return v()
                    }
                }

                function Xn(t) {
                    var e = [];
                    return t.fields.forEach((function(t) {
                        return e.push(t.rt())
                    })), {
                        fieldPaths: e
                    }
                }

                function Wn(t) {
                    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2)
                }
                var Jn = function() {
                        var t = this;
                        this.promise = new Promise((function(e, n) {
                            t.resolve = e, t.reject = n
                        }))
                    },
                    Zn = function() {
                        function t(t) {
                            var e = this;
                            this.Dn = null, this.Cn = null, this.result = void 0, this.error = void 0, this.xn = !1, this.Nn = !1, t((function(t) {
                                e.xn = !0, e.result = t, e.Dn && e.Dn(t)
                            }), (function(t) {
                                e.xn = !0, e.error = t, e.Cn && e.Cn(t)
                            }))
                        }
                        return t.prototype.catch = function(t) {
                            return this.next(void 0, t)
                        }, t.prototype.next = function(e, n) {
                            var r = this;
                            return this.Nn && v(), this.Nn = !0, this.xn ? this.error ? this.$n(n, this.error) : this.Fn(e, this.result) : new t((function(t, i) {
                                r.Dn = function(n) {
                                    r.Fn(e, n).next(t, i)
                                }, r.Cn = function(e) {
                                    r.$n(n, e).next(t, i)
                                }
                            }))
                        }, t.prototype.On = function() {
                            var t = this;
                            return new Promise((function(e, n) {
                                t.next(e, n)
                            }))
                        }, t.prototype.kn = function(e) {
                            try {
                                var n = e();
                                return n instanceof t ? n : t.resolve(n)
                            } catch (e) {
                                return t.reject(e)
                            }
                        }, t.prototype.Fn = function(e, n) {
                            return e ? this.kn((function() {
                                return e(n)
                            })) : t.resolve(n)
                        }, t.prototype.$n = function(e, n) {
                            return e ? this.kn((function() {
                                return e(n)
                            })) : t.reject(n)
                        }, t.resolve = function(e) {
                            return new t((function(t, n) {
                                t(e)
                            }))
                        }, t.reject = function(e) {
                            return new t((function(t, n) {
                                n(e)
                            }))
                        }, t.Mn = function(e) {
                            return new t((function(t, n) {
                                var r = 0,
                                    i = 0,
                                    o = !1;
                                e.forEach((function(e) {
                                    ++r, e.next((function() {
                                        ++i, o && i === r && t()
                                    }), (function(t) {
                                        return n(t)
                                    }))
                                })), o = !0, i === r && t()
                            }))
                        }, t.Ln = function(e) {
                            for (var n = t.resolve(!1), r = function(e) {
                                    n = n.next((function(n) {
                                        return n ? t.resolve(n) : e()
                                    }))
                                }, i = 0, o = e; i < o.length; i++) r(o[i]);
                            return n
                        }, t.forEach = function(t, e) {
                            var n = this,
                                r = [];
                            return t.forEach((function(t, i) {
                                r.push(e.call(n, t, i))
                            })), this.Mn(r)
                        }, t
                    }(),
                    $n = function() {
                        function t(t, e) {
                            var n = this;
                            this.action = t, this.transaction = e, this.aborted = !1, this.Bn = new Jn, this.transaction.oncomplete = function() {
                                n.Bn.resolve()
                            }, this.transaction.onabort = function() {
                                e.error ? n.Bn.reject(new nr(t, e.error)) : n.Bn.resolve()
                            }, this.transaction.onerror = function(e) {
                                var r = ur(e.target.error);
                                n.Bn.reject(new nr(t, r))
                            }
                        }
                        return t.open = function(e, n, r, i) {
                            try {
                                return new t(n, e.transaction(i, r))
                            } catch (e) {
                                throw new nr(n, e)
                            }
                        }, Object.defineProperty(t.prototype, "qn", {
                            get: function() {
                                return this.Bn.promise
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.abort = function(t) {
                            t && this.Bn.reject(t), this.aborted || (f("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort())
                        }, t.prototype.store = function(t) {
                            var e = this.transaction.objectStore(t);
                            return new ir(e)
                        }, t
                    }(),
                    tr = function() {
                        function e(t, n, r) {
                            this.name = t, this.version = n, this.Un = r, 12.2 === e.Qn(Object(i.i)()) && l("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")
                        }
                        return e.delete = function(t) {
                            return f("SimpleDb", "Removing database:", t), or(window.indexedDB.deleteDatabase(t)).On()
                        }, e.Kn = function() {
                            if ("undefined" == typeof indexedDB) return !1;
                            if (e.Wn()) return !0;
                            var t = Object(i.i)(),
                                n = e.Qn(t),
                                r = 0 < n && n < 10,
                                o = e.jn(t),
                                s = 0 < o && o < 4.5;
                            return !(t.indexOf("MSIE ") > 0 || t.indexOf("Trident/") > 0 || t.indexOf("Edge/") > 0 || r || s)
                        }, e.Wn = function() {
                            var e;
                            return void 0 !== t && "YES" === (null === (e = t.env) || void 0 === e ? void 0 : e.Gn)
                        }, e.zn = function(t, e) {
                            return t.store(e)
                        }, e.Qn = function(t) {
                            var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
                                n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
                            return Number(n)
                        }, e.jn = function(t) {
                            var e = t.match(/Android ([\d.]+)/i),
                                n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
                            return Number(n)
                        }, e.prototype.Hn = function(t) {
                            return Object(s.b)(this, void 0, void 0, (function() {
                                var e, n = this;
                                return Object(s.d)(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return this.db ? [3, 2] : (f("SimpleDb", "Opening database:", this.name), e = this, [4, new Promise((function(e, r) {
                                                var i = indexedDB.open(n.name, n.version);
                                                i.onsuccess = function(t) {
                                                    var n = t.target.result;
                                                    e(n)
                                                }, i.onblocked = function() {
                                                    r(new nr(t, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))
                                                }, i.onerror = function(e) {
                                                    var n = e.target.error;
                                                    "VersionError" === n.name ? r(new T(O.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : r(new nr(t, n))
                                                }, i.onupgradeneeded = function(t) {
                                                    f("SimpleDb", 'Database "' + n.name + '" requires upgrade from version:', t.oldVersion);
                                                    var e = t.target.result;
                                                    n.Un.Jn(e, i.transaction, t.oldVersion, n.version).next((function() {
                                                        f("SimpleDb", "Database upgrade to version " + n.version + " complete")
                                                    }))
                                                }
                                            }))]);
                                        case 1:
                                            e.db = r.sent(), r.label = 2;
                                        case 2:
                                            return [2, (this.Yn && (this.db.onversionchange = function(t) {
                                                return n.Yn(t)
                                            }), this.db)]
                                    }
                                }))
                            }))
                        }, e.prototype.Xn = function(t) {
                            this.Yn = t, this.db && (this.db.onversionchange = function(e) {
                                return t(e)
                            })
                        }, e.prototype.runTransaction = function(t, e, n, r) {
                            return Object(s.b)(this, void 0, void 0, (function() {
                                var i, o, u, a, c;
                                return Object(s.d)(this, (function(h) {
                                    switch (h.label) {
                                        case 0:
                                            i = "readonly" === e, o = 0, u = function() {
                                                var e, u, c, h, l;
                                                return Object(s.d)(this, (function(s) {
                                                    switch (s.label) {
                                                        case 0:
                                                            ++o, s.label = 1;
                                                        case 1:
                                                            return s.trys.push([1, 4, , 5]), [4, a.Hn(t)];
                                                        case 2:
                                                            return a.db = s.sent(), e = $n.open(a.db, t, i ? "readonly" : "readwrite", n), u = r(e).catch((function(t) {
                                                                return e.abort(t), Zn.reject(t)
                                                            })).On(), c = {}, u.catch((function() {})), [4, e.qn];
                                                        case 3:
                                                            return [2, (c.value = (s.sent(), u), c)];
                                                        case 4:
                                                            return h = s.sent(), l = "FirebaseError" !== h.name && o < 3, f("SimpleDb", "Transaction failed with error:", h.message, "Retrying:", l), a.close(), l ? [3, 5] : [2, {
                                                                value: Promise.reject(h)
                                                            }];
                                                        case 5:
                                                            return [2]
                                                    }
                                                }))
                                            }, a = this, h.label = 1;
                                        case 1:
                                            return [5, u()];
                                        case 2:
                                            if ("object" == typeof(c = h.sent())) return [2, c.value];
                                            h.label = 3;
                                        case 3:
                                            return [3, 1];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }))
                        }, e.prototype.close = function() {
                            this.db && this.db.close(), this.db = void 0
                        }, e
                    }(),
                    er = function() {
                        function t(t) {
                            this.Zn = t, this.ts = !1, this.es = null
                        }
                        return Object.defineProperty(t.prototype, "xn", {
                            get: function() {
                                return this.ts
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "ns", {
                            get: function() {
                                return this.es
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "cursor", {
                            set: function(t) {
                                this.Zn = t
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.done = function() {
                            this.ts = !0
                        }, t.prototype.ss = function(t) {
                            this.es = t
                        }, t.prototype.delete = function() {
                            return or(this.Zn.delete())
                        }, t
                    }(),
                    nr = function(t) {
                        function e(e, n) {
                            var r = this;
                            return (r = t.call(this, O.UNAVAILABLE, "IndexedDB transaction '" + e + "' failed: " + n) || this).name = "IndexedDbTransactionError", r
                        }
                        return Object(s.c)(e, t), e
                    }(T);

                function rr(t) {
                    return "IndexedDbTransactionError" === t.name
                }
                var ir = function() {
                    function t(t) {
                        this.store = t
                    }
                    return t.prototype.put = function(t, e) {
                        var n;
                        return void 0 !== e ? (f("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (f("SimpleDb", "PUT", this.store.name, "<auto-key>", t), n = this.store.put(t)), or(n)
                    }, t.prototype.add = function(t) {
                        return f("SimpleDb", "ADD", this.store.name, t, t), or(this.store.add(t))
                    }, t.prototype.get = function(t) {
                        var e = this;
                        return or(this.store.get(t)).next((function(n) {
                            return void 0 === n && (n = null), f("SimpleDb", "GET", e.store.name, t, n), n
                        }))
                    }, t.prototype.delete = function(t) {
                        return f("SimpleDb", "DELETE", this.store.name, t), or(this.store.delete(t))
                    }, t.prototype.count = function() {
                        return f("SimpleDb", "COUNT", this.store.name), or(this.store.count())
                    }, t.prototype.rs = function(t, e) {
                        var n = this.cursor(this.options(t, e)),
                            r = [];
                        return this.os(n, (function(t, e) {
                            r.push(e)
                        })).next((function() {
                            return r
                        }))
                    }, t.prototype.cs = function(t, e) {
                        f("SimpleDb", "DELETE ALL", this.store.name);
                        var n = this.options(t, e);
                        n.us = !1;
                        var r = this.cursor(n);
                        return this.os(r, (function(t, e, n) {
                            return n.delete()
                        }))
                    }, t.prototype.hs = function(t, e) {
                        var n;
                        e ? n = t : (n = {}, e = t);
                        var r = this.cursor(n);
                        return this.os(r, e)
                    }, t.prototype.ls = function(t) {
                        var e = this.cursor({});
                        return new Zn((function(n, r) {
                            e.onerror = function(t) {
                                var e = ur(t.target.error);
                                r(e)
                            }, e.onsuccess = function(e) {
                                var r = e.target.result;
                                r ? t(r.primaryKey, r.value).next((function(t) {
                                    t ? r.continue() : n()
                                })) : n()
                            }
                        }))
                    }, t.prototype.os = function(t, e) {
                        var n = [];
                        return new Zn((function(r, i) {
                            t.onerror = function(t) {
                                i(t.target.error)
                            }, t.onsuccess = function(t) {
                                var i = t.target.result;
                                if (i) {
                                    var o = new er(i),
                                        s = e(i.primaryKey, i.value, o);
                                    if (s instanceof Zn) {
                                        var u = s.catch((function(t) {
                                            return o.done(), Zn.reject(t)
                                        }));
                                        n.push(u)
                                    }
                                    o.xn ? r() : null === o.ns ? i.continue() : i.continue(o.ns)
                                } else r()
                            }
                        })).next((function() {
                            return Zn.Mn(n)
                        }))
                    }, t.prototype.options = function(t, e) {
                        var n;
                        return void 0 !== t && ("string" == typeof t ? n = t : e = t), {
                            index: n,
                            range: e
                        }
                    }, t.prototype.cursor = function(t) {
                        var e = "next";
                        if (t.reverse && (e = "prev"), t.index) {
                            var n = this.store.index(t.index);
                            return t.us ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e)
                        }
                        return this.store.openCursor(t.range, e)
                    }, t
                }();

                function or(t) {
                    return new Zn((function(e, n) {
                        t.onsuccess = function(t) {
                            var n = t.target.result;
                            e(n)
                        }, t.onerror = function(t) {
                            var e = ur(t.target.error);
                            n(e)
                        }
                    }))
                }
                var sr = !1;

                function ur(t) {
                    var e = tr.Qn(Object(i.i)());
                    if (e >= 12.2 && e < 13) {
                        var n = "An internal error was encountered in the Indexed Database server";
                        if (t.message.indexOf(n) >= 0) {
                            var r = new T("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
                            return sr || (sr = !0, setTimeout((function() {
                                throw r
                            }), 0)), r
                        }
                    }
                    return t
                }
                var ar = function() {
                    function t(t, e, n, r, i) {
                        this._s = t, this.fs = e, this.ds = n, this.op = r, this.ws = i, this.Es = new Jn, this.then = this.Es.promise.then.bind(this.Es.promise), this.Es.promise.catch((function(t) {}))
                    }
                    return t.Ts = function(e, n, r, i, o) {
                        var s = new t(e, n, Date.now() + r, i, o);
                        return s.start(r), s
                    }, t.prototype.start = function(t) {
                        var e = this;
                        this.Is = setTimeout((function() {
                            return e.As()
                        }), t)
                    }, t.prototype.Rs = function() {
                        return this.As()
                    }, t.prototype.cancel = function(t) {
                        null !== this.Is && (this.clearTimeout(), this.Es.reject(new T(O.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))))
                    }, t.prototype.As = function() {
                        var t = this;
                        this._s.Ps((function() {
                            return null !== t.Is ? (t.clearTimeout(), t.op().then((function(e) {
                                return t.Es.resolve(e)
                            }))) : Promise.resolve()
                        }))
                    }, t.prototype.clearTimeout = function() {
                        null !== this.Is && (this.ws(this), clearTimeout(this.Is), this.Is = null)
                    }, t
                }();

                function cr(t, e) {
                    if (l("AsyncQueue", e + ": " + t), rr(t)) return new T(O.UNAVAILABLE, e + ": " + t);
                    throw t
                }
                var hr = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
                    fr = function() {
                        function t() {
                            this.ys = []
                        }
                        return t.prototype.gs = function(t) {
                            this.ys.push(t)
                        }, t.prototype.Vs = function() {
                            this.ys.forEach((function(t) {
                                return t()
                            }))
                        }, t
                    }();

                function lr(t) {
                    for (var e = "", n = 0; n < t.length; n++) e.length > 0 && (e = dr(e)), e = pr(t.get(n), e);
                    return dr(e)
                }

                function pr(t, e) {
                    for (var n = e, r = t.length, i = 0; i < r; i++) {
                        var o = t.charAt(i);
                        switch (o) {
                            case "\0":
                                n += "";
                                break;
                            case "":
                                n += "";
                                break;
                            default:
                                n += o
                        }
                    }
                    return n
                }

                function dr(t) {
                    return t + ""
                }

                function vr(t) {
                    var e = t.length;
                    if (y(e >= 2), 2 === e) return y("" === t.charAt(0) && "" === t.charAt(1)), V.ct();
                    for (var n = e - 2, r = [], i = "", o = 0; o < e;) {
                        var s = t.indexOf("", o);
                        switch ((s < 0 || s > n) && v(), t.charAt(s + 1)) {
                            case "":
                                var u = t.substring(o, s),
                                    a = void 0;
                                0 === i.length ? a = u : (a = i += u, i = ""), r.push(a);
                                break;
                            case "":
                                i += t.substring(o, s), i += "\0";
                                break;
                            case "":
                                i += t.substring(o, s + 1);
                                break;
                            default:
                                v()
                        }
                        o = s + 2
                    }
                    return new V(r)
                }
                var yr = function(t, e) {
                        this.seconds = t, this.nanoseconds = e
                    },
                    gr = function(t, e, n) {
                        this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n
                    };
                gr.store = "owner", gr.key = "owner";
                var br = function(t, e, n) {
                    this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n
                };
                br.store = "mutationQueues", br.keyPath = "userId";
                var mr = function(t, e, n, r, i) {
                    this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, this.mutations = i
                };
                mr.store = "mutations", mr.keyPath = "batchId", mr.userMutationsIndex = "userMutationsIndex", mr.userMutationsKeyPath = ["userId", "batchId"];
                var wr = function() {
                    function t() {}
                    return t.prefixForUser = function(t) {
                        return [t]
                    }, t.prefixForPath = function(t, e) {
                        return [t, lr(e)]
                    }, t.key = function(t, e, n) {
                        return [t, lr(e), n]
                    }, t
                }();
                wr.store = "documentMutations", wr.PLACEHOLDER = new wr;
                var _r = function(t, e) {
                        this.path = t, this.readTime = e
                    },
                    Ir = function(t, e) {
                        this.path = t, this.version = e
                    },
                    Er = function(t, e, n, r, i, o) {
                        this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, this.readTime = i, this.parentPath = o
                    };
                Er.store = "remoteDocuments", Er.readTimeIndex = "readTimeIndex", Er.readTimeIndexPath = "readTime", Er.collectionReadTimeIndex = "collectionReadTimeIndex", Er.collectionReadTimeIndexPath = ["parentPath", "readTime"];
                var Or = function(t) {
                    this.byteSize = t
                };
                Or.store = "remoteDocumentGlobal", Or.key = "remoteDocumentGlobalKey";
                var Tr = function(t, e, n, r, i, o, s) {
                    this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = s
                };
                Tr.store = "targets", Tr.keyPath = "targetId", Tr.queryTargetsIndexName = "queryTargetsIndex", Tr.queryTargetsKeyPath = ["canonicalId", "targetId"];
                var jr = function(t, e, n) {
                    this.targetId = t, this.path = e, this.sequenceNumber = n
                };
                jr.store = "targetDocuments", jr.keyPath = ["targetId", "path"], jr.documentTargetsIndex = "documentTargetsIndex", jr.documentTargetsKeyPath = ["path", "targetId"];
                var Nr = function(t, e, n, r) {
                    this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, this.targetCount = r
                };
                Nr.key = "targetGlobalKey", Nr.store = "targetGlobal";
                var Ar = function(t, e) {
                    this.collectionId = t, this.parent = e
                };
                Ar.store = "collectionParents", Ar.keyPath = ["collectionId", "parent"];
                var Sr = function(t, e, n, r) {
                    this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r
                };
                Sr.store = "clientMetadata", Sr.keyPath = "clientId";
                var xr = function(t, e, n) {
                    this.bundleId = t, this.createTime = e, this.version = n
                };
                xr.store = "bundles", xr.keyPath = "bundleId";
                var Dr = function(t, e, n) {
                    this.name = t, this.readTime = e, this.bundledQuery = n
                };
                Dr.store = "namedQueries", Dr.keyPath = "name";
                var kr = Object(s.g)(Object(s.g)(Object(s.g)(Object(s.g)([br.store, mr.store, wr.store, Er.store, Tr.store, gr.store, Nr.store, jr.store], [Sr.store]), [Or.store]), [Ar.store]), [xr.store, Dr.store]),
                    Pr = function(t) {
                        function e(e, n) {
                            var r = this;
                            return (r = t.call(this) || this).ps = e, r.bs = n, r
                        }
                        return Object(s.c)(e, t), e
                    }(fr);

                function Cr(t, e) {
                    var n = g(t);
                    return tr.zn(n.ps, e)
                }
                var Rr = function() {
                        function t(t, e, n, r) {
                            this.batchId = t, this.vs = e, this.baseMutations = n, this.mutations = r
                        }
                        return t.prototype.Ss = function(t, e, n) {
                            for (var r = n.Ds, i = 0; i < this.mutations.length; i++) {
                                var o = this.mutations[i];
                                o.key.isEqual(t) && (e = Te(o, e, r[i]))
                            }
                            return e
                        }, t.prototype.Cs = function(t, e) {
                            for (var n = 0, r = this.baseMutations; n < r.length; n++)(s = r[n]).key.isEqual(t) && (e = je(s, e, this.vs));
                            for (var i = 0, o = this.mutations; i < o.length; i++) {
                                var s;
                                (s = o[i]).key.isEqual(t) && (e = je(s, e, this.vs))
                            }
                            return e
                        }, t.prototype.xs = function(t) {
                            var e = this,
                                n = t;
                            return this.mutations.forEach((function(r) {
                                var i = e.Cs(r.key, t.get(r.key));
                                i && (n = n.zt(r.key, i))
                            })), n
                        }, t.prototype.keys = function() {
                            return this.mutations.reduce((function(t, e) {
                                return t.add(e.key)
                            }), nn())
                        }, t.prototype.isEqual = function(t) {
                            return this.batchId === t.batchId && _(this.mutations, t.mutations, (function(t, e) {
                                return Ae(t, e)
                            })) && _(this.baseMutations, t.baseMutations, (function(t, e) {
                                return Ae(t, e)
                            }))
                        }, t
                    }(),
                    Lr = function() {
                        function t(t, e, n, r) {
                            this.batch = t, this.Ns = e, this.Ds = n, this.$s = r
                        }
                        return t.from = function(e, n, r) {
                            y(e.mutations.length === r.length);
                            for (var i = tn(), o = e.mutations, s = 0; s < o.length; s++) i = i.zt(o[s].key, r[s].version);
                            return new t(e, n, r, i)
                        }, t
                    }(),
                    Vr = function(t) {
                        this.Fs = t
                    };

                function Mr(t, e) {
                    if (e.document) return Cn(t.Fs, e.document, !!e.hasCommittedMutations);
                    if (e.noDocument) {
                        var n = F.Et(e.noDocument.path),
                            r = Gr(e.noDocument.readTime);
                        return new mt(n, r, {
                            hasCommittedMutations: !!e.hasCommittedMutations
                        })
                    }
                    if (e.unknownDocument) {
                        var i = F.Et(e.unknownDocument.path);
                        return r = Gr(e.unknownDocument.version), new wt(i, r)
                    }
                    return v()
                }

                function Ur(t, e, n) {
                    var r = Fr(n),
                        i = e.key.path.X().it();
                    if (e instanceof bt) {
                        var o = function(t, e) {
                                return {
                                    name: Nn(t, e.key),
                                    fields: e.bt().mapValue.fields,
                                    updateTime: _n(t, e.version.j())
                                }
                            }(t.Fs, e),
                            s = e.hasCommittedMutations;
                        return new Er(null, null, o, s, r, i)
                    }
                    if (e instanceof mt) {
                        var u = e.key.path.it(),
                            a = zr(e.version);
                        return s = e.hasCommittedMutations, new Er(null, new _r(u, a), null, s, r, i)
                    }
                    if (e instanceof wt) {
                        var c = e.key.path.it(),
                            h = zr(e.version);
                        return new Er(new Ir(c, h), null, null, !0, r, i)
                    }
                    return v()
                }

                function Fr(t) {
                    var e = t.j();
                    return [e.seconds, e.nanoseconds]
                }

                function qr(t) {
                    var e = new C(t[0], t[1]);
                    return R.K(e)
                }

                function zr(t) {
                    var e = t.j();
                    return new yr(e.seconds, e.nanoseconds)
                }

                function Gr(t) {
                    var e = new C(t.seconds, t.nanoseconds);
                    return R.K(e)
                }

                function Br(t, e) {
                    for (var n = (e.baseMutations || []).map((function(e) {
                            return Ln(t.Fs, e)
                        })), r = 0; r < e.mutations.length - 1; ++r) {
                        var i = e.mutations[r];
                        if (r + 1 < e.mutations.length && void 0 !== e.mutations[r + 1].transform) {
                            var o = e.mutations[r + 1];
                            i.updateTransforms = o.transform.fieldTransforms, e.mutations.splice(r + 1, 1), ++r
                        }
                    }
                    var s = e.mutations.map((function(e) {
                            return Ln(t.Fs, e)
                        })),
                        u = C.fromMillis(e.localWriteTimeMs);
                    return new Rr(e.batchId, u, n, s)
                }

                function Hr(t) {
                    var e, n, r = Gr(t.readTime),
                        i = void 0 !== t.lastLimboFreeSnapshotVersion ? Gr(t.lastLimboFreeSnapshotVersion) : R.min();
                    return void 0 !== t.query.documents ? (y(1 === (n = t.query).documents.length), e = Wt(Gt(xn(n.documents[0])))) : e = function(t) {
                        return Wt(Un(t))
                    }(t.query), new ie(e, t.targetId, 0, t.lastListenSequenceNumber, r, i, E.fromBase64String(t.resumeToken))
                }

                function Qr(t, e) {
                    var n, r = zr(e.Ot),
                        i = zr(e.lastLimboFreeSnapshotVersion);
                    n = Tt(e.target) ? Vn(t.Fs, e.target) : Mn(t.Fs, e.target);
                    var o = e.resumeToken.toBase64();
                    return new Tr(e.targetId, Et(e.target), r, o, e.sequenceNumber, i, n)
                }

                function Yr(t) {
                    var e = Un({
                        parent: t.parent,
                        structuredQuery: t.structuredQuery
                    });
                    return "LAST" === t.limitType ? Jt(e, e.limit, "L") : e
                }
                var Kr = function() {
                    function t() {}
                    return t.prototype.Os = function(t, e) {
                        return Xr(t).get(e).next((function(t) {
                            if (t) return {
                                id: (e = t).bundleId,
                                createTime: Gr(e.createTime),
                                version: e.version
                            };
                            var e
                        }))
                    }, t.prototype.ks = function(t, e) {
                        return Xr(t).put({
                            bundleId: (n = e).id,
                            createTime: zr(On(n.createTime)),
                            version: n.version
                        });
                        var n
                    }, t.prototype.Ms = function(t, e) {
                        return Wr(t).get(e).next((function(t) {
                            if (t) return {
                                name: (e = t).name,
                                query: Yr(e.bundledQuery),
                                readTime: Gr(e.readTime)
                            };
                            var e
                        }))
                    }, t.prototype.Ls = function(t, e) {
                        return Wr(t).put(function(t) {
                            return {
                                name: t.name,
                                readTime: zr(On(t.readTime)),
                                bundledQuery: t.bundledQuery
                            }
                        }(e))
                    }, t
                }();

                function Xr(t) {
                    return Cr(t, xr.store)
                }

                function Wr(t) {
                    return Cr(t, Dr.store)
                }
                var Jr = function() {
                        function t() {
                            this.Bs = new Zr
                        }
                        return t.prototype.qs = function(t, e) {
                            return this.Bs.add(e), Zn.resolve()
                        }, t.prototype.Us = function(t, e) {
                            return Zn.resolve(this.Bs.getEntries(e))
                        }, t
                    }(),
                    Zr = function() {
                        function t() {
                            this.index = {}
                        }
                        return t.prototype.add = function(t) {
                            var e = t.tt(),
                                n = t.X(),
                                r = this.index[e] || new Qe(V.H),
                                i = !r.has(n);
                            return this.index[e] = r.add(n), i
                        }, t.prototype.has = function(t) {
                            var e = t.tt(),
                                n = t.X(),
                                r = this.index[e];
                            return r && r.has(n)
                        }, t.prototype.getEntries = function(t) {
                            return (this.index[t] || new Qe(V.H)).it()
                        }, t
                    }(),
                    $r = function() {
                        function t() {
                            this.Qs = new Zr
                        }
                        return t.prototype.qs = function(t, e) {
                            var n = this;
                            if (!this.Qs.has(e)) {
                                var r = e.tt(),
                                    i = e.X();
                                t.gs((function() {
                                    n.Qs.add(e)
                                }));
                                var o = {
                                    collectionId: r,
                                    parent: lr(i)
                                };
                                return ti(t).put(o)
                            }
                            return Zn.resolve()
                        }, t.prototype.Us = function(t, e) {
                            var n = [],
                                r = IDBKeyRange.bound([e, ""], [I(e), ""], !1, !0);
                            return ti(t).rs(r).next((function(t) {
                                for (var r = 0, i = t; r < i.length; r++) {
                                    var o = i[r];
                                    if (o.collectionId !== e) break;
                                    n.push(vr(o.parent))
                                }
                                return n
                            }))
                        }, t
                    }();

                function ti(t) {
                    return Cr(t, Ar.store)
                }
                var ei = {
                        Ks: !1,
                        Ws: 0,
                        js: 0,
                        Gs: 0
                    },
                    ni = function() {
                        function t(t, e, n) {
                            this.zs = t, this.Hs = e, this.Js = n
                        }
                        return t.Ys = function(e) {
                            return new t(e, t.Xs, t.Zs)
                        }, t
                    }();

                function ri(t) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        return Object(s.d)(this, (function(e) {
                            if (t.code !== O.FAILED_PRECONDITION || t.message !== hr) throw t;
                            return f("LocalStore", "Unexpectedly lost primary lease"), [2]
                        }))
                    }))
                }
                ni.Xs = 10, ni.Zs = 1e3, ni.ti = new ni(41943040, ni.Xs, ni.Zs), ni.ei = new ni(-1, 0, 0);
                var ii = function() {
                        function t(t, e) {
                            this.ni = t, this.si = e, this.ii = {}
                        }
                        return t.prototype.get = function(t) {
                            var e = this.ni(t),
                                n = this.ii[e];
                            if (void 0 !== n)
                                for (var r = 0, i = n; r < i.length; r++) {
                                    var o = i[r],
                                        s = o[0],
                                        u = o[1];
                                    if (this.si(s, t)) return u
                                }
                        }, t.prototype.has = function(t) {
                            return void 0 !== this.get(t)
                        }, t.prototype.set = function(t, e) {
                            var n = this.ni(t),
                                r = this.ii[n];
                            if (void 0 !== r) {
                                for (var i = 0; i < r.length; i++)
                                    if (this.si(r[i][0], t)) return void(r[i] = [t, e]);
                                r.push([t, e])
                            } else this.ii[n] = [
                                [t, e]
                            ]
                        }, t.prototype.delete = function(t) {
                            var e = this.ni(t),
                                n = this.ii[e];
                            if (void 0 === n) return !1;
                            for (var r = 0; r < n.length; r++)
                                if (this.si(n[r][0], t)) return 1 === n.length ? delete this.ii[e] : n.splice(r, 1), !0;
                            return !1
                        }, t.prototype.forEach = function(t) {
                            z(this.ii, (function(e, n) {
                                for (var r = 0, i = n; r < i.length; r++) {
                                    var o = i[r],
                                        s = o[0],
                                        u = o[1];
                                    t(s, u)
                                }
                            }))
                        }, t.prototype.et = function() {
                            return G(this.ii)
                        }, t
                    }(),
                    oi = function() {
                        function t() {
                            this.ri = new ii((function(t) {
                                return t.toString()
                            }), (function(t, e) {
                                return t.isEqual(e)
                            })), this.oi = !1
                        }
                        return t.prototype.ci = function(t) {
                            var e = this.ri.get(t);
                            return e ? e.readTime : R.min()
                        }, t.prototype.ai = function(t, e) {
                            this.ui(), this.ri.set(t.key, {
                                hi: t,
                                readTime: e
                            })
                        }, t.prototype.li = function(t, e) {
                            void 0 === e && (e = null), this.ui(), this.ri.set(t, {
                                hi: null,
                                readTime: e
                            })
                        }, t.prototype._i = function(t, e) {
                            this.ui();
                            var n = this.ri.get(e);
                            return void 0 !== n ? Zn.resolve(n.hi) : this.fi(t, e)
                        }, t.prototype.getEntries = function(t, e) {
                            return this.di(t, e)
                        }, t.prototype.apply = function(t) {
                            return this.ui(), this.oi = !0, this.wi(t)
                        }, t.prototype.ui = function() {}, t
                    }();

                function si(t, e, n) {
                    var r = t.store(mr.store),
                        i = t.store(wr.store),
                        o = [],
                        s = IDBKeyRange.only(n.batchId),
                        u = 0,
                        a = r.hs({
                            range: s
                        }, (function(t, e, n) {
                            return u++, n.delete()
                        }));
                    o.push(a.next((function() {
                        y(1 === u)
                    })));
                    for (var c = [], h = 0, f = n.mutations; h < f.length; h++) {
                        var l = f[h],
                            p = wr.key(e, l.key.path, n.batchId);
                        o.push(i.delete(p)), c.push(l.key)
                    }
                    return Zn.Mn(o).next((function() {
                        return c
                    }))
                }

                function ui(t) {
                    var e;
                    if (t.document) e = t.document;
                    else if (t.unknownDocument) e = t.unknownDocument;
                    else {
                        if (!t.noDocument) throw v();
                        e = t.noDocument
                    }
                    return JSON.stringify(e).length
                }
                var ai = function() {
                    function t(t, e, n, r) {
                        this.userId = t, this.Qt = e, this.Ei = n, this.Ti = r, this.Ii = {}
                    }
                    return t.mi = function(e, n, r, i) {
                        return y("" !== e.uid), new t(e.m() ? e.uid : "", n, r, i)
                    }, t.prototype.Ai = function(t) {
                        var e = !0,
                            n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
                        return hi(t).hs({
                            index: mr.userMutationsIndex,
                            range: n
                        }, (function(t, n, r) {
                            e = !1, r.done()
                        })).next((function() {
                            return e
                        }))
                    }, t.prototype.Ri = function(t, e, n, r) {
                        var i = this,
                            o = fi(t),
                            s = hi(t);
                        return s.add({}).next((function(u) {
                            y("number" == typeof u);
                            for (var a = new Rr(u, e, n, r), c = function(t, e, n) {
                                    var r = n.baseMutations.map((function(e) {
                                            return Rn(t.Fs, e)
                                        })),
                                        i = n.mutations.map((function(e) {
                                            return Rn(t.Fs, e)
                                        }));
                                    return new mr(e, n.batchId, n.vs.toMillis(), r, i)
                                }(i.Qt, i.userId, a), h = [], f = new Qe((function(t, e) {
                                    return w(t.rt(), e.rt())
                                })), l = 0, p = r; l < p.length; l++) {
                                var d = p[l],
                                    v = wr.key(i.userId, d.key.path, u);
                                f = f.add(d.key.path.X()), h.push(s.put(c)), h.push(o.put(v, wr.PLACEHOLDER))
                            }
                            return f.forEach((function(e) {
                                h.push(i.Ei.qs(t, e))
                            })), t.gs((function() {
                                i.Ii[u] = a.keys()
                            })), Zn.Mn(h).next((function() {
                                return a
                            }))
                        }))
                    }, t.prototype.Pi = function(t, e) {
                        var n = this;
                        return hi(t).get(e).next((function(t) {
                            return t ? (y(t.userId === n.userId), Br(n.Qt, t)) : null
                        }))
                    }, t.prototype.yi = function(t, e) {
                        var n = this;
                        return this.Ii[e] ? Zn.resolve(this.Ii[e]) : this.Pi(t, e).next((function(t) {
                            if (t) {
                                var r = t.keys();
                                return n.Ii[e] = r, r
                            }
                            return null
                        }))
                    }, t.prototype.gi = function(t, e) {
                        var n = this,
                            r = e + 1,
                            i = IDBKeyRange.lowerBound([this.userId, r]),
                            o = null;
                        return hi(t).hs({
                            index: mr.userMutationsIndex,
                            range: i
                        }, (function(t, e, i) {
                            e.userId === n.userId && (y(e.batchId >= r), o = Br(n.Qt, e)), i.done()
                        })).next((function() {
                            return o
                        }))
                    }, t.prototype.Vi = function(t) {
                        var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]),
                            n = -1;
                        return hi(t).hs({
                            index: mr.userMutationsIndex,
                            range: e,
                            reverse: !0
                        }, (function(t, e, r) {
                            n = e.batchId, r.done()
                        })).next((function() {
                            return n
                        }))
                    }, t.prototype.pi = function(t) {
                        var e = this,
                            n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
                        return hi(t).rs(mr.userMutationsIndex, n).next((function(t) {
                            return t.map((function(t) {
                                return Br(e.Qt, t)
                            }))
                        }))
                    }, t.prototype.bi = function(t, e) {
                        var n = this,
                            r = wr.prefixForPath(this.userId, e.path),
                            i = IDBKeyRange.lowerBound(r),
                            o = [];
                        return fi(t).hs({
                            range: i
                        }, (function(r, i, s) {
                            var u = r[0],
                                a = r[1],
                                c = r[2],
                                h = vr(a);
                            if (u === n.userId && e.path.isEqual(h)) return hi(t).get(c).next((function(t) {
                                if (!t) throw v();
                                y(t.userId === n.userId), o.push(Br(n.Qt, t))
                            }));
                            s.done()
                        })).next((function() {
                            return o
                        }))
                    }, t.prototype.vi = function(t, e) {
                        var n = this,
                            r = new Qe(w),
                            i = [];
                        return e.forEach((function(e) {
                            var o = wr.prefixForPath(n.userId, e.path),
                                s = IDBKeyRange.lowerBound(o),
                                u = fi(t).hs({
                                    range: s
                                }, (function(t, i, o) {
                                    var s = t[0],
                                        u = t[1],
                                        a = t[2],
                                        c = vr(u);
                                    s === n.userId && e.path.isEqual(c) ? r = r.add(a) : o.done()
                                }));
                            i.push(u)
                        })), Zn.Mn(i).next((function() {
                            return n.Si(t, r)
                        }))
                    }, t.prototype.Di = function(t, e) {
                        var n = this,
                            r = e.path,
                            i = r.length + 1,
                            o = wr.prefixForPath(this.userId, r),
                            s = IDBKeyRange.lowerBound(o),
                            u = new Qe(w);
                        return fi(t).hs({
                            range: s
                        }, (function(t, e, o) {
                            var s = t[0],
                                a = t[1],
                                c = t[2],
                                h = vr(a);
                            s === n.userId && r.nt(h) ? h.length === i && (u = u.add(c)) : o.done()
                        })).next((function() {
                            return n.Si(t, u)
                        }))
                    }, t.prototype.Si = function(t, e) {
                        var n = this,
                            r = [],
                            i = [];
                        return e.forEach((function(e) {
                            i.push(hi(t).get(e).next((function(t) {
                                if (null === t) throw v();
                                y(t.userId === n.userId), r.push(Br(n.Qt, t))
                            })))
                        })), Zn.Mn(i).next((function() {
                            return r
                        }))
                    }, t.prototype.Ci = function(t, e) {
                        var n = this;
                        return si(t.ps, this.userId, e).next((function(r) {
                            return t.gs((function() {
                                n.xi(e.batchId)
                            })), Zn.forEach(r, (function(e) {
                                return n.Ti.Ni(t, e)
                            }))
                        }))
                    }, t.prototype.xi = function(t) {
                        delete this.Ii[t]
                    }, t.prototype.$i = function(t) {
                        var e = this;
                        return this.Ai(t).next((function(n) {
                            if (!n) return Zn.resolve();
                            var r = IDBKeyRange.lowerBound(wr.prefixForUser(e.userId)),
                                i = [];
                            return fi(t).hs({
                                range: r
                            }, (function(t, n, r) {
                                if (t[0] === e.userId) {
                                    var o = vr(t[1]);
                                    i.push(o)
                                } else r.done()
                            })).next((function() {
                                y(0 === i.length)
                            }))
                        }))
                    }, t.prototype.Fi = function(t, e) {
                        return ci(t, this.userId, e)
                    }, t.prototype.Oi = function(t) {
                        var e = this;
                        return li(t).get(this.userId).next((function(t) {
                            return t || new br(e.userId, -1, "")
                        }))
                    }, t
                }();

                function ci(t, e, n) {
                    var r = wr.prefixForPath(e, n.path),
                        i = r[1],
                        o = IDBKeyRange.lowerBound(r),
                        s = !1;
                    return fi(t).hs({
                        range: o,
                        us: !0
                    }, (function(t, n, r) {
                        var o = t[0],
                            u = t[1];
                        t[2], o === e && u === i && (s = !0), r.done()
                    })).next((function() {
                        return s
                    }))
                }

                function hi(t) {
                    return Cr(t, mr.store)
                }

                function fi(t) {
                    return Cr(t, wr.store)
                }

                function li(t) {
                    return Cr(t, br.store)
                }
                var pi = function() {
                        function t(t) {
                            this.ki = t
                        }
                        return t.prototype.next = function() {
                            return this.ki += 2, this.ki
                        }, t.Mi = function() {
                            return new t(0)
                        }, t.Li = function() {
                            return new t(-1)
                        }, t
                    }(),
                    di = function() {
                        function t(t, e) {
                            this.Ti = t, this.Qt = e
                        }
                        return t.prototype.Bi = function(t) {
                            var e = this;
                            return this.qi(t).next((function(n) {
                                var r = new pi(n.highestTargetId);
                                return n.highestTargetId = r.next(), e.Ui(t, n).next((function() {
                                    return n.highestTargetId
                                }))
                            }))
                        }, t.prototype.Qi = function(t) {
                            return this.qi(t).next((function(t) {
                                return R.K(new C(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds))
                            }))
                        }, t.prototype.Ki = function(t) {
                            return this.qi(t).next((function(t) {
                                return t.highestListenSequenceNumber
                            }))
                        }, t.prototype.Wi = function(t, e, n) {
                            var r = this;
                            return this.qi(t).next((function(i) {
                                return i.highestListenSequenceNumber = e, n && (i.lastRemoteSnapshotVersion = n.j()), e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), r.Ui(t, i)
                            }))
                        }, t.prototype.ji = function(t, e) {
                            var n = this;
                            return this.Gi(t, e).next((function() {
                                return n.qi(t).next((function(r) {
                                    return r.targetCount += 1, n.zi(e, r), n.Ui(t, r)
                                }))
                            }))
                        }, t.prototype.Hi = function(t, e) {
                            return this.Gi(t, e)
                        }, t.prototype.Ji = function(t, e) {
                            var n = this;
                            return this.Yi(t, e.targetId).next((function() {
                                return vi(t).delete(e.targetId)
                            })).next((function() {
                                return n.qi(t)
                            })).next((function(e) {
                                return y(e.targetCount > 0), e.targetCount -= 1, n.Ui(t, e)
                            }))
                        }, t.prototype.Xi = function(t, e, n) {
                            var r = this,
                                i = 0,
                                o = [];
                            return vi(t).hs((function(s, u) {
                                var a = Hr(u);
                                a.sequenceNumber <= e && null === n.get(a.targetId) && (i++, o.push(r.Ji(t, a)))
                            })).next((function() {
                                return Zn.Mn(o)
                            })).next((function() {
                                return i
                            }))
                        }, t.prototype.In = function(t, e) {
                            return vi(t).hs((function(t, n) {
                                var r = Hr(n);
                                e(r)
                            }))
                        }, t.prototype.qi = function(t) {
                            return yi(t).get(Nr.key).next((function(t) {
                                return y(null !== t), t
                            }))
                        }, t.prototype.Ui = function(t, e) {
                            return yi(t).put(Nr.key, e)
                        }, t.prototype.Gi = function(t, e) {
                            return vi(t).put(Qr(this.Qt, e))
                        }, t.prototype.zi = function(t, e) {
                            var n = !1;
                            return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, n = !0), n
                        }, t.prototype.Zi = function(t) {
                            return this.qi(t).next((function(t) {
                                return t.targetCount
                            }))
                        }, t.prototype.tr = function(t, e) {
                            var n = Et(e),
                                r = IDBKeyRange.bound([n, Number.NEGATIVE_INFINITY], [n, Number.POSITIVE_INFINITY]),
                                i = null;
                            return vi(t).hs({
                                range: r,
                                index: Tr.queryTargetsIndexName
                            }, (function(t, n, r) {
                                var o = Hr(n);
                                Ot(e, o.target) && (i = o, r.done())
                            })).next((function() {
                                return i
                            }))
                        }, t.prototype.er = function(t, e, n) {
                            var r = this,
                                i = [],
                                o = gi(t);
                            return e.forEach((function(e) {
                                var s = lr(e.path);
                                i.push(o.put(new jr(n, s))), i.push(r.Ti.nr(t, n, e))
                            })), Zn.Mn(i)
                        }, t.prototype.sr = function(t, e, n) {
                            var r = this,
                                i = gi(t);
                            return Zn.forEach(e, (function(e) {
                                var o = lr(e.path);
                                return Zn.Mn([i.delete([n, o]), r.Ti.ir(t, n, e)])
                            }))
                        }, t.prototype.Yi = function(t, e) {
                            var n = gi(t),
                                r = IDBKeyRange.bound([e], [e + 1], !1, !0);
                            return n.delete(r)
                        }, t.prototype.rr = function(t, e) {
                            var n = IDBKeyRange.bound([e], [e + 1], !1, !0),
                                r = gi(t),
                                i = nn();
                            return r.hs({
                                range: n,
                                us: !0
                            }, (function(t, e, n) {
                                var r = vr(t[1]),
                                    o = new F(r);
                                i = i.add(o)
                            })).next((function() {
                                return i
                            }))
                        }, t.prototype.Fi = function(t, e) {
                            var n = lr(e.path),
                                r = IDBKeyRange.bound([n], [I(n)], !1, !0),
                                i = 0;
                            return gi(t).hs({
                                index: jr.documentTargetsIndex,
                                us: !0,
                                range: r
                            }, (function(t, e, n) {
                                var r = t[0];
                                t[1], 0 !== r && (i++, n.done())
                            })).next((function() {
                                return i > 0
                            }))
                        }, t.prototype.Sn = function(t, e) {
                            return vi(t).get(e).next((function(t) {
                                return t ? Hr(t) : null
                            }))
                        }, t
                    }();

                function vi(t) {
                    return Cr(t, Tr.store)
                }

                function yi(t) {
                    return Cr(t, Nr.store)
                }

                function gi(t) {
                    return Cr(t, jr.store)
                }

                function bi(t, e) {
                    var n = t[0],
                        r = t[1],
                        i = e[0],
                        o = e[1],
                        s = w(n, i);
                    return 0 === s ? w(r, o) : s
                }
                var mi = function() {
                        function t(t) {
                            this.cr = t, this.buffer = new Qe(bi), this.ar = 0
                        }
                        return t.prototype.ur = function() {
                            return ++this.ar
                        }, t.prototype.hr = function(t) {
                            var e = [t, this.ur()];
                            if (this.buffer.size < this.cr) this.buffer = this.buffer.add(e);
                            else {
                                var n = this.buffer.last();
                                bi(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e))
                            }
                        }, Object.defineProperty(t.prototype, "maxValue", {
                            get: function() {
                                return this.buffer.last()[0]
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t
                    }(),
                    wi = function() {
                        function t(t, e) {
                            this.lr = t, this._s = e, this._r = !1, this.dr = null
                        }
                        return t.prototype.start = function(t) {
                            -1 !== this.lr.params.zs && this.wr(t)
                        }, t.prototype.stop = function() {
                            this.dr && (this.dr.cancel(), this.dr = null)
                        }, Object.defineProperty(t.prototype, "Er", {
                            get: function() {
                                return null !== this.dr
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.wr = function(t) {
                            var e = this,
                                n = this._r ? 3e5 : 6e4;
                            f("LruGarbageCollector", "Garbage collection scheduled in " + n + "ms"), this.dr = this._s.Tr("lru_garbage_collection", n, (function() {
                                return Object(s.b)(e, void 0, void 0, (function() {
                                    var e;
                                    return Object(s.d)(this, (function(n) {
                                        switch (n.label) {
                                            case 0:
                                                this.dr = null, this._r = !0, n.label = 1;
                                            case 1:
                                                return n.trys.push([1, 3, , 7]), [4, t.Ir(this.lr)];
                                            case 2:
                                                return n.sent(), [3, 7];
                                            case 3:
                                                return rr(e = n.sent()) ? (f("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", e), [3, 6]) : [3, 4];
                                            case 4:
                                                return [4, ri(e)];
                                            case 5:
                                                n.sent(), n.label = 6;
                                            case 6:
                                                return [3, 7];
                                            case 7:
                                                return [4, this.wr(t)];
                                            case 8:
                                                return n.sent(), [2]
                                        }
                                    }))
                                }))
                            }))
                        }, t
                    }(),
                    _i = function() {
                        function t(t, e) {
                            this.mr = t, this.params = e
                        }
                        return t.prototype.Ar = function(t, e) {
                            return this.mr.Rr(t).next((function(t) {
                                return Math.floor(e / 100 * t)
                            }))
                        }, t.prototype.Pr = function(t, e) {
                            var n = this;
                            if (0 === e) return Zn.resolve(P.q);
                            var r = new mi(e);
                            return this.mr.In(t, (function(t) {
                                return r.hr(t.sequenceNumber)
                            })).next((function() {
                                return n.mr.yr(t, (function(t) {
                                    return r.hr(t)
                                }))
                            })).next((function() {
                                return r.maxValue
                            }))
                        }, t.prototype.Xi = function(t, e, n) {
                            return this.mr.Xi(t, e, n)
                        }, t.prototype.gr = function(t, e) {
                            return this.mr.gr(t, e)
                        }, t.prototype.Vr = function(t, e) {
                            var n = this;
                            return -1 === this.params.zs ? (f("LruGarbageCollector", "Garbage collection skipped; disabled"), Zn.resolve(ei)) : this.pr(t).next((function(r) {
                                return r < n.params.zs ? (f("LruGarbageCollector", "Garbage collection skipped; Cache size " + r + " is lower than threshold " + n.params.zs), ei) : n.br(t, e)
                            }))
                        }, t.prototype.pr = function(t) {
                            return this.mr.pr(t)
                        }, t.prototype.br = function(t, e) {
                            var n, i, o, s, u, a, c, l = this,
                                p = Date.now();
                            return this.Ar(t, this.params.Hs).next((function(e) {
                                return e > l.params.Js ? (f("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + l.params.Js + " from " + e), i = l.params.Js) : i = e, s = Date.now(), l.Pr(t, i)
                            })).next((function(r) {
                                return n = r, u = Date.now(), l.Xi(t, n, e)
                            })).next((function(e) {
                                return o = e, a = Date.now(), l.gr(t, n)
                            })).next((function(t) {
                                return c = Date.now(), h() <= r.a.DEBUG && f("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (s - p) + "ms\n\tDetermined least recently used " + i + " in " + (u - s) + "ms\n\tRemoved " + o + " targets in " + (a - u) + "ms\n\tRemoved " + t + " documents in " + (c - a) + "ms\nTotal Duration: " + (c - p) + "ms"), Zn.resolve({
                                    Ks: !0,
                                    Ws: i,
                                    js: o,
                                    Gs: t
                                })
                            }))
                        }, t
                    }(),
                    Ii = function() {
                        function t(t, e) {
                            this.db = t, this.lr = function(t, e) {
                                return new _i(t, e)
                            }(this, e)
                        }
                        return t.prototype.Rr = function(t) {
                            var e = this.vr(t);
                            return this.db.Sr().Zi(t).next((function(t) {
                                return e.next((function(e) {
                                    return t + e
                                }))
                            }))
                        }, t.prototype.vr = function(t) {
                            var e = 0;
                            return this.yr(t, (function(t) {
                                e++
                            })).next((function() {
                                return e
                            }))
                        }, t.prototype.In = function(t, e) {
                            return this.db.Sr().In(t, e)
                        }, t.prototype.yr = function(t, e) {
                            return this.Dr(t, (function(t, n) {
                                return e(n)
                            }))
                        }, t.prototype.nr = function(t, e, n) {
                            return Ei(t, n)
                        }, t.prototype.ir = function(t, e, n) {
                            return Ei(t, n)
                        }, t.prototype.Xi = function(t, e, n) {
                            return this.db.Sr().Xi(t, e, n)
                        }, t.prototype.Ni = function(t, e) {
                            return Ei(t, e)
                        }, t.prototype.Cr = function(t, e) {
                            return function(t, e) {
                                var n = !1;
                                return li(t).ls((function(r) {
                                    return ci(t, r, e).next((function(t) {
                                        return t && (n = !0), Zn.resolve(!t)
                                    }))
                                })).next((function() {
                                    return n
                                }))
                            }(t, e)
                        }, t.prototype.gr = function(t, e) {
                            var n = this,
                                r = this.db.$r().Nr(),
                                i = [],
                                o = 0;
                            return this.Dr(t, (function(s, u) {
                                if (u <= e) {
                                    var a = n.Cr(t, s).next((function(e) {
                                        if (!e) return o++, r._i(t, s).next((function() {
                                            return r.li(s), gi(t).delete([0, lr(s.path)])
                                        }))
                                    }));
                                    i.push(a)
                                }
                            })).next((function() {
                                return Zn.Mn(i)
                            })).next((function() {
                                return r.apply(t)
                            })).next((function() {
                                return o
                            }))
                        }, t.prototype.removeTarget = function(t, e) {
                            var n = e.kt(t.bs);
                            return this.db.Sr().Hi(t, n)
                        }, t.prototype.Fr = function(t, e) {
                            return Ei(t, e)
                        }, t.prototype.Dr = function(t, e) {
                            var n, r = gi(t),
                                i = P.q;
                            return r.hs({
                                index: jr.documentTargetsIndex
                            }, (function(t, r) {
                                var o = t[0],
                                    s = (t[1], r.path),
                                    u = r.sequenceNumber;
                                0 === o ? (i !== P.q && e(new F(vr(n)), i), i = u, n = s) : i = P.q
                            })).next((function() {
                                i !== P.q && e(new F(vr(n)), i)
                            }))
                        }, t.prototype.pr = function(t) {
                            return this.db.$r().Or(t)
                        }, t
                    }();

                function Ei(t, e) {
                    return gi(t).put(function(t, e) {
                        return new jr(0, lr(t.path), e)
                    }(e, t.bs))
                }
                var Oi = function() {
                        function t(t, e) {
                            this.Qt = t, this.Ei = e
                        }
                        return t.prototype.ai = function(t, e, n) {
                            return Ni(t).put(Ai(e), n)
                        }, t.prototype.li = function(t, e) {
                            var n = Ni(t),
                                r = Ai(e);
                            return n.delete(r)
                        }, t.prototype.updateMetadata = function(t, e) {
                            var n = this;
                            return this.getMetadata(t).next((function(r) {
                                return r.byteSize += e, n.kr(t, r)
                            }))
                        }, t.prototype._i = function(t, e) {
                            var n = this;
                            return Ni(t).get(Ai(e)).next((function(t) {
                                return n.Mr(t)
                            }))
                        }, t.prototype.Lr = function(t, e) {
                            var n = this;
                            return Ni(t).get(Ai(e)).next((function(t) {
                                var e = n.Mr(t);
                                return e ? {
                                    hi: e,
                                    size: ui(t)
                                } : null
                            }))
                        }, t.prototype.getEntries = function(t, e) {
                            var n = this,
                                r = We();
                            return this.Br(t, e, (function(t, e) {
                                var i = n.Mr(e);
                                r = r.zt(t, i)
                            })).next((function() {
                                return r
                            }))
                        }, t.prototype.qr = function(t, e) {
                            var n = this,
                                r = We(),
                                i = new Ge(F.H);
                            return this.Br(t, e, (function(t, e) {
                                var o = n.Mr(e);
                                o ? (r = r.zt(t, o), i = i.zt(t, ui(e))) : (r = r.zt(t, null), i = i.zt(t, 0))
                            })).next((function() {
                                return {
                                    Ur: r,
                                    Qr: i
                                }
                            }))
                        }, t.prototype.Br = function(t, e, n) {
                            if (e.et()) return Zn.resolve();
                            var r = IDBKeyRange.bound(e.first().path.it(), e.last().path.it()),
                                i = e.te(),
                                o = i.oe();
                            return Ni(t).hs({
                                range: r
                            }, (function(t, e, r) {
                                for (var s = F.Et(t); o && F.H(o, s) < 0;) n(o, null), o = i.oe();
                                o && o.isEqual(s) && (n(o, e), o = i.ce() ? i.oe() : null), o ? r.ss(o.path.it()) : r.done()
                            })).next((function() {
                                for (; o;) n(o, null), o = i.ce() ? i.oe() : null
                            }))
                        }, t.prototype.Kr = function(t, e, n) {
                            var r = this,
                                i = Ze(),
                                o = e.path.length + 1,
                                s = {};
                            if (n.isEqual(R.min())) {
                                var u = e.path.it();
                                s.range = IDBKeyRange.lowerBound(u)
                            } else {
                                var a = e.path.it(),
                                    c = Fr(n);
                                s.range = IDBKeyRange.lowerBound([a, c], !0), s.index = Er.collectionReadTimeIndex
                            }
                            return Ni(t).hs(s, (function(t, n, s) {
                                if (t.length === o) {
                                    var u = Mr(r.Qt, n);
                                    e.path.nt(u.key.path) ? u instanceof bt && ee(e, u) && (i = i.zt(u.key, u)) : s.done()
                                }
                            })).next((function() {
                                return i
                            }))
                        }, t.prototype.Nr = function(t) {
                            return new Ti(this, !!t && t.Wr)
                        }, t.prototype.Or = function(t) {
                            return this.getMetadata(t).next((function(t) {
                                return t.byteSize
                            }))
                        }, t.prototype.getMetadata = function(t) {
                            return ji(t).get(Or.key).next((function(t) {
                                return y(!!t), t
                            }))
                        }, t.prototype.kr = function(t, e) {
                            return ji(t).put(Or.key, e)
                        }, t.prototype.Mr = function(t) {
                            if (t) {
                                var e = Mr(this.Qt, t);
                                return e instanceof mt && e.version.isEqual(R.min()) ? null : e
                            }
                            return null
                        }, t
                    }(),
                    Ti = function(t) {
                        function e(e, n) {
                            var r = this;
                            return (r = t.call(this) || this).jr = e, r.Wr = n, r.Gr = new ii((function(t) {
                                return t.toString()
                            }), (function(t, e) {
                                return t.isEqual(e)
                            })), r
                        }
                        return Object(s.c)(e, t), e.prototype.wi = function(t) {
                            var e = this,
                                n = [],
                                r = 0,
                                i = new Qe((function(t, e) {
                                    return w(t.rt(), e.rt())
                                }));
                            return this.ri.forEach((function(o, s) {
                                var u = e.Gr.get(o);
                                if (s.hi) {
                                    var a = Ur(e.jr.Qt, s.hi, e.ci(o));
                                    i = i.add(o.path.X());
                                    var c = ui(a);
                                    r += c - u, n.push(e.jr.ai(t, o, a))
                                } else if (r -= u, e.Wr) {
                                    var h = Ur(e.jr.Qt, new mt(o, R.min()), e.ci(o));
                                    n.push(e.jr.ai(t, o, h))
                                } else n.push(e.jr.li(t, o))
                            })), i.forEach((function(r) {
                                n.push(e.jr.Ei.qs(t, r))
                            })), n.push(this.jr.updateMetadata(t, r)), Zn.Mn(n)
                        }, e.prototype.fi = function(t, e) {
                            var n = this;
                            return this.jr.Lr(t, e).next((function(t) {
                                return null === t ? (n.Gr.set(e, 0), null) : (n.Gr.set(e, t.size), t.hi)
                            }))
                        }, e.prototype.di = function(t, e) {
                            var n = this;
                            return this.jr.qr(t, e).next((function(t) {
                                var e = t.Ur;
                                return t.Qr.forEach((function(t, e) {
                                    n.Gr.set(t, e)
                                })), e
                            }))
                        }, e
                    }(oi);

                function ji(t) {
                    return Cr(t, Or.store)
                }

                function Ni(t) {
                    return Cr(t, Er.store)
                }

                function Ai(t) {
                    return t.path.it()
                }
                var Si = function() {
                    function t(t) {
                        this.Qt = t
                    }
                    return t.prototype.Jn = function(t, e, n, r) {
                        var i = this;
                        y(n < r && n >= 0 && r <= 11);
                        var o = new $n("createOrUpgrade", e);
                        n < 1 && r >= 1 && (function(t) {
                            t.createObjectStore(gr.store)
                        }(t), function(t) {
                            t.createObjectStore(br.store, {
                                keyPath: br.keyPath
                            }), t.createObjectStore(mr.store, {
                                keyPath: mr.keyPath,
                                autoIncrement: !0
                            }).createIndex(mr.userMutationsIndex, mr.userMutationsKeyPath, {
                                unique: !0
                            }), t.createObjectStore(wr.store)
                        }(t), xi(t), function(t) {
                            t.createObjectStore(Er.store)
                        }(t));
                        var s = Zn.resolve();
                        return n < 3 && r >= 3 && (0 !== n && (function(t) {
                            t.deleteObjectStore(jr.store), t.deleteObjectStore(Tr.store), t.deleteObjectStore(Nr.store)
                        }(t), xi(t)), s = s.next((function() {
                            return function(t) {
                                var e = t.store(Nr.store),
                                    n = new Nr(0, 0, R.min().j(), 0);
                                return e.put(Nr.key, n)
                            }(o)
                        }))), n < 4 && r >= 4 && (0 !== n && (s = s.next((function() {
                            return function(t, e) {
                                return e.store(mr.store).rs().next((function(n) {
                                    t.deleteObjectStore(mr.store), t.createObjectStore(mr.store, {
                                        keyPath: mr.keyPath,
                                        autoIncrement: !0
                                    }).createIndex(mr.userMutationsIndex, mr.userMutationsKeyPath, {
                                        unique: !0
                                    });
                                    var r = e.store(mr.store),
                                        i = n.map((function(t) {
                                            return r.put(t)
                                        }));
                                    return Zn.Mn(i)
                                }))
                            }(t, o)
                        }))), s = s.next((function() {
                            ! function(t) {
                                t.createObjectStore(Sr.store, {
                                    keyPath: Sr.keyPath
                                })
                            }(t)
                        }))), n < 5 && r >= 5 && (s = s.next((function() {
                            return i.zr(o)
                        }))), n < 6 && r >= 6 && (s = s.next((function() {
                            return function(t) {
                                t.createObjectStore(Or.store)
                            }(t), i.Hr(o)
                        }))), n < 7 && r >= 7 && (s = s.next((function() {
                            return i.Jr(o)
                        }))), n < 8 && r >= 8 && (s = s.next((function() {
                            return i.Yr(t, o)
                        }))), n < 9 && r >= 9 && (s = s.next((function() {
                            ! function(t) {
                                t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges")
                            }(t),
                            function(t) {
                                var e = t.objectStore(Er.store);
                                e.createIndex(Er.readTimeIndex, Er.readTimeIndexPath, {
                                    unique: !1
                                }), e.createIndex(Er.collectionReadTimeIndex, Er.collectionReadTimeIndexPath, {
                                    unique: !1
                                })
                            }(e)
                        }))), n < 10 && r >= 10 && (s = s.next((function() {
                            return i.Xr(o)
                        }))), n < 11 && r >= 11 && (s = s.next((function() {
                            ! function(t) {
                                t.createObjectStore(xr.store, {
                                    keyPath: xr.keyPath
                                })
                            }(t),
                            function(t) {
                                t.createObjectStore(Dr.store, {
                                    keyPath: Dr.keyPath
                                })
                            }(t)
                        }))), s
                    }, t.prototype.Hr = function(t) {
                        var e = 0;
                        return t.store(Er.store).hs((function(t, n) {
                            e += ui(n)
                        })).next((function() {
                            var n = new Or(e);
                            return t.store(Or.store).put(Or.key, n)
                        }))
                    }, t.prototype.zr = function(t) {
                        var e = this,
                            n = t.store(br.store),
                            r = t.store(mr.store);
                        return n.rs().next((function(n) {
                            return Zn.forEach(n, (function(n) {
                                var i = IDBKeyRange.bound([n.userId, -1], [n.userId, n.lastAcknowledgedBatchId]);
                                return r.rs(mr.userMutationsIndex, i).next((function(r) {
                                    return Zn.forEach(r, (function(r) {
                                        y(r.userId === n.userId);
                                        var i = Br(e.Qt, r);
                                        return si(t, n.userId, i).next((function() {}))
                                    }))
                                }))
                            }))
                        }))
                    }, t.prototype.Jr = function(t) {
                        var e = t.store(jr.store),
                            n = t.store(Er.store);
                        return t.store(Nr.store).get(Nr.key).next((function(t) {
                            var r = [];
                            return n.hs((function(n, i) {
                                var o = new V(n),
                                    s = function(t) {
                                        return [0, lr(t)]
                                    }(o);
                                r.push(e.get(s).next((function(n) {
                                    return n ? Zn.resolve() : function(n) {
                                        return e.put(new jr(0, lr(n), t.highestListenSequenceNumber))
                                    }(o)
                                })))
                            })).next((function() {
                                return Zn.Mn(r)
                            }))
                        }))
                    }, t.prototype.Yr = function(t, e) {
                        t.createObjectStore(Ar.store, {
                            keyPath: Ar.keyPath
                        });
                        var n = e.store(Ar.store),
                            r = new Zr,
                            i = function(t) {
                                if (r.add(t)) {
                                    var e = t.tt(),
                                        i = t.X();
                                    return n.put({
                                        collectionId: e,
                                        parent: lr(i)
                                    })
                                }
                            };
                        return e.store(Er.store).hs({
                            us: !0
                        }, (function(t, e) {
                            var n = new V(t);
                            return i(n.X())
                        })).next((function() {
                            return e.store(wr.store).hs({
                                us: !0
                            }, (function(t, e) {
                                t[0];
                                var n = t[1],
                                    r = (t[2], vr(n));
                                return i(r.X())
                            }))
                        }))
                    }, t.prototype.Xr = function(t) {
                        var e = this,
                            n = t.store(Tr.store);
                        return n.hs((function(t, r) {
                            var i = Hr(r),
                                o = Qr(e.Qt, i);
                            return n.put(o)
                        }))
                    }, t
                }();

                function xi(t) {
                    t.createObjectStore(jr.store, {
                        keyPath: jr.keyPath
                    }).createIndex(jr.documentTargetsIndex, jr.documentTargetsKeyPath, {
                        unique: !0
                    }), t.createObjectStore(Tr.store, {
                        keyPath: Tr.keyPath
                    }).createIndex(Tr.queryTargetsIndexName, Tr.queryTargetsKeyPath, {
                        unique: !0
                    }), t.createObjectStore(Nr.store)
                }
                var Di = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",
                    ki = function() {
                        function t(e, n, r, i, o, s, u, a, c, h) {
                            if (this.allowTabSynchronization = e, this.persistenceKey = n, this.clientId = r, this.Zr = o, this.window = s, this.document = u, this.eo = c, this.no = h, this.so = null, this.io = !1, this.isPrimary = !1, this.networkEnabled = !0, this.ro = null, this.inForeground = !1, this.oo = null, this.co = null, this.ao = Number.NEGATIVE_INFINITY, this.uo = function(t) {
                                    return Promise.resolve()
                                }, !t.Kn()) throw new T(O.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
                            this.Ti = new Ii(this, i), this.ho = n + "main", this.Qt = new Vr(a), this.lo = new tr(this.ho, 11, new Si(this.Qt)), this._o = new di(this.Ti, this.Qt), this.Ei = new $r, this.fo = function(t, e) {
                                return new Oi(t, e)
                            }(this.Qt, this.Ei), this.wo = new Kr, this.window && this.window.localStorage ? this.Eo = this.window.localStorage : (this.Eo = null, !1 === h && l("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))
                        }
                        return t.prototype.start = function() {
                            var t = this;
                            return this.To().then((function() {
                                if (!t.isPrimary && !t.allowTabSynchronization) throw new T(O.FAILED_PRECONDITION, Di);
                                return t.Io(), t.mo(), t.Ao(), t.runTransaction("getHighestListenSequenceNumber", "readonly", (function(e) {
                                    return t._o.Ki(e)
                                }))
                            })).then((function(e) {
                                t.so = new P(e, t.eo)
                            })).then((function() {
                                t.io = !0
                            })).catch((function(e) {
                                return t.lo && t.lo.close(), Promise.reject(e)
                            }))
                        }, t.prototype.Ro = function(t) {
                            var e = this;
                            return this.uo = function(n) {
                                return Object(s.b)(e, void 0, void 0, (function() {
                                    return Object(s.d)(this, (function(e) {
                                        return this.Er ? [2, t(n)] : [2]
                                    }))
                                }))
                            }, t(this.isPrimary)
                        }, t.prototype.Po = function(t) {
                            var e = this;
                            this.lo.Xn((function(n) {
                                return Object(s.b)(e, void 0, void 0, (function() {
                                    return Object(s.d)(this, (function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return null === n.newVersion ? [4, t()] : [3, 2];
                                            case 1:
                                                e.sent(), e.label = 2;
                                            case 2:
                                                return [2]
                                        }
                                    }))
                                }))
                            }))
                        }, t.prototype.yo = function(t) {
                            var e = this;
                            this.networkEnabled !== t && (this.networkEnabled = t, this.Zr.Ps((function() {
                                return Object(s.b)(e, void 0, void 0, (function() {
                                    return Object(s.d)(this, (function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return this.Er ? [4, this.To()] : [3, 2];
                                            case 1:
                                                t.sent(), t.label = 2;
                                            case 2:
                                                return [2]
                                        }
                                    }))
                                }))
                            })))
                        }, t.prototype.To = function() {
                            var t = this;
                            return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", (function(e) {
                                return Ci(e).put(new Sr(t.clientId, Date.now(), t.networkEnabled, t.inForeground)).next((function() {
                                    if (t.isPrimary) return t.Vo(e).next((function(e) {
                                        e || (t.isPrimary = !1, t.Zr.po((function() {
                                            return t.uo(!1)
                                        })))
                                    }))
                                })).next((function() {
                                    return t.bo(e)
                                })).next((function(n) {
                                    return t.isPrimary && !n ? t.vo(e).next((function() {
                                        return !1
                                    })) : !!n && t.So(e).next((function() {
                                        return !0
                                    }))
                                }))
                            })).catch((function(e) {
                                if (rr(e)) return f("IndexedDbPersistence", "Failed to extend owner lease: ", e), t.isPrimary;
                                if (!t.allowTabSynchronization) throw e;
                                return f("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e), !1
                            })).then((function(e) {
                                t.isPrimary !== e && t.Zr.po((function() {
                                    return t.uo(e)
                                })), t.isPrimary = e
                            }))
                        }, t.prototype.Vo = function(t) {
                            var e = this;
                            return Pi(t).get(gr.key).next((function(t) {
                                return Zn.resolve(e.Do(t))
                            }))
                        }, t.prototype.Co = function(t) {
                            return Ci(t).delete(this.clientId)
                        }, t.prototype.xo = function() {
                            return Object(s.b)(this, void 0, void 0, (function() {
                                var t, e, n, r, i = this;
                                return Object(s.d)(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return !this.isPrimary || this.No(this.ao, 18e5) ? [3, 2] : (this.ao = Date.now(), [4, this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (function(t) {
                                                var e = Cr(t, Sr.store);
                                                return e.rs().next((function(t) {
                                                    var n = i.$o(t, 18e5),
                                                        r = t.filter((function(t) {
                                                            return -1 === n.indexOf(t)
                                                        }));
                                                    return Zn.forEach(r, (function(t) {
                                                        return e.delete(t.clientId)
                                                    })).next((function() {
                                                        return r
                                                    }))
                                                }))
                                            })).catch((function() {
                                                return []
                                            }))]);
                                        case 1:
                                            if (t = o.sent(), this.Eo)
                                                for (e = 0, n = t; e < n.length; e++) r = n[e], this.Eo.removeItem(this.Fo(r.clientId));
                                            o.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                }))
                            }))
                        }, t.prototype.Ao = function() {
                            var t = this;
                            this.co = this.Zr.Tr("client_metadata_refresh", 4e3, (function() {
                                return t.To().then((function() {
                                    return t.xo()
                                })).then((function() {
                                    return t.Ao()
                                }))
                            }))
                        }, t.prototype.Do = function(t) {
                            return !!t && t.ownerId === this.clientId
                        }, t.prototype.bo = function(t) {
                            var e = this;
                            return this.no ? Zn.resolve(!0) : Pi(t).get(gr.key).next((function(n) {
                                if (null !== n && e.No(n.leaseTimestampMs, 5e3) && !e.Oo(n.ownerId)) {
                                    if (e.Do(n) && e.networkEnabled) return !0;
                                    if (!e.Do(n)) {
                                        if (!n.allowTabSynchronization) throw new T(O.FAILED_PRECONDITION, Di);
                                        return !1
                                    }
                                }
                                return !(!e.networkEnabled || !e.inForeground) || Ci(t).rs().next((function(t) {
                                    return void 0 === e.$o(t, 5e3).find((function(t) {
                                        if (e.clientId !== t.clientId) {
                                            var n = !e.networkEnabled && t.networkEnabled,
                                                r = !e.inForeground && t.inForeground,
                                                i = e.networkEnabled === t.networkEnabled;
                                            if (n || r && i) return !0
                                        }
                                        return !1
                                    }))
                                }))
                            })).next((function(t) {
                                return e.isPrimary !== t && f("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), t
                            }))
                        }, t.prototype.ko = function() {
                            return Object(s.b)(this, void 0, void 0, (function() {
                                var t = this;
                                return Object(s.d)(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return this.io = !1, this.Mo(), this.co && (this.co.cancel(), this.co = null), this.Lo(), this.Bo(), [4, this.lo.runTransaction("shutdown", "readwrite", [gr.store, Sr.store], (function(e) {
                                                var n = new Pr(e, P.q);
                                                return t.vo(n).next((function() {
                                                    return t.Co(n)
                                                }))
                                            }))];
                                        case 1:
                                            return e.sent(), this.lo.close(), this.qo(), [2]
                                    }
                                }))
                            }))
                        }, t.prototype.$o = function(t, e) {
                            var n = this;
                            return t.filter((function(t) {
                                return n.No(t.updateTimeMs, e) && !n.Oo(t.clientId)
                            }))
                        }, t.prototype.Uo = function() {
                            var t = this;
                            return this.runTransaction("getActiveClients", "readonly", (function(e) {
                                return Ci(e).rs().next((function(e) {
                                    return t.$o(e, 18e5).map((function(t) {
                                        return t.clientId
                                    }))
                                }))
                            }))
                        }, Object.defineProperty(t.prototype, "Er", {
                            get: function() {
                                return this.io
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.Qo = function(t) {
                            return ai.mi(t, this.Qt, this.Ei, this.Ti)
                        }, t.prototype.Sr = function() {
                            return this._o
                        }, t.prototype.$r = function() {
                            return this.fo
                        }, t.prototype.Ko = function() {
                            return this.Ei
                        }, t.prototype.Wo = function() {
                            return this.wo
                        }, t.prototype.runTransaction = function(t, e, n) {
                            var r = this;
                            f("IndexedDbPersistence", "Starting transaction:", t);
                            var i, o = "readonly" === e ? "readonly" : "readwrite";
                            return this.lo.runTransaction(t, o, kr, (function(o) {
                                return i = new Pr(o, r.so ? r.so.next() : P.q), "readwrite-primary" === e ? r.Vo(i).next((function(t) {
                                    return !!t || r.bo(i)
                                })).next((function(e) {
                                    if (!e) throw l("Failed to obtain primary lease for action '" + t + "'."), r.isPrimary = !1, r.Zr.po((function() {
                                        return r.uo(!1)
                                    })), new T(O.FAILED_PRECONDITION, hr);
                                    return n(i)
                                })).next((function(t) {
                                    return r.So(i).next((function() {
                                        return t
                                    }))
                                })) : r.jo(i).next((function() {
                                    return n(i)
                                }))
                            })).then((function(t) {
                                return i.Vs(), t
                            }))
                        }, t.prototype.jo = function(t) {
                            var e = this;
                            return Pi(t).get(gr.key).next((function(t) {
                                if (null !== t && e.No(t.leaseTimestampMs, 5e3) && !e.Oo(t.ownerId) && !e.Do(t) && !(e.no || e.allowTabSynchronization && t.allowTabSynchronization)) throw new T(O.FAILED_PRECONDITION, Di)
                            }))
                        }, t.prototype.So = function(t) {
                            var e = new gr(this.clientId, this.allowTabSynchronization, Date.now());
                            return Pi(t).put(gr.key, e)
                        }, t.Kn = function() {
                            return tr.Kn()
                        }, t.prototype.vo = function(t) {
                            var e = this,
                                n = Pi(t);
                            return n.get(gr.key).next((function(t) {
                                return e.Do(t) ? (f("IndexedDbPersistence", "Releasing primary lease."), n.delete(gr.key)) : Zn.resolve()
                            }))
                        }, t.prototype.No = function(t, e) {
                            var n = Date.now();
                            return !(t < n - e || t > n && (l("Detected an update time that is in the future: " + t + " > " + n), 1))
                        }, t.prototype.Io = function() {
                            var t = this;
                            null !== this.document && "function" == typeof this.document.addEventListener && (this.oo = function() {
                                t.Zr.Ps((function() {
                                    return t.inForeground = "visible" === t.document.visibilityState, t.To()
                                }))
                            }, this.document.addEventListener("visibilitychange", this.oo), this.inForeground = "visible" === this.document.visibilityState)
                        }, t.prototype.Lo = function() {
                            this.oo && (this.document.removeEventListener("visibilitychange", this.oo), this.oo = null)
                        }, t.prototype.mo = function() {
                            var t, e = this;
                            "function" == typeof(null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.ro = function() {
                                e.Mo(), e.Zr.Ps((function() {
                                    return e.ko()
                                }))
                            }, this.window.addEventListener("unload", this.ro))
                        }, t.prototype.Bo = function() {
                            this.ro && (this.window.removeEventListener("unload", this.ro), this.ro = null)
                        }, t.prototype.Oo = function(t) {
                            var e;
                            try {
                                var n = null !== (null === (e = this.Eo) || void 0 === e ? void 0 : e.getItem(this.Fo(t)));
                                return f("IndexedDbPersistence", "Client '" + t + "' " + (n ? "is" : "is not") + " zombied in LocalStorage"), n
                            } catch (t) {
                                return l("IndexedDbPersistence", "Failed to get zombied client id.", t), !1
                            }
                        }, t.prototype.Mo = function() {
                            if (this.Eo) try {
                                this.Eo.setItem(this.Fo(this.clientId), String(Date.now()))
                            } catch (t) {
                                l("Failed to set zombie client id.", t)
                            }
                        }, t.prototype.qo = function() {
                            if (this.Eo) try {
                                this.Eo.removeItem(this.Fo(this.clientId))
                            } catch (t) {}
                        }, t.prototype.Fo = function(t) {
                            return "firestore_zombie_" + this.persistenceKey + "_" + t
                        }, t
                    }();

                function Pi(t) {
                    return Cr(t, gr.store)
                }

                function Ci(t) {
                    return Cr(t, Sr.store)
                }

                function Ri(t, e) {
                    var n = t.projectId;
                    return t.o || (n += "." + t.database), "firestore/" + e + "/" + n + "/"
                }
                var Li = function(t, e) {
                        this.progress = t, this.Go = e
                    },
                    Vi = function() {
                        function t(t, e, n) {
                            this.fo = t, this.zo = e, this.Ei = n
                        }
                        return t.prototype.Ho = function(t, e) {
                            var n = this;
                            return this.zo.bi(t, e).next((function(r) {
                                return n.Jo(t, e, r)
                            }))
                        }, t.prototype.Jo = function(t, e, n) {
                            return this.fo._i(t, e).next((function(t) {
                                for (var r = 0, i = n; r < i.length; r++) t = i[r].Cs(e, t);
                                return t
                            }))
                        }, t.prototype.Yo = function(t, e, n) {
                            var r = We();
                            return e.forEach((function(t, e) {
                                for (var i = 0, o = n; i < o.length; i++) e = o[i].Cs(t, e);
                                r = r.zt(t, e)
                            })), r
                        }, t.prototype.Xo = function(t, e) {
                            var n = this;
                            return this.fo.getEntries(t, e).next((function(e) {
                                return n.Zo(t, e)
                            }))
                        }, t.prototype.Zo = function(t, e) {
                            var n = this;
                            return this.zo.vi(t, e).next((function(r) {
                                var i = n.Yo(t, e, r),
                                    o = Xe();
                                return i.forEach((function(t, e) {
                                    e || (e = new mt(t, R.min())), o = o.zt(t, e)
                                })), o
                            }))
                        }, t.prototype.Kr = function(t, e, n) {
                            return function(t) {
                                return F.wt(t.path) && null === t.collectionGroup && 0 === t.filters.length
                            }(e) ? this.tc(t, e.path) : Kt(e) ? this.ec(t, e, n) : this.nc(t, e, n)
                        }, t.prototype.tc = function(t, e) {
                            return this.Ho(t, new F(e)).next((function(t) {
                                var e = Ze();
                                return t instanceof bt && (e = e.zt(t.key, t)), e
                            }))
                        }, t.prototype.ec = function(t, e, n) {
                            var r = this,
                                i = e.collectionGroup,
                                o = Ze();
                            return this.Ei.Us(t, i).next((function(s) {
                                return Zn.forEach(s, (function(s) {
                                    var u = function(t, e) {
                                        return new qt(e, null, t.xt.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt)
                                    }(e, s.child(i));
                                    return r.nc(t, u, n).next((function(t) {
                                        t.forEach((function(t, e) {
                                            o = o.zt(t, e)
                                        }))
                                    }))
                                })).next((function() {
                                    return o
                                }))
                            }))
                        }, t.prototype.nc = function(t, e, n) {
                            var r, i, o = this;
                            return this.fo.Kr(t, e, n).next((function(n) {
                                return r = n, o.zo.Di(t, e)
                            })).next((function(e) {
                                return i = e, o.sc(t, i, r).next((function(t) {
                                    r = t;
                                    for (var e = 0, n = i; e < n.length; e++)
                                        for (var o = n[e], s = 0, u = o.mutations; s < u.length; s++) {
                                            var a = u[s],
                                                c = a.key,
                                                h = je(a, r.get(c), o.vs);
                                            r = h instanceof bt ? r.zt(c, h) : r.remove(c)
                                        }
                                }))
                            })).next((function() {
                                return r.forEach((function(t, n) {
                                    ee(e, n) || (r = r.remove(t))
                                })), r
                            }))
                        }, t.prototype.sc = function(t, e, n) {
                            for (var r = nn(), i = 0, o = e; i < o.length; i++)
                                for (var s = 0, u = o[i].mutations; s < u.length; s++) {
                                    var a = u[s];
                                    a instanceof De && null === n.get(a.key) && (r = r.add(a.key))
                                }
                            var c = n;
                            return this.fo.getEntries(t, r).next((function(t) {
                                return t.forEach((function(t, e) {
                                    null !== e && e instanceof bt && (c = c.zt(t, e))
                                })), c
                            }))
                        }, t
                    }(),
                    Mi = function() {
                        function t(t, e, n, r) {
                            this.targetId = t, this.fromCache = e, this.ic = n, this.rc = r
                        }
                        return t.oc = function(e, n) {
                            for (var r = nn(), i = nn(), o = 0, s = n.docChanges; o < s.length; o++) {
                                var u = s[o];
                                switch (u.type) {
                                    case 0:
                                        r = r.add(u.doc.key);
                                        break;
                                    case 1:
                                        i = i.add(u.doc.key)
                                }
                            }
                            return new t(e, n.fromCache, r, i)
                        }, t
                    }(),
                    Ui = function() {
                        function t() {}
                        return t.prototype.cc = function(t) {
                            this.ac = t
                        }, t.prototype.Kr = function(t, e, n, i) {
                            var o = this;
                            return function(t) {
                                return 0 === t.filters.length && null === t.limit && null == t.startAt && null == t.endAt && (0 === t.xt.length || 1 === t.xt.length && t.xt[0].field.ut())
                            }(e) || n.isEqual(R.min()) ? this.uc(t, e) : this.ac.Xo(t, i).next((function(s) {
                                var u = o.hc(e, s);
                                return (Bt(e) || Ht(e)) && o.lc(e.limitType, u, i, n) ? o.uc(t, e) : (h() <= r.a.DEBUG && f("QueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), te(e)), o.ac.Kr(t, e, n).next((function(t) {
                                    return u.forEach((function(e) {
                                        t = t.zt(e.key, e)
                                    })), t
                                })))
                            }))
                        }, t.prototype.hc = function(t, e) {
                            var n = new Qe(ne(t));
                            return e.forEach((function(e, r) {
                                r instanceof bt && ee(t, r) && (n = n.add(r))
                            })), n
                        }, t.prototype.lc = function(t, e, n, r) {
                            if (n.size !== e.size) return !0;
                            var i = "F" === t ? e.last() : e.first();
                            return !!i && (i.hasPendingWrites || i.version._(r) > 0)
                        }, t.prototype.uc = function(t, e) {
                            return h() <= r.a.DEBUG && f("QueryEngine", "Using full collection scan to execute query:", te(e)), this.ac.Kr(t, e, R.min())
                        }, t
                    }(),
                    Fi = function() {
                        function t(t, e, n, r) {
                            this.persistence = t, this._c = e, this.Qt = r, this.fc = new Ge(w), this.dc = new ii((function(t) {
                                return Et(t)
                            }), Ot), this.wc = R.min(), this.zo = t.Qo(n), this.Ec = t.$r(), this._o = t.Sr(), this.Tc = new Vi(this.Ec, this.zo, this.persistence.Ko()), this.wo = t.Wo(), this._c.cc(this.Tc)
                        }
                        return t.prototype.Ir = function(t) {
                            var e = this;
                            return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (function(n) {
                                return t.Vr(n, e.fc)
                            }))
                        }, t
                    }();

                function qi(t, e, n, r) {
                    return new Fi(t, e, n, r)
                }

                function zi(t, e) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var n, r, i, o;
                        return Object(s.d)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return n = g(t), r = n.zo, i = n.Tc, [4, n.persistence.runTransaction("Handle user change", "readonly", (function(t) {
                                        var o;
                                        return n.zo.pi(t).next((function(s) {
                                            return o = s, r = n.persistence.Qo(e), i = new Vi(n.Ec, r, n.persistence.Ko()), r.pi(t)
                                        })).next((function(e) {
                                            for (var n = [], r = [], s = nn(), u = 0, a = o; u < a.length; u++) {
                                                var c = a[u];
                                                n.push(c.batchId);
                                                for (var h = 0, f = c.mutations; h < f.length; h++) {
                                                    var l = f[h];
                                                    s = s.add(l.key)
                                                }
                                            }
                                            for (var p = 0, d = e; p < d.length; p++) {
                                                var v = d[p];
                                                r.push(v.batchId);
                                                for (var y = 0, g = v.mutations; y < g.length; y++) {
                                                    var b = g[y];
                                                    s = s.add(b.key)
                                                }
                                            }
                                            return i.Xo(t, s).next((function(t) {
                                                return {
                                                    Ic: t,
                                                    mc: n,
                                                    Ac: r
                                                }
                                            }))
                                        }))
                                    }))];
                                case 1:
                                    return o = s.sent(), [2, (n.zo = r, n.Tc = i, n._c.cc(n.Tc), o)]
                            }
                        }))
                    }))
                }

                function Gi(t, e) {
                    var n = g(t);
                    return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (function(t) {
                        var r = e.batch.keys(),
                            i = n.Ec.Nr({
                                Wr: !0
                            });
                        return function(t, e, n, r) {
                            var i = n.batch,
                                o = i.keys(),
                                s = Zn.resolve();
                            return o.forEach((function(t) {
                                s = s.next((function() {
                                    return r._i(e, t)
                                })).next((function(e) {
                                    var o = e,
                                        s = n.$s.get(t);
                                    y(null !== s), (!o || o.version._(s) < 0) && (o = i.Ss(t, o, n)) && r.ai(o, n.Ns)
                                }))
                            })), s.next((function() {
                                return t.zo.Ci(e, i)
                            }))
                        }(n, t, e, i).next((function() {
                            return i.apply(t)
                        })).next((function() {
                            return n.zo.$i(t)
                        })).next((function() {
                            return n.Tc.Xo(t, r)
                        }))
                    }))
                }

                function Bi(t) {
                    var e = g(t);
                    return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (function(t) {
                        return e._o.Qi(t)
                    }))
                }

                function Hi(t, e) {
                    var n = g(t),
                        r = e.Ot,
                        i = n.fc;
                    return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (function(t) {
                        var o = n.Ec.Nr({
                            Wr: !0
                        });
                        i = n.fc;
                        var s = [];
                        e.$e.forEach((function(e, o) {
                            var u = i.get(o);
                            if (u) {
                                s.push(n._o.sr(t, e.Qe, o).next((function() {
                                    return n._o.er(t, e.qe, o)
                                })));
                                var a = e.resumeToken;
                                if (a.l() > 0) {
                                    var c = u.Mt(a, r).kt(t.bs);
                                    i = i.zt(o, c),
                                        function(t, e, n) {
                                            return y(e.resumeToken.l() > 0), 0 === t.resumeToken.l() || e.Ot.W() - t.Ot.W() >= 3e8 || n.qe.size + n.Ue.size + n.Qe.size > 0
                                        }(u, c, e) && s.push(n._o.Hi(t, c))
                                }
                            }
                        }));
                        var u = Xe();
                        if (e.Oe.forEach((function(r, i) {
                                e.ke.has(r) && s.push(n.persistence.Ti.Fr(t, r))
                            })), s.push(Qi(t, o, e.Oe, r, void 0).next((function(t) {
                                u = t
                            }))), !r.isEqual(R.min())) {
                            var a = n._o.Qi(t).next((function(e) {
                                return n._o.Wi(t, t.bs, r)
                            }));
                            s.push(a)
                        }
                        return Zn.Mn(s).next((function() {
                            return o.apply(t)
                        })).next((function() {
                            return n.Tc.Zo(t, u)
                        }))
                    })).then((function(t) {
                        return n.fc = i, t
                    }))
                }

                function Qi(t, e, n, r, i) {
                    var o = nn();
                    return n.forEach((function(t) {
                        return o = o.add(t)
                    })), e.getEntries(t, o).next((function(t) {
                        var o = Xe();
                        return n.forEach((function(n, s) {
                            var u = t.get(n),
                                a = (null == i ? void 0 : i.get(n)) || r;
                            s instanceof mt && s.version.isEqual(R.min()) ? (e.li(n, a), o = o.zt(n, s)) : null == u || s.version._(u.version) > 0 || 0 === s.version._(u.version) && u.hasPendingWrites ? (e.ai(s, a), o = o.zt(n, s)) : f("LocalStore", "Ignoring outdated watch update for ", n, ". Current version:", u.version, " Watch version:", s.version)
                        })), o
                    }))
                }

                function Yi(t, e) {
                    var n = g(t);
                    return n.persistence.runTransaction("Get next mutation batch", "readonly", (function(t) {
                        return void 0 === e && (e = -1), n.zo.gi(t, e)
                    }))
                }

                function Ki(t, e) {
                    var n = g(t);
                    return n.persistence.runTransaction("Allocate target", "readwrite", (function(t) {
                        var r;
                        return n._o.tr(t, e).next((function(i) {
                            return i ? (r = i, Zn.resolve(r)) : n._o.Bi(t).next((function(i) {
                                return r = new ie(e, i, 0, t.bs), n._o.ji(t, r).next((function() {
                                    return r
                                }))
                            }))
                        }))
                    })).then((function(t) {
                        var r = n.fc.get(t.targetId);
                        return (null === r || t.Ot._(r.Ot) > 0) && (n.fc = n.fc.zt(t.targetId, t), n.dc.set(e, t.targetId)), t
                    }))
                }

                function Xi(t, e, n) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var r, i, o, u;
                        return Object(s.d)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    r = g(t), i = r.fc.get(e), o = n ? "readwrite" : "readwrite-primary", s.label = 1;
                                case 1:
                                    return s.trys.push([1, 4, , 5]), n ? [3, 3] : [4, r.persistence.runTransaction("Release target", o, (function(t) {
                                        return r.persistence.Ti.removeTarget(t, i)
                                    }))];
                                case 2:
                                    s.sent(), s.label = 3;
                                case 3:
                                    return [3, 5];
                                case 4:
                                    if (!rr(u = s.sent())) throw u;
                                    return f("LocalStore", "Failed to update sequence numbers for target " + e + ": " + u), [3, 5];
                                case 5:
                                    return r.fc = r.fc.remove(e), r.dc.delete(i.target), [2]
                            }
                        }))
                    }))
                }

                function Wi(t, e, n) {
                    var r = g(t),
                        i = R.min(),
                        o = nn();
                    return r.persistence.runTransaction("Execute query", "readonly", (function(t) {
                        return function(t, e, n) {
                            var r = g(t),
                                i = r.dc.get(n);
                            return void 0 !== i ? Zn.resolve(r.fc.get(i)) : r._o.tr(e, n)
                        }(r, t, Wt(e)).next((function(e) {
                            if (e) return i = e.lastLimboFreeSnapshotVersion, r._o.rr(t, e.targetId).next((function(t) {
                                o = t
                            }))
                        })).next((function() {
                            return r._c.Kr(t, e, n ? i : R.min(), n ? o : nn())
                        })).next((function(t) {
                            return {
                                documents: t,
                                Rc: o
                            }
                        }))
                    }))
                }

                function Ji(t, e) {
                    var n = g(t),
                        r = g(n._o),
                        i = n.fc.get(e);
                    return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", (function(t) {
                        return r.Sn(t, e).next((function(t) {
                            return t ? t.target : null
                        }))
                    }))
                }

                function Zi(t) {
                    var e = g(t);
                    return e.persistence.runTransaction("Get new document changes", "readonly", (function(t) {
                        return function(t, e, n) {
                            var r = g(t),
                                i = Xe(),
                                o = Fr(n),
                                s = Ni(e),
                                u = IDBKeyRange.lowerBound(o, !0);
                            return s.hs({
                                index: Er.readTimeIndex,
                                range: u
                            }, (function(t, e) {
                                var n = Mr(r.Qt, e);
                                i = i.zt(n.key, n), o = e.readTime
                            })).next((function() {
                                return {
                                    Go: i,
                                    readTime: qr(o)
                                }
                            }))
                        }(e.Ec, t, e.wc)
                    })).then((function(t) {
                        var n = t.Go,
                            r = t.readTime;
                        return e.wc = r, n
                    }))
                }

                function $i(t) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var e;
                        return Object(s.d)(this, (function(n) {
                            return [2, (e = g(t)).persistence.runTransaction("Synchronize last document change read time", "readonly", (function(t) {
                                return function(t) {
                                    var e = Ni(t),
                                        n = R.min();
                                    return e.hs({
                                        index: Er.readTimeIndex,
                                        reverse: !0
                                    }, (function(t, e, r) {
                                        e.readTime && (n = qr(e.readTime)), r.done()
                                    })).next((function() {
                                        return n
                                    }))
                                }(t)
                            })).then((function(t) {
                                e.wc = t
                            }))]
                        }))
                    }))
                }

                function to(t, e, n, r) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var i, o, u, a, c, h, f, l, p, d;
                        return Object(s.d)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    for (i = g(t), o = nn(), u = Xe(), a = tn(), c = 0, h = n; c < h.length; c++) f = h[c], l = e.Pc(f.metadata.name), f.document && (o = o.add(l)), u = u.zt(l, e.yc(f)), a = a.zt(l, e.gc(f.metadata.readTime));
                                    return p = i.Ec.Nr({
                                        Wr: !0
                                    }), [4, Ki(i, function(t) {
                                        return Wt(Gt(V.ot("__bundle__/docs/" + t)))
                                    }(r))];
                                case 1:
                                    return d = s.sent(), [2, i.persistence.runTransaction("Apply bundle documents", "readwrite", (function(t) {
                                        return Qi(t, p, u, R.min(), a).next((function(e) {
                                            return p.apply(t), e
                                        })).next((function(e) {
                                            return i._o.Yi(t, d.targetId).next((function() {
                                                return i._o.er(t, o, d.targetId)
                                            })).next((function() {
                                                return i.Tc.Zo(t, e)
                                            }))
                                        }))
                                    }))]
                            }
                        }))
                    }))
                }

                function eo(t, e, n) {
                    return void 0 === n && (n = nn()), Object(s.b)(this, void 0, void 0, (function() {
                        var r, i;
                        return Object(s.d)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, Ki(t, Wt(Yr(e.bundledQuery)))];
                                case 1:
                                    return r = o.sent(), [2, (i = g(t)).persistence.runTransaction("Save named query", "readwrite", (function(t) {
                                        var o = On(e.readTime);
                                        if (r.Ot._(o) >= 0) return i.wo.Ls(t, e);
                                        var s = r.Mt(E.T, o);
                                        return i.fc = i.fc.zt(s.targetId, s), i._o.Hi(t, s).next((function() {
                                            return i._o.Yi(t, r.targetId)
                                        })).next((function() {
                                            return i._o.er(t, n, r.targetId)
                                        })).next((function() {
                                            return i.wo.Ls(t, e)
                                        }))
                                    }))]
                            }
                        }))
                    }))
                }
                var no = function() {
                        function t(t) {
                            this.Qt = t, this.Vc = new Map, this.bc = new Map
                        }
                        return t.prototype.Os = function(t, e) {
                            return Zn.resolve(this.Vc.get(e))
                        }, t.prototype.ks = function(t, e) {
                            var n;
                            return this.Vc.set(e.id, {
                                id: (n = e).id,
                                version: n.version,
                                createTime: On(n.createTime)
                            }), Zn.resolve()
                        }, t.prototype.Ms = function(t, e) {
                            return Zn.resolve(this.bc.get(e))
                        }, t.prototype.Ls = function(t, e) {
                            return this.bc.set(e.name, function(t) {
                                return {
                                    name: t.name,
                                    query: Yr(t.bundledQuery),
                                    readTime: On(t.readTime)
                                }
                            }(e)), Zn.resolve()
                        }, t
                    }(),
                    ro = function() {
                        function t() {
                            this.vc = new Qe(io.Sc), this.Dc = new Qe(io.Cc)
                        }
                        return t.prototype.et = function() {
                            return this.vc.et()
                        }, t.prototype.nr = function(t, e) {
                            var n = new io(t, e);
                            this.vc = this.vc.add(n), this.Dc = this.Dc.add(n)
                        }, t.prototype.xc = function(t, e) {
                            var n = this;
                            t.forEach((function(t) {
                                return n.nr(t, e)
                            }))
                        }, t.prototype.ir = function(t, e) {
                            this.Nc(new io(t, e))
                        }, t.prototype.$c = function(t, e) {
                            var n = this;
                            t.forEach((function(t) {
                                return n.ir(t, e)
                            }))
                        }, t.prototype.Fc = function(t) {
                            var e = this,
                                n = new F(new V([])),
                                r = new io(n, t),
                                i = new io(n, t + 1),
                                o = [];
                            return this.Dc.me([r, i], (function(t) {
                                e.Nc(t), o.push(t.key)
                            })), o
                        }, t.prototype.Oc = function() {
                            var t = this;
                            this.vc.forEach((function(e) {
                                return t.Nc(e)
                            }))
                        }, t.prototype.Nc = function(t) {
                            this.vc = this.vc.delete(t), this.Dc = this.Dc.delete(t)
                        }, t.prototype.kc = function(t) {
                            var e = new F(new V([])),
                                n = new io(e, t),
                                r = new io(e, t + 1),
                                i = nn();
                            return this.Dc.me([n, r], (function(t) {
                                i = i.add(t.key)
                            })), i
                        }, t.prototype.Fi = function(t) {
                            var e = new io(t, 0),
                                n = this.vc.Re(e);
                            return null !== n && t.isEqual(n.key)
                        }, t
                    }(),
                    io = function() {
                        function t(t, e) {
                            this.key = t, this.Mc = e
                        }
                        return t.Sc = function(t, e) {
                            return F.H(t.key, e.key) || w(t.Mc, e.Mc)
                        }, t.Cc = function(t, e) {
                            return w(t.Mc, e.Mc) || F.H(t.key, e.key)
                        }, t
                    }(),
                    oo = function() {
                        function t(t, e) {
                            this.Ei = t, this.Ti = e, this.zo = [], this.Lc = 1, this.Bc = new Qe(io.Sc)
                        }
                        return t.prototype.Ai = function(t) {
                            return Zn.resolve(0 === this.zo.length)
                        }, t.prototype.Ri = function(t, e, n, r) {
                            var i = this.Lc;
                            this.Lc++, this.zo.length > 0 && this.zo[this.zo.length - 1];
                            var o = new Rr(i, e, n, r);
                            this.zo.push(o);
                            for (var s = 0, u = r; s < u.length; s++) {
                                var a = u[s];
                                this.Bc = this.Bc.add(new io(a.key, i)), this.Ei.qs(t, a.key.path.X())
                            }
                            return Zn.resolve(o)
                        }, t.prototype.Pi = function(t, e) {
                            return Zn.resolve(this.qc(e))
                        }, t.prototype.gi = function(t, e) {
                            var n = e + 1,
                                r = this.Uc(n),
                                i = r < 0 ? 0 : r;
                            return Zn.resolve(this.zo.length > i ? this.zo[i] : null)
                        }, t.prototype.Vi = function() {
                            return Zn.resolve(0 === this.zo.length ? -1 : this.Lc - 1)
                        }, t.prototype.pi = function(t) {
                            return Zn.resolve(this.zo.slice())
                        }, t.prototype.bi = function(t, e) {
                            var n = this,
                                r = new io(e, 0),
                                i = new io(e, Number.POSITIVE_INFINITY),
                                o = [];
                            return this.Bc.me([r, i], (function(t) {
                                var e = n.qc(t.Mc);
                                o.push(e)
                            })), Zn.resolve(o)
                        }, t.prototype.vi = function(t, e) {
                            var n = this,
                                r = new Qe(w);
                            return e.forEach((function(t) {
                                var e = new io(t, 0),
                                    i = new io(t, Number.POSITIVE_INFINITY);
                                n.Bc.me([e, i], (function(t) {
                                    r = r.add(t.Mc)
                                }))
                            })), Zn.resolve(this.Qc(r))
                        }, t.prototype.Di = function(t, e) {
                            var n = e.path,
                                r = n.length + 1,
                                i = n;
                            F.wt(i) || (i = i.child(""));
                            var o = new io(new F(i), 0),
                                s = new Qe(w);
                            return this.Bc.Ae((function(t) {
                                var e = t.key.path;
                                return !!n.nt(e) && (e.length === r && (s = s.add(t.Mc)), !0)
                            }), o), Zn.resolve(this.Qc(s))
                        }, t.prototype.Qc = function(t) {
                            var e = this,
                                n = [];
                            return t.forEach((function(t) {
                                var r = e.qc(t);
                                null !== r && n.push(r)
                            })), n
                        }, t.prototype.Ci = function(t, e) {
                            var n = this;
                            y(0 === this.Kc(e.batchId, "removed")), this.zo.shift();
                            var r = this.Bc;
                            return Zn.forEach(e.mutations, (function(i) {
                                var o = new io(i.key, e.batchId);
                                return r = r.delete(o), n.Ti.Ni(t, i.key)
                            })).next((function() {
                                n.Bc = r
                            }))
                        }, t.prototype.xi = function(t) {}, t.prototype.Fi = function(t, e) {
                            var n = new io(e, 0),
                                r = this.Bc.Re(n);
                            return Zn.resolve(e.isEqual(r && r.key))
                        }, t.prototype.$i = function(t) {
                            return this.zo.length, Zn.resolve()
                        }, t.prototype.Kc = function(t, e) {
                            return this.Uc(t)
                        }, t.prototype.Uc = function(t) {
                            return 0 === this.zo.length ? 0 : t - this.zo[0].batchId
                        }, t.prototype.qc = function(t) {
                            var e = this.Uc(t);
                            return e < 0 || e >= this.zo.length ? null : this.zo[e]
                        }, t
                    }(),
                    so = function() {
                        function t(t, e) {
                            this.Ei = t, this.Wc = e, this.docs = new Ge(F.H), this.size = 0
                        }
                        return t.prototype.ai = function(t, e, n) {
                            var r = e.key,
                                i = this.docs.get(r),
                                o = i ? i.size : 0,
                                s = this.Wc(e);
                            return this.docs = this.docs.zt(r, {
                                hi: e,
                                size: s,
                                readTime: n
                            }), this.size += s - o, this.Ei.qs(t, r.path.X())
                        }, t.prototype.li = function(t) {
                            var e = this.docs.get(t);
                            e && (this.docs = this.docs.remove(t), this.size -= e.size)
                        }, t.prototype._i = function(t, e) {
                            var n = this.docs.get(e);
                            return Zn.resolve(n ? n.hi : null)
                        }, t.prototype.getEntries = function(t, e) {
                            var n = this,
                                r = We();
                            return e.forEach((function(t) {
                                var e = n.docs.get(t);
                                r = r.zt(t, e ? e.hi : null)
                            })), Zn.resolve(r)
                        }, t.prototype.Kr = function(t, e, n) {
                            for (var r = Ze(), i = new F(e.path.child("")), o = this.docs.ee(i); o.ce();) {
                                var s = o.oe(),
                                    u = s.key,
                                    a = s.value,
                                    c = a.hi,
                                    h = a.readTime;
                                if (!e.path.nt(u.path)) break;
                                h._(n) <= 0 || c instanceof bt && ee(e, c) && (r = r.zt(c.key, c))
                            }
                            return Zn.resolve(r)
                        }, t.prototype.jc = function(t, e) {
                            return Zn.forEach(this.docs, (function(t) {
                                return e(t)
                            }))
                        }, t.prototype.Nr = function(t) {
                            return new uo(this)
                        }, t.prototype.Or = function(t) {
                            return Zn.resolve(this.size)
                        }, t
                    }(),
                    uo = function(t) {
                        function e(e) {
                            var n = this;
                            return (n = t.call(this) || this).jr = e, n
                        }
                        return Object(s.c)(e, t), e.prototype.wi = function(t) {
                            var e = this,
                                n = [];
                            return this.ri.forEach((function(r, i) {
                                i && i.hi ? n.push(e.jr.ai(t, i.hi, e.ci(r))) : e.jr.li(r)
                            })), Zn.Mn(n)
                        }, e.prototype.fi = function(t, e) {
                            return this.jr._i(t, e)
                        }, e.prototype.di = function(t, e) {
                            return this.jr.getEntries(t, e)
                        }, e
                    }(oi),
                    ao = function() {
                        function t(t) {
                            this.persistence = t, this.Gc = new ii((function(t) {
                                return Et(t)
                            }), Ot), this.lastRemoteSnapshotVersion = R.min(), this.highestTargetId = 0, this.zc = 0, this.Hc = new ro, this.targetCount = 0, this.Jc = pi.Mi()
                        }
                        return t.prototype.In = function(t, e) {
                            return this.Gc.forEach((function(t, n) {
                                return e(n)
                            })), Zn.resolve()
                        }, t.prototype.Qi = function(t) {
                            return Zn.resolve(this.lastRemoteSnapshotVersion)
                        }, t.prototype.Ki = function(t) {
                            return Zn.resolve(this.zc)
                        }, t.prototype.Bi = function(t) {
                            return this.highestTargetId = this.Jc.next(), Zn.resolve(this.highestTargetId)
                        }, t.prototype.Wi = function(t, e, n) {
                            return n && (this.lastRemoteSnapshotVersion = n), e > this.zc && (this.zc = e), Zn.resolve()
                        }, t.prototype.Gi = function(t) {
                            this.Gc.set(t.target, t);
                            var e = t.targetId;
                            e > this.highestTargetId && (this.Jc = new pi(e), this.highestTargetId = e), t.sequenceNumber > this.zc && (this.zc = t.sequenceNumber)
                        }, t.prototype.ji = function(t, e) {
                            return this.Gi(e), this.targetCount += 1, Zn.resolve()
                        }, t.prototype.Hi = function(t, e) {
                            return this.Gi(e), Zn.resolve()
                        }, t.prototype.Ji = function(t, e) {
                            return this.Gc.delete(e.target), this.Hc.Fc(e.targetId), this.targetCount -= 1, Zn.resolve()
                        }, t.prototype.Xi = function(t, e, n) {
                            var r = this,
                                i = 0,
                                o = [];
                            return this.Gc.forEach((function(s, u) {
                                u.sequenceNumber <= e && null === n.get(u.targetId) && (r.Gc.delete(s), o.push(r.Yi(t, u.targetId)), i++)
                            })), Zn.Mn(o).next((function() {
                                return i
                            }))
                        }, t.prototype.Zi = function(t) {
                            return Zn.resolve(this.targetCount)
                        }, t.prototype.tr = function(t, e) {
                            var n = this.Gc.get(e) || null;
                            return Zn.resolve(n)
                        }, t.prototype.er = function(t, e, n) {
                            return this.Hc.xc(e, n), Zn.resolve()
                        }, t.prototype.sr = function(t, e, n) {
                            this.Hc.$c(e, n);
                            var r = this.persistence.Ti,
                                i = [];
                            return r && e.forEach((function(e) {
                                i.push(r.Ni(t, e))
                            })), Zn.Mn(i)
                        }, t.prototype.Yi = function(t, e) {
                            return this.Hc.Fc(e), Zn.resolve()
                        }, t.prototype.rr = function(t, e) {
                            var n = this.Hc.kc(e);
                            return Zn.resolve(n)
                        }, t.prototype.Fi = function(t, e) {
                            return Zn.resolve(this.Hc.Fi(e))
                        }, t
                    }(),
                    co = function() {
                        function t(t, e) {
                            var n = this;
                            this.Yc = {}, this.so = new P(0), this.io = !1, this.io = !0, this.Ti = t(this), this._o = new ao(this), this.Ei = new Jr, this.fo = function(t, e) {
                                return new so(t, (function(t) {
                                    return n.Ti.Xc(t)
                                }))
                            }(this.Ei), this.Qt = new Vr(e), this.wo = new no(this.Qt)
                        }
                        return t.prototype.start = function() {
                            return Promise.resolve()
                        }, t.prototype.ko = function() {
                            return this.io = !1, Promise.resolve()
                        }, Object.defineProperty(t.prototype, "Er", {
                            get: function() {
                                return this.io
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.Po = function() {}, t.prototype.yo = function() {}, t.prototype.Ko = function() {
                            return this.Ei
                        }, t.prototype.Qo = function(t) {
                            var e = this.Yc[t.A()];
                            return e || (e = new oo(this.Ei, this.Ti), this.Yc[t.A()] = e), e
                        }, t.prototype.Sr = function() {
                            return this._o
                        }, t.prototype.$r = function() {
                            return this.fo
                        }, t.prototype.Wo = function() {
                            return this.wo
                        }, t.prototype.runTransaction = function(t, e, n) {
                            var r = this;
                            f("MemoryPersistence", "Starting transaction:", t);
                            var i = new ho(this.so.next());
                            return this.Ti.Zc(), n(i).next((function(t) {
                                return r.Ti.ta(i).next((function() {
                                    return t
                                }))
                            })).On().then((function(t) {
                                return i.Vs(), t
                            }))
                        }, t.prototype.ea = function(t, e) {
                            return Zn.Ln(Object.values(this.Yc).map((function(n) {
                                return function() {
                                    return n.Fi(t, e)
                                }
                            })))
                        }, t
                    }(),
                    ho = function(t) {
                        function e(e) {
                            var n = this;
                            return (n = t.call(this) || this).bs = e, n
                        }
                        return Object(s.c)(e, t), e
                    }(fr),
                    fo = function() {
                        function t(t) {
                            this.persistence = t, this.na = new ro, this.sa = null
                        }
                        return t.ia = function(e) {
                            return new t(e)
                        }, Object.defineProperty(t.prototype, "ra", {
                            get: function() {
                                if (this.sa) return this.sa;
                                throw v()
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.nr = function(t, e, n) {
                            return this.na.nr(n, e), this.ra.delete(n.toString()), Zn.resolve()
                        }, t.prototype.ir = function(t, e, n) {
                            return this.na.ir(n, e), this.ra.add(n.toString()), Zn.resolve()
                        }, t.prototype.Ni = function(t, e) {
                            return this.ra.add(e.toString()), Zn.resolve()
                        }, t.prototype.removeTarget = function(t, e) {
                            var n = this;
                            this.na.Fc(e.targetId).forEach((function(t) {
                                return n.ra.add(t.toString())
                            }));
                            var r = this.persistence.Sr();
                            return r.rr(t, e.targetId).next((function(t) {
                                t.forEach((function(t) {
                                    return n.ra.add(t.toString())
                                }))
                            })).next((function() {
                                return r.Ji(t, e)
                            }))
                        }, t.prototype.Zc = function() {
                            this.sa = new Set
                        }, t.prototype.ta = function(t) {
                            var e = this,
                                n = this.persistence.$r().Nr();
                            return Zn.forEach(this.ra, (function(r) {
                                var i = F._t(r);
                                return e.oa(t, i).next((function(t) {
                                    t || n.li(i)
                                }))
                            })).next((function() {
                                return e.sa = null, n.apply(t)
                            }))
                        }, t.prototype.Fr = function(t, e) {
                            var n = this;
                            return this.oa(t, e).next((function(t) {
                                t ? n.ra.delete(e.toString()) : n.ra.add(e.toString())
                            }))
                        }, t.prototype.Xc = function(t) {
                            return 0
                        }, t.prototype.oa = function(t, e) {
                            var n = this;
                            return Zn.Ln([function() {
                                return Zn.resolve(n.na.Fi(e))
                            }, function() {
                                return n.persistence.Sr().Fi(t, e)
                            }, function() {
                                return n.persistence.ea(t, e)
                            }])
                        }, t
                    }();

                function lo(t, e) {
                    return "firestore_clients_" + t + "_" + e
                }

                function po(t, e, n) {
                    var r = "firestore_mutations_" + t + "_" + n;
                    return e.m() && (r += "_" + e.uid), r
                }

                function vo(t, e) {
                    return "firestore_targets_" + t + "_" + e
                }
                var yo = function() {
                        function t(t, e, n, r) {
                            this.user = t, this.batchId = e, this.state = n, this.error = r
                        }
                        return t.ca = function(e, n, r) {
                            var i, o = JSON.parse(r),
                                s = "object" == typeof o && -1 !== ["pending", "acknowledged", "rejected"].indexOf(o.state) && (void 0 === o.error || "object" == typeof o.error);
                            return s && o.error && (s = "string" == typeof o.error.message && "string" == typeof o.error.code) && (i = new T(o.error.code, o.error.message)), s ? new t(e, n, o.state, i) : (l("SharedClientState", "Failed to parse mutation state for ID '" + n + "': " + r), null)
                        }, t.prototype.aa = function() {
                            var t = {
                                state: this.state,
                                updateTimeMs: Date.now()
                            };
                            return this.error && (t.error = {
                                code: this.error.code,
                                message: this.error.message
                            }), JSON.stringify(t)
                        }, t
                    }(),
                    go = function() {
                        function t(t, e, n) {
                            this.targetId = t, this.state = e, this.error = n
                        }
                        return t.ca = function(e, n) {
                            var r, i = JSON.parse(n),
                                o = "object" == typeof i && -1 !== ["not-current", "current", "rejected"].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error);
                            return o && i.error && (o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (r = new T(i.error.code, i.error.message)), o ? new t(e, i.state, r) : (l("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n), null)
                        }, t.prototype.aa = function() {
                            var t = {
                                state: this.state,
                                updateTimeMs: Date.now()
                            };
                            return this.error && (t.error = {
                                code: this.error.code,
                                message: this.error.message
                            }), JSON.stringify(t)
                        }, t
                    }(),
                    bo = function() {
                        function t(t, e) {
                            this.clientId = t, this.activeTargetIds = e
                        }
                        return t.ca = function(e, n) {
                            for (var r = JSON.parse(n), i = "object" == typeof r && r.activeTargetIds instanceof Array, o = on(), s = 0; i && s < r.activeTargetIds.length; ++s) i = tt(r.activeTargetIds[s]), o = o.add(r.activeTargetIds[s]);
                            return i ? new t(e, o) : (l("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n), null)
                        }, t
                    }(),
                    mo = function() {
                        function t(t, e) {
                            this.clientId = t, this.onlineState = e
                        }
                        return t.ca = function(e) {
                            var n = JSON.parse(e);
                            return "object" == typeof n && -1 !== ["Unknown", "Online", "Offline"].indexOf(n.onlineState) && "string" == typeof n.clientId ? new t(n.clientId, n.onlineState) : (l("SharedClientState", "Failed to parse online state: " + e), null)
                        }, t
                    }(),
                    wo = function() {
                        function t() {
                            this.activeTargetIds = on()
                        }
                        return t.prototype.ua = function(t) {
                            this.activeTargetIds = this.activeTargetIds.add(t)
                        }, t.prototype.ha = function(t) {
                            this.activeTargetIds = this.activeTargetIds.delete(t)
                        }, t.prototype.aa = function() {
                            var t = {
                                activeTargetIds: this.activeTargetIds.it(),
                                updateTimeMs: Date.now()
                            };
                            return JSON.stringify(t)
                        }, t
                    }(),
                    _o = function() {
                        function t(t, e, n, r, i) {
                            this.window = t, this.Zr = e, this.persistenceKey = n, this.la = r, this._a = null, this.fa = null, this.k = null, this.da = this.wa.bind(this), this.Ea = new Ge(w), this.Er = !1, this.Ta = [];
                            var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                            this.storage = this.window.localStorage, this.currentUser = i, this.Ia = lo(this.persistenceKey, this.la), this.ma = function(t) {
                                return "firestore_sequence_number_" + t
                            }(this.persistenceKey), this.Ea = this.Ea.zt(this.la, new wo), this.Aa = new RegExp("^firestore_clients_" + o + "_([^_]*)$"), this.Ra = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"), this.Pa = new RegExp("^firestore_targets_" + o + "_(\\d+)$"), this.ya = function(t) {
                                return "firestore_online_state_" + t
                            }(this.persistenceKey), this.ga = function(t) {
                                return "firestore_bundle_loaded_" + t
                            }(this.persistenceKey), this.window.addEventListener("storage", this.da)
                        }
                        return t.Kn = function(t) {
                            return !(!t || !t.localStorage)
                        }, t.prototype.start = function() {
                            return Object(s.b)(this, void 0, void 0, (function() {
                                var t, e, n, r, i, o, u, a, c, h, f, l = this;
                                return Object(s.d)(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            return [4, this._a.Uo()];
                                        case 1:
                                            for (t = s.sent(), e = 0, n = t; e < n.length; e++)(r = n[e]) !== this.la && (i = this.getItem(lo(this.persistenceKey, r))) && (o = bo.ca(r, i)) && (this.Ea = this.Ea.zt(o.clientId, o));
                                            for (this.Va(), (u = this.storage.getItem(this.ya)) && (a = this.pa(u)) && this.ba(a), c = 0, h = this.Ta; c < h.length; c++) f = h[c], this.wa(f);
                                            return this.Ta = [], this.window.addEventListener("unload", (function() {
                                                return l.ko()
                                            })), this.Er = !0, [2]
                                    }
                                }))
                            }))
                        }, t.prototype.B = function(t) {
                            this.setItem(this.ma, JSON.stringify(t))
                        }, t.prototype.va = function() {
                            return this.Sa(this.Ea)
                        }, t.prototype.Da = function(t) {
                            var e = !1;
                            return this.Ea.forEach((function(n, r) {
                                r.activeTargetIds.has(t) && (e = !0)
                            })), e
                        }, t.prototype.Ca = function(t) {
                            this.xa(t, "pending")
                        }, t.prototype.Na = function(t, e, n) {
                            this.xa(t, e, n), this.$a(t)
                        }, t.prototype.Fa = function(t) {
                            var e = "not-current";
                            if (this.Da(t)) {
                                var n = this.storage.getItem(vo(this.persistenceKey, t));
                                if (n) {
                                    var r = go.ca(t, n);
                                    r && (e = r.state)
                                }
                            }
                            return this.Oa.ua(t), this.Va(), e
                        }, t.prototype.ka = function(t) {
                            this.Oa.ha(t), this.Va()
                        }, t.prototype.Ma = function(t) {
                            return this.Oa.activeTargetIds.has(t)
                        }, t.prototype.La = function(t) {
                            this.removeItem(vo(this.persistenceKey, t))
                        }, t.prototype.Ba = function(t, e, n) {
                            this.qa(t, e, n)
                        }, t.prototype.Ua = function(t, e, n) {
                            var r = this;
                            e.forEach((function(t) {
                                r.$a(t)
                            })), this.currentUser = t, n.forEach((function(t) {
                                r.Ca(t)
                            }))
                        }, t.prototype.Qa = function(t) {
                            this.Ka(t)
                        }, t.prototype.Wa = function() {
                            this.ja()
                        }, t.prototype.ko = function() {
                            this.Er && (this.window.removeEventListener("storage", this.da), this.removeItem(this.Ia), this.Er = !1)
                        }, t.prototype.getItem = function(t) {
                            var e = this.storage.getItem(t);
                            return f("SharedClientState", "READ", t, e), e
                        }, t.prototype.setItem = function(t, e) {
                            f("SharedClientState", "SET", t, e), this.storage.setItem(t, e)
                        }, t.prototype.removeItem = function(t) {
                            f("SharedClientState", "REMOVE", t), this.storage.removeItem(t)
                        }, t.prototype.wa = function(t) {
                            var e = this,
                                n = t;
                            if (n.storageArea === this.storage) {
                                if (f("SharedClientState", "EVENT", n.key, n.newValue), n.key === this.Ia) return void l("Received WebStorage notification for local change. Another client might have garbage-collected our state");
                                this.Zr.po((function() {
                                    return Object(s.b)(e, void 0, void 0, (function() {
                                        var t, e, r, i, o, u;
                                        return Object(s.d)(this, (function(s) {
                                            if (this.Er) {
                                                if (null !== n.key)
                                                    if (this.Aa.test(n.key)) {
                                                        if (null == n.newValue) return t = this.Ga(n.key), [2, this.za(t, null)];
                                                        if (e = this.Ha(n.key, n.newValue)) return [2, this.za(e.clientId, e)]
                                                    } else if (this.Ra.test(n.key)) {
                                                    if (null !== n.newValue && (r = this.Ja(n.key, n.newValue))) return [2, this.Ya(r)]
                                                } else if (this.Pa.test(n.key)) {
                                                    if (null !== n.newValue && (i = this.Xa(n.key, n.newValue))) return [2, this.Za(i)]
                                                } else if (n.key === this.ya) {
                                                    if (null !== n.newValue && (o = this.pa(n.newValue))) return [2, this.ba(o)]
                                                } else if (n.key === this.ma)(u = function(t) {
                                                    var e = P.q;
                                                    if (null != t) try {
                                                        var n = JSON.parse(t);
                                                        y("number" == typeof n), e = n
                                                    } catch (t) {
                                                        l("SharedClientState", "Failed to read sequence number from WebStorage", t)
                                                    }
                                                    return e
                                                }(n.newValue)) !== P.q && this.k(u);
                                                else if (n.key === this.ga) return [2, this._a.tu()]
                                            } else this.Ta.push(n);
                                            return [2]
                                        }))
                                    }))
                                }))
                            }
                        }, Object.defineProperty(t.prototype, "Oa", {
                            get: function() {
                                return this.Ea.get(this.la)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.Va = function() {
                            this.setItem(this.Ia, this.Oa.aa())
                        }, t.prototype.xa = function(t, e, n) {
                            var r = new yo(this.currentUser, t, e, n),
                                i = po(this.persistenceKey, this.currentUser, t);
                            this.setItem(i, r.aa())
                        }, t.prototype.$a = function(t) {
                            var e = po(this.persistenceKey, this.currentUser, t);
                            this.removeItem(e)
                        }, t.prototype.Ka = function(t) {
                            var e = {
                                clientId: this.la,
                                onlineState: t
                            };
                            this.storage.setItem(this.ya, JSON.stringify(e))
                        }, t.prototype.qa = function(t, e, n) {
                            var r = vo(this.persistenceKey, t),
                                i = new go(t, e, n);
                            this.setItem(r, i.aa())
                        }, t.prototype.ja = function() {
                            this.setItem(this.ga, "value-not-used")
                        }, t.prototype.Ga = function(t) {
                            var e = this.Aa.exec(t);
                            return e ? e[1] : null
                        }, t.prototype.Ha = function(t, e) {
                            var n = this.Ga(t);
                            return bo.ca(n, e)
                        }, t.prototype.Ja = function(t, e) {
                            var n = this.Ra.exec(t),
                                r = Number(n[1]),
                                i = void 0 !== n[2] ? n[2] : null;
                            return yo.ca(new N(i), r, e)
                        }, t.prototype.Xa = function(t, e) {
                            var n = this.Pa.exec(t),
                                r = Number(n[1]);
                            return go.ca(r, e)
                        }, t.prototype.pa = function(t) {
                            return mo.ca(t)
                        }, t.prototype.Ya = function(t) {
                            return Object(s.b)(this, void 0, void 0, (function() {
                                return Object(s.d)(this, (function(e) {
                                    return t.user.uid === this.currentUser.uid ? [2, this._a.eu(t.batchId, t.state, t.error)] : (f("SharedClientState", "Ignoring mutation for non-active user " + t.user.uid), [2])
                                }))
                            }))
                        }, t.prototype.Za = function(t) {
                            return this._a.nu(t.targetId, t.state, t.error)
                        }, t.prototype.za = function(t, e) {
                            var n = this,
                                r = e ? this.Ea.zt(t, e) : this.Ea.remove(t),
                                i = this.Sa(this.Ea),
                                o = this.Sa(r),
                                s = [],
                                u = [];
                            return o.forEach((function(t) {
                                i.has(t) || s.push(t)
                            })), i.forEach((function(t) {
                                o.has(t) || u.push(t)
                            })), this._a.su(s, u).then((function() {
                                n.Ea = r
                            }))
                        }, t.prototype.ba = function(t) {
                            this.Ea.get(t.clientId) && this.fa(t.onlineState)
                        }, t.prototype.Sa = function(t) {
                            var e = on();
                            return t.forEach((function(t, n) {
                                e = e.Pe(n.activeTargetIds)
                            })), e
                        }, t
                    }(),
                    Io = function() {
                        function t() {
                            this.iu = new wo, this.ru = {}, this.fa = null, this.k = null
                        }
                        return t.prototype.Ca = function(t) {}, t.prototype.Na = function(t, e, n) {}, t.prototype.Fa = function(t) {
                            return this.iu.ua(t), this.ru[t] || "not-current"
                        }, t.prototype.Ba = function(t, e, n) {
                            this.ru[t] = e
                        }, t.prototype.ka = function(t) {
                            this.iu.ha(t)
                        }, t.prototype.Ma = function(t) {
                            return this.iu.activeTargetIds.has(t)
                        }, t.prototype.La = function(t) {
                            delete this.ru[t]
                        }, t.prototype.va = function() {
                            return this.iu.activeTargetIds
                        }, t.prototype.Da = function(t) {
                            return this.iu.activeTargetIds.has(t)
                        }, t.prototype.start = function() {
                            return this.iu = new wo, Promise.resolve()
                        }, t.prototype.Ua = function(t, e, n) {}, t.prototype.Qa = function(t) {}, t.prototype.ko = function() {}, t.prototype.B = function(t) {}, t.prototype.Wa = function() {}, t
                    }(),
                    Eo = function() {
                        function t() {}
                        return t.prototype.ou = function(t) {}, t.prototype.ko = function() {}, t
                    }(),
                    Oo = function() {
                        function t() {
                            var t = this;
                            this.cu = function() {
                                return t.au()
                            }, this.uu = function() {
                                return t.hu()
                            }, this.lu = [], this._u()
                        }
                        return t.prototype.ou = function(t) {
                            this.lu.push(t)
                        }, t.prototype.ko = function() {
                            window.removeEventListener("online", this.cu), window.removeEventListener("offline", this.uu)
                        }, t.prototype._u = function() {
                            window.addEventListener("online", this.cu), window.addEventListener("offline", this.uu)
                        }, t.prototype.au = function() {
                            f("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
                            for (var t = 0, e = this.lu; t < e.length; t++)(0, e[t])(0)
                        }, t.prototype.hu = function() {
                            f("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
                            for (var t = 0, e = this.lu; t < e.length; t++)(0, e[t])(1)
                        }, t.Kn = function() {
                            return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener
                        }, t
                    }(),
                    To = {
                        BatchGetDocuments: "batchGet",
                        Commit: "commit",
                        RunQuery: "runQuery"
                    },
                    jo = function() {
                        function t(t) {
                            this.fu = t.fu, this.du = t.du
                        }
                        return t.prototype.wu = function(t) {
                            this.Eu = t
                        }, t.prototype.Tu = function(t) {
                            this.Iu = t
                        }, t.prototype.onMessage = function(t) {
                            this.mu = t
                        }, t.prototype.close = function() {
                            this.du()
                        }, t.prototype.send = function(t) {
                            this.fu(t)
                        }, t.prototype.Au = function() {
                            this.Eu()
                        }, t.prototype.Ru = function(t) {
                            this.Iu(t)
                        }, t.prototype.Pu = function(t) {
                            this.mu(t)
                        }, t
                    }(),
                    No = function(t) {
                        function e(e) {
                            var n = this;
                            return (n = t.call(this, e) || this).forceLongPolling = e.forceLongPolling, n.i = e.i, n
                        }
                        return Object(s.c)(e, t), e.prototype.Su = function(t, e, n, r) {
                            return new Promise((function(i, s) {
                                var u = new o.f;
                                u.listenOnce(o.c.COMPLETE, (function() {
                                    try {
                                        switch (u.getLastErrorCode()) {
                                            case o.a.NO_ERROR:
                                                var e = u.getResponseJson();
                                                f("Connection", "XHR received:", JSON.stringify(e)), i(e);
                                                break;
                                            case o.a.TIMEOUT:
                                                f("Connection", 'RPC "' + t + '" timed out'), s(new T(O.DEADLINE_EXCEEDED, "Request time out"));
                                                break;
                                            case o.a.HTTP_ERROR:
                                                var n = u.getStatus();
                                                if (f("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", u.getResponseText()), n > 0) {
                                                    var r = u.getResponseJson().error;
                                                    if (r && r.status && r.message) {
                                                        var a = function(t) {
                                                            var e = t.toLowerCase().replace(/_/g, "-");
                                                            return Object.values(O).indexOf(e) >= 0 ? e : O.UNKNOWN
                                                        }(r.status);
                                                        s(new T(a, r.message))
                                                    } else s(new T(O.UNKNOWN, "Server responded with status " + u.getStatus()))
                                                } else s(new T(O.UNAVAILABLE, "Connection failed."));
                                                break;
                                            default:
                                                v()
                                        }
                                    } finally {
                                        f("Connection", 'RPC "' + t + '" completed.')
                                    }
                                }));
                                var a = JSON.stringify(r);
                                u.send(e, "POST", a, n, 15)
                            }))
                        }, e.prototype.Cu = function(t, e) {
                            var n = [this.gu, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
                                r = Object(o.g)(),
                                s = Object(o.h)(),
                                u = {
                                    httpSessionIdParam: "gsessionid",
                                    initMessageHeaders: {},
                                    messageUrlParams: {
                                        database: "projects/" + this.t.projectId + "/databases/" + this.t.database
                                    },
                                    sendRawJson: !0,
                                    supportsCrossDomainXhr: !0,
                                    internalChannelParams: {
                                        forwardChannelRequestTimeoutMs: 6e5
                                    },
                                    forceLongPolling: this.forceLongPolling,
                                    detectBufferingProxy: this.i
                                };
                            this.vu(u.initMessageHeaders, e), Object(i.n)() || Object(i.p)() || Object(i.l)() || Object(i.m)() || Object(i.q)() || Object(i.k)() || (u.httpHeadersOverwriteParam = "$httpHeaders");
                            var a = n.join("");
                            f("Connection", "Creating WebChannel: " + a, u);
                            var c = r.createWebChannel(a, u),
                                h = !1,
                                l = !1,
                                d = new jo({
                                    fu: function(t) {
                                        l ? f("Connection", "Not sending because WebChannel is closed:", t) : (h || (f("Connection", "Opening WebChannel transport."), c.open(), h = !0), f("Connection", "WebChannel sending:", t), c.send(t))
                                    },
                                    du: function() {
                                        return c.close()
                                    }
                                }),
                                v = function(t, e, n) {
                                    t.listen(e, (function(t) {
                                        try {
                                            n(t)
                                        } catch (t) {
                                            setTimeout((function() {
                                                throw t
                                            }), 0)
                                        }
                                    }))
                                };
                            return v(c, o.e.EventType.OPEN, (function() {
                                l || f("Connection", "WebChannel transport opened.")
                            })), v(c, o.e.EventType.CLOSE, (function() {
                                l || (l = !0, f("Connection", "WebChannel transport closed"), d.Ru())
                            })), v(c, o.e.EventType.ERROR, (function(t) {
                                l || (l = !0, p("Connection", "WebChannel transport errored:", t), d.Ru(new T(O.UNAVAILABLE, "The operation could not be completed")))
                            })), v(c, o.e.EventType.MESSAGE, (function(t) {
                                var e;
                                if (!l) {
                                    var n = t.data[0];
                                    y(!!n);
                                    var r = n,
                                        i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
                                    if (i) {
                                        f("Connection", "WebChannel received error:", i);
                                        var o = i.status,
                                            s = function(t) {
                                                var e = Le[t];
                                                if (void 0 !== e) return ze(e)
                                            }(o),
                                            u = i.message;
                                        void 0 === s && (s = O.INTERNAL, u = "Unknown error status: " + o + " with message " + i.message), l = !0, d.Ru(new T(s, u)), c.close()
                                    } else f("Connection", "WebChannel received:", n), d.Pu(n)
                                }
                            })), v(s, o.b.STAT_EVENT, (function(t) {
                                t.stat === o.d.PROXY ? f("Connection", "Detected buffering proxy") : t.stat === o.d.NOPROXY && f("Connection", "Detected no buffering proxy")
                            })), setTimeout((function() {
                                d.Au()
                            }), 0), d
                        }, e
                    }(function() {
                        function t(t) {
                            this.yu = t, this.t = t.t;
                            var e = t.ssl ? "https" : "http";
                            this.gu = e + "://" + t.host, this.Vu = "projects/" + this.t.projectId + "/databases/" + this.t.database + "/documents"
                        }
                        return t.prototype.pu = function(t, e, n, r) {
                            var i = this.bu(t, e);
                            f("RestConnection", "Sending: ", i, n);
                            var o = {};
                            return this.vu(o, r), this.Su(t, i, o, n).then((function(t) {
                                return f("RestConnection", "Received: ", t), t
                            }), (function(e) {
                                throw p("RestConnection", t + " failed with error: ", e, "url: ", i, "request:", n), e
                            }))
                        }, t.prototype.Du = function(t, e, n, r) {
                            return this.pu(t, e, n, r)
                        }, t.prototype.vu = function(t, e) {
                            if (t["X-Goog-Api-Client"] = "gl-js/ fire/8.2.9", t["Content-Type"] = "text/plain", e)
                                for (var n in e.g) e.g.hasOwnProperty(n) && (t[n] = e.g[n])
                        }, t.prototype.bu = function(t, e) {
                            var n = To[t];
                            return this.gu + "/v1/" + e + ":" + n
                        }, t
                    }());

                function Ao() {
                    return "undefined" != typeof window ? window : null
                }

                function So() {
                    return "undefined" != typeof document ? document : null
                }

                function xo(t) {
                    return new wn(t, !0)
                }
                var Do = function() {
                        function t(t, e, n, r, i) {
                            void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), this.Zr = t, this.fs = e, this.xu = n, this.Nu = r, this.$u = i, this.Fu = 0, this.Ou = null, this.ku = Date.now(), this.reset()
                        }
                        return t.prototype.reset = function() {
                            this.Fu = 0
                        }, t.prototype.Mu = function() {
                            this.Fu = this.$u
                        }, t.prototype.Lu = function(t) {
                            var e = this;
                            this.cancel();
                            var n = Math.floor(this.Fu + this.Bu()),
                                r = Math.max(0, Date.now() - this.ku),
                                i = Math.max(0, n - r);
                            i > 0 && f("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.Fu + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), this.Ou = this.Zr.Tr(this.fs, i, (function() {
                                return e.ku = Date.now(), t()
                            })), this.Fu *= this.Nu, this.Fu < this.xu && (this.Fu = this.xu), this.Fu > this.$u && (this.Fu = this.$u)
                        }, t.prototype.qu = function() {
                            null !== this.Ou && (this.Ou.Rs(), this.Ou = null)
                        }, t.prototype.cancel = function() {
                            null !== this.Ou && (this.Ou.cancel(), this.Ou = null)
                        }, t.prototype.Bu = function() {
                            return (Math.random() - .5) * this.Fu
                        }, t
                    }(),
                    ko = function() {
                        function t(t, e, n, r, i, o) {
                            this.Zr = t, this.Uu = n, this.Qu = r, this.Ku = i, this.listener = o, this.state = 0, this.Wu = 0, this.ju = null, this.stream = null, this.Gu = new Do(t, e)
                        }
                        return t.prototype.zu = function() {
                            return 1 === this.state || 2 === this.state || 4 === this.state
                        }, t.prototype.Hu = function() {
                            return 2 === this.state
                        }, t.prototype.start = function() {
                            3 !== this.state ? this.auth() : this.Ju()
                        }, t.prototype.stop = function() {
                            return Object(s.b)(this, void 0, void 0, (function() {
                                return Object(s.d)(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.zu() ? [4, this.close(0)] : [3, 2];
                                        case 1:
                                            t.sent(), t.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                }))
                            }))
                        }, t.prototype.Yu = function() {
                            this.state = 0, this.Gu.reset()
                        }, t.prototype.Xu = function() {
                            var t = this;
                            this.Hu() && null === this.ju && (this.ju = this.Zr.Tr(this.Uu, 6e4, (function() {
                                return t.Zu()
                            })))
                        }, t.prototype.th = function(t) {
                            this.eh(), this.stream.send(t)
                        }, t.prototype.Zu = function() {
                            return Object(s.b)(this, void 0, void 0, (function() {
                                return Object(s.d)(this, (function(t) {
                                    return this.Hu() ? [2, this.close(0)] : [2]
                                }))
                            }))
                        }, t.prototype.eh = function() {
                            this.ju && (this.ju.cancel(), this.ju = null)
                        }, t.prototype.close = function(t, e) {
                            return Object(s.b)(this, void 0, void 0, (function() {
                                return Object(s.d)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return this.eh(), this.Gu.cancel(), this.Wu++, 3 !== t ? this.Gu.reset() : e && e.code === O.RESOURCE_EXHAUSTED ? (l(e.toString()), l("Using maximum backoff delay to prevent overloading the backend."), this.Gu.Mu()) : e && e.code === O.UNAUTHENTICATED && this.Ku.p(), null !== this.stream && (this.nh(), this.stream.close(), this.stream = null), this.state = t, [4, this.listener.Tu(e)];
                                        case 1:
                                            return n.sent(), [2]
                                    }
                                }))
                            }))
                        }, t.prototype.nh = function() {}, t.prototype.auth = function() {
                            var t = this;
                            this.state = 1;
                            var e = this.sh(this.Wu),
                                n = this.Wu;
                            this.Ku.getToken().then((function(e) {
                                t.Wu === n && t.ih(e)
                            }), (function(n) {
                                e((function() {
                                    var e = new T(O.UNKNOWN, "Fetching auth token failed: " + n.message);
                                    return t.rh(e)
                                }))
                            }))
                        }, t.prototype.ih = function(t) {
                            var e = this,
                                n = this.sh(this.Wu);
                            this.stream = this.oh(t), this.stream.wu((function() {
                                n((function() {
                                    return e.state = 2, e.listener.wu()
                                }))
                            })), this.stream.Tu((function(t) {
                                n((function() {
                                    return e.rh(t)
                                }))
                            })), this.stream.onMessage((function(t) {
                                n((function() {
                                    return e.onMessage(t)
                                }))
                            }))
                        }, t.prototype.Ju = function() {
                            var t = this;
                            this.state = 4, this.Gu.Lu((function() {
                                return Object(s.b)(t, void 0, void 0, (function() {
                                    return Object(s.d)(this, (function(t) {
                                        return this.state = 0, this.start(), [2]
                                    }))
                                }))
                            }))
                        }, t.prototype.rh = function(t) {
                            return f("PersistentStream", "close with error: " + t), this.stream = null, this.close(3, t)
                        }, t.prototype.sh = function(t) {
                            var e = this;
                            return function(n) {
                                e.Zr.Ps((function() {
                                    return e.Wu === t ? n() : (f("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve())
                                }))
                            }
                        }, t
                    }(),
                    Po = function(t) {
                        function e(e, n, r, i, o) {
                            var s = this;
                            return (s = t.call(this, e, "listen_stream_connection_backoff", "listen_stream_idle", n, r, o) || this).Qt = i, s
                        }
                        return Object(s.c)(e, t), e.prototype.oh = function(t) {
                            return this.Qu.Cu("Listen", t)
                        }, e.prototype.onMessage = function(t) {
                            this.Gu.reset();
                            var e = function(t, e) {
                                    var n;
                                    if ("targetChange" in e) {
                                        e.targetChange;
                                        var r = function(t) {
                                                return "NO_CHANGE" === t ? 0 : "ADD" === t ? 1 : "REMOVE" === t ? 2 : "CURRENT" === t ? 3 : "RESET" === t ? 4 : v()
                                            }(e.targetChange.targetChangeType || "NO_CHANGE"),
                                            i = e.targetChange.targetIds || [],
                                            o = function(t, e) {
                                                return t.Bt ? (y(void 0 === e || "string" == typeof e), E.fromBase64String(e || "")) : (y(void 0 === e || e instanceof Uint8Array), E.fromUint8Array(e || new Uint8Array))
                                            }(t, e.targetChange.resumeToken),
                                            s = (u = e.targetChange.cause) && function(t) {
                                                var e = void 0 === t.code ? O.UNKNOWN : ze(t.code);
                                                return new T(e, t.message || "")
                                            }(u);
                                        n = new pn(r, i, o, s || null)
                                    } else if ("documentChange" in e) {
                                        e.documentChange, (r = e.documentChange).document, r.document.name, r.document.updateTime, i = An(t, r.document.name), o = On(r.document.updateTime);
                                        var u = new dt({
                                                mapValue: {
                                                    fields: r.document.fields
                                                }
                                            }),
                                            a = (s = new bt(i, o, u, {}), r.targetIds || []),
                                            c = r.removedTargetIds || [];
                                        n = new fn(a, c, s.key, s)
                                    } else if ("documentDelete" in e) e.documentDelete, (r = e.documentDelete).document, i = An(t, r.document), o = r.readTime ? On(r.readTime) : R.min(), u = new mt(i, o), s = r.removedTargetIds || [], n = new fn([], s, u.key, u);
                                    else if ("documentRemove" in e) e.documentRemove, (r = e.documentRemove).document, i = An(t, r.document), o = r.removedTargetIds || [], n = new fn([], o, i, null);
                                    else {
                                        if (!("filter" in e)) return v();
                                        e.filter;
                                        var h = e.filter;
                                        h.targetId, r = h.count || 0, i = new Fe(r), o = h.targetId, n = new ln(o, i)
                                    }
                                    return n
                                }(this.Qt, t),
                                n = function(t) {
                                    if (!("targetChange" in t)) return R.min();
                                    var e = t.targetChange;
                                    return e.targetIds && e.targetIds.length ? R.min() : e.readTime ? On(e.readTime) : R.min()
                                }(t);
                            return this.listener.ah(e, n)
                        }, e.prototype.uh = function(t) {
                            var e = {};
                            e.database = Dn(this.Qt), e.addTarget = function(t, e) {
                                var n, r = e.target;
                                return (n = Tt(r) ? {
                                    documents: Vn(t, r)
                                } : {
                                    query: Mn(t, r)
                                }).targetId = e.targetId, e.resumeToken.l() > 0 ? n.resumeToken = In(t, e.resumeToken) : e.Ot._(R.min()) > 0 && (n.readTime = _n(t, e.Ot.j())), n
                            }(this.Qt, t);
                            var n = function(t, e) {
                                var n = function(t, e) {
                                    switch (e) {
                                        case 0:
                                            return null;
                                        case 1:
                                            return "existence-filter-mismatch";
                                        case 2:
                                            return "limbo-document";
                                        default:
                                            return v()
                                    }
                                }(0, e.Ft);
                                return null == n ? null : {
                                    "goog-listen-tags": n
                                }
                            }(this.Qt, t);
                            n && (e.labels = n), this.th(e)
                        }, e.prototype.hh = function(t) {
                            var e = {};
                            e.database = Dn(this.Qt), e.removeTarget = t, this.th(e)
                        }, e
                    }(ko),
                    Co = function(t) {
                        function e(e, n, r, i, o) {
                            var s = this;
                            return (s = t.call(this, e, "write_stream_connection_backoff", "write_stream_idle", n, r, o) || this).Qt = i, s.lh = !1, s
                        }
                        return Object(s.c)(e, t), Object.defineProperty(e.prototype, "_h", {
                            get: function() {
                                return this.lh
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.start = function() {
                            this.lh = !1, this.lastStreamToken = void 0, t.prototype.start.call(this)
                        }, e.prototype.nh = function() {
                            this.lh && this.fh([])
                        }, e.prototype.oh = function(t) {
                            return this.Qu.Cu("Write", t)
                        }, e.prototype.onMessage = function(t) {
                            if (y(!!t.streamToken), this.lastStreamToken = t.streamToken, this.lh) {
                                this.Gu.reset();
                                var e = function(t, e) {
                                        return t && t.length > 0 ? (y(void 0 !== e), t.map((function(t) {
                                            return function(t, e) {
                                                var n = t.updateTime ? On(t.updateTime) : On(e);
                                                n.isEqual(R.min()) && (n = On(e));
                                                var r = null;
                                                return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults), new _e(n, r)
                                            }(t, e)
                                        }))) : []
                                    }(t.writeResults, t.commitTime),
                                    n = On(t.commitTime);
                                return this.listener.dh(n, e)
                            }
                            return y(!t.writeResults || 0 === t.writeResults.length), this.lh = !0, this.listener.wh()
                        }, e.prototype.Eh = function() {
                            var t = {};
                            t.database = Dn(this.Qt), this.th(t)
                        }, e.prototype.fh = function(t) {
                            var e = this,
                                n = {
                                    streamToken: this.lastStreamToken,
                                    writes: t.map((function(t) {
                                        return Rn(e.Qt, t)
                                    }))
                                };
                            this.th(n)
                        }, e
                    }(ko),
                    Ro = function(t) {
                        function e(e, n, r) {
                            var i = this;
                            return (i = t.call(this) || this).credentials = e, i.Qu = n, i.Qt = r, i.Th = !1, i
                        }
                        return Object(s.c)(e, t), e.prototype.Ih = function() {
                            if (this.Th) throw new T(O.FAILED_PRECONDITION, "The client has already been terminated.")
                        }, e.prototype.pu = function(t, e, n) {
                            var r = this;
                            return this.Ih(), this.credentials.getToken().then((function(i) {
                                return r.Qu.pu(t, e, n, i)
                            })).catch((function(t) {
                                throw t.code === O.UNAUTHENTICATED && r.credentials.p(), t
                            }))
                        }, e.prototype.Du = function(t, e, n) {
                            var r = this;
                            return this.Ih(), this.credentials.getToken().then((function(i) {
                                return r.Qu.Du(t, e, n, i)
                            })).catch((function(t) {
                                throw t.code === O.UNAUTHENTICATED && r.credentials.p(), t
                            }))
                        }, e.prototype.terminate = function() {
                            this.Th = !1
                        }, e
                    }((function() {})),
                    Lo = function() {
                        function t(t, e) {
                            this._s = t, this.fa = e, this.state = "Unknown", this.mh = 0, this.Ah = null, this.Rh = !0
                        }
                        return t.prototype.Ph = function() {
                            var t = this;
                            0 === this.mh && (this.yh("Unknown"), this.Ah = this._s.Tr("online_state_timeout", 1e4, (function() {
                                return t.Ah = null, t.gh("Backend didn't respond within 10 seconds."), t.yh("Offline"), Promise.resolve()
                            })))
                        }, t.prototype.Vh = function(t) {
                            "Online" === this.state ? this.yh("Unknown") : (this.mh++, this.mh >= 1 && (this.ph(), this.gh("Connection failed 1 times. Most recent error: " + t.toString()), this.yh("Offline")))
                        }, t.prototype.set = function(t) {
                            this.ph(), this.mh = 0, "Online" === t && (this.Rh = !1), this.yh(t)
                        }, t.prototype.yh = function(t) {
                            t !== this.state && (this.state = t, this.fa(t))
                        }, t.prototype.gh = function(t) {
                            var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
                            this.Rh ? (l(e), this.Rh = !1) : f("OnlineStateTracker", e)
                        }, t.prototype.ph = function() {
                            null !== this.Ah && (this.Ah.cancel(), this.Ah = null)
                        }, t
                    }(),
                    Vo = function(t, e, n, r, i) {
                        var o = this;
                        this.bh = t, this.Sh = e, this._s = n, this.Dh = {}, this.Ch = [], this.xh = new Map, this.Nh = new Set, this.$h = [], this.Fh = i, this.Fh.ou((function(t) {
                            n.Ps((function() {
                                return Object(s.b)(o, void 0, void 0, (function() {
                                    return Object(s.d)(this, (function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return Qo(this) ? (f("RemoteStore", "Restarting streams for network reachability change."), [4, function(t) {
                                                    return Object(s.b)(this, void 0, void 0, (function() {
                                                        var e;
                                                        return Object(s.d)(this, (function(n) {
                                                            switch (n.label) {
                                                                case 0:
                                                                    return (e = g(t)).Nh.add(4), [4, Uo(e)];
                                                                case 1:
                                                                    return n.sent(), e.Oh.set("Unknown"), e.Nh.delete(4), [4, Mo(e)];
                                                                case 2:
                                                                    return n.sent(), [2]
                                                            }
                                                        }))
                                                    }))
                                                }(this)]) : [3, 2];
                                            case 1:
                                                t.sent(), t.label = 2;
                                            case 2:
                                                return [2]
                                        }
                                    }))
                                }))
                            }))
                        })), this.Oh = new Lo(n, r)
                    };

                function Mo(t) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var e, n;
                        return Object(s.d)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    if (!Qo(t)) return [3, 4];
                                    e = 0, n = t.$h, r.label = 1;
                                case 1:
                                    return e < n.length ? [4, (0, n[e])(!0)] : [3, 4];
                                case 2:
                                    r.sent(), r.label = 3;
                                case 3:
                                    return e++, [3, 1];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }

                function Uo(t) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var e, n;
                        return Object(s.d)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    e = 0, n = t.$h, r.label = 1;
                                case 1:
                                    return e < n.length ? [4, (0, n[e])(!1)] : [3, 4];
                                case 2:
                                    r.sent(), r.label = 3;
                                case 3:
                                    return e++, [3, 1];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }

                function Fo(t, e) {
                    var n = g(t);
                    n.xh.has(e.targetId) || (n.xh.set(e.targetId, e), Ho(n) ? Bo(n) : us(n).Hu() && zo(n, e))
                }

                function qo(t, e) {
                    var n = g(t),
                        r = us(n);
                    n.xh.delete(e), r.Hu() && Go(n, e), 0 === n.xh.size && (r.Hu() ? r.Xu() : Qo(n) && n.Oh.set("Unknown"))
                }

                function zo(t, e) {
                    t.kh.on(e.targetId), us(t).uh(e)
                }

                function Go(t, e) {
                    t.kh.on(e), us(t).hh(e)
                }

                function Bo(t) {
                    t.kh = new vn({
                        vn: function(e) {
                            return t.Dh.vn(e)
                        },
                        Sn: function(e) {
                            return t.xh.get(e) || null
                        }
                    }), us(t).start(), t.Oh.Ph()
                }

                function Ho(t) {
                    return Qo(t) && !us(t).zu() && t.xh.size > 0
                }

                function Qo(t) {
                    return 0 === g(t).Nh.size
                }

                function Yo(t) {
                    t.kh = void 0
                }

                function Ko(t) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        return Object(s.d)(this, (function(e) {
                            return t.xh.forEach((function(e, n) {
                                zo(t, e)
                            })), [2]
                        }))
                    }))
                }

                function Xo(t, e) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        return Object(s.d)(this, (function(n) {
                            return Yo(t), Ho(t) ? (t.Oh.Vh(e), Bo(t)) : t.Oh.set("Unknown"), [2]
                        }))
                    }))
                }

                function Wo(t, e, n) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var r, i, o;
                        return Object(s.d)(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    if (t.Oh.set("Online"), !(e instanceof pn && 2 === e.state && e.cause)) return [3, 6];
                                    u.label = 1;
                                case 1:
                                    return u.trys.push([1, 3, , 5]), [4, function(t, e) {
                                        return Object(s.b)(this, void 0, void 0, (function() {
                                            var n, r, i, o;
                                            return Object(s.d)(this, (function(s) {
                                                switch (s.label) {
                                                    case 0:
                                                        n = e.cause, r = 0, i = e.targetIds, s.label = 1;
                                                    case 1:
                                                        return r < i.length ? (o = i[r], t.xh.has(o) ? [4, t.Dh.Mh(o, n)] : [3, 3]) : [3, 5];
                                                    case 2:
                                                        s.sent(), t.xh.delete(o), t.kh.removeTarget(o), s.label = 3;
                                                    case 3:
                                                        s.label = 4;
                                                    case 4:
                                                        return r++, [3, 1];
                                                    case 5:
                                                        return [2]
                                                }
                                            }))
                                        }))
                                    }(t, e)];
                                case 2:
                                    return u.sent(), [3, 5];
                                case 3:
                                    return r = u.sent(), f("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), r), [4, Jo(t, r)];
                                case 4:
                                    return u.sent(), [3, 5];
                                case 5:
                                    return [3, 13];
                                case 6:
                                    if (e instanceof fn ? t.kh.dn(e) : e instanceof ln ? t.kh.Pn(e) : t.kh.Tn(e), n.isEqual(R.min())) return [3, 13];
                                    u.label = 7;
                                case 7:
                                    return u.trys.push([7, 11, , 13]), [4, Bi(t.bh)];
                                case 8:
                                    return i = u.sent(), n._(i) >= 0 ? [4, function(t, e) {
                                        var n = t.kh.Vn(e);
                                        return n.$e.forEach((function(n, r) {
                                            if (n.resumeToken.l() > 0) {
                                                var i = t.xh.get(r);
                                                i && t.xh.set(r, i.Mt(n.resumeToken, e))
                                            }
                                        })), n.Fe.forEach((function(e) {
                                            var n = t.xh.get(e);
                                            if (n) {
                                                t.xh.set(e, n.Mt(E.T, n.Ot)), Go(t, e);
                                                var r = new ie(n.target, e, 1, n.sequenceNumber);
                                                zo(t, r)
                                            }
                                        })), t.Dh.Lh(n)
                                    }(t, n)] : [3, 10];
                                case 9:
                                    u.sent(), u.label = 10;
                                case 10:
                                    return [3, 13];
                                case 11:
                                    return f("RemoteStore", "Failed to raise snapshot:", o = u.sent()), [4, Jo(t, o)];
                                case 12:
                                    return u.sent(), [3, 13];
                                case 13:
                                    return [2]
                            }
                        }))
                    }))
                }

                function Jo(t, e, n) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var r = this;
                        return Object(s.d)(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    if (!rr(e)) throw e;
                                    return t.Nh.add(1), [4, Uo(t)];
                                case 1:
                                    return i.sent(), t.Oh.set("Offline"), n || (n = function() {
                                        return Bi(t.bh)
                                    }), t._s.po((function() {
                                        return Object(s.b)(r, void 0, void 0, (function() {
                                            return Object(s.d)(this, (function(e) {
                                                switch (e.label) {
                                                    case 0:
                                                        return f("RemoteStore", "Retrying IndexedDB access"), [4, n()];
                                                    case 1:
                                                        return e.sent(), t.Nh.delete(1), [4, Mo(t)];
                                                    case 2:
                                                        return e.sent(), [2]
                                                }
                                            }))
                                        }))
                                    })), [2]
                            }
                        }))
                    }))
                }

                function Zo(t, e) {
                    return e().catch((function(n) {
                        return Jo(t, n, e)
                    }))
                }

                function $o(t) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var e, n, r, i, o;
                        return Object(s.d)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    e = g(t), n = as(e), r = e.Ch.length > 0 ? e.Ch[e.Ch.length - 1].batchId : -1, s.label = 1;
                                case 1:
                                    if (! function(t) {
                                            return Qo(t) && t.Ch.length < 10
                                        }(e)) return [3, 7];
                                    s.label = 2;
                                case 2:
                                    return s.trys.push([2, 4, , 6]), [4, Yi(e.bh, r)];
                                case 3:
                                    return null === (i = s.sent()) ? (0 === e.Ch.length && n.Xu(), [3, 7]) : (r = i.batchId, function(t, e) {
                                        t.Ch.push(e);
                                        var n = as(t);
                                        n.Hu() && n._h && n.fh(e.mutations)
                                    }(e, i), [3, 6]);
                                case 4:
                                    return o = s.sent(), [4, Jo(e, o)];
                                case 5:
                                    return s.sent(), [3, 6];
                                case 6:
                                    return [3, 1];
                                case 7:
                                    return ts(e) && es(e), [2]
                            }
                        }))
                    }))
                }

                function ts(t) {
                    return Qo(t) && !as(t).zu() && t.Ch.length > 0
                }

                function es(t) {
                    as(t).start()
                }

                function ns(t) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        return Object(s.d)(this, (function(e) {
                            return as(t).Eh(), [2]
                        }))
                    }))
                }

                function rs(t) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var e, n, r, i;
                        return Object(s.d)(this, (function(o) {
                            for (e = as(t), n = 0, r = t.Ch; n < r.length; n++) i = r[n], e.fh(i.mutations);
                            return [2]
                        }))
                    }))
                }

                function is(t, e, n) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var r, i;
                        return Object(s.d)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return r = t.Ch.shift(), i = Lr.from(r, e, n), [4, Zo(t, (function() {
                                        return t.Dh.Bh(i)
                                    }))];
                                case 1:
                                    return o.sent(), [4, $o(t)];
                                case 2:
                                    return o.sent(), [2]
                            }
                        }))
                    }))
                }

                function os(t, e) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        return Object(s.d)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return e && as(t)._h ? [4, function(t, e) {
                                        return Object(s.b)(this, void 0, void 0, (function() {
                                            var n, r;
                                            return Object(s.d)(this, (function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return qe(r = e.code) && r !== O.ABORTED ? (n = t.Ch.shift(), as(t).Yu(), [4, Zo(t, (function() {
                                                            return t.Dh.qh(n.batchId, e)
                                                        }))]) : [3, 3];
                                                    case 1:
                                                        return i.sent(), [4, $o(t)];
                                                    case 2:
                                                        i.sent(), i.label = 3;
                                                    case 3:
                                                        return [2]
                                                }
                                            }))
                                        }))
                                    }(t, e)] : [3, 2];
                                case 1:
                                    n.sent(), n.label = 2;
                                case 2:
                                    return ts(t) && es(t), [2]
                            }
                        }))
                    }))
                }

                function ss(t, e) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var n;
                        return Object(s.d)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return n = g(t), e ? (n.Nh.delete(2), [4, Mo(n)]) : [3, 2];
                                case 1:
                                    return r.sent(), [3, 5];
                                case 2:
                                    return e ? [3, 4] : (n.Nh.add(2), [4, Uo(n)]);
                                case 3:
                                    r.sent(), n.Oh.set("Unknown"), r.label = 4;
                                case 4:
                                    r.label = 5;
                                case 5:
                                    return [2]
                            }
                        }))
                    }))
                }

                function us(t) {
                    var e = this;
                    return t.Uh || (t.Uh = function(t, e, n) {
                        var r = g(t);
                        return r.Ih(), new Po(e, r.Qu, r.credentials, r.Qt, n)
                    }(t.Sh, t._s, {
                        wu: Ko.bind(null, t),
                        Tu: Xo.bind(null, t),
                        ah: Wo.bind(null, t)
                    }), t.$h.push((function(n) {
                        return Object(s.b)(e, void 0, void 0, (function() {
                            return Object(s.d)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return n ? (t.Uh.Yu(), Ho(t) ? Bo(t) : t.Oh.set("Unknown"), [3, 3]) : [3, 1];
                                    case 1:
                                        return [4, t.Uh.stop()];
                                    case 2:
                                        e.sent(), Yo(t), e.label = 3;
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    }))), t.Uh
                }

                function as(t) {
                    var e = this;
                    return t.Qh || (t.Qh = function(t, e, n) {
                        var r = g(t);
                        return r.Ih(), new Co(e, r.Qu, r.credentials, r.Qt, n)
                    }(t.Sh, t._s, {
                        wu: ns.bind(null, t),
                        Tu: os.bind(null, t),
                        wh: rs.bind(null, t),
                        dh: is.bind(null, t)
                    }), t.$h.push((function(n) {
                        return Object(s.b)(e, void 0, void 0, (function() {
                            return Object(s.d)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return n ? (t.Qh.Yu(), [4, $o(t)]) : [3, 2];
                                    case 1:
                                        return e.sent(), [3, 4];
                                    case 2:
                                        return [4, t.Qh.stop()];
                                    case 3:
                                        e.sent(), t.Ch.length > 0 && (f("RemoteStore", "Stopping write stream with " + t.Ch.length + " pending writes"), t.Ch = []), e.label = 4;
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }))), t.Qh
                }
                var cs = function() {
                        this.Kh = void 0, this.listeners = []
                    },
                    hs = function() {
                        this.queries = new ii((function(t) {
                            return $t(t)
                        }), Zt), this.onlineState = "Unknown", this.Wh = new Set
                    };

                function fs(t, e) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var n, r, i, o, u, a, c;
                        return Object(s.d)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    if (n = g(t), r = e.query, i = !1, (o = n.queries.get(r)) || (i = !0, o = new cs), !i) return [3, 4];
                                    s.label = 1;
                                case 1:
                                    return s.trys.push([1, 3, , 4]), u = o, [4, n.jh(r)];
                                case 2:
                                    return u.Kh = s.sent(), [3, 4];
                                case 3:
                                    return a = s.sent(), c = cr(a, "Initialization of query '" + te(e.query) + "' failed"), [2, void e.onError(c)];
                                case 4:
                                    return n.queries.set(r, o), o.listeners.push(e), e.Gh(n.onlineState), o.Kh && e.zh(o.Kh) && vs(n), [2]
                            }
                        }))
                    }))
                }

                function ls(t, e) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var n, r, i, o, u;
                        return Object(s.d)(this, (function(s) {
                            return n = g(t), r = e.query, i = !1, (o = n.queries.get(r)) && (u = o.listeners.indexOf(e)) >= 0 && (o.listeners.splice(u, 1), i = 0 === o.listeners.length), i ? [2, (n.queries.delete(r), n.Hh(r))] : [2]
                        }))
                    }))
                }

                function ps(t, e) {
                    for (var n = g(t), r = !1, i = 0, o = e; i < o.length; i++) {
                        var s = o[i],
                            u = s.query,
                            a = n.queries.get(u);
                        if (a) {
                            for (var c = 0, h = a.listeners; c < h.length; c++) h[c].zh(s) && (r = !0);
                            a.Kh = s
                        }
                    }
                    r && vs(n)
                }

                function ds(t, e, n) {
                    var r = g(t),
                        i = r.queries.get(e);
                    if (i)
                        for (var o = 0, s = i.listeners; o < s.length; o++) s[o].onError(n);
                    r.queries.delete(e)
                }

                function vs(t) {
                    t.Wh.forEach((function(t) {
                        t.next()
                    }))
                }
                var ys = function() {
                        function t(t, e, n) {
                            this.query = t, this.Jh = e, this.Yh = !1, this.Xh = null, this.onlineState = "Unknown", this.options = n || {}
                        }
                        return t.prototype.zh = function(t) {
                            if (!this.options.includeMetadataChanges) {
                                for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                                    var i = r[n];
                                    3 !== i.type && e.push(i)
                                }
                                t = new an(t.query, t.docs, t.Se, e, t.De, t.fromCache, t.Ce, !0)
                            }
                            var o = !1;
                            return this.Yh ? this.Zh(t) && (this.Jh.next(t), o = !0) : this.tl(t, this.onlineState) && (this.el(t), o = !0), this.Xh = t, o
                        }, t.prototype.onError = function(t) {
                            this.Jh.error(t)
                        }, t.prototype.Gh = function(t) {
                            this.onlineState = t;
                            var e = !1;
                            return this.Xh && !this.Yh && this.tl(this.Xh, t) && (this.el(this.Xh), e = !0), e
                        }, t.prototype.tl = function(t, e) {
                            if (!t.fromCache) return !0;
                            var n = "Offline" !== e;
                            return !(this.options.nl && n || t.docs.et() && "Offline" !== e)
                        }, t.prototype.Zh = function(t) {
                            if (t.docChanges.length > 0) return !0;
                            var e = this.Xh && this.Xh.hasPendingWrites !== t.hasPendingWrites;
                            return !(!t.Ce && !e) && !0 === this.options.includeMetadataChanges
                        }, t.prototype.el = function(t) {
                            t = an.Ne(t.query, t.docs, t.De, t.fromCache), this.Yh = !0, this.Jh.next(t)
                        }, t
                    }(),
                    gs = function() {
                        function t(t, e) {
                            this.payload = t, this.byteLength = e
                        }
                        return t.prototype.sl = function() {
                            return "metadata" in this.payload
                        }, t
                    }(),
                    bs = function() {
                        function t(t) {
                            this.Qt = t
                        }
                        return t.prototype.Pc = function(t) {
                            return An(this.Qt, t)
                        }, t.prototype.yc = function(t) {
                            return t.metadata.exists ? Cn(this.Qt, t.document, !1) : new mt(this.Pc(t.metadata.name), this.gc(t.metadata.readTime))
                        }, t.prototype.gc = function(t) {
                            return On(t)
                        }, t
                    }();
                ! function() {
                    function t(t, e, n) {
                        this.il = t, this.bh = e, this.Qt = n, this.queries = [], this.documents = [], this.progress = ms(t)
                    }
                    t.prototype.rl = function(t) {
                        this.progress.bytesLoaded += t.byteLength;
                        var e = this.progress.documentsLoaded;
                        return t.payload.namedQuery ? this.queries.push(t.payload.namedQuery) : t.payload.documentMetadata ? (this.documents.push({
                            metadata: t.payload.documentMetadata
                        }), t.payload.documentMetadata.exists || ++e) : t.payload.document && (this.documents[this.documents.length - 1].document = t.payload.document, ++e), e !== this.progress.documentsLoaded ? (this.progress.documentsLoaded = e, Object.assign({}, this.progress)) : null
                    }, t.prototype.ol = function(t) {
                        for (var e = new Map, n = new bs(this.Qt), r = 0, i = t; r < i.length; r++) {
                            var o = i[r];
                            if (o.metadata.queries)
                                for (var s = n.Pc(o.metadata.name), u = 0, a = o.metadata.queries; u < a.length; u++) {
                                    var c = a[u],
                                        h = (e.get(c) || nn()).add(s);
                                    e.set(c, h)
                                }
                        }
                        return e
                    }, t.prototype.complete = function() {
                        return Object(s.b)(this, void 0, void 0, (function() {
                            var t, e, n, r, i;
                            return Object(s.d)(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, to(this.bh, new bs(this.Qt), this.documents, this.il.id)];
                                    case 1:
                                        t = o.sent(), e = this.ol(this.documents), n = 0, r = this.queries, o.label = 2;
                                    case 2:
                                        return n < r.length ? (i = r[n], [4, eo(this.bh, i, e.get(i.name))]) : [3, 5];
                                    case 3:
                                        o.sent(), o.label = 4;
                                    case 4:
                                        return n++, [3, 2];
                                    case 5:
                                        return [2, (this.progress.taskState = "Success", new Li(Object.assign({}, this.progress), t))]
                                }
                            }))
                        }))
                    }
                }();

                function ms(t) {
                    return {
                        taskState: "Running",
                        documentsLoaded: 0,
                        bytesLoaded: 0,
                        totalDocuments: t.totalDocuments,
                        totalBytes: t.totalBytes
                    }
                }
                var ws = function(t) {
                        this.key = t
                    },
                    _s = function(t) {
                        this.key = t
                    },
                    Is = function() {
                        function t(t, e) {
                            this.query = t, this.cl = e, this.al = null, this.Be = !1, this.ul = nn(), this.De = nn(), this.hl = ne(t), this.ll = new sn(this.hl)
                        }
                        return Object.defineProperty(t.prototype, "_l", {
                            get: function() {
                                return this.cl
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.fl = function(t, e) {
                            var n = this,
                                r = e ? e.dl : new un,
                                i = e ? e.ll : this.ll,
                                o = e ? e.De : this.De,
                                s = i,
                                u = !1,
                                a = Bt(this.query) && i.size === this.query.limit ? i.last() : null,
                                c = Ht(this.query) && i.size === this.query.limit ? i.first() : null;
                            if (t.Xt((function(t, e) {
                                    var h = i.get(t),
                                        f = e instanceof bt ? e : null;
                                    f && (f = ee(n.query, f) ? f : null);
                                    var l = !!h && n.De.has(h.key),
                                        p = !!f && (f.Vt || n.De.has(f.key) && f.hasCommittedMutations),
                                        d = !1;
                                    h && f ? h.data().isEqual(f.data()) ? l !== p && (r.track({
                                        type: 3,
                                        doc: f
                                    }), d = !0) : n.wl(h, f) || (r.track({
                                        type: 2,
                                        doc: f
                                    }), d = !0, (a && n.hl(f, a) > 0 || c && n.hl(f, c) < 0) && (u = !0)) : !h && f ? (r.track({
                                        type: 0,
                                        doc: f
                                    }), d = !0) : h && !f && (r.track({
                                        type: 1,
                                        doc: h
                                    }), d = !0, (a || c) && (u = !0)), d && (f ? (s = s.add(f), o = p ? o.add(t) : o.delete(t)) : (s = s.delete(t), o = o.delete(t)))
                                })), Bt(this.query) || Ht(this.query))
                                for (; s.size > this.query.limit;) {
                                    var h = Bt(this.query) ? s.last() : s.first();
                                    s = s.delete(h.key), o = o.delete(h.key), r.track({
                                        type: 1,
                                        doc: h
                                    })
                                }
                            return {
                                ll: s,
                                dl: r,
                                lc: u,
                                De: o
                            }
                        }, t.prototype.wl = function(t, e) {
                            return t.Vt && e.hasCommittedMutations && !e.Vt
                        }, t.prototype.wi = function(t, e, n) {
                            var r = this,
                                i = this.ll;
                            this.ll = t.ll, this.De = t.De;
                            var o = t.dl.ve();
                            o.sort((function(t, e) {
                                return function(t, e) {
                                    var n = function(t) {
                                        switch (t) {
                                            case 0:
                                                return 1;
                                            case 2:
                                            case 3:
                                                return 2;
                                            case 1:
                                                return 0;
                                            default:
                                                return v()
                                        }
                                    };
                                    return n(t) - n(e)
                                }(t.type, e.type) || r.hl(t.doc, e.doc)
                            })), this.El(n);
                            var s = e ? this.Tl() : [],
                                u = 0 === this.ul.size && this.Be ? 1 : 0,
                                a = u !== this.al;
                            return this.al = u, 0 !== o.length || a ? {
                                snapshot: new an(this.query, t.ll, i, o, t.De, 0 === u, a, !1),
                                Il: s
                            } : {
                                Il: s
                            }
                        }, t.prototype.Gh = function(t) {
                            return this.Be && "Offline" === t ? (this.Be = !1, this.wi({
                                ll: this.ll,
                                dl: new un,
                                De: this.De,
                                lc: !1
                            }, !1)) : {
                                Il: []
                            }
                        }, t.prototype.ml = function(t) {
                            return !this.cl.has(t) && !!this.ll.has(t) && !this.ll.get(t).Vt
                        }, t.prototype.El = function(t) {
                            var e = this;
                            t && (t.qe.forEach((function(t) {
                                return e.cl = e.cl.add(t)
                            })), t.Ue.forEach((function(t) {})), t.Qe.forEach((function(t) {
                                return e.cl = e.cl.delete(t)
                            })), this.Be = t.Be)
                        }, t.prototype.Tl = function() {
                            var t = this;
                            if (!this.Be) return [];
                            var e = this.ul;
                            this.ul = nn(), this.ll.forEach((function(e) {
                                t.ml(e.key) && (t.ul = t.ul.add(e.key))
                            }));
                            var n = [];
                            return e.forEach((function(e) {
                                t.ul.has(e) || n.push(new _s(e))
                            })), this.ul.forEach((function(t) {
                                e.has(t) || n.push(new ws(t))
                            })), n
                        }, t.prototype.Al = function(t) {
                            this.cl = t.Rc, this.ul = nn();
                            var e = this.fl(t.documents);
                            return this.wi(e, !0)
                        }, t.prototype.Rl = function() {
                            return an.Ne(this.query, this.ll, this.De, 0 === this.al)
                        }, t
                    }(),
                    Es = function(t, e, n) {
                        this.query = t, this.targetId = e, this.view = n
                    },
                    Os = function(t) {
                        this.key = t, this.Pl = !1
                    },
                    Ts = function() {
                        function t(t, e, n, r, i, o) {
                            this.bh = t, this.yl = e, this.gl = n, this.Vl = r, this.currentUser = i, this.pl = o, this.bl = {}, this.vl = new ii((function(t) {
                                return $t(t)
                            }), Zt), this.Sl = new Map, this.Dl = new Set, this.Cl = new Ge(F.H), this.xl = new Map, this.Nl = new ro, this.$l = {}, this.Fl = new Map, this.Ol = pi.Li(), this.onlineState = "Unknown", this.kl = void 0
                        }
                        return Object.defineProperty(t.prototype, "Ml", {
                            get: function() {
                                return !0 === this.kl
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t
                    }();

                function js(t, e) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var n, r, i, o, u, a;
                        return Object(s.d)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return n = eu(t), (o = n.vl.get(e)) ? (r = o.targetId, n.Vl.Fa(r), i = o.view.Rl(), [3, 4]) : [3, 1];
                                case 1:
                                    return [4, Ki(n.bh, Wt(e))];
                                case 2:
                                    return u = s.sent(), a = n.Vl.Fa(u.targetId), r = u.targetId, [4, Ns(n, e, r, "current" === a)];
                                case 3:
                                    i = s.sent(), n.Ml && Fo(n.yl, u), s.label = 4;
                                case 4:
                                    return [2, i]
                            }
                        }))
                    }))
                }

                function Ns(t, e, n, r) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var i, o, u, a, c, h;
                        return Object(s.d)(this, (function(f) {
                            switch (f.label) {
                                case 0:
                                    return t.Ll = function(e, n, r) {
                                        return function(t, e, n, r) {
                                            return Object(s.b)(this, void 0, void 0, (function() {
                                                var i, o, u;
                                                return Object(s.d)(this, (function(s) {
                                                    switch (s.label) {
                                                        case 0:
                                                            return (i = e.view.fl(n)).lc ? [4, Wi(t.bh, e.query, !1).then((function(t) {
                                                                var n = t.documents;
                                                                return e.view.fl(n, i)
                                                            }))] : [3, 2];
                                                        case 1:
                                                            i = s.sent(), s.label = 2;
                                                        case 2:
                                                            return o = r && r.$e.get(e.targetId), u = e.view.wi(i, t.Ml, o), [2, (Fs(t, e.targetId, u.Il), u.snapshot)]
                                                    }
                                                }))
                                            }))
                                        }(t, e, n, r)
                                    }, [4, Wi(t.bh, e, !0)];
                                case 1:
                                    return i = f.sent(), o = new Is(e, i.Rc), u = o.fl(i.documents), a = hn.Le(n, r && "Offline" !== t.onlineState), c = o.wi(u, t.Ml, a), Fs(t, n, c.Il), h = new Es(e, n, o), [2, (t.vl.set(e, h), t.Sl.has(n) ? t.Sl.get(n).push(e) : t.Sl.set(n, [e]), c.snapshot)]
                            }
                        }))
                    }))
                }

                function As(t, e) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var n, r, i;
                        return Object(s.d)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return n = g(t), r = n.vl.get(e), (i = n.Sl.get(r.targetId)).length > 1 ? [2, (n.Sl.set(r.targetId, i.filter((function(t) {
                                        return !Zt(t, e)
                                    }))), void n.vl.delete(e))] : n.Ml ? (n.Vl.ka(r.targetId), n.Vl.Da(r.targetId) ? [3, 2] : [4, Xi(n.bh, r.targetId, !1).then((function() {
                                        n.Vl.La(r.targetId), qo(n.yl, r.targetId), Ms(n, r.targetId)
                                    })).catch(ri)]) : [3, 3];
                                case 1:
                                    o.sent(), o.label = 2;
                                case 2:
                                    return [3, 5];
                                case 3:
                                    return Ms(n, r.targetId), [4, Xi(n.bh, r.targetId, !0)];
                                case 4:
                                    o.sent(), o.label = 5;
                                case 5:
                                    return [2]
                            }
                        }))
                    }))
                }

                function Ss(t, e, n) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var r, i, o, u;
                        return Object(s.d)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    r = nu(t), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 5, , 6]), [4, function(t, e) {
                                        var n, r = g(t),
                                            i = C.now(),
                                            o = e.reduce((function(t, e) {
                                                return t.add(e.key)
                                            }), nn());
                                        return r.persistence.runTransaction("Locally write mutations", "readwrite", (function(t) {
                                            return r.Tc.Xo(t, o).next((function(o) {
                                                n = o;
                                                for (var s = [], u = 0, a = e; u < a.length; u++) {
                                                    var c = a[u],
                                                        h = Ne(c, n.get(c.key));
                                                    null != h && s.push(new De(c.key, h, yt(h.proto.mapValue), Ie.exists(!0)))
                                                }
                                                return r.zo.Ri(t, i, s, e)
                                            }))
                                        })).then((function(t) {
                                            var e = t.xs(n);
                                            return {
                                                batchId: t.batchId,
                                                ri: e
                                            }
                                        }))
                                    }(r.bh, e)];
                                case 2:
                                    return i = s.sent(), r.Vl.Ca(i.batchId),
                                        function(t, e, n) {
                                            var r = t.$l[t.currentUser.A()];
                                            r || (r = new Ge(w)), r = r.zt(e, n), t.$l[t.currentUser.A()] = r
                                        }(r, i.batchId, n), [4, Gs(r, i.ri)];
                                case 3:
                                    return s.sent(), [4, $o(r.yl)];
                                case 4:
                                    return s.sent(), [3, 6];
                                case 5:
                                    return o = s.sent(), u = cr(o, "Failed to persist write"), n.reject(u), [3, 6];
                                case 6:
                                    return [2]
                            }
                        }))
                    }))
                }

                function xs(t, e) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var n, r;
                        return Object(s.d)(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    n = g(t), i.label = 1;
                                case 1:
                                    return i.trys.push([1, 4, , 6]), [4, Hi(n.bh, e)];
                                case 2:
                                    return r = i.sent(), e.$e.forEach((function(t, e) {
                                        var r = n.xl.get(e);
                                        r && (y(t.qe.size + t.Ue.size + t.Qe.size <= 1), t.qe.size > 0 ? r.Pl = !0 : t.Ue.size > 0 ? y(r.Pl) : t.Qe.size > 0 && (y(r.Pl), r.Pl = !1))
                                    })), [4, Gs(n, r, e)];
                                case 3:
                                    return i.sent(), [3, 6];
                                case 4:
                                    return [4, ri(i.sent())];
                                case 5:
                                    return i.sent(), [3, 6];
                                case 6:
                                    return [2]
                            }
                        }))
                    }))
                }

                function Ds(t, e, n) {
                    var r = g(t);
                    if (r.Ml && 0 === n || !r.Ml && 1 === n) {
                        var i = [];
                        r.vl.forEach((function(t, n) {
                                var r = n.view.Gh(e);
                                r.snapshot && i.push(r.snapshot)
                            })),
                            function(t, e) {
                                var n = g(t);
                                n.onlineState = e;
                                var r = !1;
                                n.queries.forEach((function(t, n) {
                                    for (var i = 0, o = n.listeners; i < o.length; i++) o[i].Gh(e) && (r = !0)
                                })), r && vs(n)
                            }(r.gl, e), i.length && r.bl.ah(i), r.onlineState = e, r.Ml && r.Vl.Qa(e)
                    }
                }

                function ks(t, e, n) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var r, i, o, u, a, c;
                        return Object(s.d)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return (r = g(t)).Vl.Ba(e, "rejected", n), i = r.xl.get(e), (o = i && i.key) ? (u = (u = new Ge(F.H)).zt(o, new mt(o, R.min())), a = nn().add(o), c = new cn(R.min(), new Map, new Qe(w), u, a), [4, xs(r, c)]) : [3, 2];
                                case 1:
                                    return s.sent(), r.Cl = r.Cl.remove(o), r.xl.delete(e), zs(r), [3, 4];
                                case 2:
                                    return [4, Xi(r.bh, e, !1).then((function() {
                                        return Ms(r, e, n)
                                    })).catch(ri)];
                                case 3:
                                    s.sent(), s.label = 4;
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }

                function Ps(t, e) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var n, r, i;
                        return Object(s.d)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    n = g(t), r = e.batch.batchId, o.label = 1;
                                case 1:
                                    return o.trys.push([1, 4, , 6]), [4, Gi(n.bh, e)];
                                case 2:
                                    return i = o.sent(), Vs(n, r, null), Ls(n, r), n.Vl.Na(r, "acknowledged"), [4, Gs(n, i)];
                                case 3:
                                    return o.sent(), [3, 6];
                                case 4:
                                    return [4, ri(o.sent())];
                                case 5:
                                    return o.sent(), [3, 6];
                                case 6:
                                    return [2]
                            }
                        }))
                    }))
                }

                function Cs(t, e, n) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var r, i;
                        return Object(s.d)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    r = g(t), o.label = 1;
                                case 1:
                                    return o.trys.push([1, 4, , 6]), [4, function(t, e) {
                                        var n = g(t);
                                        return n.persistence.runTransaction("Reject batch", "readwrite-primary", (function(t) {
                                            var r;
                                            return n.zo.Pi(t, e).next((function(e) {
                                                return y(null !== e), r = e.keys(), n.zo.Ci(t, e)
                                            })).next((function() {
                                                return n.zo.$i(t)
                                            })).next((function() {
                                                return n.Tc.Xo(t, r)
                                            }))
                                        }))
                                    }(r.bh, e)];
                                case 2:
                                    return i = o.sent(), Vs(r, e, n), Ls(r, e), r.Vl.Na(e, "rejected", n), [4, Gs(r, i)];
                                case 3:
                                    return o.sent(), [3, 6];
                                case 4:
                                    return [4, ri(o.sent())];
                                case 5:
                                    return o.sent(), [3, 6];
                                case 6:
                                    return [2]
                            }
                        }))
                    }))
                }

                function Rs(t, e) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var n, r, i, o, u;
                        return Object(s.d)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    Qo((n = g(t)).yl) || f("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), s.label = 1;
                                case 1:
                                    return s.trys.push([1, 3, , 4]), [4, function(t) {
                                        var e = g(t);
                                        return e.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (function(t) {
                                            return e.zo.Vi(t)
                                        }))
                                    }(n.bh)];
                                case 2:
                                    return -1 === (r = s.sent()) ? [2, void e.resolve()] : ((i = n.Fl.get(r) || []).push(e), n.Fl.set(r, i), [3, 4]);
                                case 3:
                                    return o = s.sent(), u = cr(o, "Initialization of waitForPendingWrites() operation failed"), e.reject(u), [3, 4];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }

                function Ls(t, e) {
                    (t.Fl.get(e) || []).forEach((function(t) {
                        t.resolve()
                    })), t.Fl.delete(e)
                }

                function Vs(t, e, n) {
                    var r = g(t),
                        i = r.$l[r.currentUser.A()];
                    if (i) {
                        var o = i.get(e);
                        o && (n ? o.reject(n) : o.resolve(), i = i.remove(e)), r.$l[r.currentUser.A()] = i
                    }
                }

                function Ms(t, e, n) {
                    void 0 === n && (n = null), t.Vl.ka(e);
                    for (var r = 0, i = t.Sl.get(e); r < i.length; r++) {
                        var o = i[r];
                        t.vl.delete(o), n && t.bl.Bl(o, n)
                    }
                    t.Sl.delete(e), t.Ml && t.Nl.Fc(e).forEach((function(e) {
                        t.Nl.Fi(e) || Us(t, e)
                    }))
                }

                function Us(t, e) {
                    t.Dl.delete(e.path.rt());
                    var n = t.Cl.get(e);
                    null !== n && (qo(t.yl, n), t.Cl = t.Cl.remove(e), t.xl.delete(n), zs(t))
                }

                function Fs(t, e, n) {
                    for (var r = 0, i = n; r < i.length; r++) {
                        var o = i[r];
                        o instanceof ws ? (t.Nl.nr(o.key, e), qs(t, o)) : o instanceof _s ? (f("SyncEngine", "Document no longer in limbo: " + o.key), t.Nl.ir(o.key, e), t.Nl.Fi(o.key) || Us(t, o.key)) : v()
                    }
                }

                function qs(t, e) {
                    var n = e.key,
                        r = n.path.rt();
                    t.Cl.get(n) || t.Dl.has(r) || (f("SyncEngine", "New document in limbo: " + n), t.Dl.add(r), zs(t))
                }

                function zs(t) {
                    for (; t.Dl.size > 0 && t.Cl.size < t.pl;) {
                        var e = t.Dl.values().next().value;
                        t.Dl.delete(e);
                        var n = new F(V.ot(e)),
                            r = t.Ol.next();
                        t.xl.set(r, new Os(n)), t.Cl = t.Cl.zt(n, r), Fo(t.yl, new ie(Wt(Gt(n.path)), r, 2, P.q))
                    }
                }

                function Gs(t, e, n) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var r, i, o, u;
                        return Object(s.d)(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    return r = g(t), i = [], o = [], u = [], r.vl.et() ? [3, 3] : (r.vl.forEach((function(t, s) {
                                        u.push(r.Ll(s, e, n).then((function(t) {
                                            if (t) {
                                                r.Ml && r.Vl.Ba(s.targetId, t.fromCache ? "not-current" : "current"), i.push(t);
                                                var e = Mi.oc(s.targetId, t);
                                                o.push(e)
                                            }
                                        })))
                                    })), [4, Promise.all(u)]);
                                case 1:
                                    return a.sent(), r.bl.ah(i), [4, function(t, e) {
                                        return Object(s.b)(this, void 0, void 0, (function() {
                                            var n, r, i, o, u, a, c, h, l;
                                            return Object(s.d)(this, (function(s) {
                                                switch (s.label) {
                                                    case 0:
                                                        n = g(t), s.label = 1;
                                                    case 1:
                                                        return s.trys.push([1, 3, , 4]), [4, n.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (function(t) {
                                                            return Zn.forEach(e, (function(e) {
                                                                return Zn.forEach(e.ic, (function(r) {
                                                                    return n.persistence.Ti.nr(t, e.targetId, r)
                                                                })).next((function() {
                                                                    return Zn.forEach(e.rc, (function(r) {
                                                                        return n.persistence.Ti.ir(t, e.targetId, r)
                                                                    }))
                                                                }))
                                                            }))
                                                        }))];
                                                    case 2:
                                                        return s.sent(), [3, 4];
                                                    case 3:
                                                        if (!rr(r = s.sent())) throw r;
                                                        return f("LocalStore", "Failed to update sequence numbers: " + r), [3, 4];
                                                    case 4:
                                                        for (i = 0, o = e; i < o.length; i++) u = o[i], a = u.targetId, u.fromCache || (c = n.fc.get(a), h = c.Ot, l = c.Lt(h), n.fc = n.fc.zt(a, l));
                                                        return [2]
                                                }
                                            }))
                                        }))
                                    }(r.bh, o)];
                                case 2:
                                    a.sent(), a.label = 3;
                                case 3:
                                    return [2]
                            }
                        }))
                    }))
                }

                function Bs(t, e) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var n, r;
                        return Object(s.d)(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return (n = g(t)).currentUser.isEqual(e) ? [3, 3] : (f("SyncEngine", "User change. New user:", e.A()), [4, zi(n.bh, e)]);
                                case 1:
                                    return r = i.sent(), n.currentUser = e,
                                        function(t, e) {
                                            t.Fl.forEach((function(t) {
                                                t.forEach((function(t) {
                                                    t.reject(new T(O.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change."))
                                                }))
                                            })), t.Fl.clear()
                                        }(n), n.Vl.Ua(e, r.mc, r.Ac), [4, Gs(n, r.Ic)];
                                case 2:
                                    i.sent(), i.label = 3;
                                case 3:
                                    return [2]
                            }
                        }))
                    }))
                }

                function Hs(t, e) {
                    var n = g(t),
                        r = n.xl.get(e);
                    if (r && r.Pl) return nn().add(r.key);
                    var i = nn(),
                        o = n.Sl.get(e);
                    if (!o) return i;
                    for (var s = 0, u = o; s < u.length; s++) {
                        var a = u[s],
                            c = n.vl.get(a);
                        i = i.Pe(c.view._l)
                    }
                    return i
                }

                function Qs(t, e) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var n, r, i;
                        return Object(s.d)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, Wi((n = g(t)).bh, e.query, !0)];
                                case 1:
                                    return r = o.sent(), i = e.view.Al(r), [2, (n.Ml && Fs(n, e.targetId, i.Il), i)]
                            }
                        }))
                    }))
                }

                function Ys(t) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var e;
                        return Object(s.d)(this, (function(n) {
                            return [2, Zi((e = g(t)).bh).then((function(t) {
                                return Gs(e, t)
                            }))]
                        }))
                    }))
                }

                function Ks(t, e, n, r) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var i, o;
                        return Object(s.d)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return [4, function(t, e) {
                                        var n = g(t),
                                            r = g(n.zo);
                                        return n.persistence.runTransaction("Lookup mutation documents", "readonly", (function(t) {
                                            return r.yi(t, e).next((function(e) {
                                                return e ? n.Tc.Xo(t, e) : Zn.resolve(null)
                                            }))
                                        }))
                                    }((i = g(t)).bh, e)];
                                case 1:
                                    return null === (o = s.sent()) ? [3, 6] : "pending" !== n ? [3, 3] : [4, $o(i.yl)];
                                case 2:
                                    return s.sent(), [3, 4];
                                case 3:
                                    "acknowledged" === n || "rejected" === n ? (Vs(i, e, r || null), Ls(i, e), function(t, e) {
                                        g(g(t).zo).xi(e)
                                    }(i.bh, e)) : v(), s.label = 4;
                                case 4:
                                    return [4, Gs(i, o)];
                                case 5:
                                    return s.sent(), [3, 7];
                                case 6:
                                    f("SyncEngine", "Cannot apply mutation batch with id: " + e), s.label = 7;
                                case 7:
                                    return [2]
                            }
                        }))
                    }))
                }

                function Xs(t, e) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var n, r, i, o, u, a, c, h;
                        return Object(s.d)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return eu(n = g(t)), nu(n), !0 !== e || !0 === n.kl ? [3, 3] : (r = n.Vl.va(), [4, Ws(n, r.it())]);
                                case 1:
                                    return i = s.sent(), n.kl = !0, [4, ss(n.yl, !0)];
                                case 2:
                                    for (s.sent(), o = 0, u = i; o < u.length; o++) a = u[o], Fo(n.yl, a);
                                    return [3, 7];
                                case 3:
                                    return !1 !== e || !1 === n.kl ? [3, 7] : (c = [], h = Promise.resolve(), n.Sl.forEach((function(t, e) {
                                        n.Vl.Ma(e) ? c.push(e) : h = h.then((function() {
                                            return Ms(n, e), Xi(n.bh, e, !0)
                                        })), qo(n.yl, e)
                                    })), [4, h]);
                                case 4:
                                    return s.sent(), [4, Ws(n, c)];
                                case 5:
                                    return s.sent(),
                                        function(t) {
                                            var e = g(t);
                                            e.xl.forEach((function(t, n) {
                                                qo(e.yl, n)
                                            })), e.Nl.Oc(), e.xl = new Map, e.Cl = new Ge(F.H)
                                        }(n), n.kl = !1, [4, ss(n.yl, !1)];
                                case 6:
                                    s.sent(), s.label = 7;
                                case 7:
                                    return [2]
                            }
                        }))
                    }))
                }

                function Ws(t, e, n) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var n, r, i, o, u, a, c, h, f, l, p, d, v, y;
                        return Object(s.d)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    n = g(t), r = [], i = [], o = 0, u = e, s.label = 1;
                                case 1:
                                    return o < u.length ? (a = u[o], c = void 0, (h = n.Sl.get(a)) && 0 !== h.length ? [4, Ki(n.bh, Wt(h[0]))] : [3, 7]) : [3, 13];
                                case 2:
                                    c = s.sent(), f = 0, l = h, s.label = 3;
                                case 3:
                                    return f < l.length ? (p = l[f], d = n.vl.get(p), [4, Qs(n, d)]) : [3, 6];
                                case 4:
                                    (v = s.sent()).snapshot && i.push(v.snapshot), s.label = 5;
                                case 5:
                                    return f++, [3, 3];
                                case 6:
                                    return [3, 11];
                                case 7:
                                    return [4, Ji(n.bh, a)];
                                case 8:
                                    return y = s.sent(), [4, Ki(n.bh, y)];
                                case 9:
                                    return c = s.sent(), [4, Ns(n, Js(y), a, !1)];
                                case 10:
                                    s.sent(), s.label = 11;
                                case 11:
                                    r.push(c), s.label = 12;
                                case 12:
                                    return o++, [3, 1];
                                case 13:
                                    return [2, (n.bl.ah(i), r)]
                            }
                        }))
                    }))
                }

                function Js(t) {
                    return zt(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F", t.startAt, t.endAt)
                }

                function Zs(t) {
                    var e = g(t);
                    return g(g(e.bh).persistence).Uo()
                }

                function $s(t, e, n, r) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var i, o, u;
                        return Object(s.d)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return (i = g(t)).kl ? (f("SyncEngine", "Ignoring unexpected query state notification."), [3, 8]) : [3, 1];
                                case 1:
                                    if (!i.Sl.has(e)) return [3, 8];
                                    switch (n) {
                                        case "current":
                                        case "not-current":
                                            return [3, 2];
                                        case "rejected":
                                            return [3, 5]
                                    }
                                    return [3, 7];
                                case 2:
                                    return [4, Zi(i.bh)];
                                case 3:
                                    return o = s.sent(), u = cn.Me(e, "current" === n), [4, Gs(i, o, u)];
                                case 4:
                                    return s.sent(), [3, 8];
                                case 5:
                                    return [4, Xi(i.bh, e, !0)];
                                case 6:
                                    return s.sent(), Ms(i, e, r), [3, 8];
                                case 7:
                                    v(), s.label = 8;
                                case 8:
                                    return [2]
                            }
                        }))
                    }))
                }

                function tu(t, e, n) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var r, i, o, u, a, c, h, l, p, d;
                        return Object(s.d)(this, (function(v) {
                            switch (v.label) {
                                case 0:
                                    if (!(r = eu(t)).kl) return [3, 10];
                                    i = 0, o = e, v.label = 1;
                                case 1:
                                    return i < o.length ? (u = o[i], r.Sl.has(u) ? (f("SyncEngine", "Adding an already active target " + u), [3, 5]) : [4, Ji(r.bh, u)]) : [3, 6];
                                case 2:
                                    return a = v.sent(), [4, Ki(r.bh, a)];
                                case 3:
                                    return c = v.sent(), [4, Ns(r, Js(a), c.targetId, !1)];
                                case 4:
                                    v.sent(), Fo(r.yl, c), v.label = 5;
                                case 5:
                                    return i++, [3, 1];
                                case 6:
                                    h = function(t) {
                                        return Object(s.d)(this, (function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return r.Sl.has(t) ? [4, Xi(r.bh, t, !1).then((function() {
                                                        qo(r.yl, t), Ms(r, t)
                                                    })).catch(ri)] : [3, 2];
                                                case 1:
                                                    e.sent(), e.label = 2;
                                                case 2:
                                                    return [2]
                                            }
                                        }))
                                    }, l = 0, p = n, v.label = 7;
                                case 7:
                                    return l < p.length ? (d = p[l], [5, h(d)]) : [3, 10];
                                case 8:
                                    v.sent(), v.label = 9;
                                case 9:
                                    return l++, [3, 7];
                                case 10:
                                    return [2]
                            }
                        }))
                    }))
                }

                function eu(t) {
                    var e = g(t);
                    return e.yl.Dh.Lh = xs.bind(null, e), e.yl.Dh.vn = Hs.bind(null, e), e.yl.Dh.Mh = ks.bind(null, e), e.bl.ah = ps.bind(null, e.gl), e.bl.Bl = ds.bind(null, e.gl), e
                }

                function nu(t) {
                    var e = g(t);
                    return e.yl.Dh.Bh = Ps.bind(null, e), e.yl.Dh.qh = Cs.bind(null, e), e
                }
                var ru = function() {
                        function t() {
                            this.synchronizeTabs = !1
                        }
                        return t.prototype.initialize = function(t) {
                            return Object(s.b)(this, void 0, void 0, (function() {
                                return Object(s.d)(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return this.Qt = xo(t.yu.t), this.Vl = this.Wl(t), this.persistence = this.jl(t), [4, this.persistence.start()];
                                        case 1:
                                            return e.sent(), this.Gl = this.zl(t), this.bh = this.Hl(t), [2]
                                    }
                                }))
                            }))
                        }, t.prototype.zl = function(t) {
                            return null
                        }, t.prototype.Hl = function(t) {
                            return qi(this.persistence, new Ui, t.Jl, this.Qt)
                        }, t.prototype.jl = function(t) {
                            return new co(fo.ia, this.Qt)
                        }, t.prototype.Wl = function(t) {
                            return new Io
                        }, t.prototype.terminate = function() {
                            return Object(s.b)(this, void 0, void 0, (function() {
                                return Object(s.d)(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return this.Gl && this.Gl.stop(), [4, this.Vl.ko()];
                                        case 1:
                                            return t.sent(), [4, this.persistence.ko()];
                                        case 2:
                                            return t.sent(), [2]
                                    }
                                }))
                            }))
                        }, t
                    }(),
                    iu = function(t) {
                        function e(e, n, r) {
                            var i = this;
                            return (i = t.call(this) || this).Yl = e, i.cacheSizeBytes = n, i.forceOwnership = r, i.synchronizeTabs = !1, i
                        }
                        return Object(s.c)(e, t), e.prototype.initialize = function(e) {
                            return Object(s.b)(this, void 0, void 0, (function() {
                                return Object(s.d)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, t.prototype.initialize.call(this, e)];
                                        case 1:
                                            return n.sent(), [4, $i(this.bh)];
                                        case 2:
                                            return n.sent(), [4, this.Yl.initialize(this, e)];
                                        case 3:
                                            return n.sent(), [4, nu(this.Yl._a)];
                                        case 4:
                                            return n.sent(), [4, $o(this.Yl.yl)];
                                        case 5:
                                            return n.sent(), [2]
                                    }
                                }))
                            }))
                        }, e.prototype.Hl = function(t) {
                            return qi(this.persistence, new Ui, t.Jl, this.Qt)
                        }, e.prototype.zl = function(t) {
                            var e = this.persistence.Ti.lr;
                            return new wi(e, t._s)
                        }, e.prototype.jl = function(t) {
                            var e = Ri(t.yu.t, t.yu.persistenceKey),
                                n = void 0 !== this.cacheSizeBytes ? ni.Ys(this.cacheSizeBytes) : ni.ti;
                            return new ki(this.synchronizeTabs, e, t.clientId, n, t._s, Ao(), So(), this.Qt, this.Vl, !!this.forceOwnership)
                        }, e.prototype.Wl = function(t) {
                            return new Io
                        }, e
                    }(ru),
                    ou = function(t) {
                        function e(e, n) {
                            var r = this;
                            return (r = t.call(this, e, n, !1) || this).Yl = e, r.cacheSizeBytes = n, r.synchronizeTabs = !0, r
                        }
                        return Object(s.c)(e, t), e.prototype.initialize = function(e) {
                            return Object(s.b)(this, void 0, void 0, (function() {
                                var n, r = this;
                                return Object(s.d)(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, t.prototype.initialize.call(this, e)];
                                        case 1:
                                            return i.sent(), n = this.Yl._a, this.Vl instanceof _o ? (this.Vl._a = {
                                                eu: Ks.bind(null, n),
                                                nu: $s.bind(null, n),
                                                su: tu.bind(null, n),
                                                Uo: Zs.bind(null, n),
                                                tu: Ys.bind(null, n)
                                            }, [4, this.Vl.start()]) : [3, 3];
                                        case 2:
                                            i.sent(), i.label = 3;
                                        case 3:
                                            return [4, this.persistence.Ro((function(t) {
                                                return Object(s.b)(r, void 0, void 0, (function() {
                                                    return Object(s.d)(this, (function(e) {
                                                        switch (e.label) {
                                                            case 0:
                                                                return [4, Xs(this.Yl._a, t)];
                                                            case 1:
                                                                return e.sent(), this.Gl && (t && !this.Gl.Er ? this.Gl.start(this.bh) : t || this.Gl.stop()), [2]
                                                        }
                                                    }))
                                                }))
                                            }))];
                                        case 4:
                                            return i.sent(), [2]
                                    }
                                }))
                            }))
                        }, e.prototype.Wl = function(t) {
                            var e = Ao();
                            if (!_o.Kn(e)) throw new T(O.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
                            var n = Ri(t.yu.t, t.yu.persistenceKey);
                            return new _o(e, t._s, n, t.clientId, t.Jl)
                        }, e
                    }(iu),
                    su = function() {
                        function t() {}
                        return t.prototype.initialize = function(t, e) {
                            return Object(s.b)(this, void 0, void 0, (function() {
                                var n = this;
                                return Object(s.d)(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return this.bh ? [3, 2] : (this.bh = t.bh, this.Vl = t.Vl, this.Sh = this.Xl(e), this.yl = this.Zl(e), this.gl = this.t_(e), this._a = this.e_(e, !t.synchronizeTabs), this.Vl.fa = function(t) {
                                                return Ds(n._a, t, 1)
                                            }, this.yl.Dh.n_ = Bs.bind(null, this._a), [4, ss(this.yl, this._a.Ml)]);
                                        case 1:
                                            r.sent(), r.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                }))
                            }))
                        }, t.prototype.t_ = function(t) {
                            return new hs
                        }, t.prototype.Xl = function(t) {
                            var e, n = xo(t.yu.t),
                                r = (e = t.yu, new No(e));
                            return function(t, e, n) {
                                return new Ro(t, e, n)
                            }(t.credentials, r, n)
                        }, t.prototype.Zl = function(t) {
                            var e, n, r, i, o, s = this;
                            return e = this.bh, n = this.Sh, r = t._s, i = function(t) {
                                return Ds(s._a, t, 0)
                            }, o = Oo.Kn() ? new Oo : new Eo, new Vo(e, n, r, i, o)
                        }, t.prototype.e_ = function(t, e) {
                            return function(t, e, n, r, i, o, s) {
                                var u = new Ts(t, e, n, r, i, o);
                                return s && (u.kl = !0), u
                            }(this.bh, this.yl, this.gl, this.Vl, t.Jl, t.pl, e)
                        }, t.prototype.terminate = function() {
                            return function(t) {
                                return Object(s.b)(this, void 0, void 0, (function() {
                                    var e;
                                    return Object(s.d)(this, (function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return e = g(t), f("RemoteStore", "RemoteStore shutting down."), e.Nh.add(5), [4, Uo(e)];
                                            case 1:
                                                return n.sent(), e.Fh.ko(), e.Oh.set("Unknown"), [2]
                                        }
                                    }))
                                }))
                            }(this.yl)
                        }, t
                    }();
                var uu = function() {
                        function t(t) {
                            this.observer = t, this.muted = !1
                        }
                        return t.prototype.next = function(t) {
                            this.observer.next && this.s_(this.observer.next, t)
                        }, t.prototype.error = function(t) {
                            this.observer.error && this.s_(this.observer.error, t)
                        }, t.prototype.i_ = function() {
                            this.muted = !0
                        }, t.prototype.s_ = function(t, e) {
                            var n = this;
                            this.muted || setTimeout((function() {
                                n.muted || t(e)
                            }), 0)
                        }, t
                    }(),
                    au = (function() {
                        function t(t, e) {
                            var n = this;
                            this.r_ = t, this.Qt = e, this.metadata = new Jn, this.buffer = new Uint8Array, this.o_ = new TextDecoder("utf-8"), this.c_().then((function(t) {
                                t && t.sl() ? n.metadata.resolve(t.payload.metadata) : n.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             " + JSON.stringify(null == t ? void 0 : t.payload)))
                            }), (function(t) {
                                return n.metadata.reject(t)
                            }))
                        }
                        t.prototype.close = function() {
                            return this.r_.cancel()
                        }, t.prototype.getMetadata = function() {
                            return Object(s.b)(this, void 0, void 0, (function() {
                                return Object(s.d)(this, (function(t) {
                                    return [2, this.metadata.promise]
                                }))
                            }))
                        }, t.prototype.Ql = function() {
                            return Object(s.b)(this, void 0, void 0, (function() {
                                return Object(s.d)(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this.getMetadata()];
                                        case 1:
                                            return [2, (t.sent(), this.c_())]
                                    }
                                }))
                            }))
                        }, t.prototype.c_ = function() {
                            return Object(s.b)(this, void 0, void 0, (function() {
                                var t, e, n, r;
                                return Object(s.d)(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, this.a_()];
                                        case 1:
                                            return null === (t = i.sent()) ? [2, null] : (e = this.o_.decode(t), n = Number(e), isNaN(n) && this.u_("length string (" + e + ") is not valid number"), [4, this.h_(n)]);
                                        case 2:
                                            return r = i.sent(), [2, new gs(JSON.parse(r), t.length + n)]
                                    }
                                }))
                            }))
                        }, t.prototype.l_ = function() {
                            return this.buffer.findIndex((function(t) {
                                return t === "{".charCodeAt(0)
                            }))
                        }, t.prototype.a_ = function() {
                            return Object(s.b)(this, void 0, void 0, (function() {
                                var t, e;
                                return Object(s.d)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return this.l_() < 0 ? [4, this.__()] : [3, 3];
                                        case 1:
                                            if (n.sent()) return [3, 3];
                                            n.label = 2;
                                        case 2:
                                            return [3, 0];
                                        case 3:
                                            return 0 === this.buffer.length ? [2, null] : ((t = this.l_()) < 0 && this.u_("Reached the end of bundle when a length string is expected."), e = this.buffer.slice(0, t), [2, (this.buffer = this.buffer.slice(t), e)])
                                    }
                                }))
                            }))
                        }, t.prototype.h_ = function(t) {
                            return Object(s.b)(this, void 0, void 0, (function() {
                                var e;
                                return Object(s.d)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return this.buffer.length < t ? [4, this.__()] : [3, 3];
                                        case 1:
                                            n.sent() && this.u_("Reached the end of bundle when more is expected."), n.label = 2;
                                        case 2:
                                            return [3, 0];
                                        case 3:
                                            return e = this.o_.decode(this.buffer.slice(0, t)), [2, (this.buffer = this.buffer.slice(t), e)]
                                    }
                                }))
                            }))
                        }, t.prototype.u_ = function(t) {
                            throw this.r_.cancel(), new Error("Invalid bundle format: " + t)
                        }, t.prototype.__ = function() {
                            return Object(s.b)(this, void 0, void 0, (function() {
                                var t, e;
                                return Object(s.d)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, this.r_.read()];
                                        case 1:
                                            return (t = n.sent()).done || ((e = new Uint8Array(this.buffer.length + t.value.length)).set(this.buffer), e.set(t.value, this.buffer.length), this.buffer = e), [2, t.done]
                                    }
                                }))
                            }))
                        }
                    }(), function() {
                        function t() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            for (var n = 0; n < t.length; ++n)
                                if (0 === t[n].length) throw new T(O.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
                            this.f_ = new U(t)
                        }
                        return t.prototype.isEqual = function(t) {
                            return this.f_.isEqual(t.f_)
                        }, t
                    }()),
                    cu = function(t) {
                        this._methodName = t
                    },
                    hu = function(t) {
                        this.d_ = t
                    };

                function fu(t, e, n) {
                    if (!n) throw new T(O.INVALID_ARGUMENT, "Function " + t + "() cannot be called with an empty " + e + ".")
                }

                function lu(t, e) {
                    if (void 0 === e) return {
                        merge: !1
                    };
                    if (void 0 !== e.mergeFields && void 0 !== e.merge) throw new T(O.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
                    return e
                }

                function pu(t, e, n, r) {
                    if (!0 === e && !0 === r) throw new T(O.INVALID_ARGUMENT, t + " and " + n + " cannot be used together.")
                }

                function du(t) {
                    if (!F.wt(t)) throw new T(O.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t + " has " + t.length + ".")
                }

                function vu(t) {
                    if (F.wt(t)) throw new T(O.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t + " has " + t.length + ".")
                }

                function yu(t) {
                    if (void 0 === t) return "undefined";
                    if (null === t) return "null";
                    if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), JSON.stringify(t);
                    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
                    if ("object" == typeof t) {
                        if (t instanceof Array) return "an array";
                        var e = function(t) {
                            if (t.constructor) {
                                var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                                if (e && e.length > 1) return e[1]
                            }
                            return null
                        }(t);
                        return e ? "a custom " + e + " object" : "an object"
                    }
                    return "function" == typeof t ? "a function" : v()
                }

                function gu(t, e) {
                    if ("_delegate" in t && (t = t.d_), !(t instanceof e)) {
                        if (e.name === t.constructor.name) throw new T(O.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
                        var n = yu(t);
                        throw new T(O.INVALID_ARGUMENT, "Expected type '" + e.name + "', but it was: " + n)
                    }
                    return t
                }

                function bu(t, e) {
                    if (e <= 0) throw new T(O.INVALID_ARGUMENT, "Function " + t + "() requires a positive number, but it was: " + e + ".")
                }
                var mu = function() {
                        function t(t) {
                            var e;
                            if (void 0 === t.host) {
                                if (void 0 !== t.ssl) throw new T(O.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
                                this.host = "firestore.googleapis.com", this.ssl = !0
                            } else this.host = t.host, this.ssl = null === (e = t.ssl) || void 0 === e || e;
                            if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, void 0 === t.cacheSizeBytes) this.cacheSizeBytes = 41943040;
                            else {
                                if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new T(O.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
                                this.cacheSizeBytes = t.cacheSizeBytes
                            }
                            this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling, pu("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling)
                        }
                        return t.prototype.isEqual = function(t) {
                            return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties
                        }, t
                    }(),
                    wu = new Map,
                    _u = function() {
                        function t(t, e) {
                            this.w_ = "(lite)", this.E_ = new mu({}), this.T_ = !1, t instanceof a ? (this.I_ = t, this.m_ = new S) : (this.A_ = t, this.I_ = function(t) {
                                if (!Object.prototype.hasOwnProperty.apply(t.options, ["projectId"])) throw new T(O.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
                                return new a(t.options.projectId)
                            }(t), this.m_ = new x(e))
                        }
                        return Object.defineProperty(t.prototype, "app", {
                            get: function() {
                                if (!this.A_) throw new T(O.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
                                return this.A_
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "R_", {
                            get: function() {
                                return this.T_
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "P_", {
                            get: function() {
                                return void 0 !== this.y_
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.g_ = function(t) {
                            if (this.T_) throw new T(O.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
                            this.E_ = new mu(t), void 0 !== t.credentials && (this.m_ = function(t) {
                                if (!t) return new S;
                                switch (t.type) {
                                    case "gapi":
                                        var e = t.client;
                                        return y(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), new k(e, t.sessionIndex || "0");
                                    case "provider":
                                        return t.client;
                                    default:
                                        throw new T(O.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type")
                                }
                            }(t.credentials))
                        }, t.prototype.V_ = function() {
                            return this.E_
                        }, t.prototype.p_ = function() {
                            return this.T_ = !0, this.E_
                        }, t.prototype._delete = function() {
                            return this.y_ || (this.y_ = this.b_()), this.y_
                        }, t.prototype.toJSON = function() {
                            return {
                                app: this.A_,
                                t: this.I_,
                                settings: this.E_
                            }
                        }, t.prototype.b_ = function() {
                            return this, (t = wu.get(this)) && (f("ComponentProvider", "Removing Datastore"), wu.delete(this), t.terminate()), Promise.resolve();
                            var t
                        }, t
                    }(),
                    Iu = function() {
                        function t(t, e, n) {
                            this.v_ = e, this.S_ = n, this.type = "document", this.firestore = t
                        }
                        return Object.defineProperty(t.prototype, "D_", {
                            get: function() {
                                return this.S_.path
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "id", {
                            get: function() {
                                return this.S_.path.tt()
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "path", {
                            get: function() {
                                return this.S_.path.rt()
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "parent", {
                            get: function() {
                                return new Ou(this.firestore, this.v_, this.S_.path.X())
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.withConverter = function(e) {
                            return new t(this.firestore, e, this.S_)
                        }, t
                    }(),
                    Eu = function() {
                        function t(t, e, n) {
                            this.v_ = e, this.C_ = n, this.type = "query", this.firestore = t
                        }
                        return t.prototype.withConverter = function(e) {
                            return new t(this.firestore, e, this.C_)
                        }, t
                    }(),
                    Ou = function(t) {
                        function e(e, n, r) {
                            var i = this;
                            return (i = t.call(this, e, n, Gt(r)) || this).firestore = e, i.D_ = r, i.type = "collection", i
                        }
                        return Object(s.c)(e, t), Object.defineProperty(e.prototype, "id", {
                            get: function() {
                                return this.C_.path.tt()
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "path", {
                            get: function() {
                                return this.C_.path.rt()
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "parent", {
                            get: function() {
                                var t = this.D_.X();
                                return t.et() ? null : new Iu(this.firestore, null, new F(t))
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.withConverter = function(t) {
                            return new e(this.firestore, t, this.D_)
                        }, e
                    }(Eu);

                function Tu(t, e) {
                    for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                    if (t instanceof hu && (t = t.d_), fu("collection", "path", e), t instanceof _u) return vu(n = V.ot.apply(V, Object(s.g)([e], r))), new Ou(t, null, n);
                    if (!(t instanceof Iu || t instanceof Ou)) throw new T(O.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
                    return vu(n = V.ot.apply(V, Object(s.g)([t.path], r)).child(V.ot(e))), new Ou(t.firestore, null, n)
                }

                function ju(t, e) {
                    for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                    if (t instanceof hu && (t = t.d_), 1 === arguments.length && (e = m.u()), fu("doc", "path", e), t instanceof _u) return du(n = V.ot.apply(V, Object(s.g)([e], r))), new Iu(t, null, new F(n));
                    if (!(t instanceof Iu || t instanceof Ou)) throw new T(O.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
                    return du(n = t.D_.child(V.ot.apply(V, Object(s.g)([e], r)))), new Iu(t.firestore, t instanceof Ou ? t.v_ : null, new F(n))
                }

                function Nu(t, e) {
                    return t instanceof hu && (t = t.d_), e instanceof hu && (e = e.d_), (t instanceof Iu || t instanceof Ou) && (e instanceof Iu || e instanceof Ou) && t.firestore === e.firestore && t.path === e.path && t.v_ === e.v_
                }

                function Au(t, e) {
                    return t instanceof hu && (t = t.d_), e instanceof hu && (e = e.d_), t instanceof Eu && e instanceof Eu && t.firestore === e.firestore && Zt(t.C_, e.C_) && t.v_ === e.v_
                }
                var Su = function() {
                        function t(t, e) {
                            if (!isFinite(t) || t < -90 || t > 90) throw new T(O.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
                            if (!isFinite(e) || e < -180 || e > 180) throw new T(O.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
                            this.x_ = t, this.N_ = e
                        }
                        return Object.defineProperty(t.prototype, "latitude", {
                            get: function() {
                                return this.x_
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "longitude", {
                            get: function() {
                                return this.N_
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.isEqual = function(t) {
                            return this.x_ === t.x_ && this.N_ === t.N_
                        }, t.prototype.toJSON = function() {
                            return {
                                latitude: this.x_,
                                longitude: this.N_
                            }
                        }, t.prototype.U = function(t) {
                            return w(this.x_, t.x_) || w(this.N_, t.N_)
                        }, t
                    }(),
                    xu = /^__.*__$/,
                    Du = function() {
                        function t(t, e, n) {
                            this.data = t, this.Gt = e, this.fieldTransforms = n
                        }
                        return t.prototype.F_ = function(t, e) {
                            return null !== this.Gt ? new De(t, this.data, this.Gt, e, this.fieldTransforms) : new xe(t, this.data, e, this.fieldTransforms)
                        }, t
                    }(),
                    ku = function() {
                        function t(t, e, n) {
                            this.data = t, this.Gt = e, this.fieldTransforms = n
                        }
                        return t.prototype.F_ = function(t, e) {
                            return new De(t, this.data, this.Gt, e, this.fieldTransforms)
                        }, t
                    }();

                function Pu(t) {
                    switch (t) {
                        case 0:
                        case 2:
                        case 1:
                            return !0;
                        case 3:
                        case 4:
                            return !1;
                        default:
                            throw v()
                    }
                }
                var Cu = function() {
                        function t(t, e, n, r, i, o) {
                            this.settings = t, this.t = e, this.Qt = n, this.ignoreUndefinedProperties = r, void 0 === i && this.O_(), this.fieldTransforms = i || [], this.Gt = o || []
                        }
                        return Object.defineProperty(t.prototype, "path", {
                            get: function() {
                                return this.settings.path
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "k_", {
                            get: function() {
                                return this.settings.k_
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.M_ = function(e) {
                            return new t(Object.assign(Object.assign({}, this.settings), e), this.t, this.Qt, this.ignoreUndefinedProperties, this.fieldTransforms, this.Gt)
                        }, t.prototype.L_ = function(t) {
                            var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
                                r = this.M_({
                                    path: n,
                                    B_: !1
                                });
                            return r.q_(t), r
                        }, t.prototype.U_ = function(t) {
                            var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
                                r = this.M_({
                                    path: n,
                                    B_: !1
                                });
                            return r.O_(), r
                        }, t.prototype.Q_ = function(t) {
                            return this.M_({
                                path: void 0,
                                B_: !0
                            })
                        }, t.prototype.K_ = function(t) {
                            return ta(t, this.settings.methodName, this.settings.W_ || !1, this.path, this.settings.j_)
                        }, t.prototype.contains = function(t) {
                            return void 0 !== this.Gt.find((function(e) {
                                return t.nt(e)
                            })) || void 0 !== this.fieldTransforms.find((function(e) {
                                return t.nt(e.field)
                            }))
                        }, t.prototype.O_ = function() {
                            if (this.path)
                                for (var t = 0; t < this.path.length; t++) this.q_(this.path.get(t))
                        }, t.prototype.q_ = function(t) {
                            if (0 === t.length) throw this.K_("Document fields must not be empty");
                            if (Pu(this.k_) && xu.test(t)) throw this.K_('Document fields cannot begin and end with "__"')
                        }, t
                    }(),
                    Ru = function() {
                        function t(t, e, n) {
                            this.t = t, this.ignoreUndefinedProperties = e, this.Qt = n || xo(t)
                        }
                        return t.prototype.G_ = function(t, e, n, r) {
                            return void 0 === r && (r = !1), new Cu({
                                k_: t,
                                methodName: e,
                                j_: n,
                                path: U.ct(),
                                B_: !1,
                                W_: r
                            }, this.t, this.Qt, this.ignoreUndefinedProperties)
                        }, t
                    }();

                function Lu(t) {
                    var e = t.p_(),
                        n = xo(t.I_);
                    return new Ru(t.I_, !!e.ignoreUndefinedProperties, n)
                }

                function Vu(t, e, n, r, i, o) {
                    void 0 === o && (o = {});
                    var s = t.G_(o.merge || o.mergeFields ? 2 : 0, e, n, i);
                    Wu("Data must be an object, but it was:", s, r);
                    var u, a, c = Ku(r, s);
                    if (o.merge) u = new B(s.Gt), a = s.fieldTransforms;
                    else if (o.mergeFields) {
                        for (var h = [], f = 0, l = o.mergeFields; f < l.length; f++) {
                            var p = Ju(e, l[f], n);
                            if (!s.contains(p)) throw new T(O.INVALID_ARGUMENT, "Field '" + p + "' is specified in your field mask but missing from your input data.");
                            ea(h, p) || h.push(p)
                        }
                        u = new B(h), a = s.fieldTransforms.filter((function(t) {
                            return u.Tt(t.field)
                        }))
                    } else u = null, a = s.fieldTransforms;
                    return new Du(new dt(c), u, a)
                }
                var Mu = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return Object(s.c)(e, t), e.prototype.z_ = function(t) {
                        if (2 !== t.k_) throw 1 === t.k_ ? t.K_(this._methodName + "() can only appear at the top level of your update data") : t.K_(this._methodName + "() cannot be used with set() unless you pass {merge:true}");
                        return t.Gt.push(t.path), null
                    }, e.prototype.isEqual = function(t) {
                        return t instanceof e
                    }, e
                }(cu);

                function Uu(t, e, n) {
                    return new Cu({
                        k_: 3,
                        j_: e.settings.j_,
                        methodName: t._methodName,
                        B_: n
                    }, e.t, e.Qt, e.ignoreUndefinedProperties)
                }
                var Fu = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return Object(s.c)(e, t), e.prototype.z_ = function(t) {
                            return new we(t.path, new le)
                        }, e.prototype.isEqual = function(t) {
                            return t instanceof e
                        }, e
                    }(cu),
                    qu = function(t) {
                        function e(e, n) {
                            var r = this;
                            return (r = t.call(this, e) || this).H_ = n, r
                        }
                        return Object(s.c)(e, t), e.prototype.z_ = function(t) {
                            var e = Uu(this, t, !0),
                                n = this.H_.map((function(t) {
                                    return Yu(t, e)
                                })),
                                r = new pe(n);
                            return new we(t.path, r)
                        }, e.prototype.isEqual = function(t) {
                            return this === t
                        }, e
                    }(cu),
                    zu = function(t) {
                        function e(e, n) {
                            var r = this;
                            return (r = t.call(this, e) || this).H_ = n, r
                        }
                        return Object(s.c)(e, t), e.prototype.z_ = function(t) {
                            var e = Uu(this, t, !0),
                                n = this.H_.map((function(t) {
                                    return Yu(t, e)
                                })),
                                r = new ve(n);
                            return new we(t.path, r)
                        }, e.prototype.isEqual = function(t) {
                            return this === t
                        }, e
                    }(cu),
                    Gu = function(t) {
                        function e(e, n) {
                            var r = this;
                            return (r = t.call(this, e) || this).J_ = n, r
                        }
                        return Object(s.c)(e, t), e.prototype.z_ = function(t) {
                            var e = new ge(t.Qt, ue(t.Qt, this.J_));
                            return new we(t.path, e)
                        }, e.prototype.isEqual = function(t) {
                            return this === t
                        }, e
                    }(cu);

                function Bu(t, e, n, r) {
                    var i = t.G_(1, e, n);
                    Wu("Data must be an object, but it was:", i, r);
                    var o = [],
                        s = new vt;
                    z(r, (function(t, r) {
                        var u = $u(e, t, n);
                        r instanceof hu && (r = r.d_);
                        var a = i.U_(u);
                        if (r instanceof Mu) o.push(u);
                        else {
                            var c = Yu(r, a);
                            null != c && (o.push(u), s.set(u, c))
                        }
                    }));
                    var u = new B(o);
                    return new ku(s.Pt(), u, i.fieldTransforms)
                }

                function Hu(t, e, n, r, i, o) {
                    var s = t.G_(1, e, n),
                        u = [Ju(e, r, n)],
                        a = [i];
                    if (o.length % 2 != 0) throw new T(O.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");
                    for (var c = 0; c < o.length; c += 2) u.push(Ju(e, o[c])), a.push(o[c + 1]);
                    for (var h = [], f = new vt, l = u.length - 1; l >= 0; --l)
                        if (!ea(h, u[l])) {
                            var p = u[l],
                                d = a[l];
                            d instanceof hu && (d = d.d_);
                            var v = s.U_(p);
                            if (d instanceof Mu) h.push(p);
                            else {
                                var y = Yu(d, v);
                                null != y && (h.push(p), f.set(p, y))
                            }
                        }
                    var g = new B(h);
                    return new ku(f.Pt(), g, s.fieldTransforms)
                }

                function Qu(t, e, n, r) {
                    return void 0 === r && (r = !1), Yu(n, t.G_(r ? 4 : 3, e))
                }

                function Yu(t, e) {
                    if (t instanceof hu && (t = t.d_), Xu(t)) return Wu("Unsupported field value:", e, t), Ku(t, e);
                    if (t instanceof cu) return function(t, e) {
                        if (!Pu(e.k_)) throw e.K_(t._methodName + "() can only be used with update() and set()");
                        if (!e.path) throw e.K_(t._methodName + "() is not currently supported inside arrays");
                        var n = t.z_(e);
                        n && e.fieldTransforms.push(n)
                    }(t, e), null;
                    if (void 0 === t && e.ignoreUndefinedProperties) return null;
                    if (e.path && e.Gt.push(e.path), t instanceof Array) {
                        if (e.settings.B_ && 4 !== e.k_) throw e.K_("Nested arrays are not supported");
                        return function(t, e) {
                            for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
                                var s = Yu(o[i], e.Q_(r));
                                null == s && (s = {
                                    nullValue: "NULL_VALUE"
                                }), n.push(s), r++
                            }
                            return {
                                arrayValue: {
                                    values: n
                                }
                            }
                        }(t, e)
                    }
                    return function(t, e) {
                        if (t instanceof hu && (t = t.d_), null === t) return {
                            nullValue: "NULL_VALUE"
                        };
                        if ("number" == typeof t) return ue(e.Qt, t);
                        if ("boolean" == typeof t) return {
                            booleanValue: t
                        };
                        if ("string" == typeof t) return {
                            stringValue: t
                        };
                        if (t instanceof Date) {
                            var n = C.fromDate(t);
                            return {
                                timestampValue: _n(e.Qt, n)
                            }
                        }
                        if (t instanceof C) return n = new C(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3)), {
                            timestampValue: _n(e.Qt, n)
                        };
                        if (t instanceof Su) return {
                            geoPointValue: {
                                latitude: t.latitude,
                                longitude: t.longitude
                            }
                        };
                        if (t instanceof j) return {
                            bytesValue: In(e.Qt, t.I)
                        };
                        if (t instanceof Iu) {
                            n = e.t;
                            var r = t.firestore.I_;
                            if (!r.isEqual(n)) throw e.K_("Document reference is for database " + r.projectId + "/" + r.database + " but should be for database " + n.projectId + "/" + n.database);
                            return {
                                referenceValue: Tn(t.firestore.I_ || e.t, t.S_.path)
                            }
                        }
                        throw e.K_("Unsupported field value: " + yu(t))
                    }(t, e)
                }

                function Ku(t, e) {
                    var n = {};
                    return G(t) ? e.path && e.path.length > 0 && e.Gt.push(e.path) : z(t, (function(t, r) {
                        var i = Yu(r, e.L_(t));
                        null != i && (n[t] = i)
                    })), {
                        mapValue: {
                            fields: n
                        }
                    }
                }

                function Xu(t) {
                    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof C || t instanceof Su || t instanceof j || t instanceof Iu || t instanceof cu)
                }

                function Wu(t, e, n) {
                    if (!Xu(n) || ! function(t) {
                            return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t))
                        }(n)) {
                        var r = yu(n);
                        throw "an object" === r ? e.K_(t + " a custom object") : e.K_(t + " " + r)
                    }
                }

                function Ju(t, e, n) {
                    if (e instanceof hu && (e = e.d_), e instanceof au) return e.f_;
                    if ("string" == typeof e) return $u(t, e);
                    throw ta("Field path arguments must be of type string or FieldPath.", t, !1, void 0, n)
                }
                var Zu = new RegExp("[~\\*/\\[\\]]");

                function $u(t, e, n) {
                    if (e.search(Zu) >= 0) throw ta("Invalid field path (" + e + "). Paths must not contain '~', '*', '/', '[', or ']'", t, !1, void 0, n);
                    try {
                        return (new(au.bind.apply(au, Object(s.g)([void 0], e.split("."))))).f_
                    } catch (r) {
                        throw ta("Invalid field path (" + e + "). Paths must not be empty, begin with '.', end with '.', or contain '..'", t, !1, void 0, n)
                    }
                }

                function ta(t, e, n, r, i) {
                    var o = r && !r.et(),
                        s = void 0 !== i,
                        u = "Function " + e + "() called with invalid data";
                    n && (u += " (via `toFirestore()`)");
                    var a = "";
                    return (o || s) && (a += " (found", o && (a += " in field " + r), s && (a += " in document " + i), a += ")"), new T(O.INVALID_ARGUMENT, (u += ". ") + t + a)
                }

                function ea(t, e) {
                    return t.some((function(t) {
                        return t.isEqual(e)
                    }))
                }
                var na = function() {
                        function t(t) {
                            this.Sh = t, this.Y_ = new Map, this.mutations = [], this.X_ = !1, this.Z_ = null, this.tf = new Set
                        }
                        return t.prototype.ef = function(t) {
                            return Object(s.b)(this, void 0, void 0, (function() {
                                var e, n = this;
                                return Object(s.d)(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            if (this.nf(), this.mutations.length > 0) throw new T(O.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                                            return [4, function(t, e) {
                                                return Object(s.b)(this, void 0, void 0, (function() {
                                                    var n, r, i, o, u, a;
                                                    return Object(s.d)(this, (function(s) {
                                                        switch (s.label) {
                                                            case 0:
                                                                return n = g(t), r = Dn(n.Qt) + "/documents", i = {
                                                                    documents: e.map((function(t) {
                                                                        return Nn(n.Qt, t)
                                                                    }))
                                                                }, [4, n.Du("BatchGetDocuments", r, i)];
                                                            case 1:
                                                                return o = s.sent(), u = new Map, o.forEach((function(t) {
                                                                    var e = function(t, e) {
                                                                        return "found" in e ? function(t, e) {
                                                                            y(!!e.found), e.found.name, e.found.updateTime;
                                                                            var n = An(t, e.found.name),
                                                                                r = On(e.found.updateTime),
                                                                                i = new dt({
                                                                                    mapValue: {
                                                                                        fields: e.found.fields
                                                                                    }
                                                                                });
                                                                            return new bt(n, r, i, {})
                                                                        }(t, e) : "missing" in e ? function(t, e) {
                                                                            y(!!e.missing), y(!!e.readTime);
                                                                            var n = An(t, e.missing),
                                                                                r = On(e.readTime);
                                                                            return new mt(n, r)
                                                                        }(t, e) : v()
                                                                    }(n.Qt, t);
                                                                    u.set(e.key.toString(), e)
                                                                })), a = [], [2, (e.forEach((function(t) {
                                                                    var e = u.get(t.toString());
                                                                    y(!!e), a.push(e)
                                                                })), a)]
                                                        }
                                                    }))
                                                }))
                                            }(this.Sh, t)];
                                        case 1:
                                            return [2, ((e = r.sent()).forEach((function(t) {
                                                t instanceof mt || t instanceof bt ? n.sf(t) : v()
                                            })), e)]
                                    }
                                }))
                            }))
                        }, t.prototype.set = function(t, e) {
                            this.write(e.F_(t, this.jt(t))), this.tf.add(t.toString())
                        }, t.prototype.update = function(t, e) {
                            try {
                                this.write(e.F_(t, this.rf(t)))
                            } catch (t) {
                                this.Z_ = t
                            }
                            this.tf.add(t.toString())
                        }, t.prototype.delete = function(t) {
                            this.write(new Me(t, this.jt(t))), this.tf.add(t.toString())
                        }, t.prototype.commit = function() {
                            return Object(s.b)(this, void 0, void 0, (function() {
                                var t, e = this;
                                return Object(s.d)(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (this.nf(), this.Z_) throw this.Z_;
                                            return t = this.Y_, this.mutations.forEach((function(e) {
                                                t.delete(e.key.toString())
                                            })), t.forEach((function(t, n) {
                                                var r = F._t(n);
                                                e.mutations.push(new Ue(r, e.jt(r)))
                                            })), [4, function(t, e) {
                                                return Object(s.b)(this, void 0, void 0, (function() {
                                                    var n, r, i;
                                                    return Object(s.d)(this, (function(o) {
                                                        switch (o.label) {
                                                            case 0:
                                                                return n = g(t), r = Dn(n.Qt) + "/documents", i = {
                                                                    writes: e.map((function(t) {
                                                                        return Rn(n.Qt, t)
                                                                    }))
                                                                }, [4, n.pu("Commit", r, i)];
                                                            case 1:
                                                                return o.sent(), [2]
                                                        }
                                                    }))
                                                }))
                                            }(this.Sh, this.mutations)];
                                        case 1:
                                            return n.sent(), this.X_ = !0, [2]
                                    }
                                }))
                            }))
                        }, t.prototype.sf = function(t) {
                            var e;
                            if (t instanceof bt) e = t.version;
                            else {
                                if (!(t instanceof mt)) throw v();
                                e = R.min()
                            }
                            var n = this.Y_.get(t.key.toString());
                            if (n) {
                                if (!e.isEqual(n)) throw new T(O.ABORTED, "Document version changed between two reads.")
                            } else this.Y_.set(t.key.toString(), e)
                        }, t.prototype.jt = function(t) {
                            var e = this.Y_.get(t.toString());
                            return !this.tf.has(t.toString()) && e ? Ie.updateTime(e) : Ie.Kt()
                        }, t.prototype.rf = function(t) {
                            var e = this.Y_.get(t.toString());
                            if (!this.tf.has(t.toString()) && e) {
                                if (e.isEqual(R.min())) throw new T(O.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
                                return Ie.updateTime(e)
                            }
                            return Ie.exists(!0)
                        }, t.prototype.write = function(t) {
                            this.nf(), this.mutations.push(t)
                        }, t.prototype.nf = function() {}, t
                    }(),
                    ra = function() {
                        function t(t, e, n, r) {
                            this._s = t, this.Sh = e, this.updateFunction = n, this.Es = r, this.cf = 5, this.Gu = new Do(this._s, "transaction_retry")
                        }
                        return t.prototype.run = function() {
                            this.af()
                        }, t.prototype.af = function() {
                            var t = this;
                            this.Gu.Lu((function() {
                                return Object(s.b)(t, void 0, void 0, (function() {
                                    var t, e, n = this;
                                    return Object(s.d)(this, (function(r) {
                                        return t = new na(this.Sh), (e = this.uf(t)) && e.then((function(e) {
                                            n._s.Ps((function() {
                                                return t.commit().then((function() {
                                                    n.Es.resolve(e)
                                                })).catch((function(t) {
                                                    n.hf(t)
                                                }))
                                            }))
                                        })).catch((function(t) {
                                            n.hf(t)
                                        })), [2]
                                    }))
                                }))
                            }))
                        }, t.prototype.uf = function(t) {
                            try {
                                var e = this.updateFunction(t);
                                return !Z(e) && e.catch && e.then ? e : (this.Es.reject(Error("Transaction callback must return a Promise")), null)
                            } catch (t) {
                                return this.Es.reject(t), null
                            }
                        }, t.prototype.hf = function(t) {
                            var e = this;
                            this.cf > 0 && this.lf(t) ? (this.cf -= 1, this._s.Ps((function() {
                                return e.af(), Promise.resolve()
                            }))) : this.Es.reject(t)
                        }, t.prototype.lf = function(t) {
                            if ("FirebaseError" === t.name) {
                                var e = t.code;
                                return "aborted" === e || "failed-precondition" === e || !qe(e)
                            }
                            return !1
                        }, t
                    }(),
                    ia = function() {
                        function t(t, e, n) {
                            var r = this;
                            this.credentials = t, this._s = e, this.yu = n, this.user = N.UNAUTHENTICATED, this.clientId = m.u(), this._f = function() {}, this.C = new Jn, this.credentials.v((function(t) {
                                f("FirestoreClient", "Received user=", t.uid), r.user = t, r._f(t), r.C.resolve()
                            }))
                        }
                        return t.prototype.getConfiguration = function() {
                            return Object(s.b)(this, void 0, void 0, (function() {
                                return Object(s.d)(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, this.C.promise];
                                        case 1:
                                            return [2, (t.sent(), {
                                                _s: this._s,
                                                yu: this.yu,
                                                clientId: this.clientId,
                                                credentials: this.credentials,
                                                Jl: this.user,
                                                pl: 100
                                            })]
                                    }
                                }))
                            }))
                        }, t.prototype.ff = function(t) {
                            var e = this;
                            this._f = t, this.C.promise.then((function() {
                                return e._f(e.user)
                            }))
                        }, t.prototype.df = function() {
                            if (this._s.wf) throw new T(O.FAILED_PRECONDITION, "The client has already been terminated.")
                        }, t.prototype.terminate = function() {
                            var t = this;
                            this._s.Ef();
                            var e = new Jn;
                            return this._s.Tf((function() {
                                return Object(s.b)(t, void 0, void 0, (function() {
                                    var t, n;
                                    return Object(s.d)(this, (function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return r.trys.push([0, 5, , 6]), this.If ? [4, this.If.terminate()] : [3, 2];
                                            case 1:
                                                r.sent(), r.label = 2;
                                            case 2:
                                                return this.mf ? [4, this.mf.terminate()] : [3, 4];
                                            case 3:
                                                r.sent(), r.label = 4;
                                            case 4:
                                                return this.credentials.S(), e.resolve(), [3, 6];
                                            case 5:
                                                return t = r.sent(), n = cr(t, "Failed to shutdown persistence"), e.reject(n), [3, 6];
                                            case 6:
                                                return [2]
                                        }
                                    }))
                                }))
                            })), e.promise
                        }, t
                    }();

                function oa(t, e) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var n, r, i = this;
                        return Object(s.d)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return t._s.Af(), f("FirestoreClient", "Initializing OfflineComponentProvider"), [4, t.getConfiguration()];
                                case 1:
                                    return n = o.sent(), [4, e.initialize(n)];
                                case 2:
                                    return o.sent(), r = n.Jl, t.ff((function(n) {
                                        r.isEqual(n) || (r = n, t._s.po((function() {
                                            return Object(s.b)(i, void 0, void 0, (function() {
                                                return Object(s.d)(this, (function(t) {
                                                    switch (t.label) {
                                                        case 0:
                                                            return [4, zi(e.bh, n)];
                                                        case 1:
                                                            return t.sent(), [2]
                                                    }
                                                }))
                                            }))
                                        })))
                                    })), e.persistence.Po((function() {
                                        return t.terminate()
                                    })), t.mf = e, [2]
                            }
                        }))
                    }))
                }

                function sa(t, e) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var n, r;
                        return Object(s.d)(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return t._s.Af(), [4, ua(t)];
                                case 1:
                                    return n = i.sent(), f("FirestoreClient", "Initializing OnlineComponentProvider"), [4, t.getConfiguration()];
                                case 2:
                                    return r = i.sent(), [4, e.initialize(n, r)];
                                case 3:
                                    return i.sent(), t.ff((function(n) {
                                        return t._s.po((function() {
                                            return function(t, e) {
                                                return Object(s.b)(this, void 0, void 0, (function() {
                                                    var n, r;
                                                    return Object(s.d)(this, (function(i) {
                                                        switch (i.label) {
                                                            case 0:
                                                                return (n = g(t))._s.Af(), f("RemoteStore", "RemoteStore received new credentials"), r = Qo(n), n.Nh.add(3), [4, Uo(n)];
                                                            case 1:
                                                                return i.sent(), r && n.Oh.set("Unknown"), [4, n.Dh.n_(e)];
                                                            case 2:
                                                                return i.sent(), n.Nh.delete(3), [4, Mo(n)];
                                                            case 3:
                                                                return i.sent(), [2]
                                                        }
                                                    }))
                                                }))
                                            }(e.yl, n)
                                        }))
                                    })), t.If = e, [2]
                            }
                        }))
                    }))
                }

                function ua(t) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        return Object(s.d)(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return t.mf ? [3, 2] : (f("FirestoreClient", "Using default OfflineComponentProvider"), [4, oa(t, new ru)]);
                                case 1:
                                    e.sent(), e.label = 2;
                                case 2:
                                    return [2, t.mf]
                            }
                        }))
                    }))
                }

                function aa(t) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        return Object(s.d)(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return t.If ? [3, 2] : (f("FirestoreClient", "Using default OnlineComponentProvider"), [4, sa(t, new su)]);
                                case 1:
                                    e.sent(), e.label = 2;
                                case 2:
                                    return [2, t.If]
                            }
                        }))
                    }))
                }

                function ca(t) {
                    return ua(t).then((function(t) {
                        return t.persistence
                    }))
                }

                function ha(t) {
                    return ua(t).then((function(t) {
                        return t.bh
                    }))
                }

                function fa(t) {
                    return aa(t).then((function(t) {
                        return t.yl
                    }))
                }

                function la(t) {
                    return aa(t).then((function(t) {
                        return t._a
                    }))
                }

                function pa(t) {
                    return Object(s.b)(this, void 0, void 0, (function() {
                        var e, n;
                        return Object(s.d)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, aa(t)];
                                case 1:
                                    return e = r.sent(), [2, ((n = e.gl).jh = js.bind(null, e._a), n.Hh = As.bind(null, e._a), n)]
                            }
                        }))
                    }))
                }

                function da(t, e, n) {
                    var r = this;
                    void 0 === n && (n = {});
                    var i = new Jn;
                    return t._s.Ps((function() {
                        return Object(s.b)(r, void 0, void 0, (function() {
                            var r;
                            return Object(s.d)(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return r = function(t, e, n, r, i) {
                                            var o = new uu({
                                                    next: function(o) {
                                                        e.Ps((function() {
                                                            return ls(t, s)
                                                        }));
                                                        var u = o.docs.has(n);
                                                        !u && o.fromCache ? i.reject(new T(O.UNAVAILABLE, "Failed to get document because the client is offline.")) : u && o.fromCache && r && "server" === r.source ? i.reject(new T(O.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(o)
                                                    },
                                                    error: function(t) {
                                                        return i.reject(t)
                                                    }
                                                }),
                                                s = new ys(Gt(n.path), o, {
                                                    includeMetadataChanges: !0,
                                                    nl: !0
                                                });
                                            return fs(t, s)
                                        }, [4, pa(t)];
                                    case 1:
                                        return [2, r.apply(void 0, [o.sent(), t._s, e, n, i])]
                                }
                            }))
                        }))
                    })), i.promise
                }

                function va(t, e, n) {
                    var r = this;
                    void 0 === n && (n = {});
                    var i = new Jn;
                    return t._s.Ps((function() {
                        return Object(s.b)(r, void 0, void 0, (function() {
                            var r;
                            return Object(s.d)(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return r = function(t, e, n, r, i) {
                                            var o = new uu({
                                                    next: function(n) {
                                                        e.Ps((function() {
                                                            return ls(t, s)
                                                        })), n.fromCache && "server" === r.source ? i.reject(new T(O.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n)
                                                    },
                                                    error: function(t) {
                                                        return i.reject(t)
                                                    }
                                                }),
                                                s = new ys(n, o, {
                                                    includeMetadataChanges: !0,
                                                    nl: !0
                                                });
                                            return fs(t, s)
                                        }, [4, pa(t)];
                                    case 1:
                                        return [2, r.apply(void 0, [o.sent(), t._s, e, n, i])]
                                }
                            }))
                        }))
                    })), i.promise
                }
                var ya = function() {
                    function t() {
                        var t = this;
                        this.Rf = Promise.resolve(), this.Pf = [], this.yf = !1, this.gf = [], this.Vf = null, this.pf = !1, this.bf = [], this.Gu = new Do(this, "async_queue_retry"), this.vf = function() {
                            var e = So();
                            e && f("AsyncQueue", "Visibility state changed to " + e.visibilityState), t.Gu.qu()
                        };
                        var e = So();
                        e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.vf)
                    }
                    return Object.defineProperty(t.prototype, "wf", {
                        get: function() {
                            return this.yf
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.Ps = function(t) {
                        this.enqueue(t)
                    }, t.prototype.Tf = function(t) {
                        this.Sf(), this.Df(t)
                    }, t.prototype.Ef = function() {
                        if (!this.yf) {
                            this.yf = !0;
                            var t = So();
                            t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.vf)
                        }
                    }, t.prototype.enqueue = function(t) {
                        return this.Sf(), this.yf ? new Promise((function(t) {})) : this.Df(t)
                    }, t.prototype.po = function(t) {
                        var e = this;
                        this.Ps((function() {
                            return e.Pf.push(t), e.Cf()
                        }))
                    }, t.prototype.Cf = function() {
                        return Object(s.b)(this, void 0, void 0, (function() {
                            var t, e = this;
                            return Object(s.d)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (0 === this.Pf.length) return [3, 5];
                                        n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, this.Pf[0]()];
                                    case 2:
                                        return n.sent(), this.Pf.shift(), this.Gu.reset(), [3, 4];
                                    case 3:
                                        if (!rr(t = n.sent())) throw t;
                                        return f("AsyncQueue", "Operation failed with retryable error: " + t), [3, 4];
                                    case 4:
                                        this.Pf.length > 0 && this.Gu.Lu((function() {
                                            return e.Cf()
                                        })), n.label = 5;
                                    case 5:
                                        return [2]
                                }
                            }))
                        }))
                    }, t.prototype.Df = function(t) {
                        var e = this,
                            n = this.Rf.then((function() {
                                return e.pf = !0, t().catch((function(t) {
                                    throw e.Vf = t, e.pf = !1, l("INTERNAL UNHANDLED ERROR: ", function(t) {
                                        var e = t.message || "";
                                        return t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack), e
                                    }(t)), t
                                })).then((function(t) {
                                    return e.pf = !1, t
                                }))
                            }));
                        return this.Rf = n, n
                    }, t.prototype.Tr = function(t, e, n) {
                        var r = this;
                        this.Sf(), this.bf.indexOf(t) > -1 && (e = 0);
                        var i = ar.Ts(this, t, e, n, (function(t) {
                            return r.xf(t)
                        }));
                        return this.gf.push(i), i
                    }, t.prototype.Sf = function() {
                        this.Vf && v()
                    }, t.prototype.Af = function() {}, t.prototype.Nf = function() {
                        return Object(s.b)(this, void 0, void 0, (function() {
                            var t;
                            return Object(s.d)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, t = this.Rf];
                                    case 1:
                                        e.sent(), e.label = 2;
                                    case 2:
                                        if (t !== this.Rf) return [3, 0];
                                        e.label = 3;
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    }, t.prototype.$f = function(t) {
                        for (var e = 0, n = this.gf; e < n.length; e++)
                            if (n[e].fs === t) return !0;
                        return !1
                    }, t.prototype.Ff = function(t) {
                        var e = this;
                        return this.Nf().then((function() {
                            e.gf.sort((function(t, e) {
                                return t.ds - e.ds
                            }));
                            for (var n = 0, r = e.gf; n < r.length; n++) {
                                var i = r[n];
                                if (i.Rs(), "all" !== t && i.fs === t) break
                            }
                            return e.Nf()
                        }))
                    }, t.prototype.Of = function(t) {
                        this.bf.push(t)
                    }, t.prototype.xf = function(t) {
                        var e = this.gf.indexOf(t);
                        this.gf.splice(e, 1)
                    }, t
                }();

                function ga(t) {
                    return function(t, e) {
                        if ("object" != typeof t || null === t) return !1;
                        for (var n = t, r = 0, i = ["next", "error", "complete"]; r < i.length; r++) {
                            var o = i[r];
                            if (o in n && "function" == typeof n[o]) return !0
                        }
                        return !1
                    }(t)
                }! function() {
                    function t() {
                        this.kf = {}, this.Mf = new Jn, this.Lf = {
                            taskState: "Running",
                            totalBytes: 0,
                            totalDocuments: 0,
                            bytesLoaded: 0,
                            documentsLoaded: 0
                        }
                    }
                    t.prototype.onProgress = function(t, e, n) {
                        this.kf = {
                            next: t,
                            error: e,
                            complete: n
                        }
                    }, t.prototype.catch = function(t) {
                        return this.Mf.promise.catch(t)
                    }, t.prototype.then = function(t, e) {
                        return this.Mf.promise.then(t, e)
                    }, t.prototype.ql = function(t) {
                        this.Ul(t), this.kf.complete && this.kf.complete(), this.Mf.resolve(t)
                    }, t.prototype.Kl = function(t) {
                        this.Lf.taskState = "Error", this.kf.next && this.kf.next(this.Lf), this.kf.error && this.kf.error(t), this.Mf.reject(t)
                    }, t.prototype.Ul = function(t) {
                        this.Lf = t, this.kf.next && this.kf.next(t)
                    }
                }();
                var ba = -1,
                    ma = function(t) {
                        function e(e, n) {
                            var r = this;
                            return (r = t.call(this, e, n) || this).Bf = new ya, r.w_ = "name" in e ? e.name : "[DEFAULT]", r
                        }
                        return Object(s.c)(e, t), e.prototype.b_ = function() {
                            return this.qf || _a(this), this.qf.terminate()
                        }, e
                    }(_u);

                function wa(t) {
                    return t.qf || _a(t), t.qf.df(), t.qf
                }

                function _a(t) {
                    var e = t.p_(),
                        n = function(t, e, n) {
                            return new u(t, e, n.host, n.ssl, n.experimentalForceLongPolling, n.experimentalAutoDetectLongPolling)
                        }(t.I_, t.w_, e);
                    t.qf = new ia(t.m_, t.Bf, n)
                }

                function Ia(t, e, n) {
                    var r = this,
                        i = new Jn;
                    return t._s.enqueue((function() {
                        return Object(s.b)(r, void 0, void 0, (function() {
                            var r;
                            return Object(s.d)(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return o.trys.push([0, 3, , 4]), [4, oa(t, n)];
                                    case 1:
                                        return o.sent(), [4, sa(t, e)];
                                    case 2:
                                        return o.sent(), i.resolve(), [3, 4];
                                    case 3:
                                        if (! function(t) {
                                                return "FirebaseError" === t.name ? t.code === O.FAILED_PRECONDITION || t.code === O.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || 22 === t.code || 20 === t.code || 11 === t.code
                                            }(r = o.sent())) throw r;
                                        return i.reject(r), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    })).then((function() {
                        return i.promise
                    }))
                }

                function Ea(t) {
                    if (t.R_ || t.P_) throw new T(O.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")
                }
                var Oa = function() {
                        function t() {}
                        return t.prototype.Uf = function(t, e) {
                            switch (void 0 === e && (e = "none"), et(t)) {
                                case 0:
                                    return null;
                                case 1:
                                    return t.booleanValue;
                                case 2:
                                    return Y(t.integerValue || t.doubleValue);
                                case 3:
                                    return this.Qf(t.timestampValue);
                                case 4:
                                    return this.Kf(t, e);
                                case 5:
                                    return t.stringValue;
                                case 6:
                                    return this.Wf(K(t.bytesValue));
                                case 7:
                                    return this.jf(t.referenceValue);
                                case 8:
                                    return this.Gf(t.geoPointValue);
                                case 9:
                                    return this.zf(t.arrayValue, e);
                                case 10:
                                    return this.Hf(t.mapValue, e);
                                default:
                                    throw v()
                            }
                        }, t.prototype.Hf = function(t, e) {
                            var n = this,
                                r = {};
                            return z(t.fields || {}, (function(t, i) {
                                r[t] = n.Uf(i, e)
                            })), r
                        }, t.prototype.Gf = function(t) {
                            return new Su(Y(t.latitude), Y(t.longitude))
                        }, t.prototype.zf = function(t, e) {
                            var n = this;
                            return (t.values || []).map((function(t) {
                                return n.Uf(t, e)
                            }))
                        }, t.prototype.Kf = function(t, e) {
                            switch (e) {
                                case "previous":
                                    var n = W(t);
                                    return null == n ? null : this.Uf(n, e);
                                case "estimate":
                                    return this.Qf(J(t));
                                default:
                                    return null
                            }
                        }, t.prototype.Qf = function(t) {
                            var e = Q(t);
                            return new C(e.seconds, e.nanos)
                        }, t.prototype.Jf = function(t, e) {
                            var n = V.ot(t);
                            y(Wn(n));
                            var r = new a(n.get(1), n.get(3)),
                                i = new F(n.Y(5));
                            return r.isEqual(e) || l("Document " + i + " contains a document reference within a different database (" + r.projectId + "/" + r.database + ") which is not supported. It will be treated as a reference in the current database (" + e.projectId + "/" + e.database + ") instead."), i
                        }, t
                    }(),
                    Ta = function() {
                        function t(t, e, n, r, i) {
                            this.Yf = t, this.Xf = e, this.S_ = n, this.Zf = r, this.v_ = i
                        }
                        return Object.defineProperty(t.prototype, "id", {
                            get: function() {
                                return this.S_.path.tt()
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "ref", {
                            get: function() {
                                return new Iu(this.Yf, this.v_, this.S_)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.exists = function() {
                            return null !== this.Zf
                        }, t.prototype.data = function() {
                            if (this.Zf) {
                                if (this.v_) {
                                    var t = new ja(this.Yf, this.Xf, this.S_, this.Zf, null);
                                    return this.v_.fromFirestore(t)
                                }
                                return this.Xf.Uf(this.Zf.bt())
                            }
                        }, t.prototype.get = function(t) {
                            if (this.Zf) {
                                var e = this.Zf.data().field(Na("DocumentSnapshot.get", t));
                                if (null !== e) return this.Xf.Uf(e)
                            }
                        }, t
                    }(),
                    ja = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return Object(s.c)(e, t), e.prototype.data = function() {
                            return t.prototype.data.call(this)
                        }, e
                    }(Ta);

                function Na(t, e) {
                    return "string" == typeof e ? $u(t, e) : e instanceof hu ? e.d_.f_ : e.f_
                }

                function Aa(t) {
                    if (Ht(t) && 0 === t.xt.length) throw new T(O.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause")
                }
                var Sa = function() {};

                function xa(t) {
                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    for (var r = 0, i = e; r < i.length; r++) {
                        var o = i[r];
                        t = o.td(t)
                    }
                    return t
                }
                var Da = function(t) {
                        function e(e, n, r) {
                            var i = this;
                            return (i = t.call(this) || this).ed = e, i.nd = n, i.sd = r, i.type = "where", i
                        }
                        return Object(s.c)(e, t), e.prototype.td = function(t) {
                            var e = Lu(t.firestore),
                                n = function(t, e, n, r, i, o, s) {
                                    var u;
                                    if (i.ut()) {
                                        if ("array-contains" === o || "array-contains-any" === o) throw new T(O.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");
                                        if ("in" === o || "not-in" === o) {
                                            Ma(s, o);
                                            for (var a = [], c = 0, h = s; c < h.length; c++) {
                                                var f = h[c];
                                                a.push(Va(r, t, f))
                                            }
                                            u = {
                                                arrayValue: {
                                                    values: a
                                                }
                                            }
                                        } else u = Va(r, t, s)
                                    } else "in" !== o && "not-in" !== o && "array-contains-any" !== o || Ma(s, o), u = Qu(n, "where", s, "in" === o || "not-in" === o);
                                    var l = jt.create(i, o, u);
                                    return function(t, e) {
                                        if (e.Ct()) {
                                            var n = Yt(t);
                                            if (null !== n && !n.isEqual(e.field)) throw new T(O.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '" + n.toString() + "' and '" + e.field.toString() + "'");
                                            var r = Qt(t);
                                            null !== r && Ua(t, e.field, r)
                                        }
                                        var i = function(t, e) {
                                            for (var n = 0, r = t.filters; n < r.length; n++) {
                                                var i = r[n];
                                                if (e.indexOf(i.op) >= 0) return i.op
                                            }
                                            return null
                                        }(t, function(t) {
                                            switch (t) {
                                                case "!=":
                                                    return ["!=", "not-in"];
                                                case "array-contains":
                                                    return ["array-contains", "array-contains-any", "not-in"];
                                                case "in":
                                                    return ["array-contains-any", "in", "not-in"];
                                                case "array-contains-any":
                                                    return ["array-contains", "array-contains-any", "in", "not-in"];
                                                case "not-in":
                                                    return ["array-contains", "array-contains-any", "in", "not-in", "!="];
                                                default:
                                                    return []
                                            }
                                        }(e.op));
                                        if (null !== i) throw i === e.op ? new T(O.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + e.op.toString() + "' filter.") : new T(O.INVALID_ARGUMENT, "Invalid query. You cannot use '" + e.op.toString() + "' filters with '" + i.toString() + "' filters.")
                                    }(t, l), l
                                }(t.C_, 0, e, t.firestore.I_, this.ed, this.nd, this.sd);
                            return new Eu(t.firestore, t.v_, function(t, e) {
                                var n = t.filters.concat([e]);
                                return new qt(t.path, t.collectionGroup, t.xt.slice(), n, t.limit, t.limitType, t.startAt, t.endAt)
                            }(t.C_, n))
                        }, e
                    }(Sa),
                    ka = function(t) {
                        function e(e, n) {
                            var r = this;
                            return (r = t.call(this) || this).ed = e, r.rd = n, r.type = "orderBy", r
                        }
                        return Object(s.c)(e, t), e.prototype.td = function(t) {
                            var e = function(t, e, n) {
                                if (null !== t.startAt) throw new T(O.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
                                if (null !== t.endAt) throw new T(O.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
                                var r = new Vt(e, n);
                                return function(t, e) {
                                    if (null === Qt(t)) {
                                        var n = Yt(t);
                                        null !== n && Ua(t, n, e.field)
                                    }
                                }(t, r), r
                            }(t.C_, this.ed, this.rd);
                            return new Eu(t.firestore, t.v_, function(t, e) {
                                var n = t.xt.concat([e]);
                                return new qt(t.path, t.collectionGroup, n, t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt)
                            }(t.C_, e))
                        }, e
                    }(Sa),
                    Pa = function(t) {
                        function e(e, n, r) {
                            var i = this;
                            return (i = t.call(this) || this).type = e, i.od = n, i.ad = r, i
                        }
                        return Object(s.c)(e, t), e.prototype.td = function(t) {
                            return new Eu(t.firestore, t.v_, Jt(t.C_, this.od, this.ad))
                        }, e
                    }(Sa),
                    Ca = function(t) {
                        function e(e, n, r) {
                            var i = this;
                            return (i = t.call(this) || this).type = e, i.ud = n, i.hd = r, i
                        }
                        return Object(s.c)(e, t), e.prototype.td = function(t) {
                            var e = La(t, this.type, this.ud, this.hd);
                            return new Eu(t.firestore, t.v_, function(t, e) {
                                return new qt(t.path, t.collectionGroup, t.xt.slice(), t.filters.slice(), t.limit, t.limitType, e, t.endAt)
                            }(t.C_, e))
                        }, e
                    }(Sa),
                    Ra = function(t) {
                        function e(e, n, r) {
                            var i = this;
                            return (i = t.call(this) || this).type = e, i.ud = n, i.hd = r, i
                        }
                        return Object(s.c)(e, t), e.prototype.td = function(t) {
                            var e = La(t, this.type, this.ud, this.hd);
                            return new Eu(t.firestore, t.v_, function(t, e) {
                                return new qt(t.path, t.collectionGroup, t.xt.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, e)
                            }(t.C_, e))
                        }, e
                    }(Sa);

                function La(t, e, n, r) {
                    if (n[0] instanceof hu && (n[0] = n[0].d_), n[0] instanceof Ta) return function(t, e, n, r, i) {
                        if (!r) throw new T(O.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + n + "().");
                        for (var o = [], s = 0, u = Xt(t); s < u.length; s++) {
                            var a = u[s];
                            if (a.field.ut()) o.push(at(e, r.key));
                            else {
                                var c = r.field(a.field);
                                if (X(c)) throw new T(O.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + a.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                                if (null === c) {
                                    var h = a.field.rt();
                                    throw new T(O.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + h + "' (used as the orderBy) does not exist.")
                                }
                                o.push(c)
                            }
                        }
                        return new Rt(o, i)
                    }(t.C_, t.firestore.I_, e, n[0].Zf, r);
                    var i = Lu(t.firestore);
                    return function(t, e, n, r, i, o) {
                        var s = t.xt;
                        if (i.length > s.length) throw new T(O.INVALID_ARGUMENT, "Too many arguments provided to " + r + "(). The number of arguments must be less than or equal to the number of orderBy() clauses");
                        for (var u = [], a = 0; a < i.length; a++) {
                            var c = i[a];
                            if (s[a].field.ut()) {
                                if ("string" != typeof c) throw new T(O.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + r + "(), but got a " + typeof c);
                                if (!Kt(t) && -1 !== c.indexOf("/")) throw new T(O.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + r + "() must be a plain document ID, but '" + c + "' contains a slash.");
                                var h = t.path.child(V.ot(c));
                                if (!F.wt(h)) throw new T(O.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + r + "() must result in a valid document path, but '" + h + "' is not because it contains an odd number of segments.");
                                var f = new F(h);
                                u.push(at(e, f))
                            } else {
                                var l = Qu(n, r, c);
                                u.push(l)
                            }
                        }
                        return new Rt(u, o)
                    }(t.C_, t.firestore.I_, i, e, n, r)
                }

                function Va(t, e, n) {
                    if (n instanceof hu && (n = n.d_), "string" == typeof n) {
                        if ("" === n) throw new T(O.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
                        if (!Kt(e) && -1 !== n.indexOf("/")) throw new T(O.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + n + "' contains a '/' character.");
                        var r = e.path.child(V.ot(n));
                        if (!F.wt(r)) throw new T(O.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + r + "' is not because it has an odd number of segments (" + r.length + ").");
                        return at(t, new F(r))
                    }
                    if (n instanceof Iu) return at(t, n.S_);
                    throw new T(O.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + yu(n) + ".")
                }

                function Ma(t, e) {
                    if (!Array.isArray(t) || 0 === t.length) throw new T(O.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
                    if (t.length > 10) throw new T(O.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.")
                }

                function Ua(t, e, n) {
                    if (!n.isEqual(e)) throw new T(O.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first argument to orderBy(), but your first orderBy() is on field '" + n.toString() + "' instead.")
                }

                function Fa(t, e, n) {
                    return t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e
                }
                var qa = function(t) {
                        function e(e) {
                            var n = this;
                            return (n = t.call(this) || this).firestore = e, n
                        }
                        return Object(s.c)(e, t), e.prototype.Wf = function(t) {
                            return new j(t)
                        }, e.prototype.jf = function(t) {
                            var e = this.Jf(t, this.firestore.I_);
                            return new Iu(this.firestore, null, e)
                        }, e
                    }(Oa),
                    za = function() {
                        function t(t, e) {
                            this.hasPendingWrites = t, this.fromCache = e
                        }
                        return t.prototype.isEqual = function(t) {
                            return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache
                        }, t
                    }(),
                    Ga = function(t) {
                        function e(e, n, r, i, o, s) {
                            var u = this;
                            return (u = t.call(this, e, n, r, i, s) || this).Yf = e, u.ld = e, u.metadata = o, u
                        }
                        return Object(s.c)(e, t), e.prototype.exists = function() {
                            return t.prototype.exists.call(this)
                        }, e.prototype.data = function(t) {
                            if (void 0 === t && (t = {}), this.Zf) {
                                if (this.v_) {
                                    var e = new Ba(this.Yf, this.Xf, this.S_, this.Zf, this.metadata, null);
                                    return this.v_.fromFirestore(e, t)
                                }
                                return this.Xf.Uf(this.Zf.bt(), t.serverTimestamps)
                            }
                        }, e.prototype.get = function(t, e) {
                            if (void 0 === e && (e = {}), this.Zf) {
                                var n = this.Zf.data().field(Na("DocumentSnapshot.get", t));
                                if (null !== n) return this.Xf.Uf(n, e.serverTimestamps)
                            }
                        }, e
                    }(Ta),
                    Ba = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return Object(s.c)(e, t), e.prototype.data = function(e) {
                            return void 0 === e && (e = {}), t.prototype.data.call(this, e)
                        }, e
                    }(Ga),
                    Ha = function() {
                        function t(t, e, n, r) {
                            this.Yf = t, this.Xf = e, this._d = r, this.metadata = new za(r.hasPendingWrites, r.fromCache), this.query = n
                        }
                        return Object.defineProperty(t.prototype, "docs", {
                            get: function() {
                                var t = [];
                                return this.forEach((function(e) {
                                    return t.push(e)
                                })), t
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "size", {
                            get: function() {
                                return this._d.docs.size
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "empty", {
                            get: function() {
                                return 0 === this.size
                            },
                            enumerable: !1,
                            configurable: !0
                        }), t.prototype.forEach = function(t, e) {
                            var n = this;
                            this._d.docs.forEach((function(r) {
                                t.call(e, new Ba(n.Yf, n.Xf, r.key, r, new za(n._d.De.has(r.key), n._d.fromCache), n.query.v_))
                            }))
                        }, t.prototype.docChanges = function(t) {
                            void 0 === t && (t = {});
                            var e = !!t.includeMetadataChanges;
                            if (e && this._d.xe) throw new T(O.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
                            return this.fd && this.dd === e || (this.fd = function(t, e) {
                                if (t._d.Se.et()) {
                                    var n = 0;
                                    return t._d.docChanges.map((function(e) {
                                        var r = new Ba(t.Yf, t.Xf, e.doc.key, e.doc, new za(t._d.De.has(e.doc.key), t._d.fromCache), t.query.v_);
                                        return e.doc, {
                                            type: "added",
                                            doc: r,
                                            oldIndex: -1,
                                            newIndex: n++
                                        }
                                    }))
                                }
                                var r = t._d.Se;
                                return t._d.docChanges.filter((function(t) {
                                    return e || 3 !== t.type
                                })).map((function(e) {
                                    var n = new Ba(t.Yf, t.Xf, e.doc.key, e.doc, new za(t._d.De.has(e.doc.key), t._d.fromCache), t.query.v_),
                                        i = -1,
                                        o = -1;
                                    return 0 !== e.type && (i = r.indexOf(e.doc.key), r = r.delete(e.doc.key)), 1 !== e.type && (o = (r = r.add(e.doc)).indexOf(e.doc.key)), {
                                        type: Qa(e.type),
                                        doc: n,
                                        oldIndex: i,
                                        newIndex: o
                                    }
                                }))
                            }(this, e), this.dd = e), this.fd
                        }, t
                    }();

                function Qa(t) {
                    switch (t) {
                        case 0:
                            return "added";
                        case 2:
                        case 3:
                            return "modified";
                        case 1:
                            return "removed";
                        default:
                            return v()
                    }
                }

                function Ya(t, e) {
                    return t instanceof Ga && e instanceof Ga ? t.Yf === e.Yf && t.S_.isEqual(e.S_) && (null === t.Zf ? null === e.Zf : t.Zf.isEqual(e.Zf)) && t.v_ === e.v_ : t instanceof Ha && e instanceof Ha && t.Yf === e.Yf && Au(t.query, e.query) && t.metadata.isEqual(e.metadata) && t._d.isEqual(e._d)
                }
                var Ka = function(t) {
                    function e(e) {
                        var n = this;
                        return (n = t.call(this) || this).firestore = e, n
                    }
                    return Object(s.c)(e, t), e.prototype.Wf = function(t) {
                        return new j(t)
                    }, e.prototype.jf = function(t) {
                        var e = this.Jf(t, this.firestore.I_);
                        return new Iu(this.firestore, null, e)
                    }, e
                }(Oa);

                function Xa(t, e, n) {
                    for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
                    t = gu(t, Iu);
                    var o = gu(t.firestore, ma),
                        s = Lu(o);
                    return e instanceof hu && (e = e.d_), Ja(o, [("string" == typeof e || e instanceof au ? Hu(s, "updateDoc", t.S_, e, n, r) : Bu(s, "updateDoc", t.S_, e)).F_(t.S_, Ie.exists(!0))])
                }

                function Wa(t) {
                    for (var e, n, r, i = [], o = 1; o < arguments.length; o++) i[o - 1] = arguments[o];
                    t instanceof hu && (t = t.d_);
                    var u = {
                            includeMetadataChanges: !1
                        },
                        a = 0;
                    "object" != typeof i[a] || ga(i[a]) || (u = i[a], a++);
                    var c, h, f, l = {
                        includeMetadataChanges: u.includeMetadataChanges
                    };
                    if (ga(i[a])) {
                        var p = i[a];
                        i[a] = null === (e = p.next) || void 0 === e ? void 0 : e.bind(p), i[a + 1] = null === (n = p.error) || void 0 === n ? void 0 : n.bind(p), i[a + 2] = null === (r = p.complete) || void 0 === r ? void 0 : r.bind(p)
                    }
                    if (t instanceof Iu) h = gu(t.firestore, ma), f = Gt(t.S_.path), c = {
                        next: function(e) {
                            i[a] && i[a](Za(h, t, e))
                        },
                        error: i[a + 1],
                        complete: i[a + 2]
                    };
                    else {
                        var d = gu(t, Eu);
                        h = gu(d.firestore, ma), f = d.C_;
                        var v = new Ka(h);
                        c = {
                            next: function(t) {
                                i[a] && i[a](new Ha(h, v, d, t))
                            },
                            error: i[a + 1],
                            complete: i[a + 2]
                        }, Aa(t.C_)
                    }
                    return function(t, e, n, r) {
                        var i = this,
                            o = new uu(r),
                            u = new ys(e, o, n);
                        return t._s.Ps((function() {
                                return Object(s.b)(i, void 0, void 0, (function() {
                                    var e;
                                    return Object(s.d)(this, (function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return e = fs, [4, pa(t)];
                                            case 1:
                                                return [2, e.apply(void 0, [n.sent(), u])]
                                        }
                                    }))
                                }))
                            })),
                            function() {
                                o.i_(), t._s.Ps((function() {
                                    return Object(s.b)(i, void 0, void 0, (function() {
                                        var e;
                                        return Object(s.d)(this, (function(n) {
                                            switch (n.label) {
                                                case 0:
                                                    return e = ls, [4, pa(t)];
                                                case 1:
                                                    return [2, e.apply(void 0, [n.sent(), u])]
                                            }
                                        }))
                                    }))
                                }))
                            }
                    }(wa(h), f, l, c)
                }

                function Ja(t, e) {
                    return function(t, e) {
                        var n = this,
                            r = new Jn;
                        return t._s.Ps((function() {
                            return Object(s.b)(n, void 0, void 0, (function() {
                                var n;
                                return Object(s.d)(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return n = Ss, [4, la(t)];
                                        case 1:
                                            return [2, n.apply(void 0, [i.sent(), e, r])]
                                    }
                                }))
                            }))
                        })), r.promise
                    }(wa(t), e)
                }

                function Za(t, e, n) {
                    var r = n.docs.get(e.S_),
                        i = new Ka(t);
                    return new Ga(t, i, e.S_, r, new za(n.hasPendingWrites, n.fromCache), e.v_)
                }
                var $a = function() {
                    function t(t, e) {
                        this.Yf = t, this.wd = e, this.Ed = [], this.Td = !1, this.Id = Lu(t)
                    }
                    return t.prototype.set = function(t, e, n) {
                        this.md();
                        var r = tc(t, this.Yf),
                            i = Fa(r.v_, e, n),
                            o = Vu(this.Id, "WriteBatch.set", r.S_, i, null !== r.v_, n);
                        return this.Ed.push(o.F_(r.S_, Ie.Kt())), this
                    }, t.prototype.update = function(t, e, n) {
                        for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
                        this.md();
                        var o, s = tc(t, this.Yf);
                        return e instanceof hu && (e = e.d_), o = "string" == typeof e || e instanceof au ? Hu(this.Id, "WriteBatch.update", s.S_, e, n, r) : Bu(this.Id, "WriteBatch.update", s.S_, e), this.Ed.push(o.F_(s.S_, Ie.exists(!0))), this
                    }, t.prototype.delete = function(t) {
                        this.md();
                        var e = tc(t, this.Yf);
                        return this.Ed = this.Ed.concat(new Me(e.S_, Ie.Kt())), this
                    }, t.prototype.commit = function() {
                        return this.md(), this.Td = !0, this.Ed.length > 0 ? this.wd(this.Ed) : Promise.resolve()
                    }, t.prototype.md = function() {
                        if (this.Td) throw new T(O.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.")
                    }, t
                }();

                function tc(t, e) {
                    if (t instanceof hu && (t = t.d_), t.firestore !== e) throw new T(O.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
                    return t
                }
                var ec = function(t) {
                    function e(e, n) {
                        var r = this;
                        return (r = t.call(this, e, n) || this).Yf = e, r
                    }
                    return Object(s.c)(e, t), e.prototype.get = function(e) {
                        var n = this,
                            r = tc(e, this.Yf),
                            i = new Ka(this.Yf);
                        return t.prototype.get.call(this, e).then((function(t) {
                            return new Ga(n.Yf, i, r.S_, t.Zf, new za(!1, !1), r.v_)
                        }))
                    }, e
                }(function() {
                    function t(t, e) {
                        this.Yf = t, this.Ad = e, this.Id = Lu(t)
                    }
                    return t.prototype.get = function(t) {
                        var e = this,
                            n = tc(t, this.Yf),
                            r = new qa(this.Yf);
                        return this.Ad.ef([n.S_]).then((function(t) {
                            if (!t || 1 !== t.length) return v();
                            var i = t[0];
                            if (i instanceof mt) return new Ta(e.Yf, r, n.S_, null, n.v_);
                            if (i instanceof bt) return new Ta(e.Yf, r, i.key, i, n.v_);
                            throw v()
                        }))
                    }, t.prototype.set = function(t, e, n) {
                        var r = tc(t, this.Yf),
                            i = Fa(r.v_, e, n),
                            o = Vu(this.Id, "Transaction.set", r.S_, i, null !== r.v_, n);
                        return this.Ad.set(r.S_, o), this
                    }, t.prototype.update = function(t, e, n) {
                        for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
                        var o, s = tc(t, this.Yf);
                        return e instanceof hu && (e = e.d_), o = "string" == typeof e || e instanceof au ? Hu(this.Id, "Transaction.update", s.S_, e, n, r) : Bu(this.Id, "Transaction.update", s.S_, e), this.Ad.update(s.S_, o), this
                    }, t.prototype.delete = function(t) {
                        var e = tc(t, this.Yf);
                        return this.Ad.delete(e.S_), this
                    }, t
                }());

                function nc() {
                    if ("undefined" == typeof Uint8Array) throw new T(O.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.")
                }

                function rc() {
                    if ("undefined" == typeof atob) throw new T(O.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.")
                }
                var ic = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return Object(s.c)(e, t), e.fromBase64String = function(t) {
                            return rc(), new e(j.fromBase64String(t))
                        }, e.fromUint8Array = function(t) {
                            return nc(), new e(j.fromUint8Array(t))
                        }, e.prototype.toBase64 = function() {
                            return rc(), this.d_.toBase64()
                        }, e.prototype.toUint8Array = function() {
                            return nc(), this.d_.toUint8Array()
                        }, e.prototype.isEqual = function(t) {
                            return this.d_.isEqual(t.d_)
                        }, e.prototype.toString = function() {
                            return "Blob(base64: " + this.toBase64() + ")"
                        }, e
                    }(hu),
                    oc = function() {
                        function t() {}
                        return t.prototype.enableIndexedDbPersistence = function(t, e) {
                            return function(t, e) {
                                Ea(t = gu(t, ma));
                                var n = wa(t),
                                    r = t.p_(),
                                    i = new su;
                                return Ia(n, i, new iu(i, r.cacheSizeBytes, null == e ? void 0 : e.forceOwnership))
                            }(t.d_, {
                                forceOwnership: e
                            })
                        }, t.prototype.enableMultiTabIndexedDbPersistence = function(t) {
                            return function(t) {
                                Ea(t = gu(t, ma));
                                var e = wa(t),
                                    n = t.p_(),
                                    r = new su;
                                return Ia(e, r, new ou(r, n.cacheSizeBytes))
                            }(t.d_)
                        }, t.prototype.clearIndexedDbPersistence = function(t) {
                            return function(t) {
                                var e = this;
                                if (t.R_ && !t.P_) throw new T(O.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
                                var n = new Jn;
                                return t.Bf.Tf((function() {
                                    return Object(s.b)(e, void 0, void 0, (function() {
                                        var e;
                                        return Object(s.d)(this, (function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    return r.trys.push([0, 2, , 3]), [4, function(t) {
                                                        return Object(s.b)(this, void 0, void 0, (function() {
                                                            var e;
                                                            return Object(s.d)(this, (function(n) {
                                                                switch (n.label) {
                                                                    case 0:
                                                                        return tr.Kn() ? (e = t + "main", [4, tr.delete(e)]) : [2, Promise.resolve()];
                                                                    case 1:
                                                                        return n.sent(), [2]
                                                                }
                                                            }))
                                                        }))
                                                    }(Ri(t.I_, t.w_))];
                                                case 1:
                                                    return r.sent(), n.resolve(), [3, 3];
                                                case 2:
                                                    return e = r.sent(), n.reject(e), [3, 3];
                                                case 3:
                                                    return [2]
                                            }
                                        }))
                                    }))
                                })), n.promise
                            }(t.d_)
                        }, t
                    }(),
                    sc = function(t) {
                        function e(e, n, r) {
                            var i = this;
                            return (i = t.call(this, n) || this).Rd = r, i.INTERNAL = {
                                delete: function() {
                                    return i.terminate()
                                }
                            }, e instanceof a || (i.Pd = e), i
                        }
                        return Object(s.c)(e, t), Object.defineProperty(e.prototype, "I_", {
                            get: function() {
                                return this.d_.I_
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.settings = function(t) {
                            t.merge && delete(t = Object.assign(Object.assign({}, this.d_.V_()), t)).merge, this.d_.g_(t)
                        }, e.prototype.useEmulator = function(t, e) {
                            ! function(t, e, n) {
                                var r = (t = gu(t, _u)).V_();
                                "firestore.googleapis.com" !== r.host && r.host !== e && p("Host has been set in both settings() and useEmulator(), emulator host will be used"), t.g_(Object.assign(Object.assign({}, r), {
                                    host: e + ":" + n,
                                    ssl: !1
                                }))
                            }(this.d_, t, e)
                        }, e.prototype.enableNetwork = function() {
                            return function(t) {
                                var e = this;
                                return t._s.enqueue((function() {
                                    return Object(s.b)(e, void 0, void 0, (function() {
                                        var e, n;
                                        return Object(s.d)(this, (function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    return [4, ca(t)];
                                                case 1:
                                                    return e = r.sent(), [4, fa(t)];
                                                case 2:
                                                    return n = r.sent(), [2, (e.yo(!0), function(t) {
                                                        var e = g(t);
                                                        return e.Nh.delete(0), Mo(e)
                                                    }(n))]
                                            }
                                        }))
                                    }))
                                }))
                            }(wa(gu(this.d_, ma)))
                        }, e.prototype.disableNetwork = function() {
                            return function(t) {
                                var e = this;
                                return t._s.enqueue((function() {
                                    return Object(s.b)(e, void 0, void 0, (function() {
                                        var e, n;
                                        return Object(s.d)(this, (function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    return [4, ca(t)];
                                                case 1:
                                                    return e = r.sent(), [4, fa(t)];
                                                case 2:
                                                    return n = r.sent(), [2, (e.yo(!1), function(t) {
                                                        return Object(s.b)(this, void 0, void 0, (function() {
                                                            var e;
                                                            return Object(s.d)(this, (function(n) {
                                                                switch (n.label) {
                                                                    case 0:
                                                                        return (e = g(t)).Nh.add(0), [4, Uo(e)];
                                                                    case 1:
                                                                        return n.sent(), e.Oh.set("Offline"), [2]
                                                                }
                                                            }))
                                                        }))
                                                    }(n))]
                                            }
                                        }))
                                    }))
                                }))
                            }(wa(gu(this.d_, ma)))
                        }, e.prototype.enablePersistence = function(t) {
                            var e = !1,
                                n = !1;
                            return t && pu("synchronizeTabs", e = !!t.synchronizeTabs, "experimentalForceOwningTab", n = !!t.experimentalForceOwningTab), e ? this.Rd.enableMultiTabIndexedDbPersistence(this) : this.Rd.enableIndexedDbPersistence(this, n)
                        }, e.prototype.clearPersistence = function() {
                            return this.Rd.clearIndexedDbPersistence(this)
                        }, e.prototype.terminate = function() {
                            return this.Pd && (this.Pd._removeServiceInstance("firestore"), this.Pd._removeServiceInstance("firestore-exp")), this.d_._delete()
                        }, e.prototype.waitForPendingWrites = function() {
                            return function(t) {
                                var e = this,
                                    n = new Jn;
                                return t._s.Ps((function() {
                                    return Object(s.b)(e, void 0, void 0, (function() {
                                        var e;
                                        return Object(s.d)(this, (function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    return e = Rs, [4, la(t)];
                                                case 1:
                                                    return [2, e.apply(void 0, [r.sent(), n])]
                                            }
                                        }))
                                    }))
                                })), n.promise
                            }(wa(gu(this.d_, ma)))
                        }, e.prototype.onSnapshotsInSync = function(t) {
                            return function(t, e) {
                                return function(t, e) {
                                    var n = this,
                                        r = new uu(e);
                                    return t._s.Ps((function() {
                                            return Object(s.b)(n, void 0, void 0, (function() {
                                                var e;
                                                return Object(s.d)(this, (function(n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            return e = function(t, e) {
                                                                g(t).Wh.add(e), e.next()
                                                            }, [4, pa(t)];
                                                        case 1:
                                                            return [2, e.apply(void 0, [n.sent(), r])]
                                                    }
                                                }))
                                            }))
                                        })),
                                        function() {
                                            r.i_(), t._s.Ps((function() {
                                                return Object(s.b)(n, void 0, void 0, (function() {
                                                    var e;
                                                    return Object(s.d)(this, (function(n) {
                                                        switch (n.label) {
                                                            case 0:
                                                                return e = function(t, e) {
                                                                    g(t).Wh.delete(e)
                                                                }, [4, pa(t)];
                                                            case 1:
                                                                return [2, e.apply(void 0, [n.sent(), r])]
                                                        }
                                                    }))
                                                }))
                                            }))
                                        }
                                }(wa(t = gu(t, ma)), ga(e) ? e : {
                                    next: e
                                })
                            }(this.d_, t)
                        }, Object.defineProperty(e.prototype, "app", {
                            get: function() {
                                if (!this.Pd) throw new T(O.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
                                return this.Pd
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.collection = function(t) {
                            try {
                                return new _c(this, Tu(this.d_, t))
                            } catch (t) {
                                throw pc(t, "collection()", "Firestore.collection()")
                            }
                        }, e.prototype.doc = function(t) {
                            try {
                                return new lc(this, ju(this.d_, t))
                            } catch (t) {
                                throw pc(t, "doc()", "Firestore.doc()")
                            }
                        }, e.prototype.collectionGroup = function(t) {
                            try {
                                return new bc(this, function(t, e) {
                                    if (t = gu(t, _u), fu("collectionGroup", "collection id", e), e.indexOf("/") >= 0) throw new T(O.INVALID_ARGUMENT, "Invalid collection ID '" + e + "' passed to function collectionGroup(). Collection IDs must not contain '/'.");
                                    return new Eu(t, null, function(t) {
                                        return new qt(V.ct(), t)
                                    }(e))
                                }(this.d_, t))
                            } catch (t) {
                                throw pc(t, "collectionGroup()", "Firestore.collectionGroup()")
                            }
                        }, e.prototype.runTransaction = function(t) {
                            var e = this;
                            return function(t, e) {
                                return function(t, e) {
                                    var n = this,
                                        r = new Jn;
                                    return t._s.Ps((function() {
                                        return Object(s.b)(n, void 0, void 0, (function() {
                                            var n;
                                            return Object(s.d)(this, (function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return [4, function(t) {
                                                            return aa(t).then((function(t) {
                                                                return t.Sh
                                                            }))
                                                        }(t)];
                                                    case 1:
                                                        return n = i.sent(), new ra(t._s, n, e, r).run(), [2]
                                                }
                                            }))
                                        }))
                                    })), r.promise
                                }(wa(t), (function(n) {
                                    return e(new ec(t, n))
                                }))
                            }(this.d_, (function(n) {
                                return t(new cc(e, n))
                            }))
                        }, e.prototype.batch = function() {
                            var t = this;
                            return wa(this.d_), new hc(new $a(this.d_, (function(e) {
                                return Ja(t.d_, e)
                            })))
                        }, e.prototype.loadBundle = function(t) {
                            throw new T(O.FAILED_PRECONDITION, '"loadBundle()" does not exist, have you imported "firebase/firestore/bundle"?')
                        }, e.prototype.namedQuery = function(t) {
                            throw new T(O.FAILED_PRECONDITION, '"namedQuery()" does not exist, have you imported "firebase/firestore/bundle"?')
                        }, e
                    }(hu),
                    uc = function(t) {
                        function e(e) {
                            var n = this;
                            return (n = t.call(this) || this).firestore = e, n
                        }
                        return Object(s.c)(e, t), e.prototype.Wf = function(t) {
                            return new ic(new j(t))
                        }, e.prototype.jf = function(t) {
                            var e = this.Jf(t, this.firestore.I_);
                            return lc.yd(e, this.firestore, null)
                        }, e
                    }(Oa);

                function ac(t) {
                    var e;
                    e = t, c.setLogLevel(e)
                }
                var cc = function(t) {
                        function e(e, n) {
                            var r = this;
                            return (r = t.call(this, n) || this).Yf = e, r.Xf = new uc(e), r
                        }
                        return Object(s.c)(e, t), e.prototype.get = function(t) {
                            var e = this,
                                n = Ic(t);
                            return this.d_.get(n).then((function(t) {
                                return new yc(e.Yf, new Ga(e.Yf.d_, e.Xf, t.S_, t.Zf, t.metadata, n.v_))
                            }))
                        }, e.prototype.set = function(t, e, n) {
                            var r = Ic(t);
                            return n ? (lu("Transaction.set", n), this.d_.set(r, e, n)) : this.d_.set(r, e), this
                        }, e.prototype.update = function(t, e, n) {
                            for (var r, i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
                            var u = Ic(t);
                            return 2 === arguments.length ? this.d_.update(u, e) : (r = this.d_).update.apply(r, Object(s.g)([u, e, n], i)), this
                        }, e.prototype.delete = function(t) {
                            var e = Ic(t);
                            return this.d_.delete(e), this
                        }, e
                    }(hu),
                    hc = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return Object(s.c)(e, t), e.prototype.set = function(t, e, n) {
                            var r = Ic(t);
                            return n ? (lu("WriteBatch.set", n), this.d_.set(r, e, n)) : this.d_.set(r, e), this
                        }, e.prototype.update = function(t, e, n) {
                            for (var r, i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
                            var u = Ic(t);
                            return 2 === arguments.length ? this.d_.update(u, e) : (r = this.d_).update.apply(r, Object(s.g)([u, e, n], i)), this
                        }, e.prototype.delete = function(t) {
                            var e = Ic(t);
                            return this.d_.delete(e), this
                        }, e.prototype.commit = function() {
                            return this.d_.commit()
                        }, e
                    }(hu),
                    fc = function(t) {
                        function e(e, n, r) {
                            var i = this;
                            return (i = t.call(this, r) || this).Yf = e, i.Xf = n, i
                        }
                        return Object(s.c)(e, t), e.prototype.fromFirestore = function(t, e) {
                            var n = new Ba(this.Yf.d_, this.Xf, t.S_, t.Zf, t.metadata, null);
                            return this.d_.fromFirestore(new gc(this.Yf, n), null != e ? e : {})
                        }, e.prototype.toFirestore = function(t, e) {
                            return e ? this.d_.toFirestore(t, e) : this.d_.toFirestore(t)
                        }, e.gd = function(t, n) {
                            var r = e.Vd,
                                i = r.get(t);
                            i || (i = new WeakMap, r.set(t, i));
                            var o = i.get(n);
                            return o || (o = new e(t, new uc(t), n), i.set(n, o)), o
                        }, e
                    }(hu);
                fc.Vd = new WeakMap;
                var lc = function(t) {
                    function e(e, n) {
                        var r = this;
                        return (r = t.call(this, n) || this).firestore = e, r.Xf = new uc(e), r
                    }
                    return Object(s.c)(e, t), e.pd = function(t, n, r) {
                        if (t.length % 2 != 0) throw new T(O.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.rt() + " has " + t.length);
                        return new e(n, new Iu(n.d_, r, new F(t)))
                    }, e.yd = function(t, n, r) {
                        return new e(n, new Iu(n.d_, r, t))
                    }, Object.defineProperty(e.prototype, "id", {
                        get: function() {
                            return this.d_.id
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "parent", {
                        get: function() {
                            return new _c(this.firestore, this.d_.parent)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "path", {
                        get: function() {
                            return this.d_.path
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.collection = function(t) {
                        try {
                            return new _c(this.firestore, Tu(this.d_, t))
                        } catch (t) {
                            throw pc(t, "collection()", "DocumentReference.collection()")
                        }
                    }, e.prototype.isEqual = function(t) {
                        return t instanceof hu && (t = t.d_), t instanceof Iu && Nu(this.d_, t)
                    }, e.prototype.set = function(t, e) {
                        e = lu("DocumentReference.set", e);
                        try {
                            return function(t, e, n) {
                                t = gu(t, Iu);
                                var r = gu(t.firestore, ma),
                                    i = Fa(t.v_, e, n);
                                return Ja(r, [Vu(Lu(r), "setDoc", t.S_, i, null !== t.v_, n).F_(t.S_, Ie.Kt())])
                            }(this.d_, t, e)
                        } catch (t) {
                            throw pc(t, "setDoc()", "DocumentReference.set()")
                        }
                    }, e.prototype.update = function(t, e) {
                        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                        try {
                            return 1 === arguments.length ? Xa(this.d_, t) : Xa.apply(void 0, Object(s.g)([this.d_, t, e], n))
                        } catch (t) {
                            throw pc(t, "updateDoc()", "DocumentReference.update()")
                        }
                    }, e.prototype.delete = function() {
                        return Ja(gu((t = this.d_).firestore, ma), [new Me(t.S_, Ie.Kt())]);
                        var t
                    }, e.prototype.onSnapshot = function() {
                        for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        var r = dc(e),
                            i = vc(e, (function(e) {
                                return new yc(t.firestore, new Ga(t.firestore.d_, t.Xf, e.S_, e.Zf, e.metadata, t.d_.v_))
                            }));
                        return Wa(this.d_, r, i)
                    }, e.prototype.get = function(t) {
                        var e = this;
                        return ("cache" === (null == t ? void 0 : t.source) ? function(t) {
                            t = gu(t, Iu);
                            var e = gu(t.firestore, ma),
                                n = wa(e),
                                r = new Ka(e);
                            return function(t, e) {
                                var n = this,
                                    r = new Jn;
                                return t._s.Ps((function() {
                                    return Object(s.b)(n, void 0, void 0, (function() {
                                        var n;
                                        return Object(s.d)(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return n = function(t, e, n) {
                                                        return Object(s.b)(this, void 0, void 0, (function() {
                                                            var r, i;
                                                            return Object(s.d)(this, (function(o) {
                                                                switch (o.label) {
                                                                    case 0:
                                                                        return o.trys.push([0, 2, , 3]), [4, function(t, e) {
                                                                            var n = g(t);
                                                                            return n.persistence.runTransaction("read document", "readonly", (function(t) {
                                                                                return n.Tc.Ho(t, e)
                                                                            }))
                                                                        }(t, e)];
                                                                    case 1:
                                                                        return (i = o.sent()) instanceof bt ? n.resolve(i) : i instanceof mt ? n.resolve(null) : n.reject(new T(O.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), [3, 3];
                                                                    case 2:
                                                                        return r = o.sent(), i = cr(r, "Failed to get document '" + e + " from cache"), n.reject(i), [3, 3];
                                                                    case 3:
                                                                        return [2]
                                                                }
                                                            }))
                                                        }))
                                                    }, [4, ha(t)];
                                                case 1:
                                                    return [2, n.apply(void 0, [i.sent(), e, r])]
                                            }
                                        }))
                                    }))
                                })), r.promise
                            }(n, t.S_).then((function(n) {
                                return new Ga(e, r, t.S_, n, new za(n instanceof bt && n.Vt, !0), t.v_)
                            }))
                        }(this.d_) : "server" === (null == t ? void 0 : t.source) ? function(t) {
                            t = gu(t, Iu);
                            var e = gu(t.firestore, ma);
                            return da(wa(e), t.S_, {
                                source: "server"
                            }).then((function(n) {
                                return Za(e, t, n)
                            }))
                        }(this.d_) : function(t) {
                            t = gu(t, Iu);
                            var e = gu(t.firestore, ma);
                            return da(wa(e), t.S_).then((function(n) {
                                return Za(e, t, n)
                            }))
                        }(this.d_)).then((function(t) {
                            return new yc(e.firestore, new Ga(e.firestore.d_, e.Xf, t.S_, t.Zf, t.metadata, e.d_.v_))
                        }))
                    }, e.prototype.withConverter = function(t) {
                        return new e(this.firestore, this.d_.withConverter(fc.gd(this.firestore, t)))
                    }, e
                }(hu);

                function pc(t, e, n) {
                    return t.message = t.message.replace(e, n), t
                }

                function dc(t) {
                    for (var e = 0, n = t; e < n.length; e++) {
                        var r = n[e];
                        if ("object" == typeof r && !ga(r)) return r
                    }
                    return {}
                }

                function vc(t, e) {
                    var n, r, i;
                    return {
                        next: function(t) {
                            i.next && i.next(e(t))
                        },
                        error: null === (n = (i = ga(t[0]) ? t[0] : ga(t[1]) ? t[1] : "function" == typeof t[0] ? {
                            next: t[0],
                            error: t[1],
                            complete: t[2]
                        } : {
                            next: t[1],
                            error: t[2],
                            complete: t[3]
                        }).error) || void 0 === n ? void 0 : n.bind(i),
                        complete: null === (r = i.complete) || void 0 === r ? void 0 : r.bind(i)
                    }
                }
                var yc = function(t) {
                        function e(e, n) {
                            var r = this;
                            return (r = t.call(this, n) || this).Yf = e, r
                        }
                        return Object(s.c)(e, t), Object.defineProperty(e.prototype, "ref", {
                            get: function() {
                                return new lc(this.Yf, this.d_.ref)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "id", {
                            get: function() {
                                return this.d_.id
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "metadata", {
                            get: function() {
                                return this.d_.metadata
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "exists", {
                            get: function() {
                                return this.d_.exists()
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.data = function(t) {
                            return this.d_.data(t)
                        }, e.prototype.get = function(t, e) {
                            return this.d_.get(t, e)
                        }, e.prototype.isEqual = function(t) {
                            return Ya(this.d_, t.d_)
                        }, e
                    }(hu),
                    gc = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return Object(s.c)(e, t), e.prototype.data = function(t) {
                            return this.d_.data(t)
                        }, e
                    }(yc),
                    bc = function(t) {
                        function e(e, n) {
                            var r = this;
                            return (r = t.call(this, n) || this).firestore = e, r.Xf = new uc(e), r
                        }
                        return Object(s.c)(e, t), e.prototype.where = function(t, n, r) {
                            try {
                                return new e(this.firestore, xa(this.d_, function(t, e, n) {
                                    var r = e,
                                        i = Na("where", t);
                                    return new Da(i, r, n)
                                }(t, n, r)))
                            } catch (t) {
                                throw pc(t, /(orderBy|where)\(\)/, "Query.$1()")
                            }
                        }, e.prototype.orderBy = function(t, n) {
                            try {
                                return new e(this.firestore, xa(this.d_, function(t, e) {
                                    void 0 === e && (e = "asc");
                                    var n = e,
                                        r = Na("orderBy", t);
                                    return new ka(r, n)
                                }(t, n)))
                            } catch (t) {
                                throw pc(t, /(orderBy|where)\(\)/, "Query.$1()")
                            }
                        }, e.prototype.limit = function(t) {
                            try {
                                return new e(this.firestore, xa(this.d_, function(t) {
                                    return bu("limit", t), new Pa("limit", t, "F")
                                }(t)))
                            } catch (t) {
                                throw pc(t, "limit()", "Query.limit()")
                            }
                        }, e.prototype.limitToLast = function(t) {
                            try {
                                return new e(this.firestore, xa(this.d_, function(t) {
                                    return bu("limitToLast", t), new Pa("limitToLast", t, "L")
                                }(t)))
                            } catch (t) {
                                throw pc(t, "limitToLast()", "Query.limitToLast()")
                            }
                        }, e.prototype.startAt = function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            try {
                                return new e(this.firestore, xa(this.d_, function() {
                                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                    return new Ca("startAt", t, !0)
                                }.apply(void 0, t)))
                            } catch (t) {
                                throw pc(t, "startAt()", "Query.startAt()")
                            }
                        }, e.prototype.startAfter = function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            try {
                                return new e(this.firestore, xa(this.d_, function() {
                                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                    return new Ca("startAfter", t, !1)
                                }.apply(void 0, t)))
                            } catch (t) {
                                throw pc(t, "startAfter()", "Query.startAfter()")
                            }
                        }, e.prototype.endBefore = function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            try {
                                return new e(this.firestore, xa(this.d_, function() {
                                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                    return new Ra("endBefore", t, !0)
                                }.apply(void 0, t)))
                            } catch (t) {
                                throw pc(t, "endBefore()", "Query.endBefore()")
                            }
                        }, e.prototype.endAt = function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            try {
                                return new e(this.firestore, xa(this.d_, function() {
                                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                    return new Ra("endAt", t, !1)
                                }.apply(void 0, t)))
                            } catch (t) {
                                throw pc(t, "endAt()", "Query.endAt()")
                            }
                        }, e.prototype.isEqual = function(t) {
                            return Au(this.d_, t.d_)
                        }, e.prototype.get = function(t) {
                            var e = this;
                            return ("cache" === (null == t ? void 0 : t.source) ? function(t) {
                                t = gu(t, Eu);
                                var e = gu(t.firestore, ma),
                                    n = wa(e),
                                    r = new Ka(e);
                                return function(t, e) {
                                    var n = this,
                                        r = new Jn;
                                    return t._s.Ps((function() {
                                        return Object(s.b)(n, void 0, void 0, (function() {
                                            var n;
                                            return Object(s.d)(this, (function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return n = function(t, e, n) {
                                                            return Object(s.b)(this, void 0, void 0, (function() {
                                                                var r, i, o, u, a;
                                                                return Object(s.d)(this, (function(s) {
                                                                    switch (s.label) {
                                                                        case 0:
                                                                            return s.trys.push([0, 2, , 3]), [4, Wi(t, e, !0)];
                                                                        case 1:
                                                                            return a = s.sent(), r = new Is(e, a.Rc), i = r.fl(a.documents), o = r.wi(i, !1), n.resolve(o.snapshot), [3, 3];
                                                                        case 2:
                                                                            return u = s.sent(), a = cr(u, "Failed to execute query '" + e + " against cache"), n.reject(a), [3, 3];
                                                                        case 3:
                                                                            return [2]
                                                                    }
                                                                }))
                                                            }))
                                                        }, [4, ha(t)];
                                                    case 1:
                                                        return [2, n.apply(void 0, [i.sent(), e, r])]
                                                }
                                            }))
                                        }))
                                    })), r.promise
                                }(n, t.C_).then((function(n) {
                                    return new Ha(e, r, t, n)
                                }))
                            }(this.d_) : "server" === (null == t ? void 0 : t.source) ? function(t) {
                                t = gu(t, Eu);
                                var e = gu(t.firestore, ma),
                                    n = wa(e),
                                    r = new Ka(e);
                                return va(n, t.C_, {
                                    source: "server"
                                }).then((function(n) {
                                    return new Ha(e, r, t, n)
                                }))
                            }(this.d_) : function(t) {
                                t = gu(t, Eu);
                                var e = gu(t.firestore, ma),
                                    n = wa(e),
                                    r = new Ka(e);
                                return Aa(t.C_), va(n, t.C_).then((function(n) {
                                    return new Ha(e, r, t, n)
                                }))
                            }(this.d_)).then((function(t) {
                                return new wc(e.firestore, new Ha(e.firestore.d_, e.Xf, e.d_, t._d))
                            }))
                        }, e.prototype.onSnapshot = function() {
                            for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            var r = dc(e),
                                i = vc(e, (function(e) {
                                    return new wc(t.firestore, new Ha(t.firestore.d_, t.Xf, t.d_, e._d))
                                }));
                            return Wa(this.d_, r, i)
                        }, e.prototype.withConverter = function(t) {
                            return new e(this.firestore, this.d_.withConverter(fc.gd(this.firestore, t)))
                        }, e
                    }(hu),
                    mc = function(t) {
                        function e(e, n) {
                            var r = this;
                            return (r = t.call(this, n) || this).Yf = e, r
                        }
                        return Object(s.c)(e, t), Object.defineProperty(e.prototype, "type", {
                            get: function() {
                                return this.d_.type
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "doc", {
                            get: function() {
                                return new gc(this.Yf, this.d_.doc)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "oldIndex", {
                            get: function() {
                                return this.d_.oldIndex
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "newIndex", {
                            get: function() {
                                return this.d_.newIndex
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e
                    }(hu),
                    wc = function(t) {
                        function e(e, n) {
                            var r = this;
                            return (r = t.call(this, n) || this).Yf = e, r
                        }
                        return Object(s.c)(e, t), Object.defineProperty(e.prototype, "query", {
                            get: function() {
                                return new bc(this.Yf, this.d_.query)
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "metadata", {
                            get: function() {
                                return this.d_.metadata
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "size", {
                            get: function() {
                                return this.d_.size
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "empty", {
                            get: function() {
                                return this.d_.empty
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "docs", {
                            get: function() {
                                var t = this;
                                return this.d_.docs.map((function(e) {
                                    return new gc(t.Yf, e)
                                }))
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.docChanges = function(t) {
                            var e = this;
                            return this.d_.docChanges(t).map((function(t) {
                                return new mc(e.Yf, t)
                            }))
                        }, e.prototype.forEach = function(t, e) {
                            var n = this;
                            this.d_.forEach((function(r) {
                                t.call(e, new gc(n.Yf, r))
                            }))
                        }, e.prototype.isEqual = function(t) {
                            return Ya(this.d_, t.d_)
                        }, e
                    }(hu),
                    _c = function(t) {
                        function e(e, n) {
                            var r = this;
                            return (r = t.call(this, e, n) || this).firestore = e, r.d_ = n, r
                        }
                        return Object(s.c)(e, t), Object.defineProperty(e.prototype, "id", {
                            get: function() {
                                return this.d_.id
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "path", {
                            get: function() {
                                return this.d_.path
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "parent", {
                            get: function() {
                                var t = this.d_.parent;
                                return t ? new lc(this.firestore, t) : null
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.doc = function(t) {
                            try {
                                return new lc(this.firestore, void 0 === t ? ju(this.d_) : ju(this.d_, t))
                            } catch (t) {
                                throw pc(t, "doc()", "CollectionReference.doc()")
                            }
                        }, e.prototype.add = function(t) {
                            var e = this;
                            return function(t, e) {
                                var n = gu(t.firestore, ma),
                                    r = ju(t),
                                    i = Fa(t.v_, e);
                                return Ja(n, [Vu(Lu(t.firestore), "addDoc", r.S_, i, null !== t.v_, {}).F_(r.S_, Ie.exists(!1))]).then((function() {
                                    return r
                                }))
                            }(this.d_, t).then((function(t) {
                                return new lc(e.firestore, t)
                            }))
                        }, e.prototype.isEqual = function(t) {
                            return Nu(this.d_, t.d_)
                        }, e.prototype.withConverter = function(t) {
                            return new e(this.firestore, this.d_.withConverter(fc.gd(this.firestore, t)))
                        }, e
                    }(bc);

                function Ic(t) {
                    return t instanceof hu && (t = t.d_), gu(t, Iu)
                }
                var Ec = function(t) {
                        function e() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            return t.call(this, new(au.bind.apply(au, Object(s.g)([void 0], e)))) || this
                        }
                        return Object(s.c)(e, t), e.documentId = function() {
                            return new e(U.ht().rt())
                        }, e.prototype.isEqual = function(t) {
                            return t instanceof hu && (t = t.d_), t instanceof au && this.d_.f_.isEqual(t.f_)
                        }, e
                    }(hu),
                    Oc = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return Object(s.c)(e, t), e.serverTimestamp = function() {
                            var t = new Fu("serverTimestamp");
                            return t._methodName = "FieldValue.serverTimestamp", new e(t)
                        }, e.delete = function() {
                            var t = new Mu("deleteField");
                            return t._methodName = "FieldValue.delete", new e(t)
                        }, e.arrayUnion = function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            var r = function() {
                                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                return new qu("arrayUnion", t)
                            }.apply(void 0, t);
                            return r._methodName = "FieldValue.arrayUnion", new e(r)
                        }, e.arrayRemove = function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            var r = function() {
                                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                return new zu("arrayRemove", t)
                            }.apply(void 0, t);
                            return r._methodName = "FieldValue.arrayRemove", new e(r)
                        }, e.increment = function(t) {
                            var n = function(t) {
                                return new Gu("increment", t)
                            }(t);
                            return n._methodName = "FieldValue.increment", new e(n)
                        }, e.prototype.isEqual = function(t) {
                            return this.d_.isEqual(t.d_)
                        }, e
                    }(hu)
            }).call(this, n(85))
        },
        1714: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(14),
                i = (n(173), n(41)),
                o = (n(1409), n(1640)),
                s = n(1327),
                u = function() {
                    function t(t, e, n) {
                        this.name = t, this.instanceFactory = e, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY"
                    }
                    return t.prototype.setInstantiationMode = function(t) {
                        return this.instantiationMode = t, this
                    }, t.prototype.setMultipleInstances = function(t) {
                        return this.multipleInstances = t, this
                    }, t.prototype.setServiceProps = function(t) {
                        return this.serviceProps = t, this
                    }, t
                }(),
                a = "[DEFAULT]",
                c = function() {
                    function t(t, e) {
                        this.name = t, this.container = e, this.component = null, this.instances = new Map, this.instancesDeferred = new Map
                    }
                    return t.prototype.get = function(t) {
                        void 0 === t && (t = a);
                        var e = this.normalizeInstanceIdentifier(t);
                        if (!this.instancesDeferred.has(e)) {
                            var n = new i.a;
                            this.instancesDeferred.set(e, n);
                            try {
                                var r = this.getOrInitializeService(e);
                                r && n.resolve(r)
                            } catch (t) {}
                        }
                        return this.instancesDeferred.get(e).promise
                    }, t.prototype.getImmediate = function(t) {
                        var e = Object(s.a)({
                                identifier: a,
                                optional: !1
                            }, t),
                            n = e.identifier,
                            r = e.optional,
                            i = this.normalizeInstanceIdentifier(n);
                        try {
                            var o = this.getOrInitializeService(i);
                            if (!o) {
                                if (r) return null;
                                throw Error("Service " + this.name + " is not available")
                            }
                            return o
                        } catch (t) {
                            if (r) return null;
                            throw t
                        }
                    }, t.prototype.getComponent = function() {
                        return this.component
                    }, t.prototype.setComponent = function(t) {
                        var e, n;
                        if (t.name !== this.name) throw Error("Mismatching Component " + t.name + " for Provider " + this.name + ".");
                        if (this.component) throw Error("Component for " + this.name + " has already been provided");
                        if (this.component = t, function(t) {
                                return "EAGER" === t.instantiationMode
                            }(t)) try {
                            this.getOrInitializeService(a)
                        } catch (t) {}
                        try {
                            for (var r = Object(s.h)(this.instancesDeferred.entries()), i = r.next(); !i.done; i = r.next()) {
                                var o = Object(s.e)(i.value, 2),
                                    u = o[0],
                                    c = o[1],
                                    h = this.normalizeInstanceIdentifier(u);
                                try {
                                    var f = this.getOrInitializeService(h);
                                    c.resolve(f)
                                } catch (t) {}
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                i && !i.done && (n = r.return) && n.call(r)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                    }, t.prototype.clearInstance = function(t) {
                        void 0 === t && (t = a), this.instancesDeferred.delete(t), this.instances.delete(t)
                    }, t.prototype.delete = function() {
                        return Object(s.b)(this, void 0, void 0, (function() {
                            var t;
                            return Object(s.d)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return t = Array.from(this.instances.values()), [4, Promise.all(Object(s.f)(t.filter((function(t) {
                                            return "INTERNAL" in t
                                        })).map((function(t) {
                                            return t.INTERNAL.delete()
                                        })), t.filter((function(t) {
                                            return "_delete" in t
                                        })).map((function(t) {
                                            return t._delete()
                                        }))))];
                                    case 1:
                                        return e.sent(), [2]
                                }
                            }))
                        }))
                    }, t.prototype.isComponentSet = function() {
                        return null != this.component
                    }, t.prototype.isInitialized = function(t) {
                        return void 0 === t && (t = a), this.instances.has(t)
                    }, t.prototype.getOrInitializeService = function(t) {
                        var e = this.instances.get(t);
                        return !e && this.component && (e = this.component.instanceFactory(this.container, function(t) {
                            return t === a ? void 0 : t
                        }(t)), this.instances.set(t, e)), e || null
                    }, t.prototype.normalizeInstanceIdentifier = function(t) {
                        return this.component ? this.component.multipleInstances ? t : a : t
                    }, t
                }();
            ! function() {
                function t(t) {
                    this.name = t, this.providers = new Map
                }
                t.prototype.addComponent = function(t) {
                    var e = this.getProvider(t.name);
                    if (e.isComponentSet()) throw new Error("Component " + t.name + " has already been registered with " + this.name);
                    e.setComponent(t)
                }, t.prototype.addOrOverwriteComponent = function(t) {
                    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name), this.addComponent(t)
                }, t.prototype.getProvider = function(t) {
                    if (this.providers.has(t)) return this.providers.get(t);
                    var e = new c(t, this);
                    return this.providers.set(t, e), e
                }, t.prototype.getProviders = function() {
                    return Array.from(this.providers.values())
                }
            }();
            var h, f = {
                Firestore: o.e,
                GeoPoint: o.j,
                Timestamp: o.c,
                Blob: o.d,
                Transaction: o.o,
                WriteBatch: o.a,
                DocumentReference: o.b,
                DocumentSnapshot: o.k,
                Query: o.m,
                QueryDocumentSnapshot: o.r,
                QuerySnapshot: o.q,
                CollectionReference: o.n,
                FieldPath: o.p,
                FieldValue: o.l,
                setLogLevel: o.g,
                CACHE_SIZE_UNLIMITED: o.i
            };
            (function(t, e) {
                t.INTERNAL.registerComponent(new u("firestore", (function(t) {
                    return function(t, e) {
                        return new o.e(t, new o.h(t, e), new o.f)
                    }(t.getProvider("app").getImmediate(), t.getProvider("auth-internal"))
                }), "PUBLIC").setServiceProps(Object.assign({}, f)))
            })(h = r.a), h.registerVersion("@firebase/firestore", "2.1.7")
        }
    }
]);