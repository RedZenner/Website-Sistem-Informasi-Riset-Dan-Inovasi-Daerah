import { T as e, _ as t, a as n, c as r, d as i, u as a, w as o, y as s } from "./_react-D4KM8XEu.js";
import { m as c, w as l } from "./chunk-OB3PAWPO-BZOqgbiV.js";
import { A as u, J as d, r as f } from "./use-navigate-with-base-path-CWS9sZhM.js";
import { V as p, t as m } from "./use-activity-pub-queries-CGgtQrxL.js";
import { N as h, P as g, Q as _, Y as v, ct as y, f as b, lt as x, m as ee, nt as te, rt as ne, u as S } from "./routes-BRndai50.js";
import { t as C } from "./label-DPs40NLn.js";
import { t as re } from "./social-web-handle-251Wqk4d.js";
//#region ../../node_modules/.pnpm/react-hook-form@7.80.0_react@18.3.1/node_modules/react-hook-form/dist/index.esm.mjs
var w = l();
i();
var ie = (e) => e.type === "checkbox", T = (e) => e instanceof Date, E = (e) => e == null, D = (e) => typeof e == "object", O = (e) => !E(e) && !Array.isArray(e) && D(e) && !T(e), ae = (e) => O(e) && e.target ? ie(e.target) ? e.target.checked : e.target.value : e, oe = (e, t) => t.split(".").some((t, n, r) => !isNaN(Number(t)) && e.has(r.slice(0, n).join("."))), se = (e) => {
	let t = e.constructor && e.constructor.prototype;
	return O(t) && t.hasOwnProperty("isPrototypeOf");
}, ce = typeof window < "u" && window.HTMLElement !== void 0 && typeof document < "u";
function k(e) {
	if (e instanceof Date) return new Date(e);
	let t = typeof FileList < "u" && e instanceof FileList;
	if (ce && (e instanceof Blob || t)) return e;
	let n = Array.isArray(e);
	if (!n && !(O(e) && se(e))) return e;
	let r = n ? [] : Object.create(Object.getPrototypeOf(e));
	for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = k(e[t]));
	return r;
}
var le = {
	BLUR: "blur",
	FOCUS_OUT: "focusout",
	CHANGE: "change",
	SUBMIT: "submit",
	TRIGGER: "trigger",
	VALID: "valid"
}, A = {
	onBlur: "onBlur",
	onChange: "onChange",
	onSubmit: "onSubmit",
	onTouched: "onTouched",
	all: "all"
}, j = {
	max: "max",
	min: "min",
	maxLength: "maxLength",
	minLength: "minLength",
	pattern: "pattern",
	required: "required",
	validate: "validate"
}, ue = "root", de = [
	"__proto__",
	"constructor",
	"prototype"
], fe = /^\w*$/, pe = (e) => fe.test(e), M = (e) => e === void 0, me = /[.[\]'"]/, he = (e) => e.split(me).filter(Boolean), N = (e, t, n) => {
	if (!t || !O(e)) return n;
	let r = pe(t) ? [t] : he(t);
	if (r.some((e) => de.includes(e))) return n;
	let i = r.reduce((e, t) => E(e) ? void 0 : e[t], e);
	return M(i) || i === e ? M(e[t]) ? n : e[t] : i;
}, P = (e) => typeof e == "boolean", F = (e) => typeof e == "function", I = (e, t, n) => {
	let r = -1, i = pe(t) ? [t] : he(t), a = i.length, o = a - 1;
	for (; ++r < a;) {
		let t = i[r], a = n;
		if (r !== o) {
			let n = e[t];
			a = O(n) || Array.isArray(n) ? n : isNaN(+i[r + 1]) ? {} : [];
		}
		if (de.includes(t)) return;
		e[t] = a, e = e[t];
	}
}, L = n.createContext(null);
L.displayName = "HookFormControlContext";
var ge = () => n.useContext(L), _e = (e, t, n, r = !0) => {
	let i = {};
	for (let a in e) Object.defineProperty(i, a, { get: () => {
		let i = a;
		return t._proxyFormState[i] !== A.all && (t._proxyFormState[i] = !r || A.all), n && (n[i] = !0), e[i];
	} });
	return i;
}, ve = ce ? n.useLayoutEffect : n.useEffect;
function ye(e) {
	let t = ge(), { control: r = t, disabled: i, name: a, exact: o } = e || {}, [s, c] = n.useState(() => ({
		...r._formState,
		defaultValues: r._defaultValues
	})), l = n.useRef({
		isDirty: !1,
		isLoading: !1,
		dirtyFields: !1,
		touchedFields: !1,
		validatingFields: !1,
		isValidating: !1,
		isValid: !1,
		errors: !1
	});
	return ve(() => r._subscribe({
		name: a,
		formState: l.current,
		exact: o,
		callback: (e) => {
			!i && c({
				...r._formState,
				...e,
				defaultValues: r._defaultValues
			});
		}
	}), [
		a,
		i,
		o
	]), n.useEffect(() => {
		l.current.isValid && r._setValid(!0);
	}, [r]), n.useMemo(() => _e(s, r, l.current, !1), [s, r]);
}
var R = (e) => typeof e == "string", be = (e, t, n, r, i) => R(e) ? (r && t.watch.add(e), N(n, e, i)) : Array.isArray(e) ? e.map((e) => (r && t.watch.add(e), N(n, e))) : (r && (t.watchAll = !0), n), xe = (e) => E(e) || !D(e), Se = (e, t) => t.length === 0 && !Array.isArray(e) && !se(e);
function z(e, t, n = /* @__PURE__ */ new WeakMap()) {
	if (e === t) return !0;
	if (xe(e) || xe(t)) return Object.is(e, t);
	if (T(e) && T(t)) return Object.is(e.getTime(), t.getTime());
	let r = Object.keys(e), i = Object.keys(t);
	if (r.length !== i.length) return !1;
	if (Se(e, r) || Se(t, i)) return Object.is(e, t);
	if (!r.length && Array.isArray(e) !== Array.isArray(t)) return !1;
	let a = n.get(e);
	if (a && a.has(t)) return !0;
	if (a) a.add(t);
	else {
		let r = /* @__PURE__ */ new WeakSet();
		r.add(t), n.set(e, r);
	}
	for (let i of r) {
		let r = e[i];
		if (!(i in t)) return !1;
		if (i !== "ref") {
			let e = t[i];
			if (T(r) && T(e) || (O(r) || Array.isArray(r)) && (O(e) || Array.isArray(e)) ? !z(r, e, n) : !Object.is(r, e)) return !1;
		}
	}
	return !0;
}
function Ce(e) {
	let t = ge(), { control: r = t, name: i, defaultValue: a, disabled: o, exact: s, compute: c } = e || {}, l = n.useRef(a), u = n.useRef(c), d = n.useRef(void 0), f = n.useRef(r), p = n.useRef(i);
	u.current = c;
	let [m, h] = n.useState(() => {
		let e = r._getWatch(i, l.current);
		return u.current ? u.current(e) : e;
	}), g = n.useCallback((e) => {
		let t = be(i, r._names, e || r._formValues, !1, l.current);
		return u.current ? u.current(t) : t;
	}, [
		r._formValues,
		r._names,
		i
	]), _ = n.useCallback((e) => {
		if (!o) {
			let t = be(i, r._names, e || r._formValues, !1, l.current);
			if (u.current) {
				let e = u.current(t);
				z(e, d.current) || (h(e), d.current = e);
			} else h(t);
		}
	}, [
		r._formValues,
		r._names,
		o,
		i
	]);
	ve(() => ((f.current !== r || !z(p.current, i)) && (f.current = r, p.current = i, _()), r._subscribe({
		name: i,
		formState: { values: !0 },
		exact: s,
		callback: (e) => {
			_(e.values);
		}
	})), [
		r,
		s,
		i,
		_
	]), n.useEffect(() => r._removeUnmounted());
	let v = f.current !== r, y = p.current, b = n.useMemo(() => {
		if (o) return null;
		let e = !v && !z(y, i);
		return v || e ? g() : null;
	}, [
		o,
		v,
		i,
		y,
		g
	]);
	return b === null ? m : b;
}
function we(e) {
	let t = ge(), { name: r, disabled: i, control: a = t, shouldUnregister: o, defaultValue: s, exact: c = !0 } = e, l = oe(a._names.array, r), u = Ce({
		control: a,
		name: r,
		defaultValue: n.useMemo(() => N(a._formValues, r, N(a._defaultValues, r, s)), [
			a,
			r,
			s
		]),
		exact: c
	}), d = ye({
		control: a,
		name: r,
		exact: c
	}), f = n.useRef(e), p = n.useRef(null), m = n.useRef(a.register(r, {
		...e.rules,
		value: u,
		...P(e.disabled) ? { disabled: e.disabled } : {}
	}));
	f.current = e;
	let h = n.useMemo(() => Object.defineProperties({}, {
		invalid: {
			enumerable: !0,
			get: () => !!N(d.errors, r)
		},
		isDirty: {
			enumerable: !0,
			get: () => !!N(d.dirtyFields, r)
		},
		isTouched: {
			enumerable: !0,
			get: () => !!N(d.touchedFields, r)
		},
		isValidating: {
			enumerable: !0,
			get: () => !!N(d.validatingFields, r)
		},
		error: {
			enumerable: !0,
			get: () => N(d.errors, r)
		}
	}), [d, r]), g = n.useCallback((e) => {
		let t = ae(e);
		return N(a._fields, r) || (m.current = a.register(r, {
			...f.current.rules,
			value: t
		})), m.current.onChange({
			target: {
				value: ae(e),
				name: r
			},
			type: le.CHANGE
		});
	}, [r, a]), _ = n.useCallback(() => m.current.onBlur({
		target: {
			value: N(a._formValues, r),
			name: r
		},
		type: le.BLUR
	}), [r, a._formValues]), v = n.useCallback((e) => {
		e && (p.current = {
			focus: () => F(e.focus) && e.focus(),
			select: () => F(e.select) && e.select(),
			setCustomValidity: (t) => F(e.setCustomValidity) && e.setCustomValidity(t),
			reportValidity: () => F(e.reportValidity) && e.reportValidity()
		});
		let t = N(a._fields, r);
		t && t._f && e && (t._f.ref = p.current);
	}, [a._fields, r]), y = n.useMemo(() => ({
		name: r,
		value: u,
		...P(i) || d.disabled ? { disabled: d.disabled || i } : {},
		onChange: g,
		onBlur: _,
		ref: v
	}), [
		r,
		i,
		d.disabled,
		g,
		_,
		v,
		u
	]);
	return n.useEffect(() => {
		let e = a._options.shouldUnregister || o;
		a.register(r, {
			...f.current.rules,
			...P(f.current.disabled) ? { disabled: f.current.disabled } : {}
		});
		let t = (e, t) => {
			let n = N(a._fields, e);
			n && n._f && (n._f.mount = t);
		};
		if (t(r, !0), e) {
			let e = k(N(o ? a._defaultValues : a._options.values || a._defaultValues, r, N(a._options.defaultValues, r, f.current.defaultValue)));
			I(a._defaultValues, r, e), M(N(a._formValues, r)) && I(a._formValues, r, e);
		}
		if (!l && a.register(r), p.current) {
			let e = N(a._fields, r);
			e && e._f && (e._f.ref = p.current);
		}
		return () => {
			(l ? e && !a._state.action : e) ? a.unregister(r) : t(r, !1);
		};
	}, [
		r,
		a,
		l,
		o
	]), n.useEffect(() => {
		a._setDisabledField({
			disabled: i,
			name: r
		});
	}, [
		i,
		r,
		a
	]), n.useMemo(() => ({
		field: y,
		formState: d,
		fieldState: h
	}), [
		y,
		d,
		h
	]);
}
var Te = (e) => e.render(we(e)), Ee = n.createContext(null);
Ee.displayName = "HookFormContext";
var De = () => n.useContext(Ee), Oe = ({ children: e, watch: t, getValues: r, getFieldState: i, setError: a, clearErrors: o, setValue: s, setValues: c, trigger: l, formState: u, resetField: d, reset: f, handleSubmit: p, unregister: m, control: h, register: g, setFocus: _, subscribe: v }) => {
	let y = n.useMemo(() => ({
		watch: t,
		getValues: r,
		getFieldState: i,
		setError: a,
		clearErrors: o,
		setValue: s,
		setValues: c,
		trigger: l,
		formState: u,
		resetField: d,
		reset: f,
		handleSubmit: p,
		unregister: m,
		control: h,
		register: g,
		setFocus: _,
		subscribe: v
	}), [
		o,
		h,
		u,
		i,
		r,
		p,
		g,
		f,
		d,
		a,
		_,
		s,
		c,
		v,
		l,
		m,
		t
	]);
	return n.createElement(Ee.Provider, { value: y }, n.createElement(L.Provider, { value: y.control }, e));
}, ke = (e, t, n, r, i) => t ? {
	...n[e],
	types: {
		...n[e] && n[e].types ? n[e].types : {},
		[r]: i || !0
	}
} : {}, Ae = (e) => Array.isArray(e) ? e.filter(Boolean) : [], je = (e) => Array.isArray(e) ? e : [e], Me = () => {
	let e = [];
	return {
		get observers() {
			return e;
		},
		next: (t) => {
			for (let n of e) n.next && n.next(t);
		},
		subscribe: (t) => (e.push(t), { unsubscribe: () => {
			e = e.filter((e) => e !== t);
		} }),
		unsubscribe: () => {
			e = [];
		}
	};
};
function Ne(e, t) {
	let n = {};
	for (let r in e) if (e.hasOwnProperty(r)) {
		let i = e[r], a = t[r];
		if (i && O(i) && a) {
			let e = Ne(i, a);
			O(e) && (n[r] = e);
		} else e[r] && (n[r] = a);
	}
	return n;
}
var B = (e) => O(e) && !Object.keys(e).length, Pe = (e) => e.type === "file", Fe = (e) => {
	if (!ce) return !1;
	let t = e ? e.ownerDocument : 0;
	return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Ie = (e) => e.type === "select-multiple", Le = (e) => e.type === "radio", Re = (e) => Le(e) || ie(e), ze = (e) => Fe(e) && e.isConnected;
function Be(e, t) {
	let n = t.slice(0, -1).length, r = 0;
	for (; r < n;) {
		if (E(e)) {
			e = void 0;
			break;
		}
		e = e[t[r]], r++;
	}
	return e;
}
function Ve(e) {
	for (let t in e) if (e.hasOwnProperty(t) && !M(e[t])) return !1;
	return !0;
}
function V(e, t) {
	if (R(t) && Object.prototype.hasOwnProperty.call(e, t)) return delete e[t], e;
	let n = Array.isArray(t) ? t : pe(t) ? [t] : he(t), r = n.length === 1 ? e : Be(e, n), i = n.length - 1, a = n[i];
	return r && delete r[a], i !== 0 && (O(r) && B(r) || Array.isArray(r) && Ve(r)) && V(e, n.slice(0, -1)), e;
}
var He = (e) => {
	for (let t in e) if (F(e[t])) return !0;
	return !1;
};
function Ue(e) {
	return Array.isArray(e) || O(e) && !He(e);
}
function We(e, t = {}) {
	for (let n in e) {
		let r = e[n];
		Ue(r) ? (t[n] = Array.isArray(r) ? [] : {}, We(r, t[n])) : M(r) || (t[n] = !0);
	}
	return t;
}
function Ge(e) {
	if (e !== !1) {
		if (e === !0) return !0;
		if (Array.isArray(e)) {
			let t = e.map((e) => Ge(e));
			return t.some((e) => e !== void 0) ? t : void 0;
		}
		if (O(e)) {
			let t = {};
			for (let n in e) {
				let r = Ge(e[n]);
				M(r) || (t[n] = r);
			}
			return Object.keys(t).length ? t : void 0;
		}
	}
}
function Ke(e, t, n) {
	n ||= We(t);
	for (let r in e) {
		let i = e[r];
		if (Ue(i)) M(t) || xe(n[r]) ? n[r] = We(i, Array.isArray(i) ? [] : {}) : Ke(i, E(t) ? {} : t[r], n[r]);
		else {
			let e = t[r];
			n[r] = !z(i, e);
		}
	}
	return Ge(n) || {};
}
var qe = {
	value: !1,
	isValid: !1
}, Je = {
	value: !0,
	isValid: !0
}, Ye = (e) => {
	if (Array.isArray(e)) {
		if (e.length > 1) {
			let t = e.filter((e) => e && e.checked && !e.disabled).map((e) => e.value);
			return {
				value: t,
				isValid: !!t.length
			};
		}
		return e[0].checked && !e[0].disabled ? e[0].attributes && !M(e[0].attributes.value) ? M(e[0].value) || e[0].value === "" ? Je : {
			value: e[0].value,
			isValid: !0
		} : Je : qe;
	}
	return qe;
}, Xe = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => M(e) ? e : t ? e === "" ? NaN : e && +e : n && R(e) ? new Date(e) : r ? r(e) : e, Ze = {
	isValid: !1,
	value: null
}, Qe = (e) => Array.isArray(e) ? e.reduce((e, t) => t && t.checked && !t.disabled ? {
	isValid: !0,
	value: t.value
} : e, Ze) : Ze;
function $e(e) {
	let t = e.ref;
	return Pe(t) ? t.files : Le(t) ? Qe(e.refs).value : Ie(t) ? [...t.selectedOptions].map(({ value: e }) => e) : ie(t) ? Ye(e.refs).value : Xe(M(t.value) ? e.ref.value : t.value, e);
}
var et = (e, t, n, r) => {
	let i = {};
	for (let n of e) {
		let e = N(t, n);
		e && I(i, n, e._f);
	}
	return {
		criteriaMode: n,
		names: [...e],
		fields: i,
		shouldUseNativeValidation: r
	};
}, tt = (e) => e instanceof RegExp, nt = (e) => M(e) ? e : tt(e) ? e.source : O(e) ? tt(e.value) ? e.value.source : e.value : e, rt = (e) => ({
	isOnSubmit: !e || e === A.onSubmit,
	isOnBlur: e === A.onBlur,
	isOnChange: e === A.onChange,
	isOnAll: e === A.all,
	isOnTouch: e === A.onTouched
}), it = "AsyncFunction", at = (e) => {
	if (!e || !e.validate) return !1;
	if (F(e.validate)) return e.validate.constructor.name === it;
	if (O(e.validate)) {
		for (let t in e.validate) if (e.validate[t].constructor.name === it) return !0;
	}
	return !1;
}, ot = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate), st = (e, t, n) => {
	if (n) return !1;
	if (t.watchAll || t.watch.has(e)) return !0;
	for (let n of t.watch) if (e.startsWith(n) && e.charAt(n.length) === ".") return !0;
	return !1;
}, ct = (e, t, n, r) => {
	for (let i of n || Object.keys(e)) {
		let n = N(e, i);
		if (n) {
			let { _f: e, ...a } = n;
			if (e) {
				if (e.refs && e.refs[0] && t(e.refs[0], i) && !r || e.ref && t(e.ref, e.name) && !r) return !0;
				if (ct(a, t)) break;
			} else if (O(a) && ct(a, t)) break;
		}
	}
};
function lt(e, t, n) {
	let r = N(e, n);
	if (r || pe(n)) return {
		error: r,
		name: n
	};
	let i = n.split(".");
	for (; i.length;) {
		let r = i.join("."), a = N(t, r), o = N(e, r);
		if (a && !Array.isArray(a) && n !== r) return { name: n };
		if (o && o.type) return {
			name: r,
			error: o
		};
		if (o && o.root && o.root.type) return {
			name: `${r}.root`,
			error: o.root
		};
		i.pop();
	}
	return { name: n };
}
var ut = (e, t, n, r) => {
	n(e);
	let { name: i, ...a } = e, o = Object.keys(a);
	return !o.length || r && o.length >= Object.keys(t).length || o.find((e) => t[e] === (!r || A.all));
}, dt = (e, t, n) => !e || !t || e === t || je(e).some((e) => e && (n ? e === t : e.startsWith(t) || t.startsWith(e))), ft = (e, t, n, r, i) => i.isOnAll ? !1 : !n && i.isOnTouch ? !(t || e) : (n ? r.isOnBlur : i.isOnBlur) ? !e : (n ? r.isOnChange : i.isOnChange) ? e : !0, pt = (e, t) => !Ae(N(e, t)).length && V(e, t), mt = (e, t, n) => {
	let r = N(e, n), i = Array.isArray(r) ? r : [];
	return I(i, ue, t[n]), I(e, n, i), e;
};
function ht(e, t, n = "validate") {
	if (R(e) || Array.isArray(e) && e.every(R) || P(e) && !e) return {
		type: n,
		message: R(e) ? e : "",
		ref: t
	};
}
var gt = (e) => O(e) && !tt(e) ? e : {
	value: e,
	message: ""
}, _t = async (e, t, n, r, i, a) => {
	let { ref: o, refs: s, required: c, maxLength: l, minLength: u, min: d, max: f, pattern: p, validate: m, name: h, valueAsNumber: g, mount: _ } = e._f, v = N(n, h);
	if (!_ || t.has(h)) return {};
	let y = s ? s[0] : o, b = (e) => {
		if (i && y.reportValidity) {
			let t = P(e) ? "" : e || "";
			s ? s.forEach((e) => e.setCustomValidity(t)) : y.setCustomValidity(t), y.reportValidity();
		}
	}, x = {}, ee = Le(o), te = ie(o), ne = ee || te, S = (g || Pe(o)) && M(o.value) && M(v) || Fe(o) && o.value === "" || v === "" || Array.isArray(v) && !v.length, C = ke.bind(null, h, r, x), re = (e, t, n, r = j.maxLength, i = j.minLength) => {
		let a = e ? t : n;
		x[h] = {
			type: e ? r : i,
			message: a,
			ref: o,
			...C(e ? r : i, a)
		};
	};
	if (a ? !Array.isArray(v) || !v.length : c && (!ne && (S || E(v)) || P(v) && !v || te && !Ye(s).isValid || ee && !Qe(s).isValid)) {
		let { value: e, message: t } = R(c) ? {
			value: !!c,
			message: c
		} : gt(c);
		if (e && (x[h] = {
			type: j.required,
			message: t,
			ref: y,
			...C(j.required, t)
		}, !r)) return b(t), x;
	}
	if (!S && (!E(d) || !E(f))) {
		let e, t, n = gt(f), i = gt(d);
		if (!E(v) && !isNaN(v)) {
			let r = o.valueAsNumber || v && +v;
			E(n.value) || (e = r > n.value), E(i.value) || (t = r < i.value);
		} else {
			let r = o.valueAsDate || new Date(v), a = (e) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + e), s = o.type == "time", c = o.type == "week";
			R(n.value) && v && (e = s ? a(v) > a(n.value) : c ? v > n.value : r > new Date(n.value)), R(i.value) && v && (t = s ? a(v) < a(i.value) : c ? v < i.value : r < new Date(i.value));
		}
		if ((e || t) && (re(!!e, n.message, i.message, j.max, j.min), !r)) return b(x[h].message), x;
	}
	if ((l || u) && !S && (R(v) || a && Array.isArray(v))) {
		let e = gt(l), t = gt(u), n = !E(e.value) && v.length > +e.value, i = !E(t.value) && v.length < +t.value;
		if ((n || i) && (re(n, e.message, t.message), !r)) return b(x[h].message), x;
	}
	if (p && !S && R(v)) {
		let { value: e, message: t } = gt(p);
		if (tt(e) && !v.match(e) && (x[h] = {
			type: j.pattern,
			message: t,
			ref: o,
			...C(j.pattern, t)
		}, !r)) return b(t), x;
	}
	if (m) {
		if (F(m)) {
			let e = ht(await m(v, n), y);
			if (e && (x[h] = {
				...e,
				...C(j.validate, e.message)
			}, !r)) return b(e.message), x;
		} else if (O(m)) {
			let e = {};
			for (let t in m) {
				if (!B(e) && !r) break;
				let i = ht(await m[t](v, n), y, t);
				i && (e = {
					...i,
					...C(t, i.message)
				}, b(i.message), r && (x[h] = e));
			}
			if (!B(e) && (x[h] = {
				ref: y,
				...e
			}, !r)) return x;
		}
	}
	return b(!0), x;
}, vt = {
	mode: A.onSubmit,
	reValidateMode: A.onChange,
	shouldFocusError: !0
}, yt = "form", bt = {
	submitCount: 0,
	isDirty: !1,
	isReady: !1,
	isValidating: !1,
	isSubmitted: !1,
	isSubmitting: !1,
	isSubmitSuccessful: !1,
	isValid: !1,
	touchedFields: {},
	dirtyFields: {},
	validatingFields: {}
};
function xt(e = {}) {
	let t = {
		...vt,
		...e
	}, n = {
		...k(bt),
		isLoading: F(t.defaultValues),
		errors: t.errors || {},
		disabled: t.disabled || !1
	}, r = {}, i = (O(t.defaultValues) || O(t.values)) && k(t.defaultValues || t.values) || {}, a = t.shouldUnregister ? {} : k(i), o = {
		action: !1,
		mount: !1,
		watch: !1,
		keepIsValid: !1
	}, s = {
		mount: /* @__PURE__ */ new Set(),
		disabled: /* @__PURE__ */ new Set(),
		unMount: /* @__PURE__ */ new Set(),
		array: /* @__PURE__ */ new Set(),
		watch: /* @__PURE__ */ new Set(),
		registerName: /* @__PURE__ */ new Set()
	}, c, l = 0, u = 0, d = rt(t.mode), f = rt(t.reValidateMode), p = {
		isDirty: !1,
		dirtyFields: !1,
		validatingFields: !1,
		touchedFields: !1,
		isValidating: !1,
		isValid: !1,
		errors: !1
	}, m = { ...p }, h = { ...m }, g = {
		array: Me(),
		state: Me()
	}, _ = t.criteriaMode === A.all, v = (e) => (t) => {
		clearTimeout(l), l = setTimeout(e, t);
	}, y = async (e) => {
		if (!o.keepIsValid && !t.disabled && (m.isValid || h.isValid || e)) {
			let e;
			t.resolver ? (e = B((await D()).errors), b()) : e = await fe({
				fields: r,
				onlyCheckValid: !0,
				eventType: le.VALID
			}), e !== n.isValid && g.state.next({ isValid: e });
		}
	}, b = (e, r) => {
		!t.disabled && (m.isValidating || m.validatingFields || h.isValidating || h.validatingFields) && ((e || Array.from(s.mount)).forEach((e) => {
			e && (r ? I(n.validatingFields, e, r) : V(n.validatingFields, e));
		}), g.state.next({
			validatingFields: n.validatingFields,
			isValidating: !B(n.validatingFields)
		}));
	}, x = () => {
		n.dirtyFields = Ke(i, a);
	}, ee = (e, i = [], s, c, l = !0, u = !0) => {
		if (c && s && !t.disabled) {
			if (o.action = !0, u && Array.isArray(N(r, e))) {
				let t = s(N(r, e), c.argA, c.argB);
				l && I(r, e, t);
			}
			if (u && Array.isArray(N(n.errors, e))) {
				let t = s(N(n.errors, e), c.argA, c.argB);
				l && I(n.errors, e, t), pt(n.errors, e);
			}
			if ((m.touchedFields || h.touchedFields) && u && Array.isArray(N(n.touchedFields, e))) {
				let t = s(N(n.touchedFields, e), c.argA, c.argB);
				l && I(n.touchedFields, e, t);
			}
			(m.dirtyFields || h.dirtyFields) && x(), g.state.next({
				name: e,
				isDirty: L(e, i),
				dirtyFields: n.dirtyFields,
				errors: n.errors,
				isValid: n.isValid
			});
		} else I(a, e, i);
	}, te = (e, t) => {
		I(n.errors, e, t), n.errors = { ...n.errors }, g.state.next({ errors: n.errors });
	}, ne = (e) => {
		n.errors = e, g.state.next({
			errors: n.errors,
			isValid: !1
		});
	}, S = (e) => {
		let t = pe(e) ? [e] : he(e), n = a, r = i;
		for (let e = 0; e < t.length - 1; e++) {
			let i = t[e];
			if (n = E(n) ? n : n[i], r = E(r) ? r : r[i], n === null && r !== null) return !0;
		}
		return !1;
	}, C = (t, c, l, u) => {
		let d = N(r, t);
		if (d) {
			if (S(t)) return;
			let r = M(N(a, t)), f = N(a, t, M(l) ? N(i, t) : l);
			M(f) || u && u.defaultChecked || c ? I(a, t, c ? f : $e(d._f)) : ve(t, f), o.mount && !o.action && (y(), r && n.isDirty && (m.isDirty || h.isDirty) && (L() || (n.isDirty = !1, g.state.next({ ...n }))), e.shouldUnregister && r && !M(N(a, t)) && st(t, s) && (o.watch = !0));
		}
	}, re = (e, r, o, s, c) => {
		let l = !1, u = !1, d = { name: e };
		if (!t.disabled) {
			if (!o || s) {
				let t = z(N(i, e), r);
				(m.isDirty || h.isDirty) && (u = n.isDirty, n.isDirty = d.isDirty = !t || L(), l = u !== d.isDirty), u = !!N(n.dirtyFields, e), t === n.isDirty ? t ? V(n.dirtyFields, e) : I(n.dirtyFields, e, !0) : n.dirtyFields = Ke(i, a), d.dirtyFields = n.dirtyFields, l ||= (m.dirtyFields || h.dirtyFields) && u !== !t;
			}
			if (o) {
				let t = N(n.touchedFields, e);
				t || (I(n.touchedFields, e, o), d.touchedFields = n.touchedFields, l ||= (m.touchedFields || h.touchedFields) && t !== o);
			}
			l && c && g.state.next(d);
		}
		return l ? d : {};
	}, w = (e, r, i, a) => {
		let o = N(n.errors, e), s = (m.isValid || h.isValid) && P(r) && n.isValid !== r;
		if (t.delayError && i ? (c = v(() => te(e, i)), c(t.delayError)) : (clearTimeout(l), c = null, i ? I(n.errors, e, i) : V(n.errors, e), n.errors = { ...n.errors }), (i ? !z(o, i) : o) || !B(a) || s) {
			let t = {
				...a,
				...s && P(r) ? { isValid: r } : {},
				errors: n.errors,
				name: e
			};
			n = {
				...n,
				...t
			}, g.state.next(t);
		}
	}, D = async (e) => (b(e, !0), await t.resolver(a, t.context, et(e || s.mount, r, t.criteriaMode, t.shouldUseNativeValidation))), se = async (e) => {
		let { errors: t } = await D(e);
		if (b(e), e) {
			for (let r of e) {
				let e = N(t, r);
				e ? s.array.has(r) && O(e) && !Object.keys(e).some((e) => !Number.isNaN(Number(e))) ? mt(n.errors, { [r]: e }, r) : I(n.errors, r, e) : V(n.errors, r);
			}
			n.errors = { ...n.errors };
		} else n.errors = t;
		return t;
	}, de = async ({ name: t, eventType: r }) => {
		if (e.validate) {
			let i = await e.validate({
				formValues: a,
				formState: n,
				name: t,
				eventType: r
			});
			if (O(i)) for (let e in i) {
				let t = i[e];
				t && Le(`${yt}.${e}`, {
					message: R(t.message) ? t.message : "",
					type: t.type || j.validate
				});
			}
			else R(i) || !i ? Le(yt, {
				message: i || "",
				type: j.validate
			}) : ke(yt);
			return i;
		}
		return !0;
	}, fe = async ({ fields: r, onlyCheckValid: i, name: o, eventType: c, context: l = {
		valid: !0,
		runRootValidation: !1
	} }) => {
		if (e.validate && (l.runRootValidation = !0, !await de({
			name: o,
			eventType: c
		}) && (l.valid = !1, i))) return l.valid;
		for (let o in r) {
			let u = r[o];
			if (u) {
				let { _f: r, ...d } = u;
				if (r) {
					let o = s.array.has(r.name), c = u._f && at(u._f), d = m.validatingFields || m.isValidating || h.validatingFields || h.isValidating;
					c && d && b([r.name], !0);
					let f = await _t(u, s.disabled, a, _, t.shouldUseNativeValidation && !i, o);
					if (c && d && b([r.name]), f[r.name] && (l.valid = !1, i) || (!i && (N(f, r.name) ? o ? mt(n.errors, f, r.name) : I(n.errors, r.name, f[r.name]) : V(n.errors, r.name)), e.shouldUseNativeValidation && f[r.name])) break;
				}
				!B(d) && await fe({
					context: l,
					onlyCheckValid: i,
					fields: d,
					name: o,
					eventType: c
				});
			}
		}
		return l.valid;
	}, me = () => {
		for (let e of s.unMount) {
			let t = N(r, e);
			t && (t._f.refs ? t._f.refs.every((e) => !ze(e)) : !ze(t._f.ref)) && Ue(e);
		}
		s.unMount = /* @__PURE__ */ new Set();
	}, L = (e, n) => !t.disabled && (e && n && I(a, e, n), !z(o.mount ? a : i, i)), ge = (e, t, n) => be(e, s, { ...o.mount ? a : M(t) ? i : R(e) ? { [e]: t } : t }, n, t), _e = (e) => Ae(N(o.mount ? a : i, e, t.shouldUnregister ? N(i, e, []) : [])), ve = (e, t, n = {}, i = !1, o = !1) => {
		let s = N(r, e), c = t;
		if (s) {
			let n = s._f;
			n && (!n.disabled && I(a, e, Xe(t, n)), c = Fe(n.ref) && E(t) ? "" : t, Ie(n.ref) ? [...n.ref.options].forEach((e) => e.selected = c.includes(e.value)) : n.refs ? ie(n.ref) ? n.refs.forEach((e) => {
				(!e.defaultChecked || !e.disabled) && (Array.isArray(c) ? e.checked = !!c.find((t) => t === e.value) : e.checked = c === e.value || !!c);
			}) : n.refs.forEach((e) => e.checked = e.value === c) : Pe(n.ref) ? n.ref.value = "" : (n.ref.value = c, !n.ref.type && !o && g.state.next({
				name: e,
				values: i ? a : k(a)
			})));
		}
		(n.shouldDirty || n.shouldTouch) && re(e, c, n.shouldTouch, n.shouldDirty, !o), n.shouldValidate && Ee(e);
	}, ye = (e, t, n, i = !1, a = !1) => {
		for (let o in t) {
			if (!t.hasOwnProperty(o)) return;
			let c = t[o], l = e + "." + o, u = N(r, l);
			(s.array.has(e) || O(c) || u && !u._f) && !T(c) ? ye(l, c, n, i, a) : ve(l, c, n, i, a);
		}
	}, xe = (e, t, i, c, l = !1) => {
		let u = N(r, e), d = s.array.has(e), f = c ? t : k(t), p = z(N(a, e), f);
		if (p || I(a, e, f), d) g.array.next({
			name: e,
			values: c ? a : k(a)
		}), (m.isDirty || m.dirtyFields || h.isDirty || h.dirtyFields) && i.shouldDirty && (x(), l || g.state.next({
			name: e,
			dirtyFields: n.dirtyFields,
			isDirty: L(e, f)
		}));
		else {
			let t = Array.isArray(f) && !f.length || B(f);
			!u || u._f || E(f) || t ? ve(e, f, i, c, l) : ye(e, f, i, c, l);
		}
		if (!p && !l) {
			let t = st(e, s), r = c ? a : k(a);
			g.state.next({
				...t && n,
				name: o.mount || t ? e : void 0,
				values: r
			});
		}
	}, Se = (e, t, n = {}) => xe(e, t, n, !1), Ce = (e, t = {}) => {
		let r = F(e) ? e(a) : e;
		if (!z(a, r)) {
			a = {
				...a,
				...r
			};
			for (let e of s.mount) xe(e, N(r, e), t, !0, !0);
			g.state.next({
				...n,
				name: void 0,
				type: void 0,
				...u ? { values: a } : {}
			}), t.shouldValidate && y();
		}
	}, we = async (i) => {
		o.mount = !0;
		let l = i.target, p = l.name, v = !0, x = N(r, p), ee = (e) => {
			v = Number.isNaN(e) || T(e) && isNaN(e.getTime()) || z(e, N(a, p, e));
		};
		if (x) {
			let o, te, ne = l.type ? $e(x._f) : ae(i), S = i.type === le.BLUR || i.type === le.FOCUS_OUT, C = !ot(x._f) && !e.validate && !t.resolver && !N(n.errors, p) && !x._f.deps, ie = C || ft(S, N(n.touchedFields, p), n.isSubmitted, f, d), T = st(p, s, S);
			I(a, p, ne), S ? (!l || !l.readOnly) && (x._f.onBlur && x._f.onBlur(i), c && c(0)) : x._f.onChange && x._f.onChange(i);
			let E = re(p, ne, S), O = !B(E) || T;
			if (!S && g.state.next({
				name: p,
				type: i.type,
				...u ? { values: k(a) } : {}
			}), ie) return (!C || !n.isValid) && (m.isValid || h.isValid) && (t.mode === "onBlur" ? S && y() : S || y()), O && g.state.next({
				name: p,
				...T ? {} : E
			});
			if (!t.resolver && e.validate && await de({
				name: p,
				eventType: i.type
			}), !S && T && g.state.next({ ...n }), t.resolver) {
				let { errors: e } = await D([p]);
				if (b([p]), ee(ne), !v) {
					!B(E) && g.state.next(E);
					return;
				}
				let t = lt(n.errors, r, p), i = lt(e, r, t.name || p);
				o = i.error, p = i.name, te = B(e);
			} else b([p], !0), o = (await _t(x, s.disabled, a, _, t.shouldUseNativeValidation))[p], b([p]), ee(ne), v && (o ? te = !1 : (m.isValid || h.isValid) && (te = await fe({
				fields: r,
				onlyCheckValid: !0,
				name: p,
				eventType: i.type
			})));
			v && (x._f.deps && (!Array.isArray(x._f.deps) || x._f.deps.length > 0) && Ee(x._f.deps), w(p, te, o, E));
		}
	}, Te = (e, t) => {
		if (N(n.errors, t) && e.focus) return e.focus(), 1;
	}, Ee = async (e, i = {}) => {
		let a, o, c = je(e);
		if (t.resolver) {
			let t = await se(M(e) ? e : c);
			a = B(t), o = e ? !c.some((e) => N(t, e)) : a;
		} else e ? (o = (await Promise.all(c.map(async (e) => {
			let t = N(r, e);
			return await fe({
				fields: t && t._f ? { [e]: t } : t,
				eventType: le.TRIGGER
			});
		}))).every(Boolean), !(!o && !n.isValid) && y()) : o = a = await fe({
			fields: r,
			name: e,
			eventType: le.TRIGGER
		});
		return g.state.next({
			...!R(e) || (m.isValid || h.isValid) && a !== n.isValid ? {} : { name: e },
			...t.resolver || !e ? { isValid: a } : {},
			errors: n.errors
		}), i.shouldFocus && !o && ct(r, Te, e ? c : s.mount), o;
	}, De = (e, t) => {
		let r = { ...o.mount ? a : i };
		return t && (r = Ne(t.dirtyFields ? n.dirtyFields : n.touchedFields, r)), M(e) ? r : R(e) ? N(r, e) : e.map((e) => N(r, e));
	}, Oe = (e, t) => ({
		invalid: !!N((t || n).errors, e),
		isDirty: !!N((t || n).dirtyFields, e),
		error: N((t || n).errors, e),
		isValidating: !!N(n.validatingFields, e),
		isTouched: !!N((t || n).touchedFields, e)
	}), ke = (e) => {
		let t = e ? je(e) : void 0;
		t?.forEach((e) => V(n.errors, e)), t ? t.forEach((e) => {
			g.state.next({
				name: e,
				errors: n.errors
			});
		}) : g.state.next({ errors: {} });
	}, Le = (e, t, i) => {
		let a = (N(r, e, { _f: {} })._f || {}).ref, { ref: o, message: s, type: c, ...l } = N(n.errors, e) || {};
		I(n.errors, e, {
			...l,
			...t,
			ref: a
		}), g.state.next({
			name: e,
			errors: n.errors,
			isValid: !1
		}), i && i.shouldFocus && a && a.focus && a.focus();
	}, Be = (e, t) => {
		if (F(e)) {
			u++;
			let { unsubscribe: n } = g.state.subscribe({ next: (n) => "values" in n && e(n.values || ge(void 0, t), n) }), r = !1;
			return { unsubscribe: () => {
				r || (r = !0, u--, n());
			} };
		}
		return ge(e, t, !0);
	}, Ve = (e) => {
		let t = !!e.formState?.values;
		t && u++;
		let { unsubscribe: r } = g.state.subscribe({ next: (t) => {
			if (dt(e.name, t.name, e.exact) && ut(t, e.formState || m, ht, e.reRenderRoot)) {
				let r = { ...a };
				e.callback({
					values: r,
					...n,
					...t,
					defaultValues: i
				});
			}
		} });
		if (!t) return r;
		let o = !1;
		return () => {
			o || (o = !0, u--, r());
		};
	}, He = (e) => (o.mount = !0, h = {
		...h,
		...e.formState
	}, Ve({
		...e,
		formState: {
			...p,
			...e.formState
		}
	})), Ue = (e, o = {}) => {
		for (let c of e ? je(e) : s.mount) s.mount.delete(c), s.array.delete(c), o.keepValue || (V(r, c), V(a, c)), !o.keepError && V(n.errors, c), !o.keepDirty && V(n.dirtyFields, c), !o.keepTouched && V(n.touchedFields, c), !o.keepIsValidating && V(n.validatingFields, c), !t.shouldUnregister && !o.keepDefaultValue && V(i, c);
		g.state.next({ values: k(a) }), g.state.next({
			...n,
			...o.keepDirty ? { isDirty: L() } : {}
		}), !o.keepIsValid && y();
	}, We = ({ disabled: e, name: t }) => {
		if (P(e) && o.mount || e || s.disabled.has(t)) {
			let n = s.disabled.has(t) !== !!e;
			e ? s.disabled.add(t) : s.disabled.delete(t), n && o.mount && !o.action && y();
		}
	}, Ge = (e, n = {}) => {
		let a = N(r, e), c = P(n.disabled) || P(t.disabled), l = !s.registerName.has(e) && a && a._f && !a._f.mount;
		return I(r, e, {
			...a || {},
			_f: {
				...a && a._f ? a._f : { ref: { name: e } },
				name: e,
				mount: !0,
				...n
			}
		}), s.mount.add(e), a && !l ? We({
			disabled: P(n.disabled) ? n.disabled : t.disabled,
			name: e
		}) : C(e, !0, n.value), {
			...c ? { disabled: n.disabled || t.disabled } : {},
			...t.progressive ? {
				required: !!n.required,
				min: nt(n.min),
				max: nt(n.max),
				minLength: nt(n.minLength),
				maxLength: nt(n.maxLength),
				pattern: nt(n.pattern)
			} : {},
			name: e,
			onChange: we,
			onBlur: we,
			ref: (c) => {
				if (c) {
					s.registerName.add(e), Ge(e, n), s.registerName.delete(e), a = N(r, e);
					let t = M(c.value) && c.querySelectorAll && c.querySelectorAll("input,select,textarea")[0] || c, o = Re(t), l = a._f.refs || [];
					if (o ? l.find((e) => e === t) : t === a._f.ref) return;
					I(r, e, { _f: {
						...a._f,
						...o ? {
							refs: [
								...l.filter(ze),
								t,
								...Array.isArray(N(i, e)) ? [{}] : []
							],
							ref: {
								type: t.type,
								name: e
							}
						} : { ref: t }
					} }), C(e, !1, void 0, t);
				} else a = N(r, e, {}), a._f && (a._f.mount = !1), (t.shouldUnregister || n.shouldUnregister) && !(oe(s.array, e) && o.action) && s.unMount.add(e);
			}
		};
	}, qe = () => t.shouldFocusError && !t.shouldUseNativeValidation && ct(r, Te, s.mount), Je = (e) => {
		P(e) && (g.state.next({ disabled: e }), ct(r, (t, n) => {
			let i = N(r, n);
			i && (t.disabled = i._f.disabled || e, Array.isArray(i._f.refs) && i._f.refs.forEach((t) => {
				t.disabled = i._f.disabled || e;
			}));
		}, 0, !1));
	}, Ye = (e, i) => async (o) => {
		let c;
		o && (o.preventDefault && o.preventDefault(), o.persist && o.persist());
		let l = k(a);
		if (g.state.next({ isSubmitting: !0 }), t.resolver) {
			let { errors: e, values: t } = await D();
			b(), n.errors = e, l = k(t);
		} else await fe({
			fields: r,
			eventType: le.SUBMIT
		});
		if (s.disabled.size) for (let e of s.disabled) V(l, e);
		if (V(n.errors, ue), B(n.errors)) {
			g.state.next({ errors: {} });
			try {
				await e(l, o);
			} catch (e) {
				c = e;
			}
		} else i && await i({ ...n.errors }, o), qe(), setTimeout(qe);
		if (g.state.next({
			isSubmitted: !0,
			isSubmitting: !1,
			isSubmitSuccessful: B(n.errors) && !c,
			submitCount: n.submitCount + 1,
			errors: n.errors
		}), c) throw c;
	}, Ze = (e, t = {}) => {
		N(r, e) && (M(t.defaultValue) ? Se(e, k(N(i, e))) : (Se(e, t.defaultValue), I(i, e, k(t.defaultValue))), t.keepTouched || V(n.touchedFields, e), t.keepDirty || (V(n.dirtyFields, e), n.isDirty = t.defaultValue ? L(e, k(N(i, e))) : L()), t.keepError || (V(n.errors, e), m.isValid && y()), g.state.next({ ...n }));
	}, Qe = (e, c = {}) => {
		let l = e ? k(e) : i, u = k(l), d = B(e), f = u;
		if (c.keepDefaultValues || (i = l), !c.keepValues) {
			if (c.keepDirtyValues) {
				let e = /* @__PURE__ */ new Set([...s.mount, ...Object.keys(Ke(i, a))]);
				for (let t of Array.from(e)) {
					let e = N(n.dirtyFields, t), r = N(a, t), i = N(f, t);
					e && !M(r) ? I(f, t, r) : !e && !M(i) && Se(t, i);
				}
			} else {
				if (ce && M(e)) for (let e of s.mount) {
					let t = N(r, e);
					if (t && t._f) {
						let e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
						if (Fe(e)) {
							let t = e.closest("form");
							if (t) {
								t.reset();
								break;
							}
						}
					}
				}
				if (c.keepFieldsRef) for (let e of s.mount) Se(e, N(f, e));
				else r = {};
			}
			if (t.shouldUnregister) {
				if (a = c.keepDefaultValues ? k(i) : {}, c.keepFieldsRef) for (let e of s.mount) I(a, e, N(f, e));
			} else a = k(f);
			g.array.next({ values: { ...f } }), g.state.next({ values: { ...f } });
		}
		s = {
			mount: c.keepDirtyValues ? s.mount : /* @__PURE__ */ new Set(),
			unMount: /* @__PURE__ */ new Set(),
			array: /* @__PURE__ */ new Set(),
			registerName: /* @__PURE__ */ new Set(),
			disabled: /* @__PURE__ */ new Set(),
			watch: /* @__PURE__ */ new Set(),
			watchAll: !1,
			focus: ""
		}, o.mount = !m.isValid || !!c.keepIsValid || !!c.keepDirtyValues || !t.shouldUnregister && !B(f), o.watch = !!t.shouldUnregister, o.keepIsValid = !!c.keepIsValid, o.action = !1, c.keepErrors || (n.errors = {}), g.state.next({
			submitCount: c.keepSubmitCount ? n.submitCount : 0,
			isDirty: d ? !1 : c.keepDirty ? n.isDirty : c.keepValues ? L() : !!(c.keepDefaultValues && !z(e, i)),
			isSubmitted: c.keepIsSubmitted ? n.isSubmitted : !1,
			dirtyFields: d ? {} : c.keepDirtyValues ? c.keepDefaultValues && a ? Ke(i, a) : n.dirtyFields : c.keepDefaultValues && e ? Ke(i, e) : c.keepDirty ? n.dirtyFields : {},
			touchedFields: c.keepTouched ? n.touchedFields : {},
			errors: c.keepErrors ? n.errors : {},
			isSubmitSuccessful: c.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
			isSubmitting: !1,
			defaultValues: i
		});
	}, tt = (e, n) => Qe(F(e) ? e(a) : e, {
		...t.resetOptions,
		...n
	}), it = (e, t = {}) => {
		let n = N(r, e), i = n && n._f;
		if (i) {
			let e = i.refs ? i.refs[0] : i.ref;
			e.focus && setTimeout(() => {
				e.focus(), t.shouldSelect && F(e.select) && e.select();
			});
		}
	}, ht = (e) => {
		n = {
			...n,
			...e
		};
	}, gt = {
		control: {
			register: Ge,
			unregister: Ue,
			getFieldState: Oe,
			handleSubmit: Ye,
			setError: Le,
			_subscribe: Ve,
			_runSchema: D,
			_updateIsValidating: b,
			_focusError: qe,
			_getWatch: ge,
			_getDirty: L,
			_setValid: y,
			_setFieldArray: ee,
			_setDisabledField: We,
			_setErrors: ne,
			_getFieldArray: _e,
			_reset: Qe,
			_resetDefaultValues: () => F(t.defaultValues) && t.defaultValues().then((e) => {
				tt(e, t.resetOptions), g.state.next({ isLoading: !1 });
			}),
			_removeUnmounted: me,
			_disableForm: Je,
			_subjects: g,
			_proxyFormState: m,
			get _fields() {
				return r;
			},
			get _formValues() {
				return a;
			},
			get _state() {
				return o;
			},
			set _state(e) {
				o = e;
			},
			get _defaultValues() {
				return i;
			},
			get _names() {
				return s;
			},
			set _names(e) {
				s = e;
			},
			get _formState() {
				return n;
			},
			get _options() {
				return t;
			},
			set _options(e) {
				t = {
					...t,
					...e
				}, d = rt(t.mode), f = rt(t.reValidateMode);
			}
		},
		subscribe: He,
		trigger: Ee,
		register: Ge,
		handleSubmit: Ye,
		watch: Be,
		setValue: Se,
		setValues: Ce,
		getValues: De,
		reset: tt,
		resetField: Ze,
		resetDefaultValues: (e, t = {}) => {
			if (i = k(e), !t.keepDirty) {
				let e = Ke(i, a);
				n.dirtyFields = e, n.isDirty = !B(e);
			}
			t.keepIsValid || y(), g.state.next({
				...n,
				defaultValues: i
			});
		},
		clearErrors: ke,
		unregister: Ue,
		setError: Le,
		setFocus: it,
		getFieldState: Oe
	};
	return {
		...gt,
		formControl: gt
	};
}
function St(e = {}) {
	let t = n.useRef(void 0), r = n.useRef(void 0), i = n.useRef(e.formControl), [a, o] = n.useState(() => ({
		...k(bt),
		isLoading: F(e.defaultValues),
		errors: e.errors || {},
		disabled: e.disabled || !1,
		defaultValues: F(e.defaultValues) ? void 0 : e.defaultValues
	}));
	if (!t.current || e.formControl && i.current !== e.formControl) if (i.current = e.formControl, e.formControl) t.current = {
		...e.formControl,
		formState: a
	}, e.defaultValues && !F(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
	else {
		let { formControl: n, ...r } = xt(e);
		t.current = {
			...r,
			formState: a
		};
	}
	let s = t.current.control;
	return s._options = e, ve(() => {
		let e = s._subscribe({
			formState: s._proxyFormState,
			callback: () => o({
				...s._formState,
				defaultValues: s._defaultValues
			}),
			reRenderRoot: !0
		});
		return o((e) => ({
			...e,
			isReady: !0
		})), s._formState.isReady = !0, e;
	}, [s]), n.useEffect(() => s._disableForm(e.disabled), [s, e.disabled]), n.useEffect(() => {
		e.mode && (s._options.mode = e.mode), e.reValidateMode && (s._options.reValidateMode = e.reValidateMode);
	}, [
		s,
		e.mode,
		e.reValidateMode
	]), n.useEffect(() => {
		e.errors && (s._setErrors(e.errors), s._focusError());
	}, [s, e.errors]), n.useEffect(() => {
		e.shouldUnregister && s._subjects.state.next({ values: s._getWatch() });
	}, [s, e.shouldUnregister]), n.useEffect(() => {
		if (s._proxyFormState.isDirty) {
			let e = s._getDirty();
			e !== a.isDirty && s._subjects.state.next({ isDirty: e });
		}
	}, [s, a.isDirty]), n.useEffect(() => {
		e.values && !z(e.values, r.current) ? (s._reset(e.values, {
			keepFieldsRef: !0,
			...s._options.resetOptions
		}), s._options.resetOptions?.keepIsValid || s._setValid(), r.current = e.values, o((e) => ({ ...e }))) : s._resetDefaultValues();
	}, [s, e.values]), n.useEffect(() => {
		s._state.mount || (s._setValid(), s._state.mount = !0), s._state.watch && (s._state.watch = !1, s._subjects.state.next({ ...s._formState })), s._removeUnmounted();
	}), t.current.formState = n.useMemo(() => _e(a, s), [s, a]), t.current;
}
//#endregion
//#region ../shade/es/components/ui/form.js
i();
var Ct = Oe, wt = r({}), Tt = ({ ...e }) => /* @__PURE__ */ (0, w.jsx)(wt.Provider, {
	value: { name: e.name },
	children: /* @__PURE__ */ (0, w.jsx)(Te, { ...e })
}), Et = () => {
	let e = t(wt), n = t(Dt), { getFieldState: r, formState: i } = De(), a = r(e.name, i);
	if (!e) throw Error("useFormField should be used within <FormField>");
	let { id: o } = n;
	return {
		id: o,
		name: e.name,
		formItemId: `${o}-form-item`,
		formDescriptionId: `${o}-form-item-description`,
		formMessageId: `${o}-form-item-message`,
		...a
	};
}, Dt = r({}), Ot = a(({ className: e, ...t }, n) => {
	let r = s();
	return /* @__PURE__ */ (0, w.jsx)(Dt.Provider, {
		value: { id: r },
		children: /* @__PURE__ */ (0, w.jsx)("div", {
			ref: n,
			className: d("space-y-2", e),
			...t
		})
	});
});
Ot.displayName = "FormItem";
var kt = a(({ className: e, ...t }, n) => {
	let { formItemId: r } = Et();
	return /* @__PURE__ */ (0, w.jsx)(C, {
		ref: n,
		className: e,
		htmlFor: r,
		...t
	});
});
kt.displayName = "FormLabel";
var At = a(({ ...e }, t) => {
	let { error: n, formItemId: r, formDescriptionId: i, formMessageId: a } = Et();
	return /* @__PURE__ */ (0, w.jsx)(u, {
		ref: t,
		"aria-describedby": n ? `${i} ${a}` : `${i}`,
		"aria-invalid": !!n,
		id: r,
		...e
	});
});
At.displayName = "FormControl";
var jt = a(({ className: e, ...t }, n) => {
	let { formDescriptionId: r } = Et();
	return /* @__PURE__ */ (0, w.jsx)("p", {
		ref: n,
		className: d("text-sm text-text-secondary", e),
		id: r,
		...t
	});
});
jt.displayName = "FormDescription";
var Mt = a(({ className: e, children: t, ...n }, r) => {
	let { error: i, formMessageId: a } = Et(), o = i ? String(i?.message ?? "") : t;
	return o ? /* @__PURE__ */ (0, w.jsx)("p", {
		ref: r,
		className: d("text-xs text-destructive", e),
		id: a,
		...n,
		children: o
	}) : null;
});
//#endregion
//#region ../shade/es/components/ui/textarea.js
Mt.displayName = "FormMessage", i();
var Nt = a(({ className: e, ...t }, n) => /* @__PURE__ */ (0, w.jsx)("textarea", {
	ref: n,
	className: d(te("self"), ne.disabledFieldSelf, "flex min-h-[80px] w-full max-w-none px-3 py-2 text-base placeholder:text-muted-foreground", e),
	...t
}));
Nt.displayName = "Textarea";
//#endregion
//#region ../../node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/util.js
function Pt(e) {
	let t = Object.values(e).filter((e) => typeof e == "number");
	return Object.entries(e).filter(([e, n]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function Ft(e, t = "|") {
	return e.map((e) => an(e)).join(t);
}
function It(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
var Lt = class {
	constructor(e) {
		this._getter = e, this._value = void 0;
	}
	get value() {
		let e = this._getter;
		return e !== void 0 && (this._value = e(), this._getter = void 0), this._value;
	}
};
function Rt(e) {
	return new Lt(e);
}
function zt(e) {
	return e == null;
}
function Bt(e) {
	let t = +!!e.startsWith("^"), n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function Vt(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function Ht(e) {
	let t = Object.getOwnPropertyDescriptor(e, "shape");
	return t?.get ? t.get.raw : t?.value;
}
function Ut(e) {
	return Ht(e._zod.def) ?? e._zod.def.shape;
}
function Wt(e, t, n) {
	Object.defineProperty(e, t, {
		get() {
			let e = n();
			return Vt(this, t, e), e;
		},
		enumerable: !0,
		configurable: !0
	});
}
function Gt(e, t, n) {
	t in e ? Vt(e, t, n) : e[t] = n;
}
function Kt(e, t, n, r) {
	let i = Ut(t);
	for (let a of n) {
		let n = Object.getOwnPropertyDescriptor(i, a);
		n.enumerable && (n.get ? Wt(e, a, () => {
			let e = t._zod.def.shape[a];
			return r ? r(e, a) : e;
		}) : Gt(e, a, r ? r(n.value, a) : n.value));
	}
}
function qt(e, t) {
	for (let n of Reflect.ownKeys(t)) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.enumerable && (r.get ? Wt(e, n, () => t[n]) : Gt(e, n, r.value));
	}
}
function H(...e) {
	let t = {};
	for (let n of e) {
		let e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function Jt(e) {
	return JSON.stringify(e);
}
function Yt(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var Xt = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function Zt(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
var Qt = /* @__PURE__*/ Rt(() => {
	if (qn.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return Function(""), !0;
	} catch {
		return !1;
	}
});
function $t(e) {
	if (Zt(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return !(Zt(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function en(e) {
	return $t(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
var tn = /* @__PURE__*/ new Set([
	"string",
	"number",
	"symbol"
]);
function nn(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function rn(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function U(e) {
	let t = e;
	if (!t) return {};
	if (typeof t == "string") return { error: () => t };
	if (t?.message !== void 0) {
		if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
		t.error = t.message;
	}
	return delete t.message, typeof t.error == "string" ? {
		...t,
		error: () => t.error
	} : t;
}
function an(e) {
	return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function on(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional");
}
var sn = {
	safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, cn = {
	int64: [/* @__PURE__*/ BigInt("-9223372036854775808"), /* @__PURE__*/ BigInt("9223372036854775807")],
	uint64: [/* @__PURE__*/ BigInt(0), /* @__PURE__*/ BigInt("18446744073709551615")]
};
function ln(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	let i = {};
	return Kt(i, e, un(e, t)), rn(e, H(n, {
		shape: i,
		checks: []
	}));
}
function un(e, t) {
	let n = Ut(e), r = [];
	for (let e of Reflect.ownKeys(t)) {
		if (!Object.getOwnPropertyDescriptor(n, e)?.enumerable) throw Error(`Unrecognized key: "${String(e)}"`);
		t[e] && r.push(e);
	}
	return r;
}
function dn(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	let i = new Set(un(e, t)), a = {};
	return Kt(a, e, Reflect.ownKeys(Ut(e)).filter((e) => !i.has(e))), rn(e, H(n, {
		shape: a,
		checks: []
	}));
}
function fn(e, t) {
	if (!$t(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = Ut(e);
		for (let e of Reflect.ownKeys(t)) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return rn(e, H(e._zod.def, { shape: pn(e, t) }));
}
function pn(e, t) {
	let n = {};
	return Kt(n, e, Reflect.ownKeys(Ut(e))), qt(n, t), n;
}
function mn(e, t) {
	if (!$t(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return rn(e, H(e._zod.def, { shape: pn(e, t) }));
}
function hn(e, t) {
	if (!t?._zod?.def) throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
	if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	let n = {};
	return Kt(n, e, Reflect.ownKeys(Ut(e))), Kt(n, t, Reflect.ownKeys(Ut(t))), rn(e, H(e._zod.def, {
		shape: n,
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: t._zod.def.checks ?? []
	}));
}
function gn(e, t, n, r = "partial") {
	let i = t._zod.def.checks;
	if (i && i.length > 0) throw Error(`.${r}() cannot be used on object schemas containing refinements`);
	let a = n ? new Set(un(t, n)) : void 0, o = {};
	return Kt(o, t, Reflect.ownKeys(Ut(t)), e && ((t, n) => a && !a.has(n) ? t : new e({
		type: "optional",
		innerType: t
	}))), rn(t, H(t._zod.def, {
		shape: o,
		checks: []
	}));
}
function _n(e, t, n) {
	let r = n ? new Set(un(t, n)) : void 0, i = {};
	return Kt(i, t, Reflect.ownKeys(Ut(t)), (t, n) => r && !r.has(n) ? t : new e({
		type: "nonoptional",
		innerType: t
	})), rn(t, H(t._zod.def, { shape: i }));
}
function vn(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function yn(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
	return !1;
}
function bn(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function xn(e) {
	return typeof e == "string" ? e : e?.message;
}
function Sn(e, t, n) {
	var r;
	for (let i = t; i < e.length; i++) (r = e[i]).schema ?? (r.schema = n);
}
function Cn(e, t, n) {
	var r;
	let i = e.inst?._zod?.traits;
	i?.has("$ZodType") && (i.has("$ZodCheck") ? (r = e).schema ?? (r.schema = e.inst) : e.schema = e.inst);
	let a = e.schema === e.inst ? void 0 : e.schema?._zod.def?.error, o = e.message ? e.message : xn(e.inst?._zod.def?.error?.(e)) ?? xn(a?.(e)) ?? xn(t?.error?.(e)) ?? xn(n.customError?.(e)) ?? xn(n.localeError?.(e)) ?? "Invalid input", s = {};
	for (let t of Object.keys(e)) t === "inst" || t === "schema" || t === "continue" || t === "input" || t === "__proto__" || (s[t] = e[t]);
	return s.path ??= [], s.message = o, t?.reportInput && (s.input = e.input), s;
}
var wn = /[\uD800-\uDBFF]/;
function Tn(e) {
	let t = e.length;
	if (!wn.test(e)) return t;
	let n = t;
	for (let r = 0; r < t - 1; r++) (e.charCodeAt(r) & 64512) == 55296 && (e.charCodeAt(r + 1) & 64512) == 56320 && (n--, r++);
	return n;
}
function En(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function Dn(e) {
	let t = typeof e;
	switch (t) {
		case "number": return Number.isNaN(e) ? "nan" : "number";
		case "object": {
			if (e === null) return "null";
			if (Array.isArray(e)) return "array";
			let t = e;
			if (t && Object.getPrototypeOf(t) !== Object.prototype && "constructor" in t && t.constructor) return t.constructor.name;
		}
	}
	return t;
}
function On(...e) {
	let [t, n, r] = e;
	return typeof t == "string" ? {
		message: t,
		code: "custom",
		input: n,
		inst: r
	} : { ...t };
}
function kn(e, t) {
	for (let n in t) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.get ? Object.defineProperty(e, n, {
			...r,
			enumerable: !1
		}) : Nn(e, n, r.value);
	}
}
function An(e, t, n, r = !0) {
	return Object.defineProperty(e, t, {
		configurable: !0,
		writable: !0,
		enumerable: r,
		value: n
	}), n;
}
function jn(e, t, n) {
	return An(e, t, n, !1);
}
function Mn(e, t) {
	for (let n in e) {
		let r = e[n];
		Object.defineProperty(t, n, {
			configurable: !0,
			enumerable: !0,
			get() {
				return An(this, n, r(this));
			},
			set(e) {
				An(this, n, e);
			}
		});
	}
	return t;
}
function Nn(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		get() {
			return this == null ? n : An(this, t, n.bind(this));
		},
		set(e) {
			An(this, t, e);
		}
	});
}
function Pn(e, t) {
	let n = Object.getPrototypeOf(e);
	return t in n ? void 0 : n;
}
var Fn, In = !1, Ln = {
	configurable: !0,
	get() {
		In = !0;
	}
};
function W(e, t, n) {
	let r = Object.getPrototypeOf(e._zod);
	if (t in r && Fn !== e._zod) {
		Fn = void 0;
		return;
	}
	Fn = e._zod, Object.defineProperty(r, t, {
		configurable: !0,
		get() {
			Object.defineProperty(this, t, Ln);
			let e = In;
			In = !1;
			try {
				let r = n(this);
				return In ? delete this[t] : Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: r
				}), In ||= e, r;
			} catch (n) {
				throw delete this[t], In ||= e, n;
			}
		},
		set(e) {
			Object.defineProperty(this, t, {
				configurable: !0,
				writable: !0,
				value: e
			});
		}
	});
}
function Rn(e, t, n, r) {
	let i = Pn(e, t);
	i && Object.defineProperty(i, t, {
		configurable: !0,
		get() {
			let e = {
				configurable: !0,
				writable: !0,
				enumerable: r,
				value: void 0
			};
			return Object.defineProperty(this, t, e), e.value = n(this), Object.defineProperty(this, t, e), e.value;
		},
		set(e) {
			Object.defineProperty(this, t, {
				configurable: !0,
				writable: !0,
				enumerable: r,
				value: e
			});
		}
	});
}
var zn = "~constantCatch";
function Bn(e) {
	let t = () => e;
	return t[zn] = !0, t;
}
//#endregion
//#region ../../node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/core.js
var Vn, Hn = {
	value: void 0,
	enumerable: !1
}, Un = "captureStackTrace" in Error ? Error : null;
function Wn(e) {
	let t = Un;
	if (t) {
		let n = t.stackTraceLimit;
		if (typeof n == "number") {
			try {
				t.stackTraceLimit = 0;
			} catch {
				return Un = null, new e();
			}
			try {
				return new e();
			} finally {
				t.stackTraceLimit = n;
			}
		}
	}
	return new e();
}
function G(e, t, n, r) {
	let i = {};
	function a(e) {
		this.def = e, this.constr = d, this.traits = /* @__PURE__ */ new Set();
	}
	a.prototype = i;
	let o = n, s = o && /* @__PURE__ */ new WeakSet();
	function c(n, r) {
		if (!n._zod) {
			Hn.value = new a(r);
			try {
				Object.defineProperty(n, "_zod", Hn);
			} finally {
				Hn.value = void 0;
			}
		} else if (n._zod.traits.has(e)) return;
		if (n._zod.traits.add(e), t(n, r), s) {
			let e = Object.getPrototypeOf(n), t = n._zod.constr.prototype, r = e;
			for (; r && r !== t;) r = Object.getPrototypeOf(r);
			let i = r ?? e;
			s.has(i) || (s.add(i), kn(i, o));
		}
		let i = d.prototype;
		for (let e in i) Object.prototype.hasOwnProperty.call(i, e) && (e in n || (n[e] = i[e].bind(n)));
	}
	let l = r?.Parent ?? Object;
	class u extends l {}
	Object.defineProperty(u, "name", { value: e });
	function d(e) {
		let t = r?.Parent ? Wn(u) : this;
		c(t, e);
		let n = t._zod.deferred;
		if (n) {
			for (let e of n) e();
			t._zod.deferred = void 0;
		}
		let i = globalThis.__zod_globalConfig?.postProcessor;
		return i && i(t), t;
	}
	return Object.defineProperty(d, "init", { value: c }), Object.defineProperty(d, Symbol.hasInstance, { value: (t) => r?.Parent && t instanceof r.Parent ? !0 : t?._zod?.traits?.has(e) }), Object.defineProperty(d, "name", { value: e }), d;
}
var Gn = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, Kn = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
};
(Vn = globalThis).__zod_globalConfig ?? (Vn.__zod_globalConfig = {});
var qn = globalThis.__zod_globalConfig;
function Jn(e) {
	return e && Object.assign(qn, e), qn;
}
//#endregion
//#region ../../node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/errors.js
function Yn() {
	let e = this._zod;
	return e.message ??= JSON.stringify(e.def, It, 2), e.message;
}
function Xn(e) {
	this._zod.message = e;
}
var Zn = {
	get: Yn,
	set: Xn,
	enumerable: !0,
	configurable: !0
}, Qn = {
	value: void 0,
	enumerable: !1
}, $n = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), er = (e, t) => {
	e.name = "$ZodError", Qn.value = t, Object.defineProperty(e, "issues", Qn), Qn.value = void 0, Object.defineProperty(e, "message", Zn);
	let n = Object.getPrototypeOf(e);
	$n.has(n) || ($n.add(n), Object.defineProperty(n, "toString", {
		configurable: !0,
		enumerable: !1,
		get() {
			let e = () => this.message;
			return Object.defineProperty(this, "toString", {
				value: e,
				configurable: !0,
				writable: !0
			}), e;
		},
		set(e) {
			Object.defineProperty(this, "toString", {
				value: e,
				configurable: !0,
				writable: !0
			});
		}
	}));
}, tr = G("$ZodError", er), nr = G("$ZodError", er, void 0, { Parent: Error });
function rr(e, t, n) {
	return Object.prototype.hasOwnProperty.call(e, t) || (t === "__proto__" ? Object.defineProperty(e, t, {
		value: n(),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : e[t] = n()), e[t];
}
function ir(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? rr(n, i.path[0], () => []).push(t(i)) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function ar(e, t = (e) => e.message) {
	let n = { _errors: [] }, r = (e, i = []) => {
		for (let a of e.issues) if (a.code === "invalid_union" && a.errors.length) a.errors.map((e) => r({ issues: e }, [...i, ...a.path]));
		else if (a.code === "invalid_key") r({ issues: a.issues }, [...i, ...a.path]);
		else if (a.code === "invalid_element") r({ issues: a.issues }, [...i, ...a.path]);
		else {
			let e = [...i, ...a.path];
			if (e.length === 0) n._errors.push(t(a));
			else {
				let r = n, i = 0;
				for (; i < e.length;) {
					let n = e[i], o = i === e.length - 1;
					if (n === "_errors") {
						o && r._errors.push(t(a)), i++;
						continue;
					}
					Object.prototype.hasOwnProperty.call(r, n) || Object.defineProperty(r, n, {
						value: { _errors: [] },
						enumerable: !0,
						writable: !0,
						configurable: !0
					});
					let s = r[n];
					o && s._errors.push(t(a)), r = s, i++;
				}
			}
		}
	};
	return r(e), n;
}
//#endregion
//#region ../../node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/parse.js
function or(e, t) {
	return {
		callee: t?.callee ?? e,
		Err: t?.Err
	};
}
var sr = (e) => {
	let t = (n, r, i, a) => {
		let o = i ? {
			...i,
			async: !1
		} : { async: !1 }, s = n._zod.run({
			value: r,
			issues: []
		}, o);
		if (s instanceof Promise) throw new Gn();
		if (s.issues.length) {
			let n = new ((a?.Err) ?? e)(s.issues.map((e) => Cn(e, o, Jn())));
			throw Xt(n, a?.callee ?? t), n;
		}
		return s.value;
	};
	return t;
}, cr = /* @__PURE__*/ sr(nr), lr = (e) => {
	let t = async (n, r, i, a) => {
		let o = i ? {
			...i,
			async: !0
		} : { async: !0 }, s = n._zod.run({
			value: r,
			issues: []
		}, o);
		if (s instanceof Promise && (s = await s), s.issues.length) {
			let n = new ((a?.Err) ?? e)(s.issues.map((e) => Cn(e, o, Jn())));
			throw Xt(n, a?.callee ?? t), n;
		}
		return s.value;
	};
	return t;
}, ur = /* @__PURE__*/ lr(nr), dr = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		async: !1
	} : { async: !1 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	if (a instanceof Promise) throw new Gn();
	return a.issues.length ? fr(e, a.issues, i) : {
		success: !0,
		data: a.value
	};
};
function fr(e, t, n) {
	let r;
	return {
		success: !1,
		get error() {
			return r || (r = new e(t.map((e) => Cn(e, n, Jn()))), t = void 0, n = void 0), r;
		},
		set error(e) {
			r = e, t = void 0, n = void 0;
		}
	};
}
var pr = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		async: !0
	} : { async: !0 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	return a instanceof Promise && (a = await a), a.issues.length ? fr(e, a.issues, i) : {
		success: !0,
		data: a.value
	};
}, mr = /* @__PURE__ */ Symbol.for("zod.compile.invalid"), hr = /* @__PURE__ */ Symbol.for("zod.compile.fallback"), gr = ((e, t, n) => {
	let r = e._zod.bag.validator;
	if (r !== void 0) {
		if (r(t) !== mr) return !0;
		if (r.definite === !0 && n === void 0) return !1;
	}
	return _r(e, t, n);
});
function _r(e, t, n) {
	let r = n ? {
		...n,
		async: !1,
		abortEarly: !0
	} : {
		async: !1,
		abortEarly: !0
	}, i = e._zod.bag.fallbackRun, a;
	if (i ? (r[hr] = !0, a = i({
		value: t,
		issues: []
	}, r)) : a = e._zod.run({
		value: t,
		issues: []
	}, r), a instanceof Promise) throw new Gn();
	return a.issues.length === 0;
}
var vr = async (e, t, n) => {
	let r = n ? {
		...n,
		async: !0,
		abortEarly: !0
	} : {
		async: !0,
		abortEarly: !0
	}, i = e._zod.run({
		value: t,
		issues: []
	}, r);
	return i instanceof Promise && (i = await i), i.issues.length === 0;
}, yr = (e) => {
	let t = sr(e), n = (e, r, i, a) => {
		let o = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return t(e, r, o, or(n, a));
	};
	return n;
}, br = (e) => {
	let t = sr(e), n = (e, r, i, a) => t(e, r, i, or(n, a));
	return n;
}, xr = (e) => {
	let t = lr(e), n = async (e, r, i, a) => {
		let o = i ? {
			...i,
			direction: "backward"
		} : { direction: "backward" };
		return await t(e, r, o, or(n, a));
	};
	return n;
}, Sr = (e) => {
	let t = lr(e), n = async (e, r, i, a) => await t(e, r, i, or(n, a));
	return n;
}, Cr = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return dr(e)(t, n, i);
}, wr = (e) => (t, n, r) => dr(e)(t, n, r), Tr = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return pr(e)(t, n, i);
}, Er = (e) => async (t, n, r) => pr(e)(t, n, r), Dr = /^[cC][0-9a-z]{6,}$/, Or = /^[0-9a-z]+$/, kr = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, Ar = /^[0-9a-vA-V]{20}$/, jr = /^[A-Za-z0-9]{27}$/, Mr = /^[a-zA-Z0-9_-]{21}$/;
function Nr(e) {
	return RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
var Pr = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Fr = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Ir = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Lr = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Rr = "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function zr() {
	return new RegExp(Rr, "u");
}
var Br = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Vr = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Hr = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Ur = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Wr = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Gr = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/, Kr = /^https?$/, qr = /^\+[1-9]\d{6,14}$/, Jr = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function Yr(e) {
	return RegExp(`^${e}$`);
}
var Xr = /*@__PURE__*/ Yr(Jr);
function Zr(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : e.seconds ? `${t}:[0-5]\\d(?:\\.\\d+)?` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Qr(e) {
	return RegExp(`^${Zr(e)}$`);
}
function $r(e) {
	let t = ["Z"];
	e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let n = `${Zr({
		precision: e.precision,
		seconds: !0
	})}(?:${t.join("|")})`, r = e.local ? `${n}|${Zr({ precision: e.precision })}` : n;
	return RegExp(`^${Jr}T(?:${r})$`);
}
var ei = /^[\s\S]{0,}$/, ti = /^[^A-Z]*$/, ni = /^[^a-z]*$/, K = /*@__PURE__*/ G("$ZodCheck", (e, t) => {
	var n;
	e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), ri = (e) => {
	let t = e.value;
	return !zt(t) && t.length !== void 0;
}, ii = /*@__PURE__*/ G("$ZodCheckMaxLength", (e, t) => {
	var n;
	K.init(e, t), (n = e._zod.def).when ?? (n.when = ri), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if ((typeof r == "string" && i > t.maximum ? Tn(r) : i) <= t.maximum) return;
		let a = En(r);
		n.issues.push({
			origin: a,
			code: "too_big",
			maximum: t.maximum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), ai = /*@__PURE__*/ G("$ZodCheckMinLength", (e, t) => {
	var n;
	K.init(e, t), (n = e._zod.def).when ?? (n.when = ri), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if ((typeof r == "string" && i >= t.minimum && i < t.minimum * 2 ? Tn(r) : i) >= t.minimum) return;
		let a = En(r);
		n.issues.push({
			origin: a,
			code: "too_small",
			minimum: t.minimum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), oi = /*@__PURE__*/ G("$ZodCheckLengthEquals", (e, t) => {
	var n;
	K.init(e, t), (n = e._zod.def).when ?? (n.when = ri), e._zod.check = (n) => {
		let r = n.value, i = r.length, a = typeof r == "string" && i >= t.length && i <= t.length * 2 ? Tn(r) : i;
		if (a === t.length) return;
		let o = En(r), s = a > t.length;
		n.issues.push({
			origin: o,
			...s ? {
				code: "too_big",
				maximum: t.length
			} : {
				code: "too_small",
				minimum: t.length
			},
			inclusive: !0,
			exact: !0,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), si = /*@__PURE__*/ G("$ZodCheckStringFormat", (e, t) => {
	var n, r;
	K.init(e, t), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
		t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: t.format,
			input: n.value,
			...t.pattern ? { pattern: t.pattern.toString() } : {},
			inst: e,
			continue: !t.abort
		});
	}) : (r = e._zod).check ?? (r.check = () => {});
}), ci = /*@__PURE__*/ G("$ZodCheckRegex", (e, t) => {
	si.init(e, t), e._zod.check = (n) => {
		t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "regex",
			input: n.value,
			pattern: t.pattern.toString(),
			inst: e,
			continue: !t.abort
		});
	};
}), li = /*@__PURE__*/ G("$ZodCheckLowerCase", (e, t) => {
	t.pattern ??= ti, si.init(e, t);
}), ui = /*@__PURE__*/ G("$ZodCheckUpperCase", (e, t) => {
	t.pattern ??= ni, si.init(e, t);
}), di = /*@__PURE__*/ G("$ZodCheckIncludes", (e, t) => {
	K.init(e, t);
	let n = nn(t.includes);
	t.pattern = new RegExp(typeof t.position == "number" ? `^.{${t.position},}${n}` : n), e._zod.check = (n) => {
		n.value.includes(t.includes, t.position) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "includes",
			includes: t.includes,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), fi = /*@__PURE__*/ G("$ZodCheckStartsWith", (e, t) => {
	K.init(e, t);
	let n = RegExp(`^${nn(t.prefix)}.*`);
	t.pattern ??= n, e._zod.check = (n) => {
		n.value.startsWith(t.prefix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "starts_with",
			prefix: t.prefix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), pi = /*@__PURE__*/ G("$ZodCheckEndsWith", (e, t) => {
	K.init(e, t);
	let n = RegExp(`.*${nn(t.suffix)}$`);
	t.pattern ??= n, e._zod.check = (n) => {
		n.value.endsWith(t.suffix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "ends_with",
			suffix: t.suffix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), mi = /*@__PURE__*/ G("$ZodCheckOverwrite", (e, t) => {
	K.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
}), hi = class {
	constructor(e = [], t = {}) {
		this.content = [], this.indent = 0, this.args = e, this.closed = t;
	}
	indented(e) {
		this.indent += 1;
		try {
			e(this);
		} finally {
			--this.indent;
		}
	}
	write(e) {
		if (typeof e == "function") {
			e(this, { execution: "sync" }), e(this, { execution: "async" });
			return;
		}
		let t = e.split("\n").filter((e) => e), n = Math.min(...t.map((e) => e.length - e.trimStart().length)), r = t.map((e) => e.slice(n)).map((e) => " ".repeat(this.indent * 2) + e);
		for (let e of r) this.content.push(e);
	}
	compile() {
		let e = Function, t = this?.content ?? [""];
		return new e(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {\n${t.join("\n")}\n};`)(...Object.values(this.closed));
	}
}, gi = {
	major: 4,
	minor: 6,
	patch: 5
}, q = /*@__PURE__*/ G("$ZodType", (e, t) => {
	var n;
	e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = gi;
	let r = e._zod.def.checks, i = e._zod.traits.has("$ZodCheck") ? [e, ...r ?? []] : r?.length ? [...r] : [];
	for (let t of i) for (let n of t._zod.onattach) n(e);
	if (i.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		let t = (t, n, r) => {
			if (t.memo) return t;
			let i = vn(t), a;
			for (let o of n) {
				if (o._zod.def.when) {
					if (yn(t) || !o._zod.def.when(t)) continue;
				} else if (i) continue;
				let n = t.issues.length, s = o._zod.check(t);
				if (s instanceof Promise && r?.async === !1) throw new Gn();
				if (a || s instanceof Promise) a = (a ?? Promise.resolve()).then(async () => {
					await s, t.issues.length !== n && (Sn(t.issues, n, e), i ||= vn(t, n));
				});
				else {
					if (t.issues.length === n) continue;
					Sn(t.issues, n, e), i ||= vn(t, n);
				}
			}
			return a ? a.then(() => t) : t;
		}, n = (n, r, a) => {
			if (vn(n)) return n.aborted = !0, n;
			let o = t(r, i, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new Gn();
				return o.then((t) => e._zod.parse(t, a));
			}
			return e._zod.parse(o, a);
		};
		e._zod.run = (r, a) => {
			if (a.skipChecks) return e._zod.parse(r, a);
			if (a.direction === "backward") {
				let t = e._zod.parse({
					value: r.value,
					issues: []
				}, {
					...a,
					skipChecks: !0
				});
				return t instanceof Promise ? t.then((e) => n(e, r, a)) : n(t, r, a);
			}
			let o = e._zod.parse(r, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new Gn();
				return o.then((e) => t(e, i, a));
			}
			return t(o, i, a);
		};
	}
}, {
	get "~standard"() {
		return jn(this, "~standard", yi(this));
	},
	set "~standard"(e) {
		An(this, "~standard", e);
	}
}), _i = (e, t) => e.issues.length ? { issues: e.issues.map((e) => Cn(e, t, Jn())) } : { value: e.value };
async function vi(e, t) {
	let n = { async: !0 };
	return _i(await e._zod.run({
		value: t,
		issues: []
	}, n), n);
}
function yi(e) {
	return {
		validate: (t) => {
			let n = { async: !1 };
			try {
				let r = e._zod.run({
					value: t,
					issues: []
				}, n);
				if (!(r instanceof Promise)) return _i(r, n);
			} catch {}
			return vi(e, t);
		},
		vendor: "zod",
		version: 1
	};
}
var bi = /*@__PURE__*/ G("$ZodString", (e, t) => {
	q.init(e, t), e._zod.pattern = t.pattern ?? ei, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = String(n.value);
		} catch {}
		return typeof n.value == "string" || n.issues.push({
			expected: "string",
			code: "invalid_type",
			input: n.value,
			inst: e
		}), n;
	};
}), J = /*@__PURE__*/ G("$ZodStringFormat", (e, t) => {
	si.init(e, t), bi.init(e, t);
}), xi = /*@__PURE__*/ G("$ZodGUID", (e, t) => {
	t.pattern ??= Fr, J.init(e, t);
}), Si = /*@__PURE__*/ G("$ZodUUID", (e, t) => {
	if (t.version) {
		let e = {
			v1: 1,
			v2: 2,
			v3: 3,
			v4: 4,
			v5: 5,
			v6: 6,
			v7: 7,
			v8: 8
		}[t.version];
		if (e === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
		t.pattern ??= Ir(e);
	} else t.pattern ??= Ir();
	J.init(e, t);
}), Ci = /*@__PURE__*/ G("$ZodEmail", (e, t) => {
	t.pattern ??= Lr, J.init(e, t);
});
function wi(e) {
	try {
		return typeof URL < "u" && typeof URL.canParse == "function" ? URL.canParse(e) : (new URL(e), !0);
	} catch {
		return !1;
	}
}
function Ti(e, t) {
	return !("normalize" in t) && !("hostname" in t) && !("protocol" in t) ? wi(e) || 2 : Ei(e, t);
}
function Ei(e, t) {
	if (!t.normalize && t.protocol?.source === Kr.source && !/^https?:\/\//i.test(e)) return 1;
	try {
		if (typeof URL < "u") {
			let t = URL;
			if (typeof t.parse == "function") return t.parse(e) ?? 2;
		}
		return new URL(e);
	} catch {
		return 2;
	}
}
var Di = /[\t\n\r]/g;
function Oi(e) {
	return e.replace(Di, "");
}
function ki(e, t) {
	return t.lastIndex = 0, t.test(e.hostname);
}
function Ai(e, t) {
	return t.lastIndex = 0, t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol);
}
var ji = /*@__PURE__*/ G("$ZodURL", (e, t) => {
	J.init(e, t), e._zod.check = (n) => {
		try {
			let r = n.value.trim(), i = Ti(r, t);
			if (i === 1) {
				n.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid URL format",
					input: n.value,
					inst: e,
					continue: !t.abort
				});
				return;
			}
			if (i === 2) {
				n.issues.push({
					code: "invalid_format",
					format: "url",
					input: n.value,
					inst: e,
					continue: !t.abort
				});
				return;
			}
			if (i === !0) {
				n.value = Oi(r);
				return;
			}
			t.hostname && !ki(i, t.hostname) && n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid hostname",
				pattern: t.hostname.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			}), t.protocol && !Ai(i, t.protocol) && n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid protocol",
				pattern: t.protocol.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			}), n.value = t.normalize ? i.href : Oi(r);
			return;
		} catch {
			n.issues.push({
				code: "invalid_format",
				format: "url",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
}), Mi = /*@__PURE__*/ G("$ZodEmoji", (e, t) => {
	t.pattern ??= zr(), J.init(e, t);
}), Ni = /*@__PURE__*/ G("$ZodNanoID", (e, t) => {
	if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1)) throw Error(`Invalid nanoid length: ${t.length}`);
	t.pattern ??= t.length === void 0 ? Mr : Nr(t.length), J.init(e, t);
}), Pi = /*@__PURE__*/ G("$ZodCUID", (e, t) => {
	t.pattern ??= Dr, J.init(e, t);
}), Fi = /*@__PURE__*/ G("$ZodCUID2", (e, t) => {
	t.pattern ??= Or, J.init(e, t);
}), Ii = /*@__PURE__*/ G("$ZodULID", (e, t) => {
	t.pattern ??= kr, J.init(e, t);
}), Li = /*@__PURE__*/ G("$ZodXID", (e, t) => {
	t.pattern ??= Ar, J.init(e, t);
}), Ri = /*@__PURE__*/ G("$ZodKSUID", (e, t) => {
	t.pattern ??= jr, J.init(e, t);
}), zi = /*@__PURE__*/ G("$ZodISODateTime", (e, t) => {
	t.pattern ??= $r(t), J.init(e, t);
}), Bi = /*@__PURE__*/ G("$ZodISODate", (e, t) => {
	t.pattern ??= Xr, J.init(e, t);
}), Vi = /*@__PURE__*/ G("$ZodISOTime", (e, t) => {
	t.pattern ??= Qr(t), J.init(e, t);
}), Hi = /*@__PURE__*/ G("$ZodISODuration", (e, t) => {
	t.pattern ??= Pr, J.init(e, t);
}), Ui = /*@__PURE__*/ G("$ZodIPv4", (e, t) => {
	t.pattern ??= Br, J.init(e, t);
}), Wi = /^[0-9a-fA-F:.]+$/;
function Gi(e) {
	return Wi.test(e) ? wi(`http://[${e}]`) : !1;
}
var Ki = /*@__PURE__*/ G("$ZodIPv6", (e, t) => {
	t.pattern ??= Vr, J.init(e, t), e._zod.check = (n) => {
		Gi(n.value) || n.issues.push({
			code: "invalid_format",
			format: "ipv6",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), qi = /*@__PURE__*/ G("$ZodCIDRv4", (e, t) => {
	t.pattern ??= Hr, J.init(e, t);
});
function Ji(e) {
	let t = e.split("/");
	if (t.length !== 2) return !1;
	let [n, r] = t;
	if (!r) return !1;
	let i = Number(r);
	return `${i}` !== r || i < 0 || i > 128 ? !1 : Gi(n);
}
var Yi = /*@__PURE__*/ G("$ZodCIDRv6", (e, t) => {
	t.pattern ??= Ur, J.init(e, t), e._zod.check = (n) => {
		Ji(n.value) || n.issues.push({
			code: "invalid_format",
			format: "cidrv6",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function Xi(e) {
	if (e === "") return !0;
	if (/\s/.test(e) || e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
var Zi = /^[0-9a-zA-Z+/]*={0,2}$/, Qi = /*@__PURE__*/ G("$ZodBase64", (e, t) => {
	t.pattern ??= Zi, J.init(e, t), e._zod.check = (n) => {
		Xi(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), $i = /^[A-Za-z0-9_-]*$/;
function ea(e) {
	if (!$i.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return Xi(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
var ta = /*@__PURE__*/ G("$ZodBase64URL", (e, t) => {
	t.pattern ??= $i, J.init(e, t), e._zod.check = (n) => {
		ea(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), na = /*@__PURE__*/ G("$ZodE164", (e, t) => {
	t.pattern ??= qr, J.init(e, t);
});
function ra(e, t = null) {
	try {
		let n = e.split(".");
		if (n.length !== 3) return !1;
		let [r] = n;
		if (!r) return !1;
		let i = JSON.parse(atob(r));
		return !("typ" in i && i?.typ !== "JWT" || !i.alg || t && (!("alg" in i) || i.alg !== t));
	} catch {
		return !1;
	}
}
var ia = /*@__PURE__*/ G("$ZodJWT", (e, t) => {
	J.init(e, t), e._zod.check = (n) => {
		ra(n.value, t.alg) || n.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), aa = /*@__PURE__*/ G("$ZodUnknown", (e, t) => {
	q.init(e, t), e._zod.parse = (e) => e;
}), oa = /*@__PURE__*/ G("$ZodNever", (e, t) => {
	q.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
});
function sa(e, t, n) {
	e.issues.length && t.issues.push(...bn(n, e.issues)), t.value[n] = e.value;
}
var ca = /*@__PURE__*/ G("$ZodArray", (e, t) => {
	q.init(e, t);
	let n = qn.memoizer;
	n?.attach(e), e._zod.parse = (r, i) => {
		let a = r.value;
		if (!Array.isArray(a)) return r.issues.push({
			expected: "array",
			code: "invalid_type",
			input: a,
			inst: e
		}), r;
		r.value = n ? n.alloc(e, r, Array(a.length), i) : Array(a.length);
		let o = [], s = i?.abortEarly;
		for (let e = 0; e < a.length; e++) {
			let n = a[e], c = t.element._zod.run({
				value: n,
				issues: []
			}, i);
			if (c instanceof Promise) o.push(c.then((t) => sa(t, r, e)));
			else if (sa(c, r, e), s && c.issues.length !== 0 && vn(c)) break;
		}
		return o.length ? Promise.all(o).then(() => r) : r;
	};
});
function la(e, t, n, r, i, a) {
	let o = n in r, s = a === "optional";
	if (!(!o && s && i === "optional")) {
		if (e.issues.length) {
			if (i !== void 0 && s && !o) return;
			t.issues.push(...bn(n, e.issues));
		}
		if (!o && i === void 0) {
			e.issues.length || t.issues.push({
				code: "invalid_type",
				expected: "nonoptional",
				input: void 0,
				path: [n]
			});
			return;
		}
		e.value === void 0 ? (o || i === "defaulted" && !s) && (t.value[n] = void 0) : t.value[n] = e.value;
	}
}
var ua = [];
function da(e) {
	let t = Object.keys(e.shape), n = Object.getOwnPropertySymbols(e.shape), r = n.length ? n : ua, i = r.length ? [...t, ...r] : t;
	for (let t of i) if (!e.shape?.[t]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`);
	let a = on(e.shape);
	return {
		...e,
		allKeys: i,
		symbolKeys: r,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(a)
	};
}
function fa(e, t, n, r, i, a, o) {
	let s = [], c = i.keySet, l = i.catchall._zod, u = l.def.type, d = l.optin, f = l.optout, p = 0;
	for (let i in t) {
		if (o && n.issues.length !== p) {
			if (vn(n, p)) break;
			p = n.issues.length;
		}
		if (c.has(i)) continue;
		if (i === "__proto__") {
			u === "never" && s.push(i);
			continue;
		}
		if (u === "never") {
			s.push(i);
			continue;
		}
		let a = l.run({
			value: t[i],
			issues: []
		}, r);
		a instanceof Promise ? e.push(a.then((e) => la(e, n, i, t, d, f))) : la(a, n, i, t, d, f);
	}
	return s.length && n.issues.push({
		code: "unrecognized_keys",
		keys: s,
		input: t,
		inst: a,
		continue: !0
	}), e.length ? Promise.all(e).then(() => n) : n;
}
var pa = /*@__PURE__*/ G("$ZodObject", (e, t) => {
	q.init(e, t);
	let n = Object.getOwnPropertyDescriptor(t, "shape"), r = n?.get ? n.get.raw : t.shape ?? {};
	if (r) {
		let e = () => {
			let n = { ...r };
			return Object.defineProperty(t, "shape", { value: n }), e.raw = n, n;
		};
		e.raw = r, Object.defineProperty(t, "shape", { get: e });
	}
	let i = Rt(() => da(t));
	W(e, "propValues", (e) => {
		let t = e.def.shape, n = {};
		for (let e in t) {
			let r = t[e]._zod;
			if (r.values) {
				Object.prototype.hasOwnProperty.call(n, e) || Vt(n, e, /* @__PURE__ */ new Set());
				for (let t of r.values) n[e].add(t);
				r.optin !== void 0 && n[e].add(void 0);
			}
		}
		return n;
	});
	let a = Zt, o = t.catchall, s, c = qn.memoizer;
	c?.attach(e), e._zod.parse = (t, n) => {
		s ??= i.value;
		let r = t.value;
		if (!a(r)) return t.issues.push({
			expected: "object",
			code: "invalid_type",
			input: r,
			inst: e
		}), t;
		t.value = c ? c.alloc(e, t, {}, n) : {};
		let l = [], u = s.shape, d = n?.abortEarly, f = t.issues.length;
		for (let e of s.allKeys) {
			if (d && t.issues.length !== f) {
				if (vn(t, f)) break;
				f = t.issues.length;
			}
			if (e === "__proto__") continue;
			let i = u[e], a = i._zod.optin, o = i._zod.optout, s = i._zod.run({
				value: r[e],
				issues: []
			}, n);
			s instanceof Promise ? l.push(s.then((n) => la(n, t, e, r, a, o))) : la(s, t, e, r, a, o);
		}
		return o ? fa(l, r, t, n, i.value, e, d === !0) : l.length ? Promise.all(l).then(() => t) : t;
	};
}), ma = /*@__PURE__*/ G("$ZodObjectJIT", (e, t) => {
	pa.init(e, t);
	let n = e._zod.parse, r = Rt(() => da(t)), i = qn.memoizer, a = (t) => {
		let n = r.value, a = n.symbolKeys, o = new hi(["payload", "ctx"], {
			shape: t,
			inst: e,
			memo: i,
			syms: a
		}), s = (e) => `shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`, c = (e, t) => `
          let ${e}_ab = false;
          for (let i = 0; i < ${e}.issues.length; i++) {
            const iss = ${e}.issues[i];
            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${e}_ab = true;
          }
          if (${e}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
		o.write("const input = payload.value;");
		let l = Object.create(null), u = 0;
		for (let e of n.allKeys) l[e] = `key_${u++}`;
		o.write(i ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
		for (let e of n.allKeys) {
			if (e === "__proto__") continue;
			let n = l[e], r = typeof e == "symbol" ? `syms[${a.indexOf(e)}]` : Jt(e), i = `${r} in input`, u = t[e], d = u?._zod?.optin, f = d !== void 0, p = u?._zod?.optout === "optional";
			if (o.write(`const ${n} = ${s(r)};`), f && p) {
				let e = d === "optional" ? `${n}_present` : `${n}.value !== undefined || ${n}_present`;
				o.write(`
        const ${n}_present = ${i};
        if (!${n}.issues.length || ${n}_present) {
          if (${n}.issues.length) {${c(n, r)}
          }

          if (${e}) {
            newResult[${r}] = ${n}.value;
          }
        }

      `);
			} else f ? (o.write(`
        if (${n}.issues.length) {${c(n, r)}
        }
      `), d === "defaulted" ? o.write(`newResult[${r}] = ${n}.value;`) : o.write(`
        if (${n}.value !== undefined || ${i}) {
          newResult[${r}] = ${n}.value;
        }
      `)) : o.write(`
        const ${n}_present = ${i};
        if (${n}.issues.length) {${c(n, r)}
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${r}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${n}_present) {
          newResult[${r}] = ${n}.value;
        }

      `);
		}
		return o.write("payload.value = newResult;"), o.write("return payload;"), o.compile();
	}, o, s = Zt, c = !qn.jitless, l = c && Qt.value, u = t.catchall, d;
	e._zod.parse = (i, f) => {
		d ??= r.value;
		let p = i.value;
		return s(p) ? c && l && f?.async === !1 && f.jitless !== !0 ? (o ||= a(t.shape), i = o(i, f), u ? fa([], p, i, f, d, e, f?.abortEarly === !0) : i) : n(i, f) : (i.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), i);
	};
});
function ha(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !vn(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => Cn(e, r, Jn())))
	}), t);
}
var ga = /*@__PURE__*/ G("$ZodUnion", (e, t) => {
	q.init(e, t), W(e, "optin", (e) => e.def.options.some((e) => e._zod.optin === "defaulted") ? "defaulted" : e.def.options.some((e) => e._zod.optin !== void 0) ? "optional" : void 0), W(e, "optout", (e) => e.def.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), W(e, "values", (e) => {
		if (e.def.options.every((e) => e._zod.values)) return new Set(e.def.options.flatMap((e) => Array.from(e._zod.values)));
	}), W(e, "pattern", (e) => {
		if (e.def.options.every((e) => e._zod.pattern)) {
			let t = e.def.options.map((e) => e._zod.pattern);
			return RegExp(`^(${t.map((e) => Bt(e.source)).join("|")})$`);
		}
	});
	let n = t.options.length === 1 ? t.options[0]._zod.run : null;
	e._zod.parse = (r, i) => {
		if (n) return n(r, i);
		let a = !1, o = [];
		for (let e of t.options) {
			let t = e._zod.run({
				value: r.value,
				issues: []
			}, i);
			if (t instanceof Promise) o.push(t), a = !0;
			else {
				if (t.issues.length === 0) return t;
				o.push(t);
			}
		}
		return a ? Promise.all(o).then((t) => ha(t, r, e, i)) : ha(o, r, e, i);
	};
}), _a = /*@__PURE__*/ G("$ZodIntersection", (e, t) => {
	q.init(e, t), e._zod.parse = (e, n) => {
		let r = e.value, i = t.left._zod.run({
			value: r,
			issues: []
		}, n), a = t.right._zod.run({
			value: r,
			issues: []
		}, n);
		return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => ya(e, t, n)) : ya(e, i, a);
	};
});
function va(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if ($t(e) && $t(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		Object.prototype.hasOwnProperty.call(i, "__proto__") && delete i.__proto__;
		for (let n of r) {
			if (n === "__proto__") continue;
			let r = va(e[n], t[n]);
			if (!r.valid) return {
				valid: !1,
				mergeErrorPath: [n, ...r.mergeErrorPath]
			};
			i[n] = r.data;
		}
		return {
			valid: !0,
			data: i
		};
	}
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return {
			valid: !1,
			mergeErrorPath: []
		};
		let n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r], a = t[r], o = va(i, a);
			if (!o.valid) return {
				valid: !1,
				mergeErrorPath: [r, ...o.mergeErrorPath]
			};
			n.push(o.data);
		}
		return {
			valid: !0,
			data: n
		};
	}
	return {
		valid: !1,
		mergeErrorPath: []
	};
}
function ya(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i, a = /* @__PURE__ */ new Map(), o = (e, t) => {
		let n;
		if (e.code === "unrecognized_keys" && !e.path?.length) i ??= e, n = e.keys;
		else if (e.code === "invalid_key" && e.origin === "record" && e.path?.length === 1) {
			let t = String(e.path[0]);
			a.has(t) || a.set(t, e), n = [t];
		} else return !1;
		for (let e of n) r.has(e) || r.set(e, {}), r.get(e)[t] = !0;
		return !0;
	};
	for (let n of t.issues) o(n, "l") || e.issues.push(n);
	for (let t of n.issues) o(t, "r") || e.issues.push(t);
	let s = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
	if (s.length) {
		let t = i ? s.filter((e) => i.keys.includes(e)) : [];
		t.length && e.issues.push({
			...i,
			keys: t
		});
		for (let n of s) !t.includes(n) && a.has(n) && e.issues.push(a.get(n));
	}
	let c = va(t.value, n.value);
	if (!c.valid) {
		if (vn(e)) return e;
		throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`);
	}
	return e.value = c.data, e;
}
var ba = /*@__PURE__*/ G("$ZodEnum", (e, t) => {
	q.init(e, t);
	let n = Pt(t.entries), r = new Set(n);
	e._zod.values = r, W(e, "pattern", (e) => {
		let t = Pt(e.def.entries).filter((e) => tn.has(typeof e));
		return RegExp(t.length ? `^(${t.map((e) => nn(e.toString())).join("|")})$` : "^[^\\s\\S]$");
	}), e._zod.parse = (t, i) => {
		let a = t.value;
		return r.has(a) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: a,
			inst: e
		}), t;
	};
}), xa = /*@__PURE__*/ G("$ZodTransform", (e, t) => {
	q.init(e, t), e._zod.optin = "optional", qn.memoizer?.guard(e), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new Kn(e.constructor.name);
		let i = t.transform(n.value, n);
		if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n));
		if (i instanceof Promise) throw new Gn();
		return n.value = i, n;
	};
});
function Sa(e, t) {
	return e.value = t.issues.length ? void 0 : t.value, e;
}
var Ca = /*@__PURE__*/ G("$ZodOptional", (e, t) => {
	q.init(e, t), W(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), e._zod.optout = "optional", W(e, "values", (e) => {
		let t = e.def.innerType._zod.values;
		return t ? /* @__PURE__ */ new Set([...t, void 0]) : void 0;
	}), W(e, "pattern", (e) => {
		let t = e.def.innerType._zod.pattern;
		return t ? RegExp(`^(${Bt(t.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if (e.value === void 0) {
			if (t.innerType._zod.optin !== "defaulted") return e;
			let r = t.innerType._zod.run({
				value: e.value,
				issues: []
			}, n);
			return r instanceof Promise ? r.then((t) => Sa(e, t)) : Sa(e, r);
		}
		return t.innerType._zod.run(e, n);
	};
}), wa = /*@__PURE__*/ G("$ZodExactOptional", (e, t) => {
	Ca.init(e, t), W(e, "values", (e) => e.def.innerType._zod.values), W(e, "pattern", (e) => e.def.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), Ta = /*@__PURE__*/ G("$ZodNullable", (e, t) => {
	q.init(e, t), W(e, "optin", (e) => e.def.innerType._zod.optin), W(e, "optout", (e) => e.def.innerType._zod.optout), W(e, "pattern", (e) => {
		let t = e.def.innerType._zod.pattern;
		return t ? RegExp(`^(${Bt(t.source)}|null)$`) : void 0;
	}), W(e, "values", (e) => e.def.innerType._zod.values ? /* @__PURE__ */ new Set([...e.def.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
}), Ea = /*@__PURE__*/ G("$ZodDefault", (e, t) => {
	q.init(e, t), e._zod.optin = "defaulted", W(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		if (e.value === void 0) return e.value = t.defaultValue, e;
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => Da(e, t)) : Da(r, t);
	};
});
function Da(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
var Oa = /*@__PURE__*/ G("$ZodPrefault", (e, t) => {
	q.init(e, t), e._zod.optin = "defaulted", W(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), ka = /*@__PURE__*/ G("$ZodNonOptional", (e, t) => {
	q.init(e, t), W(e, "values", (e) => {
		let t = e.def.innerType._zod.values;
		return t ? new Set([...t].filter((e) => e !== void 0)) : void 0;
	}), e._zod.parse = (n, r) => {
		let i = t.innerType._zod.run(n, r);
		return i instanceof Promise ? i.then((t) => Aa(t, e)) : Aa(i, e);
	};
});
function Aa(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
function ja(e, t, n, r) {
	return t.issues.length ? (e.value = n.catchValue({
		...t,
		value: e.value,
		error: { issues: t.issues.map((e) => Cn(e, r, Jn())) },
		input: e.value
	}), e) : (e.value = t.value, t.memo && (e.memo = !0), e);
}
var Ma = /*@__PURE__*/ G("$ZodCatch", (e, t) => {
	q.init(e, t), W(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), W(e, "optout", (e) => e.def.innerType._zod.optout), W(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run({
			value: e.value,
			issues: []
		}, n);
		return r instanceof Promise ? r.then((r) => ja(e, r, t, n)) : ja(e, r, t, n);
	};
}), Na = /*@__PURE__*/ G("$ZodPipe", (e, t) => {
	q.init(e, t), W(e, "values", (e) => e.def.in._zod.values), W(e, "optin", (e) => e.def.in._zod.optin), W(e, "optout", (e) => e.def.out._zod.optout), W(e, "propValues", (e) => e.def.in._zod.propValues), e._zod.parse = (e, n) => {
		if (n.direction === "backward") {
			let r = t.out._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => Pa(e, t.in, n)) : Pa(r, t.in, n);
		}
		let r = t.in._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => Pa(e, t.out, n)) : Pa(r, t.out, n);
	};
});
function Pa(e, t, n) {
	return e.issues.some((e) => e.code !== "unrecognized_keys") ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
var Fa = /*@__PURE__*/ G("$ZodReadonly", (e, t) => {
	q.init(e, t), W(e, "propValues", (e) => e.def.innerType._zod.propValues), W(e, "values", (e) => e.def.innerType._zod.values), W(e, "optin", (e) => e.def.innerType?._zod?.optin), W(e, "optout", (e) => e.def.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then(Ia) : Ia(r);
	};
});
function Ia(e) {
	return e.memo || (e.value = Object.freeze(e.value)), e;
}
var La = /*@__PURE__*/ G("$ZodCustom", (e, t) => {
	K.init(e, t), q.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		let r = n.value, i = t.fn(r);
		if (i instanceof Promise) return i.then((t) => Ra(t, n, r, e));
		Ra(i, n, r, e);
	};
});
function Ra(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(On(e));
	}
}
//#endregion
//#region ../../node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/memoizer.js
var za = class extends Error {
	constructor() {
		super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
	}
}, Ba = "~memo", Va = [];
function Ha(e) {
	return typeof e == "object" && !!e;
}
function Ua(e) {
	return e.map((e) => e.path ? {
		...e,
		path: e.path.slice()
	} : { ...e });
}
var Wa = /*@__PURE__*/ new WeakMap(), Ga = 0, Ka = 1, qa = 2;
function Ja(e, t, n) {
	let r = Wa.get(e);
	if (r !== void 0) return r ? qa : Ga;
	if (t.has(e)) return qa;
	t.add(e);
	let i = Ga, a = (e) => {
		if (i !== qa && e?._zod) {
			let r = Ja(e, t, n);
			r > i && (i = r);
		}
	}, o = (e, r) => {
		let i = Ga;
		for (let a of Reflect.ownKeys(e)) {
			let o = Object.getOwnPropertyDescriptor(e, a);
			if (r && !o.enumerable) continue;
			let s = o.get ? Ka : o.value?._zod ? Ja(o.value, t, n) : Ga;
			s > i && (i = s);
		}
		return i;
	}, s = (e) => {
		e > i && (i = e);
	}, c = e._zod.def;
	switch (c.type) {
		case "object": {
			let e = Ht(c);
			s(e ? o(e, !0) : Ka), a(c.catchall);
			break;
		}
		case "array":
			a(c.element);
			break;
		case "tuple":
			for (let e of c.items) a(e);
			a(c.rest);
			break;
		case "record":
		case "map":
			a(c.keyType), a(c.valueType);
			break;
		case "set":
			a(c.valueType);
			break;
		case "union":
			for (let e of c.options) a(e);
			break;
		case "intersection":
			a(c.left), a(c.right);
			break;
		case "optional":
		case "nullable":
		case "default":
		case "prefault":
		case "catch":
		case "readonly":
		case "nonoptional":
		case "promise":
		case "success":
			a(c.innerType);
			break;
		case "pipe":
			a(c.in), a(c.out);
			break;
		case "function":
			a(c.input), a(c.output);
			break;
		case "lazy": {
			let r = c._cachedInner ?? (n ? e._zod.innerType : void 0);
			s(r ? Ja(r, t, !1) : Ka);
			break;
		}
		case "template_literal":
		case "string":
		case "number":
		case "int":
		case "boolean":
		case "bigint":
		case "symbol":
		case "undefined":
		case "null":
		case "void":
		case "never":
		case "any":
		case "unknown":
		case "date":
		case "nan":
		case "enum":
		case "literal":
		case "file":
		case "transform":
		case "custom": break;
		default: for (let e in c) {
			let t = Object.getOwnPropertyDescriptor(c, e);
			if (!t || t.get) continue;
			let n = t.value;
			if (!(!n || typeof n != "object")) {
				if (n._zod) a(n);
				else if (Array.isArray(n)) for (let e of n) a(e);
			}
		}
	}
	return t.delete(e), Ya(e, i);
}
function Ya(e, t) {
	return t !== Ka && Wa.set(e, t === qa), t;
}
function Xa(e, t) {
	let n = e.buckets.get(t);
	return n || (n = /* @__PURE__ */ new WeakMap(), e.buckets.set(t, n)), n;
}
var Za, Qa = [], $a = {
	alloc(e, t, n) {
		let r = Za;
		if (!r) return n;
		Za = void 0;
		let i = {
			value: n,
			issues: null
		};
		return r.set(t.value, i), Qa.push(i), n;
	},
	guard(e) {
		var t;
		(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
			let t = e._zod.parse, n = (e, n) => {
				if (n.direction !== "backward" && to(n, e.value)) throw new za();
				return t(e, n);
			};
			e._zod.parse = n, e._zod.run === t && (e._zod.run = n);
		});
	},
	attach(e) {
		var t;
		let n, r = !1, i, a;
		(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
			let t = e._zod.parse, o = (s, c) => {
				if (n === void 0) {
					let i = Ja(e, /* @__PURE__ */ new Set(), !1);
					if (i === Ga) return e._zod.parse = t, e._zod.run === o && (e._zod.run = t), t(s, c);
					i === qa || r ? n = !0 : r = !0;
				}
				let l = s.value;
				if (!Ha(l)) return t(s, c);
				let u = c[Ba];
				u || (u = {
					buckets: /* @__PURE__ */ new WeakMap(),
					backEdges: void 0
				}, c[Ba] = u);
				let d;
				i === c ? d = a : (d = Xa(u, e), i = c, a = d);
				let f = d.get(l);
				if (f) return s.value = f.value, f.issues ? f.issues.length && s.issues.push(...Ua(f.issues)) : (s.memo = !0, u.backEdges ??= /* @__PURE__ */ new WeakSet(), u.backEdges.add(f.value)), s;
				Za = d;
				let p = Qa.length, m = t(s, c);
				Za = void 0;
				let h = Qa.length > p ? Qa.pop() : void 0;
				return m instanceof Promise ? m.then((e) => (h && (h.issues = e.issues.length ? Ua(e.issues) : Va), e)) : (h && (h.issues = m.issues.length ? Ua(m.issues) : Va), m);
			};
			e._zod.parse = o, e._zod.run === t && (e._zod.run = o);
		});
	}
};
function eo() {
	return $a;
}
function to(e, t) {
	let n = e[Ba]?.backEdges;
	return n !== void 0 && Ha(t) && n.has(t);
}
//#endregion
//#region ../../node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/locales/en.js
var no = () => {
	let e = {
		string: {
			unit: "characters",
			verb: "to have"
		},
		file: {
			unit: "bytes",
			verb: "to have"
		},
		array: {
			unit: "items",
			verb: "to have"
		},
		set: {
			unit: "items",
			verb: "to have"
		},
		map: {
			unit: "entries",
			verb: "to have"
		}
	};
	function t(t) {
		return e[t] ?? null;
	}
	let n = {
		regex: "input",
		email: "email address",
		url: "URL",
		emoji: "emoji",
		uuid: "UUID",
		uuidv4: "UUIDv4",
		uuidv6: "UUIDv6",
		nanoid: "nanoid",
		guid: "GUID",
		cuid: "cuid",
		cuid2: "cuid2",
		ulid: "ULID",
		xid: "XID",
		ksuid: "KSUID",
		datetime: "ISO datetime",
		date: "ISO date",
		time: "ISO time",
		duration: "ISO duration",
		ipv4: "IPv4 address",
		ipv6: "IPv6 address",
		mac: "MAC address",
		cidrv4: "IPv4 range",
		cidrv6: "IPv6 range",
		base64: "base64-encoded string",
		base64url: "base64url-encoded string",
		json_string: "JSON string",
		e164: "E.164 number",
		currency_code: "currency code",
		credit_card: "credit card number",
		iban: "IBAN",
		jwt: "JWT",
		template_literal: "input"
	}, r = { nan: "NaN" };
	function i(e, t) {
		return e === "number" && typeof t == "number" && !Number.isFinite(t) ? String(t) : r[e] ?? e;
	}
	return (e) => {
		switch (e.code) {
			case "invalid_type": return `Invalid input: expected ${i(e.expected)}, received ${i(Dn(e.input), e.input)}`;
			case "invalid_value": return e.values.length === 1 ? `Invalid input: expected ${an(e.values[0])}` : `Invalid option: expected one of ${Ft(e.values, "|")}`;
			case "too_big": {
				let n = e.exact ? "exactly " : e.inclusive ? "<=" : "<", r = t(e.origin);
				return r ? `Too big: expected ${e.origin ?? "value"} to have ${n}${e.maximum.toString()} ${r.unit ?? "elements"}` : `Too big: expected ${e.origin ?? "value"} to be ${n}${e.maximum.toString()}`;
			}
			case "too_small": {
				let n = e.exact ? "exactly " : e.inclusive ? ">=" : ">", r = t(e.origin);
				return r ? `Too small: expected ${e.origin} to have ${n}${e.minimum.toString()} ${r.unit}` : `Too small: expected ${e.origin} to be ${n}${e.minimum.toString()}`;
			}
			case "invalid_format": {
				let t = e;
				return t.format === "starts_with" ? `Invalid string: must start with "${t.prefix}"` : t.format === "ends_with" ? `Invalid string: must end with "${t.suffix}"` : t.format === "includes" ? `Invalid string: must include "${t.includes}"` : t.format === "regex" ? `Invalid string: must match pattern ${t.pattern}` : `Invalid ${n[t.format] ?? e.format}`;
			}
			case "not_multiple_of": return `Invalid number: must be a multiple of ${e.divisor}`;
			case "unrecognized_keys": return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${Ft(e.keys, ", ")}`;
			case "invalid_key": return `Invalid key in ${e.origin}`;
			case "invalid_union": return e.options && Array.isArray(e.options) && e.options.length > 0 ? `Invalid discriminator value. Expected ${e.options.map((e) => `'${e}'`).join(" | ")}` : e.inclusive === !1 ? "Invalid input: more than one option matched" : "Invalid input";
			case "invalid_element": return `Invalid value in ${e.origin}`;
			default: return "Invalid input";
		}
	};
};
function ro() {
	return { localeError: no() };
}
//#endregion
//#region ../../node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/registries.js
var io, ao = class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
	}
	add(e, ...t) {
		let n = t[0];
		return this._map.set(e, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, e), this;
	}
	clear() {
		return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
	}
	remove(e) {
		let t = this._map.get(e);
		return t && typeof t == "object" && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this;
	}
	get(e) {
		let t = e._zod.parent;
		if (t) {
			let n = { ...this.get(t) ?? {} };
			delete n.id;
			let r = {
				...n,
				...this._map.get(e)
			};
			return Object.keys(r).length ? r : void 0;
		}
		return this._map.get(e);
	}
	has(e) {
		return this._map.has(e);
	}
};
function oo() {
	return new ao();
}
(io = globalThis).__zod_globalRegistry ?? (io.__zod_globalRegistry = oo());
var so = globalThis.__zod_globalRegistry;
//#endregion
//#region ../../node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/api.js
function co(e) {
	return e.checks &&= [...e.checks], e;
}
// @__NO_SIDE_EFFECTS__
function lo(e, t) {
	return new e(co({
		type: "string",
		...U(t)
	}));
}
// @__NO_SIDE_EFFECTS__
function uo(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function fo(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function po(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function mo(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ho(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function go(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function _o(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function vo(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function yo(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function bo(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function xo(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function So(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Co(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function wo(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function To(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Eo(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Do(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Oo(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ko(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ao(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function jo(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Mo(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function No(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Po(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Fo(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Io(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Lo(e) {
	return new e({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function Ro(e, t) {
	return new e({
		type: "never",
		...U(t)
	});
}
// @__NO_SIDE_EFFECTS__
function zo(e, t) {
	return new ii({
		check: "max_length",
		...U(t),
		maximum: e
	});
}
// @__NO_SIDE_EFFECTS__
function Bo(e, t) {
	return new ai({
		check: "min_length",
		...U(t),
		minimum: e
	});
}
// @__NO_SIDE_EFFECTS__
function Vo(e, t) {
	return new oi({
		check: "length_equals",
		...U(t),
		length: e
	});
}
// @__NO_SIDE_EFFECTS__
function Ho(e, t) {
	return new ci({
		check: "string_format",
		format: "regex",
		...U(t),
		pattern: e
	});
}
// @__NO_SIDE_EFFECTS__
function Uo(e) {
	return new li({
		check: "string_format",
		format: "lowercase",
		...U(e)
	});
}
// @__NO_SIDE_EFFECTS__
function Wo(e) {
	return new ui({
		check: "string_format",
		format: "uppercase",
		...U(e)
	});
}
// @__NO_SIDE_EFFECTS__
function Go(e, t) {
	return new di({
		check: "string_format",
		format: "includes",
		...U(t),
		includes: e
	});
}
// @__NO_SIDE_EFFECTS__
function Ko(e, t) {
	return new fi({
		check: "string_format",
		format: "starts_with",
		...U(t),
		prefix: e
	});
}
// @__NO_SIDE_EFFECTS__
function qo(e, t) {
	return new pi({
		check: "string_format",
		format: "ends_with",
		...U(t),
		suffix: e
	});
}
// @__NO_SIDE_EFFECTS__
function Jo(e) {
	return new mi({
		check: "overwrite",
		tx: e
	});
}
// @__NO_SIDE_EFFECTS__
function Yo(e) {
	return /* @__PURE__ */ Jo((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function Xo() {
	return /* @__PURE__ */ Jo((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function Zo() {
	return /* @__PURE__ */ Jo((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function Qo() {
	return /* @__PURE__ */ Jo((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function $o() {
	return /* @__PURE__ */ Jo((e) => Yt(e));
}
// @__NO_SIDE_EFFECTS__
function es(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...U(n)
	});
}
// @__NO_SIDE_EFFECTS__
function ts(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...U(n)
	});
}
// @__NO_SIDE_EFFECTS__
function ns(e, t) {
	let n = /* @__PURE__ */ rs((t) => (t.addIssue = (e) => {
		if (typeof e == "string") t.issues.push(On(e, t.value, n._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", "input" in r || (r.input = t.value), r.inst ??= n, r.continue ??= !n._zod.def.abort, t.issues.push(On(r));
		}
	}, e(t.value, t)), t);
	return n;
}
// @__NO_SIDE_EFFECTS__
function rs(e, t) {
	let n = new K({
		check: "custom",
		...U(t)
	});
	return n._zod.check = e, n;
}
//#endregion
//#region ../../node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/core/to-json-schema.js
function is(e, ...t) {
	for (let n of t) for (let t of Reflect.ownKeys(n)) Object.prototype.propertyIsEnumerable.call(n, t) && Vt(e, t, n[t]);
	return e;
}
function as(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? so,
		target: t,
		unrepresentable: e?.unrepresentable ?? "throw",
		override: e?.override ?? (() => {}),
		io: e?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		sharedDefsExtractedFor: void 0,
		sharedEmitDoneFor: void 0,
		cycles: e?.cycles ?? "ref",
		reused: e?.reused ?? "inline",
		intersections: [],
		deferred: [],
		external: e?.external ?? void 0
	};
}
function os(e, t, n, r, i) {
	let a = typeof t.unrepresentable == "function" ? t.unrepresentable({
		zodSchema: e,
		path: r.path,
		message: i
	}) : t.unrepresentable;
	if (a === "any") return !1;
	if (a === void 0 || a === "throw") throw Error(i);
	return Object.assign(n, a), !0;
}
function Y(e, t, n = {
	path: [],
	schemaPath: []
}) {
	var r;
	let i = e._zod.def, a = t.seen.get(e);
	if (a) return a.count++, n.schemaPath.includes(e) && (a.cycle = n.path), a.schema;
	let o = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: n.path
	};
	t.seen.set(e, o), t.sharedDefsExtractedFor = void 0, t.sharedEmitDoneFor = void 0;
	let s = e._zod.toJSONSchema?.();
	if (s) o.schema = s;
	else {
		let r = {
			...n,
			schemaPath: [...n.schemaPath, e],
			path: n.path
		};
		if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, r);
		else {
			let n = o.schema, a = t.processors[i.type];
			if (!a) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
			a(e, t, n, r);
		}
		let a = e._zod.parent;
		a && (o.ref ||= a, Y(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && is(o.schema, c), t.io === "input" && X(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && "_prefault" in o.schema && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function ss(e) {
	return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function cs(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	if (e.external && e.sharedDefsExtractedFor === e.external) return;
	let r = /* @__PURE__ */ new Map();
	for (let t of e.seen.entries()) {
		let n = e.metadataRegistry.get(t[0])?.id;
		if (n) {
			let e = r.get(n);
			if (e && e !== t[0]) throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			r.set(n, t[0]);
		}
	}
	let i = (t) => {
		let r = e.target === "draft-2020-12" ? "$defs" : "definitions";
		if (e.external) {
			let n = e.external.registry.get(t[0])?.id, i = e.external.uri ?? ((e) => e);
			if (n) return { ref: i(n) };
			let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
			return t[1].defId = a, {
				defId: a,
				ref: `${i("__shared")}#/${r}/${ss(a)}`
			};
		}
		let i = `#/${r}/`;
		if (t[1] === n && !t[1].schema.id) return { ref: "#" };
		let a = t[1].schema.id ?? `__schema${e.counter++}`;
		return {
			defId: a,
			ref: i + ss(a)
		};
	}, a = (e) => {
		if (e[1].schema.$ref) return;
		let t = e[1], { ref: n, defId: r } = i(e);
		t.def = { ...t.schema }, r && (t.defId = r);
		let a = t.schema;
		for (let e in a) delete a[e];
		a.$ref = n;
	};
	if (e.cycles === "throw") for (let t of e.seen.entries()) {
		let e = t[1];
		if (e.cycle) throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (let n of e.seen.entries()) {
		let r = n[1];
		if (t === n[0]) {
			a(n);
			continue;
		}
		if (e.external) {
			let r = e.external.registry.get(n[0])?.id;
			if (t !== n[0] && r) {
				a(n);
				continue;
			}
		}
		if (e.metadataRegistry.get(n[0])?.id) {
			a(n);
			continue;
		}
		if (r.cycle) {
			a(n);
			continue;
		}
		r.count > 1 && e.reused === "ref" && a(n);
	}
	e.external && (e.sharedDefsExtractedFor = e.external);
}
function ls(e) {
	let t = e.anyOf;
	if (!Array.isArray(t) || t.length === 0 || e.type !== void 0) return;
	let n = [];
	for (let e of t) {
		if (!e || typeof e != "object") return;
		ls(e);
		let t = Object.keys(e);
		if (t.length !== 1 || t[0] !== "type") return;
		let r = e.type;
		for (let e of Array.isArray(r) ? r : [r]) {
			if (typeof e != "string") return;
			n.includes(e) || n.push(e);
		}
	}
	delete e.anyOf, e.type = n.length === 1 ? n[0] : n;
}
var us = /* @__PURE__ */ new Set([
	"type",
	"properties",
	"required",
	"additionalProperties"
]), ds = ["oneOf", "anyOf"];
function fs(e) {
	let t = e.additionalProperties;
	return t === void 0 || t === !1 || typeof t != "object" || !t ? null : Object.keys(t).length ? t : null;
}
function ps(e) {
	let t = [];
	for (let n of e) {
		if (typeof n != "object" || n.type !== "object") return null;
		for (let e in n) if (!us.has(e)) return null;
		t.push(n);
	}
	let n = {}, r = /* @__PURE__ */ new Set();
	for (let e of t) {
		for (let r in e.properties) {
			if (Object.prototype.hasOwnProperty.call(n, r)) continue;
			let e = [];
			for (let n of t) {
				let t = n.properties?.[r] ?? fs(n);
				t != null && (e.some((e) => JSON.stringify(e) === JSON.stringify(t)) || e.push(t));
			}
			Vt(n, r, e.length === 1 ? e[0] : ps(e) ?? { allOf: e });
		}
		for (let t of e.required ?? []) r.add(t);
	}
	let i = {
		type: "object",
		properties: n
	};
	if (r.size && (i.required = [...r]), t.every((e) => e.additionalProperties === !1)) i.additionalProperties = !1;
	else {
		let e = [];
		for (let n of t) {
			let t = fs(n);
			t && !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) && e.push(t);
		}
		e.length === 1 ? i.additionalProperties = e[0] : e.length > 1 && (i.additionalProperties = { allOf: e });
	}
	return i;
}
function ms(e) {
	let t = e.allOf;
	if (!Array.isArray(t) || t.length < 2) return;
	for (let t of us) if (t in e) return;
	let n = t.filter((e) => ds.some((t) => Array.isArray(e[t]))), r = null;
	if (!n.length) r = ps(t);
	else {
		let e = n[0], i = ds.find((t) => Array.isArray(e[t]));
		if (Object.keys(e).length !== 1) return;
		let a = t.filter((t) => t !== e), o = e[i].map((e) => ps([...a, e]));
		if (o.some((e) => !e)) return;
		r = { [i]: o };
	}
	r && (delete e.allOf, is(e, r));
}
function hs(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = (t) => {
		let n = e.seen.get(t);
		if (n.ref === null) return;
		let i = n.def ?? n.schema, a = { ...i }, o = n.ref;
		if (n.ref = null, o) {
			r(o);
			let n = e.seen.get(o), s = n.schema;
			if (s.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (i.allOf = i.allOf ?? [], i.allOf.push(s)) : is(i, s), is(i, a), t._zod.parent === o) for (let e in i) e === "$ref" || e === "allOf" || e in a || delete i[e];
			if (s.$ref && n.def) for (let e in i) e === "$ref" || e === "allOf" || e in n.def && JSON.stringify(i[e]) === JSON.stringify(n.def[e]) && delete i[e];
		}
		let s = t._zod.parent;
		if (s && s !== o) {
			r(s);
			let t = e.seen.get(s);
			if (t?.schema.$ref && (i.$ref = t.schema.$ref, t.def)) for (let e in i) e === "$ref" || e === "allOf" || e in t.def && JSON.stringify(i[e]) === JSON.stringify(t.def[e]) && delete i[e];
		}
		e.override({
			zodSchema: t,
			jsonSchema: i,
			path: n.path ?? []
		});
	};
	if (!e.external || e.sharedEmitDoneFor !== e.external) {
		for (let t of [...e.seen.entries()].reverse()) r(t[0]);
		if (e.target !== "openapi-3.0") for (let t of e.seen.entries()) ls(t[1].def ?? t[1].schema);
		for (let t of e.deferred) t();
		if (e.intersections.length) {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.seen.values()) for (let e of [n.schema, n.def]) {
				let n = e?.allOf;
				if (!Array.isArray(n)) continue;
				let r = t.get(n);
				r ? r.push(e) : t.set(n, [e]);
			}
			for (let n of e.intersections) for (let e of t.get(n) ?? []) ms(e);
		}
	}
	let i = {};
	if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		let n = e.external.registry.get(t)?.id;
		if (!n) throw Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	is(i, n.defId ? n.schema : n.def ?? n.schema);
	let a = e.metadataRegistry.get(t)?.id;
	a !== void 0 && i.id === a && delete i.id;
	let o = e.external?.defs ?? {};
	if (!e.external || e.sharedEmitDoneFor !== e.external) for (let t of e.seen.entries()) {
		let e = t[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, Vt(o, e.defId, e.def));
	}
	e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? i.$defs = o : i.definitions = o);
	try {
		let n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: _s(t, "input", e.processors),
					output: _s(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function X(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return X(r.element, n);
	if (r.type === "set") return X(r.valueType, n);
	if (r.type === "lazy") return X(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault" || r.type === "catch") return X(r.innerType, n);
	if (r.type === "intersection") return X(r.left, n) || X(r.right, n);
	if (r.type === "record" || r.type === "map") return X(r.keyType, n) || X(r.valueType, n);
	if (r.type === "pipe") return e._zod.traits.has("$ZodCodec") ? !0 : X(r.in, n) || X(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (X(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (X(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (X(e, n)) return !0;
		return !!(r.rest && X(r.rest, n));
	}
	return !1;
}
var gs = (e, t = {}) => (n) => {
	let r = as({
		...n,
		processors: t
	});
	return Y(e, r), cs(r, e), hs(r, e);
}, _s = (e, t, n = {}) => (r) => {
	let { libraryOptions: i, target: a } = r ?? {}, o = as({
		...i ?? {},
		target: a,
		io: t,
		processors: n
	});
	return Y(e, o), cs(o, e), hs(o, e);
}, vs = (e, t, n) => {
	(e[t] === void 0 || n > e[t]) && (e[t] = n);
}, ys = (e, t, n) => {
	(e[t] === void 0 || n < e[t]) && (e[t] = n);
}, bs = (e, t) => {
	vs(e, "minimum", t), ys(e, "maximum", t);
}, xs = (e, t) => {
	e.multipleOf ??= [], e.multipleOf.includes(t) || e.multipleOf.push(t);
}, Ss = (e, t) => {
	e.patterns ??= /* @__PURE__ */ new Set(), e.patterns.add(t);
}, Cs = (e, t) => {
	e.mime = e.mime ? e.mime.filter((e) => t.includes(e)) : [...t];
}, ws = (e, t) => {
	e.format = t, t.includes("int") && (e.isInt = !0);
}, Ts = (e, t) => vs(e, "minimum", t.minimum), Es = (e, t) => ys(e, "maximum", t.maximum), Ds = (e) => (t, n) => {
	ws(t, n.format);
	let [r, i] = e[n.format];
	vs(t, "minimum", r), ys(t, "maximum", i);
}, Os = {
	greater_than: (e, t) => vs(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
	less_than: (e, t) => ys(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
	multiple_of: (e, t) => xs(e, t.value),
	number_format: Ds(sn),
	bigint_format: Ds(cn),
	min_length: Ts,
	max_length: Es,
	length_equals: (e, t) => bs(e, t.length),
	min_size: Ts,
	max_size: Es,
	size_equals: (e, t) => bs(e, t.size),
	string_format: (e, t) => {
		ws(e, t.format), t.pattern && Ss(e, t.pattern), (t.format === "base64" || t.format === "base64url") && (e.contentEncoding = t.format), (t.local || t.precision === -1) && (e.laxFormat = !0);
	},
	mime_type: (e, t) => Cs(e, t.mime)
};
function ks(e) {
	let t = {}, n = e._zod.def, r = e._zod.traits.has("$ZodCheck") ? [e, ...n.checks ?? []] : n.checks ?? [];
	for (let e of r) Os[e._zod.def.check]?.(t, e._zod.def);
	let i = e._zod.bag;
	i.minimum !== void 0 && vs(t, "minimum", i.minimum), i.exclusiveMinimum !== void 0 && vs(t, "exclusiveMinimum", i.exclusiveMinimum), i.maximum !== void 0 && ys(t, "maximum", i.maximum), i.exclusiveMaximum !== void 0 && ys(t, "exclusiveMaximum", i.exclusiveMaximum), i.multipleOf !== void 0 && xs(t, i.multipleOf), i.format !== void 0 && (t.format ??= i.format, i.format.includes("int") && (t.isInt = !0)), i.mime && Cs(t, i.mime);
	for (let e of i.patterns ?? []) Ss(t, e);
	return t;
}
var As = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, js = /* @__PURE__ */ new Map([[Zi, Wr], [$i, Gr]]), Ms = (e) => js.get(e) ?? e, Ns = (e, t, n, r) => {
	let i = n;
	i.type = "string";
	let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l, laxFormat: u } = ks(e);
	if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = As[s] ?? s, i.format === "" && delete i.format, (s === "time" || u) && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
		let e = [...c].map(Ms);
		e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
			...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: e.source
		}))]);
	}
}, Ps = (e, t, n, r) => {
	n.not = {};
}, Fs = (e, t, n, r) => {
	let i = e._zod.def, a = Pt(i.entries);
	if (a.length === 0) {
		n.not = {};
		return;
	}
	a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a;
}, Is = (e, t, n, r) => {
	os(e, t, n, r, "Custom types cannot be represented in JSON Schema");
}, Ls = (e, t, n, r) => {
	os(e, t, n, r, "Transforms cannot be represented in JSON Schema");
}, Rs = (e, t, n, r) => {
	let i = n, a = e._zod.def, { minimum: o, maximum: s } = ks(e);
	typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = Y(a.element, t, {
		...r,
		path: [...r.path, "items"]
	});
};
function zs(e) {
	let t = e._zod.def;
	return t.type === "pipe" && t.in._zod.traits.has("$ZodTransform") ? zs(t.out) : t.type === "catch" ? zs(t.innerType) : e._zod.optin;
}
var Bs = (e, t, n, r) => {
	let i = n, a = e._zod.def, o = a.shape;
	if (Object.getOwnPropertySymbols(o).length && os(e, t, i, r, "Symbol keys cannot be represented in JSON Schema")) return;
	i.type = "object", i.properties = {};
	for (let e in o) Vt(i.properties, e, Y(o[e], t, {
		...r,
		path: [
			...r.path,
			"properties",
			e
		]
	}));
	let s = [];
	for (let e of Object.keys(o)) {
		let n = a.shape[e];
		(t.io === "input" ? zs(n) === void 0 : n._zod.optout === void 0) && s.push(e);
	}
	s.length > 0 && (i.required = s), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = Y(a.catchall, t, {
		...r,
		path: [...r.path, "additionalProperties"]
	})) : t.io === "output" && (i.additionalProperties = !1);
}, Vs = (e, t, n, r) => {
	let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => Y(e, t, {
		...r,
		path: [
			...r.path,
			a ? "oneOf" : "anyOf",
			n
		]
	}));
	a ? n.oneOf = o : n.anyOf = o;
}, Hs = (e, t, n, r) => {
	let i = e._zod.def, a = Y(i.left, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			0
		]
	}), o = Y(i.right, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			1
		]
	}), s = (e) => "allOf" in e && Object.keys(e).length === 1, c = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
	n.allOf = c, t.intersections.push(c);
}, Us = (e, t, n, r) => {
	let i = e._zod.def, a = Y(i.innerType, t, r), o = t.seen.get(e);
	t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
}, Ws = (e, t, n, r) => {
	let i = e._zod.def;
	Y(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, Gs = Symbol();
function Ks(e, t, n, r, i) {
	let a = !1, o = JSON.stringify(e, (e, t) => typeof t == "bigint" ? (a = !0, null) : t);
	return a ? (os(t, n, r, i, "BigInt defaults cannot be represented in JSON Schema"), Gs) : JSON.parse(o);
}
var qs = (e, t, n, r) => {
	let i = e._zod.def;
	Y(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o = Ks(i.defaultValue, e, t, n, r);
	o !== Gs && (n.default = o);
}, Js = (e, t, n, r) => {
	let i = e._zod.def;
	Y(i.innerType, t, r);
	let a = t.seen.get(e);
	if (a.ref = i.innerType, t.io !== "input") return;
	let o = Ks(i.defaultValue, e, t, n, r);
	o !== Gs && (n._prefault = o);
}, Ys = (e, t, n, r) => {
	let i = e._zod.def;
	Y(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o;
	try {
		o = i.catchValue(void 0);
	} catch {
		os(e, t, n, r, "Dynamic catch values are not supported in JSON Schema");
		return;
	}
	n.default = o;
}, Xs = (e, t, n, r) => {
	let i = e._zod.def, a = i.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? a ? i.out : i.in : i.out;
	Y(o, t, r);
	let s = t.seen.get(e);
	s.ref = o;
}, Zs = (e, t, n, r) => {
	let i = e._zod.def;
	Y(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.readOnly = !0;
}, Qs = (e, t, n, r) => {
	let i = e._zod.def;
	Y(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, $s = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function ec(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		get() {
			let e = n(this);
			return Object.defineProperty(this, t, {
				value: e,
				configurable: !0,
				writable: !0
			}), e;
		},
		set(e) {
			Object.defineProperty(this, t, {
				value: e,
				configurable: !0,
				writable: !0
			});
		}
	});
}
var Z = /*@__PURE__*/ G("ZodError", (e, t) => {
	tr.init(e, t), e.name = "ZodError";
	let n = Object.getPrototypeOf(e);
	$s.has(n) || ($s.add(n), ec(n, "format", (e) => (t) => ar(e, t)), ec(n, "flatten", (e) => (t) => ir(e, t)), ec(n, "addIssue", (e) => (t) => {
		e.issues.push(t), e.message = JSON.stringify(e.issues, It, 2);
	}), ec(n, "addIssues", (e) => (t) => {
		e.issues.push(...t), e.message = JSON.stringify(e.issues, It, 2);
	}), Object.defineProperty(n, "isEmpty", {
		configurable: !0,
		enumerable: !1,
		get() {
			return this.issues.length === 0;
		}
	}));
}, void 0, { Parent: Error }), tc = /* @__PURE__ */ sr(Z), nc = /* @__PURE__ */ lr(Z), rc = /* @__PURE__ */ dr(Z), ic = /* @__PURE__ */ pr(Z), ac = /* @__PURE__ */ yr(Z), oc = /* @__PURE__ */ br(Z), sc = /* @__PURE__ */ xr(Z), cc = /* @__PURE__ */ Sr(Z), lc = /* @__PURE__ */ Cr(Z), uc = /* @__PURE__ */ wr(Z), dc = /* @__PURE__ */ Tr(Z), fc = /* @__PURE__ */ Er(Z);
//#endregion
//#region ../../node_modules/.pnpm/zod@4.6.5/node_modules/zod/v4/classic/schemas.js
function pc() {
	qn.localeError || Jn(ro());
}
function mc() {
	qn.memoizer || Jn({ memoizer: eo() });
}
var Q = /*@__PURE__*/ G("ZodType", (e, t) => (pc(), q.init(e, t), e.def = t, e.type = t.type, e), {
	check(...e) {
		let t = this.def;
		return this.clone(H(t, { checks: [...t.checks ?? [], ...e.map((e) => typeof e == "function" ? { _zod: {
			check: e,
			def: { check: "custom" },
			onattach: []
		} } : e)] }), { parent: !0 });
	},
	with(...e) {
		return this.check(...e);
	},
	clone(e, t) {
		return rn(this, e, t);
	},
	brand() {
		return this;
	},
	register(e, t) {
		return e.add(this, t), this;
	},
	refine(e, t) {
		return this.check(Sl(e, t));
	},
	superRefine(e, t) {
		return this.check(Cl(e, t));
	},
	overwrite(e) {
		return this.check(/* @__PURE__ */ Jo(e));
	},
	optional() {
		return il(this);
	},
	exactOptional() {
		return ol(this);
	},
	nullable() {
		return cl(this);
	},
	nullish() {
		return il(cl(this));
	},
	nonoptional(e) {
		return ml(this, e);
	},
	array() {
		return Kc(this);
	},
	or(e) {
		return Xc([this, e]);
	},
	and(e) {
		return Qc(this, e);
	},
	transform(e) {
		return vl(this, nl(e));
	},
	default(e) {
		return ul(this, e);
	},
	prefault(e) {
		return fl(this, e);
	},
	catch(e) {
		return gl(this, e);
	},
	pipe(e) {
		return vl(this, e);
	},
	readonly() {
		return bl(this);
	},
	describe(e) {
		let t = this.clone();
		return so.add(t, { description: e }), t;
	},
	meta(...e) {
		if (e.length === 0) return so.get(this);
		let t = this.clone();
		return so.add(t, e[0]), t;
	},
	isOptional() {
		return this.safeParse(void 0).success;
	},
	isNullable() {
		return this.safeParse(null).success;
	},
	apply(e, ...t) {
		return t.length === 0 ? e(this) : e(this, ...t);
	},
	get "~standard"() {
		return jn(this, "~standard", {
			...yi(this),
			jsonSchema: {
				input: _s(this, "input"),
				output: _s(this, "output")
			}
		});
	},
	set "~standard"(e) {
		An(this, "~standard", e);
	},
	parse: function e(t, n) {
		return tc(this, t, n, { callee: e });
	},
	parseAsync: async function e(t, n) {
		return await nc(this, t, n, { callee: e });
	},
	safeParse(e, t) {
		return rc(this, e, t);
	},
	async safeParseAsync(e, t) {
		return ic(this, e, t);
	},
	get spa() {
		return this?.safeParseAsync;
	},
	set spa(e) {
		An(this, "spa", e);
	},
	validate(e, t) {
		return gr(this, e, t);
	},
	validateAsync(e, t) {
		return vr(this, e, t);
	},
	encode: function e(t, n) {
		return ac(this, t, n, { callee: e });
	},
	decode: function e(t, n) {
		return oc(this, t, n, { callee: e });
	},
	encodeAsync: async function e(t, n) {
		return await sc(this, t, n, { callee: e });
	},
	decodeAsync: async function e(t, n) {
		return await cc(this, t, n, { callee: e });
	},
	safeEncode(e, t) {
		return lc(this, e, t);
	},
	safeDecode(e, t) {
		return uc(this, e, t);
	},
	async safeEncodeAsync(e, t) {
		return dc(this, e, t);
	},
	async safeDecodeAsync(e, t) {
		return fc(this, e, t);
	},
	toJSONSchema(e) {
		return gs(this, {})(e);
	},
	get description() {
		return so.get(this)?.description;
	},
	get _def() {
		return this._zod.def;
	}
}), hc = /*@__PURE__*/ G("_ZodString", (e, t) => {
	bi.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ns(e, t, n, r);
}, /*@__PURE__*/ Mn({
	format: (e) => ks(e).format ?? null,
	minLength: (e) => ks(e).minimum ?? null,
	maxLength: (e) => ks(e).maximum ?? null
}, {
	regex(...e) {
		return this.check(/* @__PURE__ */ Ho(...e));
	},
	includes(...e) {
		return this.check(/* @__PURE__ */ Go(...e));
	},
	startsWith(...e) {
		return this.check(/* @__PURE__ */ Ko(...e));
	},
	endsWith(...e) {
		return this.check(/* @__PURE__ */ qo(...e));
	},
	min(...e) {
		return this.check(/* @__PURE__ */ Bo(...e));
	},
	max(...e) {
		return this.check(/* @__PURE__ */ zo(...e));
	},
	length(...e) {
		return this.check(/* @__PURE__ */ Vo(...e));
	},
	nonempty(...e) {
		return this.check(/* @__PURE__ */ Bo(1, ...e));
	},
	lowercase(e) {
		return this.check(/* @__PURE__ */ Uo(e));
	},
	uppercase(e) {
		return this.check(/* @__PURE__ */ Wo(e));
	},
	trim() {
		return this.check(/* @__PURE__ */ Xo());
	},
	normalize(...e) {
		return this.check(/* @__PURE__ */ Yo(...e));
	},
	toLowerCase() {
		return this.check(/* @__PURE__ */ Zo());
	},
	toUpperCase() {
		return this.check(/* @__PURE__ */ Qo());
	},
	slugify() {
		return this.check(/* @__PURE__ */ $o());
	}
})), gc = /*@__PURE__*/ G("ZodString", (e, t) => {
	bi.init(e, t), hc.init(e, t);
}, {
	email(e) {
		return this.check(/* @__PURE__ */ uo(Sc, e));
	},
	url(e) {
		return this.check(/* @__PURE__ */ _o(Tc, e));
	},
	jwt(e) {
		return this.check(/* @__PURE__ */ Mo(Bc, e));
	},
	emoji(e) {
		return this.check(/* @__PURE__ */ vo(Ec, e));
	},
	guid(e) {
		return this.check(/* @__PURE__ */ fo(Cc, e));
	},
	uuid(e) {
		return this.check(/* @__PURE__ */ po(wc, e));
	},
	uuidv4(e) {
		return this.check(/* @__PURE__ */ mo(wc, e));
	},
	uuidv6(e) {
		return this.check(/* @__PURE__ */ ho(wc, e));
	},
	uuidv7(e) {
		return this.check(/* @__PURE__ */ go(wc, e));
	},
	nanoid(e) {
		return this.check(/* @__PURE__ */ yo(Dc, e));
	},
	cuid(e) {
		return this.check(/* @__PURE__ */ bo(Oc, e));
	},
	cuid2(e) {
		return this.check(/* @__PURE__ */ xo(kc, e));
	},
	ulid(e) {
		return this.check(/* @__PURE__ */ So(Ac, e));
	},
	base64(e) {
		return this.check(/* @__PURE__ */ ko(Lc, e));
	},
	base64url(e) {
		return this.check(/* @__PURE__ */ Ao(Rc, e));
	},
	xid(e) {
		return this.check(/* @__PURE__ */ Co(jc, e));
	},
	ksuid(e) {
		return this.check(/* @__PURE__ */ wo(Mc, e));
	},
	ipv4(e) {
		return this.check(/* @__PURE__ */ To(Nc, e));
	},
	ipv6(e) {
		return this.check(/* @__PURE__ */ Eo(Pc, e));
	},
	cidrv4(e) {
		return this.check(/* @__PURE__ */ Do(Fc, e));
	},
	cidrv6(e) {
		return this.check(/* @__PURE__ */ Oo(Ic, e));
	},
	e164(e) {
		return this.check(/* @__PURE__ */ jo(zc, e));
	},
	datetime(e) {
		return this.check(/* @__PURE__ */ No(vc, e));
	},
	date(e) {
		return this.check(/* @__PURE__ */ Po(yc, e));
	},
	time(e) {
		return this.check(/* @__PURE__ */ Fo(bc, e));
	},
	duration(e) {
		return this.check(/* @__PURE__ */ Io(xc, e));
	}
});
function _c(e) {
	return /* @__PURE__ */ lo(gc, e);
}
var $ = /*@__PURE__*/ G("ZodStringFormat", (e, t) => {
	J.init(e, t), hc.init(e, t);
}), vc = /*@__PURE__*/ G("ZodISODateTime", (e, t) => {
	zi.init(e, t), $.init(e, t);
}), yc = /*@__PURE__*/ G("ZodISODate", (e, t) => {
	Bi.init(e, t), $.init(e, t);
}), bc = /*@__PURE__*/ G("ZodISOTime", (e, t) => {
	Vi.init(e, t), $.init(e, t);
}), xc = /*@__PURE__*/ G("ZodISODuration", (e, t) => {
	Hi.init(e, t), $.init(e, t);
}), Sc = /*@__PURE__*/ G("ZodEmail", (e, t) => {
	Ci.init(e, t), $.init(e, t);
}), Cc = /*@__PURE__*/ G("ZodGUID", (e, t) => {
	xi.init(e, t), $.init(e, t);
}), wc = /*@__PURE__*/ G("ZodUUID", (e, t) => {
	Si.init(e, t), $.init(e, t);
}), Tc = /*@__PURE__*/ G("ZodURL", (e, t) => {
	ji.init(e, t), $.init(e, t);
}), Ec = /*@__PURE__*/ G("ZodEmoji", (e, t) => {
	Mi.init(e, t), $.init(e, t);
}), Dc = /*@__PURE__*/ G("ZodNanoID", (e, t) => {
	Ni.init(e, t), $.init(e, t);
}), Oc = /*@__PURE__*/ G("ZodCUID", (e, t) => {
	Pi.init(e, t), $.init(e, t);
}), kc = /*@__PURE__*/ G("ZodCUID2", (e, t) => {
	Fi.init(e, t), $.init(e, t);
}), Ac = /*@__PURE__*/ G("ZodULID", (e, t) => {
	Ii.init(e, t), $.init(e, t);
}), jc = /*@__PURE__*/ G("ZodXID", (e, t) => {
	Li.init(e, t), $.init(e, t);
}), Mc = /*@__PURE__*/ G("ZodKSUID", (e, t) => {
	Ri.init(e, t), $.init(e, t);
}), Nc = /*@__PURE__*/ G("ZodIPv4", (e, t) => {
	Ui.init(e, t), $.init(e, t);
}), Pc = /*@__PURE__*/ G("ZodIPv6", (e, t) => {
	Ki.init(e, t), $.init(e, t);
}), Fc = /*@__PURE__*/ G("ZodCIDRv4", (e, t) => {
	qi.init(e, t), $.init(e, t);
}), Ic = /*@__PURE__*/ G("ZodCIDRv6", (e, t) => {
	Yi.init(e, t), $.init(e, t);
}), Lc = /*@__PURE__*/ G("ZodBase64", (e, t) => {
	Qi.init(e, t), $.init(e, t);
}), Rc = /*@__PURE__*/ G("ZodBase64URL", (e, t) => {
	ta.init(e, t), $.init(e, t);
}), zc = /*@__PURE__*/ G("ZodE164", (e, t) => {
	na.init(e, t), $.init(e, t);
}), Bc = /*@__PURE__*/ G("ZodJWT", (e, t) => {
	ia.init(e, t), $.init(e, t);
}), Vc = /*@__PURE__*/ G("ZodUnknown", (e, t) => {
	aa.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (e, t, n) => void 0;
});
function Hc() {
	return /* @__PURE__ */ Lo(Vc);
}
var Uc = /*@__PURE__*/ G("ZodNever", (e, t) => {
	oa.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ps(e, t, n, r);
});
function Wc(e) {
	return /* @__PURE__ */ Ro(Uc, e);
}
var Gc = /*@__PURE__*/ G("ZodArray", (e, t) => {
	mc(), ca.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Rs(e, t, n, r), e.element = t.element;
}, {
	min(e, t) {
		return this.check(/* @__PURE__ */ Bo(e, t));
	},
	nonempty(e) {
		return this.check(/* @__PURE__ */ Bo(1, e));
	},
	max(e, t) {
		return this.check(/* @__PURE__ */ zo(e, t));
	},
	length(e, t) {
		return this.check(/* @__PURE__ */ Vo(e, t));
	},
	unwrap() {
		return this.element;
	}
});
function Kc(e, t) {
	return /* @__PURE__ */ es(Gc, e, t);
}
var qc = /*@__PURE__*/ G("ZodObject", (e, t) => {
	mc(), ma.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Bs(e, t, n, r), Rn(e, "shape", (e) => e._zod.def.shape, !1);
}, {
	keyof() {
		return el(Object.keys(this._zod.def.shape));
	},
	catchall(e) {
		return this.clone(H(this._zod.def, { catchall: e }));
	},
	passthrough() {
		return this.clone(H(this._zod.def, { catchall: Hc() }));
	},
	loose() {
		return this.clone(H(this._zod.def, { catchall: Hc() }));
	},
	strict() {
		return this.clone(H(this._zod.def, { catchall: Wc() }));
	},
	strip() {
		return this.clone(H(this._zod.def, { catchall: void 0 }));
	},
	extend(e) {
		return fn(this, e);
	},
	safeExtend(e) {
		return mn(this, e);
	},
	merge(e) {
		return hn(this, e);
	},
	pick(e) {
		return ln(this, e);
	},
	omit(e) {
		return dn(this, e);
	},
	partial(...e) {
		return gn(rl, this, e[0]);
	},
	exactPartial(...e) {
		return gn(al, this, e[0], "exactPartial");
	},
	required(...e) {
		return _n(pl, this, e[0]);
	}
});
function Jc(e, t) {
	return new qc({
		type: "object",
		shape: e ?? {},
		...U(t)
	});
}
var Yc = /*@__PURE__*/ G("ZodUnion", (e, t) => {
	ga.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Vs(e, t, n, r), e.options = t.options;
});
function Xc(e, t) {
	return new Yc({
		type: "union",
		options: e,
		...U(t)
	});
}
var Zc = /*@__PURE__*/ G("ZodIntersection", (e, t) => {
	_a.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Hs(e, t, n, r);
});
function Qc(e, t) {
	return new Zc({
		type: "intersection",
		left: e,
		right: t
	});
}
var $c = /*@__PURE__*/ G("ZodEnum", (e, t) => {
	ba.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Fs(e, t, n, r), e.enum = t.entries, e.options = [...e._zod.values];
	let n = new Set(Object.keys(t.entries));
	e.extract = (e, r) => {
		let i = {};
		for (let r of e) if (n.has(r)) i[r] = t.entries[r];
		else throw Error(`Key ${r} not found in enum`);
		return new $c({
			...t,
			checks: [],
			...U(r),
			entries: i
		});
	}, e.exclude = (e, r) => {
		let i = { ...t.entries };
		for (let t of e) if (n.has(t)) delete i[t];
		else throw Error(`Key ${t} not found in enum`);
		return new $c({
			...t,
			checks: [],
			...U(r),
			entries: i
		});
	};
});
function el(e, t) {
	return new $c({
		type: "enum",
		entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
		...U(t)
	});
}
var tl = /*@__PURE__*/ G("ZodTransform", (e, t) => {
	mc(), xa.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ls(e, t, n, r), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new Kn(e.constructor.name);
		n.addIssue = (r) => {
			if (typeof r == "string") n.issues.push(On(r, n.value, t));
			else {
				let t = r;
				t.fatal && (t.continue = !1), t.code ??= "custom", "input" in t || (t.input = n.value), t.inst ??= e, n.issues.push(On(t));
			}
		};
		let i = t.transform(n.value, n);
		return i instanceof Promise ? i.then((e) => (n.value = e, n)) : (n.value = i, n);
	};
});
function nl(e) {
	return new tl({
		type: "transform",
		transform: e
	});
}
var rl = /*@__PURE__*/ G("ZodOptional", (e, t) => {
	Ca.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Qs(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function il(e) {
	return new rl({
		type: "optional",
		innerType: e
	});
}
var al = /*@__PURE__*/ G("ZodExactOptional", (e, t) => {
	wa.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Qs(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function ol(e) {
	return new al({
		type: "optional",
		innerType: e
	});
}
var sl = /*@__PURE__*/ G("ZodNullable", (e, t) => {
	Ta.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Us(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function cl(e) {
	return new sl({
		type: "nullable",
		innerType: e
	});
}
var ll = /*@__PURE__*/ G("ZodDefault", (e, t) => {
	Ea.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => qs(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function ul(e, t) {
	return new ll({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : en(t);
		}
	});
}
var dl = /*@__PURE__*/ G("ZodPrefault", (e, t) => {
	Oa.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Js(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function fl(e, t) {
	return new dl({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : en(t);
		}
	});
}
var pl = /*@__PURE__*/ G("ZodNonOptional", (e, t) => {
	ka.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ws(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function ml(e, t) {
	return new pl({
		type: "nonoptional",
		innerType: e,
		...U(t)
	});
}
var hl = /*@__PURE__*/ G("ZodCatch", (e, t) => {
	Ma.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ys(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function gl(e, t) {
	return new hl({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : Bn(t)
	});
}
var _l = /*@__PURE__*/ G("ZodPipe", (e, t) => {
	Na.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Xs(e, t, n, r), e.in = t.in, e.out = t.out;
});
function vl(e, t) {
	return new _l({
		type: "pipe",
		in: e,
		out: t
	});
}
var yl = /*@__PURE__*/ G("ZodReadonly", (e, t) => {
	Fa.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Zs(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function bl(e) {
	return new yl({
		type: "readonly",
		innerType: e
	});
}
var xl = /*@__PURE__*/ G("ZodCustom", (e, t) => {
	La.init(e, t), Q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Is(e, t, n, r);
});
function Sl(e, t = {}) {
	return /* @__PURE__ */ ts(xl, e, t);
}
function Cl(e, t) {
	return /* @__PURE__ */ ns(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/@hookform+resolvers@5.4.0_react-hook-form@7.80.0_react@18.3.1_/node_modules/@hookform/resolvers/dist/resolvers.mjs
var wl = (e, t, n) => {
	if (e && "reportValidity" in e) {
		let r = N(n, t);
		e.setCustomValidity(r && r.message || ""), e.reportValidity();
	}
}, Tl = (e, t) => {
	for (let n in t.fields) {
		let r = t.fields[n];
		r && r.ref && "reportValidity" in r.ref ? wl(r.ref, n, e) : r && r.refs && r.refs.forEach((t) => wl(t, n, e));
	}
}, El = (e, t) => {
	t.shouldUseNativeValidation && Tl(e, t);
	let n = {};
	for (let r in e) {
		let i = N(t.fields, r), a = Object.assign(e[r] || {}, { ref: i && i.ref });
		if (Dl(t.names || Object.keys(e), r)) {
			let e = Object.assign({}, N(n, r));
			I(e, "root", a), I(n, r, e);
		} else I(n, r, a);
	}
	return n;
}, Dl = (e, t) => {
	let n = Ol(t).replace(/[.*+?^${}()|\\]/g, "\\$&");
	return e.some((e) => Ol(e).match(`^${n}\\.\\d+`));
};
function Ol(e) {
	return e.replace(/[\[\]]/g, "");
}
//#endregion
//#region ../../node_modules/.pnpm/@hookform+resolvers@5.4.0_react-hook-form@7.80.0_react@18.3.1_/node_modules/@hookform/resolvers/zod/dist/zod.mjs
function kl() {
	return kl = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, kl.apply(null, arguments);
}
function Al(e, t) {
	try {
		var n = e();
	} catch (e) {
		return t(e);
	}
	return n && n.then ? n.then(void 0, t) : n;
}
function jl(e, t) {
	for (var n = {}; e.length;) {
		var r = e[0], i = r.code, a = r.message, o = r.path.join(".");
		if (!n[o]) if ("unionErrors" in r) {
			var s = r.unionErrors[0].errors[0];
			n[o] = {
				message: s.message,
				type: s.code
			};
		} else n[o] = {
			message: a,
			type: i
		};
		if ("unionErrors" in r && r.unionErrors.forEach(function(t) {
			return t.errors.forEach(function(t) {
				return e.push(t);
			});
		}), t) {
			var c = n[o].types, l = c && c[r.code];
			n[o] = ke(o, t, n, i, l ? [].concat(l, r.message) : r.message);
		}
		e.shift();
	}
	return n;
}
function Ml(e, t) {
	for (var n = {}, r = function() {
		var r = e[0], i = r.code, a = r.message, o = r.path.join(".");
		if (!n[o]) if (r.code === "invalid_union" && r.errors.length > 0) {
			var s = r.errors[0][0];
			n[o] = {
				message: s.message,
				type: s.code
			};
		} else n[o] = {
			message: a,
			type: i
		};
		if (r.code === "invalid_union" && r.errors.forEach(function(t) {
			return t.forEach(function(t) {
				return e.push(kl({}, t, { path: [].concat(r.path, t.path) }));
			});
		}), t) {
			var c = n[o].types, l = c && c[r.code];
			n[o] = ke(o, t, n, i, l ? [].concat(l, r.message) : r.message);
		}
		e.shift();
	}; e.length;) r();
	return n;
}
function Nl(e, t, n) {
	if (n === void 0 && (n = {}), function(e) {
		return "_def" in e && typeof e._def == "object" && "typeName" in e._def;
	}(e)) return function(r, i, a) {
		try {
			return Promise.resolve(Al(function() {
				return Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(e) {
					return a.shouldUseNativeValidation && Tl({}, a), {
						errors: {},
						values: n.raw ? Object.assign({}, r) : e
					};
				});
			}, function(e) {
				if (function(e) {
					return Array.isArray(e?.issues);
				}(e)) return {
					values: {},
					errors: El(jl(e.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a)
				};
				throw e;
			}));
		} catch (e) {
			return Promise.reject(e);
		}
	};
	if (function(e) {
		return "_zod" in e && typeof e._zod == "object";
	}(e)) return function(r, i, a) {
		try {
			return Promise.resolve(Al(function() {
				return Promise.resolve((n.mode === "sync" ? cr : ur)(e, r, t)).then(function(e) {
					return a.shouldUseNativeValidation && Tl({}, a), {
						errors: {},
						values: n.raw ? Object.assign({}, r) : e
					};
				});
			}, function(e) {
				if (function(e) {
					return e instanceof tr;
				}(e)) return {
					values: {},
					errors: El(Ml(e.issues, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a)
				};
				throw e;
			}));
		} catch (e) {
			return Promise.reject(e);
		}
	};
	throw Error("Invalid input: not a Zod schema");
}
//#endregion
//#region src/views/preferences/components/edit-profile.tsx
i();
var Pl = (e) => {
	let t = document.createElement("textarea");
	return t.innerHTML = e, t.value;
}, Fl = Jc({
	profileImage: _c().optional(),
	coverImage: _c().optional(),
	name: _c().nonempty({ message: "Display name is required." }).max(64, { message: "Display name must be less than 64 characters." }),
	bio: _c().max(250, { message: "Bio must be less than 250 characters." }).optional()
}), Il = ({ account: t, setIsEditingProfile: n }) => {
	let [r, i] = e(t.avatarUrl || null), a = o(null), [s, l] = e(!1), [u, d] = e(t.bannerImageUrl || null), te = o(null), [ne, C] = e(!1), [ie, T] = e(!1), { mutate: E } = p(t?.handle || ""), D = St({
		resolver: Nl(Fl),
		defaultValues: {
			profileImage: t.avatarUrl,
			coverImage: t.bannerImageUrl || "",
			name: t.name,
			bio: t.bio ? Pl(t.bio) : ""
		}
	}), O = !!D.formState.errors.name, ae = () => {
		a.current?.click();
	}, oe = async (e) => {
		try {
			return l(!0), await m(e);
		} catch (e) {
			i(null), D.setValue("profileImage", "");
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
			c.error(t);
		} finally {
			l(!1);
		}
	}, se = async (e) => {
		let t = e.target.files;
		if (t && t.length > 0) {
			let n = t[0];
			if (n.size > 5242880) {
				c.error(S), e.target.value = "";
				return;
			}
			if (!await ee(n)) {
				c.error(b), e.target.value = "";
				return;
			}
			let r = URL.createObjectURL(n);
			i(r);
			let a = await oe(n);
			D.setValue("profileImage", a);
		}
	}, ce = () => {
		te.current?.click();
	}, k = async (e) => {
		try {
			return C(!0), await m(e);
		} catch (e) {
			d(null), D.setValue("coverImage", "");
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
			c.error(t);
		} finally {
			C(!1);
		}
	}, le = async (e) => {
		let t = e.target.files;
		if (t && t.length > 0) {
			let n = t[0];
			if (n.size > 5242880) {
				c.error(S), e.target.value = "";
				return;
			}
			let r = URL.createObjectURL(n);
			d(r);
			let i = await k(n);
			D.setValue("coverImage", i);
		}
	};
	function A(e) {
		T(!0);
		let r = t.bio ? Pl(t.bio) : "";
		if (e.name === t.name && e.bio === r && e.profileImage === t.avatarUrl && e.coverImage === t.bannerImageUrl) {
			T(!1), n(!1);
			return;
		}
		E({
			name: e.name || t.name,
			username: re(t.handle).username || t.handle.replace(/^@/, "").split("@")[0],
			bio: e.bio ?? "",
			avatarUrl: e.profileImage || "",
			bannerImageUrl: e.coverImage || ""
		}, { onSettled() {
			T(!1), n(!1);
		} });
	}
	return /* @__PURE__ */ (0, w.jsx)(Ct, {
		...D,
		children: /* @__PURE__ */ (0, w.jsxs)("form", {
			className: "flex flex-col gap-5",
			onKeyDown: (e) => {
				e.key === "Enter" && !e.shiftKey && (e.preventDefault(), D.handleSubmit(A)());
			},
			onSubmit: D.handleSubmit(A),
			children: [
				/* @__PURE__ */ (0, w.jsxs)("div", {
					className: "relative mb-2",
					children: [/* @__PURE__ */ (0, w.jsx)("div", {
						className: "group relative flex h-[180px] cursor-pointer items-center justify-center bg-gray-100 dark:bg-gray-950",
						onClick: ce,
						children: u ? /* @__PURE__ */ (0, w.jsxs)(w.Fragment, { children: [
							/* @__PURE__ */ (0, w.jsx)("img", {
								className: `size-full object-cover ${ne && "opacity-10"}`,
								src: u
							}),
							ne && /* @__PURE__ */ (0, w.jsx)("div", {
								className: "absolute leading-[0]",
								children: /* @__PURE__ */ (0, w.jsx)(h, { size: "md" })
							}),
							/* @__PURE__ */ (0, w.jsx)(f, {
								className: "absolute top-3 right-3 size-8 bg-black/60 opacity-0 group-hover:opacity-100 hover:bg-black/80 dark:text-white",
								onClick: (e) => {
									e.stopPropagation(), d(null), D.setValue("coverImage", "");
								},
								children: /* @__PURE__ */ (0, w.jsx)(x, {})
							})
						] }) : /* @__PURE__ */ (0, w.jsx)(f, {
							className: "pointer-events-none absolute right-3 bottom-3 bg-gray-200 group-hover:bg-gray-300 dark:bg-black/40 dark:text-white dark:group-hover:bg-black/60",
							variant: "secondary",
							children: "Upload cover image"
						})
					}), /* @__PURE__ */ (0, w.jsx)("div", {
						className: "group absolute -bottom-10 left-4 flex size-20 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-gray-100 dark:border-surface-elevated-2 dark:bg-gray-950",
						onClick: ae,
						children: r ? /* @__PURE__ */ (0, w.jsxs)(w.Fragment, { children: [
							/* @__PURE__ */ (0, w.jsx)("img", {
								className: `size-full rounded-full object-cover ${s && "opacity-10"}`,
								src: r
							}),
							s && /* @__PURE__ */ (0, w.jsx)("div", {
								className: "absolute leading-[0]",
								children: /* @__PURE__ */ (0, w.jsx)(h, { size: "md" })
							}),
							/* @__PURE__ */ (0, w.jsx)(f, {
								className: "absolute -top-2 -right-2 h-8 w-10 rounded-full bg-black/80 opacity-0 group-hover:opacity-100 hover:bg-black/90 dark:text-white",
								onClick: (e) => {
									e.stopPropagation(), i(null), D.setValue("profileImage", "");
								},
								children: /* @__PURE__ */ (0, w.jsx)(x, {})
							})
						] }) : /* @__PURE__ */ (0, w.jsx)(y, {
							size: 32,
							strokeWidth: 1.5
						})
					})]
				}),
				/* @__PURE__ */ (0, w.jsx)(Tt, {
					control: D.control,
					name: "profileImage",
					render: () => /* @__PURE__ */ (0, w.jsxs)(Ot, { children: [/* @__PURE__ */ (0, w.jsx)(At, { children: /* @__PURE__ */ (0, w.jsx)(g, {
						ref: a,
						accept: "image/*",
						className: "hidden",
						type: "file",
						onChange: se
					}) }), /* @__PURE__ */ (0, w.jsx)(Mt, {})] })
				}),
				/* @__PURE__ */ (0, w.jsx)(Tt, {
					control: D.control,
					name: "coverImage",
					render: () => /* @__PURE__ */ (0, w.jsxs)(Ot, { children: [/* @__PURE__ */ (0, w.jsx)(At, { children: /* @__PURE__ */ (0, w.jsx)(g, {
						ref: te,
						accept: "image/*",
						className: "hidden",
						type: "file",
						onChange: le
					}) }), /* @__PURE__ */ (0, w.jsx)(Mt, {})] })
				}),
				/* @__PURE__ */ (0, w.jsx)(Tt, {
					control: D.control,
					name: "name",
					render: ({ field: e }) => /* @__PURE__ */ (0, w.jsxs)(Ot, { children: [
						/* @__PURE__ */ (0, w.jsx)(kt, { children: "Display name" }),
						/* @__PURE__ */ (0, w.jsx)(At, { children: /* @__PURE__ */ (0, w.jsx)(g, {
							placeholder: "Jamie Larson",
							...e
						}) }),
						!O && /* @__PURE__ */ (0, w.jsx)(jt, { children: "The name shown to your followers in the Inbox and Feed" }),
						/* @__PURE__ */ (0, w.jsx)(Mt, {})
					] })
				}),
				/* @__PURE__ */ (0, w.jsx)(Tt, {
					control: D.control,
					name: "bio",
					render: ({ field: e }) => /* @__PURE__ */ (0, w.jsxs)(Ot, { children: [
						/* @__PURE__ */ (0, w.jsx)(kt, { children: "Bio" }),
						/* @__PURE__ */ (0, w.jsx)(At, { children: /* @__PURE__ */ (0, w.jsx)(Nt, { ...e }) }),
						/* @__PURE__ */ (0, w.jsx)(Mt, {})
					] })
				}),
				/* @__PURE__ */ (0, w.jsxs)(_, {
					className: "max-sm:gap-2",
					children: [/* @__PURE__ */ (0, w.jsx)(v, {
						asChild: !0,
						children: /* @__PURE__ */ (0, w.jsx)(f, {
							variant: "outline",
							children: "Cancel"
						})
					}), /* @__PURE__ */ (0, w.jsx)(f, {
						disabled: ie || s || ne,
						type: "submit",
						children: "Save"
					})]
				})
			]
		})
	});
};
//#endregion
export { Il as t };

//# sourceMappingURL=edit-profile-9EodzviR.js.map