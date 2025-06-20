import { r as b, a as l, o as w, b as k, s as S } from "./index-D2B49Jfm.js";
function P() {
  return S().name !== "browser" || window.hasOwnProperty("debuggerInitialized") ? null : (window.debuggerInitialized = !0, k.createPortal(/* @__PURE__ */ l.jsx($, {}), document.body));
}
const Y = (e, s) => {
  const n = e.dataset.yaAction, t = e.dataset.yaScopeoverride, o = e.dataset.yaEventname, i = t || s;
  return {
    action: n,
    originalEventName: i ? `${i}_${o}` : o,
    scope: i
  };
}, C = (e, s) => {
  const n = [];
  let t = e;
  for (; t != null && t.parentElement; )
    t = t.parentElement.closest(s), t && n.push(t);
  return n;
}, h = {}, N = "YA_NO_SCOPE", j = (e, s, n, t) => {
  h.hasOwnProperty(e) ? h[e].events.map((o) => o.el).includes(t) || (h[e].events = [
    ...h[e].events,
    {
      eventData: s,
      el: t
    }
  ]) : h[e] = {
    scopeEl: n || t,
    // overidden scopes still need an element
    events: [
      {
        eventData: s,
        el: t
      }
    ]
  };
};
function $() {
  const [e, s] = b.useState(), [n, t] = b.useState([]), [o, i] = b.useState(!1), a = (r) => {
    s(e === r ? void 0 : r);
  };
  return b.useEffect(() => {
    let r = null;
    const d = () => {
      r && r.abort(), r = new AbortController();
      const c = r.signal;
      document.documentElement.classList.add("xYextDebug"), document.querySelectorAll(
        "[data-ya-eventname]"
      ).forEach((u, y) => {
        const p = u.closest("[data-ya-scope]"), x = p?.dataset.yaScope, m = Y(u, x);
        u.addEventListener(
          "mouseenter",
          () => {
            t([
              {
                elem: u,
                key: `${m.originalEventName}_${y}`,
                action: m.action,
                originalEventName: m.originalEventName,
                scope: m.scope
              }
            ]);
          },
          { signal: c }
        ), u.addEventListener(
          "mouseleave",
          () => {
            t([]);
          },
          { signal: c }
        );
        const f = u.dataset.yaScopeoverride;
        f ? j(f, m, p, u) : [
          x,
          ...C(u, "[data-ya-scope]").map(
            (v) => v.dataset.yaScope
          )
        ].forEach((v) => {
          j(v || N, m, p, u);
        });
      }), i(!0);
    };
    d();
    const g = new MutationObserver(d);
    return g.observe(document, {
      childList: !0,
      subtree: !0
    }), () => {
      document.documentElement.classList.remove("xYextDebug"), g.disconnect(), r?.abort();
    };
  }, []), o ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsxs("div", { className: "analytics-debugger", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "analytics-debugger-toggles", children: [
        /* @__PURE__ */ l.jsx(
          "button",
          {
            className: w("analytics-debugger-toggle", {
              "is-active": e === "Events"
            }),
            onClick: () => a("Events"),
            children: "Events"
          }
        ),
        /* @__PURE__ */ l.jsx(
          "button",
          {
            className: w("analytics-debugger-toggle", {
              "is-active": e === "Scopes"
            }),
            onClick: () => a("Scopes"),
            children: "Scopes"
          }
        )
      ] }),
      e && /* @__PURE__ */ l.jsx("div", { className: "analytics-debugger-tabs", children: e === "Events" ? /* @__PURE__ */ l.jsx(O, { data: h, setTooltips: t }) : /* @__PURE__ */ l.jsx(R, { data: h, setTooltips: t }) })
    ] }),
    /* @__PURE__ */ l.jsx(B, { tooltips: n })
  ] }) : null;
}
const D = () => {
  const e = {};
  return Object.values(h).forEach((s) => {
    s.events.forEach((n) => {
      const { originalEventName: t } = n.eventData;
      e[t] || (e[t] = []), !e[t].find(
        (o) => o.el === n.el
      ) && e[t].push(n);
    });
  }), e;
};
function O(e) {
  const { setTooltips: s } = e, [n, t] = b.useState([]), [o, i] = b.useState(""), a = (r, d) => {
    n.forEach(
      (c) => c.classList.remove("analytics-event-highlight")
    );
    const g = r.map((c) => (c.el.scrollIntoView({ behavior: "smooth", block: "nearest" }), c.el.classList.add("analytics-event-highlight"), c.el));
    t(g), i(d), s(
      r.map((c, u) => ({
        elem: c.el,
        key: `${c.eventData.originalEventName}_${u}`,
        action: c.eventData.action,
        originalEventName: c.eventData.originalEventName,
        scope: c.eventData.scope
      }))
    );
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "analytics-debugger-tab", children: [
    /* @__PURE__ */ l.jsx("h2", { className: "analytics-debugger-tab-title", children: "Event Names" }),
    /* @__PURE__ */ l.jsx("ul", { className: "analytics-debugger-list", children: Object.entries(D()).map(
      ([r, d], g) => {
        const c = `${r}_${g}`;
        return /* @__PURE__ */ l.jsx("li", { className: "analytics-debugger-listItem", children: /* @__PURE__ */ l.jsx(
          "button",
          {
            className: w("analytics-debugger-button", {
              "is-active": c === o
            }),
            onClick: () => a(d, c),
            children: r
          }
        ) }, c);
      }
    ) })
  ] });
}
function R(e) {
  const { data: s, setTooltips: n } = e, [t, o] = b.useState(""), i = (a) => {
    const r = s[a];
    r.scopeEl && (r.scopeEl.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    }), o(a), n(
      r.events.map((d, g) => {
        const c = d.eventData;
        return {
          elem: d.el,
          key: `${c.originalEventName}_${g}`,
          action: c.action,
          originalEventName: c.originalEventName,
          scope: c.scope
        };
      })
    ));
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "analytics-debugger-tab", children: [
    /* @__PURE__ */ l.jsx("h2", { className: "analytics-debugger-tab-title", children: "Scope Names" }),
    /* @__PURE__ */ l.jsx("ul", { className: "analytics-debugger-list", children: Object.keys(s).map((a, r) => {
      if (a !== N)
        return /* @__PURE__ */ l.jsx("li", { className: "analytics-debugger-listItem", children: /* @__PURE__ */ l.jsx(
          "button",
          {
            className: w("analytics-debugger-button", {
              "is-active": a === t
            }),
            onClick: () => i(a),
            children: a
          }
        ) }, a + r);
    }) })
  ] });
}
function B(e) {
  const s = b.useRef({});
  return b.useEffect(() => {
    if (s.current)
      for (const n of Object.values(s.current)) {
        const t = Object.values(s.current).map((o) => o.el).filter((o) => o !== n.el);
        I(n, t), n.el.style.visibility = "visible";
      }
  }, [e.tooltips]), /* @__PURE__ */ l.jsx(l.Fragment, { children: e.tooltips.map((n) => /* @__PURE__ */ l.jsxs(
    "div",
    {
      style: { visibility: "hidden" },
      className: "analytics-debugger-tooltip",
      ref: (t) => {
        t ? s.current[n.key] = {
          el: t,
          tooltip: n
        } : delete s.current[n.key];
      },
      children: [
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Action: ",
          n.action
        ] }),
        /* @__PURE__ */ l.jsx("br", {}),
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Scope: ",
          n.scope
        ] }),
        /* @__PURE__ */ l.jsx("br", {}),
        /* @__PURE__ */ l.jsxs("span", { children: [
          "Original Event Name: ",
          n.originalEventName
        ] })
      ]
    },
    n.key
  )) });
}
function I(e, s) {
  for (let n = 0; n < 9; n++) {
    const t = A(
      e.tooltip.elem.getBoundingClientRect(),
      e.el,
      n
    );
    if (e.el.style.inset = `${t.top} auto auto ${t.left}`, !!_(
      e.el.getBoundingClientRect().left,
      e.el.getBoundingClientRect().top + window.scrollY,
      e.el.getBoundingClientRect().right,
      e.el.getBoundingClientRect().bottom + window.scrollY
    )) continue;
    let o = !0;
    for (let i = 0; i < s.length; i++) {
      const a = s[i];
      L(e.el, a) && (o = !1);
    }
    if (o) break;
  }
}
function L(e, s) {
  const n = e.getBoundingClientRect().top + window.scrollY, t = e.getBoundingClientRect().left, o = n + e.clientHeight, i = t + e.clientWidth, a = s.getBoundingClientRect().top + window.scrollY, r = s.getBoundingClientRect().left, d = a + s.clientHeight, g = r + s.clientWidth, c = (u, y, p, x, m, f, v, E) => p <= m && m <= v && x <= f && f <= E || p <= u && u <= v && x <= y && y <= E || p <= u && u <= v && x <= f && f <= E || p <= m && m <= v && x <= y && y <= E;
  return c(t, n, r, a, i, o, g, d) || c(r, a, t, n, g, d, i, o);
}
function _(e, s, n, t) {
  return e < 0 || n > window.innerWidth || s < 0 || t > document.documentElement.scrollHeight;
}
function A(e, s, n) {
  const t = s.clientHeight, o = s.clientWidth;
  let i, a;
  switch (n) {
    case 0: {
      a = window.scrollY + e.top - t + "px", i = e.left - o + "px";
      break;
    }
    case 1: {
      a = window.scrollY + e.top - t + "px", i = e.left + "px";
      break;
    }
    case 2: {
      a = window.scrollY + e.top - t + "px", i = e.right + "px";
      break;
    }
    case 3: {
      a = window.scrollY + e.top - t + "px", i = e.right - o + "px";
      break;
    }
    case 4: {
      a = window.scrollY + e.bottom + "px", i = e.left - o + "px";
      break;
    }
    case 5: {
      a = window.scrollY + e.bottom + "px", i = e.left + "px";
      break;
    }
    case 6: {
      a = window.scrollY + e.bottom + "px", i = e.right - o + "px";
      break;
    }
    case 7: {
      a = window.scrollY + e.bottom + "px", i = e.right + "px";
      break;
    }
    default:
      a = 0, i = 0;
  }
  return {
    top: a,
    left: i
  };
}
export {
  $ as AnalyticsDebuggerInternal,
  P as default
};
