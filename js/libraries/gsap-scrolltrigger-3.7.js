/*!
 * ScrollTrigger 3.7.0
 * https://greensock.com
 *
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function J(e) {
    return e;
  }
  function K(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }
  function L() {
    return "undefined" != typeof window;
  }
  function M() {
    return Se || (L() && (Se = window.gsap) && Se.registerPlugin && Se);
  }
  function N(e) {
    return !!~i.indexOf(e);
  }
  function O(e, t) {
    return ~Fe.indexOf(e) && Fe[Fe.indexOf(e) + 1][t];
  }
  function P(t, e) {
    var r = e.s,
      n = e.sc,
      i = h.indexOf(t),
      o = n === it.sc ? 1 : 2;
    return (
      ~i || (i = h.push(t) - 1),
      h[i + o] ||
        (h[i + o] =
          O(t, r) ||
          (N(t)
            ? n
            : function (e) {
                return arguments.length ? (t[r] = e) : t[r];
              }))
    );
  }
  function Q(e) {
    return (
      O(e, "getBoundingClientRect") ||
      (N(e)
        ? function () {
            return (dt.width = Me.innerWidth), (dt.height = Me.innerHeight), dt;
          }
        : function () {
            return ot(e);
          })
    );
  }
  function T(e, t) {
    var r = t.s,
      n = t.d2,
      i = t.d,
      o = t.a;
    return (r = "scroll" + n) && (o = O(e, r))
      ? o() - Q(e)()[i]
      : N(e)
      ? Math.max(_e[r], Pe[r]) -
        (Me["inner" + n] || _e["client" + n] || Pe["client" + n])
      : e[r] - e["offset" + n];
  }
  function U(e, t) {
    for (var r = 0; r < p.length; r += 3)
      (t && !~t.indexOf(p[r + 1])) || e(p[r], p[r + 1], p[r + 2]);
  }
  function V(e) {
    return "string" == typeof e;
  }
  function W(e) {
    return "function" == typeof e;
  }
  function X(e) {
    return "number" == typeof e;
  }
  function Y(e) {
    return "object" == typeof e;
  }
  function Z(e) {
    return W(e) && e();
  }
  function $(r, n) {
    return function () {
      var e = Z(r),
        t = Z(n);
      return function () {
        Z(e), Z(t);
      };
    };
  }
  function ta(e) {
    return Me.getComputedStyle(e);
  }
  function va(e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  }
  function xa(e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0;
  }
  function ya(e) {
    var t,
      r = [],
      n = e.labels,
      i = e.duration();
    for (t in n) r.push(n[t] / i);
    return r;
  }
  function Ba(t, r, e, n) {
    return e.split(",").forEach(function (e) {
      return t(r, e, n);
    });
  }
  function Ca(e, t, r) {
    return e.addEventListener(t, r, { passive: !0 });
  }
  function Da(e, t, r) {
    return e.removeEventListener(t, r);
  }
  function Ha(e, t) {
    if (V(e)) {
      var r = e.indexOf("="),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (n *= t / 100), (e = e.substr(0, r - 1))),
        (e =
          n +
          (e in w
            ? w[e] * t
            : ~e.indexOf("%")
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0));
    }
    return e;
  }
  function Ia(e, t, r, n, i, o, a) {
    var s = i.startColor,
      l = i.endColor,
      c = i.fontSize,
      f = i.indent,
      u = i.fontWeight,
      d = ke.createElement("div"),
      p = N(r) || "fixed" === O(r, "pinType"),
      g = -1 !== e.indexOf("scroller"),
      h = p ? Pe : r,
      v = -1 !== e.indexOf("start"),
      m = v ? s : l,
      b =
        "border-color:" +
        m +
        ";font-size:" +
        c +
        ";color:" +
        m +
        ";font-weight:" +
        u +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (b += "position:" + (g && p ? "fixed;" : "absolute;")),
      (!g && p) ||
        (b += (n === it ? x : y) + ":" + (o + parseFloat(f)) + "px;"),
      a &&
        (b +=
          "box-sizing:border-box;text-align:left;width:" +
          a.offsetWidth +
          "px;"),
      (d._isStart = v),
      d.setAttribute("class", "gsap-marker-" + e),
      (d.style.cssText = b),
      (d.innerText = t || 0 === t ? e + "-" + t : e),
      h.children[0] ? h.insertBefore(d, h.children[0]) : h.appendChild(d),
      (d._offset = d["offset" + n.op.d2]),
      C(d, 0, n, v),
      d
    );
  }
  function Ma() {
    return (l = l || s(D));
  }
  function Na() {
    l || ((l = s(D)), Ue || E("scrollStart"), (Ue = He()));
  }
  function Oa() {
    return !Be && !r && !ke.fullscreenElement && a.restart(!0);
  }
  function Ua(e) {
    var t,
      r = Se.ticker.frame,
      n = [],
      i = 0;
    if (g !== r || De) {
      for (I(); i < _.length; i += 4)
        (t = Me.matchMedia(_[i]).matches) !== _[i + 3] &&
          ((_[i + 3] = t)
            ? n.push(i)
            : I(1, _[i]) || (W(_[i + 2]) && _[i + 2]()));
      for (B(), i = 0; i < n.length; i++)
        (t = n[i]), (Ve = _[t]), (_[t + 2] = _[t + 1](e));
      (Ve = 0), o && R(0, 1), (g = r), E("matchMedia");
    }
  }
  function Va() {
    return Da(G, "scrollEnd", Va) || R(!0);
  }
  function fb(e, t, r, n) {
    if (e.parentNode !== t) {
      for (var i, o = F.length, a = t.style, s = e.style; o--; )
        a[(i = F[o])] = r[i];
      (a.position = "absolute" === r.position ? "absolute" : "relative"),
        "inline" === r.display && (a.display = "inline-block"),
        (s[y] = s[x] = "auto"),
        (a.overflow = "visible"),
        (a.boxSizing = "border-box"),
        (a[Je] = xa(e, nt) + rt),
        (a[je] = xa(e, it) + rt),
        (a[Ge] = s[et] = s.top = s[m] = "0"),
        ut(n),
        (s[Je] = s.maxWidth = r[Je]),
        (s[je] = s.maxHeight = r[je]),
        (s[Ge] = r[Ge]),
        e.parentNode.insertBefore(t, e),
        t.appendChild(e);
    }
  }
  function ib(e) {
    for (var t = H.length, r = e.style, n = [], i = 0; i < t; i++)
      n.push(H[i], r[H[i]]);
    return (n.t = e), n;
  }
  function lb(e, t, r, n, i, o, a, s, l, c, f, u) {
    if (
      (W(e) && (e = e(s)),
      V(e) &&
        "max" === e.substr(0, 3) &&
        (e = u + ("=" === e.charAt(4) ? Ha("0" + e.substr(3), r) : 0)),
      X(e))
    )
      a && C(a, r, n, !0);
    else {
      W(t) && (t = t(s));
      var d,
        p,
        g,
        h = Ee(t)[0] || Pe,
        v = ot(h) || {},
        m = e.split(" ");
      (v && (v.left || v.top)) ||
        "none" !== ta(h).display ||
        ((g = h.style.display),
        (h.style.display = "block"),
        (v = ot(h)),
        g ? (h.style.display = g) : h.style.removeProperty("display")),
        (d = Ha(m[0], v[n.d])),
        (p = Ha(m[1] || "0", r)),
        (e = v[n.p] - l[n.p] - c + d + i - p),
        a && C(a, p, n, r - p < 20 || (a._isStart && 20 < p)),
        (r -= r - p);
    }
    if (o) {
      var b = e + r,
        x = o._isStart;
      (u = "scroll" + n.d2),
        C(
          o,
          b,
          n,
          (x && 20 < b) ||
            (!x && (f ? Math.max(Pe[u], _e[u]) : o.parentNode[u]) <= b + 1)
        ),
        f &&
          ((l = ot(a)),
          f && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + rt));
    }
    return Math.round(e);
  }
  function nb(e, t, r, n) {
    if (e.parentNode !== t) {
      var i,
        o,
        a = e.style;
      if (t === Pe) {
        for (i in ((e._stOrig = a.cssText), (o = ta(e))))
          +i ||
            q.test(i) ||
            !o[i] ||
            "string" != typeof a[i] ||
            "0" === i ||
            (a[i] = o[i]);
        (a.top = r), (a.left = n);
      } else a.cssText = e._stOrig;
      (Se.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  }
  function ob(l, e) {
    function Xe(e, t, r, n, i) {
      var o = Xe.tween,
        a = t.onComplete,
        s = {};
      return (
        o && o.kill(),
        (c = Math.round(r)),
        (t[d] = e),
        ((t.modifiers = s)[d] = function (e) {
          return (
            (e = K(u())) !== c && e !== f && 2 < Math.abs(e - c)
              ? (o.kill(), (Xe.tween = 0))
              : (e = r + n * o.ratio + i * o.ratio * o.ratio),
            (f = c),
            (c = K(e))
          );
        }),
        (t.onComplete = function () {
          (Xe.tween = 0), a && a.call(o);
        }),
        (o = Xe.tween = Se.to(l, t))
      );
    }
    var c,
      f,
      u = P(l, e),
      d = "_scroll" + e.p2;
    return (
      (l[d] = u),
      l.addEventListener("wheel", function () {
        return Xe.tween && Xe.tween.kill() && (Xe.tween = 0);
      }),
      Xe
    );
  }
  var Se,
    o,
    Me,
    ke,
    _e,
    Pe,
    i,
    a,
    s,
    l,
    Ee,
    Ne,
    Ae,
    c,
    Be,
    Ie,
    f,
    Le,
    u,
    d,
    p,
    Re,
    ze,
    r,
    We,
    Ve,
    g,
    De = 1,
    Fe = [],
    h = [],
    He = Date.now,
    v = He(),
    Ue = 0,
    Ye = 1,
    Ze = Math.abs,
    t = "scrollLeft",
    n = "scrollTop",
    m = "left",
    x = "right",
    y = "bottom",
    Je = "width",
    je = "height",
    qe = "Right",
    $e = "Left",
    Ke = "Top",
    Qe = "Bottom",
    Ge = "padding",
    et = "margin",
    tt = "Width",
    b = "Height",
    rt = "px",
    nt = {
      s: t,
      p: m,
      p2: $e,
      os: x,
      os2: qe,
      d: Je,
      d2: tt,
      a: "x",
      sc: function sc(e) {
        return arguments.length
          ? Me.scrollTo(e, it.sc())
          : Me.pageXOffset || ke[t] || _e[t] || Pe[t] || 0;
      },
    },
    it = {
      s: n,
      p: "top",
      p2: Ke,
      os: y,
      os2: Qe,
      d: je,
      d2: b,
      a: "y",
      op: nt,
      sc: function sc(e) {
        return arguments.length
          ? Me.scrollTo(nt.sc(), e)
          : Me.pageYOffset || ke[n] || _e[n] || Pe[n] || 0;
      },
    },
    ot = function _getBounds(e, t) {
      var r =
          t &&
          "matrix(1, 0, 0, 1, 0, 0)" !== ta(e)[f] &&
          Se.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        n = e.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    },
    at = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    st = { toggleActions: "play", anticipatePin: 0 },
    w = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    C = function _positionMarker(e, t, r, n) {
      var i = { display: "block" },
        o = r[n ? "os2" : "p2"],
        a = r[n ? "p2" : "os2"];
      (e._isFlipped = n),
        (i[r.a + "Percent"] = n ? -100 : 0),
        (i[r.a] = n ? "1px" : 0),
        (i["border" + o + tt] = 1),
        (i["border" + a + tt] = 0),
        (i[r.p] = t + "px"),
        Se.set(e, i);
    },
    lt = [],
    ct = {},
    S = {},
    k = [],
    _ = [],
    E = function _dispatch(e) {
      return (
        (S[e] &&
          S[e].map(function (e) {
            return e();
          })) ||
        k
      );
    },
    A = [],
    B = function _revertRecorded(e) {
      for (var t = 0; t < A.length; t += 5)
        (e && A[t + 4] !== e) ||
          ((A[t].style.cssText = A[t + 1]),
          A[t].getBBox && A[t].setAttribute("transform", A[t + 2] || ""),
          (A[t + 3].uncache = 1));
    },
    I = function _revertAll(e, t) {
      var r;
      for (Le = 0; Le < lt.length; Le++)
        (r = lt[Le]), (t && r.media !== t) || (e ? r.kill(1) : r.revert());
      t && B(t), t || E("revert");
    },
    R = function _refreshAll(e, t) {
      if (!Ue || e) {
        var r = E("refreshInit");
        Re && G.sort(),
          t || I(),
          lt.forEach(function (e) {
            return e.refresh();
          }),
          r.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
          h.forEach(function (e) {
            return "function" == typeof e && (e.rec = 0);
          }),
          a.pause(),
          E("refresh");
      } else Ca(G, "scrollEnd", Va);
    },
    z = 0,
    ft = 1,
    D = function _updateAll() {
      var e = lt.length,
        t = He(),
        r = 50 <= t - v,
        n = e && lt[0].scroll();
      if (
        ((ft = n < z ? -1 : 1),
        (z = n),
        r &&
          (Ue && !Ie && 200 < t - Ue && ((Ue = 0), E("scrollEnd")),
          (Ae = v),
          (v = t)),
        ft < 0)
      ) {
        for (Le = e; 0 < Le--; ) lt[Le] && lt[Le].update(0, r);
        ft = 1;
      } else for (Le = 0; Le < e; Le++) lt[Le] && lt[Le].update(0, r);
      l = 0;
    },
    F = [
      m,
      "top",
      y,
      x,
      et + Qe,
      et + qe,
      et + Ke,
      et + $e,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "grid-column-start",
      "grid-column-end",
      "grid-row-start",
      "grid-row-end",
      "grid-area",
      "justify-self",
      "align-self",
      "place-self",
    ],
    H = F.concat([
      Je,
      je,
      "boxSizing",
      "max" + tt,
      "max" + b,
      "position",
      et,
      Ge,
      Ge + Ke,
      Ge + qe,
      Ge + Qe,
      Ge + $e,
    ]),
    j = /([A-Z])/g,
    ut = function _setState(e) {
      if (e) {
        var t,
          r,
          n = e.t.style,
          i = e.length,
          o = 0;
        for ((e.t._gsap || Se.core.getCache(e.t)).uncache = 1; o < i; o += 2)
          (r = e[o + 1]),
            (t = e[o]),
            r
              ? (n[t] = r)
              : n[t] && n.removeProperty(t.replace(j, "-$1").toLowerCase());
      }
    },
    dt = { left: 0, top: 0 },
    q = /(?:webkit|moz|length|cssText|inset)/i;
  nt.op = it;
  var G =
    ((ScrollTrigger.prototype.init = function init(S, M) {
      if (((this.progress = this.start = 0), this.vars && this.kill(1), Ye)) {
        var p,
          n,
          u,
          k,
          _,
          E,
          A,
          B,
          I,
          L,
          R,
          e,
          z,
          D,
          F,
          H,
          U,
          t,
          Z,
          g,
          j,
          q,
          h,
          $,
          v,
          m,
          r,
          b,
          x,
          K,
          i,
          d,
          y,
          G,
          ee,
          te,
          re = (S = va(V(S) || X(S) || S.nodeType ? { trigger: S } : S, st))
            .horizontal
            ? nt
            : it,
          w = S.onUpdate,
          C = S.toggleClass,
          o = S.id,
          ne = S.onToggle,
          ie = S.onRefresh,
          a = S.scrub,
          oe = S.trigger,
          ae = S.pin,
          se = S.pinSpacing,
          le = S.invalidateOnRefresh,
          ce = S.anticipatePin,
          s = S.onScrubComplete,
          fe = S.onSnapComplete,
          ue = S.once,
          de = S.snap,
          pe = S.pinReparent,
          ge = !a && 0 !== a,
          he = Ee(S.scroller || Me)[0],
          l = Se.core.getCache(he),
          ve = N(he),
          me =
            "pinType" in S
              ? "fixed" === S.pinType
              : ve || "fixed" === O(he, "pinType"),
          be = [S.onEnter, S.onLeave, S.onEnterBack, S.onLeaveBack],
          xe = ge && S.toggleActions.split(" "),
          c = "markers" in S ? S.markers : st.markers,
          ye = ve ? 0 : parseFloat(ta(he)["border" + re.p2 + tt]) || 0,
          we = this,
          f =
            S.onRefreshInit &&
            function () {
              return S.onRefreshInit(we);
            },
          Ce = (function _getSizeFunc(e, t, r) {
            var n = r.d,
              i = r.d2,
              o = r.a;
            return (o = O(e, "getBoundingClientRect"))
              ? function () {
                  return o()[n];
                }
              : function () {
                  return (t ? Me["inner" + i] : e["client" + i]) || 0;
                };
          })(he, ve, re),
          Te = (function _getOffsetsFunc(e, t) {
            return !t || ~Fe.indexOf(e)
              ? Q(e)
              : function () {
                  return dt;
                };
          })(he, ve),
          Oe = 0;
        (we.media = Ve),
          (ce *= 45),
          (we.scroller = he),
          (we.scroll = P(he, re)),
          (k = we.scroll()),
          (we.vars = S),
          (M = M || S.animation),
          "refreshPriority" in S && (Re = 1),
          (l.tweenScroll = l.tweenScroll || {
            top: ob(he, it),
            left: ob(he, nt),
          }),
          (we.tweenTo = p = l.tweenScroll[re.p]),
          M &&
            ((M.vars.lazy = !1),
            M._initted ||
              (!1 !== M.vars.immediateRender &&
                !1 !== S.immediateRender &&
                M.render(0, !0, !0)),
            (we.animation = M.pause()),
            (M.scrollTrigger = we),
            (i = X(a) && a) &&
              (K = Se.to(M, {
                ease: "power3",
                duration: i,
                onComplete: function onComplete() {
                  return s && s(we);
                },
              })),
            (b = 0),
            (o = o || M.vars.id)),
          lt.push(we),
          de &&
            (Y(de) || (de = { snapTo: de }),
            "scrollBehavior" in Pe.style &&
              Se.set(ve ? [Pe, _e] : he, { scrollBehavior: "auto" }),
            (u = W(de.snapTo)
              ? de.snapTo
              : "labels" === de.snapTo
              ? (function _getClosestLabel(t) {
                  return function (e) {
                    return Se.utils.snap(ya(t), e);
                  };
                })(M)
              : "labelsDirectional" === de.snapTo
              ? (function _getLabelAtDirection(i) {
                  return function (e, t) {
                    var r,
                      n = ya(i);
                    if (
                      (n.sort(function (e, t) {
                        return e - t;
                      }),
                      0 < t.direction)
                    ) {
                      for (e -= 1e-4, r = 0; r < n.length; r++)
                        if (n[r] >= e) return n[r];
                      return n.pop();
                    }
                    for (r = n.length, e += 1e-4; r--; )
                      if (n[r] <= e) return n[r];
                    return n[0];
                  };
                })(M)
              : Se.utils.snap(de.snapTo)),
            (d = de.duration || { min: 0.1, max: 2 }),
            (d = Y(d) ? Ne(d.min, d.max) : Ne(d, d)),
            (y = Se.delayedCall(de.delay || i / 2 || 0.1, function () {
              if (
                Math.abs(we.getVelocity()) < 10 &&
                !Ie &&
                Oe !== we.scroll()
              ) {
                var e = M && !ge ? M.totalProgress() : we.progress,
                  t = ((e - x) / (He() - Ae)) * 1e3 || 0,
                  r = Se.utils.clamp(
                    -we.progress,
                    1 - we.progress,
                    (Ze(t / 2) * t) / 0.185
                  ),
                  n = we.progress + (!1 === de.inertia ? 0 : r),
                  i = Ne(0, 1, u(n, we)),
                  o = we.scroll(),
                  a = Math.round(E + i * z),
                  s = de.onStart,
                  l = de.onInterrupt,
                  c = de.onComplete,
                  f = p.tween;
                if (o <= A && E <= o && a !== o) {
                  if (f && !f._initted && f.data <= Math.abs(a - o)) return;
                  !1 === de.inertia && (r = i - we.progress),
                    p(
                      a,
                      {
                        duration: d(
                          Ze(
                            (0.185 * Math.max(Ze(n - e), Ze(i - e))) /
                              t /
                              0.05 || 0
                          )
                        ),
                        ease: de.ease || "power3",
                        data: Math.abs(a - o),
                        onInterrupt: function onInterrupt() {
                          return y.restart(!0) && l && l(we);
                        },
                        onComplete: function onComplete() {
                          (Oe = we.scroll()),
                            (b = x =
                              M && !ge ? M.totalProgress() : we.progress),
                            fe && fe(we),
                            c && c(we);
                        },
                      },
                      o,
                      r * z,
                      a - o - r * z
                    ),
                    s && s(we, p.tween);
                }
              } else we.isActive && y.restart(!0);
            }).pause())),
          o && (ct[o] = we),
          (oe = we.trigger = Ee(oe || ae)[0]),
          (ae = !0 === ae ? oe : Ee(ae)[0]),
          V(C) && (C = { targets: oe, className: C }),
          ae &&
            (!1 === se ||
              se === et ||
              (se = !(!se && "flex" === ta(ae.parentNode).display) && Ge),
            (we.pin = ae),
            !1 !== S.force3D && Se.set(ae, { force3D: !0 }),
            (n = Se.core.getCache(ae)).spacer
              ? (D = n.pinState)
              : ((n.spacer = U = ke.createElement("div")),
                U.setAttribute(
                  "class",
                  "pin-spacer" + (o ? " pin-spacer-" + o : "")
                ),
                (n.pinState = D = ib(ae))),
            (we.spacer = U = n.spacer),
            (r = ta(ae)),
            (h = r[se + re.os2]),
            (Z = Se.getProperty(ae)),
            (g = Se.quickSetter(ae, re.a, rt)),
            fb(ae, U, r),
            (H = ib(ae))),
          c &&
            ((e = Y(c) ? va(c, at) : at),
            (L = Ia("scroller-start", o, he, re, e, 0)),
            (R = Ia("scroller-end", o, he, re, e, 0, L)),
            (t = L["offset" + re.op.d2]),
            (B = Ia("start", o, he, re, e, t)),
            (I = Ia("end", o, he, re, e, t)),
            me ||
              (Fe.length && !0 === O(he, "fixedMarkers")) ||
              ((function _makePositionable(e) {
                var t = ta(e).position;
                e.style.position =
                  "absolute" === t || "fixed" === t ? t : "relative";
              })(ve ? Pe : he),
              Se.set([L, R], { force3D: !0 }),
              (v = Se.quickSetter(L, re.a, rt)),
              (m = Se.quickSetter(R, re.a, rt)))),
          (we.revert = function (e) {
            var t = !1 !== e || !we.enabled,
              r = Be;
            t !== we.isReverted &&
              (t &&
                (we.scroll.rec || (we.scroll.rec = we.scroll()),
                (ee = Math.max(we.scroll(), we.scroll.rec || 0)),
                (G = we.progress),
                (te = M && M.progress())),
              B &&
                [B, I, L, R].forEach(function (e) {
                  return (e.style.display = t ? "none" : "block");
                }),
              t && (Be = 1),
              we.update(t),
              (Be = r),
              ae &&
                (t
                  ? (function _swapPinOut(e, t, r) {
                      if ((ut(r), e.parentNode === t)) {
                        var n = t.parentNode;
                        n && (n.insertBefore(e, t), n.removeChild(t));
                      }
                    })(ae, U, D)
                  : (pe && we.isActive) || fb(ae, U, ta(ae), $)),
              (we.isReverted = t));
          }),
          (we.refresh = function (e, t) {
            if ((!Be && we.enabled) || t)
              if (ae && e && Ue) Ca(ScrollTrigger, "scrollEnd", Va);
              else {
                (Be = 1),
                  K && K.pause(),
                  le && M && M.progress(0).invalidate(),
                  we.isReverted || we.revert();
                for (
                  var r,
                    n,
                    i,
                    o,
                    a,
                    s,
                    l,
                    c,
                    f,
                    u,
                    d = Ce(),
                    p = Te(),
                    g = T(he, re),
                    h = 0,
                    v = 0,
                    m = S.end,
                    b = S.endTrigger || oe,
                    x =
                      S.start ||
                      (0 !== S.start && oe ? (ae ? "0 0" : "0 100%") : 0),
                    y = S.pinnedContainer && Ee(S.pinnedContainer)[0],
                    w = (oe && Math.max(0, lt.indexOf(we))) || 0,
                    C = w;
                  C--;

                )
                  (s = lt[C]).end || s.refresh(0, 1) || (Be = 1),
                    !(l = s.pin) ||
                      (l !== oe && l !== ae) ||
                      s.isReverted ||
                      ((u = u || []).unshift(s), s.revert());
                for (
                  E =
                    lb(x, oe, d, re, we.scroll(), B, L, we, p, ye, me, g) ||
                    (ae ? -0.001 : 0),
                    W(m) && (m = m(we)),
                    V(m) &&
                      !m.indexOf("+=") &&
                      (~m.indexOf(" ")
                        ? (m = (V(x) ? x.split(" ")[0] : "") + m)
                        : ((h = Ha(m.substr(2), d)),
                          (m = V(x) ? x : E + h),
                          (b = oe))),
                    A =
                      Math.max(
                        E,
                        lb(
                          m || (b ? "100% 0" : g),
                          b,
                          d,
                          re,
                          we.scroll() + h,
                          I,
                          R,
                          we,
                          p,
                          ye,
                          me,
                          g
                        )
                      ) || -0.001,
                    z = A - E || ((E -= 0.01) && 0.001),
                    h = 0,
                    C = w;
                  C--;

                )
                  (l = (s = lt[C]).pin) &&
                    s.start - s._pinPush < E &&
                    ((r = s.end - s.start),
                    (l !== oe && l !== y) || (h += r),
                    l === ae && (v += r));
                if (
                  ((E += h),
                  (A += h),
                  (we._pinPush = v),
                  B &&
                    h &&
                    (((r = {})[re.a] = "+=" + h),
                    y && (r[re.p] = "-=" + we.scroll()),
                    Se.set([B, I], r)),
                  ae)
                )
                  (r = ta(ae)),
                    (o = re === it),
                    (i = we.scroll()),
                    (j = parseFloat(Z(re.a)) + v),
                    !g &&
                      1 < A &&
                      ((ve ? Pe : he).style["overflow-" + re.a] = "scroll"),
                    fb(ae, U, r),
                    (H = ib(ae)),
                    (n = ot(ae, !0)),
                    (c = me && P(he, o ? nt : it)()),
                    se &&
                      ((($ = [se + re.os2, z + v + rt]).t = U),
                      (C = se === Ge ? xa(ae, re) + z + v : 0) &&
                        $.push(re.d, C + rt),
                      ut($),
                      me && we.scroll(ee)),
                    me &&
                      (((a = {
                        top: n.top + (o ? i - E : c) + rt,
                        left: n.left + (o ? c : i - E) + rt,
                        boxSizing: "border-box",
                        position: "fixed",
                      })[Je] = a.maxWidth =
                        Math.ceil(n.width) + rt),
                      (a[je] = a.maxHeight = Math.ceil(n.height) + rt),
                      (a[et] =
                        a[et + Ke] =
                        a[et + qe] =
                        a[et + Qe] =
                        a[et + $e] =
                          "0"),
                      (a[Ge] = r[Ge]),
                      (a[Ge + Ke] = r[Ge + Ke]),
                      (a[Ge + qe] = r[Ge + qe]),
                      (a[Ge + Qe] = r[Ge + Qe]),
                      (a[Ge + $e] = r[Ge + $e]),
                      (F = (function _copyState(e, t, r) {
                        for (
                          var n, i = [], o = e.length, a = r ? 8 : 0;
                          a < o;
                          a += 2
                        )
                          (n = e[a]), i.push(n, n in t ? t[n] : e[a + 1]);
                        return (i.t = e.t), i;
                      })(D, a, pe))),
                    M
                      ? ((f = M._initted),
                        ze(1),
                        M.render(M.duration(), !0, !0),
                        (q = Z(re.a) - j + z + v),
                        z !== q && F.splice(F.length - 2, 2),
                        M.render(0, !0, !0),
                        f || M.invalidate(),
                        ze(0))
                      : (q = z);
                else if (oe && we.scroll())
                  for (n = oe.parentNode; n && n !== Pe; )
                    n._pinOffset && ((E -= n._pinOffset), (A -= n._pinOffset)),
                      (n = n.parentNode);
                u &&
                  u.forEach(function (e) {
                    return e.revert(!1);
                  }),
                  (we.start = E),
                  (we.end = A),
                  (k = _ = we.scroll()) < ee && we.scroll(ee),
                  we.revert(!1),
                  (Be = 0),
                  M &&
                    ge &&
                    M._initted &&
                    M.progress() !== te &&
                    M.progress(te, !0).render(M.time(), !0, !0),
                  G !== we.progress &&
                    (K && M.totalProgress(G, !0),
                    (we.progress = G),
                    we.update()),
                  ae && se && (U._pinOffset = Math.round(we.progress * q)),
                  ie && ie(we);
              }
          }),
          (we.getVelocity = function () {
            return ((we.scroll() - _) / (He() - Ae)) * 1e3 || 0;
          }),
          (we.update = function (e, t) {
            var r,
              n,
              i,
              o,
              a,
              s = we.scroll(),
              l = e ? 0 : (s - E) / z,
              c = l < 0 ? 0 : 1 < l ? 1 : l || 0,
              f = we.progress;
            if (
              (t &&
                ((_ = k),
                (k = s),
                de && ((x = b), (b = M && !ge ? M.totalProgress() : c))),
              ce &&
                !c &&
                ae &&
                !Be &&
                !De &&
                Ue &&
                E < s + ((s - _) / (He() - Ae)) * ce &&
                (c = 1e-4),
              c !== f && we.enabled)
            ) {
              if (
                ((o =
                  (a = (r = we.isActive = !!c && c < 1) != (!!f && f < 1)) ||
                  !!c != !!f),
                (we.direction = f < c ? 1 : -1),
                (we.progress = c),
                ge ||
                  (!K || Be || De
                    ? M && M.totalProgress(c, !!Be)
                    : ((K.vars.totalProgress = c), K.invalidate().restart())),
                ae)
              )
                if ((e && se && (U.style[se + re.os2] = h), me)) {
                  if (o) {
                    if (
                      ((i = !e && f < c && s < A + 1 && s + 1 >= T(he, re)), pe)
                    )
                      if (e || (!r && !i)) nb(ae, U);
                      else {
                        var u = ot(ae, !0),
                          d = s - E;
                        nb(
                          ae,
                          Pe,
                          u.top + (re === it ? d : 0) + rt,
                          u.left + (re === it ? 0 : d) + rt
                        );
                      }
                    ut(r || i ? F : H),
                      (q !== z && c < 1 && r) || g(j + (1 !== c || i ? 0 : q));
                  }
                } else g(j + q * c);
              !de || p.tween || Be || De || y.restart(!0),
                C &&
                  (a || (ue && c && (c < 1 || !We))) &&
                  Ee(C.targets).forEach(function (e) {
                    return e.classList[r || ue ? "add" : "remove"](C.className);
                  }),
                !w || ge || e || w(we),
                o && !Be
                  ? ((n = c && !f ? 0 : 1 === c ? 1 : 1 === f ? 2 : 3),
                    ge &&
                      ((i = (!a && "none" !== xe[n + 1] && xe[n + 1]) || xe[n]),
                      M &&
                        ("complete" === i || "reset" === i || i in M) &&
                        ("complete" === i
                          ? M.pause().totalProgress(1)
                          : "reset" === i
                          ? M.restart(!0).pause()
                          : "restart" === i
                          ? M.restart(!0)
                          : M[i]()),
                      w && w(we)),
                    (!a && We) ||
                      (ne && a && ne(we),
                      be[n] && be[n](we),
                      ue && (1 === c ? we.kill(!1, 1) : (be[n] = 0)),
                      a || (be[(n = 1 === c ? 1 : 3)] && be[n](we))))
                  : ge && w && !Be && w(we);
            }
            m && (v(s + (L._isFlipped ? 1 : 0)), m(s));
          }),
          (we.enable = function (e, t) {
            we.enabled ||
              ((we.enabled = !0),
              Ca(he, "resize", Oa),
              Ca(he, "scroll", Na),
              f && Ca(ScrollTrigger, "refreshInit", f),
              !1 !== e && ((we.progress = G = 0), (k = _ = Oe = we.scroll())),
              !1 !== t && we.refresh());
          }),
          (we.getTween = function (e) {
            return e && p ? p.tween : K;
          }),
          (we.disable = function (e, t) {
            if (
              we.enabled &&
              (!1 !== e && we.revert(),
              (we.enabled = we.isActive = !1),
              t || (K && K.pause()),
              (ee = 0),
              n && (n.uncache = 1),
              f && Da(ScrollTrigger, "refreshInit", f),
              y && (y.pause(), p.tween && p.tween.kill() && (p.tween = 0)),
              !ve)
            ) {
              for (var r = lt.length; r--; )
                if (lt[r].scroller === he && lt[r] !== we) return;
              Da(he, "resize", Oa), Da(he, "scroll", Na);
            }
          }),
          (we.kill = function (e, t) {
            we.disable(e, t), o && delete ct[o];
            var r = lt.indexOf(we);
            lt.splice(r, 1),
              r === Le && 0 < ft && Le--,
              M && ((M.scrollTrigger = null), e && M.render(-1), t || M.kill()),
              B &&
                [B, I, L, R].forEach(function (e) {
                  return e.parentNode && e.parentNode.removeChild(e);
                }),
              ae &&
                (n && (n.uncache = 1),
                (r = 0),
                lt.forEach(function (e) {
                  return e.pin === ae && r++;
                }),
                r || (n.spacer = 0));
          }),
          we.enable(!1, !1),
          M && M.add && !z
            ? Se.delayedCall(0.01, function () {
                return E || A || we.refresh();
              }) &&
              (z = 0.01) &&
              (E = A = 0)
            : we.refresh();
      } else this.update = this.refresh = this.kill = J;
    }),
    (ScrollTrigger.register = function register(e) {
      if (
        !o &&
        ((Se = e || M()),
        L() &&
          window.document &&
          ((Me = window),
          (ke = document),
          (_e = ke.documentElement),
          (Pe = ke.body)),
        Se &&
          ((Ee = Se.utils.toArray),
          (Ne = Se.utils.clamp),
          (ze = Se.core.suppressOverwrites || J),
          Se.core.globals("ScrollTrigger", ScrollTrigger),
          Pe))
      ) {
        (s =
          Me.requestAnimationFrame ||
          function (e) {
            return setTimeout(e, 16);
          }),
          Ca(Me, "wheel", Na),
          (i = [Me, ke, _e, Pe]),
          Ca(ke, "scroll", Na);
        var t,
          r = Pe.style,
          n = r.borderTop;
        (r.borderTop = "1px solid #000"),
          (t = ot(Pe)),
          (it.m = Math.round(t.top + it.sc()) || 0),
          (nt.m = Math.round(t.left + nt.sc()) || 0),
          n ? (r.borderTop = n) : r.removeProperty("border-top"),
          (c = setInterval(Ma, 200)),
          Se.delayedCall(0.5, function () {
            return (De = 0);
          }),
          Ca(ke, "touchcancel", J),
          Ca(Pe, "touchstart", J),
          Ba(Ca, ke, "pointerdown,touchstart,mousedown", function () {
            return (Ie = 1);
          }),
          Ba(Ca, ke, "pointerup,touchend,mouseup", function () {
            return (Ie = 0);
          }),
          (f = Se.utils.checkPrefix("transform")),
          H.push(f),
          (o = He()),
          (a = Se.delayedCall(0.2, R).pause()),
          (p = [
            ke,
            "visibilitychange",
            function () {
              var e = Me.innerWidth,
                t = Me.innerHeight;
              ke.hidden ? ((u = e), (d = t)) : (u === e && d === t) || Oa();
            },
            ke,
            "DOMContentLoaded",
            R,
            Me,
            "load",
            function () {
              return Ue || R();
            },
            Me,
            "resize",
            Oa,
          ]),
          U(Ca);
      }
      return o;
    }),
    (ScrollTrigger.defaults = function defaults(e) {
      for (var t in e) st[t] = e[t];
    }),
    (ScrollTrigger.kill = function kill() {
      (Ye = 0),
        lt.slice(0).forEach(function (e) {
          return e.kill(1);
        });
    }),
    (ScrollTrigger.config = function config(e) {
      "limitCallbacks" in e && (We = !!e.limitCallbacks);
      var t = e.syncInterval;
      (t && clearInterval(c)) || ((c = t) && setInterval(Ma, t)),
        "autoRefreshEvents" in e &&
          (U(Da) || U(Ca, e.autoRefreshEvents || "none"),
          (r = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
    }),
    (ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
      var r = Ee(e)[0],
        n = h.indexOf(r),
        i = N(r);
      ~n && h.splice(n, i ? 6 : 2),
        i ? Fe.unshift(Me, t, Pe, t, _e, t) : Fe.unshift(r, t);
    }),
    (ScrollTrigger.matchMedia = function matchMedia(e) {
      var t, r, n, i, o;
      for (r in e)
        (n = _.indexOf(r)),
          (i = e[r]),
          "all" === (Ve = r)
            ? i()
            : (t = Me.matchMedia(r)) &&
              (t.matches && (o = i()),
              ~n
                ? ((_[n + 1] = $(_[n + 1], i)), (_[n + 2] = $(_[n + 2], o)))
                : ((n = _.length),
                  _.push(r, i, o),
                  t.addListener
                    ? t.addListener(Ua)
                    : t.addEventListener("change", Ua)),
              (_[n + 3] = t.matches)),
          (Ve = 0);
      return _;
    }),
    (ScrollTrigger.clearMatchMedia = function clearMatchMedia(e) {
      e || (_.length = 0), 0 <= (e = _.indexOf(e)) && _.splice(e, 4);
    }),
    ScrollTrigger);
  function ScrollTrigger(e, t) {
    o ||
      ScrollTrigger.register(Se) ||
      console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
      this.init(e, t);
  }
  (G.version = "3.7.0"),
    (G.saveStyles = function (e) {
      return e
        ? Ee(e).forEach(function (e) {
            if (e && e.style) {
              var t = A.indexOf(e);
              0 <= t && A.splice(t, 5),
                A.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  Se.core.getCache(e),
                  Ve
                );
            }
          })
        : A;
    }),
    (G.revert = function (e, t) {
      return I(!e, t);
    }),
    (G.create = function (e, t) {
      return new G(e, t);
    }),
    (G.refresh = function (e) {
      return e ? Oa() : R(!0);
    }),
    (G.update = D),
    (G.maxScroll = function (e, t) {
      return T(e, t ? nt : it);
    }),
    (G.getScrollFunc = function (e, t) {
      return P(Ee(e)[0], t ? nt : it);
    }),
    (G.getById = function (e) {
      return ct[e];
    }),
    (G.getAll = function () {
      return lt.slice(0);
    }),
    (G.isScrolling = function () {
      return !!Ue;
    }),
    (G.addEventListener = function (e, t) {
      var r = S[e] || (S[e] = []);
      ~r.indexOf(t) || r.push(t);
    }),
    (G.removeEventListener = function (e, t) {
      var r = S[e],
        n = r && r.indexOf(t);
      0 <= n && r.splice(n, 1);
    }),
    (G.batch = function (e, t) {
      function Hi(e, t) {
        var r = [],
          n = [],
          i = Se.delayedCall(o, function () {
            t(r, n), (r = []), (n = []);
          }).pause();
        return function (e) {
          r.length || i.restart(!0),
            r.push(e.trigger),
            n.push(e),
            a <= r.length && i.progress(1);
        };
      }
      var r,
        n = [],
        i = {},
        o = t.interval || 0.016,
        a = t.batchMax || 1e9;
      for (r in t)
        i[r] =
          "on" === r.substr(0, 2) && W(t[r]) && "onRefreshInit" !== r
            ? Hi(0, t[r])
            : t[r];
      return (
        W(a) &&
          ((a = a()),
          Ca(G, "refresh", function () {
            return (a = t.batchMax());
          })),
        Ee(e).forEach(function (e) {
          var t = {};
          for (r in i) t[r] = i[r];
          (t.trigger = e), n.push(G.create(t));
        }),
        n
      );
    }),
    (G.sort = function (e) {
      return lt.sort(
        e ||
          function (e, t) {
            return (
              -1e6 * (e.vars.refreshPriority || 0) +
              e.start -
              (t.start + -1e6 * (t.vars.refreshPriority || 0))
            );
          }
      );
    }),
    M() && Se.registerPlugin(G),
    (e.ScrollTrigger = G),
    (e.default = G);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});
