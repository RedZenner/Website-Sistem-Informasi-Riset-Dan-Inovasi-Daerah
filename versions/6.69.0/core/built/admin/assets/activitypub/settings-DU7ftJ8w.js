import { T as e, _ as t, c as n, d as r, g as i, u as a, v as o, w as s } from "./_react-D4KM8XEu.js";
import { t as c, w as l } from "./chunk-OB3PAWPO-BZOqgbiV.js";
import { C as u, D as d, J as f, M as p, N as m, O as h, P as g, j as _, m as v, n as y, r as b, t as x } from "./use-navigate-with-base-path-CWS9sZhM.js";
import { Z as S } from "./use-activity-pub-queries-CGgtQrxL.js";
import { $ as C, J as w, X as T, et as E, ft as D, tt as O, ut as k } from "./routes-BRndai50.js";
import { t as A } from "./edit-profile-9EodzviR.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-collection@1.1.11_@types+react-dom@18.3.7_@types+react@18.3.31__@types+_d63a01f8f2419583266dd4480c0aa94b/node_modules/@radix-ui/react-collection/dist/index.mjs
r();
var j = l();
function M(e) {
	let t = e + "CollectionProvider", [n, r] = p(t), [c, l] = n(t, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), u = (e) => {
		let { scope: t, children: n } = e, r = s(null), i = s(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ (0, j.jsx)(c, {
			scope: t,
			itemMap: i,
			collectionRef: r,
			children: n
		});
	};
	u.displayName = t;
	let d = e + "CollectionSlot", f = _(d), h = a((e, t) => {
		let { scope: n, children: r } = e, i = m(t, l(d, n).collectionRef);
		return /* @__PURE__ */ (0, j.jsx)(f, {
			ref: i,
			children: r
		});
	});
	h.displayName = d;
	let g = e + "CollectionItemSlot", v = "data-radix-collection-item", y = _(g), b = a((e, t) => {
		let { scope: n, children: r, ...i } = e, a = s(null), c = m(t, a), u = l(g, n);
		return o(() => (u.itemMap.set(a, {
			ref: a,
			...i
		}), () => void u.itemMap.delete(a))), /* @__PURE__ */ (0, j.jsx)(y, {
			[v]: "",
			ref: c,
			children: r
		});
	});
	b.displayName = g;
	function x(t) {
		let n = l(e + "CollectionConsumer", t);
		return i(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${v}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return [
		{
			Provider: u,
			Slot: h,
			ItemSlot: b
		},
		x,
		r
	];
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-direction@1.1.2_@types+react@18.3.31_react@18.3.1/node_modules/@radix-ui/react-direction/dist/index.mjs
r();
var N = n(void 0);
function P(e) {
	let n = t(N);
	return e || n || "ltr";
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-roving-focus@1.1.14_@types+react-dom@18.3.7_@types+react@18.3.31__@type_a513f2abd288270d6d7328308a8fd3e4/node_modules/@radix-ui/react-roving-focus/dist/index.mjs
r();
var F = "rovingFocusGroup.onEntryFocus", ee = {
	bubbles: !1,
	cancelable: !0
}, I = "RovingFocusGroup", [L, R, te] = M(I), [ne, z] = p(I, [te]), [B, re] = ne(I), V = a((e, t) => /* @__PURE__ */ (0, j.jsx)(L.Provider, {
	scope: e.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ (0, j.jsx)(L.Slot, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ (0, j.jsx)(ie, {
			...e,
			ref: t
		})
	})
}));
V.displayName = I;
var ie = a((t, n) => {
	let { __scopeRovingFocusGroup: r, orientation: a, loop: c = !1, dir: l, currentTabStopId: u, defaultCurrentTabStopId: f, onCurrentTabStopIdChange: p, onEntryFocus: _, preventScrollOnEntryFocus: y = !1, ...b } = t, x = s(null), S = m(n, x), C = P(l), [w, T] = v({
		prop: u,
		defaultProp: f ?? null,
		onChange: p,
		caller: I
	}), [E, D] = e(!1), O = d(_), k = R(r), A = s(!1), [M, N] = e(0);
	return o(() => {
		let e = x.current;
		if (e) return e.addEventListener(F, O), () => e.removeEventListener(F, O);
	}, [O]), /* @__PURE__ */ (0, j.jsx)(B, {
		scope: r,
		orientation: a,
		dir: C,
		loop: c,
		currentTabStopId: w,
		onItemFocus: i((e) => T(e), [T]),
		onItemShiftTab: i(() => D(!0), []),
		onFocusableItemAdd: i(() => N((e) => e + 1), []),
		onFocusableItemRemove: i(() => N((e) => e - 1), []),
		children: /* @__PURE__ */ (0, j.jsx)(h.div, {
			tabIndex: E || M === 0 ? -1 : 0,
			"data-orientation": a,
			...b,
			ref: S,
			style: {
				outline: "none",
				...t.style
			},
			onMouseDown: g(t.onMouseDown, () => {
				A.current = !0;
			}),
			onFocus: g(t.onFocus, (e) => {
				let t = !A.current;
				if (e.target === e.currentTarget && t && !E) {
					let t = new CustomEvent(F, ee);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = k().filter((e) => e.focusable);
						K([
							e.find((e) => e.active),
							e.find((e) => e.id === w),
							...e
						].filter(Boolean).map((e) => e.ref.current), y);
					}
				}
				A.current = !1;
			}),
			onBlur: g(t.onBlur, () => D(!1))
		})
	});
}), H = "RovingFocusGroupItem", U = a((e, t) => {
	let { __scopeRovingFocusGroup: n, focusable: r = !0, active: i = !1, tabStopId: a, children: s, ...c } = e, l = u(), d = a || l, f = re(H, n), p = f.currentTabStopId === d, m = R(n), { onFocusableItemAdd: _, onFocusableItemRemove: v, currentTabStopId: y } = f;
	return o(() => {
		if (r) return _(), () => v();
	}, [
		r,
		_,
		v
	]), /* @__PURE__ */ (0, j.jsx)(L.ItemSlot, {
		scope: n,
		id: d,
		focusable: r,
		active: i,
		children: /* @__PURE__ */ (0, j.jsx)(h.span, {
			tabIndex: p ? 0 : -1,
			"data-orientation": f.orientation,
			...c,
			ref: t,
			onMouseDown: g(e.onMouseDown, (e) => {
				r ? f.onItemFocus(d) : e.preventDefault();
			}),
			onFocus: g(e.onFocus, () => f.onItemFocus(d)),
			onKeyDown: g(e.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					f.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = G(e, f.orientation, f.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = m().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = f.loop ? q(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => K(n));
				}
			}),
			children: typeof s == "function" ? s({
				isCurrentTabStop: p,
				hasTabStop: y != null
			}) : s
		})
	});
});
U.displayName = H;
var ae = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function W(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function G(e, t, n) {
	let r = W(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return ae[r];
}
function K(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function q(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var oe = V, se = U;
//#endregion
//#region src/views/preferences/components/settings.tsx
r();
var ce = ({ account: t, className: n = "" }) => {
	let [r, i] = e(!1), a = x();
	return /* @__PURE__ */ (0, j.jsxs)("div", {
		className: `flex flex-col ${n}`,
		children: [
			/* @__PURE__ */ (0, j.jsx)($, {}),
			/* @__PURE__ */ (0, j.jsxs)(Q, { children: [/* @__PURE__ */ (0, j.jsxs)(X, { children: [/* @__PURE__ */ (0, j.jsx)(J, { children: "Profile" }), /* @__PURE__ */ (0, j.jsx)(Y, { children: "Edit your profile information and account details" })] }), /* @__PURE__ */ (0, j.jsxs)(w, {
				open: r,
				onOpenChange: i,
				children: [/* @__PURE__ */ (0, j.jsx)(O, { children: /* @__PURE__ */ (0, j.jsx)(Z, { children: /* @__PURE__ */ (0, j.jsx)(b, {
					variant: "secondary",
					children: "Edit"
				}) }) }), /* @__PURE__ */ (0, j.jsxs)(T, {
					onOpenAutoFocus: (e) => e.preventDefault(),
					children: [/* @__PURE__ */ (0, j.jsx)(C, { children: /* @__PURE__ */ (0, j.jsx)(E, { children: "Profile settings" }) }), t && /* @__PURE__ */ (0, j.jsx)(A, {
						account: t,
						setIsEditingProfile: i
					})]
				})]
			})] }),
			/* @__PURE__ */ (0, j.jsxs)(Q, {
				to: "/preferences/handle",
				withHover: !0,
				children: [/* @__PURE__ */ (0, j.jsxs)(X, { children: [/* @__PURE__ */ (0, j.jsx)(J, { children: "Social web handle" }), /* @__PURE__ */ (0, j.jsx)(Y, { children: "Set your account username and domain" })] }), /* @__PURE__ */ (0, j.jsx)(Z, {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, j.jsx)(D, { size: 20 })
				})]
			}),
			/* @__PURE__ */ (0, j.jsxs)(Q, {
				to: "/preferences/moderation",
				withHover: !0,
				children: [/* @__PURE__ */ (0, j.jsxs)(X, { children: [/* @__PURE__ */ (0, j.jsx)(J, { children: "Moderation" }), /* @__PURE__ */ (0, j.jsx)(Y, { children: "Manage blocked users and domains" })] }), /* @__PURE__ */ (0, j.jsx)(Z, {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, j.jsx)(D, { size: 20 })
				})]
			}),
			/* @__PURE__ */ (0, j.jsxs)(Q, {
				withHover: !0,
				onClick: () => a("/preferences/bluesky-sharing"),
				children: [/* @__PURE__ */ (0, j.jsxs)(X, { children: [/* @__PURE__ */ (0, j.jsx)(J, { children: "Bluesky sharing" }), /* @__PURE__ */ (0, j.jsx)(Y, { children: "Share content directly on Bluesky" })] }), /* @__PURE__ */ (0, j.jsxs)(Z, {
					className: "flex items-center gap-2",
					children: [t?.blueskyEnabled ? /* @__PURE__ */ (0, j.jsx)("span", {
						className: "font-medium text-black",
						children: "On"
					}) : /* @__PURE__ */ (0, j.jsx)("span", { children: "Off" }), /* @__PURE__ */ (0, j.jsx)(D, { size: 20 })]
				})]
			}),
			/* @__PURE__ */ (0, j.jsxs)(Q, {
				to: "/preferences/move",
				withHover: !0,
				children: [/* @__PURE__ */ (0, j.jsxs)(X, { children: [/* @__PURE__ */ (0, j.jsx)(J, { children: "Account migration" }), /* @__PURE__ */ (0, j.jsx)(Y, { children: "Move another social web account to this one" })] }), /* @__PURE__ */ (0, j.jsx)(Z, {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, j.jsx)(D, { size: 20 })
				})]
			}),
			/* @__PURE__ */ (0, j.jsx)($, {}),
			/* @__PURE__ */ (0, j.jsxs)(Q, {
				href: "https://ghost.org/help/social-web/",
				withHover: !0,
				children: [/* @__PURE__ */ (0, j.jsxs)(X, { children: [/* @__PURE__ */ (0, j.jsx)(J, { children: "Help" }), /* @__PURE__ */ (0, j.jsx)(Y, { children: "Social web guides and support resources" })] }), /* @__PURE__ */ (0, j.jsx)(Z, { children: /* @__PURE__ */ (0, j.jsx)(k, { size: 18 }) })]
			})
		]
	});
}, J = S, Y = ({ children: e, className: t = "" }) => /* @__PURE__ */ (0, j.jsx)("span", {
	className: `text-sm text-gray-700 ${t}`,
	children: e
}), X = ({ children: e, className: t = "" }) => /* @__PURE__ */ (0, j.jsx)("div", {
	className: `relative flex flex-col gap-0.5 ${t}`,
	children: e
}), Z = ({ children: e, className: t = "" }) => /* @__PURE__ */ (0, j.jsx)("div", {
	className: `relative text-gray-500 ${t}`,
	children: e
}), Q = ({ children: e, className: t = "", withHover: n = !1, to: r, href: i, onClick: a }) => {
	let o = y(), s = f("flex items-center justify-between py-3 gap-4", n ? "relative cursor-pointer before:absolute before:inset-x-[-16px] before:inset-y-[-1px] before:rounded-md before:bg-gray-50 before:opacity-0 before:transition-opacity before:will-change-[opacity] hover:z-10 hover:cursor-pointer hover:border-b-transparent hover:before:opacity-100 dark:before:bg-gray-950" : "", t), l = r && r.startsWith("/") ? `${o}${r}` : r;
	return l ? /* @__PURE__ */ (0, j.jsx)(c, {
		className: s,
		to: l,
		children: e
	}) : i ? /* @__PURE__ */ (0, j.jsx)("a", {
		className: s,
		href: i,
		rel: "noreferrer",
		target: "_blank",
		children: e
	}) : a ? /* @__PURE__ */ (0, j.jsx)("div", {
		className: s,
		role: "button",
		tabIndex: 0,
		onClick: a,
		children: e
	}) : /* @__PURE__ */ (0, j.jsx)("div", {
		className: s,
		children: e
	});
}, $ = () => /* @__PURE__ */ (0, j.jsx)("hr", { className: "my-3 h-px border-0 bg-gray-200 dark:bg-gray-950" });
//#endregion
export { J as a, oe as c, M as d, Q as i, z as l, Y as n, ce as o, X as r, se as s, Z as t, P as u };

//# sourceMappingURL=settings-DU7ftJ8w.js.map