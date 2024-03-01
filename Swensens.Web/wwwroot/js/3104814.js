/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [105], {
        1641: function(t, e, n) {
            ! function(t) {
                "use strict";

                function e(t) {
                    return Array.prototype.slice.call(t)
                }

                function n(t) {
                    return new Promise((function(e, n) {
                        t.onsuccess = function() {
                            e(t.result)
                        }, t.onerror = function() {
                            n(t.error)
                        }
                    }))
                }

                function r(t, e, r) {
                    var i, o = new Promise((function(o, s) {
                        n(i = t[e].apply(t, r)).then(o, s)
                    }));
                    return o.request = i, o
                }

                function i(t, e, n) {
                    var i = r(t, e, n);
                    return i.then((function(t) {
                        if (t) return new l(t, i.request)
                    }))
                }

                function o(t, e, n) {
                    n.forEach((function(n) {
                        Object.defineProperty(t.prototype, n, {
                            get: function() {
                                return this[e][n]
                            },
                            set: function(t) {
                                this[e][n] = t
                            }
                        })
                    }))
                }

                function s(t, e, n, i) {
                    i.forEach((function(i) {
                        i in n.prototype && (t.prototype[i] = function() {
                            return r(this[e], i, arguments)
                        })
                    }))
                }

                function a(t, e, n, r) {
                    r.forEach((function(r) {
                        r in n.prototype && (t.prototype[r] = function() {
                            return this[e][r].apply(this[e], arguments)
                        })
                    }))
                }

                function c(t, e, n, r) {
                    r.forEach((function(r) {
                        r in n.prototype && (t.prototype[r] = function() {
                            return i(this[e], r, arguments)
                        })
                    }))
                }

                function u(t) {
                    this._index = t
                }

                function l(t, e) {
                    this._cursor = t, this._request = e
                }

                function f(t) {
                    this._store = t
                }

                function h(t) {
                    this._tx = t, this.complete = new Promise((function(e, n) {
                        t.oncomplete = function() {
                            e()
                        }, t.onerror = function() {
                            n(t.error)
                        }, t.onabort = function() {
                            n(t.error)
                        }
                    }))
                }

                function p(t, e, n) {
                    this._db = t, this.oldVersion = e, this.transaction = new h(n)
                }

                function d(t) {
                    this._db = t
                }

                function g(t, e, n) {
                    var i = r(indexedDB, "open", [t, e]),
                        o = i.request;
                    return o && (o.onupgradeneeded = function(t) {
                        n && n(new p(o.result, t.oldVersion, o.transaction))
                    }), i.then((function(t) {
                        return new d(t)
                    }))
                }

                function v(t) {
                    return r(indexedDB, "deleteDatabase", [t])
                }
                o(u, "_index", ["name", "keyPath", "multiEntry", "unique"]), s(u, "_index", IDBIndex, ["get", "getKey", "getAll", "getAllKeys", "count"]), c(u, "_index", IDBIndex, ["openCursor", "openKeyCursor"]), o(l, "_cursor", ["direction", "key", "primaryKey", "value"]), s(l, "_cursor", IDBCursor, ["update", "delete"]), ["advance", "continue", "continuePrimaryKey"].forEach((function(t) {
                    t in IDBCursor.prototype && (l.prototype[t] = function() {
                        var e = this,
                            r = arguments;
                        return Promise.resolve().then((function() {
                            return e._cursor[t].apply(e._cursor, r), n(e._request).then((function(t) {
                                if (t) return new l(t, e._request)
                            }))
                        }))
                    })
                })), f.prototype.createIndex = function() {
                    return new u(this._store.createIndex.apply(this._store, arguments))
                }, f.prototype.index = function() {
                    return new u(this._store.index.apply(this._store, arguments))
                }, o(f, "_store", ["name", "keyPath", "indexNames", "autoIncrement"]), s(f, "_store", IDBObjectStore, ["put", "add", "delete", "clear", "get", "getAll", "getKey", "getAllKeys", "count"]), c(f, "_store", IDBObjectStore, ["openCursor", "openKeyCursor"]), a(f, "_store", IDBObjectStore, ["deleteIndex"]), h.prototype.objectStore = function() {
                    return new f(this._tx.objectStore.apply(this._tx, arguments))
                }, o(h, "_tx", ["objectStoreNames", "mode"]), a(h, "_tx", IDBTransaction, ["abort"]), p.prototype.createObjectStore = function() {
                    return new f(this._db.createObjectStore.apply(this._db, arguments))
                }, o(p, "_db", ["name", "version", "objectStoreNames"]), a(p, "_db", IDBDatabase, ["deleteObjectStore", "close"]), d.prototype.transaction = function() {
                    return new h(this._db.transaction.apply(this._db, arguments))
                }, o(d, "_db", ["name", "version", "objectStoreNames"]), a(d, "_db", IDBDatabase, ["close"]), ["openCursor", "openKeyCursor"].forEach((function(t) {
                    [f, u].forEach((function(n) {
                        t in n.prototype && (n.prototype[t.replace("open", "iterate")] = function() {
                            var n = e(arguments),
                                r = n[n.length - 1],
                                i = this._store || this._index,
                                o = i[t].apply(i, n.slice(0, -1));
                            o.onsuccess = function() {
                                r(o.result)
                            }
                        })
                    }))
                })), [u, f].forEach((function(t) {
                    t.prototype.getAll || (t.prototype.getAll = function(t, e) {
                        var n = this,
                            r = [];
                        return new Promise((function(i) {
                            n.iterateCursor(t, (function(t) {
                                t ? (r.push(t.value), void 0 === e || r.length != e ? t.continue() : i(r)) : i(r)
                            }))
                        }))
                    })
                })), t.openDb = g, t.deleteDb = v, Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }(e)
        },
        1645: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(14);
            var i = function() {
                return (i = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }).apply(this, arguments)
            };

            function o(t, e, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                            t(e)
                        }))).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                }))
            }

            function s(t, e) {
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
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
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
                        }([o, a])
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

            function u() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(c(arguments[e]));
                return t
            }
            var l = n(41),
                f = function() {
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
                h = "[DEFAULT]",
                p = function() {
                    function t(t, e) {
                        this.name = t, this.container = e, this.component = null, this.instances = new Map, this.instancesDeferred = new Map
                    }
                    return t.prototype.get = function(t) {
                        void 0 === t && (t = h);
                        var e = this.normalizeInstanceIdentifier(t);
                        if (!this.instancesDeferred.has(e)) {
                            var n = new l.a;
                            this.instancesDeferred.set(e, n);
                            try {
                                var r = this.getOrInitializeService(e);
                                r && n.resolve(r)
                            } catch (t) {}
                        }
                        return this.instancesDeferred.get(e).promise
                    }, t.prototype.getImmediate = function(t) {
                        var e = i({
                                identifier: h,
                                optional: !1
                            }, t),
                            n = e.identifier,
                            r = e.optional,
                            o = this.normalizeInstanceIdentifier(n);
                        try {
                            var s = this.getOrInitializeService(o);
                            if (!s) {
                                if (r) return null;
                                throw Error("Service " + this.name + " is not available")
                            }
                            return s
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
                            this.getOrInitializeService(h)
                        } catch (t) {}
                        try {
                            for (var r = a(this.instancesDeferred.entries()), i = r.next(); !i.done; i = r.next()) {
                                var o = c(i.value, 2),
                                    s = o[0],
                                    u = o[1],
                                    l = this.normalizeInstanceIdentifier(s);
                                try {
                                    var f = this.getOrInitializeService(l);
                                    u.resolve(f)
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
                        void 0 === t && (t = h), this.instancesDeferred.delete(t), this.instances.delete(t)
                    }, t.prototype.delete = function() {
                        return o(this, void 0, void 0, (function() {
                            var t;
                            return s(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return t = Array.from(this.instances.values()), [4, Promise.all(u(t.filter((function(t) {
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
                        return void 0 === t && (t = h), this.instances.has(t)
                    }, t.prototype.getOrInitializeService = function(t) {
                        var e = this.instances.get(t);
                        return !e && this.component && (e = this.component.instanceFactory(this.container, function(t) {
                            return t === h ? void 0 : t
                        }(t)), this.instances.set(t, e)), e || null
                    }, t.prototype.normalizeInstanceIdentifier = function(t) {
                        return this.component ? this.component.multipleInstances ? t : h : t
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
                    var e = new p(t, this);
                    return this.providers.set(t, e), e
                }, t.prototype.getProviders = function() {
                    return Array.from(this.providers.values())
                }
            }();
            var d, g = n(1641),
                v = "0.4.20",
                m = 1e4,
                y = "w:0.4.20",
                w = "FIS_v2",
                b = 36e5,
                S = ((d = {})["missing-app-config-values"] = 'Missing App configuration value: "{$valueName}"', d["not-registered"] = "Firebase Installation is not registered.", d["installation-not-found"] = "Firebase Installation not found.", d["request-failed"] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"', d["app-offline"] = "Could not process request. Application offline.", d["delete-pending-registration"] = "Can't delete installation while there is a pending registration request.", d),
                C = new l.b("installations", "Installations", S);

            function _(t) {
                return t instanceof l.c && t.code.includes("request-failed")
            }

            function I(t) {
                return "https://firebaseinstallations.googleapis.com/v1/projects/" + t.projectId + "/installations"
            }

            function T(t) {
                return {
                    token: t.token,
                    requestStatus: 2,
                    expiresIn: (e = t.expiresIn, Number(e.replace("s", "000"))),
                    creationTime: Date.now()
                };
                var e
            }

            function E(t, e) {
                return o(this, void 0, void 0, (function() {
                    var n, r;
                    return s(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, e.json()];
                            case 1:
                                return n = i.sent(), r = n.error, [2, C.create("request-failed", {
                                    requestName: t,
                                    serverCode: r.code,
                                    serverMessage: r.message,
                                    serverStatus: r.status
                                })]
                        }
                    }))
                }))
            }

            function P(t) {
                var e = t.apiKey;
                return new Headers({
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "x-goog-api-key": e
                })
            }

            function M(t, e) {
                var n = e.refreshToken,
                    r = P(t);
                return r.append("Authorization", function(t) {
                    return "FIS_v2 " + t
                }(n)), r
            }

            function k(t) {
                return o(this, void 0, void 0, (function() {
                    var e;
                    return s(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, t()];
                            case 1:
                                return (e = n.sent()).status >= 500 && e.status < 600 ? [2, t()] : [2, e]
                        }
                    }))
                }))
            }

            function D(t, e) {
                var n = e.fid;
                return o(this, void 0, void 0, (function() {
                    var e, r, i, o, a, c;
                    return s(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                return e = I(t), r = P(t), i = {
                                    fid: n,
                                    authVersion: w,
                                    appId: t.appId,
                                    sdkVersion: y
                                }, o = {
                                    method: "POST",
                                    headers: r,
                                    body: JSON.stringify(i)
                                }, [4, k((function() {
                                    return fetch(e, o)
                                }))];
                            case 1:
                                return (a = s.sent()).ok ? [4, a.json()] : [3, 3];
                            case 2:
                                return c = s.sent(), [2, {
                                    fid: c.fid || n,
                                    registrationStatus: 2,
                                    refreshToken: c.refreshToken,
                                    authToken: T(c.authToken)
                                }];
                            case 3:
                                return [4, E("Create Installation", a)];
                            case 4:
                                throw s.sent()
                        }
                    }))
                }))
            }

            function F(t) {
                return new Promise((function(e) {
                    setTimeout(e, t)
                }))
            }
            var A = /^[cdef][\w-]{21}$/;

            function O() {
                try {
                    var t = new Uint8Array(17);
                    (self.crypto || self.msCrypto).getRandomValues(t), t[0] = 112 + t[0] % 16;
                    var e = function(t) {
                        return (e = t, btoa(String.fromCharCode.apply(String, u(e))).replace(/\+/g, "-").replace(/\//g, "_")).substr(0, 22);
                        var e
                    }(t);
                    return A.test(e) ? e : ""
                } catch (t) {
                    return ""
                }
            }

            function x(t) {
                return t.appName + "!" + t.appId
            }
            var j = new Map;

            function L(t, e) {
                var n = x(t);
                N(n, e),
                    function(t, e) {
                        var n = q();
                        n && n.postMessage({
                            key: t,
                            fid: e
                        });
                        K()
                    }(n, e)
            }

            function N(t, e) {
                var n, r, i = j.get(t);
                if (i) try {
                    for (var o = a(i), s = o.next(); !s.done; s = o.next()) {
                        (0, s.value)(e)
                    }
                } catch (t) {
                    n = {
                        error: t
                    }
                } finally {
                    try {
                        s && !s.done && (r = o.return) && r.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
            }
            var z = null;

            function q() {
                return !z && "BroadcastChannel" in self && ((z = new BroadcastChannel("[Firebase] FID Change")).onmessage = function(t) {
                    N(t.data.key, t.data.fid)
                }), z
            }

            function K() {
                0 === j.size && z && (z.close(), z = null)
            }
            var R, B = "firebase-installations-store",
                V = null;

            function $() {
                return V || (V = Object(g.openDb)("firebase-installations-database", 1, (function(t) {
                    switch (t.oldVersion) {
                        case 0:
                            t.createObjectStore(B)
                    }
                }))), V
            }

            function U(t, e) {
                return o(this, void 0, void 0, (function() {
                    var n, r, i, o, a;
                    return s(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                return n = x(t), [4, $()];
                            case 1:
                                return r = s.sent(), i = r.transaction(B, "readwrite"), [4, (o = i.objectStore(B)).get(n)];
                            case 2:
                                return a = s.sent(), [4, o.put(e, n)];
                            case 3:
                                return s.sent(), [4, i.complete];
                            case 4:
                                return s.sent(), a && a.fid === e.fid || L(t, e.fid), [2, e]
                        }
                    }))
                }))
            }

            function G(t) {
                return o(this, void 0, void 0, (function() {
                    var e, n, r;
                    return s(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return e = x(t), [4, $()];
                            case 1:
                                return n = i.sent(), [4, (r = n.transaction(B, "readwrite")).objectStore(B).delete(e)];
                            case 2:
                                return i.sent(), [4, r.complete];
                            case 3:
                                return i.sent(), [2]
                        }
                    }))
                }))
            }

            function J(t, e) {
                return o(this, void 0, void 0, (function() {
                    var n, r, i, o, a, c;
                    return s(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                return n = x(t), [4, $()];
                            case 1:
                                return r = s.sent(), i = r.transaction(B, "readwrite"), [4, (o = i.objectStore(B)).get(n)];
                            case 2:
                                return a = s.sent(), void 0 !== (c = e(a)) ? [3, 4] : [4, o.delete(n)];
                            case 3:
                                return s.sent(), [3, 6];
                            case 4:
                                return [4, o.put(c, n)];
                            case 5:
                                s.sent(), s.label = 6;
                            case 6:
                                return [4, i.complete];
                            case 7:
                                return s.sent(), !c || a && a.fid === c.fid || L(t, c.fid), [2, c]
                        }
                    }))
                }))
            }

            function H(t) {
                return o(this, void 0, void 0, (function() {
                    var e, n, r;
                    return s(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, J(t, (function(n) {
                                    var r = function(t) {
                                            return Q(t || {
                                                fid: O(),
                                                registrationStatus: 0
                                            })
                                        }(n),
                                        i = function(t, e) {
                                            if (0 === e.registrationStatus) {
                                                if (!navigator.onLine) return {
                                                    installationEntry: e,
                                                    registrationPromise: Promise.reject(C.create("app-offline"))
                                                };
                                                var n = {
                                                    fid: e.fid,
                                                    registrationStatus: 1,
                                                    registrationTime: Date.now()
                                                };
                                                return {
                                                    installationEntry: n,
                                                    registrationPromise: function(t, e) {
                                                        return o(this, void 0, void 0, (function() {
                                                            var n, r;
                                                            return s(this, (function(i) {
                                                                switch (i.label) {
                                                                    case 0:
                                                                        return i.trys.push([0, 2, , 7]), [4, D(t, e)];
                                                                    case 1:
                                                                        return n = i.sent(), [2, U(t, n)];
                                                                    case 2:
                                                                        return _(r = i.sent()) && 409 === r.customData.serverCode ? [4, G(t)] : [3, 4];
                                                                    case 3:
                                                                        return i.sent(), [3, 6];
                                                                    case 4:
                                                                        return [4, U(t, {
                                                                            fid: e.fid,
                                                                            registrationStatus: 0
                                                                        })];
                                                                    case 5:
                                                                        i.sent(), i.label = 6;
                                                                    case 6:
                                                                        throw r;
                                                                    case 7:
                                                                        return [2]
                                                                }
                                                            }))
                                                        }))
                                                    }(t, n)
                                                }
                                            }
                                            return 1 === e.registrationStatus ? {
                                                installationEntry: e,
                                                registrationPromise: Y(t)
                                            } : {
                                                installationEntry: e
                                            }
                                        }(t, r);
                                    return e = i.registrationPromise, i.installationEntry
                                }))];
                            case 1:
                                return "" !== (n = i.sent()).fid ? [3, 3] : (r = {}, [4, e]);
                            case 2:
                                return [2, (r.installationEntry = i.sent(), r)];
                            case 3:
                                return [2, {
                                    installationEntry: n,
                                    registrationPromise: e
                                }]
                        }
                    }))
                }))
            }

            function Y(t) {
                return o(this, void 0, void 0, (function() {
                    var e, n, r, i;
                    return s(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return [4, Z(t)];
                            case 1:
                                e = o.sent(), o.label = 2;
                            case 2:
                                return 1 !== e.registrationStatus ? [3, 5] : [4, F(100)];
                            case 3:
                                return o.sent(), [4, Z(t)];
                            case 4:
                                return e = o.sent(), [3, 2];
                            case 5:
                                return 0 !== e.registrationStatus ? [3, 7] : [4, H(t)];
                            case 6:
                                return n = o.sent(), r = n.installationEntry, (i = n.registrationPromise) ? [2, i] : [2, r];
                            case 7:
                                return [2, e]
                        }
                    }))
                }))
            }

            function Z(t) {
                return J(t, (function(t) {
                    if (!t) throw C.create("installation-not-found");
                    return Q(t)
                }))
            }

            function Q(t) {
                return 1 === (e = t).registrationStatus && e.registrationTime + m < Date.now() ? {
                    fid: t.fid,
                    registrationStatus: 0
                } : t;
                var e
            }

            function W(t, e) {
                var n = t.appConfig,
                    r = t.platformLoggerProvider;
                return o(this, void 0, void 0, (function() {
                    var t, i, o, a, c, u, l;
                    return s(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                return t = function(t, e) {
                                    var n = e.fid;
                                    return I(t) + "/" + n + "/authTokens:generate"
                                }(n, e), i = M(n, e), (o = r.getImmediate({
                                    optional: !0
                                })) && i.append("x-firebase-client", o.getPlatformInfoString()), a = {
                                    installation: {
                                        sdkVersion: y
                                    }
                                }, c = {
                                    method: "POST",
                                    headers: i,
                                    body: JSON.stringify(a)
                                }, [4, k((function() {
                                    return fetch(t, c)
                                }))];
                            case 1:
                                return (u = s.sent()).ok ? [4, u.json()] : [3, 3];
                            case 2:
                                return l = s.sent(), [2, T(l)];
                            case 3:
                                return [4, E("Generate Auth Token", u)];
                            case 4:
                                throw s.sent()
                        }
                    }))
                }))
            }

            function X(t, e) {
                return void 0 === e && (e = !1), o(this, void 0, void 0, (function() {
                    var n, r, a;
                    return s(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                return [4, J(t.appConfig, (function(r) {
                                    if (!et(r)) throw C.create("not-registered");
                                    var a = r.authToken;
                                    if (!e && function(t) {
                                            return 2 === t.requestStatus && ! function(t) {
                                                var e = Date.now();
                                                return e < t.creationTime || t.creationTime + t.expiresIn < e + b
                                            }(t)
                                        }(a)) return r;
                                    if (1 === a.requestStatus) return n = function(t, e) {
                                        return o(this, void 0, void 0, (function() {
                                            var n, r;
                                            return s(this, (function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return [4, tt(t.appConfig)];
                                                    case 1:
                                                        n = i.sent(), i.label = 2;
                                                    case 2:
                                                        return 1 !== n.authToken.requestStatus ? [3, 5] : [4, F(100)];
                                                    case 3:
                                                        return i.sent(), [4, tt(t.appConfig)];
                                                    case 4:
                                                        return n = i.sent(), [3, 2];
                                                    case 5:
                                                        return 0 === (r = n.authToken).requestStatus ? [2, X(t, e)] : [2, r]
                                                }
                                            }))
                                        }))
                                    }(t, e), r;
                                    if (!navigator.onLine) throw C.create("app-offline");
                                    var c = function(t) {
                                        var e = {
                                            requestStatus: 1,
                                            requestTime: Date.now()
                                        };
                                        return i(i({}, t), {
                                            authToken: e
                                        })
                                    }(r);
                                    return n = function(t, e) {
                                        return o(this, void 0, void 0, (function() {
                                            var n, r, o;
                                            return s(this, (function(s) {
                                                switch (s.label) {
                                                    case 0:
                                                        return s.trys.push([0, 3, , 8]), [4, W(t, e)];
                                                    case 1:
                                                        return n = s.sent(), o = i(i({}, e), {
                                                            authToken: n
                                                        }), [4, U(t.appConfig, o)];
                                                    case 2:
                                                        return s.sent(), [2, n];
                                                    case 3:
                                                        return !_(r = s.sent()) || 401 !== r.customData.serverCode && 404 !== r.customData.serverCode ? [3, 5] : [4, G(t.appConfig)];
                                                    case 4:
                                                        return s.sent(), [3, 7];
                                                    case 5:
                                                        return o = i(i({}, e), {
                                                            authToken: {
                                                                requestStatus: 0
                                                            }
                                                        }), [4, U(t.appConfig, o)];
                                                    case 6:
                                                        s.sent(), s.label = 7;
                                                    case 7:
                                                        throw r;
                                                    case 8:
                                                        return [2]
                                                }
                                            }))
                                        }))
                                    }(t, c), c
                                }))];
                            case 1:
                                return r = c.sent(), n ? [4, n] : [3, 3];
                            case 2:
                                return a = c.sent(), [3, 4];
                            case 3:
                                a = r.authToken, c.label = 4;
                            case 4:
                                return [2, a]
                        }
                    }))
                }))
            }

            function tt(t) {
                return J(t, (function(t) {
                    if (!et(t)) throw C.create("not-registered");
                    var e, n = t.authToken;
                    return 1 === (e = n).requestStatus && e.requestTime + m < Date.now() ? i(i({}, t), {
                        authToken: {
                            requestStatus: 0
                        }
                    }) : t
                }))
            }

            function et(t) {
                return void 0 !== t && 2 === t.registrationStatus
            }

            function nt(t) {
                return o(this, void 0, void 0, (function() {
                    var e;
                    return s(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, H(t)];
                            case 1:
                                return (e = n.sent().registrationPromise) ? [4, e] : [3, 3];
                            case 2:
                                n.sent(), n.label = 3;
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }

            function rt(t, e) {
                return o(this, void 0, void 0, (function() {
                    var n, r, i, o;
                    return s(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                return n = function(t, e) {
                                    var n = e.fid;
                                    return I(t) + "/" + n
                                }(t, e), r = M(t, e), i = {
                                    method: "DELETE",
                                    headers: r
                                }, [4, k((function() {
                                    return fetch(n, i)
                                }))];
                            case 1:
                                return (o = s.sent()).ok ? [3, 3] : [4, E("Delete Installation", o)];
                            case 2:
                                throw s.sent();
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }

            function it(t, e) {
                var n = t.appConfig;
                return function(t, e) {
                        q();
                        var n = x(t),
                            r = j.get(n);
                        r || (r = new Set, j.set(n, r)), r.add(e)
                    }(n, e),
                    function() {
                        ! function(t, e) {
                            var n = x(t),
                                r = j.get(n);
                            r && (r.delete(e), 0 === r.size && j.delete(n), K())
                        }(n, e)
                    }
            }

            function ot(t) {
                return C.create("missing-app-config-values", {
                    valueName: t
                })
            }(R = r.a).INTERNAL.registerComponent(new f("installations", (function(t) {
                var e = t.getProvider("app").getImmediate(),
                    n = {
                        appConfig: function(t) {
                            var e, n;
                            if (!t || !t.options) throw ot("App Configuration");
                            if (!t.name) throw ot("App Name");
                            try {
                                for (var r = a(["projectId", "apiKey", "appId"]), i = r.next(); !i.done; i = r.next()) {
                                    var o = i.value;
                                    if (!t.options[o]) throw ot(o)
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
                            return {
                                appName: t.name,
                                projectId: t.options.projectId,
                                apiKey: t.options.apiKey,
                                appId: t.options.appId
                            }
                        }(e),
                        platformLoggerProvider: t.getProvider("platform-logger")
                    };
                return {
                    app: e,
                    getId: function() {
                        return function(t) {
                            return o(this, void 0, void 0, (function() {
                                var e, n, r;
                                return s(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, H(t.appConfig)];
                                        case 1:
                                            return e = i.sent(), n = e.installationEntry, (r = e.registrationPromise) ? r.catch(console.error) : X(t).catch(console.error), [2, n.fid]
                                    }
                                }))
                            }))
                        }(n)
                    },
                    getToken: function(t) {
                        return function(t, e) {
                            return void 0 === e && (e = !1), o(this, void 0, void 0, (function() {
                                return s(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, nt(t.appConfig)];
                                        case 1:
                                            return n.sent(), [4, X(t, e)];
                                        case 2:
                                            return [2, n.sent().token]
                                    }
                                }))
                            }))
                        }(n, t)
                    },
                    delete: function() {
                        return function(t) {
                            return o(this, void 0, void 0, (function() {
                                var e, n;
                                return s(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return [4, J(e = t.appConfig, (function(t) {
                                                if (!t || 0 !== t.registrationStatus) return t
                                            }))];
                                        case 1:
                                            if (!(n = r.sent())) return [3, 6];
                                            if (1 !== n.registrationStatus) return [3, 2];
                                            throw C.create("delete-pending-registration");
                                        case 2:
                                            if (2 !== n.registrationStatus) return [3, 6];
                                            if (navigator.onLine) return [3, 3];
                                            throw C.create("app-offline");
                                        case 3:
                                            return [4, rt(e, n)];
                                        case 4:
                                            return r.sent(), [4, G(e)];
                                        case 5:
                                            r.sent(), r.label = 6;
                                        case 6:
                                            return [2]
                                    }
                                }))
                            }))
                        }(n)
                    },
                    onIdChange: function(t) {
                        return it(n, t)
                    }
                }
            }), "PUBLIC")), R.registerVersion("@firebase/installations", v);
            var st = function() {
                return (st = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }).apply(this, arguments)
            };

            function at(t, e, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                            t(e)
                        }))).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                }))
            }

            function ct(t, e) {
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
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(o) {
                    return function(a) {
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
                        }([o, a])
                    }
                }
            }

            function ut(t) {
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

            function lt(t, e) {
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

            function ft() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(lt(arguments[e]));
                return t
            }
            var ht = n(173),
                pt = function() {
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
                dt = "[DEFAULT]",
                gt = function() {
                    function t(t, e) {
                        this.name = t, this.container = e, this.component = null, this.instances = new Map, this.instancesDeferred = new Map
                    }
                    return t.prototype.get = function(t) {
                        void 0 === t && (t = dt);
                        var e = this.normalizeInstanceIdentifier(t);
                        if (!this.instancesDeferred.has(e)) {
                            var n = new l.a;
                            this.instancesDeferred.set(e, n);
                            try {
                                var r = this.getOrInitializeService(e);
                                r && n.resolve(r)
                            } catch (t) {}
                        }
                        return this.instancesDeferred.get(e).promise
                    }, t.prototype.getImmediate = function(t) {
                        var e = st({
                                identifier: dt,
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
                            this.getOrInitializeService(dt)
                        } catch (t) {}
                        try {
                            for (var r = ut(this.instancesDeferred.entries()), i = r.next(); !i.done; i = r.next()) {
                                var o = lt(i.value, 2),
                                    s = o[0],
                                    a = o[1],
                                    c = this.normalizeInstanceIdentifier(s);
                                try {
                                    var u = this.getOrInitializeService(c);
                                    a.resolve(u)
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
                        void 0 === t && (t = dt), this.instancesDeferred.delete(t), this.instances.delete(t)
                    }, t.prototype.delete = function() {
                        return at(this, void 0, void 0, (function() {
                            var t;
                            return ct(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return t = Array.from(this.instances.values()), [4, Promise.all(ft(t.filter((function(t) {
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
                        return void 0 === t && (t = dt), this.instances.has(t)
                    }, t.prototype.getOrInitializeService = function(t) {
                        var e = this.instances.get(t);
                        return !e && this.component && (e = this.component.instanceFactory(this.container, function(t) {
                            return t === dt ? void 0 : t
                        }(t)), this.instances.set(t, e)), e || null
                    }, t.prototype.normalizeInstanceIdentifier = function(t) {
                        return this.component ? this.component.multipleInstances ? t : dt : t
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
                    var e = new gt(t, this);
                    return this.providers.set(t, e), e
                }, t.prototype.getProviders = function() {
                    return Array.from(this.providers.values())
                }
            }();
            var vt, mt = function() {
                    function t(t, e, n, r) {
                        this.client = t, this.storage = e, this.storageCache = n, this.logger = r
                    }
                    return t.prototype.isCachedDataFresh = function(t, e) {
                        if (!e) return this.logger.debug("Config fetch cache check. Cache unpopulated."), !1;
                        var n = Date.now() - e,
                            r = n <= t;
                        return this.logger.debug("Config fetch cache check. Cache age millis: " + n + ". Cache max age millis (minimumFetchIntervalMillis setting): " + t + ". Is cache hit: " + r + "."), r
                    }, t.prototype.fetch = function(t) {
                        return at(this, void 0, void 0, (function() {
                            var e, n, r, i, o;
                            return ct(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        return [4, Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(), this.storage.getLastSuccessfulFetchResponse()])];
                                    case 1:
                                        return e = s.sent(), n = e[0], (r = e[1]) && this.isCachedDataFresh(t.cacheMaxAgeMillis, n) ? [2, r] : (t.eTag = r && r.eTag, [4, this.client.fetch(t)]);
                                    case 2:
                                        return i = s.sent(), o = [this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())], 200 === i.status && o.push(this.storage.setLastSuccessfulFetchResponse(i)), [4, Promise.all(o)];
                                    case 3:
                                        return s.sent(), [2, i]
                                }
                            }))
                        }))
                    }, t
                }(),
                yt = ((vt = {})["registration-window"] = "Undefined window object. This SDK only supports usage in a browser environment.", vt["registration-project-id"] = "Undefined project identifier. Check Firebase app initialization.", vt["registration-api-key"] = "Undefined API key. Check Firebase app initialization.", vt["registration-app-id"] = "Undefined app identifier. Check Firebase app initialization.", vt["storage-open"] = "Error thrown when opening storage. Original error: {$originalErrorMessage}.", vt["storage-get"] = "Error thrown when reading from storage. Original error: {$originalErrorMessage}.", vt["storage-set"] = "Error thrown when writing to storage. Original error: {$originalErrorMessage}.", vt["storage-delete"] = "Error thrown when deleting from storage. Original error: {$originalErrorMessage}.", vt["fetch-client-network"] = "Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.", vt["fetch-timeout"] = 'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.', vt["fetch-throttle"] = 'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.', vt["fetch-client-parse"] = "Fetch client could not parse response. Original error: {$originalErrorMessage}.", vt["fetch-status"] = "Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.", vt),
                wt = new l.b("remoteconfig", "Remote Config", yt);
            var bt = function() {
                    function t(t, e, n, r, i, o) {
                        this.firebaseInstallations = t, this.sdkVersion = e, this.namespace = n, this.projectId = r, this.apiKey = i, this.appId = o
                    }
                    return t.prototype.fetch = function(t) {
                        return at(this, void 0, void 0, (function() {
                            var e, n, r, i, o, s, a, c, u, l, f, h, p, d, g, v, m, y, w;
                            return ct(this, (function(b) {
                                switch (b.label) {
                                    case 0:
                                        return [4, Promise.all([this.firebaseInstallations.getId(), this.firebaseInstallations.getToken()])];
                                    case 1:
                                        e = b.sent(), n = e[0], r = e[1], i = window.FIREBASE_REMOTE_CONFIG_URL_BASE || "https://firebaseremoteconfig.googleapis.com", o = i + "/v1/projects/" + this.projectId + "/namespaces/" + this.namespace + ":fetch?key=" + this.apiKey, s = {
                                            "Content-Type": "application/json",
                                            "Content-Encoding": "gzip",
                                            "If-None-Match": t.eTag || "*"
                                        }, a = {
                                            sdk_version: this.sdkVersion,
                                            app_instance_id: n,
                                            app_instance_id_token: r,
                                            app_id: this.appId,
                                            language_code: (void 0 === S && (S = navigator), S.languages && S.languages[0] || S.language)
                                        }, c = {
                                            method: "POST",
                                            headers: s,
                                            body: JSON.stringify(a)
                                        }, u = fetch(o, c), l = new Promise((function(e, n) {
                                            t.signal.addEventListener((function() {
                                                var t = new Error("The operation was aborted.");
                                                t.name = "AbortError", n(t)
                                            }))
                                        })), b.label = 2;
                                    case 2:
                                        return b.trys.push([2, 5, , 6]), [4, Promise.race([u, l])];
                                    case 3:
                                        return b.sent(), [4, u];
                                    case 4:
                                        return f = b.sent(), [3, 6];
                                    case 5:
                                        throw h = b.sent(), p = "fetch-client-network", "AbortError" === h.name && (p = "fetch-timeout"), wt.create(p, {
                                            originalErrorMessage: h.message
                                        });
                                    case 6:
                                        if (d = f.status, g = f.headers.get("ETag") || void 0, 200 !== f.status) return [3, 11];
                                        y = void 0, b.label = 7;
                                    case 7:
                                        return b.trys.push([7, 9, , 10]), [4, f.json()];
                                    case 8:
                                        return y = b.sent(), [3, 10];
                                    case 9:
                                        throw w = b.sent(), wt.create("fetch-client-parse", {
                                            originalErrorMessage: w.message
                                        });
                                    case 10:
                                        v = y.entries, m = y.state, b.label = 11;
                                    case 11:
                                        if ("INSTANCE_STATE_UNSPECIFIED" === m ? d = 500 : "NO_CHANGE" === m ? d = 304 : "NO_TEMPLATE" !== m && "EMPTY_CONFIG" !== m || (v = {}), 304 !== d && 200 !== d) throw wt.create("fetch-status", {
                                            httpStatus: d
                                        });
                                        return [2, {
                                            status: d,
                                            eTag: g,
                                            config: v
                                        }]
                                }
                                var S
                            }))
                        }))
                    }, t
                }(),
                St = function() {
                    function t() {
                        this.listeners = []
                    }
                    return t.prototype.addEventListener = function(t) {
                        this.listeners.push(t)
                    }, t.prototype.abort = function() {
                        this.listeners.forEach((function(t) {
                            return t()
                        }))
                    }, t
                }(),
                Ct = ["1", "true", "t", "yes", "y", "on"],
                _t = function() {
                    function t(t, e) {
                        void 0 === e && (e = ""), this._source = t, this._value = e
                    }
                    return t.prototype.asString = function() {
                        return this._value
                    }, t.prototype.asBoolean = function() {
                        return "static" !== this._source && Ct.indexOf(this._value.toLowerCase()) >= 0
                    }, t.prototype.asNumber = function() {
                        if ("static" === this._source) return 0;
                        var t = Number(this._value);
                        return isNaN(t) && (t = 0), t
                    }, t.prototype.getSource = function() {
                        return this._source
                    }, t
                }(),
                It = function() {
                    function t(t, e, n, r, i) {
                        this.app = t, this._client = e, this._storageCache = n, this._storage = r, this._logger = i, this._isInitializationComplete = !1, this.settings = {
                            fetchTimeoutMillis: 6e4,
                            minimumFetchIntervalMillis: 432e5
                        }, this.defaultConfig = {}
                    }
                    return t.prototype.setLogLevel = function(t) {
                        switch (t) {
                            case "debug":
                                this._logger.logLevel = ht.a.DEBUG;
                                break;
                            case "silent":
                                this._logger.logLevel = ht.a.SILENT;
                                break;
                            default:
                                this._logger.logLevel = ht.a.ERROR
                        }
                    }, Object.defineProperty(t.prototype, "fetchTimeMillis", {
                        get: function() {
                            return this._storageCache.getLastSuccessfulFetchTimestampMillis() || -1
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "lastFetchStatus", {
                        get: function() {
                            return this._storageCache.getLastFetchStatus() || "no-fetch-yet"
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.activate = function() {
                        return at(this, void 0, void 0, (function() {
                            var t, e, n;
                            return ct(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, Promise.all([this._storage.getLastSuccessfulFetchResponse(), this._storage.getActiveConfigEtag()])];
                                    case 1:
                                        return t = r.sent(), e = t[0], n = t[1], e && e.config && e.eTag && e.eTag !== n ? [4, Promise.all([this._storageCache.setActiveConfig(e.config), this._storage.setActiveConfigEtag(e.eTag)])] : [2, !1];
                                    case 2:
                                        return r.sent(), [2, !0]
                                }
                            }))
                        }))
                    }, t.prototype.ensureInitialized = function() {
                        var t = this;
                        return this._initializePromise || (this._initializePromise = this._storageCache.loadFromStorage().then((function() {
                            t._isInitializationComplete = !0
                        }))), this._initializePromise
                    }, t.prototype.fetch = function() {
                        return at(this, void 0, void 0, (function() {
                            var t, e, n, r = this;
                            return ct(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        t = new St, setTimeout((function() {
                                            return at(r, void 0, void 0, (function() {
                                                return ct(this, (function(e) {
                                                    return t.abort(), [2]
                                                }))
                                            }))
                                        }), this.settings.fetchTimeoutMillis), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 4, , 6]), [4, this._client.fetch({
                                            cacheMaxAgeMillis: this.settings.minimumFetchIntervalMillis,
                                            signal: t
                                        })];
                                    case 2:
                                        return i.sent(), [4, this._storageCache.setLastFetchStatus("success")];
                                    case 3:
                                        return i.sent(), [3, 6];
                                    case 4:
                                        return e = i.sent(), s = "fetch-throttle", n = (o = e) instanceof l.c && -1 !== o.code.indexOf(s) ? "throttle" : "failure", [4, this._storageCache.setLastFetchStatus(n)];
                                    case 5:
                                        throw i.sent(), e;
                                    case 6:
                                        return [2]
                                }
                                var o, s
                            }))
                        }))
                    }, t.prototype.fetchAndActivate = function() {
                        return at(this, void 0, void 0, (function() {
                            return ct(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.fetch()];
                                    case 1:
                                        return t.sent(), [2, this.activate()]
                                }
                            }))
                        }))
                    }, t.prototype.getAll = function() {
                        var t = this;
                        return function(t, e) {
                            void 0 === t && (t = {});
                            void 0 === e && (e = {});
                            return Object.keys(st(st({}, t), e))
                        }(this._storageCache.getActiveConfig(), this.defaultConfig).reduce((function(e, n) {
                            return e[n] = t.getValue(n), e
                        }), {})
                    }, t.prototype.getBoolean = function(t) {
                        return this.getValue(t).asBoolean()
                    }, t.prototype.getNumber = function(t) {
                        return this.getValue(t).asNumber()
                    }, t.prototype.getString = function(t) {
                        return this.getValue(t).asString()
                    }, t.prototype.getValue = function(t) {
                        this._isInitializationComplete || this._logger.debug('A value was requested for key "' + t + '" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.');
                        var e = this._storageCache.getActiveConfig();
                        return e && void 0 !== e[t] ? new _t("remote", e[t]) : this.defaultConfig && void 0 !== this.defaultConfig[t] ? new _t("default", String(this.defaultConfig[t])) : (this._logger.debug('Returning static value for key "' + t + '". Define a default or remote value if this is unintentional.'), new _t("static"))
                    }, t
                }();

            function Tt(t, e) {
                var n = t.target.error || void 0;
                return wt.create(e, {
                    originalErrorMessage: n && n.message
                })
            }
            var Et = "app_namespace_store";
            var Pt = function() {
                    function t(t, e, n, r) {
                        void 0 === r && (r = new Promise((function(t, e) {
                            var n = indexedDB.open("firebase_remote_config", 1);
                            n.onerror = function(t) {
                                e(Tt(t, "storage-open"))
                            }, n.onsuccess = function(e) {
                                t(e.target.result)
                            }, n.onupgradeneeded = function(t) {
                                var e = t.target.result;
                                switch (t.oldVersion) {
                                    case 0:
                                        e.createObjectStore(Et, {
                                            keyPath: "compositeKey"
                                        })
                                }
                            }
                        }))), this.appId = t, this.appName = e, this.namespace = n, this.openDbPromise = r
                    }
                    return t.prototype.getLastFetchStatus = function() {
                        return this.get("last_fetch_status")
                    }, t.prototype.setLastFetchStatus = function(t) {
                        return this.set("last_fetch_status", t)
                    }, t.prototype.getLastSuccessfulFetchTimestampMillis = function() {
                        return this.get("last_successful_fetch_timestamp_millis")
                    }, t.prototype.setLastSuccessfulFetchTimestampMillis = function(t) {
                        return this.set("last_successful_fetch_timestamp_millis", t)
                    }, t.prototype.getLastSuccessfulFetchResponse = function() {
                        return this.get("last_successful_fetch_response")
                    }, t.prototype.setLastSuccessfulFetchResponse = function(t) {
                        return this.set("last_successful_fetch_response", t)
                    }, t.prototype.getActiveConfig = function() {
                        return this.get("active_config")
                    }, t.prototype.setActiveConfig = function(t) {
                        return this.set("active_config", t)
                    }, t.prototype.getActiveConfigEtag = function() {
                        return this.get("active_config_etag")
                    }, t.prototype.setActiveConfigEtag = function(t) {
                        return this.set("active_config_etag", t)
                    }, t.prototype.getThrottleMetadata = function() {
                        return this.get("throttle_metadata")
                    }, t.prototype.setThrottleMetadata = function(t) {
                        return this.set("throttle_metadata", t)
                    }, t.prototype.deleteThrottleMetadata = function() {
                        return this.delete("throttle_metadata")
                    }, t.prototype.get = function(t) {
                        return at(this, void 0, void 0, (function() {
                            var e, n = this;
                            return ct(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.openDbPromise];
                                    case 1:
                                        return e = r.sent(), [2, new Promise((function(r, i) {
                                            var o = e.transaction([Et], "readonly").objectStore(Et),
                                                s = n.createCompositeKey(t);
                                            try {
                                                var a = o.get(s);
                                                a.onerror = function(t) {
                                                    i(Tt(t, "storage-get"))
                                                }, a.onsuccess = function(t) {
                                                    var e = t.target.result;
                                                    r(e ? e.value : void 0)
                                                }
                                            } catch (t) {
                                                i(wt.create("storage-get", {
                                                    originalErrorMessage: t && t.message
                                                }))
                                            }
                                        }))]
                                }
                            }))
                        }))
                    }, t.prototype.set = function(t, e) {
                        return at(this, void 0, void 0, (function() {
                            var n, r = this;
                            return ct(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.openDbPromise];
                                    case 1:
                                        return n = i.sent(), [2, new Promise((function(i, o) {
                                            var s = n.transaction([Et], "readwrite").objectStore(Et),
                                                a = r.createCompositeKey(t);
                                            try {
                                                var c = s.put({
                                                    compositeKey: a,
                                                    value: e
                                                });
                                                c.onerror = function(t) {
                                                    o(Tt(t, "storage-set"))
                                                }, c.onsuccess = function() {
                                                    i()
                                                }
                                            } catch (t) {
                                                o(wt.create("storage-set", {
                                                    originalErrorMessage: t && t.message
                                                }))
                                            }
                                        }))]
                                }
                            }))
                        }))
                    }, t.prototype.delete = function(t) {
                        return at(this, void 0, void 0, (function() {
                            var e, n = this;
                            return ct(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.openDbPromise];
                                    case 1:
                                        return e = r.sent(), [2, new Promise((function(r, i) {
                                            var o = e.transaction([Et], "readwrite").objectStore(Et),
                                                s = n.createCompositeKey(t);
                                            try {
                                                var a = o.delete(s);
                                                a.onerror = function(t) {
                                                    i(Tt(t, "storage-delete"))
                                                }, a.onsuccess = function() {
                                                    r()
                                                }
                                            } catch (t) {
                                                i(wt.create("storage-delete", {
                                                    originalErrorMessage: t && t.message
                                                }))
                                            }
                                        }))]
                                }
                            }))
                        }))
                    }, t.prototype.createCompositeKey = function(t) {
                        return [this.appId, this.appName, this.namespace, t].join()
                    }, t
                }(),
                Mt = function() {
                    function t(t) {
                        this.storage = t
                    }
                    return t.prototype.getLastFetchStatus = function() {
                        return this.lastFetchStatus
                    }, t.prototype.getLastSuccessfulFetchTimestampMillis = function() {
                        return this.lastSuccessfulFetchTimestampMillis
                    }, t.prototype.getActiveConfig = function() {
                        return this.activeConfig
                    }, t.prototype.loadFromStorage = function() {
                        return at(this, void 0, void 0, (function() {
                            var t, e, n, r, i, o;
                            return ct(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        return t = this.storage.getLastFetchStatus(), e = this.storage.getLastSuccessfulFetchTimestampMillis(), n = this.storage.getActiveConfig(), [4, t];
                                    case 1:
                                        return (r = s.sent()) && (this.lastFetchStatus = r), [4, e];
                                    case 2:
                                        return (i = s.sent()) && (this.lastSuccessfulFetchTimestampMillis = i), [4, n];
                                    case 3:
                                        return (o = s.sent()) && (this.activeConfig = o), [2]
                                }
                            }))
                        }))
                    }, t.prototype.setLastFetchStatus = function(t) {
                        return this.lastFetchStatus = t, this.storage.setLastFetchStatus(t)
                    }, t.prototype.setLastSuccessfulFetchTimestampMillis = function(t) {
                        return this.lastSuccessfulFetchTimestampMillis = t, this.storage.setLastSuccessfulFetchTimestampMillis(t)
                    }, t.prototype.setActiveConfig = function(t) {
                        return this.activeConfig = t, this.storage.setActiveConfig(t)
                    }, t
                }();

            function kt(t, e) {
                return new Promise((function(n, r) {
                    var i = Math.max(e - Date.now(), 0),
                        o = setTimeout(n, i);
                    t.addEventListener((function() {
                        clearTimeout(o), r(wt.create("fetch-throttle", {
                            throttleEndTimeMillis: e
                        }))
                    }))
                }))
            }
            var Dt, Ft = function() {
                    function t(t, e) {
                        this.client = t, this.storage = e
                    }
                    return t.prototype.fetch = function(t) {
                        return at(this, void 0, void 0, (function() {
                            var e;
                            return ct(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.storage.getThrottleMetadata()];
                                    case 1:
                                        return e = n.sent() || {
                                            backoffCount: 0,
                                            throttleEndTimeMillis: Date.now()
                                        }, [2, this.attemptFetch(t, e)]
                                }
                            }))
                        }))
                    }, t.prototype.attemptFetch = function(t, e) {
                        var n = e.throttleEndTimeMillis,
                            r = e.backoffCount;
                        return at(this, void 0, void 0, (function() {
                            var e, i, o;
                            return ct(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        return [4, kt(t.signal, n)];
                                    case 1:
                                        s.sent(), s.label = 2;
                                    case 2:
                                        return s.trys.push([2, 5, , 7]), [4, this.client.fetch(t)];
                                    case 3:
                                        return e = s.sent(), [4, this.storage.deleteThrottleMetadata()];
                                    case 4:
                                        return s.sent(), [2, e];
                                    case 5:
                                        if (! function(t) {
                                                if (!(t instanceof l.c && t.customData)) return !1;
                                                var e = Number(t.customData.httpStatus);
                                                return 429 === e || 500 === e || 503 === e || 504 === e
                                            }(i = s.sent())) throw i;
                                        return o = {
                                            throttleEndTimeMillis: Date.now() + Object(l.d)(r),
                                            backoffCount: r + 1
                                        }, [4, this.storage.setThrottleMetadata(o)];
                                    case 6:
                                        return s.sent(), [2, this.attemptFetch(t, o)];
                                    case 7:
                                        return [2]
                                }
                            }))
                        }))
                    }, t
                }(),
                At = "@firebase/remote-config";
            (Dt = r.a).INTERNAL.registerComponent(new pt("remoteConfig", (function(t, e) {
                var n = t.getProvider("app").getImmediate(),
                    r = t.getProvider("installations").getImmediate();
                if ("undefined" == typeof window) throw wt.create("registration-window");
                var i = n.options,
                    o = i.projectId,
                    s = i.apiKey,
                    a = i.appId;
                if (!o) throw wt.create("registration-project-id");
                if (!s) throw wt.create("registration-api-key");
                if (!a) throw wt.create("registration-app-id");
                e = e || "firebase";
                var c = new Pt(a, n.name, e),
                    u = new Mt(c),
                    l = new ht.b(At);
                l.logLevel = ht.a.ERROR;
                var f = new bt(r, Dt.SDK_VERSION, e, o, s, a),
                    h = new Ft(f, c),
                    p = new mt(h, c, u, l),
                    d = new It(n, p, u, c, l);
                return d.ensureInitialized(), d
            }), "PUBLIC").setMultipleInstances(!0)), Dt.registerVersion(At, "0.1.31")
        }
    }
]);