function n0(l, i) {
    for (var u = 0; u < i.length; u++) {
        const o = i[u];
        if (typeof o != "string" && !Array.isArray(o)) {
            for (const d in o)
                if (d !== "default" && !(d in l)) {
                    const p = Object.getOwnPropertyDescriptor(o, d);
                    p && Object.defineProperty(l, d, p.get ? p : {
                        enumerable: !0,
                        get: () => o[d]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload")) return;
    for (const d of document.querySelectorAll('link[rel="modulepreload"]')) o(d);
    new MutationObserver(d => {
        for (const p of d)
            if (p.type === "childList")
                for (const m of p.addedNodes) m.tagName === "LINK" && m.rel === "modulepreload" && o(m)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function u(d) {
        const p = {};
        return d.integrity && (p.integrity = d.integrity), d.referrerPolicy && (p.referrerPolicy = d.referrerPolicy), d.crossOrigin === "use-credentials" ? p.credentials = "include" : d.crossOrigin === "anonymous" ? p.credentials = "omit" : p.credentials = "same-origin", p
    }

    function o(d) {
        if (d.ep) return;
        d.ep = !0;
        const p = u(d);
        fetch(d.href, p)
    }
})();

function mh(l) {
    return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l
}
var _o = {
        exports: {}
    },
    fn = {};
var Am;

function c0() {
    if (Am) return fn;
    Am = 1;
    var l = Symbol.for("react.transitional.element"),
        i = Symbol.for("react.fragment");

    function u(o, d, p) {
        var m = null;
        if (p !== void 0 && (m = "" + p), d.key !== void 0 && (m = "" + d.key), "key" in d) {
            p = {};
            for (var h in d) h !== "key" && (p[h] = d[h])
        } else p = d;
        return d = p.ref, {
            $$typeof: l,
            type: o,
            key: m,
            ref: d !== void 0 ? d : null,
            props: p
        }
    }
    return fn.Fragment = i, fn.jsx = u, fn.jsxs = u, fn
}
var Mm;

function r0() {
    return Mm || (Mm = 1, _o.exports = c0()), _o.exports
}
var n = r0(),
    zo = {
        exports: {}
    },
    oe = {};
var Dm;

function i0() {
    if (Dm) return oe;
    Dm = 1;
    var l = Symbol.for("react.transitional.element"),
        i = Symbol.for("react.portal"),
        u = Symbol.for("react.fragment"),
        o = Symbol.for("react.strict_mode"),
        d = Symbol.for("react.profiler"),
        p = Symbol.for("react.consumer"),
        m = Symbol.for("react.context"),
        h = Symbol.for("react.forward_ref"),
        b = Symbol.for("react.suspense"),
        y = Symbol.for("react.memo"),
        j = Symbol.for("react.lazy"),
        v = Symbol.for("react.activity"),
        S = Symbol.iterator;

    function z(C) {
        return C === null || typeof C != "object" ? null : (C = S && C[S] || C["@@iterator"], typeof C == "function" ? C : null)
    }
    var M = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        E = Object.assign,
        O = {};

    function U(C, P, Q) {
        this.props = C, this.context = P, this.refs = O, this.updater = Q || M
    }
    U.prototype.isReactComponent = {}, U.prototype.setState = function(C, P) {
        if (typeof C != "object" && typeof C != "function" && C != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, C, P, "setState")
    }, U.prototype.forceUpdate = function(C) {
        this.updater.enqueueForceUpdate(this, C, "forceUpdate")
    };

    function Z() {}
    Z.prototype = U.prototype;

    function V(C, P, Q) {
        this.props = C, this.context = P, this.refs = O, this.updater = Q || M
    }
    var J = V.prototype = new Z;
    J.constructor = V, E(J, U.prototype), J.isPureReactComponent = !0;
    var ee = Array.isArray;

    function G() {}
    var X = {
            H: null,
            A: null,
            T: null,
            S: null
        },
        A = Object.prototype.hasOwnProperty;

    function ae(C, P, Q) {
        var I = Q.ref;
        return {
            $$typeof: l,
            type: C,
            key: P,
            ref: I !== void 0 ? I : null,
            props: Q
        }
    }

    function ze(C, P) {
        return ae(C.type, P, C.props)
    }

    function ne(C) {
        return typeof C == "object" && C !== null && C.$$typeof === l
    }

    function ue(C) {
        var P = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + C.replace(/[=:]/g, function(Q) {
            return P[Q]
        })
    }
    var Be = /\/+/g;

    function ke(C, P) {
        return typeof C == "object" && C !== null && C.key != null ? ue("" + C.key) : P.toString(36)
    }

    function je(C) {
        switch (C.status) {
            case "fulfilled":
                return C.value;
            case "rejected":
                throw C.reason;
            default:
                switch (typeof C.status == "string" ? C.then(G, G) : (C.status = "pending", C.then(function(P) {
                        C.status === "pending" && (C.status = "fulfilled", C.value = P)
                    }, function(P) {
                        C.status === "pending" && (C.status = "rejected", C.reason = P)
                    })), C.status) {
                    case "fulfilled":
                        return C.value;
                    case "rejected":
                        throw C.reason
                }
        }
        throw C
    }

    function H(C, P, Q, I, ie) {
        var pe = typeof C;
        (pe === "undefined" || pe === "boolean") && (C = null);
        var ce = !1;
        if (C === null) ce = !0;
        else switch (pe) {
            case "bigint":
            case "string":
            case "number":
                ce = !0;
                break;
            case "object":
                switch (C.$$typeof) {
                    case l:
                    case i:
                        ce = !0;
                        break;
                    case j:
                        return ce = C._init, H(ce(C._payload), P, Q, I, ie)
                }
        }
        if (ce) return ie = ie(C), ce = I === "" ? "." + ke(C, 0) : I, ee(ie) ? (Q = "", ce != null && (Q = ce.replace(Be, "$&/") + "/"), H(ie, P, Q, "", function(Xt) {
            return Xt
        })) : ie != null && (ne(ie) && (ie = ze(ie, Q + (ie.key == null || C && C.key === ie.key ? "" : ("" + ie.key).replace(Be, "$&/") + "/") + ce)), P.push(ie)), 1;
        ce = 0;
        var Fe = I === "" ? "." : I + ":";
        if (ee(C))
            for (var _e = 0; _e < C.length; _e++) I = C[_e], pe = Fe + ke(I, _e), ce += H(I, P, Q, pe, ie);
        else if (_e = z(C), typeof _e == "function")
            for (C = _e.call(C), _e = 0; !(I = C.next()).done;) I = I.value, pe = Fe + ke(I, _e++), ce += H(I, P, Q, pe, ie);
        else if (pe === "object") {
            if (typeof C.then == "function") return H(je(C), P, Q, I, ie);
            throw P = String(C), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.")
        }
        return ce
    }

    function K(C, P, Q) {
        if (C == null) return C;
        var I = [],
            ie = 0;
        return H(C, I, "", "", function(pe) {
            return P.call(Q, pe, ie++)
        }), I
    }

    function Y(C) {
        if (C._status === -1) {
            var P = C._result;
            P = P(), P.then(function(Q) {
                (C._status === 0 || C._status === -1) && (C._status = 1, C._result = Q)
            }, function(Q) {
                (C._status === 0 || C._status === -1) && (C._status = 2, C._result = Q)
            }), C._status === -1 && (C._status = 0, C._result = P)
        }
        if (C._status === 1) return C._result.default;
        throw C._result
    }
    var we = typeof reportError == "function" ? reportError : function(C) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var P = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof C == "object" && C !== null && typeof C.message == "string" ? String(C.message) : String(C),
                    error: C
                });
                if (!window.dispatchEvent(P)) return
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", C);
                return
            }
            console.error(C)
        },
        Ce = {
            map: K,
            forEach: function(C, P, Q) {
                K(C, function() {
                    P.apply(this, arguments)
                }, Q)
            },
            count: function(C) {
                var P = 0;
                return K(C, function() {
                    P++
                }), P
            },
            toArray: function(C) {
                return K(C, function(P) {
                    return P
                }) || []
            },
            only: function(C) {
                if (!ne(C)) throw Error("React.Children.only expected to receive a single React element child.");
                return C
            }
        };
    return oe.Activity = v, oe.Children = Ce, oe.Component = U, oe.Fragment = u, oe.Profiler = d, oe.PureComponent = V, oe.StrictMode = o, oe.Suspense = b, oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X, oe.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(C) {
            return X.H.useMemoCache(C)
        }
    }, oe.cache = function(C) {
        return function() {
            return C.apply(null, arguments)
        }
    }, oe.cacheSignal = function() {
        return null
    }, oe.cloneElement = function(C, P, Q) {
        if (C == null) throw Error("The argument must be a React element, but you passed " + C + ".");
        var I = E({}, C.props),
            ie = C.key;
        if (P != null)
            for (pe in P.key !== void 0 && (ie = "" + P.key), P) !A.call(P, pe) || pe === "key" || pe === "__self" || pe === "__source" || pe === "ref" && P.ref === void 0 || (I[pe] = P[pe]);
        var pe = arguments.length - 2;
        if (pe === 1) I.children = Q;
        else if (1 < pe) {
            for (var ce = Array(pe), Fe = 0; Fe < pe; Fe++) ce[Fe] = arguments[Fe + 2];
            I.children = ce
        }
        return ae(C.type, ie, I)
    }, oe.createContext = function(C) {
        return C = {
            $$typeof: m,
            _currentValue: C,
            _currentValue2: C,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, C.Provider = C, C.Consumer = {
            $$typeof: p,
            _context: C
        }, C
    }, oe.createElement = function(C, P, Q) {
        var I, ie = {},
            pe = null;
        if (P != null)
            for (I in P.key !== void 0 && (pe = "" + P.key), P) A.call(P, I) && I !== "key" && I !== "__self" && I !== "__source" && (ie[I] = P[I]);
        var ce = arguments.length - 2;
        if (ce === 1) ie.children = Q;
        else if (1 < ce) {
            for (var Fe = Array(ce), _e = 0; _e < ce; _e++) Fe[_e] = arguments[_e + 2];
            ie.children = Fe
        }
        if (C && C.defaultProps)
            for (I in ce = C.defaultProps, ce) ie[I] === void 0 && (ie[I] = ce[I]);
        return ae(C, pe, ie)
    }, oe.createRef = function() {
        return {
            current: null
        }
    }, oe.forwardRef = function(C) {
        return {
            $$typeof: h,
            render: C
        }
    }, oe.isValidElement = ne, oe.lazy = function(C) {
        return {
            $$typeof: j,
            _payload: {
                _status: -1,
                _result: C
            },
            _init: Y
        }
    }, oe.memo = function(C, P) {
        return {
            $$typeof: y,
            type: C,
            compare: P === void 0 ? null : P
        }
    }, oe.startTransition = function(C) {
        var P = X.T,
            Q = {};
        X.T = Q;
        try {
            var I = C(),
                ie = X.S;
            ie !== null && ie(Q, I), typeof I == "object" && I !== null && typeof I.then == "function" && I.then(G, we)
        } catch (pe) {
            we(pe)
        } finally {
            P !== null && Q.types !== null && (P.types = Q.types), X.T = P
        }
    }, oe.unstable_useCacheRefresh = function() {
        return X.H.useCacheRefresh()
    }, oe.use = function(C) {
        return X.H.use(C)
    }, oe.useActionState = function(C, P, Q) {
        return X.H.useActionState(C, P, Q)
    }, oe.useCallback = function(C, P) {
        return X.H.useCallback(C, P)
    }, oe.useContext = function(C) {
        return X.H.useContext(C)
    }, oe.useDebugValue = function() {}, oe.useDeferredValue = function(C, P) {
        return X.H.useDeferredValue(C, P)
    }, oe.useEffect = function(C, P) {
        return X.H.useEffect(C, P)
    }, oe.useEffectEvent = function(C) {
        return X.H.useEffectEvent(C)
    }, oe.useId = function() {
        return X.H.useId()
    }, oe.useImperativeHandle = function(C, P, Q) {
        return X.H.useImperativeHandle(C, P, Q)
    }, oe.useInsertionEffect = function(C, P) {
        return X.H.useInsertionEffect(C, P)
    }, oe.useLayoutEffect = function(C, P) {
        return X.H.useLayoutEffect(C, P)
    }, oe.useMemo = function(C, P) {
        return X.H.useMemo(C, P)
    }, oe.useOptimistic = function(C, P) {
        return X.H.useOptimistic(C, P)
    }, oe.useReducer = function(C, P, Q) {
        return X.H.useReducer(C, P, Q)
    }, oe.useRef = function(C) {
        return X.H.useRef(C)
    }, oe.useState = function(C) {
        return X.H.useState(C)
    }, oe.useSyncExternalStore = function(C, P, Q) {
        return X.H.useSyncExternalStore(C, P, Q)
    }, oe.useTransition = function() {
        return X.H.useTransition()
    }, oe.version = "19.2.3", oe
}
var Om;

function ou() {
    return Om || (Om = 1, zo.exports = i0()), zo.exports
}
var x = ou();
const o0 = mh(x),
    hh = n0({
        __proto__: null,
        default: o0
    }, [x]);
var ko = {
        exports: {}
    },
    pn = {},
    Ho = {
        exports: {}
    },
    Lo = {};
var Rm;

function u0() {
    return Rm || (Rm = 1, (function(l) {
        function i(H, K) {
            var Y = H.length;
            H.push(K);
            e: for (; 0 < Y;) {
                var we = Y - 1 >>> 1,
                    Ce = H[we];
                if (0 < d(Ce, K)) H[we] = K, H[Y] = Ce, Y = we;
                else break e
            }
        }

        function u(H) {
            return H.length === 0 ? null : H[0]
        }

        function o(H) {
            if (H.length === 0) return null;
            var K = H[0],
                Y = H.pop();
            if (Y !== K) {
                H[0] = Y;
                e: for (var we = 0, Ce = H.length, C = Ce >>> 1; we < C;) {
                    var P = 2 * (we + 1) - 1,
                        Q = H[P],
                        I = P + 1,
                        ie = H[I];
                    if (0 > d(Q, Y)) I < Ce && 0 > d(ie, Q) ? (H[we] = ie, H[I] = Y, we = I) : (H[we] = Q, H[P] = Y, we = P);
                    else if (I < Ce && 0 > d(ie, Y)) H[we] = ie, H[I] = Y, we = I;
                    else break e
                }
            }
            return K
        }

        function d(H, K) {
            var Y = H.sortIndex - K.sortIndex;
            return Y !== 0 ? Y : H.id - K.id
        }
        if (l.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var p = performance;
            l.unstable_now = function() {
                return p.now()
            }
        } else {
            var m = Date,
                h = m.now();
            l.unstable_now = function() {
                return m.now() - h
            }
        }
        var b = [],
            y = [],
            j = 1,
            v = null,
            S = 3,
            z = !1,
            M = !1,
            E = !1,
            O = !1,
            U = typeof setTimeout == "function" ? setTimeout : null,
            Z = typeof clearTimeout == "function" ? clearTimeout : null,
            V = typeof setImmediate < "u" ? setImmediate : null;

        function J(H) {
            for (var K = u(y); K !== null;) {
                if (K.callback === null) o(y);
                else if (K.startTime <= H) o(y), K.sortIndex = K.expirationTime, i(b, K);
                else break;
                K = u(y)
            }
        }

        function ee(H) {
            if (E = !1, J(H), !M)
                if (u(b) !== null) M = !0, G || (G = !0, ue());
                else {
                    var K = u(y);
                    K !== null && je(ee, K.startTime - H)
                }
        }
        var G = !1,
            X = -1,
            A = 5,
            ae = -1;

        function ze() {
            return O ? !0 : !(l.unstable_now() - ae < A)
        }

        function ne() {
            if (O = !1, G) {
                var H = l.unstable_now();
                ae = H;
                var K = !0;
                try {
                    e: {
                        M = !1,
                        E && (E = !1, Z(X), X = -1),
                        z = !0;
                        var Y = S;
                        try {
                            t: {
                                for (J(H), v = u(b); v !== null && !(v.expirationTime > H && ze());) {
                                    var we = v.callback;
                                    if (typeof we == "function") {
                                        v.callback = null, S = v.priorityLevel;
                                        var Ce = we(v.expirationTime <= H);
                                        if (H = l.unstable_now(), typeof Ce == "function") {
                                            v.callback = Ce, J(H), K = !0;
                                            break t
                                        }
                                        v === u(b) && o(b), J(H)
                                    } else o(b);
                                    v = u(b)
                                }
                                if (v !== null) K = !0;
                                else {
                                    var C = u(y);
                                    C !== null && je(ee, C.startTime - H), K = !1
                                }
                            }
                            break e
                        }
                        finally {
                            v = null, S = Y, z = !1
                        }
                        K = void 0
                    }
                }
                finally {
                    K ? ue() : G = !1
                }
            }
        }
        var ue;
        if (typeof V == "function") ue = function() {
            V(ne)
        };
        else if (typeof MessageChannel < "u") {
            var Be = new MessageChannel,
                ke = Be.port2;
            Be.port1.onmessage = ne, ue = function() {
                ke.postMessage(null)
            }
        } else ue = function() {
            U(ne, 0)
        };

        function je(H, K) {
            X = U(function() {
                H(l.unstable_now())
            }, K)
        }
        l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(H) {
            H.callback = null
        }, l.unstable_forceFrameRate = function(H) {
            0 > H || 125 < H ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < H ? Math.floor(1e3 / H) : 5
        }, l.unstable_getCurrentPriorityLevel = function() {
            return S
        }, l.unstable_next = function(H) {
            switch (S) {
                case 1:
                case 2:
                case 3:
                    var K = 3;
                    break;
                default:
                    K = S
            }
            var Y = S;
            S = K;
            try {
                return H()
            } finally {
                S = Y
            }
        }, l.unstable_requestPaint = function() {
            O = !0
        }, l.unstable_runWithPriority = function(H, K) {
            switch (H) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    H = 3
            }
            var Y = S;
            S = H;
            try {
                return K()
            } finally {
                S = Y
            }
        }, l.unstable_scheduleCallback = function(H, K, Y) {
            var we = l.unstable_now();
            switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? we + Y : we) : Y = we, H) {
                case 1:
                    var Ce = -1;
                    break;
                case 2:
                    Ce = 250;
                    break;
                case 5:
                    Ce = 1073741823;
                    break;
                case 4:
                    Ce = 1e4;
                    break;
                default:
                    Ce = 5e3
            }
            return Ce = Y + Ce, H = {
                id: j++,
                callback: K,
                priorityLevel: H,
                startTime: Y,
                expirationTime: Ce,
                sortIndex: -1
            }, Y > we ? (H.sortIndex = Y, i(y, H), u(b) === null && H === u(y) && (E ? (Z(X), X = -1) : E = !0, je(ee, Y - we))) : (H.sortIndex = Ce, i(b, H), M || z || (M = !0, G || (G = !0, ue()))), H
        }, l.unstable_shouldYield = ze, l.unstable_wrapCallback = function(H) {
            var K = S;
            return function() {
                var Y = S;
                S = K;
                try {
                    return H.apply(this, arguments)
                } finally {
                    S = Y
                }
            }
        }
    })(Lo)), Lo
}
var Tm;

function d0() {
    return Tm || (Tm = 1, Ho.exports = u0()), Ho.exports
}
var Uo = {
        exports: {}
    },
    nt = {};
var _m;

function f0() {
    if (_m) return nt;
    _m = 1;
    var l = ou();

    function i(b) {
        var y = "https://react.dev/errors/" + b;
        if (1 < arguments.length) {
            y += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var j = 2; j < arguments.length; j++) y += "&args[]=" + encodeURIComponent(arguments[j])
        }
        return "Minified React error #" + b + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function u() {}
    var o = {
            d: {
                f: u,
                r: function() {
                    throw Error(i(522))
                },
                D: u,
                C: u,
                L: u,
                m: u,
                X: u,
                S: u,
                M: u
            },
            p: 0,
            findDOMNode: null
        },
        d = Symbol.for("react.portal");

    function p(b, y, j) {
        var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: d,
            key: v == null ? null : "" + v,
            children: b,
            containerInfo: y,
            implementation: j
        }
    }
    var m = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function h(b, y) {
        if (b === "font") return "";
        if (typeof y == "string") return y === "use-credentials" ? y : ""
    }
    return nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, nt.createPortal = function(b, y) {
        var j = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11) throw Error(i(299));
        return p(b, y, null, j)
    }, nt.flushSync = function(b) {
        var y = m.T,
            j = o.p;
        try {
            if (m.T = null, o.p = 2, b) return b()
        } finally {
            m.T = y, o.p = j, o.d.f()
        }
    }, nt.preconnect = function(b, y) {
        typeof b == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, o.d.C(b, y))
    }, nt.prefetchDNS = function(b) {
        typeof b == "string" && o.d.D(b)
    }, nt.preinit = function(b, y) {
        if (typeof b == "string" && y && typeof y.as == "string") {
            var j = y.as,
                v = h(j, y.crossOrigin),
                S = typeof y.integrity == "string" ? y.integrity : void 0,
                z = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
            j === "style" ? o.d.S(b, typeof y.precedence == "string" ? y.precedence : void 0, {
                crossOrigin: v,
                integrity: S,
                fetchPriority: z
            }) : j === "script" && o.d.X(b, {
                crossOrigin: v,
                integrity: S,
                fetchPriority: z,
                nonce: typeof y.nonce == "string" ? y.nonce : void 0
            })
        }
    }, nt.preinitModule = function(b, y) {
        if (typeof b == "string")
            if (typeof y == "object" && y !== null) {
                if (y.as == null || y.as === "script") {
                    var j = h(y.as, y.crossOrigin);
                    o.d.M(b, {
                        crossOrigin: j,
                        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
                        nonce: typeof y.nonce == "string" ? y.nonce : void 0
                    })
                }
            } else y == null && o.d.M(b)
    }, nt.preload = function(b, y) {
        if (typeof b == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
            var j = y.as,
                v = h(j, y.crossOrigin);
            o.d.L(b, j, {
                crossOrigin: v,
                integrity: typeof y.integrity == "string" ? y.integrity : void 0,
                nonce: typeof y.nonce == "string" ? y.nonce : void 0,
                type: typeof y.type == "string" ? y.type : void 0,
                fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
                referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
                imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
                imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
                media: typeof y.media == "string" ? y.media : void 0
            })
        }
    }, nt.preloadModule = function(b, y) {
        if (typeof b == "string")
            if (y) {
                var j = h(y.as, y.crossOrigin);
                o.d.m(b, {
                    as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
                    crossOrigin: j,
                    integrity: typeof y.integrity == "string" ? y.integrity : void 0
                })
            } else o.d.m(b)
    }, nt.requestFormReset = function(b) {
        o.d.r(b)
    }, nt.unstable_batchedUpdates = function(b, y) {
        return b(y)
    }, nt.useFormState = function(b, y, j) {
        return m.H.useFormState(b, y, j)
    }, nt.useFormStatus = function() {
        return m.H.useHostTransitionStatus()
    }, nt.version = "19.2.3", nt
}
var zm;

function gh() {
    if (zm) return Uo.exports;
    zm = 1;

    function l() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)
        } catch (i) {
            console.error(i)
        }
    }
    return l(), Uo.exports = f0(), Uo.exports
}
var km;

function p0() {
    if (km) return pn;
    km = 1;
    var l = d0(),
        i = ou(),
        u = gh();

    function o(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function d(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function p(e) {
        var t = e,
            a = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return; while (e)
        }
        return t.tag === 3 ? a : null
    }

    function m(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function h(e) {
        if (e.tag === 31) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function b(e) {
        if (p(e) !== e) throw Error(o(188))
    }

    function y(e) {
        var t = e.alternate;
        if (!t) {
            if (t = p(e), t === null) throw Error(o(188));
            return t !== e ? null : e
        }
        for (var a = e, s = t;;) {
            var c = a.return;
            if (c === null) break;
            var r = c.alternate;
            if (r === null) {
                if (s = c.return, s !== null) {
                    a = s;
                    continue
                }
                break
            }
            if (c.child === r.child) {
                for (r = c.child; r;) {
                    if (r === a) return b(c), e;
                    if (r === s) return b(c), t;
                    r = r.sibling
                }
                throw Error(o(188))
            }
            if (a.return !== s.return) a = c, s = r;
            else {
                for (var f = !1, g = c.child; g;) {
                    if (g === a) {
                        f = !0, a = c, s = r;
                        break
                    }
                    if (g === s) {
                        f = !0, s = c, a = r;
                        break
                    }
                    g = g.sibling
                }
                if (!f) {
                    for (g = r.child; g;) {
                        if (g === a) {
                            f = !0, a = r, s = c;
                            break
                        }
                        if (g === s) {
                            f = !0, s = r, a = c;
                            break
                        }
                        g = g.sibling
                    }
                    if (!f) throw Error(o(189))
                }
            }
            if (a.alternate !== s) throw Error(o(190))
        }
        if (a.tag !== 3) throw Error(o(188));
        return a.stateNode.current === a ? e : t
    }

    function j(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null;) {
            if (t = j(e), t !== null) return t;
            e = e.sibling
        }
        return null
    }
    var v = Object.assign,
        S = Symbol.for("react.element"),
        z = Symbol.for("react.transitional.element"),
        M = Symbol.for("react.portal"),
        E = Symbol.for("react.fragment"),
        O = Symbol.for("react.strict_mode"),
        U = Symbol.for("react.profiler"),
        Z = Symbol.for("react.consumer"),
        V = Symbol.for("react.context"),
        J = Symbol.for("react.forward_ref"),
        ee = Symbol.for("react.suspense"),
        G = Symbol.for("react.suspense_list"),
        X = Symbol.for("react.memo"),
        A = Symbol.for("react.lazy"),
        ae = Symbol.for("react.activity"),
        ze = Symbol.for("react.memo_cache_sentinel"),
        ne = Symbol.iterator;

    function ue(e) {
        return e === null || typeof e != "object" ? null : (e = ne && e[ne] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var Be = Symbol.for("react.client.reference");

    function ke(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.$$typeof === Be ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case E:
                return "Fragment";
            case U:
                return "Profiler";
            case O:
                return "StrictMode";
            case ee:
                return "Suspense";
            case G:
                return "SuspenseList";
            case ae:
                return "Activity"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case M:
                return "Portal";
            case V:
                return e.displayName || "Context";
            case Z:
                return (e._context.displayName || "Context") + ".Consumer";
            case J:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case X:
                return t = e.displayName || null, t !== null ? t : ke(e.type) || "Memo";
            case A:
                t = e._payload, e = e._init;
                try {
                    return ke(e(t))
                } catch {}
        }
        return null
    }
    var je = Array.isArray,
        H = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        K = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        Y = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        we = [],
        Ce = -1;

    function C(e) {
        return {
            current: e
        }
    }

    function P(e) {
        0 > Ce || (e.current = we[Ce], we[Ce] = null, Ce--)
    }

    function Q(e, t) {
        Ce++, we[Ce] = e.current, e.current = t
    }
    var I = C(null),
        ie = C(null),
        pe = C(null),
        ce = C(null);

    function Fe(e, t) {
        switch (Q(pe, t), Q(ie, e), Q(I, null), t.nodeType) {
            case 9:
            case 11:
                e = (e = t.documentElement) && (e = e.namespaceURI) ? Jp(e) : 0;
                break;
            default:
                if (e = t.tagName, t = t.namespaceURI) t = Jp(t), e = Fp(t, e);
                else switch (e) {
                    case "svg":
                        e = 1;
                        break;
                    case "math":
                        e = 2;
                        break;
                    default:
                        e = 0
                }
        }
        P(I), Q(I, e)
    }

    function _e() {
        P(I), P(ie), P(pe)
    }

    function Xt(e) {
        e.memoizedState !== null && Q(ce, e);
        var t = I.current,
            a = Fp(t, e.type);
        t !== a && (Q(ie, e), Q(I, a))
    }

    function wa(e) {
        ie.current === e && (P(I), P(ie)), ce.current === e && (P(ce), rn._currentValue = Y)
    }
    var Ea, Eu;

    function ts(e) {
        if (Ea === void 0) try {
            throw Error()
        } catch (a) {
            var t = a.stack.trim().match(/\n( *(at )?)/);
            Ea = t && t[1] || "", Eu = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + Ea + e + Eu
    }
    var hr = !1;

    function gr(e, t) {
        if (!e || hr) return "";
        hr = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var s = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var q = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(q.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(q, [])
                                } catch (k) {
                                    var _ = k
                                }
                                Reflect.construct(e, [], q)
                            } else {
                                try {
                                    q.call()
                                } catch (k) {
                                    _ = k
                                }
                                e.call(q.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (k) {
                                _ = k
                            }(q = e()) && typeof q.catch == "function" && q.catch(function() {})
                        }
                    } catch (k) {
                        if (k && _ && typeof k.stack == "string") return [k.stack, _.stack]
                    }
                    return [null, null]
                }
            };
            s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var c = Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot, "name");
            c && c.configurable && Object.defineProperty(s.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var r = s.DetermineComponentFrameRoot(),
                f = r[0],
                g = r[1];
            if (f && g) {
                var N = f.split(`
`),
                    T = g.split(`
`);
                for (c = s = 0; s < N.length && !N[s].includes("DetermineComponentFrameRoot");) s++;
                for (; c < T.length && !T[c].includes("DetermineComponentFrameRoot");) c++;
                if (s === N.length || c === T.length)
                    for (s = N.length - 1, c = T.length - 1; 1 <= s && 0 <= c && N[s] !== T[c];) c--;
                for (; 1 <= s && 0 <= c; s--, c--)
                    if (N[s] !== T[c]) {
                        if (s !== 1 || c !== 1)
                            do
                                if (s--, c--, 0 > c || N[s] !== T[c]) {
                                    var L = `
` + N[s].replace(" at new ", " at ");
                                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), L
                                } while (1 <= s && 0 <= c);
                        break
                    }
            }
        } finally {
            hr = !1, Error.prepareStackTrace = a
        }
        return (a = e ? e.displayName || e.name : "") ? ts(a) : ""
    }

    function Hg(e, t) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return ts(e.type);
            case 16:
                return ts("Lazy");
            case 13:
                return e.child !== t && t !== null ? ts("Suspense Fallback") : ts("Suspense");
            case 19:
                return ts("SuspenseList");
            case 0:
            case 15:
                return gr(e.type, !1);
            case 11:
                return gr(e.type.render, !1);
            case 1:
                return gr(e.type, !0);
            case 31:
                return ts("Activity");
            default:
                return ""
        }
    }

    function Cu(e) {
        try {
            var t = "",
                a = null;
            do t += Hg(e, a), a = e, e = e.return; while (e);
            return t
        } catch (s) {
            return `
Error generating stack: ` + s.message + `
` + s.stack
        }
    }
    var xr = Object.prototype.hasOwnProperty,
        yr = l.unstable_scheduleCallback,
        vr = l.unstable_cancelCallback,
        Lg = l.unstable_shouldYield,
        Ug = l.unstable_requestPaint,
        gt = l.unstable_now,
        Bg = l.unstable_getCurrentPriorityLevel,
        Au = l.unstable_ImmediatePriority,
        Mu = l.unstable_UserBlockingPriority,
        On = l.unstable_NormalPriority,
        Pg = l.unstable_LowPriority,
        Du = l.unstable_IdlePriority,
        qg = l.log,
        Yg = l.unstable_setDisableYieldValue,
        vl = null,
        xt = null;

    function Ca(e) {
        if (typeof qg == "function" && Yg(e), xt && typeof xt.setStrictMode == "function") try {
            xt.setStrictMode(vl, e)
        } catch {}
    }
    var yt = Math.clz32 ? Math.clz32 : Qg,
        Gg = Math.log,
        Xg = Math.LN2;

    function Qg(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (Gg(e) / Xg | 0) | 0
    }
    var Rn = 256,
        Tn = 262144,
        _n = 4194304;

    function as(e) {
        var t = e & 42;
        if (t !== 0) return t;
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
                return e & 261888;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 3932160;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return e & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return e
        }
    }

    function zn(e, t, a) {
        var s = e.pendingLanes;
        if (s === 0) return 0;
        var c = 0,
            r = e.suspendedLanes,
            f = e.pingedLanes;
        e = e.warmLanes;
        var g = s & 134217727;
        return g !== 0 ? (s = g & ~r, s !== 0 ? c = as(s) : (f &= g, f !== 0 ? c = as(f) : a || (a = g & ~e, a !== 0 && (c = as(a))))) : (g = s & ~r, g !== 0 ? c = as(g) : f !== 0 ? c = as(f) : a || (a = s & ~e, a !== 0 && (c = as(a)))), c === 0 ? 0 : t !== 0 && t !== c && (t & r) === 0 && (r = c & -c, a = t & -t, r >= a || r === 32 && (a & 4194048) !== 0) ? t : c
    }

    function bl(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }

    function Vg(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function Ou() {
        var e = _n;
        return _n <<= 1, (_n & 62914560) === 0 && (_n = 4194304), e
    }

    function br(e) {
        for (var t = [], a = 0; 31 > a; a++) t.push(e);
        return t
    }

    function jl(e, t) {
        e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
    }

    function Zg(e, t, a, s, c, r) {
        var f = e.pendingLanes;
        e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
        var g = e.entanglements,
            N = e.expirationTimes,
            T = e.hiddenUpdates;
        for (a = f & ~a; 0 < a;) {
            var L = 31 - yt(a),
                q = 1 << L;
            g[L] = 0, N[L] = -1;
            var _ = T[L];
            if (_ !== null)
                for (T[L] = null, L = 0; L < _.length; L++) {
                    var k = _[L];
                    k !== null && (k.lane &= -536870913)
                }
            a &= ~q
        }
        s !== 0 && Ru(e, s, 0), r !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= r & ~(f & ~t))
    }

    function Ru(e, t, a) {
        e.pendingLanes |= t, e.suspendedLanes &= ~t;
        var s = 31 - yt(t);
        e.entangledLanes |= t, e.entanglements[s] = e.entanglements[s] | 1073741824 | a & 261930
    }

    function Tu(e, t) {
        var a = e.entangledLanes |= t;
        for (e = e.entanglements; a;) {
            var s = 31 - yt(a),
                c = 1 << s;
            c & t | e[s] & t && (e[s] |= t), a &= ~c
        }
    }

    function _u(e, t) {
        var a = t & -t;
        return a = (a & 42) !== 0 ? 1 : jr(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a
    }

    function jr(e) {
        switch (e) {
            case 2:
                e = 1;
                break;
            case 8:
                e = 4;
                break;
            case 32:
                e = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                e = 128;
                break;
            case 268435456:
                e = 134217728;
                break;
            default:
                e = 0
        }
        return e
    }

    function Nr(e) {
        return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function zu() {
        var e = K.p;
        return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : bm(e.type))
    }

    function ku(e, t) {
        var a = K.p;
        try {
            return K.p = e, t()
        } finally {
            K.p = a
        }
    }
    var Aa = Math.random().toString(36).slice(2),
        et = "__reactFiber$" + Aa,
        rt = "__reactProps$" + Aa,
        ws = "__reactContainer$" + Aa,
        Sr = "__reactEvents$" + Aa,
        Kg = "__reactListeners$" + Aa,
        Ig = "__reactHandles$" + Aa,
        Hu = "__reactResources$" + Aa,
        Nl = "__reactMarker$" + Aa;

    function wr(e) {
        delete e[et], delete e[rt], delete e[Sr], delete e[Kg], delete e[Ig]
    }

    function Es(e) {
        var t = e[et];
        if (t) return t;
        for (var a = e.parentNode; a;) {
            if (t = a[ws] || a[et]) {
                if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
                    for (e = lm(e); e !== null;) {
                        if (a = e[et]) return a;
                        e = lm(e)
                    }
                return t
            }
            e = a, a = e.parentNode
        }
        return null
    }

    function Cs(e) {
        if (e = e[et] || e[ws]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e
        }
        return null
    }

    function Sl(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
        throw Error(o(33))
    }

    function As(e) {
        var t = e[Hu];
        return t || (t = e[Hu] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), t
    }

    function $e(e) {
        e[Nl] = !0
    }
    var Lu = new Set,
        Uu = {};

    function ss(e, t) {
        Ms(e, t), Ms(e + "Capture", t)
    }

    function Ms(e, t) {
        for (Uu[e] = t, e = 0; e < t.length; e++) Lu.add(t[e])
    }
    var Jg = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        Bu = {},
        Pu = {};

    function Fg(e) {
        return xr.call(Pu, e) ? !0 : xr.call(Bu, e) ? !1 : Jg.test(e) ? Pu[e] = !0 : (Bu[e] = !0, !1)
    }

    function kn(e, t, a) {
        if (Fg(t))
            if (a === null) e.removeAttribute(t);
            else {
                switch (typeof a) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        e.removeAttribute(t);
                        return;
                    case "boolean":
                        var s = t.toLowerCase().slice(0, 5);
                        if (s !== "data-" && s !== "aria-") {
                            e.removeAttribute(t);
                            return
                        }
                }
                e.setAttribute(t, "" + a)
            }
    }

    function Hn(e, t, a) {
        if (a === null) e.removeAttribute(t);
        else {
            switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(t);
                    return
            }
            e.setAttribute(t, "" + a)
        }
    }

    function ea(e, t, a, s) {
        if (s === null) e.removeAttribute(a);
        else {
            switch (typeof s) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(a);
                    return
            }
            e.setAttributeNS(t, a, "" + s)
        }
    }

    function Ct(e) {
        switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }

    function qu(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function $g(e, t, a) {
        var s = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
        if (!e.hasOwnProperty(t) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
            var c = s.get,
                r = s.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return c.call(this)
                },
                set: function(f) {
                    a = "" + f, r.call(this, f)
                }
            }), Object.defineProperty(e, t, {
                enumerable: s.enumerable
            }), {
                getValue: function() {
                    return a
                },
                setValue: function(f) {
                    a = "" + f
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }

    function Er(e) {
        if (!e._valueTracker) {
            var t = qu(e) ? "checked" : "value";
            e._valueTracker = $g(e, t, "" + e[t])
        }
    }

    function Yu(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var a = t.getValue(),
            s = "";
        return e && (s = qu(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== a ? (t.setValue(e), !0) : !1
    }

    function Ln(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var Wg = /[\n"\\]/g;

    function At(e) {
        return e.replace(Wg, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }

    function Cr(e, t, a, s, c, r, f, g) {
        e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ct(t)) : e.value !== "" + Ct(t) && (e.value = "" + Ct(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? Ar(e, f, Ct(t)) : a != null ? Ar(e, f, Ct(a)) : s != null && e.removeAttribute("value"), c == null && r != null && (e.defaultChecked = !!r), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.name = "" + Ct(g) : e.removeAttribute("name")
    }

    function Gu(e, t, a, s, c, r, f, g) {
        if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (e.type = r), t != null || a != null) {
            if (!(r !== "submit" && r !== "reset" || t != null)) {
                Er(e);
                return
            }
            a = a != null ? "" + Ct(a) : "", t = t != null ? "" + Ct(t) : a, g || t === e.value || (e.value = t), e.defaultValue = t
        }
        s = s ?? c, s = typeof s != "function" && typeof s != "symbol" && !!s, e.checked = g ? e.checked : !!s, e.defaultChecked = !!s, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), Er(e)
    }

    function Ar(e, t, a) {
        t === "number" && Ln(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a)
    }

    function Ds(e, t, a, s) {
        if (e = e.options, t) {
            t = {};
            for (var c = 0; c < a.length; c++) t["$" + a[c]] = !0;
            for (a = 0; a < e.length; a++) c = t.hasOwnProperty("$" + e[a].value), e[a].selected !== c && (e[a].selected = c), c && s && (e[a].defaultSelected = !0)
        } else {
            for (a = "" + Ct(a), t = null, c = 0; c < e.length; c++) {
                if (e[c].value === a) {
                    e[c].selected = !0, s && (e[c].defaultSelected = !0);
                    return
                }
                t !== null || e[c].disabled || (t = e[c])
            }
            t !== null && (t.selected = !0)
        }
    }

    function Xu(e, t, a) {
        if (t != null && (t = "" + Ct(t), t !== e.value && (e.value = t), a == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = a != null ? "" + Ct(a) : ""
    }

    function Qu(e, t, a, s) {
        if (t == null) {
            if (s != null) {
                if (a != null) throw Error(o(92));
                if (je(s)) {
                    if (1 < s.length) throw Error(o(93));
                    s = s[0]
                }
                a = s
            }
            a == null && (a = ""), t = a
        }
        a = Ct(t), e.defaultValue = a, s = e.textContent, s === a && s !== "" && s !== null && (e.value = s), Er(e)
    }

    function Os(e, t) {
        if (t) {
            var a = e.firstChild;
            if (a && a === e.lastChild && a.nodeType === 3) {
                a.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var ex = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function Vu(e, t, a) {
        var s = t.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? s ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : s ? e.setProperty(t, a) : typeof a != "number" || a === 0 || ex.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px"
    }

    function Zu(e, t, a) {
        if (t != null && typeof t != "object") throw Error(o(62));
        if (e = e.style, a != null) {
            for (var s in a) !a.hasOwnProperty(s) || t != null && t.hasOwnProperty(s) || (s.indexOf("--") === 0 ? e.setProperty(s, "") : s === "float" ? e.cssFloat = "" : e[s] = "");
            for (var c in t) s = t[c], t.hasOwnProperty(c) && a[c] !== s && Vu(e, c, s)
        } else
            for (var r in t) t.hasOwnProperty(r) && Vu(e, r, t[r])
    }

    function Mr(e) {
        if (e.indexOf("-") === -1) return !1;
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var tx = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        ax = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function Un(e) {
        return ax.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }

    function ta() {}
    var Dr = null;

    function Or(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }
    var Rs = null,
        Ts = null;

    function Ku(e) {
        var t = Cs(e);
        if (t && (e = t.stateNode)) {
            var a = e[rt] || null;
            e: switch (e = t.stateNode, t.type) {
                case "input":
                    if (Cr(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
                        for (a = e; a.parentNode;) a = a.parentNode;
                        for (a = a.querySelectorAll('input[name="' + At("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
                            var s = a[t];
                            if (s !== e && s.form === e.form) {
                                var c = s[rt] || null;
                                if (!c) throw Error(o(90));
                                Cr(s, c.value, c.defaultValue, c.defaultValue, c.checked, c.defaultChecked, c.type, c.name)
                            }
                        }
                        for (t = 0; t < a.length; t++) s = a[t], s.form === e.form && Yu(s)
                    }
                    break e;
                case "textarea":
                    Xu(e, a.value, a.defaultValue);
                    break e;
                case "select":
                    t = a.value, t != null && Ds(e, !!a.multiple, t, !1)
            }
        }
    }
    var Rr = !1;

    function Iu(e, t, a) {
        if (Rr) return e(t, a);
        Rr = !0;
        try {
            var s = e(t);
            return s
        } finally {
            if (Rr = !1, (Rs !== null || Ts !== null) && (Ec(), Rs && (t = Rs, e = Ts, Ts = Rs = null, Ku(t), e)))
                for (t = 0; t < e.length; t++) Ku(e[t])
        }
    }

    function wl(e, t) {
        var a = e.stateNode;
        if (a === null) return null;
        var s = a[rt] || null;
        if (s === null) return null;
        a = s[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (s = !s.disabled) || (e = e.type, s = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !s;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (a && typeof a != "function") throw Error(o(231, t, typeof a));
        return a
    }
    var aa = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        Tr = !1;
    if (aa) try {
        var El = {};
        Object.defineProperty(El, "passive", {
            get: function() {
                Tr = !0
            }
        }), window.addEventListener("test", El, El), window.removeEventListener("test", El, El)
    } catch {
        Tr = !1
    }
    var Ma = null,
        _r = null,
        Bn = null;

    function Ju() {
        if (Bn) return Bn;
        var e, t = _r,
            a = t.length,
            s, c = "value" in Ma ? Ma.value : Ma.textContent,
            r = c.length;
        for (e = 0; e < a && t[e] === c[e]; e++);
        var f = a - e;
        for (s = 1; s <= f && t[a - s] === c[r - s]; s++);
        return Bn = c.slice(e, 1 < s ? 1 - s : void 0)
    }

    function Pn(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function qn() {
        return !0
    }

    function Fu() {
        return !1
    }

    function it(e) {
        function t(a, s, c, r, f) {
            this._reactName = a, this._targetInst = c, this.type = s, this.nativeEvent = r, this.target = f, this.currentTarget = null;
            for (var g in e) e.hasOwnProperty(g) && (a = e[g], this[g] = a ? a(r) : r[g]);
            return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? qn : Fu, this.isPropagationStopped = Fu, this
        }
        return v(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = qn)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = qn)
            },
            persist: function() {},
            isPersistent: qn
        }), t
    }
    var ls = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        Yn = it(ls),
        Cl = v({}, ls, {
            view: 0,
            detail: 0
        }),
        sx = it(Cl),
        zr, kr, Al, Gn = v({}, Cl, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Lr,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== Al && (Al && e.type === "mousemove" ? (zr = e.screenX - Al.screenX, kr = e.screenY - Al.screenY) : kr = zr = 0, Al = e), zr)
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : kr
            }
        }),
        $u = it(Gn),
        lx = v({}, Gn, {
            dataTransfer: 0
        }),
        nx = it(lx),
        cx = v({}, Cl, {
            relatedTarget: 0
        }),
        Hr = it(cx),
        rx = v({}, ls, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        ix = it(rx),
        ox = v({}, ls, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        ux = it(ox),
        dx = v({}, ls, {
            data: 0
        }),
        Wu = it(dx),
        fx = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        px = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        mx = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function hx(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = mx[e]) ? !!t[e] : !1
    }

    function Lr() {
        return hx
    }
    var gx = v({}, Cl, {
            key: function(e) {
                if (e.key) {
                    var t = fx[e.key] || e.key;
                    if (t !== "Unidentified") return t
                }
                return e.type === "keypress" ? (e = Pn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? px[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Lr,
            charCode: function(e) {
                return e.type === "keypress" ? Pn(e) : 0
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            },
            which: function(e) {
                return e.type === "keypress" ? Pn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            }
        }),
        xx = it(gx),
        yx = v({}, Gn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        ed = it(yx),
        vx = v({}, Cl, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Lr
        }),
        bx = it(vx),
        jx = v({}, ls, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Nx = it(jx),
        Sx = v({}, Gn, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        wx = it(Sx),
        Ex = v({}, ls, {
            newState: 0,
            oldState: 0
        }),
        Cx = it(Ex),
        Ax = [9, 13, 27, 32],
        Ur = aa && "CompositionEvent" in window,
        Ml = null;
    aa && "documentMode" in document && (Ml = document.documentMode);
    var Mx = aa && "TextEvent" in window && !Ml,
        td = aa && (!Ur || Ml && 8 < Ml && 11 >= Ml),
        ad = " ",
        sd = !1;

    function ld(e, t) {
        switch (e) {
            case "keyup":
                return Ax.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function nd(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }
    var _s = !1;

    function Dx(e, t) {
        switch (e) {
            case "compositionend":
                return nd(t);
            case "keypress":
                return t.which !== 32 ? null : (sd = !0, ad);
            case "textInput":
                return e = t.data, e === ad && sd ? null : e;
            default:
                return null
        }
    }

    function Ox(e, t) {
        if (_s) return e === "compositionend" || !Ur && ld(e, t) ? (e = Ju(), Bn = _r = Ma = null, _s = !1, e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return td && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var Rx = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function cd(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Rx[e.type] : t === "textarea"
    }

    function rd(e, t, a, s) {
        Rs ? Ts ? Ts.push(s) : Ts = [s] : Rs = s, t = Tc(t, "onChange"), 0 < t.length && (a = new Yn("onChange", "change", null, a, s), e.push({
            event: a,
            listeners: t
        }))
    }
    var Dl = null,
        Ol = null;

    function Tx(e) {
        Xp(e, 0)
    }

    function Xn(e) {
        var t = Sl(e);
        if (Yu(t)) return e
    }

    function id(e, t) {
        if (e === "change") return t
    }
    var od = !1;
    if (aa) {
        var Br;
        if (aa) {
            var Pr = "oninput" in document;
            if (!Pr) {
                var ud = document.createElement("div");
                ud.setAttribute("oninput", "return;"), Pr = typeof ud.oninput == "function"
            }
            Br = Pr
        } else Br = !1;
        od = Br && (!document.documentMode || 9 < document.documentMode)
    }

    function dd() {
        Dl && (Dl.detachEvent("onpropertychange", fd), Ol = Dl = null)
    }

    function fd(e) {
        if (e.propertyName === "value" && Xn(Ol)) {
            var t = [];
            rd(t, Ol, e, Or(e)), Iu(Tx, t)
        }
    }

    function _x(e, t, a) {
        e === "focusin" ? (dd(), Dl = t, Ol = a, Dl.attachEvent("onpropertychange", fd)) : e === "focusout" && dd()
    }

    function zx(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Xn(Ol)
    }

    function kx(e, t) {
        if (e === "click") return Xn(t)
    }

    function Hx(e, t) {
        if (e === "input" || e === "change") return Xn(t)
    }

    function Lx(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var vt = typeof Object.is == "function" ? Object.is : Lx;

    function Rl(e, t) {
        if (vt(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var a = Object.keys(e),
            s = Object.keys(t);
        if (a.length !== s.length) return !1;
        for (s = 0; s < a.length; s++) {
            var c = a[s];
            if (!xr.call(t, c) || !vt(e[c], t[c])) return !1
        }
        return !0
    }

    function pd(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function md(e, t) {
        var a = pd(e);
        e = 0;
        for (var s; a;) {
            if (a.nodeType === 3) {
                if (s = e + a.textContent.length, e <= t && s >= t) return {
                    node: a,
                    offset: t - e
                };
                e = s
            }
            e: {
                for (; a;) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break e
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = pd(a)
        }
    }

    function hd(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? hd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function gd(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = Ln(e.document); t instanceof e.HTMLIFrameElement;) {
            try {
                var a = typeof t.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a) e = t.contentWindow;
            else break;
            t = Ln(e.document)
        }
        return t
    }

    function qr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var Ux = aa && "documentMode" in document && 11 >= document.documentMode,
        zs = null,
        Yr = null,
        Tl = null,
        Gr = !1;

    function xd(e, t, a) {
        var s = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        Gr || zs == null || zs !== Ln(s) || (s = zs, "selectionStart" in s && qr(s) ? s = {
            start: s.selectionStart,
            end: s.selectionEnd
        } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset
        }), Tl && Rl(Tl, s) || (Tl = s, s = Tc(Yr, "onSelect"), 0 < s.length && (t = new Yn("onSelect", "select", null, t, a), e.push({
            event: t,
            listeners: s
        }), t.target = zs)))
    }

    function ns(e, t) {
        var a = {};
        return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a
    }
    var ks = {
            animationend: ns("Animation", "AnimationEnd"),
            animationiteration: ns("Animation", "AnimationIteration"),
            animationstart: ns("Animation", "AnimationStart"),
            transitionrun: ns("Transition", "TransitionRun"),
            transitionstart: ns("Transition", "TransitionStart"),
            transitioncancel: ns("Transition", "TransitionCancel"),
            transitionend: ns("Transition", "TransitionEnd")
        },
        Xr = {},
        yd = {};
    aa && (yd = document.createElement("div").style, "AnimationEvent" in window || (delete ks.animationend.animation, delete ks.animationiteration.animation, delete ks.animationstart.animation), "TransitionEvent" in window || delete ks.transitionend.transition);

    function cs(e) {
        if (Xr[e]) return Xr[e];
        if (!ks[e]) return e;
        var t = ks[e],
            a;
        for (a in t)
            if (t.hasOwnProperty(a) && a in yd) return Xr[e] = t[a];
        return e
    }
    var vd = cs("animationend"),
        bd = cs("animationiteration"),
        jd = cs("animationstart"),
        Bx = cs("transitionrun"),
        Px = cs("transitionstart"),
        qx = cs("transitioncancel"),
        Nd = cs("transitionend"),
        Sd = new Map,
        Qr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Qr.push("scrollEnd");

    function Lt(e, t) {
        Sd.set(e, t), ss(t, [e])
    }
    var Qn = typeof reportError == "function" ? reportError : function(e) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                    error: e
                });
                if (!window.dispatchEvent(t)) return
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", e);
                return
            }
            console.error(e)
        },
        Mt = [],
        Hs = 0,
        Vr = 0;

    function Vn() {
        for (var e = Hs, t = Vr = Hs = 0; t < e;) {
            var a = Mt[t];
            Mt[t++] = null;
            var s = Mt[t];
            Mt[t++] = null;
            var c = Mt[t];
            Mt[t++] = null;
            var r = Mt[t];
            if (Mt[t++] = null, s !== null && c !== null) {
                var f = s.pending;
                f === null ? c.next = c : (c.next = f.next, f.next = c), s.pending = c
            }
            r !== 0 && wd(a, c, r)
        }
    }

    function Zn(e, t, a, s) {
        Mt[Hs++] = e, Mt[Hs++] = t, Mt[Hs++] = a, Mt[Hs++] = s, Vr |= s, e.lanes |= s, e = e.alternate, e !== null && (e.lanes |= s)
    }

    function Zr(e, t, a, s) {
        return Zn(e, t, a, s), Kn(e)
    }

    function rs(e, t) {
        return Zn(e, null, null, t), Kn(e)
    }

    function wd(e, t, a) {
        e.lanes |= a;
        var s = e.alternate;
        s !== null && (s.lanes |= a);
        for (var c = !1, r = e.return; r !== null;) r.childLanes |= a, s = r.alternate, s !== null && (s.childLanes |= a), r.tag === 22 && (e = r.stateNode, e === null || e._visibility & 1 || (c = !0)), e = r, r = r.return;
        return e.tag === 3 ? (r = e.stateNode, c && t !== null && (c = 31 - yt(a), e = r.hiddenUpdates, s = e[c], s === null ? e[c] = [t] : s.push(t), t.lane = a | 536870912), r) : null
    }

    function Kn(e) {
        if (50 < en) throw en = 0, ao = null, Error(o(185));
        for (var t = e.return; t !== null;) e = t, t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var Ls = {};

    function Yx(e, t, a, s) {
        this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function bt(e, t, a, s) {
        return new Yx(e, t, a, s)
    }

    function Kr(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function sa(e, t) {
        var a = e.alternate;
        return a === null ? (a = bt(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a
    }

    function Ed(e, t) {
        e.flags &= 65011714;
        var a = e.alternate;
        return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }), e
    }

    function In(e, t, a, s, c, r) {
        var f = 0;
        if (s = e, typeof e == "function") Kr(e) && (f = 1);
        else if (typeof e == "string") f = Z1(e, a, I.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else e: switch (e) {
            case ae:
                return e = bt(31, a, t, c), e.elementType = ae, e.lanes = r, e;
            case E:
                return is(a.children, c, r, t);
            case O:
                f = 8, c |= 24;
                break;
            case U:
                return e = bt(12, a, t, c | 2), e.elementType = U, e.lanes = r, e;
            case ee:
                return e = bt(13, a, t, c), e.elementType = ee, e.lanes = r, e;
            case G:
                return e = bt(19, a, t, c), e.elementType = G, e.lanes = r, e;
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case V:
                        f = 10;
                        break e;
                    case Z:
                        f = 9;
                        break e;
                    case J:
                        f = 11;
                        break e;
                    case X:
                        f = 14;
                        break e;
                    case A:
                        f = 16, s = null;
                        break e
                }
                f = 29, a = Error(o(130, e === null ? "null" : typeof e, "")), s = null
        }
        return t = bt(f, a, t, c), t.elementType = e, t.type = s, t.lanes = r, t
    }

    function is(e, t, a, s) {
        return e = bt(7, e, s, t), e.lanes = a, e
    }

    function Ir(e, t, a) {
        return e = bt(6, e, null, t), e.lanes = a, e
    }

    function Cd(e) {
        var t = bt(18, null, null, 0);
        return t.stateNode = e, t
    }

    function Jr(e, t, a) {
        return t = bt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = a, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }
    var Ad = new WeakMap;

    function Dt(e, t) {
        if (typeof e == "object" && e !== null) {
            var a = Ad.get(e);
            return a !== void 0 ? a : (t = {
                value: e,
                source: t,
                stack: Cu(t)
            }, Ad.set(e, t), t)
        }
        return {
            value: e,
            source: t,
            stack: Cu(t)
        }
    }
    var Us = [],
        Bs = 0,
        Jn = null,
        _l = 0,
        Ot = [],
        Rt = 0,
        Da = null,
        Qt = 1,
        Vt = "";

    function la(e, t) {
        Us[Bs++] = _l, Us[Bs++] = Jn, Jn = e, _l = t
    }

    function Md(e, t, a) {
        Ot[Rt++] = Qt, Ot[Rt++] = Vt, Ot[Rt++] = Da, Da = e;
        var s = Qt;
        e = Vt;
        var c = 32 - yt(s) - 1;
        s &= ~(1 << c), a += 1;
        var r = 32 - yt(t) + c;
        if (30 < r) {
            var f = c - c % 5;
            r = (s & (1 << f) - 1).toString(32), s >>= f, c -= f, Qt = 1 << 32 - yt(t) + c | a << c | s, Vt = r + e
        } else Qt = 1 << r | a << c | s, Vt = e
    }

    function Fr(e) {
        e.return !== null && (la(e, 1), Md(e, 1, 0))
    }

    function $r(e) {
        for (; e === Jn;) Jn = Us[--Bs], Us[Bs] = null, _l = Us[--Bs], Us[Bs] = null;
        for (; e === Da;) Da = Ot[--Rt], Ot[Rt] = null, Vt = Ot[--Rt], Ot[Rt] = null, Qt = Ot[--Rt], Ot[Rt] = null
    }

    function Dd(e, t) {
        Ot[Rt++] = Qt, Ot[Rt++] = Vt, Ot[Rt++] = Da, Qt = t.id, Vt = t.overflow, Da = e
    }
    var tt = null,
        He = null,
        ve = !1,
        Oa = null,
        Tt = !1,
        Wr = Error(o(519));

    function Ra(e) {
        var t = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw zl(Dt(t, e)), Wr
    }

    function Od(e) {
        var t = e.stateNode,
            a = e.type,
            s = e.memoizedProps;
        switch (t[et] = e, t[rt] = s, a) {
            case "dialog":
                ge("cancel", t), ge("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                ge("load", t);
                break;
            case "video":
            case "audio":
                for (a = 0; a < an.length; a++) ge(an[a], t);
                break;
            case "source":
                ge("error", t);
                break;
            case "img":
            case "image":
            case "link":
                ge("error", t), ge("load", t);
                break;
            case "details":
                ge("toggle", t);
                break;
            case "input":
                ge("invalid", t), Gu(t, s.value, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name, !0);
                break;
            case "select":
                ge("invalid", t);
                break;
            case "textarea":
                ge("invalid", t), Qu(t, s.value, s.defaultValue, s.children)
        }
        a = s.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || s.suppressHydrationWarning === !0 || Kp(t.textContent, a) ? (s.popover != null && (ge("beforetoggle", t), ge("toggle", t)), s.onScroll != null && ge("scroll", t), s.onScrollEnd != null && ge("scrollend", t), s.onClick != null && (t.onclick = ta), t = !0) : t = !1, t || Ra(e, !0)
    }

    function Rd(e) {
        for (tt = e.return; tt;) switch (tt.tag) {
            case 5:
            case 31:
            case 13:
                Tt = !1;
                return;
            case 27:
            case 3:
                Tt = !0;
                return;
            default:
                tt = tt.return
        }
    }

    function Ps(e) {
        if (e !== tt) return !1;
        if (!ve) return Rd(e), ve = !0, !1;
        var t = e.tag,
            a;
        if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || yo(e.type, e.memoizedProps)), a = !a), a && He && Ra(e), Rd(e), t === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
            He = sm(e)
        } else if (t === 31) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
            He = sm(e)
        } else t === 27 ? (t = He, Qa(e.type) ? (e = So, So = null, He = e) : He = t) : He = tt ? zt(e.stateNode.nextSibling) : null;
        return !0
    }

    function os() {
        He = tt = null, ve = !1
    }

    function ei() {
        var e = Oa;
        return e !== null && (ft === null ? ft = e : ft.push.apply(ft, e), Oa = null), e
    }

    function zl(e) {
        Oa === null ? Oa = [e] : Oa.push(e)
    }
    var ti = C(null),
        us = null,
        na = null;

    function Ta(e, t, a) {
        Q(ti, t._currentValue), t._currentValue = a
    }

    function ca(e) {
        e._currentValue = ti.current, P(ti)
    }

    function ai(e, t, a) {
        for (; e !== null;) {
            var s = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === a) break;
            e = e.return
        }
    }

    function si(e, t, a, s) {
        var c = e.child;
        for (c !== null && (c.return = e); c !== null;) {
            var r = c.dependencies;
            if (r !== null) {
                var f = c.child;
                r = r.firstContext;
                e: for (; r !== null;) {
                    var g = r;
                    r = c;
                    for (var N = 0; N < t.length; N++)
                        if (g.context === t[N]) {
                            r.lanes |= a, g = r.alternate, g !== null && (g.lanes |= a), ai(r.return, a, e), s || (f = null);
                            break e
                        } r = g.next
                }
            } else if (c.tag === 18) {
                if (f = c.return, f === null) throw Error(o(341));
                f.lanes |= a, r = f.alternate, r !== null && (r.lanes |= a), ai(f, a, e), f = null
            } else f = c.child;
            if (f !== null) f.return = c;
            else
                for (f = c; f !== null;) {
                    if (f === e) {
                        f = null;
                        break
                    }
                    if (c = f.sibling, c !== null) {
                        c.return = f.return, f = c;
                        break
                    }
                    f = f.return
                }
            c = f
        }
    }

    function qs(e, t, a, s) {
        e = null;
        for (var c = t, r = !1; c !== null;) {
            if (!r) {
                if ((c.flags & 524288) !== 0) r = !0;
                else if ((c.flags & 262144) !== 0) break
            }
            if (c.tag === 10) {
                var f = c.alternate;
                if (f === null) throw Error(o(387));
                if (f = f.memoizedProps, f !== null) {
                    var g = c.type;
                    vt(c.pendingProps.value, f.value) || (e !== null ? e.push(g) : e = [g])
                }
            } else if (c === ce.current) {
                if (f = c.alternate, f === null) throw Error(o(387));
                f.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(rn) : e = [rn])
            }
            c = c.return
        }
        e !== null && si(t, e, a, s), t.flags |= 262144
    }

    function Fn(e) {
        for (e = e.firstContext; e !== null;) {
            if (!vt(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next
        }
        return !1
    }

    function ds(e) {
        us = e, na = null, e = e.dependencies, e !== null && (e.firstContext = null)
    }

    function at(e) {
        return Td(us, e)
    }

    function $n(e, t) {
        return us === null && ds(e), Td(e, t)
    }

    function Td(e, t) {
        var a = t._currentValue;
        if (t = {
                context: t,
                memoizedValue: a,
                next: null
            }, na === null) {
            if (e === null) throw Error(o(308));
            na = t, e.dependencies = {
                lanes: 0,
                firstContext: t
            }, e.flags |= 524288
        } else na = na.next = t;
        return a
    }
    var Gx = typeof AbortController < "u" ? AbortController : function() {
            var e = [],
                t = this.signal = {
                    aborted: !1,
                    addEventListener: function(a, s) {
                        e.push(s)
                    }
                };
            this.abort = function() {
                t.aborted = !0, e.forEach(function(a) {
                    return a()
                })
            }
        },
        Xx = l.unstable_scheduleCallback,
        Qx = l.unstable_NormalPriority,
        Qe = {
            $$typeof: V,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function li() {
        return {
            controller: new Gx,
            data: new Map,
            refCount: 0
        }
    }

    function kl(e) {
        e.refCount--, e.refCount === 0 && Xx(Qx, function() {
            e.controller.abort()
        })
    }
    var Hl = null,
        ni = 0,
        Ys = 0,
        Gs = null;

    function Vx(e, t) {
        if (Hl === null) {
            var a = Hl = [];
            ni = 0, Ys = io(), Gs = {
                status: "pending",
                value: void 0,
                then: function(s) {
                    a.push(s)
                }
            }
        }
        return ni++, t.then(_d, _d), t
    }

    function _d() {
        if (--ni === 0 && Hl !== null) {
            Gs !== null && (Gs.status = "fulfilled");
            var e = Hl;
            Hl = null, Ys = 0, Gs = null;
            for (var t = 0; t < e.length; t++)(0, e[t])()
        }
    }

    function Zx(e, t) {
        var a = [],
            s = {
                status: "pending",
                value: null,
                reason: null,
                then: function(c) {
                    a.push(c)
                }
            };
        return e.then(function() {
            s.status = "fulfilled", s.value = t;
            for (var c = 0; c < a.length; c++)(0, a[c])(t)
        }, function(c) {
            for (s.status = "rejected", s.reason = c, c = 0; c < a.length; c++)(0, a[c])(void 0)
        }), s
    }
    var zd = H.S;
    H.S = function(e, t) {
        yp = gt(), typeof t == "object" && t !== null && typeof t.then == "function" && Vx(e, t), zd !== null && zd(e, t)
    };
    var fs = C(null);

    function ci() {
        var e = fs.current;
        return e !== null ? e : Te.pooledCache
    }

    function Wn(e, t) {
        t === null ? Q(fs, fs.current) : Q(fs, t.pool)
    }

    function kd() {
        var e = ci();
        return e === null ? null : {
            parent: Qe._currentValue,
            pool: e
        }
    }
    var Xs = Error(o(460)),
        ri = Error(o(474)),
        ec = Error(o(542)),
        tc = {
            then: function() {}
        };

    function Hd(e) {
        return e = e.status, e === "fulfilled" || e === "rejected"
    }

    function Ld(e, t, a) {
        switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(ta, ta), t = a), t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason, Bd(e), e;
            default:
                if (typeof t.status == "string") t.then(ta, ta);
                else {
                    if (e = Te, e !== null && 100 < e.shellSuspendCounter) throw Error(o(482));
                    e = t, e.status = "pending", e.then(function(s) {
                        if (t.status === "pending") {
                            var c = t;
                            c.status = "fulfilled", c.value = s
                        }
                    }, function(s) {
                        if (t.status === "pending") {
                            var c = t;
                            c.status = "rejected", c.reason = s
                        }
                    })
                }
                switch (t.status) {
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        throw e = t.reason, Bd(e), e
                }
                throw ms = t, Xs
        }
    }

    function ps(e) {
        try {
            var t = e._init;
            return t(e._payload)
        } catch (a) {
            throw a !== null && typeof a == "object" && typeof a.then == "function" ? (ms = a, Xs) : a
        }
    }
    var ms = null;

    function Ud() {
        if (ms === null) throw Error(o(459));
        var e = ms;
        return ms = null, e
    }

    function Bd(e) {
        if (e === Xs || e === ec) throw Error(o(483))
    }
    var Qs = null,
        Ll = 0;

    function ac(e) {
        var t = Ll;
        return Ll += 1, Qs === null && (Qs = []), Ld(Qs, e, t)
    }

    function Ul(e, t) {
        t = t.props.ref, e.ref = t !== void 0 ? t : null
    }

    function sc(e, t) {
        throw t.$$typeof === S ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }

    function Pd(e) {
        function t(D, w) {
            if (e) {
                var R = D.deletions;
                R === null ? (D.deletions = [w], D.flags |= 16) : R.push(w)
            }
        }

        function a(D, w) {
            if (!e) return null;
            for (; w !== null;) t(D, w), w = w.sibling;
            return null
        }

        function s(D) {
            for (var w = new Map; D !== null;) D.key !== null ? w.set(D.key, D) : w.set(D.index, D), D = D.sibling;
            return w
        }

        function c(D, w) {
            return D = sa(D, w), D.index = 0, D.sibling = null, D
        }

        function r(D, w, R) {
            return D.index = R, e ? (R = D.alternate, R !== null ? (R = R.index, R < w ? (D.flags |= 67108866, w) : R) : (D.flags |= 67108866, w)) : (D.flags |= 1048576, w)
        }

        function f(D) {
            return e && D.alternate === null && (D.flags |= 67108866), D
        }

        function g(D, w, R, B) {
            return w === null || w.tag !== 6 ? (w = Ir(R, D.mode, B), w.return = D, w) : (w = c(w, R), w.return = D, w)
        }

        function N(D, w, R, B) {
            var se = R.type;
            return se === E ? L(D, w, R.props.children, B, R.key) : w !== null && (w.elementType === se || typeof se == "object" && se !== null && se.$$typeof === A && ps(se) === w.type) ? (w = c(w, R.props), Ul(w, R), w.return = D, w) : (w = In(R.type, R.key, R.props, null, D.mode, B), Ul(w, R), w.return = D, w)
        }

        function T(D, w, R, B) {
            return w === null || w.tag !== 4 || w.stateNode.containerInfo !== R.containerInfo || w.stateNode.implementation !== R.implementation ? (w = Jr(R, D.mode, B), w.return = D, w) : (w = c(w, R.children || []), w.return = D, w)
        }

        function L(D, w, R, B, se) {
            return w === null || w.tag !== 7 ? (w = is(R, D.mode, B, se), w.return = D, w) : (w = c(w, R), w.return = D, w)
        }

        function q(D, w, R) {
            if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint") return w = Ir("" + w, D.mode, R), w.return = D, w;
            if (typeof w == "object" && w !== null) {
                switch (w.$$typeof) {
                    case z:
                        return R = In(w.type, w.key, w.props, null, D.mode, R), Ul(R, w), R.return = D, R;
                    case M:
                        return w = Jr(w, D.mode, R), w.return = D, w;
                    case A:
                        return w = ps(w), q(D, w, R)
                }
                if (je(w) || ue(w)) return w = is(w, D.mode, R, null), w.return = D, w;
                if (typeof w.then == "function") return q(D, ac(w), R);
                if (w.$$typeof === V) return q(D, $n(D, w), R);
                sc(D, w)
            }
            return null
        }

        function _(D, w, R, B) {
            var se = w !== null ? w.key : null;
            if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint") return se !== null ? null : g(D, w, "" + R, B);
            if (typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                    case z:
                        return R.key === se ? N(D, w, R, B) : null;
                    case M:
                        return R.key === se ? T(D, w, R, B) : null;
                    case A:
                        return R = ps(R), _(D, w, R, B)
                }
                if (je(R) || ue(R)) return se !== null ? null : L(D, w, R, B, null);
                if (typeof R.then == "function") return _(D, w, ac(R), B);
                if (R.$$typeof === V) return _(D, w, $n(D, R), B);
                sc(D, R)
            }
            return null
        }

        function k(D, w, R, B, se) {
            if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint") return D = D.get(R) || null, g(w, D, "" + B, se);
            if (typeof B == "object" && B !== null) {
                switch (B.$$typeof) {
                    case z:
                        return D = D.get(B.key === null ? R : B.key) || null, N(w, D, B, se);
                    case M:
                        return D = D.get(B.key === null ? R : B.key) || null, T(w, D, B, se);
                    case A:
                        return B = ps(B), k(D, w, R, B, se)
                }
                if (je(B) || ue(B)) return D = D.get(R) || null, L(w, D, B, se, null);
                if (typeof B.then == "function") return k(D, w, R, ac(B), se);
                if (B.$$typeof === V) return k(D, w, R, $n(w, B), se);
                sc(w, B)
            }
            return null
        }

        function F(D, w, R, B) {
            for (var se = null, Ne = null, te = w, fe = w = 0, ye = null; te !== null && fe < R.length; fe++) {
                te.index > fe ? (ye = te, te = null) : ye = te.sibling;
                var Se = _(D, te, R[fe], B);
                if (Se === null) {
                    te === null && (te = ye);
                    break
                }
                e && te && Se.alternate === null && t(D, te), w = r(Se, w, fe), Ne === null ? se = Se : Ne.sibling = Se, Ne = Se, te = ye
            }
            if (fe === R.length) return a(D, te), ve && la(D, fe), se;
            if (te === null) {
                for (; fe < R.length; fe++) te = q(D, R[fe], B), te !== null && (w = r(te, w, fe), Ne === null ? se = te : Ne.sibling = te, Ne = te);
                return ve && la(D, fe), se
            }
            for (te = s(te); fe < R.length; fe++) ye = k(te, D, fe, R[fe], B), ye !== null && (e && ye.alternate !== null && te.delete(ye.key === null ? fe : ye.key), w = r(ye, w, fe), Ne === null ? se = ye : Ne.sibling = ye, Ne = ye);
            return e && te.forEach(function(Ja) {
                return t(D, Ja)
            }), ve && la(D, fe), se
        }

        function le(D, w, R, B) {
            if (R == null) throw Error(o(151));
            for (var se = null, Ne = null, te = w, fe = w = 0, ye = null, Se = R.next(); te !== null && !Se.done; fe++, Se = R.next()) {
                te.index > fe ? (ye = te, te = null) : ye = te.sibling;
                var Ja = _(D, te, Se.value, B);
                if (Ja === null) {
                    te === null && (te = ye);
                    break
                }
                e && te && Ja.alternate === null && t(D, te), w = r(Ja, w, fe), Ne === null ? se = Ja : Ne.sibling = Ja, Ne = Ja, te = ye
            }
            if (Se.done) return a(D, te), ve && la(D, fe), se;
            if (te === null) {
                for (; !Se.done; fe++, Se = R.next()) Se = q(D, Se.value, B), Se !== null && (w = r(Se, w, fe), Ne === null ? se = Se : Ne.sibling = Se, Ne = Se);
                return ve && la(D, fe), se
            }
            for (te = s(te); !Se.done; fe++, Se = R.next()) Se = k(te, D, fe, Se.value, B), Se !== null && (e && Se.alternate !== null && te.delete(Se.key === null ? fe : Se.key), w = r(Se, w, fe), Ne === null ? se = Se : Ne.sibling = Se, Ne = Se);
            return e && te.forEach(function(l0) {
                return t(D, l0)
            }), ve && la(D, fe), se
        }

        function Re(D, w, R, B) {
            if (typeof R == "object" && R !== null && R.type === E && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                    case z:
                        e: {
                            for (var se = R.key; w !== null;) {
                                if (w.key === se) {
                                    if (se = R.type, se === E) {
                                        if (w.tag === 7) {
                                            a(D, w.sibling), B = c(w, R.props.children), B.return = D, D = B;
                                            break e
                                        }
                                    } else if (w.elementType === se || typeof se == "object" && se !== null && se.$$typeof === A && ps(se) === w.type) {
                                        a(D, w.sibling), B = c(w, R.props), Ul(B, R), B.return = D, D = B;
                                        break e
                                    }
                                    a(D, w);
                                    break
                                } else t(D, w);
                                w = w.sibling
                            }
                            R.type === E ? (B = is(R.props.children, D.mode, B, R.key), B.return = D, D = B) : (B = In(R.type, R.key, R.props, null, D.mode, B), Ul(B, R), B.return = D, D = B)
                        }
                        return f(D);
                    case M:
                        e: {
                            for (se = R.key; w !== null;) {
                                if (w.key === se)
                                    if (w.tag === 4 && w.stateNode.containerInfo === R.containerInfo && w.stateNode.implementation === R.implementation) {
                                        a(D, w.sibling), B = c(w, R.children || []), B.return = D, D = B;
                                        break e
                                    } else {
                                        a(D, w);
                                        break
                                    }
                                else t(D, w);
                                w = w.sibling
                            }
                            B = Jr(R, D.mode, B),
                            B.return = D,
                            D = B
                        }
                        return f(D);
                    case A:
                        return R = ps(R), Re(D, w, R, B)
                }
                if (je(R)) return F(D, w, R, B);
                if (ue(R)) {
                    if (se = ue(R), typeof se != "function") throw Error(o(150));
                    return R = se.call(R), le(D, w, R, B)
                }
                if (typeof R.then == "function") return Re(D, w, ac(R), B);
                if (R.$$typeof === V) return Re(D, w, $n(D, R), B);
                sc(D, R)
            }
            return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R, w !== null && w.tag === 6 ? (a(D, w.sibling), B = c(w, R), B.return = D, D = B) : (a(D, w), B = Ir(R, D.mode, B), B.return = D, D = B), f(D)) : a(D, w)
        }
        return function(D, w, R, B) {
            try {
                Ll = 0;
                var se = Re(D, w, R, B);
                return Qs = null, se
            } catch (te) {
                if (te === Xs || te === ec) throw te;
                var Ne = bt(29, te, null, D.mode);
                return Ne.lanes = B, Ne.return = D, Ne
            }
        }
    }
    var hs = Pd(!0),
        qd = Pd(!1),
        _a = !1;

    function ii(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function oi(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }

    function za(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function ka(e, t, a) {
        var s = e.updateQueue;
        if (s === null) return null;
        if (s = s.shared, (Ee & 2) !== 0) {
            var c = s.pending;
            return c === null ? t.next = t : (t.next = c.next, c.next = t), s.pending = t, t = Kn(e), wd(e, null, a), t
        }
        return Zn(e, s, t, a), Kn(e)
    }

    function Bl(e, t, a) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
            var s = t.lanes;
            s &= e.pendingLanes, a |= s, t.lanes = a, Tu(e, a)
        }
    }

    function ui(e, t) {
        var a = e.updateQueue,
            s = e.alternate;
        if (s !== null && (s = s.updateQueue, a === s)) {
            var c = null,
                r = null;
            if (a = a.firstBaseUpdate, a !== null) {
                do {
                    var f = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    r === null ? c = r = f : r = r.next = f, a = a.next
                } while (a !== null);
                r === null ? c = r = t : r = r.next = t
            } else c = r = t;
            a = {
                baseState: s.baseState,
                firstBaseUpdate: c,
                lastBaseUpdate: r,
                shared: s.shared,
                callbacks: s.callbacks
            }, e.updateQueue = a;
            return
        }
        e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t
    }
    var di = !1;

    function Pl() {
        if (di) {
            var e = Gs;
            if (e !== null) throw e
        }
    }

    function ql(e, t, a, s) {
        di = !1;
        var c = e.updateQueue;
        _a = !1;
        var r = c.firstBaseUpdate,
            f = c.lastBaseUpdate,
            g = c.shared.pending;
        if (g !== null) {
            c.shared.pending = null;
            var N = g,
                T = N.next;
            N.next = null, f === null ? r = T : f.next = T, f = N;
            var L = e.alternate;
            L !== null && (L = L.updateQueue, g = L.lastBaseUpdate, g !== f && (g === null ? L.firstBaseUpdate = T : g.next = T, L.lastBaseUpdate = N))
        }
        if (r !== null) {
            var q = c.baseState;
            f = 0, L = T = N = null, g = r;
            do {
                var _ = g.lane & -536870913,
                    k = _ !== g.lane;
                if (k ? (xe & _) === _ : (s & _) === _) {
                    _ !== 0 && _ === Ys && (di = !0), L !== null && (L = L.next = {
                        lane: 0,
                        tag: g.tag,
                        payload: g.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var F = e,
                            le = g;_ = t;
                        var Re = a;
                        switch (le.tag) {
                            case 1:
                                if (F = le.payload, typeof F == "function") {
                                    q = F.call(Re, q, _);
                                    break e
                                }
                                q = F;
                                break e;
                            case 3:
                                F.flags = F.flags & -65537 | 128;
                            case 0:
                                if (F = le.payload, _ = typeof F == "function" ? F.call(Re, q, _) : F, _ == null) break e;
                                q = v({}, q, _);
                                break e;
                            case 2:
                                _a = !0
                        }
                    }
                    _ = g.callback, _ !== null && (e.flags |= 64, k && (e.flags |= 8192), k = c.callbacks, k === null ? c.callbacks = [_] : k.push(_))
                } else k = {
                    lane: _,
                    tag: g.tag,
                    payload: g.payload,
                    callback: g.callback,
                    next: null
                }, L === null ? (T = L = k, N = q) : L = L.next = k, f |= _;
                if (g = g.next, g === null) {
                    if (g = c.shared.pending, g === null) break;
                    k = g, g = k.next, k.next = null, c.lastBaseUpdate = k, c.shared.pending = null
                }
            } while (!0);
            L === null && (N = q), c.baseState = N, c.firstBaseUpdate = T, c.lastBaseUpdate = L, r === null && (c.shared.lanes = 0), Pa |= f, e.lanes = f, e.memoizedState = q
        }
    }

    function Yd(e, t) {
        if (typeof e != "function") throw Error(o(191, e));
        e.call(t)
    }

    function Gd(e, t) {
        var a = e.callbacks;
        if (a !== null)
            for (e.callbacks = null, e = 0; e < a.length; e++) Yd(a[e], t)
    }
    var Vs = C(null),
        lc = C(0);

    function Xd(e, t) {
        e = ha, Q(lc, e), Q(Vs, t), ha = e | t.baseLanes
    }

    function fi() {
        Q(lc, ha), Q(Vs, Vs.current)
    }

    function pi() {
        ha = lc.current, P(Vs), P(lc)
    }
    var jt = C(null),
        _t = null;

    function Ha(e) {
        var t = e.alternate;
        Q(Ge, Ge.current & 1), Q(jt, e), _t === null && (t === null || Vs.current !== null || t.memoizedState !== null) && (_t = e)
    }

    function mi(e) {
        Q(Ge, Ge.current), Q(jt, e), _t === null && (_t = e)
    }

    function Qd(e) {
        e.tag === 22 ? (Q(Ge, Ge.current), Q(jt, e), _t === null && (_t = e)) : La()
    }

    function La() {
        Q(Ge, Ge.current), Q(jt, jt.current)
    }

    function Nt(e) {
        P(jt), _t === e && (_t = null), P(Ge)
    }
    var Ge = C(0);

    function nc(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var a = t.memoizedState;
                if (a !== null && (a = a.dehydrated, a === null || jo(a) || No(a))) return t
            } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                if ((t.flags & 128) !== 0) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }
    var ra = 0,
        de = null,
        De = null,
        Ve = null,
        cc = !1,
        Zs = !1,
        gs = !1,
        rc = 0,
        Yl = 0,
        Ks = null,
        Kx = 0;

    function qe() {
        throw Error(o(321))
    }

    function hi(e, t) {
        if (t === null) return !1;
        for (var a = 0; a < t.length && a < e.length; a++)
            if (!vt(e[a], t[a])) return !1;
        return !0
    }

    function gi(e, t, a, s, c, r) {
        return ra = r, de = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, H.H = e === null || e.memoizedState === null ? Df : Ri, gs = !1, r = a(s, c), gs = !1, Zs && (r = Zd(t, a, s, c)), Vd(e), r
    }

    function Vd(e) {
        H.H = Ql;
        var t = De !== null && De.next !== null;
        if (ra = 0, Ve = De = de = null, cc = !1, Yl = 0, Ks = null, t) throw Error(o(300));
        e === null || Ze || (e = e.dependencies, e !== null && Fn(e) && (Ze = !0))
    }

    function Zd(e, t, a, s) {
        de = e;
        var c = 0;
        do {
            if (Zs && (Ks = null), Yl = 0, Zs = !1, 25 <= c) throw Error(o(301));
            if (c += 1, Ve = De = null, e.updateQueue != null) {
                var r = e.updateQueue;
                r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0)
            }
            H.H = Of, r = t(a, s)
        } while (Zs);
        return r
    }

    function Ix() {
        var e = H.H,
            t = e.useState()[0];
        return t = typeof t.then == "function" ? Gl(t) : t, e = e.useState()[0], (De !== null ? De.memoizedState : null) !== e && (de.flags |= 1024), t
    }

    function xi() {
        var e = rc !== 0;
        return rc = 0, e
    }

    function yi(e, t, a) {
        t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a
    }

    function vi(e) {
        if (cc) {
            for (e = e.memoizedState; e !== null;) {
                var t = e.queue;
                t !== null && (t.pending = null), e = e.next
            }
            cc = !1
        }
        ra = 0, Ve = De = de = null, Zs = !1, Yl = rc = 0, Ks = null
    }

    function ct() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ve === null ? de.memoizedState = Ve = e : Ve = Ve.next = e, Ve
    }

    function Xe() {
        if (De === null) {
            var e = de.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = De.next;
        var t = Ve === null ? de.memoizedState : Ve.next;
        if (t !== null) Ve = t, De = e;
        else {
            if (e === null) throw de.alternate === null ? Error(o(467)) : Error(o(310));
            De = e, e = {
                memoizedState: De.memoizedState,
                baseState: De.baseState,
                baseQueue: De.baseQueue,
                queue: De.queue,
                next: null
            }, Ve === null ? de.memoizedState = Ve = e : Ve = Ve.next = e
        }
        return Ve
    }

    function ic() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function Gl(e) {
        var t = Yl;
        return Yl += 1, Ks === null && (Ks = []), e = Ld(Ks, e, t), t = de, (Ve === null ? t.memoizedState : Ve.next) === null && (t = t.alternate, H.H = t === null || t.memoizedState === null ? Df : Ri), e
    }

    function oc(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function") return Gl(e);
            if (e.$$typeof === V) return at(e)
        }
        throw Error(o(438, String(e)))
    }

    function bi(e) {
        var t = null,
            a = de.updateQueue;
        if (a !== null && (t = a.memoCache), t == null) {
            var s = de.alternate;
            s !== null && (s = s.updateQueue, s !== null && (s = s.memoCache, s != null && (t = {
                data: s.data.map(function(c) {
                    return c.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
                data: [],
                index: 0
            }), a === null && (a = ic(), de.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
            for (a = t.data[t.index] = Array(e), s = 0; s < e; s++) a[s] = ze;
        return t.index++, a
    }

    function ia(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function uc(e) {
        var t = Xe();
        return ji(t, De, e)
    }

    function ji(e, t, a) {
        var s = e.queue;
        if (s === null) throw Error(o(311));
        s.lastRenderedReducer = a;
        var c = e.baseQueue,
            r = s.pending;
        if (r !== null) {
            if (c !== null) {
                var f = c.next;
                c.next = r.next, r.next = f
            }
            t.baseQueue = c = r, s.pending = null
        }
        if (r = e.baseState, c === null) e.memoizedState = r;
        else {
            t = c.next;
            var g = f = null,
                N = null,
                T = t,
                L = !1;
            do {
                var q = T.lane & -536870913;
                if (q !== T.lane ? (xe & q) === q : (ra & q) === q) {
                    var _ = T.revertLane;
                    if (_ === 0) N !== null && (N = N.next = {
                        lane: 0,
                        revertLane: 0,
                        gesture: null,
                        action: T.action,
                        hasEagerState: T.hasEagerState,
                        eagerState: T.eagerState,
                        next: null
                    }), q === Ys && (L = !0);
                    else if ((ra & _) === _) {
                        T = T.next, _ === Ys && (L = !0);
                        continue
                    } else q = {
                        lane: 0,
                        revertLane: T.revertLane,
                        gesture: null,
                        action: T.action,
                        hasEagerState: T.hasEagerState,
                        eagerState: T.eagerState,
                        next: null
                    }, N === null ? (g = N = q, f = r) : N = N.next = q, de.lanes |= _, Pa |= _;
                    q = T.action, gs && a(r, q), r = T.hasEagerState ? T.eagerState : a(r, q)
                } else _ = {
                    lane: q,
                    revertLane: T.revertLane,
                    gesture: T.gesture,
                    action: T.action,
                    hasEagerState: T.hasEagerState,
                    eagerState: T.eagerState,
                    next: null
                }, N === null ? (g = N = _, f = r) : N = N.next = _, de.lanes |= q, Pa |= q;
                T = T.next
            } while (T !== null && T !== t);
            if (N === null ? f = r : N.next = g, !vt(r, e.memoizedState) && (Ze = !0, L && (a = Gs, a !== null))) throw a;
            e.memoizedState = r, e.baseState = f, e.baseQueue = N, s.lastRenderedState = r
        }
        return c === null && (s.lanes = 0), [e.memoizedState, s.dispatch]
    }

    function Ni(e) {
        var t = Xe(),
            a = t.queue;
        if (a === null) throw Error(o(311));
        a.lastRenderedReducer = e;
        var s = a.dispatch,
            c = a.pending,
            r = t.memoizedState;
        if (c !== null) {
            a.pending = null;
            var f = c = c.next;
            do r = e(r, f.action), f = f.next; while (f !== c);
            vt(r, t.memoizedState) || (Ze = !0), t.memoizedState = r, t.baseQueue === null && (t.baseState = r), a.lastRenderedState = r
        }
        return [r, s]
    }

    function Kd(e, t, a) {
        var s = de,
            c = Xe(),
            r = ve;
        if (r) {
            if (a === void 0) throw Error(o(407));
            a = a()
        } else a = t();
        var f = !vt((De || c).memoizedState, a);
        if (f && (c.memoizedState = a, Ze = !0), c = c.queue, Ei(Fd.bind(null, s, c, e), [e]), c.getSnapshot !== t || f || Ve !== null && Ve.memoizedState.tag & 1) {
            if (s.flags |= 2048, Is(9, {
                    destroy: void 0
                }, Jd.bind(null, s, c, a, t), null), Te === null) throw Error(o(349));
            r || (ra & 127) !== 0 || Id(s, t, a)
        }
        return a
    }

    function Id(e, t, a) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: a
        }, t = de.updateQueue, t === null ? (t = ic(), de.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e))
    }

    function Jd(e, t, a, s) {
        t.value = a, t.getSnapshot = s, $d(t) && Wd(e)
    }

    function Fd(e, t, a) {
        return a(function() {
            $d(t) && Wd(e)
        })
    }

    function $d(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var a = t();
            return !vt(e, a)
        } catch {
            return !0
        }
    }

    function Wd(e) {
        var t = rs(e, 2);
        t !== null && pt(t, e, 2)
    }

    function Si(e) {
        var t = ct();
        if (typeof e == "function") {
            var a = e;
            if (e = a(), gs) {
                Ca(!0);
                try {
                    a()
                } finally {
                    Ca(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e, t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ia,
            lastRenderedState: e
        }, t
    }

    function ef(e, t, a, s) {
        return e.baseState = a, ji(e, De, typeof s == "function" ? s : ia)
    }

    function Jx(e, t, a, s, c) {
        if (pc(e)) throw Error(o(485));
        if (e = t.action, e !== null) {
            var r = {
                payload: c,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(f) {
                    r.listeners.push(f)
                }
            };
            H.T !== null ? a(!0) : r.isTransition = !1, s(r), a = t.pending, a === null ? (r.next = t.pending = r, tf(t, r)) : (r.next = a.next, t.pending = a.next = r)
        }
    }

    function tf(e, t) {
        var a = t.action,
            s = t.payload,
            c = e.state;
        if (t.isTransition) {
            var r = H.T,
                f = {};
            H.T = f;
            try {
                var g = a(c, s),
                    N = H.S;
                N !== null && N(f, g), af(e, t, g)
            } catch (T) {
                wi(e, t, T)
            } finally {
                r !== null && f.types !== null && (r.types = f.types), H.T = r
            }
        } else try {
            r = a(c, s), af(e, t, r)
        } catch (T) {
            wi(e, t, T)
        }
    }

    function af(e, t, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(s) {
            sf(e, t, s)
        }, function(s) {
            return wi(e, t, s)
        }) : sf(e, t, a)
    }

    function sf(e, t, a) {
        t.status = "fulfilled", t.value = a, lf(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, tf(e, a)))
    }

    function wi(e, t, a) {
        var s = e.pending;
        if (e.pending = null, s !== null) {
            s = s.next;
            do t.status = "rejected", t.reason = a, lf(t), t = t.next; while (t !== s)
        }
        e.action = null
    }

    function lf(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)(0, e[t])()
    }

    function nf(e, t) {
        return t
    }

    function cf(e, t) {
        if (ve) {
            var a = Te.formState;
            if (a !== null) {
                e: {
                    var s = de;
                    if (ve) {
                        if (He) {
                            t: {
                                for (var c = He, r = Tt; c.nodeType !== 8;) {
                                    if (!r) {
                                        c = null;
                                        break t
                                    }
                                    if (c = zt(c.nextSibling), c === null) {
                                        c = null;
                                        break t
                                    }
                                }
                                r = c.data,
                                c = r === "F!" || r === "F" ? c : null
                            }
                            if (c) {
                                He = zt(c.nextSibling), s = c.data === "F!";
                                break e
                            }
                        }
                        Ra(s)
                    }
                    s = !1
                }
                s && (t = a[0])
            }
        }
        return a = ct(), a.memoizedState = a.baseState = t, s = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: nf,
            lastRenderedState: t
        }, a.queue = s, a = Cf.bind(null, de, s), s.dispatch = a, s = Si(!1), r = Oi.bind(null, de, !1, s.queue), s = ct(), c = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        }, s.queue = c, a = Jx.bind(null, de, c, r, a), c.dispatch = a, s.memoizedState = e, [t, a, !1]
    }

    function rf(e) {
        var t = Xe();
        return of(t, De, e)
    }

    function of(e, t, a) {
        if (t = ji(e, t, nf)[0], e = uc(ia)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
            var s = Gl(t)
        } catch (f) {
            throw f === Xs ? ec : f
        } else s = t;
        t = Xe();
        var c = t.queue,
            r = c.dispatch;
        return a !== t.memoizedState && (de.flags |= 2048, Is(9, {
            destroy: void 0
        }, Fx.bind(null, c, a), null)), [s, r, e]
    }

    function Fx(e, t) {
        e.action = t
    }

    function uf(e) {
        var t = Xe(),
            a = De;
        if (a !== null) return of(t, a, e);
        Xe(), t = t.memoizedState, a = Xe();
        var s = a.queue.dispatch;
        return a.memoizedState = e, [t, s, !1]
    }

    function Is(e, t, a, s) {
        return e = {
            tag: e,
            create: a,
            deps: s,
            inst: t,
            next: null
        }, t = de.updateQueue, t === null && (t = ic(), de.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (s = a.next, a.next = e, e.next = s, t.lastEffect = e), e
    }

    function df() {
        return Xe().memoizedState
    }

    function dc(e, t, a, s) {
        var c = ct();
        de.flags |= e, c.memoizedState = Is(1 | t, {
            destroy: void 0
        }, a, s === void 0 ? null : s)
    }

    function fc(e, t, a, s) {
        var c = Xe();
        s = s === void 0 ? null : s;
        var r = c.memoizedState.inst;
        De !== null && s !== null && hi(s, De.memoizedState.deps) ? c.memoizedState = Is(t, r, a, s) : (de.flags |= e, c.memoizedState = Is(1 | t, r, a, s))
    }

    function ff(e, t) {
        dc(8390656, 8, e, t)
    }

    function Ei(e, t) {
        fc(2048, 8, e, t)
    }

    function $x(e) {
        de.flags |= 4;
        var t = de.updateQueue;
        if (t === null) t = ic(), de.updateQueue = t, t.events = [e];
        else {
            var a = t.events;
            a === null ? t.events = [e] : a.push(e)
        }
    }

    function pf(e) {
        var t = Xe().memoizedState;
        return $x({
                ref: t,
                nextImpl: e
            }),
            function() {
                if ((Ee & 2) !== 0) throw Error(o(440));
                return t.impl.apply(void 0, arguments)
            }
    }

    function mf(e, t) {
        return fc(4, 2, e, t)
    }

    function hf(e, t) {
        return fc(4, 4, e, t)
    }

    function gf(e, t) {
        if (typeof t == "function") {
            e = e();
            var a = t(e);
            return function() {
                typeof a == "function" ? a() : t(null)
            }
        }
        if (t != null) return e = e(), t.current = e,
            function() {
                t.current = null
            }
    }

    function xf(e, t, a) {
        a = a != null ? a.concat([e]) : null, fc(4, 4, gf.bind(null, t, e), a)
    }

    function Ci() {}

    function yf(e, t) {
        var a = Xe();
        t = t === void 0 ? null : t;
        var s = a.memoizedState;
        return t !== null && hi(t, s[1]) ? s[0] : (a.memoizedState = [e, t], e)
    }

    function vf(e, t) {
        var a = Xe();
        t = t === void 0 ? null : t;
        var s = a.memoizedState;
        if (t !== null && hi(t, s[1])) return s[0];
        if (s = e(), gs) {
            Ca(!0);
            try {
                e()
            } finally {
                Ca(!1)
            }
        }
        return a.memoizedState = [s, t], s
    }

    function Ai(e, t, a) {
        return a === void 0 || (ra & 1073741824) !== 0 && (xe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = bp(), de.lanes |= e, Pa |= e, a)
    }

    function bf(e, t, a, s) {
        return vt(a, t) ? a : Vs.current !== null ? (e = Ai(e, a, s), vt(e, t) || (Ze = !0), e) : (ra & 42) === 0 || (ra & 1073741824) !== 0 && (xe & 261930) === 0 ? (Ze = !0, e.memoizedState = a) : (e = bp(), de.lanes |= e, Pa |= e, t)
    }

    function jf(e, t, a, s, c) {
        var r = K.p;
        K.p = r !== 0 && 8 > r ? r : 8;
        var f = H.T,
            g = {};
        H.T = g, Oi(e, !1, t, a);
        try {
            var N = c(),
                T = H.S;
            if (T !== null && T(g, N), N !== null && typeof N == "object" && typeof N.then == "function") {
                var L = Zx(N, s);
                Xl(e, t, L, Et(e))
            } else Xl(e, t, s, Et(e))
        } catch (q) {
            Xl(e, t, {
                then: function() {},
                status: "rejected",
                reason: q
            }, Et())
        } finally {
            K.p = r, f !== null && g.types !== null && (f.types = g.types), H.T = f
        }
    }

    function Wx() {}

    function Mi(e, t, a, s) {
        if (e.tag !== 5) throw Error(o(476));
        var c = Nf(e).queue;
        jf(e, c, t, Y, a === null ? Wx : function() {
            return Sf(e), a(s)
        })
    }

    function Nf(e) {
        var t = e.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: Y,
            baseState: Y,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ia,
                lastRenderedState: Y
            },
            next: null
        };
        var a = {};
        return t.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ia,
                lastRenderedState: a
            },
            next: null
        }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t
    }

    function Sf(e) {
        var t = Nf(e);
        t.next === null && (t = e.alternate.memoizedState), Xl(e, t.next.queue, {}, Et())
    }

    function Di() {
        return at(rn)
    }

    function wf() {
        return Xe().memoizedState
    }

    function Ef() {
        return Xe().memoizedState
    }

    function e1(e) {
        for (var t = e.return; t !== null;) {
            switch (t.tag) {
                case 24:
                case 3:
                    var a = Et();
                    e = za(a);
                    var s = ka(t, e, a);
                    s !== null && (pt(s, t, a), Bl(s, t, a)), t = {
                        cache: li()
                    }, e.payload = t;
                    return
            }
            t = t.return
        }
    }

    function t1(e, t, a) {
        var s = Et();
        a = {
            lane: s,
            revertLane: 0,
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, pc(e) ? Af(t, a) : (a = Zr(e, t, a, s), a !== null && (pt(a, e, s), Mf(a, t, s)))
    }

    function Cf(e, t, a) {
        var s = Et();
        Xl(e, t, a, s)
    }

    function Xl(e, t, a, s) {
        var c = {
            lane: s,
            revertLane: 0,
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (pc(e)) Af(t, c);
        else {
            var r = e.alternate;
            if (e.lanes === 0 && (r === null || r.lanes === 0) && (r = t.lastRenderedReducer, r !== null)) try {
                var f = t.lastRenderedState,
                    g = r(f, a);
                if (c.hasEagerState = !0, c.eagerState = g, vt(g, f)) return Zn(e, t, c, 0), Te === null && Vn(), !1
            } catch {}
            if (a = Zr(e, t, c, s), a !== null) return pt(a, e, s), Mf(a, t, s), !0
        }
        return !1
    }

    function Oi(e, t, a, s) {
        if (s = {
                lane: 2,
                revertLane: io(),
                gesture: null,
                action: s,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, pc(e)) {
            if (t) throw Error(o(479))
        } else t = Zr(e, a, s, 2), t !== null && pt(t, e, 2)
    }

    function pc(e) {
        var t = e.alternate;
        return e === de || t !== null && t === de
    }

    function Af(e, t) {
        Zs = cc = !0;
        var a = e.pending;
        a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t
    }

    function Mf(e, t, a) {
        if ((a & 4194048) !== 0) {
            var s = t.lanes;
            s &= e.pendingLanes, a |= s, t.lanes = a, Tu(e, a)
        }
    }
    var Ql = {
        readContext: at,
        use: oc,
        useCallback: qe,
        useContext: qe,
        useEffect: qe,
        useImperativeHandle: qe,
        useLayoutEffect: qe,
        useInsertionEffect: qe,
        useMemo: qe,
        useReducer: qe,
        useRef: qe,
        useState: qe,
        useDebugValue: qe,
        useDeferredValue: qe,
        useTransition: qe,
        useSyncExternalStore: qe,
        useId: qe,
        useHostTransitionStatus: qe,
        useFormState: qe,
        useActionState: qe,
        useOptimistic: qe,
        useMemoCache: qe,
        useCacheRefresh: qe
    };
    Ql.useEffectEvent = qe;
    var Df = {
            readContext: at,
            use: oc,
            useCallback: function(e, t) {
                return ct().memoizedState = [e, t === void 0 ? null : t], e
            },
            useContext: at,
            useEffect: ff,
            useImperativeHandle: function(e, t, a) {
                a = a != null ? a.concat([e]) : null, dc(4194308, 4, gf.bind(null, t, e), a)
            },
            useLayoutEffect: function(e, t) {
                return dc(4194308, 4, e, t)
            },
            useInsertionEffect: function(e, t) {
                dc(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var a = ct();
                t = t === void 0 ? null : t;
                var s = e();
                if (gs) {
                    Ca(!0);
                    try {
                        e()
                    } finally {
                        Ca(!1)
                    }
                }
                return a.memoizedState = [s, t], s
            },
            useReducer: function(e, t, a) {
                var s = ct();
                if (a !== void 0) {
                    var c = a(t);
                    if (gs) {
                        Ca(!0);
                        try {
                            a(t)
                        } finally {
                            Ca(!1)
                        }
                    }
                } else c = t;
                return s.memoizedState = s.baseState = c, e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: c
                }, s.queue = e, e = e.dispatch = t1.bind(null, de, e), [s.memoizedState, e]
            },
            useRef: function(e) {
                var t = ct();
                return e = {
                    current: e
                }, t.memoizedState = e
            },
            useState: function(e) {
                e = Si(e);
                var t = e.queue,
                    a = Cf.bind(null, de, t);
                return t.dispatch = a, [e.memoizedState, a]
            },
            useDebugValue: Ci,
            useDeferredValue: function(e, t) {
                var a = ct();
                return Ai(a, e, t)
            },
            useTransition: function() {
                var e = Si(!1);
                return e = jf.bind(null, de, e.queue, !0, !1), ct().memoizedState = e, [!1, e]
            },
            useSyncExternalStore: function(e, t, a) {
                var s = de,
                    c = ct();
                if (ve) {
                    if (a === void 0) throw Error(o(407));
                    a = a()
                } else {
                    if (a = t(), Te === null) throw Error(o(349));
                    (xe & 127) !== 0 || Id(s, t, a)
                }
                c.memoizedState = a;
                var r = {
                    value: a,
                    getSnapshot: t
                };
                return c.queue = r, ff(Fd.bind(null, s, r, e), [e]), s.flags |= 2048, Is(9, {
                    destroy: void 0
                }, Jd.bind(null, s, r, a, t), null), a
            },
            useId: function() {
                var e = ct(),
                    t = Te.identifierPrefix;
                if (ve) {
                    var a = Vt,
                        s = Qt;
                    a = (s & ~(1 << 32 - yt(s) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = rc++, 0 < a && (t += "H" + a.toString(32)), t += "_"
                } else a = Kx++, t = "_" + t + "r_" + a.toString(32) + "_";
                return e.memoizedState = t
            },
            useHostTransitionStatus: Di,
            useFormState: cf,
            useActionState: cf,
            useOptimistic: function(e) {
                var t = ct();
                t.memoizedState = t.baseState = e;
                var a = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = a, t = Oi.bind(null, de, !0, a), a.dispatch = t, [e, t]
            },
            useMemoCache: bi,
            useCacheRefresh: function() {
                return ct().memoizedState = e1.bind(null, de)
            },
            useEffectEvent: function(e) {
                var t = ct(),
                    a = {
                        impl: e
                    };
                return t.memoizedState = a,
                    function() {
                        if ((Ee & 2) !== 0) throw Error(o(440));
                        return a.impl.apply(void 0, arguments)
                    }
            }
        },
        Ri = {
            readContext: at,
            use: oc,
            useCallback: yf,
            useContext: at,
            useEffect: Ei,
            useImperativeHandle: xf,
            useInsertionEffect: mf,
            useLayoutEffect: hf,
            useMemo: vf,
            useReducer: uc,
            useRef: df,
            useState: function() {
                return uc(ia)
            },
            useDebugValue: Ci,
            useDeferredValue: function(e, t) {
                var a = Xe();
                return bf(a, De.memoizedState, e, t)
            },
            useTransition: function() {
                var e = uc(ia)[0],
                    t = Xe().memoizedState;
                return [typeof e == "boolean" ? e : Gl(e), t]
            },
            useSyncExternalStore: Kd,
            useId: wf,
            useHostTransitionStatus: Di,
            useFormState: rf,
            useActionState: rf,
            useOptimistic: function(e, t) {
                var a = Xe();
                return ef(a, De, e, t)
            },
            useMemoCache: bi,
            useCacheRefresh: Ef
        };
    Ri.useEffectEvent = pf;
    var Of = {
        readContext: at,
        use: oc,
        useCallback: yf,
        useContext: at,
        useEffect: Ei,
        useImperativeHandle: xf,
        useInsertionEffect: mf,
        useLayoutEffect: hf,
        useMemo: vf,
        useReducer: Ni,
        useRef: df,
        useState: function() {
            return Ni(ia)
        },
        useDebugValue: Ci,
        useDeferredValue: function(e, t) {
            var a = Xe();
            return De === null ? Ai(a, e, t) : bf(a, De.memoizedState, e, t)
        },
        useTransition: function() {
            var e = Ni(ia)[0],
                t = Xe().memoizedState;
            return [typeof e == "boolean" ? e : Gl(e), t]
        },
        useSyncExternalStore: Kd,
        useId: wf,
        useHostTransitionStatus: Di,
        useFormState: uf,
        useActionState: uf,
        useOptimistic: function(e, t) {
            var a = Xe();
            return De !== null ? ef(a, De, e, t) : (a.baseState = e, [e, a.queue.dispatch])
        },
        useMemoCache: bi,
        useCacheRefresh: Ef
    };
    Of.useEffectEvent = pf;

    function Ti(e, t, a, s) {
        t = e.memoizedState, a = a(s, t), a = a == null ? t : v({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a)
    }
    var _i = {
        enqueueSetState: function(e, t, a) {
            e = e._reactInternals;
            var s = Et(),
                c = za(s);
            c.payload = t, a != null && (c.callback = a), t = ka(e, c, s), t !== null && (pt(t, e, s), Bl(t, e, s))
        },
        enqueueReplaceState: function(e, t, a) {
            e = e._reactInternals;
            var s = Et(),
                c = za(s);
            c.tag = 1, c.payload = t, a != null && (c.callback = a), t = ka(e, c, s), t !== null && (pt(t, e, s), Bl(t, e, s))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var a = Et(),
                s = za(a);
            s.tag = 2, t != null && (s.callback = t), t = ka(e, s, a), t !== null && (pt(t, e, a), Bl(t, e, a))
        }
    };

    function Rf(e, t, a, s, c, r, f) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, r, f) : t.prototype && t.prototype.isPureReactComponent ? !Rl(a, s) || !Rl(c, r) : !0
    }

    function Tf(e, t, a, s) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, s), t.state !== e && _i.enqueueReplaceState(t, t.state, null)
    }

    function xs(e, t) {
        var a = t;
        if ("ref" in t) {
            a = {};
            for (var s in t) s !== "ref" && (a[s] = t[s])
        }
        if (e = e.defaultProps) {
            a === t && (a = v({}, a));
            for (var c in e) a[c] === void 0 && (a[c] = e[c])
        }
        return a
    }

    function _f(e) {
        Qn(e)
    }

    function zf(e) {
        console.error(e)
    }

    function kf(e) {
        Qn(e)
    }

    function mc(e, t) {
        try {
            var a = e.onUncaughtError;
            a(t.value, {
                componentStack: t.stack
            })
        } catch (s) {
            setTimeout(function() {
                throw s
            })
        }
    }

    function Hf(e, t, a) {
        try {
            var s = e.onCaughtError;
            s(a.value, {
                componentStack: a.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (c) {
            setTimeout(function() {
                throw c
            })
        }
    }

    function zi(e, t, a) {
        return a = za(a), a.tag = 3, a.payload = {
            element: null
        }, a.callback = function() {
            mc(e, t)
        }, a
    }

    function Lf(e) {
        return e = za(e), e.tag = 3, e
    }

    function Uf(e, t, a, s) {
        var c = a.type.getDerivedStateFromError;
        if (typeof c == "function") {
            var r = s.value;
            e.payload = function() {
                return c(r)
            }, e.callback = function() {
                Hf(t, a, s)
            }
        }
        var f = a.stateNode;
        f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
            Hf(t, a, s), typeof c != "function" && (qa === null ? qa = new Set([this]) : qa.add(this));
            var g = s.stack;
            this.componentDidCatch(s.value, {
                componentStack: g !== null ? g : ""
            })
        })
    }

    function a1(e, t, a, s, c) {
        if (a.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            if (t = a.alternate, t !== null && qs(t, a, c, !0), a = jt.current, a !== null) {
                switch (a.tag) {
                    case 31:
                    case 13:
                        return _t === null ? Cc() : a.alternate === null && Ye === 0 && (Ye = 3), a.flags &= -257, a.flags |= 65536, a.lanes = c, s === tc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = new Set([s]) : t.add(s), no(e, s, c)), !1;
                    case 22:
                        return a.flags |= 65536, s === tc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([s])
                        }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = new Set([s]) : a.add(s)), no(e, s, c)), !1
                }
                throw Error(o(435, a.tag))
            }
            return no(e, s, c), Cc(), !1
        }
        if (ve) return t = jt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = c, s !== Wr && (e = Error(o(422), {
            cause: s
        }), zl(Dt(e, a)))) : (s !== Wr && (t = Error(o(423), {
            cause: s
        }), zl(Dt(t, a))), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, s = Dt(s, a), c = zi(e.stateNode, s, c), ui(e, c), Ye !== 4 && (Ye = 2)), !1;
        var r = Error(o(520), {
            cause: s
        });
        if (r = Dt(r, a), Wl === null ? Wl = [r] : Wl.push(r), Ye !== 4 && (Ye = 2), t === null) return !0;
        s = Dt(s, a), a = t;
        do {
            switch (a.tag) {
                case 3:
                    return a.flags |= 65536, e = c & -c, a.lanes |= e, e = zi(a.stateNode, s, e), ui(a, e), !1;
                case 1:
                    if (t = a.type, r = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (qa === null || !qa.has(r)))) return a.flags |= 65536, c &= -c, a.lanes |= c, c = Lf(c), Uf(c, e, a, s), ui(a, c), !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var ki = Error(o(461)),
        Ze = !1;

    function st(e, t, a, s) {
        t.child = e === null ? qd(t, null, a, s) : hs(t, e.child, a, s)
    }

    function Bf(e, t, a, s, c) {
        a = a.render;
        var r = t.ref;
        if ("ref" in s) {
            var f = {};
            for (var g in s) g !== "ref" && (f[g] = s[g])
        } else f = s;
        return ds(t), s = gi(e, t, a, f, r, c), g = xi(), e !== null && !Ze ? (yi(e, t, c), oa(e, t, c)) : (ve && g && Fr(t), t.flags |= 1, st(e, t, s, c), t.child)
    }

    function Pf(e, t, a, s, c) {
        if (e === null) {
            var r = a.type;
            return typeof r == "function" && !Kr(r) && r.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = r, qf(e, t, r, s, c)) : (e = In(a.type, null, s, t, t.mode, c), e.ref = t.ref, e.return = t, t.child = e)
        }
        if (r = e.child, !Gi(e, c)) {
            var f = r.memoizedProps;
            if (a = a.compare, a = a !== null ? a : Rl, a(f, s) && e.ref === t.ref) return oa(e, t, c)
        }
        return t.flags |= 1, e = sa(r, s), e.ref = t.ref, e.return = t, t.child = e
    }

    function qf(e, t, a, s, c) {
        if (e !== null) {
            var r = e.memoizedProps;
            if (Rl(r, s) && e.ref === t.ref)
                if (Ze = !1, t.pendingProps = s = r, Gi(e, c))(e.flags & 131072) !== 0 && (Ze = !0);
                else return t.lanes = e.lanes, oa(e, t, c)
        }
        return Hi(e, t, a, s, c)
    }

    function Yf(e, t, a, s) {
        var c = s.children,
            r = e !== null ? e.memoizedState : null;
        if (e === null && t.stateNode === null && (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }), s.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (r = r !== null ? r.baseLanes | a : a, e !== null) {
                    for (s = t.child = e.child, c = 0; s !== null;) c = c | s.lanes | s.childLanes, s = s.sibling;
                    s = c & ~r
                } else s = 0, t.child = null;
                return Gf(e, t, r, a, s)
            }
            if ((a & 536870912) !== 0) t.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, e !== null && Wn(t, r !== null ? r.cachePool : null), r !== null ? Xd(t, r) : fi(), Qd(t);
            else return s = t.lanes = 536870912, Gf(e, t, r !== null ? r.baseLanes | a : a, a, s)
        } else r !== null ? (Wn(t, r.cachePool), Xd(t, r), La(), t.memoizedState = null) : (e !== null && Wn(t, null), fi(), La());
        return st(e, t, c, a), t.child
    }

    function Vl(e, t) {
        return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }), t.sibling
    }

    function Gf(e, t, a, s, c) {
        var r = ci();
        return r = r === null ? null : {
            parent: Qe._currentValue,
            pool: r
        }, t.memoizedState = {
            baseLanes: a,
            cachePool: r
        }, e !== null && Wn(t, null), fi(), Qd(t), e !== null && qs(e, t, s, !0), t.childLanes = c, null
    }

    function hc(e, t) {
        return t = xc({
            mode: t.mode,
            children: t.children
        }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t
    }

    function Xf(e, t, a) {
        return hs(t, e.child, null, a), e = hc(t, t.pendingProps), e.flags |= 2, Nt(t), t.memoizedState = null, e
    }

    function s1(e, t, a) {
        var s = t.pendingProps,
            c = (t.flags & 128) !== 0;
        if (t.flags &= -129, e === null) {
            if (ve) {
                if (s.mode === "hidden") return e = hc(t, s), t.lanes = 536870912, Vl(null, e);
                if (mi(t), (e = He) ? (e = am(e, Tt), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
                        dehydrated: e,
                        treeContext: Da !== null ? {
                            id: Qt,
                            overflow: Vt
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, a = Cd(e), a.return = t, t.child = a, tt = t, He = null)) : e = null, e === null) throw Ra(t);
                return t.lanes = 536870912, null
            }
            return hc(t, s)
        }
        var r = e.memoizedState;
        if (r !== null) {
            var f = r.dehydrated;
            if (mi(t), c)
                if (t.flags & 256) t.flags &= -257, t = Xf(e, t, a);
                else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
            else throw Error(o(558));
            else if (Ze || qs(e, t, a, !1), c = (a & e.childLanes) !== 0, Ze || c) {
                if (s = Te, s !== null && (f = _u(s, a), f !== 0 && f !== r.retryLane)) throw r.retryLane = f, rs(e, f), pt(s, e, f), ki;
                Cc(), t = Xf(e, t, a)
            } else e = r.treeContext, He = zt(f.nextSibling), tt = t, ve = !0, Oa = null, Tt = !1, e !== null && Dd(t, e), t = hc(t, s), t.flags |= 4096;
            return t
        }
        return e = sa(e.child, {
            mode: s.mode,
            children: s.children
        }), e.ref = t.ref, t.child = e, e.return = t, e
    }

    function gc(e, t) {
        var a = t.ref;
        if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object") throw Error(o(284));
            (e === null || e.ref !== a) && (t.flags |= 4194816)
        }
    }

    function Hi(e, t, a, s, c) {
        return ds(t), a = gi(e, t, a, s, void 0, c), s = xi(), e !== null && !Ze ? (yi(e, t, c), oa(e, t, c)) : (ve && s && Fr(t), t.flags |= 1, st(e, t, a, c), t.child)
    }

    function Qf(e, t, a, s, c, r) {
        return ds(t), t.updateQueue = null, a = Zd(t, s, a, c), Vd(e), s = xi(), e !== null && !Ze ? (yi(e, t, r), oa(e, t, r)) : (ve && s && Fr(t), t.flags |= 1, st(e, t, a, r), t.child)
    }

    function Vf(e, t, a, s, c) {
        if (ds(t), t.stateNode === null) {
            var r = Ls,
                f = a.contextType;
            typeof f == "object" && f !== null && (r = at(f)), r = new a(s, r), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = _i, t.stateNode = r, r._reactInternals = t, r = t.stateNode, r.props = s, r.state = t.memoizedState, r.refs = {}, ii(t), f = a.contextType, r.context = typeof f == "object" && f !== null ? at(f) : Ls, r.state = t.memoizedState, f = a.getDerivedStateFromProps, typeof f == "function" && (Ti(t, a, f, s), r.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (f = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), f !== r.state && _i.enqueueReplaceState(r, r.state, null), ql(t, s, r, c), Pl(), r.state = t.memoizedState), typeof r.componentDidMount == "function" && (t.flags |= 4194308), s = !0
        } else if (e === null) {
            r = t.stateNode;
            var g = t.memoizedProps,
                N = xs(a, g);
            r.props = N;
            var T = r.context,
                L = a.contextType;
            f = Ls, typeof L == "object" && L !== null && (f = at(L));
            var q = a.getDerivedStateFromProps;
            L = typeof q == "function" || typeof r.getSnapshotBeforeUpdate == "function", g = t.pendingProps !== g, L || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (g || T !== f) && Tf(t, r, s, f), _a = !1;
            var _ = t.memoizedState;
            r.state = _, ql(t, s, r, c), Pl(), T = t.memoizedState, g || _ !== T || _a ? (typeof q == "function" && (Ti(t, a, q, s), T = t.memoizedState), (N = _a || Rf(t, a, N, s, _, T, f)) ? (L || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = T), r.props = s, r.state = T, r.context = f, s = N) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), s = !1)
        } else {
            r = t.stateNode, oi(e, t), f = t.memoizedProps, L = xs(a, f), r.props = L, q = t.pendingProps, _ = r.context, T = a.contextType, N = Ls, typeof T == "object" && T !== null && (N = at(T)), g = a.getDerivedStateFromProps, (T = typeof g == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (f !== q || _ !== N) && Tf(t, r, s, N), _a = !1, _ = t.memoizedState, r.state = _, ql(t, s, r, c), Pl();
            var k = t.memoizedState;
            f !== q || _ !== k || _a || e !== null && e.dependencies !== null && Fn(e.dependencies) ? (typeof g == "function" && (Ti(t, a, g, s), k = t.memoizedState), (L = _a || Rf(t, a, L, s, _, k, N) || e !== null && e.dependencies !== null && Fn(e.dependencies)) ? (T || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(s, k, N), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(s, k, N)), typeof r.componentDidUpdate == "function" && (t.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || f === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = k), r.props = s, r.state = k, r.context = N, s = L) : (typeof r.componentDidUpdate != "function" || f === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), s = !1)
        }
        return r = s, gc(e, t), s = (t.flags & 128) !== 0, r || s ? (r = t.stateNode, a = s && typeof a.getDerivedStateFromError != "function" ? null : r.render(), t.flags |= 1, e !== null && s ? (t.child = hs(t, e.child, null, c), t.child = hs(t, null, a, c)) : st(e, t, a, c), t.memoizedState = r.state, e = t.child) : e = oa(e, t, c), e
    }

    function Zf(e, t, a, s) {
        return os(), t.flags |= 256, st(e, t, a, s), t.child
    }
    var Li = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function Ui(e) {
        return {
            baseLanes: e,
            cachePool: kd()
        }
    }

    function Bi(e, t, a) {
        return e = e !== null ? e.childLanes & ~a : 0, t && (e |= wt), e
    }

    function Kf(e, t, a) {
        var s = t.pendingProps,
            c = !1,
            r = (t.flags & 128) !== 0,
            f;
        if ((f = r) || (f = e !== null && e.memoizedState === null ? !1 : (Ge.current & 2) !== 0), f && (c = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
            if (ve) {
                if (c ? Ha(t) : La(), (e = He) ? (e = am(e, Tt), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
                        dehydrated: e,
                        treeContext: Da !== null ? {
                            id: Qt,
                            overflow: Vt
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, a = Cd(e), a.return = t, t.child = a, tt = t, He = null)) : e = null, e === null) throw Ra(t);
                return No(e) ? t.lanes = 32 : t.lanes = 536870912, null
            }
            var g = s.children;
            return s = s.fallback, c ? (La(), c = t.mode, g = xc({
                mode: "hidden",
                children: g
            }, c), s = is(s, c, a, null), g.return = t, s.return = t, g.sibling = s, t.child = g, s = t.child, s.memoizedState = Ui(a), s.childLanes = Bi(e, f, a), t.memoizedState = Li, Vl(null, s)) : (Ha(t), Pi(t, g))
        }
        var N = e.memoizedState;
        if (N !== null && (g = N.dehydrated, g !== null)) {
            if (r) t.flags & 256 ? (Ha(t), t.flags &= -257, t = qi(e, t, a)) : t.memoizedState !== null ? (La(), t.child = e.child, t.flags |= 128, t = null) : (La(), g = s.fallback, c = t.mode, s = xc({
                mode: "visible",
                children: s.children
            }, c), g = is(g, c, a, null), g.flags |= 2, s.return = t, g.return = t, s.sibling = g, t.child = s, hs(t, e.child, null, a), s = t.child, s.memoizedState = Ui(a), s.childLanes = Bi(e, f, a), t.memoizedState = Li, t = Vl(null, s));
            else if (Ha(t), No(g)) {
                if (f = g.nextSibling && g.nextSibling.dataset, f) var T = f.dgst;
                f = T, s = Error(o(419)), s.stack = "", s.digest = f, zl({
                    value: s,
                    source: null,
                    stack: null
                }), t = qi(e, t, a)
            } else if (Ze || qs(e, t, a, !1), f = (a & e.childLanes) !== 0, Ze || f) {
                if (f = Te, f !== null && (s = _u(f, a), s !== 0 && s !== N.retryLane)) throw N.retryLane = s, rs(e, s), pt(f, e, s), ki;
                jo(g) || Cc(), t = qi(e, t, a)
            } else jo(g) ? (t.flags |= 192, t.child = e.child, t = null) : (e = N.treeContext, He = zt(g.nextSibling), tt = t, ve = !0, Oa = null, Tt = !1, e !== null && Dd(t, e), t = Pi(t, s.children), t.flags |= 4096);
            return t
        }
        return c ? (La(), g = s.fallback, c = t.mode, N = e.child, T = N.sibling, s = sa(N, {
            mode: "hidden",
            children: s.children
        }), s.subtreeFlags = N.subtreeFlags & 65011712, T !== null ? g = sa(T, g) : (g = is(g, c, a, null), g.flags |= 2), g.return = t, s.return = t, s.sibling = g, t.child = s, Vl(null, s), s = t.child, g = e.child.memoizedState, g === null ? g = Ui(a) : (c = g.cachePool, c !== null ? (N = Qe._currentValue, c = c.parent !== N ? {
            parent: N,
            pool: N
        } : c) : c = kd(), g = {
            baseLanes: g.baseLanes | a,
            cachePool: c
        }), s.memoizedState = g, s.childLanes = Bi(e, f, a), t.memoizedState = Li, Vl(e.child, s)) : (Ha(t), a = e.child, e = a.sibling, a = sa(a, {
            mode: "visible",
            children: s.children
        }), a.return = t, a.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = a, t.memoizedState = null, a)
    }

    function Pi(e, t) {
        return t = xc({
            mode: "visible",
            children: t
        }, e.mode), t.return = e, e.child = t
    }

    function xc(e, t) {
        return e = bt(22, e, null, t), e.lanes = 0, e
    }

    function qi(e, t, a) {
        return hs(t, e.child, null, a), e = Pi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function If(e, t, a) {
        e.lanes |= t;
        var s = e.alternate;
        s !== null && (s.lanes |= t), ai(e.return, t, a)
    }

    function Yi(e, t, a, s, c, r) {
        var f = e.memoizedState;
        f === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: s,
            tail: a,
            tailMode: c,
            treeForkCount: r
        } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = s, f.tail = a, f.tailMode = c, f.treeForkCount = r)
    }

    function Jf(e, t, a) {
        var s = t.pendingProps,
            c = s.revealOrder,
            r = s.tail;
        s = s.children;
        var f = Ge.current,
            g = (f & 2) !== 0;
        if (g ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, Q(Ge, f), st(e, t, s, a), s = ve ? _l : 0, !g && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && If(e, a, t);
            else if (e.tag === 19) If(e, a, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        switch (c) {
            case "forwards":
                for (a = t.child, c = null; a !== null;) e = a.alternate, e !== null && nc(e) === null && (c = a), a = a.sibling;
                a = c, a === null ? (c = t.child, t.child = null) : (c = a.sibling, a.sibling = null), Yi(t, !1, c, a, r, s);
                break;
            case "backwards":
            case "unstable_legacy-backwards":
                for (a = null, c = t.child, t.child = null; c !== null;) {
                    if (e = c.alternate, e !== null && nc(e) === null) {
                        t.child = c;
                        break
                    }
                    e = c.sibling, c.sibling = a, a = c, c = e
                }
                Yi(t, !0, a, null, r, s);
                break;
            case "together":
                Yi(t, !1, null, null, void 0, s);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function oa(e, t, a) {
        if (e !== null && (t.dependencies = e.dependencies), Pa |= t.lanes, (a & t.childLanes) === 0)
            if (e !== null) {
                if (qs(e, t, a, !1), (a & t.childLanes) === 0) return null
            } else return null;
        if (e !== null && t.child !== e.child) throw Error(o(153));
        if (t.child !== null) {
            for (e = t.child, a = sa(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null;) e = e.sibling, a = a.sibling = sa(e, e.pendingProps), a.return = t;
            a.sibling = null
        }
        return t.child
    }

    function Gi(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Fn(e)))
    }

    function l1(e, t, a) {
        switch (t.tag) {
            case 3:
                Fe(t, t.stateNode.containerInfo), Ta(t, Qe, e.memoizedState.cache), os();
                break;
            case 27:
            case 5:
                Xt(t);
                break;
            case 4:
                Fe(t, t.stateNode.containerInfo);
                break;
            case 10:
                Ta(t, t.type, t.memoizedProps.value);
                break;
            case 31:
                if (t.memoizedState !== null) return t.flags |= 128, mi(t), null;
                break;
            case 13:
                var s = t.memoizedState;
                if (s !== null) return s.dehydrated !== null ? (Ha(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Kf(e, t, a) : (Ha(t), e = oa(e, t, a), e !== null ? e.sibling : null);
                Ha(t);
                break;
            case 19:
                var c = (e.flags & 128) !== 0;
                if (s = (a & t.childLanes) !== 0, s || (qs(e, t, a, !1), s = (a & t.childLanes) !== 0), c) {
                    if (s) return Jf(e, t, a);
                    t.flags |= 128
                }
                if (c = t.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Q(Ge, Ge.current), s) break;
                return null;
            case 22:
                return t.lanes = 0, Yf(e, t, a, t.pendingProps);
            case 24:
                Ta(t, Qe, e.memoizedState.cache)
        }
        return oa(e, t, a)
    }

    function Ff(e, t, a) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps) Ze = !0;
            else {
                if (!Gi(e, a) && (t.flags & 128) === 0) return Ze = !1, l1(e, t, a);
                Ze = (e.flags & 131072) !== 0
            }
        else Ze = !1, ve && (t.flags & 1048576) !== 0 && Md(t, _l, t.index);
        switch (t.lanes = 0, t.tag) {
            case 16:
                e: {
                    var s = t.pendingProps;
                    if (e = ps(t.elementType), t.type = e, typeof e == "function") Kr(e) ? (s = xs(e, s), t.tag = 1, t = Vf(null, t, e, s, a)) : (t.tag = 0, t = Hi(null, t, e, s, a));
                    else {
                        if (e != null) {
                            var c = e.$$typeof;
                            if (c === J) {
                                t.tag = 11, t = Bf(null, t, e, s, a);
                                break e
                            } else if (c === X) {
                                t.tag = 14, t = Pf(null, t, e, s, a);
                                break e
                            }
                        }
                        throw t = ke(e) || e, Error(o(306, t, ""))
                    }
                }
                return t;
            case 0:
                return Hi(e, t, t.type, t.pendingProps, a);
            case 1:
                return s = t.type, c = xs(s, t.pendingProps), Vf(e, t, s, c, a);
            case 3:
                e: {
                    if (Fe(t, t.stateNode.containerInfo), e === null) throw Error(o(387));s = t.pendingProps;
                    var r = t.memoizedState;c = r.element,
                    oi(e, t),
                    ql(t, s, null, a);
                    var f = t.memoizedState;
                    if (s = f.cache, Ta(t, Qe, s), s !== r.cache && si(t, [Qe], a, !0), Pl(), s = f.element, r.isDehydrated)
                        if (r = {
                                element: s,
                                isDehydrated: !1,
                                cache: f.cache
                            }, t.updateQueue.baseState = r, t.memoizedState = r, t.flags & 256) {
                            t = Zf(e, t, s, a);
                            break e
                        } else if (s !== c) {
                        c = Dt(Error(o(424)), t), zl(c), t = Zf(e, t, s, a);
                        break e
                    } else
                        for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, He = zt(e.firstChild), tt = t, ve = !0, Oa = null, Tt = !0, a = qd(t, null, s, a), t.child = a; a;) a.flags = a.flags & -3 | 4096, a = a.sibling;
                    else {
                        if (os(), s === c) {
                            t = oa(e, t, a);
                            break e
                        }
                        st(e, t, s, a)
                    }
                    t = t.child
                }
                return t;
            case 26:
                return gc(e, t), e === null ? (a = im(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : ve || (a = t.type, e = t.pendingProps, s = _c(pe.current).createElement(a), s[et] = t, s[rt] = e, lt(s, a, e), $e(s), t.stateNode = s) : t.memoizedState = im(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
            case 27:
                return Xt(t), e === null && ve && (s = t.stateNode = nm(t.type, t.pendingProps, pe.current), tt = t, Tt = !0, c = He, Qa(t.type) ? (So = c, He = zt(s.firstChild)) : He = c), st(e, t, t.pendingProps.children, a), gc(e, t), e === null && (t.flags |= 4194304), t.child;
            case 5:
                return e === null && ve && ((c = s = He) && (s = z1(s, t.type, t.pendingProps, Tt), s !== null ? (t.stateNode = s, tt = t, He = zt(s.firstChild), Tt = !1, c = !0) : c = !1), c || Ra(t)), Xt(t), c = t.type, r = t.pendingProps, f = e !== null ? e.memoizedProps : null, s = r.children, yo(c, r) ? s = null : f !== null && yo(c, f) && (t.flags |= 32), t.memoizedState !== null && (c = gi(e, t, Ix, null, null, a), rn._currentValue = c), gc(e, t), st(e, t, s, a), t.child;
            case 6:
                return e === null && ve && ((e = a = He) && (a = k1(a, t.pendingProps, Tt), a !== null ? (t.stateNode = a, tt = t, He = null, e = !0) : e = !1), e || Ra(t)), null;
            case 13:
                return Kf(e, t, a);
            case 4:
                return Fe(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = hs(t, null, s, a) : st(e, t, s, a), t.child;
            case 11:
                return Bf(e, t, t.type, t.pendingProps, a);
            case 7:
                return st(e, t, t.pendingProps, a), t.child;
            case 8:
                return st(e, t, t.pendingProps.children, a), t.child;
            case 12:
                return st(e, t, t.pendingProps.children, a), t.child;
            case 10:
                return s = t.pendingProps, Ta(t, t.type, s.value), st(e, t, s.children, a), t.child;
            case 9:
                return c = t.type._context, s = t.pendingProps.children, ds(t), c = at(c), s = s(c), t.flags |= 1, st(e, t, s, a), t.child;
            case 14:
                return Pf(e, t, t.type, t.pendingProps, a);
            case 15:
                return qf(e, t, t.type, t.pendingProps, a);
            case 19:
                return Jf(e, t, a);
            case 31:
                return s1(e, t, a);
            case 22:
                return Yf(e, t, a, t.pendingProps);
            case 24:
                return ds(t), s = at(Qe), e === null ? (c = ci(), c === null && (c = Te, r = li(), c.pooledCache = r, r.refCount++, r !== null && (c.pooledCacheLanes |= a), c = r), t.memoizedState = {
                    parent: s,
                    cache: c
                }, ii(t), Ta(t, Qe, c)) : ((e.lanes & a) !== 0 && (oi(e, t), ql(t, null, null, a), Pl()), c = e.memoizedState, r = t.memoizedState, c.parent !== s ? (c = {
                    parent: s,
                    cache: s
                }, t.memoizedState = c, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = c), Ta(t, Qe, s)) : (s = r.cache, Ta(t, Qe, s), s !== c.cache && si(t, [Qe], a, !0))), st(e, t, t.pendingProps.children, a), t.child;
            case 29:
                throw t.pendingProps
        }
        throw Error(o(156, t.tag))
    }

    function ua(e) {
        e.flags |= 4
    }

    function Xi(e, t, a, s, c) {
        if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
            if (e.flags |= 16777216, (c & 335544128) === c)
                if (e.stateNode.complete) e.flags |= 8192;
                else if (wp()) e.flags |= 8192;
            else throw ms = tc, ri
        } else e.flags &= -16777217
    }

    function $f(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
        else if (e.flags |= 16777216, !pm(t))
            if (wp()) e.flags |= 8192;
            else throw ms = tc, ri
    }

    function yc(e, t) {
        t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Ou() : 536870912, e.lanes |= t, Ws |= t)
    }

    function Zl(e, t) {
        if (!ve) switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var a = null; t !== null;) t.alternate !== null && (a = t), t = t.sibling;
                a === null ? e.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = e.tail;
                for (var s = null; a !== null;) a.alternate !== null && (s = a), a = a.sibling;
                s === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null
        }
    }

    function Le(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            a = 0,
            s = 0;
        if (t)
            for (var c = e.child; c !== null;) a |= c.lanes | c.childLanes, s |= c.subtreeFlags & 65011712, s |= c.flags & 65011712, c.return = e, c = c.sibling;
        else
            for (c = e.child; c !== null;) a |= c.lanes | c.childLanes, s |= c.subtreeFlags, s |= c.flags, c.return = e, c = c.sibling;
        return e.subtreeFlags |= s, e.childLanes = a, t
    }

    function n1(e, t, a) {
        var s = t.pendingProps;
        switch ($r(t), t.tag) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Le(t), null;
            case 1:
                return Le(t), null;
            case 3:
                return a = t.stateNode, s = null, e !== null && (s = e.memoizedState.cache), t.memoizedState.cache !== s && (t.flags |= 2048), ca(Qe), _e(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ps(t) ? ua(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ei())), Le(t), null;
            case 26:
                var c = t.type,
                    r = t.memoizedState;
                return e === null ? (ua(t), r !== null ? (Le(t), $f(t, r)) : (Le(t), Xi(t, c, null, s, a))) : r ? r !== e.memoizedState ? (ua(t), Le(t), $f(t, r)) : (Le(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== s && ua(t), Le(t), Xi(t, c, e, s, a)), null;
            case 27:
                if (wa(t), a = pe.current, c = t.type, e !== null && t.stateNode != null) e.memoizedProps !== s && ua(t);
                else {
                    if (!s) {
                        if (t.stateNode === null) throw Error(o(166));
                        return Le(t), null
                    }
                    e = I.current, Ps(t) ? Od(t) : (e = nm(c, s, a), t.stateNode = e, ua(t))
                }
                return Le(t), null;
            case 5:
                if (wa(t), c = t.type, e !== null && t.stateNode != null) e.memoizedProps !== s && ua(t);
                else {
                    if (!s) {
                        if (t.stateNode === null) throw Error(o(166));
                        return Le(t), null
                    }
                    if (r = I.current, Ps(t)) Od(t);
                    else {
                        var f = _c(pe.current);
                        switch (r) {
                            case 1:
                                r = f.createElementNS("http://www.w3.org/2000/svg", c);
                                break;
                            case 2:
                                r = f.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                                break;
                            default:
                                switch (c) {
                                    case "svg":
                                        r = f.createElementNS("http://www.w3.org/2000/svg", c);
                                        break;
                                    case "math":
                                        r = f.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                                        break;
                                    case "script":
                                        r = f.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(r.firstChild);
                                        break;
                                    case "select":
                                        r = typeof s.is == "string" ? f.createElement("select", {
                                            is: s.is
                                        }) : f.createElement("select"), s.multiple ? r.multiple = !0 : s.size && (r.size = s.size);
                                        break;
                                    default:
                                        r = typeof s.is == "string" ? f.createElement(c, {
                                            is: s.is
                                        }) : f.createElement(c)
                                }
                        }
                        r[et] = t, r[rt] = s;
                        e: for (f = t.child; f !== null;) {
                            if (f.tag === 5 || f.tag === 6) r.appendChild(f.stateNode);
                            else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                                f.child.return = f, f = f.child;
                                continue
                            }
                            if (f === t) break e;
                            for (; f.sibling === null;) {
                                if (f.return === null || f.return === t) break e;
                                f = f.return
                            }
                            f.sibling.return = f.return, f = f.sibling
                        }
                        t.stateNode = r;
                        e: switch (lt(r, c, s), c) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                s = !!s.autoFocus;
                                break e;
                            case "img":
                                s = !0;
                                break e;
                            default:
                                s = !1
                        }
                        s && ua(t)
                    }
                }
                return Le(t), Xi(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a), null;
            case 6:
                if (e && t.stateNode != null) e.memoizedProps !== s && ua(t);
                else {
                    if (typeof s != "string" && t.stateNode === null) throw Error(o(166));
                    if (e = pe.current, Ps(t)) {
                        if (e = t.stateNode, a = t.memoizedProps, s = null, c = tt, c !== null) switch (c.tag) {
                            case 27:
                            case 5:
                                s = c.memoizedProps
                        }
                        e[et] = t, e = !!(e.nodeValue === a || s !== null && s.suppressHydrationWarning === !0 || Kp(e.nodeValue, a)), e || Ra(t, !0)
                    } else e = _c(e).createTextNode(s), e[et] = t, t.stateNode = e
                }
                return Le(t), null;
            case 31:
                if (a = t.memoizedState, e === null || e.memoizedState !== null) {
                    if (s = Ps(t), a !== null) {
                        if (e === null) {
                            if (!s) throw Error(o(318));
                            if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
                            e[et] = t
                        } else os(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        Le(t), e = !1
                    } else a = ei(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
                    if (!e) return t.flags & 256 ? (Nt(t), t) : (Nt(t), null);
                    if ((t.flags & 128) !== 0) throw Error(o(558))
                }
                return Le(t), null;
            case 13:
                if (s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (c = Ps(t), s !== null && s.dehydrated !== null) {
                        if (e === null) {
                            if (!c) throw Error(o(318));
                            if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(o(317));
                            c[et] = t
                        } else os(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        Le(t), c = !1
                    } else c = ei(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
                    if (!c) return t.flags & 256 ? (Nt(t), t) : (Nt(t), null)
                }
                return Nt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = s !== null, e = e !== null && e.memoizedState !== null, a && (s = t.child, c = null, s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (c = s.alternate.memoizedState.cachePool.pool), r = null, s.memoizedState !== null && s.memoizedState.cachePool !== null && (r = s.memoizedState.cachePool.pool), r !== c && (s.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), yc(t, t.updateQueue), Le(t), null);
            case 4:
                return _e(), e === null && po(t.stateNode.containerInfo), Le(t), null;
            case 10:
                return ca(t.type), Le(t), null;
            case 19:
                if (P(Ge), s = t.memoizedState, s === null) return Le(t), null;
                if (c = (t.flags & 128) !== 0, r = s.rendering, r === null)
                    if (c) Zl(s, !1);
                    else {
                        if (Ye !== 0 || e !== null && (e.flags & 128) !== 0)
                            for (e = t.child; e !== null;) {
                                if (r = nc(e), r !== null) {
                                    for (t.flags |= 128, Zl(s, !1), e = r.updateQueue, t.updateQueue = e, yc(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null;) Ed(a, e), a = a.sibling;
                                    return Q(Ge, Ge.current & 1 | 2), ve && la(t, s.treeForkCount), t.child
                                }
                                e = e.sibling
                            }
                        s.tail !== null && gt() > Sc && (t.flags |= 128, c = !0, Zl(s, !1), t.lanes = 4194304)
                    }
                else {
                    if (!c)
                        if (e = nc(r), e !== null) {
                            if (t.flags |= 128, c = !0, e = e.updateQueue, t.updateQueue = e, yc(t, e), Zl(s, !0), s.tail === null && s.tailMode === "hidden" && !r.alternate && !ve) return Le(t), null
                        } else 2 * gt() - s.renderingStartTime > Sc && a !== 536870912 && (t.flags |= 128, c = !0, Zl(s, !1), t.lanes = 4194304);
                    s.isBackwards ? (r.sibling = t.child, t.child = r) : (e = s.last, e !== null ? e.sibling = r : t.child = r, s.last = r)
                }
                return s.tail !== null ? (e = s.tail, s.rendering = e, s.tail = e.sibling, s.renderingStartTime = gt(), e.sibling = null, a = Ge.current, Q(Ge, c ? a & 1 | 2 : a & 1), ve && la(t, s.treeForkCount), e) : (Le(t), null);
            case 22:
            case 23:
                return Nt(t), pi(), s = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== s && (t.flags |= 8192) : s && (t.flags |= 8192), s ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Le(t), a = t.updateQueue, a !== null && yc(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), s = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (s = t.memoizedState.cachePool.pool), s !== a && (t.flags |= 2048), e !== null && P(fs), null;
            case 24:
                return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), ca(Qe), Le(t), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(o(156, t.tag))
    }

    function c1(e, t) {
        switch ($r(t), t.tag) {
            case 1:
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return ca(Qe), _e(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
            case 26:
            case 27:
            case 5:
                return wa(t), null;
            case 31:
                if (t.memoizedState !== null) {
                    if (Nt(t), t.alternate === null) throw Error(o(340));
                    os()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 13:
                if (Nt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(o(340));
                    os()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return P(Ge), null;
            case 4:
                return _e(), null;
            case 10:
                return ca(t.type), null;
            case 22:
            case 23:
                return Nt(t), pi(), e !== null && P(fs), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 24:
                return ca(Qe), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function Wf(e, t) {
        switch ($r(t), t.tag) {
            case 3:
                ca(Qe), _e();
                break;
            case 26:
            case 27:
            case 5:
                wa(t);
                break;
            case 4:
                _e();
                break;
            case 31:
                t.memoizedState !== null && Nt(t);
                break;
            case 13:
                Nt(t);
                break;
            case 19:
                P(Ge);
                break;
            case 10:
                ca(t.type);
                break;
            case 22:
            case 23:
                Nt(t), pi(), e !== null && P(fs);
                break;
            case 24:
                ca(Qe)
        }
    }

    function Kl(e, t) {
        try {
            var a = t.updateQueue,
                s = a !== null ? a.lastEffect : null;
            if (s !== null) {
                var c = s.next;
                a = c;
                do {
                    if ((a.tag & e) === e) {
                        s = void 0;
                        var r = a.create,
                            f = a.inst;
                        s = r(), f.destroy = s
                    }
                    a = a.next
                } while (a !== c)
            }
        } catch (g) {
            Me(t, t.return, g)
        }
    }

    function Ua(e, t, a) {
        try {
            var s = t.updateQueue,
                c = s !== null ? s.lastEffect : null;
            if (c !== null) {
                var r = c.next;
                s = r;
                do {
                    if ((s.tag & e) === e) {
                        var f = s.inst,
                            g = f.destroy;
                        if (g !== void 0) {
                            f.destroy = void 0, c = t;
                            var N = a,
                                T = g;
                            try {
                                T()
                            } catch (L) {
                                Me(c, N, L)
                            }
                        }
                    }
                    s = s.next
                } while (s !== r)
            }
        } catch (L) {
            Me(t, t.return, L)
        }
    }

    function ep(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var a = e.stateNode;
            try {
                Gd(t, a)
            } catch (s) {
                Me(e, e.return, s)
            }
        }
    }

    function tp(e, t, a) {
        a.props = xs(e.type, e.memoizedProps), a.state = e.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (s) {
            Me(e, t, s)
        }
    }

    function Il(e, t) {
        try {
            var a = e.ref;
            if (a !== null) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var s = e.stateNode;
                        break;
                    case 30:
                        s = e.stateNode;
                        break;
                    default:
                        s = e.stateNode
                }
                typeof a == "function" ? e.refCleanup = a(s) : a.current = s
            }
        } catch (c) {
            Me(e, t, c)
        }
    }

    function Zt(e, t) {
        var a = e.ref,
            s = e.refCleanup;
        if (a !== null)
            if (typeof s == "function") try {
                s()
            } catch (c) {
                Me(e, t, c)
            } finally {
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null)
            } else if (typeof a == "function") try {
                a(null)
            } catch (c) {
                Me(e, t, c)
            } else a.current = null
    }

    function ap(e) {
        var t = e.type,
            a = e.memoizedProps,
            s = e.stateNode;
        try {
            e: switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    a.autoFocus && s.focus();
                    break e;
                case "img":
                    a.src ? s.src = a.src : a.srcSet && (s.srcset = a.srcSet)
            }
        }
        catch (c) {
            Me(e, e.return, c)
        }
    }

    function Qi(e, t, a) {
        try {
            var s = e.stateNode;
            M1(s, e.type, a, t), s[rt] = t
        } catch (c) {
            Me(e, e.return, c)
        }
    }

    function sp(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Qa(e.type) || e.tag === 4
    }

    function Vi(e) {
        e: for (;;) {
            for (; e.sibling === null;) {
                if (e.return === null || sp(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.tag === 27 && Qa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function Zi(e, t, a) {
        var s = e.tag;
        if (s === 5 || s === 6) e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = ta));
        else if (s !== 4 && (s === 27 && Qa(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
            for (Zi(e, t, a), e = e.sibling; e !== null;) Zi(e, t, a), e = e.sibling
    }

    function vc(e, t, a) {
        var s = e.tag;
        if (s === 5 || s === 6) e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
        else if (s !== 4 && (s === 27 && Qa(e.type) && (a = e.stateNode), e = e.child, e !== null))
            for (vc(e, t, a), e = e.sibling; e !== null;) vc(e, t, a), e = e.sibling
    }

    function lp(e) {
        var t = e.stateNode,
            a = e.memoizedProps;
        try {
            for (var s = e.type, c = t.attributes; c.length;) t.removeAttributeNode(c[0]);
            lt(t, s, a), t[et] = e, t[rt] = a
        } catch (r) {
            Me(e, e.return, r)
        }
    }
    var da = !1,
        Ke = !1,
        Ki = !1,
        np = typeof WeakSet == "function" ? WeakSet : Set,
        We = null;

    function r1(e, t) {
        if (e = e.containerInfo, go = Pc, e = gd(e), qr(e)) {
            if ("selectionStart" in e) var a = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                a = (a = e.ownerDocument) && a.defaultView || window;
                var s = a.getSelection && a.getSelection();
                if (s && s.rangeCount !== 0) {
                    a = s.anchorNode;
                    var c = s.anchorOffset,
                        r = s.focusNode;
                    s = s.focusOffset;
                    try {
                        a.nodeType, r.nodeType
                    } catch {
                        a = null;
                        break e
                    }
                    var f = 0,
                        g = -1,
                        N = -1,
                        T = 0,
                        L = 0,
                        q = e,
                        _ = null;
                    t: for (;;) {
                        for (var k; q !== a || c !== 0 && q.nodeType !== 3 || (g = f + c), q !== r || s !== 0 && q.nodeType !== 3 || (N = f + s), q.nodeType === 3 && (f += q.nodeValue.length), (k = q.firstChild) !== null;) _ = q, q = k;
                        for (;;) {
                            if (q === e) break t;
                            if (_ === a && ++T === c && (g = f), _ === r && ++L === s && (N = f), (k = q.nextSibling) !== null) break;
                            q = _, _ = q.parentNode
                        }
                        q = k
                    }
                    a = g === -1 || N === -1 ? null : {
                        start: g,
                        end: N
                    }
                } else a = null
            }
            a = a || {
                start: 0,
                end: 0
            }
        } else a = null;
        for (xo = {
                focusedElem: e,
                selectionRange: a
            }, Pc = !1, We = t; We !== null;)
            if (t = We, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, We = e;
            else
                for (; We !== null;) {
                    switch (t = We, r = t.alternate, e = t.flags, t.tag) {
                        case 0:
                            if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                                for (a = 0; a < e.length; a++) c = e[a], c.ref.impl = c.nextImpl;
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((e & 1024) !== 0 && r !== null) {
                                e = void 0, a = t, c = r.memoizedProps, r = r.memoizedState, s = a.stateNode;
                                try {
                                    var F = xs(a.type, c);
                                    e = s.getSnapshotBeforeUpdate(F, r), s.__reactInternalSnapshotBeforeUpdate = e
                                } catch (le) {
                                    Me(a, a.return, le)
                                }
                            }
                            break;
                        case 3:
                            if ((e & 1024) !== 0) {
                                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9) bo(e);
                                else if (a === 1) switch (e.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        bo(e);
                                        break;
                                    default:
                                        e.textContent = ""
                                }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((e & 1024) !== 0) throw Error(o(163))
                    }
                    if (e = t.sibling, e !== null) {
                        e.return = t.return, We = e;
                        break
                    }
                    We = t.return
                }
    }

    function cp(e, t, a) {
        var s = a.flags;
        switch (a.tag) {
            case 0:
            case 11:
            case 15:
                pa(e, a), s & 4 && Kl(5, a);
                break;
            case 1:
                if (pa(e, a), s & 4)
                    if (e = a.stateNode, t === null) try {
                        e.componentDidMount()
                    } catch (f) {
                        Me(a, a.return, f)
                    } else {
                        var c = xs(a.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(c, t, e.__reactInternalSnapshotBeforeUpdate)
                        } catch (f) {
                            Me(a, a.return, f)
                        }
                    }
                s & 64 && ep(a), s & 512 && Il(a, a.return);
                break;
            case 3:
                if (pa(e, a), s & 64 && (e = a.updateQueue, e !== null)) {
                    if (t = null, a.child !== null) switch (a.child.tag) {
                        case 27:
                        case 5:
                            t = a.child.stateNode;
                            break;
                        case 1:
                            t = a.child.stateNode
                    }
                    try {
                        Gd(e, t)
                    } catch (f) {
                        Me(a, a.return, f)
                    }
                }
                break;
            case 27:
                t === null && s & 4 && lp(a);
            case 26:
            case 5:
                pa(e, a), t === null && s & 4 && ap(a), s & 512 && Il(a, a.return);
                break;
            case 12:
                pa(e, a);
                break;
            case 31:
                pa(e, a), s & 4 && op(e, a);
                break;
            case 13:
                pa(e, a), s & 4 && up(e, a), s & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = g1.bind(null, a), H1(e, a))));
                break;
            case 22:
                if (s = a.memoizedState !== null || da, !s) {
                    t = t !== null && t.memoizedState !== null || Ke, c = da;
                    var r = Ke;
                    da = s, (Ke = t) && !r ? ma(e, a, (a.subtreeFlags & 8772) !== 0) : pa(e, a), da = c, Ke = r
                }
                break;
            case 30:
                break;
            default:
                pa(e, a)
        }
    }

    function rp(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, rp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && wr(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }
    var Ue = null,
        ot = !1;

    function fa(e, t, a) {
        for (a = a.child; a !== null;) ip(e, t, a), a = a.sibling
    }

    function ip(e, t, a) {
        if (xt && typeof xt.onCommitFiberUnmount == "function") try {
            xt.onCommitFiberUnmount(vl, a)
        } catch {}
        switch (a.tag) {
            case 26:
                Ke || Zt(a, t), fa(e, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
                break;
            case 27:
                Ke || Zt(a, t);
                var s = Ue,
                    c = ot;
                Qa(a.type) && (Ue = a.stateNode, ot = !1), fa(e, t, a), ln(a.stateNode), Ue = s, ot = c;
                break;
            case 5:
                Ke || Zt(a, t);
            case 6:
                if (s = Ue, c = ot, Ue = null, fa(e, t, a), Ue = s, ot = c, Ue !== null)
                    if (ot) try {
                        (Ue.nodeType === 9 ? Ue.body : Ue.nodeName === "HTML" ? Ue.ownerDocument.body : Ue).removeChild(a.stateNode)
                    } catch (r) {
                        Me(a, t, r)
                    } else try {
                        Ue.removeChild(a.stateNode)
                    } catch (r) {
                        Me(a, t, r)
                    }
                break;
            case 18:
                Ue !== null && (ot ? (e = Ue, em(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode), rl(e)) : em(Ue, a.stateNode));
                break;
            case 4:
                s = Ue, c = ot, Ue = a.stateNode.containerInfo, ot = !0, fa(e, t, a), Ue = s, ot = c;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                Ua(2, a, t), Ke || Ua(4, a, t), fa(e, t, a);
                break;
            case 1:
                Ke || (Zt(a, t), s = a.stateNode, typeof s.componentWillUnmount == "function" && tp(a, t, s)), fa(e, t, a);
                break;
            case 21:
                fa(e, t, a);
                break;
            case 22:
                Ke = (s = Ke) || a.memoizedState !== null, fa(e, t, a), Ke = s;
                break;
            default:
                fa(e, t, a)
        }
    }

    function op(e, t) {
        if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
            e = e.dehydrated;
            try {
                rl(e)
            } catch (a) {
                Me(t, t.return, a)
            }
        }
    }

    function up(e, t) {
        if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
            rl(e)
        } catch (a) {
            Me(t, t.return, a)
        }
    }

    function i1(e) {
        switch (e.tag) {
            case 31:
            case 13:
            case 19:
                var t = e.stateNode;
                return t === null && (t = e.stateNode = new np), t;
            case 22:
                return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new np), t;
            default:
                throw Error(o(435, e.tag))
        }
    }

    function bc(e, t) {
        var a = i1(e);
        t.forEach(function(s) {
            if (!a.has(s)) {
                a.add(s);
                var c = x1.bind(null, e, s);
                s.then(c, c)
            }
        })
    }

    function ut(e, t) {
        var a = t.deletions;
        if (a !== null)
            for (var s = 0; s < a.length; s++) {
                var c = a[s],
                    r = e,
                    f = t,
                    g = f;
                e: for (; g !== null;) {
                    switch (g.tag) {
                        case 27:
                            if (Qa(g.type)) {
                                Ue = g.stateNode, ot = !1;
                                break e
                            }
                            break;
                        case 5:
                            Ue = g.stateNode, ot = !1;
                            break e;
                        case 3:
                        case 4:
                            Ue = g.stateNode.containerInfo, ot = !0;
                            break e
                    }
                    g = g.return
                }
                if (Ue === null) throw Error(o(160));
                ip(r, f, c), Ue = null, ot = !1, r = c.alternate, r !== null && (r.return = null), c.return = null
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null;) dp(t, e), t = t.sibling
    }
    var Ut = null;

    function dp(e, t) {
        var a = e.alternate,
            s = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ut(t, e), dt(e), s & 4 && (Ua(3, e, e.return), Kl(3, e), Ua(5, e, e.return));
                break;
            case 1:
                ut(t, e), dt(e), s & 512 && (Ke || a === null || Zt(a, a.return)), s & 64 && da && (e = e.updateQueue, e !== null && (s = e.callbacks, s !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? s : a.concat(s))));
                break;
            case 26:
                var c = Ut;
                if (ut(t, e), dt(e), s & 512 && (Ke || a === null || Zt(a, a.return)), s & 4) {
                    var r = a !== null ? a.memoizedState : null;
                    if (s = e.memoizedState, a === null)
                        if (s === null)
                            if (e.stateNode === null) {
                                e: {
                                    s = e.type,
                                    a = e.memoizedProps,
                                    c = c.ownerDocument || c;t: switch (s) {
                                        case "title":
                                            r = c.getElementsByTagName("title")[0], (!r || r[Nl] || r[et] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = c.createElement(s), c.head.insertBefore(r, c.querySelector("head > title"))), lt(r, s, a), r[et] = e, $e(r), s = r;
                                            break e;
                                        case "link":
                                            var f = dm("link", "href", c).get(s + (a.href || ""));
                                            if (f) {
                                                for (var g = 0; g < f.length; g++)
                                                    if (r = f[g], r.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && r.getAttribute("rel") === (a.rel == null ? null : a.rel) && r.getAttribute("title") === (a.title == null ? null : a.title) && r.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                        f.splice(g, 1);
                                                        break t
                                                    }
                                            }
                                            r = c.createElement(s), lt(r, s, a), c.head.appendChild(r);
                                            break;
                                        case "meta":
                                            if (f = dm("meta", "content", c).get(s + (a.content || ""))) {
                                                for (g = 0; g < f.length; g++)
                                                    if (r = f[g], r.getAttribute("content") === (a.content == null ? null : "" + a.content) && r.getAttribute("name") === (a.name == null ? null : a.name) && r.getAttribute("property") === (a.property == null ? null : a.property) && r.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && r.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                        f.splice(g, 1);
                                                        break t
                                                    }
                                            }
                                            r = c.createElement(s), lt(r, s, a), c.head.appendChild(r);
                                            break;
                                        default:
                                            throw Error(o(468, s))
                                    }
                                    r[et] = e,
                                    $e(r),
                                    s = r
                                }
                                e.stateNode = s
                            }
                    else fm(c, e.type, e.stateNode);
                    else e.stateNode = um(c, s, e.memoizedProps);
                    else r !== s ? (r === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : r.count--, s === null ? fm(c, e.type, e.stateNode) : um(c, s, e.memoizedProps)) : s === null && e.stateNode !== null && Qi(e, e.memoizedProps, a.memoizedProps)
                }
                break;
            case 27:
                ut(t, e), dt(e), s & 512 && (Ke || a === null || Zt(a, a.return)), a !== null && s & 4 && Qi(e, e.memoizedProps, a.memoizedProps);
                break;
            case 5:
                if (ut(t, e), dt(e), s & 512 && (Ke || a === null || Zt(a, a.return)), e.flags & 32) {
                    c = e.stateNode;
                    try {
                        Os(c, "")
                    } catch (F) {
                        Me(e, e.return, F)
                    }
                }
                s & 4 && e.stateNode != null && (c = e.memoizedProps, Qi(e, c, a !== null ? a.memoizedProps : c)), s & 1024 && (Ki = !0);
                break;
            case 6:
                if (ut(t, e), dt(e), s & 4) {
                    if (e.stateNode === null) throw Error(o(162));
                    s = e.memoizedProps, a = e.stateNode;
                    try {
                        a.nodeValue = s
                    } catch (F) {
                        Me(e, e.return, F)
                    }
                }
                break;
            case 3:
                if (Hc = null, c = Ut, Ut = zc(t.containerInfo), ut(t, e), Ut = c, dt(e), s & 4 && a !== null && a.memoizedState.isDehydrated) try {
                    rl(t.containerInfo)
                } catch (F) {
                    Me(e, e.return, F)
                }
                Ki && (Ki = !1, fp(e));
                break;
            case 4:
                s = Ut, Ut = zc(e.stateNode.containerInfo), ut(t, e), dt(e), Ut = s;
                break;
            case 12:
                ut(t, e), dt(e);
                break;
            case 31:
                ut(t, e), dt(e), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, bc(e, s)));
                break;
            case 13:
                ut(t, e), dt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Nc = gt()), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, bc(e, s)));
                break;
            case 22:
                c = e.memoizedState !== null;
                var N = a !== null && a.memoizedState !== null,
                    T = da,
                    L = Ke;
                if (da = T || c, Ke = L || N, ut(t, e), Ke = L, da = T, dt(e), s & 8192) e: for (t = e.stateNode, t._visibility = c ? t._visibility & -2 : t._visibility | 1, c && (a === null || N || da || Ke || ys(e)), a = null, t = e;;) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (a === null) {
                            N = a = t;
                            try {
                                if (r = N.stateNode, c) f = r.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                                else {
                                    g = N.stateNode;
                                    var q = N.memoizedProps.style,
                                        _ = q != null && q.hasOwnProperty("display") ? q.display : null;
                                    g.style.display = _ == null || typeof _ == "boolean" ? "" : ("" + _).trim()
                                }
                            } catch (F) {
                                Me(N, N.return, F)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (a === null) {
                            N = t;
                            try {
                                N.stateNode.nodeValue = c ? "" : N.memoizedProps
                            } catch (F) {
                                Me(N, N.return, F)
                            }
                        }
                    } else if (t.tag === 18) {
                        if (a === null) {
                            N = t;
                            try {
                                var k = N.stateNode;
                                c ? tm(k, !0) : tm(N.stateNode, !1)
                            } catch (F) {
                                Me(N, N.return, F)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break e;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === e) break e;
                        a === t && (a = null), t = t.return
                    }
                    a === t && (a = null), t.sibling.return = t.return, t = t.sibling
                }
                s & 4 && (s = e.updateQueue, s !== null && (a = s.retryQueue, a !== null && (s.retryQueue = null, bc(e, a))));
                break;
            case 19:
                ut(t, e), dt(e), s & 4 && (s = e.updateQueue, s !== null && (e.updateQueue = null, bc(e, s)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                ut(t, e), dt(e)
        }
    }

    function dt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var a, s = e.return; s !== null;) {
                    if (sp(s)) {
                        a = s;
                        break
                    }
                    s = s.return
                }
                if (a == null) throw Error(o(160));
                switch (a.tag) {
                    case 27:
                        var c = a.stateNode,
                            r = Vi(e);
                        vc(e, r, c);
                        break;
                    case 5:
                        var f = a.stateNode;
                        a.flags & 32 && (Os(f, ""), a.flags &= -33);
                        var g = Vi(e);
                        vc(e, g, f);
                        break;
                    case 3:
                    case 4:
                        var N = a.stateNode.containerInfo,
                            T = Vi(e);
                        Zi(e, T, N);
                        break;
                    default:
                        throw Error(o(161))
                }
            } catch (L) {
                Me(e, e.return, L)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }

    function fp(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null;) {
                var t = e;
                fp(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling
            }
    }

    function pa(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null;) cp(e, t.alternate, t), t = t.sibling
    }

    function ys(e) {
        for (e = e.child; e !== null;) {
            var t = e;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    Ua(4, t, t.return), ys(t);
                    break;
                case 1:
                    Zt(t, t.return);
                    var a = t.stateNode;
                    typeof a.componentWillUnmount == "function" && tp(t, t.return, a), ys(t);
                    break;
                case 27:
                    ln(t.stateNode);
                case 26:
                case 5:
                    Zt(t, t.return), ys(t);
                    break;
                case 22:
                    t.memoizedState === null && ys(t);
                    break;
                case 30:
                    ys(t);
                    break;
                default:
                    ys(t)
            }
            e = e.sibling
        }
    }

    function ma(e, t, a) {
        for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
            var s = t.alternate,
                c = e,
                r = t,
                f = r.flags;
            switch (r.tag) {
                case 0:
                case 11:
                case 15:
                    ma(c, r, a), Kl(4, r);
                    break;
                case 1:
                    if (ma(c, r, a), s = r, c = s.stateNode, typeof c.componentDidMount == "function") try {
                        c.componentDidMount()
                    } catch (T) {
                        Me(s, s.return, T)
                    }
                    if (s = r, c = s.updateQueue, c !== null) {
                        var g = s.stateNode;
                        try {
                            var N = c.shared.hiddenCallbacks;
                            if (N !== null)
                                for (c.shared.hiddenCallbacks = null, c = 0; c < N.length; c++) Yd(N[c], g)
                        } catch (T) {
                            Me(s, s.return, T)
                        }
                    }
                    a && f & 64 && ep(r), Il(r, r.return);
                    break;
                case 27:
                    lp(r);
                case 26:
                case 5:
                    ma(c, r, a), a && s === null && f & 4 && ap(r), Il(r, r.return);
                    break;
                case 12:
                    ma(c, r, a);
                    break;
                case 31:
                    ma(c, r, a), a && f & 4 && op(c, r);
                    break;
                case 13:
                    ma(c, r, a), a && f & 4 && up(c, r);
                    break;
                case 22:
                    r.memoizedState === null && ma(c, r, a), Il(r, r.return);
                    break;
                case 30:
                    break;
                default:
                    ma(c, r, a)
            }
            t = t.sibling
        }
    }

    function Ii(e, t) {
        var a = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && kl(a))
    }

    function Ji(e, t) {
        e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && kl(e))
    }

    function Bt(e, t, a, s) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) pp(e, t, a, s), t = t.sibling
    }

    function pp(e, t, a, s) {
        var c = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                Bt(e, t, a, s), c & 2048 && Kl(9, t);
                break;
            case 1:
                Bt(e, t, a, s);
                break;
            case 3:
                Bt(e, t, a, s), c & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && kl(e)));
                break;
            case 12:
                if (c & 2048) {
                    Bt(e, t, a, s), e = t.stateNode;
                    try {
                        var r = t.memoizedProps,
                            f = r.id,
                            g = r.onPostCommit;
                        typeof g == "function" && g(f, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                    } catch (N) {
                        Me(t, t.return, N)
                    }
                } else Bt(e, t, a, s);
                break;
            case 31:
                Bt(e, t, a, s);
                break;
            case 13:
                Bt(e, t, a, s);
                break;
            case 23:
                break;
            case 22:
                r = t.stateNode, f = t.alternate, t.memoizedState !== null ? r._visibility & 2 ? Bt(e, t, a, s) : Jl(e, t) : r._visibility & 2 ? Bt(e, t, a, s) : (r._visibility |= 2, Js(e, t, a, s, (t.subtreeFlags & 10256) !== 0 || !1)), c & 2048 && Ii(f, t);
                break;
            case 24:
                Bt(e, t, a, s), c & 2048 && Ji(t.alternate, t);
                break;
            default:
                Bt(e, t, a, s)
        }
    }

    function Js(e, t, a, s, c) {
        for (c = c && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null;) {
            var r = e,
                f = t,
                g = a,
                N = s,
                T = f.flags;
            switch (f.tag) {
                case 0:
                case 11:
                case 15:
                    Js(r, f, g, N, c), Kl(8, f);
                    break;
                case 23:
                    break;
                case 22:
                    var L = f.stateNode;
                    f.memoizedState !== null ? L._visibility & 2 ? Js(r, f, g, N, c) : Jl(r, f) : (L._visibility |= 2, Js(r, f, g, N, c)), c && T & 2048 && Ii(f.alternate, f);
                    break;
                case 24:
                    Js(r, f, g, N, c), c && T & 2048 && Ji(f.alternate, f);
                    break;
                default:
                    Js(r, f, g, N, c)
            }
            t = t.sibling
        }
    }

    function Jl(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) {
                var a = e,
                    s = t,
                    c = s.flags;
                switch (s.tag) {
                    case 22:
                        Jl(a, s), c & 2048 && Ii(s.alternate, s);
                        break;
                    case 24:
                        Jl(a, s), c & 2048 && Ji(s.alternate, s);
                        break;
                    default:
                        Jl(a, s)
                }
                t = t.sibling
            }
    }
    var Fl = 8192;

    function Fs(e, t, a) {
        if (e.subtreeFlags & Fl)
            for (e = e.child; e !== null;) mp(e, t, a), e = e.sibling
    }

    function mp(e, t, a) {
        switch (e.tag) {
            case 26:
                Fs(e, t, a), e.flags & Fl && e.memoizedState !== null && K1(a, Ut, e.memoizedState, e.memoizedProps);
                break;
            case 5:
                Fs(e, t, a);
                break;
            case 3:
            case 4:
                var s = Ut;
                Ut = zc(e.stateNode.containerInfo), Fs(e, t, a), Ut = s;
                break;
            case 22:
                e.memoizedState === null && (s = e.alternate, s !== null && s.memoizedState !== null ? (s = Fl, Fl = 16777216, Fs(e, t, a), Fl = s) : Fs(e, t, a));
                break;
            default:
                Fs(e, t, a)
        }
    }

    function hp(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child, e !== null)) {
            t.child = null;
            do t = e.sibling, e.sibling = null, e = t; while (e !== null)
        }
    }

    function $l(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    We = s, xp(s, e)
                }
            hp(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) gp(e), e = e.sibling
    }

    function gp(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                $l(e), e.flags & 2048 && Ua(9, e, e.return);
                break;
            case 3:
                $l(e);
                break;
            case 12:
                $l(e);
                break;
            case 22:
                var t = e.stateNode;
                e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, jc(e)) : $l(e);
                break;
            default:
                $l(e)
        }
    }

    function jc(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    We = s, xp(s, e)
                }
            hp(e)
        }
        for (e = e.child; e !== null;) {
            switch (t = e, t.tag) {
                case 0:
                case 11:
                case 15:
                    Ua(8, t, t.return), jc(t);
                    break;
                case 22:
                    a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, jc(t));
                    break;
                default:
                    jc(t)
            }
            e = e.sibling
        }
    }

    function xp(e, t) {
        for (; We !== null;) {
            var a = We;
            switch (a.tag) {
                case 0:
                case 11:
                case 15:
                    Ua(8, a, t);
                    break;
                case 23:
                case 22:
                    if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                        var s = a.memoizedState.cachePool.pool;
                        s != null && s.refCount++
                    }
                    break;
                case 24:
                    kl(a.memoizedState.cache)
            }
            if (s = a.child, s !== null) s.return = a, We = s;
            else e: for (a = e; We !== null;) {
                s = We;
                var c = s.sibling,
                    r = s.return;
                if (rp(s), s === a) {
                    We = null;
                    break e
                }
                if (c !== null) {
                    c.return = r, We = c;
                    break e
                }
                We = r
            }
        }
    }
    var o1 = {
            getCacheForType: function(e) {
                var t = at(Qe),
                    a = t.data.get(e);
                return a === void 0 && (a = e(), t.data.set(e, a)), a
            },
            cacheSignal: function() {
                return at(Qe).controller.signal
            }
        },
        u1 = typeof WeakMap == "function" ? WeakMap : Map,
        Ee = 0,
        Te = null,
        he = null,
        xe = 0,
        Ae = 0,
        St = null,
        Ba = !1,
        $s = !1,
        Fi = !1,
        ha = 0,
        Ye = 0,
        Pa = 0,
        vs = 0,
        $i = 0,
        wt = 0,
        Ws = 0,
        Wl = null,
        ft = null,
        Wi = !1,
        Nc = 0,
        yp = 0,
        Sc = 1 / 0,
        wc = null,
        qa = null,
        Ie = 0,
        Ya = null,
        el = null,
        ga = 0,
        eo = 0,
        to = null,
        vp = null,
        en = 0,
        ao = null;

    function Et() {
        return (Ee & 2) !== 0 && xe !== 0 ? xe & -xe : H.T !== null ? io() : zu()
    }

    function bp() {
        if (wt === 0)
            if ((xe & 536870912) === 0 || ve) {
                var e = Tn;
                Tn <<= 1, (Tn & 3932160) === 0 && (Tn = 262144), wt = e
            } else wt = 536870912;
        return e = jt.current, e !== null && (e.flags |= 32), wt
    }

    function pt(e, t, a) {
        (e === Te && (Ae === 2 || Ae === 9) || e.cancelPendingCommit !== null) && (tl(e, 0), Ga(e, xe, wt, !1)), jl(e, a), ((Ee & 2) === 0 || e !== Te) && (e === Te && ((Ee & 2) === 0 && (vs |= a), Ye === 4 && Ga(e, xe, wt, !1)), Kt(e))
    }

    function jp(e, t, a) {
        if ((Ee & 6) !== 0) throw Error(o(327));
        var s = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || bl(e, t),
            c = s ? p1(e, t) : lo(e, t, !0),
            r = s;
        do {
            if (c === 0) {
                $s && !s && Ga(e, t, 0, !1);
                break
            } else {
                if (a = e.current.alternate, r && !d1(a)) {
                    c = lo(e, t, !1), r = !1;
                    continue
                }
                if (c === 2) {
                    if (r = t, e.errorRecoveryDisabledLanes & r) var f = 0;
                    else f = e.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
                    if (f !== 0) {
                        t = f;
                        e: {
                            var g = e;c = Wl;
                            var N = g.current.memoizedState.isDehydrated;
                            if (N && (tl(g, f).flags |= 256), f = lo(g, f, !1), f !== 2) {
                                if (Fi && !N) {
                                    g.errorRecoveryDisabledLanes |= r, vs |= r, c = 4;
                                    break e
                                }
                                r = ft, ft = c, r !== null && (ft === null ? ft = r : ft.push.apply(ft, r))
                            }
                            c = f
                        }
                        if (r = !1, c !== 2) continue
                    }
                }
                if (c === 1) {
                    tl(e, 0), Ga(e, t, 0, !0);
                    break
                }
                e: {
                    switch (s = e, r = c, r) {
                        case 0:
                        case 1:
                            throw Error(o(345));
                        case 4:
                            if ((t & 4194048) !== t) break;
                        case 6:
                            Ga(s, t, wt, !Ba);
                            break e;
                        case 2:
                            ft = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(o(329))
                    }
                    if ((t & 62914560) === t && (c = Nc + 300 - gt(), 10 < c)) {
                        if (Ga(s, t, wt, !Ba), zn(s, 0, !0) !== 0) break e;
                        ga = t, s.timeoutHandle = $p(Np.bind(null, s, a, ft, wc, Wi, t, wt, vs, Ws, Ba, r, "Throttled", -0, 0), c);
                        break e
                    }
                    Np(s, a, ft, wc, Wi, t, wt, vs, Ws, Ba, r, null, -0, 0)
                }
            }
            break
        } while (!0);
        Kt(e)
    }

    function Np(e, t, a, s, c, r, f, g, N, T, L, q, _, k) {
        if (e.timeoutHandle = -1, q = t.subtreeFlags, q & 8192 || (q & 16785408) === 16785408) {
            q = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: ta
            }, mp(t, r, q);
            var F = (r & 62914560) === r ? Nc - gt() : (r & 4194048) === r ? yp - gt() : 0;
            if (F = I1(q, F), F !== null) {
                ga = r, e.cancelPendingCommit = F(Op.bind(null, e, t, r, a, s, c, f, g, N, L, q, null, _, k)), Ga(e, r, f, !T);
                return
            }
        }
        Op(e, t, r, a, s, c, f, g, N)
    }

    function d1(e) {
        for (var t = e;;) {
            var a = t.tag;
            if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
                for (var s = 0; s < a.length; s++) {
                    var c = a[s],
                        r = c.getSnapshot;
                    c = c.value;
                    try {
                        if (!vt(r(), c)) return !1
                    } catch {
                        return !1
                    }
                }
            if (a = t.child, t.subtreeFlags & 16384 && a !== null) a.return = t, t = a;
            else {
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function Ga(e, t, a, s) {
        t &= ~$i, t &= ~vs, e.suspendedLanes |= t, e.pingedLanes &= ~t, s && (e.warmLanes |= t), s = e.expirationTimes;
        for (var c = t; 0 < c;) {
            var r = 31 - yt(c),
                f = 1 << r;
            s[r] = -1, c &= ~f
        }
        a !== 0 && Ru(e, a, t)
    }

    function Ec() {
        return (Ee & 6) === 0 ? (tn(0), !1) : !0
    }

    function so() {
        if (he !== null) {
            if (Ae === 0) var e = he.return;
            else e = he, na = us = null, vi(e), Qs = null, Ll = 0, e = he;
            for (; e !== null;) Wf(e.alternate, e), e = e.return;
            he = null
        }
    }

    function tl(e, t) {
        var a = e.timeoutHandle;
        a !== -1 && (e.timeoutHandle = -1, R1(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), ga = 0, so(), Te = e, he = a = sa(e.current, null), xe = t, Ae = 0, St = null, Ba = !1, $s = bl(e, t), Fi = !1, Ws = wt = $i = vs = Pa = Ye = 0, ft = Wl = null, Wi = !1, (t & 8) !== 0 && (t |= t & 32);
        var s = e.entangledLanes;
        if (s !== 0)
            for (e = e.entanglements, s &= t; 0 < s;) {
                var c = 31 - yt(s),
                    r = 1 << c;
                t |= e[c], s &= ~r
            }
        return ha = t, Vn(), a
    }

    function Sp(e, t) {
        de = null, H.H = Ql, t === Xs || t === ec ? (t = Ud(), Ae = 3) : t === ri ? (t = Ud(), Ae = 4) : Ae = t === ki ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, St = t, he === null && (Ye = 1, mc(e, Dt(t, e.current)))
    }

    function wp() {
        var e = jt.current;
        return e === null ? !0 : (xe & 4194048) === xe ? _t === null : (xe & 62914560) === xe || (xe & 536870912) !== 0 ? e === _t : !1
    }

    function Ep() {
        var e = H.H;
        return H.H = Ql, e === null ? Ql : e
    }

    function Cp() {
        var e = H.A;
        return H.A = o1, e
    }

    function Cc() {
        Ye = 4, Ba || (xe & 4194048) !== xe && jt.current !== null || ($s = !0), (Pa & 134217727) === 0 && (vs & 134217727) === 0 || Te === null || Ga(Te, xe, wt, !1)
    }

    function lo(e, t, a) {
        var s = Ee;
        Ee |= 2;
        var c = Ep(),
            r = Cp();
        (Te !== e || xe !== t) && (wc = null, tl(e, t)), t = !1;
        var f = Ye;
        e: do try {
                if (Ae !== 0 && he !== null) {
                    var g = he,
                        N = St;
                    switch (Ae) {
                        case 8:
                            so(), f = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            jt.current === null && (t = !0);
                            var T = Ae;
                            if (Ae = 0, St = null, al(e, g, N, T), a && $s) {
                                f = 0;
                                break e
                            }
                            break;
                        default:
                            T = Ae, Ae = 0, St = null, al(e, g, N, T)
                    }
                }
                f1(), f = Ye;
                break
            } catch (L) {
                Sp(e, L)
            }
            while (!0);
            return t && e.shellSuspendCounter++, na = us = null, Ee = s, H.H = c, H.A = r, he === null && (Te = null, xe = 0, Vn()), f
    }

    function f1() {
        for (; he !== null;) Ap(he)
    }

    function p1(e, t) {
        var a = Ee;
        Ee |= 2;
        var s = Ep(),
            c = Cp();
        Te !== e || xe !== t ? (wc = null, Sc = gt() + 500, tl(e, t)) : $s = bl(e, t);
        e: do try {
                if (Ae !== 0 && he !== null) {
                    t = he;
                    var r = St;
                    t: switch (Ae) {
                        case 1:
                            Ae = 0, St = null, al(e, t, r, 1);
                            break;
                        case 2:
                        case 9:
                            if (Hd(r)) {
                                Ae = 0, St = null, Mp(t);
                                break
                            }
                            t = function() {
                                Ae !== 2 && Ae !== 9 || Te !== e || (Ae = 7), Kt(e)
                            }, r.then(t, t);
                            break e;
                        case 3:
                            Ae = 7;
                            break e;
                        case 4:
                            Ae = 5;
                            break e;
                        case 7:
                            Hd(r) ? (Ae = 0, St = null, Mp(t)) : (Ae = 0, St = null, al(e, t, r, 7));
                            break;
                        case 5:
                            var f = null;
                            switch (he.tag) {
                                case 26:
                                    f = he.memoizedState;
                                case 5:
                                case 27:
                                    var g = he;
                                    if (f ? pm(f) : g.stateNode.complete) {
                                        Ae = 0, St = null;
                                        var N = g.sibling;
                                        if (N !== null) he = N;
                                        else {
                                            var T = g.return;
                                            T !== null ? (he = T, Ac(T)) : he = null
                                        }
                                        break t
                                    }
                            }
                            Ae = 0, St = null, al(e, t, r, 5);
                            break;
                        case 6:
                            Ae = 0, St = null, al(e, t, r, 6);
                            break;
                        case 8:
                            so(), Ye = 6;
                            break e;
                        default:
                            throw Error(o(462))
                    }
                }
                m1();
                break
            } catch (L) {
                Sp(e, L)
            }
            while (!0);
            return na = us = null, H.H = s, H.A = c, Ee = a, he !== null ? 0 : (Te = null, xe = 0, Vn(), Ye)
    }

    function m1() {
        for (; he !== null && !Lg();) Ap(he)
    }

    function Ap(e) {
        var t = Ff(e.alternate, e, ha);
        e.memoizedProps = e.pendingProps, t === null ? Ac(e) : he = t
    }

    function Mp(e) {
        var t = e,
            a = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = Qf(a, t, t.pendingProps, t.type, void 0, xe);
                break;
            case 11:
                t = Qf(a, t, t.pendingProps, t.type.render, t.ref, xe);
                break;
            case 5:
                vi(t);
            default:
                Wf(a, t), t = he = Ed(t, ha), t = Ff(a, t, ha)
        }
        e.memoizedProps = e.pendingProps, t === null ? Ac(e) : he = t
    }

    function al(e, t, a, s) {
        na = us = null, vi(t), Qs = null, Ll = 0;
        var c = t.return;
        try {
            if (a1(e, c, t, a, xe)) {
                Ye = 1, mc(e, Dt(a, e.current)), he = null;
                return
            }
        } catch (r) {
            if (c !== null) throw he = c, r;
            Ye = 1, mc(e, Dt(a, e.current)), he = null;
            return
        }
        t.flags & 32768 ? (ve || s === 1 ? e = !0 : $s || (xe & 536870912) !== 0 ? e = !1 : (Ba = e = !0, (s === 2 || s === 9 || s === 3 || s === 6) && (s = jt.current, s !== null && s.tag === 13 && (s.flags |= 16384))), Dp(t, e)) : Ac(t)
    }

    function Ac(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                Dp(t, Ba);
                return
            }
            e = t.return;
            var a = n1(t.alternate, t, ha);
            if (a !== null) {
                he = a;
                return
            }
            if (t = t.sibling, t !== null) {
                he = t;
                return
            }
            he = t = e
        } while (t !== null);
        Ye === 0 && (Ye = 5)
    }

    function Dp(e, t) {
        do {
            var a = c1(e.alternate, e);
            if (a !== null) {
                a.flags &= 32767, he = a;
                return
            }
            if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
                he = e;
                return
            }
            he = e = a
        } while (e !== null);
        Ye = 6, he = null
    }

    function Op(e, t, a, s, c, r, f, g, N) {
        e.cancelPendingCommit = null;
        do Mc(); while (Ie !== 0);
        if ((Ee & 6) !== 0) throw Error(o(327));
        if (t !== null) {
            if (t === e.current) throw Error(o(177));
            if (r = t.lanes | t.childLanes, r |= Vr, Zg(e, a, r, f, g, N), e === Te && (he = Te = null, xe = 0), el = t, Ya = e, ga = a, eo = r, to = c, vp = s, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, y1(On, function() {
                    return kp(), null
                })) : (e.callbackNode = null, e.callbackPriority = 0), s = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || s) {
                s = H.T, H.T = null, c = K.p, K.p = 2, f = Ee, Ee |= 4;
                try {
                    r1(e, t, a)
                } finally {
                    Ee = f, K.p = c, H.T = s
                }
            }
            Ie = 1, Rp(), Tp(), _p()
        }
    }

    function Rp() {
        if (Ie === 1) {
            Ie = 0;
            var e = Ya,
                t = el,
                a = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || a) {
                a = H.T, H.T = null;
                var s = K.p;
                K.p = 2;
                var c = Ee;
                Ee |= 4;
                try {
                    dp(t, e);
                    var r = xo,
                        f = gd(e.containerInfo),
                        g = r.focusedElem,
                        N = r.selectionRange;
                    if (f !== g && g && g.ownerDocument && hd(g.ownerDocument.documentElement, g)) {
                        if (N !== null && qr(g)) {
                            var T = N.start,
                                L = N.end;
                            if (L === void 0 && (L = T), "selectionStart" in g) g.selectionStart = T, g.selectionEnd = Math.min(L, g.value.length);
                            else {
                                var q = g.ownerDocument || document,
                                    _ = q && q.defaultView || window;
                                if (_.getSelection) {
                                    var k = _.getSelection(),
                                        F = g.textContent.length,
                                        le = Math.min(N.start, F),
                                        Re = N.end === void 0 ? le : Math.min(N.end, F);
                                    !k.extend && le > Re && (f = Re, Re = le, le = f);
                                    var D = md(g, le),
                                        w = md(g, Re);
                                    if (D && w && (k.rangeCount !== 1 || k.anchorNode !== D.node || k.anchorOffset !== D.offset || k.focusNode !== w.node || k.focusOffset !== w.offset)) {
                                        var R = q.createRange();
                                        R.setStart(D.node, D.offset), k.removeAllRanges(), le > Re ? (k.addRange(R), k.extend(w.node, w.offset)) : (R.setEnd(w.node, w.offset), k.addRange(R))
                                    }
                                }
                            }
                        }
                        for (q = [], k = g; k = k.parentNode;) k.nodeType === 1 && q.push({
                            element: k,
                            left: k.scrollLeft,
                            top: k.scrollTop
                        });
                        for (typeof g.focus == "function" && g.focus(), g = 0; g < q.length; g++) {
                            var B = q[g];
                            B.element.scrollLeft = B.left, B.element.scrollTop = B.top
                        }
                    }
                    Pc = !!go, xo = go = null
                } finally {
                    Ee = c, K.p = s, H.T = a
                }
            }
            e.current = t, Ie = 2
        }
    }

    function Tp() {
        if (Ie === 2) {
            Ie = 0;
            var e = Ya,
                t = el,
                a = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || a) {
                a = H.T, H.T = null;
                var s = K.p;
                K.p = 2;
                var c = Ee;
                Ee |= 4;
                try {
                    cp(e, t.alternate, t)
                } finally {
                    Ee = c, K.p = s, H.T = a
                }
            }
            Ie = 3
        }
    }

    function _p() {
        if (Ie === 4 || Ie === 3) {
            Ie = 0, Ug();
            var e = Ya,
                t = el,
                a = ga,
                s = vp;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ie = 5 : (Ie = 0, el = Ya = null, zp(e, e.pendingLanes));
            var c = e.pendingLanes;
            if (c === 0 && (qa = null), Nr(a), t = t.stateNode, xt && typeof xt.onCommitFiberRoot == "function") try {
                xt.onCommitFiberRoot(vl, t, void 0, (t.current.flags & 128) === 128)
            } catch {}
            if (s !== null) {
                t = H.T, c = K.p, K.p = 2, H.T = null;
                try {
                    for (var r = e.onRecoverableError, f = 0; f < s.length; f++) {
                        var g = s[f];
                        r(g.value, {
                            componentStack: g.stack
                        })
                    }
                } finally {
                    H.T = t, K.p = c
                }
            }(ga & 3) !== 0 && Mc(), Kt(e), c = e.pendingLanes, (a & 261930) !== 0 && (c & 42) !== 0 ? e === ao ? en++ : (en = 0, ao = e) : en = 0, tn(0)
        }
    }

    function zp(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, kl(t)))
    }

    function Mc() {
        return Rp(), Tp(), _p(), kp()
    }

    function kp() {
        if (Ie !== 5) return !1;
        var e = Ya,
            t = eo;
        eo = 0;
        var a = Nr(ga),
            s = H.T,
            c = K.p;
        try {
            K.p = 32 > a ? 32 : a, H.T = null, a = to, to = null;
            var r = Ya,
                f = ga;
            if (Ie = 0, el = Ya = null, ga = 0, (Ee & 6) !== 0) throw Error(o(331));
            var g = Ee;
            if (Ee |= 4, gp(r.current), pp(r, r.current, f, a), Ee = g, tn(0, !1), xt && typeof xt.onPostCommitFiberRoot == "function") try {
                xt.onPostCommitFiberRoot(vl, r)
            } catch {}
            return !0
        } finally {
            K.p = c, H.T = s, zp(e, t)
        }
    }

    function Hp(e, t, a) {
        t = Dt(a, t), t = zi(e.stateNode, t, 2), e = ka(e, t, 2), e !== null && (jl(e, 2), Kt(e))
    }

    function Me(e, t, a) {
        if (e.tag === 3) Hp(e, e, a);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    Hp(t, e, a);
                    break
                } else if (t.tag === 1) {
                    var s = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (qa === null || !qa.has(s))) {
                        e = Dt(a, e), a = Lf(2), s = ka(t, a, 2), s !== null && (Uf(a, s, t, e), jl(s, 2), Kt(s));
                        break
                    }
                }
                t = t.return
            }
    }

    function no(e, t, a) {
        var s = e.pingCache;
        if (s === null) {
            s = e.pingCache = new u1;
            var c = new Set;
            s.set(t, c)
        } else c = s.get(t), c === void 0 && (c = new Set, s.set(t, c));
        c.has(a) || (Fi = !0, c.add(a), e = h1.bind(null, e, t, a), t.then(e, e))
    }

    function h1(e, t, a) {
        var s = e.pingCache;
        s !== null && s.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Te === e && (xe & a) === a && (Ye === 4 || Ye === 3 && (xe & 62914560) === xe && 300 > gt() - Nc ? (Ee & 2) === 0 && tl(e, 0) : $i |= a, Ws === xe && (Ws = 0)), Kt(e)
    }

    function Lp(e, t) {
        t === 0 && (t = Ou()), e = rs(e, t), e !== null && (jl(e, t), Kt(e))
    }

    function g1(e) {
        var t = e.memoizedState,
            a = 0;
        t !== null && (a = t.retryLane), Lp(e, a)
    }

    function x1(e, t) {
        var a = 0;
        switch (e.tag) {
            case 31:
            case 13:
                var s = e.stateNode,
                    c = e.memoizedState;
                c !== null && (a = c.retryLane);
                break;
            case 19:
                s = e.stateNode;
                break;
            case 22:
                s = e.stateNode._retryCache;
                break;
            default:
                throw Error(o(314))
        }
        s !== null && s.delete(t), Lp(e, a)
    }

    function y1(e, t) {
        return yr(e, t)
    }
    var Dc = null,
        sl = null,
        co = !1,
        Oc = !1,
        ro = !1,
        Xa = 0;

    function Kt(e) {
        e !== sl && e.next === null && (sl === null ? Dc = sl = e : sl = sl.next = e), Oc = !0, co || (co = !0, b1())
    }

    function tn(e, t) {
        if (!ro && Oc) {
            ro = !0;
            do
                for (var a = !1, s = Dc; s !== null;) {
                    if (e !== 0) {
                        var c = s.pendingLanes;
                        if (c === 0) var r = 0;
                        else {
                            var f = s.suspendedLanes,
                                g = s.pingedLanes;
                            r = (1 << 31 - yt(42 | e) + 1) - 1, r &= c & ~(f & ~g), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0
                        }
                        r !== 0 && (a = !0, qp(s, r))
                    } else r = xe, r = zn(s, s === Te ? r : 0, s.cancelPendingCommit !== null || s.timeoutHandle !== -1), (r & 3) === 0 || bl(s, r) || (a = !0, qp(s, r));
                    s = s.next
                }
            while (a);
            ro = !1
        }
    }

    function v1() {
        Up()
    }

    function Up() {
        Oc = co = !1;
        var e = 0;
        Xa !== 0 && O1() && (e = Xa);
        for (var t = gt(), a = null, s = Dc; s !== null;) {
            var c = s.next,
                r = Bp(s, t);
            r === 0 ? (s.next = null, a === null ? Dc = c : a.next = c, c === null && (sl = a)) : (a = s, (e !== 0 || (r & 3) !== 0) && (Oc = !0)), s = c
        }
        Ie !== 0 && Ie !== 5 || tn(e), Xa !== 0 && (Xa = 0)
    }

    function Bp(e, t) {
        for (var a = e.suspendedLanes, s = e.pingedLanes, c = e.expirationTimes, r = e.pendingLanes & -62914561; 0 < r;) {
            var f = 31 - yt(r),
                g = 1 << f,
                N = c[f];
            N === -1 ? ((g & a) === 0 || (g & s) !== 0) && (c[f] = Vg(g, t)) : N <= t && (e.expiredLanes |= g), r &= ~g
        }
        if (t = Te, a = xe, a = zn(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), s = e.callbackNode, a === 0 || e === t && (Ae === 2 || Ae === 9) || e.cancelPendingCommit !== null) return s !== null && s !== null && vr(s), e.callbackNode = null, e.callbackPriority = 0;
        if ((a & 3) === 0 || bl(e, a)) {
            if (t = a & -a, t === e.callbackPriority) return t;
            switch (s !== null && vr(s), Nr(a)) {
                case 2:
                case 8:
                    a = Mu;
                    break;
                case 32:
                    a = On;
                    break;
                case 268435456:
                    a = Du;
                    break;
                default:
                    a = On
            }
            return s = Pp.bind(null, e), a = yr(a, s), e.callbackPriority = t, e.callbackNode = a, t
        }
        return s !== null && s !== null && vr(s), e.callbackPriority = 2, e.callbackNode = null, 2
    }

    function Pp(e, t) {
        if (Ie !== 0 && Ie !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
        var a = e.callbackNode;
        if (Mc() && e.callbackNode !== a) return null;
        var s = xe;
        return s = zn(e, e === Te ? s : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), s === 0 ? null : (jp(e, s, t), Bp(e, gt()), e.callbackNode != null && e.callbackNode === a ? Pp.bind(null, e) : null)
    }

    function qp(e, t) {
        if (Mc()) return null;
        jp(e, t, !0)
    }

    function b1() {
        T1(function() {
            (Ee & 6) !== 0 ? yr(Au, v1) : Up()
        })
    }

    function io() {
        if (Xa === 0) {
            var e = Ys;
            e === 0 && (e = Rn, Rn <<= 1, (Rn & 261888) === 0 && (Rn = 256)), Xa = e
        }
        return Xa
    }

    function Yp(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Un("" + e)
    }

    function Gp(e, t) {
        var a = t.ownerDocument.createElement("input");
        return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e
    }

    function j1(e, t, a, s, c) {
        if (t === "submit" && a && a.stateNode === c) {
            var r = Yp((c[rt] || null).action),
                f = s.submitter;
            f && (t = (t = f[rt] || null) ? Yp(t.formAction) : f.getAttribute("formAction"), t !== null && (r = t, f = null));
            var g = new Yn("action", "action", null, s, c);
            e.push({
                event: g,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (s.defaultPrevented) {
                            if (Xa !== 0) {
                                var N = f ? Gp(c, f) : new FormData(c);
                                Mi(a, {
                                    pending: !0,
                                    data: N,
                                    method: c.method,
                                    action: r
                                }, null, N)
                            }
                        } else typeof r == "function" && (g.preventDefault(), N = f ? Gp(c, f) : new FormData(c), Mi(a, {
                            pending: !0,
                            data: N,
                            method: c.method,
                            action: r
                        }, r, N))
                    },
                    currentTarget: c
                }]
            })
        }
    }
    for (var oo = 0; oo < Qr.length; oo++) {
        var uo = Qr[oo],
            N1 = uo.toLowerCase(),
            S1 = uo[0].toUpperCase() + uo.slice(1);
        Lt(N1, "on" + S1)
    }
    Lt(vd, "onAnimationEnd"), Lt(bd, "onAnimationIteration"), Lt(jd, "onAnimationStart"), Lt("dblclick", "onDoubleClick"), Lt("focusin", "onFocus"), Lt("focusout", "onBlur"), Lt(Bx, "onTransitionRun"), Lt(Px, "onTransitionStart"), Lt(qx, "onTransitionCancel"), Lt(Nd, "onTransitionEnd"), Ms("onMouseEnter", ["mouseout", "mouseover"]), Ms("onMouseLeave", ["mouseout", "mouseover"]), Ms("onPointerEnter", ["pointerout", "pointerover"]), Ms("onPointerLeave", ["pointerout", "pointerover"]), ss("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ss("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ss("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ss("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ss("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ss("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var an = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        w1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(an));

    function Xp(e, t) {
        t = (t & 4) !== 0;
        for (var a = 0; a < e.length; a++) {
            var s = e[a],
                c = s.event;
            s = s.listeners;
            e: {
                var r = void 0;
                if (t)
                    for (var f = s.length - 1; 0 <= f; f--) {
                        var g = s[f],
                            N = g.instance,
                            T = g.currentTarget;
                        if (g = g.listener, N !== r && c.isPropagationStopped()) break e;
                        r = g, c.currentTarget = T;
                        try {
                            r(c)
                        } catch (L) {
                            Qn(L)
                        }
                        c.currentTarget = null, r = N
                    } else
                        for (f = 0; f < s.length; f++) {
                            if (g = s[f], N = g.instance, T = g.currentTarget, g = g.listener, N !== r && c.isPropagationStopped()) break e;
                            r = g, c.currentTarget = T;
                            try {
                                r(c)
                            } catch (L) {
                                Qn(L)
                            }
                            c.currentTarget = null, r = N
                        }
            }
        }
    }

    function ge(e, t) {
        var a = t[Sr];
        a === void 0 && (a = t[Sr] = new Set);
        var s = e + "__bubble";
        a.has(s) || (Qp(t, e, 2, !1), a.add(s))
    }

    function fo(e, t, a) {
        var s = 0;
        t && (s |= 4), Qp(a, e, s, t)
    }
    var Rc = "_reactListening" + Math.random().toString(36).slice(2);

    function po(e) {
        if (!e[Rc]) {
            e[Rc] = !0, Lu.forEach(function(a) {
                a !== "selectionchange" && (w1.has(a) || fo(a, !1, e), fo(a, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Rc] || (t[Rc] = !0, fo("selectionchange", !1, t))
        }
    }

    function Qp(e, t, a, s) {
        switch (bm(t)) {
            case 2:
                var c = $1;
                break;
            case 8:
                c = W1;
                break;
            default:
                c = Mo
        }
        a = c.bind(null, t, a, e), c = void 0, !Tr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (c = !0), s ? c !== void 0 ? e.addEventListener(t, a, {
            capture: !0,
            passive: c
        }) : e.addEventListener(t, a, !0) : c !== void 0 ? e.addEventListener(t, a, {
            passive: c
        }) : e.addEventListener(t, a, !1)
    }

    function mo(e, t, a, s, c) {
        var r = s;
        if ((t & 1) === 0 && (t & 2) === 0 && s !== null) e: for (;;) {
            if (s === null) return;
            var f = s.tag;
            if (f === 3 || f === 4) {
                var g = s.stateNode.containerInfo;
                if (g === c) break;
                if (f === 4)
                    for (f = s.return; f !== null;) {
                        var N = f.tag;
                        if ((N === 3 || N === 4) && f.stateNode.containerInfo === c) return;
                        f = f.return
                    }
                for (; g !== null;) {
                    if (f = Es(g), f === null) return;
                    if (N = f.tag, N === 5 || N === 6 || N === 26 || N === 27) {
                        s = r = f;
                        continue e
                    }
                    g = g.parentNode
                }
            }
            s = s.return
        }
        Iu(function() {
            var T = r,
                L = Or(a),
                q = [];
            e: {
                var _ = Sd.get(e);
                if (_ !== void 0) {
                    var k = Yn,
                        F = e;
                    switch (e) {
                        case "keypress":
                            if (Pn(a) === 0) break e;
                        case "keydown":
                        case "keyup":
                            k = xx;
                            break;
                        case "focusin":
                            F = "focus", k = Hr;
                            break;
                        case "focusout":
                            F = "blur", k = Hr;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            k = Hr;
                            break;
                        case "click":
                            if (a.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            k = $u;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            k = nx;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            k = bx;
                            break;
                        case vd:
                        case bd:
                        case jd:
                            k = ix;
                            break;
                        case Nd:
                            k = Nx;
                            break;
                        case "scroll":
                        case "scrollend":
                            k = sx;
                            break;
                        case "wheel":
                            k = wx;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            k = ux;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            k = ed;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            k = Cx
                    }
                    var le = (t & 4) !== 0,
                        Re = !le && (e === "scroll" || e === "scrollend"),
                        D = le ? _ !== null ? _ + "Capture" : null : _;
                    le = [];
                    for (var w = T, R; w !== null;) {
                        var B = w;
                        if (R = B.stateNode, B = B.tag, B !== 5 && B !== 26 && B !== 27 || R === null || D === null || (B = wl(w, D), B != null && le.push(sn(w, B, R))), Re) break;
                        w = w.return
                    }
                    0 < le.length && (_ = new k(_, F, null, a, L), q.push({
                        event: _,
                        listeners: le
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (_ = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", _ && a !== Dr && (F = a.relatedTarget || a.fromElement) && (Es(F) || F[ws])) break e;
                    if ((k || _) && (_ = L.window === L ? L : (_ = L.ownerDocument) ? _.defaultView || _.parentWindow : window, k ? (F = a.relatedTarget || a.toElement, k = T, F = F ? Es(F) : null, F !== null && (Re = p(F), le = F.tag, F !== Re || le !== 5 && le !== 27 && le !== 6) && (F = null)) : (k = null, F = T), k !== F)) {
                        if (le = $u, B = "onMouseLeave", D = "onMouseEnter", w = "mouse", (e === "pointerout" || e === "pointerover") && (le = ed, B = "onPointerLeave", D = "onPointerEnter", w = "pointer"), Re = k == null ? _ : Sl(k), R = F == null ? _ : Sl(F), _ = new le(B, w + "leave", k, a, L), _.target = Re, _.relatedTarget = R, B = null, Es(L) === T && (le = new le(D, w + "enter", F, a, L), le.target = R, le.relatedTarget = Re, B = le), Re = B, k && F) t: {
                            for (le = E1, D = k, w = F, R = 0, B = D; B; B = le(B)) R++;B = 0;
                            for (var se = w; se; se = le(se)) B++;
                            for (; 0 < R - B;) D = le(D),
                            R--;
                            for (; 0 < B - R;) w = le(w),
                            B--;
                            for (; R--;) {
                                if (D === w || w !== null && D === w.alternate) {
                                    le = D;
                                    break t
                                }
                                D = le(D), w = le(w)
                            }
                            le = null
                        }
                        else le = null;
                        k !== null && Vp(q, _, k, le, !1), F !== null && Re !== null && Vp(q, Re, F, le, !0)
                    }
                }
                e: {
                    if (_ = T ? Sl(T) : window, k = _.nodeName && _.nodeName.toLowerCase(), k === "select" || k === "input" && _.type === "file") var Ne = id;
                    else if (cd(_))
                        if (od) Ne = Hx;
                        else {
                            Ne = zx;
                            var te = _x
                        }
                    else k = _.nodeName,
                    !k || k.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? T && Mr(T.elementType) && (Ne = id) : Ne = kx;
                    if (Ne && (Ne = Ne(e, T))) {
                        rd(q, Ne, a, L);
                        break e
                    }
                    te && te(e, _, T),
                    e === "focusout" && T && _.type === "number" && T.memoizedProps.value != null && Ar(_, "number", _.value)
                }
                switch (te = T ? Sl(T) : window, e) {
                    case "focusin":
                        (cd(te) || te.contentEditable === "true") && (zs = te, Yr = T, Tl = null);
                        break;
                    case "focusout":
                        Tl = Yr = zs = null;
                        break;
                    case "mousedown":
                        Gr = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Gr = !1, xd(q, a, L);
                        break;
                    case "selectionchange":
                        if (Ux) break;
                    case "keydown":
                    case "keyup":
                        xd(q, a, L)
                }
                var fe;
                if (Ur) e: {
                    switch (e) {
                        case "compositionstart":
                            var ye = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ye = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ye = "onCompositionUpdate";
                            break e
                    }
                    ye = void 0
                }
                else _s ? ld(e, a) && (ye = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (ye = "onCompositionStart");ye && (td && a.locale !== "ko" && (_s || ye !== "onCompositionStart" ? ye === "onCompositionEnd" && _s && (fe = Ju()) : (Ma = L, _r = "value" in Ma ? Ma.value : Ma.textContent, _s = !0)), te = Tc(T, ye), 0 < te.length && (ye = new Wu(ye, e, null, a, L), q.push({
                    event: ye,
                    listeners: te
                }), fe ? ye.data = fe : (fe = nd(a), fe !== null && (ye.data = fe)))),
                (fe = Mx ? Dx(e, a) : Ox(e, a)) && (ye = Tc(T, "onBeforeInput"), 0 < ye.length && (te = new Wu("onBeforeInput", "beforeinput", null, a, L), q.push({
                    event: te,
                    listeners: ye
                }), te.data = fe)),
                j1(q, e, T, a, L)
            }
            Xp(q, t)
        })
    }

    function sn(e, t, a) {
        return {
            instance: e,
            listener: t,
            currentTarget: a
        }
    }

    function Tc(e, t) {
        for (var a = t + "Capture", s = []; e !== null;) {
            var c = e,
                r = c.stateNode;
            if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || r === null || (c = wl(e, a), c != null && s.unshift(sn(e, c, r)), c = wl(e, t), c != null && s.push(sn(e, c, r))), e.tag === 3) return s;
            e = e.return
        }
        return []
    }

    function E1(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }

    function Vp(e, t, a, s, c) {
        for (var r = t._reactName, f = []; a !== null && a !== s;) {
            var g = a,
                N = g.alternate,
                T = g.stateNode;
            if (g = g.tag, N !== null && N === s) break;
            g !== 5 && g !== 26 && g !== 27 || T === null || (N = T, c ? (T = wl(a, r), T != null && f.unshift(sn(a, T, N))) : c || (T = wl(a, r), T != null && f.push(sn(a, T, N)))), a = a.return
        }
        f.length !== 0 && e.push({
            event: t,
            listeners: f
        })
    }
    var C1 = /\r\n?/g,
        A1 = /\u0000|\uFFFD/g;

    function Zp(e) {
        return (typeof e == "string" ? e : "" + e).replace(C1, `
`).replace(A1, "")
    }

    function Kp(e, t) {
        return t = Zp(t), Zp(e) === t
    }

    function Oe(e, t, a, s, c, r) {
        switch (a) {
            case "children":
                typeof s == "string" ? t === "body" || t === "textarea" && s === "" || Os(e, s) : (typeof s == "number" || typeof s == "bigint") && t !== "body" && Os(e, "" + s);
                break;
            case "className":
                Hn(e, "class", s);
                break;
            case "tabIndex":
                Hn(e, "tabindex", s);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Hn(e, a, s);
                break;
            case "style":
                Zu(e, s, r);
                break;
            case "data":
                if (t !== "object") {
                    Hn(e, "data", s);
                    break
                }
            case "src":
            case "href":
                if (s === "" && (t !== "a" || a !== "href")) {
                    e.removeAttribute(a);
                    break
                }
                if (s == null || typeof s == "function" || typeof s == "symbol" || typeof s == "boolean") {
                    e.removeAttribute(a);
                    break
                }
                s = Un("" + s), e.setAttribute(a, s);
                break;
            case "action":
            case "formAction":
                if (typeof s == "function") {
                    e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof r == "function" && (a === "formAction" ? (t !== "input" && Oe(e, t, "name", c.name, c, null), Oe(e, t, "formEncType", c.formEncType, c, null), Oe(e, t, "formMethod", c.formMethod, c, null), Oe(e, t, "formTarget", c.formTarget, c, null)) : (Oe(e, t, "encType", c.encType, c, null), Oe(e, t, "method", c.method, c, null), Oe(e, t, "target", c.target, c, null)));
                if (s == null || typeof s == "symbol" || typeof s == "boolean") {
                    e.removeAttribute(a);
                    break
                }
                s = Un("" + s), e.setAttribute(a, s);
                break;
            case "onClick":
                s != null && (e.onclick = ta);
                break;
            case "onScroll":
                s != null && ge("scroll", e);
                break;
            case "onScrollEnd":
                s != null && ge("scrollend", e);
                break;
            case "dangerouslySetInnerHTML":
                if (s != null) {
                    if (typeof s != "object" || !("__html" in s)) throw Error(o(61));
                    if (a = s.__html, a != null) {
                        if (c.children != null) throw Error(o(60));
                        e.innerHTML = a
                    }
                }
                break;
            case "multiple":
                e.multiple = s && typeof s != "function" && typeof s != "symbol";
                break;
            case "muted":
                e.muted = s && typeof s != "function" && typeof s != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (s == null || typeof s == "function" || typeof s == "boolean" || typeof s == "symbol") {
                    e.removeAttribute("xlink:href");
                    break
                }
                a = Un("" + s), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                s != null && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, "" + s) : e.removeAttribute(a);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                s && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
                break;
            case "capture":
            case "download":
                s === !0 ? e.setAttribute(a, "") : s !== !1 && s != null && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, s) : e.removeAttribute(a);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                s != null && typeof s != "function" && typeof s != "symbol" && !isNaN(s) && 1 <= s ? e.setAttribute(a, s) : e.removeAttribute(a);
                break;
            case "rowSpan":
            case "start":
                s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s) ? e.removeAttribute(a) : e.setAttribute(a, s);
                break;
            case "popover":
                ge("beforetoggle", e), ge("toggle", e), kn(e, "popover", s);
                break;
            case "xlinkActuate":
                ea(e, "http://www.w3.org/1999/xlink", "xlink:actuate", s);
                break;
            case "xlinkArcrole":
                ea(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", s);
                break;
            case "xlinkRole":
                ea(e, "http://www.w3.org/1999/xlink", "xlink:role", s);
                break;
            case "xlinkShow":
                ea(e, "http://www.w3.org/1999/xlink", "xlink:show", s);
                break;
            case "xlinkTitle":
                ea(e, "http://www.w3.org/1999/xlink", "xlink:title", s);
                break;
            case "xlinkType":
                ea(e, "http://www.w3.org/1999/xlink", "xlink:type", s);
                break;
            case "xmlBase":
                ea(e, "http://www.w3.org/XML/1998/namespace", "xml:base", s);
                break;
            case "xmlLang":
                ea(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", s);
                break;
            case "xmlSpace":
                ea(e, "http://www.w3.org/XML/1998/namespace", "xml:space", s);
                break;
            case "is":
                kn(e, "is", s);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = tx.get(a) || a, kn(e, a, s))
        }
    }

    function ho(e, t, a, s, c, r) {
        switch (a) {
            case "style":
                Zu(e, s, r);
                break;
            case "dangerouslySetInnerHTML":
                if (s != null) {
                    if (typeof s != "object" || !("__html" in s)) throw Error(o(61));
                    if (a = s.__html, a != null) {
                        if (c.children != null) throw Error(o(60));
                        e.innerHTML = a
                    }
                }
                break;
            case "children":
                typeof s == "string" ? Os(e, s) : (typeof s == "number" || typeof s == "bigint") && Os(e, "" + s);
                break;
            case "onScroll":
                s != null && ge("scroll", e);
                break;
            case "onScrollEnd":
                s != null && ge("scrollend", e);
                break;
            case "onClick":
                s != null && (e.onclick = ta);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!Uu.hasOwnProperty(a)) e: {
                    if (a[0] === "o" && a[1] === "n" && (c = a.endsWith("Capture"), t = a.slice(2, c ? a.length - 7 : void 0), r = e[rt] || null, r = r != null ? r[a] : null, typeof r == "function" && e.removeEventListener(t, r, c), typeof s == "function")) {
                        typeof r != "function" && r !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, s, c);
                        break e
                    }
                    a in e ? e[a] = s : s === !0 ? e.setAttribute(a, "") : kn(e, a, s)
                }
        }
    }

    function lt(e, t, a) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                ge("error", e), ge("load", e);
                var s = !1,
                    c = !1,
                    r;
                for (r in a)
                    if (a.hasOwnProperty(r)) {
                        var f = a[r];
                        if (f != null) switch (r) {
                            case "src":
                                s = !0;
                                break;
                            case "srcSet":
                                c = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(o(137, t));
                            default:
                                Oe(e, t, r, f, a, null)
                        }
                    } c && Oe(e, t, "srcSet", a.srcSet, a, null), s && Oe(e, t, "src", a.src, a, null);
                return;
            case "input":
                ge("invalid", e);
                var g = r = f = c = null,
                    N = null,
                    T = null;
                for (s in a)
                    if (a.hasOwnProperty(s)) {
                        var L = a[s];
                        if (L != null) switch (s) {
                            case "name":
                                c = L;
                                break;
                            case "type":
                                f = L;
                                break;
                            case "checked":
                                N = L;
                                break;
                            case "defaultChecked":
                                T = L;
                                break;
                            case "value":
                                r = L;
                                break;
                            case "defaultValue":
                                g = L;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (L != null) throw Error(o(137, t));
                                break;
                            default:
                                Oe(e, t, s, L, a, null)
                        }
                    } Gu(e, r, g, N, T, f, c, !1);
                return;
            case "select":
                ge("invalid", e), s = f = r = null;
                for (c in a)
                    if (a.hasOwnProperty(c) && (g = a[c], g != null)) switch (c) {
                        case "value":
                            r = g;
                            break;
                        case "defaultValue":
                            f = g;
                            break;
                        case "multiple":
                            s = g;
                        default:
                            Oe(e, t, c, g, a, null)
                    }
                t = r, a = f, e.multiple = !!s, t != null ? Ds(e, !!s, t, !1) : a != null && Ds(e, !!s, a, !0);
                return;
            case "textarea":
                ge("invalid", e), r = c = s = null;
                for (f in a)
                    if (a.hasOwnProperty(f) && (g = a[f], g != null)) switch (f) {
                        case "value":
                            s = g;
                            break;
                        case "defaultValue":
                            c = g;
                            break;
                        case "children":
                            r = g;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (g != null) throw Error(o(91));
                            break;
                        default:
                            Oe(e, t, f, g, a, null)
                    }
                Qu(e, s, c, r);
                return;
            case "option":
                for (N in a) a.hasOwnProperty(N) && (s = a[N], s != null) && (N === "selected" ? e.selected = s && typeof s != "function" && typeof s != "symbol" : Oe(e, t, N, s, a, null));
                return;
            case "dialog":
                ge("beforetoggle", e), ge("toggle", e), ge("cancel", e), ge("close", e);
                break;
            case "iframe":
            case "object":
                ge("load", e);
                break;
            case "video":
            case "audio":
                for (s = 0; s < an.length; s++) ge(an[s], e);
                break;
            case "image":
                ge("error", e), ge("load", e);
                break;
            case "details":
                ge("toggle", e);
                break;
            case "embed":
            case "source":
            case "link":
                ge("error", e), ge("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (T in a)
                    if (a.hasOwnProperty(T) && (s = a[T], s != null)) switch (T) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, t));
                        default:
                            Oe(e, t, T, s, a, null)
                    }
                return;
            default:
                if (Mr(t)) {
                    for (L in a) a.hasOwnProperty(L) && (s = a[L], s !== void 0 && ho(e, t, L, s, a, void 0));
                    return
                }
        }
        for (g in a) a.hasOwnProperty(g) && (s = a[g], s != null && Oe(e, t, g, s, a, null))
    }

    function M1(e, t, a, s) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var c = null,
                    r = null,
                    f = null,
                    g = null,
                    N = null,
                    T = null,
                    L = null;
                for (k in a) {
                    var q = a[k];
                    if (a.hasOwnProperty(k) && q != null) switch (k) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            N = q;
                        default:
                            s.hasOwnProperty(k) || Oe(e, t, k, null, s, q)
                    }
                }
                for (var _ in s) {
                    var k = s[_];
                    if (q = a[_], s.hasOwnProperty(_) && (k != null || q != null)) switch (_) {
                        case "type":
                            r = k;
                            break;
                        case "name":
                            c = k;
                            break;
                        case "checked":
                            T = k;
                            break;
                        case "defaultChecked":
                            L = k;
                            break;
                        case "value":
                            f = k;
                            break;
                        case "defaultValue":
                            g = k;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (k != null) throw Error(o(137, t));
                            break;
                        default:
                            k !== q && Oe(e, t, _, k, s, q)
                    }
                }
                Cr(e, f, g, N, T, L, r, c);
                return;
            case "select":
                k = f = g = _ = null;
                for (r in a)
                    if (N = a[r], a.hasOwnProperty(r) && N != null) switch (r) {
                        case "value":
                            break;
                        case "multiple":
                            k = N;
                        default:
                            s.hasOwnProperty(r) || Oe(e, t, r, null, s, N)
                    }
                for (c in s)
                    if (r = s[c], N = a[c], s.hasOwnProperty(c) && (r != null || N != null)) switch (c) {
                        case "value":
                            _ = r;
                            break;
                        case "defaultValue":
                            g = r;
                            break;
                        case "multiple":
                            f = r;
                        default:
                            r !== N && Oe(e, t, c, r, s, N)
                    }
                t = g, a = f, s = k, _ != null ? Ds(e, !!a, _, !1) : !!s != !!a && (t != null ? Ds(e, !!a, t, !0) : Ds(e, !!a, a ? [] : "", !1));
                return;
            case "textarea":
                k = _ = null;
                for (g in a)
                    if (c = a[g], a.hasOwnProperty(g) && c != null && !s.hasOwnProperty(g)) switch (g) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            Oe(e, t, g, null, s, c)
                    }
                for (f in s)
                    if (c = s[f], r = a[f], s.hasOwnProperty(f) && (c != null || r != null)) switch (f) {
                        case "value":
                            _ = c;
                            break;
                        case "defaultValue":
                            k = c;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (c != null) throw Error(o(91));
                            break;
                        default:
                            c !== r && Oe(e, t, f, c, s, r)
                    }
                Xu(e, _, k);
                return;
            case "option":
                for (var F in a) _ = a[F], a.hasOwnProperty(F) && _ != null && !s.hasOwnProperty(F) && (F === "selected" ? e.selected = !1 : Oe(e, t, F, null, s, _));
                for (N in s) _ = s[N], k = a[N], s.hasOwnProperty(N) && _ !== k && (_ != null || k != null) && (N === "selected" ? e.selected = _ && typeof _ != "function" && typeof _ != "symbol" : Oe(e, t, N, _, s, k));
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var le in a) _ = a[le], a.hasOwnProperty(le) && _ != null && !s.hasOwnProperty(le) && Oe(e, t, le, null, s, _);
                for (T in s)
                    if (_ = s[T], k = a[T], s.hasOwnProperty(T) && _ !== k && (_ != null || k != null)) switch (T) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (_ != null) throw Error(o(137, t));
                            break;
                        default:
                            Oe(e, t, T, _, s, k)
                    }
                return;
            default:
                if (Mr(t)) {
                    for (var Re in a) _ = a[Re], a.hasOwnProperty(Re) && _ !== void 0 && !s.hasOwnProperty(Re) && ho(e, t, Re, void 0, s, _);
                    for (L in s) _ = s[L], k = a[L], !s.hasOwnProperty(L) || _ === k || _ === void 0 && k === void 0 || ho(e, t, L, _, s, k);
                    return
                }
        }
        for (var D in a) _ = a[D], a.hasOwnProperty(D) && _ != null && !s.hasOwnProperty(D) && Oe(e, t, D, null, s, _);
        for (q in s) _ = s[q], k = a[q], !s.hasOwnProperty(q) || _ === k || _ == null && k == null || Oe(e, t, q, _, s, k)
    }

    function Ip(e) {
        switch (e) {
            case "css":
            case "script":
            case "font":
            case "img":
            case "image":
            case "input":
            case "link":
                return !0;
            default:
                return !1
        }
    }

    function D1() {
        if (typeof performance.getEntriesByType == "function") {
            for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), s = 0; s < a.length; s++) {
                var c = a[s],
                    r = c.transferSize,
                    f = c.initiatorType,
                    g = c.duration;
                if (r && g && Ip(f)) {
                    for (f = 0, g = c.responseEnd, s += 1; s < a.length; s++) {
                        var N = a[s],
                            T = N.startTime;
                        if (T > g) break;
                        var L = N.transferSize,
                            q = N.initiatorType;
                        L && Ip(q) && (N = N.responseEnd, f += L * (N < g ? 1 : (g - T) / (N - T)))
                    }
                    if (--s, t += 8 * (r + f) / (c.duration / 1e3), e++, 10 < e) break
                }
            }
            if (0 < e) return t / e / 1e6
        }
        return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5
    }
    var go = null,
        xo = null;

    function _c(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }

    function Jp(e) {
        switch (e) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function Fp(e, t) {
        if (e === 0) switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return e === 1 && t === "foreignObject" ? 0 : e
    }

    function yo(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var vo = null;

    function O1() {
        var e = window.event;
        return e && e.type === "popstate" ? e === vo ? !1 : (vo = e, !0) : (vo = null, !1)
    }
    var $p = typeof setTimeout == "function" ? setTimeout : void 0,
        R1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Wp = typeof Promise == "function" ? Promise : void 0,
        T1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wp < "u" ? function(e) {
            return Wp.resolve(null).then(e).catch(_1)
        } : $p;

    function _1(e) {
        setTimeout(function() {
            throw e
        })
    }

    function Qa(e) {
        return e === "head"
    }

    function em(e, t) {
        var a = t,
            s = 0;
        do {
            var c = a.nextSibling;
            if (e.removeChild(a), c && c.nodeType === 8)
                if (a = c.data, a === "/$" || a === "/&") {
                    if (s === 0) {
                        e.removeChild(c), rl(t);
                        return
                    }
                    s--
                } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") s++;
            else if (a === "html") ln(e.ownerDocument.documentElement);
            else if (a === "head") {
                a = e.ownerDocument.head, ln(a);
                for (var r = a.firstChild; r;) {
                    var f = r.nextSibling,
                        g = r.nodeName;
                    r[Nl] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && r.rel.toLowerCase() === "stylesheet" || a.removeChild(r), r = f
                }
            } else a === "body" && ln(e.ownerDocument.body);
            a = c
        } while (a);
        rl(t)
    }

    function tm(e, t) {
        var a = e;
        e = 0;
        do {
            var s = a.nextSibling;
            if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), s && s.nodeType === 8)
                if (a = s.data, a === "/$") {
                    if (e === 0) break;
                    e--
                } else a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
            a = s
        } while (a)
    }

    function bo(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
            var a = t;
            switch (t = t.nextSibling, a.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    bo(a), wr(a);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (a.rel.toLowerCase() === "stylesheet") continue
            }
            e.removeChild(a)
        }
    }

    function z1(e, t, a, s) {
        for (; e.nodeType === 1;) {
            var c = a;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!s && (e.nodeName !== "INPUT" || e.type !== "hidden")) break
            } else if (s) {
                if (!e[Nl]) switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop")) break;
                        return e;
                    case "link":
                        if (r = e.getAttribute("rel"), r === "stylesheet" && e.hasAttribute("data-precedence")) break;
                        if (r !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute("title") !== (c.title == null ? null : c.title)) break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence")) break;
                        return e;
                    case "script":
                        if (r = e.getAttribute("src"), (r !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c.type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && r && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                        return e;
                    default:
                        return e
                }
            } else if (t === "input" && e.type === "hidden") {
                var r = c.name == null ? null : "" + c.name;
                if (c.type === "hidden" && e.getAttribute("name") === r) return e
            } else return e;
            if (e = zt(e.nextSibling), e === null) break
        }
        return null
    }

    function k1(e, t, a) {
        if (t === "") return null;
        for (; e.nodeType !== 3;)
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = zt(e.nextSibling), e === null)) return null;
        return e
    }

    function am(e, t) {
        for (; e.nodeType !== 8;)
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = zt(e.nextSibling), e === null)) return null;
        return e
    }

    function jo(e) {
        return e.data === "$?" || e.data === "$~"
    }

    function No(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"
    }

    function H1(e, t) {
        var a = e.ownerDocument;
        if (e.data === "$~") e._reactRetry = t;
        else if (e.data !== "$?" || a.readyState !== "loading") t();
        else {
            var s = function() {
                t(), a.removeEventListener("DOMContentLoaded", s)
            };
            a.addEventListener("DOMContentLoaded", s), e._reactRetry = s
        }
    }

    function zt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
                if (t === "/$" || t === "/&") return null
            }
        }
        return e
    }
    var So = null;

    function sm(e) {
        e = e.nextSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var a = e.data;
                if (a === "/$" || a === "/&") {
                    if (t === 0) return zt(e.nextSibling);
                    t--
                } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++
            }
            e = e.nextSibling
        }
        return null
    }

    function lm(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var a = e.data;
                if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
                    if (t === 0) return e;
                    t--
                } else a !== "/$" && a !== "/&" || t++
            }
            e = e.previousSibling
        }
        return null
    }

    function nm(e, t, a) {
        switch (t = _c(a), e) {
            case "html":
                if (e = t.documentElement, !e) throw Error(o(452));
                return e;
            case "head":
                if (e = t.head, !e) throw Error(o(453));
                return e;
            case "body":
                if (e = t.body, !e) throw Error(o(454));
                return e;
            default:
                throw Error(o(451))
        }
    }

    function ln(e) {
        for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
        wr(e)
    }
    var kt = new Map,
        cm = new Set;

    function zc(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var xa = K.d;
    K.d = {
        f: L1,
        r: U1,
        D: B1,
        C: P1,
        L: q1,
        m: Y1,
        X: X1,
        S: G1,
        M: Q1
    };

    function L1() {
        var e = xa.f(),
            t = Ec();
        return e || t
    }

    function U1(e) {
        var t = Cs(e);
        t !== null && t.tag === 5 && t.type === "form" ? Sf(t) : xa.r(e)
    }
    var ll = typeof document > "u" ? null : document;

    function rm(e, t, a) {
        var s = ll;
        if (s && typeof t == "string" && t) {
            var c = At(t);
            c = 'link[rel="' + e + '"][href="' + c + '"]', typeof a == "string" && (c += '[crossorigin="' + a + '"]'), cm.has(c) || (cm.add(c), e = {
                rel: e,
                crossOrigin: a,
                href: t
            }, s.querySelector(c) === null && (t = s.createElement("link"), lt(t, "link", e), $e(t), s.head.appendChild(t)))
        }
    }

    function B1(e) {
        xa.D(e), rm("dns-prefetch", e, null)
    }

    function P1(e, t) {
        xa.C(e, t), rm("preconnect", e, t)
    }

    function q1(e, t, a) {
        xa.L(e, t, a);
        var s = ll;
        if (s && e && t) {
            var c = 'link[rel="preload"][as="' + At(t) + '"]';
            t === "image" && a && a.imageSrcSet ? (c += '[imagesrcset="' + At(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (c += '[imagesizes="' + At(a.imageSizes) + '"]')) : c += '[href="' + At(e) + '"]';
            var r = c;
            switch (t) {
                case "style":
                    r = nl(e);
                    break;
                case "script":
                    r = cl(e)
            }
            kt.has(r) || (e = v({
                rel: "preload",
                href: t === "image" && a && a.imageSrcSet ? void 0 : e,
                as: t
            }, a), kt.set(r, e), s.querySelector(c) !== null || t === "style" && s.querySelector(nn(r)) || t === "script" && s.querySelector(cn(r)) || (t = s.createElement("link"), lt(t, "link", e), $e(t), s.head.appendChild(t)))
        }
    }

    function Y1(e, t) {
        xa.m(e, t);
        var a = ll;
        if (a && e) {
            var s = t && typeof t.as == "string" ? t.as : "script",
                c = 'link[rel="modulepreload"][as="' + At(s) + '"][href="' + At(e) + '"]',
                r = c;
            switch (s) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    r = cl(e)
            }
            if (!kt.has(r) && (e = v({
                    rel: "modulepreload",
                    href: e
                }, t), kt.set(r, e), a.querySelector(c) === null)) {
                switch (s) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (a.querySelector(cn(r))) return
                }
                s = a.createElement("link"), lt(s, "link", e), $e(s), a.head.appendChild(s)
            }
        }
    }

    function G1(e, t, a) {
        xa.S(e, t, a);
        var s = ll;
        if (s && e) {
            var c = As(s).hoistableStyles,
                r = nl(e);
            t = t || "default";
            var f = c.get(r);
            if (!f) {
                var g = {
                    loading: 0,
                    preload: null
                };
                if (f = s.querySelector(nn(r))) g.loading = 5;
                else {
                    e = v({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, a), (a = kt.get(r)) && wo(e, a);
                    var N = f = s.createElement("link");
                    $e(N), lt(N, "link", e), N._p = new Promise(function(T, L) {
                        N.onload = T, N.onerror = L
                    }), N.addEventListener("load", function() {
                        g.loading |= 1
                    }), N.addEventListener("error", function() {
                        g.loading |= 2
                    }), g.loading |= 4, kc(f, t, s)
                }
                f = {
                    type: "stylesheet",
                    instance: f,
                    count: 1,
                    state: g
                }, c.set(r, f)
            }
        }
    }

    function X1(e, t) {
        xa.X(e, t);
        var a = ll;
        if (a && e) {
            var s = As(a).hoistableScripts,
                c = cl(e),
                r = s.get(c);
            r || (r = a.querySelector(cn(c)), r || (e = v({
                src: e,
                async: !0
            }, t), (t = kt.get(c)) && Eo(e, t), r = a.createElement("script"), $e(r), lt(r, "link", e), a.head.appendChild(r)), r = {
                type: "script",
                instance: r,
                count: 1,
                state: null
            }, s.set(c, r))
        }
    }

    function Q1(e, t) {
        xa.M(e, t);
        var a = ll;
        if (a && e) {
            var s = As(a).hoistableScripts,
                c = cl(e),
                r = s.get(c);
            r || (r = a.querySelector(cn(c)), r || (e = v({
                src: e,
                async: !0,
                type: "module"
            }, t), (t = kt.get(c)) && Eo(e, t), r = a.createElement("script"), $e(r), lt(r, "link", e), a.head.appendChild(r)), r = {
                type: "script",
                instance: r,
                count: 1,
                state: null
            }, s.set(c, r))
        }
    }

    function im(e, t, a, s) {
        var c = (c = pe.current) ? zc(c) : null;
        if (!c) throw Error(o(446));
        switch (e) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof a.precedence == "string" && typeof a.href == "string" ? (t = nl(a.href), a = As(c).hoistableStyles, s = a.get(t), s || (s = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, a.set(t, s)), s) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                    e = nl(a.href);
                    var r = As(c).hoistableStyles,
                        f = r.get(e);
                    if (f || (c = c.ownerDocument || c, f = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, r.set(e, f), (r = c.querySelector(nn(e))) && !r._p && (f.instance = r, f.state.loading = 5), kt.has(e) || (a = {
                            rel: "preload",
                            as: "style",
                            href: a.href,
                            crossOrigin: a.crossOrigin,
                            integrity: a.integrity,
                            media: a.media,
                            hrefLang: a.hrefLang,
                            referrerPolicy: a.referrerPolicy
                        }, kt.set(e, a), r || V1(c, e, a, f.state))), t && s === null) throw Error(o(528, ""));
                    return f
                }
                if (t && s !== null) throw Error(o(529, ""));
                return null;
            case "script":
                return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = cl(a), a = As(c).hoistableScripts, s = a.get(t), s || (s = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, a.set(t, s)), s) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(o(444, e))
        }
    }

    function nl(e) {
        return 'href="' + At(e) + '"'
    }

    function nn(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }

    function om(e) {
        return v({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }

    function V1(e, t, a, s) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? s.loading = 1 : (t = e.createElement("link"), s.preload = t, t.addEventListener("load", function() {
            return s.loading |= 1
        }), t.addEventListener("error", function() {
            return s.loading |= 2
        }), lt(t, "link", a), $e(t), e.head.appendChild(t))
    }

    function cl(e) {
        return '[src="' + At(e) + '"]'
    }

    function cn(e) {
        return "script[async]" + e
    }

    function um(e, t, a) {
        if (t.count++, t.instance === null) switch (t.type) {
            case "style":
                var s = e.querySelector('style[data-href~="' + At(a.href) + '"]');
                if (s) return t.instance = s, $e(s), s;
                var c = v({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return s = (e.ownerDocument || e).createElement("style"), $e(s), lt(s, "style", c), kc(s, a.precedence, e), t.instance = s;
            case "stylesheet":
                c = nl(a.href);
                var r = e.querySelector(nn(c));
                if (r) return t.state.loading |= 4, t.instance = r, $e(r), r;
                s = om(a), (c = kt.get(c)) && wo(s, c), r = (e.ownerDocument || e).createElement("link"), $e(r);
                var f = r;
                return f._p = new Promise(function(g, N) {
                    f.onload = g, f.onerror = N
                }), lt(r, "link", s), t.state.loading |= 4, kc(r, a.precedence, e), t.instance = r;
            case "script":
                return r = cl(a.src), (c = e.querySelector(cn(r))) ? (t.instance = c, $e(c), c) : (s = a, (c = kt.get(r)) && (s = v({}, a), Eo(s, c)), e = e.ownerDocument || e, c = e.createElement("script"), $e(c), lt(c, "link", s), e.head.appendChild(c), t.instance = c);
            case "void":
                return null;
            default:
                throw Error(o(443, t.type))
        } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (s = t.instance, t.state.loading |= 4, kc(s, a.precedence, e));
        return t.instance
    }

    function kc(e, t, a) {
        for (var s = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), c = s.length ? s[s.length - 1] : null, r = c, f = 0; f < s.length; f++) {
            var g = s[f];
            if (g.dataset.precedence === t) r = g;
            else if (r !== c) break
        }
        r ? r.parentNode.insertBefore(e, r.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild))
    }

    function wo(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title)
    }

    function Eo(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity)
    }
    var Hc = null;

    function dm(e, t, a) {
        if (Hc === null) {
            var s = new Map,
                c = Hc = new Map;
            c.set(a, s)
        } else c = Hc, s = c.get(a), s || (s = new Map, c.set(a, s));
        if (s.has(e)) return s;
        for (s.set(e, null), a = a.getElementsByTagName(e), c = 0; c < a.length; c++) {
            var r = a[c];
            if (!(r[Nl] || r[et] || e === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
                var f = r.getAttribute(t) || "";
                f = e + f;
                var g = s.get(f);
                g ? g.push(r) : s.set(f, [r])
            }
        }
        return s
    }

    function fm(e, t, a) {
        e = e.ownerDocument || e, e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null)
    }

    function Z1(e, t, a) {
        if (a === 1 || t.itemProp != null) return !1;
        switch (e) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
                return !0;
            case "link":
                if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
                return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
            case "script":
                if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0
        }
        return !1
    }

    function pm(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }

    function K1(e, t, a, s) {
        if (a.type === "stylesheet" && (typeof s.media != "string" || matchMedia(s.media).matches !== !1) && (a.state.loading & 4) === 0) {
            if (a.instance === null) {
                var c = nl(s.href),
                    r = t.querySelector(nn(c));
                if (r) {
                    t = r._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Lc.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = r, $e(r);
                    return
                }
                r = t.ownerDocument || t, s = om(s), (c = kt.get(c)) && wo(s, c), r = r.createElement("link"), $e(r);
                var f = r;
                f._p = new Promise(function(g, N) {
                    f.onload = g, f.onerror = N
                }), lt(r, "link", s), a.instance = r
            }
            e.stylesheets === null && (e.stylesheets = new Map), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Lc.bind(e), t.addEventListener("load", a), t.addEventListener("error", a))
        }
    }
    var Co = 0;

    function I1(e, t) {
        return e.stylesheets && e.count === 0 && Bc(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
            var s = setTimeout(function() {
                if (e.stylesheets && Bc(e, e.stylesheets), e.unsuspend) {
                    var r = e.unsuspend;
                    e.unsuspend = null, r()
                }
            }, 6e4 + t);
            0 < e.imgBytes && Co === 0 && (Co = 62500 * D1());
            var c = setTimeout(function() {
                if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Bc(e, e.stylesheets), e.unsuspend)) {
                    var r = e.unsuspend;
                    e.unsuspend = null, r()
                }
            }, (e.imgBytes > Co ? 50 : 800) + t);
            return e.unsuspend = a,
                function() {
                    e.unsuspend = null, clearTimeout(s), clearTimeout(c)
                }
        } : null
    }

    function Lc() {
        if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets) Bc(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null, e()
            }
        }
    }
    var Uc = null;

    function Bc(e, t) {
        e.stylesheets = null, e.unsuspend !== null && (e.count++, Uc = new Map, t.forEach(J1, e), Uc = null, Lc.call(e))
    }

    function J1(e, t) {
        if (!(t.state.loading & 4)) {
            var a = Uc.get(e);
            if (a) var s = a.get(null);
            else {
                a = new Map, Uc.set(e, a);
                for (var c = e.querySelectorAll("link[data-precedence],style[data-precedence]"), r = 0; r < c.length; r++) {
                    var f = c[r];
                    (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (a.set(f.dataset.precedence, f), s = f)
                }
                s && a.set(null, s)
            }
            c = t.instance, f = c.getAttribute("data-precedence"), r = a.get(f) || s, r === s && a.set(null, c), a.set(f, c), this.count++, s = Lc.bind(this), c.addEventListener("load", s), c.addEventListener("error", s), r ? r.parentNode.insertBefore(c, r.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), t.state.loading |= 4
        }
    }
    var rn = {
        $$typeof: V,
        Provider: null,
        Consumer: null,
        _currentValue: Y,
        _currentValue2: Y,
        _threadCount: 0
    };

    function F1(e, t, a, s, c, r, f, g, N) {
        this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = br(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = br(0), this.hiddenUpdates = br(null), this.identifierPrefix = s, this.onUncaughtError = c, this.onCaughtError = r, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = N, this.incompleteTransitions = new Map
    }

    function mm(e, t, a, s, c, r, f, g, N, T, L, q) {
        return e = new F1(e, t, a, f, N, T, L, q, g), t = 1, r === !0 && (t |= 24), r = bt(3, null, null, t), e.current = r, r.stateNode = e, t = li(), t.refCount++, e.pooledCache = t, t.refCount++, r.memoizedState = {
            element: s,
            isDehydrated: a,
            cache: t
        }, ii(r), e
    }

    function hm(e) {
        return e ? (e = Ls, e) : Ls
    }

    function gm(e, t, a, s, c, r) {
        c = hm(c), s.context === null ? s.context = c : s.pendingContext = c, s = za(t), s.payload = {
            element: a
        }, r = r === void 0 ? null : r, r !== null && (s.callback = r), a = ka(e, s, t), a !== null && (pt(a, e, t), Bl(a, e, t))
    }

    function xm(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var a = e.retryLane;
            e.retryLane = a !== 0 && a < t ? a : t
        }
    }

    function Ao(e, t) {
        xm(e, t), (e = e.alternate) && xm(e, t)
    }

    function ym(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = rs(e, 67108864);
            t !== null && pt(t, e, 67108864), Ao(e, 67108864)
        }
    }

    function vm(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = Et();
            t = jr(t);
            var a = rs(e, t);
            a !== null && pt(a, e, t), Ao(e, t)
        }
    }
    var Pc = !0;

    function $1(e, t, a, s) {
        var c = H.T;
        H.T = null;
        var r = K.p;
        try {
            K.p = 2, Mo(e, t, a, s)
        } finally {
            K.p = r, H.T = c
        }
    }

    function W1(e, t, a, s) {
        var c = H.T;
        H.T = null;
        var r = K.p;
        try {
            K.p = 8, Mo(e, t, a, s)
        } finally {
            K.p = r, H.T = c
        }
    }

    function Mo(e, t, a, s) {
        if (Pc) {
            var c = Do(s);
            if (c === null) mo(e, t, s, qc, a), jm(e, s);
            else if (t0(c, e, t, a, s)) s.stopPropagation();
            else if (jm(e, s), t & 4 && -1 < e0.indexOf(e)) {
                for (; c !== null;) {
                    var r = Cs(c);
                    if (r !== null) switch (r.tag) {
                        case 3:
                            if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                                var f = as(r.pendingLanes);
                                if (f !== 0) {
                                    var g = r;
                                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; f;) {
                                        var N = 1 << 31 - yt(f);
                                        g.entanglements[1] |= N, f &= ~N
                                    }
                                    Kt(r), (Ee & 6) === 0 && (Sc = gt() + 500, tn(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            g = rs(r, 2), g !== null && pt(g, r, 2), Ec(), Ao(r, 2)
                    }
                    if (r = Do(s), r === null && mo(e, t, s, qc, a), r === c) break;
                    c = r
                }
                c !== null && s.stopPropagation()
            } else mo(e, t, s, null, a)
        }
    }

    function Do(e) {
        return e = Or(e), Oo(e)
    }
    var qc = null;

    function Oo(e) {
        if (qc = null, e = Es(e), e !== null) {
            var t = p(e);
            if (t === null) e = null;
            else {
                var a = t.tag;
                if (a === 13) {
                    if (e = m(t), e !== null) return e;
                    e = null
                } else if (a === 31) {
                    if (e = h(t), e !== null) return e;
                    e = null
                } else if (a === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else t !== e && (e = null)
            }
        }
        return qc = e, null
    }

    function bm(e) {
        switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (Bg()) {
                    case Au:
                        return 2;
                    case Mu:
                        return 8;
                    case On:
                    case Pg:
                        return 32;
                    case Du:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var Ro = !1,
        Va = null,
        Za = null,
        Ka = null,
        on = new Map,
        un = new Map,
        Ia = [],
        e0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function jm(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                Va = null;
                break;
            case "dragenter":
            case "dragleave":
                Za = null;
                break;
            case "mouseover":
            case "mouseout":
                Ka = null;
                break;
            case "pointerover":
            case "pointerout":
                on.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                un.delete(t.pointerId)
        }
    }

    function dn(e, t, a, s, c, r) {
        return e === null || e.nativeEvent !== r ? (e = {
            blockedOn: t,
            domEventName: a,
            eventSystemFlags: s,
            nativeEvent: r,
            targetContainers: [c]
        }, t !== null && (t = Cs(t), t !== null && ym(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, c !== null && t.indexOf(c) === -1 && t.push(c), e)
    }

    function t0(e, t, a, s, c) {
        switch (t) {
            case "focusin":
                return Va = dn(Va, e, t, a, s, c), !0;
            case "dragenter":
                return Za = dn(Za, e, t, a, s, c), !0;
            case "mouseover":
                return Ka = dn(Ka, e, t, a, s, c), !0;
            case "pointerover":
                var r = c.pointerId;
                return on.set(r, dn(on.get(r) || null, e, t, a, s, c)), !0;
            case "gotpointercapture":
                return r = c.pointerId, un.set(r, dn(un.get(r) || null, e, t, a, s, c)), !0
        }
        return !1
    }

    function Nm(e) {
        var t = Es(e.target);
        if (t !== null) {
            var a = p(t);
            if (a !== null) {
                if (t = a.tag, t === 13) {
                    if (t = m(a), t !== null) {
                        e.blockedOn = t, ku(e.priority, function() {
                            vm(a)
                        });
                        return
                    }
                } else if (t === 31) {
                    if (t = h(a), t !== null) {
                        e.blockedOn = t, ku(e.priority, function() {
                            vm(a)
                        });
                        return
                    }
                } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function Yc(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var a = Do(e.nativeEvent);
            if (a === null) {
                a = e.nativeEvent;
                var s = new a.constructor(a.type, a);
                Dr = s, a.target.dispatchEvent(s), Dr = null
            } else return t = Cs(a), t !== null && ym(t), e.blockedOn = a, !1;
            t.shift()
        }
        return !0
    }

    function Sm(e, t, a) {
        Yc(e) && a.delete(t)
    }

    function a0() {
        Ro = !1, Va !== null && Yc(Va) && (Va = null), Za !== null && Yc(Za) && (Za = null), Ka !== null && Yc(Ka) && (Ka = null), on.forEach(Sm), un.forEach(Sm)
    }

    function Gc(e, t) {
        e.blockedOn === t && (e.blockedOn = null, Ro || (Ro = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, a0)))
    }
    var Xc = null;

    function wm(e) {
        Xc !== e && (Xc = e, l.unstable_scheduleCallback(l.unstable_NormalPriority, function() {
            Xc === e && (Xc = null);
            for (var t = 0; t < e.length; t += 3) {
                var a = e[t],
                    s = e[t + 1],
                    c = e[t + 2];
                if (typeof s != "function") {
                    if (Oo(s || a) === null) continue;
                    break
                }
                var r = Cs(a);
                r !== null && (e.splice(t, 3), t -= 3, Mi(r, {
                    pending: !0,
                    data: c,
                    method: a.method,
                    action: s
                }, s, c))
            }
        }))
    }

    function rl(e) {
        function t(N) {
            return Gc(N, e)
        }
        Va !== null && Gc(Va, e), Za !== null && Gc(Za, e), Ka !== null && Gc(Ka, e), on.forEach(t), un.forEach(t);
        for (var a = 0; a < Ia.length; a++) {
            var s = Ia[a];
            s.blockedOn === e && (s.blockedOn = null)
        }
        for (; 0 < Ia.length && (a = Ia[0], a.blockedOn === null);) Nm(a), a.blockedOn === null && Ia.shift();
        if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
            for (s = 0; s < a.length; s += 3) {
                var c = a[s],
                    r = a[s + 1],
                    f = c[rt] || null;
                if (typeof r == "function") f || wm(a);
                else if (f) {
                    var g = null;
                    if (r && r.hasAttribute("formAction")) {
                        if (c = r, f = r[rt] || null) g = f.formAction;
                        else if (Oo(c) !== null) continue
                    } else g = f.action;
                    typeof g == "function" ? a[s + 1] = g : (a.splice(s, 3), s -= 3), wm(a)
                }
            }
    }

    function Em() {
        function e(r) {
            r.canIntercept && r.info === "react-transition" && r.intercept({
                handler: function() {
                    return new Promise(function(f) {
                        return c = f
                    })
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }

        function t() {
            c !== null && (c(), c = null), s || setTimeout(a, 20)
        }

        function a() {
            if (!s && !navigation.transition) {
                var r = navigation.currentEntry;
                r && r.url != null && navigation.navigate(r.url, {
                    state: r.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var s = !1,
                c = null;
            return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100),
                function() {
                    s = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), c !== null && (c(), c = null)
                }
        }
    }

    function To(e) {
        this._internalRoot = e
    }
    Qc.prototype.render = To.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(o(409));
        var a = t.current,
            s = Et();
        gm(a, s, e, t, null, null)
    }, Qc.prototype.unmount = To.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            gm(e.current, 2, null, e, null, null), Ec(), t[ws] = null
        }
    };

    function Qc(e) {
        this._internalRoot = e
    }
    Qc.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = zu();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var a = 0; a < Ia.length && t !== 0 && t < Ia[a].priority; a++);
            Ia.splice(a, 0, e), a === 0 && Nm(e)
        }
    };
    var Cm = i.version;
    if (Cm !== "19.2.3") throw Error(o(527, Cm, "19.2.3"));
    K.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
        return e = y(t), e = e !== null ? j(e) : null, e = e === null ? null : e.stateNode, e
    };
    var s0 = {
        bundleType: 0,
        version: "19.2.3",
        rendererPackageName: "react-dom",
        currentDispatcherRef: H,
        reconcilerVersion: "19.2.3"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Vc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Vc.isDisabled && Vc.supportsFiber) try {
            vl = Vc.inject(s0), xt = Vc
        } catch {}
    }
    return pn.createRoot = function(e, t) {
        if (!d(e)) throw Error(o(299));
        var a = !1,
            s = "",
            c = _f,
            r = zf,
            f = kf;
        return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onUncaughtError !== void 0 && (c = t.onUncaughtError), t.onCaughtError !== void 0 && (r = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = mm(e, 1, !1, null, null, a, s, null, c, r, f, Em), e[ws] = t.current, po(e), new To(t)
    }, pn.hydrateRoot = function(e, t, a) {
        if (!d(e)) throw Error(o(299));
        var s = !1,
            c = "",
            r = _f,
            f = zf,
            g = kf,
            N = null;
        return a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (c = a.identifierPrefix), a.onUncaughtError !== void 0 && (r = a.onUncaughtError), a.onCaughtError !== void 0 && (f = a.onCaughtError), a.onRecoverableError !== void 0 && (g = a.onRecoverableError), a.formState !== void 0 && (N = a.formState)), t = mm(e, 1, !0, t, a ?? null, s, c, N, r, f, g, Em), t.context = hm(null), a = t.current, s = Et(), s = jr(s), c = za(s), c.callback = null, ka(a, c, s), a = s, t.current.lanes = a, jl(t, a), Kt(t), e[ws] = t.current, po(e), new Qc(t)
    }, pn.version = "19.2.3", pn
}
var Hm;

function m0() {
    if (Hm) return ko.exports;
    Hm = 1;

    function l() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)
        } catch (i) {
            console.error(i)
        }
    }
    return l(), ko.exports = p0(), ko.exports
}
var h0 = m0();
var Lm = "popstate";

function Um(l) {
    return typeof l == "object" && l != null && "pathname" in l && "search" in l && "hash" in l && "state" in l && "key" in l
}

function g0(l = {}) {
    function i(o, d) {
        let p = d.state?.masked,
            {
                pathname: m,
                search: h,
                hash: b
            } = p || o.location;
        return Wo("", {
            pathname: m,
            search: h,
            hash: b
        }, d.state && d.state.usr || null, d.state && d.state.key || "default", p ? {
            pathname: o.location.pathname,
            search: o.location.search,
            hash: o.location.hash
        } : void 0)
    }

    function u(o, d) {
        return typeof d == "string" ? d : xn(d)
    }
    return y0(i, u, null, l)
}

function Pe(l, i) {
    if (l === !1 || l === null || typeof l > "u") throw new Error(i)
}

function $t(l, i) {
    if (!l) {
        typeof console < "u" && console.warn(i);
        try {
            throw new Error(i)
        } catch {}
    }
}

function x0() {
    return Math.random().toString(36).substring(2, 10)
}

function Bm(l, i) {
    return {
        usr: l.state,
        key: l.key,
        idx: i,
        masked: l.unstable_mask ? {
            pathname: l.pathname,
            search: l.search,
            hash: l.hash
        } : void 0
    }
}

function Wo(l, i, u = null, o, d) {
    return {
        pathname: typeof l == "string" ? l : l.pathname,
        search: "",
        hash: "",
        ...typeof i == "string" ? hl(i) : i,
        state: u,
        key: i && i.key || o || x0(),
        unstable_mask: d
    }
}

function xn({
    pathname: l = "/",
    search: i = "",
    hash: u = ""
}) {
    return i && i !== "?" && (l += i.charAt(0) === "?" ? i : "?" + i), u && u !== "#" && (l += u.charAt(0) === "#" ? u : "#" + u), l
}

function hl(l) {
    let i = {};
    if (l) {
        let u = l.indexOf("#");
        u >= 0 && (i.hash = l.substring(u), l = l.substring(0, u));
        let o = l.indexOf("?");
        o >= 0 && (i.search = l.substring(o), l = l.substring(0, o)), l && (i.pathname = l)
    }
    return i
}

function y0(l, i, u, o = {}) {
    let {
        window: d = document.defaultView,
        v5Compat: p = !1
    } = o, m = d.history, h = "POP", b = null, y = j();
    y == null && (y = 0, m.replaceState({
        ...m.state,
        idx: y
    }, ""));

    function j() {
        return (m.state || {
            idx: null
        }).idx
    }

    function v() {
        h = "POP";
        let O = j(),
            U = O == null ? null : O - y;
        y = O, b && b({
            action: h,
            location: E.location,
            delta: U
        })
    }

    function S(O, U) {
        h = "PUSH";
        let Z = Um(O) ? O : Wo(E.location, O, U);
        y = j() + 1;
        let V = Bm(Z, y),
            J = E.createHref(Z.unstable_mask || Z);
        try {
            m.pushState(V, "", J)
        } catch (ee) {
            if (ee instanceof DOMException && ee.name === "DataCloneError") throw ee;
            d.location.assign(J)
        }
        p && b && b({
            action: h,
            location: E.location,
            delta: 1
        })
    }

    function z(O, U) {
        h = "REPLACE";
        let Z = Um(O) ? O : Wo(E.location, O, U);
        y = j();
        let V = Bm(Z, y),
            J = E.createHref(Z.unstable_mask || Z);
        m.replaceState(V, "", J), p && b && b({
            action: h,
            location: E.location,
            delta: 0
        })
    }

    function M(O) {
        return v0(O)
    }
    let E = {
        get action() {
            return h
        },
        get location() {
            return l(d, m)
        },
        listen(O) {
            if (b) throw new Error("A history only accepts one active listener");
            return d.addEventListener(Lm, v), b = O, () => {
                d.removeEventListener(Lm, v), b = null
            }
        },
        createHref(O) {
            return i(d, O)
        },
        createURL: M,
        encodeLocation(O) {
            let U = M(O);
            return {
                pathname: U.pathname,
                search: U.search,
                hash: U.hash
            }
        },
        push: S,
        replace: z,
        go(O) {
            return m.go(O)
        }
    };
    return E
}

function v0(l, i = !1) {
    let u = "http://localhost";
    typeof window < "u" && (u = window.location.origin !== "null" ? window.location.origin : window.location.href), Pe(u, "No window.location.(origin|href) available to create URL");
    let o = typeof l == "string" ? l : xn(l);
    return o = o.replace(/ $/, "%20"), !i && o.startsWith("//") && (o = u + o), new URL(o, u)
}

function xh(l, i, u = "/") {
    return b0(l, i, u, !1)
}

function b0(l, i, u, o) {
    let d = typeof i == "string" ? hl(i) : i,
        p = Na(d.pathname || "/", u);
    if (p == null) return null;
    let m = yh(l);
    j0(m);
    let h = null;
    for (let b = 0; h == null && b < m.length; ++b) {
        let y = T0(p);
        h = O0(m[b], y, o)
    }
    return h
}

function yh(l, i = [], u = [], o = "", d = !1) {
    let p = (m, h, b = d, y) => {
        let j = {
            relativePath: y === void 0 ? m.path || "" : y,
            caseSensitive: m.caseSensitive === !0,
            childrenIndex: h,
            route: m
        };
        if (j.relativePath.startsWith("/")) {
            if (!j.relativePath.startsWith(o) && b) return;
            Pe(j.relativePath.startsWith(o), `Absolute route path "${j.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), j.relativePath = j.relativePath.slice(o.length)
        }
        let v = Jt([o, j.relativePath]),
            S = u.concat(j);
        m.children && m.children.length > 0 && (Pe(m.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${v}".`), yh(m.children, i, S, v, b)), !(m.path == null && !m.index) && i.push({
            path: v,
            score: M0(v, m.index),
            routesMeta: S
        })
    };
    return l.forEach((m, h) => {
        if (m.path === "" || !m.path?.includes("?")) p(m, h);
        else
            for (let b of vh(m.path)) p(m, h, !0, b)
    }), i
}

function vh(l) {
    let i = l.split("/");
    if (i.length === 0) return [];
    let [u, ...o] = i, d = u.endsWith("?"), p = u.replace(/\?$/, "");
    if (o.length === 0) return d ? [p, ""] : [p];
    let m = vh(o.join("/")),
        h = [];
    return h.push(...m.map(b => b === "" ? p : [p, b].join("/"))), d && h.push(...m), h.map(b => l.startsWith("/") && b === "" ? "/" : b)
}

function j0(l) {
    l.sort((i, u) => i.score !== u.score ? u.score - i.score : D0(i.routesMeta.map(o => o.childrenIndex), u.routesMeta.map(o => o.childrenIndex)))
}
var N0 = /^:[\w-]+$/,
    S0 = 3,
    w0 = 2,
    E0 = 1,
    C0 = 10,
    A0 = -2,
    Pm = l => l === "*";

function M0(l, i) {
    let u = l.split("/"),
        o = u.length;
    return u.some(Pm) && (o += A0), i && (o += w0), u.filter(d => !Pm(d)).reduce((d, p) => d + (N0.test(p) ? S0 : p === "" ? E0 : C0), o)
}

function D0(l, i) {
    return l.length === i.length && l.slice(0, -1).every((o, d) => o === i[d]) ? l[l.length - 1] - i[i.length - 1] : 0
}

function O0(l, i, u = !1) {
    let {
        routesMeta: o
    } = l, d = {}, p = "/", m = [];
    for (let h = 0; h < o.length; ++h) {
        let b = o[h],
            y = h === o.length - 1,
            j = p === "/" ? i : i.slice(p.length) || "/",
            v = nr({
                path: b.relativePath,
                caseSensitive: b.caseSensitive,
                end: y
            }, j),
            S = b.route;
        if (!v && y && u && !o[o.length - 1].route.index && (v = nr({
                path: b.relativePath,
                caseSensitive: b.caseSensitive,
                end: !1
            }, j)), !v) return null;
        Object.assign(d, v.params), m.push({
            params: d,
            pathname: Jt([p, v.pathname]),
            pathnameBase: H0(Jt([p, v.pathnameBase])),
            route: S
        }), v.pathnameBase !== "/" && (p = Jt([p, v.pathnameBase]))
    }
    return m
}

function nr(l, i) {
    typeof l == "string" && (l = {
        path: l,
        caseSensitive: !1,
        end: !0
    });
    let [u, o] = R0(l.path, l.caseSensitive, l.end), d = i.match(u);
    if (!d) return null;
    let p = d[0],
        m = p.replace(/(.)\/+$/, "$1"),
        h = d.slice(1);
    return {
        params: o.reduce((y, {
            paramName: j,
            isOptional: v
        }, S) => {
            if (j === "*") {
                let M = h[S] || "";
                m = p.slice(0, p.length - M.length).replace(/(.)\/+$/, "$1")
            }
            const z = h[S];
            return v && !z ? y[j] = void 0 : y[j] = (z || "").replace(/%2F/g, "/"), y
        }, {}),
        pathname: p,
        pathnameBase: m,
        pattern: l
    }
}

function R0(l, i = !1, u = !0) {
    $t(l === "*" || !l.endsWith("*") || l.endsWith("/*"), `Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);
    let o = [],
        d = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (m, h, b, y, j) => {
            if (o.push({
                    paramName: h,
                    isOptional: b != null
                }), b) {
                let v = j.charAt(y + m.length);
                return v && v !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?"
            }
            return "/([^\\/]+)"
        }).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return l.endsWith("*") ? (o.push({
        paramName: "*"
    }), d += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : u ? d += "\\/*$" : l !== "" && l !== "/" && (d += "(?:(?=\\/|$))"), [new RegExp(d, i ? void 0 : "i"), o]
}

function T0(l) {
    try {
        return l.split("/").map(i => decodeURIComponent(i).replace(/\//g, "%2F")).join("/")
    } catch (i) {
        return $t(!1, `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`), l
    }
}

function Na(l, i) {
    if (i === "/") return l;
    if (!l.toLowerCase().startsWith(i.toLowerCase())) return null;
    let u = i.endsWith("/") ? i.length - 1 : i.length,
        o = l.charAt(u);
    return o && o !== "/" ? null : l.slice(u) || "/"
}
var _0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

function z0(l, i = "/") {
    let {
        pathname: u,
        search: o = "",
        hash: d = ""
    } = typeof l == "string" ? hl(l) : l, p;
    return u ? (u = u.replace(/\/\/+/g, "/"), u.startsWith("/") ? p = qm(u.substring(1), "/") : p = qm(u, i)) : p = i, {
        pathname: p,
        search: L0(o),
        hash: U0(d)
    }
}

function qm(l, i) {
    let u = i.replace(/\/+$/, "").split("/");
    return l.split("/").forEach(d => {
        d === ".." ? u.length > 1 && u.pop() : d !== "." && u.push(d)
    }), u.length > 1 ? u.join("/") : "/"
}

function Bo(l, i, u, o) {
    return `Cannot include a '${l}' character in a manually specified \`to.${i}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}

function k0(l) {
    return l.filter((i, u) => u === 0 || i.route.path && i.route.path.length > 0)
}

function bh(l) {
    let i = k0(l);
    return i.map((u, o) => o === i.length - 1 ? u.pathname : u.pathnameBase)
}

function uu(l, i, u, o = !1) {
    let d;
    typeof l == "string" ? d = hl(l) : (d = {
        ...l
    }, Pe(!d.pathname || !d.pathname.includes("?"), Bo("?", "pathname", "search", d)), Pe(!d.pathname || !d.pathname.includes("#"), Bo("#", "pathname", "hash", d)), Pe(!d.search || !d.search.includes("#"), Bo("#", "search", "hash", d)));
    let p = l === "" || d.pathname === "",
        m = p ? "/" : d.pathname,
        h;
    if (m == null) h = u;
    else {
        let v = i.length - 1;
        if (!o && m.startsWith("..")) {
            let S = m.split("/");
            for (; S[0] === "..";) S.shift(), v -= 1;
            d.pathname = S.join("/")
        }
        h = v >= 0 ? i[v] : "/"
    }
    let b = z0(d, h),
        y = m && m !== "/" && m.endsWith("/"),
        j = (p || m === ".") && u.endsWith("/");
    return !b.pathname.endsWith("/") && (y || j) && (b.pathname += "/"), b
}
var Jt = l => l.join("/").replace(/\/\/+/g, "/"),
    H0 = l => l.replace(/\/+$/, "").replace(/^\/*/, "/"),
    L0 = l => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l,
    U0 = l => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l,
    B0 = class {
        constructor(l, i, u, o = !1) {
            this.status = l, this.statusText = i || "", this.internal = o, u instanceof Error ? (this.data = u.toString(), this.error = u) : this.data = u
        }
    };

function P0(l) {
    return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l
}

function q0(l) {
    return l.map(i => i.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/"
}
var jh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";

function Nh(l, i) {
    let u = l;
    if (typeof u != "string" || !_0.test(u)) return {
        absoluteURL: void 0,
        isExternal: !1,
        to: u
    };
    let o = u,
        d = !1;
    if (jh) try {
        let p = new URL(window.location.href),
            m = u.startsWith("//") ? new URL(p.protocol + u) : new URL(u),
            h = Na(m.pathname, i);
        m.origin === p.origin && h != null ? u = h + m.search + m.hash : d = !0
    } catch {
        $t(!1, `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
    }
    return {
        absoluteURL: o,
        isExternal: d,
        to: u
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Sh = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Sh);
var Y0 = ["GET", ...Sh];
new Set(Y0);
var gl = x.createContext(null);
gl.displayName = "DataRouter";
var or = x.createContext(null);
or.displayName = "DataRouterState";
var G0 = x.createContext(!1),
    wh = x.createContext({
        isTransitioning: !1
    });
wh.displayName = "ViewTransition";
var X0 = x.createContext(new Map);
X0.displayName = "Fetchers";
var Q0 = x.createContext(null);
Q0.displayName = "Await";
var Ht = x.createContext(null);
Ht.displayName = "Navigation";
var Cn = x.createContext(null);
Cn.displayName = "Location";
var Yt = x.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
Yt.displayName = "Route";
var du = x.createContext(null);
du.displayName = "RouteError";
var Eh = "REACT_ROUTER_ERROR",
    V0 = "REDIRECT",
    Z0 = "ROUTE_ERROR_RESPONSE";

function K0(l) {
    if (l.startsWith(`${Eh}:${V0}:{`)) try {
        let i = JSON.parse(l.slice(28));
        if (typeof i == "object" && i && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.location == "string" && typeof i.reloadDocument == "boolean" && typeof i.replace == "boolean") return i
    } catch {}
}

function I0(l) {
    if (l.startsWith(`${Eh}:${Z0}:{`)) try {
        let i = JSON.parse(l.slice(40));
        if (typeof i == "object" && i && typeof i.status == "number" && typeof i.statusText == "string") return new B0(i.status, i.statusText, i.data)
    } catch {}
}

function J0(l, {
    relative: i
} = {}) {
    Pe(An(), "useHref() may be used only in the context of a <Router> component.");
    let {
        basename: u,
        navigator: o
    } = x.useContext(Ht), {
        hash: d,
        pathname: p,
        search: m
    } = Mn(l, {
        relative: i
    }), h = p;
    return u !== "/" && (h = p === "/" ? u : Jt([u, p])), o.createHref({
        pathname: h,
        search: m,
        hash: d
    })
}

function An() {
    return x.useContext(Cn) != null
}

function Wt() {
    return Pe(An(), "useLocation() may be used only in the context of a <Router> component."), x.useContext(Cn).location
}
var Ch = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

function Ah(l) {
    x.useContext(Ht).static || x.useLayoutEffect(l)
}

function fu() {
    let {
        isDataRoute: l
    } = x.useContext(Yt);
    return l ? dy() : F0()
}

function F0() {
    Pe(An(), "useNavigate() may be used only in the context of a <Router> component.");
    let l = x.useContext(gl),
        {
            basename: i,
            navigator: u
        } = x.useContext(Ht),
        {
            matches: o
        } = x.useContext(Yt),
        {
            pathname: d
        } = Wt(),
        p = JSON.stringify(bh(o)),
        m = x.useRef(!1);
    return Ah(() => {
        m.current = !0
    }), x.useCallback((b, y = {}) => {
        if ($t(m.current, Ch), !m.current) return;
        if (typeof b == "number") {
            u.go(b);
            return
        }
        let j = uu(b, JSON.parse(p), d, y.relative === "path");
        l == null && i !== "/" && (j.pathname = j.pathname === "/" ? i : Jt([i, j.pathname])), (y.replace ? u.replace : u.push)(j, y.state, y)
    }, [i, u, p, d, l])
}
var $0 = x.createContext(null);

function W0(l) {
    let i = x.useContext(Yt).outlet;
    return x.useMemo(() => i && x.createElement($0.Provider, {
        value: l
    }, i), [i, l])
}

function Mh() {
    let {
        matches: l
    } = x.useContext(Yt), i = l[l.length - 1];
    return i ? i.params : {}
}

function Mn(l, {
    relative: i
} = {}) {
    let {
        matches: u
    } = x.useContext(Yt), {
        pathname: o
    } = Wt(), d = JSON.stringify(bh(u));
    return x.useMemo(() => uu(l, JSON.parse(d), o, i === "path"), [l, d, o, i])
}

function ey(l, i) {
    return Dh(l, i)
}

function Dh(l, i, u) {
    Pe(An(), "useRoutes() may be used only in the context of a <Router> component.");
    let {
        navigator: o
    } = x.useContext(Ht), {
        matches: d
    } = x.useContext(Yt), p = d[d.length - 1], m = p ? p.params : {}, h = p ? p.pathname : "/", b = p ? p.pathnameBase : "/", y = p && p.route;
    {
        let O = y && y.path || "";
        Rh(h, !y || O.endsWith("*") || O.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O==="/"?"*":`${O}/*`}">.`)
    }
    let j = Wt(),
        v;
    if (i) {
        let O = typeof i == "string" ? hl(i) : i;
        Pe(b === "/" || O.pathname?.startsWith(b), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${O.pathname}" was given in the \`location\` prop.`), v = O
    } else v = j;
    let S = v.pathname || "/",
        z = S;
    if (b !== "/") {
        let O = b.replace(/^\//, "").split("/");
        z = "/" + S.replace(/^\//, "").split("/").slice(O.length).join("/")
    }
    let M = xh(l, {
        pathname: z
    });
    $t(y || M != null, `No routes matched location "${v.pathname}${v.search}${v.hash}" `), $t(M == null || M[M.length - 1].route.element !== void 0 || M[M.length - 1].route.Component !== void 0 || M[M.length - 1].route.lazy !== void 0, `Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let E = ny(M && M.map(O => Object.assign({}, O, {
        params: Object.assign({}, m, O.params),
        pathname: Jt([b, o.encodeLocation ? o.encodeLocation(O.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : O.pathname]),
        pathnameBase: O.pathnameBase === "/" ? b : Jt([b, o.encodeLocation ? o.encodeLocation(O.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : O.pathnameBase])
    })), d, u);
    return i && E ? x.createElement(Cn.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                unstable_mask: void 0,
                ...v
            },
            navigationType: "POP"
        }
    }, E) : E
}

function ty() {
    let l = uy(),
        i = P0(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l),
        u = l instanceof Error ? l.stack : null,
        o = "rgba(200,200,200, 0.5)",
        d = {
            padding: "0.5rem",
            backgroundColor: o
        },
        p = {
            padding: "2px 4px",
            backgroundColor: o
        },
        m = null;
    return console.error("Error handled by React Router default ErrorBoundary:", l), m = x.createElement(x.Fragment, null, x.createElement("p", null, "💿 Hey developer 👋"), x.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", x.createElement("code", {
        style: p
    }, "ErrorBoundary"), " or", " ", x.createElement("code", {
        style: p
    }, "errorElement"), " prop on your route.")), x.createElement(x.Fragment, null, x.createElement("h2", null, "Unexpected Application Error!"), x.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, i), u ? x.createElement("pre", {
        style: d
    }, u) : null, m)
}
var ay = x.createElement(ty, null),
    Oh = class extends x.Component {
        constructor(l) {
            super(l), this.state = {
                location: l.location,
                revalidation: l.revalidation,
                error: l.error
            }
        }
        static getDerivedStateFromError(l) {
            return {
                error: l
            }
        }
        static getDerivedStateFromProps(l, i) {
            return i.location !== l.location || i.revalidation !== "idle" && l.revalidation === "idle" ? {
                error: l.error,
                location: l.location,
                revalidation: l.revalidation
            } : {
                error: l.error !== void 0 ? l.error : i.error,
                location: i.location,
                revalidation: l.revalidation || i.revalidation
            }
        }
        componentDidCatch(l, i) {
            this.props.onError ? this.props.onError(l, i) : console.error("React Router caught the following error during render", l)
        }
        render() {
            let l = this.state.error;
            if (this.context && typeof l == "object" && l && "digest" in l && typeof l.digest == "string") {
                const u = I0(l.digest);
                u && (l = u)
            }
            let i = l !== void 0 ? x.createElement(Yt.Provider, {
                value: this.props.routeContext
            }, x.createElement(du.Provider, {
                value: l,
                children: this.props.component
            })) : this.props.children;
            return this.context ? x.createElement(sy, {
                error: l
            }, i) : i
        }
    };
Oh.contextType = G0;
var Po = new WeakMap;

function sy({
    children: l,
    error: i
}) {
    let {
        basename: u
    } = x.useContext(Ht);
    if (typeof i == "object" && i && "digest" in i && typeof i.digest == "string") {
        let o = K0(i.digest);
        if (o) {
            let d = Po.get(i);
            if (d) throw d;
            let p = Nh(o.location, u);
            if (jh && !Po.get(i))
                if (p.isExternal || o.reloadDocument) window.location.href = p.absoluteURL || p.to;
                else {
                    const m = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(p.to, {
                        replace: o.replace
                    }));
                    throw Po.set(i, m), m
                } return x.createElement("meta", {
                httpEquiv: "refresh",
                content: `0;url=${p.absoluteURL||p.to}`
            })
        }
    }
    return l
}

function ly({
    routeContext: l,
    match: i,
    children: u
}) {
    let o = x.useContext(gl);
    return o && o.static && o.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = i.route.id), x.createElement(Yt.Provider, {
        value: l
    }, u)
}

function ny(l, i = [], u) {
    let o = u?.state;
    if (l == null) {
        if (!o) return null;
        if (o.errors) l = o.matches;
        else if (i.length === 0 && !o.initialized && o.matches.length > 0) l = o.matches;
        else return null
    }
    let d = l,
        p = o?.errors;
    if (p != null) {
        let j = d.findIndex(v => v.route.id && p?.[v.route.id] !== void 0);
        Pe(j >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`), d = d.slice(0, Math.min(d.length, j + 1))
    }
    let m = !1,
        h = -1;
    if (u && o) {
        m = o.renderFallback;
        for (let j = 0; j < d.length; j++) {
            let v = d[j];
            if ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (h = j), v.route.id) {
                let {
                    loaderData: S,
                    errors: z
                } = o, M = v.route.loader && !S.hasOwnProperty(v.route.id) && (!z || z[v.route.id] === void 0);
                if (v.route.lazy || M) {
                    u.isStatic && (m = !0), h >= 0 ? d = d.slice(0, h + 1) : d = [d[0]];
                    break
                }
            }
        }
    }
    let b = u?.onError,
        y = o && b ? (j, v) => {
            b(j, {
                location: o.location,
                params: o.matches?.[0]?.params ?? {},
                unstable_pattern: q0(o.matches),
                errorInfo: v
            })
        } : void 0;
    return d.reduceRight((j, v, S) => {
        let z, M = !1,
            E = null,
            O = null;
        o && (z = p && v.route.id ? p[v.route.id] : void 0, E = v.route.errorElement || ay, m && (h < 0 && S === 0 ? (Rh("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), M = !0, O = null) : h === S && (M = !0, O = v.route.hydrateFallbackElement || null)));
        let U = i.concat(d.slice(0, S + 1)),
            Z = () => {
                let V;
                return z ? V = E : M ? V = O : v.route.Component ? V = x.createElement(v.route.Component, null) : v.route.element ? V = v.route.element : V = j, x.createElement(ly, {
                    match: v,
                    routeContext: {
                        outlet: j,
                        matches: U,
                        isDataRoute: o != null
                    },
                    children: V
                })
            };
        return o && (v.route.ErrorBoundary || v.route.errorElement || S === 0) ? x.createElement(Oh, {
            location: o.location,
            revalidation: o.revalidation,
            component: E,
            error: z,
            children: Z(),
            routeContext: {
                outlet: null,
                matches: U,
                isDataRoute: !0
            },
            onError: y
        }) : Z()
    }, null)
}

function pu(l) {
    return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function cy(l) {
    let i = x.useContext(gl);
    return Pe(i, pu(l)), i
}

function ry(l) {
    let i = x.useContext(or);
    return Pe(i, pu(l)), i
}

function iy(l) {
    let i = x.useContext(Yt);
    return Pe(i, pu(l)), i
}

function mu(l) {
    let i = iy(l),
        u = i.matches[i.matches.length - 1];
    return Pe(u.route.id, `${l} can only be used on routes that contain a unique "id"`), u.route.id
}

function oy() {
    return mu("useRouteId")
}

function uy() {
    let l = x.useContext(du),
        i = ry("useRouteError"),
        u = mu("useRouteError");
    return l !== void 0 ? l : i.errors?.[u]
}

function dy() {
    let {
        router: l
    } = cy("useNavigate"), i = mu("useNavigate"), u = x.useRef(!1);
    return Ah(() => {
        u.current = !0
    }), x.useCallback(async (d, p = {}) => {
        $t(u.current, Ch), u.current && (typeof d == "number" ? await l.navigate(d) : await l.navigate(d, {
            fromRouteId: i,
            ...p
        }))
    }, [l, i])
}
var Ym = {};

function Rh(l, i, u) {
    !i && !Ym[l] && (Ym[l] = !0, $t(!1, u))
}
x.memo(fy);

function fy({
    routes: l,
    future: i,
    state: u,
    isStatic: o,
    onError: d
}) {
    return Dh(l, void 0, {
        state: u,
        isStatic: o,
        onError: d
    })
}

function Th(l) {
    return W0(l.context)
}

function mt(l) {
    Pe(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}

function py({
    basename: l = "/",
    children: i = null,
    location: u,
    navigationType: o = "POP",
    navigator: d,
    static: p = !1,
    unstable_useTransitions: m
}) {
    Pe(!An(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let h = l.replace(/^\/*/, "/"),
        b = x.useMemo(() => ({
            basename: h,
            navigator: d,
            static: p,
            unstable_useTransitions: m,
            future: {}
        }), [h, d, p, m]);
    typeof u == "string" && (u = hl(u));
    let {
        pathname: y = "/",
        search: j = "",
        hash: v = "",
        state: S = null,
        key: z = "default",
        unstable_mask: M
    } = u, E = x.useMemo(() => {
        let O = Na(y, h);
        return O == null ? null : {
            location: {
                pathname: O,
                search: j,
                hash: v,
                state: S,
                key: z,
                unstable_mask: M
            },
            navigationType: o
        }
    }, [h, y, j, v, S, z, o, M]);
    return $t(E != null, `<Router basename="${h}"> is not able to match the URL "${y}${j}${v}" because it does not start with the basename, so the <Router> won't render anything.`), E == null ? null : x.createElement(Ht.Provider, {
        value: b
    }, x.createElement(Cn.Provider, {
        children: i,
        value: E
    }))
}

function my({
    children: l,
    location: i
}) {
    return ey(eu(l), i)
}

function eu(l, i = []) {
    let u = [];
    return x.Children.forEach(l, (o, d) => {
        if (!x.isValidElement(o)) return;
        let p = [...i, d];
        if (o.type === x.Fragment) {
            u.push.apply(u, eu(o.props.children, p));
            return
        }
        Pe(o.type === mt, `[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Pe(!o.props.index || !o.props.children, "An index route cannot have child routes.");
        let m = {
            id: o.props.id || p.join("-"),
            caseSensitive: o.props.caseSensitive,
            element: o.props.element,
            Component: o.props.Component,
            index: o.props.index,
            path: o.props.path,
            middleware: o.props.middleware,
            loader: o.props.loader,
            action: o.props.action,
            hydrateFallbackElement: o.props.hydrateFallbackElement,
            HydrateFallback: o.props.HydrateFallback,
            errorElement: o.props.errorElement,
            ErrorBoundary: o.props.ErrorBoundary,
            hasErrorBoundary: o.props.hasErrorBoundary === !0 || o.props.ErrorBoundary != null || o.props.errorElement != null,
            shouldRevalidate: o.props.shouldRevalidate,
            handle: o.props.handle,
            lazy: o.props.lazy
        };
        o.props.children && (m.children = eu(o.props.children, p)), u.push(m)
    }), u
}
var tr = "get",
    ar = "application/x-www-form-urlencoded";

function ur(l) {
    return typeof HTMLElement < "u" && l instanceof HTMLElement
}

function hy(l) {
    return ur(l) && l.tagName.toLowerCase() === "button"
}

function gy(l) {
    return ur(l) && l.tagName.toLowerCase() === "form"
}

function xy(l) {
    return ur(l) && l.tagName.toLowerCase() === "input"
}

function yy(l) {
    return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey)
}

function vy(l, i) {
    return l.button === 0 && (!i || i === "_self") && !yy(l)
}
var Zc = null;

function by() {
    if (Zc === null) try {
        new FormData(document.createElement("form"), 0), Zc = !1
    } catch {
        Zc = !0
    }
    return Zc
}
var jy = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

function qo(l) {
    return l != null && !jy.has(l) ? ($t(!1, `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ar}"`), null) : l
}

function Ny(l, i) {
    let u, o, d, p, m;
    if (gy(l)) {
        let h = l.getAttribute("action");
        o = h ? Na(h, i) : null, u = l.getAttribute("method") || tr, d = qo(l.getAttribute("enctype")) || ar, p = new FormData(l)
    } else if (hy(l) || xy(l) && (l.type === "submit" || l.type === "image")) {
        let h = l.form;
        if (h == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let b = l.getAttribute("formaction") || h.getAttribute("action");
        if (o = b ? Na(b, i) : null, u = l.getAttribute("formmethod") || h.getAttribute("method") || tr, d = qo(l.getAttribute("formenctype")) || qo(h.getAttribute("enctype")) || ar, p = new FormData(h, l), !by()) {
            let {
                name: y,
                type: j,
                value: v
            } = l;
            if (j === "image") {
                let S = y ? `${y}.` : "";
                p.append(`${S}x`, "0"), p.append(`${S}y`, "0")
            } else y && p.append(y, v)
        }
    } else {
        if (ur(l)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        u = tr, o = null, d = ar, m = l
    }
    return p && d === "text/plain" && (m = p, p = void 0), {
        action: o,
        method: u.toLowerCase(),
        encType: d,
        formData: p,
        body: m
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");

function hu(l, i) {
    if (l === !1 || l === null || typeof l > "u") throw new Error(i)
}

function Sy(l, i, u, o) {
    let d = typeof l == "string" ? new URL(l, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : l;
    return u ? d.pathname.endsWith("/") ? d.pathname = `${d.pathname}_.${o}` : d.pathname = `${d.pathname}.${o}` : d.pathname === "/" ? d.pathname = `_root.${o}` : i && Na(d.pathname, i) === "/" ? d.pathname = `${i.replace(/\/$/,"")}/_root.${o}` : d.pathname = `${d.pathname.replace(/\/$/,"")}.${o}`, d
}
async function wy(l, i) {
    if (l.id in i) return i[l.id];
    try {
        let u = await import(l.module);
        return i[l.id] = u, u
    } catch (u) {
        return console.error(`Error loading route module \`${l.module}\`, reloading page...`), console.error(u), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {})
    }
}

function Ey(l) {
    return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string"
}
async function Cy(l, i, u) {
    let o = await Promise.all(l.map(async d => {
        let p = i.routes[d.route.id];
        if (p) {
            let m = await wy(p, u);
            return m.links ? m.links() : []
        }
        return []
    }));
    return Oy(o.flat(1).filter(Ey).filter(d => d.rel === "stylesheet" || d.rel === "preload").map(d => d.rel === "stylesheet" ? {
        ...d,
        rel: "prefetch",
        as: "style"
    } : {
        ...d,
        rel: "prefetch"
    }))
}

function Gm(l, i, u, o, d, p) {
    let m = (b, y) => u[y] ? b.route.id !== u[y].route.id : !0,
        h = (b, y) => u[y].pathname !== b.pathname || u[y].route.path?.endsWith("*") && u[y].params["*"] !== b.params["*"];
    return p === "assets" ? i.filter((b, y) => m(b, y) || h(b, y)) : p === "data" ? i.filter((b, y) => {
        let j = o.routes[b.route.id];
        if (!j || !j.hasLoader) return !1;
        if (m(b, y) || h(b, y)) return !0;
        if (b.route.shouldRevalidate) {
            let v = b.route.shouldRevalidate({
                currentUrl: new URL(d.pathname + d.search + d.hash, window.origin),
                currentParams: u[0]?.params || {},
                nextUrl: new URL(l, window.origin),
                nextParams: b.params,
                defaultShouldRevalidate: !0
            });
            if (typeof v == "boolean") return v
        }
        return !0
    }) : []
}

function Ay(l, i, {
    includeHydrateFallback: u
} = {}) {
    return My(l.map(o => {
        let d = i.routes[o.route.id];
        if (!d) return [];
        let p = [d.module];
        return d.clientActionModule && (p = p.concat(d.clientActionModule)), d.clientLoaderModule && (p = p.concat(d.clientLoaderModule)), u && d.hydrateFallbackModule && (p = p.concat(d.hydrateFallbackModule)), d.imports && (p = p.concat(d.imports)), p
    }).flat(1))
}

function My(l) {
    return [...new Set(l)]
}

function Dy(l) {
    let i = {},
        u = Object.keys(l).sort();
    for (let o of u) i[o] = l[o];
    return i
}

function Oy(l, i) {
    let u = new Set;
    return new Set(i), l.reduce((o, d) => {
        let p = JSON.stringify(Dy(d));
        return u.has(p) || (u.add(p), o.push({
            key: p,
            link: d
        })), o
    }, [])
}

function _h() {
    let l = x.useContext(gl);
    return hu(l, "You must render this element inside a <DataRouterContext.Provider> element"), l
}

function Ry() {
    let l = x.useContext(or);
    return hu(l, "You must render this element inside a <DataRouterStateContext.Provider> element"), l
}
var gu = x.createContext(void 0);
gu.displayName = "FrameworkContext";

function zh() {
    let l = x.useContext(gu);
    return hu(l, "You must render this element inside a <HydratedRouter> element"), l
}

function Ty(l, i) {
    let u = x.useContext(gu),
        [o, d] = x.useState(!1),
        [p, m] = x.useState(!1),
        {
            onFocus: h,
            onBlur: b,
            onMouseEnter: y,
            onMouseLeave: j,
            onTouchStart: v
        } = i,
        S = x.useRef(null);
    x.useEffect(() => {
        if (l === "render" && m(!0), l === "viewport") {
            let E = U => {
                    U.forEach(Z => {
                        m(Z.isIntersecting)
                    })
                },
                O = new IntersectionObserver(E, {
                    threshold: .5
                });
            return S.current && O.observe(S.current), () => {
                O.disconnect()
            }
        }
    }, [l]), x.useEffect(() => {
        if (o) {
            let E = setTimeout(() => {
                m(!0)
            }, 100);
            return () => {
                clearTimeout(E)
            }
        }
    }, [o]);
    let z = () => {
            d(!0)
        },
        M = () => {
            d(!1), m(!1)
        };
    return u ? l !== "intent" ? [p, S, {}] : [p, S, {
        onFocus: mn(h, z),
        onBlur: mn(b, M),
        onMouseEnter: mn(y, z),
        onMouseLeave: mn(j, M),
        onTouchStart: mn(v, z)
    }] : [!1, S, {}]
}

function mn(l, i) {
    return u => {
        l && l(u), u.defaultPrevented || i(u)
    }
}

function _y({
    page: l,
    ...i
}) {
    let {
        router: u
    } = _h(), o = x.useMemo(() => xh(u.routes, l, u.basename), [u.routes, l, u.basename]);
    return o ? x.createElement(ky, {
        page: l,
        matches: o,
        ...i
    }) : null
}

function zy(l) {
    let {
        manifest: i,
        routeModules: u
    } = zh(), [o, d] = x.useState([]);
    return x.useEffect(() => {
        let p = !1;
        return Cy(l, i, u).then(m => {
            p || d(m)
        }), () => {
            p = !0
        }
    }, [l, i, u]), o
}

function ky({
    page: l,
    matches: i,
    ...u
}) {
    let o = Wt(),
        {
            future: d,
            manifest: p,
            routeModules: m
        } = zh(),
        {
            basename: h
        } = _h(),
        {
            loaderData: b,
            matches: y
        } = Ry(),
        j = x.useMemo(() => Gm(l, i, y, p, o, "data"), [l, i, y, p, o]),
        v = x.useMemo(() => Gm(l, i, y, p, o, "assets"), [l, i, y, p, o]),
        S = x.useMemo(() => {
            if (l === o.pathname + o.search + o.hash) return [];
            let E = new Set,
                O = !1;
            if (i.forEach(Z => {
                    let V = p.routes[Z.route.id];
                    !V || !V.hasLoader || (!j.some(J => J.route.id === Z.route.id) && Z.route.id in b && m[Z.route.id]?.shouldRevalidate || V.hasClientLoader ? O = !0 : E.add(Z.route.id))
                }), E.size === 0) return [];
            let U = Sy(l, h, d.unstable_trailingSlashAwareDataRequests, "data");
            return O && E.size > 0 && U.searchParams.set("_routes", i.filter(Z => E.has(Z.route.id)).map(Z => Z.route.id).join(",")), [U.pathname + U.search]
        }, [h, d.unstable_trailingSlashAwareDataRequests, b, o, p, j, i, l, m]),
        z = x.useMemo(() => Ay(v, p), [v, p]),
        M = zy(v);
    return x.createElement(x.Fragment, null, S.map(E => x.createElement("link", {
        key: E,
        rel: "prefetch",
        as: "fetch",
        href: E,
        ...u
    })), z.map(E => x.createElement("link", {
        key: E,
        rel: "modulepreload",
        href: E,
        ...u
    })), M.map(({
        key: E,
        link: O
    }) => x.createElement("link", {
        key: E,
        nonce: u.nonce,
        ...O,
        crossOrigin: O.crossOrigin ?? u.crossOrigin
    })))
}

function Hy(...l) {
    return i => {
        l.forEach(u => {
            typeof u == "function" ? u(i) : u != null && (u.current = i)
        })
    }
}
var Ly = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    Ly && (window.__reactRouterVersion = "7.13.1")
} catch {}

function Uy({
    basename: l,
    children: i,
    unstable_useTransitions: u,
    window: o
}) {
    let d = x.useRef();
    d.current == null && (d.current = g0({
        window: o,
        v5Compat: !0
    }));
    let p = d.current,
        [m, h] = x.useState({
            action: p.action,
            location: p.location
        }),
        b = x.useCallback(y => {
            u === !1 ? h(y) : x.startTransition(() => h(y))
        }, [u]);
    return x.useLayoutEffect(() => p.listen(b), [p, b]), x.createElement(py, {
        basename: l,
        children: i,
        location: m.location,
        navigationType: m.action,
        navigator: p,
        unstable_useTransitions: u
    })
}
var kh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    be = x.forwardRef(function({
        onClick: i,
        discover: u = "render",
        prefetch: o = "none",
        relative: d,
        reloadDocument: p,
        replace: m,
        unstable_mask: h,
        state: b,
        target: y,
        to: j,
        preventScrollReset: v,
        viewTransition: S,
        unstable_defaultShouldRevalidate: z,
        ...M
    }, E) {
        let {
            basename: O,
            navigator: U,
            unstable_useTransitions: Z
        } = x.useContext(Ht), V = typeof j == "string" && kh.test(j), J = Nh(j, O);
        j = J.to;
        let ee = J0(j, {
                relative: d
            }),
            G = Wt(),
            X = null;
        if (h) {
            let je = uu(h, [], G.unstable_mask ? G.unstable_mask.pathname : "/", !0);
            O !== "/" && (je.pathname = je.pathname === "/" ? O : Jt([O, je.pathname])), X = U.createHref(je)
        }
        let [A, ae, ze] = Ty(o, M), ne = Yy(j, {
            replace: m,
            unstable_mask: h,
            state: b,
            target: y,
            preventScrollReset: v,
            relative: d,
            viewTransition: S,
            unstable_defaultShouldRevalidate: z,
            unstable_useTransitions: Z
        });

        function ue(je) {
            i && i(je), je.defaultPrevented || ne(je)
        }
        let Be = !(J.isExternal || p),
            ke = x.createElement("a", {
                ...M,
                ...ze,
                href: (Be ? X : void 0) || J.absoluteURL || ee,
                onClick: Be ? ue : i,
                ref: Hy(E, ae),
                target: y,
                "data-discover": !V && u === "render" ? "true" : void 0
            });
        return A && !V ? x.createElement(x.Fragment, null, ke, x.createElement(_y, {
            page: ee
        })) : ke
    });
be.displayName = "Link";
var By = x.forwardRef(function({
    "aria-current": i = "page",
    caseSensitive: u = !1,
    className: o = "",
    end: d = !1,
    style: p,
    to: m,
    viewTransition: h,
    children: b,
    ...y
}, j) {
    let v = Mn(m, {
            relative: y.relative
        }),
        S = Wt(),
        z = x.useContext(or),
        {
            navigator: M,
            basename: E
        } = x.useContext(Ht),
        O = z != null && Zy(v) && h === !0,
        U = M.encodeLocation ? M.encodeLocation(v).pathname : v.pathname,
        Z = S.pathname,
        V = z && z.navigation && z.navigation.location ? z.navigation.location.pathname : null;
    u || (Z = Z.toLowerCase(), V = V ? V.toLowerCase() : null, U = U.toLowerCase()), V && E && (V = Na(V, E) || V);
    const J = U !== "/" && U.endsWith("/") ? U.length - 1 : U.length;
    let ee = Z === U || !d && Z.startsWith(U) && Z.charAt(J) === "/",
        G = V != null && (V === U || !d && V.startsWith(U) && V.charAt(U.length) === "/"),
        X = {
            isActive: ee,
            isPending: G,
            isTransitioning: O
        },
        A = ee ? i : void 0,
        ae;
    typeof o == "function" ? ae = o(X) : ae = [o, ee ? "active" : null, G ? "pending" : null, O ? "transitioning" : null].filter(Boolean).join(" ");
    let ze = typeof p == "function" ? p(X) : p;
    return x.createElement(be, {
        ...y,
        "aria-current": A,
        className: ae,
        ref: j,
        style: ze,
        to: m,
        viewTransition: h
    }, typeof b == "function" ? b(X) : b)
});
By.displayName = "NavLink";
var Py = x.forwardRef(({
    discover: l = "render",
    fetcherKey: i,
    navigate: u,
    reloadDocument: o,
    replace: d,
    state: p,
    method: m = tr,
    action: h,
    onSubmit: b,
    relative: y,
    preventScrollReset: j,
    viewTransition: v,
    unstable_defaultShouldRevalidate: S,
    ...z
}, M) => {
    let {
        unstable_useTransitions: E
    } = x.useContext(Ht), O = Qy(), U = Vy(h, {
        relative: y
    }), Z = m.toLowerCase() === "get" ? "get" : "post", V = typeof h == "string" && kh.test(h), J = ee => {
        if (b && b(ee), ee.defaultPrevented) return;
        ee.preventDefault();
        let G = ee.nativeEvent.submitter,
            X = G?.getAttribute("formmethod") || m,
            A = () => O(G || ee.currentTarget, {
                fetcherKey: i,
                method: X,
                navigate: u,
                replace: d,
                state: p,
                relative: y,
                preventScrollReset: j,
                viewTransition: v,
                unstable_defaultShouldRevalidate: S
            });
        E && u !== !1 ? x.startTransition(() => A()) : A()
    };
    return x.createElement("form", {
        ref: M,
        method: Z,
        action: U,
        onSubmit: o ? b : J,
        ...z,
        "data-discover": !V && l === "render" ? "true" : void 0
    })
});
Py.displayName = "Form";

function qy(l) {
    return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}

function Hh(l) {
    let i = x.useContext(gl);
    return Pe(i, qy(l)), i
}

function Yy(l, {
    target: i,
    replace: u,
    unstable_mask: o,
    state: d,
    preventScrollReset: p,
    relative: m,
    viewTransition: h,
    unstable_defaultShouldRevalidate: b,
    unstable_useTransitions: y
} = {}) {
    let j = fu(),
        v = Wt(),
        S = Mn(l, {
            relative: m
        });
    return x.useCallback(z => {
        if (vy(z, i)) {
            z.preventDefault();
            let M = u !== void 0 ? u : xn(v) === xn(S),
                E = () => j(l, {
                    replace: M,
                    unstable_mask: o,
                    state: d,
                    preventScrollReset: p,
                    relative: m,
                    viewTransition: h,
                    unstable_defaultShouldRevalidate: b
                });
            y ? x.startTransition(() => E()) : E()
        }
    }, [v, j, S, u, o, d, i, l, p, m, h, b, y])
}
var Gy = 0,
    Xy = () => `__${String(++Gy)}__`;

function Qy() {
    let {
        router: l
    } = Hh("useSubmit"), {
        basename: i
    } = x.useContext(Ht), u = oy(), o = l.fetch, d = l.navigate;
    return x.useCallback(async (p, m = {}) => {
        let {
            action: h,
            method: b,
            encType: y,
            formData: j,
            body: v
        } = Ny(p, i);
        if (m.navigate === !1) {
            let S = m.fetcherKey || Xy();
            await o(S, u, m.action || h, {
                unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
                preventScrollReset: m.preventScrollReset,
                formData: j,
                body: v,
                formMethod: m.method || b,
                formEncType: m.encType || y,
                flushSync: m.flushSync
            })
        } else await d(m.action || h, {
            unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
            preventScrollReset: m.preventScrollReset,
            formData: j,
            body: v,
            formMethod: m.method || b,
            formEncType: m.encType || y,
            replace: m.replace,
            state: m.state,
            fromRouteId: u,
            flushSync: m.flushSync,
            viewTransition: m.viewTransition
        })
    }, [o, d, i, u])
}

function Vy(l, {
    relative: i
} = {}) {
    let {
        basename: u
    } = x.useContext(Ht), o = x.useContext(Yt);
    Pe(o, "useFormAction must be used inside a RouteContext");
    let [d] = o.matches.slice(-1), p = {
        ...Mn(l || ".", {
            relative: i
        })
    }, m = Wt();
    if (l == null) {
        p.search = m.search;
        let h = new URLSearchParams(p.search),
            b = h.getAll("index");
        if (b.some(j => j === "")) {
            h.delete("index"), b.filter(v => v).forEach(v => h.append("index", v));
            let j = h.toString();
            p.search = j ? `?${j}` : ""
        }
    }
    return (!l || l === ".") && d.route.index && (p.search = p.search ? p.search.replace(/^\?/, "?index&") : "?index"), u !== "/" && (p.pathname = p.pathname === "/" ? u : Jt([u, p.pathname])), xn(p)
}

function Zy(l, {
    relative: i
} = {}) {
    let u = x.useContext(wh);
    Pe(u != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {
        basename: o
    } = Hh("useViewTransitionState"), d = Mn(l, {
        relative: i
    });
    if (!u.isTransitioning) return !1;
    let p = Na(u.currentLocation.pathname, o) || u.currentLocation.pathname,
        m = Na(u.nextLocation.pathname, o) || u.nextLocation.pathname;
    return nr(d.pathname, m) != null || nr(d.pathname, p) != null
}
var Lh = gh();
const Ky = mh(Lh),
    pl = [{
        id: "treasure",
        name: "镇馆之宝",
        nameEn: "Treasures",
        description: "馆藏最珍贵的精品，代表小猪博物馆的最高收藏水准",
        icon: "Crown"
    }, {
        id: "antique",
        name: "古董收藏",
        nameEn: "Antiques",
        description: "历经岁月沉淀的古老猪形艺术品，承载着历史的记忆",
        icon: "History"
    }, {
        id: "contemporary",
        name: "当代艺术",
        nameEn: "Contemporary",
        description: "现代艺术家创作的猪主题作品，展现当代审美",
        icon: "Palette"
    }, {
        id: "folk",
        name: "民俗民艺",
        nameEn: "Folk Art",
        description: "民间传统工艺制作的猪形器物，充满生活气息",
        icon: "Heart"
    }, {
        id: "western",
        name: "欧美艺术",
        nameEn: "Western Art",
        description: "来自欧美国家的猪主题艺术品，展现异域风情",
        icon: "Globe"
    }, {
        id: "japanese",
        name: "日本艺术",
        nameEn: "Japanese Art",
        description: "日本风格的猪形工艺品，精致典雅",
        icon: "Cherry"
    }, {
        id: "wall",
        name: "壁挂艺术",
        nameEn: "Wall Art",
        description: "可悬挂展示的猪主题装饰艺术品",
        icon: "Frame"
    }],
    Uh = [{
        id: "1",
        name: "搪瓷招财猪",
        category: "antique",
        country: "中国",
        era: "1980s",
        collectionDate: "2023-05-10",
        material: "搪瓷",
        dimensions: "12×8×10",
        description: "80年代工厂出品，红底白猪，寓意招财进宝，保存完好。这件搪瓷猪来自浙江的一家老工厂，是当时流行的居家摆件。釉面光滑，色彩鲜艳，底部印有工厂标志，具有较高的收藏价值。",
        status: "available",
        price: 120,
        images: ["/images/item-enamel-pig.png"],
        tags: ["搪瓷", "招财", "复古", "80年代"],
        story: "这件搪瓷猪是我从一位老工人手中收来的，他说这是当年工厂的奖品，一直珍藏至今。",
        isRecommended: !0,
        isNew: !1
    }, {
        id: "2",
        name: "陶瓷存钱猪",
        category: "folk",
        country: "中国",
        era: "1990s",
        collectionDate: "2023-06-15",
        material: "陶瓷",
        dimensions: "10×9×11",
        description: "手工绘制花纹，底部可开盖存钱，陪伴两代人的成长。这件青花瓷猪采用传统景德镇工艺制作，釉面温润，青花图案典雅大方。",
        status: "collection",
        price: 0,
        images: ["/images/item-ceramic-pig.png"],
        tags: ["陶瓷", "存钱", "童年", "青花"],
        story: "这是我童年时的存钱罐，陪伴我度过了整个学生时代，现在已成为珍贵的回忆。",
        isRecommended: !1,
        isNew: !1
    }, {
        id: "3",
        name: "布艺小猪抱枕",
        category: "contemporary",
        country: "中国",
        era: "2015",
        collectionDate: "2024-01-08",
        material: "棉麻",
        dimensions: "35×35×15",
        description: "手工缝制，采用植物染布，柔软亲肤，断舍离前的最爱。这件作品出自一位独立设计师之手，每一件都是独一无二的。",
        status: "sold",
        price: 0,
        images: ["/images/item-fabric-pig.png"],
        tags: ["布艺", "手工", "断舍离", "植物染"],
        story: "这件抱枕曾是我沙发上的常客，现在它找到了新的主人，继续传递温暖。",
        isRecommended: !1,
        isNew: !0
    }, {
        id: "4",
        name: "铁皮音乐猪",
        category: "wall",
        country: "德国",
        era: "1970s",
        collectionDate: "2023-09-20",
        material: "铁皮/机械",
        dimensions: "15×10×8",
        description: "上弦可播放简单旋律，表面烤漆略有斑驳，工业风装饰佳品。这件德国制造的机械音乐猪，内部精密的齿轮结构至今仍运转良好。",
        status: "available",
        price: 280,
        images: ["/images/item-tin-pig.png"],
        tags: ["铁皮", "音乐", "欧美", "机械"],
        story: "从柏林的一家古董店淘来，店主说这件音乐盒曾属于一位德国老太太。",
        isRecommended: !0,
        isNew: !1
    }, {
        id: "5",
        name: "木雕小猪摆件",
        category: "japanese",
        country: "日本",
        era: "2000s",
        collectionDate: "2024-02-01",
        material: "榉木",
        dimensions: "9×6×5",
        description: "北海道匠人雕刻，线条圆润，表面涂天然木蜡油。这件木雕作品体现了日本工匠的精湛技艺，每一刀都恰到好处。",
        status: "available",
        price: 350,
        images: ["/images/item-wood-pig.png"],
        tags: ["木雕", "日本", "工艺", "手工"],
        story: "在北海道旅行时，亲自拜访了这位木雕匠人，这件作品是他的代表作之一。",
        isRecommended: !0,
        isNew: !0
    }, {
        id: "6",
        name: "水晶切割猪",
        category: "western",
        country: "奥地利",
        era: "2010s",
        collectionDate: "2024-03-15",
        material: "水晶玻璃",
        dimensions: "8×5×6",
        description: "施华洛世奇风格水晶切割工艺，折射七彩光芒，欧美现代装饰艺术精品。每一个切面都经过精密计算，在光线下璀璨夺目。",
        status: "available",
        price: 580,
        images: ["/images/item-glass-pig.png"],
        tags: ["水晶", "欧美", "现代", "装饰"],
        story: "这件水晶猪来自维也纳的一位收藏家，是欧洲水晶工艺的完美体现。",
        isRecommended: !0,
        isNew: !0
    }, {
        id: "7",
        name: "青铜猪钮印章",
        category: "treasure",
        country: "中国",
        era: "清代",
        collectionDate: "2023-08-20",
        material: "青铜",
        dimensions: "3×3×4",
        description: '清代文人书房用品，青铜铸造，底部篆刻"福寿"二字，印文清晰。这件印章造型古朴，包浆自然，是文房收藏中的精品。',
        status: "collection",
        price: 0,
        images: ["/images/item-bronze-pig.png"],
        tags: ["青铜", "印章", "文房", "清代"],
        story: "从一位资深藏家手中转让而来，据说曾属于一位清代秀才。",
        isRecommended: !0,
        isNew: !1
    }, {
        id: "8",
        name: "软陶花猪",
        category: "contemporary",
        country: "中国",
        era: "2022",
        collectionDate: "2024-04-10",
        material: "软陶",
        dimensions: "12×10×10",
        description: "当代软陶艺术家手工制作，色彩鲜艳，造型可爱，头顶花朵装饰。这件作品展现了当代手工艺人的创意与技艺。",
        status: "available",
        price: 168,
        images: ["/images/item-clay-pig.png"],
        tags: ["软陶", "手工", "当代", "艺术"],
        story: "支持本土艺术家，这件作品来自一位年轻的软陶创作者。",
        isRecommended: !1,
        isNew: !0
    }, {
        id: "9",
        name: "像素艺术猪",
        category: "contemporary",
        country: "美国",
        era: "2023",
        collectionDate: "2024-05-01",
        material: "数字艺术/亚克力",
        dimensions: "30×30×2",
        description: "8-bit复古游戏风格像素艺术，数字藏品实体化，亚克力材质装裱。这件作品将数字艺术与实体展示完美结合。",
        status: "available",
        price: 220,
        images: ["/images/item-pixel-pig.png"],
        tags: ["像素", "数字艺术", "当代", "游戏"],
        story: "从美国一位数字艺术家处购得，限量99件的实体版本。",
        isRecommended: !1,
        isNew: !0
    }],
    tu = [{
        id: "ORD001",
        itemId: "3",
        itemName: "布艺小猪抱枕",
        buyerName: "张小美",
        buyerEmail: "zhangxiaomei@example.com",
        buyerPhone: "138****8888",
        buyerAddress: "上海市浦东新区***",
        price: 168,
        status: "completed",
        createdAt: "2024-01-15",
        paidAt: "2024-01-15",
        shippedAt: "2024-01-16",
        completedAt: "2024-01-18"
    }, {
        id: "ORD002",
        itemId: "5",
        itemName: "木雕小猪摆件",
        buyerName: "李大明",
        buyerEmail: "lidaming@example.com",
        buyerPhone: "139****9999",
        buyerAddress: "北京市海淀区***",
        price: 350,
        status: "shipped",
        createdAt: "2024-02-05",
        paidAt: "2024-02-05",
        shippedAt: "2024-02-06"
    }, {
        id: "ORD003",
        itemId: "1",
        itemName: "搪瓷招财猪",
        buyerName: "王小红",
        buyerEmail: "wangxiaohong@example.com",
        buyerPhone: "137****7777",
        buyerAddress: "广州市天河区***",
        price: 120,
        status: "pending",
        createdAt: "2024-05-20"
    }],
    Bh = [{
        id: "MSG001",
        name: "陈艺术",
        email: "chenyishu@example.com",
        content: "您好，我对那件木雕小猪很感兴趣，请问可以议价吗？",
        createdAt: "2024-05-18",
        isReplied: !0,
        reply: "您好，感谢您的关注！这件木雕作品是北海道匠人手工制作，价格已经是成本价了。如果您真心喜欢，可以包邮给您。",
        replyAt: "2024-05-18"
    }, {
        id: "MSG002",
        name: "刘收藏",
        email: "liushoucang@example.com",
        content: "网站设计得很精美，藏品也很有特色，期待更多上新！",
        createdAt: "2024-05-19",
        isReplied: !1
    }, {
        id: "MSG003",
        name: "赵文艺",
        email: "zhaowenyi@example.com",
        content: "请问那件清代印章可以出证书吗？",
        createdAt: "2024-05-20",
        isReplied: !0,
        reply: "您好，这件印章可以附带收藏证书，证书上会详细记录藏品的来源和年代信息。",
        replyAt: "2024-05-20"
    }],
    Fa = {
        siteName: "网上小猪博物馆",
        siteNameEn: "51pig Museum",
        contactEmail: "contact@51pig.com",
        contactPhone: "400-888-8888",
        wechatId: "museum51pig",
        wechatPayEnabled: !0,
        alipayEnabled: !0,
        paypalEnabled: !1
    },
    Xm = {
        username: "admin",
        password: "admin123"
    },
    Ph = x.createContext(void 0);

function Iy({
    children: l
}) {
    const [i, u] = x.useState(Uh), [o, d] = x.useState(() => {
        if (typeof window < "u") {
            const ne = localStorage.getItem("favorites");
            return ne ? JSON.parse(ne) : []
        }
        return []
    }), [p, m] = x.useState(() => {
        if (typeof window < "u") {
            const ne = localStorage.getItem("cart");
            return ne ? JSON.parse(ne) : []
        }
        return []
    }), [h, b] = x.useState(""), [y, j] = x.useState(null), [v, S] = x.useState(null), [z, M] = x.useState(!1), [E, O] = x.useState(null), U = x.useCallback(ne => {
        d(ue => {
            const Be = ue.includes(ne) ? ue.filter(ke => ke !== ne) : [...ue, ne];
            return localStorage.setItem("favorites", JSON.stringify(Be)), Be
        })
    }, []), Z = x.useCallback(ne => o.includes(ne), [o]), V = x.useCallback(ne => {
        if (ne.status !== "available") {
            A("该商品暂时无法购买", "error");
            return
        }
        m(ue => {
            const Be = ue.find(je => je.item.id === ne.id);
            let ke;
            return Be ? ke = ue.map(je => je.item.id === ne.id ? {
                ...je,
                quantity: je.quantity + 1
            } : je) : ke = [...ue, {
                item: ne,
                quantity: 1,
                addedAt: new Date().toISOString()
            }], localStorage.setItem("cart", JSON.stringify(ke)), A("已添加到购物车", "success"), ke
        })
    }, []), J = x.useCallback(ne => {
        m(ue => {
            const Be = ue.filter(ke => ke.item.id !== ne);
            return localStorage.setItem("cart", JSON.stringify(Be)), Be
        })
    }, []), ee = x.useCallback(() => {
        m([]), localStorage.removeItem("cart")
    }, []), G = p.reduce((ne, ue) => ne + ue.item.price * ue.quantity, 0), X = i.filter(ne => {
        const ue = h.toLowerCase();
        return ne.name.toLowerCase().includes(ue) || ne.description.toLowerCase().includes(ue) || ne.tags.some(Be => Be.toLowerCase().includes(ue))
    }), A = x.useCallback((ne, ue = "info") => {
        O({
            message: ne,
            type: ue
        }), setTimeout(() => {
            O(null)
        }, 3e3)
    }, []), ae = x.useCallback(() => {
        O(null)
    }, []), ze = {
        items: i,
        setItems: u,
        favorites: o,
        toggleFavorite: U,
        isFavorite: Z,
        cart: p,
        addToCart: V,
        removeFromCart: J,
        clearCart: ee,
        cartTotal: G,
        searchQuery: h,
        setSearchQuery: b,
        searchResults: X,
        selectedCategory: y,
        setSelectedCategory: j,
        selectedStatus: v,
        setSelectedStatus: S,
        isAdmin: z,
        setIsAdmin: M,
        notification: E,
        showNotification: A,
        hideNotification: ae
    };
    return n.jsxs(Ph.Provider, {
        "code-path": "src/contexts/AppContext.tsx:182:5",
        value: ze,
        children: [l, E && n.jsx("div", {
            "code-path": "src/contexts/AppContext.tsx:185:9",
            className: `fixed bottom-4 right-4 z-50 px-6 py-3 rounded-xl shadow-lg transition-all duration-300 ${E.type==="success"?"bg-green-500 text-white":E.type==="error"?"bg-red-500 text-white":"bg-[#ff7e5d] text-white"}`,
            children: E.message
        })]
    })
}

function ht() {
    const l = x.useContext(Ph);
    if (l === void 0) throw new Error("useApp must be used within an AppProvider");
    return l
}
const Jy = l => l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    Fy = l => l.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, u, o) => o ? o.toUpperCase() : u.toLowerCase()),
    Qm = l => {
        const i = Fy(l);
        return i.charAt(0).toUpperCase() + i.slice(1)
    },
    qh = (...l) => l.filter((i, u, o) => !!i && i.trim() !== "" && o.indexOf(i) === u).join(" ").trim(),
    $y = l => {
        for (const i in l)
            if (i.startsWith("aria-") || i === "role" || i === "title") return !0
    };
var Wy = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const ev = x.forwardRef(({
    color: l = "currentColor",
    size: i = 24,
    strokeWidth: u = 2,
    absoluteStrokeWidth: o,
    className: d = "",
    children: p,
    iconNode: m,
    ...h
}, b) => x.createElement("svg", {
    ref: b,
    ...Wy,
    width: i,
    height: i,
    stroke: l,
    strokeWidth: o ? Number(u) * 24 / Number(i) : u,
    className: qh("lucide", d),
    ...!p && !$y(h) && {
        "aria-hidden": "true"
    },
    ...h
}, [...m.map(([y, j]) => x.createElement(y, j)), ...Array.isArray(p) ? p : [p]]));
const re = (l, i) => {
    const u = x.forwardRef(({
        className: o,
        ...d
    }, p) => x.createElement(ev, {
        ref: p,
        iconNode: i,
        className: qh(`lucide-${Jy(Qm(l))}`, `lucide-${l}`, o),
        ...d
    }));
    return u.displayName = Qm(l), u
};
const tv = [
        ["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }],
        ["path", {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }]
    ],
    fl = re("arrow-right", tv);
const av = [
        ["path", {
            d: "M8 2v4",
            key: "1cmpym"
        }],
        ["path", {
            d: "M16 2v4",
            key: "4m81vk"
        }],
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }],
        ["path", {
            d: "M3 10h18",
            key: "8toen8"
        }]
    ],
    sv = re("calendar", av);
const lv = [
        ["path", {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }]
    ],
    js = re("check", lv);
const nv = [
        ["path", {
            d: "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",
            key: "cvxqlc"
        }],
        ["path", {
            d: "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",
            key: "1ostrc"
        }],
        ["path", {
            d: "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12",
            key: "hqx58h"
        }],
        ["path", {
            d: "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z",
            key: "eykp1o"
        }]
    ],
    cv = re("cherry", nv);
const rv = [
        ["path", {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }]
    ],
    iv = re("chevron-left", rv);
const ov = [
        ["path", {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }]
    ],
    gn = re("chevron-right", ov);
const uv = [
        ["path", {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }]
    ],
    Vm = re("clock", uv);
const dv = [
        ["rect", {
            width: "20",
            height: "14",
            x: "2",
            y: "5",
            rx: "2",
            key: "ynyp8z"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "10",
            y2: "10",
            key: "1b3vmo"
        }]
    ],
    fv = re("credit-card", dv);
const pv = [
        ["path", {
            d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
            key: "1vdc57"
        }],
        ["path", {
            d: "M5 21h14",
            key: "11awu3"
        }]
    ],
    Yo = re("crown", pv);
const mv = [
        ["path", {
            d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
            key: "ct8e1f"
        }],
        ["path", {
            d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
            key: "151rxh"
        }],
        ["path", {
            d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
            key: "13bj9a"
        }],
        ["path", {
            d: "m2 2 20 20",
            key: "1ooewy"
        }]
    ],
    hv = re("eye-off", mv);
const gv = [
        ["path", {
            d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
            key: "1nclc0"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }]
    ],
    xu = re("eye", gv);
const xv = [
        ["line", {
            x1: "22",
            x2: "2",
            y1: "6",
            y2: "6",
            key: "15w7dq"
        }],
        ["line", {
            x1: "22",
            x2: "2",
            y1: "18",
            y2: "18",
            key: "1ip48p"
        }],
        ["line", {
            x1: "6",
            x2: "6",
            y1: "2",
            y2: "22",
            key: "a2lnyx"
        }],
        ["line", {
            x1: "18",
            x2: "18",
            y1: "2",
            y2: "22",
            key: "8vb6jd"
        }]
    ],
    yv = re("frame", xv);
const vv = [
        ["path", {
            d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
            key: "sc7q7i"
        }]
    ],
    au = re("funnel", vv);
const bv = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl"
        }],
        ["path", {
            d: "M2 12h20",
            key: "9i4pu4"
        }]
    ],
    Yh = re("globe", bv);
const jv = [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            key: "afitv7"
        }],
        ["path", {
            d: "M3 9h18",
            key: "1pudct"
        }],
        ["path", {
            d: "M3 15h18",
            key: "5xshup"
        }],
        ["path", {
            d: "M9 3v18",
            key: "fh3hqa"
        }],
        ["path", {
            d: "M15 3v18",
            key: "14nvp0"
        }]
    ],
    Gh = re("grid-3x3", jv);
const Nv = [
        ["path", {
            d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
            key: "mvr1a0"
        }]
    ],
    qt = re("heart", Nv);
const Sv = [
        ["path", {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "1357e3"
        }],
        ["path", {
            d: "M3 3v5h5",
            key: "1xhq8a"
        }],
        ["path", {
            d: "M12 7v5l4 2",
            key: "1fdv2h"
        }]
    ],
    wv = re("history", Sv);
const Ev = [
        ["path", {
            d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
            key: "zw3jo"
        }],
        ["path", {
            d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
            key: "1wduqc"
        }],
        ["path", {
            d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
            key: "kqbvx6"
        }]
    ],
    Cv = re("layers", Ev);
const Av = [
        ["rect", {
            width: "7",
            height: "9",
            x: "3",
            y: "3",
            rx: "1",
            key: "10lvy0"
        }],
        ["rect", {
            width: "7",
            height: "5",
            x: "14",
            y: "3",
            rx: "1",
            key: "16une8"
        }],
        ["rect", {
            width: "7",
            height: "9",
            x: "14",
            y: "12",
            rx: "1",
            key: "1hutg5"
        }],
        ["rect", {
            width: "7",
            height: "5",
            x: "3",
            y: "16",
            rx: "1",
            key: "ldoo1y"
        }]
    ],
    Mv = re("layout-dashboard", Av);
const Dv = [
        ["rect", {
            width: "7",
            height: "7",
            x: "3",
            y: "3",
            rx: "1",
            key: "1g98yp"
        }],
        ["rect", {
            width: "7",
            height: "7",
            x: "3",
            y: "14",
            rx: "1",
            key: "1bb6yr"
        }],
        ["path", {
            d: "M14 4h7",
            key: "3xa0d5"
        }],
        ["path", {
            d: "M14 9h7",
            key: "1icrd9"
        }],
        ["path", {
            d: "M14 15h7",
            key: "1mj8o2"
        }],
        ["path", {
            d: "M14 20h7",
            key: "11slyb"
        }]
    ],
    Ov = re("layout-list", Dv);
const Rv = [
        ["rect", {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1"
        }],
        ["path", {
            d: "M7 11V7a5 5 0 0 1 10 0v4",
            key: "fwvmzm"
        }]
    ],
    Tv = re("lock", Rv);
const _v = [
        ["path", {
            d: "m16 17 5-5-5-5",
            key: "1bji2h"
        }],
        ["path", {
            d: "M21 12H9",
            key: "dn1m92"
        }],
        ["path", {
            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
            key: "1uf3rs"
        }]
    ],
    zv = re("log-out", _v);
const kv = [
        ["path", {
            d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
            key: "132q7q"
        }],
        ["rect", {
            x: "2",
            y: "4",
            width: "20",
            height: "16",
            rx: "2",
            key: "izxlao"
        }]
    ],
    yu = re("mail", kv);
const Hv = [
        ["path", {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }],
        ["circle", {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }]
    ],
    cr = re("map-pin", Hv);
const Lv = [
        ["path", {
            d: "M15 3h6v6",
            key: "1q9fwt"
        }],
        ["path", {
            d: "m21 3-7 7",
            key: "1l2asr"
        }],
        ["path", {
            d: "m3 21 7-7",
            key: "tjx5ai"
        }],
        ["path", {
            d: "M9 21H3v-6",
            key: "wtvkvv"
        }]
    ],
    Uv = re("maximize-2", Lv);
const Bv = [
        ["path", {
            d: "M4 5h16",
            key: "1tepv9"
        }],
        ["path", {
            d: "M4 12h16",
            key: "1lakjw"
        }],
        ["path", {
            d: "M4 19h16",
            key: "1djgab"
        }]
    ],
    Xh = re("menu", Bv);
const Pv = [
        ["path", {
            d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
            key: "1sd12s"
        }]
    ],
    su = re("message-circle", Pv);
const qv = [
        ["path", {
            d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
            key: "18887p"
        }]
    ],
    lu = re("message-square", qv);
const Yv = [
        ["path", {
            d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
            key: "1a0edw"
        }],
        ["path", {
            d: "M12 22V12",
            key: "d0xqtd"
        }],
        ["polyline", {
            points: "3.29 7 12 12 20.71 7",
            key: "ousv84"
        }],
        ["path", {
            d: "m7.5 4.27 9 5.15",
            key: "1c824w"
        }]
    ],
    nu = re("package", Yv);
const Gv = [
        ["path", {
            d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
            key: "e79jfc"
        }],
        ["circle", {
            cx: "13.5",
            cy: "6.5",
            r: ".5",
            fill: "currentColor",
            key: "1okk4w"
        }],
        ["circle", {
            cx: "17.5",
            cy: "10.5",
            r: ".5",
            fill: "currentColor",
            key: "f64h9f"
        }],
        ["circle", {
            cx: "6.5",
            cy: "12.5",
            r: ".5",
            fill: "currentColor",
            key: "qy21gx"
        }],
        ["circle", {
            cx: "8.5",
            cy: "7.5",
            r: ".5",
            fill: "currentColor",
            key: "fotxhn"
        }]
    ],
    Xv = re("palette", Gv);
const Qv = [
        ["path", {
            d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
            key: "1a8usu"
        }]
    ],
    dr = re("pen", Qv);
const Vv = [
        ["path", {
            d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
            key: "9njp5v"
        }]
    ],
    vu = re("phone", Vv);
const Zv = [
        ["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }],
        ["path", {
            d: "M12 5v14",
            key: "s699le"
        }]
    ],
    Kv = re("plus", Zv);
const Iv = [
        ["path", {
            d: "M20 18v-2a4 4 0 0 0-4-4H4",
            key: "5vmcpk"
        }],
        ["path", {
            d: "m9 17-5-5 5-5",
            key: "nvlc11"
        }]
    ],
    Jv = re("reply", Iv);
const Fv = [
        ["path", {
            d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
            key: "icamh8"
        }],
        ["path", {
            d: "m14.5 12.5 2-2",
            key: "inckbg"
        }],
        ["path", {
            d: "m11.5 9.5 2-2",
            key: "fmmyf7"
        }],
        ["path", {
            d: "m8.5 6.5 2-2",
            key: "vc6u1g"
        }],
        ["path", {
            d: "m17.5 15.5 2-2",
            key: "wo5hmg"
        }]
    ],
    $v = re("ruler", Fv);
const Wv = [
        ["path", {
            d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
            key: "1c8476"
        }],
        ["path", {
            d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
            key: "1ydtos"
        }],
        ["path", {
            d: "M7 3v4a1 1 0 0 0 1 1h7",
            key: "t51u73"
        }]
    ],
    Zm = re("save", Wv);
const e2 = [
        ["path", {
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }],
        ["circle", {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }]
    ],
    yn = re("search", e2);
const t2 = [
        ["path", {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }],
        ["path", {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }]
    ],
    Qh = re("send", t2);
const a2 = [
        ["path", {
            d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
            key: "1i5ecw"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }]
    ],
    s2 = re("settings", a2);
const l2 = [
        ["circle", {
            cx: "18",
            cy: "5",
            r: "3",
            key: "gq8acd"
        }],
        ["circle", {
            cx: "6",
            cy: "12",
            r: "3",
            key: "w7nqdw"
        }],
        ["circle", {
            cx: "18",
            cy: "19",
            r: "3",
            key: "1xt0gg"
        }],
        ["line", {
            x1: "8.59",
            x2: "15.42",
            y1: "13.51",
            y2: "17.49",
            key: "47mynk"
        }],
        ["line", {
            x1: "15.41",
            x2: "8.59",
            y1: "6.51",
            y2: "10.49",
            key: "1n3mei"
        }]
    ],
    n2 = re("share-2", l2);
const c2 = [
        ["path", {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }]
    ],
    r2 = re("shield", c2);
const i2 = [
        ["path", {
            d: "M16 10a4 4 0 0 1-8 0",
            key: "1ltviw"
        }],
        ["path", {
            d: "M3.103 6.034h17.794",
            key: "awc11p"
        }],
        ["path", {
            d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
            key: "o988cm"
        }]
    ],
    Ft = re("shopping-bag", i2);
const o2 = [
        ["circle", {
            cx: "8",
            cy: "21",
            r: "1",
            key: "jimo8o"
        }],
        ["circle", {
            cx: "19",
            cy: "21",
            r: "1",
            key: "13723u"
        }],
        ["path", {
            d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
            key: "9zh506"
        }]
    ],
    Km = re("shopping-cart", o2);
const u2 = [
        ["path", {
            d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
            key: "1s2grr"
        }],
        ["path", {
            d: "M20 2v4",
            key: "1rf3ol"
        }],
        ["path", {
            d: "M22 4h-4",
            key: "gwowj6"
        }],
        ["circle", {
            cx: "4",
            cy: "20",
            r: "2",
            key: "6kqj1y"
        }]
    ],
    Pt = re("sparkles", u2);
const d2 = [
        ["path", {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }]
    ],
    Im = re("star", d2);
const f2 = [
        ["path", {
            d: "M10 11v6",
            key: "nco0om"
        }],
        ["path", {
            d: "M14 11v6",
            key: "outv1u"
        }],
        ["path", {
            d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
            key: "miytrc"
        }],
        ["path", {
            d: "M3 6h18",
            key: "d0wm0j"
        }],
        ["path", {
            d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
            key: "e791ji"
        }]
    ],
    Vh = re("trash-2", f2);
const p2 = [
        ["path", {
            d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
            key: "wrbu53"
        }],
        ["path", {
            d: "M15 18H9",
            key: "1lyqi6"
        }],
        ["path", {
            d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
            key: "lysw3i"
        }],
        ["circle", {
            cx: "17",
            cy: "18",
            r: "2",
            key: "332jqn"
        }],
        ["circle", {
            cx: "7",
            cy: "18",
            r: "2",
            key: "19iecd"
        }]
    ],
    m2 = re("truck", p2);
const h2 = [
        ["path", {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }],
        ["circle", {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }]
    ],
    Zh = re("user", h2);
const g2 = [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ],
    ja = re("x", g2);

function x2() {
    const [l, i] = x.useState(!1), [u, o] = x.useState(!1), d = Wt(), {
        searchQuery: p,
        setSearchQuery: m,
        favorites: h,
        cart: b
    } = ht(), y = [{
        path: "/",
        label: "首页"
    }, {
        path: "/category/treasure",
        label: "镇馆之宝"
    }, {
        path: "/category/antique",
        label: "古董收藏"
    }, {
        path: "/category/contemporary",
        label: "当代艺术"
    }, {
        path: "/category/folk",
        label: "民俗民艺"
    }, {
        path: "/market",
        label: "断舍离市集"
    }, {
        path: "/about",
        label: "关于我们"
    }], j = v => v === "/" ? d.pathname === "/" : d.pathname.startsWith(v);
    return n.jsx("header", {
        "code-path": "src/components/Navbar.tsx:28:5",
        className: "sticky top-0 z-40 w-full",
        children: n.jsxs("nav", {
            "code-path": "src/components/Navbar.tsx:30:7",
            className: "glass-effect border-b border-[#6B3E26]/10",
            children: [n.jsx("div", {
                "code-path": "src/components/Navbar.tsx:31:9",
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: n.jsxs("div", {
                    "code-path": "src/components/Navbar.tsx:32:11",
                    className: "flex items-center justify-between h-16",
                    children: [n.jsx(be, {
                        "code-path": "src/components/Navbar.tsx:34:13",
                        to: "/",
                        className: "flex items-center group",
                        children: n.jsx("img", {
                            "code-path": "src/components/Navbar.tsx:35:15",
                            src: "/images/logo.png?v=2",
                            alt: "小猪博物馆",
                            className: "h-7 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                        })
                    }), n.jsx("div", {
                        "code-path": "src/components/Navbar.tsx:43:13",
                        className: "hidden lg:flex items-center gap-1",
                        children: y.map(v => n.jsx(be, {
                            "code-path": "src/components/Navbar.tsx:45:17",
                            to: v.path,
                            className: `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${j(v.path)?"text-[#6B3E26] bg-[#6B3E26]/10":"text-gray-600 hover:text-[#6B3E26] hover:bg-gray-100"}`,
                            children: v.label
                        }, v.path))
                    }), n.jsxs("div", {
                        "code-path": "src/components/Navbar.tsx:60:13",
                        className: "flex items-center gap-2",
                        children: [n.jsx("button", {
                            "code-path": "src/components/Navbar.tsx:62:15",
                            onClick: () => o(!u),
                            className: "p-2 rounded-lg text-gray-600 hover:text-[#6B3E26] hover:bg-gray-100 transition-all",
                            children: n.jsx(yn, {
                                "code-path": "src/components/Navbar.tsx:66:17",
                                className: "w-5 h-5"
                            })
                        }), n.jsxs(be, {
                            "code-path": "src/components/Navbar.tsx:70:15",
                            to: "/favorites",
                            className: "relative p-2 rounded-lg text-gray-600 hover:text-[#6B3E26] hover:bg-gray-100 transition-all",
                            children: [n.jsx(qt, {
                                "code-path": "src/components/Navbar.tsx:74:17",
                                className: "w-5 h-5"
                            }), h.length > 0 && n.jsx("span", {
                                "code-path": "src/components/Navbar.tsx:76:19",
                                className: "absolute -top-1 -right-1 w-5 h-5 bg-[#6B3E26] text-white text-xs rounded-full flex items-center justify-center",
                                children: h.length
                            })]
                        }), n.jsxs("button", {
                            "code-path": "src/components/Navbar.tsx:83:15",
                            className: "relative p-2 rounded-lg text-gray-600 hover:text-[#6B3E26] hover:bg-gray-100 transition-all",
                            children: [n.jsx(Ft, {
                                "code-path": "src/components/Navbar.tsx:84:17",
                                className: "w-5 h-5"
                            }), b.length > 0 && n.jsx("span", {
                                "code-path": "src/components/Navbar.tsx:86:19",
                                className: "absolute -top-1 -right-1 w-5 h-5 bg-[#6B3E26] text-white text-xs rounded-full flex items-center justify-center",
                                children: b.reduce((v, S) => v + S.quantity, 0)
                            })]
                        }), n.jsx("button", {
                            "code-path": "src/components/Navbar.tsx:93:15",
                            onClick: () => i(!l),
                            className: "lg:hidden p-2 rounded-lg text-gray-600 hover:text-[#6B3E26] hover:bg-gray-100 transition-all",
                            children: l ? n.jsx(ja, {
                                "code-path": "src/components/Navbar.tsx:97:31",
                                className: "w-5 h-5"
                            }) : n.jsx(Xh, {
                                "code-path": "src/components/Navbar.tsx:97:59",
                                className: "w-5 h-5"
                            })
                        })]
                    })]
                })
            }), n.jsx("div", {
                "code-path": "src/components/Navbar.tsx:104:9",
                className: `overflow-hidden transition-all duration-300 ${u?"max-h-20":"max-h-0"}`,
                children: n.jsx("div", {
                    "code-path": "src/components/Navbar.tsx:105:11",
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 border-t border-gray-100",
                    children: n.jsxs("div", {
                        "code-path": "src/components/Navbar.tsx:106:13",
                        className: "relative",
                        children: [n.jsx(yn, {
                            "code-path": "src/components/Navbar.tsx:107:15",
                            className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                        }), n.jsx("input", {
                            "code-path": "src/components/Navbar.tsx:108:15",
                            type: "text",
                            placeholder: "搜索展品名称、标签、描述...",
                            value: p,
                            onChange: v => m(v.target.value),
                            className: "w-full pl-12 pr-4 py-3 rounded-xl bg-gray-100 border-0 focus:ring-2 focus:ring-[#6B3E26] focus:bg-white transition-all"
                        })]
                    })
                })
            }), n.jsx("div", {
                "code-path": "src/components/Navbar.tsx:120:9",
                className: `lg:hidden overflow-hidden transition-all duration-300 ${l?"max-h-96":"max-h-0"}`,
                children: n.jsx("div", {
                    "code-path": "src/components/Navbar.tsx:121:11",
                    className: "px-4 py-3 space-y-1 border-t border-gray-100 bg-white",
                    children: y.map(v => n.jsx(be, {
                        "code-path": "src/components/Navbar.tsx:123:15",
                        to: v.path,
                        onClick: () => i(!1),
                        className: `block px-4 py-3 rounded-lg text-sm font-medium transition-all ${j(v.path)?"text-[#6B3E26] bg-[#6B3E26]/10":"text-gray-600 hover:text-[#6B3E26] hover:bg-gray-100"}`,
                        children: v.label
                    }, v.path))
                })
            })]
        })
    })
}

function y2() {
    const l = new Date().getFullYear(),
        i = {
            explore: [{
                label: "镇馆之宝",
                path: "/category/treasure"
            }, {
                label: "古董收藏",
                path: "/category/antique"
            }, {
                label: "当代艺术",
                path: "/category/contemporary"
            }, {
                label: "断舍离市集",
                path: "/market"
            }],
            about: [{
                label: "关于我们",
                path: "/about"
            }, {
                label: "馆长故事",
                path: "/about#story"
            }, {
                label: "入藏标准",
                path: "/about#standards"
            }, {
                label: "交易规则",
                path: "/about#rules"
            }],
            support: [{
                label: "常见问题",
                path: "/about#faq"
            }, {
                label: "联系我们",
                path: "/about#contact"
            }, {
                label: "隐私政策",
                path: "/about#privacy"
            }, {
                label: "服务条款",
                path: "/about#terms"
            }]
        };
    return n.jsxs("footer", {
        "code-path": "src/components/Footer.tsx:29:5",
        className: "bg-[#5C3317] text-white",
        children: [n.jsx("div", {
            "code-path": "src/components/Footer.tsx:31:7",
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
            children: n.jsxs("div", {
                "code-path": "src/components/Footer.tsx:32:9",
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12",
                children: [n.jsxs("div", {
                    "code-path": "src/components/Footer.tsx:34:11",
                    className: "lg:col-span-2",
                    children: [n.jsx(be, {
                        "code-path": "src/components/Footer.tsx:35:13",
                        to: "/",
                        className: "flex items-center mb-6",
                        children: n.jsx("img", {
                            "code-path": "src/components/Footer.tsx:36:15",
                            src: "/images/logo-footer.png?v=2",
                            alt: "小猪博物馆",
                            className: "h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                        })
                    }), n.jsx("p", {
                        "code-path": "src/components/Footer.tsx:42:13",
                        className: "text-gray-300 mb-6 max-w-sm",
                        children: "收藏、分享与发现独特猪主题艺术品的趣味所在。我们致力于打造一个温暖的数字博物馆，让每一件藏品都能找到欣赏它的人。"
                    }), n.jsxs("div", {
                        "code-path": "src/components/Footer.tsx:45:13",
                        className: "space-y-3",
                        children: [n.jsxs("div", {
                            "code-path": "src/components/Footer.tsx:46:15",
                            className: "flex items-center gap-3 text-gray-300",
                            children: [n.jsx(yu, {
                                "code-path": "src/components/Footer.tsx:47:17",
                                className: "w-5 h-5 text-[#D4A574]"
                            }), n.jsx("span", {
                                "code-path": "src/components/Footer.tsx:48:17",
                                children: "contact@oink.com.cn"
                            })]
                        }), n.jsxs("div", {
                            "code-path": "src/components/Footer.tsx:50:15",
                            className: "flex items-center gap-3 text-gray-300",
                            children: [n.jsx(vu, {
                                "code-path": "src/components/Footer.tsx:51:17",
                                className: "w-5 h-5 text-[#D4A574]"
                            }), n.jsx("span", {
                                "code-path": "src/components/Footer.tsx:52:17",
                                children: "400-888-8888"
                            })]
                        }), n.jsxs("div", {
                            "code-path": "src/components/Footer.tsx:54:15",
                            className: "flex items-center gap-3 text-gray-300",
                            children: [n.jsx(cr, {
                                "code-path": "src/components/Footer.tsx:55:17",
                                className: "w-5 h-5 text-[#D4A574]"
                            }), n.jsx("span", {
                                "code-path": "src/components/Footer.tsx:56:17",
                                children: "中国·上海"
                            })]
                        })]
                    })]
                }), n.jsxs("div", {
                    "code-path": "src/components/Footer.tsx:62:11",
                    children: [n.jsx("h3", {
                        "code-path": "src/components/Footer.tsx:63:13",
                        className: "text-lg font-semibold mb-6",
                        children: "探索"
                    }), n.jsx("ul", {
                        "code-path": "src/components/Footer.tsx:64:13",
                        className: "space-y-3",
                        children: i.explore.map(u => n.jsx("li", {
                            "code-path": "src/components/Footer.tsx:66:17",
                            children: n.jsx(be, {
                                "code-path": "src/components/Footer.tsx:67:19",
                                to: u.path,
                                className: "text-gray-300 hover:text-[#D4A574] transition-colors",
                                children: u.label
                            })
                        }, u.path))
                    })]
                }), n.jsxs("div", {
                    "code-path": "src/components/Footer.tsx:79:11",
                    children: [n.jsx("h3", {
                        "code-path": "src/components/Footer.tsx:80:13",
                        className: "text-lg font-semibold mb-6",
                        children: "关于"
                    }), n.jsx("ul", {
                        "code-path": "src/components/Footer.tsx:81:13",
                        className: "space-y-3",
                        children: i.about.map(u => n.jsx("li", {
                            "code-path": "src/components/Footer.tsx:83:17",
                            children: n.jsx(be, {
                                "code-path": "src/components/Footer.tsx:84:19",
                                to: u.path,
                                className: "text-gray-300 hover:text-[#D4A574] transition-colors",
                                children: u.label
                            })
                        }, u.path))
                    })]
                }), n.jsxs("div", {
                    "code-path": "src/components/Footer.tsx:96:11",
                    children: [n.jsx("h3", {
                        "code-path": "src/components/Footer.tsx:97:13",
                        className: "text-lg font-semibold mb-6",
                        children: "支持"
                    }), n.jsx("ul", {
                        "code-path": "src/components/Footer.tsx:98:13",
                        className: "space-y-3",
                        children: i.support.map(u => n.jsx("li", {
                            "code-path": "src/components/Footer.tsx:100:17",
                            children: n.jsx(be, {
                                "code-path": "src/components/Footer.tsx:101:19",
                                to: u.path,
                                className: "text-gray-300 hover:text-[#D4A574] transition-colors",
                                children: u.label
                            })
                        }, u.path))
                    })]
                })]
            })
        }), n.jsx("div", {
            "code-path": "src/components/Footer.tsx:115:7",
            className: "border-t border-[#6B3E26]",
            children: n.jsx("div", {
                "code-path": "src/components/Footer.tsx:116:9",
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
                children: n.jsxs("div", {
                    "code-path": "src/components/Footer.tsx:117:11",
                    className: "flex flex-col md:flex-row items-center justify-between gap-4",
                    children: [n.jsxs("p", {
                        "code-path": "src/components/Footer.tsx:118:13",
                        className: "text-gray-400 text-sm",
                        children: ["© ", l, " 小猪博物馆 oink.com.cn. All rights reserved."]
                    }), n.jsxs("p", {
                        "code-path": "src/components/Footer.tsx:121:13",
                        className: "text-gray-400 text-sm flex items-center gap-1",
                        children: ["Made with ", n.jsx(qt, {
                            "code-path": "src/components/Footer.tsx:122:25",
                            className: "w-4 h-4 text-[#D4A574]"
                        }), " for pig lovers"]
                    })]
                })
            })
        })]
    })
}

function v2() {
    return n.jsxs("div", {
        "code-path": "src/components/layouts/MainLayout.tsx:7:5",
        className: "min-h-screen flex flex-col bg-gray-50",
        children: [n.jsx(x2, {
            "code-path": "src/components/layouts/MainLayout.tsx:8:7"
        }), n.jsx("main", {
            "code-path": "src/components/layouts/MainLayout.tsx:9:7",
            className: "flex-1",
            children: n.jsx(Th, {
                "code-path": "src/components/layouts/MainLayout.tsx:10:9"
            })
        }), n.jsx(y2, {
            "code-path": "src/components/layouts/MainLayout.tsx:12:7"
        })]
    })
}

function va({
    value: l,
    onSave: i,
    type: u = "text",
    label: o,
    className: d = "",
    multiline: p = !1
}) {
    const {
        isAdmin: m
    } = ht(), [h, b] = x.useState(!1), [y, j] = x.useState(l), v = x.useRef(null);
    if (x.useEffect(() => {
            j(l)
        }, [l]), x.useEffect(() => {
            h && v.current && v.current.focus()
        }, [h]), !m) return n.jsx("span", {
        "code-path": "src/components/InlineEdit.tsx:39:12",
        className: d,
        children: l
    });
    const S = () => {
            y !== l && i(y), b(!1)
        },
        z = () => {
            j(l), b(!1)
        },
        M = E => {
            E.key === "Enter" && !p ? S() : E.key === "Escape" && z()
        };
    return h ? n.jsxs("div", {
        "code-path": "src/components/InlineEdit.tsx:64:7",
        className: "inline-flex items-start gap-2",
        children: [p ? n.jsx("textarea", {
            "code-path": "src/components/InlineEdit.tsx:66:11",
            ref: v,
            value: y,
            onChange: E => j(E.target.value),
            onKeyDown: M,
            className: `px-3 py-2 rounded-lg border-2 border-[#6B3E26] bg-white focus:outline-none focus:ring-2 focus:ring-[#6B3E26]/20 ${d}`,
            rows: 4
        }) : n.jsx("input", {
            "code-path": "src/components/InlineEdit.tsx:75:11",
            ref: v,
            type: u,
            value: y,
            onChange: E => j(E.target.value),
            onKeyDown: M,
            className: `px-3 py-2 rounded-lg border-2 border-[#6B3E26] bg-white focus:outline-none focus:ring-2 focus:ring-[#6B3E26]/20 ${d}`
        }), n.jsxs("div", {
            "code-path": "src/components/InlineEdit.tsx:84:9",
            className: "flex gap-1",
            children: [n.jsx("button", {
                "code-path": "src/components/InlineEdit.tsx:85:11",
                onClick: S,
                className: "p-1.5 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition-colors",
                title: "保存",
                children: n.jsx(js, {
                    "code-path": "src/components/InlineEdit.tsx:90:13",
                    className: "w-4 h-4"
                })
            }), n.jsx("button", {
                "code-path": "src/components/InlineEdit.tsx:92:11",
                onClick: z,
                className: "p-1.5 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors",
                title: "取消",
                children: n.jsx(ja, {
                    "code-path": "src/components/InlineEdit.tsx:97:13",
                    className: "w-4 h-4"
                })
            })]
        })]
    }) : n.jsxs("span", {
        "code-path": "src/components/InlineEdit.tsx:105:5",
        className: `group inline-flex items-center gap-2 cursor-pointer hover:bg-[#6B3E26]/5 rounded px-1 -mx-1 transition-colors ${d}`,
        onClick: () => b(!0),
        title: "点击编辑",
        children: [o && n.jsxs("span", {
            "code-path": "src/components/InlineEdit.tsx:110:17",
            className: "text-gray-400 text-sm",
            children: [o, ":"]
        }), n.jsx("span", {
            "code-path": "src/components/InlineEdit.tsx:111:7",
            children: l
        }), n.jsx(dr, {
            "code-path": "src/components/InlineEdit.tsx:112:7",
            className: "w-3.5 h-3.5 text-[#6B3E26] opacity-0 group-hover:opacity-100 transition-opacity"
        })]
    })
}

function b2() {
    const {
        isAdmin: l
    } = ht();
    return l ? n.jsxs("div", {
        "code-path": "src/components/InlineEdit.tsx:152:5",
        className: "fixed bottom-4 left-4 z-50 px-4 py-2 bg-[#6B3E26] text-white text-sm rounded-lg shadow-lg flex items-center gap-2",
        children: [n.jsx(dr, {
            "code-path": "src/components/InlineEdit.tsx:153:7",
            className: "w-4 h-4"
        }), "管理员编辑模式", n.jsx("span", {
            "code-path": "src/components/InlineEdit.tsx:155:7",
            className: "text-white/70",
            children: "点击内容可直接编辑"
        })]
    }) : null
}

function ba({
    item: l,
    isFavorite: i = !1,
    onToggleFavorite: u,
    showPrice: o = !1,
    onEdit: d
}) {
    const {
        isAdmin: p
    } = ht(), m = () => {
        switch (l.status) {
            case "available":
                return n.jsxs("span", {
                    "code-path": "src/components/CollectionCard.tsx:28:11",
                    className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200",
                    children: [n.jsx(js, {
                        "code-path": "src/components/CollectionCard.tsx:29:13",
                        className: "w-3 h-3"
                    }), "可购"]
                });
            case "sold":
                return n.jsxs("span", {
                    "code-path": "src/components/CollectionCard.tsx:35:11",
                    className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500 border border-gray-200",
                    children: [n.jsx(ja, {
                        "code-path": "src/components/CollectionCard.tsx:36:13",
                        className: "w-3 h-3"
                    }), "已售"]
                });
            case "collection":
                return n.jsxs("span", {
                    "code-path": "src/components/CollectionCard.tsx:42:11",
                    className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700 border border-amber-200",
                    children: [n.jsx(Pt, {
                        "code-path": "src/components/CollectionCard.tsx:43:13",
                        className: "w-3 h-3"
                    }), "珍藏"]
                });
            default:
                return null
        }
    };
    return n.jsxs("div", {
        "code-path": "src/components/CollectionCard.tsx:53:5",
        className: "collection-card group hover-lift relative",
        children: [p && d && n.jsx("div", {
            "code-path": "src/components/CollectionCard.tsx:56:9",
            className: "absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity",
            children: n.jsxs(be, {
                "code-path": "src/components/CollectionCard.tsx:57:11",
                to: `/item/${l.id}`,
                className: "flex items-center gap-1 px-2 py-1 bg-[#6B3E26] text-white text-xs rounded-lg shadow-lg hover:bg-[#5C3317] transition-colors",
                children: [n.jsx(dr, {
                    "code-path": "src/components/CollectionCard.tsx:61:13",
                    className: "w-3 h-3"
                }), "编辑"]
            })
        }), n.jsxs("div", {
            "code-path": "src/components/CollectionCard.tsx:68:7",
            className: "relative aspect-square overflow-hidden bg-gray-100",
            children: [n.jsx(be, {
                "code-path": "src/components/CollectionCard.tsx:69:9",
                to: `/item/${l.id}`,
                children: n.jsx("img", {
                    "code-path": "src/components/CollectionCard.tsx:70:11",
                    src: l.images[0],
                    alt: l.name,
                    className: "item-image w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                })
            }), n.jsx("div", {
                "code-path": "src/components/CollectionCard.tsx:78:9",
                className: "absolute top-3 left-3",
                children: m()
            }), l.isNew && n.jsx("div", {
                "code-path": "src/components/CollectionCard.tsx:84:11",
                className: "absolute top-3 right-3",
                children: n.jsxs("span", {
                    "code-path": "src/components/CollectionCard.tsx:85:13",
                    className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[#6B3E26] text-white",
                    children: [n.jsx(Pt, {
                        "code-path": "src/components/CollectionCard.tsx:86:15",
                        className: "w-3 h-3"
                    }), "新品"]
                })
            }), n.jsx("button", {
                "code-path": "src/components/CollectionCard.tsx:93:9",
                onClick: h => {
                    h.preventDefault(), u?.()
                },
                className: `absolute bottom-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${i?"bg-[#6B3E26] text-white":"bg-white/90 text-gray-400 hover:text-[#6B3E26]"}`,
                children: n.jsx(qt, {
                    "code-path": "src/components/CollectionCard.tsx:104:11",
                    className: `w-5 h-5 ${i?"fill-current":""}`
                })
            }), n.jsx("div", {
                "code-path": "src/components/CollectionCard.tsx:108:9",
                className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6",
                children: n.jsx(be, {
                    "code-path": "src/components/CollectionCard.tsx:109:11",
                    to: `/item/${l.id}`,
                    className: "px-6 py-2 bg-white text-dark rounded-full font-medium text-sm hover:bg-[#6B3E26] hover:text-white transition-colors",
                    children: "查看详情"
                })
            })]
        }), n.jsxs("div", {
            "code-path": "src/components/CollectionCard.tsx:119:7",
            className: "p-5",
            children: [n.jsx("div", {
                "code-path": "src/components/CollectionCard.tsx:120:9",
                className: "flex items-start justify-between gap-2 mb-2",
                children: n.jsx(be, {
                    "code-path": "src/components/CollectionCard.tsx:121:11",
                    to: `/item/${l.id}`,
                    children: n.jsx("h3", {
                        "code-path": "src/components/CollectionCard.tsx:122:13",
                        className: "font-semibold text-dark group-hover:text-[#6B3E26] transition-colors line-clamp-1",
                        children: p && d ? n.jsx(va, {
                            "code-path": "src/components/CollectionCard.tsx:124:17",
                            value: l.name,
                            onSave: h => d("name", h)
                        }) : l.name
                    })
                })
            }), n.jsxs("div", {
                "code-path": "src/components/CollectionCard.tsx:133:9",
                className: "flex items-center gap-2 text-sm text-gray-500 mb-3",
                children: [n.jsx("span", {
                    "code-path": "src/components/CollectionCard.tsx:134:11",
                    children: l.country
                }), n.jsx("span", {
                    "code-path": "src/components/CollectionCard.tsx:135:11",
                    children: "·"
                }), n.jsx("span", {
                    "code-path": "src/components/CollectionCard.tsx:136:11",
                    children: l.era
                }), n.jsx("span", {
                    "code-path": "src/components/CollectionCard.tsx:137:11",
                    children: "·"
                }), n.jsx("span", {
                    "code-path": "src/components/CollectionCard.tsx:138:11",
                    children: l.material
                })]
            }), n.jsx("p", {
                "code-path": "src/components/CollectionCard.tsx:141:9",
                className: "text-sm text-gray-600 line-clamp-2 mb-4",
                children: p && d ? n.jsx(va, {
                    "code-path": "src/components/CollectionCard.tsx:143:13",
                    value: l.description,
                    onSave: h => d("description", h),
                    multiline: !0
                }) : l.description
            }), n.jsx("div", {
                "code-path": "src/components/CollectionCard.tsx:152:9",
                className: "flex flex-wrap gap-1.5 mb-4",
                children: l.tags.slice(0, 3).map((h, b) => n.jsx("span", {
                    "code-path": "src/components/CollectionCard.tsx:154:13",
                    className: "px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full",
                    children: h
                }, b))
            }), n.jsxs("div", {
                "code-path": "src/components/CollectionCard.tsx:164:9",
                className: "flex items-center justify-between pt-4 border-t border-gray-100",
                children: [o && l.status === "available" ? n.jsxs("div", {
                    "code-path": "src/components/CollectionCard.tsx:166:13",
                    className: "flex items-baseline gap-1",
                    children: [n.jsx("span", {
                        "code-path": "src/components/CollectionCard.tsx:167:15",
                        className: "text-xs text-gray-500",
                        children: "¥"
                    }), p && d ? n.jsx(va, {
                        "code-path": "src/components/CollectionCard.tsx:169:17",
                        value: l.price.toString(),
                        onSave: h => d("price", parseFloat(h) || 0),
                        className: "w-20"
                    }) : n.jsx("span", {
                        "code-path": "src/components/CollectionCard.tsx:175:17",
                        className: "text-xl font-bold text-[#6B3E26]",
                        children: l.price
                    })]
                }) : n.jsx("div", {
                    "code-path": "src/components/CollectionCard.tsx:179:13"
                }), l.status === "available" && n.jsxs("button", {
                    "code-path": "src/components/CollectionCard.tsx:183:13",
                    className: "flex items-center gap-2 text-sm font-medium text-[#6B3E26] hover:text-[#5C3317] transition-colors",
                    children: [n.jsx(Ft, {
                        "code-path": "src/components/CollectionCard.tsx:184:15",
                        className: "w-4 h-4"
                    }), "购买"]
                })]
            })]
        })]
    })
}
const j2 = {
    History: wv,
    Palette: Xv,
    Heart: qt,
    Globe: Yh,
    Cherry: cv,
    Frame: yv
};

function N2({
    categories: l
}) {
    const [i, u] = x.useState(null);
    return n.jsx("div", {
        "code-path": "src/components/CategoryAccordion.tsx:23:5",
        className: "flex flex-col lg:flex-row gap-2 h-auto lg:h-[500px]",
        children: l.map((o, d) => {
            const p = j2[o.icon] || qt,
                m = i === d;
            return n.jsxs("div", {
                "code-path": "src/components/CategoryAccordion.tsx:29:11",
                className: `relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-out ${m?"lg:flex-[3] flex-auto":"lg:flex-1 flex-auto"}`,
                onMouseEnter: () => u(d),
                onMouseLeave: () => u(null),
                children: [n.jsx("div", {
                    "code-path": "src/components/CategoryAccordion.tsx:40:13",
                    className: `absolute inset-0 transition-all duration-500 ${m?"bg-gradient-to-br from-[#ff7e5d] to-[#ff9a7e]":"bg-gray-100 hover:bg-gray-200"}`
                }), n.jsxs("div", {
                    "code-path": "src/components/CategoryAccordion.tsx:47:13",
                    className: "relative h-full min-h-[120px] lg:min-h-0 p-6 flex flex-col justify-between",
                    children: [n.jsx("div", {
                        "code-path": "src/components/CategoryAccordion.tsx:49:15",
                        className: `transition-all duration-500 ${m?"":"lg:writing-vertical lg:rotate-180"}`,
                        children: n.jsxs("div", {
                            "code-path": "src/components/CategoryAccordion.tsx:52:17",
                            className: `flex items-center gap-3 mb-2 ${m?"":"lg:flex-col lg:items-start"}`,
                            children: [n.jsx(p, {
                                "code-path": "src/components/CategoryAccordion.tsx:55:19",
                                className: `w-6 h-6 transition-colors ${m?"text-white":"text-[#ff7e5d]"}`
                            }), n.jsx("h3", {
                                "code-path": "src/components/CategoryAccordion.tsx:58:19",
                                className: `text-xl font-bold transition-colors ${m?"text-white":"text-dark"}`,
                                children: o.name
                            })]
                        })
                    }), n.jsxs("div", {
                        "code-path": "src/components/CategoryAccordion.tsx:67:15",
                        className: `overflow-hidden transition-all duration-500 ${m?"opacity-100 max-h-96":"opacity-0 max-h-0 lg:max-h-0"}`,
                        children: [n.jsx("p", {
                            "code-path": "src/components/CategoryAccordion.tsx:70:17",
                            className: "text-white/80 mb-6 max-w-md",
                            children: o.description
                        }), n.jsxs(be, {
                            "code-path": "src/components/CategoryAccordion.tsx:73:17",
                            to: `/category/${o.id}`,
                            className: "inline-flex items-center gap-2 px-6 py-3 bg-white text-[#ff7e5d] rounded-xl font-medium hover:bg-white/90 transition-colors",
                            children: ["浏览藏品", n.jsx(fl, {
                                "code-path": "src/components/CategoryAccordion.tsx:78:19",
                                className: "w-4 h-4"
                            })]
                        })]
                    }), !m && n.jsx("div", {
                        "code-path": "src/components/CategoryAccordion.tsx:84:17",
                        className: "hidden lg:block",
                        children: n.jsx("span", {
                            "code-path": "src/components/CategoryAccordion.tsx:85:19",
                            className: `text-xs font-medium transition-colors ${m?"text-white/60":"text-gray-400"}`,
                            children: o.nameEn
                        })
                    })]
                })]
            }, o.id)
        })
    })
}

function S2() {
    const {
        items: l,
        favorites: i,
        toggleFavorite: u,
        isAdmin: o,
        setItems: d
    } = ht(), p = x.useRef(null), [m, h] = x.useState({
        heroTitle: "小猪博物馆",
        heroSubtitle: "收藏爱好者的天堂",
        heroDescription: "收藏、分享与发现独特猪主题艺术品的趣味所在。每一件展品都有它的故事，等待有缘人来聆听。",
        contactPhone: "400-888-8888",
        stats: {
            items: "1000+",
            artists: "50+",
            visitors: "10000+"
        }
    }), b = l.filter(S => S.category === "treasure" || S.isRecommended).slice(0, 6), y = l.filter(S => S.isNew).slice(0, 6), j = l.filter(S => S.status === "available").slice(0, 6);
    x.useEffect(() => {
        const S = () => {
            if (p.current) {
                const z = window.scrollY,
                    M = p.current.querySelector(".hero-image"),
                    E = p.current.querySelector(".hero-text");
                M && (M.style.transform = `translateY(${z*.3}px) rotate(${z*.02}deg)`), E && (E.style.transform = `translateY(${z*-.1}px)`)
            }
        };
        return window.addEventListener("scroll", S, {
            passive: !0
        }), () => window.removeEventListener("scroll", S)
    }, []);
    const v = (S, z, M) => {
        d(E => E.map(O => O.id === S ? {
            ...O,
            [z]: M
        } : O))
    };
    return n.jsxs("div", {
        "code-path": "src/pages/HomePage.tsx:60:5",
        className: "min-h-screen",
        children: [n.jsxs("section", {
            "code-path": "src/pages/HomePage.tsx:62:7",
            ref: p,
            className: "relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#FDF8F3] via-white to-[#6B3E26]/5",
            children: [n.jsxs("div", {
                "code-path": "src/pages/HomePage.tsx:64:9",
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [n.jsx("div", {
                    "code-path": "src/pages/HomePage.tsx:65:11",
                    className: "absolute top-20 left-10 w-20 h-20 rounded-full bg-[#6B3E26]/10 animate-float"
                }), n.jsx("div", {
                    "code-path": "src/pages/HomePage.tsx:66:11",
                    className: "absolute top-40 right-20 w-16 h-16 rounded-full bg-[#6B3E26]/15 animate-float",
                    style: {
                        animationDelay: "1s"
                    }
                }), n.jsx("div", {
                    "code-path": "src/pages/HomePage.tsx:67:11",
                    className: "absolute bottom-40 left-1/4 w-12 h-12 rounded-full bg-[#6B3E26]/20 animate-float",
                    style: {
                        animationDelay: "2s"
                    }
                }), n.jsx("div", {
                    "code-path": "src/pages/HomePage.tsx:68:11",
                    className: "absolute top-1/3 right-1/3 w-8 h-8 rounded-full bg-[#6B3E26]/25 animate-float",
                    style: {
                        animationDelay: "0.5s"
                    }
                })]
            }), n.jsx("div", {
                "code-path": "src/pages/HomePage.tsx:71:9",
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",
                children: n.jsxs("div", {
                    "code-path": "src/pages/HomePage.tsx:72:11",
                    className: "grid lg:grid-cols-2 gap-12 items-center",
                    children: [n.jsxs("div", {
                        "code-path": "src/pages/HomePage.tsx:74:13",
                        className: "hero-text space-y-8 z-10",
                        children: [n.jsxs("div", {
                            "code-path": "src/pages/HomePage.tsx:75:15",
                            className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6B3E26]/10 text-[#6B3E26] text-sm font-medium",
                            children: [n.jsx(Pt, {
                                "code-path": "src/pages/HomePage.tsx:76:17",
                                className: "w-4 h-4"
                            }), o ? n.jsx(va, {
                                "code-path": "src/pages/HomePage.tsx:78:19",
                                value: m.heroSubtitle,
                                onSave: S => h(z => ({
                                    ...z,
                                    heroSubtitle: S
                                }))
                            }) : n.jsx("span", {
                                "code-path": "src/pages/HomePage.tsx:83:19",
                                children: m.heroSubtitle
                            })]
                        }), n.jsx("h1", {
                            "code-path": "src/pages/HomePage.tsx:87:15",
                            className: "heading-1 text-dark",
                            children: o ? n.jsx(va, {
                                "code-path": "src/pages/HomePage.tsx:89:19",
                                value: m.heroTitle,
                                onSave: S => h(z => ({
                                    ...z,
                                    heroTitle: S
                                })),
                                className: "text-5xl font-bold"
                            }) : n.jsx("span", {
                                "code-path": "src/pages/HomePage.tsx:95:19",
                                className: "text-gradient-brown",
                                children: m.heroTitle
                            })
                        }), n.jsx("p", {
                            "code-path": "src/pages/HomePage.tsx:99:15",
                            className: "body-large max-w-lg",
                            children: o ? n.jsx(va, {
                                "code-path": "src/pages/HomePage.tsx:101:19",
                                value: m.heroDescription,
                                onSave: S => h(z => ({
                                    ...z,
                                    heroDescription: S
                                })),
                                multiline: !0,
                                className: "w-full"
                            }) : m.heroDescription
                        }), n.jsxs("div", {
                            "code-path": "src/pages/HomePage.tsx:112:15",
                            className: "flex flex-wrap gap-4",
                            children: [n.jsxs(be, {
                                "code-path": "src/pages/HomePage.tsx:113:17",
                                to: "/category/treasure",
                                className: "btn-primary-brown inline-flex items-center gap-2",
                                children: [n.jsx(Yo, {
                                    "code-path": "src/pages/HomePage.tsx:117:19",
                                    className: "w-5 h-5"
                                }), "探索镇馆之宝", n.jsx(fl, {
                                    "code-path": "src/pages/HomePage.tsx:119:19",
                                    className: "w-4 h-4"
                                })]
                            }), n.jsxs(be, {
                                "code-path": "src/pages/HomePage.tsx:121:17",
                                to: "/market",
                                className: "btn-secondary-brown inline-flex items-center gap-2",
                                children: [n.jsx(Ft, {
                                    "code-path": "src/pages/HomePage.tsx:125:19",
                                    className: "w-5 h-5"
                                }), "断舍离市集"]
                            })]
                        }), n.jsxs("div", {
                            "code-path": "src/pages/HomePage.tsx:131:15",
                            className: "flex gap-12 pt-8 border-t border-gray-200",
                            children: [n.jsxs("div", {
                                "code-path": "src/pages/HomePage.tsx:132:17",
                                children: [n.jsx("p", {
                                    "code-path": "src/pages/HomePage.tsx:133:19",
                                    className: "text-3xl font-bold text-[#6B3E26]",
                                    children: o ? n.jsx(va, {
                                        "code-path": "src/pages/HomePage.tsx:135:23",
                                        value: m.stats.items,
                                        onSave: S => h(z => ({
                                            ...z,
                                            stats: {
                                                ...z.stats,
                                                items: S
                                            }
                                        })),
                                        className: "w-24"
                                    }) : m.stats.items
                                }), n.jsx("p", {
                                    "code-path": "src/pages/HomePage.tsx:142:19",
                                    className: "text-sm text-gray-500",
                                    children: "珍贵藏品"
                                })]
                            }), n.jsxs("div", {
                                "code-path": "src/pages/HomePage.tsx:144:17",
                                children: [n.jsx("p", {
                                    "code-path": "src/pages/HomePage.tsx:145:19",
                                    className: "text-3xl font-bold text-[#6B3E26]",
                                    children: o ? n.jsx(va, {
                                        "code-path": "src/pages/HomePage.tsx:147:23",
                                        value: m.stats.artists,
                                        onSave: S => h(z => ({
                                            ...z,
                                            stats: {
                                                ...z.stats,
                                                artists: S
                                            }
                                        })),
                                        className: "w-20"
                                    }) : m.stats.artists
                                }), n.jsx("p", {
                                    "code-path": "src/pages/HomePage.tsx:154:19",
                                    className: "text-sm text-gray-500",
                                    children: "合作艺术家"
                                })]
                            }), n.jsxs("div", {
                                "code-path": "src/pages/HomePage.tsx:156:17",
                                children: [n.jsx("p", {
                                    "code-path": "src/pages/HomePage.tsx:157:19",
                                    className: "text-3xl font-bold text-[#6B3E26]",
                                    children: o ? n.jsx(va, {
                                        "code-path": "src/pages/HomePage.tsx:159:23",
                                        value: m.stats.visitors,
                                        onSave: S => h(z => ({
                                            ...z,
                                            stats: {
                                                ...z.stats,
                                                visitors: S
                                            }
                                        })),
                                        className: "w-24"
                                    }) : m.stats.visitors
                                }), n.jsx("p", {
                                    "code-path": "src/pages/HomePage.tsx:166:19",
                                    className: "text-sm text-gray-500",
                                    children: "快乐访客"
                                })]
                            })]
                        })]
                    }), n.jsx("div", {
                        "code-path": "src/pages/HomePage.tsx:172:13",
                        className: "relative flex justify-center lg:justify-end",
                        children: n.jsxs("div", {
                            "code-path": "src/pages/HomePage.tsx:173:15",
                            className: "hero-image relative w-64 h-64 lg:w-80 lg:h-80",
                            children: [n.jsx("img", {
                                "code-path": "src/pages/HomePage.tsx:174:17",
                                src: "/images/logo-hero.png?v=2",
                                alt: "小猪博物馆",
                                className: "w-full h-full object-contain animate-float",
                                style: {
                                    filter: "drop-shadow(0 4px 12px rgba(107, 62, 38, 0.15))"
                                }
                            }), n.jsx("div", {
                                "code-path": "src/pages/HomePage.tsx:181:17",
                                className: "absolute inset-0 -z-10 bg-gradient-to-br from-[#6B3E26]/10 to-transparent rounded-full blur-2xl scale-125"
                            })]
                        })
                    })]
                })
            }), n.jsxs("div", {
                "code-path": "src/pages/HomePage.tsx:188:9",
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400",
                children: [n.jsx("span", {
                    "code-path": "src/pages/HomePage.tsx:189:11",
                    className: "text-sm",
                    children: "向下滚动探索更多"
                }), n.jsx("div", {
                    "code-path": "src/pages/HomePage.tsx:190:11",
                    className: "w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2",
                    children: n.jsx("div", {
                        "code-path": "src/pages/HomePage.tsx:191:13",
                        className: "w-1.5 h-3 bg-[#6B3E26] rounded-full animate-bounce"
                    })
                })]
            })]
        }), n.jsx("section", {
            "code-path": "src/pages/HomePage.tsx:197:7",
            className: "py-16 bg-white",
            children: n.jsx("div", {
                "code-path": "src/pages/HomePage.tsx:198:9",
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: n.jsx("div", {
                    "code-path": "src/pages/HomePage.tsx:199:11",
                    className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                    children: [{
                        icon: Yo,
                        label: "镇馆之宝",
                        path: "/category/treasure",
                        color: "from-amber-400 to-amber-600"
                    }, {
                        icon: Pt,
                        label: "最新入藏",
                        path: "/category/contemporary",
                        color: "from-blue-400 to-blue-600"
                    }, {
                        icon: Ft,
                        label: "可购精选",
                        path: "/market",
                        color: "from-green-400 to-green-600"
                    }, {
                        icon: qt,
                        label: "断舍离故事",
                        path: "/about",
                        color: "from-pink-400 to-pink-600"
                    }].map((S, z) => n.jsxs(be, {
                        "code-path": "src/pages/HomePage.tsx:206:15",
                        to: S.path,
                        className: "group relative overflow-hidden rounded-2xl p-6 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-500",
                        children: [n.jsx("div", {
                            "code-path": "src/pages/HomePage.tsx:211:17",
                            className: `absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${S.color} opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500`
                        }), n.jsx(S.icon, {
                            "code-path": "src/pages/HomePage.tsx:212:17",
                            className: "w-8 h-8 text-[#6B3E26] mb-4 group-hover:scale-110 transition-transform"
                        }), n.jsx("h3", {
                            "code-path": "src/pages/HomePage.tsx:213:17",
                            className: "text-lg font-semibold text-dark",
                            children: S.label
                        }), n.jsx(gn, {
                            "code-path": "src/pages/HomePage.tsx:214:17",
                            className: "w-5 h-5 text-gray-400 mt-2 group-hover:translate-x-2 transition-transform"
                        })]
                    }, z))
                })
            })
        }), b.length > 0 && n.jsx("section", {
            "code-path": "src/pages/HomePage.tsx:223:9",
            className: "py-20 bg-gray-50",
            children: n.jsxs("div", {
                "code-path": "src/pages/HomePage.tsx:224:11",
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [n.jsxs("div", {
                    "code-path": "src/pages/HomePage.tsx:225:13",
                    className: "flex items-end justify-between mb-12",
                    children: [n.jsxs("div", {
                        "code-path": "src/pages/HomePage.tsx:226:15",
                        children: [n.jsxs("div", {
                            "code-path": "src/pages/HomePage.tsx:227:17",
                            className: "flex items-center gap-2 text-[#6B3E26] mb-2",
                            children: [n.jsx(Yo, {
                                "code-path": "src/pages/HomePage.tsx:228:19",
                                className: "w-5 h-5"
                            }), n.jsx("span", {
                                "code-path": "src/pages/HomePage.tsx:229:19",
                                className: "text-sm font-medium",
                                children: "精选推荐"
                            })]
                        }), n.jsx("h2", {
                            "code-path": "src/pages/HomePage.tsx:231:17",
                            className: "heading-2 text-dark",
                            children: "镇馆之宝"
                        })]
                    }), n.jsxs(be, {
                        "code-path": "src/pages/HomePage.tsx:233:15",
                        to: "/category/treasure",
                        className: "hidden sm:flex items-center gap-2 text-[#6B3E26] font-medium hover:gap-3 transition-all",
                        children: ["查看全部", n.jsx(fl, {
                            "code-path": "src/pages/HomePage.tsx:238:17",
                            className: "w-4 h-4"
                        })]
                    })]
                }), n.jsx("div", {
                    "code-path": "src/pages/HomePage.tsx:242:13",
                    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: b.map(S => n.jsx(ba, {
                        "code-path": "src/pages/HomePage.tsx:244:17",
                        item: S,
                        isFavorite: i.includes(S.id),
                        onToggleFavorite: () => u(S.id),
                        onEdit: o ? (z, M) => v(S.id, z, M) : void 0
                    }, S.id))
                })]
            })
        }), n.jsx("section", {
            "code-path": "src/pages/HomePage.tsx:258:7",
            className: "py-20 bg-white",
            children: n.jsxs("div", {
                "code-path": "src/pages/HomePage.tsx:259:9",
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [n.jsxs("div", {
                    "code-path": "src/pages/HomePage.tsx:260:11",
                    className: "text-center mb-12",
                    children: [n.jsx("h2", {
                        "code-path": "src/pages/HomePage.tsx:261:13",
                        className: "heading-2 text-dark mb-4",
                        children: "探索藏品分类"
                    }), n.jsx("p", {
                        "code-path": "src/pages/HomePage.tsx:262:13",
                        className: "body-large max-w-2xl mx-auto",
                        children: "从古董到当代，从东方到西方，探索我们丰富多样的猪主题艺术收藏"
                    })]
                }), n.jsx(N2, {
                    "code-path": "src/pages/HomePage.tsx:267:11",
                    categories: pl.filter(S => S.id !== "treasure")
                })]
            })
        }), y.length > 0 && n.jsx("section", {
            "code-path": "src/pages/HomePage.tsx:273:9",
            className: "py-20 bg-gray-50",
            children: n.jsxs("div", {
                "code-path": "src/pages/HomePage.tsx:274:11",
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [n.jsxs("div", {
                    "code-path": "src/pages/HomePage.tsx:275:13",
                    className: "flex items-end justify-between mb-12",
                    children: [n.jsxs("div", {
                        "code-path": "src/pages/HomePage.tsx:276:15",
                        children: [n.jsxs("div", {
                            "code-path": "src/pages/HomePage.tsx:277:17",
                            className: "flex items-center gap-2 text-[#6B3E26] mb-2",
                            children: [n.jsx(Pt, {
                                "code-path": "src/pages/HomePage.tsx:278:19",
                                className: "w-5 h-5"
                            }), n.jsx("span", {
                                "code-path": "src/pages/HomePage.tsx:279:19",
                                className: "text-sm font-medium",
                                children: "新鲜上架"
                            })]
                        }), n.jsx("h2", {
                            "code-path": "src/pages/HomePage.tsx:281:17",
                            className: "heading-2 text-dark",
                            children: "最新入藏"
                        })]
                    }), n.jsxs(be, {
                        "code-path": "src/pages/HomePage.tsx:283:15",
                        to: "/category/contemporary",
                        className: "hidden sm:flex items-center gap-2 text-[#6B3E26] font-medium hover:gap-3 transition-all",
                        children: ["查看全部", n.jsx(fl, {
                            "code-path": "src/pages/HomePage.tsx:288:17",
                            className: "w-4 h-4"
                        })]
                    })]
                }), n.jsx("div", {
                    "code-path": "src/pages/HomePage.tsx:292:13",
                    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: y.map(S => n.jsx(ba, {
                        "code-path": "src/pages/HomePage.tsx:294:17",
                        item: S,
                        isFavorite: i.includes(S.id),
                        onToggleFavorite: () => u(S.id),
                        onEdit: o ? (z, M) => v(S.id, z, M) : void 0
                    }, S.id))
                })]
            })
        }), j.length > 0 && n.jsx("section", {
            "code-path": "src/pages/HomePage.tsx:309:9",
            className: "py-20 bg-white",
            children: n.jsxs("div", {
                "code-path": "src/pages/HomePage.tsx:310:11",
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [n.jsxs("div", {
                    "code-path": "src/pages/HomePage.tsx:311:13",
                    className: "flex items-end justify-between mb-12",
                    children: [n.jsxs("div", {
                        "code-path": "src/pages/HomePage.tsx:312:15",
                        children: [n.jsxs("div", {
                            "code-path": "src/pages/HomePage.tsx:313:17",
                            className: "flex items-center gap-2 text-[#6B3E26] mb-2",
                            children: [n.jsx(Ft, {
                                "code-path": "src/pages/HomePage.tsx:314:19",
                                className: "w-5 h-5"
                            }), n.jsx("span", {
                                "code-path": "src/pages/HomePage.tsx:315:19",
                                className: "text-sm font-medium",
                                children: "好物流转"
                            })]
                        }), n.jsx("h2", {
                            "code-path": "src/pages/HomePage.tsx:317:17",
                            className: "heading-2 text-dark",
                            children: "断舍离市集"
                        })]
                    }), n.jsxs(be, {
                        "code-path": "src/pages/HomePage.tsx:319:15",
                        to: "/market",
                        className: "hidden sm:flex items-center gap-2 text-[#6B3E26] font-medium hover:gap-3 transition-all",
                        children: ["进入市集", n.jsx(fl, {
                            "code-path": "src/pages/HomePage.tsx:324:17",
                            className: "w-4 h-4"
                        })]
                    })]
                }), n.jsx("div", {
                    "code-path": "src/pages/HomePage.tsx:328:13",
                    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: j.map(S => n.jsx(ba, {
                        "code-path": "src/pages/HomePage.tsx:330:17",
                        item: S,
                        isFavorite: i.includes(S.id),
                        onToggleFavorite: () => u(S.id),
                        showPrice: !0,
                        onEdit: o ? (z, M) => v(S.id, z, M) : void 0
                    }, S.id))
                })]
            })
        }), n.jsxs("section", {
            "code-path": "src/pages/HomePage.tsx:345:7",
            className: "py-20 bg-[#5C3317] relative overflow-hidden",
            children: [n.jsxs("div", {
                "code-path": "src/pages/HomePage.tsx:347:9",
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [n.jsx("div", {
                    "code-path": "src/pages/HomePage.tsx:348:11",
                    className: "absolute top-0 left-0 w-64 h-64 bg-[#D4A574]/10 rounded-full blur-3xl"
                }), n.jsx("div", {
                    "code-path": "src/pages/HomePage.tsx:349:11",
                    className: "absolute bottom-0 right-0 w-96 h-96 bg-[#D4A574]/5 rounded-full blur-3xl"
                })]
            }), n.jsxs("div", {
                "code-path": "src/pages/HomePage.tsx:352:9",
                className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10",
                children: [n.jsx("h2", {
                    "code-path": "src/pages/HomePage.tsx:353:11",
                    className: "heading-2 text-white mb-6",
                    children: "准备好开启您的收藏之旅了吗？"
                }), n.jsx("p", {
                    "code-path": "src/pages/HomePage.tsx:356:11",
                    className: "text-[#D4A574] text-lg mb-8 max-w-2xl mx-auto",
                    children: "加入我们的收藏社区，第一时间获取新品上架信息，与志同道合的藏友交流心得"
                }), n.jsxs("div", {
                    "code-path": "src/pages/HomePage.tsx:359:11",
                    className: "flex flex-wrap justify-center gap-4",
                    children: [n.jsx(be, {
                        "code-path": "src/pages/HomePage.tsx:360:13",
                        to: "/market",
                        className: "btn-primary-gold animate-pulse-soft",
                        children: "立即开始探索"
                    }), n.jsx(be, {
                        "code-path": "src/pages/HomePage.tsx:363:13",
                        to: "/about",
                        className: "px-6 py-3 rounded-xl border-2 border-[#D4A574] text-[#D4A574] font-medium hover:bg-[#D4A574] hover:text-[#5C3317] transition-colors",
                        children: "了解更多"
                    })]
                })]
            })]
        }), n.jsx(b2, {
            "code-path": "src/pages/HomePage.tsx:371:7"
        })]
    })
}

function w2() {
    const i = Mh().categoryId,
        {
            items: u,
            favorites: o,
            toggleFavorite: d,
            searchQuery: p
        } = ht(),
        [m, h] = x.useState("grid"),
        [b, y] = x.useState("all"),
        [j, v] = x.useState("newest"),
        S = pl.find(E => E.id === i),
        z = x.useMemo(() => {
            let E = u;
            if (i && (i === "treasure" ? E = E.filter(O => O.isRecommended || O.category === "treasure") : E = E.filter(O => O.category === i)), b !== "all" && (E = E.filter(O => O.status === b)), p) {
                const O = p.toLowerCase();
                E = E.filter(U => U.name.toLowerCase().includes(O) || U.description.toLowerCase().includes(O) || U.tags.some(Z => Z.toLowerCase().includes(O)))
            }
            return E = [...E].sort((O, U) => {
                switch (j) {
                    case "newest":
                        return new Date(U.collectionDate).getTime() - new Date(O.collectionDate).getTime();
                    case "price-asc":
                        return (O.price || 0) - (U.price || 0);
                    case "price-desc":
                        return (U.price || 0) - (O.price || 0);
                    default:
                        return 0
                }
            }), E
        }, [u, i, b, j, p]);
    if (!S && i !== "treasure") return n.jsx("div", {
        "code-path": "src/pages/CategoryPage.tsx:66:7",
        className: "min-h-screen flex items-center justify-center",
        children: n.jsxs("div", {
            "code-path": "src/pages/CategoryPage.tsx:67:9",
            className: "text-center",
            children: [n.jsx("h2", {
                "code-path": "src/pages/CategoryPage.tsx:68:11",
                className: "text-2xl font-bold text-dark mb-4",
                children: "分类不存在"
            }), n.jsx(be, {
                "code-path": "src/pages/CategoryPage.tsx:69:11",
                to: "/",
                className: "text-[#ff7e5d] hover:underline",
                children: "返回首页"
            })]
        })
    });
    const M = S || {
        name: "镇馆之宝",
        description: "馆藏最珍贵的精品，代表小猪博物馆的最高收藏水准"
    };
    return n.jsxs("div", {
        "code-path": "src/pages/CategoryPage.tsx:86:5",
        className: "min-h-screen bg-gray-50",
        children: [n.jsx("div", {
            "code-path": "src/pages/CategoryPage.tsx:88:7",
            className: "bg-white border-b border-gray-200",
            children: n.jsxs("div", {
                "code-path": "src/pages/CategoryPage.tsx:89:9",
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: [n.jsxs("nav", {
                    "code-path": "src/pages/CategoryPage.tsx:91:11",
                    className: "flex items-center gap-2 text-sm text-gray-500 mb-4",
                    children: [n.jsx(be, {
                        "code-path": "src/pages/CategoryPage.tsx:92:13",
                        to: "/",
                        className: "hover:text-[#ff7e5d]",
                        children: "首页"
                    }), n.jsx(gn, {
                        "code-path": "src/pages/CategoryPage.tsx:93:13",
                        className: "w-4 h-4"
                    }), n.jsx("span", {
                        "code-path": "src/pages/CategoryPage.tsx:94:13",
                        className: "text-dark",
                        children: M.name
                    })]
                }), n.jsxs("div", {
                    "code-path": "src/pages/CategoryPage.tsx:97:11",
                    className: "flex flex-col md:flex-row md:items-end justify-between gap-4",
                    children: [n.jsxs("div", {
                        "code-path": "src/pages/CategoryPage.tsx:98:13",
                        children: [n.jsx("h1", {
                            "code-path": "src/pages/CategoryPage.tsx:99:15",
                            className: "heading-2 text-dark mb-2",
                            children: M.name
                        }), n.jsx("p", {
                            "code-path": "src/pages/CategoryPage.tsx:100:15",
                            className: "text-gray-600 max-w-2xl",
                            children: M.description
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/CategoryPage.tsx:102:13",
                        className: "text-sm text-gray-500",
                        children: ["共 ", n.jsx("span", {
                            "code-path": "src/pages/CategoryPage.tsx:103:17",
                            className: "font-semibold text-[#ff7e5d]",
                            children: z.length
                        }), " 件藏品"]
                    })]
                })]
            })
        }), n.jsx("div", {
            "code-path": "src/pages/CategoryPage.tsx:110:7",
            className: "bg-white border-b border-gray-200 sticky top-16 z-30",
            children: n.jsx("div", {
                "code-path": "src/pages/CategoryPage.tsx:111:9",
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",
                children: n.jsxs("div", {
                    "code-path": "src/pages/CategoryPage.tsx:112:11",
                    className: "flex flex-wrap items-center justify-between gap-4",
                    children: [n.jsxs("div", {
                        "code-path": "src/pages/CategoryPage.tsx:114:13",
                        className: "flex items-center gap-4",
                        children: [n.jsxs("div", {
                            "code-path": "src/pages/CategoryPage.tsx:115:15",
                            className: "flex items-center gap-2",
                            children: [n.jsx(au, {
                                "code-path": "src/pages/CategoryPage.tsx:116:17",
                                className: "w-4 h-4 text-gray-500"
                            }), n.jsx("span", {
                                "code-path": "src/pages/CategoryPage.tsx:117:17",
                                className: "text-sm text-gray-500",
                                children: "筛选:"
                            })]
                        }), n.jsxs("select", {
                            "code-path": "src/pages/CategoryPage.tsx:120:15",
                            value: b,
                            onChange: E => y(E.target.value),
                            className: "px-3 py-2 rounded-lg bg-gray-100 text-sm border-0 focus:ring-2 focus:ring-[#ff7e5d]",
                            children: [n.jsx("option", {
                                "code-path": "src/pages/CategoryPage.tsx:125:17",
                                value: "all",
                                children: "全部状态"
                            }), n.jsx("option", {
                                "code-path": "src/pages/CategoryPage.tsx:126:17",
                                value: "available",
                                children: "可购"
                            }), n.jsx("option", {
                                "code-path": "src/pages/CategoryPage.tsx:127:17",
                                value: "sold",
                                children: "已售"
                            }), n.jsx("option", {
                                "code-path": "src/pages/CategoryPage.tsx:128:17",
                                value: "collection",
                                children: "珍藏"
                            })]
                        }), n.jsxs("select", {
                            "code-path": "src/pages/CategoryPage.tsx:131:15",
                            value: j,
                            onChange: E => v(E.target.value),
                            className: "px-3 py-2 rounded-lg bg-gray-100 text-sm border-0 focus:ring-2 focus:ring-[#ff7e5d]",
                            children: [n.jsx("option", {
                                "code-path": "src/pages/CategoryPage.tsx:136:17",
                                value: "newest",
                                children: "最新入藏"
                            }), n.jsx("option", {
                                "code-path": "src/pages/CategoryPage.tsx:137:17",
                                value: "price-asc",
                                children: "价格从低到高"
                            }), n.jsx("option", {
                                "code-path": "src/pages/CategoryPage.tsx:138:17",
                                value: "price-desc",
                                children: "价格从高到低"
                            })]
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/CategoryPage.tsx:143:13",
                        className: "flex items-center gap-2",
                        children: [n.jsx("button", {
                            "code-path": "src/pages/CategoryPage.tsx:144:15",
                            onClick: () => h("grid"),
                            className: `p-2 rounded-lg transition-colors ${m==="grid"?"bg-[#ff7e5d] text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                            children: n.jsx(Gh, {
                                "code-path": "src/pages/CategoryPage.tsx:152:17",
                                className: "w-5 h-5"
                            })
                        }), n.jsx("button", {
                            "code-path": "src/pages/CategoryPage.tsx:154:15",
                            onClick: () => h("list"),
                            className: `p-2 rounded-lg transition-colors ${m==="list"?"bg-[#ff7e5d] text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                            children: n.jsx(Ov, {
                                "code-path": "src/pages/CategoryPage.tsx:162:17",
                                className: "w-5 h-5"
                            })
                        })]
                    })]
                })
            })
        }), n.jsx("div", {
            "code-path": "src/pages/CategoryPage.tsx:170:7",
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
            children: z.length > 0 ? n.jsx("div", {
                "code-path": "src/pages/CategoryPage.tsx:172:11",
                className: `grid gap-6 ${m==="grid"?"grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4":"grid-cols-1"}`,
                children: z.map(E => n.jsx(ba, {
                    "code-path": "src/pages/CategoryPage.tsx:178:15",
                    item: E,
                    isFavorite: o.includes(E.id),
                    onToggleFavorite: () => d(E.id),
                    showPrice: !0
                }, E.id))
            }) : n.jsxs("div", {
                "code-path": "src/pages/CategoryPage.tsx:188:11",
                className: "text-center py-20",
                children: [n.jsx("div", {
                    "code-path": "src/pages/CategoryPage.tsx:189:13",
                    className: "w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center",
                    children: n.jsx(au, {
                        "code-path": "src/pages/CategoryPage.tsx:190:15",
                        className: "w-10 h-10 text-gray-400"
                    })
                }), n.jsx("h3", {
                    "code-path": "src/pages/CategoryPage.tsx:192:13",
                    className: "text-xl font-semibold text-dark mb-2",
                    children: "暂无符合条件的藏品"
                }), n.jsx("p", {
                    "code-path": "src/pages/CategoryPage.tsx:193:13",
                    className: "text-gray-500",
                    children: "请尝试调整筛选条件"
                })]
            })
        })]
    })
}

function E2() {
    const i = Mh().itemId,
        {
            items: u,
            favorites: o,
            toggleFavorite: d,
            addToCart: p
        } = ht(),
        [m, h] = x.useState(0),
        [b, y] = x.useState(!1),
        [j, v] = x.useState(0),
        [S, z] = x.useState(!1),
        M = u.find(A => A.id === i);
    if (!M) return n.jsx("div", {
        "code-path": "src/pages/ItemDetailPage.tsx:36:7",
        className: "min-h-screen flex items-center justify-center",
        children: n.jsxs("div", {
            "code-path": "src/pages/ItemDetailPage.tsx:37:9",
            className: "text-center",
            children: [n.jsx("h2", {
                "code-path": "src/pages/ItemDetailPage.tsx:38:11",
                className: "text-2xl font-bold text-dark mb-4",
                children: "展品不存在"
            }), n.jsx(be, {
                "code-path": "src/pages/ItemDetailPage.tsx:39:11",
                to: "/",
                className: "text-[#ff7e5d] hover:underline",
                children: "返回首页"
            })]
        })
    });
    const E = pl.find(A => A.id === M.category),
        O = u.filter(A => A.category === M.category && A.id !== M.id).slice(0, 4),
        U = M.images || [],
        Z = U.length > 8,
        V = S ? U : U.slice(0, 8),
        ee = (() => {
            switch (M.status) {
                case "available":
                    return {
                        badge: n.jsxs("span", {
                            "code-path": "src/pages/ItemDetailPage.tsx:64:13",
                            className: "inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium bg-green-100 text-green-700 border border-green-200",
                            children: [n.jsx(js, {
                                "code-path": "src/pages/ItemDetailPage.tsx:65:15",
                                className: "w-4 h-4"
                            }), "可购买"]
                        }), button: n.jsxs("button", {
                            "code-path": "src/pages/ItemDetailPage.tsx:70:13",
                            onClick: () => p(M),
                            className: "flex-1 btn-primary flex items-center justify-center gap-2",
                            children: [n.jsx(Ft, {
                                "code-path": "src/pages/ItemDetailPage.tsx:74:15",
                                className: "w-5 h-5"
                            }), "加入购物车"]
                        })
                    };
                case "sold":
                    return {
                        badge: n.jsxs("span", {
                            "code-path": "src/pages/ItemDetailPage.tsx:82:13",
                            className: "inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-500 border border-gray-200",
                            children: [n.jsx(ja, {
                                "code-path": "src/pages/ItemDetailPage.tsx:83:15",
                                className: "w-4 h-4"
                            }), "已售出"]
                        }), button: n.jsxs("button", {
                            "code-path": "src/pages/ItemDetailPage.tsx:88:13",
                            disabled: !0,
                            className: "flex-1 px-6 py-3 rounded-xl bg-gray-200 text-gray-500 font-medium cursor-not-allowed flex items-center justify-center gap-2",
                            children: [n.jsx(ja, {
                                "code-path": "src/pages/ItemDetailPage.tsx:92:15",
                                className: "w-5 h-5"
                            }), "已售出"]
                        })
                    };
                case "collection":
                    return {
                        badge: n.jsxs("span", {
                            "code-path": "src/pages/ItemDetailPage.tsx:100:13",
                            className: "inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium bg-amber-100 text-amber-700 border border-amber-200",
                            children: [n.jsx(Pt, {
                                "code-path": "src/pages/ItemDetailPage.tsx:101:15",
                                className: "w-4 h-4"
                            }), "馆藏珍藏"]
                        }), button: n.jsxs("button", {
                            "code-path": "src/pages/ItemDetailPage.tsx:106:13",
                            disabled: !0,
                            className: "flex-1 px-6 py-3 rounded-xl bg-amber-100 text-amber-700 font-medium cursor-not-allowed flex items-center justify-center gap-2",
                            children: [n.jsx(Pt, {
                                "code-path": "src/pages/ItemDetailPage.tsx:110:15",
                                className: "w-5 h-5"
                            }), "馆藏珍藏"]
                        })
                    }
            }
        })(),
        G = () => {
            v(A => A === 0 ? U.length - 1 : A - 1)
        },
        X = () => {
            v(A => A === U.length - 1 ? 0 : A + 1)
        };
    return n.jsxs("div", {
        "code-path": "src/pages/ItemDetailPage.tsx:130:5",
        className: "min-h-screen bg-gray-50",
        children: [n.jsx("div", {
            "code-path": "src/pages/ItemDetailPage.tsx:132:7",
            className: "bg-white border-b border-gray-100",
            children: n.jsx("div", {
                "code-path": "src/pages/ItemDetailPage.tsx:133:9",
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2",
                children: n.jsx(be, {
                    "code-path": "src/pages/ItemDetailPage.tsx:134:11",
                    to: "/",
                    className: "flex items-center",
                    children: n.jsx("img", {
                        "code-path": "src/pages/ItemDetailPage.tsx:135:13",
                        src: "/images/logo.png?v=2",
                        alt: "小猪博物馆",
                        className: "h-7 w-auto object-contain"
                    })
                })
            })
        }), n.jsx("div", {
            "code-path": "src/pages/ItemDetailPage.tsx:145:7",
            className: "bg-white border-b border-gray-200",
            children: n.jsx("div", {
                "code-path": "src/pages/ItemDetailPage.tsx:146:9",
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",
                children: n.jsxs("nav", {
                    "code-path": "src/pages/ItemDetailPage.tsx:147:11",
                    className: "flex items-center gap-2 text-sm",
                    children: [n.jsx(be, {
                        "code-path": "src/pages/ItemDetailPage.tsx:148:13",
                        to: "/",
                        className: "text-gray-500 hover:text-[#6B3E26]",
                        children: "首页"
                    }), n.jsx(gn, {
                        "code-path": "src/pages/ItemDetailPage.tsx:149:13",
                        className: "w-4 h-4 text-gray-400"
                    }), n.jsx(be, {
                        "code-path": "src/pages/ItemDetailPage.tsx:150:13",
                        to: `/category/${M.category}`,
                        className: "text-gray-500 hover:text-[#6B3E26]",
                        children: E?.name || "藏品"
                    }), n.jsx(gn, {
                        "code-path": "src/pages/ItemDetailPage.tsx:156:13",
                        className: "w-4 h-4 text-gray-400"
                    }), n.jsx("span", {
                        "code-path": "src/pages/ItemDetailPage.tsx:157:13",
                        className: "text-dark font-medium truncate",
                        children: M.name
                    })]
                })
            })
        }), n.jsxs("div", {
            "code-path": "src/pages/ItemDetailPage.tsx:163:7",
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
            children: [n.jsxs("div", {
                "code-path": "src/pages/ItemDetailPage.tsx:164:9",
                className: "grid lg:grid-cols-2 gap-12",
                children: [n.jsxs("div", {
                    "code-path": "src/pages/ItemDetailPage.tsx:166:11",
                    className: "space-y-4",
                    children: [n.jsxs("div", {
                        "code-path": "src/pages/ItemDetailPage.tsx:168:13",
                        className: "relative aspect-square bg-white rounded-2xl overflow-hidden cursor-zoom-in group shadow-sm",
                        onClick: () => {
                            v(m), y(!0)
                        },
                        children: [n.jsx("img", {
                            "code-path": "src/pages/ItemDetailPage.tsx:175:15",
                            src: U[m],
                            alt: M.name,
                            className: "item-image w-full h-full object-contain p-8"
                        }), n.jsx("div", {
                            "code-path": "src/pages/ItemDetailPage.tsx:180:15",
                            className: "absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"
                        }), n.jsxs("div", {
                            "code-path": "src/pages/ItemDetailPage.tsx:183:15",
                            className: "absolute bottom-4 left-4 px-3 py-1.5 bg-black/60 text-white text-sm rounded-full",
                            children: [m + 1, " / ", U.length]
                        }), n.jsx("div", {
                            "code-path": "src/pages/ItemDetailPage.tsx:188:15",
                            className: "absolute bottom-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg",
                            children: n.jsx(Uv, {
                                "code-path": "src/pages/ItemDetailPage.tsx:189:17",
                                className: "w-5 h-5 text-gray-600"
                            })
                        }), n.jsx("div", {
                            "code-path": "src/pages/ItemDetailPage.tsx:193:15",
                            className: "absolute top-4 left-4",
                            children: ee.badge
                        }), M.isNew && n.jsx("div", {
                            "code-path": "src/pages/ItemDetailPage.tsx:199:17",
                            className: "absolute top-4 right-4",
                            children: n.jsxs("span", {
                                "code-path": "src/pages/ItemDetailPage.tsx:200:19",
                                className: "inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium bg-[#6B3E26] text-white",
                                children: [n.jsx(Pt, {
                                    "code-path": "src/pages/ItemDetailPage.tsx:201:21",
                                    className: "w-4 h-4"
                                }), "新品"]
                            })
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/ItemDetailPage.tsx:209:13",
                        className: "bg-white rounded-2xl p-4 shadow-sm",
                        children: [n.jsxs("div", {
                            "code-path": "src/pages/ItemDetailPage.tsx:210:15",
                            className: "flex items-center justify-between mb-3",
                            children: [n.jsxs("span", {
                                "code-path": "src/pages/ItemDetailPage.tsx:211:17",
                                className: "text-sm text-gray-500 flex items-center gap-2",
                                children: [n.jsx(Gh, {
                                    "code-path": "src/pages/ItemDetailPage.tsx:212:19",
                                    className: "w-4 h-4"
                                }), "共 ", U.length, " 张图片"]
                            }), Z && n.jsx("button", {
                                "code-path": "src/pages/ItemDetailPage.tsx:216:19",
                                onClick: () => z(!S),
                                className: "text-sm text-[#6B3E26] hover:underline",
                                children: S ? "收起" : `查看全部 ${U.length} 张`
                            })]
                        }), n.jsx("div", {
                            "code-path": "src/pages/ItemDetailPage.tsx:225:15",
                            className: "grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2",
                            children: V.map((A, ae) => n.jsx("button", {
                                "code-path": "src/pages/ItemDetailPage.tsx:227:19",
                                onClick: () => h(ae),
                                className: `aspect-square rounded-lg overflow-hidden border-2 transition-all ${m===ae?"border-[#6B3E26] ring-2 ring-[#6B3E26]/20":"border-gray-200 hover:border-gray-300"}`,
                                children: n.jsx("img", {
                                    "code-path": "src/pages/ItemDetailPage.tsx:236:21",
                                    src: A,
                                    alt: `${M.name} - ${ae+1}`,
                                    className: "item-image w-full h-full object-contain bg-gray-50 p-1"
                                })
                            }, ae))
                        })]
                    })]
                }), n.jsxs("div", {
                    "code-path": "src/pages/ItemDetailPage.tsx:248:11",
                    className: "space-y-6",
                    children: [n.jsxs("div", {
                        "code-path": "src/pages/ItemDetailPage.tsx:250:13",
                        className: "flex items-start justify-between gap-4",
                        children: [n.jsxs("div", {
                            "code-path": "src/pages/ItemDetailPage.tsx:251:15",
                            children: [n.jsx("h1", {
                                "code-path": "src/pages/ItemDetailPage.tsx:252:17",
                                className: "heading-2 text-dark mb-2",
                                children: M.name
                            }), n.jsxs("div", {
                                "code-path": "src/pages/ItemDetailPage.tsx:253:17",
                                className: "flex items-center gap-3 text-sm text-gray-500",
                                children: [n.jsxs("span", {
                                    "code-path": "src/pages/ItemDetailPage.tsx:254:19",
                                    className: "flex items-center gap-1",
                                    children: [n.jsx(cr, {
                                        "code-path": "src/pages/ItemDetailPage.tsx:255:21",
                                        className: "w-4 h-4"
                                    }), M.country]
                                }), n.jsx("span", {
                                    "code-path": "src/pages/ItemDetailPage.tsx:258:19",
                                    children: "·"
                                }), n.jsx("span", {
                                    "code-path": "src/pages/ItemDetailPage.tsx:259:19",
                                    children: M.era
                                }), n.jsx("span", {
                                    "code-path": "src/pages/ItemDetailPage.tsx:260:19",
                                    children: "·"
                                }), n.jsx("span", {
                                    "code-path": "src/pages/ItemDetailPage.tsx:261:19",
                                    children: M.material
                                })]
                            })]
                        }), n.jsxs("div", {
                            "code-path": "src/pages/ItemDetailPage.tsx:264:15",
                            className: "flex items-center gap-2",
                            children: [n.jsx("button", {
                                "code-path": "src/pages/ItemDetailPage.tsx:265:17",
                                onClick: () => d(M.id),
                                className: `w-12 h-12 rounded-full flex items-center justify-center transition-all ${o.includes(M.id)?"bg-[#6B3E26] text-white":"bg-gray-100 text-gray-400 hover:text-[#6B3E26]"}`,
                                children: n.jsx(qt, {
                                    "code-path": "src/pages/ItemDetailPage.tsx:273:19",
                                    className: `w-5 h-5 ${o.includes(M.id)?"fill-current":""}`
                                })
                            }), n.jsx("button", {
                                "code-path": "src/pages/ItemDetailPage.tsx:275:17",
                                className: "w-12 h-12 rounded-full bg-gray-100 text-gray-400 hover:text-[#6B3E26] flex items-center justify-center transition-all",
                                children: n.jsx(n2, {
                                    "code-path": "src/pages/ItemDetailPage.tsx:276:19",
                                    className: "w-5 h-5"
                                })
                            })]
                        })]
                    }), M.status === "available" && n.jsxs("div", {
                        "code-path": "src/pages/ItemDetailPage.tsx:283:15",
                        className: "flex items-baseline gap-2 py-4 border-y border-gray-200",
                        children: [n.jsx("span", {
                            "code-path": "src/pages/ItemDetailPage.tsx:284:17",
                            className: "text-sm text-gray-500",
                            children: "售价"
                        }), n.jsxs("span", {
                            "code-path": "src/pages/ItemDetailPage.tsx:285:17",
                            className: "text-3xl font-bold text-[#6B3E26]",
                            children: ["¥", M.price]
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/ItemDetailPage.tsx:290:13",
                        children: [n.jsx("h3", {
                            "code-path": "src/pages/ItemDetailPage.tsx:291:15",
                            className: "font-semibold text-dark mb-3",
                            children: "藏品说明"
                        }), n.jsx("p", {
                            "code-path": "src/pages/ItemDetailPage.tsx:292:15",
                            className: "text-gray-600 leading-relaxed",
                            children: M.description
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/ItemDetailPage.tsx:296:13",
                        className: "grid grid-cols-2 gap-4",
                        children: [n.jsxs("div", {
                            "code-path": "src/pages/ItemDetailPage.tsx:297:15",
                            className: "flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm",
                            children: [n.jsx(sv, {
                                "code-path": "src/pages/ItemDetailPage.tsx:298:17",
                                className: "w-5 h-5 text-[#6B3E26]"
                            }), n.jsxs("div", {
                                "code-path": "src/pages/ItemDetailPage.tsx:299:17",
                                children: [n.jsx("p", {
                                    "code-path": "src/pages/ItemDetailPage.tsx:300:19",
                                    className: "text-xs text-gray-500",
                                    children: "入藏日期"
                                }), n.jsx("p", {
                                    "code-path": "src/pages/ItemDetailPage.tsx:301:19",
                                    className: "font-medium text-dark",
                                    children: M.collectionDate
                                })]
                            })]
                        }), n.jsxs("div", {
                            "code-path": "src/pages/ItemDetailPage.tsx:304:15",
                            className: "flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm",
                            children: [n.jsx($v, {
                                "code-path": "src/pages/ItemDetailPage.tsx:305:17",
                                className: "w-5 h-5 text-[#6B3E26]"
                            }), n.jsxs("div", {
                                "code-path": "src/pages/ItemDetailPage.tsx:306:17",
                                children: [n.jsx("p", {
                                    "code-path": "src/pages/ItemDetailPage.tsx:307:19",
                                    className: "text-xs text-gray-500",
                                    children: "规格尺寸"
                                }), n.jsxs("p", {
                                    "code-path": "src/pages/ItemDetailPage.tsx:308:19",
                                    className: "font-medium text-dark",
                                    children: [M.dimensions, " cm"]
                                })]
                            })]
                        }), n.jsxs("div", {
                            "code-path": "src/pages/ItemDetailPage.tsx:311:15",
                            className: "flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm",
                            children: [n.jsx(Cv, {
                                "code-path": "src/pages/ItemDetailPage.tsx:312:17",
                                className: "w-5 h-5 text-[#6B3E26]"
                            }), n.jsxs("div", {
                                "code-path": "src/pages/ItemDetailPage.tsx:313:17",
                                children: [n.jsx("p", {
                                    "code-path": "src/pages/ItemDetailPage.tsx:314:19",
                                    className: "text-xs text-gray-500",
                                    children: "材质"
                                }), n.jsx("p", {
                                    "code-path": "src/pages/ItemDetailPage.tsx:315:19",
                                    className: "font-medium text-dark",
                                    children: M.material
                                })]
                            })]
                        }), n.jsxs("div", {
                            "code-path": "src/pages/ItemDetailPage.tsx:318:15",
                            className: "flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm",
                            children: [n.jsx(cr, {
                                "code-path": "src/pages/ItemDetailPage.tsx:319:17",
                                className: "w-5 h-5 text-[#6B3E26]"
                            }), n.jsxs("div", {
                                "code-path": "src/pages/ItemDetailPage.tsx:320:17",
                                children: [n.jsx("p", {
                                    "code-path": "src/pages/ItemDetailPage.tsx:321:19",
                                    className: "text-xs text-gray-500",
                                    children: "产地"
                                }), n.jsx("p", {
                                    "code-path": "src/pages/ItemDetailPage.tsx:322:19",
                                    className: "font-medium text-dark",
                                    children: M.country
                                })]
                            })]
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/ItemDetailPage.tsx:328:13",
                        children: [n.jsx("h3", {
                            "code-path": "src/pages/ItemDetailPage.tsx:329:15",
                            className: "font-semibold text-dark mb-3",
                            children: "标签"
                        }), n.jsx("div", {
                            "code-path": "src/pages/ItemDetailPage.tsx:330:15",
                            className: "flex flex-wrap gap-2",
                            children: M.tags.map((A, ae) => n.jsx("span", {
                                "code-path": "src/pages/ItemDetailPage.tsx:332:19",
                                className: "px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-[#6B3E26]/10 hover:text-[#6B3E26] transition-colors cursor-pointer",
                                children: A
                            }, ae))
                        })]
                    }), M.story && n.jsxs("div", {
                        "code-path": "src/pages/ItemDetailPage.tsx:344:15",
                        className: "p-6 bg-gradient-to-br from-[#6B3E26]/5 to-[#5C3317]/5 rounded-xl border border-[#6B3E26]/10",
                        children: [n.jsxs("h3", {
                            "code-path": "src/pages/ItemDetailPage.tsx:345:17",
                            className: "font-semibold text-dark mb-3 flex items-center gap-2",
                            children: [n.jsx(Pt, {
                                "code-path": "src/pages/ItemDetailPage.tsx:346:19",
                                className: "w-5 h-5 text-[#6B3E26]"
                            }), "断舍离故事"]
                        }), n.jsxs("p", {
                            "code-path": "src/pages/ItemDetailPage.tsx:349:17",
                            className: "text-gray-600 italic",
                            children: ['"', M.story, '"']
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/ItemDetailPage.tsx:354:13",
                        className: "flex gap-4 pt-4",
                        children: [ee.button, n.jsxs("button", {
                            "code-path": "src/pages/ItemDetailPage.tsx:356:15",
                            className: "px-6 py-3 rounded-xl border-2 border-gray-200 text-dark font-medium hover:border-[#6B3E26] hover:text-[#6B3E26] transition-colors flex items-center gap-2",
                            children: [n.jsx(su, {
                                "code-path": "src/pages/ItemDetailPage.tsx:357:17",
                                className: "w-5 h-5"
                            }), "咨询馆长"]
                        })]
                    })]
                })]
            }), O.length > 0 && n.jsxs("div", {
                "code-path": "src/pages/ItemDetailPage.tsx:366:11",
                className: "mt-20",
                children: [n.jsx("h2", {
                    "code-path": "src/pages/ItemDetailPage.tsx:367:13",
                    className: "heading-3 text-dark mb-8",
                    children: "相关推荐"
                }), n.jsx("div", {
                    "code-path": "src/pages/ItemDetailPage.tsx:368:13",
                    className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: O.map(A => n.jsxs(be, {
                        "code-path": "src/pages/ItemDetailPage.tsx:370:17",
                        to: `/item/${A.id}`,
                        className: "group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300",
                        children: [n.jsx("div", {
                            "code-path": "src/pages/ItemDetailPage.tsx:375:19",
                            className: "aspect-square overflow-hidden bg-gray-100",
                            children: n.jsx("img", {
                                "code-path": "src/pages/ItemDetailPage.tsx:376:21",
                                src: A.images[0],
                                alt: A.name,
                                className: "item-image w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                            })
                        }), n.jsxs("div", {
                            "code-path": "src/pages/ItemDetailPage.tsx:382:19",
                            className: "p-4",
                            children: [n.jsx("h3", {
                                "code-path": "src/pages/ItemDetailPage.tsx:383:21",
                                className: "font-medium text-dark group-hover:text-[#6B3E26] transition-colors line-clamp-1",
                                children: A.name
                            }), n.jsxs("p", {
                                "code-path": "src/pages/ItemDetailPage.tsx:386:21",
                                className: "text-sm text-gray-500 mt-1",
                                children: [A.country, " · ", A.era]
                            })]
                        })]
                    }, A.id))
                })]
            })]
        }), b && n.jsxs("div", {
            "code-path": "src/pages/ItemDetailPage.tsx:399:9",
            className: "fixed inset-0 z-50 bg-black/95 flex items-center justify-center",
            onClick: A => {
                A.target === A.currentTarget && y(!1)
            },
            children: [n.jsx("button", {
                "code-path": "src/pages/ItemDetailPage.tsx:406:11",
                onClick: () => y(!1),
                className: "absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10",
                children: n.jsx(ja, {
                    "code-path": "src/pages/ItemDetailPage.tsx:410:13",
                    className: "w-6 h-6"
                })
            }), n.jsxs("div", {
                "code-path": "src/pages/ItemDetailPage.tsx:414:11",
                className: "absolute top-4 left-4 px-4 py-2 bg-black/60 text-white rounded-full",
                children: [j + 1, " / ", U.length]
            }), U.length > 1 && n.jsx("button", {
                "code-path": "src/pages/ItemDetailPage.tsx:420:13",
                onClick: A => {
                    A.stopPropagation(), G()
                },
                className: "absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors",
                children: n.jsx(iv, {
                    "code-path": "src/pages/ItemDetailPage.tsx:427:15",
                    className: "w-6 h-6"
                })
            }), n.jsx("img", {
                "code-path": "src/pages/ItemDetailPage.tsx:432:11",
                src: U[j],
                alt: M.name,
                className: "item-image max-w-[90vw] max-h-[85vh] object-contain",
                onClick: A => A.stopPropagation()
            }), U.length > 1 && n.jsx("button", {
                "code-path": "src/pages/ItemDetailPage.tsx:441:13",
                onClick: A => {
                    A.stopPropagation(), X()
                },
                className: "absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors",
                children: n.jsx(gn, {
                    "code-path": "src/pages/ItemDetailPage.tsx:448:15",
                    className: "w-6 h-6"
                })
            }), n.jsx("div", {
                "code-path": "src/pages/ItemDetailPage.tsx:453:11",
                className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-[80vw] overflow-x-auto pb-2",
                children: U.map((A, ae) => n.jsx("button", {
                    "code-path": "src/pages/ItemDetailPage.tsx:455:15",
                    onClick: ze => {
                        ze.stopPropagation(), v(ae)
                    },
                    className: `w-16 h-16 rounded-lg overflow-hidden border-2 flex-shrink-0 ${j===ae?"border-white":"border-transparent opacity-50"}`,
                    children: n.jsx("img", {
                        "code-path": "src/pages/ItemDetailPage.tsx:465:17",
                        src: A,
                        alt: "",
                        className: "item-image w-full h-full object-cover"
                    })
                }, ae))
            })]
        })]
    })
}

function C2() {
    const {
        showNotification: l
    } = ht(), [i, u] = x.useState({
        name: "",
        email: "",
        content: ""
    }), [o, d] = x.useState(""), p = j => {
        j.preventDefault(), l("留言提交成功，我们会尽快回复！", "success"), u({
            name: "",
            email: "",
            content: ""
        })
    }, m = j => {
        j.preventDefault(), l("订阅成功，感谢您的关注！", "success"), d("")
    }, h = [{
        icon: qt,
        title: "断舍离理念",
        description: "每一件藏品都有它的故事，我们帮助它们找到新的归宿，延续生命的价值。"
    }, {
        icon: r2,
        title: "品质保证",
        description: "所有藏品都经过严格鉴定，确保真实性和品质，让您安心收藏。"
    }, {
        icon: su,
        title: "贴心服务",
        description: "馆长亲自回复每一位访客的咨询，提供专业的收藏建议和服务。"
    }], b = ["藏品必须具有独特的艺术价值或历史意义", "来源清晰，有完整的收藏传承记录", "保存状况良好，无明显损坏或修复痕迹", "符合小猪主题，造型精美或具有特殊意义"], y = ["所有交易均通过平台完成，保障双方权益", "藏品售出后7天内可退换（需保持原状）", "我们提供专业的包装和物流服务", "大额交易可协商分期付款"];
    return n.jsxs("div", {
        "code-path": "src/pages/AboutPage.tsx:68:5",
        className: "min-h-screen bg-gray-50",
        children: [n.jsx("div", {
            "code-path": "src/pages/AboutPage.tsx:70:7",
            className: "bg-gradient-to-br from-[#ff7e5d] to-[#ff9a7e] py-20",
            children: n.jsxs("div", {
                "code-path": "src/pages/AboutPage.tsx:71:9",
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                children: [n.jsx("h1", {
                    "code-path": "src/pages/AboutPage.tsx:72:11",
                    className: "heading-1 text-white mb-6",
                    children: "关于我们"
                }), n.jsx("p", {
                    "code-path": "src/pages/AboutPage.tsx:73:11",
                    className: "text-xl text-white/80 max-w-2xl mx-auto",
                    children: "网上小猪博物馆是一个致力于收藏、展示和分享猪主题艺术品的数字博物馆"
                })]
            })
        }), n.jsx("section", {
            "code-path": "src/pages/AboutPage.tsx:80:7",
            className: "py-20",
            children: n.jsx("div", {
                "code-path": "src/pages/AboutPage.tsx:81:9",
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: n.jsxs("div", {
                    "code-path": "src/pages/AboutPage.tsx:82:11",
                    className: "grid lg:grid-cols-2 gap-12 items-center",
                    children: [n.jsxs("div", {
                        "code-path": "src/pages/AboutPage.tsx:83:13",
                        className: "relative",
                        children: [n.jsx("div", {
                            "code-path": "src/pages/AboutPage.tsx:84:15",
                            className: "aspect-square rounded-3xl overflow-hidden bg-white shadow-2xl",
                            children: n.jsx("img", {
                                "code-path": "src/pages/AboutPage.tsx:85:17",
                                src: "/images/hero-pig.png",
                                alt: "馆长",
                                className: "w-full h-full object-contain p-8"
                            })
                        }), n.jsx("div", {
                            "code-path": "src/pages/AboutPage.tsx:91:15",
                            className: "absolute -bottom-6 -right-6 w-32 h-32 bg-[#ff7e5d] rounded-2xl flex items-center justify-center shadow-xl",
                            children: n.jsxs("div", {
                                "code-path": "src/pages/AboutPage.tsx:92:17",
                                className: "text-center text-white",
                                children: [n.jsx("p", {
                                    "code-path": "src/pages/AboutPage.tsx:93:19",
                                    className: "text-3xl font-bold",
                                    children: "10+"
                                }), n.jsx("p", {
                                    "code-path": "src/pages/AboutPage.tsx:94:19",
                                    className: "text-sm",
                                    children: "年收藏经验"
                                })]
                            })
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/AboutPage.tsx:99:13",
                        className: "space-y-6",
                        children: [n.jsxs("div", {
                            "code-path": "src/pages/AboutPage.tsx:100:15",
                            children: [n.jsx("h2", {
                                "code-path": "src/pages/AboutPage.tsx:101:17",
                                className: "heading-2 text-dark mb-4",
                                children: "馆长故事"
                            }), n.jsx("p", {
                                "code-path": "src/pages/AboutPage.tsx:102:17",
                                className: "text-gray-600 leading-relaxed mb-4",
                                children: "大家好，我是小猪博物馆的馆长。从小我就对猪这种动物有着特殊的喜爱——它们圆润可爱、憨态可掬，在不同文化中都是富足和幸福的象征。"
                            }), n.jsx("p", {
                                "code-path": "src/pages/AboutPage.tsx:105:17",
                                className: "text-gray-600 leading-relaxed mb-4",
                                children: "十年前，我收藏了第一件猪主题艺术品，那是一只来自景德镇的青花瓷猪。从那时起，我的收藏之路便一发不可收拾。从中国的民俗工艺品到欧美的现代艺术，从日本的精致木雕到非洲的原始雕刻，我的藏品逐渐丰富起来。"
                            }), n.jsx("p", {
                                "code-path": "src/pages/AboutPage.tsx:108:17",
                                className: "text-gray-600 leading-relaxed",
                                children: '创建这个网站的初衷，是希望与更多志同道合的朋友分享我的收藏，同时也为那些想要"断舍离"的藏友提供一个温暖的交易平台。每一件藏品都有它的故事，我希望能帮助它们找到真正欣赏它们的新主人。'
                            })]
                        }), n.jsxs("div", {
                            "code-path": "src/pages/AboutPage.tsx:113:15",
                            className: "flex items-center gap-4",
                            children: [n.jsx("div", {
                                "code-path": "src/pages/AboutPage.tsx:114:17",
                                className: "w-16 h-16 rounded-full bg-[#ff7e5d]/10 flex items-center justify-center",
                                children: n.jsx(qt, {
                                    "code-path": "src/pages/AboutPage.tsx:115:19",
                                    className: "w-8 h-8 text-[#ff7e5d]"
                                })
                            }), n.jsxs("div", {
                                "code-path": "src/pages/AboutPage.tsx:117:17",
                                children: [n.jsx("p", {
                                    "code-path": "src/pages/AboutPage.tsx:118:19",
                                    className: "font-semibold text-dark",
                                    children: "馆长寄语"
                                }), n.jsx("p", {
                                    "code-path": "src/pages/AboutPage.tsx:119:19",
                                    className: "text-gray-500 text-sm",
                                    children: '"收藏不仅是拥有，更是传承与分享"'
                                })]
                            })]
                        })]
                    })]
                })
            })
        }), n.jsx("section", {
            "code-path": "src/pages/AboutPage.tsx:128:7",
            className: "py-20 bg-white",
            children: n.jsxs("div", {
                "code-path": "src/pages/AboutPage.tsx:129:9",
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [n.jsxs("div", {
                    "code-path": "src/pages/AboutPage.tsx:130:11",
                    className: "text-center mb-12",
                    children: [n.jsx("h2", {
                        "code-path": "src/pages/AboutPage.tsx:131:13",
                        className: "heading-2 text-dark mb-4",
                        children: "我们的理念"
                    }), n.jsx("p", {
                        "code-path": "src/pages/AboutPage.tsx:132:13",
                        className: "text-gray-600 max-w-2xl mx-auto",
                        children: "我们不仅仅是一个收藏展示平台，更是一个传递温暖与价值的社区"
                    })]
                }), n.jsx("div", {
                    "code-path": "src/pages/AboutPage.tsx:137:11",
                    className: "grid md:grid-cols-3 gap-8",
                    children: h.map((j, v) => n.jsxs("div", {
                        "code-path": "src/pages/AboutPage.tsx:139:15",
                        className: "p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 group",
                        children: [n.jsx("div", {
                            "code-path": "src/pages/AboutPage.tsx:143:17",
                            className: "w-16 h-16 rounded-2xl bg-[#ff7e5d]/10 flex items-center justify-center mb-6 group-hover:bg-[#ff7e5d] transition-colors",
                            children: n.jsx(j.icon, {
                                "code-path": "src/pages/AboutPage.tsx:144:19",
                                className: "w-8 h-8 text-[#ff7e5d] group-hover:text-white transition-colors"
                            })
                        }), n.jsx("h3", {
                            "code-path": "src/pages/AboutPage.tsx:146:17",
                            className: "text-xl font-semibold text-dark mb-3",
                            children: j.title
                        }), n.jsx("p", {
                            "code-path": "src/pages/AboutPage.tsx:147:17",
                            className: "text-gray-600",
                            children: j.description
                        })]
                    }, v))
                })]
            })
        }), n.jsx("section", {
            "code-path": "src/pages/AboutPage.tsx:155:7",
            className: "py-20",
            children: n.jsx("div", {
                "code-path": "src/pages/AboutPage.tsx:156:9",
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: n.jsxs("div", {
                    "code-path": "src/pages/AboutPage.tsx:157:11",
                    className: "grid lg:grid-cols-2 gap-12",
                    children: [n.jsxs("div", {
                        "code-path": "src/pages/AboutPage.tsx:158:13",
                        children: [n.jsx("h2", {
                            "code-path": "src/pages/AboutPage.tsx:159:15",
                            className: "heading-2 text-dark mb-6",
                            children: "入藏标准"
                        }), n.jsx("p", {
                            "code-path": "src/pages/AboutPage.tsx:160:15",
                            className: "text-gray-600 mb-8",
                            children: "我们对每一件入藏展品都有严格的筛选标准，确保为访客呈现最优质的收藏"
                        }), n.jsx("ul", {
                            "code-path": "src/pages/AboutPage.tsx:163:15",
                            className: "space-y-4",
                            children: b.map((j, v) => n.jsxs("li", {
                                "code-path": "src/pages/AboutPage.tsx:165:19",
                                className: "flex items-start gap-3",
                                children: [n.jsx("div", {
                                    "code-path": "src/pages/AboutPage.tsx:166:21",
                                    className: "w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5",
                                    children: n.jsx(js, {
                                        "code-path": "src/pages/AboutPage.tsx:167:23",
                                        className: "w-4 h-4 text-green-600"
                                    })
                                }), n.jsx("span", {
                                    "code-path": "src/pages/AboutPage.tsx:169:21",
                                    className: "text-gray-700",
                                    children: j
                                })]
                            }, v))
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/AboutPage.tsx:175:13",
                        children: [n.jsx("h2", {
                            "code-path": "src/pages/AboutPage.tsx:176:15",
                            className: "heading-2 text-dark mb-6",
                            children: "交易规则"
                        }), n.jsx("p", {
                            "code-path": "src/pages/AboutPage.tsx:177:15",
                            className: "text-gray-600 mb-8",
                            children: "为保障买卖双方的权益，我们制定了完善的交易规则"
                        }), n.jsx("ul", {
                            "code-path": "src/pages/AboutPage.tsx:180:15",
                            className: "space-y-4",
                            children: y.map((j, v) => n.jsxs("li", {
                                "code-path": "src/pages/AboutPage.tsx:182:19",
                                className: "flex items-start gap-3",
                                children: [n.jsx("div", {
                                    "code-path": "src/pages/AboutPage.tsx:183:21",
                                    className: "w-6 h-6 rounded-full bg-[#ff7e5d]/10 flex items-center justify-center shrink-0 mt-0.5",
                                    children: n.jsx(js, {
                                        "code-path": "src/pages/AboutPage.tsx:184:23",
                                        className: "w-4 h-4 text-[#ff7e5d]"
                                    })
                                }), n.jsx("span", {
                                    "code-path": "src/pages/AboutPage.tsx:186:21",
                                    className: "text-gray-700",
                                    children: j
                                })]
                            }, v))
                        })]
                    })]
                })
            })
        }), n.jsx("section", {
            "code-path": "src/pages/AboutPage.tsx:196:7",
            className: "py-20 bg-white",
            id: "contact",
            children: n.jsx("div", {
                "code-path": "src/pages/AboutPage.tsx:197:9",
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: n.jsxs("div", {
                    "code-path": "src/pages/AboutPage.tsx:198:11",
                    className: "grid lg:grid-cols-2 gap-12",
                    children: [n.jsxs("div", {
                        "code-path": "src/pages/AboutPage.tsx:200:13",
                        children: [n.jsx("h2", {
                            "code-path": "src/pages/AboutPage.tsx:201:15",
                            className: "heading-2 text-dark mb-6",
                            children: "联系我们"
                        }), n.jsx("p", {
                            "code-path": "src/pages/AboutPage.tsx:202:15",
                            className: "text-gray-600 mb-8",
                            children: "如果您有任何问题或建议，欢迎随时与我们联系。馆长会亲自回复每一条留言。"
                        }), n.jsxs("div", {
                            "code-path": "src/pages/AboutPage.tsx:206:15",
                            className: "space-y-6 mb-8",
                            children: [n.jsxs("div", {
                                "code-path": "src/pages/AboutPage.tsx:207:17",
                                className: "flex items-center gap-4",
                                children: [n.jsx("div", {
                                    "code-path": "src/pages/AboutPage.tsx:208:19",
                                    className: "w-12 h-12 rounded-xl bg-[#ff7e5d]/10 flex items-center justify-center",
                                    children: n.jsx(yu, {
                                        "code-path": "src/pages/AboutPage.tsx:209:21",
                                        className: "w-6 h-6 text-[#ff7e5d]"
                                    })
                                }), n.jsxs("div", {
                                    "code-path": "src/pages/AboutPage.tsx:211:19",
                                    children: [n.jsx("p", {
                                        "code-path": "src/pages/AboutPage.tsx:212:21",
                                        className: "text-sm text-gray-500",
                                        children: "电子邮箱"
                                    }), n.jsx("p", {
                                        "code-path": "src/pages/AboutPage.tsx:213:21",
                                        className: "font-medium text-dark",
                                        children: "contact@51pig.com"
                                    })]
                                })]
                            }), n.jsxs("div", {
                                "code-path": "src/pages/AboutPage.tsx:216:17",
                                className: "flex items-center gap-4",
                                children: [n.jsx("div", {
                                    "code-path": "src/pages/AboutPage.tsx:217:19",
                                    className: "w-12 h-12 rounded-xl bg-[#ff7e5d]/10 flex items-center justify-center",
                                    children: n.jsx(vu, {
                                        "code-path": "src/pages/AboutPage.tsx:218:21",
                                        className: "w-6 h-6 text-[#ff7e5d]"
                                    })
                                }), n.jsxs("div", {
                                    "code-path": "src/pages/AboutPage.tsx:220:19",
                                    children: [n.jsx("p", {
                                        "code-path": "src/pages/AboutPage.tsx:221:21",
                                        className: "text-sm text-gray-500",
                                        children: "联系电话"
                                    }), n.jsx("p", {
                                        "code-path": "src/pages/AboutPage.tsx:222:21",
                                        className: "font-medium text-dark",
                                        children: "400-888-8888"
                                    })]
                                })]
                            }), n.jsxs("div", {
                                "code-path": "src/pages/AboutPage.tsx:225:17",
                                className: "flex items-center gap-4",
                                children: [n.jsx("div", {
                                    "code-path": "src/pages/AboutPage.tsx:226:19",
                                    className: "w-12 h-12 rounded-xl bg-[#ff7e5d]/10 flex items-center justify-center",
                                    children: n.jsx(cr, {
                                        "code-path": "src/pages/AboutPage.tsx:227:21",
                                        className: "w-6 h-6 text-[#ff7e5d]"
                                    })
                                }), n.jsxs("div", {
                                    "code-path": "src/pages/AboutPage.tsx:229:19",
                                    children: [n.jsx("p", {
                                        "code-path": "src/pages/AboutPage.tsx:230:21",
                                        className: "text-sm text-gray-500",
                                        children: "地址"
                                    }), n.jsx("p", {
                                        "code-path": "src/pages/AboutPage.tsx:231:21",
                                        className: "font-medium text-dark",
                                        children: "中国·上海市浦东新区"
                                    })]
                                })]
                            })]
                        }), n.jsxs("div", {
                            "code-path": "src/pages/AboutPage.tsx:237:15",
                            className: "p-6 bg-gray-50 rounded-2xl",
                            children: [n.jsx("h3", {
                                "code-path": "src/pages/AboutPage.tsx:238:17",
                                className: "font-semibold text-dark mb-2",
                                children: "订阅我们"
                            }), n.jsx("p", {
                                "code-path": "src/pages/AboutPage.tsx:239:17",
                                className: "text-sm text-gray-500 mb-4",
                                children: "获取最新藏品上架信息和活动通知"
                            }), n.jsxs("form", {
                                "code-path": "src/pages/AboutPage.tsx:240:17",
                                onSubmit: m,
                                className: "flex gap-2",
                                children: [n.jsx("input", {
                                    "code-path": "src/pages/AboutPage.tsx:241:19",
                                    type: "email",
                                    placeholder: "输入您的邮箱",
                                    value: o,
                                    onChange: j => d(j.target.value),
                                    className: "flex-1 px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-[#ff7e5d] focus:ring-2 focus:ring-[#ff7e5d]/20 outline-none transition-all",
                                    required: !0
                                }), n.jsx("button", {
                                    "code-path": "src/pages/AboutPage.tsx:249:19",
                                    type: "submit",
                                    className: "px-6 py-3 bg-[#ff7e5d] text-white rounded-xl font-medium hover:bg-[#e86a4a] transition-colors",
                                    children: n.jsx(Qh, {
                                        "code-path": "src/pages/AboutPage.tsx:253:21",
                                        className: "w-5 h-5"
                                    })
                                })]
                            })]
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/AboutPage.tsx:260:13",
                        className: "p-8 bg-gray-50 rounded-2xl",
                        children: [n.jsx("h3", {
                            "code-path": "src/pages/AboutPage.tsx:261:15",
                            className: "text-xl font-semibold text-dark mb-6",
                            children: "给我们留言"
                        }), n.jsxs("form", {
                            "code-path": "src/pages/AboutPage.tsx:262:15",
                            onSubmit: p,
                            className: "space-y-4",
                            children: [n.jsxs("div", {
                                "code-path": "src/pages/AboutPage.tsx:263:17",
                                children: [n.jsx("label", {
                                    "code-path": "src/pages/AboutPage.tsx:264:19",
                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                    children: "您的姓名"
                                }), n.jsx("input", {
                                    "code-path": "src/pages/AboutPage.tsx:265:19",
                                    type: "text",
                                    value: i.name,
                                    onChange: j => u({
                                        ...i,
                                        name: j.target.value
                                    }),
                                    className: "w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-[#ff7e5d] focus:ring-2 focus:ring-[#ff7e5d]/20 outline-none transition-all",
                                    placeholder: "请输入您的姓名",
                                    required: !0
                                })]
                            }), n.jsxs("div", {
                                "code-path": "src/pages/AboutPage.tsx:274:17",
                                children: [n.jsx("label", {
                                    "code-path": "src/pages/AboutPage.tsx:275:19",
                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                    children: "电子邮箱"
                                }), n.jsx("input", {
                                    "code-path": "src/pages/AboutPage.tsx:276:19",
                                    type: "email",
                                    value: i.email,
                                    onChange: j => u({
                                        ...i,
                                        email: j.target.value
                                    }),
                                    className: "w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-[#ff7e5d] focus:ring-2 focus:ring-[#ff7e5d]/20 outline-none transition-all",
                                    placeholder: "请输入您的邮箱",
                                    required: !0
                                })]
                            }), n.jsxs("div", {
                                "code-path": "src/pages/AboutPage.tsx:285:17",
                                children: [n.jsx("label", {
                                    "code-path": "src/pages/AboutPage.tsx:286:19",
                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                    children: "留言内容"
                                }), n.jsx("textarea", {
                                    "code-path": "src/pages/AboutPage.tsx:287:19",
                                    value: i.content,
                                    onChange: j => u({
                                        ...i,
                                        content: j.target.value
                                    }),
                                    rows: 5,
                                    className: "w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-[#ff7e5d] focus:ring-2 focus:ring-[#ff7e5d]/20 outline-none transition-all resize-none",
                                    placeholder: "请输入您想说的话...",
                                    required: !0
                                })]
                            }), n.jsxs("button", {
                                "code-path": "src/pages/AboutPage.tsx:296:17",
                                type: "submit",
                                className: "w-full btn-primary flex items-center justify-center gap-2",
                                children: [n.jsx(su, {
                                    "code-path": "src/pages/AboutPage.tsx:300:19",
                                    className: "w-5 h-5"
                                }), "提交留言"]
                            })]
                        })]
                    })]
                })
            })
        })]
    })
}

function A2() {
    const {
        items: l,
        favorites: i,
        toggleFavorite: u
    } = ht(), [o, d] = x.useState("all"), p = x.useMemo(() => {
        let j = l.filter(v => v.status === "available");
        switch (o) {
            case "new":
                j = j.filter(v => v.isNew);
                break;
            case "recommended":
                j = j.filter(v => v.isRecommended);
                break;
            case "limited":
                j = j.filter(v => v.price > 200);
                break
        }
        return j
    }, [l, o]), m = p.filter(j => j.isNew).slice(0, 4), h = p.filter(j => j.isRecommended).slice(0, 4), b = p.filter(j => j.price > 200).slice(0, 4), y = [{
        id: "all",
        label: "全部商品",
        icon: Ft
    }, {
        id: "new",
        label: "刚断舍离",
        icon: Pt
    }, {
        id: "recommended",
        label: "馆长推荐",
        icon: Im
    }, {
        id: "limited",
        label: "限时留赏",
        icon: Vm
    }];
    return n.jsxs("div", {
        "code-path": "src/pages/MarketPage.tsx:45:5",
        className: "min-h-screen bg-gray-50",
        children: [n.jsx("div", {
            "code-path": "src/pages/MarketPage.tsx:47:7",
            className: "bg-gradient-to-br from-[#ff7e5d] to-[#ff9a7e] py-16",
            children: n.jsx("div", {
                "code-path": "src/pages/MarketPage.tsx:48:9",
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: n.jsxs("div", {
                    "code-path": "src/pages/MarketPage.tsx:49:11",
                    className: "flex flex-col md:flex-row md:items-end justify-between gap-6",
                    children: [n.jsxs("div", {
                        "code-path": "src/pages/MarketPage.tsx:50:13",
                        children: [n.jsxs("div", {
                            "code-path": "src/pages/MarketPage.tsx:51:15",
                            className: "flex items-center gap-2 text-white/80 mb-2",
                            children: [n.jsx(Ft, {
                                "code-path": "src/pages/MarketPage.tsx:52:17",
                                className: "w-5 h-5"
                            }), n.jsx("span", {
                                "code-path": "src/pages/MarketPage.tsx:53:17",
                                className: "text-sm font-medium",
                                children: "好物流转"
                            })]
                        }), n.jsx("h1", {
                            "code-path": "src/pages/MarketPage.tsx:55:15",
                            className: "heading-1 text-white",
                            children: "断舍离市集"
                        }), n.jsx("p", {
                            "code-path": "src/pages/MarketPage.tsx:56:15",
                            className: "text-white/80 mt-4 max-w-xl",
                            children: "每一件藏品都有它的故事，当它们完成使命，我们希望帮助它们找到新的归宿，延续生命的价值"
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/MarketPage.tsx:60:13",
                        className: "text-white/80 text-right",
                        children: [n.jsx("p", {
                            "code-path": "src/pages/MarketPage.tsx:61:15",
                            className: "text-4xl font-bold text-white",
                            children: p.length
                        }), n.jsx("p", {
                            "code-path": "src/pages/MarketPage.tsx:62:15",
                            className: "text-sm",
                            children: "件藏品正在寻找新主人"
                        })]
                    })]
                })
            })
        }), n.jsx("div", {
            "code-path": "src/pages/MarketPage.tsx:69:7",
            className: "bg-white border-b border-gray-200 sticky top-16 z-30",
            children: n.jsx("div", {
                "code-path": "src/pages/MarketPage.tsx:70:9",
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",
                children: n.jsxs("div", {
                    "code-path": "src/pages/MarketPage.tsx:71:11",
                    className: "flex items-center gap-2 overflow-x-auto pb-2",
                    children: [n.jsx(au, {
                        "code-path": "src/pages/MarketPage.tsx:72:13",
                        className: "w-4 h-4 text-gray-500 shrink-0"
                    }), y.map(j => n.jsxs("button", {
                        "code-path": "src/pages/MarketPage.tsx:74:15",
                        onClick: () => d(j.id),
                        className: `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${o===j.id?"bg-[#ff7e5d] text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                        children: [n.jsx(j.icon, {
                            "code-path": "src/pages/MarketPage.tsx:83:17",
                            className: "w-4 h-4"
                        }), j.label]
                    }, j.id))]
                })
            })
        }), n.jsxs("div", {
            "code-path": "src/pages/MarketPage.tsx:92:7",
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
            children: [o === "all" ? n.jsxs("div", {
                "code-path": "src/pages/MarketPage.tsx:95:11",
                className: "space-y-16",
                children: [m.length > 0 && n.jsxs("section", {
                    "code-path": "src/pages/MarketPage.tsx:98:15",
                    children: [n.jsxs("div", {
                        "code-path": "src/pages/MarketPage.tsx:99:17",
                        className: "flex items-center justify-between mb-8",
                        children: [n.jsxs("div", {
                            "code-path": "src/pages/MarketPage.tsx:100:19",
                            className: "flex items-center gap-3",
                            children: [n.jsx("div", {
                                "code-path": "src/pages/MarketPage.tsx:101:21",
                                className: "w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center",
                                children: n.jsx(Pt, {
                                    "code-path": "src/pages/MarketPage.tsx:102:23",
                                    className: "w-5 h-5 text-green-600"
                                })
                            }), n.jsxs("div", {
                                "code-path": "src/pages/MarketPage.tsx:104:21",
                                children: [n.jsx("h2", {
                                    "code-path": "src/pages/MarketPage.tsx:105:23",
                                    className: "text-xl font-semibold text-dark",
                                    children: "刚断舍离"
                                }), n.jsx("p", {
                                    "code-path": "src/pages/MarketPage.tsx:106:23",
                                    className: "text-sm text-gray-500",
                                    children: "最新上架的藏品"
                                })]
                            })]
                        }), n.jsx("button", {
                            "code-path": "src/pages/MarketPage.tsx:109:19",
                            onClick: () => d("new"),
                            className: "text-[#ff7e5d] text-sm font-medium hover:underline",
                            children: "查看全部"
                        })]
                    }), n.jsx("div", {
                        "code-path": "src/pages/MarketPage.tsx:116:17",
                        className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
                        children: m.map(j => n.jsx(ba, {
                            "code-path": "src/pages/MarketPage.tsx:118:21",
                            item: j,
                            isFavorite: i.includes(j.id),
                            onToggleFavorite: () => u(j.id),
                            showPrice: !0
                        }, j.id))
                    })]
                }), h.length > 0 && n.jsxs("section", {
                    "code-path": "src/pages/MarketPage.tsx:132:15",
                    children: [n.jsxs("div", {
                        "code-path": "src/pages/MarketPage.tsx:133:17",
                        className: "flex items-center justify-between mb-8",
                        children: [n.jsxs("div", {
                            "code-path": "src/pages/MarketPage.tsx:134:19",
                            className: "flex items-center gap-3",
                            children: [n.jsx("div", {
                                "code-path": "src/pages/MarketPage.tsx:135:21",
                                className: "w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center",
                                children: n.jsx(Im, {
                                    "code-path": "src/pages/MarketPage.tsx:136:23",
                                    className: "w-5 h-5 text-amber-600"
                                })
                            }), n.jsxs("div", {
                                "code-path": "src/pages/MarketPage.tsx:138:21",
                                children: [n.jsx("h2", {
                                    "code-path": "src/pages/MarketPage.tsx:139:23",
                                    className: "text-xl font-semibold text-dark",
                                    children: "馆长推荐"
                                }), n.jsx("p", {
                                    "code-path": "src/pages/MarketPage.tsx:140:23",
                                    className: "text-sm text-gray-500",
                                    children: "精选优质藏品"
                                })]
                            })]
                        }), n.jsx("button", {
                            "code-path": "src/pages/MarketPage.tsx:143:19",
                            onClick: () => d("recommended"),
                            className: "text-[#ff7e5d] text-sm font-medium hover:underline",
                            children: "查看全部"
                        })]
                    }), n.jsx("div", {
                        "code-path": "src/pages/MarketPage.tsx:150:17",
                        className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
                        children: h.map(j => n.jsx(ba, {
                            "code-path": "src/pages/MarketPage.tsx:152:21",
                            item: j,
                            isFavorite: i.includes(j.id),
                            onToggleFavorite: () => u(j.id),
                            showPrice: !0
                        }, j.id))
                    })]
                }), b.length > 0 && n.jsxs("section", {
                    "code-path": "src/pages/MarketPage.tsx:166:15",
                    children: [n.jsxs("div", {
                        "code-path": "src/pages/MarketPage.tsx:167:17",
                        className: "flex items-center justify-between mb-8",
                        children: [n.jsxs("div", {
                            "code-path": "src/pages/MarketPage.tsx:168:19",
                            className: "flex items-center gap-3",
                            children: [n.jsx("div", {
                                "code-path": "src/pages/MarketPage.tsx:169:21",
                                className: "w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center",
                                children: n.jsx(Vm, {
                                    "code-path": "src/pages/MarketPage.tsx:170:23",
                                    className: "w-5 h-5 text-red-600"
                                })
                            }), n.jsxs("div", {
                                "code-path": "src/pages/MarketPage.tsx:172:21",
                                children: [n.jsx("h2", {
                                    "code-path": "src/pages/MarketPage.tsx:173:23",
                                    className: "text-xl font-semibold text-dark",
                                    children: "限时留赏"
                                }), n.jsx("p", {
                                    "code-path": "src/pages/MarketPage.tsx:174:23",
                                    className: "text-sm text-gray-500",
                                    children: "珍贵藏品限时展示"
                                })]
                            })]
                        }), n.jsx("button", {
                            "code-path": "src/pages/MarketPage.tsx:177:19",
                            onClick: () => d("limited"),
                            className: "text-[#ff7e5d] text-sm font-medium hover:underline",
                            children: "查看全部"
                        })]
                    }), n.jsx("div", {
                        "code-path": "src/pages/MarketPage.tsx:184:17",
                        className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
                        children: b.map(j => n.jsx(ba, {
                            "code-path": "src/pages/MarketPage.tsx:186:21",
                            item: j,
                            isFavorite: i.includes(j.id),
                            onToggleFavorite: () => u(j.id),
                            showPrice: !0
                        }, j.id))
                    })]
                })]
            }) : n.jsx("div", {
                "code-path": "src/pages/MarketPage.tsx:200:11",
                className: "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                children: p.map(j => n.jsx(ba, {
                    "code-path": "src/pages/MarketPage.tsx:202:15",
                    item: j,
                    isFavorite: i.includes(j.id),
                    onToggleFavorite: () => u(j.id),
                    showPrice: !0
                }, j.id))
            }), p.length === 0 && n.jsxs("div", {
                "code-path": "src/pages/MarketPage.tsx:214:11",
                className: "text-center py-20",
                children: [n.jsx("div", {
                    "code-path": "src/pages/MarketPage.tsx:215:13",
                    className: "w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center",
                    children: n.jsx(Ft, {
                        "code-path": "src/pages/MarketPage.tsx:216:15",
                        className: "w-10 h-10 text-gray-400"
                    })
                }), n.jsx("h3", {
                    "code-path": "src/pages/MarketPage.tsx:218:13",
                    className: "text-xl font-semibold text-dark mb-2",
                    children: "暂无符合条件的商品"
                }), n.jsx("p", {
                    "code-path": "src/pages/MarketPage.tsx:219:13",
                    className: "text-gray-500",
                    children: "请尝试其他筛选条件"
                })]
            })]
        }), n.jsx("section", {
            "code-path": "src/pages/MarketPage.tsx:225:7",
            className: "py-16 bg-white border-t border-gray-200",
            children: n.jsxs("div", {
                "code-path": "src/pages/MarketPage.tsx:226:9",
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [n.jsxs("div", {
                    "code-path": "src/pages/MarketPage.tsx:227:11",
                    className: "text-center mb-12",
                    children: [n.jsx("h2", {
                        "code-path": "src/pages/MarketPage.tsx:228:13",
                        className: "heading-3 text-dark mb-4",
                        children: "交易须知"
                    }), n.jsx("p", {
                        "code-path": "src/pages/MarketPage.tsx:229:13",
                        className: "text-gray-600",
                        children: "为保障您的权益，请仔细阅读以下交易规则"
                    })]
                }), n.jsx("div", {
                    "code-path": "src/pages/MarketPage.tsx:232:11",
                    className: "grid md:grid-cols-4 gap-6",
                    children: [{
                        title: "正品保证",
                        desc: "所有藏品均经过馆长亲自鉴定"
                    }, {
                        title: "安全支付",
                        desc: "支持微信、支付宝等多种支付方式"
                    }, {
                        title: "专业包装",
                        desc: "采用专业包装材料，确保运输安全"
                    }, {
                        title: "售后无忧",
                        desc: "7天无理由退换，让您放心购买"
                    }].map((j, v) => n.jsxs("div", {
                        "code-path": "src/pages/MarketPage.tsx:239:15",
                        className: "text-center p-6",
                        children: [n.jsx("div", {
                            "code-path": "src/pages/MarketPage.tsx:240:17",
                            className: "w-12 h-12 mx-auto mb-4 rounded-full bg-[#ff7e5d]/10 flex items-center justify-center",
                            children: n.jsx("span", {
                                "code-path": "src/pages/MarketPage.tsx:241:19",
                                className: "text-[#ff7e5d] font-bold",
                                children: v + 1
                            })
                        }), n.jsx("h3", {
                            "code-path": "src/pages/MarketPage.tsx:243:17",
                            className: "font-semibold text-dark mb-2",
                            children: j.title
                        }), n.jsx("p", {
                            "code-path": "src/pages/MarketPage.tsx:244:17",
                            className: "text-sm text-gray-500",
                            children: j.desc
                        })]
                    }, v))
                })]
            })
        })]
    })
}

function M2() {
    const {
        items: l,
        favorites: i,
        toggleFavorite: u
    } = ht(), o = l.filter(d => i.includes(d.id));
    return n.jsxs("div", {
        "code-path": "src/pages/FavoritesPage.tsx:13:5",
        className: "min-h-screen bg-gray-50",
        children: [n.jsx("div", {
            "code-path": "src/pages/FavoritesPage.tsx:15:7",
            className: "bg-white border-b border-gray-200",
            children: n.jsxs("div", {
                "code-path": "src/pages/FavoritesPage.tsx:16:9",
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: [n.jsxs("nav", {
                    "code-path": "src/pages/FavoritesPage.tsx:17:11",
                    className: "flex items-center gap-2 text-sm text-gray-500 mb-4",
                    children: [n.jsx(be, {
                        "code-path": "src/pages/FavoritesPage.tsx:18:13",
                        to: "/",
                        className: "hover:text-[#ff7e5d]",
                        children: "首页"
                    }), n.jsx(fl, {
                        "code-path": "src/pages/FavoritesPage.tsx:19:13",
                        className: "w-4 h-4"
                    }), n.jsx("span", {
                        "code-path": "src/pages/FavoritesPage.tsx:20:13",
                        className: "text-dark",
                        children: "我的关注"
                    })]
                }), n.jsxs("div", {
                    "code-path": "src/pages/FavoritesPage.tsx:23:11",
                    className: "flex items-center justify-between",
                    children: [n.jsxs("div", {
                        "code-path": "src/pages/FavoritesPage.tsx:24:13",
                        children: [n.jsx("h1", {
                            "code-path": "src/pages/FavoritesPage.tsx:25:15",
                            className: "heading-2 text-dark",
                            children: "我的关注"
                        }), n.jsxs("p", {
                            "code-path": "src/pages/FavoritesPage.tsx:26:15",
                            className: "text-gray-500 mt-1",
                            children: ["共 ", n.jsx("span", {
                                "code-path": "src/pages/FavoritesPage.tsx:27:19",
                                className: "font-semibold text-[#ff7e5d]",
                                children: o.length
                            }), " 件收藏的展品"]
                        })]
                    }), n.jsx("div", {
                        "code-path": "src/pages/FavoritesPage.tsx:30:13",
                        className: "w-12 h-12 rounded-full bg-[#ff7e5d]/10 flex items-center justify-center",
                        children: n.jsx(qt, {
                            "code-path": "src/pages/FavoritesPage.tsx:31:15",
                            className: "w-6 h-6 text-[#ff7e5d]"
                        })
                    })]
                })]
            })
        }), n.jsx("div", {
            "code-path": "src/pages/FavoritesPage.tsx:38:7",
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
            children: o.length > 0 ? n.jsx("div", {
                "code-path": "src/pages/FavoritesPage.tsx:40:11",
                className: "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                children: o.map(d => n.jsx(ba, {
                    "code-path": "src/pages/FavoritesPage.tsx:42:15",
                    item: d,
                    isFavorite: !0,
                    onToggleFavorite: () => u(d.id),
                    showPrice: !0
                }, d.id))
            }) : n.jsxs("div", {
                "code-path": "src/pages/FavoritesPage.tsx:52:11",
                className: "text-center py-20",
                children: [n.jsx("div", {
                    "code-path": "src/pages/FavoritesPage.tsx:53:13",
                    className: "w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center",
                    children: n.jsx(qt, {
                        "code-path": "src/pages/FavoritesPage.tsx:54:15",
                        className: "w-10 h-10 text-gray-400"
                    })
                }), n.jsx("h3", {
                    "code-path": "src/pages/FavoritesPage.tsx:56:13",
                    className: "text-xl font-semibold text-dark mb-2",
                    children: "暂无关注的展品"
                }), n.jsx("p", {
                    "code-path": "src/pages/FavoritesPage.tsx:57:13",
                    className: "text-gray-500 mb-6",
                    children: "浏览藏品时点击心形图标，即可收藏您喜欢的展品"
                }), n.jsxs(be, {
                    "code-path": "src/pages/FavoritesPage.tsx:58:13",
                    to: "/",
                    className: "inline-flex items-center gap-2 btn-primary",
                    children: [n.jsx(Ft, {
                        "code-path": "src/pages/FavoritesPage.tsx:62:15",
                        className: "w-5 h-5"
                    }), "去逛逛"]
                })]
            })
        })]
    })
}

function D2() {
    const l = fu(),
        {
            setIsAdmin: i,
            showNotification: u
        } = ht(),
        [o, d] = x.useState({
            username: "",
            password: ""
        }),
        [p, m] = x.useState(!1),
        [h, b] = x.useState(!1),
        y = async j => {
            j.preventDefault(), b(!0), setTimeout(() => {
                o.username === Xm.username && o.password === Xm.password ? (i(!0), u("登录成功", "success"), l("/admin/items")) : u("用户名或密码错误", "error"), b(!1)
            }, 1e3)
        };
    return n.jsx("div", {
        "code-path": "src/pages/admin/LoginPage.tsx:35:5",
        className: "min-h-screen bg-gradient-to-br from-[#6B3E26] to-[#5C3317] flex items-center justify-center p-4",
        children: n.jsxs("div", {
            "code-path": "src/pages/admin/LoginPage.tsx:36:7",
            className: "w-full max-w-md",
            children: [n.jsxs("div", {
                "code-path": "src/pages/admin/LoginPage.tsx:38:9",
                className: "text-center mb-8",
                children: [n.jsx("div", {
                    "code-path": "src/pages/admin/LoginPage.tsx:39:11",
                    className: "mx-auto mb-4 inline-block",
                    children: n.jsx("img", {
                        "code-path": "src/pages/admin/LoginPage.tsx:40:13",
                        src: "/images/logo-login.png?v=2",
                        alt: "小猪博物馆",
                        className: "h-14 w-auto object-contain",
                        style: {
                            filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2))"
                        }
                    })
                }), n.jsx("h1", {
                    "code-path": "src/pages/admin/LoginPage.tsx:47:11",
                    className: "text-2xl font-bold text-white",
                    children: "小猪博物馆"
                }), n.jsx("p", {
                    "code-path": "src/pages/admin/LoginPage.tsx:48:11",
                    className: "text-white/80",
                    children: "后台管理系统"
                })]
            }), n.jsxs("div", {
                "code-path": "src/pages/admin/LoginPage.tsx:52:9",
                className: "bg-white rounded-2xl shadow-2xl p-8",
                children: [n.jsx("h2", {
                    "code-path": "src/pages/admin/LoginPage.tsx:53:11",
                    className: "text-xl font-semibold text-dark text-center mb-6",
                    children: "管理员登录"
                }), n.jsxs("form", {
                    "code-path": "src/pages/admin/LoginPage.tsx:55:11",
                    onSubmit: y,
                    className: "space-y-6",
                    children: [n.jsxs("div", {
                        "code-path": "src/pages/admin/LoginPage.tsx:56:13",
                        children: [n.jsx("label", {
                            "code-path": "src/pages/admin/LoginPage.tsx:57:15",
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "用户名"
                        }), n.jsxs("div", {
                            "code-path": "src/pages/admin/LoginPage.tsx:60:15",
                            className: "relative",
                            children: [n.jsx(Zh, {
                                "code-path": "src/pages/admin/LoginPage.tsx:61:17",
                                className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                            }), n.jsx("input", {
                                "code-path": "src/pages/admin/LoginPage.tsx:62:17",
                                type: "text",
                                value: o.username,
                                onChange: j => d({
                                    ...o,
                                    username: j.target.value
                                }),
                                className: "w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6B3E26] focus:ring-2 focus:ring-[#6B3E26]/20 outline-none transition-all",
                                placeholder: "请输入用户名",
                                required: !0
                            })]
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/admin/LoginPage.tsx:73:13",
                        children: [n.jsx("label", {
                            "code-path": "src/pages/admin/LoginPage.tsx:74:15",
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "密码"
                        }), n.jsxs("div", {
                            "code-path": "src/pages/admin/LoginPage.tsx:77:15",
                            className: "relative",
                            children: [n.jsx(Tv, {
                                "code-path": "src/pages/admin/LoginPage.tsx:78:17",
                                className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                            }), n.jsx("input", {
                                "code-path": "src/pages/admin/LoginPage.tsx:79:17",
                                type: p ? "text" : "password",
                                value: o.password,
                                onChange: j => d({
                                    ...o,
                                    password: j.target.value
                                }),
                                className: "w-full pl-12 pr-12 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#6B3E26] focus:ring-2 focus:ring-[#6B3E26]/20 outline-none transition-all",
                                placeholder: "请输入密码",
                                required: !0
                            }), n.jsx("button", {
                                "code-path": "src/pages/admin/LoginPage.tsx:87:17",
                                type: "button",
                                onClick: () => m(!p),
                                className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",
                                children: p ? n.jsx(hv, {
                                    "code-path": "src/pages/admin/LoginPage.tsx:92:35",
                                    className: "w-5 h-5"
                                }) : n.jsx(xu, {
                                    "code-path": "src/pages/admin/LoginPage.tsx:92:68",
                                    className: "w-5 h-5"
                                })
                            })]
                        })]
                    }), n.jsx("button", {
                        "code-path": "src/pages/admin/LoginPage.tsx:97:13",
                        type: "submit",
                        disabled: h,
                        className: "w-full py-3 bg-[#6B3E26] text-white rounded-xl font-medium hover:bg-[#5C3317] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                        children: h ? n.jsxs(n.Fragment, {
                            children: [n.jsx("div", {
                                "code-path": "src/pages/admin/LoginPage.tsx:104:19",
                                className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                            }), "登录中..."]
                        }) : "登录"
                    })]
                }), n.jsx("div", {
                    "code-path": "src/pages/admin/LoginPage.tsx:113:11",
                    className: "mt-6 text-center",
                    children: n.jsx("p", {
                        "code-path": "src/pages/admin/LoginPage.tsx:114:13",
                        className: "text-sm text-gray-500",
                        children: "默认账号: admin / 密码: admin123"
                    })
                })]
            }), n.jsx("div", {
                "code-path": "src/pages/admin/LoginPage.tsx:121:9",
                className: "text-center mt-8",
                children: n.jsx("a", {
                    "code-path": "src/pages/admin/LoginPage.tsx:122:11",
                    href: "/",
                    className: "text-white/80 hover:text-white text-sm",
                    children: "← 返回前台首页"
                })
            })]
        })
    })
}

function O2() {
    const l = fu(),
        i = Wt(),
        {
            isAdmin: u,
            setIsAdmin: o,
            showNotification: d
        } = ht(),
        [p, m] = x.useState(!0);
    x.useEffect(() => {
        !u && i.pathname !== "/admin/login" && l("/admin/login")
    }, [u, i.pathname, l]);
    const h = () => {
            o(!1), d("已退出登录", "info"), l("/admin/login")
        },
        b = [{
            path: "/admin/items",
            label: "展品管理",
            icon: nu
        }, {
            path: "/admin/orders",
            label: "订单管理",
            icon: Km
        }, {
            path: "/admin/messages",
            label: "留言管理",
            icon: lu
        }, {
            path: "/admin/settings",
            label: "系统设置",
            icon: s2
        }],
        y = v => i.pathname === v,
        j = [{
            label: "展品总数",
            value: Uh.length,
            icon: nu,
            color: "bg-blue-100 text-blue-600"
        }, {
            label: "待处理订单",
            value: tu.filter(v => v.status === "pending").length,
            icon: Km,
            color: "bg-green-100 text-green-600"
        }, {
            label: "未回复留言",
            value: Bh.filter(v => !v.isReplied).length,
            icon: lu,
            color: "bg-amber-100 text-amber-600"
        }, {
            label: "总销售额",
            value: `¥${tu.filter(v=>v.status==="completed").reduce((v,S)=>v+S.price,0)}`,
            icon: Mv,
            color: "bg-[#ff7e5d]/10 text-[#ff7e5d]"
        }];
    return u ? n.jsxs("div", {
        "code-path": "src/pages/admin/Dashboard.tsx:56:5",
        className: "min-h-screen bg-gray-100 flex",
        children: [n.jsxs("aside", {
            "code-path": "src/pages/admin/Dashboard.tsx:58:7",
            className: `fixed lg:static inset-y-0 left-0 z-50 w-64 bg-dark text-white transition-transform duration-300 ${p?"translate-x-0":"-translate-x-full lg:translate-x-0"}`,
            children: [n.jsx("div", {
                "code-path": "src/pages/admin/Dashboard.tsx:64:9",
                className: "p-6 border-b border-gray-800",
                children: n.jsxs(be, {
                    "code-path": "src/pages/admin/Dashboard.tsx:65:11",
                    to: "/",
                    className: "flex items-center gap-3",
                    children: [n.jsx("div", {
                        "code-path": "src/pages/admin/Dashboard.tsx:66:13",
                        className: "w-10 h-10 rounded-full bg-gradient-to-br from-[#ff7e5d] to-[#ff9a7e] flex items-center justify-center",
                        children: n.jsx("span", {
                            "code-path": "src/pages/admin/Dashboard.tsx:67:15",
                            className: "text-white font-bold",
                            children: "猪"
                        })
                    }), n.jsxs("div", {
                        "code-path": "src/pages/admin/Dashboard.tsx:69:13",
                        children: [n.jsx("h1", {
                            "code-path": "src/pages/admin/Dashboard.tsx:70:15",
                            className: "font-bold",
                            children: "小猪博物馆"
                        }), n.jsx("p", {
                            "code-path": "src/pages/admin/Dashboard.tsx:71:15",
                            className: "text-xs text-gray-400",
                            children: "后台管理"
                        })]
                    })]
                })
            }), n.jsx("nav", {
                "code-path": "src/pages/admin/Dashboard.tsx:77:9",
                className: "p-4 space-y-1",
                children: b.map(v => n.jsxs(be, {
                    "code-path": "src/pages/admin/Dashboard.tsx:79:13",
                    to: v.path,
                    className: `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${y(v.path)?"bg-[#ff7e5d] text-white":"text-gray-400 hover:bg-gray-800 hover:text-white"}`,
                    children: [n.jsx(v.icon, {
                        "code-path": "src/pages/admin/Dashboard.tsx:88:15",
                        className: "w-5 h-5"
                    }), v.label]
                }, v.path))
            }), n.jsx("div", {
                "code-path": "src/pages/admin/Dashboard.tsx:95:9",
                className: "absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800",
                children: n.jsxs("button", {
                    "code-path": "src/pages/admin/Dashboard.tsx:96:11",
                    onClick: h,
                    className: "flex items-center gap-3 px-4 py-3 w-full rounded-xl text-gray-400 hover:bg-gray-800 hover:text-white transition-all",
                    children: [n.jsx(zv, {
                        "code-path": "src/pages/admin/Dashboard.tsx:100:13",
                        className: "w-5 h-5"
                    }), "退出登录"]
                })
            })]
        }), p && n.jsx("div", {
            "code-path": "src/pages/admin/Dashboard.tsx:108:9",
            className: "fixed inset-0 bg-black/50 z-40 lg:hidden",
            onClick: () => m(!1)
        }), n.jsxs("main", {
            "code-path": "src/pages/admin/Dashboard.tsx:115:7",
            className: "flex-1 min-w-0",
            children: [n.jsx("header", {
                "code-path": "src/pages/admin/Dashboard.tsx:117:9",
                className: "bg-white border-b border-gray-200 sticky top-0 z-30",
                children: n.jsxs("div", {
                    "code-path": "src/pages/admin/Dashboard.tsx:118:11",
                    className: "flex items-center justify-between px-6 py-4",
                    children: [n.jsx("button", {
                        "code-path": "src/pages/admin/Dashboard.tsx:119:13",
                        onClick: () => m(!p),
                        className: "lg:hidden p-2 rounded-lg hover:bg-gray-100",
                        children: p ? n.jsx(ja, {
                            "code-path": "src/pages/admin/Dashboard.tsx:123:32",
                            className: "w-5 h-5"
                        }) : n.jsx(Xh, {
                            "code-path": "src/pages/admin/Dashboard.tsx:123:60",
                            className: "w-5 h-5"
                        })
                    }), n.jsxs("div", {
                        "code-path": "src/pages/admin/Dashboard.tsx:126:13",
                        className: "flex items-center gap-4",
                        children: [n.jsx("span", {
                            "code-path": "src/pages/admin/Dashboard.tsx:127:15",
                            className: "text-sm text-gray-500",
                            children: "管理员"
                        }), n.jsx("div", {
                            "code-path": "src/pages/admin/Dashboard.tsx:128:15",
                            className: "w-8 h-8 rounded-full bg-[#ff7e5d] flex items-center justify-center text-white text-sm font-medium",
                            children: "馆"
                        })]
                    })]
                })
            }), n.jsxs("div", {
                "code-path": "src/pages/admin/Dashboard.tsx:136:9",
                className: "p-6",
                children: [i.pathname === "/admin" && n.jsxs("div", {
                    "code-path": "src/pages/admin/Dashboard.tsx:139:13",
                    className: "mb-8",
                    children: [n.jsx("h2", {
                        "code-path": "src/pages/admin/Dashboard.tsx:140:15",
                        className: "text-2xl font-bold text-dark mb-6",
                        children: "仪表盘"
                    }), n.jsx("div", {
                        "code-path": "src/pages/admin/Dashboard.tsx:141:15",
                        className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
                        children: j.map((v, S) => n.jsx("div", {
                            "code-path": "src/pages/admin/Dashboard.tsx:143:19",
                            className: "bg-white rounded-2xl p-6 shadow-sm",
                            children: n.jsxs("div", {
                                "code-path": "src/pages/admin/Dashboard.tsx:144:21",
                                className: "flex items-center justify-between",
                                children: [n.jsxs("div", {
                                    "code-path": "src/pages/admin/Dashboard.tsx:145:23",
                                    children: [n.jsx("p", {
                                        "code-path": "src/pages/admin/Dashboard.tsx:146:25",
                                        className: "text-sm text-gray-500 mb-1",
                                        children: v.label
                                    }), n.jsx("p", {
                                        "code-path": "src/pages/admin/Dashboard.tsx:147:25",
                                        className: "text-2xl font-bold text-dark",
                                        children: v.value
                                    })]
                                }), n.jsx("div", {
                                    "code-path": "src/pages/admin/Dashboard.tsx:149:23",
                                    className: `w-12 h-12 rounded-xl ${v.color} flex items-center justify-center`,
                                    children: n.jsx(v.icon, {
                                        "code-path": "src/pages/admin/Dashboard.tsx:150:25",
                                        className: "w-6 h-6"
                                    })
                                })]
                            })
                        }, S))
                    })]
                }), n.jsx(Th, {
                    "code-path": "src/pages/admin/Dashboard.tsx:159:11"
                })]
            })]
        })]
    }) : null
}

function es(l, i, {
    checkForDefaultPrevented: u = !0
} = {}) {
    return function(d) {
        if (l?.(d), u === !1 || !d.defaultPrevented) return i?.(d)
    }
}

function Jm(l, i) {
    if (typeof l == "function") return l(i);
    l != null && (l.current = i)
}

function bu(...l) {
    return i => {
        let u = !1;
        const o = l.map(d => {
            const p = Jm(d, i);
            return !u && typeof p == "function" && (u = !0), p
        });
        if (u) return () => {
            for (let d = 0; d < o.length; d++) {
                const p = o[d];
                typeof p == "function" ? p() : Jm(l[d], null)
            }
        }
    }
}

function Ss(...l) {
    return x.useCallback(bu(...l), l)
}

function R2(l, i) {
    const u = x.createContext(i),
        o = p => {
            const {
                children: m,
                ...h
            } = p, b = x.useMemo(() => h, Object.values(h));
            return n.jsx(u.Provider, {
                value: b,
                children: m
            })
        };
    o.displayName = l + "Provider";

    function d(p) {
        const m = x.useContext(u);
        if (m) return m;
        if (i !== void 0) return i;
        throw new Error(`\`${p}\` must be used within \`${l}\``)
    }
    return [o, d]
}

function T2(l, i = []) {
    let u = [];

    function o(p, m) {
        const h = x.createContext(m),
            b = u.length;
        u = [...u, m];
        const y = v => {
            const {
                scope: S,
                children: z,
                ...M
            } = v, E = S?.[l]?.[b] || h, O = x.useMemo(() => M, Object.values(M));
            return n.jsx(E.Provider, {
                value: O,
                children: z
            })
        };
        y.displayName = p + "Provider";

        function j(v, S) {
            const z = S?.[l]?.[b] || h,
                M = x.useContext(z);
            if (M) return M;
            if (m !== void 0) return m;
            throw new Error(`\`${v}\` must be used within \`${p}\``)
        }
        return [y, j]
    }
    const d = () => {
        const p = u.map(m => x.createContext(m));
        return function(h) {
            const b = h?.[l] || p;
            return x.useMemo(() => ({
                [`__scope${l}`]: {
                    ...h,
                    [l]: b
                }
            }), [h, b])
        }
    };
    return d.scopeName = l, [o, _2(d, ...i)]
}

function _2(...l) {
    const i = l[0];
    if (l.length === 1) return i;
    const u = () => {
        const o = l.map(d => ({
            useScope: d(),
            scopeName: d.scopeName
        }));
        return function(p) {
            const m = o.reduce((h, {
                useScope: b,
                scopeName: y
            }) => {
                const v = b(p)[`__scope${y}`];
                return {
                    ...h,
                    ...v
                }
            }, {});
            return x.useMemo(() => ({
                [`__scope${i.scopeName}`]: m
            }), [m])
        }
    };
    return u.scopeName = i.scopeName, u
}
var vn = globalThis?.document ? x.useLayoutEffect : () => {},
    z2 = hh[" useId ".trim().toString()] || (() => {}),
    k2 = 0;

function Go(l) {
    const [i, u] = x.useState(z2());
    return vn(() => {
        u(o => o ?? String(k2++))
    }, [l]), l || (i ? `radix-${i}` : "")
}
var H2 = hh[" useInsertionEffect ".trim().toString()] || vn;

function L2({
    prop: l,
    defaultProp: i,
    onChange: u = () => {},
    caller: o
}) {
    const [d, p, m] = U2({
        defaultProp: i,
        onChange: u
    }), h = l !== void 0, b = h ? l : d;
    {
        const j = x.useRef(l !== void 0);
        x.useEffect(() => {
            const v = j.current;
            v !== h && console.warn(`${o} is changing from ${v?"controlled":"uncontrolled"} to ${h?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), j.current = h
        }, [h, o])
    }
    const y = x.useCallback(j => {
        if (h) {
            const v = B2(j) ? j(l) : j;
            v !== l && m.current?.(v)
        } else p(j)
    }, [h, l, p, m]);
    return [b, y]
}

function U2({
    defaultProp: l,
    onChange: i
}) {
    const [u, o] = x.useState(l), d = x.useRef(u), p = x.useRef(i);
    return H2(() => {
        p.current = i
    }, [i]), x.useEffect(() => {
        d.current !== u && (p.current?.(u), d.current = u)
    }, [u, d]), [u, o, p]
}

function B2(l) {
    return typeof l == "function"
}

function P2(l) {
    const i = q2(l),
        u = x.forwardRef((o, d) => {
            const {
                children: p,
                ...m
            } = o, h = x.Children.toArray(p), b = h.find(G2);
            if (b) {
                const y = b.props.children,
                    j = h.map(v => v === b ? x.Children.count(y) > 1 ? x.Children.only(null) : x.isValidElement(y) ? y.props.children : null : v);
                return n.jsx(i, {
                    ...m,
                    ref: d,
                    children: x.isValidElement(y) ? x.cloneElement(y, void 0, j) : null
                })
            }
            return n.jsx(i, {
                ...m,
                ref: d,
                children: p
            })
        });
    return u.displayName = `${l}.Slot`, u
}

function q2(l) {
    const i = x.forwardRef((u, o) => {
        const {
            children: d,
            ...p
        } = u;
        if (x.isValidElement(d)) {
            const m = Q2(d),
                h = X2(p, d.props);
            return d.type !== x.Fragment && (h.ref = o ? bu(o, m) : m), x.cloneElement(d, h)
        }
        return x.Children.count(d) > 1 ? x.Children.only(null) : null
    });
    return i.displayName = `${l}.SlotClone`, i
}
var Y2 = Symbol("radix.slottable");

function G2(l) {
    return x.isValidElement(l) && typeof l.type == "function" && "__radixId" in l.type && l.type.__radixId === Y2
}

function X2(l, i) {
    const u = {
        ...i
    };
    for (const o in i) {
        const d = l[o],
            p = i[o];
        /^on[A-Z]/.test(o) ? d && p ? u[o] = (...h) => {
            const b = p(...h);
            return d(...h), b
        } : d && (u[o] = d) : o === "style" ? u[o] = {
            ...d,
            ...p
        } : o === "className" && (u[o] = [d, p].filter(Boolean).join(" "))
    }
    return {
        ...l,
        ...u
    }
}

function Q2(l) {
    let i = Object.getOwnPropertyDescriptor(l.props, "ref")?.get,
        u = i && "isReactWarning" in i && i.isReactWarning;
    return u ? l.ref : (i = Object.getOwnPropertyDescriptor(l, "ref")?.get, u = i && "isReactWarning" in i && i.isReactWarning, u ? l.props.ref : l.props.ref || l.ref)
}
var V2 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    Sa = V2.reduce((l, i) => {
        const u = P2(`Primitive.${i}`),
            o = x.forwardRef((d, p) => {
                const {
                    asChild: m,
                    ...h
                } = d, b = m ? u : i;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), n.jsx(b, {
                    ...h,
                    ref: p
                })
            });
        return o.displayName = `Primitive.${i}`, {
            ...l,
            [i]: o
        }
    }, {});

function Z2(l, i) {
    l && Lh.flushSync(() => l.dispatchEvent(i))
}

function bn(l) {
    const i = x.useRef(l);
    return x.useEffect(() => {
        i.current = l
    }), x.useMemo(() => (...u) => i.current?.(...u), [])
}

function K2(l, i = globalThis?.document) {
    const u = bn(l);
    x.useEffect(() => {
        const o = d => {
            d.key === "Escape" && u(d)
        };
        return i.addEventListener("keydown", o, {
            capture: !0
        }), () => i.removeEventListener("keydown", o, {
            capture: !0
        })
    }, [u, i])
}
var I2 = "DismissableLayer",
    cu = "dismissableLayer.update",
    J2 = "dismissableLayer.pointerDownOutside",
    F2 = "dismissableLayer.focusOutside",
    Fm, Kh = x.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    Ih = x.forwardRef((l, i) => {
        const {
            disableOutsidePointerEvents: u = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: d,
            onFocusOutside: p,
            onInteractOutside: m,
            onDismiss: h,
            ...b
        } = l, y = x.useContext(Kh), [j, v] = x.useState(null), S = j?.ownerDocument ?? globalThis?.document, [, z] = x.useState({}), M = Ss(i, X => v(X)), E = Array.from(y.layers), [O] = [...y.layersWithOutsidePointerEventsDisabled].slice(-1), U = E.indexOf(O), Z = j ? E.indexOf(j) : -1, V = y.layersWithOutsidePointerEventsDisabled.size > 0, J = Z >= U, ee = eb(X => {
            const A = X.target,
                ae = [...y.branches].some(ze => ze.contains(A));
            !J || ae || (d?.(X), m?.(X), X.defaultPrevented || h?.())
        }, S), G = tb(X => {
            const A = X.target;
            [...y.branches].some(ze => ze.contains(A)) || (p?.(X), m?.(X), X.defaultPrevented || h?.())
        }, S);
        return K2(X => {
            Z === y.layers.size - 1 && (o?.(X), !X.defaultPrevented && h && (X.preventDefault(), h()))
        }, S), x.useEffect(() => {
            if (j) return u && (y.layersWithOutsidePointerEventsDisabled.size === 0 && (Fm = S.body.style.pointerEvents, S.body.style.pointerEvents = "none"), y.layersWithOutsidePointerEventsDisabled.add(j)), y.layers.add(j), $m(), () => {
                u && y.layersWithOutsidePointerEventsDisabled.size === 1 && (S.body.style.pointerEvents = Fm)
            }
        }, [j, S, u, y]), x.useEffect(() => () => {
            j && (y.layers.delete(j), y.layersWithOutsidePointerEventsDisabled.delete(j), $m())
        }, [j, y]), x.useEffect(() => {
            const X = () => z({});
            return document.addEventListener(cu, X), () => document.removeEventListener(cu, X)
        }, []), n.jsx(Sa.div, {
            ...b,
            ref: M,
            style: {
                pointerEvents: V ? J ? "auto" : "none" : void 0,
                ...l.style
            },
            onFocusCapture: es(l.onFocusCapture, G.onFocusCapture),
            onBlurCapture: es(l.onBlurCapture, G.onBlurCapture),
            onPointerDownCapture: es(l.onPointerDownCapture, ee.onPointerDownCapture)
        })
    });
Ih.displayName = I2;
var $2 = "DismissableLayerBranch",
    W2 = x.forwardRef((l, i) => {
        const u = x.useContext(Kh),
            o = x.useRef(null),
            d = Ss(i, o);
        return x.useEffect(() => {
            const p = o.current;
            if (p) return u.branches.add(p), () => {
                u.branches.delete(p)
            }
        }, [u.branches]), n.jsx(Sa.div, {
            ...l,
            ref: d
        })
    });
W2.displayName = $2;

function eb(l, i = globalThis?.document) {
    const u = bn(l),
        o = x.useRef(!1),
        d = x.useRef(() => {});
    return x.useEffect(() => {
        const p = h => {
                if (h.target && !o.current) {
                    let b = function() {
                        Jh(J2, u, y, {
                            discrete: !0
                        })
                    };
                    const y = {
                        originalEvent: h
                    };
                    h.pointerType === "touch" ? (i.removeEventListener("click", d.current), d.current = b, i.addEventListener("click", d.current, {
                        once: !0
                    })) : b()
                } else i.removeEventListener("click", d.current);
                o.current = !1
            },
            m = window.setTimeout(() => {
                i.addEventListener("pointerdown", p)
            }, 0);
        return () => {
            window.clearTimeout(m), i.removeEventListener("pointerdown", p), i.removeEventListener("click", d.current)
        }
    }, [i, u]), {
        onPointerDownCapture: () => o.current = !0
    }
}

function tb(l, i = globalThis?.document) {
    const u = bn(l),
        o = x.useRef(!1);
    return x.useEffect(() => {
        const d = p => {
            p.target && !o.current && Jh(F2, u, {
                originalEvent: p
            }, {
                discrete: !1
            })
        };
        return i.addEventListener("focusin", d), () => i.removeEventListener("focusin", d)
    }, [i, u]), {
        onFocusCapture: () => o.current = !0,
        onBlurCapture: () => o.current = !1
    }
}

function $m() {
    const l = new CustomEvent(cu);
    document.dispatchEvent(l)
}

function Jh(l, i, u, {
    discrete: o
}) {
    const d = u.originalEvent.target,
        p = new CustomEvent(l, {
            bubbles: !1,
            cancelable: !0,
            detail: u
        });
    i && d.addEventListener(l, i, {
        once: !0
    }), o ? Z2(d, p) : d.dispatchEvent(p)
}
var Xo = "focusScope.autoFocusOnMount",
    Qo = "focusScope.autoFocusOnUnmount",
    Wm = {
        bubbles: !1,
        cancelable: !0
    },
    ab = "FocusScope",
    Fh = x.forwardRef((l, i) => {
        const {
            loop: u = !1,
            trapped: o = !1,
            onMountAutoFocus: d,
            onUnmountAutoFocus: p,
            ...m
        } = l, [h, b] = x.useState(null), y = bn(d), j = bn(p), v = x.useRef(null), S = Ss(i, E => b(E)), z = x.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        x.useEffect(() => {
            if (o) {
                let E = function(V) {
                        if (z.paused || !h) return;
                        const J = V.target;
                        h.contains(J) ? v.current = J : Wa(v.current, {
                            select: !0
                        })
                    },
                    O = function(V) {
                        if (z.paused || !h) return;
                        const J = V.relatedTarget;
                        J !== null && (h.contains(J) || Wa(v.current, {
                            select: !0
                        }))
                    },
                    U = function(V) {
                        if (document.activeElement === document.body)
                            for (const ee of V) ee.removedNodes.length > 0 && Wa(h)
                    };
                document.addEventListener("focusin", E), document.addEventListener("focusout", O);
                const Z = new MutationObserver(U);
                return h && Z.observe(h, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener("focusin", E), document.removeEventListener("focusout", O), Z.disconnect()
                }
            }
        }, [o, h, z.paused]), x.useEffect(() => {
            if (h) {
                th.add(z);
                const E = document.activeElement;
                if (!h.contains(E)) {
                    const U = new CustomEvent(Xo, Wm);
                    h.addEventListener(Xo, y), h.dispatchEvent(U), U.defaultPrevented || (sb(ib($h(h)), {
                        select: !0
                    }), document.activeElement === E && Wa(h))
                }
                return () => {
                    h.removeEventListener(Xo, y), setTimeout(() => {
                        const U = new CustomEvent(Qo, Wm);
                        h.addEventListener(Qo, j), h.dispatchEvent(U), U.defaultPrevented || Wa(E ?? document.body, {
                            select: !0
                        }), h.removeEventListener(Qo, j), th.remove(z)
                    }, 0)
                }
            }
        }, [h, y, j, z]);
        const M = x.useCallback(E => {
            if (!u && !o || z.paused) return;
            const O = E.key === "Tab" && !E.altKey && !E.ctrlKey && !E.metaKey,
                U = document.activeElement;
            if (O && U) {
                const Z = E.currentTarget,
                    [V, J] = lb(Z);
                V && J ? !E.shiftKey && U === J ? (E.preventDefault(), u && Wa(V, {
                    select: !0
                })) : E.shiftKey && U === V && (E.preventDefault(), u && Wa(J, {
                    select: !0
                })) : U === Z && E.preventDefault()
            }
        }, [u, o, z.paused]);
        return n.jsx(Sa.div, {
            tabIndex: -1,
            ...m,
            ref: S,
            onKeyDown: M
        })
    });
Fh.displayName = ab;

function sb(l, {
    select: i = !1
} = {}) {
    const u = document.activeElement;
    for (const o of l)
        if (Wa(o, {
                select: i
            }), document.activeElement !== u) return
}

function lb(l) {
    const i = $h(l),
        u = eh(i, l),
        o = eh(i.reverse(), l);
    return [u, o]
}

function $h(l) {
    const i = [],
        u = document.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, {
            acceptNode: o => {
                const d = o.tagName === "INPUT" && o.type === "hidden";
                return o.disabled || o.hidden || d ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; u.nextNode();) i.push(u.currentNode);
    return i
}

function eh(l, i) {
    for (const u of l)
        if (!nb(u, {
                upTo: i
            })) return u
}

function nb(l, {
    upTo: i
}) {
    if (getComputedStyle(l).visibility === "hidden") return !0;
    for (; l;) {
        if (i !== void 0 && l === i) return !1;
        if (getComputedStyle(l).display === "none") return !0;
        l = l.parentElement
    }
    return !1
}

function cb(l) {
    return l instanceof HTMLInputElement && "select" in l
}

function Wa(l, {
    select: i = !1
} = {}) {
    if (l && l.focus) {
        const u = document.activeElement;
        l.focus({
            preventScroll: !0
        }), l !== u && cb(l) && i && l.select()
    }
}
var th = rb();

function rb() {
    let l = [];
    return {
        add(i) {
            const u = l[0];
            i !== u && u?.pause(), l = ah(l, i), l.unshift(i)
        },
        remove(i) {
            l = ah(l, i), l[0]?.resume()
        }
    }
}

function ah(l, i) {
    const u = [...l],
        o = u.indexOf(i);
    return o !== -1 && u.splice(o, 1), u
}

function ib(l) {
    return l.filter(i => i.tagName !== "A")
}
var ob = "Portal",
    Wh = x.forwardRef((l, i) => {
        const {
            container: u,
            ...o
        } = l, [d, p] = x.useState(!1);
        vn(() => p(!0), []);
        const m = u || d && globalThis?.document?.body;
        return m ? Ky.createPortal(n.jsx(Sa.div, {
            ...o,
            ref: i
        }), m) : null
    });
Wh.displayName = ob;

function ub(l, i) {
    return x.useReducer((u, o) => i[u][o] ?? u, l)
}
var fr = l => {
    const {
        present: i,
        children: u
    } = l, o = db(i), d = typeof u == "function" ? u({
        present: o.isPresent
    }) : x.Children.only(u), p = Ss(o.ref, fb(d));
    return typeof u == "function" || o.isPresent ? x.cloneElement(d, {
        ref: p
    }) : null
};
fr.displayName = "Presence";

function db(l) {
    const [i, u] = x.useState(), o = x.useRef(null), d = x.useRef(l), p = x.useRef("none"), m = l ? "mounted" : "unmounted", [h, b] = ub(m, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return x.useEffect(() => {
        const y = Kc(o.current);
        p.current = h === "mounted" ? y : "none"
    }, [h]), vn(() => {
        const y = o.current,
            j = d.current;
        if (j !== l) {
            const S = p.current,
                z = Kc(y);
            l ? b("MOUNT") : z === "none" || y?.display === "none" ? b("UNMOUNT") : b(j && S !== z ? "ANIMATION_OUT" : "UNMOUNT"), d.current = l
        }
    }, [l, b]), vn(() => {
        if (i) {
            let y;
            const j = i.ownerDocument.defaultView ?? window,
                v = z => {
                    const E = Kc(o.current).includes(CSS.escape(z.animationName));
                    if (z.target === i && E && (b("ANIMATION_END"), !d.current)) {
                        const O = i.style.animationFillMode;
                        i.style.animationFillMode = "forwards", y = j.setTimeout(() => {
                            i.style.animationFillMode === "forwards" && (i.style.animationFillMode = O)
                        })
                    }
                },
                S = z => {
                    z.target === i && (p.current = Kc(o.current))
                };
            return i.addEventListener("animationstart", S), i.addEventListener("animationcancel", v), i.addEventListener("animationend", v), () => {
                j.clearTimeout(y), i.removeEventListener("animationstart", S), i.removeEventListener("animationcancel", v), i.removeEventListener("animationend", v)
            }
        } else b("ANIMATION_END")
    }, [i, b]), {
        isPresent: ["mounted", "unmountSuspended"].includes(h),
        ref: x.useCallback(y => {
            o.current = y ? getComputedStyle(y) : null, u(y)
        }, [])
    }
}

function Kc(l) {
    return l?.animationName || "none"
}

function fb(l) {
    let i = Object.getOwnPropertyDescriptor(l.props, "ref")?.get,
        u = i && "isReactWarning" in i && i.isReactWarning;
    return u ? l.ref : (i = Object.getOwnPropertyDescriptor(l, "ref")?.get, u = i && "isReactWarning" in i && i.isReactWarning, u ? l.props.ref : l.props.ref || l.ref)
}
var Vo = 0;

function pb() {
    x.useEffect(() => {
        const l = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", l[0] ?? sh()), document.body.insertAdjacentElement("beforeend", l[1] ?? sh()), Vo++, () => {
            Vo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(i => i.remove()), Vo--
        }
    }, [])
}

function sh() {
    const l = document.createElement("span");
    return l.setAttribute("data-radix-focus-guard", ""), l.tabIndex = 0, l.style.outline = "none", l.style.opacity = "0", l.style.position = "fixed", l.style.pointerEvents = "none", l
}
var It = function() {
    return It = Object.assign || function(i) {
        for (var u, o = 1, d = arguments.length; o < d; o++) {
            u = arguments[o];
            for (var p in u) Object.prototype.hasOwnProperty.call(u, p) && (i[p] = u[p])
        }
        return i
    }, It.apply(this, arguments)
};

function eg(l, i) {
    var u = {};
    for (var o in l) Object.prototype.hasOwnProperty.call(l, o) && i.indexOf(o) < 0 && (u[o] = l[o]);
    if (l != null && typeof Object.getOwnPropertySymbols == "function")
        for (var d = 0, o = Object.getOwnPropertySymbols(l); d < o.length; d++) i.indexOf(o[d]) < 0 && Object.prototype.propertyIsEnumerable.call(l, o[d]) && (u[o[d]] = l[o[d]]);
    return u
}

function mb(l, i, u) {
    if (u || arguments.length === 2)
        for (var o = 0, d = i.length, p; o < d; o++)(p || !(o in i)) && (p || (p = Array.prototype.slice.call(i, 0, o)), p[o] = i[o]);
    return l.concat(p || Array.prototype.slice.call(i))
}
var sr = "right-scroll-bar-position",
    lr = "width-before-scroll-bar",
    hb = "with-scroll-bars-hidden",
    gb = "--removed-body-scroll-bar-size";

function Zo(l, i) {
    return typeof l == "function" ? l(i) : l && (l.current = i), l
}

function xb(l, i) {
    var u = x.useState(function() {
        return {
            value: l,
            callback: i,
            facade: {
                get current() {
                    return u.value
                },
                set current(o) {
                    var d = u.value;
                    d !== o && (u.value = o, u.callback(o, d))
                }
            }
        }
    })[0];
    return u.callback = i, u.facade
}
var yb = typeof window < "u" ? x.useLayoutEffect : x.useEffect,
    lh = new WeakMap;

function vb(l, i) {
    var u = xb(null, function(o) {
        return l.forEach(function(d) {
            return Zo(d, o)
        })
    });
    return yb(function() {
        var o = lh.get(u);
        if (o) {
            var d = new Set(o),
                p = new Set(l),
                m = u.current;
            d.forEach(function(h) {
                p.has(h) || Zo(h, null)
            }), p.forEach(function(h) {
                d.has(h) || Zo(h, m)
            })
        }
        lh.set(u, l)
    }, [l]), u
}

function bb(l) {
    return l
}

function jb(l, i) {
    i === void 0 && (i = bb);
    var u = [],
        o = !1,
        d = {
            read: function() {
                if (o) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return u.length ? u[u.length - 1] : l
            },
            useMedium: function(p) {
                var m = i(p, o);
                return u.push(m),
                    function() {
                        u = u.filter(function(h) {
                            return h !== m
                        })
                    }
            },
            assignSyncMedium: function(p) {
                for (o = !0; u.length;) {
                    var m = u;
                    u = [], m.forEach(p)
                }
                u = {
                    push: function(h) {
                        return p(h)
                    },
                    filter: function() {
                        return u
                    }
                }
            },
            assignMedium: function(p) {
                o = !0;
                var m = [];
                if (u.length) {
                    var h = u;
                    u = [], h.forEach(p), m = u
                }
                var b = function() {
                        var j = m;
                        m = [], j.forEach(p)
                    },
                    y = function() {
                        return Promise.resolve().then(b)
                    };
                y(), u = {
                    push: function(j) {
                        m.push(j), y()
                    },
                    filter: function(j) {
                        return m = m.filter(j), u
                    }
                }
            }
        };
    return d
}

function Nb(l) {
    l === void 0 && (l = {});
    var i = jb(null);
    return i.options = It({
        async: !0,
        ssr: !1
    }, l), i
}
var tg = function(l) {
    var i = l.sideCar,
        u = eg(l, ["sideCar"]);
    if (!i) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var o = i.read();
    if (!o) throw new Error("Sidecar medium not found");
    return x.createElement(o, It({}, u))
};
tg.isSideCarExport = !0;

function Sb(l, i) {
    return l.useMedium(i), tg
}
var ag = Nb(),
    Ko = function() {},
    pr = x.forwardRef(function(l, i) {
        var u = x.useRef(null),
            o = x.useState({
                onScrollCapture: Ko,
                onWheelCapture: Ko,
                onTouchMoveCapture: Ko
            }),
            d = o[0],
            p = o[1],
            m = l.forwardProps,
            h = l.children,
            b = l.className,
            y = l.removeScrollBar,
            j = l.enabled,
            v = l.shards,
            S = l.sideCar,
            z = l.noRelative,
            M = l.noIsolation,
            E = l.inert,
            O = l.allowPinchZoom,
            U = l.as,
            Z = U === void 0 ? "div" : U,
            V = l.gapMode,
            J = eg(l, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            ee = S,
            G = vb([u, i]),
            X = It(It({}, J), d);
        return x.createElement(x.Fragment, null, j && x.createElement(ee, {
            sideCar: ag,
            removeScrollBar: y,
            shards: v,
            noRelative: z,
            noIsolation: M,
            inert: E,
            setCallbacks: p,
            allowPinchZoom: !!O,
            lockRef: u,
            gapMode: V
        }), m ? x.cloneElement(x.Children.only(h), It(It({}, X), {
            ref: G
        })) : x.createElement(Z, It({}, X, {
            className: b,
            ref: G
        }), h))
    });
pr.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
pr.classNames = {
    fullWidth: lr,
    zeroRight: sr
};
var wb = function() {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__
};

function Eb() {
    if (!document) return null;
    var l = document.createElement("style");
    l.type = "text/css";
    var i = wb();
    return i && l.setAttribute("nonce", i), l
}

function Cb(l, i) {
    l.styleSheet ? l.styleSheet.cssText = i : l.appendChild(document.createTextNode(i))
}

function Ab(l) {
    var i = document.head || document.getElementsByTagName("head")[0];
    i.appendChild(l)
}
var Mb = function() {
        var l = 0,
            i = null;
        return {
            add: function(u) {
                l == 0 && (i = Eb()) && (Cb(i, u), Ab(i)), l++
            },
            remove: function() {
                l--, !l && i && (i.parentNode && i.parentNode.removeChild(i), i = null)
            }
        }
    },
    Db = function() {
        var l = Mb();
        return function(i, u) {
            x.useEffect(function() {
                return l.add(i),
                    function() {
                        l.remove()
                    }
            }, [i && u])
        }
    },
    sg = function() {
        var l = Db(),
            i = function(u) {
                var o = u.styles,
                    d = u.dynamic;
                return l(o, d), null
            };
        return i
    },
    Ob = {
        left: 0,
        top: 0,
        right: 0,
        gap: 0
    },
    Io = function(l) {
        return parseInt(l || "", 10) || 0
    },
    Rb = function(l) {
        var i = window.getComputedStyle(document.body),
            u = i[l === "padding" ? "paddingLeft" : "marginLeft"],
            o = i[l === "padding" ? "paddingTop" : "marginTop"],
            d = i[l === "padding" ? "paddingRight" : "marginRight"];
        return [Io(u), Io(o), Io(d)]
    },
    Tb = function(l) {
        if (l === void 0 && (l = "margin"), typeof window > "u") return Ob;
        var i = Rb(l),
            u = document.documentElement.clientWidth,
            o = window.innerWidth;
        return {
            left: i[0],
            top: i[1],
            right: i[2],
            gap: Math.max(0, o - u + i[2] - i[0])
        }
    },
    _b = sg(),
    ml = "data-scroll-locked",
    zb = function(l, i, u, o) {
        var d = l.left,
            p = l.top,
            m = l.right,
            h = l.gap;
        return u === void 0 && (u = "margin"), `
  .`.concat(hb, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(h, "px ").concat(o, `;
  }
  body[`).concat(ml, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([i && "position: relative ".concat(o, ";"), u === "margin" && `
    padding-left: `.concat(d, `px;
    padding-top: `).concat(p, `px;
    padding-right: `).concat(m, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(h, "px ").concat(o, `;
    `), u === "padding" && "padding-right: ".concat(h, "px ").concat(o, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(sr, ` {
    right: `).concat(h, "px ").concat(o, `;
  }
  
  .`).concat(lr, ` {
    margin-right: `).concat(h, "px ").concat(o, `;
  }
  
  .`).concat(sr, " .").concat(sr, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(lr, " .").concat(lr, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(ml, `] {
    `).concat(gb, ": ").concat(h, `px;
  }
`)
    },
    nh = function() {
        var l = parseInt(document.body.getAttribute(ml) || "0", 10);
        return isFinite(l) ? l : 0
    },
    kb = function() {
        x.useEffect(function() {
            return document.body.setAttribute(ml, (nh() + 1).toString()),
                function() {
                    var l = nh() - 1;
                    l <= 0 ? document.body.removeAttribute(ml) : document.body.setAttribute(ml, l.toString())
                }
        }, [])
    },
    Hb = function(l) {
        var i = l.noRelative,
            u = l.noImportant,
            o = l.gapMode,
            d = o === void 0 ? "margin" : o;
        kb();
        var p = x.useMemo(function() {
            return Tb(d)
        }, [d]);
        return x.createElement(_b, {
            styles: zb(p, !i, d, u ? "" : "!important")
        })
    },
    ru = !1;
if (typeof window < "u") try {
    var Ic = Object.defineProperty({}, "passive", {
        get: function() {
            return ru = !0, !0
        }
    });
    window.addEventListener("test", Ic, Ic), window.removeEventListener("test", Ic, Ic)
} catch {
    ru = !1
}
var il = ru ? {
        passive: !1
    } : !1,
    Lb = function(l) {
        return l.tagName === "TEXTAREA"
    },
    lg = function(l, i) {
        if (!(l instanceof Element)) return !1;
        var u = window.getComputedStyle(l);
        return u[i] !== "hidden" && !(u.overflowY === u.overflowX && !Lb(l) && u[i] === "visible")
    },
    Ub = function(l) {
        return lg(l, "overflowY")
    },
    Bb = function(l) {
        return lg(l, "overflowX")
    },
    ch = function(l, i) {
        var u = i.ownerDocument,
            o = i;
        do {
            typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
            var d = ng(l, o);
            if (d) {
                var p = cg(l, o),
                    m = p[1],
                    h = p[2];
                if (m > h) return !0
            }
            o = o.parentNode
        } while (o && o !== u.body);
        return !1
    },
    Pb = function(l) {
        var i = l.scrollTop,
            u = l.scrollHeight,
            o = l.clientHeight;
        return [i, u, o]
    },
    qb = function(l) {
        var i = l.scrollLeft,
            u = l.scrollWidth,
            o = l.clientWidth;
        return [i, u, o]
    },
    ng = function(l, i) {
        return l === "v" ? Ub(i) : Bb(i)
    },
    cg = function(l, i) {
        return l === "v" ? Pb(i) : qb(i)
    },
    Yb = function(l, i) {
        return l === "h" && i === "rtl" ? -1 : 1
    },
    Gb = function(l, i, u, o, d) {
        var p = Yb(l, window.getComputedStyle(i).direction),
            m = p * o,
            h = u.target,
            b = i.contains(h),
            y = !1,
            j = m > 0,
            v = 0,
            S = 0;
        do {
            if (!h) break;
            var z = cg(l, h),
                M = z[0],
                E = z[1],
                O = z[2],
                U = E - O - p * M;
            (M || U) && ng(l, h) && (v += U, S += M);
            var Z = h.parentNode;
            h = Z && Z.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? Z.host : Z
        } while (!b && h !== document.body || b && (i.contains(h) || i === h));
        return (j && Math.abs(v) < 1 || !j && Math.abs(S) < 1) && (y = !0), y
    },
    Jc = function(l) {
        return "changedTouches" in l ? [l.changedTouches[0].clientX, l.changedTouches[0].clientY] : [0, 0]
    },
    rh = function(l) {
        return [l.deltaX, l.deltaY]
    },
    ih = function(l) {
        return l && "current" in l ? l.current : l
    },
    Xb = function(l, i) {
        return l[0] === i[0] && l[1] === i[1]
    },
    Qb = function(l) {
        return `
  .block-interactivity-`.concat(l, ` {pointer-events: none;}
  .allow-interactivity-`).concat(l, ` {pointer-events: all;}
`)
    },
    Vb = 0,
    ol = [];

function Zb(l) {
    var i = x.useRef([]),
        u = x.useRef([0, 0]),
        o = x.useRef(),
        d = x.useState(Vb++)[0],
        p = x.useState(sg)[0],
        m = x.useRef(l);
    x.useEffect(function() {
        m.current = l
    }, [l]), x.useEffect(function() {
        if (l.inert) {
            document.body.classList.add("block-interactivity-".concat(d));
            var E = mb([l.lockRef.current], (l.shards || []).map(ih), !0).filter(Boolean);
            return E.forEach(function(O) {
                    return O.classList.add("allow-interactivity-".concat(d))
                }),
                function() {
                    document.body.classList.remove("block-interactivity-".concat(d)), E.forEach(function(O) {
                        return O.classList.remove("allow-interactivity-".concat(d))
                    })
                }
        }
    }, [l.inert, l.lockRef.current, l.shards]);
    var h = x.useCallback(function(E, O) {
            if ("touches" in E && E.touches.length === 2 || E.type === "wheel" && E.ctrlKey) return !m.current.allowPinchZoom;
            var U = Jc(E),
                Z = u.current,
                V = "deltaX" in E ? E.deltaX : Z[0] - U[0],
                J = "deltaY" in E ? E.deltaY : Z[1] - U[1],
                ee, G = E.target,
                X = Math.abs(V) > Math.abs(J) ? "h" : "v";
            if ("touches" in E && X === "h" && G.type === "range") return !1;
            var A = window.getSelection(),
                ae = A && A.anchorNode,
                ze = ae ? ae === G || ae.contains(G) : !1;
            if (ze) return !1;
            var ne = ch(X, G);
            if (!ne) return !0;
            if (ne ? ee = X : (ee = X === "v" ? "h" : "v", ne = ch(X, G)), !ne) return !1;
            if (!o.current && "changedTouches" in E && (V || J) && (o.current = ee), !ee) return !0;
            var ue = o.current || ee;
            return Gb(ue, O, E, ue === "h" ? V : J)
        }, []),
        b = x.useCallback(function(E) {
            var O = E;
            if (!(!ol.length || ol[ol.length - 1] !== p)) {
                var U = "deltaY" in O ? rh(O) : Jc(O),
                    Z = i.current.filter(function(ee) {
                        return ee.name === O.type && (ee.target === O.target || O.target === ee.shadowParent) && Xb(ee.delta, U)
                    })[0];
                if (Z && Z.should) {
                    O.cancelable && O.preventDefault();
                    return
                }
                if (!Z) {
                    var V = (m.current.shards || []).map(ih).filter(Boolean).filter(function(ee) {
                            return ee.contains(O.target)
                        }),
                        J = V.length > 0 ? h(O, V[0]) : !m.current.noIsolation;
                    J && O.cancelable && O.preventDefault()
                }
            }
        }, []),
        y = x.useCallback(function(E, O, U, Z) {
            var V = {
                name: E,
                delta: O,
                target: U,
                should: Z,
                shadowParent: Kb(U)
            };
            i.current.push(V), setTimeout(function() {
                i.current = i.current.filter(function(J) {
                    return J !== V
                })
            }, 1)
        }, []),
        j = x.useCallback(function(E) {
            u.current = Jc(E), o.current = void 0
        }, []),
        v = x.useCallback(function(E) {
            y(E.type, rh(E), E.target, h(E, l.lockRef.current))
        }, []),
        S = x.useCallback(function(E) {
            y(E.type, Jc(E), E.target, h(E, l.lockRef.current))
        }, []);
    x.useEffect(function() {
        return ol.push(p), l.setCallbacks({
                onScrollCapture: v,
                onWheelCapture: v,
                onTouchMoveCapture: S
            }), document.addEventListener("wheel", b, il), document.addEventListener("touchmove", b, il), document.addEventListener("touchstart", j, il),
            function() {
                ol = ol.filter(function(E) {
                    return E !== p
                }), document.removeEventListener("wheel", b, il), document.removeEventListener("touchmove", b, il), document.removeEventListener("touchstart", j, il)
            }
    }, []);
    var z = l.removeScrollBar,
        M = l.inert;
    return x.createElement(x.Fragment, null, M ? x.createElement(p, {
        styles: Qb(d)
    }) : null, z ? x.createElement(Hb, {
        noRelative: l.noRelative,
        gapMode: l.gapMode
    }) : null)
}

function Kb(l) {
    for (var i = null; l !== null;) l instanceof ShadowRoot && (i = l.host, l = l.host), l = l.parentNode;
    return i
}
const Ib = Sb(ag, Zb);
var rg = x.forwardRef(function(l, i) {
    return x.createElement(pr, It({}, l, {
        ref: i,
        sideCar: Ib
    }))
});
rg.classNames = pr.classNames;
var Jb = function(l) {
        if (typeof document > "u") return null;
        var i = Array.isArray(l) ? l[0] : l;
        return i.ownerDocument.body
    },
    ul = new WeakMap,
    Fc = new WeakMap,
    $c = {},
    Jo = 0,
    ig = function(l) {
        return l && (l.host || ig(l.parentNode))
    },
    Fb = function(l, i) {
        return i.map(function(u) {
            if (l.contains(u)) return u;
            var o = ig(u);
            return o && l.contains(o) ? o : (console.error("aria-hidden", u, "in not contained inside", l, ". Doing nothing"), null)
        }).filter(function(u) {
            return !!u
        })
    },
    $b = function(l, i, u, o) {
        var d = Fb(i, Array.isArray(l) ? l : [l]);
        $c[u] || ($c[u] = new WeakMap);
        var p = $c[u],
            m = [],
            h = new Set,
            b = new Set(d),
            y = function(v) {
                !v || h.has(v) || (h.add(v), y(v.parentNode))
            };
        d.forEach(y);
        var j = function(v) {
            !v || b.has(v) || Array.prototype.forEach.call(v.children, function(S) {
                if (h.has(S)) j(S);
                else try {
                    var z = S.getAttribute(o),
                        M = z !== null && z !== "false",
                        E = (ul.get(S) || 0) + 1,
                        O = (p.get(S) || 0) + 1;
                    ul.set(S, E), p.set(S, O), m.push(S), E === 1 && M && Fc.set(S, !0), O === 1 && S.setAttribute(u, "true"), M || S.setAttribute(o, "true")
                } catch (U) {
                    console.error("aria-hidden: cannot operate on ", S, U)
                }
            })
        };
        return j(i), h.clear(), Jo++,
            function() {
                m.forEach(function(v) {
                    var S = ul.get(v) - 1,
                        z = p.get(v) - 1;
                    ul.set(v, S), p.set(v, z), S || (Fc.has(v) || v.removeAttribute(o), Fc.delete(v)), z || v.removeAttribute(u)
                }), Jo--, Jo || (ul = new WeakMap, ul = new WeakMap, Fc = new WeakMap, $c = {})
            }
    },
    Wb = function(l, i, u) {
        u === void 0 && (u = "data-aria-hidden");
        var o = Array.from(Array.isArray(l) ? l : [l]),
            d = Jb(l);
        return d ? (o.push.apply(o, Array.from(d.querySelectorAll("[aria-live], script"))), $b(o, d, u, "aria-hidden")) : function() {
            return null
        }
    };

function e3(l) {
    const i = t3(l),
        u = x.forwardRef((o, d) => {
            const {
                children: p,
                ...m
            } = o, h = x.Children.toArray(p), b = h.find(s3);
            if (b) {
                const y = b.props.children,
                    j = h.map(v => v === b ? x.Children.count(y) > 1 ? x.Children.only(null) : x.isValidElement(y) ? y.props.children : null : v);
                return n.jsx(i, {
                    ...m,
                    ref: d,
                    children: x.isValidElement(y) ? x.cloneElement(y, void 0, j) : null
                })
            }
            return n.jsx(i, {
                ...m,
                ref: d,
                children: p
            })
        });
    return u.displayName = `${l}.Slot`, u
}

function t3(l) {
    const i = x.forwardRef((u, o) => {
        const {
            children: d,
            ...p
        } = u;
        if (x.isValidElement(d)) {
            const m = n3(d),
                h = l3(p, d.props);
            return d.type !== x.Fragment && (h.ref = o ? bu(o, m) : m), x.cloneElement(d, h)
        }
        return x.Children.count(d) > 1 ? x.Children.only(null) : null
    });
    return i.displayName = `${l}.SlotClone`, i
}
var a3 = Symbol("radix.slottable");

function s3(l) {
    return x.isValidElement(l) && typeof l.type == "function" && "__radixId" in l.type && l.type.__radixId === a3
}

function l3(l, i) {
    const u = {
        ...i
    };
    for (const o in i) {
        const d = l[o],
            p = i[o];
        /^on[A-Z]/.test(o) ? d && p ? u[o] = (...h) => {
            const b = p(...h);
            return d(...h), b
        } : d && (u[o] = d) : o === "style" ? u[o] = {
            ...d,
            ...p
        } : o === "className" && (u[o] = [d, p].filter(Boolean).join(" "))
    }
    return {
        ...l,
        ...u
    }
}

function n3(l) {
    let i = Object.getOwnPropertyDescriptor(l.props, "ref")?.get,
        u = i && "isReactWarning" in i && i.isReactWarning;
    return u ? l.ref : (i = Object.getOwnPropertyDescriptor(l, "ref")?.get, u = i && "isReactWarning" in i && i.isReactWarning, u ? l.props.ref : l.props.ref || l.ref)
}
var mr = "Dialog",
    [og] = T2(mr),
    [c3, Gt] = og(mr),
    ug = l => {
        const {
            __scopeDialog: i,
            children: u,
            open: o,
            defaultOpen: d,
            onOpenChange: p,
            modal: m = !0
        } = l, h = x.useRef(null), b = x.useRef(null), [y, j] = L2({
            prop: o,
            defaultProp: d ?? !1,
            onChange: p,
            caller: mr
        });
        return n.jsx(c3, {
            scope: i,
            triggerRef: h,
            contentRef: b,
            contentId: Go(),
            titleId: Go(),
            descriptionId: Go(),
            open: y,
            onOpenChange: j,
            onOpenToggle: x.useCallback(() => j(v => !v), [j]),
            modal: m,
            children: u
        })
    };
ug.displayName = mr;
var dg = "DialogTrigger",
    r3 = x.forwardRef((l, i) => {
        const {
            __scopeDialog: u,
            ...o
        } = l, d = Gt(dg, u), p = Ss(i, d.triggerRef);
        return n.jsx(Sa.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": d.open,
            "aria-controls": d.contentId,
            "data-state": Su(d.open),
            ...o,
            ref: p,
            onClick: es(l.onClick, d.onOpenToggle)
        })
    });
r3.displayName = dg;
var ju = "DialogPortal",
    [i3, fg] = og(ju, {
        forceMount: void 0
    }),
    pg = l => {
        const {
            __scopeDialog: i,
            forceMount: u,
            children: o,
            container: d
        } = l, p = Gt(ju, i);
        return n.jsx(i3, {
            scope: i,
            forceMount: u,
            children: x.Children.map(o, m => n.jsx(fr, {
                present: u || p.open,
                children: n.jsx(Wh, {
                    asChild: !0,
                    container: d,
                    children: m
                })
            }))
        })
    };
pg.displayName = ju;
var rr = "DialogOverlay",
    mg = x.forwardRef((l, i) => {
        const u = fg(rr, l.__scopeDialog),
            {
                forceMount: o = u.forceMount,
                ...d
            } = l,
            p = Gt(rr, l.__scopeDialog);
        return p.modal ? n.jsx(fr, {
            present: o || p.open,
            children: n.jsx(u3, {
                ...d,
                ref: i
            })
        }) : null
    });
mg.displayName = rr;
var o3 = e3("DialogOverlay.RemoveScroll"),
    u3 = x.forwardRef((l, i) => {
        const {
            __scopeDialog: u,
            ...o
        } = l, d = Gt(rr, u);
        return n.jsx(rg, {
            as: o3,
            allowPinchZoom: !0,
            shards: [d.contentRef],
            children: n.jsx(Sa.div, {
                "data-state": Su(d.open),
                ...o,
                ref: i,
                style: {
                    pointerEvents: "auto",
                    ...o.style
                }
            })
        })
    }),
    Ns = "DialogContent",
    hg = x.forwardRef((l, i) => {
        const u = fg(Ns, l.__scopeDialog),
            {
                forceMount: o = u.forceMount,
                ...d
            } = l,
            p = Gt(Ns, l.__scopeDialog);
        return n.jsx(fr, {
            present: o || p.open,
            children: p.modal ? n.jsx(d3, {
                ...d,
                ref: i
            }) : n.jsx(f3, {
                ...d,
                ref: i
            })
        })
    });
hg.displayName = Ns;
var d3 = x.forwardRef((l, i) => {
        const u = Gt(Ns, l.__scopeDialog),
            o = x.useRef(null),
            d = Ss(i, u.contentRef, o);
        return x.useEffect(() => {
            const p = o.current;
            if (p) return Wb(p)
        }, []), n.jsx(gg, {
            ...l,
            ref: d,
            trapFocus: u.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: es(l.onCloseAutoFocus, p => {
                p.preventDefault(), u.triggerRef.current?.focus()
            }),
            onPointerDownOutside: es(l.onPointerDownOutside, p => {
                const m = p.detail.originalEvent,
                    h = m.button === 0 && m.ctrlKey === !0;
                (m.button === 2 || h) && p.preventDefault()
            }),
            onFocusOutside: es(l.onFocusOutside, p => p.preventDefault())
        })
    }),
    f3 = x.forwardRef((l, i) => {
        const u = Gt(Ns, l.__scopeDialog),
            o = x.useRef(!1),
            d = x.useRef(!1);
        return n.jsx(gg, {
            ...l,
            ref: i,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: p => {
                l.onCloseAutoFocus?.(p), p.defaultPrevented || (o.current || u.triggerRef.current?.focus(), p.preventDefault()), o.current = !1, d.current = !1
            },
            onInteractOutside: p => {
                l.onInteractOutside?.(p), p.defaultPrevented || (o.current = !0, p.detail.originalEvent.type === "pointerdown" && (d.current = !0));
                const m = p.target;
                u.triggerRef.current?.contains(m) && p.preventDefault(), p.detail.originalEvent.type === "focusin" && d.current && p.preventDefault()
            }
        })
    }),
    gg = x.forwardRef((l, i) => {
        const {
            __scopeDialog: u,
            trapFocus: o,
            onOpenAutoFocus: d,
            onCloseAutoFocus: p,
            ...m
        } = l, h = Gt(Ns, u), b = x.useRef(null), y = Ss(i, b);
        return pb(), n.jsxs(n.Fragment, {
            children: [n.jsx(Fh, {
                asChild: !0,
                loop: !0,
                trapped: o,
                onMountAutoFocus: d,
                onUnmountAutoFocus: p,
                children: n.jsx(Ih, {
                    role: "dialog",
                    id: h.contentId,
                    "aria-describedby": h.descriptionId,
                    "aria-labelledby": h.titleId,
                    "data-state": Su(h.open),
                    ...m,
                    ref: y,
                    onDismiss: () => h.onOpenChange(!1)
                })
            }), n.jsxs(n.Fragment, {
                children: [n.jsx(m3, {
                    titleId: h.titleId
                }), n.jsx(g3, {
                    contentRef: b,
                    descriptionId: h.descriptionId
                })]
            })]
        })
    }),
    Nu = "DialogTitle",
    xg = x.forwardRef((l, i) => {
        const {
            __scopeDialog: u,
            ...o
        } = l, d = Gt(Nu, u);
        return n.jsx(Sa.h2, {
            id: d.titleId,
            ...o,
            ref: i
        })
    });
xg.displayName = Nu;
var yg = "DialogDescription",
    p3 = x.forwardRef((l, i) => {
        const {
            __scopeDialog: u,
            ...o
        } = l, d = Gt(yg, u);
        return n.jsx(Sa.p, {
            id: d.descriptionId,
            ...o,
            ref: i
        })
    });
p3.displayName = yg;
var vg = "DialogClose",
    bg = x.forwardRef((l, i) => {
        const {
            __scopeDialog: u,
            ...o
        } = l, d = Gt(vg, u);
        return n.jsx(Sa.button, {
            type: "button",
            ...o,
            ref: i,
            onClick: es(l.onClick, () => d.onOpenChange(!1))
        })
    });
bg.displayName = vg;

function Su(l) {
    return l ? "open" : "closed"
}
var jg = "DialogTitleWarning",
    [v5, Ng] = R2(jg, {
        contentName: Ns,
        titleName: Nu,
        docsSlug: "dialog"
    }),
    m3 = ({
        titleId: l
    }) => {
        const i = Ng(jg),
            u = `\`${i.contentName}\` requires a \`${i.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${i.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${i.docsSlug}`;
        return x.useEffect(() => {
            l && (document.getElementById(l) || console.error(u))
        }, [u, l]), null
    },
    h3 = "DialogDescriptionWarning",
    g3 = ({
        contentRef: l,
        descriptionId: i
    }) => {
        const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ng(h3).contentName}}.`;
        return x.useEffect(() => {
            const d = l.current?.getAttribute("aria-describedby");
            i && d && (document.getElementById(i) || console.warn(o))
        }, [o, l, i]), null
    },
    x3 = ug,
    y3 = pg,
    v3 = mg,
    b3 = hg,
    j3 = xg,
    N3 = bg;

function Sg(l) {
    var i, u, o = "";
    if (typeof l == "string" || typeof l == "number") o += l;
    else if (typeof l == "object")
        if (Array.isArray(l)) {
            var d = l.length;
            for (i = 0; i < d; i++) l[i] && (u = Sg(l[i])) && (o && (o += " "), o += u)
        } else
            for (u in l) l[u] && (o && (o += " "), o += u);
    return o
}

function S3() {
    for (var l, i, u = 0, o = "", d = arguments.length; u < d; u++)(l = arguments[u]) && (i = Sg(l)) && (o && (o += " "), o += i);
    return o
}
const w3 = (l, i) => {
        const u = new Array(l.length + i.length);
        for (let o = 0; o < l.length; o++) u[o] = l[o];
        for (let o = 0; o < i.length; o++) u[l.length + o] = i[o];
        return u
    },
    E3 = (l, i) => ({
        classGroupId: l,
        validator: i
    }),
    wg = (l = new Map, i = null, u) => ({
        nextPart: l,
        validators: i,
        classGroupId: u
    }),
    ir = "-",
    oh = [],
    C3 = "arbitrary..",
    A3 = l => {
        const i = D3(l),
            {
                conflictingClassGroups: u,
                conflictingClassGroupModifiers: o
            } = l;
        return {
            getClassGroupId: m => {
                if (m.startsWith("[") && m.endsWith("]")) return M3(m);
                const h = m.split(ir),
                    b = h[0] === "" && h.length > 1 ? 1 : 0;
                return Eg(h, b, i)
            },
            getConflictingClassGroupIds: (m, h) => {
                if (h) {
                    const b = o[m],
                        y = u[m];
                    return b ? y ? w3(y, b) : b : y || oh
                }
                return u[m] || oh
            }
        }
    },
    Eg = (l, i, u) => {
        if (l.length - i === 0) return u.classGroupId;
        const d = l[i],
            p = u.nextPart.get(d);
        if (p) {
            const y = Eg(l, i + 1, p);
            if (y) return y
        }
        const m = u.validators;
        if (m === null) return;
        const h = i === 0 ? l.join(ir) : l.slice(i).join(ir),
            b = m.length;
        for (let y = 0; y < b; y++) {
            const j = m[y];
            if (j.validator(h)) return j.classGroupId
        }
    },
    M3 = l => l.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
        const i = l.slice(1, -1),
            u = i.indexOf(":"),
            o = i.slice(0, u);
        return o ? C3 + o : void 0
    })(),
    D3 = l => {
        const {
            theme: i,
            classGroups: u
        } = l;
        return O3(u, i)
    },
    O3 = (l, i) => {
        const u = wg();
        for (const o in l) {
            const d = l[o];
            wu(d, u, o, i)
        }
        return u
    },
    wu = (l, i, u, o) => {
        const d = l.length;
        for (let p = 0; p < d; p++) {
            const m = l[p];
            R3(m, i, u, o)
        }
    },
    R3 = (l, i, u, o) => {
        if (typeof l == "string") {
            T3(l, i, u);
            return
        }
        if (typeof l == "function") {
            _3(l, i, u, o);
            return
        }
        z3(l, i, u, o)
    },
    T3 = (l, i, u) => {
        const o = l === "" ? i : Cg(i, l);
        o.classGroupId = u
    },
    _3 = (l, i, u, o) => {
        if (k3(l)) {
            wu(l(o), i, u, o);
            return
        }
        i.validators === null && (i.validators = []), i.validators.push(E3(u, l))
    },
    z3 = (l, i, u, o) => {
        const d = Object.entries(l),
            p = d.length;
        for (let m = 0; m < p; m++) {
            const [h, b] = d[m];
            wu(b, Cg(i, h), u, o)
        }
    },
    Cg = (l, i) => {
        let u = l;
        const o = i.split(ir),
            d = o.length;
        for (let p = 0; p < d; p++) {
            const m = o[p];
            let h = u.nextPart.get(m);
            h || (h = wg(), u.nextPart.set(m, h)), u = h
        }
        return u
    },
    k3 = l => "isThemeGetter" in l && l.isThemeGetter === !0,
    H3 = l => {
        if (l < 1) return {
            get: () => {},
            set: () => {}
        };
        let i = 0,
            u = Object.create(null),
            o = Object.create(null);
        const d = (p, m) => {
            u[p] = m, i++, i > l && (i = 0, o = u, u = Object.create(null))
        };
        return {
            get(p) {
                let m = u[p];
                if (m !== void 0) return m;
                if ((m = o[p]) !== void 0) return d(p, m), m
            },
            set(p, m) {
                p in u ? u[p] = m : d(p, m)
            }
        }
    },
    iu = "!",
    uh = ":",
    L3 = [],
    dh = (l, i, u, o, d) => ({
        modifiers: l,
        hasImportantModifier: i,
        baseClassName: u,
        maybePostfixModifierPosition: o,
        isExternal: d
    }),
    U3 = l => {
        const {
            prefix: i,
            experimentalParseClassName: u
        } = l;
        let o = d => {
            const p = [];
            let m = 0,
                h = 0,
                b = 0,
                y;
            const j = d.length;
            for (let E = 0; E < j; E++) {
                const O = d[E];
                if (m === 0 && h === 0) {
                    if (O === uh) {
                        p.push(d.slice(b, E)), b = E + 1;
                        continue
                    }
                    if (O === "/") {
                        y = E;
                        continue
                    }
                }
                O === "[" ? m++ : O === "]" ? m-- : O === "(" ? h++ : O === ")" && h--
            }
            const v = p.length === 0 ? d : d.slice(b);
            let S = v,
                z = !1;
            v.endsWith(iu) ? (S = v.slice(0, -1), z = !0) : v.startsWith(iu) && (S = v.slice(1), z = !0);
            const M = y && y > b ? y - b : void 0;
            return dh(p, z, S, M)
        };
        if (i) {
            const d = i + uh,
                p = o;
            o = m => m.startsWith(d) ? p(m.slice(d.length)) : dh(L3, !1, m, void 0, !0)
        }
        if (u) {
            const d = o;
            o = p => u({
                className: p,
                parseClassName: d
            })
        }
        return o
    },
    B3 = l => {
        const i = new Map;
        return l.orderSensitiveModifiers.forEach((u, o) => {
            i.set(u, 1e6 + o)
        }), u => {
            const o = [];
            let d = [];
            for (let p = 0; p < u.length; p++) {
                const m = u[p],
                    h = m[0] === "[",
                    b = i.has(m);
                h || b ? (d.length > 0 && (d.sort(), o.push(...d), d = []), o.push(m)) : d.push(m)
            }
            return d.length > 0 && (d.sort(), o.push(...d)), o
        }
    },
    P3 = l => ({
        cache: H3(l.cacheSize),
        parseClassName: U3(l),
        sortModifiers: B3(l),
        ...A3(l)
    }),
    q3 = /\s+/,
    Y3 = (l, i) => {
        const {
            parseClassName: u,
            getClassGroupId: o,
            getConflictingClassGroupIds: d,
            sortModifiers: p
        } = i, m = [], h = l.trim().split(q3);
        let b = "";
        for (let y = h.length - 1; y >= 0; y -= 1) {
            const j = h[y],
                {
                    isExternal: v,
                    modifiers: S,
                    hasImportantModifier: z,
                    baseClassName: M,
                    maybePostfixModifierPosition: E
                } = u(j);
            if (v) {
                b = j + (b.length > 0 ? " " + b : b);
                continue
            }
            let O = !!E,
                U = o(O ? M.substring(0, E) : M);
            if (!U) {
                if (!O) {
                    b = j + (b.length > 0 ? " " + b : b);
                    continue
                }
                if (U = o(M), !U) {
                    b = j + (b.length > 0 ? " " + b : b);
                    continue
                }
                O = !1
            }
            const Z = S.length === 0 ? "" : S.length === 1 ? S[0] : p(S).join(":"),
                V = z ? Z + iu : Z,
                J = V + U;
            if (m.indexOf(J) > -1) continue;
            m.push(J);
            const ee = d(U, O);
            for (let G = 0; G < ee.length; ++G) {
                const X = ee[G];
                m.push(V + X)
            }
            b = j + (b.length > 0 ? " " + b : b)
        }
        return b
    },
    G3 = (...l) => {
        let i = 0,
            u, o, d = "";
        for (; i < l.length;)(u = l[i++]) && (o = Ag(u)) && (d && (d += " "), d += o);
        return d
    },
    Ag = l => {
        if (typeof l == "string") return l;
        let i, u = "";
        for (let o = 0; o < l.length; o++) l[o] && (i = Ag(l[o])) && (u && (u += " "), u += i);
        return u
    },
    X3 = (l, ...i) => {
        let u, o, d, p;
        const m = b => {
                const y = i.reduce((j, v) => v(j), l());
                return u = P3(y), o = u.cache.get, d = u.cache.set, p = h, h(b)
            },
            h = b => {
                const y = o(b);
                if (y) return y;
                const j = Y3(b, u);
                return d(b, j), j
            };
        return p = m, (...b) => p(G3(...b))
    },
    Q3 = [],
    Je = l => {
        const i = u => u[l] || Q3;
        return i.isThemeGetter = !0, i
    },
    Mg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    Dg = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    V3 = /^\d+\/\d+$/,
    Z3 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    K3 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    I3 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    J3 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    F3 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    dl = l => V3.test(l),
    me = l => !!l && !Number.isNaN(Number(l)),
    $a = l => !!l && Number.isInteger(Number(l)),
    Fo = l => l.endsWith("%") && me(l.slice(0, -1)),
    ya = l => Z3.test(l),
    $3 = () => !0,
    W3 = l => K3.test(l) && !I3.test(l),
    Og = () => !1,
    e5 = l => J3.test(l),
    t5 = l => F3.test(l),
    a5 = l => !$(l) && !W(l),
    s5 = l => xl(l, _g, Og),
    $ = l => Mg.test(l),
    bs = l => xl(l, zg, W3),
    $o = l => xl(l, i5, me),
    fh = l => xl(l, Rg, Og),
    l5 = l => xl(l, Tg, t5),
    Wc = l => xl(l, kg, e5),
    W = l => Dg.test(l),
    hn = l => yl(l, zg),
    n5 = l => yl(l, o5),
    ph = l => yl(l, Rg),
    c5 = l => yl(l, _g),
    r5 = l => yl(l, Tg),
    er = l => yl(l, kg, !0),
    xl = (l, i, u) => {
        const o = Mg.exec(l);
        return o ? o[1] ? i(o[1]) : u(o[2]) : !1
    },
    yl = (l, i, u = !1) => {
        const o = Dg.exec(l);
        return o ? o[1] ? i(o[1]) : u : !1
    },
    Rg = l => l === "position" || l === "percentage",
    Tg = l => l === "image" || l === "url",
    _g = l => l === "length" || l === "size" || l === "bg-size",
    zg = l => l === "length",
    i5 = l => l === "number",
    o5 = l => l === "family-name",
    kg = l => l === "shadow",
    u5 = () => {
        const l = Je("color"),
            i = Je("font"),
            u = Je("text"),
            o = Je("font-weight"),
            d = Je("tracking"),
            p = Je("leading"),
            m = Je("breakpoint"),
            h = Je("container"),
            b = Je("spacing"),
            y = Je("radius"),
            j = Je("shadow"),
            v = Je("inset-shadow"),
            S = Je("text-shadow"),
            z = Je("drop-shadow"),
            M = Je("blur"),
            E = Je("perspective"),
            O = Je("aspect"),
            U = Je("ease"),
            Z = Je("animate"),
            V = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            J = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
            ee = () => [...J(), W, $],
            G = () => ["auto", "hidden", "clip", "visible", "scroll"],
            X = () => ["auto", "contain", "none"],
            A = () => [W, $, b],
            ae = () => [dl, "full", "auto", ...A()],
            ze = () => [$a, "none", "subgrid", W, $],
            ne = () => ["auto", {
                span: ["full", $a, W, $]
            }, $a, W, $],
            ue = () => [$a, "auto", W, $],
            Be = () => ["auto", "min", "max", "fr", W, $],
            ke = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
            je = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
            H = () => ["auto", ...A()],
            K = () => [dl, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...A()],
            Y = () => [l, W, $],
            we = () => [...J(), ph, fh, {
                position: [W, $]
            }],
            Ce = () => ["no-repeat", {
                repeat: ["", "x", "y", "space", "round"]
            }],
            C = () => ["auto", "cover", "contain", c5, s5, {
                size: [W, $]
            }],
            P = () => [Fo, hn, bs],
            Q = () => ["", "none", "full", y, W, $],
            I = () => ["", me, hn, bs],
            ie = () => ["solid", "dashed", "dotted", "double"],
            pe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            ce = () => [me, Fo, ph, fh],
            Fe = () => ["", "none", M, W, $],
            _e = () => ["none", me, W, $],
            Xt = () => ["none", me, W, $],
            wa = () => [me, W, $],
            Ea = () => [dl, "full", ...A()];
        return {
            cacheSize: 500,
            theme: {
                animate: ["spin", "ping", "pulse", "bounce"],
                aspect: ["video"],
                blur: [ya],
                breakpoint: [ya],
                color: [$3],
                container: [ya],
                "drop-shadow": [ya],
                ease: ["in", "out", "in-out"],
                font: [a5],
                "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                "inset-shadow": [ya],
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                radius: [ya],
                shadow: [ya],
                spacing: ["px", me],
                text: [ya],
                "text-shadow": [ya],
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", dl, $, W, O]
                }],
                container: ["container"],
                columns: [{
                    columns: [me, $, W, h]
                }],
                "break-after": [{
                    "break-after": V()
                }],
                "break-before": [{
                    "break-before": V()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                sr: ["sr-only", "not-sr-only"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: ee()
                }],
                overflow: [{
                    overflow: G()
                }],
                "overflow-x": [{
                    "overflow-x": G()
                }],
                "overflow-y": [{
                    "overflow-y": G()
                }],
                overscroll: [{
                    overscroll: X()
                }],
                "overscroll-x": [{
                    "overscroll-x": X()
                }],
                "overscroll-y": [{
                    "overscroll-y": X()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: ae()
                }],
                "inset-x": [{
                    "inset-x": ae()
                }],
                "inset-y": [{
                    "inset-y": ae()
                }],
                start: [{
                    start: ae()
                }],
                end: [{
                    end: ae()
                }],
                top: [{
                    top: ae()
                }],
                right: [{
                    right: ae()
                }],
                bottom: [{
                    bottom: ae()
                }],
                left: [{
                    left: ae()
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: [$a, "auto", W, $]
                }],
                basis: [{
                    basis: [dl, "full", "auto", h, ...A()]
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["nowrap", "wrap", "wrap-reverse"]
                }],
                flex: [{
                    flex: [me, dl, "auto", "initial", "none", $]
                }],
                grow: [{
                    grow: ["", me, W, $]
                }],
                shrink: [{
                    shrink: ["", me, W, $]
                }],
                order: [{
                    order: [$a, "first", "last", "none", W, $]
                }],
                "grid-cols": [{
                    "grid-cols": ze()
                }],
                "col-start-end": [{
                    col: ne()
                }],
                "col-start": [{
                    "col-start": ue()
                }],
                "col-end": [{
                    "col-end": ue()
                }],
                "grid-rows": [{
                    "grid-rows": ze()
                }],
                "row-start-end": [{
                    row: ne()
                }],
                "row-start": [{
                    "row-start": ue()
                }],
                "row-end": [{
                    "row-end": ue()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": Be()
                }],
                "auto-rows": [{
                    "auto-rows": Be()
                }],
                gap: [{
                    gap: A()
                }],
                "gap-x": [{
                    "gap-x": A()
                }],
                "gap-y": [{
                    "gap-y": A()
                }],
                "justify-content": [{
                    justify: [...ke(), "normal"]
                }],
                "justify-items": [{
                    "justify-items": [...je(), "normal"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", ...je()]
                }],
                "align-content": [{
                    content: ["normal", ...ke()]
                }],
                "align-items": [{
                    items: [...je(), {
                        baseline: ["", "last"]
                    }]
                }],
                "align-self": [{
                    self: ["auto", ...je(), {
                        baseline: ["", "last"]
                    }]
                }],
                "place-content": [{
                    "place-content": ke()
                }],
                "place-items": [{
                    "place-items": [...je(), "baseline"]
                }],
                "place-self": [{
                    "place-self": ["auto", ...je()]
                }],
                p: [{
                    p: A()
                }],
                px: [{
                    px: A()
                }],
                py: [{
                    py: A()
                }],
                ps: [{
                    ps: A()
                }],
                pe: [{
                    pe: A()
                }],
                pt: [{
                    pt: A()
                }],
                pr: [{
                    pr: A()
                }],
                pb: [{
                    pb: A()
                }],
                pl: [{
                    pl: A()
                }],
                m: [{
                    m: H()
                }],
                mx: [{
                    mx: H()
                }],
                my: [{
                    my: H()
                }],
                ms: [{
                    ms: H()
                }],
                me: [{
                    me: H()
                }],
                mt: [{
                    mt: H()
                }],
                mr: [{
                    mr: H()
                }],
                mb: [{
                    mb: H()
                }],
                ml: [{
                    ml: H()
                }],
                "space-x": [{
                    "space-x": A()
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": A()
                }],
                "space-y-reverse": ["space-y-reverse"],
                size: [{
                    size: K()
                }],
                w: [{
                    w: [h, "screen", ...K()]
                }],
                "min-w": [{
                    "min-w": [h, "screen", "none", ...K()]
                }],
                "max-w": [{
                    "max-w": [h, "screen", "none", "prose", {
                        screen: [m]
                    }, ...K()]
                }],
                h: [{
                    h: ["screen", "lh", ...K()]
                }],
                "min-h": [{
                    "min-h": ["screen", "lh", "none", ...K()]
                }],
                "max-h": [{
                    "max-h": ["screen", "lh", ...K()]
                }],
                "font-size": [{
                    text: ["base", u, hn, bs]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: [o, W, $o]
                }],
                "font-stretch": [{
                    "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Fo, $]
                }],
                "font-family": [{
                    font: [n5, $, i]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: [d, W, $]
                }],
                "line-clamp": [{
                    "line-clamp": [me, "none", W, $o]
                }],
                leading: [{
                    leading: [p, ...A()]
                }],
                "list-image": [{
                    "list-image": ["none", W, $]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "list-style-type": [{
                    list: ["disc", "decimal", "none", W, $]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "placeholder-color": [{
                    placeholder: Y()
                }],
                "text-color": [{
                    text: Y()
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...ie(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: [me, "from-font", "auto", W, bs]
                }],
                "text-decoration-color": [{
                    decoration: Y()
                }],
                "underline-offset": [{
                    "underline-offset": [me, "auto", W, $]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: A()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", W, $]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                wrap: [{
                    wrap: ["break-word", "anywhere", "normal"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", W, $]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: we()
                }],
                "bg-repeat": [{
                    bg: Ce()
                }],
                "bg-size": [{
                    bg: C()
                }],
                "bg-image": [{
                    bg: ["none", {
                        linear: [{
                            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, $a, W, $],
                        radial: ["", W, $],
                        conic: [$a, W, $]
                    }, r5, l5]
                }],
                "bg-color": [{
                    bg: Y()
                }],
                "gradient-from-pos": [{
                    from: P()
                }],
                "gradient-via-pos": [{
                    via: P()
                }],
                "gradient-to-pos": [{
                    to: P()
                }],
                "gradient-from": [{
                    from: Y()
                }],
                "gradient-via": [{
                    via: Y()
                }],
                "gradient-to": [{
                    to: Y()
                }],
                rounded: [{
                    rounded: Q()
                }],
                "rounded-s": [{
                    "rounded-s": Q()
                }],
                "rounded-e": [{
                    "rounded-e": Q()
                }],
                "rounded-t": [{
                    "rounded-t": Q()
                }],
                "rounded-r": [{
                    "rounded-r": Q()
                }],
                "rounded-b": [{
                    "rounded-b": Q()
                }],
                "rounded-l": [{
                    "rounded-l": Q()
                }],
                "rounded-ss": [{
                    "rounded-ss": Q()
                }],
                "rounded-se": [{
                    "rounded-se": Q()
                }],
                "rounded-ee": [{
                    "rounded-ee": Q()
                }],
                "rounded-es": [{
                    "rounded-es": Q()
                }],
                "rounded-tl": [{
                    "rounded-tl": Q()
                }],
                "rounded-tr": [{
                    "rounded-tr": Q()
                }],
                "rounded-br": [{
                    "rounded-br": Q()
                }],
                "rounded-bl": [{
                    "rounded-bl": Q()
                }],
                "border-w": [{
                    border: I()
                }],
                "border-w-x": [{
                    "border-x": I()
                }],
                "border-w-y": [{
                    "border-y": I()
                }],
                "border-w-s": [{
                    "border-s": I()
                }],
                "border-w-e": [{
                    "border-e": I()
                }],
                "border-w-t": [{
                    "border-t": I()
                }],
                "border-w-r": [{
                    "border-r": I()
                }],
                "border-w-b": [{
                    "border-b": I()
                }],
                "border-w-l": [{
                    "border-l": I()
                }],
                "divide-x": [{
                    "divide-x": I()
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": I()
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "border-style": [{
                    border: [...ie(), "hidden", "none"]
                }],
                "divide-style": [{
                    divide: [...ie(), "hidden", "none"]
                }],
                "border-color": [{
                    border: Y()
                }],
                "border-color-x": [{
                    "border-x": Y()
                }],
                "border-color-y": [{
                    "border-y": Y()
                }],
                "border-color-s": [{
                    "border-s": Y()
                }],
                "border-color-e": [{
                    "border-e": Y()
                }],
                "border-color-t": [{
                    "border-t": Y()
                }],
                "border-color-r": [{
                    "border-r": Y()
                }],
                "border-color-b": [{
                    "border-b": Y()
                }],
                "border-color-l": [{
                    "border-l": Y()
                }],
                "divide-color": [{
                    divide: Y()
                }],
                "outline-style": [{
                    outline: [...ie(), "none", "hidden"]
                }],
                "outline-offset": [{
                    "outline-offset": [me, W, $]
                }],
                "outline-w": [{
                    outline: ["", me, hn, bs]
                }],
                "outline-color": [{
                    outline: Y()
                }],
                shadow: [{
                    shadow: ["", "none", j, er, Wc]
                }],
                "shadow-color": [{
                    shadow: Y()
                }],
                "inset-shadow": [{
                    "inset-shadow": ["none", v, er, Wc]
                }],
                "inset-shadow-color": [{
                    "inset-shadow": Y()
                }],
                "ring-w": [{
                    ring: I()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: Y()
                }],
                "ring-offset-w": [{
                    "ring-offset": [me, bs]
                }],
                "ring-offset-color": [{
                    "ring-offset": Y()
                }],
                "inset-ring-w": [{
                    "inset-ring": I()
                }],
                "inset-ring-color": [{
                    "inset-ring": Y()
                }],
                "text-shadow": [{
                    "text-shadow": ["none", S, er, Wc]
                }],
                "text-shadow-color": [{
                    "text-shadow": Y()
                }],
                opacity: [{
                    opacity: [me, W, $]
                }],
                "mix-blend": [{
                    "mix-blend": [...pe(), "plus-darker", "plus-lighter"]
                }],
                "bg-blend": [{
                    "bg-blend": pe()
                }],
                "mask-clip": [{
                    "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                }, "mask-no-clip"],
                "mask-composite": [{
                    mask: ["add", "subtract", "intersect", "exclude"]
                }],
                "mask-image-linear-pos": [{
                    "mask-linear": [me]
                }],
                "mask-image-linear-from-pos": [{
                    "mask-linear-from": ce()
                }],
                "mask-image-linear-to-pos": [{
                    "mask-linear-to": ce()
                }],
                "mask-image-linear-from-color": [{
                    "mask-linear-from": Y()
                }],
                "mask-image-linear-to-color": [{
                    "mask-linear-to": Y()
                }],
                "mask-image-t-from-pos": [{
                    "mask-t-from": ce()
                }],
                "mask-image-t-to-pos": [{
                    "mask-t-to": ce()
                }],
                "mask-image-t-from-color": [{
                    "mask-t-from": Y()
                }],
                "mask-image-t-to-color": [{
                    "mask-t-to": Y()
                }],
                "mask-image-r-from-pos": [{
                    "mask-r-from": ce()
                }],
                "mask-image-r-to-pos": [{
                    "mask-r-to": ce()
                }],
                "mask-image-r-from-color": [{
                    "mask-r-from": Y()
                }],
                "mask-image-r-to-color": [{
                    "mask-r-to": Y()
                }],
                "mask-image-b-from-pos": [{
                    "mask-b-from": ce()
                }],
                "mask-image-b-to-pos": [{
                    "mask-b-to": ce()
                }],
                "mask-image-b-from-color": [{
                    "mask-b-from": Y()
                }],
                "mask-image-b-to-color": [{
                    "mask-b-to": Y()
                }],
                "mask-image-l-from-pos": [{
                    "mask-l-from": ce()
                }],
                "mask-image-l-to-pos": [{
                    "mask-l-to": ce()
                }],
                "mask-image-l-from-color": [{
                    "mask-l-from": Y()
                }],
                "mask-image-l-to-color": [{
                    "mask-l-to": Y()
                }],
                "mask-image-x-from-pos": [{
                    "mask-x-from": ce()
                }],
                "mask-image-x-to-pos": [{
                    "mask-x-to": ce()
                }],
                "mask-image-x-from-color": [{
                    "mask-x-from": Y()
                }],
                "mask-image-x-to-color": [{
                    "mask-x-to": Y()
                }],
                "mask-image-y-from-pos": [{
                    "mask-y-from": ce()
                }],
                "mask-image-y-to-pos": [{
                    "mask-y-to": ce()
                }],
                "mask-image-y-from-color": [{
                    "mask-y-from": Y()
                }],
                "mask-image-y-to-color": [{
                    "mask-y-to": Y()
                }],
                "mask-image-radial": [{
                    "mask-radial": [W, $]
                }],
                "mask-image-radial-from-pos": [{
                    "mask-radial-from": ce()
                }],
                "mask-image-radial-to-pos": [{
                    "mask-radial-to": ce()
                }],
                "mask-image-radial-from-color": [{
                    "mask-radial-from": Y()
                }],
                "mask-image-radial-to-color": [{
                    "mask-radial-to": Y()
                }],
                "mask-image-radial-shape": [{
                    "mask-radial": ["circle", "ellipse"]
                }],
                "mask-image-radial-size": [{
                    "mask-radial": [{
                        closest: ["side", "corner"],
                        farthest: ["side", "corner"]
                    }]
                }],
                "mask-image-radial-pos": [{
                    "mask-radial-at": J()
                }],
                "mask-image-conic-pos": [{
                    "mask-conic": [me]
                }],
                "mask-image-conic-from-pos": [{
                    "mask-conic-from": ce()
                }],
                "mask-image-conic-to-pos": [{
                    "mask-conic-to": ce()
                }],
                "mask-image-conic-from-color": [{
                    "mask-conic-from": Y()
                }],
                "mask-image-conic-to-color": [{
                    "mask-conic-to": Y()
                }],
                "mask-mode": [{
                    mask: ["alpha", "luminance", "match"]
                }],
                "mask-origin": [{
                    "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                }],
                "mask-position": [{
                    mask: we()
                }],
                "mask-repeat": [{
                    mask: Ce()
                }],
                "mask-size": [{
                    mask: C()
                }],
                "mask-type": [{
                    "mask-type": ["alpha", "luminance"]
                }],
                "mask-image": [{
                    mask: ["none", W, $]
                }],
                filter: [{
                    filter: ["", "none", W, $]
                }],
                blur: [{
                    blur: Fe()
                }],
                brightness: [{
                    brightness: [me, W, $]
                }],
                contrast: [{
                    contrast: [me, W, $]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", z, er, Wc]
                }],
                "drop-shadow-color": [{
                    "drop-shadow": Y()
                }],
                grayscale: [{
                    grayscale: ["", me, W, $]
                }],
                "hue-rotate": [{
                    "hue-rotate": [me, W, $]
                }],
                invert: [{
                    invert: ["", me, W, $]
                }],
                saturate: [{
                    saturate: [me, W, $]
                }],
                sepia: [{
                    sepia: ["", me, W, $]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none", W, $]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": Fe()
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [me, W, $]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [me, W, $]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": ["", me, W, $]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [me, W, $]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": ["", me, W, $]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [me, W, $]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [me, W, $]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": ["", me, W, $]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": A()
                }],
                "border-spacing-x": [{
                    "border-spacing-x": A()
                }],
                "border-spacing-y": [{
                    "border-spacing-y": A()
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", W, $]
                }],
                "transition-behavior": [{
                    transition: ["normal", "discrete"]
                }],
                duration: [{
                    duration: [me, "initial", W, $]
                }],
                ease: [{
                    ease: ["linear", "initial", U, W, $]
                }],
                delay: [{
                    delay: [me, W, $]
                }],
                animate: [{
                    animate: ["none", Z, W, $]
                }],
                backface: [{
                    backface: ["hidden", "visible"]
                }],
                perspective: [{
                    perspective: [E, W, $]
                }],
                "perspective-origin": [{
                    "perspective-origin": ee()
                }],
                rotate: [{
                    rotate: _e()
                }],
                "rotate-x": [{
                    "rotate-x": _e()
                }],
                "rotate-y": [{
                    "rotate-y": _e()
                }],
                "rotate-z": [{
                    "rotate-z": _e()
                }],
                scale: [{
                    scale: Xt()
                }],
                "scale-x": [{
                    "scale-x": Xt()
                }],
                "scale-y": [{
                    "scale-y": Xt()
                }],
                "scale-z": [{
                    "scale-z": Xt()
                }],
                "scale-3d": ["scale-3d"],
                skew: [{
                    skew: wa()
                }],
                "skew-x": [{
                    "skew-x": wa()
                }],
                "skew-y": [{
                    "skew-y": wa()
                }],
                transform: [{
                    transform: [W, $, "", "none", "gpu", "cpu"]
                }],
                "transform-origin": [{
                    origin: ee()
                }],
                "transform-style": [{
                    transform: ["3d", "flat"]
                }],
                translate: [{
                    translate: Ea()
                }],
                "translate-x": [{
                    "translate-x": Ea()
                }],
                "translate-y": [{
                    "translate-y": Ea()
                }],
                "translate-z": [{
                    "translate-z": Ea()
                }],
                "translate-none": ["translate-none"],
                accent: [{
                    accent: Y()
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                "caret-color": [{
                    caret: Y()
                }],
                "color-scheme": [{
                    scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", W, $]
                }],
                "field-sizing": [{
                    "field-sizing": ["fixed", "content"]
                }],
                "pointer-events": [{
                    "pointer-events": ["auto", "none"]
                }],
                resize: [{
                    resize: ["none", "", "y", "x"]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": A()
                }],
                "scroll-mx": [{
                    "scroll-mx": A()
                }],
                "scroll-my": [{
                    "scroll-my": A()
                }],
                "scroll-ms": [{
                    "scroll-ms": A()
                }],
                "scroll-me": [{
                    "scroll-me": A()
                }],
                "scroll-mt": [{
                    "scroll-mt": A()
                }],
                "scroll-mr": [{
                    "scroll-mr": A()
                }],
                "scroll-mb": [{
                    "scroll-mb": A()
                }],
                "scroll-ml": [{
                    "scroll-ml": A()
                }],
                "scroll-p": [{
                    "scroll-p": A()
                }],
                "scroll-px": [{
                    "scroll-px": A()
                }],
                "scroll-py": [{
                    "scroll-py": A()
                }],
                "scroll-ps": [{
                    "scroll-ps": A()
                }],
                "scroll-pe": [{
                    "scroll-pe": A()
                }],
                "scroll-pt": [{
                    "scroll-pt": A()
                }],
                "scroll-pr": [{
                    "scroll-pr": A()
                }],
                "scroll-pb": [{
                    "scroll-pb": A()
                }],
                "scroll-pl": [{
                    "scroll-pl": A()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", W, $]
                }],
                fill: [{
                    fill: ["none", ...Y()]
                }],
                "stroke-w": [{
                    stroke: [me, hn, bs, $o]
                }],
                stroke: [{
                    stroke: ["none", ...Y()]
                }],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                translate: ["translate-x", "translate-y", "translate-none"],
                "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            },
            orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
        }
    },
    d5 = X3(u5);

function Dn(...l) {
    return d5(S3(l))
}

function jn({
    ...l
}) {
    return n.jsx(x3, {
        "code-path": "src/components/ui/dialog.tsx:10:10",
        "data-slot": "dialog",
        ...l
    })
}

function f5({
    ...l
}) {
    return n.jsx(y3, {
        "code-path": "src/components/ui/dialog.tsx:22:10",
        "data-slot": "dialog-portal",
        ...l
    })
}

function p5({
    className: l,
    ...i
}) {
    return n.jsx(v3, {
        "code-path": "src/components/ui/dialog.tsx:36:5",
        "data-slot": "dialog-overlay",
        className: Dn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", l),
        ...i
    })
}

function Nn({
    className: l,
    children: i,
    showCloseButton: u = !0,
    ...o
}) {
    return n.jsxs(f5, {
        "code-path": "src/components/ui/dialog.tsx:56:5",
        "data-slot": "dialog-portal",
        children: [n.jsx(p5, {
            "code-path": "src/components/ui/dialog.tsx:57:7"
        }), n.jsxs(b3, {
            "code-path": "src/components/ui/dialog.tsx:58:7",
            "data-slot": "dialog-content",
            className: Dn("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg", l),
            ...o,
            children: [i, u && n.jsxs(N3, {
                "code-path": "src/components/ui/dialog.tsx:68:11",
                "data-slot": "dialog-close",
                className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                children: [n.jsx(ja, {
                    "code-path": "src/components/ui/dialog.tsx:72:13"
                }), n.jsx("span", {
                    "code-path": "src/components/ui/dialog.tsx:73:13",
                    className: "sr-only",
                    children: "Close"
                })]
            })]
        })]
    })
}

function Sn({
    className: l,
    ...i
}) {
    return n.jsx("div", {
        "code-path": "src/components/ui/dialog.tsx:83:5",
        "data-slot": "dialog-header",
        className: Dn("flex flex-col gap-2 text-center sm:text-left", l),
        ...i
    })
}

function wn({
    className: l,
    ...i
}) {
    return n.jsx("div", {
        "code-path": "src/components/ui/dialog.tsx:93:5",
        "data-slot": "dialog-footer",
        className: Dn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", l),
        ...i
    })
}

function En({
    className: l,
    ...i
}) {
    return n.jsx(j3, {
        "code-path": "src/components/ui/dialog.tsx:109:5",
        "data-slot": "dialog-title",
        className: Dn("text-lg leading-none font-semibold", l),
        ...i
    })
}

function m5() {
    const {
        items: l,
        setItems: i,
        showNotification: u
    } = ht(), [o, d] = x.useState(""), [p, m] = x.useState("all"), [h, b] = x.useState("all"), [y, j] = x.useState(!1), [v, S] = x.useState(null), [z, M] = x.useState(!1), [E, O] = x.useState(null), U = l.filter(A => {
        const ae = A.name.toLowerCase().includes(o.toLowerCase()) || A.description.toLowerCase().includes(o.toLowerCase()),
            ze = p === "all" || A.status === p,
            ne = h === "all" || A.category === h;
        return ae && ze && ne
    }), Z = A => {
        switch (A) {
            case "available":
                return n.jsx("span", {
                    "code-path": "src/pages/admin/Items.tsx:44:16",
                    className: "px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700",
                    children: "可购"
                });
            case "sold":
                return n.jsx("span", {
                    "code-path": "src/pages/admin/Items.tsx:46:16",
                    className: "px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500",
                    children: "已售"
                });
            case "collection":
                return n.jsx("span", {
                    "code-path": "src/pages/admin/Items.tsx:48:16",
                    className: "px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700",
                    children: "珍藏"
                })
        }
    }, V = A => {
        O(A), M(!0)
    }, J = () => {
        E && (i(A => A.filter(ae => ae.id !== E)), u("展品已删除", "success"), M(!1), O(null))
    }, ee = A => {
        S({
            ...A
        }), j(!0)
    }, G = () => {
        v && (i(A => A.map(ae => ae.id === v.id ? v : ae)), u("展品已更新", "success"), j(!1), S(null))
    }, X = () => {
        const A = {
            id: Date.now().toString(),
            name: "新展品",
            category: "contemporary",
            country: "中国",
            era: "2024",
            collectionDate: new Date().toISOString().split("T")[0],
            material: "未知",
            dimensions: "0×0×0",
            description: "请输入藏品说明",
            status: "collection",
            price: 0,
            images: ["/images/hero-pig.png"],
            tags: []
        };
        S(A), j(!0)
    };
    return n.jsxs("div", {
        "code-path": "src/pages/admin/Items.tsx:107:5",
        children: [n.jsxs("div", {
            "code-path": "src/pages/admin/Items.tsx:109:7",
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",
            children: [n.jsx("h2", {
                "code-path": "src/pages/admin/Items.tsx:110:9",
                className: "text-2xl font-bold text-dark",
                children: "展品管理"
            }), n.jsxs("button", {
                "code-path": "src/pages/admin/Items.tsx:111:9",
                onClick: X,
                className: "btn-primary flex items-center justify-center gap-2",
                children: [n.jsx(Kv, {
                    "code-path": "src/pages/admin/Items.tsx:115:11",
                    className: "w-5 h-5"
                }), "添加展品"]
            })]
        }), n.jsx("div", {
            "code-path": "src/pages/admin/Items.tsx:121:7",
            className: "bg-white rounded-xl p-4 mb-6 shadow-sm",
            children: n.jsxs("div", {
                "code-path": "src/pages/admin/Items.tsx:122:9",
                className: "flex flex-wrap items-center gap-4",
                children: [n.jsxs("div", {
                    "code-path": "src/pages/admin/Items.tsx:123:11",
                    className: "relative flex-1 min-w-[200px]",
                    children: [n.jsx(yn, {
                        "code-path": "src/pages/admin/Items.tsx:124:13",
                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    }), n.jsx("input", {
                        "code-path": "src/pages/admin/Items.tsx:125:13",
                        type: "text",
                        placeholder: "搜索展品...",
                        value: o,
                        onChange: A => d(A.target.value),
                        className: "w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border-0 focus:ring-2 focus:ring-[#ff7e5d]"
                    })]
                }), n.jsxs("select", {
                    "code-path": "src/pages/admin/Items.tsx:134:11",
                    value: p,
                    onChange: A => m(A.target.value),
                    className: "px-4 py-2 rounded-lg bg-gray-100 border-0 focus:ring-2 focus:ring-[#ff7e5d]",
                    children: [n.jsx("option", {
                        "code-path": "src/pages/admin/Items.tsx:139:13",
                        value: "all",
                        children: "全部状态"
                    }), n.jsx("option", {
                        "code-path": "src/pages/admin/Items.tsx:140:13",
                        value: "available",
                        children: "可购"
                    }), n.jsx("option", {
                        "code-path": "src/pages/admin/Items.tsx:141:13",
                        value: "sold",
                        children: "已售"
                    }), n.jsx("option", {
                        "code-path": "src/pages/admin/Items.tsx:142:13",
                        value: "collection",
                        children: "珍藏"
                    })]
                }), n.jsxs("select", {
                    "code-path": "src/pages/admin/Items.tsx:145:11",
                    value: h,
                    onChange: A => b(A.target.value),
                    className: "px-4 py-2 rounded-lg bg-gray-100 border-0 focus:ring-2 focus:ring-[#ff7e5d]",
                    children: [n.jsx("option", {
                        "code-path": "src/pages/admin/Items.tsx:150:13",
                        value: "all",
                        children: "全部分类"
                    }), pl.map(A => n.jsx("option", {
                        "code-path": "src/pages/admin/Items.tsx:152:15",
                        value: A.id,
                        children: A.name
                    }, A.id))]
                })]
            })
        }), n.jsxs("div", {
            "code-path": "src/pages/admin/Items.tsx:159:7",
            className: "bg-white rounded-xl shadow-sm overflow-hidden",
            children: [n.jsx("div", {
                "code-path": "src/pages/admin/Items.tsx:160:9",
                className: "overflow-x-auto",
                children: n.jsxs("table", {
                    "code-path": "src/pages/admin/Items.tsx:161:11",
                    className: "w-full",
                    children: [n.jsx("thead", {
                        "code-path": "src/pages/admin/Items.tsx:162:13",
                        className: "bg-gray-50",
                        children: n.jsxs("tr", {
                            "code-path": "src/pages/admin/Items.tsx:163:15",
                            children: [n.jsx("th", {
                                "code-path": "src/pages/admin/Items.tsx:164:17",
                                className: "px-4 py-3 text-left text-sm font-medium text-gray-700",
                                children: "展品"
                            }), n.jsx("th", {
                                "code-path": "src/pages/admin/Items.tsx:165:17",
                                className: "px-4 py-3 text-left text-sm font-medium text-gray-700",
                                children: "分类"
                            }), n.jsx("th", {
                                "code-path": "src/pages/admin/Items.tsx:166:17",
                                className: "px-4 py-3 text-left text-sm font-medium text-gray-700",
                                children: "状态"
                            }), n.jsx("th", {
                                "code-path": "src/pages/admin/Items.tsx:167:17",
                                className: "px-4 py-3 text-left text-sm font-medium text-gray-700",
                                children: "价格"
                            }), n.jsx("th", {
                                "code-path": "src/pages/admin/Items.tsx:168:17",
                                className: "px-4 py-3 text-left text-sm font-medium text-gray-700",
                                children: "入藏日期"
                            }), n.jsx("th", {
                                "code-path": "src/pages/admin/Items.tsx:169:17",
                                className: "px-4 py-3 text-right text-sm font-medium text-gray-700",
                                children: "操作"
                            })]
                        })
                    }), n.jsx("tbody", {
                        "code-path": "src/pages/admin/Items.tsx:172:13",
                        className: "divide-y divide-gray-100",
                        children: U.map(A => n.jsxs("tr", {
                            "code-path": "src/pages/admin/Items.tsx:174:17",
                            className: "hover:bg-gray-50",
                            children: [n.jsx("td", {
                                "code-path": "src/pages/admin/Items.tsx:175:19",
                                className: "px-4 py-3",
                                children: n.jsxs("div", {
                                    "code-path": "src/pages/admin/Items.tsx:176:21",
                                    className: "flex items-center gap-3",
                                    children: [n.jsx("img", {
                                        "code-path": "src/pages/admin/Items.tsx:177:23",
                                        src: A.images[0],
                                        alt: A.name,
                                        className: "w-12 h-12 rounded-lg object-contain bg-gray-100"
                                    }), n.jsxs("div", {
                                        "code-path": "src/pages/admin/Items.tsx:182:23",
                                        children: [n.jsx("p", {
                                            "code-path": "src/pages/admin/Items.tsx:183:25",
                                            className: "font-medium text-dark",
                                            children: A.name
                                        }), n.jsxs("p", {
                                            "code-path": "src/pages/admin/Items.tsx:184:25",
                                            className: "text-sm text-gray-500",
                                            children: [A.country, " · ", A.era]
                                        })]
                                    })]
                                })
                            }), n.jsx("td", {
                                "code-path": "src/pages/admin/Items.tsx:188:19",
                                className: "px-4 py-3",
                                children: n.jsx("span", {
                                    "code-path": "src/pages/admin/Items.tsx:189:21",
                                    className: "text-sm text-gray-600",
                                    children: pl.find(ae => ae.id === A.category)?.name || A.category
                                })
                            }), n.jsx("td", {
                                "code-path": "src/pages/admin/Items.tsx:193:19",
                                className: "px-4 py-3",
                                children: Z(A.status)
                            }), n.jsx("td", {
                                "code-path": "src/pages/admin/Items.tsx:194:19",
                                className: "px-4 py-3",
                                children: n.jsx("span", {
                                    "code-path": "src/pages/admin/Items.tsx:195:21",
                                    className: "text-sm font-medium",
                                    children: A.status === "available" ? `¥${A.price}` : "-"
                                })
                            }), n.jsx("td", {
                                "code-path": "src/pages/admin/Items.tsx:199:19",
                                className: "px-4 py-3",
                                children: n.jsx("span", {
                                    "code-path": "src/pages/admin/Items.tsx:200:21",
                                    className: "text-sm text-gray-600",
                                    children: A.collectionDate
                                })
                            }), n.jsx("td", {
                                "code-path": "src/pages/admin/Items.tsx:202:19",
                                className: "px-4 py-3",
                                children: n.jsxs("div", {
                                    "code-path": "src/pages/admin/Items.tsx:203:21",
                                    className: "flex items-center justify-end gap-2",
                                    children: [n.jsx(be, {
                                        "code-path": "src/pages/admin/Items.tsx:204:23",
                                        to: `/item/${A.id}`,
                                        target: "_blank",
                                        className: "p-2 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors",
                                        children: n.jsx(xu, {
                                            "code-path": "src/pages/admin/Items.tsx:209:25",
                                            className: "w-4 h-4"
                                        })
                                    }), n.jsx("button", {
                                        "code-path": "src/pages/admin/Items.tsx:211:23",
                                        onClick: () => ee(A),
                                        className: "p-2 rounded-lg text-gray-400 hover:text-[#ff7e5d] hover:bg-[#ff7e5d]/10 transition-colors",
                                        children: n.jsx(dr, {
                                            "code-path": "src/pages/admin/Items.tsx:215:25",
                                            className: "w-4 h-4"
                                        })
                                    }), n.jsx("button", {
                                        "code-path": "src/pages/admin/Items.tsx:217:23",
                                        onClick: () => V(A.id),
                                        className: "p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors",
                                        children: n.jsx(Vh, {
                                            "code-path": "src/pages/admin/Items.tsx:221:25",
                                            className: "w-4 h-4"
                                        })
                                    })]
                                })
                            })]
                        }, A.id))
                    })]
                })
            }), U.length === 0 && n.jsx("div", {
                "code-path": "src/pages/admin/Items.tsx:232:11",
                className: "text-center py-12",
                children: n.jsx("p", {
                    "code-path": "src/pages/admin/Items.tsx:233:13",
                    className: "text-gray-500",
                    children: "暂无符合条件的展品"
                })
            })]
        }), n.jsx(jn, {
            "code-path": "src/pages/admin/Items.tsx:239:7",
            open: y,
            onOpenChange: j,
            children: n.jsxs(Nn, {
                "code-path": "src/pages/admin/Items.tsx:240:9",
                className: "max-w-2xl max-h-[90vh] overflow-y-auto",
                children: [n.jsx(Sn, {
                    "code-path": "src/pages/admin/Items.tsx:241:11",
                    children: n.jsx(En, {
                        "code-path": "src/pages/admin/Items.tsx:242:13",
                        children: v?.id && l.find(A => A.id === v.id) ? "编辑展品" : "添加展品"
                    })
                }), v && n.jsxs("div", {
                    "code-path": "src/pages/admin/Items.tsx:246:13",
                    className: "space-y-4 py-4",
                    children: [n.jsxs("div", {
                        "code-path": "src/pages/admin/Items.tsx:247:15",
                        className: "grid grid-cols-2 gap-4",
                        children: [n.jsxs("div", {
                            "code-path": "src/pages/admin/Items.tsx:248:17",
                            children: [n.jsx("label", {
                                "code-path": "src/pages/admin/Items.tsx:249:19",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "展品名称"
                            }), n.jsx("input", {
                                "code-path": "src/pages/admin/Items.tsx:250:19",
                                type: "text",
                                value: v.name,
                                onChange: A => S({
                                    ...v,
                                    name: A.target.value
                                }),
                                className: "w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#ff7e5d] focus:ring-2 focus:ring-[#ff7e5d]/20 outline-none"
                            })]
                        }), n.jsxs("div", {
                            "code-path": "src/pages/admin/Items.tsx:257:17",
                            children: [n.jsx("label", {
                                "code-path": "src/pages/admin/Items.tsx:258:19",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "分类"
                            }), n.jsx("select", {
                                "code-path": "src/pages/admin/Items.tsx:259:19",
                                value: v.category,
                                onChange: A => S({
                                    ...v,
                                    category: A.target.value
                                }),
                                className: "w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#ff7e5d] focus:ring-2 focus:ring-[#ff7e5d]/20 outline-none",
                                children: pl.map(A => n.jsx("option", {
                                    "code-path": "src/pages/admin/Items.tsx:265:23",
                                    value: A.id,
                                    children: A.name
                                }, A.id))
                            })]
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/admin/Items.tsx:271:15",
                        className: "grid grid-cols-2 gap-4",
                        children: [n.jsxs("div", {
                            "code-path": "src/pages/admin/Items.tsx:272:17",
                            children: [n.jsx("label", {
                                "code-path": "src/pages/admin/Items.tsx:273:19",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "状态"
                            }), n.jsxs("select", {
                                "code-path": "src/pages/admin/Items.tsx:274:19",
                                value: v.status,
                                onChange: A => S({
                                    ...v,
                                    status: A.target.value
                                }),
                                className: "w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#ff7e5d] focus:ring-2 focus:ring-[#ff7e5d]/20 outline-none",
                                children: [n.jsx("option", {
                                    "code-path": "src/pages/admin/Items.tsx:279:21",
                                    value: "available",
                                    children: "可购"
                                }), n.jsx("option", {
                                    "code-path": "src/pages/admin/Items.tsx:280:21",
                                    value: "sold",
                                    children: "已售"
                                }), n.jsx("option", {
                                    "code-path": "src/pages/admin/Items.tsx:281:21",
                                    value: "collection",
                                    children: "珍藏"
                                })]
                            })]
                        }), n.jsxs("div", {
                            "code-path": "src/pages/admin/Items.tsx:284:17",
                            children: [n.jsx("label", {
                                "code-path": "src/pages/admin/Items.tsx:285:19",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "价格"
                            }), n.jsx("input", {
                                "code-path": "src/pages/admin/Items.tsx:286:19",
                                type: "number",
                                value: v.price,
                                onChange: A => S({
                                    ...v,
                                    price: parseInt(A.target.value) || 0
                                }),
                                className: "w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#ff7e5d] focus:ring-2 focus:ring-[#ff7e5d]/20 outline-none",
                                disabled: v.status !== "available"
                            })]
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/admin/Items.tsx:296:15",
                        className: "grid grid-cols-3 gap-4",
                        children: [n.jsxs("div", {
                            "code-path": "src/pages/admin/Items.tsx:297:17",
                            children: [n.jsx("label", {
                                "code-path": "src/pages/admin/Items.tsx:298:19",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "产地"
                            }), n.jsx("input", {
                                "code-path": "src/pages/admin/Items.tsx:299:19",
                                type: "text",
                                value: v.country,
                                onChange: A => S({
                                    ...v,
                                    country: A.target.value
                                }),
                                className: "w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#ff7e5d] focus:ring-2 focus:ring-[#ff7e5d]/20 outline-none"
                            })]
                        }), n.jsxs("div", {
                            "code-path": "src/pages/admin/Items.tsx:306:17",
                            children: [n.jsx("label", {
                                "code-path": "src/pages/admin/Items.tsx:307:19",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "年代"
                            }), n.jsx("input", {
                                "code-path": "src/pages/admin/Items.tsx:308:19",
                                type: "text",
                                value: v.era,
                                onChange: A => S({
                                    ...v,
                                    era: A.target.value
                                }),
                                className: "w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#ff7e5d] focus:ring-2 focus:ring-[#ff7e5d]/20 outline-none"
                            })]
                        }), n.jsxs("div", {
                            "code-path": "src/pages/admin/Items.tsx:315:17",
                            children: [n.jsx("label", {
                                "code-path": "src/pages/admin/Items.tsx:316:19",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "材质"
                            }), n.jsx("input", {
                                "code-path": "src/pages/admin/Items.tsx:317:19",
                                type: "text",
                                value: v.material,
                                onChange: A => S({
                                    ...v,
                                    material: A.target.value
                                }),
                                className: "w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#ff7e5d] focus:ring-2 focus:ring-[#ff7e5d]/20 outline-none"
                            })]
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/admin/Items.tsx:326:15",
                        children: [n.jsx("label", {
                            "code-path": "src/pages/admin/Items.tsx:327:17",
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: "藏品说明"
                        }), n.jsx("textarea", {
                            "code-path": "src/pages/admin/Items.tsx:328:17",
                            value: v.description,
                            onChange: A => S({
                                ...v,
                                description: A.target.value
                            }),
                            rows: 4,
                            className: "w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#ff7e5d] focus:ring-2 focus:ring-[#ff7e5d]/20 outline-none resize-none"
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/admin/Items.tsx:336:15",
                        children: [n.jsx("label", {
                            "code-path": "src/pages/admin/Items.tsx:337:17",
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: "标签（用空格分隔）"
                        }), n.jsx("input", {
                            "code-path": "src/pages/admin/Items.tsx:338:17",
                            type: "text",
                            value: v.tags.join(" "),
                            onChange: A => S({
                                ...v,
                                tags: A.target.value.split(/\s+/)
                            }),
                            className: "w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#ff7e5d] focus:ring-2 focus:ring-[#ff7e5d]/20 outline-none"
                        })]
                    })]
                }), n.jsxs(wn, {
                    "code-path": "src/pages/admin/Items.tsx:348:11",
                    children: [n.jsx("button", {
                        "code-path": "src/pages/admin/Items.tsx:349:13",
                        onClick: () => j(!1),
                        className: "px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors",
                        children: "取消"
                    }), n.jsx("button", {
                        "code-path": "src/pages/admin/Items.tsx:355:13",
                        onClick: G,
                        className: "px-4 py-2 rounded-lg bg-[#ff7e5d] text-white hover:bg-[#e86a4a] transition-colors",
                        children: "保存"
                    })]
                })]
            })
        }), n.jsx(jn, {
            "code-path": "src/pages/admin/Items.tsx:366:7",
            open: z,
            onOpenChange: M,
            children: n.jsxs(Nn, {
                "code-path": "src/pages/admin/Items.tsx:367:9",
                children: [n.jsx(Sn, {
                    "code-path": "src/pages/admin/Items.tsx:368:11",
                    children: n.jsx(En, {
                        "code-path": "src/pages/admin/Items.tsx:369:13",
                        children: "确认删除"
                    })
                }), n.jsx("p", {
                    "code-path": "src/pages/admin/Items.tsx:371:11",
                    className: "text-gray-600 py-4",
                    children: "确定要删除这件展品吗？此操作无法撤销。"
                }), n.jsxs(wn, {
                    "code-path": "src/pages/admin/Items.tsx:372:11",
                    children: [n.jsx("button", {
                        "code-path": "src/pages/admin/Items.tsx:373:13",
                        onClick: () => M(!1),
                        className: "px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors",
                        children: "取消"
                    }), n.jsx("button", {
                        "code-path": "src/pages/admin/Items.tsx:379:13",
                        onClick: J,
                        className: "px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors",
                        children: "删除"
                    })]
                })]
            })
        })]
    })
}

function h5() {
    const [l, i] = x.useState(tu), [u, o] = x.useState(""), [d, p] = x.useState("all"), [m, h] = x.useState(null), [b, y] = x.useState(!1), j = l.filter(M => {
        const E = M.id.toLowerCase().includes(u.toLowerCase()) || M.itemName.toLowerCase().includes(u.toLowerCase()) || M.buyerName.toLowerCase().includes(u.toLowerCase()),
            O = d === "all" || M.status === d;
        return E && O
    }), v = M => {
        switch (M) {
            case "pending":
                return n.jsx("span", {
                    "code-path": "src/pages/admin/Orders.tsx:41:16",
                    className: "px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700",
                    children: "待付款"
                });
            case "paid":
                return n.jsx("span", {
                    "code-path": "src/pages/admin/Orders.tsx:43:16",
                    className: "px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700",
                    children: "已付款"
                });
            case "shipped":
                return n.jsx("span", {
                    "code-path": "src/pages/admin/Orders.tsx:45:16",
                    className: "px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700",
                    children: "已发货"
                });
            case "completed":
                return n.jsx("span", {
                    "code-path": "src/pages/admin/Orders.tsx:47:16",
                    className: "px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700",
                    children: "已完成"
                });
            case "cancelled":
                return n.jsx("span", {
                    "code-path": "src/pages/admin/Orders.tsx:49:16",
                    className: "px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500",
                    children: "已取消"
                })
        }
    }, S = (M, E) => {
        i(O => O.map(U => {
            if (U.id === M) {
                const Z = {
                    status: E
                };
                return E === "shipped" && (Z.shippedAt = new Date().toISOString().split("T")[0]), E === "completed" && (Z.completedAt = new Date().toISOString().split("T")[0]), {
                    ...U,
                    ...Z
                }
            }
            return U
        }))
    }, z = M => {
        h(M), y(!0)
    };
    return n.jsxs("div", {
        "code-path": "src/pages/admin/Orders.tsx:73:5",
        children: [n.jsxs("div", {
            "code-path": "src/pages/admin/Orders.tsx:75:7",
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",
            children: [n.jsx("h2", {
                "code-path": "src/pages/admin/Orders.tsx:76:9",
                className: "text-2xl font-bold text-dark",
                children: "订单管理"
            }), n.jsxs("div", {
                "code-path": "src/pages/admin/Orders.tsx:77:9",
                className: "flex items-center gap-4 text-sm text-gray-500",
                children: [n.jsxs("span", {
                    "code-path": "src/pages/admin/Orders.tsx:78:11",
                    children: ["总订单: ", n.jsx("strong", {
                        "code-path": "src/pages/admin/Orders.tsx:78:22",
                        className: "text-dark",
                        children: l.length
                    })]
                }), n.jsxs("span", {
                    "code-path": "src/pages/admin/Orders.tsx:79:11",
                    children: ["待处理: ", n.jsx("strong", {
                        "code-path": "src/pages/admin/Orders.tsx:79:22",
                        className: "text-amber-600",
                        children: l.filter(M => M.status === "pending").length
                    })]
                })]
            })]
        }), n.jsx("div", {
            "code-path": "src/pages/admin/Orders.tsx:84:7",
            className: "bg-white rounded-xl p-4 mb-6 shadow-sm",
            children: n.jsxs("div", {
                "code-path": "src/pages/admin/Orders.tsx:85:9",
                className: "flex flex-wrap items-center gap-4",
                children: [n.jsxs("div", {
                    "code-path": "src/pages/admin/Orders.tsx:86:11",
                    className: "relative flex-1 min-w-[200px]",
                    children: [n.jsx(yn, {
                        "code-path": "src/pages/admin/Orders.tsx:87:13",
                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    }), n.jsx("input", {
                        "code-path": "src/pages/admin/Orders.tsx:88:13",
                        type: "text",
                        placeholder: "搜索订单号、商品或买家...",
                        value: u,
                        onChange: M => o(M.target.value),
                        className: "w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border-0 focus:ring-2 focus:ring-[#ff7e5d]"
                    })]
                }), n.jsxs("select", {
                    "code-path": "src/pages/admin/Orders.tsx:97:11",
                    value: d,
                    onChange: M => p(M.target.value),
                    className: "px-4 py-2 rounded-lg bg-gray-100 border-0 focus:ring-2 focus:ring-[#ff7e5d]",
                    children: [n.jsx("option", {
                        "code-path": "src/pages/admin/Orders.tsx:102:13",
                        value: "all",
                        children: "全部状态"
                    }), n.jsx("option", {
                        "code-path": "src/pages/admin/Orders.tsx:103:13",
                        value: "pending",
                        children: "待付款"
                    }), n.jsx("option", {
                        "code-path": "src/pages/admin/Orders.tsx:104:13",
                        value: "paid",
                        children: "已付款"
                    }), n.jsx("option", {
                        "code-path": "src/pages/admin/Orders.tsx:105:13",
                        value: "shipped",
                        children: "已发货"
                    }), n.jsx("option", {
                        "code-path": "src/pages/admin/Orders.tsx:106:13",
                        value: "completed",
                        children: "已完成"
                    }), n.jsx("option", {
                        "code-path": "src/pages/admin/Orders.tsx:107:13",
                        value: "cancelled",
                        children: "已取消"
                    })]
                })]
            })
        }), n.jsxs("div", {
            "code-path": "src/pages/admin/Orders.tsx:113:7",
            className: "bg-white rounded-xl shadow-sm overflow-hidden",
            children: [n.jsx("div", {
                "code-path": "src/pages/admin/Orders.tsx:114:9",
                className: "overflow-x-auto",
                children: n.jsxs("table", {
                    "code-path": "src/pages/admin/Orders.tsx:115:11",
                    className: "w-full",
                    children: [n.jsx("thead", {
                        "code-path": "src/pages/admin/Orders.tsx:116:13",
                        className: "bg-gray-50",
                        children: n.jsxs("tr", {
                            "code-path": "src/pages/admin/Orders.tsx:117:15",
                            children: [n.jsx("th", {
                                "code-path": "src/pages/admin/Orders.tsx:118:17",
                                className: "px-4 py-3 text-left text-sm font-medium text-gray-700",
                                children: "订单号"
                            }), n.jsx("th", {
                                "code-path": "src/pages/admin/Orders.tsx:119:17",
                                className: "px-4 py-3 text-left text-sm font-medium text-gray-700",
                                children: "商品"
                            }), n.jsx("th", {
                                "code-path": "src/pages/admin/Orders.tsx:120:17",
                                className: "px-4 py-3 text-left text-sm font-medium text-gray-700",
                                children: "买家"
                            }), n.jsx("th", {
                                "code-path": "src/pages/admin/Orders.tsx:121:17",
                                className: "px-4 py-3 text-left text-sm font-medium text-gray-700",
                                children: "金额"
                            }), n.jsx("th", {
                                "code-path": "src/pages/admin/Orders.tsx:122:17",
                                className: "px-4 py-3 text-left text-sm font-medium text-gray-700",
                                children: "状态"
                            }), n.jsx("th", {
                                "code-path": "src/pages/admin/Orders.tsx:123:17",
                                className: "px-4 py-3 text-left text-sm font-medium text-gray-700",
                                children: "下单时间"
                            }), n.jsx("th", {
                                "code-path": "src/pages/admin/Orders.tsx:124:17",
                                className: "px-4 py-3 text-right text-sm font-medium text-gray-700",
                                children: "操作"
                            })]
                        })
                    }), n.jsx("tbody", {
                        "code-path": "src/pages/admin/Orders.tsx:127:13",
                        className: "divide-y divide-gray-100",
                        children: j.map(M => n.jsxs("tr", {
                            "code-path": "src/pages/admin/Orders.tsx:129:17",
                            className: "hover:bg-gray-50",
                            children: [n.jsx("td", {
                                "code-path": "src/pages/admin/Orders.tsx:130:19",
                                className: "px-4 py-3",
                                children: n.jsx("span", {
                                    "code-path": "src/pages/admin/Orders.tsx:131:21",
                                    className: "font-mono text-sm text-gray-600",
                                    children: M.id
                                })
                            }), n.jsx("td", {
                                "code-path": "src/pages/admin/Orders.tsx:133:19",
                                className: "px-4 py-3",
                                children: n.jsx("p", {
                                    "code-path": "src/pages/admin/Orders.tsx:134:21",
                                    className: "font-medium text-dark",
                                    children: M.itemName
                                })
                            }), n.jsx("td", {
                                "code-path": "src/pages/admin/Orders.tsx:136:19",
                                className: "px-4 py-3",
                                children: n.jsxs("div", {
                                    "code-path": "src/pages/admin/Orders.tsx:137:21",
                                    children: [n.jsx("p", {
                                        "code-path": "src/pages/admin/Orders.tsx:138:23",
                                        className: "text-sm text-dark",
                                        children: M.buyerName
                                    }), n.jsx("p", {
                                        "code-path": "src/pages/admin/Orders.tsx:139:23",
                                        className: "text-xs text-gray-500",
                                        children: M.buyerPhone
                                    })]
                                })
                            }), n.jsx("td", {
                                "code-path": "src/pages/admin/Orders.tsx:142:19",
                                className: "px-4 py-3",
                                children: n.jsxs("span", {
                                    "code-path": "src/pages/admin/Orders.tsx:143:21",
                                    className: "font-medium text-[#ff7e5d]",
                                    children: ["¥", M.price]
                                })
                            }), n.jsx("td", {
                                "code-path": "src/pages/admin/Orders.tsx:145:19",
                                className: "px-4 py-3",
                                children: v(M.status)
                            }), n.jsx("td", {
                                "code-path": "src/pages/admin/Orders.tsx:146:19",
                                className: "px-4 py-3",
                                children: n.jsx("span", {
                                    "code-path": "src/pages/admin/Orders.tsx:147:21",
                                    className: "text-sm text-gray-600",
                                    children: M.createdAt
                                })
                            }), n.jsx("td", {
                                "code-path": "src/pages/admin/Orders.tsx:149:19",
                                className: "px-4 py-3",
                                children: n.jsxs("div", {
                                    "code-path": "src/pages/admin/Orders.tsx:150:21",
                                    className: "flex items-center justify-end gap-2",
                                    children: [n.jsx("button", {
                                        "code-path": "src/pages/admin/Orders.tsx:151:23",
                                        onClick: () => z(M),
                                        className: "p-2 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors",
                                        children: n.jsx(xu, {
                                            "code-path": "src/pages/admin/Orders.tsx:155:25",
                                            className: "w-4 h-4"
                                        })
                                    }), M.status === "paid" && n.jsx("button", {
                                        "code-path": "src/pages/admin/Orders.tsx:159:25",
                                        onClick: () => S(M.id, "shipped"),
                                        className: "p-2 rounded-lg text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition-colors",
                                        title: "标记发货",
                                        children: n.jsx(m2, {
                                            "code-path": "src/pages/admin/Orders.tsx:164:27",
                                            className: "w-4 h-4"
                                        })
                                    }), M.status === "shipped" && n.jsx("button", {
                                        "code-path": "src/pages/admin/Orders.tsx:169:25",
                                        onClick: () => S(M.id, "completed"),
                                        className: "p-2 rounded-lg text-gray-400 hover:text-green-600 hover:bg-green-50 transition-colors",
                                        title: "标记完成",
                                        children: n.jsx(js, {
                                            "code-path": "src/pages/admin/Orders.tsx:174:27",
                                            className: "w-4 h-4"
                                        })
                                    }), (M.status === "pending" || M.status === "paid") && n.jsx("button", {
                                        "code-path": "src/pages/admin/Orders.tsx:179:25",
                                        onClick: () => S(M.id, "cancelled"),
                                        className: "p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors",
                                        title: "取消订单",
                                        children: n.jsx(ja, {
                                            "code-path": "src/pages/admin/Orders.tsx:184:27",
                                            className: "w-4 h-4"
                                        })
                                    })]
                                })
                            })]
                        }, M.id))
                    })]
                })
            }), j.length === 0 && n.jsxs("div", {
                "code-path": "src/pages/admin/Orders.tsx:196:11",
                className: "text-center py-12",
                children: [n.jsx(nu, {
                    "code-path": "src/pages/admin/Orders.tsx:197:13",
                    className: "w-12 h-12 mx-auto text-gray-300 mb-4"
                }), n.jsx("p", {
                    "code-path": "src/pages/admin/Orders.tsx:198:13",
                    className: "text-gray-500",
                    children: "暂无符合条件的订单"
                })]
            })]
        }), n.jsx(jn, {
            "code-path": "src/pages/admin/Orders.tsx:204:7",
            open: b,
            onOpenChange: y,
            children: n.jsxs(Nn, {
                "code-path": "src/pages/admin/Orders.tsx:205:9",
                className: "max-w-lg",
                children: [n.jsx(Sn, {
                    "code-path": "src/pages/admin/Orders.tsx:206:11",
                    children: n.jsx(En, {
                        "code-path": "src/pages/admin/Orders.tsx:207:13",
                        children: "订单详情"
                    })
                }), m && n.jsxs("div", {
                    "code-path": "src/pages/admin/Orders.tsx:211:13",
                    className: "space-y-4 py-4",
                    children: [n.jsxs("div", {
                        "code-path": "src/pages/admin/Orders.tsx:212:15",
                        className: "flex justify-between items-center p-4 bg-gray-50 rounded-xl",
                        children: [n.jsx("span", {
                            "code-path": "src/pages/admin/Orders.tsx:213:17",
                            className: "text-gray-500",
                            children: "订单号"
                        }), n.jsx("span", {
                            "code-path": "src/pages/admin/Orders.tsx:214:17",
                            className: "font-mono font-medium",
                            children: m.id
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/admin/Orders.tsx:217:15",
                        className: "space-y-3",
                        children: [n.jsx("h4", {
                            "code-path": "src/pages/admin/Orders.tsx:218:17",
                            className: "font-medium text-dark",
                            children: "商品信息"
                        }), n.jsxs("div", {
                            "code-path": "src/pages/admin/Orders.tsx:219:17",
                            className: "p-4 border border-gray-200 rounded-xl",
                            children: [n.jsx("p", {
                                "code-path": "src/pages/admin/Orders.tsx:220:19",
                                className: "font-medium",
                                children: m.itemName
                            }), n.jsxs("p", {
                                "code-path": "src/pages/admin/Orders.tsx:221:19",
                                className: "text-[#ff7e5d] font-bold mt-1",
                                children: ["¥", m.price]
                            })]
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/admin/Orders.tsx:225:15",
                        className: "space-y-3",
                        children: [n.jsx("h4", {
                            "code-path": "src/pages/admin/Orders.tsx:226:17",
                            className: "font-medium text-dark",
                            children: "买家信息"
                        }), n.jsxs("div", {
                            "code-path": "src/pages/admin/Orders.tsx:227:17",
                            className: "space-y-2 text-sm",
                            children: [n.jsxs("div", {
                                "code-path": "src/pages/admin/Orders.tsx:228:19",
                                className: "flex justify-between",
                                children: [n.jsx("span", {
                                    "code-path": "src/pages/admin/Orders.tsx:229:21",
                                    className: "text-gray-500",
                                    children: "姓名"
                                }), n.jsx("span", {
                                    "code-path": "src/pages/admin/Orders.tsx:230:21",
                                    children: m.buyerName
                                })]
                            }), n.jsxs("div", {
                                "code-path": "src/pages/admin/Orders.tsx:232:19",
                                className: "flex justify-between",
                                children: [n.jsx("span", {
                                    "code-path": "src/pages/admin/Orders.tsx:233:21",
                                    className: "text-gray-500",
                                    children: "电话"
                                }), n.jsx("span", {
                                    "code-path": "src/pages/admin/Orders.tsx:234:21",
                                    children: m.buyerPhone
                                })]
                            }), n.jsxs("div", {
                                "code-path": "src/pages/admin/Orders.tsx:236:19",
                                className: "flex justify-between",
                                children: [n.jsx("span", {
                                    "code-path": "src/pages/admin/Orders.tsx:237:21",
                                    className: "text-gray-500",
                                    children: "邮箱"
                                }), n.jsx("span", {
                                    "code-path": "src/pages/admin/Orders.tsx:238:21",
                                    children: m.buyerEmail
                                })]
                            }), n.jsxs("div", {
                                "code-path": "src/pages/admin/Orders.tsx:240:19",
                                className: "flex justify-between",
                                children: [n.jsx("span", {
                                    "code-path": "src/pages/admin/Orders.tsx:241:21",
                                    className: "text-gray-500",
                                    children: "地址"
                                }), n.jsx("span", {
                                    "code-path": "src/pages/admin/Orders.tsx:242:21",
                                    className: "text-right max-w-[200px]",
                                    children: m.buyerAddress
                                })]
                            })]
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/admin/Orders.tsx:247:15",
                        className: "space-y-3",
                        children: [n.jsx("h4", {
                            "code-path": "src/pages/admin/Orders.tsx:248:17",
                            className: "font-medium text-dark",
                            children: "订单状态"
                        }), n.jsxs("div", {
                            "code-path": "src/pages/admin/Orders.tsx:249:17",
                            className: "flex items-center justify-between p-4 border border-gray-200 rounded-xl",
                            children: [n.jsx("span", {
                                "code-path": "src/pages/admin/Orders.tsx:250:19",
                                className: "text-gray-500",
                                children: "当前状态"
                            }), v(m.status)]
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/admin/Orders.tsx:255:15",
                        className: "space-y-2 text-sm text-gray-500",
                        children: [n.jsxs("div", {
                            "code-path": "src/pages/admin/Orders.tsx:256:17",
                            className: "flex justify-between",
                            children: [n.jsx("span", {
                                "code-path": "src/pages/admin/Orders.tsx:257:19",
                                children: "下单时间"
                            }), n.jsx("span", {
                                "code-path": "src/pages/admin/Orders.tsx:258:19",
                                children: m.createdAt
                            })]
                        }), m.paidAt && n.jsxs("div", {
                            "code-path": "src/pages/admin/Orders.tsx:261:19",
                            className: "flex justify-between",
                            children: [n.jsx("span", {
                                "code-path": "src/pages/admin/Orders.tsx:262:21",
                                children: "付款时间"
                            }), n.jsx("span", {
                                "code-path": "src/pages/admin/Orders.tsx:263:21",
                                children: m.paidAt
                            })]
                        }), m.shippedAt && n.jsxs("div", {
                            "code-path": "src/pages/admin/Orders.tsx:267:19",
                            className: "flex justify-between",
                            children: [n.jsx("span", {
                                "code-path": "src/pages/admin/Orders.tsx:268:21",
                                children: "发货时间"
                            }), n.jsx("span", {
                                "code-path": "src/pages/admin/Orders.tsx:269:21",
                                children: m.shippedAt
                            })]
                        }), m.completedAt && n.jsxs("div", {
                            "code-path": "src/pages/admin/Orders.tsx:273:19",
                            className: "flex justify-between",
                            children: [n.jsx("span", {
                                "code-path": "src/pages/admin/Orders.tsx:274:21",
                                children: "完成时间"
                            }), n.jsx("span", {
                                "code-path": "src/pages/admin/Orders.tsx:275:21",
                                children: m.completedAt
                            })]
                        })]
                    })]
                }), n.jsx(wn, {
                    "code-path": "src/pages/admin/Orders.tsx:282:11",
                    children: n.jsx("button", {
                        "code-path": "src/pages/admin/Orders.tsx:283:13",
                        onClick: () => y(!1),
                        className: "px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors",
                        children: "关闭"
                    })
                })]
            })
        })]
    })
}

function g5() {
    const [l, i] = x.useState(Bh), [u, o] = x.useState(""), [d, p] = x.useState("all"), [m, h] = x.useState(null), [b, y] = x.useState(!1), [j, v] = x.useState(""), [S, z] = x.useState(!1), [M, E] = x.useState(null), O = l.filter(G => {
        const X = G.name.toLowerCase().includes(u.toLowerCase()) || G.content.toLowerCase().includes(u.toLowerCase()) || G.email.toLowerCase().includes(u.toLowerCase()),
            A = d === "all" || d === "replied" && G.isReplied || d === "unreplied" && !G.isReplied;
        return X && A
    }), U = G => {
        h(G), v(G.reply || ""), y(!0)
    }, Z = () => {
        m && j.trim() && (i(G => G.map(X => X.id === m.id ? {
            ...X,
            isReplied: !0,
            reply: j.trim(),
            replyAt: new Date().toISOString().split("T")[0]
        } : X)), y(!1), v(""))
    }, V = G => {
        E(G), z(!0)
    }, J = () => {
        M && (i(G => G.filter(X => X.id !== M)), z(!1), E(null))
    }, ee = G => {
        i(X => X.map(A => A.id === G ? {
            ...A,
            isReplied: !A.isReplied,
            reply: A.isReplied ? void 0 : A.reply,
            replyAt: A.isReplied ? void 0 : A.replyAt
        } : A))
    };
    return n.jsxs("div", {
        "code-path": "src/pages/admin/Messages.tsx:99:5",
        children: [n.jsxs("div", {
            "code-path": "src/pages/admin/Messages.tsx:101:7",
            className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",
            children: [n.jsx("h2", {
                "code-path": "src/pages/admin/Messages.tsx:102:9",
                className: "text-2xl font-bold text-dark",
                children: "留言管理"
            }), n.jsxs("div", {
                "code-path": "src/pages/admin/Messages.tsx:103:9",
                className: "flex items-center gap-4 text-sm text-gray-500",
                children: [n.jsxs("span", {
                    "code-path": "src/pages/admin/Messages.tsx:104:11",
                    children: ["总留言: ", n.jsx("strong", {
                        "code-path": "src/pages/admin/Messages.tsx:104:22",
                        className: "text-dark",
                        children: l.length
                    })]
                }), n.jsxs("span", {
                    "code-path": "src/pages/admin/Messages.tsx:105:11",
                    children: ["待回复: ", n.jsx("strong", {
                        "code-path": "src/pages/admin/Messages.tsx:105:22",
                        className: "text-amber-600",
                        children: l.filter(G => !G.isReplied).length
                    })]
                })]
            })]
        }), n.jsx("div", {
            "code-path": "src/pages/admin/Messages.tsx:110:7",
            className: "bg-white rounded-xl p-4 mb-6 shadow-sm",
            children: n.jsxs("div", {
                "code-path": "src/pages/admin/Messages.tsx:111:9",
                className: "flex flex-wrap items-center gap-4",
                children: [n.jsxs("div", {
                    "code-path": "src/pages/admin/Messages.tsx:112:11",
                    className: "relative flex-1 min-w-[200px]",
                    children: [n.jsx(yn, {
                        "code-path": "src/pages/admin/Messages.tsx:113:13",
                        className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    }), n.jsx("input", {
                        "code-path": "src/pages/admin/Messages.tsx:114:13",
                        type: "text",
                        placeholder: "搜索留言内容、姓名或邮箱...",
                        value: u,
                        onChange: G => o(G.target.value),
                        className: "w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 border-0 focus:ring-2 focus:ring-[#ff7e5d]"
                    })]
                }), n.jsxs("select", {
                    "code-path": "src/pages/admin/Messages.tsx:123:11",
                    value: d,
                    onChange: G => p(G.target.value),
                    className: "px-4 py-2 rounded-lg bg-gray-100 border-0 focus:ring-2 focus:ring-[#ff7e5d]",
                    children: [n.jsx("option", {
                        "code-path": "src/pages/admin/Messages.tsx:128:13",
                        value: "all",
                        children: "全部留言"
                    }), n.jsx("option", {
                        "code-path": "src/pages/admin/Messages.tsx:129:13",
                        value: "unreplied",
                        children: "待回复"
                    }), n.jsx("option", {
                        "code-path": "src/pages/admin/Messages.tsx:130:13",
                        value: "replied",
                        children: "已回复"
                    })]
                })]
            })
        }), n.jsxs("div", {
            "code-path": "src/pages/admin/Messages.tsx:136:7",
            className: "space-y-4",
            children: [O.map(G => n.jsx("div", {
                "code-path": "src/pages/admin/Messages.tsx:138:11",
                className: `bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${G.isReplied?"":"border-l-4 border-[#ff7e5d]"}`,
                children: n.jsxs("div", {
                    "code-path": "src/pages/admin/Messages.tsx:144:13",
                    className: "flex items-start justify-between gap-4",
                    children: [n.jsxs("div", {
                        "code-path": "src/pages/admin/Messages.tsx:145:15",
                        className: "flex-1",
                        children: [n.jsxs("div", {
                            "code-path": "src/pages/admin/Messages.tsx:146:17",
                            className: "flex items-center gap-3 mb-3",
                            children: [n.jsx("div", {
                                "code-path": "src/pages/admin/Messages.tsx:147:19",
                                className: "w-10 h-10 rounded-full bg-gradient-to-br from-[#ff7e5d] to-[#ff9a7e] flex items-center justify-center text-white font-medium",
                                children: G.name.charAt(0)
                            }), n.jsxs("div", {
                                "code-path": "src/pages/admin/Messages.tsx:150:19",
                                children: [n.jsx("p", {
                                    "code-path": "src/pages/admin/Messages.tsx:151:21",
                                    className: "font-medium text-dark",
                                    children: G.name
                                }), n.jsx("p", {
                                    "code-path": "src/pages/admin/Messages.tsx:152:21",
                                    className: "text-sm text-gray-500",
                                    children: G.email
                                })]
                            }), n.jsx("span", {
                                "code-path": "src/pages/admin/Messages.tsx:154:19",
                                className: "text-sm text-gray-400",
                                children: G.createdAt
                            }), !G.isReplied && n.jsx("span", {
                                "code-path": "src/pages/admin/Messages.tsx:156:21",
                                className: "px-2 py-0.5 rounded-full text-xs font-medium bg-[#ff7e5d] text-white",
                                children: "待回复"
                            })]
                        }), n.jsx("p", {
                            "code-path": "src/pages/admin/Messages.tsx:162:17",
                            className: "text-gray-700 mb-4",
                            children: G.content
                        }), G.isReplied && G.reply && n.jsxs("div", {
                            "code-path": "src/pages/admin/Messages.tsx:165:19",
                            className: "bg-gray-50 rounded-xl p-4 mt-4",
                            children: [n.jsxs("div", {
                                "code-path": "src/pages/admin/Messages.tsx:166:21",
                                className: "flex items-center gap-2 mb-2",
                                children: [n.jsx("span", {
                                    "code-path": "src/pages/admin/Messages.tsx:167:23",
                                    className: "text-sm font-medium text-[#ff7e5d]",
                                    children: "馆长回复"
                                }), n.jsx("span", {
                                    "code-path": "src/pages/admin/Messages.tsx:168:23",
                                    className: "text-xs text-gray-400",
                                    children: G.replyAt
                                })]
                            }), n.jsx("p", {
                                "code-path": "src/pages/admin/Messages.tsx:170:21",
                                className: "text-gray-700",
                                children: G.reply
                            })]
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/admin/Messages.tsx:175:15",
                        className: "flex items-center gap-2",
                        children: [n.jsx("button", {
                            "code-path": "src/pages/admin/Messages.tsx:176:17",
                            onClick: () => U(G),
                            className: `p-2 rounded-lg transition-colors ${G.isReplied?"text-gray-400 hover:text-[#ff7e5d] hover:bg-[#ff7e5d]/10":"text-[#ff7e5d] bg-[#ff7e5d]/10 hover:bg-[#ff7e5d]/20"}`,
                            title: G.isReplied ? "编辑回复" : "回复",
                            children: n.jsx(Jv, {
                                "code-path": "src/pages/admin/Messages.tsx:185:19",
                                className: "w-5 h-5"
                            })
                        }), n.jsx("button", {
                            "code-path": "src/pages/admin/Messages.tsx:188:17",
                            onClick: () => ee(G.id),
                            className: `p-2 rounded-lg transition-colors ${G.isReplied?"text-green-500 hover:bg-green-50":"text-gray-400 hover:text-green-500 hover:bg-green-50"}`,
                            title: G.isReplied ? "标记为未回复" : "标记为已回复",
                            children: n.jsx(js, {
                                "code-path": "src/pages/admin/Messages.tsx:197:19",
                                className: "w-5 h-5"
                            })
                        }), n.jsx("button", {
                            "code-path": "src/pages/admin/Messages.tsx:200:17",
                            onClick: () => V(G.id),
                            className: "p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors",
                            title: "删除",
                            children: n.jsx(Vh, {
                                "code-path": "src/pages/admin/Messages.tsx:205:19",
                                className: "w-5 h-5"
                            })
                        })]
                    })]
                })
            }, G.id)), O.length === 0 && n.jsxs("div", {
                "code-path": "src/pages/admin/Messages.tsx:213:11",
                className: "text-center py-12 bg-white rounded-xl",
                children: [n.jsx(lu, {
                    "code-path": "src/pages/admin/Messages.tsx:214:13",
                    className: "w-12 h-12 mx-auto text-gray-300 mb-4"
                }), n.jsx("p", {
                    "code-path": "src/pages/admin/Messages.tsx:215:13",
                    className: "text-gray-500",
                    children: "暂无符合条件的留言"
                })]
            })]
        }), n.jsx(jn, {
            "code-path": "src/pages/admin/Messages.tsx:221:7",
            open: b,
            onOpenChange: y,
            children: n.jsxs(Nn, {
                "code-path": "src/pages/admin/Messages.tsx:222:9",
                className: "max-w-lg",
                children: [n.jsx(Sn, {
                    "code-path": "src/pages/admin/Messages.tsx:223:11",
                    children: n.jsx(En, {
                        "code-path": "src/pages/admin/Messages.tsx:224:13",
                        children: m?.isReplied ? "编辑回复" : "回复留言"
                    })
                }), m && n.jsxs("div", {
                    "code-path": "src/pages/admin/Messages.tsx:228:13",
                    className: "space-y-4 py-4",
                    children: [n.jsxs("div", {
                        "code-path": "src/pages/admin/Messages.tsx:229:15",
                        className: "p-4 bg-gray-50 rounded-xl",
                        children: [n.jsxs("p", {
                            "code-path": "src/pages/admin/Messages.tsx:230:17",
                            className: "text-sm text-gray-500 mb-1",
                            children: ["来自 ", m.name, " 的留言"]
                        }), n.jsx("p", {
                            "code-path": "src/pages/admin/Messages.tsx:231:17",
                            className: "text-gray-700",
                            children: m.content
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/admin/Messages.tsx:234:15",
                        children: [n.jsx("label", {
                            "code-path": "src/pages/admin/Messages.tsx:235:17",
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "您的回复"
                        }), n.jsx("textarea", {
                            "code-path": "src/pages/admin/Messages.tsx:236:17",
                            value: j,
                            onChange: G => v(G.target.value),
                            rows: 5,
                            className: "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff7e5d] focus:ring-2 focus:ring-[#ff7e5d]/20 outline-none resize-none",
                            placeholder: "请输入回复内容..."
                        })]
                    })]
                }), n.jsxs(wn, {
                    "code-path": "src/pages/admin/Messages.tsx:247:11",
                    children: [n.jsx("button", {
                        "code-path": "src/pages/admin/Messages.tsx:248:13",
                        onClick: () => y(!1),
                        className: "px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors",
                        children: "取消"
                    }), n.jsxs("button", {
                        "code-path": "src/pages/admin/Messages.tsx:254:13",
                        onClick: Z,
                        disabled: !j.trim(),
                        className: "px-4 py-2 rounded-lg bg-[#ff7e5d] text-white hover:bg-[#e86a4a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2",
                        children: [n.jsx(Qh, {
                            "code-path": "src/pages/admin/Messages.tsx:259:15",
                            className: "w-4 h-4"
                        }), "发送回复"]
                    })]
                })]
            })
        }), n.jsx(jn, {
            "code-path": "src/pages/admin/Messages.tsx:267:7",
            open: S,
            onOpenChange: z,
            children: n.jsxs(Nn, {
                "code-path": "src/pages/admin/Messages.tsx:268:9",
                children: [n.jsx(Sn, {
                    "code-path": "src/pages/admin/Messages.tsx:269:11",
                    children: n.jsx(En, {
                        "code-path": "src/pages/admin/Messages.tsx:270:13",
                        children: "确认删除"
                    })
                }), n.jsx("p", {
                    "code-path": "src/pages/admin/Messages.tsx:272:11",
                    className: "text-gray-600 py-4",
                    children: "确定要删除这条留言吗？此操作无法撤销。"
                }), n.jsxs(wn, {
                    "code-path": "src/pages/admin/Messages.tsx:273:11",
                    children: [n.jsx("button", {
                        "code-path": "src/pages/admin/Messages.tsx:274:13",
                        onClick: () => z(!1),
                        className: "px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors",
                        children: "取消"
                    }), n.jsx("button", {
                        "code-path": "src/pages/admin/Messages.tsx:280:13",
                        onClick: J,
                        className: "px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors",
                        children: "删除"
                    })]
                })]
            })
        })]
    })
}

function x5() {
    const {
        showNotification: l
    } = ht(), [i, u] = x.useState({
        siteName: Fa.siteName,
        siteNameEn: Fa.siteNameEn,
        contactEmail: Fa.contactEmail,
        contactPhone: Fa.contactPhone,
        wechatId: Fa.wechatId,
        wechatPayEnabled: Fa.wechatPayEnabled,
        alipayEnabled: Fa.alipayEnabled,
        paypalEnabled: Fa.paypalEnabled
    }), [o, d] = x.useState({
        username: "admin",
        name: "馆长",
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    }), p = () => {
        l("设置已保存", "success")
    }, m = () => {
        if (o.newPassword && o.newPassword !== o.confirmPassword) {
            l("两次输入的密码不一致", "error");
            return
        }
        l("管理员信息已更新", "success"), d(h => ({
            ...h,
            currentPassword: "",
            newPassword: "",
            confirmPassword: ""
        }))
    };
    return n.jsxs("div", {
        "code-path": "src/pages/admin/Settings.tsx:53:5",
        children: [n.jsx("div", {
            "code-path": "src/pages/admin/Settings.tsx:55:7",
            className: "flex items-center justify-between mb-6",
            children: n.jsx("h2", {
                "code-path": "src/pages/admin/Settings.tsx:56:9",
                className: "text-2xl font-bold text-dark",
                children: "系统设置"
            })
        }), n.jsxs("div", {
            "code-path": "src/pages/admin/Settings.tsx:59:7",
            className: "grid lg:grid-cols-2 gap-6",
            children: [n.jsxs("div", {
                "code-path": "src/pages/admin/Settings.tsx:61:9",
                className: "bg-white rounded-xl p-6 shadow-sm",
                children: [n.jsxs("div", {
                    "code-path": "src/pages/admin/Settings.tsx:62:11",
                    className: "flex items-center gap-3 mb-6",
                    children: [n.jsx("div", {
                        "code-path": "src/pages/admin/Settings.tsx:63:13",
                        className: "w-10 h-10 rounded-xl bg-[#ff7e5d]/10 flex items-center justify-center",
                        children: n.jsx(Yh, {
                            "code-path": "src/pages/admin/Settings.tsx:64:15",
                            className: "w-5 h-5 text-[#ff7e5d]"
                        })
                    }), n.jsxs("div", {
                        "code-path": "src/pages/admin/Settings.tsx:66:13",
                        children: [n.jsx("h3", {
                            "code-path": "src/pages/admin/Settings.tsx:67:15",
                            className: "font-semibold text-dark",
                            children: "网站设置"
                        }), n.jsx("p", {
                            "code-path": "src/pages/admin/Settings.tsx:68:15",
                            className: "text-sm text-gray-500",
                            children: "配置网站基本信息"
                        })]
                    })]
                }), n.jsxs("div", {
                    "code-path": "src/pages/admin/Settings.tsx:72:11",
                    className: "space-y-4",
                    children: [n.jsxs("div", {
                        "code-path": "src/pages/admin/Settings.tsx:73:13",
                        children: [n.jsx("label", {
                            "code-path": "src/pages/admin/Settings.tsx:74:15",
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: "网站名称"
                        }), n.jsx("input", {
                            "code-path": "src/pages/admin/Settings.tsx:75:15",
                            type: "text",
                            value: i.siteName,
                            onChange: h => u({
                                ...i,
                                siteName: h.target.value
                            }),
                            className: "w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#ff7e5d] focus:ring-2 focus:ring-[#ff7e5d]/20 outline-none"
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/admin/Settings.tsx:83:13",
                        children: [n.jsx("label", {
                            "code-path": "src/pages/admin/Settings.tsx:84:15",
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: "英文名称"
                        }), n.jsx("input", {
                            "code-path": "src/pages/admin/Settings.tsx:85:15",
                            type: "text",
                            value: i.siteNameEn,
                            onChange: h => u({
                                ...i,
                                siteNameEn: h.target.value
                            }),
                            className: "w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#ff7e5d] focus:ring-2 focus:ring-[#ff7e5d]/20 outline-none"
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/admin/Settings.tsx:93:13",
                        className: "grid grid-cols-2 gap-4",
                        children: [n.jsxs("div", {
                            "code-path": "src/pages/admin/Settings.tsx:94:15",
                            children: [n.jsx("label", {
                                "code-path": "src/pages/admin/Settings.tsx:95:17",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "联系邮箱"
                            }), n.jsxs("div", {
                                "code-path": "src/pages/admin/Settings.tsx:96:17",
                                className: "relative",
                                children: [n.jsx(yu, {
                                    "code-path": "src/pages/admin/Settings.tsx:97:19",
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                                }), n.jsx("input", {
                                    "code-path": "src/pages/admin/Settings.tsx:98:19",
                                    type: "email",
                                    value: i.contactEmail,
                                    onChange: h => u({
                                        ...i,
                                        contactEmail: h.target.value
                                    }),
                                    className: "w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-[#ff7e5d] focus:ring-2 focus:ring-[#ff7e5d]/20 outline-none"
                                })]
                            })]
                        }), n.jsxs("div", {
                            "code-path": "src/pages/admin/Settings.tsx:106:15",
                            children: [n.jsx("label", {
                                "code-path": "src/pages/admin/Settings.tsx:107:17",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "联系电话"
                            }), n.jsxs("div", {
                                "code-path": "src/pages/admin/Settings.tsx:108:17",
                                className: "relative",
                                children: [n.jsx(vu, {
                                    "code-path": "src/pages/admin/Settings.tsx:109:19",
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                                }), n.jsx("input", {
                                    "code-path": "src/pages/admin/Settings.tsx:110:19",
                                    type: "text",
                                    value: i.contactPhone,
                                    onChange: h => u({
                                        ...i,
                                        contactPhone: h.target.value
                                    }),
                                    className: "w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-[#ff7e5d] focus:ring-2 focus:ring-[#ff7e5d]/20 outline-none"
                                })]
                            })]
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/admin/Settings.tsx:120:13",
                        children: [n.jsx("label", {
                            "code-path": "src/pages/admin/Settings.tsx:121:15",
                            className: "block text-sm font-medium text-gray-700 mb-1",
                            children: "微信号"
                        }), n.jsx("input", {
                            "code-path": "src/pages/admin/Settings.tsx:122:15",
                            type: "text",
                            value: i.wechatId,
                            onChange: h => u({
                                ...i,
                                wechatId: h.target.value
                            }),
                            className: "w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#ff7e5d] focus:ring-2 focus:ring-[#ff7e5d]/20 outline-none"
                        })]
                    }), n.jsxs("button", {
                        "code-path": "src/pages/admin/Settings.tsx:130:13",
                        onClick: p,
                        className: "w-full py-2 bg-[#ff7e5d] text-white rounded-lg hover:bg-[#e86a4a] transition-colors flex items-center justify-center gap-2",
                        children: [n.jsx(Zm, {
                            "code-path": "src/pages/admin/Settings.tsx:134:15",
                            className: "w-4 h-4"
                        }), "保存设置"]
                    })]
                })]
            }), n.jsxs("div", {
                "code-path": "src/pages/admin/Settings.tsx:141:9",
                className: "bg-white rounded-xl p-6 shadow-sm",
                children: [n.jsxs("div", {
                    "code-path": "src/pages/admin/Settings.tsx:142:11",
                    className: "flex items-center gap-3 mb-6",
                    children: [n.jsx("div", {
                        "code-path": "src/pages/admin/Settings.tsx:143:13",
                        className: "w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center",
                        children: n.jsx(fv, {
                            "code-path": "src/pages/admin/Settings.tsx:144:15",
                            className: "w-5 h-5 text-green-600"
                        })
                    }), n.jsxs("div", {
                        "code-path": "src/pages/admin/Settings.tsx:146:13",
                        children: [n.jsx("h3", {
                            "code-path": "src/pages/admin/Settings.tsx:147:15",
                            className: "font-semibold text-dark",
                            children: "支付设置"
                        }), n.jsx("p", {
                            "code-path": "src/pages/admin/Settings.tsx:148:15",
                            className: "text-sm text-gray-500",
                            children: "配置支付方式"
                        })]
                    })]
                }), n.jsxs("div", {
                    "code-path": "src/pages/admin/Settings.tsx:152:11",
                    className: "space-y-4",
                    children: [n.jsxs("div", {
                        "code-path": "src/pages/admin/Settings.tsx:153:13",
                        className: "flex items-center justify-between p-4 border border-gray-200 rounded-xl",
                        children: [n.jsxs("div", {
                            "code-path": "src/pages/admin/Settings.tsx:154:15",
                            className: "flex items-center gap-3",
                            children: [n.jsx("div", {
                                "code-path": "src/pages/admin/Settings.tsx:155:17",
                                className: "w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center text-white font-bold text-sm",
                                children: "微"
                            }), n.jsxs("div", {
                                "code-path": "src/pages/admin/Settings.tsx:158:17",
                                children: [n.jsx("p", {
                                    "code-path": "src/pages/admin/Settings.tsx:159:19",
                                    className: "font-medium text-dark",
                                    children: "微信支付"
                                }), n.jsx("p", {
                                    "code-path": "src/pages/admin/Settings.tsx:160:19",
                                    className: "text-sm text-gray-500",
                                    children: "支持微信扫码支付"
                                })]
                            })]
                        }), n.jsxs("label", {
                            "code-path": "src/pages/admin/Settings.tsx:163:15",
                            className: "relative inline-flex items-center cursor-pointer",
                            children: [n.jsx("input", {
                                "code-path": "src/pages/admin/Settings.tsx:164:17",
                                type: "checkbox",
                                checked: i.wechatPayEnabled,
                                onChange: h => u({
                                    ...i,
                                    wechatPayEnabled: h.target.checked
                                }),
                                className: "sr-only peer"
                            }), n.jsx("div", {
                                "code-path": "src/pages/admin/Settings.tsx:170:17",
                                className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#ff7e5d]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ff7e5d]"
                            })]
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/admin/Settings.tsx:174:13",
                        className: "flex items-center justify-between p-4 border border-gray-200 rounded-xl",
                        children: [n.jsxs("div", {
                            "code-path": "src/pages/admin/Settings.tsx:175:15",
                            className: "flex items-center gap-3",
                            children: [n.jsx("div", {
                                "code-path": "src/pages/admin/Settings.tsx:176:17",
                                className: "w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold text-sm",
                                children: "支"
                            }), n.jsxs("div", {
                                "code-path": "src/pages/admin/Settings.tsx:179:17",
                                children: [n.jsx("p", {
                                    "code-path": "src/pages/admin/Settings.tsx:180:19",
                                    className: "font-medium text-dark",
                                    children: "支付宝"
                                }), n.jsx("p", {
                                    "code-path": "src/pages/admin/Settings.tsx:181:19",
                                    className: "text-sm text-gray-500",
                                    children: "支持支付宝扫码支付"
                                })]
                            })]
                        }), n.jsxs("label", {
                            "code-path": "src/pages/admin/Settings.tsx:184:15",
                            className: "relative inline-flex items-center cursor-pointer",
                            children: [n.jsx("input", {
                                "code-path": "src/pages/admin/Settings.tsx:185:17",
                                type: "checkbox",
                                checked: i.alipayEnabled,
                                onChange: h => u({
                                    ...i,
                                    alipayEnabled: h.target.checked
                                }),
                                className: "sr-only peer"
                            }), n.jsx("div", {
                                "code-path": "src/pages/admin/Settings.tsx:191:17",
                                className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#ff7e5d]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ff7e5d]"
                            })]
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/admin/Settings.tsx:195:13",
                        className: "flex items-center justify-between p-4 border border-gray-200 rounded-xl",
                        children: [n.jsxs("div", {
                            "code-path": "src/pages/admin/Settings.tsx:196:15",
                            className: "flex items-center gap-3",
                            children: [n.jsx("div", {
                                "code-path": "src/pages/admin/Settings.tsx:197:17",
                                className: "w-10 h-10 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold text-xs",
                                children: "Pay"
                            }), n.jsxs("div", {
                                "code-path": "src/pages/admin/Settings.tsx:200:17",
                                children: [n.jsx("p", {
                                    "code-path": "src/pages/admin/Settings.tsx:201:19",
                                    className: "font-medium text-dark",
                                    children: "PayPal"
                                }), n.jsx("p", {
                                    "code-path": "src/pages/admin/Settings.tsx:202:19",
                                    className: "text-sm text-gray-500",
                                    children: "支持国际支付（开发中）"
                                })]
                            })]
                        }), n.jsxs("label", {
                            "code-path": "src/pages/admin/Settings.tsx:205:15",
                            className: "relative inline-flex items-center cursor-pointer",
                            children: [n.jsx("input", {
                                "code-path": "src/pages/admin/Settings.tsx:206:17",
                                type: "checkbox",
                                checked: i.paypalEnabled,
                                onChange: h => u({
                                    ...i,
                                    paypalEnabled: h.target.checked
                                }),
                                className: "sr-only peer",
                                disabled: !0
                            }), n.jsx("div", {
                                "code-path": "src/pages/admin/Settings.tsx:213:17",
                                className: "w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#ff7e5d]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ff7e5d] opacity-50"
                            })]
                        })]
                    })]
                })]
            }), n.jsxs("div", {
                "code-path": "src/pages/admin/Settings.tsx:220:9",
                className: "bg-white rounded-xl p-6 shadow-sm lg:col-span-2",
                children: [n.jsxs("div", {
                    "code-path": "src/pages/admin/Settings.tsx:221:11",
                    className: "flex items-center gap-3 mb-6",
                    children: [n.jsx("div", {
                        "code-path": "src/pages/admin/Settings.tsx:222:13",
                        className: "w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center",
                        children: n.jsx(Zh, {
                            "code-path": "src/pages/admin/Settings.tsx:223:15",
                            className: "w-5 h-5 text-blue-600"
                        })
                    }), n.jsxs("div", {
                        "code-path": "src/pages/admin/Settings.tsx:225:13",
                        children: [n.jsx("h3", {
                            "code-path": "src/pages/admin/Settings.tsx:226:15",
                            className: "font-semibold text-dark",
                            children: "管理员设置"
                        }), n.jsx("p", {
                            "code-path": "src/pages/admin/Settings.tsx:227:15",
                            className: "text-sm text-gray-500",
                            children: "修改管理员账号信息"
                        })]
                    })]
                }), n.jsxs("div", {
                    "code-path": "src/pages/admin/Settings.tsx:231:11",
                    className: "grid md:grid-cols-2 gap-6",
                    children: [n.jsxs("div", {
                        "code-path": "src/pages/admin/Settings.tsx:232:13",
                        className: "space-y-4",
                        children: [n.jsxs("div", {
                            "code-path": "src/pages/admin/Settings.tsx:233:15",
                            children: [n.jsx("label", {
                                "code-path": "src/pages/admin/Settings.tsx:234:17",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "用户名"
                            }), n.jsx("input", {
                                "code-path": "src/pages/admin/Settings.tsx:235:17",
                                type: "text",
                                value: o.username,
                                onChange: h => d({
                                    ...o,
                                    username: h.target.value
                                }),
                                className: "w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#ff7e5d] focus:ring-2 focus:ring-[#ff7e5d]/20 outline-none"
                            })]
                        }), n.jsxs("div", {
                            "code-path": "src/pages/admin/Settings.tsx:243:15",
                            children: [n.jsx("label", {
                                "code-path": "src/pages/admin/Settings.tsx:244:17",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "显示名称"
                            }), n.jsx("input", {
                                "code-path": "src/pages/admin/Settings.tsx:245:17",
                                type: "text",
                                value: o.name,
                                onChange: h => d({
                                    ...o,
                                    name: h.target.value
                                }),
                                className: "w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#ff7e5d] focus:ring-2 focus:ring-[#ff7e5d]/20 outline-none"
                            })]
                        })]
                    }), n.jsxs("div", {
                        "code-path": "src/pages/admin/Settings.tsx:254:13",
                        className: "space-y-4",
                        children: [n.jsxs("div", {
                            "code-path": "src/pages/admin/Settings.tsx:255:15",
                            children: [n.jsx("label", {
                                "code-path": "src/pages/admin/Settings.tsx:256:17",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "当前密码"
                            }), n.jsx("input", {
                                "code-path": "src/pages/admin/Settings.tsx:257:17",
                                type: "password",
                                value: o.currentPassword,
                                onChange: h => d({
                                    ...o,
                                    currentPassword: h.target.value
                                }),
                                className: "w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#ff7e5d] focus:ring-2 focus:ring-[#ff7e5d]/20 outline-none",
                                placeholder: "如需修改密码请输入"
                            })]
                        }), n.jsxs("div", {
                            "code-path": "src/pages/admin/Settings.tsx:266:15",
                            className: "grid grid-cols-2 gap-4",
                            children: [n.jsxs("div", {
                                "code-path": "src/pages/admin/Settings.tsx:267:17",
                                children: [n.jsx("label", {
                                    "code-path": "src/pages/admin/Settings.tsx:268:19",
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "新密码"
                                }), n.jsx("input", {
                                    "code-path": "src/pages/admin/Settings.tsx:269:19",
                                    type: "password",
                                    value: o.newPassword,
                                    onChange: h => d({
                                        ...o,
                                        newPassword: h.target.value
                                    }),
                                    className: "w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#ff7e5d] focus:ring-2 focus:ring-[#ff7e5d]/20 outline-none",
                                    placeholder: "新密码"
                                })]
                            }), n.jsxs("div", {
                                "code-path": "src/pages/admin/Settings.tsx:277:17",
                                children: [n.jsx("label", {
                                    "code-path": "src/pages/admin/Settings.tsx:278:19",
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "确认密码"
                                }), n.jsx("input", {
                                    "code-path": "src/pages/admin/Settings.tsx:279:19",
                                    type: "password",
                                    value: o.confirmPassword,
                                    onChange: h => d({
                                        ...o,
                                        confirmPassword: h.target.value
                                    }),
                                    className: "w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#ff7e5d] focus:ring-2 focus:ring-[#ff7e5d]/20 outline-none",
                                    placeholder: "确认密码"
                                })]
                            })]
                        })]
                    })]
                }), n.jsx("div", {
                    "code-path": "src/pages/admin/Settings.tsx:291:11",
                    className: "mt-6 flex justify-end",
                    children: n.jsxs("button", {
                        "code-path": "src/pages/admin/Settings.tsx:292:13",
                        onClick: m,
                        className: "px-6 py-2 bg-[#ff7e5d] text-white rounded-lg hover:bg-[#e86a4a] transition-colors flex items-center gap-2",
                        children: [n.jsx(Zm, {
                            "code-path": "src/pages/admin/Settings.tsx:296:15",
                            className: "w-4 h-4"
                        }), "保存修改"]
                    })
                })]
            })]
        })]
    })
}

function y5() {
    return n.jsx(Iy, {
        "code-path": "src/App.tsx:20:5",
        children: n.jsx(Uy, {
            "code-path": "src/App.tsx:21:7",
            children: n.jsxs(my, {
                "code-path": "src/App.tsx:22:9",
                children: [n.jsxs(mt, {
                    "code-path": "src/App.tsx:24:11",
                    path: "/",
                    element: n.jsx(v2, {
                        "code-path": "src/App.tsx:24:36"
                    }),
                    children: [n.jsx(mt, {
                        "code-path": "src/App.tsx:25:13",
                        index: !0,
                        element: n.jsx(S2, {
                            "code-path": "src/App.tsx:25:35"
                        })
                    }), n.jsx(mt, {
                        "code-path": "src/App.tsx:26:13",
                        path: "category/:categoryId",
                        element: n.jsx(w2, {
                            "code-path": "src/App.tsx:26:57"
                        })
                    }), n.jsx(mt, {
                        "code-path": "src/App.tsx:27:13",
                        path: "item/:itemId",
                        element: n.jsx(E2, {
                            "code-path": "src/App.tsx:27:49"
                        })
                    }), n.jsx(mt, {
                        "code-path": "src/App.tsx:28:13",
                        path: "about",
                        element: n.jsx(C2, {
                            "code-path": "src/App.tsx:28:42"
                        })
                    }), n.jsx(mt, {
                        "code-path": "src/App.tsx:29:13",
                        path: "market",
                        element: n.jsx(A2, {
                            "code-path": "src/App.tsx:29:43"
                        })
                    }), n.jsx(mt, {
                        "code-path": "src/App.tsx:30:13",
                        path: "favorites",
                        element: n.jsx(M2, {
                            "code-path": "src/App.tsx:30:46"
                        })
                    })]
                }), n.jsx(mt, {
                    "code-path": "src/App.tsx:34:11",
                    path: "/admin/login",
                    element: n.jsx(D2, {
                        "code-path": "src/App.tsx:34:47"
                    })
                }), n.jsxs(mt, {
                    "code-path": "src/App.tsx:35:11",
                    path: "/admin",
                    element: n.jsx(O2, {
                        "code-path": "src/App.tsx:35:41"
                    }),
                    children: [n.jsx(mt, {
                        "code-path": "src/App.tsx:36:13",
                        path: "items",
                        element: n.jsx(m5, {
                            "code-path": "src/App.tsx:36:42"
                        })
                    }), n.jsx(mt, {
                        "code-path": "src/App.tsx:37:13",
                        path: "orders",
                        element: n.jsx(h5, {
                            "code-path": "src/App.tsx:37:43"
                        })
                    }), n.jsx(mt, {
                        "code-path": "src/App.tsx:38:13",
                        path: "messages",
                        element: n.jsx(g5, {
                            "code-path": "src/App.tsx:38:45"
                        })
                    }), n.jsx(mt, {
                        "code-path": "src/App.tsx:39:13",
                        path: "settings",
                        element: n.jsx(x5, {
                            "code-path": "src/App.tsx:39:45"
                        })
                    })]
                })]
            })
        })
    })
}
h0.createRoot(document.getElementById("root")).render(n.jsx(x.StrictMode, {
    "code-path": "src/main.tsx:7:3",
    children: n.jsx(y5, {
        "code-path": "src/main.tsx:8:5"
    })
}));