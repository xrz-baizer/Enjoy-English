import { promises as m, createReadStream as p } from "fs";
import { basename as w } from "path";
import { F as b } from "./main-DhVQzh6z.js";
import { m as j } from "./main-DhVQzh6z.js";
/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
var l, h;
function y() {
  if (h) return l;
  if (h = 1, !globalThis.DOMException)
    try {
      const { MessageChannel: t } = require("worker_threads"), e = new t().port1, r = new ArrayBuffer();
      e.postMessage(r, [r, r]);
    } catch (t) {
      t.constructor.name === "DOMException" && (globalThis.DOMException = t.constructor);
    }
  return l = globalThis.DOMException, l;
}
var M = y();
const g = (t) => Object.prototype.toString.call(t).slice(8, -1).toLowerCase();
function F(t) {
  if (g(t) !== "object")
    return !1;
  const e = Object.getPrototypeOf(t);
  return e == null ? !0 : (e.constructor && e.constructor.toString()) === Object.toString();
}
var u = function(t, e, r, o, i) {
  if (o === "m") throw new TypeError("Private method is not writable");
  if (o === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return o === "a" ? i.call(t, r) : i ? i.value = r : e.set(t, r), r;
}, s = function(t, e, r, o) {
  if (r === "a" && !o) throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? o : r === "a" ? o.call(t) : o ? o.value : e.get(t);
}, a, c;
const E = "The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.";
class f {
  constructor(e) {
    a.set(this, void 0), c.set(this, void 0), u(this, a, e.path, "f"), u(this, c, e.start || 0, "f"), this.name = w(s(this, a, "f")), this.size = e.size, this.lastModified = e.lastModified;
  }
  slice(e, r) {
    return new f({
      path: s(this, a, "f"),
      lastModified: this.lastModified,
      size: r - e,
      start: e
    });
  }
  async *stream() {
    const { mtimeMs: e } = await m.stat(s(this, a, "f"));
    if (e > this.lastModified)
      throw new M(E, "NotReadableError");
    this.size && (yield* p(s(this, a, "f"), {
      start: s(this, c, "f"),
      end: s(this, c, "f") + this.size - 1
    }));
  }
  get [(a = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), Symbol.toStringTag)]() {
    return "File";
  }
}
function P(t, { mtimeMs: e, size: r }, o, i = {}) {
  let n;
  F(o) ? [i, n] = [o, void 0] : n = o;
  const d = new f({ path: t, size: r, lastModified: e });
  return n || (n = d.name), new b([d], n, {
    ...i,
    lastModified: d.lastModified
  });
}
async function v(t, e, r) {
  const o = await m.stat(t);
  return P(t, o, e, r);
}
export {
  v as fileFromPath,
  j as isFile
};
//# sourceMappingURL=fileFromPath-C6jlLjm-.js.map
