/*! For license information please see main.js.LICENSE.txt */
(() => { "use strict"; var e = { 929: e => { e.exports = function (e) { var r = +e; return r - r == 0 && (r === e || "string" == typeof e && (0 !== r || "" !== e.trim())) } }, 565: (e, r, t) => { const o = t(929); e.exports = function (e) { const r = Math.abs(e); if (!o(r)) throw new TypeError("expected a number"); if (!Number.isInteger(r)) throw new Error("expected an integer"); if (!Number.isSafeInteger(r)) throw new Error("value exceeds maximum safe integer"); return r % 2 == 1 } } }, r = {}; function t(o) { var n = r[o]; if (void 0 !== n) return n.exports; var s = r[o] = { exports: {} }; return e[o](s, s.exports, t), s.exports } t.n = e => { var r = e && e.__esModule ? () => e.default : () => e; return t.d(r, { a: r }), r }, t.d = (e, r) => { for (var o in r) t.o(r, o) && !t.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: r[o] }) }, t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r); var o = t(565), n = t.n(o); console.log("hello sub"); const s = n()(3); console.log(s) })();