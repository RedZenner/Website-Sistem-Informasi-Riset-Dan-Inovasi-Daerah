import { D as e, M as t, O as n, S as r, T as i, _ as a, a as o, c as s, d as c, f as l, g as u, h as d, l as f, m as p, n as m, o as h, r as g, u as _, v, w as y, x as b } from "./_react-D4KM8XEu.js";
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/subscribable.js
var x = class {
	constructor() {
		this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
	}
	subscribe(e) {
		return this.listeners.add(e), this.onSubscribe(), () => {
			this.listeners.delete(e), this.onUnsubscribe();
		};
	}
	hasListeners() {
		return this.listeners.size > 0;
	}
	onSubscribe() {}
	onUnsubscribe() {}
}, S = new class extends x {
	#e;
	#t;
	#n;
	constructor() {
		super(), this.#n = (e) => {
			if (typeof window < "u" && window.addEventListener) {
				let t = () => e();
				return window.addEventListener("visibilitychange", t, !1), () => {
					window.removeEventListener("visibilitychange", t);
				};
			}
		};
	}
	onSubscribe() {
		this.#t || this.setEventListener(this.#n);
	}
	onUnsubscribe() {
		this.hasListeners() || (this.#t?.(), this.#t = void 0);
	}
	setEventListener(e) {
		this.#n = e, this.#t?.(), this.#t = e((e) => {
			typeof e == "boolean" ? this.setFocused(e) : this.onFocus();
		});
	}
	setFocused(e) {
		this.#e !== e && (this.#e = e, this.onFocus());
	}
	onFocus() {
		let e = this.isFocused();
		this.listeners.forEach((t) => {
			t(e);
		});
	}
	isFocused() {
		return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden";
	}
}(), C = {
	setTimeout: (e, t) => setTimeout(e, t),
	clearTimeout: (e) => clearTimeout(e),
	setInterval: (e, t) => setInterval(e, t),
	clearInterval: (e) => clearInterval(e)
}, w = new class {
	#e = C;
	setTimeoutProvider(e) {
		this.#e = e;
	}
	setTimeout(e, t) {
		return this.#e.setTimeout(e, t);
	}
	clearTimeout(e) {
		this.#e.clearTimeout(e);
	}
	setInterval(e, t) {
		return this.#e.setInterval(e, t);
	}
	clearInterval(e) {
		this.#e.clearInterval(e);
	}
}();
function T(e) {
	setTimeout(e, 0);
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/utils.js
var E = typeof window > "u" || "Deno" in globalThis;
function D() {}
function O(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function k(e) {
	return typeof e == "number" && e >= 0 && e !== Infinity;
}
function A(e, t) {
	return Math.max(e + (t || 0) - Date.now(), 0);
}
function j(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function M(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function N(e, t) {
	let { type: n = "all", exact: r, fetchStatus: i, predicate: a, queryKey: o, stale: s } = e;
	if (o) {
		if (r) {
			if (t.queryHash !== P(o, t.options)) return !1;
		} else if (!I(t.queryKey, o)) return !1;
	}
	if (n !== "all") {
		let e = t.isActive();
		if (n === "active" && !e || n === "inactive" && e) return !1;
	}
	return !(typeof s == "boolean" && t.isStale() !== s || i && i !== t.state.fetchStatus || a && !a(t));
}
function ee(e, t) {
	let { exact: n, status: r, predicate: i, mutationKey: a } = e;
	if (a) {
		if (!t.options.mutationKey) return !1;
		if (n) {
			if (F(t.options.mutationKey) !== F(a)) return !1;
		} else if (!I(t.options.mutationKey, a)) return !1;
	}
	return !(r && t.state.status !== r || i && !i(t));
}
function P(e, t) {
	return (t?.queryKeyHashFn || F)(e);
}
function F(e) {
	return JSON.stringify(e, (e, t) => L(t) ? Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}) : t);
}
function I(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (e && t && typeof e == "object" && typeof t == "object") {
		if (Array.isArray(e) && Array.isArray(t)) {
			for (let n = 0; n < t.length; n++) if (!I(e[n], t[n])) return !1;
			return !0;
		}
		let n = Object.keys(t);
		for (let r of n) if (!I(e[r], t[r])) return !1;
		return !0;
	}
	return !1;
}
var te = Object.prototype.hasOwnProperty;
function ne(e, t, n = 0) {
	if (e === t) return e;
	if (n > 500) return t;
	let r = ie(e) && ie(t);
	if (!r && !(L(e) && L(t))) return t;
	let i = (r ? e : Object.keys(e)).length, a = r ? t : Object.keys(t), o = a.length, s = r ? Array(o) : {}, c = 0;
	for (let l = 0; l < o; l++) {
		let o = r ? l : a[l], u = e[o], d = t[o];
		if (u === d) {
			s[o] = u, (r ? l < i : te.call(e, o)) && c++;
			continue;
		}
		if (u === null || d === null || typeof u != "object" || typeof d != "object") {
			s[o] = d;
			continue;
		}
		let f = ne(u, d, n + 1);
		s[o] = f, f === u && c++;
	}
	return i === o && c === i ? e : s;
}
function re(e, t) {
	if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let n in e) if (e[n] !== t[n]) return !1;
	return !0;
}
function ie(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length;
}
function L(e) {
	if (!R(e)) return !1;
	let t = e.constructor;
	if (t === void 0) return !0;
	let n = t.prototype;
	return !(!R(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function R(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function ae(e) {
	return new Promise((t) => {
		w.setTimeout(t, e);
	});
}
function oe(e, t, n) {
	return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing === !1 ? t : ne(e, t);
}
function se(e, t, n = 0) {
	let r = [...e, t];
	return n && r.length > n ? r.slice(1) : r;
}
function ce(e, t, n = 0) {
	let r = [t, ...e];
	return n && r.length > n ? r.slice(0, -1) : r;
}
var le = /* @__PURE__ */ Symbol();
function z(e, t) {
	return !e.queryFn && t?.initialPromise ? () => t.initialPromise : !e.queryFn || e.queryFn === le ? () => Promise.reject(/* @__PURE__ */ Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
function B(e, t) {
	return typeof e == "function" ? e(...t) : !!e;
}
function V(e, t, n) {
	let r = !1, i;
	return Object.defineProperty(e, "signal", {
		enumerable: !0,
		get: () => (i ??= t(), r ? i : (r = !0, i.aborted ? n() : i.addEventListener("abort", n, { once: !0 }), i))
	}), e;
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/environmentManager.js
var ue = /* @__PURE__ */ (() => {
	let e = () => E;
	return {
		isServer() {
			return e();
		},
		setIsServer(t) {
			e = t;
		}
	};
})();
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/thenable.js
function de() {
	let e, t, n = new Promise((n, r) => {
		e = n, t = r;
	});
	n.status = "pending", n.catch(() => {});
	function r(e) {
		Object.assign(n, e), delete n.resolve, delete n.reject;
	}
	return n.resolve = (t) => {
		r({
			status: "fulfilled",
			value: t
		}), e(t);
	}, n.reject = (e) => {
		r({
			status: "rejected",
			reason: e
		}), t(e);
	}, n;
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/notifyManager.js
var fe = T;
function pe() {
	let e = [], t = 0, n = (e) => {
		e();
	}, r = (e) => {
		e();
	}, i = fe, a = (r) => {
		t ? e.push(r) : i(() => {
			n(r);
		});
	}, o = () => {
		let t = e;
		e = [], t.length && i(() => {
			r(() => {
				t.forEach((e) => {
					n(e);
				});
			});
		});
	};
	return {
		batch: (e) => {
			let n;
			t++;
			try {
				n = e();
			} finally {
				t--, t || o();
			}
			return n;
		},
		batchCalls: (e) => (...t) => {
			a(() => {
				e(...t);
			});
		},
		schedule: a,
		setNotifyFunction: (e) => {
			n = e;
		},
		setBatchNotifyFunction: (e) => {
			r = e;
		},
		setScheduler: (e) => {
			i = e;
		}
	};
}
var H = pe(), me = new class extends x {
	#e = !0;
	#t;
	#n;
	constructor() {
		super(), this.#n = (e) => {
			if (typeof window < "u" && window.addEventListener) {
				let t = () => e(!0), n = () => e(!1);
				return window.addEventListener("online", t, !1), window.addEventListener("offline", n, !1), () => {
					window.removeEventListener("online", t), window.removeEventListener("offline", n);
				};
			}
		};
	}
	onSubscribe() {
		this.#t || this.setEventListener(this.#n);
	}
	onUnsubscribe() {
		this.hasListeners() || (this.#t?.(), this.#t = void 0);
	}
	setEventListener(e) {
		this.#n = e, this.#t?.(), this.#t = e(this.setOnline.bind(this));
	}
	setOnline(e) {
		this.#e !== e && (this.#e = e, this.listeners.forEach((t) => {
			t(e);
		}));
	}
	isOnline() {
		return this.#e;
	}
}();
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/retryer.js
function he(e) {
	return Math.min(1e3 * 2 ** e, 3e4);
}
function ge(e) {
	return (e ?? "online") === "online" ? me.isOnline() : !0;
}
var _e = class extends Error {
	constructor(e) {
		super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent;
	}
};
function ve(e) {
	let t = !1, n = 0, r, i = de(), a = () => i.status !== "pending", o = (t) => {
		if (!a()) {
			let n = new _e(t);
			f(n), e.onCancel?.(n);
		}
	}, s = () => {
		t = !0;
	}, c = () => {
		t = !1;
	}, l = () => S.isFocused() && (e.networkMode === "always" || me.isOnline()) && e.canRun(), u = () => ge(e.networkMode) && e.canRun(), d = (e) => {
		a() || (r?.(), i.resolve(e));
	}, f = (e) => {
		a() || (r?.(), i.reject(e));
	}, p = () => new Promise((t) => {
		r = (e) => {
			(a() || l()) && t(e);
		}, e.onPause?.();
	}).then(() => {
		r = void 0, a() || e.onContinue?.();
	}), m = () => {
		if (a()) return;
		let r, i = n === 0 ? e.initialPromise : void 0;
		try {
			r = i ?? e.fn();
		} catch (e) {
			r = Promise.reject(e);
		}
		Promise.resolve(r).then(d).catch((r) => {
			if (a()) return;
			let i = e.retry ?? (ue.isServer() ? 0 : 3), o = e.retryDelay ?? he, s = typeof o == "function" ? o(n, r) : o, c = i === !0 || typeof i == "number" && n < i || typeof i == "function" && i(n, r);
			if (t || !c) {
				f(r);
				return;
			}
			n++, e.onFail?.(n, r), ae(s).then(() => l() ? void 0 : p()).then(() => {
				t ? f(r) : m();
			});
		});
	};
	return {
		promise: i,
		status: () => i.status,
		cancel: o,
		continue: () => (r?.(), i),
		cancelRetry: s,
		continueRetry: c,
		canStart: u,
		start: () => (u() ? m() : p().then(m), i)
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/removable.js
var ye = class {
	#e;
	destroy() {
		this.clearGcTimeout();
	}
	scheduleGc() {
		this.clearGcTimeout(), k(this.gcTime) && (this.#e = w.setTimeout(() => {
			this.optionalRemove();
		}, this.gcTime));
	}
	updateGcTime(e) {
		this.gcTime = Math.max(this.gcTime || 0, e ?? (ue.isServer() ? Infinity : 300 * 1e3));
	}
	clearGcTimeout() {
		this.#e !== void 0 && (w.clearTimeout(this.#e), this.#e = void 0);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js
function be(e) {
	return { onFetch: (t, n) => {
		let r = t.options, i = t.fetchOptions?.meta?.fetchMore?.direction, a = t.state.data?.pages || [], o = t.state.data?.pageParams || [], s = {
			pages: [],
			pageParams: []
		}, c = 0, l = async () => {
			let n = !1, l = (e) => {
				V(e, () => t.signal, () => n = !0);
			}, u = z(t.options, t.fetchOptions), d = async (e, r, i) => {
				if (n) return Promise.reject(t.signal.reason);
				if (r == null && e.pages.length) return Promise.resolve(e);
				let a = (() => {
					let e = {
						client: t.client,
						queryKey: t.queryKey,
						pageParam: r,
						direction: i ? "backward" : "forward",
						meta: t.options.meta
					};
					return l(e), e;
				})(), o = await u(a), { maxPages: s } = t.options, c = i ? ce : se;
				return {
					pages: c(e.pages, o, s),
					pageParams: c(e.pageParams, r, s)
				};
			};
			if (i && a.length) {
				let e = i === "backward", t = e ? Se : xe, n = {
					pages: a,
					pageParams: o
				};
				s = await d(n, t(r, n), e);
			} else {
				let t = e ?? a.length;
				do {
					let e = c === 0 ? o[0] ?? r.initialPageParam : xe(r, s);
					if (c > 0 && e == null) break;
					s = await d(s, e), c++;
				} while (c < t);
			}
			return s;
		};
		t.options.persister ? t.fetchFn = () => t.options.persister?.(l, {
			client: t.client,
			queryKey: t.queryKey,
			meta: t.options.meta,
			signal: t.signal
		}, n) : t.fetchFn = l;
	} };
}
function xe(e, { pages: t, pageParams: n }) {
	let r = t.length - 1;
	return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function Se(e, { pages: t, pageParams: n }) {
	return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
function Ce(e, t) {
	return t ? xe(e, t) != null : !1;
}
function we(e, t) {
	return !t || !e.getPreviousPageParam ? !1 : Se(e, t) != null;
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/query.js
var Te = class extends ye {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s;
	constructor(e) {
		super(), this.#s = !1, this.#o = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#i = e.client, this.#r = this.#i.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#t = Oe(this.options), this.state = e.state ?? this.#t, this.scheduleGc();
	}
	get meta() {
		return this.options.meta;
	}
	get queryType() {
		return this.#e;
	}
	get promise() {
		return this.#a?.promise;
	}
	setOptions(e) {
		if (this.options = {
			...this.#o,
			...e
		}, e?._type && (this.#e = e._type), this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
			let e = Oe(this.options);
			e.data !== void 0 && (this.setState(De(e.data, e.dataUpdatedAt)), this.#t = e);
		}
	}
	optionalRemove() {
		!this.observers.length && this.state.fetchStatus === "idle" && this.#r.remove(this);
	}
	setData(e, t) {
		let n = oe(this.state.data, e, this.options);
		return this.#l({
			data: n,
			type: "success",
			dataUpdatedAt: t?.updatedAt,
			manual: t?.manual
		}), n;
	}
	setState(e) {
		this.#l({
			type: "setState",
			state: e
		});
	}
	cancel(e) {
		let t = this.#a?.promise;
		return this.#a?.cancel(e), t ? t.then(D).catch(D) : Promise.resolve();
	}
	destroy() {
		super.destroy(), this.cancel({ silent: !0 });
	}
	get resetState() {
		return this.#t;
	}
	reset() {
		this.destroy(), this.setState(this.resetState);
	}
	isActive() {
		return this.observers.some((e) => M(e.options.enabled, this) !== !1);
	}
	isDisabled() {
		return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === le || !this.isFetched();
	}
	isFetched() {
		return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
	}
	isStatic() {
		return this.getObserversCount() > 0 ? this.observers.some((e) => j(e.options.staleTime, this) === "static") : !1;
	}
	isStale() {
		return this.getObserversCount() > 0 ? this.observers.some((e) => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated;
	}
	isStaleByTime(e = 0) {
		return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !A(this.state.dataUpdatedAt, e);
	}
	onFocus() {
		this.observers.find((e) => e.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: !1 }), this.#a?.continue();
	}
	onOnline() {
		this.observers.find((e) => e.shouldFetchOnReconnect())?.refetch({ cancelRefetch: !1 }), this.#a?.continue();
	}
	addObserver(e) {
		this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#r.notify({
			type: "observerAdded",
			query: this,
			observer: e
		}));
	}
	removeObserver(e) {
		this.observers.includes(e) && (this.observers = this.observers.filter((t) => t !== e), this.observers.length || (this.#a && (this.#s || this.#c() ? this.#a.cancel({ revert: !0 }) : this.#a.cancelRetry()), this.scheduleGc()), this.#r.notify({
			type: "observerRemoved",
			query: this,
			observer: e
		}));
	}
	getObserversCount() {
		return this.observers.length;
	}
	#c() {
		return this.state.fetchStatus === "paused" && this.state.status === "pending";
	}
	invalidate() {
		this.state.isInvalidated || this.#l({ type: "invalidate" });
	}
	async fetch(e, t) {
		if (this.state.fetchStatus !== "idle" && this.#a?.status() !== "rejected") {
			if (this.state.data !== void 0 && t?.cancelRefetch) this.cancel({ silent: !0 });
			else if (this.#a) return this.#a.continueRetry(), this.#a.promise;
		}
		if (e && this.setOptions(e), !this.options.queryFn) {
			let e = this.observers.find((e) => e.options.queryFn);
			e && this.setOptions(e.options);
		}
		let n = new AbortController(), r = (e) => {
			Object.defineProperty(e, "signal", {
				enumerable: !0,
				get: () => (this.#s = !0, n.signal)
			});
		}, i = () => {
			let e = z(this.options, t), n = (() => {
				let e = {
					client: this.#i,
					queryKey: this.queryKey,
					meta: this.meta
				};
				return r(e), e;
			})();
			return this.#s = !1, this.options.persister ? this.options.persister(e, n, this) : e(n);
		}, a = (() => {
			let e = {
				fetchOptions: t,
				options: this.options,
				queryKey: this.queryKey,
				client: this.#i,
				state: this.state,
				fetchFn: i
			};
			return r(e), e;
		})();
		(this.#e === "infinite" ? be(this.options.pages) : this.options.behavior)?.onFetch(a, this), this.#n = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== a.fetchOptions?.meta) && this.#l({
			type: "fetch",
			meta: a.fetchOptions?.meta
		}), this.#a = ve({
			initialPromise: t?.initialPromise,
			fn: a.fetchFn,
			onCancel: (e) => {
				e instanceof _e && e.revert && this.setState({
					...this.#n,
					fetchStatus: "idle"
				}), n.abort();
			},
			onFail: (e, t) => {
				this.#l({
					type: "failed",
					failureCount: e,
					error: t
				});
			},
			onPause: () => {
				this.#l({ type: "pause" });
			},
			onContinue: () => {
				this.#l({ type: "continue" });
			},
			retry: a.options.retry,
			retryDelay: a.options.retryDelay,
			networkMode: a.options.networkMode,
			canRun: () => !0
		});
		try {
			let e = await this.#a.start();
			if (e === void 0) throw Error(`${this.queryHash} data is undefined`);
			return this.setData(e), this.#r.config.onSuccess?.(e, this), this.#r.config.onSettled?.(e, this.state.error, this), e;
		} catch (e) {
			if (e instanceof _e) {
				if (e.silent) return this.#a.promise;
				if (e.revert) {
					if (this.state.data === void 0) throw e;
					return this.state.data;
				}
			}
			throw this.#l({
				type: "error",
				error: e
			}), this.#r.config.onError?.(e, this), this.#r.config.onSettled?.(this.state.data, e, this), e;
		} finally {
			this.scheduleGc();
		}
	}
	#l(e) {
		let t = (t) => {
			switch (e.type) {
				case "failed": return {
					...t,
					fetchFailureCount: e.failureCount,
					fetchFailureReason: e.error
				};
				case "pause": return {
					...t,
					fetchStatus: "paused"
				};
				case "continue": return {
					...t,
					fetchStatus: "fetching"
				};
				case "fetch": return {
					...t,
					...Ee(t.data, this.options),
					fetchMeta: e.meta ?? null
				};
				case "success":
					let n = {
						...t,
						...De(e.data, e.dataUpdatedAt),
						dataUpdateCount: t.dataUpdateCount + 1,
						...!e.manual && {
							fetchStatus: "idle",
							fetchFailureCount: 0,
							fetchFailureReason: null
						}
					};
					return this.#n = e.manual ? n : void 0, n;
				case "error":
					let r = e.error;
					return {
						...t,
						error: r,
						errorUpdateCount: t.errorUpdateCount + 1,
						errorUpdatedAt: Date.now(),
						fetchFailureCount: t.fetchFailureCount + 1,
						fetchFailureReason: r,
						fetchStatus: "idle",
						status: "error",
						isInvalidated: !0
					};
				case "invalidate": return {
					...t,
					isInvalidated: !0
				};
				case "setState": return {
					...t,
					...e.state
				};
			}
		};
		this.state = t(this.state), H.batch(() => {
			this.observers.forEach((e) => {
				e.onQueryUpdate();
			}), this.#r.notify({
				query: this,
				type: "updated",
				action: e
			});
		});
	}
};
function Ee(e, t) {
	return {
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchStatus: ge(t.networkMode) ? "fetching" : "paused",
		...e === void 0 && {
			error: null,
			status: "pending"
		}
	};
}
function De(e, t) {
	return {
		data: e,
		dataUpdatedAt: t ?? Date.now(),
		error: null,
		isInvalidated: !1,
		status: "success"
	};
}
function Oe(e) {
	let t = typeof e.initialData == "function" ? e.initialData() : e.initialData, n = t !== void 0, r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
	return {
		data: t,
		dataUpdateCount: 0,
		dataUpdatedAt: n ? r ?? Date.now() : 0,
		error: null,
		errorUpdateCount: 0,
		errorUpdatedAt: 0,
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchMeta: null,
		isInvalidated: !1,
		status: n ? "success" : "pending",
		fetchStatus: "idle"
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/mutation.js
var ke = class extends ye {
	#e;
	#t;
	#n;
	#r;
	constructor(e) {
		super(), this.#e = e.client, this.mutationId = e.mutationId, this.#n = e.mutationCache, this.#t = [], this.state = e.state || Ae(), this.setOptions(e.options), this.scheduleGc();
	}
	setOptions(e) {
		this.options = e, this.updateGcTime(this.options.gcTime);
	}
	get meta() {
		return this.options.meta;
	}
	addObserver(e) {
		this.#t.includes(e) || (this.#t.push(e), this.clearGcTimeout(), this.#n.notify({
			type: "observerAdded",
			mutation: this,
			observer: e
		}));
	}
	removeObserver(e) {
		this.#t = this.#t.filter((t) => t !== e), this.scheduleGc(), this.#n.notify({
			type: "observerRemoved",
			mutation: this,
			observer: e
		});
	}
	optionalRemove() {
		this.#t.length || (this.state.status === "pending" ? this.scheduleGc() : this.#n.remove(this));
	}
	continue() {
		return this.#r?.continue() ?? this.execute(this.state.variables);
	}
	async execute(e) {
		let t = () => {
			this.#i({ type: "continue" });
		}, n = {
			client: this.#e,
			meta: this.options.meta,
			mutationKey: this.options.mutationKey
		};
		this.#r = ve({
			fn: () => this.options.mutationFn ? this.options.mutationFn(e, n) : Promise.reject(/* @__PURE__ */ Error("No mutationFn found")),
			onFail: (e, t) => {
				this.#i({
					type: "failed",
					failureCount: e,
					error: t
				});
			},
			onPause: () => {
				this.#i({ type: "pause" });
			},
			onContinue: t,
			retry: this.options.retry ?? 0,
			retryDelay: this.options.retryDelay,
			networkMode: this.options.networkMode,
			canRun: () => this.#n.canRun(this)
		});
		let r = this.state.status === "pending", i = !this.#r.canStart();
		try {
			if (r) t();
			else {
				this.#i({
					type: "pending",
					variables: e,
					isPaused: i
				}), this.#n.config.onMutate && await this.#n.config.onMutate(e, this, n);
				let t = await this.options.onMutate?.(e, n);
				t !== this.state.context && this.#i({
					type: "pending",
					context: t,
					variables: e,
					isPaused: i
				});
			}
			let a = await this.#r.start();
			return await this.#n.config.onSuccess?.(a, e, this.state.context, this, n), await this.options.onSuccess?.(a, e, this.state.context, n), await this.#n.config.onSettled?.(a, null, this.state.variables, this.state.context, this, n), await this.options.onSettled?.(a, null, e, this.state.context, n), this.#i({
				type: "success",
				data: a
			}), a;
		} catch (t) {
			try {
				await this.#n.config.onError?.(t, e, this.state.context, this, n);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.options.onError?.(t, e, this.state.context, n);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.#n.config.onSettled?.(void 0, t, this.state.variables, this.state.context, this, n);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.options.onSettled?.(void 0, t, e, this.state.context, n);
			} catch (e) {
				Promise.reject(e);
			}
			throw this.#i({
				type: "error",
				error: t
			}), t;
		} finally {
			this.#n.runNext(this);
		}
	}
	#i(e) {
		let t = (t) => {
			switch (e.type) {
				case "failed": return {
					...t,
					failureCount: e.failureCount,
					failureReason: e.error
				};
				case "pause": return {
					...t,
					isPaused: !0
				};
				case "continue": return {
					...t,
					isPaused: !1
				};
				case "pending": return {
					...t,
					context: e.context,
					data: void 0,
					failureCount: 0,
					failureReason: null,
					error: null,
					isPaused: e.isPaused,
					status: "pending",
					variables: e.variables,
					submittedAt: Date.now()
				};
				case "success": return {
					...t,
					data: e.data,
					failureCount: 0,
					failureReason: null,
					error: null,
					status: "success",
					isPaused: !1
				};
				case "error": return {
					...t,
					data: void 0,
					error: e.error,
					failureCount: t.failureCount + 1,
					failureReason: e.error,
					isPaused: !1,
					status: "error"
				};
			}
		};
		this.state = t(this.state), H.batch(() => {
			this.#t.forEach((t) => {
				t.onMutationUpdate(e);
			}), this.#n.notify({
				mutation: this,
				type: "updated",
				action: e
			});
		});
	}
};
function Ae() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		failureReason: null,
		isPaused: !1,
		status: "idle",
		variables: void 0,
		submittedAt: 0
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/mutationCache.js
var je = class extends x {
	constructor(e = {}) {
		super(), this.config = e, this.#e = /* @__PURE__ */ new Set(), this.#t = /* @__PURE__ */ new Map(), this.#n = 0;
	}
	#e;
	#t;
	#n;
	build(e, t, n) {
		let r = new ke({
			client: e,
			mutationCache: this,
			mutationId: ++this.#n,
			options: e.defaultMutationOptions(t),
			state: n
		});
		return this.add(r), r;
	}
	add(e) {
		this.#e.add(e);
		let t = Me(e);
		if (typeof t == "string") {
			let n = this.#t.get(t);
			n ? n.push(e) : this.#t.set(t, [e]);
		}
		this.notify({
			type: "added",
			mutation: e
		});
	}
	remove(e) {
		if (this.#e.delete(e)) {
			let t = Me(e);
			if (typeof t == "string") {
				let n = this.#t.get(t);
				if (n) if (n.length > 1) {
					let t = n.indexOf(e);
					t !== -1 && n.splice(t, 1);
				} else n[0] === e && this.#t.delete(t);
			}
		}
		this.notify({
			type: "removed",
			mutation: e
		});
	}
	canRun(e) {
		let t = Me(e);
		if (typeof t == "string") {
			let n = this.#t.get(t)?.find((e) => e.state.status === "pending");
			return !n || n === e;
		} else return !0;
	}
	runNext(e) {
		let t = Me(e);
		return typeof t == "string" ? (this.#t.get(t)?.find((t) => t !== e && t.state.isPaused))?.continue() ?? Promise.resolve() : Promise.resolve();
	}
	clear() {
		H.batch(() => {
			this.#e.forEach((e) => {
				this.notify({
					type: "removed",
					mutation: e
				});
			}), this.#e.clear(), this.#t.clear();
		});
	}
	getAll() {
		return Array.from(this.#e);
	}
	find(e) {
		let t = {
			exact: !0,
			...e
		};
		return this.getAll().find((e) => ee(t, e));
	}
	findAll(e = {}) {
		return this.getAll().filter((t) => ee(e, t));
	}
	notify(e) {
		H.batch(() => {
			this.listeners.forEach((t) => {
				t(e);
			});
		});
	}
	resumePausedMutations() {
		let e = this.getAll().filter((e) => e.state.isPaused);
		return H.batch(() => Promise.all(e.map((e) => e.continue().catch(D))));
	}
};
function Me(e) {
	return e.options.scope?.id;
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.4/node_modules/@tanstack/query-core/build/modern/queryCache.js
var Ne = class extends x {
	constructor(e = {}) {
		super(), this.config = e, this.#e = /* @__PURE__ */ new Map();
	}
	#e;
	build(e, t, n) {
		let r = t.queryKey, i = t.queryHash ?? P(r, t), a = this.get(i);
		return a || (a = new Te({
			client: e,
			queryKey: r,
			queryHash: i,
			options: e.defaultQueryOptions(t),
			state: n,
			defaultOptions: e.getQueryDefaults(r)
		}), this.add(a)), a;
	}
	add(e) {
		this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e), this.notify({
			type: "added",
			query: e
		}));
	}
	remove(e) {
		let t = this.#e.get(e.queryHash);
		t && (e.destroy(), t === e && this.#e.delete(e.queryHash), this.notify({
			type: "removed",
			query: e
		}));
	}
	clear() {
		H.batch(() => {
			this.getAll().forEach((e) => {
				this.remove(e);
			});
		});
	}
	get(e) {
		return this.#e.get(e);
	}
	getAll() {
		return [...this.#e.values()];
	}
	find(e) {
		let t = {
			exact: !0,
			...e
		};
		return this.getAll().find((e) => N(t, e));
	}
	findAll(e = {}) {
		let t = this.getAll();
		return Object.keys(e).length > 0 ? t.filter((t) => N(e, t)) : t;
	}
	notify(e) {
		H.batch(() => {
			this.listeners.forEach((t) => {
				t(e);
			});
		});
	}
	onFocus() {
		H.batch(() => {
			this.getAll().forEach((e) => {
				e.onFocus();
			});
		});
	}
	onOnline() {
		H.batch(() => {
			this.getAll().forEach((e) => {
				e.onOnline();
			});
		});
	}
}, Pe = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s;
	constructor(e = {}) {
		this.#e = e.queryCache || new Ne(), this.#t = e.mutationCache || new je(), this.#n = e.defaultOptions || {}, this.#r = /* @__PURE__ */ new Map(), this.#i = /* @__PURE__ */ new Map(), this.#a = 0;
	}
	mount() {
		this.#a++, this.#a === 1 && (this.#o = S.subscribe(async (e) => {
			e && (await this.resumePausedMutations(), this.#e.onFocus());
		}), this.#s = me.subscribe(async (e) => {
			e && (await this.resumePausedMutations(), this.#e.onOnline());
		}));
	}
	unmount() {
		this.#a--, this.#a === 0 && (this.#o?.(), this.#o = void 0, this.#s?.(), this.#s = void 0);
	}
	isFetching(e) {
		return this.#e.findAll({
			...e,
			fetchStatus: "fetching"
		}).length;
	}
	isMutating(e) {
		return this.#t.findAll({
			...e,
			status: "pending"
		}).length;
	}
	getQueryData(e) {
		let t = this.defaultQueryOptions({ queryKey: e });
		return this.#e.get(t.queryHash)?.state.data;
	}
	ensureQueryData(e) {
		let t = this.defaultQueryOptions(e), n = this.#e.build(this, t), r = n.state.data;
		return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(j(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r));
	}
	getQueriesData(e) {
		return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
	}
	setQueryData(e, t, n) {
		let r = this.defaultQueryOptions({ queryKey: e }), i = this.#e.get(r.queryHash)?.state.data, a = O(t, i);
		if (a !== void 0) return this.#e.build(this, r).setData(a, {
			...n,
			manual: !0
		});
	}
	setQueriesData(e, t, n) {
		return H.batch(() => this.#e.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]));
	}
	getQueryState(e) {
		let t = this.defaultQueryOptions({ queryKey: e });
		return this.#e.get(t.queryHash)?.state;
	}
	removeQueries(e) {
		let t = this.#e;
		H.batch(() => {
			t.findAll(e).forEach((e) => {
				t.remove(e);
			});
		});
	}
	resetQueries(e, t) {
		let n = this.#e;
		return H.batch(() => (n.findAll(e).forEach((e) => {
			e.reset();
		}), this.refetchQueries({
			type: "active",
			...e
		}, t)));
	}
	cancelQueries(e, t = {}) {
		let n = {
			revert: !0,
			...t
		}, r = H.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
		return Promise.all(r).then(D).catch(D);
	}
	invalidateQueries(e, t = {}) {
		return H.batch(() => (this.#e.findAll(e).forEach((e) => {
			e.invalidate();
		}), e?.refetchType === "none" ? Promise.resolve() : this.refetchQueries({
			...e,
			type: e?.refetchType ?? e?.type ?? "active"
		}, t)));
	}
	refetchQueries(e, t = {}) {
		let n = {
			...t,
			cancelRefetch: t.cancelRefetch ?? !0
		}, r = H.batch(() => this.#e.findAll(e).filter((e) => !e.isDisabled() && !e.isStatic()).map((e) => {
			let t = e.fetch(void 0, n);
			return n.throwOnError || (t = t.catch(D)), e.state.fetchStatus === "paused" ? Promise.resolve() : t;
		}));
		return Promise.all(r).then(D);
	}
	fetchQuery(e) {
		let t = this.defaultQueryOptions(e);
		t.retry === void 0 && (t.retry = !1);
		let n = this.#e.build(this, t);
		return n.isStaleByTime(j(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
	}
	prefetchQuery(e) {
		return this.fetchQuery(e).then(D).catch(D);
	}
	fetchInfiniteQuery(e) {
		return e._type = "infinite", this.fetchQuery(e);
	}
	prefetchInfiniteQuery(e) {
		return this.fetchInfiniteQuery(e).then(D).catch(D);
	}
	ensureInfiniteQueryData(e) {
		return e._type = "infinite", this.ensureQueryData(e);
	}
	resumePausedMutations() {
		return me.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
	}
	getQueryCache() {
		return this.#e;
	}
	getMutationCache() {
		return this.#t;
	}
	getDefaultOptions() {
		return this.#n;
	}
	setDefaultOptions(e) {
		this.#n = e;
	}
	setQueryDefaults(e, t) {
		this.#r.set(F(e), {
			queryKey: e,
			defaultOptions: t
		});
	}
	getQueryDefaults(e) {
		let t = [...this.#r.values()], n = {};
		return t.forEach((t) => {
			I(e, t.queryKey) && Object.assign(n, t.defaultOptions);
		}), n;
	}
	setMutationDefaults(e, t) {
		this.#i.set(F(e), {
			mutationKey: e,
			defaultOptions: t
		});
	}
	getMutationDefaults(e) {
		let t = [...this.#i.values()], n = {};
		return t.forEach((t) => {
			I(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
		}), n;
	}
	defaultQueryOptions(e) {
		if (e._defaulted) return e;
		let t = {
			...this.#n.queries,
			...this.getQueryDefaults(e.queryKey),
			...e,
			_defaulted: !0
		};
		return t.queryHash ||= P(t.queryKey, t), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === le && (t.enabled = !1), t;
	}
	defaultMutationOptions(e) {
		return e?._defaulted ? e : {
			...this.#n.mutations,
			...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
			...e,
			_defaulted: !0
		};
	}
	clear() {
		this.#e.clear(), this.#t.clear();
	}
}, Fe = /* @__PURE__ */ n(((e) => {
	var n = (c(), t(h)), r = Symbol.for("react.element"), i = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = {
		key: !0,
		ref: !0,
		__self: !0,
		__source: !0
	};
	function l(e, t, n) {
		var i, c = {}, l = null, u = null;
		for (i in n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (u = t.ref), t) a.call(t, i) && !s.hasOwnProperty(i) && (c[i] = t[i]);
		if (e && e.defaultProps) for (i in t = e.defaultProps, t) c[i] === void 0 && (c[i] = t[i]);
		return {
			$$typeof: r,
			type: e,
			key: l,
			ref: u,
			props: c,
			_owner: o.current
		};
	}
	e.Fragment = i, e.jsx = l, e.jsxs = l;
})), Ie = /* @__PURE__ */ n(((e, t) => {
	t.exports = Fe();
}));
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.101.4_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
c();
var Le = Ie(), Re = s(void 0), ze = (e) => {
	let t = a(Re);
	if (e) return e;
	if (!t) throw Error("No QueryClient set, use QueryClientProvider to set one");
	return t;
}, Be = ({ client: e, children: t }) => (v(() => (e.mount(), () => {
	e.unmount();
}), [e]), /* @__PURE__ */ (0, Le.jsx)(Re.Provider, {
	value: e,
	children: t
})), Ve = window.adminXQueryClient || new Pe({ defaultOptions: { queries: {
	refetchOnWindowFocus: !1,
	staleTime: 60 * 1e3 * 5,
	gcTime: 60 * 1e3 * 10,
	retry: !1,
	networkMode: "always"
} } });
window.__TANSTACK_QUERY_CLIENT__ = Ve, window.adminXQueryClient || (window.adminXQueryClient = Ve);
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/is.js
var He = Object.prototype.toString;
function Ue(e) {
	switch (He.call(e)) {
		case "[object Error]":
		case "[object Exception]":
		case "[object DOMException]": return !0;
		default: return it(e, Error);
	}
}
function We(e, t) {
	return He.call(e) === `[object ${t}]`;
}
function Ge(e) {
	return We(e, "ErrorEvent");
}
function Ke(e) {
	return We(e, "DOMError");
}
function qe(e) {
	return We(e, "DOMException");
}
function Je(e) {
	return We(e, "String");
}
function Ye(e) {
	return typeof e == "object" && !!e && "__sentry_template_string__" in e && "__sentry_template_values__" in e;
}
function Xe(e) {
	return e === null || Ye(e) || typeof e != "object" && typeof e != "function";
}
function Ze(e) {
	return We(e, "Object");
}
function Qe(e) {
	return typeof Event < "u" && it(e, Event);
}
function $e(e) {
	return typeof Element < "u" && it(e, Element);
}
function et(e) {
	return We(e, "RegExp");
}
function tt(e) {
	return !!(e && e.then && typeof e.then == "function");
}
function nt(e) {
	return Ze(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
}
function rt(e) {
	return typeof e == "number" && e !== e;
}
function it(e, t) {
	try {
		return e instanceof t;
	} catch {
		return !1;
	}
}
function at(e) {
	return !!(typeof e == "object" && e && (e.__isVue || e._isVue));
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/string.js
function ot(e, t = 0) {
	return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.slice(0, t)}...`;
}
function st(e, t) {
	if (!Array.isArray(e)) return "";
	let n = [];
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		try {
			at(r) ? n.push("[VueViewModel]") : n.push(String(r));
		} catch {
			n.push("[value cannot be serialized]");
		}
	}
	return n.join(t);
}
function ct(e, t, n = !1) {
	return Je(e) ? et(t) ? t.test(e) : Je(t) ? n ? e === t : e.includes(t) : !1 : !1;
}
function lt(e, t = [], n = !1) {
	return t.some((t) => ct(e, t, n));
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/aggregate-errors.js
function ut(e, t, n = 250, r, i, a, o) {
	if (!a.exception || !a.exception.values || !o || !it(o.originalException, Error)) return;
	let s = a.exception.values.length > 0 ? a.exception.values[a.exception.values.length - 1] : void 0;
	s && (a.exception.values = mt(dt(e, t, i, o.originalException, r, a.exception.values, s, 0), n));
}
function dt(e, t, n, r, i, a, o, s) {
	if (a.length >= n + 1) return a;
	let c = [...a];
	if (it(r[i], Error)) {
		ft(o, s);
		let a = e(t, r[i]), l = c.length;
		pt(a, i, l, s), c = dt(e, t, n, r[i], i, [a, ...c], a, l);
	}
	return Array.isArray(r.errors) && r.errors.forEach((r, a) => {
		if (it(r, Error)) {
			ft(o, s);
			let l = e(t, r), u = c.length;
			pt(l, `errors[${a}]`, u, s), c = dt(e, t, n, r, i, [l, ...c], l, u);
		}
	}), c;
}
function ft(e, t) {
	e.mechanism = e.mechanism || {
		type: "generic",
		handled: !0
	}, e.mechanism = {
		...e.mechanism,
		...e.type === "AggregateError" && { is_exception_group: !0 },
		exception_id: t
	};
}
function pt(e, t, n, r) {
	e.mechanism = e.mechanism || {
		type: "generic",
		handled: !0
	}, e.mechanism = {
		...e.mechanism,
		type: "chained",
		source: t,
		exception_id: n,
		parent_id: r
	};
}
function mt(e, t) {
	return e.map((e) => (e.value &&= ot(e.value, t), e));
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/worldwide.js
function ht(e) {
	return e && e.Math == Math ? e : void 0;
}
var U = typeof globalThis == "object" && ht(globalThis) || typeof window == "object" && ht(window) || typeof self == "object" && ht(self) || typeof global == "object" && ht(global) || (function() {
	return this;
})() || {};
function gt() {
	return U;
}
function _t(e, t, n) {
	let r = n || U, i = r.__SENTRY__ = r.__SENTRY__ || {};
	return i[e] || (i[e] = t());
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/browser.js
var vt = gt(), yt = 80;
function bt(e, t = {}) {
	if (!e) return "<unknown>";
	try {
		let n = e, r = [], i = 0, a = 0, o, s = Array.isArray(t) ? t : t.keyAttrs, c = !Array.isArray(t) && t.maxStringLength || yt;
		for (; n && i++ < 5 && (o = xt(n, s), !(o === "html" || i > 1 && a + r.length * 3 + o.length >= c));) r.push(o), a += o.length, n = n.parentNode;
		return r.reverse().join(" > ");
	} catch {
		return "<unknown>";
	}
}
function xt(e, t) {
	let n = e, r = [], i, a, o, s, c;
	if (!n || !n.tagName) return "";
	if (vt.HTMLElement && n instanceof HTMLElement && n.dataset && n.dataset.sentryComponent) return n.dataset.sentryComponent;
	r.push(n.tagName.toLowerCase());
	let l = t && t.length ? t.filter((e) => n.getAttribute(e)).map((e) => [e, n.getAttribute(e)]) : null;
	if (l && l.length) l.forEach((e) => {
		r.push(`[${e[0]}="${e[1]}"]`);
	});
	else if (n.id && r.push(`#${n.id}`), i = n.className, i && Je(i)) for (a = i.split(/\s+/), c = 0; c < a.length; c++) r.push(`.${a[c]}`);
	let u = [
		"aria-label",
		"type",
		"name",
		"title",
		"alt"
	];
	for (c = 0; c < u.length; c++) o = u[c], s = n.getAttribute(o), s && r.push(`[${o}="${s}"]`);
	return r.join("");
}
function St() {
	try {
		return vt.document.location.href;
	} catch {
		return "";
	}
}
function Ct(e) {
	if (!vt.HTMLElement) return null;
	let t = e;
	for (let e = 0; e < 5; e++) {
		if (!t) return null;
		if (t instanceof HTMLElement && t.dataset.sentryComponent) return t.dataset.sentryComponent;
		t = t.parentNode;
	}
	return null;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/debug-build.js
var wt = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, Tt = "Sentry Logger ", Et = [
	"debug",
	"info",
	"warn",
	"error",
	"log",
	"assert",
	"trace"
], Dt = {};
function Ot(e) {
	if (!("console" in U)) return e();
	let t = U.console, n = {}, r = Object.keys(Dt);
	r.forEach((e) => {
		let r = Dt[e];
		n[e] = t[e], t[e] = r;
	});
	try {
		return e();
	} finally {
		r.forEach((e) => {
			t[e] = n[e];
		});
	}
}
function kt() {
	let e = !1, t = {
		enable: () => {
			e = !0;
		},
		disable: () => {
			e = !1;
		},
		isEnabled: () => e
	};
	return wt ? Et.forEach((n) => {
		t[n] = (...t) => {
			e && Ot(() => {
				U.console[n](`${Tt}[${n}]:`, ...t);
			});
		};
	}) : Et.forEach((e) => {
		t[e] = () => void 0;
	}), t;
}
var W = kt(), At = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function jt(e) {
	return e === "http" || e === "https";
}
function Mt(e, t = !1) {
	let { host: n, path: r, pass: i, port: a, projectId: o, protocol: s, publicKey: c } = e;
	return `${s}://${c}${t && i ? `:${i}` : ""}@${n}${a ? `:${a}` : ""}/${r && `${r}/`}${o}`;
}
function Nt(e) {
	let t = At.exec(e);
	if (!t) {
		Ot(() => {
			console.error(`Invalid Sentry Dsn: ${e}`);
		});
		return;
	}
	let [n, r, i = "", a, o = "", s] = t.slice(1), c = "", l = s, u = l.split("/");
	if (u.length > 1 && (c = u.slice(0, -1).join("/"), l = u.pop()), l) {
		let e = l.match(/^\d+/);
		e && (l = e[0]);
	}
	return Pt({
		host: a,
		pass: i,
		path: c,
		projectId: l,
		port: o,
		protocol: n,
		publicKey: r
	});
}
function Pt(e) {
	return {
		protocol: e.protocol,
		publicKey: e.publicKey || "",
		pass: e.pass || "",
		host: e.host,
		port: e.port || "",
		path: e.path || "",
		projectId: e.projectId
	};
}
function Ft(e) {
	if (!wt) return !0;
	let { port: t, projectId: n, protocol: r } = e;
	return [
		"protocol",
		"publicKey",
		"host",
		"projectId"
	].find((t) => e[t] ? !1 : (W.error(`Invalid Sentry Dsn: ${t} missing`), !0)) ? !1 : n.match(/^\d+$/) ? jt(r) ? t && isNaN(parseInt(t, 10)) ? (W.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1) : !0 : (W.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1) : (W.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
}
function It(e) {
	let t = typeof e == "string" ? Nt(e) : Pt(e);
	if (!(!t || !Ft(t))) return t;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/object.js
function G(e, t, n) {
	if (!(t in e)) return;
	let r = e[t], i = n(r);
	typeof i == "function" && Rt(i, r), e[t] = i;
}
function Lt(e, t, n) {
	try {
		Object.defineProperty(e, t, {
			value: n,
			writable: !0,
			configurable: !0
		});
	} catch {
		wt && W.log(`Failed to add non-enumerable property "${t}" to object`, e);
	}
}
function Rt(e, t) {
	try {
		e.prototype = t.prototype = t.prototype || {}, Lt(e, "__sentry_original__", t);
	} catch {}
}
function zt(e) {
	return e.__sentry_original__;
}
function Bt(e) {
	if (Ue(e)) return {
		message: e.message,
		name: e.name,
		stack: e.stack,
		...Ht(e)
	};
	if (Qe(e)) {
		let t = {
			type: e.type,
			target: Vt(e.target),
			currentTarget: Vt(e.currentTarget),
			...Ht(e)
		};
		return typeof CustomEvent < "u" && it(e, CustomEvent) && (t.detail = e.detail), t;
	} else return e;
}
function Vt(e) {
	try {
		return $e(e) ? bt(e) : Object.prototype.toString.call(e);
	} catch {
		return "<unknown>";
	}
}
function Ht(e) {
	if (typeof e == "object" && e) {
		let t = {};
		for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
		return t;
	} else return {};
}
function Ut(e, t = 40) {
	let n = Object.keys(Bt(e));
	if (n.sort(), !n.length) return "[object has no keys]";
	if (n[0].length >= t) return ot(n[0], t);
	for (let e = n.length; e > 0; e--) {
		let r = n.slice(0, e).join(", ");
		if (!(r.length > t)) return e === n.length ? r : ot(r, t);
	}
	return "";
}
function Wt(e) {
	return Gt(e, /* @__PURE__ */ new Map());
}
function Gt(e, t) {
	if (Kt(e)) {
		let n = t.get(e);
		if (n !== void 0) return n;
		let r = {};
		t.set(e, r);
		for (let n of Object.keys(e)) e[n] !== void 0 && (r[n] = Gt(e[n], t));
		return r;
	}
	if (Array.isArray(e)) {
		let n = t.get(e);
		if (n !== void 0) return n;
		let r = [];
		return t.set(e, r), e.forEach((e) => {
			r.push(Gt(e, t));
		}), r;
	}
	return e;
}
function Kt(e) {
	if (!Ze(e)) return !1;
	try {
		let t = Object.getPrototypeOf(e).constructor.name;
		return !t || t === "Object";
	} catch {
		return !0;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/stacktrace.js
var qt = "<anonymous>";
function Jt(e) {
	try {
		return !e || typeof e != "function" ? qt : e.name || qt;
	} catch {
		return qt;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/instrument/_handlers.js
var Yt = {}, Xt = {};
function Zt(e, t) {
	Yt[e] = Yt[e] || [], Yt[e].push(t);
}
function Qt(e, t) {
	Xt[e] || (t(), Xt[e] = !0);
}
function $t(e, t) {
	let n = e && Yt[e];
	if (n) for (let r of n) try {
		r(t);
	} catch (t) {
		wt && W.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${Jt(r)}\nError:`, t);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/instrument/console.js
function en(e) {
	let t = "console";
	Zt(t, e), Qt(t, tn);
}
function tn() {
	"console" in U && Et.forEach(function(e) {
		e in U.console && G(U.console, e, function(t) {
			return Dt[e] = t, function(...t) {
				$t("console", {
					args: t,
					level: e
				});
				let n = Dt[e];
				n && n.apply(U.console, t);
			};
		});
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/misc.js
function nn() {
	let e = U, t = e.crypto || e.msCrypto, n = () => Math.random() * 16;
	try {
		if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
		t && t.getRandomValues && (n = () => {
			let e = /* @__PURE__ */ new Uint8Array(1);
			return t.getRandomValues(e), e[0];
		});
	} catch {}
	return "10000000100040008000100000000000".replace(/[018]/g, (e) => (e ^ (n() & 15) >> e / 4).toString(16));
}
function rn(e) {
	return e.exception && e.exception.values ? e.exception.values[0] : void 0;
}
function an(e) {
	let { message: t, event_id: n } = e;
	if (t) return t;
	let r = rn(e);
	return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>";
}
function on(e, t, n) {
	let r = e.exception = e.exception || {}, i = r.values = r.values || [], a = i[0] = i[0] || {};
	a.value ||= t || "", a.type ||= n || "Error";
}
function sn(e, t) {
	let n = rn(e);
	if (!n) return;
	let r = {
		type: "generic",
		handled: !0
	}, i = n.mechanism;
	if (n.mechanism = {
		...r,
		...i,
		...t
	}, t && "data" in t) {
		let e = {
			...i && i.data,
			...t.data
		};
		n.mechanism.data = e;
	}
}
function cn(e) {
	return Array.isArray(e) ? e : [e];
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/instrument/dom.js
var ln = U, un = 1e3, dn, fn, pn;
function mn(e) {
	Zt("dom", e), Qt("dom", hn);
}
function hn() {
	if (!ln.document) return;
	let e = $t.bind(null, "dom"), t = vn(e, !0);
	ln.document.addEventListener("click", t, !1), ln.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach((t) => {
		let n = ln[t] && ln[t].prototype;
		!n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (G(n, "addEventListener", function(t) {
			return function(n, r, i) {
				if (n === "click" || n == "keypress") try {
					let r = this, a = r.__sentry_instrumentation_handlers__ = r.__sentry_instrumentation_handlers__ || {}, o = a[n] = a[n] || { refCount: 0 };
					if (!o.handler) {
						let r = vn(e);
						o.handler = r, t.call(this, n, r, i);
					}
					o.refCount++;
				} catch {}
				return t.call(this, n, r, i);
			};
		}), G(n, "removeEventListener", function(e) {
			return function(t, n, r) {
				if (t === "click" || t == "keypress") try {
					let n = this, i = n.__sentry_instrumentation_handlers__ || {}, a = i[t];
					a && (a.refCount--, a.refCount <= 0 && (e.call(this, t, a.handler, r), a.handler = void 0, delete i[t]), Object.keys(i).length === 0 && delete n.__sentry_instrumentation_handlers__);
				} catch {}
				return e.call(this, t, n, r);
			};
		}));
	});
}
function gn(e) {
	if (e.type !== fn) return !1;
	try {
		if (!e.target || e.target._sentryId !== pn) return !1;
	} catch {}
	return !0;
}
function _n(e, t) {
	return e === "keypress" ? !t || !t.tagName ? !0 : !(t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) : !1;
}
function vn(e, t = !1) {
	return (n) => {
		if (!n || n._sentryCaptured) return;
		let r = yn(n);
		if (_n(n.type, r)) return;
		Lt(n, "_sentryCaptured", !0), r && !r._sentryId && Lt(r, "_sentryId", nn());
		let i = n.type === "keypress" ? "input" : n.type;
		gn(n) || (e({
			event: n,
			name: i,
			global: t
		}), fn = n.type, pn = r ? r._sentryId : void 0), clearTimeout(dn), dn = ln.setTimeout(() => {
			pn = void 0, fn = void 0;
		}, un);
	};
}
function yn(e) {
	try {
		return e.target;
	} catch {
		return null;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/supports.js
var bn = gt();
function xn() {
	if (!("fetch" in bn)) return !1;
	try {
		return new Headers(), new Request("http://www.example.com"), new Response(), !0;
	} catch {
		return !1;
	}
}
function Sn(e) {
	return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
}
function Cn() {
	if (typeof EdgeRuntime == "string") return !0;
	if (!xn()) return !1;
	if (Sn(bn.fetch)) return !0;
	let e = !1, t = bn.document;
	if (t && typeof t.createElement == "function") try {
		let n = t.createElement("iframe");
		n.hidden = !0, t.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (e = Sn(n.contentWindow.fetch)), t.head.removeChild(n);
	} catch (e) {
		wt && W.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
	}
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/instrument/fetch.js
function wn(e) {
	let t = "fetch";
	Zt(t, e), Qt(t, Tn);
}
function Tn() {
	Cn() && G(U, "fetch", function(e) {
		return function(...t) {
			let { method: n, url: r } = On(t), i = {
				args: t,
				fetchData: {
					method: n,
					url: r
				},
				startTimestamp: Date.now()
			};
			return $t("fetch", { ...i }), e.apply(U, t).then((e) => ($t("fetch", {
				...i,
				endTimestamp: Date.now(),
				response: e
			}), e), (e) => {
				throw $t("fetch", {
					...i,
					endTimestamp: Date.now(),
					error: e
				}), e;
			});
		};
	});
}
function En(e, t) {
	return !!e && typeof e == "object" && !!e[t];
}
function Dn(e) {
	return typeof e == "string" ? e : e ? En(e, "url") ? e.url : e.toString ? e.toString() : "" : "";
}
function On(e) {
	if (e.length === 0) return {
		method: "GET",
		url: ""
	};
	if (e.length === 2) {
		let [t, n] = e;
		return {
			url: Dn(t),
			method: En(n, "method") ? String(n.method).toUpperCase() : "GET"
		};
	}
	let t = e[0];
	return {
		url: Dn(t),
		method: En(t, "method") ? String(t.method).toUpperCase() : "GET"
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/instrument/globalError.js
var kn = null;
function An(e) {
	let t = "error";
	Zt(t, e), Qt(t, jn);
}
function jn() {
	kn = U.onerror, U.onerror = function(e, t, n, r, i) {
		return $t("error", {
			column: r,
			error: i,
			line: n,
			msg: e,
			url: t
		}), kn && !kn.__SENTRY_LOADER__ ? kn.apply(this, arguments) : !1;
	}, U.onerror.__SENTRY_INSTRUMENTED__ = !0;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/instrument/globalUnhandledRejection.js
var Mn = null;
function Nn(e) {
	let t = "unhandledrejection";
	Zt(t, e), Qt(t, Pn);
}
function Pn() {
	Mn = U.onunhandledrejection, U.onunhandledrejection = function(e) {
		return $t("unhandledrejection", e), Mn && !Mn.__SENTRY_LOADER__ ? Mn.apply(this, arguments) : !0;
	}, U.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/vendor/supportsHistory.js
var Fn = gt();
function In() {
	let e = Fn.chrome, t = e && e.app && e.app.runtime, n = "history" in Fn && !!Fn.history.pushState && !!Fn.history.replaceState;
	return !t && n;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/instrument/history.js
var Ln = U, Rn;
function zn(e) {
	let t = "history";
	Zt(t, e), Qt(t, Bn);
}
function Bn() {
	if (!In()) return;
	let e = Ln.onpopstate;
	Ln.onpopstate = function(...t) {
		let n = Ln.location.href, r = Rn;
		if (Rn = n, $t("history", {
			from: r,
			to: n
		}), e) try {
			return e.apply(this, t);
		} catch {}
	};
	function t(e) {
		return function(...t) {
			let n = t.length > 2 ? t[2] : void 0;
			if (n) {
				let e = Rn, t = String(n);
				Rn = t, $t("history", {
					from: e,
					to: t
				});
			}
			return e.apply(this, t);
		};
	}
	G(Ln.history, "pushState", t), G(Ln.history, "replaceState", t);
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/instrument/xhr.js
var Vn = U, Hn = "__sentry_xhr_v3__";
function Un(e) {
	Zt("xhr", e), Qt("xhr", Wn);
}
function Wn() {
	if (!Vn.XMLHttpRequest) return;
	let e = XMLHttpRequest.prototype;
	G(e, "open", function(e) {
		return function(...t) {
			let n = Date.now(), r = Je(t[0]) ? t[0].toUpperCase() : void 0, i = Gn(t[1]);
			if (!r || !i) return e.apply(this, t);
			this[Hn] = {
				method: r,
				url: i,
				request_headers: {}
			}, r === "POST" && i.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
			let a = () => {
				let e = this[Hn];
				if (e && this.readyState === 4) {
					try {
						e.status_code = this.status;
					} catch {}
					$t("xhr", {
						args: [r, i],
						endTimestamp: Date.now(),
						startTimestamp: n,
						xhr: this
					});
				}
			};
			return "onreadystatechange" in this && typeof this.onreadystatechange == "function" ? G(this, "onreadystatechange", function(e) {
				return function(...t) {
					return a(), e.apply(this, t);
				};
			}) : this.addEventListener("readystatechange", a), G(this, "setRequestHeader", function(e) {
				return function(...t) {
					let [n, r] = t, i = this[Hn];
					return i && Je(n) && Je(r) && (i.request_headers[n.toLowerCase()] = r), e.apply(this, t);
				};
			}), e.apply(this, t);
		};
	}), G(e, "send", function(e) {
		return function(...t) {
			let n = this[Hn];
			return n ? (t[0] !== void 0 && (n.body = t[0]), $t("xhr", {
				args: [n.method, n.url],
				startTimestamp: Date.now(),
				xhr: this
			}), e.apply(this, t)) : e.apply(this, t);
		};
	});
}
function Gn(e) {
	if (Je(e)) return e;
	try {
		return e.toString();
	} catch {}
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/memo.js
function Kn() {
	let e = typeof WeakSet == "function", t = e ? /* @__PURE__ */ new WeakSet() : [];
	function n(n) {
		if (e) return t.has(n) ? !0 : (t.add(n), !1);
		for (let e = 0; e < t.length; e++) if (t[e] === n) return !0;
		return t.push(n), !1;
	}
	function r(n) {
		if (e) t.delete(n);
		else for (let e = 0; e < t.length; e++) if (t[e] === n) {
			t.splice(e, 1);
			break;
		}
	}
	return [n, r];
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/normalize.js
function qn(e, t = 100, n = Infinity) {
	try {
		return Yn("", e, t, n);
	} catch (e) {
		return { ERROR: `**non-serializable** (${e})` };
	}
}
function Jn(e, t = 3, n = 100 * 1024) {
	let r = qn(e, t);
	return $n(r) > n ? Jn(e, t - 1, n) : r;
}
function Yn(e, t, n = Infinity, r = Infinity, i = Kn()) {
	let [a, o] = i;
	if (t == null || [
		"number",
		"boolean",
		"string"
	].includes(typeof t) && !rt(t)) return t;
	let s = Xn(e, t);
	if (!s.startsWith("[object ")) return s;
	if (t.__sentry_skip_normalization__) return t;
	let c = typeof t.__sentry_override_normalization_depth__ == "number" ? t.__sentry_override_normalization_depth__ : n;
	if (c === 0) return s.replace("object ", "");
	if (a(t)) return "[Circular ~]";
	let l = t;
	if (l && typeof l.toJSON == "function") try {
		return Yn("", l.toJSON(), c - 1, r, i);
	} catch {}
	let u = Array.isArray(t) ? [] : {}, d = 0, f = Bt(t);
	for (let e in f) {
		if (!Object.prototype.hasOwnProperty.call(f, e)) continue;
		if (d >= r) {
			u[e] = "[MaxProperties ~]";
			break;
		}
		let t = f[e];
		u[e] = Yn(e, t, c - 1, r, i), d++;
	}
	return o(t), u;
}
function Xn(e, t) {
	try {
		if (e === "domain" && t && typeof t == "object" && t._events) return "[Domain]";
		if (e === "domainEmitter") return "[DomainEmitter]";
		if (typeof global < "u" && t === global) return "[Global]";
		if (typeof window < "u" && t === window) return "[Window]";
		if (typeof document < "u" && t === document) return "[Document]";
		if (at(t)) return "[VueViewModel]";
		if (nt(t)) return "[SyntheticEvent]";
		if (typeof t == "number" && t !== t) return "[NaN]";
		if (typeof t == "function") return `[Function: ${Jt(t)}]`;
		if (typeof t == "symbol") return `[${String(t)}]`;
		if (typeof t == "bigint") return `[BigInt: ${String(t)}]`;
		let n = Zn(t);
		return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`;
	} catch (e) {
		return `**non-serializable** (${e})`;
	}
}
function Zn(e) {
	let t = Object.getPrototypeOf(e);
	return t ? t.constructor.name : "null prototype";
}
function Qn(e) {
	return ~-encodeURI(e).split(/%..|./).length;
}
function $n(e) {
	return Qn(JSON.stringify(e));
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/syncpromise.js
var er;
(function(e) {
	e[e.PENDING = 0] = "PENDING", e[e.RESOLVED = 1] = "RESOLVED", e[e.REJECTED = 2] = "REJECTED";
})(er ||= {});
var tr = class e {
	constructor(t) {
		e.prototype.__init.call(this), e.prototype.__init2.call(this), e.prototype.__init3.call(this), e.prototype.__init4.call(this), this._state = er.PENDING, this._handlers = [];
		try {
			t(this._resolve, this._reject);
		} catch (e) {
			this._reject(e);
		}
	}
	then(t, n) {
		return new e((e, r) => {
			this._handlers.push([
				!1,
				(n) => {
					if (!t) e(n);
					else try {
						e(t(n));
					} catch (e) {
						r(e);
					}
				},
				(t) => {
					if (!n) r(t);
					else try {
						e(n(t));
					} catch (e) {
						r(e);
					}
				}
			]), this._executeHandlers();
		});
	}
	catch(e) {
		return this.then((e) => e, e);
	}
	finally(t) {
		return new e((e, n) => {
			let r, i;
			return this.then((e) => {
				i = !1, r = e, t && t();
			}, (e) => {
				i = !0, r = e, t && t();
			}).then(() => {
				if (i) {
					n(r);
					return;
				}
				e(r);
			});
		});
	}
	__init() {
		this._resolve = (e) => {
			this._setResult(er.RESOLVED, e);
		};
	}
	__init2() {
		this._reject = (e) => {
			this._setResult(er.REJECTED, e);
		};
	}
	__init3() {
		this._setResult = (e, t) => {
			if (this._state === er.PENDING) {
				if (tt(t)) {
					t.then(this._resolve, this._reject);
					return;
				}
				this._state = e, this._value = t, this._executeHandlers();
			}
		};
	}
	__init4() {
		this._executeHandlers = () => {
			if (this._state === er.PENDING) return;
			let e = this._handlers.slice();
			this._handlers = [], e.forEach((e) => {
				e[0] ||= (this._state === er.RESOLVED && e[1](this._value), this._state === er.REJECTED && e[2](this._value), !0);
			});
		};
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/url.js
function nr(e) {
	if (!e) return {};
	let t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
	if (!t) return {};
	let n = t[6] || "", r = t[8] || "";
	return {
		host: t[4],
		path: t[5],
		protocol: t[2],
		search: n,
		hash: r,
		relative: t[5] + n + r
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/severity.js
var rr = [
	"fatal",
	"error",
	"warning",
	"log",
	"info",
	"debug"
];
function ir(e) {
	return e === "warn" ? "warning" : rr.includes(e) ? e : "log";
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+utils@7.120.4/node_modules/@sentry/utils/esm/time.js
var ar = 1e3;
function or() {
	return Date.now() / ar;
}
function sr() {
	let { performance: e } = U;
	if (!e || !e.now) return or;
	let t = Date.now() - e.now(), n = e.timeOrigin == null ? t : e.timeOrigin;
	return () => (n + e.now()) / ar;
}
var cr = sr();
(() => {
	let { performance: e } = U;
	if (!e || !e.now) return;
	let t = 3600 * 1e3, n = e.now(), r = Date.now(), i = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t, a = i < t, o = e.timing && e.timing.navigationStart, s = typeof o == "number" ? Math.abs(o + n - r) : t;
	return a || s < t ? i <= s ? e.timeOrigin : o : r;
})();
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/debug-build.js
var lr = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, ur = "production";
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/eventProcessors.js
function dr() {
	return _t("globalEventProcessors", () => []);
}
function fr(e, t, n, r = 0) {
	return new tr((i, a) => {
		let o = e[r];
		if (t === null || typeof o != "function") i(t);
		else {
			let s = o({ ...t }, n);
			lr && o.id && s === null && W.log(`Event processor "${o.id}" dropped event`), tt(s) ? s.then((t) => fr(e, t, n, r + 1).then(i)).then(null, a) : fr(e, s, n, r + 1).then(i).then(null, a);
		}
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/session.js
function pr(e) {
	let t = cr(), n = {
		sid: nn(),
		init: !0,
		timestamp: t,
		started: t,
		duration: 0,
		status: "ok",
		errors: 0,
		ignoreDuration: !1,
		toJSON: () => gr(n)
	};
	return e && mr(n, e), n;
}
function mr(e, t = {}) {
	if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || cr(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : nn()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
	else if (typeof t.duration == "number") e.duration = t.duration;
	else {
		let t = e.timestamp - e.started;
		e.duration = t >= 0 ? t : 0;
	}
	t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status);
}
function hr(e, t) {
	let n = {};
	t ? n = { status: t } : e.status === "ok" && (n = { status: "exited" }), mr(e, n);
}
function gr(e) {
	return Wt({
		sid: `${e.sid}`,
		init: e.init,
		started: (/* @__PURE__ */ new Date(e.started * 1e3)).toISOString(),
		timestamp: (/* @__PURE__ */ new Date(e.timestamp * 1e3)).toISOString(),
		status: e.status,
		errors: e.errors,
		did: typeof e.did == "number" || typeof e.did == "string" ? `${e.did}` : void 0,
		duration: e.duration,
		abnormal_mechanism: e.abnormal_mechanism,
		attrs: {
			release: e.release,
			environment: e.environment,
			ip_address: e.ipAddress,
			user_agent: e.userAgent
		}
	});
}
function _r(e) {
	let { spanId: t, traceId: n } = e.spanContext(), { data: r, op: i, parent_span_id: a, status: o, tags: s, origin: c } = vr(e);
	return Wt({
		data: r,
		op: i,
		parent_span_id: a,
		span_id: t,
		status: o,
		tags: s,
		trace_id: n,
		origin: c
	});
}
function vr(e) {
	return yr(e) ? e.getSpanJSON() : typeof e.toJSON == "function" ? e.toJSON() : {};
}
function yr(e) {
	return typeof e.getSpanJSON == "function";
}
function br(e) {
	let { traceFlags: t } = e.spanContext();
	return !!(t & 1);
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/utils/prepareEvent.js
function xr(e) {
	if (e) return Sr(e) || wr(e) ? { captureContext: e } : e;
}
function Sr(e) {
	return e instanceof Vr || typeof e == "function";
}
var Cr = [
	"user",
	"level",
	"extra",
	"contexts",
	"tags",
	"fingerprint",
	"requestSession",
	"propagationContext"
];
function wr(e) {
	return Object.keys(e).some((e) => Cr.includes(e));
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/exports.js
function Tr(e, t) {
	return Jr().captureException(e, xr(t));
}
function Er(e, t) {
	let n = typeof t == "string" ? t : void 0, r = typeof t == "string" ? void 0 : { captureContext: t };
	return Jr().captureMessage(e, n, r);
}
function Dr(e, t) {
	return Jr().captureEvent(e, t);
}
function Or(e, t) {
	Jr().addBreadcrumb(e, t);
}
function kr(...e) {
	let t = Jr();
	if (e.length === 2) {
		let [n, r] = e;
		return n ? t.withScope(() => (t.getStackTop().scope = n, r(n))) : t.withScope(r);
	}
	return t.withScope(e[0]);
}
function K() {
	return Jr().getClient();
}
function Ar() {
	return Jr().getScope();
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/utils/getRootSpan.js
function jr(e) {
	return e.transaction;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/tracing/dynamicSamplingContext.js
function Mr(e, t, n) {
	let r = t.getOptions(), { publicKey: i } = t.getDsn() || {}, { segment: a } = n && n.getUser() || {}, o = Wt({
		environment: r.environment || "production",
		release: r.release,
		user_segment: a,
		public_key: i,
		trace_id: e
	});
	return t.emit && t.emit("createDsc", o), o;
}
function Nr(e) {
	let t = K();
	if (!t) return {};
	let n = Mr(vr(e).trace_id || "", t, Ar()), r = jr(e);
	if (!r) return n;
	let i = r && r._frozenDynamicSamplingContext;
	if (i) return i;
	let { sampleRate: a, source: o } = r.metadata;
	a != null && (n.sample_rate = `${a}`);
	let s = vr(r);
	return o && o !== "url" && (n.transaction = s.description), n.sampled = String(br(r)), t.emit && t.emit("createDsc", n), n;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/utils/applyScopeDataToEvent.js
function Pr(e, t) {
	let { fingerprint: n, span: r, breadcrumbs: i, sdkProcessingMetadata: a } = t;
	Fr(e, t), r && Rr(e, r), zr(e, n), Ir(e, i), Lr(e, a);
}
function Fr(e, t) {
	let { extra: n, tags: r, user: i, contexts: a, level: o, transactionName: s } = t, c = Wt(n);
	c && Object.keys(c).length && (e.extra = {
		...c,
		...e.extra
	});
	let l = Wt(r);
	l && Object.keys(l).length && (e.tags = {
		...l,
		...e.tags
	});
	let u = Wt(i);
	u && Object.keys(u).length && (e.user = {
		...u,
		...e.user
	});
	let d = Wt(a);
	d && Object.keys(d).length && (e.contexts = {
		...d,
		...e.contexts
	}), o && (e.level = o), s && (e.transaction = s);
}
function Ir(e, t) {
	let n = [...e.breadcrumbs || [], ...t];
	e.breadcrumbs = n.length ? n : void 0;
}
function Lr(e, t) {
	e.sdkProcessingMetadata = {
		...e.sdkProcessingMetadata,
		...t
	};
}
function Rr(e, t) {
	e.contexts = {
		trace: _r(t),
		...e.contexts
	};
	let n = jr(t);
	if (n) {
		e.sdkProcessingMetadata = {
			dynamicSamplingContext: Nr(t),
			...e.sdkProcessingMetadata
		};
		let r = vr(n).description;
		r && (e.tags = {
			transaction: r,
			...e.tags
		});
	}
}
function zr(e, t) {
	e.fingerprint = e.fingerprint ? cn(e.fingerprint) : [], t && (e.fingerprint = e.fingerprint.concat(t)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/scope.js
var Br = 100, Vr = class e {
	constructor() {
		this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = Hr();
	}
	static clone(t) {
		return t ? t.clone() : new e();
	}
	clone() {
		let t = new e();
		return t._breadcrumbs = [...this._breadcrumbs], t._tags = { ...this._tags }, t._extra = { ...this._extra }, t._contexts = { ...this._contexts }, t._user = this._user, t._level = this._level, t._span = this._span, t._session = this._session, t._transactionName = this._transactionName, t._fingerprint = this._fingerprint, t._eventProcessors = [...this._eventProcessors], t._requestSession = this._requestSession, t._attachments = [...this._attachments], t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }, t._propagationContext = { ...this._propagationContext }, t._client = this._client, t;
	}
	setClient(e) {
		this._client = e;
	}
	getClient() {
		return this._client;
	}
	addScopeListener(e) {
		this._scopeListeners.push(e);
	}
	addEventProcessor(e) {
		return this._eventProcessors.push(e), this;
	}
	setUser(e) {
		return this._user = e || {
			email: void 0,
			id: void 0,
			ip_address: void 0,
			segment: void 0,
			username: void 0
		}, this._session && mr(this._session, { user: e }), this._notifyScopeListeners(), this;
	}
	getUser() {
		return this._user;
	}
	getRequestSession() {
		return this._requestSession;
	}
	setRequestSession(e) {
		return this._requestSession = e, this;
	}
	setTags(e) {
		return this._tags = {
			...this._tags,
			...e
		}, this._notifyScopeListeners(), this;
	}
	setTag(e, t) {
		return this._tags = {
			...this._tags,
			[e]: t
		}, this._notifyScopeListeners(), this;
	}
	setExtras(e) {
		return this._extra = {
			...this._extra,
			...e
		}, this._notifyScopeListeners(), this;
	}
	setExtra(e, t) {
		return this._extra = {
			...this._extra,
			[e]: t
		}, this._notifyScopeListeners(), this;
	}
	setFingerprint(e) {
		return this._fingerprint = e, this._notifyScopeListeners(), this;
	}
	setLevel(e) {
		return this._level = e, this._notifyScopeListeners(), this;
	}
	setTransactionName(e) {
		return this._transactionName = e, this._notifyScopeListeners(), this;
	}
	setContext(e, t) {
		return t === null ? delete this._contexts[e] : this._contexts[e] = t, this._notifyScopeListeners(), this;
	}
	setSpan(e) {
		return this._span = e, this._notifyScopeListeners(), this;
	}
	getSpan() {
		return this._span;
	}
	getTransaction() {
		let e = this._span;
		return e && e.transaction;
	}
	setSession(e) {
		return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this;
	}
	getSession() {
		return this._session;
	}
	update(t) {
		if (!t) return this;
		let n = typeof t == "function" ? t(this) : t;
		if (n instanceof e) {
			let e = n.getScopeData();
			this._tags = {
				...this._tags,
				...e.tags
			}, this._extra = {
				...this._extra,
				...e.extra
			}, this._contexts = {
				...this._contexts,
				...e.contexts
			}, e.user && Object.keys(e.user).length && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint.length && (this._fingerprint = e.fingerprint), n.getRequestSession() && (this._requestSession = n.getRequestSession()), e.propagationContext && (this._propagationContext = e.propagationContext);
		} else if (Ze(n)) {
			let e = t;
			this._tags = {
				...this._tags,
				...e.tags
			}, this._extra = {
				...this._extra,
				...e.extra
			}, this._contexts = {
				...this._contexts,
				...e.contexts
			}, e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession), e.propagationContext && (this._propagationContext = e.propagationContext);
		}
		return this;
	}
	clear() {
		return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = Hr(), this;
	}
	addBreadcrumb(e, t) {
		let n = typeof t == "number" ? t : Br;
		if (n <= 0) return this;
		let r = {
			timestamp: or(),
			...e
		}, i = this._breadcrumbs;
		return i.push(r), this._breadcrumbs = i.length > n ? i.slice(-n) : i, this._notifyScopeListeners(), this;
	}
	getLastBreadcrumb() {
		return this._breadcrumbs[this._breadcrumbs.length - 1];
	}
	clearBreadcrumbs() {
		return this._breadcrumbs = [], this._notifyScopeListeners(), this;
	}
	addAttachment(e) {
		return this._attachments.push(e), this;
	}
	getAttachments() {
		return this.getScopeData().attachments;
	}
	clearAttachments() {
		return this._attachments = [], this;
	}
	getScopeData() {
		let { _breadcrumbs: e, _attachments: t, _contexts: n, _tags: r, _extra: i, _user: a, _level: o, _fingerprint: s, _eventProcessors: c, _propagationContext: l, _sdkProcessingMetadata: u, _transactionName: d, _span: f } = this;
		return {
			breadcrumbs: e,
			attachments: t,
			contexts: n,
			tags: r,
			extra: i,
			user: a,
			level: o,
			fingerprint: s || [],
			eventProcessors: c,
			propagationContext: l,
			sdkProcessingMetadata: u,
			transactionName: d,
			span: f
		};
	}
	applyToEvent(e, t = {}, n = []) {
		return Pr(e, this.getScopeData()), fr([
			...n,
			...dr(),
			...this._eventProcessors
		], e, t);
	}
	setSDKProcessingMetadata(e) {
		return this._sdkProcessingMetadata = {
			...this._sdkProcessingMetadata,
			...e
		}, this;
	}
	setPropagationContext(e) {
		return this._propagationContext = e, this;
	}
	getPropagationContext() {
		return this._propagationContext;
	}
	captureException(e, t) {
		let n = t && t.event_id ? t.event_id : nn();
		if (!this._client) return W.warn("No client configured on scope - will not capture exception!"), n;
		let r = /* @__PURE__ */ Error("Sentry syntheticException");
		return this._client.captureException(e, {
			originalException: e,
			syntheticException: r,
			...t,
			event_id: n
		}, this), n;
	}
	captureMessage(e, t, n) {
		let r = n && n.event_id ? n.event_id : nn();
		if (!this._client) return W.warn("No client configured on scope - will not capture message!"), r;
		let i = Error(e);
		return this._client.captureMessage(e, t, {
			originalException: e,
			syntheticException: i,
			...n,
			event_id: r
		}, this), r;
	}
	captureEvent(e, t) {
		let n = t && t.event_id ? t.event_id : nn();
		return this._client ? (this._client.captureEvent(e, {
			...t,
			event_id: n
		}, this), n) : (W.warn("No client configured on scope - will not capture event!"), n);
	}
	_notifyScopeListeners() {
		this._notifyingListeners ||= (this._notifyingListeners = !0, this._scopeListeners.forEach((e) => {
			e(this);
		}), !1);
	}
};
function Hr() {
	return {
		traceId: nn(),
		spanId: nn().substring(16)
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/hub.js
var Ur = 7.12, Wr = 100, Gr = class {
	constructor(e, t, n, r = Ur) {
		this._version = r;
		let i;
		t ? i = t : (i = new Vr(), i.setClient(e));
		let a;
		n ? a = n : (a = new Vr(), a.setClient(e)), this._stack = [{ scope: i }], e && this.bindClient(e), this._isolationScope = a;
	}
	isOlderThan(e) {
		return this._version < e;
	}
	bindClient(e) {
		let t = this.getStackTop();
		t.client = e, t.scope.setClient(e), e && e.setupIntegrations && e.setupIntegrations();
	}
	pushScope() {
		let e = this.getScope().clone();
		return this.getStack().push({
			client: this.getClient(),
			scope: e
		}), e;
	}
	popScope() {
		return this.getStack().length <= 1 ? !1 : !!this.getStack().pop();
	}
	withScope(e) {
		let t = this.pushScope(), n;
		try {
			n = e(t);
		} catch (e) {
			throw this.popScope(), e;
		}
		return tt(n) ? n.then((e) => (this.popScope(), e), (e) => {
			throw this.popScope(), e;
		}) : (this.popScope(), n);
	}
	getClient() {
		return this.getStackTop().client;
	}
	getScope() {
		return this.getStackTop().scope;
	}
	getIsolationScope() {
		return this._isolationScope;
	}
	getStack() {
		return this._stack;
	}
	getStackTop() {
		return this._stack[this._stack.length - 1];
	}
	captureException(e, t) {
		let n = this._lastEventId = t && t.event_id ? t.event_id : nn(), r = /* @__PURE__ */ Error("Sentry syntheticException");
		return this.getScope().captureException(e, {
			originalException: e,
			syntheticException: r,
			...t,
			event_id: n
		}), n;
	}
	captureMessage(e, t, n) {
		let r = this._lastEventId = n && n.event_id ? n.event_id : nn(), i = Error(e);
		return this.getScope().captureMessage(e, t, {
			originalException: e,
			syntheticException: i,
			...n,
			event_id: r
		}), r;
	}
	captureEvent(e, t) {
		let n = t && t.event_id ? t.event_id : nn();
		return e.type || (this._lastEventId = n), this.getScope().captureEvent(e, {
			...t,
			event_id: n
		}), n;
	}
	lastEventId() {
		return this._lastEventId;
	}
	addBreadcrumb(e, t) {
		let { scope: n, client: r } = this.getStackTop();
		if (!r) return;
		let { beforeBreadcrumb: i = null, maxBreadcrumbs: a = Wr } = r.getOptions && r.getOptions() || {};
		if (a <= 0) return;
		let o = {
			timestamp: or(),
			...e
		}, s = i ? Ot(() => i(o, t)) : o;
		s !== null && (r.emit && r.emit("beforeAddBreadcrumb", s, t), n.addBreadcrumb(s, a));
	}
	setUser(e) {
		this.getScope().setUser(e), this.getIsolationScope().setUser(e);
	}
	setTags(e) {
		this.getScope().setTags(e), this.getIsolationScope().setTags(e);
	}
	setExtras(e) {
		this.getScope().setExtras(e), this.getIsolationScope().setExtras(e);
	}
	setTag(e, t) {
		this.getScope().setTag(e, t), this.getIsolationScope().setTag(e, t);
	}
	setExtra(e, t) {
		this.getScope().setExtra(e, t), this.getIsolationScope().setExtra(e, t);
	}
	setContext(e, t) {
		this.getScope().setContext(e, t), this.getIsolationScope().setContext(e, t);
	}
	configureScope(e) {
		let { scope: t, client: n } = this.getStackTop();
		n && e(t);
	}
	run(e) {
		let t = qr(this);
		try {
			e(this);
		} finally {
			qr(t);
		}
	}
	getIntegration(e) {
		let t = this.getClient();
		if (!t) return null;
		try {
			return t.getIntegration(e);
		} catch {
			return lr && W.warn(`Cannot retrieve integration ${e.id} from the current Hub`), null;
		}
	}
	startTransaction(e, t) {
		let n = this._callExtensionMethod("startTransaction", e, t);
		return lr && !n && (this.getClient() ? W.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n") : W.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")), n;
	}
	traceHeaders() {
		return this._callExtensionMethod("traceHeaders");
	}
	captureSession(e = !1) {
		if (e) return this.endSession();
		this._sendSessionUpdate();
	}
	endSession() {
		let e = this.getStackTop().scope, t = e.getSession();
		t && hr(t), this._sendSessionUpdate(), e.setSession();
	}
	startSession(e) {
		let { scope: t, client: n } = this.getStackTop(), { release: r, environment: i = ur } = n && n.getOptions() || {}, { userAgent: a } = U.navigator || {}, o = pr({
			release: r,
			environment: i,
			user: t.getUser(),
			...a && { userAgent: a },
			...e
		}), s = t.getSession && t.getSession();
		return s && s.status === "ok" && mr(s, { status: "exited" }), this.endSession(), t.setSession(o), o;
	}
	shouldSendDefaultPii() {
		let e = this.getClient(), t = e && e.getOptions();
		return !!(t && t.sendDefaultPii);
	}
	_sendSessionUpdate() {
		let { scope: e, client: t } = this.getStackTop(), n = e.getSession();
		n && t && t.captureSession && t.captureSession(n);
	}
	_callExtensionMethod(e, ...t) {
		let n = Kr().__SENTRY__;
		if (n && n.extensions && typeof n.extensions[e] == "function") return n.extensions[e].apply(this, t);
		lr && W.warn(`Extension method ${e} couldn't be found, doing nothing.`);
	}
};
function Kr() {
	return U.__SENTRY__ = U.__SENTRY__ || {
		extensions: {},
		hub: void 0
	}, U;
}
function qr(e) {
	let t = Kr(), n = Zr(t);
	return Qr(t, e), n;
}
function Jr() {
	let e = Kr();
	if (e.__SENTRY__ && e.__SENTRY__.acs) {
		let t = e.__SENTRY__.acs.getCurrentHub();
		if (t) return t;
	}
	return Yr(e);
}
function Yr(e = Kr()) {
	return (!Xr(e) || Zr(e).isOlderThan(Ur)) && Qr(e, new Gr()), Zr(e);
}
function Xr(e) {
	return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
}
function Zr(e) {
	return _t("hub", () => new Gr(), e);
}
function Qr(e, t) {
	if (!e) return !1;
	let n = e.__SENTRY__ = e.__SENTRY__ || {};
	return n.hub = t, !0;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/api.js
function $r(e) {
	let t = e.protocol ? `${e.protocol}:` : "", n = e.port ? `:${e.port}` : "";
	return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function ei(e, t) {
	let n = It(e);
	if (!n) return "";
	let r = `${$r(n)}embed/error-page/`, i = `dsn=${Mt(n)}`;
	for (let e in t) if (e !== "dsn" && e !== "onClose") if (e === "user") {
		let e = t.user;
		if (!e) continue;
		e.name && (i += `&name=${encodeURIComponent(e.name)}`), e.email && (i += `&email=${encodeURIComponent(e.email)}`);
	} else i += `&${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`;
	return `${r}?${i}`;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/integration.js
function ti(e, t) {
	let n = function(...e) {
		return t(...e);
	};
	return n.id = e, n;
}
function ni(e) {
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/integrations/inboundfilters.js
var ri = [
	/^Script error\.?$/,
	/^Javascript error: Script error\.? on line 0$/,
	/^ResizeObserver loop completed with undelivered notifications.$/,
	/^Cannot redefine property: googletag$/
], ii = [
	/^.*\/healthcheck$/,
	/^.*\/healthy$/,
	/^.*\/live$/,
	/^.*\/ready$/,
	/^.*\/heartbeat$/,
	/^.*\/health$/,
	/^.*\/healthz$/
], ai = "InboundFilters", oi = ni(((e = {}) => ({
	name: ai,
	setupOnce() {},
	processEvent(t, n, r) {
		return ci(t, si(e, r.getOptions())) ? null : t;
	}
})));
ti(ai, oi);
function si(e = {}, t = {}) {
	return {
		allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
		denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
		ignoreErrors: [
			...e.ignoreErrors || [],
			...t.ignoreErrors || [],
			...e.disableErrorDefaults ? [] : ri
		],
		ignoreTransactions: [
			...e.ignoreTransactions || [],
			...t.ignoreTransactions || [],
			...e.disableTransactionDefaults ? [] : ii
		],
		ignoreInternal: e.ignoreInternal === void 0 ? !0 : e.ignoreInternal
	};
}
function ci(e, t) {
	return t.ignoreInternal && mi(e) ? (lr && W.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${an(e)}`), !0) : li(e, t.ignoreErrors) ? (lr && W.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${an(e)}`), !0) : ui(e, t.ignoreTransactions) ? (lr && W.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${an(e)}`), !0) : di(e, t.denyUrls) ? (lr && W.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${an(e)}.\nUrl: ${gi(e)}`), !0) : fi(e, t.allowUrls) ? !1 : (lr && W.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${an(e)}.\nUrl: ${gi(e)}`), !0);
}
function li(e, t) {
	return e.type || !t || !t.length ? !1 : pi(e).some((e) => lt(e, t));
}
function ui(e, t) {
	if (e.type !== "transaction" || !t || !t.length) return !1;
	let n = e.transaction;
	return n ? lt(n, t) : !1;
}
function di(e, t) {
	if (!t || !t.length) return !1;
	let n = gi(e);
	return n ? lt(n, t) : !1;
}
function fi(e, t) {
	if (!t || !t.length) return !0;
	let n = gi(e);
	return n ? lt(n, t) : !0;
}
function pi(e) {
	let t = [];
	e.message && t.push(e.message);
	let n;
	try {
		n = e.exception.values[e.exception.values.length - 1];
	} catch {}
	return n && n.value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`)), lr && t.length === 0 && W.error(`Could not extract message for event ${an(e)}`), t;
}
function mi(e) {
	try {
		return e.exception.values[0].type === "SentryError";
	} catch {}
	return !1;
}
function hi(e = []) {
	for (let t = e.length - 1; t >= 0; t--) {
		let n = e[t];
		if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]") return n.filename || null;
	}
	return null;
}
function gi(e) {
	try {
		let t;
		try {
			t = e.exception.values[0].stacktrace.frames;
		} catch {}
		return t ? hi(t) : null;
	} catch {
		return lr && W.error(`Cannot extract url for event ${an(e)}`), null;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+core@7.120.4/node_modules/@sentry/core/esm/integrations/functiontostring.js
var _i, vi = "FunctionToString", yi = /* @__PURE__ */ new WeakMap(), bi = ni((() => ({
	name: vi,
	setupOnce() {
		_i = Function.prototype.toString;
		try {
			Function.prototype.toString = function(...e) {
				let t = zt(this), n = yi.has(K()) && t !== void 0 ? t : this;
				return _i.apply(n, e);
			};
		} catch {}
	},
	setup(e) {
		yi.set(e, !0);
	}
})));
ti(vi, bi);
//#endregion
//#region ../../node_modules/.pnpm/@sentry+browser@7.120.4/node_modules/@sentry/browser/esm/helpers.js
var q = U, xi = 0;
function Si() {
	return xi > 0;
}
function Ci() {
	xi++, setTimeout(() => {
		xi--;
	});
}
function wi(e, t = {}, n) {
	if (typeof e != "function") return e;
	try {
		let t = e.__sentry_wrapped__;
		if (t) return typeof t == "function" ? t : e;
		if (zt(e)) return e;
	} catch {
		return e;
	}
	let r = function() {
		let r = Array.prototype.slice.call(arguments);
		try {
			n && typeof n == "function" && n.apply(this, arguments);
			let i = r.map((e) => wi(e, t));
			return e.apply(this, i);
		} catch (e) {
			throw Ci(), kr((n) => {
				n.addEventProcessor((e) => (t.mechanism && (on(e, void 0, void 0), sn(e, t.mechanism)), e.extra = {
					...e.extra,
					arguments: r
				}, e)), Tr(e);
			}), e;
		}
	};
	try {
		for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
	} catch {}
	Rt(r, e), Lt(e, "__sentry_wrapped__", r);
	try {
		Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", { get() {
			return e.name;
		} });
	} catch {}
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+browser@7.120.4/node_modules/@sentry/browser/esm/debug-build.js
var Ti = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
//#endregion
//#region ../../node_modules/.pnpm/@sentry+browser@7.120.4/node_modules/@sentry/browser/esm/eventbuilder.js
function Ei(e, t) {
	let n = ki(e, t), r = {
		type: t && t.name,
		value: Mi(t)
	};
	return n.length && (r.stacktrace = { frames: n }), r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"), r;
}
function Di(e, t, n, r) {
	let i = K(), a = i && i.getOptions().normalizeDepth, o = {
		exception: { values: [{
			type: Qe(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error",
			value: Fi(t, { isUnhandledRejection: r })
		}] },
		extra: { __serialized__: Jn(t, a) }
	};
	if (n) {
		let t = ki(e, n);
		t.length && (o.exception.values[0].stacktrace = { frames: t });
	}
	return o;
}
function Oi(e, t) {
	return { exception: { values: [Ei(e, t)] } };
}
function ki(e, t) {
	let n = t.stacktrace || t.stack || "", r = ji(t);
	try {
		return e(n, r);
	} catch {}
	return [];
}
var Ai = /Minified React error #\d+;/i;
function ji(e) {
	if (e) {
		if (typeof e.framesToPop == "number") return e.framesToPop;
		if (Ai.test(e.message)) return 1;
	}
	return 0;
}
function Mi(e) {
	let t = e && e.message;
	return t ? t.error && typeof t.error.message == "string" ? t.error.message : t : "No error message";
}
function Ni(e, t, n, r, i) {
	let a;
	if (Ge(t) && t.error) return Oi(e, t.error);
	if (Ke(t) || qe(t)) {
		let i = t;
		if ("stack" in t) a = Oi(e, t);
		else {
			let t = i.name || (Ke(i) ? "DOMError" : "DOMException"), o = i.message ? `${t}: ${i.message}` : t;
			a = Pi(e, o, n, r), on(a, o);
		}
		return "code" in i && (a.tags = {
			...a.tags,
			"DOMException.code": `${i.code}`
		}), a;
	}
	return Ue(t) ? Oi(e, t) : Ze(t) || Qe(t) ? (a = Di(e, t, n, i), sn(a, { synthetic: !0 }), a) : (a = Pi(e, t, n, r), on(a, `${t}`, void 0), sn(a, { synthetic: !0 }), a);
}
function Pi(e, t, n, r) {
	let i = {};
	if (r && n) {
		let r = ki(e, n);
		r.length && (i.exception = { values: [{
			value: t,
			stacktrace: { frames: r }
		}] });
	}
	if (Ye(t)) {
		let { __sentry_template_string__: e, __sentry_template_values__: n } = t;
		return i.logentry = {
			message: e,
			params: n
		}, i;
	}
	return i.message = t, i;
}
function Fi(e, { isUnhandledRejection: t }) {
	let n = Ut(e), r = t ? "promise rejection" : "exception";
	return Ge(e) ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\`` : Qe(e) ? `Event \`${Ii(e)}\` (type=${e.type}) captured as ${r}` : `Object captured as ${r} with keys: ${n}`;
}
function Ii(e) {
	try {
		let t = Object.getPrototypeOf(e);
		return t ? t.constructor.name : void 0;
	} catch {}
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+browser@7.120.4/node_modules/@sentry/browser/esm/integrations/breadcrumbs.js
var Li = 1024, Ri = "Breadcrumbs", zi = ni(((e = {}) => {
	let t = {
		console: !0,
		dom: !0,
		fetch: !0,
		history: !0,
		sentry: !0,
		xhr: !0,
		...e
	};
	return {
		name: Ri,
		setupOnce() {},
		setup(e) {
			t.console && en(Hi(e)), t.dom && mn(Vi(e, t.dom)), t.xhr && Un(Ui(e)), t.fetch && wn(Wi(e)), t.history && zn(Gi(e)), t.sentry && e.on && e.on("beforeSendEvent", Bi(e));
		}
	};
}));
ti(Ri, zi);
function Bi(e) {
	return function(t) {
		K() === e && Or({
			category: `sentry.${t.type === "transaction" ? "transaction" : "event"}`,
			event_id: t.event_id,
			level: t.level,
			message: an(t)
		}, { event: t });
	};
}
function Vi(e, t) {
	return function(n) {
		if (K() !== e) return;
		let r, i, a = typeof t == "object" ? t.serializeAttribute : void 0, o = typeof t == "object" && typeof t.maxStringLength == "number" ? t.maxStringLength : void 0;
		o && o > Li && (Ti && W.warn(`\`dom.maxStringLength\` cannot exceed ${Li}, but a value of ${o} was configured. Sentry will use ${Li} instead.`), o = Li), typeof a == "string" && (a = [a]);
		try {
			let e = n.event, t = Ki(e) ? e.target : e;
			r = bt(t, {
				keyAttrs: a,
				maxStringLength: o
			}), i = Ct(t);
		} catch {
			r = "<unknown>";
		}
		if (r.length === 0) return;
		let s = {
			category: `ui.${n.name}`,
			message: r
		};
		i && (s.data = { "ui.component_name": i }), Or(s, {
			event: n.event,
			name: n.name,
			global: n.global
		});
	};
}
function Hi(e) {
	return function(t) {
		if (K() !== e) return;
		let n = {
			category: "console",
			data: {
				arguments: t.args,
				logger: "console"
			},
			level: ir(t.level),
			message: st(t.args, " ")
		};
		if (t.level === "assert") if (t.args[0] === !1) n.message = `Assertion failed: ${st(t.args.slice(1), " ") || "console.assert"}`, n.data.arguments = t.args.slice(1);
		else return;
		Or(n, {
			input: t.args,
			level: t.level
		});
	};
}
function Ui(e) {
	return function(t) {
		if (K() !== e) return;
		let { startTimestamp: n, endTimestamp: r } = t, i = t.xhr[Hn];
		if (!n || !r || !i) return;
		let { method: a, url: o, status_code: s, body: c } = i, l = {
			method: a,
			url: o,
			status_code: s
		}, u = {
			xhr: t.xhr,
			input: c,
			startTimestamp: n,
			endTimestamp: r
		};
		Or({
			category: "xhr",
			data: l,
			type: "http"
		}, u);
	};
}
function Wi(e) {
	return function(t) {
		if (K() !== e) return;
		let { startTimestamp: n, endTimestamp: r } = t;
		if (r && !(t.fetchData.url.match(/sentry_key/) && t.fetchData.method === "POST")) if (t.error) {
			let e = t.fetchData, i = {
				data: t.error,
				input: t.args,
				startTimestamp: n,
				endTimestamp: r
			};
			Or({
				category: "fetch",
				data: e,
				level: "error",
				type: "http"
			}, i);
		} else {
			let e = t.response, i = {
				...t.fetchData,
				status_code: e && e.status
			}, a = {
				input: t.args,
				response: e,
				startTimestamp: n,
				endTimestamp: r
			};
			Or({
				category: "fetch",
				data: i,
				type: "http"
			}, a);
		}
	};
}
function Gi(e) {
	return function(t) {
		if (K() !== e) return;
		let n = t.from, r = t.to, i = nr(q.location.href), a = n ? nr(n) : void 0, o = nr(r);
		(!a || !a.path) && (a = i), i.protocol === o.protocol && i.host === o.host && (r = o.relative), i.protocol === a.protocol && i.host === a.host && (n = a.relative), Or({
			category: "navigation",
			data: {
				from: n,
				to: r
			}
		});
	};
}
function Ki(e) {
	return !!e && !!e.target;
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+browser@7.120.4/node_modules/@sentry/browser/esm/integrations/dedupe.js
var qi = "Dedupe", Ji = ni((() => {
	let e;
	return {
		name: qi,
		setupOnce() {},
		processEvent(t) {
			if (t.type) return t;
			try {
				if (Yi(t, e)) return Ti && W.warn("Event dropped due to being a duplicate of previously captured event."), null;
			} catch {}
			return e = t;
		}
	};
}));
ti(qi, Ji);
function Yi(e, t) {
	return t ? !!(Xi(e, t) || Zi(e, t)) : !1;
}
function Xi(e, t) {
	let n = e.message, r = t.message;
	return !(!n && !r || n && !r || !n && r || n !== r || !$i(e, t) || !Qi(e, t));
}
function Zi(e, t) {
	let n = ea(t), r = ea(e);
	return !(!n || !r || n.type !== r.type || n.value !== r.value || !$i(e, t) || !Qi(e, t));
}
function Qi(e, t) {
	let n = ta(e), r = ta(t);
	if (!n && !r) return !0;
	if (n && !r || !n && r || (n = n, r = r, r.length !== n.length)) return !1;
	for (let e = 0; e < r.length; e++) {
		let t = r[e], i = n[e];
		if (t.filename !== i.filename || t.lineno !== i.lineno || t.colno !== i.colno || t.function !== i.function) return !1;
	}
	return !0;
}
function $i(e, t) {
	let n = e.fingerprint, r = t.fingerprint;
	if (!n && !r) return !0;
	if (n && !r || !n && r) return !1;
	n = n, r = r;
	try {
		return n.join("") === r.join("");
	} catch {
		return !1;
	}
}
function ea(e) {
	return e.exception && e.exception.values && e.exception.values[0];
}
function ta(e) {
	let t = e.exception;
	if (t) try {
		return t.values[0].stacktrace.frames;
	} catch {
		return;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+browser@7.120.4/node_modules/@sentry/browser/esm/integrations/globalhandlers.js
var na = "GlobalHandlers", ra = ni(((e = {}) => {
	let t = {
		onerror: !0,
		onunhandledrejection: !0,
		...e
	};
	return {
		name: na,
		setupOnce() {
			Error.stackTraceLimit = 50;
		},
		setup(e) {
			t.onerror && (ia(e), ua("onerror")), t.onunhandledrejection && (aa(e), ua("onunhandledrejection"));
		}
	};
}));
ti(na, ra);
function ia(e) {
	An((t) => {
		let { stackParser: n, attachStacktrace: r } = da();
		if (K() !== e || Si()) return;
		let { msg: i, url: a, line: o, column: s, error: c } = t, l = c === void 0 && Je(i) ? ca(i, a, o, s) : la(Ni(n, c || i, void 0, r, !1), a, o, s);
		l.level = "error", Dr(l, {
			originalException: c,
			mechanism: {
				handled: !1,
				type: "onerror"
			}
		});
	});
}
function aa(e) {
	Nn((t) => {
		let { stackParser: n, attachStacktrace: r } = da();
		if (K() !== e || Si()) return;
		let i = oa(t), a = Xe(i) ? sa(i) : Ni(n, i, void 0, r, !0);
		a.level = "error", Dr(a, {
			originalException: i,
			mechanism: {
				handled: !1,
				type: "onunhandledrejection"
			}
		});
	});
}
function oa(e) {
	if (Xe(e)) return e;
	let t = e;
	try {
		if ("reason" in t) return t.reason;
		if ("detail" in t && "reason" in t.detail) return t.detail.reason;
	} catch {}
	return e;
}
function sa(e) {
	return { exception: { values: [{
		type: "UnhandledRejection",
		value: `Non-Error promise rejection captured with value: ${String(e)}`
	}] } };
}
function ca(e, t, n, r) {
	let i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i, a = Ge(e) ? e.message : e, o = "Error", s = a.match(i);
	return s && (o = s[1], a = s[2]), la({ exception: { values: [{
		type: o,
		value: a
	}] } }, t, n, r);
}
function la(e, t, n, r) {
	let i = e.exception = e.exception || {}, a = i.values = i.values || [], o = a[0] = a[0] || {}, s = o.stacktrace = o.stacktrace || {}, c = s.frames = s.frames || [], l = isNaN(parseInt(r, 10)) ? void 0 : r, u = isNaN(parseInt(n, 10)) ? void 0 : n, d = Je(t) && t.length > 0 ? t : St();
	return c.length === 0 && c.push({
		colno: l,
		filename: d,
		function: "?",
		in_app: !0,
		lineno: u
	}), e;
}
function ua(e) {
	Ti && W.log(`Global Handler attached: ${e}`);
}
function da() {
	let e = K();
	return e && e.getOptions() || {
		stackParser: () => [],
		attachStacktrace: !1
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@sentry+browser@7.120.4/node_modules/@sentry/browser/esm/integrations/httpcontext.js
var fa = "HttpContext", pa = ni((() => ({
	name: fa,
	setupOnce() {},
	preprocessEvent(e) {
		if (!q.navigator && !q.location && !q.document) return;
		let t = e.request && e.request.url || q.location && q.location.href, { referrer: n } = q.document || {}, { userAgent: r } = q.navigator || {}, i = {
			...e.request && e.request.headers,
			...n && { Referer: n },
			...r && { "User-Agent": r }
		};
		e.request = {
			...e.request,
			...t && { url: t },
			headers: i
		};
	}
})));
ti(fa, pa);
//#endregion
//#region ../../node_modules/.pnpm/@sentry+browser@7.120.4/node_modules/@sentry/browser/esm/integrations/linkederrors.js
var ma = "cause", ha = 5, ga = "LinkedErrors", _a = ni(((e = {}) => {
	let t = e.limit || ha, n = e.key || ma;
	return {
		name: ga,
		setupOnce() {},
		preprocessEvent(e, r, i) {
			let a = i.getOptions();
			ut(Ei, a.stackParser, a.maxValueLength, n, t, e, r);
		}
	};
}));
ti(ga, _a);
//#endregion
//#region ../../node_modules/.pnpm/@sentry+browser@7.120.4/node_modules/@sentry/browser/esm/integrations/trycatch.js
var va = /* @__PURE__ */ "EventTarget.Window.Node.ApplicationCache.AudioTrackList.BroadcastChannel.ChannelMergerNode.CryptoOperation.EventSource.FileReader.HTMLUnknownElement.IDBDatabase.IDBRequest.IDBTransaction.KeyOperation.MediaController.MessagePort.ModalWindow.Notification.SVGElementInstance.Screen.SharedWorker.TextTrack.TextTrackCue.TextTrackList.WebSocket.WebSocketWorker.Worker.XMLHttpRequest.XMLHttpRequestEventTarget.XMLHttpRequestUpload".split("."), ya = "TryCatch", ba = ni(((e = {}) => {
	let t = {
		XMLHttpRequest: !0,
		eventTarget: !0,
		requestAnimationFrame: !0,
		setInterval: !0,
		setTimeout: !0,
		...e
	};
	return {
		name: ya,
		setupOnce() {
			t.setTimeout && G(q, "setTimeout", xa), t.setInterval && G(q, "setInterval", xa), t.requestAnimationFrame && G(q, "requestAnimationFrame", Sa), t.XMLHttpRequest && "XMLHttpRequest" in q && G(XMLHttpRequest.prototype, "send", Ca);
			let e = t.eventTarget;
			e && (Array.isArray(e) ? e : va).forEach(wa);
		}
	};
}));
ti(ya, ba);
function xa(e) {
	return function(...t) {
		let n = t[0];
		return t[0] = wi(n, { mechanism: {
			data: { function: Jt(e) },
			handled: !1,
			type: "instrument"
		} }), e.apply(this, t);
	};
}
function Sa(e) {
	return function(t) {
		return e.apply(this, [wi(t, { mechanism: {
			data: {
				function: "requestAnimationFrame",
				handler: Jt(e)
			},
			handled: !1,
			type: "instrument"
		} })]);
	};
}
function Ca(e) {
	return function(...t) {
		let n = this;
		return [
			"onload",
			"onerror",
			"onprogress",
			"onreadystatechange"
		].forEach((e) => {
			e in n && typeof n[e] == "function" && G(n, e, function(t) {
				let n = { mechanism: {
					data: {
						function: e,
						handler: Jt(t)
					},
					handled: !1,
					type: "instrument"
				} }, r = zt(t);
				return r && (n.mechanism.data.handler = Jt(r)), wi(t, n);
			});
		}), e.apply(this, t);
	};
}
function wa(e) {
	let t = q, n = t[e] && t[e].prototype;
	!n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (G(n, "addEventListener", function(t) {
		return function(n, r, i) {
			try {
				typeof r.handleEvent == "function" && (r.handleEvent = wi(r.handleEvent, { mechanism: {
					data: {
						function: "handleEvent",
						handler: Jt(r),
						target: e
					},
					handled: !1,
					type: "instrument"
				} }));
			} catch {}
			return t.apply(this, [
				n,
				wi(r, { mechanism: {
					data: {
						function: "addEventListener",
						handler: Jt(r),
						target: e
					},
					handled: !1,
					type: "instrument"
				} }),
				i
			]);
		};
	}), G(n, "removeEventListener", function(e) {
		return function(t, n, r) {
			let i = n;
			try {
				let n = i && i.__sentry_wrapped__;
				n && e.call(this, t, n, r);
			} catch {}
			return e.call(this, t, i, r);
		};
	}));
}
oi(), bi(), ba(), zi(), ra(), _a(), Ji(), pa();
var Ta = (e = {}, t = Jr()) => {
	if (!q.document) {
		Ti && W.error("Global document not defined in showReportDialog call");
		return;
	}
	let { client: n, scope: r } = t.getStackTop(), i = e.dsn || n && n.getDsn();
	if (!i) {
		Ti && W.error("DSN not configured for showReportDialog call");
		return;
	}
	r && (e.user = {
		...r.getUser(),
		...e.user
	}), e.eventId ||= t.lastEventId();
	let a = q.document.createElement("script");
	a.async = !0, a.crossOrigin = "anonymous", a.src = ei(i, e), e.onLoad && (a.onload = e.onLoad);
	let { onClose: o } = e;
	if (o) {
		let e = (t) => {
			if (t.data === "__sentry_reportdialog_closed__") try {
				o();
			} finally {
				q.removeEventListener("message", e);
			}
		};
		q.addEventListener("message", e);
	}
	let s = q.document.head || q.document.body;
	s ? s.appendChild(a) : Ti && W.error("Not injecting report dialog. No injection point found in HTML");
}, Ea = /* @__PURE__ */ n(((e) => {
	var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
	function b(e) {
		if (typeof e == "object" && e) {
			var t = e.$$typeof;
			switch (t) {
				case n: switch (e = e.type, e) {
					case l:
					case u:
					case i:
					case o:
					case a:
					case f: return e;
					default: switch (e &&= e.$$typeof, e) {
						case c:
						case d:
						case h:
						case m:
						case s: return e;
						default: return t;
					}
				}
				case r: return t;
			}
		}
	}
	function x(e) {
		return b(e) === u;
	}
	e.AsyncMode = l, e.ConcurrentMode = u, e.ContextConsumer = c, e.ContextProvider = s, e.Element = n, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = m, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(e) {
		return x(e) || b(e) === l;
	}, e.isConcurrentMode = x, e.isContextConsumer = function(e) {
		return b(e) === c;
	}, e.isContextProvider = function(e) {
		return b(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === n;
	}, e.isForwardRef = function(e) {
		return b(e) === d;
	}, e.isFragment = function(e) {
		return b(e) === i;
	}, e.isLazy = function(e) {
		return b(e) === h;
	}, e.isMemo = function(e) {
		return b(e) === m;
	}, e.isPortal = function(e) {
		return b(e) === r;
	}, e.isProfiler = function(e) {
		return b(e) === o;
	}, e.isStrictMode = function(e) {
		return b(e) === a;
	}, e.isSuspense = function(e) {
		return b(e) === f;
	}, e.isValidElementType = function(e) {
		return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
	}, e.typeOf = b;
})), Da = /* @__PURE__ */ n(((e, t) => {
	t.exports = Ea();
}));
(/* @__PURE__ */ n(((e, t) => {
	var n = Da(), r = {
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
		type: !0
	}, i = {
		name: !0,
		length: !0,
		prototype: !0,
		caller: !0,
		callee: !0,
		arguments: !0,
		arity: !0
	}, a = {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0
	}, o = {
		$$typeof: !0,
		compare: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
		type: !0
	}, s = {};
	s[n.ForwardRef] = a, s[n.Memo] = o;
	function c(e) {
		return n.isMemo(e) ? o : s[e.$$typeof] || r;
	}
	var l = Object.defineProperty, u = Object.getOwnPropertyNames, d = Object.getOwnPropertySymbols, f = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, m = Object.prototype;
	function h(e, t, n) {
		if (typeof t != "string") {
			if (m) {
				var r = p(t);
				r && r !== m && h(e, r, n);
			}
			var a = u(t);
			d && (a = a.concat(d(t)));
			for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
				var _ = a[g];
				if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
					var v = f(t, _);
					try {
						l(e, _, v);
					} catch {}
				}
			}
		}
		return e;
	}
	t.exports = h;
})))();
var Oa = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
//#endregion
//#region ../../node_modules/.pnpm/@sentry+react@7.120.4_react@18.3.1/node_modules/@sentry/react/esm/errorboundary.js
c();
function ka(e) {
	let t = e.match(/^([^.]+)/);
	return t !== null && parseInt(t[0]) >= 17;
}
var Aa = {
	componentStack: null,
	error: null,
	eventId: null
};
function ja(e, t) {
	let n = /* @__PURE__ */ new WeakMap();
	function r(e, t) {
		if (!n.has(e)) {
			if (e.cause) return n.set(e, !0), r(e.cause, t);
			e.cause = t;
		}
	}
	r(e, t);
}
var Ma = class t extends m {
	constructor(e) {
		super(e), t.prototype.__init.call(this), this.state = Aa, this._openFallbackReportDialog = !0;
		let n = K();
		n && n.on && e.showDialog && (this._openFallbackReportDialog = !1, n.on("afterSendEvent", (t) => {
			!t.type && t.event_id === this._lastEventId && Ta({
				...e.dialogOptions,
				eventId: this._lastEventId
			});
		}));
	}
	componentDidCatch(t, { componentStack: n }) {
		let { beforeCapture: r, onError: i, showDialog: a, dialogOptions: o } = this.props;
		kr((s) => {
			if (ka(e) && Ue(t)) {
				let e = Error(t.message);
				e.name = `React ErrorBoundary ${t.name}`, e.stack = n, ja(t, e);
			}
			r && r(s, t, n);
			let c = Tr(t, {
				captureContext: { contexts: { react: { componentStack: n } } },
				mechanism: { handled: !!this.props.fallback }
			});
			i && i(t, n, c), a && (this._lastEventId = c, this._openFallbackReportDialog && Ta({
				...o,
				eventId: c
			})), this.setState({
				error: t,
				componentStack: n,
				eventId: c
			});
		});
	}
	componentDidMount() {
		let { onMount: e } = this.props;
		e && e();
	}
	componentWillUnmount() {
		let { error: e, componentStack: t, eventId: n } = this.state, { onUnmount: r } = this.props;
		r && r(e, t, n);
	}
	__init() {
		this.resetErrorBoundary = () => {
			let { onReset: e } = this.props, { error: t, componentStack: n, eventId: r } = this.state;
			e && e(t, n, r), this.setState(Aa);
		};
	}
	render() {
		let { fallback: e, children: t } = this.props, n = this.state;
		if (n.error) {
			let t;
			return t = typeof e == "function" ? e({
				error: n.error,
				componentStack: n.componentStack,
				resetError: this.resetErrorBoundary,
				eventId: n.eventId
			}) : e, l(t) ? t : (e && Oa && W.warn("fallback did not produce a valid ReactElement"), null);
		}
		return typeof t == "function" ? t() : t;
	}
};
//#endregion
//#region ../admin-x-framework/dist/providers/framework-provider.js
c();
var Na = s({
	ghostVersion: "",
	externalNavigate: () => {},
	unsplashConfig: {
		Authorization: "",
		"Accept-Version": "",
		"Content-Type": "",
		"App-Pragma": "",
		"X-Unsplash-Cache": !0
	},
	onUpdate: () => {},
	onInvalidate: () => {},
	onDelete: () => {}
});
function Pa({ children: e, queryClient: t, ...n }) {
	return /* @__PURE__ */ (0, Le.jsx)(Ma, { children: /* @__PURE__ */ (0, Le.jsx)(Be, {
		client: r(() => t || Ve, [t]),
		children: /* @__PURE__ */ (0, Le.jsx)(Na.Provider, {
			value: n,
			children: e
		})
	}) });
}
var Fa = () => a(Na);
ReactDOM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var Ia = ReactDOM.createPortal;
ReactDOM.createRoot;
var La = ReactDOM;
ReactDOM.findDOMNode;
var Ra = ReactDOM.flushSync;
//#endregion
//#region ../../node_modules/.pnpm/sonner@2.0.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/sonner/dist/index.mjs
ReactDOM.hydrate, ReactDOM.hydrateRoot, ReactDOM.render, ReactDOM.unmountComponentAtNode, ReactDOM.unstable_batchedUpdates, ReactDOM.unstable_renderSubtreeIntoContainer, ReactDOM.version, c();
function za(e) {
	if (!e || typeof document > "u") return;
	let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
	n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
var Ba = (e) => {
	switch (e) {
		case "success": return Ua;
		case "info": return Ga;
		case "warning": return Wa;
		case "error": return Ka;
		default: return null;
	}
}, Va = Array(12).fill(0), Ha = ({ visible: e, className: t }) => /*#__PURE__*/ o.createElement("div", {
	className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
	"data-visible": e
}, /*#__PURE__*/ o.createElement("div", { className: "sonner-spinner" }, Va.map((e, t) => /*#__PURE__*/ o.createElement("div", {
	className: "sonner-loading-bar",
	key: `spinner-bar-${t}`
})))), Ua = /*#__PURE__*/ o.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
}, /*#__PURE__*/ o.createElement("path", {
	fillRule: "evenodd",
	d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
	clipRule: "evenodd"
})), Wa = /*#__PURE__*/ o.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	height: "20",
	width: "20"
}, /*#__PURE__*/ o.createElement("path", {
	fillRule: "evenodd",
	d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
	clipRule: "evenodd"
})), Ga = /*#__PURE__*/ o.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
}, /*#__PURE__*/ o.createElement("path", {
	fillRule: "evenodd",
	d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
	clipRule: "evenodd"
})), Ka = /*#__PURE__*/ o.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
}, /*#__PURE__*/ o.createElement("path", {
	fillRule: "evenodd",
	d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
	clipRule: "evenodd"
})), qa = /*#__PURE__*/ o.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: "12",
	height: "12",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, /*#__PURE__*/ o.createElement("line", {
	x1: "18",
	y1: "6",
	x2: "6",
	y2: "18"
}), /*#__PURE__*/ o.createElement("line", {
	x1: "6",
	y1: "6",
	x2: "18",
	y2: "18"
})), Ja = () => {
	let [e, t] = o.useState(document.hidden);
	return o.useEffect(() => {
		let e = () => {
			t(document.hidden);
		};
		return document.addEventListener("visibilitychange", e), () => window.removeEventListener("visibilitychange", e);
	}, []), e;
}, Ya = 1, J = new class {
	constructor() {
		this.subscribe = (e) => (this.subscribers.push(e), () => {
			let t = this.subscribers.indexOf(e);
			this.subscribers.splice(t, 1);
		}), this.publish = (e) => {
			this.subscribers.forEach((t) => t(e));
		}, this.addToast = (e) => {
			this.publish(e), this.toasts = [...this.toasts, e];
		}, this.create = (e) => {
			let { message: t, ...n } = e, r = typeof e?.id == "number" || e.id?.length > 0 ? e.id : Ya++, i = this.toasts.find((e) => e.id === r), a = e.dismissible === void 0 ? !0 : e.dismissible;
			return this.dismissedToasts.has(r) && this.dismissedToasts.delete(r), i ? this.toasts = this.toasts.map((n) => n.id === r ? (this.publish({
				...n,
				...e,
				id: r,
				title: t
			}), {
				...n,
				...e,
				id: r,
				dismissible: a,
				title: t
			}) : n) : this.addToast({
				title: t,
				...n,
				dismissible: a,
				id: r
			}), r;
		}, this.dismiss = (e) => (e ? (this.dismissedToasts.add(e), requestAnimationFrame(() => this.subscribers.forEach((t) => t({
			id: e,
			dismiss: !0
		})))) : this.toasts.forEach((e) => {
			this.subscribers.forEach((t) => t({
				id: e.id,
				dismiss: !0
			}));
		}), e), this.message = (e, t) => this.create({
			...t,
			message: e
		}), this.error = (e, t) => this.create({
			...t,
			message: e,
			type: "error"
		}), this.success = (e, t) => this.create({
			...t,
			type: "success",
			message: e
		}), this.info = (e, t) => this.create({
			...t,
			type: "info",
			message: e
		}), this.warning = (e, t) => this.create({
			...t,
			type: "warning",
			message: e
		}), this.loading = (e, t) => this.create({
			...t,
			type: "loading",
			message: e
		}), this.promise = (e, t) => {
			if (!t) return;
			let n;
			t.loading !== void 0 && (n = this.create({
				...t,
				promise: e,
				type: "loading",
				message: t.loading,
				description: typeof t.description == "function" ? void 0 : t.description
			}));
			let r = Promise.resolve(e instanceof Function ? e() : e), i = n !== void 0, a, s = r.then(async (e) => {
				if (a = ["resolve", e], o.isValidElement(e)) i = !1, this.create({
					id: n,
					type: "default",
					message: e
				});
				else if (Za(e) && !e.ok) {
					i = !1;
					let r = typeof t.error == "function" ? await t.error(`HTTP error! status: ${e.status}`) : t.error, a = typeof t.description == "function" ? await t.description(`HTTP error! status: ${e.status}`) : t.description, s = typeof r == "object" && !o.isValidElement(r) ? r : { message: r };
					this.create({
						id: n,
						type: "error",
						description: a,
						...s
					});
				} else if (e instanceof Error) {
					i = !1;
					let r = typeof t.error == "function" ? await t.error(e) : t.error, a = typeof t.description == "function" ? await t.description(e) : t.description, s = typeof r == "object" && !o.isValidElement(r) ? r : { message: r };
					this.create({
						id: n,
						type: "error",
						description: a,
						...s
					});
				} else if (t.success !== void 0) {
					i = !1;
					let r = typeof t.success == "function" ? await t.success(e) : t.success, a = typeof t.description == "function" ? await t.description(e) : t.description, s = typeof r == "object" && !o.isValidElement(r) ? r : { message: r };
					this.create({
						id: n,
						type: "success",
						description: a,
						...s
					});
				}
			}).catch(async (e) => {
				if (a = ["reject", e], t.error !== void 0) {
					i = !1;
					let r = typeof t.error == "function" ? await t.error(e) : t.error, a = typeof t.description == "function" ? await t.description(e) : t.description, s = typeof r == "object" && !o.isValidElement(r) ? r : { message: r };
					this.create({
						id: n,
						type: "error",
						description: a,
						...s
					});
				}
			}).finally(() => {
				i && (this.dismiss(n), n = void 0), t.finally == null || t.finally.call(t);
			}), c = () => new Promise((e, t) => s.then(() => a[0] === "reject" ? t(a[1]) : e(a[1])).catch(t));
			return typeof n != "string" && typeof n != "number" ? { unwrap: c } : Object.assign(n, { unwrap: c });
		}, this.custom = (e, t) => {
			let n = t?.id || Ya++;
			return this.create({
				jsx: e(n),
				id: n,
				...t
			}), n;
		}, this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
	}
}(), Xa = (e, t) => {
	let n = t?.id || Ya++;
	return J.addToast({
		title: e,
		...t,
		id: n
	}), n;
}, Za = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", Qa = Object.assign(Xa, {
	success: J.success,
	info: J.info,
	warning: J.warning,
	error: J.error,
	custom: J.custom,
	message: J.message,
	promise: J.promise,
	dismiss: J.dismiss,
	loading: J.loading
}, {
	getHistory: () => J.toasts,
	getToasts: () => J.getActiveToasts()
});
za("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function $a(e) {
	return e.label !== void 0;
}
var eo = 3, to = "24px", no = "16px", ro = 4e3, io = 356, ao = 14, oo = 45, so = 200;
function co(...e) {
	return e.filter(Boolean).join(" ");
}
function lo(e) {
	let [t, n] = e.split("-"), r = [];
	return t && r.push(t), n && r.push(n), r;
}
var uo = (e) => {
	let { invert: t, toast: n, unstyled: r, interacting: i, setHeights: a, visibleToasts: s, heights: c, index: l, toasts: u, expanded: d, removeToast: f, defaultRichColors: p, closeButton: m, style: h, cancelButtonStyle: g, actionButtonStyle: _, className: v = "", descriptionClassName: y = "", duration: b, position: x, gap: S, expandByDefault: C, classNames: w, icons: T, closeButtonAriaLabel: E = "Close toast" } = e, [D, O] = o.useState(null), [k, A] = o.useState(null), [j, M] = o.useState(!1), [N, ee] = o.useState(!1), [P, F] = o.useState(!1), [I, te] = o.useState(!1), [ne, re] = o.useState(!1), [ie, L] = o.useState(0), [R, ae] = o.useState(0), oe = o.useRef(n.duration || b || ro), se = o.useRef(null), ce = o.useRef(null), le = l === 0, z = l + 1 <= s, B = n.type, V = n.dismissible !== !1, ue = n.className || "", de = n.descriptionClassName || "", fe = o.useMemo(() => c.findIndex((e) => e.toastId === n.id) || 0, [c, n.id]), pe = o.useMemo(() => n.closeButton ?? m, [n.closeButton, m]), H = o.useMemo(() => n.duration || b || ro, [n.duration, b]), me = o.useRef(0), he = o.useRef(0), ge = o.useRef(0), _e = o.useRef(null), [ve, ye] = x.split("-"), be = o.useMemo(() => c.reduce((e, t, n) => n >= fe ? e : e + t.height, 0), [c, fe]), xe = Ja(), Se = n.invert || t, Ce = B === "loading";
	he.current = o.useMemo(() => fe * S + be, [fe, be]), o.useEffect(() => {
		oe.current = H;
	}, [H]), o.useEffect(() => {
		M(!0);
	}, []), o.useEffect(() => {
		let e = ce.current;
		if (e) {
			let t = e.getBoundingClientRect().height;
			return ae(t), a((e) => [{
				toastId: n.id,
				height: t,
				position: n.position
			}, ...e]), () => a((e) => e.filter((e) => e.toastId !== n.id));
		}
	}, [a, n.id]), o.useLayoutEffect(() => {
		if (!j) return;
		let e = ce.current, t = e.style.height;
		e.style.height = "auto";
		let r = e.getBoundingClientRect().height;
		e.style.height = t, ae(r), a((e) => e.find((e) => e.toastId === n.id) ? e.map((e) => e.toastId === n.id ? {
			...e,
			height: r
		} : e) : [{
			toastId: n.id,
			height: r,
			position: n.position
		}, ...e]);
	}, [
		j,
		n.title,
		n.description,
		a,
		n.id,
		n.jsx,
		n.action,
		n.cancel
	]);
	let we = o.useCallback(() => {
		ee(!0), L(he.current), a((e) => e.filter((e) => e.toastId !== n.id)), setTimeout(() => {
			f(n);
		}, so);
	}, [
		n,
		f,
		a,
		he
	]);
	o.useEffect(() => {
		if (n.promise && B === "loading" || n.duration === Infinity || n.type === "loading") return;
		let e;
		return d || i || xe ? (() => {
			if (ge.current < me.current) {
				let e = (/* @__PURE__ */ new Date()).getTime() - me.current;
				oe.current -= e;
			}
			ge.current = (/* @__PURE__ */ new Date()).getTime();
		})() : oe.current !== Infinity && (me.current = (/* @__PURE__ */ new Date()).getTime(), e = setTimeout(() => {
			n.onAutoClose == null || n.onAutoClose.call(n, n), we();
		}, oe.current)), () => clearTimeout(e);
	}, [
		d,
		i,
		n,
		B,
		xe,
		we
	]), o.useEffect(() => {
		n.delete && (we(), n.onDismiss == null || n.onDismiss.call(n, n));
	}, [we, n.delete]);
	function Te() {
		return T?.loading ? /*#__PURE__*/ o.createElement("div", {
			className: co(w?.loader, n?.classNames?.loader, "sonner-loader"),
			"data-visible": B === "loading"
		}, T.loading) : /*#__PURE__*/ o.createElement(Ha, {
			className: co(w?.loader, n?.classNames?.loader),
			visible: B === "loading"
		});
	}
	let Ee = n.icon || T?.[B] || Ba(B);
	return /*#__PURE__*/ o.createElement("li", {
		tabIndex: 0,
		ref: ce,
		className: co(v, ue, w?.toast, n?.classNames?.toast, w?.default, w?.[B], n?.classNames?.[B]),
		"data-sonner-toast": "",
		"data-rich-colors": n.richColors ?? p,
		"data-styled": !(n.jsx || n.unstyled || r),
		"data-mounted": j,
		"data-promise": !!n.promise,
		"data-swiped": ne,
		"data-removed": N,
		"data-visible": z,
		"data-y-position": ve,
		"data-x-position": ye,
		"data-index": l,
		"data-front": le,
		"data-swiping": P,
		"data-dismissible": V,
		"data-type": B,
		"data-invert": Se,
		"data-swipe-out": I,
		"data-swipe-direction": k,
		"data-expanded": !!(d || C && j),
		"data-testid": n.testId,
		style: {
			"--index": l,
			"--toasts-before": l,
			"--z-index": u.length - l,
			"--offset": `${N ? ie : he.current}px`,
			"--initial-height": C ? "auto" : `${R}px`,
			...h,
			...n.style
		},
		onDragEnd: () => {
			F(!1), O(null), _e.current = null;
		},
		onPointerDown: (e) => {
			e.button !== 2 && (Ce || !V || (se.current = /* @__PURE__ */ new Date(), L(he.current), e.target.setPointerCapture(e.pointerId), e.target.tagName !== "BUTTON" && (F(!0), _e.current = {
				x: e.clientX,
				y: e.clientY
			})));
		},
		onPointerUp: () => {
			if (I || !V) return;
			_e.current = null;
			let e = Number(ce.current?.style.getPropertyValue("--swipe-amount-x").replace("px", "") || 0), t = Number(ce.current?.style.getPropertyValue("--swipe-amount-y").replace("px", "") || 0), r = (/* @__PURE__ */ new Date()).getTime() - se.current?.getTime(), i = D === "x" ? e : t, a = Math.abs(i) / r;
			if (Math.abs(i) >= oo || a > .11) {
				L(he.current), n.onDismiss == null || n.onDismiss.call(n, n), A(D === "x" ? e > 0 ? "right" : "left" : t > 0 ? "down" : "up"), we(), te(!0);
				return;
			} else {
				var o, s;
				(o = ce.current) == null || o.style.setProperty("--swipe-amount-x", "0px"), (s = ce.current) == null || s.style.setProperty("--swipe-amount-y", "0px");
			}
			re(!1), F(!1), O(null);
		},
		onPointerMove: (t) => {
			var n, r;
			if (!_e.current || !V || window.getSelection()?.toString().length > 0) return;
			let i = t.clientY - _e.current.y, a = t.clientX - _e.current.x, o = e.swipeDirections ?? lo(x);
			!D && (Math.abs(a) > 1 || Math.abs(i) > 1) && O(Math.abs(a) > Math.abs(i) ? "x" : "y");
			let s = {
				x: 0,
				y: 0
			}, c = (e) => 1 / (1.5 + Math.abs(e) / 20);
			if (D === "y") {
				if (o.includes("top") || o.includes("bottom")) if (o.includes("top") && i < 0 || o.includes("bottom") && i > 0) s.y = i;
				else {
					let e = i * c(i);
					s.y = Math.abs(e) < Math.abs(i) ? e : i;
				}
			} else if (D === "x" && (o.includes("left") || o.includes("right"))) if (o.includes("left") && a < 0 || o.includes("right") && a > 0) s.x = a;
			else {
				let e = a * c(a);
				s.x = Math.abs(e) < Math.abs(a) ? e : a;
			}
			(Math.abs(s.x) > 0 || Math.abs(s.y) > 0) && re(!0), (n = ce.current) == null || n.style.setProperty("--swipe-amount-x", `${s.x}px`), (r = ce.current) == null || r.style.setProperty("--swipe-amount-y", `${s.y}px`);
		}
	}, pe && !n.jsx && B !== "loading" ? /*#__PURE__*/ o.createElement("button", {
		"aria-label": E,
		"data-disabled": Ce,
		"data-close-button": !0,
		onClick: Ce || !V ? () => {} : () => {
			we(), n.onDismiss == null || n.onDismiss.call(n, n);
		},
		className: co(w?.closeButton, n?.classNames?.closeButton)
	}, T?.close ?? qa) : null, (B || n.icon || n.promise) && n.icon !== null && (T?.[B] !== null || n.icon) ? /*#__PURE__*/ o.createElement("div", {
		"data-icon": "",
		className: co(w?.icon, n?.classNames?.icon)
	}, n.promise || n.type === "loading" && !n.icon ? n.icon || Te() : null, n.type === "loading" ? null : Ee) : null, /*#__PURE__*/ o.createElement("div", {
		"data-content": "",
		className: co(w?.content, n?.classNames?.content)
	}, /*#__PURE__*/ o.createElement("div", {
		"data-title": "",
		className: co(w?.title, n?.classNames?.title)
	}, n.jsx ? n.jsx : typeof n.title == "function" ? n.title() : n.title), n.description ? /*#__PURE__*/ o.createElement("div", {
		"data-description": "",
		className: co(y, de, w?.description, n?.classNames?.description)
	}, typeof n.description == "function" ? n.description() : n.description) : null), /*#__PURE__*/ o.isValidElement(n.cancel) ? n.cancel : n.cancel && $a(n.cancel) ? /*#__PURE__*/ o.createElement("button", {
		"data-button": !0,
		"data-cancel": !0,
		style: n.cancelButtonStyle || g,
		onClick: (e) => {
			$a(n.cancel) && V && (n.cancel.onClick == null || n.cancel.onClick.call(n.cancel, e), we());
		},
		className: co(w?.cancelButton, n?.classNames?.cancelButton)
	}, n.cancel.label) : null, /*#__PURE__*/ o.isValidElement(n.action) ? n.action : n.action && $a(n.action) ? /*#__PURE__*/ o.createElement("button", {
		"data-button": !0,
		"data-action": !0,
		style: n.actionButtonStyle || _,
		onClick: (e) => {
			$a(n.action) && (n.action.onClick == null || n.action.onClick.call(n.action, e), !e.defaultPrevented && we());
		},
		className: co(w?.actionButton, n?.classNames?.actionButton)
	}, n.action.label) : null);
};
function fo() {
	if (typeof window > "u" || typeof document > "u") return "ltr";
	let e = document.documentElement.getAttribute("dir");
	return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function po(e, t) {
	let n = {};
	return [e, t].forEach((e, t) => {
		let r = t === 1, i = r ? "--mobile-offset" : "--offset", a = r ? no : to;
		function o(e) {
			[
				"top",
				"right",
				"bottom",
				"left"
			].forEach((t) => {
				n[`${i}-${t}`] = typeof e == "number" ? `${e}px` : e;
			});
		}
		typeof e == "number" || typeof e == "string" ? o(e) : typeof e == "object" ? [
			"top",
			"right",
			"bottom",
			"left"
		].forEach((t) => {
			e[t] === void 0 ? n[`${i}-${t}`] = a : n[`${i}-${t}`] = typeof e[t] == "number" ? `${e[t]}px` : e[t];
		}) : o(a);
	}), n;
}
var mo = /*#__PURE__*/ o.forwardRef(function(e, t) {
	let { id: n, invert: r, position: i = "bottom-right", hotkey: a = ["altKey", "KeyT"], expand: s, closeButton: c, className: l, offset: u, mobileOffset: d, theme: f = "light", richColors: p, duration: m, style: h, visibleToasts: g = eo, toastOptions: _, dir: v = fo(), gap: y = ao, icons: b, containerAriaLabel: x = "Notifications" } = e, [S, C] = o.useState([]), w = o.useMemo(() => n ? S.filter((e) => e.toasterId === n) : S.filter((e) => !e.toasterId), [S, n]), T = o.useMemo(() => Array.from(new Set([i].concat(w.filter((e) => e.position).map((e) => e.position)))), [w, i]), [E, D] = o.useState([]), [O, k] = o.useState(!1), [A, j] = o.useState(!1), [M, N] = o.useState(f === "system" ? typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : f), ee = o.useRef(null), P = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""), F = o.useRef(null), I = o.useRef(!1), te = o.useCallback((e) => {
		C((t) => (t.find((t) => t.id === e.id)?.delete || J.dismiss(e.id), t.filter(({ id: t }) => t !== e.id)));
	}, []);
	return o.useEffect(() => J.subscribe((e) => {
		if (e.dismiss) {
			requestAnimationFrame(() => {
				C((t) => t.map((t) => t.id === e.id ? {
					...t,
					delete: !0
				} : t));
			});
			return;
		}
		setTimeout(() => {
			La.flushSync(() => {
				C((t) => {
					let n = t.findIndex((t) => t.id === e.id);
					return n === -1 ? [e, ...t] : [
						...t.slice(0, n),
						{
							...t[n],
							...e
						},
						...t.slice(n + 1)
					];
				});
			});
		});
	}), [S]), o.useEffect(() => {
		if (f !== "system") {
			N(f);
			return;
		}
		if (f === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? N("dark") : N("light")), typeof window > "u") return;
		let e = window.matchMedia("(prefers-color-scheme: dark)");
		try {
			e.addEventListener("change", ({ matches: e }) => {
				N(e ? "dark" : "light");
			});
		} catch {
			e.addListener(({ matches: e }) => {
				try {
					N(e ? "dark" : "light");
				} catch (e) {
					console.error(e);
				}
			});
		}
	}, [f]), o.useEffect(() => {
		S.length <= 1 && k(!1);
	}, [S]), o.useEffect(() => {
		let e = (e) => {
			if (a.every((t) => e[t] || e.code === t)) {
				var t;
				k(!0), (t = ee.current) == null || t.focus();
			}
			e.code === "Escape" && (document.activeElement === ee.current || ee.current?.contains(document.activeElement)) && k(!1);
		};
		return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
	}, [a]), o.useEffect(() => {
		if (ee.current) return () => {
			F.current && (F.current.focus({ preventScroll: !0 }), F.current = null, I.current = !1);
		};
	}, [ee.current]), /*#__PURE__*/ o.createElement("section", {
		ref: t,
		"aria-label": `${x} ${P}`,
		tabIndex: -1,
		"aria-live": "polite",
		"aria-relevant": "additions text",
		"aria-atomic": "false",
		suppressHydrationWarning: !0
	}, T.map((t, n) => {
		let [i, a] = t.split("-");
		return w.length ? /*#__PURE__*/ o.createElement("ol", {
			key: t,
			dir: v === "auto" ? fo() : v,
			tabIndex: -1,
			ref: ee,
			className: l,
			"data-sonner-toaster": !0,
			"data-sonner-theme": M,
			"data-y-position": i,
			"data-x-position": a,
			style: {
				"--front-toast-height": `${E[0]?.height || 0}px`,
				"--width": `${io}px`,
				"--gap": `${y}px`,
				...h,
				...po(u, d)
			},
			onBlur: (e) => {
				I.current && !e.currentTarget.contains(e.relatedTarget) && (I.current = !1, F.current &&= (F.current.focus({ preventScroll: !0 }), null));
			},
			onFocus: (e) => {
				e.target instanceof HTMLElement && e.target.dataset.dismissible === "false" || I.current || (I.current = !0, F.current = e.relatedTarget);
			},
			onMouseEnter: () => k(!0),
			onMouseMove: () => k(!0),
			onMouseLeave: () => {
				A || k(!1);
			},
			onDragEnd: () => k(!1),
			onPointerDown: (e) => {
				e.target instanceof HTMLElement && e.target.dataset.dismissible === "false" || j(!0);
			},
			onPointerUp: () => j(!1)
		}, w.filter((e) => !e.position && n === 0 || e.position === t).map((n, i) => /*#__PURE__*/ o.createElement(uo, {
			key: n.id,
			icons: b,
			index: i,
			toast: n,
			defaultRichColors: p,
			duration: _?.duration ?? m,
			className: _?.className,
			descriptionClassName: _?.descriptionClassName,
			invert: r,
			visibleToasts: g,
			closeButton: _?.closeButton ?? c,
			interacting: A,
			position: t,
			style: _?.style,
			unstyled: _?.unstyled,
			classNames: _?.classNames,
			cancelButtonStyle: _?.cancelButtonStyle,
			actionButtonStyle: _?.actionButtonStyle,
			closeButtonAriaLabel: _?.closeButtonAriaLabel,
			removeToast: te,
			toasts: w.filter((e) => e.position == n.position),
			heights: E.filter((e) => e.position == n.position),
			setHeights: D,
			expandByDefault: s,
			gap: y,
			expanded: O,
			swipeDirections: e.swipeDirections
		}))) : null;
	}));
});
//#endregion
//#region ../../node_modules/.pnpm/react-router@7.18.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-router/dist/development/chunk-OB3PAWPO.mjs
c();
var ho = (e) => {
	throw TypeError(e);
}, go = (e, t, n) => t.has(e) || ho("Cannot " + n), _o = (e, t, n) => (go(e, t, "read from private field"), n ? n.call(e) : t.get(e)), vo = (e, t, n) => t.has(e) ? ho("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), yo = (e, t, n, r) => (go(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), bo = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i, xo = /^[\\/]{2}/;
function So(e, t) {
	return t + e.replace(/\\/g, "/");
}
var Co = "popstate";
function wo(e) {
	return typeof e == "object" && !!e && "pathname" in e && "search" in e && "hash" in e && "state" in e && "key" in e;
}
function To(e = {}) {
	function t(e, t) {
		let { pathname: n = "/", search: r = "", hash: i = "" } = ko(e.location.hash.substring(1));
		return !n.startsWith("/") && !n.startsWith(".") && (n = "/" + n), Oo("", {
			pathname: n,
			search: r,
			hash: i
		}, t.state && t.state.usr || null, t.state && t.state.key || "default");
	}
	function n(e, t) {
		let n = e.document.querySelector("base"), r = "";
		if (n && n.getAttribute("href")) {
			let t = e.location.href, n = t.indexOf("#");
			r = n === -1 ? t : t.slice(0, n);
		}
		return r + "#" + (typeof t == "string" ? t : Z(t));
	}
	function r(e, t) {
		X(e.pathname.charAt(0) === "/", `relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`);
	}
	return Ao(t, n, r, e);
}
function Y(e, t) {
	if (e === !1 || e == null) throw Error(t);
}
function X(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw Error(t);
		} catch {}
	}
}
function Eo() {
	return Math.random().toString(36).substring(2, 10);
}
function Do(e, t) {
	return {
		usr: e.state,
		key: e.key,
		idx: t,
		masked: e.mask ? {
			pathname: e.pathname,
			search: e.search,
			hash: e.hash
		} : void 0
	};
}
function Oo(e, t, n = null, r, i) {
	return {
		pathname: typeof e == "string" ? e : e.pathname,
		search: "",
		hash: "",
		...typeof t == "string" ? ko(t) : t,
		state: n,
		key: t && t.key || r || Eo(),
		mask: i
	};
}
function Z({ pathname: e = "/", search: t = "", hash: n = "" }) {
	return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
}
function ko(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
		let r = e.indexOf("?");
		r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e);
	}
	return t;
}
function Ao(e, t, n, r = {}) {
	let { window: i = document.defaultView, v5Compat: a = !1 } = r, o = i.history, s = "POP", c = null, l = u();
	l ?? (l = 0, o.replaceState({
		...o.state,
		idx: l
	}, ""));
	function u() {
		return (o.state || { idx: null }).idx;
	}
	function d() {
		s = "POP";
		let e = u(), t = e == null ? null : e - l;
		l = e, c && c({
			action: s,
			location: h.location,
			delta: t
		});
	}
	function f(e, t) {
		s = "PUSH";
		let r = wo(e) ? e : Oo(h.location, e, t);
		n && n(r, e), l = u() + 1;
		let d = Do(r, l), f = h.createHref(r.mask || r);
		try {
			o.pushState(d, "", f);
		} catch (e) {
			if (e instanceof DOMException && e.name === "DataCloneError") throw e;
			i.location.assign(f);
		}
		a && c && c({
			action: s,
			location: h.location,
			delta: 1
		});
	}
	function p(e, t) {
		s = "REPLACE";
		let r = wo(e) ? e : Oo(h.location, e, t);
		n && n(r, e), l = u();
		let i = Do(r, l), d = h.createHref(r.mask || r);
		o.replaceState(i, "", d), a && c && c({
			action: s,
			location: h.location,
			delta: 0
		});
	}
	function m(e) {
		return jo(i, e);
	}
	let h = {
		get action() {
			return s;
		},
		get location() {
			return e(i, o);
		},
		listen(e) {
			if (c) throw Error("A history only accepts one active listener");
			return i.addEventListener(Co, d), c = e, () => {
				i.removeEventListener(Co, d), c = null;
			};
		},
		createHref(e) {
			return t(i, e);
		},
		createURL: m,
		encodeLocation(e) {
			let t = m(e);
			return {
				pathname: t.pathname,
				search: t.search,
				hash: t.hash
			};
		},
		push: f,
		replace: p,
		go(e) {
			return o.go(e);
		}
	};
	return h;
}
function jo(e, t, n = !1) {
	let r = "http://localhost";
	e && (r = e.location.origin === "null" ? e.location.href : e.location.origin), Y(r, "No window.location.(origin|href) available to create URL");
	let i = typeof t == "string" ? t : Z(t);
	return i = i.replace(/ $/, "%20"), !n && xo.test(i) && (i = r + i), new URL(i, r);
}
var Mo, No = class {
	constructor(e) {
		if (vo(this, Mo, /* @__PURE__ */ new Map()), e) for (let [t, n] of e) this.set(t, n);
	}
	get(e) {
		if (_o(this, Mo).has(e)) return _o(this, Mo).get(e);
		if (e.defaultValue !== void 0) return e.defaultValue;
		throw Error("No value found for context");
	}
	set(e, t) {
		_o(this, Mo).set(e, t);
	}
};
Mo = /* @__PURE__ */ new WeakMap();
var Po = /* @__PURE__ */ new Set([
	"lazy",
	"caseSensitive",
	"path",
	"id",
	"index",
	"children"
]);
function Fo(e) {
	return Po.has(e);
}
var Io = /* @__PURE__ */ new Set([
	"lazy",
	"caseSensitive",
	"path",
	"id",
	"index",
	"middleware",
	"children"
]);
function Lo(e) {
	return Io.has(e);
}
function Ro(e) {
	return e.index === !0;
}
function zo(e, t, n = [], r = {}, i = !1) {
	return e.map((e, a) => {
		let o = [...n, String(a)], s = typeof e.id == "string" ? e.id : o.join("-");
		if (Y(e.index !== !0 || !e.children, "Cannot specify children on an index route"), Y(i || !r[s], `Found a route id collision on id "${s}".  Route id's must be globally unique within Data Router usages`), Ro(e)) {
			let n = {
				...e,
				id: s
			};
			return r[s] = Bo(n, t(n)), n;
		} else {
			let n = {
				...e,
				id: s,
				children: void 0
			};
			return r[s] = Bo(n, t(n)), e.children && (n.children = zo(e.children, t, o, r, i)), n;
		}
	});
}
function Bo(e, t) {
	return Object.assign(e, {
		...t,
		...typeof t.lazy == "object" && t.lazy != null ? { lazy: {
			...e.lazy,
			...t.lazy
		} } : {}
	});
}
function Vo(e, t, n = "/") {
	return Ho(e, t, n, !1);
}
function Ho(e, t, n, r, i) {
	let a = cs((typeof t == "string" ? ko(t) : t).pathname || "/", n);
	if (a == null) return null;
	let o = i ?? Wo(e), s = null, c = ss(a);
	for (let e = 0; s == null && e < o.length; ++e) s = rs(o[e], c, r);
	return s;
}
function Uo(e, t) {
	let { route: n, pathname: r, params: i } = e;
	return {
		id: n.id,
		pathname: r,
		params: i,
		data: t[n.id],
		loaderData: t[n.id],
		handle: n.handle
	};
}
function Wo(e) {
	let t = Go(e);
	return qo(t), t;
}
function Go(e, t = [], n = [], r = "", i = !1) {
	let a = (e, a, o = i, s) => {
		let c = {
			relativePath: s === void 0 ? e.path || "" : s,
			caseSensitive: e.caseSensitive === !0,
			childrenIndex: a,
			route: e
		};
		if (c.relativePath.startsWith("/")) {
			if (!c.relativePath.startsWith(r) && o) return;
			Y(c.relativePath.startsWith(r), `Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), c.relativePath = c.relativePath.slice(r.length);
		}
		let l = vs([r, c.relativePath]), u = n.concat(c);
		e.children && e.children.length > 0 && (Y(e.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${l}".`), Go(e.children, t, u, l, o)), !(e.path == null && !e.index) && t.push({
			path: l,
			score: ts(l, e.index),
			routesMeta: u.map((e, t) => {
				let [n, r] = os(e.relativePath, e.caseSensitive, t === u.length - 1);
				return {
					...e,
					matcher: n,
					compiledParams: r
				};
			})
		});
	};
	return e.forEach((e, t) => {
		if (e.path === "" || !e.path?.includes("?")) a(e, t);
		else for (let n of Ko(e.path)) a(e, t, !0, n);
	}), t;
}
function Ko(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t, i = n.endsWith("?"), a = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [a, ""] : [a];
	let o = Ko(r.join("/")), s = [];
	return s.push(...o.map((e) => e === "" ? a : [a, e].join("/"))), i && s.push(...o), s.map((t) => e.startsWith("/") && t === "" ? "/" : t);
}
function qo(e) {
	e.sort((e, t) => e.score === t.score ? ns(e.routesMeta.map((e) => e.childrenIndex), t.routesMeta.map((e) => e.childrenIndex)) : t.score - e.score);
}
var Jo = /^:[\w-]+$/, Yo = 3, Xo = 2, Zo = 1, Qo = 10, $o = -2, es = (e) => e === "*";
function ts(e, t) {
	let n = e.split("/"), r = n.length;
	return n.some(es) && (r += $o), t && (r += Xo), n.filter((e) => !es(e)).reduce((e, t) => e + (Jo.test(t) ? Yo : t === "" ? Zo : Qo), r);
}
function ns(e, t) {
	return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function rs(e, t, n = !1) {
	let { routesMeta: r } = e, i = {}, a = "/", o = [];
	for (let e = 0; e < r.length; ++e) {
		let s = r[e], c = e === r.length - 1, l = a === "/" ? t : t.slice(a.length) || "/", u = {
			path: s.relativePath,
			caseSensitive: s.caseSensitive,
			end: c
		}, d = s.matcher && s.compiledParams ? as(u, l, s.matcher, s.compiledParams) : is(u, l), f = s.route;
		if (!d && c && n && !r[r.length - 1].route.index && (d = is({
			path: s.relativePath,
			caseSensitive: s.caseSensitive,
			end: !1
		}, l)), !d) return null;
		Object.assign(i, d.params), o.push({
			params: i,
			pathname: vs([a, d.pathname]),
			pathnameBase: bs(vs([a, d.pathnameBase])),
			route: f
		}), d.pathnameBase !== "/" && (a = vs([a, d.pathnameBase]));
	}
	return o;
}
function is(e, t) {
	typeof e == "string" && (e = {
		path: e,
		caseSensitive: !1,
		end: !0
	});
	let [n, r] = os(e.path, e.caseSensitive, e.end);
	return as(e, t, n, r);
}
function as(e, t, n, r) {
	let i = t.match(n);
	if (!i) return null;
	let a = i[0], o = ys(a, 1), s = i.slice(1);
	return {
		params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
			if (t === "*") {
				let e = s[r] || "";
				o = ys(a.slice(0, a.length - e.length), 1);
			}
			let i = s[r];
			return n && !i ? e[t] = void 0 : e[t] = (i || "").replace(/%2F/g, "/"), e;
		}, {}),
		pathname: a,
		pathnameBase: o,
		pattern: e
	};
}
function os(e, t = !1, n = !0) {
	X(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`);
	let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (e, t, n, i, a) => {
		if (r.push({
			paramName: t,
			isOptional: n != null
		}), n) {
			let t = a.charAt(i + e.length);
			return t && t !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
		}
		return "/([^\\/]+)";
	}).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
	return e.endsWith("*") ? (r.push({ paramName: "*" }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}
function ss(e) {
	try {
		return e.split("/").map((e) => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
	} catch (t) {
		return X(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e;
	}
}
function cs(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
function ls({ basename: e, pathname: t }) {
	return t === "/" ? e : vs([e, t]);
}
var us = (e) => bo.test(e);
function ds(e, t = "/") {
	let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? ko(e) : e, a;
	return n ? (n = _s(n), a = n.startsWith("/") || n.startsWith("\\") ? fs(n.substring(1), "/") : fs(n, t)) : a = t, {
		pathname: a,
		search: xs(r),
		hash: Ss(i)
	};
}
function fs(e, t) {
	let n = ys(t).split("/");
	return e.split("/").forEach((e) => {
		e === ".." ? n.length > 1 && n.pop() : e !== "." && n.push(e);
	}), n.length > 1 ? n.join("/") : "/";
}
function ps(e, t, n, r) {
	return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function ms(e) {
	return e.filter((e, t) => t === 0 || e.route.path && e.route.path.length > 0);
}
function hs(e) {
	let t = ms(e);
	return t.map((e, n) => n === t.length - 1 ? e.pathname : e.pathnameBase);
}
function gs(e, t, n, r = !1) {
	let i;
	typeof e == "string" ? i = ko(e) : (i = { ...e }, Y(!i.pathname || !i.pathname.includes("?"), ps("?", "pathname", "search", i)), Y(!i.pathname || !i.pathname.includes("#"), ps("#", "pathname", "hash", i)), Y(!i.search || !i.search.includes("#"), ps("#", "search", "hash", i)));
	let a = e === "" || i.pathname === "", o = a ? "/" : i.pathname, s;
	if (o == null) s = n;
	else {
		let e = t.length - 1;
		if (!r && o.startsWith("..")) {
			let t = o.split("/");
			for (; t[0] === "..";) t.shift(), --e;
			i.pathname = t.join("/");
		}
		s = e >= 0 ? t[e] : "/";
	}
	let c = ds(i, s), l = o && o !== "/" && o.endsWith("/"), u = (a || o === ".") && n.endsWith("/");
	return !c.pathname.endsWith("/") && (l || u) && (c.pathname += "/"), c;
}
var _s = (e) => e.replace(/[\\/]{2,}/g, "/"), vs = (e) => _s(e.join("/"));
function ys(e, t = 0) {
	let n = e.length;
	for (; n > t && e.charCodeAt(n - 1) === 47;) n--;
	return n === e.length ? e : e.slice(0, n);
}
var bs = (e) => ys(e).replace(/^\/*/, "/"), xs = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Ss = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, Cs = [
	"EvalError",
	"RangeError",
	"ReferenceError",
	"SyntaxError",
	"TypeError",
	"URIError"
], ws = class {
	constructor(e, t, n, r = !1) {
		this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
	}
};
function Ts(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function Es(e) {
	return vs(e.map((e) => e.route.path).filter(Boolean)) || "/";
}
var Ds = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function Os(e, t) {
	let n = e;
	if (typeof n != "string" || !bo.test(n)) return {
		absoluteURL: void 0,
		isExternal: !1,
		to: n
	};
	let r = n, i = !1;
	if (Ds) try {
		let e = new URL(window.location.href), r = xo.test(n) ? new URL(So(n, e.protocol)) : new URL(n), a = cs(r.pathname, t);
		r.origin === e.origin && a != null ? n = a + r.search + r.hash : i = !0;
	} catch {
		X(!1, `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
	}
	return {
		absoluteURL: r,
		isExternal: i,
		to: n
	};
}
var ks = Symbol("Uninstrumented");
function As(e, t) {
	let n = {
		lazy: [],
		"lazy.loader": [],
		"lazy.action": [],
		"lazy.middleware": [],
		middleware: [],
		loader: [],
		action: []
	};
	e.forEach((e) => e({
		id: t.id,
		index: t.index,
		path: t.path,
		instrument(e) {
			let t = Object.keys(n);
			for (let r of t) e[r] && n[r].push(e[r]);
		}
	}));
	let r = {};
	if (typeof t.lazy == "function" && n.lazy.length > 0) {
		let e = Ms(n.lazy, t.lazy, () => void 0);
		e && (r.lazy = e);
	}
	if (typeof t.lazy == "object") {
		let e = t.lazy;
		[
			"middleware",
			"loader",
			"action"
		].forEach((t) => {
			let i = e[t], a = n[`lazy.${t}`];
			if (typeof i == "function" && a.length > 0) {
				let e = Ms(a, i, () => void 0);
				e && (r.lazy = Object.assign(r.lazy || {}, { [t]: e }));
			}
		});
	}
	return ["loader", "action"].forEach((e) => {
		let i = t[e];
		if (typeof i == "function" && n[e].length > 0) {
			let t = i[ks] ?? i, a = Ms(n[e], t, (...e) => Ps(e[0]));
			a && (e === "loader" && t.hydrate === !0 && (a.hydrate = !0), a[ks] = t, r[e] = a);
		}
	}), t.middleware && t.middleware.length > 0 && n.middleware.length > 0 && (r.middleware = t.middleware.map((e) => {
		let t = e[ks] ?? e, r = Ms(n.middleware, t, (...e) => Ps(e[0]));
		return r ? (r[ks] = t, r) : e;
	})), r;
}
function js(e, t) {
	let n = {
		navigate: [],
		fetch: []
	};
	if (t.forEach((e) => e({ instrument(e) {
		let t = Object.keys(e);
		for (let r of t) e[r] && n[r].push(e[r]);
	} })), n.navigate.length > 0) {
		let t = e.navigate[ks] ?? e.navigate, r = Ms(n.navigate, t, (...t) => {
			let [n, r] = t;
			return {
				to: typeof n == "number" || typeof n == "string" ? n : n ? Z(n) : ".",
				...Fs(e, r ?? {})
			};
		});
		r && (r[ks] = t, e.navigate = r);
	}
	if (n.fetch.length > 0) {
		let t = e.fetch[ks] ?? e.fetch, r = Ms(n.fetch, t, (...t) => {
			let [n, , r, i] = t;
			return {
				href: r ?? ".",
				fetcherKey: n,
				...Fs(e, i ?? {})
			};
		});
		r && (r[ks] = t, e.fetch = r);
	}
	return e;
}
function Ms(e, t, n) {
	return e.length === 0 ? null : async (...r) => {
		let i = await Ns(e, n(...r), () => t(...r), e.length - 1);
		if (i.type === "error") throw i.value;
		return i.value;
	};
}
async function Ns(e, t, n, r) {
	let i = e[r], a;
	if (i) {
		let o, s = async () => (o ? console.error("You cannot call instrumented handlers more than once") : o = Ns(e, t, n, r - 1), a = await o, Y(a, "Expected a result"), a.type === "error" && a.value instanceof Error ? {
			status: "error",
			error: a.value
		} : {
			status: "success",
			error: void 0
		});
		try {
			await i(s, t);
		} catch (e) {
			console.error("An instrumentation function threw an error:", e);
		}
		o || await s(), await o;
	} else try {
		a = {
			type: "success",
			value: await n()
		};
	} catch (e) {
		a = {
			type: "error",
			value: e
		};
	}
	return a || {
		type: "error",
		value: /* @__PURE__ */ Error("No result assigned in instrumentation chain.")
	};
}
function Ps(e) {
	let { request: t, context: n, params: r, pattern: i } = e;
	return {
		request: Is(t),
		params: { ...r },
		pattern: i,
		context: Ls(n)
	};
}
function Fs(e, t) {
	return {
		currentUrl: Z(e.state.location),
		..."formMethod" in t ? { formMethod: t.formMethod } : {},
		..."formEncType" in t ? { formEncType: t.formEncType } : {},
		..."formData" in t ? { formData: t.formData } : {},
		..."body" in t ? { body: t.body } : {}
	};
}
function Is(e) {
	return {
		method: e.method,
		url: e.url,
		headers: { get: (...t) => e.headers.get(...t) }
	};
}
function Ls(e) {
	if (zs(e)) {
		let t = { ...e };
		return Object.freeze(t), t;
	} else return { get: (t) => e.get(t) };
}
var Rs = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function zs(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join("\0") === Rs;
}
var Bs = new URL("http://localhost");
function Vs(e) {
	if (e.createURL) return e.createURL("/");
	try {
		return new URL(e.createHref("/"), Bs);
	} catch {
		return Bs;
	}
}
function Hs(e, t) {
	return e.origin === t.origin && (e.origin !== "null" || e.protocol === t.protocol && e.host === t.host);
}
function Us(e, t) {
	if (e.startsWith("//")) return !0;
	let n = t.protocol.toLowerCase();
	return e.toLowerCase().startsWith(n) ? t.host === "" || e.slice(n.length).startsWith("//") : !1;
}
function Ws(e, t, n, r) {
	let i = null;
	try {
		i = e == null ? null : new URL(e, n);
	} catch {}
	let a = new URL(t, n), o = i != null && !Hs(i, n), s = !Hs(a, n);
	if (r === "reject") {
		if (o || s) throw Error("External navigation is not allowed");
	} else if (s && (i == null || !Us(e, i) || !Hs(i, a))) throw Error("External navigation is not allowed");
}
var Gs = [
	"POST",
	"PUT",
	"PATCH",
	"DELETE"
], Ks = new Set(Gs), qs = ["GET", ...Gs], Js = new Set(qs), Ys = /* @__PURE__ */ new Set([
	301,
	302,
	303,
	307,
	308
]), Xs = /* @__PURE__ */ new Set([307, 308]), Zs = {
	state: "idle",
	location: void 0,
	matches: void 0,
	historyAction: void 0,
	formMethod: void 0,
	formAction: void 0,
	formEncType: void 0,
	formData: void 0,
	json: void 0,
	text: void 0
}, Qs = {
	state: "idle",
	data: void 0,
	formMethod: void 0,
	formAction: void 0,
	formEncType: void 0,
	formData: void 0,
	json: void 0,
	text: void 0
}, $s = {
	state: "unblocked",
	proceed: void 0,
	reset: void 0,
	location: void 0
}, ec = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }), tc = "remix-router-transitions", nc = Symbol("ResetLoaderData"), rc, ic, ac, oc, sc = class {
	constructor(e) {
		vo(this, rc), vo(this, ic), vo(this, ac), vo(this, oc), yo(this, rc, e), yo(this, ic, Wo(e));
	}
	get stableRoutes() {
		return _o(this, rc);
	}
	get activeRoutes() {
		return _o(this, ac) ?? _o(this, rc);
	}
	get branches() {
		return _o(this, oc) ?? _o(this, ic);
	}
	get hasHMRRoutes() {
		return _o(this, ac) != null;
	}
	setRoutes(e) {
		yo(this, rc, e), yo(this, ic, Wo(e));
	}
	setHmrRoutes(e) {
		yo(this, ac, e), yo(this, oc, Wo(e));
	}
	commitHmrRoutes() {
		_o(this, ac) && (yo(this, rc, _o(this, ac)), yo(this, ic, _o(this, oc)), yo(this, ac, void 0), yo(this, oc, void 0));
	}
};
rc = /* @__PURE__ */ new WeakMap(), ic = /* @__PURE__ */ new WeakMap(), ac = /* @__PURE__ */ new WeakMap(), oc = /* @__PURE__ */ new WeakMap();
function cc(e) {
	let t = e.window ? e.window : typeof window < "u" ? window : void 0, n = t !== void 0 && t.document !== void 0 && t.document.createElement !== void 0;
	Y(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
	let r = e.hydrationRouteProperties || [], i = e.mapRouteProperties || ec, a = i;
	if (e.instrumentations) {
		let t = e.instrumentations;
		a = (e) => ({
			...i(e),
			...As(t.map((e) => e.route).filter(Boolean), e)
		});
	}
	let o = {}, s = new sc(zo(e.routes, a, void 0, o)), c = e.basename || "/";
	c.startsWith("/") || (c = `/${c}`);
	let l = e.dataStrategy || Tc, u = { ...e.future }, d = null, f = /* @__PURE__ */ new Set(), p = null, m = null, h = null, g = null, _ = e.hydrationData != null, v = Ho(s.activeRoutes, e.history.location, c, !1, s.branches), y = !1, b = null, x, S;
	if (v == null && !e.patchRoutesOnNavigation) {
		let t = Xc(404, { pathname: e.history.location.pathname }), { matches: n, route: r } = Yc(s.activeRoutes);
		x = !0, S = !x, v = n, b = { [r.id]: t };
	} else if (v && !e.hydrationData && Ve(v, s.activeRoutes, e.history.location.pathname).active && (v = null), !v) {
		x = !1, S = !x, v = [];
		let t = Ve(null, s.activeRoutes, e.history.location.pathname);
		t.active && t.matches && (y = !0, v = t.matches);
	} else if (v.some((e) => e.route.lazy)) x = !1, S = !x;
	else if (!v.some((e) => pc(e.route))) x = !0, S = !x;
	else {
		let t = e.hydrationData ? e.hydrationData.loaderData : null, n = e.hydrationData ? e.hydrationData.errors : null, r = v;
		if (n) {
			let e = v.findIndex((e) => n[e.route.id] !== void 0);
			r = r.slice(0, e + 1);
		}
		S = !1, x = !0, r.forEach((e) => {
			let r = mc(e.route, t, n);
			S ||= r.renderFallback, x &&= !r.shouldLoad;
		});
	}
	let C, w = {
		historyAction: e.history.action,
		location: e.history.location,
		matches: v,
		initialized: x,
		renderFallback: S,
		navigation: Zs,
		restoreScrollPosition: e.hydrationData == null ? null : !1,
		preventScrollReset: !1,
		revalidation: "idle",
		loaderData: e.hydrationData && e.hydrationData.loaderData || {},
		actionData: e.hydrationData && e.hydrationData.actionData || null,
		errors: e.hydrationData && e.hydrationData.errors || b,
		fetchers: /* @__PURE__ */ new Map(),
		blockers: /* @__PURE__ */ new Map()
	}, T = "POP", E = null, D = !1, O, k = !1, A = /* @__PURE__ */ new Map(), j = null, M = !1, N = !1, ee = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Map(), F = 0, I = -1, te = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Set(), re = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Map(), ae, oe = null;
	function se() {
		if (d = e.history.listen(({ action: t, location: n, delta: r }) => {
			if (ae) {
				ae(), ae = void 0;
				return;
			}
			X(R.size === 0 || r != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
			let i = Fe({
				currentLocation: w.location,
				nextLocation: n,
				historyAction: t
			});
			if (i && r != null) {
				let t = new Promise((e) => {
					ae = e;
				});
				e.history.go(r * -1), Pe(i, {
					state: "blocked",
					location: n,
					proceed() {
						Pe(i, {
							state: "proceeding",
							proceed: void 0,
							reset: void 0,
							location: n
						}), t.then(() => e.history.go(r));
					},
					reset() {
						let e = new Map(w.blockers);
						e.set(i, $s), z({ blockers: e });
					}
				}), E?.resolve(), E = null;
				return;
			}
			return de(t, n);
		}), n) {
			yl(t, A);
			let e = () => bl(t, A);
			t.addEventListener("pagehide", e), j = () => t.removeEventListener("pagehide", e);
		}
		return w.initialized || de("POP", w.location, { initialHydration: !0 }), C;
	}
	function ce() {
		d && d(), j && j(), f.clear(), O && O.abort(), w.fetchers.forEach((e, t) => Ee(w.fetchers, t)), w.blockers.forEach((e, t) => Ne(t));
	}
	function le(e) {
		if (f.add(e), p) {
			let { newErrors: t } = p;
			p = null, e(w, {
				deletedFetchers: [],
				newErrors: t,
				viewTransitionOpts: void 0,
				flushSync: !1
			});
		}
		return () => f.delete(e);
	}
	function z(e, t = {}) {
		e.matches &&= e.matches.map((e) => {
			let t = o[e.route.id], n = e.route;
			return n.element !== t.element || n.errorElement !== t.errorElement || n.hydrateFallbackElement !== t.hydrateFallbackElement ? {
				...e,
				route: t
			} : e;
		}), w = {
			...w,
			...e
		};
		let n = [], r = [];
		w.fetchers.forEach((e, t) => {
			e.state === "idle" && (L.has(t) ? n.push(t) : r.push(t));
		}), L.forEach((e) => {
			!w.fetchers.has(e) && !P.has(e) && n.push(e);
		}), f.size === 0 && (p = { newErrors: e.errors ?? null }), [...f].forEach((r) => r(w, {
			deletedFetchers: n,
			newErrors: e.errors ?? null,
			viewTransitionOpts: t.viewTransitionOpts,
			flushSync: t.flushSync === !0
		})), n.forEach((e) => Ee(w.fetchers, e)), r.forEach((e) => w.fetchers.delete(e));
	}
	function B(t, n, { flushSync: r } = {}) {
		let i = w.actionData != null && w.navigation.formMethod != null && Q(w.navigation.formMethod) && w.navigation.state === "loading" && t.state?._isRedirect !== !0, a;
		a = n.actionData ? Object.keys(n.actionData).length > 0 ? n.actionData : null : i ? w.actionData : null;
		let o = n.loaderData ? Kc(w.loaderData, n.loaderData, n.matches || [], n.errors) : w.loaderData, c = w.blockers;
		c.size > 0 && (c = new Map(c), c.forEach((e, t) => c.set(t, $s)));
		let l = M ? !1 : Be(t, n.matches || w.matches), u = D === !0 || w.navigation.formMethod != null && Q(w.navigation.formMethod) && t.state?._isRedirect !== !0;
		s.commitHmrRoutes(), M || T === "POP" || (T === "PUSH" ? e.history.push(t, t.state) : T === "REPLACE" && e.history.replace(t, t.state));
		let d;
		if (T === "POP" && !M && t !== w.location) {
			let e = A.get(w.location.pathname);
			e && e.has(t.pathname) ? d = {
				currentLocation: w.location,
				nextLocation: t
			} : A.has(t.pathname) && (d = {
				currentLocation: t,
				nextLocation: w.location
			});
		} else if (k) {
			let e = A.get(w.location.pathname);
			e ? e.add(t.pathname) : (e = /* @__PURE__ */ new Set([t.pathname]), A.set(w.location.pathname, e)), d = {
				currentLocation: w.location,
				nextLocation: t
			};
		}
		z({
			...n,
			actionData: a,
			loaderData: o,
			historyAction: T,
			location: t,
			initialized: !0,
			renderFallback: !1,
			navigation: Zs,
			revalidation: "idle",
			restoreScrollPosition: l,
			preventScrollReset: u,
			blockers: c
		}, {
			viewTransitionOpts: d,
			flushSync: r === !0
		}), T = "POP", D = !1, k = !1, M = !1, N = !1, E?.resolve(), E = null, oe?.resolve(), oe = null;
	}
	async function V(t, n) {
		if (E?.resolve(), E = null, typeof t == "number") {
			E ||= xl();
			let n = E.promise;
			return e.history.go(t), n;
		}
		let { path: r, submission: i, error: a } = dc(!1, uc(w.location, w.matches, c, t, n?.fromRouteId, n?.relative), n), o;
		if (n?.mask) {
			let t = typeof n.mask == "string" ? ko(n.mask) : {
				...w.location.mask,
				...n.mask
			};
			if (o = {
				pathname: t.pathname ?? "",
				search: t.search ?? "",
				hash: t.hash ?? ""
			}, xo.test(o.pathname)) throw Error("External navigation is not allowed");
			o.pathname.startsWith("\\") && (o.pathname = o.pathname.replace(/^\\+/, "/")), Ws(typeof n.mask == "string" ? n.mask : Z(n.mask), Z(o), e.history.createURL("/"), "reject");
		}
		let s = w.location, l = Oo(s, r, n && n.state, void 0, o);
		l = {
			...l,
			...e.history.encodeLocation(l)
		}, Ws(t == null ? e.history.createHref(w.location) : typeof t == "string" ? t : Z(t), e.history.createHref(l.mask || l), e.history.createURL("/"), "reject");
		let u = n && n.replace != null ? n.replace : void 0, d = "PUSH";
		u === !0 ? d = "REPLACE" : u === !1 || i != null && Q(i.formMethod) && i.formAction === w.location.pathname + w.location.search && (d = "REPLACE");
		let f = n && "preventScrollReset" in n ? n.preventScrollReset === !0 : void 0, p = (n && n.flushSync) === !0, m = Fe({
			currentLocation: s,
			nextLocation: l,
			historyAction: d
		});
		if (m) {
			Pe(m, {
				state: "blocked",
				location: l,
				proceed() {
					Pe(m, {
						state: "proceeding",
						proceed: void 0,
						reset: void 0,
						location: l
					}), V(t, n);
				},
				reset() {
					let e = new Map(w.blockers);
					e.set(m, $s), z({ blockers: e });
				}
			});
			return;
		}
		await de(d, l, {
			submission: i,
			pendingError: a,
			preventScrollReset: f,
			replace: n && n.replace,
			enableViewTransition: n && n.viewTransition,
			flushSync: p,
			callSiteDefaultShouldRevalidate: n && n.defaultShouldRevalidate
		});
	}
	function ue() {
		oe ||= xl(), xe(), z({ revalidation: "loading" });
		let e = oe.promise;
		return w.navigation.state === "submitting" ? e : w.navigation.state === "idle" ? (de(w.historyAction, w.location, { startUninterruptedRevalidation: !0 }), e) : (de(T || w.historyAction, w.navigation.location, {
			overrideNavigation: w.navigation,
			enableViewTransition: k === !0
		}), e);
	}
	async function de(t, n, r) {
		O && O.abort(), O = null, T = t, M = (r && r.startUninterruptedRevalidation) === !0, ze(w.location, w.matches), D = (r && r.preventScrollReset) === !0, k = (r && r.enableViewTransition) === !0;
		let i = s.activeRoutes, a = r?.initialHydration && w.matches && w.matches.length > 0 && !y ? w.matches : Ho(i, n, c, !1, s.branches), o = (r && r.flushSync) === !0;
		if (a && w.initialized && !N && $c(w.location, n) && !(r && r.submission && Q(r.submission.formMethod))) {
			B(n, { matches: a }, { flushSync: o });
			return;
		}
		let l = Ve(a, i, n.pathname);
		if (l.active && l.matches && (a = l.matches), !a) {
			let { error: e, notFoundMatches: t, route: r } = Ie(n.pathname);
			B(n, {
				matches: t,
				loaderData: {},
				errors: { [r.id]: e }
			}, { flushSync: o });
			return;
		}
		let u = r && r.overrideNavigation ? {
			...r.overrideNavigation,
			matches: a,
			historyAction: t
		} : void 0;
		O = new AbortController();
		let d = Bc(e.history, n, O.signal, r && r.submission), f = e.getContext ? await e.getContext() : new No(), p;
		if (r && r.pendingError) p = [Jc(a).route.id, {
			type: "error",
			error: r.pendingError
		}];
		else if (r && r.submission && Q(r.submission.formMethod)) {
			let i = await fe(d, n, r.submission, a, t, f, l.active, r && r.initialHydration === !0, {
				replace: r.replace,
				flushSync: o
			});
			if (i.shortCircuited) return;
			if (i.pendingActionResult) {
				let [e, t] = i.pendingActionResult;
				if (il(t) && Ts(t.error) && t.error.status === 404) {
					O = null, B(n, {
						matches: i.matches,
						loaderData: {},
						errors: { [e]: t.error }
					});
					return;
				}
			}
			a = i.matches || a, p = i.pendingActionResult, u = ml(n, a, t, r.submission), o = !1, l.active = !1, d = Bc(e.history, d.url, d.signal);
		}
		let { shortCircuited: m, matches: h, loaderData: g, errors: _, workingFetchers: v } = await pe(d, n, a, t, f, l.active, u, r && r.submission, r && r.fetcherSubmission, r && r.replace, r && r.initialHydration === !0, o, p, r && r.callSiteDefaultShouldRevalidate);
		m || (O = null, B(n, {
			matches: h || a,
			...qc(p),
			loaderData: g,
			errors: _,
			...v ? { fetchers: v } : {}
		}));
	}
	async function fe(t, n, i, l, u, d, f, p, m = {}) {
		if (xe(), z({ navigation: hl(n, l, u, i) }, { flushSync: m.flushSync === !0 }), f) {
			let e = await He(l, n.pathname, t.signal);
			if (e.type === "aborted") return { shortCircuited: !0 };
			if (e.type === "error") {
				if (e.partialMatches.length === 0) {
					let { matches: t, route: n } = Yc(s.activeRoutes);
					return {
						matches: t,
						pendingActionResult: [n.id, {
							type: "error",
							error: e.error
						}]
					};
				}
				let t = Jc(e.partialMatches).route.id;
				return {
					matches: e.partialMatches,
					pendingActionResult: [t, {
						type: "error",
						error: e.error
					}]
				};
			} else if (e.matches) l = e.matches;
			else {
				let { notFoundMatches: e, error: t, route: r } = Ie(n.pathname);
				return {
					matches: e,
					pendingActionResult: [r.id, {
						type: "error",
						error: t
					}]
				};
			}
		}
		let h, g = fl(l, n);
		if (!g.route.action && !g.route.lazy) h = {
			type: "error",
			error: Xc(405, {
				method: t.method,
				pathname: n.pathname,
				routeId: g.route.id
			})
		};
		else {
			let e = await ye(t, n, jc(a, o, t, n, l, g, p ? [] : r, d), d, null);
			if (h = e[g.route.id], !h) {
				for (let t of l) if (e[t.route.id]) {
					h = e[t.route.id];
					break;
				}
			}
			if (t.signal.aborted) return { shortCircuited: !0 };
		}
		if (al(h)) {
			let n;
			return n = m && m.replace != null ? m.replace : zc(h.response.headers.get("Location"), new URL(t.url), c, e.history) === w.location.pathname + w.location.search, await ve(t, h, !0, {
				submission: i,
				replace: n
			}), { shortCircuited: !0 };
		}
		if (il(h)) {
			let e = Jc(l, g.route.id);
			return (m && m.replace) !== !0 && (T = "PUSH"), {
				matches: l,
				pendingActionResult: [
					e.route.id,
					h,
					g.route.id
				]
			};
		}
		return {
			matches: l,
			pendingActionResult: [g.route.id, h]
		};
	}
	async function pe(t, n, i, l, u, d, f, p, m, h, g, _, v, y) {
		let b = f || ml(n, i, l, p), x = p || m || pl(b), S = !M && !g;
		if (d) {
			if (S) {
				let e = H(v);
				z({
					navigation: b,
					...e === void 0 ? {} : { actionData: e }
				}, { flushSync: _ });
			}
			let e = await He(i, n.pathname, t.signal);
			if (e.type === "aborted") return { shortCircuited: !0 };
			if (e.type === "error") {
				if (e.partialMatches.length === 0) {
					let { matches: t, route: n } = Yc(s.activeRoutes);
					return {
						matches: t,
						loaderData: {},
						errors: { [n.id]: e.error }
					};
				}
				let t = Jc(e.partialMatches).route.id;
				return {
					matches: e.partialMatches,
					loaderData: {},
					errors: { [t]: e.error }
				};
			} else if (e.matches) i = e.matches;
			else {
				let { error: e, notFoundMatches: t, route: r } = Ie(n.pathname);
				return {
					matches: t,
					loaderData: {},
					errors: { [r.id]: e }
				};
			}
		}
		let C = s.activeRoutes, { dsMatches: T, revalidatingFetchers: E } = fc(t, u, a, o, e.history, w, i, x, n, g ? [] : r, g === !0, N, ee, L, re, ne, C, c, e.patchRoutesOnNavigation != null, s.branches, v, y);
		if (I = ++F, !e.dataStrategy && !T.some((e) => e.shouldLoad) && !T.some((e) => e.route.middleware && e.route.middleware.length > 0) && E.length === 0) {
			let e = new Map(w.fetchers), t = Ae(e);
			return B(n, {
				matches: i,
				loaderData: {},
				errors: v && il(v[1]) ? { [v[0]]: v[1].error } : null,
				...qc(v),
				...t ? { fetchers: e } : {}
			}, { flushSync: _ }), { shortCircuited: !0 };
		}
		if (S) {
			let e = {};
			if (!d) {
				e.navigation = b;
				let t = H(v);
				t !== void 0 && (e.actionData = t);
			}
			E.length > 0 && (e.fetchers = me(E)), z(e, { flushSync: _ });
		}
		E.forEach((e) => {
			Oe(e.key), e.controller && P.set(e.key, e.controller);
		});
		let D = () => E.forEach((e) => Oe(e.key));
		O && O.signal.addEventListener("abort", D);
		let { loaderResults: k, fetcherResults: A } = await be(T, E, t, n, u);
		if (t.signal.aborted) return { shortCircuited: !0 };
		O && O.signal.removeEventListener("abort", D), E.forEach((e) => P.delete(e.key));
		let j = Zc(k);
		if (j) return await ve(t, j.result, !0, { replace: h }), { shortCircuited: !0 };
		if (j = Zc(A), j) return ne.add(j.key), await ve(t, j.result, !0, { replace: h }), { shortCircuited: !0 };
		let te = new Map(w.fetchers), { loaderData: ie, errors: R } = Gc(w, i, k, v, E, A, te);
		g && w.errors && (R = {
			...w.errors,
			...R
		});
		let ae = Ae(te), oe = je(I, te), se = ae || oe || E.length > 0;
		return {
			matches: i,
			loaderData: ie,
			errors: R,
			...se ? { workingFetchers: te } : {}
		};
	}
	function H(e) {
		if (e && !il(e[1])) return { [e[0]]: e[1].data };
		if (w.actionData) return Object.keys(w.actionData).length === 0 ? null : w.actionData;
	}
	function me(e) {
		let t = new Map(w.fetchers);
		return e.forEach((e) => {
			let n = t.get(e.key), r = gl(void 0, n ? n.data : void 0);
			t.set(e.key, r);
		}), t;
	}
	async function he(t, n, r, i) {
		Oe(t);
		let a = (i && i.flushSync) === !0, o = s.activeRoutes, l = uc(w.location, w.matches, c, r, n, i?.relative), u = Ho(o, l, c, !1, s.branches), d = Ve(u, o, l);
		if (d.active && d.matches && (u = d.matches), !u) {
			Ce(t, n, Xc(404, { pathname: l }), { flushSync: a });
			return;
		}
		let { path: f, submission: p, error: m } = dc(!0, l, i);
		if (m) {
			Ce(t, n, m, { flushSync: a });
			return;
		}
		let h = e.getContext ? await e.getContext() : new No(), g = (i && i.preventScrollReset) === !0;
		if (p && Q(p.formMethod)) {
			await ge(t, n, f, u, h, d.active, a, g, p, i && i.defaultShouldRevalidate);
			return;
		}
		re.set(t, {
			routeId: n,
			path: f
		}), await _e(t, n, f, u, h, d.active, a, g, p);
	}
	async function ge(t, n, i, l, u, d, f, p, m, h) {
		xe(), re.delete(t), Se(t, _l(m, w.fetchers.get(t)), { flushSync: f });
		let g = new AbortController(), _ = Bc(e.history, i, g.signal, m);
		if (d) {
			let e = await He(l, new URL(_.url).pathname, _.signal, t);
			if (e.type === "aborted") return;
			if (e.type === "error") {
				Ce(t, n, e.error, { flushSync: f });
				return;
			} else if (e.matches) l = e.matches;
			else {
				Ce(t, n, Xc(404, { pathname: i }), { flushSync: f });
				return;
			}
		}
		let v = fl(l, i);
		if (!v.route.action && !v.route.lazy) {
			Ce(t, n, Xc(405, {
				method: m.formMethod,
				pathname: i,
				routeId: n
			}), { flushSync: f });
			return;
		}
		P.set(t, g);
		let y = F, b = jc(a, o, _, i, l, v, r, u), x = await ye(_, i, b, u, t), S = x[v.route.id];
		if (!S) {
			for (let e of b) if (x[e.route.id]) {
				S = x[e.route.id];
				break;
			}
		}
		if (_.signal.aborted) {
			P.get(t) === g && P.delete(t);
			return;
		}
		if (L.has(t)) {
			if (al(S) || il(S)) {
				Se(t, vl(void 0));
				return;
			}
		} else {
			if (al(S)) if (P.delete(t), I > y) {
				Se(t, vl(void 0));
				return;
			} else return ne.add(t), Se(t, gl(m)), ve(_, S, !1, {
				fetcherSubmission: m,
				preventScrollReset: p
			});
			if (il(S)) {
				Ce(t, n, S.error);
				return;
			}
		}
		let C = w.navigation.location || w.location, E = Bc(e.history, C, g.signal), D = s.activeRoutes, k = w.navigation.state === "idle" ? w.matches : Ho(D, w.navigation.location, c, !1, s.branches);
		Y(k, "Didn't find any matches after fetcher action");
		let A = ++F;
		te.set(t, A);
		let { dsMatches: j, revalidatingFetchers: M } = fc(E, u, a, o, e.history, w, k, m, C, r, !1, N, ee, L, re, ne, D, c, e.patchRoutesOnNavigation != null, s.branches, [v.route.id, S], h), ie = gl(m, S.data), R = new Map(w.fetchers);
		R.set(t, ie), M.filter((e) => e.key !== t).forEach((e) => {
			let t = e.key, n = R.get(t), r = gl(void 0, n ? n.data : void 0);
			R.set(t, r), Oe(t), e.controller && P.set(t, e.controller);
		}), z({ fetchers: R });
		let ae = () => M.forEach((e) => Oe(e.key));
		g.signal.addEventListener("abort", ae);
		let { loaderResults: oe, fetcherResults: se } = await be(j, M, E, C, u);
		if (g.signal.aborted) return;
		g.signal.removeEventListener("abort", ae), te.delete(t), P.delete(t), M.forEach((e) => P.delete(e.key));
		let ce = w.fetchers.has(t), le = (e) => {
			if (!ce) return e;
			let n = new Map(e.fetchers);
			return n.set(t, vl(S.data)), {
				...e,
				fetchers: n
			};
		}, V = Zc(oe);
		if (V) return w = le(w), ve(E, V.result, !1, { preventScrollReset: p });
		if (V = Zc(se), V) return ne.add(V.key), w = le(w), ve(E, V.result, !1, { preventScrollReset: p });
		let ue = new Map(w.fetchers);
		ce && ue.set(t, vl(S.data));
		let { loaderData: de, errors: fe } = Gc(w, k, oe, void 0, M, se, ue);
		je(A, ue), w.navigation.state === "loading" && A > I ? (Y(T, "Expected pending action"), O && O.abort(), B(w.navigation.location, {
			matches: k,
			loaderData: de,
			errors: fe,
			fetchers: ue
		})) : (z({
			errors: fe,
			loaderData: Kc(w.loaderData, de, k, fe),
			fetchers: ue
		}), N = !1);
	}
	async function _e(t, n, i, s, c, l, u, d, f) {
		let p = w.fetchers.get(t);
		Se(t, gl(f, p ? p.data : void 0), { flushSync: u });
		let m = new AbortController(), h = Bc(e.history, i, m.signal);
		if (l) {
			let e = await He(s, new URL(h.url).pathname, h.signal, t);
			if (e.type === "aborted") return;
			if (e.type === "error") {
				Ce(t, n, e.error, { flushSync: u });
				return;
			} else if (e.matches) s = e.matches;
			else {
				Ce(t, n, Xc(404, { pathname: i }), { flushSync: u });
				return;
			}
		}
		let g = fl(s, i);
		P.set(t, m);
		let _ = F, v = await ye(h, i, jc(a, o, h, i, s, g, r, c), c, t), y = v[g.route.id];
		if (!y) {
			for (let e of s) if (v[e.route.id]) {
				y = v[e.route.id];
				break;
			}
		}
		if (P.get(t) === m && P.delete(t), !h.signal.aborted) {
			if (L.has(t)) {
				Se(t, vl(void 0));
				return;
			}
			if (al(y)) if (I > _) {
				Se(t, vl(void 0));
				return;
			} else {
				ne.add(t), await ve(h, y, !1, { preventScrollReset: d });
				return;
			}
			if (il(y)) {
				Ce(t, n, y.error);
				return;
			}
			Se(t, vl(y.data));
		}
	}
	async function ve(r, i, a, { submission: o, fetcherSubmission: s, preventScrollReset: l, replace: u } = {}) {
		a || (E?.resolve(), E = null), i.response.headers.has("X-Remix-Revalidate") && (N = !0);
		let d = i.response.headers.get("Location");
		Y(d, "Expected a Location header on the redirect Response");
		let f = d, p = new URL(r.url);
		d = zc(d, p, c, e.history), Ws(f, d, p, "allow-explicit");
		let m = Oo(w.location, d, { _isRedirect: !0 });
		if (n) {
			let e = !1;
			if (i.response.headers.has("X-Remix-Reload-Document")) e = !0;
			else if (us(d)) {
				let n = jo(t, d, !0);
				e = n.origin !== t.location.origin || cs(n.pathname, c) == null;
			}
			if (e) {
				u ? t.location.replace(d) : t.location.assign(d);
				return;
			}
		}
		O = null;
		let h = u === !0 || i.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH", { formMethod: g, formAction: _, formEncType: v } = w.navigation;
		!o && !s && g && _ && v && (o = pl(w.navigation));
		let y = o || s;
		Xs.has(i.response.status) && y && Q(y.formMethod) ? await de(h, m, {
			submission: {
				...y,
				formAction: d
			},
			preventScrollReset: l || D,
			enableViewTransition: a ? k : void 0
		}) : await de(h, m, {
			overrideNavigation: ml(m, [], h, o),
			fetcherSubmission: s,
			preventScrollReset: l || D,
			enableViewTransition: a ? k : void 0
		});
	}
	async function ye(e, t, n, r, i) {
		let a, o = {};
		try {
			a = await Mc(l, e, t, n, i, r, !1);
		} catch (e) {
			return n.filter((e) => e.shouldLoad).forEach((t) => {
				o[t.route.id] = {
					type: "error",
					error: e
				};
			}), o;
		}
		if (e.signal.aborted) return o;
		if (!Q(e.method)) for (let e of n) {
			if (a[e.route.id]?.type === "error") break;
			!a.hasOwnProperty(e.route.id) && !w.loaderData.hasOwnProperty(e.route.id) && (!w.errors || !w.errors.hasOwnProperty(e.route.id)) && e.shouldCallHandler() && (a[e.route.id] = {
				type: "error",
				result: /* @__PURE__ */ Error(`No result returned from dataStrategy for route ${e.route.id}`)
			});
		}
		for (let [t, r] of Object.entries(a)) if (rl(r)) {
			let i = r.result;
			o[t] = {
				type: "redirect",
				response: Ic(i, e, t, n, c)
			};
		} else o[t] = await Fc(r);
		return o;
	}
	async function be(e, t, n, r, i) {
		let a = ye(n, r, e, i, null), o = Promise.all(t.map(async (e) => {
			if (e.matches && e.match && e.request && e.controller) {
				let t = (await ye(e.request, e.path, e.matches, i, e.key))[e.match.route.id];
				return { [e.key]: t };
			} else return Promise.resolve({ [e.key]: {
				type: "error",
				error: Xc(404, { pathname: e.path })
			} });
		}));
		return {
			loaderResults: await a,
			fetcherResults: (await o).reduce((e, t) => Object.assign(e, t), {})
		};
	}
	function xe() {
		N = !0, re.forEach((e, t) => {
			P.has(t) && ee.add(t), Oe(t);
		});
	}
	function Se(e, t, n = {}) {
		let r = new Map(w.fetchers);
		r.set(e, t), z({ fetchers: r }, { flushSync: (n && n.flushSync) === !0 });
	}
	function Ce(e, t, n, r = {}) {
		let i = Jc(w.matches, t), a = new Map(w.fetchers);
		Ee(a, e), z({
			errors: { [i.route.id]: n },
			fetchers: a
		}, { flushSync: (r && r.flushSync) === !0 });
	}
	function we(e) {
		return ie.set(e, (ie.get(e) || 0) + 1), L.has(e) && L.delete(e), w.fetchers.get(e) || Qs;
	}
	function Te(e, t) {
		Oe(e, t?.reason), Se(e, vl(null));
	}
	function Ee(e, t) {
		let n = w.fetchers.get(t);
		P.has(t) && !(n && n.state === "loading" && te.has(t)) && Oe(t), re.delete(t), te.delete(t), ne.delete(t), L.delete(t), ee.delete(t), e.delete(t);
	}
	function De(e) {
		let t = (ie.get(e) || 0) - 1;
		t <= 0 ? (ie.delete(e), L.add(e)) : ie.set(e, t), z({ fetchers: new Map(w.fetchers) });
	}
	function Oe(e, t) {
		let n = P.get(e);
		n && (n.abort(t), P.delete(e));
	}
	function ke(e, t) {
		for (let n of e) {
			let e = t.get(n);
			Y(e, `Expected fetcher: ${n}`);
			let r = vl(e.data);
			t.set(n, r);
		}
	}
	function Ae(e) {
		let t = [], n = !1;
		for (let r of ne) {
			let i = e.get(r);
			Y(i, `Expected fetcher: ${r}`), i.state === "loading" && (ne.delete(r), t.push(r), n = !0);
		}
		return ke(t, e), n;
	}
	function je(e, t) {
		let n = [];
		for (let [r, i] of te) if (i < e) {
			let e = t.get(r);
			Y(e, `Expected fetcher: ${r}`), e.state === "loading" && (Oe(r), te.delete(r), n.push(r));
		}
		return ke(n, t), n.length > 0;
	}
	function Me(e, t) {
		let n = w.blockers.get(e) || $s;
		return R.get(e) !== t && R.set(e, t), n;
	}
	function Ne(e) {
		w.blockers.delete(e), R.delete(e);
	}
	function Pe(e, t) {
		let n = w.blockers.get(e) || $s;
		Y(n.state === "unblocked" && t.state === "blocked" || n.state === "blocked" && t.state === "blocked" || n.state === "blocked" && t.state === "proceeding" || n.state === "blocked" && t.state === "unblocked" || n.state === "proceeding" && t.state === "unblocked", `Invalid blocker state transition: ${n.state} -> ${t.state}`);
		let r = new Map(w.blockers);
		r.set(e, t), z({ blockers: r });
	}
	function Fe({ currentLocation: e, nextLocation: t, historyAction: n }) {
		if (R.size === 0) return;
		R.size > 1 && X(!1, "A router only supports one blocker at a time");
		let r = Array.from(R.entries()), [i, a] = r[r.length - 1], o = w.blockers.get(i);
		if (!(o && o.state === "proceeding") && a({
			currentLocation: e,
			nextLocation: t,
			historyAction: n
		})) return i;
	}
	function Ie(e) {
		let t = Xc(404, { pathname: e }), n = s.activeRoutes, { matches: r, route: i } = Yc(n);
		return {
			notFoundMatches: r,
			route: i,
			error: t
		};
	}
	function Le(e, t, n) {
		if (m = e, g = t, h = n || null, !_ && w.navigation === Zs) {
			_ = !0;
			let e = Be(w.location, w.matches);
			e != null && z({ restoreScrollPosition: e });
		}
		return () => {
			m = null, g = null, h = null;
		};
	}
	function Re(e, t) {
		return h && h(e, t.map((e) => Uo(e, w.loaderData))) || e.key;
	}
	function ze(e, t) {
		if (m && g) {
			let n = Re(e, t);
			m[n] = g();
		}
	}
	function Be(e, t) {
		if (m) {
			let n = Re(e, t), r = m[n];
			if (typeof r == "number") return r;
		}
		return null;
	}
	function Ve(t, n, r) {
		if (e.patchRoutesOnNavigation) {
			let e = s.branches;
			if (!t) return {
				active: !0,
				matches: Ho(n, r, c, !0, e) || []
			};
			if (Object.keys(t[0].params).length > 0) return {
				active: !0,
				matches: Ho(n, r, c, !0, e)
			};
		}
		return {
			active: !1,
			matches: null
		};
	}
	async function He(t, n, r, i) {
		if (!e.patchRoutesOnNavigation) return {
			type: "success",
			matches: t
		};
		let l = t;
		for (;;) {
			let t = o;
			try {
				await e.patchRoutesOnNavigation({
					signal: r,
					path: n,
					matches: l,
					fetcherKey: i,
					patch: (e, n) => {
						r.aborted || vc(e, n, s, t, a, !1);
					}
				});
			} catch (e) {
				return {
					type: "error",
					error: e,
					partialMatches: l
				};
			}
			if (r.aborted) return { type: "aborted" };
			let u = s.branches, d = Ho(s.activeRoutes, n, c, !1, u), f = null;
			if (d && (Object.keys(d[0].params).length === 0 || (f = Ho(s.activeRoutes, n, c, !0, u), !(f && l.length < f.length && Ue(l, f.slice(0, l.length)))))) return {
				type: "success",
				matches: d
			};
			if (f ||= Ho(s.activeRoutes, n, c, !0, u), !f || Ue(l, f)) return {
				type: "success",
				matches: null
			};
			l = f;
		}
	}
	function Ue(e, t) {
		return e.length === t.length && e.every((e, n) => e.route.id === t[n].route.id);
	}
	function We(e) {
		o = {}, s.setHmrRoutes(zo(e, a, void 0, o));
	}
	function Ge(e, t, n = !1) {
		vc(e, t, s, o, a, n), s.hasHMRRoutes || z({});
	}
	return C = {
		get basename() {
			return c;
		},
		get future() {
			return u;
		},
		get state() {
			return w;
		},
		get routes() {
			return s.stableRoutes;
		},
		get branches() {
			return s.branches;
		},
		get manifest() {
			return o;
		},
		get window() {
			return t;
		},
		initialize: se,
		subscribe: le,
		enableScrollRestoration: Le,
		navigate: V,
		fetch: he,
		revalidate: ue,
		createHref: (t) => e.history.createHref(t),
		createURL: (t) => e.history.createURL(t),
		encodeLocation: (t) => e.history.encodeLocation(t),
		getFetcher: we,
		resetFetcher: Te,
		deleteFetcher: De,
		dispose: ce,
		getBlocker: Me,
		deleteBlocker: Ne,
		patchRoutes: Ge,
		_internalFetchControllers: P,
		_internalSetRoutes: We,
		_internalSetStateDoNotUseOrYouWillBreakYourApp(e) {
			z(e);
		}
	}, e.instrumentations && (C = js(C, e.instrumentations.map((e) => e.router).filter(Boolean))), C;
}
function lc(e) {
	return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0);
}
function uc(e, t, n, r, i, a) {
	let o, s;
	if (i) {
		o = [];
		for (let e of t) if (o.push(e), e.route.id === i) {
			s = e;
			break;
		}
	} else o = t, s = t[t.length - 1];
	let c = gs(r || ".", hs(o), cs(e.pathname, n) || e.pathname, a === "path");
	if (r ?? (c.search = e.search, c.hash = e.hash), (r == null || r === "" || r === ".") && s) {
		let e = dl(c.search);
		if (s.route.index && !e) c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index";
		else if (!s.route.index && e) {
			let e = new URLSearchParams(c.search), t = e.getAll("index");
			e.delete("index"), t.filter((e) => e).forEach((t) => e.append("index", t));
			let n = e.toString();
			c.search = n ? `?${n}` : "";
		}
	}
	return n !== "/" && (c.pathname = ls({
		basename: n,
		pathname: c.pathname
	})), Z(c);
}
function dc(e, t, n) {
	if (!n || !lc(n)) return { path: t };
	if (n.formMethod && !ul(n.formMethod)) return {
		path: t,
		error: Xc(405, { method: n.formMethod })
	};
	let r = () => ({
		path: t,
		error: Xc(400, { type: "invalid-body" })
	}), i = (n.formMethod || "get").toUpperCase(), a = Qc(t);
	if (n.body !== void 0) {
		if (n.formEncType === "text/plain") {
			if (!Q(i)) return r();
			let e = typeof n.body == "string" ? n.body : n.body instanceof FormData || n.body instanceof URLSearchParams ? Array.from(n.body.entries()).reduce((e, [t, n]) => `${e}${t}=${n}
`, "") : String(n.body);
			return {
				path: t,
				submission: {
					formMethod: i,
					formAction: a,
					formEncType: n.formEncType,
					formData: void 0,
					json: void 0,
					text: e
				}
			};
		} else if (n.formEncType === "application/json") {
			if (!Q(i)) return r();
			try {
				let e = typeof n.body == "string" ? JSON.parse(n.body) : n.body;
				return {
					path: t,
					submission: {
						formMethod: i,
						formAction: a,
						formEncType: n.formEncType,
						formData: void 0,
						json: e,
						text: void 0
					}
				};
			} catch {
				return r();
			}
		}
	}
	Y(typeof FormData == "function", "FormData is not available in this environment");
	let o, s;
	if (n.formData) o = Hc(n.formData), s = n.formData;
	else if (n.body instanceof FormData) o = Hc(n.body), s = n.body;
	else if (n.body instanceof URLSearchParams) o = n.body, s = Uc(o);
	else if (n.body == null) o = new URLSearchParams(), s = new FormData();
	else try {
		o = new URLSearchParams(n.body), s = Uc(o);
	} catch {
		return r();
	}
	let c = {
		formMethod: i,
		formAction: a,
		formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
		formData: s,
		json: void 0,
		text: void 0
	};
	if (Q(c.formMethod)) return {
		path: t,
		submission: c
	};
	let l = ko(t);
	return e && l.search && dl(l.search) && o.append("index", ""), l.search = `?${o}`, {
		path: Z(l),
		submission: c
	};
}
function fc(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x) {
	let S = b ? il(b[1]) ? b[1].error : b[1].data : void 0, C = i.createURL(a.location), w = i.createURL(c), T;
	if (u && a.errors) {
		let e = Object.keys(a.errors)[0];
		T = o.findIndex((t) => t.route.id === e);
	} else if (b && il(b[1])) {
		let e = b[0];
		T = o.findIndex((t) => t.route.id === e) - 1;
	}
	let E = b ? b[1].statusCode : void 0, D = E && E >= 400, O = {
		currentUrl: C,
		currentParams: a.matches[0]?.params || {},
		nextUrl: w,
		nextParams: o[0].params,
		...s,
		actionResult: S,
		actionStatus: E
	}, k = Es(o), A = o.map((i, o) => {
		let { route: s } = i, f = null;
		if (T != null && o > T) f = !1;
		else if (s.lazy) f = !0;
		else if (!pc(s)) f = !1;
		else if (u) {
			let { shouldLoad: e } = mc(s, a.loaderData, a.errors);
			f = e;
		} else hc(a.loaderData, a.matches[o], i) && (f = !0);
		if (f !== null) return Ac(n, r, e, c, k, i, l, t, f);
		let p = !1;
		typeof x == "boolean" ? p = x : D ? p = !1 : d || C.pathname + C.search === w.pathname + w.search ? p = !0 : C.search === w.search ? gc(a.matches[o], i) && (p = !0) : p = !0;
		let m = {
			...O,
			defaultShouldRevalidate: p
		}, h = _c(i, m);
		return Ac(n, r, e, c, k, i, l, t, h, m, x);
	}), j = [];
	return m.forEach((e, s) => {
		if (u || !o.some((t) => t.route.id === e.routeId) || p.has(s)) return;
		let c = a.fetchers.get(s), m = c && c.state !== "idle" && c.data === void 0, b = Ho(g, e.path, _ ?? "/", !1, y);
		if (!b) {
			if (v && m) return;
			j.push({
				key: s,
				routeId: e.routeId,
				path: e.path,
				matches: null,
				match: null,
				request: null,
				controller: null
			});
			return;
		}
		if (h.has(s)) return;
		let S = fl(b, e.path), C = new AbortController(), w = Bc(i, e.path, C.signal), T = null;
		if (f.has(s)) f.delete(s), T = jc(n, r, w, e.path, b, S, l, t);
		else if (m) d && (T = jc(n, r, w, e.path, b, S, l, t));
		else {
			let i;
			i = typeof x == "boolean" ? x : D ? !1 : d;
			let a = {
				...O,
				defaultShouldRevalidate: i
			};
			_c(S, a) && (T = jc(n, r, w, e.path, b, S, l, t, a));
		}
		T && j.push({
			key: s,
			routeId: e.routeId,
			path: e.path,
			matches: T,
			match: S,
			request: w,
			controller: C
		});
	}), {
		dsMatches: A,
		revalidatingFetchers: j
	};
}
function pc(e) {
	return e.loader != null || e.middleware != null && e.middleware.length > 0;
}
function mc(e, t, n) {
	if (e.lazy) return {
		shouldLoad: !0,
		renderFallback: !0
	};
	if (!pc(e)) return {
		shouldLoad: !1,
		renderFallback: !1
	};
	let r = t != null && e.id in t, i = n != null && n[e.id] !== void 0;
	if (!r && i) return {
		shouldLoad: !1,
		renderFallback: !1
	};
	if (typeof e.loader == "function" && e.loader.hydrate === !0) return {
		shouldLoad: !0,
		renderFallback: !r
	};
	let a = !r && !i;
	return {
		shouldLoad: a,
		renderFallback: a
	};
}
function hc(e, t, n) {
	let r = !t || n.route.id !== t.route.id, i = !e.hasOwnProperty(n.route.id);
	return r || i;
}
function gc(e, t) {
	let n = e.route.path;
	return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"];
}
function _c(e, t) {
	if (e.route.shouldRevalidate) {
		let n = e.route.shouldRevalidate(t);
		if (typeof n == "boolean") return n;
	}
	return t.defaultShouldRevalidate;
}
function vc(e, t, n, r, i, a) {
	let o;
	if (e) {
		let t = r[e];
		Y(t, `No route found to patch children into: routeId = ${e}`), t.children ||= [], o = t.children;
	} else o = n.activeRoutes;
	let s = [], c = [];
	if (t.forEach((e) => {
		let t = o.find((t) => yc(e, t));
		t ? c.push({
			existingRoute: t,
			newRoute: e
		}) : s.push(e);
	}), s.length > 0) {
		let t = zo(s, i, [
			e || "_",
			"patch",
			String(o?.length || "0")
		], r);
		o.push(...t);
	}
	if (a && c.length > 0) for (let e = 0; e < c.length; e++) {
		let { existingRoute: t, newRoute: n } = c[e], r = t, [a] = zo([n], i, [], {}, !0);
		Object.assign(r, {
			element: a.element ? a.element : r.element,
			errorElement: a.errorElement ? a.errorElement : r.errorElement,
			hydrateFallbackElement: a.hydrateFallbackElement ? a.hydrateFallbackElement : r.hydrateFallbackElement
		});
	}
	n.hasHMRRoutes || n.setRoutes([...n.activeRoutes]);
}
function yc(e, t) {
	return "id" in e && "id" in t && e.id === t.id ? !0 : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0) ? !0 : e.children?.every((e, n) => t.children?.some((t) => yc(e, t))) ?? !1 : !1;
}
var bc = /* @__PURE__ */ new WeakMap(), xc = ({ key: e, route: t, manifest: n, mapRouteProperties: r }) => {
	let i = n[t.id];
	if (Y(i, "No route found in manifest"), !i.lazy || typeof i.lazy != "object") return;
	let a = i.lazy[e];
	if (!a) return;
	let o = bc.get(i);
	o || (o = {}, bc.set(i, o));
	let s = o[e];
	if (s) return s;
	let c = (async () => {
		let t = Fo(e), n = i[e] !== void 0 && e !== "hasErrorBoundary";
		if (t) X(!t, "Route property " + e + " is not a supported lazy route property. This property will be ignored."), o[e] = Promise.resolve();
		else if (n) X(!1, `Route "${i.id}" has a static property "${e}" defined. The lazy property will be ignored.`);
		else {
			let t = await a();
			t != null && (Object.assign(i, { [e]: t }), Object.assign(i, r(i)));
		}
		typeof i.lazy == "object" && (i.lazy[e] = void 0, Object.values(i.lazy).every((e) => e === void 0) && (i.lazy = void 0));
	})();
	return o[e] = c, c;
}, Sc = /* @__PURE__ */ new WeakMap();
function Cc(e, t, n, r, i) {
	let a = n[e.id];
	if (Y(a, "No route found in manifest"), !e.lazy) return {
		lazyRoutePromise: void 0,
		lazyHandlerPromise: void 0
	};
	if (typeof e.lazy == "function") {
		let t = Sc.get(a);
		if (t) return {
			lazyRoutePromise: t,
			lazyHandlerPromise: t
		};
		let n = (async () => {
			Y(typeof e.lazy == "function", "No lazy route function found");
			let t = await e.lazy(), n = {};
			for (let e in t) {
				let r = t[e];
				if (r === void 0) continue;
				let i = Lo(e), o = a[e] !== void 0 && e !== "hasErrorBoundary";
				i ? X(!i, "Route property " + e + " is not a supported property to be returned from a lazy route function. This property will be ignored.") : o ? X(!o, `Route "${a.id}" has a static property "${e}" defined but its lazy function is also returning a value for this property. The lazy route property "${e}" will be ignored.`) : n[e] = r;
			}
			Object.assign(a, n), Object.assign(a, {
				...r(a),
				lazy: void 0
			});
		})();
		return Sc.set(a, n), n.catch(() => {}), {
			lazyRoutePromise: n,
			lazyHandlerPromise: n
		};
	}
	let o = Object.keys(e.lazy), s = [], c;
	for (let a of o) {
		if (i && i.includes(a)) continue;
		let o = xc({
			key: a,
			route: e,
			manifest: n,
			mapRouteProperties: r
		});
		o && (s.push(o), a === t && (c = o));
	}
	let l = s.length > 0 ? Promise.all(s).then(() => {}) : void 0;
	return l?.catch(() => {}), c?.catch(() => {}), {
		lazyRoutePromise: l,
		lazyHandlerPromise: c
	};
}
async function wc(e) {
	let t = e.matches.filter((e) => e.shouldLoad), n = {};
	return (await Promise.all(t.map((e) => e.resolve()))).forEach((e, r) => {
		n[t[r].route.id] = e;
	}), n;
}
async function Tc(e) {
	return e.matches.some((e) => e.route.middleware) ? Ec(e, () => wc(e)) : wc(e);
}
function Ec(e, t) {
	return Dc(e, t, (e) => {
		if (ll(e)) throw e;
		return e;
	}, tl, n);
	function n(t, n, r) {
		if (r) return Promise.resolve(Object.assign(r.value, { [n]: {
			type: "error",
			result: t
		} }));
		{
			let { matches: r } = e, i = Jc(r, r[Math.min(Math.max(r.findIndex((e) => e.route.id === n), 0), Math.max(r.findIndex((e) => e.shouldCallHandler()), 0))].route.id).route.id;
			return Promise.resolve({ [i]: {
				type: "error",
				result: t
			} });
		}
	}
}
async function Dc(e, t, n, r, i) {
	let { matches: a, ...o } = e;
	return await Oc(o, a.flatMap((e) => e.route.middleware ? e.route.middleware.map((t) => [e.route.id, t]) : []), t, n, r, i);
}
async function Oc(e, t, n, r, i, a, o = 0) {
	let { request: s } = e;
	if (s.signal.aborted) throw s.signal.reason ?? /* @__PURE__ */ Error(`Request aborted: ${s.method} ${s.url}`);
	let c = t[o];
	if (!c) return await n();
	let [l, u] = c, d, f = async () => {
		if (d) throw Error("You may only call `next()` once per middleware");
		try {
			return d = { value: await Oc(e, t, n, r, i, a, o + 1) }, d.value;
		} catch (e) {
			return d = { value: await a(e, l, d) }, d.value;
		}
	};
	try {
		let t = await u(e, f), n = t == null ? void 0 : r(t);
		return i(n) ? n : d ? n ?? d.value : (d = { value: await f() }, d.value);
	} catch (e) {
		return await a(e, l, d);
	}
}
function kc(e, t, n, r, i) {
	let a = xc({
		key: "middleware",
		route: r.route,
		manifest: t,
		mapRouteProperties: e
	}), o = Cc(r.route, Q(n.method) ? "action" : "loader", t, e, i);
	return {
		middleware: a,
		route: o.lazyRoutePromise,
		handler: o.lazyHandlerPromise
	};
}
function Ac(e, t, n, r, i, a, o, s, c, l = null, u) {
	let d = !1, f = kc(e, t, n, a, o);
	return {
		...a,
		_lazyPromises: f,
		shouldLoad: c,
		shouldRevalidateArgs: l,
		shouldCallHandler(e) {
			return d = !0, l ? typeof u == "boolean" ? _c(a, {
				...l,
				defaultShouldRevalidate: u
			}) : typeof e == "boolean" ? _c(a, {
				...l,
				defaultShouldRevalidate: e
			}) : _c(a, l) : c;
		},
		resolve(e) {
			let { lazy: t, loader: o, middleware: l } = a.route, u = d || c || e && !Q(n.method) && (t || o), p = l && l.length > 0 && !o && !t;
			return u && (Q(n.method) || !p) ? Nc({
				request: n,
				path: r,
				pattern: i,
				match: a,
				lazyHandlerPromise: f?.handler,
				lazyRoutePromise: f?.route,
				handlerOverride: e,
				scopedContext: s
			}) : Promise.resolve({
				type: "data",
				result: void 0
			});
		}
	};
}
function jc(e, t, n, r, i, a, o, s, c = null) {
	return i.map((l) => l.route.id === a.route.id ? Ac(e, t, n, r, Es(i), l, o, s, !0, c) : {
		...l,
		shouldLoad: !1,
		shouldRevalidateArgs: c,
		shouldCallHandler: () => !1,
		_lazyPromises: kc(e, t, n, l, o),
		resolve: () => Promise.resolve({
			type: "data",
			result: void 0
		})
	});
}
async function Mc(e, t, n, r, i, a, o) {
	r.some((e) => e._lazyPromises?.middleware) && await Promise.all(r.map((e) => e._lazyPromises?.middleware));
	let s = {
		request: t,
		url: Vc(t, n),
		pattern: Es(r),
		params: r[0].params,
		context: a,
		matches: r
	}, c = o ? () => {
		throw Error("You cannot call `runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`");
	} : (e) => {
		let t = s;
		return Ec(t, () => e({
			...t,
			fetcherKey: i,
			runClientMiddleware: () => {
				throw Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler");
			}
		}));
	}, l = await e({
		...s,
		fetcherKey: i,
		runClientMiddleware: c
	});
	try {
		await Promise.all(r.flatMap((e) => [e._lazyPromises?.handler, e._lazyPromises?.route]));
	} catch {}
	return l;
}
async function Nc({ request: e, path: t, pattern: n, match: r, lazyHandlerPromise: i, lazyRoutePromise: a, handlerOverride: o, scopedContext: s }) {
	let c, l, u = Q(e.method), d = u ? "action" : "loader", f = (i) => {
		let a, c = new Promise((e, t) => a = t);
		l = () => a(), e.signal.addEventListener("abort", l);
		let u = (a) => typeof i == "function" ? i({
			request: e,
			url: Vc(e, t),
			pattern: n,
			params: r.params,
			context: s
		}, ...a === void 0 ? [] : [a]) : Promise.reject(/* @__PURE__ */ Error(`You cannot call the handler for a route which defines a boolean "${d}" [routeId: ${r.route.id}]`)), f = (async () => {
			try {
				return {
					type: "data",
					result: await (o ? o((e) => u(e)) : u())
				};
			} catch (e) {
				return {
					type: "error",
					result: e
				};
			}
		})();
		return Promise.race([f, c]);
	};
	try {
		let t = u ? r.route.action : r.route.loader;
		if (i || a) if (t) {
			let e, [n] = await Promise.all([
				f(t).catch((t) => {
					e = t;
				}),
				i,
				a
			]);
			if (e !== void 0) throw e;
			c = n;
		} else {
			await i;
			let t = u ? r.route.action : r.route.loader;
			if (t) [c] = await Promise.all([f(t), a]);
			else if (d === "action") {
				let t = new URL(e.url), n = t.pathname + t.search;
				throw Xc(405, {
					method: e.method,
					pathname: n,
					routeId: r.route.id
				});
			} else return {
				type: "data",
				result: void 0
			};
		}
		else if (t) c = await f(t);
		else {
			let t = new URL(e.url);
			throw Xc(404, { pathname: t.pathname + t.search });
		}
	} catch (e) {
		return {
			type: "error",
			result: e
		};
	} finally {
		l && e.signal.removeEventListener("abort", l);
	}
	return c;
}
async function Pc(e) {
	let t = e.headers.get("Content-Type");
	return t && /\bapplication\/json\b/.test(t) ? e.body == null ? null : e.json() : e.text();
}
async function Fc(e) {
	let { result: t, type: n } = e;
	if (sl(t)) {
		let e;
		try {
			e = await Pc(t);
		} catch (e) {
			return {
				type: "error",
				error: e
			};
		}
		return n === "error" ? {
			type: "error",
			error: new ws(t.status, t.statusText, e),
			statusCode: t.status,
			headers: t.headers
		} : {
			type: "data",
			data: e,
			statusCode: t.status,
			headers: t.headers
		};
	}
	return n === "error" ? ol(t) ? t.data instanceof Error ? {
		type: "error",
		error: t.data,
		statusCode: t.init?.status,
		headers: t.init?.headers ? new Headers(t.init.headers) : void 0
	} : {
		type: "error",
		error: el(t),
		statusCode: Ts(t) ? t.status : void 0,
		headers: t.init?.headers ? new Headers(t.init.headers) : void 0
	} : {
		type: "error",
		error: t,
		statusCode: Ts(t) ? t.status : void 0
	} : ol(t) ? {
		type: "data",
		data: t.data,
		statusCode: t.init?.status,
		headers: t.init?.headers ? new Headers(t.init.headers) : void 0
	} : {
		type: "data",
		data: t
	};
}
function Ic(e, t, n, r, i) {
	let a = e.headers.get("Location");
	if (Y(a, "Redirects returned/thrown from loaders/actions must have a Location header"), !us(a)) {
		let o = r.slice(0, r.findIndex((e) => e.route.id === n) + 1);
		a = uc(new URL(t.url), o, i, a), e.headers.set("Location", a);
	}
	return e;
}
var Lc = [
	"about:",
	"blob:",
	"chrome:",
	"chrome-untrusted:",
	"content:",
	"data:",
	"devtools:",
	"file:",
	"filesystem:",
	"javascript:"
];
function Rc(e) {
	try {
		return Lc.includes(new URL(e).protocol);
	} catch {
		return !1;
	}
}
function zc(e, t, n, r) {
	if (us(e)) {
		let r = e, i = xo.test(r) ? new URL(So(r, t.protocol)) : new URL(r);
		if (Rc(i.toString())) throw Error("Invalid redirect location");
		let a = cs(i.pathname, n) != null;
		if (i.origin === t.origin && a) return _s(i.pathname) + i.search + i.hash;
	}
	try {
		if (Rc(r.createURL(e).toString())) throw Error("Invalid redirect location");
	} catch {}
	return e;
}
function Bc(e, t, n, r) {
	let i = e.createURL(Qc(t)).toString(), a = { signal: n };
	if (r && Q(r.formMethod)) {
		let { formMethod: e, formEncType: t } = r;
		a.method = e.toUpperCase(), t === "application/json" ? (a.headers = new Headers({ "Content-Type": t }), a.body = JSON.stringify(r.json)) : t === "text/plain" ? a.body = r.text : t === "application/x-www-form-urlencoded" && r.formData ? a.body = Hc(r.formData) : a.body = r.formData;
	}
	return new Request(i, a);
}
function Vc(e, t) {
	let n = new URL(e.url), r = typeof t == "string" ? ko(t) : t;
	if (n.pathname = r.pathname || "/", r.search) {
		let e = new URLSearchParams(r.search), t = e.getAll("index");
		e.delete("index");
		for (let n of t.filter(Boolean)) e.append("index", n);
		n.search = e.size ? `?${e.toString()}` : "";
	} else n.search = "";
	return n.hash = r.hash || "", n;
}
function Hc(e) {
	let t = new URLSearchParams();
	for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name);
	return t;
}
function Uc(e) {
	let t = new FormData();
	for (let [n, r] of e.entries()) t.append(n, r);
	return t;
}
function Wc(e, t, n, r = !1, i = !1) {
	let a = {}, o = null, s, c = !1, l = {}, u = n && il(n[1]) ? n[1].error : void 0;
	return e.forEach((n) => {
		if (!(n.route.id in t)) return;
		let d = n.route.id, f = t[d];
		if (Y(!al(f), "Cannot handle redirect results in processLoaderData"), il(f)) {
			let t = f.error;
			if (u !== void 0 && (t = u, u = void 0), o ||= {}, i) o[d] = t;
			else {
				let n = Jc(e, d);
				o[n.route.id] ?? (o[n.route.id] = t);
			}
			r || (a[d] = nc), c || (c = !0, s = Ts(f.error) ? f.error.status : 500), f.headers && (l[d] = f.headers);
		} else a[d] = f.data, f.statusCode && f.statusCode !== 200 && !c && (s = f.statusCode), f.headers && (l[d] = f.headers);
	}), u !== void 0 && n && (o = { [n[0]]: u }, n[2] && (a[n[2]] = void 0)), {
		loaderData: a,
		errors: o,
		statusCode: s || 200,
		loaderHeaders: l
	};
}
function Gc(e, t, n, r, i, a, o) {
	let { loaderData: s, errors: c } = Wc(t, n, r);
	return i.filter((e) => !e.matches || e.matches.some((e) => e.shouldLoad)).forEach((t) => {
		let { key: n, match: r, controller: i } = t;
		if (i && i.signal.aborted) return;
		let s = a[n];
		if (Y(s, "Did not find corresponding fetcher result"), il(s)) {
			let t = Jc(e.matches, r?.route.id);
			c && c[t.route.id] || (c = {
				...c,
				[t.route.id]: s.error
			}), o.delete(n);
		} else if (al(s)) Y(!1, "Unhandled fetcher revalidation redirect");
		else {
			let e = vl(s.data);
			o.set(n, e);
		}
	}), {
		loaderData: s,
		errors: c
	};
}
function Kc(e, t, n, r) {
	let i = Object.entries(t).filter(([, e]) => e !== nc).reduce((e, [t, n]) => (e[t] = n, e), {});
	for (let a of n) {
		let n = a.route.id;
		if (!t.hasOwnProperty(n) && e.hasOwnProperty(n) && a.route.loader && (i[n] = e[n]), r && r.hasOwnProperty(n)) break;
	}
	return i;
}
function qc(e) {
	return e ? il(e[1]) ? { actionData: {} } : { actionData: { [e[0]]: e[1].data } } : {};
}
function Jc(e, t) {
	return (t ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1) : [...e]).reverse().find((e) => e.route.hasErrorBoundary === !0) || e[0];
}
function Yc(e) {
	let t = e.length === 1 ? e[0] : e.find((e) => e.index || !e.path || e.path === "/") || { id: "__shim-error-route__" };
	return {
		matches: [{
			params: {},
			pathname: "",
			pathnameBase: "",
			route: t
		}],
		route: t
	};
}
function Xc(e, { pathname: t, routeId: n, method: r, type: i, message: a } = {}) {
	let o = "Unknown Server Error", s = "Unknown @remix-run/router error";
	return e === 400 ? (o = "Bad Request", r && t && n ? s = `You made a ${r} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.` : i === "invalid-body" && (s = "Unable to encode submission body")) : e === 403 ? (o = "Forbidden", s = `Route "${n}" does not match URL "${t}"`) : e === 404 ? (o = "Not Found", s = `No route matches URL "${t}"`) : e === 405 && (o = "Method Not Allowed", r && t && n ? s = `You made a ${r.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.` : r && (s = `Invalid request method "${r.toUpperCase()}"`)), new ws(e || 500, o, Error(s), !0);
}
function Zc(e) {
	let t = Object.entries(e);
	for (let e = t.length - 1; e >= 0; e--) {
		let [n, r] = t[e];
		if (al(r)) return {
			key: n,
			result: r
		};
	}
}
function Qc(e) {
	return Z({
		...typeof e == "string" ? ko(e) : e,
		hash: ""
	});
}
function $c(e, t) {
	return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== "";
}
function el(e) {
	return new ws(e.init?.status ?? 500, e.init?.statusText ?? "Internal Server Error", e.data);
}
function tl(e) {
	return typeof e == "object" && !!e && Object.entries(e).every(([e, t]) => typeof e == "string" && nl(t));
}
function nl(e) {
	return typeof e == "object" && !!e && "type" in e && "result" in e && (e.type === "data" || e.type === "error");
}
function rl(e) {
	return sl(e.result) && Ys.has(e.result.status);
}
function il(e) {
	return e.type === "error";
}
function al(e) {
	return (e && e.type) === "redirect";
}
function ol(e) {
	return typeof e == "object" && !!e && "type" in e && "data" in e && "init" in e && e.type === "DataWithResponseInit";
}
function sl(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && e.body !== void 0;
}
function cl(e) {
	return Ys.has(e);
}
function ll(e) {
	return sl(e) && cl(e.status) && e.headers.has("Location");
}
function ul(e) {
	return Js.has(e.toUpperCase());
}
function Q(e) {
	return Ks.has(e.toUpperCase());
}
function dl(e) {
	return new URLSearchParams(e).getAll("index").some((e) => e === "");
}
function fl(e, t) {
	let n = typeof t == "string" ? ko(t).search : t.search;
	if (e[e.length - 1].route.index && dl(n || "")) return e[e.length - 1];
	let r = ms(e);
	return r[r.length - 1];
}
function pl(e) {
	let { formMethod: t, formAction: n, formEncType: r, text: i, formData: a, json: o } = e;
	if (!(!t || !n || !r)) {
		if (i != null) return {
			formMethod: t,
			formAction: n,
			formEncType: r,
			formData: void 0,
			json: void 0,
			text: i
		};
		if (a != null) return {
			formMethod: t,
			formAction: n,
			formEncType: r,
			formData: a,
			json: void 0,
			text: void 0
		};
		if (o !== void 0) return {
			formMethod: t,
			formAction: n,
			formEncType: r,
			formData: void 0,
			json: o,
			text: void 0
		};
	}
}
function ml(e, t, n, r) {
	return r ? {
		state: "loading",
		location: e,
		matches: t,
		historyAction: n,
		formMethod: r.formMethod,
		formAction: r.formAction,
		formEncType: r.formEncType,
		formData: r.formData,
		json: r.json,
		text: r.text
	} : {
		state: "loading",
		location: e,
		matches: t,
		historyAction: n,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0
	};
}
function hl(e, t, n, r) {
	return {
		state: "submitting",
		location: e,
		matches: t,
		historyAction: n,
		formMethod: r.formMethod,
		formAction: r.formAction,
		formEncType: r.formEncType,
		formData: r.formData,
		json: r.json,
		text: r.text
	};
}
function gl(e, t) {
	return e ? {
		state: "loading",
		formMethod: e.formMethod,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formData: e.formData,
		json: e.json,
		text: e.text,
		data: t
	} : {
		state: "loading",
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: t
	};
}
function _l(e, t) {
	return {
		state: "submitting",
		formMethod: e.formMethod,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formData: e.formData,
		json: e.json,
		text: e.text,
		data: t ? t.data : void 0
	};
}
function vl(e) {
	return {
		state: "idle",
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: e
	};
}
function yl(e, t) {
	try {
		let n = e.sessionStorage.getItem(tc);
		if (n) {
			let e = JSON.parse(n);
			for (let [n, r] of Object.entries(e || {})) r && Array.isArray(r) && t.set(n, new Set(r || []));
		}
	} catch {}
}
function bl(e, t) {
	if (t.size > 0) {
		let n = {};
		for (let [e, r] of t) n[e] = [...r];
		try {
			e.sessionStorage.setItem(tc, JSON.stringify(n));
		} catch (e) {
			X(!1, `Failed to save applied view transitions in sessionStorage (${e}).`);
		}
	}
}
function xl() {
	let e, t, n = new Promise((r, i) => {
		e = async (e) => {
			r(e);
			try {
				await n;
			} catch {}
		}, t = async (e) => {
			i(e);
			try {
				await n;
			} catch {}
		};
	});
	return {
		promise: n,
		resolve: e,
		reject: t
	};
}
var Sl = s(null);
Sl.displayName = "DataRouter";
var Cl = s(null);
Cl.displayName = "DataRouterState";
var wl = s(!1);
function Tl() {
	return a(wl);
}
var El = s({ isTransitioning: !1 });
El.displayName = "ViewTransition";
var Dl = s(/* @__PURE__ */ new Map());
Dl.displayName = "Fetchers";
var Ol = s(null);
Ol.displayName = "Await";
var $ = s(null);
$.displayName = "Navigation";
var kl = s(null);
kl.displayName = "Location";
var Al = s({
	outlet: null,
	matches: [],
	isDataRoute: !1
});
Al.displayName = "Route";
var jl = s(null);
jl.displayName = "RouteError";
var Ml = "REACT_ROUTER_ERROR", Nl = "REDIRECT", Pl = "ROUTE_ERROR_RESPONSE";
function Fl(e) {
	if (e.startsWith(`${Ml}:${Nl}:{`)) try {
		let t = JSON.parse(e.slice(28));
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean") return t;
	} catch {}
}
function Il(e) {
	if (e.startsWith(`${Ml}:${Pl}:{`)) try {
		let t = JSON.parse(e.slice(40));
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string") return new ws(t.status, t.statusText, t.data);
	} catch {}
}
function Ll(e, { relative: t } = {}) {
	Y(Rl(), "useHref() may be used only in the context of a <Router> component.");
	let { basename: n, navigator: r } = a($), { hash: i, pathname: o, search: s } = Jl(e, { relative: t }), c = o;
	return n !== "/" && (c = o === "/" ? n : vs([n, o])), r.createHref({
		pathname: c,
		search: s,
		hash: i
	});
}
function Rl() {
	return a(kl) != null;
}
function zl() {
	return Y(Rl(), "useLocation() may be used only in the context of a <Router> component."), a(kl).location;
}
function Bl() {
	return a(kl).navigationType;
}
var Vl = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Hl(e) {
	a($).static || b(e);
}
function Ul() {
	let { isDataRoute: e } = a(Al);
	return e ? fu() : Wl();
}
function Wl() {
	Y(Rl(), "useNavigate() may be used only in the context of a <Router> component.");
	let e = a(Sl), { basename: t, navigator: n } = a($), { matches: r } = a(Al), { pathname: i } = zl(), o = JSON.stringify(hs(r)), s = y(!1);
	return Hl(() => {
		s.current = !0;
	}), u((r, a = {}) => {
		if (X(s.current, Vl), !s.current) return;
		if (typeof r == "number") {
			n.go(r);
			return;
		}
		let c = gs(r, JSON.parse(o), i, a.relative === "path");
		e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : vs([t, c.pathname])), Ws(typeof r == "string" ? r : Z(r), n.createHref(c), Vs(n), "reject"), (a.replace ? n.replace : n.push)(c, a.state, a);
	}, [
		t,
		n,
		o,
		i,
		e
	]);
}
var Gl = s(null);
function Kl(e) {
	let t = a(Al).outlet;
	return r(() => t && /* @__PURE__ */ f(Gl.Provider, { value: e }, t), [t, e]);
}
function ql() {
	let { matches: e } = a(Al);
	return e[e.length - 1]?.params ?? {};
}
function Jl(e, { relative: t } = {}) {
	let { matches: n } = a(Al), { pathname: i } = zl(), o = JSON.stringify(hs(n));
	return r(() => gs(e, JSON.parse(o), i, t === "path"), [
		e,
		o,
		i,
		t
	]);
}
function Yl(e, t, n) {
	Y(Rl(), "useRoutes() may be used only in the context of a <Router> component.");
	let { navigator: r } = a($), { matches: i } = a(Al), o = i[i.length - 1], s = o ? o.params : {}, c = o ? o.pathname : "/", l = o ? o.pathnameBase : "/", u = o && o.route;
	{
		let e = u && u.path || "";
		mu(c, !u || e.endsWith("*") || e.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === "/" ? "*" : `${e}/*`}">.`);
	}
	let d = zl(), p;
	if (t) {
		let e = typeof t == "string" ? ko(t) : t;
		Y(l === "/" || e.pathname?.startsWith(l), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${e.pathname}" was given in the \`location\` prop.`), p = e;
	} else p = d;
	let m = p.pathname || "/", h = m;
	if (l !== "/") {
		let e = l.replace(/^\//, "").split("/");
		h = "/" + m.replace(/^\//, "").split("/").slice(e.length).join("/");
	}
	let g = n && n.state.matches.length ? n.state.matches.map((e) => Object.assign(e, { route: n.manifest[e.route.id] || e.route })) : Vo(e, { pathname: h });
	X(u || g != null, `No routes matched location "${p.pathname}${p.search}${p.hash}" `), X(g == null || g[g.length - 1].route.element !== void 0 || g[g.length - 1].route.Component !== void 0 || g[g.length - 1].route.lazy !== void 0, `Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
	let _ = nu(g && g.map((e) => Object.assign({}, e, {
		params: Object.assign({}, s, e.params),
		pathname: vs([l, r.encodeLocation ? r.encodeLocation(e.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathname]),
		pathnameBase: e.pathnameBase === "/" ? l : vs([l, r.encodeLocation ? r.encodeLocation(e.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathnameBase])
	})), i, n);
	return t && _ ? /* @__PURE__ */ f(kl.Provider, { value: {
		location: {
			pathname: "/",
			search: "",
			hash: "",
			state: null,
			key: "default",
			mask: void 0,
			...p
		},
		navigationType: "POP"
	} }, _) : _;
}
function Xl() {
	let e = du(), t = Ts(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, r = "rgba(200,200,200, 0.5)", i = {
		padding: "0.5rem",
		backgroundColor: r
	}, a = {
		padding: "2px 4px",
		backgroundColor: r
	}, o = null;
	return console.error("Error handled by React Router default ErrorBoundary:", e), o = /* @__PURE__ */ f(g, null, /* @__PURE__ */ f("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ f("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ f("code", { style: a }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ f("code", { style: a }, "errorElement"), " prop on your route.")), /* @__PURE__ */ f(g, null, /* @__PURE__ */ f("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ f("h3", { style: { fontStyle: "italic" } }, t), n ? /* @__PURE__ */ f("pre", { style: i }, n) : null, o);
}
var Zl = /* @__PURE__ */ f(Xl, null), Ql = class extends m {
	constructor(e) {
		super(e), this.state = {
			location: e.location,
			revalidation: e.revalidation,
			error: e.error
		};
	}
	static getDerivedStateFromError(e) {
		return { error: e };
	}
	static getDerivedStateFromProps(e, t) {
		return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
			error: e.error,
			location: e.location,
			revalidation: e.revalidation
		} : {
			error: e.error === void 0 ? t.error : e.error,
			location: t.location,
			revalidation: e.revalidation || t.revalidation
		};
	}
	componentDidCatch(e, t) {
		this.props.onError ? this.props.onError(e, t) : console.error("React Router caught the following error during render", e);
	}
	render() {
		let e = this.state.error;
		if (this.context && typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
			let t = Il(e.digest);
			t && (e = t);
		}
		let t = e === void 0 ? this.props.children : /* @__PURE__ */ f(Al.Provider, { value: this.props.routeContext }, /* @__PURE__ */ f(jl.Provider, {
			value: e,
			children: this.props.component
		}));
		return this.context ? /* @__PURE__ */ f(eu, { error: e }, t) : t;
	}
};
Ql.contextType = wl;
var $l = /* @__PURE__ */ new WeakMap();
function eu({ children: e, error: t }) {
	let { basename: n, navigator: r } = a($);
	if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
		let e = Fl(t.digest);
		if (e) {
			let i = $l.get(t);
			if (i) throw i;
			let a = Os(e.location, n), o = a.absoluteURL || a.to;
			if (Ws(e.location, o, Vs(r), "allow-explicit"), Rc(o)) throw Error("Invalid redirect location");
			if (Ds && !$l.get(t)) if (a.isExternal || e.reloadDocument) window.location.href = o;
			else {
				let n = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(a.to, { replace: e.replace }));
				throw $l.set(t, n), n;
			}
			return /* @__PURE__ */ f("meta", {
				httpEquiv: "refresh",
				content: `0;url=${o}`
			});
		}
	}
	return e;
}
function tu({ routeContext: e, match: t, children: n }) {
	let r = a(Sl);
	return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ f(Al.Provider, { value: e }, n);
}
function nu(e, t = [], n) {
	let r = n?.state;
	if (e == null) {
		if (!r) return null;
		if (r.errors) e = r.matches;
		else if (t.length === 0 && !r.initialized && r.matches.length > 0) e = r.matches;
		else return null;
	}
	let i = e, a = r?.errors;
	if (a != null) {
		let e = i.findIndex((e) => e.route.id && a?.[e.route.id] !== void 0);
		Y(e >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`), i = i.slice(0, Math.min(i.length, e + 1));
	}
	let o = !1, s = -1;
	if (n && r) {
		o = r.renderFallback;
		for (let e = 0; e < i.length; e++) {
			let t = i[e];
			if ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (s = e), t.route.id) {
				let { loaderData: e, errors: a } = r, c = t.route.loader && !e.hasOwnProperty(t.route.id) && (!a || a[t.route.id] === void 0);
				if (t.route.lazy || c) {
					n.isStatic && (o = !0), i = s >= 0 ? i.slice(0, s + 1) : [i[0]];
					break;
				}
			}
		}
	}
	let c = n?.onError, l = r && c ? (e, t) => {
		c(e, {
			location: r.location,
			params: r.matches?.[0]?.params ?? {},
			pattern: Es(r.matches),
			errorInfo: t
		});
	} : void 0;
	return i.reduceRight((e, n, c) => {
		let u, d = !1, p = null, m = null;
		r && (u = a && n.route.id ? a[n.route.id] : void 0, p = n.route.errorElement || Zl, o && (s < 0 && c === 0 ? (mu("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), d = !0, m = null) : s === c && (d = !0, m = n.route.hydrateFallbackElement || null)));
		let h = t.concat(i.slice(0, c + 1)), g = () => {
			let t;
			return t = u ? p : d ? m : n.route.Component ? /* @__PURE__ */ f(n.route.Component, null) : n.route.element ? n.route.element : e, /* @__PURE__ */ f(tu, {
				match: n,
				routeContext: {
					outlet: e,
					matches: h,
					isDataRoute: r != null
				},
				children: t
			});
		};
		return r && (n.route.ErrorBoundary || n.route.errorElement || c === 0) ? /* @__PURE__ */ f(Ql, {
			location: r.location,
			revalidation: r.revalidation,
			component: p,
			error: u,
			children: g(),
			routeContext: {
				outlet: null,
				matches: h,
				isDataRoute: !0
			},
			onError: l
		}) : g();
	}, null);
}
function ru(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function iu(e) {
	let t = a(Sl);
	return Y(t, ru(e)), t;
}
function au(e) {
	let t = a(Cl);
	return Y(t, ru(e)), t;
}
function ou(e) {
	let t = a(Al);
	return Y(t, ru(e)), t;
}
function su(e) {
	let t = ou(e), n = t.matches[t.matches.length - 1];
	return Y(n.route.id, `${e} can only be used on routes that contain a unique "id"`), n.route.id;
}
function cu() {
	return su("useRouteId");
}
function lu() {
	let e = au("useNavigation");
	return r(() => {
		let { matches: t, historyAction: n, ...r } = e.navigation;
		return r;
	}, [e.navigation]);
}
function uu() {
	let { matches: e, loaderData: t } = au("useMatches");
	return r(() => e.map((e) => Uo(e, t)), [e, t]);
}
function du() {
	let e = a(jl), t = au("useRouteError"), n = su("useRouteError");
	return e === void 0 ? t.errors?.[n] : e;
}
function fu() {
	let { router: e } = iu("useNavigate"), t = su("useNavigate"), n = y(!1);
	return Hl(() => {
		n.current = !0;
	}), u(async (r, i = {}) => {
		X(n.current, Vl), n.current && (typeof r == "number" ? await e.navigate(r) : await e.navigate(r, {
			fromRouteId: t,
			...i
		}));
	}, [e, t]);
}
var pu = {};
function mu(e, t, n) {
	!t && !pu[e] && (pu[e] = !0, X(!1, n));
}
var hu = {};
function gu(e, t) {
	!e && !hu[t] && (hu[t] = !0, console.warn(t));
}
var _u = () => void 0;
function vu(e) {
	return [e, _u];
}
function yu(e) {
	let t = { hasErrorBoundary: e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null };
	return e.Component && (e.element && X(!1, "You should not include both `Component` and `element` on your route - `Component` will be used."), Object.assign(t, {
		element: f(e.Component),
		Component: void 0
	})), e.HydrateFallback && (e.hydrateFallbackElement && X(!1, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."), Object.assign(t, {
		hydrateFallbackElement: f(e.HydrateFallback),
		HydrateFallback: void 0
	})), e.ErrorBoundary && (e.errorElement && X(!1, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."), Object.assign(t, {
		errorElement: f(e.ErrorBoundary),
		ErrorBoundary: void 0
	})), t;
}
var bu = ["HydrateFallback", "hydrateFallbackElement"], xu = class {
	constructor() {
		this.status = "pending", this.promise = new Promise((e, t) => {
			this.resolve = (t) => {
				this.status === "pending" && (this.status = "resolved", e(t));
			}, this.reject = (e) => {
				this.status === "pending" && (this.status = "rejected", t(e));
			};
		});
	}
};
function Su({ router: e, flushSync: t, onError: n, useTransitions: a }) {
	a = Tl() || a;
	let [o, s] = i(e.state), [c, l] = vu(o), [p, m] = i(), [h, _] = i({ isTransitioning: !1 }), [x, S] = i(), [C, w] = i(), [T, E] = i(), D = y(/* @__PURE__ */ new Map()), O = u((r, { deletedFetchers: i, newErrors: o, flushSync: c, viewTransitionOpts: u }) => {
		o && n && Object.values(o).forEach((e) => n(e, {
			location: r.location,
			params: r.matches[0]?.params ?? {},
			pattern: Es(r.matches)
		})), r.fetchers.forEach((e, t) => {
			e.data !== void 0 && D.current.set(t, e.data);
		}), i.forEach((e) => D.current.delete(e)), gu(c === !1 || t != null, "You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from \"react-router/dom\"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.");
		let f = e.window != null && e.window.document != null && typeof e.window.document.startViewTransition == "function";
		if (gu(u == null || f, "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."), !u || !f) {
			t && c ? t(() => s(r)) : a === !1 ? s(r) : d(() => {
				a === !0 && l((e) => Cu(e, r)), s(r);
			});
			return;
		}
		if (t && c) {
			t(() => {
				C && (x?.resolve(), C.skipTransition()), _({
					isTransitioning: !0,
					flushSync: !0,
					currentLocation: u.currentLocation,
					nextLocation: u.nextLocation
				});
			});
			let n = e.window.document.startViewTransition(() => {
				t(() => s(r));
			});
			n.finished.finally(() => {
				t(() => {
					S(void 0), w(void 0), m(void 0), _({ isTransitioning: !1 });
				});
			}), t(() => w(n));
			return;
		}
		C ? (x?.resolve(), C.skipTransition(), E({
			state: r,
			currentLocation: u.currentLocation,
			nextLocation: u.nextLocation
		})) : (m(r), _({
			isTransitioning: !0,
			flushSync: !1,
			currentLocation: u.currentLocation,
			nextLocation: u.nextLocation
		}));
	}, [
		e.window,
		t,
		C,
		x,
		a,
		l,
		n
	]);
	b(() => e.subscribe(O), [e, O]), v(() => {
		h.isTransitioning && !h.flushSync && S(new xu());
	}, [h]), v(() => {
		if (x && p && e.window) {
			let t = p, n = x.promise, r = e.window.document.startViewTransition(async () => {
				a === !1 ? s(t) : d(() => {
					a === !0 && l((e) => Cu(e, t)), s(t);
				}), await n;
			});
			r.finished.finally(() => {
				S(void 0), w(void 0), m(void 0), _({ isTransitioning: !1 });
			}), w(r);
		}
	}, [
		p,
		x,
		e.window,
		a,
		l
	]), v(() => {
		x && p && c.location.key === p.location.key && x.resolve();
	}, [
		x,
		C,
		c.location,
		p
	]), v(() => {
		!h.isTransitioning && T && (m(T.state), _({
			isTransitioning: !0,
			flushSync: !1,
			currentLocation: T.currentLocation,
			nextLocation: T.nextLocation
		}), E(void 0));
	}, [h.isTransitioning, T]);
	let k = r(() => ({
		createHref: e.createHref,
		createURL: e.createURL,
		encodeLocation: e.encodeLocation,
		go: (t) => e.navigate(t),
		push: (t, n, r) => e.navigate(t, {
			state: n,
			preventScrollReset: r?.preventScrollReset
		}),
		replace: (t, n, r) => e.navigate(t, {
			replace: !0,
			state: n,
			preventScrollReset: r?.preventScrollReset
		})
	}), [e]), A = e.basename || "/", j = r(() => ({
		router: e,
		navigator: k,
		static: !1,
		basename: A,
		onError: n
	}), [
		e,
		k,
		A,
		n
	]);
	return /* @__PURE__ */ f(g, null, /* @__PURE__ */ f(Sl.Provider, { value: j }, /* @__PURE__ */ f(Cl.Provider, { value: c }, /* @__PURE__ */ f(Dl.Provider, { value: D.current }, /* @__PURE__ */ f(El.Provider, { value: h }, /* @__PURE__ */ f(Ou, {
		basename: A,
		location: c.location,
		navigationType: c.historyAction,
		navigator: k,
		useTransitions: a
	}, /* @__PURE__ */ f(wu, {
		routes: e.routes,
		manifest: e.manifest,
		future: e.future,
		state: c,
		isStatic: !1,
		onError: n
	})))))), null);
}
function Cu(e, t) {
	return {
		...e,
		navigation: t.navigation.state === "idle" ? e.navigation : t.navigation,
		revalidation: t.revalidation === "idle" ? e.revalidation : t.revalidation,
		actionData: t.navigation.state === "submitting" ? e.actionData : t.actionData,
		fetchers: t.fetchers
	};
}
var wu = p(Tu);
function Tu({ routes: e, manifest: t, future: n, state: r, isStatic: i, onError: a }) {
	return Yl(e, void 0, {
		manifest: t,
		state: r,
		isStatic: i,
		onError: a,
		future: n
	});
}
function Eu({ to: e, replace: t, state: n, relative: r }) {
	Y(Rl(), "<Navigate> may be used only in the context of a <Router> component.");
	let { static: i, navigator: o } = a($);
	X(!i, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
	let { matches: s } = a(Al), { pathname: c } = zl(), l = Ul(), u = gs(e, hs(s), c, r === "path");
	Ws(typeof e == "string" ? e : Z(e), o.createHref(u), Vs(o), "reject");
	let d = JSON.stringify(u);
	return v(() => {
		l(JSON.parse(d), {
			replace: t,
			state: n,
			relative: r
		});
	}, [
		l,
		d,
		r,
		t,
		n
	]), null;
}
function Du(e) {
	return Kl(e.context);
}
function Ou({ basename: e = "/", children: t = null, location: n, navigationType: i = "POP", navigator: a, static: o = !1, useTransitions: s }) {
	Y(!Rl(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
	let c = e.replace(/^\/*/, "/"), l = r(() => ({
		basename: c,
		navigator: a,
		static: o,
		useTransitions: s,
		future: {}
	}), [
		c,
		a,
		o,
		s
	]);
	typeof n == "string" && (n = ko(n));
	let { pathname: u = "/", search: d = "", hash: p = "", state: m = null, key: h = "default", mask: g } = n, _ = r(() => {
		let e = cs(u, c);
		return e == null ? null : {
			location: {
				pathname: e,
				search: d,
				hash: p,
				state: m,
				key: h,
				mask: g
			},
			navigationType: i
		};
	}, [
		c,
		u,
		d,
		p,
		m,
		h,
		i,
		g
	]);
	return X(_ != null, `<Router basename="${c}"> is not able to match the URL "${u}${d}${p}" because it does not start with the basename, so the <Router> won't render anything.`), _ == null ? null : /* @__PURE__ */ f($.Provider, { value: l }, /* @__PURE__ */ f(kl.Provider, {
		children: t,
		value: _
	}));
}
var ku = "get", Au = "application/x-www-form-urlencoded";
function ju(e) {
	return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function Mu(e) {
	return ju(e) && e.tagName.toLowerCase() === "button";
}
function Nu(e) {
	return ju(e) && e.tagName.toLowerCase() === "form";
}
function Pu(e) {
	return ju(e) && e.tagName.toLowerCase() === "input";
}
function Fu(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Iu(e, t) {
	return e.button === 0 && (!t || t === "_self") && !Fu(e);
}
var Lu = null;
function Ru() {
	if (Lu === null) try {
		new FormData(document.createElement("form"), 0), Lu = !1;
	} catch {
		Lu = !0;
	}
	return Lu;
}
var zu = /* @__PURE__ */ new Set([
	"application/x-www-form-urlencoded",
	"multipart/form-data",
	"text/plain"
]);
function Bu(e) {
	return e != null && !zu.has(e) ? (X(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Au}"`), null) : e;
}
function Vu(e, t) {
	let n, r, i, a, o;
	if (Nu(e)) {
		let o = e.getAttribute("action");
		r = o ? cs(o, t) : null, n = e.getAttribute("method") || ku, i = Bu(e.getAttribute("enctype")) || Au, a = new FormData(e);
	} else if (Mu(e) || Pu(e) && (e.type === "submit" || e.type === "image")) {
		let o = e.form;
		if (o == null) throw Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
		let s = e.getAttribute("formaction") || o.getAttribute("action");
		if (r = s ? cs(s, t) : null, n = e.getAttribute("formmethod") || o.getAttribute("method") || ku, i = Bu(e.getAttribute("formenctype")) || Bu(o.getAttribute("enctype")) || Au, a = new FormData(o, e), !Ru()) {
			let { name: t, type: n, value: r } = e;
			if (n === "image") {
				let e = t ? `${t}.` : "";
				a.append(`${e}x`, "0"), a.append(`${e}y`, "0");
			} else t && a.append(t, r);
		}
	} else if (ju(e)) throw Error("Cannot submit element that is not <form>, <button>, or <input type=\"submit|image\">");
	else n = ku, r = null, i = Au, o = e;
	return a && i === "text/plain" && (o = a, a = void 0), {
		action: r,
		method: n.toLowerCase(),
		encType: i,
		formData: a,
		body: o
	};
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Hu = {
	"&": "\\u0026",
	">": "\\u003e",
	"<": "\\u003c",
	"\u2028": "\\u2028",
	"\u2029": "\\u2029"
}, Uu = /[&><\u2028\u2029]/g;
function Wu(e) {
	return e.replace(Uu, (e) => Hu[e]);
}
function Gu(e, t) {
	if (e === !1 || e == null) throw Error(t);
}
function Ku(e, t, n, r) {
	let i = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
	return n ? i.pathname.endsWith("/") ? i.pathname = `${i.pathname}_.${r}` : i.pathname = `${i.pathname}.${r}` : i.pathname === "/" ? i.pathname = `_root.${r}` : t && cs(i.pathname, t) === "/" ? i.pathname = `${ys(t)}/_root.${r}` : i.pathname = `${ys(i.pathname)}.${r}`, i;
}
async function qu(e, t) {
	if (e.id in t) return t[e.id];
	try {
		let n = await import(
			/* @vite-ignore */
			/* webpackIgnore: true */
			e.module
);
		return t[e.id] = n, n;
	} catch (t) {
		return console.error(`Error loading route module \`${e.module}\`, reloading page...`), console.error(t), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {});
	}
}
function Ju(e) {
	return e != null && typeof e.page == "string";
}
function Yu(e) {
	return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function Xu(e, t, n) {
	return td((await Promise.all(e.map(async (e) => {
		let r = t.routes[e.route.id];
		if (r) {
			let e = await qu(r, n);
			return e.links ? e.links() : [];
		}
		return [];
	}))).flat(1).filter(Yu).filter((e) => e.rel === "stylesheet" || e.rel === "preload").map((e) => e.rel === "stylesheet" ? {
		...e,
		rel: "prefetch",
		as: "style"
	} : {
		...e,
		rel: "prefetch"
	}));
}
function Zu(e, t, n, r, i, a) {
	let o = (e, t) => n[t] ? e.route.id !== n[t].route.id : !0, s = (e, t) => n[t].pathname !== e.pathname || n[t].route.path?.endsWith("*") && n[t].params["*"] !== e.params["*"];
	return a === "assets" ? t.filter((e, t) => o(e, t) || s(e, t)) : a === "data" ? t.filter((t, a) => {
		let c = r.routes[t.route.id];
		if (!c || !c.hasLoader) return !1;
		if (o(t, a) || s(t, a)) return !0;
		if (t.route.shouldRevalidate) {
			let r = t.route.shouldRevalidate({
				currentUrl: new URL(i.pathname + i.search + i.hash, window.origin),
				currentParams: n[0]?.params || {},
				nextUrl: new URL(e, window.origin),
				nextParams: t.params,
				defaultShouldRevalidate: !0
			});
			if (typeof r == "boolean") return r;
		}
		return !0;
	}) : [];
}
function Qu(e, t, { includeHydrateFallback: n } = {}) {
	return $u(e.map((e) => {
		let r = t.routes[e.route.id];
		if (!r) return [];
		let i = [r.module];
		return r.clientActionModule && (i = i.concat(r.clientActionModule)), r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)), n && r.hydrateFallbackModule && (i = i.concat(r.hydrateFallbackModule)), r.imports && (i = i.concat(r.imports)), i;
	}).flat(1));
}
function $u(e) {
	return [...new Set(e)];
}
function ed(e) {
	let t = {}, n = Object.keys(e).sort();
	for (let r of n) t[r] = e[r];
	return t;
}
function td(e, t) {
	let n = /* @__PURE__ */ new Set(), r = new Set(t);
	return e.reduce((e, i) => {
		if (t && !Ju(i) && i.as === "script" && i.href && r.has(i.href)) return e;
		let a = JSON.stringify(ed(i));
		return n.has(a) || (n.add(a), e.push({
			key: a,
			link: i
		})), e;
	}, []);
}
function nd() {
	let e = a(Sl);
	return Gu(e, "You must render this element inside a <DataRouterContext.Provider> element"), e;
}
function rd() {
	let e = a(Cl);
	return Gu(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e;
}
var id = s(void 0);
id.displayName = "FrameworkContext";
function ad() {
	let e = a(id);
	return Gu(e, "You must render this element inside a <HydratedRouter> element"), e;
}
function od(e, t) {
	let n = a(id), [r, o] = i(!1), [s, c] = i(!1), { onFocus: l, onBlur: u, onMouseEnter: d, onMouseLeave: f, onTouchStart: p } = t, m = y(null);
	v(() => {
		if (e === "render" && c(!0), e === "viewport") {
			let e = new IntersectionObserver((e) => {
				e.forEach((e) => {
					c(e.isIntersecting);
				});
			}, { threshold: .5 });
			return m.current && e.observe(m.current), () => {
				e.disconnect();
			};
		}
	}, [e]), v(() => {
		if (r) {
			let e = setTimeout(() => {
				c(!0);
			}, 100);
			return () => {
				clearTimeout(e);
			};
		}
	}, [r]);
	let h = () => {
		o(!0);
	}, g = () => {
		o(!1), c(!1);
	};
	return n ? e === "intent" ? [
		s,
		m,
		{
			onFocus: sd(l, h),
			onBlur: sd(u, g),
			onMouseEnter: sd(d, h),
			onMouseLeave: sd(f, g),
			onTouchStart: sd(p, h)
		}
	] : [
		s,
		m,
		{}
	] : [
		!1,
		m,
		{}
	];
}
function sd(e, t) {
	return (n) => {
		e && e(n), n.defaultPrevented || t(n);
	};
}
function cd({ page: e, ...t }) {
	let n = Tl(), { nonce: i } = ad(), { router: a } = nd(), o = r(() => Vo(a.routes, e, a.basename), [
		a.routes,
		e,
		a.basename
	]);
	return o ? (t.nonce == null && i && (t = {
		...t,
		nonce: i
	}), f(n ? ud : dd, {
		page: e,
		matches: o,
		...t
	})) : null;
}
function ld(e) {
	let { manifest: t, routeModules: n } = ad(), [r, a] = i([]);
	return v(() => {
		let r = !1;
		return Xu(e, t, n).then((e) => {
			r || a(e);
		}), () => {
			r = !0;
		};
	}, [
		e,
		t,
		n
	]), r;
}
function ud({ page: e, matches: t, ...n }) {
	let i = zl(), { future: a } = ad(), { basename: o } = nd();
	return /* @__PURE__ */ f(g, null, r(() => {
		if (e === i.pathname + i.search + i.hash) return [];
		let n = Ku(e, o, a.v8_trailingSlashAwareDataRequests, "rsc"), r = !1, s = [];
		for (let e of t) typeof e.route.shouldRevalidate == "function" ? r = !0 : s.push(e.route.id);
		return r && s.length > 0 && n.searchParams.set("_routes", s.join(",")), [n.pathname + n.search];
	}, [
		o,
		a.v8_trailingSlashAwareDataRequests,
		e,
		i,
		t
	]).map((e) => /* @__PURE__ */ f("link", {
		key: e,
		rel: "prefetch",
		as: "fetch",
		href: e,
		...n
	})));
}
function dd({ page: e, matches: t, ...n }) {
	let i = zl(), { future: a, manifest: o, routeModules: s } = ad(), { basename: c } = nd(), { loaderData: l, matches: u } = rd(), d = r(() => Zu(e, t, u, o, i, "data"), [
		e,
		t,
		u,
		o,
		i
	]), p = r(() => Zu(e, t, u, o, i, "assets"), [
		e,
		t,
		u,
		o,
		i
	]), m = r(() => {
		if (e === i.pathname + i.search + i.hash) return [];
		let n = /* @__PURE__ */ new Set(), r = !1;
		if (t.forEach((e) => {
			let t = o.routes[e.route.id];
			!t || !t.hasLoader || (!d.some((t) => t.route.id === e.route.id) && e.route.id in l && s[e.route.id]?.shouldRevalidate || t.hasClientLoader ? r = !0 : n.add(e.route.id));
		}), n.size === 0) return [];
		let u = Ku(e, c, a.v8_trailingSlashAwareDataRequests, "data");
		return r && n.size > 0 && u.searchParams.set("_routes", t.filter((e) => n.has(e.route.id)).map((e) => e.route.id).join(",")), [u.pathname + u.search];
	}, [
		c,
		a.v8_trailingSlashAwareDataRequests,
		l,
		i,
		o,
		d,
		t,
		e,
		s
	]), h = r(() => Qu(p, o), [p, o]), _ = ld(p);
	return /* @__PURE__ */ f(g, null, m.map((e) => /* @__PURE__ */ f("link", {
		key: e,
		rel: "prefetch",
		as: "fetch",
		href: e,
		...n
	})), h.map((e) => /* @__PURE__ */ f("link", {
		key: e,
		rel: "modulepreload",
		href: e,
		...n
	})), _.map(({ key: e, link: t }) => /* @__PURE__ */ f("link", {
		key: e,
		nonce: n.nonce,
		...t,
		crossOrigin: t.crossOrigin ?? n.crossOrigin
	})));
}
function fd(...e) {
	return (t) => {
		e.forEach((e) => {
			typeof e == "function" ? e(t) : e != null && (e.current = t);
		});
	};
}
var pd = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
try {
	pd && (window.__reactRouterVersion = "7.18.4");
} catch {}
function md(e, t) {
	return cc({
		basename: t?.basename,
		getContext: t?.getContext,
		future: t?.future,
		history: To({ window: t?.window }),
		hydrationData: t?.hydrationData || hd(),
		routes: e,
		mapRouteProperties: yu,
		hydrationRouteProperties: bu,
		dataStrategy: t?.dataStrategy,
		patchRoutesOnNavigation: t?.patchRoutesOnNavigation,
		window: t?.window,
		instrumentations: t?.instrumentations
	}).initialize();
}
function hd() {
	let e = window?.__staticRouterHydrationData;
	return e && e.errors && (e = {
		...e,
		errors: gd(e.errors)
	}), e;
}
function gd(e) {
	if (!e) return null;
	let t = Object.entries(e), n = {};
	for (let [e, r] of t) if (r && r.__type === "RouteErrorResponse") n[e] = new ws(r.status, r.statusText, r.data, r.internal === !0);
	else if (r && r.__type === "Error") {
		if (typeof r.__subType == "string" && Cs.includes(r.__subType)) {
			let t = window[r.__subType];
			if (typeof t == "function") try {
				let i = new t(r.message);
				i.stack = "", n[e] = i;
			} catch {}
		}
		if (n[e] == null) {
			let t = Error(r.message);
			t.stack = "", n[e] = t;
		}
	} else n[e] = r;
	return n;
}
function _d({ basename: e, children: t, history: n, useTransitions: r }) {
	let [a, o] = i({
		action: n.action,
		location: n.location
	}), s = u((e) => {
		r === !1 ? o(e) : d(() => o(e));
	}, [r]);
	return b(() => n.listen(s), [n, s]), /* @__PURE__ */ f(Ou, {
		basename: e,
		children: t,
		location: a.location,
		navigationType: a.action,
		navigator: n,
		useTransitions: r
	});
}
_d.displayName = "unstable_HistoryRouter";
var vd = _(function({ onClick: e, discover: t = "render", prefetch: n = "none", relative: r, reloadDocument: i, replace: o, mask: s, state: c, target: l, to: u, preventScrollReset: d, viewTransition: p, defaultShouldRevalidate: m, ...h }, _) {
	let { basename: v, navigator: y, useTransitions: b } = a($), x = typeof u == "string" && bo.test(u), S = Os(u, v);
	u = S.to;
	let C = Ll(u, { relative: r }), w = zl(), T = null;
	if (s) {
		let e = gs(s, [], w.mask ? w.mask.pathname : "/", !0);
		v !== "/" && (e.pathname = e.pathname === "/" ? v : vs([v, e.pathname])), T = y.createHref(e);
	}
	let [E, D, O] = od(n, h), k = Td(u, {
		replace: o,
		mask: s,
		state: c,
		target: l,
		preventScrollReset: d,
		relative: r,
		viewTransition: p,
		defaultShouldRevalidate: m,
		useTransitions: b
	});
	function A(t) {
		e && e(t), t.defaultPrevented || k(t);
	}
	let j = !(S.isExternal || i), M = /* @__PURE__ */ f("a", {
		...h,
		...O,
		href: (j ? T : void 0) || S.absoluteURL || C,
		onClick: j ? A : e,
		ref: fd(_, D),
		target: l,
		"data-discover": !x && t === "render" ? "true" : void 0
	});
	return E && !x ? /* @__PURE__ */ f(g, null, M, /* @__PURE__ */ f(cd, { page: C })) : M;
});
vd.displayName = "Link";
var yd = _(function({ "aria-current": e = "page", caseSensitive: t = !1, className: n = "", end: r = !1, style: i, to: o, viewTransition: s, children: c, ...l }, u) {
	let d = Jl(o, { relative: l.relative }), p = zl(), m = a(Cl), { navigator: h, basename: g } = a($), _ = m != null && Fd(d) && s === !0, v = h.encodeLocation ? h.encodeLocation(d).pathname : d.pathname, y = p.pathname, b = m && m.navigation && m.navigation.location ? m.navigation.location.pathname : null;
	t || (y = y.toLowerCase(), b = b ? b.toLowerCase() : null, v = v.toLowerCase()), b && g && (b = cs(b, g) || b);
	let x = v !== "/" && v.endsWith("/") ? v.length - 1 : v.length, S = y === v || !r && y.startsWith(v) && y.charAt(x) === "/", C = b != null && (b === v || !r && b.startsWith(v) && b.charAt(v.length) === "/"), w = {
		isActive: S,
		isPending: C,
		isTransitioning: _
	}, T = S ? e : void 0, E;
	E = typeof n == "function" ? n(w) : [
		n,
		S ? "active" : null,
		C ? "pending" : null,
		_ ? "transitioning" : null
	].filter(Boolean).join(" ");
	let D = typeof i == "function" ? i(w) : i;
	return /* @__PURE__ */ f(vd, {
		...l,
		"aria-current": T,
		className: E,
		ref: u,
		style: D,
		to: o,
		viewTransition: s
	}, typeof c == "function" ? c(w) : c);
});
yd.displayName = "NavLink";
var bd = _(({ discover: e = "render", fetcherKey: t, navigate: n, reloadDocument: r, replace: i, state: o, method: s = ku, action: c, onSubmit: l, relative: u, preventScrollReset: p, viewTransition: m, defaultShouldRevalidate: h, ...g }, _) => {
	let { useTransitions: v } = a($), y = Od(), b = kd(c, { relative: u }), x = s.toLowerCase() === "get" ? "get" : "post", S = typeof c == "string" && bo.test(c);
	return /* @__PURE__ */ f("form", {
		ref: _,
		method: x,
		action: b,
		onSubmit: r ? l : (e) => {
			if (l && l(e), e.defaultPrevented) return;
			e.preventDefault();
			let r = e.nativeEvent.submitter, a = r?.getAttribute("formmethod") || s, c = () => y(r || e.currentTarget, {
				fetcherKey: t,
				method: a,
				navigate: n,
				replace: i,
				state: o,
				relative: u,
				preventScrollReset: p,
				viewTransition: m,
				defaultShouldRevalidate: h
			});
			v && n !== !1 ? d(() => c()) : c();
		},
		...g,
		"data-discover": !S && e === "render" ? "true" : void 0
	});
});
bd.displayName = "Form";
function xd({ getKey: e, storageKey: t, ...n }) {
	let i = a(id), { basename: o } = a($), s = zl(), c = uu();
	Nd({
		getKey: e,
		storageKey: t
	});
	let l = r(() => {
		if (!i || !e) return null;
		let t = Md(s, c, o, e);
		return t === s.key ? null : t;
	}, []);
	if (!i || i.isSpaMode) return null;
	let u = ((e, t) => {
		if (!window.history.state || !window.history.state.key) {
			let e = Math.random().toString(32).slice(2);
			window.history.replaceState({ key: e }, "");
		}
		try {
			let n = JSON.parse(sessionStorage.getItem(e) || "{}")[t || window.history.state.key];
			typeof n == "number" && window.scrollTo(0, n);
		} catch (t) {
			console.error(t), sessionStorage.removeItem(e);
		}
	}).toString();
	return n.nonce == null && i?.nonce && (n.nonce = i.nonce), /* @__PURE__ */ f("script", {
		...n,
		suppressHydrationWarning: !0,
		dangerouslySetInnerHTML: { __html: `(${u})(${Wu(JSON.stringify(t || Ad))}, ${Wu(JSON.stringify(l))})` }
	});
}
xd.displayName = "ScrollRestoration";
function Sd(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Cd(e) {
	let t = a(Sl);
	return Y(t, Sd(e)), t;
}
function wd(e) {
	let t = a(Cl);
	return Y(t, Sd(e)), t;
}
function Td(e, { target: t, replace: n, mask: r, state: i, preventScrollReset: a, relative: o, viewTransition: s, defaultShouldRevalidate: c, useTransitions: l } = {}) {
	let f = Ul(), p = zl(), m = Jl(e, { relative: o });
	return u((u) => {
		if (Iu(u, t)) {
			u.preventDefault();
			let t = n === void 0 ? Z(p) === Z(m) : n, h = () => f(e, {
				replace: t,
				mask: r,
				state: i,
				preventScrollReset: a,
				relative: o,
				viewTransition: s,
				defaultShouldRevalidate: c
			});
			l ? d(() => h()) : h();
		}
	}, [
		p,
		f,
		m,
		n,
		r,
		i,
		t,
		e,
		a,
		o,
		s,
		c,
		l
	]);
}
var Ed = 0, Dd = () => `__${String(++Ed)}__`;
function Od() {
	let { router: e } = Cd("useSubmit"), { basename: t } = a($), n = cu(), r = e.fetch, i = e.navigate;
	return u(async (e, a = {}) => {
		let { action: o, method: s, encType: c, formData: l, body: u } = Vu(e, t);
		if (a.navigate === !1) {
			let e = a.fetcherKey || Dd();
			await r(e, n, a.action || o, {
				defaultShouldRevalidate: a.defaultShouldRevalidate,
				preventScrollReset: a.preventScrollReset,
				formData: l,
				body: u,
				formMethod: a.method || s,
				formEncType: a.encType || c,
				flushSync: a.flushSync
			});
		} else await i(a.action || o, {
			defaultShouldRevalidate: a.defaultShouldRevalidate,
			preventScrollReset: a.preventScrollReset,
			formData: l,
			body: u,
			formMethod: a.method || s,
			formEncType: a.encType || c,
			replace: a.replace,
			state: a.state,
			fromRouteId: n,
			flushSync: a.flushSync,
			viewTransition: a.viewTransition
		});
	}, [
		r,
		i,
		t,
		n
	]);
}
function kd(e, { relative: t } = {}) {
	let { basename: n } = a($), r = a(Al);
	Y(r, "useFormAction must be used inside a RouteContext");
	let [i] = r.matches.slice(-1), o = { ...Jl(e || ".", { relative: t }) }, s = zl();
	if (e == null) {
		o.search = s.search;
		let e = new URLSearchParams(o.search), t = e.getAll("index");
		if (t.some((e) => e === "")) {
			e.delete("index"), t.filter((e) => e).forEach((t) => e.append("index", t));
			let n = e.toString();
			o.search = n ? `?${n}` : "";
		}
	}
	return (!e || e === ".") && i.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (o.pathname = o.pathname === "/" ? n : vs([n, o.pathname])), Z(o);
}
var Ad = "react-router-scroll-positions", jd = {};
function Md(e, t, n, r) {
	let i = null;
	return r && (i = r(n === "/" ? e : {
		...e,
		pathname: cs(e.pathname, n) || e.pathname
	}, t)), i ??= e.key, i;
}
function Nd({ getKey: e, storageKey: t } = {}) {
	let { router: n } = Cd("useScrollRestoration"), { restoreScrollPosition: r, preventScrollReset: i } = wd("useScrollRestoration"), { basename: o } = a($), s = zl(), c = uu(), l = lu();
	v(() => (window.history.scrollRestoration = "manual", () => {
		window.history.scrollRestoration = "auto";
	}), []), Pd(u(() => {
		if (l.state === "idle") {
			let t = Md(s, c, o, e);
			jd[t] = window.scrollY;
		}
		try {
			sessionStorage.setItem(t || Ad, JSON.stringify(jd));
		} catch (e) {
			X(!1, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`);
		}
		window.history.scrollRestoration = "auto";
	}, [
		l.state,
		e,
		o,
		s,
		c,
		t
	])), typeof document < "u" && (b(() => {
		try {
			let e = sessionStorage.getItem(t || Ad);
			e && (jd = JSON.parse(e));
		} catch {}
	}, [t]), b(() => {
		let t = n?.enableScrollRestoration(jd, () => window.scrollY, e ? (t, n) => Md(t, n, o, e) : void 0);
		return () => t && t();
	}, [
		n,
		o,
		e
	]), b(() => {
		if (r !== !1) {
			if (typeof r == "number") {
				window.scrollTo(0, r);
				return;
			}
			try {
				if (s.hash) {
					let e = document.getElementById(decodeURIComponent(s.hash.slice(1)));
					if (e) {
						e.scrollIntoView();
						return;
					}
				}
			} catch {
				X(!1, `"${s.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`);
			}
			i !== !0 && window.scrollTo(0, 0);
		}
	}, [
		s,
		r,
		i
	]));
}
function Pd(e, t) {
	let { capture: n } = t || {};
	v(() => {
		let t = n == null ? void 0 : { capture: n };
		return window.addEventListener("pagehide", e, t), () => {
			window.removeEventListener("pagehide", e, t);
		};
	}, [e, n]);
}
function Fd(e, { relative: t } = {}) {
	let n = a(El);
	Y(n != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
	let { basename: r } = Cd("useViewTransitionState"), i = Jl(e, { relative: t });
	if (!n.isTransitioning) return !1;
	let o = cs(n.currentLocation.pathname, r) || n.currentLocation.pathname, s = cs(n.nextLocation.pathname, r) || n.nextLocation.pathname;
	return is(i.pathname, s) != null || is(i.pathname, o) != null;
}
//#endregion
export { de as A, A as B, ze as C, Ce as D, Ee as E, oe as F, S as H, M as I, j as L, F as M, k as N, we as O, D as P, re as R, kr as S, Ae as T, x as U, w as V, Pa as _, md as a, Er as b, uu as c, ql as d, du as f, Ra as g, Ia as h, Su as i, ue as j, H as k, Ul as l, Qa as m, Eu as n, Vo as o, mo as p, Du as r, zl as s, vd as t, Bl as u, Fa as v, Ie as w, K as x, Tr as y, B as z };

//# sourceMappingURL=chunk-OB3PAWPO-BZOqgbiV.js.map