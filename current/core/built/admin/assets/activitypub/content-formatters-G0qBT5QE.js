import { S as e, T as t, a as n, d as r, v as i } from "./_react-D4KM8XEu.js";
import { m as a, w as o } from "./chunk-OB3PAWPO-BZOqgbiV.js";
import { J as s, Z as c, o as l, r as u, t as d } from "./use-navigate-with-base-path-CWS9sZhM.js";
import { R as f, y as p } from "./use-activity-pub-queries-CGgtQrxL.js";
var m = l("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]), h = l("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]), g = l("user-round", [["circle", {
	cx: "12",
	cy: "8",
	r: "5",
	key: "1hypcn"
}], ["path", {
	d: "M20 21a8 8 0 0 0-16 0",
	key: "rfgkzh"
}]]);
//#endregion
//#region ../shade/es/components/ui/skeleton.js
r();
var _ = o();
function v({ containerClassName: t, count: r = 1, randomize: i = !1, minWidth: a = 70, maxWidth: o = 100, className: c, ...l }) {
	let { randomWidths: u, keys: d } = e(() => {
		let e = [], t = [];
		for (let n = 0; n < r; n++) {
			if (i) {
				let t = Math.floor((o - a) / 5), n = a + Math.floor(Math.random() * (t + 1)) * 5;
				e.push(`${n}%`);
			}
			t.push(`skeleton-${n}`);
		}
		return {
			randomWidths: e,
			keys: t
		};
	}, [
		r,
		i,
		a,
		o
	]);
	return /* @__PURE__ */ (0, _.jsx)("span", {
		className: t,
		children: Array.from({ length: r }).map((e, t) => /* @__PURE__ */ (0, _.jsxs)(n.Fragment, { children: [/* @__PURE__ */ (0, _.jsx)("span", {
			className: s("inline-flex w-full animate-pulse rounded-[2px] bg-primary/10 leading-none", c),
			style: i ? { width: u[t] } : void 0,
			...l,
			children: "‌"
		}), /* @__PURE__ */ (0, _.jsx)("br", {})] }, d[t]))
	});
}
var ee = n.forwardRef(({ className: e, lines: t = 5, ...n }, r) => t < 1 ? /* @__PURE__ */ (0, _.jsx)(_.Fragment, {}) : /* @__PURE__ */ (0, _.jsx)("div", {
	ref: r,
	className: s("flex flex-col gap-2", e),
	...n,
	children: Array.from({ length: t }, (e, t) => {
		let n = "66%";
		switch (t % 5) {
			case 0:
				n = "57%";
				break;
			case 1:
				n = "33%";
				break;
			case 2:
				n = "40%";
				break;
			case 3:
				n = "48%";
				break;
			case 4:
				n = "24%";
				break;
		}
		return /* @__PURE__ */ (0, _.jsxs)("div", {
			className: "flex justify-between gap-6",
			children: [/* @__PURE__ */ (0, _.jsx)("div", {
				className: "grow",
				style: { maxWidth: n },
				children: /* @__PURE__ */ (0, _.jsx)(v, {})
			}), /* @__PURE__ */ (0, _.jsx)(v, { className: "w-[60px] self-end" })]
		}, t);
	})
}));
ee.displayName = "SkeletonTable";
//#endregion
//#region src/utils/get-handle.ts
function y(e) {
	if (e.handle) return e.handle;
	if (!e.preferredUsername || !e.id) return "@unknown@unknown";
	try {
		return `@${e.preferredUsername}@${new URL(e.id).hostname.replace(/^www\./, "")}`;
	} catch {
		return "@unknown@unknown";
	}
}
//#endregion
//#region src/components/global/ap-avatar.tsx
r();
var b = null, x = ({ onFollow: e, onUnfollow: t, authorHandle: r, followedByMe: i }) => {
	let [, a] = n.useReducer((e) => e + 1, 0), o = b === r && !i;
	return /* @__PURE__ */ (0, _.jsx)(u, {
		className: "absolute -right-1.5 bottom-px z-10 flex size-4 items-center justify-center rounded-full p-0 outline-2 outline-white transition-transform hover:scale-105 active:scale-100 dark:outline-black",
		title: o ? "Unfollow" : "Follow",
		onClick: (n) => {
			o ? (t(n), setTimeout(() => {
				b = null, a();
			}, 0)) : (b = r, a(), e(n));
		},
		children: o ? /* @__PURE__ */ (0, _.jsx)(m, { className: "-mb-px size-3! stroke-[2.4]!" }) : /* @__PURE__ */ (0, _.jsx)(h, { className: "size-[14px]! stroke-2!" })
	});
}, S = ({ author: e, size: n, isLoading: r = !1, disabled: o = !1, className: s = "", showFollowButton: l = !1 }) => {
	let u = 20, m = `shrink-0 items-center justify-center rounded-full relative z-10 flex bg-black/5 dark:bg-gray-900 ${n === "lg" || o ? "" : "cursor-pointer"} ${s}`, h = "z-10 object-cover rounded-full outline-[0.5px] outline-offset-[-0.5px] outline-black/10", [ee, S] = t(e?.icon?.url), te = d(), C = p("index", () => {
		a.success(`Followed ${e?.name}`);
	}, () => {
		a.error("Failed to follow");
	}), w = f("index", () => {
		a.info(`Unfollowed ${e?.name}`);
	}, () => {
		a.error("Failed to unfollow");
	});
	switch (i(() => {
		S(e?.icon?.url);
	}, [e?.icon?.url]), n) {
		case "2xs":
			u = 10, m = c("size-4", m), h = c("size-4", h);
			break;
		case "xs":
			u = 12, m = c("size-6", m), h = c("size-6", h);
			break;
		case "notification":
			u = 16, m = c("size-9", m), h = c("size-9", h);
			break;
		case "sm":
			m = c("size-10", m), h = c("size-10", h);
			break;
		case "md":
			m = c("size-[60px]", m), h = c("size-[60px]", h);
			break;
		case "lg":
			u = 32, m = c("size-22", m), h = c("size-22", h);
			break;
		default:
			m = c("size-10", m), h = c("size-10", h);
			break;
	}
	if (!e || r) return /* @__PURE__ */ (0, _.jsx)(v, {
		className: h,
		containerClassName: m
	});
	let T = y(e), ne = (e) => {
		e.stopPropagation(), te(`/profile/${T}`);
	}, E = (e) => {
		e.stopPropagation(), C.mutate(T);
	}, re = (e) => {
		e.stopPropagation(), w.mutate(T);
	}, D = l || b === T;
	return ee ? /* @__PURE__ */ (0, _.jsxs)("div", {
		className: m,
		onClick: n === "lg" || o ? void 0 : ne,
		children: [/* @__PURE__ */ (0, _.jsx)("img", {
			className: h,
			referrerPolicy: "no-referrer",
			src: ee,
			onError: () => S(void 0)
		}), D && /* @__PURE__ */ (0, _.jsx)(x, {
			authorHandle: T,
			followedByMe: !1,
			onFollow: E,
			onUnfollow: re
		})]
	}) : /* @__PURE__ */ (0, _.jsxs)("div", {
		className: m,
		onClick: o ? void 0 : ne,
		children: [/* @__PURE__ */ (0, _.jsx)(g, {
			className: "text-gray-600",
			size: u,
			strokeWidth: 1.5
		}), D && /* @__PURE__ */ (0, _.jsx)(x, {
			authorHandle: T,
			followedByMe: !1,
			onFollow: E,
			onUnfollow: re
		})]
	});
};
//#endregion
//#region ../../node_modules/.pnpm/dompurify@3.4.16/node_modules/dompurify/dist/purify.es.mjs
function te(e, t) {
	this.v = e, this.k = t;
}
function C(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function w(e) {
	if (Array.isArray(e)) return e;
}
function T(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function ne() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function E(e, t) {
	return w(e) || T(e, t) || re(e, t) || ne();
}
function re(e, t) {
	if (e) {
		if (typeof e == "string") return C(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? C(e, t) : void 0;
	}
}
function D(e) {
	var t, n;
	function r(t, n) {
		try {
			var a = e[t](n), o = a.value, s = o instanceof te;
			Promise.resolve(s ? o.v : o).then(function(n) {
				if (s) {
					var c = t === "return" && o.k ? t : "next";
					if (!o.k || n.done) return r(c, n);
					n = e[c](n).value;
				}
				i(!!a.done, n);
			}, function(e) {
				r("throw", e);
			});
		} catch (e) {
			i(2, e);
		}
	}
	function i(e, i) {
		e === 2 ? t.reject(i) : t.resolve({
			value: i,
			done: e
		}), (t = t.next) ? r(t.key, t.arg) : n = null;
	}
	this._invoke = function(e, i) {
		return new Promise(function(a, o) {
			var s = {
				key: e,
				arg: i,
				resolve: a,
				reject: o,
				next: null
			};
			n ? n = n.next = s : (t = n = s, r(e, i));
		});
	}, typeof e.return != "function" && (this.return = void 0);
}
D.prototype[typeof Symbol == "function" && Symbol.asyncIterator || "@@asyncIterator"] = function() {
	return this;
}, D.prototype.next = function(e) {
	return this._invoke("next", e);
}, D.prototype.throw = function(e) {
	return this._invoke("throw", e);
}, D.prototype.return = function(e) {
	return this._invoke("return", e);
};
var ie = Object.entries, ae = Object.setPrototypeOf, oe = Object.isFrozen, se = Object.getPrototypeOf, ce = Object.getOwnPropertyDescriptor, O = Object.freeze, k = Object.seal, le = Object.create, ue = typeof Reflect < "u" && Reflect, de = ue.apply, fe = ue.construct;
O ||= function(e) {
	return e;
}, k ||= function(e) {
	return e;
}, de ||= function(e, t) {
	var n = [...arguments].slice(2);
	return e.apply(t, n);
}, fe ||= function(e) {
	return new e(...[...arguments].slice(1));
};
var A = F(Array.prototype.forEach);
Array.prototype.indexOf;
var pe = F(Array.prototype.lastIndexOf), me = F(Array.prototype.pop), he = F(Array.prototype.push);
Array.prototype.slice;
var ge = F(Array.prototype.splice), _e = Array.isArray, ve = F(String.prototype.toLowerCase), ye = F(String.prototype.toString), be = F(String.prototype.match), xe = F(String.prototype.replace), Se = F(String.prototype.indexOf), Ce = F(String.prototype.trim), we = F(Number.prototype.toString), j = F(Boolean.prototype.toString), Te = typeof BigInt > "u" ? null : F(BigInt.prototype.toString), Ee = typeof Symbol > "u" ? null : F(Symbol.prototype.toString), M = F(Object.prototype.hasOwnProperty), De = F(Object.prototype.toString), N = F(RegExp.prototype.test), P = Oe(TypeError);
function F(e) {
	return function(t) {
		t instanceof RegExp && (t.lastIndex = 0);
		var n = [...arguments].slice(1);
		return de(e, t, n);
	};
}
function Oe(e) {
	return function() {
		return fe(e, [...arguments]);
	};
}
function I(e, t) {
	let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ve;
	if (ae && ae(e, null), !_e(t)) return e;
	let r = t.length;
	for (; r--;) {
		let i = t[r];
		if (typeof i == "string") {
			let e = n(i);
			e !== i && (oe(t) || (t[r] = e), i = e);
		}
		e[i] = !0;
	}
	return e;
}
function ke(e) {
	for (let t = 0; t < e.length; t++) M(e, t) || (e[t] = null);
	return e;
}
function L(e) {
	let t = le(null);
	for (let r of ie(e)) {
		var n = E(r, 2);
		let i = n[0], a = n[1];
		M(e, i) && (_e(a) ? t[i] = ke(a) : a && typeof a == "object" && a.constructor === Object ? t[i] = L(a) : t[i] = a);
	}
	return t;
}
function Ae(e) {
	switch (typeof e) {
		case "string": return e;
		case "number": return we(e);
		case "boolean": return j(e);
		case "bigint": return Te ? Te(e) : "0";
		case "symbol": return Ee ? Ee(e) : "Symbol()";
		case "undefined": return De(e);
		case "function":
		case "object": {
			if (e === null) return De(e);
			let t = e, n = R(t, "toString");
			if (typeof n == "function") {
				let e = n(t);
				return typeof e == "string" ? e : De(e);
			}
			return De(e);
		}
		default: return De(e);
	}
}
function R(e, t) {
	for (; e !== null;) {
		let n = ce(e, t);
		if (n) {
			if (n.get) return F(n.get);
			if (typeof n.value == "function") return F(n.value);
		}
		e = se(e);
	}
	function n() {
		return null;
	}
	return n;
}
function je(e) {
	try {
		return N(e, ""), !0;
	} catch {
		return !1;
	}
}
var Me = O(/* @__PURE__ */ "a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr".split(".")), Ne = O(/* @__PURE__ */ "svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern".split(".")), Pe = O([
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence"
]), Fe = O([
	"animate",
	"color-profile",
	"cursor",
	"discard",
	"font-face",
	"font-face-format",
	"font-face-name",
	"font-face-src",
	"font-face-uri",
	"foreignobject",
	"hatch",
	"hatchpath",
	"mesh",
	"meshgradient",
	"meshpatch",
	"meshrow",
	"missing-glyph",
	"script",
	"set",
	"solidcolor",
	"unknown",
	"use"
]), Ie = O(/* @__PURE__ */ "math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts".split(".")), Le = O([
	"maction",
	"maligngroup",
	"malignmark",
	"mlongdiv",
	"mscarries",
	"mscarry",
	"msgroup",
	"mstack",
	"msline",
	"msrow",
	"semantics",
	"annotation",
	"annotation-xml",
	"mprescripts",
	"none"
]), Re = O(["#text"]), ze = O(/* @__PURE__ */ "accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns".split(".")), Be = O(/* @__PURE__ */ "accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dominant-baseline.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.pointer-events.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-orientation.text-rendering.textlength.type.u1.u2.unicode.values.vector-effect.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan".split(".")), Ve = O(/* @__PURE__ */ "accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns".split(".")), He = O([
	"xlink:href",
	"xml:id",
	"xlink:title",
	"xml:space",
	"xmlns:xlink"
]), Ue = k(/{{[\w\W]*|^[\w\W]*}}/g), We = k(/<%[\w\W]*|^[\w\W]*%>/g), Ge = k(/\${[\w\W]*/g), Ke = k(/^data-[\-\w.\u00B7-\uFFFF]+$/), qe = k(/^aria-[\-\w]+$/), Je = k(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), Ye = k(/^(?:\w+script|data):/i), Xe = k(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Ze = k(/^html$/i), Qe = k(/^[a-z][.\w]*(-[.\w]+)+$/i), $e = k(/<[/\w!]/g), et = k(/<[/\w]/g), tt = k(/<\/no(script|embed|frames)/i), nt = k(/\/>/i), z = {
	element: 1,
	attribute: 2,
	text: 3,
	cdataSection: 4,
	entityReference: 5,
	entityNode: 6,
	processingInstruction: 7,
	comment: 8,
	document: 9,
	documentType: 10,
	documentFragment: 11,
	notation: 12
}, rt = [
	"style",
	"script",
	"xmp",
	"iframe",
	"noembed",
	"noframes",
	"plaintext",
	"noscript"
], it = O(I({}, rt)), at = function() {
	let e = {};
	return A(rt, (t) => {
		e[t] = k(RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
	}), O(e);
}(), ot = function() {
	return typeof window > "u" ? null : window;
}, st = function(e, t) {
	if (typeof e != "object" || typeof e.createPolicy != "function") return null;
	let n = null, r = "data-tt-policy-suffix";
	t && t.hasAttribute(r) && (n = t.getAttribute(r));
	let i = "dompurify" + (n ? "#" + n : "");
	try {
		return e.createPolicy(i, {
			createHTML(e) {
				return e;
			},
			createScriptURL(e) {
				return e;
			}
		});
	} catch {
		return console.warn("TrustedTypes policy " + i + " could not be created."), null;
	}
}, ct = function() {
	return {
		afterSanitizeAttributes: [],
		afterSanitizeElements: [],
		afterSanitizeShadowDOM: [],
		beforeSanitizeAttributes: [],
		beforeSanitizeElements: [],
		beforeSanitizeShadowDOM: [],
		uponSanitizeAttribute: [],
		uponSanitizeElement: [],
		uponSanitizeShadowNode: []
	};
}, B = function(e, t, n, r) {
	return M(e, t) && _e(e[t]) ? I(r.base ? L(r.base) : {}, e[t], r.transform) : n;
}, lt = function(e, t, n) {
	let r = M(e, t) ? e[t] : void 0;
	return r && typeof r == "object" ? L(r) : n();
};
function ut() {
	let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ot(), t = (e) => ut(e);
	if (t.version = "3.4.16", t.removed = [], !e || !e.document || e.document.nodeType !== z.document || !e.Element) return t.isSupported = !1, t;
	let n = e.document, r = n, i = r.currentScript;
	e.DocumentFragment;
	let a = e.HTMLTemplateElement, o = e.Node, s = e.Element, c = e.NodeFilter;
	e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
	let l = e.DOMParser, u = e.trustedTypes, d = s.prototype, f = R(d, "cloneNode"), p = R(d, "remove"), m = R(d, "removeAttributeNode"), h = R(d, "nextSibling"), g = R(d, "childNodes"), _ = R(d, "parentNode"), v = R(d, "shadowRoot"), ee = R(d, "attributes"), y = o && o.prototype ? R(o.prototype, "nodeType") : null, b = o && o.prototype ? R(o.prototype, "nodeName") : null, x = o && o.prototype ? R(o.prototype, "ownerDocument") : null, S = function(e) {
		return y ? y(e) : e.nodeType;
	}, te = function(e) {
		return b ? b(e) : e.nodeName;
	};
	if (typeof a == "function") {
		let e = n.createElement("template");
		e.content && e.content.ownerDocument && (n = e.content.ownerDocument);
	}
	let C, w = "", T, ne = !1, E = 0, re = function() {
		if (E > 0) throw P("A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the \"DOMPurify and Trusted Types\" section of the README.");
	}, D = function(e) {
		re(), E++;
		try {
			return C.createHTML(e);
		} finally {
			E--;
		}
	}, ae = function(e) {
		re(), E++;
		try {
			return C.createScriptURL(e);
		} finally {
			E--;
		}
	}, oe = function() {
		return ne ||= (T = st(u, i), !0), T;
	}, se = n, ce = se.implementation, ue = se.createNodeIterator, de = se.createDocumentFragment, fe = se.getElementsByTagName, we = r.importNode, j = ct();
	t.isSupported = typeof ie == "function" && typeof _ == "function" && ce && ce.createHTMLDocument !== void 0;
	let Te = Ue, Ee = We, De = Ge, F = Ke, Oe = qe, ke = Ye, rt = Xe, dt = Qe, ft = Je, V = null, pt = I({}, [
		...Me,
		...Ne,
		...Pe,
		...Ie,
		...Re
	]), H = null, mt = I({}, [
		...ze,
		...Be,
		...Ve,
		...He
	]), U = Object.seal(le(null, {
		tagNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeNameCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		allowCustomizedBuiltInElements: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: !1
		}
	})), W = null, ht = null, G = Object.seal(le(null, {
		tagCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		},
		attributeCheck: {
			writable: !0,
			configurable: !1,
			enumerable: !0,
			value: null
		}
	})), gt = !0, _t = !0, vt = !1, yt = !0, K = !1, q = !0, J = !1, bt = !1, xt = null, St = null, Ct = !1, wt = !1, Tt = !1, Et = !1, Dt = !0, Ot = !1, kt = "user-content-", At = !0, jt = !1, Mt = {}, Nt = null, Pt = I({}, /* @__PURE__ */ "annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp".split(".")), Ft = null, It = I({}, [
		"audio",
		"video",
		"img",
		"source",
		"image",
		"track"
	]), Lt = null, Rt = I({}, [
		"alt",
		"class",
		"for",
		"id",
		"label",
		"name",
		"pattern",
		"placeholder",
		"role",
		"summary",
		"title",
		"value",
		"style",
		"xmlns"
	]), zt = "http://www.w3.org/1998/Math/MathML", Bt = "http://www.w3.org/2000/svg", Y = "http://www.w3.org/1999/xhtml", Vt = Y, Ht = !1, Ut = null, Wt = I({}, [
		zt,
		Bt,
		Y
	], ye), Gt = O([
		"mi",
		"mo",
		"mn",
		"ms",
		"mtext"
	]), Kt = I({}, Gt), qt = O(["annotation-xml"]), Jt = I({}, qt), Yt = I({}, [
		"title",
		"style",
		"font",
		"a",
		"script"
	]), Xt = null, Zt = ["application/xhtml+xml", "text/html"], X = null, Qt = null, $t = n.createElement("form"), en = function(e) {
		return e instanceof RegExp || e instanceof Function;
	}, tn = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		if (Qt && Qt === e) return;
		(!e || typeof e != "object") && (e = {}), e = L(e), Xt = Zt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? "text/html" : e.PARSER_MEDIA_TYPE, X = Xt === "application/xhtml+xml" ? ye : ve, V = B(e, "ALLOWED_TAGS", pt, { transform: X }), H = B(e, "ALLOWED_ATTR", mt, { transform: X }), Ut = B(e, "ALLOWED_NAMESPACES", Wt, { transform: ye }), Lt = B(e, "ADD_URI_SAFE_ATTR", Rt, {
			transform: X,
			base: Rt
		}), Ft = B(e, "ADD_DATA_URI_TAGS", It, {
			transform: X,
			base: It
		}), Nt = B(e, "FORBID_CONTENTS", Pt, { transform: X }), W = B(e, "FORBID_TAGS", L({}), { transform: X }), ht = B(e, "FORBID_ATTR", L({}), { transform: X }), Mt = M(e, "USE_PROFILES") ? e.USE_PROFILES && typeof e.USE_PROFILES == "object" ? L(e.USE_PROFILES) : e.USE_PROFILES : !1, gt = e.ALLOW_ARIA_ATTR !== !1, _t = e.ALLOW_DATA_ATTR !== !1, vt = e.ALLOW_UNKNOWN_PROTOCOLS || !1, yt = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, K = e.SAFE_FOR_TEMPLATES || !1, q = e.SAFE_FOR_XML !== !1, J = e.WHOLE_DOCUMENT || !1, wt = e.RETURN_DOM || !1, Tt = e.RETURN_DOM_FRAGMENT || !1, Et = e.RETURN_TRUSTED_TYPE || !1, Ct = e.FORCE_BODY || !1, Dt = e.SANITIZE_DOM !== !1, Ot = e.SANITIZE_NAMED_PROPS || !1, At = e.KEEP_CONTENT !== !1, jt = e.IN_PLACE || !1, ft = je(e.ALLOWED_URI_REGEXP) ? e.ALLOWED_URI_REGEXP : Je, Vt = typeof e.NAMESPACE == "string" ? e.NAMESPACE : Y, Kt = lt(e, "MATHML_TEXT_INTEGRATION_POINTS", () => I({}, Gt)), Jt = lt(e, "HTML_INTEGRATION_POINTS", () => I({}, qt));
		let t = lt(e, "CUSTOM_ELEMENT_HANDLING", () => le(null));
		if (U = le(null), M(t, "tagNameCheck") && en(t.tagNameCheck) && (U.tagNameCheck = t.tagNameCheck), M(t, "attributeNameCheck") && en(t.attributeNameCheck) && (U.attributeNameCheck = t.attributeNameCheck), M(t, "allowCustomizedBuiltInElements") && typeof t.allowCustomizedBuiltInElements == "boolean" && (U.allowCustomizedBuiltInElements = t.allowCustomizedBuiltInElements), k(U), K && (_t = !1), Tt && (wt = !0), Mt && (V = I({}, Re), H = le(null), Mt.html === !0 && (I(V, Me), I(H, ze)), Mt.svg === !0 && (I(V, Ne), I(H, Be), I(H, He)), Mt.svgFilters === !0 && (I(V, Pe), I(H, Be), I(H, He)), Mt.mathMl === !0 && (I(V, Ie), I(H, Ve), I(H, He))), G.tagCheck = null, G.attributeCheck = null, M(e, "ADD_TAGS") && (typeof e.ADD_TAGS == "function" ? G.tagCheck = e.ADD_TAGS : _e(e.ADD_TAGS) && (V === pt && (V = L(V)), I(V, e.ADD_TAGS, X))), M(e, "ADD_ATTR") && (typeof e.ADD_ATTR == "function" ? G.attributeCheck = e.ADD_ATTR : _e(e.ADD_ATTR) && (H === mt && (H = L(H)), I(H, e.ADD_ATTR, X))), M(e, "ADD_FORBID_CONTENTS") && _e(e.ADD_FORBID_CONTENTS) && (Nt === Pt && (Nt = L(Nt)), I(Nt, e.ADD_FORBID_CONTENTS, X)), At && (V["#text"] = !0), J && I(V, [
			"html",
			"head",
			"body"
		]), V.table && (I(V, ["tbody"]), delete W.tbody), e.TRUSTED_TYPES_POLICY) {
			if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") throw P("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
			if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw P("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
			let t = C;
			C = e.TRUSTED_TYPES_POLICY;
			try {
				w = D("");
			} catch (e) {
				throw C = t, e;
			}
		} else e.TRUSTED_TYPES_POLICY === null ? (C = void 0, w = "") : (C === void 0 && (C = oe()), C && typeof w == "string" && (w = D("")));
		O && O(e), Qt = e;
	}, nn = I({}, [
		...Ne,
		...Pe,
		...Fe
	]), rn = I({}, [...Ie, ...Le]), an = function(e, t, n) {
		return t.namespaceURI === Y ? e === "svg" : t.namespaceURI === zt ? e === "svg" && (n === "annotation-xml" || Kt[n]) : !!nn[e];
	}, on = function(e, t, n) {
		return t.namespaceURI === Y ? e === "math" : t.namespaceURI === Bt ? e === "math" && Jt[n] : !!rn[e];
	}, sn = function(e, t, n) {
		return t.namespaceURI === Bt && !Jt[n] || t.namespaceURI === zt && !Kt[n] ? !1 : !rn[e] && (Yt[e] || !nn[e]);
	}, cn = function(e) {
		let t = _(e);
		(!t || !t.tagName) && (t = {
			namespaceURI: Vt,
			tagName: "template"
		});
		let n = ve(e.tagName), r = ve(t.tagName);
		return Ut[e.namespaceURI] ? e.namespaceURI === Bt ? an(n, t, r) : e.namespaceURI === zt ? on(n, t, r) : e.namespaceURI === Y ? sn(n, t, r) : !!(Xt === "application/xhtml+xml" && Ut[e.namespaceURI]) : !1;
	}, Z = function(e) {
		he(t.removed, { element: e });
		try {
			_(e).removeChild(e);
		} catch {
			if (p(e), !_(e)) throw P("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
		}
	}, ln = function(e, t, n) {
		try {
			m(e, t);
		} catch {
			try {
				e.removeAttribute(n);
			} catch {}
		}
	}, un = function(e) {
		fn(e);
		let t = g(e);
		if (t) {
			let e = [];
			A(t, (t) => {
				he(e, t);
			}), A(e, (e) => {
				try {
					p(e);
				} catch {}
			});
		}
		let n = ee(e);
		if (n) for (let t = n.length - 1; t >= 0; --t) {
			let r = n[t], i = r && r.name;
			typeof i == "string" && ln(e, r, i);
		}
	}, Q = function(e, n, r) {
		if (!r) try {
			r = n.getAttributeNode(e);
		} catch {
			r = null;
		}
		he(t.removed, {
			attribute: r || null,
			from: n
		});
		try {
			r ? m(n, r) : n.removeAttribute(e);
		} catch {
			try {
				n.removeAttribute(e);
			} catch {}
		}
		if (e === "is") if (wt || Tt) try {
			Z(n);
		} catch {}
		else try {
			n.setAttribute(e, "");
		} catch {}
	}, dn = function(e) {
		let t = ee(e);
		if (t) for (let n = t.length - 1; n >= 0; --n) {
			let r = t[n], i = r && r.name;
			typeof i != "string" || H[X(i)] || ln(e, r, i);
		}
	}, fn = function(e) {
		let t = [e];
		for (; t.length > 0;) {
			let e = t.pop();
			S(e) === z.element && dn(e);
			let n = g(e);
			if (n) for (let e = n.length - 1; e >= 0; --e) t.push(n[e]);
		}
	}, pn = function(e, t) {
		return q ? e === "patchsrc" ? !0 : e === "for" && t !== "label" && t !== "output" : !1;
	}, mn = function(e) {
		if (!q) return;
		let t = [e];
		for (; t.length > 0;) {
			let e = t.pop(), n = S(e);
			if (n === z.processingInstruction || n === z.comment && N(et, e.data)) {
				try {
					p(e);
				} catch {}
				continue;
			}
			if (n === z.element) {
				let t = e, n = X(te(e));
				try {
					t.hasAttribute && t.hasAttribute("patchsrc") && t.removeAttribute("patchsrc"), t.hasAttribute && t.hasAttribute("for") && pn("for", n) && t.removeAttribute("for");
				} catch {}
			}
			let r = g(e);
			if (r) for (let e = r.length - 1; e >= 0; --e) t.push(r[e]);
		}
	}, hn = function(e) {
		let t = null, r = null;
		if (Ct) e = "<remove></remove>" + e;
		else {
			let t = be(e, /^[\r\n\t ]+/);
			r = t && t[0];
		}
		Xt === "application/xhtml+xml" && Vt === Y && (e = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + e + "</body></html>");
		let i = C ? D(e) : e;
		if (Vt === Y) try {
			t = new l().parseFromString(i, Xt);
		} catch {}
		if (!t || !t.documentElement) {
			t = ce.createDocument(Vt, "template", null);
			try {
				t.documentElement.innerHTML = Ht ? w : i;
			} catch {}
		}
		let a = t.body || t.documentElement;
		return e && r && a.insertBefore(n.createTextNode(r), a.childNodes[0] || null), Vt === Y ? fe.call(t, J ? "html" : "body")[0] : J ? t.documentElement : a;
	}, gn = function(e) {
		let t = x ? x(e) : e.ownerDocument;
		return ue.call(t || e, e, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION, null);
	}, _n = function(e) {
		return e = xe(e, Te, " "), e = xe(e, Ee, " "), e = xe(e, De, " "), e;
	}, vn = function(e) {
		e.normalize();
		let t = x ? x(e) : e.ownerDocument, n = ue.call(t || e, e, c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION, null), r = n.nextNode();
		for (; r;) r.data = _n(r.data), r = n.nextNode();
		let i = e.querySelectorAll?.call(e, "template");
		i && A(i, (e) => {
			bn(e.content) && vn(e.content);
		});
	}, yn = function(e) {
		let t = b ? b(e) : null;
		return typeof t != "string" || X(t) !== "form" ? !1 : typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || e.attributes !== ee(e) || typeof e.removeAttribute != "function" || typeof e.removeAttributeNode != "function" || typeof e.getAttributeNode != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function" || e.nodeType !== y(e) || e.childNodes !== g(e);
	}, bn = function(e) {
		if (!y || typeof e != "object" || !e) return !1;
		try {
			return y(e) === z.documentFragment;
		} catch {
			return !1;
		}
	}, xn = function(e) {
		if (!y || typeof e != "object" || !e) return !1;
		try {
			return typeof y(e) == "number";
		} catch {
			return !1;
		}
	};
	function $(e, n, r) {
		e.length !== 0 && A(e, (e) => {
			e.call(t, n, r, Qt);
		});
	}
	let Sn = function(e, t) {
		return !!(q && e.hasChildNodes() && !xn(e.firstElementChild) && N($e, e.textContent) && N($e, e.innerHTML) || q && e.namespaceURI === Y && it[t] && (xn(e.firstElementChild) || typeof e.textContent == "string" && N(at[t], e.textContent)) || e.nodeType === z.processingInstruction || q && e.nodeType === z.comment && N(et, e.data));
	}, Cn = function(e, t) {
		return e instanceof RegExp ? N(e, t) : e instanceof Function ? !!e(t, ...[...arguments].slice(2)) : !1;
	}, wn = function(e, t, n) {
		if (!W[t] && An(t) && Cn(U.tagNameCheck, t)) return !1;
		if (At && !Nt[t]) {
			let t = _(e), r = g(e);
			if (r && t) {
				let i = r.length;
				for (let a = i - 1; a >= 0; --a) {
					let i = e === n ? f(r[a], !0) : r[a];
					t.insertBefore(i, h(e));
				}
			}
		}
		return Z(e), !0;
	}, Tn = function(e, t, n, r) {
		return e.length === 0 ? t : t === n || t === r ? L(t) : t;
	}, En = function(e, t) {
		return e === t || _(e) !== null ? !1 : (jt && fn(e), !0);
	}, Dn = function(e, n) {
		if ($(j.beforeSanitizeElements, e, null), En(e, n)) return !0;
		if (yn(e)) return Z(e), !0;
		let r = X(te(e));
		if (V = Tn(j.uponSanitizeElement, V, pt, xt), $(j.uponSanitizeElement, e, {
			tagName: r,
			allowedTags: V
		}), En(e, n)) return !0;
		if (Sn(e, r)) return Z(e), !0;
		if (W[r] || !(G.tagCheck instanceof Function && G.tagCheck(r)) && !V[r]) {
			let t = wn(e, r, n);
			return t === !1 && ($(j.afterSanitizeElements, e, null), En(e, n)) ? !0 : t;
		}
		if (S(e) === z.element && !cn(e) || (r === "noscript" || r === "noembed" || r === "noframes") && N(tt, e.innerHTML)) return Z(e), !0;
		if (K && e.nodeType === z.text) {
			let n = _n(e.textContent);
			e.textContent !== n && (he(t.removed, { element: e.cloneNode() }), e.textContent = n);
		}
		return $(j.afterSanitizeElements, e, null), En(e, n);
	}, On = function(e, t, r) {
		if (ht[t] || pn(t, e) || Dt && (t === "id" || t === "name") && (r in n || r in $t)) return !1;
		let i = H[t] || G.attributeCheck instanceof Function && G.attributeCheck(t, e);
		return _t && N(F, t) || gt && N(Oe, t) ? !0 : i ? Lt[t] || N(ft, xe(r, rt, "")) || (t === "src" || t === "xlink:href" || t === "href") && e !== "script" && Se(r, "data:") === 0 && Ft[e] || vt && !N(ke, xe(r, rt, "")) ? !0 : !r : An(e) && Cn(U.tagNameCheck, e) && Cn(U.attributeNameCheck, t, e) || t === "is" && U.allowCustomizedBuiltInElements && Cn(U.tagNameCheck, r);
	}, kn = I({}, [
		"annotation-xml",
		"color-profile",
		"font-face",
		"font-face-format",
		"font-face-name",
		"font-face-src",
		"font-face-uri",
		"missing-glyph"
	]), An = function(e) {
		return !kn[ve(e)] && N(dt, e);
	}, jn = function(e, t, n, r) {
		if (C && typeof u == "object" && typeof u.getAttributeType == "function" && !n) switch (u.getAttributeType(e, t)) {
			case "TrustedHTML": return D(r);
			case "TrustedScriptURL": return ae(r);
		}
		return r;
	}, Mn = function(e, t, n, r) {
		try {
			return n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r), yn(e) ? (Z(e), !1) : !0;
		} catch {
			return Q(t, e), !1;
		}
	}, Nn = function(e, n) {
		if ($(j.beforeSanitizeAttributes, e, null), En(e, n)) return;
		let r = e.attributes;
		if (!r || yn(e)) return;
		H = Tn(j.uponSanitizeAttribute, H, mt, St);
		let i = {
			attrName: "",
			attrValue: "",
			keepAttr: !0,
			allowedAttributes: H,
			forceKeepAttr: void 0
		}, a = r.length, o = X(e.nodeName);
		for (; a--;) {
			let n = r[a], s = n.name, c = n.namespaceURI, l = n.value, u = X(s), d = l, f = s === "value" ? d : Ce(d), p = !1;
			if (i.attrName = u, i.attrValue = f, i.keepAttr = !0, i.forceKeepAttr = void 0, $(j.uponSanitizeAttribute, e, i), f = i.attrValue, Ot && (u === "id" || u === "name") && Se(f, kt) !== 0 && (Q(s, e, n), f = kt + f, p = !0), q && N(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, f)) {
				Q(s, e, n);
				continue;
			}
			if (u === "attributename" && be(f, "href")) {
				Q(s, e, n);
				continue;
			}
			if (!i.forceKeepAttr) {
				if (!i.keepAttr) {
					Q(s, e, n);
					continue;
				}
				if (!yt && N(nt, f)) {
					Q(s, e, n);
					continue;
				}
				if (K && (f = _n(f)), !On(o, u, f)) {
					Q(s, e, n);
					continue;
				}
				f = jn(o, u, c, f), f !== d && Mn(e, s, c, f) && p && me(t.removed);
			}
		}
		$(j.afterSanitizeAttributes, e, null), En(e, n);
	}, Pn = function(e) {
		let t = null, n = gn(e);
		for ($(j.beforeSanitizeShadowDOM, e, null); t = n.nextNode();) if ($(j.uponSanitizeShadowNode, t, null), Dn(t, e), Nn(t, e), bn(t.content) && Pn(t.content), S(t) === z.element) {
			let e = v(t);
			bn(e) && (Fn(e), Pn(e));
		}
		$(j.afterSanitizeShadowDOM, e, null);
	}, Fn = function(e) {
		let t = [{
			node: e,
			shadow: null
		}];
		for (; t.length > 0;) {
			let e = t.pop();
			if (e.shadow) {
				Pn(e.shadow);
				continue;
			}
			let n = e.node, r = S(n) === z.element, i = g(n);
			if (i) for (let e = i.length - 1; e >= 0; --e) t.push({
				node: i[e],
				shadow: null
			});
			if (r) {
				let e = b ? b(n) : null;
				if (typeof e == "string" && X(e) === "template") {
					let e = n.content;
					bn(e) && t.push({
						node: e,
						shadow: null
					});
				}
			}
			if (r) {
				let e = v(n);
				bn(e) && t.push({
					node: null,
					shadow: e
				}, {
					node: e,
					shadow: null
				});
			}
		}
	};
	return t.sanitize = function(e) {
		let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = null, a = null, o = null, s = null;
		if (Ht = !e, Ht && (e = "<!-->"), typeof e != "string" && !xn(e) && (e = Ae(e), typeof e != "string")) throw P("dirty is not a string, aborting");
		if (!t.isSupported) return e;
		bt ? (V = xt, H = St) : tn(n), (j.uponSanitizeElement.length > 0 || j.uponSanitizeAttribute.length > 0) && (V = L(V)), j.uponSanitizeAttribute.length > 0 && (H = L(H)), t.removed = [];
		let c = jt && typeof e != "string" && xn(e);
		if (c) {
			mn(e);
			let t = te(e);
			if (typeof t == "string") {
				let n = X(t);
				if (!V[n] || W[n]) throw un(e), P("root node is forbidden and cannot be sanitized in-place");
			}
			if (yn(e)) throw un(e), P("root node is clobbered and cannot be sanitized in-place");
			try {
				Fn(e);
			} catch (t) {
				throw un(e), t;
			}
		} else if (xn(e)) i = hn("<!---->"), a = i.ownerDocument.importNode(e, !0), a.nodeType === z.element && a.nodeName === "BODY" || a.nodeName === "HTML" ? i = a : i.appendChild(a), Fn(i);
		else {
			if (!wt && !K && !J && e.indexOf("<") === -1) return C && Et ? D(e) : e;
			if (i = hn(e), !i) return wt ? null : Et ? w : "";
		}
		i && Ct && Z(i.firstChild);
		let l = c ? e : i;
		try {
			let e = gn(l);
			for (; o = e.nextNode();) Dn(o, l), Nn(o, l), bn(o.content) && Pn(o.content);
		} catch (n) {
			throw c && (un(e), A(t.removed, (e) => {
				e.element && fn(e.element);
			})), n;
		}
		if (c) {
			let n = !1;
			if (A(t.removed, (t) => {
				t.element && (t.element === e && (n = !0), fn(t.element));
			}), n) throw P("a node selected for removal could not be safely returned; refusing to sanitize in place");
			return K && vn(e), e;
		}
		if (wt) {
			if (K && vn(i), Tt) for (s = de.call(i.ownerDocument); i.firstChild;) s.appendChild(i.firstChild);
			else s = i;
			return (H.shadowroot || H.shadowrootmode) && (s = we.call(r, s, !0)), s;
		}
		let u = J ? i.outerHTML : i.innerHTML;
		return J && V["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && N(Ze, i.ownerDocument.doctype.name) && (u = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + u), K && (u = _n(u)), C && Et ? D(u) : u;
	}, t.setConfig = function() {
		let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
		tn(e), bt = !0, xt = V, St = H;
	}, t.clearConfig = function() {
		Qt = null, bt = !1, xt = null, St = null, C = T, w = "";
	}, t.isValidAttribute = function(e, t, n) {
		Qt || tn({});
		let r = X(e), i = X(t);
		return On(r, i, n);
	}, t.addHook = function(e, t) {
		typeof t == "function" && M(j, e) && he(j[e], t);
	}, t.removeHook = function(e, t) {
		if (M(j, e)) {
			if (t !== void 0) {
				let n = pe(j[e], t);
				return n === -1 ? void 0 : ge(j[e], n, 1)[0];
			}
			return me(j[e]);
		}
	}, t.removeHooks = function(e) {
		M(j, e) && (j[e] = []);
	}, t.removeAllHooks = function() {
		j = ct();
	}, t;
}
var dt = ut(), ft = [
	"http:",
	"https:",
	"mailto:"
];
function V(e) {
	try {
		let t = new URL(e);
		return ft.includes(t.protocol);
	} catch {
		return !1;
	}
}
function pt(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
function H(e) {
	return dt.sanitize(e);
}
function mt(e) {
	let t = ["platform.twitter.com", "platform.x.com"], n = !1;
	try {
		let r = new URL(e.getAttribute("src") || "");
		n = r.protocol === "https:" && t.includes(r.hostname);
	} catch {
		n = !1;
	}
	if (!n) {
		e.parentNode?.removeChild(e);
		return;
	}
	e.textContent = "";
}
function U(e) {
	let t = !1;
	try {
		let n = new URL(e.getAttribute("src") || "", window.location.href);
		t = (n.protocol === "https:" || n.protocol === "http:") && n.origin !== window.location.origin;
	} catch {
		t = !1;
	}
	if (!t) {
		e.parentNode?.removeChild(e);
		return;
	}
	e.setAttribute("sandbox", "allow-scripts allow-same-origin allow-popups allow-presentation allow-forms");
}
var W = dt(window);
W.addHook("uponSanitizeElement", (e, t) => {
	let n = e;
	t.tagName === "script" ? mt(n) : t.tagName === "iframe" && U(n);
});
function ht(e) {
	return W.sanitize(e, {
		ADD_TAGS: ["iframe", "script"],
		ADD_ATTR: [
			"target",
			"frameborder",
			"allowfullscreen",
			"async",
			"charset",
			"sandbox"
		],
		FORCE_BODY: !0
	});
}
function G(e, t = []) {
	if (t.length === 0) return e.replace(/<br\s*\/?>/gi, " ").replace(/<\/p>\s*<p>|<\/div>\s*<div>|<\/h[1-6]>\s*(?=<)|<\/li>\s*<li>|<\/a>/gi, " ").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
	let n = t.map((e) => e.toLowerCase()), r = {}, i = 0, a = e.replace(/<\/(h[1-6]|p|div|li|blockquote|pre)>/gi, "<br>");
	for (let e of n) {
		let t = RegExp(`<${e}[^>]*>.*?<\\/${e}>|<${e}[^>]*\\/?>`, "gis");
		a = a.replace(t, (e) => {
			let t = `__EXCLUDED_TAG_${i += 1}__`;
			return r[t] = e, t;
		});
	}
	let o = a;
	n.includes("br") || (o = a.replace(/<br\s*\/?>/gi, " "));
	let s = o.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
	for (let [e, t] of Object.entries(r)) s = s.replace(e, t);
	return s;
}
var gt = (e) => {
	let t = document.createElement("div");
	t.innerHTML = e;
	let n = t.getElementsByTagName("a");
	for (let e = 0; e < n.length; e++) (n[e].getAttribute("href") || "").match(/^\s*(javascript|data|vbscript):/i) && n[e].removeAttribute("href"), n[e].setAttribute("target", "_blank"), n[e].setAttribute("rel", "noopener noreferrer");
	return t.innerHTML;
}, _t = (e) => {
	let t = document.createElement("div");
	t.innerHTML = e;
	let n = t.querySelectorAll(".kg-video-card video");
	for (let e = 0; e < n.length; e++) {
		let t = n[e];
		t.setAttribute("playsinline", ""), t.setAttribute("webkit-playsinline", ""), t.setAttribute("x5-playsinline", ""), t.hasAttribute("autoplay") && (t.setAttribute("muted", ""), t.muted = !0);
	}
	return t.innerHTML;
};
//#endregion
export { ht as a, S as c, g as d, h as f, gt as i, y as l, pt as n, H as o, m as p, V as r, G as s, _t as t, v as u };

//# sourceMappingURL=content-formatters-G0qBT5QE.js.map