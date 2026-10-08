import { T as e, a as t, d as n, v as r, w as i } from "./_react-D4KM8XEu.js";
import { w as a } from "./chunk-OB3PAWPO-BZOqgbiV.js";
import { G as o, J as s, K as c, W as l, d as u, f as ee, l as te, r as d, u as ne } from "./use-navigate-with-base-path-CWS9sZhM.js";
import { B as re, V as ie, W as ae, Y as oe, a as se, r as ce } from "./use-activity-pub-queries-CGgtQrxL.js";
import { N as f, P as p, a as le } from "./routes-BRndai50.js";
import { d as ue, u as m } from "./content-formatters-G0qBT5QE.js";
import { t as de } from "./copy-DdEdc3XW.js";
import { i as h, r as g, t as _ } from "./field-CsrMjbg2.js";
import "./layout-CvOhndCA.js";
import { n as fe, t as v } from "./social-web-handle-251Wqk4d.js";
import { t as pe } from "./site-D1ZYV3AT.js";
//#region ../shade/es/components/primitives/inline.js
n();
var y = a(), b = t.forwardRef(function({ as: e = "div", className: t, gap: n = "md", align: r = "center", justify: i = "start", wrap: a = !1, ...u }, ee) {
	return /* @__PURE__ */ (0, y.jsx)(e, {
		ref: ee,
		className: s("flex flex-row", a ? "flex-wrap" : "flex-nowrap", o[n], l[r], c[i], t),
		...u
	});
});
//#endregion
//#region src/views/preferences/components/domain.tsx
b.displayName = "Inline", n();
function me(e) {
	let t = e.trim();
	if (t === "") return null;
	try {
		return new URL(t.includes("://") ? t : `https://${t}`).host || null;
	} catch {
		return t.replace(/^[a-z][a-z\d+\-.]*:\/\//i, "").split(/[/?#]/)[0] || null;
	}
}
function he(e, t) {
	if (e) try {
		return new URL(e).host;
	} catch {}
	return t?.split("@").at(-1) ?? "";
}
function ge(e, t) {
	if (!e) return "";
	try {
		return new URL(e, t || window.location.origin).toString();
	} catch {
		return e;
	}
}
async function _e(e) {
	if (navigator.clipboard?.writeText) try {
		await navigator.clipboard.writeText(e);
		return;
	} catch {}
	let t = document.createElement("textarea");
	t.value = e, t.setAttribute("readonly", ""), t.style.position = "fixed", t.style.left = "-9999px", t.style.top = "0", document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t);
}
var x = () => {
	let { data: t, isLoading: n } = se("index", "me"), { data: a } = pe(), { data: o, isLoading: s, isError: c } = ce("index"), l = re("index"), x = ae("index"), S = ie(t?.handle || "index"), [C, w] = e(""), [T, E] = e(""), [D, O] = e(null), [k, A] = e(!1), [j, M] = e(!1), [N, P] = e(!1), [F, I] = e(null), [L, R] = e(null), [z, B] = e(null), [ve, V] = e(!1), [ye, H] = e(!1), U = i(null);
	r(() => {
		t?.handle && (E(v(t.handle).username), O(null));
	}, [t?.handle]), r(() => () => {
		U.current && window.clearTimeout(U.current);
	}, []);
	let W = me(C), G = o?.domain ?? null, K = he(o?.actorUrl, o?.handle), q = v(t?.handle).username, J = S.isPending, be = l.isPending || x.isPending, Y = s || be, X = n || J || !t, xe = !!(k && T !== q), Z = !!(N && W && (!G || F === W)), Se = !!(j && W && !N), Ce = !!(Z && W && W !== F), we = !!(F && W === F), Te = W ? `https://${W}/.well-known/webfinger` : "", Ee = K ? `https://${K}/.well-known/webfinger` : "", De = v(o?.handle), Q = {
		username: k ? T : De.username,
		domain: (j || N) && C ? W ?? C.trim() : De.domain
	}, Oe = `@${Q.username}@${Q.domain}`, ke = ge(t?.avatarUrl || a?.site?.icon, a?.site?.url), Ae = (e) => {
		e.preventDefault();
		let t = me(new FormData(e.currentTarget).get("domain")?.toString() ?? "");
		t && (w(t), M(!0), P(!0), R(null), B(null));
	}, je = async () => {
		if (!(!W || !Ce)) {
			R(null), B(null);
			try {
				await x.mutateAsync(W), I(W);
			} catch {
				B("Redirect could not be validated");
			}
		}
	}, Me = async () => {
		if (F) {
			R(null), B(null);
			try {
				await l.mutateAsync(F), w(""), M(!1), P(!1), I(null);
			} catch {
				R("Could not save the custom domain. Try again.");
			}
		}
	}, $ = () => {
		w(""), M(!1), P(!1), I(null), R(null), B(null);
	}, Ne = async () => {
		if (!t || !k || !xe) return;
		let e = fe(T);
		if (e) {
			O(e);
			return;
		}
		O(null);
		try {
			await S.mutateAsync({
				name: t.name,
				username: T,
				bio: t.bio ?? "",
				avatarUrl: t.avatarUrl || "",
				bannerImageUrl: t.bannerImageUrl || ""
			}), A(!1);
		} catch {
			O("Could not save the Social Web username. Try again.");
		}
	}, Pe = () => {
		E(q), O(null), A(!1);
	}, Fe = async () => {
		R(null);
		try {
			await l.mutateAsync(null), w(""), M(!1), P(!1), I(null);
		} catch {
			R("Could not remove the custom domain. Try again.");
		}
	}, Ie = async () => {
		!Q.username || !Q.domain || (await _e(Oe), V(!0), H(!0), U.current && window.clearTimeout(U.current), U.current = window.setTimeout(() => {
			V(!1), H(!1);
		}, 2e3));
	};
	return /* @__PURE__ */ (0, y.jsx)(le, { children: /* @__PURE__ */ (0, y.jsxs)("div", {
		className: "mx-auto max-w-[620px] py-[min(4vh,48px)]",
		children: [
			/* @__PURE__ */ (0, y.jsx)(b, {
				gap: "2xl",
				justify: "between",
				children: /* @__PURE__ */ (0, y.jsx)(oe, { children: "Your social web handle" })
			}),
			/* @__PURE__ */ (0, y.jsx)("p", {
				className: "mt-3 text-base text-muted-foreground",
				children: "Like an email address, your handle is how people can find and interact with you."
			}),
			/* @__PURE__ */ (0, y.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, y.jsx)("div", {
					className: "rounded-md border border-border-default bg-sidebar px-4 pt-3 pb-4",
					children: /* @__PURE__ */ (0, y.jsx)(_, { children: s ? /* @__PURE__ */ (0, y.jsx)(m, { className: "mt-2 h-16 w-full" }) : c ? /* @__PURE__ */ (0, y.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Could not load your Social Web handle."
					}) : /* @__PURE__ */ (0, y.jsxs)("div", {
						className: "mt-3 flex items-start gap-2",
						children: [/* @__PURE__ */ (0, y.jsx)("div", {
							className: "mt-[-5px] flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface-elevated text-muted-foreground ring-1 ring-border-default",
							children: n ? /* @__PURE__ */ (0, y.jsx)(m, { className: "size-7 rounded-full" }) : ke ? /* @__PURE__ */ (0, y.jsx)("img", {
								alt: t?.name || a?.site?.title || "",
								className: "size-full rounded-full object-cover",
								referrerPolicy: "no-referrer",
								src: ke
							}) : /* @__PURE__ */ (0, y.jsx)(ue, {
								className: "size-4",
								strokeWidth: 1.5
							})
						}), /* @__PURE__ */ (0, y.jsx)("div", {
							className: "-ml-14 min-w-0 overflow-x-auto px-14",
							children: /* @__PURE__ */ (0, y.jsxs)("div", {
								"aria-label": "Social Web handle breakdown",
								className: "inline-flex pb-9 font-mono text-xl leading-none font-medium whitespace-nowrap text-foreground select-none",
								role: "group",
								children: [
									/* @__PURE__ */ (0, y.jsx)("span", { children: "@" }),
									/* @__PURE__ */ (0, y.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, y.jsx)("span", { children: Q.username }), /* @__PURE__ */ (0, y.jsxs)("div", {
											className: "absolute top-7 left-0 w-full border-t border-border-strong before:absolute before:top-[-5px] before:left-0 before:h-[5px] before:border-l before:border-border-strong after:absolute after:top-[-5px] after:right-0 after:h-[5px] after:border-l after:border-border-strong",
											children: [/* @__PURE__ */ (0, y.jsx)("span", {
												"aria-hidden": "true",
												className: "absolute top-0 left-1/2 h-[5px] border-l border-border-strong"
											}), /* @__PURE__ */ (0, y.jsx)("div", {
												className: "absolute top-2 right-0 w-max min-w-full text-center font-sans text-[10px] leading-normal font-medium whitespace-nowrap text-muted-foreground uppercase",
												children: "Username"
											})]
										})]
									}),
									/* @__PURE__ */ (0, y.jsx)("span", {
										className: "ml-px",
										children: "@"
									}),
									/* @__PURE__ */ (0, y.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, y.jsx)("span", { children: Q.domain }), /* @__PURE__ */ (0, y.jsxs)("div", {
											className: "absolute top-7 left-0 w-full border-t border-state-success before:absolute before:top-[-5px] before:left-0 before:h-[5px] before:border-l before:border-state-success after:absolute after:top-[-5px] after:right-0 after:h-[5px] after:border-l after:border-state-success",
											children: [/* @__PURE__ */ (0, y.jsx)("span", {
												"aria-hidden": "true",
												className: "absolute top-0 left-1/2 h-[5px] border-l border-state-success"
											}), /* @__PURE__ */ (0, y.jsx)("div", {
												className: "absolute top-2 left-0 w-max min-w-full text-center font-sans text-[10px] leading-normal font-medium whitespace-nowrap text-state-success uppercase",
												children: "Domain"
											})]
										})]
									}),
									o?.handle && /* @__PURE__ */ (0, y.jsx)(u, {
										delayDuration: 0,
										children: /* @__PURE__ */ (0, y.jsxs)(te, {
											open: ye,
											onOpenChange: H,
											children: [/* @__PURE__ */ (0, y.jsx)(ee, {
												asChild: !0,
												children: /* @__PURE__ */ (0, y.jsx)(d, {
													"aria-label": "Copy Social Web handle",
													className: "mt-[-2px] ml-1.5 size-5 shrink-0 self-start p-0 text-muted-foreground hover:text-foreground [&_svg]:size-3.5!",
													type: "button",
													variant: "ghost",
													onClick: () => {
														Ie();
													},
													children: /* @__PURE__ */ (0, y.jsx)(de, { size: 12 })
												})
											}), /* @__PURE__ */ (0, y.jsx)(ne, { children: ve ? "Copied!" : "Copy" })]
										})
									})
								]
							})
						})]
					}) })
				})
			}),
			/* @__PURE__ */ (0, y.jsx)("form", {
				className: "mt-10",
				onSubmit: (e) => {
					e.preventDefault(), Ne();
				},
				children: /* @__PURE__ */ (0, y.jsxs)(_, { children: [
					/* @__PURE__ */ (0, y.jsx)(h, {
						htmlFor: "social-web-username",
						children: "Social web username"
					}),
					n ? /* @__PURE__ */ (0, y.jsx)(m, { className: "h-9 w-full" }) : /* @__PURE__ */ (0, y.jsxs)(b, {
						className: "flex-col items-stretch sm:flex-row sm:items-center",
						gap: "md",
						children: [/* @__PURE__ */ (0, y.jsx)(p, {
							"aria-describedby": D ? "social-web-username-error" : void 0,
							"aria-invalid": D ? !0 : void 0,
							autoComplete: "off",
							className: "sm:flex-1",
							disabled: X || !k,
							id: "social-web-username",
							value: T,
							"data-1p-ignore": !0,
							onChange: (e) => {
								E(e.target.value), O(null);
							}
						}), k ? /* @__PURE__ */ (0, y.jsxs)(b, {
							gap: "md",
							justify: "end",
							children: [/* @__PURE__ */ (0, y.jsx)(d, {
								className: "h-9 text-sm sm:w-auto",
								disabled: J,
								type: "button",
								variant: "outline",
								onClick: Pe,
								children: "Cancel"
							}), /* @__PURE__ */ (0, y.jsx)(d, {
								className: "h-9 text-sm sm:w-auto",
								disabled: X || !xe,
								type: "submit",
								children: J ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)(f, {
									color: "light",
									size: "sm"
								}), "Saving..."] }) : "Save"
							})]
						}) : /* @__PURE__ */ (0, y.jsx)(d, {
							"aria-label": "Edit Social web username",
							className: "h-9 text-sm sm:w-auto",
							disabled: X,
							type: "button",
							variant: "outline",
							onClick: () => {
								E(q), O(null), A(!0);
							},
							children: "Edit"
						})]
					}),
					D && /* @__PURE__ */ (0, y.jsx)(g, {
						id: "social-web-username-error",
						children: D
					})
				] })
			}),
			/* @__PURE__ */ (0, y.jsx)("div", {
				className: "mt-10",
				children: G && !F ? /* @__PURE__ */ (0, y.jsxs)(_, {
					"data-invalid": L ? !0 : void 0,
					children: [
						/* @__PURE__ */ (0, y.jsx)(h, {
							htmlFor: "social-web-active-domain",
							children: "Social web domain"
						}),
						/* @__PURE__ */ (0, y.jsxs)(b, {
							className: "flex-col items-stretch sm:flex-row sm:items-center",
							gap: "md",
							children: [/* @__PURE__ */ (0, y.jsx)(p, {
								"aria-label": "Active social web domain",
								autoComplete: "off",
								className: "sm:flex-1",
								id: "social-web-active-domain",
								value: G,
								"data-1p-ignore": !0,
								disabled: !0
							}), /* @__PURE__ */ (0, y.jsx)(d, {
								className: "h-9 text-sm sm:w-auto",
								disabled: Y,
								variant: "outline",
								onClick: Fe,
								children: l.isPending ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)(f, { size: "sm" }), "Removing..."] }) : "Remove"
							})]
						}),
						L && /* @__PURE__ */ (0, y.jsx)(g, {
							id: "social-web-domain-error",
							children: L
						})
					]
				}) : /* @__PURE__ */ (0, y.jsxs)("form", {
					onSubmit: Ae,
					children: [
						/* @__PURE__ */ (0, y.jsxs)(_, {
							"data-invalid": L ? !0 : void 0,
							children: [
								/* @__PURE__ */ (0, y.jsx)(h, {
									htmlFor: "social-web-domain",
									children: "Social web domain"
								}),
								/* @__PURE__ */ (0, y.jsxs)(b, {
									className: "flex-col items-stretch sm:flex-row sm:items-center",
									gap: "md",
									children: [/* @__PURE__ */ (0, y.jsx)(p, {
										"aria-describedby": L ? "social-web-domain-error" : void 0,
										"aria-invalid": L ? !0 : void 0,
										"aria-label": "Social web domain",
										autoComplete: "off",
										className: "sm:flex-1",
										disabled: Y || !j || N,
										id: "social-web-domain",
										name: "domain",
										placeholder: K,
										value: j || N ? C : K,
										"data-1p-ignore": !0,
										onChange: (e) => {
											w(e.target.value), P(!1), I(null), R(null), B(null);
										}
									}), !Z && (j ? /* @__PURE__ */ (0, y.jsxs)(b, {
										gap: "md",
										justify: "end",
										children: [/* @__PURE__ */ (0, y.jsx)(d, {
											className: "h-9 text-sm sm:w-auto",
											disabled: Y,
											type: "button",
											variant: "outline",
											onClick: $,
											children: "Cancel"
										}), /* @__PURE__ */ (0, y.jsx)(d, {
											className: "h-9 text-sm sm:w-auto",
											disabled: Y || !Se || c,
											type: "submit",
											children: "Activate"
										})]
									}) : /* @__PURE__ */ (0, y.jsx)(d, {
										"aria-label": "Edit Social web domain",
										className: "h-9 text-sm sm:w-auto",
										disabled: Y || c,
										type: "button",
										variant: "outline",
										onClick: () => {
											w(""), R(null), B(null), M(!0);
										},
										children: "Edit"
									}))]
								}),
								L && /* @__PURE__ */ (0, y.jsx)(g, {
									id: "social-web-domain-error",
									children: L
								})
							]
						}),
						Z && /* @__PURE__ */ (0, y.jsxs)("div", {
							className: "mt-6 rounded-md border border-border-default bg-surface-elevated p-4",
							children: [
								/* @__PURE__ */ (0, y.jsx)("div", {
									className: "text-sm font-medium text-foreground",
									children: "Set up your redirect"
								}),
								/* @__PURE__ */ (0, y.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Add a redirect or proxy service to forward social web requests to Ghost."
								}),
								/* @__PURE__ */ (0, y.jsxs)("div", {
									className: "mt-4 flex flex-col gap-3 text-sm",
									children: [/* @__PURE__ */ (0, y.jsxs)("div", { children: [/* @__PURE__ */ (0, y.jsx)("div", {
										className: "text-muted-foreground",
										children: "Redirect from"
									}), /* @__PURE__ */ (0, y.jsx)("code", {
										className: "mt-1 block overflow-x-auto rounded-sm bg-background px-3 py-2 text-foreground",
										children: Te
									})] }), /* @__PURE__ */ (0, y.jsxs)("div", { children: [/* @__PURE__ */ (0, y.jsx)("div", {
										className: "text-muted-foreground",
										children: "Redirect to"
									}), /* @__PURE__ */ (0, y.jsx)("code", {
										className: "mt-1 block overflow-x-auto rounded-sm bg-background px-3 py-2 text-foreground",
										children: Ee
									})] })]
								})
							]
						}),
						Z && /* @__PURE__ */ (0, y.jsxs)(b, {
							className: "mt-4 flex-col items-stretch sm:flex-row sm:items-center",
							gap: "md",
							justify: "between",
							children: [/* @__PURE__ */ (0, y.jsx)("div", {
								className: "text-sm text-destructive",
								children: z
							}), /* @__PURE__ */ (0, y.jsxs)(b, {
								gap: "md",
								justify: "end",
								children: [/* @__PURE__ */ (0, y.jsx)(d, {
									disabled: Y,
									variant: "outline",
									onClick: $,
									children: "Cancel"
								}), we ? /* @__PURE__ */ (0, y.jsx)(d, {
									disabled: Y,
									onClick: Me,
									children: l.isPending ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)(f, {
										color: "light",
										size: "sm"
									}), "Saving..."] }) : "Save"
								}) : /* @__PURE__ */ (0, y.jsx)(d, {
									disabled: Y || !Ce || c,
									onClick: je,
									children: x.isPending ? /* @__PURE__ */ (0, y.jsxs)(y.Fragment, { children: [/* @__PURE__ */ (0, y.jsx)(f, {
										color: "light",
										size: "sm"
									}), "Validating..."] }) : z ? "Retry" : "Validate"
								})]
							})]
						})
					]
				})
			})
		]
	}) });
};
//#endregion
export { x as default };

//# sourceMappingURL=domain-B3UtdA1m.js.map