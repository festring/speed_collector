! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).firebase)
}(this, function(Ru) {
    "use strict";
    try {
        ! function() {
            function e(e) {
                return e && "object" == typeof e && "default" in e ? e : {
                    default: e
                }
            }
            var t = e(Ru),
                r = function(e, t) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        })(e, t)
                };

            function n(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var l = function() {
                return (l = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function i(e, a, s, u) {
                return new(s = s || Promise)(function(n, t) {
                    function r(e) {
                        try {
                            o(u.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function i(e) {
                        try {
                            o(u.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function o(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                            e(t)
                        })).then(r, i)
                    }
                    o((u = u.apply(e, a || [])).next())
                })
            }

            function p(n, r) {
                var i, o, a, s = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    },
                    e = {
                        next: t(0),
                        throw: t(1),
                        return: t(2)
                    };
                return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                    return this
                }), e;

                function t(t) {
                    return function(e) {
                        return function(t) {
                            if (i) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (i = 1, o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
                                switch (o = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                    case 0:
                                    case 1:
                                        a = t;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: t[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, o = t[1], t = [0];
                                        continue;
                                    case 7:
                                        t = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                            s.label = t[1];
                                            break
                                        }
                                        if (6 === t[0] && s.label < a[1]) {
                                            s.label = a[1], a = t;
                                            break
                                        }
                                        if (a && s.label < a[2]) {
                                            s.label = a[2], s.ops.push(t);
                                            break
                                        }
                                        a[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                t = r.call(n, s)
                            } catch (e) {
                                t = [6, e], o = 0
                            } finally {
                                i = a = 0
                            }
                            if (5 & t[0]) throw t[1];
                            return {
                                value: t[0] ? t[1] : void 0,
                                done: !0
                            }
                        }([t, e])
                    }
                }
            }

            function _(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return {
                            value: (e = e && r >= e.length ? void 0 : e) && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function y(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, i, o = n.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || 0 < t--) && !(r = o.next()).done;) a.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return a
            }

            function a(e, t) {
                for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
                return e
            }

            function o(e) {
                for (var t = [], n = 0, r = 0; r < e.length; r++) {
                    var i = e.charCodeAt(r);
                    i < 128 ? t[n++] = i : (i < 2048 ? t[n++] = i >> 6 | 192 : (55296 == (64512 & i) && r + 1 < e.length && 56320 == (64512 & e.charCodeAt(r + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r)), t[n++] = i >> 18 | 240, t[n++] = i >> 12 & 63 | 128) : t[n++] = i >> 12 | 224, t[n++] = i >> 6 & 63 | 128), t[n++] = 63 & i | 128)
                }
                return t
            }

            function s(e) {
                try {
                    return h.decodeString(e, !0)
                } catch (e) {
                    console.error("base64Decode failed: ", e)
                }
                return null
            }
            var u = {
                    NODE_CLIENT: !1,
                    NODE_ADMIN: !1,
                    SDK_VERSION: "${JSCORE_VERSION}"
                },
                g = function(e, t) {
                    if (!e) throw m(t)
                },
                m = function(e) {
                    return new Error("Firebase Database (" + u.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + e)
                },
                h = {
                    byteToCharMap_: null,
                    charToByteMap_: null,
                    byteToCharMapWebSafe_: null,
                    charToByteMapWebSafe_: null,
                    ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                    get ENCODED_VALS() {
                        return this.ENCODED_VALS_BASE + "+/="
                    },
                    get ENCODED_VALS_WEBSAFE() {
                        return this.ENCODED_VALS_BASE + "-_."
                    },
                    HAS_NATIVE_SUPPORT: "function" == typeof atob,
                    encodeByteArray: function(e, t) {
                        if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
                        this.init_();
                        for (var n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [], i = 0; i < e.length; i += 3) {
                            var o = e[i],
                                a = i + 1 < e.length,
                                s = a ? e[i + 1] : 0,
                                u = i + 2 < e.length,
                                l = u ? e[i + 2] : 0,
                                h = (15 & s) << 2 | l >> 6,
                                l = 63 & l;
                            u || (l = 64, a || (h = 64)), r.push(n[o >> 2], n[(3 & o) << 4 | s >> 4], n[h], n[l])
                        }
                        return r.join("")
                    },
                    encodeString: function(e, t) {
                        return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(o(e), t)
                    },
                    decodeString: function(e, t) {
                        return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : function(e) {
                            for (var t = [], n = 0, r = 0; n < e.length;) {
                                var i, o, a, s = e[n++];
                                s < 128 ? t[r++] = String.fromCharCode(s) : 191 < s && s < 224 ? (o = e[n++], t[r++] = String.fromCharCode((31 & s) << 6 | 63 & o)) : 239 < s && s < 365 ? (i = ((7 & s) << 18 | (63 & (o = e[n++])) << 12 | (63 & (a = e[n++])) << 6 | 63 & e[n++]) - 65536, t[r++] = String.fromCharCode(55296 + (i >> 10)), t[r++] = String.fromCharCode(56320 + (1023 & i))) : (o = e[n++], a = e[n++], t[r++] = String.fromCharCode((15 & s) << 12 | (63 & o) << 6 | 63 & a))
                            }
                            return t.join("")
                        }(this.decodeStringToByteArray(e, t))
                    },
                    decodeStringToByteArray: function(e, t) {
                        this.init_();
                        for (var n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [], i = 0; i < e.length;) {
                            var o = n[e.charAt(i++)],
                                a = i < e.length ? n[e.charAt(i)] : 0,
                                s = ++i < e.length ? n[e.charAt(i)] : 64,
                                u = ++i < e.length ? n[e.charAt(i)] : 64;
                            if (++i, null == o || null == a || null == s || null == u) throw Error();
                            r.push(o << 2 | a >> 4), 64 !== s && (r.push(a << 4 & 240 | s >> 2), 64 !== u && r.push(s << 6 & 192 | u))
                        }
                        return r
                    },
                    init_: function() {
                        if (!this.byteToCharMap_) {
                            this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                            for (var e = 0; e < this.ENCODED_VALS.length; e++) this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e) >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
                        }
                    }
                };

            function c(e) {
                return function e(t, n) {
                    if (!(n instanceof Object)) return n;
                    switch (n.constructor) {
                        case Date:
                            return new Date(n.getTime());
                        case Object:
                            void 0 === t && (t = {});
                            break;
                        case Array:
                            t = [];
                            break;
                        default:
                            return n
                    }
                    for (var r in n) n.hasOwnProperty(r) && d(r) && (t[r] = e(t[r], n[r]));
                    return t
                }(void 0, e)
            }

            function d(e) {
                return "__proto__" !== e
            }
            var f = (v.prototype.wrapCallback = function(n) {
                var r = this;
                return function(e, t) {
                    e ? r.reject(e) : r.resolve(t), "function" == typeof n && (r.promise.catch(function() {}), 1 === n.length ? n(e) : n(e, t))
                }
            }, v);

            function v() {
                var n = this;
                this.reject = function() {}, this.resolve = function() {}, this.promise = new Promise(function(e, t) {
                    n.resolve = e, n.reject = t
                })
            }

            function w() {
                return "undefined" != typeof window && (window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : "")
            }

            function C() {
                return !0 === u.NODE_ADMIN
            }
            var b, T = "FirebaseError",
                E = (n(I, b = Error), I);

            function I(e, t, n) {
                t = b.call(this, t) || this;
                return t.code = e, t.customData = n, t.name = T, Object.setPrototypeOf(t, I.prototype), Error.captureStackTrace && Error.captureStackTrace(t, S.prototype.create), t
            }
            var S = (k.prototype.create = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                var r, i = t[0] || {},
                    o = this.service + "/" + e,
                    e = this.errors[e],
                    e = e ? (r = i, e.replace(P, function(e, t) {
                        var n = r[t];
                        return null != n ? String(n) : "<" + t + "?>"
                    })) : "Error",
                    e = this.serviceName + ": " + e + " (" + o + ").";
                return new E(o, e, i)
            }, k);

            function k(e, t, n) {
                this.service = e, this.serviceName = t, this.errors = n
            }
            var P = /\{\$([^}]+)}/g;

            function N(e) {
                return JSON.parse(e)
            }

            function x(e) {
                return JSON.stringify(e)
            }

            function R(e) {
                var t = {},
                    n = {},
                    r = {},
                    i = "";
                try {
                    var o = e.split("."),
                        t = N(s(o[0]) || ""),
                        n = N(s(o[1]) || ""),
                        i = o[2],
                        r = n.d || {};
                    delete n.d
                } catch (e) {}
                return {
                    header: t,
                    claims: n,
                    data: r,
                    signature: i
                }
            }

            function O(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function D(e, t) {
                if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
            }

            function A(e) {
                for (var t in e)
                    if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
                return !0
            }

            function L(e, t, n) {
                var r, i = {};
                for (r in e) Object.prototype.hasOwnProperty.call(e, r) && (i[r] = t.call(n, e[r], r, e));
                return i
            }

            function M(e) {
                for (var n = [], t = 0, r = Object.entries(e); t < r.length; t++) {
                    var i = r[t];
                    ! function(t, e) {
                        Array.isArray(e) ? e.forEach(function(e) {
                            n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e))
                        }) : n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e))
                    }(i[0], i[1])
                }
                return n.length ? "&" + n.join("&") : ""
            }
            var F = (q.prototype.reset = function() {
                this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0
            }, q.prototype.compress_ = function(e, t) {
                t = t || 0;
                var n = this.W_;
                if ("string" == typeof e)
                    for (var r = 0; r < 16; r++) n[r] = e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | e.charCodeAt(t + 3), t += 4;
                else
                    for (r = 0; r < 16; r++) n[r] = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3], t += 4;
                for (r = 16; r < 80; r++) {
                    var i = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16];
                    n[r] = 4294967295 & (i << 1 | i >>> 31)
                }
                for (var o, a = this.chain_[0], s = this.chain_[1], u = this.chain_[2], l = this.chain_[3], h = this.chain_[4], r = 0; r < 80; r++) var c = r < 40 ? r < 20 ? (o = l ^ s & (u ^ l), 1518500249) : (o = s ^ u ^ l, 1859775393) : r < 60 ? (o = s & u | l & (s | u), 2400959708) : (o = s ^ u ^ l, 3395469782),
                    i = (a << 5 | a >>> 27) + o + h + c + n[r] & 4294967295,
                    h = l,
                    l = u,
                    u = 4294967295 & (s << 30 | s >>> 2),
                    s = a,
                    a = i;
                this.chain_[0] = this.chain_[0] + a & 4294967295, this.chain_[1] = this.chain_[1] + s & 4294967295, this.chain_[2] = this.chain_[2] + u & 4294967295, this.chain_[3] = this.chain_[3] + l & 4294967295, this.chain_[4] = this.chain_[4] + h & 4294967295
            }, q.prototype.update = function(e, t) {
                if (null != e) {
                    for (var n = (t = void 0 === t ? e.length : t) - this.blockSize, r = 0, i = this.buf_, o = this.inbuf_; r < t;) {
                        if (0 === o)
                            for (; r <= n;) this.compress_(e, r), r += this.blockSize;
                        if ("string" == typeof e) {
                            for (; r < t;)
                                if (i[o] = e.charCodeAt(r), ++r, ++o === this.blockSize) {
                                    this.compress_(i), o = 0;
                                    break
                                }
                        } else
                            for (; r < t;)
                                if (i[o] = e[r], ++r, ++o === this.blockSize) {
                                    this.compress_(i), o = 0;
                                    break
                                }
                    }
                    this.inbuf_ = o, this.total_ += t
                }
            }, q.prototype.digest = function() {
                var e = [],
                    t = 8 * this.total_;
                this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
                for (var n = this.blockSize - 1; 56 <= n; n--) this.buf_[n] = 255 & t, t /= 256;
                this.compress_(this.buf_);
                for (var r = 0, n = 0; n < 5; n++)
                    for (var i = 24; 0 <= i; i -= 8) e[r] = this.chain_[n] >> i & 255, ++r;
                return e
            }, q);

            function q() {
                this.chain_ = [], this.buf_ = [], this.W_ = [], this.pad_ = [], this.inbuf_ = 0, this.total_ = 0, this.blockSize = 64, this.pad_[0] = 128;
                for (var e = 1; e < this.blockSize; ++e) this.pad_[e] = 0;
                this.reset()
            }

            function W(e, t, n, r) {
                var i;
                if (r < t ? i = "at least " + t : n < r && (i = 0 === n ? "none" : "no more than " + n), i) throw new Error(e + " failed: Was called with " + r + (1 === r ? " argument." : " arguments.") + " Expects " + i + ".")
            }

            function j(e, t) {
                return e + " failed: " + t + " argument "
            }

            function U(e, t, n, r) {
                if ((!r || n) && "function" != typeof n) throw new Error(j(e, t) + "must be a valid function.")
            }

            function B(e, t, n, r) {
                if ((!r || n) && ("object" != typeof n || null === n)) throw new Error(j(e, t) + "must be a valid context object.")
            }

            function V(e) {
                for (var t = 0, n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    r < 128 ? t++ : r < 2048 ? t += 2 : 55296 <= r && r <= 56319 ? (t += 4, n++) : t += 3
                }
                return t
            }

            function z(e) {
                return e && e._delegate ? e._delegate : e
            }
            var H = (Q.prototype.setInstantiationMode = function(e) {
                return this.instantiationMode = e, this
            }, Q.prototype.setMultipleInstances = function(e) {
                return this.multipleInstances = e, this
            }, Q.prototype.setServiceProps = function(e) {
                return this.serviceProps = e, this
            }, Q.prototype.setInstanceCreatedCallback = function(e) {
                return this.onInstanceCreated = e, this
            }, Q);

            function Q(e, t, n) {
                this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
            }
            var Y = "[DEFAULT]",
                K = (G.prototype.get = function(e) {
                    var t = this.normalizeInstanceIdentifier(e);
                    if (!this.instancesDeferred.has(t)) {
                        e = new f;
                        if (this.instancesDeferred.set(t, e), this.isInitialized(t) || this.shouldAutoInitialize()) try {
                            var n = this.getOrInitializeService({
                                instanceIdentifier: t
                            });
                            n && e.resolve(n)
                        } catch (e) {}
                    }
                    return this.instancesDeferred.get(t).promise
                }, G.prototype.getImmediate = function(t) {
                    var e = this.normalizeInstanceIdentifier(null == t ? void 0 : t.identifier),
                        t = null !== (t = null == t ? void 0 : t.optional) && void 0 !== t && t;
                    if (!this.isInitialized(e) && !this.shouldAutoInitialize()) {
                        if (t) return null;
                        throw Error("Service " + this.name + " is not available")
                    }
                    try {
                        return this.getOrInitializeService({
                            instanceIdentifier: e
                        })
                    } catch (e) {
                        if (t) return null;
                        throw e
                    }
                }, G.prototype.getComponent = function() {
                    return this.component
                }, G.prototype.setComponent = function(e) {
                    var t, n;
                    if (e.name !== this.name) throw Error("Mismatching Component " + e.name + " for Provider " + this.name + ".");
                    if (this.component) throw Error("Component for " + this.name + " has already been provided");
                    if (this.component = e, this.shouldAutoInitialize()) {
                        if ("EAGER" === e.instantiationMode) try {
                            this.getOrInitializeService({
                                instanceIdentifier: Y
                            })
                        } catch (e) {}
                        try {
                            for (var r = _(this.instancesDeferred.entries()), i = r.next(); !i.done; i = r.next()) {
                                var o = y(i.value, 2),
                                    a = o[0],
                                    s = o[1],
                                    u = this.normalizeInstanceIdentifier(a);
                                try {
                                    var l = this.getOrInitializeService({
                                        instanceIdentifier: u
                                    });
                                    s.resolve(l)
                                } catch (e) {}
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                i && !i.done && (n = r.return) && n.call(r)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                    }
                }, G.prototype.clearInstance = function(e) {
                    this.instancesDeferred.delete(e = void 0 === e ? Y : e), this.instances.delete(e)
                }, G.prototype.delete = function() {
                    return i(this, void 0, void 0, function() {
                        var t;
                        return p(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return t = Array.from(this.instances.values()), [4, Promise.all(a(a([], y(t.filter(function(e) {
                                        return "INTERNAL" in e
                                    }).map(function(e) {
                                        return e.INTERNAL.delete()
                                    }))), y(t.filter(function(e) {
                                        return "_delete" in e
                                    }).map(function(e) {
                                        return e._delete()
                                    }))))];
                                case 1:
                                    return e.sent(), [2]
                            }
                        })
                    })
                }, G.prototype.isComponentSet = function() {
                    return null != this.component
                }, G.prototype.isInitialized = function(e) {
                    return this.instances.has(e = void 0 === e ? Y : e)
                }, G.prototype.initialize = function(e) {
                    var t, n, r = (e = void 0 === e ? {} : e).options,
                        r = void 0 === r ? {} : r,
                        i = this.normalizeInstanceIdentifier(e.instanceIdentifier);
                    if (this.isInitialized(i)) throw Error(this.name + "(" + i + ") has already been initialized");
                    if (!this.isComponentSet()) throw Error("Component " + this.name + " has not been registered yet");
                    var o = this.getOrInitializeService({
                        instanceIdentifier: i,
                        options: r
                    });
                    try {
                        for (var a = _(this.instancesDeferred.entries()), s = a.next(); !s.done; s = a.next()) {
                            var u = y(s.value, 2),
                                l = u[0],
                                h = u[1];
                            i === this.normalizeInstanceIdentifier(l) && h.resolve(o)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            s && !s.done && (n = a.return) && n.call(a)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return o
                }, G.prototype.onInit = function(e, t) {
                    var n = this.normalizeInstanceIdentifier(t),
                        r = null !== (t = this.onInitCallbacks.get(n)) && void 0 !== t ? t : new Set;
                    r.add(e), this.onInitCallbacks.set(n, r);
                    t = this.instances.get(n);
                    return t && e(t, n),
                        function() {
                            r.delete(e)
                        }
                }, G.prototype.invokeOnInitCallbacks = function(e, t) {
                    var n, r, i = this.onInitCallbacks.get(t);
                    if (i) try {
                        for (var o = _(i), a = o.next(); !a.done; a = o.next()) {
                            var s = a.value;
                            try {
                                s(e, t)
                            } catch (e) {}
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (r = o.return) && r.call(o)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                }, G.prototype.getOrInitializeService = function(e) {
                    var t = e.instanceIdentifier,
                        n = e.options,
                        r = void 0 === n ? {} : n,
                        e = this.instances.get(t);
                    if (!e && this.component && (e = this.component.instanceFactory(this.container, {
                            instanceIdentifier: (n = t) === Y ? void 0 : n,
                            options: r
                        }), this.instances.set(t, e), this.invokeOnInitCallbacks(e, t), this.component.onInstanceCreated)) try {
                        this.component.onInstanceCreated(this.container, t, e)
                    } catch (e) {}
                    return e || null
                }, G.prototype.normalizeInstanceIdentifier = function(e) {
                    return void 0 === e && (e = Y), !this.component || this.component.multipleInstances ? e : Y
                }, G.prototype.shouldAutoInitialize = function() {
                    return !!this.component && "EXPLICIT" !== this.component.instantiationMode
                }, G);

            function G(e, t) {
                this.name = e, this.container = t, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.onInitCallbacks = new Map
            }
            var $, J = (X.prototype.addComponent = function(e) {
                var t = this.getProvider(e.name);
                if (t.isComponentSet()) throw new Error("Component " + e.name + " has already been registered with " + this.name);
                t.setComponent(e)
            }, X.prototype.addOrOverwriteComponent = function(e) {
                this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
            }, X.prototype.getProvider = function(e) {
                if (this.providers.has(e)) return this.providers.get(e);
                var t = new K(e, this);
                return this.providers.set(e, t), t
            }, X.prototype.getProviders = function() {
                return Array.from(this.providers.values())
            }, X);

            function X(e) {
                this.name = e, this.providers = new Map
            }(Ct = $ = $ || {})[Ct.DEBUG = 0] = "DEBUG", Ct[Ct.VERBOSE = 1] = "VERBOSE", Ct[Ct.INFO = 2] = "INFO", Ct[Ct.WARN = 3] = "WARN", Ct[Ct.ERROR = 4] = "ERROR", Ct[Ct.SILENT = 5] = "SILENT";

            function Z(e, t) {
                for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                if (!(t < e.logLevel)) {
                    var i = (new Date).toISOString(),
                        o = ne[t];
                    if (!o) throw new Error("Attempted to log a message with an invalid logType (value: " + t + ")");
                    console[o].apply(console, a(["[" + i + "]  " + e.name + ":"], n))
                }
            }
            var ee = {
                    debug: $.DEBUG,
                    verbose: $.VERBOSE,
                    info: $.INFO,
                    warn: $.WARN,
                    error: $.ERROR,
                    silent: $.SILENT
                },
                te = $.INFO,
                ne = ((Tt = {})[$.DEBUG] = "log", Tt[$.VERBOSE] = "log", Tt[$.INFO] = "info", Tt[$.WARN] = "warn", Tt[$.ERROR] = "error", Tt),
                re = (Object.defineProperty(ie.prototype, "logLevel", {
                    get: function() {
                        return this._logLevel
                    },
                    set: function(e) {
                        if (!(e in $)) throw new TypeError('Invalid value "' + e + '" assigned to `logLevel`');
                        this._logLevel = e
                    },
                    enumerable: !1,
                    configurable: !0
                }), ie.prototype.setLogLevel = function(e) {
                    this._logLevel = "string" == typeof e ? ee[e] : e
                }, Object.defineProperty(ie.prototype, "logHandler", {
                    get: function() {
                        return this._logHandler
                    },
                    set: function(e) {
                        if ("function" != typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
                        this._logHandler = e
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(ie.prototype, "userLogHandler", {
                    get: function() {
                        return this._userLogHandler
                    },
                    set: function(e) {
                        this._userLogHandler = e
                    },
                    enumerable: !1,
                    configurable: !0
                }), ie.prototype.debug = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this._userLogHandler && this._userLogHandler.apply(this, a([this, $.DEBUG], e)), this._logHandler.apply(this, a([this, $.DEBUG], e))
                }, ie.prototype.log = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this._userLogHandler && this._userLogHandler.apply(this, a([this, $.VERBOSE], e)), this._logHandler.apply(this, a([this, $.VERBOSE], e))
                }, ie.prototype.info = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this._userLogHandler && this._userLogHandler.apply(this, a([this, $.INFO], e)), this._logHandler.apply(this, a([this, $.INFO], e))
                }, ie.prototype.warn = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this._userLogHandler && this._userLogHandler.apply(this, a([this, $.WARN], e)), this._logHandler.apply(this, a([this, $.WARN], e))
                }, ie.prototype.error = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this._userLogHandler && this._userLogHandler.apply(this, a([this, $.ERROR], e)), this._logHandler.apply(this, a([this, $.ERROR], e))
                }, ie);

            function ie(e) {
                this.name = e, this._logLevel = te, this._logHandler = Z, this._userLogHandler = null
            }
            var oe = "";

            function ae(e) {
                oe = e
            }
            var se = (ue.prototype.set = function(e, t) {
                null == t ? this.domStorage_.removeItem(this.prefixedName_(e)) : this.domStorage_.setItem(this.prefixedName_(e), x(t))
            }, ue.prototype.get = function(e) {
                e = this.domStorage_.getItem(this.prefixedName_(e));
                return null == e ? null : N(e)
            }, ue.prototype.remove = function(e) {
                this.domStorage_.removeItem(this.prefixedName_(e))
            }, ue.prototype.prefixedName_ = function(e) {
                return this.prefix_ + e
            }, ue.prototype.toString = function() {
                return this.domStorage_.toString()
            }, ue);

            function ue(e) {
                this.domStorage_ = e, this.prefix_ = "firebase:"
            }
            var le = (he.prototype.set = function(e, t) {
                null == t ? delete this.cache_[e] : this.cache_[e] = t
            }, he.prototype.get = function(e) {
                return O(this.cache_, e) ? this.cache_[e] : null
            }, he.prototype.remove = function(e) {
                delete this.cache_[e]
            }, he);

            function he() {
                this.cache_ = {}, this.isInMemoryStorage = !0
            }

            function ce(e) {
                var t = function(e) {
                    for (var t = [], n = 0, r = 0; r < e.length; r++) {
                        var i, o = e.charCodeAt(r);
                        55296 <= o && o <= 56319 && (i = o - 55296, g(++r < e.length, "Surrogate pair missing trail surrogate."), o = 65536 + (i << 10) + (e.charCodeAt(r) - 56320)), o < 128 ? t[n++] = o : (o < 2048 ? t[n++] = o >> 6 | 192 : (o < 65536 ? t[n++] = o >> 12 | 224 : (t[n++] = o >> 18 | 240, t[n++] = o >> 12 & 63 | 128), t[n++] = o >> 6 & 63 | 128), t[n++] = 63 & o | 128)
                    }
                    return t
                }(e);
                return (e = new F).update(t), e = e.digest(), h.encodeByteArray(e)
            }

            function pe(e, t) {
                g(!t || !0 === e || !1 === e, "Can't turn on custom loggers persistently."), !0 === e ? (be.logLevel = $.VERBOSE, Ie = be.log.bind(be), t && Ce.set("logging_enabled", !0)) : "function" == typeof e ? Ie = e : (Ie = null, Ce.remove("logging_enabled"))
            }

            function de() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = "FIREBASE INTERNAL ERROR: " + Ee.apply(void 0, a([], y(e)));
                be.error(n)
            }

            function fe(e) {
                return "number" == typeof e && (e != e || e === Number.POSITIVE_INFINITY || e === Number.NEGATIVE_INFINITY)
            }

            function _e(e, t) {
                return e === t ? 0 : e < t ? -1 : 1
            }

            function ye(e, t) {
                if (t && e in t) return t[e];
                throw new Error("Missing required key (" + e + ") in object: " + x(t))
            }

            function ve(e, t) {
                var n = e.length;
                if (n <= t) return [e];
                for (var r = [], i = 0; i < n; i += t) n < i + t ? r.push(e.substring(i, n)) : r.push(e.substring(i, i + t));
                return r
            }
            var ge, me = function(e) {
                    try {
                        if ("undefined" != typeof window && void 0 !== window[e]) {
                            var t = window[e];
                            return t.setItem("firebase:sentinel", "cache"), t.removeItem("firebase:sentinel"), new se(t)
                        }
                    } catch (e) {}
                    return new le
                },
                we = me("localStorage"),
                Ce = me("sessionStorage"),
                be = new re("@firebase/database"),
                Te = (ge = 1, function() {
                    return ge++
                }),
                Ee = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    for (var n = "", r = 0; r < e.length; r++) {
                        var i = e[r];
                        Array.isArray(i) || i && "object" == typeof i && "number" == typeof i.length ? n += Ee.apply(null, i) : n += "object" == typeof i ? x(i) : i, n += " "
                    }
                    return n
                },
                Ie = null,
                Se = !0,
                ke = function() {
                    for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    !0 === Se && (Se = !1, null === Ie && !0 === Ce.get("logging_enabled") && pe(!0)), Ie && (e = Ee.apply(null, t), Ie(e))
                },
                Pe = function(n) {
                    return function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        ke.apply(void 0, a([n], y(e)))
                    }
                },
                Ne = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = "FIREBASE FATAL ERROR: " + Ee.apply(void 0, a([], y(e)));
                    throw be.error(n), new Error(n)
                },
                xe = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = "FIREBASE WARNING: " + Ee.apply(void 0, a([], y(e)));
                    be.warn(n)
                },
                Re = "[MIN_NAME]",
                Oe = "[MAX_NAME]",
                De = function(e, t) {
                    if (e === t) return 0;
                    if (e === Re || t === Oe) return -1;
                    if (t === Re || e === Oe) return 1;
                    var n = Ue(e),
                        r = Ue(t);
                    return null !== n ? null !== r ? n - r == 0 ? e.length - t.length : n - r : -1 : null === r && e < t ? -1 : 1
                },
                Ae = function(e) {
                    if ("object" != typeof e || null === e) return x(e);
                    var t, n = [];
                    for (t in e) n.push(t);
                    n.sort();
                    for (var r = "{", i = 0; i < n.length; i++) 0 !== i && (r += ","), r += x(n[i]), r += ":", r += Ae(e[n[i]]);
                    return r += "}"
                };

            function Le(e, t) {
                for (var n in e) e.hasOwnProperty(n) && t(n, e[n])
            }

            function Me(e) {
                var t, n, r, i;
                g(!fe(e), "Invalid JSON number"), 0 === e ? t = 1 / e == -1 / (r = n = 0) ? 1 : 0 : (t = e < 0, r = (e = Math.abs(e)) >= Math.pow(2, -1022) ? (n = (i = Math.min(Math.floor(Math.log(e) / Math.LN2), 1023)) + 1023, Math.round(e * Math.pow(2, 52 - i) - Math.pow(2, 52))) : (n = 0, Math.round(e / Math.pow(2, -1074))));
                for (var o = [], a = 52; a; --a) o.push(r % 2 ? 1 : 0), r = Math.floor(r / 2);
                for (a = 11; a; --a) o.push(n % 2 ? 1 : 0), n = Math.floor(n / 2);
                o.push(t ? 1 : 0), o.reverse();
                var s = o.join(""),
                    u = "";
                for (a = 0; a < 64; a += 8) {
                    var l = parseInt(s.substr(a, 8), 2).toString(16);
                    u += l = 1 === l.length ? "0" + l : l
                }
                return u.toLowerCase()
            }

            function Fe(e, t) {
                return "object" == typeof(t = setTimeout(e, t)) && t.unref && t.unref(), t
            }
            var qe = new RegExp("^-?(0*)\\d{1,10}$"),
                We = -2147483648,
                je = 2147483647,
                Ue = function(e) {
                    if (qe.test(e)) {
                        e = Number(e);
                        if (We <= e && e <= je) return e
                    }
                    return null
                },
                Be = function(e) {
                    try {
                        e()
                    } catch (t) {
                        setTimeout(function() {
                            var e = t.stack || "";
                            throw xe("Exception was thrown by user callback.", e), t
                        }, Math.floor(0))
                    }
                },
                Ve = (ze.prototype.getToken = function(n) {
                    var r = this;
                    return this.appCheck ? this.appCheck.getToken(n) : new Promise(function(e, t) {
                        setTimeout(function() {
                            r.appCheck ? r.getToken(n).then(e, t) : e(null)
                        }, 0)
                    })
                }, ze.prototype.addTokenChangeListener = function(t) {
                    var e;
                    null !== (e = this.appCheckProvider) && void 0 !== e && e.get().then(function(e) {
                        return e.addTokenListener(t)
                    })
                }, ze.prototype.notifyForInvalidToken = function() {
                    xe('Provided AppCheck credentials for the app named "' + this.appName_ + '" are invalid. This usually indicates your app was not initialized correctly.')
                }, ze);

            function ze(e, t) {
                var n = this;
                this.appName_ = e, this.appCheckProvider = t, this.appCheck = null == t ? void 0 : t.getImmediate({
                    optional: !0
                }), this.appCheck || null != t && t.get().then(function(e) {
                    return n.appCheck = e
                })
            }
            var He = (Qe.prototype.getToken = function(n) {
                var r = this;
                return this.auth_ ? this.auth_.getToken(n).catch(function(e) {
                    return e && "auth/token-not-initialized" === e.code ? (ke("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(e)
                }) : new Promise(function(e, t) {
                    setTimeout(function() {
                        r.auth_ ? r.getToken(n).then(e, t) : e(null)
                    }, 0)
                })
            }, Qe.prototype.addTokenChangeListener = function(t) {
                this.auth_ ? this.auth_.addAuthTokenListener(t) : this.authProvider_.get().then(function(e) {
                    return e.addAuthTokenListener(t)
                })
            }, Qe.prototype.removeTokenChangeListener = function(t) {
                this.authProvider_.get().then(function(e) {
                    return e.removeAuthTokenListener(t)
                })
            }, Qe.prototype.notifyForInvalidToken = function() {
                var e = 'Provided authentication credentials for the app named "' + this.appName_ + '" are invalid. This usually indicates your app was not initialized correctly. ';
                "credential" in this.firebaseOptions_ ? e += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.firebaseOptions_ ? e += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : e += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', xe(e)
            }, Qe);

            function Qe(e, t, n) {
                var r = this;
                this.appName_ = e, this.firebaseOptions_ = t, this.authProvider_ = n, this.auth_ = null, this.auth_ = n.getImmediate({
                    optional: !0
                }), this.auth_ || n.onInit(function(e) {
                    return r.auth_ = e
                })
            }
            var Ye = (Ke.prototype.getToken = function(e) {
                return Promise.resolve({
                    accessToken: this.accessToken
                })
            }, Ke.prototype.addTokenChangeListener = function(e) {
                e(this.accessToken)
            }, Ke.prototype.removeTokenChangeListener = function(e) {}, Ke.prototype.notifyForInvalidToken = function() {}, Ke.OWNER = "owner", Ke);

            function Ke(e) {
                this.accessToken = e
            }
            var Ge = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,
                $e = "websocket",
                Je = "long_polling",
                Xe = (Ze.prototype.isCacheableHost = function() {
                    return "s-" === this.internalHost.substr(0, 2)
                }, Ze.prototype.isCustomHost = function() {
                    return "firebaseio.com" !== this._domain && "firebaseio-demo.com" !== this._domain
                }, Object.defineProperty(Ze.prototype, "host", {
                    get: function() {
                        return this._host
                    },
                    set: function(e) {
                        e !== this.internalHost && (this.internalHost = e, this.isCacheableHost() && we.set("host:" + this._host, this.internalHost))
                    },
                    enumerable: !1,
                    configurable: !0
                }), Ze.prototype.toString = function() {
                    var e = this.toURLString();
                    return this.persistenceKey && (e += "<" + this.persistenceKey + ">"), e
                }, Ze.prototype.toURLString = function() {
                    var e = this.secure ? "https://" : "http://",
                        t = this.includeNamespaceInQueryParams ? "?ns=" + this.namespace : "";
                    return e + this.host + "/" + t
                }, Ze);

            function Ze(e, t, n, r, i, o, a) {
                void 0 === i && (i = !1), void 0 === o && (o = ""), void 0 === a && (a = !1), this.secure = t, this.namespace = n, this.webSocketOnly = r, this.nodeAdmin = i, this.persistenceKey = o, this.includeNamespaceInQueryParams = a, this._host = e.toLowerCase(), this._domain = this._host.substr(this._host.indexOf(".") + 1), this.internalHost = we.get("host:" + e) || this._host
            }

            function et(e, t, n) {
                var r;
                if (g("string" == typeof t, "typeof type must == string"), g("object" == typeof n, "typeof params must == object"), t === $e) r = (e.secure ? "wss://" : "ws://") + e.internalHost + "/.ws?";
                else {
                    if (t !== Je) throw new Error("Unknown connection type: " + t);
                    r = (e.secure ? "https://" : "http://") + e.internalHost + "/.lp?"
                }((t = e).host !== t.internalHost || t.isCustomHost() || t.includeNamespaceInQueryParams) && (n.ns = e.namespace);
                var i = [];
                return Le(n, function(e, t) {
                    i.push(e + "=" + t)
                }), r + i.join("&")
            }
            var tt = (nt.prototype.incrementCounter = function(e, t) {
                void 0 === t && (t = 1), O(this.counters_, e) || (this.counters_[e] = 0), this.counters_[e] += t
            }, nt.prototype.get = function() {
                return c(this.counters_)
            }, nt);

            function nt() {
                this.counters_ = {}
            }
            var rt = {},
                it = {};

            function ot(e) {
                e = e.toString();
                return rt[e] || (rt[e] = new tt), rt[e]
            }
            var at = (st.prototype.closeAfter = function(e, t) {
                this.closeAfterResponse = e, this.onClose = t, this.closeAfterResponse < this.currentResponseNum && (this.onClose(), this.onClose = null)
            }, st.prototype.handleResponse = function(e, t) {
                var n = this;
                this.pendingResponses[e] = t;
                for (var r = function() {
                        var t = i.pendingResponses[i.currentResponseNum];
                        delete i.pendingResponses[i.currentResponseNum];
                        for (var e = 0; e < t.length; ++e) ! function(e) {
                            t[e] && Be(function() {
                                n.onMessage_(t[e])
                            })
                        }(e);
                        if (i.currentResponseNum === i.closeAfterResponse) return i.onClose && (i.onClose(), i.onClose = null), "break";
                        i.currentResponseNum++
                    }, i = this; this.pendingResponses[this.currentResponseNum];)
                    if ("break" === r()) break
            }, st);

            function st(e) {
                this.onMessage_ = e, this.pendingResponses = [], this.currentResponseNum = 0, this.closeAfterResponse = -1, this.onClose = null
            }
            var ut = "pLPCommand",
                lt = "pRTLPCB",
                ht = (ct.prototype.open = function(e, t) {
                    var n, r, i, a = this;
                    this.curSegmentNum = 0, this.onDisconnect_ = t, this.myPacketOrderer = new at(e), this.isClosed_ = !1, this.connectTimeoutTimer_ = setTimeout(function() {
                        a.log_("Timed out trying to connect."), a.onClosed_(), a.connectTimeoutTimer_ = null
                    }, Math.floor(3e4)), n = function() {
                        var e;
                        a.isClosed_ || (a.scriptTagHolder = new pt(function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            var n = y(e, 5),
                                r = n[0],
                                i = n[1],
                                o = n[2];
                            if (n[3], n[4], a.incrementIncomingBytes_(e), a.scriptTagHolder)
                                if (a.connectTimeoutTimer_ && (clearTimeout(a.connectTimeoutTimer_), a.connectTimeoutTimer_ = null), a.everConnected_ = !0, "start" === r) a.id = i, a.password = o;
                                else {
                                    if ("close" !== r) throw new Error("Unrecognized command received: " + r);
                                    i ? (a.scriptTagHolder.sendNewPolls = !1, a.myPacketOrderer.closeAfter(i, function() {
                                        a.onClosed_()
                                    })) : a.onClosed_()
                                }
                        }, function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            var n = y(e, 2),
                                r = n[0],
                                n = n[1];
                            a.incrementIncomingBytes_(e), a.myPacketOrderer.handleResponse(r, n)
                        }, function() {
                            a.onClosed_()
                        }, a.urlFn), (e = {
                            start: "t"
                        }).ser = Math.floor(1e8 * Math.random()), a.scriptTagHolder.uniqueCallbackIdentifier && (e.cb = a.scriptTagHolder.uniqueCallbackIdentifier), e.v = "5", a.transportSessionId && (e.s = a.transportSessionId), a.lastSessionId && (e.ls = a.lastSessionId), a.applicationId && (e.p = a.applicationId), a.appCheckToken && (e.ac = a.appCheckToken), "undefined" != typeof location && location.hostname && Ge.test(location.hostname) && (e.r = "f"), e = a.urlFn(e), a.log_("Connecting via long-poll to " + e), a.scriptTagHolder.addTag(e, function() {}))
                    }, "complete" === document.readyState ? n() : (r = !1, i = function() {
                        document.body ? r || (r = !0, n()) : setTimeout(i, Math.floor(10))
                    }, document.addEventListener ? (document.addEventListener("DOMContentLoaded", i, !1), window.addEventListener("load", i, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", function() {
                        "complete" === document.readyState && i()
                    }), window.attachEvent("onload", i)))
                }, ct.prototype.start = function() {
                    this.scriptTagHolder.startLongPoll(this.id, this.password), this.addDisconnectPingFrame(this.id, this.password)
                }, ct.forceAllow = function() {
                    ct.forceAllow_ = !0
                }, ct.forceDisallow = function() {
                    ct.forceDisallow_ = !0
                }, ct.isAvailable = function() {
                    return !!ct.forceAllow_ || !(ct.forceDisallow_ || "undefined" == typeof document || null == document.createElement || "object" == typeof window && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href) || "object" == typeof Windows && "object" == typeof Windows.UI)
                }, ct.prototype.markConnectionHealthy = function() {}, ct.prototype.shutdown_ = function() {
                    this.isClosed_ = !0, this.scriptTagHolder && (this.scriptTagHolder.close(), this.scriptTagHolder = null), this.myDisconnFrame && (document.body.removeChild(this.myDisconnFrame), this.myDisconnFrame = null), this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null)
                }, ct.prototype.onClosed_ = function() {
                    this.isClosed_ || (this.log_("Longpoll is closing itself"), this.shutdown_(), this.onDisconnect_ && (this.onDisconnect_(this.everConnected_), this.onDisconnect_ = null))
                }, ct.prototype.close = function() {
                    this.isClosed_ || (this.log_("Longpoll is being closed."), this.shutdown_())
                }, ct.prototype.send = function(e) {
                    e = x(e);
                    this.bytesSent += e.length, this.stats_.incrementCounter("bytes_sent", e.length);
                    for (var e = function(e) {
                            e = o(e);
                            return h.encodeByteArray(e, !0)
                        }(e), t = ve(e, 1840), n = 0; n < t.length; n++) this.scriptTagHolder.enqueueSegment(this.curSegmentNum, t.length, t[n]), this.curSegmentNum++
                }, ct.prototype.addDisconnectPingFrame = function(e, t) {
                    this.myDisconnFrame = document.createElement("iframe");
                    var n = {
                        dframe: "t"
                    };
                    n.id = e, n.pw = t, this.myDisconnFrame.src = this.urlFn(n), this.myDisconnFrame.style.display = "none", document.body.appendChild(this.myDisconnFrame)
                }, ct.prototype.incrementIncomingBytes_ = function(e) {
                    e = x(e).length;
                    this.bytesReceived += e, this.stats_.incrementCounter("bytes_received", e)
                }, ct);

            function ct(e, t, n, r, i, o, a) {
                var s = this;
                this.connId = e, this.repoInfo = t, this.applicationId = n, this.appCheckToken = r, this.authToken = i, this.transportSessionId = o, this.lastSessionId = a, this.bytesSent = 0, this.bytesReceived = 0, this.everConnected_ = !1, this.log_ = Pe(e), this.stats_ = ot(t), this.urlFn = function(e) {
                    return s.appCheckToken && (e.ac = s.appCheckToken), et(t, Je, e)
                }
            }
            var pt = (dt.createIFrame_ = function() {
                var t = document.createElement("iframe");
                if (t.style.display = "none", !document.body) throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
                document.body.appendChild(t);
                try {
                    t.contentWindow.document || ke("No IE domain setting required")
                } catch (e) {
                    var n = document.domain;
                    t.src = "javascript:void((function(){document.open();document.domain='" + n + "';document.close();})())"
                }
                return t.contentDocument ? t.doc = t.contentDocument : t.contentWindow ? t.doc = t.contentWindow.document : t.document && (t.doc = t.document), t
            }, dt.prototype.close = function() {
                var e = this;
                this.alive = !1, this.myIFrame && (this.myIFrame.doc.body.innerHTML = "", setTimeout(function() {
                    null !== e.myIFrame && (document.body.removeChild(e.myIFrame), e.myIFrame = null)
                }, Math.floor(0)));
                var t = this.onDisconnect;
                t && (this.onDisconnect = null, t())
            }, dt.prototype.startLongPoll = function(e, t) {
                for (this.myID = e, this.myPW = t, this.alive = !0; this.newRequest_(););
            }, dt.prototype.newRequest_ = function() {
                if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (0 < this.pendingSegs.length ? 2 : 1)) {
                    this.currentSerial++;
                    var e = {};
                    e.id = this.myID, e.pw = this.myPW, e.ser = this.currentSerial;
                    for (var e = this.urlFn(e), t = "", n = 0; 0 < this.pendingSegs.length;) {
                        if (!(this.pendingSegs[0].d.length + 30 + t.length <= 1870)) break;
                        var r = this.pendingSegs.shift(),
                            t = t + "&seg" + n + "=" + r.seg + "&ts" + n + "=" + r.ts + "&d" + n + "=" + r.d;
                        n++
                    }
                    return this.addLongPollTag_(e += t, this.currentSerial), !0
                }
                return !1
            }, dt.prototype.enqueueSegment = function(e, t, n) {
                this.pendingSegs.push({
                    seg: e,
                    ts: t,
                    d: n
                }), this.alive && this.newRequest_()
            }, dt.prototype.addLongPollTag_ = function(e, t) {
                var n = this;
                this.outstandingRequests.add(t);

                function r() {
                    n.outstandingRequests.delete(t), n.newRequest_()
                }
                var i = setTimeout(r, Math.floor(25e3));
                this.addTag(e, function() {
                    clearTimeout(i), r()
                })
            }, dt.prototype.addTag = function(e, n) {
                var r = this;
                setTimeout(function() {
                    try {
                        if (!r.sendNewPolls) return;
                        var t = r.myIFrame.doc.createElement("script");
                        t.type = "text/javascript", t.async = !0, t.src = e, t.onload = t.onreadystatechange = function() {
                            var e = t.readyState;
                            e && "loaded" !== e && "complete" !== e || (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), n())
                        }, t.onerror = function() {
                            ke("Long-poll script failed to load: " + e), r.sendNewPolls = !1, r.close()
                        }, r.myIFrame.doc.body.appendChild(t)
                    } catch (e) {}
                }, Math.floor(1))
            }, dt);

            function dt(e, t, n, r) {
                this.onDisconnect = n, this.urlFn = r, this.outstandingRequests = new Set, this.pendingSegs = [], this.currentSerial = Math.floor(1e8 * Math.random()), this.sendNewPolls = !0, this.uniqueCallbackIdentifier = Te(), window[ut + this.uniqueCallbackIdentifier] = e, window[lt + this.uniqueCallbackIdentifier] = t, this.myIFrame = dt.createIFrame_();
                t = "", t = "<html><body>" + (t = this.myIFrame.src && "javascript:" === this.myIFrame.src.substr(0, "javascript:".length) ? '<script>document.domain="' + document.domain + '";<\/script>' : t) + "</body></html>";
                try {
                    this.myIFrame.doc.open(), this.myIFrame.doc.write(t), this.myIFrame.doc.close()
                } catch (e) {
                    ke("frame writing exception"), e.stack && ke(e.stack), ke(e)
                }
            }
            var ft = null;
            "undefined" != typeof MozWebSocket ? ft = MozWebSocket : "undefined" != typeof WebSocket && (ft = WebSocket);
            var _t = (yt.connectionURL_ = function(e, t, n, r) {
                var i = {
                    v: "5"
                };
                return "undefined" != typeof location && location.hostname && Ge.test(location.hostname) && (i.r = "f"), t && (i.s = t), n && (i.ls = n), r && (i.ac = r), et(e, $e, i)
            }, yt.prototype.open = function(e, t) {
                var n = this;
                this.onDisconnect = t, this.onMessage = e, this.log_("Websocket connecting to " + this.connURL), this.everConnected_ = !1, we.set("previous_websocket_failure", !0);
                try {
                    C() || (r = {
                        headers: {
                            "X-Firebase-GMPID": this.applicationId || "",
                            "X-Firebase-AppCheck": this.appCheckToken || ""
                        }
                    }, this.mySock = new ft(this.connURL, [], r))
                } catch (e) {
                    this.log_("Error instantiating WebSocket.");
                    var r = e.message || e.data;
                    return r && this.log_(r), void this.onClosed_()
                }
                this.mySock.onopen = function() {
                    n.log_("Websocket connected."), n.everConnected_ = !0
                }, this.mySock.onclose = function() {
                    n.log_("Websocket connection was disconnected."), n.mySock = null, n.onClosed_()
                }, this.mySock.onmessage = function(e) {
                    n.handleIncomingFrame(e)
                }, this.mySock.onerror = function(e) {
                    n.log_("WebSocket error.  Closing connection.");
                    e = e.message || e.data;
                    e && n.log_(e), n.onClosed_()
                }
            }, yt.prototype.start = function() {}, yt.forceDisallow = function() {
                yt.forceDisallow_ = !0
            }, yt.isAvailable = function() {
                var e, t = !1;
                return "undefined" != typeof navigator && navigator.userAgent && ((e = navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/)) && 1 < e.length && parseFloat(e[1]) < 4.4 && (t = !0)), !t && null !== ft && !yt.forceDisallow_
            }, yt.previouslyFailed = function() {
                return we.isInMemoryStorage || !0 === we.get("previous_websocket_failure")
            }, yt.prototype.markConnectionHealthy = function() {
                we.remove("previous_websocket_failure")
            }, yt.prototype.appendFrame_ = function(e) {
                this.frames.push(e), this.frames.length === this.totalFrames && (e = this.frames.join(""), this.frames = null, e = N(e), this.onMessage(e))
            }, yt.prototype.handleNewFrameCount_ = function(e) {
                this.totalFrames = e, this.frames = []
            }, yt.prototype.extractFrameCount_ = function(e) {
                if (g(null === this.frames, "We already have a frame buffer"), e.length <= 6) {
                    var t = Number(e);
                    if (!isNaN(t)) return this.handleNewFrameCount_(t), null
                }
                return this.handleNewFrameCount_(1), e
            }, yt.prototype.handleIncomingFrame = function(e) {
                null !== this.mySock && (e = e.data, this.bytesReceived += e.length, this.stats_.incrementCounter("bytes_received", e.length), this.resetKeepAlive(), null !== this.frames ? this.appendFrame_(e) : null !== (e = this.extractFrameCount_(e)) && this.appendFrame_(e))
            }, yt.prototype.send = function(e) {
                this.resetKeepAlive();
                e = x(e);
                this.bytesSent += e.length, this.stats_.incrementCounter("bytes_sent", e.length);
                var t = ve(e, 16384);
                1 < t.length && this.sendString_(String(t.length));
                for (var n = 0; n < t.length; n++) this.sendString_(t[n])
            }, yt.prototype.shutdown_ = function() {
                this.isClosed_ = !0, this.keepaliveTimer && (clearInterval(this.keepaliveTimer), this.keepaliveTimer = null), this.mySock && (this.mySock.close(), this.mySock = null)
            }, yt.prototype.onClosed_ = function() {
                this.isClosed_ || (this.log_("WebSocket is closing itself"), this.shutdown_(), this.onDisconnect && (this.onDisconnect(this.everConnected_), this.onDisconnect = null))
            }, yt.prototype.close = function() {
                this.isClosed_ || (this.log_("WebSocket is being closed"), this.shutdown_())
            }, yt.prototype.resetKeepAlive = function() {
                var e = this;
                clearInterval(this.keepaliveTimer), this.keepaliveTimer = setInterval(function() {
                    e.mySock && e.sendString_("0"), e.resetKeepAlive()
                }, Math.floor(45e3))
            }, yt.prototype.sendString_ = function(e) {
                try {
                    this.mySock.send(e)
                } catch (e) {
                    this.log_("Exception thrown from WebSocket.send():", e.message || e.data, "Closing connection."), setTimeout(this.onClosed_.bind(this), 0)
                }
            }, yt.responsesRequiredToBeHealthy = 2, yt.healthyTimeout = 3e4, yt);

            function yt(e, t, n, r, i, o, a) {
                this.connId = e, this.applicationId = n, this.appCheckToken = r, this.authToken = i, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.log_ = Pe(this.connId), this.stats_ = ot(t), this.connURL = yt.connectionURL_(t, o, a, r), this.nodeAdmin = t.nodeAdmin
            }
            var vt = (Object.defineProperty(gt, "ALL_TRANSPORTS", {
                get: function() {
                    return [ht, _t]
                },
                enumerable: !1,
                configurable: !0
            }), gt.prototype.initTransports_ = function(e) {
                var t, n, r = _t && _t.isAvailable(),
                    i = r && !_t.previouslyFailed();
                if (e.webSocketOnly && (r || xe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), i = !0), i) this.transports_ = [_t];
                else {
                    var o = this.transports_ = [];
                    try {
                        for (var a = _(gt.ALL_TRANSPORTS), s = a.next(); !s.done; s = a.next()) {
                            var u = s.value;
                            u && u.isAvailable() && o.push(u)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            s && !s.done && (n = a.return) && n.call(a)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                }
            }, gt.prototype.initialTransport = function() {
                if (0 < this.transports_.length) return this.transports_[0];
                throw new Error("No transports available")
            }, gt.prototype.upgradeTransport = function() {
                return 1 < this.transports_.length ? this.transports_[1] : null
            }, gt);

            function gt(e) {
                this.initTransports_(e)
            }
            var mt = (wt.prototype.start_ = function() {
                var e = this,
                    t = this.transportManager_.initialTransport();
                this.conn_ = new t(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, null, this.lastSessionId), this.primaryResponsesRequired_ = t.responsesRequiredToBeHealthy || 0;
                var n = this.connReceiver_(this.conn_),
                    r = this.disconnReceiver_(this.conn_);
                this.tx_ = this.conn_, this.rx_ = this.conn_, this.secondaryConn_ = null, this.isHealthy_ = !1, setTimeout(function() {
                    e.conn_ && e.conn_.open(n, r)
                }, Math.floor(0));
                t = t.healthyTimeout || 0;
                0 < t && (this.healthyTimeout_ = Fe(function() {
                    e.healthyTimeout_ = null, e.isHealthy_ || (e.conn_ && 102400 < e.conn_.bytesReceived ? (e.log_("Connection exceeded healthy timeout but has received " + e.conn_.bytesReceived + " bytes.  Marking connection healthy."), e.isHealthy_ = !0, e.conn_.markConnectionHealthy()) : e.conn_ && 10240 < e.conn_.bytesSent ? e.log_("Connection exceeded healthy timeout but has sent " + e.conn_.bytesSent + " bytes.  Leaving connection alive.") : (e.log_("Closing unhealthy connection after timeout."), e.close()))
                }, Math.floor(t)))
            }, wt.prototype.nextTransportId_ = function() {
                return "c:" + this.id + ":" + this.connectionCount++
            }, wt.prototype.disconnReceiver_ = function(t) {
                var n = this;
                return function(e) {
                    t === n.conn_ ? n.onConnectionLost_(e) : t === n.secondaryConn_ ? (n.log_("Secondary connection lost."), n.onSecondaryConnectionLost_()) : n.log_("closing an old connection")
                }
            }, wt.prototype.connReceiver_ = function(t) {
                var n = this;
                return function(e) {
                    2 !== n.state_ && (t === n.rx_ ? n.onPrimaryMessageReceived_(e) : t === n.secondaryConn_ ? n.onSecondaryMessageReceived_(e) : n.log_("message on old connection"))
                }
            }, wt.prototype.sendRequest = function(e) {
                this.sendData_({
                    t: "d",
                    d: e
                })
            }, wt.prototype.tryCleanupConnection = function() {
                this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_ && (this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId), this.conn_ = this.secondaryConn_, this.secondaryConn_ = null)
            }, wt.prototype.onSecondaryControl_ = function(e) {
                "t" in e && ("a" === (e = e.t) ? this.upgradeIfSecondaryHealthy_() : "r" === e ? (this.log_("Got a reset on secondary, closing it"), this.secondaryConn_.close(), this.tx_ !== this.secondaryConn_ && this.rx_ !== this.secondaryConn_ || this.close()) : "o" === e && (this.log_("got pong on secondary."), this.secondaryResponsesRequired_--, this.upgradeIfSecondaryHealthy_()))
            }, wt.prototype.onSecondaryMessageReceived_ = function(e) {
                var t = ye("t", e),
                    e = ye("d", e);
                if ("c" === t) this.onSecondaryControl_(e);
                else {
                    if ("d" !== t) throw new Error("Unknown protocol layer: " + t);
                    this.pendingDataMessages.push(e)
                }
            }, wt.prototype.upgradeIfSecondaryHealthy_ = function() {
                this.secondaryResponsesRequired_ <= 0 ? (this.log_("Secondary connection is healthy."), this.isHealthy_ = !0, this.secondaryConn_.markConnectionHealthy(), this.proceedWithUpgrade_()) : (this.log_("sending ping on secondary."), this.secondaryConn_.send({
                    t: "c",
                    d: {
                        t: "p",
                        d: {}
                    }
                }))
            }, wt.prototype.proceedWithUpgrade_ = function() {
                this.secondaryConn_.start(), this.log_("sending client ack on secondary"), this.secondaryConn_.send({
                    t: "c",
                    d: {
                        t: "a",
                        d: {}
                    }
                }), this.log_("Ending transmission on primary"), this.conn_.send({
                    t: "c",
                    d: {
                        t: "n",
                        d: {}
                    }
                }), this.tx_ = this.secondaryConn_, this.tryCleanupConnection()
            }, wt.prototype.onPrimaryMessageReceived_ = function(e) {
                var t = ye("t", e),
                    e = ye("d", e);
                "c" === t ? this.onControl_(e) : "d" === t && this.onDataMessage_(e)
            }, wt.prototype.onDataMessage_ = function(e) {
                this.onPrimaryResponse_(), this.onMessage_(e)
            }, wt.prototype.onPrimaryResponse_ = function() {
                this.isHealthy_ || (this.primaryResponsesRequired_--, this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()))
            }, wt.prototype.onControl_ = function(e) {
                var t = ye("t", e);
                if ("d" in e) {
                    e = e.d;
                    if ("h" === t) this.onHandshake_(e);
                    else if ("n" === t) {
                        this.log_("recvd end transmission on primary"), this.rx_ = this.secondaryConn_;
                        for (var n = 0; n < this.pendingDataMessages.length; ++n) this.onDataMessage_(this.pendingDataMessages[n]);
                        this.pendingDataMessages = [], this.tryCleanupConnection()
                    } else "s" === t ? this.onConnectionShutdown_(e) : "r" === t ? this.onReset_(e) : "e" === t ? de("Server Error: " + e) : "o" === t ? (this.log_("got pong on primary."), this.onPrimaryResponse_(), this.sendPingOnPrimaryIfNecessary_()) : de("Unknown control packet command: " + t)
                }
            }, wt.prototype.onHandshake_ = function(e) {
                var t = e.ts,
                    n = e.v,
                    r = e.h;
                this.sessionId = e.s, this.repoInfo_.host = r, 0 === this.state_ && (this.conn_.start(), this.onConnectionEstablished_(this.conn_, t), "5" !== n && xe("Protocol version mismatch detected"), this.tryStartUpgrade_())
            }, wt.prototype.tryStartUpgrade_ = function() {
                var e = this.transportManager_.upgradeTransport();
                e && this.startUpgrade_(e)
            }, wt.prototype.startUpgrade_ = function(e) {
                var t = this;
                this.secondaryConn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, this.sessionId), this.secondaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
                var n = this.connReceiver_(this.secondaryConn_),
                    e = this.disconnReceiver_(this.secondaryConn_);
                this.secondaryConn_.open(n, e), Fe(function() {
                    t.secondaryConn_ && (t.log_("Timed out trying to upgrade."), t.secondaryConn_.close())
                }, Math.floor(6e4))
            }, wt.prototype.onReset_ = function(e) {
                this.log_("Reset packet received.  New host: " + e), this.repoInfo_.host = e, 1 === this.state_ ? this.close() : (this.closeConnections_(), this.start_())
            }, wt.prototype.onConnectionEstablished_ = function(e, t) {
                var n = this;
                this.log_("Realtime connection established."), this.conn_ = e, this.state_ = 1, this.onReady_ && (this.onReady_(t, this.sessionId), this.onReady_ = null), 0 === this.primaryResponsesRequired_ ? (this.log_("Primary connection is healthy."), this.isHealthy_ = !0) : Fe(function() {
                    n.sendPingOnPrimaryIfNecessary_()
                }, Math.floor(5e3))
            }, wt.prototype.sendPingOnPrimaryIfNecessary_ = function() {
                this.isHealthy_ || 1 !== this.state_ || (this.log_("sending ping on primary."), this.sendData_({
                    t: "c",
                    d: {
                        t: "p",
                        d: {}
                    }
                }))
            }, wt.prototype.onSecondaryConnectionLost_ = function() {
                var e = this.secondaryConn_;
                this.secondaryConn_ = null, this.tx_ !== e && this.rx_ !== e || this.close()
            }, wt.prototype.onConnectionLost_ = function(e) {
                this.conn_ = null, e || 0 !== this.state_ ? 1 === this.state_ && this.log_("Realtime connection lost.") : (this.log_("Realtime connection failed."), this.repoInfo_.isCacheableHost() && (we.remove("host:" + this.repoInfo_.host), this.repoInfo_.internalHost = this.repoInfo_.host)), this.close()
            }, wt.prototype.onConnectionShutdown_ = function(e) {
                this.log_("Connection shutdown command received. Shutting down..."), this.onKill_ && (this.onKill_(e), this.onKill_ = null), this.onDisconnect_ = null, this.close()
            }, wt.prototype.sendData_ = function(e) {
                if (1 !== this.state_) throw "Connection is not connected";
                this.tx_.send(e)
            }, wt.prototype.close = function() {
                2 !== this.state_ && (this.log_("Closing realtime connection."), this.state_ = 2, this.closeConnections_(), this.onDisconnect_ && (this.onDisconnect_(), this.onDisconnect_ = null))
            }, wt.prototype.closeConnections_ = function() {
                this.log_("Shutting down all connections"), this.conn_ && (this.conn_.close(), this.conn_ = null), this.secondaryConn_ && (this.secondaryConn_.close(), this.secondaryConn_ = null), this.healthyTimeout_ && (clearTimeout(this.healthyTimeout_), this.healthyTimeout_ = null)
            }, wt);

            function wt(e, t, n, r, i, o, a, s, u, l) {
                this.id = e, this.repoInfo_ = t, this.applicationId_ = n, this.appCheckToken_ = r, this.authToken_ = i, this.onMessage_ = o, this.onReady_ = a, this.onDisconnect_ = s, this.onKill_ = u, this.lastSessionId = l, this.connectionCount = 0, this.pendingDataMessages = [], this.state_ = 0, this.log_ = Pe("c:" + this.id + ":"), this.transportManager_ = new vt(t), this.log_("Connection created"), this.start_()
            }
            var Ct = (bt.prototype.put = function(e, t, n, r) {}, bt.prototype.merge = function(e, t, n, r) {}, bt.prototype.refreshAuthToken = function(e) {}, bt.prototype.refreshAppCheckToken = function(e) {}, bt.prototype.onDisconnectPut = function(e, t, n) {}, bt.prototype.onDisconnectMerge = function(e, t, n) {}, bt.prototype.onDisconnectCancel = function(e, t) {}, bt.prototype.reportStats = function(e) {}, bt);

            function bt() {}
            var Tt = (Et.prototype.trigger = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                if (Array.isArray(this.listeners_[e]))
                    for (var r = a([], y(this.listeners_[e])), i = 0; i < r.length; i++) r[i].callback.apply(r[i].context, t)
            }, Et.prototype.on = function(e, t, n) {
                this.validateEventType_(e), this.listeners_[e] = this.listeners_[e] || [], this.listeners_[e].push({
                    callback: t,
                    context: n
                });
                e = this.getInitialEvent(e);
                e && t.apply(n, e)
            }, Et.prototype.off = function(e, t, n) {
                this.validateEventType_(e);
                for (var r = this.listeners_[e] || [], i = 0; i < r.length; i++)
                    if (r[i].callback === t && (!n || n === r[i].context)) return void r.splice(i, 1)
            }, Et.prototype.validateEventType_ = function(t) {
                g(this.allowedEvents_.find(function(e) {
                    return e === t
                }), "Unknown event: " + t)
            }, Et);

            function Et(e) {
                this.allowedEvents_ = e, this.listeners_ = {}, g(Array.isArray(e) && 0 < e.length, "Requires a non-empty array")
            }
            var It, St = (n(kt, It = Tt), kt.getInstance = function() {
                return new kt
            }, kt.prototype.getInitialEvent = function(e) {
                return g("online" === e, "Unknown event type: " + e), [this.online_]
            }, kt.prototype.currentlyOnline = function() {
                return this.online_
            }, kt);

            function kt() {
                var e = It.call(this, ["online"]) || this;
                return e.online_ = !0, "undefined" == typeof window || void 0 === window.addEventListener || w() || (window.addEventListener("online", function() {
                    e.online_ || (e.online_ = !0, e.trigger("online", !0))
                }, !1), window.addEventListener("offline", function() {
                    e.online_ && (e.online_ = !1, e.trigger("online", !1))
                }, !1)), e
            }
            var Pt = 32,
                Nt = 768,
                xt = (Rt.prototype.toString = function() {
                    for (var e = "", t = this.pieceNum_; t < this.pieces_.length; t++) "" !== this.pieces_[t] && (e += "/" + this.pieces_[t]);
                    return e || "/"
                }, Rt);

            function Rt(e, t) {
                if (void 0 === t) {
                    this.pieces_ = e.split("/");
                    for (var n = 0, r = 0; r < this.pieces_.length; r++) 0 < this.pieces_[r].length && (this.pieces_[n] = this.pieces_[r], n++);
                    this.pieces_.length = n, this.pieceNum_ = 0
                } else this.pieces_ = e, this.pieceNum_ = t
            }

            function Ot() {
                return new xt("")
            }

            function Dt(e) {
                return e.pieceNum_ >= e.pieces_.length ? null : e.pieces_[e.pieceNum_]
            }

            function At(e) {
                return e.pieces_.length - e.pieceNum_
            }

            function Lt(e) {
                var t = e.pieceNum_;
                return t < e.pieces_.length && t++, new xt(e.pieces_, t)
            }

            function Mt(e) {
                return e.pieceNum_ < e.pieces_.length ? e.pieces_[e.pieces_.length - 1] : null
            }

            function Ft(e, t) {
                return e.pieces_.slice(e.pieceNum_ + (t = void 0 === t ? 0 : t))
            }

            function qt(e) {
                if (e.pieceNum_ >= e.pieces_.length) return null;
                for (var t = [], n = e.pieceNum_; n < e.pieces_.length - 1; n++) t.push(e.pieces_[n]);
                return new xt(t, 0)
            }

            function Wt(e, t) {
                for (var n = [], r = e.pieceNum_; r < e.pieces_.length; r++) n.push(e.pieces_[r]);
                if (t instanceof xt)
                    for (r = t.pieceNum_; r < t.pieces_.length; r++) n.push(t.pieces_[r]);
                else
                    for (var i = t.split("/"), r = 0; r < i.length; r++) 0 < i[r].length && n.push(i[r]);
                return new xt(n, 0)
            }

            function jt(e) {
                return e.pieceNum_ >= e.pieces_.length
            }

            function Ut(e, t) {
                var n = Dt(e),
                    r = Dt(t);
                if (null === n) return t;
                if (n === r) return Ut(Lt(e), Lt(t));
                throw new Error("INTERNAL ERROR: innerPath (" + t + ") is not within outerPath (" + e + ")")
            }

            function Bt(e, t) {
                for (var n = Ft(e, 0), r = Ft(t, 0), i = 0; i < n.length && i < r.length; i++) {
                    var o = De(n[i], r[i]);
                    if (0 !== o) return o
                }
                return n.length === r.length ? 0 : n.length < r.length ? -1 : 1
            }

            function Vt(e, t) {
                if (At(e) !== At(t)) return !1;
                for (var n = e.pieceNum_, r = t.pieceNum_; n <= e.pieces_.length; n++, r++)
                    if (e.pieces_[n] !== t.pieces_[r]) return !1;
                return !0
            }

            function zt(e, t) {
                var n = e.pieceNum_,
                    r = t.pieceNum_;
                if (At(e) > At(t)) return !1;
                for (; n < e.pieces_.length;) {
                    if (e.pieces_[n] !== t.pieces_[r]) return !1;
                    ++n, ++r
                }
                return !0
            }
            var Ht = function(e, t) {
                this.errorPrefix_ = t, this.parts_ = Ft(e, 0), this.byteLength_ = Math.max(1, this.parts_.length);
                for (var n = 0; n < this.parts_.length; n++) this.byteLength_ += V(this.parts_[n]);
                Qt(this)
            };

            function Qt(e) {
                if (e.byteLength_ > Nt) throw new Error(e.errorPrefix_ + "has a key path longer than " + Nt + " bytes (" + e.byteLength_ + ").");
                if (e.parts_.length > Pt) throw new Error(e.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + Pt + ") or object contains a cycle " + Yt(e))
            }

            function Yt(e) {
                return 0 === e.parts_.length ? "" : "in property '" + e.parts_.join(".") + "'"
            }
            var Kt, Gt = (n($t, Kt = Tt), $t.getInstance = function() {
                return new $t
            }, $t.prototype.getInitialEvent = function(e) {
                return g("visible" === e, "Unknown event type: " + e), [this.visible_]
            }, $t);

            function $t() {
                var t, e, n = Kt.call(this, ["visible"]) || this;
                return "undefined" != typeof document && void 0 !== document.addEventListener && (void 0 !== document.hidden ? (e = "visibilitychange", t = "hidden") : void 0 !== document.mozHidden ? (e = "mozvisibilitychange", t = "mozHidden") : void 0 !== document.msHidden ? (e = "msvisibilitychange", t = "msHidden") : void 0 !== document.webkitHidden && (e = "webkitvisibilitychange", t = "webkitHidden")), n.visible_ = !0, e && document.addEventListener(e, function() {
                    var e = !document[t];
                    e !== n.visible_ && (n.visible_ = e, n.trigger("visible", e))
                }, !1), n
            }
            var Jt, Xt = 1e3,
                Zt = 3e5,
                en = (n(tn, Jt = Ct), tn.prototype.sendRequest = function(e, t, n) {
                    var r = ++this.requestNumber_,
                        t = {
                            r: r,
                            a: e,
                            b: t
                        };
                    this.log_(x(t)), g(this.connected_, "sendRequest call when we're not connected not allowed."), this.realtime_.sendRequest(t), n && (this.requestCBHash_[r] = n)
                }, tn.prototype.get = function(e) {
                    var n = this;
                    this.initConnection_();
                    var r = new f,
                        i = {
                            p: e._path.toString(),
                            q: e._queryObject
                        },
                        t = {
                            action: "g",
                            request: i,
                            onComplete: function(e) {
                                var t = e.d;
                                "ok" === e.s ? (n.onDataUpdate_(i.p, t, !1, null), r.resolve(t)) : r.reject(t)
                            }
                        };
                    this.outstandingGets_.push(t), this.outstandingGetCount_++;
                    var o = this.outstandingGets_.length - 1;
                    return this.connected_ || setTimeout(function() {
                        var e = n.outstandingGets_[o];
                        void 0 !== e && t === e && (delete n.outstandingGets_[o], n.outstandingGetCount_--, 0 === n.outstandingGetCount_ && (n.outstandingGets_ = []), n.log_("get " + o + " timed out on connection"), r.reject(new Error("Client is offline.")))
                    }, 3e3), this.connected_ && this.sendGet_(o), r.promise
                }, tn.prototype.listen = function(e, t, n, r) {
                    this.initConnection_();
                    var i = e._queryIdentifier,
                        o = e._path.toString();
                    this.log_("Listen called for " + o + " " + i), this.listens.has(o) || this.listens.set(o, new Map), g(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "listen() called for non-default but complete query"), g(!this.listens.get(o).has(i), "listen() called twice for same path/queryId.");
                    n = {
                        onComplete: r,
                        hashFn: t,
                        query: e,
                        tag: n
                    };
                    this.listens.get(o).set(i, n), this.connected_ && this.sendListen_(n)
                }, tn.prototype.sendGet_ = function(t) {
                    var n = this,
                        r = this.outstandingGets_[t];
                    this.sendRequest("g", r.request, function(e) {
                        delete n.outstandingGets_[t], n.outstandingGetCount_--, 0 === n.outstandingGetCount_ && (n.outstandingGets_ = []), r.onComplete && r.onComplete(e)
                    })
                }, tn.prototype.sendListen_ = function(r) {
                    var i = this,
                        o = r.query,
                        a = o._path.toString(),
                        s = o._queryIdentifier;
                    this.log_("Listen on " + a + " for " + s);
                    var e = {
                        p: a
                    };
                    r.tag && (e.q = o._queryObject, e.t = r.tag), e.h = r.hashFn(), this.sendRequest("q", e, function(e) {
                        var t = e.d,
                            n = e.s;
                        tn.warnOnListenWarnings_(t, o), (i.listens.get(a) && i.listens.get(a).get(s)) === r && (i.log_("listen response", e), "ok" !== n && i.removeListen_(a, s), r.onComplete && r.onComplete(n, t))
                    })
                }, tn.warnOnListenWarnings_ = function(e, t) {
                    e && "object" == typeof e && O(e, "w") && (e = D(e, "w"), Array.isArray(e) && ~e.indexOf("no_index") && (e = '".indexOn": "' + t._queryParams.getIndex().toString() + '"', t = t._path.toString(), xe("Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding " + e + " at " + t + " to your security rules for better performance.")))
                }, tn.prototype.refreshAuthToken = function(e) {
                    this.authToken_ = e, this.log_("Auth token refreshed"), this.authToken_ ? this.tryAuth() : this.connected_ && this.sendRequest("unauth", {}, function() {}), this.reduceReconnectDelayIfAdminCredential_(e)
                }, tn.prototype.reduceReconnectDelayIfAdminCredential_ = function(e) {
                    (e && 40 === e.length || function(e) {
                        e = R(e).claims;
                        return "object" == typeof e && !0 === e.admin
                    }(e)) && (this.log_("Admin auth credential detected.  Reducing max reconnect time."), this.maxReconnectDelay_ = 3e4)
                }, tn.prototype.refreshAppCheckToken = function(e) {
                    this.appCheckToken_ = e, this.log_("App check token refreshed"), this.appCheckToken_ ? this.tryAppCheck() : this.connected_ && this.sendRequest("unappeck", {}, function() {})
                }, tn.prototype.tryAuth = function() {
                    var n, e, t, r = this;
                    this.connected_ && this.authToken_ && (e = function(e) {
                        e = R(e).claims;
                        return !!e && "object" == typeof e && e.hasOwnProperty("iat")
                    }(n = this.authToken_) ? "auth" : "gauth", t = {
                        cred: n
                    }, null === this.authOverride_ ? t.noauth = !0 : "object" == typeof this.authOverride_ && (t.authvar = this.authOverride_), this.sendRequest(e, t, function(e) {
                        var t = e.s,
                            e = e.d || "error";
                        r.authToken_ === n && ("ok" === t ? r.invalidAuthTokenCount_ = 0 : r.onAuthRevoked_(t, e))
                    }))
                }, tn.prototype.tryAppCheck = function() {
                    var n = this;
                    this.connected_ && this.appCheckToken_ && this.sendRequest("appcheck", {
                        token: this.appCheckToken_
                    }, function(e) {
                        var t = e.s,
                            e = e.d || "error";
                        "ok" === t ? n.invalidAppCheckTokenCount_ = 0 : n.onAppCheckRevoked_(t, e)
                    })
                }, tn.prototype.unlisten = function(e, t) {
                    var n = e._path.toString(),
                        r = e._queryIdentifier;
                    this.log_("Unlisten called for " + n + " " + r), g(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "unlisten() called for non-default but complete query"), this.removeListen_(n, r) && this.connected_ && this.sendUnlisten_(n, r, e._queryObject, t)
                }, tn.prototype.sendUnlisten_ = function(e, t, n, r) {
                    this.log_("Unlisten on " + e + " for " + t);
                    e = {
                        p: e
                    };
                    r && (e.q = n, e.t = r), this.sendRequest("n", e)
                }, tn.prototype.onDisconnectPut = function(e, t, n) {
                    this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("o", e, t, n) : this.onDisconnectRequestQueue_.push({
                        pathString: e,
                        action: "o",
                        data: t,
                        onComplete: n
                    })
                }, tn.prototype.onDisconnectMerge = function(e, t, n) {
                    this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("om", e, t, n) : this.onDisconnectRequestQueue_.push({
                        pathString: e,
                        action: "om",
                        data: t,
                        onComplete: n
                    })
                }, tn.prototype.onDisconnectCancel = function(e, t) {
                    this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("oc", e, null, t) : this.onDisconnectRequestQueue_.push({
                        pathString: e,
                        action: "oc",
                        data: null,
                        onComplete: t
                    })
                }, tn.prototype.sendOnDisconnect_ = function(e, t, n, r) {
                    n = {
                        p: t,
                        d: n
                    };
                    this.log_("onDisconnect " + e, n), this.sendRequest(e, n, function(e) {
                        r && setTimeout(function() {
                            r(e.s, e.d)
                        }, Math.floor(0))
                    })
                }, tn.prototype.put = function(e, t, n, r) {
                    this.putInternal("p", e, t, n, r)
                }, tn.prototype.merge = function(e, t, n, r) {
                    this.putInternal("m", e, t, n, r)
                }, tn.prototype.putInternal = function(e, t, n, r, i) {
                    this.initConnection_();
                    n = {
                        p: t,
                        d: n
                    };
                    void 0 !== i && (n.h = i), this.outstandingPuts_.push({
                        action: e,
                        request: n,
                        onComplete: r
                    }), this.outstandingPutCount_++;
                    r = this.outstandingPuts_.length - 1;
                    this.connected_ ? this.sendPut_(r) : this.log_("Buffering put: " + t)
                }, tn.prototype.sendPut_ = function(t) {
                    var n = this,
                        r = this.outstandingPuts_[t].action,
                        e = this.outstandingPuts_[t].request,
                        i = this.outstandingPuts_[t].onComplete;
                    this.outstandingPuts_[t].queued = this.connected_, this.sendRequest(r, e, function(e) {
                        n.log_(r + " response", e), delete n.outstandingPuts_[t], n.outstandingPutCount_--, 0 === n.outstandingPutCount_ && (n.outstandingPuts_ = []), i && i(e.s, e.d)
                    })
                }, tn.prototype.reportStats = function(e) {
                    var t = this;
                    this.connected_ && (this.log_("reportStats", e = {
                        c: e
                    }), this.sendRequest("s", e, function(e) {
                        "ok" !== e.s && (e = e.d, t.log_("reportStats", "Error sending stats: " + e))
                    }))
                }, tn.prototype.onDataMessage_ = function(e) {
                    if ("r" in e) {
                        this.log_("from server: " + x(e));
                        var t = e.r,
                            n = this.requestCBHash_[t];
                        n && (delete this.requestCBHash_[t], n(e.b))
                    } else {
                        if ("error" in e) throw "A server-side error has occurred: " + e.error;
                        "a" in e && this.onDataPush_(e.a, e.b)
                    }
                }, tn.prototype.onDataPush_ = function(e, t) {
                    this.log_("handleServerMessage", e, t), "d" === e ? this.onDataUpdate_(t.p, t.d, !1, t.t) : "m" === e ? this.onDataUpdate_(t.p, t.d, !0, t.t) : "c" === e ? this.onListenRevoked_(t.p, t.q) : "ac" === e ? this.onAuthRevoked_(t.s, t.d) : "apc" === e ? this.onAppCheckRevoked_(t.s, t.d) : "sd" === e ? this.onSecurityDebugPacket_(t) : de("Unrecognized action received from server: " + x(e) + "\nAre you using the latest client?")
                }, tn.prototype.onReady_ = function(e, t) {
                    this.log_("connection ready"), this.connected_ = !0, this.lastConnectionEstablishedTime_ = (new Date).getTime(), this.handleTimestamp_(e), this.lastSessionId = t, this.firstConnection_ && this.sendConnectStats_(), this.restoreState_(), this.firstConnection_ = !1, this.onConnectStatus_(!0)
                }, tn.prototype.scheduleConnect_ = function(e) {
                    var t = this;
                    g(!this.realtime_, "Scheduling a connect when we're already connected/ing?"), this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = setTimeout(function() {
                        t.establishConnectionTimer_ = null, t.establishConnection_()
                    }, Math.floor(e))
                }, tn.prototype.initConnection_ = function() {
                    !this.realtime_ && this.firstConnection_ && this.scheduleConnect_(0)
                }, tn.prototype.onVisible_ = function(e) {
                    e && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."), this.reconnectDelay_ = Xt, this.realtime_ || this.scheduleConnect_(0)), this.visible_ = e
                }, tn.prototype.onOnline_ = function(e) {
                    e ? (this.log_("Browser went online."), this.reconnectDelay_ = Xt, this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."), this.realtime_ && this.realtime_.close())
                }, tn.prototype.onRealtimeDisconnect_ = function() {
                    var e;
                    this.log_("data client disconnected"), this.connected_ = !1, this.realtime_ = null, this.cancelSentTransactions_(), this.requestCBHash_ = {}, this.shouldReconnect_() && (this.visible_ ? this.lastConnectionEstablishedTime_ && (3e4 < (new Date).getTime() - this.lastConnectionEstablishedTime_ && (this.reconnectDelay_ = Xt), this.lastConnectionEstablishedTime_ = null) : (this.log_("Window isn't visible.  Delaying reconnect."), this.reconnectDelay_ = this.maxReconnectDelay_, this.lastConnectionAttemptTime_ = (new Date).getTime()), e = (new Date).getTime() - this.lastConnectionAttemptTime_, e = Math.max(0, this.reconnectDelay_ - e), e = Math.random() * e, this.log_("Trying to reconnect in " + e + "ms"), this.scheduleConnect_(e), this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, 1.3 * this.reconnectDelay_)), this.onConnectStatus_(!1)
                }, tn.prototype.establishConnection_ = function() {
                    return i(this, void 0, void 0, function() {
                        var t, n, r, i, o, a, s, u, l, h, c = this;
                        return p(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    if (!this.shouldReconnect_()) return [3, 4];
                                    this.log_("Making a connection attempt"), this.lastConnectionAttemptTime_ = (new Date).getTime(), this.lastConnectionEstablishedTime_ = null, t = this.onDataMessage_.bind(this), n = this.onReady_.bind(this), r = this.onRealtimeDisconnect_.bind(this), i = this.id + ":" + tn.nextConnectionId_++, h = this.lastSessionId, o = !1, a = null, s = function() {
                                        a ? a.close() : (o = !0, r())
                                    }, l = function(e) {
                                        g(a, "sendRequest call when we're not connected not allowed."), a.sendRequest(e)
                                    }, this.realtime_ = {
                                        close: s,
                                        sendRequest: l
                                    }, u = this.forceTokenRefresh_, this.forceTokenRefresh_ = !1, e.label = 1;
                                case 1:
                                    return e.trys.push([1, 3, , 4]), [4, Promise.all([this.authTokenProvider_.getToken(u), this.appCheckTokenProvider_.getToken(u)])];
                                case 2:
                                    return l = y.apply(void 0, [e.sent(), 2]), u = l[0], l = l[1], o ? ke("getToken() completed but was canceled") : (ke("getToken() completed. Creating connection."), this.authToken_ = u && u.accessToken, this.appCheckToken_ = l && l.token, a = new mt(i, this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, t, n, r, function(e) {
                                        xe(e + " (" + c.repoInfo_.toString() + ")"), c.interrupt("server_kill")
                                    }, h)), [3, 4];
                                case 3:
                                    return h = e.sent(), this.log_("Failed to get token: " + h), o || (this.repoInfo_.nodeAdmin && xe(h), s()), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, tn.prototype.interrupt = function(e) {
                    ke("Interrupting connection for reason: " + e), this.interruptReasons_[e] = !0, this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = null), this.connected_ && this.onRealtimeDisconnect_())
                }, tn.prototype.resume = function(e) {
                    ke("Resuming connection for reason: " + e), delete this.interruptReasons_[e], A(this.interruptReasons_) && (this.reconnectDelay_ = Xt, this.realtime_ || this.scheduleConnect_(0))
                }, tn.prototype.handleTimestamp_ = function(e) {
                    e -= (new Date).getTime();
                    this.onServerInfoUpdate_({
                        serverTimeOffset: e
                    })
                }, tn.prototype.cancelSentTransactions_ = function() {
                    for (var e = 0; e < this.outstandingPuts_.length; e++) {
                        var t = this.outstandingPuts_[e];
                        t && "h" in t.request && t.queued && (t.onComplete && t.onComplete("disconnect"), delete this.outstandingPuts_[e], this.outstandingPutCount_--)
                    }
                    0 === this.outstandingPutCount_ && (this.outstandingPuts_ = [])
                }, tn.prototype.onListenRevoked_ = function(e, t) {
                    t = t ? t.map(function(e) {
                        return Ae(e)
                    }).join("$") : "default", t = this.removeListen_(e, t);
                    t && t.onComplete && t.onComplete("permission_denied")
                }, tn.prototype.removeListen_ = function(e, t) {
                    var n, r = new xt(e).toString();
                    return this.listens.has(r) ? (n = (e = this.listens.get(r)).get(t), e.delete(t), 0 === e.size && this.listens.delete(r)) : n = void 0, n
                }, tn.prototype.onAuthRevoked_ = function(e, t) {
                    ke("Auth token revoked: " + e + "/" + t), this.authToken_ = null, this.forceTokenRefresh_ = !0, this.realtime_.close(), "invalid_token" !== e && "permission_denied" !== e || (this.invalidAuthTokenCount_++, 3 <= this.invalidAuthTokenCount_ && (this.reconnectDelay_ = 3e4, this.authTokenProvider_.notifyForInvalidToken()))
                }, tn.prototype.onAppCheckRevoked_ = function(e, t) {
                    ke("App check token revoked: " + e + "/" + t), this.appCheckToken_ = null, this.forceTokenRefresh_ = !0, "invalid_token" !== e && "permission_denied" !== e || (this.invalidAppCheckTokenCount_++, 3 <= this.invalidAppCheckTokenCount_ && this.appCheckTokenProvider_.notifyForInvalidToken())
                }, tn.prototype.onSecurityDebugPacket_ = function(e) {
                    this.securityDebugCallback_ ? this.securityDebugCallback_(e) : "msg" in e && console.log("FIREBASE: " + e.msg.replace("\n", "\nFIREBASE: "))
                }, tn.prototype.restoreState_ = function() {
                    var t, e, n, r;
                    this.tryAuth(), this.tryAppCheck();
                    try {
                        for (var i = _(this.listens.values()), o = i.next(); !o.done; o = i.next()) {
                            var a = o.value;
                            try {
                                for (var s = (n = void 0, _(a.values())), u = s.next(); !u.done; u = s.next()) {
                                    var l = u.value;
                                    this.sendListen_(l)
                                }
                            } catch (e) {
                                n = {
                                    error: e
                                }
                            } finally {
                                try {
                                    u && !u.done && (r = s.return) && r.call(s)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (e = i.return) && e.call(i)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    for (var h = 0; h < this.outstandingPuts_.length; h++) this.outstandingPuts_[h] && this.sendPut_(h);
                    for (; this.onDisconnectRequestQueue_.length;) {
                        var c = this.onDisconnectRequestQueue_.shift();
                        this.sendOnDisconnect_(c.action, c.pathString, c.data, c.onComplete)
                    }
                    for (h = 0; h < this.outstandingGets_.length; h++) this.outstandingGets_[h] && this.sendGet_(h)
                }, tn.prototype.sendConnectStats_ = function() {
                    var e = {};
                    e["sdk.js." + oe.replace(/\./g, "-")] = 1, w() ? e["framework.cordova"] = 1 : "object" == typeof navigator && "ReactNative" === navigator.product && (e["framework.reactnative"] = 1), this.reportStats(e)
                }, tn.prototype.shouldReconnect_ = function() {
                    var e = St.getInstance().currentlyOnline();
                    return A(this.interruptReasons_) && e
                }, tn.nextPersistentConnectionId_ = 0, tn.nextConnectionId_ = 0, tn);

            function tn(e, t, n, r, i, o, a, s) {
                var u = Jt.call(this) || this;
                if (u.repoInfo_ = e, u.applicationId_ = t, u.onDataUpdate_ = n, u.onConnectStatus_ = r, u.onServerInfoUpdate_ = i, u.authTokenProvider_ = o, u.appCheckTokenProvider_ = a, u.authOverride_ = s, u.id = tn.nextPersistentConnectionId_++, u.log_ = Pe("p:" + u.id + ":"), u.interruptReasons_ = {}, u.listens = new Map, u.outstandingPuts_ = [], u.outstandingGets_ = [], u.outstandingPutCount_ = 0, u.outstandingGetCount_ = 0, u.onDisconnectRequestQueue_ = [], u.connected_ = !1, u.reconnectDelay_ = Xt, u.maxReconnectDelay_ = Zt, u.securityDebugCallback_ = null, u.lastSessionId = null, u.establishConnectionTimer_ = null, u.visible_ = !1, u.requestCBHash_ = {}, u.requestNumber_ = 0, u.realtime_ = null, u.authToken_ = null, u.appCheckToken_ = null, u.forceTokenRefresh_ = !1, u.invalidAuthTokenCount_ = 0, u.invalidAppCheckTokenCount_ = 0, u.firstConnection_ = !0, u.lastConnectionAttemptTime_ = null, u.lastConnectionEstablishedTime_ = null, s && !C()) throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
                return Gt.getInstance().on("visible", u.onVisible_, u), -1 === e.host.indexOf("fblocal") && St.getInstance().on("online", u.onOnline_, u), u
            }
            var nn = (rn.Wrap = function(e, t) {
                return new rn(e, t)
            }, rn);

            function rn(e, t) {
                this.name = e, this.node = t
            }
            var on, me = (an.prototype.getCompare = function() {
                return this.compare.bind(this)
            }, an.prototype.indexedValueChanged = function(e, t) {
                e = new nn(Re, e), t = new nn(Re, t);
                return 0 !== this.compare(e, t)
            }, an.prototype.minPost = function() {
                return nn.MIN
            }, an);

            function an() {}
            var sn, re = (n(un, sn = me), Object.defineProperty(un, "__EMPTY_NODE", {
                get: function() {
                    return on
                },
                set: function(e) {
                    on = e
                },
                enumerable: !1,
                configurable: !0
            }), un.prototype.compare = function(e, t) {
                return De(e.name, t.name)
            }, un.prototype.isDefinedOn = function(e) {
                throw m("KeyIndex.isDefinedOn not expected to be called.")
            }, un.prototype.indexedValueChanged = function(e, t) {
                return !1
            }, un.prototype.minPost = function() {
                return nn.MIN
            }, un.prototype.maxPost = function() {
                return new nn(Oe, on)
            }, un.prototype.makePost = function(e, t) {
                return g("string" == typeof e, "KeyIndex indexValue must always be a string."), new nn(e, on)
            }, un.prototype.toString = function() {
                return ".key"
            }, un);

            function un() {
                return null !== sn && sn.apply(this, arguments) || this
            }
            var ln = new re,
                hn = (cn.prototype.getNext = function() {
                    if (0 === this.nodeStack_.length) return null;
                    var e = this.nodeStack_.pop(),
                        t = this.resultGenerator_ ? this.resultGenerator_(e.key, e.value) : {
                            key: e.key,
                            value: e.value
                        };
                    if (this.isReverse_)
                        for (e = e.left; !e.isEmpty();) this.nodeStack_.push(e), e = e.right;
                    else
                        for (e = e.right; !e.isEmpty();) this.nodeStack_.push(e), e = e.left;
                    return t
                }, cn.prototype.hasNext = function() {
                    return 0 < this.nodeStack_.length
                }, cn.prototype.peek = function() {
                    if (0 === this.nodeStack_.length) return null;
                    var e = this.nodeStack_[this.nodeStack_.length - 1];
                    return this.resultGenerator_ ? this.resultGenerator_(e.key, e.value) : {
                        key: e.key,
                        value: e.value
                    }
                }, cn);

            function cn(e, t, n, r, i) {
                void 0 === i && (i = null), this.isReverse_ = r, this.resultGenerator_ = i, this.nodeStack_ = [];
                for (var o = 1; !e.isEmpty();)
                    if (o = t ? n(e.key, t) : 1, r && (o *= -1), o < 0) e = this.isReverse_ ? e.left : e.right;
                    else {
                        if (0 === o) {
                            this.nodeStack_.push(e);
                            break
                        }
                        this.nodeStack_.push(e), e = this.isReverse_ ? e.right : e.left
                    }
            }
            var pn = (dn.prototype.copy = function(e, t, n, r, i) {
                return new dn(null != e ? e : this.key, null != t ? t : this.value, null != n ? n : this.color, null != r ? r : this.left, null != i ? i : this.right)
            }, dn.prototype.count = function() {
                return this.left.count() + 1 + this.right.count()
            }, dn.prototype.isEmpty = function() {
                return !1
            }, dn.prototype.inorderTraversal = function(e) {
                return this.left.inorderTraversal(e) || !!e(this.key, this.value) || this.right.inorderTraversal(e)
            }, dn.prototype.reverseTraversal = function(e) {
                return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e)
            }, dn.prototype.min_ = function() {
                return this.left.isEmpty() ? this : this.left.min_()
            }, dn.prototype.minKey = function() {
                return this.min_().key
            }, dn.prototype.maxKey = function() {
                return this.right.isEmpty() ? this.key : this.right.maxKey()
            }, dn.prototype.insert = function(e, t, n) {
                var r = this,
                    i = n(e, r.key);
                return (r = i < 0 ? r.copy(null, null, null, r.left.insert(e, t, n), null) : 0 === i ? r.copy(null, t, null, null, null) : r.copy(null, null, null, null, r.right.insert(e, t, n))).fixUp_()
            }, dn.prototype.removeMin_ = function() {
                if (this.left.isEmpty()) return yn.EMPTY_NODE;
                var e = this;
                return (e = (e = !e.left.isRed_() && !e.left.left.isRed_() ? e.moveRedLeft_() : e).copy(null, null, null, e.left.removeMin_(), null)).fixUp_()
            }, dn.prototype.remove = function(e, t) {
                var n, r = this;
                if (t(e, r.key) < 0) r = (r = !(r.left.isEmpty() || r.left.isRed_() || r.left.left.isRed_()) ? r.moveRedLeft_() : r).copy(null, null, null, r.left.remove(e, t), null);
                else {
                    if (0 === t(e, (r = !((r = r.left.isRed_() ? r.rotateRight_() : r).right.isEmpty() || r.right.isRed_() || r.right.left.isRed_()) ? r.moveRedRight_() : r).key)) {
                        if (r.right.isEmpty()) return yn.EMPTY_NODE;
                        n = r.right.min_(), r = r.copy(n.key, n.value, null, null, r.right.removeMin_())
                    }
                    r = r.copy(null, null, null, null, r.right.remove(e, t))
                }
                return r.fixUp_()
            }, dn.prototype.isRed_ = function() {
                return this.color
            }, dn.prototype.fixUp_ = function() {
                var e = this;
                return e = (e = (e = e.right.isRed_() && !e.left.isRed_() ? e.rotateLeft_() : e).left.isRed_() && e.left.left.isRed_() ? e.rotateRight_() : e).left.isRed_() && e.right.isRed_() ? e.colorFlip_() : e
            }, dn.prototype.moveRedLeft_ = function() {
                var e = this.colorFlip_();
                return e = e.right.left.isRed_() ? (e = (e = e.copy(null, null, null, null, e.right.rotateRight_())).rotateLeft_()).colorFlip_() : e
            }, dn.prototype.moveRedRight_ = function() {
                var e = this.colorFlip_();
                return e = e.left.left.isRed_() ? (e = e.rotateRight_()).colorFlip_() : e
            }, dn.prototype.rotateLeft_ = function() {
                var e = this.copy(null, null, dn.RED, null, this.right.left);
                return this.right.copy(null, null, this.color, e, null)
            }, dn.prototype.rotateRight_ = function() {
                var e = this.copy(null, null, dn.RED, this.left.right, null);
                return this.left.copy(null, null, this.color, null, e)
            }, dn.prototype.colorFlip_ = function() {
                var e = this.left.copy(null, null, !this.left.color, null, null),
                    t = this.right.copy(null, null, !this.right.color, null, null);
                return this.copy(null, null, !this.color, e, t)
            }, dn.prototype.checkMaxDepth_ = function() {
                var e = this.check_();
                return Math.pow(2, e) <= this.count() + 1
            }, dn.prototype.check_ = function() {
                if (this.isRed_() && this.left.isRed_()) throw new Error("Red node has red child(" + this.key + "," + this.value + ")");
                if (this.right.isRed_()) throw new Error("Right child of (" + this.key + "," + this.value + ") is red");
                var e = this.left.check_();
                if (e !== this.right.check_()) throw new Error("Black depths differ");
                return e + (this.isRed_() ? 0 : 1)
            }, dn.RED = !0, dn.BLACK = !1, dn);

            function dn(e, t, n, r, i) {
                this.key = e, this.value = t, this.color = null != n ? n : dn.RED, this.left = null != r ? r : yn.EMPTY_NODE, this.right = null != i ? i : yn.EMPTY_NODE
            }
            fn.prototype.copy = function(e, t, n, r, i) {
                return this
            }, fn.prototype.insert = function(e, t, n) {
                return new pn(e, t, null)
            }, fn.prototype.remove = function(e, t) {
                return this
            }, fn.prototype.count = function() {
                return 0
            }, fn.prototype.isEmpty = function() {
                return !0
            }, fn.prototype.inorderTraversal = function(e) {
                return !1
            }, fn.prototype.reverseTraversal = function(e) {
                return !1
            }, fn.prototype.minKey = function() {
                return null
            }, fn.prototype.maxKey = function() {
                return null
            }, fn.prototype.check_ = function() {
                return 0
            }, fn.prototype.isRed_ = function() {
                return !1
            }, Tt = fn;

            function fn() {}
            var _n, yn = (vn.prototype.insert = function(e, t) {
                return new vn(this.comparator_, this.root_.insert(e, t, this.comparator_).copy(null, null, pn.BLACK, null, null))
            }, vn.prototype.remove = function(e) {
                return new vn(this.comparator_, this.root_.remove(e, this.comparator_).copy(null, null, pn.BLACK, null, null))
            }, vn.prototype.get = function(e) {
                for (var t, n = this.root_; !n.isEmpty();) {
                    if (0 === (t = this.comparator_(e, n.key))) return n.value;
                    t < 0 ? n = n.left : 0 < t && (n = n.right)
                }
                return null
            }, vn.prototype.getPredecessorKey = function(e) {
                for (var t, n = this.root_, r = null; !n.isEmpty();) {
                    if (0 === (t = this.comparator_(e, n.key))) {
                        if (n.left.isEmpty()) return r ? r.key : null;
                        for (n = n.left; !n.right.isEmpty();) n = n.right;
                        return n.key
                    }
                    t < 0 ? n = n.left : 0 < t && (n = (r = n).right)
                }
                throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")
            }, vn.prototype.isEmpty = function() {
                return this.root_.isEmpty()
            }, vn.prototype.count = function() {
                return this.root_.count()
            }, vn.prototype.minKey = function() {
                return this.root_.minKey()
            }, vn.prototype.maxKey = function() {
                return this.root_.maxKey()
            }, vn.prototype.inorderTraversal = function(e) {
                return this.root_.inorderTraversal(e)
            }, vn.prototype.reverseTraversal = function(e) {
                return this.root_.reverseTraversal(e)
            }, vn.prototype.getIterator = function(e) {
                return new hn(this.root_, null, this.comparator_, !1, e)
            }, vn.prototype.getIteratorFrom = function(e, t) {
                return new hn(this.root_, e, this.comparator_, !1, t)
            }, vn.prototype.getReverseIteratorFrom = function(e, t) {
                return new hn(this.root_, e, this.comparator_, !0, t)
            }, vn.prototype.getReverseIterator = function(e) {
                return new hn(this.root_, null, this.comparator_, !0, e)
            }, vn.EMPTY_NODE = new Tt, vn);

            function vn(e, t) {
                void 0 === t && (t = vn.EMPTY_NODE), this.comparator_ = e, this.root_ = t
            }

            function gn(e, t) {
                return De(e.name, t.name)
            }

            function mn(e, t) {
                return De(e, t)
            }

            function wn(e) {
                return "number" == typeof e ? "number:" + Me(e) : "string:" + e
            }
            var Cn, bn, Tn, En, In = function(e) {
                    var t;
                    e.isLeafNode() ? (t = e.val(), g("string" == typeof t || "number" == typeof t || "object" == typeof t && O(t, ".sv"), "Priority must be a string or number.")) : g(e === _n || e.isEmpty(), "priority of unexpected type."), g(e === _n || e.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.")
                },
                Sn = (Object.defineProperty(kn, "__childrenNodeConstructor", {
                    get: function() {
                        return Cn
                    },
                    set: function(e) {
                        Cn = e
                    },
                    enumerable: !1,
                    configurable: !0
                }), kn.prototype.isLeafNode = function() {
                    return !0
                }, kn.prototype.getPriority = function() {
                    return this.priorityNode_
                }, kn.prototype.updatePriority = function(e) {
                    return new kn(this.value_, e)
                }, kn.prototype.getImmediateChild = function(e) {
                    return ".priority" === e ? this.priorityNode_ : kn.__childrenNodeConstructor.EMPTY_NODE
                }, kn.prototype.getChild = function(e) {
                    return jt(e) ? this : ".priority" === Dt(e) ? this.priorityNode_ : kn.__childrenNodeConstructor.EMPTY_NODE
                }, kn.prototype.hasChild = function() {
                    return !1
                }, kn.prototype.getPredecessorChildName = function(e, t) {
                    return null
                }, kn.prototype.updateImmediateChild = function(e, t) {
                    return ".priority" === e ? this.updatePriority(t) : t.isEmpty() && ".priority" !== e ? this : kn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e, t).updatePriority(this.priorityNode_)
                }, kn.prototype.updateChild = function(e, t) {
                    var n = Dt(e);
                    return null === n ? t : t.isEmpty() && ".priority" !== n ? this : (g(".priority" !== n || 1 === At(e), ".priority must be the last token in a path"), this.updateImmediateChild(n, kn.__childrenNodeConstructor.EMPTY_NODE.updateChild(Lt(e), t)))
                }, kn.prototype.isEmpty = function() {
                    return !1
                }, kn.prototype.numChildren = function() {
                    return 0
                }, kn.prototype.forEachChild = function(e, t) {
                    return !1
                }, kn.prototype.val = function(e) {
                    return e && !this.getPriority().isEmpty() ? {
                        ".value": this.getValue(),
                        ".priority": this.getPriority().val()
                    } : this.getValue()
                }, kn.prototype.hash = function() {
                    var e, t;
                    return null === this.lazyHash_ && (e = "", this.priorityNode_.isEmpty() || (e += "priority:" + wn(this.priorityNode_.val()) + ":"), e += (t = typeof this.value_) + ":", e += "number" == t ? Me(this.value_) : this.value_, this.lazyHash_ = ce(e)), this.lazyHash_
                }, kn.prototype.getValue = function() {
                    return this.value_
                }, kn.prototype.compareTo = function(e) {
                    return e === kn.__childrenNodeConstructor.EMPTY_NODE ? 1 : e instanceof kn.__childrenNodeConstructor ? -1 : (g(e.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(e))
                }, kn.prototype.compareToLeafNode_ = function(e) {
                    var t = typeof e.value_,
                        n = typeof this.value_,
                        r = kn.VALUE_TYPE_ORDER.indexOf(t),
                        i = kn.VALUE_TYPE_ORDER.indexOf(n);
                    return g(0 <= r, "Unknown leaf type: " + t), g(0 <= i, "Unknown leaf type: " + n), r === i ? "object" == n ? 0 : this.value_ < e.value_ ? -1 : this.value_ === e.value_ ? 0 : 1 : i - r
                }, kn.prototype.withIndex = function() {
                    return this
                }, kn.prototype.isIndexed = function() {
                    return !0
                }, kn.prototype.equals = function(e) {
                    return e === this || !!e.isLeafNode() && (this.value_ === e.value_ && this.priorityNode_.equals(e.priorityNode_))
                }, kn.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"], kn);

            function kn(e, t) {
                void 0 === t && (t = kn.__childrenNodeConstructor.EMPTY_NODE), this.value_ = e, this.priorityNode_ = t, this.lazyHash_ = null, g(void 0 !== this.value_ && null !== this.value_, "LeafNode shouldn't be created with null/undefined value."), In(this.priorityNode_)
            }

            function Pn() {
                return null !== En && En.apply(this, arguments) || this
            }
            var Nn = new(n(Pn, En = me), Pn.prototype.compare = function(e, t) {
                    var n = e.node.getPriority(),
                        r = t.node.getPriority(),
                        r = n.compareTo(r);
                    return 0 === r ? De(e.name, t.name) : r
                }, Pn.prototype.isDefinedOn = function(e) {
                    return !e.getPriority().isEmpty()
                }, Pn.prototype.indexedValueChanged = function(e, t) {
                    return !e.getPriority().equals(t.getPriority())
                }, Pn.prototype.minPost = function() {
                    return nn.MIN
                }, Pn.prototype.maxPost = function() {
                    return new nn(Oe, new Sn("[PRIORITY-POST]", Tn))
                }, Pn.prototype.makePost = function(e, t) {
                    e = bn(e);
                    return new nn(t, new Sn("[PRIORITY-POST]", e))
                }, Pn.prototype.toString = function() {
                    return ".priority"
                }, Pn),
                xn = Math.log(2),
                Rn = (On.prototype.nextBitIsOne = function() {
                    var e = !(this.bits_ & 1 << this.current_);
                    return this.current_--, e
                }, On);

            function On(e) {
                var t;
                this.count = (t = e + 1, parseInt(Math.log(t) / xn, 10)), this.current_ = this.count - 1;
                var n, r = (n = this.count, parseInt(Array(n + 1).join("1"), 2));
                this.bits_ = e + 1 & r
            }
            var Dn, An, Ln = function(l, e, h, t) {
                    l.sort(e);
                    var c = function(e, t) {
                            var n = t - e;
                            if (0 == n) return null;
                            if (1 == n) return r = l[e], i = h ? h(r) : r, new pn(i, r.node, pn.BLACK, null, null);
                            var n = parseInt(n / 2, 10) + e,
                                e = c(e, n),
                                t = c(n + 1, t),
                                r = l[n],
                                i = h ? h(r) : r;
                            return new pn(i, r.node, pn.BLACK, e, t)
                        },
                        n = function(e) {
                            for (var t = null, n = null, i = l.length, r = function(e, t) {
                                    var n = i - e,
                                        r = i;
                                    i -= e;
                                    e = c(1 + n, r), r = l[n], n = h ? h(r) : r;
                                    o(new pn(n, r.node, t, null, e))
                                }, o = function(e) {
                                    t = t ? t.left = e : n = e
                                }, a = 0; a < e.count; ++a) {
                                var s = e.nextBitIsOne(),
                                    u = Math.pow(2, e.count - (a + 1));
                                s ? r(u, pn.BLACK) : (r(u, pn.BLACK), r(u, pn.RED))
                            }
                            return n
                        }(new Rn(l.length));
                    return new yn(t || e, n)
                },
                Mn = {},
                Fn = (Object.defineProperty(qn, "Default", {
                    get: function() {
                        return g(Nn, "ChildrenNode.ts has not been loaded"), Dn = Dn || new qn({
                            ".priority": Mn
                        }, {
                            ".priority": Nn
                        })
                    },
                    enumerable: !1,
                    configurable: !0
                }), qn.prototype.get = function(e) {
                    var t = D(this.indexes_, e);
                    if (!t) throw new Error("No index defined for " + e);
                    return t instanceof yn ? t : null
                }, qn.prototype.hasIndex = function(e) {
                    return O(this.indexSet_, e.toString())
                }, qn.prototype.addIndex = function(e, t) {
                    g(e !== ln, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
                    for (var n = [], r = !1, i = t.getIterator(nn.Wrap), o = i.getNext(); o;) r = r || e.isDefinedOn(o.node), n.push(o), o = i.getNext();
                    var a = r ? Ln(n, e.getCompare()) : Mn,
                        s = e.toString(),
                        u = l({}, this.indexSet_);
                    u[s] = e;
                    t = l({}, this.indexes_);
                    return t[s] = a, new qn(t, u)
                }, qn.prototype.addToIndexes = function(a, s) {
                    var u = this;
                    return new qn(L(this.indexes_, function(e, t) {
                        var n = D(u.indexSet_, t);
                        if (g(n, "Missing index implementation for " + t), e === Mn) {
                            if (n.isDefinedOn(a.node)) {
                                for (var r = [], i = s.getIterator(nn.Wrap), o = i.getNext(); o;) o.name !== a.name && r.push(o), o = i.getNext();
                                return r.push(a), Ln(r, n.getCompare())
                            }
                            return Mn
                        }
                        t = s.get(a.name), n = e;
                        return (n = t ? e.remove(new nn(a.name, t)) : n).insert(a, a.node)
                    }), this.indexSet_)
                }, qn.prototype.removeFromIndexes = function(n, r) {
                    return new qn(L(this.indexes_, function(e) {
                        if (e === Mn) return e;
                        var t = r.get(n.name);
                        return t ? e.remove(new nn(n.name, t)) : e
                    }), this.indexSet_)
                }, qn);

            function qn(e, t) {
                this.indexes_ = e, this.indexSet_ = t
            }
            var Wn, jn = (Object.defineProperty(Un, "EMPTY_NODE", {
                get: function() {
                    return An = An || new Un(new yn(mn), null, Fn.Default)
                },
                enumerable: !1,
                configurable: !0
            }), Un.prototype.isLeafNode = function() {
                return !1
            }, Un.prototype.getPriority = function() {
                return this.priorityNode_ || An
            }, Un.prototype.updatePriority = function(e) {
                return this.children_.isEmpty() ? this : new Un(this.children_, e, this.indexMap_)
            }, Un.prototype.getImmediateChild = function(e) {
                if (".priority" === e) return this.getPriority();
                e = this.children_.get(e);
                return null === e ? An : e
            }, Un.prototype.getChild = function(e) {
                var t = Dt(e);
                return null === t ? this : this.getImmediateChild(t).getChild(Lt(e))
            }, Un.prototype.hasChild = function(e) {
                return null !== this.children_.get(e)
            }, Un.prototype.updateImmediateChild = function(e, t) {
                if (g(t, "We should always be passing snapshot nodes"), ".priority" === e) return this.updatePriority(t);
                var n = new nn(e, t),
                    r = void 0,
                    i = void 0,
                    i = t.isEmpty() ? (r = this.children_.remove(e), this.indexMap_.removeFromIndexes(n, this.children_)) : (r = this.children_.insert(e, t), this.indexMap_.addToIndexes(n, this.children_)),
                    n = r.isEmpty() ? An : this.priorityNode_;
                return new Un(r, n, i)
            }, Un.prototype.updateChild = function(e, t) {
                var n = Dt(e);
                if (null === n) return t;
                g(".priority" !== Dt(e) || 1 === At(e), ".priority must be the last token in a path");
                t = this.getImmediateChild(n).updateChild(Lt(e), t);
                return this.updateImmediateChild(n, t)
            }, Un.prototype.isEmpty = function() {
                return this.children_.isEmpty()
            }, Un.prototype.numChildren = function() {
                return this.children_.count()
            }, Un.prototype.val = function(n) {
                if (this.isEmpty()) return null;
                var r = {},
                    i = 0,
                    o = 0,
                    a = !0;
                if (this.forEachChild(Nn, function(e, t) {
                        r[e] = t.val(n), i++, a && Un.INTEGER_REGEXP_.test(e) ? o = Math.max(o, Number(e)) : a = !1
                    }), !n && a && o < 2 * i) {
                    var e, t = [];
                    for (e in r) t[e] = r[e];
                    return t
                }
                return n && !this.getPriority().isEmpty() && (r[".priority"] = this.getPriority().val()), r
            }, Un.prototype.hash = function() {
                var n;
                return null === this.lazyHash_ && (n = "", this.getPriority().isEmpty() || (n += "priority:" + wn(this.getPriority().val()) + ":"), this.forEachChild(Nn, function(e, t) {
                    t = t.hash();
                    "" !== t && (n += ":" + e + ":" + t)
                }), this.lazyHash_ = "" === n ? "" : ce(n)), this.lazyHash_
            }, Un.prototype.getPredecessorChildName = function(e, t, n) {
                n = this.resolveIndex_(n);
                if (n) {
                    t = n.getPredecessorKey(new nn(e, t));
                    return t ? t.name : null
                }
                return this.children_.getPredecessorKey(e)
            }, Un.prototype.getFirstChildName = function(e) {
                e = this.resolveIndex_(e);
                if (e) {
                    e = e.minKey();
                    return e && e.name
                }
                return this.children_.minKey()
            }, Un.prototype.getFirstChild = function(e) {
                e = this.getFirstChildName(e);
                return e ? new nn(e, this.children_.get(e)) : null
            }, Un.prototype.getLastChildName = function(e) {
                e = this.resolveIndex_(e);
                if (e) {
                    e = e.maxKey();
                    return e && e.name
                }
                return this.children_.maxKey()
            }, Un.prototype.getLastChild = function(e) {
                e = this.getLastChildName(e);
                return e ? new nn(e, this.children_.get(e)) : null
            }, Un.prototype.forEachChild = function(e, t) {
                e = this.resolveIndex_(e);
                return e ? e.inorderTraversal(function(e) {
                    return t(e.name, e.node)
                }) : this.children_.inorderTraversal(t)
            }, Un.prototype.getIterator = function(e) {
                return this.getIteratorFrom(e.minPost(), e)
            }, Un.prototype.getIteratorFrom = function(e, t) {
                var n = this.resolveIndex_(t);
                if (n) return n.getIteratorFrom(e, function(e) {
                    return e
                });
                for (var r = this.children_.getIteratorFrom(e.name, nn.Wrap), i = r.peek(); null != i && t.compare(i, e) < 0;) r.getNext(), i = r.peek();
                return r
            }, Un.prototype.getReverseIterator = function(e) {
                return this.getReverseIteratorFrom(e.maxPost(), e)
            }, Un.prototype.getReverseIteratorFrom = function(e, t) {
                var n = this.resolveIndex_(t);
                if (n) return n.getReverseIteratorFrom(e, function(e) {
                    return e
                });
                for (var r = this.children_.getReverseIteratorFrom(e.name, nn.Wrap), i = r.peek(); null != i && 0 < t.compare(i, e);) r.getNext(), i = r.peek();
                return r
            }, Un.prototype.compareTo = function(e) {
                return this.isEmpty() ? e.isEmpty() ? 0 : -1 : e.isLeafNode() || e.isEmpty() ? 1 : e === Vn ? -1 : 0
            }, Un.prototype.withIndex = function(e) {
                if (e === ln || this.indexMap_.hasIndex(e)) return this;
                e = this.indexMap_.addIndex(e, this.children_);
                return new Un(this.children_, this.priorityNode_, e)
            }, Un.prototype.isIndexed = function(e) {
                return e === ln || this.indexMap_.hasIndex(e)
            }, Un.prototype.equals = function(e) {
                if (e === this) return !0;
                if (e.isLeafNode()) return !1;
                if (this.getPriority().equals(e.getPriority())) {
                    if (this.children_.count() !== e.children_.count()) return !1;
                    for (var t = this.getIterator(Nn), n = e.getIterator(Nn), r = t.getNext(), i = n.getNext(); r && i;) {
                        if (r.name !== i.name || !r.node.equals(i.node)) return !1;
                        r = t.getNext(), i = n.getNext()
                    }
                    return null === r && null === i
                }
                return !1
            }, Un.prototype.resolveIndex_ = function(e) {
                return e === ln ? null : this.indexMap_.get(e.toString())
            }, Un.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/, Un);

            function Un(e, t, n) {
                this.children_ = e, this.priorityNode_ = t, this.indexMap_ = n, this.lazyHash_ = null, this.priorityNode_ && In(this.priorityNode_), this.children_.isEmpty() && g(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority")
            }

            function Bn() {
                return Wn.call(this, new yn(mn), jn.EMPTY_NODE, Fn.Default) || this
            }
            var Vn = new(n(Bn, Wn = jn), Bn.prototype.compareTo = function(e) {
                return e === this ? 0 : 1
            }, Bn.prototype.equals = function(e) {
                return e === this
            }, Bn.prototype.getPriority = function() {
                return this
            }, Bn.prototype.getImmediateChild = function(e) {
                return jn.EMPTY_NODE
            }, Bn.prototype.isEmpty = function() {
                return !1
            }, Bn);
            Object.defineProperties(nn, {
                MIN: {
                    value: new nn(Re, jn.EMPTY_NODE)
                },
                MAX: {
                    value: new nn(Oe, Vn)
                }
            }), re.__EMPTY_NODE = jn.EMPTY_NODE, Sn.__childrenNodeConstructor = jn, Tn = _n = Vn;
            var zn = !0;

            function Hn(n, e) {
                if (void 0 === e && (e = null), null === n) return jn.EMPTY_NODE;
                if ("object" == typeof n && ".priority" in n && (e = n[".priority"]), g(null === e || "string" == typeof e || "number" == typeof e || "object" == typeof e && ".sv" in e, "Invalid priority type found: " + typeof e), "object" != typeof(n = "object" == typeof n && ".value" in n && null !== n[".value"] ? n[".value"] : n) || ".sv" in n) return new Sn(n, Hn(e));
                if (n instanceof Array || !zn) {
                    var r = jn.EMPTY_NODE;
                    return Le(n, function(e, t) {
                        O(n, e) && "." !== e.substring(0, 1) && (!(t = Hn(t)).isLeafNode() && t.isEmpty() || (r = r.updateImmediateChild(e, t)))
                    }), r.updatePriority(Hn(e))
                }
                var i = [],
                    o = !1;
                if (Le(n, function(e, t) {
                        "." !== e.substring(0, 1) && ((t = Hn(t)).isEmpty() || (o = o || !t.getPriority().isEmpty(), i.push(new nn(e, t))))
                    }), 0 === i.length) return jn.EMPTY_NODE;
                var t = Ln(i, gn, function(e) {
                    return e.name
                }, mn);
                if (o) {
                    var a = Ln(i, Nn.getCompare());
                    return new jn(t, Hn(e), new Fn({
                        ".priority": a
                    }, {
                        ".priority": Nn
                    }))
                }
                return new jn(t, Hn(e), Fn.Default)
            }
            bn = Hn;
            var Qn, Yn, Kn = (n(Gn, Qn = me), Gn.prototype.extractChild = function(e) {
                return e.getChild(this.indexPath_)
            }, Gn.prototype.isDefinedOn = function(e) {
                return !e.getChild(this.indexPath_).isEmpty()
            }, Gn.prototype.compare = function(e, t) {
                var n = this.extractChild(e.node),
                    r = this.extractChild(t.node),
                    r = n.compareTo(r);
                return 0 === r ? De(e.name, t.name) : r
            }, Gn.prototype.makePost = function(e, t) {
                e = Hn(e), e = jn.EMPTY_NODE.updateChild(this.indexPath_, e);
                return new nn(t, e)
            }, Gn.prototype.maxPost = function() {
                var e = jn.EMPTY_NODE.updateChild(this.indexPath_, Vn);
                return new nn(Oe, e)
            }, Gn.prototype.toString = function() {
                return Ft(this.indexPath_, 0).join("/")
            }, Gn);

            function Gn(e) {
                var t = Qn.call(this) || this;
                return t.indexPath_ = e, g(!jt(e) && ".priority" !== Dt(e), "Can't create PathIndex with empty path or .priority key"), t
            }

            function $n() {
                return null !== Yn && Yn.apply(this, arguments) || this
            }

            function Jn(e) {
                if (e === "" + je) return "-";
                var t = Ue(e);
                if (null != t) return "" + (t + 1);
                for (var n = new Array(e.length), r = 0; r < n.length; r++) n[r] = e.charAt(r);
                if (n.length < 786) return n.push("-"), n.join("");
                for (var i = n.length - 1; 0 <= i && "z" === n[i];) i--;
                return -1 === i ? Oe : (t = n[i], t = nr.charAt(nr.indexOf(t) + 1), n[i] = t, n.slice(0, i + 1).join(""))
            }

            function Xn(e) {
                if (e === "" + We) return Re;
                var t = Ue(e);
                if (null != t) return "" + (t - 1);
                for (var n = new Array(e.length), r = 0; r < n.length; r++) n[r] = e.charAt(r);
                return "-" === n[n.length - 1] ? 1 === n.length ? "" + je : (delete n[n.length - 1], n.join("")) : (n[n.length - 1] = nr.charAt(nr.indexOf(n[n.length - 1]) - 1), n.join("") + "z".repeat(786 - n.length))
            }
            var Zn, er, tr = new(n($n, Yn = me), $n.prototype.compare = function(e, t) {
                    var n = e.node.compareTo(t.node);
                    return 0 === n ? De(e.name, t.name) : n
                }, $n.prototype.isDefinedOn = function(e) {
                    return !0
                }, $n.prototype.indexedValueChanged = function(e, t) {
                    return !e.equals(t)
                }, $n.prototype.minPost = function() {
                    return nn.MIN
                }, $n.prototype.maxPost = function() {
                    return nn.MAX
                }, $n.prototype.makePost = function(e, t) {
                    e = Hn(e);
                    return new nn(t, e)
                }, $n.prototype.toString = function() {
                    return ".value"
                }, $n),
                nr = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
                rr = (Zn = 0, er = [], function(e) {
                    var t = e === Zn;
                    Zn = e;
                    for (var n = new Array(8), r = 7; 0 <= r; r--) n[r] = nr.charAt(e % 64), e = Math.floor(e / 64);
                    g(0 === e, "Cannot push at time == 0");
                    var i = n.join("");
                    if (t) {
                        for (r = 11; 0 <= r && 63 === er[r]; r--) er[r] = 0;
                        er[r]++
                    } else
                        for (r = 0; r < 12; r++) er[r] = Math.floor(64 * Math.random());
                    for (r = 0; r < 12; r++) i += nr.charAt(er[r]);
                    return g(20 === i.length, "nextPushId: Length should be 20."), i
                });

            function ir(e) {
                return {
                    type: "value",
                    snapshotNode: e
                }
            }

            function or(e, t) {
                return {
                    type: "child_added",
                    snapshotNode: t,
                    childName: e
                }
            }

            function ar(e, t) {
                return {
                    type: "child_removed",
                    snapshotNode: t,
                    childName: e
                }
            }

            function sr(e, t, n) {
                return {
                    type: "child_changed",
                    snapshotNode: t,
                    childName: e,
                    oldSnap: n
                }
            }
            var ur = (lr.prototype.updateChild = function(e, t, n, r, i, o) {
                g(e.isIndexed(this.index_), "A node must be indexed if only a child is updated");
                var a = e.getImmediateChild(t);
                return a.getChild(r).equals(n.getChild(r)) && a.isEmpty() === n.isEmpty() ? e : (null != o && (n.isEmpty() ? e.hasChild(t) ? o.trackChildChange(ar(t, a)) : g(e.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : a.isEmpty() ? o.trackChildChange(or(t, n)) : o.trackChildChange(sr(t, n, a))), e.isLeafNode() && n.isEmpty() ? e : e.updateImmediateChild(t, n).withIndex(this.index_))
            }, lr.prototype.updateFullNode = function(r, n, i) {
                return null != i && (r.isLeafNode() || r.forEachChild(Nn, function(e, t) {
                    n.hasChild(e) || i.trackChildChange(ar(e, t))
                }), n.isLeafNode() || n.forEachChild(Nn, function(e, t) {
                    var n;
                    r.hasChild(e) ? (n = r.getImmediateChild(e)).equals(t) || i.trackChildChange(sr(e, t, n)) : i.trackChildChange(or(e, t))
                })), n.withIndex(this.index_)
            }, lr.prototype.updatePriority = function(e, t) {
                return e.isEmpty() ? jn.EMPTY_NODE : e.updatePriority(t)
            }, lr.prototype.filtersNodes = function() {
                return !1
            }, lr.prototype.getIndexedFilter = function() {
                return this
            }, lr.prototype.getIndex = function() {
                return this.index_
            }, lr);

            function lr(e) {
                this.index_ = e
            }
            var hr = (cr.prototype.getStartPost = function() {
                return this.startPost_
            }, cr.prototype.getEndPost = function() {
                return this.endPost_
            }, cr.prototype.matches = function(e) {
                return this.index_.compare(this.getStartPost(), e) <= 0 && this.index_.compare(e, this.getEndPost()) <= 0
            }, cr.prototype.updateChild = function(e, t, n, r, i, o) {
                return this.matches(new nn(t, n)) || (n = jn.EMPTY_NODE), this.indexedFilter_.updateChild(e, t, n, r, i, o)
            }, cr.prototype.updateFullNode = function(e, t, n) {
                t.isLeafNode() && (t = jn.EMPTY_NODE);
                var r = (r = t.withIndex(this.index_)).updatePriority(jn.EMPTY_NODE),
                    i = this;
                return t.forEachChild(Nn, function(e, t) {
                    i.matches(new nn(e, t)) || (r = r.updateImmediateChild(e, jn.EMPTY_NODE))
                }), this.indexedFilter_.updateFullNode(e, r, n)
            }, cr.prototype.updatePriority = function(e, t) {
                return e
            }, cr.prototype.filtersNodes = function() {
                return !0
            }, cr.prototype.getIndexedFilter = function() {
                return this.indexedFilter_
            }, cr.prototype.getIndex = function() {
                return this.index_
            }, cr.getStartPost_ = function(e) {
                if (e.hasStart()) {
                    var t = e.getIndexStartName();
                    return e.getIndex().makePost(e.getIndexStartValue(), t)
                }
                return e.getIndex().minPost()
            }, cr.getEndPost_ = function(e) {
                if (e.hasEnd()) {
                    var t = e.getIndexEndName();
                    return e.getIndex().makePost(e.getIndexEndValue(), t)
                }
                return e.getIndex().maxPost()
            }, cr);

            function cr(e) {
                this.indexedFilter_ = new ur(e.getIndex()), this.index_ = e.getIndex(), this.startPost_ = cr.getStartPost_(e), this.endPost_ = cr.getEndPost_(e)
            }
            var pr = (dr.prototype.updateChild = function(e, t, n, r, i, o) {
                return this.rangedFilter_.matches(new nn(t, n)) || (n = jn.EMPTY_NODE), e.getImmediateChild(t).equals(n) ? e : e.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(e, t, n, r, i, o) : this.fullLimitUpdateChild_(e, t, n, i, o)
            }, dr.prototype.updateFullNode = function(e, t, n) {
                if (t.isLeafNode() || t.isEmpty()) r = jn.EMPTY_NODE.withIndex(this.index_);
                else if (2 * this.limit_ < t.numChildren() && t.isIndexed(this.index_)) {
                    var r = jn.EMPTY_NODE.withIndex(this.index_),
                        i = void 0;
                    i = this.reverse_ ? t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_) : t.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
                    for (var o = 0; i.hasNext() && o < this.limit_;) {
                        var a = i.getNext();
                        if (!(this.reverse_ ? this.index_.compare(this.rangedFilter_.getStartPost(), a) <= 0 : this.index_.compare(a, this.rangedFilter_.getEndPost()) <= 0)) break;
                        r = r.updateImmediateChild(a.name, a.node), o++
                    }
                } else {
                    r = (r = t.withIndex(this.index_)).updatePriority(jn.EMPTY_NODE);
                    var s, u = void 0,
                        l = void 0,
                        h = void 0,
                        i = void 0;
                    h = this.reverse_ ? (i = r.getReverseIterator(this.index_), u = this.rangedFilter_.getEndPost(), l = this.rangedFilter_.getStartPost(), s = this.index_.getCompare(), function(e, t) {
                        return s(t, e)
                    }) : (i = r.getIterator(this.index_), u = this.rangedFilter_.getStartPost(), l = this.rangedFilter_.getEndPost(), this.index_.getCompare());
                    for (var o = 0, c = !1; i.hasNext();) {
                        a = i.getNext();
                        (c = !c && h(u, a) <= 0 ? !0 : c) && o < this.limit_ && h(a, l) <= 0 ? o++ : r = r.updateImmediateChild(a.name, jn.EMPTY_NODE)
                    }
                }
                return this.rangedFilter_.getIndexedFilter().updateFullNode(e, r, n)
            }, dr.prototype.updatePriority = function(e, t) {
                return e
            }, dr.prototype.filtersNodes = function() {
                return !0
            }, dr.prototype.getIndexedFilter = function() {
                return this.rangedFilter_.getIndexedFilter()
            }, dr.prototype.getIndex = function() {
                return this.index_
            }, dr.prototype.fullLimitUpdateChild_ = function(e, t, n, r, i) {
                var o, a;
                a = this.reverse_ ? (o = this.index_.getCompare(), function(e, t) {
                    return o(t, e)
                }) : this.index_.getCompare();
                var s = e;
                g(s.numChildren() === this.limit_, "");
                var u = new nn(t, n),
                    l = this.reverse_ ? s.getFirstChild(this.index_) : s.getLastChild(this.index_),
                    h = this.rangedFilter_.matches(u);
                if (s.hasChild(t)) {
                    for (var c = s.getImmediateChild(t), p = r.getChildAfterChild(this.index_, l, this.reverse_); null != p && (p.name === t || s.hasChild(p.name));) p = r.getChildAfterChild(this.index_, p, this.reverse_);
                    var d = null == p ? 1 : a(p, u);
                    if (h && !n.isEmpty() && 0 <= d) return null != i && i.trackChildChange(sr(t, n, c)), s.updateImmediateChild(t, n);
                    null != i && i.trackChildChange(ar(t, c));
                    c = s.updateImmediateChild(t, jn.EMPTY_NODE);
                    return null != p && this.rangedFilter_.matches(p) ? (null != i && i.trackChildChange(or(p.name, p.node)), c.updateImmediateChild(p.name, p.node)) : c
                }
                return !n.isEmpty() && h && 0 <= a(l, u) ? (null != i && (i.trackChildChange(ar(l.name, l.node)), i.trackChildChange(or(t, n))), s.updateImmediateChild(t, n).updateImmediateChild(l.name, jn.EMPTY_NODE)) : e
            }, dr);

            function dr(e) {
                this.rangedFilter_ = new hr(e), this.index_ = e.getIndex(), this.limit_ = e.getLimit(), this.reverse_ = !e.isViewFromLeft()
            }
            var fr = (_r.prototype.hasStart = function() {
                return this.startSet_
            }, _r.prototype.hasStartAfter = function() {
                return this.startAfterSet_
            }, _r.prototype.hasEndBefore = function() {
                return this.endBeforeSet_
            }, _r.prototype.isViewFromLeft = function() {
                return "" === this.viewFrom_ ? this.startSet_ : "l" === this.viewFrom_
            }, _r.prototype.getIndexStartValue = function() {
                return g(this.startSet_, "Only valid if start has been set"), this.indexStartValue_
            }, _r.prototype.getIndexStartName = function() {
                return g(this.startSet_, "Only valid if start has been set"), this.startNameSet_ ? this.indexStartName_ : Re
            }, _r.prototype.hasEnd = function() {
                return this.endSet_
            }, _r.prototype.getIndexEndValue = function() {
                return g(this.endSet_, "Only valid if end has been set"), this.indexEndValue_
            }, _r.prototype.getIndexEndName = function() {
                return g(this.endSet_, "Only valid if end has been set"), this.endNameSet_ ? this.indexEndName_ : Oe
            }, _r.prototype.hasLimit = function() {
                return this.limitSet_
            }, _r.prototype.hasAnchoredLimit = function() {
                return this.limitSet_ && "" !== this.viewFrom_
            }, _r.prototype.getLimit = function() {
                return g(this.limitSet_, "Only valid if limit has been set"), this.limit_
            }, _r.prototype.getIndex = function() {
                return this.index_
            }, _r.prototype.loadsAllData = function() {
                return !(this.startSet_ || this.endSet_ || this.limitSet_)
            }, _r.prototype.isDefault = function() {
                return this.loadsAllData() && this.index_ === Nn
            }, _r.prototype.copy = function() {
                var e = new _r;
                return e.limitSet_ = this.limitSet_, e.limit_ = this.limit_, e.startSet_ = this.startSet_, e.indexStartValue_ = this.indexStartValue_, e.startNameSet_ = this.startNameSet_, e.indexStartName_ = this.indexStartName_, e.endSet_ = this.endSet_, e.indexEndValue_ = this.indexEndValue_, e.endNameSet_ = this.endNameSet_, e.indexEndName_ = this.indexEndName_, e.index_ = this.index_, e.viewFrom_ = this.viewFrom_, e
            }, _r);

            function _r() {
                this.limitSet_ = !1, this.startSet_ = !1, this.startNameSet_ = !1, this.startAfterSet_ = !1, this.endSet_ = !1, this.endNameSet_ = !1, this.endBeforeSet_ = !1, this.limit_ = 0, this.viewFrom_ = "", this.indexStartValue_ = null, this.indexStartName_ = "", this.indexEndValue_ = null, this.indexEndName_ = "", this.index_ = Nn
            }

            function yr(e, t, n) {
                e = e.copy();
                return e.startSet_ = !0, e.indexStartValue_ = t = void 0 === t ? null : t, null != n ? (e.startNameSet_ = !0, e.indexStartName_ = n) : (e.startNameSet_ = !1, e.indexStartName_ = ""), e
            }

            function vr(e, t, n) {
                e = e.copy();
                return e.endSet_ = !0, e.indexEndValue_ = t = void 0 === t ? null : t, void 0 !== n ? (e.endNameSet_ = !0, e.indexEndName_ = n) : (e.endNameSet_ = !1, e.indexEndName_ = ""), e
            }

            function gr(e, t) {
                e = e.copy();
                return e.index_ = t, e
            }

            function mr(e) {
                var t, n = {};
                return e.isDefault() || (t = e.index_ === Nn ? "$priority" : e.index_ === tr ? "$value" : e.index_ === ln ? "$key" : (g(e.index_ instanceof Kn, "Unrecognized index type!"), e.index_.toString()), n.orderBy = x(t), e.startSet_ && (n.startAt = x(e.indexStartValue_), e.startNameSet_ && (n.startAt += "," + x(e.indexStartName_))), e.endSet_ && (n.endAt = x(e.indexEndValue_), e.endNameSet_ && (n.endAt += "," + x(e.indexEndName_))), e.limitSet_ && (e.isViewFromLeft() ? n.limitToFirst = e.limit_ : n.limitToLast = e.limit_)), n
            }

            function wr(e) {
                var t, n = {};
                return e.startSet_ && (n.sp = e.indexStartValue_, e.startNameSet_ && (n.sn = e.indexStartName_)), e.endSet_ && (n.ep = e.indexEndValue_, e.endNameSet_ && (n.en = e.indexEndName_)), e.limitSet_ && (n.l = e.limit_, "" === (t = e.viewFrom_) && (t = e.isViewFromLeft() ? "l" : "r"), n.vf = t), e.index_ !== Nn && (n.i = e.index_.toString()), n
            }
            var Cr, br = (n(Tr, Cr = Ct), Tr.prototype.reportStats = function(e) {
                throw new Error("Method not implemented.")
            }, Tr.getListenId_ = function(e, t) {
                return void 0 !== t ? "tag$" + t : (g(e._queryParams.isDefault(), "should have a tag if it's not a default query."), e._path.toString())
            }, Tr.prototype.listen = function(e, t, n, r) {
                var i = this,
                    o = e._path.toString();
                this.log_("Listen called for " + o + " " + e._queryIdentifier);
                var a = Tr.getListenId_(e, n),
                    s = {};
                this.listens_[a] = s;
                e = mr(e._queryParams);
                this.restRequest_(o + ".json", e, function(e, t) {
                    null === (e = 404 === e ? t = null : e) && i.onDataUpdate_(o, t, !1, n), D(i.listens_, a) === s && r(e ? 401 === e ? "permission_denied" : "rest_error:" + e : "ok", null)
                })
            }, Tr.prototype.unlisten = function(e, t) {
                t = Tr.getListenId_(e, t);
                delete this.listens_[t]
            }, Tr.prototype.get = function(e) {
                var n = this,
                    t = mr(e._queryParams),
                    r = e._path.toString(),
                    i = new f;
                return this.restRequest_(r + ".json", t, function(e, t) {
                    null === (e = 404 === e ? t = null : e) ? (n.onDataUpdate_(r, t, !1, null), i.resolve(t)) : i.reject(new Error(t))
                }), i.promise
            }, Tr.prototype.refreshAuthToken = function(e) {}, Tr.prototype.restRequest_ = function(i, o, a) {
                var s = this;
                return (o = void 0 === o ? {} : o).format = "export", Promise.all([this.authTokenProvider_.getToken(!1), this.appCheckTokenProvider_.getToken(!1)]).then(function(e) {
                    var t = y(e, 2),
                        e = t[0],
                        t = t[1];
                    e && e.accessToken && (o.auth = e.accessToken), t && t.token && (o.ac = t.token);
                    var n = (s.repoInfo_.secure ? "https://" : "http://") + s.repoInfo_.host + i + "?ns=" + s.repoInfo_.namespace + M(o);
                    s.log_("Sending REST request for " + n);
                    var r = new XMLHttpRequest;
                    r.onreadystatechange = function() {
                        if (a && 4 === r.readyState) {
                            s.log_("REST Response for " + n + " received. status:", r.status, "response:", r.responseText);
                            var e = null;
                            if (200 <= r.status && r.status < 300) {
                                try {
                                    e = N(r.responseText)
                                } catch (e) {
                                    xe("Failed to parse JSON response for " + n + ": " + r.responseText)
                                }
                                a(null, e)
                            } else 401 !== r.status && 404 !== r.status && xe("Got unsuccessful REST response for " + n + " Status: " + r.status), a(r.status);
                            a = null
                        }
                    }, r.open("GET", n, !0), r.send()
                })
            }, Tr);

            function Tr(e, t, n, r) {
                var i = Cr.call(this) || this;
                return i.repoInfo_ = e, i.onDataUpdate_ = t, i.authTokenProvider_ = n, i.appCheckTokenProvider_ = r, i.log_ = Pe("p:rest:"), i.listens_ = {}, i
            }
            var Er = (Ir.prototype.getNode = function(e) {
                return this.rootNode_.getChild(e)
            }, Ir.prototype.updateSnapshot = function(e, t) {
                this.rootNode_ = this.rootNode_.updateChild(e, t)
            }, Ir);

            function Ir() {
                this.rootNode_ = jn.EMPTY_NODE
            }

            function Sr() {
                return {
                    value: null,
                    children: new Map
                }
            }

            function kr(e, t, n) {
                var r;
                jt(t) ? (e.value = n, e.children.clear()) : null !== e.value ? e.value = e.value.updateChild(t, n) : (r = Dt(t), e.children.has(r) || e.children.set(r, Sr()), kr(e.children.get(r), t = Lt(t), n))
            }

            function Pr(e, n, r) {
                var i;
                null !== e.value ? r(n, e.value) : (i = function(e, t) {
                    Pr(t, new xt(n.toString() + "/" + e), r)
                }, e.children.forEach(function(e, t) {
                    i(t, e)
                }))
            }
            var Nr = (xr.prototype.get = function() {
                var e = this.collection_.get(),
                    n = l({}, e);
                return this.last_ && Le(this.last_, function(e, t) {
                    n[e] = n[e] - t
                }), this.last_ = e, n
            }, xr);

            function xr(e) {
                this.collection_ = e, this.last_ = null
            }
            var Rr, Or = (Dr.prototype.reportStats_ = function() {
                var n = this,
                    e = this.statsListener_.get(),
                    r = {},
                    i = !1;
                Le(e, function(e, t) {
                    0 < t && O(n.statsToReport_, e) && (r[e] = t, i = !0)
                }), i && this.server_.reportStats(r), Fe(this.reportStats_.bind(this), Math.floor(2 * Math.random() * 3e5))
            }, Dr);

            function Dr(e, t) {
                this.server_ = t, this.statsToReport_ = {}, this.statsListener_ = new Nr(e);
                e = 1e4 + 2e4 * Math.random();
                Fe(this.reportStats_.bind(this), Math.floor(e))
            }

            function Ar() {
                return {
                    fromUser: !0,
                    fromServer: !1,
                    queryId: null,
                    tagged: !1
                }
            }

            function Lr() {
                return {
                    fromUser: !1,
                    fromServer: !0,
                    queryId: null,
                    tagged: !1
                }
            }

            function Mr(e) {
                return {
                    fromUser: !1,
                    fromServer: !0,
                    queryId: e,
                    tagged: !0
                }
            }(Ct = Rr = Rr || {})[Ct.OVERWRITE = 0] = "OVERWRITE", Ct[Ct.MERGE = 1] = "MERGE", Ct[Ct.ACK_USER_WRITE = 2] = "ACK_USER_WRITE", Ct[Ct.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE";
            var Fr = (qr.prototype.operationForChild = function(e) {
                if (jt(this.path)) {
                    if (null != this.affectedTree.value) return g(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."), this;
                    var t = this.affectedTree.subtree(new xt(e));
                    return new qr(Ot(), t, this.revert)
                }
                return g(Dt(this.path) === e, "operationForChild called for unrelated child."), new qr(Lt(this.path), this.affectedTree, this.revert)
            }, qr);

            function qr(e, t, n) {
                this.path = e, this.affectedTree = t, this.revert = n, this.type = Rr.ACK_USER_WRITE, this.source = Ar()
            }
            var Wr = (jr.prototype.operationForChild = function(e) {
                return jt(this.path) ? new jr(this.source, Ot()) : new jr(this.source, Lt(this.path))
            }, jr);

            function jr(e, t) {
                this.source = e, this.path = t, this.type = Rr.LISTEN_COMPLETE
            }
            var Ur = (Br.prototype.operationForChild = function(e) {
                return jt(this.path) ? new Br(this.source, Ot(), this.snap.getImmediateChild(e)) : new Br(this.source, Lt(this.path), this.snap)
            }, Br);

            function Br(e, t, n) {
                this.source = e, this.path = t, this.snap = n, this.type = Rr.OVERWRITE
            }
            var Vr = (zr.prototype.operationForChild = function(e) {
                if (jt(this.path)) {
                    var t = this.children.subtree(new xt(e));
                    return t.isEmpty() ? null : t.value ? new Ur(this.source, Ot(), t.value) : new zr(this.source, Ot(), t)
                }
                return g(Dt(this.path) === e, "Can't get a merge for a child not on the path of the operation"), new zr(this.source, Lt(this.path), this.children)
            }, zr.prototype.toString = function() {
                return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")"
            }, zr);

            function zr(e, t, n) {
                this.source = e, this.path = t, this.children = n, this.type = Rr.MERGE
            }
            var Hr = (Qr.prototype.isFullyInitialized = function() {
                return this.fullyInitialized_
            }, Qr.prototype.isFiltered = function() {
                return this.filtered_
            }, Qr.prototype.isCompleteForPath = function(e) {
                if (jt(e)) return this.isFullyInitialized() && !this.filtered_;
                e = Dt(e);
                return this.isCompleteForChild(e)
            }, Qr.prototype.isCompleteForChild = function(e) {
                return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(e)
            }, Qr.prototype.getNode = function() {
                return this.node_
            }, Qr);

            function Qr(e, t, n) {
                this.node_ = e, this.fullyInitialized_ = t, this.filtered_ = n
            }
            var Yr, Kr = function(e) {
                this.query_ = e, this.index_ = this.query_._queryParams.getIndex()
            };

            function Gr(n, e, t, r) {
                var i = [],
                    o = [];
                return e.forEach(function(e) {
                    var t;
                    "child_changed" === e.type && n.index_.indexedValueChanged(e.oldSnap, e.snapshotNode) && o.push((t = e.childName, {
                        type: "child_moved",
                        snapshotNode: e.snapshotNode,
                        childName: t
                    }))
                }), $r(n, i, "child_removed", e, r, t), $r(n, i, "child_added", e, r, t), $r(n, i, "child_moved", o, r, t), $r(n, i, "child_changed", e, r, t), $r(n, i, "value", e, r, t), i
            }

            function $r(o, a, t, e, s, u) {
                e = e.filter(function(e) {
                    return e.type === t
                });
                e.sort(function(e, t) {
                    return function(e, t, n) {
                        if (null == t.childName || null == n.childName) throw m("Should only compare child_ events.");
                        t = new nn(t.childName, t.snapshotNode), n = new nn(n.childName, n.snapshotNode);
                        return e.index_.compare(t, n)
                    }(o, e, t)
                }), e.forEach(function(t) {
                    var e, n, r, i = (e = o, r = u, "value" === (n = t).type || "child_removed" === n.type || (n.prevName = r.getPredecessorChildName(n.childName, n.snapshotNode, e.index_)), n);
                    s.forEach(function(e) {
                        e.respondsTo(t.type) && a.push(e.createEvent(i, o.query_))
                    })
                })
            }

            function Jr(e, t) {
                return {
                    eventCache: e,
                    serverCache: t
                }
            }

            function Xr(e, t, n, r) {
                return Jr(new Hr(t, n, r), e.serverCache)
            }

            function Zr(e, t, n, r) {
                return Jr(e.eventCache, new Hr(t, n, r))
            }

            function ei(e) {
                return e.eventCache.isFullyInitialized() ? e.eventCache.getNode() : null
            }

            function ti(e) {
                return e.serverCache.isFullyInitialized() ? e.serverCache.getNode() : null
            }
            var ni = (ri.fromObject = function(e) {
                var n = new ri(null);
                return Le(e, function(e, t) {
                    n = n.set(new xt(e), t)
                }), n
            }, ri.prototype.isEmpty = function() {
                return null === this.value && this.children.isEmpty()
            }, ri.prototype.findRootMostMatchingPathAndValue = function(e, t) {
                if (null != this.value && t(this.value)) return {
                    path: Ot(),
                    value: this.value
                };
                if (jt(e)) return null;
                var n = Dt(e),
                    r = this.children.get(n);
                if (null === r) return null;
                t = r.findRootMostMatchingPathAndValue(Lt(e), t);
                return null == t ? null : {
                    path: Wt(new xt(n), t.path),
                    value: t.value
                }
            }, ri.prototype.findRootMostValueAndPath = function(e) {
                return this.findRootMostMatchingPathAndValue(e, function() {
                    return !0
                })
            }, ri.prototype.subtree = function(e) {
                if (jt(e)) return this;
                var t = Dt(e),
                    t = this.children.get(t);
                return null !== t ? t.subtree(Lt(e)) : new ri(null)
            }, ri.prototype.set = function(e, t) {
                if (jt(e)) return new ri(t, this.children);
                var n = Dt(e),
                    t = (this.children.get(n) || new ri(null)).set(Lt(e), t),
                    t = this.children.insert(n, t);
                return new ri(this.value, t)
            }, ri.prototype.remove = function(e) {
                if (jt(e)) return this.children.isEmpty() ? new ri(null) : new ri(null, this.children);
                var t = Dt(e),
                    n = this.children.get(t);
                if (n) {
                    n = n.remove(Lt(e)), e = void 0, e = n.isEmpty() ? this.children.remove(t) : this.children.insert(t, n);
                    return null === this.value && e.isEmpty() ? new ri(null) : new ri(this.value, e)
                }
                return this
            }, ri.prototype.get = function(e) {
                if (jt(e)) return this.value;
                var t = Dt(e),
                    t = this.children.get(t);
                return t ? t.get(Lt(e)) : null
            }, ri.prototype.setTree = function(e, t) {
                if (jt(e)) return t;
                var n = Dt(e),
                    e = (this.children.get(n) || new ri(null)).setTree(Lt(e), t),
                    t = void 0,
                    t = e.isEmpty() ? this.children.remove(n) : this.children.insert(n, e);
                return new ri(this.value, t)
            }, ri.prototype.fold = function(e) {
                return this.fold_(Ot(), e)
            }, ri.prototype.fold_ = function(n, r) {
                var i = {};
                return this.children.inorderTraversal(function(e, t) {
                    i[e] = t.fold_(Wt(n, e), r)
                }), r(n, this.value, i)
            }, ri.prototype.findOnPath = function(e, t) {
                return this.findOnPath_(e, Ot(), t)
            }, ri.prototype.findOnPath_ = function(e, t, n) {
                var r = !!this.value && n(t, this.value);
                if (r) return r;
                if (jt(e)) return null;
                var i = Dt(e),
                    r = this.children.get(i);
                return r ? r.findOnPath_(Lt(e), Wt(t, i), n) : null
            }, ri.prototype.foreachOnPath = function(e, t) {
                return this.foreachOnPath_(e, Ot(), t)
            }, ri.prototype.foreachOnPath_ = function(e, t, n) {
                if (jt(e)) return this;
                this.value && n(t, this.value);
                var r = Dt(e),
                    i = this.children.get(r);
                return i ? i.foreachOnPath_(Lt(e), Wt(t, r), n) : new ri(null)
            }, ri.prototype.foreach = function(e) {
                this.foreach_(Ot(), e)
            }, ri.prototype.foreach_ = function(n, r) {
                this.children.inorderTraversal(function(e, t) {
                    t.foreach_(Wt(n, e), r)
                }), this.value && r(n, this.value)
            }, ri.prototype.foreachChild = function(n) {
                this.children.inorderTraversal(function(e, t) {
                    t.value && n(e, t.value)
                })
            }, ri);

            function ri(e, t) {
                void 0 === t && (t = Yr = Yr || new yn(_e)), this.value = e, this.children = t
            }
            var ii = (oi.empty = function() {
                return new oi(new ni(null))
            }, oi);

            function oi(e) {
                this.writeTree_ = e
            }

            function ai(e, t, n) {
                if (jt(t)) return new ii(new ni(n));
                var r = e.writeTree_.findRootMostValueAndPath(t);
                if (null != r) {
                    var i = r.path,
                        o = r.value,
                        r = Ut(i, t),
                        o = o.updateChild(r, n);
                    return new ii(e.writeTree_.set(i, o))
                }
                n = new ni(n), n = e.writeTree_.setTree(t, n);
                return new ii(n)
            }

            function si(e, n, t) {
                var r = e;
                return Le(t, function(e, t) {
                    r = ai(r, Wt(n, e), t)
                }), r
            }

            function ui(e, t) {
                if (jt(t)) return ii.empty();
                t = e.writeTree_.setTree(t, new ni(null));
                return new ii(t)
            }

            function li(e, t) {
                return null != hi(e, t)
            }

            function hi(e, t) {
                var n = e.writeTree_.findRootMostValueAndPath(t);
                return null != n ? e.writeTree_.get(n.path).getChild(Ut(n.path, t)) : null
            }

            function ci(e) {
                var n = [],
                    t = e.writeTree_.value;
                return null != t ? t.isLeafNode() || t.forEachChild(Nn, function(e, t) {
                    n.push(new nn(e, t))
                }) : e.writeTree_.children.inorderTraversal(function(e, t) {
                    null != t.value && n.push(new nn(e, t.value))
                }), n
            }

            function pi(e, t) {
                if (jt(t)) return e;
                var n = hi(e, t);
                return new ii(null != n ? new ni(n) : e.writeTree_.subtree(t))
            }

            function di(e) {
                return e.writeTree_.isEmpty()
            }

            function fi(e, t) {
                return function n(r, e, i) {
                    {
                        if (null != e.value) return i.updateChild(r, e.value);
                        var o = null;
                        return e.children.inorderTraversal(function(e, t) {
                            ".priority" === e ? (g(null !== t.value, "Priority writes must always be leaf nodes"), o = t.value) : i = n(Wt(r, e), t, i)
                        }), i = !i.getChild(r).isEmpty() && null !== o ? i.updateChild(Wt(r, ".priority"), o) : i
                    }
                }(Ot(), e.writeTree_, t)
            }

            function _i(e, t) {
                return ki(t, e)
            }

            function yi(t, n) {
                var e = t.allWrites.findIndex(function(e) {
                    return e.writeId === n
                });
                g(0 <= e, "removeWrite called with nonexistent writeId.");
                var r = t.allWrites[e];
                t.allWrites.splice(e, 1);
                for (var i, o = r.visible, a = !1, s = t.allWrites.length - 1; o && 0 <= s;) {
                    var u = t.allWrites[s];
                    u.visible && (e <= s && function(e, t) {
                        {
                            if (e.snap) return zt(e.path, t);
                            for (var n in e.children)
                                if (e.children.hasOwnProperty(n) && zt(Wt(e.path, n), t)) return !0;
                            return !1
                        }
                    }(u, r.path) ? o = !1 : zt(r.path, u.path) && (a = !0)), s--
                }
                return !!o && (a ? ((i = t).visibleWrites = gi(i.allWrites, vi, Ot()), 0 < i.allWrites.length ? i.lastWriteId = i.allWrites[i.allWrites.length - 1].writeId : i.lastWriteId = -1) : r.snap ? t.visibleWrites = ui(t.visibleWrites, r.path) : Le(r.children, function(e) {
                    t.visibleWrites = ui(t.visibleWrites, Wt(r.path, e))
                }), !0)
            }

            function vi(e) {
                return e.visible
            }

            function gi(e, t, n) {
                for (var r = ii.empty(), i = 0; i < e.length; ++i) {
                    var o = e[i];
                    if (t(o)) {
                        var a = o.path,
                            s = void 0;
                        if (o.snap) zt(n, a) ? r = ai(r, s = Ut(n, a), o.snap) : zt(a, n) && (s = Ut(a, n), r = ai(r, Ot(), o.snap.getChild(s)));
                        else {
                            if (!o.children) throw m("WriteRecord should have .snap or .children");
                            zt(n, a) ? r = si(r, s = Ut(n, a), o.children) : zt(a, n) && (jt(s = Ut(a, n)) ? r = si(r, Ot(), o.children) : (o = D(o.children, Dt(s))) && (s = o.getChild(Lt(s)), r = ai(r, Ot(), s)))
                        }
                    }
                }
                return r
            }

            function mi(e, t, n, r, i) {
                if (r || i) {
                    var o = pi(e.visibleWrites, t);
                    if (!i && di(o)) return n;
                    if (i || null != n || li(o, Ot())) return fi(gi(e.allWrites, function(e) {
                        return (e.visible || i) && (!r || !~r.indexOf(e.writeId)) && (zt(e.path, t) || zt(t, e.path))
                    }, t), n || jn.EMPTY_NODE);
                    return null
                }
                o = hi(e.visibleWrites, t);
                if (null != o) return o;
                e = pi(e.visibleWrites, t);
                return di(e) ? n : null != n || li(e, Ot()) ? fi(e, n || jn.EMPTY_NODE) : null
            }

            function wi(e, t, n, r) {
                return mi(e.writeTree, e.treePath, t, n, r)
            }

            function Ci(e, t) {
                return function(e, t, n) {
                    var r = jn.EMPTY_NODE,
                        i = hi(e.visibleWrites, t);
                    if (i) return i.isLeafNode() || i.forEachChild(Nn, function(e, t) {
                        r = r.updateImmediateChild(e, t)
                    }), r;
                    if (n) {
                        var o = pi(e.visibleWrites, t);
                        return n.forEachChild(Nn, function(e, t) {
                            t = fi(pi(o, new xt(e)), t);
                            r = r.updateImmediateChild(e, t)
                        }), ci(o).forEach(function(e) {
                            r = r.updateImmediateChild(e.name, e.node)
                        }), r
                    }
                    return ci(pi(e.visibleWrites, t)).forEach(function(e) {
                        r = r.updateImmediateChild(e.name, e.node)
                    }), r
                }(e.writeTree, e.treePath, t)
            }

            function bi(e, t, n, r) {
                return i = e.writeTree, e = e.treePath, t = t, r = r, g(n || r, "Either existingEventSnap or existingServerSnap must exist"), e = Wt(e, t), li(i.visibleWrites, e) ? null : di(e = pi(i.visibleWrites, e)) ? r.getChild(t) : fi(e, r.getChild(t));
                var i
            }

            function Ti(e, t) {
                return n = e.writeTree, t = Wt(e.treePath, t), hi(n.visibleWrites, t);
                var n
            }

            function Ei(e, t, n, r, i, o) {
                return function(e, t, n, r, i, o, a) {
                    var s, e = pi(e.visibleWrites, t);
                    if (null != (t = hi(e, Ot()))) s = t;
                    else {
                        if (null == n) return [];
                        s = fi(e, n)
                    }
                    if ((s = s.withIndex(a)).isEmpty() || s.isLeafNode()) return [];
                    for (var u = [], l = a.getCompare(), h = o ? s.getReverseIteratorFrom(r, a) : s.getIteratorFrom(r, a), c = h.getNext(); c && u.length < i;) 0 !== l(c, r) && u.push(c), c = h.getNext();
                    return u
                }(e.writeTree, e.treePath, t, n, r, i, o)
            }

            function Ii(e, t, n) {
                return r = e.writeTree, i = e.treePath, e = n, t = Wt(i, n = t), null != (i = hi(r.visibleWrites, t)) ? i : e.isCompleteForChild(n) ? fi(pi(r.visibleWrites, t), e.getNode().getImmediateChild(n)) : null;
                var r, i
            }

            function Si(e, t) {
                return ki(Wt(e.treePath, t), e.writeTree)
            }

            function ki(e, t) {
                return {
                    treePath: e,
                    writeTree: t
                }
            }
            var Pi = (Ni.prototype.trackChildChange = function(e) {
                var t = e.type,
                    n = e.childName;
                g("child_added" === t || "child_changed" === t || "child_removed" === t, "Only child changes supported for tracking"), g(".priority" !== n, "Only non-priority child changes can be tracked.");
                var r = this.changeMap.get(n);
                if (r) {
                    var i = r.type;
                    if ("child_added" === t && "child_removed" === i) this.changeMap.set(n, sr(n, e.snapshotNode, r.snapshotNode));
                    else if ("child_removed" === t && "child_added" === i) this.changeMap.delete(n);
                    else if ("child_removed" === t && "child_changed" === i) this.changeMap.set(n, ar(n, r.oldSnap));
                    else if ("child_changed" === t && "child_added" === i) this.changeMap.set(n, or(n, e.snapshotNode));
                    else {
                        if ("child_changed" !== t || "child_changed" !== i) throw m("Illegal combination of changes: " + e + " occurred after " + r);
                        this.changeMap.set(n, sr(n, e.snapshotNode, r.oldSnap))
                    }
                } else this.changeMap.set(n, e)
            }, Ni.prototype.getChanges = function() {
                return Array.from(this.changeMap.values())
            }, Ni);

            function Ni() {
                this.changeMap = new Map
            }

            function xi() {}
            var Ri = new(xi.prototype.getCompleteChild = function(e) {
                    return null
                }, xi.prototype.getChildAfterChild = function(e, t, n) {
                    return null
                }, xi),
                Oi = (Di.prototype.getCompleteChild = function(e) {
                    var t = this.viewCache_.eventCache;
                    if (t.isCompleteForChild(e)) return t.getNode().getImmediateChild(e);
                    t = null != this.optCompleteServerCache_ ? new Hr(this.optCompleteServerCache_, !0, !1) : this.viewCache_.serverCache;
                    return Ii(this.writes_, e, t)
                }, Di.prototype.getChildAfterChild = function(e, t, n) {
                    var r = null != this.optCompleteServerCache_ ? this.optCompleteServerCache_ : ti(this.viewCache_),
                        e = Ei(this.writes_, r, t, 1, n, e);
                    return 0 === e.length ? null : e[0]
                }, Di);

            function Di(e, t, n) {
                void 0 === n && (n = null), this.writes_ = e, this.viewCache_ = t, this.optCompleteServerCache_ = n
            }

            function Ai(e, t, n, r, i) {
                var o, a, s, u, l, h, c, p, d = new Pi;
                if (n.type === Rr.OVERWRITE) var f = n,
                    _ = f.source.fromUser ? Fi(e, t, f.path, f.snap, r, i, d) : (g(f.source.fromServer, "Unknown source."), o = f.source.tagged || t.serverCache.isFiltered() && !jt(f.path), Mi(e, t, f.path, f.snap, r, i, o, d));
                else if (n.type === Rr.MERGE) {
                    var y = n;
                    _ = y.source.fromUser ? (a = e, s = t, u = y.path, f = y.children, l = r, h = i, c = d, p = s, f.foreach(function(e, t) {
                        e = Wt(u, e);
                        qi(s, Dt(e)) && (p = Fi(a, p, e, t, l, h, c))
                    }), f.foreach(function(e, t) {
                        e = Wt(u, e);
                        qi(s, Dt(e)) || (p = Fi(a, p, e, t, l, h, c))
                    }), p) : (g(y.source.fromServer, "Unknown source."), o = y.source.tagged || t.serverCache.isFiltered(), ji(e, t, y.path, y.children, r, i, o, d))
                } else if (n.type === Rr.ACK_USER_WRITE) {
                    var v = n;
                    _ = v.revert ? function(e, t, n, r, i, o) {
                        var a;
                        {
                            if (null != Ti(r, n)) return t;
                            var s, u, l = new Oi(r, t, i),
                                h = t.eventCache.getNode(),
                                i = void 0;
                            return jt(n) || ".priority" === Dt(n) ? (u = void 0, u = t.serverCache.isFullyInitialized() ? wi(r, ti(t)) : (s = t.serverCache.getNode(), g(s instanceof jn, "serverChildren would be complete if leaf node"), Ci(r, s)), i = e.filter.updateFullNode(h, u, o)) : (s = Dt(n), null == (u = Ii(r, s, t.serverCache)) && t.serverCache.isCompleteForChild(s) && (u = h.getImmediateChild(s)), (i = null != u ? e.filter.updateChild(h, s, u, Lt(n), l, o) : t.eventCache.getNode().hasChild(s) ? e.filter.updateChild(h, s, jn.EMPTY_NODE, Lt(n), l, o) : h).isEmpty() && t.serverCache.isFullyInitialized() && (a = wi(r, ti(t))).isLeafNode() && (i = e.filter.updateFullNode(i, a, o))), a = t.serverCache.isFullyInitialized() || null != Ti(r, Ot()), Xr(t, i, a, e.filter.filtersNodes())
                        }
                    }(e, t, v.path, r, i, d) : function(e, t, r, n, i, o, a) {
                        if (null != Ti(i, r)) return t;
                        var s = t.serverCache.isFiltered(),
                            u = t.serverCache;
                        {
                            if (null != n.value) {
                                if (jt(r) && u.isFullyInitialized() || u.isCompleteForPath(r)) return Mi(e, t, r, u.getNode().getChild(r), i, o, s, a);
                                if (jt(r)) {
                                    var l = new ni(null);
                                    return u.getNode().forEachChild(ln, function(e, t) {
                                        l = l.set(new xt(e), t)
                                    }), ji(e, t, r, l, i, o, s, a)
                                }
                                return t
                            }
                            var h = new ni(null);
                            return n.foreach(function(e, t) {
                                var n = Wt(r, e);
                                u.isCompleteForPath(n) && (h = h.set(e, u.getNode().getChild(n)))
                            }), ji(e, t, r, h, i, o, s, a)
                        }
                    }(e, t, v.path, v.affectedTree, r, i, d)
                } else {
                    if (n.type !== Rr.LISTEN_COMPLETE) throw m("Unknown operation type: " + n.type);
                    v = e, i = n.path, e = r, n = d, r = Zr(t, (r = t.serverCache).getNode(), r.isFullyInitialized() || jt(i), r.isFiltered()), _ = Li(v, r, i, e, Ri, n)
                }
                d = d.getChanges();
                return function(e, t, n) {
                    var r = t.eventCache;
                    {
                        var i, o;
                        r.isFullyInitialized() && (i = r.getNode().isLeafNode() || r.getNode().isEmpty(), o = ei(e), (0 < n.length || !e.eventCache.isFullyInitialized() || i && !r.getNode().equals(o) || !r.getNode().getPriority().equals(o.getPriority())) && n.push(ir(ei(t))))
                    }
                }(t, _, d), {
                    viewCache: _,
                    changes: d
                }
            }

            function Li(e, t, n, r, i, o) {
                var a = t.eventCache;
                if (null != Ti(r, n)) return t;
                var s, u, l, h, c = void 0,
                    p = void 0;
                return c = jt(n) ? (g(t.serverCache.isFullyInitialized(), "If change path is empty, we must have complete server data"), t.serverCache.isFiltered() ? (s = Ci(r, (s = ti(t)) instanceof jn ? s : jn.EMPTY_NODE), e.filter.updateFullNode(t.eventCache.getNode(), s, o)) : (u = wi(r, ti(t)), e.filter.updateFullNode(t.eventCache.getNode(), u, o))) : ".priority" === (u = Dt(n)) ? (g(1 === At(n), "Can't have a priority with additional path components"), null != (h = bi(r, n, l = a.getNode(), p = t.serverCache.getNode())) ? e.filter.updatePriority(l, h) : a.getNode()) : (l = Lt(n), h = void 0, null != (h = a.isCompleteForChild(u) ? (p = t.serverCache.getNode(), null != (p = bi(r, n, a.getNode(), p)) ? a.getNode().getImmediateChild(u).updateChild(l, p) : a.getNode().getImmediateChild(u)) : Ii(r, u, t.serverCache)) ? e.filter.updateChild(a.getNode(), u, h, l, i, o) : a.getNode()), Xr(t, c, a.isFullyInitialized() || jt(n), e.filter.filtersNodes())
            }

            function Mi(e, t, n, r, i, o, a, s) {
                var u = t.serverCache,
                    l = a ? e.filter : e.filter.getIndexedFilter();
                if (jt(n)) c = l.updateFullNode(u.getNode(), r, null);
                else if (l.filtersNodes() && !u.isFiltered()) var h = u.getNode().updateChild(n, r),
                    c = l.updateFullNode(u.getNode(), h, null);
                else {
                    a = Dt(n);
                    if (!u.isCompleteForPath(n) && 1 < At(n)) return t;
                    h = Lt(n), r = u.getNode().getImmediateChild(a).updateChild(h, r);
                    c = ".priority" === a ? l.updatePriority(u.getNode(), r) : l.updateChild(u.getNode(), a, r, h, Ri, null)
                }
                l = Zr(t, c, u.isFullyInitialized() || jt(n), l.filtersNodes());
                return Li(e, l, n, i, new Oi(i, l, o), s)
            }

            function Fi(e, t, n, r, i, o, a) {
                var s, u, l = t.eventCache,
                    h = new Oi(i, t, o);
                return jt(n) ? (u = e.filter.updateFullNode(t.eventCache.getNode(), r, a), Xr(t, u, !0, e.filter.filtersNodes())) : ".priority" === (s = Dt(n)) ? (u = e.filter.updatePriority(t.eventCache.getNode(), r), Xr(t, u, l.isFullyInitialized(), l.isFiltered())) : (i = Lt(n), o = l.getNode().getImmediateChild(s), u = void 0, u = jt(i) ? r : null != (n = h.getCompleteChild(s)) ? ".priority" === Mt(i) && n.getChild(qt(i)).isEmpty() ? n : n.updateChild(i, r) : jn.EMPTY_NODE, o.equals(u) ? t : Xr(t, e.filter.updateChild(l.getNode(), s, u, i, h, a), l.isFullyInitialized(), e.filter.filtersNodes()))
            }

            function qi(e, t) {
                return e.eventCache.isCompleteForChild(t)
            }

            function Wi(e, n, t) {
                return t.foreach(function(e, t) {
                    n = n.updateChild(e, t)
                }), n
            }

            function ji(r, i, e, t, o, a, s, u) {
                if (i.serverCache.getNode().isEmpty() && !i.serverCache.isFullyInitialized()) return i;
                var l = i,
                    t = jt(e) ? t : new ni(null).setTree(e, t),
                    h = i.serverCache.getNode();
                return t.children.inorderTraversal(function(e, t) {
                    h.hasChild(e) && (t = Wi(0, i.serverCache.getNode().getImmediateChild(e), t), l = Mi(r, l, new xt(e), t, o, a, s, u))
                }), t.children.inorderTraversal(function(e, t) {
                    var n = !i.serverCache.isCompleteForChild(e) && void 0 === t.value;
                    h.hasChild(e) || n || (t = Wi(0, i.serverCache.getNode().getImmediateChild(e), t), l = Mi(r, l, new xt(e), t, o, a, s, u))
                }), l
            }
            var Ui, Bi = (Object.defineProperty(Vi.prototype, "query", {
                get: function() {
                    return this.query_
                },
                enumerable: !1,
                configurable: !0
            }), Vi);

            function Vi(e, t) {
                this.query_ = e, this.eventRegistrations_ = [];
                var n = this.query_._queryParams,
                    r = new ur(n.getIndex()),
                    i = (o = n).loadsAllData() ? new ur(o.getIndex()) : new(o.hasLimit() ? pr : hr)(o);
                this.processor_ = {
                    filter: i
                };
                var e = t.serverCache,
                    n = t.eventCache,
                    o = r.updateFullNode(jn.EMPTY_NODE, e.getNode(), null),
                    t = i.updateFullNode(jn.EMPTY_NODE, n.getNode(), null),
                    r = new Hr(o, e.isFullyInitialized(), r.filtersNodes()),
                    i = new Hr(t, n.isFullyInitialized(), i.filtersNodes());
                this.viewCache_ = Jr(i, r), this.eventGenerator_ = new Kr(this.query_)
            }

            function zi(e) {
                return 0 === e.eventRegistrations_.length
            }

            function Hi(e, t, n) {
                var r, i = [];
                if (n && (g(null == t, "A cancel should cancel all event registrations."), r = e.query._path, e.eventRegistrations_.forEach(function(e) {
                        e = e.createCancelEvent(n, r);
                        e && i.push(e)
                    })), t) {
                    for (var o = [], a = 0; a < e.eventRegistrations_.length; ++a) {
                        var s = e.eventRegistrations_[a];
                        if (s.matches(t)) {
                            if (t.hasAnyCallback()) {
                                o = o.concat(e.eventRegistrations_.slice(a + 1));
                                break
                            }
                        } else o.push(s)
                    }
                    e.eventRegistrations_ = o
                } else e.eventRegistrations_ = [];
                return i
            }

            function Qi(e, t, n, r) {
                t.type === Rr.MERGE && null !== t.source.queryId && (g(ti(e.viewCache_), "We should always have a full cache before handling merges"), g(ei(e.viewCache_), "Missing event cache, even though we have a server cache"));
                var i = e.viewCache_,
                    t = Ai(e.processor_, i, t, n, r);
                return n = e.processor_, r = t.viewCache, g(r.eventCache.getNode().isIndexed(n.filter.getIndex()), "Event snap not indexed"), g(r.serverCache.getNode().isIndexed(n.filter.getIndex()), "Server snap not indexed"), g(t.viewCache.serverCache.isFullyInitialized() || !i.serverCache.isFullyInitialized(), "Once a server snap is complete, it should never go back"), e.viewCache_ = t.viewCache, Yi(e, t.changes, t.viewCache.eventCache.getNode(), null)
            }

            function Yi(e, t, n, r) {
                r = r ? [r] : e.eventRegistrations_;
                return Gr(e.eventGenerator_, t, n, r)
            }
            var Ki, Gi = function() {
                this.views = new Map
            };

            function $i(e, t, n, r) {
                var i, o, a = t.source.queryId;
                if (null !== a) {
                    var s = e.views.get(a);
                    return g(null != s, "SyncTree gave us an op for an invalid query."), Qi(s, t, n, r)
                }
                var u = [];
                try {
                    for (var l = _(e.views.values()), h = l.next(); !h.done; h = l.next()) s = h.value, u = u.concat(Qi(s, t, n, r))
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        h && !h.done && (o = l.return) && o.call(l)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return u
            }

            function Ji(e, t, n, r, i) {
                var o = t._queryIdentifier,
                    e = e.views.get(o);
                if (e) return e;
                o = wi(n, i ? r : null), e = !1, e = !!o || (o = r instanceof jn ? Ci(n, r) : jn.EMPTY_NODE, !1), i = Jr(new Hr(o, e, !1), new Hr(r, i, !1));
                return new Bi(t, i)
            }

            function Xi(e, t, n, r, i, o) {
                var a, o = Ji(e, t, r, i, o);
                return e.views.has(t._queryIdentifier) || e.views.set(t._queryIdentifier, o), o.eventRegistrations_.push(n), t = n, o = (n = o).viewCache_.eventCache, a = [], o.getNode().isLeafNode() || o.getNode().forEachChild(Nn, function(e, t) {
                    a.push(or(e, t))
                }), o.isFullyInitialized() && a.push(ir(o.getNode())), Yi(n, a, o.getNode(), t)
            }

            function Zi(e, t, n, r) {
                var i, o, a = t._queryIdentifier,
                    s = [],
                    u = [],
                    l = io(e);
                if ("default" === a) try {
                    for (var h = _(e.views.entries()), c = h.next(); !c.done; c = h.next()) {
                        var p = y(c.value, 2),
                            d = p[0],
                            f = p[1],
                            u = u.concat(Hi(f, n, r));
                        zi(f) && (e.views.delete(d), f.query._queryParams.loadsAllData() || s.push(f.query))
                    }
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        c && !c.done && (o = h.return) && o.call(h)
                    } finally {
                        if (i) throw i.error
                    }
                } else(f = e.views.get(a)) && (u = u.concat(Hi(f, n, r)), zi(f) && (e.views.delete(a), f.query._queryParams.loadsAllData() || s.push(f.query)));
                return l && !io(e) && s.push((g(Ui, "Reference.ts has not been loaded"), new Ui(t._repo, t._path))), {
                    removed: s,
                    events: u
                }
            }

            function eo(e) {
                var t, n, r = [];
                try {
                    for (var i = _(e.views.values()), o = i.next(); !o.done; o = i.next()) {
                        var a = o.value;
                        a.query._queryParams.loadsAllData() || r.push(a)
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        o && !o.done && (n = i.return) && n.call(i)
                    } finally {
                        if (t) throw t.error
                    }
                }
                return r
            }

            function to(e, t) {
                var n, r, i, o, a, s = null;
                try {
                    for (var u = _(e.views.values()), l = u.next(); !l.done; l = u.next()) var h = l.value,
                        s = s || (o = t, a = void 0, (a = ti((i = h).viewCache_)) && (i.query._queryParams.loadsAllData() || !jt(o) && !a.getImmediateChild(Dt(o)).isEmpty()) ? a.getChild(o) : null)
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        l && !l.done && (r = u.return) && r.call(u)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return s
            }

            function no(e, t) {
                if (t._queryParams.loadsAllData()) return oo(e);
                t = t._queryIdentifier;
                return e.views.get(t)
            }

            function ro(e, t) {
                return null != no(e, t)
            }

            function io(e) {
                return null != oo(e)
            }

            function oo(e) {
                var t, n;
                try {
                    for (var r = _(e.views.values()), i = r.next(); !i.done; i = r.next()) {
                        var o = i.value;
                        if (o.query._queryParams.loadsAllData()) return o
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (n = r.return) && n.call(r)
                    } finally {
                        if (t) throw t.error
                    }
                }
                return null
            }
            var ao = 1,
                so = function(e) {
                    this.listenProvider_ = e, this.syncPointTree_ = new ni(null), this.pendingWriteTree_ = {
                        visibleWrites: ii.empty(),
                        allWrites: [],
                        lastWriteId: -1
                    }, this.tagToQueryMap = new Map, this.queryToTagMap = new Map
                };

            function uo(e, t, n, r, i) {
                var o, a, s, u;
                return o = e.pendingWriteTree_, a = t, s = n, u = i, g((r = r) > o.lastWriteId, "Stacking an older write on top of newer ones"), o.allWrites.push({
                    path: a,
                    snap: s,
                    writeId: r,
                    visible: u = void 0 === u ? !0 : u
                }), u && (o.visibleWrites = ai(o.visibleWrites, a, s)), o.lastWriteId = r, i ? vo(e, new Ur(Ar(), t, n)) : []
            }

            function lo(e, t, n, r) {
                var i, o, a;
                i = e.pendingWriteTree_, o = t, a = n, g((r = r) > i.lastWriteId, "Stacking an older merge on top of newer ones"), i.allWrites.push({
                    path: o,
                    children: a,
                    writeId: r,
                    visible: !0
                }), i.visibleWrites = si(i.visibleWrites, o, a), i.lastWriteId = r;
                n = ni.fromObject(n);
                return vo(e, new Vr(Ar(), t, n))
            }

            function ho(e, t, n) {
                void 0 === n && (n = !1);
                var r = function(e, t) {
                    for (var n = 0; n < e.allWrites.length; n++) {
                        var r = e.allWrites[n];
                        if (r.writeId === t) return r
                    }
                    return null
                }(e.pendingWriteTree_, t);
                if (yi(e.pendingWriteTree_, t)) {
                    var i = new ni(null);
                    return null != r.snap ? i = i.set(Ot(), !0) : Le(r.children, function(e) {
                        i = i.set(new xt(e), !0)
                    }), vo(e, new Fr(r.path, i, n))
                }
                return []
            }

            function co(e, t, n) {
                return vo(e, new Ur(Lr(), t, n))
            }

            function po(n, e, t, r) {
                var i = e._path,
                    o = n.syncPointTree_.get(i),
                    a = [];
                if (o && ("default" === e._queryIdentifier || ro(o, e))) {
                    var s = Zi(o, e, t, r);
                    0 === o.views.size && (n.syncPointTree_ = n.syncPointTree_.remove(i));
                    t = s.removed, a = s.events, o = -1 !== t.findIndex(function(e) {
                        return e._queryParams.loadsAllData()
                    }), s = n.syncPointTree_.findOnPath(i, function(e, t) {
                        return io(t)
                    });
                    if (o && !s) {
                        i = n.syncPointTree_.subtree(i);
                        if (!i.isEmpty())
                            for (var u = i.fold(function(e, t, n) {
                                    if (t && io(t)) return [oo(t)];
                                    var r = [];
                                    return t && (r = eo(t)), Le(n, function(e, t) {
                                        r = r.concat(t)
                                    }), r
                                }), l = 0; l < u.length; ++l) {
                                var h = u[l],
                                    c = h.query,
                                    h = mo(n, h);
                                n.listenProvider_.startListening(Io(c), wo(n, c), h.hashFn, h.onComplete)
                            }
                    }!s && 0 < t.length && !r && (o ? n.listenProvider_.stopListening(Io(e), null) : t.forEach(function(e) {
                            var t = n.queryToTagMap.get(Co(e));
                            n.listenProvider_.stopListening(Io(e), t)
                        })),
                        function(e, t) {
                            for (var n = 0; n < t.length; ++n) {
                                var r, i = t[n];
                                i._queryParams.loadsAllData() || (r = Co(i), i = e.queryToTagMap.get(r), e.queryToTagMap.delete(r), e.tagToQueryMap.delete(i))
                            }
                        }(n, t)
                }
                return a
            }

            function fo(e, t, n) {
                var r = t._path,
                    i = null,
                    o = !1;
                e.syncPointTree_.foreachOnPath(r, function(e, t) {
                    e = Ut(e, r);
                    i = i || to(t, e), o = o || io(t)
                });
                var a = e.syncPointTree_.get(r);
                a ? (o = o || io(a), i = i || to(a, Ot())) : (a = new Gi, e.syncPointTree_ = e.syncPointTree_.set(r, a)), null != i ? h = !0 : (h = !1, i = jn.EMPTY_NODE, e.syncPointTree_.subtree(r).foreachChild(function(e, t) {
                    t = to(t, Ot());
                    t && (i = i.updateImmediateChild(e, t))
                }));
                var s, u, l = ro(a, t);
                l || t._queryParams.loadsAllData() || (s = Co(t), g(!e.queryToTagMap.has(s), "View does not exist, but we have a tag"), u = ao++, e.queryToTagMap.set(s, u), e.tagToQueryMap.set(u, s));
                var h = Xi(a, t, n, _i(e.pendingWriteTree_, r), i, h);
                return l || o || (a = no(a, t), h = h.concat(function(e, t, n) {
                    var r = t._path,
                        i = wo(e, t),
                        n = mo(e, n),
                        n = e.listenProvider_.startListening(Io(t), i, n.hashFn, n.onComplete),
                        r = e.syncPointTree_.subtree(r);
                    if (i) g(!io(r.value), "If we're adding a query, it shouldn't be shadowed");
                    else
                        for (var o = r.fold(function(e, t, n) {
                                if (!jt(e) && t && io(t)) return [oo(t).query];
                                var r = [];
                                return t && (r = r.concat(eo(t).map(function(e) {
                                    return e.query
                                }))), Le(n, function(e, t) {
                                    r = r.concat(t)
                                }), r
                            }), a = 0; a < o.length; ++a) {
                            var s = o[a];
                            e.listenProvider_.stopListening(Io(s), wo(e, s))
                        }
                    return n
                }(e, t, a))), h
            }

            function _o(e, n, t) {
                var r = e.pendingWriteTree_,
                    e = e.syncPointTree_.findOnPath(n, function(e, t) {
                        e = to(t, Ut(e, n));
                        if (e) return e
                    });
                return mi(r, n, e, t, !0)
            }

            function yo(e, t) {
                var n = t._path,
                    r = null;
                e.syncPointTree_.foreachOnPath(n, function(e, t) {
                    e = Ut(e, n);
                    r = r || to(t, e)
                });
                var i = e.syncPointTree_.get(n);
                i ? r = r || to(i, Ot()) : (i = new Gi, e.syncPointTree_ = e.syncPointTree_.set(n, i));
                var o = null != r,
                    a = o ? new Hr(r, !0, !1) : null;
                return ei(Ji(i, t, _i(e.pendingWriteTree_, t._path), o ? a.getNode() : jn.EMPTY_NODE, o).viewCache_)
            }

            function vo(e, t) {
                return function e(t, n, r, i) {
                    {
                        if (jt(t.path)) return go(t, n, r, i);
                        var o = n.get(Ot());
                        null == r && null != o && (r = to(o, Ot()));
                        var a = [],
                            s = Dt(t.path),
                            u = t.operationForChild(s),
                            l = n.children.get(s);
                        return l && u && (n = r ? r.getImmediateChild(s) : null, s = Si(i, s), a = a.concat(e(u, l, n, s))), a = o ? a.concat($i(o, t, i, r)) : a
                    }
                }(t, e.syncPointTree_, null, _i(e.pendingWriteTree_, Ot()))
            }

            function go(i, e, o, a) {
                var t = e.get(Ot());
                null == o && null != t && (o = to(t, Ot()));
                var s = [];
                return e.children.inorderTraversal(function(e, t) {
                    var n = o ? o.getImmediateChild(e) : null,
                        r = Si(a, e),
                        e = i.operationForChild(e);
                    e && (s = s.concat(go(e, t, n, r)))
                }), s = t ? s.concat($i(t, i, a, o)) : s
            }

            function mo(n, e) {
                var r = e.query,
                    i = wo(n, r);
                return {
                    hashFn: function() {
                        return (e.viewCache_.serverCache.getNode() || jn.EMPTY_NODE).hash()
                    },
                    onComplete: function(e) {
                        if ("ok" === e) return i ? function(e, t, n) {
                            var r = bo(e, n);
                            if (r) {
                                n = To(r), r = n.path, n = n.queryId, t = Ut(r, t);
                                return Eo(e, r, new Wr(Mr(n), t))
                            }
                            return []
                        }(n, r._path, i) : (t = r._path, vo(n, new Wr(Lr(), t)));
                        var t, t = (t = "Unknown Error", "too_big" === (e = e) ? t = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" === e ? t = "Client doesn't have permission to access the desired data." : "unavailable" === e && (t = "The service is unavailable"), (t = new Error(e + " at " + r._path.toString() + ": " + t)).code = e.toUpperCase(), t);
                        return po(n, r, null, t)
                    }
                }
            }

            function wo(e, t) {
                t = Co(t);
                return e.queryToTagMap.get(t)
            }

            function Co(e) {
                return e._path.toString() + "$" + e._queryIdentifier
            }

            function bo(e, t) {
                return e.tagToQueryMap.get(t)
            }

            function To(e) {
                var t = e.indexOf("$");
                return g(-1 !== t && t < e.length - 1, "Bad queryKey."), {
                    queryId: e.substr(t + 1),
                    path: new xt(e.substr(0, t))
                }
            }

            function Eo(e, t, n) {
                var r = e.syncPointTree_.get(t);
                return g(r, "Missing sync point for query tag that we're tracking"), $i(r, n, _i(e.pendingWriteTree_, t), null)
            }

            function Io(e) {
                return e._queryParams.loadsAllData() && !e._queryParams.isDefault() ? (g(Ki, "Reference.ts has not been loaded"), new Ki(e._repo, e._path)) : e
            }
            var So = (ko.prototype.getImmediateChild = function(e) {
                return new ko(this.node_.getImmediateChild(e))
            }, ko.prototype.node = function() {
                return this.node_
            }, ko);

            function ko(e) {
                this.node_ = e
            }
            var Po = (No.prototype.getImmediateChild = function(e) {
                e = Wt(this.path_, e);
                return new No(this.syncTree_, e)
            }, No.prototype.node = function() {
                return _o(this.syncTree_, this.path_)
            }, No);

            function No(e, t) {
                this.syncTree_ = e, this.path_ = t
            }
            var xo = function(e) {
                    return (e = e || {}).timestamp = e.timestamp || (new Date).getTime(), e
                },
                Ro = function(e, t, n) {
                    return e && "object" == typeof e ? (g(".sv" in e, "Unexpected leaf node or priority contents"), "string" == typeof e[".sv"] ? Oo(e[".sv"], t, n) : "object" == typeof e[".sv"] ? Do(e[".sv"], t) : void g(!1, "Unexpected server value: " + JSON.stringify(e, null, 2))) : e
                },
                Oo = function(e, t, n) {
                    if ("timestamp" === e) return n.timestamp;
                    g(!1, "Unexpected server value: " + e)
                },
                Do = function(e, t, n) {
                    e.hasOwnProperty("increment") || g(!1, "Unexpected server value: " + JSON.stringify(e, null, 2));
                    e = e.increment;
                    "number" != typeof e && g(!1, "Unexpected increment value: " + e);
                    t = t.node();
                    if (g(null != t, "Expected ChildrenNode.EMPTY_NODE for nulls"), !t.isLeafNode()) return e;
                    t = t.getValue();
                    return "number" != typeof t ? e : t + e
                },
                Ao = function(e, t, n, r) {
                    return Mo(t, new Po(n, e), r)
                },
                Lo = function(e, t, n) {
                    return Mo(e, new So(t), n)
                };

            function Mo(e, r, i) {
                var t = e.getPriority().val(),
                    n = Ro(t, r.getImmediateChild(".priority"), i);
                if (e.isLeafNode()) {
                    var o = e,
                        t = Ro(o.getValue(), r, i);
                    return t !== o.getValue() || n !== o.getPriority().val() ? new Sn(t, Hn(n)) : e
                }
                var e = e,
                    a = e;
                return n !== e.getPriority().val() && (a = a.updatePriority(new Sn(n))), e.forEachChild(Nn, function(e, t) {
                    var n = Mo(t, r.getImmediateChild(e), i);
                    n !== t && (a = a.updateImmediateChild(e, n))
                }), a
            }
            var Fo = function(e, t, n) {
                void 0 === t && (t = null), void 0 === n && (n = {
                    children: {},
                    childCount: 0
                }), this.name = e = void 0 === e ? "" : e, this.parent = t, this.node = n
            };

            function qo(e, t) {
                for (var n = t instanceof xt ? t : new xt(t), r = e, i = Dt(n); null !== i;) var o = D(r.node.children, i) || {
                        children: {},
                        childCount: 0
                    },
                    r = new Fo(i, r, o),
                    i = Dt(n = Lt(n));
                return r
            }

            function Wo(e) {
                return e.node.value
            }

            function jo(e, t) {
                e.node.value = t, zo(e)
            }

            function Uo(e) {
                return 0 < e.node.childCount
            }

            function Bo(n, r) {
                Le(n.node.children, function(e, t) {
                    r(new Fo(e, n, t))
                })
            }

            function Vo(e) {
                return new xt(null === e.parent ? e.name : Vo(e.parent) + "/" + e.name)
            }

            function zo(e) {
                var t, n, r, i;
                null !== e.parent && (t = e.parent, n = e.name, i = function(e) {
                    return void 0 === Wo(e) && !Uo(e)
                }(r = e), e = O(t.node.children, n), i && e ? (delete t.node.children[n], t.node.childCount--, zo(t)) : i || e || (t.node.children[n] = r.node, t.node.childCount++, zo(t)))
            }

            function Ho(e) {
                return "string" == typeof e && 0 !== e.length && !$o.test(e)
            }

            function Qo(e) {
                return "string" == typeof e && 0 !== e.length && !Jo.test(e)
            }

            function Yo(e, t, n, r) {
                if (!r || void 0 !== t) {
                    var i = j(e, "values");
                    if (!t || "object" != typeof t || Array.isArray(t)) throw new Error(i + " must be an object containing the children to replace.");
                    var o = [];
                    Le(t, function(e, t) {
                            e = new xt(e);
                            if (ta(i, t, Wt(n, e)), ".priority" === Mt(e) && !Zo(t)) throw new Error(i + "contains an invalid value for '" + e.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
                            o.push(e)
                        }),
                        function(e, t) {
                            for (var n = 0; n < t.length; n++)
                                for (var r, i = Ft(r = t[n]), o = 0; o < i.length; o++)
                                    if ((".priority" !== i[o] || o !== i.length - 1) && !Ho(i[o])) throw new Error(e + "contains an invalid key (" + i[o] + ") in path " + r.toString() + '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                            t.sort(Bt);
                            var a = null;
                            for (n = 0; n < t.length; n++) {
                                if (r = t[n], null !== a && zt(a, r)) throw new Error(e + "contains a path " + a.toString() + " that is ancestor of another path " + r.toString());
                                a = r
                            }
                        }(i, o)
                }
            }

            function Ko(e, t, n) {
                if (!n || void 0 !== t) {
                    if (fe(t)) throw new Error(j(e, "priority") + "is " + t.toString() + ", but must be a valid Firebase priority (a string, finite number, server value, or null).");
                    if (!Zo(t)) throw new Error(j(e, "priority") + "must be a valid Firebase priority (a string, finite number, server value, or null).")
                }
            }

            function Go(e, t, n, r) {
                if (!(r && void 0 === n || Ho(n))) throw new Error(j(e, t) + 'was an invalid key = "' + n + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')
            }
            var $o = /[\[\].#$\/\u0000-\u001F\u007F]/,
                Jo = /[\[\].#$\u0000-\u001F\u007F]/,
                Xo = 10485760,
                Zo = function(e) {
                    return null === e || "string" == typeof e || "number" == typeof e && !fe(e) || e && "object" == typeof e && O(e, ".sv")
                },
                ea = function(e, t, n, r) {
                    r && void 0 === t || ta(j(e, "value"), t, n)
                },
                ta = function(r, e, t) {
                    var i = t instanceof xt ? new Ht(t, r) : t;
                    if (void 0 === e) throw new Error(r + "contains undefined " + Yt(i));
                    if ("function" == typeof e) throw new Error(r + "contains a function " + Yt(i) + " with contents = " + e.toString());
                    if (fe(e)) throw new Error(r + "contains " + e.toString() + " " + Yt(i));
                    if ("string" == typeof e && e.length > Xo / 3 && V(e) > Xo) throw new Error(r + "contains a string greater than " + Xo + " utf8 bytes " + Yt(i) + " ('" + e.substring(0, 50) + "...')");
                    if (e && "object" == typeof e) {
                        var o = !1,
                            a = !1;
                        if (Le(e, function(e, t) {
                                if (".value" === e) o = !0;
                                else if (".priority" !== e && ".sv" !== e && (a = !0, !Ho(e))) throw new Error(r + " contains an invalid key (" + e + ") " + Yt(i) + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                                var n;
                                n = e, 0 < (e = i).parts_.length && (e.byteLength_ += 1), e.parts_.push(n), e.byteLength_ += V(n), Qt(e), ta(r, t, i), t = (e = i).parts_.pop(), e.byteLength_ -= V(t), 0 < e.parts_.length && --e.byteLength_
                            }), o && a) throw new Error(r + ' contains ".value" child ' + Yt(i) + " in addition to actual children.")
                    }
                },
                na = function(e, t, n, r) {
                    if (!(r && void 0 === n || Qo(n))) throw new Error(j(e, t) + 'was an invalid path = "' + n + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')
                },
                ra = function(e, t, n, r) {
                    n = n && n.replace(/^\/*\.info(\/|$)/, "/"), na(e, t, n, r)
                },
                ia = function(e, t) {
                    if (".info" === Dt(t)) throw new Error(e + " failed = Can't modify data under /.info/")
                },
                oa = function(e, t) {
                    var n = t.path.toString();
                    if ("string" != typeof t.repoInfo.host || 0 === t.repoInfo.host.length || !Ho(t.repoInfo.namespace) && "localhost" !== t.repoInfo.host.split(":")[0] || 0 !== n.length && (n = (n = n) && n.replace(/^\/*\.info(\/|$)/, "/"), !Qo(n))) throw new Error(j(e, "url") + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')
                },
                aa = function() {
                    this.eventLists_ = [], this.recursionDepth_ = 0
                };

            function sa(e, t) {
                for (var n = null, r = 0; r < t.length; r++) {
                    var i = t[r],
                        o = i.getPath();
                    null === n || Vt(o, n.path) || (e.eventLists_.push(n), n = null), (n = null === n ? {
                        events: [],
                        path: o
                    } : n).events.push(i)
                }
                n && e.eventLists_.push(n)
            }

            function ua(e, t, n) {
                sa(e, n), ha(e, function(e) {
                    return Vt(e, t)
                })
            }

            function la(e, t, n) {
                sa(e, n), ha(e, function(e) {
                    return zt(e, t) || zt(t, e)
                })
            }

            function ha(e, t) {
                e.recursionDepth_++;
                for (var n = !0, r = 0; r < e.eventLists_.length; r++) {
                    var i = e.eventLists_[r];
                    i && (t(i.path) ? (function(e) {
                        for (var t = 0; t < e.events.length; t++) {
                            var n, r = e.events[t];
                            null !== r && (e.events[t] = null, n = r.getEventRunner(), Ie && ke("event: " + r.toString()), Be(n))
                        }
                    }(e.eventLists_[r]), e.eventLists_[r] = null) : n = !1)
                }
                n && (e.eventLists_ = []), e.recursionDepth_--
            }
            var ca = "repo_interrupt",
                pa = 25,
                da = (fa.prototype.toString = function() {
                    return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host
                }, fa);

            function fa(e, t, n, r) {
                this.repoInfo_ = e, this.forceRestClient_ = t, this.authTokenProvider_ = n, this.appCheckProvider_ = r, this.dataUpdateCount = 0, this.statsListener_ = null, this.eventQueue_ = new aa, this.nextWriteId_ = 1, this.interceptServerDataCallback_ = null, this.onDisconnect_ = Sr(), this.transactionQueueTree_ = new Fo, this.persistentConnection_ = null, this.key = this.repoInfo_.toURLString()
            }

            function _a(a, e, t) {
                if (a.stats_ = ot(a.repoInfo_), a.forceRestClient_ || 0 <= ("object" == typeof window && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)) a.server_ = new br(a.repoInfo_, function(e, t, n, r) {
                    ga(a, e, t, n, r)
                }, a.authTokenProvider_, a.appCheckProvider_), setTimeout(function() {
                    return ma(a, !0)
                }, 0);
                else {
                    if (null != t) {
                        if ("object" != typeof t) throw new Error("Only objects are supported for option databaseAuthVariableOverride");
                        try {
                            x(t)
                        } catch (e) {
                            throw new Error("Invalid authOverride provided: " + e)
                        }
                    }
                    a.persistentConnection_ = new en(a.repoInfo_, e, function(e, t, n, r) {
                        ga(a, e, t, n, r)
                    }, function(e) {
                        ma(a, e)
                    }, function(e) {
                        var n;
                        n = a, Le(e, function(e, t) {
                            wa(n, e, t)
                        })
                    }, a.authTokenProvider_, a.appCheckProvider_, t), a.server_ = a.persistentConnection_
                }
                a.authTokenProvider_.addTokenChangeListener(function(e) {
                    a.server_.refreshAuthToken(e)
                }), a.appCheckProvider_.addTokenChangeListener(function(e) {
                    a.server_.refreshAppCheckToken(e.token)
                }), a.statsReporter_ = (e = a.repoInfo_, t = function() {
                    return new Or(a.stats_, a.server_)
                }, e = e.toString(), it[e] || (it[e] = t()), it[e]), a.infoData_ = new Er, a.infoSyncTree_ = new so({
                    startListening: function(e, t, n, r) {
                        var i = [],
                            o = a.infoData_.getNode(e._path);
                        return o.isEmpty() || (i = co(a.infoSyncTree_, e._path, o), setTimeout(function() {
                            r("ok")
                        }, 0)), i
                    },
                    stopListening: function() {}
                }), wa(a, "connected", !1), a.serverSyncTree_ = new so({
                    startListening: function(n, e, t, r) {
                        return a.server_.listen(n, t, e, function(e, t) {
                            t = r(e, t);
                            la(a.eventQueue_, n._path, t)
                        }), []
                    },
                    stopListening: function(e, t) {
                        a.server_.unlisten(e, t)
                    }
                })
            }

            function ya(e) {
                e = e.infoData_.getNode(new xt(".info/serverTimeOffset")).val() || 0;
                return (new Date).getTime() + e
            }

            function va(e) {
                return xo({
                    timestamp: ya(e)
                })
            }

            function ga(e, t, n, r, i) {
                e.dataUpdateCount++;
                var o = new xt(t);
                n = e.interceptServerDataCallback_ ? e.interceptServerDataCallback_(t, n) : n;
                var a, s, u, l, h = [],
                    t = o;
                0 < (h = i ? r ? (a = L(n, function(e) {
                    return Hn(e)
                }), function(e, t, n, r) {
                    var i = bo(e, r);
                    if (i) {
                        r = To(i), i = r.path, r = r.queryId, t = Ut(i, t), n = ni.fromObject(n);
                        return Eo(e, i, new Vr(Mr(r), t, n))
                    }
                    return []
                }(e.serverSyncTree_, o, a, i)) : (l = Hn(n), a = e.serverSyncTree_, s = o, u = l, null == (i = bo(a, l = i)) ? [] : (l = To(i), i = l.path, l = l.queryId, s = Ut(i, s), Eo(a, i, new Ur(Mr(l), s, u)))) : r ? (l = L(n, function(e) {
                    return Hn(e)
                }), s = e.serverSyncTree_, u = o, r = l, r = ni.fromObject(l), vo(s, new Vr(Lr(), u, r))) : (n = Hn(n), co(e.serverSyncTree_, o, n))).length && (t = Ra(e, o)), la(e.eventQueue_, t, h)
            }

            function ma(e, t) {
                wa(e, "connected", t), !1 === t && function(n) {
                    ka(n, "onDisconnectEvents");
                    var r = va(n),
                        i = Sr();
                    Pr(n.onDisconnect_, Ot(), function(e, t) {
                        t = Ao(e, t, n.serverSyncTree_, r);
                        kr(i, e, t)
                    });
                    var o = [];
                    Pr(i, Ot(), function(e, t) {
                        o = o.concat(co(n.serverSyncTree_, e, t));
                        e = La(n, e);
                        Ra(n, e)
                    }), n.onDisconnect_ = Sr(), la(n.eventQueue_, Ot(), o)
                }(e)
            }

            function wa(e, t, n) {
                t = new xt("/.info/" + t), n = Hn(n);
                e.infoData_.updateSnapshot(t, n);
                n = co(e.infoSyncTree_, t, n);
                la(e.eventQueue_, t, n)
            }

            function Ca(e) {
                return e.nextWriteId_++
            }

            function ba(r, i, e, t, o) {
                ka(r, "set", {
                    path: i.toString(),
                    value: e,
                    priority: t
                });
                var n = va(r),
                    e = Hn(e, t),
                    t = _o(r.serverSyncTree_, i),
                    n = Lo(e, t, n),
                    a = Ca(r),
                    n = uo(r.serverSyncTree_, i, n, a, !0);
                sa(r.eventQueue_, n), r.server_.put(i.toString(), e.val(!0), function(e, t) {
                    var n = "ok" === e;
                    n || xe("set at " + i + " failed: " + e);
                    n = ho(r.serverSyncTree_, a, !n);
                    la(r.eventQueue_, i, n), Pa(0, o, e, t)
                });
                e = La(r, i);
                Ra(r, e), la(r.eventQueue_, e, [])
            }

            function Ta(n, r, i) {
                n.server_.onDisconnectCancel(r.toString(), function(e, t) {
                    "ok" === e && ! function e(n, t) {
                        if (jt(t)) return n.value = null, n.children.clear(), !0;
                        if (null !== n.value) {
                            if (n.value.isLeafNode()) return !1;
                            var r = n.value;
                            return n.value = null, r.forEachChild(Nn, function(e, t) {
                                kr(n, new xt(e), t)
                            }), e(n, t)
                        }
                        if (0 < n.children.size) return r = Dt(t), t = Lt(t), n.children.has(r) && e(n.children.get(r), t) && n.children.delete(r), 0 === n.children.size;
                        return !0
                    }(n.onDisconnect_, r), Pa(0, i, e, t)
                })
            }

            function Ea(n, r, e, i) {
                var o = Hn(e);
                n.server_.onDisconnectPut(r.toString(), o.val(!0), function(e, t) {
                    "ok" === e && kr(n.onDisconnect_, r, o), Pa(0, i, e, t)
                })
            }

            function Ia(e, t, n) {
                n = ".info" === Dt(t._path) ? po(e.infoSyncTree_, t, n) : po(e.serverSyncTree_, t, n);
                ua(e.eventQueue_, t._path, n)
            }

            function Sa(e) {
                e.persistentConnection_ && e.persistentConnection_.interrupt(ca)
            }

            function ka(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                var r = "";
                e.persistentConnection_ && (r = e.persistentConnection_.id + ":"), ke.apply(void 0, a([r], y(t)))
            }

            function Pa(e, n, r, i) {
                n && Be(function() {
                    var e, t;
                    "ok" === r ? n(null) : (t = e = (r || "error").toUpperCase(), i && (t += ": " + i), (t = new Error(t)).code = e, n(t))
                })
            }

            function Na(e, t, n) {
                return _o(e.serverSyncTree_, t, n) || jn.EMPTY_NODE
            }

            function xa(t, e) {
                var n;
                (e = void 0 === e ? t.transactionQueueTree_ : e) || Aa(t, e), Wo(e) ? (n = Da(t, e), g(0 < n.length, "Sending zero length transaction queue"), n.every(function(e) {
                    return 0 === e.status
                }) && function(i, o, a) {
                    for (var e = a.map(function(e) {
                            return e.currentWriteId
                        }), t = Na(i, o, e), n = t, e = t.hash(), r = 0; r < a.length; r++) {
                        var s = a[r];
                        g(0 === s.status, "tryToSendTransactionQueue_: items in queue should all be run."), s.status = 1, s.retryCount++;
                        var u = Ut(o, s.path);
                        n = n.updateChild(u, s.currentOutputSnapshotRaw)
                    }
                    var t = n.val(!0),
                        l = o;
                    i.server_.put(l.toString(), t, function(e) {
                        ka(i, "transaction put response", {
                            path: l.toString(),
                            status: e
                        });
                        var t = [];
                        if ("ok" === e) {
                            for (var n = [], r = 0; r < a.length; r++) ! function(e) {
                                a[e].status = 2, t = t.concat(ho(i.serverSyncTree_, a[e].currentWriteId)), a[e].onComplete && n.push(function() {
                                    return a[e].onComplete(null, !0, a[e].currentOutputSnapshotResolved)
                                }), a[e].unwatcher()
                            }(r);
                            Aa(i, qo(i.transactionQueueTree_, o)), xa(i, i.transactionQueueTree_), la(i.eventQueue_, o, t);
                            for (r = 0; r < n.length; r++) Be(n[r])
                        } else {
                            if ("datastale" === e)
                                for (r = 0; r < a.length; r++) 3 === a[r].status ? a[r].status = 4 : a[r].status = 0;
                            else {
                                xe("transaction at " + l.toString() + " failed: " + e);
                                for (r = 0; r < a.length; r++) a[r].status = 4, a[r].abortReason = e
                            }
                            Ra(i, o)
                        }
                    }, e)
                }(t, Vo(e), n)) : Uo(e) && Bo(e, function(e) {
                    xa(t, e)
                })
            }

            function Ra(e, t) {
                var n = Oa(e, t),
                    t = Vo(n);
                return function(u, l, h) {
                    if (0 !== l.length) {
                        for (var c = [], p = [], d = l.filter(function(e) {
                                return 0 === e.status
                            }).map(function(e) {
                                return e.currentWriteId
                            }), e = 0; e < l.length; e++) ! function(e) {
                            var t, n, r, i, o = l[e],
                                a = Ut(h, o.path),
                                s = !1;
                            g(null !== a, "rerunTransactionsUnderNode_: relativePath should not be null."), 4 === o.status ? (t = o.abortReason, p = p.concat(ho(u.serverSyncTree_, o.currentWriteId, s = !0))) : 0 === o.status && (p = o.retryCount >= pa ? (t = "maxretry", p.concat(ho(u.serverSyncTree_, o.currentWriteId, s = !0))) : (n = Na(u, o.path, d), o.currentInputSnapshot = n, void 0 !== (i = l[e].update(n.val())) ? (ta("transaction failed: Data returned ", i, o.path), r = Hn(i), "object" == typeof i && null != i && O(i, ".priority") || (r = r.updatePriority(n.getPriority())), a = o.currentWriteId, i = va(u), i = Lo(r, n, i), o.currentOutputSnapshotRaw = r, o.currentOutputSnapshotResolved = i, o.currentWriteId = Ca(u), d.splice(d.indexOf(a), 1), (p = p.concat(uo(u.serverSyncTree_, o.path, i, o.currentWriteId, o.applyLocally))).concat(ho(u.serverSyncTree_, a, !0))) : (t = "nodata", p.concat(ho(u.serverSyncTree_, o.currentWriteId, s = !0))))), la(u.eventQueue_, h, p), p = [], s && (l[e].status = 2, s = l[e].unwatcher, setTimeout(s, Math.floor(0)), l[e].onComplete && ("nodata" === t ? c.push(function() {
                                return l[e].onComplete(null, !1, l[e].currentInputSnapshot)
                            }) : c.push(function() {
                                return l[e].onComplete(new Error(t), !1, null)
                            })))
                        }(e);
                        Aa(u, u.transactionQueueTree_);
                        for (e = 0; e < c.length; e++) Be(c[e]);
                        xa(u, u.transactionQueueTree_)
                    }
                }(e, Da(e, n), t), t
            }

            function Oa(e, t) {
                for (var n = e.transactionQueueTree_, r = Dt(t); null !== r && void 0 === Wo(n);) n = qo(n, r), r = Dt(t = Lt(t));
                return n
            }

            function Da(e, t) {
                var n = [];
                return function t(n, e, r) {
                    var i = Wo(e);
                    if (i)
                        for (var o = 0; o < i.length; o++) r.push(i[o]);
                    Bo(e, function(e) {
                        t(n, e, r)
                    })
                }(e, t, n), n.sort(function(e, t) {
                    return e.order - t.order
                }), n
            }

            function Aa(t, e) {
                var n = Wo(e);
                if (n) {
                    for (var r = 0, i = 0; i < n.length; i++) 2 !== n[i].status && (n[r] = n[i], r++);
                    n.length = r, jo(e, 0 < n.length ? n : void 0)
                }
                Bo(e, function(e) {
                    Aa(t, e)
                })
            }

            function La(t, e) {
                var n = Vo(Oa(t, e)),
                    e = qo(t.transactionQueueTree_, e);
                return function(e, t, n) {
                        for (var r = n ? e : e.parent; null !== r;) {
                            if (t(r)) return;
                            r = r.parent
                        }
                    }(e, function(e) {
                        Ma(t, e)
                    }), Ma(t, e),
                    function t(e, n, r, i) {
                        r && !i && n(e), Bo(e, function(e) {
                            t(e, n, !0, i)
                        }), r && i && n(e)
                    }(e, function(e) {
                        Ma(t, e)
                    }), n
            }

            function Ma(e, t) {
                var n = Wo(t);
                if (n) {
                    for (var r = [], i = [], o = -1, a = 0; a < n.length; a++) 3 === n[a].status || (1 === n[a].status ? (g(o === a - 1, "All SENT items should be at beginning of queue."), n[o = a].status = 3, n[a].abortReason = "set") : (g(0 === n[a].status, "Unexpected transaction status in abort"), n[a].unwatcher(), i = i.concat(ho(e.serverSyncTree_, n[a].currentWriteId, !0)), n[a].onComplete && r.push(n[a].onComplete.bind(null, new Error("set"), !1, null)))); - 1 === o ? jo(t, void 0) : n.length = o + 1, la(e.eventQueue_, Vo(t), i);
                    for (a = 0; a < r.length; a++) Be(r[a])
                }
            }
            var Fa = function(e, t) {
                    var n = qa(e),
                        r = n.namespace;
                    "firebase.com" === n.domain && Ne(n.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), r && "undefined" !== r || "localhost" === n.domain || Ne("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), n.secure || "undefined" != typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && xe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
                    e = "ws" === n.scheme || "wss" === n.scheme;
                    return {
                        repoInfo: new Xe(n.host, n.secure, r, t, e, "", r !== n.subdomain),
                        path: new xt(n.pathString)
                    }
                },
                qa = function(e) {
                    var t, n, r, i = "",
                        o = "",
                        a = "",
                        s = "",
                        u = "",
                        l = !0,
                        h = "https",
                        c = 443;
                    return "string" == typeof e && (0 <= (r = e.indexOf("//")) && (h = e.substring(0, r - 1), e = e.substring(r + 2)), -1 === (t = e.indexOf("/")) && (t = e.length), -1 === (n = e.indexOf("?")) && (n = e.length), i = e.substring(0, Math.min(t, n)), t < n && (s = function(e) {
                        for (var t = "", n = e.split("/"), r = 0; r < n.length; r++)
                            if (0 < n[r].length) {
                                var i = n[r];
                                try {
                                    i = decodeURIComponent(i.replace(/\+/g, " "))
                                } catch (e) {}
                                t += "/" + i
                            } return t
                    }(e.substring(t, n))), n = function(e) {
                        var t, n, r = {};
                        "?" === e.charAt(0) && (e = e.substring(1));
                        try {
                            for (var i = _(e.split("&")), o = i.next(); !o.done; o = i.next()) {
                                var a, s = o.value;
                                0 !== s.length && (2 === (a = s.split("=")).length ? r[decodeURIComponent(a[0])] = decodeURIComponent(a[1]) : xe("Invalid query segment '" + s + "' in query '" + e + "'"))
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                o && !o.done && (n = i.return) && n.call(i)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return r
                    }(e.substring(Math.min(e.length, n))), 0 <= (r = i.indexOf(":")) ? (l = "https" === h || "wss" === h, c = parseInt(i.substring(r + 1), 10)) : r = i.length, "localhost" === (r = i.slice(0, r)).toLowerCase() ? o = "localhost" : r.split(".").length <= 2 ? o = r : (r = i.indexOf("."), a = i.substring(0, r).toLowerCase(), o = i.substring(r + 1), u = a), "ns" in n && (u = n.ns)), {
                        host: i,
                        port: c,
                        domain: o,
                        subdomain: a,
                        secure: l,
                        scheme: h,
                        pathString: s,
                        namespace: u
                    }
                },
                Wa = (ja.prototype.getPath = function() {
                    var e = this.snapshot.ref;
                    return ("value" === this.eventType ? e : e.parent)._path
                }, ja.prototype.getEventType = function() {
                    return this.eventType
                }, ja.prototype.getEventRunner = function() {
                    return this.eventRegistration.getEventRunner(this)
                }, ja.prototype.toString = function() {
                    return this.getPath().toString() + ":" + this.eventType + ":" + x(this.snapshot.exportVal())
                }, ja);

            function ja(e, t, n, r) {
                this.eventType = e, this.eventRegistration = t, this.snapshot = n, this.prevName = r
            }
            var Ua = (Ba.prototype.getPath = function() {
                return this.path
            }, Ba.prototype.getEventType = function() {
                return "cancel"
            }, Ba.prototype.getEventRunner = function() {
                return this.eventRegistration.getEventRunner(this)
            }, Ba.prototype.toString = function() {
                return this.path.toString() + ":cancel"
            }, Ba);

            function Ba(e, t, n) {
                this.eventRegistration = e, this.error = t, this.path = n
            }
            var Va = (za.prototype.onValue = function(e, t) {
                this.snapshotCallback.call(null, e, t)
            }, za.prototype.onCancel = function(e) {
                return g(this.hasCancelCallback, "Raising a cancel event on a listener with no cancel callback"), this.cancelCallback.call(null, e)
            }, Object.defineProperty(za.prototype, "hasCancelCallback", {
                get: function() {
                    return !!this.cancelCallback
                },
                enumerable: !1,
                configurable: !0
            }), za.prototype.matches = function(e) {
                return this.snapshotCallback === e.snapshotCallback || this.snapshotCallback.userCallback === e.snapshotCallback.userCallback && this.snapshotCallback.context === e.snapshotCallback.context
            }, za);

            function za(e, t) {
                this.snapshotCallback = e, this.cancelCallback = t
            }
            var Ha = (Qa.prototype.cancel = function() {
                var e = new f;
                return Ta(this._repo, this._path, e.wrapCallback(function() {})), e.promise
            }, Qa.prototype.remove = function() {
                ia("OnDisconnect.remove", this._path);
                var e = new f;
                return Ea(this._repo, this._path, null, e.wrapCallback(function() {})), e.promise
            }, Qa.prototype.set = function(e) {
                ia("OnDisconnect.set", this._path), ea("OnDisconnect.set", e, this._path, !1);
                var t = new f;
                return Ea(this._repo, this._path, e, t.wrapCallback(function() {})), t.promise
            }, Qa.prototype.setWithPriority = function(e, t) {
                ia("OnDisconnect.setWithPriority", this._path), ea("OnDisconnect.setWithPriority", e, this._path, !1), Ko("OnDisconnect.setWithPriority", t, !1);
                var n, r, i, o, a = new f;
                return n = this._repo, r = this._path, e = e, t = t, i = a.wrapCallback(function() {}), o = Hn(e, t), n.server_.onDisconnectPut(r.toString(), o.val(!0), function(e, t) {
                    "ok" === e && kr(n.onDisconnect_, r, o), Pa(0, i, e, t)
                }), a.promise
            }, Qa.prototype.update = function(e) {
                ia("OnDisconnect.update", this._path), Yo("OnDisconnect.update", e, this._path, !1);
                var t = new f;
                return function(n, r, i, o) {
                    if (A(i)) return ke("onDisconnect().update() called with empty data.  Don't do anything."), Pa(0, o, "ok", void 0);
                    n.server_.onDisconnectMerge(r.toString(), i, function(e, t) {
                        "ok" === e && Le(i, function(e, t) {
                            t = Hn(t);
                            kr(n.onDisconnect_, Wt(r, e), t)
                        }), Pa(0, o, e, t)
                    })
                }(this._repo, this._path, e, t.wrapCallback(function() {})), t.promise
            }, Qa);

            function Qa(e, t) {
                this._repo = e, this._path = t
            }
            var Ya = (Object.defineProperty(Ka.prototype, "key", {
                get: function() {
                    return jt(this._path) ? null : Mt(this._path)
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(Ka.prototype, "ref", {
                get: function() {
                    return new Za(this._repo, this._path)
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(Ka.prototype, "_queryIdentifier", {
                get: function() {
                    var e = wr(this._queryParams),
                        e = Ae(e);
                    return "{}" === e ? "default" : e
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(Ka.prototype, "_queryObject", {
                get: function() {
                    return wr(this._queryParams)
                },
                enumerable: !1,
                configurable: !0
            }), Ka.prototype.isEqual = function(e) {
                if (!((e = z(e)) instanceof Ka)) return !1;
                var t = this._repo === e._repo,
                    n = Vt(this._path, e._path),
                    e = this._queryIdentifier === e._queryIdentifier;
                return t && n && e
            }, Ka.prototype.toJSON = function() {
                return this.toString()
            }, Ka.prototype.toString = function() {
                return this._repo.toString() + function(e) {
                    for (var t = "", n = e.pieceNum_; n < e.pieces_.length; n++) "" !== e.pieces_[n] && (t += "/" + encodeURIComponent(String(e.pieces_[n])));
                    return t || "/"
                }(this._path)
            }, Ka);

            function Ka(e, t, n, r) {
                this._repo = e, this._path = t, this._queryParams = n, this._orderByCalled = r
            }

            function Ga(e, t) {
                if (!0 === e._orderByCalled) throw new Error(t + ": You can't combine multiple orderBy calls.")
            }

            function $a(e) {
                var t = null,
                    n = null;
                if (e.hasStart() && (t = e.getIndexStartValue()), e.hasEnd() && (n = e.getIndexEndValue()), e.getIndex() === ln) {
                    var r = "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",
                        i = "Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";
                    if (e.hasStart()) {
                        if (e.getIndexStartName() !== Re) throw new Error(r);
                        if ("string" != typeof t) throw new Error(i)
                    }
                    if (e.hasEnd()) {
                        if (e.getIndexEndName() !== Oe) throw new Error(r);
                        if ("string" != typeof n) throw new Error(i)
                    }
                } else if (e.getIndex() === Nn) {
                    if (null != t && !Zo(t) || null != n && !Zo(n)) throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")
                } else if (g(e.getIndex() instanceof Kn || e.getIndex() === tr, "unknown index type."), null != t && "object" == typeof t || null != n && "object" == typeof n) throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")
            }

            function Ja(e) {
                if (e.hasStart() && e.hasEnd() && e.hasLimit() && !e.hasAnchoredLimit()) throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")
            }
            var Xa, Za = (n(es, Xa = Ya), Object.defineProperty(es.prototype, "parent", {
                get: function() {
                    var e = qt(this._path);
                    return null === e ? null : new es(this._repo, e)
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(es.prototype, "root", {
                get: function() {
                    for (var e = this; null !== e.parent;) e = e.parent;
                    return e
                },
                enumerable: !1,
                configurable: !0
            }), es);

            function es(e, t) {
                return Xa.call(this, e, t, new fr, !1) || this
            }
            var ts = (Object.defineProperty(ns.prototype, "priority", {
                get: function() {
                    return this._node.getPriority().val()
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(ns.prototype, "key", {
                get: function() {
                    return this.ref.key
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(ns.prototype, "size", {
                get: function() {
                    return this._node.numChildren()
                },
                enumerable: !1,
                configurable: !0
            }), ns.prototype.child = function(e) {
                var t = new xt(e),
                    e = os(this.ref, e);
                return new ns(this._node.getChild(t), e, Nn)
            }, ns.prototype.exists = function() {
                return !this._node.isEmpty()
            }, ns.prototype.exportVal = function() {
                return this._node.val(!0)
            }, ns.prototype.forEach = function(n) {
                var r = this;
                return !this._node.isLeafNode() && !!this._node.forEachChild(this._index, function(e, t) {
                    return n(new ns(t, os(r.ref, e), Nn))
                })
            }, ns.prototype.hasChild = function(e) {
                e = new xt(e);
                return !this._node.getChild(e).isEmpty()
            }, ns.prototype.hasChildren = function() {
                return !this._node.isLeafNode() && !this._node.isEmpty()
            }, ns.prototype.toJSON = function() {
                return this.exportVal()
            }, ns.prototype.val = function() {
                return this._node.val()
            }, ns);

            function ns(e, t, n) {
                this._node = e, this.ref = t, this._index = n
            }

            function rs(e, t) {
                return (e = z(e))._checkNotDeleted("ref"), void 0 !== t ? os(e._root, t) : e._root
            }

            function is(e, t) {
                (e = z(e))._checkNotDeleted("refFromURL");
                var n = Fa(t, e._repo.repoInfo_.nodeAdmin);
                oa("refFromURL", n);
                t = n.repoInfo;
                return e._repo.repoInfo_.isCustomHost() || t.host === e._repo.repoInfo_.host || Ne("refFromURL: Host name does not match the current database: (found " + t.host + " but expected " + e._repo.repoInfo_.host + ")"), rs(e, n.path.toString())
            }

            function os(e, t) {
                return (null === Dt((e = z(e))._path) ? ra : na)("child", "path", t, !1), new Za(e._repo, Wt(e._path, t))
            }

            function as(e, t) {
                e = z(e), ia("set", e._path), ea("set", t, e._path, !1);
                var n = new f;
                return ba(e._repo, e._path, t, null, n.wrapCallback(function() {})), n.promise
            }

            function ss(e, t) {
                Yo("update", t, e._path, !1);
                var n = new f;
                return function(i, o, e, a) {
                    ka(i, "update", {
                        path: o.toString(),
                        value: e
                    });
                    var s, t, n = !0,
                        r = va(i),
                        u = {};
                    Le(e, function(e, t) {
                        n = !1, u[e] = Ao(Wt(o, e), Hn(t), i.serverSyncTree_, r)
                    }), n ? (ke("update() called with empty data.  Don't do anything."), Pa(0, a, "ok", void 0)) : (s = Ca(i), t = lo(i.serverSyncTree_, o, u, s), sa(i.eventQueue_, t), i.server_.merge(o.toString(), e, function(e, t) {
                        var n = "ok" === e;
                        n || xe("update at " + o + " failed: " + e);
                        var r = ho(i.serverSyncTree_, s, !n),
                            n = 0 < r.length ? Ra(i, o) : o;
                        la(i.eventQueue_, n, r), Pa(0, a, e, t)
                    }), Le(e, function(e) {
                        e = La(i, Wt(o, e));
                        Ra(i, e)
                    }), la(i.eventQueue_, o, []))
                }(e._repo, e._path, t, n.wrapCallback(function() {})), n.promise
            }

            function us(t) {
                return t = z(t), n = t._repo, r = t, (null != (e = yo(n.serverSyncTree_, r)) ? Promise.resolve(e) : n.server_.get(r).then(function(e) {
                    var t = Hn(e).withIndex(r._queryParams.getIndex()),
                        e = co(n.serverSyncTree_, r._path, t);
                    return ua(n.eventQueue_, r._path, e), Promise.resolve(t)
                }, function(e) {
                    return ka(n, "get for query " + x(r) + " failed: " + e), Promise.reject(new Error(e))
                })).then(function(e) {
                    return new ts(e, new Za(t._repo, t._path), t._queryParams.getIndex())
                });
                var n, r, e
            }
            var ls = (hs.prototype.respondsTo = function(e) {
                return "value" === e
            }, hs.prototype.createEvent = function(e, t) {
                var n = t._queryParams.getIndex();
                return new Wa("value", this, new ts(e.snapshotNode, new Za(t._repo, t._path), n))
            }, hs.prototype.getEventRunner = function(e) {
                var t = this;
                return "cancel" === e.getEventType() ? function() {
                    return t.callbackContext.onCancel(e.error)
                } : function() {
                    return t.callbackContext.onValue(e.snapshot, null)
                }
            }, hs.prototype.createCancelEvent = function(e, t) {
                return this.callbackContext.hasCancelCallback ? new Ua(this, e, t) : null
            }, hs.prototype.matches = function(e) {
                return e instanceof hs && (!e.callbackContext || !this.callbackContext || e.callbackContext.matches(this.callbackContext))
            }, hs.prototype.hasAnyCallback = function() {
                return null !== this.callbackContext
            }, hs);

            function hs(e) {
                this.callbackContext = e
            }
            var cs = (ps.prototype.respondsTo = function(e) {
                e = "children_added" === e ? "child_added" : e;
                return this.eventType === (e = "children_removed" === e ? "child_removed" : e)
            }, ps.prototype.createCancelEvent = function(e, t) {
                return this.callbackContext.hasCancelCallback ? new Ua(this, e, t) : null
            }, ps.prototype.createEvent = function(e, t) {
                g(null != e.childName, "Child events should have a childName.");
                var n = os(new Za(t._repo, t._path), e.childName),
                    t = t._queryParams.getIndex();
                return new Wa(e.type, this, new ts(e.snapshotNode, n, t), e.prevName)
            }, ps.prototype.getEventRunner = function(e) {
                var t = this;
                return "cancel" === e.getEventType() ? function() {
                    return t.callbackContext.onCancel(e.error)
                } : function() {
                    return t.callbackContext.onValue(e.snapshot, e.prevName)
                }
            }, ps.prototype.matches = function(e) {
                return e instanceof ps && (this.eventType === e.eventType && (!this.callbackContext || !e.callbackContext || this.callbackContext.matches(e.callbackContext)))
            }, ps.prototype.hasAnyCallback = function() {
                return !!this.callbackContext
            }, ps);

            function ps(e, t) {
                this.eventType = e, this.callbackContext = t
            }

            function ds(n, e, t, r, i) {
                var o;
                "object" == typeof r && (a = void 0, i = r), "function" == typeof r && (a = r), i && i.onlyOnce && ((i = function(e, t) {
                    Ia(n._repo, n, s), o(e, t)
                }).userCallback = (o = t).userCallback, i.context = t.context, t = i);
                var a, t = new Va(t, a || void 0),
                    s = "value" === e ? new ls(t) : new cs(e, t);
                return a = n._repo, e = s, e = ".info" === Dt((t = n)._path) ? fo(a.infoSyncTree_, t, e) : fo(a.serverSyncTree_, t, e), ua(a.eventQueue_, t._path, e),
                    function() {
                        return Ia(n._repo, n, s)
                    }
            }

            function fs(e, t, n, r) {
                return ds(e, "value", t, n, r)
            }

            function _s(e, t, n, r) {
                return ds(e, "child_added", t, n, r)
            }

            function ys(e, t, n, r) {
                return ds(e, "child_changed", t, n, r)
            }

            function vs(e, t, n, r) {
                return ds(e, "child_moved", t, n, r)
            }

            function gs(e, t, n, r) {
                return ds(e, "child_removed", t, n, r)
            }

            function ms(e, t, n) {
                var r = null,
                    n = n ? new Va(n) : null;
                "value" === t ? r = new ls(n) : t && (r = new cs(t, n)), Ia(e._repo, e, r)
            }
            var ws, Ct = function() {},
                Cs = (n(bs, ws = Ct), bs.prototype._apply = function(e) {
                    ea("endAt", this._value, e._path, !0);
                    var t = vr(e._queryParams, this._value, this._key);
                    if (Ja(t), $a(t), e._queryParams.hasEnd()) throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");
                    return new Ya(e._repo, e._path, t, e._orderByCalled)
                }, bs);

            function bs(e, t) {
                var n = ws.call(this) || this;
                return n._value = e, n._key = t, n
            }
            var Ts, Es = (n(Is, Ts = Ct), Is.prototype._apply = function(e) {
                ea("endBefore", this._value, e._path, !1);
                var t, n, r, r = (t = e._queryParams, n = this._value, r = this._key, (r = t.index_ === ln ? vr(t, n = "string" == typeof n ? Xn(n) : n, r) : vr(t, n, null == r ? Re : Xn(r))).endBeforeSet_ = !0, r);
                if (Ja(r), $a(r), e._queryParams.hasEnd()) throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");
                return new Ya(e._repo, e._path, r, e._orderByCalled)
            }, Is);

            function Is(e, t) {
                var n = Ts.call(this) || this;
                return n._value = e, n._key = t, n
            }
            var Ss, ks = (n(Ps, Ss = Ct), Ps.prototype._apply = function(e) {
                ea("startAt", this._value, e._path, !0);
                var t = yr(e._queryParams, this._value, this._key);
                if (Ja(t), $a(t), e._queryParams.hasStart()) throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");
                return new Ya(e._repo, e._path, t, e._orderByCalled)
            }, Ps);

            function Ps(e, t) {
                var n = Ss.call(this) || this;
                return n._value = e, n._key = t, n
            }
            var Ns, xs = (n(Rs, Ns = Ct), Rs.prototype._apply = function(e) {
                ea("startAfter", this._value, e._path, !1);
                var t, n, r, r = (t = e._queryParams, n = this._value, r = this._key, (r = t.index_ === ln ? yr(t, n = "string" == typeof n ? Jn(n) : n, r) : yr(t, n, null == r ? Oe : Jn(r))).startAfterSet_ = !0, r);
                if (Ja(r), $a(r), e._queryParams.hasStart()) throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");
                return new Ya(e._repo, e._path, r, e._orderByCalled)
            }, Rs);

            function Rs(e, t) {
                var n = Ns.call(this) || this;
                return n._value = e, n._key = t, n
            }
            var Os, Ds = (n(As, Os = Ct), As.prototype._apply = function(e) {
                if (e._queryParams.hasLimit()) throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");
                return new Ya(e._repo, e._path, (t = e._queryParams, n = this._limit, (t = t.copy()).limitSet_ = !0, t.limit_ = n, t.viewFrom_ = "l", t), e._orderByCalled);
                var t, n
            }, As);

            function As(e) {
                var t = Os.call(this) || this;
                return t._limit = e, t
            }
            var Ls, Ms = (n(Fs, Ls = Ct), Fs.prototype._apply = function(e) {
                if (e._queryParams.hasLimit()) throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");
                return new Ya(e._repo, e._path, (t = e._queryParams, n = this._limit, (t = t.copy()).limitSet_ = !0, t.limit_ = n, t.viewFrom_ = "r", t), e._orderByCalled);
                var t, n
            }, Fs);

            function Fs(e) {
                var t = Ls.call(this) || this;
                return t._limit = e, t
            }
            var qs, Ws = (n(js, qs = Ct), js.prototype._apply = function(e) {
                Ga(e, "orderByChild");
                var t = new xt(this._path);
                if (jt(t)) throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");
                t = new Kn(t), t = gr(e._queryParams, t);
                return $a(t), new Ya(e._repo, e._path, t, !0)
            }, js);

            function js(e) {
                var t = qs.call(this) || this;
                return t._path = e, t
            }
            var Us, Bs = (n(Vs, Us = Ct), Vs.prototype._apply = function(e) {
                Ga(e, "orderByKey");
                var t = gr(e._queryParams, ln);
                return $a(t), new Ya(e._repo, e._path, t, !0)
            }, Vs);

            function Vs() {
                return null !== Us && Us.apply(this, arguments) || this
            }
            var zs, Hs = (n(Qs, zs = Ct), Qs.prototype._apply = function(e) {
                Ga(e, "orderByPriority");
                var t = gr(e._queryParams, Nn);
                return $a(t), new Ya(e._repo, e._path, t, !0)
            }, Qs);

            function Qs() {
                return null !== zs && zs.apply(this, arguments) || this
            }
            var Ys, Ks = (n(Gs, Ys = Ct), Gs.prototype._apply = function(e) {
                Ga(e, "orderByValue");
                var t = gr(e._queryParams, tr);
                return $a(t), new Ya(e._repo, e._path, t, !0)
            }, Gs);

            function Gs() {
                return null !== Ys && Ys.apply(this, arguments) || this
            }
            var $s, Js, Xs, Zs = (n(eu, $s = Ct), eu.prototype._apply = function(e) {
                if (ea("equalTo", this._value, e._path, !1), e._queryParams.hasStart()) throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");
                if (e._queryParams.hasEnd()) throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");
                return new Cs(this._value, this._key)._apply(new ks(this._value, this._key)._apply(e))
            }, eu);

            function eu(e, t) {
                var n = $s.call(this) || this;
                return n._value = e, n._key = t, n
            }

            function tu(e) {
                for (var t, n, r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
                var o = z(e);
                try {
                    for (var a = _(r), s = a.next(); !s.done; s = a.next()) o = s.value._apply(o)
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        s && !s.done && (n = a.return) && n.call(a)
                    } finally {
                        if (t) throw t.error
                    }
                }
                return o
            }
            Js = Za, g(!Ui, "__referenceConstructor has already been defined"), Ui = Js, Xs = Za, g(!Ki, "__referenceConstructor has already been defined"), Ki = Xs;
            var nu = "FIREBASE_DATABASE_EMULATOR_HOST",
                ru = {},
                iu = !1;

            function ou(e, t, n, r, i) {
                var o = r || e.options.databaseURL;
                void 0 === o && (e.options.projectId || Ne("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."), ke("Using default host for project ", e.options.projectId), o = e.options.projectId + "-default-rtdb.firebaseio.com");
                var a, s = Fa(o, i),
                    u = s.repoInfo,
                    r = void 0;
                (r = "undefined" != typeof process ? process.env[nu] : r) ? (a = !0, o = "http://" + r + "?ns=" + u.namespace, u = (s = Fa(o, i)).repoInfo) : a = !s.repoInfo.secure;
                t = i && a ? new Ye(Ye.OWNER) : new He(e.name, e.options, t);
                oa("Invalid Firebase Database URL", s), jt(s.path) || Ne("Database URL must point to the root of a Firebase Database (not including a child path).");
                n = function(e, t, n, r) {
                    var i = ru[t.name];
                    i || (i = {}, ru[t.name] = i);
                    (t = i[e.toURLString()]) && Ne("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");
                    return t = new da(e, iu, n, r), i[e.toURLString()] = t
                }(u, e, t, new Ve(e.name, n));
                return new au(n, e)
            }
            var au = (Object.defineProperty(su.prototype, "_repo", {
                get: function() {
                    return this._instanceStarted || (_a(this._repoInternal, this.app.options.appId, this.app.options.databaseAuthVariableOverride), this._instanceStarted = !0), this._repoInternal
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(su.prototype, "_root", {
                get: function() {
                    return this._rootInternal || (this._rootInternal = new Za(this._repo, Ot())), this._rootInternal
                },
                enumerable: !1,
                configurable: !0
            }), su.prototype._delete = function() {
                var e, t, n;
                return null !== this._rootInternal && (e = this._repo, t = this.app.name, (n = ru[t]) && n[e.key] === e || Ne("Database " + t + "(" + e.repoInfo_ + ") has already been deleted."), Sa(e), delete n[e.key], this._repoInternal = null, this._rootInternal = null), Promise.resolve()
            }, su.prototype._checkNotDeleted = function(e) {
                null === this._rootInternal && Ne("Cannot call " + e + " on a deleted database.")
            }, su);

            function su(e, t) {
                this._repoInternal = e, this.app = t, this.type = "database", this._instanceStarted = !1
            }

            function uu(e, t, n, r) {
                void 0 === r && (r = {}), (e = z(e))._checkNotDeleted("useEmulator"), e._instanceStarted && Ne("Cannot call useEmulator() after instance has already been initialized.");
                var i = e._repoInternal,
                    o = void 0;
                i.repoInfo_.nodeAdmin ? (r.mockUserToken && Ne('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'), o = new Ye(Ye.OWNER)) : r.mockUserToken && (e = function(e, t) {
                    if (e.uid) throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
                    var n = t || "demo-project",
                        r = e.iat || 0;
                    if (!(t = e.sub || e.user_id)) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
                    return e = l({
                        iss: "https://securetoken.google.com/" + n,
                        aud: n,
                        iat: r,
                        exp: r + 3600,
                        auth_time: r,
                        sub: t,
                        user_id: t,
                        firebase: {
                            sign_in_provider: "custom",
                            identities: {}
                        }
                    }, e), [h.encodeString(JSON.stringify({
                        alg: "none",
                        type: "JWT"
                    }), !1), h.encodeString(JSON.stringify(e), !1), ""].join(".")
                }(r.mockUserToken, e.app.options.projectId), o = new Ye(e)), o = o, (i = i).repoInfo_ = new Xe(t + ":" + n, !1, i.repoInfo_.namespace, i.repoInfo_.webSocketOnly, i.repoInfo_.nodeAdmin, i.repoInfo_.persistenceKey, i.repoInfo_.includeNamespaceInQueryParams), o && (i.authTokenProvider_ = o)
            }

            function lu(e) {
                (e = z(e))._checkNotDeleted("goOnline"), (e = e._repo).persistentConnection_ && e.persistentConnection_.resume(ca)
            }
            var hu = {
                ".sv": "timestamp"
            };
            var cu = (pu.prototype.toJSON = function() {
                return {
                    committed: this.committed,
                    snapshot: this.snapshot.toJSON()
                }
            }, pu);

            function pu(e, t) {
                this.committed = e, this.snapshot = t
            }

            function du(i, e, t) {
                if (i = z(i), ia("Reference.transaction", i._path), ".length" === i.key || ".keys" === i.key) throw "Reference.transaction failed: " + i.key + " is a read-only object.";
                var t = null === (n = null == t ? void 0 : t.applyLocally) || void 0 === n || n,
                    o = new f,
                    n = fs(i, function() {});
                return function(e, t, n, r, i, o) {
                    ka(e, "transaction on " + t);
                    var a = {
                            path: t,
                            update: n,
                            onComplete: r,
                            status: null,
                            order: Te(),
                            applyLocally: o,
                            retryCount: 0,
                            unwatcher: i,
                            abortReason: null,
                            currentWriteId: null,
                            currentInputSnapshot: null,
                            currentOutputSnapshotRaw: null,
                            currentOutputSnapshotResolved: null
                        },
                        n = Na(e, t, void 0);
                    a.currentInputSnapshot = n, void 0 === (r = a.update(n.val())) ? (a.unwatcher(), a.currentOutputSnapshotRaw = null, a.currentOutputSnapshotResolved = null, a.onComplete && a.onComplete(null, !1, a.currentInputSnapshot)) : (ta("transaction failed: Data returned ", r, a.path), a.status = 0, (i = Wo(o = qo(e.transactionQueueTree_, t)) || []).push(a), jo(o, i), o = void 0, "object" == typeof r && null !== r && O(r, ".priority") ? (o = D(r, ".priority"), g(Zo(o), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")) : o = (_o(e.serverSyncTree_, t) || jn.EMPTY_NODE).getPriority().val(), i = va(e), o = Hn(r, o), i = Lo(o, n, i), a.currentOutputSnapshotRaw = o, a.currentOutputSnapshotResolved = i, a.currentWriteId = Ca(e), a = uo(e.serverSyncTree_, t, i, a.currentWriteId, a.applyLocally), la(e.eventQueue_, t, a), xa(e, e.transactionQueueTree_))
                }(i._repo, i._path, e, function(e, t, n) {
                    var r;
                    e ? o.reject(e) : (r = new ts(n, new Za(i._repo, i._path), Nn), o.resolve(new cu(t, r)))
                }, n, t), o.promise
            }
            var fu = (_u.prototype.cancel = function(t) {
                W("OnDisconnect.cancel", 0, 1, arguments.length), U("OnDisconnect.cancel", "onComplete", t, !0);
                var e = this._delegate.cancel();
                return t && e.then(function() {
                    return t(null)
                }, function(e) {
                    return t(e)
                }), e
            }, _u.prototype.remove = function(t) {
                W("OnDisconnect.remove", 0, 1, arguments.length), U("OnDisconnect.remove", "onComplete", t, !0);
                var e = this._delegate.remove();
                return t && e.then(function() {
                    return t(null)
                }, function(e) {
                    return t(e)
                }), e
            }, _u.prototype.set = function(e, t) {
                W("OnDisconnect.set", 1, 2, arguments.length), U("OnDisconnect.set", "onComplete", t, !0);
                e = this._delegate.set(e);
                return t && e.then(function() {
                    return t(null)
                }, function(e) {
                    return t(e)
                }), e
            }, _u.prototype.setWithPriority = function(e, t, n) {
                W("OnDisconnect.setWithPriority", 2, 3, arguments.length), U("OnDisconnect.setWithPriority", "onComplete", n, !0);
                t = this._delegate.setWithPriority(e, t);
                return n && t.then(function() {
                    return n(null)
                }, function(e) {
                    return n(e)
                }), t
            }, _u.prototype.update = function(e, t) {
                if (W("OnDisconnect.update", 1, 2, arguments.length), Array.isArray(e)) {
                    for (var n = {}, r = 0; r < e.length; ++r) n["" + r] = e[r];
                    e = n, xe("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
                }
                U("OnDisconnect.update", "onComplete", t, !0);
                var i = this._delegate.update(e);
                return t && i.then(function() {
                    return t(null)
                }, function(e) {
                    return t(e)
                }), i
            }, _u);

            function _u(e) {
                this._delegate = e
            }
            var yu = (vu.prototype.toJSON = function() {
                return W("TransactionResult.toJSON", 0, 1, arguments.length), {
                    committed: this.committed,
                    snapshot: this.snapshot.toJSON()
                }
            }, vu);

            function vu(e, t) {
                this.committed = e, this.snapshot = t
            }
            var gu = (mu.prototype.val = function() {
                return W("DataSnapshot.val", 0, 0, arguments.length), this._delegate.val()
            }, mu.prototype.exportVal = function() {
                return W("DataSnapshot.exportVal", 0, 0, arguments.length), this._delegate.exportVal()
            }, mu.prototype.toJSON = function() {
                return W("DataSnapshot.toJSON", 0, 1, arguments.length), this._delegate.toJSON()
            }, mu.prototype.exists = function() {
                return W("DataSnapshot.exists", 0, 0, arguments.length), this._delegate.exists()
            }, mu.prototype.child = function(e) {
                return W("DataSnapshot.child", 0, 1, arguments.length), e = String(e), na("DataSnapshot.child", "path", e, !1), new mu(this._database, this._delegate.child(e))
            }, mu.prototype.hasChild = function(e) {
                return W("DataSnapshot.hasChild", 1, 1, arguments.length), na("DataSnapshot.hasChild", "path", e, !1), this._delegate.hasChild(e)
            }, mu.prototype.getPriority = function() {
                return W("DataSnapshot.getPriority", 0, 0, arguments.length), this._delegate.priority
            }, mu.prototype.forEach = function(t) {
                var n = this;
                return W("DataSnapshot.forEach", 1, 1, arguments.length), U("DataSnapshot.forEach", "action", t, !1), this._delegate.forEach(function(e) {
                    return t(new mu(n._database, e))
                })
            }, mu.prototype.hasChildren = function() {
                return W("DataSnapshot.hasChildren", 0, 0, arguments.length), this._delegate.hasChildren()
            }, Object.defineProperty(mu.prototype, "key", {
                get: function() {
                    return this._delegate.key
                },
                enumerable: !1,
                configurable: !0
            }), mu.prototype.numChildren = function() {
                return W("DataSnapshot.numChildren", 0, 0, arguments.length), this._delegate.size
            }, mu.prototype.getRef = function() {
                return W("DataSnapshot.ref", 0, 0, arguments.length), new Tu(this._database, this._delegate.ref)
            }, Object.defineProperty(mu.prototype, "ref", {
                get: function() {
                    return this.getRef()
                },
                enumerable: !1,
                configurable: !0
            }), mu);

            function mu(e, t) {
                this._database = e, this._delegate = t
            }
            var wu = (Cu.prototype.on = function(e, n, t, r) {
                var i = this;
                W("Query.on", 2, 4, arguments.length), U("Query.on", "callback", n, !1);

                function o(e, t) {
                    n.call(a.context, new gu(i.database, e), t)
                }
                var a = Cu.getCancelAndContextArgs_("Query.on", t, r);
                o.userCallback = n, o.context = a.context;
                var s = null === (r = a.cancel) || void 0 === r ? void 0 : r.bind(a.context);
                switch (e) {
                    case "value":
                        return fs(this._delegate, o, s), n;
                    case "child_added":
                        return _s(this._delegate, o, s), n;
                    case "child_removed":
                        return gs(this._delegate, o, s), n;
                    case "child_changed":
                        return ys(this._delegate, o, s), n;
                    case "child_moved":
                        return vs(this._delegate, o, s), n;
                    default:
                        throw new Error(j("Query.on", "eventType") + 'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')
                }
            }, Cu.prototype.off = function(e, t, n) {
                var r;
                W("Query.off", 0, 3, arguments.length),
                    function(e, t, n) {
                        if (!n || void 0 !== t) switch (t) {
                            case "value":
                            case "child_added":
                            case "child_removed":
                            case "child_changed":
                            case "child_moved":
                                break;
                            default:
                                throw new Error(j(e, "eventType") + 'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')
                        }
                    }("Query.off", e, !0), U("Query.off", "callback", t, !0), B("Query.off", "context", n, !0), t ? ((r = function() {}).userCallback = t, r.context = n, ms(this._delegate, e, r)) : ms(this._delegate, e)
            }, Cu.prototype.get = function() {
                var t = this;
                return us(this._delegate).then(function(e) {
                    return new gu(t.database, e)
                })
            }, Cu.prototype.once = function(e, n, t, r) {
                var i = this;
                W("Query.once", 1, 4, arguments.length), U("Query.once", "callback", n, !0);

                function o(e, t) {
                    e = new gu(i.database, e), n && n.call(a.context, e, t), s.resolve(e)
                }
                var a = Cu.getCancelAndContextArgs_("Query.once", t, r),
                    s = new f;
                o.userCallback = n, o.context = a.context;

                function u(e) {
                    a.cancel && a.cancel.call(a.context, e), s.reject(e)
                }
                switch (e) {
                    case "value":
                        fs(this._delegate, o, u, {
                            onlyOnce: !0
                        });
                        break;
                    case "child_added":
                        _s(this._delegate, o, u, {
                            onlyOnce: !0
                        });
                        break;
                    case "child_removed":
                        gs(this._delegate, o, u, {
                            onlyOnce: !0
                        });
                        break;
                    case "child_changed":
                        ys(this._delegate, o, u, {
                            onlyOnce: !0
                        });
                        break;
                    case "child_moved":
                        vs(this._delegate, o, u, {
                            onlyOnce: !0
                        });
                        break;
                    default:
                        throw new Error(j("Query.once", "eventType") + 'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')
                }
                return s.promise
            }, Cu.prototype.limitToFirst = function(e) {
                return W("Query.limitToFirst", 1, 1, arguments.length), new Cu(this.database, tu(this._delegate, function(e) {
                    if ("number" != typeof e || Math.floor(e) !== e || e <= 0) throw new Error("limitToFirst: First argument must be a positive integer.");
                    return new Ds(e)
                }(e)))
            }, Cu.prototype.limitToLast = function(e) {
                return W("Query.limitToLast", 1, 1, arguments.length), new Cu(this.database, tu(this._delegate, function(e) {
                    if ("number" != typeof e || Math.floor(e) !== e || e <= 0) throw new Error("limitToLast: First argument must be a positive integer.");
                    return new Ms(e)
                }(e)))
            }, Cu.prototype.orderByChild = function(e) {
                return W("Query.orderByChild", 1, 1, arguments.length), new Cu(this.database, tu(this._delegate, function(e) {
                    if ("$key" === e) throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');
                    if ("$priority" === e) throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');
                    if ("$value" === e) throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');
                    return na("orderByChild", "path", e, !1), new Ws(e)
                }(e)))
            }, Cu.prototype.orderByKey = function() {
                return W("Query.orderByKey", 0, 0, arguments.length), new Cu(this.database, tu(this._delegate, new Bs))
            }, Cu.prototype.orderByPriority = function() {
                return W("Query.orderByPriority", 0, 0, arguments.length), new Cu(this.database, tu(this._delegate, new Hs))
            }, Cu.prototype.orderByValue = function() {
                return W("Query.orderByValue", 0, 0, arguments.length), new Cu(this.database, tu(this._delegate, new Ks))
            }, Cu.prototype.startAt = function(e, t) {
                return void 0 === e && (e = null), W("Query.startAt", 0, 2, arguments.length), new Cu(this.database, tu(this._delegate, (void 0 === (e = e) && (e = null), Go("startAt", "key", t = t, !0), new ks(e, t))))
            }, Cu.prototype.startAfter = function(e, t) {
                return void 0 === e && (e = null), W("Query.startAfter", 0, 2, arguments.length), new Cu(this.database, tu(this._delegate, (e = e, Go("startAfter", "key", t = t, !0), new xs(e, t))))
            }, Cu.prototype.endAt = function(e, t) {
                return void 0 === e && (e = null), W("Query.endAt", 0, 2, arguments.length), new Cu(this.database, tu(this._delegate, (e = e, Go("endAt", "key", t = t, !0), new Cs(e, t))))
            }, Cu.prototype.endBefore = function(e, t) {
                return void 0 === e && (e = null), W("Query.endBefore", 0, 2, arguments.length), new Cu(this.database, tu(this._delegate, (e = e, Go("endBefore", "key", t = t, !0), new Es(e, t))))
            }, Cu.prototype.equalTo = function(e, t) {
                return W("Query.equalTo", 1, 2, arguments.length), new Cu(this.database, tu(this._delegate, (e = e, Go("equalTo", "key", t = t, !0), new Zs(e, t))))
            }, Cu.prototype.toString = function() {
                return W("Query.toString", 0, 0, arguments.length), this._delegate.toString()
            }, Cu.prototype.toJSON = function() {
                return W("Query.toJSON", 0, 1, arguments.length), this._delegate.toJSON()
            }, Cu.prototype.isEqual = function(e) {
                if (W("Query.isEqual", 1, 1, arguments.length), e instanceof Cu) return this._delegate.isEqual(e._delegate);
                throw new Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.")
            }, Cu.getCancelAndContextArgs_ = function(e, t, n) {
                var r = {
                    cancel: void 0,
                    context: void 0
                };
                if (t && n) r.cancel = t, U(e, "cancel", r.cancel, !0), r.context = n, B(e, "context", r.context, !0);
                else if (t)
                    if ("object" == typeof t && null !== t) r.context = t;
                    else {
                        if ("function" != typeof t) throw new Error(j(e, "cancelOrContext") + " must either be a cancel callback or a context object.");
                        r.cancel = t
                    } return r
            }, Object.defineProperty(Cu.prototype, "ref", {
                get: function() {
                    return new Tu(this.database, new Za(this._delegate._repo, this._delegate._path))
                },
                enumerable: !1,
                configurable: !0
            }), Cu);

            function Cu(e, t) {
                this.database = e, this._delegate = t
            }
            var bu, Tu = (n(Eu, bu = wu), Eu.prototype.getKey = function() {
                return W("Reference.key", 0, 0, arguments.length), this._delegate.key
            }, Eu.prototype.child = function(e) {
                return W("Reference.child", 1, 1, arguments.length), "number" == typeof e && (e = String(e)), new Eu(this.database, os(this._delegate, e))
            }, Eu.prototype.getParent = function() {
                W("Reference.parent", 0, 0, arguments.length);
                var e = this._delegate.parent;
                return e ? new Eu(this.database, e) : null
            }, Eu.prototype.getRoot = function() {
                return W("Reference.root", 0, 0, arguments.length), new Eu(this.database, this._delegate.root)
            }, Eu.prototype.set = function(e, t) {
                W("Reference.set", 1, 2, arguments.length), U("Reference.set", "onComplete", t, !0);
                e = as(this._delegate, e);
                return t && e.then(function() {
                    return t(null)
                }, function(e) {
                    return t(e)
                }), e
            }, Eu.prototype.update = function(e, t) {
                if (W("Reference.update", 1, 2, arguments.length), Array.isArray(e)) {
                    for (var n = {}, r = 0; r < e.length; ++r) n["" + r] = e[r];
                    e = n, xe("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
                }
                ia("Reference.update", this._delegate._path), U("Reference.update", "onComplete", t, !0);
                var i = ss(this._delegate, e);
                return t && i.then(function() {
                    return t(null)
                }, function(e) {
                    return t(e)
                }), i
            }, Eu.prototype.setWithPriority = function(e, t, n) {
                W("Reference.setWithPriority", 2, 3, arguments.length), U("Reference.setWithPriority", "onComplete", n, !0);
                t = function(e, t, n) {
                    if (ia("setWithPriority", e._path), ea("setWithPriority", t, e._path, !1), Ko("setWithPriority", n, !1), ".length" === e.key || ".keys" === e.key) throw "setWithPriority failed: " + e.key + " is a read-only object.";
                    var r = new f;
                    return ba(e._repo, e._path, t, n, r.wrapCallback(function() {})), r.promise
                }(this._delegate, e, t);
                return n && t.then(function() {
                    return n(null)
                }, function(e) {
                    return n(e)
                }), t
            }, Eu.prototype.remove = function(t) {
                W("Reference.remove", 0, 1, arguments.length), U("Reference.remove", "onComplete", t, !0);
                var e, e = (e = this._delegate, ia("remove", e._path), as(e, null));
                return t && e.then(function() {
                    return t(null)
                }, function(e) {
                    return t(e)
                }), e
            }, Eu.prototype.transaction = function(e, t, n) {
                var r = this;
                W("Reference.transaction", 1, 3, arguments.length), U("Reference.transaction", "transactionUpdate", e, !1), U("Reference.transaction", "onComplete", t, !0),
                    function(e, t, n, r) {
                        if ((!r || void 0 !== n) && "boolean" != typeof n) throw new Error(j(e, t) + "must be a boolean.")
                    }("Reference.transaction", "applyLocally", n, !0);
                n = du(this._delegate, e, {
                    applyLocally: n
                }).then(function(e) {
                    return new yu(e.committed, new gu(r.database, e.snapshot))
                });
                return t && n.then(function(e) {
                    return t(null, e.committed, e.snapshot)
                }, function(e) {
                    return t(e, !1, null)
                }), n
            }, Eu.prototype.setPriority = function(e, t) {
                W("Reference.setPriority", 1, 2, arguments.length), U("Reference.setPriority", "onComplete", t, !0);
                e = function(e, t) {
                    e = z(e), ia("setPriority", e._path), Ko("setPriority", t, !1);
                    var n = new f;
                    return ba(e._repo, Wt(e._path, ".priority"), t, null, n.wrapCallback(function() {})), n.promise
                }(this._delegate, e);
                return t && e.then(function() {
                    return t(null)
                }, function(e) {
                    return t(e)
                }), e
            }, Eu.prototype.push = function(e, t) {
                var n = this;
                W("Reference.push", 0, 2, arguments.length), U("Reference.push", "onComplete", t, !0);
                var r = function(e, t) {
                        e = z(e), ia("push", e._path), ea("push", t, e._path, !0);
                        var n = ya(e._repo),
                            r = rr(n),
                            n = os(e, r),
                            i = os(e, r),
                            t = null != t ? as(i, t).then(function() {
                                return i
                            }) : Promise.resolve(i);
                        return n.then = t.then.bind(t), n.catch = t.then.bind(t, void 0), n
                    }(this._delegate, e),
                    e = r.then(function(e) {
                        return new Eu(n.database, e)
                    });
                t && e.then(function() {
                    return t(null)
                }, function(e) {
                    return t(e)
                });
                r = new Eu(this.database, r);
                return r.then = e.then.bind(e), r.catch = e.catch.bind(e, void 0), r
            }, Eu.prototype.onDisconnect = function() {
                return ia("Reference.onDisconnect", this._delegate._path), new fu(new Ha(this._delegate._repo, this._delegate._path))
            }, Object.defineProperty(Eu.prototype, "key", {
                get: function() {
                    return this.getKey()
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(Eu.prototype, "parent", {
                get: function() {
                    return this.getParent()
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(Eu.prototype, "root", {
                get: function() {
                    return this.getRoot()
                },
                enumerable: !1,
                configurable: !0
            }), Eu);

            function Eu(e, t) {
                var n = bu.call(this, e, new Ya(t._repo, t._path, new fr, !1)) || this;
                return n.database = e, n._delegate = t, n
            }
            var Iu = (Su.prototype.useEmulator = function(e, t, n) {
                uu(this._delegate, e, t, n = void 0 === n ? {} : n)
            }, Su.prototype.ref = function(e) {
                if (W("database.ref", 0, 1, arguments.length), e instanceof Tu) {
                    var t = is(this._delegate, e.toString());
                    return new Tu(this, t)
                }
                t = rs(this._delegate, e);
                return new Tu(this, t)
            }, Su.prototype.refFromURL = function(e) {
                W("database.refFromURL", 1, 1, arguments.length);
                e = is(this._delegate, e);
                return new Tu(this, e)
            }, Su.prototype.goOffline = function() {
                var e;
                W("database.goOffline", 0, 0, arguments.length), (e = z(e = this._delegate))._checkNotDeleted("goOffline"), Sa(e._repo)
            }, Su.prototype.goOnline = function() {
                return W("database.goOnline", 0, 0, arguments.length), lu(this._delegate)
            }, Su.ServerValue = {
                TIMESTAMP: hu,
                increment: function(e) {
                    return {
                        ".sv": {
                            increment: e
                        }
                    }
                }
            }, Su);

            function Su(e, t) {
                var n = this;
                this._delegate = e, this.app = t, this.INTERNAL = {
                    delete: function() {
                        return n._delegate._delete()
                    }
                }
            }
            var ku = Object.freeze({
                    __proto__: null,
                    forceLongPolling: function() {
                        _t.forceDisallow(), ht.forceAllow()
                    },
                    forceWebSockets: function() {
                        ht.forceDisallow()
                    },
                    isWebSocketsAvailable: function() {
                        return _t.isAvailable()
                    },
                    setSecurityDebugCallback: function(e, t) {
                        e._delegate._repo.persistentConnection_.securityDebugCallback_ = t
                    },
                    stats: function(e, t) {
                        var i;
                        e = e._delegate._repo, void 0 === (t = t) && (t = !1), "undefined" != typeof console && (e = t ? (e.statsListener_ || (e.statsListener_ = new Nr(e.stats_)), e.statsListener_.get()) : e.stats_.get(), i = Object.keys(e).reduce(function(e, t) {
                            return Math.max(t.length, e)
                        }, 0), Le(e, function(e, t) {
                            for (var n = e, r = e.length; r < i + 2; r++) n += " ";
                            console.log(n + t)
                        }))
                    },
                    statsIncrementCounter: function(e, t) {
                        e = e._delegate._repo, t = t, e.stats_.incrementCounter(t), e.statsReporter_.statsToReport_[t] = !0
                    },
                    dataUpdateCount: function(e) {
                        return e._delegate._repo.dataUpdateCount
                    },
                    interceptServerData: function(e, t) {
                        e._delegate._repo.interceptServerDataCallback_ = t
                    },
                    initStandalone: function(e) {
                        var t = e.app,
                            n = e.url,
                            r = e.version,
                            i = e.customAuthImpl,
                            o = e.namespace,
                            e = void 0 !== (e = e.nodeAdmin) && e;
                        return ae(r), (r = new K("auth-internal", new J("database-standalone"))).setComponent(new H("auth-internal", function() {
                            return i
                        }, "PRIVATE")), {
                            instance: new Iu(ou(t, r, void 0, n, e), t),
                            namespace: o
                        }
                    }
                }),
                Ct = en;
            en.prototype.simpleListen = function(e, t) {
                this.sendRequest("q", {
                    p: e
                }, t)
            }, en.prototype.echo = function(e, t) {
                this.sendRequest("echo", {
                    d: e
                }, t)
            };
            var Pu, Nu = Object.freeze({
                    __proto__: null,
                    DataConnection: Ct,
                    RealTimeConnection: mt,
                    hijackHash: function(i) {
                        var o = en.prototype.put;
                        return en.prototype.put = function(e, t, n, r) {
                                void 0 !== r && (r = i()), o.call(this, e, t, n, r)
                            },
                            function() {
                                en.prototype.put = o
                            }
                    },
                    ConnectionTarget: Xe,
                    queryIdentifier: function(e) {
                        return e._delegate._queryIdentifier
                    },
                    forceRestClient: function(e) {
                        iu = e
                    }
                }),
                xu = Iu.ServerValue;
            ae((Pu = t.default).SDK_VERSION), Pu.INTERNAL.registerComponent(new H("database", function(e, t) {
                var n = t.instanceIdentifier,
                    r = e.getProvider("app").getImmediate(),
                    t = e.getProvider("auth-internal"),
                    e = e.getProvider("app-check-internal");
                return new Iu(ou(r, t, e, n), r)
            }, "PUBLIC").setServiceProps({
                Reference: Tu,
                Query: wu,
                Database: Iu,
                DataSnapshot: gu,
                enableLogging: pe,
                INTERNAL: ku,
                ServerValue: xu,
                TEST_ACCESS: Nu
            }).setMultipleInstances(!0)), Pu.registerVersion("@firebase/database", "0.10.9")
        }.apply(this, arguments)
    } catch (e) {
        throw console.error(e), new Error("Cannot instantiate firebase-database.js - be sure to load firebase-app.js first.")
    }
});
//# sourceMappingURL=firebase-database.js.map