import { E as e, S as t, T as n, _ as r, c as i, d as a, g as o, v as s } from "./_react-D4KM8XEu.js";
import { A as c, B as l, C as u, D as d, E as f, F as p, H as m, I as h, L as g, M as _, N as v, O as y, P as b, R as x, S, T as C, U as w, V as T, b as E, j as D, k as O, m as k, v as ee, w as te, x as A, y as ne, z as j } from "./chunk-OB3PAWPO-BZOqgbiV.js";
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/queryObserver.js
var re = class extends w {
	constructor(e, t) {
		super(), this.options = t, this.#e = e, this.#s = null, this.#o = c(), this.bindMethods(), this.setOptions(t);
	}
	#e;
	#t = void 0;
	#n = void 0;
	#r = void 0;
	#i;
	#a;
	#o;
	#s;
	#c;
	#l;
	#u;
	#d;
	#f;
	#p;
	#m = /* @__PURE__ */ new Set();
	bindMethods() {
		this.refetch = this.refetch.bind(this);
	}
	onSubscribe() {
		this.listeners.size === 1 && (this.#t.addObserver(this), ae(this.#t, this.options) ? this.#h() : this.updateResult(), this.#y());
	}
	onUnsubscribe() {
		this.hasListeners() || this.destroy();
	}
	shouldFetchOnReconnect() {
		return M(this.#t, this.options, this.options.refetchOnReconnect);
	}
	shouldFetchOnWindowFocus() {
		return M(this.#t, this.options, this.options.refetchOnWindowFocus);
	}
	destroy() {
		this.listeners = /* @__PURE__ */ new Set(), this.#b(), this.#x(), this.#t.removeObserver(this);
	}
	setOptions(e) {
		let t = this.options, n = this.#t;
		if (this.options = this.#e.defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof h(this.options.enabled, this.#t) != "boolean") throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
		this.#S(), this.#t.setOptions(this.options), t._defaulted && !x(this.options, t) && this.#e.getQueryCache().notify({
			type: "observerOptionsUpdated",
			query: this.#t,
			observer: this
		});
		let r = this.hasListeners();
		r && N(this.#t, n, this.options, t) && this.#h(), this.updateResult(), r && (this.#t !== n || h(this.options.enabled, this.#t) !== h(t.enabled, this.#t) || g(this.options.staleTime, this.#t) !== g(t.staleTime, this.#t)) && this.#g();
		let i = this.#_();
		r && (this.#t !== n || h(this.options.enabled, this.#t) !== h(t.enabled, this.#t) || i !== this.#p) && this.#v(i);
	}
	getOptimisticResult(e) {
		let t = this.#e.getQueryCache().build(this.#e, e), n = this.createResult(t, e);
		return oe(this, n) && (this.#r = n, this.#a = this.options, this.#i = this.#t.state), n;
	}
	getCurrentResult() {
		return this.#r;
	}
	trackResult(e, t) {
		return new Proxy(e, { get: (e, n) => (this.trackProp(n), t?.(n), n === "promise" && (this.trackProp("data"), !this.options.experimental_prefetchInRender && this.#o.status === "pending" && this.#o.reject(/* @__PURE__ */ Error("experimental_prefetchInRender feature flag is not enabled"))), Reflect.get(e, n)) });
	}
	trackProp(e) {
		this.#m.add(e);
	}
	getCurrentQuery() {
		return this.#t;
	}
	refetch({ ...e } = {}) {
		return this.fetch({ ...e });
	}
	fetchOptimistic(e) {
		let t = this.#e.defaultQueryOptions(e), n = this.#e.getQueryCache().build(this.#e, t);
		return n.fetch().then(() => this.createResult(n, t));
	}
	fetch(e) {
		return this.#h({
			...e,
			cancelRefetch: e.cancelRefetch ?? !0
		}).then(() => (this.updateResult(), this.#r));
	}
	#h(e) {
		this.#S();
		let t = this.#t.fetch(this.options, e);
		return e?.throwOnError || (t = t.catch(b)), t;
	}
	#g() {
		this.#b();
		let e = g(this.options.staleTime, this.#t);
		if (D.isServer() || this.#r.isStale || !v(e)) return;
		let t = l(this.#r.dataUpdatedAt, e) + 1;
		this.#d = T.setTimeout(() => {
			this.#r.isStale || this.updateResult();
		}, t);
	}
	#_() {
		return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.#t) : this.options.refetchInterval) ?? !1;
	}
	#v(e) {
		this.#x(), this.#p = e, !(D.isServer() || h(this.options.enabled, this.#t) === !1 || !v(this.#p) || this.#p === 0) && (this.#f = T.setInterval(() => {
			(this.options.refetchIntervalInBackground || m.isFocused()) && this.#h();
		}, this.#p));
	}
	#y() {
		this.#g(), this.#v(this.#_());
	}
	#b() {
		this.#d !== void 0 && (T.clearTimeout(this.#d), this.#d = void 0);
	}
	#x() {
		this.#f !== void 0 && (T.clearInterval(this.#f), this.#f = void 0);
	}
	createResult(e, t) {
		let n = this.#t, r = this.options, i = this.#r, a = this.#i, o = this.#a, s = e === n ? this.#n : e.state, { state: l } = e, u = { ...l }, d = !1, m;
		if (t._optimisticResults) {
			let i = this.hasListeners(), a = !i && ae(e, t), o = i && N(e, n, t, r);
			(a || o) && (u = {
				...u,
				...f(l.data, e.options)
			}), t._optimisticResults === "isRestoring" && (u.fetchStatus = "idle");
		}
		let { error: g, errorUpdatedAt: _, status: v } = u;
		m = u.data;
		let y = !1;
		if (t.placeholderData !== void 0 && m === void 0 && v === "pending") {
			let e;
			i?.isPlaceholderData && t.placeholderData === o?.placeholderData ? (e = i.data, y = !0) : e = typeof t.placeholderData == "function" ? t.placeholderData(this.#u?.state.data, this.#u) : t.placeholderData, e !== void 0 && (v = "success", m = p(i?.data, e, t), d = !0);
		}
		if (t.select && m !== void 0 && !y) if (i && m === a?.data && t.select === this.#c) m = this.#l;
		else try {
			this.#c = t.select, m = t.select(m), m = p(i?.data, m, t), this.#l = m, this.#s = null;
		} catch (e) {
			this.#s = e;
		}
		this.#s && (g = this.#s, m = this.#l, _ = Date.now(), v = "error");
		let b = u.fetchStatus === "fetching", x = v === "pending", S = v === "error", C = x && b, w = m !== void 0, T = {
			status: v,
			fetchStatus: u.fetchStatus,
			isPending: x,
			isSuccess: v === "success",
			isError: S,
			isInitialLoading: C,
			isLoading: C,
			data: m,
			dataUpdatedAt: u.dataUpdatedAt,
			error: g,
			errorUpdatedAt: _,
			failureCount: u.fetchFailureCount,
			failureReason: u.fetchFailureReason,
			errorUpdateCount: u.errorUpdateCount,
			isFetched: e.isFetched(),
			isFetchedAfterMount: u.dataUpdateCount > s.dataUpdateCount || u.errorUpdateCount > s.errorUpdateCount,
			isFetching: b,
			isRefetching: b && !x,
			isLoadingError: S && !w,
			isPaused: u.fetchStatus === "paused",
			isPlaceholderData: d,
			isRefetchError: S && w,
			isStale: P(e, t),
			refetch: this.refetch,
			promise: this.#o,
			isEnabled: h(t.enabled, e) !== !1
		};
		if (this.options.experimental_prefetchInRender) {
			let t = T.data !== void 0, r = T.status === "error" && !t, i = (e) => {
				r ? e.reject(T.error) : t && e.resolve(T.data);
			}, a = () => {
				let e = this.#o = T.promise = c();
				i(e);
			}, o = this.#o;
			switch (o.status) {
				case "pending":
					e.queryHash === n.queryHash && i(o);
					break;
				case "fulfilled":
					(r || T.data !== o.value) && a();
					break;
				case "rejected":
					(!r || T.error !== o.reason) && a();
					break;
			}
		}
		return T;
	}
	updateResult() {
		let e = this.#r, t = this.createResult(this.#t, this.options);
		this.#i = this.#t.state, this.#a = this.options, this.#i.data !== void 0 && (this.#u = this.#t), !x(t, e) && (this.#r = t, this.#C({ listeners: (() => {
			if (!e) return !0;
			let { notifyOnChangeProps: t } = this.options, n = typeof t == "function" ? t() : t;
			if (n === "all" || !n && !this.#m.size) return !0;
			let r = new Set(n ?? this.#m);
			return this.options.throwOnError && r.add("error"), Object.keys(this.#r).some((t) => {
				let n = t;
				return this.#r[n] !== e[n] && r.has(n);
			});
		})() }));
	}
	#S() {
		let e = this.#e.getQueryCache().build(this.#e, this.options);
		if (e === this.#t) return;
		let t = this.#t;
		this.#t = e, this.#n = e.state, this.hasListeners() && (t?.removeObserver(this), e.addObserver(this));
	}
	onQueryUpdate() {
		this.updateResult(), this.hasListeners() && this.#y();
	}
	#C(e) {
		O.batch(() => {
			e.listeners && this.listeners.forEach((e) => {
				e(this.#r);
			}), this.#e.getQueryCache().notify({
				query: this.#t,
				type: "observerResultsUpdated"
			});
		});
	}
};
function ie(e, t) {
	return h(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && h(t.retryOnMount, e) === !1);
}
function ae(e, t) {
	return ie(e, t) || e.state.data !== void 0 && M(e, t, t.refetchOnMount);
}
function M(e, t, n) {
	if (h(t.enabled, e) !== !1 && g(t.staleTime, e) !== "static") {
		let r = typeof n == "function" ? n(e) : n;
		return r === "always" || r !== !1 && P(e, t);
	}
	return !1;
}
function N(e, t, n, r) {
	return (e !== t || h(r.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && P(e, n);
}
function P(e, t) {
	return h(t.enabled, e) !== !1 && e.isStaleByTime(g(t.staleTime, e));
}
function oe(e, t) {
	return !x(e.getCurrentResult(), t);
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/infiniteQueryObserver.js
var se = class extends re {
	constructor(e, t) {
		super(e, t);
	}
	bindMethods() {
		super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
	}
	setOptions(e) {
		e._type = "infinite", super.setOptions(e);
	}
	getOptimisticResult(e) {
		return e._type = "infinite", super.getOptimisticResult(e);
	}
	fetchNextPage(e) {
		return this.fetch({
			...e,
			meta: { fetchMore: { direction: "forward" } }
		});
	}
	fetchPreviousPage(e) {
		return this.fetch({
			...e,
			meta: { fetchMore: { direction: "backward" } }
		});
	}
	createResult(e, t) {
		let { state: n } = e, r = super.createResult(e, t), { isFetching: i, isRefetching: a, isError: o, isRefetchError: s } = r, c = n.fetchMeta?.fetchMore?.direction, l = o && c === "forward", u = i && c === "forward", f = o && c === "backward", p = i && c === "backward";
		return {
			...r,
			fetchNextPage: this.fetchNextPage,
			fetchPreviousPage: this.fetchPreviousPage,
			hasNextPage: d(t, n.data),
			hasPreviousPage: y(t, n.data),
			isFetchNextPageError: l,
			isFetchingNextPage: u,
			isFetchPreviousPageError: f,
			isFetchingPreviousPage: p,
			isRefetchError: s && !l && !f,
			isRefetching: a && !u && !p
		};
	}
}, ce = class extends w {
	#e;
	#t = void 0;
	#n;
	#r;
	constructor(e, t) {
		super(), this.#e = e, this.setOptions(t), this.bindMethods(), this.#i();
	}
	bindMethods() {
		this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
	}
	setOptions(e) {
		let t = this.options;
		this.options = this.#e.defaultMutationOptions(e), x(this.options, t) || this.#e.getMutationCache().notify({
			type: "observerOptionsUpdated",
			mutation: this.#n,
			observer: this
		}), t?.mutationKey && this.options.mutationKey && _(t.mutationKey) !== _(this.options.mutationKey) ? this.reset() : this.#n?.state.status === "pending" && this.#n.setOptions(this.options);
	}
	onUnsubscribe() {
		this.hasListeners() || this.#n?.removeObserver(this);
	}
	onMutationUpdate(e) {
		this.#i(), this.#a(e);
	}
	getCurrentResult() {
		return this.#t;
	}
	reset() {
		this.#n?.removeObserver(this), this.#n = void 0, this.#i(), this.#a();
	}
	mutate(e, t) {
		return this.#r = t, this.#n?.removeObserver(this), this.#n = this.#e.getMutationCache().build(this.#e, this.options), this.#n.addObserver(this), this.#n.execute(e);
	}
	#i() {
		let e = this.#n?.state ?? C();
		this.#t = {
			...e,
			isPending: e.status === "pending",
			isSuccess: e.status === "success",
			isError: e.status === "error",
			isIdle: e.status === "idle",
			mutate: this.mutate,
			reset: this.reset
		};
	}
	#a(e) {
		O.batch(() => {
			if (this.#r && this.hasListeners()) {
				let t = this.#t.variables, n = this.#t.context, r = {
					client: this.#e,
					meta: this.options.meta,
					mutationKey: this.options.mutationKey
				};
				if (e?.type === "success") {
					try {
						this.#r.onSuccess?.(e.data, t, n, r);
					} catch (e) {
						Promise.reject(e);
					}
					try {
						this.#r.onSettled?.(e.data, null, t, n, r);
					} catch (e) {
						Promise.reject(e);
					}
				} else if (e?.type === "error") {
					try {
						this.#r.onError?.(e.error, t, n, r);
					} catch (e) {
						Promise.reject(e);
					}
					try {
						this.#r.onSettled?.(void 0, e.error, t, n, r);
					} catch (e) {
						Promise.reject(e);
					}
				}
			}
			this.listeners.forEach((e) => {
				e(this.#t);
			});
		});
	}
};
te(), a();
var le = i(!1), ue = () => r(le);
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.101.4_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js
le.Provider, a();
function de() {
	let e = !1;
	return {
		clearReset: () => {
			e = !1;
		},
		reset: () => {
			e = !0;
		},
		isReset: () => e
	};
}
var fe = i(de()), pe = () => r(fe);
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.101.4_react@18.3.1/node_modules/@tanstack/react-query/build/modern/errorBoundaryUtils.js
a();
var me = (e, t, n) => {
	let r = n?.state.error && typeof e.throwOnError == "function" ? j(e.throwOnError, [n.state.error, n]) : e.throwOnError;
	(e.suspense || e.experimental_prefetchInRender || r) && (t.isReset() || (e.retryOnMount = !1));
}, he = (e) => {
	s(() => {
		e.clearReset();
	}, [e]);
}, ge = ({ result: e, errorResetBoundary: t, throwOnError: n, query: r, suspense: i }) => e.isError && !t.isReset() && !e.isFetching && r && (i && e.data === void 0 || j(n, [e.error, r])), _e = (e) => {
	if (e.suspense) {
		let t = 1e3, n = (e) => e === "static" ? e : Math.max(e ?? t, t), r = e.staleTime;
		e.staleTime = typeof r == "function" ? (...e) => n(r(...e)) : n(r), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, t));
	}
}, ve = (e, t) => e.isLoading && e.isFetching && !t, ye = (e, t) => e?.suspense && t.isPending, F = (e, t, n) => t.fetchOptimistic(e).catch(() => {
	n.clearReset();
});
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.101.4_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js
a();
function I(t, r, i) {
	let a = ue(), c = pe(), l = u(i), d = l.defaultQueryOptions(t);
	l.getDefaultOptions().queries?._experimental_beforeQuery?.(d);
	let f = l.getQueryCache().get(d.queryHash), p = t.subscribed !== !1;
	d._optimisticResults = a ? "isRestoring" : p ? "optimistic" : void 0, _e(d), me(d, c, f), he(c);
	let m = !l.getQueryCache().get(d.queryHash), [h] = n(() => new r(l, d)), g = h.getOptimisticResult(d), _ = !a && p;
	if (e(o((e) => {
		let t = _ ? h.subscribe(O.batchCalls(e)) : b;
		return h.updateResult(), t;
	}, [h, _]), () => h.getCurrentResult(), () => h.getCurrentResult()), s(() => {
		h.setOptions(d);
	}, [d, h]), ye(d, g)) throw F(d, h, c);
	if (ge({
		result: g,
		errorResetBoundary: c,
		throwOnError: d.throwOnError,
		query: f,
		suspense: d.suspense
	})) throw g.error;
	return l.getDefaultOptions().queries?._experimental_afterQuery?.(d, g), d.experimental_prefetchInRender && !D.isServer() && ve(g, a) && (m ? F(d, h, c) : f?.promise)?.catch(b).finally(() => {
		h.updateResult();
	}), d.notifyOnChangeProps ? g : h.trackResult(g);
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.101.4_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
function L(e, t) {
	return I(e, re, t);
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.101.4_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useMutation.js
a();
function R(t, r) {
	let i = u(r), [a] = n(() => new ce(i, t));
	s(() => {
		a.setOptions(t);
	}, [a, t]);
	let c = e(o((e) => a.subscribe(O.batchCalls(e)), [a]), () => a.getCurrentResult(), () => a.getCurrentResult()), l = o((e, t) => {
		a.mutate(e, t).catch(b);
	}, [a]);
	if (c.error && j(a.options.throwOnError, [c.error])) throw c.error;
	return {
		...c,
		mutate: l,
		mutateAsync: c.mutate
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.101.4_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js
function z(e, t) {
	return I(e, se, t);
}
//#endregion
//#region ../admin-x-framework/dist/utils/errors.js
var B = class extends Error {
	response;
	data;
	constructor(e, t, n, r) {
		!n && e && e.url.includes("/ghost/api/admin/") && (n = `Something went wrong while loading ${e.url.replace(/.+\/ghost\/api\/admin\//, "").replace(/\W.*/, "").replace("_", " ")}, please try again.`), super(n || "Something went wrong, please try again.", r), this.response = e, this.data = t;
	}
}, V = class extends B {
	data;
	constructor(e, t, n, r) {
		super(e, t, n, r), this.data = t;
	}
}, H = class extends V {
	constructor(e, t, n) {
		super(e, t, "API server is running a newer version of Ghost, please upgrade.", n);
	}
}, U = class extends B {
	constructor(e) {
		super(void 0, void 0, "Something went wrong, please try again.", e);
	}
}, be = class extends B {
	constructor(e) {
		super(void 0, void 0, "Request timed out, please try again.", e);
	}
}, xe = class extends B {
	constructor(e, t, n) {
		super(e, t, "Request is larger than the maximum file size the server allows", n);
	}
}, Se = class extends B {
	constructor(e, t, n) {
		super(e, t, "Request contains an unknown or unsupported file type.", n);
	}
}, W = class extends B {
	constructor(e, t, n) {
		super(e, t, "Ghost is currently undergoing maintenance, please wait a moment then retry.", n);
	}
}, G = class extends B {
	constructor(e, t, n) {
		super(e, t, "You are not authorised to make this request.", n);
	}
}, K = class extends G {}, Ce = class extends V {
	constructor(e, t, n) {
		super(e, t, "Theme is not compatible or contains errors.", n);
	}
}, we = class extends V {
	errorDetails;
	constructor(e, t, n) {
		e instanceof Response ? super(e, t, "A hosting plan limit was reached or exceeded.", n) : (super(void 0, void 0, e.message || "A hosting plan limit was reached or exceeded."), this.errorDetails = e.errorDetails);
	}
}, Te = class extends V {
	constructor(e, t, n) {
		super(e, t, "Please verify your email settings", n);
	}
}, Ee = class extends V {
	constructor(e, t, n) {
		super(e, t, t.errors[0].message, n);
	}
};
function De(e, t) {
	let n = e instanceof V ? e.data?.errors?.[0] : void 0;
	return n?.context || n?.message || t;
}
//#endregion
//#region ../admin-x-framework/dist/hooks/use-handle-error.js
a();
function Oe(e) {
	k.dismiss(), k.error(e);
}
var q = () => o((e, { withToast: t = !0 } = {}) => {
	if (console.error(e), A() && !(e instanceof K) && S((t) => {
		t.setTag("source", "useHandleError"), t.setTag("shown_to_user", e instanceof B), e instanceof B && (t.setContext("ghost", { displayed_message: De(e, e.message) }), e.response && (t.setTag("api_url", e.response.url), t.setTag("api_response_status", e.response.status))), ne(e);
	}), t) if (e instanceof B && e.response?.status === 418) k.dismiss();
	else if (e instanceof K) return;
	else e instanceof B ? Oe(De(e, e.message)) : Oe("Something went wrong, please try again.");
}, []), ke = /* @__PURE__ */ new Set();
function Ae(e) {
	return e instanceof H ? "upgrade-required" : e instanceof W ? "maintenance" : null;
}
function je(e) {
	let t = Ae(e);
	t && ke.forEach((e) => e(t));
}
//#endregion
//#region ../admin-x-framework/dist/utils/auth-paths.js
var Me = [
	/^\/signin\/?$/,
	/^\/signin\/verify\/?$/,
	/^\/signout\/?$/,
	/^\/signup\/[^/]+\/?$/,
	/^\/reset\/[^/]+\/?$/,
	/^\/setup\/?$/
];
function Ne(e) {
	let [t] = e.split("?");
	return Me.some((e) => e.test(t));
}
//#endregion
//#region ../admin-x-framework/dist/utils/helpers.js
function Pe() {
	let e = window.location.pathname, t = e.substr(0, e.search("/ghost/"));
	return {
		subdir: t,
		adminRoot: `${t}/ghost/`,
		assetRoot: `${t}/ghost/assets/`,
		apiRoot: `${t}/ghost/api/admin`
	};
}
//#endregion
//#region ../admin-x-framework/dist/utils/api/handle-response.js
var Fe = (e) => !!e && (e.startsWith("text/") || e.includes("application/yaml")), Ie = async (e, { responseType: t } = {}) => {
	if (e.status === 0) throw new U();
	if (e.status === 503) throw new W(e, await e.text());
	if (e.status === 415) throw new Se(e, await e.text());
	if (e.status === 413) throw new xe(e, await e.text());
	if (e.status === 401) throw e.headers.get("content-type")?.includes("json") ? new G(e, await e.json()) : new G(e, await e.text());
	if (!e.ok) {
		if (!e.headers.get("content-type")?.includes("json")) throw new B(e, await e.text());
		let t = await e.json();
		throw e.status === 403 && t.errors?.[0]?.message === "Authorization failed" ? new G(e, t) : t.errors?.[0]?.type === "VersionMismatchError" ? new H(e, t) : t.errors?.[0]?.type === "ValidationError" || t.errors?.[0]?.type === "NoPermissionError" ? new Ee(e, t) : t.errors?.[0]?.type === "ThemeValidationError" ? new Ce(e, t) : t.errors?.[0]?.type === "HostLimitError" ? new we(e, t) : t.errors?.[0]?.type === "EmailError" ? new Te(e, t) : new V(e, t);
	} else if (e.status === 204) return;
	else if (t === "blob") return await e.blob();
	else if (t === "arraybuffer") return await e.arrayBuffer();
	else if (Fe(e.headers.get("content-type"))) return await e.text();
	else return await e.json();
};
//#endregion
//#region ../admin-x-framework/dist/utils/api/fetch-api.js
a();
var Le = (e) => {
	let t = new Headers(), n = e.getAllResponseHeaders()?.split("\r\n") || [];
	for (let e of n) {
		let n = e.indexOf(":");
		if (n === -1) continue;
		let r = e.slice(0, n), i = e.slice(n + 1).trim();
		t.append(r, i);
	}
	return t;
}, Re = (e) => new Response([
	204,
	205,
	304
].includes(e.status) ? null : e.response, {
	status: e.status,
	statusText: e.statusText,
	headers: Le(e)
}), ze = /\/ghost\/api\//, Be = /\/ghost\/api\/admin\/session([/?#]|$)/, Ve = /\/ghost\/api\/admin\/users\/me\/([?#]|$)/, He = !1, Ue = !1, We = /* @__PURE__ */ new Set(), Ge = (e) => window.location.pathname === e && (!window.location.hash || window.location.hash === "#/" || Ne(window.location.hash.slice(1))), Ke = (e) => {
	let t = e.toString();
	return ze.test(t) && !Be.test(t);
}, qe = () => {
	let { adminRoot: e } = Pe();
	He && !Ue && We.size === 0 && !Ge(e) && (Ue = !0, window.location.replace(e));
}, Je = (e, t, { method: n, headers: r, credentials: i, body: a, signal: o }) => new Promise((s, c) => {
	let l = () => {
		c(new DOMException("Aborted", "AbortError"));
	};
	if (o.aborted) {
		l();
		return;
	}
	let u = new XMLHttpRequest();
	switch (u.open(n, t.toString(), !0), i) {
		case "omit": throw Error("\"omit\" credentials cannot be represented with legacy XMLHttpRequest. Consider \"same-origin\".");
		case "same-origin":
			u.withCredentials = !1;
			break;
		case "include":
			u.withCredentials = !0;
			break;
		default: throw Error(i);
	}
	u.responseType = "arraybuffer";
	for (let [e, t] of Object.entries(r)) u.setRequestHeader(e, t);
	u.upload.onprogress = (t) => {
		t.lengthComputable && e(t.loaded / t.total * 100);
	}, u.onload = () => {
		try {
			s(Re(u));
		} catch (e) {
			c(e);
		}
	}, u.onerror = () => {
		c(/* @__PURE__ */ TypeError("Network request failed"));
	}, u.onabort = l;
	let d = () => u.abort();
	o.addEventListener("abort", d), u.onloadend = () => {
		o.removeEventListener("abort", d);
	}, u.send(a);
}), J = () => {
	let { ghostVersion: e } = ee();
	return o(async (t, { method: n = "GET", headers: r = {}, body: i, credentials: a = "include", timeout: o, retry: s = !0, responseType: c, sessionExpiryRedirect: l = !0, onUploadProgress: u } = {}) => {
		let d = new AbortController(), f = {
			method: n,
			headers: {
				"app-pragma": "no-cache",
				...e ? { "x-ghost-version": e } : {},
				...typeof i == "string" ? { "content-type": "application/json" } : {},
				...r
			},
			credentials: a,
			mode: "cors",
			body: i,
			signal: d.signal
		}, p = 0, m = 0, h = Date.now(), g = [500, 1e3], _ = [
			U,
			W,
			TypeError
		], v = (e, r) => {
			let i = {
				error: r === void 0 ? void 0 : String(r),
				status: e?.status,
				method: n,
				attempts: p,
				totalSeconds: (Date.now() - h) / 1e3,
				endpoint: t.toString()
			};
			return t.toString().includes("/ghost/api/") && (i.server = e?.headers.get("server")), i;
		}, y = u ? Je.bind(null, u) : fetch, b = o ? setTimeout(() => d.abort(), o) : void 0;
		try {
			for (; p === 0 || s;) try {
				let e = await y(t, f), n = await Ie(e, { responseType: c });
				return Ve.test(t.toString()) && (He = !0), p !== 0 && A() && E("Request took multiple attempts", { extra: v(e) }), n;
			} catch (e) {
				if (m = Date.now() - h, s && _.some((t) => e instanceof t) && m <= 15e3) {
					await new Promise((e) => {
						setTimeout(e, g[p] || g[g.length - 1]);
					}), p += 1;
					continue;
				}
				if (p !== 0 && A() && E("Request failed after multiple attempts", { extra: v(e instanceof B ? e.response : void 0, e) }), e && typeof e == "object" && "name" in e && e.name === "AbortError") throw new be();
				if (e instanceof G && Ke(t)) throw l && qe(), new K(e.response, e.data, { cause: e });
				let n = e;
				throw e instanceof B || (n = new U({ cause: e })), ze.test(t.toString()) && je(n), n;
			}
		} finally {
			clearTimeout(b);
		}
	}, [e]);
}, { apiRoot: Ye } = Pe(), Y = (e, t = {}) => {
	let n = new URL(`${Ye}${e}`, window.location.origin);
	return n.search = new URLSearchParams(t).toString(), n.toString();
};
//#endregion
//#region ../admin-x-framework/dist/api/current-user.js
a();
var Xe = "UsersResponseType", Ze = Y("/users/me/", { include: "roles" }), Qe = [Xe, Ze], $e = ({ requestOptions: e } = {}) => {
	let t = J(), n = q(), r = L({
		queryKey: Qe,
		queryFn: () => t(Ze, e),
		select: (e) => e.users[0],
		retryOnMount: !1
	});
	return s(() => {
		r.error && n(r.error);
	}, [n, r.error]), r;
}, X = (e, t) => {
	let { data: n } = $e(t);
	if (!e || e.length === 0) return !0;
	let r = n?.roles.map((e) => e.name);
	return r ? e.some((e) => r.includes(e)) : !1;
};
//#endregion
//#region ../admin-x-framework/dist/utils/api/hooks.js
a();
var et = (e) => ({ searchParams: n, requestOptions: r, ...i } = {}) => {
	let a = Y(e.path, n || e.defaultSearchParams), o = J(), c = q(), l = X(e.permissions, { requestOptions: r }), u = L({
		...i,
		enabled: l && (i.enabled ?? !0),
		queryKey: [e.dataType, a],
		queryFn: async () => {
			if (e.parseResponse) {
				let t = await o(a, {
					headers: e.headers,
					...r
				});
				return e.parseResponse(t);
			}
			return o(a, {
				headers: e.headers,
				...r
			});
		}
	}), d = t(() => u.data && e.returnData ? e.returnData(u.data) : u.data, [u.data]);
	return s(() => {
		u.error && i.defaultErrorHandler !== !1 && c(u.error);
	}, [
		c,
		u.error,
		i.defaultErrorHandler
	]), {
		...u,
		data: d
	};
}, tt = (e) => ({ searchParams: n, requestOptions: r, getNextPageParams: i, ...a } = {}) => {
	let o = J(), c = q(), l = X(e.permissions, { requestOptions: r }), u = i || e.defaultNextPageParams || (() => ({})), d = z({
		...a,
		enabled: l && (a.enabled ?? !0),
		queryKey: [e.dataType, Y(e.path, n || e.defaultSearchParams)],
		queryFn: async ({ pageParam: t }) => {
			let i = t || n || e.defaultSearchParams || {}, a = Y(e.path, i);
			if (e.parseResponse) {
				let t = await o(a, {
					headers: e.headers,
					...r
				});
				return e.parseResponse(t, i);
			}
			return o(a, {
				headers: e.headers,
				...r
			});
		},
		initialPageParam: void 0,
		getNextPageParam: (t) => u(t, n || e.defaultSearchParams || {})
	}), f = t(() => d.data && e.returnData(d.data), [d.data]);
	return s(() => {
		d.error && a.defaultErrorHandler !== !1 && c(d.error);
	}, [
		c,
		d.error,
		a.defaultErrorHandler
	]), {
		...d,
		data: f
	};
}, nt = ({ fetchApi: e, path: t, payload: n, searchParams: r, options: i }) => {
	let { defaultSearchParams: a, body: o, requestOptions: s, ...c } = i, l = Y(t, r || a), u = n && o?.(n), d;
	return u instanceof FormData ? d = u : u && (d = JSON.stringify(u)), e(l, {
		body: d,
		...c,
		...n === void 0 ? {} : s?.(n)
	});
}, Z = ({ path: e, searchParams: t, defaultSearchParams: n, updateQueries: r, invalidateQueries: i, ...a }) => () => {
	let s = J(), c = u(), { onUpdate: l, onInvalidate: d, onDelete: f } = ee();
	return R({
		mutationFn: (r) => nt({
			fetchApi: s,
			path: e(r),
			payload: r,
			searchParams: t?.(r) || n,
			options: a
		}),
		onSuccess: o((e, t) => {
			if (i && "dataType" in i) {
				let e = Array.isArray(i.dataType) ? i.dataType : [i.dataType];
				for (let t of e) c.invalidateQueries({ queryKey: [t] }), d(t);
			} else i && c.invalidateQueries(i.filters, i.options);
			if (r) {
				if (c.setQueriesData({ queryKey: [r.dataType] }, (n) => r.update(e, n, t)), r.emberUpdateType === "createOrUpdate") l(r.dataType, e);
				else if (r.emberUpdateType === "delete") {
					if (typeof t != "string") throw Error("Expected delete mutation to have a string (ID) payload. Either change the payload or update the createMutation hook");
					f(r.dataType, t);
				}
			}
		}, [
			d,
			l,
			f,
			c
		])
	});
}, rt = (e) => typeof e == "object" && !!e && Array.isArray(e.pageParams), Q = (e, t) => (n, r) => {
	if (!r) return r;
	let i = (t || ((t) => t[e].reduce((e, t) => ({
		...e,
		[t.id]: t
	}), {})))(n);
	if (rt(r)) {
		let { pages: t } = r;
		return {
			...r,
			pages: t.map((t) => ({
				...t,
				[e]: t[e].map((e) => i[e.id] || e)
			}))
		};
	}
	return {
		...r,
		[e]: r[e].map((e) => i[e.id] || e)
	};
}, it = (e, t) => (n, r, i) => {
	if (!r) return r;
	let a = t?.(i) || [i];
	if (rt(r)) {
		let { pages: t } = r;
		return {
			...r,
			pages: t.map((t) => ({
				...t,
				[e]: t[e].filter((e) => !a.includes(e.id))
			}))
		};
	}
	return {
		...r,
		[e]: r[e].filter((e) => !a.includes(e.id))
	};
}, $ = Xe, at = tt({
	dataType: $,
	path: "/users/",
	defaultSearchParams: {
		limit: "100",
		include: "roles"
	},
	defaultNextPageParams: (e, t) => {
		if (e.meta?.pagination.next) return {
			...t,
			page: e.meta.pagination.next.toString()
		};
	},
	returnData: (e) => {
		let { pages: t } = e, n = t.flatMap((e) => e.users), r = t[t.length - 1].meta;
		return {
			users: n,
			meta: r,
			isEnd: r ? r.pagination.pages === r.pagination.page : !0
		};
	}
}), ot = Z({
	method: "PUT",
	path: (e) => `/users/${e.id}/`,
	body: (e) => ({ users: [e] }),
	searchParams: () => ({ include: "roles" }),
	updateQueries: {
		dataType: $,
		emberUpdateType: "createOrUpdate",
		update: Q("users")
	}
});
Z({
	method: "DELETE",
	path: (e) => `/users/${e}/`,
	updateQueries: {
		dataType: $,
		emberUpdateType: "delete",
		update: it("users")
	}
}), Z({
	method: "PUT",
	path: () => "/users/password/",
	body: ({ newPassword: e, confirmNewPassword: t, userId: n, oldPassword: r }) => ({ password: [{
		user_id: n,
		oldPassword: r || "",
		newPassword: e,
		ne2Password: t
	}] })
}), Z({
	method: "PUT",
	path: () => "/users/owner/",
	body: (e) => ({ owner: [{ id: e }] }),
	updateQueries: {
		dataType: $,
		emberUpdateType: "createOrUpdate",
		update: Q("users")
	}
});
//#endregion
export { z as a, $e as i, ot as n, R as o, et as r, L as s, at as t };

//# sourceMappingURL=users-CyoMXlwX.js.map