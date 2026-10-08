import { A as e, S as t, T as n, _ as r, a as i, c as a, d as o, g as s, i as c, l, p as u, r as d, s as f, t as p, u as m, v as h, w as g, x as _ } from "./_react-D4KM8XEu.js";
import { c as v, f as y, m as b, o as x, r as S, s as C, t as w, w as T } from "./chunk-OB3PAWPO-BZOqgbiV.js";
import { i as E } from "./users-CyoMXlwX.js";
import { A as D, B as O, C as k, D as A, H as j, I as M, J as N, L as P, M as ee, N as F, O as I, P as L, Q as te, T as ne, U as re, V as ie, Y as ae, Z as R, _ as oe, b as se, c as z, g as ce, h as B, i as le, j as ue, m as de, n as fe, o as V, p as H, q as pe, r as U, t as me, v as he, w as W, x as ge, y as _e, z as ve } from "./use-navigate-with-base-path-CWS9sZhM.js";
import { A as ye, C as G, D as be, F as xe, J as Se, M as Ce, N as we, P as Te, Q as Ee, R as De, S as Oe, U as ke, X as Ae, Z as K, a as je, f as Me, j as Ne, p as Pe, t as Fe, x as Ie, y as Le, z as Re } from "./use-activity-pub-queries-CGgtQrxL.js";
import { a as ze, i as Be, n as Ve, r as He, t as Ue } from "./x-Btb3VwR5.js";
import { c as We, d as Ge, i as Ke, l as qe, o as Je, s as Ye, u as q } from "./content-formatters-G0qBT5QE.js";
import { a as Xe, i as Ze, n as Qe, r as $e, t as et } from "./avatar-fujJqU9M.js";
import { n as tt, t as nt } from "./onboarding-Dpm-nLkQ.js";
import "./onboarding-KtpJA-xb.js";
//#region ../admin-x-framework/dist/utils/lazy-component.js
function J(e) {
	return () => e().then(({ default: e }) => ({ Component: e }));
}
//#endregion
//#region src/lib/feature-flags.tsx
o();
var Y = T(), rt = [], it = a(void 0), at = ({ children: e }) => {
	let t = C(), [r, i] = n(() => {
		let e = localStorage.getItem("featureFlags");
		return e ? JSON.parse(e) : ot();
	});
	h(() => {
		let e = st(t.search);
		Object.keys(e).length > 0 && i((t) => {
			let n = {
				...t,
				...e
			};
			return localStorage.setItem("featureFlags", JSON.stringify(n)), n;
		});
	}, [t.search]);
	let a = {
		isEnabled: (e) => r[e] ?? !1,
		flags: r,
		allFlags: rt
	};
	return /* @__PURE__ */ (0, Y.jsx)(it.Provider, {
		value: a,
		children: e
	});
}, ot = () => rt.reduce((e, t) => ({
	...e,
	[t]: !1
}), {}), st = (e) => {
	let t = new URLSearchParams(e), n = {};
	return rt.forEach((e) => {
		let r = t.get(e);
		r === "ON" ? n[e] = !0 : r === "OFF" && (n[e] = !1);
	}), n;
}, ct = () => {
	let e = r(it);
	if (e === void 0) throw Error("useFeatureFlags must be used within a FeatureFlagsProvider");
	return e;
}, lt = (e, t) => {
	t?.(e), e.defaultPrevented || e.stopPropagation();
}, ut = V("arrow-left", [["path", {
	d: "m12 19-7-7 7-7",
	key: "1l729n"
}], ["path", {
	d: "M19 12H5",
	key: "x3x0zl"
}]]), dt = V("ban", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M4.929 4.929 19.07 19.071",
	key: "196cmz"
}]]), ft = V("book-open", [["path", {
	d: "M12 7v14",
	key: "1akyts"
}], ["path", {
	d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
	key: "ruj8y"
}]]), pt = V("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]), mt = V("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), ht = V("cloud-download", [
	["path", {
		d: "M12 13v8l-4-4",
		key: "1f5nwf"
	}],
	["path", {
		d: "m12 21 4-4",
		key: "1lfcce"
	}],
	["path", {
		d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284",
		key: "ui1hmy"
	}]
]), gt = V("ellipsis", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}],
	["circle", {
		cx: "19",
		cy: "12",
		r: "1",
		key: "1wjl8i"
	}],
	["circle", {
		cx: "5",
		cy: "12",
		r: "1",
		key: "1pcz8c"
	}]
]), _t = V("external-link", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "M10 14 21 3",
		key: "gplh6r"
	}],
	["path", {
		d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
		key: "a6xqqp"
	}]
]), vt = V("eye-off", [
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
]), yt = V("image-off", [
	["line", {
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22",
		key: "a6p6uj"
	}],
	["path", {
		d: "M10.41 10.41a2 2 0 1 1-2.83-2.83",
		key: "1bzlo9"
	}],
	["line", {
		x1: "13.5",
		x2: "6",
		y1: "13.5",
		y2: "21",
		key: "1q0aeu"
	}],
	["line", {
		x1: "18",
		x2: "21",
		y1: "12",
		y2: "15",
		key: "5mozeu"
	}],
	["path", {
		d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
		key: "mmje98"
	}],
	["path", {
		d: "M21 15V5a2 2 0 0 0-2-2H9",
		key: "43el77"
	}]
]), bt = V("image", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		ry: "2",
		key: "1m3agn"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}],
	["path", {
		d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
		key: "1xmnt7"
	}]
]), xt = V("link", [["path", {
	d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
	key: "1cjeqo"
}], ["path", {
	d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
	key: "19qd67"
}]]), St = V("menu", [
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
]), Ct = V("message-circle", [["path", {
	d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
	key: "1sd12s"
}]]), wt = V("message-square", [["path", {
	d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
	key: "18887p"
}]]), Tt = V("play", [["path", {
	d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
	key: "10ikf1"
}]]), Et = V("refresh-cw", [
	["path", {
		d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
		key: "v9h5vc"
	}],
	["path", {
		d: "M21 3v5h-5",
		key: "1q7to0"
	}],
	["path", {
		d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
		key: "3uifl3"
	}],
	["path", {
		d: "M8 16H3v5",
		key: "1cv678"
	}]
]), Dt = V("search-x", [
	["path", {
		d: "m13.5 8.5-5 5",
		key: "1cs55j"
	}],
	["path", {
		d: "m8.5 8.5 5 5",
		key: "a8mexj"
	}],
	["circle", {
		cx: "11",
		cy: "11",
		r: "8",
		key: "4ej97u"
	}],
	["path", {
		d: "m21 21-4.3-4.3",
		key: "1qie3q"
	}]
]), Ot = V("settings-2", [
	["path", {
		d: "M14 17H5",
		key: "gfn3mx"
	}],
	["path", {
		d: "M19 7h-9",
		key: "6i9tg"
	}],
	["circle", {
		cx: "17",
		cy: "17",
		r: "3",
		key: "18b49y"
	}],
	["circle", {
		cx: "7",
		cy: "7",
		r: "3",
		key: "dfmy0x"
	}]
]), kt = V("settings", [["path", {
	d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
	key: "1i5ecw"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]), At = V("trash-2", [
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
]), jt = V("triangle-alert", [
	["path", {
		d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
		key: "wmoenq"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]), Mt = V("user-round-minus", [
	["path", {
		d: "M2 21a8 8 0 0 1 13.292-6",
		key: "bjp14o"
	}],
	["circle", {
		cx: "10",
		cy: "8",
		r: "5",
		key: "o932ke"
	}],
	["path", {
		d: "M22 19h-6",
		key: "vcuq98"
	}]
]), Nt = V("user-round-plus", [
	["path", {
		d: "M2 21a8 8 0 0 1 13.292-6",
		key: "bjp14o"
	}],
	["circle", {
		cx: "10",
		cy: "8",
		r: "5",
		key: "o932ke"
	}],
	["path", {
		d: "M19 16v6",
		key: "tddt3s"
	}],
	["path", {
		d: "M22 19h-6",
		key: "vcuq98"
	}]
]);
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.4_@types+react@18.3.31_react@18.3.1/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
o();
var Pt = 0, Ft = null;
function It() {
	h(() => {
		Ft ||= {
			start: Lt(),
			end: Lt()
		};
		let { start: e, end: t } = Ft;
		return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), Pt++, () => {
			Pt === 1 && (Ft?.start.remove(), Ft?.end.remove(), Ft = null), Pt = Math.max(0, Pt - 1);
		};
	}, []);
}
function Lt() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-scope@1.1.11_@types+react-dom@18.3.7_@types+react@18.3.31__@types_3d67843e15cde1f59ec8940982ecbaf3/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
o();
var Rt = "focusScope.autoFocusOnMount", zt = "focusScope.autoFocusOnUnmount", Bt = {
	bubbles: !1,
	cancelable: !0
}, Vt = "FocusScope", Ht = m((e, t) => {
	let { loop: r = !1, trapped: i = !1, onMountAutoFocus: a, onUnmountAutoFocus: o, ...c } = e, [l, u] = n(null), d = A(a), f = A(o), p = g(null), m = F(t, u), _ = g({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	h(() => {
		if (i) {
			let e = function(e) {
				if (_.paused || !l) return;
				let t = e.target;
				l.contains(t) ? p.current = t : Yt(p.current, { select: !0 });
			}, t = function(e) {
				if (_.paused || !l) return;
				let t = e.relatedTarget;
				t !== null && (l.contains(t) || Yt(p.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && Yt(l);
			};
			document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return l && r.observe(l, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		i,
		l,
		_.paused
	]), h(() => {
		if (l) {
			Xt.add(_);
			let e = document.activeElement;
			if (!l.contains(e)) {
				let t = new CustomEvent(Rt, Bt);
				l.addEventListener(Rt, d), l.dispatchEvent(t), t.defaultPrevented || (Ut($t(Gt(l)), { select: !0 }), document.activeElement === e && Yt(l));
			}
			return () => {
				l.removeEventListener(Rt, d), setTimeout(() => {
					let t = new CustomEvent(zt, Bt);
					l.addEventListener(zt, f), l.dispatchEvent(t), t.defaultPrevented || Yt(e ?? document.body, { select: !0 }), l.removeEventListener(zt, f), Xt.remove(_);
				}, 0);
			};
		}
	}, [
		l,
		d,
		f,
		_
	]);
	let v = s((e) => {
		if (!r && !i || _.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, n = document.activeElement;
		if (t && n) {
			let t = e.currentTarget, [i, a] = Wt(t);
			i && a ? !e.shiftKey && n === a ? (e.preventDefault(), r && Yt(i, { select: !0 })) : e.shiftKey && n === i && (e.preventDefault(), r && Yt(a, { select: !0 })) : n === t && e.preventDefault();
		}
	}, [
		r,
		i,
		_.paused
	]);
	return /* @__PURE__ */ (0, Y.jsx)(I.div, {
		tabIndex: -1,
		...c,
		ref: m,
		onKeyDown: v
	});
});
Ht.displayName = Vt;
function Ut(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (Yt(r, { select: t }), document.activeElement !== n) return;
}
function Wt(e) {
	let t = Gt(e);
	return [Kt(t, e), Kt(t.reverse(), e)];
}
function Gt(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function Kt(e, t) {
	for (let n of e) if (!qt(n, { upTo: t })) return n;
}
function qt(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function Jt(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function Yt(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && Jt(e) && t && e.select();
	}
}
var Xt = Zt();
function Zt() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = Qt(e, t), e.unshift(t);
		},
		remove(t) {
			e = Qt(e, t), e[0]?.resume();
		}
	};
}
function Qt(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
function $t(e) {
	return e.filter((e) => e.tagName !== "A");
}
//#endregion
//#region ../../node_modules/.pnpm/aria-hidden@1.2.6_patch_hash=0ad169c5dde1d489b721bf506266c5aec2fe212b2ca97daa6caccee450d8dd5b/node_modules/aria-hidden/dist/es2015/index.js
var en = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, tn = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ new WeakMap(), rn = {}, an = 0, on = function(e) {
	return e && (e.host || on(e.parentNode));
}, sn = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = on(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, cn = function(e, t, n, r) {
	var i = sn(t, Array.isArray(e) ? e : [e]);
	rn[n] || (rn[n] = /* @__PURE__ */ new WeakMap());
	var a = rn[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (tn.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				tn.set(e, c), a.set(e, l), o.push(e), c === 1 && i && nn.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), an++, function() {
		o.forEach(function(e) {
			var t = tn.get(e) - 1, i = a.get(e) - 1;
			tn.set(e, t), a.set(e, i), t || (nn.has(e) || e.removeAttribute(r), nn.delete(e)), i || e.removeAttribute(n);
		}), an--, an || (tn = /* @__PURE__ */ new WeakMap(), tn = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ new WeakMap(), rn = {});
	};
}, ln = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || en(e);
	if (!i) return function() {
		return null;
	};
	r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script")));
	var a = cn(r, i, n, "aria-hidden"), o = !0, s = !1;
	return queueMicrotask(function() {
		o = !1;
	}), function() {
		s || (s = !0, o && r[0].isConnected ? queueMicrotask(a) : a());
	};
}, X = function() {
	return X = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, X.apply(this, arguments);
};
function un(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function dn(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.31_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var fn = "right-scroll-bar-position", pn = "width-before-scroll-bar", mn = "with-scroll-bars-hidden", hn = "--removed-body-scroll-bar-size";
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.31_react@18.3.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
function gn(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.31_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useRef.js
o();
function _n(e, t) {
	var r = n(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return r.value;
				},
				set current(e) {
					var t = r.value;
					t !== e && (r.value = e, r.callback(e, t));
				}
			}
		};
	})[0];
	return r.callback = t, r.facade;
}
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@18.3.31_react@18.3.1/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
o();
var vn = typeof window < "u" ? _ : h, yn = /* @__PURE__ */ new WeakMap();
function bn(e, t) {
	var n = _n(t || null, function(t) {
		return e.forEach(function(e) {
			return gn(e, t);
		});
	});
	return vn(function() {
		var t = yn.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || gn(e, null);
			}), i.forEach(function(e) {
				r.has(e) || gn(e, a);
			});
		}
		yn.set(n, e);
	}, [e]), n;
}
//#endregion
//#region ../../node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.31_react@18.3.1/node_modules/use-sidecar/dist/es2015/medium.js
function xn(e) {
	return e;
}
function Sn(e, t) {
	t === void 0 && (t = xn);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function Cn(e) {
	e === void 0 && (e = {});
	var t = Sn(null);
	return t.options = X({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region ../../node_modules/.pnpm/use-sidecar@1.1.3_@types+react@18.3.31_react@18.3.1/node_modules/use-sidecar/dist/es2015/exports.js
o();
var wn = function(e) {
	var t = e.sideCar, n = un(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return l(r, X({}, n));
};
wn.isSideCarExport = !0;
function Tn(e, t) {
	return e.useMedium(t), wn;
}
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.31_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var En = Cn();
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.31_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/UI.js
o();
var Dn = function() {}, On = m(function(e, t) {
	var r = g(null), i = n({
		onScrollCapture: Dn,
		onWheelCapture: Dn,
		onTouchMoveCapture: Dn
	}), a = i[0], o = i[1], s = e.forwardProps, c = e.children, u = e.className, m = e.removeScrollBar, h = e.enabled, _ = e.shards, v = e.sideCar, y = e.noRelative, b = e.noIsolation, x = e.inert, S = e.allowPinchZoom, C = e.as, w = C === void 0 ? "div" : C, T = e.gapMode, E = un(e, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), D = v, O = bn([r, t]), k = X(X({}, E), a);
	return l(d, null, h && l(D, {
		sideCar: En,
		removeScrollBar: m,
		shards: _,
		noRelative: y,
		noIsolation: b,
		inert: x,
		setCallbacks: o,
		allowPinchZoom: !!S,
		lockRef: r,
		gapMode: T
	}), s ? f(p.only(c), X(X({}, k), { ref: O })) : l(w, X({}, k, {
		className: u,
		ref: O
	}), c));
});
On.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, On.classNames = {
	fullWidth: pn,
	zeroRight: fn
};
//#endregion
//#region ../../node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var kn, An = function() {
	if (kn) return kn;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region ../../node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.31_react@18.3.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function jn() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = An();
	return t && e.setAttribute("nonce", t), e;
}
function Mn(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Nn(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Pn = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = jn()) && (Mn(t, n), Nn(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
};
//#endregion
//#region ../../node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@18.3.31_react@18.3.1/node_modules/react-style-singleton/dist/es2015/hook.js
o();
var Fn = function() {
	var e = Pn();
	return function(t, n) {
		h(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, In = function() {
	var e = Fn();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Ln = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Rn = function(e) {
	return parseInt(e || "", 10) || 0;
}, zn = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Rn(n),
		Rn(r),
		Rn(i)
	];
}, Bn = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Ln;
	var t = zn(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
};
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@18.3.31_react@18.3.1/node_modules/react-remove-scroll-bar/dist/es2015/component.js
o();
var Vn = In(), Hn = "data-scroll-locked", Un = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${mn} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Hn}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${fn} {
    right: ${s}px ${r};
  }
  
  .${pn} {
    margin-right: ${s}px ${r};
  }
  
  .${fn} .${fn} {
    right: 0 ${r};
  }
  
  .${pn} .${pn} {
    margin-right: 0 ${r};
  }
  
  body[${Hn}] {
    ${hn}: ${s}px;
  }
`;
}, Wn = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Gn = function() {
	h(function() {
		return document.body.setAttribute(Hn, (Wn() + 1).toString()), function() {
			var e = Wn() - 1;
			e <= 0 ? document.body.removeAttribute(Hn) : document.body.setAttribute(Hn, e.toString());
		};
	}, []);
}, Kn = function(e) {
	var n = e.noRelative, r = e.noImportant, i = e.gapMode, a = i === void 0 ? "margin" : i;
	return Gn(), l(Vn, { styles: Un(t(function() {
		return Bn(a);
	}, [a]), !n, a, r ? "" : "!important") });
}, qn = !1;
if (typeof window < "u") try {
	var Jn = Object.defineProperty({}, "passive", { get: function() {
		return qn = !0, !0;
	} });
	window.addEventListener("test", Jn, Jn), window.removeEventListener("test", Jn, Jn);
} catch {
	qn = !1;
}
var Yn = qn ? { passive: !1 } : !1, Xn = function(e) {
	return e.tagName === "TEXTAREA";
}, Zn = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Xn(e) && n[t] === "visible");
}, Qn = function(e) {
	return Zn(e, "overflowY");
}, $n = function(e) {
	return Zn(e, "overflowX");
}, er = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), rr(e, r)) {
			var i = ir(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, tr = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, nr = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, rr = function(e, t) {
	return e === "v" ? Qn(t) : $n(t);
}, ir = function(e, t) {
	return e === "v" ? tr(t) : nr(t);
}, ar = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, or = function(e, t, n, r, i) {
	var a = ar(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = ir(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && rr(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
};
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.31_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
o();
var sr = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, cr = function(e) {
	return [e.deltaX, e.deltaY];
}, lr = function(e) {
	return e && "current" in e ? e.current : e;
}, ur = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, dr = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, fr = 0, pr = [];
function mr(e) {
	var t = g([]), r = g([0, 0]), i = g(), a = n(fr++)[0], o = n(In)[0], c = g(e);
	h(function() {
		c.current = e;
	}, [e]), h(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${a}`);
			var t = dn([e.lockRef.current], (e.shards || []).map(lr), !0).filter(Boolean);
			return t.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${a}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${a}`), t.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${a}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var u = s(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !c.current.allowPinchZoom;
		var n = sr(e), a = r.current, o = "deltaX" in e ? e.deltaX : a[0] - n[0], s = "deltaY" in e ? e.deltaY : a[1] - n[1], l, u = e.target, d = Math.abs(o) > Math.abs(s) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = window.getSelection(), p = f && f.anchorNode;
		if (p && (p === u || p.contains(u))) return !1;
		var m = er(d, u);
		if (!m) return !0;
		if (m ? l = d : (l = d === "v" ? "h" : "v", m = er(d, u)), !m) return !1;
		if (!i.current && "changedTouches" in e && (o || s) && (i.current = l), !l) return !0;
		var h = i.current || l;
		return or(h, t, e, h === "h" ? o : s, !0);
	}, []), f = s(function(e) {
		var n = e;
		if (!(!pr.length || pr[pr.length - 1] !== o)) {
			var r = "deltaY" in n ? cr(n) : sr(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && ur(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var a = (c.current.shards || []).map(lr).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(a.length > 0 ? u(n, a[0]) : !c.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), p = s(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: hr(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), m = s(function(e) {
		r.current = sr(e), i.current = void 0;
	}, []), _ = s(function(t) {
		p(t.type, cr(t), t.target, u(t, e.lockRef.current));
	}, []), v = s(function(t) {
		p(t.type, sr(t), t.target, u(t, e.lockRef.current));
	}, []);
	h(function() {
		return pr.push(o), e.setCallbacks({
			onScrollCapture: _,
			onWheelCapture: _,
			onTouchMoveCapture: v
		}), document.addEventListener("wheel", f, Yn), document.addEventListener("touchmove", f, Yn), document.addEventListener("touchstart", m, Yn), function() {
			pr = pr.filter(function(e) {
				return e !== o;
			}), document.removeEventListener("wheel", f, Yn), document.removeEventListener("touchmove", f, Yn), document.removeEventListener("touchstart", m, Yn);
		};
	}, []);
	var y = e.removeScrollBar, b = e.inert;
	return l(d, null, b ? l(o, { styles: dr(a) }) : null, y ? l(Kn, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function hr(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.31_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var gr = Tn(En, mr);
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@18.3.31_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/Combination.js
o();
var _r = m(function(e, t) {
	return l(On, X({}, e, {
		ref: t,
		sideCar: gr
	}));
});
_r.classNames = On.classNames;
//#endregion
//#region ../shade/es/components/ui/input-surface.js
var Z = {
	base: "rounded-control border border-control-border bg-control-surface transition-colors",
	focusSelf: "focus-visible:outline-hidden focus-visible:border-focus-ring focus-visible:ring-2 focus-visible:ring-focus-ring/25",
	focusWithin: "has-[:focus-visible]:outline-hidden has-[:focus-visible]:border-focus-ring has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-focus-ring/25",
	invalidSelf: "aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/20 dark:aria-[invalid=true]:ring-destructive/40",
	invalidWithin: "has-[[aria-invalid=true]]:border-destructive has-[[aria-invalid=true]]:ring-destructive/20 dark:has-[[aria-invalid=true]]:ring-destructive/40",
	disabledSelf: "disabled:cursor-not-allowed disabled:opacity-50",
	disabledFieldSelf: "disabled:bg-control-disabled-surface disabled:text-muted-foreground disabled:opacity-100 disabled:hover:bg-control-disabled-surface"
};
function vr(e = "self") {
	return e === "self" ? N(Z.base, Z.focusSelf, Z.invalidSelf, Z.disabledSelf) : N(Z.base, Z.focusWithin, Z.invalidWithin);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-dialog@1.1.18_@types+react-dom@18.3.7_@types+react@18.3.31__@types+reac_2e1089bf12b8c5f777f8a71849ab93fd/node_modules/@radix-ui/react-dialog/dist/index.mjs
o();
var yr = "Dialog", [br, xr] = ee(yr), [Sr, Q] = br(yr), Cr = (e) => {
	let { __scopeDialog: t, children: n, open: r, defaultOpen: i, onOpenChange: a, modal: o = !0 } = e, c = g(null), l = g(null), [u, d] = de({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: yr
	});
	return /* @__PURE__ */ (0, Y.jsx)(Sr, {
		scope: t,
		triggerRef: c,
		contentRef: l,
		contentId: k(),
		titleId: k(),
		descriptionId: k(),
		open: u,
		onOpenChange: d,
		onOpenToggle: s(() => d((e) => !e), [d]),
		modal: o,
		children: n
	});
};
Cr.displayName = yr;
var wr = "DialogTrigger", Tr = m((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = Q(wr, n), a = F(t, i.triggerRef);
	return /* @__PURE__ */ (0, Y.jsx)(I.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.open ? i.contentId : void 0,
		"data-state": Gr(i.open),
		...r,
		ref: a,
		onClick: L(e.onClick, i.onOpenToggle)
	});
});
Tr.displayName = wr;
var Er = "DialogPortal", [Dr, Or] = br(Er, { forceMount: void 0 }), kr = (e) => {
	let { __scopeDialog: t, forceMount: n, children: r, container: i } = e, a = Q(Er, t);
	return /* @__PURE__ */ (0, Y.jsx)(Dr, {
		scope: t,
		forceMount: n,
		children: p.map(r, (e) => /* @__PURE__ */ (0, Y.jsx)(B, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, Y.jsx)(ce, {
				asChild: !0,
				container: i,
				children: e
			})
		}))
	});
};
kr.displayName = Er;
var Ar = "DialogOverlay", jr = m((e, t) => {
	let n = Or(Ar, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = Q(Ar, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ (0, Y.jsx)(B, {
		present: r || a.open,
		children: /* @__PURE__ */ (0, Y.jsx)(Nr, {
			...i,
			ref: t
		})
	}) : null;
});
jr.displayName = Ar;
var Mr = ue("DialogOverlay.RemoveScroll"), Nr = m((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = Q(Ar, n), a = F(t, ne());
	return /* @__PURE__ */ (0, Y.jsx)(_r, {
		as: Mr,
		allowPinchZoom: !0,
		shards: [i.contentRef],
		children: /* @__PURE__ */ (0, Y.jsx)(I.div, {
			"data-state": Gr(i.open),
			...r,
			ref: a,
			style: {
				pointerEvents: "auto",
				...r.style
			}
		})
	});
}), Pr = "DialogContent", Fr = m((e, t) => {
	let n = Or(Pr, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = Q(Pr, e.__scopeDialog);
	return /* @__PURE__ */ (0, Y.jsx)(B, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ (0, Y.jsx)(Ir, {
			...i,
			ref: t
		}) : /* @__PURE__ */ (0, Y.jsx)(Lr, {
			...i,
			ref: t
		})
	});
});
Fr.displayName = Pr;
var Ir = m((e, t) => {
	let n = Q(Pr, e.__scopeDialog), r = g(null), i = F(t, n.contentRef, r);
	return h(() => {
		let e = r.current;
		if (e) return ln(e);
	}, []), /* @__PURE__ */ (0, Y.jsx)(Rr, {
		...e,
		ref: i,
		trapFocus: n.open,
		disableOutsidePointerEvents: n.open,
		onCloseAutoFocus: L(e.onCloseAutoFocus, (e) => {
			e.preventDefault(), n.triggerRef.current?.focus();
		}),
		onPointerDownOutside: L(e.onPointerDownOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
			(t.button === 2 || n) && e.preventDefault();
		}),
		onFocusOutside: L(e.onFocusOutside, (e) => e.preventDefault())
	});
}), Lr = m((e, t) => {
	let n = Q(Pr, e.__scopeDialog), r = g(!1), i = g(!1);
	return /* @__PURE__ */ (0, Y.jsx)(Rr, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (t) => {
			e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1;
		},
		onInteractOutside: (t) => {
			e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, t.detail.originalEvent.type === "pointerdown" && (i.current = !0));
			let a = t.target;
			n.triggerRef.current?.contains(a) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && i.current && t.preventDefault();
		}
	});
}), Rr = m((e, t) => {
	let { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, ...o } = e, s = Q(Pr, n);
	return It(), /* @__PURE__ */ (0, Y.jsx)(Y.Fragment, { children: /* @__PURE__ */ (0, Y.jsx)(Ht, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a,
		children: /* @__PURE__ */ (0, Y.jsx)(W, {
			role: "dialog",
			id: s.contentId,
			"aria-describedby": s.descriptionId,
			"aria-labelledby": s.titleId,
			"data-state": Gr(s.open),
			...o,
			ref: t,
			deferPointerDownOutside: !0,
			onDismiss: () => s.onOpenChange(!1)
		})
	}) });
}), zr = "DialogTitle", Br = m((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = Q(zr, n);
	return /* @__PURE__ */ (0, Y.jsx)(I.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
});
Br.displayName = zr;
var Vr = "DialogDescription", Hr = m((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = Q(Vr, n);
	return /* @__PURE__ */ (0, Y.jsx)(I.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
});
Hr.displayName = Vr;
var Ur = "DialogClose", Wr = m((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = Q(Ur, n);
	return /* @__PURE__ */ (0, Y.jsx)(I.button, {
		type: "button",
		...r,
		ref: t,
		onClick: L(e.onClick, () => i.onOpenChange(!1))
	});
});
Wr.displayName = Ur;
function Gr(e) {
	return e ? "open" : "closed";
}
//#endregion
//#region ../shade/es/components/ui/dialog.js
o();
var Kr = Cr, qr = Tr, Jr = kr, Yr = Wr, Xr = m(({ className: e, ...t }, n) => /* @__PURE__ */ (0, Y.jsx)(jr, {
	ref: n,
	className: N("fixed inset-0 z-50 transform-gpu bg-black/30 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 dark:bg-black/60", e),
	...t
}));
Xr.displayName = jr.displayName;
var Zr = m(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ (0, Y.jsx)(Jr, { children: /* @__PURE__ */ (0, Y.jsxs)(z, { children: [/* @__PURE__ */ (0, Y.jsx)(Xr, {}), /* @__PURE__ */ (0, Y.jsx)(Fr, {
	ref: r,
	className: N("fixed top-[8vmin] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] transform-gpu gap-6 bg-surface-elevated-2 p-6 shadow-lg outline-hidden duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:rounded-lg", e),
	...n,
	children: t
})] }) }));
Zr.displayName = Fr.displayName;
var Qr = ({ className: e, ...t }) => /* @__PURE__ */ (0, Y.jsx)("div", {
	className: N("flex flex-col gap-y-1.5 text-center sm:text-left", e),
	...t
});
Qr.displayName = "DialogHeader";
var $r = ({ className: e, ...t }) => /* @__PURE__ */ (0, Y.jsx)("div", {
	className: N("flex flex-col-reverse sm:flex-row sm:items-end sm:justify-end sm:gap-2 [&_button]:min-w-20", e),
	...t
});
$r.displayName = "DialogFooter";
var ei = m(({ className: e, ...t }, n) => /* @__PURE__ */ (0, Y.jsx)(Br, {
	ref: n,
	className: N("text-xl leading-none font-semibold tracking-tight", e),
	...t
}));
ei.displayName = Br.displayName;
var ti = m(({ className: e, ...t }, n) => /* @__PURE__ */ (0, Y.jsx)(Hr, {
	ref: n,
	className: N("text-muted-foreground", e),
	...t
}));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-popover@1.1.18_@types+react-dom@18.3.7_@types+react@18.3.31__@types+rea_8a3b109e72d032b35181788743af8841/node_modules/@radix-ui/react-popover/dist/index.mjs
ti.displayName = Hr.displayName, o();
var ni = "Popover", [ri, ii] = ee(ni, [ge]), ai = ge(), [oi, si] = ri(ni), ci = (e) => {
	let { __scopePopover: t, children: r, open: i, defaultOpen: a, onOpenChange: o, modal: c = !1 } = e, l = ai(t), u = g(null), [d, f] = n(!1), [p, m] = de({
		prop: i,
		defaultProp: a ?? !1,
		onChange: o,
		caller: ni
	});
	return /* @__PURE__ */ (0, Y.jsx)(se, {
		...l,
		children: /* @__PURE__ */ (0, Y.jsx)(oi, {
			scope: t,
			contentId: k(),
			triggerRef: u,
			open: p,
			onOpenChange: m,
			onOpenToggle: s(() => m((e) => !e), [m]),
			hasCustomAnchor: d,
			onCustomAnchorAdd: s(() => f(!0), []),
			onCustomAnchorRemove: s(() => f(!1), []),
			modal: c,
			children: r
		})
	});
};
ci.displayName = ni;
var li = "PopoverAnchor", ui = m((e, t) => {
	let { __scopePopover: n, ...r } = e, i = si(li, n), a = ai(n), { onCustomAnchorAdd: o, onCustomAnchorRemove: s } = i;
	return h(() => (o(), () => s()), [o, s]), /* @__PURE__ */ (0, Y.jsx)(oe, {
		...a,
		...r,
		ref: t
	});
});
ui.displayName = li;
var di = "PopoverTrigger", fi = m((e, t) => {
	let { __scopePopover: n, ...r } = e, i = si(di, n), a = ai(n), o = F(t, i.triggerRef), s = /* @__PURE__ */ (0, Y.jsx)(I.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": i.open,
		"aria-controls": i.open ? i.contentId : void 0,
		"data-state": Di(i.open),
		...r,
		ref: o,
		onClick: L(e.onClick, i.onOpenToggle)
	});
	return i.hasCustomAnchor ? s : /* @__PURE__ */ (0, Y.jsx)(oe, {
		asChild: !0,
		...a,
		children: s
	});
});
fi.displayName = di;
var pi = "PopoverPortal", [mi, hi] = ri(pi, { forceMount: void 0 }), gi = (e) => {
	let { __scopePopover: t, forceMount: n, children: r, container: i } = e, a = si(pi, t);
	return /* @__PURE__ */ (0, Y.jsx)(mi, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, Y.jsx)(B, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, Y.jsx)(ce, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
gi.displayName = pi;
var _i = "PopoverContent", vi = m((e, t) => {
	let n = hi(_i, e.__scopePopover), { forceMount: r = n.forceMount, ...i } = e, a = si(_i, e.__scopePopover);
	return /* @__PURE__ */ (0, Y.jsx)(B, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ (0, Y.jsx)(bi, {
			...i,
			ref: t
		}) : /* @__PURE__ */ (0, Y.jsx)(xi, {
			...i,
			ref: t
		})
	});
});
vi.displayName = _i;
var yi = ue("PopoverContent.RemoveScroll"), bi = m((e, t) => {
	let n = si(_i, e.__scopePopover), r = g(null), i = F(t, r), a = g(!1);
	return h(() => {
		let e = r.current;
		if (e) return ln(e);
	}, []), /* @__PURE__ */ (0, Y.jsx)(_r, {
		as: yi,
		allowPinchZoom: !0,
		children: /* @__PURE__ */ (0, Y.jsx)(Si, {
			...e,
			ref: i,
			trapFocus: n.open,
			disableOutsidePointerEvents: !0,
			onCloseAutoFocus: L(e.onCloseAutoFocus, (e) => {
				e.preventDefault(), a.current || n.triggerRef.current?.focus();
			}),
			onPointerDownOutside: L(e.onPointerDownOutside, (e) => {
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
				a.current = r;
			}, { checkForDefaultPrevented: !1 }),
			onFocusOutside: L(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 })
		})
	});
}), xi = m((e, t) => {
	let n = si(_i, e.__scopePopover), r = g(!1), i = g(!1);
	return /* @__PURE__ */ (0, Y.jsx)(Si, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (t) => {
			e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1;
		},
		onInteractOutside: (t) => {
			e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, t.detail.originalEvent.type === "pointerdown" && (i.current = !0));
			let a = t.target;
			n.triggerRef.current?.contains(a) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && i.current && t.preventDefault();
		}
	});
}), Si = m((e, t) => {
	let { __scopePopover: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, disableOutsidePointerEvents: o, onEscapeKeyDown: s, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...d } = e, f = si(_i, n), p = ai(n);
	return It(), /* @__PURE__ */ (0, Y.jsx)(Ht, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a,
		children: /* @__PURE__ */ (0, Y.jsx)(W, {
			asChild: !0,
			disableOutsidePointerEvents: o,
			onInteractOutside: u,
			onEscapeKeyDown: s,
			onPointerDownOutside: c,
			onFocusOutside: l,
			onDismiss: () => f.onOpenChange(!1),
			deferPointerDownOutside: !0,
			children: /* @__PURE__ */ (0, Y.jsx)(_e, {
				"data-state": Di(f.open),
				role: "dialog",
				id: f.contentId,
				...p,
				...d,
				ref: t,
				style: {
					...d.style,
					"--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
					"--radix-popover-content-available-width": "var(--radix-popper-available-width)",
					"--radix-popover-content-available-height": "var(--radix-popper-available-height)",
					"--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
					"--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
				}
			})
		})
	});
}), Ci = "PopoverClose", wi = m((e, t) => {
	let { __scopePopover: n, ...r } = e, i = si(Ci, n);
	return /* @__PURE__ */ (0, Y.jsx)(I.button, {
		type: "button",
		...r,
		ref: t,
		onClick: L(e.onClick, () => i.onOpenChange(!1))
	});
});
wi.displayName = Ci;
var Ti = "PopoverArrow", Ei = m((e, t) => {
	let { __scopePopover: n, ...r } = e, i = ai(n);
	return /* @__PURE__ */ (0, Y.jsx)(he, {
		...i,
		...r,
		ref: t
	});
});
Ei.displayName = Ti;
function Di(e) {
	return e ? "open" : "closed";
}
var Oi = ci, ki = fi, Ai = gi, ji = vi, Mi = wi;
//#endregion
//#region ../shade/es/components/ui/popover.js
o();
var Ni = Oi, Pi = ki, Fi = Mi, Ii = m(({ className: e, align: t = "center", onEscapeKeyDown: n, sideOffset: r = 4, ...i }, a) => /* @__PURE__ */ (0, Y.jsx)(Ai, { children: /* @__PURE__ */ (0, Y.jsx)(z, { children: /* @__PURE__ */ (0, Y.jsx)(ji, {
	ref: a,
	align: t,
	className: N("z-50 origin-(--radix-popover-content-transform-origin) rounded-menu border border-border/60 bg-surface-elevated-2 p-5 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 dark:border-border/30", e),
	sideOffset: r,
	onEscapeKeyDown: (e) => lt(e, n),
	...i
}) }) }));
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-alert-dialog@1.1.18_@types+react-dom@18.3.7_@types+react@18.3.31__@type_6219ffd5c85ad0b85061ea739c6eab31/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs
Ii.displayName = ji.displayName, o();
var Li = "AlertDialog", [Ri, zi] = ee(Li, [xr]), $ = xr(), Bi = (e) => {
	let { __scopeAlertDialog: t, ...n } = e, r = $(t);
	return /* @__PURE__ */ (0, Y.jsx)(Cr, {
		...r,
		...n,
		modal: !0
	});
};
Bi.displayName = Li;
var Vi = "AlertDialogTrigger", Hi = m((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ (0, Y.jsx)(Tr, {
		...i,
		...r,
		ref: t
	});
});
Hi.displayName = Vi;
var Ui = "AlertDialogPortal", Wi = (e) => {
	let { __scopeAlertDialog: t, ...n } = e, r = $(t);
	return /* @__PURE__ */ (0, Y.jsx)(kr, {
		...r,
		...n
	});
};
Wi.displayName = Ui;
var Gi = "AlertDialogOverlay", Ki = m((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ (0, Y.jsx)(jr, {
		...i,
		...r,
		ref: t
	});
});
Ki.displayName = Gi;
var qi = "AlertDialogContent", [Ji, Yi] = Ri(qi), Xi = m((e, t) => {
	let { __scopeAlertDialog: n, children: r, ...i } = e, a = $(n), o = F(t, g(null)), s = g(null);
	return /* @__PURE__ */ (0, Y.jsx)(Ji, {
		scope: n,
		cancelRef: s,
		children: /* @__PURE__ */ (0, Y.jsx)(Fr, {
			role: "alertdialog",
			...a,
			...i,
			ref: o,
			onOpenAutoFocus: L(i.onOpenAutoFocus, (e) => {
				e.preventDefault(), s.current?.focus({ preventScroll: !0 });
			}),
			onPointerDownOutside: (e) => e.preventDefault(),
			onInteractOutside: (e) => e.preventDefault(),
			children: r
		})
	});
});
Xi.displayName = qi;
var Zi = "AlertDialogTitle", Qi = m((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ (0, Y.jsx)(Br, {
		...i,
		...r,
		ref: t
	});
});
Qi.displayName = Zi;
var $i = "AlertDialogDescription", ea = m((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ (0, Y.jsx)(Hr, {
		...i,
		...r,
		ref: t
	});
});
ea.displayName = $i;
var ta = "AlertDialogAction", na = m((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ (0, Y.jsx)(Wr, {
		...i,
		...r,
		ref: t
	});
});
na.displayName = ta;
var ra = "AlertDialogCancel", ia = m((e, t) => {
	let { __scopeAlertDialog: n, ...r } = e, { cancelRef: i } = Yi(ra, n), a = $(n), o = F(t, i);
	return /* @__PURE__ */ (0, Y.jsx)(Wr, {
		...a,
		...r,
		ref: o
	});
});
ia.displayName = ra;
var aa = Bi, oa = Hi, sa = Wi, ca = Ki, la = Xi, ua = na, da = ia, fa = Qi, pa = ea;
//#endregion
//#region ../shade/es/components/ui/alert-dialog.js
o();
var ma = aa, ha = oa, ga = sa, _a = m(({ className: e, ...t }, n) => /* @__PURE__ */ (0, Y.jsx)(ca, {
	className: N("fixed inset-0 z-50 transform-gpu bg-black/30 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 dark:bg-black/60", e),
	...t,
	ref: n
}));
_a.displayName = ca.displayName;
var va = m(({ className: e, overlayClassName: t, ...n }, r) => /* @__PURE__ */ (0, Y.jsx)(ga, { children: /* @__PURE__ */ (0, Y.jsxs)(z, { children: [/* @__PURE__ */ (0, Y.jsx)(_a, {
	className: t,
	onClick: (e) => e.stopPropagation()
}), /* @__PURE__ */ (0, Y.jsx)(la, {
	ref: r,
	className: N("fixed top-[20%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-20%] gap-6 bg-surface-elevated-2 p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-top-[18%] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-top-[18%] sm:rounded-lg", e),
	...n
})] }) }));
va.displayName = la.displayName;
var ya = ({ className: e, ...t }) => /* @__PURE__ */ (0, Y.jsx)("div", {
	className: N("flex flex-col gap-y-2 text-center sm:text-left", e),
	...t
});
ya.displayName = "AlertDialogHeader";
var ba = ({ className: e, ...t }) => /* @__PURE__ */ (0, Y.jsx)("div", {
	className: N("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2", e),
	...t
});
ba.displayName = "AlertDialogFooter";
var xa = m(({ className: e, ...t }, n) => /* @__PURE__ */ (0, Y.jsx)(fa, {
	ref: n,
	className: N("text-xl font-semibold", e),
	...t
}));
xa.displayName = fa.displayName;
var Sa = m(({ className: e, ...t }, n) => /* @__PURE__ */ (0, Y.jsx)(pa, {
	ref: n,
	className: N("text-base", e),
	...t
}));
Sa.displayName = pa.displayName;
var Ca = m(({ className: e, variant: t, ...n }, r) => {
	let { controlShape: i, isAdmin7: a } = H();
	return /* @__PURE__ */ (0, Y.jsx)(ua, {
		ref: r,
		className: N(le({
			isAdmin7: a,
			shape: i,
			variant: t
		}), e),
		...n,
		"data-control-shape": i
	});
});
Ca.displayName = ua.displayName;
var wa = m(({ className: e, ...t }, n) => {
	let { controlShape: r, isAdmin7: i } = H();
	return /* @__PURE__ */ (0, Y.jsx)(da, {
		ref: n,
		className: N(le({
			isAdmin7: i,
			shape: r,
			variant: "outline"
		}), "mt-2 sm:mt-0", e),
		...t,
		"data-control-shape": r
	});
});
//#endregion
//#region ../shade/es/components/ui/input.js
wa.displayName = da.displayName, o();
var Ta = m(({ className: e, type: t, ...n }, r) => /* @__PURE__ */ (0, Y.jsx)("input", {
	ref: r,
	className: N(vr("self"), Z.disabledFieldSelf, "flex h-(--control-height) w-full px-3 py-1 text-control file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground", e),
	type: t,
	...n
}));
//#endregion
//#region ../shade/es/components/ui/loading-indicator.js
Ta.displayName = "Input", o();
var Ea = ({ size: e = "md", color: t = "dark", className: n = "" }) => {
	let r = "relative mx-0 my-[-0.5] box-border inline-block animate-spin rounded-full before:z-10 before:block before:rounded-full before:content-['']";
	switch (e) {
		case "sm":
			r += " h-[16px] w-[16px] border-2 before:mt-[10px] before:h-[3px] before:w-[3px]";
			break;
		case "md":
			r += " h-[20px] w-[20px] border-2 before:mt-[13px] before:h-[3px] before:w-[3px]";
			break;
		default:
			r += " h-[50px] w-[50px] border before:mt-[7px] before:h-[7px] before:w-[7px]";
			break;
	}
	switch (t) {
		case "current":
			r += " border-current/20 before:bg-current";
			break;
		case "light":
			r += " border-white/20 before:bg-white dark:border-black/10 dark:before:bg-black";
			break;
		default:
			r += " border-black/10 before:bg-black dark:border-white/20 dark:before:bg-white";
			break;
	}
	return /* @__PURE__ */ (0, Y.jsx)("div", { className: `${r} ${n}` });
};
//#endregion
//#region ../shade/es/components/ui/animated-number.js
o();
var Da = u(() => import("./dist-ByFmDSNP.js")), Oa = (e) => /* @__PURE__ */ (0, Y.jsx)(c, {
	fallback: /* @__PURE__ */ (0, Y.jsx)("div", {}),
	children: /* @__PURE__ */ (0, Y.jsx)(Da, { ...e })
});
//#endregion
//#region ../shade/es/components/ui/badge.js
o();
var ka = M("inline-flex items-center border font-semibold transition-colors focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:outline-hidden", {
	variants: {
		variant: {
			default: "border-transparent bg-primary text-primary-foreground",
			secondary: "border-transparent bg-secondary text-secondary-foreground/70",
			destructive: "border-transparent bg-destructive/20 text-destructive",
			success: "border-transparent bg-green/20 text-green",
			warning: "border-transparent bg-state-warning/20 text-yellow-600",
			outline: "text-foreground"
		},
		size: {
			default: "px-1.5 text-xs",
			sm: "h-5 px-2 text-sm",
			md: "h-6 px-2.5 text-sm"
		},
		shape: {
			rounded: "rounded-xs",
			pill: "rounded-full"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default",
		shape: "pill"
	}
});
function Aa({ className: e, shape: t, size: n, variant: r, asChild: i = !1, ...a }) {
	let { controlShape: o } = H();
	return /* @__PURE__ */ (0, Y.jsx)(i ? D : "div", {
		className: N(ka({
			shape: t ?? o,
			size: n,
			variant: r
		}), e),
		...a
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-label@2.1.11_@types+react-dom@18.3.7_@types+react@18.3.31__@types+react_b52ba80fbc885fa57ca9a4089e26a791/node_modules/@radix-ui/react-label/dist/index.mjs
o();
var ja = "Label", Ma = m((e, t) => /* @__PURE__ */ (0, Y.jsx)(I.label, {
	...e,
	ref: t,
	onMouseDown: (t) => {
		t.target.closest("button, input, select, textarea") || (e.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
	}
}));
Ma.displayName = ja;
var Na = Ma;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-hover-card@1.1.18_@types+react-dom@18.3.7_@types+react@18.3.31__@types+_5116cc60c827801c0ce163cced83a480/node_modules/@radix-ui/react-hover-card/dist/index.mjs
o();
var Pa, Fa = "HoverCard", [Ia, La] = ee(Fa, [ge]), Ra = ge(), [za, Ba] = Ia(Fa), Va = (e) => {
	let { __scopeHoverCard: t, children: n, open: r, defaultOpen: i, onOpenChange: a, openDelay: o = 700, closeDelay: c = 300 } = e, l = Ra(t), u = g(0), d = g(0), f = g(!1), p = g(!1), [m, _] = de({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: Fa
	}), v = s(() => {
		clearTimeout(d.current), u.current = window.setTimeout(() => _(!0), o);
	}, [o, _]), y = s(() => {
		clearTimeout(u.current), !f.current && !p.current && (d.current = window.setTimeout(() => _(!1), c));
	}, [c, _]), b = s(() => _(!1), [_]);
	return h(() => () => {
		clearTimeout(u.current), clearTimeout(d.current);
	}, []), /* @__PURE__ */ (0, Y.jsx)(za, {
		scope: t,
		open: m,
		onOpenChange: _,
		onOpen: v,
		onClose: y,
		onDismiss: b,
		hasSelectionRef: f,
		isPointerDownOnContentRef: p,
		children: /* @__PURE__ */ (0, Y.jsx)(se, {
			...l,
			children: n
		})
	});
};
Va.displayName = Fa;
var Ha = "HoverCardTrigger", Ua = m((e, t) => {
	let { __scopeHoverCard: n, ...r } = e, i = Ba(Ha, n), a = Ra(n);
	return /* @__PURE__ */ (0, Y.jsx)(oe, {
		asChild: !0,
		...a,
		children: /* @__PURE__ */ (0, Y.jsx)(I.a, {
			"data-state": i.open ? "open" : "closed",
			...r,
			ref: t,
			onPointerEnter: L(e.onPointerEnter, $a(i.onOpen)),
			onPointerLeave: L(e.onPointerLeave, $a(i.onClose)),
			onFocus: L(e.onFocus, i.onOpen),
			onBlur: L(e.onBlur, i.onClose),
			onTouchStart: L(e.onTouchStart, (e) => e.preventDefault())
		})
	});
});
Ua.displayName = Ha;
var Wa = "HoverCardPortal", [Ga, Ka] = Ia(Wa, { forceMount: void 0 }), qa = (e) => {
	let { __scopeHoverCard: t, forceMount: n, children: r, container: i } = e, a = Ba(Wa, t);
	return /* @__PURE__ */ (0, Y.jsx)(Ga, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, Y.jsx)(B, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, Y.jsx)(ce, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
qa.displayName = Wa;
var Ja = "HoverCardContent", Ya = m((e, t) => {
	let n = Ka(Ja, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...i } = e, a = Ba(Ja, e.__scopeHoverCard);
	return /* @__PURE__ */ (0, Y.jsx)(B, {
		present: r || a.open,
		children: /* @__PURE__ */ (0, Y.jsx)(Xa, {
			"data-state": a.open ? "open" : "closed",
			...i,
			onPointerEnter: L(e.onPointerEnter, $a(a.onOpen)),
			onPointerLeave: L(e.onPointerLeave, $a(a.onClose)),
			ref: t
		})
	});
});
Ya.displayName = Ja;
var Xa = m((e, t) => {
	let { __scopeHoverCard: r, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: o, onInteractOutside: s, ...c } = e, l = Ba(Ja, r), u = Ra(r), d = g(null), f = F(t, d), [p, m] = n(!1);
	return h(() => {
		if (p) {
			let e = document.body;
			return Pa = e.style.userSelect || e.style.webkitUserSelect, e.style.userSelect = "none", e.style.webkitUserSelect = "none", () => {
				e.style.userSelect = Pa, e.style.webkitUserSelect = Pa;
			};
		}
	}, [p]), h(() => {
		if (d.current) {
			let e = () => {
				m(!1), l.isPointerDownOnContentRef.current = !1, setTimeout(() => {
					document.getSelection()?.toString() !== "" && (l.hasSelectionRef.current = !0);
				});
			};
			return document.addEventListener("pointerup", e), () => {
				document.removeEventListener("pointerup", e), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !1;
			};
		}
	}, [l.isPointerDownOnContentRef, l.hasSelectionRef]), h(() => {
		d.current && eo(d.current).forEach((e) => e.setAttribute("tabindex", "-1"));
	}), /* @__PURE__ */ (0, Y.jsx)(W, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onInteractOutside: s,
		onEscapeKeyDown: i,
		onPointerDownOutside: a,
		onFocusOutside: L(o, (e) => {
			e.preventDefault();
		}),
		onDismiss: l.onDismiss,
		children: /* @__PURE__ */ (0, Y.jsx)(_e, {
			...u,
			...c,
			onPointerDown: L(c.onPointerDown, (e) => {
				e.currentTarget.contains(e.target) && m(!0), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !0;
			}),
			ref: f,
			style: {
				...c.style,
				userSelect: p ? "text" : void 0,
				WebkitUserSelect: p ? "text" : void 0,
				"--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
				"--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
				"--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
			}
		})
	});
}), Za = "HoverCardArrow", Qa = m((e, t) => {
	let { __scopeHoverCard: n, ...r } = e, i = Ra(n);
	return /* @__PURE__ */ (0, Y.jsx)(he, {
		...i,
		...r,
		ref: t
	});
});
Qa.displayName = Za;
function $a(e) {
	return (t) => t.pointerType === "touch" ? void 0 : e();
}
function eo(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
var to = Va, no = Ua, ro = qa, io = Ya;
//#endregion
//#region ../shade/es/components/ui/hover-card.js
o();
var ao = to, oo = no, so = m(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, i) => /* @__PURE__ */ (0, Y.jsx)(ro, { children: /* @__PURE__ */ (0, Y.jsx)(z, { children: /* @__PURE__ */ (0, Y.jsx)(io, {
	ref: i,
	align: t,
	className: N("pointer-events-auto z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", e),
	sideOffset: n,
	...r
}) }) }));
//#endregion
//#region ../shade/es/components/ui/no-value-label.js
so.displayName = io.displayName, o();
var co = ({ className: e = "", children: t }) => /* @__PURE__ */ (0, Y.jsx)("div", {
	className: `my-10 flex flex-col items-center gap-1 text-sm text-text-secondary ${e}`,
	children: t
}), lo = ({ className: e = "", children: t }) => /* @__PURE__ */ (0, Y.jsx)("div", {
	className: `text-text-tertiary [&>svg]:size-8 [&>svg]:stroke-[1px] ${e}`,
	children: t
});
//#endregion
//#region src/components/global/back-button.tsx
o();
var uo = ({ className: e, onClick: t }) => {
	let n = me(), { previousPath: r } = te();
	return /* @__PURE__ */ (0, Y.jsx)(U, {
		className: N("size-8 rounded-full bg-white/85 px-2 backdrop-blur-md focus-visible:ring-0 dark:bg-transparent dark:text-white [&_svg]:size-6", e),
		variant: "ghost",
		onClick: () => {
			if (t) {
				t();
				return;
			}
			n(r ? -1 : "/");
		},
		children: /* @__PURE__ */ (0, Y.jsx)(ut, {
			size: 20,
			strokeWidth: 1.25
		})
	});
}, fo = () => {
	let e = x(rc, C().pathname);
	if (!e) return null;
	let t = e.map((e) => e.route).filter((e) => e.pageTitle);
	return t[t.length - 1] || e[e.length - 1].route;
};
//#endregion
//#region src/hooks/use-current-page.ts
function po() {
	let e = v(), t = e.findIndex((e) => e.handle === "activitypub-basepath");
	if (t === -1) return "";
	let n = e[t + 1];
	if (!n) return "";
	let r = e[t].pathname, i = n.pathname, a = i.startsWith(r) ? i.slice(r.length) : i;
	return a = a.replace(/^\//, ""), a.split("/")[0];
}
//#endregion
//#region src/components/layout/header/header.tsx
o();
var mo = ({ title: e, backIcon: t }) => t ? /* @__PURE__ */ (0, Y.jsx)(uo, { className: "-ml-2" }) : /* @__PURE__ */ (0, Y.jsx)(Se, {
	className: "!text-[1.5rem] font-semibold tracking-normal",
	children: e
}), ho = ({ onToggleMobileSidebar: e }) => /* @__PURE__ */ (0, Y.jsx)(U, {
	className: "px:0 mr-[-9px] w-[34px] rounded-full bg-white/85 backdrop-blur-md lg:hidden dark:bg-black/85 dark:text-white",
	variant: "ghost",
	onClick: e,
	children: /* @__PURE__ */ (0, Y.jsx)(St, { className: "size-5!" })
}), go = ({ onToggleMobileSidebar: e, showBorder: t = !0 }) => {
	let { canGoBack: n } = te(), r = po(), i = j(), a = fo(), o = !1;
	r === "profile" && (o = !0), r === "notes" && n && (o = !0);
	let s = n && i || a?.showBackButton === !0;
	return /* @__PURE__ */ (0, Y.jsx)(Y.Fragment, { children: o ? /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: `sticky top-5 left-0 z-50 max-lg:flex max-lg:justify-between max-lg:pr-[15.5px] max-md:top-4 ${r === "profile" ? "block h-0 max-lg:items-start" : "inline-block max-lg:items-center"}`,
		children: [/* @__PURE__ */ (0, Y.jsx)("div", { children: s && /* @__PURE__ */ (0, Y.jsx)(uo, { className: "ml-6 max-md:ml-[10px]" }) }), !s && /* @__PURE__ */ (0, Y.jsx)(ho, { onToggleMobileSidebar: e })]
	}) : /* @__PURE__ */ (0, Y.jsx)("div", {
		className: "sticky top-0 z-50 bg-white/85 backdrop-blur-md dark:bg-background",
		"data-network-header": "header",
		children: /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: `relative flex h-[72px] items-center justify-between gap-5 px-[min(4vw,24px)] max-md:h-[68px] ${t ? "before:absolute before:inset-x-[min(4vw,24px)] before:bottom-0 before:block before:border-b before:border-gray-200 before:content-[\"\"] dark:before:border-gray-950" : ""}`,
			children: [/* @__PURE__ */ (0, Y.jsx)(mo, {
				backIcon: s,
				title: a?.pageTitle || ""
			}), /* @__PURE__ */ (0, Y.jsx)(ho, { onToggleMobileSidebar: e })]
		})
	}) });
};
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-form@0.1.11_@types+react-dom@18.3.7_@types+react@18.3.31__@types+react@_f82e31d0dd301bb9df24fd3128bc88e8/node_modules/@radix-ui/react-form/dist/index.mjs
o();
var [_o, vo] = ee("Form"), yo = "Form", [bo, xo] = _o(yo), [So, Co] = _o(yo), wo = m((e, t) => {
	let { __scopeForm: r, onClearServerErrors: i = () => {}, ...a } = e, o = F(t, g(null)), [c, l] = n({}), u = s((e) => c[e], [c]), d = s((e, t) => l((n) => ({
		...n,
		[e]: {
			...n[e] ?? {},
			...t
		}
	})), []), f = s((e) => {
		l((t) => ({
			...t,
			[e]: void 0
		})), b((t) => ({
			...t,
			[e]: {}
		}));
	}, []), [p, m] = n({}), h = s((e) => p[e] ?? [], [p]), _ = s((e, t) => {
		m((n) => ({
			...n,
			[e]: [...n[e] ?? [], t]
		}));
	}, []), v = s((e, t) => {
		m((n) => ({
			...n,
			[e]: (n[e] ?? []).filter((e) => e.id !== t)
		}));
	}, []), [y, b] = n({}), x = s((e) => y[e] ?? {}, [y]), S = s((e, t) => {
		b((n) => ({
			...n,
			[e]: {
				...n[e] ?? {},
				...t
			}
		}));
	}, []), [C, w] = n({});
	return /* @__PURE__ */ (0, Y.jsx)(bo, {
		scope: r,
		getFieldValidity: u,
		onFieldValidityChange: d,
		getFieldCustomMatcherEntries: h,
		onFieldCustomMatcherEntryAdd: _,
		onFieldCustomMatcherEntryRemove: v,
		getFieldCustomErrors: x,
		onFieldCustomErrorsChange: S,
		onFieldValiditionClear: f,
		children: /* @__PURE__ */ (0, Y.jsx)(So, {
			scope: r,
			onFieldMessageIdAdd: s((e, t) => {
				w((n) => {
					let r = new Set(n[e]).add(t);
					return {
						...n,
						[e]: r
					};
				});
			}, []),
			onFieldMessageIdRemove: s((e, t) => {
				w((n) => {
					let r = new Set(n[e]);
					return r.delete(t), {
						...n,
						[e]: r
					};
				});
			}, []),
			getFieldDescription: s((e) => Array.from(C[e] ?? []).join(" ") || void 0, [C]),
			children: /* @__PURE__ */ (0, Y.jsx)(I.form, {
				...a,
				ref: o,
				onInvalid: L(e.onInvalid, (e) => {
					let t = Jo(e.currentTarget);
					t === e.target && t.focus(), e.preventDefault();
				}),
				onSubmit: L(e.onSubmit, i, { checkForDefaultPrevented: !1 }),
				onReset: L(e.onReset, i)
			})
		})
	});
});
wo.displayName = yo;
var To = "FormField", [Eo, Do] = _o(To), Oo = m((e, t) => {
	let { __scopeForm: n, name: r, serverInvalid: i = !1, ...a } = e, o = xo(To, n).getFieldValidity(r);
	return /* @__PURE__ */ (0, Y.jsx)(Eo, {
		scope: n,
		id: k(),
		name: r,
		serverInvalid: i,
		children: /* @__PURE__ */ (0, Y.jsx)(I.div, {
			"data-valid": $o(o, i),
			"data-invalid": es(o, i),
			...a,
			ref: t
		})
	});
});
Oo.displayName = To;
var ko = "FormLabel", Ao = m((e, t) => {
	let { __scopeForm: n, ...r } = e, i = xo(ko, n), a = Do(ko, n), o = r.htmlFor || a.id, s = i.getFieldValidity(a.name);
	return /* @__PURE__ */ (0, Y.jsx)(Ma, {
		"data-valid": $o(s, a.serverInvalid),
		"data-invalid": es(s, a.serverInvalid),
		...r,
		ref: t,
		htmlFor: o
	});
});
Ao.displayName = ko;
var jo = "FormControl", Mo = m((e, t) => {
	let { __scopeForm: n, ...r } = e, i = xo(jo, n), a = Do(jo, n), o = Co(jo, n), c = g(null), l = F(t, c), u = r.name || a.name, d = r.id || a.id, f = i.getFieldCustomMatcherEntries(u), { onFieldValidityChange: p, onFieldCustomErrorsChange: m, onFieldValiditionClear: _ } = i, v = s(async (e) => {
		if (Qo(e.validity)) {
			let t = Wo(e.validity);
			p(u, t);
			return;
		}
		let t = e.form ? new FormData(e.form) : new FormData(), n = [e.value, t], r = [], i = [];
		f.forEach((e) => {
			Yo(e, n) ? i.push(e) : Xo(e) && r.push(e);
		});
		let a = r.map(({ id: e, match: t }) => [e, t(...n)]), o = Object.fromEntries(a), s = Object.values(o).some(Boolean), c = s;
		e.setCustomValidity(c ? No : "");
		let l = Wo(e.validity);
		if (p(u, l), m(u, o), !s && i.length > 0) {
			let t = i.map(({ id: e, match: t }) => t(...n).then((t) => [e, t])), r = await Promise.all(t), a = Object.fromEntries(r), o = Object.values(a).some(Boolean);
			e.setCustomValidity(o ? No : "");
			let s = Wo(e.validity);
			p(u, s), m(u, a);
		}
	}, [
		f,
		u,
		m,
		p
	]);
	h(() => {
		let e = c.current;
		if (e) {
			let t = () => v(e);
			return e.addEventListener("change", t), () => e.removeEventListener("change", t);
		}
	}, [v]);
	let y = s(() => {
		let e = c.current;
		e && (e.setCustomValidity(""), _(u));
	}, [u, _]);
	h(() => {
		let e = c.current?.form;
		if (e) return e.addEventListener("reset", y), () => e.removeEventListener("reset", y);
	}, [y]), h(() => {
		let e = c.current, t = e?.closest("form");
		if (t && a.serverInvalid) {
			let n = Jo(t);
			n === e && n.focus();
		}
	}, [a.serverInvalid]);
	let b = i.getFieldValidity(u);
	return /* @__PURE__ */ (0, Y.jsx)(I.input, {
		"data-valid": $o(b, a.serverInvalid),
		"data-invalid": es(b, a.serverInvalid),
		"aria-invalid": a.serverInvalid ? !0 : void 0,
		"aria-describedby": o.getFieldDescription(u),
		title: "",
		...r,
		ref: l,
		id: d,
		name: u,
		onInvalid: L(e.onInvalid, (e) => {
			let t = e.currentTarget;
			v(t);
		}),
		onChange: L(e.onChange, (e) => {
			y();
		})
	});
});
Mo.displayName = jo;
var No = "This value is not valid", Po = {
	badInput: No,
	patternMismatch: "This value does not match the required pattern",
	rangeOverflow: "This value is too large",
	rangeUnderflow: "This value is too small",
	stepMismatch: "This value does not match the required step",
	tooLong: "This value is too long",
	tooShort: "This value is too short",
	typeMismatch: "This value does not match the required type",
	valid: void 0,
	valueMissing: "This value is missing"
}, Fo = "FormMessage", Io = m((e, t) => {
	let { match: n, name: r, ...i } = e, a = Do(Fo, e.__scopeForm), o = r ?? a.name;
	return n === void 0 ? /* @__PURE__ */ (0, Y.jsx)(zo, {
		...i,
		ref: t,
		name: o,
		children: e.children || No
	}) : typeof n == "function" ? /* @__PURE__ */ (0, Y.jsx)(Ro, {
		match: n,
		...i,
		ref: t,
		name: o
	}) : /* @__PURE__ */ (0, Y.jsx)(Lo, {
		match: n,
		...i,
		ref: t,
		name: o
	});
});
Io.displayName = Fo;
var Lo = m((e, t) => {
	let { match: n, forceMatch: r = !1, name: i, children: a, ...o } = e, s = xo(Fo, o.__scopeForm).getFieldValidity(i);
	return r || s?.[n] ? /* @__PURE__ */ (0, Y.jsx)(zo, {
		ref: t,
		...o,
		name: i,
		children: a ?? Po[n]
	}) : null;
}), Ro = m((e, n) => {
	let { match: r, forceMatch: i = !1, name: a, id: o, children: s, ...c } = e, l = xo(Fo, c.__scopeForm), u = F(n, g(null)), d = k(), f = o ?? d, p = t(() => ({
		id: f,
		match: r
	}), [f, r]), { onFieldCustomMatcherEntryAdd: m, onFieldCustomMatcherEntryRemove: _ } = l;
	h(() => (m(a, p), () => _(a, p.id)), [
		p,
		a,
		m,
		_
	]);
	let v = l.getFieldValidity(a), y = l.getFieldCustomErrors(a)[f];
	return i || v && !Qo(v) && y ? /* @__PURE__ */ (0, Y.jsx)(zo, {
		id: f,
		ref: u,
		...c,
		name: a,
		children: s ?? No
	}) : null;
}), zo = m((e, t) => {
	let { __scopeForm: n, id: r, name: i, ...a } = e, o = Co(Fo, n), s = k(), c = r ?? s, { onFieldMessageIdAdd: l, onFieldMessageIdRemove: u } = o;
	return h(() => (l(i, c), () => u(i, c)), [
		i,
		c,
		l,
		u
	]), /* @__PURE__ */ (0, Y.jsx)(I.span, {
		id: c,
		...a,
		ref: t
	});
}), Bo = "FormValidityState", Vo = (e) => {
	let { __scopeForm: t, name: n, children: r } = e, i = xo(Bo, t), a = Do(Bo, t), o = n ?? a.name;
	return /* @__PURE__ */ (0, Y.jsx)(Y.Fragment, { children: r(i.getFieldValidity(o)) });
};
Vo.displayName = Bo;
var Ho = "FormSubmit", Uo = m((e, t) => {
	let { __scopeForm: n, ...r } = e;
	return /* @__PURE__ */ (0, Y.jsx)(I.button, {
		type: "submit",
		...r,
		ref: t
	});
});
Uo.displayName = Ho;
function Wo(e) {
	let t = {};
	for (let n in e) t[n] = e[n];
	return t;
}
function Go(e) {
	return e instanceof HTMLElement;
}
function Ko(e) {
	return "validity" in e;
}
function qo(e) {
	return Ko(e) && (e.validity.valid === !1 || e.getAttribute("aria-invalid") === "true");
}
function Jo(e) {
	let t = e.elements, [n] = Array.from(t).filter(Go).filter(qo);
	return n;
}
function Yo(e, t) {
	return e.match.constructor.name === "AsyncFunction" || Zo(e.match, t);
}
function Xo(e) {
	return e.match.constructor.name === "Function";
}
function Zo(e, t) {
	return e(...t) instanceof Promise;
}
function Qo(e) {
	let t = !1;
	for (let n in e) {
		let r = n;
		if (r !== "valid" && r !== "customError" && e[r]) {
			t = !0;
			break;
		}
	}
	return t;
}
function $o(e, t) {
	if (e?.valid === !0 && !t) return !0;
}
function es(e, t) {
	if (e?.valid === !1 || t) return !0;
}
var ts = wo, ns = Oo, rs = Mo, is = ({ trigger: e, onCopyLink: t, onDelete: n, allowDelete: r = !1, disabled: i = !1, layout: a, followedByMe: o = !1, authoredByMe: s = !1, onFollow: c = () => {}, onUnfollow: l = () => {} }) => /* @__PURE__ */ (0, Y.jsxs)(ma, { children: [/* @__PURE__ */ (0, Y.jsxs)(Ni, { children: [/* @__PURE__ */ (0, Y.jsx)(Pi, {
	disabled: i,
	asChild: !0,
	onClick: (e) => e.stopPropagation(),
	children: e
}), /* @__PURE__ */ (0, Y.jsx)(Ii, {
	align: `${a === "modal" ? "start" : "end"}`,
	alignOffset: a === "modal" ? -12 : 0,
	className: "p-2",
	children: /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "flex w-48 flex-col",
		children: [
			(!r || a === "inbox") && /* @__PURE__ */ (0, Y.jsx)(Fi, {
				asChild: !0,
				children: /* @__PURE__ */ (0, Y.jsxs)(U, {
					className: "justify-start rounded-menu-item",
					shape: "rounded",
					variant: "ghost",
					onClick: (e) => {
						e.stopPropagation(), t();
					},
					children: [/* @__PURE__ */ (0, Y.jsx)(xt, {}), "Copy link"]
				})
			}),
			!s && /* @__PURE__ */ (0, Y.jsx)(Fi, {
				asChild: !0,
				children: /* @__PURE__ */ (0, Y.jsxs)(U, {
					className: "justify-start rounded-menu-item",
					shape: "rounded",
					variant: "ghost",
					onClick: (e) => {
						e.stopPropagation(), o ? l() : c();
					},
					children: [o ? /* @__PURE__ */ (0, Y.jsx)(Mt, {}) : /* @__PURE__ */ (0, Y.jsx)(Nt, {}), o ? "Unfollow" : "Follow"]
				})
			}),
			r && /* @__PURE__ */ (0, Y.jsx)(ha, {
				asChild: !0,
				children: /* @__PURE__ */ (0, Y.jsx)(Fi, {
					asChild: !0,
					children: /* @__PURE__ */ (0, Y.jsxs)(U, {
						className: "justify-start rounded-menu-item text-red hover:bg-red/5 hover:text-red",
						shape: "rounded",
						variant: "ghost",
						onClick: (e) => e.stopPropagation(),
						children: [/* @__PURE__ */ (0, Y.jsx)(At, {}), "Delete"]
					})
				})
			})
		]
	})
})] }), /* @__PURE__ */ (0, Y.jsxs)(va, {
	onClick: (e) => e.stopPropagation(),
	children: [/* @__PURE__ */ (0, Y.jsxs)(ya, { children: [/* @__PURE__ */ (0, Y.jsx)(xa, { children: "Delete this post?" }), /* @__PURE__ */ (0, Y.jsx)(Sa, { children: a === "inbox" ? "This will remove the post from the Ghost social web, but it will remain on your website." : /* @__PURE__ */ (0, Y.jsx)(Y.Fragment, { children: "If you delete this post, you won't be able to restore it." }) })] }), /* @__PURE__ */ (0, Y.jsxs)(ba, { children: [/* @__PURE__ */ (0, Y.jsx)(wa, {
		onClick: (e) => e.stopPropagation(),
		children: "Cancel"
	}), /* @__PURE__ */ (0, Y.jsx)(Ca, {
		variant: "destructive",
		onClick: (e) => {
			e.stopPropagation(), n();
		},
		children: "Delete"
	})] })]
})] });
//#endregion
//#region src/components/global/image-lightbox.tsx
o();
function as(e) {
	let [t, r] = n({
		images: [],
		currentIndex: 0,
		isOpen: !1
	}), i = (e) => {
		let t = xs(e);
		if (!t) return [];
		if (Array.isArray(t)) return t.map((e, t) => ({
			url: e.url,
			alt: e.name || `Image-${t}`
		}));
		if (t.mediaType?.startsWith("image/") || t.type === "Image") return [{
			url: t.url,
			alt: t.name || "Image"
		}];
		if (e.image) {
			let t;
			if (t = typeof e.image == "string" ? e.image : e.image?.url, t) return [{
				url: t,
				alt: "Image"
			}];
		}
		return [];
	};
	return {
		lightboxState: t,
		openLightbox: (t) => {
			if (!e) return;
			let n = i(e), a = n.findIndex((e) => e.url === t);
			a !== -1 && r({
				images: n,
				currentIndex: a,
				isOpen: !0
			});
		},
		closeLightbox: () => {
			r((e) => ({
				...e,
				isOpen: !1
			}));
		},
		navigateToIndex: (e) => {
			r((t) => ({
				...t,
				currentIndex: e
			}));
		}
	};
}
var os = ({ images: e, currentIndex: t, isOpen: n, onClose: r, onNavigate: i }) => {
	let a = t === 0, o = t === e.length - 1, c = s(() => {
		e.length <= 1 || o || i((t + 1) % e.length);
	}, [
		e.length,
		o,
		t,
		i
	]), l = s(() => {
		e.length <= 1 || a || i((t - 1 + e.length) % e.length);
	}, [
		e.length,
		a,
		t,
		i
	]);
	return h(() => {
		let e = (e) => {
			n && (e.key === "ArrowRight" && !o ? c() : e.key === "ArrowLeft" && !a && l());
		};
		return window.addEventListener("keydown", e), () => {
			window.removeEventListener("keydown", e);
		};
	}, [
		n,
		t,
		e.length,
		c,
		l,
		o,
		a
	]), !n || e.length === 0 ? null : /* @__PURE__ */ (0, Y.jsx)(Kr, {
		open: n,
		onOpenChange: (e) => {
			e || r();
		},
		children: /* @__PURE__ */ (0, Y.jsxs)(Zr, {
			className: "top-[50%] h-[100vh] max-h-[100vh] w-[100vw] max-w-[100vw] translate-y-[-50%] items-center border-none bg-transparent p-0 shadow-none data-[state=closed]:zoom-out-100 data-[state=closed]:slide-out-to-top-[50%] data-[state=open]:zoom-in-100 data-[state=open]:slide-in-from-top-[50%]",
			onClick: () => r(),
			children: [
				/* @__PURE__ */ (0, Y.jsx)("img", {
					alt: e[t].alt,
					className: "mx-auto max-h-[90vh] max-w-[90vw] object-contain",
					src: e[t].url,
					onClick: (e) => e.stopPropagation()
				}),
				e.length > 1 && /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsxs)(U, {
					className: "absolute top-1/2 left-5 size-11 -translate-y-1/2 rounded-full bg-black/50 p-0 pr-0.5 hover:bg-black/70",
					disabled: a,
					onClick: (e) => {
						e.stopPropagation(), l();
					},
					children: [/* @__PURE__ */ (0, Y.jsx)(pt, { className: "size-6!" }), /* @__PURE__ */ (0, Y.jsx)("span", {
						className: "sr-only",
						children: "Previous image"
					})]
				}), /* @__PURE__ */ (0, Y.jsxs)(U, {
					className: "absolute top-1/2 right-5 size-11 -translate-y-1/2 rounded-full bg-black/50 p-0 pl-0.5 hover:bg-black/70",
					disabled: o,
					onClick: (e) => {
						e.stopPropagation(), c();
					},
					children: [/* @__PURE__ */ (0, Y.jsx)(mt, { className: "size-6!" }), /* @__PURE__ */ (0, Y.jsx)("span", {
						className: "sr-only",
						children: "Next image"
					})]
				})] }),
				/* @__PURE__ */ (0, Y.jsx)(Yr, {
					asChild: !0,
					children: /* @__PURE__ */ (0, Y.jsxs)(U, {
						className: "absolute top-5 right-5 size-11 rounded-full bg-black/50 p-0 hover:bg-black/70",
						children: [/* @__PURE__ */ (0, Y.jsx)(Ue, { className: "size-5!" }), /* @__PURE__ */ (0, Y.jsx)("span", {
							className: "sr-only",
							children: "Close"
						})]
					})
				})
			]
		})
	});
};
//#endregion
//#region src/components/global/follow-button.tsx
o();
var ss = () => {}, cs = ({ className: e, following: t, handle: r, variant: i = "default", onFollow: a = ss, onUnfollow: o = ss, "data-testid": s }) => {
	let [c, l] = n(t), u = De("index", () => {}, () => {
		l(!0);
	}), d = Le("index", () => {}, () => {
		l(!1);
	}), f = async () => {
		c ? (l(!1), o(), u.mutate(r)) : (l(!0), a(), d.mutate(r));
	};
	h(() => {
		l(t);
	}, [t]);
	let p = c ? "Following" : "Follow";
	return i === "link" ? /* @__PURE__ */ (0, Y.jsx)(U, {
		className: R("p-0 font-medium", c ? "text-gray-700 hover:text-black dark:text-gray-600 dark:hover:text-white" : "text-purple hover:text-black dark:hover:text-white", e),
		"data-testid": s,
		variant: "link",
		onClick: (e) => {
			e?.preventDefault(), e?.stopPropagation(), f();
		},
		children: p
	}) : /* @__PURE__ */ (0, Y.jsx)(U, {
		className: R("min-w-[90px]", e),
		"data-testid": s,
		title: c ? "Click to unfollow" : "",
		variant: c ? "outline" : "default",
		onClick: (e) => {
			e?.preventDefault(), e?.stopPropagation(), f();
		},
		children: p
	});
};
//#endregion
//#region src/components/global/profile-preview-hover-card.tsx
o();
var ls = (e) => "preferredUsername" in e, us = ({ actor: e, children: t, disabled: r = !1, side: i = "bottom", align: a = "start", isCurrentUser: o = !1 }) => {
	let [s, c] = n(!1), l = me(), u = e?.handle;
	!u && e && ls(e) && (u = qe(e));
	let d = r || !u && !e, f = je("index", u || "", { enabled: s && !!u }), p = f.isFetching || f.isLoading, m = f.error, g = f.data ? typeof f.data.followerCount == "number" && typeof f.data.followingCount == "number" && f.data.bio !== void 0 : !1;
	if (h(() => {
		!s || !u || !g && !p && !m && f.refetch({ cancelRefetch: !1 });
	}, [
		f,
		p,
		m,
		g,
		s,
		u
	]), d) return /* @__PURE__ */ (0, Y.jsx)(Y.Fragment, { children: t });
	let _ = f.data || e, v = _?.handle ?? u ?? "", y = _?.name ?? "", b = _?.avatarUrl ?? (e && ls(e) ? e.icon?.url : null) ?? null, x = !!_?.followsMe, S = typeof _?.followingCount == "number" ? _.followingCount : Number(_?.followingCount) || 0, C = typeof _?.followerCount == "number" ? _.followerCount : Number(_?.followerCount) || 0, w = _?.bio ? Ke(Ye(_.bio, ["a"])) : void 0, T = () => {
		v && l(`/profile/${v}`);
	};
	return /* @__PURE__ */ (0, Y.jsxs)(ao, {
		onOpenChange: c,
		children: [/* @__PURE__ */ (0, Y.jsx)(oo, {
			asChild: !0,
			children: t
		}), /* @__PURE__ */ (0, Y.jsx)(so, {
			align: a,
			className: "w-[320px] cursor-default rounded-2xl border-0 p-5 text-left text-gray-900 shadow-lg outline-hidden dark:bg-surface-elevated-2",
			side: i,
			sideOffset: 12,
			onClick: (e) => e.stopPropagation(),
			children: /* @__PURE__ */ (0, Y.jsxs)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, Y.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, Y.jsxs)(et, {
								className: "size-14 cursor-pointer",
								onClick: T,
								children: [b && /* @__PURE__ */ (0, Y.jsx)($e, {
									alt: y,
									className: "rounded-full outline-[0.5px] outline-offset-[-0.5px] outline-black/10",
									src: b,
									onError: (e) => {
										e.target.src = "", e.target.style.display = "none";
									}
								}), /* @__PURE__ */ (0, Y.jsx)(Qe, {
									className: "bg-gray-200 text-sm font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-200",
									children: /* @__PURE__ */ (0, Y.jsx)(Ge, {
										className: "size-5 text-gray-500 dark:text-gray-400",
										strokeWidth: 1.5
									})
								})]
							}), !o && /* @__PURE__ */ (0, Y.jsx)(cs, {
								following: !!_?.followedByMe,
								handle: v,
								type: "primary"
							})]
						}), /* @__PURE__ */ (0, Y.jsxs)("div", {
							className: "flex cursor-pointer flex-col items-start",
							onClick: T,
							children: [/* @__PURE__ */ (0, Y.jsx)(Ae, {
								className: "w-full truncate",
								children: y
							}), /* @__PURE__ */ (0, Y.jsxs)("div", {
								className: "flex w-full gap-2",
								children: [/* @__PURE__ */ (0, Y.jsx)("span", {
									className: "truncate text-gray-700 dark:text-gray-600",
									children: v
								}), x && !o && /* @__PURE__ */ (0, Y.jsx)(Aa, {
									className: "mt-px whitespace-nowrap",
									variant: "secondary",
									children: "Follows you"
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, Y.jsx)("div", {
						className: "flex gap-3 dark:text-gray-300",
						children: p ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "h-4 w-32" }) : !m && /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsxs)("span", {
							className: "cursor-pointer hover:underline",
							onClick: () => {
								v && l(`/profile/${v}/following`);
							},
							children: [
								/* @__PURE__ */ (0, Y.jsx)("span", {
									className: "font-bold text-black dark:text-white",
									children: pe(S)
								}),
								" ",
								"Following"
							]
						}), /* @__PURE__ */ (0, Y.jsxs)("span", {
							className: "cursor-pointer hover:underline",
							onClick: () => {
								v && l(`/profile/${v}/followers`);
							},
							children: [
								/* @__PURE__ */ (0, Y.jsx)("span", {
									className: "font-bold text-black dark:text-white",
									children: pe(C)
								}),
								" ",
								"Followers"
							]
						})] })
					}),
					p ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "h-4 w-48" }) : !m && w ? /* @__PURE__ */ (0, Y.jsx)("div", {
						dangerouslySetInnerHTML: { __html: Je(w) },
						className: "leading-tight dark:text-gray-300 [&_.invisible]:hidden [&_a]:text-[#00a4eb] [&_a:hover]:underline"
					}) : null
				]
			})
		})]
	});
};
//#endregion
//#region src/hooks/use-keyboard-shortcuts.tsx
o();
var ds = (e = {}) => {
	let [t, r] = n(!1), i = C();
	return h(() => {
		let t = (t) => {
			if (t.target instanceof HTMLInputElement || t.target instanceof HTMLTextAreaElement || t.target instanceof HTMLElement && t.target.isContentEditable || t.target instanceof HTMLSelectElement || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey) return;
			let n = document.querySelector("[role=\"dialog\"][data-state=\"open\"]");
			if (!(n && (e.componentRef?.current)?.closest("[role=\"dialog\"]") !== n)) switch (t.key.toLowerCase()) {
				case "n":
					n || (t.preventDefault(), e.onOpenNewNote ? e.onOpenNewNote() : r(!0));
					break;
				case "r":
					e.isReplyAvailable && e.onOpenReply && (i.pathname.includes("/notes/") || i.pathname.includes("/reader/")) && (t.preventDefault(), e.onOpenReply());
					break;
			}
		};
		return document.addEventListener("keydown", t), () => document.removeEventListener("keydown", t);
	}, [e, i.pathname]), {
		isNewNoteModalOpen: t,
		setIsNewNoteModalOpen: r
	};
};
//#endregion
//#region src/components/feed/feed-item-stats.tsx
o();
var fs = ({ actor: e, object: t, likeCount: r, commentCount: i, repostCount: a, layout: o, disabled: s = !1, buttonClassName: c = "", onLikeClick: l, onCommentClick: u, onReplyCountChange: d }) => {
	let [f, p] = n(t.liked), [m, _] = n(t.reposted), [v, y] = n(!1), b = g(null);
	ds({
		isReplyAvailable: !u && o !== "reply",
		onOpenReply: () => y(!0),
		componentRef: b
	}), h(() => {
		p(t.liked), _(t.reposted);
	}, [t.liked, t.reposted]), h(() => {
		E(a);
	}, [a]);
	let x = Ie("index"), S = Re("index"), C = Ne("index"), w = Pe("index"), [T, E] = n(a), D = async (e) => {
		e.stopPropagation(), f ? S.mutate(t.id) : x.mutate(t.id, { onError() {
			p(!1);
		} }), p(!f), l();
	}, O = (e) => {
		e.stopPropagation(), u ? u() : y(!0);
	}, k = `px-2 gap-1.5 font-normal text-md [&_svg]:size-[18px] transition-color ap-action-button text-gray-900 hover:text-gray-900 hover:bg-black/[3%] dark:hover:bg-gray-950 dark:text-gray-600 ${o === "inbox" ? "rounded-md" : ""} ${c}`;
	return /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
		ref: b,
		className: `flex ${o !== "inbox" && "gap-1"}`,
		children: [
			/* @__PURE__ */ (0, Y.jsxs)(U, {
				className: `${k} ${f && "text-pink-500 hover:text-pink-500"}`,
				"data-testid": "like-button",
				disabled: s,
				id: "like",
				title: `${f ? "Undo like" : "Like"}`,
				variant: "ghost",
				onClick: (e) => {
					e?.stopPropagation(), e && D(e);
				},
				children: [/* @__PURE__ */ (0, Y.jsx)(Xe, { className: `${f && "fill-pink-500 text-pink-500"}` }), o !== "inbox" && /* @__PURE__ */ (0, Y.jsx)(Oa, {
					className: r === 0 ? "-ml-1.5 w-0 overflow-hidden" : "",
					spinTiming: { duration: 300 },
					value: r
				})]
			}),
			/* @__PURE__ */ (0, Y.jsxs)(U, {
				className: `${k}`,
				"data-testid": "reply-button",
				disabled: s,
				id: "comment",
				title: "Reply",
				variant: "ghost",
				onClick: O,
				children: [/* @__PURE__ */ (0, Y.jsx)(Ct, { className: "-mr-px" }), o !== "inbox" && i > 0 && ae(i)]
			}),
			/* @__PURE__ */ (0, Y.jsxs)(U, {
				className: `${k} ${m && "text-green-500 hover:text-green-500"}`,
				"data-testid": "repost-button",
				disabled: s,
				id: "repost",
				title: `${m ? "Undo repost" : "Repost"}`,
				variant: "ghost",
				onClick: (e) => {
					e?.stopPropagation(), m ? (w.mutate(t.id), E(T - 1)) : (C.mutate(t.id, { onError() {
						_(!1), E(T - 1);
					} }), E(T + 1)), _(!m);
				},
				children: [/* @__PURE__ */ (0, Y.jsx)(Et, { className: `${m && "text-green-500"}` }), o !== "inbox" && /* @__PURE__ */ (0, Y.jsx)(Oa, {
					className: T === 0 ? "-ml-1.5 w-0 overflow-hidden" : "",
					spinTiming: { duration: 300 },
					value: T
				})]
			})
		]
	}), v && /* @__PURE__ */ (0, Y.jsx)(Fs, {
		open: v,
		replyTo: {
			object: t,
			actor: e
		},
		onOpenChange: (e) => {
			y(e);
		},
		onReply: () => {
			d?.(1), y(!1);
		},
		onReplyError: () => {
			d?.(-1);
		}
	})] });
};
//#endregion
//#region src/utils/get-reading-time.ts
function ps(e) {
	let t = e.replace(/<[^>]*>/g, "").split(/\s+/).filter((e) => e.length > 0).length;
	return `${Math.ceil(t / 275)} min read`;
}
//#endregion
//#region src/utils/handle-profile-click.ts
var ms = (e, t, n) => {
	n?.stopPropagation(), t(typeof e == "string" ? `/profile/${e}` : `/profile/${qe(e)}`);
}, hs = (e) => {
	let t = /* @__PURE__ */ new Date(), n = (e) => new Date(e.getFullYear(), e.getMonth(), e.getDate()), r = n(t), i = n(/* @__PURE__ */ new Date(t.getTime() - 1440 * 60 * 1e3)), a = n(e);
	return a.getTime() === r.getTime() ? gs(e) : a.getTime() === i.getTime() ? "Yesterday" : _s(e);
}, gs = (e) => {
	let t = Math.floor(((/* @__PURE__ */ new Date()).getTime() - e.getTime()) / 1e3);
	if (t < 1) return "Just now";
	if (t < 60) return `${t}s`;
	let n = Math.floor(t / 60);
	return n < 60 ? `${n}m` : `${Math.floor(n / 60)}h`;
}, _s = (e) => {
	let t = /* @__PURE__ */ new Date(), n = e.getDate(), r = e.toLocaleString("default", { month: "short" });
	return e.getFullYear() === t.getFullYear() ? `${n} ${r}` : `${n} ${r} ${e.getFullYear()}`;
};
//#endregion
//#region src/utils/render-timestamp.tsx
function vs(e) {
	return new Date(e).toLocaleDateString("default", {
		year: "numeric",
		month: "short",
		day: "2-digit"
	}) + ", " + new Date(e).toLocaleTimeString("default", {
		hour: "2-digit",
		minute: "2-digit"
	});
}
function ys(e, t = !0) {
	let n = new Date(e?.published ?? e?.createdAt ?? /* @__PURE__ */ new Date()), r = vs(n), i = hs(n);
	return t && !e.url?.includes("/.ghost/activitypub") ? /* @__PURE__ */ (0, Y.jsx)("a", {
		className: "whitespace-nowrap text-gray-700 hover:underline",
		href: e.url,
		rel: "noreferrer",
		target: "_blank",
		title: r,
		onClick: (e) => e.stopPropagation(),
		children: i
	}) : /* @__PURE__ */ (0, Y.jsx)("span", {
		className: "whitespace-nowrap text-gray-700",
		children: i
	});
}
//#endregion
//#region src/hooks/use-sensitive-media-disclosure.ts
o();
function bs({ contentWarning: e, sensitive: t, hasMedia: r, resetKey: i }) {
	let { data: a } = be(), o = a?.showSensitiveMedia ?? !1, [s, c] = n(!1), [l, u] = n(!1), [d, f] = n(!1), [p, m] = n(!0), [v, y] = n(void 0), b = g(null);
	h(() => {
		c(!1), u(!1), f(!1), m(!0), y(void 0);
	}, [i]), _(() => {
		!d || !p || (m(!1), y(void 0));
	}, [d, p]);
	let x = e?.trim() || null, S = x !== null, C = t === !0 && r && !S && !o, w = C && (l || !s);
	return {
		contentWarning: x,
		shouldHideContentWarning: S && !d,
		shouldHideSensitiveMedia: w,
		canHideSensitiveMedia: C && !w,
		isContentWarningRevealed: d,
		showContentWarningOverlay: p,
		contentWarningMinHeight: v,
		contentWarningWrapperRef: b,
		revealSensitiveMedia: (e) => {
			e.stopPropagation(), u(!1), c(!0);
		},
		hideSensitiveMedia: (e) => {
			e.stopPropagation(), u(!0), c(!1);
		},
		revealContentWarning: (e) => {
			e.stopPropagation();
			let t = b.current?.offsetHeight;
			t && y(t), f(!0);
		}
	};
}
//#endregion
//#region src/components/feed/feed-item.tsx
o();
function xs(e) {
	let t;
	if (e.image && (t = typeof e.image == "string" ? {
		type: "Image",
		url: e.image
	} : {
		type: e.image.type ?? "Image",
		mediaType: e.image.mediaType,
		url: e.image.url
	}), e.type === "Note" && !t && (t = e.attachment), !t) return null;
	if (Array.isArray(t)) {
		if (t.length === 0) return null;
		if (t.length === 1) return t[0];
	}
	return t;
}
function Ss(e, t, n, r) {
	let i = xs(e);
	if (!i) return null;
	let a = (e) => (n) => {
		n.stopPropagation(), t && t(e);
	}, o = (e) => {
		r && r(e);
	}, s = (e, t = !1) => /* @__PURE__ */ (0, Y.jsx)("div", {
		className: `${e} ${t ? "min-h-[200px]" : ""} flex w-full items-center justify-center bg-gray-100 dark:bg-gray-950/30`,
		children: /* @__PURE__ */ (0, Y.jsx)(yt, {
			className: "text-gray-400",
			size: 24,
			strokeWidth: 1.5
		})
	});
	if (Array.isArray(i)) {
		let e = i.length, r = "";
		return e === 1 ? r = "grid-cols-1" : e >= 2 && e <= 4 ? r = "grid-cols-2 auto-rows-[150px]" : e > 4 && (r = "grid-cols-3 auto-rows-[150px]"), /* @__PURE__ */ (0, Y.jsx)("div", {
			className: `attachment-gallery mt-3 grid w-full ${r} gap-2`,
			children: i.map((r, i) => {
				let c = `size-full rounded-md outline-1 -outline-offset-1 outline-black/10 ${e === 3 && i === 0 ? "row-span-2" : ""}`;
				return n && n.has(r.url) ? s(c, e === 1) : /* @__PURE__ */ (0, Y.jsx)("img", {
					alt: r.name || `Image-${i}`,
					className: `${c} cursor-pointer object-cover`,
					referrerPolicy: "no-referrer",
					src: r.url,
					onClick: t ? a(r.url) : void 0,
					onError: () => o(r.url)
				}, r.url);
			})
		});
	}
	switch (i.mediaType) {
		case "image/jpeg":
		case "image/png":
		case "image/gif":
		case "image/webp": return n && n.has(i.url) ? s(`${e.type === "Article" ? "w-full rounded-t-md" : "mt-3 max-h-[420px] rounded-md outline-1 -outline-offset-1 outline-black/10"}`, !0) : /* @__PURE__ */ (0, Y.jsx)("img", {
			alt: i.name || "Image",
			className: `cursor-pointer ${e.type === "Article" ? "w-full rounded-t-md" : "mt-3 max-h-[420px] rounded-md outline-1 -outline-offset-1 outline-black/10"}`,
			referrerPolicy: "no-referrer",
			src: i.url,
			onClick: t ? a(i.url) : void 0,
			onError: () => o(i.url)
		});
		case "video/mp4":
		case "video/webm": return /* @__PURE__ */ (0, Y.jsx)("div", {
			className: "relative mt-3 mb-4",
			children: /* @__PURE__ */ (0, Y.jsx)("video", {
				className: "h-[300px] w-full rounded object-cover",
				src: i.url,
				controls: !0
			})
		});
		case "audio/mpeg":
		case "audio/ogg": return /* @__PURE__ */ (0, Y.jsx)("div", {
			className: "relative mt-2 mb-4 w-full",
			children: /* @__PURE__ */ (0, Y.jsx)("audio", {
				className: "w-full",
				src: i.url,
				controls: !0
			})
		});
		default:
			if (e.image || i.type === "Image") {
				let r = e.type === "Article" ? "cursor-pointer aspect-[16/7.55] w-full rounded-t-md object-cover" : "cursor-pointer mt-3 max-h-[420px] rounded-md outline-1 -outline-offset-1 outline-black/10", c;
				return c = e.image ? typeof e.image == "string" ? e.image : e.image?.url : i.url, n && n.has(c) ? s(r, !0) : /* @__PURE__ */ (0, Y.jsx)("img", {
					alt: i.name || "Image",
					className: r,
					referrerPolicy: "no-referrer",
					src: c,
					onClick: t ? a(c) : void 0,
					onError: () => o(c)
				});
			}
			return null;
	}
}
function Cs({ className: e = "", isLayered: t = !1, size: n = "default", showLabel: r = !0, onReveal: i }) {
	let a = n === "compact";
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: R("flex items-center justify-center overflow-hidden bg-foreground/45 text-background backdrop-blur-xl", a ? "p-2" : "[container-type:size] p-[clamp(0.75rem,6cqh,2rem)]", t ? "absolute inset-0 rounded-none" : a ? "relative rounded-md" : "relative mt-3 min-h-[300px] w-full rounded-md", e),
		"data-testid": "sensitive-media-overlay",
		onClick: (e) => e.stopPropagation(),
		children: [/* @__PURE__ */ (0, Y.jsx)("div", { className: "absolute inset-0 bg-foreground/35" }), a ? /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "relative z-10 flex flex-col items-center justify-center gap-0.5 text-center",
			children: [
				/* @__PURE__ */ (0, Y.jsx)(vt, {
					"aria-hidden": "true",
					className: "size-5",
					strokeWidth: 2.25
				}),
				r && /* @__PURE__ */ (0, Y.jsx)(Ee, {
					className: "text-sm leading-none text-background",
					weight: "bold",
					children: "Sensitive media"
				}),
				/* @__PURE__ */ (0, Y.jsx)(U, {
					"aria-label": "Show media",
					className: "mt-0.5 h-6 rounded-full bg-background/35 px-3 text-xs font-bold text-background shadow-[0_0_0_1px_color-mix(in_oklab,var(--background)_35%,transparent)] hover:bg-background/25 hover:text-background",
					size: "sm",
					type: "button",
					variant: "ghost",
					onClick: i,
					children: "Show"
				})
			]
		}) : /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "relative z-10 grid size-full max-w-[520px] grid-rows-[minmax(0,1fr)_auto_minmax(0.5rem,6cqh)_auto_minmax(0.75rem,8cqh)_auto_minmax(0,1fr)] justify-items-center text-center",
			children: [
				/* @__PURE__ */ (0, Y.jsx)(vt, {
					"aria-hidden": "true",
					className: "row-start-2 size-[clamp(1.5rem,14cqh,2.25rem)]",
					strokeWidth: 2.25
				}),
				/* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "row-start-4 flex flex-col items-center gap-1",
					children: [/* @__PURE__ */ (0, Y.jsx)(Ee, {
						className: "text-background",
						weight: "bold",
						children: "Sensitive media"
					}), /* @__PURE__ */ (0, Y.jsx)(Ee, {
						className: "leading-tight text-background",
						children: "The following may contain sensitive material"
					})]
				}),
				/* @__PURE__ */ (0, Y.jsx)(U, {
					"aria-label": "Show media",
					className: "row-start-6 rounded-full bg-background/35 px-8 font-bold text-background shadow-[0_0_0_1px_color-mix(in_oklab,var(--background)_35%,transparent)] hover:bg-background/25 hover:text-background",
					size: "default",
					type: "button",
					variant: "ghost",
					onClick: i,
					children: "Show"
				})
			]
		})]
	});
}
function ws({ label: e = "Hide media", layout: t = "overlay", onHide: n }) {
	return /* @__PURE__ */ (0, Y.jsx)(U, {
		"aria-label": "Hide sensitive media",
		className: R("z-20 rounded-full bg-foreground/80 px-6 font-bold text-background hover:bg-foreground/90 hover:text-background", t === "overlay" && "absolute top-5 right-5"),
		size: "default",
		type: "button",
		variant: "ghost",
		onClick: n,
		children: e
	});
}
function Ts({ className: e = "", isLayered: t = !1, label: n, size: r = "default", onReveal: i }) {
	let a = r === "compact";
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: R("flex w-full items-center justify-center overflow-hidden bg-foreground/45 text-background backdrop-blur-xl", a ? "p-4" : "[container-type:inline-size] p-[clamp(0.75rem,6cqw,2rem)]", t ? "absolute inset-0 rounded-none" : a ? "relative min-h-[73px] w-full rounded-md" : "relative min-h-[300px] w-full rounded-md", e),
		"data-testid": "content-warning-overlay",
		onClick: (e) => e.stopPropagation(),
		children: [/* @__PURE__ */ (0, Y.jsx)("div", { className: "absolute inset-0 bg-foreground/35" }), a ? /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "relative z-10 flex w-full max-w-[520px] flex-col items-center justify-center gap-2 text-center",
			children: [
				/* @__PURE__ */ (0, Y.jsx)(vt, {
					"aria-hidden": "true",
					className: "size-5",
					strokeWidth: 2.25
				}),
				/* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "flex flex-col items-center gap-0.5",
					children: [/* @__PURE__ */ (0, Y.jsx)(Ee, {
						className: "text-sm text-background",
						weight: "bold",
						children: "Content warning:"
					}), /* @__PURE__ */ (0, Y.jsx)(Ee, {
						className: "text-sm leading-tight text-background",
						children: n
					})]
				}),
				/* @__PURE__ */ (0, Y.jsx)(U, {
					"aria-label": "Show post",
					className: "rounded-full bg-background/35 px-6 text-sm font-bold text-background shadow-[0_0_0_1px_color-mix(in_oklab,var(--background)_35%,transparent)] hover:bg-background/25 hover:text-background",
					size: "sm",
					type: "button",
					variant: "ghost",
					onClick: i,
					children: "Show"
				})
			]
		}) : /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "relative z-10 grid size-full max-w-[520px] grid-rows-[minmax(0,1fr)_auto_clamp(1.25rem,3.85cqw,1.8rem)_auto_clamp(1.5rem,5.15cqw,2.4rem)_auto_minmax(0,1fr)] justify-items-center text-center",
			children: [
				/* @__PURE__ */ (0, Y.jsx)(vt, {
					"aria-hidden": "true",
					className: "row-start-2 size-[clamp(1.5rem,4.85cqw,2.25rem)]",
					strokeWidth: 2.25
				}),
				/* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "row-start-4 flex flex-col items-center gap-1",
					children: [/* @__PURE__ */ (0, Y.jsx)(Ee, {
						className: "text-background",
						weight: "bold",
						children: "Content warning:"
					}), /* @__PURE__ */ (0, Y.jsx)(Ee, {
						className: "leading-tight text-background",
						children: n
					})]
				}),
				/* @__PURE__ */ (0, Y.jsx)(U, {
					"aria-label": "Show post",
					className: "row-start-6 rounded-full bg-background/35 px-8 font-bold text-background shadow-[0_0_0_1px_color-mix(in_oklab,var(--background)_35%,transparent)] hover:bg-background/25 hover:text-background",
					size: "default",
					type: "button",
					variant: "ghost",
					onClick: i,
					children: "Show"
				})
			]
		})]
	});
}
function Es(e, t) {
	let n = xs(e), r = "ml-8 md:ml-9 shrink-0 rounded-md h-[91px] w-[121px] relative hidden @md/inbox-item:block", i = R("object-cover outline-1 -outline-offset-1 outline-black/[0.05]", r);
	if (t) return /* @__PURE__ */ (0, Y.jsx)(q, { className: `${i} outline-0` });
	if (!n) return null;
	if (Array.isArray(n)) return /* @__PURE__ */ (0, Y.jsx)("img", {
		className: i,
		referrerPolicy: "no-referrer",
		src: n[0].url
	});
	switch (n.mediaType) {
		case "image/jpeg":
		case "image/png":
		case "image/gif": return /* @__PURE__ */ (0, Y.jsx)("img", {
			className: i,
			referrerPolicy: "no-referrer",
			src: n.url
		});
		case "video/mp4":
		case "video/webm": return /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: r,
			children: [
				/* @__PURE__ */ (0, Y.jsx)("video", {
					className: "h-[80px] w-full rounded object-cover",
					src: n.url
				}),
				/* @__PURE__ */ (0, Y.jsx)("div", { className: "absolute inset-0 rounded bg-gray-900 opacity-50" }),
				/* @__PURE__ */ (0, Y.jsx)("div", {
					className: "absolute inset-0 flex items-center justify-center",
					children: /* @__PURE__ */ (0, Y.jsx)(Tt, {
						color: "white",
						fill: "white",
						size: 40
					})
				})
			]
		});
		case "audio/mpeg":
		case "audio/ogg": return /* @__PURE__ */ (0, Y.jsx)("div", {
			className: "ml-8 w-[120px]",
			children: /* @__PURE__ */ (0, Y.jsx)("div", {
				className: "relative mt-2 mb-4 w-full",
				children: /* @__PURE__ */ (0, Y.jsx)("audio", {
					className: "w-full",
					src: n.url,
					controls: !0
				})
			})
		});
		default: return e.image ? /* @__PURE__ */ (0, Y.jsx)("img", {
			className: i,
			referrerPolicy: "no-referrer",
			src: typeof e.image == "string" ? e.image : e.image?.url
		}) : null;
	}
}
var Ds = () => {}, Os = /* @__PURE__ */ (0, Y.jsx)(Et, {
	className: "shrink-0 text-gray-700 dark:text-gray-600",
	size: 16,
	strokeWidth: 1.5
}), ks = ({ actor: e, allowDelete: t = !1, object: r, parentId: i = void 0, layout: a, type: o, commentCount: s = 0, repostCount: c = 0, likeCount: l = 0, showHeader: u = !0, last: d, isLoading: f, isPending: p = !1, isCompact: m = !1, isChainContinuation: _ = !1, isChainParent: v = !1, onClick: y = Ds, onDelete: x = Ds, showStats: S = !0 }) => {
	let C = new Date(r?.published ?? /* @__PURE__ */ new Date()).toLocaleDateString("default", {
		year: "numeric",
		month: "short",
		day: "2-digit"
	}) + ", " + new Date(r?.published ?? /* @__PURE__ */ new Date()).toLocaleTimeString("default", {
		hour: "2-digit",
		minute: "2-digit"
	}), [, w] = n(!1), [T, E] = n(/* @__PURE__ */ new Set()), D = g(null), [O, k] = n(!1), A = Me("index"), j = me(), { contentWarning: M, shouldHideContentWarning: N, shouldHideSensitiveMedia: P, canHideSensitiveMedia: ee, isContentWarningRevealed: F, showContentWarningOverlay: I, contentWarningMinHeight: L, contentWarningWrapperRef: te, revealSensitiveMedia: ne, hideSensitiveMedia: re, revealContentWarning: ie } = bs({
		contentWarning: r?.contentWarning,
		sensitive: r?.sensitive,
		hasMedia: xs(r) !== null,
		resetKey: r?.id
	}), ae = Le("index", () => {
		b.success(`Followed ${H?.name}`);
	}, () => {
		b.error("Failed to follow");
	}), oe = De("index", () => {
		b.info(`Unfollowed ${H?.name}`);
	}, () => {
		b.error("Failed to unfollow");
	});
	h(() => {
		let e = D.current;
		e && k(e.scrollHeight > e.clientHeight);
	}, [r?.content]), h(() => {
		let e = D.current;
		if (!e) return;
		let t = (e) => {
			let t = e.target.closest("a[data-profile]");
			if (t) {
				let n = t.getAttribute("data-profile")?.trim();
				/^@([\w.-]+)@([\w-]+\.[\w.-]+[a-zA-Z])$/.test(n || "") && n && (e.preventDefault(), e.stopPropagation(), ms(n, j));
			}
		};
		return e.addEventListener("click", t), () => {
			e.removeEventListener("click", t);
		};
	}, [j, r?.content]);
	let se = () => {}, z = () => {
		p || y();
	}, ce = () => {
		A.mutate({
			id: r.id,
			parentId: i
		}), x();
	}, B = async () => {
		r?.url && (await navigator.clipboard.writeText(r.url), w(!0), b.success("Link copied"), setTimeout(() => w(!1), 2e3));
	}, le = (e) => {
		E((t) => new Set(t).add(e));
	}, ue = (e) => {
		if (P) {
			let e = Ss(r, void 0, T, le);
			return e ? /* @__PURE__ */ (0, Y.jsxs)("div", {
				className: R("relative mt-3 overflow-hidden rounded-md [&>.attachment-gallery]:mt-0 [&>img]:mt-0 [&>img]:block", Array.isArray(xs(r)) ? "w-full" : "w-fit max-w-full"),
				children: [e, /* @__PURE__ */ (0, Y.jsx)(Cs, {
					isLayered: !0,
					onReveal: ne
				})]
			}) : /* @__PURE__ */ (0, Y.jsx)(Cs, { onReveal: ne });
		}
		let t = Ss(r, e, T, le);
		return t ? ee ? /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: R("relative mt-3 [&>.attachment-gallery]:mt-0 [&>img]:mt-0 [&>img]:block", Array.isArray(xs(r)) ? "w-full" : "w-fit max-w-full"),
			children: [t, /* @__PURE__ */ (0, Y.jsx)(ws, {
				label: "Hide",
				onHide: re
			})]
		}) : t : null;
	}, de = (e = !1) => M ? /* @__PURE__ */ (0, Y.jsx)(Ts, {
		isLayered: e,
		label: M,
		size: a === "inbox" || a === "reply" ? "compact" : "default",
		onReveal: ie
	}) : null, fe = (e) => {
		let { contentClassName: t = "ap-note-content break-anywhere line-clamp-[10] leading-[1.4285714286] tracking-[-0.006em] text-pretty text-gray-900 dark:text-gray-300 [&_p+p]:mt-3", mediaClickHandler: n = be, showName: i = !1 } = e ?? {};
		return /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [
			i && r.name && /* @__PURE__ */ (0, Y.jsx)(K, {
				className: "break-anywhere mb-1 leading-tight",
				"data-test-activity-heading": !0,
				children: r.name
			}),
			/* @__PURE__ */ (0, Y.jsx)("div", {
				className: t,
				children: f ? /* @__PURE__ */ (0, Y.jsx)(q, { count: 2 }) : /* @__PURE__ */ (0, Y.jsx)("div", {
					dangerouslySetInnerHTML: { __html: Je(Ke(r.content || "") ?? "") },
					ref: D,
					onClick: (e) => {
						let t = e.target;
						(t.tagName === "A" || t.closest("a")) && e.stopPropagation();
					}
				})
			}),
			O && /* @__PURE__ */ (0, Y.jsx)("button", {
				className: "mt-1 text-blue-600",
				type: "button",
				children: "Show more"
			}),
			ue(n)
		] });
	}, V = (e) => M ? /* @__PURE__ */ (0, Y.jsxs)("div", {
		ref: te,
		className: "relative w-full",
		style: L ? { minHeight: L } : void 0,
		children: [F && fe(e), I && de(F)]
	}) : fe(e), H = e;
	o === "Announce" && (H = typeof r.attributedTo == "object" ? r.attributedTo : e);
	let pe = H ? qe(H) : null, he = H?.followedByMe || !1, W = o === "Announce" ? typeof r.attributedTo == "object" && r.attributedTo && !Array.isArray(r.attributedTo) && "authored" in r.attributedTo ? r.attributedTo.authored : typeof r.attributedTo == "object" && r.attributedTo && !Array.isArray(r.attributedTo) && typeof e == "object" && e && r.attributedTo.id === e.id : r.authored, ge = o === "Announce" ? r.reposted ?? !1 : r.authored, _e = () => {
		pe && ae.mutate(pe);
	}, ve = () => {
		pe && oe.mutate(pe);
	}, ye = /* @__PURE__ */ (0, Y.jsx)(U, {
		className: `relative z-10 size-[34px] ${a === "feed" ? "" : "rounded-md"} ${a === "inbox" || a === "modal" ? "text-gray-900 hover:text-gray-900 dark:text-gray-600 dark:hover:text-gray-600" : "text-gray-500 hover:text-gray-500"} dark:hover:bg-gray-950 [&_svg]:size-5`,
		"data-testid": "menu-button",
		shape: a === "feed" ? "pill" : "rounded",
		size: a === "feed" ? "icon" : void 0,
		variant: "ghost",
		children: /* @__PURE__ */ (0, Y.jsx)(gt, {})
	}), { lightboxState: G, openLightbox: be, closeLightbox: xe, navigateToIndex: Se } = as(r);
	return a === "feed" ? /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [r && /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: `group/article relative -mx-4 ${p ? "pointer-events-none" : "cursor-pointer"} rounded-lg p-6 px-4 pb-[18px]`,
		"data-layout": "feed",
		"data-object-id": r.id,
		onClick: z,
		children: [o === "Announce" && /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "z-10 mb-2 flex items-center gap-1.5 text-gray-700 dark:text-gray-600",
			children: [Os, /* @__PURE__ */ (0, Y.jsxs)("div", {
				className: "flex min-w-0 items-center gap-1 text-sm",
				children: [/* @__PURE__ */ (0, Y.jsx)(us, {
					actor: e,
					align: "center",
					isCurrentUser: ge,
					children: /* @__PURE__ */ (0, Y.jsx)("span", {
						className: "break-anywhere truncate hover:underline",
						onClick: (t) => {
							ms(e, j, t);
						},
						children: e.name
					})
				}), "reposted"]
			})]
		}), /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "flex flex-col gap-2.5",
			"data-test-activity": !0,
			children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, Y.jsx)(us, {
					actor: H,
					isCurrentUser: W,
					children: /* @__PURE__ */ (0, Y.jsxs)("div", {
						className: "flex min-w-0 grow items-center gap-3",
						children: [/* @__PURE__ */ (0, Y.jsx)(We, {
							author: H,
							disabled: p,
							showFollowButton: !W && !he
						}), /* @__PURE__ */ (0, Y.jsxs)("div", {
							className: "flex min-w-0 grow flex-col",
							onClick: (e) => {
								p || ms(H, j, e);
							},
							children: [/* @__PURE__ */ (0, Y.jsx)("span", {
								className: `break-anywhere min-w-0 truncate font-semibold ${m ? "text-lg" : "text-md"} ${p ? "" : "hover-underline"} dark:text-white`,
								"data-test-activity-heading": !0,
								children: f ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "w-24" }) : H.name
							}), /* @__PURE__ */ (0, Y.jsxs)("div", {
								className: "flex w-full text-md text-gray-700 dark:text-gray-600",
								children: [/* @__PURE__ */ (0, Y.jsx)("span", {
									className: `truncate ${p ? "" : "hover-underline"}`,
									children: f ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "w-56" }) : qe(H)
								}), /* @__PURE__ */ (0, Y.jsx)("div", {
									className: `ml-1 before:mr-1 ${!f && "before:content-[\"·\"]"}`,
									title: `${C}`,
									children: f ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "w-4" }) : ys(r, p === !1 && !r.authored)
								})]
							})]
						})]
					})
				}), /* @__PURE__ */ (0, Y.jsx)(is, {
					allowDelete: t,
					authoredByMe: W,
					disabled: p,
					followedByMe: he,
					layout: "feed",
					trigger: ye,
					onCopyLink: B,
					onDelete: ce,
					onFollow: _e,
					onUnfollow: ve
				})]
			}), /* @__PURE__ */ (0, Y.jsx)("div", {
				className: "relative col-start-2 col-end-3 w-full gap-4 pl-[52px]",
				children: /* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "flex flex-col",
					children: [/* @__PURE__ */ (0, Y.jsx)("div", {
						className: "",
						children: r.type === "Article" ? N ? de() : /* @__PURE__ */ (0, Y.jsxs)("div", {
							className: "rounded-md border border-gray-200 transition-colors hover:bg-gray-100 dark:border-gray-950 dark:hover:bg-gray-950",
							children: [ue(z), /* @__PURE__ */ (0, Y.jsxs)("div", {
								className: "p-5",
								children: [/* @__PURE__ */ (0, Y.jsx)("div", {
									className: "break-anywhere mb-1 line-clamp-2 text-lg leading-tight font-semibold tracking-tight text-pretty",
									"data-test-activity-heading": !0,
									children: r.name
								}), /* @__PURE__ */ (0, Y.jsx)("div", {
									className: "break-anywhere line-clamp-3 leading-[1.4em]",
									children: r.preview?.content
								})]
							})]
						}) : /* @__PURE__ */ (0, Y.jsx)("div", {
							className: "relative",
							children: V()
						})
					}), /* @__PURE__ */ (0, Y.jsx)("div", {
						className: "space-between relative z-[30] mt-1 ml-[-8px] flex",
						children: f ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "ml-2 w-18" }) : S && /* @__PURE__ */ (0, Y.jsx)(fs, {
							actor: H,
							commentCount: s,
							disabled: p,
							layout: a,
							likeCount: l,
							object: r,
							repostCount: c,
							onLikeClick: se
						})
					})]
				})
			})]
		})]
	}), /* @__PURE__ */ (0, Y.jsx)(os, {
		currentIndex: G.currentIndex,
		images: G.images,
		isOpen: G.isOpen,
		onClose: xe,
		onNavigate: Se
	})] }) : a === "modal" ? /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [r && /* @__PURE__ */ (0, Y.jsxs)("div", {
		"data-object-id": r.id,
		children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "group/article relative",
			"data-layout": "modal",
			onClick: z,
			children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
				className: "z-10 -my-1 grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-3 pt-4 pb-3",
				"data-test-activity": !0,
				children: [u && /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsx)("div", {
					className: "relative z-10 pt-[3px]",
					children: /* @__PURE__ */ (0, Y.jsx)(We, {
						author: H,
						showFollowButton: !W && !he
					})
				}), /* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "relative z-10 flex w-full min-w-0 cursor-pointer flex-col overflow-visible text-[1.5rem]",
					onClick: (e) => {
						p || ms(H, j, e);
					},
					children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
						className: "flex w-full",
						children: [/* @__PURE__ */ (0, Y.jsx)("span", {
							className: "break-anywhere min-w-0 truncate font-semibold whitespace-nowrap after:mx-1 after:font-normal after:text-gray-700 after:content-[\"·\"] after:dark:text-gray-600",
							"data-test-activity-heading": !0,
							children: H.name
						}), /* @__PURE__ */ (0, Y.jsx)("div", { children: ys(r, !r.authored) })]
					}), /* @__PURE__ */ (0, Y.jsx)("div", {
						className: "flex w-full",
						children: /* @__PURE__ */ (0, Y.jsx)("span", {
							className: "min-w-0 truncate text-gray-700 dark:text-gray-600",
							children: qe(H)
						})
					})]
				})] }), /* @__PURE__ */ (0, Y.jsx)("div", {
					className: "relative z-10 col-start-1 col-end-3 w-full gap-4",
					children: /* @__PURE__ */ (0, Y.jsxs)("div", {
						className: "flex flex-col items-start",
						children: [V({
							contentClassName: "ap-note-content-large break-anywhere text-[1.6rem] tracking-[-0.011em] text-pretty text-gray-900 dark:text-gray-300 [&_p+p]:mt-3",
							showName: !0
						}), /* @__PURE__ */ (0, Y.jsx)("div", {
							className: "space-between mt-3 ml-[-8px] flex",
							children: S && /* @__PURE__ */ (0, Y.jsx)(fs, {
								actor: H,
								commentCount: s,
								layout: a,
								likeCount: l,
								object: r,
								repostCount: c,
								onLikeClick: se
							})
						})]
					})
				})]
			}), /* @__PURE__ */ (0, Y.jsx)("div", { className: "absolute -inset-x-3 -inset-y-0 z-0 rounded transition-colors max-lg:hidden" })]
		}), /* @__PURE__ */ (0, Y.jsx)("div", { className: "mt-3 h-px bg-gray-200 dark:bg-gray-950" })]
	}), /* @__PURE__ */ (0, Y.jsx)(os, {
		currentIndex: G.currentIndex,
		images: G.images,
		isOpen: G.isOpen,
		onClose: xe,
		onNavigate: Se
	})] }) : a === "reply" ? /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [r && /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: `group/article relative ${m ? "pb-6" : _ ? "pb-5" : "py-5"} ${p ? "pointer-events-none" : "cursor-pointer"}`,
		"data-layout": "reply",
		"data-object-id": r.id,
		onClick: z,
		children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "flex flex-col gap-2.5 border-b-gray-200",
			"data-test-activity": !0,
			children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, Y.jsx)(us, {
					actor: H,
					isCurrentUser: W,
					children: /* @__PURE__ */ (0, Y.jsxs)("div", {
						className: "flex min-w-0 grow items-center gap-3",
						children: [/* @__PURE__ */ (0, Y.jsx)(We, {
							author: H,
							disabled: p,
							showFollowButton: !W && !he
						}), /* @__PURE__ */ (0, Y.jsxs)("div", {
							className: "flex min-w-0 grow flex-col",
							onClick: (e) => {
								p || ms(H, j, e);
							},
							children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
								className: "flex",
								children: [/* @__PURE__ */ (0, Y.jsx)("span", {
									className: "break-anywhere min-w-0 truncate font-semibold whitespace-nowrap text-black after:mx-1 after:font-normal after:text-gray-700 after:content-[\"·\"] dark:text-white",
									"data-test-activity-heading": !0,
									children: H.name
								}), /* @__PURE__ */ (0, Y.jsx)("div", { children: ys(r, p === !1 && !r.authored) })]
							}), /* @__PURE__ */ (0, Y.jsx)("div", {
								className: "flex",
								children: /* @__PURE__ */ (0, Y.jsx)("span", {
									className: "truncate text-gray-700",
									children: qe(H)
								})
							})]
						})]
					})
				}), !m && /* @__PURE__ */ (0, Y.jsx)(is, {
					allowDelete: t,
					authoredByMe: W,
					disabled: p,
					followedByMe: he,
					layout: "reply",
					trigger: ye,
					onCopyLink: B,
					onDelete: ce,
					onFollow: _e,
					onUnfollow: ve
				})]
			}), /* @__PURE__ */ (0, Y.jsx)("div", {
				className: "relative z-10 col-start-2 col-end-3 w-full gap-4 pl-[52px]",
				children: /* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "flex flex-col items-start",
					children: [N ? de() : /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [
						r.type === "Article" && ue(z),
						r.name && /* @__PURE__ */ (0, Y.jsx)(K, {
							className: "break-anywhere mt-2.5 leading-tight text-pretty",
							"data-test-activity-heading": !0,
							children: r.name
						}),
						r.preview && r.type === "Article" ? /* @__PURE__ */ (0, Y.jsx)("div", {
							className: "mt-1 line-clamp-3 leading-tight",
							children: r.preview.content
						}) : /* @__PURE__ */ (0, Y.jsx)("div", {
							dangerouslySetInnerHTML: { __html: Je(Ke(r.content || "") ?? "") },
							ref: D,
							className: "ap-note-content break-anywhere tracking-[-0.006em] text-pretty text-gray-900 dark:text-gray-300 [&_p+p]:mt-3"
						}),
						r.type === "Note" && ue(be),
						r.type === "Article" && /* @__PURE__ */ (0, Y.jsx)(U, {
							className: "mt-3 w-full",
							id: "read-more",
							variant: "secondary",
							children: "Read more"
						})
					] }), !m && /* @__PURE__ */ (0, Y.jsx)("div", {
						className: "space-between mt-2 ml-[-8px] flex",
						children: S && /* @__PURE__ */ (0, Y.jsx)(fs, {
							actor: H,
							commentCount: s,
							disabled: p,
							layout: a,
							likeCount: l,
							object: r,
							repostCount: c,
							onLikeClick: se
						})
					})]
				})
			})]
		}), !d && /* @__PURE__ */ (0, Y.jsx)("div", { className: `absolute left-[19px] ${m ? "top-[51px] bottom-[8px]" : _ ? "top-[51px] bottom-[5px]" : v ? "top-[71px] bottom-[5px]" : "top-[71px] bottom-[-7px]"} z-0 w-[2px] rounded-sm bg-gray-200 dark:bg-gray-950` })]
	}), /* @__PURE__ */ (0, Y.jsx)(os, {
		currentIndex: G.currentIndex,
		images: G.images,
		isOpen: G.isOpen,
		onClose: xe,
		onNavigate: Se
	})] }) : a === "inbox" ? /* @__PURE__ */ (0, Y.jsx)(Y.Fragment, { children: r && /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "group/article @container/inbox-item relative -mx-4 -my-px flex min-h-[112px] min-w-0 cursor-pointer items-center justify-between rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-950/50",
		"data-layout": "inbox",
		"data-object-id": r.id,
		onClick: z,
		children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "w-full min-w-0",
			children: [/* @__PURE__ */ (0, Y.jsx)("div", {
				className: "z-10 mb-1.5 flex w-full min-w-0 items-center gap-1.5 text-sm group-hover/article:border-transparent",
				children: f ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "w-24" }) : /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [
					/* @__PURE__ */ (0, Y.jsx)(us, {
						actor: H,
						isCurrentUser: W,
						children: /* @__PURE__ */ (0, Y.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ (0, Y.jsx)(We, {
								author: H,
								size: "2xs"
							}), /* @__PURE__ */ (0, Y.jsx)("span", {
								className: "min-w-0 truncate font-semibold text-gray-900 hover:underline dark:text-gray-600",
								"data-test-activity-heading": !0,
								onClick: (e) => {
									ms(H, j, e);
								},
								children: H.name
							})]
						})
					}),
					o === "Announce" && /* @__PURE__ */ (0, Y.jsxs)("span", {
						className: "z-10 flex items-center gap-1 text-gray-700 dark:text-gray-600",
						children: [
							Os,
							/* @__PURE__ */ (0, Y.jsx)(us, {
								actor: e,
								align: "center",
								isCurrentUser: ge,
								children: /* @__PURE__ */ (0, Y.jsx)("span", {
									className: "line-clamp-1 hover:underline",
									onClick: (t) => {
										ms(e, j, t);
									},
									children: e.name
								})
							}),
							" ",
							"reposted"
						]
					}),
					/* @__PURE__ */ (0, Y.jsx)("span", {
						className: "shrink-0 whitespace-nowrap text-gray-600 before:mr-1 before:content-[\"·\"]",
						title: `${C}`,
						children: ys(r, !r.authored)
					})
				] })
			}), /* @__PURE__ */ (0, Y.jsxs)("div", {
				className: "flex",
				children: [/* @__PURE__ */ (0, Y.jsx)("div", {
					className: "flex min-h-[73px] w-full min-w-0 flex-col items-start justify-start gap-1",
					children: N ? de() : /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [
						/* @__PURE__ */ (0, Y.jsx)(K, {
							className: "break-anywhere line-clamp-2 w-full max-w-[600px] leading-tight text-pretty",
							"data-test-activity-heading": !0,
							children: f ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "w-full max-w-96" }) : r.name ? r.name : /* @__PURE__ */ (0, Y.jsx)("span", { dangerouslySetInnerHTML: { __html: Je(Ye(r.content || "")) } })
						}),
						/* @__PURE__ */ (0, Y.jsx)("div", {
							className: "ap-note-content break-anywhere line-clamp-2 w-full max-w-[600px] text-base leading-normal text-pretty text-gray-900 dark:text-gray-300 [&_p+p]:mt-3",
							children: f ? /* @__PURE__ */ (0, Y.jsx)(q, { count: 2 }) : /* @__PURE__ */ (0, Y.jsx)("div", { dangerouslySetInnerHTML: { __html: Je(Ye(r.preview?.content ?? r.content ?? "")) } })
						}),
						/* @__PURE__ */ (0, Y.jsx)("span", {
							className: "mt-1 shrink-0 text-sm leading-none whitespace-nowrap text-gray-600",
							children: f ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "w-16" }) : r.content && `${ps(r.content)}`
						})
					] })
				}), /* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "invisible absolute top-8 right-3 z-[49] flex -translate-y-1/2 rounded-lg bg-white p-1 shadow-md group-hover/article:visible dark:bg-black",
					children: [S && /* @__PURE__ */ (0, Y.jsx)(fs, {
						actor: H,
						commentCount: s,
						layout: a,
						likeCount: l,
						object: r,
						repostCount: c,
						onLikeClick: se
					}), /* @__PURE__ */ (0, Y.jsx)(is, {
						allowDelete: t,
						authoredByMe: W,
						followedByMe: he,
						layout: "inbox",
						trigger: ye,
						onCopyLink: B,
						onDelete: ce,
						onFollow: _e,
						onUnfollow: ve
					})]
				})]
			})]
		}), N ? null : P ? /* @__PURE__ */ (0, Y.jsx)(Cs, {
			className: "ml-8 hidden h-[91px] w-[121px] shrink-0 md:ml-9 @md/inbox-item:flex",
			size: "compact",
			onReveal: ne
		}) : Es(r, f)]
	}) }) : /* @__PURE__ */ (0, Y.jsx)(Y.Fragment, {});
}, As = 5 * 1024 * 1024, js = "Image must be less than 5MB in size.", Ms = async (e) => {
	try {
		let t = await fetch(e, { mode: "cors" });
		if (!t.ok) throw Error(`Failed to fetch image: ${t.status}`);
		let n = await t.blob();
		return new Promise((e, t) => {
			let r = new FileReader();
			r.onload = () => e(r.result), r.onerror = t, r.readAsDataURL(n);
		});
	} catch {
		return e;
	}
}, Ns = (e) => new Promise((t) => {
	let n = new Image();
	n.onload = () => {
		URL.revokeObjectURL(n.src), t(n.width === n.height);
	}, n.src = URL.createObjectURL(e);
}), Ps = "Image must be square.";
//#endregion
//#region src/components/modals/new-note-modal.tsx
o();
var Fs = ({ children: e, replyTo: t, onReply: r, onReplyError: i, onOpenChange: a, ...o }) => {
	let { data: c } = ke("index"), l = Oe("index", c), u = ye("index", c), { data: d, isLoading: f } = je("index", "me"), [p, m] = n(!1), _ = g(null), v = g(null), [y, x] = n(null), [S, C] = n(!1), w = g(null), [T, E] = n(""), [D, O] = n(null), [k, A] = n(""), [j, M] = n(!1), [N, P] = n(!1), [ee, F] = n(!1), I = me();
	h(() => {
		o.open !== void 0 && m(o.open);
	}, [o.open]), h(() => {
		if (o.open === void 0 ? p : o.open) {
			let e = setTimeout(() => {
				F(!0);
			}, 300);
			return () => clearTimeout(e);
		} else F(!1);
	}, [p, o.open]);
	let L = !T.trim() || !c || N || T.length > 500, te = s(async () => {
		let e = T.trim();
		if (!(!e || !c)) try {
			P(!0), t ? (await u.mutateAsync({
				inReplyTo: t.object.id,
				content: e,
				imageUrl: D || void 0,
				altText: k || void 0
			}), r?.()) : (await l.mutateAsync({
				content: e,
				imageUrl: D || void 0,
				altText: k || void 0
			}), I("/notes")), m(!1), a && a(!1), b.success(t ? "Reply posted" : "Note posted");
		} catch {
			t && i?.();
		} finally {
			P(!1);
		}
	}, [
		T,
		c,
		t,
		u,
		l,
		D,
		k,
		r,
		i,
		m,
		I,
		a
	]), ne = (e) => {
		E(e.target.value);
	};
	h(() => {
		_.current && (_.current.style.height = "auto", _.current.style.height = `${_.current.scrollHeight}px`);
	}, [T]), h(() => {
		if ((o.open === void 0 ? p : o.open) && _.current) {
			let e = setTimeout(() => {
				_.current?.focus();
			}, 100);
			return () => clearTimeout(e);
		}
	}, [p, o.open]), h(() => {
		if (j && v.current) {
			let e = setTimeout(() => {
				v.current?.focus();
			}, 100);
			return () => clearTimeout(e);
		}
	}, [j]), h(() => {
		let e = (e) => {
			(e.metaKey || e.ctrlKey) && e.key === "Enter" && (e.preventDefault(), !L && !S && te());
		};
		if (o.open === void 0 ? p : o.open) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [
		p,
		o.open,
		L,
		S,
		te
	]);
	let re = s(async (e) => {
		let t = e.clipboardData?.items;
		if (t) for (let n = 0; n < t.length; n++) {
			let r = t[n];
			if (r.type.indexOf("image") !== -1) {
				e.preventDefault();
				let t = r.getAsFile();
				if (t) {
					if (t.size > 5242880) {
						b.error(js);
						return;
					}
					let e = URL.createObjectURL(t);
					x(e), await ie(t);
				}
				break;
			}
		}
	}, []);
	h(() => {
		if (o.open === void 0 ? p : o.open) return document.addEventListener("paste", re), () => document.removeEventListener("paste", re);
	}, [
		p,
		o.open,
		re
	]);
	let ie = async (e) => {
		try {
			C(!0);
			let t = await Fe(e);
			O(t);
		} catch (e) {
			x(null);
			let t = "Failed to upload image. Try again.";
			if (e && typeof e == "object" && "statusCode" in e) switch (e.statusCode) {
				case 413:
					t = "Image size exceeds limit.";
					break;
				case 415:
					t = "The file type is not supported.";
					break;
				default:
			}
			b.error(t);
		} finally {
			C(!1);
		}
	}, ae = async (e) => {
		let t = e.target.files;
		if (t && t.length > 0) {
			let n = t[0];
			if (n.size > 5242880) {
				b.error(js), e.target.value = "";
				return;
			}
			let r = URL.createObjectURL(n);
			x(r), await ie(n);
		}
	}, R = (e) => {
		e.stopPropagation(), x(null), O(null), A(""), M(!1), y && URL.revokeObjectURL(y), w.current && (w.current.value = "");
	}, oe = (e) => {
		e.stopPropagation(), M(!j);
	}, se = () => {
		_.current?.focus();
	};
	h(() => () => {
		y && URL.revokeObjectURL(y);
	}, [y]);
	let z = "What's new?";
	if (t) {
		let e = t.object.attributedTo || {};
		typeof e == "object" && "preferredUsername" in e && "id" in e && (z = `Reply to ${qe(e)}...`);
	}
	return /* @__PURE__ */ (0, Y.jsxs)(Kr, {
		open: o.open === void 0 ? p : o.open,
		onOpenChange: (e) => {
			e && (E(""), x(null), O(null), A(""), M(!1), y && URL.revokeObjectURL(y), w.current && (w.current.value = "")), m(e), a && a(e);
		},
		...o.open === void 0 ? o : {},
		children: [/* @__PURE__ */ (0, Y.jsx)(qr, {
			asChild: !0,
			children: e
		}), /* @__PURE__ */ (0, Y.jsxs)(Zr, {
			className: "max-h-[80vh] min-h-[240px] gap-0 overflow-y-auto pb-0",
			"data-testid": "new-note-modal",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, Y.jsxs)(Qr, {
					className: "hidden",
					children: [/* @__PURE__ */ (0, Y.jsx)(ei, { children: t ? "Reply" : "New note" }), /* @__PURE__ */ (0, Y.jsx)(ti, { children: "Post your thoughts to the Social web" })]
				}),
				t && /* @__PURE__ */ (0, Y.jsx)(ks, {
					actor: t.actor,
					allowDelete: !1,
					commentCount: t.object.replyCount ?? 0,
					isCompact: !0,
					layout: "reply",
					likeCount: t.object.likeCount ?? 0,
					object: t.object,
					repostCount: t.object.repostCount ?? 0,
					type: t.object.type === "Article" ? "Article" : "Note",
					onClick: () => {}
				}),
				/* @__PURE__ */ (0, Y.jsxs)("div", {
					className: `flex ${y ? "" : "min-h-36"} cursor-text items-start gap-3`,
					onClick: se,
					children: [/* @__PURE__ */ (0, Y.jsx)("div", {
						className: "sticky top-0",
						children: /* @__PURE__ */ (0, Y.jsx)(We, { author: c })
					}), /* @__PURE__ */ (0, Y.jsx)(ts, {
						asChild: !0,
						children: /* @__PURE__ */ (0, Y.jsxs)("div", {
							className: "-mt-0.5 flex w-full flex-col gap-0.5",
							children: [
								f ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "w-10" }) : /* @__PURE__ */ (0, Y.jsx)("span", {
									className: "break-anywhere min-w-0 truncate font-semibold whitespace-nowrap text-black dark:text-white",
									children: d?.name
								}),
								/* @__PURE__ */ (0, Y.jsx)(ns, {
									name: "content",
									asChild: !0,
									children: /* @__PURE__ */ (0, Y.jsx)(rs, {
										asChild: !0,
										children: /* @__PURE__ */ (0, Y.jsx)("textarea", {
											ref: _,
											autoFocus: !0,
											className: "ap-textarea break-anywhere w-full resize-none bg-transparent text-[1.5rem] dark:placeholder:text-gray-700",
											"data-testid": "note-textarea",
											placeholder: z,
											rows: 1,
											value: T,
											onChange: ne,
											onPaste: re
										})
									})
								}),
								/* @__PURE__ */ (0, Y.jsx)(ns, {
									name: "image",
									asChild: !0,
									children: /* @__PURE__ */ (0, Y.jsx)(rs, {
										asChild: !0,
										children: /* @__PURE__ */ (0, Y.jsx)("input", {
											ref: w,
											accept: "image/jpeg,image/png,image/webp,image/gif",
											className: "hidden",
											type: "file",
											onChange: ae
										})
									})
								})
							]
						})
					})]
				}),
				y && /* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "group relative mt-6 flex min-h-[200px] w-full items-center justify-center",
					children: [
						/* @__PURE__ */ (0, Y.jsx)("img", {
							alt: "Image attachment preview",
							className: `max-h-[320px] w-full rounded-sm object-cover outline-1 -outline-offset-1 outline-black/10 ${S && "opacity-10"}`,
							src: y
						}),
						S && /* @__PURE__ */ (0, Y.jsx)("div", {
							className: "absolute leading-[0]",
							children: /* @__PURE__ */ (0, Y.jsx)(Ea, { size: "md" })
						}),
						/* @__PURE__ */ (0, Y.jsx)(U, {
							className: "absolute top-3 right-3 size-8 bg-black/60 text-white opacity-0 group-hover:opacity-100 hover:bg-black/80",
							onClick: R,
							children: /* @__PURE__ */ (0, Y.jsx)(At, {})
						}),
						!S && /* @__PURE__ */ (0, Y.jsx)(U, {
							className: `absolute bottom-3 left-3 h-6 px-2 py-0 text-white ${j ? "bg-green-500 hover:bg-green-500" : "bg-black/60 hover:bg-black/80"}`,
							onClick: oe,
							children: "Alt"
						})
					]
				}),
				y && !S && j && /* @__PURE__ */ (0, Y.jsx)("div", {
					className: "mt-1",
					children: /* @__PURE__ */ (0, Y.jsx)(Ta, {
						ref: v,
						className: "w-full border-0 bg-transparent px-0 focus-visible:border-0 focus-visible:bg-transparent focus-visible:shadow-none focus-visible:outline-0 dark:bg-(--color-popover) dark:text-white dark:placeholder:text-gray-800",
						placeholder: "Type alt text for image (optional)",
						type: "text",
						value: k,
						onChange: (e) => A(e.target.value)
					})
				}),
				/* @__PURE__ */ (0, Y.jsxs)($r, {
					className: `${ee ? "sticky" : "static"} bottom-0 flex-row bg-background py-6 dark:bg-surface-elevated-2`,
					children: [/* @__PURE__ */ (0, Y.jsx)(U, {
						className: "mr-auto w-[34px] min-w-0!",
						variant: "outline",
						onClick: () => w.current?.click(),
						children: /* @__PURE__ */ (0, Y.jsx)(bt, {})
					}), /* @__PURE__ */ (0, Y.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
							className: `text-sm ${T.length >= 500 ? "text-red-500" : T.length >= 500 * .9 ? "text-yellow-600" : "text-gray-500"}`,
							children: [
								T.length,
								"/",
								500
							]
						}), /* @__PURE__ */ (0, Y.jsx)(U, {
							className: "min-w-16",
							"data-testid": "post-button",
							disabled: L || S,
							onClick: te,
							children: N ? /* @__PURE__ */ (0, Y.jsx)(Ea, {
								color: "light",
								size: "sm"
							}) : "Post"
						})]
					})]
				})
			]
		})]
	});
};
//#endregion
//#region src/components/layout/sidebar/feedback-box.tsx
o();
var Is = () => {
	let e = me();
	function t() {
		e("/notes/https%3A%2F%2Factivitypub.ghost.org%2F.ghost%2Factivitypub%2Fnote%2F6d6d7f57-b656-4caa-ba9e-efa1d9a4b3fb");
	}
	return /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "z-20 w-full bg-white dark:bg-background",
		children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "flex w-full flex-col gap-0.5 border-t border-gray-200 bg-white px-3 pt-6 dark:border-gray-950 dark:bg-background",
			children: [
				/* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, Y.jsx)(wt, {
						className: "text-purple-500",
						size: 20,
						strokeWidth: 1.5
					}), /* @__PURE__ */ (0, Y.jsx)(K, { children: "Beta feedback" })]
				}),
				/* @__PURE__ */ (0, Y.jsx)("span", {
					className: "text-sm text-gray-700 dark:text-gray-600",
					children: "Something not working? Let us know"
				}),
				/* @__PURE__ */ (0, Y.jsx)(U, {
					className: "mt-2 dark:bg-gray-950/70 dark:hover:bg-gray-900",
					variant: "secondary",
					onClick: t,
					children: "Send feedback"
				})
			]
		}), /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "-mb-1 ml-3 flex items-center gap-1.5 pt-4 pb-2 text-xs text-gray-400",
			children: [
				/* @__PURE__ */ (0, Y.jsx)("a", {
					className: "text-xs font-medium text-gray-700 hover:text-black dark:text-gray-600 dark:hover:text-white",
					href: "https://ghost.org/help/social-web/",
					rel: "noreferrer",
					target: "_blank",
					children: "Help"
				}),
				"⋅",
				/* @__PURE__ */ (0, Y.jsx)("a", {
					className: "text-xs font-medium text-gray-700 hover:text-black dark:text-gray-600 dark:hover:text-white",
					href: "https://activitypub.ghost.org/archive",
					rel: "noreferrer",
					target: "_blank",
					children: "Updates"
				})
			]
		})]
	});
};
//#endregion
//#region src/components/activities/activity-item.tsx
o();
var Ls = ({ children: e, url: t = null, onClick: n, "data-testid": r, isSelected: a = !1 }) => {
	let o = i.Children.toArray(e), s = /* @__PURE__ */ (0, Y.jsx)("div", {
		className: `relative flex w-full max-w-[620px] cursor-pointer flex-col before:absolute before:inset-x-[-16px] before:inset-y-[-1px] before:rounded-md before:bg-gray-50 before:transition-opacity hover:z-10 hover:cursor-pointer hover:border-b-transparent hover:before:opacity-100 dark:before:bg-gray-950 ${a ? "z-10 before:opacity-100" : "before:opacity-0"}`,
		"data-testid": r,
		onClick: () => {
			!t && n && n();
		},
		children: /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "relative z-10 flex w-full items-center gap-3 py-3",
			children: [
				o[0],
				o[1],
				o[2]
			]
		})
	});
	return t ? /* @__PURE__ */ (0, Y.jsx)("a", {
		href: t,
		rel: "noreferrer",
		target: "_blank",
		onClick: (e) => {
			n && (e.preventDefault(), n());
		},
		children: s
	}) : s;
};
//#endregion
//#region src/components/layout/sidebar/recommendations.tsx
o();
var Rs = () => {
	let e = me(), { suggestedProfilesQuery: t } = Te("index", 3), { data: n, isLoading: r } = t, i = r ? [
		,
		,
		,
	].fill(null) : n || [], { resetStack: a } = te();
	return !r && (!n || n.length === 0) ? null : /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "border-t border-gray-200 px-3 pt-6 dark:border-gray-950 [@media(max-height:740px)]:hidden",
		children: [
			/* @__PURE__ */ (0, Y.jsxs)("div", {
				className: "mb-3 flex flex-col gap-0.5",
				children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, Y.jsx)(He, {
						className: "text-purple-500",
						size: 20,
						strokeWidth: 1.5
					}), /* @__PURE__ */ (0, Y.jsx)(K, { children: "Follow suggestions" })]
				}), /* @__PURE__ */ (0, Y.jsx)("span", {
					className: "text-sm text-gray-700 dark:text-gray-600",
					children: "Accounts you might be interested in"
				})]
			}),
			/* @__PURE__ */ (0, Y.jsx)("ul", {
				className: "grow",
				children: i.map((t, n) => {
					let i = t?.id || `loading-${n}`, a = t?.name || "", o = t?.handle || "", s = t?.avatarUrl || "", c;
					switch (n) {
						case 0:
							c = "[@media(max-height:740px)]:hidden";
							break;
						case 1:
							c = "[@media(max-height:800px)]:hidden";
							break;
						case 2:
							c = "[@media(max-height:860px)]:hidden";
							break;
					}
					return /* @__PURE__ */ (0, Y.jsx)(d, { children: /* @__PURE__ */ (0, Y.jsx)("li", {
						className: c,
						children: /* @__PURE__ */ (0, Y.jsx)(us, {
							actor: t,
							align: "center",
							isCurrentUser: !1,
							side: "left",
							children: /* @__PURE__ */ (0, Y.jsx)("div", { children: /* @__PURE__ */ (0, Y.jsxs)(Ls, {
								onClick: () => {
									!r && t && ms(t, e);
								},
								children: [r ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "z-10 size-10" }) : /* @__PURE__ */ (0, Y.jsx)(We, {
									author: {
										icon: { url: s },
										name: a,
										handle: o
									},
									showFollowButton: !0
								}), /* @__PURE__ */ (0, Y.jsxs)("div", {
									className: "flex min-w-0  flex-col",
									children: [/* @__PURE__ */ (0, Y.jsx)("span", {
										className: "block max-w-[190px] truncate font-semibold text-black dark:text-white",
										children: r ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "w-24" }) : a
									}), /* @__PURE__ */ (0, Y.jsx)("span", {
										className: "block max-w-[190px] truncate text-sm text-gray-700 dark:text-gray-600",
										children: r ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "w-40" }) : o
									})]
								})]
							}) })
						})
					}, i) }, i);
				})
			}),
			/* @__PURE__ */ (0, Y.jsx)(U, {
				className: "p-0 font-medium text-purple hover:text-black dark:hover:text-white",
				variant: "link",
				onClick: () => {
					a(), e("/explore");
				},
				children: "Find more →"
			})
		]
	});
};
//#endregion
//#region src/components/global/suggested-profiles.tsx
o();
var zs = ({ profile: e, update: t, isLoading: n, onOpenChange: r }) => {
	let i = () => {
		t(e.id, { followedByMe: !0 });
	}, a = () => {
		t(e.id, { followedByMe: !1 });
	}, o = me();
	return /* @__PURE__ */ (0, Y.jsx)(us, {
		actor: e,
		align: "center",
		isCurrentUser: !1,
		side: "left",
		children: /* @__PURE__ */ (0, Y.jsx)("div", { children: /* @__PURE__ */ (0, Y.jsxs)(Ls, {
			onClick: () => {
				r?.(!1), o(`/profile/${e.handle}`);
			},
			children: [
				/* @__PURE__ */ (0, Y.jsx)(We, {
					author: {
						icon: { url: e.avatarUrl },
						name: e.name,
						handle: e.handle
					},
					onClick: () => r?.(!1)
				}),
				/* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "break-anywhere flex grow flex-col",
					children: [/* @__PURE__ */ (0, Y.jsx)("span", {
						className: "line-clamp-1 font-semibold text-black dark:text-white",
						children: n ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "w-full max-w-64" }) : e.name
					}), /* @__PURE__ */ (0, Y.jsx)("span", {
						className: "line-clamp-1 text-sm text-gray-700 dark:text-gray-600",
						children: n ? /* @__PURE__ */ (0, Y.jsx)(q, { className: "w-24" }) : e.handle
					})]
				}),
				n ? /* @__PURE__ */ (0, Y.jsx)("div", {
					className: "inline-flex items-center",
					children: /* @__PURE__ */ (0, Y.jsx)(q, { className: "w-12" })
				}) : /* @__PURE__ */ (0, Y.jsx)(cs, {
					className: "ml-auto",
					following: e.followedByMe,
					handle: e.handle,
					type: "secondary",
					onFollow: i,
					onUnfollow: a
				})
			]
		}, e.id) })
	});
}, Bs = ({ onOpenChange: e }) => {
	let { suggestedProfilesQuery: t, updateSuggestedProfile: n } = Te("index", 5), { data: r = [], isLoading: a } = t;
	return !a && (!r || r.length === 0) ? null : /* @__PURE__ */ (0, Y.jsx)("div", {
		className: "mb-[-15px] flex flex-col gap-3 pt-2",
		children: /* @__PURE__ */ (0, Y.jsx)("div", {
			className: "flex flex-col",
			children: (a ? [
				,
				,
				,
				,
				,
			].fill(null) : r || []).map((t, r) => /* @__PURE__ */ (0, Y.jsx)(i.Fragment, { children: /* @__PURE__ */ (0, Y.jsx)(zs, {
				isLoading: a,
				profile: t || {
					id: "",
					name: "",
					handle: "",
					avatarUrl: "",
					bio: "",
					followerCount: 0,
					followingCount: 0,
					followedByMe: !1
				},
				update: n,
				onOpenChange: e
			}) }, t?.id || `loading-${r}`))
		})
	});
};
//#endregion
//#region ../../node_modules/.pnpm/use-debounce@10.1.1_react@18.3.1/node_modules/use-debounce/dist/index.module.js
o();
function Vs(e, n, r, i) {
	var a = this, o = g(null), s = g(0), c = g(0), l = g(null), u = g([]), d = g(), f = g(), p = g(e), m = g(!0), _ = g(), v = g();
	p.current = e;
	var y = typeof window < "u", b = !n && n !== 0 && y;
	if (typeof e != "function") throw TypeError("Expected a function");
	n = +n || 0;
	var x = !!(r ||= {}).leading, S = !("trailing" in r) || !!r.trailing, C = !!r.flushOnExit && S, w = "maxWait" in r, T = "debounceOnServer" in r && !!r.debounceOnServer, E = w ? Math.max(+r.maxWait || 0, n) : null, D = t(function() {
		var e = function(e) {
			var t = u.current, n = d.current;
			return u.current = d.current = null, s.current = e, c.current = c.current || e, f.current = p.current.apply(n, t);
		}, t = function(e, t) {
			b && cancelAnimationFrame(l.current), l.current = b ? requestAnimationFrame(e) : setTimeout(e, t);
		}, r = function(e) {
			if (!m.current) return !1;
			var t = e - o.current;
			return !o.current || t >= n || t < 0 || w && e - s.current >= E;
		}, h = function(t) {
			return l.current = null, S && u.current ? e(t) : (u.current = d.current = null, f.current);
		}, g = function e() {
			var i = Date.now();
			if (x && c.current === s.current && D(), r(i)) return h(i);
			if (m.current) {
				var a = n - (i - o.current);
				t(e, w ? Math.min(a, E - (i - s.current)) : a);
			}
		}, D = function() {
			i && i({});
		}, O = function() {
			if (y || T) {
				var i, c = Date.now(), p = r(c);
				if (u.current = [].slice.call(arguments), d.current = a, o.current = c, C && !_.current && (_.current = function() {
					globalThis.document?.visibilityState === "hidden" && v.current.flush();
				}, (i = globalThis.document) == null || i.addEventListener == null || i.addEventListener("visibilitychange", _.current)), p) {
					if (!l.current && m.current) return s.current = o.current, t(g, n), x ? e(o.current) : f.current;
					if (w) return t(g, n), e(o.current);
				}
				return l.current || t(g, n), f.current;
			}
		};
		return O.cancel = function() {
			var e = l.current;
			e && (b ? cancelAnimationFrame(l.current) : clearTimeout(l.current)), s.current = 0, u.current = o.current = d.current = l.current = null, e && i && i({});
		}, O.isPending = function() {
			return !!l.current;
		}, O.flush = function() {
			return l.current ? h(Date.now()) : f.current;
		}, O;
	}, [
		x,
		w,
		n,
		E,
		S,
		C,
		b,
		y,
		T,
		i
	]);
	return v.current = D, h(function() {
		return m.current = !0, function() {
			var e;
			C && v.current.flush(), _.current &&= ((e = globalThis.document) == null || e.removeEventListener == null || e.removeEventListener("visibilitychange", _.current), null), m.current = !1;
		};
	}, [C]), D;
}
function Hs(e, t) {
	return e === t;
}
function Us(e, t, r) {
	var i = r && r.equalityFn || Hs, a = g(e), o = n({})[1], c = Vs(s(function(e) {
		a.current = e, o({});
	}, [o]), t, r, o), l = g(e);
	return i(l.current, e) || (c(e), l.current = e), [a.current, c];
}
//#endregion
//#region src/components/modals/search.tsx
o();
var Ws = 80, Gs = ({ onOpenChange: e, query: r, setQuery: i }) => {
	let a = g(null), o = g([]), s = g(0), c = me(), [l] = Us(r, 300), u = r.length >= 2, { searchQuery: d, updateAccountSearchResult: f } = we("index", u ? l : ""), { data: p, isFetching: m, isFetched: _ } = d, { suggestedProfilesQuery: v } = Te("index", 5), { data: y, isLoading: b } = v, x = b || y && y.length > 0, { topicsQuery: S } = xe(), { data: C } = S, { data: w } = je("index", "me"), [T, E] = n([]), [D, O] = n(null), [k, A] = n(0), j = t(() => {
		let e = C?.topics || [];
		if (!u || e.length === 0) return [];
		let t = r.toLowerCase();
		return e.filter((e) => e.slug === "following" ? !1 : e.name.toLowerCase().startsWith(t) || e.slug.toLowerCase().startsWith(t));
	}, [
		r,
		u,
		C?.topics
	]), M = t(() => [...j.map((e) => ({
		type: "topic",
		data: e
	})), ...T.map((e) => ({
		type: "account",
		data: e
	}))], [j, T]);
	h(() => {
		if (!u) {
			E([]), O(null);
			return;
		}
		_ && (p?.accounts && p.accounts.length > 0 ? (E(p.accounts), O("results"), A(0)) : (E([]), O("none"), A(0)));
	}, [
		p?.accounts,
		_,
		u
	]);
	let N = m && u, P = r.length < 2 || !D && u && j.length === 0, ee = !P && D === "none" && j.length === 0, F = !P && (T.length > 0 || j.length > 0);
	return h(() => {
		a.current?.focus();
	}, []), h(() => {
		let e = o.current[k];
		if (!e) return;
		let t = e.closest("[data-radix-scroll-area-viewport]") || e.closest(".overflow-y-auto");
		if (!t) {
			e.scrollIntoView({ block: "nearest" });
			return;
		}
		let n = t.getBoundingClientRect(), r = e.getBoundingClientRect();
		r.top < n.top + Ws ? t.scrollTo({
			top: t.scrollTop - (n.top + Ws - r.top),
			behavior: "smooth"
		}) : r.bottom > n.bottom - Ws && t.scrollTo({
			top: t.scrollTop + (r.bottom - n.bottom + Ws),
			behavior: "smooth"
		});
	}, [k]), /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "sticky -top-6 z-30 -mt-6 flex h-[72px] shrink-0 items-center gap-2 bg-white pt-3 pb-2 before:pointer-events-none before:absolute before:-inset-x-6 before:bottom-0 before:h-0 before:border-b before:border-b-gray-200 before:content-[\"\"] dark:bg-surface-elevated-2 dark:before:border-b-gray-950",
		children: [
			/* @__PURE__ */ (0, Y.jsx)(Ve, {
				className: "text-gray-600",
				size: 18,
				strokeWidth: 1.5
			}),
			/* @__PURE__ */ (0, Y.jsx)(Ta, {
				ref: a,
				autoComplete: "off",
				className: "flex h-10 w-full items-center rounded-lg border-0 bg-transparent px-0 py-1.5 text-lg !shadow-none !outline-none focus-visible:!border-0 focus-visible:bg-transparent focus-visible:!shadow-none focus-visible:!ring-0 focus-visible:!outline-0 dark:bg-surface-elevated-2 dark:text-white dark:placeholder:text-gray-800",
				placeholder: "Search by name, handle, or URL...",
				title: "Search",
				type: "text",
				value: r,
				onChange: (e) => i(e.target.value),
				onKeyDown: (t) => {
					if (!(!F || M.length === 0)) {
						if (t.key === "ArrowDown" || t.key === "ArrowUp") {
							t.preventDefault();
							let e = Date.now();
							if (e - s.current < 50) return;
							s.current = e, t.key === "ArrowDown" ? A((e) => (e + 1) % M.length) : A((e) => (e - 1 + M.length) % M.length);
						} else if (t.key === "Enter") {
							let n = M[k];
							if (!n) return;
							t.preventDefault(), e?.(!1), n.type === "topic" ? c(`/explore/${n.data.slug}`) : c(`/profile/${n.data.handle}`);
						}
					}
				}
			}),
			N && /* @__PURE__ */ (0, Y.jsx)(Ea, {
				className: "absolute! right-0 mr-0.5 shrink-0",
				size: "sm"
			})
		]
	}), /* @__PURE__ */ (0, Y.jsxs)("div", {
		className: "h-full",
		children: [
			ee && /* @__PURE__ */ (0, Y.jsx)("div", {
				className: "flex h-full items-center justify-center pb-14",
				children: /* @__PURE__ */ (0, Y.jsxs)(co, { children: [/* @__PURE__ */ (0, Y.jsx)(lo, { children: /* @__PURE__ */ (0, Y.jsx)(Ge, {}) }), "No users matching this handle or account URL"] })
			}),
			F && /* @__PURE__ */ (0, Y.jsx)("div", {
				className: "mt-[-14px] pb-2",
				children: M.map((t, n) => {
					let r = n === k;
					if (t.type === "topic") return /* @__PURE__ */ (0, Y.jsx)("div", {
						ref: (e) => o.current[n] = e,
						children: /* @__PURE__ */ (0, Y.jsxs)(Ls, {
							isSelected: r,
							onClick: () => {
								e?.(!1), c(`/explore/${t.data.slug}`);
							},
							children: [/* @__PURE__ */ (0, Y.jsx)("div", {
								className: "flex size-10 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900",
								children: /* @__PURE__ */ (0, Y.jsx)(He, {
									className: "text-gray-700 dark:text-gray-500",
									size: 18,
									strokeWidth: 1.5
								})
							}), /* @__PURE__ */ (0, Y.jsxs)("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ (0, Y.jsx)("span", {
									className: "font-semibold text-black dark:text-white",
									children: t.data.name
								}), /* @__PURE__ */ (0, Y.jsx)("span", {
									className: "text-sm text-gray-700 dark:text-gray-600",
									children: "Topic"
								})]
							})]
						})
					}, t.data.slug);
					let i = t.data, a = i.handle === w?.handle;
					return /* @__PURE__ */ (0, Y.jsx)(us, {
						actor: i,
						align: "center",
						isCurrentUser: a,
						side: "left",
						children: /* @__PURE__ */ (0, Y.jsx)("div", {
							ref: (e) => o.current[n] = e,
							children: /* @__PURE__ */ (0, Y.jsxs)(Ls, {
								isSelected: r,
								onClick: () => {
									e?.(!1), c(`/profile/${i.handle}`);
								},
								children: [
									/* @__PURE__ */ (0, Y.jsx)(We, { author: {
										icon: { url: i.avatarUrl },
										name: i.name,
										handle: i.handle
									} }),
									/* @__PURE__ */ (0, Y.jsxs)("div", {
										className: "break-anywhere flex flex-col",
										children: [/* @__PURE__ */ (0, Y.jsx)("span", {
											className: "line-clamp-1 font-semibold text-black dark:text-white",
											children: i.name
										}), /* @__PURE__ */ (0, Y.jsx)("span", {
											className: "line-clamp-1 text-sm text-gray-700 dark:text-gray-600",
											children: i.handle
										})]
									}),
									i.blockedByMe || i.domainBlockedByMe ? /* @__PURE__ */ (0, Y.jsx)(U, {
										className: "pointer-events-none ml-auto min-w-[90px]",
										variant: "destructive",
										children: "Blocked"
									}) : a ? null : /* @__PURE__ */ (0, Y.jsx)(cs, {
										className: "ml-auto",
										following: i.followedByMe,
										handle: i.handle,
										type: "secondary",
										onFollow: () => f(i.id, { followedByMe: !0 }),
										onUnfollow: () => f(i.id, { followedByMe: !1 })
									})
								]
							})
						})
					}, i.id);
				})
			}),
			P && x && /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsx)(K, { children: "More people to follow" }), /* @__PURE__ */ (0, Y.jsx)(Bs, { onOpenChange: e })] })
		]
	})] });
};
//#endregion
//#region src/components/layout/header/search-input.tsx
o();
var Ks = () => /* @__PURE__ */ (0, Y.jsxs)("div", {
	className: "inline-flex h-9 w-full items-center justify-start gap-2 rounded-full bg-gray-100 px-3 font-normal text-gray-600 hover:bg-gray-200 hover:text-gray-600 dark:bg-gray-950/70 dark:text-gray-700 dark:hover:bg-gray-950 [&_svg]:size-[18px]",
	children: [/* @__PURE__ */ (0, Y.jsx)(Ve, {
		size: 18,
		strokeWidth: 1.5
	}), " Search the social web"]
});
//#endregion
//#region src/components/layout/sidebar/sidebar-menu-link.tsx
o();
var qs = m(({ to: e, children: t, count: n, ...r }, i) => {
	let a = C(), { resetStack: o } = te(), s = fe(), c = e && e.startsWith("/") ? `${s}${e}` : e, l = N("h-8 justify-start font-medium text-gray-800 dark:text-gray-500 dark:hover:bg-gray-950/70 [&_svg]:size-[18px]", c && (a.pathname === c || a.pathname.startsWith(`${c}/`)) && "bg-gray-100 font-semibold text-black dark:bg-gray-950/70 dark:text-white"), u = n && n > 0 ? /* @__PURE__ */ (0, Y.jsx)("span", {
		className: N("ml-auto flex h-5 min-w-[20px] items-center justify-center rounded-full bg-purple-500 px-1.5 py-1 text-xs font-semibold text-white"),
		children: ae(n)
	}) : null;
	return c ? /* @__PURE__ */ (0, Y.jsx)(U, {
		className: l,
		shape: "rounded",
		variant: "ghost",
		asChild: !0,
		children: /* @__PURE__ */ (0, Y.jsxs)(w, {
			to: c,
			onClick: () => {
				o(), O(c);
			},
			children: [t, u]
		})
	}) : /* @__PURE__ */ (0, Y.jsxs)(U, {
		ref: i,
		className: l,
		shape: "rounded",
		variant: "ghost",
		onClick: r.onClick,
		...r,
		children: [t, u]
	});
});
//#endregion
//#region src/components/layout/sidebar/sidebar.tsx
qs.displayName = "SidebarMenuLink", o();
var Js = ({ isMobileSidebarOpen: e }) => {
	let { allFlags: t, flags: r } = ct(), [i, a] = n(!1), [o, c] = n(""), { data: l } = E(), u = C(), d = fe(), { data: f } = G(l?.slug || ""), p = Ce(l?.slug || ""), { topicsQuery: m } = xe(), { data: g, isLoading: _ } = m, v = !_ && g && g.topics.length === 0;
	h(() => {
		u.pathname === `${d}/notifications` && f && f > 0 && p.mutate();
	}, [
		u.pathname,
		d,
		f,
		p
	]);
	let y = s(() => {
		f && f > 0 && p.mutate();
	}, [f, p]);
	return /* @__PURE__ */ (0, Y.jsx)("div", {
		className: `sticky top-0 flex min-h-screen w-[320px] flex-col border-l border-gray-200 pr-[var(--network-gutter,1.5rem)] transition-transform duration-300 ease-in-out max-lg:fixed max-lg:inset-y-0 max-lg:right-0 max-lg:z-50 max-lg:border-0 max-lg:bg-white max-lg:shadow-xl max-md:bottom-[72px] max-md:min-h-[auto] max-md:overflow-y-scroll dark:border-gray-950 max-lg:dark:bg-black ${e ? "max-lg:translate-x-0" : "max-lg:translate-x-full"}`,
		children: /* @__PURE__ */ (0, Y.jsxs)("div", {
			className: "flex grow flex-col justify-between",
			children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
				className: "isolate flex w-full flex-col items-start gap-6 pt-5 pl-6",
				children: [
					/* @__PURE__ */ (0, Y.jsx)("div", {
						className: "flex w-full items-center",
						children: /* @__PURE__ */ (0, Y.jsxs)(Kr, {
							open: i,
							onOpenChange: a,
							children: [/* @__PURE__ */ (0, Y.jsx)(qr, {
								className: "mt-0.5 w-full",
								children: /* @__PURE__ */ (0, Y.jsx)(Ks, {})
							}), /* @__PURE__ */ (0, Y.jsx)(Zr, {
								className: "flex h-full max-h-[452px] flex-col overflow-y-auto pb-0",
								children: /* @__PURE__ */ (0, Y.jsx)(Gs, {
									query: o,
									setQuery: c,
									onOpenChange: a
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, Y.jsxs)("div", {
						className: "flex w-full flex-col gap-px",
						children: [
							/* @__PURE__ */ (0, Y.jsxs)(qs, {
								to: "/reader",
								children: [/* @__PURE__ */ (0, Y.jsx)(ft, {
									size: 18,
									strokeWidth: 1.5
								}), "Reader"]
							}),
							/* @__PURE__ */ (0, Y.jsxs)(qs, {
								to: "/notes",
								children: [/* @__PURE__ */ (0, Y.jsx)(Ct, {
									size: 18,
									strokeWidth: 1.5
								}), "Notes"]
							}),
							/* @__PURE__ */ (0, Y.jsxs)(qs, {
								count: u.pathname === `${d}/notifications` ? void 0 : f,
								to: "/notifications",
								onClick: y,
								children: [/* @__PURE__ */ (0, Y.jsx)(ze, {
									size: 18,
									strokeWidth: 1.5
								}), "Notifications"]
							}),
							v ? /* @__PURE__ */ (0, Y.jsx)(U, {
								className: "inline-flex w-full items-center gap-2 px-3 py-2.5 text-left font-medium text-gray-800 transition-colors hover:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-950/70",
								shape: "rounded",
								variant: "ghost",
								asChild: !0,
								children: /* @__PURE__ */ (0, Y.jsxs)("a", {
									href: "https://explore.ghost.org/social-web",
									rel: "noopener noreferrer",
									target: "_blank",
									children: [
										/* @__PURE__ */ (0, Y.jsx)(He, {
											size: 18,
											strokeWidth: 1.5
										}),
										"Explore",
										/* @__PURE__ */ (0, Y.jsx)(_t, {
											className: "ml-auto",
											size: 14,
											strokeWidth: 1.5
										})
									]
								})
							}) : /* @__PURE__ */ (0, Y.jsxs)(qs, {
								to: "/explore",
								children: [/* @__PURE__ */ (0, Y.jsx)(He, {
									size: 18,
									strokeWidth: 1.5
								}), "Explore"]
							}),
							/* @__PURE__ */ (0, Y.jsxs)(qs, {
								to: "/profile",
								children: [/* @__PURE__ */ (0, Y.jsx)(Ze, {
									size: 18,
									strokeWidth: 1.5
								}), "Profile"]
							}),
							/* @__PURE__ */ (0, Y.jsxs)(qs, {
								to: "/preferences",
								children: [/* @__PURE__ */ (0, Y.jsx)(Ot, {
									size: 18,
									strokeWidth: 1.5
								}), "Preferences"]
							})
						]
					}),
					/* @__PURE__ */ (0, Y.jsx)(Fs, { children: /* @__PURE__ */ (0, Y.jsxs)(U, {
						className: "h-9 rounded-full bg-purple-500 px-3 text-white hover:bg-purple-600 dark:hover:bg-purple-600",
						children: [/* @__PURE__ */ (0, Y.jsx)(Be, {}), "New note"]
					}) }),
					/* @__PURE__ */ (0, Y.jsx)(Rs, {}),
					t.map((e) => r[e] ? /* @__PURE__ */ (0, Y.jsxs)("div", {
						className: "flex items-center justify-between gap-1 pl-3 opacity-50",
						children: [/* @__PURE__ */ (0, Y.jsx)("span", {
							className: "font-mono text-xs",
							children: e
						}), /* @__PURE__ */ (0, Y.jsx)("span", {
							className: "inline-flex items-center rounded bg-green-100 px-1 py-0.5 text-xs font-medium text-green-800",
							children: "ON"
						})]
					}, e) : /* @__PURE__ */ (0, Y.jsx)(Y.Fragment, {}))
				]
			}), /* @__PURE__ */ (0, Y.jsx)("div", {
				className: "sticky bottom-0 flex items-center gap-2 bg-white pb-4 pl-4 dark:bg-background",
				children: /* @__PURE__ */ (0, Y.jsx)(Is, {})
			})]
		})
	});
};
//#endregion
//#region src/components/layout/host-context.tsx
Js.displayName = "Sidebar", o();
var Ys = a(void 0), Xs = Ys.Provider, Zs = () => r(Ys);
//#endregion
//#region src/components/layout/layout.tsx
o();
var Qs = ({ children: e, className: t, style: r, ...i }) => {
	let a = Zs(), { isOnboarded: o } = tt(), s = fe(), { data: c, isLoading: l } = E(), u = g(null), [d, f] = n(!1), p = po(), { topicsQuery: m } = xe(), { data: h } = m, _ = h && h.topics.length > 0, { isNewNoteModalOpen: v, setIsNewNoteModalOpen: y } = ds(), b = () => {
		f(!d);
	}, x = () => {
		f(!1);
	};
	return l || !c ? null : o ? /* @__PURE__ */ (0, Y.jsxs)("div", {
		ref: u,
		className: `h-screen w-full ${o && "overflow-y-auto"}`,
		"data-scrollable-container": !0,
		children: [
			/* @__PURE__ */ (0, Y.jsx)(ve, { containerRef: u }),
			/* @__PURE__ */ (0, Y.jsx)("div", {
				className: N("relative mx-auto flex flex-col", t, a?.contentClassName ?? "max-w-page"),
				style: {
					...r,
					"--network-gutter": a?.contentGutter
				},
				...i,
				children: o ? /* @__PURE__ */ (0, Y.jsxs)(Y.Fragment, { children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
					className: "block grid-cols-[auto_320px] items-start lg:grid",
					children: [/* @__PURE__ */ (0, Y.jsxs)("div", {
						className: "z-0 min-w-0",
						children: [/* @__PURE__ */ (0, Y.jsx)(go, {
							showBorder: !(p === "reader" && _) && p !== "explore",
							onToggleMobileSidebar: b
						}), /* @__PURE__ */ (0, Y.jsx)("div", {
							className: p === "profile" ? N("px-2 pt-2", a?.profileContentClassName) : "px-[var(--network-gutter,min(4vw,24px))]",
							children: e
						})]
					}), /* @__PURE__ */ (0, Y.jsx)(Js, {
						isMobileSidebarOpen: d,
						onCloseMobileSidebar: x
					})]
				}), d && /* @__PURE__ */ (0, Y.jsx)("div", {
					className: "fixed inset-0 z-40 lg:hidden",
					onClick: x
				})] }) : /* @__PURE__ */ (0, Y.jsx)(nt, {})
			}),
			/* @__PURE__ */ (0, Y.jsx)(Fs, {
				open: v,
				onOpenChange: y
			})
		]
	}) : /* @__PURE__ */ (0, Y.jsx)(P, {
		to: `${s}/welcome`,
		replace: !0
	});
};
//#endregion
//#region src/components/global/empty-view-indicator.tsx
o();
var $s = ({ children: e }) => /* @__PURE__ */ (0, Y.jsx)("div", {
	className: "flex max-h-12 max-w-12 grow-0 items-center justify-center rounded-full bg-gray-100 p-3 text-gray-700 dark:bg-gray-950/70 [&_svg]:size-8 [&_svg]:stroke-1",
	children: e
}), ec = ({ children: e, className: t }) => /* @__PURE__ */ (0, Y.jsx)("div", {
	className: `mx-auto mt-[24vh] flex max-w-[500px] flex-col items-center gap-5 text-center text-gray-700 ${t || ""}`,
	children: e
}), tc = ({ statusCode: e, errorCode: t }) => {
	let n = y(), r = ie();
	return n ? /* @__PURE__ */ (0, Y.jsx)(Qs, { children: /* @__PURE__ */ (0, Y.jsxs)(ec, { children: [
		/* @__PURE__ */ (0, Y.jsx)($s, { children: /* @__PURE__ */ (0, Y.jsx)(Dt, {}) }),
		/* @__PURE__ */ (0, Y.jsx)(K, {
			className: "-mb-4",
			children: "Oops, page not found!"
		}),
		/* @__PURE__ */ (0, Y.jsx)("div", { children: "We couldn't find the page you were looking for. It may have been moved, deleted, or never existed in the first place." })
	] }) }) : e === 429 ? /* @__PURE__ */ (0, Y.jsxs)(ec, {
		className: "mt-[50vh] -translate-y-1/2",
		children: [
			/* @__PURE__ */ (0, Y.jsx)($s, { children: /* @__PURE__ */ (0, Y.jsx)(jt, {}) }),
			/* @__PURE__ */ (0, Y.jsx)(K, {
				className: "-mb-4",
				children: "Rate limit exceeded"
			}),
			/* @__PURE__ */ (0, Y.jsx)("div", { children: "You've made too many requests. Please try again in a moment." }),
			/* @__PURE__ */ (0, Y.jsx)(U, {
				asChild: !0,
				children: /* @__PURE__ */ (0, Y.jsx)("a", {
					href: "https://ghost.org/help/social-web/",
					rel: "noopener noreferrer",
					target: "_blank",
					children: "Learn more →"
				})
			})
		]
	}) : e === 403 ? t === "ROLE_MISSING" || t === "SITE_MISSING" ? /* @__PURE__ */ (0, Y.jsxs)(ec, {
		className: "mt-[50vh] -translate-y-1/2",
		children: [
			/* @__PURE__ */ (0, Y.jsx)($s, { children: /* @__PURE__ */ (0, Y.jsx)(kt, {}) }),
			/* @__PURE__ */ (0, Y.jsx)(K, {
				className: "-mb-4",
				children: "Site not configured correctly"
			}),
			/* @__PURE__ */ (0, Y.jsx)("div", { children: "This feature can't be used because the site isn't set up correctly. If you manage this site, check your settings or server logs, or contact support." }),
			/* @__PURE__ */ (0, Y.jsx)(U, {
				asChild: !0,
				children: /* @__PURE__ */ (0, Y.jsx)("a", {
					href: "https://ghost.org/help/social-web/",
					rel: "noopener noreferrer",
					target: "_blank",
					children: "Learn more →"
				})
			})
		]
	}) : /* @__PURE__ */ (0, Y.jsxs)(ec, {
		className: "mt-[50vh] -translate-y-1/2",
		children: [
			/* @__PURE__ */ (0, Y.jsx)($s, { children: /* @__PURE__ */ (0, Y.jsx)(dt, {}) }),
			/* @__PURE__ */ (0, Y.jsx)(K, {
				className: "-mb-4",
				children: "Account suspended"
			}),
			/* @__PURE__ */ (0, Y.jsx)("div", { children: "Your account has been suspended due to policy violations." }),
			/* @__PURE__ */ (0, Y.jsx)(U, {
				asChild: !0,
				children: /* @__PURE__ */ (0, Y.jsx)("a", {
					href: "https://ghost.org/help/social-web/",
					rel: "noopener noreferrer",
					target: "_blank",
					children: "Learn more →"
				})
			})
		]
	}) : e === 410 && t === "INVALID_VERSION" ? /* @__PURE__ */ (0, Y.jsxs)(ec, {
		className: "mt-[50vh] -translate-y-1/2",
		children: [
			/* @__PURE__ */ (0, Y.jsx)($s, { children: /* @__PURE__ */ (0, Y.jsx)(ht, {}) }),
			/* @__PURE__ */ (0, Y.jsx)(K, {
				className: "-mb-4",
				children: "New version available"
			}),
			/* @__PURE__ */ (0, Y.jsx)("div", { children: "We've made some updates! Refresh your page to see what's new" }),
			/* @__PURE__ */ (0, Y.jsx)(U, {
				asChild: !0,
				children: /* @__PURE__ */ (0, Y.jsx)("button", {
					type: "button",
					onClick: () => window.location.reload(),
					children: "Refresh your page"
				})
			})
		]
	}) : /* @__PURE__ */ (0, Y.jsx)(re, {
		align: "center",
		className: "h-screen w-full bg-background",
		gap: "none",
		justify: "center",
		children: /* @__PURE__ */ (0, Y.jsxs)(re, {
			align: "start",
			className: "max-w-xl rounded-[20px] bg-surface-elevated p-[5vmin] text-card-foreground shadow-lg",
			gap: "lg",
			children: [
				/* @__PURE__ */ (0, Y.jsx)("h1", {
					className: "text-[2.9rem] leading-[1.3] font-bold tracking-[-0.021em]",
					children: "Loading interrupted"
				}),
				/* @__PURE__ */ (0, Y.jsx)("p", { children: "They say life is a series of trials and tribulations. This moment right here? It's a tribulation. Our app was supposed to load, and yet here we are. Loadless. Click back to the dashboard to try again." }),
				/* @__PURE__ */ (0, Y.jsx)("a", {
					className: "mt-2 cursor-pointer rounded-sm border border-current px-2.5 py-1.5 text-green",
					onClick: (e) => {
						e.preventDefault(), r("/analytics/", { crossApp: !0 });
					},
					children: "← Back to the homepage"
				})
			]
		})
	});
}, nc = /* @__PURE__ */ e({ default: () => tc }), rc = [{
	path: "activitypub",
	element: /* @__PURE__ */ (0, Y.jsx)(S, {}),
	errorElement: /* @__PURE__ */ (0, Y.jsx)(tc, {}),
	handle: "activitypub-basepath",
	children: [
		{
			index: !0,
			element: /* @__PURE__ */ (0, Y.jsx)(P, { to: "reader" })
		},
		{
			path: "inbox",
			element: /* @__PURE__ */ (0, Y.jsx)(P, {
				to: "../reader",
				replace: !0
			})
		},
		{
			path: "feed",
			element: /* @__PURE__ */ (0, Y.jsx)(P, {
				to: "../notes",
				replace: !0
			})
		},
		{
			path: "reader",
			lazy: J(() => import("./inbox-DV3RrpFH.js")),
			pageTitle: "Reader"
		},
		{
			path: "reader/:postId",
			lazy: J(() => import("./inbox-DV3RrpFH.js")),
			pageTitle: "Reader"
		},
		{
			path: "notes",
			lazy: J(() => import("./feed-yauqnu7A.js")),
			pageTitle: "Notes"
		},
		{
			path: "notes/:postId",
			lazy: J(() => import("./note-BVL6LVHF.js")),
			pageTitle: "Note"
		},
		{
			path: "notifications",
			lazy: J(() => import("./notifications-CRUu_uMC.js")),
			pageTitle: "Notifications"
		},
		{
			path: "explore",
			lazy: J(() => import("./explore-DmwPdxHI.js")),
			pageTitle: "Explore"
		},
		{
			path: "explore/:topic",
			lazy: J(() => import("./explore-DmwPdxHI.js")),
			pageTitle: "Explore"
		},
		{
			path: "profile",
			lazy: J(() => import("./profile-KnNAoHYu.js")),
			pageTitle: "Profile"
		},
		{
			path: "profile/likes",
			lazy: J(() => import("./profile-KnNAoHYu.js")),
			pageTitle: "Profile"
		},
		{
			path: "profile/following",
			lazy: J(() => import("./profile-KnNAoHYu.js")),
			pageTitle: "Profile"
		},
		{
			path: "profile/followers",
			lazy: J(() => import("./profile-KnNAoHYu.js")),
			pageTitle: "Profile"
		},
		{
			path: "profile/:handle/:tab?",
			lazy: J(() => import("./profile-KnNAoHYu.js")),
			pageTitle: "Profile"
		},
		{
			path: "preferences",
			lazy: J(() => import("./preferences-CdFuVqIt.js")),
			pageTitle: "Preferences"
		},
		{
			path: "preferences/moderation",
			lazy: J(() => import("./moderation-DGa6hVNH.js")),
			pageTitle: "Moderation",
			showBackButton: !0
		},
		{
			path: "preferences/bluesky-sharing",
			lazy: J(() => import("./bluesky-sharing-B1fzMdFb.js")),
			showBackButton: !0
		},
		{
			path: "preferences/move",
			lazy: J(() => import("./account-migration-BmiwuzXI.js")),
			pageTitle: "Account migration",
			showBackButton: !0
		},
		{
			path: "preferences/handle",
			lazy: J(() => import("./domain-B3UtdA1m.js")),
			pageTitle: "Handle",
			showBackButton: !0
		},
		{
			path: "welcome",
			lazy: J(() => import("./onboarding-KtpJA-xb.js").then((e) => e.t)),
			pageTitle: "Welcome",
			children: [
				{
					path: "",
					element: /* @__PURE__ */ (0, Y.jsx)(P, {
						to: "1",
						replace: !0
					})
				},
				{
					path: "1",
					lazy: J(() => import("./step-1-9IHheE78.js"))
				},
				{
					path: "2",
					lazy: J(() => import("./step-2-CVhaiGO3.js"))
				},
				{
					path: "3",
					lazy: J(() => import("./step-3-DBERnfa-.js"))
				},
				{
					path: "*",
					element: /* @__PURE__ */ (0, Y.jsx)(P, {
						to: "1",
						replace: !0
					})
				}
			]
		},
		{
			path: "*",
			lazy: J(() => Promise.resolve().then(() => nc))
		}
	]
}];
//#endregion
export { Qr as $, lo as A, ba as B, ms as C, cs as D, us as E, ma as F, Fi as G, xa as H, Ca as I, Kr as J, Ii as K, wa as L, Aa as M, Ea as N, uo as O, Ta as P, $r as Q, va as R, ys as S, fs as T, ha as U, ya as V, Ni as W, Zr as X, Yr as Y, ti as Z, ws as _, Qs as a, ln as at, Ss as b, Ls as c, Nt as ct, As as d, gt as dt, ei as et, Ps as f, mt as ft, ks as g, at as gt, Ts as h, lt as ht, ec as i, _r as it, Na as j, co as k, Fs as l, At as lt, Ns as m, dt as mt, tc as n, vr as nt, Xs as o, Ht as ot, Ms as p, pt, Pi as q, $s as r, Z as rt, Us as s, It as st, rc as t, qr as tt, js as u, _t as ut, Cs as v, ps as w, bs as x, xs as y, Sa as z };

//# sourceMappingURL=routes-BRndai50.js.map