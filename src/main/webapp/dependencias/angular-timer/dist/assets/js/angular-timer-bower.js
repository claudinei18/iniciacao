/*
 AngularJS v1.3.14
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (P, X, u) {
    'use strict';

    function M(b) {
        return function () {
            var a = arguments[0], c;
            c = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.3.14/" + (b ? b + "/" : "") + a;
            for (a = 1; a < arguments.length; a++) {
                c = c + (1 == a ? "?" : "&") + "p" + (a - 1) + "=";
                var d = encodeURIComponent, e;
                e = arguments[a];
                e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;
                c += d(e)
            }
            return Error(c)
        }
    }

    function Ta(b) {
        if (null == b || Ua(b)) return !1;
        var a = b.length;
        return b.nodeType ===
        na && a ? !0 : x(b) || E(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b
    }

    function s(b, a, c) {
        var d, e;
        if (b) if (G(b)) for (d in b) "prototype" == d || "length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d) || a.call(c, b[d], d, b); else if (E(b) || Ta(b)) {
            var f = "object" !== typeof b;
            d = 0;
            for (e = b.length; d < e; d++) (f || d in b) && a.call(c, b[d], d, b)
        } else if (b.forEach && b.forEach !== s) b.forEach(a, c, b); else for (d in b) b.hasOwnProperty(d) && a.call(c, b[d], d, b);
        return b
    }

    function Ed(b, a, c) {
        for (var d = Object.keys(b).sort(), e = 0; e < d.length; e++) a.call(c,
            b[d[e]], d[e]);
        return d
    }

    function lc(b) {
        return function (a, c) {
            b(c, a)
        }
    }

    function Fd() {
        return ++ob
    }

    function mc(b, a) {
        a ? b.$$hashKey = a : delete b.$$hashKey
    }

    function w(b) {
        for (var a = b.$$hashKey, c = 1, d = arguments.length; c < d; c++) {
            var e = arguments[c];
            if (e) for (var f = Object.keys(e), g = 0, h = f.length; g < h; g++) {
                var l = f[g];
                b[l] = e[l]
            }
        }
        mc(b, a);
        return b
    }

    function $(b) {
        return parseInt(b, 10)
    }

    function Pb(b, a) {
        return w(Object.create(b), a)
    }

    function B() {
    }

    function oa(b) {
        return b
    }

    function da(b) {
        return function () {
            return b
        }
    }

    function z(b) {
        return "undefined" ===
            typeof b
    }

    function y(b) {
        return "undefined" !== typeof b
    }

    function J(b) {
        return null !== b && "object" === typeof b
    }

    function x(b) {
        return "string" === typeof b
    }

    function V(b) {
        return "number" === typeof b
    }

    function pa(b) {
        return "[object Date]" === Da.call(b)
    }

    function G(b) {
        return "function" === typeof b
    }

    function pb(b) {
        return "[object RegExp]" === Da.call(b)
    }

    function Ua(b) {
        return b && b.window === b
    }

    function Va(b) {
        return b && b.$evalAsync && b.$watch
    }

    function Wa(b) {
        return "boolean" === typeof b
    }

    function nc(b) {
        return !(!b || !(b.nodeName || b.prop &&
            b.attr && b.find))
    }

    function Gd(b) {
        var a = {};
        b = b.split(",");
        var c;
        for (c = 0; c < b.length; c++) a[b[c]] = !0;
        return a
    }

    function ta(b) {
        return R(b.nodeName || b[0] && b[0].nodeName)
    }

    function Xa(b, a) {
        var c = b.indexOf(a);
        0 <= c && b.splice(c, 1);
        return a
    }

    function Ea(b, a, c, d) {
        if (Ua(b) || Va(b)) throw Ka("cpws");
        if (a) {
            if (b === a) throw Ka("cpi");
            c = c || [];
            d = d || [];
            if (J(b)) {
                var e = c.indexOf(b);
                if (-1 !== e) return d[e];
                c.push(b);
                d.push(a)
            }
            if (E(b)) for (var f = a.length = 0; f < b.length; f++) e = Ea(b[f], null, c, d), J(b[f]) && (c.push(b[f]), d.push(e)), a.push(e);
            else {
                var g = a.$$hashKey;
                E(a) ? a.length = 0 : s(a, function (b, c) {
                    delete a[c]
                });
                for (f in b) b.hasOwnProperty(f) && (e = Ea(b[f], null, c, d), J(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e);
                mc(a, g)
            }
        } else if (a = b) E(b) ? a = Ea(b, [], c, d) : pa(b) ? a = new Date(b.getTime()) : pb(b) ? (a = new RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), a.lastIndex = b.lastIndex) : J(b) && (e = Object.create(Object.getPrototypeOf(b)), a = Ea(b, e, c, d));
        return a
    }

    function qa(b, a) {
        if (E(b)) {
            a = a || [];
            for (var c = 0, d = b.length; c < d; c++) a[c] = b[c]
        } else if (J(b)) for (c in a = a || {},
            b) if ("$" !== c.charAt(0) || "$" !== c.charAt(1)) a[c] = b[c];
        return a || b
    }

    function ea(b, a) {
        if (b === a) return !0;
        if (null === b || null === a) return !1;
        if (b !== b && a !== a) return !0;
        var c = typeof b, d;
        if (c == typeof a && "object" == c) if (E(b)) {
            if (!E(a)) return !1;
            if ((c = b.length) == a.length) {
                for (d = 0; d < c; d++) if (!ea(b[d], a[d])) return !1;
                return !0
            }
        } else {
            if (pa(b)) return pa(a) ? ea(b.getTime(), a.getTime()) : !1;
            if (pb(b) && pb(a)) return b.toString() == a.toString();
            if (Va(b) || Va(a) || Ua(b) || Ua(a) || E(a)) return !1;
            c = {};
            for (d in b) if ("$" !== d.charAt(0) && !G(b[d])) {
                if (!ea(b[d],
                        a[d])) return !1;
                c[d] = !0
            }
            for (d in a) if (!c.hasOwnProperty(d) && "$" !== d.charAt(0) && a[d] !== u && !G(a[d])) return !1;
            return !0
        }
        return !1
    }

    function Ya(b, a, c) {
        return b.concat(Za.call(a, c))
    }

    function oc(b, a) {
        var c = 2 < arguments.length ? Za.call(arguments, 2) : [];
        return !G(a) || a instanceof RegExp ? a : c.length ? function () {
            return arguments.length ? a.apply(b, Ya(c, arguments, 0)) : a.apply(b, c)
        } : function () {
            return arguments.length ? a.apply(b, arguments) : a.call(b)
        }
    }

    function Hd(b, a) {
        var c = a;
        "string" === typeof b && "$" === b.charAt(0) && "$" === b.charAt(1) ?
            c = u : Ua(a) ? c = "$WINDOW" : a && X === a ? c = "$DOCUMENT" : Va(a) && (c = "$SCOPE");
        return c
    }

    function $a(b, a) {
        if ("undefined" === typeof b) return u;
        V(a) || (a = a ? 2 : null);
        return JSON.stringify(b, Hd, a)
    }

    function pc(b) {
        return x(b) ? JSON.parse(b) : b
    }

    function ua(b) {
        b = C(b).clone();
        try {
            b.empty()
        } catch (a) {
        }
        var c = C("<div>").append(b).html();
        try {
            return b[0].nodeType === qb ? R(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
                return "<" + R(b)
            })
        } catch (d) {
            return R(c)
        }
    }

    function qc(b) {
        try {
            return decodeURIComponent(b)
        } catch (a) {
        }
    }

    function rc(b) {
        var a =
            {}, c, d;
        s((b || "").split("&"), function (b) {
            b && (c = b.replace(/\+/g, "%20").split("="), d = qc(c[0]), y(d) && (b = y(c[1]) ? qc(c[1]) : !0, sc.call(a, d) ? E(a[d]) ? a[d].push(b) : a[d] = [a[d], b] : a[d] = b))
        });
        return a
    }

    function Qb(b) {
        var a = [];
        s(b, function (b, d) {
            E(b) ? s(b, function (b) {
                a.push(Fa(d, !0) + (!0 === b ? "" : "=" + Fa(b, !0)))
            }) : a.push(Fa(d, !0) + (!0 === b ? "" : "=" + Fa(b, !0)))
        });
        return a.length ? a.join("&") : ""
    }

    function rb(b) {
        return Fa(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function Fa(b, a) {
        return encodeURIComponent(b).replace(/%40/gi,
            "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, a ? "%20" : "+")
    }

    function Id(b, a) {
        var c, d, e = sb.length;
        b = C(b);
        for (d = 0; d < e; ++d) if (c = sb[d] + a, x(c = b.attr(c))) return c;
        return null
    }

    function Jd(b, a) {
        var c, d, e = {};
        s(sb, function (a) {
            a += "app";
            !c && b.hasAttribute && b.hasAttribute(a) && (c = b, d = b.getAttribute(a))
        });
        s(sb, function (a) {
            a += "app";
            var e;
            !c && (e = b.querySelector("[" + a.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(a))
        });
        c && (e.strictDi = null !== Id(c, "strict-di"),
            a(c, d ? [d] : [], e))
    }

    function tc(b, a, c) {
        J(c) || (c = {});
        c = w({strictDi: !1}, c);
        var d = function () {
            b = C(b);
            if (b.injector()) {
                var d = b[0] === X ? "document" : ua(b);
                throw Ka("btstrpd", d.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            a = a || [];
            a.unshift(["$provide", function (a) {
                a.value("$rootElement", b)
            }]);
            c.debugInfoEnabled && a.push(["$compileProvider", function (a) {
                a.debugInfoEnabled(!0)
            }]);
            a.unshift("ng");
            d = ab(a, c.strictDi);
            d.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
                a.$apply(function () {
                    b.data("$injector",
                        d);
                    c(b)(a)
                })
            }]);
            return d
        }, e = /^NG_ENABLE_DEBUG_INFO!/, f = /^NG_DEFER_BOOTSTRAP!/;
        P && e.test(P.name) && (c.debugInfoEnabled = !0, P.name = P.name.replace(e, ""));
        if (P && !f.test(P.name)) return d();
        P.name = P.name.replace(f, "");
        aa.resumeBootstrap = function (b) {
            s(b, function (b) {
                a.push(b)
            });
            return d()
        };
        G(aa.resumeDeferredBootstrap) && aa.resumeDeferredBootstrap()
    }

    function Kd() {
        P.name = "NG_ENABLE_DEBUG_INFO!" + P.name;
        P.location.reload()
    }

    function Ld(b) {
        b = aa.element(b).injector();
        if (!b) throw Ka("test");
        return b.get("$$testability")
    }

    function uc(b, a) {
        a = a || "_";
        return b.replace(Md, function (b, d) {
            return (d ? a : "") + b.toLowerCase()
        })
    }

    function Nd() {
        var b;
        vc || ((ra = P.jQuery) && ra.fn.on ? (C = ra, w(ra.fn, {
            scope: La.scope,
            isolateScope: La.isolateScope,
            controller: La.controller,
            injector: La.injector,
            inheritedData: La.inheritedData
        }), b = ra.cleanData, ra.cleanData = function (a) {
            var c;
            if (Rb) Rb = !1; else for (var d = 0, e; null != (e = a[d]); d++) (c = ra._data(e, "events")) && c.$destroy && ra(e).triggerHandler("$destroy");
            b(a)
        }) : C = Q, aa.element = C, vc = !0)
    }

    function Sb(b, a, c) {
        if (!b) throw Ka("areq",
            a || "?", c || "required");
        return b
    }

    function tb(b, a, c) {
        c && E(b) && (b = b[b.length - 1]);
        Sb(G(b), a, "not a function, got " + (b && "object" === typeof b ? b.constructor.name || "Object" : typeof b));
        return b
    }

    function Ma(b, a) {
        if ("hasOwnProperty" === b) throw Ka("badname", a);
    }

    function wc(b, a, c) {
        if (!a) return b;
        a = a.split(".");
        for (var d, e = b, f = a.length, g = 0; g < f; g++) d = a[g], b && (b = (e = b)[d]);
        return !c && G(b) ? oc(e, b) : b
    }

    function ub(b) {
        var a = b[0];
        b = b[b.length - 1];
        var c = [a];
        do {
            a = a.nextSibling;
            if (!a) break;
            c.push(a)
        } while (a !== b);
        return C(c)
    }

    function fa() {
        return Object.create(null)
    }

    function Od(b) {
        function a(a, b, c) {
            return a[b] || (a[b] = c())
        }

        var c = M("$injector"), d = M("ng");
        b = a(b, "angular", Object);
        b.$$minErr = b.$$minErr || M;
        return a(b, "module", function () {
            var b = {};
            return function (f, g, h) {
                if ("hasOwnProperty" === f) throw d("badname", "module");
                g && b.hasOwnProperty(f) && (b[f] = null);
                return a(b, f, function () {
                    function a(c, d, e, f) {
                        f || (f = b);
                        return function () {
                            f[e || "push"]([c, d, arguments]);
                            return t
                        }
                    }

                    if (!g) throw c("nomod", f);
                    var b = [], d = [], e = [], q = a("$injector", "invoke", "push", d), t = {
                        _invokeQueue: b,
                        _configBlocks: d,
                        _runBlocks: e,
                        requires: g,
                        name: f,
                        provider: a("$provide", "provider"),
                        factory: a("$provide", "factory"),
                        service: a("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        animation: a("$animateProvider", "register"),
                        filter: a("$filterProvider", "register"),
                        controller: a("$controllerProvider", "register"),
                        directive: a("$compileProvider", "directive"),
                        config: q,
                        run: function (a) {
                            e.push(a);
                            return this
                        }
                    };
                    h && q(h);
                    return t
                })
            }
        })
    }

    function Pd(b) {
        w(b, {
            bootstrap: tc,
            copy: Ea,
            extend: w,
            equals: ea,
            element: C,
            forEach: s,
            injector: ab,
            noop: B,
            bind: oc,
            toJson: $a,
            fromJson: pc,
            identity: oa,
            isUndefined: z,
            isDefined: y,
            isString: x,
            isFunction: G,
            isObject: J,
            isNumber: V,
            isElement: nc,
            isArray: E,
            version: Qd,
            isDate: pa,
            lowercase: R,
            uppercase: vb,
            callbacks: {counter: 0},
            getTestability: Ld,
            $$minErr: M,
            $$csp: bb,
            reloadWithDebugInfo: Kd
        });
        cb = Od(P);
        try {
            cb("ngLocale")
        } catch (a) {
            cb("ngLocale", []).provider("$locale", Rd)
        }
        cb("ng", ["ngLocale"], ["$provide", function (a) {
            a.provider({$$sanitizeUri: Sd});
            a.provider("$compile", xc).directive({
                a: Td,
                input: yc,
                textarea: yc,
                form: Ud,
                script: Vd,
                select: Wd,
                style: Xd,
                option: Yd,
                ngBind: Zd,
                ngBindHtml: $d,
                ngBindTemplate: ae,
                ngClass: be,
                ngClassEven: ce,
                ngClassOdd: de,
                ngCloak: ee,
                ngController: fe,
                ngForm: ge,
                ngHide: he,
                ngIf: ie,
                ngInclude: je,
                ngInit: ke,
                ngNonBindable: le,
                ngPluralize: me,
                ngRepeat: ne,
                ngShow: oe,
                ngStyle: pe,
                ngSwitch: qe,
                ngSwitchWhen: re,
                ngSwitchDefault: se,
                ngOptions: te,
                ngTransclude: ue,
                ngModel: ve,
                ngList: we,
                ngChange: xe,
                pattern: zc,
                ngPattern: zc,
                required: Ac,
                ngRequired: Ac,
                minlength: Bc,
                ngMinlength: Bc,
                maxlength: Cc,
                ngMaxlength: Cc,
                ngValue: ye,
                ngModelOptions: ze
            }).directive({ngInclude: Ae}).directive(wb).directive(Dc);
            a.provider({
                $anchorScroll: Be,
                $animate: Ce,
                $browser: De,
                $cacheFactory: Ee,
                $controller: Fe,
                $document: Ge,
                $exceptionHandler: He,
                $filter: Ec,
                $interpolate: Ie,
                $interval: Je,
                $http: Ke,
                $httpBackend: Le,
                $location: Me,
                $log: Ne,
                $parse: Oe,
                $rootScope: Pe,
                $q: Qe,
                $$q: Re,
                $sce: Se,
                $sceDelegate: Te,
                $sniffer: Ue,
                $templateCache: Ve,
                $templateRequest: We,
                $$testability: Xe,
                $timeout: Ye,
                $window: Ze,
                $$rAF: $e,
                $$asyncCallback: af,
                $$jqLite: bf
            })
        }])
    }

    function db(b) {
        return b.replace(cf,
            function (a, b, d, e) {
                return e ? d.toUpperCase() : d
            }).replace(df, "Moz$1")
    }

    function Fc(b) {
        b = b.nodeType;
        return b === na || !b || 9 === b
    }

    function Gc(b, a) {
        var c, d, e = a.createDocumentFragment(), f = [];
        if (Tb.test(b)) {
            c = c || e.appendChild(a.createElement("div"));
            d = (ef.exec(b) || ["", ""])[1].toLowerCase();
            d = ga[d] || ga._default;
            c.innerHTML = d[1] + b.replace(ff, "<$1></$2>") + d[2];
            for (d = d[0]; d--;) c = c.lastChild;
            f = Ya(f, c.childNodes);
            c = e.firstChild;
            c.textContent = ""
        } else f.push(a.createTextNode(b));
        e.textContent = "";
        e.innerHTML = "";
        s(f, function (a) {
            e.appendChild(a)
        });
        return e
    }

    function Q(b) {
        if (b instanceof Q) return b;
        var a;
        x(b) && (b = T(b), a = !0);
        if (!(this instanceof Q)) {
            if (a && "<" != b.charAt(0)) throw Ub("nosel");
            return new Q(b)
        }
        if (a) {
            a = X;
            var c;
            b = (c = gf.exec(b)) ? [a.createElement(c[1])] : (c = Gc(b, a)) ? c.childNodes : []
        }
        Hc(this, b)
    }

    function Vb(b) {
        return b.cloneNode(!0)
    }

    function xb(b, a) {
        a || yb(b);
        if (b.querySelectorAll) for (var c = b.querySelectorAll("*"), d = 0, e = c.length; d < e; d++) yb(c[d])
    }

    function Ic(b, a, c, d) {
        if (y(d)) throw Ub("offargs");
        var e = (d = zb(b)) && d.events, f = d && d.handle;
        if (f) if (a) s(a.split(" "),
            function (a) {
                if (y(c)) {
                    var d = e[a];
                    Xa(d || [], c);
                    if (d && 0 < d.length) return
                }
                b.removeEventListener(a, f, !1);
                delete e[a]
            }); else for (a in e) "$destroy" !== a && b.removeEventListener(a, f, !1), delete e[a]
    }

    function yb(b, a) {
        var c = b.ng339, d = c && Ab[c];
        d && (a ? delete d.data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), Ic(b)), delete Ab[c], b.ng339 = u))
    }

    function zb(b, a) {
        var c = b.ng339, c = c && Ab[c];
        a && !c && (b.ng339 = c = ++hf, c = Ab[c] = {events: {}, data: {}, handle: u});
        return c
    }

    function Wb(b, a, c) {
        if (Fc(b)) {
            var d = y(c), e = !d && a && !J(a),
                f = !a;
            b = (b = zb(b, !e)) && b.data;
            if (d) b[a] = c; else {
                if (f) return b;
                if (e) return b && b[a];
                w(b, a)
            }
        }
    }

    function Bb(b, a) {
        return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1
    }

    function Cb(b, a) {
        a && b.setAttribute && s(a.split(" "), function (a) {
            b.setAttribute("class", T((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + T(a) + " ", " ")))
        })
    }

    function Db(b, a) {
        if (a && b.setAttribute) {
            var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            s(a.split(" "), function (a) {
                a = T(a);
                -1 === c.indexOf(" " + a + " ") && (c += a + " ")
            });
            b.setAttribute("class", T(c))
        }
    }

    function Hc(b, a) {
        if (a) if (a.nodeType) b[b.length++] = a; else {
            var c = a.length;
            if ("number" === typeof c && a.window !== a) {
                if (c) for (var d = 0; d < c; d++) b[b.length++] = a[d]
            } else b[b.length++] = a
        }
    }

    function Jc(b, a) {
        return Eb(b, "$" + (a || "ngController") + "Controller")
    }

    function Eb(b, a, c) {
        9 == b.nodeType && (b = b.documentElement);
        for (a = E(a) ? a : [a]; b;) {
            for (var d = 0, e = a.length; d < e; d++) if ((c = C.data(b, a[d])) !== u) return c;
            b = b.parentNode ||
                11 === b.nodeType && b.host
        }
    }

    function Kc(b) {
        for (xb(b, !0); b.firstChild;) b.removeChild(b.firstChild)
    }

    function Lc(b, a) {
        a || xb(b);
        var c = b.parentNode;
        c && c.removeChild(b)
    }

    function jf(b, a) {
        a = a || P;
        if ("complete" === a.document.readyState) a.setTimeout(b); else C(a).on("load", b)
    }

    function Mc(b, a) {
        var c = Fb[a.toLowerCase()];
        return c && Nc[ta(b)] && c
    }

    function kf(b, a) {
        var c = b.nodeName;
        return ("INPUT" === c || "TEXTAREA" === c) && Oc[a]
    }

    function lf(b, a) {
        var c = function (c, e) {
            c.isDefaultPrevented = function () {
                return c.defaultPrevented
            };
            var f =
                a[e || c.type], g = f ? f.length : 0;
            if (g) {
                if (z(c.immediatePropagationStopped)) {
                    var h = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function () {
                        c.immediatePropagationStopped = !0;
                        c.stopPropagation && c.stopPropagation();
                        h && h.call(c)
                    }
                }
                c.isImmediatePropagationStopped = function () {
                    return !0 === c.immediatePropagationStopped
                };
                1 < g && (f = qa(f));
                for (var l = 0; l < g; l++) c.isImmediatePropagationStopped() || f[l].call(b, c)
            }
        };
        c.elem = b;
        return c
    }

    function bf() {
        this.$get = function () {
            return w(Q, {
                hasClass: function (b, a) {
                    b.attr && (b = b[0]);
                    return Bb(b, a)
                }, addClass: function (b, a) {
                    b.attr && (b = b[0]);
                    return Db(b, a)
                }, removeClass: function (b, a) {
                    b.attr && (b = b[0]);
                    return Cb(b, a)
                }
            })
        }
    }

    function Na(b, a) {
        var c = b && b.$$hashKey;
        if (c) return "function" === typeof c && (c = b.$$hashKey()), c;
        c = typeof b;
        return c = "function" == c || "object" == c && null !== b ? b.$$hashKey = c + ":" + (a || Fd)() : c + ":" + b
    }

    function eb(b, a) {
        if (a) {
            var c = 0;
            this.nextUid = function () {
                return ++c
            }
        }
        s(b, this.put, this)
    }

    function mf(b) {
        return (b = b.toString().replace(Pc, "").match(Qc)) ? "function(" + (b[1] || "").replace(/[\s\r\n]+/,
            " ") + ")" : "fn"
    }

    function ab(b, a) {
        function c(a) {
            return function (b, c) {
                if (J(b)) s(b, lc(a)); else return a(b, c)
            }
        }

        function d(a, b) {
            Ma(a, "service");
            if (G(b) || E(b)) b = q.instantiate(b);
            if (!b.$get) throw Ga("pget", a);
            return p[a + "Provider"] = b
        }

        function e(a, b) {
            return function () {
                var c = r.invoke(b, this);
                if (z(c)) throw Ga("undef", a);
                return c
            }
        }

        function f(a, b, c) {
            return d(a, {$get: !1 !== c ? e(a, b) : b})
        }

        function g(a) {
            var b = [], c;
            s(a, function (a) {
                function d(a) {
                    var b, c;
                    b = 0;
                    for (c = a.length; b < c; b++) {
                        var e = a[b], f = q.get(e[0]);
                        f[e[1]].apply(f,
                            e[2])
                    }
                }

                if (!m.get(a)) {
                    m.put(a, !0);
                    try {
                        x(a) ? (c = cb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : G(a) ? b.push(q.invoke(a)) : E(a) ? b.push(q.invoke(a)) : tb(a, "module")
                    } catch (e) {
                        throw E(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ga("modulerr", a, e.stack || e.message || e);
                    }
                }
            });
            return b
        }

        function h(b, c) {
            function d(a, e) {
                if (b.hasOwnProperty(a)) {
                    if (b[a] === l) throw Ga("cdep", a + " <- " + k.join(" <- "));
                    return b[a]
                }
                try {
                    return k.unshift(a),
                        b[a] = l, b[a] = c(a, e)
                } catch (f) {
                    throw b[a] === l && delete b[a], f;
                } finally {
                    k.shift()
                }
            }

            function e(b, c, f, g) {
                "string" === typeof f && (g = f, f = null);
                var h = [], k = ab.$$annotate(b, a, g), l, q, p;
                q = 0;
                for (l = k.length; q < l; q++) {
                    p = k[q];
                    if ("string" !== typeof p) throw Ga("itkn", p);
                    h.push(f && f.hasOwnProperty(p) ? f[p] : d(p, g))
                }
                E(b) && (b = b[l]);
                return b.apply(c, h)
            }

            return {
                invoke: e, instantiate: function (a, b, c) {
                    var d = Object.create((E(a) ? a[a.length - 1] : a).prototype || null);
                    a = e(a, d, b, c);
                    return J(a) || G(a) ? a : d
                }, get: d, annotate: ab.$$annotate, has: function (a) {
                    return p.hasOwnProperty(a +
                        "Provider") || b.hasOwnProperty(a)
                }
            }
        }

        a = !0 === a;
        var l = {}, k = [], m = new eb([], !0), p = {
            $provide: {
                provider: c(d), factory: c(f), service: c(function (a, b) {
                    return f(a, ["$injector", function (a) {
                        return a.instantiate(b)
                    }])
                }), value: c(function (a, b) {
                    return f(a, da(b), !1)
                }), constant: c(function (a, b) {
                    Ma(a, "constant");
                    p[a] = b;
                    t[a] = b
                }), decorator: function (a, b) {
                    var c = q.get(a + "Provider"), d = c.$get;
                    c.$get = function () {
                        var a = r.invoke(d, c);
                        return r.invoke(b, null, {$delegate: a})
                    }
                }
            }
        }, q = p.$injector = h(p, function (a, b) {
            aa.isString(b) && k.push(b);
            throw Ga("unpr", k.join(" <- "));
        }), t = {}, r = t.$injector = h(t, function (a, b) {
            var c = q.get(a + "Provider", b);
            return r.invoke(c.$get, c, u, a)
        });
        s(g(b), function (a) {
            r.invoke(a || B)
        });
        return r
    }

    function Be() {
        var b = !0;
        this.disableAutoScrolling = function () {
            b = !1
        };
        this.$get = ["$window", "$location", "$rootScope", function (a, c, d) {
            function e(a) {
                var b = null;
                Array.prototype.some.call(a, function (a) {
                    if ("a" === ta(a)) return b = a, !0
                });
                return b
            }

            function f(b) {
                if (b) {
                    b.scrollIntoView();
                    var c;
                    c = g.yOffset;
                    G(c) ? c = c() : nc(c) ? (c = c[0], c = "fixed" !==
                    a.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : V(c) || (c = 0);
                    c && (b = b.getBoundingClientRect().top, a.scrollBy(0, b - c))
                } else a.scrollTo(0, 0)
            }

            function g() {
                var a = c.hash(), b;
                a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null)
            }

            var h = a.document;
            b && d.$watch(function () {
                return c.hash()
            }, function (a, b) {
                a === b && "" === a || jf(function () {
                    d.$evalAsync(g)
                })
            });
            return g
        }]
    }

    function af() {
        this.$get = ["$$rAF", "$timeout", function (b, a) {
            return b.supported ? function (a) {
                    return b(a)
                } :
                function (b) {
                    return a(b, 0, !1)
                }
        }]
    }

    function nf(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null, Za.call(arguments, 1))
            } finally {
                if (n--, 0 === n) for (; D.length;) try {
                    D.pop()()
                } catch (b) {
                    c.error(b)
                }
            }
        }

        function f(a, b) {
            (function ca() {
                s(H, function (a) {
                    a()
                });
                v = b(ca, a)
            })()
        }

        function g() {
            h();
            l()
        }

        function h() {
            A = b.history.state;
            A = z(A) ? null : A;
            ea(A, O) && (A = O);
            O = A
        }

        function l() {
            if (F !== m.url() || N !== A) F = m.url(), N = A, s(W, function (a) {
                a(m.url(), A)
            })
        }

        function k(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }

        var m = this, p = a[0], q = b.location,
            t = b.history, r = b.setTimeout, S = b.clearTimeout, K = {};
        m.isMock = !1;
        var n = 0, D = [];
        m.$$completeOutstandingRequest = e;
        m.$$incOutstandingRequestCount = function () {
            n++
        };
        m.notifyWhenNoOutstandingRequests = function (a) {
            s(H, function (a) {
                a()
            });
            0 === n ? a() : D.push(a)
        };
        var H = [], v;
        m.addPollFn = function (a) {
            z(v) && f(100, r);
            H.push(a);
            return a
        };
        var A, N, F = q.href, ba = a.find("base"), I = null;
        h();
        N = A;
        m.url = function (a, c, e) {
            z(e) && (e = null);
            q !== b.location && (q = b.location);
            t !== b.history && (t = b.history);
            if (a) {
                var f = N === e;
                if (F === a && (!d.history ||
                        f)) return m;
                var g = F && Ha(F) === Ha(a);
                F = a;
                N = e;
                !d.history || g && f ? (g || (I = a), c ? q.replace(a) : g ? (c = q, e = a.indexOf("#"), a = -1 === e ? "" : a.substr(e + 1), c.hash = a) : q.href = a) : (t[c ? "replaceState" : "pushState"](e, "", a), h(), N = A);
                return m
            }
            return I || q.href.replace(/%27/g, "'")
        };
        m.state = function () {
            return A
        };
        var W = [], va = !1, O = null;
        m.onUrlChange = function (a) {
            if (!va) {
                if (d.history) C(b).on("popstate", g);
                C(b).on("hashchange", g);
                va = !0
            }
            W.push(a);
            return a
        };
        m.$$checkUrlChange = l;
        m.baseHref = function () {
            var a = ba.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/,
                "") : ""
        };
        var wa = {}, y = "", ha = m.baseHref();
        m.cookies = function (a, b) {
            var d, e, f, g;
            if (a) b === u ? p.cookie = encodeURIComponent(a) + "=;path=" + ha + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : x(b) && (d = (p.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) + ";path=" + ha).length + 1, 4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!")); else {
                if (p.cookie !== y) for (y = p.cookie, d = y.split("; "), wa = {}, f = 0; f < d.length; f++) e = d[f], g = e.indexOf("="), 0 < g && (a = k(e.substring(0, g)),
                wa[a] === u && (wa[a] = k(e.substring(g + 1))));
                return wa
            }
        };
        m.defer = function (a, b) {
            var c;
            n++;
            c = r(function () {
                delete K[c];
                e(a)
            }, b || 0);
            K[c] = !0;
            return c
        };
        m.defer.cancel = function (a) {
            return K[a] ? (delete K[a], S(a), e(B), !0) : !1
        }
    }

    function De() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (b, a, c, d) {
            return new nf(b, d, a, c)
        }]
    }

    function Ee() {
        this.$get = function () {
            function b(b, d) {
                function e(a) {
                    a != p && (q ? q == a && (q = a.n) : q = a, f(a.n, a.p), f(a, p), p = a, p.n = null)
                }

                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }

                if (b in a) throw M("$cacheFactory")("iid",
                    b);
                var g = 0, h = w({}, d, {id: b}), l = {}, k = d && d.capacity || Number.MAX_VALUE, m = {}, p = null,
                    q = null;
                return a[b] = {
                    put: function (a, b) {
                        if (k < Number.MAX_VALUE) {
                            var c = m[a] || (m[a] = {key: a});
                            e(c)
                        }
                        if (!z(b)) return a in l || g++, l[a] = b, g > k && this.remove(q.key), b
                    }, get: function (a) {
                        if (k < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b) return;
                            e(b)
                        }
                        return l[a]
                    }, remove: function (a) {
                        if (k < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b) return;
                            b == p && (p = b.p);
                            b == q && (q = b.n);
                            f(b.n, b.p);
                            delete m[a]
                        }
                        delete l[a];
                        g--
                    }, removeAll: function () {
                        l = {};
                        g = 0;
                        m = {};
                        p = q = null
                    }, destroy: function () {
                        m =
                            h = l = null;
                        delete a[b]
                    }, info: function () {
                        return w({}, h, {size: g})
                    }
                }
            }

            var a = {};
            b.info = function () {
                var b = {};
                s(a, function (a, e) {
                    b[e] = a.info()
                });
                return b
            };
            b.get = function (b) {
                return a[b]
            };
            return b
        }
    }

    function Ve() {
        this.$get = ["$cacheFactory", function (b) {
            return b("templates")
        }]
    }

    function xc(b, a) {
        function c(a, b) {
            var c = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, d = {};
            s(a, function (a, e) {
                var f = a.match(c);
                if (!f) throw ia("iscp", b, e, a);
                d[e] = {mode: f[1][0], collection: "*" === f[2], optional: "?" === f[3], attrName: f[4] || e}
            });
            return d
        }

        var d =
                {}, e = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/, f = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            g = Gd("ngSrc,ngSrcset,src,srcset"), h = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, l = /^(on[a-z]+|formaction)$/;
        this.directive = function p(a, e) {
            Ma(a, "directive");
            x(a) ? (Sb(e, "directiveFactory"), d.hasOwnProperty(a) || (d[a] = [], b.factory(a + "Directive", ["$injector", "$exceptionHandler", function (b, e) {
                var f = [];
                s(d[a], function (d, g) {
                    try {
                        var h = b.invoke(d);
                        G(h) ? h = {compile: da(h)} : !h.compile && h.link && (h.compile = da(h.link));
                        h.priority = h.priority || 0;
                        h.index =
                            g;
                        h.name = h.name || a;
                        h.require = h.require || h.controller && h.name;
                        h.restrict = h.restrict || "EA";
                        J(h.scope) && (h.$$isolateBindings = c(h.scope, h.name));
                        f.push(h)
                    } catch (l) {
                        e(l)
                    }
                });
                return f
            }])), d[a].push(e)) : s(a, lc(p));
            return this
        };
        this.aHrefSanitizationWhitelist = function (b) {
            return y(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist()
        };
        this.imgSrcSanitizationWhitelist = function (b) {
            return y(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist()
        };
        var k = !0;
        this.debugInfoEnabled =
            function (a) {
                return y(a) ? (k = a, this) : k
            };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, r, S, K, n, D, H, v, A) {
            function N(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {
                }
            }

            function F(a, b, c, d, e) {
                a instanceof C || (a = C(a));
                s(a, function (b, c) {
                    b.nodeType == qb && b.nodeValue.match(/\S+/) && (a[c] = C(b).wrap("<span></span>").parent()[0])
                });
                var f = ba(a, b, a, c, d, e);
                F.$$addScopeClass(a);
                var g = null;
                return function (b,
                                 c, d) {
                    Sb(b, "scope");
                    d = d || {};
                    var e = d.parentBoundTranscludeFn, h = d.transcludeControllers;
                    d = d.futureParentElement;
                    e && e.$$boundTransclude && (e = e.$$boundTransclude);
                    g || (g = (d = d && d[0]) ? "foreignobject" !== ta(d) && d.toString().match(/SVG/) ? "svg" : "html" : "html");
                    d = "html" !== g ? C(Xb(g, C("<div>").append(a).html())) : c ? La.clone.call(a) : a;
                    if (h) for (var l in h) d.data("$" + l + "Controller", h[l].instance);
                    F.$$addScopeInfo(d, b);
                    c && c(d, b);
                    f && f(b, d, d, e);
                    return d
                }
            }

            function ba(a, b, c, d, e, f) {
                function g(a, c, d, e) {
                    var f, l, k, q, p, r, D;
                    if (n) for (D =
                                    Array(c.length), q = 0; q < h.length; q += 3) f = h[q], D[f] = c[f]; else D = c;
                    q = 0;
                    for (p = h.length; q < p;) l = D[h[q++]], c = h[q++], f = h[q++], c ? (c.scope ? (k = a.$new(), F.$$addScopeInfo(C(l), k)) : k = a, r = c.transcludeOnThisElement ? I(a, c.transclude, e, c.elementTranscludeOnThisElement) : !c.templateOnThisElement && e ? e : !e && b ? I(a, b) : null, c(f, k, l, d, r)) : f && f(a, l.childNodes, u, e)
                }

                for (var h = [], l, k, q, p, n, r = 0; r < a.length; r++) {
                    l = new Yb;
                    k = W(a[r], [], l, 0 === r ? d : u, e);
                    (f = k.length ? y(k, a[r], l, b, c, null, [], [], f) : null) && f.scope && F.$$addScopeClass(l.$$element);
                    l = f && f.terminal || !(q = a[r].childNodes) || !q.length ? null : ba(q, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
                    if (f || l) h.push(r, f, l), p = !0, n = n || f;
                    f = null
                }
                return p ? g : null
            }

            function I(a, b, c, d) {
                return function (d, e, f, g, h) {
                    d || (d = a.$new(!1, h), d.$$transcluded = !0);
                    return b(d, e, {parentBoundTranscludeFn: c, transcludeControllers: f, futureParentElement: g})
                }
            }

            function W(a, b, c, d, g) {
                var h = c.$attr, l;
                switch (a.nodeType) {
                    case na:
                        ha(b, ya(ta(a)), "E", d, g);
                        for (var k, q, p, n = a.attributes, r = 0, D = n && n.length; r <
                        D; r++) {
                            var S = !1, t = !1;
                            k = n[r];
                            l = k.name;
                            q = T(k.value);
                            k = ya(l);
                            if (p = Pa.test(k)) l = l.replace(Sc, "").substr(8).replace(/_(.)/g, function (a, b) {
                                return b.toUpperCase()
                            });
                            var A = k.replace(/(Start|End)$/, "");
                            fb(A) && k === A + "Start" && (S = l, t = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6));
                            k = ya(l.toLowerCase());
                            h[k] = l;
                            if (p || !c.hasOwnProperty(k)) c[k] = q, Mc(a, k) && (c[k] = !0);
                            Aa(a, b, q, k, p);
                            ha(b, k, "A", d, g, S, t)
                        }
                        a = a.className;
                        J(a) && (a = a.animVal);
                        if (x(a) && "" !== a) for (; l = f.exec(a);) k = ya(l[2]), ha(b, k, "C", d, g) && (c[k] = T(l[3])),
                            a = a.substr(l.index + l[0].length);
                        break;
                    case qb:
                        P(b, a.nodeValue);
                        break;
                    case 8:
                        try {
                            if (l = e.exec(a.nodeValue)) k = ya(l[1]), ha(b, k, "M", d, g) && (c[k] = T(l[2]))
                        } catch (v) {
                        }
                }
                b.sort(ca);
                return b
            }

            function va(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw ia("uterdir", b, c);
                        a.nodeType == na && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                        d.push(a);
                        a = a.nextSibling
                    } while (0 < e)
                } else d.push(a);
                return C(d)
            }

            function O(a, b, c) {
                return function (d, e, f, g, h) {
                    e = va(e[0], b, c);
                    return a(d, e, f, g, h)
                }
            }

            function y(a,
                       d, e, f, g, l, k, p, n) {
                function r(a, b, c, d) {
                    if (a) {
                        c && (a = O(a, c, d));
                        a.require = L.require;
                        a.directiveName = ca;
                        if (I === L || L.$$isolateScope) a = Y(a, {isolateScope: !0});
                        k.push(a)
                    }
                    if (b) {
                        c && (b = O(b, c, d));
                        b.require = L.require;
                        b.directiveName = ca;
                        if (I === L || L.$$isolateScope) b = Y(b, {isolateScope: !0});
                        p.push(b)
                    }
                }

                function D(a, b, c, d) {
                    var e, f = "data", g = !1, l = c, k;
                    if (x(b)) {
                        k = b.match(h);
                        b = b.substring(k[0].length);
                        k[3] && (k[1] ? k[3] = null : k[1] = k[3]);
                        "^" === k[1] ? f = "inheritedData" : "^^" === k[1] && (f = "inheritedData", l = c.parent());
                        "?" === k[2] && (g =
                            !0);
                        e = null;
                        d && "data" === f && (e = d[b]) && (e = e.instance);
                        e = e || l[f]("$" + b + "Controller");
                        if (!e && !g) throw ia("ctreq", b, a);
                        return e || null
                    }
                    E(b) && (e = [], s(b, function (b) {
                        e.push(D(a, b, c, d))
                    }));
                    return e
                }

                function A(a, c, f, g, h) {
                    function l(a, b, c) {
                        var d;
                        Va(a) || (c = b, b = a, a = u);
                        B && (d = N);
                        c || (c = B ? W.parent() : W);
                        return h(a, b, d, c, va)
                    }

                    var n, r, t, v, N, gb, W, O;
                    d === f ? (O = e, W = e.$$element) : (W = C(f), O = new Yb(W, e));
                    I && (v = c.$new(!0));
                    h && (gb = l, gb.$$boundTransclude = h);
                    H && (ba = {}, N = {}, s(H, function (a) {
                        var b = {
                            $scope: a === I || a.$$isolateScope ? v : c, $element: W,
                            $attrs: O, $transclude: gb
                        };
                        t = a.controller;
                        "@" == t && (t = O[a.name]);
                        b = K(t, b, !0, a.controllerAs);
                        N[a.name] = b;
                        B || W.data("$" + a.name + "Controller", b.instance);
                        ba[a.name] = b
                    }));
                    if (I) {
                        F.$$addScopeInfo(W, v, !0, !(ja && (ja === I || ja === I.$$originalDirective)));
                        F.$$addScopeClass(W, !0);
                        g = ba && ba[I.name];
                        var xa = v;
                        g && g.identifier && !0 === I.bindToController && (xa = g.instance);
                        s(v.$$isolateBindings = I.$$isolateBindings, function (a, d) {
                            var e = a.attrName, f = a.optional, g, h, l, k;
                            switch (a.mode) {
                                case "@":
                                    O.$observe(e, function (a) {
                                        xa[d] = a
                                    });
                                    O.$$observers[e].$$scope =
                                        c;
                                    O[e] && (xa[d] = b(O[e])(c));
                                    break;
                                case "=":
                                    if (f && !O[e]) break;
                                    h = S(O[e]);
                                    k = h.literal ? ea : function (a, b) {
                                        return a === b || a !== a && b !== b
                                    };
                                    l = h.assign || function () {
                                        g = xa[d] = h(c);
                                        throw ia("nonassign", O[e], I.name);
                                    };
                                    g = xa[d] = h(c);
                                    f = function (a) {
                                        k(a, xa[d]) || (k(a, g) ? l(c, a = xa[d]) : xa[d] = a);
                                        return g = a
                                    };
                                    f.$stateful = !0;
                                    f = a.collection ? c.$watchCollection(O[e], f) : c.$watch(S(O[e], f), null, h.literal);
                                    v.$on("$destroy", f);
                                    break;
                                case "&":
                                    h = S(O[e]), xa[d] = function (a) {
                                        return h(c, a)
                                    }
                            }
                        })
                    }
                    ba && (s(ba, function (a) {
                        a()
                    }), ba = null);
                    g = 0;
                    for (n = k.length; g <
                    n; g++) r = k[g], Z(r, r.isolateScope ? v : c, W, O, r.require && D(r.directiveName, r.require, W, N), gb);
                    var va = c;
                    I && (I.template || null === I.templateUrl) && (va = v);
                    a && a(va, f.childNodes, u, h);
                    for (g = p.length - 1; 0 <= g; g--) r = p[g], Z(r, r.isolateScope ? v : c, W, O, r.require && D(r.directiveName, r.require, W, N), gb)
                }

                n = n || {};
                for (var v = -Number.MAX_VALUE, N, H = n.controllerDirectives, ba, I = n.newIsolateScopeDirective, ja = n.templateDirective, wa = n.nonTlbTranscludeDirective, ha = !1, fb = !1, B = n.hasElementTranscludeDirective, w = e.$$element = C(d), L, ca, U, R = f,
                         P, Q = 0, Aa = a.length; Q < Aa; Q++) {
                    L = a[Q];
                    var Pa = L.$$start, $ = L.$$end;
                    Pa && (w = va(d, Pa, $));
                    U = u;
                    if (v > L.priority) break;
                    if (U = L.scope) L.templateUrl || (J(U) ? (Oa("new/isolated scope", I || N, L, w), I = L) : Oa("new/isolated scope", I, L, w)), N = N || L;
                    ca = L.name;
                    !L.templateUrl && L.controller && (U = L.controller, H = H || {}, Oa("'" + ca + "' controller", H[ca], L, w), H[ca] = L);
                    if (U = L.transclude) ha = !0, L.$$tlb || (Oa("transclusion", wa, L, w), wa = L), "element" == U ? (B = !0, v = L.priority, U = w, w = e.$$element = C(X.createComment(" " + ca + ": " + e[ca] + " ")), d = w[0], V(g, Za.call(U,
                        0), d), R = F(U, f, v, l && l.name, {nonTlbTranscludeDirective: wa})) : (U = C(Vb(d)).contents(), w.empty(), R = F(U, f));
                    if (L.template) if (fb = !0, Oa("template", ja, L, w), ja = L, U = G(L.template) ? L.template(w, e) : L.template, U = Tc(U), L.replace) {
                        l = L;
                        U = Tb.test(U) ? Uc(Xb(L.templateNamespace, T(U))) : [];
                        d = U[0];
                        if (1 != U.length || d.nodeType !== na) throw ia("tplrt", ca, "");
                        V(g, w, d);
                        Aa = {$attr: {}};
                        U = W(d, [], Aa);
                        var of = a.splice(Q + 1, a.length - (Q + 1));
                        I && z(U);
                        a = a.concat(U).concat(of);
                        Rc(e, Aa);
                        Aa = a.length
                    } else w.html(U);
                    if (L.templateUrl) fb = !0, Oa("template",
                        ja, L, w), ja = L, L.replace && (l = L), A = M(a.splice(Q, a.length - Q), w, e, g, ha && R, k, p, {
                        controllerDirectives: H,
                        newIsolateScopeDirective: I,
                        templateDirective: ja,
                        nonTlbTranscludeDirective: wa
                    }), Aa = a.length; else if (L.compile) try {
                        P = L.compile(w, e, R), G(P) ? r(null, P, Pa, $) : P && r(P.pre, P.post, Pa, $)
                    } catch (aa) {
                        c(aa, ua(w))
                    }
                    L.terminal && (A.terminal = !0, v = Math.max(v, L.priority))
                }
                A.scope = N && !0 === N.scope;
                A.transcludeOnThisElement = ha;
                A.elementTranscludeOnThisElement = B;
                A.templateOnThisElement = fb;
                A.transclude = R;
                n.hasElementTranscludeDirective =
                    B;
                return A
            }

            function z(a) {
                for (var b = 0, c = a.length; b < c; b++) a[b] = Pb(a[b], {$$isolateScope: !0})
            }

            function ha(b, e, f, g, h, l, k) {
                if (e === h) return null;
                h = null;
                if (d.hasOwnProperty(e)) {
                    var q;
                    e = a.get(e + "Directive");
                    for (var n = 0, r = e.length; n < r; n++) try {
                        q = e[n], (g === u || g > q.priority) && -1 != q.restrict.indexOf(f) && (l && (q = Pb(q, {
                            $$start: l,
                            $$end: k
                        })), b.push(q), h = q)
                    } catch (D) {
                        c(D)
                    }
                }
                return h
            }

            function fb(b) {
                if (d.hasOwnProperty(b)) for (var c = a.get(b + "Directive"), e = 0, f = c.length; e < f; e++) if (b = c[e], b.multiElement) return !0;
                return !1
            }

            function Rc(a,
                        b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                s(a, function (d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                });
                s(b, function (b, f) {
                    "class" == f ? (N(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                })
            }

            function M(a, b, c, d, e, f, g, h) {
                var l = [], k, q, p = b[0], n = a.shift(),
                    D = Pb(n, {templateUrl: null, transclude: null, replace: null, $$originalDirective: n}),
                    S = G(n.templateUrl) ? n.templateUrl(b, c) : n.templateUrl, t = n.templateNamespace;
                b.empty();
                r(H.getTrustedResourceUrl(S)).then(function (r) {
                    var A, v;
                    r = Tc(r);
                    if (n.replace) {
                        r = Tb.test(r) ? Uc(Xb(t, T(r))) : [];
                        A = r[0];
                        if (1 != r.length || A.nodeType !== na) throw ia("tplrt", n.name, S);
                        r = {$attr: {}};
                        V(d, b, A);
                        var H = W(A, [], r);
                        J(n.scope) && z(H);
                        a = H.concat(a);
                        Rc(c, r)
                    } else A = p, b.html(r);
                    a.unshift(D);
                    k = y(a, A, c, e, b, n, f, g, h);
                    s(d, function (a, c) {
                        a == A && (d[c] = b[0])
                    });
                    for (q = ba(b[0].childNodes, e); l.length;) {
                        r = l.shift();
                        v = l.shift();
                        var F = l.shift(),
                            K = l.shift(), H = b[0];
                        if (!r.$$destroyed) {
                            if (v !== p) {
                                var O = v.className;
                                h.hasElementTranscludeDirective && n.replace || (H = Vb(A));
                                V(F, C(v), H);
                                N(C(H), O)
                            }
                            v = k.transcludeOnThisElement ? I(r, k.transclude, K) : K;
                            k(q, r, H, d, v)
                        }
                    }
                    l = null
                });
                return function (a, b, c, d, e) {
                    a = e;
                    b.$$destroyed || (l ? l.push(b, c, d, a) : (k.transcludeOnThisElement && (a = I(b, k.transclude, e)), k(q, b, c, d, a)))
                }
            }

            function ca(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }

            function Oa(a, b, c, d) {
                if (b) throw ia("multidir",
                    b.name, c.name, a, ua(d));
            }

            function P(a, c) {
                var d = b(c, !0);
                d && a.push({
                    priority: 0, compile: function (a) {
                        a = a.parent();
                        var b = !!a.length;
                        b && F.$$addBindingClass(a);
                        return function (a, c) {
                            var e = c.parent();
                            b || F.$$addBindingClass(e);
                            F.$$addBindingInfo(e, d.expressions);
                            a.$watch(d, function (a) {
                                c[0].nodeValue = a
                            })
                        }
                    }
                })
            }

            function Xb(a, b) {
                a = R(a || "html");
                switch (a) {
                    case "svg":
                    case "math":
                        var c = X.createElement("div");
                        c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
                        return c.childNodes[0].childNodes;
                    default:
                        return b
                }
            }

            function Q(a, b) {
                if ("srcdoc" ==
                    b) return H.HTML;
                var c = ta(a);
                if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b)) return H.RESOURCE_URL
            }

            function Aa(a, c, d, e, f) {
                var h = Q(a, e);
                f = g[e] || f;
                var k = b(d, !0, h, f);
                if (k) {
                    if ("multiple" === e && "select" === ta(a)) throw ia("selmulti", ua(a));
                    c.push({
                        priority: 100, compile: function () {
                            return {
                                pre: function (a, c, g) {
                                    c = g.$$observers || (g.$$observers = {});
                                    if (l.test(e)) throw ia("nodomevents");
                                    var n = g[e];
                                    n !== d && (k = n && b(n, !0, h, f), d = n);
                                    k && (g[e] = k(a), (c[e] || (c[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope ||
                                        a).$watch(k, function (a, b) {
                                        "class" === e && a != b ? g.$updateClass(a, b) : g.$set(e, a)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function V(a, b, c) {
                var d = b[0], e = b.length, f = d.parentNode, g, h;
                if (a) for (g = 0, h = a.length; g < h; g++) if (a[g] == d) {
                    a[g++] = c;
                    h = g + e - 1;
                    for (var l = a.length; g < l; g++, h++) h < l ? a[g] = a[h] : delete a[g];
                    a.length -= e - 1;
                    a.context === d && (a.context = c);
                    break
                }
                f && f.replaceChild(c, d);
                a = X.createDocumentFragment();
                a.appendChild(d);
                C(c).data(C(d).data());
                ra ? (Rb = !0, ra.cleanData([d])) : delete C.cache[d[C.expando]];
                d = 1;
                for (e = b.length; d < e; d++) f = b[d], C(f).remove(),
                    a.appendChild(f), delete b[d];
                b[0] = c;
                b.length = 1
            }

            function Y(a, b) {
                return w(function () {
                    return a.apply(null, arguments)
                }, a, b)
            }

            function Z(a, b, d, e, f, g) {
                try {
                    a(b, d, e, f, g)
                } catch (h) {
                    c(h, ua(d))
                }
            }

            var Yb = function (a, b) {
                if (b) {
                    var c = Object.keys(b), d, e, f;
                    d = 0;
                    for (e = c.length; d < e; d++) f = c[d], this[f] = b[f]
                } else this.$attr = {};
                this.$$element = a
            };
            Yb.prototype = {
                $normalize: ya, $addClass: function (a) {
                    a && 0 < a.length && v.addClass(this.$$element, a)
                }, $removeClass: function (a) {
                    a && 0 < a.length && v.removeClass(this.$$element, a)
                }, $updateClass: function (a,
                                           b) {
                    var c = Vc(a, b);
                    c && c.length && v.addClass(this.$$element, c);
                    (c = Vc(b, a)) && c.length && v.removeClass(this.$$element, c)
                }, $set: function (a, b, d, e) {
                    var f = this.$$element[0], g = Mc(f, a), h = kf(f, a), f = a;
                    g ? (this.$$element.prop(a, b), e = g) : h && (this[h] = b, f = h);
                    this[a] = b;
                    e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = uc(a, "-"));
                    g = ta(this.$$element);
                    if ("a" === g && "href" === a || "img" === g && "src" === a) this[a] = b = A(b, "src" === a); else if ("img" === g && "srcset" === a) {
                        for (var g = "", h = T(b), l = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, l = /\s/.test(h) ?
                            l : /(,)/, h = h.split(l), l = Math.floor(h.length / 2), k = 0; k < l; k++) var q = 2 * k, g = g + A(T(h[q]), !0), g = g + (" " + T(h[q + 1]));
                        h = T(h[2 * k]).split(/\s/);
                        g += A(T(h[0]), !0);
                        2 === h.length && (g += " " + T(h[1]));
                        this[a] = b = g
                    }
                    !1 !== d && (null === b || b === u ? this.$$element.removeAttr(e) : this.$$element.attr(e, b));
                    (a = this.$$observers) && s(a[f], function (a) {
                        try {
                            a(b)
                        } catch (d) {
                            c(d)
                        }
                    })
                }, $observe: function (a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = fa()), e = d[a] || (d[a] = []);
                    e.push(b);
                    n.$evalAsync(function () {
                        !e.$$inter && c.hasOwnProperty(a) && b(c[a])
                    });
                    return function () {
                        Xa(e, b)
                    }
                }
            };
            var U = b.startSymbol(), ja = b.endSymbol(), Tc = "{{" == U || "}}" == ja ? oa : function (a) {
                return a.replace(/\{\{/g, U).replace(/}}/g, ja)
            }, Pa = /^ngAttr[A-Z]/;
            F.$$addBindingInfo = k ? function (a, b) {
                var c = a.data("$binding") || [];
                E(b) ? c = c.concat(b) : c.push(b);
                a.data("$binding", c)
            } : B;
            F.$$addBindingClass = k ? function (a) {
                N(a, "ng-binding")
            } : B;
            F.$$addScopeInfo = k ? function (a, b, c, d) {
                a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b)
            } : B;
            F.$$addScopeClass = k ? function (a, b) {
                N(a, b ? "ng-isolate-scope" :
                    "ng-scope")
            } : B;
            return F
        }]
    }

    function ya(b) {
        return db(b.replace(Sc, ""))
    }

    function Vc(b, a) {
        var c = "", d = b.split(/\s+/), e = a.split(/\s+/), f = 0;
        a:for (; f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++) if (g == e[h]) continue a;
            c += (0 < c.length ? " " : "") + g
        }
        return c
    }

    function Uc(b) {
        b = C(b);
        var a = b.length;
        if (1 >= a) return b;
        for (; a--;) 8 === b[a].nodeType && pf.call(b, a, 1);
        return b
    }

    function Fe() {
        var b = {}, a = !1, c = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function (a, c) {
            Ma(a, "controller");
            J(a) ? w(b, a) : b[a] = c
        };
        this.allowGlobals = function () {
            a =
                !0
        };
        this.$get = ["$injector", "$window", function (d, e) {
            function f(a, b, c, d) {
                if (!a || !J(a.$scope)) throw M("$controller")("noscp", d, b);
                a.$scope[b] = c
            }

            return function (g, h, l, k) {
                var m, p, q;
                l = !0 === l;
                k && x(k) && (q = k);
                if (x(g)) {
                    k = g.match(c);
                    if (!k) throw qf("ctrlfmt", g);
                    p = k[1];
                    q = q || k[3];
                    g = b.hasOwnProperty(p) ? b[p] : wc(h.$scope, p, !0) || (a ? wc(e, p, !0) : u);
                    tb(g, p, !0)
                }
                if (l) return l = (E(g) ? g[g.length - 1] : g).prototype, m = Object.create(l || null), q && f(h, q, m, p || g.name), w(function () {
                    d.invoke(g, m, h, p);
                    return m
                }, {instance: m, identifier: q});
                m = d.instantiate(g, h, p);
                q && f(h, q, m, p || g.name);
                return m
            }
        }]
    }

    function Ge() {
        this.$get = ["$window", function (b) {
            return C(b.document)
        }]
    }

    function He() {
        this.$get = ["$log", function (b) {
            return function (a, c) {
                b.error.apply(b, arguments)
            }
        }]
    }

    function Zb(b, a) {
        if (x(b)) {
            var c = b.replace(rf, "").trim();
            if (c) {
                var d = a("Content-Type");
                (d = d && 0 === d.indexOf(Wc)) || (d = (d = c.match(sf)) && tf[d[0]].test(c));
                d && (b = pc(c))
            }
        }
        return b
    }

    function Xc(b) {
        var a = fa(), c, d, e;
        if (!b) return a;
        s(b.split("\n"), function (b) {
            e = b.indexOf(":");
            c = R(T(b.substr(0,
                e)));
            d = T(b.substr(e + 1));
            c && (a[c] = a[c] ? a[c] + ", " + d : d)
        });
        return a
    }

    function Yc(b) {
        var a = J(b) ? b : u;
        return function (c) {
            a || (a = Xc(b));
            return c ? (c = a[R(c)], void 0 === c && (c = null), c) : a
        }
    }

    function Zc(b, a, c, d) {
        if (G(d)) return d(b, a, c);
        s(d, function (d) {
            b = d(b, a, c)
        });
        return b
    }

    function Ke() {
        var b = this.defaults = {
            transformResponse: [Zb], transformRequest: [function (a) {
                return J(a) && "[object File]" !== Da.call(a) && "[object Blob]" !== Da.call(a) && "[object FormData]" !== Da.call(a) ? $a(a) : a
            }], headers: {
                common: {Accept: "application/json, text/plain, */*"},
                post: qa($b), put: qa($b), patch: qa($b)
            }, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN"
        }, a = !1;
        this.useApplyAsync = function (b) {
            return y(b) ? (a = !!b, this) : a
        };
        var c = this.interceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (d, e, f, g, h, l) {
            function k(a) {
                function c(a) {
                    var b = w({}, a);
                    b.data = a.data ? Zc(a.data, a.headers, a.status, e.transformResponse) : a.data;
                    a = a.status;
                    return 200 <= a && 300 > a ? b : h.reject(b)
                }

                function d(a) {
                    var b, c = {};
                    s(a, function (a, d) {
                        G(a) ? (b =
                            a(), null != b && (c[d] = b)) : c[d] = a
                    });
                    return c
                }

                if (!aa.isObject(a)) throw M("$http")("badreq", a);
                var e = w({
                    method: "get",
                    transformRequest: b.transformRequest,
                    transformResponse: b.transformResponse
                }, a);
                e.headers = function (a) {
                    var c = b.headers, e = w({}, a.headers), f, g, c = w({}, c.common, c[R(a.method)]);
                    a:for (f in c) {
                        a = R(f);
                        for (g in e) if (R(g) === a) continue a;
                        e[f] = c[f]
                    }
                    return d(e)
                }(a);
                e.method = vb(e.method);
                var f = [function (a) {
                    var d = a.headers, e = Zc(a.data, Yc(d), u, a.transformRequest);
                    z(e) && s(d, function (a, b) {
                        "content-type" === R(b) &&
                        delete d[b]
                    });
                    z(a.withCredentials) && !z(b.withCredentials) && (a.withCredentials = b.withCredentials);
                    return m(a, e).then(c, c)
                }, u], g = h.when(e);
                for (s(t, function (a) {
                    (a.request || a.requestError) && f.unshift(a.request, a.requestError);
                    (a.response || a.responseError) && f.push(a.response, a.responseError)
                }); f.length;) {
                    a = f.shift();
                    var l = f.shift(), g = g.then(a, l)
                }
                g.success = function (a) {
                    g.then(function (b) {
                        a(b.data, b.status, b.headers, e)
                    });
                    return g
                };
                g.error = function (a) {
                    g.then(null, function (b) {
                        a(b.data, b.status, b.headers, e)
                    });
                    return g
                };
                return g
            }

            function m(c, f) {
                function l(b, c, d, e) {
                    function f() {
                        n(c, b, d, e)
                    }

                    N && (200 <= b && 300 > b ? N.put(I, [b, c, Xc(d), e]) : N.remove(I));
                    a ? g.$applyAsync(f) : (f(), g.$$phase || g.$apply())
                }

                function n(a, b, d, e) {
                    b = Math.max(b, 0);
                    (200 <= b && 300 > b ? v.resolve : v.reject)({
                        data: a,
                        status: b,
                        headers: Yc(d),
                        config: c,
                        statusText: e
                    })
                }

                function m(a) {
                    n(a.data, a.status, qa(a.headers()), a.statusText)
                }

                function t() {
                    var a = k.pendingRequests.indexOf(c);
                    -1 !== a && k.pendingRequests.splice(a, 1)
                }

                var v = h.defer(), A = v.promise, N, F, s = c.headers, I = p(c.url,
                    c.params);
                k.pendingRequests.push(c);
                A.then(t, t);
                !c.cache && !b.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (N = J(c.cache) ? c.cache : J(b.cache) ? b.cache : q);
                N && (F = N.get(I), y(F) ? F && G(F.then) ? F.then(m, m) : E(F) ? n(F[1], F[0], qa(F[2]), F[3]) : n(F, 200, {}, "OK") : N.put(I, A));
                z(F) && ((F = $c(c.url) ? e.cookies()[c.xsrfCookieName || b.xsrfCookieName] : u) && (s[c.xsrfHeaderName || b.xsrfHeaderName] = F), d(c.method, I, f, l, s, c.timeout, c.withCredentials, c.responseType));
                return A
            }

            function p(a, b) {
                if (!b) return a;
                var c = [];
                Ed(b,
                    function (a, b) {
                        null === a || z(a) || (E(a) || (a = [a]), s(a, function (a) {
                            J(a) && (a = pa(a) ? a.toISOString() : $a(a));
                            c.push(Fa(b) + "=" + Fa(a))
                        }))
                    });
                0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&"));
                return a
            }

            var q = f("$http"), t = [];
            s(c, function (a) {
                t.unshift(x(a) ? l.get(a) : l.invoke(a))
            });
            k.pendingRequests = [];
            (function (a) {
                s(arguments, function (a) {
                    k[a] = function (b, c) {
                        return k(w(c || {}, {method: a, url: b}))
                    }
                })
            })("get", "delete", "head", "jsonp");
            (function (a) {
                s(arguments, function (a) {
                    k[a] = function (b, c, d) {
                        return k(w(d || {}, {
                            method: a,
                            url: b, data: c
                        }))
                    }
                })
            })("post", "put", "patch");
            k.defaults = b;
            return k
        }]
    }

    function uf() {
        return new P.XMLHttpRequest
    }

    function Le() {
        this.$get = ["$browser", "$window", "$document", function (b, a, c) {
            return vf(b, uf, b.defer, a.angular.callbacks, c[0])
        }]
    }

    function vf(b, a, c, d, e) {
        function f(a, b, c) {
            var f = e.createElement("script"), m = null;
            f.type = "text/javascript";
            f.src = a;
            f.async = !0;
            m = function (a) {
                f.removeEventListener("load", m, !1);
                f.removeEventListener("error", m, !1);
                e.body.removeChild(f);
                f = null;
                var g = -1, t = "unknown";
                a && ("load" !==
                a.type || d[b].called || (a = {type: "error"}), t = a.type, g = "error" === a.type ? 404 : 200);
                c && c(g, t)
            };
            f.addEventListener("load", m, !1);
            f.addEventListener("error", m, !1);
            e.body.appendChild(f);
            return m
        }

        return function (e, h, l, k, m, p, q, t) {
            function r() {
                n && n();
                D && D.abort()
            }

            function S(a, d, e, f, g) {
                v !== u && c.cancel(v);
                n = D = null;
                a(d, e, f, g);
                b.$$completeOutstandingRequest(B)
            }

            b.$$incOutstandingRequestCount();
            h = h || b.url();
            if ("jsonp" == R(e)) {
                var K = "_" + (d.counter++).toString(36);
                d[K] = function (a) {
                    d[K].data = a;
                    d[K].called = !0
                };
                var n = f(h.replace("JSON_CALLBACK",
                    "angular.callbacks." + K), K, function (a, b) {
                    S(k, a, d[K].data, "", b);
                    d[K] = B
                })
            } else {
                var D = a();
                D.open(e, h, !0);
                s(m, function (a, b) {
                    y(a) && D.setRequestHeader(b, a)
                });
                D.onload = function () {
                    var a = D.statusText || "", b = "response" in D ? D.response : D.responseText,
                        c = 1223 === D.status ? 204 : D.status;
                    0 === c && (c = b ? 200 : "file" == Ba(h).protocol ? 404 : 0);
                    S(k, c, b, D.getAllResponseHeaders(), a)
                };
                e = function () {
                    S(k, -1, null, null, "")
                };
                D.onerror = e;
                D.onabort = e;
                q && (D.withCredentials = !0);
                if (t) try {
                    D.responseType = t
                } catch (H) {
                    if ("json" !== t) throw H;
                }
                D.send(l ||
                    null)
            }
            if (0 < p) var v = c(r, p); else p && G(p.then) && p.then(r)
        }
    }

    function Ie() {
        var b = "{{", a = "}}";
        this.startSymbol = function (a) {
            return a ? (b = a, this) : b
        };
        this.endSymbol = function (b) {
            return b ? (a = b, this) : a
        };
        this.$get = ["$parse", "$exceptionHandler", "$sce", function (c, d, e) {
            function f(a) {
                return "\\\\\\" + a
            }

            function g(f, g, t, r) {
                function S(c) {
                    return c.replace(k, b).replace(m, a)
                }

                function K(a) {
                    try {
                        var b = a;
                        a = t ? e.getTrusted(t, b) : e.valueOf(b);
                        var c;
                        if (r && !y(a)) c = a; else if (null == a) c = ""; else {
                            switch (typeof a) {
                                case "string":
                                    break;
                                case "number":
                                    a =
                                        "" + a;
                                    break;
                                default:
                                    a = $a(a)
                            }
                            c = a
                        }
                        return c
                    } catch (g) {
                        c = ac("interr", f, g.toString()), d(c)
                    }
                }

                r = !!r;
                for (var n, D, H = 0, v = [], A = [], N = f.length, F = [], s = []; H < N;) if (-1 != (n = f.indexOf(b, H)) && -1 != (D = f.indexOf(a, n + h))) H !== n && F.push(S(f.substring(H, n))), H = f.substring(n + h, D), v.push(H), A.push(c(H, K)), H = D + l, s.push(F.length), F.push(""); else {
                    H !== N && F.push(S(f.substring(H)));
                    break
                }
                if (t && 1 < F.length) throw ac("noconcat", f);
                if (!g || v.length) {
                    var I = function (a) {
                        for (var b = 0, c = v.length; b < c; b++) {
                            if (r && z(a[b])) return;
                            F[s[b]] = a[b]
                        }
                        return F.join("")
                    };
                    return w(function (a) {
                        var b = 0, c = v.length, e = Array(c);
                        try {
                            for (; b < c; b++) e[b] = A[b](a);
                            return I(e)
                        } catch (g) {
                            a = ac("interr", f, g.toString()), d(a)
                        }
                    }, {
                        exp: f, expressions: v, $$watchDelegate: function (a, b, c) {
                            var d;
                            return a.$watchGroup(A, function (c, e) {
                                var f = I(c);
                                G(b) && b.call(this, f, c !== e ? d : f, a);
                                d = f
                            }, c)
                        }
                    })
                }
            }

            var h = b.length, l = a.length, k = new RegExp(b.replace(/./g, f), "g"),
                m = new RegExp(a.replace(/./g, f), "g");
            g.startSymbol = function () {
                return b
            };
            g.endSymbol = function () {
                return a
            };
            return g
        }]
    }

    function Je() {
        this.$get = ["$rootScope",
            "$window", "$q", "$$q", function (b, a, c, d) {
                function e(e, h, l, k) {
                    var m = a.setInterval, p = a.clearInterval, q = 0, t = y(k) && !k, r = (t ? d : c).defer(),
                        S = r.promise;
                    l = y(l) ? l : 0;
                    S.then(null, null, e);
                    S.$$intervalId = m(function () {
                        r.notify(q++);
                        0 < l && q >= l && (r.resolve(q), p(S.$$intervalId), delete f[S.$$intervalId]);
                        t || b.$apply()
                    }, h);
                    f[S.$$intervalId] = r;
                    return S
                }

                var f = {};
                e.cancel = function (b) {
                    return b && b.$$intervalId in f ? (f[b.$$intervalId].reject("canceled"), a.clearInterval(b.$$intervalId), delete f[b.$$intervalId], !0) : !1
                };
                return e
            }]
    }

    function Rd() {
        this.$get = function () {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "\u00a4",
                        posSuf: "",
                        negPre: "(\u00a4",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function (b) {
                    return 1 === b ? "one" : "other"
                }
            }
        }
    }

    function bc(b) {
        b = b.split("/");
        for (var a = b.length; a--;) b[a] = rb(b[a]);
        return b.join("/")
    }

    function ad(b, a) {
        var c = Ba(b);
        a.$$protocol =
            c.protocol;
        a.$$host = c.hostname;
        a.$$port = $(c.port) || wf[c.protocol] || null
    }

    function bd(b, a) {
        var c = "/" !== b.charAt(0);
        c && (b = "/" + b);
        var d = Ba(b);
        a.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname);
        a.$$search = rc(d.search);
        a.$$hash = decodeURIComponent(d.hash);
        a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path)
    }

    function za(b, a) {
        if (0 === a.indexOf(b)) return a.substr(b.length)
    }

    function Ha(b) {
        var a = b.indexOf("#");
        return -1 == a ? b : b.substr(0, a)
    }

    function Gb(b) {
        return b.replace(/(#.+)|#$/,
            "$1")
    }

    function cc(b) {
        return b.substr(0, Ha(b).lastIndexOf("/") + 1)
    }

    function dc(b, a) {
        this.$$html5 = !0;
        a = a || "";
        var c = cc(b);
        ad(b, this);
        this.$$parse = function (a) {
            var b = za(c, a);
            if (!x(b)) throw Hb("ipthprfx", a, c);
            bd(b, this);
            this.$$path || (this.$$path = "/");
            this.$$compose()
        };
        this.$$compose = function () {
            var a = Qb(this.$$search), b = this.$$hash ? "#" + rb(this.$$hash) : "";
            this.$$url = bc(this.$$path) + (a ? "?" + a : "") + b;
            this.$$absUrl = c + this.$$url.substr(1)
        };
        this.$$parseLinkUrl = function (d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)),
                !0;
            var f, g;
            (f = za(b, d)) !== u ? (g = f, g = (f = za(a, f)) !== u ? c + (za("/", f) || f) : b + g) : (f = za(c, d)) !== u ? g = c + f : c == d + "/" && (g = c);
            g && this.$$parse(g);
            return !!g
        }
    }

    function ec(b, a) {
        var c = cc(b);
        ad(b, this);
        this.$$parse = function (d) {
            d = za(b, d) || za(c, d);
            var e;
            "#" === d.charAt(0) ? (e = za(a, d), z(e) && (e = d)) : e = this.$$html5 ? d : "";
            bd(e, this);
            d = this.$$path;
            var f = /^\/[A-Z]:(\/.*)/;
            0 === e.indexOf(b) && (e = e.replace(b, ""));
            f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d);
            this.$$path = d;
            this.$$compose()
        };
        this.$$compose = function () {
            var c = Qb(this.$$search), e = this.$$hash ?
                "#" + rb(this.$$hash) : "";
            this.$$url = bc(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + (this.$$url ? a + this.$$url : "")
        };
        this.$$parseLinkUrl = function (a, c) {
            return Ha(b) == Ha(a) ? (this.$$parse(a), !0) : !1
        }
    }

    function cd(b, a) {
        this.$$html5 = !0;
        ec.apply(this, arguments);
        var c = cc(b);
        this.$$parseLinkUrl = function (d, e) {
            if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
            var f, g;
            b == Ha(d) ? f = d : (g = za(c, d)) ? f = b + a + g : c === d + "/" && (f = c);
            f && this.$$parse(f);
            return !!f
        };
        this.$$compose = function () {
            var c = Qb(this.$$search), e = this.$$hash ? "#" + rb(this.$$hash) :
                "";
            this.$$url = bc(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + a + this.$$url
        }
    }

    function Ib(b) {
        return function () {
            return this[b]
        }
    }

    function dd(b, a) {
        return function (c) {
            if (z(c)) return this[b];
            this[b] = a(c);
            this.$$compose();
            return this
        }
    }

    function Me() {
        var b = "", a = {enabled: !1, requireBase: !0, rewriteLinks: !0};
        this.hashPrefix = function (a) {
            return y(a) ? (b = a, this) : b
        };
        this.html5Mode = function (b) {
            return Wa(b) ? (a.enabled = b, this) : J(b) ? (Wa(b.enabled) && (a.enabled = b.enabled), Wa(b.requireBase) && (a.requireBase = b.requireBase), Wa(b.rewriteLinks) &&
            (a.rewriteLinks = b.rewriteLinks), this) : a
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (c, d, e, f, g) {
            function h(a, b, c) {
                var e = k.url(), f = k.$$state;
                try {
                    d.url(a, b, c), k.$$state = d.state()
                } catch (g) {
                    throw k.url(e), k.$$state = f, g;
                }
            }

            function l(a, b) {
                c.$broadcast("$locationChangeSuccess", k.absUrl(), a, k.$$state, b)
            }

            var k, m;
            m = d.baseHref();
            var p = d.url(), q;
            if (a.enabled) {
                if (!m && a.requireBase) throw Hb("nobase");
                q = p.substring(0, p.indexOf("/", p.indexOf("//") + 2)) + (m || "/");
                m = e.history ? dc : cd
            } else q =
                Ha(p), m = ec;
            k = new m(q, "#" + b);
            k.$$parseLinkUrl(p, p);
            k.$$state = d.state();
            var t = /^\s*(javascript|mailto):/i;
            f.on("click", function (b) {
                if (a.rewriteLinks && !b.ctrlKey && !b.metaKey && !b.shiftKey && 2 != b.which && 2 != b.button) {
                    for (var e = C(b.target); "a" !== ta(e[0]);) if (e[0] === f[0] || !(e = e.parent())[0]) return;
                    var h = e.prop("href"), l = e.attr("href") || e.attr("xlink:href");
                    J(h) && "[object SVGAnimatedString]" === h.toString() && (h = Ba(h.animVal).href);
                    t.test(h) || !h || e.attr("target") || b.isDefaultPrevented() || !k.$$parseLinkUrl(h,
                        l) || (b.preventDefault(), k.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                }
            });
            Gb(k.absUrl()) != Gb(p) && d.url(k.absUrl(), !0);
            var r = !0;
            d.onUrlChange(function (a, b) {
                c.$evalAsync(function () {
                    var d = k.absUrl(), e = k.$$state, f;
                    k.$$parse(a);
                    k.$$state = b;
                    f = c.$broadcast("$locationChangeStart", a, d, b, e).defaultPrevented;
                    k.absUrl() === a && (f ? (k.$$parse(d), k.$$state = e, h(d, !1, e)) : (r = !1, l(d, e)))
                });
                c.$$phase || c.$digest()
            });
            c.$watch(function () {
                var a = Gb(d.url()), b = Gb(k.absUrl()), f = d.state(), g = k.$$replace,
                    q = a !== b || k.$$html5 && e.history && f !== k.$$state;
                if (r || q) r = !1, c.$evalAsync(function () {
                    var b = k.absUrl(), d = c.$broadcast("$locationChangeStart", b, a, k.$$state, f).defaultPrevented;
                    k.absUrl() === b && (d ? (k.$$parse(a), k.$$state = f) : (q && h(b, g, f === k.$$state ? null : k.$$state), l(a, f)))
                });
                k.$$replace = !1
            });
            return k
        }]
    }

    function Ne() {
        var b = !0, a = this;
        this.debugEnabled = function (a) {
            return y(a) ? (b = a, this) : b
        };
        this.$get = ["$window", function (c) {
            function d(a) {
                a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ?
                    "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a
            }

            function e(a) {
                var b = c.console || {}, e = b[a] || b.log || B;
                a = !1;
                try {
                    a = !!e.apply
                } catch (l) {
                }
                return a ? function () {
                    var a = [];
                    s(arguments, function (b) {
                        a.push(d(b))
                    });
                    return e.apply(b, a)
                } : function (a, b) {
                    e(a, null == b ? "" : b)
                }
            }

            return {
                log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
                    var c = e("debug");
                    return function () {
                        b && c.apply(a, arguments)
                    }
                }()
            }
        }]
    }

    function sa(b, a) {
        if ("__defineGetter__" ===
            b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b) throw ka("isecfld", a);
        return b
    }

    function la(b, a) {
        if (b) {
            if (b.constructor === b) throw ka("isecfn", a);
            if (b.window === b) throw ka("isecwindow", a);
            if (b.children && (b.nodeName || b.prop && b.attr && b.find)) throw ka("isecdom", a);
            if (b === Object) throw ka("isecobj", a);
        }
        return b
    }

    function fc(b) {
        return b.constant
    }

    function hb(b, a, c, d, e) {
        la(b, e);
        la(a, e);
        c = c.split(".");
        for (var f, g = 0; 1 < c.length; g++) {
            f = sa(c.shift(), e);
            var h = 0 === g && a && a[f] ||
                b[f];
            h || (h = {}, b[f] = h);
            b = la(h, e)
        }
        f = sa(c.shift(), e);
        la(b[f], e);
        return b[f] = d
    }

    function Qa(b) {
        return "constructor" == b
    }

    function ed(b, a, c, d, e, f, g) {
        sa(b, f);
        sa(a, f);
        sa(c, f);
        sa(d, f);
        sa(e, f);
        var h = function (a) {
                return la(a, f)
            }, l = g || Qa(b) ? h : oa, k = g || Qa(a) ? h : oa, m = g || Qa(c) ? h : oa, p = g || Qa(d) ? h : oa,
            q = g || Qa(e) ? h : oa;
        return function (f, g) {
            var h = g && g.hasOwnProperty(b) ? g : f;
            if (null == h) return h;
            h = l(h[b]);
            if (!a) return h;
            if (null == h) return u;
            h = k(h[a]);
            if (!c) return h;
            if (null == h) return u;
            h = m(h[c]);
            if (!d) return h;
            if (null == h) return u;
            h = p(h[d]);
            return e ? null == h ? u : h = q(h[e]) : h
        }
    }

    function xf(b, a) {
        return function (c, d) {
            return b(c, d, la, a)
        }
    }

    function yf(b, a, c) {
        var d = a.expensiveChecks, e = d ? zf : Af, f = e[b];
        if (f) return f;
        var g = b.split("."), h = g.length;
        if (a.csp) f = 6 > h ? ed(g[0], g[1], g[2], g[3], g[4], c, d) : function (a, b) {
            var e = 0, f;
            do f = ed(g[e++], g[e++], g[e++], g[e++], g[e++], c, d)(a, b), b = u, a = f; while (e < h);
            return f
        }; else {
            var l = "";
            d && (l += "s = eso(s, fe);\nl = eso(l, fe);\n");
            var k = d;
            s(g, function (a, b) {
                sa(a, c);
                var e = (b ? "s" : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') +
                    "." + a;
                if (d || Qa(a)) e = "eso(" + e + ", fe)", k = !0;
                l += "if(s == null) return undefined;\ns=" + e + ";\n"
            });
            l += "return s;";
            a = new Function("s", "l", "eso", "fe", l);
            a.toString = da(l);
            k && (a = xf(a, c));
            f = a
        }
        f.sharedGetter = !0;
        f.assign = function (a, c, d) {
            return hb(a, d, b, c, b)
        };
        return e[b] = f
    }

    function gc(b) {
        return G(b.valueOf) ? b.valueOf() : Bf.call(b)
    }

    function Oe() {
        var b = fa(), a = fa();
        this.$get = ["$filter", "$sniffer", function (c, d) {
            function e(a) {
                var b = a;
                a.sharedGetter && (b = function (b, c) {
                    return a(b, c)
                }, b.literal = a.literal, b.constant = a.constant,
                    b.assign = a.assign);
                return b
            }

            function f(a, b) {
                for (var c = 0, d = a.length; c < d; c++) {
                    var e = a[c];
                    e.constant || (e.inputs ? f(e.inputs, b) : -1 === b.indexOf(e) && b.push(e))
                }
                return b
            }

            function g(a, b) {
                return null == a || null == b ? a === b : "object" === typeof a && (a = gc(a), "object" === typeof a) ? !1 : a === b || a !== a && b !== b
            }

            function h(a, b, c, d) {
                var e = d.$$inputs || (d.$$inputs = f(d.inputs, [])), h;
                if (1 === e.length) {
                    var l = g, e = e[0];
                    return a.$watch(function (a) {
                        var b = e(a);
                        g(b, l) || (h = d(a), l = b && gc(b));
                        return h
                    }, b, c)
                }
                for (var k = [], q = 0, p = e.length; q < p; q++) k[q] =
                    g;
                return a.$watch(function (a) {
                    for (var b = !1, c = 0, f = e.length; c < f; c++) {
                        var l = e[c](a);
                        if (b || (b = !g(l, k[c]))) k[c] = l && gc(l)
                    }
                    b && (h = d(a));
                    return h
                }, b, c)
            }

            function l(a, b, c, d) {
                var e, f;
                return e = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    f = a;
                    G(b) && b.apply(this, arguments);
                    y(a) && d.$$postDigest(function () {
                        y(f) && e()
                    })
                }, c)
            }

            function k(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    s(a, function (a) {
                        y(a) || (b = !1)
                    });
                    return b
                }

                var f, g;
                return f = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    g = a;
                    G(b) && b.call(this, a, c, d);
                    e(a) && d.$$postDigest(function () {
                        e(g) &&
                        f()
                    })
                }, c)
            }

            function m(a, b, c, d) {
                var e;
                return e = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    G(b) && b.apply(this, arguments);
                    e()
                }, c)
            }

            function p(a, b) {
                if (!b) return a;
                var c = a.$$watchDelegate, c = c !== k && c !== l ? function (c, d) {
                    var e = a(c, d);
                    return b(e, c, d)
                } : function (c, d) {
                    var e = a(c, d), f = b(e, c, d);
                    return y(e) ? f : e
                };
                a.$$watchDelegate && a.$$watchDelegate !== h ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = h, c.inputs = [a]);
                return c
            }

            var q = {csp: d.csp, expensiveChecks: !1}, t = {csp: d.csp, expensiveChecks: !0};
            return function (d, f, g) {
                var n, D, H;
                switch (typeof d) {
                    case "string":
                        H = d = d.trim();
                        var v = g ? a : b;
                        n = v[H];
                        n || (":" === d.charAt(0) && ":" === d.charAt(1) && (D = !0, d = d.substring(2)), g = g ? t : q, n = new hc(g), n = (new ib(n, c, g)).parse(d), n.constant ? n.$$watchDelegate = m : D ? (n = e(n), n.$$watchDelegate = n.literal ? k : l) : n.inputs && (n.$$watchDelegate = h), v[H] = n);
                        return p(n, f);
                    case "function":
                        return p(d, f);
                    default:
                        return p(B, f)
                }
            }
        }]
    }

    function Qe() {
        this.$get = ["$rootScope", "$exceptionHandler", function (b, a) {
            return fd(function (a) {
                    b.$evalAsync(a)
                },
                a)
        }]
    }

    function Re() {
        this.$get = ["$browser", "$exceptionHandler", function (b, a) {
            return fd(function (a) {
                b.defer(a)
            }, a)
        }]
    }

    function fd(b, a) {
        function c(a, b, c) {
            function d(b) {
                return function (c) {
                    e || (e = !0, b.call(a, c))
                }
            }

            var e = !1;
            return [d(b), d(c)]
        }

        function d() {
            this.$$state = {status: 0}
        }

        function e(a, b) {
            return function (c) {
                b.call(a, c)
            }
        }

        function f(c) {
            !c.processScheduled && c.pending && (c.processScheduled = !0, b(function () {
                var b, d, e;
                e = c.pending;
                c.processScheduled = !1;
                c.pending = u;
                for (var f = 0, g = e.length; f < g; ++f) {
                    d = e[f][0];
                    b = e[f][c.status];
                    try {
                        G(b) ? d.resolve(b(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value)
                    } catch (h) {
                        d.reject(h), a(h)
                    }
                }
            }))
        }

        function g() {
            this.promise = new d;
            this.resolve = e(this, this.resolve);
            this.reject = e(this, this.reject);
            this.notify = e(this, this.notify)
        }

        var h = M("$q", TypeError);
        d.prototype = {
            then: function (a, b, c) {
                var d = new g;
                this.$$state.pending = this.$$state.pending || [];
                this.$$state.pending.push([d, a, b, c]);
                0 < this.$$state.status && f(this.$$state);
                return d.promise
            }, "catch": function (a) {
                return this.then(null, a)
            }, "finally": function (a,
                                    b) {
                return this.then(function (b) {
                    return k(b, !0, a)
                }, function (b) {
                    return k(b, !1, a)
                }, b)
            }
        };
        g.prototype = {
            resolve: function (a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(h("qcycle", a)) : this.$$resolve(a))
            }, $$resolve: function (b) {
                var d, e;
                e = c(this, this.$$resolve, this.$$reject);
                try {
                    if (J(b) || G(b)) d = b && b.then;
                    G(d) ? (this.promise.$$state.status = -1, d.call(b, e[0], e[1], this.notify)) : (this.promise.$$state.value = b, this.promise.$$state.status = 1, f(this.promise.$$state))
                } catch (g) {
                    e[1](g), a(g)
                }
            }, reject: function (a) {
                this.promise.$$state.status ||
                this.$$reject(a)
            }, $$reject: function (a) {
                this.promise.$$state.value = a;
                this.promise.$$state.status = 2;
                f(this.promise.$$state)
            }, notify: function (c) {
                var d = this.promise.$$state.pending;
                0 >= this.promise.$$state.status && d && d.length && b(function () {
                    for (var b, e, f = 0, g = d.length; f < g; f++) {
                        e = d[f][0];
                        b = d[f][3];
                        try {
                            e.notify(G(b) ? b(c) : c)
                        } catch (h) {
                            a(h)
                        }
                    }
                })
            }
        };
        var l = function (a, b) {
            var c = new g;
            b ? c.resolve(a) : c.reject(a);
            return c.promise
        }, k = function (a, b, c) {
            var d = null;
            try {
                G(c) && (d = c())
            } catch (e) {
                return l(e, !1)
            }
            return d && G(d.then) ?
                d.then(function () {
                    return l(a, b)
                }, function (a) {
                    return l(a, !1)
                }) : l(a, b)
        }, m = function (a, b, c, d) {
            var e = new g;
            e.resolve(a);
            return e.promise.then(b, c, d)
        }, p = function t(a) {
            if (!G(a)) throw h("norslvr", a);
            if (!(this instanceof t)) return new t(a);
            var b = new g;
            a(function (a) {
                b.resolve(a)
            }, function (a) {
                b.reject(a)
            });
            return b.promise
        };
        p.defer = function () {
            return new g
        };
        p.reject = function (a) {
            var b = new g;
            b.reject(a);
            return b.promise
        };
        p.when = m;
        p.all = function (a) {
            var b = new g, c = 0, d = E(a) ? [] : {};
            s(a, function (a, e) {
                c++;
                m(a).then(function (a) {
                    d.hasOwnProperty(e) ||
                    (d[e] = a, --c || b.resolve(d))
                }, function (a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            });
            0 === c && b.resolve(d);
            return b.promise
        };
        return p
    }

    function $e() {
        this.$get = ["$window", "$timeout", function (b, a) {
            var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame,
                d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.webkitCancelRequestAnimationFrame,
                e = !!c, f = e ? function (a) {
                    var b = c(a);
                    return function () {
                        d(b)
                    }
                } : function (b) {
                    var c = a(b, 16.66, !1);
                    return function () {
                        a.cancel(c)
                    }
                };
            f.supported = e;
            return f
        }]
    }

    function Pe() {
        var b =
            10, a = M("$rootScope"), c = null, d = null;
        this.digestTtl = function (a) {
            arguments.length && (b = a);
            return b
        };
        this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (e, f, g, h) {
            function l() {
                this.$id = ++ob;
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this.$root = this;
                this.$$destroyed = !1;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$isolateBindings = null
            }

            function k(b) {
                if (r.$$phase) throw a("inprog", r.$$phase);
                r.$$phase = b
            }

            function m(a,
                       b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
            }

            function p() {
            }

            function q() {
                for (; n.length;) try {
                    n.shift()()
                } catch (a) {
                    f(a)
                }
                d = null
            }

            function t() {
                null === d && (d = h.defer(function () {
                    r.$apply(q)
                }))
            }

            l.prototype = {
                constructor: l, $new: function (a, b) {
                    function c() {
                        d.$$destroyed = !0
                    }

                    var d;
                    b = b || this;
                    a ? (d = new l, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = function () {
                        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                        this.$$listeners =
                            {};
                        this.$$listenerCount = {};
                        this.$id = ++ob;
                        this.$$ChildScope = null
                    }, this.$$ChildScope.prototype = this), d = new this.$$ChildScope);
                    d.$parent = b;
                    d.$$prevSibling = b.$$childTail;
                    b.$$childHead ? (b.$$childTail.$$nextSibling = d, b.$$childTail = d) : b.$$childHead = b.$$childTail = d;
                    (a || b != this) && d.$on("$destroy", c);
                    return d
                }, $watch: function (a, b, d) {
                    var e = g(a);
                    if (e.$$watchDelegate) return e.$$watchDelegate(this, b, d, e);
                    var f = this.$$watchers, h = {fn: b, last: p, get: e, exp: a, eq: !!d};
                    c = null;
                    G(b) || (h.fn = B);
                    f || (f = this.$$watchers = []);
                    f.unshift(h);
                    return function () {
                        Xa(f, h);
                        c = null
                    }
                }, $watchGroup: function (a, b) {
                    function c() {
                        h = !1;
                        l ? (l = !1, b(e, e, g)) : b(e, d, g)
                    }

                    var d = Array(a.length), e = Array(a.length), f = [], g = this, h = !1, l = !0;
                    if (!a.length) {
                        var k = !0;
                        g.$evalAsync(function () {
                            k && b(e, e, g)
                        });
                        return function () {
                            k = !1
                        }
                    }
                    if (1 === a.length) return this.$watch(a[0], function (a, c, f) {
                        e[0] = a;
                        d[0] = c;
                        b(e, a === c ? e : d, f)
                    });
                    s(a, function (a, b) {
                        var l = g.$watch(a, function (a, f) {
                            e[b] = a;
                            d[b] = f;
                            h || (h = !0, g.$evalAsync(c))
                        });
                        f.push(l)
                    });
                    return function () {
                        for (; f.length;) f.shift()()
                    }
                }, $watchCollection: function (a,
                                               b) {
                    function c(a) {
                        e = a;
                        var b, d, g, h;
                        if (!z(e)) {
                            if (J(e)) if (Ta(e)) for (f !== q && (f = q, t = f.length = 0, k++), a = e.length, t !== a && (k++, f.length = t = a), b = 0; b < a; b++) h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (k++, f[b] = g); else {
                                f !== m && (f = m = {}, t = 0, k++);
                                a = 0;
                                for (b in e) e.hasOwnProperty(b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (k++, f[b] = g)) : (t++, f[b] = g, k++));
                                if (t > a) for (b in k++, f) e.hasOwnProperty(b) || (t--, delete f[b])
                            } else f !== e && (f = e, k++);
                            return k
                        }
                    }

                    c.$stateful = !0;
                    var d = this, e, f, h, l = 1 < b.length, k = 0, p = g(a, c), q = [], m =
                        {}, n = !0, t = 0;
                    return this.$watch(p, function () {
                        n ? (n = !1, b(e, e, d)) : b(e, h, d);
                        if (l) if (J(e)) if (Ta(e)) {
                            h = Array(e.length);
                            for (var a = 0; a < e.length; a++) h[a] = e[a]
                        } else for (a in h = {}, e) sc.call(e, a) && (h[a] = e[a]); else h = e
                    })
                }, $digest: function () {
                    var e, g, l, m, n, t, s = b, I, W = [], y, O;
                    k("$digest");
                    h.$$checkUrlChange();
                    this === r && null !== d && (h.defer.cancel(d), q());
                    c = null;
                    do {
                        t = !1;
                        for (I = this; S.length;) {
                            try {
                                O = S.shift(), O.scope.$eval(O.expression, O.locals)
                            } catch (w) {
                                f(w)
                            }
                            c = null
                        }
                        a:do {
                            if (m = I.$$watchers) for (n = m.length; n--;) try {
                                if (e = m[n]) if ((g =
                                        e.get(I)) !== (l = e.last) && !(e.eq ? ea(g, l) : "number" === typeof g && "number" === typeof l && isNaN(g) && isNaN(l))) t = !0, c = e, e.last = e.eq ? Ea(g, null) : g, e.fn(g, l === p ? g : l, I), 5 > s && (y = 4 - s, W[y] || (W[y] = []), W[y].push({
                                    msg: G(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp,
                                    newVal: g,
                                    oldVal: l
                                })); else if (e === c) {
                                    t = !1;
                                    break a
                                }
                            } catch (C) {
                                f(C)
                            }
                            if (!(m = I.$$childHead || I !== this && I.$$nextSibling)) for (; I !== this && !(m = I.$$nextSibling);) I = I.$parent
                        } while (I = m);
                        if ((t || S.length) && !s--) throw r.$$phase = null, a("infdig", b, W);
                    } while (t || S.length);
                    for (r.$$phase = null; u.length;) try {
                        u.shift()()
                    } catch (B) {
                        f(B)
                    }
                }, $destroy: function () {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        if (this !== r) {
                            for (var b in this.$$listenerCount) m(this, this.$$listenerCount[b], b);
                            a.$$childHead == this && (a.$$childHead = this.$$nextSibling);
                            a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
                            this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                            this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                            this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = B;
                            this.$on = this.$watch = this.$watchGroup = function () {
                                return B
                            };
                            this.$$listeners = {};
                            this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                        }
                    }
                }, $eval: function (a, b) {
                    return g(a)(this, b)
                }, $evalAsync: function (a, b) {
                    r.$$phase || S.length || h.defer(function () {
                        S.length && r.$digest()
                    });
                    S.push({scope: this, expression: a, locals: b})
                }, $$postDigest: function (a) {
                    u.push(a)
                }, $apply: function (a) {
                    try {
                        return k("$apply"),
                            this.$eval(a)
                    } catch (b) {
                        f(b)
                    } finally {
                        r.$$phase = null;
                        try {
                            r.$digest()
                        } catch (c) {
                            throw f(c), c;
                        }
                    }
                }, $applyAsync: function (a) {
                    function b() {
                        c.$eval(a)
                    }

                    var c = this;
                    a && n.push(b);
                    t()
                }, $on: function (a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []);
                    c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function () {
                        var d = c.indexOf(b);
                        -1 !== d && (c[d] = null, m(e, 1, a))
                    }
                }, $emit: function (a, b) {
                    var c = [], d, e = this, g = !1, h = {
                        name: a, targetScope: e,
                        stopPropagation: function () {
                            g = !0
                        }, preventDefault: function () {
                            h.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, l = Ya([h], arguments, 1), k, m;
                    do {
                        d = e.$$listeners[a] || c;
                        h.currentScope = e;
                        k = 0;
                        for (m = d.length; k < m; k++) if (d[k]) try {
                            d[k].apply(null, l)
                        } catch (p) {
                            f(p)
                        } else d.splice(k, 1), k--, m--;
                        if (g) return h.currentScope = null, h;
                        e = e.$parent
                    } while (e);
                    h.currentScope = null;
                    return h
                }, $broadcast: function (a, b) {
                    var c = this, d = this, e = {
                        name: a, targetScope: this, preventDefault: function () {
                            e.defaultPrevented = !0
                        }, defaultPrevented: !1
                    };
                    if (!this.$$listenerCount[a]) return e;
                    for (var g = Ya([e], arguments, 1), h, l; c = d;) {
                        e.currentScope = c;
                        d = c.$$listeners[a] || [];
                        h = 0;
                        for (l = d.length; h < l; h++) if (d[h]) try {
                            d[h].apply(null, g)
                        } catch (k) {
                            f(k)
                        } else d.splice(h, 1), h--, l--;
                        if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (; c !== this && !(d = c.$$nextSibling);) c = c.$parent
                    }
                    e.currentScope = null;
                    return e
                }
            };
            var r = new l, S = r.$$asyncQueue = [], u = r.$$postDigestQueue = [], n = r.$$applyAsyncQueue = [];
            return r
        }]
    }

    function Sd() {
        var b = /^\s*(https?|ftp|mailto|tel|file):/, a = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (a) {
            return y(a) ? (b = a, this) : b
        };
        this.imgSrcSanitizationWhitelist = function (b) {
            return y(b) ? (a = b, this) : a
        };
        this.$get = function () {
            return function (c, d) {
                var e = d ? a : b, f;
                f = Ba(c).href;
                return "" === f || f.match(e) ? c : "unsafe:" + f
            }
        }
    }

    function Cf(b) {
        if ("self" === b) return b;
        if (x(b)) {
            if (-1 < b.indexOf("***")) throw Ca("iwcard", b);
            b = gd(b).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return new RegExp("^" + b + "$")
        }
        if (pb(b)) return new RegExp("^" + b.source + "$");
        throw Ca("imatcher");
    }

    function hd(b) {
        var a =
            [];
        y(b) && s(b, function (b) {
            a.push(Cf(b))
        });
        return a
    }

    function Te() {
        this.SCE_CONTEXTS = ma;
        var b = ["self"], a = [];
        this.resourceUrlWhitelist = function (a) {
            arguments.length && (b = hd(a));
            return b
        };
        this.resourceUrlBlacklist = function (b) {
            arguments.length && (a = hd(b));
            return a
        };
        this.$get = ["$injector", function (c) {
            function d(a, b) {
                return "self" === a ? $c(b) : !!a.exec(b.href)
            }

            function e(a) {
                var b = function (a) {
                    this.$$unwrapTrustedValue = function () {
                        return a
                    }
                };
                a && (b.prototype = new a);
                b.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                };
                b.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                };
                return b
            }

            var f = function (a) {
                throw Ca("unsafe");
            };
            c.has("$sanitize") && (f = c.get("$sanitize"));
            var g = e(), h = {};
            h[ma.HTML] = e(g);
            h[ma.CSS] = e(g);
            h[ma.URL] = e(g);
            h[ma.JS] = e(g);
            h[ma.RESOURCE_URL] = e(h[ma.URL]);
            return {
                trustAs: function (a, b) {
                    var c = h.hasOwnProperty(a) ? h[a] : null;
                    if (!c) throw Ca("icontext", a, b);
                    if (null === b || b === u || "" === b) return b;
                    if ("string" !== typeof b) throw Ca("itype", a);
                    return new c(b)
                }, getTrusted: function (c, e) {
                    if (null ===
                        e || e === u || "" === e) return e;
                    var g = h.hasOwnProperty(c) ? h[c] : null;
                    if (g && e instanceof g) return e.$$unwrapTrustedValue();
                    if (c === ma.RESOURCE_URL) {
                        var g = Ba(e.toString()), p, q, t = !1;
                        p = 0;
                        for (q = b.length; p < q; p++) if (d(b[p], g)) {
                            t = !0;
                            break
                        }
                        if (t) for (p = 0, q = a.length; p < q; p++) if (d(a[p], g)) {
                            t = !1;
                            break
                        }
                        if (t) return e;
                        throw Ca("insecurl", e.toString());
                    }
                    if (c === ma.HTML) return f(e);
                    throw Ca("unsafe");
                }, valueOf: function (a) {
                    return a instanceof g ? a.$$unwrapTrustedValue() : a
                }
            }
        }]
    }

    function Se() {
        var b = !0;
        this.enabled = function (a) {
            arguments.length &&
            (b = !!a);
            return b
        };
        this.$get = ["$parse", "$sceDelegate", function (a, c) {
            if (b && 8 > Ra) throw Ca("iequirks");
            var d = qa(ma);
            d.isEnabled = function () {
                return b
            };
            d.trustAs = c.trustAs;
            d.getTrusted = c.getTrusted;
            d.valueOf = c.valueOf;
            b || (d.trustAs = d.getTrusted = function (a, b) {
                return b
            }, d.valueOf = oa);
            d.parseAs = function (b, c) {
                var e = a(c);
                return e.literal && e.constant ? e : a(c, function (a) {
                    return d.getTrusted(b, a)
                })
            };
            var e = d.parseAs, f = d.getTrusted, g = d.trustAs;
            s(ma, function (a, b) {
                var c = R(b);
                d[db("parse_as_" + c)] = function (b) {
                    return e(a,
                        b)
                };
                d[db("get_trusted_" + c)] = function (b) {
                    return f(a, b)
                };
                d[db("trust_as_" + c)] = function (b) {
                    return g(a, b)
                }
            });
            return d
        }]
    }

    function Ue() {
        this.$get = ["$window", "$document", function (b, a) {
            var c = {}, d = $((/android (\d+)/.exec(R((b.navigator || {}).userAgent)) || [])[1]),
                e = /Boxee/i.test((b.navigator || {}).userAgent), f = a[0] || {}, g, h = /^(Moz|webkit|ms)(?=[A-Z])/,
                l = f.body && f.body.style, k = !1, m = !1;
            if (l) {
                for (var p in l) if (k = h.exec(p)) {
                    g = k[0];
                    g = g.substr(0, 1).toUpperCase() + g.substr(1);
                    break
                }
                g || (g = "WebkitOpacity" in l && "webkit");
                k = !!("transition" in l || g + "Transition" in l);
                m = !!("animation" in l || g + "Animation" in l);
                !d || k && m || (k = x(f.body.style.webkitTransition), m = x(f.body.style.webkitAnimation))
            }
            return {
                history: !(!b.history || !b.history.pushState || 4 > d || e), hasEvent: function (a) {
                    if ("input" === a && 11 >= Ra) return !1;
                    if (z(c[a])) {
                        var b = f.createElement("div");
                        c[a] = "on" + a in b
                    }
                    return c[a]
                }, csp: bb(), vendorPrefix: g, transitions: k, animations: m, android: d
            }
        }]
    }

    function We() {
        this.$get = ["$templateCache", "$http", "$q", function (b, a, c) {
            function d(e, f) {
                d.totalPendingRequests++;
                var g = a.defaults && a.defaults.transformResponse;
                E(g) ? g = g.filter(function (a) {
                    return a !== Zb
                }) : g === Zb && (g = null);
                return a.get(e, {cache: b, transformResponse: g}).finally(function () {
                    d.totalPendingRequests--
                }).then(function (a) {
                    return a.data
                }, function (a) {
                    if (!f) throw ia("tpload", e);
                    return c.reject(a)
                })
            }

            d.totalPendingRequests = 0;
            return d
        }]
    }

    function Xe() {
        this.$get = ["$rootScope", "$browser", "$location", function (b, a, c) {
            return {
                findBindings: function (a, b, c) {
                    a = a.getElementsByClassName("ng-binding");
                    var g = [];
                    s(a, function (a) {
                        var d =
                            aa.element(a).data("$binding");
                        d && s(d, function (d) {
                            c ? (new RegExp("(^|\\s)" + gd(b) + "(\\s|\\||$)")).test(d) && g.push(a) : -1 != d.indexOf(b) && g.push(a)
                        })
                    });
                    return g
                }, findModels: function (a, b, c) {
                    for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
                        var l = a.querySelectorAll("[" + g[h] + "model" + (c ? "=" : "*=") + '"' + b + '"]');
                        if (l.length) return l
                    }
                }, getLocation: function () {
                    return c.url()
                }, setLocation: function (a) {
                    a !== c.url() && (c.url(a), b.$digest())
                }, whenStable: function (b) {
                    a.notifyWhenNoOutstandingRequests(b)
                }
            }
        }]
    }

    function Ye() {
        this.$get =
            ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (b, a, c, d, e) {
                function f(f, l, k) {
                    var m = y(k) && !k, p = (m ? d : c).defer(), q = p.promise;
                    l = a.defer(function () {
                        try {
                            p.resolve(f())
                        } catch (a) {
                            p.reject(a), e(a)
                        } finally {
                            delete g[q.$$timeoutId]
                        }
                        m || b.$apply()
                    }, l);
                    q.$$timeoutId = l;
                    g[l] = p;
                    return q
                }

                var g = {};
                f.cancel = function (b) {
                    return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"), delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1
                };
                return f
            }]
    }

    function Ba(b) {
        Ra && (Y.setAttribute("href", b), b = Y.href);
        Y.setAttribute("href", b);
        return {
            href: Y.href,
            protocol: Y.protocol ? Y.protocol.replace(/:$/, "") : "",
            host: Y.host,
            search: Y.search ? Y.search.replace(/^\?/, "") : "",
            hash: Y.hash ? Y.hash.replace(/^#/, "") : "",
            hostname: Y.hostname,
            port: Y.port,
            pathname: "/" === Y.pathname.charAt(0) ? Y.pathname : "/" + Y.pathname
        }
    }

    function $c(b) {
        b = x(b) ? Ba(b) : b;
        return b.protocol === id.protocol && b.host === id.host
    }

    function Ze() {
        this.$get = da(P)
    }

    function Ec(b) {
        function a(c, d) {
            if (J(c)) {
                var e = {};
                s(c, function (b, c) {
                    e[c] = a(c, b)
                });
                return e
            }
            return b.factory(c +
                "Filter", d)
        }

        this.register = a;
        this.$get = ["$injector", function (a) {
            return function (b) {
                return a.get(b + "Filter")
            }
        }];
        a("currency", jd);
        a("date", kd);
        a("filter", Df);
        a("json", Ef);
        a("limitTo", Ff);
        a("lowercase", Gf);
        a("number", ld);
        a("orderBy", md);
        a("uppercase", Hf)
    }

    function Df() {
        return function (b, a, c) {
            if (!E(b)) return b;
            var d;
            switch (typeof a) {
                case "function":
                    break;
                case "boolean":
                case "number":
                case "string":
                    d = !0;
                case "object":
                    a = If(a, c, d);
                    break;
                default:
                    return b
            }
            return b.filter(a)
        }
    }

    function If(b, a, c) {
        var d = J(b) && "$" in
            b;
        !0 === a ? a = ea : G(a) || (a = function (a, b) {
            if (J(a) || J(b)) return !1;
            a = R("" + a);
            b = R("" + b);
            return -1 !== a.indexOf(b)
        });
        return function (e) {
            return d && !J(e) ? Ia(e, b.$, a, !1) : Ia(e, b, a, c)
        }
    }

    function Ia(b, a, c, d, e) {
        var f = typeof b, g = typeof a;
        if ("string" === g && "!" === a.charAt(0)) return !Ia(b, a.substring(1), c, d);
        if (E(b)) return b.some(function (b) {
            return Ia(b, a, c, d)
        });
        switch (f) {
            case "object":
                var h;
                if (d) {
                    for (h in b) if ("$" !== h.charAt(0) && Ia(b[h], a, c, !0)) return !0;
                    return e ? !1 : Ia(b, a, c, !1)
                }
                if ("object" === g) {
                    for (h in a) if (e = a[h], !G(e) &&
                        (f = "$" === h, !Ia(f ? b : b[h], e, c, f, f))) return !1;
                    return !0
                }
                return c(b, a);
            case "function":
                return !1;
            default:
                return c(b, a)
        }
    }

    function jd(b) {
        var a = b.NUMBER_FORMATS;
        return function (b, d, e) {
            z(d) && (d = a.CURRENCY_SYM);
            z(e) && (e = a.PATTERNS[1].maxFrac);
            return null == b ? b : nd(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, e).replace(/\u00A4/g, d)
        }
    }

    function ld(b) {
        var a = b.NUMBER_FORMATS;
        return function (b, d) {
            return null == b ? b : nd(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
        }
    }

    function nd(b, a, c, d, e) {
        if (!isFinite(b) || J(b)) return "";
        var f =
            0 > b;
        b = Math.abs(b);
        var g = b + "", h = "", l = [], k = !1;
        if (-1 !== g.indexOf("e")) {
            var m = g.match(/([\d\.]+)e(-?)(\d+)/);
            m && "-" == m[2] && m[3] > e + 1 ? b = 0 : (h = g, k = !0)
        }
        if (k) 0 < e && 1 > b && (h = b.toFixed(e), b = parseFloat(h)); else {
            g = (g.split(od)[1] || "").length;
            z(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));
            b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);
            var g = ("" + b).split(od), k = g[0], g = g[1] || "", p = 0, q = a.lgSize, t = a.gSize;
            if (k.length >= q + t) for (p = k.length - q, m = 0; m < p; m++) 0 === (p - m) % t && 0 !== m && (h += c), h += k.charAt(m);
            for (m = p; m < k.length; m++) 0 ===
            (k.length - m) % q && 0 !== m && (h += c), h += k.charAt(m);
            for (; g.length < e;) g += "0";
            e && "0" !== e && (h += d + g.substr(0, e))
        }
        0 === b && (f = !1);
        l.push(f ? a.negPre : a.posPre, h, f ? a.negSuf : a.posSuf);
        return l.join("")
    }

    function Jb(b, a, c) {
        var d = "";
        0 > b && (d = "-", b = -b);
        for (b = "" + b; b.length < a;) b = "0" + b;
        c && (b = b.substr(b.length - a));
        return d + b
    }

    function Z(b, a, c, d) {
        c = c || 0;
        return function (e) {
            e = e["get" + b]();
            if (0 < c || e > -c) e += c;
            0 === e && -12 == c && (e = 12);
            return Jb(e, a, d)
        }
    }

    function Kb(b, a) {
        return function (c, d) {
            var e = c["get" + b](), f = vb(a ? "SHORT" + b : b);
            return d[f][e]
        }
    }

    function pd(b) {
        var a = (new Date(b, 0, 1)).getDay();
        return new Date(b, 0, (4 >= a ? 5 : 12) - a)
    }

    function qd(b) {
        return function (a) {
            var c = pd(a.getFullYear());
            a = +new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay())) - +c;
            a = 1 + Math.round(a / 6048E5);
            return Jb(a, b)
        }
    }

    function kd(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                a = new Date(0);
                var f = 0, g = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, l = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (f = $(b[9] + b[10]), g = $(b[9] + b[11]));
                h.call(a, $(b[1]), $(b[2]) - 1, $(b[3]));
                f = $(b[4] || 0) - f;
                g = $(b[5] ||
                    0) - g;
                h = $(b[6] || 0);
                b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
                l.call(a, f, g, h, b)
            }
            return a
        }

        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, e, f) {
            var g = "", h = [], l, k;
            e = e || "mediumDate";
            e = b.DATETIME_FORMATS[e] || e;
            x(c) && (c = Jf.test(c) ? $(c) : a(c));
            V(c) && (c = new Date(c));
            if (!pa(c)) return c;
            for (; e;) (k = Kf.exec(e)) ? (h = Ya(h, k, 1), e = h.pop()) : (h.push(e), e = null);
            f && "UTC" === f && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset()));
            s(h, function (a) {
                l = Lf[a];
                g += l ? l(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return g
        }
    }

    function Ef() {
        return function (b, a) {
            z(a) && (a = 2);
            return $a(b, a)
        }
    }

    function Ff() {
        return function (b, a) {
            V(b) && (b = b.toString());
            return E(b) || x(b) ? (a = Infinity === Math.abs(Number(a)) ? Number(a) : $(a)) ? 0 < a ? b.slice(0, a) : b.slice(a) : x(b) ? "" : [] : b
        }
    }

    function md(b) {
        return function (a, c, d) {
            function e(a, b) {
                return b ? function (b, c) {
                    return a(c, b)
                } : a
            }

            function f(a) {
                switch (typeof a) {
                    case "number":
                    case "boolean":
                    case "string":
                        return !0;
                    default:
                        return !1
                }
            }

            function g(a) {
                return null === a ? "null" : "function" === typeof a.valueOf && (a = a.valueOf(), f(a)) || "function" === typeof a.toString && (a = a.toString(), f(a)) ? a : ""
            }

            function h(a, b) {
                var c = typeof a, d = typeof b;
                c === d && "object" === c && (a = g(a), b = g(b));
                return c === d ? ("string" === c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1
            }

            if (!Ta(a)) return a;
            c = E(c) ? c : [c];
            0 === c.length && (c = ["+"]);
            c = c.map(function (a) {
                var c = !1, d = a || oa;
                if (x(a)) {
                    if ("+" == a.charAt(0) || "-" == a.charAt(0)) c = "-" == a.charAt(0), a = a.substring(1);
                    if ("" === a) return e(h, c);
                    d = b(a);
                    if (d.constant) {
                        var f = d();
                        return e(function (a, b) {
                            return h(a[f], b[f])
                        }, c)
                    }
                }
                return e(function (a, b) {
                    return h(d(a), d(b))
                }, c)
            });
            return Za.call(a).sort(e(function (a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e) return e
                }
                return 0
            }, d))
        }
    }

    function Ja(b) {
        G(b) && (b = {link: b});
        b.restrict = b.restrict || "AC";
        return da(b)
    }

    function rd(b, a, c, d, e) {
        var f = this, g = [], h = f.$$parentForm = b.parent().controller("form") || Lb;
        f.$error = {};
        f.$$success = {};
        f.$pending = u;
        f.$name = e(a.name || a.ngForm ||
            "")(c);
        f.$dirty = !1;
        f.$pristine = !0;
        f.$valid = !0;
        f.$invalid = !1;
        f.$submitted = !1;
        h.$addControl(f);
        f.$rollbackViewValue = function () {
            s(g, function (a) {
                a.$rollbackViewValue()
            })
        };
        f.$commitViewValue = function () {
            s(g, function (a) {
                a.$commitViewValue()
            })
        };
        f.$addControl = function (a) {
            Ma(a.$name, "input");
            g.push(a);
            a.$name && (f[a.$name] = a)
        };
        f.$$renameControl = function (a, b) {
            var c = a.$name;
            f[c] === a && delete f[c];
            f[b] = a;
            a.$name = b
        };
        f.$removeControl = function (a) {
            a.$name && f[a.$name] === a && delete f[a.$name];
            s(f.$pending, function (b, c) {
                f.$setValidity(c,
                    null, a)
            });
            s(f.$error, function (b, c) {
                f.$setValidity(c, null, a)
            });
            s(f.$$success, function (b, c) {
                f.$setValidity(c, null, a)
            });
            Xa(g, a)
        };
        sd({
            ctrl: this, $element: b, set: function (a, b, c) {
                var d = a[b];
                d ? -1 === d.indexOf(c) && d.push(c) : a[b] = [c]
            }, unset: function (a, b, c) {
                var d = a[b];
                d && (Xa(d, c), 0 === d.length && delete a[b])
            }, parentForm: h, $animate: d
        });
        f.$setDirty = function () {
            d.removeClass(b, Sa);
            d.addClass(b, Mb);
            f.$dirty = !0;
            f.$pristine = !1;
            h.$setDirty()
        };
        f.$setPristine = function () {
            d.setClass(b, Sa, Mb + " ng-submitted");
            f.$dirty = !1;
            f.$pristine =
                !0;
            f.$submitted = !1;
            s(g, function (a) {
                a.$setPristine()
            })
        };
        f.$setUntouched = function () {
            s(g, function (a) {
                a.$setUntouched()
            })
        };
        f.$setSubmitted = function () {
            d.addClass(b, "ng-submitted");
            f.$submitted = !0;
            h.$setSubmitted()
        }
    }

    function ic(b) {
        b.$formatters.push(function (a) {
            return b.$isEmpty(a) ? a : a.toString()
        })
    }

    function jb(b, a, c, d, e, f) {
        var g = R(a[0].type);
        if (!e.android) {
            var h = !1;
            a.on("compositionstart", function (a) {
                h = !0
            });
            a.on("compositionend", function () {
                h = !1;
                l()
            })
        }
        var l = function (b) {
            k && (f.defer.cancel(k), k = null);
            if (!h) {
                var e =
                    a.val();
                b = b && b.type;
                "password" === g || c.ngTrim && "false" === c.ngTrim || (e = T(e));
                (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, b)
            }
        };
        if (e.hasEvent("input")) a.on("input", l); else {
            var k, m = function (a, b, c) {
                k || (k = f.defer(function () {
                    k = null;
                    b && b.value === c || l(a)
                }))
            };
            a.on("keydown", function (a) {
                var b = a.keyCode;
                91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value)
            });
            if (e.hasEvent("paste")) a.on("paste cut", m)
        }
        a.on("change", l);
        d.$render = function () {
            a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
        }
    }

    function Nb(b, a) {
        return function (c, d) {
            var e, f;
            if (pa(c)) return c;
            if (x(c)) {
                '"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1));
                if (Mf.test(c)) return new Date(c);
                b.lastIndex = 0;
                if (e = b.exec(c)) return e.shift(), f = d ? {
                    yyyy: d.getFullYear(),
                    MM: d.getMonth() + 1,
                    dd: d.getDate(),
                    HH: d.getHours(),
                    mm: d.getMinutes(),
                    ss: d.getSeconds(),
                    sss: d.getMilliseconds() / 1E3
                } : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, s(e, function (b, c) {
                    c < a.length && (f[a[c]] = +b)
                }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0,
                    1E3 * f.sss || 0)
            }
            return NaN
        }
    }

    function kb(b, a, c, d) {
        return function (e, f, g, h, l, k, m) {
            function p(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime())
            }

            function q(a) {
                return y(a) ? pa(a) ? a : c(a) : u
            }

            td(e, f, g, h);
            jb(e, f, g, h, l, k);
            var t = h && h.$options && h.$options.timezone, r;
            h.$$parserName = b;
            h.$parsers.push(function (b) {
                return h.$isEmpty(b) ? null : a.test(b) ? (b = c(b, r), "UTC" === t && b.setMinutes(b.getMinutes() - b.getTimezoneOffset()), b) : u
            });
            h.$formatters.push(function (a) {
                if (a && !pa(a)) throw Ob("datefmt", a);
                if (p(a)) {
                    if ((r = a) && "UTC" ===
                        t) {
                        var b = 6E4 * r.getTimezoneOffset();
                        r = new Date(r.getTime() + b)
                    }
                    return m("date")(a, d, t)
                }
                r = null;
                return ""
            });
            if (y(g.min) || g.ngMin) {
                var s;
                h.$validators.min = function (a) {
                    return !p(a) || z(s) || c(a) >= s
                };
                g.$observe("min", function (a) {
                    s = q(a);
                    h.$validate()
                })
            }
            if (y(g.max) || g.ngMax) {
                var K;
                h.$validators.max = function (a) {
                    return !p(a) || z(K) || c(a) <= K
                };
                g.$observe("max", function (a) {
                    K = q(a);
                    h.$validate()
                })
            }
        }
    }

    function td(b, a, c, d) {
        (d.$$hasNativeValidators = J(a[0].validity)) && d.$parsers.push(function (b) {
            var c = a.prop("validity") || {};
            return c.badInput && !c.typeMismatch ? u : b
        })
    }

    function ud(b, a, c, d, e) {
        if (y(d)) {
            b = b(d);
            if (!b.constant) throw M("ngModel")("constexpr", c, d);
            return b(a)
        }
        return e
    }

    function jc(b, a) {
        b = "ngClass" + b;
        return ["$animate", function (c) {
            function d(a, b) {
                var c = [], d = 0;
                a:for (; d < a.length; d++) {
                    for (var e = a[d], m = 0; m < b.length; m++) if (e == b[m]) continue a;
                    c.push(e)
                }
                return c
            }

            function e(a) {
                if (!E(a)) {
                    if (x(a)) return a.split(" ");
                    if (J(a)) {
                        var b = [];
                        s(a, function (a, c) {
                            a && (b = b.concat(c.split(" ")))
                        });
                        return b
                    }
                }
                return a
            }

            return {
                restrict: "AC", link: function (f,
                                                g, h) {
                    function l(a, b) {
                        var c = g.data("$classCounts") || {}, d = [];
                        s(a, function (a) {
                            if (0 < b || c[a]) c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a)
                        });
                        g.data("$classCounts", c);
                        return d.join(" ")
                    }

                    function k(b) {
                        if (!0 === a || f.$index % 2 === a) {
                            var k = e(b || []);
                            if (!m) {
                                var t = l(k, 1);
                                h.$addClass(t)
                            } else if (!ea(b, m)) {
                                var r = e(m), t = d(k, r), k = d(r, k), t = l(t, 1), k = l(k, -1);
                                t && t.length && c.addClass(g, t);
                                k && k.length && c.removeClass(g, k)
                            }
                        }
                        m = qa(b)
                    }

                    var m;
                    f.$watch(h[b], k, !0);
                    h.$observe("class", function (a) {
                        k(f.$eval(h[b]))
                    });
                    "ngClass" !== b && f.$watch("$index",
                        function (c, d) {
                            var g = c & 1;
                            if (g !== (d & 1)) {
                                var k = e(f.$eval(h[b]));
                                g === a ? (g = l(k, 1), h.$addClass(g)) : (g = l(k, -1), h.$removeClass(g))
                            }
                        })
                }
            }
        }]
    }

    function sd(b) {
        function a(a, b) {
            b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1)
        }

        function c(b, c) {
            b = b ? "-" + uc(b, "-") : "";
            a(lb + b, !0 === c);
            a(vd + b, !1 === c)
        }

        var d = b.ctrl, e = b.$element, f = {}, g = b.set, h = b.unset, l = b.parentForm, k = b.$animate;
        f[vd] = !(f[lb] = e.hasClass(lb));
        d.$setValidity = function (b, e, f) {
            e === u ? (d.$pending || (d.$pending = {}), g(d.$pending, b, f)) : (d.$pending &&
            h(d.$pending, b, f), wd(d.$pending) && (d.$pending = u));
            Wa(e) ? e ? (h(d.$error, b, f), g(d.$$success, b, f)) : (g(d.$error, b, f), h(d.$$success, b, f)) : (h(d.$error, b, f), h(d.$$success, b, f));
            d.$pending ? (a(xd, !0), d.$valid = d.$invalid = u, c("", null)) : (a(xd, !1), d.$valid = wd(d.$error), d.$invalid = !d.$valid, c("", d.$valid));
            e = d.$pending && d.$pending[b] ? u : d.$error[b] ? !1 : d.$$success[b] ? !0 : null;
            c(b, e);
            l.$setValidity(b, e, d)
        }
    }

    function wd(b) {
        if (b) for (var a in b) return !1;
        return !0
    }

    var Nf = /^\/(.+)\/([a-z]*)$/, R = function (b) {
            return x(b) ? b.toLowerCase() :
                b
        }, sc = Object.prototype.hasOwnProperty, vb = function (b) {
            return x(b) ? b.toUpperCase() : b
        }, Ra, C, ra, Za = [].slice, pf = [].splice, Of = [].push, Da = Object.prototype.toString, Ka = M("ng"),
        aa = P.angular || (P.angular = {}), cb, ob = 0;
    Ra = X.documentMode;
    B.$inject = [];
    oa.$inject = [];
    var E = Array.isArray, T = function (b) {
            return x(b) ? b.trim() : b
        }, gd = function (b) {
            return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        }, bb = function () {
            if (y(bb.isActive_)) return bb.isActive_;
            var b = !(!X.querySelector("[ng-csp]") && !X.querySelector("[data-ng-csp]"));
            if (!b) try {
                new Function("")
            } catch (a) {
                b = !0
            }
            return bb.isActive_ = b
        }, sb = ["ng-", "data-ng-", "ng:", "x-ng-"], Md = /[A-Z]/g, vc = !1, Rb, na = 1, qb = 3,
        Qd = {full: "1.3.14", major: 1, minor: 3, dot: 14, codeName: "instantaneous-browserification"};
    Q.expando = "ng339";
    var Ab = Q.cache = {}, hf = 1;
    Q._data = function (b) {
        return this.cache[b[this.expando]] || {}
    };
    var cf = /([\:\-\_]+(.))/g, df = /^moz([A-Z])/, Pf = {mouseleave: "mouseout", mouseenter: "mouseover"},
        Ub = M("jqLite"), gf = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Tb = /<|&#?\w+;/, ef = /<([\w:]+)/,
        ff = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ga = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ga.optgroup = ga.option;
    ga.tbody = ga.tfoot = ga.colgroup = ga.caption = ga.thead;
    ga.th = ga.td;
    var La = Q.prototype = {
        ready: function (b) {
            function a() {
                c || (c = !0, b())
            }

            var c = !1;
            "complete" === X.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), Q(P).on("load", a))
        },
        toString: function () {
            var b = [];
            s(this, function (a) {
                b.push("" + a)
            });
            return "[" + b.join(", ") + "]"
        }, eq: function (b) {
            return 0 <= b ? C(this[b]) : C(this[this.length + b])
        }, length: 0, push: Of, sort: [].sort, splice: [].splice
    }, Fb = {};
    s("multiple selected checked disabled readOnly required open".split(" "), function (b) {
        Fb[R(b)] = b
    });
    var Nc = {};
    s("input select option textarea button form details".split(" "), function (b) {
        Nc[b] = !0
    });
    var Oc = {ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern"};
    s({data: Wb, removeData: yb}, function (b, a) {
        Q[a] = b
    });
    s({
        data: Wb, inheritedData: Eb, scope: function (b) {
            return C.data(b, "$scope") || Eb(b.parentNode || b, ["$isolateScope", "$scope"])
        }, isolateScope: function (b) {
            return C.data(b, "$isolateScope") || C.data(b, "$isolateScopeNoTemplate")
        }, controller: Jc, injector: function (b) {
            return Eb(b, "$injector")
        }, removeAttr: function (b, a) {
            b.removeAttribute(a)
        }, hasClass: Bb, css: function (b, a, c) {
            a = db(a);
            if (y(c)) b.style[a] = c; else return b.style[a]
        }, attr: function (b, a, c) {
            var d = R(a);
            if (Fb[d]) if (y(c)) c ?
                (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d)); else return b[a] || (b.attributes.getNamedItem(a) || B).specified ? d : u; else if (y(c)) b.setAttribute(a, c); else if (b.getAttribute) return b = b.getAttribute(a, 2), null === b ? u : b
        }, prop: function (b, a, c) {
            if (y(c)) b[a] = c; else return b[a]
        }, text: function () {
            function b(a, b) {
                if (z(b)) {
                    var d = a.nodeType;
                    return d === na || d === qb ? a.textContent : ""
                }
                a.textContent = b
            }

            b.$dv = "";
            return b
        }(), val: function (b, a) {
            if (z(a)) {
                if (b.multiple && "select" === ta(b)) {
                    var c = [];
                    s(b.options, function (a) {
                        a.selected &&
                        c.push(a.value || a.text)
                    });
                    return 0 === c.length ? null : c
                }
                return b.value
            }
            b.value = a
        }, html: function (b, a) {
            if (z(a)) return b.innerHTML;
            xb(b, !0);
            b.innerHTML = a
        }, empty: Kc
    }, function (b, a) {
        Q.prototype[a] = function (a, d) {
            var e, f, g = this.length;
            if (b !== Kc && (2 == b.length && b !== Bb && b !== Jc ? a : d) === u) {
                if (J(a)) {
                    for (e = 0; e < g; e++) if (b === Wb) b(this[e], a); else for (f in a) b(this[e], f, a[f]);
                    return this
                }
                e = b.$dv;
                g = e === u ? Math.min(g, 1) : g;
                for (f = 0; f < g; f++) {
                    var h = b(this[f], a, d);
                    e = e ? e + h : h
                }
                return e
            }
            for (e = 0; e < g; e++) b(this[e], a, d);
            return this
        }
    });
    s({
        removeData: yb, on: function a(c, d, e, f) {
            if (y(f)) throw Ub("onargs");
            if (Fc(c)) {
                var g = zb(c, !0);
                f = g.events;
                var h = g.handle;
                h || (h = g.handle = lf(c, f));
                for (var g = 0 <= d.indexOf(" ") ? d.split(" ") : [d], l = g.length; l--;) {
                    d = g[l];
                    var k = f[d];
                    k || (f[d] = [], "mouseenter" === d || "mouseleave" === d ? a(c, Pf[d], function (a) {
                        var c = a.relatedTarget;
                        c && (c === this || this.contains(c)) || h(a, d)
                    }) : "$destroy" !== d && c.addEventListener(d, h, !1), k = f[d]);
                    k.push(e)
                }
            }
        }, off: Ic, one: function (a, c, d) {
            a = C(a);
            a.on(c, function f() {
                a.off(c, d);
                a.off(c, f)
            });
            a.on(c,
                d)
        }, replaceWith: function (a, c) {
            var d, e = a.parentNode;
            xb(a);
            s(new Q(c), function (c) {
                d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
                d = c
            })
        }, children: function (a) {
            var c = [];
            s(a.childNodes, function (a) {
                a.nodeType === na && c.push(a)
            });
            return c
        }, contents: function (a) {
            return a.contentDocument || a.childNodes || []
        }, append: function (a, c) {
            var d = a.nodeType;
            if (d === na || 11 === d) {
                c = new Q(c);
                for (var d = 0, e = c.length; d < e; d++) a.appendChild(c[d])
            }
        }, prepend: function (a, c) {
            if (a.nodeType === na) {
                var d = a.firstChild;
                s(new Q(c), function (c) {
                    a.insertBefore(c,
                        d)
                })
            }
        }, wrap: function (a, c) {
            c = C(c).eq(0).clone()[0];
            var d = a.parentNode;
            d && d.replaceChild(c, a);
            c.appendChild(a)
        }, remove: Lc, detach: function (a) {
            Lc(a, !0)
        }, after: function (a, c) {
            var d = a, e = a.parentNode;
            c = new Q(c);
            for (var f = 0, g = c.length; f < g; f++) {
                var h = c[f];
                e.insertBefore(h, d.nextSibling);
                d = h
            }
        }, addClass: Db, removeClass: Cb, toggleClass: function (a, c, d) {
            c && s(c.split(" "), function (c) {
                var f = d;
                z(f) && (f = !Bb(a, c));
                (f ? Db : Cb)(a, c)
            })
        }, parent: function (a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        }, next: function (a) {
            return a.nextElementSibling
        },
        find: function (a, c) {
            return a.getElementsByTagName ? a.getElementsByTagName(c) : []
        }, clone: Vb, triggerHandler: function (a, c, d) {
            var e, f, g = c.type || c, h = zb(a);
            if (h = (h = h && h.events) && h[g]) e = {
                preventDefault: function () {
                    this.defaultPrevented = !0
                }, isDefaultPrevented: function () {
                    return !0 === this.defaultPrevented
                }, stopImmediatePropagation: function () {
                    this.immediatePropagationStopped = !0
                }, isImmediatePropagationStopped: function () {
                    return !0 === this.immediatePropagationStopped
                }, stopPropagation: B, type: g, target: a
            }, c.type && (e = w(e,
                c)), c = qa(h), f = d ? [e].concat(d) : [e], s(c, function (c) {
                e.isImmediatePropagationStopped() || c.apply(a, f)
            })
        }
    }, function (a, c) {
        Q.prototype[c] = function (c, e, f) {
            for (var g, h = 0, l = this.length; h < l; h++) z(g) ? (g = a(this[h], c, e, f), y(g) && (g = C(g))) : Hc(g, a(this[h], c, e, f));
            return y(g) ? g : this
        };
        Q.prototype.bind = Q.prototype.on;
        Q.prototype.unbind = Q.prototype.off
    });
    eb.prototype = {
        put: function (a, c) {
            this[Na(a, this.nextUid)] = c
        }, get: function (a) {
            return this[Na(a, this.nextUid)]
        }, remove: function (a) {
            var c = this[a = Na(a, this.nextUid)];
            delete this[a];
            return c
        }
    };
    var Qc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Qf = /,/, Rf = /^\s*(_?)(\S+?)\1\s*$/,
        Pc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, Ga = M("$injector");
    ab.$$annotate = function (a, c, d) {
        var e;
        if ("function" === typeof a) {
            if (!(e = a.$inject)) {
                e = [];
                if (a.length) {
                    if (c) throw x(d) && d || (d = a.name || mf(a)), Ga("strictdi", d);
                    c = a.toString().replace(Pc, "");
                    c = c.match(Qc);
                    s(c[1].split(Qf), function (a) {
                        a.replace(Rf, function (a, c, d) {
                            e.push(d)
                        })
                    })
                }
                a.$inject = e
            }
        } else E(a) ? (c = a.length - 1, tb(a[c], "fn"), e = a.slice(0, c)) : tb(a, "fn", !0);
        return e
    };
    var Sf = M("$animate"), Ce = ["$provide", function (a) {
        this.$$selectors = {};
        this.register = function (c, d) {
            var e = c + "-animation";
            if (c && "." != c.charAt(0)) throw Sf("notcsel", c);
            this.$$selectors[c.substr(1)] = e;
            a.factory(e, d)
        };
        this.classNameFilter = function (a) {
            1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
            return this.$$classNameFilter
        };
        this.$get = ["$$q", "$$asyncCallback", "$rootScope", function (a, d, e) {
            function f(d) {
                var f, g = a.defer();
                g.promise.$$cancelFn = function () {
                    f && f()
                };
                e.$$postDigest(function () {
                    f =
                        d(function () {
                            g.resolve()
                        })
                });
                return g.promise
            }

            function g(a, c) {
                var d = [], e = [], f = fa();
                s((a.attr("class") || "").split(/\s+/), function (a) {
                    f[a] = !0
                });
                s(c, function (a, c) {
                    var g = f[c];
                    !1 === a && g ? e.push(c) : !0 !== a || g || d.push(c)
                });
                return 0 < d.length + e.length && [d.length ? d : null, e.length ? e : null]
            }

            function h(a, c, d) {
                for (var e = 0, f = c.length; e < f; ++e) a[c[e]] = d
            }

            function l() {
                m || (m = a.defer(), d(function () {
                    m.resolve();
                    m = null
                }));
                return m.promise
            }

            function k(a, c) {
                if (aa.isObject(c)) {
                    var d = w(c.from || {}, c.to || {});
                    a.css(d)
                }
            }

            var m;
            return {
                animate: function (a,
                                   c, d) {
                    k(a, {from: c, to: d});
                    return l()
                }, enter: function (a, c, d, e) {
                    k(a, e);
                    d ? d.after(a) : c.prepend(a);
                    return l()
                }, leave: function (a, c) {
                    a.remove();
                    return l()
                }, move: function (a, c, d, e) {
                    return this.enter(a, c, d, e)
                }, addClass: function (a, c, d) {
                    return this.setClass(a, c, [], d)
                }, $$addClassImmediately: function (a, c, d) {
                    a = C(a);
                    c = x(c) ? c : E(c) ? c.join(" ") : "";
                    s(a, function (a) {
                        Db(a, c)
                    });
                    k(a, d);
                    return l()
                }, removeClass: function (a, c, d) {
                    return this.setClass(a, [], c, d)
                }, $$removeClassImmediately: function (a, c, d) {
                    a = C(a);
                    c = x(c) ? c : E(c) ? c.join(" ") :
                        "";
                    s(a, function (a) {
                        Cb(a, c)
                    });
                    k(a, d);
                    return l()
                }, setClass: function (a, c, d, e) {
                    var k = this, l = !1;
                    a = C(a);
                    var m = a.data("$$animateClasses");
                    m ? e && m.options && (m.options = aa.extend(m.options || {}, e)) : (m = {
                        classes: {},
                        options: e
                    }, l = !0);
                    e = m.classes;
                    c = E(c) ? c : c.split(" ");
                    d = E(d) ? d : d.split(" ");
                    h(e, c, !0);
                    h(e, d, !1);
                    l && (m.promise = f(function (c) {
                        var d = a.data("$$animateClasses");
                        a.removeData("$$animateClasses");
                        if (d) {
                            var e = g(a, d.classes);
                            e && k.$$setClassImmediately(a, e[0], e[1], d.options)
                        }
                        c()
                    }), a.data("$$animateClasses", m));
                    return m.promise
                }, $$setClassImmediately: function (a, c, d, e) {
                    c && this.$$addClassImmediately(a, c);
                    d && this.$$removeClassImmediately(a, d);
                    k(a, e);
                    return l()
                }, enabled: B, cancel: B
            }
        }]
    }], ia = M("$compile");
    xc.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Sc = /^((?:x|data)[\:\-_])/i, qf = M("$controller"), Wc = "application/json",
        $b = {"Content-Type": Wc + ";charset=utf-8"}, sf = /^\[|^\{(?!\{)/, tf = {"[": /]$/, "{": /}$/},
        rf = /^\)\]\}',?\n/, ac = M("$interpolate"), Tf = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        wf = {http: 80, https: 443, ftp: 21}, Hb =
            M("$location"), Uf = {
            $$html5: !1, $$replace: !1, absUrl: Ib("$$absUrl"), url: function (a) {
                if (z(a)) return this.$$url;
                var c = Tf.exec(a);
                (c[1] || "" === a) && this.path(decodeURIComponent(c[1]));
                (c[2] || c[1] || "" === a) && this.search(c[3] || "");
                this.hash(c[5] || "");
                return this
            }, protocol: Ib("$$protocol"), host: Ib("$$host"), port: Ib("$$port"), path: dd("$$path", function (a) {
                a = null !== a ? a.toString() : "";
                return "/" == a.charAt(0) ? a : "/" + a
            }), search: function (a, c) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (x(a) || V(a)) a =
                            a.toString(), this.$$search = rc(a); else if (J(a)) a = Ea(a, {}), s(a, function (c, e) {
                            null == c && delete a[e]
                        }), this.$$search = a; else throw Hb("isrcharg");
                        break;
                    default:
                        z(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c
                }
                this.$$compose();
                return this
            }, hash: dd("$$hash", function (a) {
                return null !== a ? a.toString() : ""
            }), replace: function () {
                this.$$replace = !0;
                return this
            }
        };
    s([cd, ec, dc], function (a) {
        a.prototype = Object.create(Uf);
        a.prototype.state = function (c) {
            if (!arguments.length) return this.$$state;
            if (a !== dc || !this.$$html5) throw Hb("nostate");
            this.$$state = z(c) ? null : c;
            return this
        }
    });
    var ka = M("$parse"), Vf = Function.prototype.call, Wf = Function.prototype.apply, Xf = Function.prototype.bind,
        mb = fa();
    s({
        "null": function () {
            return null
        }, "true": function () {
            return !0
        }, "false": function () {
            return !1
        }, undefined: function () {
        }
    }, function (a, c) {
        a.constant = a.literal = a.sharedGetter = !0;
        mb[c] = a
    });
    mb["this"] = function (a) {
        return a
    };
    mb["this"].sharedGetter = !0;
    var nb = w(fa(), {
        "+": function (a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return y(d) ? y(e) ? d + e : d : y(e) ? e : u
        }, "-": function (a, c, d, e) {
            d = d(a,
                c);
            e = e(a, c);
            return (y(d) ? d : 0) - (y(e) ? e : 0)
        }, "*": function (a, c, d, e) {
            return d(a, c) * e(a, c)
        }, "/": function (a, c, d, e) {
            return d(a, c) / e(a, c)
        }, "%": function (a, c, d, e) {
            return d(a, c) % e(a, c)
        }, "===": function (a, c, d, e) {
            return d(a, c) === e(a, c)
        }, "!==": function (a, c, d, e) {
            return d(a, c) !== e(a, c)
        }, "==": function (a, c, d, e) {
            return d(a, c) == e(a, c)
        }, "!=": function (a, c, d, e) {
            return d(a, c) != e(a, c)
        }, "<": function (a, c, d, e) {
            return d(a, c) < e(a, c)
        }, ">": function (a, c, d, e) {
            return d(a, c) > e(a, c)
        }, "<=": function (a, c, d, e) {
            return d(a, c) <= e(a, c)
        }, ">=": function (a,
                           c, d, e) {
            return d(a, c) >= e(a, c)
        }, "&&": function (a, c, d, e) {
            return d(a, c) && e(a, c)
        }, "||": function (a, c, d, e) {
            return d(a, c) || e(a, c)
        }, "!": function (a, c, d) {
            return !d(a, c)
        }, "=": !0, "|": !0
    }), Yf = {n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"'}, hc = function (a) {
        this.options = a
    };
    hc.prototype = {
        constructor: hc, lex: function (a) {
            this.text = a;
            this.index = 0;
            for (this.tokens = []; this.index < this.text.length;) if (a = this.text.charAt(this.index), '"' === a || "'" === a) this.readString(a); else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber();
            else if (this.isIdent(a)) this.readIdent(); else if (this.is(a, "(){}[].,;:?")) this.tokens.push({
                index: this.index,
                text: a
            }), this.index++; else if (this.isWhitespace(a)) this.index++; else {
                var c = a + this.peek(), d = c + this.peek(2), e = nb[c], f = nb[d];
                nb[a] || e || f ? (a = f ? d : e ? c : a, this.tokens.push({
                    index: this.index,
                    text: a,
                    operator: !0
                }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
            }
            return this.tokens
        }, is: function (a, c) {
            return -1 !== c.indexOf(a)
        }, peek: function (a) {
            a = a || 1;
            return this.index +
            a < this.text.length ? this.text.charAt(this.index + a) : !1
        }, isNumber: function (a) {
            return "0" <= a && "9" >= a && "string" === typeof a
        }, isWhitespace: function (a) {
            return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
        }, isIdent: function (a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
        }, isExpOperator: function (a) {
            return "-" === a || "+" === a || this.isNumber(a)
        }, throwError: function (a, c, d) {
            d = d || this.index;
            c = y(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d;
            throw ka("lexerr", a, c, this.text);
        }, readNumber: function () {
            for (var a = "", c = this.index; this.index < this.text.length;) {
                var d = R(this.text.charAt(this.index));
                if ("." == d || this.isNumber(d)) a += d; else {
                    var e = this.peek();
                    if ("e" == d && this.isExpOperator(e)) a += d; else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1)) a += d; else if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length - 1)) break; else this.throwError("Invalid exponent")
                }
                this.index++
            }
            this.tokens.push({index: c, text: a, constant: !0, value: Number(a)})
        }, readIdent: function () {
            for (var a =
                this.index; this.index < this.text.length;) {
                var c = this.text.charAt(this.index);
                if (!this.isIdent(c) && !this.isNumber(c)) break;
                this.index++
            }
            this.tokens.push({index: a, text: this.text.slice(a, this.index), identifier: !0})
        }, readString: function (a) {
            var c = this.index;
            this.index++;
            for (var d = "", e = a, f = !1; this.index < this.text.length;) {
                var g = this.text.charAt(this.index), e = e + g;
                if (f) "u" === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index +=
                    4, d += String.fromCharCode(parseInt(f, 16))) : d += Yf[g] || g, f = !1; else if ("\\" === g) f = !0; else {
                    if (g === a) {
                        this.index++;
                        this.tokens.push({index: c, text: e, constant: !0, value: d});
                        return
                    }
                    d += g
                }
                this.index++
            }
            this.throwError("Unterminated quote", c)
        }
    };
    var ib = function (a, c, d) {
        this.lexer = a;
        this.$filter = c;
        this.options = d
    };
    ib.ZERO = w(function () {
        return 0
    }, {sharedGetter: !0, constant: !0});
    ib.prototype = {
        constructor: ib, parse: function (a) {
            this.text = a;
            this.tokens = this.lexer.lex(a);
            a = this.statements();
            0 !== this.tokens.length && this.throwError("is an unexpected token",
                this.tokens[0]);
            a.literal = !!a.literal;
            a.constant = !!a.constant;
            return a
        }, primary: function () {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.peek().identifier && this.peek().text in mb ? a = mb[this.consume().text] : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var c, d; c = this.expect("(", "[", ".");) "(" === c.text ? (a = this.functionCall(a,
                d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
            return a
        }, throwError: function (a, c) {
            throw ka("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
        }, peekToken: function () {
            if (0 === this.tokens.length) throw ka("ueoe", this.text);
            return this.tokens[0]
        }, peek: function (a, c, d, e) {
            return this.peekAhead(0, a, c, d, e)
        }, peekAhead: function (a, c, d, e, f) {
            if (this.tokens.length > a) {
                a = this.tokens[a];
                var g = a.text;
                if (g === c || g === d || g === e || g ===
                    f || !(c || d || e || f)) return a
            }
            return !1
        }, expect: function (a, c, d, e) {
            return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1
        }, consume: function (a) {
            if (0 === this.tokens.length) throw ka("ueoe", this.text);
            var c = this.expect(a);
            c || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
            return c
        }, unaryFn: function (a, c) {
            var d = nb[a];
            return w(function (a, f) {
                return d(a, f, c)
            }, {constant: c.constant, inputs: [c]})
        }, binaryFn: function (a, c, d, e) {
            var f = nb[c];
            return w(function (c, e) {
                return f(c, e, a, d)
            }, {
                constant: a.constant &&
                d.constant, inputs: !e && [a, d]
            })
        }, identifier: function () {
            for (var a = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "(");) a += this.consume().text + this.consume().text;
            return yf(a, this.options, this.text)
        }, constant: function () {
            var a = this.consume().value;
            return w(function () {
                return a
            }, {constant: !0, literal: !0})
        }, statements: function () {
            for (var a = []; ;) if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";")) return 1 === a.length ? a[0] : function (c,
                                                                                                                                                                                        d) {
                for (var e, f = 0, g = a.length; f < g; f++) e = a[f](c, d);
                return e
            }
        }, filterChain: function () {
            for (var a = this.expression(); this.expect("|");) a = this.filter(a);
            return a
        }, filter: function (a) {
            var c = this.$filter(this.consume().text), d, e;
            if (this.peek(":")) for (d = [], e = []; this.expect(":");) d.push(this.expression());
            var f = [a].concat(d || []);
            return w(function (f, h) {
                var l = a(f, h);
                if (e) {
                    e[0] = l;
                    for (l = d.length; l--;) e[l + 1] = d[l](f, h);
                    return c.apply(u, e)
                }
                return c(l)
            }, {constant: !c.$stateful && f.every(fc), inputs: !c.$stateful && f})
        }, expression: function () {
            return this.assignment()
        },
        assignment: function () {
            var a = this.ternary(), c, d;
            return (d = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" + this.text.substring(0, d.index) + "] can not be assigned to", d), c = this.ternary(), w(function (d, f) {
                return a.assign(d, c(d, f), f)
            }, {inputs: [a, c]})) : a
        }, ternary: function () {
            var a = this.logicalOR(), c;
            if (this.expect("?") && (c = this.assignment(), this.consume(":"))) {
                var d = this.assignment();
                return w(function (e, f) {
                    return a(e, f) ? c(e, f) : d(e, f)
                }, {constant: a.constant && c.constant && d.constant})
            }
            return a
        },
        logicalOR: function () {
            for (var a = this.logicalAND(), c; c = this.expect("||");) a = this.binaryFn(a, c.text, this.logicalAND(), !0);
            return a
        }, logicalAND: function () {
            for (var a = this.equality(), c; c = this.expect("&&");) a = this.binaryFn(a, c.text, this.equality(), !0);
            return a
        }, equality: function () {
            for (var a = this.relational(), c; c = this.expect("==", "!=", "===", "!==");) a = this.binaryFn(a, c.text, this.relational());
            return a
        }, relational: function () {
            for (var a = this.additive(), c; c = this.expect("<", ">", "<=", ">=");) a = this.binaryFn(a, c.text,
                this.additive());
            return a
        }, additive: function () {
            for (var a = this.multiplicative(), c; c = this.expect("+", "-");) a = this.binaryFn(a, c.text, this.multiplicative());
            return a
        }, multiplicative: function () {
            for (var a = this.unary(), c; c = this.expect("*", "/", "%");) a = this.binaryFn(a, c.text, this.unary());
            return a
        }, unary: function () {
            var a;
            return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(ib.ZERO, a.text, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.text, this.unary()) : this.primary()
        }, fieldAccess: function (a) {
            var c =
                this.identifier();
            return w(function (d, e, f) {
                d = f || a(d, e);
                return null == d ? u : c(d)
            }, {
                assign: function (d, e, f) {
                    var g = a(d, f);
                    g || a.assign(d, g = {}, f);
                    return c.assign(g, e)
                }
            })
        }, objectIndex: function (a) {
            var c = this.text, d = this.expression();
            this.consume("]");
            return w(function (e, f) {
                var g = a(e, f), h = d(e, f);
                sa(h, c);
                return g ? la(g[h], c) : u
            }, {
                assign: function (e, f, g) {
                    var h = sa(d(e, g), c), l = la(a(e, g), c);
                    l || a.assign(e, l = {}, g);
                    return l[h] = f
                }
            })
        }, functionCall: function (a, c) {
            var d = [];
            if (")" !== this.peekToken().text) {
                do d.push(this.expression());
                while (this.expect(","))
            }
            this.consume(")");
            var e = this.text, f = d.length ? [] : null;
            return function (g, h) {
                var l = c ? c(g, h) : y(c) ? u : g, k = a(g, h, l) || B;
                if (f) for (var m = d.length; m--;) f[m] = la(d[m](g, h), e);
                la(l, e);
                if (k) {
                    if (k.constructor === k) throw ka("isecfn", e);
                    if (k === Vf || k === Wf || k === Xf) throw ka("isecff", e);
                }
                l = k.apply ? k.apply(l, f) : k(f[0], f[1], f[2], f[3], f[4]);
                f && (f.length = 0);
                return la(l, e)
            }
        }, arrayDeclaration: function () {
            var a = [];
            if ("]" !== this.peekToken().text) {
                do {
                    if (this.peek("]")) break;
                    a.push(this.expression())
                } while (this.expect(","))
            }
            this.consume("]");
            return w(function (c, d) {
                for (var e = [], f = 0, g = a.length; f < g; f++) e.push(a[f](c, d));
                return e
            }, {literal: !0, constant: a.every(fc), inputs: a})
        }, object: function () {
            var a = [], c = [];
            if ("}" !== this.peekToken().text) {
                do {
                    if (this.peek("}")) break;
                    var d = this.consume();
                    d.constant ? a.push(d.value) : d.identifier ? a.push(d.text) : this.throwError("invalid key", d);
                    this.consume(":");
                    c.push(this.expression())
                } while (this.expect(","))
            }
            this.consume("}");
            return w(function (d, f) {
                for (var g = {}, h = 0, l = c.length; h < l; h++) g[a[h]] =
                    c[h](d, f);
                return g
            }, {literal: !0, constant: c.every(fc), inputs: c})
        }
    };
    var Af = fa(), zf = fa(), Bf = Object.prototype.valueOf, Ca = M("$sce"),
        ma = {HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js"}, ia = M("$compile"),
        Y = X.createElement("a"), id = Ba(P.location.href);
    Ec.$inject = ["$provide"];
    jd.$inject = ["$locale"];
    ld.$inject = ["$locale"];
    var od = ".", Lf = {
        yyyy: Z("FullYear", 4),
        yy: Z("FullYear", 2, 0, !0),
        y: Z("FullYear", 1),
        MMMM: Kb("Month"),
        MMM: Kb("Month", !0),
        MM: Z("Month", 2, 1),
        M: Z("Month", 1, 1),
        dd: Z("Date", 2),
        d: Z("Date",
            1),
        HH: Z("Hours", 2),
        H: Z("Hours", 1),
        hh: Z("Hours", 2, -12),
        h: Z("Hours", 1, -12),
        mm: Z("Minutes", 2),
        m: Z("Minutes", 1),
        ss: Z("Seconds", 2),
        s: Z("Seconds", 1),
        sss: Z("Milliseconds", 3),
        EEEE: Kb("Day"),
        EEE: Kb("Day", !0),
        a: function (a, c) {
            return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1]
        },
        Z: function (a) {
            a = -1 * a.getTimezoneOffset();
            return a = (0 <= a ? "+" : "") + (Jb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Jb(Math.abs(a % 60), 2))
        },
        ww: qd(2),
        w: qd(1)
    }, Kf = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/, Jf = /^\-?\d+$/;
    kd.$inject = ["$locale"];
    var Gf = da(R), Hf = da(vb);
    md.$inject = ["$parse"];
    var Td = da({
        restrict: "E", compile: function (a, c) {
            if (!c.href && !c.xlinkHref && !c.name) return function (a, c) {
                if ("a" === c[0].nodeName.toLowerCase()) {
                    var f = "[object SVGAnimatedString]" === Da.call(c.prop("href")) ? "xlink:href" : "href";
                    c.on("click", function (a) {
                        c.attr(f) || a.preventDefault()
                    })
                }
            }
        }
    }), wb = {};
    s(Fb, function (a, c) {
        if ("multiple" != a) {
            var d = ya("ng-" + c);
            wb[d] = function () {
                return {
                    restrict: "A", priority: 100, link: function (a, f, g) {
                        a.$watch(g[d], function (a) {
                            g.$set(c,
                                !!a)
                        })
                    }
                }
            }
        }
    });
    s(Oc, function (a, c) {
        wb[c] = function () {
            return {
                priority: 100, link: function (a, e, f) {
                    if ("ngPattern" === c && "/" == f.ngPattern.charAt(0) && (e = f.ngPattern.match(Nf))) {
                        f.$set("ngPattern", new RegExp(e[1], e[2]));
                        return
                    }
                    a.$watch(f[c], function (a) {
                        f.$set(c, a)
                    })
                }
            }
        }
    });
    s(["src", "srcset", "href"], function (a) {
        var c = ya("ng-" + a);
        wb[c] = function () {
            return {
                priority: 99, link: function (d, e, f) {
                    var g = a, h = a;
                    "href" === a && "[object SVGAnimatedString]" === Da.call(e.prop("href")) && (h = "xlinkHref", f.$attr[h] = "xlink:href", g = null);
                    f.$observe(c,
                        function (c) {
                            c ? (f.$set(h, c), Ra && g && e.prop(g, f[h])) : "href" === a && f.$set(h, null)
                        })
                }
            }
        }
    });
    var Lb = {
        $addControl: B, $$renameControl: function (a, c) {
            a.$name = c
        }, $removeControl: B, $setValidity: B, $setDirty: B, $setPristine: B, $setSubmitted: B
    };
    rd.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var yd = function (a) {
            return ["$timeout", function (c) {
                return {
                    name: "form", restrict: a ? "EAC" : "E", controller: rd, compile: function (a) {
                        a.addClass(Sa).addClass(lb);
                        return {
                            pre: function (a, d, g, h) {
                                if (!("action" in g)) {
                                    var l = function (c) {
                                        a.$apply(function () {
                                            h.$commitViewValue();
                                            h.$setSubmitted()
                                        });
                                        c.preventDefault()
                                    };
                                    d[0].addEventListener("submit", l, !1);
                                    d.on("$destroy", function () {
                                        c(function () {
                                            d[0].removeEventListener("submit", l, !1)
                                        }, 0, !1)
                                    })
                                }
                                var k = h.$$parentForm, m = h.$name;
                                m && (hb(a, null, m, h, m), g.$observe(g.name ? "name" : "ngForm", function (c) {
                                    m !== c && (hb(a, null, m, u, m), m = c, hb(a, null, m, h, m), k.$$renameControl(h, m))
                                }));
                                d.on("$destroy", function () {
                                    k.$removeControl(h);
                                    m && hb(a, null, m, u, m);
                                    w(h, Lb)
                                })
                            }
                        }
                    }
                }
            }]
        }, Ud = yd(), ge = yd(!0), Mf = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
        Zf = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        $f = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
        ag = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, zd = /^(\d{4})-(\d{2})-(\d{2})$/,
        Ad = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, kc = /^(\d{4})-W(\d\d)$/,
        Bd = /^(\d{4})-(\d\d)$/, Cd = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Dd = {
            text: function (a, c, d, e, f, g) {
                jb(a, c, d, e, f, g);
                ic(e)
            },
            date: kb("date", zd, Nb(zd, ["yyyy",
                "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": kb("datetimelocal", Ad, Nb(Ad, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: kb("time", Cd, Nb(Cd, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: kb("week", kc, function (a, c) {
                if (pa(a)) return a;
                if (x(a)) {
                    kc.lastIndex = 0;
                    var d = kc.exec(a);
                    if (d) {
                        var e = +d[1], f = +d[2], g = d = 0, h = 0, l = 0, k = pd(e), f = 7 * (f - 1);
                        c && (d = c.getHours(), g = c.getMinutes(), h = c.getSeconds(), l = c.getMilliseconds());
                        return new Date(e, 0, k.getDate() + f, d, g, h, l)
                    }
                }
                return NaN
            }, "yyyy-Www"),
            month: kb("month",
                Bd, Nb(Bd, ["yyyy", "MM"]), "yyyy-MM"),
            number: function (a, c, d, e, f, g) {
                td(a, c, d, e);
                jb(a, c, d, e, f, g);
                e.$$parserName = "number";
                e.$parsers.push(function (a) {
                    return e.$isEmpty(a) ? null : ag.test(a) ? parseFloat(a) : u
                });
                e.$formatters.push(function (a) {
                    if (!e.$isEmpty(a)) {
                        if (!V(a)) throw Ob("numfmt", a);
                        a = a.toString()
                    }
                    return a
                });
                if (y(d.min) || d.ngMin) {
                    var h;
                    e.$validators.min = function (a) {
                        return e.$isEmpty(a) || z(h) || a >= h
                    };
                    d.$observe("min", function (a) {
                        y(a) && !V(a) && (a = parseFloat(a, 10));
                        h = V(a) && !isNaN(a) ? a : u;
                        e.$validate()
                    })
                }
                if (y(d.max) ||
                    d.ngMax) {
                    var l;
                    e.$validators.max = function (a) {
                        return e.$isEmpty(a) || z(l) || a <= l
                    };
                    d.$observe("max", function (a) {
                        y(a) && !V(a) && (a = parseFloat(a, 10));
                        l = V(a) && !isNaN(a) ? a : u;
                        e.$validate()
                    })
                }
            },
            url: function (a, c, d, e, f, g) {
                jb(a, c, d, e, f, g);
                ic(e);
                e.$$parserName = "url";
                e.$validators.url = function (a, c) {
                    var d = a || c;
                    return e.$isEmpty(d) || Zf.test(d)
                }
            },
            email: function (a, c, d, e, f, g) {
                jb(a, c, d, e, f, g);
                ic(e);
                e.$$parserName = "email";
                e.$validators.email = function (a, c) {
                    var d = a || c;
                    return e.$isEmpty(d) || $f.test(d)
                }
            },
            radio: function (a, c,
                             d, e) {
                z(d.name) && c.attr("name", ++ob);
                c.on("click", function (a) {
                    c[0].checked && e.$setViewValue(d.value, a && a.type)
                });
                e.$render = function () {
                    c[0].checked = d.value == e.$viewValue
                };
                d.$observe("value", e.$render)
            },
            checkbox: function (a, c, d, e, f, g, h, l) {
                var k = ud(l, a, "ngTrueValue", d.ngTrueValue, !0), m = ud(l, a, "ngFalseValue", d.ngFalseValue, !1);
                c.on("click", function (a) {
                    e.$setViewValue(c[0].checked, a && a.type)
                });
                e.$render = function () {
                    c[0].checked = e.$viewValue
                };
                e.$isEmpty = function (a) {
                    return !1 === a
                };
                e.$formatters.push(function (a) {
                    return ea(a,
                        k)
                });
                e.$parsers.push(function (a) {
                    return a ? k : m
                })
            },
            hidden: B,
            button: B,
            submit: B,
            reset: B,
            file: B
        }, yc = ["$browser", "$sniffer", "$filter", "$parse", function (a, c, d, e) {
            return {
                restrict: "E", require: ["?ngModel"], link: {
                    pre: function (f, g, h, l) {
                        l[0] && (Dd[R(h.type)] || Dd.text)(f, g, h, l[0], c, a, d, e)
                    }
                }
            }
        }], bg = /^(true|false|\d+)$/, ye = function () {
            return {
                restrict: "A", priority: 100, compile: function (a, c) {
                    return bg.test(c.ngValue) ? function (a, c, f) {
                        f.$set("value", a.$eval(f.ngValue))
                    } : function (a, c, f) {
                        a.$watch(f.ngValue, function (a) {
                            f.$set("value",
                                a)
                        })
                    }
                }
            }
        }, Zd = ["$compile", function (a) {
            return {
                restrict: "AC", compile: function (c) {
                    a.$$addBindingClass(c);
                    return function (c, e, f) {
                        a.$$addBindingInfo(e, f.ngBind);
                        e = e[0];
                        c.$watch(f.ngBind, function (a) {
                            e.textContent = a === u ? "" : a
                        })
                    }
                }
            }
        }], ae = ["$interpolate", "$compile", function (a, c) {
            return {
                compile: function (d) {
                    c.$$addBindingClass(d);
                    return function (d, f, g) {
                        d = a(f.attr(g.$attr.ngBindTemplate));
                        c.$$addBindingInfo(f, d.expressions);
                        f = f[0];
                        g.$observe("ngBindTemplate", function (a) {
                            f.textContent = a === u ? "" : a
                        })
                    }
                }
            }
        }], $d = ["$sce",
            "$parse", "$compile", function (a, c, d) {
                return {
                    restrict: "A", compile: function (e, f) {
                        var g = c(f.ngBindHtml), h = c(f.ngBindHtml, function (a) {
                            return (a || "").toString()
                        });
                        d.$$addBindingClass(e);
                        return function (c, e, f) {
                            d.$$addBindingInfo(e, f.ngBindHtml);
                            c.$watch(h, function () {
                                e.html(a.getTrustedHtml(g(c)) || "")
                            })
                        }
                    }
                }
            }], xe = da({
            restrict: "A", require: "ngModel", link: function (a, c, d, e) {
                e.$viewChangeListeners.push(function () {
                    a.$eval(d.ngChange)
                })
            }
        }), be = jc("", !0), de = jc("Odd", 0), ce = jc("Even", 1), ee = Ja({
            compile: function (a, c) {
                c.$set("ngCloak",
                    u);
                a.removeClass("ng-cloak")
            }
        }), fe = [function () {
            return {restrict: "A", scope: !0, controller: "@", priority: 500}
        }], Dc = {}, cg = {blur: !0, focus: !0};
    s("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
        var c = ya("ng-" + a);
        Dc[c] = ["$parse", "$rootScope", function (d, e) {
            return {
                restrict: "A", compile: function (f, g) {
                    var h = d(g[c], null, !0);
                    return function (c, d) {
                        d.on(a, function (d) {
                            var f = function () {
                                h(c, {$event: d})
                            };
                            cg[a] && e.$$phase ? c.$evalAsync(f) : c.$apply(f)
                        })
                    }
                }
            }
        }]
    });
    var ie = ["$animate", function (a) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function (c, d, e, f, g) {
                    var h, l, k;
                    c.$watch(e.ngIf, function (c) {
                        c ? l || g(function (c, f) {
                            l = f;
                            c[c.length++] = X.createComment(" end ngIf: " + e.ngIf + " ");
                            h = {clone: c};
                            a.enter(c, d.parent(), d)
                        }) : (k && (k.remove(), k = null), l && (l.$destroy(), l = null), h && (k = ub(h.clone), a.leave(k).then(function () {
                            k = null
                        }), h = null))
                    })
                }
            }
        }], je = ["$templateRequest", "$anchorScroll",
            "$animate", "$sce", function (a, c, d, e) {
                return {
                    restrict: "ECA",
                    priority: 400,
                    terminal: !0,
                    transclude: "element",
                    controller: aa.noop,
                    compile: function (f, g) {
                        var h = g.ngInclude || g.src, l = g.onload || "", k = g.autoscroll;
                        return function (f, g, q, s, r) {
                            var u = 0, w, n, D, H = function () {
                                n && (n.remove(), n = null);
                                w && (w.$destroy(), w = null);
                                D && (d.leave(D).then(function () {
                                    n = null
                                }), n = D, D = null)
                            };
                            f.$watch(e.parseAsResourceUrl(h), function (e) {
                                var h = function () {
                                    !y(k) || k && !f.$eval(k) || c()
                                }, n = ++u;
                                e ? (a(e, !0).then(function (a) {
                                    if (n === u) {
                                        var c = f.$new();
                                        s.template = a;
                                        a = r(c, function (a) {
                                            H();
                                            d.enter(a, null, g).then(h)
                                        });
                                        w = c;
                                        D = a;
                                        w.$emit("$includeContentLoaded", e);
                                        f.$eval(l)
                                    }
                                }, function () {
                                    n === u && (H(), f.$emit("$includeContentError", e))
                                }), f.$emit("$includeContentRequested", e)) : (H(), s.template = null)
                            })
                        }
                    }
                }
            }], Ae = ["$compile", function (a) {
            return {
                restrict: "ECA", priority: -400, require: "ngInclude", link: function (c, d, e, f) {
                    /SVG/.test(d[0].toString()) ? (d.empty(), a(Gc(f.template, X).childNodes)(c, function (a) {
                        d.append(a)
                    }, {futureParentElement: d})) : (d.html(f.template), a(d.contents())(c))
                }
            }
        }],
        ke = Ja({
            priority: 450, compile: function () {
                return {
                    pre: function (a, c, d) {
                        a.$eval(d.ngInit)
                    }
                }
            }
        }), we = function () {
            return {
                restrict: "A", priority: 100, require: "ngModel", link: function (a, c, d, e) {
                    var f = c.attr(d.$attr.ngList) || ", ", g = "false" !== d.ngTrim, h = g ? T(f) : f;
                    e.$parsers.push(function (a) {
                        if (!z(a)) {
                            var c = [];
                            a && s(a.split(h), function (a) {
                                a && c.push(g ? T(a) : a)
                            });
                            return c
                        }
                    });
                    e.$formatters.push(function (a) {
                        return E(a) ? a.join(f) : u
                    });
                    e.$isEmpty = function (a) {
                        return !a || !a.length
                    }
                }
            }
        }, lb = "ng-valid", vd = "ng-invalid", Sa = "ng-pristine",
        Mb = "ng-dirty", xd = "ng-pending", Ob = new M("ngModel"),
        dg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, c, d, e, f, g, h, l, k, m) {
            this.$modelValue = this.$viewValue = Number.NaN;
            this.$$rawModelValue = u;
            this.$validators = {};
            this.$asyncValidators = {};
            this.$parsers = [];
            this.$formatters = [];
            this.$viewChangeListeners = [];
            this.$untouched = !0;
            this.$touched = !1;
            this.$pristine = !0;
            this.$dirty = !1;
            this.$valid = !0;
            this.$invalid = !1;
            this.$error = {};
            this.$$success =
                {};
            this.$pending = u;
            this.$name = m(d.name || "", !1)(a);
            var p = f(d.ngModel), q = p.assign, t = p, r = q, w = null, C, n = this;
            this.$$setOptions = function (a) {
                if ((n.$options = a) && a.getterSetter) {
                    var c = f(d.ngModel + "()"), g = f(d.ngModel + "($$$p)");
                    t = function (a) {
                        var d = p(a);
                        G(d) && (d = c(a));
                        return d
                    };
                    r = function (a, c) {
                        G(p(a)) ? g(a, {$$$p: n.$modelValue}) : q(a, n.$modelValue)
                    }
                } else if (!p.assign) throw Ob("nonassign", d.ngModel, ua(e));
            };
            this.$render = B;
            this.$isEmpty = function (a) {
                return z(a) || "" === a || null === a || a !== a
            };
            var D = e.inheritedData("$formController") ||
                Lb, H = 0;
            sd({
                ctrl: this, $element: e, set: function (a, c) {
                    a[c] = !0
                }, unset: function (a, c) {
                    delete a[c]
                }, parentForm: D, $animate: g
            });
            this.$setPristine = function () {
                n.$dirty = !1;
                n.$pristine = !0;
                g.removeClass(e, Mb);
                g.addClass(e, Sa)
            };
            this.$setDirty = function () {
                n.$dirty = !0;
                n.$pristine = !1;
                g.removeClass(e, Sa);
                g.addClass(e, Mb);
                D.$setDirty()
            };
            this.$setUntouched = function () {
                n.$touched = !1;
                n.$untouched = !0;
                g.setClass(e, "ng-untouched", "ng-touched")
            };
            this.$setTouched = function () {
                n.$touched = !0;
                n.$untouched = !1;
                g.setClass(e, "ng-touched",
                    "ng-untouched")
            };
            this.$rollbackViewValue = function () {
                h.cancel(w);
                n.$viewValue = n.$$lastCommittedViewValue;
                n.$render()
            };
            this.$validate = function () {
                if (!V(n.$modelValue) || !isNaN(n.$modelValue)) {
                    var a = n.$$rawModelValue, c = n.$valid, d = n.$modelValue,
                        e = n.$options && n.$options.allowInvalid;
                    n.$$runValidators(a, n.$$lastCommittedViewValue, function (f) {
                        e || c === f || (n.$modelValue = f ? a : u, n.$modelValue !== d && n.$$writeModelToScope())
                    })
                }
            };
            this.$$runValidators = function (a, c, d) {
                function e() {
                    var d = !0;
                    s(n.$validators, function (e,
                                               f) {
                        var h = e(a, c);
                        d = d && h;
                        g(f, h)
                    });
                    return d ? !0 : (s(n.$asyncValidators, function (a, c) {
                        g(c, null)
                    }), !1)
                }

                function f() {
                    var d = [], e = !0;
                    s(n.$asyncValidators, function (f, h) {
                        var k = f(a, c);
                        if (!k || !G(k.then)) throw Ob("$asyncValidators", k);
                        g(h, u);
                        d.push(k.then(function () {
                            g(h, !0)
                        }, function (a) {
                            e = !1;
                            g(h, !1)
                        }))
                    });
                    d.length ? k.all(d).then(function () {
                        h(e)
                    }, B) : h(!0)
                }

                function g(a, c) {
                    l === H && n.$setValidity(a, c)
                }

                function h(a) {
                    l === H && d(a)
                }

                H++;
                var l = H;
                (function () {
                    var a = n.$$parserName || "parse";
                    if (C === u) g(a, null); else return C || (s(n.$validators,
                        function (a, c) {
                            g(c, null)
                        }), s(n.$asyncValidators, function (a, c) {
                        g(c, null)
                    })), g(a, C), C;
                    return !0
                })() ? e() ? f() : h(!1) : h(!1)
            };
            this.$commitViewValue = function () {
                var a = n.$viewValue;
                h.cancel(w);
                if (n.$$lastCommittedViewValue !== a || "" === a && n.$$hasNativeValidators) n.$$lastCommittedViewValue = a, n.$pristine && this.$setDirty(), this.$$parseAndValidate()
            };
            this.$$parseAndValidate = function () {
                var c = n.$$lastCommittedViewValue;
                if (C = z(c) ? u : !0) for (var d = 0; d < n.$parsers.length; d++) if (c = n.$parsers[d](c), z(c)) {
                    C = !1;
                    break
                }
                V(n.$modelValue) &&
                isNaN(n.$modelValue) && (n.$modelValue = t(a));
                var e = n.$modelValue, f = n.$options && n.$options.allowInvalid;
                n.$$rawModelValue = c;
                f && (n.$modelValue = c, n.$modelValue !== e && n.$$writeModelToScope());
                n.$$runValidators(c, n.$$lastCommittedViewValue, function (a) {
                    f || (n.$modelValue = a ? c : u, n.$modelValue !== e && n.$$writeModelToScope())
                })
            };
            this.$$writeModelToScope = function () {
                r(a, n.$modelValue);
                s(n.$viewChangeListeners, function (a) {
                    try {
                        a()
                    } catch (d) {
                        c(d)
                    }
                })
            };
            this.$setViewValue = function (a, c) {
                n.$viewValue = a;
                n.$options && !n.$options.updateOnDefault ||
                n.$$debounceViewValueCommit(c)
            };
            this.$$debounceViewValueCommit = function (c) {
                var d = 0, e = n.$options;
                e && y(e.debounce) && (e = e.debounce, V(e) ? d = e : V(e[c]) ? d = e[c] : V(e["default"]) && (d = e["default"]));
                h.cancel(w);
                d ? w = h(function () {
                    n.$commitViewValue()
                }, d) : l.$$phase ? n.$commitViewValue() : a.$apply(function () {
                    n.$commitViewValue()
                })
            };
            a.$watch(function () {
                var c = t(a);
                if (c !== n.$modelValue) {
                    n.$modelValue = n.$$rawModelValue = c;
                    C = u;
                    for (var d = n.$formatters, e = d.length, f = c; e--;) f = d[e](f);
                    n.$viewValue !== f && (n.$viewValue = n.$$lastCommittedViewValue =
                        f, n.$render(), n.$$runValidators(c, f, B))
                }
                return c
            })
        }], ve = ["$rootScope", function (a) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: dg,
                priority: 1,
                compile: function (c) {
                    c.addClass(Sa).addClass("ng-untouched").addClass(lb);
                    return {
                        pre: function (a, c, f, g) {
                            var h = g[0], l = g[1] || Lb;
                            h.$$setOptions(g[2] && g[2].$options);
                            l.$addControl(h);
                            f.$observe("name", function (a) {
                                h.$name !== a && l.$$renameControl(h, a)
                            });
                            a.$on("$destroy", function () {
                                l.$removeControl(h)
                            })
                        }, post: function (c, e, f, g) {
                            var h = g[0];
                            if (h.$options && h.$options.updateOn) e.on(h.$options.updateOn, function (a) {
                                h.$$debounceViewValueCommit(a && a.type)
                            });
                            e.on("blur", function (e) {
                                h.$touched || (a.$$phase ? c.$evalAsync(h.$setTouched) : c.$apply(h.$setTouched))
                            })
                        }
                    }
                }
            }
        }], eg = /(\s+|^)default(\s+|$)/, ze = function () {
            return {
                restrict: "A", controller: ["$scope", "$attrs", function (a, c) {
                    var d = this;
                    this.$options = a.$eval(c.ngModelOptions);
                    this.$options.updateOn !== u ? (this.$options.updateOnDefault = !1, this.$options.updateOn = T(this.$options.updateOn.replace(eg, function () {
                        d.$options.updateOnDefault =
                            !0;
                        return " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        }, le = Ja({terminal: !0, priority: 1E3}), me = ["$locale", "$interpolate", function (a, c) {
            var d = /{}/g, e = /^when(Minus)?(.+)$/;
            return {
                restrict: "EA", link: function (f, g, h) {
                    function l(a) {
                        g.text(a || "")
                    }

                    var k = h.count, m = h.$attr.when && g.attr(h.$attr.when), p = h.offset || 0, q = f.$eval(m) || {},
                        t = {}, m = c.startSymbol(), r = c.endSymbol(), u = m + k + "-" + p + r, w = aa.noop, n;
                    s(h, function (a, c) {
                        var d = e.exec(c);
                        d && (d = (d[1] ? "-" : "") + R(d[2]), q[d] = g.attr(h.$attr[c]))
                    });
                    s(q, function (a, e) {
                        t[e] = c(a.replace(d,
                            u))
                    });
                    f.$watch(k, function (c) {
                        c = parseFloat(c);
                        var d = isNaN(c);
                        d || c in q || (c = a.pluralCat(c - p));
                        c === n || d && isNaN(n) || (w(), w = f.$watch(t[c], l), n = c)
                    })
                }
            }
        }], ne = ["$parse", "$animate", function (a, c) {
            var d = M("ngRepeat"), e = function (a, c, d, e, k, m, p) {
                a[d] = e;
                k && (a[k] = m);
                a.$index = c;
                a.$first = 0 === c;
                a.$last = c === p - 1;
                a.$middle = !(a.$first || a.$last);
                a.$odd = !(a.$even = 0 === (c & 1))
            };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1E3,
                terminal: !0,
                $$tlb: !0,
                compile: function (f, g) {
                    var h = g.ngRepeat, l = X.createComment(" end ngRepeat: " +
                        h + " "),
                        k = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!k) throw d("iexp", h);
                    var m = k[1], p = k[2], q = k[3], t = k[4],
                        k = m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                    if (!k) throw d("iidexp", m);
                    var r = k[3] || k[1], w = k[2];
                    if (q && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q))) throw d("badident", q);
                    var y, n, D, H, v = {$id: Na};
                    t ? y = a(t) : (D = function (a, c) {
                        return Na(c)
                    },
                        H = function (a) {
                            return a
                        });
                    return function (a, f, g, k, m) {
                        y && (n = function (c, d, e) {
                            w && (v[w] = c);
                            v[r] = d;
                            v.$index = e;
                            return y(a, v)
                        });
                        var t = fa();
                        a.$watchCollection(p, function (g) {
                            var k, p, y = f[0], F, v = fa(), B, z, G, E, J, x, K;
                            q && (a[q] = g);
                            if (Ta(g)) J = g, p = n || D; else {
                                p = n || H;
                                J = [];
                                for (K in g) g.hasOwnProperty(K) && "$" != K.charAt(0) && J.push(K);
                                J.sort()
                            }
                            B = J.length;
                            K = Array(B);
                            for (k = 0; k < B; k++) if (z = g === J ? k : J[k], G = g[z], E = p(z, G, k), t[E]) x = t[E], delete t[E], v[E] = x, K[k] = x; else {
                                if (v[E]) throw s(K, function (a) {
                                    a && a.scope && (t[a.id] = a)
                                }), d("dupes",
                                    h, E, G);
                                K[k] = {id: E, scope: u, clone: u};
                                v[E] = !0
                            }
                            for (F in t) {
                                x = t[F];
                                E = ub(x.clone);
                                c.leave(E);
                                if (E[0].parentNode) for (k = 0, p = E.length; k < p; k++) E[k].$$NG_REMOVED = !0;
                                x.scope.$destroy()
                            }
                            for (k = 0; k < B; k++) if (z = g === J ? k : J[k], G = g[z], x = K[k], x.scope) {
                                F = y;
                                do F = F.nextSibling; while (F && F.$$NG_REMOVED);
                                x.clone[0] != F && c.move(ub(x.clone), null, C(y));
                                y = x.clone[x.clone.length - 1];
                                e(x.scope, k, r, G, w, z, B)
                            } else m(function (a, d) {
                                x.scope = d;
                                var f = l.cloneNode(!1);
                                a[a.length++] = f;
                                c.enter(a, null, C(y));
                                y = f;
                                x.clone = a;
                                v[x.id] = x;
                                e(x.scope, k, r,
                                    G, w, z, B)
                            });
                            t = v
                        })
                    }
                }
            }
        }], oe = ["$animate", function (a) {
            return {
                restrict: "A", multiElement: !0, link: function (c, d, e) {
                    c.$watch(e.ngShow, function (c) {
                        a[c ? "removeClass" : "addClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"})
                    })
                }
            }
        }], he = ["$animate", function (a) {
            return {
                restrict: "A", multiElement: !0, link: function (c, d, e) {
                    c.$watch(e.ngHide, function (c) {
                        a[c ? "addClass" : "removeClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"})
                    })
                }
            }
        }], pe = Ja(function (a, c, d) {
            a.$watchCollection(d.ngStyle, function (a, d) {
                d && a !== d && s(d, function (a,
                                               d) {
                    c.css(d, "")
                });
                a && c.css(a)
            })
        }), qe = ["$animate", function (a) {
            return {
                restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
                    this.cases = {}
                }], link: function (c, d, e, f) {
                    var g = [], h = [], l = [], k = [], m = function (a, c) {
                        return function () {
                            a.splice(c, 1)
                        }
                    };
                    c.$watch(e.ngSwitch || e.on, function (c) {
                        var d, e;
                        d = 0;
                        for (e = l.length; d < e; ++d) a.cancel(l[d]);
                        d = l.length = 0;
                        for (e = k.length; d < e; ++d) {
                            var r = ub(h[d].clone);
                            k[d].$destroy();
                            (l[d] = a.leave(r)).then(m(l, d))
                        }
                        h.length = 0;
                        k.length = 0;
                        (g = f.cases["!" + c] || f.cases["?"]) && s(g, function (c) {
                            c.transclude(function (d,
                                                   e) {
                                k.push(e);
                                var f = c.element;
                                d[d.length++] = X.createComment(" end ngSwitchWhen: ");
                                h.push({clone: d});
                                a.enter(d, f.parent(), f)
                            })
                        })
                    })
                }
            }
        }], re = Ja({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (a, c, d, e, f) {
                e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];
                e.cases["!" + d.ngSwitchWhen].push({transclude: f, element: c})
            }
        }), se = Ja({
            transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function (a, c, d, e, f) {
                e.cases["?"] = e.cases["?"] || [];
                e.cases["?"].push({
                    transclude: f,
                    element: c
                })
            }
        }), ue = Ja({
            restrict: "EAC", link: function (a, c, d, e, f) {
                if (!f) throw M("ngTransclude")("orphan", ua(c));
                f(function (a) {
                    c.empty();
                    c.append(a)
                })
            }
        }), Vd = ["$templateCache", function (a) {
            return {
                restrict: "E", terminal: !0, compile: function (c, d) {
                    "text/ng-template" == d.type && a.put(d.id, c[0].text)
                }
            }
        }], fg = M("ngOptions"), te = da({restrict: "A", terminal: !0}), Wd = ["$compile", "$parse", function (a, c) {
            var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                e = {$setViewValue: B};
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: ["$element", "$scope", "$attrs", function (a, c, d) {
                    var l = this, k = {}, m = e, p;
                    l.databound = d.ngModel;
                    l.init = function (a, c, d) {
                        m = a;
                        p = d
                    };
                    l.addOption = function (c, d) {
                        Ma(c, '"option value"');
                        k[c] = !0;
                        m.$viewValue == c && (a.val(c), p.parent() && p.remove());
                        d && d[0].hasAttribute("selected") && (d[0].selected = !0)
                    };
                    l.removeOption = function (a) {
                        this.hasOption(a) && (delete k[a], m.$viewValue === a && this.renderUnknownOption(a))
                    };
                    l.renderUnknownOption = function (c) {
                        c =
                            "? " + Na(c) + " ?";
                        p.val(c);
                        a.prepend(p);
                        a.val(c);
                        p.prop("selected", !0)
                    };
                    l.hasOption = function (a) {
                        return k.hasOwnProperty(a)
                    };
                    c.$on("$destroy", function () {
                        l.renderUnknownOption = B
                    })
                }],
                link: function (e, g, h, l) {
                    function k(a, c, d, e) {
                        d.$render = function () {
                            var a = d.$viewValue;
                            e.hasOption(a) ? (v.parent() && v.remove(), c.val(a), "" === a && B.prop("selected", !0)) : z(a) && B ? c.val("") : e.renderUnknownOption(a)
                        };
                        c.on("change", function () {
                            a.$apply(function () {
                                v.parent() && v.remove();
                                d.$setViewValue(c.val())
                            })
                        })
                    }

                    function m(a, c, d) {
                        var e;
                        d.$render = function () {
                            var a = new eb(d.$viewValue);
                            s(c.find("option"), function (c) {
                                c.selected = y(a.get(c.value))
                            })
                        };
                        a.$watch(function () {
                            ea(e, d.$viewValue) || (e = qa(d.$viewValue), d.$render())
                        });
                        c.on("change", function () {
                            a.$apply(function () {
                                var a = [];
                                s(c.find("option"), function (c) {
                                    c.selected && a.push(c.value)
                                });
                                d.$setViewValue(a)
                            })
                        })
                    }

                    function p(e, f, g) {
                        function h(a, c, d) {
                            R[B] = d;
                            G && (R[G] = c);
                            return a(e, R)
                        }

                        function k(a) {
                            var c;
                            if (t) if (K && E(a)) {
                                c = new eb([]);
                                for (var d = 0; d < a.length; d++) c.put(h(K, null, a[d]), !0)
                            } else c =
                                new eb(a); else K && (a = h(K, null, a));
                            return function (d, e) {
                                var f;
                                f = K ? K : z ? z : A;
                                return t ? y(c.remove(h(f, d, e))) : a === h(f, d, e)
                            }
                        }

                        function l() {
                            n || (e.$$postDigest(p), n = !0)
                        }

                        function m(a, c, d) {
                            a[c] = a[c] || 0;
                            a[c] += d ? 1 : -1
                        }

                        function p() {
                            n = !1;
                            var a = {"": []}, c = [""], d, l, r, u, v;
                            r = g.$viewValue;
                            u = N(e) || [];
                            var B = G ? Object.keys(u).sort() : u, x, z, E, A, O = {};
                            v = k(r);
                            var M = !1, T, V;
                            Q = {};
                            for (A = 0; E = B.length, A < E; A++) {
                                x = A;
                                if (G && (x = B[A], "$" === x.charAt(0))) continue;
                                z = u[x];
                                d = h(J, x, z) || "";
                                (l = a[d]) || (l = a[d] = [], c.push(d));
                                d = v(x, z);
                                M = M || d;
                                z = h(C, x, z);
                                z = y(z) ? z : "";
                                V = K ? K(e, R) : G ? B[A] : A;
                                K && (Q[V] = x);
                                l.push({id: V, label: z, selected: d})
                            }
                            t || (w || null === r ? a[""].unshift({
                                id: "",
                                label: "",
                                selected: !M
                            }) : M || a[""].unshift({id: "?", label: "", selected: !0}));
                            x = 0;
                            for (B = c.length; x < B; x++) {
                                d = c[x];
                                l = a[d];
                                P.length <= x ? (r = {
                                    element: H.clone().attr("label", d),
                                    label: l.label
                                }, u = [r], P.push(u), f.append(r.element)) : (u = P[x], r = u[0], r.label != d && r.element.attr("label", r.label = d));
                                M = null;
                                A = 0;
                                for (E = l.length; A < E; A++) d = l[A], (v = u[A + 1]) ? (M = v.element, v.label !== d.label && (m(O, v.label, !1), m(O, d.label,
                                    !0), M.text(v.label = d.label), M.prop("label", v.label)), v.id !== d.id && M.val(v.id = d.id), M[0].selected !== d.selected && (M.prop("selected", v.selected = d.selected), Ra && M.prop("selected", v.selected))) : ("" === d.id && w ? T = w : (T = D.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).prop("label", d.label).text(d.label), u.push(v = {
                                    element: T,
                                    label: d.label,
                                    id: d.id,
                                    selected: d.selected
                                }), m(O, d.label, !0), M ? M.after(T) : r.element.append(T), M = T);
                                for (A++; u.length > A;) d = u.pop(), m(O, d.label, !1), d.element.remove()
                            }
                            for (; P.length >
                                   x;) {
                                l = P.pop();
                                for (A = 1; A < l.length; ++A) m(O, l[A].label, !1);
                                l[0].element.remove()
                            }
                            s(O, function (a, c) {
                                0 < a ? q.addOption(c) : 0 > a && q.removeOption(c)
                            })
                        }

                        var v;
                        if (!(v = r.match(d))) throw fg("iexp", r, ua(f));
                        var C = c(v[2] || v[1]), B = v[4] || v[6], x = / as /.test(v[0]) && v[1], z = x ? c(x) : null,
                            G = v[5], J = c(v[3] || ""), A = c(v[2] ? v[1] : B), N = c(v[7]), K = v[8] ? c(v[8]) : null,
                            Q = {}, P = [[{element: f, label: ""}]], R = {};
                        w && (a(w)(e), w.removeClass("ng-scope"), w.remove());
                        f.empty();
                        f.on("change", function () {
                            e.$apply(function () {
                                var a = N(e) || [], c;
                                if (t) c = [], s(f.val(),
                                    function (d) {
                                        d = K ? Q[d] : d;
                                        c.push("?" === d ? u : "" === d ? null : h(z ? z : A, d, a[d]))
                                    }); else {
                                    var d = K ? Q[f.val()] : f.val();
                                    c = "?" === d ? u : "" === d ? null : h(z ? z : A, d, a[d])
                                }
                                g.$setViewValue(c);
                                p()
                            })
                        });
                        g.$render = p;
                        e.$watchCollection(N, l);
                        e.$watchCollection(function () {
                            var a = N(e), c;
                            if (a && E(a)) {
                                c = Array(a.length);
                                for (var d = 0, f = a.length; d < f; d++) c[d] = h(C, d, a[d])
                            } else if (a) for (d in c = {}, a) a.hasOwnProperty(d) && (c[d] = h(C, d, a[d]));
                            return c
                        }, l);
                        t && e.$watchCollection(function () {
                            return g.$modelValue
                        }, l)
                    }

                    if (l[1]) {
                        var q = l[0];
                        l = l[1];
                        var t = h.multiple,
                            r = h.ngOptions, w = !1, B, n = !1, D = C(X.createElement("option")),
                            H = C(X.createElement("optgroup")), v = D.clone();
                        h = 0;
                        for (var x = g.children(), G = x.length; h < G; h++) if ("" === x[h].value) {
                            B = w = x.eq(h);
                            break
                        }
                        q.init(l, w, v);
                        t && (l.$isEmpty = function (a) {
                            return !a || 0 === a.length
                        });
                        r ? p(e, g, l) : t ? m(e, g, l) : k(e, g, l, q)
                    }
                }
            }
        }], Yd = ["$interpolate", function (a) {
            var c = {addOption: B, removeOption: B};
            return {
                restrict: "E", priority: 100, compile: function (d, e) {
                    if (z(e.value)) {
                        var f = a(d.text(), !0);
                        f || e.$set("value", d.text())
                    }
                    return function (a, d, e) {
                        var k =
                            d.parent(), m = k.data("$selectController") || k.parent().data("$selectController");
                        m && m.databound || (m = c);
                        f ? a.$watch(f, function (a, c) {
                            e.$set("value", a);
                            c !== a && m.removeOption(c);
                            m.addOption(a, d)
                        }) : m.addOption(e.value, d);
                        d.on("$destroy", function () {
                            m.removeOption(e.value)
                        })
                    }
                }
            }
        }], Xd = da({restrict: "E", terminal: !1}), Ac = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, c, d, e) {
                    e && (d.required = !0, e.$validators.required = function (a, c) {
                        return !d.required || !e.$isEmpty(c)
                    }, d.$observe("required", function () {
                        e.$validate()
                    }))
                }
            }
        },
        zc = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, c, d, e) {
                    if (e) {
                        var f, g = d.ngPattern || d.pattern;
                        d.$observe("pattern", function (a) {
                            x(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));
                            if (a && !a.test) throw M("ngPattern")("noregexp", g, a, ua(c));
                            f = a || u;
                            e.$validate()
                        });
                        e.$validators.pattern = function (a) {
                            return e.$isEmpty(a) || z(f) || f.test(a)
                        }
                    }
                }
            }
        }, Cc = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, c, d, e) {
                    if (e) {
                        var f = -1;
                        d.$observe("maxlength", function (a) {
                            a = $(a);
                            f = isNaN(a) ? -1 : a;
                            e.$validate()
                        });
                        e.$validators.maxlength = function (a, c) {
                            return 0 > f || e.$isEmpty(c) || c.length <= f
                        }
                    }
                }
            }
        }, Bc = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, c, d, e) {
                    if (e) {
                        var f = 0;
                        d.$observe("minlength", function (a) {
                            f = $(a) || 0;
                            e.$validate()
                        });
                        e.$validators.minlength = function (a, c) {
                            return e.$isEmpty(c) || c.length >= f
                        }
                    }
                }
            }
        };
    P.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (Nd(), Pd(aa), C(X).ready(function () {
        Jd(X, tc)
    }))
})(window, document);
!window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function (e, undefined) {
    var t, n, r = typeof undefined, i = e.location, o = e.document, s = o.documentElement, a = e.jQuery, u = e.$,
        l = {}, c = [], p = "2.0.3", f = c.concat, h = c.push, d = c.slice, g = c.indexOf, m = l.toString,
        y = l.hasOwnProperty, v = p.trim, x = function (e, n) {
            return new x.fn.init(e, n, t)
        }, b = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, w = /\S+/g, T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, k = /^-ms-/, N = /-([\da-z])/gi, E = function (e, t) {
            return t.toUpperCase()
        }, S = function () {
            o.removeEventListener("DOMContentLoaded", S, !1), e.removeEventListener("load", S, !1), x.ready()
        };
    x.fn = x.prototype = {
        jquery: p, constructor: x, init: function (e, t, n) {
            var r, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : T.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : o, !0)), C.test(r[1]) && x.isPlainObject(t)) for (r in t) x.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return i = o.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = o, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? n.ready(e) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
        }, selector: "", length: 0, toArray: function () {
            return d.call(this)
        }, get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        }, pushStack: function (e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return x.each(this, e, t)
        }, ready: function (e) {
            return x.ready.promise().done(e), this
        }, slice: function () {
            return this.pushStack(d.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, map: function (e) {
            return this.pushStack(x.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: h, sort: [].sort, splice: [].splice
    }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
        var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[1] || {}, a = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === a && (s = this, --a); u > a; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], r = e[t], s !== r && (l && r && (x.isPlainObject(r) || (i = x.isArray(r))) ? (i ? (i = !1, o = n && x.isArray(n) ? n : []) : o = n && x.isPlainObject(n) ? n : {}, s[t] = x.extend(l, o, r)) : r !== undefined && (s[t] = r));
        return s
    }, x.extend({
        expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""), noConflict: function (t) {
            return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = a), x
        }, isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? x.readyWait++ : x.ready(!0)
        }, ready: function (e) {
            (e === !0 ? --x.readyWait : x.isReady) || (x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(o, [x]), x.fn.trigger && x(o).trigger("ready").off("ready")))
        }, isFunction: function (e) {
            return "function" === x.type(e)
        }, isArray: Array.isArray, isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e
        }, isPlainObject: function (e) {
            if ("object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
            try {
                if (e.constructor && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (t) {
                return !1
            }
            return !0
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, error: function (e) {
            throw Error(e)
        }, parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || o;
            var r = C.exec(e), i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
        }, parseJSON: JSON.parse, parseXML: function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
                n = new DOMParser, t = n.parseFromString(e, "text/xml")
            } catch (r) {
                t = undefined
            }
            return (!t || t.getElementsByTagName("parsererror").length) && x.error("Invalid XML: " + e), t
        }, noop: function () {
        }, globalEval: function (e) {
            var t, n = eval;
            e = x.trim(e), e && (1 === e.indexOf("use strict") ? (t = o.createElement("script"), t.text = e, o.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        }, camelCase: function (e) {
            return e.replace(k, "ms-").replace(N, E)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, n) {
            var r, i = 0, o = e.length, s = j(e);
            if (n) {
                if (s) {
                    for (; o > i; i++) if (r = t.apply(e[i], n), r === !1) break
                } else for (i in e) if (r = t.apply(e[i], n), r === !1) break
            } else if (s) {
                for (; o > i; i++) if (r = t.call(e[i], i, e[i]), r === !1) break
            } else for (i in e) if (r = t.call(e[i], i, e[i]), r === !1) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : v.call(e)
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (j(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : g.call(t, e, n)
        }, merge: function (e, t) {
            var n = t.length, r = e.length, i = 0;
            if ("number" == typeof n) for (; n > i; i++) e[r++] = t[i]; else while (t[i] !== undefined) e[r++] = t[i++];
            return e.length = r, e
        }, grep: function (e, t, n) {
            var r, i = [], o = 0, s = e.length;
            for (n = !!n; s > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        }, map: function (e, t, n) {
            var r, i = 0, o = e.length, s = j(e), a = [];
            if (s) for (; o > i; i++) r = t(e[i], i, n), null != r && (a[a.length] = r); else for (i in e) r = t(e[i], i, n), null != r && (a[a.length] = r);
            return f.apply([], a)
        }, guid: 1, proxy: function (e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), x.isFunction(e) ? (r = d.call(arguments, 2), i = function () {
                return e.apply(t || this, r.concat(d.call(arguments)))
            }, i.guid = e.guid = e.guid || x.guid++, i) : undefined
        }, access: function (e, t, n, r, i, o, s) {
            var a = 0, u = e.length, l = null == n;
            if ("object" === x.type(n)) {
                i = !0;
                for (a in n) x.access(e, t, a, n[a], !0, o, s)
            } else if (r !== undefined && (i = !0, x.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                    return l.call(x(e), n)
                })), t)) for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        }, now: Date.now, swap: function (e, t, n, r) {
            var i, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = s[o];
            return i
        }
    }), x.ready.promise = function (t) {
        return n || (n = x.Deferred(), "complete" === o.readyState ? setTimeout(x.ready) : (o.addEventListener("DOMContentLoaded", S, !1), e.addEventListener("load", S, !1))), n.promise(t)
    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });

    function j(e) {
        var t = e.length, n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    t = x(o), function (e, undefined) {
        var t, n, r, i, o, s, a, u, l, c, p, f, h, d, g, m, y, v = "sizzle" + -new Date, b = e.document, w = 0, T = 0,
            C = st(), k = st(), N = st(), E = !1, S = function (e, t) {
                return e === t ? (E = !0, 0) : 0
            }, j = typeof undefined, D = 1 << 31, A = {}.hasOwnProperty, L = [], q = L.pop, H = L.push, O = L.push,
            F = L.slice, P = L.indexOf || function (e) {
                var t = 0, n = this.length;
                for (; n > t; t++) if (this[t] === e) return t;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]", W = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", $ = W.replace("w", "w#"),
            B = "\\[" + M + "*(" + W + ")" + M + "*(?:([*^$|!~]?=)" + M + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + $ + ")|)|)" + M + "*\\]",
            I = ":(" + W + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + B.replace(3, 8) + ")*)|.*)\\)|)",
            z = RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), _ = RegExp("^" + M + "*," + M + "*"),
            X = RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = RegExp(M + "*[+~]"),
            Y = RegExp("=" + M + "*([^\\]'\"]*)" + M + "*\\]", "g"), V = RegExp(I), G = RegExp("^" + $ + "$"), J = {
                ID: RegExp("^#(" + W + ")"),
                CLASS: RegExp("^\\.(" + W + ")"),
                TAG: RegExp("^(" + W.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + B),
                PSEUDO: RegExp("^" + I),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: RegExp("^(?:" + R + ")$", "i"),
                needsContext: RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            }, Q = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Z = /^(?:input|select|textarea|button)$/i, et = /^h\d$/i, tt = /'|\\/g,
            nt = RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), rt = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
            };
        try {
            O.apply(L = F.call(b.childNodes), b.childNodes), L[b.childNodes.length].nodeType
        } catch (it) {
            O = {
                apply: L.length ? function (e, t) {
                    H.apply(e, F.call(t))
                } : function (e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]) ;
                    e.length = n - 1
                }
            }
        }

        function ot(e, t, r, i) {
            var o, s, a, u, l, f, g, m, x, w;
            if ((t ? t.ownerDocument || t : b) !== p && c(t), t = t || p, r = r || [], !e || "string" != typeof e) return r;
            if (1 !== (u = t.nodeType) && 9 !== u) return [];
            if (h && !i) {
                if (o = K.exec(e)) if (a = o[1]) {
                    if (9 === u) {
                        if (s = t.getElementById(a), !s || !s.parentNode) return r;
                        if (s.id === a) return r.push(s), r
                    } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && y(t, s) && s.id === a) return r.push(s), r
                } else {
                    if (o[2]) return O.apply(r, t.getElementsByTagName(e)), r;
                    if ((a = o[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(r, t.getElementsByClassName(a)), r
                }
                if (n.qsa && (!d || !d.test(e))) {
                    if (m = g = v, x = t, w = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
                        f = gt(e), (g = t.getAttribute("id")) ? m = g.replace(tt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", l = f.length;
                        while (l--) f[l] = m + mt(f[l]);
                        x = U.test(e) && t.parentNode || t, w = f.join(",")
                    }
                    if (w) try {
                        return O.apply(r, x.querySelectorAll(w)), r
                    } catch (T) {
                    } finally {
                        g || t.removeAttribute("id")
                    }
                }
            }
            return kt(e.replace(z, "$1"), t, r, i)
        }

        function st() {
            var e = [];

            function t(n, r) {
                return e.push(n += " ") > i.cacheLength && delete t[e.shift()], t[n] = r
            }

            return t
        }

        function at(e) {
            return e[v] = !0, e
        }

        function ut(e) {
            var t = p.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function lt(e, t) {
            var n = e.split("|"), r = e.length;
            while (r--) i.attrHandle[n[r]] = t
        }

        function ct(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1
        }

        function pt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function ft(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ht(e) {
            return at(function (t) {
                return t = +t, at(function (n, r) {
                    var i, o = e([], n.length, t), s = o.length;
                    while (s--) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        s = ot.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, n = ot.support = {}, c = ot.setDocument = function (e) {
            var t = e ? e.ownerDocument || e : b, r = t.defaultView;
            return t !== p && 9 === t.nodeType && t.documentElement ? (p = t, f = t.documentElement, h = !s(t), r && r.attachEvent && r !== r.top && r.attachEvent("onbeforeunload", function () {
                c()
            }), n.attributes = ut(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ut(function (e) {
                return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = ut(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), n.getById = ut(function (e) {
                return f.appendChild(e).id = v, !t.getElementsByName || !t.getElementsByName(v).length
            }), n.getById ? (i.find.ID = function (e, t) {
                if (typeof t.getElementById !== j && h) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, i.filter.ID = function (e) {
                var t = e.replace(nt, rt);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete i.find.ID, i.filter.ID = function (e) {
                var t = e.replace(nt, rt);
                return function (e) {
                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                return typeof t.getElementsByTagName !== j ? t.getElementsByTagName(e) : undefined
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                return typeof t.getElementsByClassName !== j && h ? t.getElementsByClassName(e) : undefined
            }, g = [], d = [], (n.qsa = Q.test(t.querySelectorAll)) && (ut(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll(":checked").length || d.push(":checked")
            }), ut(function (e) {
                var n = t.createElement("input");
                n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && d.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:")
            })), (n.matchesSelector = Q.test(m = f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ut(function (e) {
                n.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", I)
            }), d = d.length && RegExp(d.join("|")), g = g.length && RegExp(g.join("|")), y = Q.test(f.contains) || f.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1
            }, S = f.compareDocumentPosition ? function (e, r) {
                if (e === r) return E = !0, 0;
                var i = r.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(r);
                return i ? 1 & i || !n.sortDetached && r.compareDocumentPosition(e) === i ? e === t || y(b, e) ? -1 : r === t || y(b, r) ? 1 : l ? P.call(l, e) - P.call(l, r) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, n) {
                var r, i = 0, o = e.parentNode, s = n.parentNode, a = [e], u = [n];
                if (e === n) return E = !0, 0;
                if (!o || !s) return e === t ? -1 : n === t ? 1 : o ? -1 : s ? 1 : l ? P.call(l, e) - P.call(l, n) : 0;
                if (o === s) return ct(e, n);
                r = e;
                while (r = r.parentNode) a.unshift(r);
                r = n;
                while (r = r.parentNode) u.unshift(r);
                while (a[i] === u[i]) i++;
                return i ? ct(a[i], u[i]) : a[i] === b ? -1 : u[i] === b ? 1 : 0
            }, t) : p
        }, ot.matches = function (e, t) {
            return ot(e, null, null, t)
        }, ot.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Y, "='$1']"), !(!n.matchesSelector || !h || g && g.test(t) || d && d.test(t))) try {
                var r = m.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {
            }
            return ot(t, p, null, [e]).length > 0
        }, ot.contains = function (e, t) {
            return (e.ownerDocument || e) !== p && c(e), y(e, t)
        }, ot.attr = function (e, t) {
            (e.ownerDocument || e) !== p && c(e);
            var r = i.attrHandle[t.toLowerCase()],
                o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !h) : undefined;
            return o === undefined ? n.attributes || !h ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null : o
        }, ot.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, ot.uniqueSort = function (e) {
            var t, r = [], i = 0, o = 0;
            if (E = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(S), E) {
                while (t = e[o++]) t === e[o] && (i = r.push(o));
                while (i--) e.splice(r[i], 1)
            }
            return e
        }, o = ot.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r]; r++) n += o(t);
            return n
        }, i = ot.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: J,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(nt, rt), e[3] = (e[4] || e[5] || "").replace(nt, rt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ot.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[5] && e[2];
                    return J.CHILD.test(e[0]) ? null : (e[3] && e[4] !== undefined ? e[2] = e[4] : n && V.test(n) && (t = gt(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(nt, rt).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = C[e + " "];
                    return t || (t = RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && C(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, t, n) {
                    return function (r) {
                        var i = ot.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, p, f, h, d, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode,
                            y = a && t.nodeName.toLowerCase(), x = !u && !a;
                        if (m) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g]) if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    d = g = "only" === e && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [s ? m.firstChild : m.lastChild], s && x) {
                                c = m[v] || (m[v] = {}), l = c[e] || [], h = l[0] === w && l[1], f = l[0] === w && l[2], p = h && m.childNodes[h];
                                while (p = ++h && p && p[g] || (f = h = 0) || d.pop()) if (1 === p.nodeType && ++f && p === t) {
                                    c[e] = [w, h, f];
                                    break
                                }
                            } else if (x && (l = (t[v] || (t[v] = {}))[e]) && l[0] === w) f = l[1]; else while (p = ++h && p && p[g] || (f = h = 0) || d.pop()) if ((a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (x && ((p[v] || (p[v] = {}))[e] = [w, f]), p === t)) break;
                            return f -= i, f === r || 0 === f % r && f / r >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
                    return r[v] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function (e, n) {
                        var i, o = r(e, t), s = o.length;
                        while (s--) i = P.call(e, o[s]), e[i] = !(n[i] = o[s])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: at(function (e) {
                    var t = [], n = [], r = a(e.replace(z, "$1"));
                    return r[v] ? at(function (e, t, n, i) {
                        var o, s = r(e, null, i, []), a = e.length;
                        while (a--) (o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }), has: at(function (e) {
                    return function (t) {
                        return ot(e, t).length > 0
                    }
                }), contains: at(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                    }
                }), lang: at(function (e) {
                    return G.test(e || "") || ot.error("unsupported lang: " + e), e = e.replace(nt, rt).toLowerCase(), function (t) {
                        var n;
                        do if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === f
                }, focus: function (e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0
                }, parent: function (e) {
                    return !i.pseudos.empty(e)
                }, header: function (e) {
                    return et.test(e.nodeName)
                }, input: function (e) {
                    return Z.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                }, first: ht(function () {
                    return [0]
                }), last: ht(function (e, t) {
                    return [t - 1]
                }), eq: ht(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: ht(function (e, t) {
                    var n = 0;
                    for (; t > n; n += 2) e.push(n);
                    return e
                }), odd: ht(function (e, t) {
                    var n = 1;
                    for (; t > n; n += 2) e.push(n);
                    return e
                }), lt: ht(function (e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; --r >= 0;) e.push(r);
                    return e
                }), gt: ht(function (e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; t > ++r;) e.push(r);
                    return e
                })
            }
        }, i.pseudos.nth = i.pseudos.eq;
        for (t in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) i.pseudos[t] = pt(t);
        for (t in{submit: !0, reset: !0}) i.pseudos[t] = ft(t);

        function dt() {
        }

        dt.prototype = i.filters = i.pseudos, i.setFilters = new dt;

        function gt(e, t) {
            var n, r, o, s, a, u, l, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            a = e, u = [], l = i.preFilter;
            while (a) {
                (!n || (r = _.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(o = [])), n = !1, (r = X.exec(a)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(z, " ")
                }), a = a.slice(n.length));
                for (s in i.filter) !(r = J[s].exec(a)) || l[s] && !(r = l[s](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: s,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? ot.error(e) : k(e, u).slice(0)
        }

        function mt(e) {
            var t = 0, n = e.length, r = "";
            for (; n > t; t++) r += e[t].value;
            return r
        }

        function yt(e, t, n) {
            var i = t.dir, o = n && "parentNode" === i, s = T++;
            return t.first ? function (t, n, r) {
                while (t = t[i]) if (1 === t.nodeType || o) return e(t, n, r)
            } : function (t, n, a) {
                var u, l, c, p = w + " " + s;
                if (a) {
                    while (t = t[i]) if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                } else while (t = t[i]) if (1 === t.nodeType || o) if (c = t[v] || (t[v] = {}), (l = c[i]) && l[0] === p) {
                    if ((u = l[1]) === !0 || u === r) return u === !0
                } else if (l = c[i] = [p], l[1] = e(t, n, a) || r, l[1] === !0) return !0
            }
        }

        function vt(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function xt(e, t, n, r, i) {
            var o, s = [], a = 0, u = e.length, l = null != t;
            for (; u > a; a++) (o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
            return s
        }

        function bt(e, t, n, r, i, o) {
            return r && !r[v] && (r = bt(r)), i && !i[v] && (i = bt(i, o)), at(function (o, s, a, u) {
                var l, c, p, f = [], h = [], d = s.length, g = o || Ct(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || !o && t ? g : xt(g, f, e, a, u), y = n ? i || (o ? e : d || r) ? [] : s : m;
                if (n && n(m, y, a, u), r) {
                    l = xt(y, h), r(l, [], a, u), c = l.length;
                    while (c--) (p = l[c]) && (y[h[c]] = !(m[h[c]] = p))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = y.length;
                            while (c--) (p = y[c]) && l.push(m[c] = p);
                            i(null, y = [], l, u)
                        }
                        c = y.length;
                        while (c--) (p = y[c]) && (l = i ? P.call(o, p) : f[c]) > -1 && (o[l] = !(s[l] = p))
                    }
                } else y = xt(y === s ? y.splice(d, y.length) : y), i ? i(null, s, y, u) : O.apply(s, y)
            })
        }

        function wt(e) {
            var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0,
                c = yt(function (e) {
                    return e === t
                }, a, !0), p = yt(function (e) {
                    return P.call(t, e) > -1
                }, a, !0), f = [function (e, n, r) {
                    return !s && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                }];
            for (; o > l; l++) if (n = i.relative[e[l].type]) f = [yt(vt(f), n)]; else {
                if (n = i.filter[e[l].type].apply(null, e[l].matches), n[v]) {
                    for (r = ++l; o > r; r++) if (i.relative[e[r].type]) break;
                    return bt(l > 1 && vt(f), l > 1 && mt(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(z, "$1"), n, r > l && wt(e.slice(l, r)), o > r && wt(e = e.slice(r)), o > r && mt(e))
                }
                f.push(n)
            }
            return vt(f)
        }

        function Tt(e, t) {
            var n = 0, o = t.length > 0, s = e.length > 0, a = function (a, l, c, f, h) {
                var d, g, m, y = [], v = 0, x = "0", b = a && [], T = null != h, C = u,
                    k = a || s && i.find.TAG("*", h && l.parentNode || l), N = w += null == C ? 1 : Math.random() || .1;
                for (T && (u = l !== p && l, r = n); null != (d = k[x]); x++) {
                    if (s && d) {
                        g = 0;
                        while (m = e[g++]) if (m(d, l, c)) {
                            f.push(d);
                            break
                        }
                        T && (w = N, r = ++n)
                    }
                    o && ((d = !m && d) && v--, a && b.push(d))
                }
                if (v += x, o && x !== v) {
                    g = 0;
                    while (m = t[g++]) m(b, y, l, c);
                    if (a) {
                        if (v > 0) while (x--) b[x] || y[x] || (y[x] = q.call(f));
                        y = xt(y)
                    }
                    O.apply(f, y), T && !a && y.length > 0 && v + t.length > 1 && ot.uniqueSort(f)
                }
                return T && (w = N, u = C), b
            };
            return o ? at(a) : a
        }

        a = ot.compile = function (e, t) {
            var n, r = [], i = [], o = N[e + " "];
            if (!o) {
                t || (t = gt(e)), n = t.length;
                while (n--) o = wt(t[n]), o[v] ? r.push(o) : i.push(o);
                o = N(e, Tt(i, r))
            }
            return o
        };

        function Ct(e, t, n) {
            var r = 0, i = t.length;
            for (; i > r; r++) ot(e, t[r], n);
            return n
        }

        function kt(e, t, r, o) {
            var s, u, l, c, p, f = gt(e);
            if (!o && 1 === f.length) {
                if (u = f[0] = f[0].slice(0), u.length > 2 && "ID" === (l = u[0]).type && n.getById && 9 === t.nodeType && h && i.relative[u[1].type]) {
                    if (t = (i.find.ID(l.matches[0].replace(nt, rt), t) || [])[0], !t) return r;
                    e = e.slice(u.shift().value.length)
                }
                s = J.needsContext.test(e) ? 0 : u.length;
                while (s--) {
                    if (l = u[s], i.relative[c = l.type]) break;
                    if ((p = i.find[c]) && (o = p(l.matches[0].replace(nt, rt), U.test(u[0].type) && t.parentNode || t))) {
                        if (u.splice(s, 1), e = o.length && mt(u), !e) return O.apply(r, o), r;
                        break
                    }
                }
            }
            return a(e, f)(o, t, !h, r, U.test(e)), r
        }

        n.sortStable = v.split("").sort(S).join("") === v, n.detectDuplicates = E, c(), n.sortDetached = ut(function (e) {
            return 1 & e.compareDocumentPosition(p.createElement("div"))
        }), ut(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || lt("type|href|height|width", function (e, t, n) {
            return n ? undefined : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ut(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || lt("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? undefined : e.defaultValue
        }), ut(function (e) {
            return null == e.getAttribute("disabled")
        }) || lt(R, function (e, t, n) {
            var r;
            return n ? undefined : (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null
        }), x.find = ot, x.expr = ot.selectors, x.expr[":"] = x.expr.pseudos, x.unique = ot.uniqueSort, x.text = ot.getText, x.isXMLDoc = ot.isXML, x.contains = ot.contains
    }(e);
    var D = {};

    function A(e) {
        var t = D[e] = {};
        return x.each(e.match(w) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    x.Callbacks = function (e) {
        e = "string" == typeof e ? D[e] || A(e) : x.extend({}, e);
        var t, n, r, i, o, s, a = [], u = !e.once && [], l = function (p) {
            for (t = e.memory && p, n = !0, s = i || 0, i = 0, o = a.length, r = !0; a && o > s; s++) if (a[s].apply(p[0], p[1]) === !1 && e.stopOnFalse) {
                t = !1;
                break
            }
            r = !1, a && (u ? u.length && l(u.shift()) : t ? a = [] : c.disable())
        }, c = {
            add: function () {
                if (a) {
                    var n = a.length;
                    (function s(t) {
                        x.each(t, function (t, n) {
                            var r = x.type(n);
                            "function" === r ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== r && s(n)
                        })
                    })(arguments), r ? o = a.length : t && (i = n, l(t))
                }
                return this
            }, remove: function () {
                return a && x.each(arguments, function (e, t) {
                    var n;
                    while ((n = x.inArray(t, a, n)) > -1) a.splice(n, 1), r && (o >= n && o--, s >= n && s--)
                }), this
            }, has: function (e) {
                return e ? x.inArray(e, a) > -1 : !(!a || !a.length)
            }, empty: function () {
                return a = [], o = 0, this
            }, disable: function () {
                return a = u = t = undefined, this
            }, disabled: function () {
                return !a
            }, lock: function () {
                return u = undefined, t || c.disable(), this
            }, locked: function () {
                return !u
            }, fireWith: function (e, t) {
                return !a || n && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? u.push(t) : l(t)), this
            }, fire: function () {
                return c.fireWith(this, arguments), this
            }, fired: function () {
                return !!n
            }
        };
        return c
    }, x.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]],
                n = "pending", r = {
                    state: function () {
                        return n
                    }, always: function () {
                        return i.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return x.Deferred(function (n) {
                            x.each(t, function (t, o) {
                                var s = o[0], a = x.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? x.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, x.each(t, function (e, o) {
                var s = o[2], a = o[3];
                r[o[1]] = s.add, a && s.add(function () {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t = 0, n = d.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
                o = 1 === i ? e : x.Deferred(), s = function (e, t, n) {
                    return function (r) {
                        t[e] = this, n[e] = arguments.length > 1 ? d.call(arguments) : r, n === a ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                    }
                }, a, u, l;
            if (r > 1) for (a = Array(r), u = Array(r), l = Array(r); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(s(t, l, n)).fail(o.reject).progress(s(t, u, a)) : --i;
            return i || o.resolveWith(l, n), o.promise()
        }
    }), x.support = function (t) {
        var n = o.createElement("input"), r = o.createDocumentFragment(), i = o.createElement("div"),
            s = o.createElement("select"), a = s.appendChild(o.createElement("option"));
        return n.type ? (n.type = "checkbox", t.checkOn = "" !== n.value, t.optSelected = a.selected, t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, n.checked = !0, t.noCloneChecked = n.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !a.disabled, n = o.createElement("input"), n.value = "t", n.type = "radio", t.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), r.appendChild(n), t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = "onfocusin" in e, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === i.style.backgroundClip, x(function () {
            var n, r,
                s = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
                a = o.getElementsByTagName("body")[0];
            a && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(i), i.innerHTML = "", i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", x.swap(a, null != a.style.zoom ? {zoom: 1} : {}, function () {
                t.boxSizing = 4 === i.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || {width: "4px"}).width, r = i.appendChild(o.createElement("div")), r.style.cssText = i.style.cssText = s, r.style.marginRight = r.style.width = "0", i.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), a.removeChild(n))
        }), t) : t
    }({});
    var L, q, H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, O = /([A-Z])/g;

    function F() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = x.expando + Math.random()
    }

    F.uid = 1, F.accepts = function (e) {
        return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0
    }, F.prototype = {
        key: function (e) {
            if (!F.accepts(e)) return 0;
            var t = {}, n = e[this.expando];
            if (!n) {
                n = F.uid++;
                try {
                    t[this.expando] = {value: n}, Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n, x.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        }, set: function (e, t, n) {
            var r, i = this.key(e), o = this.cache[i];
            if ("string" == typeof t) o[t] = n; else if (x.isEmptyObject(o)) x.extend(this.cache[i], t); else for (r in t) o[r] = t[r];
            return o
        }, get: function (e, t) {
            var n = this.cache[this.key(e)];
            return t === undefined ? n : n[t]
        }, access: function (e, t, n) {
            var r;
            return t === undefined || t && "string" == typeof t && n === undefined ? (r = this.get(e, t), r !== undefined ? r : this.get(e, x.camelCase(t))) : (this.set(e, t, n), n !== undefined ? n : t)
        }, remove: function (e, t) {
            var n, r, i, o = this.key(e), s = this.cache[o];
            if (t === undefined) this.cache[o] = {}; else {
                x.isArray(t) ? r = t.concat(t.map(x.camelCase)) : (i = x.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(w) || [])), n = r.length;
                while (n--) delete s[r[n]]
            }
        }, hasData: function (e) {
            return !x.isEmptyObject(this.cache[e[this.expando]] || {})
        }, discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    }, L = new F, q = new F, x.extend({
        acceptData: F.accepts, hasData: function (e) {
            return L.hasData(e) || q.hasData(e)
        }, data: function (e, t, n) {
            return L.access(e, t, n)
        }, removeData: function (e, t) {
            L.remove(e, t)
        }, _data: function (e, t, n) {
            return q.access(e, t, n)
        }, _removeData: function (e, t) {
            q.remove(e, t)
        }
    }), x.fn.extend({
        data: function (e, t) {
            var n, r, i = this[0], o = 0, s = null;
            if (e === undefined) {
                if (this.length && (s = L.get(i), 1 === i.nodeType && !q.get(i, "hasDataAttrs"))) {
                    for (n = i.attributes; n.length > o; o++) r = n[o].name, 0 === r.indexOf("data-") && (r = x.camelCase(r.slice(5)), P(i, r, s[r]));
                    q.set(i, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each(function () {
                L.set(this, e)
            }) : x.access(this, function (t) {
                var n, r = x.camelCase(e);
                if (i && t === undefined) {
                    if (n = L.get(i, e), n !== undefined) return n;
                    if (n = L.get(i, r), n !== undefined) return n;
                    if (n = P(i, r, undefined), n !== undefined) return n
                } else this.each(function () {
                    var n = L.get(this, r);
                    L.set(this, r, t), -1 !== e.indexOf("-") && n !== undefined && L.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                L.remove(this, e)
            })
        }
    });

    function P(e, t, n) {
        var r;
        if (n === undefined && 1 === e.nodeType) if (r = "data-" + t.replace(O, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
            try {
                n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : H.test(n) ? JSON.parse(n) : n
            } catch (i) {
            }
            L.set(e, t, n)
        } else n = undefined;
        return n
    }

    x.extend({
        queue: function (e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = q.get(e, t), n && (!r || x.isArray(n) ? r = q.access(e, t, x.makeArray(n)) : r.push(n)), r || []) : undefined
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), s = function () {
                x.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return q.get(e, n) || q.access(e, n, {
                empty: x.Callbacks("once memory").add(function () {
                    q.remove(e, [t + "queue", n])
                })
            })
        }
    }), x.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), n > arguments.length ? x.queue(this[0], e) : t === undefined ? this : this.each(function () {
                var n = x.queue(this, e, t);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                x.dequeue(this, e)
            })
        }, delay: function (e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = x.Deferred(), o = this, s = this.length, a = function () {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e, e = undefined), e = e || "fx";
            while (s--) n = q.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var R, M, W = /[\t\r\n\f]/g, $ = /\r/g, B = /^(?:input|select|textarea|button)$/i;
    x.fn.extend({
        attr: function (e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                x.removeAttr(this, e)
            })
        }, prop: function (e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[x.propFix[e] || e]
            })
        }, addClass: function (e) {
            var t, n, r, i, o, s = 0, a = this.length, u = "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function (t) {
                x(this).addClass(e.call(this, t, this.className))
            });
            if (u) for (t = (e || "").match(w) || []; a > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : " ")) {
                o = 0;
                while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                n.className = x.trim(r)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, s = 0, a = this.length, u = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function (t) {
                x(this).removeClass(e.call(this, t, this.className))
            });
            if (u) for (t = (e || "").match(w) || []; a > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : "")) {
                o = 0;
                while (i = t[o++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                n.className = e ? x.trim(r) : ""
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n) {
                    var t, i = 0, o = x(this), s = e.match(w) || [];
                    while (t = s[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else (n === r || "boolean" === n) && (this.className && q.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : q.get(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            var t = " " + e + " ", n = 0, r = this.length;
            for (; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(W, " ").indexOf(t) >= 0) return !0;
            return !1
        }, val: function (e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length) return r = x.isFunction(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, x(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : x.isArray(i) && (i = x.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, i, "value") !== undefined || (this.value = i))
                });
                if (i) return t = x.valHooks[i.type] || x.valHooks[i.nodeName.toLowerCase()], t && "get" in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value, "string" == typeof n ? n.replace($, "") : null == n ? "" : n)
            }
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            }, select: {
                get: function (e) {
                    var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i,
                        s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0;
                    for (; a > u; u++) if (n = r[u], !(!n.selected && u !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                        if (t = x(n).val(), o) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    var n, r, i = e.options, o = x.makeArray(t), s = i.length;
                    while (s--) r = i[s], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }, attr: function (e, t, n) {
            var i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === r ? x.prop(e, t, n) : (1 === s && x.isXMLDoc(e) || (t = t.toLowerCase(), i = x.attrHooks[t] || (x.expr.match.bool.test(t) ? M : R)), n === undefined ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = x.find.attr(e, t), null == o ? undefined : o) : null !== n ? i && "set" in i && (o = i.set(e, n, t)) !== undefined ? o : (e.setAttribute(t, n + ""), n) : (x.removeAttr(e, t), undefined))
        }, removeAttr: function (e, t) {
            var n, r, i = 0, o = t && t.match(w);
            if (o && 1 === e.nodeType) while (n = o[i++]) r = x.propFix[n] || n, x.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, t, n) {
            var r, i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !x.isXMLDoc(e), o && (t = x.propFix[t] || t, i = x.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    return e.hasAttribute("tabindex") || B.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), M = {
        set: function (e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = x.expr.attrHandle[t] || x.find.attr;
        x.expr.attrHandle[t] = function (e, t, r) {
            var i = x.expr.attrHandle[t],
                o = r ? undefined : (x.expr.attrHandle[t] = undefined) != n(e, t, r) ? t.toLowerCase() : null;
            return x.expr.attrHandle[t] = i, o
        }
    }), x.support.optSelected || (x.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        x.propFix[this.toLowerCase()] = this
    }), x.each(["radio", "checkbox"], function () {
        x.valHooks[this] = {
            set: function (e, t) {
                return x.isArray(t) ? e.checked = x.inArray(x(e).val(), t) >= 0 : undefined
            }
        }, x.support.checkOn || (x.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var I = /^key/, z = /^(?:mouse|contextmenu)|click/, _ = /^(?:focusinfocus|focusoutblur)$/,
        X = /^([^.]*)(?:\.(.+)|)$/;

    function U() {
        return !0
    }

    function Y() {
        return !1
    }

    function V() {
        try {
            return o.activeElement
        } catch (e) {
        }
    }

    x.event = {
        global: {},
        add: function (e, t, n, i, o) {
            var s, a, u, l, c, p, f, h, d, g, m, y = q.get(e);
            if (y) {
                n.handler && (s = n, n = s.handler, o = s.selector), n.guid || (n.guid = x.guid++), (l = y.events) || (l = y.events = {}), (a = y.handle) || (a = y.handle = function (e) {
                    return typeof x === r || e && x.event.triggered === e.type ? undefined : x.event.dispatch.apply(a.elem, arguments)
                }, a.elem = e), t = (t || "").match(w) || [""], c = t.length;
                while (c--) u = X.exec(t[c]) || [], d = m = u[1], g = (u[2] || "").split(".").sort(), d && (f = x.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = x.event.special[d] || {}, p = x.extend({
                    type: d,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && x.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                }, s), (h = l[d]) || (h = l[d] = [], h.delegateCount = 0, f.setup && f.setup.call(e, i, g, a) !== !1 || e.addEventListener && e.addEventListener(d, a, !1)), f.add && (f.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, p) : h.push(p), x.event.global[d] = !0);
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, s, a, u, l, c, p, f, h, d, g, m = q.hasData(e) && q.get(e);
            if (m && (u = m.events)) {
                t = (t || "").match(w) || [""], l = t.length;
                while (l--) if (a = X.exec(t[l]) || [], h = g = a[1], d = (a[2] || "").split(".").sort(), h) {
                    p = x.event.special[h] || {}, h = (r ? p.delegateType : p.bindType) || h, f = u[h] || [], a = a[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length;
                    while (o--) c = f[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, p.remove && p.remove.call(e, c));
                    s && !f.length && (p.teardown && p.teardown.call(e, d, m.handle) !== !1 || x.removeEvent(e, h, m.handle), delete u[h])
                } else for (h in u) x.event.remove(e, h + t[l], n, r, !0);
                x.isEmptyObject(u) && (delete m.handle, q.remove(e, "events"))
            }
        },
        trigger: function (t, n, r, i) {
            var s, a, u, l, c, p, f, h = [r || o], d = y.call(t, "type") ? t.type : t,
                g = y.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = u = r = r || o, 3 !== r.nodeType && 8 !== r.nodeType && !_.test(d + x.event.triggered) && (d.indexOf(".") >= 0 && (g = d.split("."), d = g.shift(), g.sort()), c = 0 > d.indexOf(":") && "on" + d, t = t[x.expando] ? t : new x.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = g.join("."), t.namespace_re = t.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = r), n = null == n ? [t] : x.makeArray(n, [t]), f = x.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !x.isWindow(r)) {
                    for (l = f.delegateType || d, _.test(l + d) || (a = a.parentNode); a; a = a.parentNode) h.push(a), u = a;
                    u === (r.ownerDocument || o) && h.push(u.defaultView || u.parentWindow || e)
                }
                s = 0;
                while ((a = h[s++]) && !t.isPropagationStopped()) t.type = s > 1 ? l : f.bindType || d, p = (q.get(a, "events") || {})[t.type] && q.get(a, "handle"), p && p.apply(a, n), p = c && a[c], p && x.acceptData(a) && p.apply && p.apply(a, n) === !1 && t.preventDefault();
                return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !x.acceptData(r) || c && x.isFunction(r[d]) && !x.isWindow(r) && (u = r[c], u && (r[c] = null), x.event.triggered = d, r[d](), x.event.triggered = undefined, u && (r[c] = u)), t.result
            }
        },
        dispatch: function (e) {
            e = x.event.fix(e);
            var t, n, r, i, o, s = [], a = d.call(arguments), u = (q.get(this, "events") || {})[e.type] || [],
                l = x.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                s = x.event.handlers.call(this, e, u), t = 0;
                while ((i = s[t++]) && !e.isPropagationStopped()) {
                    e.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !e.isImmediatePropagationStopped()) (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((x.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), r !== undefined && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, s = [], a = t.delegateCount, u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type)) for (; u !== this; u = u.parentNode || this) if (u.disabled !== !0 || "click" !== e.type) {
                for (r = [], n = 0; a > n; n++) o = t[n], i = o.selector + " ", r[i] === undefined && (r[i] = o.needsContext ? x(i, this).index(u) >= 0 : x.find(i, this, null, [u]).length), r[i] && r.push(o);
                r.length && s.push({elem: u, handlers: r})
            }
            return t.length > a && s.push({elem: this, handlers: t.slice(a)}), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, r, i, s = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || o, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || s === undefined || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[x.expando]) return e;
            var t, n, r, i = e.type, s = e, a = this.fixHooks[i];
            a || (this.fixHooks[i] = a = z.test(i) ? this.mouseHooks : I.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new x.Event(s), t = r.length;
            while (t--) n = r[t], e[n] = s[n];
            return e.target || (e.target = o), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, s) : e
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== V() && this.focus ? (this.focus(), !1) : undefined
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === V() && this.blur ? (this.blur(), !1) : undefined
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && x.nodeName(this, "input") ? (this.click(), !1) : undefined
                }, _default: function (e) {
                    return x.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    e.result !== undefined && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = x.extend(new x.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, x.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, x.Event = function (e, t) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? U : Y) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, undefined) : new x.Event(e, t)
    }, x.Event.prototype = {
        isDefaultPrevented: Y,
        isPropagationStopped: Y,
        isImmediatePropagationStopped: Y,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = U, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = U, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = U, this.stopPropagation()
        }
    }, x.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        x.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), x.support.focusinBubbles || x.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = 0, r = function (e) {
            x.event.simulate(t, e.target, x.event.fix(e), !0)
        };
        x.event.special[t] = {
            setup: function () {
                0 === n++ && o.addEventListener(e, r, !0)
            }, teardown: function () {
                0 === --n && o.removeEventListener(e, r, !0)
            }
        }
    }), x.fn.extend({
        on: function (e, t, n, r, i) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = undefined);
                for (s in e) this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = undefined) : null == r && ("string" == typeof t ? (r = n, n = undefined) : (r = n, n = t, t = undefined)), r === !1) r = Y; else if (!r) return this;
            return 1 === i && (o = r, r = function (e) {
                return x().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = x.guid++)), this.each(function () {
                x.event.add(this, e, r, n, t)
            })
        }, one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, x(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = undefined), n === !1 && (n = Y), this.each(function () {
                x.event.remove(this, e, n, t)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                x.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            return n ? x.event.trigger(e, t, n, !0) : undefined
        }
    });
    var G = /^.[^:#\[\.,]*$/, J = /^(?:parents|prev(?:Until|All))/, Q = x.expr.match.needsContext,
        K = {children: !0, contents: !0, next: !0, prev: !0};
    x.fn.extend({
        find: function (e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e) return this.pushStack(x(e).filter(function () {
                for (t = 0; i > t; t++) if (x.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) x.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }, has: function (e) {
            var t = x(e, this), n = t.length;
            return this.filter(function () {
                var e = 0;
                for (; n > e; e++) if (x.contains(this, t[e])) return !0
            })
        }, not: function (e) {
            return this.pushStack(et(this, e || [], !0))
        }, filter: function (e) {
            return this.pushStack(et(this, e || [], !1))
        }, is: function (e) {
            return !!et(this, "string" == typeof e && Q.test(e) ? x(e) : e || [], !1).length
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], s = Q.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                n = o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? x.unique(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? g.call(x(e), this[0]) : g.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e), r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function Z(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType) ;
        return e
    }

    x.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return x.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return x.dir(e, "parentNode", n)
        }, next: function (e) {
            return Z(e, "nextSibling")
        }, prev: function (e) {
            return Z(e, "previousSibling")
        }, nextAll: function (e) {
            return x.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return x.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return x.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return x.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return x.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return x.sibling(e.firstChild)
        }, contents: function (e) {
            return e.contentDocument || x.merge([], e.childNodes)
        }
    }, function (e, t) {
        x.fn[e] = function (n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (K[e] || x.unique(i), J.test(e) && i.reverse()), this.pushStack(i)
        }
    }), x.extend({
        filter: function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, dir: function (e, t, n) {
            var r = [], i = n !== undefined;
            while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
                if (i && x(e).is(n)) break;
                r.push(e)
            }
            return r
        }, sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });

    function et(e, t, n) {
        if (x.isFunction(t)) return x.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return x.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (G.test(t)) return x.filter(t, e, n);
            t = x.filter(t, e)
        }
        return x.grep(e, function (e) {
            return g.call(t, e) >= 0 !== n
        })
    }

    var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, nt = /<([\w:]+)/,
        rt = /<|&#?\w+;/, it = /<(?:script|style|link)/i, ot = /^(?:checkbox|radio)$/i,
        st = /checked\s*(?:[^=]|=\s*.checked.)/i, at = /^$|\/(?:java|ecma)script/i, ut = /^true\/(.*)/,
        lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ct = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ct.optgroup = ct.option, ct.tbody = ct.tfoot = ct.colgroup = ct.caption = ct.thead, ct.th = ct.td, x.fn.extend({
        text: function (e) {
            return x.access(this, function (e) {
                return e === undefined ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = pt(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = pt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            var n, r = e ? x.filter(e, this) : this, i = 0;
            for (; null != (n = r[i]); i++) t || 1 !== n.nodeType || x.cleanData(mt(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && dt(mt(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            var e, t = 0;
            for (; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(mt(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return x.clone(this, e, t)
            })
        }, html: function (e) {
            return x.access(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (e === undefined && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !it.test(e) && !ct[(nt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(tt, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (x.cleanData(mt(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = x.map(this, function (e) {
                return [e.nextSibling, e.parentNode]
            }), t = 0;
            return this.domManip(arguments, function (n) {
                var r = e[t++], i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t, n) {
            e = f.apply([], e);
            var r, i, o, s, a, u, l = 0, c = this.length, p = this, h = c - 1, d = e[0], g = x.isFunction(d);
            if (g || !(1 >= c || "string" != typeof d || x.support.checkClone) && st.test(d)) return this.each(function (r) {
                var i = p.eq(r);
                g && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (c && (r = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) {
                for (o = x.map(mt(r, "script"), ft), s = o.length; c > l; l++) a = r, l !== h && (a = x.clone(a, !0, !0), s && x.merge(o, mt(a, "script"))), t.call(this[l], a, l);
                if (s) for (u = o[o.length - 1].ownerDocument, x.map(o, ht), l = 0; s > l; l++) a = o[l], at.test(a.type || "") && !q.access(a, "globalEval") && x.contains(u, a) && (a.src ? x._evalUrl(a.src) : x.globalEval(a.textContent.replace(lt, "")))
            }
            return this
        }
    }), x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        x.fn[e] = function (e) {
            var n, r = [], i = x(e), o = i.length - 1, s = 0;
            for (; o >= s; s++) n = s === o ? this : this.clone(!0), x(i[s])[t](n), h.apply(r, n.get());
            return this.pushStack(r)
        }
    }), x.extend({
        clone: function (e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0), u = x.contains(e.ownerDocument, e);
            if (!(x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (s = mt(a), o = mt(e), r = 0, i = o.length; i > r; r++) yt(o[r], s[r]);
            if (t) if (n) for (o = o || mt(e), s = s || mt(a), r = 0, i = o.length; i > r; r++) gt(o[r], s[r]); else gt(e, a);
            return s = mt(a, "script"), s.length > 0 && dt(s, !u && mt(e, "script")), a
        }, buildFragment: function (e, t, n, r) {
            var i, o, s, a, u, l, c = 0, p = e.length, f = t.createDocumentFragment(), h = [];
            for (; p > c; c++) if (i = e[c], i || 0 === i) if ("object" === x.type(i)) x.merge(h, i.nodeType ? [i] : i); else if (rt.test(i)) {
                o = o || f.appendChild(t.createElement("div")), s = (nt.exec(i) || ["", ""])[1].toLowerCase(), a = ct[s] || ct._default, o.innerHTML = a[1] + i.replace(tt, "<$1></$2>") + a[2], l = a[0];
                while (l--) o = o.lastChild;
                x.merge(h, o.childNodes), o = f.firstChild, o.textContent = ""
            } else h.push(t.createTextNode(i));
            f.textContent = "", c = 0;
            while (i = h[c++]) if ((!r || -1 === x.inArray(i, r)) && (u = x.contains(i.ownerDocument, i), o = mt(f.appendChild(i), "script"), u && dt(o), n)) {
                l = 0;
                while (i = o[l++]) at.test(i.type || "") && n.push(i)
            }
            return f
        }, cleanData: function (e) {
            var t, n, r, i, o, s, a = x.event.special, u = 0;
            for (; (n = e[u]) !== undefined; u++) {
                if (F.accepts(n) && (o = n[q.expando], o && (t = q.cache[o]))) {
                    if (r = Object.keys(t.events || {}), r.length) for (s = 0; (i = r[s]) !== undefined; s++) a[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
                    q.cache[o] && delete q.cache[o]
                }
                delete L.cache[n[L.expando]]
            }
        }, _evalUrl: function (e) {
            return x.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
        }
    });

    function pt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function ft(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function ht(e) {
        var t = ut.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function dt(e, t) {
        var n = e.length, r = 0;
        for (; n > r; r++) q.set(e[r], "globalEval", !t || q.get(t[r], "globalEval"))
    }

    function gt(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (q.hasData(e) && (o = q.access(e), s = q.set(t, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (i in l) for (n = 0, r = l[i].length; r > n; n++) x.event.add(t, i, l[i][n])
            }
            L.hasData(e) && (a = L.access(e), u = x.extend({}, a), L.set(t, u))
        }
    }

    function mt(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return t === undefined || t && x.nodeName(e, t) ? x.merge([e], n) : n
    }

    function yt(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ot.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    x.fn.extend({
        wrapAll: function (e) {
            var t;
            return x.isFunction(e) ? this.each(function (t) {
                x(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this)
        }, wrapInner: function (e) {
            return x.isFunction(e) ? this.each(function (t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = x(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = x.isFunction(e);
            return this.each(function (n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var vt, xt, bt = /^(none|table(?!-c[ea]).+)/, wt = /^margin/, Tt = RegExp("^(" + b + ")(.*)$", "i"),
        Ct = RegExp("^(" + b + ")(?!px)[a-z%]+$", "i"), kt = RegExp("^([+-])=(" + b + ")", "i"), Nt = {BODY: "block"},
        Et = {position: "absolute", visibility: "hidden", display: "block"}, St = {letterSpacing: 0, fontWeight: 400},
        jt = ["Top", "Right", "Bottom", "Left"], Dt = ["Webkit", "O", "Moz", "ms"];

    function At(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Dt.length;
        while (i--) if (t = Dt[i] + n, t in e) return t;
        return r
    }

    function Lt(e, t) {
        return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }

    function qt(t) {
        return e.getComputedStyle(t, null)
    }

    function Ht(e, t) {
        var n, r, i, o = [], s = 0, a = e.length;
        for (; a > s; s++) r = e[s], r.style && (o[s] = q.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Lt(r) && (o[s] = q.access(r, "olddisplay", Rt(r.nodeName)))) : o[s] || (i = Lt(r), (n && "none" !== n || !i) && q.set(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    x.fn.extend({
        css: function (e, t) {
            return x.access(this, function (e, t, n) {
                var r, i, o = {}, s = 0;
                if (x.isArray(t)) {
                    for (r = qt(e), i = t.length; i > s; s++) o[t[s]] = x.css(e, t[s], !1, r);
                    return o
                }
                return n !== undefined ? x.style(e, t, n) : x.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return Ht(this, !0)
        }, hide: function () {
            return Ht(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Lt(this) ? x(this).show() : x(this).hide()
            })
        }
    }), x.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = vt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = x.camelCase(t), u = e.style;
                return t = x.cssProps[a] || (x.cssProps[a] = At(u, a)), s = x.cssHooks[t] || x.cssHooks[a], n === undefined ? s && "get" in s && (i = s.get(e, !1, r)) !== undefined ? i : u[t] : (o = typeof n, "string" === o && (i = kt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(x.css(e, t)), o = "number"), null == n || "number" === o && isNaN(n) || ("number" !== o || x.cssNumber[a] || (n += "px"), x.support.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && (n = s.set(e, n, r)) === undefined || (u[t] = n)), undefined)
            }
        },
        css: function (e, t, n, r) {
            var i, o, s, a = x.camelCase(t);
            return t = x.cssProps[a] || (x.cssProps[a] = At(e.style, a)), s = x.cssHooks[t] || x.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), i === undefined && (i = vt(e, t, r)), "normal" === i && t in St && (i = St[t]), "" === n || n ? (o = parseFloat(i), n === !0 || x.isNumeric(o) ? o || 0 : i) : i
        }
    }), vt = function (e, t, n) {
        var r, i, o, s = n || qt(e), a = s ? s.getPropertyValue(t) || s[t] : undefined, u = e.style;
        return s && ("" !== a || x.contains(e.ownerDocument, e) || (a = x.style(e, t)), Ct.test(a) && wt.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = s.width, u.width = r, u.minWidth = i, u.maxWidth = o)), a
    };

    function Ot(e, t, n) {
        var r = Tt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function Ft(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0;
        for (; 4 > o; o += 2) "margin" === n && (s += x.css(e, n + jt[o], !0, i)), r ? ("content" === n && (s -= x.css(e, "padding" + jt[o], !0, i)), "margin" !== n && (s -= x.css(e, "border" + jt[o] + "Width", !0, i))) : (s += x.css(e, "padding" + jt[o], !0, i), "padding" !== n && (s += x.css(e, "border" + jt[o] + "Width", !0, i)));
        return s
    }

    function Pt(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = qt(e),
            s = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = vt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ct.test(i)) return i;
            r = s && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + Ft(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function Rt(e) {
        var t = o, n = Nt[e];
        return n || (n = Mt(e, t), "none" !== n && n || (xt = (xt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (xt[0].contentWindow || xt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = Mt(e, t), xt.detach()), Nt[e] = n), n
    }

    function Mt(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body), r = x.css(n[0], "display");
        return n.remove(), r
    }

    x.each(["height", "width"], function (e, t) {
        x.cssHooks[t] = {
            get: function (e, n, r) {
                return n ? 0 === e.offsetWidth && bt.test(x.css(e, "display")) ? x.swap(e, Et, function () {
                    return Pt(e, t, r)
                }) : Pt(e, t, r) : undefined
            }, set: function (e, n, r) {
                var i = r && qt(e);
                return Ot(e, n, r ? Ft(e, t, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), x(function () {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function (e, t) {
                return t ? x.swap(e, {display: "inline-block"}, vt, [e, "marginRight"]) : undefined
            }
        }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, t) {
            x.cssHooks[t] = {
                get: function (e, n) {
                    return n ? (n = vt(e, t), Ct.test(n) ? x(e).position()[t] + "px" : n) : undefined
                }
            }
        })
    }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight
    }, x.expr.filters.visible = function (e) {
        return !x.expr.filters.hidden(e)
    }), x.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        x.cssHooks[e + t] = {
            expand: function (n) {
                var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) i[e + jt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, wt.test(e) || (x.cssHooks[e + t].set = Ot)
    });
    var Wt = /%20/g, $t = /\[\]$/, Bt = /\r?\n/g, It = /^(?:submit|button|image|reset|file)$/i,
        zt = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function () {
            return x.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && zt.test(this.nodeName) && !It.test(e) && (this.checked || !ot.test(e))
            }).map(function (e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
                    return {name: t.name, value: e.replace(Bt, "\r\n")}
                }) : {name: t.name, value: n.replace(Bt, "\r\n")}
            }).get()
        }
    }), x.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            t = x.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (t === undefined && (t = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e) _t(n, e[n], t, i);
        return r.join("&").replace(Wt, "+")
    };

    function _t(e, t, n, r) {
        var i;
        if (x.isArray(t)) x.each(t, function (t, i) {
            n || $t.test(e) ? r(e, i) : _t(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== x.type(t)) r(e, t); else for (i in t) _t(e + "[" + i + "]", t[i], n, r)
    }

    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        x.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), x.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Xt, Ut, Yt = x.now(), Vt = /\?/, Gt = /#.*$/, Jt = /([?&])_=[^&]*/, Qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Zt = /^(?:GET|HEAD)$/, en = /^\/\//,
        tn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, nn = x.fn.load, rn = {}, on = {}, sn = "*/".concat("*");
    try {
        Ut = i.href
    } catch (an) {
        Ut = o.createElement("a"), Ut.href = "", Ut = Ut.href
    }
    Xt = tn.exec(Ut.toLowerCase()) || [];

    function un(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(w) || [];
            if (x.isFunction(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function ln(e, t, n, r) {
        var i = {}, o = e === on;

        function s(a) {
            var u;
            return i[a] = !0, x.each(e[a] || [], function (e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : undefined : (t.dataTypes.unshift(l), s(l), !1)
            }), u
        }

        return s(t.dataTypes[0]) || !i["*"] && s("*")
    }

    function cn(e, t) {
        var n, r, i = x.ajaxSettings.flatOptions || {};
        for (n in t) t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && x.extend(!0, e, r), e
    }

    x.fn.load = function (e, t, n) {
        if ("string" != typeof e && nn) return nn.apply(this, arguments);
        var r, i, o, s = this, a = e.indexOf(" ");
        return a >= 0 && (r = e.slice(a), e = e.slice(0, a)), x.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (i = "POST"), s.length > 0 && x.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(r ? x("<div>").append(x.parseHTML(e)).find(r) : e)
        }).complete(n && function (e, t) {
            s.each(n, o || [e.responseText, t, e])
        }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        x.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ut,
            type: "GET",
            isLocal: Kt.test(Xt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": sn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": x.parseJSON, "text xml": x.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? cn(cn(e, x.ajaxSettings), t) : cn(x.ajaxSettings, e)
        },
        ajaxPrefilter: un(rn),
        ajaxTransport: un(on),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = undefined), t = t || {};
            var n, r, i, o, s, a, u, l, c = x.ajaxSetup({}, t), p = c.context || c,
                f = c.context && (p.nodeType || p.jquery) ? x(p) : x.event, h = x.Deferred(),
                d = x.Callbacks("once memory"), g = c.statusCode || {}, m = {}, y = {}, v = 0, b = "canceled", T = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (2 === v) {
                            if (!o) {
                                o = {};
                                while (t = Qt.exec(i)) o[t[1].toLowerCase()] = t[2]
                            }
                            t = o[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return 2 === v ? i : null
                    }, setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return v || (e = y[n] = y[n] || e, m[e] = t), this
                    }, overrideMimeType: function (e) {
                        return v || (c.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (2 > v) for (t in e) g[t] = [g[t], e[t]]; else T.always(e[T.status]);
                        return this
                    }, abort: function (e) {
                        var t = e || b;
                        return n && n.abort(t), k(0, t), this
                    }
                };
            if (h.promise(T).complete = d.add, T.success = T.done, T.error = T.fail, c.url = ((e || c.url || Ut) + "").replace(Gt, "").replace(en, Xt[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = x.trim(c.dataType || "*").toLowerCase().match(w) || [""], null == c.crossDomain && (a = tn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === Xt[1] && a[2] === Xt[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (Xt[3] || ("http:" === Xt[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = x.param(c.data, c.traditional)), ln(rn, c, t, T), 2 === v) return T;
            u = c.global, u && 0 === x.active++ && x.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Zt.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (Vt.test(r) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = Jt.test(r) ? r.replace(Jt, "$1_=" + Yt++) : r + (Vt.test(r) ? "&" : "?") + "_=" + Yt++)), c.ifModified && (x.lastModified[r] && T.setRequestHeader("If-Modified-Since", x.lastModified[r]), x.etag[r] && T.setRequestHeader("If-None-Match", x.etag[r])), (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", c.contentType), T.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + sn + "; q=0.01" : "") : c.accepts["*"]);
            for (l in c.headers) T.setRequestHeader(l, c.headers[l]);
            if (c.beforeSend && (c.beforeSend.call(p, T, c) === !1 || 2 === v)) return T.abort();
            b = "abort";
            for (l in{success: 1, error: 1, complete: 1}) T[l](c[l]);
            if (n = ln(on, c, t, T)) {
                T.readyState = 1, u && f.trigger("ajaxSend", [T, c]), c.async && c.timeout > 0 && (s = setTimeout(function () {
                    T.abort("timeout")
                }, c.timeout));
                try {
                    v = 1, n.send(m, k)
                } catch (C) {
                    if (!(2 > v)) throw C;
                    k(-1, C)
                }
            } else k(-1, "No Transport");

            function k(e, t, o, a) {
                var l, m, y, b, w, C = t;
                2 !== v && (v = 2, s && clearTimeout(s), n = undefined, i = a || "", T.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, o && (b = pn(c, T, o)), b = fn(c, b, T, l), l ? (c.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (x.lastModified[r] = w), w = T.getResponseHeader("etag"), w && (x.etag[r] = w)), 204 === e || "HEAD" === c.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, m = b.data, y = b.error, l = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (t || C) + "", l ? h.resolveWith(p, [m, C, T]) : h.rejectWith(p, [T, C, y]), T.statusCode(g), g = undefined, u && f.trigger(l ? "ajaxSuccess" : "ajaxError", [T, c, l ? m : y]), d.fireWith(p, [T, C]), u && (f.trigger("ajaxComplete", [T, c]), --x.active || x.event.trigger("ajaxStop")))
            }

            return T
        },
        getJSON: function (e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return x.get(e, undefined, t, "script")
        }
    }), x.each(["get", "post"], function (e, t) {
        x[t] = function (e, n, r, i) {
            return x.isFunction(n) && (i = i || r, r = n, n = undefined), x.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    });

    function pn(e, t, n) {
        var r, i, o, s, a = e.contents, u = e.dataTypes;
        while ("*" === u[0]) u.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) for (i in a) if (a[i] && a[i].test(r)) {
            u.unshift(i);
            break
        }
        if (u[0] in n) o = u[0]; else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : undefined
    }

    function fn(e, t, n, r) {
        var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
        if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        o = c.shift();
        while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (s = l[u + " " + o] || l["* " + o], !s) for (i in l) if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                break
            }
            if (s !== !0) if (s && e["throws"]) t = s(t); else try {
                t = s(t)
            } catch (p) {
                return {state: "parsererror", error: s ? p : "No conversion from " + u + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    x.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", function (e) {
        e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), x.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (r, i) {
                    t = x("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), o.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var hn = [], dn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = hn.pop() || x.expando + "_" + Yt++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, s,
            a = t.jsonp !== !1 && (dn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = x.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(dn, "$1" + i) : t.jsonp !== !1 && (t.url += (Vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return s || x.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            s = arguments
        }, r.always(function () {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, hn.push(i)), s && x.isFunction(o) && o(s[0]), s = o = undefined
        }), "script") : undefined
    }), x.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) {
        }
    };
    var gn = x.ajaxSettings.xhr(), mn = {0: 200, 1223: 204}, yn = 0, vn = {};
    e.ActiveXObject && x(e).on("unload", function () {
        for (var e in vn) vn[e]();
        vn = undefined
    }), x.support.cors = !!gn && "withCredentials" in gn, x.support.ajax = gn = !!gn, x.ajaxTransport(function (e) {
        var t;
        return x.support.cors || gn && !e.crossDomain ? {
            send: function (n, r) {
                var i, o, s = e.xhr();
                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) s[i] = e.xhrFields[i];
                e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) s.setRequestHeader(i, n[i]);
                t = function (e) {
                    return function () {
                        t && (delete vn[o], t = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? r(s.status || 404, s.statusText) : r(mn[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {text: s.responseText} : undefined, s.getAllResponseHeaders()))
                    }
                }, s.onload = t(), s.onerror = t("error"), t = vn[o = yn++] = t("abort"), s.send(e.hasContent && e.data || null)
            }, abort: function () {
                t && t()
            }
        } : undefined
    });
    var xn, bn, wn = /^(?:toggle|show|hide)$/, Tn = RegExp("^(?:([+-])=|)(" + b + ")([a-z%]*)$", "i"),
        Cn = /queueHooks$/, kn = [An], Nn = {
            "*": [function (e, t) {
                var n = this.createTween(e, t), r = n.cur(), i = Tn.exec(t), o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
                    s = (x.cssNumber[e] || "px" !== o && +r) && Tn.exec(x.css(n.elem, e)), a = 1, u = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], i = i || [], s = +r || 1;
                    do a = a || ".5", s /= a, x.style(n.elem, e, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --u)
                }
                return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };

    function En() {
        return setTimeout(function () {
            xn = undefined
        }), xn = x.now()
    }

    function Sn(e, t, n) {
        var r, i = (Nn[t] || []).concat(Nn["*"]), o = 0, s = i.length;
        for (; s > o; o++) if (r = i[o].call(n, t, e)) return r
    }

    function jn(e, t, n) {
        var r, i, o = 0, s = kn.length, a = x.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (i) return !1;
            var t = xn || En(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r,
                s = 0, u = l.tweens.length;
            for (; u > s; s++) l.tweens[s].run(o);
            return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1)
        }, l = a.promise({
            elem: e,
            props: x.extend({}, t),
            opts: x.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: xn || En(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = x.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; r > n; n++) l.tweens[n].run(1);
                return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
            }
        }), c = l.props;
        for (Dn(c, l.opts.specialEasing); s > o; o++) if (r = kn[o].call(l, e, c, l.opts)) return r;
        return x.map(c, Sn, l), x.isFunction(l.opts.start) && l.opts.start.call(e, l), x.fx.timer(x.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function Dn(e, t) {
        var n, r, i, o, s;
        for (n in e) if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = x.cssHooks[r], s && "expand" in s) {
            o = s.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    x.Animation = x.extend(jn, {
        tweener: function (e, t) {
            x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; i > r; r++) n = e[r], Nn[n] = Nn[n] || [], Nn[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? kn.unshift(e) : kn.push(e)
        }
    });

    function An(e, t, n) {
        var r, i, o, s, a, u, l = this, c = {}, p = e.style, f = e.nodeType && Lt(e), h = q.get(e, "fxshow");
        n.queue || (a = x._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
            a.unqueued || u()
        }), a.unqueued++, l.always(function () {
            l.always(function () {
                a.unqueued--, x.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", l.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t) if (i = t[r], wn.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) {
                if ("show" !== i || !h || h[r] === undefined) continue;
                f = !0
            }
            c[r] = h && h[r] || x.style(e, r)
        }
        if (!x.isEmptyObject(c)) {
            h ? "hidden" in h && (f = h.hidden) : h = q.access(e, "fxshow", {}), o && (h.hidden = !f), f ? x(e).show() : l.done(function () {
                x(e).hide()
            }), l.done(function () {
                var t;
                q.remove(e, "fxshow");
                for (t in c) x.style(e, t, c[t])
            });
            for (r in c) s = Sn(f ? h[r] : 0, r, l), r in h || (h[r] = s.start, f && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function Ln(e, t, n, r, i) {
        return new Ln.prototype.init(e, t, n, r, i)
    }

    x.Tween = Ln, Ln.prototype = {
        constructor: Ln, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = Ln.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ln.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = Ln.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ln.propHooks._default.set(this), this
        }
    }, Ln.prototype.init.prototype = Ln.prototype, Ln.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Ln.propHooks.scrollTop = Ln.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.each(["toggle", "show", "hide"], function (e, t) {
        var n = x.fn[t];
        x.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(qn(t, !0), e, r, i)
        }
    }), x.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(Lt).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = x.isEmptyObject(e), o = x.speed(t, n, r), s = function () {
                var t = jn(this, x.extend({}, e), o);
                (i || q.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        }, stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = undefined), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, i = null != e && e + "queueHooks", o = x.timers, s = q.get(this);
                if (i) s[i] && s[i].stop && r(s[i]); else for (i in s) s[i] && s[i].stop && Cn.test(i) && r(s[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                (t || !n) && x.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = q.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, s = r ? r.length : 0;
                for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    });

    function qn(e, t) {
        var n, r = {height: e}, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = jt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    x.each({
        slideDown: qn("show"),
        slideUp: qn("hide"),
        slideToggle: qn("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        x.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), x.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
        }, r
    }, x.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, x.timers = [], x.fx = Ln.prototype.init, x.fx.tick = function () {
        var e, t = x.timers, n = 0;
        for (xn = x.now(); t.length > n; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
        t.length || x.fx.stop(), xn = undefined
    }, x.fx.timer = function (e) {
        e() && x.timers.push(e) && x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function () {
        bn || (bn = setInterval(x.fx.tick, x.fx.interval))
    }, x.fx.stop = function () {
        clearInterval(bn), bn = null
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
        return x.grep(x.timers, function (t) {
            return e === t.elem
        }).length
    }), x.fn.offset = function (e) {
        if (arguments.length) return e === undefined ? this : this.each(function (t) {
            x.offset.setOffset(this, e, t)
        });
        var t, n, i = this[0], o = {top: 0, left: 0}, s = i && i.ownerDocument;
        if (s) return t = s.documentElement, x.contains(t, i) ? (typeof i.getBoundingClientRect !== r && (o = i.getBoundingClientRect()), n = Hn(s), {
            top: o.top + n.pageYOffset - t.clientTop,
            left: o.left + n.pageXOffset - t.clientLeft
        }) : o
    }, x.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, s, a, u, l, c = x.css(e, "position"), p = x(e), f = {};
            "static" === c && (e.style.position = "relative"), a = p.offset(), o = x.css(e, "top"), u = x.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = p.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), x.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : p.css(f)
        }
    }, x.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = this[0], r = {top: 0, left: 0};
                return "fixed" === x.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (r = e.offset()), r.top += x.css(e[0], "borderTopWidth", !0), r.left += x.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - x.css(n, "marginTop", !0),
                    left: t.left - r.left - x.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || s;
                while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent;
                return e || s
            })
        }
    }), x.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, n) {
        var r = "pageYOffset" === n;
        x.fn[t] = function (i) {
            return x.access(this, function (t, i, o) {
                var s = Hn(t);
                return o === undefined ? s ? s[n] : t[i] : (s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o, undefined)
            }, t, i, arguments.length, null)
        }
    });

    function Hn(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }

    x.each({Height: "height", Width: "width"}, function (e, t) {
        x.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
            x.fn[r] = function (r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    s = n || (r === !0 || i === !0 ? "margin" : "border");
                return x.access(this, function (t, n, r) {
                    var i;
                    return x.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? x.css(t, n, s) : x.style(t, n, r, s)
                }, t, o ? r : undefined, o, null)
            }
        })
    }), x.fn.size = function () {
        return this.length
    }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : "function" == typeof define && define.amd && define("jquery", [], function () {
        return x
    }), "object" == typeof e && "object" == typeof e.document && (e.jQuery = e.$ = x)
})(window);

/**
 * Bootstrap.js v2.3.2 by @fat & @mdo
 * Copyright 2013 Twitter, Inc.
 * http://www.apache.org/licenses/LICENSE-2.0.txt
 */
!function (e) {
    "use strict";
    e(function () {
        e.support.transition = function () {
            var e = function () {
                var e = document.createElement("bootstrap"), t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                }, n;
                for (n in t) if (e.style[n] !== undefined) return t[n]
            }();
            return e && {end: e}
        }()
    })
}(window.jQuery), !function (e) {
    "use strict";
    var t = '[data-dismiss="alert"]', n = function (n) {
        e(n).on("click", t, this.close)
    };
    n.prototype.close = function (t) {
        function s() {
            i.trigger("closed").remove()
        }

        var n = e(this), r = n.attr("data-target"), i;
        r || (r = n.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), i = e(r), t && t.preventDefault(), i.length || (i = n.hasClass("alert") ? n : n.parent()), i.trigger(t = e.Event("close"));
        if (t.isDefaultPrevented()) return;
        i.removeClass("in"), e.support.transition && i.hasClass("fade") ? i.on(e.support.transition.end, s) : s()
    };
    var r = e.fn.alert;
    e.fn.alert = function (t) {
        return this.each(function () {
            var r = e(this), i = r.data("alert");
            i || r.data("alert", i = new n(this)), typeof t == "string" && i[t].call(r)
        })
    }, e.fn.alert.Constructor = n, e.fn.alert.noConflict = function () {
        return e.fn.alert = r, this
    }, e(document).on("click.alert.data-api", t, n.prototype.close)
}(window.jQuery), !function (e) {
    "use strict";
    var t = function (t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.button.defaults, n)
    };
    t.prototype.setState = function (e) {
        var t = "disabled", n = this.$element, r = n.data(), i = n.is("input") ? "val" : "html";
        e += "Text", r.resetText || n.data("resetText", n[i]()), n[i](r[e] || this.options[e]), setTimeout(function () {
            e == "loadingText" ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t)
        }, 0)
    }, t.prototype.toggle = function () {
        var e = this.$element.closest('[data-toggle="buttons-radio"]');
        e && e.find(".active").removeClass("active"), this.$element.toggleClass("active")
    };
    var n = e.fn.button;
    e.fn.button = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("button"), s = typeof n == "object" && n;
            i || r.data("button", i = new t(this, s)), n == "toggle" ? i.toggle() : n && i.setState(n)
        })
    }, e.fn.button.defaults = {loadingText: "loading..."}, e.fn.button.Constructor = t, e.fn.button.noConflict = function () {
        return e.fn.button = n, this
    }, e(document).on("click.button.data-api", "[data-toggle^=button]", function (t) {
        var n = e(t.target);
        n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle")
    })
}(window.jQuery), !function (e) {
    "use strict";
    var t = function (t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.options.pause == "hover" && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
    };
    t.prototype = {
        cycle: function (t) {
            return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
        }, getActiveIndex: function () {
            return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
        }, to: function (t) {
            var n = this.getActiveIndex(), r = this;
            if (t > this.$items.length - 1 || t < 0) return;
            return this.sliding ? this.$element.one("slid", function () {
                r.to(t)
            }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", e(this.$items[t]))
        }, pause: function (t) {
            return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition.end && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), clearInterval(this.interval), this.interval = null, this
        }, next: function () {
            if (this.sliding) return;
            return this.slide("next")
        }, prev: function () {
            if (this.sliding) return;
            return this.slide("prev")
        }, slide: function (t, n) {
            var r = this.$element.find(".item.active"), i = n || r[t](), s = this.interval,
                o = t == "next" ? "left" : "right", u = t == "next" ? "first" : "last", a = this, f;
            this.sliding = !0, s && this.pause(), i = i.length ? i : this.$element.find(".item")[u](), f = e.Event("slide", {
                relatedTarget: i[0],
                direction: o
            });
            if (i.hasClass("active")) return;
            this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function () {
                var t = e(a.$indicators.children()[a.getActiveIndex()]);
                t && t.addClass("active")
            }));
            if (e.support.transition && this.$element.hasClass("slide")) {
                this.$element.trigger(f);
                if (f.isDefaultPrevented()) return;
                i.addClass(t), i[0].offsetWidth, r.addClass(o), i.addClass(o), this.$element.one(e.support.transition.end, function () {
                    i.removeClass([t, o].join(" ")).addClass("active"), r.removeClass(["active", o].join(" ")), a.sliding = !1, setTimeout(function () {
                        a.$element.trigger("slid")
                    }, 0)
                })
            } else {
                this.$element.trigger(f);
                if (f.isDefaultPrevented()) return;
                r.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
            }
            return s && this.cycle(), this
        }
    };
    var n = e.fn.carousel;
    e.fn.carousel = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("carousel"),
                s = e.extend({}, e.fn.carousel.defaults, typeof n == "object" && n),
                o = typeof n == "string" ? n : s.slide;
            i || r.data("carousel", i = new t(this, s)), typeof n == "number" ? i.to(n) : o ? i[o]() : s.interval && i.pause().cycle()
        })
    }, e.fn.carousel.defaults = {
        interval: 5e3,
        pause: "hover"
    }, e.fn.carousel.Constructor = t, e.fn.carousel.noConflict = function () {
        return e.fn.carousel = n, this
    }, e(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function (t) {
        var n = e(this), r, i = e(n.attr("data-target") || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "")),
            s = e.extend({}, i.data(), n.data()), o;
        i.carousel(s), (o = n.attr("data-slide-to")) && i.data("carousel").pause().to(o).cycle(), t.preventDefault()
    })
}(window.jQuery), !function (e) {
    "use strict";
    var t = function (t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.collapse.defaults, n), this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
    };
    t.prototype = {
        constructor: t, dimension: function () {
            var e = this.$element.hasClass("width");
            return e ? "width" : "height"
        }, show: function () {
            var t, n, r, i;
            if (this.transitioning || this.$element.hasClass("in")) return;
            t = this.dimension(), n = e.camelCase(["scroll", t].join("-")), r = this.$parent && this.$parent.find("> .accordion-group > .in");
            if (r && r.length) {
                i = r.data("collapse");
                if (i && i.transitioning) return;
                r.collapse("hide"), i || r.data("collapse", null)
            }
            this.$element[t](0), this.transition("addClass", e.Event("show"), "shown"), e.support.transition && this.$element[t](this.$element[0][n])
        }, hide: function () {
            var t;
            if (this.transitioning || !this.$element.hasClass("in")) return;
            t = this.dimension(), this.reset(this.$element[t]()), this.transition("removeClass", e.Event("hide"), "hidden"), this.$element[t](0)
        }, reset: function (e) {
            var t = this.dimension();
            return this.$element.removeClass("collapse")[t](e || "auto")[0].offsetWidth, this.$element[e !== null ? "addClass" : "removeClass"]("collapse"), this
        }, transition: function (t, n, r) {
            var i = this, s = function () {
                n.type == "show" && i.reset(), i.transitioning = 0, i.$element.trigger(r)
            };
            this.$element.trigger(n);
            if (n.isDefaultPrevented()) return;
            this.transitioning = 1, this.$element[t]("in"), e.support.transition && this.$element.hasClass("collapse") ? this.$element.one(e.support.transition.end, s) : s()
        }, toggle: function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }
    };
    var n = e.fn.collapse;
    e.fn.collapse = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("collapse"),
                s = e.extend({}, e.fn.collapse.defaults, r.data(), typeof n == "object" && n);
            i || r.data("collapse", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.collapse.defaults = {toggle: !0}, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function () {
        return e.fn.collapse = n, this
    }, e(document).on("click.collapse.data-api", "[data-toggle=collapse]", function (t) {
        var n = e(this), r,
            i = n.attr("data-target") || t.preventDefault() || (r = n.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""),
            s = e(i).data("collapse") ? "toggle" : n.data();
        n[e(i).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), e(i).collapse(s)
    })
}(window.jQuery), !function (e) {
    "use strict";

    function r() {
        e(".dropdown-backdrop").remove(), e(t).each(function () {
            i(e(this)).removeClass("open")
        })
    }

    function i(t) {
        var n = t.attr("data-target"), r;
        n || (n = t.attr("href"), n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")), r = n && e(n);
        if (!r || !r.length) r = t.parent();
        return r
    }

    var t = "[data-toggle=dropdown]", n = function (t) {
        var n = e(t).on("click.dropdown.data-api", this.toggle);
        e("html").on("click.dropdown.data-api", function () {
            n.parent().removeClass("open")
        })
    };
    n.prototype = {
        constructor: n, toggle: function (t) {
            var n = e(this), s, o;
            if (n.is(".disabled, :disabled")) return;
            return s = i(n), o = s.hasClass("open"), r(), o || ("ontouchstart" in document.documentElement && e('<div class="dropdown-backdrop"/>').insertBefore(e(this)).on("click", r), s.toggleClass("open")), n.focus(), !1
        }, keydown: function (n) {
            var r, s, o, u, a, f;
            if (!/(38|40|27)/.test(n.keyCode)) return;
            r = e(this), n.preventDefault(), n.stopPropagation();
            if (r.is(".disabled, :disabled")) return;
            u = i(r), a = u.hasClass("open");
            if (!a || a && n.keyCode == 27) return n.which == 27 && u.find(t).focus(), r.click();
            s = e("[role=menu] li:not(.divider):visible a", u);
            if (!s.length) return;
            f = s.index(s.filter(":focus")), n.keyCode == 38 && f > 0 && f--, n.keyCode == 40 && f < s.length - 1 && f++, ~f || (f = 0), s.eq(f).focus()
        }
    };
    var s = e.fn.dropdown;
    e.fn.dropdown = function (t) {
        return this.each(function () {
            var r = e(this), i = r.data("dropdown");
            i || r.data("dropdown", i = new n(this)), typeof t == "string" && i[t].call(r)
        })
    }, e.fn.dropdown.Constructor = n, e.fn.dropdown.noConflict = function () {
        return e.fn.dropdown = s, this
    }, e(document).on("click.dropdown.data-api", r).on("click.dropdown.data-api", ".dropdown form", function (e) {
        e.stopPropagation()
    }).on("click.dropdown.data-api", t, n.prototype.toggle).on("keydown.dropdown.data-api", t + ", [role=menu]", n.prototype.keydown)
}(window.jQuery), !function (e) {
    "use strict";
    var t = function (t, n) {
        this.options = n, this.$element = e(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", e.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
    };
    t.prototype = {
        constructor: t, toggle: function () {
            return this[this.isShown ? "hide" : "show"]()
        }, show: function () {
            var t = this, n = e.Event("show");
            this.$element.trigger(n);
            if (this.isShown || n.isDefaultPrevented()) return;
            this.isShown = !0, this.escape(), this.backdrop(function () {
                var n = e.support.transition && t.$element.hasClass("fade");
                t.$element.parent().length || t.$element.appendTo(document.body), t.$element.show(), n && t.$element[0].offsetWidth, t.$element.addClass("in").attr("aria-hidden", !1), t.enforceFocus(), n ? t.$element.one(e.support.transition.end, function () {
                    t.$element.focus().trigger("shown")
                }) : t.$element.focus().trigger("shown")
            })
        }, hide: function (t) {
            t && t.preventDefault();
            var n = this;
            t = e.Event("hide"), this.$element.trigger(t);
            if (!this.isShown || t.isDefaultPrevented()) return;
            this.isShown = !1, this.escape(), e(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), e.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal()
        }, enforceFocus: function () {
            var t = this;
            e(document).on("focusin.modal", function (e) {
                t.$element[0] !== e.target && !t.$element.has(e.target).length && t.$element.focus()
            })
        }, escape: function () {
            var e = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function (t) {
                t.which == 27 && e.hide()
            }) : this.isShown || this.$element.off("keyup.dismiss.modal")
        }, hideWithTransition: function () {
            var t = this, n = setTimeout(function () {
                t.$element.off(e.support.transition.end), t.hideModal()
            }, 500);
            this.$element.one(e.support.transition.end, function () {
                clearTimeout(n), t.hideModal()
            })
        }, hideModal: function () {
            var e = this;
            this.$element.hide(), this.backdrop(function () {
                e.removeBackdrop(), e.$element.trigger("hidden")
            })
        }, removeBackdrop: function () {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, backdrop: function (t) {
            var n = this, r = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var i = e.support.transition && r;
                this.$backdrop = e('<div class="modal-backdrop ' + r + '" />').appendTo(document.body), this.$backdrop.click(this.options.backdrop == "static" ? e.proxy(this.$element[0].focus, this.$element[0]) : e.proxy(this.hide, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in");
                if (!t) return;
                i ? this.$backdrop.one(e.support.transition.end, t) : t()
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t) : t()) : t && t()
        }
    };
    var n = e.fn.modal;
    e.fn.modal = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("modal"),
                s = e.extend({}, e.fn.modal.defaults, r.data(), typeof n == "object" && n);
            i || r.data("modal", i = new t(this, s)), typeof n == "string" ? i[n]() : s.show && i.show()
        })
    }, e.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function () {
        return e.fn.modal = n, this
    }, e(document).on("click.modal.data-api", '[data-toggle="modal"]', function (t) {
        var n = e(this), r = n.attr("href"), i = e(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            s = i.data("modal") ? "toggle" : e.extend({remote: !/#/.test(r) && r}, i.data(), n.data());
        t.preventDefault(), i.modal(s).one("hide", function () {
            n.focus()
        })
    })
}(window.jQuery), !function (e) {
    "use strict";
    var t = function (e, t) {
        this.init("tooltip", e, t)
    };
    t.prototype = {
        constructor: t, init: function (t, n, r) {
            var i, s, o, u, a;
            this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.enabled = !0, o = this.options.trigger.split(" ");
            for (a = o.length; a--;) u = o[a], u == "click" ? this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)) : u != "manual" && (i = u == "hover" ? "mouseenter" : "focus", s = u == "hover" ? "mouseleave" : "blur", this.$element.on(i + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.leave, this)));
            this.options.selector ? this._options = e.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, getOptions: function (t) {
            return t = e.extend({}, e.fn[this.type].defaults, this.$element.data(), t), t.delay && typeof t.delay == "number" && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t
        }, enter: function (t) {
            var n = e.fn[this.type].defaults, r = {}, i;
            this._options && e.each(this._options, function (e, t) {
                n[e] != t && (r[e] = t)
            }, this), i = e(t.currentTarget)[this.type](r).data(this.type);
            if (!i.options.delay || !i.options.delay.show) return i.show();
            clearTimeout(this.timeout), i.hoverState = "in", this.timeout = setTimeout(function () {
                i.hoverState == "in" && i.show()
            }, i.options.delay.show)
        }, leave: function (t) {
            var n = e(t.currentTarget)[this.type](this._options).data(this.type);
            this.timeout && clearTimeout(this.timeout);
            if (!n.options.delay || !n.options.delay.hide) return n.hide();
            n.hoverState = "out", this.timeout = setTimeout(function () {
                n.hoverState == "out" && n.hide()
            }, n.options.delay.hide)
        }, show: function () {
            var t, n, r, i, s, o, u = e.Event("show");
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(u);
                if (u.isDefaultPrevented()) return;
                t = this.tip(), this.setContent(), this.options.animation && t.addClass("fade"), s = typeof this.options.placement == "function" ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement, t.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }), this.options.container ? t.appendTo(this.options.container) : t.insertAfter(this.$element), n = this.getPosition(), r = t[0].offsetWidth, i = t[0].offsetHeight;
                switch (s) {
                    case"bottom":
                        o = {top: n.top + n.height, left: n.left + n.width / 2 - r / 2};
                        break;
                    case"top":
                        o = {top: n.top - i, left: n.left + n.width / 2 - r / 2};
                        break;
                    case"left":
                        o = {top: n.top + n.height / 2 - i / 2, left: n.left - r};
                        break;
                    case"right":
                        o = {top: n.top + n.height / 2 - i / 2, left: n.left + n.width}
                }
                this.applyPlacement(o, s), this.$element.trigger("shown")
            }
        }, applyPlacement: function (e, t) {
            var n = this.tip(), r = n[0].offsetWidth, i = n[0].offsetHeight, s, o, u, a;
            n.offset(e).addClass(t).addClass("in"), s = n[0].offsetWidth, o = n[0].offsetHeight, t == "top" && o != i && (e.top = e.top + i - o, a = !0), t == "bottom" || t == "top" ? (u = 0, e.left < 0 && (u = e.left * -2, e.left = 0, n.offset(e), s = n[0].offsetWidth, o = n[0].offsetHeight), this.replaceArrow(u - r + s, s, "left")) : this.replaceArrow(o - i, o, "top"), a && n.offset(e)
        }, replaceArrow: function (e, t, n) {
            this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
        }, setContent: function () {
            var e = this.tip(), t = this.getTitle();
            e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
        }, hide: function () {
            function i() {
                var t = setTimeout(function () {
                    n.off(e.support.transition.end).detach()
                }, 500);
                n.one(e.support.transition.end, function () {
                    clearTimeout(t), n.detach()
                })
            }

            var t = this, n = this.tip(), r = e.Event("hide");
            this.$element.trigger(r);
            if (r.isDefaultPrevented()) return;
            return n.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? i() : n.detach(), this.$element.trigger("hidden"), this
        }, fixTitle: function () {
            var e = this.$element;
            (e.attr("title") || typeof e.attr("data-original-title") != "string") && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
        }, hasContent: function () {
            return this.getTitle()
        }, getPosition: function () {
            var t = this.$element[0];
            return e.extend({}, typeof t.getBoundingClientRect == "function" ? t.getBoundingClientRect() : {
                width: t.offsetWidth,
                height: t.offsetHeight
            }, this.$element.offset())
        }, getTitle: function () {
            var e, t = this.$element, n = this.options;
            return e = t.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(t[0]) : n.title), e
        }, tip: function () {
            return this.$tip = this.$tip || e(this.options.template)
        }, arrow: function () {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, validate: function () {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        }, enable: function () {
            this.enabled = !0
        }, disable: function () {
            this.enabled = !1
        }, toggleEnabled: function () {
            this.enabled = !this.enabled
        }, toggle: function (t) {
            var n = t ? e(t.currentTarget)[this.type](this._options).data(this.type) : this;
            n.tip().hasClass("in") ? n.hide() : n.show()
        }, destroy: function () {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    };
    var n = e.fn.tooltip;
    e.fn.tooltip = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("tooltip"), s = typeof n == "object" && n;
            i || r.data("tooltip", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.tooltip.Constructor = t, e.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, e.fn.tooltip.noConflict = function () {
        return e.fn.tooltip = n, this
    }
}(window.jQuery), !function (e) {
    "use strict";
    var t = function (e, t) {
        this.init("popover", e, t)
    };
    t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {
        constructor: t, setContent: function () {
            var e = this.tip(), t = this.getTitle(), n = this.getContent();
            e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content")[this.options.html ? "html" : "text"](n), e.removeClass("fade top bottom left right in")
        }, hasContent: function () {
            return this.getTitle() || this.getContent()
        }, getContent: function () {
            var e, t = this.$element, n = this.options;
            return e = (typeof n.content == "function" ? n.content.call(t[0]) : n.content) || t.attr("data-content"), e
        }, tip: function () {
            return this.$tip || (this.$tip = e(this.options.template)), this.$tip
        }, destroy: function () {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    });
    var n = e.fn.popover;
    e.fn.popover = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("popover"), s = typeof n == "object" && n;
            i || r.data("popover", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.popover.Constructor = t, e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), e.fn.popover.noConflict = function () {
        return e.fn.popover = n, this
    }
}(window.jQuery), !function (e) {
    "use strict";

    function t(t, n) {
        var r = e.proxy(this.process, this), i = e(t).is("body") ? e(window) : e(t), s;
        this.options = e.extend({}, e.fn.scrollspy.defaults, n), this.$scrollElement = i.on("scroll.scroll-spy.data-api", r), this.selector = (this.options.target || (s = e(t).attr("href")) && s.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = e("body"), this.refresh(), this.process()
    }

    t.prototype = {
        constructor: t, refresh: function () {
            var t = this, n;
            this.offsets = e([]), this.targets = e([]), n = this.$body.find(this.selector).map(function () {
                var n = e(this), r = n.data("target") || n.attr("href"), i = /^#\w/.test(r) && e(r);
                return i && i.length && [[i.position().top + (!e.isWindow(t.$scrollElement.get(0)) && t.$scrollElement.scrollTop()), r]] || null
            }).sort(function (e, t) {
                return e[0] - t[0]
            }).each(function () {
                t.offsets.push(this[0]), t.targets.push(this[1])
            })
        }, process: function () {
            var e = this.$scrollElement.scrollTop() + this.options.offset,
                t = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                n = t - this.$scrollElement.height(), r = this.offsets, i = this.targets, s = this.activeTarget, o;
            if (e >= n) return s != (o = i.last()[0]) && this.activate(o);
            for (o = r.length; o--;) s != i[o] && e >= r[o] && (!r[o + 1] || e <= r[o + 1]) && this.activate(i[o])
        }, activate: function (t) {
            var n, r;
            this.activeTarget = t, e(this.selector).parent(".active").removeClass("active"), r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]', n = e(r).parent("li").addClass("active"), n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate")
        }
    };
    var n = e.fn.scrollspy;
    e.fn.scrollspy = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("scrollspy"), s = typeof n == "object" && n;
            i || r.data("scrollspy", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.defaults = {offset: 10}, e.fn.scrollspy.noConflict = function () {
        return e.fn.scrollspy = n, this
    }, e(window).on("load", function () {
        e('[data-spy="scroll"]').each(function () {
            var t = e(this);
            t.scrollspy(t.data())
        })
    })
}(window.jQuery), !function (e) {
    "use strict";
    var t = function (t) {
        this.element = e(t)
    };
    t.prototype = {
        constructor: t, show: function () {
            var t = this.element, n = t.closest("ul:not(.dropdown-menu)"), r = t.attr("data-target"), i, s, o;
            r || (r = t.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
            if (t.parent("li").hasClass("active")) return;
            i = n.find(".active:last a")[0], o = e.Event("show", {relatedTarget: i}), t.trigger(o);
            if (o.isDefaultPrevented()) return;
            s = e(r), this.activate(t.parent("li"), n), this.activate(s, s.parent(), function () {
                t.trigger({type: "shown", relatedTarget: i})
            })
        }, activate: function (t, n, r) {
            function o() {
                i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), r && r()
            }

            var i = n.find("> .active"), s = r && e.support.transition && i.hasClass("fade");
            s ? i.one(e.support.transition.end, o) : o(), i.removeClass("in")
        }
    };
    var n = e.fn.tab;
    e.fn.tab = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("tab");
            i || r.data("tab", i = new t(this)), typeof n == "string" && i[n]()
        })
    }, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function () {
        return e.fn.tab = n, this
    }, e(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (t) {
        t.preventDefault(), e(this).tab("show")
    })
}(window.jQuery), !function (e) {
    "use strict";
    var t = function (t, n) {
        this.$element = e(t), this.options = e.extend({}, e.fn.typeahead.defaults, n), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = e(this.options.menu), this.shown = !1, this.listen()
    };
    t.prototype = {
        constructor: t, select: function () {
            var e = this.$menu.find(".active").attr("data-value");
            return this.$element.val(this.updater(e)).change(), this.hide()
        }, updater: function (e) {
            return e
        }, show: function () {
            var t = e.extend({}, this.$element.position(), {height: this.$element[0].offsetHeight});
            return this.$menu.insertAfter(this.$element).css({
                top: t.top + t.height,
                left: t.left
            }).show(), this.shown = !0, this
        }, hide: function () {
            return this.$menu.hide(), this.shown = !1, this
        }, lookup: function (t) {
            var n;
            return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (n = e.isFunction(this.source) ? this.source(this.query, e.proxy(this.process, this)) : this.source, n ? this.process(n) : this)
        }, process: function (t) {
            var n = this;
            return t = e.grep(t, function (e) {
                return n.matcher(e)
            }), t = this.sorter(t), t.length ? this.render(t.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
        }, matcher: function (e) {
            return ~e.toLowerCase().indexOf(this.query.toLowerCase())
        }, sorter: function (e) {
            var t = [], n = [], r = [], i;
            while (i = e.shift()) i.toLowerCase().indexOf(this.query.toLowerCase()) ? ~i.indexOf(this.query) ? n.push(i) : r.push(i) : t.push(i);
            return t.concat(n, r)
        }, highlighter: function (e) {
            var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return e.replace(new RegExp("(" + t + ")", "ig"), function (e, t) {
                return "<strong>" + t + "</strong>"
            })
        }, render: function (t) {
            var n = this;
            return t = e(t).map(function (t, r) {
                return t = e(n.options.item).attr("data-value", r), t.find("a").html(n.highlighter(r)), t[0]
            }), t.first().addClass("active"), this.$menu.html(t), this
        }, next: function (t) {
            var n = this.$menu.find(".active").removeClass("active"), r = n.next();
            r.length || (r = e(this.$menu.find("li")[0])), r.addClass("active")
        }, prev: function (e) {
            var t = this.$menu.find(".active").removeClass("active"), n = t.prev();
            n.length || (n = this.$menu.find("li").last()), n.addClass("active")
        }, listen: function () {
            this.$element.on("focus", e.proxy(this.focus, this)).on("blur", e.proxy(this.blur, this)).on("keypress", e.proxy(this.keypress, this)).on("keyup", e.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", e.proxy(this.keydown, this)), this.$menu.on("click", e.proxy(this.click, this)).on("mouseenter", "li", e.proxy(this.mouseenter, this)).on("mouseleave", "li", e.proxy(this.mouseleave, this))
        }, eventSupported: function (e) {
            var t = e in this.$element;
            return t || (this.$element.setAttribute(e, "return;"), t = typeof this.$element[e] == "function"), t
        }, move: function (e) {
            if (!this.shown) return;
            switch (e.keyCode) {
                case 9:
                case 13:
                case 27:
                    e.preventDefault();
                    break;
                case 38:
                    e.preventDefault(), this.prev();
                    break;
                case 40:
                    e.preventDefault(), this.next()
            }
            e.stopPropagation()
        }, keydown: function (t) {
            this.suppressKeyPressRepeat = ~e.inArray(t.keyCode, [40, 38, 9, 13, 27]), this.move(t)
        }, keypress: function (e) {
            if (this.suppressKeyPressRepeat) return;
            this.move(e)
        }, keyup: function (e) {
            switch (e.keyCode) {
                case 40:
                case 38:
                case 16:
                case 17:
                case 18:
                    break;
                case 9:
                case 13:
                    if (!this.shown) return;
                    this.select();
                    break;
                case 27:
                    if (!this.shown) return;
                    this.hide();
                    break;
                default:
                    this.lookup()
            }
            e.stopPropagation(), e.preventDefault()
        }, focus: function (e) {
            this.focused = !0
        }, blur: function (e) {
            this.focused = !1, !this.mousedover && this.shown && this.hide()
        }, click: function (e) {
            e.stopPropagation(), e.preventDefault(), this.select(), this.$element.focus()
        }, mouseenter: function (t) {
            this.mousedover = !0, this.$menu.find(".active").removeClass("active"), e(t.currentTarget).addClass("active")
        }, mouseleave: function (e) {
            this.mousedover = !1, !this.focused && this.shown && this.hide()
        }
    };
    var n = e.fn.typeahead;
    e.fn.typeahead = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("typeahead"), s = typeof n == "object" && n;
            i || r.data("typeahead", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        minLength: 1
    }, e.fn.typeahead.Constructor = t, e.fn.typeahead.noConflict = function () {
        return e.fn.typeahead = n, this
    }, e(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function (t) {
        var n = e(this);
        if (n.data("typeahead")) return;
        n.typeahead(n.data())
    })
}(window.jQuery), !function (e) {
    "use strict";
    var t = function (t, n) {
        this.options = e.extend({}, e.fn.affix.defaults, n), this.$window = e(window).on("scroll.affix.data-api", e.proxy(this.checkPosition, this)).on("click.affix.data-api", e.proxy(function () {
            setTimeout(e.proxy(this.checkPosition, this), 1)
        }, this)), this.$element = e(t), this.checkPosition()
    };
    t.prototype.checkPosition = function () {
        if (!this.$element.is(":visible")) return;
        var t = e(document).height(), n = this.$window.scrollTop(), r = this.$element.offset(), i = this.options.offset,
            s = i.bottom, o = i.top, u = "affix affix-top affix-bottom", a;
        typeof i != "object" && (s = o = i), typeof o == "function" && (o = i.top()), typeof s == "function" && (s = i.bottom()), a = this.unpin != null && n + this.unpin <= r.top ? !1 : s != null && r.top + this.$element.height() >= t - s ? "bottom" : o != null && n <= o ? "top" : !1;
        if (this.affixed === a) return;
        this.affixed = a, this.unpin = a == "bottom" ? r.top - n : null, this.$element.removeClass(u).addClass("affix" + (a ? "-" + a : ""))
    };
    var n = e.fn.affix;
    e.fn.affix = function (n) {
        return this.each(function () {
            var r = e(this), i = r.data("affix"), s = typeof n == "object" && n;
            i || r.data("affix", i = new t(this, s)), typeof n == "string" && i[n]()
        })
    }, e.fn.affix.Constructor = t, e.fn.affix.defaults = {offset: 0}, e.fn.affix.noConflict = function () {
        return e.fn.affix = n, this
    }, e(window).on("load", function () {
        e('[data-spy="affix"]').each(function () {
            var t = e(this), n = t.data();
            n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), t.affix(n)
        })
    })
}(window.jQuery);
angular.module('timer-demo', ['timer']).controller('TimerDemoController', ['$scope', function ($scope) {
    $scope.linkAnchors = function () {
        $('ul.nav a').click(function () {
            var path = $(this).attr('href');
            if (path != '#') {
                window.location = path;
            }
        });
    };

    $scope.btnText = {
        reset: "Start",
        started: "Stop",
        stopped: "Resume"
    };

    $scope.currentYear = (new Date).getFullYear();
    $scope.startTime = (new Date($scope.currentYear, 0, 1)).getTime();
    $scope.endYear = $scope.currentYear + 1;
    $scope.endTime = (new Date($scope.endYear, 0, 1)).getTime();

    $scope.callbackTimer = {};
    $scope.callbackTimer.status = 'Running';
    $scope.callbackTimer.callbackCount = 0;
    $scope.callbackTimer.finished = function () {
        $scope.callbackTimer.status = 'COMPLETE!!';
        $scope.callbackTimer.callbackCount++;
        $scope.$apply();
    };
}]);

var q = null;
window.PR_SHOULD_USE_CONTINUATION = !0;
(function () {
    function L(a) {
        function m(a) {
            var f = a.charCodeAt(0);
            if (f !== 92) return f;
            var b = a.charAt(1);
            return (f = r[b]) ? f : "0" <= b && b <= "7" ? parseInt(a.substring(1), 8) : b === "u" || b === "x" ? parseInt(a.substring(2), 16) : a.charCodeAt(1)
        }

        function e(a) {
            if (a < 32) return (a < 16 ? "\\x0" : "\\x") + a.toString(16);
            a = String.fromCharCode(a);
            if (a === "\\" || a === "-" || a === "[" || a === "]") a = "\\" + a;
            return a
        }

        function h(a) {
            for (var f = a.substring(1, a.length - 1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g), a =
                [], b = [], o = f[0] === "^", c = o ? 1 : 0, i = f.length; c < i; ++c) {
                var j = f[c];
                if (/\\[bdsw]/i.test(j)) a.push(j); else {
                    var j = m(j), d;
                    c + 2 < i && "-" === f[c + 1] ? (d = m(f[c + 2]), c += 2) : d = j;
                    b.push([j, d]);
                    d < 65 || j > 122 || (d < 65 || j > 90 || b.push([Math.max(65, j) | 32, Math.min(d, 90) | 32]), d < 97 || j > 122 || b.push([Math.max(97, j) & -33, Math.min(d, 122) & -33]))
                }
            }
            b.sort(function (a, f) {
                return a[0] - f[0] || f[1] - a[1]
            });
            f = [];
            j = [NaN, NaN];
            for (c = 0; c < b.length; ++c) i = b[c], i[0] <= j[1] + 1 ? j[1] = Math.max(j[1], i[1]) : f.push(j = i);
            b = ["["];
            o && b.push("^");
            b.push.apply(b, a);
            for (c = 0; c <
            f.length; ++c) i = f[c], b.push(e(i[0])), i[1] > i[0] && (i[1] + 1 > i[0] && b.push("-"), b.push(e(i[1])));
            b.push("]");
            return b.join("")
        }

        function y(a) {
            for (var f = a.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g), b = f.length, d = [], c = 0, i = 0; c < b; ++c) {
                var j = f[c];
                j === "(" ? ++i : "\\" === j.charAt(0) && (j = +j.substring(1)) && j <= i && (d[j] = -1)
            }
            for (c = 1; c < d.length; ++c) -1 === d[c] && (d[c] = ++t);
            for (i = c = 0; c < b; ++c) j = f[c], j === "(" ? (++i, d[i] === void 0 && (f[c] = "(?:")) : "\\" === j.charAt(0) &&
                (j = +j.substring(1)) && j <= i && (f[c] = "\\" + d[i]);
            for (i = c = 0; c < b; ++c) "^" === f[c] && "^" !== f[c + 1] && (f[c] = "");
            if (a.ignoreCase && s) for (c = 0; c < b; ++c) j = f[c], a = j.charAt(0), j.length >= 2 && a === "[" ? f[c] = h(j) : a !== "\\" && (f[c] = j.replace(/[A-Za-z]/g, function (a) {
                a = a.charCodeAt(0);
                return "[" + String.fromCharCode(a & -33, a | 32) + "]"
            }));
            return f.join("")
        }

        for (var t = 0, s = !1, l = !1, p = 0, d = a.length; p < d; ++p) {
            var g = a[p];
            if (g.ignoreCase) l = !0; else if (/[a-z]/i.test(g.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi, ""))) {
                s = !0;
                l = !1;
                break
            }
        }
        for (var r =
            {b: 8, t: 9, n: 10, v: 11, f: 12, r: 13}, n = [], p = 0, d = a.length; p < d; ++p) {
            g = a[p];
            if (g.global || g.multiline) throw Error("" + g);
            n.push("(?:" + y(g) + ")")
        }
        return RegExp(n.join("|"), l ? "gi" : "g")
    }

    function M(a) {
        function m(a) {
            switch (a.nodeType) {
                case 1:
                    if (e.test(a.className)) break;
                    for (var g = a.firstChild; g; g = g.nextSibling) m(g);
                    g = a.nodeName;
                    if ("BR" === g || "LI" === g) h[s] = "\n", t[s << 1] = y++, t[s++ << 1 | 1] = a;
                    break;
                case 3:
                case 4:
                    g = a.nodeValue, g.length && (g = p ? g.replace(/\r\n?/g, "\n") : g.replace(/[\t\n\r ]+/g, " "), h[s] = g, t[s << 1] = y, y += g.length,
                        t[s++ << 1 | 1] = a)
            }
        }

        var e = /(?:^|\s)nocode(?:\s|$)/, h = [], y = 0, t = [], s = 0, l;
        a.currentStyle ? l = a.currentStyle.whiteSpace : window.getComputedStyle && (l = document.defaultView.getComputedStyle(a, q).getPropertyValue("white-space"));
        var p = l && "pre" === l.substring(0, 3);
        m(a);
        return {a: h.join("").replace(/\n$/, ""), c: t}
    }

    function B(a, m, e, h) {
        m && (a = {a: m, d: a}, e(a), h.push.apply(h, a.e))
    }

    function x(a, m) {
        function e(a) {
            for (var l = a.d, p = [l, "pln"], d = 0, g = a.a.match(y) || [], r = {}, n = 0, z = g.length; n < z; ++n) {
                var f = g[n], b = r[f], o = void 0, c;
                if (typeof b ===
                    "string") c = !1; else {
                    var i = h[f.charAt(0)];
                    if (i) o = f.match(i[1]), b = i[0]; else {
                        for (c = 0; c < t; ++c) if (i = m[c], o = f.match(i[1])) {
                            b = i[0];
                            break
                        }
                        o || (b = "pln")
                    }
                    if ((c = b.length >= 5 && "lang-" === b.substring(0, 5)) && !(o && typeof o[1] === "string")) c = !1, b = "src";
                    c || (r[f] = b)
                }
                i = d;
                d += f.length;
                if (c) {
                    c = o[1];
                    var j = f.indexOf(c), k = j + c.length;
                    o[2] && (k = f.length - o[2].length, j = k - c.length);
                    b = b.substring(5);
                    B(l + i, f.substring(0, j), e, p);
                    B(l + i + j, c, C(b, c), p);
                    B(l + i + k, f.substring(k), e, p)
                } else p.push(l + i, b)
            }
            a.e = p
        }

        var h = {}, y;
        (function () {
            for (var e = a.concat(m),
                     l = [], p = {}, d = 0, g = e.length; d < g; ++d) {
                var r = e[d], n = r[3];
                if (n) for (var k = n.length; --k >= 0;) h[n.charAt(k)] = r;
                r = r[1];
                n = "" + r;
                p.hasOwnProperty(n) || (l.push(r), p[n] = q)
            }
            l.push(/[\S\s]/);
            y = L(l)
        })();
        var t = m.length;
        return e
    }

    function u(a) {
        var m = [], e = [];
        a.tripleQuotedStrings ? m.push(["str", /^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/, q, "'\""]) : a.multiLineStrings ? m.push(["str", /^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,
            q, "'\"`"]) : m.push(["str", /^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/, q, "\"'"]);
        a.verbatimStrings && e.push(["str", /^@"(?:[^"]|"")*(?:"|$)/, q]);
        var h = a.hashComments;
        h && (a.cStyleComments ? (h > 1 ? m.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, q, "#"]) : m.push(["com", /^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/, q, "#"]), e.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/, q])) : m.push(["com", /^#[^\n\r]*/,
            q, "#"]));
        a.cStyleComments && (e.push(["com", /^\/\/[^\n\r]*/, q]), e.push(["com", /^\/\*[\S\s]*?(?:\*\/|$)/, q]));
        a.regexLiterals && e.push(["lang-regex", /^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]);
        (h = a.types) && e.push(["typ", h]);
        a = ("" + a.keywords).replace(/^ | $/g,
            "");
        a.length && e.push(["kwd", RegExp("^(?:" + a.replace(/[\s,]+/g, "|") + ")\\b"), q]);
        m.push(["pln", /^\s+/, q, " \r\n\t\xa0"]);
        e.push(["lit", /^@[$_a-z][\w$@]*/i, q], ["typ", /^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/, q], ["pln", /^[$_a-z][\w$@]*/i, q], ["lit", /^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i, q, "0123456789"], ["pln", /^\\[\S\s]?/, q], ["pun", /^.[^\s\w"-$'./@\\`]*/, q]);
        return x(m, e)
    }

    function D(a, m) {
        function e(a) {
            switch (a.nodeType) {
                case 1:
                    if (k.test(a.className)) break;
                    if ("BR" === a.nodeName) h(a),
                    a.parentNode && a.parentNode.removeChild(a); else for (a = a.firstChild; a; a = a.nextSibling) e(a);
                    break;
                case 3:
                case 4:
                    if (p) {
                        var b = a.nodeValue, d = b.match(t);
                        if (d) {
                            var c = b.substring(0, d.index);
                            a.nodeValue = c;
                            (b = b.substring(d.index + d[0].length)) && a.parentNode.insertBefore(s.createTextNode(b), a.nextSibling);
                            h(a);
                            c || a.parentNode.removeChild(a)
                        }
                    }
            }
        }

        function h(a) {
            function b(a, d) {
                var e = d ? a.cloneNode(!1) : a, f = a.parentNode;
                if (f) {
                    var f = b(f, 1), g = a.nextSibling;
                    f.appendChild(e);
                    for (var h = g; h; h = g) g = h.nextSibling, f.appendChild(h)
                }
                return e
            }

            for (; !a.nextSibling;) if (a = a.parentNode, !a) return;
            for (var a = b(a.nextSibling, 0), e; (e = a.parentNode) && e.nodeType === 1;) a = e;
            d.push(a)
        }

        var k = /(?:^|\s)nocode(?:\s|$)/, t = /\r\n?|\n/, s = a.ownerDocument, l;
        a.currentStyle ? l = a.currentStyle.whiteSpace : window.getComputedStyle && (l = s.defaultView.getComputedStyle(a, q).getPropertyValue("white-space"));
        var p = l && "pre" === l.substring(0, 3);
        for (l = s.createElement("LI"); a.firstChild;) l.appendChild(a.firstChild);
        for (var d = [l], g = 0; g < d.length; ++g) e(d[g]);
        m === (m | 0) && d[0].setAttribute("value",
            m);
        var r = s.createElement("OL");
        r.className = "linenums";
        for (var n = Math.max(0, m - 1 | 0) || 0, g = 0, z = d.length; g < z; ++g) l = d[g], l.className = "L" + (g + n) % 10, l.firstChild || l.appendChild(s.createTextNode("\xa0")), r.appendChild(l);
        a.appendChild(r)
    }

    function k(a, m) {
        for (var e = m.length; --e >= 0;) {
            var h = m[e];
            A.hasOwnProperty(h) ? window.console && console.warn("cannot override language handler %s", h) : A[h] = a
        }
    }

    function C(a, m) {
        if (!a || !A.hasOwnProperty(a)) a = /^\s*</.test(m) ? "default-markup" : "default-code";
        return A[a]
    }

    function E(a) {
        var m =
            a.g;
        try {
            var e = M(a.h), h = e.a;
            a.a = h;
            a.c = e.c;
            a.d = 0;
            C(m, h)(a);
            var k = /\bMSIE\b/.test(navigator.userAgent), m = /\n/g, t = a.a, s = t.length, e = 0, l = a.c,
                p = l.length, h = 0, d = a.e, g = d.length, a = 0;
            d[g] = s;
            var r, n;
            for (n = r = 0; n < g;) d[n] !== d[n + 2] ? (d[r++] = d[n++], d[r++] = d[n++]) : n += 2;
            g = r;
            for (n = r = 0; n < g;) {
                for (var z = d[n], f = d[n + 1], b = n + 2; b + 2 <= g && d[b + 1] === f;) b += 2;
                d[r++] = z;
                d[r++] = f;
                n = b
            }
            for (d.length = r; h < p;) {
                var o = l[h + 2] || s, c = d[a + 2] || s, b = Math.min(o, c), i = l[h + 1], j;
                if (i.nodeType !== 1 && (j = t.substring(e, b))) {
                    k && (j = j.replace(m, "\r"));
                    i.nodeValue =
                        j;
                    var u = i.ownerDocument, v = u.createElement("SPAN");
                    v.className = d[a + 1];
                    var x = i.parentNode;
                    x.replaceChild(v, i);
                    v.appendChild(i);
                    e < o && (l[h + 1] = i = u.createTextNode(t.substring(b, o)), x.insertBefore(i, v.nextSibling))
                }
                e = b;
                e >= o && (h += 2);
                e >= c && (a += 2)
            }
        } catch (w) {
            "console" in window && console.log(w && w.stack ? w.stack : w)
        }
    }

    var v = ["break,continue,do,else,for,if,return,while"],
        w = [[v, "auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
            "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],
        F = [w, "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
        G = [w, "abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],
        H = [G, "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"],
        w = [w, "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],
        I = [v, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
        J = [v, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],
        v = [v, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"],
        K = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,
        N = /\S/, O = u({
            keywords: [F, H, w, "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END" +
            I, J, v], hashComments: !0, cStyleComments: !0, multiLineStrings: !0, regexLiterals: !0
        }), A = {};
    k(O, ["default-code"]);
    k(x([], [["pln", /^[^<?]+/], ["dec", /^<!\w[^>]*(?:>|$)/], ["com", /^<\!--[\S\s]*?(?:--\>|$)/], ["lang-", /^<\?([\S\s]+?)(?:\?>|$)/], ["lang-", /^<%([\S\s]+?)(?:%>|$)/], ["pun", /^(?:<[%?]|[%?]>)/], ["lang-", /^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i], ["lang-js", /^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i], ["lang-css", /^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i], ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]]),
        ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]);
    k(x([["pln", /^\s+/, q, " \t\r\n"], ["atv", /^(?:"[^"]*"?|'[^']*'?)/, q, "\"'"]], [["tag", /^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i], ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i], ["lang-uq.val", /^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/], ["pun", /^[/<->]+/], ["lang-js", /^on\w+\s*=\s*"([^"]+)"/i], ["lang-js", /^on\w+\s*=\s*'([^']+)'/i], ["lang-js", /^on\w+\s*=\s*([^\s"'>]+)/i], ["lang-css", /^style\s*=\s*"([^"]+)"/i], ["lang-css", /^style\s*=\s*'([^']+)'/i], ["lang-css",
        /^style\s*=\s*([^\s"'>]+)/i]]), ["in.tag"]);
    k(x([], [["atv", /^[\S\s]+/]]), ["uq.val"]);
    k(u({keywords: F, hashComments: !0, cStyleComments: !0, types: K}), ["c", "cc", "cpp", "cxx", "cyc", "m"]);
    k(u({keywords: "null,true,false"}), ["json"]);
    k(u({keywords: H, hashComments: !0, cStyleComments: !0, verbatimStrings: !0, types: K}), ["cs"]);
    k(u({keywords: G, cStyleComments: !0}), ["java"]);
    k(u({keywords: v, hashComments: !0, multiLineStrings: !0}), ["bsh", "csh", "sh"]);
    k(u({keywords: I, hashComments: !0, multiLineStrings: !0, tripleQuotedStrings: !0}),
        ["cv", "py"]);
    k(u({
        keywords: "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
        hashComments: !0,
        multiLineStrings: !0,
        regexLiterals: !0
    }), ["perl", "pl", "pm"]);
    k(u({keywords: J, hashComments: !0, multiLineStrings: !0, regexLiterals: !0}), ["rb"]);
    k(u({keywords: w, cStyleComments: !0, regexLiterals: !0}), ["js"]);
    k(u({
        keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",
        hashComments: 3, cStyleComments: !0, multilineStrings: !0, tripleQuotedStrings: !0, regexLiterals: !0
    }), ["coffee"]);
    k(x([], [["str", /^[\S\s]+/]]), ["regex"]);
    window.prettyPrintOne = function (a, m, e) {
        var h = document.createElement("PRE");
        h.innerHTML = a;
        e && D(h, e);
        E({g: m, i: e, h: h});
        return h.innerHTML
    };
    window.prettyPrint = function (a) {
        function m() {
            for (var e = window.PR_SHOULD_USE_CONTINUATION ? l.now() + 250 : Infinity; p < h.length && l.now() < e; p++) {
                var n = h[p], k = n.className;
                if (k.indexOf("prettyprint") >= 0) {
                    var k = k.match(g), f, b;
                    if (b =
                            !k) {
                        b = n;
                        for (var o = void 0, c = b.firstChild; c; c = c.nextSibling) var i = c.nodeType, o = i === 1 ? o ? b : c : i === 3 ? N.test(c.nodeValue) ? b : o : o;
                        b = (f = o === b ? void 0 : o) && "CODE" === f.tagName
                    }
                    b && (k = f.className.match(g));
                    k && (k = k[1]);
                    b = !1;
                    for (o = n.parentNode; o; o = o.parentNode) if ((o.tagName === "pre" || o.tagName === "code" || o.tagName === "xmp") && o.className && o.className.indexOf("prettyprint") >= 0) {
                        b = !0;
                        break
                    }
                    b || ((b = (b = n.className.match(/\blinenums\b(?::(\d+))?/)) ? b[1] && b[1].length ? +b[1] : !0 : !1) && D(n, b), d = {
                        g: k,
                        h: n,
                        i: b
                    }, E(d))
                }
            }
            p < h.length ? setTimeout(m,
                250) : a && a()
        }

        for (var e = [document.getElementsByTagName("pre"), document.getElementsByTagName("code"), document.getElementsByTagName("xmp")], h = [], k = 0; k < e.length; ++k) for (var t = 0, s = e[k].length; t < s; ++t) h.push(e[k][t]);
        var e = q, l = Date;
        l.now || (l = {
            now: function () {
                return +new Date
            }
        });
        var p = 0, d, g = /\blang(?:uage)?-([\w.]+)(?!\S)/;
        m()
    };
    window.PR = {
        createSimpleLexer: x,
        registerLangHandler: k,
        sourceDecorator: u,
        PR_ATTRIB_NAME: "atn",
        PR_ATTRIB_VALUE: "atv",
        PR_COMMENT: "com",
        PR_DECLARATION: "dec",
        PR_KEYWORD: "kwd",
        PR_LITERAL: "lit",
        PR_NOCODE: "nocode",
        PR_PLAIN: "pln",
        PR_PUNCTUATION: "pun",
        PR_SOURCE: "src",
        PR_STRING: "str",
        PR_TAG: "tag",
        PR_TYPE: "typ"
    }
})();

// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

!function ($) {

    $(function () {

        var $window = $(window)

        // Disable certain links in docs
        $('section [href^=#]').click(function (e) {
            e.preventDefault()
        })

        // side bar
        setTimeout(function () {
            $('.bs-docs-sidenav').affix({
                offset: {
                    top: function () {
                        return $window.width() <= 980 ? 290 : 210
                    }
                    , bottom: 270
                }
            })
        }, 100)

        // make code pretty
        window.prettyPrint && prettyPrint()

        // add-ons
        $('.add-on :checkbox').on('click', function () {
            var $this = $(this)
                , method = $this.attr('checked') ? 'addClass' : 'removeClass'
            $(this).parents('.add-on')[method]('active')
        })

        // add tipsies to grid for scaffolding
        if ($('#gridSystem').length) {
            $('#gridSystem').tooltip({
                selector: '.show-grid > [class*="span"]'
                , title: function () {
                    return $(this).width() + 'px'
                }
            })
        }

        // tooltip demo
        $('.tooltip-demo').tooltip({
            selector: "a[data-toggle=tooltip]"
        })

        $('.tooltip-test').tooltip()
        $('.popover-test').popover()

        // popover demo
        $("a[data-toggle=popover]")
            .popover()
            .click(function (e) {
                e.preventDefault()
            })

        // button state demo
        $('#fat-btn')
            .click(function () {
                var btn = $(this)
                btn.button('loading')
                setTimeout(function () {
                    btn.button('reset')
                }, 3000)
            })

        // carousel demo
        $('#myCarousel').carousel()

        // javascript build logic
        var inputsComponent = $("#components.download input")
            , inputsPlugin = $("#plugins.download input")
            , inputsVariables = $("#variables.download input")

        // toggle all plugin checkboxes
        $('#components.download .toggle-all').on('click', function (e) {
            e.preventDefault()
            inputsComponent.attr('checked', !inputsComponent.is(':checked'))
        })

        $('#plugins.download .toggle-all').on('click', function (e) {
            e.preventDefault()
            inputsPlugin.attr('checked', !inputsPlugin.is(':checked'))
        })

        $('#variables.download .toggle-all').on('click', function (e) {
            e.preventDefault()
            inputsVariables.val('')
        })

        // request built javascript
        $('.download-btn .btn').on('click', function () {

            var css = $("#components.download input:checked")
                .map(function () {
                    return this.value
                })
                .toArray()
                , js = $("#plugins.download input:checked")
                .map(function () {
                    return this.value
                })
                .toArray()
                , vars = {}
                , img = ['glyphicons-halflings.png', 'glyphicons-halflings-white.png']

            $("#variables.download input")
                .each(function () {
                    $(this).val() && (vars[$(this).prev().text()] = $(this).val())
                })

            $.ajax({
                type: 'POST'
                , url: /\?dev/.test(window.location) ? 'http://localhost:3000' : 'http://bootstrap.herokuapp.com'
                , dataType: 'jsonpi'
                , params: {
                    js: js
                    , css: css
                    , vars: vars
                    , img: img
                }
            })
        })
    })

// Modified from the original jsonpi https://github.com/benvinegar/jquery-jsonpi
    $.ajaxTransport('jsonpi', function (opts, originalOptions, jqXHR) {
        var url = opts.url;

        return {
            send: function (_, completeCallback) {
                var name = 'jQuery_iframe_' + jQuery.now()
                    , iframe, form

                iframe = $('<iframe>')
                    .attr('name', name)
                    .appendTo('head')

                form = $('<form>')
                    .attr('method', opts.type) // GET or POST
                    .attr('action', url)
                    .attr('target', name)

                $.each(opts.params, function (k, v) {

                    $('<input>')
                        .attr('type', 'hidden')
                        .attr('name', k)
                        .attr('value', typeof v == 'string' ? v : JSON.stringify(v))
                        .appendTo(form)
                })

                form.appendTo('body').submit()
            }
        }
    })

}(window.jQuery)
