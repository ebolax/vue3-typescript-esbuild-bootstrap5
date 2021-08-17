(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/bootstrap/dist/js/bootstrap.bundle.min.js
  var require_bootstrap_bundle_min = __commonJS({
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"(exports, module) {
      !function(t, e) {
        typeof exports == "object" && typeof module != "undefined" ? module.exports = e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis != "undefined" ? globalThis : t || self).bootstrap = e();
      }(exports, function() {
        "use strict";
        const t = (t2) => {
          let e2 = t2.getAttribute("data-bs-target");
          if (!e2 || e2 === "#") {
            let i2 = t2.getAttribute("href");
            if (!i2 || !i2.includes("#") && !i2.startsWith("."))
              return null;
            i2.includes("#") && !i2.startsWith("#") && (i2 = "#" + i2.split("#")[1]), e2 = i2 && i2 !== "#" ? i2.trim() : null;
          }
          return e2;
        }, e = (e2) => {
          const i2 = t(e2);
          return i2 && document.querySelector(i2) ? i2 : null;
        }, i = (e2) => {
          const i2 = t(e2);
          return i2 ? document.querySelector(i2) : null;
        }, n = (t2) => {
          t2.dispatchEvent(new Event("transitionend"));
        }, s = (t2) => !(!t2 || typeof t2 != "object") && (t2.jquery !== void 0 && (t2 = t2[0]), t2.nodeType !== void 0), o = (t2) => s(t2) ? t2.jquery ? t2[0] : t2 : typeof t2 == "string" && t2.length > 0 ? document.querySelector(t2) : null, r = (t2, e2, i2) => {
          Object.keys(i2).forEach((n2) => {
            const o2 = i2[n2], r2 = e2[n2], a2 = r2 && s(r2) ? "element" : (l2 = r2) == null ? "" + l2 : {}.toString.call(l2).match(/\s([a-z]+)/i)[1].toLowerCase();
            var l2;
            if (!new RegExp(o2).test(a2))
              throw new TypeError(`${t2.toUpperCase()}: Option "${n2}" provided type "${a2}" but expected type "${o2}".`);
          });
        }, a = (t2) => !(!s(t2) || t2.getClientRects().length === 0) && getComputedStyle(t2).getPropertyValue("visibility") === "visible", l = (t2) => !t2 || t2.nodeType !== Node.ELEMENT_NODE || !!t2.classList.contains("disabled") || (t2.disabled !== void 0 ? t2.disabled : t2.hasAttribute("disabled") && t2.getAttribute("disabled") !== "false"), c = (t2) => {
          if (!document.documentElement.attachShadow)
            return null;
          if (typeof t2.getRootNode == "function") {
            const e2 = t2.getRootNode();
            return e2 instanceof ShadowRoot ? e2 : null;
          }
          return t2 instanceof ShadowRoot ? t2 : t2.parentNode ? c(t2.parentNode) : null;
        }, h2 = () => {
        }, d = (t2) => {
          t2.offsetHeight;
        }, u = () => {
          const { jQuery: t2 } = window;
          return t2 && !document.body.hasAttribute("data-bs-no-jquery") ? t2 : null;
        }, f = [], p2 = () => document.documentElement.dir === "rtl", m = (t2) => {
          var e2;
          e2 = () => {
            const e3 = u();
            if (e3) {
              const i2 = t2.NAME, n2 = e3.fn[i2];
              e3.fn[i2] = t2.jQueryInterface, e3.fn[i2].Constructor = t2, e3.fn[i2].noConflict = () => (e3.fn[i2] = n2, t2.jQueryInterface);
            }
          }, document.readyState === "loading" ? (f.length || document.addEventListener("DOMContentLoaded", () => {
            f.forEach((t3) => t3());
          }), f.push(e2)) : e2();
        }, g = (t2) => {
          typeof t2 == "function" && t2();
        }, _ = (t2, e2, i2 = true) => {
          if (!i2)
            return void g(t2);
          const s2 = ((t3) => {
            if (!t3)
              return 0;
            let { transitionDuration: e3, transitionDelay: i3 } = window.getComputedStyle(t3);
            const n2 = Number.parseFloat(e3), s3 = Number.parseFloat(i3);
            return n2 || s3 ? (e3 = e3.split(",")[0], i3 = i3.split(",")[0], 1e3 * (Number.parseFloat(e3) + Number.parseFloat(i3))) : 0;
          })(e2) + 5;
          let o2 = false;
          const r2 = ({ target: i3 }) => {
            i3 === e2 && (o2 = true, e2.removeEventListener("transitionend", r2), g(t2));
          };
          e2.addEventListener("transitionend", r2), setTimeout(() => {
            o2 || n(e2);
          }, s2);
        }, b = (t2, e2, i2, n2) => {
          let s2 = t2.indexOf(e2);
          if (s2 === -1)
            return t2[!i2 && n2 ? t2.length - 1 : 0];
          const o2 = t2.length;
          return s2 += i2 ? 1 : -1, n2 && (s2 = (s2 + o2) % o2), t2[Math.max(0, Math.min(s2, o2 - 1))];
        }, v = /[^.]*(?=\..*)\.|.*/, y = /\..*/, w = /::\d+$/, E = {};
        let A = 1;
        const T = { mouseenter: "mouseover", mouseleave: "mouseout" }, O = /^(mouseenter|mouseleave)/i, C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
        function k(t2, e2) {
          return e2 && `${e2}::${A++}` || t2.uidEvent || A++;
        }
        function L(t2) {
          const e2 = k(t2);
          return t2.uidEvent = e2, E[e2] = E[e2] || {}, E[e2];
        }
        function x(t2, e2, i2 = null) {
          const n2 = Object.keys(t2);
          for (let s2 = 0, o2 = n2.length; s2 < o2; s2++) {
            const o3 = t2[n2[s2]];
            if (o3.originalHandler === e2 && o3.delegationSelector === i2)
              return o3;
          }
          return null;
        }
        function D(t2, e2, i2) {
          const n2 = typeof e2 == "string", s2 = n2 ? i2 : e2;
          let o2 = I(t2);
          return C.has(o2) || (o2 = t2), [n2, s2, o2];
        }
        function S(t2, e2, i2, n2, s2) {
          if (typeof e2 != "string" || !t2)
            return;
          if (i2 || (i2 = n2, n2 = null), O.test(e2)) {
            const t3 = (t4) => function(e3) {
              if (!e3.relatedTarget || e3.relatedTarget !== e3.delegateTarget && !e3.delegateTarget.contains(e3.relatedTarget))
                return t4.call(this, e3);
            };
            n2 ? n2 = t3(n2) : i2 = t3(i2);
          }
          const [o2, r2, a2] = D(e2, i2, n2), l2 = L(t2), c2 = l2[a2] || (l2[a2] = {}), h3 = x(c2, r2, o2 ? i2 : null);
          if (h3)
            return void (h3.oneOff = h3.oneOff && s2);
          const d2 = k(r2, e2.replace(v, "")), u2 = o2 ? function(t3, e3, i3) {
            return function n3(s3) {
              const o3 = t3.querySelectorAll(e3);
              for (let { target: r3 } = s3; r3 && r3 !== this; r3 = r3.parentNode)
                for (let a3 = o3.length; a3--; )
                  if (o3[a3] === r3)
                    return s3.delegateTarget = r3, n3.oneOff && P.off(t3, s3.type, e3, i3), i3.apply(r3, [s3]);
              return null;
            };
          }(t2, i2, n2) : function(t3, e3) {
            return function i3(n3) {
              return n3.delegateTarget = t3, i3.oneOff && P.off(t3, n3.type, e3), e3.apply(t3, [n3]);
            };
          }(t2, i2);
          u2.delegationSelector = o2 ? i2 : null, u2.originalHandler = r2, u2.oneOff = s2, u2.uidEvent = d2, c2[d2] = u2, t2.addEventListener(a2, u2, o2);
        }
        function N(t2, e2, i2, n2, s2) {
          const o2 = x(e2[i2], n2, s2);
          o2 && (t2.removeEventListener(i2, o2, Boolean(s2)), delete e2[i2][o2.uidEvent]);
        }
        function I(t2) {
          return t2 = t2.replace(y, ""), T[t2] || t2;
        }
        const P = { on(t2, e2, i2, n2) {
          S(t2, e2, i2, n2, false);
        }, one(t2, e2, i2, n2) {
          S(t2, e2, i2, n2, true);
        }, off(t2, e2, i2, n2) {
          if (typeof e2 != "string" || !t2)
            return;
          const [s2, o2, r2] = D(e2, i2, n2), a2 = r2 !== e2, l2 = L(t2), c2 = e2.startsWith(".");
          if (o2 !== void 0) {
            if (!l2 || !l2[r2])
              return;
            return void N(t2, l2, r2, o2, s2 ? i2 : null);
          }
          c2 && Object.keys(l2).forEach((i3) => {
            !function(t3, e3, i4, n3) {
              const s3 = e3[i4] || {};
              Object.keys(s3).forEach((o3) => {
                if (o3.includes(n3)) {
                  const n4 = s3[o3];
                  N(t3, e3, i4, n4.originalHandler, n4.delegationSelector);
                }
              });
            }(t2, l2, i3, e2.slice(1));
          });
          const h3 = l2[r2] || {};
          Object.keys(h3).forEach((i3) => {
            const n3 = i3.replace(w, "");
            if (!a2 || e2.includes(n3)) {
              const e3 = h3[i3];
              N(t2, l2, r2, e3.originalHandler, e3.delegationSelector);
            }
          });
        }, trigger(t2, e2, i2) {
          if (typeof e2 != "string" || !t2)
            return null;
          const n2 = u(), s2 = I(e2), o2 = e2 !== s2, r2 = C.has(s2);
          let a2, l2 = true, c2 = true, h3 = false, d2 = null;
          return o2 && n2 && (a2 = n2.Event(e2, i2), n2(t2).trigger(a2), l2 = !a2.isPropagationStopped(), c2 = !a2.isImmediatePropagationStopped(), h3 = a2.isDefaultPrevented()), r2 ? (d2 = document.createEvent("HTMLEvents"), d2.initEvent(s2, l2, true)) : d2 = new CustomEvent(e2, { bubbles: l2, cancelable: true }), i2 !== void 0 && Object.keys(i2).forEach((t3) => {
            Object.defineProperty(d2, t3, { get: () => i2[t3] });
          }), h3 && d2.preventDefault(), c2 && t2.dispatchEvent(d2), d2.defaultPrevented && a2 !== void 0 && a2.preventDefault(), d2;
        } }, j = new Map();
        var M = { set(t2, e2, i2) {
          j.has(t2) || j.set(t2, new Map());
          const n2 = j.get(t2);
          n2.has(e2) || n2.size === 0 ? n2.set(e2, i2) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n2.keys())[0]}.`);
        }, get: (t2, e2) => j.has(t2) && j.get(t2).get(e2) || null, remove(t2, e2) {
          if (!j.has(t2))
            return;
          const i2 = j.get(t2);
          i2.delete(e2), i2.size === 0 && j.delete(t2);
        } };
        class H {
          constructor(t2) {
            (t2 = o(t2)) && (this._element = t2, M.set(this._element, this.constructor.DATA_KEY, this));
          }
          dispose() {
            M.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t2) => {
              this[t2] = null;
            });
          }
          _queueCallback(t2, e2, i2 = true) {
            _(t2, e2, i2);
          }
          static getInstance(t2) {
            return M.get(o(t2), this.DATA_KEY);
          }
          static getOrCreateInstance(t2, e2 = {}) {
            return this.getInstance(t2) || new this(t2, typeof e2 == "object" ? e2 : null);
          }
          static get VERSION() {
            return "5.1.0";
          }
          static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
          }
          static get DATA_KEY() {
            return "bs." + this.NAME;
          }
          static get EVENT_KEY() {
            return "." + this.DATA_KEY;
          }
        }
        const B = (t2, e2 = "hide") => {
          const n2 = "click.dismiss" + t2.EVENT_KEY, s2 = t2.NAME;
          P.on(document, n2, `[data-bs-dismiss="${s2}"]`, function(n3) {
            if (["A", "AREA"].includes(this.tagName) && n3.preventDefault(), l(this))
              return;
            const o2 = i(this) || this.closest("." + s2);
            t2.getOrCreateInstance(o2)[e2]();
          });
        };
        class R extends H {
          static get NAME() {
            return "alert";
          }
          close() {
            if (P.trigger(this._element, "close.bs.alert").defaultPrevented)
              return;
            this._element.classList.remove("show");
            const t2 = this._element.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(), this._element, t2);
          }
          _destroyElement() {
            this._element.remove(), P.trigger(this._element, "closed.bs.alert"), this.dispose();
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = R.getOrCreateInstance(this);
              if (typeof t2 == "string") {
                if (e2[t2] === void 0 || t2.startsWith("_") || t2 === "constructor")
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2](this);
              }
            });
          }
        }
        B(R, "close"), m(R);
        class W extends H {
          static get NAME() {
            return "button";
          }
          toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = W.getOrCreateInstance(this);
              t2 === "toggle" && e2[t2]();
            });
          }
        }
        function z(t2) {
          return t2 === "true" || t2 !== "false" && (t2 === Number(t2).toString() ? Number(t2) : t2 === "" || t2 === "null" ? null : t2);
        }
        function q(t2) {
          return t2.replace(/[A-Z]/g, (t3) => "-" + t3.toLowerCase());
        }
        P.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', (t2) => {
          t2.preventDefault();
          const e2 = t2.target.closest('[data-bs-toggle="button"]');
          W.getOrCreateInstance(e2).toggle();
        }), m(W);
        const F = { setDataAttribute(t2, e2, i2) {
          t2.setAttribute("data-bs-" + q(e2), i2);
        }, removeDataAttribute(t2, e2) {
          t2.removeAttribute("data-bs-" + q(e2));
        }, getDataAttributes(t2) {
          if (!t2)
            return {};
          const e2 = {};
          return Object.keys(t2.dataset).filter((t3) => t3.startsWith("bs")).forEach((i2) => {
            let n2 = i2.replace(/^bs/, "");
            n2 = n2.charAt(0).toLowerCase() + n2.slice(1, n2.length), e2[n2] = z(t2.dataset[i2]);
          }), e2;
        }, getDataAttribute: (t2, e2) => z(t2.getAttribute("data-bs-" + q(e2))), offset(t2) {
          const e2 = t2.getBoundingClientRect();
          return { top: e2.top + window.pageYOffset, left: e2.left + window.pageXOffset };
        }, position: (t2) => ({ top: t2.offsetTop, left: t2.offsetLeft }) }, U = { find: (t2, e2 = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e2, t2)), findOne: (t2, e2 = document.documentElement) => Element.prototype.querySelector.call(e2, t2), children: (t2, e2) => [].concat(...t2.children).filter((t3) => t3.matches(e2)), parents(t2, e2) {
          const i2 = [];
          let n2 = t2.parentNode;
          for (; n2 && n2.nodeType === Node.ELEMENT_NODE && n2.nodeType !== 3; )
            n2.matches(e2) && i2.push(n2), n2 = n2.parentNode;
          return i2;
        }, prev(t2, e2) {
          let i2 = t2.previousElementSibling;
          for (; i2; ) {
            if (i2.matches(e2))
              return [i2];
            i2 = i2.previousElementSibling;
          }
          return [];
        }, next(t2, e2) {
          let i2 = t2.nextElementSibling;
          for (; i2; ) {
            if (i2.matches(e2))
              return [i2];
            i2 = i2.nextElementSibling;
          }
          return [];
        }, focusableChildren(t2) {
          const e2 = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t3) => t3 + ':not([tabindex^="-"])').join(", ");
          return this.find(e2, t2).filter((t3) => !l(t3) && a(t3));
        } }, $ = { interval: 5e3, keyboard: true, slide: false, pause: "hover", wrap: true, touch: true }, V = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" }, K = "next", X = "prev", Y = "left", Q = "right", G = { ArrowLeft: Q, ArrowRight: Y };
        class Z extends H {
          constructor(t2, e2) {
            super(t2), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = false, this._isSliding = false, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e2), this._indicatorsElement = U.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners();
          }
          static get Default() {
            return $;
          }
          static get NAME() {
            return "carousel";
          }
          next() {
            this._slide(K);
          }
          nextWhenVisible() {
            !document.hidden && a(this._element) && this.next();
          }
          prev() {
            this._slide(X);
          }
          pause(t2) {
            t2 || (this._isPaused = true), U.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (n(this._element), this.cycle(true)), clearInterval(this._interval), this._interval = null;
          }
          cycle(t2) {
            t2 || (this._isPaused = false), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
          }
          to(t2) {
            this._activeElement = U.findOne(".active.carousel-item", this._element);
            const e2 = this._getItemIndex(this._activeElement);
            if (t2 > this._items.length - 1 || t2 < 0)
              return;
            if (this._isSliding)
              return void P.one(this._element, "slid.bs.carousel", () => this.to(t2));
            if (e2 === t2)
              return this.pause(), void this.cycle();
            const i2 = t2 > e2 ? K : X;
            this._slide(i2, this._items[t2]);
          }
          _getConfig(t2) {
            return t2 = { ...$, ...F.getDataAttributes(this._element), ...typeof t2 == "object" ? t2 : {} }, r("carousel", t2, V), t2;
          }
          _handleSwipe() {
            const t2 = Math.abs(this.touchDeltaX);
            if (t2 <= 40)
              return;
            const e2 = t2 / this.touchDeltaX;
            this.touchDeltaX = 0, e2 && this._slide(e2 > 0 ? Q : Y);
          }
          _addEventListeners() {
            this._config.keyboard && P.on(this._element, "keydown.bs.carousel", (t2) => this._keydown(t2)), this._config.pause === "hover" && (P.on(this._element, "mouseenter.bs.carousel", (t2) => this.pause(t2)), P.on(this._element, "mouseleave.bs.carousel", (t2) => this.cycle(t2))), this._config.touch && this._touchSupported && this._addTouchEventListeners();
          }
          _addTouchEventListeners() {
            const t2 = (t3) => {
              !this._pointerEvent || t3.pointerType !== "pen" && t3.pointerType !== "touch" ? this._pointerEvent || (this.touchStartX = t3.touches[0].clientX) : this.touchStartX = t3.clientX;
            }, e2 = (t3) => {
              this.touchDeltaX = t3.touches && t3.touches.length > 1 ? 0 : t3.touches[0].clientX - this.touchStartX;
            }, i2 = (t3) => {
              !this._pointerEvent || t3.pointerType !== "pen" && t3.pointerType !== "touch" || (this.touchDeltaX = t3.clientX - this.touchStartX), this._handleSwipe(), this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((t4) => this.cycle(t4), 500 + this._config.interval));
            };
            U.find(".carousel-item img", this._element).forEach((t3) => {
              P.on(t3, "dragstart.bs.carousel", (t4) => t4.preventDefault());
            }), this._pointerEvent ? (P.on(this._element, "pointerdown.bs.carousel", (e3) => t2(e3)), P.on(this._element, "pointerup.bs.carousel", (t3) => i2(t3)), this._element.classList.add("pointer-event")) : (P.on(this._element, "touchstart.bs.carousel", (e3) => t2(e3)), P.on(this._element, "touchmove.bs.carousel", (t3) => e2(t3)), P.on(this._element, "touchend.bs.carousel", (t3) => i2(t3)));
          }
          _keydown(t2) {
            if (/input|textarea/i.test(t2.target.tagName))
              return;
            const e2 = G[t2.key];
            e2 && (t2.preventDefault(), this._slide(e2));
          }
          _getItemIndex(t2) {
            return this._items = t2 && t2.parentNode ? U.find(".carousel-item", t2.parentNode) : [], this._items.indexOf(t2);
          }
          _getItemByOrder(t2, e2) {
            const i2 = t2 === K;
            return b(this._items, e2, i2, this._config.wrap);
          }
          _triggerSlideEvent(t2, e2) {
            const i2 = this._getItemIndex(t2), n2 = this._getItemIndex(U.findOne(".active.carousel-item", this._element));
            return P.trigger(this._element, "slide.bs.carousel", { relatedTarget: t2, direction: e2, from: n2, to: i2 });
          }
          _setActiveIndicatorElement(t2) {
            if (this._indicatorsElement) {
              const e2 = U.findOne(".active", this._indicatorsElement);
              e2.classList.remove("active"), e2.removeAttribute("aria-current");
              const i2 = U.find("[data-bs-target]", this._indicatorsElement);
              for (let e3 = 0; e3 < i2.length; e3++)
                if (Number.parseInt(i2[e3].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t2)) {
                  i2[e3].classList.add("active"), i2[e3].setAttribute("aria-current", "true");
                  break;
                }
            }
          }
          _updateInterval() {
            const t2 = this._activeElement || U.findOne(".active.carousel-item", this._element);
            if (!t2)
              return;
            const e2 = Number.parseInt(t2.getAttribute("data-bs-interval"), 10);
            e2 ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e2) : this._config.interval = this._config.defaultInterval || this._config.interval;
          }
          _slide(t2, e2) {
            const i2 = this._directionToOrder(t2), n2 = U.findOne(".active.carousel-item", this._element), s2 = this._getItemIndex(n2), o2 = e2 || this._getItemByOrder(i2, n2), r2 = this._getItemIndex(o2), a2 = Boolean(this._interval), l2 = i2 === K, c2 = l2 ? "carousel-item-start" : "carousel-item-end", h3 = l2 ? "carousel-item-next" : "carousel-item-prev", u2 = this._orderToDirection(i2);
            if (o2 && o2.classList.contains("active"))
              return void (this._isSliding = false);
            if (this._isSliding)
              return;
            if (this._triggerSlideEvent(o2, u2).defaultPrevented)
              return;
            if (!n2 || !o2)
              return;
            this._isSliding = true, a2 && this.pause(), this._setActiveIndicatorElement(o2), this._activeElement = o2;
            const f2 = () => {
              P.trigger(this._element, "slid.bs.carousel", { relatedTarget: o2, direction: u2, from: s2, to: r2 });
            };
            if (this._element.classList.contains("slide")) {
              o2.classList.add(h3), d(o2), n2.classList.add(c2), o2.classList.add(c2);
              const t3 = () => {
                o2.classList.remove(c2, h3), o2.classList.add("active"), n2.classList.remove("active", h3, c2), this._isSliding = false, setTimeout(f2, 0);
              };
              this._queueCallback(t3, n2, true);
            } else
              n2.classList.remove("active"), o2.classList.add("active"), this._isSliding = false, f2();
            a2 && this.cycle();
          }
          _directionToOrder(t2) {
            return [Q, Y].includes(t2) ? p2() ? t2 === Y ? X : K : t2 === Y ? K : X : t2;
          }
          _orderToDirection(t2) {
            return [K, X].includes(t2) ? p2() ? t2 === X ? Y : Q : t2 === X ? Q : Y : t2;
          }
          static carouselInterface(t2, e2) {
            const i2 = Z.getOrCreateInstance(t2, e2);
            let { _config: n2 } = i2;
            typeof e2 == "object" && (n2 = { ...n2, ...e2 });
            const s2 = typeof e2 == "string" ? e2 : n2.slide;
            if (typeof e2 == "number")
              i2.to(e2);
            else if (typeof s2 == "string") {
              if (i2[s2] === void 0)
                throw new TypeError(`No method named "${s2}"`);
              i2[s2]();
            } else
              n2.interval && n2.ride && (i2.pause(), i2.cycle());
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              Z.carouselInterface(this, t2);
            });
          }
          static dataApiClickHandler(t2) {
            const e2 = i(this);
            if (!e2 || !e2.classList.contains("carousel"))
              return;
            const n2 = { ...F.getDataAttributes(e2), ...F.getDataAttributes(this) }, s2 = this.getAttribute("data-bs-slide-to");
            s2 && (n2.interval = false), Z.carouselInterface(e2, n2), s2 && Z.getInstance(e2).to(s2), t2.preventDefault();
          }
        }
        P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Z.dataApiClickHandler), P.on(window, "load.bs.carousel.data-api", () => {
          const t2 = U.find('[data-bs-ride="carousel"]');
          for (let e2 = 0, i2 = t2.length; e2 < i2; e2++)
            Z.carouselInterface(t2[e2], Z.getInstance(t2[e2]));
        }), m(Z);
        const J = { toggle: true, parent: null }, tt = { toggle: "boolean", parent: "(null|element)" };
        class et extends H {
          constructor(t2, i2) {
            super(t2), this._isTransitioning = false, this._config = this._getConfig(i2), this._triggerArray = [];
            const n2 = U.find('[data-bs-toggle="collapse"]');
            for (let t3 = 0, i3 = n2.length; t3 < i3; t3++) {
              const i4 = n2[t3], s2 = e(i4), o2 = U.find(s2).filter((t4) => t4 === this._element);
              s2 !== null && o2.length && (this._selector = s2, this._triggerArray.push(i4));
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
          }
          static get Default() {
            return J;
          }
          static get NAME() {
            return "collapse";
          }
          toggle() {
            this._isShown() ? this.hide() : this.show();
          }
          show() {
            if (this._isTransitioning || this._isShown())
              return;
            let t2, e2 = [];
            if (this._config.parent) {
              const t3 = U.find(".collapse .collapse", this._config.parent);
              e2 = U.find(".show, .collapsing", this._config.parent).filter((e3) => !t3.includes(e3));
            }
            const i2 = U.findOne(this._selector);
            if (e2.length) {
              const n3 = e2.find((t3) => i2 !== t3);
              if (t2 = n3 ? et.getInstance(n3) : null, t2 && t2._isTransitioning)
                return;
            }
            if (P.trigger(this._element, "show.bs.collapse").defaultPrevented)
              return;
            e2.forEach((e3) => {
              i2 !== e3 && et.getOrCreateInstance(e3, { toggle: false }).hide(), t2 || M.set(e3, "bs.collapse", null);
            });
            const n2 = this._getDimension();
            this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[n2] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
            const s2 = "scroll" + (n2[0].toUpperCase() + n2.slice(1));
            this._queueCallback(() => {
              this._isTransitioning = false, this._element.classList.remove("collapsing"), this._element.classList.add("collapse", "show"), this._element.style[n2] = "", P.trigger(this._element, "shown.bs.collapse");
            }, this._element, true), this._element.style[n2] = this._element[s2] + "px";
          }
          hide() {
            if (this._isTransitioning || !this._isShown())
              return;
            if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented)
              return;
            const t2 = this._getDimension();
            this._element.style[t2] = this._element.getBoundingClientRect()[t2] + "px", d(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
            const e2 = this._triggerArray.length;
            for (let t3 = 0; t3 < e2; t3++) {
              const e3 = this._triggerArray[t3], n2 = i(e3);
              n2 && !this._isShown(n2) && this._addAriaAndCollapsedClass([e3], false);
            }
            this._isTransitioning = true, this._element.style[t2] = "", this._queueCallback(() => {
              this._isTransitioning = false, this._element.classList.remove("collapsing"), this._element.classList.add("collapse"), P.trigger(this._element, "hidden.bs.collapse");
            }, this._element, true);
          }
          _isShown(t2 = this._element) {
            return t2.classList.contains("show");
          }
          _getConfig(t2) {
            return (t2 = { ...J, ...F.getDataAttributes(this._element), ...t2 }).toggle = Boolean(t2.toggle), t2.parent = o(t2.parent), r("collapse", t2, tt), t2;
          }
          _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
          }
          _initializeChildren() {
            if (!this._config.parent)
              return;
            const t2 = U.find(".collapse .collapse", this._config.parent);
            U.find('[data-bs-toggle="collapse"]', this._config.parent).filter((e2) => !t2.includes(e2)).forEach((t3) => {
              const e2 = i(t3);
              e2 && this._addAriaAndCollapsedClass([t3], this._isShown(e2));
            });
          }
          _addAriaAndCollapsedClass(t2, e2) {
            t2.length && t2.forEach((t3) => {
              e2 ? t3.classList.remove("collapsed") : t3.classList.add("collapsed"), t3.setAttribute("aria-expanded", e2);
            });
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = {};
              typeof t2 == "string" && /show|hide/.test(t2) && (e2.toggle = false);
              const i2 = et.getOrCreateInstance(this, e2);
              if (typeof t2 == "string") {
                if (i2[t2] === void 0)
                  throw new TypeError(`No method named "${t2}"`);
                i2[t2]();
              }
            });
          }
        }
        P.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function(t2) {
          (t2.target.tagName === "A" || t2.delegateTarget && t2.delegateTarget.tagName === "A") && t2.preventDefault();
          const i2 = e(this);
          U.find(i2).forEach((t3) => {
            et.getOrCreateInstance(t3, { toggle: false }).toggle();
          });
        }), m(et);
        var it = "top", nt = "bottom", st = "right", ot = "left", rt = [it, nt, st, ot], at = rt.reduce(function(t2, e2) {
          return t2.concat([e2 + "-start", e2 + "-end"]);
        }, []), lt = [].concat(rt, ["auto"]).reduce(function(t2, e2) {
          return t2.concat([e2, e2 + "-start", e2 + "-end"]);
        }, []), ct = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
        function ht(t2) {
          return t2 ? (t2.nodeName || "").toLowerCase() : null;
        }
        function dt(t2) {
          if (t2 == null)
            return window;
          if (t2.toString() !== "[object Window]") {
            var e2 = t2.ownerDocument;
            return e2 && e2.defaultView || window;
          }
          return t2;
        }
        function ut(t2) {
          return t2 instanceof dt(t2).Element || t2 instanceof Element;
        }
        function ft(t2) {
          return t2 instanceof dt(t2).HTMLElement || t2 instanceof HTMLElement;
        }
        function pt(t2) {
          return typeof ShadowRoot != "undefined" && (t2 instanceof dt(t2).ShadowRoot || t2 instanceof ShadowRoot);
        }
        var mt = { name: "applyStyles", enabled: true, phase: "write", fn: function(t2) {
          var e2 = t2.state;
          Object.keys(e2.elements).forEach(function(t3) {
            var i2 = e2.styles[t3] || {}, n2 = e2.attributes[t3] || {}, s2 = e2.elements[t3];
            ft(s2) && ht(s2) && (Object.assign(s2.style, i2), Object.keys(n2).forEach(function(t4) {
              var e3 = n2[t4];
              e3 === false ? s2.removeAttribute(t4) : s2.setAttribute(t4, e3 === true ? "" : e3);
            }));
          });
        }, effect: function(t2) {
          var e2 = t2.state, i2 = { popper: { position: e2.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
          return Object.assign(e2.elements.popper.style, i2.popper), e2.styles = i2, e2.elements.arrow && Object.assign(e2.elements.arrow.style, i2.arrow), function() {
            Object.keys(e2.elements).forEach(function(t3) {
              var n2 = e2.elements[t3], s2 = e2.attributes[t3] || {}, o2 = Object.keys(e2.styles.hasOwnProperty(t3) ? e2.styles[t3] : i2[t3]).reduce(function(t4, e3) {
                return t4[e3] = "", t4;
              }, {});
              ft(n2) && ht(n2) && (Object.assign(n2.style, o2), Object.keys(s2).forEach(function(t4) {
                n2.removeAttribute(t4);
              }));
            });
          };
        }, requires: ["computeStyles"] };
        function gt(t2) {
          return t2.split("-")[0];
        }
        var _t = Math.round;
        function bt(t2, e2) {
          e2 === void 0 && (e2 = false);
          var i2 = t2.getBoundingClientRect(), n2 = 1, s2 = 1;
          return ft(t2) && e2 && (n2 = i2.width / t2.offsetWidth || 1, s2 = i2.height / t2.offsetHeight || 1), { width: _t(i2.width / n2), height: _t(i2.height / s2), top: _t(i2.top / s2), right: _t(i2.right / n2), bottom: _t(i2.bottom / s2), left: _t(i2.left / n2), x: _t(i2.left / n2), y: _t(i2.top / s2) };
        }
        function vt(t2) {
          var e2 = bt(t2), i2 = t2.offsetWidth, n2 = t2.offsetHeight;
          return Math.abs(e2.width - i2) <= 1 && (i2 = e2.width), Math.abs(e2.height - n2) <= 1 && (n2 = e2.height), { x: t2.offsetLeft, y: t2.offsetTop, width: i2, height: n2 };
        }
        function yt(t2, e2) {
          var i2 = e2.getRootNode && e2.getRootNode();
          if (t2.contains(e2))
            return true;
          if (i2 && pt(i2)) {
            var n2 = e2;
            do {
              if (n2 && t2.isSameNode(n2))
                return true;
              n2 = n2.parentNode || n2.host;
            } while (n2);
          }
          return false;
        }
        function wt(t2) {
          return dt(t2).getComputedStyle(t2);
        }
        function Et(t2) {
          return ["table", "td", "th"].indexOf(ht(t2)) >= 0;
        }
        function At(t2) {
          return ((ut(t2) ? t2.ownerDocument : t2.document) || window.document).documentElement;
        }
        function Tt(t2) {
          return ht(t2) === "html" ? t2 : t2.assignedSlot || t2.parentNode || (pt(t2) ? t2.host : null) || At(t2);
        }
        function Ot(t2) {
          return ft(t2) && wt(t2).position !== "fixed" ? t2.offsetParent : null;
        }
        function Ct(t2) {
          for (var e2 = dt(t2), i2 = Ot(t2); i2 && Et(i2) && wt(i2).position === "static"; )
            i2 = Ot(i2);
          return i2 && (ht(i2) === "html" || ht(i2) === "body" && wt(i2).position === "static") ? e2 : i2 || function(t3) {
            var e3 = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
            if (navigator.userAgent.indexOf("Trident") !== -1 && ft(t3) && wt(t3).position === "fixed")
              return null;
            for (var i3 = Tt(t3); ft(i3) && ["html", "body"].indexOf(ht(i3)) < 0; ) {
              var n2 = wt(i3);
              if (n2.transform !== "none" || n2.perspective !== "none" || n2.contain === "paint" || ["transform", "perspective"].indexOf(n2.willChange) !== -1 || e3 && n2.willChange === "filter" || e3 && n2.filter && n2.filter !== "none")
                return i3;
              i3 = i3.parentNode;
            }
            return null;
          }(t2) || e2;
        }
        function kt(t2) {
          return ["top", "bottom"].indexOf(t2) >= 0 ? "x" : "y";
        }
        var Lt = Math.max, xt = Math.min, Dt = Math.round;
        function St(t2, e2, i2) {
          return Lt(t2, xt(e2, i2));
        }
        function Nt(t2) {
          return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t2);
        }
        function It(t2, e2) {
          return e2.reduce(function(e3, i2) {
            return e3[i2] = t2, e3;
          }, {});
        }
        var Pt = { name: "arrow", enabled: true, phase: "main", fn: function(t2) {
          var e2, i2 = t2.state, n2 = t2.name, s2 = t2.options, o2 = i2.elements.arrow, r2 = i2.modifiersData.popperOffsets, a2 = gt(i2.placement), l2 = kt(a2), c2 = [ot, st].indexOf(a2) >= 0 ? "height" : "width";
          if (o2 && r2) {
            var h3 = function(t3, e3) {
              return Nt(typeof (t3 = typeof t3 == "function" ? t3(Object.assign({}, e3.rects, { placement: e3.placement })) : t3) != "number" ? t3 : It(t3, rt));
            }(s2.padding, i2), d2 = vt(o2), u2 = l2 === "y" ? it : ot, f2 = l2 === "y" ? nt : st, p3 = i2.rects.reference[c2] + i2.rects.reference[l2] - r2[l2] - i2.rects.popper[c2], m2 = r2[l2] - i2.rects.reference[l2], g2 = Ct(o2), _2 = g2 ? l2 === "y" ? g2.clientHeight || 0 : g2.clientWidth || 0 : 0, b2 = p3 / 2 - m2 / 2, v2 = h3[u2], y2 = _2 - d2[c2] - h3[f2], w2 = _2 / 2 - d2[c2] / 2 + b2, E2 = St(v2, w2, y2), A2 = l2;
            i2.modifiersData[n2] = ((e2 = {})[A2] = E2, e2.centerOffset = E2 - w2, e2);
          }
        }, effect: function(t2) {
          var e2 = t2.state, i2 = t2.options.element, n2 = i2 === void 0 ? "[data-popper-arrow]" : i2;
          n2 != null && (typeof n2 != "string" || (n2 = e2.elements.popper.querySelector(n2))) && yt(e2.elements.popper, n2) && (e2.elements.arrow = n2);
        }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] }, jt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
        function Mt(t2) {
          var e2, i2 = t2.popper, n2 = t2.popperRect, s2 = t2.placement, o2 = t2.offsets, r2 = t2.position, a2 = t2.gpuAcceleration, l2 = t2.adaptive, c2 = t2.roundOffsets, h3 = c2 === true ? function(t3) {
            var e3 = t3.x, i3 = t3.y, n3 = window.devicePixelRatio || 1;
            return { x: Dt(Dt(e3 * n3) / n3) || 0, y: Dt(Dt(i3 * n3) / n3) || 0 };
          }(o2) : typeof c2 == "function" ? c2(o2) : o2, d2 = h3.x, u2 = d2 === void 0 ? 0 : d2, f2 = h3.y, p3 = f2 === void 0 ? 0 : f2, m2 = o2.hasOwnProperty("x"), g2 = o2.hasOwnProperty("y"), _2 = ot, b2 = it, v2 = window;
          if (l2) {
            var y2 = Ct(i2), w2 = "clientHeight", E2 = "clientWidth";
            y2 === dt(i2) && wt(y2 = At(i2)).position !== "static" && (w2 = "scrollHeight", E2 = "scrollWidth"), y2 = y2, s2 === it && (b2 = nt, p3 -= y2[w2] - n2.height, p3 *= a2 ? 1 : -1), s2 === ot && (_2 = st, u2 -= y2[E2] - n2.width, u2 *= a2 ? 1 : -1);
          }
          var A2, T2 = Object.assign({ position: r2 }, l2 && jt);
          return a2 ? Object.assign({}, T2, ((A2 = {})[b2] = g2 ? "0" : "", A2[_2] = m2 ? "0" : "", A2.transform = (v2.devicePixelRatio || 1) < 2 ? "translate(" + u2 + "px, " + p3 + "px)" : "translate3d(" + u2 + "px, " + p3 + "px, 0)", A2)) : Object.assign({}, T2, ((e2 = {})[b2] = g2 ? p3 + "px" : "", e2[_2] = m2 ? u2 + "px" : "", e2.transform = "", e2));
        }
        var Ht = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(t2) {
          var e2 = t2.state, i2 = t2.options, n2 = i2.gpuAcceleration, s2 = n2 === void 0 || n2, o2 = i2.adaptive, r2 = o2 === void 0 || o2, a2 = i2.roundOffsets, l2 = a2 === void 0 || a2, c2 = { placement: gt(e2.placement), popper: e2.elements.popper, popperRect: e2.rects.popper, gpuAcceleration: s2 };
          e2.modifiersData.popperOffsets != null && (e2.styles.popper = Object.assign({}, e2.styles.popper, Mt(Object.assign({}, c2, { offsets: e2.modifiersData.popperOffsets, position: e2.options.strategy, adaptive: r2, roundOffsets: l2 })))), e2.modifiersData.arrow != null && (e2.styles.arrow = Object.assign({}, e2.styles.arrow, Mt(Object.assign({}, c2, { offsets: e2.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: l2 })))), e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-placement": e2.placement });
        }, data: {} }, Bt = { passive: true }, Rt = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
        }, effect: function(t2) {
          var e2 = t2.state, i2 = t2.instance, n2 = t2.options, s2 = n2.scroll, o2 = s2 === void 0 || s2, r2 = n2.resize, a2 = r2 === void 0 || r2, l2 = dt(e2.elements.popper), c2 = [].concat(e2.scrollParents.reference, e2.scrollParents.popper);
          return o2 && c2.forEach(function(t3) {
            t3.addEventListener("scroll", i2.update, Bt);
          }), a2 && l2.addEventListener("resize", i2.update, Bt), function() {
            o2 && c2.forEach(function(t3) {
              t3.removeEventListener("scroll", i2.update, Bt);
            }), a2 && l2.removeEventListener("resize", i2.update, Bt);
          };
        }, data: {} }, Wt = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function zt(t2) {
          return t2.replace(/left|right|bottom|top/g, function(t3) {
            return Wt[t3];
          });
        }
        var qt = { start: "end", end: "start" };
        function Ft(t2) {
          return t2.replace(/start|end/g, function(t3) {
            return qt[t3];
          });
        }
        function Ut(t2) {
          var e2 = dt(t2);
          return { scrollLeft: e2.pageXOffset, scrollTop: e2.pageYOffset };
        }
        function $t(t2) {
          return bt(At(t2)).left + Ut(t2).scrollLeft;
        }
        function Vt(t2) {
          var e2 = wt(t2), i2 = e2.overflow, n2 = e2.overflowX, s2 = e2.overflowY;
          return /auto|scroll|overlay|hidden/.test(i2 + s2 + n2);
        }
        function Kt(t2, e2) {
          var i2;
          e2 === void 0 && (e2 = []);
          var n2 = function t3(e3) {
            return ["html", "body", "#document"].indexOf(ht(e3)) >= 0 ? e3.ownerDocument.body : ft(e3) && Vt(e3) ? e3 : t3(Tt(e3));
          }(t2), s2 = n2 === ((i2 = t2.ownerDocument) == null ? void 0 : i2.body), o2 = dt(n2), r2 = s2 ? [o2].concat(o2.visualViewport || [], Vt(n2) ? n2 : []) : n2, a2 = e2.concat(r2);
          return s2 ? a2 : a2.concat(Kt(Tt(r2)));
        }
        function Xt(t2) {
          return Object.assign({}, t2, { left: t2.x, top: t2.y, right: t2.x + t2.width, bottom: t2.y + t2.height });
        }
        function Yt(t2, e2) {
          return e2 === "viewport" ? Xt(function(t3) {
            var e3 = dt(t3), i2 = At(t3), n2 = e3.visualViewport, s2 = i2.clientWidth, o2 = i2.clientHeight, r2 = 0, a2 = 0;
            return n2 && (s2 = n2.width, o2 = n2.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r2 = n2.offsetLeft, a2 = n2.offsetTop)), { width: s2, height: o2, x: r2 + $t(t3), y: a2 };
          }(t2)) : ft(e2) ? function(t3) {
            var e3 = bt(t3);
            return e3.top = e3.top + t3.clientTop, e3.left = e3.left + t3.clientLeft, e3.bottom = e3.top + t3.clientHeight, e3.right = e3.left + t3.clientWidth, e3.width = t3.clientWidth, e3.height = t3.clientHeight, e3.x = e3.left, e3.y = e3.top, e3;
          }(e2) : Xt(function(t3) {
            var e3, i2 = At(t3), n2 = Ut(t3), s2 = (e3 = t3.ownerDocument) == null ? void 0 : e3.body, o2 = Lt(i2.scrollWidth, i2.clientWidth, s2 ? s2.scrollWidth : 0, s2 ? s2.clientWidth : 0), r2 = Lt(i2.scrollHeight, i2.clientHeight, s2 ? s2.scrollHeight : 0, s2 ? s2.clientHeight : 0), a2 = -n2.scrollLeft + $t(t3), l2 = -n2.scrollTop;
            return wt(s2 || i2).direction === "rtl" && (a2 += Lt(i2.clientWidth, s2 ? s2.clientWidth : 0) - o2), { width: o2, height: r2, x: a2, y: l2 };
          }(At(t2)));
        }
        function Qt(t2) {
          return t2.split("-")[1];
        }
        function Gt(t2) {
          var e2, i2 = t2.reference, n2 = t2.element, s2 = t2.placement, o2 = s2 ? gt(s2) : null, r2 = s2 ? Qt(s2) : null, a2 = i2.x + i2.width / 2 - n2.width / 2, l2 = i2.y + i2.height / 2 - n2.height / 2;
          switch (o2) {
            case it:
              e2 = { x: a2, y: i2.y - n2.height };
              break;
            case nt:
              e2 = { x: a2, y: i2.y + i2.height };
              break;
            case st:
              e2 = { x: i2.x + i2.width, y: l2 };
              break;
            case ot:
              e2 = { x: i2.x - n2.width, y: l2 };
              break;
            default:
              e2 = { x: i2.x, y: i2.y };
          }
          var c2 = o2 ? kt(o2) : null;
          if (c2 != null) {
            var h3 = c2 === "y" ? "height" : "width";
            switch (r2) {
              case "start":
                e2[c2] = e2[c2] - (i2[h3] / 2 - n2[h3] / 2);
                break;
              case "end":
                e2[c2] = e2[c2] + (i2[h3] / 2 - n2[h3] / 2);
            }
          }
          return e2;
        }
        function Zt(t2, e2) {
          e2 === void 0 && (e2 = {});
          var i2 = e2, n2 = i2.placement, s2 = n2 === void 0 ? t2.placement : n2, o2 = i2.boundary, r2 = o2 === void 0 ? "clippingParents" : o2, a2 = i2.rootBoundary, l2 = a2 === void 0 ? "viewport" : a2, c2 = i2.elementContext, h3 = c2 === void 0 ? "popper" : c2, d2 = i2.altBoundary, u2 = d2 !== void 0 && d2, f2 = i2.padding, p3 = f2 === void 0 ? 0 : f2, m2 = Nt(typeof p3 != "number" ? p3 : It(p3, rt)), g2 = h3 === "popper" ? "reference" : "popper", _2 = t2.elements.reference, b2 = t2.rects.popper, v2 = t2.elements[u2 ? g2 : h3], y2 = function(t3, e3, i3) {
            var n3 = e3 === "clippingParents" ? function(t4) {
              var e4 = Kt(Tt(t4)), i4 = ["absolute", "fixed"].indexOf(wt(t4).position) >= 0 && ft(t4) ? Ct(t4) : t4;
              return ut(i4) ? e4.filter(function(t5) {
                return ut(t5) && yt(t5, i4) && ht(t5) !== "body";
              }) : [];
            }(t3) : [].concat(e3), s3 = [].concat(n3, [i3]), o3 = s3[0], r3 = s3.reduce(function(e4, i4) {
              var n4 = Yt(t3, i4);
              return e4.top = Lt(n4.top, e4.top), e4.right = xt(n4.right, e4.right), e4.bottom = xt(n4.bottom, e4.bottom), e4.left = Lt(n4.left, e4.left), e4;
            }, Yt(t3, o3));
            return r3.width = r3.right - r3.left, r3.height = r3.bottom - r3.top, r3.x = r3.left, r3.y = r3.top, r3;
          }(ut(v2) ? v2 : v2.contextElement || At(t2.elements.popper), r2, l2), w2 = bt(_2), E2 = Gt({ reference: w2, element: b2, strategy: "absolute", placement: s2 }), A2 = Xt(Object.assign({}, b2, E2)), T2 = h3 === "popper" ? A2 : w2, O2 = { top: y2.top - T2.top + m2.top, bottom: T2.bottom - y2.bottom + m2.bottom, left: y2.left - T2.left + m2.left, right: T2.right - y2.right + m2.right }, C2 = t2.modifiersData.offset;
          if (h3 === "popper" && C2) {
            var k2 = C2[s2];
            Object.keys(O2).forEach(function(t3) {
              var e3 = [st, nt].indexOf(t3) >= 0 ? 1 : -1, i3 = [it, nt].indexOf(t3) >= 0 ? "y" : "x";
              O2[t3] += k2[i3] * e3;
            });
          }
          return O2;
        }
        function Jt(t2, e2) {
          e2 === void 0 && (e2 = {});
          var i2 = e2, n2 = i2.placement, s2 = i2.boundary, o2 = i2.rootBoundary, r2 = i2.padding, a2 = i2.flipVariations, l2 = i2.allowedAutoPlacements, c2 = l2 === void 0 ? lt : l2, h3 = Qt(n2), d2 = h3 ? a2 ? at : at.filter(function(t3) {
            return Qt(t3) === h3;
          }) : rt, u2 = d2.filter(function(t3) {
            return c2.indexOf(t3) >= 0;
          });
          u2.length === 0 && (u2 = d2);
          var f2 = u2.reduce(function(e3, i3) {
            return e3[i3] = Zt(t2, { placement: i3, boundary: s2, rootBoundary: o2, padding: r2 })[gt(i3)], e3;
          }, {});
          return Object.keys(f2).sort(function(t3, e3) {
            return f2[t3] - f2[e3];
          });
        }
        var te = { name: "flip", enabled: true, phase: "main", fn: function(t2) {
          var e2 = t2.state, i2 = t2.options, n2 = t2.name;
          if (!e2.modifiersData[n2]._skip) {
            for (var s2 = i2.mainAxis, o2 = s2 === void 0 || s2, r2 = i2.altAxis, a2 = r2 === void 0 || r2, l2 = i2.fallbackPlacements, c2 = i2.padding, h3 = i2.boundary, d2 = i2.rootBoundary, u2 = i2.altBoundary, f2 = i2.flipVariations, p3 = f2 === void 0 || f2, m2 = i2.allowedAutoPlacements, g2 = e2.options.placement, _2 = gt(g2), b2 = l2 || (_2 !== g2 && p3 ? function(t3) {
              if (gt(t3) === "auto")
                return [];
              var e3 = zt(t3);
              return [Ft(t3), e3, Ft(e3)];
            }(g2) : [zt(g2)]), v2 = [g2].concat(b2).reduce(function(t3, i3) {
              return t3.concat(gt(i3) === "auto" ? Jt(e2, { placement: i3, boundary: h3, rootBoundary: d2, padding: c2, flipVariations: p3, allowedAutoPlacements: m2 }) : i3);
            }, []), y2 = e2.rects.reference, w2 = e2.rects.popper, E2 = new Map(), A2 = true, T2 = v2[0], O2 = 0; O2 < v2.length; O2++) {
              var C2 = v2[O2], k2 = gt(C2), L2 = Qt(C2) === "start", x2 = [it, nt].indexOf(k2) >= 0, D2 = x2 ? "width" : "height", S2 = Zt(e2, { placement: C2, boundary: h3, rootBoundary: d2, altBoundary: u2, padding: c2 }), N2 = x2 ? L2 ? st : ot : L2 ? nt : it;
              y2[D2] > w2[D2] && (N2 = zt(N2));
              var I2 = zt(N2), P2 = [];
              if (o2 && P2.push(S2[k2] <= 0), a2 && P2.push(S2[N2] <= 0, S2[I2] <= 0), P2.every(function(t3) {
                return t3;
              })) {
                T2 = C2, A2 = false;
                break;
              }
              E2.set(C2, P2);
            }
            if (A2)
              for (var j2 = function(t3) {
                var e3 = v2.find(function(e4) {
                  var i3 = E2.get(e4);
                  if (i3)
                    return i3.slice(0, t3).every(function(t4) {
                      return t4;
                    });
                });
                if (e3)
                  return T2 = e3, "break";
              }, M2 = p3 ? 3 : 1; M2 > 0 && j2(M2) !== "break"; M2--)
                ;
            e2.placement !== T2 && (e2.modifiersData[n2]._skip = true, e2.placement = T2, e2.reset = true);
          }
        }, requiresIfExists: ["offset"], data: { _skip: false } };
        function ee(t2, e2, i2) {
          return i2 === void 0 && (i2 = { x: 0, y: 0 }), { top: t2.top - e2.height - i2.y, right: t2.right - e2.width + i2.x, bottom: t2.bottom - e2.height + i2.y, left: t2.left - e2.width - i2.x };
        }
        function ie(t2) {
          return [it, st, nt, ot].some(function(e2) {
            return t2[e2] >= 0;
          });
        }
        var ne = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(t2) {
          var e2 = t2.state, i2 = t2.name, n2 = e2.rects.reference, s2 = e2.rects.popper, o2 = e2.modifiersData.preventOverflow, r2 = Zt(e2, { elementContext: "reference" }), a2 = Zt(e2, { altBoundary: true }), l2 = ee(r2, n2), c2 = ee(a2, s2, o2), h3 = ie(l2), d2 = ie(c2);
          e2.modifiersData[i2] = { referenceClippingOffsets: l2, popperEscapeOffsets: c2, isReferenceHidden: h3, hasPopperEscaped: d2 }, e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-reference-hidden": h3, "data-popper-escaped": d2 });
        } }, se = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: function(t2) {
          var e2 = t2.state, i2 = t2.options, n2 = t2.name, s2 = i2.offset, o2 = s2 === void 0 ? [0, 0] : s2, r2 = lt.reduce(function(t3, i3) {
            return t3[i3] = function(t4, e3, i4) {
              var n3 = gt(t4), s3 = [ot, it].indexOf(n3) >= 0 ? -1 : 1, o3 = typeof i4 == "function" ? i4(Object.assign({}, e3, { placement: t4 })) : i4, r3 = o3[0], a3 = o3[1];
              return r3 = r3 || 0, a3 = (a3 || 0) * s3, [ot, st].indexOf(n3) >= 0 ? { x: a3, y: r3 } : { x: r3, y: a3 };
            }(i3, e2.rects, o2), t3;
          }, {}), a2 = r2[e2.placement], l2 = a2.x, c2 = a2.y;
          e2.modifiersData.popperOffsets != null && (e2.modifiersData.popperOffsets.x += l2, e2.modifiersData.popperOffsets.y += c2), e2.modifiersData[n2] = r2;
        } }, oe = { name: "popperOffsets", enabled: true, phase: "read", fn: function(t2) {
          var e2 = t2.state, i2 = t2.name;
          e2.modifiersData[i2] = Gt({ reference: e2.rects.reference, element: e2.rects.popper, strategy: "absolute", placement: e2.placement });
        }, data: {} }, re = { name: "preventOverflow", enabled: true, phase: "main", fn: function(t2) {
          var e2 = t2.state, i2 = t2.options, n2 = t2.name, s2 = i2.mainAxis, o2 = s2 === void 0 || s2, r2 = i2.altAxis, a2 = r2 !== void 0 && r2, l2 = i2.boundary, c2 = i2.rootBoundary, h3 = i2.altBoundary, d2 = i2.padding, u2 = i2.tether, f2 = u2 === void 0 || u2, p3 = i2.tetherOffset, m2 = p3 === void 0 ? 0 : p3, g2 = Zt(e2, { boundary: l2, rootBoundary: c2, padding: d2, altBoundary: h3 }), _2 = gt(e2.placement), b2 = Qt(e2.placement), v2 = !b2, y2 = kt(_2), w2 = y2 === "x" ? "y" : "x", E2 = e2.modifiersData.popperOffsets, A2 = e2.rects.reference, T2 = e2.rects.popper, O2 = typeof m2 == "function" ? m2(Object.assign({}, e2.rects, { placement: e2.placement })) : m2, C2 = { x: 0, y: 0 };
          if (E2) {
            if (o2 || a2) {
              var k2 = y2 === "y" ? it : ot, L2 = y2 === "y" ? nt : st, x2 = y2 === "y" ? "height" : "width", D2 = E2[y2], S2 = E2[y2] + g2[k2], N2 = E2[y2] - g2[L2], I2 = f2 ? -T2[x2] / 2 : 0, P2 = b2 === "start" ? A2[x2] : T2[x2], j2 = b2 === "start" ? -T2[x2] : -A2[x2], M2 = e2.elements.arrow, H2 = f2 && M2 ? vt(M2) : { width: 0, height: 0 }, B2 = e2.modifiersData["arrow#persistent"] ? e2.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, R2 = B2[k2], W2 = B2[L2], z2 = St(0, A2[x2], H2[x2]), q2 = v2 ? A2[x2] / 2 - I2 - z2 - R2 - O2 : P2 - z2 - R2 - O2, F2 = v2 ? -A2[x2] / 2 + I2 + z2 + W2 + O2 : j2 + z2 + W2 + O2, U2 = e2.elements.arrow && Ct(e2.elements.arrow), $2 = U2 ? y2 === "y" ? U2.clientTop || 0 : U2.clientLeft || 0 : 0, V2 = e2.modifiersData.offset ? e2.modifiersData.offset[e2.placement][y2] : 0, K2 = E2[y2] + q2 - V2 - $2, X2 = E2[y2] + F2 - V2;
              if (o2) {
                var Y2 = St(f2 ? xt(S2, K2) : S2, D2, f2 ? Lt(N2, X2) : N2);
                E2[y2] = Y2, C2[y2] = Y2 - D2;
              }
              if (a2) {
                var Q2 = y2 === "x" ? it : ot, G2 = y2 === "x" ? nt : st, Z2 = E2[w2], J2 = Z2 + g2[Q2], tt2 = Z2 - g2[G2], et2 = St(f2 ? xt(J2, K2) : J2, Z2, f2 ? Lt(tt2, X2) : tt2);
                E2[w2] = et2, C2[w2] = et2 - Z2;
              }
            }
            e2.modifiersData[n2] = C2;
          }
        }, requiresIfExists: ["offset"] };
        function ae(t2, e2, i2) {
          i2 === void 0 && (i2 = false);
          var n2, s2, o2 = ft(e2), r2 = ft(e2) && function(t3) {
            var e3 = t3.getBoundingClientRect(), i3 = e3.width / t3.offsetWidth || 1, n3 = e3.height / t3.offsetHeight || 1;
            return i3 !== 1 || n3 !== 1;
          }(e2), a2 = At(e2), l2 = bt(t2, r2), c2 = { scrollLeft: 0, scrollTop: 0 }, h3 = { x: 0, y: 0 };
          return (o2 || !o2 && !i2) && ((ht(e2) !== "body" || Vt(a2)) && (c2 = (n2 = e2) !== dt(n2) && ft(n2) ? { scrollLeft: (s2 = n2).scrollLeft, scrollTop: s2.scrollTop } : Ut(n2)), ft(e2) ? ((h3 = bt(e2, true)).x += e2.clientLeft, h3.y += e2.clientTop) : a2 && (h3.x = $t(a2))), { x: l2.left + c2.scrollLeft - h3.x, y: l2.top + c2.scrollTop - h3.y, width: l2.width, height: l2.height };
        }
        var le = { placement: "bottom", modifiers: [], strategy: "absolute" };
        function ce() {
          for (var t2 = arguments.length, e2 = new Array(t2), i2 = 0; i2 < t2; i2++)
            e2[i2] = arguments[i2];
          return !e2.some(function(t3) {
            return !(t3 && typeof t3.getBoundingClientRect == "function");
          });
        }
        function he(t2) {
          t2 === void 0 && (t2 = {});
          var e2 = t2, i2 = e2.defaultModifiers, n2 = i2 === void 0 ? [] : i2, s2 = e2.defaultOptions, o2 = s2 === void 0 ? le : s2;
          return function(t3, e3, i3) {
            i3 === void 0 && (i3 = o2);
            var s3, r2, a2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, le, o2), modifiersData: {}, elements: { reference: t3, popper: e3 }, attributes: {}, styles: {} }, l2 = [], c2 = false, h3 = { state: a2, setOptions: function(i4) {
              d2(), a2.options = Object.assign({}, o2, a2.options, i4), a2.scrollParents = { reference: ut(t3) ? Kt(t3) : t3.contextElement ? Kt(t3.contextElement) : [], popper: Kt(e3) };
              var s4, r3, c3 = function(t4) {
                var e4 = function(t5) {
                  var e5 = new Map(), i5 = new Set(), n3 = [];
                  return t5.forEach(function(t6) {
                    e5.set(t6.name, t6);
                  }), t5.forEach(function(t6) {
                    i5.has(t6.name) || function t7(s5) {
                      i5.add(s5.name), [].concat(s5.requires || [], s5.requiresIfExists || []).forEach(function(n4) {
                        if (!i5.has(n4)) {
                          var s6 = e5.get(n4);
                          s6 && t7(s6);
                        }
                      }), n3.push(s5);
                    }(t6);
                  }), n3;
                }(t4);
                return ct.reduce(function(t5, i5) {
                  return t5.concat(e4.filter(function(t6) {
                    return t6.phase === i5;
                  }));
                }, []);
              }((s4 = [].concat(n2, a2.options.modifiers), r3 = s4.reduce(function(t4, e4) {
                var i5 = t4[e4.name];
                return t4[e4.name] = i5 ? Object.assign({}, i5, e4, { options: Object.assign({}, i5.options, e4.options), data: Object.assign({}, i5.data, e4.data) }) : e4, t4;
              }, {}), Object.keys(r3).map(function(t4) {
                return r3[t4];
              })));
              return a2.orderedModifiers = c3.filter(function(t4) {
                return t4.enabled;
              }), a2.orderedModifiers.forEach(function(t4) {
                var e4 = t4.name, i5 = t4.options, n3 = i5 === void 0 ? {} : i5, s5 = t4.effect;
                if (typeof s5 == "function") {
                  var o3 = s5({ state: a2, name: e4, instance: h3, options: n3 });
                  l2.push(o3 || function() {
                  });
                }
              }), h3.update();
            }, forceUpdate: function() {
              if (!c2) {
                var t4 = a2.elements, e4 = t4.reference, i4 = t4.popper;
                if (ce(e4, i4)) {
                  a2.rects = { reference: ae(e4, Ct(i4), a2.options.strategy === "fixed"), popper: vt(i4) }, a2.reset = false, a2.placement = a2.options.placement, a2.orderedModifiers.forEach(function(t5) {
                    return a2.modifiersData[t5.name] = Object.assign({}, t5.data);
                  });
                  for (var n3 = 0; n3 < a2.orderedModifiers.length; n3++)
                    if (a2.reset !== true) {
                      var s4 = a2.orderedModifiers[n3], o3 = s4.fn, r3 = s4.options, l3 = r3 === void 0 ? {} : r3, d3 = s4.name;
                      typeof o3 == "function" && (a2 = o3({ state: a2, options: l3, name: d3, instance: h3 }) || a2);
                    } else
                      a2.reset = false, n3 = -1;
                }
              }
            }, update: (s3 = function() {
              return new Promise(function(t4) {
                h3.forceUpdate(), t4(a2);
              });
            }, function() {
              return r2 || (r2 = new Promise(function(t4) {
                Promise.resolve().then(function() {
                  r2 = void 0, t4(s3());
                });
              })), r2;
            }), destroy: function() {
              d2(), c2 = true;
            } };
            if (!ce(t3, e3))
              return h3;
            function d2() {
              l2.forEach(function(t4) {
                return t4();
              }), l2 = [];
            }
            return h3.setOptions(i3).then(function(t4) {
              !c2 && i3.onFirstUpdate && i3.onFirstUpdate(t4);
            }), h3;
          };
        }
        var de = he(), ue = he({ defaultModifiers: [Rt, oe, Ht, mt] }), fe = he({ defaultModifiers: [Rt, oe, Ht, mt, se, te, re, Pt, ne] }), pe = Object.freeze({ __proto__: null, popperGenerator: he, detectOverflow: Zt, createPopperBase: de, createPopper: fe, createPopperLite: ue, top: it, bottom: nt, right: st, left: ot, auto: "auto", basePlacements: rt, start: "start", end: "end", clippingParents: "clippingParents", viewport: "viewport", popper: "popper", reference: "reference", variationPlacements: at, placements: lt, beforeRead: "beforeRead", read: "read", afterRead: "afterRead", beforeMain: "beforeMain", main: "main", afterMain: "afterMain", beforeWrite: "beforeWrite", write: "write", afterWrite: "afterWrite", modifierPhases: ct, applyStyles: mt, arrow: Pt, computeStyles: Ht, eventListeners: Rt, flip: te, hide: ne, offset: se, popperOffsets: oe, preventOverflow: re });
        const me = new RegExp("ArrowUp|ArrowDown|Escape"), ge = p2() ? "top-end" : "top-start", _e = p2() ? "top-start" : "top-end", be = p2() ? "bottom-end" : "bottom-start", ve = p2() ? "bottom-start" : "bottom-end", ye = p2() ? "left-start" : "right-start", we = p2() ? "right-start" : "left-start", Ee = { offset: [0, 2], boundary: "clippingParents", reference: "toggle", display: "dynamic", popperConfig: null, autoClose: true }, Ae = { offset: "(array|string|function)", boundary: "(string|element)", reference: "(string|element|object)", display: "string", popperConfig: "(null|object|function)", autoClose: "(boolean|string)" };
        class Te extends H {
          constructor(t2, e2) {
            super(t2), this._popper = null, this._config = this._getConfig(e2), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar();
          }
          static get Default() {
            return Ee;
          }
          static get DefaultType() {
            return Ae;
          }
          static get NAME() {
            return "dropdown";
          }
          toggle() {
            return this._isShown() ? this.hide() : this.show();
          }
          show() {
            if (l(this._element) || this._isShown(this._menu))
              return;
            const t2 = { relatedTarget: this._element };
            if (P.trigger(this._element, "show.bs.dropdown", t2).defaultPrevented)
              return;
            const e2 = Te.getParentFromElement(this._element);
            this._inNavbar ? F.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e2), "ontouchstart" in document.documentElement && !e2.closest(".navbar-nav") && [].concat(...document.body.children).forEach((t3) => P.on(t3, "mouseover", h2)), this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.classList.add("show"), this._element.classList.add("show"), P.trigger(this._element, "shown.bs.dropdown", t2);
          }
          hide() {
            if (l(this._element) || !this._isShown(this._menu))
              return;
            const t2 = { relatedTarget: this._element };
            this._completeHide(t2);
          }
          dispose() {
            this._popper && this._popper.destroy(), super.dispose();
          }
          update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
          }
          _completeHide(t2) {
            P.trigger(this._element, "hide.bs.dropdown", t2).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t3) => P.off(t3, "mouseover", h2)), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), F.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, "hidden.bs.dropdown", t2));
          }
          _getConfig(t2) {
            if (t2 = { ...this.constructor.Default, ...F.getDataAttributes(this._element), ...t2 }, r("dropdown", t2, this.constructor.DefaultType), typeof t2.reference == "object" && !s(t2.reference) && typeof t2.reference.getBoundingClientRect != "function")
              throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
            return t2;
          }
          _createPopper(t2) {
            if (pe === void 0)
              throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e2 = this._element;
            this._config.reference === "parent" ? e2 = t2 : s(this._config.reference) ? e2 = o(this._config.reference) : typeof this._config.reference == "object" && (e2 = this._config.reference);
            const i2 = this._getPopperConfig(), n2 = i2.modifiers.find((t3) => t3.name === "applyStyles" && t3.enabled === false);
            this._popper = fe(e2, this._menu, i2), n2 && F.setDataAttribute(this._menu, "popper", "static");
          }
          _isShown(t2 = this._element) {
            return t2.classList.contains("show");
          }
          _getMenuElement() {
            return U.next(this._element, ".dropdown-menu")[0];
          }
          _getPlacement() {
            const t2 = this._element.parentNode;
            if (t2.classList.contains("dropend"))
              return ye;
            if (t2.classList.contains("dropstart"))
              return we;
            const e2 = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
            return t2.classList.contains("dropup") ? e2 ? _e : ge : e2 ? ve : be;
          }
          _detectNavbar() {
            return this._element.closest(".navbar") !== null;
          }
          _getOffset() {
            const { offset: t2 } = this._config;
            return typeof t2 == "string" ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : typeof t2 == "function" ? (e2) => t2(e2, this._element) : t2;
          }
          _getPopperConfig() {
            const t2 = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
            return this._config.display === "static" && (t2.modifiers = [{ name: "applyStyles", enabled: false }]), { ...t2, ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(t2) : this._config.popperConfig };
          }
          _selectMenuItem({ key: t2, target: e2 }) {
            const i2 = U.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(a);
            i2.length && b(i2, e2, t2 === "ArrowDown", !i2.includes(e2)).focus();
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = Te.getOrCreateInstance(this, t2);
              if (typeof t2 == "string") {
                if (e2[t2] === void 0)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
          static clearMenus(t2) {
            if (t2 && (t2.button === 2 || t2.type === "keyup" && t2.key !== "Tab"))
              return;
            const e2 = U.find('[data-bs-toggle="dropdown"]');
            for (let i2 = 0, n2 = e2.length; i2 < n2; i2++) {
              const n3 = Te.getInstance(e2[i2]);
              if (!n3 || n3._config.autoClose === false)
                continue;
              if (!n3._isShown())
                continue;
              const s2 = { relatedTarget: n3._element };
              if (t2) {
                const e3 = t2.composedPath(), i3 = e3.includes(n3._menu);
                if (e3.includes(n3._element) || n3._config.autoClose === "inside" && !i3 || n3._config.autoClose === "outside" && i3)
                  continue;
                if (n3._menu.contains(t2.target) && (t2.type === "keyup" && t2.key === "Tab" || /input|select|option|textarea|form/i.test(t2.target.tagName)))
                  continue;
                t2.type === "click" && (s2.clickEvent = t2);
              }
              n3._completeHide(s2);
            }
          }
          static getParentFromElement(t2) {
            return i(t2) || t2.parentNode;
          }
          static dataApiKeydownHandler(t2) {
            if (/input|textarea/i.test(t2.target.tagName) ? t2.key === "Space" || t2.key !== "Escape" && (t2.key !== "ArrowDown" && t2.key !== "ArrowUp" || t2.target.closest(".dropdown-menu")) : !me.test(t2.key))
              return;
            const e2 = this.classList.contains("show");
            if (!e2 && t2.key === "Escape")
              return;
            if (t2.preventDefault(), t2.stopPropagation(), l(this))
              return;
            const i2 = this.matches('[data-bs-toggle="dropdown"]') ? this : U.prev(this, '[data-bs-toggle="dropdown"]')[0], n2 = Te.getOrCreateInstance(i2);
            if (t2.key !== "Escape")
              return t2.key === "ArrowUp" || t2.key === "ArrowDown" ? (e2 || n2.show(), void n2._selectMenuItem(t2)) : void (e2 && t2.key !== "Space" || Te.clearMenus());
            n2.hide();
          }
        }
        P.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', Te.dataApiKeydownHandler), P.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", Te.dataApiKeydownHandler), P.on(document, "click.bs.dropdown.data-api", Te.clearMenus), P.on(document, "keyup.bs.dropdown.data-api", Te.clearMenus), P.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function(t2) {
          t2.preventDefault(), Te.getOrCreateInstance(this).toggle();
        }), m(Te);
        class Oe {
          constructor() {
            this._element = document.body;
          }
          getWidth() {
            const t2 = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t2);
          }
          hide() {
            const t2 = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (e2) => e2 + t2), this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", (e2) => e2 + t2), this._setElementAttributes(".sticky-top", "marginRight", (e2) => e2 - t2);
          }
          _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
          }
          _setElementAttributes(t2, e2, i2) {
            const n2 = this.getWidth();
            this._applyManipulationCallback(t2, (t3) => {
              if (t3 !== this._element && window.innerWidth > t3.clientWidth + n2)
                return;
              this._saveInitialAttribute(t3, e2);
              const s2 = window.getComputedStyle(t3)[e2];
              t3.style[e2] = i2(Number.parseFloat(s2)) + "px";
            });
          }
          reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), this._resetElementAttributes(".sticky-top", "marginRight");
          }
          _saveInitialAttribute(t2, e2) {
            const i2 = t2.style[e2];
            i2 && F.setDataAttribute(t2, e2, i2);
          }
          _resetElementAttributes(t2, e2) {
            this._applyManipulationCallback(t2, (t3) => {
              const i2 = F.getDataAttribute(t3, e2);
              i2 === void 0 ? t3.style.removeProperty(e2) : (F.removeDataAttribute(t3, e2), t3.style[e2] = i2);
            });
          }
          _applyManipulationCallback(t2, e2) {
            s(t2) ? e2(t2) : U.find(t2, this._element).forEach(e2);
          }
          isOverflowing() {
            return this.getWidth() > 0;
          }
        }
        const Ce = { className: "modal-backdrop", isVisible: true, isAnimated: false, rootElement: "body", clickCallback: null }, ke = { className: "string", isVisible: "boolean", isAnimated: "boolean", rootElement: "(element|string)", clickCallback: "(function|null)" };
        class Le {
          constructor(t2) {
            this._config = this._getConfig(t2), this._isAppended = false, this._element = null;
          }
          show(t2) {
            this._config.isVisible ? (this._append(), this._config.isAnimated && d(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(() => {
              g(t2);
            })) : g(t2);
          }
          hide(t2) {
            this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(() => {
              this.dispose(), g(t2);
            })) : g(t2);
          }
          _getElement() {
            if (!this._element) {
              const t2 = document.createElement("div");
              t2.className = this._config.className, this._config.isAnimated && t2.classList.add("fade"), this._element = t2;
            }
            return this._element;
          }
          _getConfig(t2) {
            return (t2 = { ...Ce, ...typeof t2 == "object" ? t2 : {} }).rootElement = o(t2.rootElement), r("backdrop", t2, ke), t2;
          }
          _append() {
            this._isAppended || (this._config.rootElement.append(this._getElement()), P.on(this._getElement(), "mousedown.bs.backdrop", () => {
              g(this._config.clickCallback);
            }), this._isAppended = true);
          }
          dispose() {
            this._isAppended && (P.off(this._element, "mousedown.bs.backdrop"), this._element.remove(), this._isAppended = false);
          }
          _emulateAnimation(t2) {
            _(t2, this._getElement(), this._config.isAnimated);
          }
        }
        const xe = { trapElement: null, autofocus: true }, De = { trapElement: "element", autofocus: "boolean" };
        class Se {
          constructor(t2) {
            this._config = this._getConfig(t2), this._isActive = false, this._lastTabNavDirection = null;
          }
          activate() {
            const { trapElement: t2, autofocus: e2 } = this._config;
            this._isActive || (e2 && t2.focus(), P.off(document, ".bs.focustrap"), P.on(document, "focusin.bs.focustrap", (t3) => this._handleFocusin(t3)), P.on(document, "keydown.tab.bs.focustrap", (t3) => this._handleKeydown(t3)), this._isActive = true);
          }
          deactivate() {
            this._isActive && (this._isActive = false, P.off(document, ".bs.focustrap"));
          }
          _handleFocusin(t2) {
            const { target: e2 } = t2, { trapElement: i2 } = this._config;
            if (e2 === document || e2 === i2 || i2.contains(e2))
              return;
            const n2 = U.focusableChildren(i2);
            n2.length === 0 ? i2.focus() : this._lastTabNavDirection === "backward" ? n2[n2.length - 1].focus() : n2[0].focus();
          }
          _handleKeydown(t2) {
            t2.key === "Tab" && (this._lastTabNavDirection = t2.shiftKey ? "backward" : "forward");
          }
          _getConfig(t2) {
            return t2 = { ...xe, ...typeof t2 == "object" ? t2 : {} }, r("focustrap", t2, De), t2;
          }
        }
        const Ne = { backdrop: true, keyboard: true, focus: true }, Ie = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" };
        class Pe extends H {
          constructor(t2, e2) {
            super(t2), this._config = this._getConfig(e2), this._dialog = U.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = false, this._ignoreBackdropClick = false, this._isTransitioning = false, this._scrollBar = new Oe();
          }
          static get Default() {
            return Ne;
          }
          static get NAME() {
            return "modal";
          }
          toggle(t2) {
            return this._isShown ? this.hide() : this.show(t2);
          }
          show(t2) {
            this._isShown || this._isTransitioning || P.trigger(this._element, "show.bs.modal", { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._isAnimated() && (this._isTransitioning = true), this._scrollBar.hide(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), P.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
              P.one(this._element, "mouseup.dismiss.bs.modal", (t3) => {
                t3.target === this._element && (this._ignoreBackdropClick = true);
              });
            }), this._showBackdrop(() => this._showElement(t2)));
          }
          hide() {
            if (!this._isShown || this._isTransitioning)
              return;
            if (P.trigger(this._element, "hide.bs.modal").defaultPrevented)
              return;
            this._isShown = false;
            const t2 = this._isAnimated();
            t2 && (this._isTransitioning = true), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove("show"), P.off(this._element, "click.dismiss.bs.modal"), P.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback(() => this._hideModal(), this._element, t2);
          }
          dispose() {
            [window, this._dialog].forEach((t2) => P.off(t2, ".bs.modal")), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
          }
          handleUpdate() {
            this._adjustDialog();
          }
          _initializeBackDrop() {
            return new Le({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
          }
          _initializeFocusTrap() {
            return new Se({ trapElement: this._element });
          }
          _getConfig(t2) {
            return t2 = { ...Ne, ...F.getDataAttributes(this._element), ...typeof t2 == "object" ? t2 : {} }, r("modal", t2, Ie), t2;
          }
          _showElement(t2) {
            const e2 = this._isAnimated(), i2 = U.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i2 && (i2.scrollTop = 0), e2 && d(this._element), this._element.classList.add("show"), this._queueCallback(() => {
              this._config.focus && this._focustrap.activate(), this._isTransitioning = false, P.trigger(this._element, "shown.bs.modal", { relatedTarget: t2 });
            }, this._dialog, e2);
          }
          _setEscapeEvent() {
            this._isShown ? P.on(this._element, "keydown.dismiss.bs.modal", (t2) => {
              this._config.keyboard && t2.key === "Escape" ? (t2.preventDefault(), this.hide()) : this._config.keyboard || t2.key !== "Escape" || this._triggerBackdropTransition();
            }) : P.off(this._element, "keydown.dismiss.bs.modal");
          }
          _setResizeEvent() {
            this._isShown ? P.on(window, "resize.bs.modal", () => this._adjustDialog()) : P.off(window, "resize.bs.modal");
          }
          _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop.hide(() => {
              document.body.classList.remove("modal-open"), this._resetAdjustments(), this._scrollBar.reset(), P.trigger(this._element, "hidden.bs.modal");
            });
          }
          _showBackdrop(t2) {
            P.on(this._element, "click.dismiss.bs.modal", (t3) => {
              this._ignoreBackdropClick ? this._ignoreBackdropClick = false : t3.target === t3.currentTarget && (this._config.backdrop === true ? this.hide() : this._config.backdrop === "static" && this._triggerBackdropTransition());
            }), this._backdrop.show(t2);
          }
          _isAnimated() {
            return this._element.classList.contains("fade");
          }
          _triggerBackdropTransition() {
            if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
              return;
            const { classList: t2, scrollHeight: e2, style: i2 } = this._element, n2 = e2 > document.documentElement.clientHeight;
            !n2 && i2.overflowY === "hidden" || t2.contains("modal-static") || (n2 || (i2.overflowY = "hidden"), t2.add("modal-static"), this._queueCallback(() => {
              t2.remove("modal-static"), n2 || this._queueCallback(() => {
                i2.overflowY = "";
              }, this._dialog);
            }, this._dialog), this._element.focus());
          }
          _adjustDialog() {
            const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._scrollBar.getWidth(), i2 = e2 > 0;
            (!i2 && t2 && !p2() || i2 && !t2 && p2()) && (this._element.style.paddingLeft = e2 + "px"), (i2 && !t2 && !p2() || !i2 && t2 && p2()) && (this._element.style.paddingRight = e2 + "px");
          }
          _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
          }
          static jQueryInterface(t2, e2) {
            return this.each(function() {
              const i2 = Pe.getOrCreateInstance(this, t2);
              if (typeof t2 == "string") {
                if (i2[t2] === void 0)
                  throw new TypeError(`No method named "${t2}"`);
                i2[t2](e2);
              }
            });
          }
        }
        P.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(t2) {
          const e2 = i(this);
          ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), P.one(e2, "show.bs.modal", (t3) => {
            t3.defaultPrevented || P.one(e2, "hidden.bs.modal", () => {
              a(this) && this.focus();
            });
          }), Pe.getOrCreateInstance(e2).toggle(this);
        }), B(Pe), m(Pe);
        const je = { backdrop: true, keyboard: true, scroll: false }, Me = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" };
        class He extends H {
          constructor(t2, e2) {
            super(t2), this._config = this._getConfig(e2), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
          }
          static get NAME() {
            return "offcanvas";
          }
          static get Default() {
            return je;
          }
          toggle(t2) {
            return this._isShown ? this.hide() : this.show(t2);
          }
          show(t2) {
            this._isShown || P.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || new Oe().hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(() => {
              this._config.scroll || this._focustrap.activate(), P.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: t2 });
            }, this._element, true));
          }
          hide() {
            this._isShown && (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = false, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(() => {
              this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || new Oe().reset(), P.trigger(this._element, "hidden.bs.offcanvas");
            }, this._element, true)));
          }
          dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
          }
          _getConfig(t2) {
            return t2 = { ...je, ...F.getDataAttributes(this._element), ...typeof t2 == "object" ? t2 : {} }, r("offcanvas", t2, Me), t2;
          }
          _initializeBackDrop() {
            return new Le({ className: "offcanvas-backdrop", isVisible: this._config.backdrop, isAnimated: true, rootElement: this._element.parentNode, clickCallback: () => this.hide() });
          }
          _initializeFocusTrap() {
            return new Se({ trapElement: this._element });
          }
          _addEventListeners() {
            P.on(this._element, "keydown.dismiss.bs.offcanvas", (t2) => {
              this._config.keyboard && t2.key === "Escape" && this.hide();
            });
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = He.getOrCreateInstance(this, t2);
              if (typeof t2 == "string") {
                if (e2[t2] === void 0 || t2.startsWith("_") || t2 === "constructor")
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2](this);
              }
            });
          }
        }
        P.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(t2) {
          const e2 = i(this);
          if (["A", "AREA"].includes(this.tagName) && t2.preventDefault(), l(this))
            return;
          P.one(e2, "hidden.bs.offcanvas", () => {
            a(this) && this.focus();
          });
          const n2 = U.findOne(".offcanvas.show");
          n2 && n2 !== e2 && He.getInstance(n2).hide(), He.getOrCreateInstance(e2).toggle(this);
        }), P.on(window, "load.bs.offcanvas.data-api", () => U.find(".offcanvas.show").forEach((t2) => He.getOrCreateInstance(t2).show())), B(He), m(He);
        const Be = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Re = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i, We = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, ze = (t2, e2) => {
          const i2 = t2.nodeName.toLowerCase();
          if (e2.includes(i2))
            return !Be.has(i2) || Boolean(Re.test(t2.nodeValue) || We.test(t2.nodeValue));
          const n2 = e2.filter((t3) => t3 instanceof RegExp);
          for (let t3 = 0, e3 = n2.length; t3 < e3; t3++)
            if (n2[t3].test(i2))
              return true;
          return false;
        };
        function qe(t2, e2, i2) {
          if (!t2.length)
            return t2;
          if (i2 && typeof i2 == "function")
            return i2(t2);
          const n2 = new window.DOMParser().parseFromString(t2, "text/html"), s2 = Object.keys(e2), o2 = [].concat(...n2.body.querySelectorAll("*"));
          for (let t3 = 0, i3 = o2.length; t3 < i3; t3++) {
            const i4 = o2[t3], n3 = i4.nodeName.toLowerCase();
            if (!s2.includes(n3)) {
              i4.remove();
              continue;
            }
            const r2 = [].concat(...i4.attributes), a2 = [].concat(e2["*"] || [], e2[n3] || []);
            r2.forEach((t4) => {
              ze(t4, a2) || i4.removeAttribute(t4.nodeName);
            });
          }
          return n2.body.innerHTML;
        }
        const Fe = new Set(["sanitize", "allowList", "sanitizeFn"]), Ue = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(array|string|function)", container: "(string|element|boolean)", fallbackPlacements: "array", boundary: "(string|element)", customClass: "(string|function)", sanitize: "boolean", sanitizeFn: "(null|function)", allowList: "object", popperConfig: "(null|object|function)" }, $e = { AUTO: "auto", TOP: "top", RIGHT: p2() ? "left" : "right", BOTTOM: "bottom", LEFT: p2() ? "right" : "left" }, Ve = { animation: true, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: false, selector: false, placement: "top", offset: [0, 0], container: false, fallbackPlacements: ["top", "right", "bottom", "left"], boundary: "clippingParents", customClass: "", sanitize: true, sanitizeFn: null, allowList: { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, popperConfig: null }, Ke = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" };
        class Xe extends H {
          constructor(t2, e2) {
            if (pe === void 0)
              throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t2), this._isEnabled = true, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e2), this.tip = null, this._setListeners();
          }
          static get Default() {
            return Ve;
          }
          static get NAME() {
            return "tooltip";
          }
          static get Event() {
            return Ke;
          }
          static get DefaultType() {
            return Ue;
          }
          enable() {
            this._isEnabled = true;
          }
          disable() {
            this._isEnabled = false;
          }
          toggleEnabled() {
            this._isEnabled = !this._isEnabled;
          }
          toggle(t2) {
            if (this._isEnabled)
              if (t2) {
                const e2 = this._initializeOnDelegatedTarget(t2);
                e2._activeTrigger.click = !e2._activeTrigger.click, e2._isWithActiveTrigger() ? e2._enter(null, e2) : e2._leave(null, e2);
              } else {
                if (this.getTipElement().classList.contains("show"))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }
          dispose() {
            clearTimeout(this._timeout), P.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.remove(), this._popper && this._popper.destroy(), super.dispose();
          }
          show() {
            if (this._element.style.display === "none")
              throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled)
              return;
            const t2 = P.trigger(this._element, this.constructor.Event.SHOW), e2 = c(this._element), i2 = e2 === null ? this._element.ownerDocument.documentElement.contains(this._element) : e2.contains(this._element);
            if (t2.defaultPrevented || !i2)
              return;
            const n2 = this.getTipElement(), s2 = ((t3) => {
              do {
                t3 += Math.floor(1e6 * Math.random());
              } while (document.getElementById(t3));
              return t3;
            })(this.constructor.NAME);
            n2.setAttribute("id", s2), this._element.setAttribute("aria-describedby", s2), this._config.animation && n2.classList.add("fade");
            const o2 = typeof this._config.placement == "function" ? this._config.placement.call(this, n2, this._element) : this._config.placement, r2 = this._getAttachment(o2);
            this._addAttachmentClass(r2);
            const { container: a2 } = this._config;
            M.set(n2, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a2.append(n2), P.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = fe(this._element, n2, this._getPopperConfig(r2)), n2.classList.add("show");
            const l2 = this._resolvePossibleFunction(this._config.customClass);
            l2 && n2.classList.add(...l2.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t3) => {
              P.on(t3, "mouseover", h2);
            });
            const d2 = this.tip.classList.contains("fade");
            this._queueCallback(() => {
              const t3 = this._hoverState;
              this._hoverState = null, P.trigger(this._element, this.constructor.Event.SHOWN), t3 === "out" && this._leave(null, this);
            }, this.tip, d2);
          }
          hide() {
            if (!this._popper)
              return;
            const t2 = this.getTipElement();
            if (P.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented)
              return;
            t2.classList.remove("show"), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t3) => P.off(t3, "mouseover", h2)), this._activeTrigger.click = false, this._activeTrigger.focus = false, this._activeTrigger.hover = false;
            const e2 = this.tip.classList.contains("fade");
            this._queueCallback(() => {
              this._isWithActiveTrigger() || (this._hoverState !== "show" && t2.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), P.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null));
            }, this.tip, e2), this._hoverState = "";
          }
          update() {
            this._popper !== null && this._popper.update();
          }
          isWithContent() {
            return Boolean(this.getTitle());
          }
          getTipElement() {
            if (this.tip)
              return this.tip;
            const t2 = document.createElement("div");
            t2.innerHTML = this._config.template;
            const e2 = t2.children[0];
            return this.setContent(e2), e2.classList.remove("fade", "show"), this.tip = e2, this.tip;
          }
          setContent(t2) {
            this._sanitizeAndSetContent(t2, this.getTitle(), ".tooltip-inner");
          }
          _sanitizeAndSetContent(t2, e2, i2) {
            const n2 = U.findOne(i2, t2);
            e2 || !n2 ? this.setElementContent(n2, e2) : n2.remove();
          }
          setElementContent(t2, e2) {
            if (t2 !== null)
              return s(e2) ? (e2 = o(e2), void (this._config.html ? e2.parentNode !== t2 && (t2.innerHTML = "", t2.append(e2)) : t2.textContent = e2.textContent)) : void (this._config.html ? (this._config.sanitize && (e2 = qe(e2, this._config.allowList, this._config.sanitizeFn)), t2.innerHTML = e2) : t2.textContent = e2);
          }
          getTitle() {
            const t2 = this._element.getAttribute("data-bs-original-title") || this._config.title;
            return this._resolvePossibleFunction(t2);
          }
          updateAttachment(t2) {
            return t2 === "right" ? "end" : t2 === "left" ? "start" : t2;
          }
          _initializeOnDelegatedTarget(t2, e2) {
            return e2 || this.constructor.getOrCreateInstance(t2.delegateTarget, this._getDelegateConfig());
          }
          _getOffset() {
            const { offset: t2 } = this._config;
            return typeof t2 == "string" ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : typeof t2 == "function" ? (e2) => t2(e2, this._element) : t2;
          }
          _resolvePossibleFunction(t2) {
            return typeof t2 == "function" ? t2.call(this._element) : t2;
          }
          _getPopperConfig(t2) {
            const e2 = { placement: t2, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "onChange", enabled: true, phase: "afterWrite", fn: (t3) => this._handlePopperPlacementChange(t3) }], onFirstUpdate: (t3) => {
              t3.options.placement !== t3.placement && this._handlePopperPlacementChange(t3);
            } };
            return { ...e2, ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(e2) : this._config.popperConfig };
          }
          _addAttachmentClass(t2) {
            this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t2)}`);
          }
          _getAttachment(t2) {
            return $e[t2.toUpperCase()];
          }
          _setListeners() {
            this._config.trigger.split(" ").forEach((t2) => {
              if (t2 === "click")
                P.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t3) => this.toggle(t3));
              else if (t2 !== "manual") {
                const e2 = t2 === "hover" ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, i2 = t2 === "hover" ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                P.on(this._element, e2, this._config.selector, (t3) => this._enter(t3)), P.on(this._element, i2, this._config.selector, (t3) => this._leave(t3));
              }
            }), this._hideModalHandler = () => {
              this._element && this.hide();
            }, P.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = { ...this._config, trigger: "manual", selector: "" } : this._fixTitle();
          }
          _fixTitle() {
            const t2 = this._element.getAttribute("title"), e2 = typeof this._element.getAttribute("data-bs-original-title");
            (t2 || e2 !== "string") && (this._element.setAttribute("data-bs-original-title", t2 || ""), !t2 || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t2), this._element.setAttribute("title", ""));
          }
          _enter(t2, e2) {
            e2 = this._initializeOnDelegatedTarget(t2, e2), t2 && (e2._activeTrigger[t2.type === "focusin" ? "focus" : "hover"] = true), e2.getTipElement().classList.contains("show") || e2._hoverState === "show" ? e2._hoverState = "show" : (clearTimeout(e2._timeout), e2._hoverState = "show", e2._config.delay && e2._config.delay.show ? e2._timeout = setTimeout(() => {
              e2._hoverState === "show" && e2.show();
            }, e2._config.delay.show) : e2.show());
          }
          _leave(t2, e2) {
            e2 = this._initializeOnDelegatedTarget(t2, e2), t2 && (e2._activeTrigger[t2.type === "focusout" ? "focus" : "hover"] = e2._element.contains(t2.relatedTarget)), e2._isWithActiveTrigger() || (clearTimeout(e2._timeout), e2._hoverState = "out", e2._config.delay && e2._config.delay.hide ? e2._timeout = setTimeout(() => {
              e2._hoverState === "out" && e2.hide();
            }, e2._config.delay.hide) : e2.hide());
          }
          _isWithActiveTrigger() {
            for (const t2 in this._activeTrigger)
              if (this._activeTrigger[t2])
                return true;
            return false;
          }
          _getConfig(t2) {
            const e2 = F.getDataAttributes(this._element);
            return Object.keys(e2).forEach((t3) => {
              Fe.has(t3) && delete e2[t3];
            }), (t2 = { ...this.constructor.Default, ...e2, ...typeof t2 == "object" && t2 ? t2 : {} }).container = t2.container === false ? document.body : o(t2.container), typeof t2.delay == "number" && (t2.delay = { show: t2.delay, hide: t2.delay }), typeof t2.title == "number" && (t2.title = t2.title.toString()), typeof t2.content == "number" && (t2.content = t2.content.toString()), r("tooltip", t2, this.constructor.DefaultType), t2.sanitize && (t2.template = qe(t2.template, t2.allowList, t2.sanitizeFn)), t2;
          }
          _getDelegateConfig() {
            const t2 = {};
            for (const e2 in this._config)
              this.constructor.Default[e2] !== this._config[e2] && (t2[e2] = this._config[e2]);
            return t2;
          }
          _cleanTipClass() {
            const t2 = this.getTipElement(), e2 = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"), i2 = t2.getAttribute("class").match(e2);
            i2 !== null && i2.length > 0 && i2.map((t3) => t3.trim()).forEach((e3) => t2.classList.remove(e3));
          }
          _getBasicClassPrefix() {
            return "bs-tooltip";
          }
          _handlePopperPlacementChange(t2) {
            const { state: e2 } = t2;
            e2 && (this.tip = e2.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e2.placement)));
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = Xe.getOrCreateInstance(this, t2);
              if (typeof t2 == "string") {
                if (e2[t2] === void 0)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
        }
        m(Xe);
        const Ye = { ...Xe.Default, placement: "right", offset: [0, 8], trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }, Qe = { ...Xe.DefaultType, content: "(string|element|function)" }, Ge = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" };
        class Ze extends Xe {
          static get Default() {
            return Ye;
          }
          static get NAME() {
            return "popover";
          }
          static get Event() {
            return Ge;
          }
          static get DefaultType() {
            return Qe;
          }
          isWithContent() {
            return this.getTitle() || this._getContent();
          }
          setContent(t2) {
            this._sanitizeAndSetContent(t2, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t2, this._getContent(), ".popover-body");
          }
          _getContent() {
            return this._resolvePossibleFunction(this._config.content);
          }
          _getBasicClassPrefix() {
            return "bs-popover";
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = Ze.getOrCreateInstance(this, t2);
              if (typeof t2 == "string") {
                if (e2[t2] === void 0)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
        }
        m(Ze);
        const Je = { offset: 10, method: "auto", target: "" }, ti = { offset: "number", method: "string", target: "(string|element)" }, ei = ".nav-link, .list-group-item, .dropdown-item";
        class ii extends H {
          constructor(t2, e2) {
            super(t2), this._scrollElement = this._element.tagName === "BODY" ? window : this._element, this._config = this._getConfig(e2), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, P.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()), this.refresh(), this._process();
          }
          static get Default() {
            return Je;
          }
          static get NAME() {
            return "scrollspy";
          }
          refresh() {
            const t2 = this._scrollElement === this._scrollElement.window ? "offset" : "position", i2 = this._config.method === "auto" ? t2 : this._config.method, n2 = i2 === "position" ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), U.find(ei, this._config.target).map((t3) => {
              const s2 = e(t3), o2 = s2 ? U.findOne(s2) : null;
              if (o2) {
                const t4 = o2.getBoundingClientRect();
                if (t4.width || t4.height)
                  return [F[i2](o2).top + n2, s2];
              }
              return null;
            }).filter((t3) => t3).sort((t3, e2) => t3[0] - e2[0]).forEach((t3) => {
              this._offsets.push(t3[0]), this._targets.push(t3[1]);
            });
          }
          dispose() {
            P.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
          }
          _getConfig(t2) {
            return (t2 = { ...Je, ...F.getDataAttributes(this._element), ...typeof t2 == "object" && t2 ? t2 : {} }).target = o(t2.target) || document.documentElement, r("scrollspy", t2, ti), t2;
          }
          _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
          }
          _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
          }
          _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
          }
          _process() {
            const t2 = this._getScrollTop() + this._config.offset, e2 = this._getScrollHeight(), i2 = this._config.offset + e2 - this._getOffsetHeight();
            if (this._scrollHeight !== e2 && this.refresh(), t2 >= i2) {
              const t3 = this._targets[this._targets.length - 1];
              this._activeTarget !== t3 && this._activate(t3);
            } else {
              if (this._activeTarget && t2 < this._offsets[0] && this._offsets[0] > 0)
                return this._activeTarget = null, void this._clear();
              for (let e3 = this._offsets.length; e3--; )
                this._activeTarget !== this._targets[e3] && t2 >= this._offsets[e3] && (this._offsets[e3 + 1] === void 0 || t2 < this._offsets[e3 + 1]) && this._activate(this._targets[e3]);
            }
          }
          _activate(t2) {
            this._activeTarget = t2, this._clear();
            const e2 = ei.split(",").map((e3) => `${e3}[data-bs-target="${t2}"],${e3}[href="${t2}"]`), i2 = U.findOne(e2.join(","), this._config.target);
            i2.classList.add("active"), i2.classList.contains("dropdown-item") ? U.findOne(".dropdown-toggle", i2.closest(".dropdown")).classList.add("active") : U.parents(i2, ".nav, .list-group").forEach((t3) => {
              U.prev(t3, ".nav-link, .list-group-item").forEach((t4) => t4.classList.add("active")), U.prev(t3, ".nav-item").forEach((t4) => {
                U.children(t4, ".nav-link").forEach((t5) => t5.classList.add("active"));
              });
            }), P.trigger(this._scrollElement, "activate.bs.scrollspy", { relatedTarget: t2 });
          }
          _clear() {
            U.find(ei, this._config.target).filter((t2) => t2.classList.contains("active")).forEach((t2) => t2.classList.remove("active"));
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = ii.getOrCreateInstance(this, t2);
              if (typeof t2 == "string") {
                if (e2[t2] === void 0)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
        }
        P.on(window, "load.bs.scrollspy.data-api", () => {
          U.find('[data-bs-spy="scroll"]').forEach((t2) => new ii(t2));
        }), m(ii);
        class ni extends H {
          static get NAME() {
            return "tab";
          }
          show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active"))
              return;
            let t2;
            const e2 = i(this._element), n2 = this._element.closest(".nav, .list-group");
            if (n2) {
              const e3 = n2.nodeName === "UL" || n2.nodeName === "OL" ? ":scope > li > .active" : ".active";
              t2 = U.find(e3, n2), t2 = t2[t2.length - 1];
            }
            const s2 = t2 ? P.trigger(t2, "hide.bs.tab", { relatedTarget: this._element }) : null;
            if (P.trigger(this._element, "show.bs.tab", { relatedTarget: t2 }).defaultPrevented || s2 !== null && s2.defaultPrevented)
              return;
            this._activate(this._element, n2);
            const o2 = () => {
              P.trigger(t2, "hidden.bs.tab", { relatedTarget: this._element }), P.trigger(this._element, "shown.bs.tab", { relatedTarget: t2 });
            };
            e2 ? this._activate(e2, e2.parentNode, o2) : o2();
          }
          _activate(t2, e2, i2) {
            const n2 = (!e2 || e2.nodeName !== "UL" && e2.nodeName !== "OL" ? U.children(e2, ".active") : U.find(":scope > li > .active", e2))[0], s2 = i2 && n2 && n2.classList.contains("fade"), o2 = () => this._transitionComplete(t2, n2, i2);
            n2 && s2 ? (n2.classList.remove("show"), this._queueCallback(o2, t2, true)) : o2();
          }
          _transitionComplete(t2, e2, i2) {
            if (e2) {
              e2.classList.remove("active");
              const t3 = U.findOne(":scope > .dropdown-menu .active", e2.parentNode);
              t3 && t3.classList.remove("active"), e2.getAttribute("role") === "tab" && e2.setAttribute("aria-selected", false);
            }
            t2.classList.add("active"), t2.getAttribute("role") === "tab" && t2.setAttribute("aria-selected", true), d(t2), t2.classList.contains("fade") && t2.classList.add("show");
            let n2 = t2.parentNode;
            if (n2 && n2.nodeName === "LI" && (n2 = n2.parentNode), n2 && n2.classList.contains("dropdown-menu")) {
              const e3 = t2.closest(".dropdown");
              e3 && U.find(".dropdown-toggle", e3).forEach((t3) => t3.classList.add("active")), t2.setAttribute("aria-expanded", true);
            }
            i2 && i2();
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = ni.getOrCreateInstance(this);
              if (typeof t2 == "string") {
                if (e2[t2] === void 0)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2]();
              }
            });
          }
        }
        P.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function(t2) {
          ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), l(this) || ni.getOrCreateInstance(this).show();
        }), m(ni);
        const si = { animation: "boolean", autohide: "boolean", delay: "number" }, oi = { animation: true, autohide: true, delay: 5e3 };
        class ri extends H {
          constructor(t2, e2) {
            super(t2), this._config = this._getConfig(e2), this._timeout = null, this._hasMouseInteraction = false, this._hasKeyboardInteraction = false, this._setListeners();
          }
          static get DefaultType() {
            return si;
          }
          static get Default() {
            return oi;
          }
          static get NAME() {
            return "toast";
          }
          show() {
            P.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), d(this._element), this._element.classList.add("show"), this._element.classList.add("showing"), this._queueCallback(() => {
              this._element.classList.remove("showing"), P.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
            }, this._element, this._config.animation));
          }
          hide() {
            this._element.classList.contains("show") && (P.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add("showing"), this._queueCallback(() => {
              this._element.classList.add("hide"), this._element.classList.remove("showing"), this._element.classList.remove("show"), P.trigger(this._element, "hidden.bs.toast");
            }, this._element, this._config.animation)));
          }
          dispose() {
            this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), super.dispose();
          }
          _getConfig(t2) {
            return t2 = { ...oi, ...F.getDataAttributes(this._element), ...typeof t2 == "object" && t2 ? t2 : {} }, r("toast", t2, this.constructor.DefaultType), t2;
          }
          _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay)));
          }
          _onInteraction(t2, e2) {
            switch (t2.type) {
              case "mouseover":
              case "mouseout":
                this._hasMouseInteraction = e2;
                break;
              case "focusin":
              case "focusout":
                this._hasKeyboardInteraction = e2;
            }
            if (e2)
              return void this._clearTimeout();
            const i2 = t2.relatedTarget;
            this._element === i2 || this._element.contains(i2) || this._maybeScheduleHide();
          }
          _setListeners() {
            P.on(this._element, "mouseover.bs.toast", (t2) => this._onInteraction(t2, true)), P.on(this._element, "mouseout.bs.toast", (t2) => this._onInteraction(t2, false)), P.on(this._element, "focusin.bs.toast", (t2) => this._onInteraction(t2, true)), P.on(this._element, "focusout.bs.toast", (t2) => this._onInteraction(t2, false));
          }
          _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null;
          }
          static jQueryInterface(t2) {
            return this.each(function() {
              const e2 = ri.getOrCreateInstance(this, t2);
              if (typeof t2 == "string") {
                if (e2[t2] === void 0)
                  throw new TypeError(`No method named "${t2}"`);
                e2[t2](this);
              }
            });
          }
        }
        return B(ri), m(ri), { Alert: R, Button: W, Carousel: Z, Collapse: et, Dropdown: Te, Modal: Pe, Offcanvas: He, Popover: Ze, ScrollSpy: ii, Tab: ni, Toast: ri, Tooltip: Xe };
      });
    }
  });

  // node_modules/@vue/shared/dist/shared.esm-bundler.js
  function makeMap(str, expectsLowerCase) {
    const map2 = Object.create(null);
    const list = str.split(",");
    for (let i = 0; i < list.length; i++) {
      map2[list[i]] = true;
    }
    return expectsLowerCase ? (val) => !!map2[val.toLowerCase()] : (val) => !!map2[val];
  }
  var PatchFlagNames = {
    [1]: `TEXT`,
    [2]: `CLASS`,
    [4]: `STYLE`,
    [8]: `PROPS`,
    [16]: `FULL_PROPS`,
    [32]: `HYDRATE_EVENTS`,
    [64]: `STABLE_FRAGMENT`,
    [128]: `KEYED_FRAGMENT`,
    [256]: `UNKEYED_FRAGMENT`,
    [512]: `NEED_PATCH`,
    [1024]: `DYNAMIC_SLOTS`,
    [2048]: `DEV_ROOT_FRAGMENT`,
    [-1]: `HOISTED`,
    [-2]: `BAIL`
  };
  var slotFlagsText = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
  };
  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
  var isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
  function normalizeStyle(value) {
    if (isArray(value)) {
      const res = {};
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
        if (normalized) {
          for (const key in normalized) {
            res[key] = normalized[key];
          }
        }
      }
      return res;
    } else if (isString(value)) {
      return value;
    } else if (isObject(value)) {
      return value;
    }
  }
  var listDelimiterRE = /;(?![^(]*\))/g;
  var propertyDelimiterRE = /:(.+)/;
  function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach((item) => {
      if (item) {
        const tmp = item.split(propertyDelimiterRE);
        tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return ret;
  }
  function normalizeClass(value) {
    let res = "";
    if (isString(value)) {
      res = value;
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const normalized = normalizeClass(value[i]);
        if (normalized) {
          res += normalized + " ";
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          res += name + " ";
        }
      }
    }
    return res.trim();
  }
  var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
  var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
  var isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
  var isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
  var toDisplayString = (val) => {
    return val == null ? "" : isArray(val) || isObject(val) && val.toString === objectToString ? JSON.stringify(val, replacer, 2) : String(val);
  };
  var replacer = (_key, val) => {
    if (val && val.__v_isRef) {
      return replacer(_key, val.value);
    } else if (isMap(val)) {
      return {
        [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
          entries[`${key} =>`] = val2;
          return entries;
        }, {})
      };
    } else if (isSet(val)) {
      return {
        [`Set(${val.size})`]: [...val.values()]
      };
    } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
      return String(val);
    }
    return val;
  };
  var EMPTY_OBJ = true ? Object.freeze({}) : {};
  var EMPTY_ARR = true ? Object.freeze([]) : [];
  var NOOP = () => {
  };
  var NO = () => false;
  var onRE = /^on[^a-z]/;
  var isOn = (key) => onRE.test(key);
  var isModelListener = (key) => key.startsWith("onUpdate:");
  var extend = Object.assign;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var isArray = Array.isArray;
  var isMap = (val) => toTypeString(val) === "[object Map]";
  var isSet = (val) => toTypeString(val) === "[object Set]";
  var isFunction = (val) => typeof val === "function";
  var isString = (val) => typeof val === "string";
  var isSymbol = (val) => typeof val === "symbol";
  var isObject = (val) => val !== null && typeof val === "object";
  var isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
  };
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var isPlainObject = (val) => toTypeString(val) === "[object Object]";
  var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  var isReservedProp = /* @__PURE__ */ makeMap(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
  var cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  });
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
  var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
  var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
  var hasChanged = (value, oldValue) => !Object.is(value, oldValue);
  var invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
      fns[i](arg);
    }
  };
  var def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: false,
      value
    });
  };
  var toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
  };
  var _globalThis;
  var getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
  };

  // node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
  function warn(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
  }
  var activeEffectScope;
  var effectScopeStack = [];
  var EffectScope = class {
    constructor(detached = false) {
      this.active = true;
      this.effects = [];
      this.cleanups = [];
      if (!detached && activeEffectScope) {
        this.parent = activeEffectScope;
        this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
      }
    }
    run(fn) {
      if (this.active) {
        try {
          this.on();
          return fn();
        } finally {
          this.off();
        }
      } else if (true) {
        warn(`cannot run an inactive effect scope.`);
      }
    }
    on() {
      if (this.active) {
        effectScopeStack.push(this);
        activeEffectScope = this;
      }
    }
    off() {
      if (this.active) {
        effectScopeStack.pop();
        activeEffectScope = effectScopeStack[effectScopeStack.length - 1];
      }
    }
    stop(fromParent) {
      if (this.active) {
        this.effects.forEach((e) => e.stop());
        this.cleanups.forEach((cleanup) => cleanup());
        if (this.scopes) {
          this.scopes.forEach((e) => e.stop(true));
        }
        if (this.parent && !fromParent) {
          const last = this.parent.scopes.pop();
          if (last && last !== this) {
            this.parent.scopes[this.index] = last;
            last.index = this.index;
          }
        }
        this.active = false;
      }
    }
  };
  function recordEffectScope(effect2, scope) {
    scope = scope || activeEffectScope;
    if (scope && scope.active) {
      scope.effects.push(effect2);
    }
  }
  var createDep = (effects) => {
    const dep = new Set(effects);
    dep.w = 0;
    dep.n = 0;
    return dep;
  };
  var wasTracked = (dep) => (dep.w & trackOpBit) > 0;
  var newTracked = (dep) => (dep.n & trackOpBit) > 0;
  var initDepMarkers = ({ deps }) => {
    if (deps.length) {
      for (let i = 0; i < deps.length; i++) {
        deps[i].w |= trackOpBit;
      }
    }
  };
  var finalizeDepMarkers = (effect2) => {
    const { deps } = effect2;
    if (deps.length) {
      let ptr = 0;
      for (let i = 0; i < deps.length; i++) {
        const dep = deps[i];
        if (wasTracked(dep) && !newTracked(dep)) {
          dep.delete(effect2);
        } else {
          deps[ptr++] = dep;
        }
        dep.w &= ~trackOpBit;
        dep.n &= ~trackOpBit;
      }
      deps.length = ptr;
    }
  };
  var targetMap = new WeakMap();
  var effectTrackDepth = 0;
  var trackOpBit = 1;
  var maxMarkerBits = 30;
  var effectStack = [];
  var activeEffect;
  var ITERATE_KEY = Symbol(true ? "iterate" : "");
  var MAP_KEY_ITERATE_KEY = Symbol(true ? "Map key iterate" : "");
  var ReactiveEffect = class {
    constructor(fn, scheduler = null, scope) {
      this.fn = fn;
      this.scheduler = scheduler;
      this.active = true;
      this.deps = [];
      recordEffectScope(this, scope);
    }
    run() {
      if (!this.active) {
        return this.fn();
      }
      if (!effectStack.includes(this)) {
        try {
          effectStack.push(activeEffect = this);
          enableTracking();
          trackOpBit = 1 << ++effectTrackDepth;
          if (effectTrackDepth <= maxMarkerBits) {
            initDepMarkers(this);
          } else {
            cleanupEffect(this);
          }
          return this.fn();
        } finally {
          if (effectTrackDepth <= maxMarkerBits) {
            finalizeDepMarkers(this);
          }
          trackOpBit = 1 << --effectTrackDepth;
          resetTracking();
          effectStack.pop();
          const n = effectStack.length;
          activeEffect = n > 0 ? effectStack[n - 1] : void 0;
        }
      }
    }
    stop() {
      if (this.active) {
        cleanupEffect(this);
        if (this.onStop) {
          this.onStop();
        }
        this.active = false;
      }
    }
  };
  function cleanupEffect(effect2) {
    const { deps } = effect2;
    if (deps.length) {
      for (let i = 0; i < deps.length; i++) {
        deps[i].delete(effect2);
      }
      deps.length = 0;
    }
  }
  var shouldTrack = true;
  var trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function track(target, type, key) {
    if (!isTracking()) {
      return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep());
    }
    const eventInfo = true ? { effect: activeEffect, target, type, key } : void 0;
    trackEffects(dep, eventInfo);
  }
  function isTracking() {
    return shouldTrack && activeEffect !== void 0;
  }
  function trackEffects(dep, debuggerEventExtraInfo) {
    let shouldTrack2 = false;
    if (effectTrackDepth <= maxMarkerBits) {
      if (!newTracked(dep)) {
        dep.n |= trackOpBit;
        shouldTrack2 = !wasTracked(dep);
      }
    } else {
      shouldTrack2 = !dep.has(activeEffect);
    }
    if (shouldTrack2) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);
      if (activeEffect.onTrack) {
        activeEffect.onTrack(Object.assign({
          effect: activeEffect
        }, debuggerEventExtraInfo));
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    let deps = [];
    if (type === "clear") {
      deps = [...depsMap.values()];
    } else if (key === "length" && isArray(target)) {
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 >= newValue) {
          deps.push(dep);
        }
      });
    } else {
      if (key !== void 0) {
        deps.push(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!isArray(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isIntegerKey(key)) {
            deps.push(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!isArray(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    const eventInfo = true ? { target, type, key, newValue, oldValue, oldTarget } : void 0;
    if (deps.length === 1) {
      if (deps[0]) {
        if (true) {
          triggerEffects(deps[0], eventInfo);
        } else {
          triggerEffects(deps[0]);
        }
      }
    } else {
      const effects = [];
      for (const dep of deps) {
        if (dep) {
          effects.push(...dep);
        }
      }
      if (true) {
        triggerEffects(createDep(effects), eventInfo);
      } else {
        triggerEffects(createDep(effects));
      }
    }
  }
  function triggerEffects(dep, debuggerEventExtraInfo) {
    for (const effect2 of isArray(dep) ? dep : [...dep]) {
      if (effect2 !== activeEffect || effect2.allowRecurse) {
        if (effect2.onTrigger) {
          effect2.onTrigger(extend({ effect: effect2 }, debuggerEventExtraInfo));
        }
        if (effect2.scheduler) {
          effect2.scheduler();
        } else {
          effect2.run();
        }
      }
    }
  }
  var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
  var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
  var get = /* @__PURE__ */ createGetter();
  var shallowGet = /* @__PURE__ */ createGetter(false, true);
  var readonlyGet = /* @__PURE__ */ createGetter(true);
  var shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
  var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
  function createArrayInstrumentations() {
    const instrumentations = {};
    ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
      instrumentations[key] = function(...args) {
        const arr = toRaw(this);
        for (let i = 0, l = this.length; i < l; i++) {
          track(arr, "get", i + "");
        }
        const res = arr[key](...args);
        if (res === -1 || res === false) {
          return arr[key](...args.map(toRaw));
        } else {
          return res;
        }
      };
    });
    ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
      instrumentations[key] = function(...args) {
        pauseTracking();
        const res = toRaw(this)[key].apply(this, args);
        resetTracking();
        return res;
      };
    });
    return instrumentations;
  }
  function createGetter(isReadonly2 = false, shallow = false) {
    return function get2(target, key, receiver) {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }
      const targetIsArray = isArray(target);
      if (!isReadonly2 && targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      const res = Reflect.get(target, key, receiver);
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly2) {
        track(target, "get", key);
      }
      if (shallow) {
        return res;
      }
      if (isRef(res)) {
        const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
        return shouldUnwrap ? res.value : res;
      }
      if (isObject(res)) {
        return isReadonly2 ? readonly(res) : reactive(res);
      }
      return res;
    };
  }
  var set = /* @__PURE__ */ createSetter();
  var shallowSet = /* @__PURE__ */ createSetter(true);
  function createSetter(shallow = false) {
    return function set2(target, key, value, receiver) {
      let oldValue = target[key];
      if (!shallow) {
        value = toRaw(value);
        oldValue = toRaw(oldValue);
        if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }
      const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    };
  }
  function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  function ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
  var mutableHandlers = {
    get,
    set,
    deleteProperty,
    has,
    ownKeys
  };
  var readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
      if (true) {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    },
    deleteProperty(target, key) {
      if (true) {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    }
  };
  var shallowReactiveHandlers = /* @__PURE__ */ extend({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
  });
  var shallowReadonlyHandlers = /* @__PURE__ */ extend({}, readonlyHandlers, {
    get: shallowReadonlyGet
  });
  var toReactive = (value) => isObject(value) ? reactive(value) : value;
  var toReadonly = (value) => isObject(value) ? readonly(value) : value;
  var toShallow = (value) => value;
  var getProto = (v) => Reflect.getPrototypeOf(v);
  function get$1(target, key, isReadonly2 = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly2 && track(rawTarget, "get", key);
    }
    !isReadonly2 && track(rawTarget, "get", rawKey);
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has$1(key, isReadonly2 = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) {
      !isReadonly2 && track(rawTarget, "has", key);
    }
    !isReadonly2 && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly2 = false) {
    target = target["__v_raw"];
    !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get2 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get2.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (hasChanged(value, oldValue)) {
      trigger(target, "set", key, value, oldValue);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get2 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get2 ? get2.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = true ? isMap(target) ? new Map(target) : new Set(target) : void 0;
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0, oldTarget);
    }
    return result;
  }
  function createForEach(isReadonly2, isShallow) {
    return function forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw(target);
      const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly2, isShallow) {
    return function(...args) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      return {
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      if (true) {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
      }
      return type === "delete" ? false : this;
    };
  }
  function createInstrumentations() {
    const mutableInstrumentations2 = {
      get(key) {
        return get$1(this, key);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
      get(key) {
        return get$1(this, key, false, true);
      },
      get size() {
        return size(this);
      },
      has: has$1,
      add,
      set: set$1,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear"),
      forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
      get(key) {
        return get$1(this, key, true, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has$1.call(this, key, true);
      },
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear"),
      forEach: createForEach(true, true)
    };
    const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
    iteratorMethods.forEach((method) => {
      mutableInstrumentations2[method] = createIterableMethod(method, false, false);
      readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
      shallowInstrumentations2[method] = createIterableMethod(method, false, true);
      shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
    });
    return [
      mutableInstrumentations2,
      readonlyInstrumentations2,
      shallowInstrumentations2,
      shallowReadonlyInstrumentations2
    ];
  }
  var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
  function createInstrumentationGetter(isReadonly2, shallow) {
    const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }
  var mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
  };
  var shallowCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, true)
  };
  var readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
  };
  var shallowReadonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, true)
  };
  function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
      const type = toRawType(target);
      console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
  }
  var reactiveMap = new WeakMap();
  var shallowReactiveMap = new WeakMap();
  var readonlyMap = new WeakMap();
  var shallowReadonlyMap = new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
  }
  function reactive(target) {
    if (target && target["__v_isReadonly"]) {
      return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
  }
  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
  }
  function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      if (true) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
      }
      return target;
    }
    if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }
  function isReactive(value) {
    if (isReadonly(value)) {
      return isReactive(value["__v_raw"]);
    }
    return !!(value && value["__v_isReactive"]);
  }
  function isReadonly(value) {
    return !!(value && value["__v_isReadonly"]);
  }
  function isProxy(value) {
    return isReactive(value) || isReadonly(value);
  }
  function toRaw(observed) {
    const raw = observed && observed["__v_raw"];
    return raw ? toRaw(raw) : observed;
  }
  function markRaw(value) {
    def(value, "__v_skip", true);
    return value;
  }
  function trackRefValue(ref2) {
    if (isTracking()) {
      ref2 = toRaw(ref2);
      if (!ref2.dep) {
        ref2.dep = createDep();
      }
      if (true) {
        trackEffects(ref2.dep, {
          target: ref2,
          type: "get",
          key: "value"
        });
      } else {
        trackEffects(ref2.dep);
      }
    }
  }
  function triggerRefValue(ref2, newVal) {
    ref2 = toRaw(ref2);
    if (ref2.dep) {
      if (true) {
        triggerEffects(ref2.dep, {
          target: ref2,
          type: "set",
          key: "value",
          newValue: newVal
        });
      } else {
        triggerEffects(ref2.dep);
      }
    }
  }
  var convert = (val) => isObject(val) ? reactive(val) : val;
  function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
  }
  function ref(value) {
    return createRef(value);
  }
  var RefImpl = class {
    constructor(value, _shallow = false) {
      this._shallow = _shallow;
      this.dep = void 0;
      this.__v_isRef = true;
      this._rawValue = _shallow ? value : toRaw(value);
      this._value = _shallow ? value : convert(value);
    }
    get value() {
      trackRefValue(this);
      return this._value;
    }
    set value(newVal) {
      newVal = this._shallow ? newVal : toRaw(newVal);
      if (hasChanged(newVal, this._rawValue)) {
        this._rawValue = newVal;
        this._value = this._shallow ? newVal : convert(newVal);
        triggerRefValue(this, newVal);
      }
    }
  };
  function createRef(rawValue, shallow = false) {
    if (isRef(rawValue)) {
      return rawValue;
    }
    return new RefImpl(rawValue, shallow);
  }
  function unref(ref2) {
    return isRef(ref2) ? ref2.value : ref2;
  }
  var shallowUnwrapHandlers = {
    get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
      const oldValue = target[key];
      if (isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      } else {
        return Reflect.set(target, key, value, receiver);
      }
    }
  };
  function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
  }
  var _a;
  var tick = Promise.resolve();
  _a = "__v_isReadonly";

  // node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
  var isHmrUpdating = false;
  var hmrDirtyComponents = new Set();
  if (true) {
    const globalObject = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};
    globalObject.__VUE_HMR_RUNTIME__ = {
      createRecord: tryWrap(createRecord),
      rerender: tryWrap(rerender),
      reload: tryWrap(reload)
    };
  }
  var map = new Map();
  function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = map.get(id);
    if (!record) {
      createRecord(id, instance.type);
      record = map.get(id);
    }
    record.instances.add(instance);
  }
  function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).instances.delete(instance);
  }
  function createRecord(id, component) {
    if (!component) {
      warn2(`HMR API usage is out of date.
Please upgrade vue-loader/vite/rollup-plugin-vue or other relevant dependency that handles Vue SFC compilation.`);
      component = {};
    }
    if (map.has(id)) {
      return false;
    }
    map.set(id, {
      component: isClassComponent(component) ? component.__vccOpts : component,
      instances: new Set()
    });
    return true;
  }
  function rerender(id, newRender) {
    const record = map.get(id);
    if (!record)
      return;
    if (newRender)
      record.component.render = newRender;
    Array.from(record.instances).forEach((instance) => {
      if (newRender) {
        instance.render = newRender;
      }
      instance.renderCache = [];
      isHmrUpdating = true;
      instance.update();
      isHmrUpdating = false;
    });
  }
  function reload(id, newComp) {
    const record = map.get(id);
    if (!record)
      return;
    const { component, instances } = record;
    if (!hmrDirtyComponents.has(component)) {
      newComp = isClassComponent(newComp) ? newComp.__vccOpts : newComp;
      extend(component, newComp);
      for (const key in component) {
        if (key !== "__file" && !(key in newComp)) {
          delete component[key];
        }
      }
      hmrDirtyComponents.add(component);
      queuePostFlushCb(() => {
        hmrDirtyComponents.delete(component);
      });
    }
    Array.from(instances).forEach((instance) => {
      instance.appContext.optionsCache.delete(instance.type);
      if (instance.ceReload) {
        hmrDirtyComponents.add(component);
        instance.ceReload(newComp.styles);
        hmrDirtyComponents.delete(component);
      } else if (instance.parent) {
        queueJob(instance.parent.update);
        if (instance.parent.type.__asyncLoader && instance.parent.ceReload) {
          instance.parent.ceReload(newComp.styles);
        }
      } else if (instance.appContext.reload) {
        instance.appContext.reload();
      } else if (typeof window !== "undefined") {
        window.location.reload();
      } else {
        console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
      }
    });
  }
  function tryWrap(fn) {
    return (id, arg) => {
      try {
        return fn(id, arg);
      } catch (e) {
        console.error(e);
        console.warn(`[HMR] Something went wrong during Vue component hot-reload. Full reload required.`);
      }
    };
  }
  var devtools;
  function setDevtoolsHook(hook) {
    devtools = hook;
  }
  function devtoolsInitApp(app, version2) {
    if (!devtools)
      return;
    devtools.emit("app:init", app, version2, {
      Fragment,
      Text,
      Comment: Comment$1,
      Static
    });
  }
  function devtoolsUnmountApp(app) {
    if (!devtools)
      return;
    devtools.emit("app:unmount", app);
  }
  var devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook("component:added");
  var devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook("component:updated");
  var devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook("component:removed");
  function createDevtoolsComponentHook(hook) {
    return (component) => {
      if (!devtools)
        return;
      devtools.emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : void 0, component);
    };
  }
  var devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:start");
  var devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook("perf:end");
  function createDevtoolsPerformanceHook(hook) {
    return (component, type, time) => {
      if (!devtools)
        return;
      devtools.emit(hook, component.appContext.app, component.uid, component, type, time);
    };
  }
  function devtoolsComponentEmit(component, event, params) {
    if (!devtools)
      return;
    devtools.emit("component:emit", component.appContext.app, component, event, params);
  }
  var deprecationData = {
    ["GLOBAL_MOUNT"]: {
      message: `The global app bootstrapping API has changed: vm.$mount() and the "el" option have been removed. Use createApp(RootComponent).mount() instead.`,
      link: `https://v3.vuejs.org/guide/migration/global-api.html#mounting-app-instance`
    },
    ["GLOBAL_MOUNT_CONTAINER"]: {
      message: `Vue detected directives on the mount container. In Vue 3, the container is no longer considered part of the template and will not be processed/replaced.`,
      link: `https://v3.vuejs.org/guide/migration/mount-changes.html`
    },
    ["GLOBAL_EXTEND"]: {
      message: `Vue.extend() has been removed in Vue 3. Use defineComponent() instead.`,
      link: `https://v3.vuejs.org/api/global-api.html#definecomponent`
    },
    ["GLOBAL_PROTOTYPE"]: {
      message: `Vue.prototype is no longer available in Vue 3. Use app.config.globalProperties instead.`,
      link: `https://v3.vuejs.org/guide/migration/global-api.html#vue-prototype-replaced-by-config-globalproperties`
    },
    ["GLOBAL_SET"]: {
      message: `Vue.set() has been removed as it is no longer needed in Vue 3. Simply use native JavaScript mutations.`
    },
    ["GLOBAL_DELETE"]: {
      message: `Vue.delete() has been removed as it is no longer needed in Vue 3. Simply use native JavaScript mutations.`
    },
    ["GLOBAL_OBSERVABLE"]: {
      message: `Vue.observable() has been removed. Use \`import { reactive } from "vue"\` from Composition API instead.`,
      link: `https://v3.vuejs.org/api/basic-reactivity.html`
    },
    ["GLOBAL_PRIVATE_UTIL"]: {
      message: `Vue.util has been removed. Please refactor to avoid its usage since it was an internal API even in Vue 2.`
    },
    ["CONFIG_SILENT"]: {
      message: `config.silent has been removed because it is not good practice to intentionally suppress warnings. You can use your browser console's filter features to focus on relevant messages.`
    },
    ["CONFIG_DEVTOOLS"]: {
      message: `config.devtools has been removed. To enable devtools for production, configure the __VUE_PROD_DEVTOOLS__ compile-time flag.`,
      link: `https://github.com/vuejs/vue-next/tree/master/packages/vue#bundler-build-feature-flags`
    },
    ["CONFIG_KEY_CODES"]: {
      message: `config.keyCodes has been removed. In Vue 3, you can directly use the kebab-case key names as v-on modifiers.`,
      link: `https://v3.vuejs.org/guide/migration/keycode-modifiers.html`
    },
    ["CONFIG_PRODUCTION_TIP"]: {
      message: `config.productionTip has been removed.`,
      link: `https://v3.vuejs.org/guide/migration/global-api.html#config-productiontip-removed`
    },
    ["CONFIG_IGNORED_ELEMENTS"]: {
      message: () => {
        let msg = `config.ignoredElements has been removed.`;
        if (isRuntimeOnly()) {
          msg += ` Pass the "isCustomElement" option to @vue/compiler-dom instead.`;
        } else {
          msg += ` Use config.isCustomElement instead.`;
        }
        return msg;
      },
      link: `https://v3.vuejs.org/guide/migration/global-api.html#config-ignoredelements-is-now-config-iscustomelement`
    },
    ["CONFIG_WHITESPACE"]: {
      message: `Vue 3 compiler's whitespace option will default to "condense" instead of "preserve". To suppress this warning, provide an explicit value for \`config.compilerOptions.whitespace\`.`
    },
    ["CONFIG_OPTION_MERGE_STRATS"]: {
      message: `config.optionMergeStrategies no longer exposes internal strategies. Use custom merge functions instead.`
    },
    ["INSTANCE_SET"]: {
      message: `vm.$set() has been removed as it is no longer needed in Vue 3. Simply use native JavaScript mutations.`
    },
    ["INSTANCE_DELETE"]: {
      message: `vm.$delete() has been removed as it is no longer needed in Vue 3. Simply use native JavaScript mutations.`
    },
    ["INSTANCE_DESTROY"]: {
      message: `vm.$destroy() has been removed. Use app.unmount() instead.`,
      link: `https://v3.vuejs.org/api/application-api.html#unmount`
    },
    ["INSTANCE_EVENT_EMITTER"]: {
      message: `vm.$on/$once/$off() have been removed. Use an external event emitter library instead.`,
      link: `https://v3.vuejs.org/guide/migration/events-api.html`
    },
    ["INSTANCE_EVENT_HOOKS"]: {
      message: (event) => `"${event}" lifecycle events are no longer supported. From templates, use the "vnode" prefix instead of "hook:". For example, @${event} should be changed to @vnode-${event.slice(5)}. From JavaScript, use Composition API to dynamically register lifecycle hooks.`,
      link: `https://v3.vuejs.org/guide/migration/vnode-lifecycle-events.html`
    },
    ["INSTANCE_CHILDREN"]: {
      message: `vm.$children has been removed. Consider refactoring your logic to avoid relying on direct access to child components.`,
      link: `https://v3.vuejs.org/guide/migration/children.html`
    },
    ["INSTANCE_LISTENERS"]: {
      message: `vm.$listeners has been removed. In Vue 3, parent v-on listeners are included in vm.$attrs and it is no longer necessary to separately use v-on="$listeners" if you are already using v-bind="$attrs". (Note: the Vue 3 behavior only applies if this compat config is disabled)`,
      link: `https://v3.vuejs.org/guide/migration/listeners-removed.html`
    },
    ["INSTANCE_SCOPED_SLOTS"]: {
      message: `vm.$scopedSlots has been removed. Use vm.$slots instead.`,
      link: `https://v3.vuejs.org/guide/migration/slots-unification.html`
    },
    ["INSTANCE_ATTRS_CLASS_STYLE"]: {
      message: (componentName) => `Component <${componentName || "Anonymous"}> has \`inheritAttrs: false\` but is relying on class/style fallthrough from parent. In Vue 3, class/style are now included in $attrs and will no longer fallthrough when inheritAttrs is false. If you are already using v-bind="$attrs" on component root it should render the same end result. If you are binding $attrs to a non-root element and expecting class/style to fallthrough on root, you will need to now manually bind them on root via :class="$attrs.class".`,
      link: `https://v3.vuejs.org/guide/migration/attrs-includes-class-style.html`
    },
    ["OPTIONS_DATA_FN"]: {
      message: `The "data" option can no longer be a plain object. Always use a function.`,
      link: `https://v3.vuejs.org/guide/migration/data-option.html`
    },
    ["OPTIONS_DATA_MERGE"]: {
      message: (key) => `Detected conflicting key "${key}" when merging data option values. In Vue 3, data keys are merged shallowly and will override one another.`,
      link: `https://v3.vuejs.org/guide/migration/data-option.html#mixin-merge-behavior-change`
    },
    ["OPTIONS_BEFORE_DESTROY"]: {
      message: `\`beforeDestroy\` has been renamed to \`beforeUnmount\`.`
    },
    ["OPTIONS_DESTROYED"]: {
      message: `\`destroyed\` has been renamed to \`unmounted\`.`
    },
    ["WATCH_ARRAY"]: {
      message: `"watch" option or vm.$watch on an array value will no longer trigger on array mutation unless the "deep" option is specified. If current usage is intended, you can disable the compat behavior and suppress this warning with:

  configureCompat({ ${"WATCH_ARRAY"}: false })
`,
      link: `https://v3.vuejs.org/guide/migration/watch.html`
    },
    ["PROPS_DEFAULT_THIS"]: {
      message: (key) => `props default value function no longer has access to "this". The compat build only offers access to this.$options.(found in prop "${key}")`,
      link: `https://v3.vuejs.org/guide/migration/props-default-this.html`
    },
    ["CUSTOM_DIR"]: {
      message: (legacyHook, newHook) => `Custom directive hook "${legacyHook}" has been removed. Use "${newHook}" instead.`,
      link: `https://v3.vuejs.org/guide/migration/custom-directives.html`
    },
    ["V_FOR_REF"]: {
      message: `Ref usage on v-for no longer creates array ref values in Vue 3. Consider using function refs or refactor to avoid ref usage altogether.`,
      link: `https://v3.vuejs.org/guide/migration/array-refs.html`
    },
    ["V_ON_KEYCODE_MODIFIER"]: {
      message: `Using keyCode as v-on modifier is no longer supported. Use kebab-case key name modifiers instead.`,
      link: `https://v3.vuejs.org/guide/migration/keycode-modifiers.html`
    },
    ["ATTR_FALSE_VALUE"]: {
      message: (name) => `Attribute "${name}" with v-bind value \`false\` will render ${name}="false" instead of removing it in Vue 3. To remove the attribute, use \`null\` or \`undefined\` instead. If the usage is intended, you can disable the compat behavior and suppress this warning with:

  configureCompat({ ${"ATTR_FALSE_VALUE"}: false })
`,
      link: `https://v3.vuejs.org/guide/migration/attribute-coercion.html`
    },
    ["ATTR_ENUMERATED_COERCION"]: {
      message: (name, value, coerced) => `Enumerated attribute "${name}" with v-bind value \`${value}\` will ${value === null ? `be removed` : `render the value as-is`} instead of coercing the value to "${coerced}" in Vue 3. Always use explicit "true" or "false" values for enumerated attributes. If the usage is intended, you can disable the compat behavior and suppress this warning with:

  configureCompat({ ${"ATTR_ENUMERATED_COERCION"}: false })
`,
      link: `https://v3.vuejs.org/guide/migration/attribute-coercion.html`
    },
    ["TRANSITION_CLASSES"]: {
      message: ``
    },
    ["TRANSITION_GROUP_ROOT"]: {
      message: `<TransitionGroup> no longer renders a root <span> element by default if no "tag" prop is specified. If you do not rely on the span for styling, you can disable the compat behavior and suppress this warning with:

  configureCompat({ ${"TRANSITION_GROUP_ROOT"}: false })
`,
      link: `https://v3.vuejs.org/guide/migration/transition-group.html`
    },
    ["COMPONENT_ASYNC"]: {
      message: (comp) => {
        const name = getComponentName(comp);
        return `Async component${name ? ` <${name}>` : `s`} should be explicitly created via \`defineAsyncComponent()\` in Vue 3. Plain functions will be treated as functional components in non-compat build. If you have already migrated all async component usage and intend to use plain functions for functional components, you can disable the compat behavior and suppress this warning with:

  configureCompat({ ${"COMPONENT_ASYNC"}: false })
`;
      },
      link: `https://v3.vuejs.org/guide/migration/async-components.html`
    },
    ["COMPONENT_FUNCTIONAL"]: {
      message: (comp) => {
        const name = getComponentName(comp);
        return `Functional component${name ? ` <${name}>` : `s`} should be defined as a plain function in Vue 3. The "functional" option has been removed. NOTE: Before migrating to use plain functions for functional components, first make sure that all async components usage have been migrated and its compat behavior has been disabled.`;
      },
      link: `https://v3.vuejs.org/guide/migration/functional-components.html`
    },
    ["COMPONENT_V_MODEL"]: {
      message: (comp) => {
        const configMsg = `opt-in to Vue 3 behavior on a per-component basis with \`compatConfig: { ${"COMPONENT_V_MODEL"}: false }\`.`;
        if (comp.props && (isArray(comp.props) ? comp.props.includes("modelValue") : hasOwn(comp.props, "modelValue"))) {
          return `Component delcares "modelValue" prop, which is Vue 3 usage, but is running under Vue 2 compat v-model behavior. You can ${configMsg}`;
        }
        return `v-model usage on component has changed in Vue 3. Component that expects to work with v-model should now use the "modelValue" prop and emit the "update:modelValue" event. You can update the usage and then ${configMsg}`;
      },
      link: `https://v3.vuejs.org/guide/migration/v-model.html`
    },
    ["RENDER_FUNCTION"]: {
      message: `Vue 3's render function API has changed. You can opt-in to the new API with:

  configureCompat({ ${"RENDER_FUNCTION"}: false })

  (This can also be done per-component via the "compatConfig" option.)`,
      link: `https://v3.vuejs.org/guide/migration/render-function-api.html`
    },
    ["FILTERS"]: {
      message: `filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.`,
      link: `https://v3.vuejs.org/guide/migration/filters.html`
    },
    ["PRIVATE_APIS"]: {
      message: (name) => `"${name}" is a Vue 2 private API that no longer exists in Vue 3. If you are seeing this warning only due to a dependency, you can suppress this warning via { PRIVATE_APIS: 'supress-warning' }.`
    }
  };
  var instanceWarned = Object.create(null);
  var warnCount = Object.create(null);
  function emit(instance, event, ...rawArgs) {
    const props = instance.vnode.props || EMPTY_OBJ;
    if (true) {
      const { emitsOptions, propsOptions: [propsOptions] } = instance;
      if (emitsOptions) {
        if (!(event in emitsOptions) && true) {
          if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
            warn2(`Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(event)}" prop.`);
          }
        } else {
          const validator = emitsOptions[event];
          if (isFunction(validator)) {
            const isValid = validator(...rawArgs);
            if (!isValid) {
              warn2(`Invalid event arguments: event validation failed for event "${event}".`);
            }
          }
        }
      }
    }
    let args = rawArgs;
    const isModelListener2 = event.startsWith("update:");
    const modelArg = isModelListener2 && event.slice(7);
    if (modelArg && modelArg in props) {
      const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
      const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
      if (trim) {
        args = rawArgs.map((a) => a.trim());
      } else if (number) {
        args = rawArgs.map(toNumber);
      }
    }
    if (true) {
      devtoolsComponentEmit(instance, event, args);
    }
    if (true) {
      const lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
        warn2(`Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(event)}" instead of "${event}".`);
      }
    }
    let handlerName;
    let handler = props[handlerName = toHandlerKey(event)] || props[handlerName = toHandlerKey(camelize(event))];
    if (!handler && isModelListener2) {
      handler = props[handlerName = toHandlerKey(hyphenate(event))];
    }
    if (handler) {
      callWithAsyncErrorHandling(handler, instance, 6, args);
    }
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
      if (!instance.emitted) {
        instance.emitted = {};
      } else if (instance.emitted[handlerName]) {
        return;
      }
      instance.emitted[handlerName] = true;
      callWithAsyncErrorHandling(onceHandler, instance, 6, args);
    }
  }
  function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== void 0) {
      return cached;
    }
    const raw = comp.emits;
    let normalized = {};
    let hasExtends = false;
    if (false) {
      const extendEmits = (raw2) => {
        const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
        if (normalizedFromExtend) {
          hasExtends = true;
          extend(normalized, normalizedFromExtend);
        }
      };
      if (!asMixin && appContext.mixins.length) {
        appContext.mixins.forEach(extendEmits);
      }
      if (comp.extends) {
        extendEmits(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendEmits);
      }
    }
    if (!raw && !hasExtends) {
      cache.set(comp, null);
      return null;
    }
    if (isArray(raw)) {
      raw.forEach((key) => normalized[key] = null);
    } else {
      extend(normalized, raw);
    }
    cache.set(comp, normalized);
    return normalized;
  }
  function isEmitListener(options, key) {
    if (!options || !isOn(key)) {
      return false;
    }
    key = key.slice(2).replace(/Once$/, "");
    return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
  }
  var currentRenderingInstance = null;
  var currentScopeId = null;
  function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = instance && instance.type.__scopeId || null;
    return prev;
  }
  function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
    if (!ctx)
      return fn;
    if (fn._n) {
      return fn;
    }
    const renderFnWithContext = (...args) => {
      if (renderFnWithContext._d) {
        setBlockTracking(-1);
      }
      const prevInstance = setCurrentRenderingInstance(ctx);
      const res = fn(...args);
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
      if (true) {
        devtoolsComponentUpdated(ctx);
      }
      return res;
    };
    renderFnWithContext._n = true;
    renderFnWithContext._c = true;
    renderFnWithContext._d = true;
    return renderFnWithContext;
  }
  var accessedAttrs = false;
  function markAttrsAccessed() {
    accessedAttrs = true;
  }
  function renderComponentRoot(instance) {
    const { type: Component, vnode, proxy, withProxy, props, propsOptions: [propsOptions], slots, attrs, emit: emit2, render: render3, renderCache, data, setupState, ctx, inheritAttrs } = instance;
    let result;
    const prev = setCurrentRenderingInstance(instance);
    if (true) {
      accessedAttrs = false;
    }
    try {
      let fallthroughAttrs;
      if (vnode.shapeFlag & 4) {
        const proxyToUse = withProxy || proxy;
        result = normalizeVNode(render3.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
        fallthroughAttrs = attrs;
      } else {
        const render4 = Component;
        if (attrs === props) {
          markAttrsAccessed();
        }
        result = normalizeVNode(render4.length > 1 ? render4(props, true ? {
          get attrs() {
            markAttrsAccessed();
            return attrs;
          },
          slots,
          emit: emit2
        } : { attrs, slots, emit: emit2 }) : render4(props, null));
        fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
      }
      let root = result;
      let setRoot = void 0;
      if (result.patchFlag > 0 && result.patchFlag & 2048) {
        ;
        [root, setRoot] = getChildRoot(result);
      }
      if (fallthroughAttrs && inheritAttrs !== false) {
        const keys = Object.keys(fallthroughAttrs);
        const { shapeFlag } = root;
        if (keys.length) {
          if (shapeFlag & 1 || shapeFlag & 6) {
            if (propsOptions && keys.some(isModelListener)) {
              fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
            }
            root = cloneVNode(root, fallthroughAttrs);
          } else if (!accessedAttrs && root.type !== Comment$1) {
            const allAttrs = Object.keys(attrs);
            const eventAttrs = [];
            const extraAttrs = [];
            for (let i = 0, l = allAttrs.length; i < l; i++) {
              const key = allAttrs[i];
              if (isOn(key)) {
                if (!isModelListener(key)) {
                  eventAttrs.push(key[2].toLowerCase() + key.slice(3));
                }
              } else {
                extraAttrs.push(key);
              }
            }
            if (extraAttrs.length) {
              warn2(`Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`);
            }
            if (eventAttrs.length) {
              warn2(`Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
            }
          }
        }
      }
      if (false)
        ;
      if (vnode.dirs) {
        if (!isElementRoot(root)) {
          warn2(`Runtime directive used on component with non-element root node. The directives will not function as intended.`);
        }
        root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
      }
      if (vnode.transition) {
        if (!isElementRoot(root)) {
          warn2(`Component inside <Transition> renders non-element root node that cannot be animated.`);
        }
        root.transition = vnode.transition;
      }
      if (setRoot) {
        setRoot(root);
      } else {
        result = root;
      }
    } catch (err) {
      blockStack.length = 0;
      handleError(err, instance, 1);
      result = createVNode(Comment$1);
    }
    setCurrentRenderingInstance(prev);
    return result;
  }
  var getChildRoot = (vnode) => {
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = filterSingleRoot(rawChildren);
    if (!childRoot) {
      return [vnode, void 0];
    }
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
    const setRoot = (updatedRoot) => {
      rawChildren[index] = updatedRoot;
      if (dynamicChildren) {
        if (dynamicIndex > -1) {
          dynamicChildren[dynamicIndex] = updatedRoot;
        } else if (updatedRoot.patchFlag > 0) {
          vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
        }
      }
    };
    return [normalizeVNode(childRoot), setRoot];
  };
  function filterSingleRoot(children) {
    let singleRoot;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (isVNode(child)) {
        if (child.type !== Comment$1 || child.children === "v-if") {
          if (singleRoot) {
            return;
          } else {
            singleRoot = child;
          }
        }
      } else {
        return;
      }
    }
    return singleRoot;
  }
  var getFunctionalFallthrough = (attrs) => {
    let res;
    for (const key in attrs) {
      if (key === "class" || key === "style" || isOn(key)) {
        (res || (res = {}))[key] = attrs[key];
      }
    }
    return res;
  };
  var filterModelListeners = (attrs, props) => {
    const res = {};
    for (const key in attrs) {
      if (!isModelListener(key) || !(key.slice(9) in props)) {
        res[key] = attrs[key];
      }
    }
    return res;
  };
  var isElementRoot = (vnode) => {
    return vnode.shapeFlag & 6 || vnode.shapeFlag & 1 || vnode.type === Comment$1;
  };
  function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    if ((prevChildren || nextChildren) && isHmrUpdating) {
      return true;
    }
    if (nextVNode.dirs || nextVNode.transition) {
      return true;
    }
    if (optimized && patchFlag >= 0) {
      if (patchFlag & 1024) {
        return true;
      }
      if (patchFlag & 16) {
        if (!prevProps) {
          return !!nextProps;
        }
        return hasPropsChanged(prevProps, nextProps, emits);
      } else if (patchFlag & 8) {
        const dynamicProps = nextVNode.dynamicProps;
        for (let i = 0; i < dynamicProps.length; i++) {
          const key = dynamicProps[i];
          if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
            return true;
          }
        }
      }
    } else {
      if (prevChildren || nextChildren) {
        if (!nextChildren || !nextChildren.$stable) {
          return true;
        }
      }
      if (prevProps === nextProps) {
        return false;
      }
      if (!prevProps) {
        return !!nextProps;
      }
      if (!nextProps) {
        return true;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
  }
  function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) {
      return true;
    }
    for (let i = 0; i < nextKeys.length; i++) {
      const key = nextKeys[i];
      if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
        return true;
      }
    }
    return false;
  }
  function updateHOCHostEl({ vnode, parent }, el) {
    while (parent && parent.subTree === vnode) {
      (vnode = parent.vnode).el = el;
      parent = parent.parent;
    }
  }
  var isSuspense = (type) => type.__isSuspense;
  function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
      if (isArray(fn)) {
        suspense.effects.push(...fn);
      } else {
        suspense.effects.push(fn);
      }
    } else {
      queuePostFlushCb(fn);
    }
  }
  function useTransitionState() {
    const state = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: new Map()
    };
    onMounted(() => {
      state.isMounted = true;
    });
    onBeforeUnmount(() => {
      state.isUnmounting = true;
    });
    return state;
  }
  var TransitionHookValidator = [Function, Array];
  var BaseTransitionImpl = {
    name: `BaseTransition`,
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: TransitionHookValidator,
      onEnter: TransitionHookValidator,
      onAfterEnter: TransitionHookValidator,
      onEnterCancelled: TransitionHookValidator,
      onBeforeLeave: TransitionHookValidator,
      onLeave: TransitionHookValidator,
      onAfterLeave: TransitionHookValidator,
      onLeaveCancelled: TransitionHookValidator,
      onBeforeAppear: TransitionHookValidator,
      onAppear: TransitionHookValidator,
      onAfterAppear: TransitionHookValidator,
      onAppearCancelled: TransitionHookValidator
    },
    setup(props, { slots }) {
      const instance = getCurrentInstance();
      const state = useTransitionState();
      let prevTransitionKey;
      return () => {
        const children = slots.default && getTransitionRawChildren(slots.default(), true);
        if (!children || !children.length) {
          return;
        }
        if (children.length > 1) {
          warn2("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
        }
        const rawProps = toRaw(props);
        const { mode } = rawProps;
        if (mode && !["in-out", "out-in", "default"].includes(mode)) {
          warn2(`invalid <transition> mode: ${mode}`);
        }
        const child = children[0];
        if (state.isLeaving) {
          return emptyPlaceholder(child);
        }
        const innerChild = getKeepAliveChild(child);
        if (!innerChild) {
          return emptyPlaceholder(child);
        }
        const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
        setTransitionHooks(innerChild, enterHooks);
        const oldChild = instance.subTree;
        const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
        let transitionKeyChanged = false;
        const { getTransitionKey } = innerChild.type;
        if (getTransitionKey) {
          const key = getTransitionKey();
          if (prevTransitionKey === void 0) {
            prevTransitionKey = key;
          } else if (key !== prevTransitionKey) {
            prevTransitionKey = key;
            transitionKeyChanged = true;
          }
        }
        if (oldInnerChild && oldInnerChild.type !== Comment$1 && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
          const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
          setTransitionHooks(oldInnerChild, leavingHooks);
          if (mode === "out-in") {
            state.isLeaving = true;
            leavingHooks.afterLeave = () => {
              state.isLeaving = false;
              instance.update();
            };
            return emptyPlaceholder(child);
          } else if (mode === "in-out" && innerChild.type !== Comment$1) {
            leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
              const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
              leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
              el._leaveCb = () => {
                earlyRemove();
                el._leaveCb = void 0;
                delete enterHooks.delayedLeave;
              };
              enterHooks.delayedLeave = delayedLeave;
            };
          }
        }
        return child;
      };
    }
  };
  var BaseTransition = BaseTransitionImpl;
  function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
      leavingVNodesCache = Object.create(null);
      leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
  }
  function resolveTransitionHooks(vnode, props, state, instance) {
    const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode);
    const callHook2 = (hook, args) => {
      hook && callWithAsyncErrorHandling(hook, instance, 9, args);
    };
    const hooks = {
      mode,
      persisted,
      beforeEnter(el) {
        let hook = onBeforeEnter;
        if (!state.isMounted) {
          if (appear) {
            hook = onBeforeAppear || onBeforeEnter;
          } else {
            return;
          }
        }
        if (el._leaveCb) {
          el._leaveCb(true);
        }
        const leavingVNode = leavingVNodesCache[key];
        if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
          leavingVNode.el._leaveCb();
        }
        callHook2(hook, [el]);
      },
      enter(el) {
        let hook = onEnter;
        let afterHook = onAfterEnter;
        let cancelHook = onEnterCancelled;
        if (!state.isMounted) {
          if (appear) {
            hook = onAppear || onEnter;
            afterHook = onAfterAppear || onAfterEnter;
            cancelHook = onAppearCancelled || onEnterCancelled;
          } else {
            return;
          }
        }
        let called = false;
        const done = el._enterCb = (cancelled) => {
          if (called)
            return;
          called = true;
          if (cancelled) {
            callHook2(cancelHook, [el]);
          } else {
            callHook2(afterHook, [el]);
          }
          if (hooks.delayedLeave) {
            hooks.delayedLeave();
          }
          el._enterCb = void 0;
        };
        if (hook) {
          hook(el, done);
          if (hook.length <= 1) {
            done();
          }
        } else {
          done();
        }
      },
      leave(el, remove2) {
        const key2 = String(vnode.key);
        if (el._enterCb) {
          el._enterCb(true);
        }
        if (state.isUnmounting) {
          return remove2();
        }
        callHook2(onBeforeLeave, [el]);
        let called = false;
        const done = el._leaveCb = (cancelled) => {
          if (called)
            return;
          called = true;
          remove2();
          if (cancelled) {
            callHook2(onLeaveCancelled, [el]);
          } else {
            callHook2(onAfterLeave, [el]);
          }
          el._leaveCb = void 0;
          if (leavingVNodesCache[key2] === vnode) {
            delete leavingVNodesCache[key2];
          }
        };
        leavingVNodesCache[key2] = vnode;
        if (onLeave) {
          onLeave(el, done);
          if (onLeave.length <= 1) {
            done();
          }
        } else {
          done();
        }
      },
      clone(vnode2) {
        return resolveTransitionHooks(vnode2, props, state, instance);
      }
    };
    return hooks;
  }
  function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
      vnode = cloneVNode(vnode);
      vnode.children = null;
      return vnode;
    }
  }
  function getKeepAliveChild(vnode) {
    return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
  }
  function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 && vnode.component) {
      setTransitionHooks(vnode.component.subTree, hooks);
    } else if (vnode.shapeFlag & 128) {
      vnode.ssContent.transition = hooks.clone(vnode.ssContent);
      vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    } else {
      vnode.transition = hooks;
    }
  }
  function getTransitionRawChildren(children, keepComment = false) {
    let ret = [];
    let keyedFragmentCount = 0;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.type === Fragment) {
        if (child.patchFlag & 128)
          keyedFragmentCount++;
        ret = ret.concat(getTransitionRawChildren(child.children, keepComment));
      } else if (keepComment || child.type !== Comment$1) {
        ret.push(child);
      }
    }
    if (keyedFragmentCount > 1) {
      for (let i = 0; i < ret.length; i++) {
        ret[i].patchFlag = -2;
      }
    }
    return ret;
  }
  function defineComponent(options) {
    return isFunction(options) ? { setup: options, name: options.name } : options;
  }
  var isAsyncWrapper = (i) => !!i.type.__asyncLoader;
  var isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
  function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
      const hooks = target[type] || (target[type] = []);
      const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
        if (target.isUnmounted) {
          return;
        }
        pauseTracking();
        setCurrentInstance(target);
        const res = callWithAsyncErrorHandling(hook, target, type, args);
        unsetCurrentInstance();
        resetTracking();
        return res;
      });
      if (prepend) {
        hooks.unshift(wrappedHook);
      } else {
        hooks.push(wrappedHook);
      }
      return wrappedHook;
    } else if (true) {
      const apiName = toHandlerKey(ErrorTypeStrings[type].replace(/ hook$/, ""));
      warn2(`${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
    }
  }
  var createHook = (lifecycle) => (hook, target = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, hook, target);
  var onBeforeMount = createHook("bm");
  var onMounted = createHook("m");
  var onBeforeUpdate = createHook("bu");
  var onUpdated = createHook("u");
  var onBeforeUnmount = createHook("bum");
  var onUnmounted = createHook("um");
  var onServerPrefetch = createHook("sp");
  var onRenderTriggered = createHook("rtg");
  var onRenderTracked = createHook("rtc");
  function initProps(instance, rawProps, isStateful, isSSR = false) {
    const props = {};
    const attrs = {};
    def(attrs, InternalObjectKey, 1);
    instance.propsDefaults = Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    for (const key in instance.propsOptions[0]) {
      if (!(key in props)) {
        props[key] = void 0;
      }
    }
    if (true) {
      validateProps(rawProps || {}, props, instance);
    }
    if (isStateful) {
      instance.props = isSSR ? props : shallowReactive(props);
    } else {
      if (!instance.type.props) {
        instance.props = attrs;
      } else {
        instance.props = props;
      }
    }
    instance.attrs = attrs;
  }
  function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const { props, attrs, vnode: { patchFlag } } = instance;
    const rawCurrentProps = toRaw(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (!(instance.type.__hmrId || instance.parent && instance.parent.type.__hmrId) && (optimized || patchFlag > 0) && !(patchFlag & 16)) {
      if (patchFlag & 8) {
        const propsToUpdate = instance.vnode.dynamicProps;
        for (let i = 0; i < propsToUpdate.length; i++) {
          let key = propsToUpdate[i];
          const value = rawProps[key];
          if (options) {
            if (hasOwn(attrs, key)) {
              if (value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
              }
            } else {
              const camelizedKey = camelize(key);
              props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
            }
          } else {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          }
        }
      }
    } else {
      if (setFullProps(instance, rawProps, props, attrs)) {
        hasAttrsChanged = true;
      }
      let kebabKey;
      for (const key in rawCurrentProps) {
        if (!rawProps || !hasOwn(rawProps, key) && ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
          if (options) {
            if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
              props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
            }
          } else {
            delete props[key];
          }
        }
      }
      if (attrs !== rawCurrentProps) {
        for (const key in attrs) {
          if (!rawProps || !hasOwn(rawProps, key)) {
            delete attrs[key];
            hasAttrsChanged = true;
          }
        }
      }
    }
    if (hasAttrsChanged) {
      trigger(instance, "set", "$attrs");
    }
    if (true) {
      validateProps(rawProps || {}, props, instance);
    }
  }
  function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) {
      for (let key in rawProps) {
        if (isReservedProp(key)) {
          continue;
        }
        const value = rawProps[key];
        let camelKey;
        if (options && hasOwn(options, camelKey = camelize(key))) {
          if (!needCastKeys || !needCastKeys.includes(camelKey)) {
            props[camelKey] = value;
          } else {
            (rawCastValues || (rawCastValues = {}))[camelKey] = value;
          }
        } else if (!isEmitListener(instance.emitsOptions, key)) {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
    if (needCastKeys) {
      const rawCurrentProps = toRaw(props);
      const castValues = rawCastValues || EMPTY_OBJ;
      for (let i = 0; i < needCastKeys.length; i++) {
        const key = needCastKeys[i];
        props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
      }
    }
    return hasAttrsChanged;
  }
  function resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
      const hasDefault = hasOwn(opt, "default");
      if (hasDefault && value === void 0) {
        const defaultValue = opt.default;
        if (opt.type !== Function && isFunction(defaultValue)) {
          const { propsDefaults } = instance;
          if (key in propsDefaults) {
            value = propsDefaults[key];
          } else {
            setCurrentInstance(instance);
            value = propsDefaults[key] = defaultValue.call(null, props);
            unsetCurrentInstance();
          }
        } else {
          value = defaultValue;
        }
      }
      if (opt[0]) {
        if (isAbsent && !hasDefault) {
          value = false;
        } else if (opt[1] && (value === "" || value === hyphenate(key))) {
          value = true;
        }
      }
    }
    return value;
  }
  function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) {
      return cached;
    }
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    let hasExtends = false;
    if (false) {
      const extendProps = (raw2) => {
        hasExtends = true;
        const [props, keys] = normalizePropsOptions(raw2, appContext, true);
        extend(normalized, props);
        if (keys)
          needCastKeys.push(...keys);
      };
      if (!asMixin && appContext.mixins.length) {
        appContext.mixins.forEach(extendProps);
      }
      if (comp.extends) {
        extendProps(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendProps);
      }
    }
    if (!raw && !hasExtends) {
      cache.set(comp, EMPTY_ARR);
      return EMPTY_ARR;
    }
    if (isArray(raw)) {
      for (let i = 0; i < raw.length; i++) {
        if (!isString(raw[i])) {
          warn2(`props must be strings when using array syntax.`, raw[i]);
        }
        const normalizedKey = camelize(raw[i]);
        if (validatePropName(normalizedKey)) {
          normalized[normalizedKey] = EMPTY_OBJ;
        }
      }
    } else if (raw) {
      if (!isObject(raw)) {
        warn2(`invalid props options`, raw);
      }
      for (const key in raw) {
        const normalizedKey = camelize(key);
        if (validatePropName(normalizedKey)) {
          const opt = raw[key];
          const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : opt;
          if (prop) {
            const booleanIndex = getTypeIndex(Boolean, prop.type);
            const stringIndex = getTypeIndex(String, prop.type);
            prop[0] = booleanIndex > -1;
            prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
            if (booleanIndex > -1 || hasOwn(prop, "default")) {
              needCastKeys.push(normalizedKey);
            }
          }
        }
      }
    }
    const res = [normalized, needCastKeys];
    cache.set(comp, res);
    return res;
  }
  function validatePropName(key) {
    if (key[0] !== "$") {
      return true;
    } else if (true) {
      warn2(`Invalid prop name: "${key}" is a reserved property.`);
    }
    return false;
  }
  function getType(ctor) {
    const match = ctor && ctor.toString().match(/^\s*function (\w+)/);
    return match ? match[1] : ctor === null ? "null" : "";
  }
  function isSameType(a, b) {
    return getType(a) === getType(b);
  }
  function getTypeIndex(type, expectedTypes) {
    if (isArray(expectedTypes)) {
      return expectedTypes.findIndex((t) => isSameType(t, type));
    } else if (isFunction(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1;
    }
    return -1;
  }
  function validateProps(rawProps, props, instance) {
    const resolvedValues = toRaw(props);
    const options = instance.propsOptions[0];
    for (const key in options) {
      let opt = options[key];
      if (opt == null)
        continue;
      validateProp(key, resolvedValues[key], opt, !hasOwn(rawProps, key) && !hasOwn(rawProps, hyphenate(key)));
    }
  }
  function validateProp(name, value, prop, isAbsent) {
    const { type, required, validator } = prop;
    if (required && isAbsent) {
      warn2('Missing required prop: "' + name + '"');
      return;
    }
    if (value == null && !prop.required) {
      return;
    }
    if (type != null && type !== true) {
      let isValid = false;
      const types = isArray(type) ? type : [type];
      const expectedTypes = [];
      for (let i = 0; i < types.length && !isValid; i++) {
        const { valid, expectedType } = assertType(value, types[i]);
        expectedTypes.push(expectedType || "");
        isValid = valid;
      }
      if (!isValid) {
        warn2(getInvalidTypeMessage(name, value, expectedTypes));
        return;
      }
    }
    if (validator && !validator(value)) {
      warn2('Invalid prop: custom validator check failed for prop "' + name + '".');
    }
  }
  var isSimpleType = /* @__PURE__ */ makeMap("String,Number,Boolean,Function,Symbol,BigInt");
  function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (isSimpleType(expectedType)) {
      const t = typeof value;
      valid = t === expectedType.toLowerCase();
      if (!valid && t === "object") {
        valid = value instanceof type;
      }
    } else if (expectedType === "Object") {
      valid = isObject(value);
    } else if (expectedType === "Array") {
      valid = isArray(value);
    } else if (expectedType === "null") {
      valid = value === null;
    } else {
      valid = value instanceof type;
    }
    return {
      valid,
      expectedType
    };
  }
  function getInvalidTypeMessage(name, value, expectedTypes) {
    let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
    const expectedType = expectedTypes[0];
    const receivedType = toRawType(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
      message += ` with value ${expectedValue}`;
    }
    message += `, got ${receivedType} `;
    if (isExplicable(receivedType)) {
      message += `with value ${receivedValue}.`;
    }
    return message;
  }
  function styleValue(value, type) {
    if (type === "String") {
      return `"${value}"`;
    } else if (type === "Number") {
      return `${Number(value)}`;
    } else {
      return `${value}`;
    }
  }
  function isExplicable(type) {
    const explicitTypes = ["string", "number", "boolean"];
    return explicitTypes.some((elem) => type.toLowerCase() === elem);
  }
  function isBoolean(...args) {
    return args.some((elem) => elem.toLowerCase() === "boolean");
  }
  var isInternalKey = (key) => key[0] === "_" || key === "$stable";
  var normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
  var normalizeSlot = (key, rawSlot, ctx) => {
    const normalized = withCtx((props) => {
      if (currentInstance) {
        warn2(`Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`);
      }
      return normalizeSlotValue(rawSlot(props));
    }, ctx);
    normalized._c = false;
    return normalized;
  };
  var normalizeObjectSlots = (rawSlots, slots, instance) => {
    const ctx = rawSlots._ctx;
    for (const key in rawSlots) {
      if (isInternalKey(key))
        continue;
      const value = rawSlots[key];
      if (isFunction(value)) {
        slots[key] = normalizeSlot(key, value, ctx);
      } else if (value != null) {
        if (true) {
          warn2(`Non-function value encountered for slot "${key}". Prefer function slots for better performance.`);
        }
        const normalized = normalizeSlotValue(value);
        slots[key] = () => normalized;
      }
    }
  };
  var normalizeVNodeSlots = (instance, children) => {
    if (!isKeepAlive(instance.vnode) && true) {
      warn2(`Non-function value encountered for default slot. Prefer function slots for better performance.`);
    }
    const normalized = normalizeSlotValue(children);
    instance.slots.default = () => normalized;
  };
  var initSlots = (instance, children) => {
    if (instance.vnode.shapeFlag & 32) {
      const type = children._;
      if (type) {
        instance.slots = toRaw(children);
        def(children, "_", type);
      } else {
        normalizeObjectSlots(children, instance.slots = {});
      }
    } else {
      instance.slots = {};
      if (children) {
        normalizeVNodeSlots(instance, children);
      }
    }
    def(instance.slots, InternalObjectKey, 1);
  };
  var updateSlots = (instance, children, optimized) => {
    const { vnode, slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = EMPTY_OBJ;
    if (vnode.shapeFlag & 32) {
      const type = children._;
      if (type) {
        if (isHmrUpdating) {
          extend(slots, children);
        } else if (optimized && type === 1) {
          needDeletionCheck = false;
        } else {
          extend(slots, children);
          if (!optimized && type === 1) {
            delete slots._;
          }
        }
      } else {
        needDeletionCheck = !children.$stable;
        normalizeObjectSlots(children, slots);
      }
      deletionComparisonTarget = children;
    } else if (children) {
      normalizeVNodeSlots(instance, children);
      deletionComparisonTarget = { default: 1 };
    }
    if (needDeletionCheck) {
      for (const key in slots) {
        if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
          delete slots[key];
        }
      }
    }
  };
  var isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text");
  function validateDirectiveName(name) {
    if (isBuiltInDirective(name)) {
      warn2("Do not use built-in directive ids as custom directive id: " + name);
    }
  }
  function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for (let i = 0; i < bindings.length; i++) {
      const binding = bindings[i];
      if (oldBindings) {
        binding.oldValue = oldBindings[i].value;
      }
      let hook = binding.dir[name];
      if (hook) {
        pauseTracking();
        callWithAsyncErrorHandling(hook, instance, 8, [
          vnode.el,
          binding,
          vnode,
          prevVNode
        ]);
        resetTracking();
      }
    }
  }
  function createAppContext() {
    return {
      app: null,
      config: {
        isNativeTag: NO,
        performance: false,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {}
      },
      mixins: [],
      components: {},
      directives: {},
      provides: Object.create(null),
      optionsCache: new WeakMap(),
      propsCache: new WeakMap(),
      emitsCache: new WeakMap()
    };
  }
  var uid = 0;
  function createAppAPI(render3, hydrate) {
    return function createApp2(rootComponent, rootProps = null) {
      if (rootProps != null && !isObject(rootProps)) {
        warn2(`root props passed to app.mount() must be an object.`);
        rootProps = null;
      }
      const context = createAppContext();
      const installedPlugins = new Set();
      let isMounted = false;
      const app = context.app = {
        _uid: uid++,
        _component: rootComponent,
        _props: rootProps,
        _container: null,
        _context: context,
        _instance: null,
        version,
        get config() {
          return context.config;
        },
        set config(v) {
          if (true) {
            warn2(`app.config cannot be replaced. Modify individual options instead.`);
          }
        },
        use(plugin, ...options) {
          if (installedPlugins.has(plugin)) {
            warn2(`Plugin has already been applied to target app.`);
          } else if (plugin && isFunction(plugin.install)) {
            installedPlugins.add(plugin);
            plugin.install(app, ...options);
          } else if (isFunction(plugin)) {
            installedPlugins.add(plugin);
            plugin(app, ...options);
          } else if (true) {
            warn2(`A plugin must either be a function or an object with an "install" function.`);
          }
          return app;
        },
        mixin(mixin) {
          if (false) {
            if (!context.mixins.includes(mixin)) {
              context.mixins.push(mixin);
            } else if (true) {
              warn2("Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : ""));
            }
          } else if (true) {
            warn2("Mixins are only available in builds supporting Options API");
          }
          return app;
        },
        component(name, component) {
          if (true) {
            validateComponentName(name, context.config);
          }
          if (!component) {
            return context.components[name];
          }
          if (context.components[name]) {
            warn2(`Component "${name}" has already been registered in target app.`);
          }
          context.components[name] = component;
          return app;
        },
        directive(name, directive) {
          if (true) {
            validateDirectiveName(name);
          }
          if (!directive) {
            return context.directives[name];
          }
          if (context.directives[name]) {
            warn2(`Directive "${name}" has already been registered in target app.`);
          }
          context.directives[name] = directive;
          return app;
        },
        mount(rootContainer, isHydrate, isSVG) {
          if (!isMounted) {
            const vnode = createVNode(rootComponent, rootProps);
            vnode.appContext = context;
            if (true) {
              context.reload = () => {
                render3(cloneVNode(vnode), rootContainer, isSVG);
              };
            }
            if (isHydrate && hydrate) {
              hydrate(vnode, rootContainer);
            } else {
              render3(vnode, rootContainer, isSVG);
            }
            isMounted = true;
            app._container = rootContainer;
            rootContainer.__vue_app__ = app;
            if (true) {
              app._instance = vnode.component;
              devtoolsInitApp(app, version);
            }
            return vnode.component.proxy;
          } else if (true) {
            warn2(`App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``);
          }
        },
        unmount() {
          if (isMounted) {
            render3(null, app._container);
            if (true) {
              app._instance = null;
              devtoolsUnmountApp(app);
            }
            delete app._container.__vue_app__;
          } else if (true) {
            warn2(`Cannot unmount an app that is not mounted.`);
          }
        },
        provide(key, value) {
          if (key in context.provides) {
            warn2(`App already provides property with key "${String(key)}". It will be overwritten with the new value.`);
          }
          context.provides[key] = value;
          return app;
        }
      };
      return app;
    };
  }
  var supported;
  var perf;
  function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
      perf.mark(`vue-${type}-${instance.uid}`);
    }
    if (true) {
      devtoolsPerfStart(instance, type, supported ? perf.now() : Date.now());
    }
  }
  function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
      const startTag = `vue-${type}-${instance.uid}`;
      const endTag = startTag + `:end`;
      perf.mark(endTag);
      perf.measure(`<${formatComponentName(instance, instance.type)}> ${type}`, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
    }
    if (true) {
      devtoolsPerfEnd(instance, type, supported ? perf.now() : Date.now());
    }
  }
  function isSupported() {
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function initFeatureFlags() {
    let needWarn = false;
    if (false) {
      needWarn = true;
      getGlobalThis().__VUE_OPTIONS_API__ = true;
    }
    if (false) {
      needWarn = true;
      getGlobalThis().__VUE_PROD_DEVTOOLS__ = false;
    }
    if (needWarn) {
      console.warn(`You are running the esm-bundler build of Vue. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle. See http://link.vuejs.org/feature-flags for more details.`);
    }
  }
  var queuePostRenderEffect = queueEffectWithSuspense;
  function createRenderer(options) {
    return baseCreateRenderer(options);
  }
  function baseCreateRenderer(options, createHydrationFns) {
    {
      initFeatureFlags();
    }
    if (true) {
      const target = getGlobalThis();
      target.__VUE__ = true;
      setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__);
    }
    const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, cloneNode: hostCloneNode, insertStaticContent: hostInsertStaticContent } = options;
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren) => {
      if (n1 === n2) {
        return;
      }
      if (n1 && !isSameVNodeType(n1, n2)) {
        anchor = getNextHostNode(n1);
        unmount(n1, parentComponent, parentSuspense, true);
        n1 = null;
      }
      if (n2.patchFlag === -2) {
        optimized = false;
        n2.dynamicChildren = null;
      }
      const { type, ref: ref2, shapeFlag } = n2;
      switch (type) {
        case Text:
          processText(n1, n2, container, anchor);
          break;
        case Comment$1:
          processCommentNode(n1, n2, container, anchor);
          break;
        case Static:
          if (n1 == null) {
            mountStaticNode(n2, container, anchor, isSVG);
          } else if (true) {
            patchStaticNode(n1, n2, container, isSVG);
          }
          break;
        case Fragment:
          processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          break;
        default:
          if (shapeFlag & 1) {
            processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (shapeFlag & 6) {
            processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (shapeFlag & 64) {
            type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
          } else if (shapeFlag & 128) {
            type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
          } else if (true) {
            warn2("Invalid VNode type:", type, `(${typeof type})`);
          }
      }
      if (ref2 != null && parentComponent) {
        setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
      }
    };
    const processText = (n1, n2, container, anchor) => {
      if (n1 == null) {
        hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
      } else {
        const el = n2.el = n1.el;
        if (n2.children !== n1.children) {
          hostSetText(el, n2.children);
        }
      }
    };
    const processCommentNode = (n1, n2, container, anchor) => {
      if (n1 == null) {
        hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
      } else {
        n2.el = n1.el;
      }
    };
    const mountStaticNode = (n2, container, anchor, isSVG) => {
      [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
    };
    const patchStaticNode = (n1, n2, container, isSVG) => {
      if (n2.children !== n1.children) {
        const anchor = hostNextSibling(n1.anchor);
        removeStaticNode(n1);
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG);
      } else {
        n2.el = n1.el;
        n2.anchor = n1.anchor;
      }
    };
    const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
      let next;
      while (el && el !== anchor) {
        next = hostNextSibling(el);
        hostInsert(el, container, nextSibling);
        el = next;
      }
      hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el, anchor }) => {
      let next;
      while (el && el !== anchor) {
        next = hostNextSibling(el);
        hostRemove(el);
        el = next;
      }
      hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      isSVG = isSVG || n2.type === "svg";
      if (n1 == null) {
        mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      let el;
      let vnodeHook;
      const { type, props, shapeFlag, transition, patchFlag, dirs } = vnode;
      if (false) {
        el = vnode.el = hostCloneNode(vnode.el);
      } else {
        el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props);
        if (shapeFlag & 8) {
          hostSetElementText(el, vnode.children);
        } else if (shapeFlag & 16) {
          mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized);
        }
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "created");
        }
        if (props) {
          for (const key in props) {
            if (key !== "value" && !isReservedProp(key)) {
              hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
          if ("value" in props) {
            hostPatchProp(el, "value", null, props.value);
          }
          if (vnodeHook = props.onVnodeBeforeMount) {
            invokeVNodeHook(vnodeHook, parentComponent, vnode);
          }
        }
        setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
      }
      if (true) {
        Object.defineProperty(el, "__vnode", {
          value: vnode,
          enumerable: false
        });
        Object.defineProperty(el, "__vueParentComponent", {
          value: parentComponent,
          enumerable: false
        });
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
      if (needCallTransitionHooks) {
        transition.beforeEnter(el);
      }
      hostInsert(el, container, anchor);
      if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
          needCallTransitionHooks && transition.enter(el);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
      if (scopeId) {
        hostSetScopeId(el, scopeId);
      }
      if (slotScopeIds) {
        for (let i = 0; i < slotScopeIds.length; i++) {
          hostSetScopeId(el, slotScopeIds[i]);
        }
      }
      if (parentComponent) {
        let subTree = parentComponent.subTree;
        if (subTree.patchFlag > 0 && subTree.patchFlag & 2048) {
          subTree = filterSingleRoot(subTree.children) || subTree;
        }
        if (vnode === subTree) {
          const parentVNode = parentComponent.vnode;
          setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
        }
      }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
      for (let i = start; i < children.length; i++) {
        const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
        patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      const el = n2.el = n1.el;
      let { patchFlag, dynamicChildren, dirs } = n2;
      patchFlag |= n1.patchFlag & 16;
      const oldProps = n1.props || EMPTY_OBJ;
      const newProps = n2.props || EMPTY_OBJ;
      let vnodeHook;
      if (vnodeHook = newProps.onVnodeBeforeUpdate) {
        invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
      }
      if (dirs) {
        invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
      }
      if (isHmrUpdating) {
        patchFlag = 0;
        optimized = false;
        dynamicChildren = null;
      }
      if (patchFlag > 0) {
        if (patchFlag & 16) {
          patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        } else {
          if (patchFlag & 2) {
            if (oldProps.class !== newProps.class) {
              hostPatchProp(el, "class", null, newProps.class, isSVG);
            }
          }
          if (patchFlag & 4) {
            hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
          }
          if (patchFlag & 8) {
            const propsToUpdate = n2.dynamicProps;
            for (let i = 0; i < propsToUpdate.length; i++) {
              const key = propsToUpdate[i];
              const prev = oldProps[key];
              const next = newProps[key];
              if (next !== prev || key === "value") {
                hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
              }
            }
          }
        }
        if (patchFlag & 1) {
          if (n1.children !== n2.children) {
            hostSetElementText(el, n2.children);
          }
        }
      } else if (!optimized && dynamicChildren == null) {
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      }
      const areChildrenSVG = isSVG && n2.type !== "foreignObject";
      if (dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
        if (parentComponent && parentComponent.type.__hmrId) {
          traverseStaticChildren(n1, n2);
        }
      } else if (!optimized) {
        patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
      }
      if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
          dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
        }, parentSuspense);
      }
    };
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
      for (let i = 0; i < newChildren.length; i++) {
        const oldVNode = oldChildren[i];
        const newVNode = newChildren[i];
        const container = oldVNode.el && (oldVNode.type === Fragment || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & 6 || oldVNode.shapeFlag & 64) ? hostParentNode(oldVNode.el) : fallbackContainer;
        patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
      }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
      if (oldProps !== newProps) {
        for (const key in newProps) {
          if (isReservedProp(key))
            continue;
          const next = newProps[key];
          const prev = oldProps[key];
          if (next !== prev && key !== "value") {
            hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
        if (oldProps !== EMPTY_OBJ) {
          for (const key in oldProps) {
            if (!isReservedProp(key) && !(key in newProps)) {
              hostPatchProp(el, key, oldProps[key], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
        if ("value" in newProps) {
          hostPatchProp(el, "value", oldProps.value, newProps.value);
        }
      }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
      const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
      let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
      if (isHmrUpdating) {
        patchFlag = 0;
        optimized = false;
        dynamicChildren = null;
      }
      if (fragmentSlotScopeIds) {
        slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
      }
      if (n1 == null) {
        hostInsert(fragmentStartAnchor, container, anchor);
        hostInsert(fragmentEndAnchor, container, anchor);
        mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
          patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
          if (parentComponent && parentComponent.type.__hmrId) {
            traverseStaticChildren(n1, n2);
          } else if (n2.key != null || parentComponent && n2 === parentComponent.subTree) {
            traverseStaticChildren(n1, n2, true);
          }
        } else {
          patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      n2.slotScopeIds = slotScopeIds;
      if (n1 == null) {
        if (n2.shapeFlag & 512) {
          parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
        } else {
          mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
        }
      } else {
        updateComponent(n1, n2, optimized);
      }
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
      const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
      if (instance.type.__hmrId) {
        registerHMR(instance);
      }
      if (true) {
        pushWarningContext(initialVNode);
        startMeasure(instance, `mount`);
      }
      if (isKeepAlive(initialVNode)) {
        instance.ctx.renderer = internals;
      }
      {
        if (true) {
          startMeasure(instance, `init`);
        }
        setupComponent(instance);
        if (true) {
          endMeasure(instance, `init`);
        }
      }
      if (instance.asyncDep) {
        parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
        if (!initialVNode.el) {
          const placeholder = instance.subTree = createVNode(Comment$1);
          processCommentNode(null, placeholder, container, anchor);
        }
        return;
      }
      setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
      if (true) {
        popWarningContext();
        endMeasure(instance, `mount`);
      }
    };
    const updateComponent = (n1, n2, optimized) => {
      const instance = n2.component = n1.component;
      if (shouldUpdateComponent(n1, n2, optimized)) {
        if (instance.asyncDep && !instance.asyncResolved) {
          if (true) {
            pushWarningContext(n2);
          }
          updateComponentPreRender(instance, n2, optimized);
          if (true) {
            popWarningContext();
          }
          return;
        } else {
          instance.next = n2;
          invalidateJob(instance.update);
          instance.update();
        }
      } else {
        n2.component = n1.component;
        n2.el = n1.el;
        instance.vnode = n2;
      }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
      const componentUpdateFn = () => {
        if (!instance.isMounted) {
          let vnodeHook;
          const { el, props } = initialVNode;
          const { bm, m, parent } = instance;
          effect2.allowRecurse = false;
          if (bm) {
            invokeArrayFns(bm);
          }
          if (vnodeHook = props && props.onVnodeBeforeMount) {
            invokeVNodeHook(vnodeHook, parent, initialVNode);
          }
          effect2.allowRecurse = true;
          if (el && hydrateNode) {
            const hydrateSubTree = () => {
              if (true) {
                startMeasure(instance, `render`);
              }
              instance.subTree = renderComponentRoot(instance);
              if (true) {
                endMeasure(instance, `render`);
              }
              if (true) {
                startMeasure(instance, `hydrate`);
              }
              hydrateNode(el, instance.subTree, instance, parentSuspense, null);
              if (true) {
                endMeasure(instance, `hydrate`);
              }
            };
            if (isAsyncWrapper(initialVNode)) {
              initialVNode.type.__asyncLoader().then(() => !instance.isUnmounted && hydrateSubTree());
            } else {
              hydrateSubTree();
            }
          } else {
            if (true) {
              startMeasure(instance, `render`);
            }
            const subTree = instance.subTree = renderComponentRoot(instance);
            if (true) {
              endMeasure(instance, `render`);
            }
            if (true) {
              startMeasure(instance, `patch`);
            }
            patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
            if (true) {
              endMeasure(instance, `patch`);
            }
            initialVNode.el = subTree.el;
          }
          if (m) {
            queuePostRenderEffect(m, parentSuspense);
          }
          if (vnodeHook = props && props.onVnodeMounted) {
            const scopedInitialVNode = initialVNode;
            queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
          }
          if (initialVNode.shapeFlag & 256) {
            instance.a && queuePostRenderEffect(instance.a, parentSuspense);
          }
          instance.isMounted = true;
          if (true) {
            devtoolsComponentAdded(instance);
          }
          initialVNode = container = anchor = null;
        } else {
          let { next, bu, u, parent, vnode } = instance;
          let originNext = next;
          let vnodeHook;
          if (true) {
            pushWarningContext(next || instance.vnode);
          }
          if (next) {
            next.el = vnode.el;
            updateComponentPreRender(instance, next, optimized);
          } else {
            next = vnode;
          }
          effect2.allowRecurse = false;
          if (bu) {
            invokeArrayFns(bu);
          }
          if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
            invokeVNodeHook(vnodeHook, parent, next, vnode);
          }
          effect2.allowRecurse = true;
          if (true) {
            startMeasure(instance, `render`);
          }
          const nextTree = renderComponentRoot(instance);
          if (true) {
            endMeasure(instance, `render`);
          }
          const prevTree = instance.subTree;
          instance.subTree = nextTree;
          if (true) {
            startMeasure(instance, `patch`);
          }
          patch(prevTree, nextTree, hostParentNode(prevTree.el), getNextHostNode(prevTree), instance, parentSuspense, isSVG);
          if (true) {
            endMeasure(instance, `patch`);
          }
          next.el = nextTree.el;
          if (originNext === null) {
            updateHOCHostEl(instance, nextTree.el);
          }
          if (u) {
            queuePostRenderEffect(u, parentSuspense);
          }
          if (vnodeHook = next.props && next.props.onVnodeUpdated) {
            queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
          }
          if (true) {
            devtoolsComponentUpdated(instance);
          }
          if (true) {
            popWarningContext();
          }
        }
      };
      const effect2 = new ReactiveEffect(componentUpdateFn, () => queueJob(instance.update), instance.scope);
      const update = instance.update = effect2.run.bind(effect2);
      update.id = instance.uid;
      effect2.allowRecurse = update.allowRecurse = true;
      if (true) {
        effect2.onTrack = instance.rtc ? (e) => invokeArrayFns(instance.rtc, e) : void 0;
        effect2.onTrigger = instance.rtg ? (e) => invokeArrayFns(instance.rtg, e) : void 0;
        update.ownerInstance = instance;
      }
      update();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized) => {
      nextVNode.component = instance;
      const prevProps = instance.vnode.props;
      instance.vnode = nextVNode;
      instance.next = null;
      updateProps(instance, nextVNode.props, prevProps, optimized);
      updateSlots(instance, nextVNode.children, optimized);
      pauseTracking();
      flushPreFlushCbs(void 0, instance.update);
      resetTracking();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
      const c1 = n1 && n1.children;
      const prevShapeFlag = n1 ? n1.shapeFlag : 0;
      const c2 = n2.children;
      const { patchFlag, shapeFlag } = n2;
      if (patchFlag > 0) {
        if (patchFlag & 128) {
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          return;
        } else if (patchFlag & 256) {
          patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          return;
        }
      }
      if (shapeFlag & 8) {
        if (prevShapeFlag & 16) {
          unmountChildren(c1, parentComponent, parentSuspense);
        }
        if (c2 !== c1) {
          hostSetElementText(container, c2);
        }
      } else {
        if (prevShapeFlag & 16) {
          if (shapeFlag & 16) {
            patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else {
            unmountChildren(c1, parentComponent, parentSuspense, true);
          }
        } else {
          if (prevShapeFlag & 8) {
            hostSetElementText(container, "");
          }
          if (shapeFlag & 16) {
            mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
        }
      }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      c1 = c1 || EMPTY_ARR;
      c2 = c2 || EMPTY_ARR;
      const oldLength = c1.length;
      const newLength = c2.length;
      const commonLength = Math.min(oldLength, newLength);
      let i;
      for (i = 0; i < commonLength; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
      if (oldLength > newLength) {
        unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
      } else {
        mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
      }
    };
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
      let i = 0;
      const l2 = c2.length;
      let e1 = c1.length - 1;
      let e2 = l2 - 1;
      while (i <= e1 && i <= e2) {
        const n1 = c1[i];
        const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (isSameVNodeType(n1, n2)) {
          patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          break;
        }
        i++;
      }
      while (i <= e1 && i <= e2) {
        const n1 = c1[e1];
        const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
        if (isSameVNodeType(n1, n2)) {
          patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          break;
        }
        e1--;
        e2--;
      }
      if (i > e1) {
        if (i <= e2) {
          const nextPos = e2 + 1;
          const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
          while (i <= e2) {
            patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            i++;
          }
        }
      } else if (i > e2) {
        while (i <= e1) {
          unmount(c1[i], parentComponent, parentSuspense, true);
          i++;
        }
      } else {
        const s1 = i;
        const s2 = i;
        const keyToNewIndexMap = new Map();
        for (i = s2; i <= e2; i++) {
          const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
          if (nextChild.key != null) {
            if (keyToNewIndexMap.has(nextChild.key)) {
              warn2(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
            }
            keyToNewIndexMap.set(nextChild.key, i);
          }
        }
        let j;
        let patched = 0;
        const toBePatched = e2 - s2 + 1;
        let moved = false;
        let maxNewIndexSoFar = 0;
        const newIndexToOldIndexMap = new Array(toBePatched);
        for (i = 0; i < toBePatched; i++)
          newIndexToOldIndexMap[i] = 0;
        for (i = s1; i <= e1; i++) {
          const prevChild = c1[i];
          if (patched >= toBePatched) {
            unmount(prevChild, parentComponent, parentSuspense, true);
            continue;
          }
          let newIndex;
          if (prevChild.key != null) {
            newIndex = keyToNewIndexMap.get(prevChild.key);
          } else {
            for (j = s2; j <= e2; j++) {
              if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                newIndex = j;
                break;
              }
            }
          }
          if (newIndex === void 0) {
            unmount(prevChild, parentComponent, parentSuspense, true);
          } else {
            newIndexToOldIndexMap[newIndex - s2] = i + 1;
            if (newIndex >= maxNewIndexSoFar) {
              maxNewIndexSoFar = newIndex;
            } else {
              moved = true;
            }
            patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            patched++;
          }
        }
        const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
        j = increasingNewIndexSequence.length - 1;
        for (i = toBePatched - 1; i >= 0; i--) {
          const nextIndex = s2 + i;
          const nextChild = c2[nextIndex];
          const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
          if (newIndexToOldIndexMap[i] === 0) {
            patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else if (moved) {
            if (j < 0 || i !== increasingNewIndexSequence[j]) {
              move(nextChild, container, anchor, 2);
            } else {
              j--;
            }
          }
        }
      }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
      const { el, type, transition, children, shapeFlag } = vnode;
      if (shapeFlag & 6) {
        move(vnode.component.subTree, container, anchor, moveType);
        return;
      }
      if (shapeFlag & 128) {
        vnode.suspense.move(container, anchor, moveType);
        return;
      }
      if (shapeFlag & 64) {
        type.move(vnode, container, anchor, internals);
        return;
      }
      if (type === Fragment) {
        hostInsert(el, container, anchor);
        for (let i = 0; i < children.length; i++) {
          move(children[i], container, anchor, moveType);
        }
        hostInsert(vnode.anchor, container, anchor);
        return;
      }
      if (type === Static) {
        moveStaticNode(vnode, container, anchor);
        return;
      }
      const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
      if (needTransition) {
        if (moveType === 0) {
          transition.beforeEnter(el);
          hostInsert(el, container, anchor);
          queuePostRenderEffect(() => transition.enter(el), parentSuspense);
        } else {
          const { leave, delayLeave, afterLeave } = transition;
          const remove3 = () => hostInsert(el, container, anchor);
          const performLeave = () => {
            leave(el, () => {
              remove3();
              afterLeave && afterLeave();
            });
          };
          if (delayLeave) {
            delayLeave(el, remove3, performLeave);
          } else {
            performLeave();
          }
        }
      } else {
        hostInsert(el, container, anchor);
      }
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
      const { type, props, ref: ref2, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
      if (ref2 != null) {
        setRef(ref2, null, parentSuspense, vnode, true);
      }
      if (shapeFlag & 256) {
        parentComponent.ctx.deactivate(vnode);
        return;
      }
      const shouldInvokeDirs = shapeFlag & 1 && dirs;
      let vnodeHook;
      if (vnodeHook = props && props.onVnodeBeforeUnmount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
      if (shapeFlag & 6) {
        unmountComponent(vnode.component, parentSuspense, doRemove);
      } else {
        if (shapeFlag & 128) {
          vnode.suspense.unmount(parentSuspense, doRemove);
          return;
        }
        if (shouldInvokeDirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
        }
        if (shapeFlag & 64) {
          vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
        } else if (dynamicChildren && (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
          unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
        } else if (type === Fragment && (patchFlag & 128 || patchFlag & 256) || !optimized && shapeFlag & 16) {
          unmountChildren(children, parentComponent, parentSuspense);
        }
        if (doRemove) {
          remove2(vnode);
        }
      }
      if ((vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
          shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
        }, parentSuspense);
      }
    };
    const remove2 = (vnode) => {
      const { type, el, anchor, transition } = vnode;
      if (type === Fragment) {
        removeFragment(el, anchor);
        return;
      }
      if (type === Static) {
        removeStaticNode(vnode);
        return;
      }
      const performRemove = () => {
        hostRemove(el);
        if (transition && !transition.persisted && transition.afterLeave) {
          transition.afterLeave();
        }
      };
      if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
        const { leave, delayLeave } = transition;
        const performLeave = () => leave(el, performRemove);
        if (delayLeave) {
          delayLeave(vnode.el, performRemove, performLeave);
        } else {
          performLeave();
        }
      } else {
        performRemove();
      }
    };
    const removeFragment = (cur, end) => {
      let next;
      while (cur !== end) {
        next = hostNextSibling(cur);
        hostRemove(cur);
        cur = next;
      }
      hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove) => {
      if (instance.type.__hmrId) {
        unregisterHMR(instance);
      }
      const { bum, scope, update, subTree, um } = instance;
      if (bum) {
        invokeArrayFns(bum);
      }
      scope.stop();
      if (update) {
        update.active = false;
        unmount(subTree, instance, parentSuspense, doRemove);
      }
      if (um) {
        queuePostRenderEffect(um, parentSuspense);
      }
      queuePostRenderEffect(() => {
        instance.isUnmounted = true;
      }, parentSuspense);
      if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
        parentSuspense.deps--;
        if (parentSuspense.deps === 0) {
          parentSuspense.resolve();
        }
      }
      if (true) {
        devtoolsComponentRemoved(instance);
      }
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
      for (let i = start; i < children.length; i++) {
        unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
      }
    };
    const getNextHostNode = (vnode) => {
      if (vnode.shapeFlag & 6) {
        return getNextHostNode(vnode.component.subTree);
      }
      if (vnode.shapeFlag & 128) {
        return vnode.suspense.next();
      }
      return hostNextSibling(vnode.anchor || vnode.el);
    };
    const render3 = (vnode, container, isSVG) => {
      if (vnode == null) {
        if (container._vnode) {
          unmount(container._vnode, null, null, true);
        }
      } else {
        patch(container._vnode || null, vnode, container, null, null, null, isSVG);
      }
      flushPostFlushCbs();
      container._vnode = vnode;
    };
    const internals = {
      p: patch,
      um: unmount,
      m: move,
      r: remove2,
      mt: mountComponent,
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      n: getNextHostNode,
      o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) {
      [hydrate, hydrateNode] = createHydrationFns(internals);
    }
    return {
      render: render3,
      hydrate,
      createApp: createAppAPI(render3, hydrate)
    };
  }
  function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if (isArray(rawRef)) {
      rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
      return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) {
      return;
    }
    const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner, r: ref2 } = rawRef;
    if (!owner) {
      warn2(`Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`);
      return;
    }
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
    const setupState = owner.setupState;
    if (oldRef != null && oldRef !== ref2) {
      if (isString(oldRef)) {
        refs[oldRef] = null;
        if (hasOwn(setupState, oldRef)) {
          setupState[oldRef] = null;
        }
      } else if (isRef(oldRef)) {
        oldRef.value = null;
      }
    }
    if (isString(ref2)) {
      const doSet = () => {
        {
          refs[ref2] = value;
        }
        if (hasOwn(setupState, ref2)) {
          setupState[ref2] = value;
        }
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    } else if (isRef(ref2)) {
      const doSet = () => {
        ref2.value = value;
      };
      if (value) {
        doSet.id = -1;
        queuePostRenderEffect(doSet, parentSuspense);
      } else {
        doSet();
      }
    } else if (isFunction(ref2)) {
      callWithErrorHandling(ref2, owner, 12, [value, refs]);
    } else if (true) {
      warn2("Invalid template ref type:", value, `(${typeof value})`);
    }
  }
  function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7, [
      vnode,
      prevVNode
    ]);
  }
  function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if (isArray(ch1) && isArray(ch2)) {
      for (let i = 0; i < ch1.length; i++) {
        const c1 = ch1[i];
        let c2 = ch2[i];
        if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
          if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
            c2 = ch2[i] = cloneIfMounted(ch2[i]);
            c2.el = c1.el;
          }
          if (!shallow)
            traverseStaticChildren(c1, c2);
        }
        if (c2.type === Comment$1 && !c2.el) {
          c2.el = c1.el;
        }
      }
    }
  }
  function getSequence(arr) {
    const p2 = arr.slice();
    const result = [0];
    let i, j, u, v, c;
    const len = arr.length;
    for (i = 0; i < len; i++) {
      const arrI = arr[i];
      if (arrI !== 0) {
        j = result[result.length - 1];
        if (arr[j] < arrI) {
          p2[i] = j;
          result.push(i);
          continue;
        }
        u = 0;
        v = result.length - 1;
        while (u < v) {
          c = u + v >> 1;
          if (arr[result[c]] < arrI) {
            u = c + 1;
          } else {
            v = c;
          }
        }
        if (arrI < arr[result[u]]) {
          if (u > 0) {
            p2[i] = result[u - 1];
          }
          result[u] = i;
        }
      }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
      result[u] = v;
      v = p2[v];
    }
    return result;
  }
  var isTeleport = (type) => type.__isTeleport;
  var COMPONENTS = "components";
  function resolveComponent(name, maybeSelfReference) {
    return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
  }
  var NULL_DYNAMIC_COMPONENT = Symbol();
  function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
    const instance = currentRenderingInstance || currentInstance;
    if (instance) {
      const Component = instance.type;
      if (type === COMPONENTS) {
        const selfName = getComponentName(Component);
        if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
          return Component;
        }
      }
      const res = resolve(instance[type] || Component[type], name) || resolve(instance.appContext[type], name);
      if (!res && maybeSelfReference) {
        return Component;
      }
      if (warnMissing && !res) {
        warn2(`Failed to resolve ${type.slice(0, -1)}: ${name}`);
      }
      return res;
    } else if (true) {
      warn2(`resolve${capitalize(type.slice(0, -1))} can only be used in render() or setup().`);
    }
  }
  function resolve(registry, name) {
    return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
  }
  var Fragment = Symbol(true ? "Fragment" : void 0);
  var Text = Symbol(true ? "Text" : void 0);
  var Comment$1 = Symbol(true ? "Comment" : void 0);
  var Static = Symbol(true ? "Static" : void 0);
  var blockStack = [];
  var currentBlock = null;
  function openBlock(disableTracking = false) {
    blockStack.push(currentBlock = disableTracking ? null : []);
  }
  function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
  }
  var isBlockTreeEnabled = 1;
  function setBlockTracking(value) {
    isBlockTreeEnabled += value;
  }
  function setupBlock(vnode) {
    vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
    closeBlock();
    if (isBlockTreeEnabled > 0 && currentBlock) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
  }
  function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
  }
  function isSameVNodeType(n1, n2) {
    if (n2.shapeFlag & 6 && hmrDirtyComponents.has(n2.type)) {
      return false;
    }
    return n1.type === n2.type && n1.key === n2.key;
  }
  var vnodeArgsTransformer;
  var createVNodeWithArgsTransform = (...args) => {
    return _createVNode(...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args);
  };
  var InternalObjectKey = `__vInternal`;
  var normalizeKey = ({ key }) => key != null ? key : null;
  var normalizeRef = ({ ref: ref2 }) => {
    return ref2 != null ? isString(ref2) || isRef(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2 } : ref2 : null;
  };
  function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
      __v_isVNode: true,
      __v_skip: true,
      type,
      props,
      key: props && normalizeKey(props),
      ref: props && normalizeRef(props),
      scopeId: currentScopeId,
      slotScopeIds: null,
      children,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag,
      patchFlag,
      dynamicProps,
      dynamicChildren: null,
      appContext: null
    };
    if (needFullChildrenNormalization) {
      normalizeChildren(vnode, children);
      if (shapeFlag & 128) {
        type.normalize(vnode);
      }
    } else if (children) {
      vnode.shapeFlag |= isString(children) ? 8 : 16;
    }
    if (vnode.key !== vnode.key) {
      warn2(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  var createVNode = true ? createVNodeWithArgsTransform : _createVNode;
  function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
      if (!type) {
        warn2(`Invalid vnode type when creating vnode: ${type}.`);
      }
      type = Comment$1;
    }
    if (isVNode(type)) {
      const cloned = cloneVNode(type, props, true);
      if (children) {
        normalizeChildren(cloned, children);
      }
      return cloned;
    }
    if (isClassComponent(type)) {
      type = type.__vccOpts;
    }
    if (props) {
      props = guardReactiveProps(props);
      let { class: klass, style } = props;
      if (klass && !isString(klass)) {
        props.class = normalizeClass(klass);
      }
      if (isObject(style)) {
        if (isProxy(style) && !isArray(style)) {
          style = extend({}, style);
        }
        props.style = normalizeStyle(style);
      }
    }
    const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
    if (shapeFlag & 4 && isProxy(type)) {
      type = toRaw(type);
      warn2(`Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`, `
Component that was made reactive: `, type);
    }
    return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
  }
  function guardReactiveProps(props) {
    if (!props)
      return null;
    return isProxy(props) || InternalObjectKey in props ? extend({}, props) : props;
  }
  function cloneVNode(vnode, extraProps, mergeRef = false) {
    const { props, ref: ref2, patchFlag, children } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    const cloned = {
      __v_isVNode: true,
      __v_skip: true,
      type: vnode.type,
      props: mergedProps,
      key: mergedProps && normalizeKey(mergedProps),
      ref: extraProps && extraProps.ref ? mergeRef && ref2 ? isArray(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref2,
      scopeId: vnode.scopeId,
      slotScopeIds: vnode.slotScopeIds,
      children: patchFlag === -1 && isArray(children) ? children.map(deepCloneVNode) : children,
      target: vnode.target,
      targetAnchor: vnode.targetAnchor,
      staticCount: vnode.staticCount,
      shapeFlag: vnode.shapeFlag,
      patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
      dynamicProps: vnode.dynamicProps,
      dynamicChildren: vnode.dynamicChildren,
      appContext: vnode.appContext,
      dirs: vnode.dirs,
      transition: vnode.transition,
      component: vnode.component,
      suspense: vnode.suspense,
      ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
      ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
      el: vnode.el,
      anchor: vnode.anchor
    };
    return cloned;
  }
  function deepCloneVNode(vnode) {
    const cloned = cloneVNode(vnode);
    if (isArray(vnode.children)) {
      cloned.children = vnode.children.map(deepCloneVNode);
    }
    return cloned;
  }
  function createTextVNode(text = " ", flag = 0) {
    return createVNode(Text, null, text, flag);
  }
  function normalizeVNode(child) {
    if (child == null || typeof child === "boolean") {
      return createVNode(Comment$1);
    } else if (isArray(child)) {
      return createVNode(Fragment, null, child.slice());
    } else if (typeof child === "object") {
      return cloneIfMounted(child);
    } else {
      return createVNode(Text, null, String(child));
    }
  }
  function cloneIfMounted(child) {
    return child.el === null || child.memo ? child : cloneVNode(child);
  }
  function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) {
      children = null;
    } else if (isArray(children)) {
      type = 16;
    } else if (typeof children === "object") {
      if (shapeFlag & 1 || shapeFlag & 64) {
        const slot = children.default;
        if (slot) {
          slot._c && (slot._d = false);
          normalizeChildren(vnode, slot());
          slot._c && (slot._d = true);
        }
        return;
      } else {
        type = 32;
        const slotFlag = children._;
        if (!slotFlag && !(InternalObjectKey in children)) {
          children._ctx = currentRenderingInstance;
        } else if (slotFlag === 3 && currentRenderingInstance) {
          if (currentRenderingInstance.slots._ === 1) {
            children._ = 1;
          } else {
            children._ = 2;
            vnode.patchFlag |= 1024;
          }
        }
      }
    } else if (isFunction(children)) {
      children = { default: children, _ctx: currentRenderingInstance };
      type = 32;
    } else {
      children = String(children);
      if (shapeFlag & 64) {
        type = 16;
        children = [createTextVNode(children)];
      } else {
        type = 8;
      }
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
  }
  function mergeProps(...args) {
    const ret = {};
    for (let i = 0; i < args.length; i++) {
      const toMerge = args[i];
      for (const key in toMerge) {
        if (key === "class") {
          if (ret.class !== toMerge.class) {
            ret.class = normalizeClass([ret.class, toMerge.class]);
          }
        } else if (key === "style") {
          ret.style = normalizeStyle([ret.style, toMerge.style]);
        } else if (isOn(key)) {
          const existing = ret[key];
          const incoming = toMerge[key];
          if (existing !== incoming) {
            ret[key] = existing ? [].concat(existing, incoming) : incoming;
          }
        } else if (key !== "") {
          ret[key] = toMerge[key];
        }
      }
    }
    return ret;
  }
  var getPublicInstance = (i) => {
    if (!i)
      return null;
    if (isStatefulComponent(i))
      return getExposeProxy(i) || i.proxy;
    return getPublicInstance(i.parent);
  };
  var publicPropertiesMap = extend(Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) => true ? shallowReadonly(i.props) : i.props,
    $attrs: (i) => true ? shallowReadonly(i.attrs) : i.attrs,
    $slots: (i) => true ? shallowReadonly(i.slots) : i.slots,
    $refs: (i) => true ? shallowReadonly(i.refs) : i.refs,
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $emit: (i) => i.emit,
    $options: (i) => false ? resolveMergedOptions(i) : i.type,
    $forceUpdate: (i) => () => queueJob(i.update),
    $nextTick: (i) => nextTick.bind(i.proxy),
    $watch: (i) => false ? instanceWatch.bind(i) : NOOP
  });
  var PublicInstanceProxyHandlers = {
    get({ _: instance }, key) {
      const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
      if (key === "__isVue") {
        return true;
      }
      if (setupState !== EMPTY_OBJ && setupState.__isScriptSetup && hasOwn(setupState, key)) {
        return setupState[key];
      }
      let normalizedProps;
      if (key[0] !== "$") {
        const n = accessCache[key];
        if (n !== void 0) {
          switch (n) {
            case 0:
              return setupState[key];
            case 1:
              return data[key];
            case 3:
              return ctx[key];
            case 2:
              return props[key];
          }
        } else if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
          accessCache[key] = 0;
          return setupState[key];
        } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
          accessCache[key] = 1;
          return data[key];
        } else if ((normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)) {
          accessCache[key] = 2;
          return props[key];
        } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
          accessCache[key] = 3;
          return ctx[key];
        } else if (true) {
          accessCache[key] = 4;
        }
      }
      const publicGetter = publicPropertiesMap[key];
      let cssModule, globalProperties;
      if (publicGetter) {
        if (key === "$attrs") {
          track(instance, "get", key);
          markAttrsAccessed();
        }
        return publicGetter(instance);
      } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
        return cssModule;
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 3;
        return ctx[key];
      } else if (globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)) {
        {
          return globalProperties[key];
        }
      } else if (currentRenderingInstance && (!isString(key) || key.indexOf("__v") !== 0)) {
        if (data !== EMPTY_OBJ && (key[0] === "$" || key[0] === "_") && hasOwn(data, key)) {
          warn2(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`);
        } else if (instance === currentRenderingInstance) {
          warn2(`Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`);
        }
      }
    },
    set({ _: instance }, key, value) {
      const { data, setupState, ctx } = instance;
      if (setupState !== EMPTY_OBJ && hasOwn(setupState, key)) {
        setupState[key] = value;
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        data[key] = value;
      } else if (hasOwn(instance.props, key)) {
        warn2(`Attempting to mutate prop "${key}". Props are readonly.`, instance);
        return false;
      }
      if (key[0] === "$" && key.slice(1) in instance) {
        warn2(`Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`, instance);
        return false;
      } else {
        if (key in instance.appContext.config.globalProperties) {
          Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            value
          });
        } else {
          ctx[key] = value;
        }
      }
      return true;
    },
    has({ _: { data, setupState, accessCache, ctx, appContext, propsOptions } }, key) {
      let normalizedProps;
      return accessCache[key] !== void 0 || data !== EMPTY_OBJ && hasOwn(data, key) || setupState !== EMPTY_OBJ && hasOwn(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
    }
  };
  if (true) {
    PublicInstanceProxyHandlers.ownKeys = (target) => {
      warn2(`Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`);
      return Reflect.ownKeys(target);
    };
  }
  function createDevRenderContext(instance) {
    const target = {};
    Object.defineProperty(target, `_`, {
      configurable: true,
      enumerable: false,
      get: () => instance
    });
    Object.keys(publicPropertiesMap).forEach((key) => {
      Object.defineProperty(target, key, {
        configurable: true,
        enumerable: false,
        get: () => publicPropertiesMap[key](instance),
        set: NOOP
      });
    });
    return target;
  }
  function exposePropsOnRenderContext(instance) {
    const { ctx, propsOptions: [propsOptions] } = instance;
    if (propsOptions) {
      Object.keys(propsOptions).forEach((key) => {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => instance.props[key],
          set: NOOP
        });
      });
    }
  }
  function exposeSetupStateOnRenderContext(instance) {
    const { ctx, setupState } = instance;
    Object.keys(toRaw(setupState)).forEach((key) => {
      if (!setupState.__isScriptSetup && (key[0] === "$" || key[0] === "_")) {
        warn2(`setup() return property ${JSON.stringify(key)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => setupState[key],
        set: NOOP
      });
    });
  }
  var emptyAppContext = createAppContext();
  var uid$1 = 0;
  function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
      uid: uid$1++,
      vnode,
      type,
      parent,
      appContext,
      root: null,
      next: null,
      subTree: null,
      update: null,
      scope: new EffectScope(true),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: parent ? parent.provides : Object.create(appContext.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: normalizePropsOptions(type, appContext),
      emitsOptions: normalizeEmitsOptions(type, appContext),
      emit: null,
      emitted: null,
      propsDefaults: EMPTY_OBJ,
      inheritAttrs: type.inheritAttrs,
      ctx: EMPTY_OBJ,
      data: EMPTY_OBJ,
      props: EMPTY_OBJ,
      attrs: EMPTY_OBJ,
      slots: EMPTY_OBJ,
      refs: EMPTY_OBJ,
      setupState: EMPTY_OBJ,
      setupContext: null,
      suspense,
      suspenseId: suspense ? suspense.pendingId : 0,
      asyncDep: null,
      asyncResolved: false,
      isMounted: false,
      isUnmounted: false,
      isDeactivated: false,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
    if (true) {
      instance.ctx = createDevRenderContext(instance);
    } else {
      instance.ctx = { _: instance };
    }
    instance.root = parent ? parent.root : instance;
    instance.emit = emit.bind(null, instance);
    if (vnode.ce) {
      vnode.ce(instance);
    }
    return instance;
  }
  var currentInstance = null;
  var getCurrentInstance = () => currentInstance || currentRenderingInstance;
  var setCurrentInstance = (instance) => {
    currentInstance = instance;
    instance.scope.on();
  };
  var unsetCurrentInstance = () => {
    currentInstance && currentInstance.scope.off();
    currentInstance = null;
  };
  var isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
  function validateComponentName(name, config) {
    const appIsNativeTag = config.isNativeTag || NO;
    if (isBuiltInTag(name) || appIsNativeTag(name)) {
      warn2("Do not use built-in or reserved HTML elements as component id: " + name);
    }
  }
  function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4;
  }
  var isInSSRComponentSetup = false;
  function setupComponent(instance, isSSR = false) {
    isInSSRComponentSetup = isSSR;
    const { props, children } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
    isInSSRComponentSetup = false;
    return setupResult;
  }
  function setupStatefulComponent(instance, isSSR) {
    const Component = instance.type;
    if (true) {
      if (Component.name) {
        validateComponentName(Component.name, instance.appContext.config);
      }
      if (Component.components) {
        const names = Object.keys(Component.components);
        for (let i = 0; i < names.length; i++) {
          validateComponentName(names[i], instance.appContext.config);
        }
      }
      if (Component.directives) {
        const names = Object.keys(Component.directives);
        for (let i = 0; i < names.length; i++) {
          validateDirectiveName(names[i]);
        }
      }
      if (Component.compilerOptions && isRuntimeOnly()) {
        warn2(`"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`);
      }
    }
    instance.accessCache = Object.create(null);
    instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
    if (true) {
      exposePropsOnRenderContext(instance);
    }
    const { setup } = Component;
    if (setup) {
      const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
      setCurrentInstance(instance);
      pauseTracking();
      const setupResult = callWithErrorHandling(setup, instance, 0, [true ? shallowReadonly(instance.props) : instance.props, setupContext]);
      resetTracking();
      unsetCurrentInstance();
      if (isPromise(setupResult)) {
        setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
        if (isSSR) {
          return setupResult.then((resolvedResult) => {
            handleSetupResult(instance, resolvedResult, isSSR);
          }).catch((e) => {
            handleError(e, instance, 0);
          });
        } else {
          instance.asyncDep = setupResult;
        }
      } else {
        handleSetupResult(instance, setupResult, isSSR);
      }
    } else {
      finishComponentSetup(instance, isSSR);
    }
  }
  function handleSetupResult(instance, setupResult, isSSR) {
    if (isFunction(setupResult)) {
      {
        instance.render = setupResult;
      }
    } else if (isObject(setupResult)) {
      if (isVNode(setupResult)) {
        warn2(`setup() should not return VNodes directly - return a render function instead.`);
      }
      if (true) {
        instance.devtoolsRawSetupState = setupResult;
      }
      instance.setupState = proxyRefs(setupResult);
      if (true) {
        exposeSetupStateOnRenderContext(instance);
      }
    } else if (setupResult !== void 0) {
      warn2(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
    }
    finishComponentSetup(instance, isSSR);
  }
  var compile;
  var installWithProxy;
  var isRuntimeOnly = () => !compile;
  function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    if (!instance.render) {
      if (compile && !Component.render) {
        const template = Component.template;
        if (template) {
          if (true) {
            startMeasure(instance, `compile`);
          }
          const { isCustomElement, compilerOptions } = instance.appContext.config;
          const { delimiters, compilerOptions: componentCompilerOptions } = Component;
          const finalCompilerOptions = extend(extend({
            isCustomElement,
            delimiters
          }, compilerOptions), componentCompilerOptions);
          Component.render = compile(template, finalCompilerOptions);
          if (true) {
            endMeasure(instance, `compile`);
          }
        }
      }
      instance.render = Component.render || NOOP;
      if (installWithProxy) {
        installWithProxy(instance);
      }
    }
    if (false) {
      setCurrentInstance(instance);
      pauseTracking();
      applyOptions(instance);
      resetTracking();
      unsetCurrentInstance();
    }
    if (!Component.render && instance.render === NOOP && !isSSR) {
      if (!compile && Component.template) {
        warn2(`Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
      } else {
        warn2(`Component is missing template or render function.`);
      }
    }
  }
  function createAttrsProxy(instance) {
    return new Proxy(instance.attrs, true ? {
      get(target, key) {
        markAttrsAccessed();
        track(instance, "get", "$attrs");
        return target[key];
      },
      set() {
        warn2(`setupContext.attrs is readonly.`);
        return false;
      },
      deleteProperty() {
        warn2(`setupContext.attrs is readonly.`);
        return false;
      }
    } : {
      get(target, key) {
        track(instance, "get", "$attrs");
        return target[key];
      }
    });
  }
  function createSetupContext(instance) {
    const expose = (exposed) => {
      if (instance.exposed) {
        warn2(`expose() should be called only once per setup().`);
      }
      instance.exposed = exposed || {};
    };
    let attrs;
    if (true) {
      return Object.freeze({
        get attrs() {
          return attrs || (attrs = createAttrsProxy(instance));
        },
        get slots() {
          return shallowReadonly(instance.slots);
        },
        get emit() {
          return (event, ...args) => instance.emit(event, ...args);
        },
        expose
      });
    } else {
      return {
        get attrs() {
          return attrs || (attrs = createAttrsProxy(instance));
        },
        slots: instance.slots,
        emit: instance.emit,
        expose
      };
    }
  }
  function getExposeProxy(instance) {
    if (instance.exposed) {
      return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
        get(target, key) {
          if (key in target) {
            return target[key];
          } else if (key in publicPropertiesMap) {
            return publicPropertiesMap[key](instance);
          }
        }
      }));
    }
  }
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
  function getComponentName(Component) {
    return isFunction(Component) ? Component.displayName || Component.name : Component.name;
  }
  function formatComponentName(instance, Component, isRoot = false) {
    let name = getComponentName(Component);
    if (!name && Component.__file) {
      const match = Component.__file.match(/([^/\\]+)\.\w+$/);
      if (match) {
        name = match[1];
      }
    }
    if (!name && instance && instance.parent) {
      const inferFromRegistry = (registry) => {
        for (const key in registry) {
          if (registry[key] === Component) {
            return key;
          }
        }
      };
      name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
  }
  function isClassComponent(value) {
    return isFunction(value) && "__vccOpts" in value;
  }
  var stack = [];
  function pushWarningContext(vnode) {
    stack.push(vnode);
  }
  function popWarningContext() {
    stack.pop();
  }
  function warn2(msg, ...args) {
    pauseTracking();
    const instance = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) {
      callWithErrorHandling(appWarnHandler, instance, 11, [
        msg + args.join(""),
        instance && instance.proxy,
        trace.map(({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`).join("\n"),
        trace
      ]);
    } else {
      const warnArgs = [`[Vue warn]: ${msg}`, ...args];
      if (trace.length && true) {
        warnArgs.push(`
`, ...formatTrace(trace));
      }
      console.warn(...warnArgs);
    }
    resetTracking();
  }
  function getComponentTrace() {
    let currentVNode = stack[stack.length - 1];
    if (!currentVNode) {
      return [];
    }
    const normalizedStack = [];
    while (currentVNode) {
      const last = normalizedStack[0];
      if (last && last.vnode === currentVNode) {
        last.recurseCount++;
      } else {
        normalizedStack.push({
          vnode: currentVNode,
          recurseCount: 0
        });
      }
      const parentInstance = currentVNode.component && currentVNode.component.parent;
      currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
  }
  function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i) => {
      logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
    });
    return logs;
  }
  function formatTraceEntry({ vnode, recurseCount }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(vnode.component, vnode.type, isRoot)}`;
    const close = `>` + postfix;
    return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
  }
  function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach((key) => {
      res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) {
      res.push(` ...`);
    }
    return res;
  }
  function formatProp(key, value, raw) {
    if (isString(value)) {
      value = JSON.stringify(value);
      return raw ? value : [`${key}=${value}`];
    } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
      return raw ? value : [`${key}=${value}`];
    } else if (isRef(value)) {
      value = formatProp(key, toRaw(value.value), true);
      return raw ? value : [`${key}=Ref<`, value, `>`];
    } else if (isFunction(value)) {
      return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
    } else {
      value = toRaw(value);
      return raw ? value : [`${key}=`, value];
    }
  }
  var ErrorTypeStrings = {
    ["sp"]: "serverPrefetch hook",
    ["bc"]: "beforeCreate hook",
    ["c"]: "created hook",
    ["bm"]: "beforeMount hook",
    ["m"]: "mounted hook",
    ["bu"]: "beforeUpdate hook",
    ["u"]: "updated",
    ["bum"]: "beforeUnmount hook",
    ["um"]: "unmounted hook",
    ["a"]: "activated hook",
    ["da"]: "deactivated hook",
    ["ec"]: "errorCaptured hook",
    ["rtc"]: "renderTracked hook",
    ["rtg"]: "renderTriggered hook",
    [0]: "setup function",
    [1]: "render function",
    [2]: "watcher getter",
    [3]: "watcher callback",
    [4]: "watcher cleanup function",
    [5]: "native event handler",
    [6]: "component event handler",
    [7]: "vnode hook",
    [8]: "directive hook",
    [9]: "transition hook",
    [10]: "app errorHandler",
    [11]: "app warnHandler",
    [12]: "ref function",
    [13]: "async component loader",
    [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/vue-next"
  };
  function callWithErrorHandling(fn, instance, type, args) {
    let res;
    try {
      res = args ? fn(...args) : fn();
    } catch (err) {
      handleError(err, instance, type);
    }
    return res;
  }
  function callWithAsyncErrorHandling(fn, instance, type, args) {
    if (isFunction(fn)) {
      const res = callWithErrorHandling(fn, instance, type, args);
      if (res && isPromise(res)) {
        res.catch((err) => {
          handleError(err, instance, type);
        });
      }
      return res;
    }
    const values = [];
    for (let i = 0; i < fn.length; i++) {
      values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
  }
  function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
      let cur = instance.parent;
      const exposedInstance = instance.proxy;
      const errorInfo = true ? ErrorTypeStrings[type] : type;
      while (cur) {
        const errorCapturedHooks = cur.ec;
        if (errorCapturedHooks) {
          for (let i = 0; i < errorCapturedHooks.length; i++) {
            if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
              return;
            }
          }
        }
        cur = cur.parent;
      }
      const appErrorHandler = instance.appContext.config.errorHandler;
      if (appErrorHandler) {
        callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
        return;
      }
    }
    logError(err, type, contextVNode, throwInDev);
  }
  function logError(err, type, contextVNode, throwInDev = true) {
    if (true) {
      const info = ErrorTypeStrings[type];
      if (contextVNode) {
        pushWarningContext(contextVNode);
      }
      warn2(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
      if (contextVNode) {
        popWarningContext();
      }
      if (throwInDev) {
        throw err;
      } else {
        console.error(err);
      }
    } else {
      console.error(err);
    }
  }
  var isFlushing = false;
  var isFlushPending = false;
  var queue = [];
  var flushIndex = 0;
  var pendingPreFlushCbs = [];
  var activePreFlushCbs = null;
  var preFlushIndex = 0;
  var pendingPostFlushCbs = [];
  var activePostFlushCbs = null;
  var postFlushIndex = 0;
  var resolvedPromise = Promise.resolve();
  var currentFlushPromise = null;
  var currentPreFlushParentJob = null;
  var RECURSION_LIMIT = 100;
  function nextTick(fn) {
    const p2 = currentFlushPromise || resolvedPromise;
    return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
  }
  function findInsertionIndex(id) {
    let start = flushIndex + 1;
    let end = queue.length;
    while (start < end) {
      const middle = start + end >>> 1;
      const middleJobId = getId(queue[middle]);
      middleJobId < id ? start = middle + 1 : end = middle;
    }
    return start;
  }
  function queueJob(job) {
    if ((!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
      if (job.id == null) {
        queue.push(job);
      } else {
        queue.splice(findInsertionIndex(job.id), 0, job);
      }
      queueFlush();
    }
  }
  function queueFlush() {
    if (!isFlushing && !isFlushPending) {
      isFlushPending = true;
      currentFlushPromise = resolvedPromise.then(flushJobs);
    }
  }
  function invalidateJob(job) {
    const i = queue.indexOf(job);
    if (i > flushIndex) {
      queue.splice(i, 1);
    }
  }
  function queueCb(cb, activeQueue, pendingQueue, index) {
    if (!isArray(cb)) {
      if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
        pendingQueue.push(cb);
      }
    } else {
      pendingQueue.push(...cb);
    }
    queueFlush();
  }
  function queuePostFlushCb(cb) {
    queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
  }
  function flushPreFlushCbs(seen, parentJob = null) {
    if (pendingPreFlushCbs.length) {
      currentPreFlushParentJob = parentJob;
      activePreFlushCbs = [...new Set(pendingPreFlushCbs)];
      pendingPreFlushCbs.length = 0;
      if (true) {
        seen = seen || new Map();
      }
      for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
        if (checkRecursiveUpdates(seen, activePreFlushCbs[preFlushIndex])) {
          continue;
        }
        activePreFlushCbs[preFlushIndex]();
      }
      activePreFlushCbs = null;
      preFlushIndex = 0;
      currentPreFlushParentJob = null;
      flushPreFlushCbs(seen, parentJob);
    }
  }
  function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
      const deduped = [...new Set(pendingPostFlushCbs)];
      pendingPostFlushCbs.length = 0;
      if (activePostFlushCbs) {
        activePostFlushCbs.push(...deduped);
        return;
      }
      activePostFlushCbs = deduped;
      if (true) {
        seen = seen || new Map();
      }
      activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
      for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
        if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
          continue;
        }
        activePostFlushCbs[postFlushIndex]();
      }
      activePostFlushCbs = null;
      postFlushIndex = 0;
    }
  }
  var getId = (job) => job.id == null ? Infinity : job.id;
  function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    if (true) {
      seen = seen || new Map();
    }
    flushPreFlushCbs(seen);
    queue.sort((a, b) => getId(a) - getId(b));
    try {
      for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
        const job = queue[flushIndex];
        if (job && job.active !== false) {
          if (checkRecursiveUpdates(seen, job)) {
            continue;
          }
          callWithErrorHandling(job, null, 14);
        }
      }
    } finally {
      flushIndex = 0;
      queue.length = 0;
      flushPostFlushCbs(seen);
      isFlushing = false;
      currentFlushPromise = null;
      if (queue.length || pendingPreFlushCbs.length || pendingPostFlushCbs.length) {
        flushJobs(seen);
      }
    }
  }
  function checkRecursiveUpdates(seen, fn) {
    if (!seen.has(fn)) {
      seen.set(fn, 1);
    } else {
      const count = seen.get(fn);
      if (count > RECURSION_LIMIT) {
        const instance = fn.ownerInstance;
        const componentName = instance && getComponentName(instance.type);
        warn2(`Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`);
        return true;
      } else {
        seen.set(fn, count + 1);
      }
    }
  }
  true ? Object.freeze({}) : {};
  true ? Object.freeze([]) : [];
  function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
      if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
        if (isVNode(propsOrChildren)) {
          return createVNode(type, null, [propsOrChildren]);
        }
        return createVNode(type, propsOrChildren);
      } else {
        return createVNode(type, null, propsOrChildren);
      }
    } else {
      if (l > 3) {
        children = Array.prototype.slice.call(arguments, 2);
      } else if (l === 3 && isVNode(children)) {
        children = [children];
      }
      return createVNode(type, propsOrChildren, children);
    }
  }
  var ssrContextKey = Symbol(true ? `ssrContext` : ``);
  function initCustomFormatter() {
    if (typeof window === "undefined") {
      return;
    }
    const vueStyle = { style: "color:#3ba776" };
    const numberStyle = { style: "color:#0b1bc9" };
    const stringStyle = { style: "color:#b62e24" };
    const keywordStyle = { style: "color:#9d288c" };
    const formatter = {
      header(obj) {
        if (!isObject(obj)) {
          return null;
        }
        if (obj.__isVue) {
          return ["div", vueStyle, `VueInstance`];
        } else if (isRef(obj)) {
          return [
            "div",
            {},
            ["span", vueStyle, genRefFlag(obj)],
            "<",
            formatValue(obj.value),
            `>`
          ];
        } else if (isReactive(obj)) {
          return [
            "div",
            {},
            ["span", vueStyle, "Reactive"],
            "<",
            formatValue(obj),
            `>${isReadonly(obj) ? ` (readonly)` : ``}`
          ];
        } else if (isReadonly(obj)) {
          return [
            "div",
            {},
            ["span", vueStyle, "Readonly"],
            "<",
            formatValue(obj),
            ">"
          ];
        }
        return null;
      },
      hasBody(obj) {
        return obj && obj.__isVue;
      },
      body(obj) {
        if (obj && obj.__isVue) {
          return [
            "div",
            {},
            ...formatInstance(obj.$)
          ];
        }
      }
    };
    function formatInstance(instance) {
      const blocks = [];
      if (instance.type.props && instance.props) {
        blocks.push(createInstanceBlock("props", toRaw(instance.props)));
      }
      if (instance.setupState !== EMPTY_OBJ) {
        blocks.push(createInstanceBlock("setup", instance.setupState));
      }
      if (instance.data !== EMPTY_OBJ) {
        blocks.push(createInstanceBlock("data", toRaw(instance.data)));
      }
      const computed2 = extractKeys(instance, "computed");
      if (computed2) {
        blocks.push(createInstanceBlock("computed", computed2));
      }
      const injected = extractKeys(instance, "inject");
      if (injected) {
        blocks.push(createInstanceBlock("injected", injected));
      }
      blocks.push([
        "div",
        {},
        [
          "span",
          {
            style: keywordStyle.style + ";opacity:0.66"
          },
          "$ (internal): "
        ],
        ["object", { object: instance }]
      ]);
      return blocks;
    }
    function createInstanceBlock(type, target) {
      target = extend({}, target);
      if (!Object.keys(target).length) {
        return ["span", {}];
      }
      return [
        "div",
        { style: "line-height:1.25em;margin-bottom:0.6em" },
        [
          "div",
          {
            style: "color:#476582"
          },
          type
        ],
        [
          "div",
          {
            style: "padding-left:1.25em"
          },
          ...Object.keys(target).map((key) => {
            return [
              "div",
              {},
              ["span", keywordStyle, key + ": "],
              formatValue(target[key], false)
            ];
          })
        ]
      ];
    }
    function formatValue(v, asRaw = true) {
      if (typeof v === "number") {
        return ["span", numberStyle, v];
      } else if (typeof v === "string") {
        return ["span", stringStyle, JSON.stringify(v)];
      } else if (typeof v === "boolean") {
        return ["span", keywordStyle, v];
      } else if (isObject(v)) {
        return ["object", { object: asRaw ? toRaw(v) : v }];
      } else {
        return ["span", stringStyle, String(v)];
      }
    }
    function extractKeys(instance, type) {
      const Comp = instance.type;
      if (isFunction(Comp)) {
        return;
      }
      const extracted = {};
      for (const key in instance.ctx) {
        if (isKeyOfType(Comp, key, type)) {
          extracted[key] = instance.ctx[key];
        }
      }
      return extracted;
    }
    function isKeyOfType(Comp, key, type) {
      const opts = Comp[type];
      if (isArray(opts) && opts.includes(key) || isObject(opts) && key in opts) {
        return true;
      }
      if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
        return true;
      }
      if (Comp.mixins && Comp.mixins.some((m) => isKeyOfType(m, key, type))) {
        return true;
      }
    }
    function genRefFlag(v) {
      if (v._shallow) {
        return `ShallowRef`;
      }
      if (v.effect) {
        return `ComputedRef`;
      }
      return `Ref`;
    }
    if (window.devtoolsFormatters) {
      window.devtoolsFormatters.push(formatter);
    } else {
      window.devtoolsFormatters = [formatter];
    }
  }
  var version = "3.2.2";

  // node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
  var svgNS = "http://www.w3.org/2000/svg";
  var doc = typeof document !== "undefined" ? document : null;
  var staticTemplateCache = new Map();
  var nodeOps = {
    insert: (child, parent, anchor) => {
      parent.insertBefore(child, anchor || null);
    },
    remove: (child) => {
      const parent = child.parentNode;
      if (parent) {
        parent.removeChild(child);
      }
    },
    createElement: (tag, isSVG, is, props) => {
      const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : void 0);
      if (tag === "select" && props && props.multiple != null) {
        el.setAttribute("multiple", props.multiple);
      }
      return el;
    },
    createText: (text) => doc.createTextNode(text),
    createComment: (text) => doc.createComment(text),
    setText: (node, text) => {
      node.nodeValue = text;
    },
    setElementText: (el, text) => {
      el.textContent = text;
    },
    parentNode: (node) => node.parentNode,
    nextSibling: (node) => node.nextSibling,
    querySelector: (selector) => doc.querySelector(selector),
    setScopeId(el, id) {
      el.setAttribute(id, "");
    },
    cloneNode(el) {
      const cloned = el.cloneNode(true);
      if (`_value` in el) {
        cloned._value = el._value;
      }
      return cloned;
    },
    insertStaticContent(content, parent, anchor, isSVG) {
      const before = anchor ? anchor.previousSibling : parent.lastChild;
      let template = staticTemplateCache.get(content);
      if (!template) {
        const t = doc.createElement("template");
        t.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
        template = t.content;
        if (isSVG) {
          const wrapper = template.firstChild;
          while (wrapper.firstChild) {
            template.appendChild(wrapper.firstChild);
          }
          template.removeChild(wrapper);
        }
        staticTemplateCache.set(content, template);
      }
      parent.insertBefore(template.cloneNode(true), anchor);
      return [
        before ? before.nextSibling : parent.firstChild,
        anchor ? anchor.previousSibling : parent.lastChild
      ];
    }
  };
  function patchClass(el, value, isSVG) {
    const transitionClasses = el._vtc;
    if (transitionClasses) {
      value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
    }
    if (value == null) {
      el.removeAttribute("class");
    } else if (isSVG) {
      el.setAttribute("class", value);
    } else {
      el.className = value;
    }
  }
  function patchStyle(el, prev, next) {
    const style = el.style;
    if (!next) {
      el.removeAttribute("style");
    } else if (isString(next)) {
      if (prev !== next) {
        const current = style.display;
        style.cssText = next;
        if ("_vod" in el) {
          style.display = current;
        }
      }
    } else {
      for (const key in next) {
        setStyle(style, key, next[key]);
      }
      if (prev && !isString(prev)) {
        for (const key in prev) {
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      }
    }
  }
  var importantRE = /\s*!important$/;
  function setStyle(style, name, val) {
    if (isArray(val)) {
      val.forEach((v) => setStyle(style, name, v));
    } else {
      if (name.startsWith("--")) {
        style.setProperty(name, val);
      } else {
        const prefixed = autoPrefix(style, name);
        if (importantRE.test(val)) {
          style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
        } else {
          style[prefixed] = val;
        }
      }
    }
  }
  var prefixes = ["Webkit", "Moz", "ms"];
  var prefixCache = {};
  function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) {
      return cached;
    }
    let name = camelize(rawName);
    if (name !== "filter" && name in style) {
      return prefixCache[rawName] = name;
    }
    name = capitalize(name);
    for (let i = 0; i < prefixes.length; i++) {
      const prefixed = prefixes[i] + name;
      if (prefixed in style) {
        return prefixCache[rawName] = prefixed;
      }
    }
    return rawName;
  }
  var xlinkNS = "http://www.w3.org/1999/xlink";
  function patchAttr(el, key, value, isSVG, instance) {
    if (isSVG && key.startsWith("xlink:")) {
      if (value == null) {
        el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      const isBoolean2 = isSpecialBooleanAttr(key);
      if (value == null || isBoolean2 && value === false) {
        el.removeAttribute(key);
      } else {
        el.setAttribute(key, isBoolean2 ? "" : value);
      }
    }
  }
  function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === "innerHTML" || key === "textContent") {
      if (prevChildren) {
        unmountChildren(prevChildren, parentComponent, parentSuspense);
      }
      el[key] = value == null ? "" : value;
      return;
    }
    if (key === "value" && el.tagName !== "PROGRESS") {
      el._value = value;
      const newValue = value == null ? "" : value;
      if (el.value !== newValue) {
        el.value = newValue;
      }
      if (value == null) {
        el.removeAttribute(key);
      }
      return;
    }
    if (value === "" || value == null) {
      const type = typeof el[key];
      if (value === "" && type === "boolean") {
        el[key] = true;
        return;
      } else if (value == null && type === "string") {
        el[key] = "";
        el.removeAttribute(key);
        return;
      } else if (type === "number") {
        try {
          el[key] = 0;
        } catch (_a2) {
        }
        el.removeAttribute(key);
        return;
      }
    }
    try {
      el[key] = value;
    } catch (e) {
      if (true) {
        warn2(`Failed setting prop "${key}" on <${el.tagName.toLowerCase()}>: value ${value} is invalid.`, e);
      }
    }
  }
  var _getNow = Date.now;
  var skipTimestampCheck = false;
  if (typeof window !== "undefined") {
    if (_getNow() > document.createEvent("Event").timeStamp) {
      _getNow = () => performance.now();
    }
    const ffMatch = navigator.userAgent.match(/firefox\/(\d+)/i);
    skipTimestampCheck = !!(ffMatch && Number(ffMatch[1]) <= 53);
  }
  var cachedNow = 0;
  var p = Promise.resolve();
  var reset = () => {
    cachedNow = 0;
  };
  var getNow = () => cachedNow || (p.then(reset), cachedNow = _getNow());
  function addEventListener(el, event, handler, options) {
    el.addEventListener(event, handler, options);
  }
  function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
  }
  function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    const invokers = el._vei || (el._vei = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) {
      existingInvoker.value = nextValue;
    } else {
      const [name, options] = parseName(rawName);
      if (nextValue) {
        const invoker = invokers[rawName] = createInvoker(nextValue, instance);
        addEventListener(el, name, invoker, options);
      } else if (existingInvoker) {
        removeEventListener(el, name, existingInvoker, options);
        invokers[rawName] = void 0;
      }
    }
  }
  var optionsModifierRE = /(?:Once|Passive|Capture)$/;
  function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
      options = {};
      let m;
      while (m = name.match(optionsModifierRE)) {
        name = name.slice(0, name.length - m[0].length);
        options[m[0].toLowerCase()] = true;
      }
    }
    return [hyphenate(name.slice(2)), options];
  }
  function createInvoker(initialValue, instance) {
    const invoker = (e) => {
      const timeStamp = e.timeStamp || _getNow();
      if (skipTimestampCheck || timeStamp >= invoker.attached - 1) {
        callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
      }
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
  }
  function patchStopImmediatePropagation(e, value) {
    if (isArray(value)) {
      const originalStop = e.stopImmediatePropagation;
      e.stopImmediatePropagation = () => {
        originalStop.call(e);
        e._stopped = true;
      };
      return value.map((fn) => (e2) => !e2._stopped && fn(e2));
    } else {
      return value;
    }
  }
  var nativeOnRE = /^on[a-z]/;
  var patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
    if (key === "class") {
      patchClass(el, nextValue, isSVG);
    } else if (key === "style") {
      patchStyle(el, prevValue, nextValue);
    } else if (isOn(key)) {
      if (!isModelListener(key)) {
        patchEvent(el, key, prevValue, nextValue, parentComponent);
      }
    } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
      patchDOMProp(el, key, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
    } else {
      if (key === "true-value") {
        el._trueValue = nextValue;
      } else if (key === "false-value") {
        el._falseValue = nextValue;
      }
      patchAttr(el, key, nextValue, isSVG);
    }
  };
  function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
      if (key === "innerHTML" || key === "textContent") {
        return true;
      }
      if (key in el && nativeOnRE.test(key) && isFunction(value)) {
        return true;
      }
      return false;
    }
    if (key === "spellcheck" || key === "draggable") {
      return false;
    }
    if (key === "form") {
      return false;
    }
    if (key === "list" && el.tagName === "INPUT") {
      return false;
    }
    if (key === "type" && el.tagName === "TEXTAREA") {
      return false;
    }
    if (nativeOnRE.test(key) && isString(value)) {
      return false;
    }
    return key in el;
  }
  var TRANSITION = "transition";
  var ANIMATION = "animation";
  var Transition = (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots);
  Transition.displayName = "Transition";
  var DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
      type: Boolean,
      default: true
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  };
  var TransitionPropsValidators = Transition.props = /* @__PURE__ */ extend({}, BaseTransition.props, DOMTransitionPropsValidators);
  var callHook = (hook, args = []) => {
    if (isArray(hook)) {
      hook.forEach((h2) => h2(...args));
    } else if (hook) {
      hook(...args);
    }
  };
  var hasExplicitCallback = (hook) => {
    return hook ? isArray(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
  };
  function resolveTransitionProps(rawProps) {
    const baseProps = {};
    for (const key in rawProps) {
      if (!(key in DOMTransitionPropsValidators)) {
        baseProps[key] = rawProps[key];
      }
    }
    if (rawProps.css === false) {
      return baseProps;
    }
    const { name = "v", type, duration, enterFromClass = `${name}-enter-from`, enterActiveClass = `${name}-enter-active`, enterToClass = `${name}-enter-to`, appearFromClass = enterFromClass, appearActiveClass = enterActiveClass, appearToClass = enterToClass, leaveFromClass = `${name}-leave-from`, leaveActiveClass = `${name}-leave-active`, leaveToClass = `${name}-leave-to` } = rawProps;
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const { onBeforeEnter, onEnter, onEnterCancelled, onLeave, onLeaveCancelled, onBeforeAppear = onBeforeEnter, onAppear = onEnter, onAppearCancelled = onEnterCancelled } = baseProps;
    const finishEnter = (el, isAppear, done) => {
      removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
      removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
      done && done();
    };
    const finishLeave = (el, done) => {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
      done && done();
    };
    const makeEnterHook = (isAppear) => {
      return (el, done) => {
        const hook = isAppear ? onAppear : onEnter;
        const resolve2 = () => finishEnter(el, isAppear, done);
        callHook(hook, [el, resolve2]);
        nextFrame(() => {
          removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
          addTransitionClass(el, isAppear ? appearToClass : enterToClass);
          if (!hasExplicitCallback(hook)) {
            whenTransitionEnds(el, type, enterDuration, resolve2);
          }
        });
      };
    };
    return extend(baseProps, {
      onBeforeEnter(el) {
        callHook(onBeforeEnter, [el]);
        addTransitionClass(el, enterFromClass);
        addTransitionClass(el, enterActiveClass);
      },
      onBeforeAppear(el) {
        callHook(onBeforeAppear, [el]);
        addTransitionClass(el, appearFromClass);
        addTransitionClass(el, appearActiveClass);
      },
      onEnter: makeEnterHook(false),
      onAppear: makeEnterHook(true),
      onLeave(el, done) {
        const resolve2 = () => finishLeave(el, done);
        addTransitionClass(el, leaveFromClass);
        forceReflow();
        addTransitionClass(el, leaveActiveClass);
        nextFrame(() => {
          removeTransitionClass(el, leaveFromClass);
          addTransitionClass(el, leaveToClass);
          if (!hasExplicitCallback(onLeave)) {
            whenTransitionEnds(el, type, leaveDuration, resolve2);
          }
        });
        callHook(onLeave, [el, resolve2]);
      },
      onEnterCancelled(el) {
        finishEnter(el, false);
        callHook(onEnterCancelled, [el]);
      },
      onAppearCancelled(el) {
        finishEnter(el, true);
        callHook(onAppearCancelled, [el]);
      },
      onLeaveCancelled(el) {
        finishLeave(el);
        callHook(onLeaveCancelled, [el]);
      }
    });
  }
  function normalizeDuration(duration) {
    if (duration == null) {
      return null;
    } else if (isObject(duration)) {
      return [NumberOf(duration.enter), NumberOf(duration.leave)];
    } else {
      const n = NumberOf(duration);
      return [n, n];
    }
  }
  function NumberOf(val) {
    const res = toNumber(val);
    if (true)
      validateDuration(res);
    return res;
  }
  function validateDuration(val) {
    if (typeof val !== "number") {
      warn2(`<transition> explicit duration is not a valid number - got ${JSON.stringify(val)}.`);
    } else if (isNaN(val)) {
      warn2(`<transition> explicit duration is NaN - the duration expression might be incorrect.`);
    }
  }
  function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
    (el._vtc || (el._vtc = new Set())).add(cls);
  }
  function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
    const { _vtc } = el;
    if (_vtc) {
      _vtc.delete(cls);
      if (!_vtc.size) {
        el._vtc = void 0;
      }
    }
  }
  function nextFrame(cb) {
    requestAnimationFrame(() => {
      requestAnimationFrame(cb);
    });
  }
  var endId = 0;
  function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
    const id = el._endId = ++endId;
    const resolveIfNotStale = () => {
      if (id === el._endId) {
        resolve2();
      }
    };
    if (explicitTimeout) {
      return setTimeout(resolveIfNotStale, explicitTimeout);
    }
    const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
    if (!type) {
      return resolve2();
    }
    const endEvent = type + "end";
    let ended = 0;
    const end = () => {
      el.removeEventListener(endEvent, onEnd);
      resolveIfNotStale();
    };
    const onEnd = (e) => {
      if (e.target === el && ++ended >= propCount) {
        end();
      }
    };
    setTimeout(() => {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
  }
  function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    const getStyleProperties = (key) => (styles[key] || "").split(", ");
    const transitionDelays = getStyleProperties(TRANSITION + "Delay");
    const transitionDurations = getStyleProperties(TRANSITION + "Duration");
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(ANIMATION + "Delay");
    const animationDurations = getStyleProperties(ANIMATION + "Duration");
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
      propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(styles[TRANSITION + "Property"]);
    return {
      type,
      timeout,
      propCount,
      hasTransform
    };
  }
  function getTimeout(delays, durations) {
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }
    return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
  }
  function toMs(s) {
    return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function forceReflow() {
    return document.body.offsetHeight;
  }
  var positionMap = new WeakMap();
  var newPositionMap = new WeakMap();
  var rendererOptions = extend({ patchProp }, nodeOps);
  var renderer;
  function ensureRenderer() {
    return renderer || (renderer = createRenderer(rendererOptions));
  }
  var createApp = (...args) => {
    const app = ensureRenderer().createApp(...args);
    if (true) {
      injectNativeTagCheck(app);
      injectCompilerOptionsCheck(app);
    }
    const { mount } = app;
    app.mount = (containerOrSelector) => {
      const container = normalizeContainer(containerOrSelector);
      if (!container)
        return;
      const component = app._component;
      if (!isFunction(component) && !component.render && !component.template) {
        component.template = container.innerHTML;
      }
      container.innerHTML = "";
      const proxy = mount(container, false, container instanceof SVGElement);
      if (container instanceof Element) {
        container.removeAttribute("v-cloak");
        container.setAttribute("data-v-app", "");
      }
      return proxy;
    };
    return app;
  };
  function injectNativeTagCheck(app) {
    Object.defineProperty(app.config, "isNativeTag", {
      value: (tag) => isHTMLTag(tag) || isSVGTag(tag),
      writable: false
    });
  }
  function injectCompilerOptionsCheck(app) {
    if (isRuntimeOnly()) {
      const isCustomElement = app.config.isCustomElement;
      Object.defineProperty(app.config, "isCustomElement", {
        get() {
          return isCustomElement;
        },
        set() {
          warn2(`The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`);
        }
      });
      const compilerOptions = app.config.compilerOptions;
      const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom`;
      Object.defineProperty(app.config, "compilerOptions", {
        get() {
          warn2(msg);
          return compilerOptions;
        },
        set() {
          warn2(msg);
        }
      });
    }
  }
  function normalizeContainer(container) {
    if (isString(container)) {
      const res = document.querySelector(container);
      if (!res) {
        warn2(`Failed to mount app: mount target selector "${container}" returned null.`);
      }
      return res;
    }
    if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") {
      warn2(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
    }
    return container;
  }

  // node_modules/vue/dist/vue.runtime.esm-bundler.js
  function initDev() {
    {
      initCustomFormatter();
    }
  }
  if (true) {
    initDev();
  }

  // sfc-script:F:\wwwroot\GITHUB\vue3-typescript-esbuild-bootstrap5\src\components\HelloWorld.vue?type=script
  var HelloWorld_default = defineComponent({
    name: "HelloWorld",
    props: {
      msg: {
        type: String,
        required: true
      }
    },
    setup: () => {
      const count = ref(0);
      return { count };
    }
  });

  // sfc-template:F:\wwwroot\GITHUB\vue3-typescript-esbuild-bootstrap5\src\components\HelloWorld.vue?type=template
  function render(_ctx, _cache) {
    return openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("h1", null, toDisplayString(_ctx.msg), 1),
      createBaseVNode("button", {
        class: "btn btn-primary",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.count++)
      }, "Count is: " + toDisplayString(_ctx.count), 1)
    ], 64);
  }

  // src/components/HelloWorld.vue
  HelloWorld_default.render = render;
  HelloWorld_default.__file = "src\\components\\HelloWorld.vue";
  HelloWorld_default.__scopeId = "data-v-f902ac32";
  var HelloWorld_default2 = HelloWorld_default;

  // sfc-script:F:\wwwroot\GITHUB\vue3-typescript-esbuild-bootstrap5\src\App.vue?type=script
  var App_default = defineComponent({
    name: "App",
    components: {
      HelloWorld: HelloWorld_default2
    },
    setup() {
      const test = ref("test variable");
      const changeVariable = () => {
        test.value = "variable changed";
      };
      return {
        test,
        changeVariable
      };
    }
  });

  // sfc-template:F:\wwwroot\GITHUB\vue3-typescript-esbuild-bootstrap5\src\App.vue?type=template
  var _hoisted_1 = { class: "container mt-5" };
  var _hoisted_2 = { class: "row" };
  var _hoisted_3 = { class: "col text-center" };
  var _hoisted_4 = /* @__PURE__ */ createBaseVNode("img", {
    src: "assets/img/vue-logo.png",
    class: "logo"
  }, null, -1);
  var _hoisted_5 = { class: "mt-2" };
  function render2(_ctx, _cache) {
    const _component_HelloWorld = resolveComponent("HelloWorld");
    return openBlock(), createElementBlock("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("div", _hoisted_3, [
          _hoisted_4,
          createVNode(_component_HelloWorld, { msg: "Vue 3 + ESBuild + Bootstrap 5 + Livereload" }),
          createBaseVNode("p", _hoisted_5, "Test Variable: " + toDisplayString(_ctx.test), 1),
          createBaseVNode("button", {
            class: "btn btn-danger",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.changeVariable && _ctx.changeVariable(...args))
          }, "Change Variable")
        ])
      ])
    ]);
  }

  // src/App.vue
  App_default.render = render2;
  App_default.__file = "src\\App.vue";
  var App_default2 = App_default;

  // src/main.ts
  var import_bootstrap_bundle_min = __toModule(require_bootstrap_bundle_min());
  createApp(App_default2).mount("#app");
})();
/*!
  * Bootstrap v5.1.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
