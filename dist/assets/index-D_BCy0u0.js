function km(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != 'string' && !Array.isArray(r)) {
            for (const i in r)
                if (i !== 'default' && !(i in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, i);
                    o && Object.defineProperty(e, i, o.get ? o : { enumerable: !0, get: () => r[i] });
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
    const t = document.createElement('link').relList;
    if (t && t.supports && t.supports('modulepreload')) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver((i) => {
        for (const o of i)
            if (o.type === 'childList') for (const s of o.addedNodes) s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
        const o = {};
        return (
            i.integrity && (o.integrity = i.integrity),
            i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === 'use-credentials'
                ? (o.credentials = 'include')
                : i.crossOrigin === 'anonymous'
                ? (o.credentials = 'omit')
                : (o.credentials = 'same-origin'),
            o
        );
    }
    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o);
    }
})();
function Tm(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var $d = { exports: {} },
    es = {},
    Fd = { exports: {} },
    $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wi = Symbol.for('react.element'),
    jm = Symbol.for('react.portal'),
    Pm = Symbol.for('react.fragment'),
    _m = Symbol.for('react.strict_mode'),
    bm = Symbol.for('react.profiler'),
    Im = Symbol.for('react.provider'),
    Nm = Symbol.for('react.context'),
    Lm = Symbol.for('react.forward_ref'),
    Om = Symbol.for('react.suspense'),
    Mm = Symbol.for('react.memo'),
    zm = Symbol.for('react.lazy'),
    Wu = Symbol.iterator;
function Rm(e) {
    return e === null || typeof e != 'object' ? null : ((e = (Wu && e[Wu]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Bd = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Wd = Object.assign,
    Ud = {};
function vr(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = Ud), (this.updater = n || Bd);
}
vr.prototype.isReactComponent = {};
vr.prototype.setState = function (e, t) {
    if (typeof e != 'object' && typeof e != 'function' && e != null)
        throw Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
    this.updater.enqueueSetState(this, e, t, 'setState');
};
vr.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Vd() {}
Vd.prototype = vr.prototype;
function Na(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = Ud), (this.updater = n || Bd);
}
var La = (Na.prototype = new Vd());
La.constructor = Na;
Wd(La, vr.prototype);
La.isPureReactComponent = !0;
var Uu = Array.isArray,
    Hd = Object.prototype.hasOwnProperty,
    Oa = { current: null },
    Gd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Kd(e, t, n) {
    var r,
        i = {},
        o = null,
        s = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = '' + t.key), t))
            Hd.call(t, r) && !Gd.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        i.children = l;
    }
    if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
    return { $$typeof: wi, type: e, key: o, ref: s, props: i, _owner: Oa.current };
}
function Dm(e, t) {
    return { $$typeof: wi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ma(e) {
    return typeof e == 'object' && e !== null && e.$$typeof === wi;
}
function Am(e) {
    var t = { '=': '=0', ':': '=2' };
    return (
        '$' +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var Vu = /\/+/g;
function bs(e, t) {
    return typeof e == 'object' && e !== null && e.key != null ? Am('' + e.key) : t.toString(36);
}
function Ji(e, t, n, r, i) {
    var o = typeof e;
    (o === 'undefined' || o === 'boolean') && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else
        switch (o) {
            case 'string':
            case 'number':
                s = !0;
                break;
            case 'object':
                switch (e.$$typeof) {
                    case wi:
                    case jm:
                        s = !0;
                }
        }
    if (s)
        return (
            (s = e),
            (i = i(s)),
            (e = r === '' ? '.' + bs(s, 0) : r),
            Uu(i)
                ? ((n = ''),
                  e != null && (n = e.replace(Vu, '$&/') + '/'),
                  Ji(i, t, n, '', function (u) {
                      return u;
                  }))
                : i != null &&
                  (Ma(i) && (i = Dm(i, n + (!i.key || (s && s.key === i.key) ? '' : ('' + i.key).replace(Vu, '$&/') + '/') + e)),
                  t.push(i)),
            1
        );
    if (((s = 0), (r = r === '' ? '.' : r + ':'), Uu(e)))
        for (var a = 0; a < e.length; a++) {
            o = e[a];
            var l = r + bs(o, a);
            s += Ji(o, t, n, l, i);
        }
    else if (((l = Rm(e)), typeof l == 'function'))
        for (e = l.call(e), a = 0; !(o = e.next()).done; ) (o = o.value), (l = r + bs(o, a++)), (s += Ji(o, t, n, l, i));
    else if (o === 'object')
        throw (
            ((t = String(e)),
            Error(
                'Objects are not valid as a React child (found: ' +
                    (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
                    '). If you meant to render a collection of children, use an array instead.'
            ))
        );
    return s;
}
function Ii(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return (
        Ji(e, r, '', '', function (o) {
            return t.call(n, o, i++);
        }),
        r
    );
}
function $m(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var Pe = { current: null },
    Zi = { transition: null },
    Fm = { ReactCurrentDispatcher: Pe, ReactCurrentBatchConfig: Zi, ReactCurrentOwner: Oa };
$.Children = {
    map: Ii,
    forEach: function (e, t, n) {
        Ii(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            Ii(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            Ii(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!Ma(e)) throw Error('React.Children.only expected to receive a single React element child.');
        return e;
    },
};
$.Component = vr;
$.Fragment = Pm;
$.Profiler = bm;
$.PureComponent = Na;
$.StrictMode = _m;
$.Suspense = Om;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fm;
$.cloneElement = function (e, t, n) {
    if (e == null) throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
    var r = Wd({}, e.props),
        i = e.key,
        o = e.ref,
        s = e._owner;
    if (t != null) {
        if ((t.ref !== void 0 && ((o = t.ref), (s = Oa.current)), t.key !== void 0 && (i = '' + t.key), e.type && e.type.defaultProps))
            var a = e.type.defaultProps;
        for (l in t) Hd.call(t, l) && !Gd.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a;
    }
    return { $$typeof: wi, type: e.type, key: i, ref: o, props: r, _owner: s };
};
$.createContext = function (e) {
    return (
        (e = {
            $$typeof: Nm,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: Im, _context: e }),
        (e.Consumer = e)
    );
};
$.createElement = Kd;
$.createFactory = function (e) {
    var t = Kd.bind(null, e);
    return (t.type = e), t;
};
$.createRef = function () {
    return { current: null };
};
$.forwardRef = function (e) {
    return { $$typeof: Lm, render: e };
};
$.isValidElement = Ma;
$.lazy = function (e) {
    return { $$typeof: zm, _payload: { _status: -1, _result: e }, _init: $m };
};
$.memo = function (e, t) {
    return { $$typeof: Mm, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function (e) {
    var t = Zi.transition;
    Zi.transition = {};
    try {
        e();
    } finally {
        Zi.transition = t;
    }
};
$.unstable_act = function () {
    throw Error('act(...) is not supported in production builds of React.');
};
$.useCallback = function (e, t) {
    return Pe.current.useCallback(e, t);
};
$.useContext = function (e) {
    return Pe.current.useContext(e);
};
$.useDebugValue = function () {};
$.useDeferredValue = function (e) {
    return Pe.current.useDeferredValue(e);
};
$.useEffect = function (e, t) {
    return Pe.current.useEffect(e, t);
};
$.useId = function () {
    return Pe.current.useId();
};
$.useImperativeHandle = function (e, t, n) {
    return Pe.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function (e, t) {
    return Pe.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function (e, t) {
    return Pe.current.useLayoutEffect(e, t);
};
$.useMemo = function (e, t) {
    return Pe.current.useMemo(e, t);
};
$.useReducer = function (e, t, n) {
    return Pe.current.useReducer(e, t, n);
};
$.useRef = function (e) {
    return Pe.current.useRef(e);
};
$.useState = function (e) {
    return Pe.current.useState(e);
};
$.useSyncExternalStore = function (e, t, n) {
    return Pe.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function () {
    return Pe.current.useTransition();
};
$.version = '18.2.0';
Fd.exports = $;
var T = Fd.exports;
const V = Tm(T),
    ml = km({ __proto__: null, default: V }, [T]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bm = T,
    Wm = Symbol.for('react.element'),
    Um = Symbol.for('react.fragment'),
    Vm = Object.prototype.hasOwnProperty,
    Hm = Bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Gm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yd(e, t, n) {
    var r,
        i = {},
        o = null,
        s = null;
    n !== void 0 && (o = '' + n), t.key !== void 0 && (o = '' + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) Vm.call(t, r) && !Gm.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
    return { $$typeof: Wm, type: e, key: o, ref: s, props: i, _owner: Hm.current };
}
es.Fragment = Um;
es.jsx = Yd;
es.jsxs = Yd;
$d.exports = es;
var c = $d.exports,
    gl = {},
    Qd = { exports: {} },
    Ve = {},
    Xd = { exports: {} },
    qd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(P, N) {
        var L = P.length;
        P.push(N);
        e: for (; 0 < L; ) {
            var A = (L - 1) >>> 1,
                Y = P[A];
            if (0 < i(Y, N)) (P[A] = N), (P[L] = Y), (L = A);
            else break e;
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0];
    }
    function r(P) {
        if (P.length === 0) return null;
        var N = P[0],
            L = P.pop();
        if (L !== N) {
            P[0] = L;
            e: for (var A = 0, Y = P.length, At = Y >>> 1; A < At; ) {
                var Ye = 2 * (A + 1) - 1,
                    St = P[Ye],
                    Qe = Ye + 1,
                    ht = P[Qe];
                if (0 > i(St, L)) Qe < Y && 0 > i(ht, St) ? ((P[A] = ht), (P[Qe] = L), (A = Qe)) : ((P[A] = St), (P[Ye] = L), (A = Ye));
                else if (Qe < Y && 0 > i(ht, L)) (P[A] = ht), (P[Qe] = L), (A = Qe);
                else break e;
            }
        }
        return N;
    }
    function i(P, N) {
        var L = P.sortIndex - N.sortIndex;
        return L !== 0 ? L : P.id - N.id;
    }
    if (typeof performance == 'object' && typeof performance.now == 'function') {
        var o = performance;
        e.unstable_now = function () {
            return o.now();
        };
    } else {
        var s = Date,
            a = s.now();
        e.unstable_now = function () {
            return s.now() - a;
        };
    }
    var l = [],
        u = [],
        d = 1,
        f = null,
        h = 3,
        g = !1,
        y = !1,
        x = !1,
        S = typeof setTimeout == 'function' ? setTimeout : null,
        p = typeof clearTimeout == 'function' ? clearTimeout : null,
        m = typeof setImmediate < 'u' ? setImmediate : null;
    typeof navigator < 'u' &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(P) {
        for (var N = n(u); N !== null; ) {
            if (N.callback === null) r(u);
            else if (N.startTime <= P) r(u), (N.sortIndex = N.expirationTime), t(l, N);
            else break;
            N = n(u);
        }
    }
    function w(P) {
        if (((x = !1), v(P), !y))
            if (n(l) !== null) (y = !0), de(E);
            else {
                var N = n(u);
                N !== null && Me(w, N.startTime - P);
            }
    }
    function E(P, N) {
        (y = !1), x && ((x = !1), p(_), (_ = -1)), (g = !0);
        var L = h;
        try {
            for (v(N), f = n(l); f !== null && (!(f.expirationTime > N) || (P && !O())); ) {
                var A = f.callback;
                if (typeof A == 'function') {
                    (f.callback = null), (h = f.priorityLevel);
                    var Y = A(f.expirationTime <= N);
                    (N = e.unstable_now()), typeof Y == 'function' ? (f.callback = Y) : f === n(l) && r(l), v(N);
                } else r(l);
                f = n(l);
            }
            if (f !== null) var At = !0;
            else {
                var Ye = n(u);
                Ye !== null && Me(w, Ye.startTime - N), (At = !1);
            }
            return At;
        } finally {
            (f = null), (h = L), (g = !1);
        }
    }
    var C = !1,
        k = null,
        _ = -1,
        b = 5,
        j = -1;
    function O() {
        return !(e.unstable_now() - j < b);
    }
    function R() {
        if (k !== null) {
            var P = e.unstable_now();
            j = P;
            var N = !0;
            try {
                N = k(!0, P);
            } finally {
                N ? z() : ((C = !1), (k = null));
            }
        } else C = !1;
    }
    var z;
    if (typeof m == 'function')
        z = function () {
            m(R);
        };
    else if (typeof MessageChannel < 'u') {
        var K = new MessageChannel(),
            ee = K.port2;
        (K.port1.onmessage = R),
            (z = function () {
                ee.postMessage(null);
            });
    } else
        z = function () {
            S(R, 0);
        };
    function de(P) {
        (k = P), C || ((C = !0), z());
    }
    function Me(P, N) {
        _ = S(function () {
            P(e.unstable_now());
        }, N);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (P) {
            P.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            y || g || ((y = !0), de(E));
        }),
        (e.unstable_forceFrameRate = function (P) {
            0 > P || 125 < P
                ? console.error(
                      'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                  )
                : (b = 0 < P ? Math.floor(1e3 / P) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return h;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(l);
        }),
        (e.unstable_next = function (P) {
            switch (h) {
                case 1:
                case 2:
                case 3:
                    var N = 3;
                    break;
                default:
                    N = h;
            }
            var L = h;
            h = N;
            try {
                return P();
            } finally {
                h = L;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (P, N) {
            switch (P) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    P = 3;
            }
            var L = h;
            h = P;
            try {
                return N();
            } finally {
                h = L;
            }
        }),
        (e.unstable_scheduleCallback = function (P, N, L) {
            var A = e.unstable_now();
            switch ((typeof L == 'object' && L !== null ? ((L = L.delay), (L = typeof L == 'number' && 0 < L ? A + L : A)) : (L = A), P)) {
                case 1:
                    var Y = -1;
                    break;
                case 2:
                    Y = 250;
                    break;
                case 5:
                    Y = 1073741823;
                    break;
                case 4:
                    Y = 1e4;
                    break;
                default:
                    Y = 5e3;
            }
            return (
                (Y = L + Y),
                (P = { id: d++, callback: N, priorityLevel: P, startTime: L, expirationTime: Y, sortIndex: -1 }),
                L > A
                    ? ((P.sortIndex = L), t(u, P), n(l) === null && P === n(u) && (x ? (p(_), (_ = -1)) : (x = !0), Me(w, L - A)))
                    : ((P.sortIndex = Y), t(l, P), y || g || ((y = !0), de(E))),
                P
            );
        }),
        (e.unstable_shouldYield = O),
        (e.unstable_wrapCallback = function (P) {
            var N = h;
            return function () {
                var L = h;
                h = N;
                try {
                    return P.apply(this, arguments);
                } finally {
                    h = L;
                }
            };
        });
})(qd);
Xd.exports = qd;
var Km = Xd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jd = T,
    Be = Km;
function I(e) {
    for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
        t += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
}
var Zd = new Set(),
    Xr = {};
function On(e, t) {
    ir(e, t), ir(e + 'Capture', t);
}
function ir(e, t) {
    for (Xr[e] = t, e = 0; e < t.length; e++) Zd.add(t[e]);
}
var Nt = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
    vl = Object.prototype.hasOwnProperty,
    Ym =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Hu = {},
    Gu = {};
function Qm(e) {
    return vl.call(Gu, e) ? !0 : vl.call(Hu, e) ? !1 : Ym.test(e) ? (Gu[e] = !0) : ((Hu[e] = !0), !1);
}
function Xm(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case 'function':
        case 'symbol':
            return !0;
        case 'boolean':
            return r ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
        default:
            return !1;
    }
}
function qm(e, t, n, r) {
    if (t === null || typeof t > 'u' || Xm(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function _e(e, t, n, r, i, o, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = o),
        (this.removeEmptyString = s);
}
var ye = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
        ye[e] = new _e(e, 0, !1, e, null, !1, !1);
    });
[
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
    var t = e[0];
    ye[t] = new _e(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
    ye[e] = new _e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
    ye[e] = new _e(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (e) {
        ye[e] = new _e(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
    ye[e] = new _e(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
    ye[e] = new _e(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
    ye[e] = new _e(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
    ye[e] = new _e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var za = /[\-:]([a-z])/g;
function Ra(e) {
    return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
        var t = e.replace(za, Ra);
        ye[t] = new _e(t, 1, !1, e, null, !1, !1);
    });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
    var t = e.replace(za, Ra);
    ye[t] = new _e(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var t = e.replace(za, Ra);
    ye[t] = new _e(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
    ye[e] = new _e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ye.xlinkHref = new _e('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
    ye[e] = new _e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Da(e, t, n, r) {
    var i = ye.hasOwnProperty(t) ? ye[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
        (qm(t, n, i, r) && (n = null),
        r || i === null
            ? Qm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
            : i.mustUseProperty
            ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
            : ((t = i.attributeName),
              (r = i.attributeNamespace),
              n === null
                  ? e.removeAttribute(t)
                  : ((i = i.type),
                    (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Rt = Jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ni = Symbol.for('react.element'),
    An = Symbol.for('react.portal'),
    $n = Symbol.for('react.fragment'),
    Aa = Symbol.for('react.strict_mode'),
    yl = Symbol.for('react.profiler'),
    ef = Symbol.for('react.provider'),
    tf = Symbol.for('react.context'),
    $a = Symbol.for('react.forward_ref'),
    xl = Symbol.for('react.suspense'),
    wl = Symbol.for('react.suspense_list'),
    Fa = Symbol.for('react.memo'),
    Wt = Symbol.for('react.lazy'),
    nf = Symbol.for('react.offscreen'),
    Ku = Symbol.iterator;
function kr(e) {
    return e === null || typeof e != 'object' ? null : ((e = (Ku && e[Ku]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var re = Object.assign,
    Is;
function Lr(e) {
    if (Is === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Is = (t && t[1]) || '';
        }
    return (
        `
` +
        Is +
        e
    );
}
var Ns = !1;
function Ls(e, t) {
    if (!e || Ns) return '';
    Ns = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, 'props', {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == 'object' && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (u) {
                    var r = u;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (u) {
                    r = u;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (u) {
                r = u;
            }
            e();
        }
    } catch (u) {
        if (u && r && typeof u.stack == 'string') {
            for (
                var i = u.stack.split(`
`),
                    o = r.stack.split(`
`),
                    s = i.length - 1,
                    a = o.length - 1;
                1 <= s && 0 <= a && i[s] !== o[a];

            )
                a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (i[s] !== o[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if ((s--, a--, 0 > a || i[s] !== o[a])) {
                                var l =
                                    `
` + i[s].replace(' at new ', ' at ');
                                return e.displayName && l.includes('<anonymous>') && (l = l.replace('<anonymous>', e.displayName)), l;
                            }
                        while (1 <= s && 0 <= a);
                    break;
                }
        }
    } finally {
        (Ns = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : '') ? Lr(e) : '';
}
function Jm(e) {
    switch (e.tag) {
        case 5:
            return Lr(e.type);
        case 16:
            return Lr('Lazy');
        case 13:
            return Lr('Suspense');
        case 19:
            return Lr('SuspenseList');
        case 0:
        case 2:
        case 15:
            return (e = Ls(e.type, !1)), e;
        case 11:
            return (e = Ls(e.type.render, !1)), e;
        case 1:
            return (e = Ls(e.type, !0)), e;
        default:
            return '';
    }
}
function Sl(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
        case $n:
            return 'Fragment';
        case An:
            return 'Portal';
        case yl:
            return 'Profiler';
        case Aa:
            return 'StrictMode';
        case xl:
            return 'Suspense';
        case wl:
            return 'SuspenseList';
    }
    if (typeof e == 'object')
        switch (e.$$typeof) {
            case tf:
                return (e.displayName || 'Context') + '.Consumer';
            case ef:
                return (e._context.displayName || 'Context') + '.Provider';
            case $a:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
                    e
                );
            case Fa:
                return (t = e.displayName || null), t !== null ? t : Sl(e.type) || 'Memo';
            case Wt:
                (t = e._payload), (e = e._init);
                try {
                    return Sl(e(t));
                } catch {}
        }
    return null;
}
function Zm(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return 'Cache';
        case 9:
            return (t.displayName || 'Context') + '.Consumer';
        case 10:
            return (t._context.displayName || 'Context') + '.Provider';
        case 18:
            return 'DehydratedFragment';
        case 11:
            return (
                (e = t.render), (e = e.displayName || e.name || ''), t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
            );
        case 7:
            return 'Fragment';
        case 5:
            return t;
        case 4:
            return 'Portal';
        case 3:
            return 'Root';
        case 6:
            return 'Text';
        case 16:
            return Sl(t);
        case 8:
            return t === Aa ? 'StrictMode' : 'Mode';
        case 22:
            return 'Offscreen';
        case 12:
            return 'Profiler';
        case 21:
            return 'Scope';
        case 13:
            return 'Suspense';
        case 19:
            return 'SuspenseList';
        case 25:
            return 'TracingMarker';
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == 'function') return t.displayName || t.name || null;
            if (typeof t == 'string') return t;
    }
    return null;
}
function ln(e) {
    switch (typeof e) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
            return e;
        case 'object':
            return e;
        default:
            return '';
    }
}
function rf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function eg(e) {
    var t = rf(e) ? 'checked' : 'value',
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = '' + e[t];
    if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
        var i = n.get,
            o = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return i.call(this);
                },
                set: function (s) {
                    (r = '' + s), o.call(this, s);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (s) {
                    r = '' + s;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function Li(e) {
    e._valueTracker || (e._valueTracker = eg(e));
}
function of(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = '';
    return e && (r = rf(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function vo(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function El(e, t) {
    var n = t.checked;
    return re({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Yu(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = ln(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
        });
}
function sf(e, t) {
    (t = t.checked), t != null && Da(e, 'checked', t, !1);
}
function Cl(e, t) {
    sf(e, t);
    var n = ln(t.value),
        r = t.type;
    if (n != null)
        r === 'number' ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n) : e.value !== '' + n && (e.value = '' + n);
    else if (r === 'submit' || r === 'reset') {
        e.removeAttribute('value');
        return;
    }
    t.hasOwnProperty('value') ? kl(e, t.type, n) : t.hasOwnProperty('defaultValue') && kl(e, t.type, ln(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Qu(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type;
        if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
        (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
    }
    (n = e.name), n !== '' && (e.name = ''), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== '' && (e.name = n);
}
function kl(e, t, n) {
    (t !== 'number' || vo(e.ownerDocument) !== e) &&
        (n == null ? (e.defaultValue = '' + e._wrapperState.initialValue) : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Or = Array.isArray;
function qn(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            (i = t.hasOwnProperty('$' + e[n].value)), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
    } else {
        for (n = '' + ln(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                (e[i].selected = !0), r && (e[i].defaultSelected = !0);
                return;
            }
            t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
    }
}
function Tl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
    return re({}, t, { value: void 0, defaultValue: void 0, children: '' + e._wrapperState.initialValue });
}
function Xu(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(I(92));
            if (Or(n)) {
                if (1 < n.length) throw Error(I(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ''), (n = t);
    }
    e._wrapperState = { initialValue: ln(n) };
}
function lf(e, t) {
    var n = ln(t.value),
        r = ln(t.defaultValue);
    n != null && ((n = '' + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = '' + r);
}
function qu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function af(e) {
    switch (e) {
        case 'svg':
            return 'http://www.w3.org/2000/svg';
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
        default:
            return 'http://www.w3.org/1999/xhtml';
    }
}
function jl(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
        ? af(t)
        : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
}
var Oi,
    uf = (function (e) {
        return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, i) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, i);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
        else {
            for (
                Oi = Oi || document.createElement('div'), Oi.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>', t = Oi.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function qr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var $r = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    tg = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys($r).forEach(function (e) {
    tg.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($r[t] = $r[e]);
    });
});
function cf(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
        ? ''
        : n || typeof t != 'number' || t === 0 || ($r.hasOwnProperty(e) && $r[e])
        ? ('' + t).trim()
        : t + 'px';
}
function df(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf('--') === 0,
                i = cf(n, t[n], r);
            n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
        }
}
var ng = re(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function Pl(e, t) {
    if (t) {
        if (ng[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(I(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(I(60));
            if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(I(61));
        }
        if (t.style != null && typeof t.style != 'object') throw Error(I(62));
    }
}
function _l(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
    switch (e) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
            return !1;
        default:
            return !0;
    }
}
var bl = null;
function Ba(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var Il = null,
    Jn = null,
    Zn = null;
function Ju(e) {
    if ((e = Ci(e))) {
        if (typeof Il != 'function') throw Error(I(280));
        var t = e.stateNode;
        t && ((t = os(t)), Il(e.stateNode, e.type, t));
    }
}
function ff(e) {
    Jn ? (Zn ? Zn.push(e) : (Zn = [e])) : (Jn = e);
}
function pf() {
    if (Jn) {
        var e = Jn,
            t = Zn;
        if (((Zn = Jn = null), Ju(e), t)) for (e = 0; e < t.length; e++) Ju(t[e]);
    }
}
function hf(e, t) {
    return e(t);
}
function mf() {}
var Os = !1;
function gf(e, t, n) {
    if (Os) return e(t, n);
    Os = !0;
    try {
        return hf(e, t, n);
    } finally {
        (Os = !1), (Jn !== null || Zn !== null) && (mf(), pf());
    }
}
function Jr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = os(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
            (r = !r.disabled) || ((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))), (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function') throw Error(I(231, t, typeof n));
    return n;
}
var Nl = !1;
if (Nt)
    try {
        var Tr = {};
        Object.defineProperty(Tr, 'passive', {
            get: function () {
                Nl = !0;
            },
        }),
            window.addEventListener('test', Tr, Tr),
            window.removeEventListener('test', Tr, Tr);
    } catch {
        Nl = !1;
    }
function rg(e, t, n, r, i, o, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u);
    } catch (d) {
        this.onError(d);
    }
}
var Fr = !1,
    yo = null,
    xo = !1,
    Ll = null,
    ig = {
        onError: function (e) {
            (Fr = !0), (yo = e);
        },
    };
function og(e, t, n, r, i, o, s, a, l) {
    (Fr = !1), (yo = null), rg.apply(ig, arguments);
}
function sg(e, t, n, r, i, o, s, a, l) {
    if ((og.apply(this, arguments), Fr)) {
        if (Fr) {
            var u = yo;
            (Fr = !1), (yo = null);
        } else throw Error(I(198));
        xo || ((xo = !0), (Ll = u));
    }
}
function Mn(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function vf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
}
function Zu(e) {
    if (Mn(e) !== e) throw Error(I(188));
}
function lg(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = Mn(e)), t === null)) throw Error(I(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
            if (((r = i.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (i.child === o.child) {
            for (o = i.child; o; ) {
                if (o === n) return Zu(i), e;
                if (o === r) return Zu(i), t;
                o = o.sibling;
            }
            throw Error(I(188));
        }
        if (n.return !== r.return) (n = i), (r = o);
        else {
            for (var s = !1, a = i.child; a; ) {
                if (a === n) {
                    (s = !0), (n = i), (r = o);
                    break;
                }
                if (a === r) {
                    (s = !0), (r = i), (n = o);
                    break;
                }
                a = a.sibling;
            }
            if (!s) {
                for (a = o.child; a; ) {
                    if (a === n) {
                        (s = !0), (n = o), (r = i);
                        break;
                    }
                    if (a === r) {
                        (s = !0), (r = o), (n = i);
                        break;
                    }
                    a = a.sibling;
                }
                if (!s) throw Error(I(189));
            }
        }
        if (n.alternate !== r) throw Error(I(190));
    }
    if (n.tag !== 3) throw Error(I(188));
    return n.stateNode.current === n ? e : t;
}
function yf(e) {
    return (e = lg(e)), e !== null ? xf(e) : null;
}
function xf(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = xf(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var wf = Be.unstable_scheduleCallback,
    ec = Be.unstable_cancelCallback,
    ag = Be.unstable_shouldYield,
    ug = Be.unstable_requestPaint,
    oe = Be.unstable_now,
    cg = Be.unstable_getCurrentPriorityLevel,
    Wa = Be.unstable_ImmediatePriority,
    Sf = Be.unstable_UserBlockingPriority,
    wo = Be.unstable_NormalPriority,
    dg = Be.unstable_LowPriority,
    Ef = Be.unstable_IdlePriority,
    ts = null,
    xt = null;
function fg(e) {
    if (xt && typeof xt.onCommitFiberRoot == 'function')
        try {
            xt.onCommitFiberRoot(ts, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
}
var at = Math.clz32 ? Math.clz32 : mg,
    pg = Math.log,
    hg = Math.LN2;
function mg(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((pg(e) / hg) | 0)) | 0;
}
var Mi = 64,
    zi = 4194304;
function Mr(e) {
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
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function So(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        o = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? (r = Mr(a)) : ((o &= s), o !== 0 && (r = Mr(o)));
    } else (s = n & ~i), s !== 0 ? (r = Mr(s)) : o !== 0 && (r = Mr(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))) return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - at(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
}
function gg(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
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
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function vg(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var s = 31 - at(o),
            a = 1 << s,
            l = i[s];
        l === -1 ? (!(a & n) || a & r) && (i[s] = gg(a, t)) : l <= t && (e.expiredLanes |= a), (o &= ~a);
    }
}
function Ol(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Cf() {
    var e = Mi;
    return (Mi <<= 1), !(Mi & 4194240) && (Mi = 64), e;
}
function Ms(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Si(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - at(t)),
        (e[t] = n);
}
function yg(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - at(n),
            o = 1 << i;
        (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
    }
}
function Ua(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - at(n),
            i = 1 << r;
        (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
}
var G = 0;
function kf(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Tf,
    Va,
    jf,
    Pf,
    _f,
    Ml = !1,
    Ri = [],
    Xt = null,
    qt = null,
    Jt = null,
    Zr = new Map(),
    ei = new Map(),
    Vt = [],
    xg =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' '
        );
function tc(e, t) {
    switch (e) {
        case 'focusin':
        case 'focusout':
            Xt = null;
            break;
        case 'dragenter':
        case 'dragleave':
            qt = null;
            break;
        case 'mouseover':
        case 'mouseout':
            Jt = null;
            break;
        case 'pointerover':
        case 'pointerout':
            Zr.delete(t.pointerId);
            break;
        case 'gotpointercapture':
        case 'lostpointercapture':
            ei.delete(t.pointerId);
    }
}
function jr(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }),
          t !== null && ((t = Ci(t)), t !== null && Va(t)),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function wg(e, t, n, r, i) {
    switch (t) {
        case 'focusin':
            return (Xt = jr(Xt, e, t, n, r, i)), !0;
        case 'dragenter':
            return (qt = jr(qt, e, t, n, r, i)), !0;
        case 'mouseover':
            return (Jt = jr(Jt, e, t, n, r, i)), !0;
        case 'pointerover':
            var o = i.pointerId;
            return Zr.set(o, jr(Zr.get(o) || null, e, t, n, r, i)), !0;
        case 'gotpointercapture':
            return (o = i.pointerId), ei.set(o, jr(ei.get(o) || null, e, t, n, r, i)), !0;
    }
    return !1;
}
function bf(e) {
    var t = xn(e.target);
    if (t !== null) {
        var n = Mn(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = vf(n)), t !== null)) {
                    (e.blockedOn = t),
                        _f(e.priority, function () {
                            jf(n);
                        });
                    return;
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function eo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = zl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (bl = r), n.target.dispatchEvent(r), (bl = null);
        } else return (t = Ci(n)), t !== null && Va(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function nc(e, t, n) {
    eo(e) && n.delete(t);
}
function Sg() {
    (Ml = !1),
        Xt !== null && eo(Xt) && (Xt = null),
        qt !== null && eo(qt) && (qt = null),
        Jt !== null && eo(Jt) && (Jt = null),
        Zr.forEach(nc),
        ei.forEach(nc);
}
function Pr(e, t) {
    e.blockedOn === t && ((e.blockedOn = null), Ml || ((Ml = !0), Be.unstable_scheduleCallback(Be.unstable_NormalPriority, Sg)));
}
function ti(e) {
    function t(i) {
        return Pr(i, e);
    }
    if (0 < Ri.length) {
        Pr(Ri[0], e);
        for (var n = 1; n < Ri.length; n++) {
            var r = Ri[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        Xt !== null && Pr(Xt, e), qt !== null && Pr(qt, e), Jt !== null && Pr(Jt, e), Zr.forEach(t), ei.forEach(t), n = 0;
        n < Vt.length;
        n++
    )
        (r = Vt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Vt.length && ((n = Vt[0]), n.blockedOn === null); ) bf(n), n.blockedOn === null && Vt.shift();
}
var er = Rt.ReactCurrentBatchConfig,
    Eo = !0;
function Eg(e, t, n, r) {
    var i = G,
        o = er.transition;
    er.transition = null;
    try {
        (G = 1), Ha(e, t, n, r);
    } finally {
        (G = i), (er.transition = o);
    }
}
function Cg(e, t, n, r) {
    var i = G,
        o = er.transition;
    er.transition = null;
    try {
        (G = 4), Ha(e, t, n, r);
    } finally {
        (G = i), (er.transition = o);
    }
}
function Ha(e, t, n, r) {
    if (Eo) {
        var i = zl(e, t, n, r);
        if (i === null) Vs(e, t, r, Co, n), tc(e, r);
        else if (wg(i, e, t, n, r)) r.stopPropagation();
        else if ((tc(e, r), t & 4 && -1 < xg.indexOf(e))) {
            for (; i !== null; ) {
                var o = Ci(i);
                if ((o !== null && Tf(o), (o = zl(e, t, n, r)), o === null && Vs(e, t, r, Co, n), o === i)) break;
                i = o;
            }
            i !== null && r.stopPropagation();
        } else Vs(e, t, r, null, n);
    }
}
var Co = null;
function zl(e, t, n, r) {
    if (((Co = null), (e = Ba(r)), (e = xn(e)), e !== null))
        if (((t = Mn(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = vf(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (Co = e), null;
}
function If(e) {
    switch (e) {
        case 'cancel':
        case 'click':
        case 'close':
        case 'contextmenu':
        case 'copy':
        case 'cut':
        case 'auxclick':
        case 'dblclick':
        case 'dragend':
        case 'dragstart':
        case 'drop':
        case 'focusin':
        case 'focusout':
        case 'input':
        case 'invalid':
        case 'keydown':
        case 'keypress':
        case 'keyup':
        case 'mousedown':
        case 'mouseup':
        case 'paste':
        case 'pause':
        case 'play':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
        case 'ratechange':
        case 'reset':
        case 'resize':
        case 'seeked':
        case 'submit':
        case 'touchcancel':
        case 'touchend':
        case 'touchstart':
        case 'volumechange':
        case 'change':
        case 'selectionchange':
        case 'textInput':
        case 'compositionstart':
        case 'compositionend':
        case 'compositionupdate':
        case 'beforeblur':
        case 'afterblur':
        case 'beforeinput':
        case 'blur':
        case 'fullscreenchange':
        case 'focus':
        case 'hashchange':
        case 'popstate':
        case 'select':
        case 'selectstart':
            return 1;
        case 'drag':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'mousemove':
        case 'mouseout':
        case 'mouseover':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'scroll':
        case 'toggle':
        case 'touchmove':
        case 'wheel':
        case 'mouseenter':
        case 'mouseleave':
        case 'pointerenter':
        case 'pointerleave':
            return 4;
        case 'message':
            switch (cg()) {
                case Wa:
                    return 1;
                case Sf:
                    return 4;
                case wo:
                case dg:
                    return 16;
                case Ef:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Gt = null,
    Ga = null,
    to = null;
function Nf() {
    if (to) return to;
    var e,
        t = Ga,
        n = t.length,
        r,
        i = 'value' in Gt ? Gt.value : Gt.textContent,
        o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
    return (to = i.slice(e, 1 < r ? 1 - r : void 0));
}
function no(e) {
    var t = e.keyCode;
    return (
        'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    );
}
function Di() {
    return !0;
}
function rc() {
    return !1;
}
function He(e) {
    function t(n, r, i, o, s) {
        (this._reactName = n),
            (this._targetInst = i),
            (this.type = r),
            (this.nativeEvent = o),
            (this.target = s),
            (this.currentTarget = null);
        for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
        return (
            (this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Di : rc),
            (this.isPropagationStopped = rc),
            this
        );
    }
    return (
        re(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
                    (this.isDefaultPrevented = Di));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
                    (this.isPropagationStopped = Di));
            },
            persist: function () {},
            isPersistent: Di,
        }),
        t
    );
}
var yr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Ka = He(yr),
    Ei = re({}, yr, { view: 0, detail: 0 }),
    kg = He(Ei),
    zs,
    Rs,
    _r,
    ns = re({}, Ei, {
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
        getModifierState: Ya,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
        },
        movementX: function (e) {
            return 'movementX' in e
                ? e.movementX
                : (e !== _r &&
                      (_r && e.type === 'mousemove' ? ((zs = e.screenX - _r.screenX), (Rs = e.screenY - _r.screenY)) : (Rs = zs = 0),
                      (_r = e)),
                  zs);
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : Rs;
        },
    }),
    ic = He(ns),
    Tg = re({}, ns, { dataTransfer: 0 }),
    jg = He(Tg),
    Pg = re({}, Ei, { relatedTarget: 0 }),
    Ds = He(Pg),
    _g = re({}, yr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    bg = He(_g),
    Ig = re({}, yr, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
        },
    }),
    Ng = He(Ig),
    Lg = re({}, yr, { data: 0 }),
    oc = He(Lg),
    Og = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
    },
    Mg = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
    },
    zg = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function Rg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = zg[e]) ? !!t[e] : !1;
}
function Ya() {
    return Rg;
}
var Dg = re({}, Ei, {
        key: function (e) {
            if (e.key) {
                var t = Og[e.key] || e.key;
                if (t !== 'Unidentified') return t;
            }
            return e.type === 'keypress'
                ? ((e = no(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
                : e.type === 'keydown' || e.type === 'keyup'
                ? Mg[e.keyCode] || 'Unidentified'
                : '';
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ya,
        charCode: function (e) {
            return e.type === 'keypress' ? no(e) : 0;
        },
        keyCode: function (e) {
            return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === 'keypress' ? no(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
        },
    }),
    Ag = He(Dg),
    $g = re({}, ns, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    sc = He($g),
    Fg = re({}, Ei, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ya,
    }),
    Bg = He(Fg),
    Wg = re({}, yr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ug = He(Wg),
    Vg = re({}, ns, {
        deltaX: function (e) {
            return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
            return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    Hg = He(Vg),
    Gg = [9, 13, 27, 32],
    Qa = Nt && 'CompositionEvent' in window,
    Br = null;
Nt && 'documentMode' in document && (Br = document.documentMode);
var Kg = Nt && 'TextEvent' in window && !Br,
    Lf = Nt && (!Qa || (Br && 8 < Br && 11 >= Br)),
    lc = String.fromCharCode(32),
    ac = !1;
function Of(e, t) {
    switch (e) {
        case 'keyup':
            return Gg.indexOf(t.keyCode) !== -1;
        case 'keydown':
            return t.keyCode !== 229;
        case 'keypress':
        case 'mousedown':
        case 'focusout':
            return !0;
        default:
            return !1;
    }
}
function Mf(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Fn = !1;
function Yg(e, t) {
    switch (e) {
        case 'compositionend':
            return Mf(t);
        case 'keypress':
            return t.which !== 32 ? null : ((ac = !0), lc);
        case 'textInput':
            return (e = t.data), e === lc && ac ? null : e;
        default:
            return null;
    }
}
function Qg(e, t) {
    if (Fn) return e === 'compositionend' || (!Qa && Of(e, t)) ? ((e = Nf()), (to = Ga = Gt = null), (Fn = !1), e) : null;
    switch (e) {
        case 'paste':
            return null;
        case 'keypress':
            if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case 'compositionend':
            return Lf && t.locale !== 'ko' ? null : t.data;
        default:
            return null;
    }
}
var Xg = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
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
    week: !0,
};
function uc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Xg[e.type] : t === 'textarea';
}
function zf(e, t, n, r) {
    ff(r), (t = ko(t, 'onChange')), 0 < t.length && ((n = new Ka('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
}
var Wr = null,
    ni = null;
function qg(e) {
    Gf(e, 0);
}
function rs(e) {
    var t = Un(e);
    if (of(t)) return e;
}
function Jg(e, t) {
    if (e === 'change') return t;
}
var Rf = !1;
if (Nt) {
    var As;
    if (Nt) {
        var $s = 'oninput' in document;
        if (!$s) {
            var cc = document.createElement('div');
            cc.setAttribute('oninput', 'return;'), ($s = typeof cc.oninput == 'function');
        }
        As = $s;
    } else As = !1;
    Rf = As && (!document.documentMode || 9 < document.documentMode);
}
function dc() {
    Wr && (Wr.detachEvent('onpropertychange', Df), (ni = Wr = null));
}
function Df(e) {
    if (e.propertyName === 'value' && rs(ni)) {
        var t = [];
        zf(t, ni, e, Ba(e)), gf(qg, t);
    }
}
function Zg(e, t, n) {
    e === 'focusin' ? (dc(), (Wr = t), (ni = n), Wr.attachEvent('onpropertychange', Df)) : e === 'focusout' && dc();
}
function e0(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return rs(ni);
}
function t0(e, t) {
    if (e === 'click') return rs(t);
}
function n0(e, t) {
    if (e === 'input' || e === 'change') return rs(t);
}
function r0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ft = typeof Object.is == 'function' ? Object.is : r0;
function ri(e, t) {
    if (ft(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!vl.call(t, i) || !ft(e[i], t[i])) return !1;
    }
    return !0;
}
function fc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function pc(e, t) {
    var n = fc(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = fc(n);
    }
}
function Af(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
            ? Af(e, t.parentNode)
            : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : !1
        : !1;
}
function $f() {
    for (var e = window, t = vo(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == 'string';
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = vo(e.document);
    }
    return t;
}
function Xa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === 'input' && (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
            t === 'textarea' ||
            e.contentEditable === 'true')
    );
}
function i0(e) {
    var t = $f(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Af(n.ownerDocument.documentElement, n)) {
        if (r !== null && Xa(n)) {
            if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
                (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
            else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
                e = e.getSelection();
                var i = n.textContent.length,
                    o = Math.min(r.start, i);
                (r = r.end === void 0 ? o : Math.min(r.end, i)), !e.extend && o > r && ((i = r), (r = o), (o = i)), (i = pc(n, o));
                var s = pc(n, r);
                i &&
                    s &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== i.node ||
                        e.anchorOffset !== i.offset ||
                        e.focusNode !== s.node ||
                        e.focusOffset !== s.offset) &&
                    ((t = t.createRange()),
                    t.setStart(i.node, i.offset),
                    e.removeAllRanges(),
                    o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
            (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
}
var o0 = Nt && 'documentMode' in document && 11 >= document.documentMode,
    Bn = null,
    Rl = null,
    Ur = null,
    Dl = !1;
function hc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Dl ||
        Bn == null ||
        Bn !== vo(r) ||
        ((r = Bn),
        'selectionStart' in r && Xa(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
              (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })),
        (Ur && ri(Ur, r)) ||
            ((Ur = r),
            (r = ko(Rl, 'onSelect')),
            0 < r.length && ((t = new Ka('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = Bn))));
}
function Ai(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
}
var Wn = {
        animationend: Ai('Animation', 'AnimationEnd'),
        animationiteration: Ai('Animation', 'AnimationIteration'),
        animationstart: Ai('Animation', 'AnimationStart'),
        transitionend: Ai('Transition', 'TransitionEnd'),
    },
    Fs = {},
    Ff = {};
Nt &&
    ((Ff = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete Wn.animationend.animation, delete Wn.animationiteration.animation, delete Wn.animationstart.animation),
    'TransitionEvent' in window || delete Wn.transitionend.transition);
function is(e) {
    if (Fs[e]) return Fs[e];
    if (!Wn[e]) return e;
    var t = Wn[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ff) return (Fs[e] = t[n]);
    return e;
}
var Bf = is('animationend'),
    Wf = is('animationiteration'),
    Uf = is('animationstart'),
    Vf = is('transitionend'),
    Hf = new Map(),
    mc =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' '
        );
function dn(e, t) {
    Hf.set(e, t), On(t, [e]);
}
for (var Bs = 0; Bs < mc.length; Bs++) {
    var Ws = mc[Bs],
        s0 = Ws.toLowerCase(),
        l0 = Ws[0].toUpperCase() + Ws.slice(1);
    dn(s0, 'on' + l0);
}
dn(Bf, 'onAnimationEnd');
dn(Wf, 'onAnimationIteration');
dn(Uf, 'onAnimationStart');
dn('dblclick', 'onDoubleClick');
dn('focusin', 'onFocus');
dn('focusout', 'onBlur');
dn(Vf, 'onTransitionEnd');
ir('onMouseEnter', ['mouseout', 'mouseover']);
ir('onMouseLeave', ['mouseout', 'mouseover']);
ir('onPointerEnter', ['pointerout', 'pointerover']);
ir('onPointerLeave', ['pointerout', 'pointerover']);
On('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
On('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '));
On('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
On('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
On('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
On('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var zr =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' '
        ),
    a0 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(zr));
function gc(e, t, n) {
    var r = e.type || 'unknown-event';
    (e.currentTarget = n), sg(r, t, void 0, e), (e.currentTarget = null);
}
function Gf(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s],
                        l = a.instance,
                        u = a.currentTarget;
                    if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
                    gc(i, a, u), (o = l);
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (((a = r[s]), (l = a.instance), (u = a.currentTarget), (a = a.listener), l !== o && i.isPropagationStopped()))
                        break e;
                    gc(i, a, u), (o = l);
                }
        }
    }
    if (xo) throw ((e = Ll), (xo = !1), (Ll = null), e);
}
function X(e, t) {
    var n = t[Wl];
    n === void 0 && (n = t[Wl] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Kf(t, e, 2, !1), n.add(r));
}
function Us(e, t, n) {
    var r = 0;
    t && (r |= 4), Kf(n, e, r, t);
}
var $i = '_reactListening' + Math.random().toString(36).slice(2);
function ii(e) {
    if (!e[$i]) {
        (e[$i] = !0),
            Zd.forEach(function (n) {
                n !== 'selectionchange' && (a0.has(n) || Us(n, !1, e), Us(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[$i] || ((t[$i] = !0), Us('selectionchange', !1, t));
    }
}
function Kf(e, t, n, r) {
    switch (If(t)) {
        case 1:
            var i = Eg;
            break;
        case 4:
            i = Cg;
            break;
        default:
            i = Ha;
    }
    (n = i.bind(null, t, n, e)),
        (i = void 0),
        !Nl || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
        r
            ? i !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
            : i !== void 0
            ? e.addEventListener(t, n, { passive: i })
            : e.addEventListener(t, n, !1);
}
function Vs(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if ((l === 3 || l === 4) && ((l = s.stateNode.containerInfo), l === i || (l.nodeType === 8 && l.parentNode === i)))
                            return;
                        s = s.return;
                    }
                for (; a !== null; ) {
                    if (((s = xn(a)), s === null)) return;
                    if (((l = s.tag), l === 5 || l === 6)) {
                        r = o = s;
                        continue e;
                    }
                    a = a.parentNode;
                }
            }
            r = r.return;
        }
    gf(function () {
        var u = o,
            d = Ba(n),
            f = [];
        e: {
            var h = Hf.get(e);
            if (h !== void 0) {
                var g = Ka,
                    y = e;
                switch (e) {
                    case 'keypress':
                        if (no(n) === 0) break e;
                    case 'keydown':
                    case 'keyup':
                        g = Ag;
                        break;
                    case 'focusin':
                        (y = 'focus'), (g = Ds);
                        break;
                    case 'focusout':
                        (y = 'blur'), (g = Ds);
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        g = Ds;
                        break;
                    case 'click':
                        if (n.button === 2) break e;
                    case 'auxclick':
                    case 'dblclick':
                    case 'mousedown':
                    case 'mousemove':
                    case 'mouseup':
                    case 'mouseout':
                    case 'mouseover':
                    case 'contextmenu':
                        g = ic;
                        break;
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        g = jg;
                        break;
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        g = Bg;
                        break;
                    case Bf:
                    case Wf:
                    case Uf:
                        g = bg;
                        break;
                    case Vf:
                        g = Ug;
                        break;
                    case 'scroll':
                        g = kg;
                        break;
                    case 'wheel':
                        g = Hg;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        g = Ng;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        g = sc;
                }
                var x = (t & 4) !== 0,
                    S = !x && e === 'scroll',
                    p = x ? (h !== null ? h + 'Capture' : null) : h;
                x = [];
                for (var m = u, v; m !== null; ) {
                    v = m;
                    var w = v.stateNode;
                    if ((v.tag === 5 && w !== null && ((v = w), p !== null && ((w = Jr(m, p)), w != null && x.push(oi(m, w, v)))), S))
                        break;
                    m = m.return;
                }
                0 < x.length && ((h = new g(h, y, null, n, d)), f.push({ event: h, listeners: x }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((h = e === 'mouseover' || e === 'pointerover'),
                    (g = e === 'mouseout' || e === 'pointerout'),
                    h && n !== bl && (y = n.relatedTarget || n.fromElement) && (xn(y) || y[Lt]))
                )
                    break e;
                if (
                    (g || h) &&
                    ((h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window),
                    g
                        ? ((y = n.relatedTarget || n.toElement),
                          (g = u),
                          (y = y ? xn(y) : null),
                          y !== null && ((S = Mn(y)), y !== S || (y.tag !== 5 && y.tag !== 6)) && (y = null))
                        : ((g = null), (y = u)),
                    g !== y)
                ) {
                    if (
                        ((x = ic),
                        (w = 'onMouseLeave'),
                        (p = 'onMouseEnter'),
                        (m = 'mouse'),
                        (e === 'pointerout' || e === 'pointerover') &&
                            ((x = sc), (w = 'onPointerLeave'), (p = 'onPointerEnter'), (m = 'pointer')),
                        (S = g == null ? h : Un(g)),
                        (v = y == null ? h : Un(y)),
                        (h = new x(w, m + 'leave', g, n, d)),
                        (h.target = S),
                        (h.relatedTarget = v),
                        (w = null),
                        xn(d) === u && ((x = new x(p, m + 'enter', y, n, d)), (x.target = v), (x.relatedTarget = S), (w = x)),
                        (S = w),
                        g && y)
                    )
                        t: {
                            for (x = g, p = y, m = 0, v = x; v; v = Rn(v)) m++;
                            for (v = 0, w = p; w; w = Rn(w)) v++;
                            for (; 0 < m - v; ) (x = Rn(x)), m--;
                            for (; 0 < v - m; ) (p = Rn(p)), v--;
                            for (; m--; ) {
                                if (x === p || (p !== null && x === p.alternate)) break t;
                                (x = Rn(x)), (p = Rn(p));
                            }
                            x = null;
                        }
                    else x = null;
                    g !== null && vc(f, h, g, x, !1), y !== null && S !== null && vc(f, S, y, x, !0);
                }
            }
            e: {
                if (
                    ((h = u ? Un(u) : window),
                    (g = h.nodeName && h.nodeName.toLowerCase()),
                    g === 'select' || (g === 'input' && h.type === 'file'))
                )
                    var E = Jg;
                else if (uc(h))
                    if (Rf) E = n0;
                    else {
                        E = e0;
                        var C = Zg;
                    }
                else (g = h.nodeName) && g.toLowerCase() === 'input' && (h.type === 'checkbox' || h.type === 'radio') && (E = t0);
                if (E && (E = E(e, u))) {
                    zf(f, E, n, d);
                    break e;
                }
                C && C(e, h, u),
                    e === 'focusout' && (C = h._wrapperState) && C.controlled && h.type === 'number' && kl(h, 'number', h.value);
            }
            switch (((C = u ? Un(u) : window), e)) {
                case 'focusin':
                    (uc(C) || C.contentEditable === 'true') && ((Bn = C), (Rl = u), (Ur = null));
                    break;
                case 'focusout':
                    Ur = Rl = Bn = null;
                    break;
                case 'mousedown':
                    Dl = !0;
                    break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    (Dl = !1), hc(f, n, d);
                    break;
                case 'selectionchange':
                    if (o0) break;
                case 'keydown':
                case 'keyup':
                    hc(f, n, d);
            }
            var k;
            if (Qa)
                e: {
                    switch (e) {
                        case 'compositionstart':
                            var _ = 'onCompositionStart';
                            break e;
                        case 'compositionend':
                            _ = 'onCompositionEnd';
                            break e;
                        case 'compositionupdate':
                            _ = 'onCompositionUpdate';
                            break e;
                    }
                    _ = void 0;
                }
            else Fn ? Of(e, n) && (_ = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (_ = 'onCompositionStart');
            _ &&
                (Lf &&
                    n.locale !== 'ko' &&
                    (Fn || _ !== 'onCompositionStart'
                        ? _ === 'onCompositionEnd' && Fn && (k = Nf())
                        : ((Gt = d), (Ga = 'value' in Gt ? Gt.value : Gt.textContent), (Fn = !0))),
                (C = ko(u, _)),
                0 < C.length &&
                    ((_ = new oc(_, e, null, n, d)),
                    f.push({ event: _, listeners: C }),
                    k ? (_.data = k) : ((k = Mf(n)), k !== null && (_.data = k)))),
                (k = Kg ? Yg(e, n) : Qg(e, n)) &&
                    ((u = ko(u, 'onBeforeInput')),
                    0 < u.length &&
                        ((d = new oc('onBeforeInput', 'beforeinput', null, n, d)), f.push({ event: d, listeners: u }), (d.data = k)));
        }
        Gf(f, t);
    });
}
function oi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function ko(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
        var i = e,
            o = i.stateNode;
        i.tag === 5 &&
            o !== null &&
            ((i = o), (o = Jr(e, n)), o != null && r.unshift(oi(e, o, i)), (o = Jr(e, t)), o != null && r.push(oi(e, o, i))),
            (e = e.return);
    }
    return r;
}
function Rn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function vc(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 &&
            u !== null &&
            ((a = u), i ? ((l = Jr(n, o)), l != null && s.unshift(oi(n, l, a))) : i || ((l = Jr(n, o)), l != null && s.push(oi(n, l, a)))),
            (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
}
var u0 = /\r\n?/g,
    c0 = /\u0000|\uFFFD/g;
function yc(e) {
    return (typeof e == 'string' ? e : '' + e)
        .replace(
            u0,
            `
`
        )
        .replace(c0, '');
}
function Fi(e, t, n) {
    if (((t = yc(t)), yc(e) !== t && n)) throw Error(I(425));
}
function To() {}
var Al = null,
    $l = null;
function Fl(e, t) {
    return (
        e === 'textarea' ||
        e === 'noscript' ||
        typeof t.children == 'string' ||
        typeof t.children == 'number' ||
        (typeof t.dangerouslySetInnerHTML == 'object' && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
    );
}
var Bl = typeof setTimeout == 'function' ? setTimeout : void 0,
    d0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    xc = typeof Promise == 'function' ? Promise : void 0,
    f0 =
        typeof queueMicrotask == 'function'
            ? queueMicrotask
            : typeof xc < 'u'
            ? function (e) {
                  return xc.resolve(null).then(e).catch(p0);
              }
            : Bl;
function p0(e) {
    setTimeout(function () {
        throw e;
    });
}
function Hs(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
            if (((n = i.data), n === '/$')) {
                if (r === 0) {
                    e.removeChild(i), ti(t);
                    return;
                }
                r--;
            } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
        n = i;
    } while (n);
    ti(t);
}
function Zt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
            if (t === '/$') return null;
        }
    }
    return e;
}
function wc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === '$' || n === '$!' || n === '$?') {
                if (t === 0) return e;
                t--;
            } else n === '/$' && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var xr = Math.random().toString(36).slice(2),
    yt = '__reactFiber$' + xr,
    si = '__reactProps$' + xr,
    Lt = '__reactContainer$' + xr,
    Wl = '__reactEvents$' + xr,
    h0 = '__reactListeners$' + xr,
    m0 = '__reactHandles$' + xr;
function xn(e) {
    var t = e[yt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Lt] || n[yt])) {
            if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
                for (e = wc(e); e !== null; ) {
                    if ((n = e[yt])) return n;
                    e = wc(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function Ci(e) {
    return (e = e[yt] || e[Lt]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Un(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(I(33));
}
function os(e) {
    return e[si] || null;
}
var Ul = [],
    Vn = -1;
function fn(e) {
    return { current: e };
}
function J(e) {
    0 > Vn || ((e.current = Ul[Vn]), (Ul[Vn] = null), Vn--);
}
function Q(e, t) {
    Vn++, (Ul[Vn] = e.current), (e.current = t);
}
var an = {},
    Ce = fn(an),
    Ne = fn(!1),
    jn = an;
function or(e, t) {
    var n = e.type.contextTypes;
    if (!n) return an;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        o;
    for (o in n) i[o] = t[o];
    return (
        r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = i)), i
    );
}
function Le(e) {
    return (e = e.childContextTypes), e != null;
}
function jo() {
    J(Ne), J(Ce);
}
function Sc(e, t, n) {
    if (Ce.current !== an) throw Error(I(168));
    Q(Ce, t), Q(Ne, n);
}
function Yf(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(I(108, Zm(e) || 'Unknown', i));
    return re({}, n, r);
}
function Po(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || an), (jn = Ce.current), Q(Ce, e), Q(Ne, Ne.current), !0
    );
}
function Ec(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(I(169));
    n ? ((e = Yf(e, t, jn)), (r.__reactInternalMemoizedMergedChildContext = e), J(Ne), J(Ce), Q(Ce, e)) : J(Ne), Q(Ne, n);
}
var Tt = null,
    ss = !1,
    Gs = !1;
function Qf(e) {
    Tt === null ? (Tt = [e]) : Tt.push(e);
}
function g0(e) {
    (ss = !0), Qf(e);
}
function pn() {
    if (!Gs && Tt !== null) {
        Gs = !0;
        var e = 0,
            t = G;
        try {
            var n = Tt;
            for (G = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (Tt = null), (ss = !1);
        } catch (i) {
            throw (Tt !== null && (Tt = Tt.slice(e + 1)), wf(Wa, pn), i);
        } finally {
            (G = t), (Gs = !1);
        }
    }
    return null;
}
var Hn = [],
    Gn = 0,
    _o = null,
    bo = 0,
    Xe = [],
    qe = 0,
    Pn = null,
    jt = 1,
    Pt = '';
function mn(e, t) {
    (Hn[Gn++] = bo), (Hn[Gn++] = _o), (_o = e), (bo = t);
}
function Xf(e, t, n) {
    (Xe[qe++] = jt), (Xe[qe++] = Pt), (Xe[qe++] = Pn), (Pn = e);
    var r = jt;
    e = Pt;
    var i = 32 - at(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var o = 32 - at(t) + i;
    if (30 < o) {
        var s = i - (i % 5);
        (o = (r & ((1 << s) - 1)).toString(32)), (r >>= s), (i -= s), (jt = (1 << (32 - at(t) + i)) | (n << i) | r), (Pt = o + e);
    } else (jt = (1 << o) | (n << i) | r), (Pt = e);
}
function qa(e) {
    e.return !== null && (mn(e, 1), Xf(e, 1, 0));
}
function Ja(e) {
    for (; e === _o; ) (_o = Hn[--Gn]), (Hn[Gn] = null), (bo = Hn[--Gn]), (Hn[Gn] = null);
    for (; e === Pn; ) (Pn = Xe[--qe]), (Xe[qe] = null), (Pt = Xe[--qe]), (Xe[qe] = null), (jt = Xe[--qe]), (Xe[qe] = null);
}
var Fe = null,
    Ae = null,
    Z = !1,
    st = null;
function qf(e, t) {
    var n = Je(5, null, null, 0);
    (n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Cc(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
                t !== null ? ((e.stateNode = t), (Fe = e), (Ae = Zt(t.firstChild)), !0) : !1
            );
        case 6:
            return (
                (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (Fe = e), (Ae = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = Pn !== null ? { id: jt, overflow: Pt } : null),
                      (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                      (n = Je(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (Fe = e),
                      (Ae = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function Vl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Hl(e) {
    if (Z) {
        var t = Ae;
        if (t) {
            var n = t;
            if (!Cc(e, t)) {
                if (Vl(e)) throw Error(I(418));
                t = Zt(n.nextSibling);
                var r = Fe;
                t && Cc(e, t) ? qf(r, n) : ((e.flags = (e.flags & -4097) | 2), (Z = !1), (Fe = e));
            }
        } else {
            if (Vl(e)) throw Error(I(418));
            (e.flags = (e.flags & -4097) | 2), (Z = !1), (Fe = e);
        }
    }
}
function kc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Fe = e;
}
function Bi(e) {
    if (e !== Fe) return !1;
    if (!Z) return kc(e), (Z = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== 'head' && t !== 'body' && !Fl(e.type, e.memoizedProps))),
        t && (t = Ae))
    ) {
        if (Vl(e)) throw (Jf(), Error(I(418)));
        for (; t; ) qf(e, t), (t = Zt(t.nextSibling));
    }
    if ((kc(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(I(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === '/$') {
                        if (t === 0) {
                            Ae = Zt(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
                }
                e = e.nextSibling;
            }
            Ae = null;
        }
    } else Ae = Fe ? Zt(e.stateNode.nextSibling) : null;
    return !0;
}
function Jf() {
    for (var e = Ae; e; ) e = Zt(e.nextSibling);
}
function sr() {
    (Ae = Fe = null), (Z = !1);
}
function Za(e) {
    st === null ? (st = [e]) : st.push(e);
}
var v0 = Rt.ReactCurrentBatchConfig;
function it(e, t) {
    if (e && e.defaultProps) {
        (t = re({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
var Io = fn(null),
    No = null,
    Kn = null,
    eu = null;
function tu() {
    eu = Kn = No = null;
}
function nu(e) {
    var t = Io.current;
    J(Io), (e._currentValue = t);
}
function Gl(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function tr(e, t) {
    (No = e),
        (eu = Kn = null),
        (e = e.dependencies),
        e !== null && e.firstContext !== null && (e.lanes & t && (Ie = !0), (e.firstContext = null));
}
function et(e) {
    var t = e._currentValue;
    if (eu !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Kn === null)) {
            if (No === null) throw Error(I(308));
            (Kn = e), (No.dependencies = { lanes: 0, firstContext: e });
        } else Kn = Kn.next = e;
    return t;
}
var wn = null;
function ru(e) {
    wn === null ? (wn = [e]) : wn.push(e);
}
function Zf(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? ((n.next = n), ru(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), Ot(e, r);
}
function Ot(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var Ut = !1;
function iu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function ep(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function bt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function en(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), W & 2)) {
        var i = r.pending;
        return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), Ot(e, n);
    }
    return (i = r.interleaved), i === null ? ((t.next = t), ru(r)) : ((t.next = i.next), (i.next = t)), (r.interleaved = t), Ot(e, n);
}
function ro(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ua(e, n);
    }
}
function Tc(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
            o = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
            } while (n !== null);
            o === null ? (i = o = t) : (o = o.next = t);
        } else i = o = t;
        (n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }), (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Lo(e, t, n, r) {
    var i = e.updateQueue;
    Ut = !1;
    var o = i.firstBaseUpdate,
        s = i.lastBaseUpdate,
        a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a,
            u = l.next;
        (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
        var d = e.alternate;
        d !== null &&
            ((d = d.updateQueue),
            (a = d.lastBaseUpdate),
            a !== s && (a === null ? (d.firstBaseUpdate = u) : (a.next = u), (d.lastBaseUpdate = l)));
    }
    if (o !== null) {
        var f = i.baseState;
        (s = 0), (d = u = l = null), (a = o);
        do {
            var h = a.lane,
                g = a.eventTime;
            if ((r & h) === h) {
                d !== null && (d = d.next = { eventTime: g, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
                e: {
                    var y = e,
                        x = a;
                    switch (((h = t), (g = n), x.tag)) {
                        case 1:
                            if (((y = x.payload), typeof y == 'function')) {
                                f = y.call(g, f, h);
                                break e;
                            }
                            f = y;
                            break e;
                        case 3:
                            y.flags = (y.flags & -65537) | 128;
                        case 0:
                            if (((y = x.payload), (h = typeof y == 'function' ? y.call(g, f, h) : y), h == null)) break e;
                            f = re({}, f, h);
                            break e;
                        case 2:
                            Ut = !0;
                    }
                }
                a.callback !== null && a.lane !== 0 && ((e.flags |= 64), (h = i.effects), h === null ? (i.effects = [a]) : h.push(a));
            } else
                (g = { eventTime: g, lane: h, tag: a.tag, payload: a.payload, callback: a.callback, next: null }),
                    d === null ? ((u = d = g), (l = f)) : (d = d.next = g),
                    (s |= h);
            if (((a = a.next), a === null)) {
                if (((a = i.shared.pending), a === null)) break;
                (h = a), (a = h.next), (h.next = null), (i.lastBaseUpdate = h), (i.shared.pending = null);
            }
        } while (1);
        if (
            (d === null && (l = f),
            (i.baseState = l),
            (i.firstBaseUpdate = u),
            (i.lastBaseUpdate = d),
            (t = i.shared.interleaved),
            t !== null)
        ) {
            i = t;
            do (s |= i.lane), (i = i.next);
            while (i !== t);
        } else o === null && (i.shared.lanes = 0);
        (bn |= s), (e.lanes = s), (e.memoizedState = f);
    }
}
function jc(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (((r.callback = null), (r = n), typeof i != 'function')) throw Error(I(191, i));
                i.call(r);
            }
        }
}
var tp = new Jd.Component().refs;
function Kl(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : re({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ls = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Mn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = je(),
            i = nn(e),
            o = bt(r, i);
        (o.payload = t), n != null && (o.callback = n), (t = en(e, o, i)), t !== null && (ut(t, e, i, r), ro(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = je(),
            i = nn(e),
            o = bt(r, i);
        (o.tag = 1), (o.payload = t), n != null && (o.callback = n), (t = en(e, o, i)), t !== null && (ut(t, e, i, r), ro(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = je(),
            r = nn(e),
            i = bt(n, r);
        (i.tag = 2), t != null && (i.callback = t), (t = en(e, i, r)), t !== null && (ut(t, e, r, n), ro(t, e, r));
    },
};
function Pc(e, t, n, r, i, o, s) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == 'function'
            ? e.shouldComponentUpdate(r, o, s)
            : t.prototype && t.prototype.isPureReactComponent
            ? !ri(n, r) || !ri(i, o)
            : !0
    );
}
function np(e, t, n) {
    var r = !1,
        i = an,
        o = t.contextType;
    return (
        typeof o == 'object' && o !== null
            ? (o = et(o))
            : ((i = Le(t) ? jn : Ce.current), (r = t.contextTypes), (o = (r = r != null) ? or(e, i) : an)),
        (t = new t(n, o)),
        (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = ls),
        (e.stateNode = t),
        (t._reactInternals = e),
        r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = i), (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
    );
}
function _c(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && ls.enqueueReplaceState(t, t.state, null);
}
function Yl(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = tp), iu(e);
    var o = t.contextType;
    typeof o == 'object' && o !== null ? (i.context = et(o)) : ((o = Le(t) ? jn : Ce.current), (i.context = or(e, o))),
        (i.state = e.memoizedState),
        (o = t.getDerivedStateFromProps),
        typeof o == 'function' && (Kl(e, t, o, n), (i.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == 'function' ||
            typeof i.getSnapshotBeforeUpdate == 'function' ||
            (typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
            ((t = i.state),
            typeof i.componentWillMount == 'function' && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
            t !== i.state && ls.enqueueReplaceState(i, i.state, null),
            Lo(e, n, i, r),
            (i.state = e.memoizedState)),
        typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function br(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(I(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(I(147, e));
            var i = r,
                o = '' + e;
            return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === o
                ? t.ref
                : ((t = function (s) {
                      var a = i.refs;
                      a === tp && (a = i.refs = {}), s === null ? delete a[o] : (a[o] = s);
                  }),
                  (t._stringRef = o),
                  t);
        }
        if (typeof e != 'string') throw Error(I(284));
        if (!n._owner) throw Error(I(290, e));
    }
    return e;
}
function Wi(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(I(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
    );
}
function bc(e) {
    var t = e._init;
    return t(e._payload);
}
function rp(e) {
    function t(p, m) {
        if (e) {
            var v = p.deletions;
            v === null ? ((p.deletions = [m]), (p.flags |= 16)) : v.push(m);
        }
    }
    function n(p, m) {
        if (!e) return null;
        for (; m !== null; ) t(p, m), (m = m.sibling);
        return null;
    }
    function r(p, m) {
        for (p = new Map(); m !== null; ) m.key !== null ? p.set(m.key, m) : p.set(m.index, m), (m = m.sibling);
        return p;
    }
    function i(p, m) {
        return (p = rn(p, m)), (p.index = 0), (p.sibling = null), p;
    }
    function o(p, m, v) {
        return (
            (p.index = v),
            e
                ? ((v = p.alternate), v !== null ? ((v = v.index), v < m ? ((p.flags |= 2), m) : v) : ((p.flags |= 2), m))
                : ((p.flags |= 1048576), m)
        );
    }
    function s(p) {
        return e && p.alternate === null && (p.flags |= 2), p;
    }
    function a(p, m, v, w) {
        return m === null || m.tag !== 6 ? ((m = Zs(v, p.mode, w)), (m.return = p), m) : ((m = i(m, v)), (m.return = p), m);
    }
    function l(p, m, v, w) {
        var E = v.type;
        return E === $n
            ? d(p, m, v.props.children, w, v.key)
            : m !== null && (m.elementType === E || (typeof E == 'object' && E !== null && E.$$typeof === Wt && bc(E) === m.type))
            ? ((w = i(m, v.props)), (w.ref = br(p, m, v)), (w.return = p), w)
            : ((w = uo(v.type, v.key, v.props, null, p.mode, w)), (w.ref = br(p, m, v)), (w.return = p), w);
    }
    function u(p, m, v, w) {
        return m === null || m.tag !== 4 || m.stateNode.containerInfo !== v.containerInfo || m.stateNode.implementation !== v.implementation
            ? ((m = el(v, p.mode, w)), (m.return = p), m)
            : ((m = i(m, v.children || [])), (m.return = p), m);
    }
    function d(p, m, v, w, E) {
        return m === null || m.tag !== 7 ? ((m = kn(v, p.mode, w, E)), (m.return = p), m) : ((m = i(m, v)), (m.return = p), m);
    }
    function f(p, m, v) {
        if ((typeof m == 'string' && m !== '') || typeof m == 'number') return (m = Zs('' + m, p.mode, v)), (m.return = p), m;
        if (typeof m == 'object' && m !== null) {
            switch (m.$$typeof) {
                case Ni:
                    return (v = uo(m.type, m.key, m.props, null, p.mode, v)), (v.ref = br(p, null, m)), (v.return = p), v;
                case An:
                    return (m = el(m, p.mode, v)), (m.return = p), m;
                case Wt:
                    var w = m._init;
                    return f(p, w(m._payload), v);
            }
            if (Or(m) || kr(m)) return (m = kn(m, p.mode, v, null)), (m.return = p), m;
            Wi(p, m);
        }
        return null;
    }
    function h(p, m, v, w) {
        var E = m !== null ? m.key : null;
        if ((typeof v == 'string' && v !== '') || typeof v == 'number') return E !== null ? null : a(p, m, '' + v, w);
        if (typeof v == 'object' && v !== null) {
            switch (v.$$typeof) {
                case Ni:
                    return v.key === E ? l(p, m, v, w) : null;
                case An:
                    return v.key === E ? u(p, m, v, w) : null;
                case Wt:
                    return (E = v._init), h(p, m, E(v._payload), w);
            }
            if (Or(v) || kr(v)) return E !== null ? null : d(p, m, v, w, null);
            Wi(p, v);
        }
        return null;
    }
    function g(p, m, v, w, E) {
        if ((typeof w == 'string' && w !== '') || typeof w == 'number') return (p = p.get(v) || null), a(m, p, '' + w, E);
        if (typeof w == 'object' && w !== null) {
            switch (w.$$typeof) {
                case Ni:
                    return (p = p.get(w.key === null ? v : w.key) || null), l(m, p, w, E);
                case An:
                    return (p = p.get(w.key === null ? v : w.key) || null), u(m, p, w, E);
                case Wt:
                    var C = w._init;
                    return g(p, m, v, C(w._payload), E);
            }
            if (Or(w) || kr(w)) return (p = p.get(v) || null), d(m, p, w, E, null);
            Wi(m, w);
        }
        return null;
    }
    function y(p, m, v, w) {
        for (var E = null, C = null, k = m, _ = (m = 0), b = null; k !== null && _ < v.length; _++) {
            k.index > _ ? ((b = k), (k = null)) : (b = k.sibling);
            var j = h(p, k, v[_], w);
            if (j === null) {
                k === null && (k = b);
                break;
            }
            e && k && j.alternate === null && t(p, k), (m = o(j, m, _)), C === null ? (E = j) : (C.sibling = j), (C = j), (k = b);
        }
        if (_ === v.length) return n(p, k), Z && mn(p, _), E;
        if (k === null) {
            for (; _ < v.length; _++)
                (k = f(p, v[_], w)), k !== null && ((m = o(k, m, _)), C === null ? (E = k) : (C.sibling = k), (C = k));
            return Z && mn(p, _), E;
        }
        for (k = r(p, k); _ < v.length; _++)
            (b = g(k, p, _, v[_], w)),
                b !== null &&
                    (e && b.alternate !== null && k.delete(b.key === null ? _ : b.key),
                    (m = o(b, m, _)),
                    C === null ? (E = b) : (C.sibling = b),
                    (C = b));
        return (
            e &&
                k.forEach(function (O) {
                    return t(p, O);
                }),
            Z && mn(p, _),
            E
        );
    }
    function x(p, m, v, w) {
        var E = kr(v);
        if (typeof E != 'function') throw Error(I(150));
        if (((v = E.call(v)), v == null)) throw Error(I(151));
        for (var C = (E = null), k = m, _ = (m = 0), b = null, j = v.next(); k !== null && !j.done; _++, j = v.next()) {
            k.index > _ ? ((b = k), (k = null)) : (b = k.sibling);
            var O = h(p, k, j.value, w);
            if (O === null) {
                k === null && (k = b);
                break;
            }
            e && k && O.alternate === null && t(p, k), (m = o(O, m, _)), C === null ? (E = O) : (C.sibling = O), (C = O), (k = b);
        }
        if (j.done) return n(p, k), Z && mn(p, _), E;
        if (k === null) {
            for (; !j.done; _++, j = v.next())
                (j = f(p, j.value, w)), j !== null && ((m = o(j, m, _)), C === null ? (E = j) : (C.sibling = j), (C = j));
            return Z && mn(p, _), E;
        }
        for (k = r(p, k); !j.done; _++, j = v.next())
            (j = g(k, p, _, j.value, w)),
                j !== null &&
                    (e && j.alternate !== null && k.delete(j.key === null ? _ : j.key),
                    (m = o(j, m, _)),
                    C === null ? (E = j) : (C.sibling = j),
                    (C = j));
        return (
            e &&
                k.forEach(function (R) {
                    return t(p, R);
                }),
            Z && mn(p, _),
            E
        );
    }
    function S(p, m, v, w) {
        if (
            (typeof v == 'object' && v !== null && v.type === $n && v.key === null && (v = v.props.children),
            typeof v == 'object' && v !== null)
        ) {
            switch (v.$$typeof) {
                case Ni:
                    e: {
                        for (var E = v.key, C = m; C !== null; ) {
                            if (C.key === E) {
                                if (((E = v.type), E === $n)) {
                                    if (C.tag === 7) {
                                        n(p, C.sibling), (m = i(C, v.props.children)), (m.return = p), (p = m);
                                        break e;
                                    }
                                } else if (
                                    C.elementType === E ||
                                    (typeof E == 'object' && E !== null && E.$$typeof === Wt && bc(E) === C.type)
                                ) {
                                    n(p, C.sibling), (m = i(C, v.props)), (m.ref = br(p, C, v)), (m.return = p), (p = m);
                                    break e;
                                }
                                n(p, C);
                                break;
                            } else t(p, C);
                            C = C.sibling;
                        }
                        v.type === $n
                            ? ((m = kn(v.props.children, p.mode, w, v.key)), (m.return = p), (p = m))
                            : ((w = uo(v.type, v.key, v.props, null, p.mode, w)), (w.ref = br(p, m, v)), (w.return = p), (p = w));
                    }
                    return s(p);
                case An:
                    e: {
                        for (C = v.key; m !== null; ) {
                            if (m.key === C)
                                if (
                                    m.tag === 4 &&
                                    m.stateNode.containerInfo === v.containerInfo &&
                                    m.stateNode.implementation === v.implementation
                                ) {
                                    n(p, m.sibling), (m = i(m, v.children || [])), (m.return = p), (p = m);
                                    break e;
                                } else {
                                    n(p, m);
                                    break;
                                }
                            else t(p, m);
                            m = m.sibling;
                        }
                        (m = el(v, p.mode, w)), (m.return = p), (p = m);
                    }
                    return s(p);
                case Wt:
                    return (C = v._init), S(p, m, C(v._payload), w);
            }
            if (Or(v)) return y(p, m, v, w);
            if (kr(v)) return x(p, m, v, w);
            Wi(p, v);
        }
        return (typeof v == 'string' && v !== '') || typeof v == 'number'
            ? ((v = '' + v),
              m !== null && m.tag === 6
                  ? (n(p, m.sibling), (m = i(m, v)), (m.return = p), (p = m))
                  : (n(p, m), (m = Zs(v, p.mode, w)), (m.return = p), (p = m)),
              s(p))
            : n(p, m);
    }
    return S;
}
var lr = rp(!0),
    ip = rp(!1),
    ki = {},
    wt = fn(ki),
    li = fn(ki),
    ai = fn(ki);
function Sn(e) {
    if (e === ki) throw Error(I(174));
    return e;
}
function ou(e, t) {
    switch ((Q(ai, t), Q(li, e), Q(wt, ki), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : jl(null, '');
            break;
        default:
            (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = jl(t, e));
    }
    J(wt), Q(wt, t);
}
function ar() {
    J(wt), J(li), J(ai);
}
function op(e) {
    Sn(ai.current);
    var t = Sn(wt.current),
        n = jl(t, e.type);
    t !== n && (Q(li, e), Q(wt, n));
}
function su(e) {
    li.current === e && (J(wt), J(li));
}
var te = fn(0);
function Oo(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var Ks = [];
function lu() {
    for (var e = 0; e < Ks.length; e++) Ks[e]._workInProgressVersionPrimary = null;
    Ks.length = 0;
}
var io = Rt.ReactCurrentDispatcher,
    Ys = Rt.ReactCurrentBatchConfig,
    _n = 0,
    ne = null,
    ue = null,
    fe = null,
    Mo = !1,
    Vr = !1,
    ui = 0,
    y0 = 0;
function xe() {
    throw Error(I(321));
}
function au(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ft(e[n], t[n])) return !1;
    return !0;
}
function uu(e, t, n, r, i, o) {
    if (
        ((_n = o),
        (ne = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (io.current = e === null || e.memoizedState === null ? E0 : C0),
        (e = n(r, i)),
        Vr)
    ) {
        o = 0;
        do {
            if (((Vr = !1), (ui = 0), 25 <= o)) throw Error(I(301));
            (o += 1), (fe = ue = null), (t.updateQueue = null), (io.current = k0), (e = n(r, i));
        } while (Vr);
    }
    if (((io.current = zo), (t = ue !== null && ue.next !== null), (_n = 0), (fe = ue = ne = null), (Mo = !1), t)) throw Error(I(300));
    return e;
}
function cu() {
    var e = ui !== 0;
    return (ui = 0), e;
}
function gt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return fe === null ? (ne.memoizedState = fe = e) : (fe = fe.next = e), fe;
}
function tt() {
    if (ue === null) {
        var e = ne.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = ue.next;
    var t = fe === null ? ne.memoizedState : fe.next;
    if (t !== null) (fe = t), (ue = e);
    else {
        if (e === null) throw Error(I(310));
        (ue = e),
            (e = { memoizedState: ue.memoizedState, baseState: ue.baseState, baseQueue: ue.baseQueue, queue: ue.queue, next: null }),
            fe === null ? (ne.memoizedState = fe = e) : (fe = fe.next = e);
    }
    return fe;
}
function ci(e, t) {
    return typeof t == 'function' ? t(e) : t;
}
function Qs(e) {
    var t = tt(),
        n = t.queue;
    if (n === null) throw Error(I(311));
    n.lastRenderedReducer = e;
    var r = ue,
        i = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            (i.next = o.next), (o.next = s);
        }
        (r.baseQueue = i = o), (n.pending = null);
    }
    if (i !== null) {
        (o = i.next), (r = r.baseState);
        var a = (s = null),
            l = null,
            u = o;
        do {
            var d = u.lane;
            if ((_n & d) === d)
                l !== null &&
                    (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
                    (r = u.hasEagerState ? u.eagerState : e(r, u.action));
            else {
                var f = { lane: d, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
                l === null ? ((a = l = f), (s = r)) : (l = l.next = f), (ne.lanes |= d), (bn |= d);
            }
            u = u.next;
        } while (u !== null && u !== o);
        l === null ? (s = r) : (l.next = a),
            ft(r, t.memoizedState) || (Ie = !0),
            (t.memoizedState = r),
            (t.baseState = s),
            (t.baseQueue = l),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        i = e;
        do (o = i.lane), (ne.lanes |= o), (bn |= o), (i = i.next);
        while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function Xs(e) {
    var t = tt(),
        n = t.queue;
    if (n === null) throw Error(I(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = (i = i.next);
        do (o = e(o, s.action)), (s = s.next);
        while (s !== i);
        ft(o, t.memoizedState) || (Ie = !0), (t.memoizedState = o), t.baseQueue === null && (t.baseState = o), (n.lastRenderedState = o);
    }
    return [o, r];
}
function sp() {}
function lp(e, t) {
    var n = ne,
        r = tt(),
        i = t(),
        o = !ft(r.memoizedState, i);
    if (
        (o && ((r.memoizedState = i), (Ie = !0)),
        (r = r.queue),
        du(cp.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || (fe !== null && fe.memoizedState.tag & 1))
    ) {
        if (((n.flags |= 2048), di(9, up.bind(null, n, r, i, t), void 0, null), he === null)) throw Error(I(349));
        _n & 30 || ap(n, t, i);
    }
    return i;
}
function ap(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = ne.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }), (ne.updateQueue = t), (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function up(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), dp(t) && fp(e);
}
function cp(e, t, n) {
    return n(function () {
        dp(t) && fp(e);
    });
}
function dp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !ft(e, n);
    } catch {
        return !0;
    }
}
function fp(e) {
    var t = Ot(e, 1);
    t !== null && ut(t, e, 1, -1);
}
function Ic(e) {
    var t = gt();
    return (
        typeof e == 'function' && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ci, lastRenderedState: e }),
        (t.queue = e),
        (e = e.dispatch = S0.bind(null, ne, e)),
        [t.memoizedState, e]
    );
}
function di(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = ne.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }), (ne.updateQueue = t), (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
        e
    );
}
function pp() {
    return tt().memoizedState;
}
function oo(e, t, n, r) {
    var i = gt();
    (ne.flags |= e), (i.memoizedState = di(1 | t, n, void 0, r === void 0 ? null : r));
}
function as(e, t, n, r) {
    var i = tt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ue !== null) {
        var s = ue.memoizedState;
        if (((o = s.destroy), r !== null && au(r, s.deps))) {
            i.memoizedState = di(t, n, o, r);
            return;
        }
    }
    (ne.flags |= e), (i.memoizedState = di(1 | t, n, o, r));
}
function Nc(e, t) {
    return oo(8390656, 8, e, t);
}
function du(e, t) {
    return as(2048, 8, e, t);
}
function hp(e, t) {
    return as(4, 2, e, t);
}
function mp(e, t) {
    return as(4, 4, e, t);
}
function gp(e, t) {
    if (typeof t == 'function')
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function vp(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), as(4, 4, gp.bind(null, t, e), n);
}
function fu() {}
function yp(e, t) {
    var n = tt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && au(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function xp(e, t) {
    var n = tt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && au(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function wp(e, t, n) {
    return _n & 21
        ? (ft(n, t) || ((n = Cf()), (ne.lanes |= n), (bn |= n), (e.baseState = !0)), t)
        : (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = n));
}
function x0(e, t) {
    var n = G;
    (G = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Ys.transition;
    Ys.transition = {};
    try {
        e(!1), t();
    } finally {
        (G = n), (Ys.transition = r);
    }
}
function Sp() {
    return tt().memoizedState;
}
function w0(e, t, n) {
    var r = nn(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Ep(e))) Cp(t, n);
    else if (((n = Zf(e, t, n, r)), n !== null)) {
        var i = je();
        ut(n, e, r, i), kp(n, t, r);
    }
}
function S0(e, t, n) {
    var r = nn(e),
        i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ep(e)) Cp(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
            try {
                var s = t.lastRenderedState,
                    a = o(s, n);
                if (((i.hasEagerState = !0), (i.eagerState = a), ft(a, s))) {
                    var l = t.interleaved;
                    l === null ? ((i.next = i), ru(t)) : ((i.next = l.next), (l.next = i)), (t.interleaved = i);
                    return;
                }
            } catch {
            } finally {
            }
        (n = Zf(e, t, i, r)), n !== null && ((i = je()), ut(n, e, r, i), kp(n, t, r));
    }
}
function Ep(e) {
    var t = e.alternate;
    return e === ne || (t !== null && t === ne);
}
function Cp(e, t) {
    Vr = Mo = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function kp(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ua(e, n);
    }
}
var zo = {
        readContext: et,
        useCallback: xe,
        useContext: xe,
        useEffect: xe,
        useImperativeHandle: xe,
        useInsertionEffect: xe,
        useLayoutEffect: xe,
        useMemo: xe,
        useReducer: xe,
        useRef: xe,
        useState: xe,
        useDebugValue: xe,
        useDeferredValue: xe,
        useTransition: xe,
        useMutableSource: xe,
        useSyncExternalStore: xe,
        useId: xe,
        unstable_isNewReconciler: !1,
    },
    E0 = {
        readContext: et,
        useCallback: function (e, t) {
            return (gt().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: et,
        useEffect: Nc,
        useImperativeHandle: function (e, t, n) {
            return (n = n != null ? n.concat([e]) : null), oo(4194308, 4, gp.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return oo(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return oo(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = gt();
            return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
        },
        useReducer: function (e, t, n) {
            var r = gt();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }),
                (r.queue = e),
                (e = e.dispatch = w0.bind(null, ne, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = gt();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: Ic,
        useDebugValue: fu,
        useDeferredValue: function (e) {
            return (gt().memoizedState = e);
        },
        useTransition: function () {
            var e = Ic(!1),
                t = e[0];
            return (e = x0.bind(null, e[1])), (gt().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = ne,
                i = gt();
            if (Z) {
                if (n === void 0) throw Error(I(407));
                n = n();
            } else {
                if (((n = t()), he === null)) throw Error(I(349));
                _n & 30 || ap(r, t, n);
            }
            i.memoizedState = n;
            var o = { value: n, getSnapshot: t };
            return (i.queue = o), Nc(cp.bind(null, r, o, e), [e]), (r.flags |= 2048), di(9, up.bind(null, r, o, n, t), void 0, null), n;
        },
        useId: function () {
            var e = gt(),
                t = he.identifierPrefix;
            if (Z) {
                var n = Pt,
                    r = jt;
                (n = (r & ~(1 << (32 - at(r) - 1))).toString(32) + n),
                    (t = ':' + t + 'R' + n),
                    (n = ui++),
                    0 < n && (t += 'H' + n.toString(32)),
                    (t += ':');
            } else (n = y0++), (t = ':' + t + 'r' + n.toString(32) + ':');
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    C0 = {
        readContext: et,
        useCallback: yp,
        useContext: et,
        useEffect: du,
        useImperativeHandle: vp,
        useInsertionEffect: hp,
        useLayoutEffect: mp,
        useMemo: xp,
        useReducer: Qs,
        useRef: pp,
        useState: function () {
            return Qs(ci);
        },
        useDebugValue: fu,
        useDeferredValue: function (e) {
            var t = tt();
            return wp(t, ue.memoizedState, e);
        },
        useTransition: function () {
            var e = Qs(ci)[0],
                t = tt().memoizedState;
            return [e, t];
        },
        useMutableSource: sp,
        useSyncExternalStore: lp,
        useId: Sp,
        unstable_isNewReconciler: !1,
    },
    k0 = {
        readContext: et,
        useCallback: yp,
        useContext: et,
        useEffect: du,
        useImperativeHandle: vp,
        useInsertionEffect: hp,
        useLayoutEffect: mp,
        useMemo: xp,
        useReducer: Xs,
        useRef: pp,
        useState: function () {
            return Xs(ci);
        },
        useDebugValue: fu,
        useDeferredValue: function (e) {
            var t = tt();
            return ue === null ? (t.memoizedState = e) : wp(t, ue.memoizedState, e);
        },
        useTransition: function () {
            var e = Xs(ci)[0],
                t = tt().memoizedState;
            return [e, t];
        },
        useMutableSource: sp,
        useSyncExternalStore: lp,
        useId: Sp,
        unstable_isNewReconciler: !1,
    };
function ur(e, t) {
    try {
        var n = '',
            r = t;
        do (n += Jm(r)), (r = r.return);
        while (r);
        var i = n;
    } catch (o) {
        i =
            `
Error generating stack: ` +
            o.message +
            `
` +
            o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
}
function qs(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ql(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var T0 = typeof WeakMap == 'function' ? WeakMap : Map;
function Tp(e, t, n) {
    (n = bt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            Do || ((Do = !0), (oa = r)), Ql(e, t);
        }),
        n
    );
}
function jp(e, t, n) {
    (n = bt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
        var i = t.value;
        (n.payload = function () {
            return r(i);
        }),
            (n.callback = function () {
                Ql(e, t);
            });
    }
    var o = e.stateNode;
    return (
        o !== null &&
            typeof o.componentDidCatch == 'function' &&
            (n.callback = function () {
                Ql(e, t), typeof r != 'function' && (tn === null ? (tn = new Set([this])) : tn.add(this));
                var s = t.stack;
                this.componentDidCatch(t.value, { componentStack: s !== null ? s : '' });
            }),
        n
    );
}
function Lc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new T0();
        var i = new Set();
        r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = $0.bind(null, e, t, n)), t.then(e, e));
}
function Oc(e) {
    do {
        var t;
        if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function Mc(e, t, n, r, i) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = i), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = bt(-1, 1)), (t.tag = 2), en(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var j0 = Rt.ReactCurrentOwner,
    Ie = !1;
function Te(e, t, n, r) {
    t.child = e === null ? ip(t, null, n, r) : lr(t, e.child, n, r);
}
function zc(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return (
        tr(t, i),
        (r = uu(e, t, n, r, o, i)),
        (n = cu()),
        e !== null && !Ie
            ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Mt(e, t, i))
            : (Z && n && qa(t), (t.flags |= 1), Te(e, t, r, i), t.child)
    );
}
function Rc(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == 'function' && !wu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = o), Pp(e, t, o, r, i))
            : ((e = uo(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((o = e.child), !(e.lanes & i))) {
        var s = o.memoizedProps;
        if (((n = n.compare), (n = n !== null ? n : ri), n(s, r) && e.ref === t.ref)) return Mt(e, t, i);
    }
    return (t.flags |= 1), (e = rn(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Pp(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (ri(o, r) && e.ref === t.ref)
            if (((Ie = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0)) e.flags & 131072 && (Ie = !0);
            else return (t.lanes = e.lanes), Mt(e, t, i);
    }
    return Xl(e, t, n, r, i);
}
function _p(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
        if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), Q(Qn, Re), (Re |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = o !== null ? o.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    Q(Qn, Re),
                    (Re |= e),
                    null
                );
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = o !== null ? o.baseLanes : n),
                Q(Qn, Re),
                (Re |= r);
        }
    else o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n), Q(Qn, Re), (Re |= r);
    return Te(e, t, i, n), t.child;
}
function bp(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function Xl(e, t, n, r, i) {
    var o = Le(n) ? jn : Ce.current;
    return (
        (o = or(t, o)),
        tr(t, i),
        (n = uu(e, t, n, r, o, i)),
        (r = cu()),
        e !== null && !Ie
            ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Mt(e, t, i))
            : (Z && r && qa(t), (t.flags |= 1), Te(e, t, n, i), t.child)
    );
}
function Dc(e, t, n, r, i) {
    if (Le(n)) {
        var o = !0;
        Po(t);
    } else o = !1;
    if ((tr(t, i), t.stateNode === null)) so(e, t), np(t, n, r), Yl(t, n, r, i), (r = !0);
    else if (e === null) {
        var s = t.stateNode,
            a = t.memoizedProps;
        s.props = a;
        var l = s.context,
            u = n.contextType;
        typeof u == 'object' && u !== null ? (u = et(u)) : ((u = Le(n) ? jn : Ce.current), (u = or(t, u)));
        var d = n.getDerivedStateFromProps,
            f = typeof d == 'function' || typeof s.getSnapshotBeforeUpdate == 'function';
        f ||
            (typeof s.UNSAFE_componentWillReceiveProps != 'function' && typeof s.componentWillReceiveProps != 'function') ||
            ((a !== r || l !== u) && _c(t, s, r, u)),
            (Ut = !1);
        var h = t.memoizedState;
        (s.state = h),
            Lo(t, r, s, i),
            (l = t.memoizedState),
            a !== r || h !== l || Ne.current || Ut
                ? (typeof d == 'function' && (Kl(t, n, d, r), (l = t.memoizedState)),
                  (a = Ut || Pc(t, n, a, r, h, l, u))
                      ? (f ||
                            (typeof s.UNSAFE_componentWillMount != 'function' && typeof s.componentWillMount != 'function') ||
                            (typeof s.componentWillMount == 'function' && s.componentWillMount(),
                            typeof s.UNSAFE_componentWillMount == 'function' && s.UNSAFE_componentWillMount()),
                        typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
                      : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = l)),
                  (s.props = r),
                  (s.state = l),
                  (s.context = u),
                  (r = a))
                : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
    } else {
        (s = t.stateNode),
            ep(e, t),
            (a = t.memoizedProps),
            (u = t.type === t.elementType ? a : it(t.type, a)),
            (s.props = u),
            (f = t.pendingProps),
            (h = s.context),
            (l = n.contextType),
            typeof l == 'object' && l !== null ? (l = et(l)) : ((l = Le(n) ? jn : Ce.current), (l = or(t, l)));
        var g = n.getDerivedStateFromProps;
        (d = typeof g == 'function' || typeof s.getSnapshotBeforeUpdate == 'function') ||
            (typeof s.UNSAFE_componentWillReceiveProps != 'function' && typeof s.componentWillReceiveProps != 'function') ||
            ((a !== f || h !== l) && _c(t, s, r, l)),
            (Ut = !1),
            (h = t.memoizedState),
            (s.state = h),
            Lo(t, r, s, i);
        var y = t.memoizedState;
        a !== f || h !== y || Ne.current || Ut
            ? (typeof g == 'function' && (Kl(t, n, g, r), (y = t.memoizedState)),
              (u = Ut || Pc(t, n, u, r, h, y, l) || !1)
                  ? (d ||
                        (typeof s.UNSAFE_componentWillUpdate != 'function' && typeof s.componentWillUpdate != 'function') ||
                        (typeof s.componentWillUpdate == 'function' && s.componentWillUpdate(r, y, l),
                        typeof s.UNSAFE_componentWillUpdate == 'function' && s.UNSAFE_componentWillUpdate(r, y, l)),
                    typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
                  : (typeof s.componentDidUpdate != 'function' || (a === e.memoizedProps && h === e.memoizedState) || (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate != 'function' || (a === e.memoizedProps && h === e.memoizedState) || (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = y)),
              (s.props = r),
              (s.state = y),
              (s.context = l),
              (r = u))
            : (typeof s.componentDidUpdate != 'function' || (a === e.memoizedProps && h === e.memoizedState) || (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != 'function' || (a === e.memoizedProps && h === e.memoizedState) || (t.flags |= 1024),
              (r = !1));
    }
    return ql(e, t, n, r, o, i);
}
function ql(e, t, n, r, i, o) {
    bp(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && Ec(t, n, !1), Mt(e, t, o);
    (r = t.stateNode), (j0.current = t);
    var a = s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
        (t.flags |= 1),
        e !== null && s ? ((t.child = lr(t, e.child, null, o)), (t.child = lr(t, null, a, o))) : Te(e, t, a, o),
        (t.memoizedState = r.state),
        i && Ec(t, n, !0),
        t.child
    );
}
function Ip(e) {
    var t = e.stateNode;
    t.pendingContext ? Sc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Sc(e, t.context, !1), ou(e, t.containerInfo);
}
function Ac(e, t, n, r, i) {
    return sr(), Za(i), (t.flags |= 256), Te(e, t, n, r), t.child;
}
var Jl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Zl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Np(e, t, n) {
    var r = t.pendingProps,
        i = te.current,
        o = !1,
        s = (t.flags & 128) !== 0,
        a;
    if (
        ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
        a ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
        Q(te, i & 1),
        e === null)
    )
        return (
            Hl(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
                : ((s = r.children),
                  (e = r.fallback),
                  o
                      ? ((r = t.mode),
                        (o = t.child),
                        (s = { mode: 'hidden', children: s }),
                        !(r & 1) && o !== null ? ((o.childLanes = 0), (o.pendingProps = s)) : (o = ds(s, r, 0, null)),
                        (e = kn(e, r, n, null)),
                        (o.return = t),
                        (e.return = t),
                        (o.sibling = e),
                        (t.child = o),
                        (t.child.memoizedState = Zl(n)),
                        (t.memoizedState = Jl),
                        e)
                      : pu(t, s))
        );
    if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null))) return P0(e, t, s, r, a, i, n);
    if (o) {
        (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
        var l = { mode: 'hidden', children: r.children };
        return (
            !(s & 1) && t.child !== i
                ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null))
                : ((r = rn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
            a !== null ? (o = rn(a, o)) : ((o = kn(o, s, n, null)), (o.flags |= 2)),
            (o.return = t),
            (r.return = t),
            (r.sibling = o),
            (t.child = r),
            (r = o),
            (o = t.child),
            (s = e.child.memoizedState),
            (s = s === null ? Zl(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
            (o.memoizedState = s),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = Jl),
            r
        );
    }
    return (
        (o = e.child),
        (e = o.sibling),
        (r = rn(o, { mode: 'visible', children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function pu(e, t) {
    return (t = ds({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Ui(e, t, n, r) {
    return r !== null && Za(r), lr(t, e.child, null, n), (e = pu(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function P0(e, t, n, r, i, o, s) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = qs(Error(I(422)))), Ui(e, t, s, r))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((o = r.fallback),
              (i = t.mode),
              (r = ds({ mode: 'visible', children: r.children }, i, 0, null)),
              (o = kn(o, i, s, null)),
              (o.flags |= 2),
              (r.return = t),
              (o.return = t),
              (r.sibling = o),
              (t.child = r),
              t.mode & 1 && lr(t, e.child, null, s),
              (t.child.memoizedState = Zl(s)),
              (t.memoizedState = Jl),
              o);
    if (!(t.mode & 1)) return Ui(e, t, s, null);
    if (i.data === '$!') {
        if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
        return (r = a), (o = Error(I(419))), (r = qs(o, r, void 0)), Ui(e, t, s, r);
    }
    if (((a = (s & e.childLanes) !== 0), Ie || a)) {
        if (((r = he), r !== null)) {
            switch (s & -s) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
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
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0;
            }
            (i = i & (r.suspendedLanes | s) ? 0 : i), i !== 0 && i !== o.retryLane && ((o.retryLane = i), Ot(e, i), ut(r, e, i, -1));
        }
        return xu(), (r = qs(Error(I(421)))), Ui(e, t, s, r);
    }
    return i.data === '$?'
        ? ((t.flags |= 128), (t.child = e.child), (t = F0.bind(null, e)), (i._reactRetry = t), null)
        : ((e = o.treeContext),
          (Ae = Zt(i.nextSibling)),
          (Fe = t),
          (Z = !0),
          (st = null),
          e !== null && ((Xe[qe++] = jt), (Xe[qe++] = Pt), (Xe[qe++] = Pn), (jt = e.id), (Pt = e.overflow), (Pn = t)),
          (t = pu(t, r.children)),
          (t.flags |= 4096),
          t);
}
function $c(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Gl(e.return, t, n);
}
function Js(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i })
        : ((o.isBackwards = t), (o.rendering = null), (o.renderingStartTime = 0), (o.last = r), (o.tail = n), (o.tailMode = i));
}
function Lp(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
    if ((Te(e, t, r.children, n), (r = te.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && $c(e, n, t);
                else if (e.tag === 19) $c(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((Q(te, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (i) {
            case 'forwards':
                for (n = t.child, i = null; n !== null; ) (e = n.alternate), e !== null && Oo(e) === null && (i = n), (n = n.sibling);
                (n = i), n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)), Js(t, !1, i, n, o);
                break;
            case 'backwards':
                for (n = null, i = t.child, t.child = null; i !== null; ) {
                    if (((e = i.alternate), e !== null && Oo(e) === null)) {
                        t.child = i;
                        break;
                    }
                    (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                Js(t, !0, n, null, o);
                break;
            case 'together':
                Js(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function so(e, t) {
    !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Mt(e, t, n) {
    if ((e !== null && (t.dependencies = e.dependencies), (bn |= t.lanes), !(n & t.childLanes))) return null;
    if (e !== null && t.child !== e.child) throw Error(I(153));
    if (t.child !== null) {
        for (e = t.child, n = rn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
            (e = e.sibling), (n = n.sibling = rn(e, e.pendingProps)), (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function _0(e, t, n) {
    switch (t.tag) {
        case 3:
            Ip(t), sr();
            break;
        case 5:
            op(t);
            break;
        case 1:
            Le(t.type) && Po(t);
            break;
        case 4:
            ou(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            Q(Io, r._currentValue), (r._currentValue = i);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (Q(te, te.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                    ? Np(e, t, n)
                    : (Q(te, te.current & 1), (e = Mt(e, t, n)), e !== null ? e.sibling : null);
            Q(te, te.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return Lp(e, t, n);
                t.flags |= 128;
            }
            if (((i = t.memoizedState), i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)), Q(te, te.current), r))
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), _p(e, t, n);
    }
    return Mt(e, t, n);
}
var Op, ea, Mp, zp;
Op = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
ea = function () {};
Mp = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        (e = t.stateNode), Sn(wt.current);
        var o = null;
        switch (n) {
            case 'input':
                (i = El(e, i)), (r = El(e, r)), (o = []);
                break;
            case 'select':
                (i = re({}, i, { value: void 0 })), (r = re({}, r, { value: void 0 })), (o = []);
                break;
            case 'textarea':
                (i = Tl(e, i)), (r = Tl(e, r)), (o = []);
                break;
            default:
                typeof i.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = To);
        }
        Pl(n, r);
        var s;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === 'style') {
                    var a = i[u];
                    for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
                } else
                    u !== 'dangerouslySetInnerHTML' &&
                        u !== 'children' &&
                        u !== 'suppressContentEditableWarning' &&
                        u !== 'suppressHydrationWarning' &&
                        u !== 'autoFocus' &&
                        (Xr.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (((a = i != null ? i[u] : void 0), r.hasOwnProperty(u) && l !== a && (l != null || a != null)))
                if (u === 'style')
                    if (a) {
                        for (s in a) !a.hasOwnProperty(s) || (l && l.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ''));
                        for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), (n[s] = l[s]));
                    } else n || (o || (o = []), o.push(u, n)), (n = l);
                else
                    u === 'dangerouslySetInnerHTML'
                        ? ((l = l ? l.__html : void 0), (a = a ? a.__html : void 0), l != null && a !== l && (o = o || []).push(u, l))
                        : u === 'children'
                        ? (typeof l != 'string' && typeof l != 'number') || (o = o || []).push(u, '' + l)
                        : u !== 'suppressContentEditableWarning' &&
                          u !== 'suppressHydrationWarning' &&
                          (Xr.hasOwnProperty(u)
                              ? (l != null && u === 'onScroll' && X('scroll', e), o || a === l || (o = []))
                              : (o = o || []).push(u, l));
        }
        n && (o = o || []).push('style', n);
        var u = o;
        (t.updateQueue = u) && (t.flags |= 4);
    }
};
zp = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function Ir(e, t) {
    if (!Z)
        switch (e.tailMode) {
            case 'hidden':
                t = e.tail;
                for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case 'collapsed':
                n = e.tail;
                for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
                r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
}
function we(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags & 14680064), (r |= i.flags & 14680064), (i.return = e), (i = i.sibling);
    else
        for (i = e.child; i !== null; )
            (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function b0(e, t, n) {
    var r = t.pendingProps;
    switch ((Ja(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return we(t), null;
        case 1:
            return Le(t.type) && jo(), we(t), null;
        case 3:
            return (
                (r = t.stateNode),
                ar(),
                J(Ne),
                J(Ce),
                lu(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (Bi(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024), st !== null && (aa(st), (st = null)))),
                ea(e, t),
                we(t),
                null
            );
        case 5:
            su(t);
            var i = Sn(ai.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                Mp(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(I(166));
                    return we(t), null;
                }
                if (((e = Sn(wt.current)), Bi(t))) {
                    (r = t.stateNode), (n = t.type);
                    var o = t.memoizedProps;
                    switch (((r[yt] = t), (r[si] = o), (e = (t.mode & 1) !== 0), n)) {
                        case 'dialog':
                            X('cancel', r), X('close', r);
                            break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            X('load', r);
                            break;
                        case 'video':
                        case 'audio':
                            for (i = 0; i < zr.length; i++) X(zr[i], r);
                            break;
                        case 'source':
                            X('error', r);
                            break;
                        case 'img':
                        case 'image':
                        case 'link':
                            X('error', r), X('load', r);
                            break;
                        case 'details':
                            X('toggle', r);
                            break;
                        case 'input':
                            Yu(r, o), X('invalid', r);
                            break;
                        case 'select':
                            (r._wrapperState = { wasMultiple: !!o.multiple }), X('invalid', r);
                            break;
                        case 'textarea':
                            Xu(r, o), X('invalid', r);
                    }
                    Pl(n, o), (i = null);
                    for (var s in o)
                        if (o.hasOwnProperty(s)) {
                            var a = o[s];
                            s === 'children'
                                ? typeof a == 'string'
                                    ? r.textContent !== a &&
                                      (o.suppressHydrationWarning !== !0 && Fi(r.textContent, a, e), (i = ['children', a]))
                                    : typeof a == 'number' &&
                                      r.textContent !== '' + a &&
                                      (o.suppressHydrationWarning !== !0 && Fi(r.textContent, a, e), (i = ['children', '' + a]))
                                : Xr.hasOwnProperty(s) && a != null && s === 'onScroll' && X('scroll', r);
                        }
                    switch (n) {
                        case 'input':
                            Li(r), Qu(r, o, !0);
                            break;
                        case 'textarea':
                            Li(r), qu(r);
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            typeof o.onClick == 'function' && (r.onclick = To);
                    }
                    (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (s = i.nodeType === 9 ? i : i.ownerDocument),
                        e === 'http://www.w3.org/1999/xhtml' && (e = af(n)),
                        e === 'http://www.w3.org/1999/xhtml'
                            ? n === 'script'
                                ? ((e = s.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild)))
                                : typeof r.is == 'string'
                                ? (e = s.createElement(n, { is: r.is }))
                                : ((e = s.createElement(n)),
                                  n === 'select' && ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
                            : (e = s.createElementNS(e, n)),
                        (e[yt] = t),
                        (e[si] = r),
                        Op(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((s = _l(n, r)), n)) {
                            case 'dialog':
                                X('cancel', e), X('close', e), (i = r);
                                break;
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                X('load', e), (i = r);
                                break;
                            case 'video':
                            case 'audio':
                                for (i = 0; i < zr.length; i++) X(zr[i], e);
                                i = r;
                                break;
                            case 'source':
                                X('error', e), (i = r);
                                break;
                            case 'img':
                            case 'image':
                            case 'link':
                                X('error', e), X('load', e), (i = r);
                                break;
                            case 'details':
                                X('toggle', e), (i = r);
                                break;
                            case 'input':
                                Yu(e, r), (i = El(e, r)), X('invalid', e);
                                break;
                            case 'option':
                                i = r;
                                break;
                            case 'select':
                                (e._wrapperState = { wasMultiple: !!r.multiple }), (i = re({}, r, { value: void 0 })), X('invalid', e);
                                break;
                            case 'textarea':
                                Xu(e, r), (i = Tl(e, r)), X('invalid', e);
                                break;
                            default:
                                i = r;
                        }
                        Pl(n, i), (a = i);
                        for (o in a)
                            if (a.hasOwnProperty(o)) {
                                var l = a[o];
                                o === 'style'
                                    ? df(e, l)
                                    : o === 'dangerouslySetInnerHTML'
                                    ? ((l = l ? l.__html : void 0), l != null && uf(e, l))
                                    : o === 'children'
                                    ? typeof l == 'string'
                                        ? (n !== 'textarea' || l !== '') && qr(e, l)
                                        : typeof l == 'number' && qr(e, '' + l)
                                    : o !== 'suppressContentEditableWarning' &&
                                      o !== 'suppressHydrationWarning' &&
                                      o !== 'autoFocus' &&
                                      (Xr.hasOwnProperty(o)
                                          ? l != null && o === 'onScroll' && X('scroll', e)
                                          : l != null && Da(e, o, l, s));
                            }
                        switch (n) {
                            case 'input':
                                Li(e), Qu(e, r, !1);
                                break;
                            case 'textarea':
                                Li(e), qu(e);
                                break;
                            case 'option':
                                r.value != null && e.setAttribute('value', '' + ln(r.value));
                                break;
                            case 'select':
                                (e.multiple = !!r.multiple),
                                    (o = r.value),
                                    o != null
                                        ? qn(e, !!r.multiple, o, !1)
                                        : r.defaultValue != null && qn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == 'function' && (e.onclick = To);
                        }
                        switch (n) {
                            case 'button':
                            case 'input':
                            case 'select':
                            case 'textarea':
                                r = !!r.autoFocus;
                                break e;
                            case 'img':
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return we(t), null;
        case 6:
            if (e && t.stateNode != null) zp(e, t, e.memoizedProps, r);
            else {
                if (typeof r != 'string' && t.stateNode === null) throw Error(I(166));
                if (((n = Sn(ai.current)), Sn(wt.current), Bi(t))) {
                    if (((r = t.stateNode), (n = t.memoizedProps), (r[yt] = t), (o = r.nodeValue !== n) && ((e = Fe), e !== null)))
                        switch (e.tag) {
                            case 3:
                                Fi(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Fi(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    o && (t.flags |= 4);
                } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[yt] = t), (t.stateNode = r);
            }
            return we(t), null;
        case 13:
            if ((J(te), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
                if (Z && Ae !== null && t.mode & 1 && !(t.flags & 128)) Jf(), sr(), (t.flags |= 98560), (o = !1);
                else if (((o = Bi(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!o) throw Error(I(318));
                        if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o)) throw Error(I(317));
                        o[yt] = t;
                    } else sr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
                    we(t), (o = !1);
                } else st !== null && (aa(st), (st = null)), (o = !0);
                if (!o) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192), t.mode & 1 && (e === null || te.current & 1 ? ce === 0 && (ce = 3) : xu())),
                  t.updateQueue !== null && (t.flags |= 4),
                  we(t),
                  null);
        case 4:
            return ar(), ea(e, t), e === null && ii(t.stateNode.containerInfo), we(t), null;
        case 10:
            return nu(t.type._context), we(t), null;
        case 17:
            return Le(t.type) && jo(), we(t), null;
        case 19:
            if ((J(te), (o = t.memoizedState), o === null)) return we(t), null;
            if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
                if (r) Ir(o, !1);
                else {
                    if (ce !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((s = Oo(e)), s !== null)) {
                                for (
                                    t.flags |= 128,
                                        Ir(o, !1),
                                        r = s.updateQueue,
                                        r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (o = n),
                                        (e = r),
                                        (o.flags &= 14680066),
                                        (s = o.alternate),
                                        s === null
                                            ? ((o.childLanes = 0),
                                              (o.lanes = e),
                                              (o.child = null),
                                              (o.subtreeFlags = 0),
                                              (o.memoizedProps = null),
                                              (o.memoizedState = null),
                                              (o.updateQueue = null),
                                              (o.dependencies = null),
                                              (o.stateNode = null))
                                            : ((o.childLanes = s.childLanes),
                                              (o.lanes = s.lanes),
                                              (o.child = s.child),
                                              (o.subtreeFlags = 0),
                                              (o.deletions = null),
                                              (o.memoizedProps = s.memoizedProps),
                                              (o.memoizedState = s.memoizedState),
                                              (o.updateQueue = s.updateQueue),
                                              (o.type = s.type),
                                              (e = s.dependencies),
                                              (o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                                        (n = n.sibling);
                                return Q(te, (te.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    o.tail !== null && oe() > cr && ((t.flags |= 128), (r = !0), Ir(o, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = Oo(s)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            Ir(o, !0),
                            o.tail === null && o.tailMode === 'hidden' && !s.alternate && !Z)
                        )
                            return we(t), null;
                    } else
                        2 * oe() - o.renderingStartTime > cr &&
                            n !== 1073741824 &&
                            ((t.flags |= 128), (r = !0), Ir(o, !1), (t.lanes = 4194304));
                o.isBackwards
                    ? ((s.sibling = t.child), (t.child = s))
                    : ((n = o.last), n !== null ? (n.sibling = s) : (t.child = s), (o.last = s));
            }
            return o.tail !== null
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = oe()),
                  (t.sibling = null),
                  (n = te.current),
                  Q(te, r ? (n & 1) | 2 : n & 1),
                  t)
                : (we(t), null);
        case 22:
        case 23:
            return (
                yu(),
                (r = t.memoizedState !== null),
                e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
                r && t.mode & 1 ? Re & 1073741824 && (we(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : we(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(I(156, t.tag));
}
function I0(e, t) {
    switch ((Ja(t), t.tag)) {
        case 1:
            return Le(t.type) && jo(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 3:
            return ar(), J(Ne), J(Ce), lu(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null;
        case 5:
            return su(t), null;
        case 13:
            if ((J(te), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                if (t.alternate === null) throw Error(I(340));
                sr();
            }
            return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 19:
            return J(te), null;
        case 4:
            return ar(), null;
        case 10:
            return nu(t.type._context), null;
        case 22:
        case 23:
            return yu(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Vi = !1,
    Se = !1,
    N0 = typeof WeakSet == 'function' ? WeakSet : Set,
    M = null;
function Yn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == 'function')
            try {
                n(null);
            } catch (r) {
                ie(e, t, r);
            }
        else n.current = null;
}
function ta(e, t, n) {
    try {
        n();
    } catch (r) {
        ie(e, t, r);
    }
}
var Fc = !1;
function L0(e, t) {
    if (((Al = Eo), (e = $f()), Xa(e))) {
        if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset,
                        o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, o.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var s = 0,
                        a = -1,
                        l = -1,
                        u = 0,
                        d = 0,
                        f = e,
                        h = null;
                    t: for (;;) {
                        for (
                            var g;
                            f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                                f.nodeType === 3 && (s += f.nodeValue.length),
                                (g = f.firstChild) !== null;

                        )
                            (h = f), (f = g);
                        for (;;) {
                            if (f === e) break t;
                            if ((h === n && ++u === i && (a = s), h === o && ++d === r && (l = s), (g = f.nextSibling) !== null)) break;
                            (f = h), (h = f.parentNode);
                        }
                        f = g;
                    }
                    n = a === -1 || l === -1 ? null : { start: a, end: l };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for ($l = { focusedElem: e, selectionRange: n }, Eo = !1, M = t; M !== null; )
        if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (M = e);
        else
            for (; M !== null; ) {
                t = M;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (y !== null) {
                                    var x = y.memoizedProps,
                                        S = y.memoizedState,
                                        p = t.stateNode,
                                        m = p.getSnapshotBeforeUpdate(t.elementType === t.type ? x : it(t.type, x), S);
                                    p.__reactInternalSnapshotBeforeUpdate = m;
                                }
                                break;
                            case 3:
                                var v = t.stateNode.containerInfo;
                                v.nodeType === 1
                                    ? (v.textContent = '')
                                    : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(I(163));
                        }
                } catch (w) {
                    ie(t, t.return, w);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (M = e);
                    break;
                }
                M = t.return;
            }
    return (y = Fc), (Fc = !1), y;
}
function Hr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var i = (r = r.next);
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                (i.destroy = void 0), o !== void 0 && ta(t, n, o);
            }
            i = i.next;
        } while (i !== r);
    }
}
function us(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function na(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == 'function' ? t(e) : (t.current = e);
    }
}
function Rp(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Rp(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[yt], delete t[si], delete t[Wl], delete t[h0], delete t[m0])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function Dp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Bc(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || Dp(e.return)) return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function ra(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = To));
    else if (r !== 4 && ((e = e.child), e !== null)) for (ra(e, t, n), e = e.sibling; e !== null; ) ra(e, t, n), (e = e.sibling);
}
function ia(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null)) for (ia(e, t, n), e = e.sibling; e !== null; ) ia(e, t, n), (e = e.sibling);
}
var ge = null,
    ot = !1;
function Ft(e, t, n) {
    for (n = n.child; n !== null; ) Ap(e, t, n), (n = n.sibling);
}
function Ap(e, t, n) {
    if (xt && typeof xt.onCommitFiberUnmount == 'function')
        try {
            xt.onCommitFiberUnmount(ts, n);
        } catch {}
    switch (n.tag) {
        case 5:
            Se || Yn(n, t);
        case 6:
            var r = ge,
                i = ot;
            (ge = null),
                Ft(e, t, n),
                (ge = r),
                (ot = i),
                ge !== null &&
                    (ot
                        ? ((e = ge), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
                        : ge.removeChild(n.stateNode));
            break;
        case 18:
            ge !== null &&
                (ot
                    ? ((e = ge), (n = n.stateNode), e.nodeType === 8 ? Hs(e.parentNode, n) : e.nodeType === 1 && Hs(e, n), ti(e))
                    : Hs(ge, n.stateNode));
            break;
        case 4:
            (r = ge), (i = ot), (ge = n.stateNode.containerInfo), (ot = !0), Ft(e, t, n), (ge = r), (ot = i);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Se && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
                i = r = r.next;
                do {
                    var o = i,
                        s = o.destroy;
                    (o = o.tag), s !== void 0 && (o & 2 || o & 4) && ta(n, t, s), (i = i.next);
                } while (i !== r);
            }
            Ft(e, t, n);
            break;
        case 1:
            if (!Se && (Yn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
                try {
                    (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
                } catch (a) {
                    ie(n, t, a);
                }
            Ft(e, t, n);
            break;
        case 21:
            Ft(e, t, n);
            break;
        case 22:
            n.mode & 1 ? ((Se = (r = Se) || n.memoizedState !== null), Ft(e, t, n), (Se = r)) : Ft(e, t, n);
            break;
        default:
            Ft(e, t, n);
    }
}
function Wc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new N0()),
            t.forEach(function (r) {
                var i = B0.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(i, i));
            });
    }
}
function rt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e,
                    s = t,
                    a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                        case 5:
                            (ge = a.stateNode), (ot = !1);
                            break e;
                        case 3:
                            (ge = a.stateNode.containerInfo), (ot = !0);
                            break e;
                        case 4:
                            (ge = a.stateNode.containerInfo), (ot = !0);
                            break e;
                    }
                    a = a.return;
                }
                if (ge === null) throw Error(I(160));
                Ap(o, s, i), (ge = null), (ot = !1);
                var l = i.alternate;
                l !== null && (l.return = null), (i.return = null);
            } catch (u) {
                ie(i, t, u);
            }
        }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) $p(t, e), (t = t.sibling);
}
function $p(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((rt(t, e), mt(e), r & 4)) {
                try {
                    Hr(3, e, e.return), us(3, e);
                } catch (x) {
                    ie(e, e.return, x);
                }
                try {
                    Hr(5, e, e.return);
                } catch (x) {
                    ie(e, e.return, x);
                }
            }
            break;
        case 1:
            rt(t, e), mt(e), r & 512 && n !== null && Yn(n, n.return);
            break;
        case 5:
            if ((rt(t, e), mt(e), r & 512 && n !== null && Yn(n, n.return), e.flags & 32)) {
                var i = e.stateNode;
                try {
                    qr(i, '');
                } catch (x) {
                    ie(e, e.return, x);
                }
            }
            if (r & 4 && ((i = e.stateNode), i != null)) {
                var o = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : o,
                    a = e.type,
                    l = e.updateQueue;
                if (((e.updateQueue = null), l !== null))
                    try {
                        a === 'input' && o.type === 'radio' && o.name != null && sf(i, o), _l(a, s);
                        var u = _l(a, o);
                        for (s = 0; s < l.length; s += 2) {
                            var d = l[s],
                                f = l[s + 1];
                            d === 'style'
                                ? df(i, f)
                                : d === 'dangerouslySetInnerHTML'
                                ? uf(i, f)
                                : d === 'children'
                                ? qr(i, f)
                                : Da(i, d, f, u);
                        }
                        switch (a) {
                            case 'input':
                                Cl(i, o);
                                break;
                            case 'textarea':
                                lf(i, o);
                                break;
                            case 'select':
                                var h = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!o.multiple;
                                var g = o.value;
                                g != null
                                    ? qn(i, !!o.multiple, g, !1)
                                    : h !== !!o.multiple &&
                                      (o.defaultValue != null
                                          ? qn(i, !!o.multiple, o.defaultValue, !0)
                                          : qn(i, !!o.multiple, o.multiple ? [] : '', !1));
                        }
                        i[si] = o;
                    } catch (x) {
                        ie(e, e.return, x);
                    }
            }
            break;
        case 6:
            if ((rt(t, e), mt(e), r & 4)) {
                if (e.stateNode === null) throw Error(I(162));
                (i = e.stateNode), (o = e.memoizedProps);
                try {
                    i.nodeValue = o;
                } catch (x) {
                    ie(e, e.return, x);
                }
            }
            break;
        case 3:
            if ((rt(t, e), mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
                try {
                    ti(t.containerInfo);
                } catch (x) {
                    ie(e, e.return, x);
                }
            break;
        case 4:
            rt(t, e), mt(e);
            break;
        case 13:
            rt(t, e),
                mt(e),
                (i = e.child),
                i.flags & 8192 &&
                    ((o = i.memoizedState !== null),
                    (i.stateNode.isHidden = o),
                    !o || (i.alternate !== null && i.alternate.memoizedState !== null) || (gu = oe())),
                r & 4 && Wc(e);
            break;
        case 22:
            if (
                ((d = n !== null && n.memoizedState !== null),
                e.mode & 1 ? ((Se = (u = Se) || d), rt(t, e), (Se = u)) : rt(t, e),
                mt(e),
                r & 8192)
            ) {
                if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !d && e.mode & 1))
                    for (M = e, d = e.child; d !== null; ) {
                        for (f = M = d; M !== null; ) {
                            switch (((h = M), (g = h.child), h.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Hr(4, h, h.return);
                                    break;
                                case 1:
                                    Yn(h, h.return);
                                    var y = h.stateNode;
                                    if (typeof y.componentWillUnmount == 'function') {
                                        (r = h), (n = h.return);
                                        try {
                                            (t = r), (y.props = t.memoizedProps), (y.state = t.memoizedState), y.componentWillUnmount();
                                        } catch (x) {
                                            ie(r, n, x);
                                        }
                                    }
                                    break;
                                case 5:
                                    Yn(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        Vc(f);
                                        continue;
                                    }
                            }
                            g !== null ? ((g.return = h), (M = g)) : Vc(f);
                        }
                        d = d.sibling;
                    }
                e: for (d = null, f = e; ; ) {
                    if (f.tag === 5) {
                        if (d === null) {
                            d = f;
                            try {
                                (i = f.stateNode),
                                    u
                                        ? ((o = i.style),
                                          typeof o.setProperty == 'function'
                                              ? o.setProperty('display', 'none', 'important')
                                              : (o.display = 'none'))
                                        : ((a = f.stateNode),
                                          (l = f.memoizedProps.style),
                                          (s = l != null && l.hasOwnProperty('display') ? l.display : null),
                                          (a.style.display = cf('display', s)));
                            } catch (x) {
                                ie(e, e.return, x);
                            }
                        }
                    } else if (f.tag === 6) {
                        if (d === null)
                            try {
                                f.stateNode.nodeValue = u ? '' : f.memoizedProps;
                            } catch (x) {
                                ie(e, e.return, x);
                            }
                    } else if (((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) && f.child !== null) {
                        (f.child.return = f), (f = f.child);
                        continue;
                    }
                    if (f === e) break e;
                    for (; f.sibling === null; ) {
                        if (f.return === null || f.return === e) break e;
                        d === f && (d = null), (f = f.return);
                    }
                    d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
                }
            }
            break;
        case 19:
            rt(t, e), mt(e), r & 4 && Wc(e);
            break;
        case 21:
            break;
        default:
            rt(t, e), mt(e);
    }
}
function mt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Dp(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(I(160));
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (qr(i, ''), (r.flags &= -33));
                    var o = Bc(e);
                    ia(e, o, i);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        a = Bc(e);
                    ra(e, a, s);
                    break;
                default:
                    throw Error(I(161));
            }
        } catch (l) {
            ie(e, e.return, l);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function O0(e, t, n) {
    (M = e), Fp(e);
}
function Fp(e, t, n) {
    for (var r = (e.mode & 1) !== 0; M !== null; ) {
        var i = M,
            o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || Vi;
            if (!s) {
                var a = i.alternate,
                    l = (a !== null && a.memoizedState !== null) || Se;
                a = Vi;
                var u = Se;
                if (((Vi = s), (Se = l) && !u))
                    for (M = i; M !== null; )
                        (s = M),
                            (l = s.child),
                            s.tag === 22 && s.memoizedState !== null ? Hc(i) : l !== null ? ((l.return = s), (M = l)) : Hc(i);
                for (; o !== null; ) (M = o), Fp(o), (o = o.sibling);
                (M = i), (Vi = a), (Se = u);
            }
            Uc(e);
        } else i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (M = o)) : Uc(e);
    }
}
function Uc(e) {
    for (; M !== null; ) {
        var t = M;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Se || us(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Se)
                                if (n === null) r.componentDidMount();
                                else {
                                    var i = t.elementType === t.type ? n.memoizedProps : it(t.type, n.memoizedProps);
                                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var o = t.updateQueue;
                            o !== null && jc(t, o, r);
                            break;
                        case 3:
                            var s = t.updateQueue;
                            if (s !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                jc(t, s, n);
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var l = t.memoizedProps;
                                switch (t.type) {
                                    case 'button':
                                    case 'input':
                                    case 'select':
                                    case 'textarea':
                                        l.autoFocus && n.focus();
                                        break;
                                    case 'img':
                                        l.src && (n.src = l.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var u = t.alternate;
                                if (u !== null) {
                                    var d = u.memoizedState;
                                    if (d !== null) {
                                        var f = d.dehydrated;
                                        f !== null && ti(f);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(I(163));
                    }
                Se || (t.flags & 512 && na(t));
            } catch (h) {
                ie(t, t.return, h);
            }
        }
        if (t === e) {
            M = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (M = n);
            break;
        }
        M = t.return;
    }
}
function Vc(e) {
    for (; M !== null; ) {
        var t = M;
        if (t === e) {
            M = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (M = n);
            break;
        }
        M = t.return;
    }
}
function Hc(e) {
    for (; M !== null; ) {
        var t = M;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        us(4, t);
                    } catch (l) {
                        ie(t, n, l);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == 'function') {
                        var i = t.return;
                        try {
                            r.componentDidMount();
                        } catch (l) {
                            ie(t, i, l);
                        }
                    }
                    var o = t.return;
                    try {
                        na(t);
                    } catch (l) {
                        ie(t, o, l);
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        na(t);
                    } catch (l) {
                        ie(t, s, l);
                    }
            }
        } catch (l) {
            ie(t, t.return, l);
        }
        if (t === e) {
            M = null;
            break;
        }
        var a = t.sibling;
        if (a !== null) {
            (a.return = t.return), (M = a);
            break;
        }
        M = t.return;
    }
}
var M0 = Math.ceil,
    Ro = Rt.ReactCurrentDispatcher,
    hu = Rt.ReactCurrentOwner,
    Ze = Rt.ReactCurrentBatchConfig,
    W = 0,
    he = null,
    le = null,
    ve = 0,
    Re = 0,
    Qn = fn(0),
    ce = 0,
    fi = null,
    bn = 0,
    cs = 0,
    mu = 0,
    Gr = null,
    be = null,
    gu = 0,
    cr = 1 / 0,
    Ct = null,
    Do = !1,
    oa = null,
    tn = null,
    Hi = !1,
    Kt = null,
    Ao = 0,
    Kr = 0,
    sa = null,
    lo = -1,
    ao = 0;
function je() {
    return W & 6 ? oe() : lo !== -1 ? lo : (lo = oe());
}
function nn(e) {
    return e.mode & 1
        ? W & 2 && ve !== 0
            ? ve & -ve
            : v0.transition !== null
            ? (ao === 0 && (ao = Cf()), ao)
            : ((e = G), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : If(e.type))), e)
        : 1;
}
function ut(e, t, n, r) {
    if (50 < Kr) throw ((Kr = 0), (sa = null), Error(I(185)));
    Si(e, n, r),
        (!(W & 2) || e !== he) &&
            (e === he && (!(W & 2) && (cs |= n), ce === 4 && Ht(e, ve)),
            Oe(e, r),
            n === 1 && W === 0 && !(t.mode & 1) && ((cr = oe() + 500), ss && pn()));
}
function Oe(e, t) {
    var n = e.callbackNode;
    vg(e, t);
    var r = So(e, e === he ? ve : 0);
    if (r === 0) n !== null && ec(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && ec(n), t === 1))
            e.tag === 0 ? g0(Gc.bind(null, e)) : Qf(Gc.bind(null, e)),
                f0(function () {
                    !(W & 6) && pn();
                }),
                (n = null);
        else {
            switch (kf(r)) {
                case 1:
                    n = Wa;
                    break;
                case 4:
                    n = Sf;
                    break;
                case 16:
                    n = wo;
                    break;
                case 536870912:
                    n = Ef;
                    break;
                default:
                    n = wo;
            }
            n = Yp(n, Bp.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function Bp(e, t) {
    if (((lo = -1), (ao = 0), W & 6)) throw Error(I(327));
    var n = e.callbackNode;
    if (nr() && e.callbackNode !== n) return null;
    var r = So(e, e === he ? ve : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = $o(e, r);
    else {
        t = r;
        var i = W;
        W |= 2;
        var o = Up();
        (he !== e || ve !== t) && ((Ct = null), (cr = oe() + 500), Cn(e, t));
        do
            try {
                D0();
                break;
            } catch (a) {
                Wp(e, a);
            }
        while (1);
        tu(), (Ro.current = o), (W = i), le !== null ? (t = 0) : ((he = null), (ve = 0), (t = ce));
    }
    if (t !== 0) {
        if ((t === 2 && ((i = Ol(e)), i !== 0 && ((r = i), (t = la(e, i)))), t === 1)) throw ((n = fi), Cn(e, 0), Ht(e, r), Oe(e, oe()), n);
        if (t === 6) Ht(e, r);
        else {
            if (
                ((i = e.current.alternate),
                !(r & 30) && !z0(i) && ((t = $o(e, r)), t === 2 && ((o = Ol(e)), o !== 0 && ((r = o), (t = la(e, o)))), t === 1))
            )
                throw ((n = fi), Cn(e, 0), Ht(e, r), Oe(e, oe()), n);
            switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(I(345));
                case 2:
                    gn(e, be, Ct);
                    break;
                case 3:
                    if ((Ht(e, r), (r & 130023424) === r && ((t = gu + 500 - oe()), 10 < t))) {
                        if (So(e, 0) !== 0) break;
                        if (((i = e.suspendedLanes), (i & r) !== r)) {
                            je(), (e.pingedLanes |= e.suspendedLanes & i);
                            break;
                        }
                        e.timeoutHandle = Bl(gn.bind(null, e, be, Ct), t);
                        break;
                    }
                    gn(e, be, Ct);
                    break;
                case 4:
                    if ((Ht(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, i = -1; 0 < r; ) {
                        var s = 31 - at(r);
                        (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
                    }
                    if (
                        ((r = i),
                        (r = oe() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                ? 480
                                : 1080 > r
                                ? 1080
                                : 1920 > r
                                ? 1920
                                : 3e3 > r
                                ? 3e3
                                : 4320 > r
                                ? 4320
                                : 1960 * M0(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = Bl(gn.bind(null, e, be, Ct), r);
                        break;
                    }
                    gn(e, be, Ct);
                    break;
                case 5:
                    gn(e, be, Ct);
                    break;
                default:
                    throw Error(I(329));
            }
        }
    }
    return Oe(e, oe()), e.callbackNode === n ? Bp.bind(null, e) : null;
}
function la(e, t) {
    var n = Gr;
    return (
        e.current.memoizedState.isDehydrated && (Cn(e, t).flags |= 256),
        (e = $o(e, t)),
        e !== 2 && ((t = be), (be = n), t !== null && aa(t)),
        e
    );
}
function aa(e) {
    be === null ? (be = e) : be.push.apply(be, e);
}
function z0(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!ft(o(), i)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function Ht(e, t) {
    for (t &= ~mu, t &= ~cs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - at(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function Gc(e) {
    if (W & 6) throw Error(I(327));
    nr();
    var t = So(e, 0);
    if (!(t & 1)) return Oe(e, oe()), null;
    var n = $o(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Ol(e);
        r !== 0 && ((t = r), (n = la(e, r)));
    }
    if (n === 1) throw ((n = fi), Cn(e, 0), Ht(e, t), Oe(e, oe()), n);
    if (n === 6) throw Error(I(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), gn(e, be, Ct), Oe(e, oe()), null;
}
function vu(e, t) {
    var n = W;
    W |= 1;
    try {
        return e(t);
    } finally {
        (W = n), W === 0 && ((cr = oe() + 500), ss && pn());
    }
}
function In(e) {
    Kt !== null && Kt.tag === 0 && !(W & 6) && nr();
    var t = W;
    W |= 1;
    var n = Ze.transition,
        r = G;
    try {
        if (((Ze.transition = null), (G = 1), e)) return e();
    } finally {
        (G = r), (Ze.transition = n), (W = t), !(W & 6) && pn();
    }
}
function yu() {
    (Re = Qn.current), J(Qn);
}
function Cn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), d0(n)), le !== null))
        for (n = le.return; n !== null; ) {
            var r = n;
            switch ((Ja(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && jo();
                    break;
                case 3:
                    ar(), J(Ne), J(Ce), lu();
                    break;
                case 5:
                    su(r);
                    break;
                case 4:
                    ar();
                    break;
                case 13:
                    J(te);
                    break;
                case 19:
                    J(te);
                    break;
                case 10:
                    nu(r.type._context);
                    break;
                case 22:
                case 23:
                    yu();
            }
            n = n.return;
        }
    if (
        ((he = e), (le = e = rn(e.current, null)), (ve = Re = t), (ce = 0), (fi = null), (mu = cs = bn = 0), (be = Gr = null), wn !== null)
    ) {
        for (t = 0; t < wn.length; t++)
            if (((n = wn[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var i = r.next,
                    o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    (o.next = i), (r.next = s);
                }
                n.pending = r;
            }
        wn = null;
    }
    return e;
}
function Wp(e, t) {
    do {
        var n = le;
        try {
            if ((tu(), (io.current = zo), Mo)) {
                for (var r = ne.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null), (r = r.next);
                }
                Mo = !1;
            }
            if (((_n = 0), (fe = ue = ne = null), (Vr = !1), (ui = 0), (hu.current = null), n === null || n.return === null)) {
                (ce = 1), (fi = t), (le = null);
                break;
            }
            e: {
                var o = e,
                    s = n.return,
                    a = n,
                    l = t;
                if (((t = ve), (a.flags |= 32768), l !== null && typeof l == 'object' && typeof l.then == 'function')) {
                    var u = l,
                        d = a,
                        f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var h = d.alternate;
                        h
                            ? ((d.updateQueue = h.updateQueue), (d.memoizedState = h.memoizedState), (d.lanes = h.lanes))
                            : ((d.updateQueue = null), (d.memoizedState = null));
                    }
                    var g = Oc(s);
                    if (g !== null) {
                        (g.flags &= -257), Mc(g, s, a, o, t), g.mode & 1 && Lc(o, u, t), (t = g), (l = u);
                        var y = t.updateQueue;
                        if (y === null) {
                            var x = new Set();
                            x.add(l), (t.updateQueue = x);
                        } else y.add(l);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            Lc(o, u, t), xu();
                            break e;
                        }
                        l = Error(I(426));
                    }
                } else if (Z && a.mode & 1) {
                    var S = Oc(s);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256), Mc(S, s, a, o, t), Za(ur(l, a));
                        break e;
                    }
                }
                (o = l = ur(l, a)), ce !== 4 && (ce = 2), Gr === null ? (Gr = [o]) : Gr.push(o), (o = s);
                do {
                    switch (o.tag) {
                        case 3:
                            (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                            var p = Tp(o, l, t);
                            Tc(o, p);
                            break e;
                        case 1:
                            a = l;
                            var m = o.type,
                                v = o.stateNode;
                            if (
                                !(o.flags & 128) &&
                                (typeof m.getDerivedStateFromError == 'function' ||
                                    (v !== null && typeof v.componentDidCatch == 'function' && (tn === null || !tn.has(v))))
                            ) {
                                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                                var w = jp(o, a, t);
                                Tc(o, w);
                                break e;
                            }
                    }
                    o = o.return;
                } while (o !== null);
            }
            Hp(n);
        } catch (E) {
            (t = E), le === n && n !== null && (le = n = n.return);
            continue;
        }
        break;
    } while (1);
}
function Up() {
    var e = Ro.current;
    return (Ro.current = zo), e === null ? zo : e;
}
function xu() {
    (ce === 0 || ce === 3 || ce === 2) && (ce = 4), he === null || (!(bn & 268435455) && !(cs & 268435455)) || Ht(he, ve);
}
function $o(e, t) {
    var n = W;
    W |= 2;
    var r = Up();
    (he !== e || ve !== t) && ((Ct = null), Cn(e, t));
    do
        try {
            R0();
            break;
        } catch (i) {
            Wp(e, i);
        }
    while (1);
    if ((tu(), (W = n), (Ro.current = r), le !== null)) throw Error(I(261));
    return (he = null), (ve = 0), ce;
}
function R0() {
    for (; le !== null; ) Vp(le);
}
function D0() {
    for (; le !== null && !ag(); ) Vp(le);
}
function Vp(e) {
    var t = Kp(e.alternate, e, Re);
    (e.memoizedProps = e.pendingProps), t === null ? Hp(e) : (le = t), (hu.current = null);
}
function Hp(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = I0(n, t)), n !== null)) {
                (n.flags &= 32767), (le = n);
                return;
            }
            if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (ce = 6), (le = null);
                return;
            }
        } else if (((n = b0(n, t, Re)), n !== null)) {
            le = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            le = t;
            return;
        }
        le = t = e;
    } while (t !== null);
    ce === 0 && (ce = 5);
}
function gn(e, t, n) {
    var r = G,
        i = Ze.transition;
    try {
        (Ze.transition = null), (G = 1), A0(e, t, n, r);
    } finally {
        (Ze.transition = i), (G = r);
    }
    return null;
}
function A0(e, t, n, r) {
    do nr();
    while (Kt !== null);
    if (W & 6) throw Error(I(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(I(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
        (yg(e, o),
        e === he && ((le = he = null), (ve = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            Hi ||
            ((Hi = !0),
            Yp(wo, function () {
                return nr(), null;
            })),
        (o = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || o)
    ) {
        (o = Ze.transition), (Ze.transition = null);
        var s = G;
        G = 1;
        var a = W;
        (W |= 4),
            (hu.current = null),
            L0(e, n),
            $p(n, e),
            i0($l),
            (Eo = !!Al),
            ($l = Al = null),
            (e.current = n),
            O0(n),
            ug(),
            (W = a),
            (G = s),
            (Ze.transition = o);
    } else e.current = n;
    if ((Hi && ((Hi = !1), (Kt = e), (Ao = i)), (o = e.pendingLanes), o === 0 && (tn = null), fg(n.stateNode), Oe(e, oe()), t !== null))
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
    if (Do) throw ((Do = !1), (e = oa), (oa = null), e);
    return Ao & 1 && e.tag !== 0 && nr(), (o = e.pendingLanes), o & 1 ? (e === sa ? Kr++ : ((Kr = 0), (sa = e))) : (Kr = 0), pn(), null;
}
function nr() {
    if (Kt !== null) {
        var e = kf(Ao),
            t = Ze.transition,
            n = G;
        try {
            if (((Ze.transition = null), (G = 16 > e ? 16 : e), Kt === null)) var r = !1;
            else {
                if (((e = Kt), (Kt = null), (Ao = 0), W & 6)) throw Error(I(331));
                var i = W;
                for (W |= 4, M = e.current; M !== null; ) {
                    var o = M,
                        s = o.child;
                    if (M.flags & 16) {
                        var a = o.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (M = u; M !== null; ) {
                                    var d = M;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Hr(8, d, o);
                                    }
                                    var f = d.child;
                                    if (f !== null) (f.return = d), (M = f);
                                    else
                                        for (; M !== null; ) {
                                            d = M;
                                            var h = d.sibling,
                                                g = d.return;
                                            if ((Rp(d), d === u)) {
                                                M = null;
                                                break;
                                            }
                                            if (h !== null) {
                                                (h.return = g), (M = h);
                                                break;
                                            }
                                            M = g;
                                        }
                                }
                            }
                            var y = o.alternate;
                            if (y !== null) {
                                var x = y.child;
                                if (x !== null) {
                                    y.child = null;
                                    do {
                                        var S = x.sibling;
                                        (x.sibling = null), (x = S);
                                    } while (x !== null);
                                }
                            }
                            M = o;
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (M = s);
                    else
                        e: for (; M !== null; ) {
                            if (((o = M), o.flags & 2048))
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Hr(9, o, o.return);
                                }
                            var p = o.sibling;
                            if (p !== null) {
                                (p.return = o.return), (M = p);
                                break e;
                            }
                            M = o.return;
                        }
                }
                var m = e.current;
                for (M = m; M !== null; ) {
                    s = M;
                    var v = s.child;
                    if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (M = v);
                    else
                        e: for (s = m; M !== null; ) {
                            if (((a = M), a.flags & 2048))
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            us(9, a);
                                    }
                                } catch (E) {
                                    ie(a, a.return, E);
                                }
                            if (a === s) {
                                M = null;
                                break e;
                            }
                            var w = a.sibling;
                            if (w !== null) {
                                (w.return = a.return), (M = w);
                                break e;
                            }
                            M = a.return;
                        }
                }
                if (((W = i), pn(), xt && typeof xt.onPostCommitFiberRoot == 'function'))
                    try {
                        xt.onPostCommitFiberRoot(ts, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (G = n), (Ze.transition = t);
        }
    }
    return !1;
}
function Kc(e, t, n) {
    (t = ur(n, t)), (t = Tp(e, t, 1)), (e = en(e, t, 1)), (t = je()), e !== null && (Si(e, 1, t), Oe(e, t));
}
function ie(e, t, n) {
    if (e.tag === 3) Kc(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Kc(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == 'function' ||
                    (typeof r.componentDidCatch == 'function' && (tn === null || !tn.has(r)))
                ) {
                    (e = ur(n, e)), (e = jp(t, e, 1)), (t = en(t, e, 1)), (e = je()), t !== null && (Si(t, 1, e), Oe(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function $0(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = je()),
        (e.pingedLanes |= e.suspendedLanes & n),
        he === e && (ve & n) === n && (ce === 4 || (ce === 3 && (ve & 130023424) === ve && 500 > oe() - gu) ? Cn(e, 0) : (mu |= n)),
        Oe(e, t);
}
function Gp(e, t) {
    t === 0 && (e.mode & 1 ? ((t = zi), (zi <<= 1), !(zi & 130023424) && (zi = 4194304)) : (t = 1));
    var n = je();
    (e = Ot(e, t)), e !== null && (Si(e, t, n), Oe(e, n));
}
function F0(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Gp(e, n);
}
function B0(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(I(314));
    }
    r !== null && r.delete(t), Gp(e, n);
}
var Kp;
Kp = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ne.current) Ie = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return (Ie = !1), _0(e, t, n);
            Ie = !!(e.flags & 131072);
        }
    else (Ie = !1), Z && t.flags & 1048576 && Xf(t, bo, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            so(e, t), (e = t.pendingProps);
            var i = or(t, Ce.current);
            tr(t, n), (i = uu(null, t, r, e, i, n));
            var o = cu();
            return (
                (t.flags |= 1),
                typeof i == 'object' && i !== null && typeof i.render == 'function' && i.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      Le(r) ? ((o = !0), Po(t)) : (o = !1),
                      (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
                      iu(t),
                      (i.updater = ls),
                      (t.stateNode = i),
                      (i._reactInternals = t),
                      Yl(t, r, e, n),
                      (t = ql(null, t, r, !0, o, n)))
                    : ((t.tag = 0), Z && o && qa(t), Te(null, t, i, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (so(e, t),
                    (e = t.pendingProps),
                    (i = r._init),
                    (r = i(r._payload)),
                    (t.type = r),
                    (i = t.tag = U0(r)),
                    (e = it(r, e)),
                    i)
                ) {
                    case 0:
                        t = Xl(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Dc(null, t, r, e, n);
                        break e;
                    case 11:
                        t = zc(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Rc(null, t, r, it(r.type, e), n);
                        break e;
                }
                throw Error(I(306, r, ''));
            }
            return t;
        case 0:
            return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : it(r, i)), Xl(e, t, r, i, n);
        case 1:
            return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : it(r, i)), Dc(e, t, r, i, n);
        case 3:
            e: {
                if ((Ip(t), e === null)) throw Error(I(387));
                (r = t.pendingProps), (o = t.memoizedState), (i = o.element), ep(e, t), Lo(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), o.isDehydrated))
                    if (
                        ((o = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions,
                        }),
                        (t.updateQueue.baseState = o),
                        (t.memoizedState = o),
                        t.flags & 256)
                    ) {
                        (i = ur(Error(I(423)), t)), (t = Ac(e, t, r, n, i));
                        break e;
                    } else if (r !== i) {
                        (i = ur(Error(I(424)), t)), (t = Ac(e, t, r, n, i));
                        break e;
                    } else
                        for (
                            Ae = Zt(t.stateNode.containerInfo.firstChild), Fe = t, Z = !0, st = null, n = ip(t, null, r, n), t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((sr(), r === i)) {
                        t = Mt(e, t, n);
                        break e;
                    }
                    Te(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                op(t),
                e === null && Hl(t),
                (r = t.type),
                (i = t.pendingProps),
                (o = e !== null ? e.memoizedProps : null),
                (s = i.children),
                Fl(r, i) ? (s = null) : o !== null && Fl(r, o) && (t.flags |= 32),
                bp(e, t),
                Te(e, t, s, n),
                t.child
            );
        case 6:
            return e === null && Hl(t), null;
        case 13:
            return Np(e, t, n);
        case 4:
            return (
                ou(t, t.stateNode.containerInfo), (r = t.pendingProps), e === null ? (t.child = lr(t, null, r, n)) : Te(e, t, r, n), t.child
            );
        case 11:
            return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : it(r, i)), zc(e, t, r, i, n);
        case 7:
            return Te(e, t, t.pendingProps, n), t.child;
        case 8:
            return Te(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Te(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (i = t.pendingProps),
                    (o = t.memoizedProps),
                    (s = i.value),
                    Q(Io, r._currentValue),
                    (r._currentValue = s),
                    o !== null)
                )
                    if (ft(o.value, s)) {
                        if (o.children === i.children && !Ne.current) {
                            t = Mt(e, t, n);
                            break e;
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                            var a = o.dependencies;
                            if (a !== null) {
                                s = o.child;
                                for (var l = a.firstContext; l !== null; ) {
                                    if (l.context === r) {
                                        if (o.tag === 1) {
                                            (l = bt(-1, n & -n)), (l.tag = 2);
                                            var u = o.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var d = u.pending;
                                                d === null ? (l.next = l) : ((l.next = d.next), (d.next = l)), (u.pending = l);
                                            }
                                        }
                                        (o.lanes |= n), (l = o.alternate), l !== null && (l.lanes |= n), Gl(o.return, n, t), (a.lanes |= n);
                                        break;
                                    }
                                    l = l.next;
                                }
                            } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (((s = o.return), s === null)) throw Error(I(341));
                                (s.lanes |= n), (a = s.alternate), a !== null && (a.lanes |= n), Gl(s, n, t), (s = o.sibling);
                            } else s = o.child;
                            if (s !== null) s.return = o;
                            else
                                for (s = o; s !== null; ) {
                                    if (s === t) {
                                        s = null;
                                        break;
                                    }
                                    if (((o = s.sibling), o !== null)) {
                                        (o.return = s.return), (s = o);
                                        break;
                                    }
                                    s = s.return;
                                }
                            o = s;
                        }
                Te(e, t, i.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (i = t.type), (r = t.pendingProps.children), tr(t, n), (i = et(i)), (r = r(i)), (t.flags |= 1), Te(e, t, r, n), t.child;
        case 14:
            return (r = t.type), (i = it(r, t.pendingProps)), (i = it(r.type, i)), Rc(e, t, r, i, n);
        case 15:
            return Pp(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : it(r, i)),
                so(e, t),
                (t.tag = 1),
                Le(r) ? ((e = !0), Po(t)) : (e = !1),
                tr(t, n),
                np(t, r, i),
                Yl(t, r, i, n),
                ql(null, t, r, !0, e, n)
            );
        case 19:
            return Lp(e, t, n);
        case 22:
            return _p(e, t, n);
    }
    throw Error(I(156, t.tag));
};
function Yp(e, t) {
    return wf(e, t);
}
function W0(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Je(e, t, n, r) {
    return new W0(e, t, n, r);
}
function wu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function U0(e) {
    if (typeof e == 'function') return wu(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === $a)) return 11;
        if (e === Fa) return 14;
    }
    return 2;
}
function rn(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = Je(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function uo(e, t, n, r, i, o) {
    var s = 2;
    if (((r = e), typeof e == 'function')) wu(e) && (s = 1);
    else if (typeof e == 'string') s = 5;
    else
        e: switch (e) {
            case $n:
                return kn(n.children, i, o, t);
            case Aa:
                (s = 8), (i |= 8);
                break;
            case yl:
                return (e = Je(12, n, t, i | 2)), (e.elementType = yl), (e.lanes = o), e;
            case xl:
                return (e = Je(13, n, t, i)), (e.elementType = xl), (e.lanes = o), e;
            case wl:
                return (e = Je(19, n, t, i)), (e.elementType = wl), (e.lanes = o), e;
            case nf:
                return ds(n, i, o, t);
            default:
                if (typeof e == 'object' && e !== null)
                    switch (e.$$typeof) {
                        case ef:
                            s = 10;
                            break e;
                        case tf:
                            s = 9;
                            break e;
                        case $a:
                            s = 11;
                            break e;
                        case Fa:
                            s = 14;
                            break e;
                        case Wt:
                            (s = 16), (r = null);
                            break e;
                    }
                throw Error(I(130, e == null ? e : typeof e, ''));
        }
    return (t = Je(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t;
}
function kn(e, t, n, r) {
    return (e = Je(7, e, r, t)), (e.lanes = n), e;
}
function ds(e, t, n, r) {
    return (e = Je(22, e, r, t)), (e.elementType = nf), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function Zs(e, t, n) {
    return (e = Je(6, e, null, t)), (e.lanes = n), e;
}
function el(e, t, n) {
    return (
        (t = Je(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
    );
}
function V0(e, t, n, r, i) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Ms(0)),
        (this.expirationTimes = Ms(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = Ms(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = i),
        (this.mutableSourceEagerHydrationData = null);
}
function Su(e, t, n, r, i, o, s, a, l) {
    return (
        (e = new V0(e, t, n, a, l)),
        t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
        (o = Je(3, null, null, t)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }),
        iu(o),
        e
    );
}
function H0(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: An, key: r == null ? null : '' + r, children: e, containerInfo: t, implementation: n };
}
function Qp(e) {
    if (!e) return an;
    e = e._reactInternals;
    e: {
        if (Mn(e) !== e || e.tag !== 1) throw Error(I(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Le(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(I(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Le(n)) return Yf(e, n, t);
    }
    return t;
}
function Xp(e, t, n, r, i, o, s, a, l) {
    return (
        (e = Su(n, r, !0, e, i, o, s, a, l)),
        (e.context = Qp(null)),
        (n = e.current),
        (r = je()),
        (i = nn(n)),
        (o = bt(r, i)),
        (o.callback = t ?? null),
        en(n, o, i),
        (e.current.lanes = i),
        Si(e, i, r),
        Oe(e, r),
        e
    );
}
function fs(e, t, n, r) {
    var i = t.current,
        o = je(),
        s = nn(i);
    return (
        (n = Qp(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = bt(o, s)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = en(i, t, s)),
        e !== null && (ut(e, i, s, o), ro(e, i, s)),
        s
    );
}
function Fo(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function Yc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function Eu(e, t) {
    Yc(e, t), (e = e.alternate) && Yc(e, t);
}
function G0() {
    return null;
}
var qp =
    typeof reportError == 'function'
        ? reportError
        : function (e) {
              console.error(e);
          };
function Cu(e) {
    this._internalRoot = e;
}
ps.prototype.render = Cu.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(I(409));
    fs(e, t, null, null);
};
ps.prototype.unmount = Cu.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        In(function () {
            fs(null, e, null, null);
        }),
            (t[Lt] = null);
    }
};
function ps(e) {
    this._internalRoot = e;
}
ps.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Pf();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Vt.length && t !== 0 && t < Vt[n].priority; n++);
        Vt.splice(n, 0, e), n === 0 && bf(e);
    }
};
function ku(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function hs(e) {
    return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
}
function Qc() {}
function K0(e, t, n, r, i) {
    if (i) {
        if (typeof r == 'function') {
            var o = r;
            r = function () {
                var u = Fo(s);
                o.call(u);
            };
        }
        var s = Xp(t, r, e, 0, null, !1, !1, '', Qc);
        return (e._reactRootContainer = s), (e[Lt] = s.current), ii(e.nodeType === 8 ? e.parentNode : e), In(), s;
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == 'function') {
        var a = r;
        r = function () {
            var u = Fo(l);
            a.call(u);
        };
    }
    var l = Su(e, 0, !1, null, null, !1, !1, '', Qc);
    return (
        (e._reactRootContainer = l),
        (e[Lt] = l.current),
        ii(e.nodeType === 8 ? e.parentNode : e),
        In(function () {
            fs(t, l, n, r);
        }),
        l
    );
}
function ms(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == 'function') {
            var a = i;
            i = function () {
                var l = Fo(s);
                a.call(l);
            };
        }
        fs(t, s, e, i);
    } else s = K0(n, t, e, i, r);
    return Fo(s);
}
Tf = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Mr(t.pendingLanes);
                n !== 0 && (Ua(t, n | 1), Oe(t, oe()), !(W & 6) && ((cr = oe() + 500), pn()));
            }
            break;
        case 13:
            In(function () {
                var r = Ot(e, 1);
                if (r !== null) {
                    var i = je();
                    ut(r, e, 1, i);
                }
            }),
                Eu(e, 1);
    }
};
Va = function (e) {
    if (e.tag === 13) {
        var t = Ot(e, 134217728);
        if (t !== null) {
            var n = je();
            ut(t, e, 134217728, n);
        }
        Eu(e, 134217728);
    }
};
jf = function (e) {
    if (e.tag === 13) {
        var t = nn(e),
            n = Ot(e, t);
        if (n !== null) {
            var r = je();
            ut(n, e, t, r);
        }
        Eu(e, t);
    }
};
Pf = function () {
    return G;
};
_f = function (e, t) {
    var n = G;
    try {
        return (G = e), t();
    } finally {
        G = n;
    }
};
Il = function (e, t, n) {
    switch (t) {
        case 'input':
            if ((Cl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = os(r);
                        if (!i) throw Error(I(90));
                        of(r), Cl(r, i);
                    }
                }
            }
            break;
        case 'textarea':
            lf(e, n);
            break;
        case 'select':
            (t = n.value), t != null && qn(e, !!n.multiple, t, !1);
    }
};
hf = vu;
mf = In;
var Y0 = { usingClientEntryPoint: !1, Events: [Ci, Un, os, ff, pf, vu] },
    Nr = { findFiberByHostInstance: xn, bundleType: 0, version: '18.2.0', rendererPackageName: 'react-dom' },
    Q0 = {
        bundleType: Nr.bundleType,
        version: Nr.version,
        rendererPackageName: Nr.rendererPackageName,
        rendererConfig: Nr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Rt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = yf(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Nr.findFiberByHostInstance || G0,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Gi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gi.isDisabled && Gi.supportsFiber)
        try {
            (ts = Gi.inject(Q0)), (xt = Gi);
        } catch {}
}
Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y0;
Ve.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ku(t)) throw Error(I(200));
    return H0(e, t, null, n);
};
Ve.createRoot = function (e, t) {
    if (!ku(e)) throw Error(I(299));
    var n = !1,
        r = '',
        i = qp;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = Su(e, 1, !1, null, null, n, !1, r, i)),
        (e[Lt] = t.current),
        ii(e.nodeType === 8 ? e.parentNode : e),
        new Cu(t)
    );
};
Ve.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == 'function' ? Error(I(188)) : ((e = Object.keys(e).join(',')), Error(I(268, e)));
    return (e = yf(t)), (e = e === null ? null : e.stateNode), e;
};
Ve.flushSync = function (e) {
    return In(e);
};
Ve.hydrate = function (e, t, n) {
    if (!hs(t)) throw Error(I(200));
    return ms(null, e, t, !0, n);
};
Ve.hydrateRoot = function (e, t, n) {
    if (!ku(e)) throw Error(I(405));
    var r = (n != null && n.hydratedSources) || null,
        i = !1,
        o = '',
        s = qp;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (i = !0),
            n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        (t = Xp(t, null, e, 1, n ?? null, i, !1, o, s)),
        (e[Lt] = t.current),
        ii(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (i = n._getVersion),
                (i = i(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, i])
                    : t.mutableSourceEagerHydrationData.push(n, i);
    return new ps(t);
};
Ve.render = function (e, t, n) {
    if (!hs(t)) throw Error(I(200));
    return ms(null, e, t, !1, n);
};
Ve.unmountComponentAtNode = function (e) {
    if (!hs(e)) throw Error(I(40));
    return e._reactRootContainer
        ? (In(function () {
              ms(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[Lt] = null);
              });
          }),
          !0)
        : !1;
};
Ve.unstable_batchedUpdates = vu;
Ve.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!hs(n)) throw Error(I(200));
    if (e == null || e._reactInternals === void 0) throw Error(I(38));
    return ms(e, t, n, !1, r);
};
Ve.version = '18.2.0-next-9e3b772b8-20220608';
function Jp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jp);
        } catch (e) {
            console.error(e);
        }
}
Jp(), (Qd.exports = Ve);
var Zp = Qd.exports,
    Xc = Zp;
(gl.createRoot = Xc.createRoot), (gl.hydrateRoot = Xc.hydrateRoot);
/**
 * @remix-run/router v1.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pi() {
    return (
        (pi = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        pi.apply(this, arguments)
    );
}
var Yt;
(function (e) {
    (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Yt || (Yt = {}));
const qc = 'popstate';
function X0(e) {
    e === void 0 && (e = {});
    function t(i, o) {
        let { pathname: s = '/', search: a = '', hash: l = '' } = zn(i.location.hash.substr(1));
        return (
            !s.startsWith('/') && !s.startsWith('.') && (s = '/' + s),
            ua('', { pathname: s, search: a, hash: l }, (o.state && o.state.usr) || null, (o.state && o.state.key) || 'default')
        );
    }
    function n(i, o) {
        let s = i.document.querySelector('base'),
            a = '';
        if (s && s.getAttribute('href')) {
            let l = i.location.href,
                u = l.indexOf('#');
            a = u === -1 ? l : l.slice(0, u);
        }
        return a + '#' + (typeof o == 'string' ? o : Bo(o));
    }
    function r(i, o) {
        gs(i.pathname.charAt(0) === '/', 'relative pathnames are not supported in hash history.push(' + JSON.stringify(o) + ')');
    }
    return J0(t, n, r, e);
}
function ae(e, t) {
    if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function gs(e, t) {
    if (!e) {
        typeof console < 'u' && console.warn(t);
        try {
            throw new Error(t);
        } catch {}
    }
}
function q0() {
    return Math.random().toString(36).substr(2, 8);
}
function Jc(e, t) {
    return { usr: e.state, key: e.key, idx: t };
}
function ua(e, t, n, r) {
    return (
        n === void 0 && (n = null),
        pi({ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' }, typeof t == 'string' ? zn(t) : t, {
            state: n,
            key: (t && t.key) || r || q0(),
        })
    );
}
function Bo(e) {
    let { pathname: t = '/', search: n = '', hash: r = '' } = e;
    return n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n), r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r), t;
}
function zn(e) {
    let t = {};
    if (e) {
        let n = e.indexOf('#');
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        let r = e.indexOf('?');
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
    }
    return t;
}
function J0(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: i = document.defaultView, v5Compat: o = !1 } = r,
        s = i.history,
        a = Yt.Pop,
        l = null,
        u = d();
    u == null && ((u = 0), s.replaceState(pi({}, s.state, { idx: u }), ''));
    function d() {
        return (s.state || { idx: null }).idx;
    }
    function f() {
        a = Yt.Pop;
        let S = d(),
            p = S == null ? null : S - u;
        (u = S), l && l({ action: a, location: x.location, delta: p });
    }
    function h(S, p) {
        a = Yt.Push;
        let m = ua(x.location, S, p);
        n && n(m, S), (u = d() + 1);
        let v = Jc(m, u),
            w = x.createHref(m);
        try {
            s.pushState(v, '', w);
        } catch (E) {
            if (E instanceof DOMException && E.name === 'DataCloneError') throw E;
            i.location.assign(w);
        }
        o && l && l({ action: a, location: x.location, delta: 1 });
    }
    function g(S, p) {
        a = Yt.Replace;
        let m = ua(x.location, S, p);
        n && n(m, S), (u = d());
        let v = Jc(m, u),
            w = x.createHref(m);
        s.replaceState(v, '', w), o && l && l({ action: a, location: x.location, delta: 0 });
    }
    function y(S) {
        let p = i.location.origin !== 'null' ? i.location.origin : i.location.href,
            m = typeof S == 'string' ? S : Bo(S);
        return ae(p, 'No window.location.(origin|href) available to create URL for href: ' + m), new URL(m, p);
    }
    let x = {
        get action() {
            return a;
        },
        get location() {
            return e(i, s);
        },
        listen(S) {
            if (l) throw new Error('A history only accepts one active listener');
            return (
                i.addEventListener(qc, f),
                (l = S),
                () => {
                    i.removeEventListener(qc, f), (l = null);
                }
            );
        },
        createHref(S) {
            return t(i, S);
        },
        createURL: y,
        encodeLocation(S) {
            let p = y(S);
            return { pathname: p.pathname, search: p.search, hash: p.hash };
        },
        push: h,
        replace: g,
        go(S) {
            return s.go(S);
        },
    };
    return x;
}
var Zc;
(function (e) {
    (e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error');
})(Zc || (Zc = {}));
function Z0(e, t, n) {
    n === void 0 && (n = '/');
    let r = typeof t == 'string' ? zn(t) : t,
        i = Tu(r.pathname || '/', n);
    if (i == null) return null;
    let o = eh(e);
    ev(o);
    let s = null;
    for (let a = 0; s == null && a < o.length; ++a) s = uv(o[a], fv(i));
    return s;
}
function eh(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
    let i = (o, s, a) => {
        let l = { relativePath: a === void 0 ? o.path || '' : a, caseSensitive: o.caseSensitive === !0, childrenIndex: s, route: o };
        l.relativePath.startsWith('/') &&
            (ae(
                l.relativePath.startsWith(r),
                'Absolute route path "' +
                    l.relativePath +
                    '" nested under path ' +
                    ('"' + r + '" is not valid. An absolute child route path ') +
                    'must start with the combined path of all its parent routes.'
            ),
            (l.relativePath = l.relativePath.slice(r.length)));
        let u = on([r, l.relativePath]),
            d = n.concat(l);
        o.children &&
            o.children.length > 0 &&
            (ae(
                o.index !== !0,
                'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + u + '".')
            ),
            eh(o.children, t, d, u)),
            !(o.path == null && !o.index) && t.push({ path: u, score: lv(u, o.index), routesMeta: d });
    };
    return (
        e.forEach((o, s) => {
            var a;
            if (o.path === '' || !((a = o.path) != null && a.includes('?'))) i(o, s);
            else for (let l of th(o.path)) i(o, s, l);
        }),
        t
    );
}
function th(e) {
    let t = e.split('/');
    if (t.length === 0) return [];
    let [n, ...r] = t,
        i = n.endsWith('?'),
        o = n.replace(/\?$/, '');
    if (r.length === 0) return i ? [o, ''] : [o];
    let s = th(r.join('/')),
        a = [];
    return (
        a.push(...s.map((l) => (l === '' ? o : [o, l].join('/')))),
        i && a.push(...s),
        a.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
    );
}
function ev(e) {
    e.sort((t, n) =>
        t.score !== n.score
            ? n.score - t.score
            : av(
                  t.routesMeta.map((r) => r.childrenIndex),
                  n.routesMeta.map((r) => r.childrenIndex)
              )
    );
}
const tv = /^:\w+$/,
    nv = 3,
    rv = 2,
    iv = 1,
    ov = 10,
    sv = -2,
    ed = (e) => e === '*';
function lv(e, t) {
    let n = e.split('/'),
        r = n.length;
    return n.some(ed) && (r += sv), t && (r += rv), n.filter((i) => !ed(i)).reduce((i, o) => i + (tv.test(o) ? nv : o === '' ? iv : ov), r);
}
function av(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function uv(e, t) {
    let { routesMeta: n } = e,
        r = {},
        i = '/',
        o = [];
    for (let s = 0; s < n.length; ++s) {
        let a = n[s],
            l = s === n.length - 1,
            u = i === '/' ? t : t.slice(i.length) || '/',
            d = cv({ path: a.relativePath, caseSensitive: a.caseSensitive, end: l }, u);
        if (!d) return null;
        Object.assign(r, d.params);
        let f = a.route;
        o.push({ params: r, pathname: on([i, d.pathname]), pathnameBase: gv(on([i, d.pathnameBase])), route: f }),
            d.pathnameBase !== '/' && (i = on([i, d.pathnameBase]));
    }
    return o;
}
function cv(e, t) {
    typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = dv(e.path, e.caseSensitive, e.end),
        i = t.match(n);
    if (!i) return null;
    let o = i[0],
        s = o.replace(/(.)\/+$/, '$1'),
        a = i.slice(1);
    return {
        params: r.reduce((u, d, f) => {
            let { paramName: h, isOptional: g } = d;
            if (h === '*') {
                let x = a[f] || '';
                s = o.slice(0, o.length - x.length).replace(/(.)\/+$/, '$1');
            }
            const y = a[f];
            return g && !y ? (u[h] = void 0) : (u[h] = pv(y || '', h)), u;
        }, {}),
        pathname: o,
        pathnameBase: s,
        pattern: e,
    };
}
function dv(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        gs(
            e === '*' || !e.endsWith('*') || e.endsWith('/*'),
            'Route path "' +
                e +
                '" will be treated as if it were ' +
                ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
                'always follow a `/` in the pattern. To get rid of this warning, ' +
                ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
        );
    let r = [],
        i =
            '^' +
            e
                .replace(/\/*\*?$/, '')
                .replace(/^\/*/, '/')
                .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
                .replace(
                    /\/:(\w+)(\?)?/g,
                    (s, a, l) => (r.push({ paramName: a, isOptional: l != null }), l ? '/?([^\\/]+)?' : '/([^\\/]+)')
                );
    return (
        e.endsWith('*')
            ? (r.push({ paramName: '*' }), (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
            : n
            ? (i += '\\/*$')
            : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
        [new RegExp(i, t ? void 0 : 'i'), r]
    );
}
function fv(e) {
    try {
        return decodeURI(e);
    } catch (t) {
        return (
            gs(
                !1,
                'The URL path "' +
                    e +
                    '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
                    ('encoding (' + t + ').')
            ),
            e
        );
    }
}
function pv(e, t) {
    try {
        return decodeURIComponent(e);
    } catch (n) {
        return (
            gs(
                !1,
                'The value for the URL param "' +
                    t +
                    '" will not be decoded because' +
                    (' the string "' + e + '" is a malformed URL segment. This is probably') +
                    (' due to a bad percent encoding (' + n + ').')
            ),
            e
        );
    }
}
function Tu(e, t) {
    if (t === '/') return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith('/') ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== '/' ? null : e.slice(n) || '/';
}
function hv(e, t) {
    t === void 0 && (t = '/');
    let { pathname: n, search: r = '', hash: i = '' } = typeof e == 'string' ? zn(e) : e;
    return { pathname: n ? (n.startsWith('/') ? n : mv(n, t)) : t, search: vv(r), hash: yv(i) };
}
function mv(e, t) {
    let n = t.replace(/\/+$/, '').split('/');
    return (
        e.split('/').forEach((i) => {
            i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i);
        }),
        n.length > 1 ? n.join('/') : '/'
    );
}
function tl(e, t, n, r) {
    return (
        "Cannot include a '" +
        e +
        "' character in a manually specified " +
        ('`to.' + t + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') +
        ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
        'a string in <Link to="..."> and the router will parse it for you.'
    );
}
function nh(e) {
    return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function rh(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == 'string'
        ? (i = zn(e))
        : ((i = pi({}, e)),
          ae(!i.pathname || !i.pathname.includes('?'), tl('?', 'pathname', 'search', i)),
          ae(!i.pathname || !i.pathname.includes('#'), tl('#', 'pathname', 'hash', i)),
          ae(!i.search || !i.search.includes('#'), tl('#', 'search', 'hash', i)));
    let o = e === '' || i.pathname === '',
        s = o ? '/' : i.pathname,
        a;
    if (s == null) a = n;
    else if (r) {
        let f = t[t.length - 1].replace(/^\//, '').split('/');
        if (s.startsWith('..')) {
            let h = s.split('/');
            for (; h[0] === '..'; ) h.shift(), f.pop();
            i.pathname = h.join('/');
        }
        a = '/' + f.join('/');
    } else {
        let f = t.length - 1;
        if (s.startsWith('..')) {
            let h = s.split('/');
            for (; h[0] === '..'; ) h.shift(), (f -= 1);
            i.pathname = h.join('/');
        }
        a = f >= 0 ? t[f] : '/';
    }
    let l = hv(i, a),
        u = s && s !== '/' && s.endsWith('/'),
        d = (o || s === '.') && n.endsWith('/');
    return !l.pathname.endsWith('/') && (u || d) && (l.pathname += '/'), l;
}
const on = (e) => e.join('/').replace(/\/\/+/g, '/'),
    gv = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
    vv = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
    yv = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function xv(e) {
    return e != null && typeof e.status == 'number' && typeof e.statusText == 'string' && typeof e.internal == 'boolean' && 'data' in e;
}
const ih = ['post', 'put', 'patch', 'delete'];
new Set(ih);
const wv = ['get', ...ih];
new Set(wv);
/**
 * React Router v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Wo() {
    return (
        (Wo = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Wo.apply(this, arguments)
    );
}
const ju = T.createContext(null),
    Sv = T.createContext(null),
    wr = T.createContext(null),
    vs = T.createContext(null),
    Dt = T.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    oh = T.createContext(null);
function Ev(e, t) {
    let { relative: n } = t === void 0 ? {} : t;
    Ti() || ae(!1);
    let { basename: r, navigator: i } = T.useContext(wr),
        { hash: o, pathname: s, search: a } = lh(e, { relative: n }),
        l = s;
    return r !== '/' && (l = s === '/' ? r : on([r, s])), i.createHref({ pathname: l, search: a, hash: o });
}
function Ti() {
    return T.useContext(vs) != null;
}
function ys() {
    return Ti() || ae(!1), T.useContext(vs).location;
}
function sh(e) {
    T.useContext(wr).static || T.useLayoutEffect(e);
}
function pt() {
    let { isDataRoute: e } = T.useContext(Dt);
    return e ? Dv() : Cv();
}
function Cv() {
    Ti() || ae(!1);
    let e = T.useContext(ju),
        { basename: t, navigator: n } = T.useContext(wr),
        { matches: r } = T.useContext(Dt),
        { pathname: i } = ys(),
        o = JSON.stringify(nh(r).map((l) => l.pathnameBase)),
        s = T.useRef(!1);
    return (
        sh(() => {
            s.current = !0;
        }),
        T.useCallback(
            function (l, u) {
                if ((u === void 0 && (u = {}), !s.current)) return;
                if (typeof l == 'number') {
                    n.go(l);
                    return;
                }
                let d = rh(l, JSON.parse(o), i, u.relative === 'path');
                e == null && t !== '/' && (d.pathname = d.pathname === '/' ? t : on([t, d.pathname])),
                    (u.replace ? n.replace : n.push)(d, u.state, u);
            },
            [t, n, o, i, e]
        )
    );
}
const kv = T.createContext(null);
function Tv(e) {
    let t = T.useContext(Dt).outlet;
    return t && T.createElement(kv.Provider, { value: e }, t);
}
function Sr() {
    let { matches: e } = T.useContext(Dt),
        t = e[e.length - 1];
    return t ? t.params : {};
}
function lh(e, t) {
    let { relative: n } = t === void 0 ? {} : t,
        { matches: r } = T.useContext(Dt),
        { pathname: i } = ys(),
        o = JSON.stringify(nh(r).map((s) => s.pathnameBase));
    return T.useMemo(() => rh(e, JSON.parse(o), i, n === 'path'), [e, o, i, n]);
}
function jv(e, t) {
    return Pv(e, t);
}
function Pv(e, t, n) {
    Ti() || ae(!1);
    let { navigator: r } = T.useContext(wr),
        { matches: i } = T.useContext(Dt),
        o = i[i.length - 1],
        s = o ? o.params : {};
    o && o.pathname;
    let a = o ? o.pathnameBase : '/';
    o && o.route;
    let l = ys(),
        u;
    if (t) {
        var d;
        let x = typeof t == 'string' ? zn(t) : t;
        a === '/' || ((d = x.pathname) != null && d.startsWith(a)) || ae(!1), (u = x);
    } else u = l;
    let f = u.pathname || '/',
        h = a === '/' ? f : f.slice(a.length) || '/',
        g = Z0(e, { pathname: h }),
        y = Lv(
            g &&
                g.map((x) =>
                    Object.assign({}, x, {
                        params: Object.assign({}, s, x.params),
                        pathname: on([a, r.encodeLocation ? r.encodeLocation(x.pathname).pathname : x.pathname]),
                        pathnameBase:
                            x.pathnameBase === '/'
                                ? a
                                : on([a, r.encodeLocation ? r.encodeLocation(x.pathnameBase).pathname : x.pathnameBase]),
                    })
                ),
            i,
            n
        );
    return t && y
        ? T.createElement(
              vs.Provider,
              { value: { location: Wo({ pathname: '/', search: '', hash: '', state: null, key: 'default' }, u), navigationType: Yt.Pop } },
              y
          )
        : y;
}
function _v() {
    let e = Rv(),
        t = xv(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
        o = null;
    return T.createElement(
        T.Fragment,
        null,
        T.createElement('h2', null, 'Unexpected Application Error!'),
        T.createElement('h3', { style: { fontStyle: 'italic' } }, t),
        n ? T.createElement('pre', { style: i }, n) : null,
        o
    );
}
const bv = T.createElement(_v, null);
class Iv extends T.Component {
    constructor(t) {
        super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
    }
    static getDerivedStateFromError(t) {
        return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || (n.revalidation !== 'idle' && t.revalidation === 'idle')
            ? { error: t.error, location: t.location, revalidation: t.revalidation }
            : { error: t.error || n.error, location: n.location, revalidation: t.revalidation || n.revalidation };
    }
    componentDidCatch(t, n) {
        console.error('React Router caught the following error during render', t, n);
    }
    render() {
        return this.state.error
            ? T.createElement(
                  Dt.Provider,
                  { value: this.props.routeContext },
                  T.createElement(oh.Provider, { value: this.state.error, children: this.props.component })
              )
            : this.props.children;
    }
}
function Nv(e) {
    let { routeContext: t, match: n, children: r } = e,
        i = T.useContext(ju);
    return (
        i &&
            i.static &&
            i.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (i.staticContext._deepestRenderedBoundaryId = n.route.id),
        T.createElement(Dt.Provider, { value: t }, r)
    );
}
function Lv(e, t, n) {
    var r;
    if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
        var i;
        if ((i = n) != null && i.errors) e = n.matches;
        else return null;
    }
    let o = e,
        s = (r = n) == null ? void 0 : r.errors;
    if (s != null) {
        let a = o.findIndex((l) => l.route.id && (s == null ? void 0 : s[l.route.id]));
        a >= 0 || ae(!1), (o = o.slice(0, Math.min(o.length, a + 1)));
    }
    return o.reduceRight((a, l, u) => {
        let d = l.route.id ? (s == null ? void 0 : s[l.route.id]) : null,
            f = null;
        n && (f = l.route.errorElement || bv);
        let h = t.concat(o.slice(0, u + 1)),
            g = () => {
                let y;
                return (
                    d
                        ? (y = f)
                        : l.route.Component
                        ? (y = T.createElement(l.route.Component, null))
                        : l.route.element
                        ? (y = l.route.element)
                        : (y = a),
                    T.createElement(Nv, { match: l, routeContext: { outlet: a, matches: h, isDataRoute: n != null }, children: y })
                );
            };
        return n && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
            ? T.createElement(Iv, {
                  location: n.location,
                  revalidation: n.revalidation,
                  component: f,
                  error: d,
                  children: g(),
                  routeContext: { outlet: null, matches: h, isDataRoute: !0 },
              })
            : g();
    }, null);
}
var ah = (function (e) {
        return (e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator'), (e.UseNavigateStable = 'useNavigate'), e;
    })(ah || {}),
    Uo = (function (e) {
        return (
            (e.UseBlocker = 'useBlocker'),
            (e.UseLoaderData = 'useLoaderData'),
            (e.UseActionData = 'useActionData'),
            (e.UseRouteError = 'useRouteError'),
            (e.UseNavigation = 'useNavigation'),
            (e.UseRouteLoaderData = 'useRouteLoaderData'),
            (e.UseMatches = 'useMatches'),
            (e.UseRevalidator = 'useRevalidator'),
            (e.UseNavigateStable = 'useNavigate'),
            (e.UseRouteId = 'useRouteId'),
            e
        );
    })(Uo || {});
function Ov(e) {
    let t = T.useContext(ju);
    return t || ae(!1), t;
}
function Mv(e) {
    let t = T.useContext(Sv);
    return t || ae(!1), t;
}
function zv(e) {
    let t = T.useContext(Dt);
    return t || ae(!1), t;
}
function uh(e) {
    let t = zv(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || ae(!1), n.route.id;
}
function Rv() {
    var e;
    let t = T.useContext(oh),
        n = Mv(Uo.UseRouteError),
        r = uh(Uo.UseRouteError);
    return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Dv() {
    let { router: e } = Ov(ah.UseNavigateStable),
        t = uh(Uo.UseNavigateStable),
        n = T.useRef(!1);
    return (
        sh(() => {
            n.current = !0;
        }),
        T.useCallback(
            function (i, o) {
                o === void 0 && (o = {}), n.current && (typeof i == 'number' ? e.navigate(i) : e.navigate(i, Wo({ fromRouteId: t }, o)));
            },
            [e, t]
        )
    );
}
function Av(e) {
    return Tv(e.context);
}
function B(e) {
    ae(!1);
}
function $v(e) {
    let { basename: t = '/', children: n = null, location: r, navigationType: i = Yt.Pop, navigator: o, static: s = !1 } = e;
    Ti() && ae(!1);
    let a = t.replace(/^\/*/, '/'),
        l = T.useMemo(() => ({ basename: a, navigator: o, static: s }), [a, o, s]);
    typeof r == 'string' && (r = zn(r));
    let { pathname: u = '/', search: d = '', hash: f = '', state: h = null, key: g = 'default' } = r,
        y = T.useMemo(() => {
            let x = Tu(u, a);
            return x == null ? null : { location: { pathname: x, search: d, hash: f, state: h, key: g }, navigationType: i };
        }, [a, u, d, f, h, g, i]);
    return y == null ? null : T.createElement(wr.Provider, { value: l }, T.createElement(vs.Provider, { children: n, value: y }));
}
function Fv(e) {
    let { children: t, location: n } = e;
    return jv(ca(t), n);
}
new Promise(() => {});
function ca(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
        T.Children.forEach(e, (r, i) => {
            if (!T.isValidElement(r)) return;
            let o = [...t, i];
            if (r.type === T.Fragment) {
                n.push.apply(n, ca(r.props.children, o));
                return;
            }
            r.type !== B && ae(!1), !r.props.index || !r.props.children || ae(!1);
            let s = {
                id: r.props.id || o.join('-'),
                caseSensitive: r.props.caseSensitive,
                element: r.props.element,
                Component: r.props.Component,
                index: r.props.index,
                path: r.props.path,
                loader: r.props.loader,
                action: r.props.action,
                errorElement: r.props.errorElement,
                ErrorBoundary: r.props.ErrorBoundary,
                hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
                shouldRevalidate: r.props.shouldRevalidate,
                handle: r.props.handle,
                lazy: r.props.lazy,
            };
            r.props.children && (s.children = ca(r.props.children, o)), n.push(s);
        }),
        n
    );
}
/**
 * React Router DOM v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function da() {
    return (
        (da = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        da.apply(this, arguments)
    );
}
function Bv(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i,
        o;
    for (o = 0; o < r.length; o++) (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n;
}
function Wv(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Uv(e, t) {
    return e.button === 0 && (!t || t === '_self') && !Wv(e);
}
const Vv = ['onClick', 'relative', 'reloadDocument', 'replace', 'state', 'target', 'to', 'preventScrollReset', 'unstable_viewTransition'],
    Hv = 'startTransition',
    td = ml[Hv];
function Gv(e) {
    let { basename: t, children: n, future: r, window: i } = e,
        o = T.useRef();
    o.current == null && (o.current = X0({ window: i, v5Compat: !0 }));
    let s = o.current,
        [a, l] = T.useState({ action: s.action, location: s.location }),
        { v7_startTransition: u } = r || {},
        d = T.useCallback(
            (f) => {
                u && td ? td(() => l(f)) : l(f);
            },
            [l, u]
        );
    return (
        T.useLayoutEffect(() => s.listen(d), [s, d]),
        T.createElement($v, { basename: t, children: n, location: a.location, navigationType: a.action, navigator: s })
    );
}
const Kv = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
    Yv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    U = T.forwardRef(function (t, n) {
        let {
                onClick: r,
                relative: i,
                reloadDocument: o,
                replace: s,
                state: a,
                target: l,
                to: u,
                preventScrollReset: d,
                unstable_viewTransition: f,
            } = t,
            h = Bv(t, Vv),
            { basename: g } = T.useContext(wr),
            y,
            x = !1;
        if (typeof u == 'string' && Yv.test(u) && ((y = u), Kv))
            try {
                let v = new URL(window.location.href),
                    w = u.startsWith('//') ? new URL(v.protocol + u) : new URL(u),
                    E = Tu(w.pathname, g);
                w.origin === v.origin && E != null ? (u = E + w.search + w.hash) : (x = !0);
            } catch {}
        let S = Ev(u, { relative: i }),
            p = Qv(u, { replace: s, state: a, target: l, preventScrollReset: d, relative: i, unstable_viewTransition: f });
        function m(v) {
            r && r(v), v.defaultPrevented || p(v);
        }
        return T.createElement('a', da({}, h, { href: y || S, onClick: x || o ? r : m, ref: n, target: l }));
    });
var nd;
(function (e) {
    (e.UseScrollRestoration = 'useScrollRestoration'),
        (e.UseSubmit = 'useSubmit'),
        (e.UseSubmitFetcher = 'useSubmitFetcher'),
        (e.UseFetcher = 'useFetcher'),
        (e.useViewTransitionState = 'useViewTransitionState');
})(nd || (nd = {}));
var rd;
(function (e) {
    (e.UseFetcher = 'useFetcher'), (e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration');
})(rd || (rd = {}));
function Qv(e, t) {
    let { target: n, replace: r, state: i, preventScrollReset: o, relative: s, unstable_viewTransition: a } = t === void 0 ? {} : t,
        l = pt(),
        u = ys(),
        d = lh(e, { relative: s });
    return T.useCallback(
        (f) => {
            if (Uv(f, n)) {
                f.preventDefault();
                let h = r !== void 0 ? r : Bo(u) === Bo(d);
                l(e, { replace: h, state: i, preventScrollReset: o, relative: s, unstable_viewTransition: a });
            }
        },
        [u, l, d, r, i, n, e, o, s, a]
    );
}
var Ee = function () {
    return (
        (Ee =
            Object.assign ||
            function (t) {
                for (var n, r = 1, i = arguments.length; r < i; r++) {
                    n = arguments[r];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                }
                return t;
            }),
        Ee.apply(this, arguments)
    );
};
function hi(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, i = t.length, o; r < i; r++) (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
    return e.concat(o || Array.prototype.slice.call(t));
}
var q = '-ms-',
    Yr = '-moz-',
    H = '-webkit-',
    ch = 'comm',
    xs = 'rule',
    Pu = 'decl',
    Xv = '@import',
    dh = '@keyframes',
    qv = '@layer',
    Jv = Math.abs,
    _u = String.fromCharCode,
    fa = Object.assign;
function Zv(e, t) {
    return pe(e, 0) ^ 45 ? (((((((t << 2) ^ pe(e, 0)) << 2) ^ pe(e, 1)) << 2) ^ pe(e, 2)) << 2) ^ pe(e, 3) : 0;
}
function fh(e) {
    return e.trim();
}
function kt(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
}
function D(e, t, n) {
    return e.replace(t, n);
}
function co(e, t) {
    return e.indexOf(t);
}
function pe(e, t) {
    return e.charCodeAt(t) | 0;
}
function dr(e, t, n) {
    return e.slice(t, n);
}
function vt(e) {
    return e.length;
}
function ph(e) {
    return e.length;
}
function Rr(e, t) {
    return t.push(e), e;
}
function ey(e, t) {
    return e.map(t).join('');
}
function id(e, t) {
    return e.filter(function (n) {
        return !kt(n, t);
    });
}
var ws = 1,
    fr = 1,
    hh = 0,
    nt = 0,
    se = 0,
    Er = '';
function Ss(e, t, n, r, i, o, s, a) {
    return { value: e, root: t, parent: n, type: r, props: i, children: o, line: ws, column: fr, length: s, return: '', siblings: a };
}
function Bt(e, t) {
    return fa(Ss('', null, null, '', null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Dn(e) {
    for (; e.root; ) e = Bt(e.root, { children: [e] });
    Rr(e, e.siblings);
}
function ty() {
    return se;
}
function ny() {
    return (se = nt > 0 ? pe(Er, --nt) : 0), fr--, se === 10 && ((fr = 1), ws--), se;
}
function ct() {
    return (se = nt < hh ? pe(Er, nt++) : 0), fr++, se === 10 && ((fr = 1), ws++), se;
}
function Tn() {
    return pe(Er, nt);
}
function fo() {
    return nt;
}
function Es(e, t) {
    return dr(Er, e, t);
}
function pa(e) {
    switch (e) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1;
    }
    return 0;
}
function ry(e) {
    return (ws = fr = 1), (hh = vt((Er = e))), (nt = 0), [];
}
function iy(e) {
    return (Er = ''), e;
}
function nl(e) {
    return fh(Es(nt - 1, ha(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function oy(e) {
    for (; (se = Tn()) && se < 33; ) ct();
    return pa(e) > 2 || pa(se) > 3 ? '' : ' ';
}
function sy(e, t) {
    for (; --t && ct() && !(se < 48 || se > 102 || (se > 57 && se < 65) || (se > 70 && se < 97)); );
    return Es(e, fo() + (t < 6 && Tn() == 32 && ct() == 32));
}
function ha(e) {
    for (; ct(); )
        switch (se) {
            case e:
                return nt;
            case 34:
            case 39:
                e !== 34 && e !== 39 && ha(se);
                break;
            case 40:
                e === 41 && ha(e);
                break;
            case 92:
                ct();
                break;
        }
    return nt;
}
function ly(e, t) {
    for (; ct() && e + se !== 47 + 10; ) if (e + se === 42 + 42 && Tn() === 47) break;
    return '/*' + Es(t, nt - 1) + '*' + _u(e === 47 ? e : ct());
}
function ay(e) {
    for (; !pa(Tn()); ) ct();
    return Es(e, nt);
}
function uy(e) {
    return iy(po('', null, null, null, [''], (e = ry(e)), 0, [0], e));
}
function po(e, t, n, r, i, o, s, a, l) {
    for (var u = 0, d = 0, f = s, h = 0, g = 0, y = 0, x = 1, S = 1, p = 1, m = 0, v = '', w = i, E = o, C = r, k = v; S; )
        switch (((y = m), (m = ct()))) {
            case 40:
                if (y != 108 && pe(k, f - 1) == 58) {
                    co((k += D(nl(m), '&', '&\f')), '&\f') != -1 && (p = -1);
                    break;
                }
            case 34:
            case 39:
            case 91:
                k += nl(m);
                break;
            case 9:
            case 10:
            case 13:
            case 32:
                k += oy(y);
                break;
            case 92:
                k += sy(fo() - 1, 7);
                continue;
            case 47:
                switch (Tn()) {
                    case 42:
                    case 47:
                        Rr(cy(ly(ct(), fo()), t, n, l), l);
                        break;
                    default:
                        k += '/';
                }
                break;
            case 123 * x:
                a[u++] = vt(k) * p;
            case 125 * x:
            case 59:
            case 0:
                switch (m) {
                    case 0:
                    case 125:
                        S = 0;
                    case 59 + d:
                        p == -1 && (k = D(k, /\f/g, '')),
                            g > 0 && vt(k) - f && Rr(g > 32 ? sd(k + ';', r, n, f - 1, l) : sd(D(k, ' ', '') + ';', r, n, f - 2, l), l);
                        break;
                    case 59:
                        k += ';';
                    default:
                        if ((Rr((C = od(k, t, n, u, d, i, a, v, (w = []), (E = []), f, o)), o), m === 123))
                            if (d === 0) po(k, t, C, C, w, o, f, a, E);
                            else
                                switch (h === 99 && pe(k, 3) === 110 ? 100 : h) {
                                    case 100:
                                    case 108:
                                    case 109:
                                    case 115:
                                        po(e, C, C, r && Rr(od(e, C, C, 0, 0, i, a, v, i, (w = []), f, E), E), i, E, f, a, r ? w : E);
                                        break;
                                    default:
                                        po(k, C, C, C, [''], E, 0, a, E);
                                }
                }
                (u = d = g = 0), (x = p = 1), (v = k = ''), (f = s);
                break;
            case 58:
                (f = 1 + vt(k)), (g = y);
            default:
                if (x < 1) {
                    if (m == 123) --x;
                    else if (m == 125 && x++ == 0 && ny() == 125) continue;
                }
                switch (((k += _u(m)), m * x)) {
                    case 38:
                        p = d > 0 ? 1 : ((k += '\f'), -1);
                        break;
                    case 44:
                        (a[u++] = (vt(k) - 1) * p), (p = 1);
                        break;
                    case 64:
                        Tn() === 45 && (k += nl(ct())), (h = Tn()), (d = f = vt((v = k += ay(fo())))), m++;
                        break;
                    case 45:
                        y === 45 && vt(k) == 2 && (x = 0);
                }
        }
    return o;
}
function od(e, t, n, r, i, o, s, a, l, u, d, f) {
    for (var h = i - 1, g = i === 0 ? o : [''], y = ph(g), x = 0, S = 0, p = 0; x < r; ++x)
        for (var m = 0, v = dr(e, h + 1, (h = Jv((S = s[x])))), w = e; m < y; ++m)
            (w = fh(S > 0 ? g[m] + ' ' + v : D(v, /&\f/g, g[m]))) && (l[p++] = w);
    return Ss(e, t, n, i === 0 ? xs : a, l, u, d, f);
}
function cy(e, t, n, r) {
    return Ss(e, t, n, ch, _u(ty()), dr(e, 2, -2), 0, r);
}
function sd(e, t, n, r, i) {
    return Ss(e, t, n, Pu, dr(e, 0, r), dr(e, r + 1, -1), r, i);
}
function mh(e, t, n) {
    switch (Zv(e, t)) {
        case 5103:
            return H + 'print-' + e + e;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return H + e + e;
        case 4789:
            return Yr + e + e;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return H + e + Yr + e + q + e + e;
        case 5936:
            switch (pe(e, t + 11)) {
                case 114:
                    return H + e + q + D(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
                case 108:
                    return H + e + q + D(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
                case 45:
                    return H + e + q + D(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
            }
        case 6828:
        case 4268:
        case 2903:
            return H + e + q + e + e;
        case 6165:
            return H + e + q + 'flex-' + e + e;
        case 5187:
            return H + e + D(e, /(\w+).+(:[^]+)/, H + 'box-$1$2' + q + 'flex-$1$2') + e;
        case 5443:
            return (
                H +
                e +
                q +
                'flex-item-' +
                D(e, /flex-|-self/g, '') +
                (kt(e, /flex-|baseline/) ? '' : q + 'grid-row-' + D(e, /flex-|-self/g, '')) +
                e
            );
        case 4675:
            return H + e + q + 'flex-line-pack' + D(e, /align-content|flex-|-self/g, '') + e;
        case 5548:
            return H + e + q + D(e, 'shrink', 'negative') + e;
        case 5292:
            return H + e + q + D(e, 'basis', 'preferred-size') + e;
        case 6060:
            return H + 'box-' + D(e, '-grow', '') + H + e + q + D(e, 'grow', 'positive') + e;
        case 4554:
            return H + D(e, /([^-])(transform)/g, '$1' + H + '$2') + e;
        case 6187:
            return D(D(D(e, /(zoom-|grab)/, H + '$1'), /(image-set)/, H + '$1'), e, '') + e;
        case 5495:
        case 3959:
            return D(e, /(image-set\([^]*)/, H + '$1$`$1');
        case 4968:
            return D(D(e, /(.+:)(flex-)?(.*)/, H + 'box-pack:$3' + q + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + H + e + e;
        case 4200:
            if (!kt(e, /flex-|baseline/)) return q + 'grid-column-align' + dr(e, t) + e;
            break;
        case 2592:
        case 3360:
            return q + D(e, 'template-', '') + e;
        case 4384:
        case 3616:
            return n &&
                n.some(function (r, i) {
                    return (t = i), kt(r.props, /grid-\w+-end/);
                })
                ? ~co(e + (n = n[t].value), 'span')
                    ? e
                    : q +
                      D(e, '-start', '') +
                      e +
                      q +
                      'grid-row-span:' +
                      (~co(n, 'span') ? kt(n, /\d+/) : +kt(n, /\d+/) - +kt(e, /\d+/)) +
                      ';'
                : q + D(e, '-start', '') + e;
        case 4896:
        case 4128:
            return n &&
                n.some(function (r) {
                    return kt(r.props, /grid-\w+-start/);
                })
                ? e
                : q + D(D(e, '-end', '-span'), 'span ', '') + e;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return D(e, /(.+)-inline(.+)/, H + '$1$2') + e;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            if (vt(e) - 1 - t > 6)
                switch (pe(e, t + 1)) {
                    case 109:
                        if (pe(e, t + 4) !== 45) break;
                    case 102:
                        return D(e, /(.+:)(.+)-([^]+)/, '$1' + H + '$2-$3$1' + Yr + (pe(e, t + 3) == 108 ? '$3' : '$2-$3')) + e;
                    case 115:
                        return ~co(e, 'stretch') ? mh(D(e, 'stretch', 'fill-available'), t, n) + e : e;
                }
            break;
        case 5152:
        case 5920:
            return D(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (r, i, o, s, a, l, u) {
                return q + i + ':' + o + u + (s ? q + i + '-span:' + (a ? l : +l - +o) + u : '') + e;
            });
        case 4949:
            if (pe(e, t + 6) === 121) return D(e, ':', ':' + H) + e;
            break;
        case 6444:
            switch (pe(e, pe(e, 14) === 45 ? 18 : 11)) {
                case 120:
                    return (
                        D(
                            e,
                            /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                            '$1' + H + (pe(e, 14) === 45 ? 'inline-' : '') + 'box$3$1' + H + '$2$3$1' + q + '$2box$3'
                        ) + e
                    );
                case 100:
                    return D(e, ':', ':' + q) + e;
            }
            break;
        case 5719:
        case 2647:
        case 2135:
        case 3927:
        case 2391:
            return D(e, 'scroll-', 'scroll-snap-') + e;
    }
    return e;
}
function Vo(e, t) {
    for (var n = '', r = 0; r < e.length; r++) n += t(e[r], r, e, t) || '';
    return n;
}
function dy(e, t, n, r) {
    switch (e.type) {
        case qv:
            if (e.children.length) break;
        case Xv:
        case Pu:
            return (e.return = e.return || e.value);
        case ch:
            return '';
        case dh:
            return (e.return = e.value + '{' + Vo(e.children, r) + '}');
        case xs:
            if (!vt((e.value = e.props.join(',')))) return '';
    }
    return vt((n = Vo(e.children, r))) ? (e.return = e.value + '{' + n + '}') : '';
}
function fy(e) {
    var t = ph(e);
    return function (n, r, i, o) {
        for (var s = '', a = 0; a < t; a++) s += e[a](n, r, i, o) || '';
        return s;
    };
}
function py(e) {
    return function (t) {
        t.root || ((t = t.return) && e(t));
    };
}
function hy(e, t, n, r) {
    if (e.length > -1 && !e.return)
        switch (e.type) {
            case Pu:
                e.return = mh(e.value, e.length, n);
                return;
            case dh:
                return Vo([Bt(e, { value: D(e.value, '@', '@' + H) })], r);
            case xs:
                if (e.length)
                    return ey((n = e.props), function (i) {
                        switch (kt(i, (r = /(::plac\w+|:read-\w+)/))) {
                            case ':read-only':
                            case ':read-write':
                                Dn(Bt(e, { props: [D(i, /:(read-\w+)/, ':' + Yr + '$1')] })),
                                    Dn(Bt(e, { props: [i] })),
                                    fa(e, { props: id(n, r) });
                                break;
                            case '::placeholder':
                                Dn(Bt(e, { props: [D(i, /:(plac\w+)/, ':' + H + 'input-$1')] })),
                                    Dn(Bt(e, { props: [D(i, /:(plac\w+)/, ':' + Yr + '$1')] })),
                                    Dn(Bt(e, { props: [D(i, /:(plac\w+)/, q + 'input-$1')] })),
                                    Dn(Bt(e, { props: [i] })),
                                    fa(e, { props: id(n, r) });
                                break;
                        }
                        return '';
                    });
        }
}
var my = {
        animationIterationCount: 1,
        aspectRatio: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
    },
    ze = {},
    pr = (typeof process < 'u' && ze !== void 0 && (ze.REACT_APP_SC_ATTR || ze.SC_ATTR)) || 'data-styled',
    bu = typeof window < 'u' && 'HTMLElement' in window,
    gy = !!(typeof SC_DISABLE_SPEEDY == 'boolean'
        ? SC_DISABLE_SPEEDY
        : typeof process < 'u' && ze !== void 0 && ze.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && ze.REACT_APP_SC_DISABLE_SPEEDY !== ''
        ? ze.REACT_APP_SC_DISABLE_SPEEDY !== 'false' && ze.REACT_APP_SC_DISABLE_SPEEDY
        : typeof process < 'u' &&
          ze !== void 0 &&
          ze.SC_DISABLE_SPEEDY !== void 0 &&
          ze.SC_DISABLE_SPEEDY !== '' &&
          ze.SC_DISABLE_SPEEDY !== 'false' &&
          ze.SC_DISABLE_SPEEDY),
    vy = {},
    Cs = Object.freeze([]),
    hr = Object.freeze({});
function gh(e, t, n) {
    return n === void 0 && (n = hr), (e.theme !== n.theme && e.theme) || t || n.theme;
}
var vh = new Set([
        'a',
        'abbr',
        'address',
        'area',
        'article',
        'aside',
        'audio',
        'b',
        'base',
        'bdi',
        'bdo',
        'big',
        'blockquote',
        'body',
        'br',
        'button',
        'canvas',
        'caption',
        'cite',
        'code',
        'col',
        'colgroup',
        'data',
        'datalist',
        'dd',
        'del',
        'details',
        'dfn',
        'dialog',
        'div',
        'dl',
        'dt',
        'em',
        'embed',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'header',
        'hgroup',
        'hr',
        'html',
        'i',
        'iframe',
        'img',
        'input',
        'ins',
        'kbd',
        'keygen',
        'label',
        'legend',
        'li',
        'link',
        'main',
        'map',
        'mark',
        'menu',
        'menuitem',
        'meta',
        'meter',
        'nav',
        'noscript',
        'object',
        'ol',
        'optgroup',
        'option',
        'output',
        'p',
        'param',
        'picture',
        'pre',
        'progress',
        'q',
        'rp',
        'rt',
        'ruby',
        's',
        'samp',
        'script',
        'section',
        'select',
        'small',
        'source',
        'span',
        'strong',
        'style',
        'sub',
        'summary',
        'sup',
        'table',
        'tbody',
        'td',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'time',
        'tr',
        'track',
        'u',
        'ul',
        'use',
        'var',
        'video',
        'wbr',
        'circle',
        'clipPath',
        'defs',
        'ellipse',
        'foreignObject',
        'g',
        'image',
        'line',
        'linearGradient',
        'marker',
        'mask',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialGradient',
        'rect',
        'stop',
        'svg',
        'text',
        'tspan',
    ]),
    yy = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    xy = /(^-|-$)/g;
function ld(e) {
    return e.replace(yy, '-').replace(xy, '');
}
var wy = /(a)(d)/gi,
    ad = function (e) {
        return String.fromCharCode(e + (e > 25 ? 39 : 97));
    };
function ma(e) {
    var t,
        n = '';
    for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = ad(t % 52) + n;
    return (ad(t % 52) + n).replace(wy, '$1-$2');
}
var rl,
    Xn = function (e, t) {
        for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
        return e;
    },
    yh = function (e) {
        return Xn(5381, e);
    };
function xh(e) {
    return ma(yh(e) >>> 0);
}
function Sy(e) {
    return e.displayName || e.name || 'Component';
}
function il(e) {
    return typeof e == 'string' && !0;
}
var wh = typeof Symbol == 'function' && Symbol.for,
    Sh = wh ? Symbol.for('react.memo') : 60115,
    Ey = wh ? Symbol.for('react.forward_ref') : 60112,
    Cy = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
    },
    ky = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
    Eh = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    Ty = (((rl = {})[Ey] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }), (rl[Sh] = Eh), rl);
function ud(e) {
    return ('type' in (t = e) && t.type.$$typeof) === Sh ? Eh : '$$typeof' in e ? Ty[e.$$typeof] : Cy;
    var t;
}
var jy = Object.defineProperty,
    Py = Object.getOwnPropertyNames,
    cd = Object.getOwnPropertySymbols,
    _y = Object.getOwnPropertyDescriptor,
    by = Object.getPrototypeOf,
    dd = Object.prototype;
function Ch(e, t, n) {
    if (typeof t != 'string') {
        if (dd) {
            var r = by(t);
            r && r !== dd && Ch(e, r, n);
        }
        var i = Py(t);
        cd && (i = i.concat(cd(t)));
        for (var o = ud(e), s = ud(t), a = 0; a < i.length; ++a) {
            var l = i[a];
            if (!(l in ky || (n && n[l]) || (s && l in s) || (o && l in o))) {
                var u = _y(t, l);
                try {
                    jy(e, l, u);
                } catch {}
            }
        }
    }
    return e;
}
function mr(e) {
    return typeof e == 'function';
}
function Iu(e) {
    return typeof e == 'object' && 'styledComponentId' in e;
}
function En(e, t) {
    return e && t ? ''.concat(e, ' ').concat(t) : e || t || '';
}
function ga(e, t) {
    if (e.length === 0) return '';
    for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
    return n;
}
function mi(e) {
    return e !== null && typeof e == 'object' && e.constructor.name === Object.name && !('props' in e && e.$$typeof);
}
function va(e, t, n) {
    if ((n === void 0 && (n = !1), !n && !mi(e) && !Array.isArray(e))) return t;
    if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = va(e[r], t[r]);
    else if (mi(t)) for (var r in t) e[r] = va(e[r], t[r]);
    return e;
}
function Nu(e, t) {
    Object.defineProperty(e, 'toString', { value: t });
}
function ji(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return new Error(
        'An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#'
            .concat(e, ' for more information.')
            .concat(t.length > 0 ? ' Args: '.concat(t.join(', ')) : '')
    );
}
var Iy = (function () {
        function e(t) {
            (this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = t);
        }
        return (
            (e.prototype.indexOfGroup = function (t) {
                for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
                return n;
            }),
            (e.prototype.insertRules = function (t, n) {
                if (t >= this.groupSizes.length) {
                    for (var r = this.groupSizes, i = r.length, o = i; t >= o; ) if ((o <<= 1) < 0) throw ji(16, ''.concat(t));
                    (this.groupSizes = new Uint32Array(o)), this.groupSizes.set(r), (this.length = o);
                    for (var s = i; s < o; s++) this.groupSizes[s] = 0;
                }
                for (var a = this.indexOfGroup(t + 1), l = ((s = 0), n.length); s < l; s++)
                    this.tag.insertRule(a, n[s]) && (this.groupSizes[t]++, a++);
            }),
            (e.prototype.clearGroup = function (t) {
                if (t < this.length) {
                    var n = this.groupSizes[t],
                        r = this.indexOfGroup(t),
                        i = r + n;
                    this.groupSizes[t] = 0;
                    for (var o = r; o < i; o++) this.tag.deleteRule(r);
                }
            }),
            (e.prototype.getGroup = function (t) {
                var n = '';
                if (t >= this.length || this.groupSizes[t] === 0) return n;
                for (var r = this.groupSizes[t], i = this.indexOfGroup(t), o = i + r, s = i; s < o; s++)
                    n += ''.concat(this.tag.getRule(s)).concat(`/*!sc*/
`);
                return n;
            }),
            e
        );
    })(),
    ho = new Map(),
    Ho = new Map(),
    mo = 1,
    Ki = function (e) {
        if (ho.has(e)) return ho.get(e);
        for (; Ho.has(mo); ) mo++;
        var t = mo++;
        return ho.set(e, t), Ho.set(t, e), t;
    },
    Ny = function (e, t) {
        (mo = t + 1), ho.set(e, t), Ho.set(t, e);
    },
    Ly = 'style['.concat(pr, '][').concat('data-styled-version', '="').concat('6.1.1', '"]'),
    Oy = new RegExp('^'.concat(pr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),
    My = function (e, t, n) {
        for (var r, i = n.split(','), o = 0, s = i.length; o < s; o++) (r = i[o]) && e.registerName(t, r);
    },
    zy = function (e, t) {
        for (
            var n,
                r = ((n = t.textContent) !== null && n !== void 0 ? n : '').split(`/*!sc*/
`),
                i = [],
                o = 0,
                s = r.length;
            o < s;
            o++
        ) {
            var a = r[o].trim();
            if (a) {
                var l = a.match(Oy);
                if (l) {
                    var u = 0 | parseInt(l[1], 10),
                        d = l[2];
                    u !== 0 && (Ny(d, u), My(e, d, l[3]), e.getTag().insertRules(u, i)), (i.length = 0);
                } else i.push(a);
            }
        }
    };
function Ry() {
    return typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : null;
}
var kh = function (e) {
        var t = document.head,
            n = e || t,
            r = document.createElement('style'),
            i = (function (a) {
                var l = Array.from(a.querySelectorAll('style['.concat(pr, ']')));
                return l[l.length - 1];
            })(n),
            o = i !== void 0 ? i.nextSibling : null;
        r.setAttribute(pr, 'active'), r.setAttribute('data-styled-version', '6.1.1');
        var s = Ry();
        return s && r.setAttribute('nonce', s), n.insertBefore(r, o), r;
    },
    Dy = (function () {
        function e(t) {
            (this.element = kh(t)),
                this.element.appendChild(document.createTextNode('')),
                (this.sheet = (function (n) {
                    if (n.sheet) return n.sheet;
                    for (var r = document.styleSheets, i = 0, o = r.length; i < o; i++) {
                        var s = r[i];
                        if (s.ownerNode === n) return s;
                    }
                    throw ji(17);
                })(this.element)),
                (this.length = 0);
        }
        return (
            (e.prototype.insertRule = function (t, n) {
                try {
                    return this.sheet.insertRule(n, t), this.length++, !0;
                } catch {
                    return !1;
                }
            }),
            (e.prototype.deleteRule = function (t) {
                this.sheet.deleteRule(t), this.length--;
            }),
            (e.prototype.getRule = function (t) {
                var n = this.sheet.cssRules[t];
                return n && n.cssText ? n.cssText : '';
            }),
            e
        );
    })(),
    Ay = (function () {
        function e(t) {
            (this.element = kh(t)), (this.nodes = this.element.childNodes), (this.length = 0);
        }
        return (
            (e.prototype.insertRule = function (t, n) {
                if (t <= this.length && t >= 0) {
                    var r = document.createTextNode(n);
                    return this.element.insertBefore(r, this.nodes[t] || null), this.length++, !0;
                }
                return !1;
            }),
            (e.prototype.deleteRule = function (t) {
                this.element.removeChild(this.nodes[t]), this.length--;
            }),
            (e.prototype.getRule = function (t) {
                return t < this.length ? this.nodes[t].textContent : '';
            }),
            e
        );
    })(),
    $y = (function () {
        function e(t) {
            (this.rules = []), (this.length = 0);
        }
        return (
            (e.prototype.insertRule = function (t, n) {
                return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
            }),
            (e.prototype.deleteRule = function (t) {
                this.rules.splice(t, 1), this.length--;
            }),
            (e.prototype.getRule = function (t) {
                return t < this.length ? this.rules[t] : '';
            }),
            e
        );
    })(),
    fd = bu,
    Fy = { isServer: !bu, useCSSOMInjection: !gy },
    Go = (function () {
        function e(t, n, r) {
            t === void 0 && (t = hr), n === void 0 && (n = {});
            var i = this;
            (this.options = Ee(Ee({}, Fy), t)),
                (this.gs = n),
                (this.names = new Map(r)),
                (this.server = !!t.isServer),
                !this.server &&
                    bu &&
                    fd &&
                    ((fd = !1),
                    (function (o) {
                        for (var s = document.querySelectorAll(Ly), a = 0, l = s.length; a < l; a++) {
                            var u = s[a];
                            u && u.getAttribute(pr) !== 'active' && (zy(o, u), u.parentNode && u.parentNode.removeChild(u));
                        }
                    })(this)),
                Nu(this, function () {
                    return (function (o) {
                        for (
                            var s = o.getTag(),
                                a = s.length,
                                l = '',
                                u = function (f) {
                                    var h = (function (p) {
                                        return Ho.get(p);
                                    })(f);
                                    if (h === void 0) return 'continue';
                                    var g = o.names.get(h),
                                        y = s.getGroup(f);
                                    if (g === void 0 || y.length === 0) return 'continue';
                                    var x = ''.concat(pr, '.g').concat(f, '[id="').concat(h, '"]'),
                                        S = '';
                                    g !== void 0 &&
                                        g.forEach(function (p) {
                                            p.length > 0 && (S += ''.concat(p, ','));
                                        }),
                                        (l += ''.concat(y).concat(x, '{content:"').concat(S, '"}').concat(`/*!sc*/
`));
                                },
                                d = 0;
                            d < a;
                            d++
                        )
                            u(d);
                        return l;
                    })(i);
                });
        }
        return (
            (e.registerId = function (t) {
                return Ki(t);
            }),
            (e.prototype.reconstructWithOptions = function (t, n) {
                return n === void 0 && (n = !0), new e(Ee(Ee({}, this.options), t), this.gs, (n && this.names) || void 0);
            }),
            (e.prototype.allocateGSInstance = function (t) {
                return (this.gs[t] = (this.gs[t] || 0) + 1);
            }),
            (e.prototype.getTag = function () {
                return (
                    this.tag ||
                    (this.tag =
                        ((t = (function (n) {
                            var r = n.useCSSOMInjection,
                                i = n.target;
                            return n.isServer ? new $y(i) : r ? new Dy(i) : new Ay(i);
                        })(this.options)),
                        new Iy(t)))
                );
                var t;
            }),
            (e.prototype.hasNameForId = function (t, n) {
                return this.names.has(t) && this.names.get(t).has(n);
            }),
            (e.prototype.registerName = function (t, n) {
                if ((Ki(t), this.names.has(t))) this.names.get(t).add(n);
                else {
                    var r = new Set();
                    r.add(n), this.names.set(t, r);
                }
            }),
            (e.prototype.insertRules = function (t, n, r) {
                this.registerName(t, n), this.getTag().insertRules(Ki(t), r);
            }),
            (e.prototype.clearNames = function (t) {
                this.names.has(t) && this.names.get(t).clear();
            }),
            (e.prototype.clearRules = function (t) {
                this.getTag().clearGroup(Ki(t)), this.clearNames(t);
            }),
            (e.prototype.clearTag = function () {
                this.tag = void 0;
            }),
            e
        );
    })(),
    By = /&/g,
    Wy = /^\s*\/\/.*$/gm;
function Th(e, t) {
    return e.map(function (n) {
        return (
            n.type === 'rule' &&
                ((n.value = ''.concat(t, ' ').concat(n.value)),
                (n.value = n.value.replaceAll(',', ','.concat(t, ' '))),
                (n.props = n.props.map(function (r) {
                    return ''.concat(t, ' ').concat(r);
                }))),
            Array.isArray(n.children) && n.type !== '@keyframes' && (n.children = Th(n.children, t)),
            n
        );
    });
}
function Uy(e) {
    var t,
        n,
        r,
        i = e === void 0 ? hr : e,
        o = i.options,
        s = o === void 0 ? hr : o,
        a = i.plugins,
        l = a === void 0 ? Cs : a,
        u = function (h, g, y) {
            return y === n || (y.startsWith(n) && y.endsWith(n) && y.replaceAll(n, '').length > 0) ? '.'.concat(t) : h;
        },
        d = l.slice();
    d.push(function (h) {
        h.type === xs && h.value.includes('&') && (h.props[0] = h.props[0].replace(By, n).replace(r, u));
    }),
        s.prefix && d.push(hy),
        d.push(dy);
    var f = function (h, g, y, x) {
        g === void 0 && (g = ''),
            y === void 0 && (y = ''),
            x === void 0 && (x = '&'),
            (t = x),
            (n = g),
            (r = new RegExp('\\'.concat(n, '\\b'), 'g'));
        var S = h.replace(Wy, ''),
            p = uy(y || g ? ''.concat(y, ' ').concat(g, ' { ').concat(S, ' }') : S);
        s.namespace && (p = Th(p, s.namespace));
        var m = [];
        return (
            Vo(
                p,
                fy(
                    d.concat(
                        py(function (v) {
                            return m.push(v);
                        })
                    )
                )
            ),
            m
        );
    };
    return (
        (f.hash = l.length
            ? l
                  .reduce(function (h, g) {
                      return g.name || ji(15), Xn(h, g.name);
                  }, 5381)
                  .toString()
            : ''),
        f
    );
}
var Vy = new Go(),
    ya = Uy(),
    jh = V.createContext({ shouldForwardProp: void 0, styleSheet: Vy, stylis: ya });
jh.Consumer;
V.createContext(void 0);
function xa() {
    return T.useContext(jh);
}
var Hy = (function () {
        function e(t, n) {
            var r = this;
            (this.inject = function (i, o) {
                o === void 0 && (o = ya);
                var s = r.name + o.hash;
                i.hasNameForId(r.id, s) || i.insertRules(r.id, s, o(r.rules, s, '@keyframes'));
            }),
                (this.name = t),
                (this.id = 'sc-keyframes-'.concat(t)),
                (this.rules = n),
                Nu(this, function () {
                    throw ji(12, String(r.name));
                });
        }
        return (
            (e.prototype.getName = function (t) {
                return t === void 0 && (t = ya), this.name + t.hash;
            }),
            e
        );
    })(),
    Gy = function (e) {
        return e >= 'A' && e <= 'Z';
    };
function pd(e) {
    for (var t = '', n = 0; n < e.length; n++) {
        var r = e[n];
        if (n === 1 && r === '-' && e[0] === '-') return e;
        Gy(r) ? (t += '-' + r.toLowerCase()) : (t += r);
    }
    return t.startsWith('ms-') ? '-' + t : t;
}
var Ph = function (e) {
        return e == null || e === !1 || e === '';
    },
    _h = function (e) {
        var t,
            n,
            r = [];
        for (var i in e) {
            var o = e[i];
            e.hasOwnProperty(i) &&
                !Ph(o) &&
                ((Array.isArray(o) && o.isCss) || mr(o)
                    ? r.push(''.concat(pd(i), ':'), o, ';')
                    : mi(o)
                    ? r.push.apply(r, hi(hi([''.concat(i, ' {')], _h(o), !1), ['}'], !1))
                    : r.push(
                          ''
                              .concat(pd(i), ': ')
                              .concat(
                                  ((t = i),
                                  (n = o) == null || typeof n == 'boolean' || n === ''
                                      ? ''
                                      : typeof n != 'number' || n === 0 || t in my || t.startsWith('--')
                                      ? String(n).trim()
                                      : ''.concat(n, 'px')),
                                  ';'
                              )
                      ));
        }
        return r;
    };
function sn(e, t, n, r) {
    if (Ph(e)) return [];
    if (Iu(e)) return ['.'.concat(e.styledComponentId)];
    if (mr(e)) {
        if (!mr((o = e)) || (o.prototype && o.prototype.isReactComponent) || !t) return [e];
        var i = e(t);
        return sn(i, t, n, r);
    }
    var o;
    return e instanceof Hy
        ? n
            ? (e.inject(n, r), [e.getName(r)])
            : [e]
        : mi(e)
        ? _h(e)
        : Array.isArray(e)
        ? Array.prototype.concat.apply(
              Cs,
              e.map(function (s) {
                  return sn(s, t, n, r);
              })
          )
        : [e.toString()];
}
function bh(e) {
    for (var t = 0; t < e.length; t += 1) {
        var n = e[t];
        if (mr(n) && !Iu(n)) return !1;
    }
    return !0;
}
var Ky = yh('6.1.1'),
    Yy = (function () {
        function e(t, n, r) {
            (this.rules = t),
                (this.staticRulesId = ''),
                (this.isStatic = (r === void 0 || r.isStatic) && bh(t)),
                (this.componentId = n),
                (this.baseHash = Xn(Ky, n)),
                (this.baseStyle = r),
                Go.registerId(n);
        }
        return (
            (e.prototype.generateAndInjectStyles = function (t, n, r) {
                var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : '';
                if (this.isStatic && !r.hash)
                    if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) i = En(i, this.staticRulesId);
                    else {
                        var o = ga(sn(this.rules, t, n, r)),
                            s = ma(Xn(this.baseHash, o) >>> 0);
                        if (!n.hasNameForId(this.componentId, s)) {
                            var a = r(o, '.'.concat(s), void 0, this.componentId);
                            n.insertRules(this.componentId, s, a);
                        }
                        (i = En(i, s)), (this.staticRulesId = s);
                    }
                else {
                    for (var l = Xn(this.baseHash, r.hash), u = '', d = 0; d < this.rules.length; d++) {
                        var f = this.rules[d];
                        if (typeof f == 'string') u += f;
                        else if (f) {
                            var h = ga(sn(f, t, n, r));
                            (l = Xn(l, h + d)), (u += h);
                        }
                    }
                    if (u) {
                        var g = ma(l >>> 0);
                        n.hasNameForId(this.componentId, g) ||
                            n.insertRules(this.componentId, g, r(u, '.'.concat(g), void 0, this.componentId)),
                            (i = En(i, g));
                    }
                }
                return i;
            }),
            e
        );
    })(),
    Lu = V.createContext(void 0);
Lu.Consumer;
var ol = {};
function Qy(e, t, n) {
    var r = Iu(e),
        i = e,
        o = !il(e),
        s = t.attrs,
        a = s === void 0 ? Cs : s,
        l = t.componentId,
        u =
            l === void 0
                ? (function (w, E) {
                      var C = typeof w != 'string' ? 'sc' : ld(w);
                      ol[C] = (ol[C] || 0) + 1;
                      var k = ''.concat(C, '-').concat(xh('6.1.1' + C + ol[C]));
                      return E ? ''.concat(E, '-').concat(k) : k;
                  })(t.displayName, t.parentComponentId)
                : l,
        d = t.displayName,
        f =
            d === void 0
                ? (function (w) {
                      return il(w) ? 'styled.'.concat(w) : 'Styled('.concat(Sy(w), ')');
                  })(e)
                : d,
        h = t.displayName && t.componentId ? ''.concat(ld(t.displayName), '-').concat(t.componentId) : t.componentId || u,
        g = r && i.attrs ? i.attrs.concat(a).filter(Boolean) : a,
        y = t.shouldForwardProp;
    if (r && i.shouldForwardProp) {
        var x = i.shouldForwardProp;
        if (t.shouldForwardProp) {
            var S = t.shouldForwardProp;
            y = function (w, E) {
                return x(w, E) && S(w, E);
            };
        } else y = x;
    }
    var p = new Yy(n, h, r ? i.componentStyle : void 0);
    function m(w, E) {
        return (function (C, k, _) {
            var b = C.attrs,
                j = C.componentStyle,
                O = C.defaultProps,
                R = C.foldedComponentIds,
                z = C.styledComponentId,
                K = C.target,
                ee = V.useContext(Lu),
                de = xa(),
                Me = C.shouldForwardProp || de.shouldForwardProp,
                P = (function (Ye, St, Qe) {
                    for (var ht, hn = Ee(Ee({}, St), { className: void 0, theme: Qe }), _s = 0; _s < Ye.length; _s += 1) {
                        var bi = mr((ht = Ye[_s])) ? ht(hn) : ht;
                        for (var $t in bi)
                            hn[$t] = $t === 'className' ? En(hn[$t], bi[$t]) : $t === 'style' ? Ee(Ee({}, hn[$t]), bi[$t]) : bi[$t];
                    }
                    return St.className && (hn.className = En(hn.className, St.className)), hn;
                })(b, k, gh(k, ee, O) || hr),
                N = P.as || K,
                L = {};
            for (var A in P)
                P[A] === void 0 ||
                    A[0] === '$' ||
                    A === 'as' ||
                    A === 'theme' ||
                    (A === 'forwardedAs' ? (L.as = P.forwardedAs) : (Me && !Me(A, N)) || (L[A] = P[A]));
            var Y = (function (Ye, St) {
                    var Qe = xa(),
                        ht = Ye.generateAndInjectStyles(St, Qe.styleSheet, Qe.stylis);
                    return ht;
                })(j, P),
                At = En(R, z);
            return (
                Y && (At += ' ' + Y),
                P.className && (At += ' ' + P.className),
                (L[il(N) && !vh.has(N) ? 'class' : 'className'] = At),
                (L.ref = _),
                T.createElement(N, L)
            );
        })(v, w, E);
    }
    m.displayName = f;
    var v = V.forwardRef(m);
    return (
        (v.attrs = g),
        (v.componentStyle = p),
        (v.displayName = f),
        (v.shouldForwardProp = y),
        (v.foldedComponentIds = r ? En(i.foldedComponentIds, i.styledComponentId) : ''),
        (v.styledComponentId = h),
        (v.target = r ? i.target : e),
        Object.defineProperty(v, 'defaultProps', {
            get: function () {
                return this._foldedDefaultProps;
            },
            set: function (w) {
                this._foldedDefaultProps = r
                    ? (function (E) {
                          for (var C = [], k = 1; k < arguments.length; k++) C[k - 1] = arguments[k];
                          for (var _ = 0, b = C; _ < b.length; _++) va(E, b[_], !0);
                          return E;
                      })({}, i.defaultProps, w)
                    : w;
            },
        }),
        Nu(v, function () {
            return '.'.concat(v.styledComponentId);
        }),
        o &&
            Ch(v, e, {
                attrs: !0,
                componentStyle: !0,
                displayName: !0,
                foldedComponentIds: !0,
                shouldForwardProp: !0,
                styledComponentId: !0,
                target: !0,
            }),
        v
    );
}
function hd(e, t) {
    for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1) n.push(t[r], e[r + 1]);
    return n;
}
var md = function (e) {
    return Object.assign(e, { isCss: !0 });
};
function Ou(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    if (mr(e) || mi(e)) {
        var r = e;
        return md(sn(hd(Cs, hi([r], t, !0))));
    }
    var i = e;
    return t.length === 0 && i.length === 1 && typeof i[0] == 'string' ? sn(i) : md(sn(hd(i, t)));
}
function wa(e, t, n) {
    if ((n === void 0 && (n = hr), !t)) throw ji(1, t);
    var r = function (i) {
        for (var o = [], s = 1; s < arguments.length; s++) o[s - 1] = arguments[s];
        return e(t, n, Ou.apply(void 0, hi([i], o, !1)));
    };
    return (
        (r.attrs = function (i) {
            return wa(e, t, Ee(Ee({}, n), { attrs: Array.prototype.concat(n.attrs, i).filter(Boolean) }));
        }),
        (r.withConfig = function (i) {
            return wa(e, t, Ee(Ee({}, n), i));
        }),
        r
    );
}
var Ih = function (e) {
        return wa(Qy, e);
    },
    F = Ih;
vh.forEach(function (e) {
    F[e] = Ih(e);
});
var Xy = (function () {
    function e(t, n) {
        (this.rules = t), (this.componentId = n), (this.isStatic = bh(t)), Go.registerId(this.componentId + 1);
    }
    return (
        (e.prototype.createStyles = function (t, n, r, i) {
            var o = i(ga(sn(this.rules, n, r, i)), ''),
                s = this.componentId + t;
            r.insertRules(s, s, o);
        }),
        (e.prototype.removeStyles = function (t, n) {
            n.clearRules(this.componentId + t);
        }),
        (e.prototype.renderStyles = function (t, n, r, i) {
            t > 2 && Go.registerId(this.componentId + t), this.removeStyles(t, r), this.createStyles(t, n, r, i);
        }),
        e
    );
})();
function Nh(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    var r = Ou.apply(void 0, hi([e], t, !1)),
        i = 'sc-global-'.concat(xh(JSON.stringify(r))),
        o = new Xy(r, i),
        s = function (l) {
            var u = xa(),
                d = V.useContext(Lu),
                f = V.useRef(u.styleSheet.allocateGSInstance(i)).current;
            return (
                u.styleSheet.server && a(f, l, u.styleSheet, d, u.stylis),
                V.useLayoutEffect(
                    function () {
                        if (!u.styleSheet.server)
                            return (
                                a(f, l, u.styleSheet, d, u.stylis),
                                function () {
                                    return o.removeStyles(f, u.styleSheet);
                                }
                            );
                    },
                    [f, l, u.styleSheet, d, u.stylis]
                ),
                null
            );
        };
    function a(l, u, d, f, h) {
        if (o.isStatic) o.renderStyles(l, vy, d, h);
        else {
            var g = Ee(Ee({}, u), { theme: gh(u, f, s.defaultProps) });
            o.renderStyles(l, g, d, h);
        }
    }
    return V.memo(s);
}
var Lh = function (e, t) {
        return Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t), e;
    },
    Oh = Ou(
        gd ||
            (gd = Lh(
                [
                    `
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
// article, aside, details, figcaption, figure,
// footer, header, hgroup, main, menu, nav, section {
//   display: block;
// }
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`,
                ],
                [
                    `
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`,
                ]
            ))
    );
Nh(vd || (vd = Lh(['', ''], ['', ''])), Oh);
var gd, vd;
const qy = Nh`
  ${Oh}
  /* other styles */
  
  body {
    font-size: 16px;
    line-height: 1.6;
    font-family: 'Noto Sans KR', sans-serif;
    color:#333;
  }
  a {
    text-decoration: none;
    color:#333; 
  }
  li { list-style:none }
  img { vertical-align: top; }
  
  .inner { width:1400px; margin:auto; box-sizing:border-box; position:relative }
  .main { width: 100%; }
  .main h2 { text-align: center; font-size: 40px;   margin-bottom: 80px; }
  button { border:none; cursor: pointer; }
`,
    Jy = F.header`
    border-bottom: 1px solid #000;
    background-color: #212121;
    color: #fcc419;
    .inner {
        height: 120px;
    }
    h1 {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        a {
            img {
                width: 100px;
            }
        }
    }
    .login {
        position: absolute;
        right: 150px;
        top: 10px;
        color: blue;
    }
`,
    Zy = F.nav`
    &.nav {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        ul {
            display: flex;
            li {
                margin-left: 90px;
                position: relative;
                a {
                    transition: 0.3s;
                    &:hover {
                        color: tomato;
                    }
                }
                &:last-child span {
                    font-size: 16px;
                    border-radius: 50%;
                    display: block;
                    position: absolute;
                    right: -20px;
                    top: -5px;
                    width: 20px;
                    height: 20px;
                    background-color: #000;
                    color: #fcc419;
                    text-align: center;
                    line-height: 17px;
                }
            }

            .yellowBackImg1 {
                position: relative;
                padding: 10px 20px; /* 글씨 주변 여백 조정 */
            }

            .yellowBackImg1::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-image: url('./images/yellowBackImg1.png');
                background-repeat: no-repeat;
                background-size: 100% 200%; /* 배경 이미지를 요소에 맞게 늘림 */
                background-position: center;
                z-index: -1; /* 텍스트 뒤로 배경 이미지 보내기 */
                transition: opacity 0.3s ease; /* 배경 투명도 전환 효과 */
            }

            .yellowBackImg1 a {
                position: relative;
                z-index: 1; /* 링크 텍스트를 배경 이미지 위로 */
                //color: inherit; /* 링크 색상 유지 */
                color: #212121;
                text-decoration: none; /* 밑줄 제거 */
                display: block; /* 링크를 블록 레벨 요소로 만들어 전체 영역 클릭 가능하게 */
                transition: color 0.3s ease; /* 글자색 전환 효과 */
            }

            /* 호버 효과 */
            .yellowBackImg1:hover::before {
                opacity: 0; /* 배경 이미지 숨기기 */
            }

            .yellowBackImg1:hover a {
                color: #fcc419; /* 호버 시 글자색 변경 */
            }
        }
    }
`,
    e1 = F.ul`
    &.top-menu {
        position: absolute;
        right: 0;
        top: 10px;
        display: flex;
        li {
            margin-left: 25px;
            a {
                color: #fcc419;
                font-size: 15px;
            }
        }
    }
`;
var Mh = { exports: {} },
    zh = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pi = T;
function t1(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var n1 = typeof Object.is == 'function' ? Object.is : t1,
    r1 = Pi.useSyncExternalStore,
    i1 = Pi.useRef,
    o1 = Pi.useEffect,
    s1 = Pi.useMemo,
    l1 = Pi.useDebugValue;
zh.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
    var o = i1(null);
    if (o.current === null) {
        var s = { hasValue: !1, value: null };
        o.current = s;
    } else s = o.current;
    o = s1(
        function () {
            function l(g) {
                if (!u) {
                    if (((u = !0), (d = g), (g = r(g)), i !== void 0 && s.hasValue)) {
                        var y = s.value;
                        if (i(y, g)) return (f = y);
                    }
                    return (f = g);
                }
                if (((y = f), n1(d, g))) return y;
                var x = r(g);
                return i !== void 0 && i(y, x) ? y : ((d = g), (f = x));
            }
            var u = !1,
                d,
                f,
                h = n === void 0 ? null : n;
            return [
                function () {
                    return l(t());
                },
                h === null
                    ? void 0
                    : function () {
                          return l(h());
                      },
            ];
        },
        [t, n, r, i]
    );
    var a = r1(e, o[0], o[1]);
    return (
        o1(
            function () {
                (s.hasValue = !0), (s.value = a);
            },
            [a]
        ),
        l1(a),
        a
    );
};
Mh.exports = zh;
var a1 = Mh.exports;
function u1(e) {
    e();
}
var Rh = u1,
    c1 = (e) => (Rh = e),
    d1 = () => Rh,
    $e = 'default' in ml ? V : ml,
    yd = Symbol.for('react-redux-context'),
    xd = typeof globalThis < 'u' ? globalThis : {};
function f1() {
    if (!$e.createContext) return {};
    const e = xd[yd] ?? (xd[yd] = new Map());
    let t = e.get($e.createContext);
    return t || ((t = $e.createContext(null)), e.set($e.createContext, t)), t;
}
var un = f1(),
    p1 = () => {
        throw new Error('uSES not initialized!');
    };
function Mu(e = un) {
    return function () {
        return $e.useContext(e);
    };
}
var Dh = Mu(),
    Ah = p1,
    h1 = (e) => {
        Ah = e;
    },
    m1 = (e, t) => e === t;
function g1(e = un) {
    const t = e === un ? Dh : Mu(e);
    return function (r, i = {}) {
        const { equalityFn: o = m1, devModeChecks: s = {} } = typeof i == 'function' ? { equalityFn: i } : i,
            { store: a, subscription: l, getServerState: u, stabilityCheck: d, identityFunctionCheck: f } = t();
        $e.useRef(!0);
        const h = $e.useCallback(
                {
                    [r.name](y) {
                        return r(y);
                    },
                }[r.name],
                [r, d, s.stabilityCheck]
            ),
            g = Ah(l.addNestedSub, a.getState, u || a.getState, h, o);
        return $e.useDebugValue(g), g;
    };
}
var ke = g1();
function v1() {
    const e = d1();
    let t = null,
        n = null;
    return {
        clear() {
            (t = null), (n = null);
        },
        notify() {
            e(() => {
                let r = t;
                for (; r; ) r.callback(), (r = r.next);
            });
        },
        get() {
            let r = [],
                i = t;
            for (; i; ) r.push(i), (i = i.next);
            return r;
        },
        subscribe(r) {
            let i = !0,
                o = (n = { callback: r, next: null, prev: n });
            return (
                o.prev ? (o.prev.next = o) : (t = o),
                function () {
                    !i ||
                        t === null ||
                        ((i = !1), o.next ? (o.next.prev = o.prev) : (n = o.prev), o.prev ? (o.prev.next = o.next) : (t = o.next));
                }
            );
        },
    };
}
var wd = { notify() {}, get: () => [] };
function y1(e, t) {
    let n,
        r = wd,
        i = 0,
        o = !1;
    function s(x) {
        d();
        const S = r.subscribe(x);
        let p = !1;
        return () => {
            p || ((p = !0), S(), f());
        };
    }
    function a() {
        r.notify();
    }
    function l() {
        y.onStateChange && y.onStateChange();
    }
    function u() {
        return o;
    }
    function d() {
        i++, n || ((n = t ? t.addNestedSub(l) : e.subscribe(l)), (r = v1()));
    }
    function f() {
        i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = wd));
    }
    function h() {
        o || ((o = !0), d());
    }
    function g() {
        o && ((o = !1), f());
    }
    const y = {
        addNestedSub: s,
        notifyNestedSubs: a,
        handleChangeWrapper: l,
        isSubscribed: u,
        trySubscribe: h,
        tryUnsubscribe: g,
        getListeners: () => r,
    };
    return y;
}
var x1 = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
    w1 = x1 ? $e.useLayoutEffect : $e.useEffect;
function S1({ store: e, context: t, children: n, serverState: r, stabilityCheck: i = 'once', identityFunctionCheck: o = 'once' }) {
    const s = $e.useMemo(() => {
            const u = y1(e);
            return { store: e, subscription: u, getServerState: r ? () => r : void 0, stabilityCheck: i, identityFunctionCheck: o };
        }, [e, r, i, o]),
        a = $e.useMemo(() => e.getState(), [e]);
    w1(() => {
        const { subscription: u } = s;
        return (
            (u.onStateChange = u.notifyNestedSubs),
            u.trySubscribe(),
            a !== e.getState() && u.notifyNestedSubs(),
            () => {
                u.tryUnsubscribe(), (u.onStateChange = void 0);
            }
        );
    }, [s, a]);
    const l = t || un;
    return $e.createElement(l.Provider, { value: s }, n);
}
var E1 = S1;
function $h(e = un) {
    const t = e === un ? Dh : Mu(e);
    return function () {
        const { store: r } = t();
        return r;
    };
}
var C1 = $h();
function k1(e = un) {
    const t = e === un ? C1 : $h(e);
    return function () {
        return t().dispatch;
    };
}
var Ge = k1();
h1(a1.useSyncExternalStoreWithSelector);
c1(Zp.unstable_batchedUpdates);
const T1 = () => {
        const { carts: e } = ke((n) => n.cart),
            { login: t } = ke((n) => n.auth);
        return c.jsxs(c.Fragment, {
            children: [
                c.jsx(Zy, {
                    className: 'nav',
                    children: c.jsxs('ul', {
                        children: [
                            c.jsx('li', { className: 'yellowBackImg1', children: c.jsx(U, { to: '/about', children: 'About' }) }),
                            c.jsx('li', { className: 'yellowBackImg1', children: c.jsx(U, { to: '/models', children: 'Models' }) }),
                            c.jsx('li', { className: 'yellowBackImg1', children: c.jsx(U, { to: '/product', children: 'Product' }) }),
                            c.jsx('li', { className: 'yellowBackImg1', children: c.jsx(U, { to: '/notice', children: 'Notice' }) }),
                            c.jsx('li', { className: 'yellowBackImg1', children: c.jsx(U, { to: '/customer', children: 'Customer' }) }),
                            c.jsx('li', { className: 'yellowBackImg1', children: c.jsx(U, { to: '/mypage', children: 'Mypage' }) }),
                            c.jsx('li', {
                                className: 'yellowBackImg1',
                                children: c.jsxs(U, {
                                    to: '/cart',
                                    children: ['Cart ', c.jsxs('span', { children: [' ', e.length, ' '] })],
                                }),
                            }),
                        ],
                    }),
                }),
                c.jsxs(e1, {
                    className: 'top-menu',
                    children: [
                        c.jsx('li', { children: t ? '' : c.jsx(U, { to: '/join', children: 'Join' }) }),
                        c.jsx('li', {
                            children: t ? c.jsx(U, { to: '/logout', children: 'Logout' }) : c.jsx(U, { to: '/login', children: 'Login' }),
                        }),
                    ],
                }),
            ],
        });
    },
    j1 = () =>
        c.jsx(Jy, {
            children: c.jsxs('div', {
                className: 'inner',
                children: [
                    c.jsx('h1', {
                        children: c.jsx(U, {
                            to: '/',
                            children: c.jsx('img', { src: './images/lamborghini_logo.svg', alt: 'lamborghini_logo' }),
                        }),
                    }),
                    c.jsx(T1, {}),
                ],
            }),
        }),
    P1 = F.footer`
    background-color: #212121;
    .inner {
        height: 150px;
    }
    .info {
        display:flex;

        li {
            padding: 60px;
            font-size: 20px;

            a {
                color: #FCC419;
                transition: 0.3s;

                &:hover {
                    color: tomato;
                }
            }
            
        }
    }

    .family {
        position: absolute;
        top: 35px;
        right: 0;
        display:flex;

        li {
            padding: 20px;
            font-size: 20px;

            a {
                
                img {
                    width: 30px;
                    transition: 0.5s;
                    &:hover {
                        transform: rotate(360deg);
                    }
                }
            }
        }
    }

`,
    _1 = () =>
        c.jsx(P1, {
            children: c.jsxs('div', {
                className: 'inner',
                children: [
                    c.jsxs('ul', {
                        className: 'info',
                        children: [
                            c.jsx('li', { children: c.jsx(U, { to: '/financials', children: 'Financials' }) }),
                            c.jsx('li', { children: c.jsx(U, { to: '/contactUs', children: 'ContactUs' }) }),
                            c.jsx('li', { children: c.jsx(U, { to: '/careers', children: 'Careers' }) }),
                        ],
                    }),
                    c.jsxs('ul', {
                        className: 'family',
                        children: [
                            c.jsx('li', {
                                children: c.jsx(U, {
                                    to: 'https://www.instagram.com/lamborghini/?hl=en',
                                    target: 'blank',
                                    children: c.jsx('img', { src: './images/brandIcon/instagram.png', alt: 'insta' }),
                                }),
                            }),
                            c.jsx('li', {
                                children: c.jsx(U, {
                                    to: 'https://www.threads.net/@lamborghini',
                                    target: 'blank',
                                    children: c.jsx('img', { src: './images/brandIcon/thread.png', alt: 'thread' }),
                                }),
                            }),
                            c.jsx('li', {
                                children: c.jsx(U, {
                                    to: 'https://www.facebook.com/Lamborghini/',
                                    target: 'blank',
                                    children: c.jsx('img', { src: './images/brandIcon/facebook.png', alt: 'facebook' }),
                                }),
                            }),
                            c.jsx('li', {
                                children: c.jsx(U, {
                                    to: 'https://www.youtube.com/channel/UC9DXZC8BCDOW6pYAQKgozqw',
                                    target: 'blank',
                                    children: c.jsx('img', { src: './images/brandIcon/youtube.png', alt: 'youtube' }),
                                }),
                            }),
                            c.jsx('li', {
                                children: c.jsx(U, {
                                    to: 'https://x.com/Lamborghini',
                                    target: 'blank',
                                    children: c.jsx('img', { src: './images/brandIcon/X.png', alt: 'X' }),
                                }),
                            }),
                            c.jsx('li', {
                                children: c.jsx(U, {
                                    to: 'https://www.tiktok.com/@lamborghini?lang=en',
                                    target: 'blank',
                                    children: c.jsx('img', { src: './images/brandIcon/tiktok.png', alt: 'tiktok' }),
                                }),
                            }),
                            c.jsx('li', {
                                children: c.jsx(U, {
                                    to: 'https://www.linkedin.com/company/automobili-lamborghini-s-p-a-',
                                    target: 'blank',
                                    children: c.jsx('img', { src: './images/brandIcon/linkedin.png', alt: 'linkedin' }),
                                }),
                            }),
                            c.jsx('li', {
                                children: c.jsx(U, {
                                    to: 'https://discord.com/invite/vet6ZBjpFd',
                                    target: 'blank',
                                    children: c.jsx('img', { src: './images/brandIcon/discord.png', alt: 'discord' }),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    b1 = () =>
        c.jsxs('div', {
            className: 'wrap',
            children: [c.jsx(j1, {}), c.jsx('main', { className: 'main', children: c.jsx(Av, {}) }), c.jsx(_1, {})],
        }),
    I1 = F.div`
    .inner {
        padding: 100px 0;
    }
    h2 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 50px;
    }
`,
    N1 = () =>
        c.jsx(I1, { children: c.jsx('div', { className: 'inner', children: c.jsx('h2', { children: '페이지 찾을수 없습니다.' }) }) }),
    L1 = F.div`
    &.main {
    }
    .inner {
        padding: 100px 0;
    }
    h2 {
        font-size: 30px;
        font-weight: 700;
    }
`,
    O1 = F.div`
    .videoDiv {
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;

        .backgroundVideo {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 30px;
        color: #fcc419;

        .firstHeading {
            user-select: none;
            font-size: 50px;
            margin-top: 33%;
        }

        .secondHeading {
            user-select: none;
            font-size: 35px;
            margin-right: 50px;
        }
    }
`,
    M1 = F.div`
    background: #efefef;
    .inner {}
    h2 {}

`,
    z1 = () => c.jsx(M1, { children: c.jsx('div', { className: 'inner', children: c.jsx('h2', { children: ' 컨텐츠1 제목 ' }) }) }),
    R1 = () => c.jsx('div', { children: c.jsx('div', { className: 'inner', children: c.jsx('h2', { children: ' 컨텐츠2 제목 ' }) }) }),
    D1 = () =>
        c.jsxs(c.Fragment, {
            children: [
                c.jsx(O1, {
                    children: c.jsxs('div', {
                        className: 'videoDiv',
                        children: [
                            c.jsx('video', {
                                autoPlay: !0,
                                muted: !0,
                                loop: !0,
                                className: 'backgroundVideo',
                                children: c.jsx('source', { src: './images/Officia.mp4', type: 'video/mp4' }),
                            }),
                            c.jsxs('div', {
                                className: 'inner',
                                children: [
                                    c.jsx('h3', { className: 'firstHeading', children: 'Want to surpassing the limits of speed?' }),
                                    c.jsx('h3', {
                                        className: 'secondHeading',
                                        children: 'Discover an artistic masterpiece beyond a simple car.',
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                c.jsxs(L1, { children: [c.jsx(z1, {}), c.jsx(R1, {})] }),
            ],
        }),
    A1 = F.div`
    .inner {
        padding: 100px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 650px;
    }
    h2 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 50px;
    }
    p {
        margin-bottom: 30px;
        label {
            display: block;
            width: 110px;
        }
        input[type='email'],
        input[type='password'] {
            margin-top: 5px;
            width: 450px;
            box-sizing: border-box;
            height: 55px;
            padding: 0 10px;
        }

        span {
            display: block;
            color: #999;
            margin-bottom: 5px;
        }

        &:last-child {
            margin-top: 50px;
            text-align: center;
            button {
                width: 250px;
                height: 60px;
                background: #000;
                color: #fff;
                border: none;
                cursor: pointer;
            }
        }
    }
`,
    $1 = F.div`
    .inner {
        padding: 100px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 600px;
    }
    h2 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 50px;
    }
    h3 {
        margin-bottom: 30px;
        font-size: 25px;
        font-weight: 700;
        span {
            color: tomato;
        }
    }
    p {
        margin-top: 50px;
        text-align: center;
        button {
            width: 250px;
            height: 60px;
            background: #000;
            color: #fff;
            border: none;
            cursor: pointer;
        }
    }
`,
    F1 = F.div`
    .inner {
        padding: 100px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        //height: 750px;

        h2 {
            font-size: 30px;
            font-weight: 700;
            margin-bottom: 50px;
        }
        p {
            margin-bottom: 15px;
            label {
                display: block;
                width: 110px;
            }
            input[type='email'],
            input[type='password'],
            input[type='tel'],
            input[type='text'] {
                margin-top: 5px;
                width: 450px;
                box-sizing: border-box;
                height: 55px;
                padding: 0 10px;
            }

            &:last-child {
                margin-top: 50px;
                text-align: center;
                button {
                    width: 200px;
                    height: 60px;
                    background: #000;
                    color: #fff;
                    border: none;
                    cursor: pointer;
                    margin-left: 5px;
                }
            }

            .mainBtn {
                padding: 20px;
                margin: 20px;
                position: relative;
                padding: 10px 20px;
                background-color: #212121;
                color: white;
                border: none;
                cursor: pointer;
                overflow: hidden;
                transition: color 0.3s ease;
                z-index: 1;
            }

            .mainBtn::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 150%;
                height: 100%;
                background-color: #fcc419;
                transform: translateX(-110%) skew(-15deg);
                transition: transform 0.8s ease;
                z-index: -1;
            }

            .mainBtn:hover {
                color: #212121; /* 호버 시 텍스트 색상 변경 */
            }

            .mainBtn:hover::before {
                transform: translateX(-10%) skew(-15deg); /* 호버 시 오른쪽으로 이동 */
            }
        }

        button {
            margin-bottom: 10px;
            width: 100px;
            height: 50px;
            background: #000;
            color: #fff;
            border: none;
            cursor: pointer;
        }

        div div {
            padding: 15px 0 15px 0;

            label {
                padding: 0 30px 0 10px;
            }
        }
    }
`,
    B1 = F.div`
    .spinner {
        position: fixed;
        z-index: 10;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    .spinner-circle {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: inherit;
        padding: 0.5rem 1rem;
    }

    .spinner-circle:before {
        z-index: 5;
        content: '';
        position: absolute;
        border-radius: 50%;
        border: 3px dashed #333;
        width: 50px;
        height: 50px;
        border-left: 3px solid transparent;
        border-bottom: 3px solid transparent;
        animation: loading 1s linear infinite;
    }

    .spinner-circle:after {
        content: '';
        position: absolute;
        border-radius: 50%;
        border: 3px dashed #333;
        width: 50px;
        height: 50px;
        border-left: 3px solid transparent;
        border-bottom: 3px solid transparent;
        animation: loading 1s ease infinite;
        z-index: 10;
    }

    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`,
    W1 = () =>
        c.jsx(B1, {
            children: c.jsx('div', {
                className: 'spinner',
                'aria-label': 'spinner-icon',
                children: c.jsx('div', { className: 'spinner-circle' }),
            }),
        });
function me(e) {
    return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var U1 = (() => (typeof Symbol == 'function' && Symbol.observable) || '@@observable')(),
    Sd = U1,
    sl = () => Math.random().toString(36).substring(7).split('').join('.'),
    V1 = {
        INIT: `@@redux/INIT${sl()}`,
        REPLACE: `@@redux/REPLACE${sl()}`,
        PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${sl()}`,
    },
    Ko = V1;
function zu(e) {
    if (typeof e != 'object' || e === null) return !1;
    let t = e;
    for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t;
}
function Fh(e, t, n) {
    if (typeof e != 'function') throw new Error(me(2));
    if ((typeof t == 'function' && typeof n == 'function') || (typeof n == 'function' && typeof arguments[3] == 'function'))
        throw new Error(me(0));
    if ((typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)), typeof n < 'u')) {
        if (typeof n != 'function') throw new Error(me(1));
        return n(Fh)(e, t);
    }
    let r = e,
        i = t,
        o = new Map(),
        s = o,
        a = 0,
        l = !1;
    function u() {
        s === o &&
            ((s = new Map()),
            o.forEach((S, p) => {
                s.set(p, S);
            }));
    }
    function d() {
        if (l) throw new Error(me(3));
        return i;
    }
    function f(S) {
        if (typeof S != 'function') throw new Error(me(4));
        if (l) throw new Error(me(5));
        let p = !0;
        u();
        const m = a++;
        return (
            s.set(m, S),
            function () {
                if (p) {
                    if (l) throw new Error(me(6));
                    (p = !1), u(), s.delete(m), (o = null);
                }
            }
        );
    }
    function h(S) {
        if (!zu(S)) throw new Error(me(7));
        if (typeof S.type > 'u') throw new Error(me(8));
        if (typeof S.type != 'string') throw new Error(me(17));
        if (l) throw new Error(me(9));
        try {
            (l = !0), (i = r(i, S));
        } finally {
            l = !1;
        }
        return (
            (o = s).forEach((m) => {
                m();
            }),
            S
        );
    }
    function g(S) {
        if (typeof S != 'function') throw new Error(me(10));
        (r = S), h({ type: Ko.REPLACE });
    }
    function y() {
        const S = f;
        return {
            subscribe(p) {
                if (typeof p != 'object' || p === null) throw new Error(me(11));
                function m() {
                    const w = p;
                    w.next && w.next(d());
                }
                return m(), { unsubscribe: S(m) };
            },
            [Sd]() {
                return this;
            },
        };
    }
    return h({ type: Ko.INIT }), { dispatch: h, subscribe: f, getState: d, replaceReducer: g, [Sd]: y };
}
function H1(e) {
    Object.keys(e).forEach((t) => {
        const n = e[t];
        if (typeof n(void 0, { type: Ko.INIT }) > 'u') throw new Error(me(12));
        if (typeof n(void 0, { type: Ko.PROBE_UNKNOWN_ACTION() }) > 'u') throw new Error(me(13));
    });
}
function G1(e) {
    const t = Object.keys(e),
        n = {};
    for (let o = 0; o < t.length; o++) {
        const s = t[o];
        typeof e[s] == 'function' && (n[s] = e[s]);
    }
    const r = Object.keys(n);
    let i;
    try {
        H1(n);
    } catch (o) {
        i = o;
    }
    return function (s = {}, a) {
        if (i) throw i;
        let l = !1;
        const u = {};
        for (let d = 0; d < r.length; d++) {
            const f = r[d],
                h = n[f],
                g = s[f],
                y = h(g, a);
            if (typeof y > 'u') throw (a && a.type, new Error(me(14)));
            (u[f] = y), (l = l || y !== g);
        }
        return (l = l || r.length !== Object.keys(s).length), l ? u : s;
    };
}
function Yo(...e) {
    return e.length === 0
        ? (t) => t
        : e.length === 1
        ? e[0]
        : e.reduce(
              (t, n) =>
                  (...r) =>
                      t(n(...r))
          );
}
function K1(...e) {
    return (t) => (n, r) => {
        const i = t(n, r);
        let o = () => {
            throw new Error(me(15));
        };
        const s = { getState: i.getState, dispatch: (l, ...u) => o(l, ...u) },
            a = e.map((l) => l(s));
        return (o = Yo(...a)(i.dispatch)), { ...i, dispatch: o };
    };
}
function Y1(e) {
    return zu(e) && 'type' in e && typeof e.type == 'string';
}
var Bh = Symbol.for('immer-nothing'),
    Ed = Symbol.for('immer-draftable'),
    We = Symbol.for('immer-state');
function lt(e, ...t) {
    throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var gr = Object.getPrototypeOf;
function cn(e) {
    return !!e && !!e[We];
}
function zt(e) {
    var t;
    return e ? Wh(e) || Array.isArray(e) || !!e[Ed] || !!((t = e.constructor) != null && t[Ed]) || Ts(e) || js(e) : !1;
}
var Q1 = Object.prototype.constructor.toString();
function Wh(e) {
    if (!e || typeof e != 'object') return !1;
    const t = gr(e);
    if (t === null) return !0;
    const n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
    return n === Object ? !0 : typeof n == 'function' && Function.toString.call(n) === Q1;
}
function gi(e, t) {
    ks(e) === 0
        ? Object.entries(e).forEach(([n, r]) => {
              t(n, r, e);
          })
        : e.forEach((n, r) => t(r, n, e));
}
function ks(e) {
    const t = e[We];
    return t ? t.type_ : Array.isArray(e) ? 1 : Ts(e) ? 2 : js(e) ? 3 : 0;
}
function Sa(e, t) {
    return ks(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Uh(e, t, n) {
    const r = ks(e);
    r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function X1(e, t) {
    return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ts(e) {
    return e instanceof Map;
}
function js(e) {
    return e instanceof Set;
}
function vn(e) {
    return e.copy_ || e.base_;
}
function Ea(e, t) {
    if (Ts(e)) return new Map(e);
    if (js(e)) return new Set(e);
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    if (!t && Wh(e)) return gr(e) ? { ...e } : Object.assign(Object.create(null), e);
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[We];
    let r = Reflect.ownKeys(n);
    for (let i = 0; i < r.length; i++) {
        const o = r[i],
            s = n[o];
        s.writable === !1 && ((s.writable = !0), (s.configurable = !0)),
            (s.get || s.set) && (n[o] = { configurable: !0, writable: !0, enumerable: s.enumerable, value: e[o] });
    }
    return Object.create(gr(e), n);
}
function Ru(e, t = !1) {
    return (
        Ps(e) ||
            cn(e) ||
            !zt(e) ||
            (ks(e) > 1 && (e.set = e.add = e.clear = e.delete = q1), Object.freeze(e), t && gi(e, (n, r) => Ru(r, !0))),
        e
    );
}
function q1() {
    lt(2);
}
function Ps(e) {
    return Object.isFrozen(e);
}
var J1 = {};
function Nn(e) {
    const t = J1[e];
    return t || lt(0, e), t;
}
var vi;
function Vh() {
    return vi;
}
function Z1(e, t) {
    return { drafts_: [], parent_: e, immer_: t, canAutoFreeze_: !0, unfinalizedDrafts_: 0 };
}
function Cd(e, t) {
    t && (Nn('Patches'), (e.patches_ = []), (e.inversePatches_ = []), (e.patchListener_ = t));
}
function Ca(e) {
    ka(e), e.drafts_.forEach(ex), (e.drafts_ = null);
}
function ka(e) {
    e === vi && (vi = e.parent_);
}
function kd(e) {
    return (vi = Z1(vi, e));
}
function ex(e) {
    const t = e[We];
    t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function Td(e, t) {
    t.unfinalizedDrafts_ = t.drafts_.length;
    const n = t.drafts_[0];
    return (
        e !== void 0 && e !== n
            ? (n[We].modified_ && (Ca(t), lt(4)),
              zt(e) && ((e = Qo(t, e)), t.parent_ || Xo(t, e)),
              t.patches_ && Nn('Patches').generateReplacementPatches_(n[We].base_, e, t.patches_, t.inversePatches_))
            : (e = Qo(t, n, [])),
        Ca(t),
        t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
        e !== Bh ? e : void 0
    );
}
function Qo(e, t, n) {
    if (Ps(t)) return t;
    const r = t[We];
    if (!r) return gi(t, (i, o) => jd(e, r, t, i, o, n)), t;
    if (r.scope_ !== e) return t;
    if (!r.modified_) return Xo(e, r.base_, !0), r.base_;
    if (!r.finalized_) {
        (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
        const i = r.copy_;
        let o = i,
            s = !1;
        r.type_ === 3 && ((o = new Set(i)), i.clear(), (s = !0)),
            gi(o, (a, l) => jd(e, r, i, a, l, n, s)),
            Xo(e, i, !1),
            n && e.patches_ && Nn('Patches').generatePatches_(r, n, e.patches_, e.inversePatches_);
    }
    return r.copy_;
}
function jd(e, t, n, r, i, o, s) {
    if (cn(i)) {
        const a = o && t && t.type_ !== 3 && !Sa(t.assigned_, r) ? o.concat(r) : void 0,
            l = Qo(e, i, a);
        if ((Uh(n, r, l), cn(l))) e.canAutoFreeze_ = !1;
        else return;
    } else s && n.add(i);
    if (zt(i) && !Ps(i)) {
        if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
        Qo(e, i), (!t || !t.scope_.parent_) && Xo(e, i);
    }
}
function Xo(e, t, n = !1) {
    !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Ru(t, n);
}
function tx(e, t) {
    const n = Array.isArray(e),
        r = {
            type_: n ? 1 : 0,
            scope_: t ? t.scope_ : Vh(),
            modified_: !1,
            finalized_: !1,
            assigned_: {},
            parent_: t,
            base_: e,
            draft_: null,
            copy_: null,
            revoke_: null,
            isManual_: !1,
        };
    let i = r,
        o = Du;
    n && ((i = [r]), (o = yi));
    const { revoke: s, proxy: a } = Proxy.revocable(i, o);
    return (r.draft_ = a), (r.revoke_ = s), a;
}
var Du = {
        get(e, t) {
            if (t === We) return e;
            const n = vn(e);
            if (!Sa(n, t)) return nx(e, n, t);
            const r = n[t];
            return e.finalized_ || !zt(r) ? r : r === ll(e.base_, t) ? (al(e), (e.copy_[t] = ja(r, e))) : r;
        },
        has(e, t) {
            return t in vn(e);
        },
        ownKeys(e) {
            return Reflect.ownKeys(vn(e));
        },
        set(e, t, n) {
            const r = Hh(vn(e), t);
            if (r != null && r.set) return r.set.call(e.draft_, n), !0;
            if (!e.modified_) {
                const i = ll(vn(e), t),
                    o = i == null ? void 0 : i[We];
                if (o && o.base_ === n) return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
                if (X1(n, i) && (n !== void 0 || Sa(e.base_, t))) return !0;
                al(e), Ta(e);
            }
            return (
                (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
                    (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
                    ((e.copy_[t] = n), (e.assigned_[t] = !0)),
                !0
            );
        },
        deleteProperty(e, t) {
            return (
                ll(e.base_, t) !== void 0 || t in e.base_ ? ((e.assigned_[t] = !1), al(e), Ta(e)) : delete e.assigned_[t],
                e.copy_ && delete e.copy_[t],
                !0
            );
        },
        getOwnPropertyDescriptor(e, t) {
            const n = vn(e),
                r = Reflect.getOwnPropertyDescriptor(n, t);
            return r && { writable: !0, configurable: e.type_ !== 1 || t !== 'length', enumerable: r.enumerable, value: n[t] };
        },
        defineProperty() {
            lt(11);
        },
        getPrototypeOf(e) {
            return gr(e.base_);
        },
        setPrototypeOf() {
            lt(12);
        },
    },
    yi = {};
gi(Du, (e, t) => {
    yi[e] = function () {
        return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
    };
});
yi.deleteProperty = function (e, t) {
    return yi.set.call(this, e, t, void 0);
};
yi.set = function (e, t, n) {
    return Du.set.call(this, e[0], t, n, e[0]);
};
function ll(e, t) {
    const n = e[We];
    return (n ? vn(n) : e)[t];
}
function nx(e, t, n) {
    var i;
    const r = Hh(t, n);
    return r ? ('value' in r ? r.value : (i = r.get) == null ? void 0 : i.call(e.draft_)) : void 0;
}
function Hh(e, t) {
    if (!(t in e)) return;
    let n = gr(e);
    for (; n; ) {
        const r = Object.getOwnPropertyDescriptor(n, t);
        if (r) return r;
        n = gr(n);
    }
}
function Ta(e) {
    e.modified_ || ((e.modified_ = !0), e.parent_ && Ta(e.parent_));
}
function al(e) {
    e.copy_ || (e.copy_ = Ea(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var rx = class {
    constructor(e) {
        (this.autoFreeze_ = !0),
            (this.useStrictShallowCopy_ = !1),
            (this.produce = (t, n, r) => {
                if (typeof t == 'function' && typeof n != 'function') {
                    const o = n;
                    n = t;
                    const s = this;
                    return function (l = o, ...u) {
                        return s.produce(l, (d) => n.call(this, d, ...u));
                    };
                }
                typeof n != 'function' && lt(6), r !== void 0 && typeof r != 'function' && lt(7);
                let i;
                if (zt(t)) {
                    const o = kd(this),
                        s = ja(t, void 0);
                    let a = !0;
                    try {
                        (i = n(s)), (a = !1);
                    } finally {
                        a ? Ca(o) : ka(o);
                    }
                    return Cd(o, r), Td(i, o);
                } else if (!t || typeof t != 'object') {
                    if (((i = n(t)), i === void 0 && (i = t), i === Bh && (i = void 0), this.autoFreeze_ && Ru(i, !0), r)) {
                        const o = [],
                            s = [];
                        Nn('Patches').generateReplacementPatches_(t, i, o, s), r(o, s);
                    }
                    return i;
                } else lt(1, t);
            }),
            (this.produceWithPatches = (t, n) => {
                if (typeof t == 'function') return (s, ...a) => this.produceWithPatches(s, (l) => t(l, ...a));
                let r, i;
                return [
                    this.produce(t, n, (s, a) => {
                        (r = s), (i = a);
                    }),
                    r,
                    i,
                ];
            }),
            typeof (e == null ? void 0 : e.autoFreeze) == 'boolean' && this.setAutoFreeze(e.autoFreeze),
            typeof (e == null ? void 0 : e.useStrictShallowCopy) == 'boolean' && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
    }
    createDraft(e) {
        zt(e) || lt(8), cn(e) && (e = Gh(e));
        const t = kd(this),
            n = ja(e, void 0);
        return (n[We].isManual_ = !0), ka(t), n;
    }
    finishDraft(e, t) {
        const n = e && e[We];
        (!n || !n.isManual_) && lt(9);
        const { scope_: r } = n;
        return Cd(r, t), Td(void 0, r);
    }
    setAutoFreeze(e) {
        this.autoFreeze_ = e;
    }
    setUseStrictShallowCopy(e) {
        this.useStrictShallowCopy_ = e;
    }
    applyPatches(e, t) {
        let n;
        for (n = t.length - 1; n >= 0; n--) {
            const i = t[n];
            if (i.path.length === 0 && i.op === 'replace') {
                e = i.value;
                break;
            }
        }
        n > -1 && (t = t.slice(n + 1));
        const r = Nn('Patches').applyPatches_;
        return cn(e) ? r(e, t) : this.produce(e, (i) => r(i, t));
    }
};
function ja(e, t) {
    const n = Ts(e) ? Nn('MapSet').proxyMap_(e, t) : js(e) ? Nn('MapSet').proxySet_(e, t) : tx(e, t);
    return (t ? t.scope_ : Vh()).drafts_.push(n), n;
}
function Gh(e) {
    return cn(e) || lt(10, e), Kh(e);
}
function Kh(e) {
    if (!zt(e) || Ps(e)) return e;
    const t = e[We];
    let n;
    if (t) {
        if (!t.modified_) return t.base_;
        (t.finalized_ = !0), (n = Ea(e, t.scope_.immer_.useStrictShallowCopy_));
    } else n = Ea(e, !0);
    return (
        gi(n, (r, i) => {
            Uh(n, r, Kh(i));
        }),
        t && (t.finalized_ = !1),
        n
    );
}
var Ue = new rx(),
    Yh = Ue.produce;
Ue.produceWithPatches.bind(Ue);
Ue.setAutoFreeze.bind(Ue);
Ue.setUseStrictShallowCopy.bind(Ue);
Ue.applyPatches.bind(Ue);
Ue.createDraft.bind(Ue);
Ue.finishDraft.bind(Ue);
function ix(e, t = `expected a function, instead received ${typeof e}`) {
    if (typeof e != 'function') throw new TypeError(t);
}
function ox(e, t = 'expected all items to be functions, instead received the following types: ') {
    if (!e.every((n) => typeof n == 'function')) {
        const n = e.map((r) => (typeof r == 'function' ? `function ${r.name || 'unnamed'}()` : typeof r)).join(', ');
        throw new TypeError(`${t}[${n}]`);
    }
}
var Pd = (e) => (Array.isArray(e) ? e : [e]);
function sx(e) {
    const t = Array.isArray(e[0]) ? e[0] : e;
    return ox(t, 'createSelector expects all input-selectors to be functions, but received the following types: '), t;
}
function lx(e, t) {
    const n = [],
        { length: r } = e;
    for (let i = 0; i < r; i++) n.push(e[i].apply(null, t));
    return n;
}
var ax = class {
        constructor(e) {
            this.value = e;
        }
        deref() {
            return this.value;
        }
    },
    ux = typeof WeakRef < 'u' ? WeakRef : ax,
    cx = 0,
    _d = 1;
function Yi() {
    return { s: cx, v: void 0, o: null, p: null };
}
function Qh(e, t = {}) {
    let n = Yi();
    const { resultEqualityCheck: r } = t;
    let i,
        o = 0;
    function s() {
        let a = n;
        const { length: l } = arguments;
        for (let f = 0, h = l; f < h; f++) {
            const g = arguments[f];
            if (typeof g == 'function' || (typeof g == 'object' && g !== null)) {
                let y = a.o;
                y === null && (a.o = y = new WeakMap());
                const x = y.get(g);
                x === void 0 ? ((a = Yi()), y.set(g, a)) : (a = x);
            } else {
                let y = a.p;
                y === null && (a.p = y = new Map());
                const x = y.get(g);
                x === void 0 ? ((a = Yi()), y.set(g, a)) : (a = x);
            }
        }
        const u = a;
        let d;
        if ((a.s === _d ? (d = a.v) : ((d = e.apply(null, arguments)), o++), (u.s = _d), r)) {
            const f = (i == null ? void 0 : i.deref()) ?? i;
            f != null && r(f, d) && ((d = f), o !== 0 && o--),
                (i = (typeof d == 'object' && d !== null) || typeof d == 'function' ? new ux(d) : d);
        }
        return (u.v = d), d;
    }
    return (
        (s.clearCache = () => {
            (n = Yi()), s.resetResultsCount();
        }),
        (s.resultsCount = () => o),
        (s.resetResultsCount = () => {
            o = 0;
        }),
        s
    );
}
function dx(e, ...t) {
    const n = typeof e == 'function' ? { memoize: e, memoizeOptions: t } : e;
    return (...i) => {
        let o = 0,
            s = 0,
            a,
            l = {},
            u = i.pop();
        typeof u == 'object' && ((l = u), (u = i.pop())),
            ix(u, `createSelector expects an output function after the inputs, but received: [${typeof u}]`);
        const d = { ...n, ...l },
            { memoize: f, memoizeOptions: h = [], argsMemoize: g = Qh, argsMemoizeOptions: y = [], devModeChecks: x = {} } = d,
            S = Pd(h),
            p = Pd(y),
            m = sx(i),
            v = f(function () {
                return o++, u.apply(null, arguments);
            }, ...S),
            w = g(function () {
                s++;
                const C = lx(m, arguments);
                return (a = v.apply(null, C)), a;
            }, ...p);
        return Object.assign(w, {
            resultFunc: u,
            memoizedResultFunc: v,
            dependencies: m,
            dependencyRecomputations: () => s,
            resetDependencyRecomputations: () => {
                s = 0;
            },
            lastResult: () => a,
            recomputations: () => o,
            resetRecomputations: () => {
                o = 0;
            },
            memoize: f,
            argsMemoize: g,
        });
    };
}
function Xh(e) {
    return ({ dispatch: n, getState: r }) =>
        (i) =>
        (o) =>
            typeof o == 'function' ? o(n, r, e) : i(o);
}
var fx = Xh(),
    px = Xh,
    hx = (...e) => {
        const t = dx(...e);
        return (...n) => {
            const r = t(...n),
                i = (o, ...s) => r(cn(o) ? Gh(o) : o, ...s);
            return Object.assign(i, r), i;
        };
    };
hx(Qh);
var mx =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : function () {
              if (arguments.length !== 0) return typeof arguments[0] == 'object' ? Yo : Yo.apply(null, arguments);
          };
function xi(e, t) {
    function n(...r) {
        if (t) {
            let i = t(...r);
            if (!i) throw new Error(dt(0));
            return { type: e, payload: i.payload, ...('meta' in i && { meta: i.meta }), ...('error' in i && { error: i.error }) };
        }
        return { type: e, payload: r[0] };
    }
    return (n.toString = () => `${e}`), (n.type = e), (n.match = (r) => Y1(r) && r.type === e), n;
}
var qh = class Dr extends Array {
    constructor(...t) {
        super(...t), Object.setPrototypeOf(this, Dr.prototype);
    }
    static get [Symbol.species]() {
        return Dr;
    }
    concat(...t) {
        return super.concat.apply(this, t);
    }
    prepend(...t) {
        return t.length === 1 && Array.isArray(t[0]) ? new Dr(...t[0].concat(this)) : new Dr(...t.concat(this));
    }
};
function bd(e) {
    return zt(e) ? Yh(e, () => {}) : e;
}
function Id(e, t, n) {
    if (e.has(t)) {
        let i = e.get(t);
        return n.update && ((i = n.update(i, t, e)), e.set(t, i)), i;
    }
    if (!n.insert) throw new Error(dt(10));
    const r = n.insert(t, e);
    return e.set(t, r), r;
}
function gx(e) {
    return typeof e == 'boolean';
}
var vx = () =>
        function (t) {
            const { thunk: n = !0, immutableCheck: r = !0, serializableCheck: i = !0, actionCreatorCheck: o = !0 } = t ?? {};
            let s = new qh();
            return n && (gx(n) ? s.push(fx) : s.push(px(n.extraArgument))), s;
        },
    yx = 'RTK_autoBatch',
    Jh = (e) => (t) => {
        setTimeout(t, e);
    },
    xx = typeof window < 'u' && window.requestAnimationFrame ? window.requestAnimationFrame : Jh(10),
    wx =
        (e = { type: 'raf' }) =>
        (t) =>
        (...n) => {
            const r = t(...n);
            let i = !0,
                o = !1,
                s = !1;
            const a = new Set(),
                l =
                    e.type === 'tick'
                        ? queueMicrotask
                        : e.type === 'raf'
                        ? xx
                        : e.type === 'callback'
                        ? e.queueNotification
                        : Jh(e.timeout),
                u = () => {
                    (s = !1), o && ((o = !1), a.forEach((d) => d()));
                };
            return Object.assign({}, r, {
                subscribe(d) {
                    const f = () => i && d(),
                        h = r.subscribe(f);
                    return (
                        a.add(d),
                        () => {
                            h(), a.delete(d);
                        }
                    );
                },
                dispatch(d) {
                    var f;
                    try {
                        return (
                            (i = !((f = d == null ? void 0 : d.meta) != null && f[yx])),
                            (o = !i),
                            o && (s || ((s = !0), l(u))),
                            r.dispatch(d)
                        );
                    } finally {
                        i = !0;
                    }
                },
            });
        },
    Sx = (e) =>
        function (n) {
            const { autoBatch: r = !0 } = n ?? {};
            let i = new qh(e);
            return r && i.push(wx(typeof r == 'object' ? r : void 0)), i;
        },
    Ex = !0;
function Cx(e) {
    const t = vx(),
        { reducer: n = void 0, middleware: r, devTools: i = !0, preloadedState: o = void 0, enhancers: s = void 0 } = e || {};
    let a;
    if (typeof n == 'function') a = n;
    else if (zu(n)) a = G1(n);
    else throw new Error(dt(1));
    let l;
    typeof r == 'function' ? (l = r(t)) : (l = t());
    let u = Yo;
    i && (u = mx({ trace: !Ex, ...(typeof i == 'object' && i) }));
    const d = K1(...l),
        f = Sx(d);
    let h = typeof s == 'function' ? s(f) : f();
    const g = u(...h);
    return Fh(a, o, g);
}
function Zh(e) {
    const t = {},
        n = [];
    let r;
    const i = {
        addCase(o, s) {
            const a = typeof o == 'string' ? o : o.type;
            if (!a) throw new Error(dt(28));
            if (a in t) throw new Error(dt(29));
            return (t[a] = s), i;
        },
        addMatcher(o, s) {
            return n.push({ matcher: o, reducer: s }), i;
        },
        addDefaultCase(o) {
            return (r = o), i;
        },
    };
    return e(i), [t, n, r];
}
function kx(e) {
    return typeof e == 'function';
}
function Tx(e, t) {
    let [n, r, i] = Zh(t),
        o;
    if (kx(e)) o = () => bd(e());
    else {
        const a = bd(e);
        o = () => a;
    }
    function s(a = o(), l) {
        let u = [n[l.type], ...r.filter(({ matcher: d }) => d(l)).map(({ reducer: d }) => d)];
        return (
            u.filter((d) => !!d).length === 0 && (u = [i]),
            u.reduce((d, f) => {
                if (f)
                    if (cn(d)) {
                        const g = f(d, l);
                        return g === void 0 ? d : g;
                    } else {
                        if (zt(d)) return Yh(d, (h) => f(h, l));
                        {
                            const h = f(d, l);
                            if (h === void 0) {
                                if (d === null) return d;
                                throw new Error(dt(9));
                            }
                            return h;
                        }
                    }
                return d;
            }, a)
        );
    }
    return (s.getInitialState = o), s;
}
var jx = Symbol.for('rtk-slice-createasyncthunk');
function Px(e, t) {
    return `${e}/${t}`;
}
function _x({ creators: e } = {}) {
    var n;
    const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[jx];
    return function (i) {
        const { name: o, reducerPath: s = o } = i;
        if (!o) throw new Error(dt(11));
        typeof process < 'u';
        const a = (typeof i.reducers == 'function' ? i.reducers(Ix()) : i.reducers) || {},
            l = Object.keys(a),
            u = { sliceCaseReducersByName: {}, sliceCaseReducersByType: {}, actionCreators: {}, sliceMatchers: [] },
            d = {
                addCase(S, p) {
                    const m = typeof S == 'string' ? S : S.type;
                    if (!m) throw new Error(dt(12));
                    if (m in u.sliceCaseReducersByType) throw new Error(dt(13));
                    return (u.sliceCaseReducersByType[m] = p), d;
                },
                addMatcher(S, p) {
                    return u.sliceMatchers.push({ matcher: S, reducer: p }), d;
                },
                exposeAction(S, p) {
                    return (u.actionCreators[S] = p), d;
                },
                exposeCaseReducer(S, p) {
                    return (u.sliceCaseReducersByName[S] = p), d;
                },
            };
        l.forEach((S) => {
            const p = a[S],
                m = { reducerName: S, type: Px(o, S), createNotation: typeof i.reducers == 'function' };
            Lx(p) ? Mx(m, p, d, t) : Nx(m, p, d);
        });
        function f() {
            const [S = {}, p = [], m = void 0] = typeof i.extraReducers == 'function' ? Zh(i.extraReducers) : [i.extraReducers],
                v = { ...S, ...u.sliceCaseReducersByType };
            return Tx(i.initialState, (w) => {
                for (let E in v) w.addCase(E, v[E]);
                for (let E of u.sliceMatchers) w.addMatcher(E.matcher, E.reducer);
                for (let E of p) w.addMatcher(E.matcher, E.reducer);
                m && w.addDefaultCase(m);
            });
        }
        const h = (S) => S,
            g = new WeakMap();
        let y;
        const x = {
            name: o,
            reducerPath: s,
            reducer(S, p) {
                return y || (y = f()), y(S, p);
            },
            actions: u.actionCreators,
            caseReducers: u.sliceCaseReducersByName,
            getInitialState() {
                return y || (y = f()), y.getInitialState();
            },
            getSelectors(S = h) {
                const p = Id(g, this, { insert: () => new WeakMap() });
                return Id(p, S, {
                    insert: () => {
                        const m = {};
                        for (const [v, w] of Object.entries(i.selectors ?? {})) m[v] = bx(this, w, S, this !== x);
                        return m;
                    },
                });
            },
            selectSlice(S) {
                let p = S[this.reducerPath];
                return typeof p > 'u' && this !== x && (p = this.getInitialState()), p;
            },
            get selectors() {
                return this.getSelectors(this.selectSlice);
            },
            injectInto(S, { reducerPath: p, ...m } = {}) {
                const v = p ?? this.reducerPath;
                return S.inject({ reducerPath: v, reducer: this.reducer }, m), { ...this, reducerPath: v };
            },
        };
        return x;
    };
}
function bx(e, t, n, r) {
    function i(o, ...s) {
        let a = n.call(e, o);
        return typeof a > 'u' && r && (a = e.getInitialState()), t(a, ...s);
    }
    return (i.unwrapped = t), i;
}
var Cr = _x();
function Ix() {
    function e(t, n) {
        return { _reducerDefinitionType: 'asyncThunk', payloadCreator: t, ...n };
    }
    return (
        (e.withTypes = () => e),
        {
            reducer(t) {
                return Object.assign(
                    {
                        [t.name](...n) {
                            return t(...n);
                        },
                    }[t.name],
                    { _reducerDefinitionType: 'reducer' }
                );
            },
            preparedReducer(t, n) {
                return { _reducerDefinitionType: 'reducerWithPrepare', prepare: t, reducer: n };
            },
            asyncThunk: e,
        }
    );
}
function Nx({ type: e, reducerName: t, createNotation: n }, r, i) {
    let o, s;
    if ('reducer' in r) {
        if (n && !Ox(r)) throw new Error(dt(17));
        (o = r.reducer), (s = r.prepare);
    } else o = r;
    i.addCase(e, o)
        .exposeCaseReducer(t, o)
        .exposeAction(t, s ? xi(e, s) : xi(e));
}
function Lx(e) {
    return e._reducerDefinitionType === 'asyncThunk';
}
function Ox(e) {
    return e._reducerDefinitionType === 'reducerWithPrepare';
}
function Mx({ type: e, reducerName: t }, n, r, i) {
    if (!i) throw new Error(dt(18));
    const { payloadCreator: o, fulfilled: s, pending: a, rejected: l, settled: u, options: d } = n,
        f = i(e, o, d);
    r.exposeAction(t, f),
        s && r.addCase(f.fulfilled, s),
        a && r.addCase(f.pending, a),
        l && r.addCase(f.rejected, l),
        u && r.addMatcher(f.settled, u),
        r.exposeCaseReducer(t, { fulfilled: s || Qi, pending: a || Qi, rejected: l || Qi, settled: u || Qi });
}
function Qi() {}
var Au = 'listenerMiddleware';
xi(`${Au}/add`);
xi(`${Au}/removeAll`);
xi(`${Au}/remove`);
function dt(e) {
    return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const em = [
        {
            id: 1,
            email: 'admin@admin.com',
            password: '123',
            name: '테스트_관리자',
            tel: '010-1234-5678',
            gender: 'male',
            addr1: 'www',
            addr2: 'webSomewhere1',
            admin: !0,
        },
        {
            id: 2,
            email: 'user@user.com',
            password: '123',
            name: '테스트_유저',
            tel: '010-0000-0000',
            gender: 'female',
            addr1: 'qqq',
            addr2: 'webSomewhere2',
            admin: !1,
        },
    ],
    zx = { accounts: em, loginUser: {}, login: !1 },
    Rx = em.length + 1,
    tm = Cr({
        name: 'auth',
        initialState: zx,
        reducers: {
            loginChk: (e, t) => {
                const { inputEmail: n, inputPassword: r } = t.payload,
                    i = e.accounts.find((o) => o.email === n);
                i.password === r ? ((e.login = !0), (e.loginUser = i)) : ((e.login = !1), (e.loginUser = {}));
            },
            logoutChk: (e) => {
                (e.loginUser = {}), (e.login = !1);
            },
            join: (e, t) => {
                e.accounts = [...e.accounts, { ...t.payload, id: Rx, admin: !1 }];
            },
        },
    }),
    { loginChk: Dx, logoutChk: Ax, join: $x } = tm.actions,
    Fx = tm.reducer,
    Bx = () => {
        const e = pt(),
            t = Ge(),
            [n, r] = T.useState(!0),
            [i, o] = T.useState({ email: '', name: '', password1: '', password2: '', gender: '', addr1: '', addr2: '' }),
            { email: s, name: a, password1: l, password2: u, tel: d, gender: f, addr1: h, addr2: g } = i;
        T.useEffect(() => {
            const v = setTimeout(() => {
                r(!1);
            }, 1e3);
            return () => clearTimeout(v);
        }, []);
        const y = (v) => {
                v.preventDefault();
            },
            x = (v) => {
                const E = ('' + v).replace(/\D/g, '').match(/^(\d{3})(\d{0,4})(\d{0,4})$/);
                return E ? E[1] + (E[2] ? '-' + E[2] : '') + (E[3] ? '-' + E[3] : '') : v;
            },
            S = (v) => {
                const { name: w, value: E, type: C } = v.target;
                o(C === 'radio' ? { ...i, gender: E } : C === 'tel' ? { ...i, [w]: x(E) } : { ...i, [w]: E });
            },
            p = () =>
                s
                    ? a
                        ? l
                            ? u
                                ? d
                                    ? f
                                        ? l !== u
                                            ? (alert('비밀번호가 일치하지 않습니다.'), !1)
                                            : !0
                                        : (alert('성별을 선택해주세요.'), !1)
                                    : (alert('연락처를 입력해주세요.'), !1)
                                : (alert('비밀번호를 한번 더 입력해주세요.'), !1)
                            : (alert('비밀번호를 입력해주세요.'), !1)
                        : (alert('이름을 입력해주세요.'), !1)
                    : (alert('이메일(계정 ID)를 입력해주세요.'), !1),
            m = (v) => {
                if ((v.preventDefault(), p())) {
                    const w = { ...i, password: l };
                    delete w.password1,
                        delete w.password2,
                        console.log(w),
                        t($x(w)),
                        alert('회원가입이 완료되었습니다, 로그인 페이지로 이동합니다.'),
                        e('/login');
                }
            };
        return c.jsxs(c.Fragment, {
            children: [
                n ? c.jsx(W1, {}) : '',
                c.jsx(F1, {
                    children: c.jsxs('div', {
                        className: 'inner',
                        children: [
                            c.jsx('h2', { children: ' 회원가입 ' }),
                            c.jsxs('form', {
                                onSubmit: m,
                                children: [
                                    c.jsxs('p', {
                                        children: [
                                            c.jsx('label', { children: '이메일 (계정 ID) ' }),
                                            c.jsx('input', {
                                                type: 'email',
                                                name: 'email',
                                                value: s,
                                                onChange: S,
                                                placeholder: 'abc@naver.com',
                                            }),
                                        ],
                                    }),
                                    c.jsxs('p', {
                                        children: [
                                            c.jsx('label', { children: ' 이름 ' }),
                                            c.jsx('input', { type: 'text', placeholder: '홍길동', name: 'name', onChange: S, value: a }),
                                        ],
                                    }),
                                    c.jsxs('p', {
                                        children: [
                                            c.jsx('label', { children: '비밀번호 ' }),
                                            c.jsx('input', {
                                                type: 'password',
                                                name: 'password1',
                                                placeholder: 'a1234',
                                                onChange: S,
                                                value: l,
                                            }),
                                        ],
                                    }),
                                    c.jsxs('p', {
                                        children: [
                                            c.jsx('label', { children: '비밀번호 재확인 ' }),
                                            c.jsx('input', {
                                                type: 'password',
                                                name: 'password2',
                                                placeholder: 'a1234',
                                                onChange: S,
                                                value: u,
                                            }),
                                        ],
                                    }),
                                    c.jsxs('p', {
                                        children: [
                                            c.jsx('label', { children: ' 전화번호 ' }),
                                            c.jsx('input', {
                                                type: 'tel',
                                                name: 'tel',
                                                placeholder: '010-0000-0000',
                                                onChange: S,
                                                value: d,
                                            }),
                                        ],
                                    }),
                                    c.jsxs('div', {
                                        children: [
                                            c.jsx('label', { children: '성별 ' }),
                                            c.jsxs('div', {
                                                children: [
                                                    c.jsx('input', {
                                                        type: 'radio',
                                                        id: 'male',
                                                        name: 'gender',
                                                        onChange: S,
                                                        checked: f === 'male',
                                                        value: 'male',
                                                    }),
                                                    c.jsx('label', { htmlFor: 'male', children: '남성' }),
                                                    c.jsx('input', {
                                                        type: 'radio',
                                                        id: 'female',
                                                        name: 'gender',
                                                        onChange: S,
                                                        checked: f === 'female',
                                                        value: 'female',
                                                    }),
                                                    c.jsx('label', { htmlFor: 'female', children: '여성' }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    c.jsxs('p', {
                                        children: [
                                            c.jsx('label', { children: ' 주소 ' }),
                                            c.jsx('input', {
                                                type: 'text',
                                                placeholder: '인천광역시 남동구 정각로 29',
                                                name: 'addr1',
                                                onChange: S,
                                                value: h,
                                            }),
                                        ],
                                    }),
                                    c.jsx('button', { onClick: y, children: '주소 검색' }),
                                    c.jsxs('p', {
                                        children: [
                                            c.jsx('label', { children: '상세주소' }),
                                            c.jsx('input', {
                                                type: 'text',
                                                placeholder: '101동 101호',
                                                name: 'addr2',
                                                onChange: S,
                                                value: g,
                                            }),
                                        ],
                                    }),
                                    c.jsxs('p', {
                                        children: [
                                            c.jsx('button', { type: 'submit', className: 'mainBtn', children: '회원가입' }),
                                            c.jsx('button', { onClick: () => e('/'), children: '취소' }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        });
    },
    Wx = () => {
        const e = Ge(),
            { login: t, loginUser: n } = ke((g) => g.auth),
            { name: r } = n,
            [i, o] = T.useState({ inputEmail: '', inputPassword: '' }),
            { inputEmail: s, inputPassword: a } = i,
            [l, u] = T.useState(!1),
            d = pt(),
            f = (g) => {
                const { name: y, value: x } = g.target;
                o({ ...i, [y]: x });
            },
            h = async (g) => {
                g.preventDefault(), u(!0), await e(Dx(i));
            };
        return (
            T.useEffect(() => {
                l &&
                    (t ? (alert(`${r}님, 정상적으로 로그인에 성공했습니다.`), d('/')) : alert('해당 계정 정보가 존재하지 않습니다.'),
                    u(!1));
            }, [t, r, l]),
            c.jsx(A1, {
                children: c.jsxs('div', {
                    className: 'inner',
                    children: [
                        c.jsx('h2', { children: '로그인 페이지 입니다. ' }),
                        c.jsxs('form', {
                            onSubmit: h,
                            children: [
                                c.jsxs('p', {
                                    children: [
                                        c.jsx('label', { children: '이메일 ' }),
                                        c.jsx('input', {
                                            type: 'email',
                                            name: 'inputEmail',
                                            value: s,
                                            onChange: f,
                                            placeholder: '로그인정보:abc@naver.com',
                                        }),
                                    ],
                                }),
                                c.jsxs('p', {
                                    children: [
                                        c.jsx('label', { children: '비밀번호 ' }),
                                        c.jsx('input', {
                                            type: 'password',
                                            name: 'inputPassword',
                                            value: a,
                                            onChange: f,
                                            placeholder: '로그인정보:a1234',
                                        }),
                                    ],
                                }),
                                c.jsxs('p', {
                                    children: [
                                        c.jsx('span', { children: '테스트 이메일: user@user.com ' }),
                                        c.jsx('span', { children: '테스트 비밀번호 : 123' }),
                                    ],
                                }),
                                c.jsx('p', { className: 'btn', children: c.jsx('button', { type: 'submit', children: '로그인' }) }),
                            ],
                        }),
                    ],
                }),
            })
        );
    },
    Ux = () => {
        const { login: e, loginUser: t } = ke((s) => s.auth),
            n = Ge(),
            r = pt(),
            { name: i } = t,
            o = () => {
                n(Ax()), r('/');
            };
        return c.jsx($1, {
            children: c.jsx('div', {
                className: 'inner',
                children: e
                    ? c.jsxs(c.Fragment, {
                          children: [
                              c.jsxs('h2', { children: ['방문해 주셔서 감사합니다.', c.jsx('br', {}), ' 다시 방문해주세요'] }),
                              c.jsx('h3', { children: c.jsxs('span', { children: [' ', i, ' 님 이용해주셔서 감사합니다 '] }) }),
                              c.jsx('p', { children: c.jsx('button', { onClick: o, children: '로그아웃' }) }),
                          ],
                      })
                    : c.jsx(c.Fragment, { children: c.jsx('h2', { children: ' 로그인 정보를 찾을수 없습니다. ' }) }),
            }),
        });
    },
    Vx = F.section`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
`;
function Nd(e) {
    return e !== null && typeof e == 'object' && 'constructor' in e && e.constructor === Object;
}
function $u(e, t) {
    e === void 0 && (e = {}),
        t === void 0 && (t = {}),
        Object.keys(t).forEach((n) => {
            typeof e[n] > 'u' ? (e[n] = t[n]) : Nd(t[n]) && Nd(e[n]) && Object.keys(t[n]).length > 0 && $u(e[n], t[n]);
        });
}
const nm = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: '' },
    querySelector() {
        return null;
    },
    querySelectorAll() {
        return [];
    },
    getElementById() {
        return null;
    },
    createEvent() {
        return { initEvent() {} };
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return [];
            },
        };
    },
    createElementNS() {
        return {};
    },
    importNode() {
        return null;
    },
    location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
};
function It() {
    const e = typeof document < 'u' ? document : {};
    return $u(e, nm), e;
}
const Hx = {
    document: nm,
    navigator: { userAgent: '' },
    location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
        return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return '';
            },
        };
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {};
    },
    requestAnimationFrame(e) {
        return typeof setTimeout > 'u' ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame(e) {
        typeof setTimeout > 'u' || clearTimeout(e);
    },
};
function Ke() {
    const e = typeof window < 'u' ? window : {};
    return $u(e, Hx), e;
}
function Gx(e) {
    return (
        e === void 0 && (e = ''),
        e
            .trim()
            .split(' ')
            .filter((t) => !!t.trim())
    );
}
function Kx(e) {
    const t = e;
    Object.keys(t).forEach((n) => {
        try {
            t[n] = null;
        } catch {}
        try {
            delete t[n];
        } catch {}
    });
}
function Pa(e, t) {
    return t === void 0 && (t = 0), setTimeout(e, t);
}
function qo() {
    return Date.now();
}
function Yx(e) {
    const t = Ke();
    let n;
    return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n;
}
function Qx(e, t) {
    t === void 0 && (t = 'x');
    const n = Ke();
    let r, i, o;
    const s = Yx(e);
    return (
        n.WebKitCSSMatrix
            ? ((i = s.transform || s.webkitTransform),
              i.split(',').length > 6 &&
                  (i = i
                      .split(', ')
                      .map((a) => a.replace(',', '.'))
                      .join(', ')),
              (o = new n.WebKitCSSMatrix(i === 'none' ? '' : i)))
            : ((o =
                  s.MozTransform ||
                  s.OTransform ||
                  s.MsTransform ||
                  s.msTransform ||
                  s.transform ||
                  s.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
              (r = o.toString().split(','))),
        t === 'x' && (n.WebKitCSSMatrix ? (i = o.m41) : r.length === 16 ? (i = parseFloat(r[12])) : (i = parseFloat(r[4]))),
        t === 'y' && (n.WebKitCSSMatrix ? (i = o.m42) : r.length === 16 ? (i = parseFloat(r[13])) : (i = parseFloat(r[5]))),
        i || 0
    );
}
function Xi(e) {
    return typeof e == 'object' && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === 'Object';
}
function Xx(e) {
    return typeof window < 'u' && typeof window.HTMLElement < 'u' ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11);
}
function De() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ['__proto__', 'constructor', 'prototype'];
    for (let n = 1; n < arguments.length; n += 1) {
        const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
        if (r != null && !Xx(r)) {
            const i = Object.keys(Object(r)).filter((o) => t.indexOf(o) < 0);
            for (let o = 0, s = i.length; o < s; o += 1) {
                const a = i[o],
                    l = Object.getOwnPropertyDescriptor(r, a);
                l !== void 0 &&
                    l.enumerable &&
                    (Xi(e[a]) && Xi(r[a])
                        ? r[a].__swiper__
                            ? (e[a] = r[a])
                            : De(e[a], r[a])
                        : !Xi(e[a]) && Xi(r[a])
                        ? ((e[a] = {}), r[a].__swiper__ ? (e[a] = r[a]) : De(e[a], r[a]))
                        : (e[a] = r[a]));
            }
        }
    }
    return e;
}
function qi(e, t, n) {
    e.style.setProperty(t, n);
}
function rm(e) {
    let { swiper: t, targetPosition: n, side: r } = e;
    const i = Ke(),
        o = -t.translate;
    let s = null,
        a;
    const l = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = 'none'), i.cancelAnimationFrame(t.cssModeFrameID);
    const u = n > o ? 'next' : 'prev',
        d = (h, g) => (u === 'next' && h >= g) || (u === 'prev' && h <= g),
        f = () => {
            (a = new Date().getTime()), s === null && (s = a);
            const h = Math.max(Math.min((a - s) / l, 1), 0),
                g = 0.5 - Math.cos(h * Math.PI) / 2;
            let y = o + g * (n - o);
            if ((d(y, n) && (y = n), t.wrapperEl.scrollTo({ [r]: y }), d(y, n))) {
                (t.wrapperEl.style.overflow = 'hidden'),
                    (t.wrapperEl.style.scrollSnapType = ''),
                    setTimeout(() => {
                        (t.wrapperEl.style.overflow = ''), t.wrapperEl.scrollTo({ [r]: y });
                    }),
                    i.cancelAnimationFrame(t.cssModeFrameID);
                return;
            }
            t.cssModeFrameID = i.requestAnimationFrame(f);
        };
    f();
}
function _t(e, t) {
    return t === void 0 && (t = ''), [...e.children].filter((n) => n.matches(t));
}
function Jo(e) {
    try {
        console.warn(e);
        return;
    } catch {}
}
function _a(e, t) {
    t === void 0 && (t = []);
    const n = document.createElement(e);
    return n.classList.add(...(Array.isArray(t) ? t : Gx(t))), n;
}
function qx(e, t) {
    const n = [];
    for (; e.previousElementSibling; ) {
        const r = e.previousElementSibling;
        t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
    }
    return n;
}
function Jx(e, t) {
    const n = [];
    for (; e.nextElementSibling; ) {
        const r = e.nextElementSibling;
        t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
    }
    return n;
}
function Qt(e, t) {
    return Ke().getComputedStyle(e, null).getPropertyValue(t);
}
function Ld(e) {
    let t = e,
        n;
    if (t) {
        for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1);
        return n;
    }
}
function Zx(e, t) {
    const n = [];
    let r = e.parentElement;
    for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
    return n;
}
function Od(e, t, n) {
    const r = Ke();
    return n
        ? e[t === 'width' ? 'offsetWidth' : 'offsetHeight'] +
              parseFloat(r.getComputedStyle(e, null).getPropertyValue(t === 'width' ? 'margin-right' : 'margin-top')) +
              parseFloat(r.getComputedStyle(e, null).getPropertyValue(t === 'width' ? 'margin-left' : 'margin-bottom'))
        : e.offsetWidth;
}
let ul;
function ew() {
    const e = Ke(),
        t = It();
    return {
        smoothScroll: t.documentElement && t.documentElement.style && 'scrollBehavior' in t.documentElement.style,
        touch: !!('ontouchstart' in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
    };
}
function im() {
    return ul || (ul = ew()), ul;
}
let cl;
function tw(e) {
    let { userAgent: t } = e === void 0 ? {} : e;
    const n = im(),
        r = Ke(),
        i = r.navigator.platform,
        o = t || r.navigator.userAgent,
        s = { ios: !1, android: !1 },
        a = r.screen.width,
        l = r.screen.height,
        u = o.match(/(Android);?[\s\/]+([\d.]+)?/);
    let d = o.match(/(iPad).*OS\s([\d_]+)/);
    const f = o.match(/(iPod)(.*OS\s([\d_]+))?/),
        h = !d && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        g = i === 'Win32';
    let y = i === 'MacIntel';
    const x = [
        '1024x1366',
        '1366x1024',
        '834x1194',
        '1194x834',
        '834x1112',
        '1112x834',
        '768x1024',
        '1024x768',
        '820x1180',
        '1180x820',
        '810x1080',
        '1080x810',
    ];
    return (
        !d && y && n.touch && x.indexOf(`${a}x${l}`) >= 0 && ((d = o.match(/(Version)\/([\d.]+)/)), d || (d = [0, 1, '13_0_0']), (y = !1)),
        u && !g && ((s.os = 'android'), (s.android = !0)),
        (d || h || f) && ((s.os = 'ios'), (s.ios = !0)),
        s
    );
}
function nw(e) {
    return e === void 0 && (e = {}), cl || (cl = tw(e)), cl;
}
let dl;
function rw() {
    const e = Ke();
    let t = !1;
    function n() {
        const r = e.navigator.userAgent.toLowerCase();
        return r.indexOf('safari') >= 0 && r.indexOf('chrome') < 0 && r.indexOf('android') < 0;
    }
    if (n()) {
        const r = String(e.navigator.userAgent);
        if (r.includes('Version/')) {
            const [i, o] = r
                .split('Version/')[1]
                .split(' ')[0]
                .split('.')
                .map((s) => Number(s));
            t = i < 16 || (i === 16 && o < 2);
        }
    }
    return {
        isSafari: t || n(),
        needPerspectiveFix: t,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
    };
}
function iw() {
    return dl || (dl = rw()), dl;
}
function ow(e) {
    let { swiper: t, on: n, emit: r } = e;
    const i = Ke();
    let o = null,
        s = null;
    const a = () => {
            !t || t.destroyed || !t.initialized || (r('beforeResize'), r('resize'));
        },
        l = () => {
            !t ||
                t.destroyed ||
                !t.initialized ||
                ((o = new ResizeObserver((f) => {
                    s = i.requestAnimationFrame(() => {
                        const { width: h, height: g } = t;
                        let y = h,
                            x = g;
                        f.forEach((S) => {
                            let { contentBoxSize: p, contentRect: m, target: v } = S;
                            (v && v !== t.el) || ((y = m ? m.width : (p[0] || p).inlineSize), (x = m ? m.height : (p[0] || p).blockSize));
                        }),
                            (y !== h || x !== g) && a();
                    });
                })),
                o.observe(t.el));
        },
        u = () => {
            s && i.cancelAnimationFrame(s), o && o.unobserve && t.el && (o.unobserve(t.el), (o = null));
        },
        d = () => {
            !t || t.destroyed || !t.initialized || r('orientationchange');
        };
    n('init', () => {
        if (t.params.resizeObserver && typeof i.ResizeObserver < 'u') {
            l();
            return;
        }
        i.addEventListener('resize', a), i.addEventListener('orientationchange', d);
    }),
        n('destroy', () => {
            u(), i.removeEventListener('resize', a), i.removeEventListener('orientationchange', d);
        });
}
function sw(e) {
    let { swiper: t, extendParams: n, on: r, emit: i } = e;
    const o = [],
        s = Ke(),
        a = function (d, f) {
            f === void 0 && (f = {});
            const h = s.MutationObserver || s.WebkitMutationObserver,
                g = new h((y) => {
                    if (t.__preventObserver__) return;
                    if (y.length === 1) {
                        i('observerUpdate', y[0]);
                        return;
                    }
                    const x = function () {
                        i('observerUpdate', y[0]);
                    };
                    s.requestAnimationFrame ? s.requestAnimationFrame(x) : s.setTimeout(x, 0);
                });
            g.observe(d, {
                attributes: typeof f.attributes > 'u' ? !0 : f.attributes,
                childList: typeof f.childList > 'u' ? !0 : f.childList,
                characterData: typeof f.characterData > 'u' ? !0 : f.characterData,
            }),
                o.push(g);
        },
        l = () => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const d = Zx(t.hostEl);
                    for (let f = 0; f < d.length; f += 1) a(d[f]);
                }
                a(t.hostEl, { childList: t.params.observeSlideChildren }), a(t.wrapperEl, { attributes: !1 });
            }
        },
        u = () => {
            o.forEach((d) => {
                d.disconnect();
            }),
                o.splice(0, o.length);
        };
    n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), r('init', l), r('destroy', u);
}
var lw = {
    on(e, t, n) {
        const r = this;
        if (!r.eventsListeners || r.destroyed || typeof t != 'function') return r;
        const i = n ? 'unshift' : 'push';
        return (
            e.split(' ').forEach((o) => {
                r.eventsListeners[o] || (r.eventsListeners[o] = []), r.eventsListeners[o][i](t);
            }),
            r
        );
    },
    once(e, t, n) {
        const r = this;
        if (!r.eventsListeners || r.destroyed || typeof t != 'function') return r;
        function i() {
            r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
            for (var o = arguments.length, s = new Array(o), a = 0; a < o; a++) s[a] = arguments[a];
            t.apply(r, s);
        }
        return (i.__emitterProxy = t), r.on(e, i, n);
    },
    onAny(e, t) {
        const n = this;
        if (!n.eventsListeners || n.destroyed || typeof e != 'function') return n;
        const r = t ? 'unshift' : 'push';
        return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
    },
    offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
        const n = t.eventsAnyListeners.indexOf(e);
        return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
    },
    off(e, t) {
        const n = this;
        return (
            !n.eventsListeners ||
                n.destroyed ||
                !n.eventsListeners ||
                e.split(' ').forEach((r) => {
                    typeof t > 'u'
                        ? (n.eventsListeners[r] = [])
                        : n.eventsListeners[r] &&
                          n.eventsListeners[r].forEach((i, o) => {
                              (i === t || (i.__emitterProxy && i.__emitterProxy === t)) && n.eventsListeners[r].splice(o, 1);
                          });
                }),
            n
        );
    },
    emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
        let t, n, r;
        for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
        return (
            typeof o[0] == 'string' || Array.isArray(o[0])
                ? ((t = o[0]), (n = o.slice(1, o.length)), (r = e))
                : ((t = o[0].events), (n = o[0].data), (r = o[0].context || e)),
            n.unshift(r),
            (Array.isArray(t) ? t : t.split(' ')).forEach((l) => {
                e.eventsAnyListeners &&
                    e.eventsAnyListeners.length &&
                    e.eventsAnyListeners.forEach((u) => {
                        u.apply(r, [l, ...n]);
                    }),
                    e.eventsListeners &&
                        e.eventsListeners[l] &&
                        e.eventsListeners[l].forEach((u) => {
                            u.apply(r, n);
                        });
            }),
            e
        );
    },
};
function aw() {
    const e = this;
    let t, n;
    const r = e.el;
    typeof e.params.width < 'u' && e.params.width !== null ? (t = e.params.width) : (t = r.clientWidth),
        typeof e.params.height < 'u' && e.params.height !== null ? (n = e.params.height) : (n = r.clientHeight),
        !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
            ((t = t - parseInt(Qt(r, 'padding-left') || 0, 10) - parseInt(Qt(r, 'padding-right') || 0, 10)),
            (n = n - parseInt(Qt(r, 'padding-top') || 0, 10) - parseInt(Qt(r, 'padding-bottom') || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(n) && (n = 0),
            Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }));
}
function uw() {
    const e = this;
    function t(j, O) {
        return parseFloat(j.getPropertyValue(e.getDirectionLabel(O)) || 0);
    }
    const n = e.params,
        { wrapperEl: r, slidesEl: i, size: o, rtlTranslate: s, wrongRTL: a } = e,
        l = e.virtual && n.virtual.enabled,
        u = l ? e.virtual.slides.length : e.slides.length,
        d = _t(i, `.${e.params.slideClass}, swiper-slide`),
        f = l ? e.virtual.slides.length : d.length;
    let h = [];
    const g = [],
        y = [];
    let x = n.slidesOffsetBefore;
    typeof x == 'function' && (x = n.slidesOffsetBefore.call(e));
    let S = n.slidesOffsetAfter;
    typeof S == 'function' && (S = n.slidesOffsetAfter.call(e));
    const p = e.snapGrid.length,
        m = e.slidesGrid.length;
    let v = n.spaceBetween,
        w = -x,
        E = 0,
        C = 0;
    if (typeof o > 'u') return;
    typeof v == 'string' && v.indexOf('%') >= 0
        ? (v = (parseFloat(v.replace('%', '')) / 100) * o)
        : typeof v == 'string' && (v = parseFloat(v)),
        (e.virtualSize = -v),
        d.forEach((j) => {
            s ? (j.style.marginLeft = '') : (j.style.marginRight = ''), (j.style.marginBottom = ''), (j.style.marginTop = '');
        }),
        n.centeredSlides && n.cssMode && (qi(r, '--swiper-centered-offset-before', ''), qi(r, '--swiper-centered-offset-after', ''));
    const k = n.grid && n.grid.rows > 1 && e.grid;
    k ? e.grid.initSlides(d) : e.grid && e.grid.unsetSlides();
    let _;
    const b =
        n.slidesPerView === 'auto' &&
        n.breakpoints &&
        Object.keys(n.breakpoints).filter((j) => typeof n.breakpoints[j].slidesPerView < 'u').length > 0;
    for (let j = 0; j < f; j += 1) {
        _ = 0;
        let O;
        if ((d[j] && (O = d[j]), k && e.grid.updateSlide(j, O, d), !(d[j] && Qt(O, 'display') === 'none'))) {
            if (n.slidesPerView === 'auto') {
                b && (d[j].style[e.getDirectionLabel('width')] = '');
                const R = getComputedStyle(O),
                    z = O.style.transform,
                    K = O.style.webkitTransform;
                if ((z && (O.style.transform = 'none'), K && (O.style.webkitTransform = 'none'), n.roundLengths))
                    _ = e.isHorizontal() ? Od(O, 'width', !0) : Od(O, 'height', !0);
                else {
                    const ee = t(R, 'width'),
                        de = t(R, 'padding-left'),
                        Me = t(R, 'padding-right'),
                        P = t(R, 'margin-left'),
                        N = t(R, 'margin-right'),
                        L = R.getPropertyValue('box-sizing');
                    if (L && L === 'border-box') _ = ee + P + N;
                    else {
                        const { clientWidth: A, offsetWidth: Y } = O;
                        _ = ee + de + Me + P + N + (Y - A);
                    }
                }
                z && (O.style.transform = z), K && (O.style.webkitTransform = K), n.roundLengths && (_ = Math.floor(_));
            } else
                (_ = (o - (n.slidesPerView - 1) * v) / n.slidesPerView),
                    n.roundLengths && (_ = Math.floor(_)),
                    d[j] && (d[j].style[e.getDirectionLabel('width')] = `${_}px`);
            d[j] && (d[j].swiperSlideSize = _),
                y.push(_),
                n.centeredSlides
                    ? ((w = w + _ / 2 + E / 2 + v),
                      E === 0 && j !== 0 && (w = w - o / 2 - v),
                      j === 0 && (w = w - o / 2 - v),
                      Math.abs(w) < 1 / 1e3 && (w = 0),
                      n.roundLengths && (w = Math.floor(w)),
                      C % n.slidesPerGroup === 0 && h.push(w),
                      g.push(w))
                    : (n.roundLengths && (w = Math.floor(w)),
                      (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup === 0 && h.push(w),
                      g.push(w),
                      (w = w + _ + v)),
                (e.virtualSize += _ + v),
                (E = _),
                (C += 1);
        }
    }
    if (
        ((e.virtualSize = Math.max(e.virtualSize, o) + S),
        s && a && (n.effect === 'slide' || n.effect === 'coverflow') && (r.style.width = `${e.virtualSize + v}px`),
        n.setWrapperSize && (r.style[e.getDirectionLabel('width')] = `${e.virtualSize + v}px`),
        k && e.grid.updateWrapperSize(_, h),
        !n.centeredSlides)
    ) {
        const j = [];
        for (let O = 0; O < h.length; O += 1) {
            let R = h[O];
            n.roundLengths && (R = Math.floor(R)), h[O] <= e.virtualSize - o && j.push(R);
        }
        (h = j), Math.floor(e.virtualSize - o) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - o);
    }
    if (l && n.loop) {
        const j = y[0] + v;
        if (n.slidesPerGroup > 1) {
            const O = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup),
                R = j * n.slidesPerGroup;
            for (let z = 0; z < O; z += 1) h.push(h[h.length - 1] + R);
        }
        for (let O = 0; O < e.virtual.slidesBefore + e.virtual.slidesAfter; O += 1)
            n.slidesPerGroup === 1 && h.push(h[h.length - 1] + j), g.push(g[g.length - 1] + j), (e.virtualSize += j);
    }
    if ((h.length === 0 && (h = [0]), v !== 0)) {
        const j = e.isHorizontal() && s ? 'marginLeft' : e.getDirectionLabel('marginRight');
        d.filter((O, R) => (!n.cssMode || n.loop ? !0 : R !== d.length - 1)).forEach((O) => {
            O.style[j] = `${v}px`;
        });
    }
    if (n.centeredSlides && n.centeredSlidesBounds) {
        let j = 0;
        y.forEach((R) => {
            j += R + (v || 0);
        }),
            (j -= v);
        const O = j - o;
        h = h.map((R) => (R <= 0 ? -x : R > O ? O + S : R));
    }
    if (n.centerInsufficientSlides) {
        let j = 0;
        if (
            (y.forEach((O) => {
                j += O + (v || 0);
            }),
            (j -= v),
            j < o)
        ) {
            const O = (o - j) / 2;
            h.forEach((R, z) => {
                h[z] = R - O;
            }),
                g.forEach((R, z) => {
                    g[z] = R + O;
                });
        }
    }
    if (
        (Object.assign(e, { slides: d, snapGrid: h, slidesGrid: g, slidesSizesGrid: y }),
        n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
    ) {
        qi(r, '--swiper-centered-offset-before', `${-h[0]}px`),
            qi(r, '--swiper-centered-offset-after', `${e.size / 2 - y[y.length - 1] / 2}px`);
        const j = -e.snapGrid[0],
            O = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((R) => R + j)), (e.slidesGrid = e.slidesGrid.map((R) => R + O));
    }
    if (
        (f !== u && e.emit('slidesLengthChange'),
        h.length !== p && (e.params.watchOverflow && e.checkOverflow(), e.emit('snapGridLengthChange')),
        g.length !== m && e.emit('slidesGridLengthChange'),
        n.watchSlidesProgress && e.updateSlidesOffset(),
        e.emit('slidesUpdated'),
        !l && !n.cssMode && (n.effect === 'slide' || n.effect === 'fade'))
    ) {
        const j = `${n.containerModifierClass}backface-hidden`,
            O = e.el.classList.contains(j);
        f <= n.maxBackfaceHiddenSlides ? O || e.el.classList.add(j) : O && e.el.classList.remove(j);
    }
}
function cw(e) {
    const t = this,
        n = [],
        r = t.virtual && t.params.virtual.enabled;
    let i = 0,
        o;
    typeof e == 'number' ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
    const s = (a) => (r ? t.slides[t.getSlideIndexByData(a)] : t.slides[a]);
    if (t.params.slidesPerView !== 'auto' && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((a) => {
                n.push(a);
            });
        else
            for (o = 0; o < Math.ceil(t.params.slidesPerView); o += 1) {
                const a = t.activeIndex + o;
                if (a > t.slides.length && !r) break;
                n.push(s(a));
            }
    else n.push(s(t.activeIndex));
    for (o = 0; o < n.length; o += 1)
        if (typeof n[o] < 'u') {
            const a = n[o].offsetHeight;
            i = a > i ? a : i;
        }
    (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function dw() {
    const e = this,
        t = e.slides,
        n = e.isElement ? (e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop) : 0;
    for (let r = 0; r < t.length; r += 1)
        t[r].swiperSlideOffset = (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - n - e.cssOverflowAdjustment();
}
function fw(e) {
    e === void 0 && (e = (this && this.translate) || 0);
    const t = this,
        n = t.params,
        { slides: r, rtlTranslate: i, snapGrid: o } = t;
    if (r.length === 0) return;
    typeof r[0].swiperSlideOffset > 'u' && t.updateSlidesOffset();
    let s = -e;
    i && (s = e),
        r.forEach((l) => {
            l.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass);
        }),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
    let a = n.spaceBetween;
    typeof a == 'string' && a.indexOf('%') >= 0
        ? (a = (parseFloat(a.replace('%', '')) / 100) * t.size)
        : typeof a == 'string' && (a = parseFloat(a));
    for (let l = 0; l < r.length; l += 1) {
        const u = r[l];
        let d = u.swiperSlideOffset;
        n.cssMode && n.centeredSlides && (d -= r[0].swiperSlideOffset);
        const f = (s + (n.centeredSlides ? t.minTranslate() : 0) - d) / (u.swiperSlideSize + a),
            h = (s - o[0] + (n.centeredSlides ? t.minTranslate() : 0) - d) / (u.swiperSlideSize + a),
            g = -(s - d),
            y = g + t.slidesSizesGrid[l],
            x = g >= 0 && g <= t.size - t.slidesSizesGrid[l];
        ((g >= 0 && g < t.size - 1) || (y > 1 && y <= t.size) || (g <= 0 && y >= t.size)) &&
            (t.visibleSlides.push(u), t.visibleSlidesIndexes.push(l), r[l].classList.add(n.slideVisibleClass)),
            x && r[l].classList.add(n.slideFullyVisibleClass),
            (u.progress = i ? -f : f),
            (u.originalProgress = i ? -h : h);
    }
}
function pw(e) {
    const t = this;
    if (typeof e > 'u') {
        const d = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * d) || 0;
    }
    const n = t.params,
        r = t.maxTranslate() - t.minTranslate();
    let { progress: i, isBeginning: o, isEnd: s, progressLoop: a } = t;
    const l = o,
        u = s;
    if (r === 0) (i = 0), (o = !0), (s = !0);
    else {
        i = (e - t.minTranslate()) / r;
        const d = Math.abs(e - t.minTranslate()) < 1,
            f = Math.abs(e - t.maxTranslate()) < 1;
        (o = d || i <= 0), (s = f || i >= 1), d && (i = 0), f && (i = 1);
    }
    if (n.loop) {
        const d = t.getSlideIndexByData(0),
            f = t.getSlideIndexByData(t.slides.length - 1),
            h = t.slidesGrid[d],
            g = t.slidesGrid[f],
            y = t.slidesGrid[t.slidesGrid.length - 1],
            x = Math.abs(e);
        x >= h ? (a = (x - h) / y) : (a = (x + y - g) / y), a > 1 && (a -= 1);
    }
    Object.assign(t, { progress: i, progressLoop: a, isBeginning: o, isEnd: s }),
        (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) && t.updateSlidesProgress(e),
        o && !l && t.emit('reachBeginning toEdge'),
        s && !u && t.emit('reachEnd toEdge'),
        ((l && !o) || (u && !s)) && t.emit('fromEdge'),
        t.emit('progress', i);
}
function hw() {
    const e = this,
        { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
        o = e.virtual && n.virtual.enabled,
        s = e.grid && n.grid && n.grid.rows > 1,
        a = (f) => _t(r, `.${n.slideClass}${f}, swiper-slide${f}`)[0];
    t.forEach((f) => {
        f.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass);
    });
    let l, u, d;
    if (o)
        if (n.loop) {
            let f = i - e.virtual.slidesBefore;
            f < 0 && (f = e.virtual.slides.length + f),
                f >= e.virtual.slides.length && (f -= e.virtual.slides.length),
                (l = a(`[data-swiper-slide-index="${f}"]`));
        } else l = a(`[data-swiper-slide-index="${i}"]`);
    else
        s
            ? ((l = t.filter((f) => f.column === i)[0]),
              (d = t.filter((f) => f.column === i + 1)[0]),
              (u = t.filter((f) => f.column === i - 1)[0]))
            : (l = t[i]);
    l &&
        (l.classList.add(n.slideActiveClass),
        s
            ? (d && d.classList.add(n.slideNextClass), u && u.classList.add(n.slidePrevClass))
            : ((d = Jx(l, `.${n.slideClass}, swiper-slide`)[0]),
              n.loop && !d && (d = t[0]),
              d && d.classList.add(n.slideNextClass),
              (u = qx(l, `.${n.slideClass}, swiper-slide`)[0]),
              n.loop && !u === 0 && (u = t[t.length - 1]),
              u && u.classList.add(n.slidePrevClass))),
        e.emitSlidesClasses();
}
const go = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const n = () => (e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`),
            r = t.closest(n());
        if (r) {
            let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
            !i &&
                e.isElement &&
                (r.shadowRoot
                    ? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
                    : requestAnimationFrame(() => {
                          r.shadowRoot && ((i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)), i && i.remove());
                      })),
                i && i.remove();
        }
    },
    fl = (e, t) => {
        if (!e.slides[t]) return;
        const n = e.slides[t].querySelector('[loading="lazy"]');
        n && n.removeAttribute('loading');
    },
    ba = (e) => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const n = e.slides.length;
        if (!n || !t || t < 0) return;
        t = Math.min(t, n);
        const r = e.params.slidesPerView === 'auto' ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            i = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
            const s = i,
                a = [s - t];
            a.push(...Array.from({ length: t }).map((l, u) => s + r + u)),
                e.slides.forEach((l, u) => {
                    a.includes(l.column) && fl(e, u);
                });
            return;
        }
        const o = i + r - 1;
        if (e.params.rewind || e.params.loop)
            for (let s = i - t; s <= o + t; s += 1) {
                const a = ((s % n) + n) % n;
                (a < i || a > o) && fl(e, a);
            }
        else for (let s = Math.max(i - t, 0); s <= Math.min(o + t, n - 1); s += 1) s !== i && (s > o || s < i) && fl(e, s);
    };
function mw(e) {
    const { slidesGrid: t, params: n } = e,
        r = e.rtlTranslate ? e.translate : -e.translate;
    let i;
    for (let o = 0; o < t.length; o += 1)
        typeof t[o + 1] < 'u'
            ? r >= t[o] && r < t[o + 1] - (t[o + 1] - t[o]) / 2
                ? (i = o)
                : r >= t[o] && r < t[o + 1] && (i = o + 1)
            : r >= t[o] && (i = o);
    return n.normalizeSlideIndex && (i < 0 || typeof i > 'u') && (i = 0), i;
}
function gw(e) {
    const t = this,
        n = t.rtlTranslate ? t.translate : -t.translate,
        { snapGrid: r, params: i, activeIndex: o, realIndex: s, snapIndex: a } = t;
    let l = e,
        u;
    const d = (g) => {
        let y = g - t.virtual.slidesBefore;
        return y < 0 && (y = t.virtual.slides.length + y), y >= t.virtual.slides.length && (y -= t.virtual.slides.length), y;
    };
    if ((typeof l > 'u' && (l = mw(t)), r.indexOf(n) >= 0)) u = r.indexOf(n);
    else {
        const g = Math.min(i.slidesPerGroupSkip, l);
        u = g + Math.floor((l - g) / i.slidesPerGroup);
    }
    if ((u >= r.length && (u = r.length - 1), l === o && !t.params.loop)) {
        u !== a && ((t.snapIndex = u), t.emit('snapIndexChange'));
        return;
    }
    if (l === o && t.params.loop && t.virtual && t.params.virtual.enabled) {
        t.realIndex = d(l);
        return;
    }
    const f = t.grid && i.grid && i.grid.rows > 1;
    let h;
    if (t.virtual && i.virtual.enabled && i.loop) h = d(l);
    else if (f) {
        const g = t.slides.filter((x) => x.column === l)[0];
        let y = parseInt(g.getAttribute('data-swiper-slide-index'), 10);
        Number.isNaN(y) && (y = Math.max(t.slides.indexOf(g), 0)), (h = Math.floor(y / i.grid.rows));
    } else if (t.slides[l]) {
        const g = t.slides[l].getAttribute('data-swiper-slide-index');
        g ? (h = parseInt(g, 10)) : (h = l);
    } else h = l;
    Object.assign(t, { previousSnapIndex: a, snapIndex: u, previousRealIndex: s, realIndex: h, previousIndex: o, activeIndex: l }),
        t.initialized && ba(t),
        t.emit('activeIndexChange'),
        t.emit('snapIndexChange'),
        (t.initialized || t.params.runCallbacksOnInit) && (s !== h && t.emit('realIndexChange'), t.emit('slideChange'));
}
function vw(e, t) {
    const n = this,
        r = n.params;
    let i = e.closest(`.${r.slideClass}, swiper-slide`);
    !i &&
        n.isElement &&
        t &&
        t.length > 1 &&
        t.includes(e) &&
        [...t.slice(t.indexOf(e) + 1, t.length)].forEach((a) => {
            !i && a.matches && a.matches(`.${r.slideClass}, swiper-slide`) && (i = a);
        });
    let o = !1,
        s;
    if (i) {
        for (let a = 0; a < n.slides.length; a += 1)
            if (n.slides[a] === i) {
                (o = !0), (s = a);
                break;
            }
    }
    if (i && o)
        (n.clickedSlide = i),
            n.virtual && n.params.virtual.enabled
                ? (n.clickedIndex = parseInt(i.getAttribute('data-swiper-slide-index'), 10))
                : (n.clickedIndex = s);
    else {
        (n.clickedSlide = void 0), (n.clickedIndex = void 0);
        return;
    }
    r.slideToClickedSlide && n.clickedIndex !== void 0 && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide();
}
var yw = {
    updateSize: aw,
    updateSlides: uw,
    updateAutoHeight: cw,
    updateSlidesOffset: dw,
    updateSlidesProgress: fw,
    updateProgress: pw,
    updateSlidesClasses: hw,
    updateActiveIndex: gw,
    updateClickedSlide: vw,
};
function xw(e) {
    e === void 0 && (e = this.isHorizontal() ? 'x' : 'y');
    const t = this,
        { params: n, rtlTranslate: r, translate: i, wrapperEl: o } = t;
    if (n.virtualTranslate) return r ? -i : i;
    if (n.cssMode) return i;
    let s = Qx(o, e);
    return (s += t.cssOverflowAdjustment()), r && (s = -s), s || 0;
}
function ww(e, t) {
    const n = this,
        { rtlTranslate: r, params: i, wrapperEl: o, progress: s } = n;
    let a = 0,
        l = 0;
    const u = 0;
    n.isHorizontal() ? (a = r ? -e : e) : (l = e),
        i.roundLengths && ((a = Math.floor(a)), (l = Math.floor(l))),
        (n.previousTranslate = n.translate),
        (n.translate = n.isHorizontal() ? a : l),
        i.cssMode
            ? (o[n.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = n.isHorizontal() ? -a : -l)
            : i.virtualTranslate ||
              (n.isHorizontal() ? (a -= n.cssOverflowAdjustment()) : (l -= n.cssOverflowAdjustment()),
              (o.style.transform = `translate3d(${a}px, ${l}px, ${u}px)`));
    let d;
    const f = n.maxTranslate() - n.minTranslate();
    f === 0 ? (d = 0) : (d = (e - n.minTranslate()) / f), d !== s && n.updateProgress(e), n.emit('setTranslate', n.translate, t);
}
function Sw() {
    return -this.snapGrid[0];
}
function Ew() {
    return -this.snapGrid[this.snapGrid.length - 1];
}
function Cw(e, t, n, r, i) {
    e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), n === void 0 && (n = !0), r === void 0 && (r = !0);
    const o = this,
        { params: s, wrapperEl: a } = o;
    if (o.animating && s.preventInteractionOnTransition) return !1;
    const l = o.minTranslate(),
        u = o.maxTranslate();
    let d;
    if ((r && e > l ? (d = l) : r && e < u ? (d = u) : (d = e), o.updateProgress(d), s.cssMode)) {
        const f = o.isHorizontal();
        if (t === 0) a[f ? 'scrollLeft' : 'scrollTop'] = -d;
        else {
            if (!o.support.smoothScroll) return rm({ swiper: o, targetPosition: -d, side: f ? 'left' : 'top' }), !0;
            a.scrollTo({ [f ? 'left' : 'top']: -d, behavior: 'smooth' });
        }
        return !0;
    }
    return (
        t === 0
            ? (o.setTransition(0), o.setTranslate(d), n && (o.emit('beforeTransitionStart', t, i), o.emit('transitionEnd')))
            : (o.setTransition(t),
              o.setTranslate(d),
              n && (o.emit('beforeTransitionStart', t, i), o.emit('transitionStart')),
              o.animating ||
                  ((o.animating = !0),
                  o.onTranslateToWrapperTransitionEnd ||
                      (o.onTranslateToWrapperTransitionEnd = function (h) {
                          !o ||
                              o.destroyed ||
                              (h.target === this &&
                                  (o.wrapperEl.removeEventListener('transitionend', o.onTranslateToWrapperTransitionEnd),
                                  (o.onTranslateToWrapperTransitionEnd = null),
                                  delete o.onTranslateToWrapperTransitionEnd,
                                  n && o.emit('transitionEnd')));
                      }),
                  o.wrapperEl.addEventListener('transitionend', o.onTranslateToWrapperTransitionEnd))),
        !0
    );
}
var kw = { getTranslate: xw, setTranslate: ww, minTranslate: Sw, maxTranslate: Ew, translateTo: Cw };
function Tw(e, t) {
    const n = this;
    n.params.cssMode || ((n.wrapperEl.style.transitionDuration = `${e}ms`), (n.wrapperEl.style.transitionDelay = e === 0 ? '0ms' : '')),
        n.emit('setTransition', e, t);
}
function om(e) {
    let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
    const { activeIndex: o, previousIndex: s } = t;
    let a = r;
    if ((a || (o > s ? (a = 'next') : o < s ? (a = 'prev') : (a = 'reset')), t.emit(`transition${i}`), n && o !== s)) {
        if (a === 'reset') {
            t.emit(`slideResetTransition${i}`);
            return;
        }
        t.emit(`slideChangeTransition${i}`), a === 'next' ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`);
    }
}
function jw(e, t) {
    e === void 0 && (e = !0);
    const n = this,
        { params: r } = n;
    r.cssMode || (r.autoHeight && n.updateAutoHeight(), om({ swiper: n, runCallbacks: e, direction: t, step: 'Start' }));
}
function Pw(e, t) {
    e === void 0 && (e = !0);
    const n = this,
        { params: r } = n;
    (n.animating = !1), !r.cssMode && (n.setTransition(0), om({ swiper: n, runCallbacks: e, direction: t, step: 'End' }));
}
var _w = { setTransition: Tw, transitionStart: jw, transitionEnd: Pw };
function bw(e, t, n, r, i) {
    e === void 0 && (e = 0),
        t === void 0 && (t = this.params.speed),
        n === void 0 && (n = !0),
        typeof e == 'string' && (e = parseInt(e, 10));
    const o = this;
    let s = e;
    s < 0 && (s = 0);
    const { params: a, snapGrid: l, slidesGrid: u, previousIndex: d, activeIndex: f, rtlTranslate: h, wrapperEl: g, enabled: y } = o;
    if ((o.animating && a.preventInteractionOnTransition) || (!y && !r && !i)) return !1;
    const x = Math.min(o.params.slidesPerGroupSkip, s);
    let S = x + Math.floor((s - x) / o.params.slidesPerGroup);
    S >= l.length && (S = l.length - 1);
    const p = -l[S];
    if (a.normalizeSlideIndex)
        for (let v = 0; v < u.length; v += 1) {
            const w = -Math.floor(p * 100),
                E = Math.floor(u[v] * 100),
                C = Math.floor(u[v + 1] * 100);
            typeof u[v + 1] < 'u' ? (w >= E && w < C - (C - E) / 2 ? (s = v) : w >= E && w < C && (s = v + 1)) : w >= E && (s = v);
        }
    if (
        o.initialized &&
        s !== f &&
        ((!o.allowSlideNext && (h ? p > o.translate && p > o.minTranslate() : p < o.translate && p < o.minTranslate())) ||
            (!o.allowSlidePrev && p > o.translate && p > o.maxTranslate() && (f || 0) !== s))
    )
        return !1;
    s !== (d || 0) && n && o.emit('beforeSlideChangeStart'), o.updateProgress(p);
    let m;
    if ((s > f ? (m = 'next') : s < f ? (m = 'prev') : (m = 'reset'), (h && -p === o.translate) || (!h && p === o.translate)))
        return (
            o.updateActiveIndex(s),
            a.autoHeight && o.updateAutoHeight(),
            o.updateSlidesClasses(),
            a.effect !== 'slide' && o.setTranslate(p),
            m !== 'reset' && (o.transitionStart(n, m), o.transitionEnd(n, m)),
            !1
        );
    if (a.cssMode) {
        const v = o.isHorizontal(),
            w = h ? p : -p;
        if (t === 0) {
            const E = o.virtual && o.params.virtual.enabled;
            E && ((o.wrapperEl.style.scrollSnapType = 'none'), (o._immediateVirtual = !0)),
                E && !o._cssModeVirtualInitialSet && o.params.initialSlide > 0
                    ? ((o._cssModeVirtualInitialSet = !0),
                      requestAnimationFrame(() => {
                          g[v ? 'scrollLeft' : 'scrollTop'] = w;
                      }))
                    : (g[v ? 'scrollLeft' : 'scrollTop'] = w),
                E &&
                    requestAnimationFrame(() => {
                        (o.wrapperEl.style.scrollSnapType = ''), (o._immediateVirtual = !1);
                    });
        } else {
            if (!o.support.smoothScroll) return rm({ swiper: o, targetPosition: w, side: v ? 'left' : 'top' }), !0;
            g.scrollTo({ [v ? 'left' : 'top']: w, behavior: 'smooth' });
        }
        return !0;
    }
    return (
        o.setTransition(t),
        o.setTranslate(p),
        o.updateActiveIndex(s),
        o.updateSlidesClasses(),
        o.emit('beforeTransitionStart', t, r),
        o.transitionStart(n, m),
        t === 0
            ? o.transitionEnd(n, m)
            : o.animating ||
              ((o.animating = !0),
              o.onSlideToWrapperTransitionEnd ||
                  (o.onSlideToWrapperTransitionEnd = function (w) {
                      !o ||
                          o.destroyed ||
                          (w.target === this &&
                              (o.wrapperEl.removeEventListener('transitionend', o.onSlideToWrapperTransitionEnd),
                              (o.onSlideToWrapperTransitionEnd = null),
                              delete o.onSlideToWrapperTransitionEnd,
                              o.transitionEnd(n, m)));
                  }),
              o.wrapperEl.addEventListener('transitionend', o.onSlideToWrapperTransitionEnd)),
        !0
    );
}
function Iw(e, t, n, r) {
    e === void 0 && (e = 0),
        t === void 0 && (t = this.params.speed),
        n === void 0 && (n = !0),
        typeof e == 'string' && (e = parseInt(e, 10));
    const i = this,
        o = i.grid && i.params.grid && i.params.grid.rows > 1;
    let s = e;
    if (i.params.loop)
        if (i.virtual && i.params.virtual.enabled) s = s + i.virtual.slidesBefore;
        else {
            let a;
            if (o) {
                const h = s * i.params.grid.rows;
                a = i.slides.filter((g) => g.getAttribute('data-swiper-slide-index') * 1 === h)[0].column;
            } else a = i.getSlideIndexByData(s);
            const l = o ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
                { centeredSlides: u } = i.params;
            let d = i.params.slidesPerView;
            d === 'auto'
                ? (d = i.slidesPerViewDynamic())
                : ((d = Math.ceil(parseFloat(i.params.slidesPerView, 10))), u && d % 2 === 0 && (d = d + 1));
            let f = l - a < d;
            if ((u && (f = f || a < Math.ceil(d / 2)), f)) {
                const h = u ? (a < i.activeIndex ? 'prev' : 'next') : a - i.activeIndex - 1 < i.params.slidesPerView ? 'next' : 'prev';
                i.loopFix({
                    direction: h,
                    slideTo: !0,
                    activeSlideIndex: h === 'next' ? a + 1 : a - l + 1,
                    slideRealIndex: h === 'next' ? i.realIndex : void 0,
                });
            }
            if (o) {
                const h = s * i.params.grid.rows;
                s = i.slides.filter((g) => g.getAttribute('data-swiper-slide-index') * 1 === h)[0].column;
            } else s = i.getSlideIndexByData(s);
        }
    return (
        requestAnimationFrame(() => {
            i.slideTo(s, t, n, r);
        }),
        i
    );
}
function Nw(e, t, n) {
    e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
    const r = this,
        { enabled: i, params: o, animating: s } = r;
    if (!i) return r;
    let a = o.slidesPerGroup;
    o.slidesPerView === 'auto' &&
        o.slidesPerGroup === 1 &&
        o.slidesPerGroupAuto &&
        (a = Math.max(r.slidesPerViewDynamic('current', !0), 1));
    const l = r.activeIndex < o.slidesPerGroupSkip ? 1 : a,
        u = r.virtual && o.virtual.enabled;
    if (o.loop) {
        if (s && !u && o.loopPreventsSliding) return !1;
        if (
            (r.loopFix({ direction: 'next' }), (r._clientLeft = r.wrapperEl.clientLeft), r.activeIndex === r.slides.length - 1 && o.cssMode)
        )
            return (
                requestAnimationFrame(() => {
                    r.slideTo(r.activeIndex + l, e, t, n);
                }),
                !0
            );
    }
    return o.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + l, e, t, n);
}
function Lw(e, t, n) {
    e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
    const r = this,
        { params: i, snapGrid: o, slidesGrid: s, rtlTranslate: a, enabled: l, animating: u } = r;
    if (!l) return r;
    const d = r.virtual && i.virtual.enabled;
    if (i.loop) {
        if (u && !d && i.loopPreventsSliding) return !1;
        r.loopFix({ direction: 'prev' }), (r._clientLeft = r.wrapperEl.clientLeft);
    }
    const f = a ? r.translate : -r.translate;
    function h(p) {
        return p < 0 ? -Math.floor(Math.abs(p)) : Math.floor(p);
    }
    const g = h(f),
        y = o.map((p) => h(p));
    let x = o[y.indexOf(g) - 1];
    if (typeof x > 'u' && i.cssMode) {
        let p;
        o.forEach((m, v) => {
            g >= m && (p = v);
        }),
            typeof p < 'u' && (x = o[p > 0 ? p - 1 : p]);
    }
    let S = 0;
    if (
        (typeof x < 'u' &&
            ((S = s.indexOf(x)),
            S < 0 && (S = r.activeIndex - 1),
            i.slidesPerView === 'auto' &&
                i.slidesPerGroup === 1 &&
                i.slidesPerGroupAuto &&
                ((S = S - r.slidesPerViewDynamic('previous', !0) + 1), (S = Math.max(S, 0)))),
        i.rewind && r.isBeginning)
    ) {
        const p = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
        return r.slideTo(p, e, t, n);
    } else if (i.loop && r.activeIndex === 0 && i.cssMode)
        return (
            requestAnimationFrame(() => {
                r.slideTo(S, e, t, n);
            }),
            !0
        );
    return r.slideTo(S, e, t, n);
}
function Ow(e, t, n) {
    e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
    const r = this;
    return r.slideTo(r.activeIndex, e, t, n);
}
function Mw(e, t, n, r) {
    e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), r === void 0 && (r = 0.5);
    const i = this;
    let o = i.activeIndex;
    const s = Math.min(i.params.slidesPerGroupSkip, o),
        a = s + Math.floor((o - s) / i.params.slidesPerGroup),
        l = i.rtlTranslate ? i.translate : -i.translate;
    if (l >= i.snapGrid[a]) {
        const u = i.snapGrid[a],
            d = i.snapGrid[a + 1];
        l - u > (d - u) * r && (o += i.params.slidesPerGroup);
    } else {
        const u = i.snapGrid[a - 1],
            d = i.snapGrid[a];
        l - u <= (d - u) * r && (o -= i.params.slidesPerGroup);
    }
    return (o = Math.max(o, 0)), (o = Math.min(o, i.slidesGrid.length - 1)), i.slideTo(o, e, t, n);
}
function zw() {
    const e = this,
        { params: t, slidesEl: n } = e,
        r = t.slidesPerView === 'auto' ? e.slidesPerViewDynamic() : t.slidesPerView;
    let i = e.clickedIndex,
        o;
    const s = e.isElement ? 'swiper-slide' : `.${t.slideClass}`;
    if (t.loop) {
        if (e.animating) return;
        (o = parseInt(e.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
            t.centeredSlides
                ? i < e.loopedSlides - r / 2 || i > e.slides.length - e.loopedSlides + r / 2
                    ? (e.loopFix(),
                      (i = e.getSlideIndex(_t(n, `${s}[data-swiper-slide-index="${o}"]`)[0])),
                      Pa(() => {
                          e.slideTo(i);
                      }))
                    : e.slideTo(i)
                : i > e.slides.length - r
                ? (e.loopFix(),
                  (i = e.getSlideIndex(_t(n, `${s}[data-swiper-slide-index="${o}"]`)[0])),
                  Pa(() => {
                      e.slideTo(i);
                  }))
                : e.slideTo(i);
    } else e.slideTo(i);
}
var Rw = { slideTo: bw, slideToLoop: Iw, slideNext: Nw, slidePrev: Lw, slideReset: Ow, slideToClosest: Mw, slideToClickedSlide: zw };
function Dw(e) {
    const t = this,
        { params: n, slidesEl: r } = t;
    if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
    const i = () => {
            _t(r, `.${n.slideClass}, swiper-slide`).forEach((f, h) => {
                f.setAttribute('data-swiper-slide-index', h);
            });
        },
        o = t.grid && n.grid && n.grid.rows > 1,
        s = n.slidesPerGroup * (o ? n.grid.rows : 1),
        a = t.slides.length % s !== 0,
        l = o && t.slides.length % n.grid.rows !== 0,
        u = (d) => {
            for (let f = 0; f < d; f += 1) {
                const h = t.isElement ? _a('swiper-slide', [n.slideBlankClass]) : _a('div', [n.slideClass, n.slideBlankClass]);
                t.slidesEl.append(h);
            }
        };
    if (a) {
        if (n.loopAddBlankSlides) {
            const d = s - (t.slides.length % s);
            u(d), t.recalcSlides(), t.updateSlides();
        } else
            Jo(
                'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
            );
        i();
    } else if (l) {
        if (n.loopAddBlankSlides) {
            const d = n.grid.rows - (t.slides.length % n.grid.rows);
            u(d), t.recalcSlides(), t.updateSlides();
        } else
            Jo(
                'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
            );
        i();
    } else i();
    t.loopFix({ slideRealIndex: e, direction: n.centeredSlides ? void 0 : 'next' });
}
function Aw(e) {
    let {
        slideRealIndex: t,
        slideTo: n = !0,
        direction: r,
        setTranslate: i,
        activeSlideIndex: o,
        byController: s,
        byMousewheel: a,
    } = e === void 0 ? {} : e;
    const l = this;
    if (!l.params.loop) return;
    l.emit('beforeLoopFix');
    const { slides: u, allowSlidePrev: d, allowSlideNext: f, slidesEl: h, params: g } = l,
        { centeredSlides: y } = g;
    if (((l.allowSlidePrev = !0), (l.allowSlideNext = !0), l.virtual && g.virtual.enabled)) {
        n &&
            (!g.centeredSlides && l.snapIndex === 0
                ? l.slideTo(l.virtual.slides.length, 0, !1, !0)
                : g.centeredSlides && l.snapIndex < g.slidesPerView
                ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
                : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
            (l.allowSlidePrev = d),
            (l.allowSlideNext = f),
            l.emit('loopFix');
        return;
    }
    let x = g.slidesPerView;
    x === 'auto' ? (x = l.slidesPerViewDynamic()) : ((x = Math.ceil(parseFloat(g.slidesPerView, 10))), y && x % 2 === 0 && (x = x + 1));
    const S = g.slidesPerGroupAuto ? x : g.slidesPerGroup;
    let p = S;
    p % S !== 0 && (p += S - (p % S)), (p += g.loopAdditionalSlides), (l.loopedSlides = p);
    const m = l.grid && g.grid && g.grid.rows > 1;
    u.length < x + p
        ? Jo(
              'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
          )
        : m && g.grid.fill === 'row' && Jo('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
    const v = [],
        w = [];
    let E = l.activeIndex;
    typeof o > 'u' ? (o = l.getSlideIndex(u.filter((z) => z.classList.contains(g.slideActiveClass))[0])) : (E = o);
    const C = r === 'next' || !r,
        k = r === 'prev' || !r;
    let _ = 0,
        b = 0;
    const j = m ? Math.ceil(u.length / g.grid.rows) : u.length,
        R = (m ? u[o].column : o) + (y && typeof i > 'u' ? -x / 2 + 0.5 : 0);
    if (R < p) {
        _ = Math.max(p - R, S);
        for (let z = 0; z < p - R; z += 1) {
            const K = z - Math.floor(z / j) * j;
            if (m) {
                const ee = j - K - 1;
                for (let de = u.length - 1; de >= 0; de -= 1) u[de].column === ee && v.push(de);
            } else v.push(j - K - 1);
        }
    } else if (R + x > j - p) {
        b = Math.max(R - (j - p * 2), S);
        for (let z = 0; z < b; z += 1) {
            const K = z - Math.floor(z / j) * j;
            m
                ? u.forEach((ee, de) => {
                      ee.column === K && w.push(de);
                  })
                : w.push(K);
        }
    }
    if (
        ((l.__preventObserver__ = !0),
        requestAnimationFrame(() => {
            l.__preventObserver__ = !1;
        }),
        k &&
            v.forEach((z) => {
                (u[z].swiperLoopMoveDOM = !0), h.prepend(u[z]), (u[z].swiperLoopMoveDOM = !1);
            }),
        C &&
            w.forEach((z) => {
                (u[z].swiperLoopMoveDOM = !0), h.append(u[z]), (u[z].swiperLoopMoveDOM = !1);
            }),
        l.recalcSlides(),
        g.slidesPerView === 'auto'
            ? l.updateSlides()
            : m &&
              ((v.length > 0 && k) || (w.length > 0 && C)) &&
              l.slides.forEach((z, K) => {
                  l.grid.updateSlide(K, z, l.slides);
              }),
        g.watchSlidesProgress && l.updateSlidesOffset(),
        n)
    ) {
        if (v.length > 0 && k) {
            if (typeof t > 'u') {
                const z = l.slidesGrid[E],
                    ee = l.slidesGrid[E + _] - z;
                a
                    ? l.setTranslate(l.translate - ee)
                    : (l.slideTo(E + _, 0, !1, !0),
                      i &&
                          ((l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - ee),
                          (l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - ee)));
            } else if (i) {
                const z = m ? v.length / g.grid.rows : v.length;
                l.slideTo(l.activeIndex + z, 0, !1, !0), (l.touchEventsData.currentTranslate = l.translate);
            }
        } else if (w.length > 0 && C)
            if (typeof t > 'u') {
                const z = l.slidesGrid[E],
                    ee = l.slidesGrid[E - b] - z;
                a
                    ? l.setTranslate(l.translate - ee)
                    : (l.slideTo(E - b, 0, !1, !0),
                      i &&
                          ((l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - ee),
                          (l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - ee)));
            } else {
                const z = m ? w.length / g.grid.rows : w.length;
                l.slideTo(l.activeIndex - z, 0, !1, !0);
            }
    }
    if (((l.allowSlidePrev = d), (l.allowSlideNext = f), l.controller && l.controller.control && !s)) {
        const z = { slideRealIndex: t, direction: r, setTranslate: i, activeSlideIndex: o, byController: !0 };
        Array.isArray(l.controller.control)
            ? l.controller.control.forEach((K) => {
                  !K.destroyed && K.params.loop && K.loopFix({ ...z, slideTo: K.params.slidesPerView === g.slidesPerView ? n : !1 });
              })
            : l.controller.control instanceof l.constructor &&
              l.controller.control.params.loop &&
              l.controller.control.loopFix({ ...z, slideTo: l.controller.control.params.slidesPerView === g.slidesPerView ? n : !1 });
    }
    l.emit('loopFix');
}
function $w() {
    const e = this,
        { params: t, slidesEl: n } = e;
    if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
    e.recalcSlides();
    const r = [];
    e.slides.forEach((i) => {
        const o = typeof i.swiperSlideIndex > 'u' ? i.getAttribute('data-swiper-slide-index') * 1 : i.swiperSlideIndex;
        r[o] = i;
    }),
        e.slides.forEach((i) => {
            i.removeAttribute('data-swiper-slide-index');
        }),
        r.forEach((i) => {
            n.append(i);
        }),
        e.recalcSlides(),
        e.slideTo(e.realIndex, 0);
}
var Fw = { loopCreate: Dw, loopFix: Aw, loopDestroy: $w };
function Bw(e) {
    const t = this;
    if (!t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode) return;
    const n = t.params.touchEventsTarget === 'container' ? t.el : t.wrapperEl;
    t.isElement && (t.__preventObserver__ = !0),
        (n.style.cursor = 'move'),
        (n.style.cursor = e ? 'grabbing' : 'grab'),
        t.isElement &&
            requestAnimationFrame(() => {
                t.__preventObserver__ = !1;
            });
}
function Ww() {
    const e = this;
    (e.params.watchOverflow && e.isLocked) ||
        e.params.cssMode ||
        (e.isElement && (e.__preventObserver__ = !0),
        (e[e.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = ''),
        e.isElement &&
            requestAnimationFrame(() => {
                e.__preventObserver__ = !1;
            }));
}
var Uw = { setGrabCursor: Bw, unsetGrabCursor: Ww };
function Vw(e, t) {
    t === void 0 && (t = this);
    function n(r) {
        if (!r || r === It() || r === Ke()) return null;
        r.assignedSlot && (r = r.assignedSlot);
        const i = r.closest(e);
        return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
    }
    return n(t);
}
function Md(e, t, n) {
    const r = Ke(),
        { params: i } = e,
        o = i.edgeSwipeDetection,
        s = i.edgeSwipeThreshold;
    return o && (n <= s || n >= r.innerWidth - s) ? (o === 'prevent' ? (t.preventDefault(), !0) : !1) : !0;
}
function Hw(e) {
    const t = this,
        n = It();
    let r = e;
    r.originalEvent && (r = r.originalEvent);
    const i = t.touchEventsData;
    if (r.type === 'pointerdown') {
        if (i.pointerId !== null && i.pointerId !== r.pointerId) return;
        i.pointerId = r.pointerId;
    } else r.type === 'touchstart' && r.targetTouches.length === 1 && (i.touchId = r.targetTouches[0].identifier);
    if (r.type === 'touchstart') {
        Md(t, r, r.targetTouches[0].pageX);
        return;
    }
    const { params: o, touches: s, enabled: a } = t;
    if (!a || (!o.simulateTouch && r.pointerType === 'mouse') || (t.animating && o.preventInteractionOnTransition)) return;
    !t.animating && o.cssMode && o.loop && t.loopFix();
    let l = r.target;
    if (
        (o.touchEventsTarget === 'wrapper' && !t.wrapperEl.contains(l)) ||
        ('which' in r && r.which === 3) ||
        ('button' in r && r.button > 0) ||
        (i.isTouched && i.isMoved)
    )
        return;
    const u = !!o.noSwipingClass && o.noSwipingClass !== '',
        d = r.composedPath ? r.composedPath() : r.path;
    u && r.target && r.target.shadowRoot && d && (l = d[0]);
    const f = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
        h = !!(r.target && r.target.shadowRoot);
    if (o.noSwiping && (h ? Vw(f, l) : l.closest(f))) {
        t.allowClick = !0;
        return;
    }
    if (o.swipeHandler && !l.closest(o.swipeHandler)) return;
    (s.currentX = r.pageX), (s.currentY = r.pageY);
    const g = s.currentX,
        y = s.currentY;
    if (!Md(t, r, g)) return;
    Object.assign(i, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
        (s.startX = g),
        (s.startY = y),
        (i.touchStartTime = qo()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        o.threshold > 0 && (i.allowThresholdMove = !1);
    let x = !0;
    l.matches(i.focusableElements) && ((x = !1), l.nodeName === 'SELECT' && (i.isTouched = !1)),
        n.activeElement && n.activeElement.matches(i.focusableElements) && n.activeElement !== l && n.activeElement.blur();
    const S = x && t.allowTouchMove && o.touchStartPreventDefault;
    (o.touchStartForcePreventDefault || S) && !l.isContentEditable && r.preventDefault(),
        o.freeMode && o.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(),
        t.emit('touchStart', r);
}
function Gw(e) {
    const t = It(),
        n = this,
        r = n.touchEventsData,
        { params: i, touches: o, rtlTranslate: s, enabled: a } = n;
    if (!a || (!i.simulateTouch && e.pointerType === 'mouse')) return;
    let l = e;
    if ((l.originalEvent && (l = l.originalEvent), l.type === 'pointermove' && (r.touchId !== null || l.pointerId !== r.pointerId))) return;
    let u;
    if (l.type === 'touchmove') {
        if (((u = [...l.changedTouches].filter((C) => C.identifier === r.touchId)[0]), !u || u.identifier !== r.touchId)) return;
    } else u = l;
    if (!r.isTouched) {
        r.startMoving && r.isScrolling && n.emit('touchMoveOpposite', l);
        return;
    }
    const d = u.pageX,
        f = u.pageY;
    if (l.preventedByNestedSwiper) {
        (o.startX = d), (o.startY = f);
        return;
    }
    if (!n.allowTouchMove) {
        l.target.matches(r.focusableElements) || (n.allowClick = !1),
            r.isTouched && (Object.assign(o, { startX: d, startY: f, currentX: d, currentY: f }), (r.touchStartTime = qo()));
        return;
    }
    if (i.touchReleaseOnEdges && !i.loop) {
        if (n.isVertical()) {
            if ((f < o.startY && n.translate <= n.maxTranslate()) || (f > o.startY && n.translate >= n.minTranslate())) {
                (r.isTouched = !1), (r.isMoved = !1);
                return;
            }
        } else if ((d < o.startX && n.translate <= n.maxTranslate()) || (d > o.startX && n.translate >= n.minTranslate())) return;
    }
    if (t.activeElement && l.target === t.activeElement && l.target.matches(r.focusableElements)) {
        (r.isMoved = !0), (n.allowClick = !1);
        return;
    }
    r.allowTouchCallbacks && n.emit('touchMove', l),
        (o.previousX = o.currentX),
        (o.previousY = o.currentY),
        (o.currentX = d),
        (o.currentY = f);
    const h = o.currentX - o.startX,
        g = o.currentY - o.startY;
    if (n.params.threshold && Math.sqrt(h ** 2 + g ** 2) < n.params.threshold) return;
    if (typeof r.isScrolling > 'u') {
        let C;
        (n.isHorizontal() && o.currentY === o.startY) || (n.isVertical() && o.currentX === o.startX)
            ? (r.isScrolling = !1)
            : h * h + g * g >= 25 &&
              ((C = (Math.atan2(Math.abs(g), Math.abs(h)) * 180) / Math.PI),
              (r.isScrolling = n.isHorizontal() ? C > i.touchAngle : 90 - C > i.touchAngle));
    }
    if (
        (r.isScrolling && n.emit('touchMoveOpposite', l),
        typeof r.startMoving > 'u' && (o.currentX !== o.startX || o.currentY !== o.startY) && (r.startMoving = !0),
        r.isScrolling)
    ) {
        r.isTouched = !1;
        return;
    }
    if (!r.startMoving) return;
    (n.allowClick = !1), !i.cssMode && l.cancelable && l.preventDefault(), i.touchMoveStopPropagation && !i.nested && l.stopPropagation();
    let y = n.isHorizontal() ? h : g,
        x = n.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
    i.oneWayMovement && ((y = Math.abs(y) * (s ? 1 : -1)), (x = Math.abs(x) * (s ? 1 : -1))),
        (o.diff = y),
        (y *= i.touchRatio),
        s && ((y = -y), (x = -x));
    const S = n.touchesDirection;
    (n.swipeDirection = y > 0 ? 'prev' : 'next'), (n.touchesDirection = x > 0 ? 'prev' : 'next');
    const p = n.params.loop && !i.cssMode,
        m = (n.touchesDirection === 'next' && n.allowSlideNext) || (n.touchesDirection === 'prev' && n.allowSlidePrev);
    if (!r.isMoved) {
        if (
            (p && m && n.loopFix({ direction: n.swipeDirection }), (r.startTranslate = n.getTranslate()), n.setTransition(0), n.animating)
        ) {
            const C = new window.CustomEvent('transitionend', { bubbles: !0, cancelable: !0 });
            n.wrapperEl.dispatchEvent(C);
        }
        (r.allowMomentumBounce = !1),
            i.grabCursor && (n.allowSlideNext === !0 || n.allowSlidePrev === !0) && n.setGrabCursor(!0),
            n.emit('sliderFirstMove', l);
    }
    let v;
    if ((new Date().getTime(), r.isMoved && r.allowThresholdMove && S !== n.touchesDirection && p && m && Math.abs(y) >= 1)) {
        Object.assign(o, { startX: d, startY: f, currentX: d, currentY: f, startTranslate: r.currentTranslate }),
            (r.loopSwapReset = !0),
            (r.startTranslate = r.currentTranslate);
        return;
    }
    n.emit('sliderMove', l), (r.isMoved = !0), (r.currentTranslate = y + r.startTranslate);
    let w = !0,
        E = i.resistanceRatio;
    if (
        (i.touchReleaseOnEdges && (E = 0),
        y > 0
            ? (p &&
                  m &&
                  !v &&
                  r.allowThresholdMove &&
                  r.currentTranslate > (i.centeredSlides ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1] : n.minTranslate()) &&
                  n.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
              r.currentTranslate > n.minTranslate() &&
                  ((w = !1), i.resistance && (r.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + r.startTranslate + y) ** E)))
            : y < 0 &&
              (p &&
                  m &&
                  !v &&
                  r.allowThresholdMove &&
                  r.currentTranslate <
                      (i.centeredSlides ? n.maxTranslate() + n.slidesSizesGrid[n.slidesSizesGrid.length - 1] : n.maxTranslate()) &&
                  n.loopFix({
                      direction: 'next',
                      setTranslate: !0,
                      activeSlideIndex:
                          n.slides.length -
                          (i.slidesPerView === 'auto' ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10))),
                  }),
              r.currentTranslate < n.maxTranslate() &&
                  ((w = !1), i.resistance && (r.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - r.startTranslate - y) ** E))),
        w && (l.preventedByNestedSwiper = !0),
        !n.allowSlideNext &&
            n.swipeDirection === 'next' &&
            r.currentTranslate < r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
        !n.allowSlidePrev &&
            n.swipeDirection === 'prev' &&
            r.currentTranslate > r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
        !n.allowSlidePrev && !n.allowSlideNext && (r.currentTranslate = r.startTranslate),
        i.threshold > 0)
    )
        if (Math.abs(y) > i.threshold || r.allowThresholdMove) {
            if (!r.allowThresholdMove) {
                (r.allowThresholdMove = !0),
                    (o.startX = o.currentX),
                    (o.startY = o.currentY),
                    (r.currentTranslate = r.startTranslate),
                    (o.diff = n.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY);
                return;
            }
        } else {
            r.currentTranslate = r.startTranslate;
            return;
        }
    !i.followFinger ||
        i.cssMode ||
        (((i.freeMode && i.freeMode.enabled && n.freeMode) || i.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()),
        i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
        n.updateProgress(r.currentTranslate),
        n.setTranslate(r.currentTranslate));
}
function Kw(e) {
    const t = this,
        n = t.touchEventsData;
    let r = e;
    r.originalEvent && (r = r.originalEvent);
    let i;
    if (r.type === 'touchend' || r.type === 'touchcancel') {
        if (((i = [...r.changedTouches].filter((E) => E.identifier === n.touchId)[0]), !i || i.identifier !== n.touchId)) return;
    } else {
        if (n.touchId !== null || r.pointerId !== n.pointerId) return;
        i = r;
    }
    if (
        ['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(r.type) &&
        !(['pointercancel', 'contextmenu'].includes(r.type) && (t.browser.isSafari || t.browser.isWebView))
    )
        return;
    (n.pointerId = null), (n.touchId = null);
    const { params: s, touches: a, rtlTranslate: l, slidesGrid: u, enabled: d } = t;
    if (!d || (!s.simulateTouch && r.pointerType === 'mouse')) return;
    if ((n.allowTouchCallbacks && t.emit('touchEnd', r), (n.allowTouchCallbacks = !1), !n.isTouched)) {
        n.isMoved && s.grabCursor && t.setGrabCursor(!1), (n.isMoved = !1), (n.startMoving = !1);
        return;
    }
    s.grabCursor && n.isMoved && n.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
    const f = qo(),
        h = f - n.touchStartTime;
    if (t.allowClick) {
        const E = r.path || (r.composedPath && r.composedPath());
        t.updateClickedSlide((E && E[0]) || r.target, E),
            t.emit('tap click', r),
            h < 300 && f - n.lastClickTime < 300 && t.emit('doubleTap doubleClick', r);
    }
    if (
        ((n.lastClickTime = qo()),
        Pa(() => {
            t.destroyed || (t.allowClick = !0);
        }),
        !n.isTouched ||
            !n.isMoved ||
            !t.swipeDirection ||
            (a.diff === 0 && !n.loopSwapReset) ||
            (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
    ) {
        (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
        return;
    }
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    let g;
    if ((s.followFinger ? (g = l ? t.translate : -t.translate) : (g = -n.currentTranslate), s.cssMode)) return;
    if (s.freeMode && s.freeMode.enabled) {
        t.freeMode.onTouchEnd({ currentPos: g });
        return;
    }
    const y = g >= -t.maxTranslate() && !t.params.loop;
    let x = 0,
        S = t.slidesSizesGrid[0];
    for (let E = 0; E < u.length; E += E < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
        const C = E < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        typeof u[E + C] < 'u'
            ? (y || (g >= u[E] && g < u[E + C])) && ((x = E), (S = u[E + C] - u[E]))
            : (y || g >= u[E]) && ((x = E), (S = u[u.length - 1] - u[u.length - 2]));
    }
    let p = null,
        m = null;
    s.rewind &&
        (t.isBeginning
            ? (m = s.virtual && s.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1)
            : t.isEnd && (p = 0));
    const v = (g - u[x]) / S,
        w = x < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    if (h > s.longSwipesMs) {
        if (!s.longSwipes) {
            t.slideTo(t.activeIndex);
            return;
        }
        t.swipeDirection === 'next' && (v >= s.longSwipesRatio ? t.slideTo(s.rewind && t.isEnd ? p : x + w) : t.slideTo(x)),
            t.swipeDirection === 'prev' &&
                (v > 1 - s.longSwipesRatio
                    ? t.slideTo(x + w)
                    : m !== null && v < 0 && Math.abs(v) > s.longSwipesRatio
                    ? t.slideTo(m)
                    : t.slideTo(x));
    } else {
        if (!s.shortSwipes) {
            t.slideTo(t.activeIndex);
            return;
        }
        t.navigation && (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
            ? r.target === t.navigation.nextEl
                ? t.slideTo(x + w)
                : t.slideTo(x)
            : (t.swipeDirection === 'next' && t.slideTo(p !== null ? p : x + w),
              t.swipeDirection === 'prev' && t.slideTo(m !== null ? m : x));
    }
}
function zd() {
    const e = this,
        { params: t, el: n } = e;
    if (n && n.offsetWidth === 0) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: r, allowSlidePrev: i, snapGrid: o } = e,
        s = e.virtual && e.params.virtual.enabled;
    (e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
    const a = s && t.loop;
    (t.slidesPerView === 'auto' || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !a
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.params.loop && !s
        ? e.slideToLoop(e.realIndex, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
            }, 500))),
        (e.allowSlidePrev = i),
        (e.allowSlideNext = r),
        e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow();
}
function Yw(e) {
    const t = this;
    t.enabled &&
        (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}
function Qw() {
    const e = this,
        { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
    if (!r) return;
    (e.previousTranslate = e.translate),
        e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop),
        e.translate === 0 && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    let i;
    const o = e.maxTranslate() - e.minTranslate();
    o === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / o),
        i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
        e.emit('setTranslate', e.translate, !1);
}
function Xw(e) {
    const t = this;
    go(t, e.target), !(t.params.cssMode || (t.params.slidesPerView !== 'auto' && !t.params.autoHeight)) && t.update();
}
function qw() {
    const e = this;
    e.documentTouchHandlerProceeded ||
        ((e.documentTouchHandlerProceeded = !0), e.params.touchReleaseOnEdges && (e.el.style.touchAction = 'auto'));
}
const sm = (e, t) => {
    const n = It(),
        { params: r, el: i, wrapperEl: o, device: s } = e,
        a = !!r.nested,
        l = t === 'on' ? 'addEventListener' : 'removeEventListener',
        u = t;
    n[l]('touchstart', e.onDocumentTouchStart, { passive: !1, capture: a }),
        i[l]('touchstart', e.onTouchStart, { passive: !1 }),
        i[l]('pointerdown', e.onTouchStart, { passive: !1 }),
        n[l]('touchmove', e.onTouchMove, { passive: !1, capture: a }),
        n[l]('pointermove', e.onTouchMove, { passive: !1, capture: a }),
        n[l]('touchend', e.onTouchEnd, { passive: !0 }),
        n[l]('pointerup', e.onTouchEnd, { passive: !0 }),
        n[l]('pointercancel', e.onTouchEnd, { passive: !0 }),
        n[l]('touchcancel', e.onTouchEnd, { passive: !0 }),
        n[l]('pointerout', e.onTouchEnd, { passive: !0 }),
        n[l]('pointerleave', e.onTouchEnd, { passive: !0 }),
        n[l]('contextmenu', e.onTouchEnd, { passive: !0 }),
        (r.preventClicks || r.preventClicksPropagation) && i[l]('click', e.onClick, !0),
        r.cssMode && o[l]('scroll', e.onScroll),
        r.updateOnWindowResize
            ? e[u](s.ios || s.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', zd, !0)
            : e[u]('observerUpdate', zd, !0),
        i[l]('load', e.onLoad, { capture: !0 });
};
function Jw() {
    const e = this,
        { params: t } = e;
    (e.onTouchStart = Hw.bind(e)),
        (e.onTouchMove = Gw.bind(e)),
        (e.onTouchEnd = Kw.bind(e)),
        (e.onDocumentTouchStart = qw.bind(e)),
        t.cssMode && (e.onScroll = Qw.bind(e)),
        (e.onClick = Yw.bind(e)),
        (e.onLoad = Xw.bind(e)),
        sm(e, 'on');
}
function Zw() {
    sm(this, 'off');
}
var eS = { attachEvents: Jw, detachEvents: Zw };
const Rd = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function tS() {
    const e = this,
        { realIndex: t, initialized: n, params: r, el: i } = e,
        o = r.breakpoints;
    if (!o || (o && Object.keys(o).length === 0)) return;
    const s = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
    if (!s || e.currentBreakpoint === s) return;
    const l = (s in o ? o[s] : void 0) || e.originalParams,
        u = Rd(e, r),
        d = Rd(e, l),
        f = r.enabled;
    u && !d
        ? (i.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`), e.emitContainerClasses())
        : !u &&
          d &&
          (i.classList.add(`${r.containerModifierClass}grid`),
          ((l.grid.fill && l.grid.fill === 'column') || (!l.grid.fill && r.grid.fill === 'column')) &&
              i.classList.add(`${r.containerModifierClass}grid-column`),
          e.emitContainerClasses()),
        ['navigation', 'pagination', 'scrollbar'].forEach((p) => {
            if (typeof l[p] > 'u') return;
            const m = r[p] && r[p].enabled,
                v = l[p] && l[p].enabled;
            m && !v && e[p].disable(), !m && v && e[p].enable();
        });
    const h = l.direction && l.direction !== r.direction,
        g = r.loop && (l.slidesPerView !== r.slidesPerView || h),
        y = r.loop;
    h && n && e.changeDirection(), De(e.params, l);
    const x = e.params.enabled,
        S = e.params.loop;
    Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev,
    }),
        f && !x ? e.disable() : !f && x && e.enable(),
        (e.currentBreakpoint = s),
        e.emit('_beforeBreakpoint', l),
        n &&
            (g
                ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                : !y && S
                ? (e.loopCreate(t), e.updateSlides())
                : y && !S && e.loopDestroy()),
        e.emit('breakpoint', l);
}
function nS(e, t, n) {
    if ((t === void 0 && (t = 'window'), !e || (t === 'container' && !n))) return;
    let r = !1;
    const i = Ke(),
        o = t === 'window' ? i.innerHeight : n.clientHeight,
        s = Object.keys(e).map((a) => {
            if (typeof a == 'string' && a.indexOf('@') === 0) {
                const l = parseFloat(a.substr(1));
                return { value: o * l, point: a };
            }
            return { value: a, point: a };
        });
    s.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
    for (let a = 0; a < s.length; a += 1) {
        const { point: l, value: u } = s[a];
        t === 'window' ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = l) : u <= n.clientWidth && (r = l);
    }
    return r || 'max';
}
var rS = { setBreakpoint: tS, getBreakpoint: nS };
function iS(e, t) {
    const n = [];
    return (
        e.forEach((r) => {
            typeof r == 'object'
                ? Object.keys(r).forEach((i) => {
                      r[i] && n.push(t + i);
                  })
                : typeof r == 'string' && n.push(t + r);
        }),
        n
    );
}
function oS() {
    const e = this,
        { classNames: t, params: n, rtl: r, el: i, device: o } = e,
        s = iS(
            [
                'initialized',
                n.direction,
                { 'free-mode': e.params.freeMode && n.freeMode.enabled },
                { autoheight: n.autoHeight },
                { rtl: r },
                { grid: n.grid && n.grid.rows > 1 },
                { 'grid-column': n.grid && n.grid.rows > 1 && n.grid.fill === 'column' },
                { android: o.android },
                { ios: o.ios },
                { 'css-mode': n.cssMode },
                { centered: n.cssMode && n.centeredSlides },
                { 'watch-progress': n.watchSlidesProgress },
            ],
            n.containerModifierClass
        );
    t.push(...s), i.classList.add(...t), e.emitContainerClasses();
}
function sS() {
    const e = this,
        { el: t, classNames: n } = e;
    t.classList.remove(...n), e.emitContainerClasses();
}
var lS = { addClasses: oS, removeClasses: sS };
function aS() {
    const e = this,
        { isLocked: t, params: n } = e,
        { slidesOffsetBefore: r } = n;
    if (r) {
        const i = e.slides.length - 1,
            o = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
        e.isLocked = e.size > o;
    } else e.isLocked = e.snapGrid.length === 1;
    n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
        n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
        t && t !== e.isLocked && (e.isEnd = !1),
        t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock');
}
var uS = { checkOverflow: aS },
    Ia = {
        init: !0,
        direction: 'horizontal',
        oneWayMovement: !1,
        touchEventsTarget: 'wrapper',
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: 'swiper',
        enabled: !0,
        focusableElements: 'input, select, option, textarea, button, video, label',
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: 'slide',
        breakpoints: void 0,
        breakpointsBase: 'window',
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: 'swiper-',
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-blank',
        slideActiveClass: 'swiper-slide-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideFullyVisibleClass: 'swiper-slide-fully-visible',
        slideNextClass: 'swiper-slide-next',
        slidePrevClass: 'swiper-slide-prev',
        wrapperClass: 'swiper-wrapper',
        lazyPreloaderClass: 'swiper-lazy-preloader',
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
    };
function cS(e, t) {
    return function (r) {
        r === void 0 && (r = {});
        const i = Object.keys(r)[0],
            o = r[i];
        if (typeof o != 'object' || o === null) {
            De(t, r);
            return;
        }
        if (
            (e[i] === !0 && (e[i] = { enabled: !0 }),
            i === 'navigation' && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0),
            ['pagination', 'scrollbar'].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0),
            !(i in e && 'enabled' in o))
        ) {
            De(t, r);
            return;
        }
        typeof e[i] == 'object' && !('enabled' in e[i]) && (e[i].enabled = !0), e[i] || (e[i] = { enabled: !1 }), De(t, r);
    };
}
const pl = {
        eventsEmitter: lw,
        update: yw,
        translate: kw,
        transition: _w,
        slide: Rw,
        loop: Fw,
        grabCursor: Uw,
        events: eS,
        breakpoints: rS,
        checkOverflow: uS,
        classes: lS,
    },
    hl = {};
let Fu = class Et {
    constructor() {
        let t, n;
        for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
        i.length === 1 && i[0].constructor && Object.prototype.toString.call(i[0]).slice(8, -1) === 'Object' ? (n = i[0]) : ([t, n] = i),
            n || (n = {}),
            (n = De({}, n)),
            t && !n.el && (n.el = t);
        const s = It();
        if (n.el && typeof n.el == 'string' && s.querySelectorAll(n.el).length > 1) {
            const d = [];
            return (
                s.querySelectorAll(n.el).forEach((f) => {
                    const h = De({}, n, { el: f });
                    d.push(new Et(h));
                }),
                d
            );
        }
        const a = this;
        (a.__swiper__ = !0),
            (a.support = im()),
            (a.device = nw({ userAgent: n.userAgent })),
            (a.browser = iw()),
            (a.eventsListeners = {}),
            (a.eventsAnyListeners = []),
            (a.modules = [...a.__modules__]),
            n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
        const l = {};
        a.modules.forEach((d) => {
            d({
                params: n,
                swiper: a,
                extendParams: cS(n, l),
                on: a.on.bind(a),
                once: a.once.bind(a),
                off: a.off.bind(a),
                emit: a.emit.bind(a),
            });
        });
        const u = De({}, Ia, l);
        return (
            (a.params = De({}, u, hl, n)),
            (a.originalParams = De({}, a.params)),
            (a.passedParams = De({}, n)),
            a.params &&
                a.params.on &&
                Object.keys(a.params.on).forEach((d) => {
                    a.on(d, a.params.on[d]);
                }),
            a.params && a.params.onAny && a.onAny(a.params.onAny),
            Object.assign(a, {
                enabled: a.params.enabled,
                el: t,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal() {
                    return a.params.direction === 'horizontal';
                },
                isVertical() {
                    return a.params.direction === 'vertical';
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                },
                allowSlideNext: a.params.allowSlideNext,
                allowSlidePrev: a.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: a.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    pointerId: null,
                    touchId: null,
                },
                allowClick: !0,
                allowTouchMove: a.params.allowTouchMove,
                touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                imagesToLoad: [],
                imagesLoaded: 0,
            }),
            a.emit('_swiper'),
            a.params.init && a.init(),
            a
        );
    }
    getDirectionLabel(t) {
        return this.isHorizontal()
            ? t
            : {
                  width: 'height',
                  'margin-top': 'margin-left',
                  'margin-bottom ': 'margin-right',
                  'margin-left': 'margin-top',
                  'margin-right': 'margin-bottom',
                  'padding-left': 'padding-top',
                  'padding-right': 'padding-bottom',
                  marginRight: 'marginBottom',
              }[t];
    }
    getSlideIndex(t) {
        const { slidesEl: n, params: r } = this,
            i = _t(n, `.${r.slideClass}, swiper-slide`),
            o = Ld(i[0]);
        return Ld(t) - o;
    }
    getSlideIndexByData(t) {
        return this.getSlideIndex(this.slides.filter((n) => n.getAttribute('data-swiper-slide-index') * 1 === t)[0]);
    }
    recalcSlides() {
        const t = this,
            { slidesEl: n, params: r } = t;
        t.slides = _t(n, `.${r.slideClass}, swiper-slide`);
    }
    enable() {
        const t = this;
        t.enabled || ((t.enabled = !0), t.params.grabCursor && t.setGrabCursor(), t.emit('enable'));
    }
    disable() {
        const t = this;
        t.enabled && ((t.enabled = !1), t.params.grabCursor && t.unsetGrabCursor(), t.emit('disable'));
    }
    setProgress(t, n) {
        const r = this;
        t = Math.min(Math.max(t, 0), 1);
        const i = r.minTranslate(),
            s = (r.maxTranslate() - i) * t + i;
        r.translateTo(s, typeof n > 'u' ? 0 : n), r.updateActiveIndex(), r.updateSlidesClasses();
    }
    emitContainerClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el) return;
        const n = t.el.className.split(' ').filter((r) => r.indexOf('swiper') === 0 || r.indexOf(t.params.containerModifierClass) === 0);
        t.emit('_containerClasses', n.join(' '));
    }
    getSlideClasses(t) {
        const n = this;
        return n.destroyed
            ? ''
            : t.className
                  .split(' ')
                  .filter((r) => r.indexOf('swiper-slide') === 0 || r.indexOf(n.params.slideClass) === 0)
                  .join(' ');
    }
    emitSlidesClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el) return;
        const n = [];
        t.slides.forEach((r) => {
            const i = t.getSlideClasses(r);
            n.push({ slideEl: r, classNames: i }), t.emit('_slideClass', r, i);
        }),
            t.emit('_slideClasses', n);
    }
    slidesPerViewDynamic(t, n) {
        t === void 0 && (t = 'current'), n === void 0 && (n = !1);
        const r = this,
            { params: i, slides: o, slidesGrid: s, slidesSizesGrid: a, size: l, activeIndex: u } = r;
        let d = 1;
        if (typeof i.slidesPerView == 'number') return i.slidesPerView;
        if (i.centeredSlides) {
            let f = o[u] ? o[u].swiperSlideSize : 0,
                h;
            for (let g = u + 1; g < o.length; g += 1) o[g] && !h && ((f += o[g].swiperSlideSize), (d += 1), f > l && (h = !0));
            for (let g = u - 1; g >= 0; g -= 1) o[g] && !h && ((f += o[g].swiperSlideSize), (d += 1), f > l && (h = !0));
        } else if (t === 'current') for (let f = u + 1; f < o.length; f += 1) (n ? s[f] + a[f] - s[u] < l : s[f] - s[u] < l) && (d += 1);
        else for (let f = u - 1; f >= 0; f -= 1) s[u] - s[f] < l && (d += 1);
        return d;
    }
    update() {
        const t = this;
        if (!t || t.destroyed) return;
        const { snapGrid: n, params: r } = t;
        r.breakpoints && t.setBreakpoint(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((s) => {
                s.complete && go(t, s);
            }),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses();
        function i() {
            const s = t.rtlTranslate ? t.translate * -1 : t.translate,
                a = Math.min(Math.max(s, t.maxTranslate()), t.minTranslate());
            t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
        }
        let o;
        if (r.freeMode && r.freeMode.enabled && !r.cssMode) i(), r.autoHeight && t.updateAutoHeight();
        else {
            if ((r.slidesPerView === 'auto' || r.slidesPerView > 1) && t.isEnd && !r.centeredSlides) {
                const s = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
                o = t.slideTo(s.length - 1, 0, !1, !0);
            } else o = t.slideTo(t.activeIndex, 0, !1, !0);
            o || i();
        }
        r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit('update');
    }
    changeDirection(t, n) {
        n === void 0 && (n = !0);
        const r = this,
            i = r.params.direction;
        return (
            t || (t = i === 'horizontal' ? 'vertical' : 'horizontal'),
            t === i ||
                (t !== 'horizontal' && t !== 'vertical') ||
                (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
                r.el.classList.add(`${r.params.containerModifierClass}${t}`),
                r.emitContainerClasses(),
                (r.params.direction = t),
                r.slides.forEach((o) => {
                    t === 'vertical' ? (o.style.width = '') : (o.style.height = '');
                }),
                r.emit('changeDirection'),
                n && r.update()),
            r
        );
    }
    changeLanguageDirection(t) {
        const n = this;
        (n.rtl && t === 'rtl') ||
            (!n.rtl && t === 'ltr') ||
            ((n.rtl = t === 'rtl'),
            (n.rtlTranslate = n.params.direction === 'horizontal' && n.rtl),
            n.rtl
                ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`), (n.el.dir = 'rtl'))
                : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`), (n.el.dir = 'ltr')),
            n.update());
    }
    mount(t) {
        const n = this;
        if (n.mounted) return !0;
        let r = t || n.params.el;
        if ((typeof r == 'string' && (r = document.querySelector(r)), !r)) return !1;
        (r.swiper = n), r.parentNode && r.parentNode.host && r.parentNode.host.nodeName === 'SWIPER-CONTAINER' && (n.isElement = !0);
        const i = () => `.${(n.params.wrapperClass || '').trim().split(' ').join('.')}`;
        let s = (() => (r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(i()) : _t(r, i())[0]))();
        return (
            !s &&
                n.params.createElements &&
                ((s = _a('div', n.params.wrapperClass)),
                r.append(s),
                _t(r, `.${n.params.slideClass}`).forEach((a) => {
                    s.append(a);
                })),
            Object.assign(n, {
                el: r,
                wrapperEl: s,
                slidesEl: n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : s,
                hostEl: n.isElement ? r.parentNode.host : r,
                mounted: !0,
                rtl: r.dir.toLowerCase() === 'rtl' || Qt(r, 'direction') === 'rtl',
                rtlTranslate: n.params.direction === 'horizontal' && (r.dir.toLowerCase() === 'rtl' || Qt(r, 'direction') === 'rtl'),
                wrongRTL: Qt(s, 'display') === '-webkit-box',
            }),
            !0
        );
    }
    init(t) {
        const n = this;
        if (n.initialized || n.mount(t) === !1) return n;
        n.emit('beforeInit'),
            n.params.breakpoints && n.setBreakpoint(),
            n.addClasses(),
            n.updateSize(),
            n.updateSlides(),
            n.params.watchOverflow && n.checkOverflow(),
            n.params.grabCursor && n.enabled && n.setGrabCursor(),
            n.params.loop && n.virtual && n.params.virtual.enabled
                ? n.slideTo(n.params.initialSlide + n.virtual.slidesBefore, 0, n.params.runCallbacksOnInit, !1, !0)
                : n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit, !1, !0),
            n.params.loop && n.loopCreate(),
            n.attachEvents();
        const i = [...n.el.querySelectorAll('[loading="lazy"]')];
        return (
            n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
            i.forEach((o) => {
                o.complete
                    ? go(n, o)
                    : o.addEventListener('load', (s) => {
                          go(n, s.target);
                      });
            }),
            ba(n),
            (n.initialized = !0),
            ba(n),
            n.emit('init'),
            n.emit('afterInit'),
            n
        );
    }
    destroy(t, n) {
        t === void 0 && (t = !0), n === void 0 && (n = !0);
        const r = this,
            { params: i, el: o, wrapperEl: s, slides: a } = r;
        return (
            typeof r.params > 'u' ||
                r.destroyed ||
                (r.emit('beforeDestroy'),
                (r.initialized = !1),
                r.detachEvents(),
                i.loop && r.loopDestroy(),
                n &&
                    (r.removeClasses(),
                    o.removeAttribute('style'),
                    s.removeAttribute('style'),
                    a &&
                        a.length &&
                        a.forEach((l) => {
                            l.classList.remove(
                                i.slideVisibleClass,
                                i.slideFullyVisibleClass,
                                i.slideActiveClass,
                                i.slideNextClass,
                                i.slidePrevClass
                            ),
                                l.removeAttribute('style'),
                                l.removeAttribute('data-swiper-slide-index');
                        })),
                r.emit('destroy'),
                Object.keys(r.eventsListeners).forEach((l) => {
                    r.off(l);
                }),
                t !== !1 && ((r.el.swiper = null), Kx(r)),
                (r.destroyed = !0)),
            null
        );
    }
    static extendDefaults(t) {
        De(hl, t);
    }
    static get extendedDefaults() {
        return hl;
    }
    static get defaults() {
        return Ia;
    }
    static installModule(t) {
        Et.prototype.__modules__ || (Et.prototype.__modules__ = []);
        const n = Et.prototype.__modules__;
        typeof t == 'function' && n.indexOf(t) < 0 && n.push(t);
    }
    static use(t) {
        return Array.isArray(t) ? (t.forEach((n) => Et.installModule(n)), Et) : (Et.installModule(t), Et);
    }
};
Object.keys(pl).forEach((e) => {
    Object.keys(pl[e]).forEach((t) => {
        Fu.prototype[t] = pl[e][t];
    });
});
Fu.use([ow, sw]);
const lm = [
    'eventsPrefix',
    'injectStyles',
    'injectStylesUrls',
    'modules',
    'init',
    '_direction',
    'oneWayMovement',
    'touchEventsTarget',
    'initialSlide',
    '_speed',
    'cssMode',
    'updateOnWindowResize',
    'resizeObserver',
    'nested',
    'focusableElements',
    '_enabled',
    '_width',
    '_height',
    'preventInteractionOnTransition',
    'userAgent',
    'url',
    '_edgeSwipeDetection',
    '_edgeSwipeThreshold',
    '_freeMode',
    '_autoHeight',
    'setWrapperSize',
    'virtualTranslate',
    '_effect',
    'breakpoints',
    'breakpointsBase',
    '_spaceBetween',
    '_slidesPerView',
    'maxBackfaceHiddenSlides',
    '_grid',
    '_slidesPerGroup',
    '_slidesPerGroupSkip',
    '_slidesPerGroupAuto',
    '_centeredSlides',
    '_centeredSlidesBounds',
    '_slidesOffsetBefore',
    '_slidesOffsetAfter',
    'normalizeSlideIndex',
    '_centerInsufficientSlides',
    '_watchOverflow',
    'roundLengths',
    'touchRatio',
    'touchAngle',
    'simulateTouch',
    '_shortSwipes',
    '_longSwipes',
    'longSwipesRatio',
    'longSwipesMs',
    '_followFinger',
    'allowTouchMove',
    '_threshold',
    'touchMoveStopPropagation',
    'touchStartPreventDefault',
    'touchStartForcePreventDefault',
    'touchReleaseOnEdges',
    'uniqueNavElements',
    '_resistance',
    '_resistanceRatio',
    '_watchSlidesProgress',
    '_grabCursor',
    'preventClicks',
    'preventClicksPropagation',
    '_slideToClickedSlide',
    '_loop',
    'loopAdditionalSlides',
    'loopAddBlankSlides',
    'loopPreventsSliding',
    '_rewind',
    '_allowSlidePrev',
    '_allowSlideNext',
    '_swipeHandler',
    '_noSwiping',
    'noSwipingClass',
    'noSwipingSelector',
    'passiveListeners',
    'containerModifierClass',
    'slideClass',
    'slideActiveClass',
    'slideVisibleClass',
    'slideFullyVisibleClass',
    'slideNextClass',
    'slidePrevClass',
    'slideBlankClass',
    'wrapperClass',
    'lazyPreloaderClass',
    'lazyPreloadPrevNext',
    'runCallbacksOnInit',
    'observer',
    'observeParents',
    'observeSlideChildren',
    'a11y',
    '_autoplay',
    '_controller',
    'coverflowEffect',
    'cubeEffect',
    'fadeEffect',
    'flipEffect',
    'creativeEffect',
    'cardsEffect',
    'hashNavigation',
    'history',
    'keyboard',
    'mousewheel',
    '_navigation',
    '_pagination',
    'parallax',
    '_scrollbar',
    '_thumbs',
    'virtual',
    'zoom',
    'control',
];
function Ln(e) {
    return (
        typeof e == 'object' && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === 'Object' && !e.__swiper__
    );
}
function rr(e, t) {
    const n = ['__proto__', 'constructor', 'prototype'];
    Object.keys(t)
        .filter((r) => n.indexOf(r) < 0)
        .forEach((r) => {
            typeof e[r] > 'u'
                ? (e[r] = t[r])
                : Ln(t[r]) && Ln(e[r]) && Object.keys(t[r]).length > 0
                ? t[r].__swiper__
                    ? (e[r] = t[r])
                    : rr(e[r], t[r])
                : (e[r] = t[r]);
        });
}
function am(e) {
    return e === void 0 && (e = {}), e.navigation && typeof e.navigation.nextEl > 'u' && typeof e.navigation.prevEl > 'u';
}
function um(e) {
    return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > 'u';
}
function cm(e) {
    return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > 'u';
}
function dm(e) {
    e === void 0 && (e = '');
    const t = e
            .split(' ')
            .map((r) => r.trim())
            .filter((r) => !!r),
        n = [];
    return (
        t.forEach((r) => {
            n.indexOf(r) < 0 && n.push(r);
        }),
        n.join(' ')
    );
}
function dS(e) {
    return e === void 0 && (e = ''), e ? (e.includes('swiper-wrapper') ? e : `swiper-wrapper ${e}`) : 'swiper-wrapper';
}
function fS(e) {
    let { swiper: t, slides: n, passedParams: r, changedParams: i, nextEl: o, prevEl: s, scrollbarEl: a, paginationEl: l } = e;
    const u = i.filter((b) => b !== 'children' && b !== 'direction' && b !== 'wrapperClass'),
        { params: d, pagination: f, navigation: h, scrollbar: g, virtual: y, thumbs: x } = t;
    let S, p, m, v, w, E, C, k;
    i.includes('thumbs') && r.thumbs && r.thumbs.swiper && d.thumbs && !d.thumbs.swiper && (S = !0),
        i.includes('controller') && r.controller && r.controller.control && d.controller && !d.controller.control && (p = !0),
        i.includes('pagination') &&
            r.pagination &&
            (r.pagination.el || l) &&
            (d.pagination || d.pagination === !1) &&
            f &&
            !f.el &&
            (m = !0),
        i.includes('scrollbar') && r.scrollbar && (r.scrollbar.el || a) && (d.scrollbar || d.scrollbar === !1) && g && !g.el && (v = !0),
        i.includes('navigation') &&
            r.navigation &&
            (r.navigation.prevEl || s) &&
            (r.navigation.nextEl || o) &&
            (d.navigation || d.navigation === !1) &&
            h &&
            !h.prevEl &&
            !h.nextEl &&
            (w = !0);
    const _ = (b) => {
        t[b] &&
            (t[b].destroy(),
            b === 'navigation'
                ? (t.isElement && (t[b].prevEl.remove(), t[b].nextEl.remove()),
                  (d[b].prevEl = void 0),
                  (d[b].nextEl = void 0),
                  (t[b].prevEl = void 0),
                  (t[b].nextEl = void 0))
                : (t.isElement && t[b].el.remove(), (d[b].el = void 0), (t[b].el = void 0)));
    };
    i.includes('loop') && t.isElement && (d.loop && !r.loop ? (E = !0) : !d.loop && r.loop ? (C = !0) : (k = !0)),
        u.forEach((b) => {
            if (Ln(d[b]) && Ln(r[b]))
                Object.assign(d[b], r[b]),
                    (b === 'navigation' || b === 'pagination' || b === 'scrollbar') && 'enabled' in r[b] && !r[b].enabled && _(b);
            else {
                const j = r[b];
                (j === !0 || j === !1) && (b === 'navigation' || b === 'pagination' || b === 'scrollbar')
                    ? j === !1 && _(b)
                    : (d[b] = r[b]);
            }
        }),
        u.includes('controller') &&
            !p &&
            t.controller &&
            t.controller.control &&
            d.controller &&
            d.controller.control &&
            (t.controller.control = d.controller.control),
        i.includes('children') && n && y && d.virtual.enabled
            ? ((y.slides = n), y.update(!0))
            : i.includes('virtual') && y && d.virtual.enabled && (n && (y.slides = n), y.update(!0)),
        i.includes('children') && n && d.loop && (k = !0),
        S && x.init() && x.update(!0),
        p && (t.controller.control = d.controller.control),
        m &&
            (t.isElement &&
                (!l || typeof l == 'string') &&
                ((l = document.createElement('div')), l.classList.add('swiper-pagination'), l.part.add('pagination'), t.el.appendChild(l)),
            l && (d.pagination.el = l),
            f.init(),
            f.render(),
            f.update()),
        v &&
            (t.isElement &&
                (!a || typeof a == 'string') &&
                ((a = document.createElement('div')), a.classList.add('swiper-scrollbar'), a.part.add('scrollbar'), t.el.appendChild(a)),
            a && (d.scrollbar.el = a),
            g.init(),
            g.updateSize(),
            g.setTranslate()),
        w &&
            (t.isElement &&
                ((!o || typeof o == 'string') &&
                    ((o = document.createElement('div')),
                    o.classList.add('swiper-button-next'),
                    (o.innerHTML = t.hostEl.constructor.nextButtonSvg),
                    o.part.add('button-next'),
                    t.el.appendChild(o)),
                (!s || typeof s == 'string') &&
                    ((s = document.createElement('div')),
                    s.classList.add('swiper-button-prev'),
                    (s.innerHTML = t.hostEl.constructor.prevButtonSvg),
                    s.part.add('button-prev'),
                    t.el.appendChild(s))),
            o && (d.navigation.nextEl = o),
            s && (d.navigation.prevEl = s),
            h.init(),
            h.update()),
        i.includes('allowSlideNext') && (t.allowSlideNext = r.allowSlideNext),
        i.includes('allowSlidePrev') && (t.allowSlidePrev = r.allowSlidePrev),
        i.includes('direction') && t.changeDirection(r.direction, !1),
        (E || k) && t.loopDestroy(),
        (C || k) && t.loopCreate(),
        t.update();
}
function pS(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = !0);
    const n = { on: {} },
        r = {},
        i = {};
    rr(n, Ia), (n._emitClasses = !0), (n.init = !1);
    const o = {},
        s = lm.map((l) => l.replace(/_/, '')),
        a = Object.assign({}, e);
    return (
        Object.keys(a).forEach((l) => {
            typeof e[l] > 'u' ||
                (s.indexOf(l) >= 0
                    ? Ln(e[l])
                        ? ((n[l] = {}), (i[l] = {}), rr(n[l], e[l]), rr(i[l], e[l]))
                        : ((n[l] = e[l]), (i[l] = e[l]))
                    : l.search(/on[A-Z]/) === 0 && typeof e[l] == 'function'
                    ? t
                        ? (r[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
                        : (n.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
                    : (o[l] = e[l]));
        }),
        ['navigation', 'pagination', 'scrollbar'].forEach((l) => {
            n[l] === !0 && (n[l] = {}), n[l] === !1 && delete n[l];
        }),
        { params: n, passedParams: i, rest: o, events: r }
    );
}
function hS(e, t) {
    let { el: n, nextEl: r, prevEl: i, paginationEl: o, scrollbarEl: s, swiper: a } = e;
    am(t) &&
        r &&
        i &&
        ((a.params.navigation.nextEl = r),
        (a.originalParams.navigation.nextEl = r),
        (a.params.navigation.prevEl = i),
        (a.originalParams.navigation.prevEl = i)),
        um(t) && o && ((a.params.pagination.el = o), (a.originalParams.pagination.el = o)),
        cm(t) && s && ((a.params.scrollbar.el = s), (a.originalParams.scrollbar.el = s)),
        a.init(n);
}
function mS(e, t, n, r, i) {
    const o = [];
    if (!t) return o;
    const s = (l) => {
        o.indexOf(l) < 0 && o.push(l);
    };
    if (n && r) {
        const l = r.map(i),
            u = n.map(i);
        l.join('') !== u.join('') && s('children'), r.length !== n.length && s('children');
    }
    return (
        lm
            .filter((l) => l[0] === '_')
            .map((l) => l.replace(/_/, ''))
            .forEach((l) => {
                if (l in e && l in t)
                    if (Ln(e[l]) && Ln(t[l])) {
                        const u = Object.keys(e[l]),
                            d = Object.keys(t[l]);
                        u.length !== d.length
                            ? s(l)
                            : (u.forEach((f) => {
                                  e[l][f] !== t[l][f] && s(l);
                              }),
                              d.forEach((f) => {
                                  e[l][f] !== t[l][f] && s(l);
                              }));
                    } else e[l] !== t[l] && s(l);
            }),
        o
    );
}
const gS = (e) => {
    !e ||
        e.destroyed ||
        !e.params.virtual ||
        (e.params.virtual && !e.params.virtual.enabled) ||
        (e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate());
};
function Zo() {
    return (
        (Zo = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Zo.apply(this, arguments)
    );
}
function fm(e) {
    return e.type && e.type.displayName && e.type.displayName.includes('SwiperSlide');
}
function pm(e) {
    const t = [];
    return (
        V.Children.toArray(e).forEach((n) => {
            fm(n) ? t.push(n) : n.props && n.props.children && pm(n.props.children).forEach((r) => t.push(r));
        }),
        t
    );
}
function vS(e) {
    const t = [],
        n = { 'container-start': [], 'container-end': [], 'wrapper-start': [], 'wrapper-end': [] };
    return (
        V.Children.toArray(e).forEach((r) => {
            if (fm(r)) t.push(r);
            else if (r.props && r.props.slot && n[r.props.slot]) n[r.props.slot].push(r);
            else if (r.props && r.props.children) {
                const i = pm(r.props.children);
                i.length > 0 ? i.forEach((o) => t.push(o)) : n['container-end'].push(r);
            } else n['container-end'].push(r);
        }),
        { slides: t, slots: n }
    );
}
function yS(e, t, n) {
    if (!n) return null;
    const r = (d) => {
            let f = d;
            return d < 0 ? (f = t.length + d) : f >= t.length && (f = f - t.length), f;
        },
        i = e.isHorizontal() ? { [e.rtlTranslate ? 'right' : 'left']: `${n.offset}px` } : { top: `${n.offset}px` },
        { from: o, to: s } = n,
        a = e.params.loop ? -t.length : 0,
        l = e.params.loop ? t.length * 2 : t.length,
        u = [];
    for (let d = a; d < l; d += 1) d >= o && d <= s && u.push(t[r(d)]);
    return u.map((d, f) => V.cloneElement(d, { swiper: e, style: i, key: `slide-${f}` }));
}
function Qr(e, t) {
    return typeof window > 'u' ? T.useEffect(e, t) : T.useLayoutEffect(e, t);
}
const Dd = T.createContext(null),
    xS = T.createContext(null),
    hm = T.forwardRef(function (e, t) {
        let { className: n, tag: r = 'div', wrapperTag: i = 'div', children: o, onSwiper: s, ...a } = e === void 0 ? {} : e,
            l = !1;
        const [u, d] = T.useState('swiper'),
            [f, h] = T.useState(null),
            [g, y] = T.useState(!1),
            x = T.useRef(!1),
            S = T.useRef(null),
            p = T.useRef(null),
            m = T.useRef(null),
            v = T.useRef(null),
            w = T.useRef(null),
            E = T.useRef(null),
            C = T.useRef(null),
            k = T.useRef(null),
            { params: _, passedParams: b, rest: j, events: O } = pS(a),
            { slides: R, slots: z } = vS(o),
            K = () => {
                y(!g);
            };
        Object.assign(_.on, {
            _containerClasses(N, L) {
                d(L);
            },
        });
        const ee = () => {
            Object.assign(_.on, O), (l = !0);
            const N = { ..._ };
            if ((delete N.wrapperClass, (p.current = new Fu(N)), p.current.virtual && p.current.params.virtual.enabled)) {
                p.current.virtual.slides = R;
                const L = { cache: !1, slides: R, renderExternal: h, renderExternalUpdate: !1 };
                rr(p.current.params.virtual, L), rr(p.current.originalParams.virtual, L);
            }
        };
        S.current || ee(), p.current && p.current.on('_beforeBreakpoint', K);
        const de = () => {
                l ||
                    !O ||
                    !p.current ||
                    Object.keys(O).forEach((N) => {
                        p.current.on(N, O[N]);
                    });
            },
            Me = () => {
                !O ||
                    !p.current ||
                    Object.keys(O).forEach((N) => {
                        p.current.off(N, O[N]);
                    });
            };
        T.useEffect(() => () => {
            p.current && p.current.off('_beforeBreakpoint', K);
        }),
            T.useEffect(() => {
                !x.current && p.current && (p.current.emitSlidesClasses(), (x.current = !0));
            }),
            Qr(() => {
                if ((t && (t.current = S.current), !!S.current))
                    return (
                        p.current.destroyed && ee(),
                        hS(
                            {
                                el: S.current,
                                nextEl: w.current,
                                prevEl: E.current,
                                paginationEl: C.current,
                                scrollbarEl: k.current,
                                swiper: p.current,
                            },
                            _
                        ),
                        s && s(p.current),
                        () => {
                            p.current && !p.current.destroyed && p.current.destroy(!0, !1);
                        }
                    );
            }, []),
            Qr(() => {
                de();
                const N = mS(b, m.current, R, v.current, (L) => L.key);
                return (
                    (m.current = b),
                    (v.current = R),
                    N.length &&
                        p.current &&
                        !p.current.destroyed &&
                        fS({
                            swiper: p.current,
                            slides: R,
                            passedParams: b,
                            changedParams: N,
                            nextEl: w.current,
                            prevEl: E.current,
                            scrollbarEl: k.current,
                            paginationEl: C.current,
                        }),
                    () => {
                        Me();
                    }
                );
            }),
            Qr(() => {
                gS(p.current);
            }, [f]);
        function P() {
            return _.virtual ? yS(p.current, R, f) : R.map((N, L) => V.cloneElement(N, { swiper: p.current, swiperSlideIndex: L }));
        }
        return V.createElement(
            r,
            Zo({ ref: S, className: dm(`${u}${n ? ` ${n}` : ''}`) }, j),
            V.createElement(
                xS.Provider,
                { value: p.current },
                z['container-start'],
                V.createElement(i, { className: dS(_.wrapperClass) }, z['wrapper-start'], P(), z['wrapper-end']),
                am(_) &&
                    V.createElement(
                        V.Fragment,
                        null,
                        V.createElement('div', { ref: E, className: 'swiper-button-prev' }),
                        V.createElement('div', { ref: w, className: 'swiper-button-next' })
                    ),
                cm(_) && V.createElement('div', { ref: k, className: 'swiper-scrollbar' }),
                um(_) && V.createElement('div', { ref: C, className: 'swiper-pagination' }),
                z['container-end']
            )
        );
    });
hm.displayName = 'Swiper';
const Ar = T.forwardRef(function (e, t) {
    let {
        tag: n = 'div',
        children: r,
        className: i = '',
        swiper: o,
        zoom: s,
        lazy: a,
        virtualIndex: l,
        swiperSlideIndex: u,
        ...d
    } = e === void 0 ? {} : e;
    const f = T.useRef(null),
        [h, g] = T.useState('swiper-slide'),
        [y, x] = T.useState(!1);
    function S(w, E, C) {
        E === f.current && g(C);
    }
    Qr(() => {
        if ((typeof u < 'u' && (f.current.swiperSlideIndex = u), t && (t.current = f.current), !(!f.current || !o))) {
            if (o.destroyed) {
                h !== 'swiper-slide' && g('swiper-slide');
                return;
            }
            return (
                o.on('_slideClass', S),
                () => {
                    o && o.off('_slideClass', S);
                }
            );
        }
    }),
        Qr(() => {
            o && f.current && !o.destroyed && g(o.getSlideClasses(f.current));
        }, [o]);
    const p = {
            isActive: h.indexOf('swiper-slide-active') >= 0,
            isVisible: h.indexOf('swiper-slide-visible') >= 0,
            isPrev: h.indexOf('swiper-slide-prev') >= 0,
            isNext: h.indexOf('swiper-slide-next') >= 0,
        },
        m = () => (typeof r == 'function' ? r(p) : r),
        v = () => {
            x(!0);
        };
    return V.createElement(
        n,
        Zo({ ref: f, className: dm(`${h}${i ? ` ${i}` : ''}`), 'data-swiper-slide-index': l, onLoad: v }, d),
        s &&
            V.createElement(
                Dd.Provider,
                { value: p },
                V.createElement(
                    'div',
                    { className: 'swiper-zoom-container', 'data-swiper-zoom': typeof s == 'number' ? s : void 0 },
                    m(),
                    a && !y && V.createElement('div', { className: 'swiper-lazy-preloader' })
                )
            ),
        !s && V.createElement(Dd.Provider, { value: p }, m(), a && !y && V.createElement('div', { className: 'swiper-lazy-preloader' }))
    );
});
Ar.displayName = 'SwiperSlide';
function wS(e) {
    let { swiper: t, extendParams: n, on: r, emit: i, params: o } = e;
    (t.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
        n({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !1,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1,
            },
        });
    let s,
        a,
        l = o && o.autoplay ? o.autoplay.delay : 3e3,
        u = o && o.autoplay ? o.autoplay.delay : 3e3,
        d,
        f = new Date().getTime(),
        h,
        g,
        y,
        x,
        S,
        p,
        m;
    function v(P) {
        !t || t.destroyed || !t.wrapperEl || (P.target === t.wrapperEl && (t.wrapperEl.removeEventListener('transitionend', v), !m && j()));
    }
    const w = () => {
            if (t.destroyed || !t.autoplay.running) return;
            t.autoplay.paused ? (h = !0) : h && ((u = d), (h = !1));
            const P = t.autoplay.paused ? d : f + u - new Date().getTime();
            (t.autoplay.timeLeft = P),
                i('autoplayTimeLeft', P, P / l),
                (a = requestAnimationFrame(() => {
                    w();
                }));
        },
        E = () => {
            let P;
            return (
                t.virtual && t.params.virtual.enabled
                    ? (P = t.slides.filter((L) => L.classList.contains('swiper-slide-active'))[0])
                    : (P = t.slides[t.activeIndex]),
                P ? parseInt(P.getAttribute('data-swiper-autoplay'), 10) : void 0
            );
        },
        C = (P) => {
            if (t.destroyed || !t.autoplay.running) return;
            cancelAnimationFrame(a), w();
            let N = typeof P > 'u' ? t.params.autoplay.delay : P;
            (l = t.params.autoplay.delay), (u = t.params.autoplay.delay);
            const L = E();
            !Number.isNaN(L) && L > 0 && typeof P > 'u' && ((N = L), (l = L), (u = L)), (d = N);
            const A = t.params.speed,
                Y = () => {
                    !t ||
                        t.destroyed ||
                        (t.params.autoplay.reverseDirection
                            ? !t.isBeginning || t.params.loop || t.params.rewind
                                ? (t.slidePrev(A, !0, !0), i('autoplay'))
                                : t.params.autoplay.stopOnLastSlide || (t.slideTo(t.slides.length - 1, A, !0, !0), i('autoplay'))
                            : !t.isEnd || t.params.loop || t.params.rewind
                            ? (t.slideNext(A, !0, !0), i('autoplay'))
                            : t.params.autoplay.stopOnLastSlide || (t.slideTo(0, A, !0, !0), i('autoplay')),
                        t.params.cssMode &&
                            ((f = new Date().getTime()),
                            requestAnimationFrame(() => {
                                C();
                            })));
                };
            return (
                N > 0
                    ? (clearTimeout(s),
                      (s = setTimeout(() => {
                          Y();
                      }, N)))
                    : requestAnimationFrame(() => {
                          Y();
                      }),
                N
            );
        },
        k = () => {
            (f = new Date().getTime()), (t.autoplay.running = !0), C(), i('autoplayStart');
        },
        _ = () => {
            (t.autoplay.running = !1), clearTimeout(s), cancelAnimationFrame(a), i('autoplayStop');
        },
        b = (P, N) => {
            if (t.destroyed || !t.autoplay.running) return;
            clearTimeout(s), P || (p = !0);
            const L = () => {
                i('autoplayPause'), t.params.autoplay.waitForTransition ? t.wrapperEl.addEventListener('transitionend', v) : j();
            };
            if (((t.autoplay.paused = !0), N)) {
                S && (d = t.params.autoplay.delay), (S = !1), L();
                return;
            }
            (d = (d || t.params.autoplay.delay) - (new Date().getTime() - f)),
                !(t.isEnd && d < 0 && !t.params.loop) && (d < 0 && (d = 0), L());
        },
        j = () => {
            (t.isEnd && d < 0 && !t.params.loop) ||
                t.destroyed ||
                !t.autoplay.running ||
                ((f = new Date().getTime()), p ? ((p = !1), C(d)) : C(), (t.autoplay.paused = !1), i('autoplayResume'));
        },
        O = () => {
            if (t.destroyed || !t.autoplay.running) return;
            const P = It();
            P.visibilityState === 'hidden' && ((p = !0), b(!0)), P.visibilityState === 'visible' && j();
        },
        R = (P) => {
            P.pointerType === 'mouse' && ((p = !0), (m = !0), !(t.animating || t.autoplay.paused) && b(!0));
        },
        z = (P) => {
            P.pointerType === 'mouse' && ((m = !1), t.autoplay.paused && j());
        },
        K = () => {
            t.params.autoplay.pauseOnMouseEnter && (t.el.addEventListener('pointerenter', R), t.el.addEventListener('pointerleave', z));
        },
        ee = () => {
            t.el.removeEventListener('pointerenter', R), t.el.removeEventListener('pointerleave', z);
        },
        de = () => {
            It().addEventListener('visibilitychange', O);
        },
        Me = () => {
            It().removeEventListener('visibilitychange', O);
        };
    r('init', () => {
        t.params.autoplay.enabled && (K(), de(), k());
    }),
        r('destroy', () => {
            ee(), Me(), t.autoplay.running && _();
        }),
        r('_freeModeStaticRelease', () => {
            (y || p) && j();
        }),
        r('_freeModeNoMomentumRelease', () => {
            t.params.autoplay.disableOnInteraction ? _() : b(!0, !0);
        }),
        r('beforeTransitionStart', (P, N, L) => {
            t.destroyed || !t.autoplay.running || (L || !t.params.autoplay.disableOnInteraction ? b(!0, !0) : _());
        }),
        r('sliderFirstMove', () => {
            if (!(t.destroyed || !t.autoplay.running)) {
                if (t.params.autoplay.disableOnInteraction) {
                    _();
                    return;
                }
                (g = !0),
                    (y = !1),
                    (p = !1),
                    (x = setTimeout(() => {
                        (p = !0), (y = !0), b(!0);
                    }, 200));
            }
        }),
        r('touchEnd', () => {
            if (!(t.destroyed || !t.autoplay.running || !g)) {
                if ((clearTimeout(x), clearTimeout(s), t.params.autoplay.disableOnInteraction)) {
                    (y = !1), (g = !1);
                    return;
                }
                y && t.params.cssMode && j(), (y = !1), (g = !1);
            }
        }),
        r('slideChange', () => {
            t.destroyed || !t.autoplay.running || (S = !0);
        }),
        Object.assign(t.autoplay, { start: k, stop: _, pause: b, resume: j });
}
const SS = () =>
        c.jsx(Vx, {
            children: c.jsxs(hm, {
                modules: [wS],
                spaceBetween: 0,
                slidesPerView: 1,
                autoplay: { delay: 5e3, disableOnInteraction: !1 },
                loop: !0,
                children: [
                    c.jsx(Ar, {
                        children: c.jsx('img', {
                            src: './images/about/display01.jpg',
                            alt: 'display01',
                            style: { width: '100%', height: '100%' },
                        }),
                    }),
                    c.jsx(Ar, {
                        children: c.jsx('img', {
                            src: './images/about/display02.jpg',
                            alt: 'display02',
                            style: { width: '100%', height: '100%' },
                        }),
                    }),
                    c.jsx(Ar, {
                        children: c.jsx('img', {
                            src: './images/about/display03.jpg',
                            alt: 'display03',
                            style: { width: '100%', height: '100%' },
                        }),
                    }),
                    c.jsx(Ar, {
                        children: c.jsx('img', {
                            src: './images/about/display05.jpg',
                            alt: 'display04',
                            style: { width: '100%', height: '100%' },
                        }),
                    }),
                ],
            }),
        }),
    ES = F.div`

`,
    CS = () => c.jsx(ES, { children: c.jsx('div', { className: 'inner', children: c.jsx('h2', { children: ' lamborghini Models ' }) }) }),
    kS = F.div`
    background-color: #212121;

    ul {
        display:flex;
        justify-content: center;

        li {
            padding:30px;
        }

        .yellowBackImg2 {
            position: relative;
            padding: 10px 30px; /* 글씨 주변 여백 조정 */
        }

        .yellowBackImg2::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url('./images/yellowBackImg2.png');
            background-repeat: no-repeat;
            background-size: 160px 200px; /* 배경 이미지를 요소에 맞게 늘림 */
            background-position: center;
            //z-index: -1; /* 텍스트 뒤로 배경 이미지 보내기 */
            transition: opacity 0.3s ease; /* 배경 투명도 전환 효과 */
        }

        .yellowBackImg2 a {
            position: relative;
            //z-index: 1; /* 링크 텍스트를 배경 이미지 위로 */
            //color: inherit; /* 링크 색상 유지 */
            color: #212121;
            text-decoration: none; /* 밑줄 제거 */
            display: block; /* 링크를 블록 레벨 요소로 만들어 전체 영역 클릭 가능하게 */
            transition: color 0.3s ease; /* 글자색 전환 효과 */
            margin: 20px;
        }

        /* 호버 효과 */
        .yellowBackImg2:hover::before {
            opacity: 0; /* 배경 이미지 숨기기 */
        }

        .yellowBackImg2:hover a {
            color: #FCC419; /* 호버 시 글자색 변경 */
        }
    }
`,
    TS = F.div`
    margin-bottom: 30px;
    position: relative;
    form {
        display: flex;
        justify-content: space-between;
        p {
            input[type='text'] {
                width: 350px;
                box-sizing: border-box;
                height: 45px;
                padding: 10px;
                border: 1px solid #999;
            }
            button {
                width: 100px;
                height: 45px;
                vertical-align: top;
            }
            select {
                width: 200px;
                height: 45px;
                box-sizing: border-box;
                padding: 10px;
                border: 1px solid #999;
            }
            span {
                margin-left: 15px;
                cursor: pointer;
            }
        }
    }
`,
    jS = F.article`
    &.cart-box {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        article {
            width: 23%;
            border: 1px solid #999;
            box-sizing: border-box;
            margin-bottom: 30px;
            text-align: center;
            margin-right: 2.66%;
            transition: 0.5s;
            cursor: pointer;
            div {
                margin-bottom: 25px;
            }
            img {
                width: 100%;
            }
            h3 {
                font-weight: 700;
                height: 100px;
                margin-bottom: 10px;
            }
            h4 {
                font-size: 20px;
                line-height: 1.3;
                font-weight: 300;
                margin-bottom: 20px;
            }
            p {
                width: 90%;
                margin: auto;
                margin-top: 10px;
                margin-bottom: 10px;
                button {
                    background: #333;
                    padding: 8px 45px;
                    vertical-align: middle;
                    color: #fff;
                    &.off {
                        background: tomato;
                        padding: 8px 45px;
                        vertical-align: middle;
                    }
                    span {
                        font-size: 18px;
                    }
                }
            }
            &:hover {
                background-color: #212121;
                color:#FCC419
            }
        }

        article:nth-child(4) {
            margin-right: 0; /* 4번째마다 오른쪽 마진 제거 */
        }
    }
`,
    PS = F.div`
    display:flex;

    .left {
        position: relative;
        text-align: center;
        align-content: start;
        padding-top: 50px;
        width: 50%;

        .smallImg {
            position: absolute;
            top: 70%;

            ul {
                display: flex;

                li {
                    margin: 20px;

                    img {
                        width: 50%;
                        cursor: pointer;
                        box-sizing: border-box;
                        border: 1px solid transparent;

                        &.on {
                            border: 1px solid black;
                        }
                    }
                }
            }
        }

        img {
            width: 52%;
            max-width: 100%;
        }
    }

    .right {
        width: 50%;
        padding: 50px;
        text-align: center;
        background-image: url('./images/priceBackground1.jfif');
        background-repeat: no-repeat;
        background-size: 100% 100%; /* 배경 이미지를 요소에 맞게 늘림 */
        background-position: center;

        h4, h6 {
            padding: 20px;
        }

        h5 {
            padding: 20px;
            ul {
                display: flex;
                align-items: center;
                justify-content: center;
                
                li {
                    padding: 10px;
                    height: 30px;
                    width: 30px;
                    cursor: pointer;

                    .color {
                        width: 20px;
                        height: 20px;
                        position: relative;
                    }

                    .color-inner {
                        width: 100%;
                        height: 100%;

                        &.on {
                            box-shadow: 0px 0px 2px 2px #FCC419;
                        }
                    }
                }
            }
        }
        p {
            display:grid;

            button {
                padding: 20px;
                margin: 20px;
                position: relative;
                padding: 10px 20px;
                background-color: #212121;
                color: white;
                border: none;
                cursor: pointer;
                overflow: hidden;
                transition: color 0.3s ease;
                z-index: 1;
            }

            button::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 150%;
                height: 100%;
                background-color: #FCC419;
                transform: translateX(-110%) skew(-15deg);
                transition: transform 0.8s ease;
                z-index: -1;
            }

            button:hover {
                color: #212121; /* 호버 시 텍스트 색상 변경 */
            }

            button:hover::before {
                transform: translateX(-10%) skew(-15deg); /* 호버 시 오른쪽으로 이동 */
            }

            .mainBtn {
                background-color: #212121;
                color:#FCC419
            }
        }
        
    }
`,
    _S = () =>
        c.jsx(TS, {
            children: c.jsxs('form', {
                children: [
                    c.jsxs('p', {
                        children: [
                            c.jsxs('select', {
                                children: [
                                    c.jsx('option', { value: '', children: ' 상품 정렬 ' }),
                                    c.jsx('option', { value: 'title', children: '제품명' }),
                                    c.jsx('option', { value: 'price', children: '가격' }),
                                    c.jsx('option', { value: 'category', children: '카테고리' }),
                                ],
                            }),
                            c.jsx('span', { children: '초기화' }),
                        ],
                    }),
                    c.jsxs('p', {
                        children: [
                            c.jsx('input', { type: 'text', name: '', id: '' }),
                            c.jsx('button', { type: 'submit', children: '검색' }),
                        ],
                    }),
                ],
            }),
        }),
    mm = F.div`
    .inner {
        padding: 100px 0;
    }
    h2 {
        font-weight: 700;
    }
`,
    bS = {
        caps: [
            {
                id: 1,
                title: "Automobili Lamborghini Squadra Corse adults' baseball cap",
                model: 'SKU16432PLB000000',
                category: 'caps',
                price: 43,
                color: ['black'],
                hex: ['#323232'],
                description:
                    'Automobili Lamborghini Squadra Corse adults&#96; Cap with 3D rubberized logo and metal back closure. Further embellished by the colors and the official sponsors of the Racing Team.',
                image: './images/products/caps/SKU16432PLB/16432PLB000000_01.webp',
                imgCnt: 4,
            },
            {
                id: 2,
                title: "Automobili Lamborghini Squadra Corse adults' baseball cap",
                model: 'SKU16430PLB000000',
                category: 'caps',
                price: 43,
                color: ['black'],
                hex: ['#323232'],
                description: 'Automobili Lamborghini Squadra Corse adults&#96; Cap with 3D rubberized logo and metal back closure.',
                image: './images/products/caps/SKU16430PLB/16430PLB000000_01.webp',
                imgCnt: 4,
            },
            {
                id: 3,
                title: 'CAP WITH SILVER-TONE SHIELD LOGO',
                model: 'SKU16389CCU000000',
                category: 'caps',
                price: 43,
                color: ['lightblue', 'lightgray'],
                hex: ['#29588e', '#ded7c0'],
                description: 'Cotton cap customised with an embroidered silver-tone shield logo.',
                image: './images/products/caps/SKU16389CCU/lightblue/16389CCU000000_01.webp',
                imgCnt: 4,
            },
            {
                id: 4,
                title: 'Unisex Gold Shield Logo cap',
                model: 'SKU16210PLB000000',
                category: 'caps',
                price: 48,
                color: ['black', 'blue'],
                hex: ['#323232', '#050a61'],
                description: 'Iconic unisex Automobili Lamborghini cap customised with Gold Shield Logo print with embossed print.',
                image: './images/products/caps/SKU16210PLB/black/16210PLB000000_01.webp',
                imgCnt: 4,
            },
            {
                id: 5,
                title: 'BEANIE - DESCENTE X AUTOMOBILI LAMBORGHINI',
                model: 'SKU16388WWW000000',
                category: 'caps',
                price: 142,
                color: ['gray'],
                hex: ['#dfd9c1'],
                description:
                    'Made of 73% Acrylic, 27% wool with sufficient thickness, naivlizer beanie hat has more detailed design and well-made craftsmanship, always keeps you warm and stylish.',
                image: './images/products/caps/SKU16388WWW/16388WWW000000_01.webp',
                imgCnt: 2,
            },
        ],
        keyring: [
            {
                id: 6,
                title: 'Shield logo keyring',
                model: 'SKU11264BRB000000',
                category: 'keyring',
                price: 45,
                color: ['black'],
                hex: ['#323232'],
                description: 'KEY HOLDER IS MADE OFF BRASS',
                image: './images/products/keyring/SKU11264BRB/11264BRB000000_01.webp',
                imgCnt: 1,
            },
        ],
        dynamic: [
            {
                id: 7,
                title: 'WIRELESS MW75 HEADPHONES BY MASTER & DYNAMIC',
                model: 'SKU16309IIE094WIR',
                category: 'dynamic',
                price: 692,
                color: ['white'],
                hex: ['#faf2fa'],
                description:
                    'Wireless MW75 headphones with active noise cancelling (ANC) and a 40-mm beryllium driver. The batteries last up to 32 hours or up to 28 hours in active noise-cancelling mode. Dimensions: 161mm x 198mm x 83.5mm',
                image: './images/products/dynamic/SKU16309IIE/16309IIE094WIR_01.webp',
                imgCnt: 3,
            },
            {
                id: 8,
                title: 'WIRELESS MG20 GAMING HEADPHONES BY MASTER & DYNAMIC',
                model: 'SKU16310IIB080WIR',
                category: 'dynamic',
                price: 585,
                color: ['green'],
                hex: ['#a8d24f'],
                description:
                    'Wireless MG20 Gaming Headphones fitted with 50-mm beryllium drivers and featuring 7.1 surround sound. The detachable boom microphone with onboard mikes guarantees outstanding conversation quality as well as a sophisticated design. Dimensions: 174mm x 197mm x 84.5mm',
                image: './images/products/dynamic/SKU16310IIB/16310IIB080WIR_01.webp',
                imgCnt: 3,
            },
        ],
        lego: [
            {
                id: 9,
                title: 'LEGO® Technic™ Lamborghini Huracán Tecnica',
                model: 'SKU16412PPH000000',
                category: 'lego',
                price: 57,
                color: ['green', 'orange'],
                hex: ['#c5da49', '#fd8604'],
                description:
                    'Do you love Lamborghini? Do you dream of owning your own Lamborghini Huracán Tecnica? Well, now you can with this LEGO® Technic™ Lamborghini Huracán Tecnica model kit.',
                image: './images/products/lego/SKU16412PPH/green/16412PPH000000_01.webp',
                imgCnt: 5,
            },
            {
                id: 10,
                title: 'LEGO® SPEED CHAMPIONS LAMBORGHINI COUNTACH',
                model: 'SKU16151PPW000000',
                category: 'lego',
                price: 27,
                color: ['white'],
                hex: ['#dfd8c0'],
                description:
                    'Get ready to experience the legendary Lamborghini Countach, the iconic super sports car revered by armies of fans from around the world for its stunning design and top-notch performance.',
                image: './images/products/lego/SKU16151PPW/16151PPW000000_01.webp',
                imgCnt: 5,
            },
        ],
    },
    IS = { products: bS, detail: {} },
    gm = Cr({
        name: 'product',
        initialState: IS,
        reducers: {
            updateDetail: (e, t) => {
                (e.detail = t.payload), localStorage.setItem('detail', JSON.stringify(e.detail));
            },
        },
    }),
    { updateDetail: NS } = gm.actions,
    LS = gm.reducer,
    OS = ({ productLists: e }) => {
        const { id: t, title: n, model: r, price: i, color: o, hex: s, description: a, image: l } = e,
            { category: u } = Sr(),
            d = Ge(),
            f = pt(),
            h = () => {
                d(NS(e)), f(`/product/${u}/productDetail`);
            };
        return c.jsxs('article', {
            onClick: h,
            children: [
                c.jsx('div', { children: c.jsx('img', { src: l, alt: n }) }),
                c.jsxs('h3', { children: [' ', n, ' '] }),
                c.jsxs('h4', { children: [' $ ', i, ' '] }),
            ],
        });
    },
    MS = () => {
        const { category: e } = Sr(),
            { products: t } = ke((r) => r.product);
        let n = '';
        return (
            e === 'caps' && (n = t.caps),
            e === 'dynamic' && (n = t.dynamic),
            e === 'keyring' && (n = t.keyring),
            e === 'lego' && (n = t.lego),
            c.jsx(jS, { className: 'cart-box', children: n.map((r) => c.jsx(OS, { productLists: r }, r.id)) })
        );
    },
    Bu = () => {
        const { category: e } = Sr();
        return c.jsx(kS, {
            children: c.jsxs('ul', {
                children: [
                    c.jsx('li', {
                        className: 'yellowBackImg2',
                        children: c.jsx(U, { to: '/product/caps', className: e === 'caps' ? 'on' : '', children: 'CAPS' }),
                    }),
                    c.jsx('li', {
                        className: 'yellowBackImg2',
                        children: c.jsx(U, { to: '/product/dynamic', className: e === 'dynamic' ? 'on' : '', children: 'DYNAMIC' }),
                    }),
                    c.jsx('li', {
                        className: 'yellowBackImg2',
                        children: c.jsx(U, { to: '/product/keyring', className: e === 'keyring' ? 'on' : '', children: 'KEYRING' }),
                    }),
                    c.jsx('li', {
                        className: 'yellowBackImg2',
                        children: c.jsx(U, { to: '/product/lego', className: e === 'lego' ? 'on' : '', children: 'LEGO' }),
                    }),
                ],
            }),
        });
    },
    zS = () =>
        c.jsxs(mm, {
            children: [
                c.jsx(Bu, {}),
                c.jsx('div', { className: 'inner', children: c.jsx('h2', { children: ' Product 페이지 입니다. ' }) }),
            ],
        }),
    RS = { carts: [], wishLists: [], cartsTotal: 0, wishListTotal: 0 },
    vm = Cr({
        name: 'cart',
        initialState: RS,
        reducers: {
            addCart: (e, t) => {
                const n = e.carts.find((r) => r.id === Number(t.payload.id));
                n !== '' && n !== void 0
                    ? (e.carts = e.carts.map((r) => (r.id === t.payload.id ? { ...r, count: r.count + 1 } : r)))
                    : (e.carts = [...e.carts, { ...t.payload, isChoice: !1, count: 1, totalPrice: 0 }]);
            },
            deleteCart: (e, t) => {
                e.carts = e.carts.filter((n) => n.id !== t.payload);
            },
            delAllCart: (e, t) => {
                e.carts = [];
            },
            totalCart: (e, t) => {
                e.cartsTotal = e.carts.reduce((n, r) => n + r.totalPrice, 0);
            },
            choiceCart: (e, t) => {
                e.carts = e.carts.map((n) => (n.id === t.payload.id ? { ...n, isChoice: !t.payload.isChoice } : n));
            },
            addWishList: (e, t) => {
                e.wishLists = [...e.wishLists, { ...t.payload, isChoice: !1, count: 1, totalPrice: 0 }];
            },
            choiceDel: (e, t) => {
                e.carts = e.carts.filter((n) => n.isChoice !== !0);
            },
            cartCount: (e, t) => {
                const { id: n, count: r } = t.payload;
                t.payload.calcul === '-'
                    ? t.payload.count > 1 && (e.carts = e.carts.map((i) => (i.id === n ? { ...i, count: r - 1 } : i)))
                    : t.payload.calcul === '+' && (e.carts = e.carts.map((i) => (i.id === n ? { ...i, count: r + 1 } : i)));
            },
            cartTotalPrice: (e, t) => {
                const { id: n, totalPrice: r } = t.payload;
                e.carts = e.carts.map((i) => (i.id === n ? { ...i, totalPrice: r } : i));
            },
        },
    }),
    {
        addCart: DS,
        deleteCart: AS,
        delAllCart: $S,
        totalCart: FS,
        sortCart: HE,
        choiceCart: BS,
        choiceDel: WS,
        resetCart: GE,
        searchCart: KE,
        cartCount: US,
        cartTotalPrice: VS,
        addWishList: HS,
    } = vm.actions,
    GS = vm.reducer,
    KS = ({ item: e }) => {
        const { id: t, title: n, price: r, image: i, isChoice: o, count: s } = e,
            [a, l] = T.useState(s * r),
            u = Ge(),
            d = (h) => {
                h.target.tagName.toLowerCase() !== 'button' && (h.target.parentNode.classList.toggle('on'), u(BS(e)));
            },
            f = (h, g) => {
                u(US({ id: h, calcul: g, count: s }));
            };
        return (
            T.useEffect(() => {
                const h = r * s;
                l(h), u(VS({ id: t, totalPrice: h }));
            }, [s]),
            c.jsxs('article', {
                children: [
                    c.jsx('input', { type: 'checkbox', value: o, onChange: d }),
                    c.jsx('img', { src: i, alt: n }),
                    c.jsxs('div', {
                        className: 'depth1',
                        children: [c.jsx('h3', { children: n }), c.jsxs('span', { children: [' $ ', r] })],
                    }),
                    c.jsxs('div', {
                        className: 'depth2',
                        children: [
                            c.jsx('h3', { children: '수량' }),
                            c.jsx('span', { className: 'btnType', onClick: () => f(t, '-'), children: '-' }),
                            c.jsx('span', { children: s }),
                            c.jsx('span', { className: 'btnType', onClick: () => f(t, '+'), children: '+' }),
                        ],
                    }),
                    c.jsxs('div', {
                        className: 'depth3',
                        children: [c.jsx('h3', { children: '총 금액' }), c.jsxs('span', { children: [' $ ', a] })],
                    }),
                    c.jsx('button', { onClick: () => u(AS(t)), children: ' 삭제 ' }),
                ],
            })
        );
    },
    YS = F.div`
    .cart-list {
        width: 100%;
        article {
            display: flex;
            border: 1px solid #000;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 15px;
            padding: 10px;
            font-size: 20px;
            width: 100%;
            &.on {
                background-color: wheat;
            }
            img {
                width: 120px;
            }
            div {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 60%;
                h3 {
                    margin-right: 30px;
                }
                span {
                    text-align: center;
                    width: 40%;
                }
            }
            button {
                width: 100px;
                border: 1px solid #000;
                height: 40px;
                transition: 0.3s;
                margin-top: 0;
                &:hover {
                    background: #fff;
                    color: #000;
                }
            }
            .btnType {
                margin: 10px;
                padding: 10px;
                border: 1px solid #000;
                background-color: black;
                color: white;
                cursor: pointer;
                transition: 0.5s;

                &:hover {
                    background-color: white;
                    color: black;
                }
            }

            .depth1 {width:50%;}
            .depth2 {
                width: 30%;
                h3 {
                    width: 80px;
                }
            }
            .depth3 {width:20%;}
        }
    }

    .cart-bottom {
        margin-top: 50px;
        display: flex;
        font-size: 18px;
        strong {
            margin-right: 20px;
        }
    }
    button {
        margin-top: 50px;
        width: 250px;
        height: 50px;
        background: #000;
        color: #fff;
        margin-right: 5px;
    }
`;
F.div`
    .inner {
    }
    h2 {
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 500px;
    }
    p {
        text-align: center;
        button {
            margin-top: 50px;
            width: 300px;
            height: 50px;
            background: #000;
            color: #fff;
        }
    }
`;
const QS = () => {
        const { carts: e, cartsTotal: t } = ke((i) => i.cart),
            n = Ge(),
            r = pt();
        return (
            T.useEffect(() => {
                n(FS());
            }, [e]),
            c.jsxs(YS, {
                className: 'cart-wrap',
                children: [
                    c.jsx('h2', { children: '장바구니' }),
                    c.jsx('div', { className: 'cart-list', children: e.map((i) => c.jsx(KS, { item: i }, i.id)) }),
                    c.jsxs('div', {
                        className: 'cart-bottom',
                        children: [
                            c.jsxs('p', {
                                children: [
                                    c.jsx('strong', { children: '총개수' }),
                                    c.jsxs('span', { children: [' total : ', e.length, ' 개'] }),
                                ],
                            }),
                            c.jsxs('p', {
                                children: [c.jsx('strong', { children: '총금액' }), c.jsxs('span', { children: [' total : ', t, ' 원'] })],
                            }),
                        ],
                    }),
                    c.jsxs('p', {
                        children: [
                            c.jsx('button', { onClick: () => r('/product'), children: '쇼핑하러가기' }),
                            c.jsx('button', { onClick: () => n(WS()), children: '선택삭제' }),
                            c.jsx('button', { onClick: () => n($S()), children: '장바구니 비우기' }),
                        ],
                    }),
                ],
            })
        );
    },
    XS = F.div`
    .inner {
        padding: 100px 0;
    }
    h2 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 50px;
    }
`,
    qS = () => c.jsx(XS, { className: 'cart-box', children: c.jsx('div', { className: 'inner', children: c.jsx(QS, {}) }) }),
    JS = F.div`
    height: 645px;

    .noticeTable {
        width: 100%;
        caption {
            position: absolute;
            left: 0;
            top: 0;
            text-indent: -9999px;
        }

        .num {
            width: 10%;
        }
        .title {
            width: auto;
        }
        .date {
            width: 15%;
        }
        th,
        td {
            height: 45px;
            vertical-align: middle;
            border: 1px solid #999;
        }
        th {
            border-bottom: none;
            font-weight: 700;
        }
        td {
            text-align: center;
            &:nth-child(2) {
                text-align: left;
                padding-left: 20px;
            }
        }
    }
`,
    ZS = F.div`
    .inner {
        padding: 100px 0;
    }
    h2 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 50px;
    }

    .con {
        font-size: 20px;
        line-height: 1.7;
        border-top: 1px solid #999;
        border-bottom: 1px solid #999;
        margin-bottom: 20px;
        padding: 20px 0;
        h3 {
            font-size: 20px;
            font-weight: 500;
            padding-bottom: 15px;
            border-bottom: 1px solid #dcdcdc;
            margin-bottom: 15px;
        }
        .txt {
            font-size: 18px;
            margin-bottom: 15px;
            height: 300px;
            white-space: pre-line;
        }
        .date {
            font-size: 16px;
        }
    }
    button {
        width: 200px;
        height: 50px;
        background: #000;
        color: #fff;
        cursor: pointer;
        border: none;
    }
`,
    eE = ({ item: e }) => {
        const { id: t, title: n, content: r, date: i } = e;
        return c.jsxs('tr', {
            children: [
                c.jsxs('td', { children: [' ', t, ' '] }),
                c.jsx('td', { children: c.jsx(U, { to: `/notice/${t}`, children: n }) }),
                c.jsxs('td', { children: [' ', i, ' '] }),
            ],
        });
    },
    tE = { currentPages: [], currentPage: 1, postofPage: 10, pageNumber: 0 },
    ym = Cr({
        name: 'page',
        initialState: tE,
        reducers: {
            pagetoPost: (e, t) => {
                const { dataList: n, page: r } = t.payload;
                e.currentPage = r;
                const i = n.length,
                    o = e.currentPage * e.postofPage,
                    s = o - e.postofPage;
                (e.currentPages = n.slice(s, o)), (e.pageNumber = Math.ceil(i / e.postofPage));
            },
        },
    }),
    { pagetoPost: yn } = ym.actions,
    nE = ym.reducer,
    rE = () => {
        const { notices: e } = ke((i) => i.notice),
            { currentPages: t } = ke((i) => i.page),
            n = Ge(),
            r = e;
        return (
            T.useEffect(() => {
                n(yn({ dataList: r, page: 1 }));
            }, [e]),
            c.jsx(JS, {
                children: c.jsxs('table', {
                    className: 'noticeTable',
                    children: [
                        c.jsx('caption', { children: '게시판' }),
                        c.jsxs('colgroup', {
                            children: [
                                c.jsx('col', { className: 'num' }),
                                c.jsx('col', { className: 'title' }),
                                c.jsx('col', { className: 'date' }),
                            ],
                        }),
                        c.jsx('thead', {
                            children: c.jsxs('tr', {
                                children: [
                                    c.jsx('th', { children: '번호' }),
                                    c.jsx('th', { children: '내용' }),
                                    c.jsx('th', { children: '작성일' }),
                                ],
                            }),
                        }),
                        c.jsx('tbody', { children: t.map((i) => c.jsx(eE, { item: i }, i.id)) }),
                    ],
                }),
            })
        );
    },
    iE = F.div`
    div {
        margin-top: 30px;
        text-align: center;
        button {
            width: 30px;
            height: 30px;
            border: 1px solid #666;
            margin-right: 5px;
            background: #fff;
            &:first-child {
                border: none;
            }
            &:last-child {
                border: none;
            }
            &.on {
                border-color: tomato;
                background: tomato;
                color: #fff;
            }
        }
    }
`,
    xm = ({ dataList: e }) => {
        const { currentPage: t } = ke((u) => u.page),
            n = Ge(),
            r = 10,
            i = e.length,
            o = Math.ceil(i / r),
            s = [];
        for (let u = 1; u <= o; u++) s.push(u);
        const a = () => {
                t !== 1 && n(yn({ dataList: e, page: t - 1 }));
            },
            l = () => {
                t !== o && n(yn({ dataList: e, page: t + 1 }));
            };
        return c.jsx(iE, {
            children: c.jsxs('div', {
                children: [
                    c.jsx('button', { onClick: () => n(yn({ dataList: e, page: 1 })), children: '<<' }),
                    c.jsx('button', { onClick: a, children: '<' }),
                    s.map((u) =>
                        c.jsx(
                            'button',
                            {
                                className: u === t ? 'on' : '',
                                onClick: (d) => {
                                    d.preventDefault(), n(yn({ dataList: e, page: u }));
                                },
                                children: u,
                            },
                            u
                        )
                    ),
                    c.jsx('button', { onClick: l, children: '>' }),
                    c.jsx('button', { onClick: () => n(yn({ dataList: e, page: o })), children: '>>' }),
                ],
            }),
        });
    },
    oE = F.div`
    .inner {
        padding: 100px 0;
    }
    h2 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 50px;
    }
`,
    sE = () => {
        const { notices: e } = ke((t) => t.notice);
        return c.jsx(oE, {
            children: c.jsxs('div', {
                className: 'inner',
                children: [c.jsx('h2', { children: '게시판' }), c.jsx(rE, {}), c.jsx(xm, { dataList: e })],
            }),
        });
    },
    lE = F.div`
    height: 645px;

    .customerTable {
        width: 100%;
        caption {
            position: absolute;
            text-indent: -9999px;
            left: 0;
            top: 0;
            overflow: hidden;
        }
        .num {
            width: 10%;
        }
        .title {
            width: auto;
        }
        .name {
            width: 15%;
        }
        .date {
            width: 15%;
        }
        th,
        td {
            height: 45px;
            vertical-align: middle;
            border: 1px solid #999;
        }
        th {
            border-bottom: none;
            font-weight: 700;
        }
        td {
            text-align: center;
            &:nth-child(2) {
                text-align: left;
                padding-left: 20px;
            }
        }
    }
    p {
        text-align: right;
        margin-top: 50px;
        button {
            width: 200px;
            height: 50px;
            background: #000;
            color: #fff;
            cursor: pointer;
            border: none;
        }
    }
`,
    wm = F.div`
    .inner {
        padding: 100px 0;
    }
    h2 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 50px;
    }
    .customer-add {
        p {
            margin-bottom: 15px;
            input {
                width: 100%;
                height: 55px;
                padding: 20px;
                box-sizing: border-box;
            }
            textarea {
                width: 100%;
                height: 50px;
                box-sizing: border-box;
                height: 300px;
                padding: 20px;
            }
            button {
                width: 200px;
                height: 50px;
                background: #000;
                color: #fff;
                cursor: pointer;
                border: none;
                margin-right: 5px;
            }
        }
    }

    .customer-con {
        text-align: center;
        font-size: 20px;
        line-height: 1.7;
    }
    .customer-con + button {
        width: 250px;
        height: 45px;
        background: #000;
        color: #fff;
    }
`,
    aE = F.div`
    .inner {
        padding: 100px 0;
    }
    h2 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 50px;
    }

    .con {
        font-size: 20px;
        line-height: 1.7;
        border-top: 1px solid #999;
        border-bottom: 1px solid #999;
        margin-bottom: 20px;
        padding: 20px 0;
        h3 {
            font-size: 20px;
            font-weight: 500;
            padding-bottom: 15px;
            border-bottom: 1px solid #dcdcdc;
            margin-bottom: 15px;
        }
        .name {
            font-size: 18px;
            padding-bottom: 15px;
            border-bottom: 1px solid #dcdcdc;
            margin-bottom: 15px;
        }
        .txt {
            font-size: 18px;
            margin-bottom: 15px;
            height: 300px;
            white-space: pre-line;
        }
        .date {
            font-size: 16px;
        }
    }
    button {
        width: 200px;
        height: 50px;
        background: #000;
        color: #fff;
        cursor: pointer;
        border: none;
        margin-right: 5px;
    }
`,
    uE = ({ item: e }) => {
        const { id: t, name: n, title: r, content: i, date: o } = e;
        return c.jsxs('tr', {
            children: [
                c.jsxs('td', { children: [' ', t, ' '] }),
                c.jsx('td', { children: c.jsxs(U, { to: `/customer/${t}`, children: [' ', r, ' '] }) }),
                c.jsxs('td', { children: [' ', n, ' '] }),
                c.jsxs('td', { children: [' ', o, ' '] }),
            ],
        });
    },
    cE = () => {
        const { customers: e } = ke((o) => o.customer),
            t = e,
            n = Ge(),
            r = pt();
        T.useEffect(() => {
            n(yn({ dataList: t, page: 1 }));
        }, [e]);
        const { currentPages: i } = ke((o) => o.page);
        return c.jsxs(lE, {
            children: [
                c.jsxs('table', {
                    className: 'customerTable',
                    children: [
                        c.jsx('caption', { children: '게시판' }),
                        c.jsxs('colgroup', {
                            children: [
                                c.jsx('col', { className: 'num' }),
                                c.jsx('col', { className: 'title' }),
                                c.jsx('col', { className: 'name' }),
                                c.jsx('col', { className: 'date' }),
                            ],
                        }),
                        c.jsx('thead', {
                            children: c.jsxs('tr', {
                                children: [
                                    c.jsx('th', { children: '번호' }),
                                    c.jsx('th', { children: '내용' }),
                                    c.jsx('th', { children: '작성자' }),
                                    c.jsx('th', { children: '작성일' }),
                                ],
                            }),
                        }),
                        c.jsx('tbody', { children: i.map((o) => c.jsx(uE, { item: o }, o.id)) }),
                    ],
                }),
                c.jsx('p', { children: c.jsx('button', { onClick: () => r('/customer/customeradd'), children: '글 작성 ' }) }),
            ],
        });
    },
    dE = F.div`
    .inner {
        padding: 100px 0;
    }
    h2 {
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 50px;
    }
`,
    fE = () => {
        const { customers: e } = ke((t) => t.customer);
        return c.jsx(dE, {
            children: c.jsxs('div', {
                className: 'inner',
                children: [c.jsx('h2', { children: ' 고객문의 ' }), c.jsx(cE, {}), c.jsx(xm, { dataList: e })],
            }),
        });
    },
    Sm = F.div`
    position: relative;
    overflow-x: hidden;
`,
    pE = F.div`
    position: fixed;
    top: 12.6%;
    left: -250px;
    width: 250px;
    height: 600px;
    background-color: #212121;
    transition: left 0.3s ease-in-out;
    padding: 20px;
    box-sizing: border-box;

    &.on {
        left: 0;
    }

    .menuItem p {
        border: 1px solid #FCC419;
        background-color: #FCC419;
        user-select: none;
        cursor: pointer;
    }
`,
    hE = F.div`
    max-height: ${(e) => (e.$isOpen ? '1000px' : '0')};
    overflow: hidden;
    transition: max-height 0.5s;

    ul li {
        padding: 10px 0;
        border: 1px solid #FCC419;
        background-color: #FCC419;
        user-select: none;
        cursor: pointer;

        a {
            cursor: pointer;
            margin: 0;
        }
    }
`,
    Ad = F.div`
    padding: 20px;

    > ul li a {
        cursor: pointer;
        padding: 10px 0;
        margin: 0;
    }
`,
    _i = () => {
        const [e, t] = T.useState(!1),
            [n, r] = T.useState(!1),
            [i, o] = T.useState(!1);
        T.useEffect(
            () => (
                t(!0),
                () => {
                    t(!1);
                }
            ),
            []
        );
        const s = () => {
                r(!n);
            },
            a = () => {
                o(!i);
            };
        return c.jsx(Sm, {
            children: c.jsx('div', {
                className: 'inner',
                children: c.jsx(pE, {
                    className: e ? 'on' : '',
                    children: c.jsxs('div', {
                        className: 'sideMenu',
                        children: [
                            c.jsx(Ad, {
                                children: c.jsxs('div', {
                                    className: 'menuItem',
                                    children: [
                                        c.jsxs('p', { onClick: s, children: ['Account ', n ? '▲' : '▼'] }),
                                        c.jsx(hE, {
                                            $isOpen: n,
                                            children: c.jsxs('ul', {
                                                children: [
                                                    c.jsx('li', { children: c.jsx(U, { to: '/mypage/edit', children: '개인정보 수정' }) }),
                                                    c.jsx('li', { children: c.jsx(U, { to: '/mypage/card', children: '결제 카드 관리' }) }),
                                                    c.jsx('li', { children: c.jsx(U, { to: '/mypage/address', children: '배송지 관리' }) }),
                                                    c.jsx('li', {
                                                        children: c.jsx(U, { to: '/mypage/accountDel', children: '계정 탈퇴' }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                            c.jsx(Ad, {
                                children: c.jsx('div', {
                                    className: 'menuItem',
                                    children: c.jsx('p', { onClick: a, children: 'wishList' }),
                                }),
                            }),
                        ],
                    }),
                }),
            }),
        });
    },
    mE = () =>
        c.jsxs(Sm, { children: [c.jsx('div', { className: 'inner', children: c.jsx('h2', { children: ' My page ' }) }), c.jsx(_i, {})] }),
    gE = () => c.jsx('div', {}),
    vE = () => c.jsx('div', {}),
    yE = () => c.jsx('div', {}),
    xE = () => c.jsx('div', {}),
    wE = () => c.jsx('div', {}),
    SE = () => {
        const { category: e } = Sr();
        return c.jsxs(mm, {
            children: [
                c.jsx(Bu, {}),
                c.jsxs('div', { className: 'inner', children: [c.jsxs('h2', { children: [' ', e, ' '] }), c.jsx(_S, {}), c.jsx(MS, {})] }),
            ],
        });
    },
    EE = (e, t, n, r, i) => {
        const o = [],
            s = e.substring(0, 11),
            a = e.substring(3, 17);
        let l = './images/products';
        return (
            n.length === 1
                ? r.map((u) => {
                      o[u] = `${l}/${t}/${s}/${a}_0${u + 1}.webp`;
                  })
                : n.length > 1 &&
                  r.map((u) => {
                      o[u] = `${l}/${t}/${s}/${i}/${a}_0${u + 1}.webp`;
                  }),
            o
        );
    },
    CE = () => {
        const e = JSON.parse(localStorage.getItem('detail')),
            { id: t, title: n, model: r, category: i, price: o, color: s, hex: a, description: l, image: u, imgCnt: d } = e,
            f = Array.from({ length: d }, (b, j) => j),
            h = Ge(),
            [g, y] = T.useState(0),
            [x, S] = T.useState(u),
            [p, m] = T.useState(a[0]),
            [v, w] = T.useState(s[0]),
            [E, C] = T.useState([]);
        T.useEffect(() => {
            const b = EE(r, i, s, f, v);
            C(b), S(b[g]);
        }, [v, g]);
        const k = (b) => {
                y(b);
            },
            _ = (b) => {
                m(a[b]), w(s[b]), y(0);
            };
        return c.jsxs('div', {
            className: 'inner',
            children: [
                c.jsx(Bu, {}),
                c.jsxs(PS, {
                    children: [
                        c.jsxs('div', {
                            className: 'left',
                            children: [
                                c.jsx('img', { src: x, alt: n }),
                                c.jsx('div', {
                                    className: 'smallImg',
                                    children: c.jsx('ul', {
                                        children: f.map((b) =>
                                            c.jsx(
                                                'li',
                                                {
                                                    onClick: () => k(b),
                                                    children:
                                                        d > 1
                                                            ? c.jsx('img', { className: b === g ? 'on' : '', src: E[b], alt: n })
                                                            : c.jsx(c.Fragment, {}),
                                                },
                                                b
                                            )
                                        ),
                                    }),
                                }),
                            ],
                        }),
                        c.jsxs('div', {
                            className: 'right',
                            children: [
                                c.jsx('h3', { children: r }),
                                c.jsx('h2', { children: n }),
                                c.jsxs('h4', { children: ['$ ', o] }),
                                c.jsx('h5', {
                                    children: c.jsxs('ul', {
                                        children: [
                                            'Color',
                                            a.map((b, j) =>
                                                c.jsx(
                                                    'li',
                                                    {
                                                        className: 'color',
                                                        onClick: () => _(j),
                                                        children: c.jsx('div', {
                                                            className: `color-inner ${b === p ? 'on' : ''}`,
                                                            style: { backgroundColor: `${b}` },
                                                        }),
                                                    },
                                                    b
                                                )
                                            ),
                                        ],
                                    }),
                                }),
                                c.jsx('h6', { children: l }),
                                c.jsxs('p', {
                                    children: [
                                        c.jsx('button', { className: 'mainBtn', onClick: () => h(DS(e)), children: 'ADD TO CART' }),
                                        c.jsx('button', { onClick: () => h(HS(e)), children: ' ADD TO WISHLIST ' }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    kE = () => {
        const { notices: e } = ke((l) => l.notice),
            { noticeID: t } = Sr(),
            n = pt(),
            r = e.find((l) => l.id === Number(t)),
            { id: i, title: o, content: s, date: a } = r;
        return c.jsx(ZS, {
            children: c.jsxs('div', {
                className: 'inner',
                children: [
                    c.jsx('h2', { children: ' 공지사항 ' }),
                    c.jsxs('div', {
                        className: 'con',
                        children: [
                            c.jsxs('h3', { children: [i, '번 ', o] }),
                            c.jsxs('p', { className: 'txt', children: [s, ' '] }),
                            c.jsxs('p', { className: 'date', children: [a, ' '] }),
                        ],
                    }),
                    c.jsx('button', { onClick: () => n('/notice'), children: '목록으로' }),
                ],
            }),
        });
    },
    Em = [
        { id: 1, name: '김태리', title: '문의글1', content: '문의내용', date: '2024-05-30' },
        { id: 2, name: '김태리', title: '문의글2', content: '문의내용', date: '2024-05-30' },
        { id: 3, name: '김태리', title: '문의글3', content: '문의내용', date: '2024-05-30' },
        { id: 4, name: '김태리', title: '문의글4', content: '문의내용', date: '2024-05-30' },
        { id: 5, name: '김태리', title: '문의글5', content: '문의내용', date: '2024-05-30' },
        { id: 6, name: '김태리', title: '문의글6', content: '문의내용', date: '2024-05-30' },
        { id: 7, name: '김태리', title: '문의글7', content: '문의내용', date: '2024-05-30' },
        { id: 8, name: '김태리', title: '문의글8', content: '문의내용', date: '2024-05-30' },
        { id: 9, name: '김태리', title: '문의글9', content: '문의내용', date: '2024-05-30' },
        { id: 10, name: '김태리', title: '문의글10', content: '문의내용', date: '2024-05-30' },
        { id: 11, name: '김태리', title: '문의글11', content: '문의내용', date: '2024-05-30' },
        { id: 12, name: '김태리', title: '문의글12', content: '문의내용', date: '2024-05-30' },
        { id: 13, name: '김태리', title: '문의글13', content: '문의내용', date: '2024-05-30' },
        { id: 14, name: '김태리', title: '문의글14', content: '문의내용', date: '2024-05-30' },
        { id: 15, name: '김태리', title: '문의글15', content: '문의내용', date: '2024-05-30' },
        { id: 16, name: '김태리', title: '문의글16', content: '문의내용', date: '2024-05-30' },
    ],
    TE = { customers: Em, updateCust: {} },
    jE = Em.length + 1,
    Cm = Cr({
        name: 'customer',
        initialState: TE,
        reducers: {
            custDel: (e, t) => {
                e.customers = e.customers.filter((n) => n.id !== t.payload);
            },
            custLoad: (e, t) => {
                e.updateCust = t.payload;
            },
            custUpdate: (e, t) => {
                const { name: n, title: r, content: i } = t.payload;
                e.customers = e.customers.map((o) => (o.id === t.payload.id ? { ...o, name: n, title: r, content: i } : o));
            },
            custSave: (e, t) => {
                const { title: n, name: r, content: i, date: o } = t.payload;
                e.customers = [...e.customers, { id: jE, title: n, name: r, content: i, date: o }];
            },
        },
    }),
    { custDel: PE, custLoad: _E, custUpdate: bE, custSave: IE } = Cm.actions,
    NE = Cm.reducer,
    LE = () => {
        const { customers: e } = ke((h) => h.customer),
            { customerID: t } = Sr(),
            n = e.find((h) => h.id === Number(t)),
            { id: r, name: i, title: o, content: s, date: a } = n,
            l = pt(),
            u = Ge(),
            d = () => {
                u(PE(r)), l('/customer');
            },
            f = () => {
                l('/customer/customeredit'), u(_E(n));
            };
        return c.jsx(aE, {
            children: c.jsxs('div', {
                className: 'inner',
                children: [
                    c.jsx('h2', { children: ' 문의 글 ' }),
                    c.jsxs('div', {
                        className: 'con',
                        children: [
                            c.jsxs('h3', { children: [r, '번 ', o] }),
                            c.jsxs('p', { className: 'name', children: [' ', i, ' '] }),
                            c.jsxs('p', { className: 'txt', children: [' ', s, ' '] }),
                            c.jsxs('p', { className: 'date', children: [' ', a, ' '] }),
                        ],
                    }),
                    c.jsxs('p', {
                        children: [
                            c.jsx('button', { onClick: () => l('/customer'), children: '목록으로' }),
                            c.jsx('button', { onClick: f, children: '수정하기' }),
                            c.jsx('button', { onClick: d, children: '삭제하기' }),
                        ],
                    }),
                ],
            }),
        });
    },
    OE = () => {
        const e = Ge(),
            t = new Date(),
            n = t.getFullYear(),
            r = String(t.getMonth() + 1).padStart(2, '0'),
            i = String(t.getDate()).padStart(2, '0'),
            o = `${n}-${r}-${i}`,
            [s, a] = T.useState({ title: '', name: '', content: '', date: o }),
            { title: l, name: u, content: d, date: f } = s,
            h = pt(),
            g = (S) => {
                const { name: p, value: m } = S.target;
                a({ ...s, [p]: m });
            },
            y = (S) => {
                S.preventDefault(), h('/customer');
            },
            x = (S) => {
                S.preventDefault(), e(IE(s)), h('/customer');
            };
        return c.jsx(wm, {
            children: c.jsxs('div', {
                className: 'inner',
                children: [
                    c.jsx('h2', { children: ' 고객문의 ' }),
                    c.jsxs('form', {
                        className: 'customer-add',
                        onSubmit: x,
                        children: [
                            c.jsx('p', {
                                children: c.jsx('input', { type: 'text', placeholder: '제목', name: 'title', value: l, onChange: g }),
                            }),
                            c.jsx('p', {
                                children: c.jsx('input', { type: 'text', placeholder: '작성자', name: 'name', value: u, onChange: g }),
                            }),
                            c.jsx('p', {
                                children: c.jsx('textarea', {
                                    cols: '100',
                                    rows: '10',
                                    placeholder: '문의하기',
                                    name: 'content',
                                    value: d,
                                    onChange: g,
                                }),
                            }),
                            c.jsx('p', { children: f }),
                            c.jsxs('p', {
                                children: [
                                    c.jsx('button', { onClick: y, children: '목록으로' }),
                                    c.jsx('button', { type: 'submit', children: '저장하기' }),
                                    c.jsx('button', { onClick: y, children: '취소하기' }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    ME = () => {
        const { updateCust: e } = ke((y) => y.customer),
            [t, n] = T.useState(e),
            { id: r, name: i, title: o, content: s, date: a } = t,
            l = pt(),
            u = Ge(),
            d = (y) => {
                const { name: x, value: S } = y.target;
                n({ ...t, [x]: S });
            },
            f = (y) => {
                y.preventDefault(), l('/customer');
            },
            h = (y) => {
                y.preventDefault(), l(`/customer/${r}`);
            },
            g = (y) => {
                y.preventDefault(), u(bE(t)), l(`/customer/${r}`);
            };
        return c.jsx(wm, {
            children: c.jsxs('div', {
                className: 'inner',
                children: [
                    c.jsx('h2', { children: ' 고객문의수정 ' }),
                    c.jsxs('form', {
                        className: 'customer-add',
                        onSubmit: g,
                        children: [
                            c.jsx('p', {
                                children: c.jsx('input', { type: 'text', placeholder: '제목', name: 'title', value: o, onChange: d }),
                            }),
                            c.jsx('p', {
                                children: c.jsx('input', { type: 'text', placeholder: '작성자', name: 'name', value: i, onChange: d }),
                            }),
                            c.jsx('p', {
                                children: c.jsx('textarea', {
                                    cols: '100',
                                    rows: '10',
                                    placeholder: '문의하기',
                                    name: 'content',
                                    value: s,
                                    onChange: d,
                                }),
                            }),
                            c.jsxs('p', {
                                children: [
                                    c.jsx('button', { onClick: f, children: '목록으로' }),
                                    c.jsx('button', { type: 'submit', children: '수정완료' }),
                                    c.jsx('button', { onClick: h, children: '취소하기' }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    zE = () => c.jsxs('div', { children: [c.jsx('h3', { children: 'Edit' }), c.jsx(_i, {})] }),
    RE = () => c.jsxs('div', { children: [c.jsx('h3', { children: 'Card' }), c.jsx(_i, {})] }),
    DE = () => c.jsxs('div', { children: [c.jsx('h3', { children: 'Address' }), c.jsx(_i, {})] }),
    AE = () => c.jsxs('div', { children: [c.jsx('h3', { children: 'AccountDel' }), c.jsx(_i, {})] }),
    $E = () =>
        c.jsx(c.Fragment, {
            children: c.jsxs(Gv, {
                children: [
                    c.jsx(qy, {}),
                    c.jsxs(Fv, {
                        children: [
                            c.jsxs(B, {
                                path: '/',
                                element: c.jsx(b1, {}),
                                children: [
                                    c.jsx(B, { index: !0, element: c.jsx(D1, {}) }),
                                    c.jsx(B, { path: '/about', element: c.jsx(SS, {}) }),
                                    c.jsx(B, { path: '/models', element: c.jsx(CS, {}) }),
                                    c.jsxs(B, {
                                        path: '/product',
                                        children: [
                                            c.jsx(B, { index: !0, element: c.jsx(zS, {}) }),
                                            c.jsx(B, { path: ':category', element: c.jsx(SE, {}) }),
                                            c.jsx(B, { path: ':category/productdetail', element: c.jsx(CE, {}) }),
                                        ],
                                    }),
                                    c.jsxs(B, {
                                        path: '/notice',
                                        children: [
                                            c.jsx(B, { index: !0, element: c.jsx(sE, {}) }),
                                            c.jsx(B, { path: ':noticeID', element: c.jsx(kE, {}) }),
                                        ],
                                    }),
                                    c.jsxs(B, {
                                        path: '/customer',
                                        children: [
                                            c.jsx(B, { index: !0, element: c.jsx(fE, {}) }),
                                            c.jsx(B, { path: 'customeradd', element: c.jsx(OE, {}) }),
                                            c.jsx(B, { path: 'customeredit', element: c.jsx(ME, {}) }),
                                            c.jsx(B, { path: ':customerID', element: c.jsx(LE, {}) }),
                                        ],
                                    }),
                                    c.jsxs(B, {
                                        path: '/mypage',
                                        children: [
                                            c.jsx(B, { index: !0, element: c.jsx(mE, {}) }),
                                            c.jsx(B, { path: 'edit', element: c.jsx(zE, {}) }),
                                            c.jsx(B, { path: 'card', element: c.jsx(RE, {}) }),
                                            c.jsx(B, { path: 'address', element: c.jsx(DE, {}) }),
                                            c.jsx(B, { path: 'accountDel', element: c.jsx(AE, {}) }),
                                        ],
                                    }),
                                    c.jsx(B, { path: '/cart', element: c.jsx(qS, {}) }),
                                    c.jsx(B, { path: '/financials', element: c.jsx(gE, {}) }),
                                    c.jsx(B, { path: '/qfc', element: c.jsx(vE, {}) }),
                                    c.jsx(B, { path: '/cme', element: c.jsx(yE, {}) }),
                                    c.jsx(B, { path: '/contactUs', element: c.jsx(xE, {}) }),
                                    c.jsx(B, { path: '/careers', element: c.jsx(wE, {}) }),
                                    c.jsx(B, { path: '/join', element: c.jsx(Bx, {}) }),
                                    c.jsx(B, { path: '/logout', element: c.jsx(Ux, {}) }),
                                    c.jsx(B, { path: '/login', element: c.jsx(Wx, {}) }),
                                ],
                            }),
                            c.jsx(B, { path: '*', element: c.jsx(N1, {}) }),
                        ],
                    }),
                ],
            }),
        }),
    FE = [
        {
            id: 1,
            title: '게시글 제목1',
            content: `게시글 내용1
게시글 내용1
게시글 내용1
게시글 내용1
`,
            date: '2024-05-30',
        },
        { id: 2, title: '게시글 제목1', content: '게시글 내용1', date: '2024-05-30' },
        { id: 3, title: '게시글 제목1', content: '게시글 내용1', date: '2024-05-30' },
        { id: 4, title: '게시글 제목1', content: '게시글 내용1', date: '2024-05-30' },
        { id: 5, title: '게시글 제목1', content: '게시글 내용1', date: '2024-05-30' },
        { id: 6, title: '게시글 제목1', content: '게시글 내용1', date: '2024-05-30' },
        { id: 7, title: '게시글 제목1', content: '게시글 내용1', date: '2024-05-30' },
        { id: 8, title: '게시글 제목1', content: '게시글 내용1', date: '2024-05-30' },
        { id: 9, title: '게시글 제목1', content: '게시글 내용1', date: '2024-05-30' },
        { id: 10, title: '게시글 제목1', content: '게시글 내용1', date: '2024-05-30' },
        {
            id: 11,
            title: '게시글 제목1',
            content: `게시글 내용1
게시글 내용1
게시글 내용1
게시글 내용1
`,
            date: '2024-05-30',
        },
        { id: 12, title: '게시글 제목1', content: '게시글 내용1', date: '2024-05-30' },
        { id: 13, title: '게시글 제목1', content: '게시글 내용1', date: '2024-05-30' },
        { id: 14, title: '게시글 제목1', content: '게시글 내용1', date: '2024-05-30' },
        { id: 15, title: '게시글 제목1', content: '게시글 내용1', date: '2024-05-30' },
        { id: 16, title: '게시글 제목1', content: '게시글 내용1', date: '2024-05-30' },
        { id: 17, title: '게시글 제목1', content: '게시글 내용1', date: '2024-05-30' },
        { id: 18, title: '게시글 제목1', content: '게시글 내용1', date: '2024-05-30' },
        { id: 19, title: '게시글 제목1', content: '게시글 내용1', date: '2024-05-30' },
        { id: 20, title: '게시글 제목1', content: '게시글 내용1', date: '2024-05-30' },
        {
            id: 21,
            title: '게시글 제목1',
            content: `게시글 내용1
게시글 내용1
게시글 내용1
게시글 내용1
`,
            date: '2024-05-30',
        },
        { id: 22, title: '게시글 제목1', content: '게시글 내용1', date: '2024-05-30' },
        { id: 23, title: '게시글 제목1', content: '게시글 내용1', date: '2024-05-30' },
        { id: 24, title: '게시글 제목1', content: '게시글 내용1', date: '2024-05-30' },
        { id: 25, title: '게시글 제목1', content: '게시글 내용1', date: '2024-05-30' },
        { id: 26, title: '게시글 제목1', content: '게시글 내용1', date: '2024-05-30' },
    ],
    BE = { notices: FE },
    WE = Cr({ name: 'notice', initialState: BE, reducers: {} }),
    UE = WE.reducer,
    VE = Cx({ reducer: { notice: UE, product: LS, page: nE, customer: NE, cart: GS, auth: Fx } });
gl.createRoot(document.getElementById('root')).render(c.jsx(V.StrictMode, { children: c.jsx(E1, { store: VE, children: c.jsx($E, {}) }) }));
