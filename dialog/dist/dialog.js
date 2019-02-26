(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, (global.fe = global.fe || {}, global.fe.dialog = factory()));
}(this, function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
  : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var _core = createCommonjsModule(function (module) {
  var core = module.exports = {
    version: '2.6.5'
  };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1 = _core.version;

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var _anObject = function (it) {
    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  });

  var document$1 = _global.document; // typeof document.createElement is 'object' in old IE


  var is = _isObject(document$1) && _isObject(document$1.createElement);

  var _domCreate = function (it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])
   // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string


  var _toPrimitive = function (it, S) {
    if (!_isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;
  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);
    P = _toPrimitive(P, true);
    _anObject(Attributes);
    if (_ie8DomDefine) try {
      return dP(O, P, Attributes);
    } catch (e) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var _objectDp = {
  	f: f
  };

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors ? function (object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var hasOwnProperty = {}.hasOwnProperty;

  var _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var id = 0;
  var px = Math.random();

  var _uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

  var _library = false;

  var _shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = _global[SHARED] || (_global[SHARED] = {});
  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: _core.version,
    mode: _library ? 'pure' : 'global',
    copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
  });
  });

  var _functionToString = _shared('native-function-to-string', Function.toString);

  var _redefine = createCommonjsModule(function (module) {
  var SRC = _uid('src');



  var TO_STRING = 'toString';
  var TPL = ('' + _functionToString).split(TO_STRING);

  _core.inspectSource = function (it) {
    return _functionToString.call(it);
  };

  (module.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
    if (O[key] === val) return;
    if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

    if (O === _global) {
      O[key] = val;
    } else if (!safe) {
      delete O[key];
      _hide(O, key, val);
    } else if (O[key]) {
      O[key] = val;
    } else {
      _hide(O, key, val);
    } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

  })(Function.prototype, TO_STRING, function toString() {
    return typeof this == 'function' && this[SRC] || _functionToString.call(this);
  });
  });

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  // optional / simple context binding


  var _ctx = function (fn, that, length) {
    _aFunction(fn);
    if (that === undefined) return fn;

    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };

      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };

      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }

    return function ()
    /* ...args */
    {
      return fn.apply(that, arguments);
    };
  };

  var PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) source = name;

    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

      out = (own ? target : source)[key]; // bind timers to global for call from export context

      exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out; // extend global

      if (target) _redefine(target, key, out, type & $export.U); // export

      if (exports[key] != out) _hide(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };

  _global.core = _core; // type bitmap

  $export.F = 1; // forced

  $export.G = 2; // global

  $export.S = 4; // static

  $export.P = 8; // proto

  $export.B = 16; // bind

  $export.W = 32; // wrap

  $export.U = 64; // safe

  $export.R = 128; // real proto method for `library`

  var _export = $export;

  var toString = {}.toString;

  var _cof = function (it) {
    return toString.call(it).slice(8, -1);
  };

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
   // eslint-disable-next-line no-prototype-builtins


  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof(it) == 'String' ? it.split('') : Object(it);
  };

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings




  var _toIobject = function (it) {
    return _iobject(_defined(it));
  };

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;

  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  // 7.1.15 ToLength


  var min = Math.min;

  var _toLength = function (it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var max = Math.max;
  var min$1 = Math.min;

  var _toAbsoluteIndex = function (index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };

  // false -> Array#indexOf
  // true  -> Array#includes






  var _arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject($this);
      var length = _toLength(O.length);
      var index = _toAbsoluteIndex(fromIndex, length);
      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare

      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++]; // eslint-disable-next-line no-self-compare

        if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };

  var shared = _shared('keys');



  var _sharedKey = function (key) {
    return shared[key] || (shared[key] = _uid(key));
  };

  var arrayIndexOf = _arrayIncludes(false);

  var IE_PROTO = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function (object, names) {
    var O = _toIobject(object);
    var i = 0;
    var result = [];
    var key;

    for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key); // Don't enum bug & hidden keys


    while (names.length > i) if (_has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }

    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)




  var _objectKeys = Object.keys || function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };

  var f$1 = Object.getOwnPropertySymbols;

  var _objectGops = {
  	f: f$1
  };

  var f$2 = {}.propertyIsEnumerable;

  var _objectPie = {
  	f: f$2
  };

  // 7.1.13 ToObject(argument)


  var _toObject = function (it) {
    return Object(_defined(it));
  };

  var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

  var _objectAssign = !$assign || _fails(function () {
    var A = {};
    var B = {}; // eslint-disable-next-line no-undef

    var S = Symbol();
    var K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) {
      B[k] = k;
    });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  }) ? function assign(target, source) {
    // eslint-disable-line no-unused-vars
    var T = _toObject(target);
    var aLen = arguments.length;
    var index = 1;
    var getSymbols = _objectGops.f;
    var isEnum = _objectPie.f;

    while (aLen > index) {
      var S = _iobject(arguments[index++]);
      var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;

      while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }

    return T;
  } : $assign;

  // 19.1.3.1 Object.assign(target, source)


  _export(_export.S + _export.F, 'Object', {
    assign: _objectAssign
  });

  var assign = _core.Object.assign;

  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)


  _export(_export.S + _export.F * !_descriptors, 'Object', {
    defineProperty: _objectDp.f
  });

  var $Object = _core.Object;

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ".dialog_c__1ccLh{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:999;color:656565;font-size:12px;text-align:center}.dialog_c__1ccLh[data-state=open],.dialog_c__1ccLh[data-state=opening]{background-color:rgba(35,35,35,.4);-webkit-transition:all .5s linear;transition:all .5s linear}.dialog_c__1ccLh[data-state=open] .dialog_lay__1sy-d,.dialog_c__1ccLh[data-state=opening] .dialog_lay__1sy-d{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:all .2s linear;transition:all .2s linear}.dialog_c__1ccLh,.dialog_c__1ccLh[data-state=close],.dialog_c__1ccLh[data-state=closing]{background-color:rgba(35,35,35,0);-webkit-transition:all .5s linear;transition:all .5s linear}.dialog_c__1ccLh .dialog_lay__1sy-d,.dialog_c__1ccLh[data-state=close] .dialog_lay__1sy-d,.dialog_c__1ccLh[data-state=closing] .dialog_lay__1sy-d{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transition:all .2s linear;transition:all .2s linear}.dialog_c__1ccLh:after{content:\"\";height:100%;width:0}.dialog_c__1ccLh .dialog_lay__1sy-d,.dialog_c__1ccLh:after{display:inline-block;vertical-align:middle}.dialog_c__1ccLh .dialog_lay__1sy-d{position:relative;width:448px;line-height:20px;color:#353535;background-color:#fff;text-align:left}.dialog_c__1ccLh .dialog_head__2KN0d{padding:0 24px;height:46px;line-height:46px;font-size:14px;font-weight:600;border-bottom:1px solid #f1f1f1}.dialog_c__1ccLh .dialog_body__2BrtO{padding:32px}.dialog_c__1ccLh .dialog_foot__1hHfr{margin:0;text-align:center;height:72px}.dialog_c__1ccLh .dialog_majorBtn__21JGp,.dialog_c__1ccLh .dialog_minorBtn__1u8nf{display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid #316ccb;padding:0 24px;height:32px;line-height:32px;cursor:pointer;vertical-align:top;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dialog_c__1ccLh .dialog_majorBtn__21JGp:focus,.dialog_c__1ccLh .dialog_minorBtn__1u8nf:focus{outline:none}.dialog_c__1ccLh .dialog_majorBtn__21JGp{margin-left:16px;color:#fff;background:#316ccb}.dialog_c__1ccLh .dialog_majorBtn__21JGp:hover{border-color:#407fe7;background:#407fe7}.dialog_c__1ccLh .dialog_minorBtn__1u8nf{color:#316ccb;background:#fff}.dialog_c__1ccLh .dialog_minorBtn__1u8nf:hover{color:#fff;background:#316ccb}.dialog_c__1ccLh .dialog_closeBtn__1Uhz0{position:absolute;top:14px;right:14px;width:17px;height:17px;cursor:pointer}.dialog_c__1ccLh .dialog_closeBtn__1Uhz0:after,.dialog_c__1ccLh .dialog_closeBtn__1Uhz0:before{position:absolute;background:#959595;content:\" \";-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-box-shadow:0 0 0 .1px #959595;box-shadow:0 0 0 .1px #959595}.dialog_c__1ccLh .dialog_closeBtn__1Uhz0:before{top:0;left:8px;width:1px;height:17px}.dialog_c__1ccLh .dialog_closeBtn__1Uhz0:after{top:8px;left:0;width:17px;height:1px}.dialog_c__1ccLh .dialog_closeBtn__1Uhz0:hover:after,.dialog_c__1ccLh .dialog_closeBtn__1Uhz0:hover:before{background:#316ccb;-webkit-box-shadow:0 0 0 .1px #316ccb;box-shadow:0 0 0 .1px #316ccb}";
  var style = {"c":"dialog_c__1ccLh","lay":"dialog_lay__1sy-d","head":"dialog_head__2KN0d","body":"dialog_body__2BrtO","foot":"dialog_foot__1hHfr","majorBtn":"dialog_majorBtn__21JGp","minorBtn":"dialog_minorBtn__1u8nf","closeBtn":"dialog_closeBtn__1Uhz0"};
  styleInject(css);

  /**
   * 初始化配置
   *
   * @param {*} ctx
   * @param {*} options
   */

  function initOpts(ctx, options) {
    var opts = {
      msg: '默认内容',
      title: '提示',
      cls: '',
      showHead: true,
      showFoot: true,
      showClose: true,
      showCancel: true,
      showConfirm: true,
      confirmBtnText: '确定',
      cancelBtnText: '取消',
      confirmBtnClass: 'confirm',
      cancelBtnClass: 'cancel',
      colseTime: 500,
      autoDestroy: true,
      confirm: function confirm() {},
      cancel: function cancel() {},
      close: function close() {}
    };
    Object.assign(opts, options);
    opts.cls = "".concat(style.c, " ").concat(opts.cls);
    ctx.option = opts;
  }
  /**
   * 初始化组件dom
   *
   * @param {*} ctx
   */


  function initDom(ctx) {
    var opts = ctx.option;
    var doc = window.document;
    var el = doc.createElement('div');
    ctx.el = el;
    el.className = opts.cls;

    var head = function () {
      if (!opts.showHead) {
        return "";
      }

      return "<div class=\"".concat(style.head, "\">").concat(opts.title, "</div>");
    }();

    var body = "<div class=".concat(style.body, ">").concat(opts.msg, "</div>");

    var foot = function () {
      if (!opts.showFoot) {
        return "";
      }

      var footHtml = '';

      if (opts.showCancel) {
        footHtml += "<button class=\"".concat(style.minorBtn, "\" data-event=\"cancel\">").concat(opts.cancelBtnText, "</button>");
      }

      if (opts.showConfirm) {
        footHtml += "<button class=\"".concat(style.majorBtn, "\" data-event=\"confirm\">").concat(opts.confirmBtnText, "</button>");
      }

      return "<div class=\"".concat(style.foot, "\">").concat(footHtml, "</div>");
    }();

    var closeBtnHtml = opts.showClose ? "<span class=\"".concat(style.closeBtn, "\" data-event=\"close\"></span>") : "";
    el.innerHTML = "<div class=\"".concat(style.lay, "\">").concat(closeBtnHtml).concat(head).concat(body).concat(foot, "</div>");
    setState(ctx, 'close');
    ctx.show();
    doc.querySelector('body').appendChild(el);
  }
  /**
   * 初始化组件事件
   *
   * @param {*} ctx
   */


  function initEvent(ctx) {
    var _this = this;

    ctx.el.addEventListener('click', function (ev) {
      var dataType = ev.target.getAttribute("data-event");

      if (!dataType) {
        return _this;
      }

      var fn = ctx.option[dataType];
      var isStopClose = false;

      var stopClose = function stopClose() {
        isStopClose = true;
      };

      typeof fn === 'function' && fn.call(ctx, dataType, stopClose, ctx.close);
      stopClose = null;
      fn = null;
      !isStopClose && ctx.close();
    });
  }
  /**
   * 设置动画css dom属性
   * 
   * @param {*} ctx
   */


  function setState(ctx, state) {
    ctx.el.setAttribute('data-state', state);
  }

  var Dialog =
  /*#__PURE__*/
  function () {
    function Dialog() {
      _classCallCheck(this, Dialog);

      initOpts(this, arguments);
      initDom(this);
      initEvent(this);
    }

    _createClass(Dialog, [{
      key: "show",
      value: function show() {
        var _this2 = this;

        this.el.style.display = 'block';
        setTimeout(function () {
          setState(_this2, 'opening');
          setTimeout(function () {
            setState(_this2, 'open');
          }, _this2.option.colseTime);
        }, 0);
      }
    }, {
      key: "close",
      value: function close() {
        var _this3 = this;

        setState(this, 'closing');
        setTimeout(function () {
          _this3.el.style.display = 'none';
          setState(_this3, 'close');
          _this3.autoDestroy && _this3.distroy(_this3);
        }, this.option.colseTime);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.el && this.el.parentNode) {
          this.el.parentNode.removeChild(this.el);
          this.el = null;
        }
      }
    }]);

    return Dialog;
  }();

  return Dialog;

}));
