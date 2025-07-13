import { r as Xi, a as xn, b as _t, c as gt, d as Vi, e as kn, f as Ji, g as mt, h as ot, i as ft, j as Sn, k as ze, l as En } from "./main-DhVQzh6z.js";
function Cn(o, d) {
  for (var c = 0; c < d.length; c++) {
    const i = d[c];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const y in i)
        if (y !== "default" && !(y in o)) {
          const s = Object.getOwnPropertyDescriptor(i, y);
          s && Object.defineProperty(o, y, s.get ? s : {
            enumerable: !0,
            get: () => i[y]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var Te = {}, yt = {}, xt = {}, Ar;
function Rn() {
  return Ar || (Ar = 1, function(o) {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.changePermissions = o.downloadFile = o.getPath = void 0;
    const d = Xi, c = gt, i = _t, y = xn, s = () => {
      const S = d.app.getPath("userData");
      return i.resolve(`${S}/extensions`);
    };
    o.getPath = s;
    const n = d.net ? d.net.request : y.get, p = (S, m) => new Promise((u, t) => {
      const l = n(S);
      l.on("response", (g) => {
        if (g.statusCode && g.statusCode >= 300 && g.statusCode < 400 && g.headers.location)
          return (0, o.downloadFile)(g.headers.location, m).then(u).catch(t);
        g.pipe(c.createWriteStream(m)).on("close", u), g.on("error", t);
      }), l.on("error", t), l.end();
    });
    o.downloadFile = p;
    const h = (S, m) => {
      c.readdirSync(S).forEach((t) => {
        const l = i.join(S, t);
        c.chmodSync(l, parseInt(`${m}`, 8)), c.statSync(l).isDirectory() && (0, o.changePermissions)(l, m);
      });
    };
    o.changePermissions = h;
  }(xt)), xt;
}
var kt = {}, St = {}, Me = {}, dt = { exports: {} }, Et, Or;
function Tn() {
  if (Or) return Et;
  Or = 1;
  var o = {}.toString;
  return Et = Array.isArray || function(d) {
    return o.call(d) == "[object Array]";
  }, Et;
}
var Ct, Dr;
function Qi() {
  return Dr || (Dr = 1, Ct = Vi), Ct;
}
var ct = { exports: {} }, Ir;
function wt() {
  return Ir || (Ir = 1, function(o, d) {
    var c = kn, i = c.Buffer;
    function y(n, p) {
      for (var h in n)
        p[h] = n[h];
    }
    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? o.exports = c : (y(c, d), d.Buffer = s);
    function s(n, p, h) {
      return i(n, p, h);
    }
    y(i, s), s.from = function(n, p, h) {
      if (typeof n == "number")
        throw new TypeError("Argument must not be a number");
      return i(n, p, h);
    }, s.alloc = function(n, p, h) {
      if (typeof n != "number")
        throw new TypeError("Argument must be a number");
      var S = i(n);
      return p !== void 0 ? typeof h == "string" ? S.fill(p, h) : S.fill(p) : S.fill(0), S;
    }, s.allocUnsafe = function(n) {
      if (typeof n != "number")
        throw new TypeError("Argument must be a number");
      return i(n);
    }, s.allocUnsafeSlow = function(n) {
      if (typeof n != "number")
        throw new TypeError("Argument must be a number");
      return c.SlowBuffer(n);
    };
  }(ct, ct.exports)), ct.exports;
}
var Rt = { exports: {} }, Br;
function An() {
  return Br || (Br = 1, function(o) {
    function d(s, n) {
      if (!(s instanceof n))
        throw new TypeError("Cannot call a class as a function");
    }
    var c = wt().Buffer, i = Ji;
    function y(s, n, p) {
      s.copy(n, p);
    }
    o.exports = function() {
      function s() {
        d(this, s), this.head = null, this.tail = null, this.length = 0;
      }
      return s.prototype.push = function(p) {
        var h = { data: p, next: null };
        this.length > 0 ? this.tail.next = h : this.head = h, this.tail = h, ++this.length;
      }, s.prototype.unshift = function(p) {
        var h = { data: p, next: this.head };
        this.length === 0 && (this.tail = h), this.head = h, ++this.length;
      }, s.prototype.shift = function() {
        if (this.length !== 0) {
          var p = this.head.data;
          return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, p;
        }
      }, s.prototype.clear = function() {
        this.head = this.tail = null, this.length = 0;
      }, s.prototype.join = function(p) {
        if (this.length === 0) return "";
        for (var h = this.head, S = "" + h.data; h = h.next; )
          S += p + h.data;
        return S;
      }, s.prototype.concat = function(p) {
        if (this.length === 0) return c.alloc(0);
        for (var h = c.allocUnsafe(p >>> 0), S = this.head, m = 0; S; )
          y(S.data, h, m), m += S.data.length, S = S.next;
        return h;
      }, s;
    }(), i && i.inspect && i.inspect.custom && (o.exports.prototype[i.inspect.custom] = function() {
      var s = i.inspect({ length: this.length });
      return this.constructor.name + " " + s;
    });
  }(Rt)), Rt.exports;
}
var Tt, Fr;
function en() {
  if (Fr) return Tt;
  Fr = 1;
  var o = mt();
  function d(y, s) {
    var n = this, p = this._readableState && this._readableState.destroyed, h = this._writableState && this._writableState.destroyed;
    return p || h ? (s ? s(y) : y && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, o.nextTick(i, this, y)) : o.nextTick(i, this, y)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(y || null, function(S) {
      !s && S ? n._writableState ? n._writableState.errorEmitted || (n._writableState.errorEmitted = !0, o.nextTick(i, n, S)) : o.nextTick(i, n, S) : s && s(S);
    }), this);
  }
  function c() {
    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
  }
  function i(y, s) {
    y.emit("error", s);
  }
  return Tt = {
    destroy: d,
    undestroy: c
  }, Tt;
}
var At, zr;
function tn() {
  if (zr) return At;
  zr = 1;
  var o = mt();
  At = T;
  function d(C) {
    var A = this;
    this.next = null, this.entry = null, this.finish = function() {
      Se(A, C);
    };
  }
  var c = !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : o.nextTick, i;
  T.WritableState = l;
  var y = Object.create(ot());
  y.inherits = ft();
  var s = {
    deprecate: Sn()
  }, n = Qi(), p = wt().Buffer, h = (typeof ze < "u" ? ze : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
  };
  function S(C) {
    return p.from(C);
  }
  function m(C) {
    return p.isBuffer(C) || C instanceof h;
  }
  var u = en();
  y.inherits(T, n);
  function t() {
  }
  function l(C, A) {
    i = i || nt(), C = C || {};
    var N = A instanceof i;
    this.objectMode = !!C.objectMode, N && (this.objectMode = this.objectMode || !!C.writableObjectMode);
    var te = C.highWaterMark, ae = C.writableHighWaterMark, fe = this.objectMode ? 16 : 16 * 1024;
    te || te === 0 ? this.highWaterMark = te : N && (ae || ae === 0) ? this.highWaterMark = ae : this.highWaterMark = fe, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    var ne = C.decodeStrings === !1;
    this.decodeStrings = !ne, this.defaultEncoding = C.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(me) {
      P(A, me);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new d(this);
  }
  l.prototype.getBuffer = function() {
    for (var A = this.bufferedRequest, N = []; A; )
      N.push(A), A = A.next;
    return N;
  }, function() {
    try {
      Object.defineProperty(l.prototype, "buffer", {
        get: s.deprecate(function() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch {
    }
  }();
  var g;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (g = Function.prototype[Symbol.hasInstance], Object.defineProperty(T, Symbol.hasInstance, {
    value: function(C) {
      return g.call(this, C) ? !0 : this !== T ? !1 : C && C._writableState instanceof l;
    }
  })) : g = function(C) {
    return C instanceof this;
  };
  function T(C) {
    if (i = i || nt(), !g.call(T, this) && !(this instanceof i))
      return new T(C);
    this._writableState = new l(C, this), this.writable = !0, C && (typeof C.write == "function" && (this._write = C.write), typeof C.writev == "function" && (this._writev = C.writev), typeof C.destroy == "function" && (this._destroy = C.destroy), typeof C.final == "function" && (this._final = C.final)), n.call(this);
  }
  T.prototype.pipe = function() {
    this.emit("error", new Error("Cannot pipe, not readable"));
  };
  function E(C, A) {
    var N = new Error("write after end");
    C.emit("error", N), o.nextTick(A, N);
  }
  function f(C, A, N, te) {
    var ae = !0, fe = !1;
    return N === null ? fe = new TypeError("May not write null values to stream") : typeof N != "string" && N !== void 0 && !A.objectMode && (fe = new TypeError("Invalid non-string/buffer chunk")), fe && (C.emit("error", fe), o.nextTick(te, fe), ae = !1), ae;
  }
  T.prototype.write = function(C, A, N) {
    var te = this._writableState, ae = !1, fe = !te.objectMode && m(C);
    return fe && !p.isBuffer(C) && (C = S(C)), typeof A == "function" && (N = A, A = null), fe ? A = "buffer" : A || (A = te.defaultEncoding), typeof N != "function" && (N = t), te.ended ? E(this, N) : (fe || f(this, te, C, N)) && (te.pendingcb++, ae = k(this, te, fe, C, A, N)), ae;
  }, T.prototype.cork = function() {
    var C = this._writableState;
    C.corked++;
  }, T.prototype.uncork = function() {
    var C = this._writableState;
    C.corked && (C.corked--, !C.writing && !C.corked && !C.bufferProcessing && C.bufferedRequest && oe(this, C));
  }, T.prototype.setDefaultEncoding = function(A) {
    if (typeof A == "string" && (A = A.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((A + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + A);
    return this._writableState.defaultEncoding = A, this;
  };
  function _(C, A, N) {
    return !C.objectMode && C.decodeStrings !== !1 && typeof A == "string" && (A = p.from(A, N)), A;
  }
  Object.defineProperty(T.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  });
  function k(C, A, N, te, ae, fe) {
    if (!N) {
      var ne = _(A, te, ae);
      te !== ne && (N = !0, ae = "buffer", te = ne);
    }
    var me = A.objectMode ? 1 : te.length;
    A.length += me;
    var ye = A.length < A.highWaterMark;
    if (ye || (A.needDrain = !0), A.writing || A.corked) {
      var ve = A.lastBufferedRequest;
      A.lastBufferedRequest = {
        chunk: te,
        encoding: ae,
        isBuf: N,
        callback: fe,
        next: null
      }, ve ? ve.next = A.lastBufferedRequest : A.bufferedRequest = A.lastBufferedRequest, A.bufferedRequestCount += 1;
    } else
      O(C, A, !1, me, te, ae, fe);
    return ye;
  }
  function O(C, A, N, te, ae, fe, ne) {
    A.writelen = te, A.writecb = ne, A.writing = !0, A.sync = !0, N ? C._writev(ae, A.onwrite) : C._write(ae, fe, A.onwrite), A.sync = !1;
  }
  function F(C, A, N, te, ae) {
    --A.pendingcb, N ? (o.nextTick(ae, te), o.nextTick(ee, C, A), C._writableState.errorEmitted = !0, C.emit("error", te)) : (ae(te), C._writableState.errorEmitted = !0, C.emit("error", te), ee(C, A));
  }
  function H(C) {
    C.writing = !1, C.writecb = null, C.length -= C.writelen, C.writelen = 0;
  }
  function P(C, A) {
    var N = C._writableState, te = N.sync, ae = N.writecb;
    if (H(N), A) F(C, N, te, A, ae);
    else {
      var fe = le(N);
      !fe && !N.corked && !N.bufferProcessing && N.bufferedRequest && oe(C, N), te ? c(X, C, N, fe, ae) : X(C, N, fe, ae);
    }
  }
  function X(C, A, N, te) {
    N || ue(C, A), A.pendingcb--, te(), ee(C, A);
  }
  function ue(C, A) {
    A.length === 0 && A.needDrain && (A.needDrain = !1, C.emit("drain"));
  }
  function oe(C, A) {
    A.bufferProcessing = !0;
    var N = A.bufferedRequest;
    if (C._writev && N && N.next) {
      var te = A.bufferedRequestCount, ae = new Array(te), fe = A.corkedRequestsFree;
      fe.entry = N;
      for (var ne = 0, me = !0; N; )
        ae[ne] = N, N.isBuf || (me = !1), N = N.next, ne += 1;
      ae.allBuffers = me, O(C, A, !0, A.length, ae, "", fe.finish), A.pendingcb++, A.lastBufferedRequest = null, fe.next ? (A.corkedRequestsFree = fe.next, fe.next = null) : A.corkedRequestsFree = new d(A), A.bufferedRequestCount = 0;
    } else {
      for (; N; ) {
        var ye = N.chunk, ve = N.encoding, w = N.callback, b = A.objectMode ? 1 : ye.length;
        if (O(C, A, !1, b, ye, ve, w), N = N.next, A.bufferedRequestCount--, A.writing)
          break;
      }
      N === null && (A.lastBufferedRequest = null);
    }
    A.bufferedRequest = N, A.bufferProcessing = !1;
  }
  T.prototype._write = function(C, A, N) {
    N(new Error("_write() is not implemented"));
  }, T.prototype._writev = null, T.prototype.end = function(C, A, N) {
    var te = this._writableState;
    typeof C == "function" ? (N = C, C = null, A = null) : typeof A == "function" && (N = A, A = null), C != null && this.write(C, A), te.corked && (te.corked = 1, this.uncork()), te.ending || be(this, te, N);
  };
  function le(C) {
    return C.ending && C.length === 0 && C.bufferedRequest === null && !C.finished && !C.writing;
  }
  function he(C, A) {
    C._final(function(N) {
      A.pendingcb--, N && C.emit("error", N), A.prefinished = !0, C.emit("prefinish"), ee(C, A);
    });
  }
  function G(C, A) {
    !A.prefinished && !A.finalCalled && (typeof C._final == "function" ? (A.pendingcb++, A.finalCalled = !0, o.nextTick(he, C, A)) : (A.prefinished = !0, C.emit("prefinish")));
  }
  function ee(C, A) {
    var N = le(A);
    return N && (G(C, A), A.pendingcb === 0 && (A.finished = !0, C.emit("finish"))), N;
  }
  function be(C, A, N) {
    A.ending = !0, ee(C, A), N && (A.finished ? o.nextTick(N) : C.once("finish", N)), A.ended = !0, C.writable = !1;
  }
  function Se(C, A, N) {
    var te = C.entry;
    for (C.entry = null; te; ) {
      var ae = te.callback;
      A.pendingcb--, ae(N), te = te.next;
    }
    A.corkedRequestsFree.next = C;
  }
  return Object.defineProperty(T.prototype, "destroyed", {
    get: function() {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    },
    set: function(C) {
      this._writableState && (this._writableState.destroyed = C);
    }
  }), T.prototype.destroy = u.destroy, T.prototype._undestroy = u.undestroy, T.prototype._destroy = function(C, A) {
    this.end(), A(C);
  }, At;
}
var Ot, Lr;
function nt() {
  if (Lr) return Ot;
  Lr = 1;
  var o = mt(), d = Object.keys || function(u) {
    var t = [];
    for (var l in u)
      t.push(l);
    return t;
  };
  Ot = h;
  var c = Object.create(ot());
  c.inherits = ft();
  var i = rn(), y = tn();
  c.inherits(h, i);
  for (var s = d(y.prototype), n = 0; n < s.length; n++) {
    var p = s[n];
    h.prototype[p] || (h.prototype[p] = y.prototype[p]);
  }
  function h(u) {
    if (!(this instanceof h)) return new h(u);
    i.call(this, u), y.call(this, u), u && u.readable === !1 && (this.readable = !1), u && u.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, u && u.allowHalfOpen === !1 && (this.allowHalfOpen = !1), this.once("end", S);
  }
  Object.defineProperty(h.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  });
  function S() {
    this.allowHalfOpen || this._writableState.ended || o.nextTick(m, this);
  }
  function m(u) {
    u.end();
  }
  return Object.defineProperty(h.prototype, "destroyed", {
    get: function() {
      return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function(u) {
      this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = u, this._writableState.destroyed = u);
    }
  }), h.prototype._destroy = function(u, t) {
    this.push(null), this.end(), o.nextTick(t, u);
  }, Ot;
}
var Dt = {}, Nr;
function Pr() {
  if (Nr) return Dt;
  Nr = 1;
  var o = wt().Buffer, d = o.isEncoding || function(f) {
    switch (f = "" + f, f && f.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return !0;
      default:
        return !1;
    }
  };
  function c(f) {
    if (!f) return "utf8";
    for (var _; ; )
      switch (f) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return f;
        default:
          if (_) return;
          f = ("" + f).toLowerCase(), _ = !0;
      }
  }
  function i(f) {
    var _ = c(f);
    if (typeof _ != "string" && (o.isEncoding === d || !d(f))) throw new Error("Unknown encoding: " + f);
    return _ || f;
  }
  Dt.StringDecoder = y;
  function y(f) {
    this.encoding = i(f);
    var _;
    switch (this.encoding) {
      case "utf16le":
        this.text = u, this.end = t, _ = 4;
        break;
      case "utf8":
        this.fillLast = h, _ = 4;
        break;
      case "base64":
        this.text = l, this.end = g, _ = 3;
        break;
      default:
        this.write = T, this.end = E;
        return;
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = o.allocUnsafe(_);
  }
  y.prototype.write = function(f) {
    if (f.length === 0) return "";
    var _, k;
    if (this.lastNeed) {
      if (_ = this.fillLast(f), _ === void 0) return "";
      k = this.lastNeed, this.lastNeed = 0;
    } else
      k = 0;
    return k < f.length ? _ ? _ + this.text(f, k) : this.text(f, k) : _ || "";
  }, y.prototype.end = m, y.prototype.text = S, y.prototype.fillLast = function(f) {
    if (this.lastNeed <= f.length)
      return f.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    f.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, f.length), this.lastNeed -= f.length;
  };
  function s(f) {
    return f <= 127 ? 0 : f >> 5 === 6 ? 2 : f >> 4 === 14 ? 3 : f >> 3 === 30 ? 4 : f >> 6 === 2 ? -1 : -2;
  }
  function n(f, _, k) {
    var O = _.length - 1;
    if (O < k) return 0;
    var F = s(_[O]);
    return F >= 0 ? (F > 0 && (f.lastNeed = F - 1), F) : --O < k || F === -2 ? 0 : (F = s(_[O]), F >= 0 ? (F > 0 && (f.lastNeed = F - 2), F) : --O < k || F === -2 ? 0 : (F = s(_[O]), F >= 0 ? (F > 0 && (F === 2 ? F = 0 : f.lastNeed = F - 3), F) : 0));
  }
  function p(f, _, k) {
    if ((_[0] & 192) !== 128)
      return f.lastNeed = 0, "�";
    if (f.lastNeed > 1 && _.length > 1) {
      if ((_[1] & 192) !== 128)
        return f.lastNeed = 1, "�";
      if (f.lastNeed > 2 && _.length > 2 && (_[2] & 192) !== 128)
        return f.lastNeed = 2, "�";
    }
  }
  function h(f) {
    var _ = this.lastTotal - this.lastNeed, k = p(this, f);
    if (k !== void 0) return k;
    if (this.lastNeed <= f.length)
      return f.copy(this.lastChar, _, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    f.copy(this.lastChar, _, 0, f.length), this.lastNeed -= f.length;
  }
  function S(f, _) {
    var k = n(this, f, _);
    if (!this.lastNeed) return f.toString("utf8", _);
    this.lastTotal = k;
    var O = f.length - (k - this.lastNeed);
    return f.copy(this.lastChar, 0, O), f.toString("utf8", _, O);
  }
  function m(f) {
    var _ = f && f.length ? this.write(f) : "";
    return this.lastNeed ? _ + "�" : _;
  }
  function u(f, _) {
    if ((f.length - _) % 2 === 0) {
      var k = f.toString("utf16le", _);
      if (k) {
        var O = k.charCodeAt(k.length - 1);
        if (O >= 55296 && O <= 56319)
          return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = f[f.length - 2], this.lastChar[1] = f[f.length - 1], k.slice(0, -1);
      }
      return k;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = f[f.length - 1], f.toString("utf16le", _, f.length - 1);
  }
  function t(f) {
    var _ = f && f.length ? this.write(f) : "";
    if (this.lastNeed) {
      var k = this.lastTotal - this.lastNeed;
      return _ + this.lastChar.toString("utf16le", 0, k);
    }
    return _;
  }
  function l(f, _) {
    var k = (f.length - _) % 3;
    return k === 0 ? f.toString("base64", _) : (this.lastNeed = 3 - k, this.lastTotal = 3, k === 1 ? this.lastChar[0] = f[f.length - 1] : (this.lastChar[0] = f[f.length - 2], this.lastChar[1] = f[f.length - 1]), f.toString("base64", _, f.length - k));
  }
  function g(f) {
    var _ = f && f.length ? this.write(f) : "";
    return this.lastNeed ? _ + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : _;
  }
  function T(f) {
    return f.toString(this.encoding);
  }
  function E(f) {
    return f && f.length ? this.write(f) : "";
  }
  return Dt;
}
var It, jr;
function rn() {
  if (jr) return It;
  jr = 1;
  var o = mt();
  It = _;
  var d = Tn(), c;
  _.ReadableState = f, En.EventEmitter;
  var i = function(w, b) {
    return w.listeners(b).length;
  }, y = Qi(), s = wt().Buffer, n = (typeof ze < "u" ? ze : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
  };
  function p(w) {
    return s.from(w);
  }
  function h(w) {
    return s.isBuffer(w) || w instanceof n;
  }
  var S = Object.create(ot());
  S.inherits = ft();
  var m = Ji, u = void 0;
  m && m.debuglog ? u = m.debuglog("stream") : u = function() {
  };
  var t = An(), l = en(), g;
  S.inherits(_, y);
  var T = ["error", "close", "destroy", "pause", "resume"];
  function E(w, b, M) {
    if (typeof w.prependListener == "function") return w.prependListener(b, M);
    !w._events || !w._events[b] ? w.on(b, M) : d(w._events[b]) ? w._events[b].unshift(M) : w._events[b] = [M, w._events[b]];
  }
  function f(w, b) {
    c = c || nt(), w = w || {};
    var M = b instanceof c;
    this.objectMode = !!w.objectMode, M && (this.objectMode = this.objectMode || !!w.readableObjectMode);
    var $ = w.highWaterMark, ce = w.readableHighWaterMark, Y = this.objectMode ? 16 : 16 * 1024;
    $ || $ === 0 ? this.highWaterMark = $ : M && (ce || ce === 0) ? this.highWaterMark = ce : this.highWaterMark = Y, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new t(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = w.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, w.encoding && (g || (g = Pr().StringDecoder), this.decoder = new g(w.encoding), this.encoding = w.encoding);
  }
  function _(w) {
    if (c = c || nt(), !(this instanceof _)) return new _(w);
    this._readableState = new f(w, this), this.readable = !0, w && (typeof w.read == "function" && (this._read = w.read), typeof w.destroy == "function" && (this._destroy = w.destroy)), y.call(this);
  }
  Object.defineProperty(_.prototype, "destroyed", {
    get: function() {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    },
    set: function(w) {
      this._readableState && (this._readableState.destroyed = w);
    }
  }), _.prototype.destroy = l.destroy, _.prototype._undestroy = l.undestroy, _.prototype._destroy = function(w, b) {
    this.push(null), b(w);
  }, _.prototype.push = function(w, b) {
    var M = this._readableState, $;
    return M.objectMode ? $ = !0 : typeof w == "string" && (b = b || M.defaultEncoding, b !== M.encoding && (w = s.from(w, b), b = ""), $ = !0), k(this, w, b, !1, $);
  }, _.prototype.unshift = function(w) {
    return k(this, w, null, !0, !1);
  };
  function k(w, b, M, $, ce) {
    var Y = w._readableState;
    if (b === null)
      Y.reading = !1, oe(w, Y);
    else {
      var se;
      ce || (se = F(Y, b)), se ? w.emit("error", se) : Y.objectMode || b && b.length > 0 ? (typeof b != "string" && !Y.objectMode && Object.getPrototypeOf(b) !== s.prototype && (b = p(b)), $ ? Y.endEmitted ? w.emit("error", new Error("stream.unshift() after end event")) : O(w, Y, b, !0) : Y.ended ? w.emit("error", new Error("stream.push() after EOF")) : (Y.reading = !1, Y.decoder && !M ? (b = Y.decoder.write(b), Y.objectMode || b.length !== 0 ? O(w, Y, b, !1) : G(w, Y)) : O(w, Y, b, !1))) : $ || (Y.reading = !1);
    }
    return H(Y);
  }
  function O(w, b, M, $) {
    b.flowing && b.length === 0 && !b.sync ? (w.emit("data", M), w.read(0)) : (b.length += b.objectMode ? 1 : M.length, $ ? b.buffer.unshift(M) : b.buffer.push(M), b.needReadable && le(w)), G(w, b);
  }
  function F(w, b) {
    var M;
    return !h(b) && typeof b != "string" && b !== void 0 && !w.objectMode && (M = new TypeError("Invalid non-string/buffer chunk")), M;
  }
  function H(w) {
    return !w.ended && (w.needReadable || w.length < w.highWaterMark || w.length === 0);
  }
  _.prototype.isPaused = function() {
    return this._readableState.flowing === !1;
  }, _.prototype.setEncoding = function(w) {
    return g || (g = Pr().StringDecoder), this._readableState.decoder = new g(w), this._readableState.encoding = w, this;
  };
  var P = 8388608;
  function X(w) {
    return w >= P ? w = P : (w--, w |= w >>> 1, w |= w >>> 2, w |= w >>> 4, w |= w >>> 8, w |= w >>> 16, w++), w;
  }
  function ue(w, b) {
    return w <= 0 || b.length === 0 && b.ended ? 0 : b.objectMode ? 1 : w !== w ? b.flowing && b.length ? b.buffer.head.data.length : b.length : (w > b.highWaterMark && (b.highWaterMark = X(w)), w <= b.length ? w : b.ended ? b.length : (b.needReadable = !0, 0));
  }
  _.prototype.read = function(w) {
    u("read", w), w = parseInt(w, 10);
    var b = this._readableState, M = w;
    if (w !== 0 && (b.emittedReadable = !1), w === 0 && b.needReadable && (b.length >= b.highWaterMark || b.ended))
      return u("read: emitReadable", b.length, b.ended), b.length === 0 && b.ended ? me(this) : le(this), null;
    if (w = ue(w, b), w === 0 && b.ended)
      return b.length === 0 && me(this), null;
    var $ = b.needReadable;
    u("need readable", $), (b.length === 0 || b.length - w < b.highWaterMark) && ($ = !0, u("length less than watermark", $)), b.ended || b.reading ? ($ = !1, u("reading or ended", $)) : $ && (u("do read"), b.reading = !0, b.sync = !0, b.length === 0 && (b.needReadable = !0), this._read(b.highWaterMark), b.sync = !1, b.reading || (w = ue(M, b)));
    var ce;
    return w > 0 ? ce = te(w, b) : ce = null, ce === null ? (b.needReadable = !0, w = 0) : b.length -= w, b.length === 0 && (b.ended || (b.needReadable = !0), M !== w && b.ended && me(this)), ce !== null && this.emit("data", ce), ce;
  };
  function oe(w, b) {
    if (!b.ended) {
      if (b.decoder) {
        var M = b.decoder.end();
        M && M.length && (b.buffer.push(M), b.length += b.objectMode ? 1 : M.length);
      }
      b.ended = !0, le(w);
    }
  }
  function le(w) {
    var b = w._readableState;
    b.needReadable = !1, b.emittedReadable || (u("emitReadable", b.flowing), b.emittedReadable = !0, b.sync ? o.nextTick(he, w) : he(w));
  }
  function he(w) {
    u("emit readable"), w.emit("readable"), N(w);
  }
  function G(w, b) {
    b.readingMore || (b.readingMore = !0, o.nextTick(ee, w, b));
  }
  function ee(w, b) {
    for (var M = b.length; !b.reading && !b.flowing && !b.ended && b.length < b.highWaterMark && (u("maybeReadMore read 0"), w.read(0), M !== b.length); )
      M = b.length;
    b.readingMore = !1;
  }
  _.prototype._read = function(w) {
    this.emit("error", new Error("_read() is not implemented"));
  }, _.prototype.pipe = function(w, b) {
    var M = this, $ = this._readableState;
    switch ($.pipesCount) {
      case 0:
        $.pipes = w;
        break;
      case 1:
        $.pipes = [$.pipes, w];
        break;
      default:
        $.pipes.push(w);
        break;
    }
    $.pipesCount += 1, u("pipe count=%d opts=%j", $.pipesCount, b);
    var ce = (!b || b.end !== !1) && w !== process.stdout && w !== process.stderr, Y = ce ? Pe : j;
    $.endEmitted ? o.nextTick(Y) : M.once("end", Y), w.on("unpipe", se);
    function se(W, V) {
      u("onunpipe"), W === M && V && V.hasUnpiped === !1 && (V.hasUnpiped = !0, xe());
    }
    function Pe() {
      u("onend"), w.end();
    }
    var De = be(M);
    w.on("drain", De);
    var Ie = !1;
    function xe() {
      u("cleanup"), w.removeListener("close", Ne), w.removeListener("finish", B), w.removeListener("drain", De), w.removeListener("error", Ue), w.removeListener("unpipe", se), M.removeListener("end", Pe), M.removeListener("end", j), M.removeListener("data", Ae), Ie = !0, $.awaitDrain && (!w._writableState || w._writableState.needDrain) && De();
    }
    var re = !1;
    M.on("data", Ae);
    function Ae(W) {
      u("ondata"), re = !1;
      var V = w.write(W);
      V === !1 && !re && (($.pipesCount === 1 && $.pipes === w || $.pipesCount > 1 && ve($.pipes, w) !== -1) && !Ie && (u("false write response, pause", $.awaitDrain), $.awaitDrain++, re = !0), M.pause());
    }
    function Ue(W) {
      u("onerror", W), j(), w.removeListener("error", Ue), i(w, "error") === 0 && w.emit("error", W);
    }
    E(w, "error", Ue);
    function Ne() {
      w.removeListener("finish", B), j();
    }
    w.once("close", Ne);
    function B() {
      u("onfinish"), w.removeListener("close", Ne), j();
    }
    w.once("finish", B);
    function j() {
      u("unpipe"), M.unpipe(w);
    }
    return w.emit("pipe", M), $.flowing || (u("pipe resume"), M.resume()), w;
  };
  function be(w) {
    return function() {
      var b = w._readableState;
      u("pipeOnDrain", b.awaitDrain), b.awaitDrain && b.awaitDrain--, b.awaitDrain === 0 && i(w, "data") && (b.flowing = !0, N(w));
    };
  }
  _.prototype.unpipe = function(w) {
    var b = this._readableState, M = { hasUnpiped: !1 };
    if (b.pipesCount === 0) return this;
    if (b.pipesCount === 1)
      return w && w !== b.pipes ? this : (w || (w = b.pipes), b.pipes = null, b.pipesCount = 0, b.flowing = !1, w && w.emit("unpipe", this, M), this);
    if (!w) {
      var $ = b.pipes, ce = b.pipesCount;
      b.pipes = null, b.pipesCount = 0, b.flowing = !1;
      for (var Y = 0; Y < ce; Y++)
        $[Y].emit("unpipe", this, { hasUnpiped: !1 });
      return this;
    }
    var se = ve(b.pipes, w);
    return se === -1 ? this : (b.pipes.splice(se, 1), b.pipesCount -= 1, b.pipesCount === 1 && (b.pipes = b.pipes[0]), w.emit("unpipe", this, M), this);
  }, _.prototype.on = function(w, b) {
    var M = y.prototype.on.call(this, w, b);
    if (w === "data")
      this._readableState.flowing !== !1 && this.resume();
    else if (w === "readable") {
      var $ = this._readableState;
      !$.endEmitted && !$.readableListening && ($.readableListening = $.needReadable = !0, $.emittedReadable = !1, $.reading ? $.length && le(this) : o.nextTick(Se, this));
    }
    return M;
  }, _.prototype.addListener = _.prototype.on;
  function Se(w) {
    u("readable nexttick read 0"), w.read(0);
  }
  _.prototype.resume = function() {
    var w = this._readableState;
    return w.flowing || (u("resume"), w.flowing = !0, C(this, w)), this;
  };
  function C(w, b) {
    b.resumeScheduled || (b.resumeScheduled = !0, o.nextTick(A, w, b));
  }
  function A(w, b) {
    b.reading || (u("resume read 0"), w.read(0)), b.resumeScheduled = !1, b.awaitDrain = 0, w.emit("resume"), N(w), b.flowing && !b.reading && w.read(0);
  }
  _.prototype.pause = function() {
    return u("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (u("pause"), this._readableState.flowing = !1, this.emit("pause")), this;
  };
  function N(w) {
    var b = w._readableState;
    for (u("flow", b.flowing); b.flowing && w.read() !== null; )
      ;
  }
  _.prototype.wrap = function(w) {
    var b = this, M = this._readableState, $ = !1;
    w.on("end", function() {
      if (u("wrapped end"), M.decoder && !M.ended) {
        var se = M.decoder.end();
        se && se.length && b.push(se);
      }
      b.push(null);
    }), w.on("data", function(se) {
      if (u("wrapped data"), M.decoder && (se = M.decoder.write(se)), !(M.objectMode && se == null) && !(!M.objectMode && (!se || !se.length))) {
        var Pe = b.push(se);
        Pe || ($ = !0, w.pause());
      }
    });
    for (var ce in w)
      this[ce] === void 0 && typeof w[ce] == "function" && (this[ce] = /* @__PURE__ */ function(se) {
        return function() {
          return w[se].apply(w, arguments);
        };
      }(ce));
    for (var Y = 0; Y < T.length; Y++)
      w.on(T[Y], this.emit.bind(this, T[Y]));
    return this._read = function(se) {
      u("wrapped _read", se), $ && ($ = !1, w.resume());
    }, this;
  }, Object.defineProperty(_.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState.highWaterMark;
    }
  }), _._fromList = te;
  function te(w, b) {
    if (b.length === 0) return null;
    var M;
    return b.objectMode ? M = b.buffer.shift() : !w || w >= b.length ? (b.decoder ? M = b.buffer.join("") : b.buffer.length === 1 ? M = b.buffer.head.data : M = b.buffer.concat(b.length), b.buffer.clear()) : M = ae(w, b.buffer, b.decoder), M;
  }
  function ae(w, b, M) {
    var $;
    return w < b.head.data.length ? ($ = b.head.data.slice(0, w), b.head.data = b.head.data.slice(w)) : w === b.head.data.length ? $ = b.shift() : $ = M ? fe(w, b) : ne(w, b), $;
  }
  function fe(w, b) {
    var M = b.head, $ = 1, ce = M.data;
    for (w -= ce.length; M = M.next; ) {
      var Y = M.data, se = w > Y.length ? Y.length : w;
      if (se === Y.length ? ce += Y : ce += Y.slice(0, w), w -= se, w === 0) {
        se === Y.length ? (++$, M.next ? b.head = M.next : b.head = b.tail = null) : (b.head = M, M.data = Y.slice(se));
        break;
      }
      ++$;
    }
    return b.length -= $, ce;
  }
  function ne(w, b) {
    var M = s.allocUnsafe(w), $ = b.head, ce = 1;
    for ($.data.copy(M), w -= $.data.length; $ = $.next; ) {
      var Y = $.data, se = w > Y.length ? Y.length : w;
      if (Y.copy(M, M.length - w, 0, se), w -= se, w === 0) {
        se === Y.length ? (++ce, $.next ? b.head = $.next : b.head = b.tail = null) : (b.head = $, $.data = Y.slice(se));
        break;
      }
      ++ce;
    }
    return b.length -= ce, M;
  }
  function me(w) {
    var b = w._readableState;
    if (b.length > 0) throw new Error('"endReadable()" called on non-empty stream');
    b.endEmitted || (b.ended = !0, o.nextTick(ye, b, w));
  }
  function ye(w, b) {
    !w.endEmitted && w.length === 0 && (w.endEmitted = !0, b.readable = !1, b.emit("end"));
  }
  function ve(w, b) {
    for (var M = 0, $ = w.length; M < $; M++)
      if (w[M] === b) return M;
    return -1;
  }
  return It;
}
var Bt, Mr;
function nn() {
  if (Mr) return Bt;
  Mr = 1, Bt = i;
  var o = nt(), d = Object.create(ot());
  d.inherits = ft(), d.inherits(i, o);
  function c(n, p) {
    var h = this._transformState;
    h.transforming = !1;
    var S = h.writecb;
    if (!S)
      return this.emit("error", new Error("write callback called multiple times"));
    h.writechunk = null, h.writecb = null, p != null && this.push(p), S(n);
    var m = this._readableState;
    m.reading = !1, (m.needReadable || m.length < m.highWaterMark) && this._read(m.highWaterMark);
  }
  function i(n) {
    if (!(this instanceof i)) return new i(n);
    o.call(this, n), this._transformState = {
      afterTransform: c.bind(this),
      needTransform: !1,
      transforming: !1,
      writecb: null,
      writechunk: null,
      writeencoding: null
    }, this._readableState.needReadable = !0, this._readableState.sync = !1, n && (typeof n.transform == "function" && (this._transform = n.transform), typeof n.flush == "function" && (this._flush = n.flush)), this.on("prefinish", y);
  }
  function y() {
    var n = this;
    typeof this._flush == "function" ? this._flush(function(p, h) {
      s(n, p, h);
    }) : s(this, null, null);
  }
  i.prototype.push = function(n, p) {
    return this._transformState.needTransform = !1, o.prototype.push.call(this, n, p);
  }, i.prototype._transform = function(n, p, h) {
    throw new Error("_transform() is not implemented");
  }, i.prototype._write = function(n, p, h) {
    var S = this._transformState;
    if (S.writecb = h, S.writechunk = n, S.writeencoding = p, !S.transforming) {
      var m = this._readableState;
      (S.needTransform || m.needReadable || m.length < m.highWaterMark) && this._read(m.highWaterMark);
    }
  }, i.prototype._read = function(n) {
    var p = this._transformState;
    p.writechunk !== null && p.writecb && !p.transforming ? (p.transforming = !0, this._transform(p.writechunk, p.writeencoding, p.afterTransform)) : p.needTransform = !0;
  }, i.prototype._destroy = function(n, p) {
    var h = this;
    o.prototype._destroy.call(this, n, function(S) {
      p(S), h.emit("close");
    });
  };
  function s(n, p, h) {
    if (p) return n.emit("error", p);
    if (h != null && n.push(h), n._writableState.length) throw new Error("Calling transform done when ws.length != 0");
    if (n._transformState.transforming) throw new Error("Calling transform done when still transforming");
    return n.push(null);
  }
  return Bt;
}
var Ft, Ur;
function On() {
  if (Ur) return Ft;
  Ur = 1, Ft = c;
  var o = nn(), d = Object.create(ot());
  d.inherits = ft(), d.inherits(c, o);
  function c(i) {
    if (!(this instanceof c)) return new c(i);
    o.call(this, i);
  }
  return c.prototype._transform = function(i, y, s) {
    s(null, i);
  }, Ft;
}
var qr;
function an() {
  return qr || (qr = 1, function(o, d) {
    var c = Vi;
    process.env.READABLE_STREAM === "disable" && c ? (o.exports = c, d = o.exports = c.Readable, d.Readable = c.Readable, d.Writable = c.Writable, d.Duplex = c.Duplex, d.Transform = c.Transform, d.PassThrough = c.PassThrough, d.Stream = c) : (d = o.exports = rn(), d.Stream = c || d, d.Readable = d, d.Writable = tn(), d.Duplex = nt(), d.Transform = nn(), d.PassThrough = On());
  }(dt, dt.exports)), dt.exports;
}
var Zr;
function Je() {
  if (Zr) return Me;
  if (Zr = 1, Me.base64 = !0, Me.array = !0, Me.string = !0, Me.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", Me.nodebuffer = typeof Buffer < "u", Me.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u")
    Me.blob = !1;
  else {
    var o = new ArrayBuffer(0);
    try {
      Me.blob = new Blob([o], {
        type: "application/zip"
      }).size === 0;
    } catch {
      try {
        var d = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder, c = new d();
        c.append(o), Me.blob = c.getBlob("application/zip").size === 0;
      } catch {
        Me.blob = !1;
      }
    }
  }
  try {
    Me.nodestream = !!an().Readable;
  } catch {
    Me.nodestream = !1;
  }
  return Me;
}
var vt = {}, Wr;
function on() {
  if (Wr) return vt;
  Wr = 1;
  var o = Re(), d = Je(), c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  return vt.encode = function(i) {
    for (var y = [], s, n, p, h, S, m, u, t = 0, l = i.length, g = l, T = o.getTypeOf(i) !== "string"; t < i.length; )
      g = l - t, T ? (s = i[t++], n = t < l ? i[t++] : 0, p = t < l ? i[t++] : 0) : (s = i.charCodeAt(t++), n = t < l ? i.charCodeAt(t++) : 0, p = t < l ? i.charCodeAt(t++) : 0), h = s >> 2, S = (s & 3) << 4 | n >> 4, m = g > 1 ? (n & 15) << 2 | p >> 6 : 64, u = g > 2 ? p & 63 : 64, y.push(c.charAt(h) + c.charAt(S) + c.charAt(m) + c.charAt(u));
    return y.join("");
  }, vt.decode = function(i) {
    var y, s, n, p, h, S, m, u = 0, t = 0, l = "data:";
    if (i.substr(0, l.length) === l)
      throw new Error("Invalid base64 input, it looks like a data url.");
    i = i.replace(/[^A-Za-z0-9+/=]/g, "");
    var g = i.length * 3 / 4;
    if (i.charAt(i.length - 1) === c.charAt(64) && g--, i.charAt(i.length - 2) === c.charAt(64) && g--, g % 1 !== 0)
      throw new Error("Invalid base64 input, bad content length.");
    var T;
    for (d.uint8array ? T = new Uint8Array(g | 0) : T = new Array(g | 0); u < i.length; )
      p = c.indexOf(i.charAt(u++)), h = c.indexOf(i.charAt(u++)), S = c.indexOf(i.charAt(u++)), m = c.indexOf(i.charAt(u++)), y = p << 2 | h >> 4, s = (h & 15) << 4 | S >> 2, n = (S & 3) << 6 | m, T[t++] = y, S !== 64 && (T[t++] = s), m !== 64 && (T[t++] = n);
    return T;
  }, vt;
}
var zt, Hr;
function bt() {
  return Hr || (Hr = 1, zt = {
    /**
     * True if this is running in Nodejs, will be undefined in a browser.
     * In a browser, browserify won't include this file and the whole module
     * will be resolved an empty object.
     */
    isNode: typeof Buffer < "u",
    /**
     * Create a new nodejs Buffer from an existing content.
     * @param {Object} data the data to pass to the constructor.
     * @param {String} encoding the encoding to use.
     * @return {Buffer} a new Buffer.
     */
    newBufferFrom: function(o, d) {
      if (Buffer.from && Buffer.from !== Uint8Array.from)
        return Buffer.from(o, d);
      if (typeof o == "number")
        throw new Error('The "data" argument must not be a number');
      return new Buffer(o, d);
    },
    /**
     * Create a new nodejs Buffer with the specified size.
     * @param {Integer} size the size of the buffer.
     * @return {Buffer} a new Buffer.
     */
    allocBuffer: function(o) {
      if (Buffer.alloc)
        return Buffer.alloc(o);
      var d = new Buffer(o);
      return d.fill(0), d;
    },
    /**
     * Find out if an object is a Buffer.
     * @param {Object} b the object to test.
     * @return {Boolean} true if the object is a Buffer, false otherwise.
     */
    isBuffer: function(o) {
      return Buffer.isBuffer(o);
    },
    isStream: function(o) {
      return o && typeof o.on == "function" && typeof o.pause == "function" && typeof o.resume == "function";
    }
  }), zt;
}
var Lt, $r;
function Dn() {
  if ($r) return Lt;
  $r = 1;
  var o = ze.MutationObserver || ze.WebKitMutationObserver, d;
  if (process.browser)
    if (o) {
      var c = 0, i = new o(h), y = ze.document.createTextNode("");
      i.observe(y, {
        characterData: !0
      }), d = function() {
        y.data = c = ++c % 2;
      };
    } else if (!ze.setImmediate && typeof ze.MessageChannel < "u") {
      var s = new ze.MessageChannel();
      s.port1.onmessage = h, d = function() {
        s.port2.postMessage(0);
      };
    } else "document" in ze && "onreadystatechange" in ze.document.createElement("script") ? d = function() {
      var m = ze.document.createElement("script");
      m.onreadystatechange = function() {
        h(), m.onreadystatechange = null, m.parentNode.removeChild(m), m = null;
      }, ze.document.documentElement.appendChild(m);
    } : d = function() {
      setTimeout(h, 0);
    };
  else
    d = function() {
      process.nextTick(h);
    };
  var n, p = [];
  function h() {
    n = !0;
    for (var m, u, t = p.length; t; ) {
      for (u = p, p = [], m = -1; ++m < t; )
        u[m]();
      t = p.length;
    }
    n = !1;
  }
  Lt = S;
  function S(m) {
    p.push(m) === 1 && !n && d();
  }
  return Lt;
}
var Nt, Yr;
function In() {
  if (Yr) return Nt;
  Yr = 1;
  var o = Dn();
  function d() {
  }
  var c = {}, i = ["REJECTED"], y = ["FULFILLED"], s = ["PENDING"];
  if (!process.browser)
    var n = ["UNHANDLED"];
  Nt = p;
  function p(f) {
    if (typeof f != "function")
      throw new TypeError("resolver must be a function");
    this.state = s, this.queue = [], this.outcome = void 0, process.browser || (this.handled = n), f !== d && u(this, f);
  }
  p.prototype.finally = function(f) {
    if (typeof f != "function")
      return this;
    var _ = this.constructor;
    return this.then(k, O);
    function k(F) {
      function H() {
        return F;
      }
      return _.resolve(f()).then(H);
    }
    function O(F) {
      function H() {
        throw F;
      }
      return _.resolve(f()).then(H);
    }
  }, p.prototype.catch = function(f) {
    return this.then(null, f);
  }, p.prototype.then = function(f, _) {
    if (typeof f != "function" && this.state === y || typeof _ != "function" && this.state === i)
      return this;
    var k = new this.constructor(d);
    if (process.browser || this.handled === n && (this.handled = null), this.state !== s) {
      var O = this.state === y ? f : _;
      S(k, O, this.outcome);
    } else
      this.queue.push(new h(k, f, _));
    return k;
  };
  function h(f, _, k) {
    this.promise = f, typeof _ == "function" && (this.onFulfilled = _, this.callFulfilled = this.otherCallFulfilled), typeof k == "function" && (this.onRejected = k, this.callRejected = this.otherCallRejected);
  }
  h.prototype.callFulfilled = function(f) {
    c.resolve(this.promise, f);
  }, h.prototype.otherCallFulfilled = function(f) {
    S(this.promise, this.onFulfilled, f);
  }, h.prototype.callRejected = function(f) {
    c.reject(this.promise, f);
  }, h.prototype.otherCallRejected = function(f) {
    S(this.promise, this.onRejected, f);
  };
  function S(f, _, k) {
    o(function() {
      var O;
      try {
        O = _(k);
      } catch (F) {
        return c.reject(f, F);
      }
      O === f ? c.reject(f, new TypeError("Cannot resolve promise with itself")) : c.resolve(f, O);
    });
  }
  c.resolve = function(f, _) {
    var k = t(m, _);
    if (k.status === "error")
      return c.reject(f, k.value);
    var O = k.value;
    if (O)
      u(f, O);
    else {
      f.state = y, f.outcome = _;
      for (var F = -1, H = f.queue.length; ++F < H; )
        f.queue[F].callFulfilled(_);
    }
    return f;
  }, c.reject = function(f, _) {
    f.state = i, f.outcome = _, process.browser || f.handled === n && o(function() {
      f.handled === n && process.emit("unhandledRejection", _, f);
    });
    for (var k = -1, O = f.queue.length; ++k < O; )
      f.queue[k].callRejected(_);
    return f;
  };
  function m(f) {
    var _ = f && f.then;
    if (f && (typeof f == "object" || typeof f == "function") && typeof _ == "function")
      return function() {
        _.apply(f, arguments);
      };
  }
  function u(f, _) {
    var k = !1;
    function O(X) {
      k || (k = !0, c.reject(f, X));
    }
    function F(X) {
      k || (k = !0, c.resolve(f, X));
    }
    function H() {
      _(F, O);
    }
    var P = t(H);
    P.status === "error" && O(P.value);
  }
  function t(f, _) {
    var k = {};
    try {
      k.value = f(_), k.status = "success";
    } catch (O) {
      k.status = "error", k.value = O;
    }
    return k;
  }
  p.resolve = l;
  function l(f) {
    return f instanceof this ? f : c.resolve(new this(d), f);
  }
  p.reject = g;
  function g(f) {
    var _ = new this(d);
    return c.reject(_, f);
  }
  p.all = T;
  function T(f) {
    var _ = this;
    if (Object.prototype.toString.call(f) !== "[object Array]")
      return this.reject(new TypeError("must be an array"));
    var k = f.length, O = !1;
    if (!k)
      return this.resolve([]);
    for (var F = new Array(k), H = 0, P = -1, X = new this(d); ++P < k; )
      ue(f[P], P);
    return X;
    function ue(oe, le) {
      _.resolve(oe).then(he, function(G) {
        O || (O = !0, c.reject(X, G));
      });
      function he(G) {
        F[le] = G, ++H === k && !O && (O = !0, c.resolve(X, F));
      }
    }
  }
  p.race = E;
  function E(f) {
    var _ = this;
    if (Object.prototype.toString.call(f) !== "[object Array]")
      return this.reject(new TypeError("must be an array"));
    var k = f.length, O = !1;
    if (!k)
      return this.resolve([]);
    for (var F = -1, H = new this(d); ++F < k; )
      P(f[F]);
    return H;
    function P(X) {
      _.resolve(X).then(function(ue) {
        O || (O = !0, c.resolve(H, ue));
      }, function(ue) {
        O || (O = !0, c.reject(H, ue));
      });
    }
  }
  return Nt;
}
var Pt, Gr;
function st() {
  if (Gr) return Pt;
  Gr = 1;
  var o = null;
  return typeof Promise < "u" ? o = Promise : o = In(), Pt = {
    Promise: o
  }, Pt;
}
var jt = {}, Kr;
function Bn() {
  return Kr || (Kr = 1, function(o, d) {
    if (o.setImmediate)
      return;
    var c = 1, i = {}, y = !1, s = o.document, n;
    function p(_) {
      typeof _ != "function" && (_ = new Function("" + _));
      for (var k = new Array(arguments.length - 1), O = 0; O < k.length; O++)
        k[O] = arguments[O + 1];
      var F = { callback: _, args: k };
      return i[c] = F, n(c), c++;
    }
    function h(_) {
      delete i[_];
    }
    function S(_) {
      var k = _.callback, O = _.args;
      switch (O.length) {
        case 0:
          k();
          break;
        case 1:
          k(O[0]);
          break;
        case 2:
          k(O[0], O[1]);
          break;
        case 3:
          k(O[0], O[1], O[2]);
          break;
        default:
          k.apply(d, O);
          break;
      }
    }
    function m(_) {
      if (y)
        setTimeout(m, 0, _);
      else {
        var k = i[_];
        if (k) {
          y = !0;
          try {
            S(k);
          } finally {
            h(_), y = !1;
          }
        }
      }
    }
    function u() {
      n = function(_) {
        process.nextTick(function() {
          m(_);
        });
      };
    }
    function t() {
      if (o.postMessage && !o.importScripts) {
        var _ = !0, k = o.onmessage;
        return o.onmessage = function() {
          _ = !1;
        }, o.postMessage("", "*"), o.onmessage = k, _;
      }
    }
    function l() {
      var _ = "setImmediate$" + Math.random() + "$", k = function(O) {
        O.source === o && typeof O.data == "string" && O.data.indexOf(_) === 0 && m(+O.data.slice(_.length));
      };
      o.addEventListener ? o.addEventListener("message", k, !1) : o.attachEvent("onmessage", k), n = function(O) {
        o.postMessage(_ + O, "*");
      };
    }
    function g() {
      var _ = new MessageChannel();
      _.port1.onmessage = function(k) {
        var O = k.data;
        m(O);
      }, n = function(k) {
        _.port2.postMessage(k);
      };
    }
    function T() {
      var _ = s.documentElement;
      n = function(k) {
        var O = s.createElement("script");
        O.onreadystatechange = function() {
          m(k), O.onreadystatechange = null, _.removeChild(O), O = null;
        }, _.appendChild(O);
      };
    }
    function E() {
      n = function(_) {
        setTimeout(m, 0, _);
      };
    }
    var f = Object.getPrototypeOf && Object.getPrototypeOf(o);
    f = f && f.setTimeout ? f : o, {}.toString.call(o.process) === "[object process]" ? u() : t() ? l() : o.MessageChannel ? g() : s && "onreadystatechange" in s.createElement("script") ? T() : E(), f.setImmediate = p, f.clearImmediate = h;
  }(typeof self > "u" ? typeof ze > "u" ? jt : ze : self)), jt;
}
var Xr;
function Re() {
  return Xr || (Xr = 1, function(o) {
    var d = Je(), c = on(), i = bt(), y = st();
    Bn();
    function s(t) {
      var l = null;
      return d.uint8array ? l = new Uint8Array(t.length) : l = new Array(t.length), p(t, l);
    }
    o.newBlob = function(t, l) {
      o.checkSupport("blob");
      try {
        return new Blob([t], {
          type: l
        });
      } catch {
        try {
          var g = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder, T = new g();
          return T.append(t), T.getBlob(l);
        } catch {
          throw new Error("Bug : can't construct the Blob.");
        }
      }
    };
    function n(t) {
      return t;
    }
    function p(t, l) {
      for (var g = 0; g < t.length; ++g)
        l[g] = t.charCodeAt(g) & 255;
      return l;
    }
    var h = {
      /**
       * Transform an array of int into a string, chunk by chunk.
       * See the performances notes on arrayLikeToString.
       * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
       * @param {String} type the type of the array.
       * @param {Integer} chunk the chunk size.
       * @return {String} the resulting string.
       * @throws Error if the chunk is too big for the stack.
       */
      stringifyByChunk: function(t, l, g) {
        var T = [], E = 0, f = t.length;
        if (f <= g)
          return String.fromCharCode.apply(null, t);
        for (; E < f; )
          l === "array" || l === "nodebuffer" ? T.push(String.fromCharCode.apply(null, t.slice(E, Math.min(E + g, f)))) : T.push(String.fromCharCode.apply(null, t.subarray(E, Math.min(E + g, f)))), E += g;
        return T.join("");
      },
      /**
       * Call String.fromCharCode on every item in the array.
       * This is the naive implementation, which generate A LOT of intermediate string.
       * This should be used when everything else fail.
       * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
       * @return {String} the result.
       */
      stringifyByChar: function(t) {
        for (var l = "", g = 0; g < t.length; g++)
          l += String.fromCharCode(t[g]);
        return l;
      },
      applyCanBeUsed: {
        /**
         * true if the browser accepts to use String.fromCharCode on Uint8Array
         */
        uint8array: function() {
          try {
            return d.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
          } catch {
            return !1;
          }
        }(),
        /**
         * true if the browser accepts to use String.fromCharCode on nodejs Buffer.
         */
        nodebuffer: function() {
          try {
            return d.nodebuffer && String.fromCharCode.apply(null, i.allocBuffer(1)).length === 1;
          } catch {
            return !1;
          }
        }()
      }
    };
    function S(t) {
      var l = 65536, g = o.getTypeOf(t), T = !0;
      if (g === "uint8array" ? T = h.applyCanBeUsed.uint8array : g === "nodebuffer" && (T = h.applyCanBeUsed.nodebuffer), T)
        for (; l > 1; )
          try {
            return h.stringifyByChunk(t, g, l);
          } catch {
            l = Math.floor(l / 2);
          }
      return h.stringifyByChar(t);
    }
    o.applyFromCharCode = S;
    function m(t, l) {
      for (var g = 0; g < t.length; g++)
        l[g] = t[g];
      return l;
    }
    var u = {};
    u.string = {
      string: n,
      array: function(t) {
        return p(t, new Array(t.length));
      },
      arraybuffer: function(t) {
        return u.string.uint8array(t).buffer;
      },
      uint8array: function(t) {
        return p(t, new Uint8Array(t.length));
      },
      nodebuffer: function(t) {
        return p(t, i.allocBuffer(t.length));
      }
    }, u.array = {
      string: S,
      array: n,
      arraybuffer: function(t) {
        return new Uint8Array(t).buffer;
      },
      uint8array: function(t) {
        return new Uint8Array(t);
      },
      nodebuffer: function(t) {
        return i.newBufferFrom(t);
      }
    }, u.arraybuffer = {
      string: function(t) {
        return S(new Uint8Array(t));
      },
      array: function(t) {
        return m(new Uint8Array(t), new Array(t.byteLength));
      },
      arraybuffer: n,
      uint8array: function(t) {
        return new Uint8Array(t);
      },
      nodebuffer: function(t) {
        return i.newBufferFrom(new Uint8Array(t));
      }
    }, u.uint8array = {
      string: S,
      array: function(t) {
        return m(t, new Array(t.length));
      },
      arraybuffer: function(t) {
        return t.buffer;
      },
      uint8array: n,
      nodebuffer: function(t) {
        return i.newBufferFrom(t);
      }
    }, u.nodebuffer = {
      string: S,
      array: function(t) {
        return m(t, new Array(t.length));
      },
      arraybuffer: function(t) {
        return u.nodebuffer.uint8array(t).buffer;
      },
      uint8array: function(t) {
        return m(t, new Uint8Array(t.length));
      },
      nodebuffer: n
    }, o.transformTo = function(t, l) {
      if (l || (l = ""), !t)
        return l;
      o.checkSupport(t);
      var g = o.getTypeOf(l), T = u[g][t](l);
      return T;
    }, o.resolve = function(t) {
      for (var l = t.split("/"), g = [], T = 0; T < l.length; T++) {
        var E = l[T];
        E === "." || E === "" && T !== 0 && T !== l.length - 1 || (E === ".." ? g.pop() : g.push(E));
      }
      return g.join("/");
    }, o.getTypeOf = function(t) {
      if (typeof t == "string")
        return "string";
      if (Object.prototype.toString.call(t) === "[object Array]")
        return "array";
      if (d.nodebuffer && i.isBuffer(t))
        return "nodebuffer";
      if (d.uint8array && t instanceof Uint8Array)
        return "uint8array";
      if (d.arraybuffer && t instanceof ArrayBuffer)
        return "arraybuffer";
    }, o.checkSupport = function(t) {
      var l = d[t.toLowerCase()];
      if (!l)
        throw new Error(t + " is not supported by this platform");
    }, o.MAX_VALUE_16BITS = 65535, o.MAX_VALUE_32BITS = -1, o.pretty = function(t) {
      var l = "", g, T;
      for (T = 0; T < (t || "").length; T++)
        g = t.charCodeAt(T), l += "\\x" + (g < 16 ? "0" : "") + g.toString(16).toUpperCase();
      return l;
    }, o.delay = function(t, l, g) {
      setImmediate(function() {
        t.apply(g || null, l || []);
      });
    }, o.inherits = function(t, l) {
      var g = function() {
      };
      g.prototype = l.prototype, t.prototype = new g();
    }, o.extend = function() {
      var t = {}, l, g;
      for (l = 0; l < arguments.length; l++)
        for (g in arguments[l])
          Object.prototype.hasOwnProperty.call(arguments[l], g) && typeof t[g] > "u" && (t[g] = arguments[l][g]);
      return t;
    }, o.prepareContent = function(t, l, g, T, E) {
      var f = y.Promise.resolve(l).then(function(_) {
        var k = d.blob && (_ instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(_)) !== -1);
        return k && typeof FileReader < "u" ? new y.Promise(function(O, F) {
          var H = new FileReader();
          H.onload = function(P) {
            O(P.target.result);
          }, H.onerror = function(P) {
            F(P.target.error);
          }, H.readAsArrayBuffer(_);
        }) : _;
      });
      return f.then(function(_) {
        var k = o.getTypeOf(_);
        return k ? (k === "arraybuffer" ? _ = o.transformTo("uint8array", _) : k === "string" && (E ? _ = c.decode(_) : g && T !== !0 && (_ = s(_))), _) : y.Promise.reject(
          new Error("Can't read the data of '" + t + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?")
        );
      });
    };
  }(St)), St;
}
var Mt, Vr;
function He() {
  if (Vr) return Mt;
  Vr = 1;
  function o(d) {
    this.name = d || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
      data: [],
      end: [],
      error: []
    }, this.previous = null;
  }
  return o.prototype = {
    /**
     * Push a chunk to the next workers.
     * @param {Object} chunk the chunk to push
     */
    push: function(d) {
      this.emit("data", d);
    },
    /**
     * End the stream.
     * @return {Boolean} true if this call ended the worker, false otherwise.
     */
    end: function() {
      if (this.isFinished)
        return !1;
      this.flush();
      try {
        this.emit("end"), this.cleanUp(), this.isFinished = !0;
      } catch (d) {
        this.emit("error", d);
      }
      return !0;
    },
    /**
     * End the stream with an error.
     * @param {Error} e the error which caused the premature end.
     * @return {Boolean} true if this call ended the worker with an error, false otherwise.
     */
    error: function(d) {
      return this.isFinished ? !1 : (this.isPaused ? this.generatedError = d : (this.isFinished = !0, this.emit("error", d), this.previous && this.previous.error(d), this.cleanUp()), !0);
    },
    /**
     * Add a callback on an event.
     * @param {String} name the name of the event (data, end, error)
     * @param {Function} listener the function to call when the event is triggered
     * @return {GenericWorker} the current object for chainability
     */
    on: function(d, c) {
      return this._listeners[d].push(c), this;
    },
    /**
     * Clean any references when a worker is ending.
     */
    cleanUp: function() {
      this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
    },
    /**
     * Trigger an event. This will call registered callback with the provided arg.
     * @param {String} name the name of the event (data, end, error)
     * @param {Object} arg the argument to call the callback with.
     */
    emit: function(d, c) {
      if (this._listeners[d])
        for (var i = 0; i < this._listeners[d].length; i++)
          this._listeners[d][i].call(this, c);
    },
    /**
     * Chain a worker with an other.
     * @param {Worker} next the worker receiving events from the current one.
     * @return {worker} the next worker for chainability
     */
    pipe: function(d) {
      return d.registerPrevious(this);
    },
    /**
     * Same as `pipe` in the other direction.
     * Using an API with `pipe(next)` is very easy.
     * Implementing the API with the point of view of the next one registering
     * a source is easier, see the ZipFileWorker.
     * @param {Worker} previous the previous worker, sending events to this one
     * @return {Worker} the current worker for chainability
     */
    registerPrevious: function(d) {
      if (this.isLocked)
        throw new Error("The stream '" + this + "' has already been used.");
      this.streamInfo = d.streamInfo, this.mergeStreamInfo(), this.previous = d;
      var c = this;
      return d.on("data", function(i) {
        c.processChunk(i);
      }), d.on("end", function() {
        c.end();
      }), d.on("error", function(i) {
        c.error(i);
      }), this;
    },
    /**
     * Pause the stream so it doesn't send events anymore.
     * @return {Boolean} true if this call paused the worker, false otherwise.
     */
    pause: function() {
      return this.isPaused || this.isFinished ? !1 : (this.isPaused = !0, this.previous && this.previous.pause(), !0);
    },
    /**
     * Resume a paused stream.
     * @return {Boolean} true if this call resumed the worker, false otherwise.
     */
    resume: function() {
      if (!this.isPaused || this.isFinished)
        return !1;
      this.isPaused = !1;
      var d = !1;
      return this.generatedError && (this.error(this.generatedError), d = !0), this.previous && this.previous.resume(), !d;
    },
    /**
     * Flush any remaining bytes as the stream is ending.
     */
    flush: function() {
    },
    /**
     * Process a chunk. This is usually the method overridden.
     * @param {Object} chunk the chunk to process.
     */
    processChunk: function(d) {
      this.push(d);
    },
    /**
     * Add a key/value to be added in the workers chain streamInfo once activated.
     * @param {String} key the key to use
     * @param {Object} value the associated value
     * @return {Worker} the current worker for chainability
     */
    withStreamInfo: function(d, c) {
      return this.extraStreamInfo[d] = c, this.mergeStreamInfo(), this;
    },
    /**
     * Merge this worker's streamInfo into the chain's streamInfo.
     */
    mergeStreamInfo: function() {
      for (var d in this.extraStreamInfo)
        Object.prototype.hasOwnProperty.call(this.extraStreamInfo, d) && (this.streamInfo[d] = this.extraStreamInfo[d]);
    },
    /**
     * Lock the stream to prevent further updates on the workers chain.
     * After calling this method, all calls to pipe will fail.
     */
    lock: function() {
      if (this.isLocked)
        throw new Error("The stream '" + this + "' has already been used.");
      this.isLocked = !0, this.previous && this.previous.lock();
    },
    /**
     *
     * Pretty print the workers chain.
     */
    toString: function() {
      var d = "Worker " + this.name;
      return this.previous ? this.previous + " -> " + d : d;
    }
  }, Mt = o, Mt;
}
var Jr;
function lt() {
  return Jr || (Jr = 1, function(o) {
    for (var d = Re(), c = Je(), i = bt(), y = He(), s = new Array(256), n = 0; n < 256; n++)
      s[n] = n >= 252 ? 6 : n >= 248 ? 5 : n >= 240 ? 4 : n >= 224 ? 3 : n >= 192 ? 2 : 1;
    s[254] = s[254] = 1;
    var p = function(t) {
      var l, g, T, E, f, _ = t.length, k = 0;
      for (E = 0; E < _; E++)
        g = t.charCodeAt(E), (g & 64512) === 55296 && E + 1 < _ && (T = t.charCodeAt(E + 1), (T & 64512) === 56320 && (g = 65536 + (g - 55296 << 10) + (T - 56320), E++)), k += g < 128 ? 1 : g < 2048 ? 2 : g < 65536 ? 3 : 4;
      for (c.uint8array ? l = new Uint8Array(k) : l = new Array(k), f = 0, E = 0; f < k; E++)
        g = t.charCodeAt(E), (g & 64512) === 55296 && E + 1 < _ && (T = t.charCodeAt(E + 1), (T & 64512) === 56320 && (g = 65536 + (g - 55296 << 10) + (T - 56320), E++)), g < 128 ? l[f++] = g : g < 2048 ? (l[f++] = 192 | g >>> 6, l[f++] = 128 | g & 63) : g < 65536 ? (l[f++] = 224 | g >>> 12, l[f++] = 128 | g >>> 6 & 63, l[f++] = 128 | g & 63) : (l[f++] = 240 | g >>> 18, l[f++] = 128 | g >>> 12 & 63, l[f++] = 128 | g >>> 6 & 63, l[f++] = 128 | g & 63);
      return l;
    }, h = function(t, l) {
      var g;
      for (l = l || t.length, l > t.length && (l = t.length), g = l - 1; g >= 0 && (t[g] & 192) === 128; )
        g--;
      return g < 0 || g === 0 ? l : g + s[t[g]] > l ? g : l;
    }, S = function(t) {
      var l, g, T, E, f = t.length, _ = new Array(f * 2);
      for (g = 0, l = 0; l < f; ) {
        if (T = t[l++], T < 128) {
          _[g++] = T;
          continue;
        }
        if (E = s[T], E > 4) {
          _[g++] = 65533, l += E - 1;
          continue;
        }
        for (T &= E === 2 ? 31 : E === 3 ? 15 : 7; E > 1 && l < f; )
          T = T << 6 | t[l++] & 63, E--;
        if (E > 1) {
          _[g++] = 65533;
          continue;
        }
        T < 65536 ? _[g++] = T : (T -= 65536, _[g++] = 55296 | T >> 10 & 1023, _[g++] = 56320 | T & 1023);
      }
      return _.length !== g && (_.subarray ? _ = _.subarray(0, g) : _.length = g), d.applyFromCharCode(_);
    };
    o.utf8encode = function(l) {
      return c.nodebuffer ? i.newBufferFrom(l, "utf-8") : p(l);
    }, o.utf8decode = function(l) {
      return c.nodebuffer ? d.transformTo("nodebuffer", l).toString("utf-8") : (l = d.transformTo(c.uint8array ? "uint8array" : "array", l), S(l));
    };
    function m() {
      y.call(this, "utf-8 decode"), this.leftOver = null;
    }
    d.inherits(m, y), m.prototype.processChunk = function(t) {
      var l = d.transformTo(c.uint8array ? "uint8array" : "array", t.data);
      if (this.leftOver && this.leftOver.length) {
        if (c.uint8array) {
          var g = l;
          l = new Uint8Array(g.length + this.leftOver.length), l.set(this.leftOver, 0), l.set(g, this.leftOver.length);
        } else
          l = this.leftOver.concat(l);
        this.leftOver = null;
      }
      var T = h(l), E = l;
      T !== l.length && (c.uint8array ? (E = l.subarray(0, T), this.leftOver = l.subarray(T, l.length)) : (E = l.slice(0, T), this.leftOver = l.slice(T, l.length))), this.push({
        data: o.utf8decode(E),
        meta: t.meta
      });
    }, m.prototype.flush = function() {
      this.leftOver && this.leftOver.length && (this.push({
        data: o.utf8decode(this.leftOver),
        meta: {}
      }), this.leftOver = null);
    }, o.Utf8DecodeWorker = m;
    function u() {
      y.call(this, "utf-8 encode");
    }
    d.inherits(u, y), u.prototype.processChunk = function(t) {
      this.push({
        data: o.utf8encode(t.data),
        meta: t.meta
      });
    }, o.Utf8EncodeWorker = u;
  }(kt)), kt;
}
var Ut, Qr;
function Fn() {
  if (Qr) return Ut;
  Qr = 1;
  var o = He(), d = Re();
  function c(i) {
    o.call(this, "ConvertWorker to " + i), this.destType = i;
  }
  return d.inherits(c, o), c.prototype.processChunk = function(i) {
    this.push({
      data: d.transformTo(this.destType, i.data),
      meta: i.meta
    });
  }, Ut = c, Ut;
}
var qt, ei;
function zn() {
  if (ei) return qt;
  ei = 1;
  var o = an().Readable, d = Re();
  d.inherits(c, o);
  function c(i, y, s) {
    o.call(this, y), this._helper = i;
    var n = this;
    i.on("data", function(p, h) {
      n.push(p) || n._helper.pause(), s && s(h);
    }).on("error", function(p) {
      n.emit("error", p);
    }).on("end", function() {
      n.push(null);
    });
  }
  return c.prototype._read = function() {
    this._helper.resume();
  }, qt = c, qt;
}
var Zt, ti;
function fn() {
  if (ti) return Zt;
  ti = 1;
  var o = Re(), d = Fn(), c = He(), i = on(), y = Je(), s = st(), n = null;
  if (y.nodestream)
    try {
      n = zn();
    } catch {
    }
  function p(u, t, l) {
    switch (u) {
      case "blob":
        return o.newBlob(o.transformTo("arraybuffer", t), l);
      case "base64":
        return i.encode(t);
      default:
        return o.transformTo(u, t);
    }
  }
  function h(u, t) {
    var l, g = 0, T = null, E = 0;
    for (l = 0; l < t.length; l++)
      E += t[l].length;
    switch (u) {
      case "string":
        return t.join("");
      case "array":
        return Array.prototype.concat.apply([], t);
      case "uint8array":
        for (T = new Uint8Array(E), l = 0; l < t.length; l++)
          T.set(t[l], g), g += t[l].length;
        return T;
      case "nodebuffer":
        return Buffer.concat(t);
      default:
        throw new Error("concat : unsupported type '" + u + "'");
    }
  }
  function S(u, t) {
    return new s.Promise(function(l, g) {
      var T = [], E = u._internalType, f = u._outputType, _ = u._mimeType;
      u.on("data", function(k, O) {
        T.push(k), t && t(O);
      }).on("error", function(k) {
        T = [], g(k);
      }).on("end", function() {
        try {
          var k = p(f, h(E, T), _);
          l(k);
        } catch (O) {
          g(O);
        }
        T = [];
      }).resume();
    });
  }
  function m(u, t, l) {
    var g = t;
    switch (t) {
      case "blob":
      case "arraybuffer":
        g = "uint8array";
        break;
      case "base64":
        g = "string";
        break;
    }
    try {
      this._internalType = g, this._outputType = t, this._mimeType = l, o.checkSupport(g), this._worker = u.pipe(new d(g)), u.lock();
    } catch (T) {
      this._worker = new c("error"), this._worker.error(T);
    }
  }
  return m.prototype = {
    /**
     * Listen a StreamHelper, accumulate its content and concatenate it into a
     * complete block.
     * @param {Function} updateCb the update callback.
     * @return Promise the promise for the accumulation.
     */
    accumulate: function(u) {
      return S(this, u);
    },
    /**
     * Add a listener on an event triggered on a stream.
     * @param {String} evt the name of the event
     * @param {Function} fn the listener
     * @return {StreamHelper} the current helper.
     */
    on: function(u, t) {
      var l = this;
      return u === "data" ? this._worker.on(u, function(g) {
        t.call(l, g.data, g.meta);
      }) : this._worker.on(u, function() {
        o.delay(t, arguments, l);
      }), this;
    },
    /**
     * Resume the flow of chunks.
     * @return {StreamHelper} the current helper.
     */
    resume: function() {
      return o.delay(this._worker.resume, [], this._worker), this;
    },
    /**
     * Pause the flow of chunks.
     * @return {StreamHelper} the current helper.
     */
    pause: function() {
      return this._worker.pause(), this;
    },
    /**
     * Return a nodejs stream for this helper.
     * @param {Function} updateCb the update callback.
     * @return {NodejsStreamOutputAdapter} the nodejs stream.
     */
    toNodejsStream: function(u) {
      if (o.checkSupport("nodestream"), this._outputType !== "nodebuffer")
        throw new Error(this._outputType + " is not supported by this method");
      return new n(this, {
        objectMode: this._outputType !== "nodebuffer"
      }, u);
    }
  }, Zt = m, Zt;
}
var Ze = {}, ri;
function sn() {
  return ri || (ri = 1, Ze.base64 = !1, Ze.binary = !1, Ze.dir = !1, Ze.createFolders = !0, Ze.date = null, Ze.compression = null, Ze.compressionOptions = null, Ze.comment = null, Ze.unixPermissions = null, Ze.dosPermissions = null), Ze;
}
var Wt, ii;
function ln() {
  if (ii) return Wt;
  ii = 1;
  var o = Re(), d = He(), c = 16 * 1024;
  function i(y) {
    d.call(this, "DataWorker");
    var s = this;
    this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, y.then(function(n) {
      s.dataIsReady = !0, s.data = n, s.max = n && n.length || 0, s.type = o.getTypeOf(n), s.isPaused || s._tickAndRepeat();
    }, function(n) {
      s.error(n);
    });
  }
  return o.inherits(i, d), i.prototype.cleanUp = function() {
    d.prototype.cleanUp.call(this), this.data = null;
  }, i.prototype.resume = function() {
    return d.prototype.resume.call(this) ? (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, o.delay(this._tickAndRepeat, [], this)), !0) : !1;
  }, i.prototype._tickAndRepeat = function() {
    this._tickScheduled = !1, !(this.isPaused || this.isFinished) && (this._tick(), this.isFinished || (o.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
  }, i.prototype._tick = function() {
    if (this.isPaused || this.isFinished)
      return !1;
    var y = c, s = null, n = Math.min(this.max, this.index + y);
    if (this.index >= this.max)
      return this.end();
    switch (this.type) {
      case "string":
        s = this.data.substring(this.index, n);
        break;
      case "uint8array":
        s = this.data.subarray(this.index, n);
        break;
      case "array":
      case "nodebuffer":
        s = this.data.slice(this.index, n);
        break;
    }
    return this.index = n, this.push({
      data: s,
      meta: {
        percent: this.max ? this.index / this.max * 100 : 0
      }
    });
  }, Wt = i, Wt;
}
var Ht, ni;
function Er() {
  if (ni) return Ht;
  ni = 1;
  var o = Re();
  function d() {
    for (var s, n = [], p = 0; p < 256; p++) {
      s = p;
      for (var h = 0; h < 8; h++)
        s = s & 1 ? 3988292384 ^ s >>> 1 : s >>> 1;
      n[p] = s;
    }
    return n;
  }
  var c = d();
  function i(s, n, p, h) {
    var S = c, m = h + p;
    s = s ^ -1;
    for (var u = h; u < m; u++)
      s = s >>> 8 ^ S[(s ^ n[u]) & 255];
    return s ^ -1;
  }
  function y(s, n, p, h) {
    var S = c, m = h + p;
    s = s ^ -1;
    for (var u = h; u < m; u++)
      s = s >>> 8 ^ S[(s ^ n.charCodeAt(u)) & 255];
    return s ^ -1;
  }
  return Ht = function(n, p) {
    if (typeof n > "u" || !n.length)
      return 0;
    var h = o.getTypeOf(n) !== "string";
    return h ? i(p | 0, n, n.length, 0) : y(p | 0, n, n.length, 0);
  }, Ht;
}
var $t, ai;
function un() {
  if (ai) return $t;
  ai = 1;
  var o = He(), d = Er(), c = Re();
  function i() {
    o.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
  }
  return c.inherits(i, o), i.prototype.processChunk = function(y) {
    this.streamInfo.crc32 = d(y.data, this.streamInfo.crc32 || 0), this.push(y);
  }, $t = i, $t;
}
var Yt, oi;
function Ln() {
  if (oi) return Yt;
  oi = 1;
  var o = Re(), d = He();
  function c(i) {
    d.call(this, "DataLengthProbe for " + i), this.propName = i, this.withStreamInfo(i, 0);
  }
  return o.inherits(c, d), c.prototype.processChunk = function(i) {
    if (i) {
      var y = this.streamInfo[this.propName] || 0;
      this.streamInfo[this.propName] = y + i.data.length;
    }
    d.prototype.processChunk.call(this, i);
  }, Yt = c, Yt;
}
var Gt, fi;
function Cr() {
  if (fi) return Gt;
  fi = 1;
  var o = st(), d = ln(), c = un(), i = Ln();
  function y(s, n, p, h, S) {
    this.compressedSize = s, this.uncompressedSize = n, this.crc32 = p, this.compression = h, this.compressedContent = S;
  }
  return y.prototype = {
    /**
     * Create a worker to get the uncompressed content.
     * @return {GenericWorker} the worker.
     */
    getContentWorker: function() {
      var s = new d(o.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new i("data_length")), n = this;
      return s.on("end", function() {
        if (this.streamInfo.data_length !== n.uncompressedSize)
          throw new Error("Bug : uncompressed data size mismatch");
      }), s;
    },
    /**
     * Create a worker to get the compressed content.
     * @return {GenericWorker} the worker.
     */
    getCompressedWorker: function() {
      return new d(o.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
    }
  }, y.createWorkerFrom = function(s, n, p) {
    return s.pipe(new c()).pipe(new i("uncompressedSize")).pipe(n.compressWorker(p)).pipe(new i("compressedSize")).withStreamInfo("compression", n);
  }, Gt = y, Gt;
}
var Kt, si;
function Nn() {
  if (si) return Kt;
  si = 1;
  var o = fn(), d = ln(), c = lt(), i = Cr(), y = He(), s = function(S, m, u) {
    this.name = S, this.dir = u.dir, this.date = u.date, this.comment = u.comment, this.unixPermissions = u.unixPermissions, this.dosPermissions = u.dosPermissions, this._data = m, this._dataBinary = u.binary, this.options = {
      compression: u.compression,
      compressionOptions: u.compressionOptions
    };
  };
  s.prototype = {
    /**
     * Create an internal stream for the content of this object.
     * @param {String} type the type of each chunk.
     * @return StreamHelper the stream.
     */
    internalStream: function(S) {
      var m = null, u = "string";
      try {
        if (!S)
          throw new Error("No output type specified.");
        u = S.toLowerCase();
        var t = u === "string" || u === "text";
        (u === "binarystring" || u === "text") && (u = "string"), m = this._decompressWorker();
        var l = !this._dataBinary;
        l && !t && (m = m.pipe(new c.Utf8EncodeWorker())), !l && t && (m = m.pipe(new c.Utf8DecodeWorker()));
      } catch (g) {
        m = new y("error"), m.error(g);
      }
      return new o(m, u, "");
    },
    /**
     * Prepare the content in the asked type.
     * @param {String} type the type of the result.
     * @param {Function} onUpdate a function to call on each internal update.
     * @return Promise the promise of the result.
     */
    async: function(S, m) {
      return this.internalStream(S).accumulate(m);
    },
    /**
     * Prepare the content as a nodejs stream.
     * @param {String} type the type of each chunk.
     * @param {Function} onUpdate a function to call on each internal update.
     * @return Stream the stream.
     */
    nodeStream: function(S, m) {
      return this.internalStream(S || "nodebuffer").toNodejsStream(m);
    },
    /**
     * Return a worker for the compressed content.
     * @private
     * @param {Object} compression the compression object to use.
     * @param {Object} compressionOptions the options to use when compressing.
     * @return Worker the worker.
     */
    _compressWorker: function(S, m) {
      if (this._data instanceof i && this._data.compression.magic === S.magic)
        return this._data.getCompressedWorker();
      var u = this._decompressWorker();
      return this._dataBinary || (u = u.pipe(new c.Utf8EncodeWorker())), i.createWorkerFrom(u, S, m);
    },
    /**
     * Return a worker for the decompressed content.
     * @private
     * @return Worker the worker.
     */
    _decompressWorker: function() {
      return this._data instanceof i ? this._data.getContentWorker() : this._data instanceof y ? this._data : new d(this._data);
    }
  };
  for (var n = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], p = function() {
    throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
  }, h = 0; h < n.length; h++)
    s.prototype[n[h]] = p;
  return Kt = s, Kt;
}
var Xt = {}, pt = {}, at = {}, Vt = {}, li;
function Qe() {
  return li || (li = 1, function(o) {
    var d = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
    function c(s, n) {
      return Object.prototype.hasOwnProperty.call(s, n);
    }
    o.assign = function(s) {
      for (var n = Array.prototype.slice.call(arguments, 1); n.length; ) {
        var p = n.shift();
        if (p) {
          if (typeof p != "object")
            throw new TypeError(p + "must be non-object");
          for (var h in p)
            c(p, h) && (s[h] = p[h]);
        }
      }
      return s;
    }, o.shrinkBuf = function(s, n) {
      return s.length === n ? s : s.subarray ? s.subarray(0, n) : (s.length = n, s);
    };
    var i = {
      arraySet: function(s, n, p, h, S) {
        if (n.subarray && s.subarray) {
          s.set(n.subarray(p, p + h), S);
          return;
        }
        for (var m = 0; m < h; m++)
          s[S + m] = n[p + m];
      },
      // Join array of chunks to single array.
      flattenChunks: function(s) {
        var n, p, h, S, m, u;
        for (h = 0, n = 0, p = s.length; n < p; n++)
          h += s[n].length;
        for (u = new Uint8Array(h), S = 0, n = 0, p = s.length; n < p; n++)
          m = s[n], u.set(m, S), S += m.length;
        return u;
      }
    }, y = {
      arraySet: function(s, n, p, h, S) {
        for (var m = 0; m < h; m++)
          s[S + m] = n[p + m];
      },
      // Join array of chunks to single array.
      flattenChunks: function(s) {
        return [].concat.apply([], s);
      }
    };
    o.setTyped = function(s) {
      s ? (o.Buf8 = Uint8Array, o.Buf16 = Uint16Array, o.Buf32 = Int32Array, o.assign(o, i)) : (o.Buf8 = Array, o.Buf16 = Array, o.Buf32 = Array, o.assign(o, y));
    }, o.setTyped(d);
  }(Vt)), Vt;
}
var rt = {}, $e = {}, et = {}, ui;
function Pn() {
  if (ui) return et;
  ui = 1;
  var o = Qe(), d = 4, c = 0, i = 1, y = 2;
  function s(v) {
    for (var U = v.length; --U >= 0; )
      v[U] = 0;
  }
  var n = 0, p = 1, h = 2, S = 3, m = 258, u = 29, t = 256, l = t + 1 + u, g = 30, T = 19, E = 2 * l + 1, f = 15, _ = 16, k = 7, O = 256, F = 16, H = 17, P = 18, X = (
    /* extra bits for each length code */
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
  ), ue = (
    /* extra bits for each distance code */
    [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
  ), oe = (
    /* extra bits for each bit length code */
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
  ), le = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], he = 512, G = new Array((l + 2) * 2);
  s(G);
  var ee = new Array(g * 2);
  s(ee);
  var be = new Array(he);
  s(be);
  var Se = new Array(m - S + 1);
  s(Se);
  var C = new Array(u);
  s(C);
  var A = new Array(g);
  s(A);
  function N(v, U, Z, Q, R) {
    this.static_tree = v, this.extra_bits = U, this.extra_base = Z, this.elems = Q, this.max_length = R, this.has_stree = v && v.length;
  }
  var te, ae, fe;
  function ne(v, U) {
    this.dyn_tree = v, this.max_code = 0, this.stat_desc = U;
  }
  function me(v) {
    return v < 256 ? be[v] : be[256 + (v >>> 7)];
  }
  function ye(v, U) {
    v.pending_buf[v.pending++] = U & 255, v.pending_buf[v.pending++] = U >>> 8 & 255;
  }
  function ve(v, U, Z) {
    v.bi_valid > _ - Z ? (v.bi_buf |= U << v.bi_valid & 65535, ye(v, v.bi_buf), v.bi_buf = U >> _ - v.bi_valid, v.bi_valid += Z - _) : (v.bi_buf |= U << v.bi_valid & 65535, v.bi_valid += Z);
  }
  function w(v, U, Z) {
    ve(
      v,
      Z[U * 2],
      Z[U * 2 + 1]
      /*.Len*/
    );
  }
  function b(v, U) {
    var Z = 0;
    do
      Z |= v & 1, v >>>= 1, Z <<= 1;
    while (--U > 0);
    return Z >>> 1;
  }
  function M(v) {
    v.bi_valid === 16 ? (ye(v, v.bi_buf), v.bi_buf = 0, v.bi_valid = 0) : v.bi_valid >= 8 && (v.pending_buf[v.pending++] = v.bi_buf & 255, v.bi_buf >>= 8, v.bi_valid -= 8);
  }
  function $(v, U) {
    var Z = U.dyn_tree, Q = U.max_code, R = U.stat_desc.static_tree, L = U.stat_desc.has_stree, r = U.stat_desc.extra_bits, q = U.stat_desc.extra_base, de = U.stat_desc.max_length, e, I, z, a, x, D, ie = 0;
    for (a = 0; a <= f; a++)
      v.bl_count[a] = 0;
    for (Z[v.heap[v.heap_max] * 2 + 1] = 0, e = v.heap_max + 1; e < E; e++)
      I = v.heap[e], a = Z[Z[I * 2 + 1] * 2 + 1] + 1, a > de && (a = de, ie++), Z[I * 2 + 1] = a, !(I > Q) && (v.bl_count[a]++, x = 0, I >= q && (x = r[I - q]), D = Z[I * 2], v.opt_len += D * (a + x), L && (v.static_len += D * (R[I * 2 + 1] + x)));
    if (ie !== 0) {
      do {
        for (a = de - 1; v.bl_count[a] === 0; )
          a--;
        v.bl_count[a]--, v.bl_count[a + 1] += 2, v.bl_count[de]--, ie -= 2;
      } while (ie > 0);
      for (a = de; a !== 0; a--)
        for (I = v.bl_count[a]; I !== 0; )
          z = v.heap[--e], !(z > Q) && (Z[z * 2 + 1] !== a && (v.opt_len += (a - Z[z * 2 + 1]) * Z[z * 2], Z[z * 2 + 1] = a), I--);
    }
  }
  function ce(v, U, Z) {
    var Q = new Array(f + 1), R = 0, L, r;
    for (L = 1; L <= f; L++)
      Q[L] = R = R + Z[L - 1] << 1;
    for (r = 0; r <= U; r++) {
      var q = v[r * 2 + 1];
      q !== 0 && (v[r * 2] = b(Q[q]++, q));
    }
  }
  function Y() {
    var v, U, Z, Q, R, L = new Array(f + 1);
    for (Z = 0, Q = 0; Q < u - 1; Q++)
      for (C[Q] = Z, v = 0; v < 1 << X[Q]; v++)
        Se[Z++] = Q;
    for (Se[Z - 1] = Q, R = 0, Q = 0; Q < 16; Q++)
      for (A[Q] = R, v = 0; v < 1 << ue[Q]; v++)
        be[R++] = Q;
    for (R >>= 7; Q < g; Q++)
      for (A[Q] = R << 7, v = 0; v < 1 << ue[Q] - 7; v++)
        be[256 + R++] = Q;
    for (U = 0; U <= f; U++)
      L[U] = 0;
    for (v = 0; v <= 143; )
      G[v * 2 + 1] = 8, v++, L[8]++;
    for (; v <= 255; )
      G[v * 2 + 1] = 9, v++, L[9]++;
    for (; v <= 279; )
      G[v * 2 + 1] = 7, v++, L[7]++;
    for (; v <= 287; )
      G[v * 2 + 1] = 8, v++, L[8]++;
    for (ce(G, l + 1, L), v = 0; v < g; v++)
      ee[v * 2 + 1] = 5, ee[v * 2] = b(v, 5);
    te = new N(G, X, t + 1, l, f), ae = new N(ee, ue, 0, g, f), fe = new N(new Array(0), oe, 0, T, k);
  }
  function se(v) {
    var U;
    for (U = 0; U < l; U++)
      v.dyn_ltree[U * 2] = 0;
    for (U = 0; U < g; U++)
      v.dyn_dtree[U * 2] = 0;
    for (U = 0; U < T; U++)
      v.bl_tree[U * 2] = 0;
    v.dyn_ltree[O * 2] = 1, v.opt_len = v.static_len = 0, v.last_lit = v.matches = 0;
  }
  function Pe(v) {
    v.bi_valid > 8 ? ye(v, v.bi_buf) : v.bi_valid > 0 && (v.pending_buf[v.pending++] = v.bi_buf), v.bi_buf = 0, v.bi_valid = 0;
  }
  function De(v, U, Z, Q) {
    Pe(v), ye(v, Z), ye(v, ~Z), o.arraySet(v.pending_buf, v.window, U, Z, v.pending), v.pending += Z;
  }
  function Ie(v, U, Z, Q) {
    var R = U * 2, L = Z * 2;
    return v[R] < v[L] || v[R] === v[L] && Q[U] <= Q[Z];
  }
  function xe(v, U, Z) {
    for (var Q = v.heap[Z], R = Z << 1; R <= v.heap_len && (R < v.heap_len && Ie(U, v.heap[R + 1], v.heap[R], v.depth) && R++, !Ie(U, Q, v.heap[R], v.depth)); )
      v.heap[Z] = v.heap[R], Z = R, R <<= 1;
    v.heap[Z] = Q;
  }
  function re(v, U, Z) {
    var Q, R, L = 0, r, q;
    if (v.last_lit !== 0)
      do
        Q = v.pending_buf[v.d_buf + L * 2] << 8 | v.pending_buf[v.d_buf + L * 2 + 1], R = v.pending_buf[v.l_buf + L], L++, Q === 0 ? w(v, R, U) : (r = Se[R], w(v, r + t + 1, U), q = X[r], q !== 0 && (R -= C[r], ve(v, R, q)), Q--, r = me(Q), w(v, r, Z), q = ue[r], q !== 0 && (Q -= A[r], ve(v, Q, q)));
      while (L < v.last_lit);
    w(v, O, U);
  }
  function Ae(v, U) {
    var Z = U.dyn_tree, Q = U.stat_desc.static_tree, R = U.stat_desc.has_stree, L = U.stat_desc.elems, r, q, de = -1, e;
    for (v.heap_len = 0, v.heap_max = E, r = 0; r < L; r++)
      Z[r * 2] !== 0 ? (v.heap[++v.heap_len] = de = r, v.depth[r] = 0) : Z[r * 2 + 1] = 0;
    for (; v.heap_len < 2; )
      e = v.heap[++v.heap_len] = de < 2 ? ++de : 0, Z[e * 2] = 1, v.depth[e] = 0, v.opt_len--, R && (v.static_len -= Q[e * 2 + 1]);
    for (U.max_code = de, r = v.heap_len >> 1; r >= 1; r--)
      xe(v, Z, r);
    e = L;
    do
      r = v.heap[
        1
        /*SMALLEST*/
      ], v.heap[
        1
        /*SMALLEST*/
      ] = v.heap[v.heap_len--], xe(
        v,
        Z,
        1
        /*SMALLEST*/
      ), q = v.heap[
        1
        /*SMALLEST*/
      ], v.heap[--v.heap_max] = r, v.heap[--v.heap_max] = q, Z[e * 2] = Z[r * 2] + Z[q * 2], v.depth[e] = (v.depth[r] >= v.depth[q] ? v.depth[r] : v.depth[q]) + 1, Z[r * 2 + 1] = Z[q * 2 + 1] = e, v.heap[
        1
        /*SMALLEST*/
      ] = e++, xe(
        v,
        Z,
        1
        /*SMALLEST*/
      );
    while (v.heap_len >= 2);
    v.heap[--v.heap_max] = v.heap[
      1
      /*SMALLEST*/
    ], $(v, U), ce(Z, de, v.bl_count);
  }
  function Ue(v, U, Z) {
    var Q, R = -1, L, r = U[0 * 2 + 1], q = 0, de = 7, e = 4;
    for (r === 0 && (de = 138, e = 3), U[(Z + 1) * 2 + 1] = 65535, Q = 0; Q <= Z; Q++)
      L = r, r = U[(Q + 1) * 2 + 1], !(++q < de && L === r) && (q < e ? v.bl_tree[L * 2] += q : L !== 0 ? (L !== R && v.bl_tree[L * 2]++, v.bl_tree[F * 2]++) : q <= 10 ? v.bl_tree[H * 2]++ : v.bl_tree[P * 2]++, q = 0, R = L, r === 0 ? (de = 138, e = 3) : L === r ? (de = 6, e = 3) : (de = 7, e = 4));
  }
  function Ne(v, U, Z) {
    var Q, R = -1, L, r = U[0 * 2 + 1], q = 0, de = 7, e = 4;
    for (r === 0 && (de = 138, e = 3), Q = 0; Q <= Z; Q++)
      if (L = r, r = U[(Q + 1) * 2 + 1], !(++q < de && L === r)) {
        if (q < e)
          do
            w(v, L, v.bl_tree);
          while (--q !== 0);
        else L !== 0 ? (L !== R && (w(v, L, v.bl_tree), q--), w(v, F, v.bl_tree), ve(v, q - 3, 2)) : q <= 10 ? (w(v, H, v.bl_tree), ve(v, q - 3, 3)) : (w(v, P, v.bl_tree), ve(v, q - 11, 7));
        q = 0, R = L, r === 0 ? (de = 138, e = 3) : L === r ? (de = 6, e = 3) : (de = 7, e = 4);
      }
  }
  function B(v) {
    var U;
    for (Ue(v, v.dyn_ltree, v.l_desc.max_code), Ue(v, v.dyn_dtree, v.d_desc.max_code), Ae(v, v.bl_desc), U = T - 1; U >= 3 && v.bl_tree[le[U] * 2 + 1] === 0; U--)
      ;
    return v.opt_len += 3 * (U + 1) + 5 + 5 + 4, U;
  }
  function j(v, U, Z, Q) {
    var R;
    for (ve(v, U - 257, 5), ve(v, Z - 1, 5), ve(v, Q - 4, 4), R = 0; R < Q; R++)
      ve(v, v.bl_tree[le[R] * 2 + 1], 3);
    Ne(v, v.dyn_ltree, U - 1), Ne(v, v.dyn_dtree, Z - 1);
  }
  function W(v) {
    var U = 4093624447, Z;
    for (Z = 0; Z <= 31; Z++, U >>>= 1)
      if (U & 1 && v.dyn_ltree[Z * 2] !== 0)
        return c;
    if (v.dyn_ltree[9 * 2] !== 0 || v.dyn_ltree[10 * 2] !== 0 || v.dyn_ltree[13 * 2] !== 0)
      return i;
    for (Z = 32; Z < t; Z++)
      if (v.dyn_ltree[Z * 2] !== 0)
        return i;
    return c;
  }
  var V = !1;
  function we(v) {
    V || (Y(), V = !0), v.l_desc = new ne(v.dyn_ltree, te), v.d_desc = new ne(v.dyn_dtree, ae), v.bl_desc = new ne(v.bl_tree, fe), v.bi_buf = 0, v.bi_valid = 0, se(v);
  }
  function pe(v, U, Z, Q) {
    ve(v, (n << 1) + (Q ? 1 : 0), 3), De(v, U, Z);
  }
  function ke(v) {
    ve(v, p << 1, 3), w(v, O, G), M(v);
  }
  function Ee(v, U, Z, Q) {
    var R, L, r = 0;
    v.level > 0 ? (v.strm.data_type === y && (v.strm.data_type = W(v)), Ae(v, v.l_desc), Ae(v, v.d_desc), r = B(v), R = v.opt_len + 3 + 7 >>> 3, L = v.static_len + 3 + 7 >>> 3, L <= R && (R = L)) : R = L = Z + 5, Z + 4 <= R && U !== -1 ? pe(v, U, Z, Q) : v.strategy === d || L === R ? (ve(v, (p << 1) + (Q ? 1 : 0), 3), re(v, G, ee)) : (ve(v, (h << 1) + (Q ? 1 : 0), 3), j(v, v.l_desc.max_code + 1, v.d_desc.max_code + 1, r + 1), re(v, v.dyn_ltree, v.dyn_dtree)), se(v), Q && Pe(v);
  }
  function Xe(v, U, Z) {
    return v.pending_buf[v.d_buf + v.last_lit * 2] = U >>> 8 & 255, v.pending_buf[v.d_buf + v.last_lit * 2 + 1] = U & 255, v.pending_buf[v.l_buf + v.last_lit] = Z & 255, v.last_lit++, U === 0 ? v.dyn_ltree[Z * 2]++ : (v.matches++, U--, v.dyn_ltree[(Se[Z] + t + 1) * 2]++, v.dyn_dtree[me(U) * 2]++), v.last_lit === v.lit_bufsize - 1;
  }
  return et._tr_init = we, et._tr_stored_block = pe, et._tr_flush_block = Ee, et._tr_tally = Xe, et._tr_align = ke, et;
}
var Jt, hi;
function hn() {
  if (hi) return Jt;
  hi = 1;
  function o(d, c, i, y) {
    for (var s = d & 65535 | 0, n = d >>> 16 & 65535 | 0, p = 0; i !== 0; ) {
      p = i > 2e3 ? 2e3 : i, i -= p;
      do
        s = s + c[y++] | 0, n = n + s | 0;
      while (--p);
      s %= 65521, n %= 65521;
    }
    return s | n << 16 | 0;
  }
  return Jt = o, Jt;
}
var Qt, di;
function dn() {
  if (di) return Qt;
  di = 1;
  function o() {
    for (var i, y = [], s = 0; s < 256; s++) {
      i = s;
      for (var n = 0; n < 8; n++)
        i = i & 1 ? 3988292384 ^ i >>> 1 : i >>> 1;
      y[s] = i;
    }
    return y;
  }
  var d = o();
  function c(i, y, s, n) {
    var p = d, h = n + s;
    i ^= -1;
    for (var S = n; S < h; S++)
      i = i >>> 8 ^ p[(i ^ y[S]) & 255];
    return i ^ -1;
  }
  return Qt = c, Qt;
}
var er, ci;
function Rr() {
  return ci || (ci = 1, er = {
    2: "need dictionary",
    /* Z_NEED_DICT       2  */
    1: "stream end",
    /* Z_STREAM_END      1  */
    0: "",
    /* Z_OK              0  */
    "-1": "file error",
    /* Z_ERRNO         (-1) */
    "-2": "stream error",
    /* Z_STREAM_ERROR  (-2) */
    "-3": "data error",
    /* Z_DATA_ERROR    (-3) */
    "-4": "insufficient memory",
    /* Z_MEM_ERROR     (-4) */
    "-5": "buffer error",
    /* Z_BUF_ERROR     (-5) */
    "-6": "incompatible version"
    /* Z_VERSION_ERROR (-6) */
  }), er;
}
var vi;
function jn() {
  if (vi) return $e;
  vi = 1;
  var o = Qe(), d = Pn(), c = hn(), i = dn(), y = Rr(), s = 0, n = 1, p = 3, h = 4, S = 5, m = 0, u = 1, t = -2, l = -3, g = -5, T = -1, E = 1, f = 2, _ = 3, k = 4, O = 0, F = 2, H = 8, P = 9, X = 15, ue = 8, oe = 29, le = 256, he = le + 1 + oe, G = 30, ee = 19, be = 2 * he + 1, Se = 15, C = 3, A = 258, N = A + C + 1, te = 32, ae = 42, fe = 69, ne = 73, me = 91, ye = 103, ve = 113, w = 666, b = 1, M = 2, $ = 3, ce = 4, Y = 3;
  function se(e, I) {
    return e.msg = y[I], I;
  }
  function Pe(e) {
    return (e << 1) - (e > 4 ? 9 : 0);
  }
  function De(e) {
    for (var I = e.length; --I >= 0; )
      e[I] = 0;
  }
  function Ie(e) {
    var I = e.state, z = I.pending;
    z > e.avail_out && (z = e.avail_out), z !== 0 && (o.arraySet(e.output, I.pending_buf, I.pending_out, z, e.next_out), e.next_out += z, I.pending_out += z, e.total_out += z, e.avail_out -= z, I.pending -= z, I.pending === 0 && (I.pending_out = 0));
  }
  function xe(e, I) {
    d._tr_flush_block(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, I), e.block_start = e.strstart, Ie(e.strm);
  }
  function re(e, I) {
    e.pending_buf[e.pending++] = I;
  }
  function Ae(e, I) {
    e.pending_buf[e.pending++] = I >>> 8 & 255, e.pending_buf[e.pending++] = I & 255;
  }
  function Ue(e, I, z, a) {
    var x = e.avail_in;
    return x > a && (x = a), x === 0 ? 0 : (e.avail_in -= x, o.arraySet(I, e.input, e.next_in, x, z), e.state.wrap === 1 ? e.adler = c(e.adler, I, x, z) : e.state.wrap === 2 && (e.adler = i(e.adler, I, x, z)), e.next_in += x, e.total_in += x, x);
  }
  function Ne(e, I) {
    var z = e.max_chain_length, a = e.strstart, x, D, ie = e.prev_length, K = e.nice_match, J = e.strstart > e.w_size - N ? e.strstart - (e.w_size - N) : 0, _e = e.window, Ge = e.w_mask, Ce = e.prev, ge = e.strstart + A, Be = _e[a + ie - 1], Le = _e[a + ie];
    e.prev_length >= e.good_match && (z >>= 2), K > e.lookahead && (K = e.lookahead);
    do
      if (x = I, !(_e[x + ie] !== Le || _e[x + ie - 1] !== Be || _e[x] !== _e[a] || _e[++x] !== _e[a + 1])) {
        a += 2, x++;
        do
          ;
        while (_e[++a] === _e[++x] && _e[++a] === _e[++x] && _e[++a] === _e[++x] && _e[++a] === _e[++x] && _e[++a] === _e[++x] && _e[++a] === _e[++x] && _e[++a] === _e[++x] && _e[++a] === _e[++x] && a < ge);
        if (D = A - (ge - a), a = ge - A, D > ie) {
          if (e.match_start = I, ie = D, D >= K)
            break;
          Be = _e[a + ie - 1], Le = _e[a + ie];
        }
      }
    while ((I = Ce[I & Ge]) > J && --z !== 0);
    return ie <= e.lookahead ? ie : e.lookahead;
  }
  function B(e) {
    var I = e.w_size, z, a, x, D, ie;
    do {
      if (D = e.window_size - e.lookahead - e.strstart, e.strstart >= I + (I - N)) {
        o.arraySet(e.window, e.window, I, I, 0), e.match_start -= I, e.strstart -= I, e.block_start -= I, a = e.hash_size, z = a;
        do
          x = e.head[--z], e.head[z] = x >= I ? x - I : 0;
        while (--a);
        a = I, z = a;
        do
          x = e.prev[--z], e.prev[z] = x >= I ? x - I : 0;
        while (--a);
        D += I;
      }
      if (e.strm.avail_in === 0)
        break;
      if (a = Ue(e.strm, e.window, e.strstart + e.lookahead, D), e.lookahead += a, e.lookahead + e.insert >= C)
        for (ie = e.strstart - e.insert, e.ins_h = e.window[ie], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[ie + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[ie + C - 1]) & e.hash_mask, e.prev[ie & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = ie, ie++, e.insert--, !(e.lookahead + e.insert < C)); )
          ;
    } while (e.lookahead < N && e.strm.avail_in !== 0);
  }
  function j(e, I) {
    var z = 65535;
    for (z > e.pending_buf_size - 5 && (z = e.pending_buf_size - 5); ; ) {
      if (e.lookahead <= 1) {
        if (B(e), e.lookahead === 0 && I === s)
          return b;
        if (e.lookahead === 0)
          break;
      }
      e.strstart += e.lookahead, e.lookahead = 0;
      var a = e.block_start + z;
      if ((e.strstart === 0 || e.strstart >= a) && (e.lookahead = e.strstart - a, e.strstart = a, xe(e, !1), e.strm.avail_out === 0) || e.strstart - e.block_start >= e.w_size - N && (xe(e, !1), e.strm.avail_out === 0))
        return b;
    }
    return e.insert = 0, I === h ? (xe(e, !0), e.strm.avail_out === 0 ? $ : ce) : (e.strstart > e.block_start && (xe(e, !1), e.strm.avail_out === 0), b);
  }
  function W(e, I) {
    for (var z, a; ; ) {
      if (e.lookahead < N) {
        if (B(e), e.lookahead < N && I === s)
          return b;
        if (e.lookahead === 0)
          break;
      }
      if (z = 0, e.lookahead >= C && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + C - 1]) & e.hash_mask, z = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), z !== 0 && e.strstart - z <= e.w_size - N && (e.match_length = Ne(e, z)), e.match_length >= C)
        if (a = d._tr_tally(e, e.strstart - e.match_start, e.match_length - C), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= C) {
          e.match_length--;
          do
            e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + C - 1]) & e.hash_mask, z = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart;
          while (--e.match_length !== 0);
          e.strstart++;
        } else
          e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
      else
        a = d._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
      if (a && (xe(e, !1), e.strm.avail_out === 0))
        return b;
    }
    return e.insert = e.strstart < C - 1 ? e.strstart : C - 1, I === h ? (xe(e, !0), e.strm.avail_out === 0 ? $ : ce) : e.last_lit && (xe(e, !1), e.strm.avail_out === 0) ? b : M;
  }
  function V(e, I) {
    for (var z, a, x; ; ) {
      if (e.lookahead < N) {
        if (B(e), e.lookahead < N && I === s)
          return b;
        if (e.lookahead === 0)
          break;
      }
      if (z = 0, e.lookahead >= C && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + C - 1]) & e.hash_mask, z = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = C - 1, z !== 0 && e.prev_length < e.max_lazy_match && e.strstart - z <= e.w_size - N && (e.match_length = Ne(e, z), e.match_length <= 5 && (e.strategy === E || e.match_length === C && e.strstart - e.match_start > 4096) && (e.match_length = C - 1)), e.prev_length >= C && e.match_length <= e.prev_length) {
        x = e.strstart + e.lookahead - C, a = d._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - C), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
        do
          ++e.strstart <= x && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + C - 1]) & e.hash_mask, z = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart);
        while (--e.prev_length !== 0);
        if (e.match_available = 0, e.match_length = C - 1, e.strstart++, a && (xe(e, !1), e.strm.avail_out === 0))
          return b;
      } else if (e.match_available) {
        if (a = d._tr_tally(e, 0, e.window[e.strstart - 1]), a && xe(e, !1), e.strstart++, e.lookahead--, e.strm.avail_out === 0)
          return b;
      } else
        e.match_available = 1, e.strstart++, e.lookahead--;
    }
    return e.match_available && (a = d._tr_tally(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < C - 1 ? e.strstart : C - 1, I === h ? (xe(e, !0), e.strm.avail_out === 0 ? $ : ce) : e.last_lit && (xe(e, !1), e.strm.avail_out === 0) ? b : M;
  }
  function we(e, I) {
    for (var z, a, x, D, ie = e.window; ; ) {
      if (e.lookahead <= A) {
        if (B(e), e.lookahead <= A && I === s)
          return b;
        if (e.lookahead === 0)
          break;
      }
      if (e.match_length = 0, e.lookahead >= C && e.strstart > 0 && (x = e.strstart - 1, a = ie[x], a === ie[++x] && a === ie[++x] && a === ie[++x])) {
        D = e.strstart + A;
        do
          ;
        while (a === ie[++x] && a === ie[++x] && a === ie[++x] && a === ie[++x] && a === ie[++x] && a === ie[++x] && a === ie[++x] && a === ie[++x] && x < D);
        e.match_length = A - (D - x), e.match_length > e.lookahead && (e.match_length = e.lookahead);
      }
      if (e.match_length >= C ? (z = d._tr_tally(e, 1, e.match_length - C), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (z = d._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), z && (xe(e, !1), e.strm.avail_out === 0))
        return b;
    }
    return e.insert = 0, I === h ? (xe(e, !0), e.strm.avail_out === 0 ? $ : ce) : e.last_lit && (xe(e, !1), e.strm.avail_out === 0) ? b : M;
  }
  function pe(e, I) {
    for (var z; ; ) {
      if (e.lookahead === 0 && (B(e), e.lookahead === 0)) {
        if (I === s)
          return b;
        break;
      }
      if (e.match_length = 0, z = d._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, z && (xe(e, !1), e.strm.avail_out === 0))
        return b;
    }
    return e.insert = 0, I === h ? (xe(e, !0), e.strm.avail_out === 0 ? $ : ce) : e.last_lit && (xe(e, !1), e.strm.avail_out === 0) ? b : M;
  }
  function ke(e, I, z, a, x) {
    this.good_length = e, this.max_lazy = I, this.nice_length = z, this.max_chain = a, this.func = x;
  }
  var Ee;
  Ee = [
    /*      good lazy nice chain */
    new ke(0, 0, 0, 0, j),
    /* 0 store only */
    new ke(4, 4, 8, 4, W),
    /* 1 max speed, no lazy matches */
    new ke(4, 5, 16, 8, W),
    /* 2 */
    new ke(4, 6, 32, 32, W),
    /* 3 */
    new ke(4, 4, 16, 16, V),
    /* 4 lazy matches */
    new ke(8, 16, 32, 32, V),
    /* 5 */
    new ke(8, 16, 128, 128, V),
    /* 6 */
    new ke(8, 32, 128, 256, V),
    /* 7 */
    new ke(32, 128, 258, 1024, V),
    /* 8 */
    new ke(32, 258, 258, 4096, V)
    /* 9 max compression */
  ];
  function Xe(e) {
    e.window_size = 2 * e.w_size, De(e.head), e.max_lazy_match = Ee[e.level].max_lazy, e.good_match = Ee[e.level].good_length, e.nice_match = Ee[e.level].nice_length, e.max_chain_length = Ee[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = C - 1, e.match_available = 0, e.ins_h = 0;
  }
  function v() {
    this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = H, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new o.Buf16(be * 2), this.dyn_dtree = new o.Buf16((2 * G + 1) * 2), this.bl_tree = new o.Buf16((2 * ee + 1) * 2), De(this.dyn_ltree), De(this.dyn_dtree), De(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new o.Buf16(Se + 1), this.heap = new o.Buf16(2 * he + 1), De(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new o.Buf16(2 * he + 1), De(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
  }
  function U(e) {
    var I;
    return !e || !e.state ? se(e, t) : (e.total_in = e.total_out = 0, e.data_type = F, I = e.state, I.pending = 0, I.pending_out = 0, I.wrap < 0 && (I.wrap = -I.wrap), I.status = I.wrap ? ae : ve, e.adler = I.wrap === 2 ? 0 : 1, I.last_flush = s, d._tr_init(I), m);
  }
  function Z(e) {
    var I = U(e);
    return I === m && Xe(e.state), I;
  }
  function Q(e, I) {
    return !e || !e.state || e.state.wrap !== 2 ? t : (e.state.gzhead = I, m);
  }
  function R(e, I, z, a, x, D) {
    if (!e)
      return t;
    var ie = 1;
    if (I === T && (I = 6), a < 0 ? (ie = 0, a = -a) : a > 15 && (ie = 2, a -= 16), x < 1 || x > P || z !== H || a < 8 || a > 15 || I < 0 || I > 9 || D < 0 || D > k)
      return se(e, t);
    a === 8 && (a = 9);
    var K = new v();
    return e.state = K, K.strm = e, K.wrap = ie, K.gzhead = null, K.w_bits = a, K.w_size = 1 << K.w_bits, K.w_mask = K.w_size - 1, K.hash_bits = x + 7, K.hash_size = 1 << K.hash_bits, K.hash_mask = K.hash_size - 1, K.hash_shift = ~~((K.hash_bits + C - 1) / C), K.window = new o.Buf8(K.w_size * 2), K.head = new o.Buf16(K.hash_size), K.prev = new o.Buf16(K.w_size), K.lit_bufsize = 1 << x + 6, K.pending_buf_size = K.lit_bufsize * 4, K.pending_buf = new o.Buf8(K.pending_buf_size), K.d_buf = 1 * K.lit_bufsize, K.l_buf = 3 * K.lit_bufsize, K.level = I, K.strategy = D, K.method = z, Z(e);
  }
  function L(e, I) {
    return R(e, I, H, X, ue, O);
  }
  function r(e, I) {
    var z, a, x, D;
    if (!e || !e.state || I > S || I < 0)
      return e ? se(e, t) : t;
    if (a = e.state, !e.output || !e.input && e.avail_in !== 0 || a.status === w && I !== h)
      return se(e, e.avail_out === 0 ? g : t);
    if (a.strm = e, z = a.last_flush, a.last_flush = I, a.status === ae)
      if (a.wrap === 2)
        e.adler = 0, re(a, 31), re(a, 139), re(a, 8), a.gzhead ? (re(
          a,
          (a.gzhead.text ? 1 : 0) + (a.gzhead.hcrc ? 2 : 0) + (a.gzhead.extra ? 4 : 0) + (a.gzhead.name ? 8 : 0) + (a.gzhead.comment ? 16 : 0)
        ), re(a, a.gzhead.time & 255), re(a, a.gzhead.time >> 8 & 255), re(a, a.gzhead.time >> 16 & 255), re(a, a.gzhead.time >> 24 & 255), re(a, a.level === 9 ? 2 : a.strategy >= f || a.level < 2 ? 4 : 0), re(a, a.gzhead.os & 255), a.gzhead.extra && a.gzhead.extra.length && (re(a, a.gzhead.extra.length & 255), re(a, a.gzhead.extra.length >> 8 & 255)), a.gzhead.hcrc && (e.adler = i(e.adler, a.pending_buf, a.pending, 0)), a.gzindex = 0, a.status = fe) : (re(a, 0), re(a, 0), re(a, 0), re(a, 0), re(a, 0), re(a, a.level === 9 ? 2 : a.strategy >= f || a.level < 2 ? 4 : 0), re(a, Y), a.status = ve);
      else {
        var ie = H + (a.w_bits - 8 << 4) << 8, K = -1;
        a.strategy >= f || a.level < 2 ? K = 0 : a.level < 6 ? K = 1 : a.level === 6 ? K = 2 : K = 3, ie |= K << 6, a.strstart !== 0 && (ie |= te), ie += 31 - ie % 31, a.status = ve, Ae(a, ie), a.strstart !== 0 && (Ae(a, e.adler >>> 16), Ae(a, e.adler & 65535)), e.adler = 1;
      }
    if (a.status === fe)
      if (a.gzhead.extra) {
        for (x = a.pending; a.gzindex < (a.gzhead.extra.length & 65535) && !(a.pending === a.pending_buf_size && (a.gzhead.hcrc && a.pending > x && (e.adler = i(e.adler, a.pending_buf, a.pending - x, x)), Ie(e), x = a.pending, a.pending === a.pending_buf_size)); )
          re(a, a.gzhead.extra[a.gzindex] & 255), a.gzindex++;
        a.gzhead.hcrc && a.pending > x && (e.adler = i(e.adler, a.pending_buf, a.pending - x, x)), a.gzindex === a.gzhead.extra.length && (a.gzindex = 0, a.status = ne);
      } else
        a.status = ne;
    if (a.status === ne)
      if (a.gzhead.name) {
        x = a.pending;
        do {
          if (a.pending === a.pending_buf_size && (a.gzhead.hcrc && a.pending > x && (e.adler = i(e.adler, a.pending_buf, a.pending - x, x)), Ie(e), x = a.pending, a.pending === a.pending_buf_size)) {
            D = 1;
            break;
          }
          a.gzindex < a.gzhead.name.length ? D = a.gzhead.name.charCodeAt(a.gzindex++) & 255 : D = 0, re(a, D);
        } while (D !== 0);
        a.gzhead.hcrc && a.pending > x && (e.adler = i(e.adler, a.pending_buf, a.pending - x, x)), D === 0 && (a.gzindex = 0, a.status = me);
      } else
        a.status = me;
    if (a.status === me)
      if (a.gzhead.comment) {
        x = a.pending;
        do {
          if (a.pending === a.pending_buf_size && (a.gzhead.hcrc && a.pending > x && (e.adler = i(e.adler, a.pending_buf, a.pending - x, x)), Ie(e), x = a.pending, a.pending === a.pending_buf_size)) {
            D = 1;
            break;
          }
          a.gzindex < a.gzhead.comment.length ? D = a.gzhead.comment.charCodeAt(a.gzindex++) & 255 : D = 0, re(a, D);
        } while (D !== 0);
        a.gzhead.hcrc && a.pending > x && (e.adler = i(e.adler, a.pending_buf, a.pending - x, x)), D === 0 && (a.status = ye);
      } else
        a.status = ye;
    if (a.status === ye && (a.gzhead.hcrc ? (a.pending + 2 > a.pending_buf_size && Ie(e), a.pending + 2 <= a.pending_buf_size && (re(a, e.adler & 255), re(a, e.adler >> 8 & 255), e.adler = 0, a.status = ve)) : a.status = ve), a.pending !== 0) {
      if (Ie(e), e.avail_out === 0)
        return a.last_flush = -1, m;
    } else if (e.avail_in === 0 && Pe(I) <= Pe(z) && I !== h)
      return se(e, g);
    if (a.status === w && e.avail_in !== 0)
      return se(e, g);
    if (e.avail_in !== 0 || a.lookahead !== 0 || I !== s && a.status !== w) {
      var J = a.strategy === f ? pe(a, I) : a.strategy === _ ? we(a, I) : Ee[a.level].func(a, I);
      if ((J === $ || J === ce) && (a.status = w), J === b || J === $)
        return e.avail_out === 0 && (a.last_flush = -1), m;
      if (J === M && (I === n ? d._tr_align(a) : I !== S && (d._tr_stored_block(a, 0, 0, !1), I === p && (De(a.head), a.lookahead === 0 && (a.strstart = 0, a.block_start = 0, a.insert = 0))), Ie(e), e.avail_out === 0))
        return a.last_flush = -1, m;
    }
    return I !== h ? m : a.wrap <= 0 ? u : (a.wrap === 2 ? (re(a, e.adler & 255), re(a, e.adler >> 8 & 255), re(a, e.adler >> 16 & 255), re(a, e.adler >> 24 & 255), re(a, e.total_in & 255), re(a, e.total_in >> 8 & 255), re(a, e.total_in >> 16 & 255), re(a, e.total_in >> 24 & 255)) : (Ae(a, e.adler >>> 16), Ae(a, e.adler & 65535)), Ie(e), a.wrap > 0 && (a.wrap = -a.wrap), a.pending !== 0 ? m : u);
  }
  function q(e) {
    var I;
    return !e || !e.state ? t : (I = e.state.status, I !== ae && I !== fe && I !== ne && I !== me && I !== ye && I !== ve && I !== w ? se(e, t) : (e.state = null, I === ve ? se(e, l) : m));
  }
  function de(e, I) {
    var z = I.length, a, x, D, ie, K, J, _e, Ge;
    if (!e || !e.state || (a = e.state, ie = a.wrap, ie === 2 || ie === 1 && a.status !== ae || a.lookahead))
      return t;
    for (ie === 1 && (e.adler = c(e.adler, I, z, 0)), a.wrap = 0, z >= a.w_size && (ie === 0 && (De(a.head), a.strstart = 0, a.block_start = 0, a.insert = 0), Ge = new o.Buf8(a.w_size), o.arraySet(Ge, I, z - a.w_size, a.w_size, 0), I = Ge, z = a.w_size), K = e.avail_in, J = e.next_in, _e = e.input, e.avail_in = z, e.next_in = 0, e.input = I, B(a); a.lookahead >= C; ) {
      x = a.strstart, D = a.lookahead - (C - 1);
      do
        a.ins_h = (a.ins_h << a.hash_shift ^ a.window[x + C - 1]) & a.hash_mask, a.prev[x & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = x, x++;
      while (--D);
      a.strstart = x, a.lookahead = C - 1, B(a);
    }
    return a.strstart += a.lookahead, a.block_start = a.strstart, a.insert = a.lookahead, a.lookahead = 0, a.match_length = a.prev_length = C - 1, a.match_available = 0, e.next_in = J, e.input = _e, e.avail_in = K, a.wrap = ie, m;
  }
  return $e.deflateInit = L, $e.deflateInit2 = R, $e.deflateReset = Z, $e.deflateResetKeep = U, $e.deflateSetHeader = Q, $e.deflate = r, $e.deflateEnd = q, $e.deflateSetDictionary = de, $e.deflateInfo = "pako deflate (from Nodeca project)", $e;
}
var tt = {}, pi;
function cn() {
  if (pi) return tt;
  pi = 1;
  var o = Qe(), d = !0, c = !0;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch {
    d = !1;
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch {
    c = !1;
  }
  for (var i = new o.Buf8(256), y = 0; y < 256; y++)
    i[y] = y >= 252 ? 6 : y >= 248 ? 5 : y >= 240 ? 4 : y >= 224 ? 3 : y >= 192 ? 2 : 1;
  i[254] = i[254] = 1, tt.string2buf = function(n) {
    var p, h, S, m, u, t = n.length, l = 0;
    for (m = 0; m < t; m++)
      h = n.charCodeAt(m), (h & 64512) === 55296 && m + 1 < t && (S = n.charCodeAt(m + 1), (S & 64512) === 56320 && (h = 65536 + (h - 55296 << 10) + (S - 56320), m++)), l += h < 128 ? 1 : h < 2048 ? 2 : h < 65536 ? 3 : 4;
    for (p = new o.Buf8(l), u = 0, m = 0; u < l; m++)
      h = n.charCodeAt(m), (h & 64512) === 55296 && m + 1 < t && (S = n.charCodeAt(m + 1), (S & 64512) === 56320 && (h = 65536 + (h - 55296 << 10) + (S - 56320), m++)), h < 128 ? p[u++] = h : h < 2048 ? (p[u++] = 192 | h >>> 6, p[u++] = 128 | h & 63) : h < 65536 ? (p[u++] = 224 | h >>> 12, p[u++] = 128 | h >>> 6 & 63, p[u++] = 128 | h & 63) : (p[u++] = 240 | h >>> 18, p[u++] = 128 | h >>> 12 & 63, p[u++] = 128 | h >>> 6 & 63, p[u++] = 128 | h & 63);
    return p;
  };
  function s(n, p) {
    if (p < 65534 && (n.subarray && c || !n.subarray && d))
      return String.fromCharCode.apply(null, o.shrinkBuf(n, p));
    for (var h = "", S = 0; S < p; S++)
      h += String.fromCharCode(n[S]);
    return h;
  }
  return tt.buf2binstring = function(n) {
    return s(n, n.length);
  }, tt.binstring2buf = function(n) {
    for (var p = new o.Buf8(n.length), h = 0, S = p.length; h < S; h++)
      p[h] = n.charCodeAt(h);
    return p;
  }, tt.buf2string = function(n, p) {
    var h, S, m, u, t = p || n.length, l = new Array(t * 2);
    for (S = 0, h = 0; h < t; ) {
      if (m = n[h++], m < 128) {
        l[S++] = m;
        continue;
      }
      if (u = i[m], u > 4) {
        l[S++] = 65533, h += u - 1;
        continue;
      }
      for (m &= u === 2 ? 31 : u === 3 ? 15 : 7; u > 1 && h < t; )
        m = m << 6 | n[h++] & 63, u--;
      if (u > 1) {
        l[S++] = 65533;
        continue;
      }
      m < 65536 ? l[S++] = m : (m -= 65536, l[S++] = 55296 | m >> 10 & 1023, l[S++] = 56320 | m & 1023);
    }
    return s(l, S);
  }, tt.utf8border = function(n, p) {
    var h;
    for (p = p || n.length, p > n.length && (p = n.length), h = p - 1; h >= 0 && (n[h] & 192) === 128; )
      h--;
    return h < 0 || h === 0 ? p : h + i[n[h]] > p ? h : p;
  }, tt;
}
var tr, _i;
function vn() {
  if (_i) return tr;
  _i = 1;
  function o() {
    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
  }
  return tr = o, tr;
}
var gi;
function Mn() {
  if (gi) return rt;
  gi = 1;
  var o = jn(), d = Qe(), c = cn(), i = Rr(), y = vn(), s = Object.prototype.toString, n = 0, p = 4, h = 0, S = 1, m = 2, u = -1, t = 0, l = 8;
  function g(_) {
    if (!(this instanceof g)) return new g(_);
    this.options = d.assign({
      level: u,
      method: l,
      chunkSize: 16384,
      windowBits: 15,
      memLevel: 8,
      strategy: t,
      to: ""
    }, _ || {});
    var k = this.options;
    k.raw && k.windowBits > 0 ? k.windowBits = -k.windowBits : k.gzip && k.windowBits > 0 && k.windowBits < 16 && (k.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new y(), this.strm.avail_out = 0;
    var O = o.deflateInit2(
      this.strm,
      k.level,
      k.method,
      k.windowBits,
      k.memLevel,
      k.strategy
    );
    if (O !== h)
      throw new Error(i[O]);
    if (k.header && o.deflateSetHeader(this.strm, k.header), k.dictionary) {
      var F;
      if (typeof k.dictionary == "string" ? F = c.string2buf(k.dictionary) : s.call(k.dictionary) === "[object ArrayBuffer]" ? F = new Uint8Array(k.dictionary) : F = k.dictionary, O = o.deflateSetDictionary(this.strm, F), O !== h)
        throw new Error(i[O]);
      this._dict_set = !0;
    }
  }
  g.prototype.push = function(_, k) {
    var O = this.strm, F = this.options.chunkSize, H, P;
    if (this.ended)
      return !1;
    P = k === ~~k ? k : k === !0 ? p : n, typeof _ == "string" ? O.input = c.string2buf(_) : s.call(_) === "[object ArrayBuffer]" ? O.input = new Uint8Array(_) : O.input = _, O.next_in = 0, O.avail_in = O.input.length;
    do {
      if (O.avail_out === 0 && (O.output = new d.Buf8(F), O.next_out = 0, O.avail_out = F), H = o.deflate(O, P), H !== S && H !== h)
        return this.onEnd(H), this.ended = !0, !1;
      (O.avail_out === 0 || O.avail_in === 0 && (P === p || P === m)) && (this.options.to === "string" ? this.onData(c.buf2binstring(d.shrinkBuf(O.output, O.next_out))) : this.onData(d.shrinkBuf(O.output, O.next_out)));
    } while ((O.avail_in > 0 || O.avail_out === 0) && H !== S);
    return P === p ? (H = o.deflateEnd(this.strm), this.onEnd(H), this.ended = !0, H === h) : (P === m && (this.onEnd(h), O.avail_out = 0), !0);
  }, g.prototype.onData = function(_) {
    this.chunks.push(_);
  }, g.prototype.onEnd = function(_) {
    _ === h && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = d.flattenChunks(this.chunks)), this.chunks = [], this.err = _, this.msg = this.strm.msg;
  };
  function T(_, k) {
    var O = new g(k);
    if (O.push(_, !0), O.err)
      throw O.msg || i[O.err];
    return O.result;
  }
  function E(_, k) {
    return k = k || {}, k.raw = !0, T(_, k);
  }
  function f(_, k) {
    return k = k || {}, k.gzip = !0, T(_, k);
  }
  return rt.Deflate = g, rt.deflate = T, rt.deflateRaw = E, rt.gzip = f, rt;
}
var it = {}, We = {}, rr, mi;
function Un() {
  if (mi) return rr;
  mi = 1;
  var o = 30, d = 12;
  return rr = function(i, y) {
    var s, n, p, h, S, m, u, t, l, g, T, E, f, _, k, O, F, H, P, X, ue, oe, le, he, G;
    s = i.state, n = i.next_in, he = i.input, p = n + (i.avail_in - 5), h = i.next_out, G = i.output, S = h - (y - i.avail_out), m = h + (i.avail_out - 257), u = s.dmax, t = s.wsize, l = s.whave, g = s.wnext, T = s.window, E = s.hold, f = s.bits, _ = s.lencode, k = s.distcode, O = (1 << s.lenbits) - 1, F = (1 << s.distbits) - 1;
    e:
      do {
        f < 15 && (E += he[n++] << f, f += 8, E += he[n++] << f, f += 8), H = _[E & O];
        t:
          for (; ; ) {
            if (P = H >>> 24, E >>>= P, f -= P, P = H >>> 16 & 255, P === 0)
              G[h++] = H & 65535;
            else if (P & 16) {
              X = H & 65535, P &= 15, P && (f < P && (E += he[n++] << f, f += 8), X += E & (1 << P) - 1, E >>>= P, f -= P), f < 15 && (E += he[n++] << f, f += 8, E += he[n++] << f, f += 8), H = k[E & F];
              r:
                for (; ; ) {
                  if (P = H >>> 24, E >>>= P, f -= P, P = H >>> 16 & 255, P & 16) {
                    if (ue = H & 65535, P &= 15, f < P && (E += he[n++] << f, f += 8, f < P && (E += he[n++] << f, f += 8)), ue += E & (1 << P) - 1, ue > u) {
                      i.msg = "invalid distance too far back", s.mode = o;
                      break e;
                    }
                    if (E >>>= P, f -= P, P = h - S, ue > P) {
                      if (P = ue - P, P > l && s.sane) {
                        i.msg = "invalid distance too far back", s.mode = o;
                        break e;
                      }
                      if (oe = 0, le = T, g === 0) {
                        if (oe += t - P, P < X) {
                          X -= P;
                          do
                            G[h++] = T[oe++];
                          while (--P);
                          oe = h - ue, le = G;
                        }
                      } else if (g < P) {
                        if (oe += t + g - P, P -= g, P < X) {
                          X -= P;
                          do
                            G[h++] = T[oe++];
                          while (--P);
                          if (oe = 0, g < X) {
                            P = g, X -= P;
                            do
                              G[h++] = T[oe++];
                            while (--P);
                            oe = h - ue, le = G;
                          }
                        }
                      } else if (oe += g - P, P < X) {
                        X -= P;
                        do
                          G[h++] = T[oe++];
                        while (--P);
                        oe = h - ue, le = G;
                      }
                      for (; X > 2; )
                        G[h++] = le[oe++], G[h++] = le[oe++], G[h++] = le[oe++], X -= 3;
                      X && (G[h++] = le[oe++], X > 1 && (G[h++] = le[oe++]));
                    } else {
                      oe = h - ue;
                      do
                        G[h++] = G[oe++], G[h++] = G[oe++], G[h++] = G[oe++], X -= 3;
                      while (X > 2);
                      X && (G[h++] = G[oe++], X > 1 && (G[h++] = G[oe++]));
                    }
                  } else if ((P & 64) === 0) {
                    H = k[(H & 65535) + (E & (1 << P) - 1)];
                    continue r;
                  } else {
                    i.msg = "invalid distance code", s.mode = o;
                    break e;
                  }
                  break;
                }
            } else if ((P & 64) === 0) {
              H = _[(H & 65535) + (E & (1 << P) - 1)];
              continue t;
            } else if (P & 32) {
              s.mode = d;
              break e;
            } else {
              i.msg = "invalid literal/length code", s.mode = o;
              break e;
            }
            break;
          }
      } while (n < p && h < m);
    X = f >> 3, n -= X, f -= X << 3, E &= (1 << f) - 1, i.next_in = n, i.next_out = h, i.avail_in = n < p ? 5 + (p - n) : 5 - (n - p), i.avail_out = h < m ? 257 + (m - h) : 257 - (h - m), s.hold = E, s.bits = f;
  }, rr;
}
var ir, wi;
function qn() {
  if (wi) return ir;
  wi = 1;
  var o = Qe(), d = 15, c = 852, i = 592, y = 0, s = 1, n = 2, p = [
    /* Length codes 257..285 base */
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    13,
    15,
    17,
    19,
    23,
    27,
    31,
    35,
    43,
    51,
    59,
    67,
    83,
    99,
    115,
    131,
    163,
    195,
    227,
    258,
    0,
    0
  ], h = [
    /* Length codes 257..285 extra */
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    16,
    72,
    78
  ], S = [
    /* Distance codes 0..29 base */
    1,
    2,
    3,
    4,
    5,
    7,
    9,
    13,
    17,
    25,
    33,
    49,
    65,
    97,
    129,
    193,
    257,
    385,
    513,
    769,
    1025,
    1537,
    2049,
    3073,
    4097,
    6145,
    8193,
    12289,
    16385,
    24577,
    0,
    0
  ], m = [
    /* Distance codes 0..29 extra */
    16,
    16,
    16,
    16,
    17,
    17,
    18,
    18,
    19,
    19,
    20,
    20,
    21,
    21,
    22,
    22,
    23,
    23,
    24,
    24,
    25,
    25,
    26,
    26,
    27,
    27,
    28,
    28,
    29,
    29,
    64,
    64
  ];
  return ir = function(t, l, g, T, E, f, _, k) {
    var O = k.bits, F = 0, H = 0, P = 0, X = 0, ue = 0, oe = 0, le = 0, he = 0, G = 0, ee = 0, be, Se, C, A, N, te = null, ae = 0, fe, ne = new o.Buf16(d + 1), me = new o.Buf16(d + 1), ye = null, ve = 0, w, b, M;
    for (F = 0; F <= d; F++)
      ne[F] = 0;
    for (H = 0; H < T; H++)
      ne[l[g + H]]++;
    for (ue = O, X = d; X >= 1 && ne[X] === 0; X--)
      ;
    if (ue > X && (ue = X), X === 0)
      return E[f++] = 1 << 24 | 64 << 16 | 0, E[f++] = 1 << 24 | 64 << 16 | 0, k.bits = 1, 0;
    for (P = 1; P < X && ne[P] === 0; P++)
      ;
    for (ue < P && (ue = P), he = 1, F = 1; F <= d; F++)
      if (he <<= 1, he -= ne[F], he < 0)
        return -1;
    if (he > 0 && (t === y || X !== 1))
      return -1;
    for (me[1] = 0, F = 1; F < d; F++)
      me[F + 1] = me[F] + ne[F];
    for (H = 0; H < T; H++)
      l[g + H] !== 0 && (_[me[l[g + H]]++] = H);
    if (t === y ? (te = ye = _, fe = 19) : t === s ? (te = p, ae -= 257, ye = h, ve -= 257, fe = 256) : (te = S, ye = m, fe = -1), ee = 0, H = 0, F = P, N = f, oe = ue, le = 0, C = -1, G = 1 << ue, A = G - 1, t === s && G > c || t === n && G > i)
      return 1;
    for (; ; ) {
      w = F - le, _[H] < fe ? (b = 0, M = _[H]) : _[H] > fe ? (b = ye[ve + _[H]], M = te[ae + _[H]]) : (b = 96, M = 0), be = 1 << F - le, Se = 1 << oe, P = Se;
      do
        Se -= be, E[N + (ee >> le) + Se] = w << 24 | b << 16 | M | 0;
      while (Se !== 0);
      for (be = 1 << F - 1; ee & be; )
        be >>= 1;
      if (be !== 0 ? (ee &= be - 1, ee += be) : ee = 0, H++, --ne[F] === 0) {
        if (F === X)
          break;
        F = l[g + _[H]];
      }
      if (F > ue && (ee & A) !== C) {
        for (le === 0 && (le = ue), N += P, oe = F - le, he = 1 << oe; oe + le < X && (he -= ne[oe + le], !(he <= 0)); )
          oe++, he <<= 1;
        if (G += 1 << oe, t === s && G > c || t === n && G > i)
          return 1;
        C = ee & A, E[C] = ue << 24 | oe << 16 | N - f | 0;
      }
    }
    return ee !== 0 && (E[N + ee] = F - le << 24 | 64 << 16 | 0), k.bits = ue, 0;
  }, ir;
}
var bi;
function Zn() {
  if (bi) return We;
  bi = 1;
  var o = Qe(), d = hn(), c = dn(), i = Un(), y = qn(), s = 0, n = 1, p = 2, h = 4, S = 5, m = 6, u = 0, t = 1, l = 2, g = -2, T = -3, E = -4, f = -5, _ = 8, k = 1, O = 2, F = 3, H = 4, P = 5, X = 6, ue = 7, oe = 8, le = 9, he = 10, G = 11, ee = 12, be = 13, Se = 14, C = 15, A = 16, N = 17, te = 18, ae = 19, fe = 20, ne = 21, me = 22, ye = 23, ve = 24, w = 25, b = 26, M = 27, $ = 28, ce = 29, Y = 30, se = 31, Pe = 32, De = 852, Ie = 592, xe = 15, re = xe;
  function Ae(R) {
    return (R >>> 24 & 255) + (R >>> 8 & 65280) + ((R & 65280) << 8) + ((R & 255) << 24);
  }
  function Ue() {
    this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new o.Buf16(320), this.work = new o.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
  }
  function Ne(R) {
    var L;
    return !R || !R.state ? g : (L = R.state, R.total_in = R.total_out = L.total = 0, R.msg = "", L.wrap && (R.adler = L.wrap & 1), L.mode = k, L.last = 0, L.havedict = 0, L.dmax = 32768, L.head = null, L.hold = 0, L.bits = 0, L.lencode = L.lendyn = new o.Buf32(De), L.distcode = L.distdyn = new o.Buf32(Ie), L.sane = 1, L.back = -1, u);
  }
  function B(R) {
    var L;
    return !R || !R.state ? g : (L = R.state, L.wsize = 0, L.whave = 0, L.wnext = 0, Ne(R));
  }
  function j(R, L) {
    var r, q;
    return !R || !R.state || (q = R.state, L < 0 ? (r = 0, L = -L) : (r = (L >> 4) + 1, L < 48 && (L &= 15)), L && (L < 8 || L > 15)) ? g : (q.window !== null && q.wbits !== L && (q.window = null), q.wrap = r, q.wbits = L, B(R));
  }
  function W(R, L) {
    var r, q;
    return R ? (q = new Ue(), R.state = q, q.window = null, r = j(R, L), r !== u && (R.state = null), r) : g;
  }
  function V(R) {
    return W(R, re);
  }
  var we = !0, pe, ke;
  function Ee(R) {
    if (we) {
      var L;
      for (pe = new o.Buf32(512), ke = new o.Buf32(32), L = 0; L < 144; )
        R.lens[L++] = 8;
      for (; L < 256; )
        R.lens[L++] = 9;
      for (; L < 280; )
        R.lens[L++] = 7;
      for (; L < 288; )
        R.lens[L++] = 8;
      for (y(n, R.lens, 0, 288, pe, 0, R.work, { bits: 9 }), L = 0; L < 32; )
        R.lens[L++] = 5;
      y(p, R.lens, 0, 32, ke, 0, R.work, { bits: 5 }), we = !1;
    }
    R.lencode = pe, R.lenbits = 9, R.distcode = ke, R.distbits = 5;
  }
  function Xe(R, L, r, q) {
    var de, e = R.state;
    return e.window === null && (e.wsize = 1 << e.wbits, e.wnext = 0, e.whave = 0, e.window = new o.Buf8(e.wsize)), q >= e.wsize ? (o.arraySet(e.window, L, r - e.wsize, e.wsize, 0), e.wnext = 0, e.whave = e.wsize) : (de = e.wsize - e.wnext, de > q && (de = q), o.arraySet(e.window, L, r - q, de, e.wnext), q -= de, q ? (o.arraySet(e.window, L, r - q, q, 0), e.wnext = q, e.whave = e.wsize) : (e.wnext += de, e.wnext === e.wsize && (e.wnext = 0), e.whave < e.wsize && (e.whave += de))), 0;
  }
  function v(R, L) {
    var r, q, de, e, I, z, a, x, D, ie, K, J, _e, Ge, Ce = 0, ge, Be, Le, je, ut, ht, Oe, qe, Fe = new o.Buf8(4), Ke, Ye, Tr = (
      /* permutation of code lengths */
      [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
    );
    if (!R || !R.state || !R.output || !R.input && R.avail_in !== 0)
      return g;
    r = R.state, r.mode === ee && (r.mode = be), I = R.next_out, de = R.output, a = R.avail_out, e = R.next_in, q = R.input, z = R.avail_in, x = r.hold, D = r.bits, ie = z, K = a, qe = u;
    e:
      for (; ; )
        switch (r.mode) {
          case k:
            if (r.wrap === 0) {
              r.mode = be;
              break;
            }
            for (; D < 16; ) {
              if (z === 0)
                break e;
              z--, x += q[e++] << D, D += 8;
            }
            if (r.wrap & 2 && x === 35615) {
              r.check = 0, Fe[0] = x & 255, Fe[1] = x >>> 8 & 255, r.check = c(r.check, Fe, 2, 0), x = 0, D = 0, r.mode = O;
              break;
            }
            if (r.flags = 0, r.head && (r.head.done = !1), !(r.wrap & 1) || /* check if zlib header allowed */
            (((x & 255) << 8) + (x >> 8)) % 31) {
              R.msg = "incorrect header check", r.mode = Y;
              break;
            }
            if ((x & 15) !== _) {
              R.msg = "unknown compression method", r.mode = Y;
              break;
            }
            if (x >>>= 4, D -= 4, Oe = (x & 15) + 8, r.wbits === 0)
              r.wbits = Oe;
            else if (Oe > r.wbits) {
              R.msg = "invalid window size", r.mode = Y;
              break;
            }
            r.dmax = 1 << Oe, R.adler = r.check = 1, r.mode = x & 512 ? he : ee, x = 0, D = 0;
            break;
          case O:
            for (; D < 16; ) {
              if (z === 0)
                break e;
              z--, x += q[e++] << D, D += 8;
            }
            if (r.flags = x, (r.flags & 255) !== _) {
              R.msg = "unknown compression method", r.mode = Y;
              break;
            }
            if (r.flags & 57344) {
              R.msg = "unknown header flags set", r.mode = Y;
              break;
            }
            r.head && (r.head.text = x >> 8 & 1), r.flags & 512 && (Fe[0] = x & 255, Fe[1] = x >>> 8 & 255, r.check = c(r.check, Fe, 2, 0)), x = 0, D = 0, r.mode = F;
          /* falls through */
          case F:
            for (; D < 32; ) {
              if (z === 0)
                break e;
              z--, x += q[e++] << D, D += 8;
            }
            r.head && (r.head.time = x), r.flags & 512 && (Fe[0] = x & 255, Fe[1] = x >>> 8 & 255, Fe[2] = x >>> 16 & 255, Fe[3] = x >>> 24 & 255, r.check = c(r.check, Fe, 4, 0)), x = 0, D = 0, r.mode = H;
          /* falls through */
          case H:
            for (; D < 16; ) {
              if (z === 0)
                break e;
              z--, x += q[e++] << D, D += 8;
            }
            r.head && (r.head.xflags = x & 255, r.head.os = x >> 8), r.flags & 512 && (Fe[0] = x & 255, Fe[1] = x >>> 8 & 255, r.check = c(r.check, Fe, 2, 0)), x = 0, D = 0, r.mode = P;
          /* falls through */
          case P:
            if (r.flags & 1024) {
              for (; D < 16; ) {
                if (z === 0)
                  break e;
                z--, x += q[e++] << D, D += 8;
              }
              r.length = x, r.head && (r.head.extra_len = x), r.flags & 512 && (Fe[0] = x & 255, Fe[1] = x >>> 8 & 255, r.check = c(r.check, Fe, 2, 0)), x = 0, D = 0;
            } else r.head && (r.head.extra = null);
            r.mode = X;
          /* falls through */
          case X:
            if (r.flags & 1024 && (J = r.length, J > z && (J = z), J && (r.head && (Oe = r.head.extra_len - r.length, r.head.extra || (r.head.extra = new Array(r.head.extra_len)), o.arraySet(
              r.head.extra,
              q,
              e,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              J,
              /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
              Oe
            )), r.flags & 512 && (r.check = c(r.check, q, J, e)), z -= J, e += J, r.length -= J), r.length))
              break e;
            r.length = 0, r.mode = ue;
          /* falls through */
          case ue:
            if (r.flags & 2048) {
              if (z === 0)
                break e;
              J = 0;
              do
                Oe = q[e + J++], r.head && Oe && r.length < 65536 && (r.head.name += String.fromCharCode(Oe));
              while (Oe && J < z);
              if (r.flags & 512 && (r.check = c(r.check, q, J, e)), z -= J, e += J, Oe)
                break e;
            } else r.head && (r.head.name = null);
            r.length = 0, r.mode = oe;
          /* falls through */
          case oe:
            if (r.flags & 4096) {
              if (z === 0)
                break e;
              J = 0;
              do
                Oe = q[e + J++], r.head && Oe && r.length < 65536 && (r.head.comment += String.fromCharCode(Oe));
              while (Oe && J < z);
              if (r.flags & 512 && (r.check = c(r.check, q, J, e)), z -= J, e += J, Oe)
                break e;
            } else r.head && (r.head.comment = null);
            r.mode = le;
          /* falls through */
          case le:
            if (r.flags & 512) {
              for (; D < 16; ) {
                if (z === 0)
                  break e;
                z--, x += q[e++] << D, D += 8;
              }
              if (x !== (r.check & 65535)) {
                R.msg = "header crc mismatch", r.mode = Y;
                break;
              }
              x = 0, D = 0;
            }
            r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0), R.adler = r.check = 0, r.mode = ee;
            break;
          case he:
            for (; D < 32; ) {
              if (z === 0)
                break e;
              z--, x += q[e++] << D, D += 8;
            }
            R.adler = r.check = Ae(x), x = 0, D = 0, r.mode = G;
          /* falls through */
          case G:
            if (r.havedict === 0)
              return R.next_out = I, R.avail_out = a, R.next_in = e, R.avail_in = z, r.hold = x, r.bits = D, l;
            R.adler = r.check = 1, r.mode = ee;
          /* falls through */
          case ee:
            if (L === S || L === m)
              break e;
          /* falls through */
          case be:
            if (r.last) {
              x >>>= D & 7, D -= D & 7, r.mode = M;
              break;
            }
            for (; D < 3; ) {
              if (z === 0)
                break e;
              z--, x += q[e++] << D, D += 8;
            }
            switch (r.last = x & 1, x >>>= 1, D -= 1, x & 3) {
              case 0:
                r.mode = Se;
                break;
              case 1:
                if (Ee(r), r.mode = fe, L === m) {
                  x >>>= 2, D -= 2;
                  break e;
                }
                break;
              case 2:
                r.mode = N;
                break;
              case 3:
                R.msg = "invalid block type", r.mode = Y;
            }
            x >>>= 2, D -= 2;
            break;
          case Se:
            for (x >>>= D & 7, D -= D & 7; D < 32; ) {
              if (z === 0)
                break e;
              z--, x += q[e++] << D, D += 8;
            }
            if ((x & 65535) !== (x >>> 16 ^ 65535)) {
              R.msg = "invalid stored block lengths", r.mode = Y;
              break;
            }
            if (r.length = x & 65535, x = 0, D = 0, r.mode = C, L === m)
              break e;
          /* falls through */
          case C:
            r.mode = A;
          /* falls through */
          case A:
            if (J = r.length, J) {
              if (J > z && (J = z), J > a && (J = a), J === 0)
                break e;
              o.arraySet(de, q, e, J, I), z -= J, e += J, a -= J, I += J, r.length -= J;
              break;
            }
            r.mode = ee;
            break;
          case N:
            for (; D < 14; ) {
              if (z === 0)
                break e;
              z--, x += q[e++] << D, D += 8;
            }
            if (r.nlen = (x & 31) + 257, x >>>= 5, D -= 5, r.ndist = (x & 31) + 1, x >>>= 5, D -= 5, r.ncode = (x & 15) + 4, x >>>= 4, D -= 4, r.nlen > 286 || r.ndist > 30) {
              R.msg = "too many length or distance symbols", r.mode = Y;
              break;
            }
            r.have = 0, r.mode = te;
          /* falls through */
          case te:
            for (; r.have < r.ncode; ) {
              for (; D < 3; ) {
                if (z === 0)
                  break e;
                z--, x += q[e++] << D, D += 8;
              }
              r.lens[Tr[r.have++]] = x & 7, x >>>= 3, D -= 3;
            }
            for (; r.have < 19; )
              r.lens[Tr[r.have++]] = 0;
            if (r.lencode = r.lendyn, r.lenbits = 7, Ke = { bits: r.lenbits }, qe = y(s, r.lens, 0, 19, r.lencode, 0, r.work, Ke), r.lenbits = Ke.bits, qe) {
              R.msg = "invalid code lengths set", r.mode = Y;
              break;
            }
            r.have = 0, r.mode = ae;
          /* falls through */
          case ae:
            for (; r.have < r.nlen + r.ndist; ) {
              for (; Ce = r.lencode[x & (1 << r.lenbits) - 1], ge = Ce >>> 24, Be = Ce >>> 16 & 255, Le = Ce & 65535, !(ge <= D); ) {
                if (z === 0)
                  break e;
                z--, x += q[e++] << D, D += 8;
              }
              if (Le < 16)
                x >>>= ge, D -= ge, r.lens[r.have++] = Le;
              else {
                if (Le === 16) {
                  for (Ye = ge + 2; D < Ye; ) {
                    if (z === 0)
                      break e;
                    z--, x += q[e++] << D, D += 8;
                  }
                  if (x >>>= ge, D -= ge, r.have === 0) {
                    R.msg = "invalid bit length repeat", r.mode = Y;
                    break;
                  }
                  Oe = r.lens[r.have - 1], J = 3 + (x & 3), x >>>= 2, D -= 2;
                } else if (Le === 17) {
                  for (Ye = ge + 3; D < Ye; ) {
                    if (z === 0)
                      break e;
                    z--, x += q[e++] << D, D += 8;
                  }
                  x >>>= ge, D -= ge, Oe = 0, J = 3 + (x & 7), x >>>= 3, D -= 3;
                } else {
                  for (Ye = ge + 7; D < Ye; ) {
                    if (z === 0)
                      break e;
                    z--, x += q[e++] << D, D += 8;
                  }
                  x >>>= ge, D -= ge, Oe = 0, J = 11 + (x & 127), x >>>= 7, D -= 7;
                }
                if (r.have + J > r.nlen + r.ndist) {
                  R.msg = "invalid bit length repeat", r.mode = Y;
                  break;
                }
                for (; J--; )
                  r.lens[r.have++] = Oe;
              }
            }
            if (r.mode === Y)
              break;
            if (r.lens[256] === 0) {
              R.msg = "invalid code -- missing end-of-block", r.mode = Y;
              break;
            }
            if (r.lenbits = 9, Ke = { bits: r.lenbits }, qe = y(n, r.lens, 0, r.nlen, r.lencode, 0, r.work, Ke), r.lenbits = Ke.bits, qe) {
              R.msg = "invalid literal/lengths set", r.mode = Y;
              break;
            }
            if (r.distbits = 6, r.distcode = r.distdyn, Ke = { bits: r.distbits }, qe = y(p, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, Ke), r.distbits = Ke.bits, qe) {
              R.msg = "invalid distances set", r.mode = Y;
              break;
            }
            if (r.mode = fe, L === m)
              break e;
          /* falls through */
          case fe:
            r.mode = ne;
          /* falls through */
          case ne:
            if (z >= 6 && a >= 258) {
              R.next_out = I, R.avail_out = a, R.next_in = e, R.avail_in = z, r.hold = x, r.bits = D, i(R, K), I = R.next_out, de = R.output, a = R.avail_out, e = R.next_in, q = R.input, z = R.avail_in, x = r.hold, D = r.bits, r.mode === ee && (r.back = -1);
              break;
            }
            for (r.back = 0; Ce = r.lencode[x & (1 << r.lenbits) - 1], ge = Ce >>> 24, Be = Ce >>> 16 & 255, Le = Ce & 65535, !(ge <= D); ) {
              if (z === 0)
                break e;
              z--, x += q[e++] << D, D += 8;
            }
            if (Be && (Be & 240) === 0) {
              for (je = ge, ut = Be, ht = Le; Ce = r.lencode[ht + ((x & (1 << je + ut) - 1) >> je)], ge = Ce >>> 24, Be = Ce >>> 16 & 255, Le = Ce & 65535, !(je + ge <= D); ) {
                if (z === 0)
                  break e;
                z--, x += q[e++] << D, D += 8;
              }
              x >>>= je, D -= je, r.back += je;
            }
            if (x >>>= ge, D -= ge, r.back += ge, r.length = Le, Be === 0) {
              r.mode = b;
              break;
            }
            if (Be & 32) {
              r.back = -1, r.mode = ee;
              break;
            }
            if (Be & 64) {
              R.msg = "invalid literal/length code", r.mode = Y;
              break;
            }
            r.extra = Be & 15, r.mode = me;
          /* falls through */
          case me:
            if (r.extra) {
              for (Ye = r.extra; D < Ye; ) {
                if (z === 0)
                  break e;
                z--, x += q[e++] << D, D += 8;
              }
              r.length += x & (1 << r.extra) - 1, x >>>= r.extra, D -= r.extra, r.back += r.extra;
            }
            r.was = r.length, r.mode = ye;
          /* falls through */
          case ye:
            for (; Ce = r.distcode[x & (1 << r.distbits) - 1], ge = Ce >>> 24, Be = Ce >>> 16 & 255, Le = Ce & 65535, !(ge <= D); ) {
              if (z === 0)
                break e;
              z--, x += q[e++] << D, D += 8;
            }
            if ((Be & 240) === 0) {
              for (je = ge, ut = Be, ht = Le; Ce = r.distcode[ht + ((x & (1 << je + ut) - 1) >> je)], ge = Ce >>> 24, Be = Ce >>> 16 & 255, Le = Ce & 65535, !(je + ge <= D); ) {
                if (z === 0)
                  break e;
                z--, x += q[e++] << D, D += 8;
              }
              x >>>= je, D -= je, r.back += je;
            }
            if (x >>>= ge, D -= ge, r.back += ge, Be & 64) {
              R.msg = "invalid distance code", r.mode = Y;
              break;
            }
            r.offset = Le, r.extra = Be & 15, r.mode = ve;
          /* falls through */
          case ve:
            if (r.extra) {
              for (Ye = r.extra; D < Ye; ) {
                if (z === 0)
                  break e;
                z--, x += q[e++] << D, D += 8;
              }
              r.offset += x & (1 << r.extra) - 1, x >>>= r.extra, D -= r.extra, r.back += r.extra;
            }
            if (r.offset > r.dmax) {
              R.msg = "invalid distance too far back", r.mode = Y;
              break;
            }
            r.mode = w;
          /* falls through */
          case w:
            if (a === 0)
              break e;
            if (J = K - a, r.offset > J) {
              if (J = r.offset - J, J > r.whave && r.sane) {
                R.msg = "invalid distance too far back", r.mode = Y;
                break;
              }
              J > r.wnext ? (J -= r.wnext, _e = r.wsize - J) : _e = r.wnext - J, J > r.length && (J = r.length), Ge = r.window;
            } else
              Ge = de, _e = I - r.offset, J = r.length;
            J > a && (J = a), a -= J, r.length -= J;
            do
              de[I++] = Ge[_e++];
            while (--J);
            r.length === 0 && (r.mode = ne);
            break;
          case b:
            if (a === 0)
              break e;
            de[I++] = r.length, a--, r.mode = ne;
            break;
          case M:
            if (r.wrap) {
              for (; D < 32; ) {
                if (z === 0)
                  break e;
                z--, x |= q[e++] << D, D += 8;
              }
              if (K -= a, R.total_out += K, r.total += K, K && (R.adler = r.check = /*UPDATE(state.check, put - _out, _out);*/
              r.flags ? c(r.check, de, K, I - K) : d(r.check, de, K, I - K)), K = a, (r.flags ? x : Ae(x)) !== r.check) {
                R.msg = "incorrect data check", r.mode = Y;
                break;
              }
              x = 0, D = 0;
            }
            r.mode = $;
          /* falls through */
          case $:
            if (r.wrap && r.flags) {
              for (; D < 32; ) {
                if (z === 0)
                  break e;
                z--, x += q[e++] << D, D += 8;
              }
              if (x !== (r.total & 4294967295)) {
                R.msg = "incorrect length check", r.mode = Y;
                break;
              }
              x = 0, D = 0;
            }
            r.mode = ce;
          /* falls through */
          case ce:
            qe = t;
            break e;
          case Y:
            qe = T;
            break e;
          case se:
            return E;
          case Pe:
          /* falls through */
          default:
            return g;
        }
    return R.next_out = I, R.avail_out = a, R.next_in = e, R.avail_in = z, r.hold = x, r.bits = D, (r.wsize || K !== R.avail_out && r.mode < Y && (r.mode < M || L !== h)) && Xe(R, R.output, R.next_out, K - R.avail_out), ie -= R.avail_in, K -= R.avail_out, R.total_in += ie, R.total_out += K, r.total += K, r.wrap && K && (R.adler = r.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
    r.flags ? c(r.check, de, K, R.next_out - K) : d(r.check, de, K, R.next_out - K)), R.data_type = r.bits + (r.last ? 64 : 0) + (r.mode === ee ? 128 : 0) + (r.mode === fe || r.mode === C ? 256 : 0), (ie === 0 && K === 0 || L === h) && qe === u && (qe = f), qe;
  }
  function U(R) {
    if (!R || !R.state)
      return g;
    var L = R.state;
    return L.window && (L.window = null), R.state = null, u;
  }
  function Z(R, L) {
    var r;
    return !R || !R.state || (r = R.state, (r.wrap & 2) === 0) ? g : (r.head = L, L.done = !1, u);
  }
  function Q(R, L) {
    var r = L.length, q, de, e;
    return !R || !R.state || (q = R.state, q.wrap !== 0 && q.mode !== G) ? g : q.mode === G && (de = 1, de = d(de, L, r, 0), de !== q.check) ? T : (e = Xe(R, L, r, r), e ? (q.mode = se, E) : (q.havedict = 1, u));
  }
  return We.inflateReset = B, We.inflateReset2 = j, We.inflateResetKeep = Ne, We.inflateInit = V, We.inflateInit2 = W, We.inflate = v, We.inflateEnd = U, We.inflateGetHeader = Z, We.inflateSetDictionary = Q, We.inflateInfo = "pako inflate (from Nodeca project)", We;
}
var nr, yi;
function pn() {
  return yi || (yi = 1, nr = {
    /* Allowed flush values; see deflate() and inflate() below for details */
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    /* Return codes for the compression/decompression functions. Negative values
    * are errors, positive values are used for special but normal events.
    */
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    //Z_MEM_ERROR:     -4,
    Z_BUF_ERROR: -5,
    //Z_VERSION_ERROR: -6,
    /* compression levels */
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    /* Possible values of the data_type field (though see inflate()) */
    Z_BINARY: 0,
    Z_TEXT: 1,
    //Z_ASCII:                1, // = Z_TEXT (deprecated)
    Z_UNKNOWN: 2,
    /* The deflate compression method */
    Z_DEFLATED: 8
    //Z_NULL:                 null // Use -1 or null inline, depending on var type
  }), nr;
}
var ar, xi;
function Wn() {
  if (xi) return ar;
  xi = 1;
  function o() {
    this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
  }
  return ar = o, ar;
}
var ki;
function Hn() {
  if (ki) return it;
  ki = 1;
  var o = Zn(), d = Qe(), c = cn(), i = pn(), y = Rr(), s = vn(), n = Wn(), p = Object.prototype.toString;
  function h(u) {
    if (!(this instanceof h)) return new h(u);
    this.options = d.assign({
      chunkSize: 16384,
      windowBits: 0,
      to: ""
    }, u || {});
    var t = this.options;
    t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, t.windowBits === 0 && (t.windowBits = -15)), t.windowBits >= 0 && t.windowBits < 16 && !(u && u.windowBits) && (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && (t.windowBits & 15) === 0 && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new s(), this.strm.avail_out = 0;
    var l = o.inflateInit2(
      this.strm,
      t.windowBits
    );
    if (l !== i.Z_OK)
      throw new Error(y[l]);
    if (this.header = new n(), o.inflateGetHeader(this.strm, this.header), t.dictionary && (typeof t.dictionary == "string" ? t.dictionary = c.string2buf(t.dictionary) : p.call(t.dictionary) === "[object ArrayBuffer]" && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (l = o.inflateSetDictionary(this.strm, t.dictionary), l !== i.Z_OK)))
      throw new Error(y[l]);
  }
  h.prototype.push = function(u, t) {
    var l = this.strm, g = this.options.chunkSize, T = this.options.dictionary, E, f, _, k, O, F = !1;
    if (this.ended)
      return !1;
    f = t === ~~t ? t : t === !0 ? i.Z_FINISH : i.Z_NO_FLUSH, typeof u == "string" ? l.input = c.binstring2buf(u) : p.call(u) === "[object ArrayBuffer]" ? l.input = new Uint8Array(u) : l.input = u, l.next_in = 0, l.avail_in = l.input.length;
    do {
      if (l.avail_out === 0 && (l.output = new d.Buf8(g), l.next_out = 0, l.avail_out = g), E = o.inflate(l, i.Z_NO_FLUSH), E === i.Z_NEED_DICT && T && (E = o.inflateSetDictionary(this.strm, T)), E === i.Z_BUF_ERROR && F === !0 && (E = i.Z_OK, F = !1), E !== i.Z_STREAM_END && E !== i.Z_OK)
        return this.onEnd(E), this.ended = !0, !1;
      l.next_out && (l.avail_out === 0 || E === i.Z_STREAM_END || l.avail_in === 0 && (f === i.Z_FINISH || f === i.Z_SYNC_FLUSH)) && (this.options.to === "string" ? (_ = c.utf8border(l.output, l.next_out), k = l.next_out - _, O = c.buf2string(l.output, _), l.next_out = k, l.avail_out = g - k, k && d.arraySet(l.output, l.output, _, k, 0), this.onData(O)) : this.onData(d.shrinkBuf(l.output, l.next_out))), l.avail_in === 0 && l.avail_out === 0 && (F = !0);
    } while ((l.avail_in > 0 || l.avail_out === 0) && E !== i.Z_STREAM_END);
    return E === i.Z_STREAM_END && (f = i.Z_FINISH), f === i.Z_FINISH ? (E = o.inflateEnd(this.strm), this.onEnd(E), this.ended = !0, E === i.Z_OK) : (f === i.Z_SYNC_FLUSH && (this.onEnd(i.Z_OK), l.avail_out = 0), !0);
  }, h.prototype.onData = function(u) {
    this.chunks.push(u);
  }, h.prototype.onEnd = function(u) {
    u === i.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = d.flattenChunks(this.chunks)), this.chunks = [], this.err = u, this.msg = this.strm.msg;
  };
  function S(u, t) {
    var l = new h(t);
    if (l.push(u, !0), l.err)
      throw l.msg || y[l.err];
    return l.result;
  }
  function m(u, t) {
    return t = t || {}, t.raw = !0, S(u, t);
  }
  return it.Inflate = h, it.inflate = S, it.inflateRaw = m, it.ungzip = S, it;
}
var or, Si;
function $n() {
  if (Si) return or;
  Si = 1;
  var o = Qe().assign, d = Mn(), c = Hn(), i = pn(), y = {};
  return o(y, d, c, i), or = y, or;
}
var Ei;
function Yn() {
  if (Ei) return at;
  Ei = 1;
  var o = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", d = $n(), c = Re(), i = He(), y = o ? "uint8array" : "array";
  at.magic = "\b\0";
  function s(n, p) {
    i.call(this, "FlateWorker/" + n), this._pako = null, this._pakoAction = n, this._pakoOptions = p, this.meta = {};
  }
  return c.inherits(s, i), s.prototype.processChunk = function(n) {
    this.meta = n.meta, this._pako === null && this._createPako(), this._pako.push(c.transformTo(y, n.data), !1);
  }, s.prototype.flush = function() {
    i.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
  }, s.prototype.cleanUp = function() {
    i.prototype.cleanUp.call(this), this._pako = null;
  }, s.prototype._createPako = function() {
    this._pako = new d[this._pakoAction]({
      raw: !0,
      level: this._pakoOptions.level || -1
      // default compression
    });
    var n = this;
    this._pako.onData = function(p) {
      n.push({
        data: p,
        meta: n.meta
      });
    };
  }, at.compressWorker = function(n) {
    return new s("Deflate", n);
  }, at.uncompressWorker = function() {
    return new s("Inflate", {});
  }, at;
}
var Ci;
function _n() {
  if (Ci) return pt;
  Ci = 1;
  var o = He();
  return pt.STORE = {
    magic: "\0\0",
    compressWorker: function() {
      return new o("STORE compression");
    },
    uncompressWorker: function() {
      return new o("STORE decompression");
    }
  }, pt.DEFLATE = Yn(), pt;
}
var Ve = {}, Ri;
function gn() {
  return Ri || (Ri = 1, Ve.LOCAL_FILE_HEADER = "PK", Ve.CENTRAL_FILE_HEADER = "PK", Ve.CENTRAL_DIRECTORY_END = "PK", Ve.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", Ve.ZIP64_CENTRAL_DIRECTORY_END = "PK", Ve.DATA_DESCRIPTOR = "PK\x07\b"), Ve;
}
var fr, Ti;
function Gn() {
  if (Ti) return fr;
  Ti = 1;
  var o = Re(), d = He(), c = lt(), i = Er(), y = gn(), s = function(t, l) {
    var g = "", T;
    for (T = 0; T < l; T++)
      g += String.fromCharCode(t & 255), t = t >>> 8;
    return g;
  }, n = function(t, l) {
    var g = t;
    return t || (g = l ? 16893 : 33204), (g & 65535) << 16;
  }, p = function(t) {
    return (t || 0) & 63;
  }, h = function(t, l, g, T, E, f) {
    var _ = t.file, k = t.compression, O = f !== c.utf8encode, F = o.transformTo("string", f(_.name)), H = o.transformTo("string", c.utf8encode(_.name)), P = _.comment, X = o.transformTo("string", f(P)), ue = o.transformTo("string", c.utf8encode(P)), oe = H.length !== _.name.length, le = ue.length !== P.length, he, G, ee = "", be = "", Se = "", C = _.dir, A = _.date, N = {
      crc32: 0,
      compressedSize: 0,
      uncompressedSize: 0
    };
    (!l || g) && (N.crc32 = t.crc32, N.compressedSize = t.compressedSize, N.uncompressedSize = t.uncompressedSize);
    var te = 0;
    l && (te |= 8), !O && (oe || le) && (te |= 2048);
    var ae = 0, fe = 0;
    C && (ae |= 16), E === "UNIX" ? (fe = 798, ae |= n(_.unixPermissions, C)) : (fe = 20, ae |= p(_.dosPermissions)), he = A.getUTCHours(), he = he << 6, he = he | A.getUTCMinutes(), he = he << 5, he = he | A.getUTCSeconds() / 2, G = A.getUTCFullYear() - 1980, G = G << 4, G = G | A.getUTCMonth() + 1, G = G << 5, G = G | A.getUTCDate(), oe && (be = // Version
    s(1, 1) + // NameCRC32
    s(i(F), 4) + // UnicodeName
    H, ee += // Info-ZIP Unicode Path Extra Field
    "up" + // size
    s(be.length, 2) + // content
    be), le && (Se = // Version
    s(1, 1) + // CommentCRC32
    s(i(X), 4) + // UnicodeName
    ue, ee += // Info-ZIP Unicode Path Extra Field
    "uc" + // size
    s(Se.length, 2) + // content
    Se);
    var ne = "";
    ne += `
\0`, ne += s(te, 2), ne += k.magic, ne += s(he, 2), ne += s(G, 2), ne += s(N.crc32, 4), ne += s(N.compressedSize, 4), ne += s(N.uncompressedSize, 4), ne += s(F.length, 2), ne += s(ee.length, 2);
    var me = y.LOCAL_FILE_HEADER + ne + F + ee, ye = y.CENTRAL_FILE_HEADER + // version made by (00: DOS)
    s(fe, 2) + // file header (common to file and central directory)
    ne + // file comment length
    s(X.length, 2) + // disk number start
    "\0\0\0\0" + // external file attributes
    s(ae, 4) + // relative offset of local header
    s(T, 4) + // file name
    F + // extra field
    ee + // file comment
    X;
    return {
      fileRecord: me,
      dirRecord: ye
    };
  }, S = function(t, l, g, T, E) {
    var f = "", _ = o.transformTo("string", E(T));
    return f = y.CENTRAL_DIRECTORY_END + // number of this disk
    "\0\0\0\0" + // total number of entries in the central directory on this disk
    s(t, 2) + // total number of entries in the central directory
    s(t, 2) + // size of the central directory   4 bytes
    s(l, 4) + // offset of start of central directory with respect to the starting disk number
    s(g, 4) + // .ZIP file comment length
    s(_.length, 2) + // .ZIP file comment
    _, f;
  }, m = function(t) {
    var l = "";
    return l = y.DATA_DESCRIPTOR + // crc-32                          4 bytes
    s(t.crc32, 4) + // compressed size                 4 bytes
    s(t.compressedSize, 4) + // uncompressed size               4 bytes
    s(t.uncompressedSize, 4), l;
  };
  function u(t, l, g, T) {
    d.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = l, this.zipPlatform = g, this.encodeFileName = T, this.streamFiles = t, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
  }
  return o.inherits(u, d), u.prototype.push = function(t) {
    var l = t.meta.percent || 0, g = this.entriesCount, T = this._sources.length;
    this.accumulate ? this.contentBuffer.push(t) : (this.bytesWritten += t.data.length, d.prototype.push.call(this, {
      data: t.data,
      meta: {
        currentFile: this.currentFile,
        percent: g ? (l + 100 * (g - T - 1)) / g : 100
      }
    }));
  }, u.prototype.openedSource = function(t) {
    this.currentSourceOffset = this.bytesWritten, this.currentFile = t.file.name;
    var l = this.streamFiles && !t.file.dir;
    if (l) {
      var g = h(t, l, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
      this.push({
        data: g.fileRecord,
        meta: { percent: 0 }
      });
    } else
      this.accumulate = !0;
  }, u.prototype.closedSource = function(t) {
    this.accumulate = !1;
    var l = this.streamFiles && !t.file.dir, g = h(t, l, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
    if (this.dirRecords.push(g.dirRecord), l)
      this.push({
        data: m(t),
        meta: { percent: 100 }
      });
    else
      for (this.push({
        data: g.fileRecord,
        meta: { percent: 0 }
      }); this.contentBuffer.length; )
        this.push(this.contentBuffer.shift());
    this.currentFile = null;
  }, u.prototype.flush = function() {
    for (var t = this.bytesWritten, l = 0; l < this.dirRecords.length; l++)
      this.push({
        data: this.dirRecords[l],
        meta: { percent: 100 }
      });
    var g = this.bytesWritten - t, T = S(this.dirRecords.length, g, t, this.zipComment, this.encodeFileName);
    this.push({
      data: T,
      meta: { percent: 100 }
    });
  }, u.prototype.prepareNextSource = function() {
    this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
  }, u.prototype.registerPrevious = function(t) {
    this._sources.push(t);
    var l = this;
    return t.on("data", function(g) {
      l.processChunk(g);
    }), t.on("end", function() {
      l.closedSource(l.previous.streamInfo), l._sources.length ? l.prepareNextSource() : l.end();
    }), t.on("error", function(g) {
      l.error(g);
    }), this;
  }, u.prototype.resume = function() {
    if (!d.prototype.resume.call(this))
      return !1;
    if (!this.previous && this._sources.length)
      return this.prepareNextSource(), !0;
    if (!this.previous && !this._sources.length && !this.generatedError)
      return this.end(), !0;
  }, u.prototype.error = function(t) {
    var l = this._sources;
    if (!d.prototype.error.call(this, t))
      return !1;
    for (var g = 0; g < l.length; g++)
      try {
        l[g].error(t);
      } catch {
      }
    return !0;
  }, u.prototype.lock = function() {
    d.prototype.lock.call(this);
    for (var t = this._sources, l = 0; l < t.length; l++)
      t[l].lock();
  }, fr = u, fr;
}
var Ai;
function Kn() {
  if (Ai) return Xt;
  Ai = 1;
  var o = _n(), d = Gn(), c = function(i, y) {
    var s = i || y, n = o[s];
    if (!n)
      throw new Error(s + " is not a valid compression method !");
    return n;
  };
  return Xt.generateWorker = function(i, y, s) {
    var n = new d(y.streamFiles, s, y.platform, y.encodeFileName), p = 0;
    try {
      i.forEach(function(h, S) {
        p++;
        var m = c(S.options.compression, y.compression), u = S.options.compressionOptions || y.compressionOptions || {}, t = S.dir, l = S.date;
        S._compressWorker(m, u).withStreamInfo("file", {
          name: h,
          dir: t,
          date: l,
          comment: S.comment || "",
          unixPermissions: S.unixPermissions,
          dosPermissions: S.dosPermissions
        }).pipe(n);
      }), n.entriesCount = p;
    } catch (h) {
      n.error(h);
    }
    return n;
  }, Xt;
}
var sr, Oi;
function Xn() {
  if (Oi) return sr;
  Oi = 1;
  var o = Re(), d = He();
  function c(i, y) {
    d.call(this, "Nodejs stream input adapter for " + i), this._upstreamEnded = !1, this._bindStream(y);
  }
  return o.inherits(c, d), c.prototype._bindStream = function(i) {
    var y = this;
    this._stream = i, i.pause(), i.on("data", function(s) {
      y.push({
        data: s,
        meta: {
          percent: 0
        }
      });
    }).on("error", function(s) {
      y.isPaused ? this.generatedError = s : y.error(s);
    }).on("end", function() {
      y.isPaused ? y._upstreamEnded = !0 : y.end();
    });
  }, c.prototype.pause = function() {
    return d.prototype.pause.call(this) ? (this._stream.pause(), !0) : !1;
  }, c.prototype.resume = function() {
    return d.prototype.resume.call(this) ? (this._upstreamEnded ? this.end() : this._stream.resume(), !0) : !1;
  }, sr = c, sr;
}
var lr, Di;
function Vn() {
  if (Di) return lr;
  Di = 1;
  var o = lt(), d = Re(), c = He(), i = fn(), y = sn(), s = Cr(), n = Nn(), p = Kn(), h = bt(), S = Xn(), m = function(E, f, _) {
    var k = d.getTypeOf(f), O, F = d.extend(_ || {}, y);
    F.date = F.date || /* @__PURE__ */ new Date(), F.compression !== null && (F.compression = F.compression.toUpperCase()), typeof F.unixPermissions == "string" && (F.unixPermissions = parseInt(F.unixPermissions, 8)), F.unixPermissions && F.unixPermissions & 16384 && (F.dir = !0), F.dosPermissions && F.dosPermissions & 16 && (F.dir = !0), F.dir && (E = t(E)), F.createFolders && (O = u(E)) && l.call(this, O, !0);
    var H = k === "string" && F.binary === !1 && F.base64 === !1;
    (!_ || typeof _.binary > "u") && (F.binary = !H);
    var P = f instanceof s && f.uncompressedSize === 0;
    (P || F.dir || !f || f.length === 0) && (F.base64 = !1, F.binary = !0, f = "", F.compression = "STORE", k = "string");
    var X = null;
    f instanceof s || f instanceof c ? X = f : h.isNode && h.isStream(f) ? X = new S(E, f) : X = d.prepareContent(E, f, F.binary, F.optimizedBinaryString, F.base64);
    var ue = new n(E, X, F);
    this.files[E] = ue;
  }, u = function(E) {
    E.slice(-1) === "/" && (E = E.substring(0, E.length - 1));
    var f = E.lastIndexOf("/");
    return f > 0 ? E.substring(0, f) : "";
  }, t = function(E) {
    return E.slice(-1) !== "/" && (E += "/"), E;
  }, l = function(E, f) {
    return f = typeof f < "u" ? f : y.createFolders, E = t(E), this.files[E] || m.call(this, E, null, {
      dir: !0,
      createFolders: f
    }), this.files[E];
  };
  function g(E) {
    return Object.prototype.toString.call(E) === "[object RegExp]";
  }
  var T = {
    /**
     * @see loadAsync
     */
    load: function() {
      throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
    },
    /**
     * Call a callback function for each entry at this folder level.
     * @param {Function} cb the callback function:
     * function (relativePath, file) {...}
     * It takes 2 arguments : the relative path and the file.
     */
    forEach: function(E) {
      var f, _, k;
      for (f in this.files)
        k = this.files[f], _ = f.slice(this.root.length, f.length), _ && f.slice(0, this.root.length) === this.root && E(_, k);
    },
    /**
     * Filter nested files/folders with the specified function.
     * @param {Function} search the predicate to use :
     * function (relativePath, file) {...}
     * It takes 2 arguments : the relative path and the file.
     * @return {Array} An array of matching elements.
     */
    filter: function(E) {
      var f = [];
      return this.forEach(function(_, k) {
        E(_, k) && f.push(k);
      }), f;
    },
    /**
     * Add a file to the zip file, or search a file.
     * @param   {string|RegExp} name The name of the file to add (if data is defined),
     * the name of the file to find (if no data) or a regex to match files.
     * @param   {String|ArrayBuffer|Uint8Array|Buffer} data  The file data, either raw or base64 encoded
     * @param   {Object} o     File options
     * @return  {JSZip|Object|Array} this JSZip object (when adding a file),
     * a file (when searching by string) or an array of files (when searching by regex).
     */
    file: function(E, f, _) {
      if (arguments.length === 1)
        if (g(E)) {
          var k = E;
          return this.filter(function(F, H) {
            return !H.dir && k.test(F);
          });
        } else {
          var O = this.files[this.root + E];
          return O && !O.dir ? O : null;
        }
      else
        E = this.root + E, m.call(this, E, f, _);
      return this;
    },
    /**
     * Add a directory to the zip file, or search.
     * @param   {String|RegExp} arg The name of the directory to add, or a regex to search folders.
     * @return  {JSZip} an object with the new directory as the root, or an array containing matching folders.
     */
    folder: function(E) {
      if (!E)
        return this;
      if (g(E))
        return this.filter(function(O, F) {
          return F.dir && E.test(O);
        });
      var f = this.root + E, _ = l.call(this, f), k = this.clone();
      return k.root = _.name, k;
    },
    /**
     * Delete a file, or a directory and all sub-files, from the zip
     * @param {string} name the name of the file to delete
     * @return {JSZip} this JSZip object
     */
    remove: function(E) {
      E = this.root + E;
      var f = this.files[E];
      if (f || (E.slice(-1) !== "/" && (E += "/"), f = this.files[E]), f && !f.dir)
        delete this.files[E];
      else
        for (var _ = this.filter(function(O, F) {
          return F.name.slice(0, E.length) === E;
        }), k = 0; k < _.length; k++)
          delete this.files[_[k].name];
      return this;
    },
    /**
     * @deprecated This method has been removed in JSZip 3.0, please check the upgrade guide.
     */
    generate: function() {
      throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
    },
    /**
     * Generate the complete zip file as an internal stream.
     * @param {Object} options the options to generate the zip file :
     * - compression, "STORE" by default.
     * - type, "base64" by default. Values are : string, base64, uint8array, arraybuffer, blob.
     * @return {StreamHelper} the streamed zip file.
     */
    generateInternalStream: function(E) {
      var f, _ = {};
      try {
        if (_ = d.extend(E || {}, {
          streamFiles: !1,
          compression: "STORE",
          compressionOptions: null,
          type: "",
          platform: "DOS",
          comment: null,
          mimeType: "application/zip",
          encodeFileName: o.utf8encode
        }), _.type = _.type.toLowerCase(), _.compression = _.compression.toUpperCase(), _.type === "binarystring" && (_.type = "string"), !_.type)
          throw new Error("No output type specified.");
        d.checkSupport(_.type), (_.platform === "darwin" || _.platform === "freebsd" || _.platform === "linux" || _.platform === "sunos") && (_.platform = "UNIX"), _.platform === "win32" && (_.platform = "DOS");
        var k = _.comment || this.comment || "";
        f = p.generateWorker(this, _, k);
      } catch (O) {
        f = new c("error"), f.error(O);
      }
      return new i(f, _.type || "string", _.mimeType);
    },
    /**
     * Generate the complete zip file asynchronously.
     * @see generateInternalStream
     */
    generateAsync: function(E, f) {
      return this.generateInternalStream(E).accumulate(f);
    },
    /**
     * Generate the complete zip file asynchronously.
     * @see generateInternalStream
     */
    generateNodeStream: function(E, f) {
      return E = E || {}, E.type || (E.type = "nodebuffer"), this.generateInternalStream(E).toNodejsStream(f);
    }
  };
  return lr = T, lr;
}
var ur, Ii;
function mn() {
  if (Ii) return ur;
  Ii = 1;
  var o = Re();
  function d(c) {
    this.data = c, this.length = c.length, this.index = 0, this.zero = 0;
  }
  return d.prototype = {
    /**
     * Check that the offset will not go too far.
     * @param {string} offset the additional offset to check.
     * @throws {Error} an Error if the offset is out of bounds.
     */
    checkOffset: function(c) {
      this.checkIndex(this.index + c);
    },
    /**
     * Check that the specified index will not be too far.
     * @param {string} newIndex the index to check.
     * @throws {Error} an Error if the index is out of bounds.
     */
    checkIndex: function(c) {
      if (this.length < this.zero + c || c < 0)
        throw new Error("End of data reached (data length = " + this.length + ", asked index = " + c + "). Corrupted zip ?");
    },
    /**
     * Change the index.
     * @param {number} newIndex The new index.
     * @throws {Error} if the new index is out of the data.
     */
    setIndex: function(c) {
      this.checkIndex(c), this.index = c;
    },
    /**
     * Skip the next n bytes.
     * @param {number} n the number of bytes to skip.
     * @throws {Error} if the new index is out of the data.
     */
    skip: function(c) {
      this.setIndex(this.index + c);
    },
    /**
     * Get the byte at the specified index.
     * @param {number} i the index to use.
     * @return {number} a byte.
     */
    byteAt: function() {
    },
    /**
     * Get the next number with a given byte size.
     * @param {number} size the number of bytes to read.
     * @return {number} the corresponding number.
     */
    readInt: function(c) {
      var i = 0, y;
      for (this.checkOffset(c), y = this.index + c - 1; y >= this.index; y--)
        i = (i << 8) + this.byteAt(y);
      return this.index += c, i;
    },
    /**
     * Get the next string with a given byte size.
     * @param {number} size the number of bytes to read.
     * @return {string} the corresponding string.
     */
    readString: function(c) {
      return o.transformTo("string", this.readData(c));
    },
    /**
     * Get raw data without conversion, <size> bytes.
     * @param {number} size the number of bytes to read.
     * @return {Object} the raw data, implementation specific.
     */
    readData: function() {
    },
    /**
     * Find the last occurrence of a zip signature (4 bytes).
     * @param {string} sig the signature to find.
     * @return {number} the index of the last occurrence, -1 if not found.
     */
    lastIndexOfSignature: function() {
    },
    /**
     * Read the signature (4 bytes) at the current position and compare it with sig.
     * @param {string} sig the expected signature
     * @return {boolean} true if the signature matches, false otherwise.
     */
    readAndCheckSignature: function() {
    },
    /**
     * Get the next date.
     * @return {Date} the date.
     */
    readDate: function() {
      var c = this.readInt(4);
      return new Date(Date.UTC(
        (c >> 25 & 127) + 1980,
        // year
        (c >> 21 & 15) - 1,
        // month
        c >> 16 & 31,
        // day
        c >> 11 & 31,
        // hour
        c >> 5 & 63,
        // minute
        (c & 31) << 1
      ));
    }
  }, ur = d, ur;
}
var hr, Bi;
function wn() {
  if (Bi) return hr;
  Bi = 1;
  var o = mn(), d = Re();
  function c(i) {
    o.call(this, i);
    for (var y = 0; y < this.data.length; y++)
      i[y] = i[y] & 255;
  }
  return d.inherits(c, o), c.prototype.byteAt = function(i) {
    return this.data[this.zero + i];
  }, c.prototype.lastIndexOfSignature = function(i) {
    for (var y = i.charCodeAt(0), s = i.charCodeAt(1), n = i.charCodeAt(2), p = i.charCodeAt(3), h = this.length - 4; h >= 0; --h)
      if (this.data[h] === y && this.data[h + 1] === s && this.data[h + 2] === n && this.data[h + 3] === p)
        return h - this.zero;
    return -1;
  }, c.prototype.readAndCheckSignature = function(i) {
    var y = i.charCodeAt(0), s = i.charCodeAt(1), n = i.charCodeAt(2), p = i.charCodeAt(3), h = this.readData(4);
    return y === h[0] && s === h[1] && n === h[2] && p === h[3];
  }, c.prototype.readData = function(i) {
    if (this.checkOffset(i), i === 0)
      return [];
    var y = this.data.slice(this.zero + this.index, this.zero + this.index + i);
    return this.index += i, y;
  }, hr = c, hr;
}
var dr, Fi;
function Jn() {
  if (Fi) return dr;
  Fi = 1;
  var o = mn(), d = Re();
  function c(i) {
    o.call(this, i);
  }
  return d.inherits(c, o), c.prototype.byteAt = function(i) {
    return this.data.charCodeAt(this.zero + i);
  }, c.prototype.lastIndexOfSignature = function(i) {
    return this.data.lastIndexOf(i) - this.zero;
  }, c.prototype.readAndCheckSignature = function(i) {
    var y = this.readData(4);
    return i === y;
  }, c.prototype.readData = function(i) {
    this.checkOffset(i);
    var y = this.data.slice(this.zero + this.index, this.zero + this.index + i);
    return this.index += i, y;
  }, dr = c, dr;
}
var cr, zi;
function bn() {
  if (zi) return cr;
  zi = 1;
  var o = wn(), d = Re();
  function c(i) {
    o.call(this, i);
  }
  return d.inherits(c, o), c.prototype.readData = function(i) {
    if (this.checkOffset(i), i === 0)
      return new Uint8Array(0);
    var y = this.data.subarray(this.zero + this.index, this.zero + this.index + i);
    return this.index += i, y;
  }, cr = c, cr;
}
var vr, Li;
function Qn() {
  if (Li) return vr;
  Li = 1;
  var o = bn(), d = Re();
  function c(i) {
    o.call(this, i);
  }
  return d.inherits(c, o), c.prototype.readData = function(i) {
    this.checkOffset(i);
    var y = this.data.slice(this.zero + this.index, this.zero + this.index + i);
    return this.index += i, y;
  }, vr = c, vr;
}
var pr, Ni;
function yn() {
  if (Ni) return pr;
  Ni = 1;
  var o = Re(), d = Je(), c = wn(), i = Jn(), y = Qn(), s = bn();
  return pr = function(n) {
    var p = o.getTypeOf(n);
    return o.checkSupport(p), p === "string" && !d.uint8array ? new i(n) : p === "nodebuffer" ? new y(n) : d.uint8array ? new s(o.transformTo("uint8array", n)) : new c(o.transformTo("array", n));
  }, pr;
}
var _r, Pi;
function ea() {
  if (Pi) return _r;
  Pi = 1;
  var o = yn(), d = Re(), c = Cr(), i = Er(), y = lt(), s = _n(), n = Je(), p = 0, h = 3, S = function(u) {
    for (var t in s)
      if (Object.prototype.hasOwnProperty.call(s, t) && s[t].magic === u)
        return s[t];
    return null;
  };
  function m(u, t) {
    this.options = u, this.loadOptions = t;
  }
  return m.prototype = {
    /**
     * say if the file is encrypted.
     * @return {boolean} true if the file is encrypted, false otherwise.
     */
    isEncrypted: function() {
      return (this.bitFlag & 1) === 1;
    },
    /**
     * say if the file has utf-8 filename/comment.
     * @return {boolean} true if the filename/comment is in utf-8, false otherwise.
     */
    useUTF8: function() {
      return (this.bitFlag & 2048) === 2048;
    },
    /**
     * Read the local part of a zip file and add the info in this object.
     * @param {DataReader} reader the reader to use.
     */
    readLocalPart: function(u) {
      var t, l;
      if (u.skip(22), this.fileNameLength = u.readInt(2), l = u.readInt(2), this.fileName = u.readData(this.fileNameLength), u.skip(l), this.compressedSize === -1 || this.uncompressedSize === -1)
        throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
      if (t = S(this.compressionMethod), t === null)
        throw new Error("Corrupted zip : compression " + d.pretty(this.compressionMethod) + " unknown (inner file : " + d.transformTo("string", this.fileName) + ")");
      this.decompressed = new c(this.compressedSize, this.uncompressedSize, this.crc32, t, u.readData(this.compressedSize));
    },
    /**
     * Read the central part of a zip file and add the info in this object.
     * @param {DataReader} reader the reader to use.
     */
    readCentralPart: function(u) {
      this.versionMadeBy = u.readInt(2), u.skip(2), this.bitFlag = u.readInt(2), this.compressionMethod = u.readString(2), this.date = u.readDate(), this.crc32 = u.readInt(4), this.compressedSize = u.readInt(4), this.uncompressedSize = u.readInt(4);
      var t = u.readInt(2);
      if (this.extraFieldsLength = u.readInt(2), this.fileCommentLength = u.readInt(2), this.diskNumberStart = u.readInt(2), this.internalFileAttributes = u.readInt(2), this.externalFileAttributes = u.readInt(4), this.localHeaderOffset = u.readInt(4), this.isEncrypted())
        throw new Error("Encrypted zip are not supported");
      u.skip(t), this.readExtraFields(u), this.parseZIP64ExtraField(u), this.fileComment = u.readData(this.fileCommentLength);
    },
    /**
     * Parse the external file attributes and get the unix/dos permissions.
     */
    processAttributes: function() {
      this.unixPermissions = null, this.dosPermissions = null;
      var u = this.versionMadeBy >> 8;
      this.dir = !!(this.externalFileAttributes & 16), u === p && (this.dosPermissions = this.externalFileAttributes & 63), u === h && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), !this.dir && this.fileNameStr.slice(-1) === "/" && (this.dir = !0);
    },
    /**
     * Parse the ZIP64 extra field and merge the info in the current ZipEntry.
     * @param {DataReader} reader the reader to use.
     */
    parseZIP64ExtraField: function() {
      if (this.extraFields[1]) {
        var u = o(this.extraFields[1].value);
        this.uncompressedSize === d.MAX_VALUE_32BITS && (this.uncompressedSize = u.readInt(8)), this.compressedSize === d.MAX_VALUE_32BITS && (this.compressedSize = u.readInt(8)), this.localHeaderOffset === d.MAX_VALUE_32BITS && (this.localHeaderOffset = u.readInt(8)), this.diskNumberStart === d.MAX_VALUE_32BITS && (this.diskNumberStart = u.readInt(4));
      }
    },
    /**
     * Read the central part of a zip file and add the info in this object.
     * @param {DataReader} reader the reader to use.
     */
    readExtraFields: function(u) {
      var t = u.index + this.extraFieldsLength, l, g, T;
      for (this.extraFields || (this.extraFields = {}); u.index + 4 < t; )
        l = u.readInt(2), g = u.readInt(2), T = u.readData(g), this.extraFields[l] = {
          id: l,
          length: g,
          value: T
        };
      u.setIndex(t);
    },
    /**
     * Apply an UTF8 transformation if needed.
     */
    handleUTF8: function() {
      var u = n.uint8array ? "uint8array" : "array";
      if (this.useUTF8())
        this.fileNameStr = y.utf8decode(this.fileName), this.fileCommentStr = y.utf8decode(this.fileComment);
      else {
        var t = this.findExtraFieldUnicodePath();
        if (t !== null)
          this.fileNameStr = t;
        else {
          var l = d.transformTo(u, this.fileName);
          this.fileNameStr = this.loadOptions.decodeFileName(l);
        }
        var g = this.findExtraFieldUnicodeComment();
        if (g !== null)
          this.fileCommentStr = g;
        else {
          var T = d.transformTo(u, this.fileComment);
          this.fileCommentStr = this.loadOptions.decodeFileName(T);
        }
      }
    },
    /**
     * Find the unicode path declared in the extra field, if any.
     * @return {String} the unicode path, null otherwise.
     */
    findExtraFieldUnicodePath: function() {
      var u = this.extraFields[28789];
      if (u) {
        var t = o(u.value);
        return t.readInt(1) !== 1 || i(this.fileName) !== t.readInt(4) ? null : y.utf8decode(t.readData(u.length - 5));
      }
      return null;
    },
    /**
     * Find the unicode comment declared in the extra field, if any.
     * @return {String} the unicode comment, null otherwise.
     */
    findExtraFieldUnicodeComment: function() {
      var u = this.extraFields[25461];
      if (u) {
        var t = o(u.value);
        return t.readInt(1) !== 1 || i(this.fileComment) !== t.readInt(4) ? null : y.utf8decode(t.readData(u.length - 5));
      }
      return null;
    }
  }, _r = m, _r;
}
var gr, ji;
function ta() {
  if (ji) return gr;
  ji = 1;
  var o = yn(), d = Re(), c = gn(), i = ea(), y = Je();
  function s(n) {
    this.files = [], this.loadOptions = n;
  }
  return s.prototype = {
    /**
     * Check that the reader is on the specified signature.
     * @param {string} expectedSignature the expected signature.
     * @throws {Error} if it is an other signature.
     */
    checkSignature: function(n) {
      if (!this.reader.readAndCheckSignature(n)) {
        this.reader.index -= 4;
        var p = this.reader.readString(4);
        throw new Error("Corrupted zip or bug: unexpected signature (" + d.pretty(p) + ", expected " + d.pretty(n) + ")");
      }
    },
    /**
     * Check if the given signature is at the given index.
     * @param {number} askedIndex the index to check.
     * @param {string} expectedSignature the signature to expect.
     * @return {boolean} true if the signature is here, false otherwise.
     */
    isSignature: function(n, p) {
      var h = this.reader.index;
      this.reader.setIndex(n);
      var S = this.reader.readString(4), m = S === p;
      return this.reader.setIndex(h), m;
    },
    /**
     * Read the end of the central directory.
     */
    readBlockEndOfCentral: function() {
      this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
      var n = this.reader.readData(this.zipCommentLength), p = y.uint8array ? "uint8array" : "array", h = d.transformTo(p, n);
      this.zipComment = this.loadOptions.decodeFileName(h);
    },
    /**
     * Read the end of the Zip 64 central directory.
     * Not merged with the method readEndOfCentral :
     * The end of central can coexist with its Zip64 brother,
     * I don't want to read the wrong number of bytes !
     */
    readBlockZip64EndOfCentral: function() {
      this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
      for (var n = this.zip64EndOfCentralSize - 44, p = 0, h, S, m; p < n; )
        h = this.reader.readInt(2), S = this.reader.readInt(4), m = this.reader.readData(S), this.zip64ExtensibleData[h] = {
          id: h,
          length: S,
          value: m
        };
    },
    /**
     * Read the end of the Zip 64 central directory locator.
     */
    readBlockZip64EndOfCentralLocator: function() {
      if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), this.disksCount > 1)
        throw new Error("Multi-volumes zip are not supported");
    },
    /**
     * Read the local files, based on the offset read in the central part.
     */
    readLocalFiles: function() {
      var n, p;
      for (n = 0; n < this.files.length; n++)
        p = this.files[n], this.reader.setIndex(p.localHeaderOffset), this.checkSignature(c.LOCAL_FILE_HEADER), p.readLocalPart(this.reader), p.handleUTF8(), p.processAttributes();
    },
    /**
     * Read the central directory.
     */
    readCentralDir: function() {
      var n;
      for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(c.CENTRAL_FILE_HEADER); )
        n = new i({
          zip64: this.zip64
        }, this.loadOptions), n.readCentralPart(this.reader), this.files.push(n);
      if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
        throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
    },
    /**
     * Read the end of central directory.
     */
    readEndOfCentral: function() {
      var n = this.reader.lastIndexOfSignature(c.CENTRAL_DIRECTORY_END);
      if (n < 0) {
        var p = !this.isSignature(0, c.LOCAL_FILE_HEADER);
        throw p ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
      }
      this.reader.setIndex(n);
      var h = n;
      if (this.checkSignature(c.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === d.MAX_VALUE_16BITS || this.diskWithCentralDirStart === d.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === d.MAX_VALUE_16BITS || this.centralDirRecords === d.MAX_VALUE_16BITS || this.centralDirSize === d.MAX_VALUE_32BITS || this.centralDirOffset === d.MAX_VALUE_32BITS) {
        if (this.zip64 = !0, n = this.reader.lastIndexOfSignature(c.ZIP64_CENTRAL_DIRECTORY_LOCATOR), n < 0)
          throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
        if (this.reader.setIndex(n), this.checkSignature(c.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, c.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(c.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
          throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
        this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(c.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
      }
      var S = this.centralDirOffset + this.centralDirSize;
      this.zip64 && (S += 20, S += 12 + this.zip64EndOfCentralSize);
      var m = h - S;
      if (m > 0)
        this.isSignature(h, c.CENTRAL_FILE_HEADER) || (this.reader.zero = m);
      else if (m < 0)
        throw new Error("Corrupted zip: missing " + Math.abs(m) + " bytes.");
    },
    prepareReader: function(n) {
      this.reader = o(n);
    },
    /**
     * Read a zip file and create ZipEntries.
     * @param {String|ArrayBuffer|Uint8Array|Buffer} data the binary string representing a zip file.
     */
    load: function(n) {
      this.prepareReader(n), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
    }
  }, gr = s, gr;
}
var mr, Mi;
function ra() {
  if (Mi) return mr;
  Mi = 1;
  var o = Re(), d = st(), c = lt(), i = ta(), y = un(), s = bt();
  function n(p) {
    return new d.Promise(function(h, S) {
      var m = p.decompressed.getContentWorker().pipe(new y());
      m.on("error", function(u) {
        S(u);
      }).on("end", function() {
        m.streamInfo.crc32 !== p.decompressed.crc32 ? S(new Error("Corrupted zip : CRC32 mismatch")) : h();
      }).resume();
    });
  }
  return mr = function(p, h) {
    var S = this;
    return h = o.extend(h || {}, {
      base64: !1,
      checkCRC32: !1,
      optimizedBinaryString: !1,
      createFolders: !1,
      decodeFileName: c.utf8decode
    }), s.isNode && s.isStream(p) ? d.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : o.prepareContent("the loaded zip file", p, !0, h.optimizedBinaryString, h.base64).then(function(m) {
      var u = new i(h);
      return u.load(m), u;
    }).then(function(u) {
      var t = [d.Promise.resolve(u)], l = u.files;
      if (h.checkCRC32)
        for (var g = 0; g < l.length; g++)
          t.push(n(l[g]));
      return d.Promise.all(t);
    }).then(function(u) {
      for (var t = u.shift(), l = t.files, g = 0; g < l.length; g++) {
        var T = l[g], E = T.fileNameStr, f = o.resolve(T.fileNameStr);
        S.file(f, T.decompressed, {
          binary: !0,
          optimizedBinaryString: !0,
          date: T.date,
          dir: T.dir,
          comment: T.fileCommentStr.length ? T.fileCommentStr : null,
          unixPermissions: T.unixPermissions,
          dosPermissions: T.dosPermissions,
          createFolders: h.createFolders
        }), T.dir || (S.file(f).unsafeOriginalName = E);
      }
      return t.zipComment.length && (S.comment = t.zipComment), S;
    });
  }, mr;
}
var wr, Ui;
function ia() {
  if (Ui) return wr;
  Ui = 1;
  function o() {
    if (!(this instanceof o))
      return new o();
    if (arguments.length)
      throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
    this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
      var d = new o();
      for (var c in this)
        typeof this[c] != "function" && (d[c] = this[c]);
      return d;
    };
  }
  return o.prototype = Vn(), o.prototype.loadAsync = ra(), o.support = Je(), o.defaults = sn(), o.version = "3.10.1", o.loadAsync = function(d, c) {
    return new o().loadAsync(d, c);
  }, o.external = st(), wr = o, wr;
}
var br, qi;
function na() {
  if (qi) return br;
  qi = 1;
  var o = _t, d = gt, c = parseInt("0777", 8);
  br = i.mkdirp = i.mkdirP = i;
  function i(y, s, n, p) {
    typeof s == "function" ? (n = s, s = {}) : (!s || typeof s != "object") && (s = { mode: s });
    var h = s.mode, S = s.fs || d;
    h === void 0 && (h = c), p || (p = null);
    var m = n || /* istanbul ignore next */
    function() {
    };
    y = o.resolve(y), S.mkdir(y, h, function(u) {
      if (!u)
        return p = p || y, m(null, p);
      switch (u.code) {
        case "ENOENT":
          if (o.dirname(y) === y) return m(u);
          i(o.dirname(y), s, function(t, l) {
            t ? m(t, l) : i(y, s, m, l);
          });
          break;
        // In the case of any other error, just see if there's a dir
        // there already.  If so, then hooray!  If not, then something
        // is borked.
        default:
          S.stat(y, function(t, l) {
            t || !l.isDirectory() ? m(u, p) : m(null, p);
          });
          break;
      }
    });
  }
  return i.sync = function y(s, n, p) {
    (!n || typeof n != "object") && (n = { mode: n });
    var h = n.mode, S = n.fs || d;
    h === void 0 && (h = c), p || (p = null), s = o.resolve(s);
    try {
      S.mkdirSync(s, h), p = p || s;
    } catch (u) {
      switch (u.code) {
        case "ENOENT":
          p = y(o.dirname(s), n, p), y(s, n, p);
          break;
        // In the case of any other error, just see if there's a dir
        // there already.  If so, then hooray!  If not, then something
        // is borked.
        default:
          var m;
          try {
            m = S.statSync(s);
          } catch {
            throw u;
          }
          if (!m.isDirectory()) throw u;
          break;
      }
    }
    return p;
  }, br;
}
var yr = { exports: {} }, Zi;
function aa() {
  return Zi || (Zi = 1, function() {
    var o, d = null, c = typeof window == "object" ? window : ze, i = !1, y = c.process, s = Array, n = Error, p = 0, h = 1, S = 2, m = "Symbol", u = "iterator", t = "species", l = m + "(" + t + ")", g = "return", T = "_uh", E = "_pt", f = "_st", _ = "Invalid this", k = "Invalid argument", O = `
From previous `, F = "Chaining cycle detected for promise", H = "Uncaught (in promise)", P = "rejectionHandled", X = "unhandledRejection", ue, oe, le = { e: d }, he = function() {
    }, G = /^.+\/node_modules\/yaku\/.+\n?/mg, ee = yr.exports = function(j) {
      var W = this, V;
      if (!C(W) || W._s !== o)
        throw ve(_);
      if (W._s = S, i && (W[E] = w()), j !== he) {
        if (!A(j))
          throw ve(k);
        V = ne(j)(
          se(W, h),
          se(W, p)
        ), V === le && re(W, p, V.e);
      }
    };
    ee.default = ee, Se(ee, {
      /**
       * Appends fulfillment and rejection handlers to the promise,
       * and returns a new promise resolving to the return value of the called handler.
       * @param  {Function} onFulfilled Optional. Called when the Promise is resolved.
       * @param  {Function} onRejected  Optional. Called when the Promise is rejected.
       * @return {Yaku} It will return a new Yaku which will resolve or reject after
       * @example
       * the current Promise.
       * ```js
       * var Promise = require('yaku');
       * var p = Promise.resolve(10);
       *
       * p.then((v) => {
       *     console.log(v);
       * });
       * ```
       */
      then: function(j, W) {
        if (this._s === void 0) throw ve();
        return Pe(
          this,
          Y(ee.speciesConstructor(this, ee)),
          j,
          W
        );
      },
      /**
       * The `catch()` method returns a Promise and deals with rejected cases only.
       * It behaves the same as calling `Promise.prototype.then(undefined, onRejected)`.
       * @param  {Function} onRejected A Function called when the Promise is rejected.
       * This function has one argument, the rejection reason.
       * @return {Yaku} A Promise that deals with rejected cases only.
       * @example
       * ```js
       * var Promise = require('yaku');
       * var p = Promise.reject(new Error("ERR"));
       *
       * p['catch']((v) => {
       *     console.log(v);
       * });
       * ```
       */
      catch: function(B) {
        return this.then(o, B);
      },
      // The number of current promises that attach to this Yaku instance.
      _pCount: 0,
      // The parent Yaku.
      _pre: d,
      // A unique type flag, it helps different versions of Yaku know each other.
      _Yaku: 1
    }), ee.resolve = function(j) {
      return ce(j) ? j : Ae(Y(this), j);
    }, ee.reject = function(j) {
      return re(Y(this), p, j);
    }, ee.race = function(j) {
      var W = this, V = Y(W), we = function(Ee) {
        re(V, h, Ee);
      }, pe = function(Ee) {
        re(V, p, Ee);
      }, ke = ne(ye)(j, function(Ee) {
        W.resolve(Ee).then(we, pe);
      });
      return ke === le ? W.reject(ke.e) : V;
    }, ee.all = function(j) {
      var W = this, V = Y(W), we = [], pe;
      function ke(Ee) {
        re(V, p, Ee);
      }
      return pe = ne(ye)(j, function(Ee, Xe) {
        W.resolve(Ee).then(function(v) {
          we[Xe] = v, --pe || re(V, h, we);
        }, ke);
      }), pe === le ? W.reject(pe.e) : (pe || re(V, h, []), V);
    }, ee.Symbol = c[m] || {}, ne(function() {
      Object.defineProperty(ee, be(), {
        get: function() {
          return this;
        }
      });
    })(), ee.speciesConstructor = function(B, j) {
      var W = B.constructor;
      return W && W[be()] || j;
    }, ee.unhandledRejection = function(B, j) {
      try {
        c.console.error(
          H,
          i ? j.longStack : Ie(B, j)
        );
      } catch {
      }
    }, ee.rejectionHandled = he, ee.enableLongStackTrace = function() {
      i = !0;
    }, ee.nextTick = y ? y.nextTick : function(B) {
      setTimeout(B);
    }, ee._Yaku = 1;
    function be() {
      return ee[m][t] || l;
    }
    function Se(B, j) {
      for (var W in j)
        B.prototype[W] = j[W];
      return B;
    }
    function C(B) {
      return B && typeof B == "object";
    }
    function A(B) {
      return typeof B == "function";
    }
    function N(B, j) {
      return B instanceof j;
    }
    function te(B) {
      return N(B, n);
    }
    function ae(B, j, W) {
      if (!j(B)) throw ve(W);
    }
    function fe() {
      try {
        return ue.apply(oe, arguments);
      } catch (B) {
        return le.e = B, le;
      }
    }
    function ne(B, j) {
      return ue = B, oe = j, fe;
    }
    function me(B, j) {
      var W = s(B), V = 0;
      function we() {
        for (var pe = 0; pe < V; )
          j(W[pe], W[pe + 1]), W[pe++] = o, W[pe++] = o;
        V = 0, W.length > B && (W.length = B);
      }
      return function(pe, ke) {
        W[V++] = pe, W[V++] = ke, V === 2 && ee.nextTick(we);
      };
    }
    function ye(B, j) {
      var W, V = 0, we, pe, ke;
      if (!B) throw ve(k);
      var Ee = B[ee[m][u]];
      if (A(Ee))
        we = Ee.call(B);
      else if (A(B.next))
        we = B;
      else if (N(B, s)) {
        for (W = B.length; V < W; )
          j(B[V], V++);
        return V;
      } else
        throw ve(k);
      for (; !(pe = we.next()).done; )
        if (ke = ne(j)(pe.value, V++), ke === le)
          throw A(we[g]) && we[g](), ke.e;
      return V;
    }
    function ve(B) {
      return new TypeError(B);
    }
    function w(B) {
      return (B ? "" : O) + new n().stack;
    }
    var b = me(999, function(B, j) {
      var W, V;
      if (V = B._s ? j._onFulfilled : j._onRejected, V === o) {
        re(j, B._s, B._v);
        return;
      }
      if (W = ne(xe)(V, B._v), W === le) {
        re(j, p, W.e);
        return;
      }
      Ae(j, W);
    }), M = me(9, function(B) {
      De(B) || (B[T] = 1, $(X, B));
    });
    function $(B, j) {
      var W = "on" + B.toLowerCase(), V = c[W];
      y && y.listeners(B).length ? B === X ? y.emit(B, j._v, j) : y.emit(B, j) : V ? V({ reason: j._v, promise: j }) : ee[B](j._v, j);
    }
    function ce(B) {
      return B && B._Yaku;
    }
    function Y(B) {
      if (ce(B)) return new B(he);
      var j, W, V;
      return j = new B(function(we, pe) {
        if (j) throw ve();
        W = we, V = pe;
      }), ae(W, A), ae(V, A), j;
    }
    function se(B, j) {
      return function(W) {
        i && (B[f] = w(!0)), j === h ? Ae(B, W) : re(B, j, W);
      };
    }
    function Pe(B, j, W, V) {
      return A(W) && (j._onFulfilled = W), A(V) && (B[T] && $(P, B), j._onRejected = V), i && (j._pre = B), B[B._pCount++] = j, B._s !== S && b(B, j), j;
    }
    function De(B) {
      if (B._umark)
        return !0;
      B._umark = !0;
      for (var j = 0, W = B._pCount, V; j < W; )
        if (V = B[j++], V._onRejected || De(V)) return !0;
    }
    function Ie(B, j) {
      var W = [];
      function V(we) {
        return W.push(we.replace(/^\s+|\s+$/g, ""));
      }
      return i && (j[f] && V(j[f]), function we(pe) {
        pe && E in pe && (we(pe._next), V(pe[E] + ""), we(pe._pre));
      }(j)), (B && B.stack ? B.stack : B) + (`
` + W.join(`
`)).replace(G, "");
    }
    function xe(B, j) {
      return B(j);
    }
    function re(B, j, W) {
      var V = 0, we = B._pCount;
      if (B._s === S)
        for (B._s = j, B._v = W, j === p && (i && te(W) && (W.longStack = Ie(W, B)), M(B)); V < we; )
          b(B, B[V++]);
      return B;
    }
    function Ae(B, j) {
      if (j === B && j)
        return re(B, p, ve(F)), B;
      if (j !== d && (A(j) || C(j))) {
        var W = ne(Ue)(j);
        if (W === le)
          return re(B, p, W.e), B;
        A(W) ? (i && ce(j) && (B._next = j), ce(j) ? Ne(B, j, W) : ee.nextTick(function() {
          Ne(B, j, W);
        })) : re(B, h, j);
      } else
        re(B, h, j);
      return B;
    }
    function Ue(B) {
      return B.then;
    }
    function Ne(B, j, W) {
      var V = ne(W, j)(function(we) {
        j && (j = d, Ae(B, we));
      }, function(we) {
        j && (j = d, re(B, p, we));
      });
      V === le && j && (re(B, p, V.e), j = d);
    }
  }()), yr.exports;
}
var xr, Wi;
function oa() {
  if (Wi) return xr;
  Wi = 1;
  var o = aa();
  return xr = {
    extendPrototype: function(d, c) {
      for (var i in c)
        d.prototype[i] = c[i];
      return d;
    },
    isFunction: function(d) {
      return typeof d == "function";
    },
    isNumber: function(d) {
      return typeof d == "number";
    },
    Promise: o,
    slice: [].slice
  }, xr;
}
var kr, Hi;
function fa() {
  if (Hi) return kr;
  Hi = 1;
  var o = oa(), d = o.isFunction;
  return kr = function(c, i) {
    return function(y, s, n, p, h) {
      var S = arguments.length, m, u, t, l;
      u = new o.Promise(function(E, f) {
        t = E, l = f;
      });
      function g(E, f) {
        E == null ? t(f) : l(E);
      }
      switch (S) {
        case 0:
          c.call(i, g);
          break;
        case 1:
          d(y) ? c.call(i, y) : c.call(i, y, g);
          break;
        case 2:
          d(s) ? c.call(i, y, s) : c.call(i, y, s, g);
          break;
        case 3:
          d(n) ? c.call(i, y, s, n) : c.call(i, y, s, n, g);
          break;
        case 4:
          d(p) ? c.call(i, y, s, n, p) : c.call(i, y, s, n, p, g);
          break;
        case 5:
          d(h) ? c.call(i, y, s, n, p, h) : c.call(i, y, s, n, p, h, g);
          break;
        default:
          m = new Array(S);
          for (var T = 0; T < S; T++)
            m[T] = arguments[T];
          if (d(m[S - 1]))
            return c.apply(i, m);
          m[T] = g, c.apply(i, m);
      }
      return u;
    };
  }, kr;
}
var Sr, $i;
function sa() {
  if ($i) return Sr;
  $i = 1;
  var o = gt, d = _t, c = ia(), i = na(), y = fa(), s = y(o.writeFile), n = y(o.readFile), p = y(i);
  function h(m) {
    function u(k, O, F, H) {
      var P = 0;
      return P += k, P += O << 8, P += F << 16, P += H << 24, P;
    }
    if (m[0] === 80 && m[1] === 75 && m[2] === 3 && m[3] === 4)
      return m;
    if (m[0] !== 67 || m[1] !== 114 || m[2] !== 50 || m[3] !== 52)
      throw new Error("Invalid header: Does not start with Cr24");
    var t = m[4] === 3, l = m[4] === 2;
    if (!l && !t || m[5] || m[6] || m[7])
      throw new Error("Unexpected crx format version number.");
    if (l) {
      var g = u(m[8], m[9], m[10], m[11]), T = u(m[12], m[13], m[14], m[15]), E = 16 + g + T;
      return m.slice(E, m.length);
    }
    var f = u(m[8], m[9], m[10], m[11]), _ = 12 + f;
    return m.slice(_, m.length);
  }
  function S(m, u) {
    var t = d.resolve(m), l = d.extname(m), g = d.basename(m, l), T = d.dirname(m);
    return u = u || d.resolve(T, g), n(t).then(function(E) {
      return c.loadAsync(h(E));
    }).then(function(E) {
      var f = Object.keys(E.files);
      return Promise.all(f.map(function(_) {
        var k = !E.files[_].dir, O = d.join(u, _), F = k && d.dirname(O) || O, H = E.files[_].async("nodebuffer");
        return p(F).then(function() {
          return k ? H : !1;
        }).then(function(P) {
          return P ? s(O, P) : !0;
        });
      }));
    });
  }
  return Sr = S, Sr;
}
var Yi;
function la() {
  return Yi || (Yi = 1, function(o) {
    Object.defineProperty(o, "__esModule", { value: !0 }), o.downloadChromeExtension = void 0;
    const d = gt, c = _t, i = Rn(), y = sa(), s = async (n, { forceDownload: p = !1, attempts: h = 5 } = {}) => {
      const S = (0, i.getPath)();
      d.existsSync(S) || await d.promises.mkdir(S, { recursive: !0 });
      const m = c.resolve(`${S}/${n}`);
      if (!d.existsSync(m) || p) {
        d.existsSync(m) && await d.promises.rmdir(m, {
          recursive: !0
        });
        const u = `https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${n}%26uc&prodversion=${process.versions.chrome}`, t = c.resolve(`${m}.crx`);
        try {
          await (0, i.downloadFile)(u, t);
          try {
            return await y(t, m), (0, i.changePermissions)(m, 755), m;
          } catch (l) {
            if (!d.existsSync(c.resolve(m, "manifest.json")))
              throw l;
          }
        } catch (l) {
          if (console.error(`Failed to fetch extension, trying ${h - 1} more times`), h <= 1)
            throw l;
          return await new Promise((g) => setTimeout(g, 200)), await (0, o.downloadChromeExtension)(n, {
            forceDownload: p,
            attempts: h - 1
          });
        }
      }
      return m;
    };
    o.downloadChromeExtension = s;
  }(yt)), yt;
}
var Gi;
function ua() {
  if (Gi) return Te;
  Gi = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.MOBX_DEVTOOLS = Te.REDUX_DEVTOOLS = Te.VUEJS_DEVTOOLS_BETA = Te.VUEJS_DEVTOOLS = Te.JQUERY_DEBUGGER = Te.BACKBONE_DEBUGGER = Te.REACT_DEVELOPER_TOOLS = Te.EMBER_INSPECTOR = void 0, Te.installExtension = c;
  const o = Xi, d = la();
  async function c(i, y = {}) {
    const { forceDownload: s, loadExtensionOptions: n, session: p } = y, h = p || o.session.defaultSession;
    if (process.type !== "browser")
      return Promise.reject(new Error("electron-devtools-installer can only be used from the main process"));
    if (Array.isArray(i))
      return i.reduce((t, l) => t.then(async (g) => {
        const T = await c(l, y);
        return [...g, T];
      }), Promise.resolve([]));
    let S;
    if (typeof i == "object" && i.id)
      S = i.id;
    else if (typeof i == "string")
      S = i;
    else
      throw new Error(`Invalid extensionReference passed in: "${i}"`);
    const m = h.getAllExtensions().find((t) => t.id === S);
    if (!s && m)
      return m;
    const u = await (0, d.downloadChromeExtension)(S, {
      forceDownload: s || !1
    });
    if (m?.id) {
      const t = new Promise((l) => {
        const g = (T, E) => {
          E.id === m.id && (h.removeListener("extension-unloaded", g), l());
        };
        h.on("extension-unloaded", g);
      });
      h.removeExtension(m.id), await t;
    }
    return h.loadExtension(u, n);
  }
  return Te.default = c, Te.EMBER_INSPECTOR = {
    id: "bmdblncegkenkacieihfhpjfppoconhi"
  }, Te.REACT_DEVELOPER_TOOLS = {
    id: "fmkadmapgofadopljbjfkapdkoienihi"
  }, Te.BACKBONE_DEBUGGER = {
    id: "bhljhndlimiafopmmhjlgfpnnchjjbhd"
  }, Te.JQUERY_DEBUGGER = {
    id: "dbhhnnnpaeobfddmlalhnehgclcmjimi"
  }, Te.VUEJS_DEVTOOLS = {
    id: "nhdogjmejiglipccpnnnanhbledajbpd"
  }, Te.VUEJS_DEVTOOLS_BETA = {
    id: "ljjemllljcmogpfapbkkighbhhppjdbg"
  }, Te.REDUX_DEVTOOLS = {
    id: "lmhkpmbekcpmknklioeibfkpmmfibljd"
  }, Te.MOBX_DEVTOOLS = {
    id: "pfgnfdagidkfgccljigdamigbcnndkod"
  }, Te;
}
var Ki = ua();
const da = /* @__PURE__ */ Cn({
  __proto__: null,
  default: Ki
}, [Ki]);
export {
  da as i
};
//# sourceMappingURL=index-BD6RMGei.js.map
