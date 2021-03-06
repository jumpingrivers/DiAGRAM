/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./srcjs/customSlider.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bail/index.js":
/*!************************************!*\
  !*** ./node_modules/bail/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = bail;

function bail(err) {
  if (err) {
    throw err;
  }
}

/***/ }),

/***/ "./node_modules/character-entities-legacy/index.json":
/*!***********************************************************!*\
  !*** ./node_modules/character-entities-legacy/index.json ***!
  \***********************************************************/
/*! exports provided: AElig, AMP, Aacute, Acirc, Agrave, Aring, Atilde, Auml, COPY, Ccedil, ETH, Eacute, Ecirc, Egrave, Euml, GT, Iacute, Icirc, Igrave, Iuml, LT, Ntilde, Oacute, Ocirc, Ograve, Oslash, Otilde, Ouml, QUOT, REG, THORN, Uacute, Ucirc, Ugrave, Uuml, Yacute, aacute, acirc, acute, aelig, agrave, amp, aring, atilde, auml, brvbar, ccedil, cedil, cent, copy, curren, deg, divide, eacute, ecirc, egrave, eth, euml, frac12, frac14, frac34, gt, iacute, icirc, iexcl, igrave, iquest, iuml, laquo, lt, macr, micro, middot, nbsp, not, ntilde, oacute, ocirc, ograve, ordf, ordm, oslash, otilde, ouml, para, plusmn, pound, quot, raquo, reg, sect, shy, sup1, sup2, sup3, szlig, thorn, times, uacute, ucirc, ugrave, uml, uuml, yacute, yen, yuml, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"AElig\":\"Æ\",\"AMP\":\"&\",\"Aacute\":\"Á\",\"Acirc\":\"Â\",\"Agrave\":\"À\",\"Aring\":\"Å\",\"Atilde\":\"Ã\",\"Auml\":\"Ä\",\"COPY\":\"©\",\"Ccedil\":\"Ç\",\"ETH\":\"Ð\",\"Eacute\":\"É\",\"Ecirc\":\"Ê\",\"Egrave\":\"È\",\"Euml\":\"Ë\",\"GT\":\">\",\"Iacute\":\"Í\",\"Icirc\":\"Î\",\"Igrave\":\"Ì\",\"Iuml\":\"Ï\",\"LT\":\"<\",\"Ntilde\":\"Ñ\",\"Oacute\":\"Ó\",\"Ocirc\":\"Ô\",\"Ograve\":\"Ò\",\"Oslash\":\"Ø\",\"Otilde\":\"Õ\",\"Ouml\":\"Ö\",\"QUOT\":\"\\\"\",\"REG\":\"®\",\"THORN\":\"Þ\",\"Uacute\":\"Ú\",\"Ucirc\":\"Û\",\"Ugrave\":\"Ù\",\"Uuml\":\"Ü\",\"Yacute\":\"Ý\",\"aacute\":\"á\",\"acirc\":\"â\",\"acute\":\"´\",\"aelig\":\"æ\",\"agrave\":\"à\",\"amp\":\"&\",\"aring\":\"å\",\"atilde\":\"ã\",\"auml\":\"ä\",\"brvbar\":\"¦\",\"ccedil\":\"ç\",\"cedil\":\"¸\",\"cent\":\"¢\",\"copy\":\"©\",\"curren\":\"¤\",\"deg\":\"°\",\"divide\":\"÷\",\"eacute\":\"é\",\"ecirc\":\"ê\",\"egrave\":\"è\",\"eth\":\"ð\",\"euml\":\"ë\",\"frac12\":\"½\",\"frac14\":\"¼\",\"frac34\":\"¾\",\"gt\":\">\",\"iacute\":\"í\",\"icirc\":\"î\",\"iexcl\":\"¡\",\"igrave\":\"ì\",\"iquest\":\"¿\",\"iuml\":\"ï\",\"laquo\":\"«\",\"lt\":\"<\",\"macr\":\"¯\",\"micro\":\"µ\",\"middot\":\"·\",\"nbsp\":\" \",\"not\":\"¬\",\"ntilde\":\"ñ\",\"oacute\":\"ó\",\"ocirc\":\"ô\",\"ograve\":\"ò\",\"ordf\":\"ª\",\"ordm\":\"º\",\"oslash\":\"ø\",\"otilde\":\"õ\",\"ouml\":\"ö\",\"para\":\"¶\",\"plusmn\":\"±\",\"pound\":\"£\",\"quot\":\"\\\"\",\"raquo\":\"»\",\"reg\":\"®\",\"sect\":\"§\",\"shy\":\"­\",\"sup1\":\"¹\",\"sup2\":\"²\",\"sup3\":\"³\",\"szlig\":\"ß\",\"thorn\":\"þ\",\"times\":\"×\",\"uacute\":\"ú\",\"ucirc\":\"û\",\"ugrave\":\"ù\",\"uml\":\"¨\",\"uuml\":\"ü\",\"yacute\":\"ý\",\"yen\":\"¥\",\"yuml\":\"ÿ\"}");

/***/ }),

/***/ "./node_modules/character-reference-invalid/index.json":
/*!*************************************************************!*\
  !*** ./node_modules/character-reference-invalid/index.json ***!
  \*************************************************************/
/*! exports provided: 0, 128, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 142, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 158, 159, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"0\":\"�\",\"128\":\"€\",\"130\":\"‚\",\"131\":\"ƒ\",\"132\":\"„\",\"133\":\"…\",\"134\":\"†\",\"135\":\"‡\",\"136\":\"ˆ\",\"137\":\"‰\",\"138\":\"Š\",\"139\":\"‹\",\"140\":\"Œ\",\"142\":\"Ž\",\"145\":\"‘\",\"146\":\"’\",\"147\":\"“\",\"148\":\"”\",\"149\":\"•\",\"150\":\"–\",\"151\":\"—\",\"152\":\"˜\",\"153\":\"™\",\"154\":\"š\",\"155\":\"›\",\"156\":\"œ\",\"158\":\"ž\",\"159\":\"Ÿ\"}");

/***/ }),

/***/ "./node_modules/collapse-white-space/index.js":
/*!****************************************************!*\
  !*** ./node_modules/collapse-white-space/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = collapse; // `collapse(' \t\nbar \nbaz\t') // ' bar baz '`

function collapse(value) {
  return String(value).replace(/\s+/g, ' ');
}

/***/ }),

/***/ "./node_modules/extend/index.js":
/*!**************************************!*\
  !*** ./node_modules/extend/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(arr);
  }

  return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
  if (!obj || toStr.call(obj) !== '[object Object]') {
    return false;
  }

  var hasOwnConstructor = hasOwn.call(obj, 'constructor');
  var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf'); // Not own constructor property must be Object

  if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
    return false;
  } // Own properties are enumerated firstly, so to speed up,
  // if last one is own, then all properties are own.


  var key;

  for (key in obj) {
    /**/
  }

  return typeof key === 'undefined' || hasOwn.call(obj, key);
}; // If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target


var setProperty = function setProperty(target, options) {
  if (defineProperty && options.name === '__proto__') {
    defineProperty(target, options.name, {
      enumerable: true,
      configurable: true,
      value: options.newValue,
      writable: true
    });
  } else {
    target[options.name] = options.newValue;
  }
}; // Return undefined instead of __proto__ if '__proto__' is not an own property


var getProperty = function getProperty(obj, name) {
  if (name === '__proto__') {
    if (!hasOwn.call(obj, name)) {
      return void 0;
    } else if (gOPD) {
      // In early versions of node, obj['__proto__'] is buggy when obj has
      // __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
      return gOPD(obj, name).value;
    }
  }

  return obj[name];
};

module.exports = function extend() {
  var options, name, src, copy, copyIsArray, clone;
  var target = arguments[0];
  var i = 1;
  var length = arguments.length;
  var deep = false; // Handle a deep copy situation

  if (typeof target === 'boolean') {
    deep = target;
    target = arguments[1] || {}; // skip the boolean and the target

    i = 2;
  }

  if (target == null || _typeof(target) !== 'object' && typeof target !== 'function') {
    target = {};
  }

  for (; i < length; ++i) {
    options = arguments[i]; // Only deal with non-null/undefined values

    if (options != null) {
      // Extend the base object
      for (name in options) {
        src = getProperty(target, name);
        copy = getProperty(options, name); // Prevent never-ending loop

        if (target !== copy) {
          // Recurse if we're merging plain objects or arrays
          if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && isArray(src) ? src : [];
            } else {
              clone = src && isPlainObject(src) ? src : {};
            } // Never move original objects, clone them


            setProperty(target, {
              name: name,
              newValue: extend(deep, clone, copy)
            }); // Don't bring in undefined values
          } else if (typeof copy !== 'undefined') {
            setProperty(target, {
              name: name,
              newValue: copy
            });
          }
        }
      }
    }
  } // Return the modified object


  return target;
};

/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;

      var TempCtor = function TempCtor() {};

      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}

/***/ }),

/***/ "./node_modules/is-alphabetical/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-alphabetical/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = alphabetical; // Check if the given character code, or the character code at the first
// character, is alphabetical.

function alphabetical(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character;
  return code >= 97 && code <= 122 ||
  /* a-z */
  code >= 65 && code <= 90
  /* A-Z */
  ;
}

/***/ }),

/***/ "./node_modules/is-alphanumerical/index.js":
/*!*************************************************!*\
  !*** ./node_modules/is-alphanumerical/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabetical = __webpack_require__(/*! is-alphabetical */ "./node_modules/is-alphabetical/index.js");

var decimal = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js");

module.exports = alphanumerical; // Check if the given character code, or the character code at the first
// character, is alphanumerical.

function alphanumerical(character) {
  return alphabetical(character) || decimal(character);
}

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};

function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
} // For Node v0.10 support. Remove this eventually.


function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
}

/***/ }),

/***/ "./node_modules/is-decimal/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-decimal/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = decimal; // Check if the given character code, or the character code at the first
// character, is decimal.

function decimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character;
  return code >= 48 && code <= 57;
  /* 0-9 */
}

/***/ }),

/***/ "./node_modules/is-hexadecimal/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-hexadecimal/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = hexadecimal; // Check if the given character code, or the character code at the first
// character, is hexadecimal.

function hexadecimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character;
  return code >= 97
  /* a */
  && code <= 102 ||
  /* z */
  code >= 65
  /* A */
  && code <= 70
  /* Z */
  || code >= 48
  /* A */
  && code <= 57
  /* Z */
  ;
}

/***/ }),

/***/ "./node_modules/is-plain-obj/index.js":
/*!********************************************!*\
  !*** ./node_modules/is-plain-obj/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = Object.prototype.toString;

module.exports = function (x) {
  var prototype;
  return toString.call(x) === '[object Object]' && (prototype = Object.getPrototypeOf(x), prototype === null || prototype === Object.getPrototypeOf({}));
};

/***/ }),

/***/ "./node_modules/is-whitespace-character/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/is-whitespace-character/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = whitespace;
var fromCode = String.fromCharCode;
var re = /\s/; // Check if the given character code, or the character code at the first
// character, is a whitespace character.

function whitespace(character) {
  return re.test(typeof character === 'number' ? fromCode(character) : character.charAt(0));
}

/***/ }),

/***/ "./node_modules/is-word-character/index.js":
/*!*************************************************!*\
  !*** ./node_modules/is-word-character/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = wordCharacter;
var fromCode = String.fromCharCode;
var re = /\w/; // Check if the given character code, or the character code at the first
// character, is a word character.

function wordCharacter(character) {
  return re.test(typeof character === 'number' ? fromCode(character) : character.charAt(0));
}

/***/ }),

/***/ "./node_modules/markdown-escapes/index.js":
/*!************************************************!*\
  !*** ./node_modules/markdown-escapes/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = escapes;
var defaults = ['\\', '`', '*', '{', '}', '[', ']', '(', ')', '#', '+', '-', '.', '!', '_', '>'];
var gfm = defaults.concat(['~', '|']);
var commonmark = gfm.concat(['\n', '"', '$', '%', '&', "'", ',', '/', ':', ';', '<', '=', '?', '@', '^']);
escapes["default"] = defaults;
escapes.gfm = gfm;
escapes.commonmark = commonmark; // Get markdown escapes.

function escapes(options) {
  var settings = options || {};

  if (settings.commonmark) {
    return commonmark;
  }

  return settings.gfm ? gfm : defaults;
}

/***/ }),

/***/ "./node_modules/mdast-add-list-metadata/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/mdast-add-list-metadata/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var visitWithParents = __webpack_require__(/*! unist-util-visit-parents */ "./node_modules/unist-util-visit-parents/index.js");

function addListMetadata() {
  return function (ast) {
    visitWithParents(ast, 'list', function (listNode, parents) {
      var depth = 0,
          i,
          n;

      for (i = 0, n = parents.length; i < n; i++) {
        if (parents[i].type === 'list') depth += 1;
      }

      for (i = 0, n = listNode.children.length; i < n; i++) {
        var child = listNode.children[i];
        child.index = i;
        child.ordered = listNode.ordered;
      }

      listNode.depth = depth;
    });
    return ast;
  };
}

module.exports = addListMetadata;

/***/ }),

/***/ "./node_modules/nanoid/format.browser.js":
/*!***********************************************!*\
  !*** ./node_modules/nanoid/format.browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This file replaces `format.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.
module.exports = function (random, alphabet, size) {
  // We can’t use bytes bigger than the alphabet. To make bytes values closer
  // to the alphabet, we apply bitmask on them. We look for the closest
  // `2 ** x - 1` number, which will be bigger than alphabet size. If we have
  // 30 symbols in the alphabet, we will take 31 (00011111).
  // We do not use faster Math.clz32, because it is not available in browsers.
  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1; // Bitmask is not a perfect solution (in our example it will pass 31 bytes,
  // which is bigger than the alphabet). As a result, we will need more bytes,
  // than ID size, because we will refuse bytes bigger than the alphabet.
  // Every hardware random generator call is costly,
  // because we need to wait for entropy collection. This is why often it will
  // be faster to ask for few extra bytes in advance, to avoid additional calls.
  // Here we calculate how many random bytes should we call in advance.
  // It depends on ID length, mask / alphabet size and magic number 1.6
  // (which was selected according benchmarks).
  // -~f => Math.ceil(f) if n is float number
  // -~i => i + 1 if n is integer number

  var step = -~(1.6 * mask * size / alphabet.length);
  var id = '';

  while (true) {
    var bytes = random(step); // Compact alternative for `for (var i = 0; i < step; i++)`

    var i = step;

    while (i--) {
      // If random byte is bigger than alphabet even after bitmask,
      // we refuse it by `|| ''`.
      id += alphabet[bytes[i] & mask] || ''; // More compact than `id.length + 1 === size`

      if (id.length === +size) return id;
    }
  }
};

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "./node_modules/parse-entities/decode-entity.browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/parse-entities/decode-entity.browser.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-env browser */

var el;
var semicolon = 59; //  ';'

module.exports = decodeEntity;

function decodeEntity(characters) {
  var entity = '&' + characters + ';';

  var _char;

  el = el || document.createElement('i');
  el.innerHTML = entity;
  _char = el.textContent; // Some entities do not require the closing semicolon (`&not` - for instance),
  // which leads to situations where parsing the assumed entity of &notit; will
  // result in the string `¬it;`.  When we encounter a trailing semicolon after
  // parsing and the entity to decode was not a semicolon (`&semi;`), we can
  // assume that the matching was incomplete

  if (_char.charCodeAt(_char.length - 1) === semicolon && characters !== 'semi') {
    return false;
  } // If the decoded string is equal to the input, the entity was not valid


  return _char === entity ? false : _char;
}

/***/ }),

/***/ "./node_modules/parse-entities/index.js":
/*!**********************************************!*\
  !*** ./node_modules/parse-entities/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var legacy = __webpack_require__(/*! character-entities-legacy */ "./node_modules/character-entities-legacy/index.json");

var invalid = __webpack_require__(/*! character-reference-invalid */ "./node_modules/character-reference-invalid/index.json");

var decimal = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js");

var hexadecimal = __webpack_require__(/*! is-hexadecimal */ "./node_modules/is-hexadecimal/index.js");

var alphanumerical = __webpack_require__(/*! is-alphanumerical */ "./node_modules/is-alphanumerical/index.js");

var decodeEntity = __webpack_require__(/*! ./decode-entity */ "./node_modules/parse-entities/decode-entity.browser.js");

module.exports = parseEntities;
var own = {}.hasOwnProperty;
var fromCharCode = String.fromCharCode;
var noop = Function.prototype; // Default settings.

var defaults = {
  warning: null,
  reference: null,
  text: null,
  warningContext: null,
  referenceContext: null,
  textContext: null,
  position: {},
  additional: null,
  attribute: false,
  nonTerminated: true
}; // Characters.

var tab = 9; // '\t'

var lineFeed = 10; // '\n'

var formFeed = 12; //  '\f'

var space = 32; // ' '

var ampersand = 38; //  '&'

var semicolon = 59; //  ';'

var lessThan = 60; //  '<'

var equalsTo = 61; //  '='

var numberSign = 35; //  '#'

var uppercaseX = 88; //  'X'

var lowercaseX = 120; //  'x'

var replacementCharacter = 65533; // '�'
// Reference types.

var name = 'named';
var hexa = 'hexadecimal';
var deci = 'decimal'; // Map of bases.

var bases = {};
bases[hexa] = 16;
bases[deci] = 10; // Map of types to tests.
// Each type of character reference accepts different characters.
// This test is used to detect whether a reference has ended (as the semicolon
// is not strictly needed).

var tests = {};
tests[name] = alphanumerical;
tests[deci] = decimal;
tests[hexa] = hexadecimal; // Warning types.

var namedNotTerminated = 1;
var numericNotTerminated = 2;
var namedEmpty = 3;
var numericEmpty = 4;
var namedUnknown = 5;
var numericDisallowed = 6;
var numericProhibited = 7; // Warning messages.

var messages = {};
messages[namedNotTerminated] = 'Named character references must be terminated by a semicolon';
messages[numericNotTerminated] = 'Numeric character references must be terminated by a semicolon';
messages[namedEmpty] = 'Named character references cannot be empty';
messages[numericEmpty] = 'Numeric character references cannot be empty';
messages[namedUnknown] = 'Named character references must be known';
messages[numericDisallowed] = 'Numeric character references cannot be disallowed';
messages[numericProhibited] = 'Numeric character references cannot be outside the permissible Unicode range'; // Wrap to ensure clean parameters are given to `parse`.

function parseEntities(value, options) {
  var settings = {};
  var option;
  var key;

  if (!options) {
    options = {};
  }

  for (key in defaults) {
    option = options[key];
    settings[key] = option === null || option === undefined ? defaults[key] : option;
  }

  if (settings.position.indent || settings.position.start) {
    settings.indent = settings.position.indent || [];
    settings.position = settings.position.start;
  }

  return parse(value, settings);
} // Parse entities.
// eslint-disable-next-line complexity


function parse(value, settings) {
  var additional = settings.additional;
  var nonTerminated = settings.nonTerminated;
  var handleText = settings.text;
  var handleReference = settings.reference;
  var handleWarning = settings.warning;
  var textContext = settings.textContext;
  var referenceContext = settings.referenceContext;
  var warningContext = settings.warningContext;
  var pos = settings.position;
  var indent = settings.indent || [];
  var length = value.length;
  var index = 0;
  var lines = -1;
  var column = pos.column || 1;
  var line = pos.line || 1;
  var queue = '';
  var result = [];
  var entityCharacters;
  var namedEntity;
  var terminated;
  var characters;
  var character;
  var reference;
  var following;
  var warning;
  var reason;
  var output;
  var entity;
  var begin;
  var start;
  var type;
  var test;
  var prev;
  var next;
  var diff;
  var end;

  if (typeof additional === 'string') {
    additional = additional.charCodeAt(0);
  } // Cache the current point.


  prev = now(); // Wrap `handleWarning`.

  warning = handleWarning ? parseError : noop; // Ensure the algorithm walks over the first character and the end (inclusive).

  index--;
  length++;

  while (++index < length) {
    // If the previous character was a newline.
    if (character === lineFeed) {
      column = indent[lines] || 1;
    }

    character = value.charCodeAt(index);

    if (character === ampersand) {
      following = value.charCodeAt(index + 1); // The behaviour depends on the identity of the next character.

      if (following === tab || following === lineFeed || following === formFeed || following === space || following === ampersand || following === lessThan || following !== following || additional && following === additional) {
        // Not a character reference.
        // No characters are consumed, and nothing is returned.
        // This is not an error, either.
        queue += fromCharCode(character);
        column++;
        continue;
      }

      start = index + 1;
      begin = start;
      end = start;

      if (following === numberSign) {
        // Numerical entity.
        end = ++begin; // The behaviour further depends on the next character.

        following = value.charCodeAt(end);

        if (following === uppercaseX || following === lowercaseX) {
          // ASCII hex digits.
          type = hexa;
          end = ++begin;
        } else {
          // ASCII digits.
          type = deci;
        }
      } else {
        // Named entity.
        type = name;
      }

      entityCharacters = '';
      entity = '';
      characters = '';
      test = tests[type];
      end--;

      while (++end < length) {
        following = value.charCodeAt(end);

        if (!test(following)) {
          break;
        }

        characters += fromCharCode(following); // Check if we can match a legacy named reference.
        // If so, we cache that as the last viable named reference.
        // This ensures we do not need to walk backwards later.

        if (type === name && own.call(legacy, characters)) {
          entityCharacters = characters;
          entity = legacy[characters];
        }
      }

      terminated = value.charCodeAt(end) === semicolon;

      if (terminated) {
        end++;
        namedEntity = type === name ? decodeEntity(characters) : false;

        if (namedEntity) {
          entityCharacters = characters;
          entity = namedEntity;
        }
      }

      diff = 1 + end - start;

      if (!terminated && !nonTerminated) {// Empty.
      } else if (!characters) {
        // An empty (possible) entity is valid, unless it’s numeric (thus an
        // ampersand followed by an octothorp).
        if (type !== name) {
          warning(numericEmpty, diff);
        }
      } else if (type === name) {
        // An ampersand followed by anything unknown, and not terminated, is
        // invalid.
        if (terminated && !entity) {
          warning(namedUnknown, 1);
        } else {
          // If theres something after an entity name which is not known, cap
          // the reference.
          if (entityCharacters !== characters) {
            end = begin + entityCharacters.length;
            diff = 1 + end - begin;
            terminated = false;
          } // If the reference is not terminated, warn.


          if (!terminated) {
            reason = entityCharacters ? namedNotTerminated : namedEmpty;

            if (settings.attribute) {
              following = value.charCodeAt(end);

              if (following === equalsTo) {
                warning(reason, diff);
                entity = null;
              } else if (alphanumerical(following)) {
                entity = null;
              } else {
                warning(reason, diff);
              }
            } else {
              warning(reason, diff);
            }
          }
        }

        reference = entity;
      } else {
        if (!terminated) {
          // All non-terminated numeric entities are not rendered, and trigger a
          // warning.
          warning(numericNotTerminated, diff);
        } // When terminated and number, parse as either hexadecimal or decimal.


        reference = parseInt(characters, bases[type]); // Trigger a warning when the parsed number is prohibited, and replace
        // with replacement character.

        if (prohibited(reference)) {
          warning(numericProhibited, diff);
          reference = fromCharCode(replacementCharacter);
        } else if (reference in invalid) {
          // Trigger a warning when the parsed number is disallowed, and replace
          // by an alternative.
          warning(numericDisallowed, diff);
          reference = invalid[reference];
        } else {
          // Parse the number.
          output = ''; // Trigger a warning when the parsed number should not be used.

          if (disallowed(reference)) {
            warning(numericDisallowed, diff);
          } // Stringify the number.


          if (reference > 0xffff) {
            reference -= 0x10000;
            output += fromCharCode(reference >>> (10 & 0x3ff) | 0xd800);
            reference = 0xdc00 | reference & 0x3ff;
          }

          reference = output + fromCharCode(reference);
        }
      } // Found it!
      // First eat the queued characters as normal text, then eat an entity.


      if (reference) {
        flush();
        prev = now();
        index = end - 1;
        column += end - start + 1;
        result.push(reference);
        next = now();
        next.offset++;

        if (handleReference) {
          handleReference.call(referenceContext, reference, {
            start: prev,
            end: next
          }, value.slice(start - 1, end));
        }

        prev = next;
      } else {
        // If we could not find a reference, queue the checked characters (as
        // normal characters), and move the pointer to their end.
        // This is possible because we can be certain neither newlines nor
        // ampersands are included.
        characters = value.slice(start - 1, end);
        queue += characters;
        column += characters.length;
        index = end - 1;
      }
    } else {
      // Handle anything other than an ampersand, including newlines and EOF.
      if (character === 10 // Line feed
      ) {
          line++;
          lines++;
          column = 0;
        }

      if (character === character) {
        queue += fromCharCode(character);
        column++;
      } else {
        flush();
      }
    }
  } // Return the reduced nodes, and any possible warnings.


  return result.join(''); // Get current position.

  function now() {
    return {
      line: line,
      column: column,
      offset: index + (pos.offset || 0)
    };
  } // “Throw” a parse-error: a warning.


  function parseError(code, offset) {
    var position = now();
    position.column += offset;
    position.offset += offset;
    handleWarning.call(warningContext, messages[code], position, code);
  } // Flush `queue` (normal text).
  // Macro invoked before each entity and at the end of `value`.
  // Does nothing when `queue` is empty.


  function flush() {
    if (queue) {
      result.push(queue);

      if (handleText) {
        handleText.call(textContext, queue, {
          start: prev,
          end: now()
        });
      }

      queue = '';
    }
  }
} // Check if `character` is outside the permissible unicode range.


function prohibited(code) {
  return code >= 0xd800 && code <= 0xdfff || code > 0x10ffff;
} // Check if `character` is disallowed.


function disallowed(code) {
  return code >= 0x0001 && code <= 0x0008 || code === 0x000b || code >= 0x000d && code <= 0x001f || code >= 0x007f && code <= 0x009f || code >= 0xfdd0 && code <= 0xfdef || (code & 0xffff) === 0xffff || (code & 0xffff) === 0xfffe;
}

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;

  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];

    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  } // if the path is allowed to go above the root, restore leading ..s


  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
} // path.resolve([from ...], to)
// posix version


exports.resolve = function () {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = i >= 0 ? arguments[i] : process.cwd(); // Skip empty and invalid entries

    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  } // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)
  // Normalize the path


  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {
    return !!p;
  }), !resolvedAbsolute).join('/');
  return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
}; // path.normalize(path)
// posix version


exports.normalize = function (path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/'; // Normalize the path

  path = normalizeArray(filter(path.split('/'), function (p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }

  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
}; // posix version


exports.isAbsolute = function (path) {
  return path.charAt(0) === '/';
}; // posix version


exports.join = function () {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function (p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }

    return p;
  }).join('/'));
}; // path.relative(from, to)
// posix version


exports.relative = function (from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;

    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;

    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));
  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;

  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];

  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));
  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47
  /*/*/
  ;
  var end = -1;
  var matchedSlash = true;

  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);

    if (code === 47
    /*/*/
    ) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';

  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }

  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';
  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47
    /*/*/
    ) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
} // Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here


exports.basename = function (path, ext) {
  var f = basename(path);

  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }

  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true; // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find

  var preDotState = 0;

  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);

    if (code === 47
    /*/*/
    ) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }

        continue;
      }

    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }

    if (code === 46
    /*.*/
    ) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
      } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }

  return path.slice(startDot, end);
};

function filter(xs, f) {
  if (xs.filter) return xs.filter(f);
  var res = [];

  for (var i = 0; i < xs.length; i++) {
    if (f(xs[i], i, xs)) res.push(xs[i]);
  }

  return res;
} // String.prototype.substr - negative index don't work in IE8


var substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {
  return str.substr(start, len);
} : function (str, start, len) {
  if (start < 0) start = str.length + start;
  return str.substr(start, len);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var printWarning = function printWarning() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning = function printWarning() {};

if (true) {
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = assign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (_typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = _typeof(propValue);

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"); // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/react-ion-slider/dist/index.es.js":
/*!********************************************************!*\
  !*** ./node_modules/react-ion-slider/dist/index.es.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




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

var css = "/*!Ion.RangeSlider, 2.3.0, © Denis Ineshin, 2010 - 2018, IonDen.com, Build date: 2018-12-11 23:23:51*/.irs{position:relative;display:block;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:12px;font-family:Arial,sans-serif}.irs-line{position:relative;display:block;overflow:hidden;outline:none !important}.irs-bar{position:absolute;display:block;left:0;width:0}.irs-shadow{position:absolute;display:none;left:0;width:0}.irs-handle{position:absolute;display:block;box-sizing:border-box;cursor:default;z-index:1}.irs-handle.type_last{z-index:2}.irs-min,.irs-max{position:absolute;display:block;cursor:default}.irs-min{left:0}.irs-max{right:0}.irs-from,.irs-to,.irs-single{position:absolute;display:block;top:0;left:0;cursor:default;white-space:nowrap}.irs-grid{position:absolute;display:none;bottom:0;left:0;width:100%;height:20px}.irs-with-grid .irs-grid{display:block}.irs-grid-pol{position:absolute;top:0;left:0;width:1px;height:8px;background:#000}.irs-grid-pol.small{height:4px}.irs-grid-text{position:absolute;bottom:0;left:0;white-space:nowrap;text-align:center;font-size:9px;line-height:9px;padding:0 3px;color:#000}.irs-disable-mask{position:absolute;display:block;top:0;left:-1%;width:102%;height:100%;cursor:default;background:rgba(0,0,0,0);z-index:2}.lt-ie9 .irs-disable-mask{background:#000;filter:alpha(opacity=0);cursor:not-allowed}.irs-disabled{opacity:.4}.irs-hidden-input{position:absolute !important;display:block !important;top:0 !important;left:0 !important;width:0 !important;height:0 !important;font-size:0 !important;line-height:0 !important;padding:0 !important;margin:0 !important;overflow:hidden;outline:none !important;z-index:-9999 !important;background:none !important;border-style:solid !important;border-color:transparent !important}.irs--flat{height:40px}.irs--flat.irs-with-grid{height:60px}.irs--flat .irs-line{top:25px;height:12px;background-color:#e1e4e9;border-radius:4px}.irs--flat .irs-bar{top:25px;height:12px;background-color:#ed5565}.irs--flat .irs-bar--single{border-radius:4px 0 0 4px}.irs--flat .irs-shadow{height:1px;bottom:16px;background-color:#e1e4e9}.irs--flat .irs-handle{top:22px;width:16px;height:18px;background-color:transparent}.irs--flat .irs-handle>i:first-child{position:absolute;display:block;top:0;left:50%;width:2px;height:100%;margin-left:-1px;background-color:#da4453}.irs--flat .irs-handle.state_hover>i:first-child,.irs--flat .irs-handle:hover>i:first-child{background-color:#a43540}.irs--flat .irs-min,.irs--flat .irs-max{top:0;padding:1px 3px;color:#999;font-size:10px;line-height:1.333;text-shadow:none;background-color:#e1e4e9;border-radius:4px}.irs--flat .irs-from,.irs--flat .irs-to,.irs--flat .irs-single{color:white;font-size:10px;line-height:1.333;text-shadow:none;padding:1px 5px;background-color:#ed5565;border-radius:4px}.irs--flat .irs-from:before,.irs--flat .irs-to:before,.irs--flat .irs-single:before{position:absolute;display:block;content:\"\";bottom:-6px;left:50%;width:0;height:0;margin-left:-3px;overflow:hidden;border:3px solid transparent;border-top-color:#ed5565}.irs--flat .irs-grid-pol{background-color:#e1e4e9}.irs--flat .irs-grid-text{color:#999}.irs--big{height:55px}.irs--big.irs-with-grid{height:70px}.irs--big .irs-line{top:33px;height:12px;background-color:white;background:linear-gradient(to bottom, #ddd -50%, white 150%);border:1px solid #ccc;border-radius:12px}.irs--big .irs-bar{top:33px;height:12px;background-color:#92bce0;border:1px solid #428bca;background:linear-gradient(to bottom, #ffffff 0%, #428bca 30%, #b9d4ec 100%);box-shadow:inset 0 0 1px 1px rgba(255,255,255,0.5)}.irs--big .irs-bar--single{border-radius:12px 0 0 12px}.irs--big .irs-shadow{height:1px;bottom:16px;background-color:rgba(66,139,202,0.5)}.irs--big .irs-handle{top:25px;width:30px;height:30px;border:1px solid rgba(0,0,0,0.3);background-color:#cbcfd5;background:linear-gradient(to bottom, white 0%, #B4B9BE 30%, white 100%);box-shadow:1px 1px 2px rgba(0,0,0,0.2),inset 0 0 3px 1px white;border-radius:30px}.irs--big .irs-handle.state_hover,.irs--big .irs-handle:hover{border-color:rgba(0,0,0,0.45);background-color:#939ba7;background:linear-gradient(to bottom, white 0%, #919BA5 30%, white 100%)}.irs--big .irs-min,.irs--big .irs-max{top:0;padding:1px 5px;color:white;text-shadow:none;background-color:#9f9f9f;border-radius:3px}.irs--big .irs-from,.irs--big .irs-to,.irs--big .irs-single{color:white;text-shadow:none;padding:1px 5px;background-color:#428bca;background:linear-gradient(to bottom, #428bca 0%, #3071a9 100%);border-radius:3px}.irs--big .irs-grid-pol{background-color:#428bca}.irs--big .irs-grid-text{color:#428bca}.irs--modern{height:55px}.irs--modern.irs-with-grid{height:55px}.irs--modern .irs-line{top:25px;height:5px;background-color:#d1d6e0;background:linear-gradient(to bottom, #e0e4ea 0%, #d1d6e0 100%);border:1px solid #a3adc1;border-bottom-width:0;border-radius:5px}.irs--modern .irs-bar{top:25px;height:5px;background:#20b426;background:linear-gradient(to bottom, #20b426 0%, #18891d 100%)}.irs--modern .irs-bar--single{border-radius:5px 0 0 5px}.irs--modern .irs-shadow{height:1px;bottom:21px;background-color:rgba(209,214,224,0.5)}.irs--modern .irs-handle{top:37px;width:12px;height:13px;border:1px solid #a3adc1;border-top-width:0;box-shadow:1px 1px 1px rgba(0,0,0,0.1);border-radius:0 0 3px 3px}.irs--modern .irs-handle>i:nth-child(1){position:absolute;display:block;top:-4px;left:1px;width:6px;height:6px;border:1px solid #a3adc1;background:white;transform:rotate(45deg)}.irs--modern .irs-handle>i:nth-child(2){position:absolute;display:block;box-sizing:border-box;top:0;left:0;width:10px;height:12px;background:#e9e6e6;background:linear-gradient(to bottom, white 0%, #e9e6e6 100%);border-radius:0 0 3px 3px}.irs--modern .irs-handle>i:nth-child(3){position:absolute;display:block;box-sizing:border-box;top:3px;left:3px;width:4px;height:5px;border-left:1px solid #a3adc1;border-right:1px solid #a3adc1}.irs--modern .irs-handle.state_hover,.irs--modern .irs-handle:hover{border-color:#7685a2;background:#c3c7cd;background:linear-gradient(to bottom, #ffffff 0%, #919ba5 30%, #ffffff 100%)}.irs--modern .irs-handle.state_hover>i:nth-child(1),.irs--modern .irs-handle:hover>i:nth-child(1){border-color:#7685a2}.irs--modern .irs-handle.state_hover>i:nth-child(3),.irs--modern .irs-handle:hover>i:nth-child(3){border-color:#48536a}.irs--modern .irs-min,.irs--modern .irs-max{top:0;font-size:10px;line-height:1.333;text-shadow:none;padding:1px 5px;color:white;background-color:#d1d6e0;border-radius:5px}.irs--modern .irs-from,.irs--modern .irs-to,.irs--modern .irs-single{font-size:10px;line-height:1.333;text-shadow:none;padding:1px 5px;background-color:#20b426;color:white;border-radius:5px}.irs--modern .irs-from:before,.irs--modern .irs-to:before,.irs--modern .irs-single:before{position:absolute;display:block;content:\"\";bottom:-6px;left:50%;width:0;height:0;margin-left:-3px;overflow:hidden;border:3px solid transparent;border-top-color:#20b426}.irs--modern .irs-grid{height:25px}.irs--modern .irs-grid-pol{background-color:#dedede}.irs--modern .irs-grid-text{color:silver;font-size:13px}.irs--sharp{height:50px;font-size:12px;line-height:1}.irs--sharp.irs-with-grid{height:57px}.irs--sharp .irs-line{top:30px;height:2px;background-color:black;border-radius:2px}.irs--sharp .irs-bar{top:30px;height:2px;background-color:#ee22fa}.irs--sharp .irs-bar--single{border-radius:2px 0 0 2px}.irs--sharp .irs-shadow{height:1px;bottom:21px;background-color:rgba(0,0,0,0.5)}.irs--sharp .irs-handle{top:25px;width:10px;height:10px;background-color:#a804b2}.irs--sharp .irs-handle>i:first-child{position:absolute;display:block;top:100%;left:0;width:0;height:0;border:5px solid transparent;border-top-color:#a804b2}.irs--sharp .irs-handle.state_hover,.irs--sharp .irs-handle:hover{background-color:black}.irs--sharp .irs-handle.state_hover>i:first-child,.irs--sharp .irs-handle:hover>i:first-child{border-top-color:black}.irs--sharp .irs-min,.irs--sharp .irs-max{color:white;font-size:14px;line-height:1;top:0;padding:3px 4px;opacity:.4;background-color:#a804b2;border-radius:2px}.irs--sharp .irs-from,.irs--sharp .irs-to,.irs--sharp .irs-single{font-size:14px;line-height:1;text-shadow:none;padding:3px 4px;background-color:#a804b2;color:white;border-radius:2px}.irs--sharp .irs-from:before,.irs--sharp .irs-to:before,.irs--sharp .irs-single:before{position:absolute;display:block;content:\"\";bottom:-6px;left:50%;width:0;height:0;margin-left:-3px;overflow:hidden;border:3px solid transparent;border-top-color:#a804b2}.irs--sharp .irs-grid{height:25px}.irs--sharp .irs-grid-pol{background-color:#dedede}.irs--sharp .irs-grid-text{color:silver;font-size:13px}.irs--round{height:50px}.irs--round.irs-with-grid{height:65px}.irs--round .irs-line{top:36px;height:4px;background-color:#dee4ec;border-radius:4px}.irs--round .irs-bar{top:36px;height:4px;background-color:#006cfa}.irs--round .irs-bar--single{border-radius:4px 0 0 4px}.irs--round .irs-shadow{height:4px;bottom:21px;background-color:rgba(222,228,236,0.5)}.irs--round .irs-handle{top:26px;width:24px;height:24px;border:4px solid #006cfa;background-color:white;border-radius:24px;box-shadow:0 1px 3px rgba(0,0,255,0.3)}.irs--round .irs-handle.state_hover,.irs--round .irs-handle:hover{background-color:#f0f6ff}.irs--round .irs-min,.irs--round .irs-max{color:#333;font-size:14px;line-height:1;top:0;padding:3px 5px;background-color:rgba(0,0,0,0.1);border-radius:4px}.irs--round .irs-from,.irs--round .irs-to,.irs--round .irs-single{font-size:14px;line-height:1;text-shadow:none;padding:3px 5px;background-color:#006cfa;color:white;border-radius:4px}.irs--round .irs-from:before,.irs--round .irs-to:before,.irs--round .irs-single:before{position:absolute;display:block;content:\"\";bottom:-6px;left:50%;width:0;height:0;margin-left:-3px;overflow:hidden;border:3px solid transparent;border-top-color:#006cfa}.irs--round .irs-grid{height:25px}.irs--round .irs-grid-pol{background-color:#dedede}.irs--round .irs-grid-text{color:silver;font-size:13px}.irs--square{height:50px}.irs--square.irs-with-grid{height:60px}.irs--square .irs-line{top:31px;height:4px;background-color:#dedede}.irs--square .irs-bar{top:31px;height:4px;background-color:black}.irs--square .irs-shadow{height:2px;bottom:21px;background-color:#dedede}.irs--square .irs-handle{top:25px;width:16px;height:16px;border:3px solid black;background-color:white;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.irs--square .irs-handle.state_hover,.irs--square .irs-handle:hover{background-color:#f0f6ff}.irs--square .irs-min,.irs--square .irs-max{color:#333;font-size:14px;line-height:1;top:0;padding:3px 5px;background-color:rgba(0,0,0,0.1)}.irs--square .irs-from,.irs--square .irs-to,.irs--square .irs-single{font-size:14px;line-height:1;text-shadow:none;padding:3px 5px;background-color:black;color:white}.irs--square .irs-grid{height:25px}.irs--square .irs-grid-pol{background-color:#dedede}.irs--square .irs-grid-text{color:silver;font-size:11px}";
styleInject(css);
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var jquery = createCommonjsModule(function (module) {
  /*!
   * jQuery JavaScript Library v3.4.1
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2019-05-01T21:04Z
   */
  (function (global, factory) {
    {
      // For CommonJS and CommonJS-like environments where a proper `window`
      // is present, execute the factory and get jQuery.
      // For environments that do not have a `window` with a `document`
      // (such as Node.js), expose a factory as module.exports.
      // This accentuates the need for the creation of a real `window`.
      // e.g. var jQuery = require("jquery")(window);
      // See ticket #14549 for more info.
      module.exports = global.document ? factory(global, true) : function (w) {
        if (!w.document) {
          throw new Error("jQuery requires a window with a document");
        }

        return factory(w);
      };
    } // Pass this if window is not defined yet
  })(typeof window !== "undefined" ? window : commonjsGlobal, function (window, noGlobal) {
    var arr = [];
    var document = window.document;
    var getProto = Object.getPrototypeOf;
    var _slice = arr.slice;
    var concat = arr.concat;
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var fnToString = hasOwn.toString;
    var ObjectFunctionString = fnToString.call(Object);
    var support = {};

    var isFunction = function isFunction(obj) {
      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
    };

    var isWindow = function isWindow(obj) {
      return obj != null && obj === obj.window;
    };

    var preservedScriptAttributes = {
      type: true,
      src: true,
      nonce: true,
      noModule: true
    };

    function DOMEval(code, node, doc) {
      doc = doc || document;
      var i,
          val,
          script = doc.createElement("script");
      script.text = code;

      if (node) {
        for (i in preservedScriptAttributes) {
          // Support: Firefox 64+, Edge 18+
          // Some browsers don't support the "nonce" property on scripts.
          // On the other hand, just using `getAttribute` is not enough as
          // the `nonce` attribute is reset to an empty string whenever it
          // becomes browsing-context connected.
          // See https://github.com/whatwg/html/issues/2369
          // See https://html.spec.whatwg.org/#nonce-attributes
          // The `node.getAttribute` check was added for the sake of
          // `jQuery.globalEval` so that it can fake a nonce-containing node
          // via an object.
          val = node[i] || node.getAttribute && node.getAttribute(i);

          if (val) {
            script.setAttribute(i, val);
          }
        }
      }

      doc.head.appendChild(script).parentNode.removeChild(script);
    }

    function toType(obj) {
      if (obj == null) {
        return obj + "";
      } // Support: Android <=2.3 only (functionish RegExp)


      return _typeof(obj) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : _typeof(obj);
    }
    /* global Symbol */
    // Defining this global in .eslintrc.json would create a danger of using the global
    // unguarded in another place, it seems safer to define global only for this module


    var version = "3.4.1",
        // Define a local copy of jQuery
    jQuery = function jQuery(selector, context) {
      // The jQuery object is actually just the init constructor 'enhanced'
      // Need init if jQuery is called (just allow error to be thrown if not included)
      return new jQuery.fn.init(selector, context);
    },
        // Support: Android <=4.0 only
    // Make sure we trim BOM and NBSP
    rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    jQuery.fn = jQuery.prototype = {
      // The current version of jQuery being used
      jquery: version,
      constructor: jQuery,
      // The default length of a jQuery object is 0
      length: 0,
      toArray: function toArray() {
        return _slice.call(this);
      },
      // Get the Nth element in the matched element set OR
      // Get the whole matched element set as a clean array
      get: function get(num) {
        // Return all the elements in a clean array
        if (num == null) {
          return _slice.call(this);
        } // Return just the one element from the set


        return num < 0 ? this[num + this.length] : this[num];
      },
      // Take an array of elements and push it onto the stack
      // (returning the new matched element set)
      pushStack: function pushStack(elems) {
        // Build a new jQuery matched element set
        var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)

        ret.prevObject = this; // Return the newly-formed element set

        return ret;
      },
      // Execute a callback for every element in the matched set.
      each: function each(callback) {
        return jQuery.each(this, callback);
      },
      map: function map(callback) {
        return this.pushStack(jQuery.map(this, function (elem, i) {
          return callback.call(elem, i, elem);
        }));
      },
      slice: function slice() {
        return this.pushStack(_slice.apply(this, arguments));
      },
      first: function first() {
        return this.eq(0);
      },
      last: function last() {
        return this.eq(-1);
      },
      eq: function eq(i) {
        var len = this.length,
            j = +i + (i < 0 ? len : 0);
        return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
      },
      end: function end() {
        return this.prevObject || this.constructor();
      },
      // For internal use only.
      // Behaves like an Array's method, not like a jQuery method.
      push: push,
      sort: arr.sort,
      splice: arr.splice
    };

    jQuery.extend = jQuery.fn.extend = function () {
      var options,
          name,
          src,
          copy,
          copyIsArray,
          clone,
          target = arguments[0] || {},
          i = 1,
          length = arguments.length,
          deep = false; // Handle a deep copy situation

      if (typeof target === "boolean") {
        deep = target; // Skip the boolean and the target

        target = arguments[i] || {};
        i++;
      } // Handle case when target is a string or something (possible in deep copy)


      if (_typeof(target) !== "object" && !isFunction(target)) {
        target = {};
      } // Extend jQuery itself if only one argument is passed


      if (i === length) {
        target = this;
        i--;
      }

      for (; i < length; i++) {
        // Only deal with non-null/undefined values
        if ((options = arguments[i]) != null) {
          // Extend the base object
          for (name in options) {
            copy = options[name]; // Prevent Object.prototype pollution
            // Prevent never-ending loop

            if (name === "__proto__" || target === copy) {
              continue;
            } // Recurse if we're merging plain objects or arrays


            if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
              src = target[name]; // Ensure proper type for the source value

              if (copyIsArray && !Array.isArray(src)) {
                clone = [];
              } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                clone = {};
              } else {
                clone = src;
              }

              copyIsArray = false; // Never move original objects, clone them

              target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
            } else if (copy !== undefined) {
              target[name] = copy;
            }
          }
        }
      } // Return the modified object


      return target;
    };

    jQuery.extend({
      // Unique for each copy of jQuery on the page
      expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
      // Assume jQuery is ready without the ready module
      isReady: true,
      error: function error(msg) {
        throw new Error(msg);
      },
      noop: function noop() {},
      isPlainObject: function isPlainObject(obj) {
        var proto, Ctor; // Detect obvious negatives
        // Use toString instead of jQuery.type to catch host objects

        if (!obj || toString.call(obj) !== "[object Object]") {
          return false;
        }

        proto = getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain

        if (!proto) {
          return true;
        } // Objects with prototype are plain iff they were constructed by a global Object function


        Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
        return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
      },
      isEmptyObject: function isEmptyObject(obj) {
        var name;

        for (name in obj) {
          return false;
        }

        return true;
      },
      // Evaluates a script in a global context
      globalEval: function globalEval(code, options) {
        DOMEval(code, {
          nonce: options && options.nonce
        });
      },
      each: function each(obj, callback) {
        var length,
            i = 0;

        if (isArrayLike(obj)) {
          length = obj.length;

          for (; i < length; i++) {
            if (callback.call(obj[i], i, obj[i]) === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            if (callback.call(obj[i], i, obj[i]) === false) {
              break;
            }
          }
        }

        return obj;
      },
      // Support: Android <=4.0 only
      trim: function trim(text) {
        return text == null ? "" : (text + "").replace(rtrim, "");
      },
      // results is for internal usage only
      makeArray: function makeArray(arr, results) {
        var ret = results || [];

        if (arr != null) {
          if (isArrayLike(Object(arr))) {
            jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
          } else {
            push.call(ret, arr);
          }
        }

        return ret;
      },
      inArray: function inArray(elem, arr, i) {
        return arr == null ? -1 : indexOf.call(arr, elem, i);
      },
      // Support: Android <=4.0 only, PhantomJS 1 only
      // push.apply(_, arraylike) throws on ancient WebKit
      merge: function merge(first, second) {
        var len = +second.length,
            j = 0,
            i = first.length;

        for (; j < len; j++) {
          first[i++] = second[j];
        }

        first.length = i;
        return first;
      },
      grep: function grep(elems, callback, invert) {
        var callbackInverse,
            matches = [],
            i = 0,
            length = elems.length,
            callbackExpect = !invert; // Go through the array, only saving the items
        // that pass the validator function

        for (; i < length; i++) {
          callbackInverse = !callback(elems[i], i);

          if (callbackInverse !== callbackExpect) {
            matches.push(elems[i]);
          }
        }

        return matches;
      },
      // arg is for internal usage only
      map: function map(elems, callback, arg) {
        var length,
            value,
            i = 0,
            ret = []; // Go through the array, translating each of the items to their new values

        if (isArrayLike(elems)) {
          length = elems.length;

          for (; i < length; i++) {
            value = callback(elems[i], i, arg);

            if (value != null) {
              ret.push(value);
            }
          } // Go through every key on the object,

        } else {
          for (i in elems) {
            value = callback(elems[i], i, arg);

            if (value != null) {
              ret.push(value);
            }
          }
        } // Flatten any nested arrays


        return concat.apply([], ret);
      },
      // A global GUID counter for objects
      guid: 1,
      // jQuery.support is not used in Core but other projects attach their
      // properties to it so it needs to exist.
      support: support
    });

    if (typeof Symbol === "function") {
      jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
    } // Populate the class2type map


    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
      class2type["[object " + name + "]"] = name.toLowerCase();
    });

    function isArrayLike(obj) {
      // Support: real iOS 8.2 only (not reproducible in simulator)
      // `in` check used to prevent JIT error (gh-2145)
      // hasOwn isn't used here due to false negatives
      // regarding Nodelist length in IE
      var length = !!obj && "length" in obj && obj.length,
          type = toType(obj);

      if (isFunction(obj) || isWindow(obj)) {
        return false;
      }

      return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
    }

    var Sizzle =
    /*!
     * Sizzle CSS Selector Engine v2.3.4
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://js.foundation/
     *
     * Date: 2019-04-08
     */
    function (window) {
      var i,
          support,
          Expr,
          getText,
          isXML,
          tokenize,
          compile,
          select,
          outermostContext,
          sortInput,
          hasDuplicate,
          // Local document vars
      setDocument,
          document,
          docElem,
          documentIsHTML,
          rbuggyQSA,
          rbuggyMatches,
          matches,
          contains,
          // Instance-specific data
      expando = "sizzle" + 1 * new Date(),
          preferredDoc = window.document,
          dirruns = 0,
          done = 0,
          classCache = createCache(),
          tokenCache = createCache(),
          compilerCache = createCache(),
          nonnativeSelectorCache = createCache(),
          sortOrder = function sortOrder(a, b) {
        if (a === b) {
          hasDuplicate = true;
        }

        return 0;
      },
          // Instance methods
      hasOwn = {}.hasOwnProperty,
          arr = [],
          pop = arr.pop,
          push_native = arr.push,
          push = arr.push,
          slice = arr.slice,
          // Use a stripped-down indexOf as it's faster than native
      // https://jsperf.com/thor-indexof-vs-for/5
      indexOf = function indexOf(list, elem) {
        var i = 0,
            len = list.length;

        for (; i < len; i++) {
          if (list[i] === elem) {
            return i;
          }
        }

        return -1;
      },
          booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          // Regular expressions
      // http://www.w3.org/TR/css3-selectors/#whitespace
      whitespace = "[\\x20\\t\\r\\n\\f]",
          // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
      identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
      attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
      "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
      "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
          pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
      // 1. quoted (capture 3; capture 4 or capture 5)
      "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
      "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
      ".*" + ")\\)|)",
          // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
      rwhitespace = new RegExp(whitespace + "+", "g"),
          rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
          rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
          rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
          rdescend = new RegExp(whitespace + "|>"),
          rpseudo = new RegExp(pseudos),
          ridentifier = new RegExp("^" + identifier + "$"),
          matchExpr = {
        "ID": new RegExp("^#(" + identifier + ")"),
        "CLASS": new RegExp("^\\.(" + identifier + ")"),
        "TAG": new RegExp("^(" + identifier + "|[*])"),
        "ATTR": new RegExp("^" + attributes),
        "PSEUDO": new RegExp("^" + pseudos),
        "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
        "bool": new RegExp("^(?:" + booleans + ")$", "i"),
        // For use in libraries implementing .is()
        // We use this for POS matching in `select`
        "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
      },
          rhtml = /HTML$/i,
          rinputs = /^(?:input|select|textarea|button)$/i,
          rheader = /^h\d$/i,
          rnative = /^[^{]+\{\s*\[native \w/,
          // Easily-parseable/retrievable ID or TAG or CLASS selectors
      rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          rsibling = /[+~]/,
          // CSS escapes
      // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
      runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
          funescape = function funescape(_, escaped, escapedWhitespace) {
        var high = "0x" + escaped - 0x10000; // NaN means non-codepoint
        // Support: Firefox<24
        // Workaround erroneous numeric interpretation of +"0x"

        return high !== high || escapedWhitespace ? escaped : high < 0 ? // BMP codepoint
        String.fromCharCode(high + 0x10000) : // Supplemental Plane codepoint (surrogate pair)
        String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
      },
          // CSS string/identifier serialization
      // https://drafts.csswg.org/cssom/#common-serializing-idioms
      rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          fcssescape = function fcssescape(ch, asCodePoint) {
        if (asCodePoint) {
          // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
          if (ch === "\0") {
            return "\uFFFD";
          } // Control characters and (dependent upon position) numbers get escaped as code points


          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        } // Other potentially-special ASCII characters get backslash-escaped


        return "\\" + ch;
      },
          // Used for iframes
      // See setDocument()
      // Removing the function wrapper causes a "Permission Denied"
      // error in IE
      unloadHandler = function unloadHandler() {
        setDocument();
      },
          inDisabledFieldset = addCombinator(function (elem) {
        return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
      }, {
        dir: "parentNode",
        next: "legend"
      }); // Optimize for push.apply( _, NodeList )


      try {
        push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
        // Detect silently failing push.apply

        arr[preferredDoc.childNodes.length].nodeType;
      } catch (e) {
        push = {
          apply: arr.length ? // Leverage slice if possible
          function (target, els) {
            push_native.apply(target, slice.call(els));
          } : // Support: IE<9
          // Otherwise append directly
          function (target, els) {
            var j = target.length,
                i = 0; // Can't trust NodeList.length

            while (target[j++] = els[i++]) {}

            target.length = j - 1;
          }
        };
      }

      function Sizzle(selector, context, results, seed) {
        var m,
            i,
            elem,
            nid,
            match,
            groups,
            newSelector,
            newContext = context && context.ownerDocument,
            // nodeType defaults to 9, since context defaults to document
        nodeType = context ? context.nodeType : 9;
        results = results || []; // Return early from calls with invalid selector or context

        if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
          return results;
        } // Try to shortcut find operations (as opposed to filters) in HTML documents


        if (!seed) {
          if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
            setDocument(context);
          }

          context = context || document;

          if (documentIsHTML) {
            // If the selector is sufficiently simple, try using a "get*By*" DOM method
            // (excepting DocumentFragment context, where the methods don't exist)
            if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
              // ID selector
              if (m = match[1]) {
                // Document context
                if (nodeType === 9) {
                  if (elem = context.getElementById(m)) {
                    // Support: IE, Opera, Webkit
                    // TODO: identify versions
                    // getElementById can match elements by name instead of ID
                    if (elem.id === m) {
                      results.push(elem);
                      return results;
                    }
                  } else {
                    return results;
                  } // Element context

                } else {
                  // Support: IE, Opera, Webkit
                  // TODO: identify versions
                  // getElementById can match elements by name instead of ID
                  if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } // Type selector

              } else if (match[2]) {
                push.apply(results, context.getElementsByTagName(selector));
                return results; // Class selector
              } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                push.apply(results, context.getElementsByClassName(m));
                return results;
              }
            } // Take advantage of querySelectorAll


            if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && ( // Support: IE 8 only
            // Exclude object elements
            nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
              newSelector = selector;
              newContext = context; // qSA considers elements outside a scoping root when evaluating child or
              // descendant combinators, which is not what we want.
              // In such cases, we work around the behavior by prefixing every selector in the
              // list with an ID selector referencing the scope context.
              // Thanks to Andrew Dupont for this technique.

              if (nodeType === 1 && rdescend.test(selector)) {
                // Capture the context ID, setting it first if necessary
                if (nid = context.getAttribute("id")) {
                  nid = nid.replace(rcssescape, fcssescape);
                } else {
                  context.setAttribute("id", nid = expando);
                } // Prefix every selector in the list


                groups = tokenize(selector);
                i = groups.length;

                while (i--) {
                  groups[i] = "#" + nid + " " + toSelector(groups[i]);
                }

                newSelector = groups.join(","); // Expand context for sibling selectors

                newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
              }

              try {
                push.apply(results, newContext.querySelectorAll(newSelector));
                return results;
              } catch (qsaError) {
                nonnativeSelectorCache(selector, true);
              } finally {
                if (nid === expando) {
                  context.removeAttribute("id");
                }
              }
            }
          }
        } // All others


        return select(selector.replace(rtrim, "$1"), context, results, seed);
      }
      /**
       * Create key-value caches of limited size
       * @returns {function(string, object)} Returns the Object data after storing it on itself with
       *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
       *	deleting the oldest entry
       */


      function createCache() {
        var keys = [];

        function cache(key, value) {
          // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
          if (keys.push(key + " ") > Expr.cacheLength) {
            // Only keep the most recent entries
            delete cache[keys.shift()];
          }

          return cache[key + " "] = value;
        }

        return cache;
      }
      /**
       * Mark a function for special use by Sizzle
       * @param {Function} fn The function to mark
       */


      function markFunction(fn) {
        fn[expando] = true;
        return fn;
      }
      /**
       * Support testing using an element
       * @param {Function} fn Passed the created element and returns a boolean result
       */


      function assert(fn) {
        var el = document.createElement("fieldset");

        try {
          return !!fn(el);
        } catch (e) {
          return false;
        } finally {
          // Remove from its parent by default
          if (el.parentNode) {
            el.parentNode.removeChild(el);
          } // release memory in IE


          el = null;
        }
      }
      /**
       * Adds the same handler for all of the specified attrs
       * @param {String} attrs Pipe-separated list of attributes
       * @param {Function} handler The method that will be applied
       */


      function addHandle(attrs, handler) {
        var arr = attrs.split("|"),
            i = arr.length;

        while (i--) {
          Expr.attrHandle[arr[i]] = handler;
        }
      }
      /**
       * Checks document order of two siblings
       * @param {Element} a
       * @param {Element} b
       * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
       */


      function siblingCheck(a, b) {
        var cur = b && a,
            diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex; // Use IE sourceIndex if available on both nodes

        if (diff) {
          return diff;
        } // Check if b follows a


        if (cur) {
          while (cur = cur.nextSibling) {
            if (cur === b) {
              return -1;
            }
          }
        }

        return a ? 1 : -1;
      }
      /**
       * Returns a function to use in pseudos for input types
       * @param {String} type
       */


      function createInputPseudo(type) {
        return function (elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === type;
        };
      }
      /**
       * Returns a function to use in pseudos for buttons
       * @param {String} type
       */


      function createButtonPseudo(type) {
        return function (elem) {
          var name = elem.nodeName.toLowerCase();
          return (name === "input" || name === "button") && elem.type === type;
        };
      }
      /**
       * Returns a function to use in pseudos for :enabled/:disabled
       * @param {Boolean} disabled true for :disabled; false for :enabled
       */


      function createDisabledPseudo(disabled) {
        // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
        return function (elem) {
          // Only certain elements can match :enabled or :disabled
          // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
          // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
          if ("form" in elem) {
            // Check for inherited disabledness on relevant non-disabled elements:
            // * listed form-associated elements in a disabled fieldset
            //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
            //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
            // * option elements in a disabled optgroup
            //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
            // All such elements have a "form" property.
            if (elem.parentNode && elem.disabled === false) {
              // Option elements defer to a parent optgroup if present
              if ("label" in elem) {
                if ("label" in elem.parentNode) {
                  return elem.parentNode.disabled === disabled;
                } else {
                  return elem.disabled === disabled;
                }
              } // Support: IE 6 - 11
              // Use the isDisabled shortcut property to check for disabled fieldset ancestors


              return elem.isDisabled === disabled || // Where there is no isDisabled, check manually

              /* jshint -W018 */
              elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
            }

            return elem.disabled === disabled; // Try to winnow out elements that can't be disabled before trusting the disabled property.
            // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
            // even exist on them, let alone have a boolean value.
          } else if ("label" in elem) {
            return elem.disabled === disabled;
          } // Remaining elements are neither :enabled nor :disabled


          return false;
        };
      }
      /**
       * Returns a function to use in pseudos for positionals
       * @param {Function} fn
       */


      function createPositionalPseudo(fn) {
        return markFunction(function (argument) {
          argument = +argument;
          return markFunction(function (seed, matches) {
            var j,
                matchIndexes = fn([], seed.length, argument),
                i = matchIndexes.length; // Match elements found at the specified indexes

            while (i--) {
              if (seed[j = matchIndexes[i]]) {
                seed[j] = !(matches[j] = seed[j]);
              }
            }
          });
        });
      }
      /**
       * Checks a node for validity as a Sizzle context
       * @param {Element|Object=} context
       * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
       */


      function testContext(context) {
        return context && typeof context.getElementsByTagName !== "undefined" && context;
      } // Expose support vars for convenience


      support = Sizzle.support = {};
      /**
       * Detects XML nodes
       * @param {Element|Object} elem An element or a document
       * @returns {Boolean} True iff elem is a non-HTML XML node
       */

      isXML = Sizzle.isXML = function (elem) {
        var namespace = elem.namespaceURI,
            docElem = (elem.ownerDocument || elem).documentElement; // Support: IE <=8
        // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
        // https://bugs.jquery.com/ticket/4833

        return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
      };
      /**
       * Sets document-related variables once based on the current document
       * @param {Element|Object} [doc] An element or document object to use to set the document
       * @returns {Object} Returns the current document
       */


      setDocument = Sizzle.setDocument = function (node) {
        var hasCompare,
            subWindow,
            doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected

        if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
          return document;
        } // Update global variables


        document = doc;
        docElem = document.documentElement;
        documentIsHTML = !isXML(document); // Support: IE 9-11, Edge
        // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)

        if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
          // Support: IE 11, Edge
          if (subWindow.addEventListener) {
            subWindow.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
          } else if (subWindow.attachEvent) {
            subWindow.attachEvent("onunload", unloadHandler);
          }
        }
        /* Attributes
        ---------------------------------------------------------------------- */
        // Support: IE<8
        // Verify that getAttribute really returns attributes and not properties
        // (excepting IE8 booleans)


        support.attributes = assert(function (el) {
          el.className = "i";
          return !el.getAttribute("className");
        });
        /* getElement(s)By*
        ---------------------------------------------------------------------- */
        // Check if getElementsByTagName("*") returns only elements

        support.getElementsByTagName = assert(function (el) {
          el.appendChild(document.createComment(""));
          return !el.getElementsByTagName("*").length;
        }); // Support: IE<9

        support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
        // Check if getElementById returns elements by name
        // The broken getElementById methods don't pick up programmatically-set names,
        // so use a roundabout getElementsByName test

        support.getById = assert(function (el) {
          docElem.appendChild(el).id = expando;
          return !document.getElementsByName || !document.getElementsByName(expando).length;
        }); // ID filter and find

        if (support.getById) {
          Expr.filter["ID"] = function (id) {
            var attrId = id.replace(runescape, funescape);
            return function (elem) {
              return elem.getAttribute("id") === attrId;
            };
          };

          Expr.find["ID"] = function (id, context) {
            if (typeof context.getElementById !== "undefined" && documentIsHTML) {
              var elem = context.getElementById(id);
              return elem ? [elem] : [];
            }
          };
        } else {
          Expr.filter["ID"] = function (id) {
            var attrId = id.replace(runescape, funescape);
            return function (elem) {
              var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
              return node && node.value === attrId;
            };
          }; // Support: IE 6 - 7 only
          // getElementById is not reliable as a find shortcut


          Expr.find["ID"] = function (id, context) {
            if (typeof context.getElementById !== "undefined" && documentIsHTML) {
              var node,
                  i,
                  elems,
                  elem = context.getElementById(id);

              if (elem) {
                // Verify the id attribute
                node = elem.getAttributeNode("id");

                if (node && node.value === id) {
                  return [elem];
                } // Fall back on getElementsByName


                elems = context.getElementsByName(id);
                i = 0;

                while (elem = elems[i++]) {
                  node = elem.getAttributeNode("id");

                  if (node && node.value === id) {
                    return [elem];
                  }
                }
              }

              return [];
            }
          };
        } // Tag


        Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
          if (typeof context.getElementsByTagName !== "undefined") {
            return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
          } else if (support.qsa) {
            return context.querySelectorAll(tag);
          }
        } : function (tag, context) {
          var elem,
              tmp = [],
              i = 0,
              // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
          results = context.getElementsByTagName(tag); // Filter out possible comments

          if (tag === "*") {
            while (elem = results[i++]) {
              if (elem.nodeType === 1) {
                tmp.push(elem);
              }
            }

            return tmp;
          }

          return results;
        }; // Class

        Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
          if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
            return context.getElementsByClassName(className);
          }
        };
        /* QSA/matchesSelector
        ---------------------------------------------------------------------- */
        // QSA and matchesSelector support
        // matchesSelector(:active) reports false when true (IE9/Opera 11.5)


        rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
        // We allow this because of a bug in IE8/9 that throws an error
        // whenever `document.activeElement` is accessed on an iframe
        // So, we allow :focus to pass through QSA all the time to avoid the IE error
        // See https://bugs.jquery.com/ticket/13378

        rbuggyQSA = [];

        if (support.qsa = rnative.test(document.querySelectorAll)) {
          // Build QSA regex
          // Regex strategy adopted from Diego Perini
          assert(function (el) {
            // Select is set to empty string on purpose
            // This is to test IE's treatment of not explicitly
            // setting a boolean content attribute,
            // since its presence should be enough
            // https://bugs.jquery.com/ticket/12359
            docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
            // Nothing should be selected when empty strings follow ^= or $= or *=
            // The test attribute must be unknown in Opera but "safe" for WinRT
            // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section

            if (el.querySelectorAll("[msallowcapture^='']").length) {
              rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
            } // Support: IE8
            // Boolean attributes and "value" are not treated correctly


            if (!el.querySelectorAll("[selected]").length) {
              rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
            } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+


            if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
              rbuggyQSA.push("~=");
            } // Webkit/Opera - :checked should return selected option elements
            // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
            // IE8 throws error here and will not see later tests


            if (!el.querySelectorAll(":checked").length) {
              rbuggyQSA.push(":checked");
            } // Support: Safari 8+, iOS 8+
            // https://bugs.webkit.org/show_bug.cgi?id=136851
            // In-page `selector#id sibling-combinator selector` fails


            if (!el.querySelectorAll("a#" + expando + "+*").length) {
              rbuggyQSA.push(".#.+[+~]");
            }
          });
          assert(function (el) {
            el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>"; // Support: Windows 8 Native Apps
            // The type and name attributes are restricted during .innerHTML assignment

            var input = document.createElement("input");
            input.setAttribute("type", "hidden");
            el.appendChild(input).setAttribute("name", "D"); // Support: IE8
            // Enforce case-sensitivity of name attribute

            if (el.querySelectorAll("[name=d]").length) {
              rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
            } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
            // IE8 throws error here and will not see later tests


            if (el.querySelectorAll(":enabled").length !== 2) {
              rbuggyQSA.push(":enabled", ":disabled");
            } // Support: IE9-11+
            // IE's :disabled selector does not pick up the children of disabled fieldsets


            docElem.appendChild(el).disabled = true;

            if (el.querySelectorAll(":disabled").length !== 2) {
              rbuggyQSA.push(":enabled", ":disabled");
            } // Opera 10-11 does not throw on post-comma invalid pseudos


            el.querySelectorAll("*,:x");
            rbuggyQSA.push(",.*:");
          });
        }

        if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
          assert(function (el) {
            // Check to see if it's possible to do matchesSelector
            // on a disconnected node (IE 9)
            support.disconnectedMatch = matches.call(el, "*"); // This should fail with an exception
            // Gecko does not error, returns false instead

            matches.call(el, "[s!='']:x");
            rbuggyMatches.push("!=", pseudos);
          });
        }

        rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
        rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
        /* Contains
        ---------------------------------------------------------------------- */

        hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
        // Purposefully self-exclusive
        // As in, an element does not contain itself

        contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
          var adown = a.nodeType === 9 ? a.documentElement : a,
              bup = b && b.parentNode;
          return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
        } : function (a, b) {
          if (b) {
            while (b = b.parentNode) {
              if (b === a) {
                return true;
              }
            }
          }

          return false;
        };
        /* Sorting
        ---------------------------------------------------------------------- */
        // Document order sorting

        sortOrder = hasCompare ? function (a, b) {
          // Flag for duplicate removal
          if (a === b) {
            hasDuplicate = true;
            return 0;
          } // Sort on method existence if only one input has compareDocumentPosition


          var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;

          if (compare) {
            return compare;
          } // Calculate position if both inputs belong to the same document


          compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
          1; // Disconnected nodes

          if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
            // Choose the first element that is related to our preferred document
            if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
              return -1;
            }

            if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
              return 1;
            } // Maintain original order


            return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
          }

          return compare & 4 ? -1 : 1;
        } : function (a, b) {
          // Exit early if the nodes are identical
          if (a === b) {
            hasDuplicate = true;
            return 0;
          }

          var cur,
              i = 0,
              aup = a.parentNode,
              bup = b.parentNode,
              ap = [a],
              bp = [b]; // Parentless nodes are either documents or disconnected

          if (!aup || !bup) {
            return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
          } else if (aup === bup) {
            return siblingCheck(a, b);
          } // Otherwise we need full lists of their ancestors for comparison


          cur = a;

          while (cur = cur.parentNode) {
            ap.unshift(cur);
          }

          cur = b;

          while (cur = cur.parentNode) {
            bp.unshift(cur);
          } // Walk down the tree looking for a discrepancy


          while (ap[i] === bp[i]) {
            i++;
          }

          return i ? // Do a sibling check if the nodes have a common ancestor
          siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
          ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
        };
        return document;
      };

      Sizzle.matches = function (expr, elements) {
        return Sizzle(expr, null, null, elements);
      };

      Sizzle.matchesSelector = function (elem, expr) {
        // Set document vars if needed
        if ((elem.ownerDocument || elem) !== document) {
          setDocument(elem);
        }

        if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
          try {
            var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes

            if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
            // fragment in IE 9
            elem.document && elem.document.nodeType !== 11) {
              return ret;
            }
          } catch (e) {
            nonnativeSelectorCache(expr, true);
          }
        }

        return Sizzle(expr, document, null, [elem]).length > 0;
      };

      Sizzle.contains = function (context, elem) {
        // Set document vars if needed
        if ((context.ownerDocument || context) !== document) {
          setDocument(context);
        }

        return contains(context, elem);
      };

      Sizzle.attr = function (elem, name) {
        // Set document vars if needed
        if ((elem.ownerDocument || elem) !== document) {
          setDocument(elem);
        }

        var fn = Expr.attrHandle[name.toLowerCase()],
            // Don't get fooled by Object.prototype properties (jQuery #13807)
        val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
        return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
      };

      Sizzle.escape = function (sel) {
        return (sel + "").replace(rcssescape, fcssescape);
      };

      Sizzle.error = function (msg) {
        throw new Error("Syntax error, unrecognized expression: " + msg);
      };
      /**
       * Document sorting and removing duplicates
       * @param {ArrayLike} results
       */


      Sizzle.uniqueSort = function (results) {
        var elem,
            duplicates = [],
            j = 0,
            i = 0; // Unless we *know* we can detect duplicates, assume their presence

        hasDuplicate = !support.detectDuplicates;
        sortInput = !support.sortStable && results.slice(0);
        results.sort(sortOrder);

        if (hasDuplicate) {
          while (elem = results[i++]) {
            if (elem === results[i]) {
              j = duplicates.push(i);
            }
          }

          while (j--) {
            results.splice(duplicates[j], 1);
          }
        } // Clear input after sorting to release objects
        // See https://github.com/jquery/sizzle/pull/225


        sortInput = null;
        return results;
      };
      /**
       * Utility function for retrieving the text value of an array of DOM nodes
       * @param {Array|Element} elem
       */


      getText = Sizzle.getText = function (elem) {
        var node,
            ret = "",
            i = 0,
            nodeType = elem.nodeType;

        if (!nodeType) {
          // If no nodeType, this is expected to be an array
          while (node = elem[i++]) {
            // Do not traverse comment nodes
            ret += getText(node);
          }
        } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
          // Use textContent for elements
          // innerText usage removed for consistency of new lines (jQuery #11153)
          if (typeof elem.textContent === "string") {
            return elem.textContent;
          } else {
            // Traverse its children
            for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
              ret += getText(elem);
            }
          }
        } else if (nodeType === 3 || nodeType === 4) {
          return elem.nodeValue;
        } // Do not include comment or processing instruction nodes


        return ret;
      };

      Expr = Sizzle.selectors = {
        // Can be adjusted by the user
        cacheLength: 50,
        createPseudo: markFunction,
        match: matchExpr,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: true
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: true
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          "ATTR": function ATTR(match) {
            match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted

            match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

            if (match[2] === "~=") {
              match[3] = " " + match[3] + " ";
            }

            return match.slice(0, 4);
          },
          "CHILD": function CHILD(match) {
            /* matches from matchExpr["CHILD"]
            	1 type (only|nth|...)
            	2 what (child|of-type)
            	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
            	4 xn-component of xn+y argument ([+-]?\d*n|)
            	5 sign of xn-component
            	6 x of xn-component
            	7 sign of y-component
            	8 y of y-component
            */
            match[1] = match[1].toLowerCase();

            if (match[1].slice(0, 3) === "nth") {
              // nth-* requires argument
              if (!match[3]) {
                Sizzle.error(match[0]);
              } // numeric x and y parameters for Expr.filter.CHILD
              // remember that false/true cast respectively to 0/1


              match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
              match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
            } else if (match[3]) {
              Sizzle.error(match[0]);
            }

            return match;
          },
          "PSEUDO": function PSEUDO(match) {
            var excess,
                unquoted = !match[6] && match[2];

            if (matchExpr["CHILD"].test(match[0])) {
              return null;
            } // Accept quoted arguments as-is


            if (match[3]) {
              match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
            } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
            excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
            excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
              // excess is a negative index
              match[0] = match[0].slice(0, excess);
              match[2] = unquoted.slice(0, excess);
            } // Return only captures needed by the pseudo filter method (type and argument)


            return match.slice(0, 3);
          }
        },
        filter: {
          "TAG": function TAG(nodeNameSelector) {
            var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
            return nodeNameSelector === "*" ? function () {
              return true;
            } : function (elem) {
              return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
            };
          },
          "CLASS": function CLASS(className) {
            var pattern = classCache[className + " "];
            return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
              return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
            });
          },
          "ATTR": function ATTR(name, operator, check) {
            return function (elem) {
              var result = Sizzle.attr(elem, name);

              if (result == null) {
                return operator === "!=";
              }

              if (!operator) {
                return true;
              }

              result += "";
              return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
            };
          },
          "CHILD": function CHILD(type, what, argument, first, last) {
            var simple = type.slice(0, 3) !== "nth",
                forward = type.slice(-4) !== "last",
                ofType = what === "of-type";
            return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
            function (elem) {
              return !!elem.parentNode;
            } : function (elem, context, xml) {
              var cache,
                  uniqueCache,
                  outerCache,
                  node,
                  nodeIndex,
                  start,
                  dir = simple !== forward ? "nextSibling" : "previousSibling",
                  parent = elem.parentNode,
                  name = ofType && elem.nodeName.toLowerCase(),
                  useCache = !xml && !ofType,
                  diff = false;

              if (parent) {
                // :(first|last|only)-(child|of-type)
                if (simple) {
                  while (dir) {
                    node = elem;

                    while (node = node[dir]) {
                      if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                        return false;
                      }
                    } // Reverse direction for :only-* (if we haven't yet done so)


                    start = dir = type === "only" && !start && "nextSibling";
                  }

                  return true;
                }

                start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`

                if (forward && useCache) {
                  // Seek `elem` from a previously-cached index
                  // ...in a gzip-friendly way
                  node = parent;
                  outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                  // Defend against cloned attroperties (jQuery gh-1709)

                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex && cache[2];
                  node = nodeIndex && parent.childNodes[nodeIndex];

                  while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
                  diff = nodeIndex = 0) || start.pop()) {
                    // When found, cache indexes on `parent` and break
                    if (node.nodeType === 1 && ++diff && node === elem) {
                      uniqueCache[type] = [dirruns, nodeIndex, diff];
                      break;
                    }
                  }
                } else {
                  // Use previously-cached element index if available
                  if (useCache) {
                    // ...in a gzip-friendly way
                    node = elem;
                    outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                    // Defend against cloned attroperties (jQuery gh-1709)

                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                    cache = uniqueCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex;
                  } // xml :nth-child(...)
                  // or :nth-last-child(...) or :nth(-last)?-of-type(...)


                  if (diff === false) {
                    // Use the same loop as above to seek `elem` from the start
                    while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                      if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                        // Cache the index of each encountered element
                        if (useCache) {
                          outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                          // Defend against cloned attroperties (jQuery gh-1709)

                          uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                          uniqueCache[type] = [dirruns, diff];
                        }

                        if (node === elem) {
                          break;
                        }
                      }
                    }
                  }
                } // Incorporate the offset, then check against cycle size


                diff -= last;
                return diff === first || diff % first === 0 && diff / first >= 0;
              }
            };
          },
          "PSEUDO": function PSEUDO(pseudo, argument) {
            // pseudo-class names are case-insensitive
            // http://www.w3.org/TR/selectors/#pseudo-classes
            // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
            // Remember that setFilters inherits from pseudos
            var args,
                fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
            // arguments are needed to create the filter function
            // just as Sizzle does

            if (fn[expando]) {
              return fn(argument);
            } // But maintain support for old signatures


            if (fn.length > 1) {
              args = [pseudo, pseudo, "", argument];
              return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
                var idx,
                    matched = fn(seed, argument),
                    i = matched.length;

                while (i--) {
                  idx = indexOf(seed, matched[i]);
                  seed[idx] = !(matches[idx] = matched[i]);
                }
              }) : function (elem) {
                return fn(elem, 0, args);
              };
            }

            return fn;
          }
        },
        pseudos: {
          // Potentially complex pseudos
          "not": markFunction(function (selector) {
            // Trim the selector passed to compile
            // to avoid treating leading and trailing
            // spaces as combinators
            var input = [],
                results = [],
                matcher = compile(selector.replace(rtrim, "$1"));
            return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
              var elem,
                  unmatched = matcher(seed, null, xml, []),
                  i = seed.length; // Match elements unmatched by `matcher`

              while (i--) {
                if (elem = unmatched[i]) {
                  seed[i] = !(matches[i] = elem);
                }
              }
            }) : function (elem, context, xml) {
              input[0] = elem;
              matcher(input, null, xml, results); // Don't keep the element (issue #299)

              input[0] = null;
              return !results.pop();
            };
          }),
          "has": markFunction(function (selector) {
            return function (elem) {
              return Sizzle(selector, elem).length > 0;
            };
          }),
          "contains": markFunction(function (text) {
            text = text.replace(runescape, funescape);
            return function (elem) {
              return (elem.textContent || getText(elem)).indexOf(text) > -1;
            };
          }),
          // "Whether an element is represented by a :lang() selector
          // is based solely on the element's language value
          // being equal to the identifier C,
          // or beginning with the identifier C immediately followed by "-".
          // The matching of C against the element's language value is performed case-insensitively.
          // The identifier C does not have to be a valid language name."
          // http://www.w3.org/TR/selectors/#lang-pseudo
          "lang": markFunction(function (lang) {
            // lang value must be a valid identifier
            if (!ridentifier.test(lang || "")) {
              Sizzle.error("unsupported lang: " + lang);
            }

            lang = lang.replace(runescape, funescape).toLowerCase();
            return function (elem) {
              var elemLang;

              do {
                if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                  elemLang = elemLang.toLowerCase();
                  return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                }
              } while ((elem = elem.parentNode) && elem.nodeType === 1);

              return false;
            };
          }),
          // Miscellaneous
          "target": function target(elem) {
            var hash = window.location && window.location.hash;
            return hash && hash.slice(1) === elem.id;
          },
          "root": function root(elem) {
            return elem === docElem;
          },
          "focus": function focus(elem) {
            return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
          },
          // Boolean properties
          "enabled": createDisabledPseudo(false),
          "disabled": createDisabledPseudo(true),
          "checked": function checked(elem) {
            // In CSS3, :checked should return both checked and selected elements
            // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
            var nodeName = elem.nodeName.toLowerCase();
            return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
          },
          "selected": function selected(elem) {
            // Accessing this property makes selected-by-default
            // options in Safari work properly
            if (elem.parentNode) {
              elem.parentNode.selectedIndex;
            }

            return elem.selected === true;
          },
          // Contents
          "empty": function empty(elem) {
            // http://www.w3.org/TR/selectors/#empty-pseudo
            // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
            //   but not by others (comment: 8; processing instruction: 7; etc.)
            // nodeType < 6 works because attributes (2) do not appear as children
            for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
              if (elem.nodeType < 6) {
                return false;
              }
            }

            return true;
          },
          "parent": function parent(elem) {
            return !Expr.pseudos["empty"](elem);
          },
          // Element/input types
          "header": function header(elem) {
            return rheader.test(elem.nodeName);
          },
          "input": function input(elem) {
            return rinputs.test(elem.nodeName);
          },
          "button": function button(elem) {
            var name = elem.nodeName.toLowerCase();
            return name === "input" && elem.type === "button" || name === "button";
          },
          "text": function text(elem) {
            var attr;
            return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
            // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
            (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
          },
          // Position-in-collection
          "first": createPositionalPseudo(function () {
            return [0];
          }),
          "last": createPositionalPseudo(function (matchIndexes, length) {
            return [length - 1];
          }),
          "eq": createPositionalPseudo(function (matchIndexes, length, argument) {
            return [argument < 0 ? argument + length : argument];
          }),
          "even": createPositionalPseudo(function (matchIndexes, length) {
            var i = 0;

            for (; i < length; i += 2) {
              matchIndexes.push(i);
            }

            return matchIndexes;
          }),
          "odd": createPositionalPseudo(function (matchIndexes, length) {
            var i = 1;

            for (; i < length; i += 2) {
              matchIndexes.push(i);
            }

            return matchIndexes;
          }),
          "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
            var i = argument < 0 ? argument + length : argument > length ? length : argument;

            for (; --i >= 0;) {
              matchIndexes.push(i);
            }

            return matchIndexes;
          }),
          "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
            var i = argument < 0 ? argument + length : argument;

            for (; ++i < length;) {
              matchIndexes.push(i);
            }

            return matchIndexes;
          })
        }
      };
      Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos

      for (i in {
        radio: true,
        checkbox: true,
        file: true,
        password: true,
        image: true
      }) {
        Expr.pseudos[i] = createInputPseudo(i);
      }

      for (i in {
        submit: true,
        reset: true
      }) {
        Expr.pseudos[i] = createButtonPseudo(i);
      } // Easy API for creating new setFilters


      function setFilters() {}

      setFilters.prototype = Expr.filters = Expr.pseudos;
      Expr.setFilters = new setFilters();

      tokenize = Sizzle.tokenize = function (selector, parseOnly) {
        var matched,
            match,
            tokens,
            type,
            soFar,
            groups,
            preFilters,
            cached = tokenCache[selector + " "];

        if (cached) {
          return parseOnly ? 0 : cached.slice(0);
        }

        soFar = selector;
        groups = [];
        preFilters = Expr.preFilter;

        while (soFar) {
          // Comma and first run
          if (!matched || (match = rcomma.exec(soFar))) {
            if (match) {
              // Don't consume trailing commas as valid
              soFar = soFar.slice(match[0].length) || soFar;
            }

            groups.push(tokens = []);
          }

          matched = false; // Combinators

          if (match = rcombinators.exec(soFar)) {
            matched = match.shift();
            tokens.push({
              value: matched,
              // Cast descendant combinators to space
              type: match[0].replace(rtrim, " ")
            });
            soFar = soFar.slice(matched.length);
          } // Filters


          for (type in Expr.filter) {
            if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
              matched = match.shift();
              tokens.push({
                value: matched,
                type: type,
                matches: match
              });
              soFar = soFar.slice(matched.length);
            }
          }

          if (!matched) {
            break;
          }
        } // Return the length of the invalid excess
        // if we're just parsing
        // Otherwise, throw an error or return tokens


        return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
        tokenCache(selector, groups).slice(0);
      };

      function toSelector(tokens) {
        var i = 0,
            len = tokens.length,
            selector = "";

        for (; i < len; i++) {
          selector += tokens[i].value;
        }

        return selector;
      }

      function addCombinator(matcher, combinator, base) {
        var dir = combinator.dir,
            skip = combinator.next,
            key = skip || dir,
            checkNonElements = base && key === "parentNode",
            doneName = done++;
        return combinator.first ? // Check against closest ancestor/preceding element
        function (elem, context, xml) {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              return matcher(elem, context, xml);
            }
          }

          return false;
        } : // Check against all ancestor/preceding elements
        function (elem, context, xml) {
          var oldCache,
              uniqueCache,
              outerCache,
              newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching

          if (xml) {
            while (elem = elem[dir]) {
              if (elem.nodeType === 1 || checkNonElements) {
                if (matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          } else {
            while (elem = elem[dir]) {
              if (elem.nodeType === 1 || checkNonElements) {
                outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)

                uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

                if (skip && skip === elem.nodeName.toLowerCase()) {
                  elem = elem[dir] || elem;
                } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                  // Assign to newCache so results back-propagate to previous elements
                  return newCache[2] = oldCache[2];
                } else {
                  // Reuse newcache so results back-propagate to previous elements
                  uniqueCache[key] = newCache; // A match means we're done; a fail means we have to keep checking

                  if (newCache[2] = matcher(elem, context, xml)) {
                    return true;
                  }
                }
              }
            }
          }

          return false;
        };
      }

      function elementMatcher(matchers) {
        return matchers.length > 1 ? function (elem, context, xml) {
          var i = matchers.length;

          while (i--) {
            if (!matchers[i](elem, context, xml)) {
              return false;
            }
          }

          return true;
        } : matchers[0];
      }

      function multipleContexts(selector, contexts, results) {
        var i = 0,
            len = contexts.length;

        for (; i < len; i++) {
          Sizzle(selector, contexts[i], results);
        }

        return results;
      }

      function condense(unmatched, map, filter, context, xml) {
        var elem,
            newUnmatched = [],
            i = 0,
            len = unmatched.length,
            mapped = map != null;

        for (; i < len; i++) {
          if (elem = unmatched[i]) {
            if (!filter || filter(elem, context, xml)) {
              newUnmatched.push(elem);

              if (mapped) {
                map.push(i);
              }
            }
          }
        }

        return newUnmatched;
      }

      function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
        if (postFilter && !postFilter[expando]) {
          postFilter = setMatcher(postFilter);
        }

        if (postFinder && !postFinder[expando]) {
          postFinder = setMatcher(postFinder, postSelector);
        }

        return markFunction(function (seed, results, context, xml) {
          var temp,
              i,
              elem,
              preMap = [],
              postMap = [],
              preexisting = results.length,
              // Get initial elements from seed or context
          elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
              // Prefilter to get matcher input, preserving a map for seed-results synchronization
          matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
              matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
          postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
          [] : // ...otherwise use results directly
          results : matcherIn; // Find primary matches

          if (matcher) {
            matcher(matcherIn, matcherOut, context, xml);
          } // Apply postFilter


          if (postFilter) {
            temp = condense(matcherOut, postMap);
            postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn

            i = temp.length;

            while (i--) {
              if (elem = temp[i]) {
                matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
              }
            }
          }

          if (seed) {
            if (postFinder || preFilter) {
              if (postFinder) {
                // Get the final matcherOut by condensing this intermediate into postFinder contexts
                temp = [];
                i = matcherOut.length;

                while (i--) {
                  if (elem = matcherOut[i]) {
                    // Restore matcherIn since elem is not yet a final match
                    temp.push(matcherIn[i] = elem);
                  }
                }

                postFinder(null, matcherOut = [], temp, xml);
              } // Move matched elements from seed to results to keep them synchronized


              i = matcherOut.length;

              while (i--) {
                if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                  seed[temp] = !(results[temp] = elem);
                }
              }
            } // Add elements to results, through postFinder if defined

          } else {
            matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);

            if (postFinder) {
              postFinder(null, results, matcherOut, xml);
            } else {
              push.apply(results, matcherOut);
            }
          }
        });
      }

      function matcherFromTokens(tokens) {
        var checkContext,
            matcher,
            j,
            len = tokens.length,
            leadingRelative = Expr.relative[tokens[0].type],
            implicitRelative = leadingRelative || Expr.relative[" "],
            i = leadingRelative ? 1 : 0,
            // The foundational matcher ensures that elements are reachable from top-level context(s)
        matchContext = addCombinator(function (elem) {
          return elem === checkContext;
        }, implicitRelative, true),
            matchAnyContext = addCombinator(function (elem) {
          return indexOf(checkContext, elem) > -1;
        }, implicitRelative, true),
            matchers = [function (elem, context, xml) {
          var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)

          checkContext = null;
          return ret;
        }];

        for (; i < len; i++) {
          if (matcher = Expr.relative[tokens[i].type]) {
            matchers = [addCombinator(elementMatcher(matchers), matcher)];
          } else {
            matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher

            if (matcher[expando]) {
              // Find the next relative operator (if any) for proper handling
              j = ++i;

              for (; j < len; j++) {
                if (Expr.relative[tokens[j].type]) {
                  break;
                }
              }

              return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
              tokens.slice(0, i - 1).concat({
                value: tokens[i - 2].type === " " ? "*" : ""
              })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
            }

            matchers.push(matcher);
          }
        }

        return elementMatcher(matchers);
      }

      function matcherFromGroupMatchers(elementMatchers, setMatchers) {
        var bySet = setMatchers.length > 0,
            byElement = elementMatchers.length > 0,
            superMatcher = function superMatcher(seed, context, xml, results, outermost) {
          var elem,
              j,
              matcher,
              matchedCount = 0,
              i = "0",
              unmatched = seed && [],
              setMatched = [],
              contextBackup = outermostContext,
              // We must always have either seed elements or outermost context
          elems = seed || byElement && Expr.find["TAG"]("*", outermost),
              // Use integer dirruns iff this is the outermost matcher
          dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
              len = elems.length;

          if (outermost) {
            outermostContext = context === document || context || outermost;
          } // Add elements passing elementMatchers directly to results
          // Support: IE<9, Safari
          // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id


          for (; i !== len && (elem = elems[i]) != null; i++) {
            if (byElement && elem) {
              j = 0;

              if (!context && elem.ownerDocument !== document) {
                setDocument(elem);
                xml = !documentIsHTML;
              }

              while (matcher = elementMatchers[j++]) {
                if (matcher(elem, context || document, xml)) {
                  results.push(elem);
                  break;
                }
              }

              if (outermost) {
                dirruns = dirrunsUnique;
              }
            } // Track unmatched elements for set filters


            if (bySet) {
              // They will have gone through all possible matchers
              if (elem = !matcher && elem) {
                matchedCount--;
              } // Lengthen the array for every element, matched or not


              if (seed) {
                unmatched.push(elem);
              }
            }
          } // `i` is now the count of elements visited above, and adding it to `matchedCount`
          // makes the latter nonnegative.


          matchedCount += i; // Apply set filters to unmatched elements
          // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
          // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
          // no element matchers and no seed.
          // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
          // case, which will result in a "00" `matchedCount` that differs from `i` but is also
          // numerically zero.

          if (bySet && i !== matchedCount) {
            j = 0;

            while (matcher = setMatchers[j++]) {
              matcher(unmatched, setMatched, context, xml);
            }

            if (seed) {
              // Reintegrate element matches to eliminate the need for sorting
              if (matchedCount > 0) {
                while (i--) {
                  if (!(unmatched[i] || setMatched[i])) {
                    setMatched[i] = pop.call(results);
                  }
                }
              } // Discard index placeholder values to get only actual matches


              setMatched = condense(setMatched);
            } // Add matches to results


            push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting

            if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
              Sizzle.uniqueSort(results);
            }
          } // Override manipulation of globals by nested matchers


          if (outermost) {
            dirruns = dirrunsUnique;
            outermostContext = contextBackup;
          }

          return unmatched;
        };

        return bySet ? markFunction(superMatcher) : superMatcher;
      }

      compile = Sizzle.compile = function (selector, match
      /* Internal Use Only */
      ) {
        var i,
            setMatchers = [],
            elementMatchers = [],
            cached = compilerCache[selector + " "];

        if (!cached) {
          // Generate a function of recursive functions that can be used to check each element
          if (!match) {
            match = tokenize(selector);
          }

          i = match.length;

          while (i--) {
            cached = matcherFromTokens(match[i]);

            if (cached[expando]) {
              setMatchers.push(cached);
            } else {
              elementMatchers.push(cached);
            }
          } // Cache the compiled function


          cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization

          cached.selector = selector;
        }

        return cached;
      };
      /**
       * A low-level selection function that works with Sizzle's compiled
       *  selector functions
       * @param {String|Function} selector A selector or a pre-compiled
       *  selector function built with Sizzle.compile
       * @param {Element} context
       * @param {Array} [results]
       * @param {Array} [seed] A set of elements to match against
       */


      select = Sizzle.select = function (selector, context, results, seed) {
        var i,
            tokens,
            token,
            type,
            find,
            compiled = typeof selector === "function" && selector,
            match = !seed && tokenize(selector = compiled.selector || selector);
        results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
        // (the latter of which guarantees us context)

        if (match.length === 1) {
          // Reduce context if the leading compound selector is an ID
          tokens = match[0] = match[0].slice(0);

          if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
            context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];

            if (!context) {
              return results; // Precompiled matchers will still verify ancestry, so step up a level
            } else if (compiled) {
              context = context.parentNode;
            }

            selector = selector.slice(tokens.shift().value.length);
          } // Fetch a seed set for right-to-left matching


          i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;

          while (i--) {
            token = tokens[i]; // Abort if we hit a combinator

            if (Expr.relative[type = token.type]) {
              break;
            }

            if (find = Expr.find[type]) {
              // Search, expanding context for leading sibling combinators
              if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                // If seed is empty or no tokens remain, we can return early
                tokens.splice(i, 1);
                selector = seed.length && toSelector(tokens);

                if (!selector) {
                  push.apply(results, seed);
                  return results;
                }

                break;
              }
            }
          }
        } // Compile and execute a filtering function if one is not provided
        // Provide `match` to avoid retokenization if we modified the selector above


        (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
        return results;
      }; // One-time assignments
      // Sort stability


      support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
      // Always assume duplicates if they aren't passed to the comparison function

      support.detectDuplicates = !!hasDuplicate; // Initialize against the default document

      setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
      // Detached nodes confoundingly follow *each other*

      support.sortDetached = assert(function (el) {
        // Should return 1, but returns 4 (following)
        return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
      }); // Support: IE<8
      // Prevent attribute/property "interpolation"
      // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx

      if (!assert(function (el) {
        el.innerHTML = "<a href='#'></a>";
        return el.firstChild.getAttribute("href") === "#";
      })) {
        addHandle("type|href|height|width", function (elem, name, isXML) {
          if (!isXML) {
            return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
          }
        });
      } // Support: IE<9
      // Use defaultValue in place of getAttribute("value")


      if (!support.attributes || !assert(function (el) {
        el.innerHTML = "<input/>";
        el.firstChild.setAttribute("value", "");
        return el.firstChild.getAttribute("value") === "";
      })) {
        addHandle("value", function (elem, name, isXML) {
          if (!isXML && elem.nodeName.toLowerCase() === "input") {
            return elem.defaultValue;
          }
        });
      } // Support: IE<9
      // Use getAttributeNode to fetch booleans when getAttribute lies


      if (!assert(function (el) {
        return el.getAttribute("disabled") == null;
      })) {
        addHandle(booleans, function (elem, name, isXML) {
          var val;

          if (!isXML) {
            return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
          }
        });
      }

      return Sizzle;
    }(window);

    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors; // Deprecated

    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    jQuery.escapeSelector = Sizzle.escape;

    var dir = function dir(elem, _dir, until) {
      var matched = [],
          truncate = until !== undefined;

      while ((elem = elem[_dir]) && elem.nodeType !== 9) {
        if (elem.nodeType === 1) {
          if (truncate && jQuery(elem).is(until)) {
            break;
          }

          matched.push(elem);
        }
      }

      return matched;
    };

    var _siblings = function siblings(n, elem) {
      var matched = [];

      for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== elem) {
          matched.push(n);
        }
      }

      return matched;
    };

    var rneedsContext = jQuery.expr.match.needsContext;

    function nodeName(elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    }

    var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // Implement the identical functionality for filter and not

    function winnow(elements, qualifier, not) {
      if (isFunction(qualifier)) {
        return jQuery.grep(elements, function (elem, i) {
          return !!qualifier.call(elem, i, elem) !== not;
        });
      } // Single element


      if (qualifier.nodeType) {
        return jQuery.grep(elements, function (elem) {
          return elem === qualifier !== not;
        });
      } // Arraylike of elements (jQuery, arguments, Array)


      if (typeof qualifier !== "string") {
        return jQuery.grep(elements, function (elem) {
          return indexOf.call(qualifier, elem) > -1 !== not;
        });
      } // Filtered directly for both simple and complex selectors


      return jQuery.filter(qualifier, elements, not);
    }

    jQuery.filter = function (expr, elems, not) {
      var elem = elems[0];

      if (not) {
        expr = ":not(" + expr + ")";
      }

      if (elems.length === 1 && elem.nodeType === 1) {
        return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
      }

      return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
        return elem.nodeType === 1;
      }));
    };

    jQuery.fn.extend({
      find: function find(selector) {
        var i,
            ret,
            len = this.length,
            self = this;

        if (typeof selector !== "string") {
          return this.pushStack(jQuery(selector).filter(function () {
            for (i = 0; i < len; i++) {
              if (jQuery.contains(self[i], this)) {
                return true;
              }
            }
          }));
        }

        ret = this.pushStack([]);

        for (i = 0; i < len; i++) {
          jQuery.find(selector, self[i], ret);
        }

        return len > 1 ? jQuery.uniqueSort(ret) : ret;
      },
      filter: function filter(selector) {
        return this.pushStack(winnow(this, selector || [], false));
      },
      not: function not(selector) {
        return this.pushStack(winnow(this, selector || [], true));
      },
      is: function is(selector) {
        return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
        // so $("p:first").is("p:last") won't return true for a doc with two "p".
        typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
      }
    }); // Initialize a jQuery object
    // A central reference to the root jQuery(document)

    var rootjQuery,
        // A simple way to check for HTML strings
    // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
    // Strict HTML recognition (#11290: must start with <)
    // Shortcut simple #id case for speed
    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        init = jQuery.fn.init = function (selector, context, root) {
      var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)

      if (!selector) {
        return this;
      } // Method init() accepts an alternate rootjQuery
      // so migrate can support jQuery.sub (gh-2101)


      root = root || rootjQuery; // Handle HTML strings

      if (typeof selector === "string") {
        if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
          // Assume that strings that start and end with <> are HTML and skip the regex check
          match = [null, selector, null];
        } else {
          match = rquickExpr.exec(selector);
        } // Match html or make sure no context is specified for #id


        if (match && (match[1] || !context)) {
          // HANDLE: $(html) -> $(array)
          if (match[1]) {
            context = context instanceof jQuery ? context[0] : context; // Option to run scripts is true for back-compat
            // Intentionally let the error be thrown if parseHTML is not present

            jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)

            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
              for (match in context) {
                // Properties of context are called as methods if possible
                if (isFunction(this[match])) {
                  this[match](context[match]); // ...and otherwise set as attributes
                } else {
                  this.attr(match, context[match]);
                }
              }
            }

            return this; // HANDLE: $(#id)
          } else {
            elem = document.getElementById(match[2]);

            if (elem) {
              // Inject the element directly into the jQuery object
              this[0] = elem;
              this.length = 1;
            }

            return this;
          } // HANDLE: $(expr, $(...))

        } else if (!context || context.jquery) {
          return (context || root).find(selector); // HANDLE: $(expr, context)
          // (which is just equivalent to: $(context).find(expr)
        } else {
          return this.constructor(context).find(selector);
        } // HANDLE: $(DOMElement)

      } else if (selector.nodeType) {
        this[0] = selector;
        this.length = 1;
        return this; // HANDLE: $(function)
        // Shortcut for document ready
      } else if (isFunction(selector)) {
        return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
        selector(jQuery);
      }

      return jQuery.makeArray(selector, this);
    }; // Give the init function the jQuery prototype for later instantiation


    init.prototype = jQuery.fn; // Initialize central reference

    rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/,
        // Methods guaranteed to produce a unique set when starting from a unique set
    guaranteedUnique = {
      children: true,
      contents: true,
      next: true,
      prev: true
    };
    jQuery.fn.extend({
      has: function has(target) {
        var targets = jQuery(target, this),
            l = targets.length;
        return this.filter(function () {
          var i = 0;

          for (; i < l; i++) {
            if (jQuery.contains(this, targets[i])) {
              return true;
            }
          }
        });
      },
      closest: function closest(selectors, context) {
        var cur,
            i = 0,
            l = this.length,
            matched = [],
            targets = typeof selectors !== "string" && jQuery(selectors); // Positional selectors never match, since there's no _selection_ context

        if (!rneedsContext.test(selectors)) {
          for (; i < l; i++) {
            for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
              // Always skip document fragments
              if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
              cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                matched.push(cur);
                break;
              }
            }
          }
        }

        return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
      },
      // Determine the position of an element within the set
      index: function index(elem) {
        // No argument, return index in parent
        if (!elem) {
          return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        } // Index in selector


        if (typeof elem === "string") {
          return indexOf.call(jQuery(elem), this[0]);
        } // Locate the position of the desired element


        return indexOf.call(this, // If it receives a jQuery object, the first element is used
        elem.jquery ? elem[0] : elem);
      },
      add: function add(selector, context) {
        return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
      },
      addBack: function addBack(selector) {
        return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
      }
    });

    function sibling(cur, dir) {
      while ((cur = cur[dir]) && cur.nodeType !== 1) {}

      return cur;
    }

    jQuery.each({
      parent: function parent(elem) {
        var parent = elem.parentNode;
        return parent && parent.nodeType !== 11 ? parent : null;
      },
      parents: function parents(elem) {
        return dir(elem, "parentNode");
      },
      parentsUntil: function parentsUntil(elem, i, until) {
        return dir(elem, "parentNode", until);
      },
      next: function next(elem) {
        return sibling(elem, "nextSibling");
      },
      prev: function prev(elem) {
        return sibling(elem, "previousSibling");
      },
      nextAll: function nextAll(elem) {
        return dir(elem, "nextSibling");
      },
      prevAll: function prevAll(elem) {
        return dir(elem, "previousSibling");
      },
      nextUntil: function nextUntil(elem, i, until) {
        return dir(elem, "nextSibling", until);
      },
      prevUntil: function prevUntil(elem, i, until) {
        return dir(elem, "previousSibling", until);
      },
      siblings: function siblings(elem) {
        return _siblings((elem.parentNode || {}).firstChild, elem);
      },
      children: function children(elem) {
        return _siblings(elem.firstChild);
      },
      contents: function contents(elem) {
        if (typeof elem.contentDocument !== "undefined") {
          return elem.contentDocument;
        } // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.


        if (nodeName(elem, "template")) {
          elem = elem.content || elem;
        }

        return jQuery.merge([], elem.childNodes);
      }
    }, function (name, fn) {
      jQuery.fn[name] = function (until, selector) {
        var matched = jQuery.map(this, fn, until);

        if (name.slice(-5) !== "Until") {
          selector = until;
        }

        if (selector && typeof selector === "string") {
          matched = jQuery.filter(selector, matched);
        }

        if (this.length > 1) {
          // Remove duplicates
          if (!guaranteedUnique[name]) {
            jQuery.uniqueSort(matched);
          } // Reverse order for parents* and prev-derivatives


          if (rparentsprev.test(name)) {
            matched.reverse();
          }
        }

        return this.pushStack(matched);
      };
    });
    var rnothtmlwhite = /[^\x20\t\r\n\f]+/g; // Convert String-formatted options into Object-formatted ones

    function createOptions(options) {
      var object = {};
      jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
        object[flag] = true;
      });
      return object;
    }
    /*
     * Create a callback list using the following parameters:
     *
     *	options: an optional list of space-separated options that will change how
     *			the callback list behaves or a more traditional option object
     *
     * By default a callback list will act like an event callback list and can be
     * "fired" multiple times.
     *
     * Possible options:
     *
     *	once:			will ensure the callback list can only be fired once (like a Deferred)
     *
     *	memory:			will keep track of previous values and will call any callback added
     *					after the list has been fired right away with the latest "memorized"
     *					values (like a Deferred)
     *
     *	unique:			will ensure a callback can only be added once (no duplicate in the list)
     *
     *	stopOnFalse:	interrupt callings when a callback returns false
     *
     */


    jQuery.Callbacks = function (options) {
      // Convert options from String-formatted to Object-formatted if needed
      // (we check in cache first)
      options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

      var // Flag to know if list is currently firing
      firing,
          // Last fire value for non-forgettable lists
      memory,
          // Flag to know if list was already fired
      _fired,
          // Flag to prevent firing
      _locked,
          // Actual callback list
      list = [],
          // Queue of execution data for repeatable lists
      queue = [],
          // Index of currently firing callback (modified by add/remove as needed)
      firingIndex = -1,
          // Fire callbacks
      fire = function fire() {
        // Enforce single-firing
        _locked = _locked || options.once; // Execute callbacks for all pending executions,
        // respecting firingIndex overrides and runtime changes

        _fired = firing = true;

        for (; queue.length; firingIndex = -1) {
          memory = queue.shift();

          while (++firingIndex < list.length) {
            // Run callback and check for early termination
            if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
              // Jump to end and forget the data so .add doesn't re-fire
              firingIndex = list.length;
              memory = false;
            }
          }
        } // Forget the data if we're done with it


        if (!options.memory) {
          memory = false;
        }

        firing = false; // Clean up if we're done firing for good

        if (_locked) {
          // Keep an empty list if we have data for future add calls
          if (memory) {
            list = []; // Otherwise, this object is spent
          } else {
            list = "";
          }
        }
      },
          // Actual Callbacks object
      self = {
        // Add a callback or a collection of callbacks to the list
        add: function add() {
          if (list) {
            // If we have memory from a past run, we should fire after adding
            if (memory && !firing) {
              firingIndex = list.length - 1;
              queue.push(memory);
            }

            (function add(args) {
              jQuery.each(args, function (_, arg) {
                if (isFunction(arg)) {
                  if (!options.unique || !self.has(arg)) {
                    list.push(arg);
                  }
                } else if (arg && arg.length && toType(arg) !== "string") {
                  // Inspect recursively
                  add(arg);
                }
              });
            })(arguments);

            if (memory && !firing) {
              fire();
            }
          }

          return this;
        },
        // Remove a callback from the list
        remove: function remove() {
          jQuery.each(arguments, function (_, arg) {
            var index;

            while ((index = jQuery.inArray(arg, list, index)) > -1) {
              list.splice(index, 1); // Handle firing indexes

              if (index <= firingIndex) {
                firingIndex--;
              }
            }
          });
          return this;
        },
        // Check if a given callback is in the list.
        // If no argument is given, return whether or not list has callbacks attached.
        has: function has(fn) {
          return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
        },
        // Remove all callbacks from the list
        empty: function empty() {
          if (list) {
            list = [];
          }

          return this;
        },
        // Disable .fire and .add
        // Abort any current/pending executions
        // Clear all callbacks and values
        disable: function disable() {
          _locked = queue = [];
          list = memory = "";
          return this;
        },
        disabled: function disabled() {
          return !list;
        },
        // Disable .fire
        // Also disable .add unless we have memory (since it would have no effect)
        // Abort any pending executions
        lock: function lock() {
          _locked = queue = [];

          if (!memory && !firing) {
            list = memory = "";
          }

          return this;
        },
        locked: function locked() {
          return !!_locked;
        },
        // Call all callbacks with the given context and arguments
        fireWith: function fireWith(context, args) {
          if (!_locked) {
            args = args || [];
            args = [context, args.slice ? args.slice() : args];
            queue.push(args);

            if (!firing) {
              fire();
            }
          }

          return this;
        },
        // Call all the callbacks with the given arguments
        fire: function fire() {
          self.fireWith(this, arguments);
          return this;
        },
        // To know if the callbacks have already been called at least once
        fired: function fired() {
          return !!_fired;
        }
      };

      return self;
    };

    function Identity(v) {
      return v;
    }

    function Thrower(ex) {
      throw ex;
    }

    function adoptValue(value, resolve, reject, noValue) {
      var method;

      try {
        // Check for promise aspect first to privilege synchronous behavior
        if (value && isFunction(method = value.promise)) {
          method.call(value).done(resolve).fail(reject); // Other thenables
        } else if (value && isFunction(method = value.then)) {
          method.call(value, resolve, reject); // Other non-thenables
        } else {
          // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
          // * false: [ value ].slice( 0 ) => resolve( value )
          // * true: [ value ].slice( 1 ) => resolve()
          resolve.apply(undefined, [value].slice(noValue));
        } // For Promises/A+, convert exceptions into rejections
        // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
        // Deferred#then to conditionally suppress rejection.

      } catch (value) {
        // Support: Android 4.0 only
        // Strict mode functions invoked without .call/.apply get global-object context
        reject.apply(undefined, [value]);
      }
    }

    jQuery.extend({
      Deferred: function Deferred(func) {
        var tuples = [// action, add listener, callbacks,
        // ... .then handlers, argument index, [final state]
        ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
            _state = "pending",
            _promise = {
          state: function state() {
            return _state;
          },
          always: function always() {
            deferred.done(arguments).fail(arguments);
            return this;
          },
          "catch": function _catch(fn) {
            return _promise.then(null, fn);
          },
          // Keep pipe for back-compat
          pipe: function pipe()
          /* fnDone, fnFail, fnProgress */
          {
            var fns = arguments;
            return jQuery.Deferred(function (newDefer) {
              jQuery.each(tuples, function (i, tuple) {
                // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]; // deferred.progress(function() { bind to newDefer or newDefer.notify })
                // deferred.done(function() { bind to newDefer or newDefer.resolve })
                // deferred.fail(function() { bind to newDefer or newDefer.reject })

                deferred[tuple[1]](function () {
                  var returned = fn && fn.apply(this, arguments);

                  if (returned && isFunction(returned.promise)) {
                    returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                  } else {
                    newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                  }
                });
              });
              fns = null;
            }).promise();
          },
          then: function then(onFulfilled, onRejected, onProgress) {
            var maxDepth = 0;

            function resolve(depth, deferred, handler, special) {
              return function () {
                var that = this,
                    args = arguments,
                    mightThrow = function mightThrow() {
                  var returned, then; // Support: Promises/A+ section 2.3.3.3.3
                  // https://promisesaplus.com/#point-59
                  // Ignore double-resolution attempts

                  if (depth < maxDepth) {
                    return;
                  }

                  returned = handler.apply(that, args); // Support: Promises/A+ section 2.3.1
                  // https://promisesaplus.com/#point-48

                  if (returned === deferred.promise()) {
                    throw new TypeError("Thenable self-resolution");
                  } // Support: Promises/A+ sections 2.3.3.1, 3.5
                  // https://promisesaplus.com/#point-54
                  // https://promisesaplus.com/#point-75
                  // Retrieve `then` only once


                  then = returned && ( // Support: Promises/A+ section 2.3.4
                  // https://promisesaplus.com/#point-64
                  // Only check objects and functions for thenability
                  _typeof(returned) === "object" || typeof returned === "function") && returned.then; // Handle a returned thenable

                  if (isFunction(then)) {
                    // Special processors (notify) just wait for resolution
                    if (special) {
                      then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); // Normal processors (resolve) also hook into progress
                    } else {
                      // ...and disregard older resolution values
                      maxDepth++;
                      then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                    } // Handle all other returned values

                  } else {
                    // Only substitute handlers pass on context
                    // and multiple values (non-spec behavior)
                    if (handler !== Identity) {
                      that = undefined;
                      args = [returned];
                    } // Process the value(s)
                    // Default process is resolve


                    (special || deferred.resolveWith)(that, args);
                  }
                },
                    // Only normal processors (resolve) catch and reject exceptions
                process = special ? mightThrow : function () {
                  try {
                    mightThrow();
                  } catch (e) {
                    if (jQuery.Deferred.exceptionHook) {
                      jQuery.Deferred.exceptionHook(e, process.stackTrace);
                    } // Support: Promises/A+ section 2.3.3.3.4.1
                    // https://promisesaplus.com/#point-61
                    // Ignore post-resolution exceptions


                    if (depth + 1 >= maxDepth) {
                      // Only substitute handlers pass on context
                      // and multiple values (non-spec behavior)
                      if (handler !== Thrower) {
                        that = undefined;
                        args = [e];
                      }

                      deferred.rejectWith(that, args);
                    }
                  }
                }; // Support: Promises/A+ section 2.3.3.3.1
                // https://promisesaplus.com/#point-57
                // Re-resolve promises immediately to dodge false rejection from
                // subsequent errors


                if (depth) {
                  process();
                } else {
                  // Call an optional hook to record the stack, in case of exception
                  // since it's otherwise lost when execution goes async
                  if (jQuery.Deferred.getStackHook) {
                    process.stackTrace = jQuery.Deferred.getStackHook();
                  }

                  window.setTimeout(process);
                }
              };
            }

            return jQuery.Deferred(function (newDefer) {
              // progress_handlers.add( ... )
              tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)); // fulfilled_handlers.add( ... )

              tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)); // rejected_handlers.add( ... )

              tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
            }).promise();
          },
          // Get a promise for this deferred
          // If obj is provided, the promise aspect is added to the object
          promise: function promise(obj) {
            return obj != null ? jQuery.extend(obj, _promise) : _promise;
          }
        },
            deferred = {}; // Add list-specific methods

        jQuery.each(tuples, function (i, tuple) {
          var list = tuple[2],
              stateString = tuple[5]; // promise.progress = list.add
          // promise.done = list.add
          // promise.fail = list.add

          _promise[tuple[1]] = list.add; // Handle state

          if (stateString) {
            list.add(function () {
              // state = "resolved" (i.e., fulfilled)
              // state = "rejected"
              _state = stateString;
            }, // rejected_callbacks.disable
            // fulfilled_callbacks.disable
            tuples[3 - i][2].disable, // rejected_handlers.disable
            // fulfilled_handlers.disable
            tuples[3 - i][3].disable, // progress_callbacks.lock
            tuples[0][2].lock, // progress_handlers.lock
            tuples[0][3].lock);
          } // progress_handlers.fire
          // fulfilled_handlers.fire
          // rejected_handlers.fire


          list.add(tuple[3].fire); // deferred.notify = function() { deferred.notifyWith(...) }
          // deferred.resolve = function() { deferred.resolveWith(...) }
          // deferred.reject = function() { deferred.rejectWith(...) }

          deferred[tuple[0]] = function () {
            deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
            return this;
          }; // deferred.notifyWith = list.fireWith
          // deferred.resolveWith = list.fireWith
          // deferred.rejectWith = list.fireWith


          deferred[tuple[0] + "With"] = list.fireWith;
        }); // Make the deferred a promise

        _promise.promise(deferred); // Call given func if any


        if (func) {
          func.call(deferred, deferred);
        } // All done!


        return deferred;
      },
      // Deferred helper
      when: function when(singleValue) {
        var // count of uncompleted subordinates
        remaining = arguments.length,
            // count of unprocessed arguments
        i = remaining,
            // subordinate fulfillment data
        resolveContexts = Array(i),
            resolveValues = _slice.call(arguments),
            // the master Deferred
        master = jQuery.Deferred(),
            // subordinate callback factory
        updateFunc = function updateFunc(i) {
          return function (value) {
            resolveContexts[i] = this;
            resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;

            if (! --remaining) {
              master.resolveWith(resolveContexts, resolveValues);
            }
          };
        }; // Single- and empty arguments are adopted like Promise.resolve


        if (remaining <= 1) {
          adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining); // Use .then() to unwrap secondary thenables (cf. gh-3000)

          if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
            return master.then();
          }
        } // Multiple arguments are aggregated like Promise.all array elements


        while (i--) {
          adoptValue(resolveValues[i], updateFunc(i), master.reject);
        }

        return master.promise();
      }
    }); // These usually indicate a programmer mistake during development,
    // warn about them ASAP rather than swallowing them by default.

    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

    jQuery.Deferred.exceptionHook = function (error, stack) {
      // Support: IE 8 - 9 only
      // Console exists when dev tools are open, which can happen at any time
      if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
        window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
      }
    };

    jQuery.readyException = function (error) {
      window.setTimeout(function () {
        throw error;
      });
    }; // The deferred used on DOM ready


    var readyList = jQuery.Deferred();

    jQuery.fn.ready = function (fn) {
      readyList.then(fn) // Wrap jQuery.readyException in a function so that the lookup
      // happens at the time of error handling instead of callback
      // registration.
      ["catch"](function (error) {
        jQuery.readyException(error);
      });
      return this;
    };

    jQuery.extend({
      // Is the DOM ready to be used? Set to true once it occurs.
      isReady: false,
      // A counter to track how many items to wait for before
      // the ready event fires. See #6781
      readyWait: 1,
      // Handle when the DOM is ready
      ready: function ready(wait) {
        // Abort if there are pending holds or we're already ready
        if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
          return;
        } // Remember that the DOM is ready


        jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be

        if (wait !== true && --jQuery.readyWait > 0) {
          return;
        } // If there are functions bound, to execute


        readyList.resolveWith(document, [jQuery]);
      }
    });
    jQuery.ready.then = readyList.then; // The ready event handler and self cleanup method

    function completed() {
      document.removeEventListener("DOMContentLoaded", completed);
      window.removeEventListener("load", completed);
      jQuery.ready();
    } // Catch cases where $(document).ready() is called
    // after the browser event has already occurred.
    // Support: IE <=9 - 10 only
    // Older IE sometimes signals "interactive" too soon


    if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
      // Handle it asynchronously to allow scripts the opportunity to delay ready
      window.setTimeout(jQuery.ready);
    } else {
      // Use the handy event callback
      document.addEventListener("DOMContentLoaded", completed); // A fallback to window.onload, that will always work

      window.addEventListener("load", completed);
    } // Multifunctional method to get and set values of a collection
    // The value/s can optionally be executed if it's a function


    var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
      var i = 0,
          len = elems.length,
          bulk = key == null; // Sets many values

      if (toType(key) === "object") {
        chainable = true;

        for (i in key) {
          access(elems, fn, i, key[i], true, emptyGet, raw);
        } // Sets one value

      } else if (value !== undefined) {
        chainable = true;

        if (!isFunction(value)) {
          raw = true;
        }

        if (bulk) {
          // Bulk operations run against the entire set
          if (raw) {
            fn.call(elems, value);
            fn = null; // ...except when executing function values
          } else {
            bulk = fn;

            fn = function fn(elem, key, value) {
              return bulk.call(jQuery(elem), value);
            };
          }
        }

        if (fn) {
          for (; i < len; i++) {
            fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
          }
        }
      }

      if (chainable) {
        return elems;
      } // Gets


      if (bulk) {
        return fn.call(elems);
      }

      return len ? fn(elems[0], key) : emptyGet;
    }; // Matches dashed string for camelizing


    var rmsPrefix = /^-ms-/,
        rdashAlpha = /-([a-z])/g; // Used by camelCase as callback to replace()

    function fcamelCase(all, letter) {
      return letter.toUpperCase();
    } // Convert dashed to camelCase; used by the css and data modules
    // Support: IE <=9 - 11, Edge 12 - 15
    // Microsoft forgot to hump their vendor prefix (#9572)


    function camelCase(string) {
      return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    }

    var acceptData = function acceptData(owner) {
      // Accepts only:
      //  - Node
      //    - Node.ELEMENT_NODE
      //    - Node.DOCUMENT_NODE
      //  - Object
      //    - Any
      return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
    };

    function Data() {
      this.expando = jQuery.expando + Data.uid++;
    }

    Data.uid = 1;
    Data.prototype = {
      cache: function cache(owner) {
        // Check if the owner object already has a cache
        var value = owner[this.expando]; // If not, create one

        if (!value) {
          value = {}; // We can accept data for non-element nodes in modern browsers,
          // but we should not, see #8335.
          // Always return an empty object.

          if (acceptData(owner)) {
            // If it is a node unlikely to be stringify-ed or looped over
            // use plain assignment
            if (owner.nodeType) {
              owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
              // configurable must be true to allow the property to be
              // deleted when data is removed
            } else {
              Object.defineProperty(owner, this.expando, {
                value: value,
                configurable: true
              });
            }
          }
        }

        return value;
      },
      set: function set(owner, data, value) {
        var prop,
            cache = this.cache(owner); // Handle: [ owner, key, value ] args
        // Always use camelCase key (gh-2257)

        if (typeof data === "string") {
          cache[camelCase(data)] = value; // Handle: [ owner, { properties } ] args
        } else {
          // Copy the properties one-by-one to the cache object
          for (prop in data) {
            cache[camelCase(prop)] = data[prop];
          }
        }

        return cache;
      },
      get: function get(owner, key) {
        return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
        owner[this.expando] && owner[this.expando][camelCase(key)];
      },
      access: function access(owner, key, value) {
        // In cases where either:
        //
        //   1. No key was specified
        //   2. A string key was specified, but no value provided
        //
        // Take the "read" path and allow the get method to determine
        // which value to return, respectively either:
        //
        //   1. The entire cache object
        //   2. The data stored at the key
        //
        if (key === undefined || key && typeof key === "string" && value === undefined) {
          return this.get(owner, key);
        } // When the key is not a string, or both a key and value
        // are specified, set or extend (existing objects) with either:
        //
        //   1. An object of properties
        //   2. A key and value
        //


        this.set(owner, key, value); // Since the "set" path can have two possible entry points
        // return the expected data based on which path was taken[*]

        return value !== undefined ? value : key;
      },
      remove: function remove(owner, key) {
        var i,
            cache = owner[this.expando];

        if (cache === undefined) {
          return;
        }

        if (key !== undefined) {
          // Support array or space separated string of keys
          if (Array.isArray(key)) {
            // If key is an array of keys...
            // We always set camelCase keys, so remove that.
            key = key.map(camelCase);
          } else {
            key = camelCase(key); // If a key with the spaces exists, use it.
            // Otherwise, create an array by matching non-whitespace

            key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
          }

          i = key.length;

          while (i--) {
            delete cache[key[i]];
          }
        } // Remove the expando if there's no more data


        if (key === undefined || jQuery.isEmptyObject(cache)) {
          // Support: Chrome <=35 - 45
          // Webkit & Blink performance suffers when deleting properties
          // from DOM nodes, so set to undefined instead
          // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
          if (owner.nodeType) {
            owner[this.expando] = undefined;
          } else {
            delete owner[this.expando];
          }
        }
      },
      hasData: function hasData(owner) {
        var cache = owner[this.expando];
        return cache !== undefined && !jQuery.isEmptyObject(cache);
      }
    };
    var dataPriv = new Data();
    var dataUser = new Data(); //	Implementation Summary
    //
    //	1. Enforce API surface and semantic compatibility with 1.9.x branch
    //	2. Improve the module's maintainability by reducing the storage
    //		paths to a single mechanism.
    //	3. Use the same single mechanism to support "private" and "user" data.
    //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
    //	5. Avoid exposing implementation details on user objects (eg. expando properties)
    //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        rmultiDash = /[A-Z]/g;

    function getData(data) {
      if (data === "true") {
        return true;
      }

      if (data === "false") {
        return false;
      }

      if (data === "null") {
        return null;
      } // Only convert to a number if it doesn't change the string


      if (data === +data + "") {
        return +data;
      }

      if (rbrace.test(data)) {
        return JSON.parse(data);
      }

      return data;
    }

    function dataAttr(elem, key, data) {
      var name; // If nothing was found internally, try to fetch any
      // data from the HTML5 data-* attribute

      if (data === undefined && elem.nodeType === 1) {
        name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
        data = elem.getAttribute(name);

        if (typeof data === "string") {
          try {
            data = getData(data);
          } catch (e) {} // Make sure we set the data so it isn't changed later


          dataUser.set(elem, key, data);
        } else {
          data = undefined;
        }
      }

      return data;
    }

    jQuery.extend({
      hasData: function hasData(elem) {
        return dataUser.hasData(elem) || dataPriv.hasData(elem);
      },
      data: function data(elem, name, _data) {
        return dataUser.access(elem, name, _data);
      },
      removeData: function removeData(elem, name) {
        dataUser.remove(elem, name);
      },
      // TODO: Now that all calls to _data and _removeData have been replaced
      // with direct calls to dataPriv methods, these can be deprecated.
      _data: function _data(elem, name, data) {
        return dataPriv.access(elem, name, data);
      },
      _removeData: function _removeData(elem, name) {
        dataPriv.remove(elem, name);
      }
    });
    jQuery.fn.extend({
      data: function data(key, value) {
        var i,
            name,
            data,
            elem = this[0],
            attrs = elem && elem.attributes; // Gets all values

        if (key === undefined) {
          if (this.length) {
            data = dataUser.get(elem);

            if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
              i = attrs.length;

              while (i--) {
                // Support: IE 11 only
                // The attrs elements can be null (#14894)
                if (attrs[i]) {
                  name = attrs[i].name;

                  if (name.indexOf("data-") === 0) {
                    name = camelCase(name.slice(5));
                    dataAttr(elem, name, data[name]);
                  }
                }
              }

              dataPriv.set(elem, "hasDataAttrs", true);
            }
          }

          return data;
        } // Sets multiple values


        if (_typeof(key) === "object") {
          return this.each(function () {
            dataUser.set(this, key);
          });
        }

        return access(this, function (value) {
          var data; // The calling jQuery object (element matches) is not empty
          // (and therefore has an element appears at this[ 0 ]) and the
          // `value` parameter was not undefined. An empty jQuery object
          // will result in `undefined` for elem = this[ 0 ] which will
          // throw an exception if an attempt to read a data cache is made.

          if (elem && value === undefined) {
            // Attempt to get data from the cache
            // The key will always be camelCased in Data
            data = dataUser.get(elem, key);

            if (data !== undefined) {
              return data;
            } // Attempt to "discover" the data in
            // HTML5 custom data-* attrs


            data = dataAttr(elem, key);

            if (data !== undefined) {
              return data;
            } // We tried really hard, but the data doesn't exist.


            return;
          } // Set the data...


          this.each(function () {
            // We always store the camelCased key
            dataUser.set(this, key, value);
          });
        }, null, value, arguments.length > 1, null, true);
      },
      removeData: function removeData(key) {
        return this.each(function () {
          dataUser.remove(this, key);
        });
      }
    });
    jQuery.extend({
      queue: function queue(elem, type, data) {
        var queue;

        if (elem) {
          type = (type || "fx") + "queue";
          queue = dataPriv.get(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup

          if (data) {
            if (!queue || Array.isArray(data)) {
              queue = dataPriv.access(elem, type, jQuery.makeArray(data));
            } else {
              queue.push(data);
            }
          }

          return queue || [];
        }
      },
      dequeue: function dequeue(elem, type) {
        type = type || "fx";

        var queue = jQuery.queue(elem, type),
            startLength = queue.length,
            fn = queue.shift(),
            hooks = jQuery._queueHooks(elem, type),
            next = function next() {
          jQuery.dequeue(elem, type);
        }; // If the fx queue is dequeued, always remove the progress sentinel


        if (fn === "inprogress") {
          fn = queue.shift();
          startLength--;
        }

        if (fn) {
          // Add a progress sentinel to prevent the fx queue from being
          // automatically dequeued
          if (type === "fx") {
            queue.unshift("inprogress");
          } // Clear up the last queue stop function


          delete hooks.stop;
          fn.call(elem, next, hooks);
        }

        if (!startLength && hooks) {
          hooks.empty.fire();
        }
      },
      // Not public - generate a queueHooks object, or return the current one
      _queueHooks: function _queueHooks(elem, type) {
        var key = type + "queueHooks";
        return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
          empty: jQuery.Callbacks("once memory").add(function () {
            dataPriv.remove(elem, [type + "queue", key]);
          })
        });
      }
    });
    jQuery.fn.extend({
      queue: function queue(type, data) {
        var setter = 2;

        if (typeof type !== "string") {
          data = type;
          type = "fx";
          setter--;
        }

        if (arguments.length < setter) {
          return jQuery.queue(this[0], type);
        }

        return data === undefined ? this : this.each(function () {
          var queue = jQuery.queue(this, type, data); // Ensure a hooks for this queue

          jQuery._queueHooks(this, type);

          if (type === "fx" && queue[0] !== "inprogress") {
            jQuery.dequeue(this, type);
          }
        });
      },
      dequeue: function dequeue(type) {
        return this.each(function () {
          jQuery.dequeue(this, type);
        });
      },
      clearQueue: function clearQueue(type) {
        return this.queue(type || "fx", []);
      },
      // Get a promise resolved when queues of a certain type
      // are emptied (fx is the type by default)
      promise: function promise(type, obj) {
        var tmp,
            count = 1,
            defer = jQuery.Deferred(),
            elements = this,
            i = this.length,
            resolve = function resolve() {
          if (! --count) {
            defer.resolveWith(elements, [elements]);
          }
        };

        if (typeof type !== "string") {
          obj = type;
          type = undefined;
        }

        type = type || "fx";

        while (i--) {
          tmp = dataPriv.get(elements[i], type + "queueHooks");

          if (tmp && tmp.empty) {
            count++;
            tmp.empty.add(resolve);
          }
        }

        resolve();
        return defer.promise(obj);
      }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
    var cssExpand = ["Top", "Right", "Bottom", "Left"];
    var documentElement = document.documentElement;

    var isAttached = function isAttached(elem) {
      return jQuery.contains(elem.ownerDocument, elem);
    },
        composed = {
      composed: true
    }; // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
    // Check attachment across shadow DOM boundaries when possible (gh-3504)
    // Support: iOS 10.0-10.2 only
    // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
    // leading to errors. We need to check for `getRootNode`.


    if (documentElement.getRootNode) {
      isAttached = function isAttached(elem) {
        return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
      };
    }

    var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {
      // isHiddenWithinTree might be called from jQuery#filter function;
      // in that case, element will be second argument
      elem = el || elem; // Inline style trumps all

      return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
      // Support: Firefox <=43 - 45
      // Disconnected elements can have computed display: none, so first confirm that elem is
      // in the document.
      isAttached(elem) && jQuery.css(elem, "display") === "none";
    };

    var swap = function swap(elem, options, callback, args) {
      var ret,
          name,
          old = {}; // Remember the old values, and insert the new ones

      for (name in options) {
        old[name] = elem.style[name];
        elem.style[name] = options[name];
      }

      ret = callback.apply(elem, args || []); // Revert the old values

      for (name in options) {
        elem.style[name] = old[name];
      }

      return ret;
    };

    function adjustCSS(elem, prop, valueParts, tween) {
      var adjusted,
          scale,
          maxIterations = 20,
          currentValue = tween ? function () {
        return tween.cur();
      } : function () {
        return jQuery.css(elem, prop, "");
      },
          initial = currentValue(),
          unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
          // Starting value computation is required for potential unit mismatches
      initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

      if (initialInUnit && initialInUnit[3] !== unit) {
        // Support: Firefox <=54
        // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
        initial = initial / 2; // Trust units reported by jQuery.css

        unit = unit || initialInUnit[3]; // Iteratively approximate from a nonzero starting point

        initialInUnit = +initial || 1;

        while (maxIterations--) {
          // Evaluate and update our best guess (doubling guesses that zero out).
          // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
          jQuery.style(elem, prop, initialInUnit + unit);

          if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
            maxIterations = 0;
          }

          initialInUnit = initialInUnit / scale;
        }

        initialInUnit = initialInUnit * 2;
        jQuery.style(elem, prop, initialInUnit + unit); // Make sure we update the tween properties later on

        valueParts = valueParts || [];
      }

      if (valueParts) {
        initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified

        adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];

        if (tween) {
          tween.unit = unit;
          tween.start = initialInUnit;
          tween.end = adjusted;
        }
      }

      return adjusted;
    }

    var defaultDisplayMap = {};

    function getDefaultDisplay(elem) {
      var temp,
          doc = elem.ownerDocument,
          nodeName = elem.nodeName,
          display = defaultDisplayMap[nodeName];

      if (display) {
        return display;
      }

      temp = doc.body.appendChild(doc.createElement(nodeName));
      display = jQuery.css(temp, "display");
      temp.parentNode.removeChild(temp);

      if (display === "none") {
        display = "block";
      }

      defaultDisplayMap[nodeName] = display;
      return display;
    }

    function showHide(elements, show) {
      var display,
          elem,
          values = [],
          index = 0,
          length = elements.length; // Determine new display value for elements that need to change

      for (; index < length; index++) {
        elem = elements[index];

        if (!elem.style) {
          continue;
        }

        display = elem.style.display;

        if (show) {
          // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
          // check is required in this first loop unless we have a nonempty display value (either
          // inline or about-to-be-restored)
          if (display === "none") {
            values[index] = dataPriv.get(elem, "display") || null;

            if (!values[index]) {
              elem.style.display = "";
            }
          }

          if (elem.style.display === "" && isHiddenWithinTree(elem)) {
            values[index] = getDefaultDisplay(elem);
          }
        } else {
          if (display !== "none") {
            values[index] = "none"; // Remember what we're overwriting

            dataPriv.set(elem, "display", display);
          }
        }
      } // Set the display of the elements in a second loop to avoid constant reflow


      for (index = 0; index < length; index++) {
        if (values[index] != null) {
          elements[index].style.display = values[index];
        }
      }

      return elements;
    }

    jQuery.fn.extend({
      show: function show() {
        return showHide(this, true);
      },
      hide: function hide() {
        return showHide(this);
      },
      toggle: function toggle(state) {
        if (typeof state === "boolean") {
          return state ? this.show() : this.hide();
        }

        return this.each(function () {
          if (isHiddenWithinTree(this)) {
            jQuery(this).show();
          } else {
            jQuery(this).hide();
          }
        });
      }
    });
    var rcheckableType = /^(?:checkbox|radio)$/i;
    var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
    var rscriptType = /^$|^module$|\/(?:java|ecma)script/i; // We have to close these tags to support XHTML (#13200)

    var wrapMap = {
      // Support: IE <=9 only
      option: [1, "<select multiple='multiple'>", "</select>"],
      // XHTML parsers do not magically insert elements in the
      // same way that tag soup parsers do. So we cannot shorten
      // this by omitting <tbody> or other required elements.
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    }; // Support: IE <=9 only

    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;

    function getAll(context, tag) {
      // Support: IE <=9 - 11 only
      // Use typeof to avoid zero-argument method invocation on host objects (#15151)
      var ret;

      if (typeof context.getElementsByTagName !== "undefined") {
        ret = context.getElementsByTagName(tag || "*");
      } else if (typeof context.querySelectorAll !== "undefined") {
        ret = context.querySelectorAll(tag || "*");
      } else {
        ret = [];
      }

      if (tag === undefined || tag && nodeName(context, tag)) {
        return jQuery.merge([context], ret);
      }

      return ret;
    } // Mark scripts as having already been evaluated


    function setGlobalEval(elems, refElements) {
      var i = 0,
          l = elems.length;

      for (; i < l; i++) {
        dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
      }
    }

    var rhtml = /<|&#?\w+;/;

    function buildFragment(elems, context, scripts, selection, ignored) {
      var elem,
          tmp,
          tag,
          wrap,
          attached,
          j,
          fragment = context.createDocumentFragment(),
          nodes = [],
          i = 0,
          l = elems.length;

      for (; i < l; i++) {
        elem = elems[i];

        if (elem || elem === 0) {
          // Add nodes directly
          if (toType(elem) === "object") {
            // Support: Android <=4.0 only, PhantomJS 1 only
            // push.apply(_, arraylike) throws on ancient WebKit
            jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
          } else if (!rhtml.test(elem)) {
            nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
          } else {
            tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation

            tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
            wrap = wrapMap[tag] || wrapMap._default;
            tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content

            j = wrap[0];

            while (j--) {
              tmp = tmp.lastChild;
            } // Support: Android <=4.0 only, PhantomJS 1 only
            // push.apply(_, arraylike) throws on ancient WebKit


            jQuery.merge(nodes, tmp.childNodes); // Remember the top-level container

            tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)

            tmp.textContent = "";
          }
        }
      } // Remove wrapper from fragment


      fragment.textContent = "";
      i = 0;

      while (elem = nodes[i++]) {
        // Skip elements already in the context collection (trac-4087)
        if (selection && jQuery.inArray(elem, selection) > -1) {
          if (ignored) {
            ignored.push(elem);
          }

          continue;
        }

        attached = isAttached(elem); // Append to fragment

        tmp = getAll(fragment.appendChild(elem), "script"); // Preserve script evaluation history

        if (attached) {
          setGlobalEval(tmp);
        } // Capture executables


        if (scripts) {
          j = 0;

          while (elem = tmp[j++]) {
            if (rscriptType.test(elem.type || "")) {
              scripts.push(elem);
            }
          }
        }
      }

      return fragment;
    }

    (function () {
      var fragment = document.createDocumentFragment(),
          div = fragment.appendChild(document.createElement("div")),
          input = document.createElement("input"); // Support: Android 4.0 - 4.3 only
      // Check state lost if the name is set (#11217)
      // Support: Windows Web Apps (WWA)
      // `name` and `type` must use .setAttribute for WWA (#14901)

      input.setAttribute("type", "radio");
      input.setAttribute("checked", "checked");
      input.setAttribute("name", "t");
      div.appendChild(input); // Support: Android <=4.1 only
      // Older WebKit doesn't clone checked state correctly in fragments

      support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE <=11 only
      // Make sure textarea (and checkbox) defaultValue is properly cloned

      div.innerHTML = "<textarea>x</textarea>";
      support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
    })();

    var rkeyEvent = /^key/,
        rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

    function returnTrue() {
      return true;
    }

    function returnFalse() {
      return false;
    } // Support: IE <=9 - 11+
    // focus() and blur() are asynchronous, except when they are no-op.
    // So expect focus to be synchronous when the element is already active,
    // and blur to be synchronous when the element is not already active.
    // (focus and blur are always synchronous in other supported browsers,
    // this just defines when we can count on it).


    function expectSync(elem, type) {
      return elem === safeActiveElement() === (type === "focus");
    } // Support: IE <=9 only
    // Accessing document.activeElement can throw unexpectedly
    // https://bugs.jquery.com/ticket/13393


    function safeActiveElement() {
      try {
        return document.activeElement;
      } catch (err) {}
    }

    function _on(elem, types, selector, data, fn, one) {
      var origFn, type; // Types can be a map of types/handlers

      if (_typeof(types) === "object") {
        // ( types-Object, selector, data )
        if (typeof selector !== "string") {
          // ( types-Object, data )
          data = data || selector;
          selector = undefined;
        }

        for (type in types) {
          _on(elem, type, selector, data, types[type], one);
        }

        return elem;
      }

      if (data == null && fn == null) {
        // ( types, fn )
        fn = selector;
        data = selector = undefined;
      } else if (fn == null) {
        if (typeof selector === "string") {
          // ( types, selector, fn )
          fn = data;
          data = undefined;
        } else {
          // ( types, data, fn )
          fn = data;
          data = selector;
          selector = undefined;
        }
      }

      if (fn === false) {
        fn = returnFalse;
      } else if (!fn) {
        return elem;
      }

      if (one === 1) {
        origFn = fn;

        fn = function fn(event) {
          // Can use an empty set, since event contains the info
          jQuery().off(event);
          return origFn.apply(this, arguments);
        }; // Use same guid so caller can remove using origFn


        fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
      }

      return elem.each(function () {
        jQuery.event.add(this, types, fn, data, selector);
      });
    }
    /*
     * Helper functions for managing events -- not part of the public interface.
     * Props to Dean Edwards' addEvent library for many of the ideas.
     */


    jQuery.event = {
      global: {},
      add: function add(elem, types, handler, data, selector) {
        var handleObjIn,
            eventHandle,
            tmp,
            events,
            t,
            handleObj,
            special,
            handlers,
            type,
            namespaces,
            origType,
            elemData = dataPriv.get(elem); // Don't attach events to noData or text/comment nodes (but allow plain objects)

        if (!elemData) {
          return;
        } // Caller can pass in an object of custom data in lieu of the handler


        if (handler.handler) {
          handleObjIn = handler;
          handler = handleObjIn.handler;
          selector = handleObjIn.selector;
        } // Ensure that invalid selectors throw exceptions at attach time
        // Evaluate against documentElement in case elem is a non-element node (e.g., document)


        if (selector) {
          jQuery.find.matchesSelector(documentElement, selector);
        } // Make sure that the handler has a unique ID, used to find/remove it later


        if (!handler.guid) {
          handler.guid = jQuery.guid++;
        } // Init the element's event structure and main handler, if this is the first


        if (!(events = elemData.events)) {
          events = elemData.events = {};
        }

        if (!(eventHandle = elemData.handle)) {
          eventHandle = elemData.handle = function (e) {
            // Discard the second event of a jQuery.event.trigger() and
            // when an event is called after a page has unloaded
            return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
          };
        } // Handle multiple events separated by a space


        types = (types || "").match(rnothtmlwhite) || [""];
        t = types.length;

        while (t--) {
          tmp = rtypenamespace.exec(types[t]) || [];
          type = origType = tmp[1];
          namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers

          if (!type) {
            continue;
          } // If event changes its type, use the special event handlers for the changed type


          special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type

          type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type

          special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers

          handleObj = jQuery.extend({
            type: type,
            origType: origType,
            data: data,
            handler: handler,
            guid: handler.guid,
            selector: selector,
            needsContext: selector && jQuery.expr.match.needsContext.test(selector),
            namespace: namespaces.join(".")
          }, handleObjIn); // Init the event handler queue if we're the first

          if (!(handlers = events[type])) {
            handlers = events[type] = [];
            handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false

            if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
              if (elem.addEventListener) {
                elem.addEventListener(type, eventHandle);
              }
            }
          }

          if (special.add) {
            special.add.call(elem, handleObj);

            if (!handleObj.handler.guid) {
              handleObj.handler.guid = handler.guid;
            }
          } // Add to the element's handler list, delegates in front


          if (selector) {
            handlers.splice(handlers.delegateCount++, 0, handleObj);
          } else {
            handlers.push(handleObj);
          } // Keep track of which events have ever been used, for event optimization


          jQuery.event.global[type] = true;
        }
      },
      // Detach an event or set of events from an element
      remove: function remove(elem, types, handler, selector, mappedTypes) {
        var j,
            origCount,
            tmp,
            events,
            t,
            handleObj,
            special,
            handlers,
            type,
            namespaces,
            origType,
            elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

        if (!elemData || !(events = elemData.events)) {
          return;
        } // Once for each type.namespace in types; type may be omitted


        types = (types || "").match(rnothtmlwhite) || [""];
        t = types.length;

        while (t--) {
          tmp = rtypenamespace.exec(types[t]) || [];
          type = origType = tmp[1];
          namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element

          if (!type) {
            for (type in events) {
              jQuery.event.remove(elem, type + types[t], handler, selector, true);
            }

            continue;
          }

          special = jQuery.event.special[type] || {};
          type = (selector ? special.delegateType : special.bindType) || type;
          handlers = events[type] || [];
          tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events

          origCount = j = handlers.length;

          while (j--) {
            handleObj = handlers[j];

            if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
              handlers.splice(j, 1);

              if (handleObj.selector) {
                handlers.delegateCount--;
              }

              if (special.remove) {
                special.remove.call(elem, handleObj);
              }
            }
          } // Remove generic event handler if we removed something and no more handlers exist
          // (avoids potential for endless recursion during removal of special event handlers)


          if (origCount && !handlers.length) {
            if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
              jQuery.removeEvent(elem, type, elemData.handle);
            }

            delete events[type];
          }
        } // Remove data and the expando if it's no longer used


        if (jQuery.isEmptyObject(events)) {
          dataPriv.remove(elem, "handle events");
        }
      },
      dispatch: function dispatch(nativeEvent) {
        // Make a writable jQuery.Event from the native event object
        var event = jQuery.event.fix(nativeEvent);
        var i,
            j,
            ret,
            matched,
            handleObj,
            handlerQueue,
            args = new Array(arguments.length),
            handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
            special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event

        args[0] = event;

        for (i = 1; i < arguments.length; i++) {
          args[i] = arguments[i];
        }

        event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired

        if (special.preDispatch && special.preDispatch.call(this, event) === false) {
          return;
        } // Determine handlers


        handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us

        i = 0;

        while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
          event.currentTarget = matched.elem;
          j = 0;

          while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
            // If the event is namespaced, then each handler is only invoked if it is
            // specially universal or its namespaces are a superset of the event's.
            if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
              event.handleObj = handleObj;
              event.data = handleObj.data;
              ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

              if (ret !== undefined) {
                if ((event.result = ret) === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
              }
            }
          }
        } // Call the postDispatch hook for the mapped type


        if (special.postDispatch) {
          special.postDispatch.call(this, event);
        }

        return event.result;
      },
      handlers: function handlers(event, _handlers) {
        var i,
            handleObj,
            sel,
            matchedHandlers,
            matchedSelectors,
            handlerQueue = [],
            delegateCount = _handlers.delegateCount,
            cur = event.target; // Find delegate handlers

        if (delegateCount && // Support: IE <=9
        // Black-hole SVG <use> instance trees (trac-13180)
        cur.nodeType && // Support: Firefox <=42
        // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
        // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
        // Support: IE 11 only
        // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
        !(event.type === "click" && event.button >= 1)) {
          for (; cur !== this; cur = cur.parentNode || this) {
            // Don't check non-elements (#13208)
            // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
            if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
              matchedHandlers = [];
              matchedSelectors = {};

              for (i = 0; i < delegateCount; i++) {
                handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)

                sel = handleObj.selector + " ";

                if (matchedSelectors[sel] === undefined) {
                  matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                }

                if (matchedSelectors[sel]) {
                  matchedHandlers.push(handleObj);
                }
              }

              if (matchedHandlers.length) {
                handlerQueue.push({
                  elem: cur,
                  handlers: matchedHandlers
                });
              }
            }
          }
        } // Add the remaining (directly-bound) handlers


        cur = this;

        if (delegateCount < _handlers.length) {
          handlerQueue.push({
            elem: cur,
            handlers: _handlers.slice(delegateCount)
          });
        }

        return handlerQueue;
      },
      addProp: function addProp(name, hook) {
        Object.defineProperty(jQuery.Event.prototype, name, {
          enumerable: true,
          configurable: true,
          get: isFunction(hook) ? function () {
            if (this.originalEvent) {
              return hook(this.originalEvent);
            }
          } : function () {
            if (this.originalEvent) {
              return this.originalEvent[name];
            }
          },
          set: function set(value) {
            Object.defineProperty(this, name, {
              enumerable: true,
              configurable: true,
              writable: true,
              value: value
            });
          }
        });
      },
      fix: function fix(originalEvent) {
        return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
      },
      special: {
        load: {
          // Prevent triggered image.load events from bubbling to window.load
          noBubble: true
        },
        click: {
          // Utilize native event to ensure correct state for checkable inputs
          setup: function setup(data) {
            // For mutual compressibility with _default, replace `this` access with a local var.
            // `|| data` is dead code meant only to preserve the variable through minification.
            var el = this || data; // Claim the first handler

            if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
              // dataPriv.set( el, "click", ... )
              leverageNative(el, "click", returnTrue);
            } // Return false to allow normal processing in the caller


            return false;
          },
          trigger: function trigger(data) {
            // For mutual compressibility with _default, replace `this` access with a local var.
            // `|| data` is dead code meant only to preserve the variable through minification.
            var el = this || data; // Force setup before triggering a click

            if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
              leverageNative(el, "click");
            } // Return non-false to allow normal event-path propagation


            return true;
          },
          // For cross-browser consistency, suppress native .click() on links
          // Also prevent it if we're currently inside a leveraged native-event stack
          _default: function _default(event) {
            var target = event.target;
            return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
          }
        },
        beforeunload: {
          postDispatch: function postDispatch(event) {
            // Support: Firefox 20+
            // Firefox doesn't alert if the returnValue field is not set.
            if (event.result !== undefined && event.originalEvent) {
              event.originalEvent.returnValue = event.result;
            }
          }
        }
      }
    }; // Ensure the presence of an event listener that handles manually-triggered
    // synthetic events by interrupting progress until reinvoked in response to
    // *native* events that it fires directly, ensuring that state changes have
    // already occurred before other listeners are invoked.

    function leverageNative(el, type, expectSync) {
      // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
      if (!expectSync) {
        if (dataPriv.get(el, type) === undefined) {
          jQuery.event.add(el, type, returnTrue);
        }

        return;
      } // Register the controller as a special universal handler for all event namespaces


      dataPriv.set(el, type, false);
      jQuery.event.add(el, type, {
        namespace: false,
        handler: function handler(event) {
          var notAsync,
              result,
              saved = dataPriv.get(this, type);

          if (event.isTrigger & 1 && this[type]) {
            // Interrupt processing of the outer synthetic .trigger()ed event
            // Saved data should be false in such cases, but might be a leftover capture object
            // from an async native handler (gh-4350)
            if (!saved.length) {
              // Store arguments for use when handling the inner native event
              // There will always be at least one argument (an event object), so this array
              // will not be confused with a leftover capture object.
              saved = _slice.call(arguments);
              dataPriv.set(this, type, saved); // Trigger the native event and capture its result
              // Support: IE <=9 - 11+
              // focus() and blur() are asynchronous

              notAsync = expectSync(this, type);
              this[type]();
              result = dataPriv.get(this, type);

              if (saved !== result || notAsync) {
                dataPriv.set(this, type, false);
              } else {
                result = {};
              }

              if (saved !== result) {
                // Cancel the outer synthetic event
                event.stopImmediatePropagation();
                event.preventDefault();
                return result.value;
              } // If this is an inner synthetic event for an event with a bubbling surrogate
              // (focus or blur), assume that the surrogate already propagated from triggering the
              // native event and prevent that from happening again here.
              // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
              // bubbling surrogate propagates *after* the non-bubbling base), but that seems
              // less bad than duplication.

            } else if ((jQuery.event.special[type] || {}).delegateType) {
              event.stopPropagation();
            } // If this is a native event triggered above, everything is now in order
            // Fire an inner synthetic event with the original arguments

          } else if (saved.length) {
            // ...and capture the result
            dataPriv.set(this, type, {
              value: jQuery.event.trigger( // Support: IE <=9 - 11+
              // Extend with the prototype to reset the above stopImmediatePropagation()
              jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
            }); // Abort handling of the native event

            event.stopImmediatePropagation();
          }
        }
      });
    }

    jQuery.removeEvent = function (elem, type, handle) {
      // This "if" is needed for plain objects
      if (elem.removeEventListener) {
        elem.removeEventListener(type, handle);
      }
    };

    jQuery.Event = function (src, props) {
      // Allow instantiation without the 'new' keyword
      if (!(this instanceof jQuery.Event)) {
        return new jQuery.Event(src, props);
      } // Event object


      if (src && src.type) {
        this.originalEvent = src;
        this.type = src.type; // Events bubbling up the document may have been marked as prevented
        // by a handler lower down the tree; reflect the correct value.

        this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
        src.returnValue === false ? returnTrue : returnFalse; // Create target properties
        // Support: Safari <=6 - 7 only
        // Target should not be a text node (#504, #13143)

        this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
        this.currentTarget = src.currentTarget;
        this.relatedTarget = src.relatedTarget; // Event type
      } else {
        this.type = src;
      } // Put explicitly provided properties onto the event object


      if (props) {
        jQuery.extend(this, props);
      } // Create a timestamp if incoming event doesn't have one


      this.timeStamp = src && src.timeStamp || Date.now(); // Mark it as fixed

      this[jQuery.expando] = true;
    }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
    // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html


    jQuery.Event.prototype = {
      constructor: jQuery.Event,
      isDefaultPrevented: returnFalse,
      isPropagationStopped: returnFalse,
      isImmediatePropagationStopped: returnFalse,
      isSimulated: false,
      preventDefault: function preventDefault() {
        var e = this.originalEvent;
        this.isDefaultPrevented = returnTrue;

        if (e && !this.isSimulated) {
          e.preventDefault();
        }
      },
      stopPropagation: function stopPropagation() {
        var e = this.originalEvent;
        this.isPropagationStopped = returnTrue;

        if (e && !this.isSimulated) {
          e.stopPropagation();
        }
      },
      stopImmediatePropagation: function stopImmediatePropagation() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = returnTrue;

        if (e && !this.isSimulated) {
          e.stopImmediatePropagation();
        }

        this.stopPropagation();
      }
    }; // Includes all common event props including KeyEvent and MouseEvent specific props

    jQuery.each({
      altKey: true,
      bubbles: true,
      cancelable: true,
      changedTouches: true,
      ctrlKey: true,
      detail: true,
      eventPhase: true,
      metaKey: true,
      pageX: true,
      pageY: true,
      shiftKey: true,
      view: true,
      "char": true,
      code: true,
      charCode: true,
      key: true,
      keyCode: true,
      button: true,
      buttons: true,
      clientX: true,
      clientY: true,
      offsetX: true,
      offsetY: true,
      pointerId: true,
      pointerType: true,
      screenX: true,
      screenY: true,
      targetTouches: true,
      toElement: true,
      touches: true,
      which: function which(event) {
        var button = event.button; // Add which for key events

        if (event.which == null && rkeyEvent.test(event.type)) {
          return event.charCode != null ? event.charCode : event.keyCode;
        } // Add which for click: 1 === left; 2 === middle; 3 === right


        if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
          if (button & 1) {
            return 1;
          }

          if (button & 2) {
            return 3;
          }

          if (button & 4) {
            return 2;
          }

          return 0;
        }

        return event.which;
      }
    }, jQuery.event.addProp);
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function (type, delegateType) {
      jQuery.event.special[type] = {
        // Utilize native event if possible so blur/focus sequence is correct
        setup: function setup() {
          // Claim the first handler
          // dataPriv.set( this, "focus", ... )
          // dataPriv.set( this, "blur", ... )
          leverageNative(this, type, expectSync); // Return false to allow normal processing in the caller

          return false;
        },
        trigger: function trigger() {
          // Force setup before trigger
          leverageNative(this, type); // Return non-false to allow normal event-path propagation

          return true;
        },
        delegateType: delegateType
      };
    }); // Create mouseenter/leave events using mouseover/out and event-time checks
    // so that event delegation works in jQuery.
    // Do the same for pointerenter/pointerleave and pointerover/pointerout
    //
    // Support: Safari 7 only
    // Safari sends mouseenter too often; see:
    // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
    // for the description of the bug (it existed in older Chrome versions as well).

    jQuery.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (orig, fix) {
      jQuery.event.special[orig] = {
        delegateType: fix,
        bindType: fix,
        handle: function handle(event) {
          var ret,
              target = this,
              related = event.relatedTarget,
              handleObj = event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
          // NB: No relatedTarget if the mouse left/entered the browser window

          if (!related || related !== target && !jQuery.contains(target, related)) {
            event.type = handleObj.origType;
            ret = handleObj.handler.apply(this, arguments);
            event.type = fix;
          }

          return ret;
        }
      };
    });
    jQuery.fn.extend({
      on: function on(types, selector, data, fn) {
        return _on(this, types, selector, data, fn);
      },
      one: function one(types, selector, data, fn) {
        return _on(this, types, selector, data, fn, 1);
      },
      off: function off(types, selector, fn) {
        var handleObj, type;

        if (types && types.preventDefault && types.handleObj) {
          // ( event )  dispatched jQuery.Event
          handleObj = types.handleObj;
          jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
          return this;
        }

        if (_typeof(types) === "object") {
          // ( types-object [, selector] )
          for (type in types) {
            this.off(type, selector, types[type]);
          }

          return this;
        }

        if (selector === false || typeof selector === "function") {
          // ( types [, fn] )
          fn = selector;
          selector = undefined;
        }

        if (fn === false) {
          fn = returnFalse;
        }

        return this.each(function () {
          jQuery.event.remove(this, types, fn, selector);
        });
      }
    });
    var
    /* eslint-disable max-len */
    // See https://github.com/eslint/eslint/issues/3229
    rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

    /* eslint-enable */
    // Support: IE <=10 - 11, Edge 12 - 13 only
    // In IE/Edge using regex groups here causes severe slowdowns.
    // See https://connect.microsoft.com/IE/feedback/details/1736512/
    rnoInnerhtml = /<script|<style|<link/i,
        // checked="checked" or checked
    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Prefer a tbody over its parent table for containing new rows

    function manipulationTarget(elem, content) {
      if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
        return jQuery(elem).children("tbody")[0] || elem;
      }

      return elem;
    } // Replace/restore the type attribute of script elements for safe DOM manipulation


    function disableScript(elem) {
      elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
      return elem;
    }

    function restoreScript(elem) {
      if ((elem.type || "").slice(0, 5) === "true/") {
        elem.type = elem.type.slice(5);
      } else {
        elem.removeAttribute("type");
      }

      return elem;
    }

    function cloneCopyEvent(src, dest) {
      var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

      if (dest.nodeType !== 1) {
        return;
      } // 1. Copy private data: events, handlers, etc.


      if (dataPriv.hasData(src)) {
        pdataOld = dataPriv.access(src);
        pdataCur = dataPriv.set(dest, pdataOld);
        events = pdataOld.events;

        if (events) {
          delete pdataCur.handle;
          pdataCur.events = {};

          for (type in events) {
            for (i = 0, l = events[type].length; i < l; i++) {
              jQuery.event.add(dest, type, events[type][i]);
            }
          }
        }
      } // 2. Copy user data


      if (dataUser.hasData(src)) {
        udataOld = dataUser.access(src);
        udataCur = jQuery.extend({}, udataOld);
        dataUser.set(dest, udataCur);
      }
    } // Fix IE bugs, see support tests


    function fixInput(src, dest) {
      var nodeName = dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.

      if (nodeName === "input" && rcheckableType.test(src.type)) {
        dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
      } else if (nodeName === "input" || nodeName === "textarea") {
        dest.defaultValue = src.defaultValue;
      }
    }

    function domManip(collection, args, callback, ignored) {
      // Flatten any nested arrays
      args = concat.apply([], args);
      var fragment,
          first,
          scripts,
          hasScripts,
          node,
          doc,
          i = 0,
          l = collection.length,
          iNoClone = l - 1,
          value = args[0],
          valueIsFunction = isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit

      if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
        return collection.each(function (index) {
          var self = collection.eq(index);

          if (valueIsFunction) {
            args[0] = value.call(this, index, self.html());
          }

          domManip(self, args, callback, ignored);
        });
      }

      if (l) {
        fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
        first = fragment.firstChild;

        if (fragment.childNodes.length === 1) {
          fragment = first;
        } // Require either new content or an interest in ignored elements to invoke the callback


        if (first || ignored) {
          scripts = jQuery.map(getAll(fragment, "script"), disableScript);
          hasScripts = scripts.length; // Use the original fragment for the last item
          // instead of the first because it can end up
          // being emptied incorrectly in certain situations (#8070).

          for (; i < l; i++) {
            node = fragment;

            if (i !== iNoClone) {
              node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration

              if (hasScripts) {
                // Support: Android <=4.0 only, PhantomJS 1 only
                // push.apply(_, arraylike) throws on ancient WebKit
                jQuery.merge(scripts, getAll(node, "script"));
              }
            }

            callback.call(collection[i], node, i);
          }

          if (hasScripts) {
            doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts

            jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion

            for (i = 0; i < hasScripts; i++) {
              node = scripts[i];

              if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                if (node.src && (node.type || "").toLowerCase() !== "module") {
                  // Optional AJAX dependency, but won't run scripts if not present
                  if (jQuery._evalUrl && !node.noModule) {
                    jQuery._evalUrl(node.src, {
                      nonce: node.nonce || node.getAttribute("nonce")
                    });
                  }
                } else {
                  DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                }
              }
            }
          }
        }
      }

      return collection;
    }

    function _remove(elem, selector, keepData) {
      var node,
          nodes = selector ? jQuery.filter(selector, elem) : elem,
          i = 0;

      for (; (node = nodes[i]) != null; i++) {
        if (!keepData && node.nodeType === 1) {
          jQuery.cleanData(getAll(node));
        }

        if (node.parentNode) {
          if (keepData && isAttached(node)) {
            setGlobalEval(getAll(node, "script"));
          }

          node.parentNode.removeChild(node);
        }
      }

      return elem;
    }

    jQuery.extend({
      htmlPrefilter: function htmlPrefilter(html) {
        return html.replace(rxhtmlTag, "<$1></$2>");
      },
      clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
        var i,
            l,
            srcElements,
            destElements,
            clone = elem.cloneNode(true),
            inPage = isAttached(elem); // Fix IE cloning issues

        if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
          // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
          destElements = getAll(clone);
          srcElements = getAll(elem);

          for (i = 0, l = srcElements.length; i < l; i++) {
            fixInput(srcElements[i], destElements[i]);
          }
        } // Copy the events from the original to the clone


        if (dataAndEvents) {
          if (deepDataAndEvents) {
            srcElements = srcElements || getAll(elem);
            destElements = destElements || getAll(clone);

            for (i = 0, l = srcElements.length; i < l; i++) {
              cloneCopyEvent(srcElements[i], destElements[i]);
            }
          } else {
            cloneCopyEvent(elem, clone);
          }
        } // Preserve script evaluation history


        destElements = getAll(clone, "script");

        if (destElements.length > 0) {
          setGlobalEval(destElements, !inPage && getAll(elem, "script"));
        } // Return the cloned set


        return clone;
      },
      cleanData: function cleanData(elems) {
        var data,
            elem,
            type,
            special = jQuery.event.special,
            i = 0;

        for (; (elem = elems[i]) !== undefined; i++) {
          if (acceptData(elem)) {
            if (data = elem[dataPriv.expando]) {
              if (data.events) {
                for (type in data.events) {
                  if (special[type]) {
                    jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                  } else {
                    jQuery.removeEvent(elem, type, data.handle);
                  }
                }
              } // Support: Chrome <=35 - 45+
              // Assign undefined instead of using delete, see Data#remove


              elem[dataPriv.expando] = undefined;
            }

            if (elem[dataUser.expando]) {
              // Support: Chrome <=35 - 45+
              // Assign undefined instead of using delete, see Data#remove
              elem[dataUser.expando] = undefined;
            }
          }
        }
      }
    });
    jQuery.fn.extend({
      detach: function detach(selector) {
        return _remove(this, selector, true);
      },
      remove: function remove(selector) {
        return _remove(this, selector);
      },
      text: function text(value) {
        return access(this, function (value) {
          return value === undefined ? jQuery.text(this) : this.empty().each(function () {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              this.textContent = value;
            }
          });
        }, null, value, arguments.length);
      },
      append: function append() {
        return domManip(this, arguments, function (elem) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var target = manipulationTarget(this, elem);
            target.appendChild(elem);
          }
        });
      },
      prepend: function prepend() {
        return domManip(this, arguments, function (elem) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var target = manipulationTarget(this, elem);
            target.insertBefore(elem, target.firstChild);
          }
        });
      },
      before: function before() {
        return domManip(this, arguments, function (elem) {
          if (this.parentNode) {
            this.parentNode.insertBefore(elem, this);
          }
        });
      },
      after: function after() {
        return domManip(this, arguments, function (elem) {
          if (this.parentNode) {
            this.parentNode.insertBefore(elem, this.nextSibling);
          }
        });
      },
      empty: function empty() {
        var elem,
            i = 0;

        for (; (elem = this[i]) != null; i++) {
          if (elem.nodeType === 1) {
            // Prevent memory leaks
            jQuery.cleanData(getAll(elem, false)); // Remove any remaining nodes

            elem.textContent = "";
          }
        }

        return this;
      },
      clone: function clone(dataAndEvents, deepDataAndEvents) {
        dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
        deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
        return this.map(function () {
          return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
        });
      },
      html: function html(value) {
        return access(this, function (value) {
          var elem = this[0] || {},
              i = 0,
              l = this.length;

          if (value === undefined && elem.nodeType === 1) {
            return elem.innerHTML;
          } // See if we can take a shortcut and just use innerHTML


          if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
            value = jQuery.htmlPrefilter(value);

            try {
              for (; i < l; i++) {
                elem = this[i] || {}; // Remove element nodes and prevent memory leaks

                if (elem.nodeType === 1) {
                  jQuery.cleanData(getAll(elem, false));
                  elem.innerHTML = value;
                }
              }

              elem = 0; // If using innerHTML throws an exception, use the fallback method
            } catch (e) {}
          }

          if (elem) {
            this.empty().append(value);
          }
        }, null, value, arguments.length);
      },
      replaceWith: function replaceWith() {
        var ignored = []; // Make the changes, replacing each non-ignored context element with the new content

        return domManip(this, arguments, function (elem) {
          var parent = this.parentNode;

          if (jQuery.inArray(this, ignored) < 0) {
            jQuery.cleanData(getAll(this));

            if (parent) {
              parent.replaceChild(elem, this);
            }
          } // Force callback invocation

        }, ignored);
      }
    });
    jQuery.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (name, original) {
      jQuery.fn[name] = function (selector) {
        var elems,
            ret = [],
            insert = jQuery(selector),
            last = insert.length - 1,
            i = 0;

        for (; i <= last; i++) {
          elems = i === last ? this : this.clone(true);
          jQuery(insert[i])[original](elems); // Support: Android <=4.0 only, PhantomJS 1 only
          // .get() because push.apply(_, arraylike) throws on ancient WebKit

          push.apply(ret, elems.get());
        }

        return this.pushStack(ret);
      };
    });
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

    var getStyles = function getStyles(elem) {
      // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
      // IE throws on elements created in popups
      // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
      var view = elem.ownerDocument.defaultView;

      if (!view || !view.opener) {
        view = window;
      }

      return view.getComputedStyle(elem);
    };

    var rboxStyle = new RegExp(cssExpand.join("|"), "i");

    (function () {
      // Executing both pixelPosition & boxSizingReliable tests require only one layout
      // so they're executed at the same time to save the second computation.
      function computeStyleTests() {
        // This is a singleton, we need to execute it only once
        if (!div) {
          return;
        }

        container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
        div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
        documentElement.appendChild(container).appendChild(div);
        var divStyle = window.getComputedStyle(div);
        pixelPositionVal = divStyle.top !== "1%"; // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44

        reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12; // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
        // Some styles come back with percentage values, even though they shouldn't

        div.style.right = "60%";
        pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36; // Support: IE 9 - 11 only
        // Detect misreporting of content dimensions for box-sizing:border-box elements

        boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36; // Support: IE 9 only
        // Detect overflow:scroll screwiness (gh-3699)
        // Support: Chrome <=64
        // Don't get tricked when zoom affects offsetWidth (gh-4029)

        div.style.position = "absolute";
        scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
        documentElement.removeChild(container); // Nullify the div so it wouldn't be stored in the memory and
        // it will also be a sign that checks already performed

        div = null;
      }

      function roundPixelMeasures(measure) {
        return Math.round(parseFloat(measure));
      }

      var pixelPositionVal,
          boxSizingReliableVal,
          scrollboxSizeVal,
          pixelBoxStylesVal,
          reliableMarginLeftVal,
          container = document.createElement("div"),
          div = document.createElement("div"); // Finish early in limited (non-browser) environments

      if (!div.style) {
        return;
      } // Support: IE <=9 - 11 only
      // Style of cloned element affects source element cloned (#8908)


      div.style.backgroundClip = "content-box";
      div.cloneNode(true).style.backgroundClip = "";
      support.clearCloneStyle = div.style.backgroundClip === "content-box";
      jQuery.extend(support, {
        boxSizingReliable: function boxSizingReliable() {
          computeStyleTests();
          return boxSizingReliableVal;
        },
        pixelBoxStyles: function pixelBoxStyles() {
          computeStyleTests();
          return pixelBoxStylesVal;
        },
        pixelPosition: function pixelPosition() {
          computeStyleTests();
          return pixelPositionVal;
        },
        reliableMarginLeft: function reliableMarginLeft() {
          computeStyleTests();
          return reliableMarginLeftVal;
        },
        scrollboxSize: function scrollboxSize() {
          computeStyleTests();
          return scrollboxSizeVal;
        }
      });
    })();

    function curCSS(elem, name, computed) {
      var width,
          minWidth,
          maxWidth,
          ret,
          // Support: Firefox 51+
      // Retrieving style before computed somehow
      // fixes an issue with getting wrong values
      // on detached elements
      style = elem.style;
      computed = computed || getStyles(elem); // getPropertyValue is needed for:
      //   .css('filter') (IE 9 only, #12537)
      //   .css('--customProperty) (#3144)

      if (computed) {
        ret = computed.getPropertyValue(name) || computed[name];

        if (ret === "" && !isAttached(elem)) {
          ret = jQuery.style(elem, name);
        } // A tribute to the "awesome hack by Dean Edwards"
        // Android Browser returns percentage for some values,
        // but width seems to be reliably pixels.
        // This is against the CSSOM draft spec:
        // https://drafts.csswg.org/cssom/#resolved-values


        if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
          // Remember the original values
          width = style.width;
          minWidth = style.minWidth;
          maxWidth = style.maxWidth; // Put in the new values to get a computed value out

          style.minWidth = style.maxWidth = style.width = ret;
          ret = computed.width; // Revert the changed values

          style.width = width;
          style.minWidth = minWidth;
          style.maxWidth = maxWidth;
        }
      }

      return ret !== undefined ? // Support: IE <=9 - 11 only
      // IE returns zIndex value as an integer.
      ret + "" : ret;
    }

    function addGetHookIf(conditionFn, hookFn) {
      // Define the hook, we'll check on the first run if it's really needed.
      return {
        get: function get() {
          if (conditionFn()) {
            // Hook not needed (or it's not possible to use it due
            // to missing dependency), remove it.
            delete this.get;
            return;
          } // Hook needed; redefine it so that the support test is not executed again.


          return (this.get = hookFn).apply(this, arguments);
        }
      };
    }

    var cssPrefixes = ["Webkit", "Moz", "ms"],
        emptyStyle = document.createElement("div").style,
        vendorProps = {}; // Return a vendor-prefixed property or undefined

    function vendorPropName(name) {
      // Check for vendor prefixed names
      var capName = name[0].toUpperCase() + name.slice(1),
          i = cssPrefixes.length;

      while (i--) {
        name = cssPrefixes[i] + capName;

        if (name in emptyStyle) {
          return name;
        }
      }
    } // Return a potentially-mapped jQuery.cssProps or vendor prefixed property


    function finalPropName(name) {
      var _final = jQuery.cssProps[name] || vendorProps[name];

      if (_final) {
        return _final;
      }

      if (name in emptyStyle) {
        return name;
      }

      return vendorProps[name] = vendorPropName(name) || name;
    }

    var // Swappable if display is none or starts with table
    // except "table", "table-cell", or "table-caption"
    // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
    rdisplayswap = /^(none|table(?!-c[ea]).+)/,
        rcustomProp = /^--/,
        cssShow = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
        cssNormalTransform = {
      letterSpacing: "0",
      fontWeight: "400"
    };

    function setPositiveNumber(elem, value, subtract) {
      // Any relative (+/-) values have already been
      // normalized at this point
      var matches = rcssNum.exec(value);
      return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
      Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
    }

    function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
      var i = dimension === "width" ? 1 : 0,
          extra = 0,
          delta = 0; // Adjustment may not be necessary

      if (box === (isBorderBox ? "border" : "content")) {
        return 0;
      }

      for (; i < 4; i += 2) {
        // Both box models exclude margin
        if (box === "margin") {
          delta += jQuery.css(elem, box + cssExpand[i], true, styles);
        } // If we get here with a content-box, we're seeking "padding" or "border" or "margin"


        if (!isBorderBox) {
          // Add padding
          delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // For "border" or "margin", add border

          if (box !== "padding") {
            delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); // But still keep track of it otherwise
          } else {
            extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
          } // If we get here with a border-box (content + padding + border), we're seeking "content" or
          // "padding" or "margin"

        } else {
          // For "content", subtract padding
          if (box === "content") {
            delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
          } // For "content" or "padding", subtract border


          if (box !== "margin") {
            delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
          }
        }
      } // Account for positive content-box scroll gutter when requested by providing computedVal


      if (!isBorderBox && computedVal >= 0) {
        // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
        // Assuming integer scroll gutter, subtract the rest and round down
        delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5 // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
        // Use an explicit zero to avoid NaN (gh-3964)
        )) || 0;
      }

      return delta;
    }

    function getWidthOrHeight(elem, dimension, extra) {
      // Start with computed style
      var styles = getStyles(elem),
          // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
      // Fake content-box until we know it's needed to know the true value.
      boxSizingNeeded = !support.boxSizingReliable() || extra,
          isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
          valueIsBorderBox = isBorderBox,
          val = curCSS(elem, dimension, styles),
          offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1); // Support: Firefox <=54
      // Return a confounding non-pixel value or feign ignorance, as appropriate.

      if (rnumnonpx.test(val)) {
        if (!extra) {
          return val;
        }

        val = "auto";
      } // Fall back to offsetWidth/offsetHeight when value is "auto"
      // This happens for inline elements with no explicit setting (gh-3571)
      // Support: Android <=4.1 - 4.3 only
      // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
      // Support: IE 9-11 only
      // Also use offsetWidth/offsetHeight for when box sizing is unreliable
      // We use getClientRects() to check for hidden/disconnected.
      // In those cases, the computed value can be trusted to be border-box


      if ((!support.boxSizingReliable() && isBorderBox || val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
        isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box"; // Where available, offsetWidth/offsetHeight approximate border box dimensions.
        // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
        // retrieved value as a content box dimension.

        valueIsBorderBox = offsetProp in elem;

        if (valueIsBorderBox) {
          val = elem[offsetProp];
        }
      } // Normalize "" and auto


      val = parseFloat(val) || 0; // Adjust for the element's box model

      return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
      val) + "px";
    }

    jQuery.extend({
      // Add in style property hooks for overriding the default
      // behavior of getting and setting a style property
      cssHooks: {
        opacity: {
          get: function get(elem, computed) {
            if (computed) {
              // We should always get a number back from opacity
              var ret = curCSS(elem, "opacity");
              return ret === "" ? "1" : ret;
            }
          }
        }
      },
      // Don't automatically add "px" to these possibly-unitless properties
      cssNumber: {
        "animationIterationCount": true,
        "columnCount": true,
        "fillOpacity": true,
        "flexGrow": true,
        "flexShrink": true,
        "fontWeight": true,
        "gridArea": true,
        "gridColumn": true,
        "gridColumnEnd": true,
        "gridColumnStart": true,
        "gridRow": true,
        "gridRowEnd": true,
        "gridRowStart": true,
        "lineHeight": true,
        "opacity": true,
        "order": true,
        "orphans": true,
        "widows": true,
        "zIndex": true,
        "zoom": true
      },
      // Add in properties whose names you wish to fix before
      // setting or getting the value
      cssProps: {},
      // Get and set the style property on a DOM Node
      style: function style(elem, name, value, extra) {
        // Don't set styles on text and comment nodes
        if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
          return;
        } // Make sure that we're working with the right name


        var ret,
            type,
            hooks,
            origName = camelCase(name),
            isCustomProp = rcustomProp.test(name),
            style = elem.style; // Make sure that we're working with the right name. We don't
        // want to query the value if it is a CSS custom property
        // since they are user-defined.

        if (!isCustomProp) {
          name = finalPropName(origName);
        } // Gets hook for the prefixed version, then unprefixed version


        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value

        if (value !== undefined) {
          type = _typeof(value); // Convert "+=" or "-=" to relative numbers (#7345)

          if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
            value = adjustCSS(elem, name, ret); // Fixes bug #9237

            type = "number";
          } // Make sure that null and NaN values aren't set (#7116)


          if (value == null || value !== value) {
            return;
          } // If a number was passed in, add the unit (except for certain CSS properties)
          // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
          // "px" to a few hardcoded values.


          if (type === "number" && !isCustomProp) {
            value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
          } // background-* props affect original clone's values


          if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
            style[name] = "inherit";
          } // If a hook was provided, use that value, otherwise just set the specified value


          if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
            if (isCustomProp) {
              style.setProperty(name, value);
            } else {
              style[name] = value;
            }
          }
        } else {
          // If a hook was provided get the non-computed value from there
          if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
            return ret;
          } // Otherwise just get the value from the style object


          return style[name];
        }
      },
      css: function css(elem, name, extra, styles) {
        var val,
            num,
            hooks,
            origName = camelCase(name),
            isCustomProp = rcustomProp.test(name); // Make sure that we're working with the right name. We don't
        // want to modify the value if it is a CSS custom property
        // since they are user-defined.

        if (!isCustomProp) {
          name = finalPropName(origName);
        } // Try prefixed name followed by the unprefixed name


        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there

        if (hooks && "get" in hooks) {
          val = hooks.get(elem, true, extra);
        } // Otherwise, if a way to get the computed value exists, use that


        if (val === undefined) {
          val = curCSS(elem, name, styles);
        } // Convert "normal" to computed value


        if (val === "normal" && name in cssNormalTransform) {
          val = cssNormalTransform[name];
        } // Make numeric if forced or a qualifier was provided and val looks numeric


        if (extra === "" || extra) {
          num = parseFloat(val);
          return extra === true || isFinite(num) ? num || 0 : val;
        }

        return val;
      }
    });
    jQuery.each(["height", "width"], function (i, dimension) {
      jQuery.cssHooks[dimension] = {
        get: function get(elem, computed, extra) {
          if (computed) {
            // Certain elements can have dimension info if we invisibly show them
            // but it must have a current display style that would benefit
            return rdisplayswap.test(jQuery.css(elem, "display")) && ( // Support: Safari 8+
            // Table columns in Safari have non-zero offsetWidth & zero
            // getBoundingClientRect().width unless display is changed.
            // Support: IE <=11 only
            // Running getBoundingClientRect on a disconnected node
            // in IE throws an error.
            !elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
              return getWidthOrHeight(elem, dimension, extra);
            }) : getWidthOrHeight(elem, dimension, extra);
          }
        },
        set: function set(elem, value, extra) {
          var matches,
              styles = getStyles(elem),
              // Only read styles.position if the test has a chance to fail
          // to avoid forcing a reflow.
          scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute",
              // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
          boxSizingNeeded = scrollboxSizeBuggy || extra,
              isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
              subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0; // Account for unreliable border-box dimensions by comparing offset* to computed and
          // faking a content-box to get border and padding (gh-3699)

          if (isBorderBox && scrollboxSizeBuggy) {
            subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
          } // Convert to pixels if value adjustment is needed


          if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
            elem.style[dimension] = value;
            value = jQuery.css(elem, dimension);
          }

          return setPositiveNumber(elem, value, subtract);
        }
      };
    });
    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
      if (computed) {
        return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
          marginLeft: 0
        }, function () {
          return elem.getBoundingClientRect().left;
        })) + "px";
      }
    }); // These hooks are used by animate to expand properties

    jQuery.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (prefix, suffix) {
      jQuery.cssHooks[prefix + suffix] = {
        expand: function expand(value) {
          var i = 0,
              expanded = {},
              // Assumes a single number if not a string
          parts = typeof value === "string" ? value.split(" ") : [value];

          for (; i < 4; i++) {
            expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
          }

          return expanded;
        }
      };

      if (prefix !== "margin") {
        jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
      }
    });
    jQuery.fn.extend({
      css: function css(name, value) {
        return access(this, function (elem, name, value) {
          var styles,
              len,
              map = {},
              i = 0;

          if (Array.isArray(name)) {
            styles = getStyles(elem);
            len = name.length;

            for (; i < len; i++) {
              map[name[i]] = jQuery.css(elem, name[i], false, styles);
            }

            return map;
          }

          return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
        }, name, value, arguments.length > 1);
      }
    });

    function Tween(elem, options, prop, end, easing) {
      return new Tween.prototype.init(elem, options, prop, end, easing);
    }

    jQuery.Tween = Tween;
    Tween.prototype = {
      constructor: Tween,
      init: function init(elem, options, prop, end, easing, unit) {
        this.elem = elem;
        this.prop = prop;
        this.easing = easing || jQuery.easing._default;
        this.options = options;
        this.start = this.now = this.cur();
        this.end = end;
        this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
      },
      cur: function cur() {
        var hooks = Tween.propHooks[this.prop];
        return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
      },
      run: function run(percent) {
        var eased,
            hooks = Tween.propHooks[this.prop];

        if (this.options.duration) {
          this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
        } else {
          this.pos = eased = percent;
        }

        this.now = (this.end - this.start) * eased + this.start;

        if (this.options.step) {
          this.options.step.call(this.elem, this.now, this);
        }

        if (hooks && hooks.set) {
          hooks.set(this);
        } else {
          Tween.propHooks._default.set(this);
        }

        return this;
      }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
      _default: {
        get: function get(tween) {
          var result; // Use a property on the element directly when it is not a DOM element,
          // or when there is no matching style property that exists.

          if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
            return tween.elem[tween.prop];
          } // Passing an empty string as a 3rd parameter to .css will automatically
          // attempt a parseFloat and fallback to a string if the parse fails.
          // Simple values such as "10px" are parsed to Float;
          // complex values such as "rotate(1rad)" are returned as-is.


          result = jQuery.css(tween.elem, tween.prop, ""); // Empty strings, null, undefined and "auto" are converted to 0.

          return !result || result === "auto" ? 0 : result;
        },
        set: function set(tween) {
          // Use step hook for back compat.
          // Use cssHook if its there.
          // Use .style if available and use plain properties where available.
          if (jQuery.fx.step[tween.prop]) {
            jQuery.fx.step[tween.prop](tween);
          } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
            jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
          } else {
            tween.elem[tween.prop] = tween.now;
          }
        }
      }
    }; // Support: IE <=9 only
    // Panic based approach to setting things on disconnected nodes

    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
      set: function set(tween) {
        if (tween.elem.nodeType && tween.elem.parentNode) {
          tween.elem[tween.prop] = tween.now;
        }
      }
    };
    jQuery.easing = {
      linear: function linear(p) {
        return p;
      },
      swing: function swing(p) {
        return 0.5 - Math.cos(p * Math.PI) / 2;
      },
      _default: "swing"
    };
    jQuery.fx = Tween.prototype.init; // Back compat <1.8 extension point

    jQuery.fx.step = {};
    var fxNow,
        inProgress,
        rfxtypes = /^(?:toggle|show|hide)$/,
        rrun = /queueHooks$/;

    function schedule() {
      if (inProgress) {
        if (document.hidden === false && window.requestAnimationFrame) {
          window.requestAnimationFrame(schedule);
        } else {
          window.setTimeout(schedule, jQuery.fx.interval);
        }

        jQuery.fx.tick();
      }
    } // Animations created synchronously will run synchronously


    function createFxNow() {
      window.setTimeout(function () {
        fxNow = undefined;
      });
      return fxNow = Date.now();
    } // Generate parameters to create a standard animation


    function genFx(type, includeWidth) {
      var which,
          i = 0,
          attrs = {
        height: type
      }; // If we include width, step value is 1 to do all cssExpand values,
      // otherwise step value is 2 to skip over Left and Right

      includeWidth = includeWidth ? 1 : 0;

      for (; i < 4; i += 2 - includeWidth) {
        which = cssExpand[i];
        attrs["margin" + which] = attrs["padding" + which] = type;
      }

      if (includeWidth) {
        attrs.opacity = attrs.width = type;
      }

      return attrs;
    }

    function createTween(value, prop, animation) {
      var tween,
          collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
          index = 0,
          length = collection.length;

      for (; index < length; index++) {
        if (tween = collection[index].call(animation, prop, value)) {
          // We're done with this property
          return tween;
        }
      }
    }

    function defaultPrefilter(elem, props, opts) {
      var prop,
          value,
          toggle,
          hooks,
          oldfire,
          propTween,
          restoreDisplay,
          display,
          isBox = "width" in props || "height" in props,
          anim = this,
          orig = {},
          style = elem.style,
          hidden = elem.nodeType && isHiddenWithinTree(elem),
          dataShow = dataPriv.get(elem, "fxshow"); // Queue-skipping animations hijack the fx hooks

      if (!opts.queue) {
        hooks = jQuery._queueHooks(elem, "fx");

        if (hooks.unqueued == null) {
          hooks.unqueued = 0;
          oldfire = hooks.empty.fire;

          hooks.empty.fire = function () {
            if (!hooks.unqueued) {
              oldfire();
            }
          };
        }

        hooks.unqueued++;
        anim.always(function () {
          // Ensure the complete handler is called before this completes
          anim.always(function () {
            hooks.unqueued--;

            if (!jQuery.queue(elem, "fx").length) {
              hooks.empty.fire();
            }
          });
        });
      } // Detect show/hide animations


      for (prop in props) {
        value = props[prop];

        if (rfxtypes.test(value)) {
          delete props[prop];
          toggle = toggle || value === "toggle";

          if (value === (hidden ? "hide" : "show")) {
            // Pretend to be hidden if this is a "show" and
            // there is still data from a stopped show/hide
            if (value === "show" && dataShow && dataShow[prop] !== undefined) {
              hidden = true; // Ignore all other no-op show/hide data
            } else {
              continue;
            }
          }

          orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
        }
      } // Bail out if this is a no-op like .hide().hide()


      propTween = !jQuery.isEmptyObject(props);

      if (!propTween && jQuery.isEmptyObject(orig)) {
        return;
      } // Restrict "overflow" and "display" styles during box animations


      if (isBox && elem.nodeType === 1) {
        // Support: IE <=9 - 11, Edge 12 - 15
        // Record all 3 overflow attributes because IE does not infer the shorthand
        // from identically-valued overflowX and overflowY and Edge just mirrors
        // the overflowX value there.
        opts.overflow = [style.overflow, style.overflowX, style.overflowY]; // Identify a display type, preferring old show/hide data over the CSS cascade

        restoreDisplay = dataShow && dataShow.display;

        if (restoreDisplay == null) {
          restoreDisplay = dataPriv.get(elem, "display");
        }

        display = jQuery.css(elem, "display");

        if (display === "none") {
          if (restoreDisplay) {
            display = restoreDisplay;
          } else {
            // Get nonempty value(s) by temporarily forcing visibility
            showHide([elem], true);
            restoreDisplay = elem.style.display || restoreDisplay;
            display = jQuery.css(elem, "display");
            showHide([elem]);
          }
        } // Animate inline elements as inline-block


        if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
          if (jQuery.css(elem, "float") === "none") {
            // Restore the original display value at the end of pure show/hide animations
            if (!propTween) {
              anim.done(function () {
                style.display = restoreDisplay;
              });

              if (restoreDisplay == null) {
                display = style.display;
                restoreDisplay = display === "none" ? "" : display;
              }
            }

            style.display = "inline-block";
          }
        }
      }

      if (opts.overflow) {
        style.overflow = "hidden";
        anim.always(function () {
          style.overflow = opts.overflow[0];
          style.overflowX = opts.overflow[1];
          style.overflowY = opts.overflow[2];
        });
      } // Implement show/hide animations


      propTween = false;

      for (prop in orig) {
        // General show/hide setup for this element animation
        if (!propTween) {
          if (dataShow) {
            if ("hidden" in dataShow) {
              hidden = dataShow.hidden;
            }
          } else {
            dataShow = dataPriv.access(elem, "fxshow", {
              display: restoreDisplay
            });
          } // Store hidden/visible for toggle so `.stop().toggle()` "reverses"


          if (toggle) {
            dataShow.hidden = !hidden;
          } // Show elements before animating them


          if (hidden) {
            showHide([elem], true);
          }
          /* eslint-disable no-loop-func */


          anim.done(function () {
            /* eslint-enable no-loop-func */
            // The final step of a "hide" animation is actually hiding the element
            if (!hidden) {
              showHide([elem]);
            }

            dataPriv.remove(elem, "fxshow");

            for (prop in orig) {
              jQuery.style(elem, prop, orig[prop]);
            }
          });
        } // Per-property setup


        propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

        if (!(prop in dataShow)) {
          dataShow[prop] = propTween.start;

          if (hidden) {
            propTween.end = propTween.start;
            propTween.start = 0;
          }
        }
      }
    }

    function propFilter(props, specialEasing) {
      var index, name, easing, value, hooks; // camelCase, specialEasing and expand cssHook pass

      for (index in props) {
        name = camelCase(index);
        easing = specialEasing[name];
        value = props[index];

        if (Array.isArray(value)) {
          easing = value[1];
          value = props[index] = value[0];
        }

        if (index !== name) {
          props[name] = value;
          delete props[index];
        }

        hooks = jQuery.cssHooks[name];

        if (hooks && "expand" in hooks) {
          value = hooks.expand(value);
          delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
          // Reusing 'index' because we have the correct "name"

          for (index in value) {
            if (!(index in props)) {
              props[index] = value[index];
              specialEasing[index] = easing;
            }
          }
        } else {
          specialEasing[name] = easing;
        }
      }
    }

    function Animation(elem, properties, options) {
      var result,
          stopped,
          index = 0,
          length = Animation.prefilters.length,
          deferred = jQuery.Deferred().always(function () {
        // Don't match elem in the :animated selector
        delete tick.elem;
      }),
          tick = function tick() {
        if (stopped) {
          return false;
        }

        var currentTime = fxNow || createFxNow(),
            remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
            // Support: Android 2.3 only
        // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
        temp = remaining / animation.duration || 0,
            percent = 1 - temp,
            index = 0,
            length = animation.tweens.length;

        for (; index < length; index++) {
          animation.tweens[index].run(percent);
        }

        deferred.notifyWith(elem, [animation, percent, remaining]); // If there's more to do, yield

        if (percent < 1 && length) {
          return remaining;
        } // If this was an empty animation, synthesize a final progress notification


        if (!length) {
          deferred.notifyWith(elem, [animation, 1, 0]);
        } // Resolve the animation and report its conclusion


        deferred.resolveWith(elem, [animation]);
        return false;
      },
          animation = deferred.promise({
        elem: elem,
        props: jQuery.extend({}, properties),
        opts: jQuery.extend(true, {
          specialEasing: {},
          easing: jQuery.easing._default
        }, options),
        originalProperties: properties,
        originalOptions: options,
        startTime: fxNow || createFxNow(),
        duration: options.duration,
        tweens: [],
        createTween: function createTween(prop, end) {
          var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
          animation.tweens.push(tween);
          return tween;
        },
        stop: function stop(gotoEnd) {
          var index = 0,
              // If we are going to the end, we want to run all the tweens
          // otherwise we skip this part
          length = gotoEnd ? animation.tweens.length : 0;

          if (stopped) {
            return this;
          }

          stopped = true;

          for (; index < length; index++) {
            animation.tweens[index].run(1);
          } // Resolve when we played the last frame; otherwise, reject


          if (gotoEnd) {
            deferred.notifyWith(elem, [animation, 1, 0]);
            deferred.resolveWith(elem, [animation, gotoEnd]);
          } else {
            deferred.rejectWith(elem, [animation, gotoEnd]);
          }

          return this;
        }
      }),
          props = animation.props;

      propFilter(props, animation.opts.specialEasing);

      for (; index < length; index++) {
        result = Animation.prefilters[index].call(animation, elem, props, animation.opts);

        if (result) {
          if (isFunction(result.stop)) {
            jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
          }

          return result;
        }
      }

      jQuery.map(props, createTween, animation);

      if (isFunction(animation.opts.start)) {
        animation.opts.start.call(elem, animation);
      } // Attach callbacks from options


      animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
      jQuery.fx.timer(jQuery.extend(tick, {
        elem: elem,
        anim: animation,
        queue: animation.opts.queue
      }));
      return animation;
    }

    jQuery.Animation = jQuery.extend(Animation, {
      tweeners: {
        "*": [function (prop, value) {
          var tween = this.createTween(prop, value);
          adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
          return tween;
        }]
      },
      tweener: function tweener(props, callback) {
        if (isFunction(props)) {
          callback = props;
          props = ["*"];
        } else {
          props = props.match(rnothtmlwhite);
        }

        var prop,
            index = 0,
            length = props.length;

        for (; index < length; index++) {
          prop = props[index];
          Animation.tweeners[prop] = Animation.tweeners[prop] || [];
          Animation.tweeners[prop].unshift(callback);
        }
      },
      prefilters: [defaultPrefilter],
      prefilter: function prefilter(callback, prepend) {
        if (prepend) {
          Animation.prefilters.unshift(callback);
        } else {
          Animation.prefilters.push(callback);
        }
      }
    });

    jQuery.speed = function (speed, easing, fn) {
      var opt = speed && _typeof(speed) === "object" ? jQuery.extend({}, speed) : {
        complete: fn || !fn && easing || isFunction(speed) && speed,
        duration: speed,
        easing: fn && easing || easing && !isFunction(easing) && easing
      }; // Go to the end state if fx are off

      if (jQuery.fx.off) {
        opt.duration = 0;
      } else {
        if (typeof opt.duration !== "number") {
          if (opt.duration in jQuery.fx.speeds) {
            opt.duration = jQuery.fx.speeds[opt.duration];
          } else {
            opt.duration = jQuery.fx.speeds._default;
          }
        }
      } // Normalize opt.queue - true/undefined/null -> "fx"


      if (opt.queue == null || opt.queue === true) {
        opt.queue = "fx";
      } // Queueing


      opt.old = opt.complete;

      opt.complete = function () {
        if (isFunction(opt.old)) {
          opt.old.call(this);
        }

        if (opt.queue) {
          jQuery.dequeue(this, opt.queue);
        }
      };

      return opt;
    };

    jQuery.fn.extend({
      fadeTo: function fadeTo(speed, to, easing, callback) {
        // Show any hidden elements after setting opacity to 0
        return this.filter(isHiddenWithinTree).css("opacity", 0).show() // Animate to the value specified
        .end().animate({
          opacity: to
        }, speed, easing, callback);
      },
      animate: function animate(prop, speed, easing, callback) {
        var empty = jQuery.isEmptyObject(prop),
            optall = jQuery.speed(speed, easing, callback),
            doAnimation = function doAnimation() {
          // Operate on a copy of prop so per-property easing won't be lost
          var anim = Animation(this, jQuery.extend({}, prop), optall); // Empty animations, or finishing resolves immediately

          if (empty || dataPriv.get(this, "finish")) {
            anim.stop(true);
          }
        };

        doAnimation.finish = doAnimation;
        return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
      },
      stop: function stop(type, clearQueue, gotoEnd) {
        var stopQueue = function stopQueue(hooks) {
          var stop = hooks.stop;
          delete hooks.stop;
          stop(gotoEnd);
        };

        if (typeof type !== "string") {
          gotoEnd = clearQueue;
          clearQueue = type;
          type = undefined;
        }

        if (clearQueue && type !== false) {
          this.queue(type || "fx", []);
        }

        return this.each(function () {
          var dequeue = true,
              index = type != null && type + "queueHooks",
              timers = jQuery.timers,
              data = dataPriv.get(this);

          if (index) {
            if (data[index] && data[index].stop) {
              stopQueue(data[index]);
            }
          } else {
            for (index in data) {
              if (data[index] && data[index].stop && rrun.test(index)) {
                stopQueue(data[index]);
              }
            }
          }

          for (index = timers.length; index--;) {
            if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
              timers[index].anim.stop(gotoEnd);
              dequeue = false;
              timers.splice(index, 1);
            }
          } // Start the next in the queue if the last step wasn't forced.
          // Timers currently will call their complete callbacks, which
          // will dequeue but only if they were gotoEnd.


          if (dequeue || !gotoEnd) {
            jQuery.dequeue(this, type);
          }
        });
      },
      finish: function finish(type) {
        if (type !== false) {
          type = type || "fx";
        }

        return this.each(function () {
          var index,
              data = dataPriv.get(this),
              queue = data[type + "queue"],
              hooks = data[type + "queueHooks"],
              timers = jQuery.timers,
              length = queue ? queue.length : 0; // Enable finishing flag on private data

          data.finish = true; // Empty the queue first

          jQuery.queue(this, type, []);

          if (hooks && hooks.stop) {
            hooks.stop.call(this, true);
          } // Look for any active animations, and finish them


          for (index = timers.length; index--;) {
            if (timers[index].elem === this && timers[index].queue === type) {
              timers[index].anim.stop(true);
              timers.splice(index, 1);
            }
          } // Look for any animations in the old queue and finish them


          for (index = 0; index < length; index++) {
            if (queue[index] && queue[index].finish) {
              queue[index].finish.call(this);
            }
          } // Turn off finishing flag


          delete data.finish;
        });
      }
    });
    jQuery.each(["toggle", "show", "hide"], function (i, name) {
      var cssFn = jQuery.fn[name];

      jQuery.fn[name] = function (speed, easing, callback) {
        return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
      };
    }); // Generate shortcuts for custom animations

    jQuery.each({
      slideDown: genFx("show"),
      slideUp: genFx("hide"),
      slideToggle: genFx("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (name, props) {
      jQuery.fn[name] = function (speed, easing, callback) {
        return this.animate(props, speed, easing, callback);
      };
    });
    jQuery.timers = [];

    jQuery.fx.tick = function () {
      var timer,
          i = 0,
          timers = jQuery.timers;
      fxNow = Date.now();

      for (; i < timers.length; i++) {
        timer = timers[i]; // Run the timer and safely remove it when done (allowing for external removal)

        if (!timer() && timers[i] === timer) {
          timers.splice(i--, 1);
        }
      }

      if (!timers.length) {
        jQuery.fx.stop();
      }

      fxNow = undefined;
    };

    jQuery.fx.timer = function (timer) {
      jQuery.timers.push(timer);
      jQuery.fx.start();
    };

    jQuery.fx.interval = 13;

    jQuery.fx.start = function () {
      if (inProgress) {
        return;
      }

      inProgress = true;
      schedule();
    };

    jQuery.fx.stop = function () {
      inProgress = null;
    };

    jQuery.fx.speeds = {
      slow: 600,
      fast: 200,
      // Default speed
      _default: 400
    }; // Based off of the plugin by Clint Helfers, with permission.
    // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/

    jQuery.fn.delay = function (time, type) {
      time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
      type = type || "fx";
      return this.queue(type, function (next, hooks) {
        var timeout = window.setTimeout(next, time);

        hooks.stop = function () {
          window.clearTimeout(timeout);
        };
      });
    };

    (function () {
      var input = document.createElement("input"),
          select = document.createElement("select"),
          opt = select.appendChild(document.createElement("option"));
      input.type = "checkbox"; // Support: Android <=4.3 only
      // Default value for a checkbox should be "on"

      support.checkOn = input.value !== ""; // Support: IE <=11 only
      // Must access selectedIndex to make default options select

      support.optSelected = opt.selected; // Support: IE <=11 only
      // An input loses its value after becoming a radio

      input = document.createElement("input");
      input.value = "t";
      input.type = "radio";
      support.radioValue = input.value === "t";
    })();

    var boolHook,
        attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
      attr: function attr(name, value) {
        return access(this, jQuery.attr, name, value, arguments.length > 1);
      },
      removeAttr: function removeAttr(name) {
        return this.each(function () {
          jQuery.removeAttr(this, name);
        });
      }
    });
    jQuery.extend({
      attr: function attr(elem, name, value) {
        var ret,
            hooks,
            nType = elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes

        if (nType === 3 || nType === 8 || nType === 2) {
          return;
        } // Fallback to prop when attributes are not supported


        if (typeof elem.getAttribute === "undefined") {
          return jQuery.prop(elem, name, value);
        } // Attribute hooks are determined by the lowercase version
        // Grab necessary hook if one is defined


        if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
          hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
        }

        if (value !== undefined) {
          if (value === null) {
            jQuery.removeAttr(elem, name);
            return;
          }

          if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
            return ret;
          }

          elem.setAttribute(name, value + "");
          return value;
        }

        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
          return ret;
        }

        ret = jQuery.find.attr(elem, name); // Non-existent attributes return null, we normalize to undefined

        return ret == null ? undefined : ret;
      },
      attrHooks: {
        type: {
          set: function set(elem, value) {
            if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
              var val = elem.value;
              elem.setAttribute("type", value);

              if (val) {
                elem.value = val;
              }

              return value;
            }
          }
        }
      },
      removeAttr: function removeAttr(elem, value) {
        var name,
            i = 0,
            // Attribute names can contain non-HTML whitespace characters
        // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
        attrNames = value && value.match(rnothtmlwhite);

        if (attrNames && elem.nodeType === 1) {
          while (name = attrNames[i++]) {
            elem.removeAttribute(name);
          }
        }
      }
    }); // Hooks for boolean attributes

    boolHook = {
      set: function set(elem, value, name) {
        if (value === false) {
          // Remove boolean attributes when set to false
          jQuery.removeAttr(elem, name);
        } else {
          elem.setAttribute(name, name);
        }

        return name;
      }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
      var getter = attrHandle[name] || jQuery.find.attr;

      attrHandle[name] = function (elem, name, isXML) {
        var ret,
            handle,
            lowercaseName = name.toLowerCase();

        if (!isXML) {
          // Avoid an infinite loop by temporarily removing this function from the getter
          handle = attrHandle[lowercaseName];
          attrHandle[lowercaseName] = ret;
          ret = getter(elem, name, isXML) != null ? lowercaseName : null;
          attrHandle[lowercaseName] = handle;
        }

        return ret;
      };
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i,
        rclickable = /^(?:a|area)$/i;
    jQuery.fn.extend({
      prop: function prop(name, value) {
        return access(this, jQuery.prop, name, value, arguments.length > 1);
      },
      removeProp: function removeProp(name) {
        return this.each(function () {
          delete this[jQuery.propFix[name] || name];
        });
      }
    });
    jQuery.extend({
      prop: function prop(elem, name, value) {
        var ret,
            hooks,
            nType = elem.nodeType; // Don't get/set properties on text, comment and attribute nodes

        if (nType === 3 || nType === 8 || nType === 2) {
          return;
        }

        if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
          // Fix name and attach hooks
          name = jQuery.propFix[name] || name;
          hooks = jQuery.propHooks[name];
        }

        if (value !== undefined) {
          if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
            return ret;
          }

          return elem[name] = value;
        }

        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
          return ret;
        }

        return elem[name];
      },
      propHooks: {
        tabIndex: {
          get: function get(elem) {
            // Support: IE <=9 - 11 only
            // elem.tabIndex doesn't always return the
            // correct value when it hasn't been explicitly set
            // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
            // Use proper attribute retrieval(#12072)
            var tabindex = jQuery.find.attr(elem, "tabindex");

            if (tabindex) {
              return parseInt(tabindex, 10);
            }

            if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
              return 0;
            }

            return -1;
          }
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    }); // Support: IE <=11 only
    // Accessing the selectedIndex property
    // forces the browser to respect setting selected
    // on the option
    // The getter ensures a default option is selected
    // when in an optgroup
    // eslint rule "no-unused-expressions" is disabled for this code
    // since it considers such accessions noop

    if (!support.optSelected) {
      jQuery.propHooks.selected = {
        get: function get(elem) {
          /* eslint no-unused-expressions: "off" */
          var parent = elem.parentNode;

          if (parent && parent.parentNode) {
            parent.parentNode.selectedIndex;
          }

          return null;
        },
        set: function set(elem) {
          /* eslint no-unused-expressions: "off" */
          var parent = elem.parentNode;

          if (parent) {
            parent.selectedIndex;

            if (parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
          }
        }
      };
    }

    jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      jQuery.propFix[this.toLowerCase()] = this;
    }); // Strip and collapse whitespace according to HTML spec
    // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace

    function stripAndCollapse(value) {
      var tokens = value.match(rnothtmlwhite) || [];
      return tokens.join(" ");
    }

    function getClass(elem) {
      return elem.getAttribute && elem.getAttribute("class") || "";
    }

    function classesToArray(value) {
      if (Array.isArray(value)) {
        return value;
      }

      if (typeof value === "string") {
        return value.match(rnothtmlwhite) || [];
      }

      return [];
    }

    jQuery.fn.extend({
      addClass: function addClass(value) {
        var classes,
            elem,
            cur,
            curValue,
            clazz,
            j,
            finalValue,
            i = 0;

        if (isFunction(value)) {
          return this.each(function (j) {
            jQuery(this).addClass(value.call(this, j, getClass(this)));
          });
        }

        classes = classesToArray(value);

        if (classes.length) {
          while (elem = this[i++]) {
            curValue = getClass(elem);
            cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

            if (cur) {
              j = 0;

              while (clazz = classes[j++]) {
                if (cur.indexOf(" " + clazz + " ") < 0) {
                  cur += clazz + " ";
                }
              } // Only assign if different to avoid unneeded rendering.


              finalValue = stripAndCollapse(cur);

              if (curValue !== finalValue) {
                elem.setAttribute("class", finalValue);
              }
            }
          }
        }

        return this;
      },
      removeClass: function removeClass(value) {
        var classes,
            elem,
            cur,
            curValue,
            clazz,
            j,
            finalValue,
            i = 0;

        if (isFunction(value)) {
          return this.each(function (j) {
            jQuery(this).removeClass(value.call(this, j, getClass(this)));
          });
        }

        if (!arguments.length) {
          return this.attr("class", "");
        }

        classes = classesToArray(value);

        if (classes.length) {
          while (elem = this[i++]) {
            curValue = getClass(elem); // This expression is here for better compressibility (see addClass)

            cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

            if (cur) {
              j = 0;

              while (clazz = classes[j++]) {
                // Remove *all* instances
                while (cur.indexOf(" " + clazz + " ") > -1) {
                  cur = cur.replace(" " + clazz + " ", " ");
                }
              } // Only assign if different to avoid unneeded rendering.


              finalValue = stripAndCollapse(cur);

              if (curValue !== finalValue) {
                elem.setAttribute("class", finalValue);
              }
            }
          }
        }

        return this;
      },
      toggleClass: function toggleClass(value, stateVal) {
        var type = _typeof(value),
            isValidValue = type === "string" || Array.isArray(value);

        if (typeof stateVal === "boolean" && isValidValue) {
          return stateVal ? this.addClass(value) : this.removeClass(value);
        }

        if (isFunction(value)) {
          return this.each(function (i) {
            jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
          });
        }

        return this.each(function () {
          var className, i, self, classNames;

          if (isValidValue) {
            // Toggle individual class names
            i = 0;
            self = jQuery(this);
            classNames = classesToArray(value);

            while (className = classNames[i++]) {
              // Check each className given, space separated list
              if (self.hasClass(className)) {
                self.removeClass(className);
              } else {
                self.addClass(className);
              }
            } // Toggle whole class name

          } else if (value === undefined || type === "boolean") {
            className = getClass(this);

            if (className) {
              // Store className if set
              dataPriv.set(this, "__className__", className);
            } // If the element has a class name or if we're passed `false`,
            // then remove the whole classname (if there was one, the above saved it).
            // Otherwise bring back whatever was previously saved (if anything),
            // falling back to the empty string if nothing was stored.


            if (this.setAttribute) {
              this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
            }
          }
        });
      },
      hasClass: function hasClass(selector) {
        var className,
            elem,
            i = 0;
        className = " " + selector + " ";

        while (elem = this[i++]) {
          if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
            return true;
          }
        }

        return false;
      }
    });
    var rreturn = /\r/g;
    jQuery.fn.extend({
      val: function val(value) {
        var hooks,
            ret,
            valueIsFunction,
            elem = this[0];

        if (!arguments.length) {
          if (elem) {
            hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

            if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
              return ret;
            }

            ret = elem.value; // Handle most common string cases

            if (typeof ret === "string") {
              return ret.replace(rreturn, "");
            } // Handle cases where value is null/undef or number


            return ret == null ? "" : ret;
          }

          return;
        }

        valueIsFunction = isFunction(value);
        return this.each(function (i) {
          var val;

          if (this.nodeType !== 1) {
            return;
          }

          if (valueIsFunction) {
            val = value.call(this, i, jQuery(this).val());
          } else {
            val = value;
          } // Treat null/undefined as ""; convert numbers to string


          if (val == null) {
            val = "";
          } else if (typeof val === "number") {
            val += "";
          } else if (Array.isArray(val)) {
            val = jQuery.map(val, function (value) {
              return value == null ? "" : value + "";
            });
          }

          hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting

          if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
            this.value = val;
          }
        });
      }
    });
    jQuery.extend({
      valHooks: {
        option: {
          get: function get(elem) {
            var val = jQuery.find.attr(elem, "value");
            return val != null ? val : // Support: IE <=10 - 11 only
            // option.text throws exceptions (#14686, #14858)
            // Strip and collapse whitespace
            // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
            stripAndCollapse(jQuery.text(elem));
          }
        },
        select: {
          get: function get(elem) {
            var value,
                option,
                i,
                options = elem.options,
                index = elem.selectedIndex,
                one = elem.type === "select-one",
                values = one ? null : [],
                max = one ? index + 1 : options.length;

            if (index < 0) {
              i = max;
            } else {
              i = one ? index : 0;
            } // Loop through all the selected options


            for (; i < max; i++) {
              option = options[i]; // Support: IE <=9 only
              // IE8-9 doesn't update selected after form reset (#2551)

              if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
              !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                // Get the specific value for the option
                value = jQuery(option).val(); // We don't need an array for one selects

                if (one) {
                  return value;
                } // Multi-Selects return an array


                values.push(value);
              }
            }

            return values;
          },
          set: function set(elem, value) {
            var optionSet,
                option,
                options = elem.options,
                values = jQuery.makeArray(value),
                i = options.length;

            while (i--) {
              option = options[i];
              /* eslint-disable no-cond-assign */

              if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                optionSet = true;
              }
              /* eslint-enable no-cond-assign */

            } // Force browsers to behave consistently when non-matching value is set


            if (!optionSet) {
              elem.selectedIndex = -1;
            }

            return values;
          }
        }
      }
    }); // Radios and checkboxes getter/setter

    jQuery.each(["radio", "checkbox"], function () {
      jQuery.valHooks[this] = {
        set: function set(elem, value) {
          if (Array.isArray(value)) {
            return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
          }
        }
      };

      if (!support.checkOn) {
        jQuery.valHooks[this].get = function (elem) {
          return elem.getAttribute("value") === null ? "on" : elem.value;
        };
      }
    }); // Return jQuery for attributes-only inclusion

    support.focusin = "onfocusin" in window;

    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
        stopPropagationCallback = function stopPropagationCallback(e) {
      e.stopPropagation();
    };

    jQuery.extend(jQuery.event, {
      trigger: function trigger(event, data, elem, onlyHandlers) {
        var i,
            cur,
            tmp,
            bubbleType,
            ontype,
            handle,
            special,
            lastElement,
            eventPath = [elem || document],
            type = hasOwn.call(event, "type") ? event.type : event,
            namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
        cur = lastElement = tmp = elem = elem || document; // Don't do events on text and comment nodes

        if (elem.nodeType === 3 || elem.nodeType === 8) {
          return;
        } // focus/blur morphs to focusin/out; ensure we're not firing them right now


        if (rfocusMorph.test(type + jQuery.event.triggered)) {
          return;
        }

        if (type.indexOf(".") > -1) {
          // Namespaced trigger; create a regexp to match event type in handle()
          namespaces = type.split(".");
          type = namespaces.shift();
          namespaces.sort();
        }

        ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string

        event = event[jQuery.expando] ? event : new jQuery.Event(type, _typeof(event) === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)

        event.isTrigger = onlyHandlers ? 2 : 3;
        event.namespace = namespaces.join(".");
        event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused

        event.result = undefined;

        if (!event.target) {
          event.target = elem;
        } // Clone any incoming data and prepend the event, creating the handler arg list


        data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines

        special = jQuery.event.special[type] || {};

        if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
          return;
        } // Determine event propagation path in advance, per W3C events spec (#9951)
        // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)


        if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
          bubbleType = special.delegateType || type;

          if (!rfocusMorph.test(bubbleType + type)) {
            cur = cur.parentNode;
          }

          for (; cur; cur = cur.parentNode) {
            eventPath.push(cur);
            tmp = cur;
          } // Only add window if we got to document (e.g., not plain obj or detached DOM)


          if (tmp === (elem.ownerDocument || document)) {
            eventPath.push(tmp.defaultView || tmp.parentWindow || window);
          }
        } // Fire handlers on the event path


        i = 0;

        while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
          lastElement = cur;
          event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler

          handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");

          if (handle) {
            handle.apply(cur, data);
          } // Native handler


          handle = ontype && cur[ontype];

          if (handle && handle.apply && acceptData(cur)) {
            event.result = handle.apply(cur, data);

            if (event.result === false) {
              event.preventDefault();
            }
          }
        }

        event.type = type; // If nobody prevented the default action, do it now

        if (!onlyHandlers && !event.isDefaultPrevented()) {
          if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
            // Call a native DOM method on the target with the same name as the event.
            // Don't do default actions on window, that's where global variables be (#6170)
            if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
              // Don't re-trigger an onFOO event when we call its FOO() method
              tmp = elem[ontype];

              if (tmp) {
                elem[ontype] = null;
              } // Prevent re-triggering of the same event, since we already bubbled it above


              jQuery.event.triggered = type;

              if (event.isPropagationStopped()) {
                lastElement.addEventListener(type, stopPropagationCallback);
              }

              elem[type]();

              if (event.isPropagationStopped()) {
                lastElement.removeEventListener(type, stopPropagationCallback);
              }

              jQuery.event.triggered = undefined;

              if (tmp) {
                elem[ontype] = tmp;
              }
            }
          }
        }

        return event.result;
      },
      // Piggyback on a donor event to simulate a different one
      // Used only for `focus(in | out)` events
      simulate: function simulate(type, elem, event) {
        var e = jQuery.extend(new jQuery.Event(), event, {
          type: type,
          isSimulated: true
        });
        jQuery.event.trigger(e, null, elem);
      }
    });
    jQuery.fn.extend({
      trigger: function trigger(type, data) {
        return this.each(function () {
          jQuery.event.trigger(type, data, this);
        });
      },
      triggerHandler: function triggerHandler(type, data) {
        var elem = this[0];

        if (elem) {
          return jQuery.event.trigger(type, data, elem, true);
        }
      }
    }); // Support: Firefox <=44
    // Firefox doesn't have focus(in | out) events
    // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
    //
    // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
    // focus(in | out) events fire after focus & blur events,
    // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
    // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857

    if (!support.focusin) {
      jQuery.each({
        focus: "focusin",
        blur: "focusout"
      }, function (orig, fix) {
        // Attach a single capturing handler on the document while someone wants focusin/focusout
        var handler = function handler(event) {
          jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
        };

        jQuery.event.special[fix] = {
          setup: function setup() {
            var doc = this.ownerDocument || this,
                attaches = dataPriv.access(doc, fix);

            if (!attaches) {
              doc.addEventListener(orig, handler, true);
            }

            dataPriv.access(doc, fix, (attaches || 0) + 1);
          },
          teardown: function teardown() {
            var doc = this.ownerDocument || this,
                attaches = dataPriv.access(doc, fix) - 1;

            if (!attaches) {
              doc.removeEventListener(orig, handler, true);
              dataPriv.remove(doc, fix);
            } else {
              dataPriv.access(doc, fix, attaches);
            }
          }
        };
      });
    }

    var location = window.location;
    var nonce = Date.now();
    var rquery = /\?/; // Cross-browser xml parsing

    jQuery.parseXML = function (data) {
      var xml;

      if (!data || typeof data !== "string") {
        return null;
      } // Support: IE 9 - 11 only
      // IE throws on parseFromString with invalid input.


      try {
        xml = new window.DOMParser().parseFromString(data, "text/xml");
      } catch (e) {
        xml = undefined;
      }

      if (!xml || xml.getElementsByTagName("parsererror").length) {
        jQuery.error("Invalid XML: " + data);
      }

      return xml;
    };

    var rbracket = /\[\]$/,
        rCRLF = /\r?\n/g,
        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
        rsubmittable = /^(?:input|select|textarea|keygen)/i;

    function buildParams(prefix, obj, traditional, add) {
      var name;

      if (Array.isArray(obj)) {
        // Serialize array item.
        jQuery.each(obj, function (i, v) {
          if (traditional || rbracket.test(prefix)) {
            // Treat each array item as a scalar.
            add(prefix, v);
          } else {
            // Item is non-scalar (array or object), encode its numeric index.
            buildParams(prefix + "[" + (_typeof(v) === "object" && v != null ? i : "") + "]", v, traditional, add);
          }
        });
      } else if (!traditional && toType(obj) === "object") {
        // Serialize object item.
        for (name in obj) {
          buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
        }
      } else {
        // Serialize scalar item.
        add(prefix, obj);
      }
    } // Serialize an array of form elements or a set of
    // key/values into a query string


    jQuery.param = function (a, traditional) {
      var prefix,
          s = [],
          add = function add(key, valueOrFunction) {
        // If value is a function, invoke it and use its return value
        var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
        s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
      };

      if (a == null) {
        return "";
      } // If an array was passed in, assume that it is an array of form elements.


      if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
        // Serialize the form elements
        jQuery.each(a, function () {
          add(this.name, this.value);
        });
      } else {
        // If traditional, encode the "old" way (the way 1.3.2 or older
        // did it), otherwise encode params recursively.
        for (prefix in a) {
          buildParams(prefix, a[prefix], traditional, add);
        }
      } // Return the resulting serialization


      return s.join("&");
    };

    jQuery.fn.extend({
      serialize: function serialize() {
        return jQuery.param(this.serializeArray());
      },
      serializeArray: function serializeArray() {
        return this.map(function () {
          // Can add propHook for "elements" to filter or add form elements
          var elements = jQuery.prop(this, "elements");
          return elements ? jQuery.makeArray(elements) : this;
        }).filter(function () {
          var type = this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works

          return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
        }).map(function (i, elem) {
          var val = jQuery(this).val();

          if (val == null) {
            return null;
          }

          if (Array.isArray(val)) {
            return jQuery.map(val, function (val) {
              return {
                name: elem.name,
                value: val.replace(rCRLF, "\r\n")
              };
            });
          }

          return {
            name: elem.name,
            value: val.replace(rCRLF, "\r\n")
          };
        }).get();
      }
    });
    var r20 = /%20/g,
        rhash = /#.*$/,
        rantiCache = /([?&])_=[^&]*/,
        rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
        // #7653, #8125, #8152: local protocol detection
    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        rnoContent = /^(?:GET|HEAD)$/,
        rprotocol = /^\/\//,

    /* Prefilters
     * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
     * 2) These are called:
     *    - BEFORE asking for a transport
     *    - AFTER param serialization (s.data is a string if s.processData is true)
     * 3) key is the dataType
     * 4) the catchall symbol "*" can be used
     * 5) execution will start with transport dataType and THEN continue down to "*" if needed
     */
    prefilters = {},

    /* Transports bindings
     * 1) key is the dataType
     * 2) the catchall symbol "*" can be used
     * 3) selection will start with transport dataType and THEN go to "*" if needed
     */
    transports = {},
        // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
    allTypes = "*/".concat("*"),
        // Anchor tag for parsing the document origin
    originAnchor = document.createElement("a");
    originAnchor.href = location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport

    function addToPrefiltersOrTransports(structure) {
      // dataTypeExpression is optional and defaults to "*"
      return function (dataTypeExpression, func) {
        if (typeof dataTypeExpression !== "string") {
          func = dataTypeExpression;
          dataTypeExpression = "*";
        }

        var dataType,
            i = 0,
            dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

        if (isFunction(func)) {
          // For each dataType in the dataTypeExpression
          while (dataType = dataTypes[i++]) {
            // Prepend if requested
            if (dataType[0] === "+") {
              dataType = dataType.slice(1) || "*";
              (structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
            } else {
              (structure[dataType] = structure[dataType] || []).push(func);
            }
          }
        }
      };
    } // Base inspection function for prefilters and transports


    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
      var inspected = {},
          seekingTransport = structure === transports;

      function inspect(dataType) {
        var selected;
        inspected[dataType] = true;
        jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
          var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);

          if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
            options.dataTypes.unshift(dataTypeOrTransport);
            inspect(dataTypeOrTransport);
            return false;
          } else if (seekingTransport) {
            return !(selected = dataTypeOrTransport);
          }
        });
        return selected;
      }

      return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    } // A special extend for ajax options
    // that takes "flat" options (not to be deep extended)
    // Fixes #9887


    function ajaxExtend(target, src) {
      var key,
          deep,
          flatOptions = jQuery.ajaxSettings.flatOptions || {};

      for (key in src) {
        if (src[key] !== undefined) {
          (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
        }
      }

      if (deep) {
        jQuery.extend(true, target, deep);
      }

      return target;
    }
    /* Handles responses to an ajax request:
     * - finds the right dataType (mediates between content-type and expected dataType)
     * - returns the corresponding response
     */


    function ajaxHandleResponses(s, jqXHR, responses) {
      var ct,
          type,
          finalDataType,
          firstDataType,
          contents = s.contents,
          dataTypes = s.dataTypes; // Remove auto dataType and get content-type in the process

      while (dataTypes[0] === "*") {
        dataTypes.shift();

        if (ct === undefined) {
          ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
        }
      } // Check if we're dealing with a known content-type


      if (ct) {
        for (type in contents) {
          if (contents[type] && contents[type].test(ct)) {
            dataTypes.unshift(type);
            break;
          }
        }
      } // Check to see if we have a response for the expected dataType


      if (dataTypes[0] in responses) {
        finalDataType = dataTypes[0];
      } else {
        // Try convertible dataTypes
        for (type in responses) {
          if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
            finalDataType = type;
            break;
          }

          if (!firstDataType) {
            firstDataType = type;
          }
        } // Or just use first one


        finalDataType = finalDataType || firstDataType;
      } // If we found a dataType
      // We add the dataType to the list if needed
      // and return the corresponding response


      if (finalDataType) {
        if (finalDataType !== dataTypes[0]) {
          dataTypes.unshift(finalDataType);
        }

        return responses[finalDataType];
      }
    }
    /* Chain conversions given the request and the original response
     * Also sets the responseXXX fields on the jqXHR instance
     */


    function ajaxConvert(s, response, jqXHR, isSuccess) {
      var conv2,
          current,
          conv,
          tmp,
          prev,
          converters = {},
          // Work with a copy of dataTypes in case we need to modify it for conversion
      dataTypes = s.dataTypes.slice(); // Create converters map with lowercased keys

      if (dataTypes[1]) {
        for (conv in s.converters) {
          converters[conv.toLowerCase()] = s.converters[conv];
        }
      }

      current = dataTypes.shift(); // Convert to each sequential dataType

      while (current) {
        if (s.responseFields[current]) {
          jqXHR[s.responseFields[current]] = response;
        } // Apply the dataFilter if provided


        if (!prev && isSuccess && s.dataFilter) {
          response = s.dataFilter(response, s.dataType);
        }

        prev = current;
        current = dataTypes.shift();

        if (current) {
          // There's only work to do if current dataType is non-auto
          if (current === "*") {
            current = prev; // Convert response if prev dataType is non-auto and differs from current
          } else if (prev !== "*" && prev !== current) {
            // Seek a direct converter
            conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair

            if (!conv) {
              for (conv2 in converters) {
                // If conv2 outputs current
                tmp = conv2.split(" ");

                if (tmp[1] === current) {
                  // If prev can be converted to accepted input
                  conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];

                  if (conv) {
                    // Condense equivalence converters
                    if (conv === true) {
                      conv = converters[conv2]; // Otherwise, insert the intermediate dataType
                    } else if (converters[conv2] !== true) {
                      current = tmp[0];
                      dataTypes.unshift(tmp[1]);
                    }

                    break;
                  }
                }
              }
            } // Apply converter (if not an equivalence)


            if (conv !== true) {
              // Unless errors are allowed to bubble, catch and return them
              if (conv && s["throws"]) {
                response = conv(response);
              } else {
                try {
                  response = conv(response);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: conv ? e : "No conversion from " + prev + " to " + current
                  };
                }
              }
            }
          }
        }
      }

      return {
        state: "success",
        data: response
      };
    }

    jQuery.extend({
      // Counter for holding the number of active queries
      active: 0,
      // Last-Modified header cache for next request
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: location.href,
        type: "GET",
        isLocal: rlocalProtocol.test(location.protocol),
        global: true,
        processData: true,
        async: true,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",

        /*
        timeout: 0,
        data: null,
        dataType: null,
        username: null,
        password: null,
        cache: null,
        throws: false,
        traditional: false,
        headers: {},
        */
        accepts: {
          "*": allTypes,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        // Data converters
        // Keys separate source (or catchall "*") and destination types with a single space
        converters: {
          // Convert anything to text
          "* text": String,
          // Text to html (true = no transformation)
          "text html": true,
          // Evaluate text as a json expression
          "text json": JSON.parse,
          // Parse text as xml
          "text xml": jQuery.parseXML
        },
        // For options that shouldn't be deep extended:
        // you can add your own custom options here if
        // and when you create one that shouldn't be
        // deep extended (see ajaxExtend)
        flatOptions: {
          url: true,
          context: true
        }
      },
      // Creates a full fledged settings object into target
      // with both ajaxSettings and settings fields.
      // If target is omitted, writes into ajaxSettings.
      ajaxSetup: function ajaxSetup(target, settings) {
        return settings ? // Building a settings object
        ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
        ajaxExtend(jQuery.ajaxSettings, target);
      },
      ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
      ajaxTransport: addToPrefiltersOrTransports(transports),
      // Main method
      ajax: function ajax(url, options) {
        // If url is an object, simulate pre-1.5 signature
        if (_typeof(url) === "object") {
          options = url;
          url = undefined;
        } // Force options to be an object


        options = options || {};

        var transport,
            // URL without anti-cache param
        cacheURL,
            // Response headers
        responseHeadersString,
            responseHeaders,
            // timeout handle
        timeoutTimer,
            // Url cleanup var
        urlAnchor,
            // Request state (becomes false upon send and true upon completion)
        completed,
            // To know if global events are to be dispatched
        fireGlobals,
            // Loop variable
        i,
            // uncached part of the url
        uncached,
            // Create the final options object
        s = jQuery.ajaxSetup({}, options),
            // Callbacks context
        callbackContext = s.context || s,
            // Context for global events is callbackContext if it is a DOM node or jQuery collection
        globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
            // Deferreds
        deferred = jQuery.Deferred(),
            completeDeferred = jQuery.Callbacks("once memory"),
            // Status-dependent callbacks
        _statusCode = s.statusCode || {},
            // Headers (they are sent all at once)
        requestHeaders = {},
            requestHeadersNames = {},
            // Default abort message
        strAbort = "canceled",
            // Fake xhr
        jqXHR = {
          readyState: 0,
          // Builds headers hashtable if needed
          getResponseHeader: function getResponseHeader(key) {
            var match;

            if (completed) {
              if (!responseHeaders) {
                responseHeaders = {};

                while (match = rheaders.exec(responseHeadersString)) {
                  responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                }
              }

              match = responseHeaders[key.toLowerCase() + " "];
            }

            return match == null ? null : match.join(", ");
          },
          // Raw string
          getAllResponseHeaders: function getAllResponseHeaders() {
            return completed ? responseHeadersString : null;
          },
          // Caches the header
          setRequestHeader: function setRequestHeader(name, value) {
            if (completed == null) {
              name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
              requestHeaders[name] = value;
            }

            return this;
          },
          // Overrides response content-type header
          overrideMimeType: function overrideMimeType(type) {
            if (completed == null) {
              s.mimeType = type;
            }

            return this;
          },
          // Status-dependent callbacks
          statusCode: function statusCode(map) {
            var code;

            if (map) {
              if (completed) {
                // Execute the appropriate callbacks
                jqXHR.always(map[jqXHR.status]);
              } else {
                // Lazy-add the new callbacks in a way that preserves old ones
                for (code in map) {
                  _statusCode[code] = [_statusCode[code], map[code]];
                }
              }
            }

            return this;
          },
          // Cancel the request
          abort: function abort(statusText) {
            var finalText = statusText || strAbort;

            if (transport) {
              transport.abort(finalText);
            }

            done(0, finalText);
            return this;
          }
        }; // Attach deferreds


        deferred.promise(jqXHR); // Add protocol if not provided (prefilters might expect it)
        // Handle falsy url in the settings object (#10093: consistency with old signature)
        // We also use the url parameter if available

        s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"); // Alias method option to type as per ticket #12004

        s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list

        s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""]; // A cross-domain request is in order when the origin doesn't match the current origin.

        if (s.crossDomain == null) {
          urlAnchor = document.createElement("a"); // Support: IE <=8 - 11, Edge 12 - 15
          // IE throws exception on accessing the href property if url is malformed,
          // e.g. http://example.com:80x/

          try {
            urlAnchor.href = s.url; // Support: IE <=8 - 11 only
            // Anchor's host property isn't correctly set when s.url is relative

            urlAnchor.href = urlAnchor.href;
            s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
          } catch (e) {
            // If there is an error parsing the URL, assume it is crossDomain,
            // it can be rejected by the transport if it is invalid
            s.crossDomain = true;
          }
        } // Convert data if not already a string


        if (s.data && s.processData && typeof s.data !== "string") {
          s.data = jQuery.param(s.data, s.traditional);
        } // Apply prefilters


        inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there

        if (completed) {
          return jqXHR;
        } // We can fire global events as of now if asked to
        // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)


        fireGlobals = jQuery.event && s.global; // Watch for a new set of requests

        if (fireGlobals && jQuery.active++ === 0) {
          jQuery.event.trigger("ajaxStart");
        } // Uppercase the type


        s.type = s.type.toUpperCase(); // Determine if request has content

        s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
        // and/or If-None-Match header later on
        // Remove hash to simplify url manipulation

        cacheURL = s.url.replace(rhash, ""); // More options handling for requests with no content

        if (!s.hasContent) {
          // Remember the hash so we can put it back
          uncached = s.url.slice(cacheURL.length); // If data is available and should be processed, append data to url

          if (s.data && (s.processData || typeof s.data === "string")) {
            cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data; // #9682: remove data so that it's not used in an eventual retry

            delete s.data;
          } // Add or update anti-cache param if needed


          if (s.cache === false) {
            cacheURL = cacheURL.replace(rantiCache, "$1");
            uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
          } // Put hash and anti-cache on the URL that will be requested (gh-1732)


          s.url = cacheURL + uncached; // Change '%20' to '+' if this is encoded form body content (gh-2658)
        } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
          s.data = s.data.replace(r20, "+");
        } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.


        if (s.ifModified) {
          if (jQuery.lastModified[cacheURL]) {
            jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
          }

          if (jQuery.etag[cacheURL]) {
            jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
          }
        } // Set the correct header, if data is being sent


        if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
          jqXHR.setRequestHeader("Content-Type", s.contentType);
        } // Set the Accepts header for the server, depending on the dataType


        jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option

        for (i in s.headers) {
          jqXHR.setRequestHeader(i, s.headers[i]);
        } // Allow custom headers/mimetypes and early abort


        if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
          // Abort if not done already and return
          return jqXHR.abort();
        } // Aborting is no longer a cancellation


        strAbort = "abort"; // Install callbacks on deferreds

        completeDeferred.add(s.complete);
        jqXHR.done(s.success);
        jqXHR.fail(s.error); // Get transport

        transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR); // If no transport, we auto-abort

        if (!transport) {
          done(-1, "No Transport");
        } else {
          jqXHR.readyState = 1; // Send global event

          if (fireGlobals) {
            globalEventContext.trigger("ajaxSend", [jqXHR, s]);
          } // If request was aborted inside ajaxSend, stop there


          if (completed) {
            return jqXHR;
          } // Timeout


          if (s.async && s.timeout > 0) {
            timeoutTimer = window.setTimeout(function () {
              jqXHR.abort("timeout");
            }, s.timeout);
          }

          try {
            completed = false;
            transport.send(requestHeaders, done);
          } catch (e) {
            // Rethrow post-completion exceptions
            if (completed) {
              throw e;
            } // Propagate others as results


            done(-1, e);
          }
        } // Callback for when everything is done


        function done(status, nativeStatusText, responses, headers) {
          var isSuccess,
              success,
              error,
              response,
              modified,
              statusText = nativeStatusText; // Ignore repeat invocations

          if (completed) {
            return;
          }

          completed = true; // Clear timeout if it exists

          if (timeoutTimer) {
            window.clearTimeout(timeoutTimer);
          } // Dereference transport for early garbage collection
          // (no matter how long the jqXHR object will be used)


          transport = undefined; // Cache response headers

          responseHeadersString = headers || ""; // Set readyState

          jqXHR.readyState = status > 0 ? 4 : 0; // Determine if successful

          isSuccess = status >= 200 && status < 300 || status === 304; // Get response data

          if (responses) {
            response = ajaxHandleResponses(s, jqXHR, responses);
          } // Convert no matter what (that way responseXXX fields are always set)


          response = ajaxConvert(s, response, jqXHR, isSuccess); // If successful, handle type chaining

          if (isSuccess) {
            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if (s.ifModified) {
              modified = jqXHR.getResponseHeader("Last-Modified");

              if (modified) {
                jQuery.lastModified[cacheURL] = modified;
              }

              modified = jqXHR.getResponseHeader("etag");

              if (modified) {
                jQuery.etag[cacheURL] = modified;
              }
            } // if no content


            if (status === 204 || s.type === "HEAD") {
              statusText = "nocontent"; // if not modified
            } else if (status === 304) {
              statusText = "notmodified"; // If we have data, let's convert it
            } else {
              statusText = response.state;
              success = response.data;
              error = response.error;
              isSuccess = !error;
            }
          } else {
            // Extract error from statusText and normalize for non-aborts
            error = statusText;

            if (status || !statusText) {
              statusText = "error";

              if (status < 0) {
                status = 0;
              }
            }
          } // Set data for the fake xhr object


          jqXHR.status = status;
          jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error

          if (isSuccess) {
            deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
          } else {
            deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
          } // Status-dependent callbacks


          jqXHR.statusCode(_statusCode);
          _statusCode = undefined;

          if (fireGlobals) {
            globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
          } // Complete


          completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

          if (fireGlobals) {
            globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter

            if (! --jQuery.active) {
              jQuery.event.trigger("ajaxStop");
            }
          }
        }

        return jqXHR;
      },
      getJSON: function getJSON(url, data, callback) {
        return jQuery.get(url, data, callback, "json");
      },
      getScript: function getScript(url, callback) {
        return jQuery.get(url, undefined, callback, "script");
      }
    });
    jQuery.each(["get", "post"], function (i, method) {
      jQuery[method] = function (url, data, callback, type) {
        // Shift arguments if data argument was omitted
        if (isFunction(data)) {
          type = type || callback;
          callback = data;
          data = undefined;
        } // The url can be an options object (which then must have .url)


        return jQuery.ajax(jQuery.extend({
          url: url,
          type: method,
          dataType: type,
          data: data,
          success: callback
        }, jQuery.isPlainObject(url) && url));
      };
    });

    jQuery._evalUrl = function (url, options) {
      return jQuery.ajax({
        url: url,
        // Make this explicit, since user can override this through ajaxSetup (#11264)
        type: "GET",
        dataType: "script",
        cache: true,
        async: false,
        global: false,
        // Only evaluate the response if it is successful (gh-4126)
        // dataFilter is not invoked for failure responses, so using it instead
        // of the default converter is kludgy but it works.
        converters: {
          "text script": function textScript() {}
        },
        dataFilter: function dataFilter(response) {
          jQuery.globalEval(response, options);
        }
      });
    };

    jQuery.fn.extend({
      wrapAll: function wrapAll(html) {
        var wrap;

        if (this[0]) {
          if (isFunction(html)) {
            html = html.call(this[0]);
          } // The elements to wrap the target around


          wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

          if (this[0].parentNode) {
            wrap.insertBefore(this[0]);
          }

          wrap.map(function () {
            var elem = this;

            while (elem.firstElementChild) {
              elem = elem.firstElementChild;
            }

            return elem;
          }).append(this);
        }

        return this;
      },
      wrapInner: function wrapInner(html) {
        if (isFunction(html)) {
          return this.each(function (i) {
            jQuery(this).wrapInner(html.call(this, i));
          });
        }

        return this.each(function () {
          var self = jQuery(this),
              contents = self.contents();

          if (contents.length) {
            contents.wrapAll(html);
          } else {
            self.append(html);
          }
        });
      },
      wrap: function wrap(html) {
        var htmlIsFunction = isFunction(html);
        return this.each(function (i) {
          jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
        });
      },
      unwrap: function unwrap(selector) {
        this.parent(selector).not("body").each(function () {
          jQuery(this).replaceWith(this.childNodes);
        });
        return this;
      }
    });

    jQuery.expr.pseudos.hidden = function (elem) {
      return !jQuery.expr.pseudos.visible(elem);
    };

    jQuery.expr.pseudos.visible = function (elem) {
      return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    };

    jQuery.ajaxSettings.xhr = function () {
      try {
        return new window.XMLHttpRequest();
      } catch (e) {}
    };

    var xhrSuccessStatus = {
      // File protocol always yields status code 0, assume 200
      0: 200,
      // Support: IE <=9 only
      // #1450: sometimes IE returns 1223 when it should be 204
      1223: 204
    },
        xhrSupported = jQuery.ajaxSettings.xhr();
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function (options) {
      var _callback, errorCallback; // Cross domain only allowed if supported through XMLHttpRequest


      if (support.cors || xhrSupported && !options.crossDomain) {
        return {
          send: function send(headers, complete) {
            var i,
                xhr = options.xhr();
            xhr.open(options.type, options.url, options.async, options.username, options.password); // Apply custom fields if provided

            if (options.xhrFields) {
              for (i in options.xhrFields) {
                xhr[i] = options.xhrFields[i];
              }
            } // Override mime type if needed


            if (options.mimeType && xhr.overrideMimeType) {
              xhr.overrideMimeType(options.mimeType);
            } // X-Requested-With header
            // For cross-domain requests, seeing as conditions for a preflight are
            // akin to a jigsaw puzzle, we simply never set it to be sure.
            // (it can always be set on a per-request basis or even using ajaxSetup)
            // For same-domain requests, won't change header if already provided.


            if (!options.crossDomain && !headers["X-Requested-With"]) {
              headers["X-Requested-With"] = "XMLHttpRequest";
            } // Set headers


            for (i in headers) {
              xhr.setRequestHeader(i, headers[i]);
            } // Callback


            _callback = function callback(type) {
              return function () {
                if (_callback) {
                  _callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

                  if (type === "abort") {
                    xhr.abort();
                  } else if (type === "error") {
                    // Support: IE <=9 only
                    // On a manual native abort, IE9 throws
                    // errors on any property access that is not readyState
                    if (typeof xhr.status !== "number") {
                      complete(0, "error");
                    } else {
                      complete( // File: protocol always yields status 0; see #8605, #14207
                      xhr.status, xhr.statusText);
                    }
                  } else {
                    complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                    // IE9 has no XHR2 but throws on binary (trac-11426)
                    // For XHR2 non-text, let the caller handle it (gh-2498)
                    (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                      binary: xhr.response
                    } : {
                      text: xhr.responseText
                    }, xhr.getAllResponseHeaders());
                  }
                }
              };
            }; // Listen to events


            xhr.onload = _callback();
            errorCallback = xhr.onerror = xhr.ontimeout = _callback("error"); // Support: IE 9 only
            // Use onreadystatechange to replace onabort
            // to handle uncaught aborts

            if (xhr.onabort !== undefined) {
              xhr.onabort = errorCallback;
            } else {
              xhr.onreadystatechange = function () {
                // Check readyState before timeout as it changes
                if (xhr.readyState === 4) {
                  // Allow onerror to be called first,
                  // but that will not handle a native abort
                  // Also, save errorCallback to a variable
                  // as xhr.onerror cannot be accessed
                  window.setTimeout(function () {
                    if (_callback) {
                      errorCallback();
                    }
                  });
                }
              };
            } // Create the abort callback


            _callback = _callback("abort");

            try {
              // Do send the request (this may raise an exception)
              xhr.send(options.hasContent && options.data || null);
            } catch (e) {
              // #14683: Only rethrow if this hasn't been notified as an error yet
              if (_callback) {
                throw e;
              }
            }
          },
          abort: function abort() {
            if (_callback) {
              _callback();
            }
          }
        };
      }
    }); // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)

    jQuery.ajaxPrefilter(function (s) {
      if (s.crossDomain) {
        s.contents.script = false;
      }
    }); // Install script dataType

    jQuery.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function textScript(text) {
          jQuery.globalEval(text);
          return text;
        }
      }
    }); // Handle cache's special case and crossDomain

    jQuery.ajaxPrefilter("script", function (s) {
      if (s.cache === undefined) {
        s.cache = false;
      }

      if (s.crossDomain) {
        s.type = "GET";
      }
    }); // Bind script tag hack transport

    jQuery.ajaxTransport("script", function (s) {
      // This transport only deals with cross domain or forced-by-attrs requests
      if (s.crossDomain || s.scriptAttrs) {
        var script, _callback2;

        return {
          send: function send(_, complete) {
            script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
              charset: s.scriptCharset,
              src: s.url
            }).on("load error", _callback2 = function callback(evt) {
              script.remove();
              _callback2 = null;

              if (evt) {
                complete(evt.type === "error" ? 404 : 200, evt.type);
              }
            }); // Use native DOM manipulation to avoid our domManip AJAX trickery

            document.head.appendChild(script[0]);
          },
          abort: function abort() {
            if (_callback2) {
              _callback2();
            }
          }
        };
      }
    });
    var oldCallbacks = [],
        rjsonp = /(=)\?(?=&|$)|\?\?/; // Default jsonp settings

    jQuery.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function jsonpCallback() {
        var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
        this[callback] = true;
        return callback;
      }
    }); // Detect, normalize options and install callbacks for jsonp requests

    jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
      var callbackName,
          overwritten,
          responseContainer,
          jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set

      if (jsonProp || s.dataTypes[0] === "jsonp") {
        // Get callback name, remembering preexisting value associated with it
        callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; // Insert callback into url or form data

        if (jsonProp) {
          s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
        } else if (s.jsonp !== false) {
          s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
        } // Use data converter to retrieve json after script execution


        s.converters["script json"] = function () {
          if (!responseContainer) {
            jQuery.error(callbackName + " was not called");
          }

          return responseContainer[0];
        }; // Force json dataType


        s.dataTypes[0] = "json"; // Install callback

        overwritten = window[callbackName];

        window[callbackName] = function () {
          responseContainer = arguments;
        }; // Clean-up function (fires after converters)


        jqXHR.always(function () {
          // If previous value didn't exist - remove it
          if (overwritten === undefined) {
            jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
          } else {
            window[callbackName] = overwritten;
          } // Save back as free


          if (s[callbackName]) {
            // Make sure that re-using the options doesn't screw things around
            s.jsonpCallback = originalSettings.jsonpCallback; // Save the callback name for future use

            oldCallbacks.push(callbackName);
          } // Call if it was a function and we have a response


          if (responseContainer && isFunction(overwritten)) {
            overwritten(responseContainer[0]);
          }

          responseContainer = overwritten = undefined;
        }); // Delegate to script

        return "script";
      }
    }); // Support: Safari 8 only
    // In Safari 8 documents created via document.implementation.createHTMLDocument
    // collapse sibling forms: the second one becomes a child of the first one.
    // Because of that, this security measure has to be disabled in Safari 8.
    // https://bugs.webkit.org/show_bug.cgi?id=137337

    support.createHTMLDocument = function () {
      var body = document.implementation.createHTMLDocument("").body;
      body.innerHTML = "<form></form><form></form>";
      return body.childNodes.length === 2;
    }(); // Argument "data" should be string of html
    // context (optional): If specified, the fragment will be created in this context,
    // defaults to document
    // keepScripts (optional): If true, will include scripts passed in the html string


    jQuery.parseHTML = function (data, context, keepScripts) {
      if (typeof data !== "string") {
        return [];
      }

      if (typeof context === "boolean") {
        keepScripts = context;
        context = false;
      }

      var base, parsed, scripts;

      if (!context) {
        // Stop scripts or inline event handlers from being executed immediately
        // by using document.implementation
        if (support.createHTMLDocument) {
          context = document.implementation.createHTMLDocument(""); // Set the base href for the created document
          // so any parsed elements with URLs
          // are based on the document's URL (gh-2965)

          base = context.createElement("base");
          base.href = document.location.href;
          context.head.appendChild(base);
        } else {
          context = document;
        }
      }

      parsed = rsingleTag.exec(data);
      scripts = !keepScripts && []; // Single tag

      if (parsed) {
        return [context.createElement(parsed[1])];
      }

      parsed = buildFragment([data], context, scripts);

      if (scripts && scripts.length) {
        jQuery(scripts).remove();
      }

      return jQuery.merge([], parsed.childNodes);
    };
    /**
     * Load a url into a page
     */


    jQuery.fn.load = function (url, params, callback) {
      var selector,
          type,
          response,
          self = this,
          off = url.indexOf(" ");

      if (off > -1) {
        selector = stripAndCollapse(url.slice(off));
        url = url.slice(0, off);
      } // If it's a function


      if (isFunction(params)) {
        // We assume that it's the callback
        callback = params;
        params = undefined; // Otherwise, build a param string
      } else if (params && _typeof(params) === "object") {
        type = "POST";
      } // If we have elements to modify, make the request


      if (self.length > 0) {
        jQuery.ajax({
          url: url,
          // If "type" variable is undefined, then "GET" method will be used.
          // Make value of this field explicit since
          // user can override it through ajaxSetup method
          type: type || "GET",
          dataType: "html",
          data: params
        }).done(function (responseText) {
          // Save response for use in complete callback
          response = arguments;
          self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
          // Exclude scripts to avoid IE 'Permission Denied' errors
          jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
          responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
          // but they are ignored because response was set above.
          // If it fails, this function gets "jqXHR", "status", "error"
        }).always(callback && function (jqXHR, status) {
          self.each(function () {
            callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
          });
        });
      }

      return this;
    }; // Attach a bunch of functions for handling common AJAX events


    jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
      jQuery.fn[type] = function (fn) {
        return this.on(type, fn);
      };
    });

    jQuery.expr.pseudos.animated = function (elem) {
      return jQuery.grep(jQuery.timers, function (fn) {
        return elem === fn.elem;
      }).length;
    };

    jQuery.offset = {
      setOffset: function setOffset(elem, options, i) {
        var curPosition,
            curLeft,
            curCSSTop,
            curTop,
            curOffset,
            curCSSLeft,
            calculatePosition,
            position = jQuery.css(elem, "position"),
            curElem = jQuery(elem),
            props = {}; // Set position first, in-case top/left are set even on static elem

        if (position === "static") {
          elem.style.position = "relative";
        }

        curOffset = curElem.offset();
        curCSSTop = jQuery.css(elem, "top");
        curCSSLeft = jQuery.css(elem, "left");
        calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
        // top or left is auto and position is either absolute or fixed

        if (calculatePosition) {
          curPosition = curElem.position();
          curTop = curPosition.top;
          curLeft = curPosition.left;
        } else {
          curTop = parseFloat(curCSSTop) || 0;
          curLeft = parseFloat(curCSSLeft) || 0;
        }

        if (isFunction(options)) {
          // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
          options = options.call(elem, i, jQuery.extend({}, curOffset));
        }

        if (options.top != null) {
          props.top = options.top - curOffset.top + curTop;
        }

        if (options.left != null) {
          props.left = options.left - curOffset.left + curLeft;
        }

        if ("using" in options) {
          options.using.call(elem, props);
        } else {
          curElem.css(props);
        }
      }
    };
    jQuery.fn.extend({
      // offset() relates an element's border box to the document origin
      offset: function offset(options) {
        // Preserve chaining for setter
        if (arguments.length) {
          return options === undefined ? this : this.each(function (i) {
            jQuery.offset.setOffset(this, options, i);
          });
        }

        var rect,
            win,
            elem = this[0];

        if (!elem) {
          return;
        } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
        // Support: IE <=11 only
        // Running getBoundingClientRect on a
        // disconnected node in IE throws an error


        if (!elem.getClientRects().length) {
          return {
            top: 0,
            left: 0
          };
        } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


        rect = elem.getBoundingClientRect();
        win = elem.ownerDocument.defaultView;
        return {
          top: rect.top + win.pageYOffset,
          left: rect.left + win.pageXOffset
        };
      },
      // position() relates an element's margin box to its offset parent's padding box
      // This corresponds to the behavior of CSS absolute positioning
      position: function position() {
        if (!this[0]) {
          return;
        }

        var offsetParent,
            offset,
            doc,
            elem = this[0],
            parentOffset = {
          top: 0,
          left: 0
        }; // position:fixed elements are offset from the viewport, which itself always has zero offset

        if (jQuery.css(elem, "position") === "fixed") {
          // Assume position:fixed implies availability of getBoundingClientRect
          offset = elem.getBoundingClientRect();
        } else {
          offset = this.offset(); // Account for the *real* offset parent, which can be the document or its root element
          // when a statically positioned element is identified

          doc = elem.ownerDocument;
          offsetParent = elem.offsetParent || doc.documentElement;

          while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
            offsetParent = offsetParent.parentNode;
          }

          if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
            // Incorporate borders into its offset, since they are outside its content origin
            parentOffset = jQuery(offsetParent).offset();
            parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
            parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
          }
        } // Subtract parent offsets and element margins


        return {
          top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
          left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
        };
      },
      // This method will return documentElement in the following cases:
      // 1) For the element inside the iframe without offsetParent, this method will return
      //    documentElement of the parent window
      // 2) For the hidden or detached element
      // 3) For body or html element, i.e. in case of the html node - it will return itself
      //
      // but those exceptions were never presented as a real life use-cases
      // and might be considered as more preferable results.
      //
      // This logic, however, is not guaranteed and can change at any point in the future
      offsetParent: function offsetParent() {
        return this.map(function () {
          var offsetParent = this.offsetParent;

          while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
            offsetParent = offsetParent.offsetParent;
          }

          return offsetParent || documentElement;
        });
      }
    }); // Create scrollLeft and scrollTop methods

    jQuery.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (method, prop) {
      var top = "pageYOffset" === prop;

      jQuery.fn[method] = function (val) {
        return access(this, function (elem, method, val) {
          // Coalesce documents and windows
          var win;

          if (isWindow(elem)) {
            win = elem;
          } else if (elem.nodeType === 9) {
            win = elem.defaultView;
          }

          if (val === undefined) {
            return win ? win[prop] : elem[method];
          }

          if (win) {
            win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
          } else {
            elem[method] = val;
          }
        }, method, val, arguments.length);
      };
    }); // Support: Safari <=7 - 9.1, Chrome <=37 - 49
    // Add the top/left cssHooks using jQuery.fn.position
    // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
    // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
    // getComputedStyle returns percent when specified for top/left/bottom/right;
    // rather than make the css module depend on the offset module, just check for it here

    jQuery.each(["top", "left"], function (i, prop) {
      jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
        if (computed) {
          computed = curCSS(elem, prop); // If curCSS returns percentage, fallback to offset

          return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
        }
      });
    }); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods

    jQuery.each({
      Height: "height",
      Width: "width"
    }, function (name, type) {
      jQuery.each({
        padding: "inner" + name,
        content: type,
        "": "outer" + name
      }, function (defaultExtra, funcName) {
        // Margin is only for outerHeight, outerWidth
        jQuery.fn[funcName] = function (margin, value) {
          var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
              extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
          return access(this, function (elem, type, value) {
            var doc;

            if (isWindow(elem)) {
              // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
              return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
            } // Get document width or height


            if (elem.nodeType === 9) {
              doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
              // whichever is greatest

              return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
            }

            return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
            jQuery.css(elem, type, extra) : // Set width or height on the element
            jQuery.style(elem, type, value, extra);
          }, type, chainable ? margin : undefined, chainable);
        };
      });
    });
    jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {
      // Handle event binding
      jQuery.fn[name] = function (data, fn) {
        return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
      };
    });
    jQuery.fn.extend({
      hover: function hover(fnOver, fnOut) {
        return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
      }
    });
    jQuery.fn.extend({
      bind: function bind(types, data, fn) {
        return this.on(types, null, data, fn);
      },
      unbind: function unbind(types, fn) {
        return this.off(types, null, fn);
      },
      delegate: function delegate(selector, types, data, fn) {
        return this.on(types, selector, data, fn);
      },
      undelegate: function undelegate(selector, types, fn) {
        // ( namespace ) or ( selector, types [, fn] )
        return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
      }
    }); // Bind a function to a context, optionally partially applying any
    // arguments.
    // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
    // However, it is not slated for removal any time soon

    jQuery.proxy = function (fn, context) {
      var tmp, args, proxy;

      if (typeof context === "string") {
        tmp = fn[context];
        context = fn;
        fn = tmp;
      } // Quick check to determine if target is callable, in the spec
      // this throws a TypeError, but we will just return undefined.


      if (!isFunction(fn)) {
        return undefined;
      } // Simulated bind


      args = _slice.call(arguments, 2);

      proxy = function proxy() {
        return fn.apply(context || this, args.concat(_slice.call(arguments)));
      }; // Set the guid of unique handler to the same of original handler, so it can be removed


      proxy.guid = fn.guid = fn.guid || jQuery.guid++;
      return proxy;
    };

    jQuery.holdReady = function (hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    };

    jQuery.isArray = Array.isArray;
    jQuery.parseJSON = JSON.parse;
    jQuery.nodeName = nodeName;
    jQuery.isFunction = isFunction;
    jQuery.isWindow = isWindow;
    jQuery.camelCase = camelCase;
    jQuery.type = toType;
    jQuery.now = Date.now;

    jQuery.isNumeric = function (obj) {
      // As of jQuery 3.0, isNumeric is limited to
      // strings and numbers (primitives or objects)
      // that can be coerced to finite numbers (gh-2662)
      var type = jQuery.type(obj);
      return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
      // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
      // subtraction forces infinities to NaN
      !isNaN(obj - parseFloat(obj));
    };

    var // Map over jQuery in case of overwrite
    _jQuery = window.jQuery,
        // Map over the $ in case of overwrite
    _$ = window.$;

    jQuery.noConflict = function (deep) {
      if (window.$ === jQuery) {
        window.$ = _$;
      }

      if (deep && window.jQuery === jQuery) {
        window.jQuery = _jQuery;
      }

      return jQuery;
    }; // Expose jQuery and $ identifiers, even in AMD
    // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
    // and CommonJS for browser emulators (#13566)


    if (!noGlobal) {
      window.jQuery = window.$ = jQuery;
    }

    return jQuery;
  });
});
var ion_rangeSlider = createCommonjsModule(function (module, exports) {
  (function (factory) {
    if (!jQuery && typeof undefined === "function" && undefined.amd) {
      undefined(["jquery"], function (jQuery) {
        return factory(jQuery, document, window, navigator);
      });
    } else if (!jQuery && 'object' === "object") {
      factory(jquery, document, window, navigator);
    } else {
      factory(jQuery, document, window, navigator);
    }
  })(function ($, document, window, navigator, undefined) {
    // =================================================================================================================
    // Service
    var plugin_count = 0; // IE8 fix

    var is_old_ie = function () {
      var n = navigator.userAgent,
          r = /msie\s\d+/i,
          v;

      if (n.search(r) > 0) {
        v = r.exec(n).toString();
        v = v.split(" ")[1];

        if (v < 9) {
          $("html").addClass("lt-ie9");
          return true;
        }
      }

      return false;
    }();

    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {
        var target = this;
        var slice = [].slice;

        if (typeof target != "function") {
          throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function bound() {
          if (this instanceof bound) {
            var F = function F() {};

            F.prototype = target.prototype;
            var self = new F();
            var result = target.apply(self, args.concat(slice.call(arguments)));

            if (Object(result) === result) {
              return result;
            }

            return self;
          } else {
            return target.apply(that, args.concat(slice.call(arguments)));
          }
        };

        return bound;
      };
    }

    if (!Array.prototype.indexOf) {
      Array.prototype.indexOf = function (searchElement, fromIndex) {
        var k;

        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var O = Object(this);
        var len = O.length >>> 0;

        if (len === 0) {
          return -1;
        }

        var n = +fromIndex || 0;

        if (Math.abs(n) === Infinity) {
          n = 0;
        }

        if (n >= len) {
          return -1;
        }

        k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        while (k < len) {
          if (k in O && O[k] === searchElement) {
            return k;
          }

          k++;
        }

        return -1;
      };
    } // =================================================================================================================
    // Template


    var base_html = '<span class="irs">' + '<span class="irs-line" tabindex="0"></span>' + '<span class="irs-min">0</span><span class="irs-max">1</span>' + '<span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span>' + '</span>' + '<span class="irs-grid"></span>';
    var single_html = '<span class="irs-bar irs-bar--single"></span>' + '<span class="irs-shadow shadow-single"></span>' + '<span class="irs-handle single"><i></i><i></i><i></i></span>';
    var double_html = '<span class="irs-bar"></span>' + '<span class="irs-shadow shadow-from"></span>' + '<span class="irs-shadow shadow-to"></span>' + '<span class="irs-handle from"><i></i><i></i><i></i></span>' + '<span class="irs-handle to"><i></i><i></i><i></i></span>';
    var disable_html = '<span class="irs-disable-mask"></span>'; // =================================================================================================================
    // Core

    /**
     * Main plugin constructor
     *
     * @param input {Object} link to base input element
     * @param options {Object} slider config
     * @param plugin_count {Number}
     * @constructor
     */

    var IonRangeSlider = function IonRangeSlider(input, options, plugin_count) {
      this.VERSION = "2.3.0";
      this.input = input;
      this.plugin_count = plugin_count;
      this.current_plugin = 0;
      this.calc_count = 0;
      this.update_tm = 0;
      this.old_from = 0;
      this.old_to = 0;
      this.old_min_interval = null;
      this.raf_id = null;
      this.dragging = false;
      this.force_redraw = false;
      this.no_diapason = false;
      this.has_tab_index = true;
      this.is_key = false;
      this.is_update = false;
      this.is_start = true;
      this.is_finish = false;
      this.is_active = false;
      this.is_resize = false;
      this.is_click = false;
      options = options || {}; // cache for links to all DOM elements

      this.$cache = {
        win: $(window),
        body: $(document.body),
        input: $(input),
        cont: null,
        rs: null,
        min: null,
        max: null,
        from: null,
        to: null,
        single: null,
        bar: null,
        line: null,
        s_single: null,
        s_from: null,
        s_to: null,
        shad_single: null,
        shad_from: null,
        shad_to: null,
        edge: null,
        grid: null,
        grid_labels: []
      }; // storage for measure variables

      this.coords = {
        // left
        x_gap: 0,
        x_pointer: 0,
        // width
        w_rs: 0,
        w_rs_old: 0,
        w_handle: 0,
        // percents
        p_gap: 0,
        p_gap_left: 0,
        p_gap_right: 0,
        p_step: 0,
        p_pointer: 0,
        p_handle: 0,
        p_single_fake: 0,
        p_single_real: 0,
        p_from_fake: 0,
        p_from_real: 0,
        p_to_fake: 0,
        p_to_real: 0,
        p_bar_x: 0,
        p_bar_w: 0,
        // grid
        grid_gap: 0,
        big_num: 0,
        big: [],
        big_w: [],
        big_p: [],
        big_x: []
      }; // storage for labels measure variables

      this.labels = {
        // width
        w_min: 0,
        w_max: 0,
        w_from: 0,
        w_to: 0,
        w_single: 0,
        // percents
        p_min: 0,
        p_max: 0,
        p_from_fake: 0,
        p_from_left: 0,
        p_to_fake: 0,
        p_to_left: 0,
        p_single_fake: 0,
        p_single_left: 0
      };
      /**
       * get and validate config
       */

      var $inp = this.$cache.input,
          val = $inp.prop("value"),
          config,
          config_from_data,
          prop; // default config

      config = {
        skin: "flat",
        type: "single",
        min: 10,
        max: 100,
        from: null,
        to: null,
        step: 1,
        min_interval: 0,
        max_interval: 0,
        drag_interval: false,
        values: [],
        p_values: [],
        from_fixed: false,
        from_min: null,
        from_max: null,
        from_shadow: false,
        to_fixed: false,
        to_min: null,
        to_max: null,
        to_shadow: false,
        prettify_enabled: true,
        prettify_separator: " ",
        prettify: null,
        force_edges: false,
        keyboard: true,
        grid: false,
        grid_margin: true,
        grid_num: 4,
        grid_snap: false,
        hide_min_max: false,
        hide_from_to: false,
        prefix: "",
        postfix: "",
        max_postfix: "",
        decorate_both: true,
        values_separator: " — ",
        input_values_separator: ";",
        disable: false,
        block: false,
        extra_classes: "",
        scope: null,
        onStart: null,
        onChange: null,
        onFinish: null,
        onUpdate: null
      }; // check if base element is input

      if ($inp[0].nodeName !== "INPUT") {
        console && console.warn && console.warn("Base element should be <input>!", $inp[0]);
      } // config from data-attributes extends js config


      config_from_data = {
        skin: $inp.data("skin"),
        type: $inp.data("type"),
        min: $inp.data("min"),
        max: $inp.data("max"),
        from: $inp.data("from"),
        to: $inp.data("to"),
        step: $inp.data("step"),
        min_interval: $inp.data("minInterval"),
        max_interval: $inp.data("maxInterval"),
        drag_interval: $inp.data("dragInterval"),
        values: $inp.data("values"),
        from_fixed: $inp.data("fromFixed"),
        from_min: $inp.data("fromMin"),
        from_max: $inp.data("fromMax"),
        from_shadow: $inp.data("fromShadow"),
        to_fixed: $inp.data("toFixed"),
        to_min: $inp.data("toMin"),
        to_max: $inp.data("toMax"),
        to_shadow: $inp.data("toShadow"),
        prettify_enabled: $inp.data("prettifyEnabled"),
        prettify_separator: $inp.data("prettifySeparator"),
        force_edges: $inp.data("forceEdges"),
        keyboard: $inp.data("keyboard"),
        grid: $inp.data("grid"),
        grid_margin: $inp.data("gridMargin"),
        grid_num: $inp.data("gridNum"),
        grid_snap: $inp.data("gridSnap"),
        hide_min_max: $inp.data("hideMinMax"),
        hide_from_to: $inp.data("hideFromTo"),
        prefix: $inp.data("prefix"),
        postfix: $inp.data("postfix"),
        max_postfix: $inp.data("maxPostfix"),
        decorate_both: $inp.data("decorateBoth"),
        values_separator: $inp.data("valuesSeparator"),
        input_values_separator: $inp.data("inputValuesSeparator"),
        disable: $inp.data("disable"),
        block: $inp.data("block"),
        extra_classes: $inp.data("extraClasses")
      };
      config_from_data.values = config_from_data.values && config_from_data.values.split(",");

      for (prop in config_from_data) {
        if (config_from_data.hasOwnProperty(prop)) {
          if (config_from_data[prop] === undefined || config_from_data[prop] === "") {
            delete config_from_data[prop];
          }
        }
      } // input value extends default config


      if (val !== undefined && val !== "") {
        val = val.split(config_from_data.input_values_separator || options.input_values_separator || ";");

        if (val[0] && val[0] == +val[0]) {
          val[0] = +val[0];
        }

        if (val[1] && val[1] == +val[1]) {
          val[1] = +val[1];
        }

        if (options && options.values && options.values.length) {
          config.from = val[0] && options.values.indexOf(val[0]);
          config.to = val[1] && options.values.indexOf(val[1]);
        } else {
          config.from = val[0] && +val[0];
          config.to = val[1] && +val[1];
        }
      } // js config extends default config


      $.extend(config, options); // data config extends config

      $.extend(config, config_from_data);
      this.options = config; // validate config, to be sure that all data types are correct

      this.update_check = {};
      this.validate(); // default result object, returned to callbacks

      this.result = {
        input: this.$cache.input,
        slider: null,
        min: this.options.min,
        max: this.options.max,
        from: this.options.from,
        from_percent: 0,
        from_value: null,
        to: this.options.to,
        to_percent: 0,
        to_value: null
      };
      this.init();
    };

    IonRangeSlider.prototype = {
      /**
       * Starts or updates the plugin instance
       *
       * @param [is_update] {boolean}
       */
      init: function init(is_update) {
        this.no_diapason = false;
        this.coords.p_step = this.convertToPercent(this.options.step, true);
        this.target = "base";
        this.toggleInput();
        this.append();
        this.setMinMax();

        if (is_update) {
          this.force_redraw = true;
          this.calc(true); // callbacks called

          this.callOnUpdate();
        } else {
          this.force_redraw = true;
          this.calc(true); // callbacks called

          this.callOnStart();
        }

        this.updateScene();
      },

      /**
       * Appends slider template to a DOM
       */
      append: function append() {
        var container_html = '<span class="irs irs--' + this.options.skin + ' js-irs-' + this.plugin_count + ' ' + this.options.extra_classes + '"></span>';
        this.$cache.input.before(container_html);
        this.$cache.input.prop("readonly", true);
        this.$cache.cont = this.$cache.input.prev();
        this.result.slider = this.$cache.cont;
        this.$cache.cont.html(base_html);
        this.$cache.rs = this.$cache.cont.find(".irs");
        this.$cache.min = this.$cache.cont.find(".irs-min");
        this.$cache.max = this.$cache.cont.find(".irs-max");
        this.$cache.from = this.$cache.cont.find(".irs-from");
        this.$cache.to = this.$cache.cont.find(".irs-to");
        this.$cache.single = this.$cache.cont.find(".irs-single");
        this.$cache.line = this.$cache.cont.find(".irs-line");
        this.$cache.grid = this.$cache.cont.find(".irs-grid");

        if (this.options.type === "single") {
          this.$cache.cont.append(single_html);
          this.$cache.bar = this.$cache.cont.find(".irs-bar");
          this.$cache.edge = this.$cache.cont.find(".irs-bar-edge");
          this.$cache.s_single = this.$cache.cont.find(".single");
          this.$cache.from[0].style.visibility = "hidden";
          this.$cache.to[0].style.visibility = "hidden";
          this.$cache.shad_single = this.$cache.cont.find(".shadow-single");
        } else {
          this.$cache.cont.append(double_html);
          this.$cache.bar = this.$cache.cont.find(".irs-bar");
          this.$cache.s_from = this.$cache.cont.find(".from");
          this.$cache.s_to = this.$cache.cont.find(".to");
          this.$cache.shad_from = this.$cache.cont.find(".shadow-from");
          this.$cache.shad_to = this.$cache.cont.find(".shadow-to");
          this.setTopHandler();
        }

        if (this.options.hide_from_to) {
          this.$cache.from[0].style.display = "none";
          this.$cache.to[0].style.display = "none";
          this.$cache.single[0].style.display = "none";
        }

        this.appendGrid();

        if (this.options.disable) {
          this.appendDisableMask();
          this.$cache.input[0].disabled = true;
        } else {
          this.$cache.input[0].disabled = false;
          this.removeDisableMask();
          this.bindEvents();
        } // block only if not disabled


        if (!this.options.disable) {
          if (this.options.block) {
            this.appendDisableMask();
          } else {
            this.removeDisableMask();
          }
        }

        if (this.options.drag_interval) {
          this.$cache.bar[0].style.cursor = "ew-resize";
        }
      },

      /**
       * Determine which handler has a priority
       * works only for double slider type
       */
      setTopHandler: function setTopHandler() {
        var min = this.options.min,
            max = this.options.max,
            from = this.options.from,
            to = this.options.to;

        if (from > min && to === max) {
          this.$cache.s_from.addClass("type_last");
        } else if (to < max) {
          this.$cache.s_to.addClass("type_last");
        }
      },

      /**
       * Determine which handles was clicked last
       * and which handler should have hover effect
       *
       * @param target {String}
       */
      changeLevel: function changeLevel(target) {
        switch (target) {
          case "single":
            this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake);
            this.$cache.s_single.addClass("state_hover");
            break;

          case "from":
            this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake);
            this.$cache.s_from.addClass("state_hover");
            this.$cache.s_from.addClass("type_last");
            this.$cache.s_to.removeClass("type_last");
            break;

          case "to":
            this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake);
            this.$cache.s_to.addClass("state_hover");
            this.$cache.s_to.addClass("type_last");
            this.$cache.s_from.removeClass("type_last");
            break;

          case "both":
            this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake);
            this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer);
            this.$cache.s_to.removeClass("type_last");
            this.$cache.s_from.removeClass("type_last");
            break;
        }
      },

      /**
       * Then slider is disabled
       * appends extra layer with opacity
       */
      appendDisableMask: function appendDisableMask() {
        this.$cache.cont.append(disable_html);
        this.$cache.cont.addClass("irs-disabled");
      },

      /**
       * Then slider is not disabled
       * remove disable mask
       */
      removeDisableMask: function removeDisableMask() {
        this.$cache.cont.remove(".irs-disable-mask");
        this.$cache.cont.removeClass("irs-disabled");
      },

      /**
       * Remove slider instance
       * and unbind all events
       */
      remove: function remove() {
        this.$cache.cont.remove();
        this.$cache.cont = null;
        this.$cache.line.off("keydown.irs_" + this.plugin_count);
        this.$cache.body.off("touchmove.irs_" + this.plugin_count);
        this.$cache.body.off("mousemove.irs_" + this.plugin_count);
        this.$cache.win.off("touchend.irs_" + this.plugin_count);
        this.$cache.win.off("mouseup.irs_" + this.plugin_count);

        if (is_old_ie) {
          this.$cache.body.off("mouseup.irs_" + this.plugin_count);
          this.$cache.body.off("mouseleave.irs_" + this.plugin_count);
        }

        this.$cache.grid_labels = [];
        this.coords.big = [];
        this.coords.big_w = [];
        this.coords.big_p = [];
        this.coords.big_x = [];
        cancelAnimationFrame(this.raf_id);
      },

      /**
       * bind all slider events
       */
      bindEvents: function bindEvents() {
        if (this.no_diapason) {
          return;
        }

        this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this));
        this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this));
        this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this));
        this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));
        this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
        this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
        this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this));

        if (this.options.drag_interval && this.options.type === "double") {
          this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"));
          this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"));
        } else {
          this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
          this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
        }

        if (this.options.type === "single") {
          this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
          this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
          this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
          this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
          this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single"));
          this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
          this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
        } else {
          this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null));
          this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null));
          this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
          this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
          this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
          this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
          this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
          this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
          this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
          this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from"));
          this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
          this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to"));
          this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
          this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"));
        }

        if (this.options.keyboard) {
          this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard"));
        }

        if (is_old_ie) {
          this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this));
          this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this));
        }
      },

      /**
       * Focus with tabIndex
       *
       * @param e {Object} event object
       */
      pointerFocus: function pointerFocus(e) {
        if (!this.target) {
          var x;
          var $handle;

          if (this.options.type === "single") {
            $handle = this.$cache.single;
          } else {
            $handle = this.$cache.from;
          }

          x = $handle.offset().left;
          x += $handle.width() / 2 - 1;
          this.pointerClick("single", {
            preventDefault: function preventDefault() {},
            pageX: x
          });
        }
      },

      /**
       * Mousemove or touchmove
       * only for handlers
       *
       * @param e {Object} event object
       */
      pointerMove: function pointerMove(e) {
        if (!this.dragging) {
          return;
        }

        var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
        this.coords.x_pointer = x - this.coords.x_gap;
        this.calc();
      },

      /**
       * Mouseup or touchend
       * only for handlers
       *
       * @param e {Object} event object
       */
      pointerUp: function pointerUp(e) {
        if (this.current_plugin !== this.plugin_count) {
          return;
        }

        if (this.is_active) {
          this.is_active = false;
        } else {
          return;
        }

        this.$cache.cont.find(".state_hover").removeClass("state_hover");
        this.force_redraw = true;

        if (is_old_ie) {
          $("*").prop("unselectable", false);
        }

        this.updateScene();
        this.restoreOriginalMinInterval(); // callbacks call

        if ($.contains(this.$cache.cont[0], e.target) || this.dragging) {
          this.callOnFinish();
        }

        this.dragging = false;
      },

      /**
       * Mousedown or touchstart
       * only for handlers
       *
       * @param target {String|null}
       * @param e {Object} event object
       */
      pointerDown: function pointerDown(target, e) {
        e.preventDefault();
        var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;

        if (e.button === 2) {
          return;
        }

        if (target === "both") {
          this.setTempMinInterval();
        }

        if (!target) {
          target = this.target || "from";
        }

        this.current_plugin = this.plugin_count;
        this.target = target;
        this.is_active = true;
        this.dragging = true;
        this.coords.x_gap = this.$cache.rs.offset().left;
        this.coords.x_pointer = x - this.coords.x_gap;
        this.calcPointerPercent();
        this.changeLevel(target);

        if (is_old_ie) {
          $("*").prop("unselectable", true);
        }

        this.$cache.line.trigger("focus");
        this.updateScene();
      },

      /**
       * Mousedown or touchstart
       * for other slider elements, like diapason line
       *
       * @param target {String}
       * @param e {Object} event object
       */
      pointerClick: function pointerClick(target, e) {
        e.preventDefault();
        var x = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;

        if (e.button === 2) {
          return;
        }

        this.current_plugin = this.plugin_count;
        this.target = target;
        this.is_click = true;
        this.coords.x_gap = this.$cache.rs.offset().left;
        this.coords.x_pointer = +(x - this.coords.x_gap).toFixed();
        this.force_redraw = true;
        this.calc();
        this.$cache.line.trigger("focus");
      },

      /**
       * Keyborard controls for focused slider
       *
       * @param target {String}
       * @param e {Object} event object
       * @returns {boolean|undefined}
       */
      key: function key(target, e) {
        if (this.current_plugin !== this.plugin_count || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) {
          return;
        }

        switch (e.which) {
          case 83: // W

          case 65: // A

          case 40: // DOWN

          case 37:
            // LEFT
            e.preventDefault();
            this.moveByKey(false);
            break;

          case 87: // S

          case 68: // D

          case 38: // UP

          case 39:
            // RIGHT
            e.preventDefault();
            this.moveByKey(true);
            break;
        }

        return true;
      },

      /**
       * Move by key
       *
       * @param right {boolean} direction to move
       */
      moveByKey: function moveByKey(right) {
        var p = this.coords.p_pointer;
        var p_step = (this.options.max - this.options.min) / 100;
        p_step = this.options.step / p_step;

        if (right) {
          p += p_step;
        } else {
          p -= p_step;
        }

        this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * p);
        this.is_key = true;
        this.calc();
      },

      /**
       * Set visibility and content
       * of Min and Max labels
       */
      setMinMax: function setMinMax() {
        if (!this.options) {
          return;
        }

        if (this.options.hide_min_max) {
          this.$cache.min[0].style.display = "none";
          this.$cache.max[0].style.display = "none";
          return;
        }

        if (this.options.values.length) {
          this.$cache.min.html(this.decorate(this.options.p_values[this.options.min]));
          this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));
        } else {
          var min_pretty = this._prettify(this.options.min);

          var max_pretty = this._prettify(this.options.max);

          this.result.min_pretty = min_pretty;
          this.result.max_pretty = max_pretty;
          this.$cache.min.html(this.decorate(min_pretty, this.options.min));
          this.$cache.max.html(this.decorate(max_pretty, this.options.max));
        }

        this.labels.w_min = this.$cache.min.outerWidth(false);
        this.labels.w_max = this.$cache.max.outerWidth(false);
      },

      /**
       * Then dragging interval, prevent interval collapsing
       * using min_interval option
       */
      setTempMinInterval: function setTempMinInterval() {
        var interval = this.result.to - this.result.from;

        if (this.old_min_interval === null) {
          this.old_min_interval = this.options.min_interval;
        }

        this.options.min_interval = interval;
      },

      /**
       * Restore min_interval option to original
       */
      restoreOriginalMinInterval: function restoreOriginalMinInterval() {
        if (this.old_min_interval !== null) {
          this.options.min_interval = this.old_min_interval;
          this.old_min_interval = null;
        }
      },
      // =============================================================================================================
      // Calculations

      /**
       * All calculations and measures start here
       *
       * @param update {boolean=}
       */
      calc: function calc(update) {
        if (!this.options) {
          return;
        }

        this.calc_count++;

        if (this.calc_count === 10 || update) {
          this.calc_count = 0;
          this.coords.w_rs = this.$cache.rs.outerWidth(false);
          this.calcHandlePercent();
        }

        if (!this.coords.w_rs) {
          return;
        }

        this.calcPointerPercent();
        var handle_x = this.getHandleX();

        if (this.target === "both") {
          this.coords.p_gap = 0;
          handle_x = this.getHandleX();
        }

        if (this.target === "click") {
          this.coords.p_gap = this.coords.p_handle / 2;
          handle_x = this.getHandleX();

          if (this.options.drag_interval) {
            this.target = "both_one";
          } else {
            this.target = this.chooseHandle(handle_x);
          }
        }

        switch (this.target) {
          case "base":
            var w = (this.options.max - this.options.min) / 100,
                f = (this.result.from - this.options.min) / w,
                t = (this.result.to - this.options.min) / w;
            this.coords.p_single_real = this.toFixed(f);
            this.coords.p_from_real = this.toFixed(f);
            this.coords.p_to_real = this.toFixed(t);
            this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);
            this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
            this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
            this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
            this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
            this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
            this.target = null;
            break;

          case "single":
            if (this.options.from_fixed) {
              break;
            }

            this.coords.p_single_real = this.convertToRealPercent(handle_x);
            this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real);
            this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max);
            this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
            break;

          case "from":
            if (this.options.from_fixed) {
              break;
            }

            this.coords.p_from_real = this.convertToRealPercent(handle_x);
            this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);

            if (this.coords.p_from_real > this.coords.p_to_real) {
              this.coords.p_from_real = this.coords.p_to_real;
            }

            this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
            this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
            this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
            this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
            break;

          case "to":
            if (this.options.to_fixed) {
              break;
            }

            this.coords.p_to_real = this.convertToRealPercent(handle_x);
            this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);

            if (this.coords.p_to_real < this.coords.p_from_real) {
              this.coords.p_to_real = this.coords.p_from_real;
            }

            this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
            this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
            this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
            this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
            break;

          case "both":
            if (this.options.from_fixed || this.options.to_fixed) {
              break;
            }

            handle_x = this.toFixed(handle_x + this.coords.p_handle * 0.001);
            this.coords.p_from_real = this.convertToRealPercent(handle_x) - this.coords.p_gap_left;
            this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real);
            this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
            this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from");
            this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
            this.coords.p_to_real = this.convertToRealPercent(handle_x) + this.coords.p_gap_right;
            this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);
            this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
            this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to");
            this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
            break;

          case "both_one":
            if (this.options.from_fixed || this.options.to_fixed) {
              break;
            }

            var real_x = this.convertToRealPercent(handle_x),
                from = this.result.from_percent,
                to = this.result.to_percent,
                full = to - from,
                half = full / 2,
                new_from = real_x - half,
                new_to = real_x + half;

            if (new_from < 0) {
              new_from = 0;
              new_to = new_from + full;
            }

            if (new_to > 100) {
              new_to = 100;
              new_from = new_to - full;
            }

            this.coords.p_from_real = this.calcWithStep(new_from);
            this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max);
            this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
            this.coords.p_to_real = this.calcWithStep(new_to);
            this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max);
            this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
            break;
        }

        if (this.options.type === "single") {
          this.coords.p_bar_x = this.coords.p_handle / 2;
          this.coords.p_bar_w = this.coords.p_single_fake;
          this.result.from_percent = this.coords.p_single_real;
          this.result.from = this.convertToValue(this.coords.p_single_real);
          this.result.from_pretty = this._prettify(this.result.from);

          if (this.options.values.length) {
            this.result.from_value = this.options.values[this.result.from];
          }
        } else {
          this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2);
          this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake);
          this.result.from_percent = this.coords.p_from_real;
          this.result.from = this.convertToValue(this.coords.p_from_real);
          this.result.from_pretty = this._prettify(this.result.from);
          this.result.to_percent = this.coords.p_to_real;
          this.result.to = this.convertToValue(this.coords.p_to_real);
          this.result.to_pretty = this._prettify(this.result.to);

          if (this.options.values.length) {
            this.result.from_value = this.options.values[this.result.from];
            this.result.to_value = this.options.values[this.result.to];
          }
        }

        this.calcMinMax();
        this.calcLabels();
      },

      /**
       * calculates pointer X in percent
       */
      calcPointerPercent: function calcPointerPercent() {
        if (!this.coords.w_rs) {
          this.coords.p_pointer = 0;
          return;
        }

        if (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer)) {
          this.coords.x_pointer = 0;
        } else if (this.coords.x_pointer > this.coords.w_rs) {
          this.coords.x_pointer = this.coords.w_rs;
        }

        this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100);
      },
      convertToRealPercent: function convertToRealPercent(fake) {
        var full = 100 - this.coords.p_handle;
        return fake / full * 100;
      },
      convertToFakePercent: function convertToFakePercent(real) {
        var full = 100 - this.coords.p_handle;
        return real / 100 * full;
      },
      getHandleX: function getHandleX() {
        var max = 100 - this.coords.p_handle,
            x = this.toFixed(this.coords.p_pointer - this.coords.p_gap);

        if (x < 0) {
          x = 0;
        } else if (x > max) {
          x = max;
        }

        return x;
      },
      calcHandlePercent: function calcHandlePercent() {
        if (this.options.type === "single") {
          this.coords.w_handle = this.$cache.s_single.outerWidth(false);
        } else {
          this.coords.w_handle = this.$cache.s_from.outerWidth(false);
        }

        this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100);
      },

      /**
       * Find closest handle to pointer click
       *
       * @param real_x {Number}
       * @returns {String}
       */
      chooseHandle: function chooseHandle(real_x) {
        if (this.options.type === "single") {
          return "single";
        } else {
          var m_point = this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2;

          if (real_x >= m_point) {
            return this.options.to_fixed ? "from" : "to";
          } else {
            return this.options.from_fixed ? "to" : "from";
          }
        }
      },

      /**
       * Measure Min and Max labels width in percent
       */
      calcMinMax: function calcMinMax() {
        if (!this.coords.w_rs) {
          return;
        }

        this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100;
        this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100;
      },

      /**
       * Measure labels width and X in percent
       */
      calcLabels: function calcLabels() {
        if (!this.coords.w_rs || this.options.hide_from_to) {
          return;
        }

        if (this.options.type === "single") {
          this.labels.w_single = this.$cache.single.outerWidth(false);
          this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100;
          this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2;
          this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake);
        } else {
          this.labels.w_from = this.$cache.from.outerWidth(false);
          this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100;
          this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2;
          this.labels.p_from_left = this.toFixed(this.labels.p_from_left);
          this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake);
          this.labels.w_to = this.$cache.to.outerWidth(false);
          this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100;
          this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2;
          this.labels.p_to_left = this.toFixed(this.labels.p_to_left);
          this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake);
          this.labels.w_single = this.$cache.single.outerWidth(false);
          this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100;
          this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2;
          this.labels.p_single_left = this.toFixed(this.labels.p_single_left);
          this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake);
        }
      },
      // =============================================================================================================
      // Drawings

      /**
       * Main function called in request animation frame
       * to update everything
       */
      updateScene: function updateScene() {
        if (this.raf_id) {
          cancelAnimationFrame(this.raf_id);
          this.raf_id = null;
        }

        clearTimeout(this.update_tm);
        this.update_tm = null;

        if (!this.options) {
          return;
        }

        this.drawHandles();

        if (this.is_active) {
          this.raf_id = requestAnimationFrame(this.updateScene.bind(this));
        } else {
          this.update_tm = setTimeout(this.updateScene.bind(this), 300);
        }
      },

      /**
       * Draw handles
       */
      drawHandles: function drawHandles() {
        this.coords.w_rs = this.$cache.rs.outerWidth(false);

        if (!this.coords.w_rs) {
          return;
        }

        if (this.coords.w_rs !== this.coords.w_rs_old) {
          this.target = "base";
          this.is_resize = true;
        }

        if (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) {
          this.setMinMax();
          this.calc(true);
          this.drawLabels();

          if (this.options.grid) {
            this.calcGridMargin();
            this.calcGridLabels();
          }

          this.force_redraw = true;
          this.coords.w_rs_old = this.coords.w_rs;
          this.drawShadow();
        }

        if (!this.coords.w_rs) {
          return;
        }

        if (!this.dragging && !this.force_redraw && !this.is_key) {
          return;
        }

        if (this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) {
          this.drawLabels();
          this.$cache.bar[0].style.left = this.coords.p_bar_x + "%";
          this.$cache.bar[0].style.width = this.coords.p_bar_w + "%";

          if (this.options.type === "single") {
            this.$cache.bar[0].style.left = 0;
            this.$cache.bar[0].style.width = this.coords.p_bar_w + this.coords.p_bar_x + "%";
            this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%";
            this.$cache.single[0].style.left = this.labels.p_single_left + "%";
          } else {
            this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%";
            this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%";

            if (this.old_from !== this.result.from || this.force_redraw) {
              this.$cache.from[0].style.left = this.labels.p_from_left + "%";
            }

            if (this.old_to !== this.result.to || this.force_redraw) {
              this.$cache.to[0].style.left = this.labels.p_to_left + "%";
            }

            this.$cache.single[0].style.left = this.labels.p_single_left + "%";
          }

          this.writeToInput();

          if ((this.old_from !== this.result.from || this.old_to !== this.result.to) && !this.is_start) {
            this.$cache.input.trigger("change");
            this.$cache.input.trigger("input");
          }

          this.old_from = this.result.from;
          this.old_to = this.result.to; // callbacks call

          if (!this.is_resize && !this.is_update && !this.is_start && !this.is_finish) {
            this.callOnChange();
          }

          if (this.is_key || this.is_click) {
            this.is_key = false;
            this.is_click = false;
            this.callOnFinish();
          }

          this.is_update = false;
          this.is_resize = false;
          this.is_finish = false;
        }

        this.is_start = false;
        this.is_key = false;
        this.is_click = false;
        this.force_redraw = false;
      },

      /**
       * Draw labels
       * measure labels collisions
       * collapse close labels
       */
      drawLabels: function drawLabels() {
        if (!this.options) {
          return;
        }

        var values_num = this.options.values.length;
        var p_values = this.options.p_values;
        var text_single;
        var text_from;
        var text_to;
        var from_pretty;
        var to_pretty;

        if (this.options.hide_from_to) {
          return;
        }

        if (this.options.type === "single") {
          if (values_num) {
            text_single = this.decorate(p_values[this.result.from]);
            this.$cache.single.html(text_single);
          } else {
            from_pretty = this._prettify(this.result.from);
            text_single = this.decorate(from_pretty, this.result.from);
            this.$cache.single.html(text_single);
          }

          this.calcLabels();

          if (this.labels.p_single_left < this.labels.p_min + 1) {
            this.$cache.min[0].style.visibility = "hidden";
          } else {
            this.$cache.min[0].style.visibility = "visible";
          }

          if (this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1) {
            this.$cache.max[0].style.visibility = "hidden";
          } else {
            this.$cache.max[0].style.visibility = "visible";
          }
        } else {
          if (values_num) {
            if (this.options.decorate_both) {
              text_single = this.decorate(p_values[this.result.from]);
              text_single += this.options.values_separator;
              text_single += this.decorate(p_values[this.result.to]);
            } else {
              text_single = this.decorate(p_values[this.result.from] + this.options.values_separator + p_values[this.result.to]);
            }

            text_from = this.decorate(p_values[this.result.from]);
            text_to = this.decorate(p_values[this.result.to]);
            this.$cache.single.html(text_single);
            this.$cache.from.html(text_from);
            this.$cache.to.html(text_to);
          } else {
            from_pretty = this._prettify(this.result.from);
            to_pretty = this._prettify(this.result.to);

            if (this.options.decorate_both) {
              text_single = this.decorate(from_pretty, this.result.from);
              text_single += this.options.values_separator;
              text_single += this.decorate(to_pretty, this.result.to);
            } else {
              text_single = this.decorate(from_pretty + this.options.values_separator + to_pretty, this.result.to);
            }

            text_from = this.decorate(from_pretty, this.result.from);
            text_to = this.decorate(to_pretty, this.result.to);
            this.$cache.single.html(text_single);
            this.$cache.from.html(text_from);
            this.$cache.to.html(text_to);
          }

          this.calcLabels();
          var min = Math.min(this.labels.p_single_left, this.labels.p_from_left),
              single_left = this.labels.p_single_left + this.labels.p_single_fake,
              to_left = this.labels.p_to_left + this.labels.p_to_fake,
              max = Math.max(single_left, to_left);

          if (this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left) {
            this.$cache.from[0].style.visibility = "hidden";
            this.$cache.to[0].style.visibility = "hidden";
            this.$cache.single[0].style.visibility = "visible";

            if (this.result.from === this.result.to) {
              if (this.target === "from") {
                this.$cache.from[0].style.visibility = "visible";
              } else if (this.target === "to") {
                this.$cache.to[0].style.visibility = "visible";
              } else if (!this.target) {
                this.$cache.from[0].style.visibility = "visible";
              }

              this.$cache.single[0].style.visibility = "hidden";
              max = to_left;
            } else {
              this.$cache.from[0].style.visibility = "hidden";
              this.$cache.to[0].style.visibility = "hidden";
              this.$cache.single[0].style.visibility = "visible";
              max = Math.max(single_left, to_left);
            }
          } else {
            this.$cache.from[0].style.visibility = "visible";
            this.$cache.to[0].style.visibility = "visible";
            this.$cache.single[0].style.visibility = "hidden";
          }

          if (min < this.labels.p_min + 1) {
            this.$cache.min[0].style.visibility = "hidden";
          } else {
            this.$cache.min[0].style.visibility = "visible";
          }

          if (max > 100 - this.labels.p_max - 1) {
            this.$cache.max[0].style.visibility = "hidden";
          } else {
            this.$cache.max[0].style.visibility = "visible";
          }
        }
      },

      /**
       * Draw shadow intervals
       */
      drawShadow: function drawShadow() {
        var o = this.options,
            c = this.$cache,
            is_from_min = typeof o.from_min === "number" && !isNaN(o.from_min),
            is_from_max = typeof o.from_max === "number" && !isNaN(o.from_max),
            is_to_min = typeof o.to_min === "number" && !isNaN(o.to_min),
            is_to_max = typeof o.to_max === "number" && !isNaN(o.to_max),
            from_min,
            from_max,
            to_min,
            to_max;

        if (o.type === "single") {
          if (o.from_shadow && (is_from_min || is_from_max)) {
            from_min = this.convertToPercent(is_from_min ? o.from_min : o.min);
            from_max = this.convertToPercent(is_from_max ? o.from_max : o.max) - from_min;
            from_min = this.toFixed(from_min - this.coords.p_handle / 100 * from_min);
            from_max = this.toFixed(from_max - this.coords.p_handle / 100 * from_max);
            from_min = from_min + this.coords.p_handle / 2;
            c.shad_single[0].style.display = "block";
            c.shad_single[0].style.left = from_min + "%";
            c.shad_single[0].style.width = from_max + "%";
          } else {
            c.shad_single[0].style.display = "none";
          }
        } else {
          if (o.from_shadow && (is_from_min || is_from_max)) {
            from_min = this.convertToPercent(is_from_min ? o.from_min : o.min);
            from_max = this.convertToPercent(is_from_max ? o.from_max : o.max) - from_min;
            from_min = this.toFixed(from_min - this.coords.p_handle / 100 * from_min);
            from_max = this.toFixed(from_max - this.coords.p_handle / 100 * from_max);
            from_min = from_min + this.coords.p_handle / 2;
            c.shad_from[0].style.display = "block";
            c.shad_from[0].style.left = from_min + "%";
            c.shad_from[0].style.width = from_max + "%";
          } else {
            c.shad_from[0].style.display = "none";
          }

          if (o.to_shadow && (is_to_min || is_to_max)) {
            to_min = this.convertToPercent(is_to_min ? o.to_min : o.min);
            to_max = this.convertToPercent(is_to_max ? o.to_max : o.max) - to_min;
            to_min = this.toFixed(to_min - this.coords.p_handle / 100 * to_min);
            to_max = this.toFixed(to_max - this.coords.p_handle / 100 * to_max);
            to_min = to_min + this.coords.p_handle / 2;
            c.shad_to[0].style.display = "block";
            c.shad_to[0].style.left = to_min + "%";
            c.shad_to[0].style.width = to_max + "%";
          } else {
            c.shad_to[0].style.display = "none";
          }
        }
      },

      /**
       * Write values to input element
       */
      writeToInput: function writeToInput() {
        if (this.options.type === "single") {
          if (this.options.values.length) {
            this.$cache.input.prop("value", this.result.from_value);
          } else {
            this.$cache.input.prop("value", this.result.from);
          }

          this.$cache.input.data("from", this.result.from);
        } else {
          if (this.options.values.length) {
            this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value);
          } else {
            this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to);
          }

          this.$cache.input.data("from", this.result.from);
          this.$cache.input.data("to", this.result.to);
        }
      },
      // =============================================================================================================
      // Callbacks
      callOnStart: function callOnStart() {
        this.writeToInput();

        if (this.options.onStart && typeof this.options.onStart === "function") {
          if (this.options.scope) {
            this.options.onStart.call(this.options.scope, this.result);
          } else {
            this.options.onStart(this.result);
          }
        }
      },
      callOnChange: function callOnChange() {
        this.writeToInput();

        if (this.options.onChange && typeof this.options.onChange === "function") {
          if (this.options.scope) {
            this.options.onChange.call(this.options.scope, this.result);
          } else {
            this.options.onChange(this.result);
          }
        }
      },
      callOnFinish: function callOnFinish() {
        this.writeToInput();

        if (this.options.onFinish && typeof this.options.onFinish === "function") {
          if (this.options.scope) {
            this.options.onFinish.call(this.options.scope, this.result);
          } else {
            this.options.onFinish(this.result);
          }
        }
      },
      callOnUpdate: function callOnUpdate() {
        this.writeToInput();

        if (this.options.onUpdate && typeof this.options.onUpdate === "function") {
          if (this.options.scope) {
            this.options.onUpdate.call(this.options.scope, this.result);
          } else {
            this.options.onUpdate(this.result);
          }
        }
      },
      // =============================================================================================================
      // Service methods
      toggleInput: function toggleInput() {
        this.$cache.input.toggleClass("irs-hidden-input");

        if (this.has_tab_index) {
          this.$cache.input.prop("tabindex", -1);
        } else {
          this.$cache.input.removeProp("tabindex");
        }

        this.has_tab_index = !this.has_tab_index;
      },

      /**
       * Convert real value to percent
       *
       * @param value {Number} X in real
       * @param no_min {boolean=} don't use min value
       * @returns {Number} X in percent
       */
      convertToPercent: function convertToPercent(value, no_min) {
        var diapason = this.options.max - this.options.min,
            one_percent = diapason / 100,
            val,
            percent;

        if (!diapason) {
          this.no_diapason = true;
          return 0;
        }

        if (no_min) {
          val = value;
        } else {
          val = value - this.options.min;
        }

        percent = val / one_percent;
        return this.toFixed(percent);
      },

      /**
       * Convert percent to real values
       *
       * @param percent {Number} X in percent
       * @returns {Number} X in real
       */
      convertToValue: function convertToValue(percent) {
        var min = this.options.min,
            max = this.options.max,
            min_decimals = min.toString().split(".")[1],
            max_decimals = max.toString().split(".")[1],
            min_length,
            max_length,
            avg_decimals = 0,
            abs = 0;

        if (percent === 0) {
          return this.options.min;
        }

        if (percent === 100) {
          return this.options.max;
        }

        if (min_decimals) {
          min_length = min_decimals.length;
          avg_decimals = min_length;
        }

        if (max_decimals) {
          max_length = max_decimals.length;
          avg_decimals = max_length;
        }

        if (min_length && max_length) {
          avg_decimals = min_length >= max_length ? min_length : max_length;
        }

        if (min < 0) {
          abs = Math.abs(min);
          min = +(min + abs).toFixed(avg_decimals);
          max = +(max + abs).toFixed(avg_decimals);
        }

        var number = (max - min) / 100 * percent + min,
            string = this.options.step.toString().split(".")[1],
            result;

        if (string) {
          number = +number.toFixed(string.length);
        } else {
          number = number / this.options.step;
          number = number * this.options.step;
          number = +number.toFixed(0);
        }

        if (abs) {
          number -= abs;
        }

        if (string) {
          result = +number.toFixed(string.length);
        } else {
          result = this.toFixed(number);
        }

        if (result < this.options.min) {
          result = this.options.min;
        } else if (result > this.options.max) {
          result = this.options.max;
        }

        return result;
      },

      /**
       * Round percent value with step
       *
       * @param percent {Number}
       * @returns percent {Number} rounded
       */
      calcWithStep: function calcWithStep(percent) {
        var rounded = Math.round(percent / this.coords.p_step) * this.coords.p_step;

        if (rounded > 100) {
          rounded = 100;
        }

        if (percent === 100) {
          rounded = 100;
        }

        return this.toFixed(rounded);
      },
      checkMinInterval: function checkMinInterval(p_current, p_next, type) {
        var o = this.options,
            current,
            next;

        if (!o.min_interval) {
          return p_current;
        }

        current = this.convertToValue(p_current);
        next = this.convertToValue(p_next);

        if (type === "from") {
          if (next - current < o.min_interval) {
            current = next - o.min_interval;
          }
        } else {
          if (current - next < o.min_interval) {
            current = next + o.min_interval;
          }
        }

        return this.convertToPercent(current);
      },
      checkMaxInterval: function checkMaxInterval(p_current, p_next, type) {
        var o = this.options,
            current,
            next;

        if (!o.max_interval) {
          return p_current;
        }

        current = this.convertToValue(p_current);
        next = this.convertToValue(p_next);

        if (type === "from") {
          if (next - current > o.max_interval) {
            current = next - o.max_interval;
          }
        } else {
          if (current - next > o.max_interval) {
            current = next + o.max_interval;
          }
        }

        return this.convertToPercent(current);
      },
      checkDiapason: function checkDiapason(p_num, min, max) {
        var num = this.convertToValue(p_num),
            o = this.options;

        if (typeof min !== "number") {
          min = o.min;
        }

        if (typeof max !== "number") {
          max = o.max;
        }

        if (num < min) {
          num = min;
        }

        if (num > max) {
          num = max;
        }

        return this.convertToPercent(num);
      },
      toFixed: function toFixed(num) {
        num = num.toFixed(20);
        return +num;
      },
      _prettify: function _prettify(num) {
        if (!this.options.prettify_enabled) {
          return num;
        }

        if (this.options.prettify && typeof this.options.prettify === "function") {
          return this.options.prettify(num);
        } else {
          return this.prettify(num);
        }
      },
      prettify: function prettify(num) {
        var n = num.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator);
      },
      checkEdges: function checkEdges(left, width) {
        if (!this.options.force_edges) {
          return this.toFixed(left);
        }

        if (left < 0) {
          left = 0;
        } else if (left > 100 - width) {
          left = 100 - width;
        }

        return this.toFixed(left);
      },
      validate: function validate() {
        var o = this.options,
            r = this.result,
            v = o.values,
            vl = v.length,
            value,
            i;
        if (typeof o.min === "string") o.min = +o.min;
        if (typeof o.max === "string") o.max = +o.max;
        if (typeof o.from === "string") o.from = +o.from;
        if (typeof o.to === "string") o.to = +o.to;
        if (typeof o.step === "string") o.step = +o.step;
        if (typeof o.from_min === "string") o.from_min = +o.from_min;
        if (typeof o.from_max === "string") o.from_max = +o.from_max;
        if (typeof o.to_min === "string") o.to_min = +o.to_min;
        if (typeof o.to_max === "string") o.to_max = +o.to_max;
        if (typeof o.grid_num === "string") o.grid_num = +o.grid_num;

        if (o.max < o.min) {
          o.max = o.min;
        }

        if (vl) {
          o.p_values = [];
          o.min = 0;
          o.max = vl - 1;
          o.step = 1;
          o.grid_num = o.max;
          o.grid_snap = true;

          for (i = 0; i < vl; i++) {
            value = +v[i];

            if (!isNaN(value)) {
              v[i] = value;
              value = this._prettify(value);
            } else {
              value = v[i];
            }

            o.p_values.push(value);
          }
        }

        if (typeof o.from !== "number" || isNaN(o.from)) {
          o.from = o.min;
        }

        if (typeof o.to !== "number" || isNaN(o.to)) {
          o.to = o.max;
        }

        if (o.type === "single") {
          if (o.from < o.min) o.from = o.min;
          if (o.from > o.max) o.from = o.max;
        } else {
          if (o.from < o.min) o.from = o.min;
          if (o.from > o.max) o.from = o.max;
          if (o.to < o.min) o.to = o.min;
          if (o.to > o.max) o.to = o.max;

          if (this.update_check.from) {
            if (this.update_check.from !== o.from) {
              if (o.from > o.to) o.from = o.to;
            }

            if (this.update_check.to !== o.to) {
              if (o.to < o.from) o.to = o.from;
            }
          }

          if (o.from > o.to) o.from = o.to;
          if (o.to < o.from) o.to = o.from;
        }

        if (typeof o.step !== "number" || isNaN(o.step) || !o.step || o.step < 0) {
          o.step = 1;
        }

        if (typeof o.from_min === "number" && o.from < o.from_min) {
          o.from = o.from_min;
        }

        if (typeof o.from_max === "number" && o.from > o.from_max) {
          o.from = o.from_max;
        }

        if (typeof o.to_min === "number" && o.to < o.to_min) {
          o.to = o.to_min;
        }

        if (typeof o.to_max === "number" && o.from > o.to_max) {
          o.to = o.to_max;
        }

        if (r) {
          if (r.min !== o.min) {
            r.min = o.min;
          }

          if (r.max !== o.max) {
            r.max = o.max;
          }

          if (r.from < r.min || r.from > r.max) {
            r.from = o.from;
          }

          if (r.to < r.min || r.to > r.max) {
            r.to = o.to;
          }
        }

        if (typeof o.min_interval !== "number" || isNaN(o.min_interval) || !o.min_interval || o.min_interval < 0) {
          o.min_interval = 0;
        }

        if (typeof o.max_interval !== "number" || isNaN(o.max_interval) || !o.max_interval || o.max_interval < 0) {
          o.max_interval = 0;
        }

        if (o.min_interval && o.min_interval > o.max - o.min) {
          o.min_interval = o.max - o.min;
        }

        if (o.max_interval && o.max_interval > o.max - o.min) {
          o.max_interval = o.max - o.min;
        }
      },
      decorate: function decorate(num, original) {
        var decorated = "",
            o = this.options;

        if (o.prefix) {
          decorated += o.prefix;
        }

        decorated += num;

        if (o.max_postfix) {
          if (o.values.length && num === o.p_values[o.max]) {
            decorated += o.max_postfix;

            if (o.postfix) {
              decorated += " ";
            }
          } else if (original === o.max) {
            decorated += o.max_postfix;

            if (o.postfix) {
              decorated += " ";
            }
          }
        }

        if (o.postfix) {
          decorated += o.postfix;
        }

        return decorated;
      },
      updateFrom: function updateFrom() {
        this.result.from = this.options.from;
        this.result.from_percent = this.convertToPercent(this.result.from);
        this.result.from_pretty = this._prettify(this.result.from);

        if (this.options.values) {
          this.result.from_value = this.options.values[this.result.from];
        }
      },
      updateTo: function updateTo() {
        this.result.to = this.options.to;
        this.result.to_percent = this.convertToPercent(this.result.to);
        this.result.to_pretty = this._prettify(this.result.to);

        if (this.options.values) {
          this.result.to_value = this.options.values[this.result.to];
        }
      },
      updateResult: function updateResult() {
        this.result.min = this.options.min;
        this.result.max = this.options.max;
        this.updateFrom();
        this.updateTo();
      },
      // =============================================================================================================
      // Grid
      appendGrid: function appendGrid() {
        if (!this.options.grid) {
          return;
        }

        var o = this.options,
            i,
            z,
            total = o.max - o.min,
            big_num = o.grid_num,
            big_p = 0,
            big_w = 0,
            small_max = 4,
            local_small_max,
            small_p,
            small_w = 0,
            result,
            html = '';
        this.calcGridMargin();

        if (o.grid_snap) {
          big_num = total / o.step;
        }

        if (big_num > 50) big_num = 50;
        big_p = this.toFixed(100 / big_num);

        if (big_num > 4) {
          small_max = 3;
        }

        if (big_num > 7) {
          small_max = 2;
        }

        if (big_num > 14) {
          small_max = 1;
        }

        if (big_num > 28) {
          small_max = 0;
        }

        for (i = 0; i < big_num + 1; i++) {
          local_small_max = small_max;
          big_w = this.toFixed(big_p * i);

          if (big_w > 100) {
            big_w = 100;
          }

          this.coords.big[i] = big_w;
          small_p = (big_w - big_p * (i - 1)) / (local_small_max + 1);

          for (z = 1; z <= local_small_max; z++) {
            if (big_w === 0) {
              break;
            }

            small_w = this.toFixed(big_w - small_p * z);
            html += '<span class="irs-grid-pol small" style="left: ' + small_w + '%"></span>';
          }

          html += '<span class="irs-grid-pol" style="left: ' + big_w + '%"></span>';
          result = this.convertToValue(big_w);

          if (o.values.length) {
            result = o.p_values[result];
          } else {
            result = this._prettify(result);
          }

          html += '<span class="irs-grid-text js-grid-text-' + i + '" style="left: ' + big_w + '%">' + result + '</span>';
        }

        this.coords.big_num = Math.ceil(big_num + 1);
        this.$cache.cont.addClass("irs-with-grid");
        this.$cache.grid.html(html);
        this.cacheGridLabels();
      },
      cacheGridLabels: function cacheGridLabels() {
        var $label,
            i,
            num = this.coords.big_num;

        for (i = 0; i < num; i++) {
          $label = this.$cache.grid.find(".js-grid-text-" + i);
          this.$cache.grid_labels.push($label);
        }

        this.calcGridLabels();
      },
      calcGridLabels: function calcGridLabels() {
        var i,
            label,
            start = [],
            finish = [],
            num = this.coords.big_num;

        for (i = 0; i < num; i++) {
          this.coords.big_w[i] = this.$cache.grid_labels[i].outerWidth(false);
          this.coords.big_p[i] = this.toFixed(this.coords.big_w[i] / this.coords.w_rs * 100);
          this.coords.big_x[i] = this.toFixed(this.coords.big_p[i] / 2);
          start[i] = this.toFixed(this.coords.big[i] - this.coords.big_x[i]);
          finish[i] = this.toFixed(start[i] + this.coords.big_p[i]);
        }

        if (this.options.force_edges) {
          if (start[0] < -this.coords.grid_gap) {
            start[0] = -this.coords.grid_gap;
            finish[0] = this.toFixed(start[0] + this.coords.big_p[0]);
            this.coords.big_x[0] = this.coords.grid_gap;
          }

          if (finish[num - 1] > 100 + this.coords.grid_gap) {
            finish[num - 1] = 100 + this.coords.grid_gap;
            start[num - 1] = this.toFixed(finish[num - 1] - this.coords.big_p[num - 1]);
            this.coords.big_x[num - 1] = this.toFixed(this.coords.big_p[num - 1] - this.coords.grid_gap);
          }
        }

        this.calcGridCollision(2, start, finish);
        this.calcGridCollision(4, start, finish);

        for (i = 0; i < num; i++) {
          label = this.$cache.grid_labels[i][0];

          if (this.coords.big_x[i] !== Number.POSITIVE_INFINITY) {
            label.style.marginLeft = -this.coords.big_x[i] + "%";
          }
        }
      },
      // Collisions Calc Beta
      // TODO: Refactor then have plenty of time
      calcGridCollision: function calcGridCollision(step, start, finish) {
        var i,
            next_i,
            label,
            num = this.coords.big_num;

        for (i = 0; i < num; i += step) {
          next_i = i + step / 2;

          if (next_i >= num) {
            break;
          }

          label = this.$cache.grid_labels[next_i][0];

          if (finish[i] <= start[next_i]) {
            label.style.visibility = "visible";
          } else {
            label.style.visibility = "hidden";
          }
        }
      },
      calcGridMargin: function calcGridMargin() {
        if (!this.options.grid_margin) {
          return;
        }

        this.coords.w_rs = this.$cache.rs.outerWidth(false);

        if (!this.coords.w_rs) {
          return;
        }

        if (this.options.type === "single") {
          this.coords.w_handle = this.$cache.s_single.outerWidth(false);
        } else {
          this.coords.w_handle = this.$cache.s_from.outerWidth(false);
        }

        this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100);
        this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - 0.1);
        this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%";
        this.$cache.grid[0].style.left = this.coords.grid_gap + "%";
      },
      // =============================================================================================================
      // Public methods
      update: function update(options) {
        if (!this.input) {
          return;
        }

        this.is_update = true;
        this.options.from = this.result.from;
        this.options.to = this.result.to;
        this.update_check.from = this.result.from;
        this.update_check.to = this.result.to;
        this.options = $.extend(this.options, options);
        this.validate();
        this.updateResult(options);
        this.toggleInput();
        this.remove();
        this.init(true);
      },
      reset: function reset() {
        if (!this.input) {
          return;
        }

        this.updateResult();
        this.update();
      },
      destroy: function destroy() {
        if (!this.input) {
          return;
        }

        this.toggleInput();
        this.$cache.input.prop("readonly", false);
        $.data(this.input, "ionRangeSlider", null);
        this.remove();
        this.input = null;
        this.options = null;
      }
    };

    $.fn.ionRangeSlider = function (options) {
      return this.each(function () {
        if (!$.data(this, "ionRangeSlider")) {
          $.data(this, "ionRangeSlider", new IonRangeSlider(this, options, plugin_count++));
        }
      });
    }; // =================================================================================================================
    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
    // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
    // MIT license


    (function () {
      var lastTime = 0;
      var vendors = ['ms', 'moz', 'webkit', 'o'];

      for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
      }

      if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
      if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
      };
    })();
  });
});

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
};

var IonRangeSlider = function (_PureComponent) {
  inherits(IonRangeSlider, _PureComponent);

  function IonRangeSlider(props) {
    classCallCheck(this, IonRangeSlider);

    var _this = possibleConstructorReturn(this, (IonRangeSlider.__proto__ || Object.getPrototypeOf(IonRangeSlider)).call(this, props));

    _initialiseProps.call(_this);

    _this.ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  }

  createClass(IonRangeSlider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var props = this.props;

      var options = function (_ref) {
        var style = _ref.style,
            className = _ref.className,
            key = _ref.key,
            id = _ref.id,
            others = objectWithoutProperties(_ref, ['style', 'className', 'key', 'id']);
        return _extends({}, others);
      }(props);

      $(this.ref).ionRangeSlider(options);
      this.ionSliderRange = $(this.ref).data('ionRangeSlider');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', {
        ref: function ref(node) {
          _this2.ref = node;
        }
      });
    }
  }]);
  return IonRangeSlider;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

IonRangeSlider.defaultProps = {
  type: 'single',
  skin: 'flat'
};
IonRangeSlider.propTypes = {
  /* Basic setup */
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  from: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /* Advanced setup */
  step: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  keyboard: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /* Grid setup */
  grid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  grid_margin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  grid_num: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  grid_snap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /* Interval control */
  drag_interval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  min_interval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  max_interval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /* Handles control */
  from_fixed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  from_min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  from_max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  from_shadow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  to_fixed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  to_min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  to_max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  to_shadow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /* UI control */
  skin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  hide_min_max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hide_from_to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  force_edges: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  extra_classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  block: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /* Prettify numbers */
  prettify_enabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  prettify_separator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  prettify: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  prefix: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  postfix: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  max_postfix: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  decorate_both: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  value_separator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /* Data control */
  input_values_separator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  disable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /* Callbacks */
  scope: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onFinish: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onUpdate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.update = function (_options) {
    var props = _this3.props;

    var options = function (_ref2) {
      var style = _ref2.style,
          className = _ref2.className,
          key = _ref2.key,
          id = _ref2.id,
          others = objectWithoutProperties(_ref2, ['style', 'className', 'key', 'id']);
      return _extends({}, others);
    }(props);

    _this3.ionSliderRange && _this3.ionSliderRange.update(_options || options);
  };
};

IonRangeSlider.propTypes = {
  /* Basic setup */
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  from: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /* Advanced setup */
  step: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  keyboard: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /* Grid setup */
  grid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  grid_margin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  grid_num: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  grid_snap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /* Interval control */
  drag_interval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  min_interval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  max_interval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /* Handles control */
  from_fixed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  from_min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  from_max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  from_shadow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  to_fixed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  to_min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  to_max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  to_shadow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /* UI control */
  skin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  hide_min_max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hide_from_to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  force_edges: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  extra_classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  block: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /* Prettify numbers */
  prettify_enabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  prettify_separator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  prettify: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  prefix: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  postfix: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  max_postfix: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  decorate_both: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  value_separator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /* Data control */
  input_values_separator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  disable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /* Callbacks */
  scope: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onFinish: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onUpdate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (IonRangeSlider);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (true) {
  (function () {
    'use strict'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol["for"]('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol["for"]('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol["for"]('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol["for"]('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol["for"]('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (_typeof(object) === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}

/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}

/***/ }),

/***/ "./node_modules/react-markdown/lib/ast-to-react.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-markdown/lib/ast-to-react.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "react");

var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

var defaultNodePosition = {
  start: {
    line: 1,
    column: 1,
    offset: 0
  },
  end: {
    line: 1,
    column: 1,
    offset: 0
  }
};

function astToReact(node, options) {
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var renderer = options.renderers[node.type]; // nodes generated by plugins may not have position data
  // much of the code after this point will attempt to access properties of the node.position
  // this will set the node position to the parent node's position to prevent errors

  if (node.position === undefined) {
    node.position = parent.node && parent.node.position || defaultNodePosition;
  }

  var pos = node.position.start;
  var key = [node.type, pos.line, pos.column, index].join('-');

  if (!ReactIs.isValidElementType(renderer)) {
    throw new Error("Renderer for type `".concat(node.type, "` not defined or is not renderable"));
  }

  var nodeProps = getNodeProps(node, key, options, renderer, parent, index);
  return React.createElement(renderer, nodeProps, nodeProps.children || resolveChildren() || undefined);

  function resolveChildren() {
    return node.children && node.children.map(function (childNode, i) {
      return astToReact(childNode, options, {
        node: node,
        props: nodeProps
      }, i);
    });
  }
} // eslint-disable-next-line max-params, complexity


function getNodeProps(node, key, opts, renderer, parent, index) {
  var props = {
    key: key
  };
  var isTagRenderer = typeof renderer === 'string'; // `sourcePos` is true if the user wants source information (line/column info from markdown source)

  if (opts.sourcePos && node.position) {
    props['data-sourcepos'] = flattenPosition(node.position);
  }

  if (opts.rawSourcePos && !isTagRenderer) {
    props.sourcePosition = node.position;
  } // If `includeNodeIndex` is true, pass node index info to all non-tag renderers


  if (opts.includeNodeIndex && parent.node && parent.node.children && !isTagRenderer) {
    props.index = parent.node.children.indexOf(node);
    props.parentChildCount = parent.node.children.length;
  }

  var ref = node.identifier !== null && node.identifier !== undefined ? opts.definitions[node.identifier] || {} : null;

  switch (node.type) {
    case 'root':
      assignDefined(props, {
        className: opts.className
      });
      break;

    case 'text':
      props.nodeKey = key;
      props.children = node.value;
      break;

    case 'heading':
      props.level = node.depth;
      break;

    case 'list':
      props.start = node.start;
      props.ordered = node.ordered;
      props.tight = !node.loose;
      props.depth = node.depth;
      break;

    case 'listItem':
      props.checked = node.checked;
      props.tight = !node.loose;
      props.ordered = node.ordered;
      props.index = node.index;
      props.children = getListItemChildren(node, parent).map(function (childNode, i) {
        return astToReact(childNode, opts, {
          node: node,
          props: props
        }, i);
      });
      break;

    case 'definition':
      assignDefined(props, {
        identifier: node.identifier,
        title: node.title,
        url: node.url
      });
      break;

    case 'code':
      assignDefined(props, {
        language: node.lang && node.lang.split(/\s/, 1)[0]
      });
      break;

    case 'inlineCode':
      props.children = node.value;
      props.inline = true;
      break;

    case 'link':
      assignDefined(props, {
        title: node.title || undefined,
        target: typeof opts.linkTarget === 'function' ? opts.linkTarget(node.url, node.children, node.title) : opts.linkTarget,
        href: opts.transformLinkUri ? opts.transformLinkUri(node.url, node.children, node.title) : node.url
      });
      break;

    case 'image':
      assignDefined(props, {
        alt: node.alt || undefined,
        title: node.title || undefined,
        src: opts.transformImageUri ? opts.transformImageUri(node.url, node.children, node.title, node.alt) : node.url
      });
      break;

    case 'linkReference':
      assignDefined(props, xtend(ref, {
        href: opts.transformLinkUri ? opts.transformLinkUri(ref.href) : ref.href
      }));
      break;

    case 'imageReference':
      assignDefined(props, {
        src: opts.transformImageUri && ref.href ? opts.transformImageUri(ref.href, node.children, ref.title, node.alt) : ref.href,
        title: ref.title || undefined,
        alt: node.alt || undefined
      });
      break;

    case 'table':
    case 'tableHead':
    case 'tableBody':
      props.columnAlignment = node.align;
      break;

    case 'tableRow':
      props.isHeader = parent.node.type === 'tableHead';
      props.columnAlignment = parent.props.columnAlignment;
      break;

    case 'tableCell':
      assignDefined(props, {
        isHeader: parent.props.isHeader,
        align: parent.props.columnAlignment[index]
      });
      break;

    case 'virtualHtml':
      props.tag = node.tag;
      break;

    case 'html':
      // @todo find a better way than this
      props.isBlock = node.position.start.line !== node.position.end.line;
      props.escapeHtml = opts.escapeHtml;
      props.skipHtml = opts.skipHtml;
      break;

    case 'parsedHtml':
      {
        var parsedChildren;

        if (node.children) {
          parsedChildren = node.children.map(function (child, i) {
            return astToReact(child, opts, {
              node: node,
              props: props
            }, i);
          });
        }

        props.escapeHtml = opts.escapeHtml;
        props.skipHtml = opts.skipHtml;
        props.element = mergeNodeChildren(node, parsedChildren);
        break;
      }

    default:
      assignDefined(props, xtend(node, {
        type: undefined,
        position: undefined,
        children: undefined
      }));
  }

  if (!isTagRenderer && node.value) {
    props.value = node.value;
  }

  return props;
}

function assignDefined(target, attrs) {
  for (var key in attrs) {
    if (typeof attrs[key] !== 'undefined') {
      target[key] = attrs[key];
    }
  }
}

function mergeNodeChildren(node, parsedChildren) {
  var el = node.element;

  if (Array.isArray(el)) {
    var Fragment = React.Fragment || 'div';
    return React.createElement(Fragment, null, el);
  }

  if (el.props.children || parsedChildren) {
    var children = React.Children.toArray(el.props.children).concat(parsedChildren);
    return React.cloneElement(el, null, children);
  }

  return React.cloneElement(el, null);
}

function flattenPosition(pos) {
  return [pos.start.line, ':', pos.start.column, '-', pos.end.line, ':', pos.end.column].map(String).join('');
}

function getListItemChildren(node, parent) {
  if (node.loose) {
    return node.children;
  }

  if (parent.node && node.index > 0 && parent.node.children[node.index - 1].loose) {
    return node.children;
  }

  return unwrapParagraphs(node);
}

function unwrapParagraphs(node) {
  return node.children.reduce(function (array, child) {
    return array.concat(child.type === 'paragraph' ? child.children || [] : [child]);
  }, []);
}

module.exports = astToReact;

/***/ }),

/***/ "./node_modules/react-markdown/lib/get-definitions.js":
/*!************************************************************!*\
  !*** ./node_modules/react-markdown/lib/get-definitions.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function getDefinitions(node) {
  var defs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (node.children || []).reduce(function (definitions, child) {
    if (child.type === 'definition') {
      definitions[child.identifier] = {
        href: child.url,
        title: child.title
      };
    }

    return getDefinitions(child, definitions);
  }, defs);
};

/***/ }),

/***/ "./node_modules/react-markdown/lib/plugins/disallow-node.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-markdown/lib/plugins/disallow-node.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js");

exports.ofType = function (types, mode) {
  return function (node) {
    types.forEach(function (type) {
      return visit(node, type, disallow, true);
    });
    return node;
  };

  function disallow(node, index, parent) {
    if (parent) {
      untangle(node, index, parent, mode);
    }
  }
};

exports.ifNotMatch = function (allowNode, mode) {
  return function (node) {
    visit(node, disallow, true);
    return node;
  };

  function disallow(node, index, parent) {
    if (parent && !allowNode(node, index, parent)) {
      untangle(node, index, parent, mode);
    }
  }
};

function untangle(node, index, parent, mode) {
  if (mode === 'remove') {
    parent.children.splice(index, 1);
  } else if (mode === 'unwrap') {
    var args = [index, 1];

    if (node.children) {
      args = args.concat(node.children);
    }

    Array.prototype.splice.apply(parent.children, args);
  }
}

/***/ }),

/***/ "./node_modules/react-markdown/lib/plugins/naive-html.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-markdown/lib/plugins/naive-html.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Naive, simple plugin to match inline nodes without attributes
 * This allows say <strong>foo</strong>, but not <strong class="very">foo</strong>
 * For proper HTML support, you'll want a different plugin
 **/

var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js");

var type = 'virtualHtml';
var selfClosingRe = /^<(area|base|br|col|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\s*\/?>$/i;
var simpleTagRe = /^<(\/?)([a-z]+)\s*>$/;

module.exports = function (tree) {
  var open;
  var currentParent;
  visit(tree, 'html', function (node, index, parent) {
    if (currentParent !== parent) {
      open = [];
      currentParent = parent;
    }

    var selfClosing = getSelfClosing(node);

    if (selfClosing) {
      parent.children.splice(index, 1, {
        type: type,
        tag: selfClosing,
        position: node.position
      });
      return true;
    }

    var current = getSimpleTag(node, parent);

    if (!current) {
      return true;
    }

    var matching = findAndPull(open, current.tag);

    if (matching) {
      parent.children.splice(index, 0, virtual(current, matching, parent));
    } else if (!current.opening) {
      open.push(current);
    }

    return true;
  }, true // Iterate in reverse
  );
  return tree;
};

function findAndPull(open, matchingTag) {
  var i = open.length;

  while (i--) {
    if (open[i].tag === matchingTag) {
      return open.splice(i, 1)[0];
    }
  }

  return false;
}

function getSimpleTag(node, parent) {
  var match = node.value.match(simpleTagRe);
  return match ? {
    tag: match[2],
    opening: !match[1],
    node: node
  } : false;
}

function getSelfClosing(node) {
  var match = node.value.match(selfClosingRe);
  return match ? match[1] : false;
}

function virtual(fromNode, toNode, parent) {
  var fromIndex = parent.children.indexOf(fromNode.node);
  var toIndex = parent.children.indexOf(toNode.node);
  var extracted = parent.children.splice(fromIndex, toIndex - fromIndex + 1);
  var children = extracted.slice(1, -1);
  return {
    type: type,
    children: children,
    tag: fromNode.tag,
    position: {
      start: fromNode.node.position.start,
      end: toNode.node.position.end,
      indent: []
    }
  };
}

/***/ }),

/***/ "./node_modules/react-markdown/lib/react-markdown.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-markdown/lib/react-markdown.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

var unified = __webpack_require__(/*! unified */ "./node_modules/unified/index.js");

var parse = __webpack_require__(/*! remark-parse */ "./node_modules/remark-parse/index.js");

var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var addListMetadata = __webpack_require__(/*! mdast-add-list-metadata */ "./node_modules/mdast-add-list-metadata/index.js");

var naiveHtml = __webpack_require__(/*! ./plugins/naive-html */ "./node_modules/react-markdown/lib/plugins/naive-html.js");

var disallowNode = __webpack_require__(/*! ./plugins/disallow-node */ "./node_modules/react-markdown/lib/plugins/disallow-node.js");

var astToReact = __webpack_require__(/*! ./ast-to-react */ "./node_modules/react-markdown/lib/ast-to-react.js");

var wrapTableRows = __webpack_require__(/*! ./wrap-table-rows */ "./node_modules/react-markdown/lib/wrap-table-rows.js");

var getDefinitions = __webpack_require__(/*! ./get-definitions */ "./node_modules/react-markdown/lib/get-definitions.js");

var uriTransformer = __webpack_require__(/*! ./uri-transformer */ "./node_modules/react-markdown/lib/uri-transformer.js");

var defaultRenderers = __webpack_require__(/*! ./renderers */ "./node_modules/react-markdown/lib/renderers.js");

var symbols = __webpack_require__(/*! ./symbols */ "./node_modules/react-markdown/lib/symbols.js");

var allTypes = Object.keys(defaultRenderers);

var ReactMarkdown = function ReactMarkdown(props) {
  var src = props.source || props.children || '';
  var parserOptions = props.parserOptions;

  if (props.allowedTypes && props.disallowedTypes) {
    throw new Error('Only one of `allowedTypes` and `disallowedTypes` should be defined');
  }

  var renderers = xtend(defaultRenderers, props.renderers);
  var plugins = [[parse, parserOptions]].concat(props.plugins || []);
  var parser = plugins.reduce(applyParserPlugin, unified());
  var rawAst = parser.parse(src);
  var renderProps = xtend(props, {
    renderers: renderers,
    definitions: getDefinitions(rawAst)
  });
  var astPlugins = determineAstPlugins(props); // eslint-disable-next-line no-sync

  var transformedAst = parser.runSync(rawAst);
  var ast = astPlugins.reduce(function (node, plugin) {
    return plugin(node, renderProps);
  }, transformedAst);
  return astToReact(ast, renderProps);
};

function applyParserPlugin(parser, plugin) {
  return Array.isArray(plugin) ? parser.use.apply(parser, _toConsumableArray(plugin)) : parser.use(plugin);
}

function determineAstPlugins(props) {
  var plugins = [wrapTableRows, addListMetadata()];
  var disallowedTypes = props.disallowedTypes;

  if (props.allowedTypes) {
    disallowedTypes = allTypes.filter(function (type) {
      return type !== 'root' && props.allowedTypes.indexOf(type) === -1;
    });
  }

  var removalMethod = props.unwrapDisallowed ? 'unwrap' : 'remove';

  if (disallowedTypes && disallowedTypes.length > 0) {
    plugins.push(disallowNode.ofType(disallowedTypes, removalMethod));
  }

  if (props.allowNode) {
    plugins.push(disallowNode.ifNotMatch(props.allowNode, removalMethod));
  }

  var renderHtml = !props.escapeHtml && !props.skipHtml;
  var hasHtmlParser = (props.astPlugins || []).some(function (item) {
    var plugin = Array.isArray(item) ? item[0] : item;
    return plugin.identity === symbols.HtmlParser;
  });

  if (renderHtml && !hasHtmlParser) {
    plugins.push(naiveHtml);
  }

  return props.astPlugins ? plugins.concat(props.astPlugins) : plugins;
}

ReactMarkdown.defaultProps = {
  renderers: {},
  escapeHtml: true,
  skipHtml: false,
  sourcePos: false,
  rawSourcePos: false,
  transformLinkUri: uriTransformer,
  astPlugins: [],
  plugins: [],
  parserOptions: {}
};
ReactMarkdown.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string,
  children: PropTypes.string,
  sourcePos: PropTypes.bool,
  rawSourcePos: PropTypes.bool,
  escapeHtml: PropTypes.bool,
  skipHtml: PropTypes.bool,
  allowNode: PropTypes.func,
  allowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
  disallowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
  transformLinkUri: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  linkTarget: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  transformImageUri: PropTypes.func,
  astPlugins: PropTypes.arrayOf(PropTypes.func),
  unwrapDisallowed: PropTypes.bool,
  renderers: PropTypes.object,
  plugins: PropTypes.array,
  parserOptions: PropTypes.object
};
ReactMarkdown.types = allTypes;
ReactMarkdown.renderers = defaultRenderers;
ReactMarkdown.uriTransformer = uriTransformer;
module.exports = ReactMarkdown;

/***/ }),

/***/ "./node_modules/react-markdown/lib/renderers.js":
/*!******************************************************!*\
  !*** ./node_modules/react-markdown/lib/renderers.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable react/prop-types, react/no-multi-comp */


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

var React = __webpack_require__(/*! react */ "react");

var supportsStringRender = parseInt((React.version || '16').slice(0, 2), 10) >= 16;
var createElement = React.createElement;
module.exports = {
  "break": 'br',
  paragraph: 'p',
  emphasis: 'em',
  strong: 'strong',
  thematicBreak: 'hr',
  blockquote: 'blockquote',
  "delete": 'del',
  link: 'a',
  image: 'img',
  linkReference: 'a',
  imageReference: 'img',
  table: SimpleRenderer.bind(null, 'table'),
  tableHead: SimpleRenderer.bind(null, 'thead'),
  tableBody: SimpleRenderer.bind(null, 'tbody'),
  tableRow: SimpleRenderer.bind(null, 'tr'),
  tableCell: TableCell,
  root: Root,
  text: TextRenderer,
  list: List,
  listItem: ListItem,
  definition: NullRenderer,
  heading: Heading,
  inlineCode: InlineCode,
  code: CodeBlock,
  html: Html,
  virtualHtml: VirtualHtml,
  parsedHtml: ParsedHtml
};

function TextRenderer(props) {
  return supportsStringRender ? props.children : createElement('span', null, props.children);
}

function Root(props) {
  var useFragment = !props.className;
  var root = useFragment ? React.Fragment || 'div' : 'div';
  return createElement(root, useFragment ? null : props, props.children);
}

function SimpleRenderer(tag, props) {
  return createElement(tag, getCoreProps(props), props.children);
}

function TableCell(props) {
  var style = props.align ? {
    textAlign: props.align
  } : undefined;
  var coreProps = getCoreProps(props);
  return createElement(props.isHeader ? 'th' : 'td', style ? xtend({
    style: style
  }, coreProps) : coreProps, props.children);
}

function Heading(props) {
  return createElement("h".concat(props.level), getCoreProps(props), props.children);
}

function List(props) {
  var attrs = getCoreProps(props);

  if (props.start !== null && props.start !== 1 && props.start !== undefined) {
    attrs.start = props.start.toString();
  }

  return createElement(props.ordered ? 'ol' : 'ul', attrs, props.children);
}

function ListItem(props) {
  var checkbox = null;

  if (props.checked !== null && props.checked !== undefined) {
    var checked = props.checked;
    checkbox = createElement('input', {
      type: 'checkbox',
      checked: checked,
      readOnly: true
    });
  }

  return createElement('li', getCoreProps(props), checkbox, props.children);
}

function CodeBlock(props) {
  var className = props.language && "language-".concat(props.language);
  var code = createElement('code', className ? {
    className: className
  } : null, props.value);
  return createElement('pre', getCoreProps(props), code);
}

function InlineCode(props) {
  return createElement('code', getCoreProps(props), props.children);
}

function Html(props) {
  if (props.skipHtml) {
    return null;
  }

  var tag = props.isBlock ? 'div' : 'span';

  if (props.escapeHtml) {
    var comp = React.Fragment || tag;
    return createElement(comp, null, props.value);
  }

  var nodeProps = {
    dangerouslySetInnerHTML: {
      __html: props.value
    }
  };
  return createElement(tag, nodeProps);
}

function ParsedHtml(props) {
  return props['data-sourcepos'] ? React.cloneElement(props.element, {
    'data-sourcepos': props['data-sourcepos']
  }) : props.element;
}

function VirtualHtml(props) {
  return createElement(props.tag, getCoreProps(props), props.children);
}

function NullRenderer() {
  return null;
}

function getCoreProps(props) {
  return props['data-sourcepos'] ? {
    'data-sourcepos': props['data-sourcepos']
  } : {};
}

/***/ }),

/***/ "./node_modules/react-markdown/lib/symbols.js":
/*!****************************************************!*\
  !*** ./node_modules/react-markdown/lib/symbols.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var HtmlParser = '__RMD_HTML_PARSER__';
exports.HtmlParser = typeof Symbol === 'undefined' ? HtmlParser : Symbol(HtmlParser);

/***/ }),

/***/ "./node_modules/react-markdown/lib/uri-transformer.js":
/*!************************************************************!*\
  !*** ./node_modules/react-markdown/lib/uri-transformer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var protocols = ['http', 'https', 'mailto', 'tel'];

module.exports = function uriTransformer(uri) {
  var url = (uri || '').trim();
  var first = url.charAt(0);

  if (first === '#' || first === '/') {
    return url;
  }

  var colon = url.indexOf(':');

  if (colon === -1) {
    return url;
  }

  var length = protocols.length;
  var index = -1;

  while (++index < length) {
    var protocol = protocols[index];

    if (colon === protocol.length && url.slice(0, protocol.length).toLowerCase() === protocol) {
      return url;
    }
  }

  index = url.indexOf('?');

  if (index !== -1 && colon > index) {
    return url;
  }

  index = url.indexOf('#');

  if (index !== -1 && colon > index) {
    return url;
  } // eslint-disable-next-line no-script-url


  return 'javascript:void(0)';
};

/***/ }),

/***/ "./node_modules/react-markdown/lib/wrap-table-rows.js":
/*!************************************************************!*\
  !*** ./node_modules/react-markdown/lib/wrap-table-rows.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js");

module.exports = function (node) {
  visit(node, 'table', wrap);
  return node;
};

function wrap(table) {
  var children = table.children;
  table.children = [{
    type: 'tableHead',
    align: table.align,
    children: [children[0]],
    position: children[0].position
  }];

  if (children.length > 1) {
    table.children.push({
      type: 'tableBody',
      align: table.align,
      children: children.slice(1),
      position: {
        start: children[1].position.start,
        end: children[children.length - 1].position.end
      }
    });
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/index.js":
/*!********************************************!*\
  !*** ./node_modules/remark-parse/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var unherit = __webpack_require__(/*! unherit */ "./node_modules/unherit/index.js");

var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

var Parser = __webpack_require__(/*! ./lib/parser.js */ "./node_modules/remark-parse/lib/parser.js");

module.exports = parse;
parse.Parser = Parser;

function parse(options) {
  var Local = unherit(Parser);
  Local.prototype.options = xtend(Local.prototype.options, this.data('settings'), options);
  this.Parser = Local;
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/block-elements.json":
/*!***********************************************************!*\
  !*** ./node_modules/remark-parse/lib/block-elements.json ***!
  \***********************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"address\",\"article\",\"aside\",\"base\",\"basefont\",\"blockquote\",\"body\",\"caption\",\"center\",\"col\",\"colgroup\",\"dd\",\"details\",\"dialog\",\"dir\",\"div\",\"dl\",\"dt\",\"fieldset\",\"figcaption\",\"figure\",\"footer\",\"form\",\"frame\",\"frameset\",\"h1\",\"h2\",\"h3\",\"h4\",\"h5\",\"h6\",\"head\",\"header\",\"hgroup\",\"hr\",\"html\",\"iframe\",\"legend\",\"li\",\"link\",\"main\",\"menu\",\"menuitem\",\"meta\",\"nav\",\"noframes\",\"ol\",\"optgroup\",\"option\",\"p\",\"param\",\"pre\",\"section\",\"source\",\"title\",\"summary\",\"table\",\"tbody\",\"td\",\"tfoot\",\"th\",\"thead\",\"title\",\"tr\",\"track\",\"ul\"]");

/***/ }),

/***/ "./node_modules/remark-parse/lib/decode.js":
/*!*************************************************!*\
  !*** ./node_modules/remark-parse/lib/decode.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

var entities = __webpack_require__(/*! parse-entities */ "./node_modules/parse-entities/index.js");

module.exports = factory;
/* Factory to create an entity decoder. */

function factory(ctx) {
  decoder.raw = decodeRaw;
  return decoder;
  /* Normalize `position` to add an `indent`. */

  function normalize(position) {
    var offsets = ctx.offset;
    var line = position.line;
    var result = [];

    while (++line) {
      if (!(line in offsets)) {
        break;
      }

      result.push((offsets[line] || 0) + 1);
    }

    return {
      start: position,
      indent: result
    };
  }
  /* Handle a warning.
   * See https://github.com/wooorm/parse-entities
   * for the warnings. */


  function handleWarning(reason, position, code) {
    if (code === 3) {
      return;
    }

    ctx.file.message(reason, position);
  }
  /* Decode `value` (at `position`) into text-nodes. */


  function decoder(value, position, handler) {
    entities(value, {
      position: normalize(position),
      warning: handleWarning,
      text: handler,
      reference: handler,
      textContext: ctx,
      referenceContext: ctx
    });
  }
  /* Decode `value` (at `position`) into a string. */


  function decodeRaw(value, position, options) {
    return entities(value, xtend(options, {
      position: normalize(position),
      warning: handleWarning
    }));
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/defaults.js":
/*!***************************************************!*\
  !*** ./node_modules/remark-parse/lib/defaults.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  position: true,
  gfm: true,
  commonmark: false,
  footnotes: false,
  pedantic: false,
  blocks: __webpack_require__(/*! ./block-elements.json */ "./node_modules/remark-parse/lib/block-elements.json")
};

/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/break.js":
/*!*******************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/break.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  var index = value.indexOf('\n', fromIndex);

  while (index > fromIndex) {
    if (value.charAt(index - 1) !== ' ') {
      break;
    }

    index--;
  }

  return index;
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/code-inline.js":
/*!*************************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/code-inline.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('`', fromIndex);
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/delete.js":
/*!********************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/delete.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('~~', fromIndex);
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/emphasis.js":
/*!**********************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/emphasis.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  var asterisk = value.indexOf('*', fromIndex);
  var underscore = value.indexOf('_', fromIndex);

  if (underscore === -1) {
    return asterisk;
  }

  if (asterisk === -1) {
    return underscore;
  }

  return underscore < asterisk ? underscore : asterisk;
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/escape.js":
/*!********************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/escape.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('\\', fromIndex);
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/link.js":
/*!******************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/link.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  var link = value.indexOf('[', fromIndex);
  var image = value.indexOf('![', fromIndex);

  if (image === -1) {
    return link;
  }
  /* Link can never be `-1` if an image is found, so we don’t need
   * to check for that :) */


  return link < image ? link : image;
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/strong.js":
/*!********************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/strong.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  var asterisk = value.indexOf('**', fromIndex);
  var underscore = value.indexOf('__', fromIndex);

  if (underscore === -1) {
    return asterisk;
  }

  if (asterisk === -1) {
    return underscore;
  }

  return underscore < asterisk ? underscore : asterisk;
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/tag.js":
/*!*****************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/tag.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('<', fromIndex);
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/url.js":
/*!*****************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/url.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;
var PROTOCOLS = ['https://', 'http://', 'mailto:'];

function locate(value, fromIndex) {
  var length = PROTOCOLS.length;
  var index = -1;
  var min = -1;
  var position;

  if (!this.options.gfm) {
    return -1;
  }

  while (++index < length) {
    position = value.indexOf(PROTOCOLS[index], fromIndex);

    if (position !== -1 && (position < min || min === -1)) {
      min = position;
    }
  }

  return min;
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/parse.js":
/*!************************************************!*\
  !*** ./node_modules/remark-parse/lib/parse.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

var removePosition = __webpack_require__(/*! unist-util-remove-position */ "./node_modules/unist-util-remove-position/index.js");

module.exports = parse;
var C_NEWLINE = '\n';
var EXPRESSION_LINE_BREAKS = /\r\n|\r/g;
/* Parse the bound file. */

function parse() {
  var self = this;
  var value = String(self.file);
  var start = {
    line: 1,
    column: 1,
    offset: 0
  };
  var content = xtend(start);
  var node;
  /* Clean non-unix newlines: `\r\n` and `\r` are all
   * changed to `\n`.  This should not affect positional
   * information. */

  value = value.replace(EXPRESSION_LINE_BREAKS, C_NEWLINE);

  if (value.charCodeAt(0) === 0xFEFF) {
    value = value.slice(1);
    content.column++;
    content.offset++;
  }

  node = {
    type: 'root',
    children: self.tokenizeBlock(value, content),
    position: {
      start: start,
      end: self.eof || xtend(start)
    }
  };

  if (!self.options.position) {
    removePosition(node, true);
  }

  return node;
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/parser.js":
/*!*************************************************!*\
  !*** ./node_modules/remark-parse/lib/parser.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

var toggle = __webpack_require__(/*! state-toggle */ "./node_modules/state-toggle/index.js");

var vfileLocation = __webpack_require__(/*! vfile-location */ "./node_modules/vfile-location/index.js");

var unescape = __webpack_require__(/*! ./unescape */ "./node_modules/remark-parse/lib/unescape.js");

var decode = __webpack_require__(/*! ./decode */ "./node_modules/remark-parse/lib/decode.js");

var tokenizer = __webpack_require__(/*! ./tokenizer */ "./node_modules/remark-parse/lib/tokenizer.js");

module.exports = Parser;

function Parser(doc, file) {
  this.file = file;
  this.offset = {};
  this.options = xtend(this.options);
  this.setOptions({});
  this.inList = false;
  this.inBlock = false;
  this.inLink = false;
  this.atStart = true;
  this.toOffset = vfileLocation(file).toOffset;
  this.unescape = unescape(this, 'escape');
  this.decode = decode(this);
}

var proto = Parser.prototype;
/* Expose core. */

proto.setOptions = __webpack_require__(/*! ./set-options */ "./node_modules/remark-parse/lib/set-options.js");
proto.parse = __webpack_require__(/*! ./parse */ "./node_modules/remark-parse/lib/parse.js");
/* Expose `defaults`. */

proto.options = __webpack_require__(/*! ./defaults */ "./node_modules/remark-parse/lib/defaults.js");
/* Enter and exit helpers. */

proto.exitStart = toggle('atStart', true);
proto.enterList = toggle('inList', false);
proto.enterLink = toggle('inLink', false);
proto.enterBlock = toggle('inBlock', false);
/* Nodes that can interupt a paragraph:
 *
 * ```markdown
 * A paragraph, followed by a thematic break.
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the paragraph. */

proto.interruptParagraph = [['thematicBreak'], ['atxHeading'], ['fencedCode'], ['blockquote'], ['html'], ['setextHeading', {
  commonmark: false
}], ['definition', {
  commonmark: false
}], ['footnote', {
  commonmark: false
}]];
/* Nodes that can interupt a list:
 *
 * ```markdown
 * - One
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the list. */

proto.interruptList = [['atxHeading', {
  pedantic: false
}], ['fencedCode', {
  pedantic: false
}], ['thematicBreak', {
  pedantic: false
}], ['definition', {
  commonmark: false
}], ['footnote', {
  commonmark: false
}]];
/* Nodes that can interupt a blockquote:
 *
 * ```markdown
 * > A paragraph.
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the blockquote. */

proto.interruptBlockquote = [['indentedCode', {
  commonmark: true
}], ['fencedCode', {
  commonmark: true
}], ['atxHeading', {
  commonmark: true
}], ['setextHeading', {
  commonmark: true
}], ['thematicBreak', {
  commonmark: true
}], ['html', {
  commonmark: true
}], ['list', {
  commonmark: true
}], ['definition', {
  commonmark: false
}], ['footnote', {
  commonmark: false
}]];
/* Handlers. */

proto.blockTokenizers = {
  newline: __webpack_require__(/*! ./tokenize/newline */ "./node_modules/remark-parse/lib/tokenize/newline.js"),
  indentedCode: __webpack_require__(/*! ./tokenize/code-indented */ "./node_modules/remark-parse/lib/tokenize/code-indented.js"),
  fencedCode: __webpack_require__(/*! ./tokenize/code-fenced */ "./node_modules/remark-parse/lib/tokenize/code-fenced.js"),
  blockquote: __webpack_require__(/*! ./tokenize/blockquote */ "./node_modules/remark-parse/lib/tokenize/blockquote.js"),
  atxHeading: __webpack_require__(/*! ./tokenize/heading-atx */ "./node_modules/remark-parse/lib/tokenize/heading-atx.js"),
  thematicBreak: __webpack_require__(/*! ./tokenize/thematic-break */ "./node_modules/remark-parse/lib/tokenize/thematic-break.js"),
  list: __webpack_require__(/*! ./tokenize/list */ "./node_modules/remark-parse/lib/tokenize/list.js"),
  setextHeading: __webpack_require__(/*! ./tokenize/heading-setext */ "./node_modules/remark-parse/lib/tokenize/heading-setext.js"),
  html: __webpack_require__(/*! ./tokenize/html-block */ "./node_modules/remark-parse/lib/tokenize/html-block.js"),
  footnote: __webpack_require__(/*! ./tokenize/footnote-definition */ "./node_modules/remark-parse/lib/tokenize/footnote-definition.js"),
  definition: __webpack_require__(/*! ./tokenize/definition */ "./node_modules/remark-parse/lib/tokenize/definition.js"),
  table: __webpack_require__(/*! ./tokenize/table */ "./node_modules/remark-parse/lib/tokenize/table.js"),
  paragraph: __webpack_require__(/*! ./tokenize/paragraph */ "./node_modules/remark-parse/lib/tokenize/paragraph.js")
};
proto.inlineTokenizers = {
  escape: __webpack_require__(/*! ./tokenize/escape */ "./node_modules/remark-parse/lib/tokenize/escape.js"),
  autoLink: __webpack_require__(/*! ./tokenize/auto-link */ "./node_modules/remark-parse/lib/tokenize/auto-link.js"),
  url: __webpack_require__(/*! ./tokenize/url */ "./node_modules/remark-parse/lib/tokenize/url.js"),
  html: __webpack_require__(/*! ./tokenize/html-inline */ "./node_modules/remark-parse/lib/tokenize/html-inline.js"),
  link: __webpack_require__(/*! ./tokenize/link */ "./node_modules/remark-parse/lib/tokenize/link.js"),
  reference: __webpack_require__(/*! ./tokenize/reference */ "./node_modules/remark-parse/lib/tokenize/reference.js"),
  strong: __webpack_require__(/*! ./tokenize/strong */ "./node_modules/remark-parse/lib/tokenize/strong.js"),
  emphasis: __webpack_require__(/*! ./tokenize/emphasis */ "./node_modules/remark-parse/lib/tokenize/emphasis.js"),
  deletion: __webpack_require__(/*! ./tokenize/delete */ "./node_modules/remark-parse/lib/tokenize/delete.js"),
  code: __webpack_require__(/*! ./tokenize/code-inline */ "./node_modules/remark-parse/lib/tokenize/code-inline.js"),
  "break": __webpack_require__(/*! ./tokenize/break */ "./node_modules/remark-parse/lib/tokenize/break.js"),
  text: __webpack_require__(/*! ./tokenize/text */ "./node_modules/remark-parse/lib/tokenize/text.js")
};
/* Expose precedence. */

proto.blockMethods = keys(proto.blockTokenizers);
proto.inlineMethods = keys(proto.inlineTokenizers);
/* Tokenizers. */

proto.tokenizeBlock = tokenizer('block');
proto.tokenizeInline = tokenizer('inline');
proto.tokenizeFactory = tokenizer;
/* Get all keys in `value`. */

function keys(value) {
  var result = [];
  var key;

  for (key in value) {
    result.push(key);
  }

  return result;
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/set-options.js":
/*!******************************************************!*\
  !*** ./node_modules/remark-parse/lib/set-options.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

var escapes = __webpack_require__(/*! markdown-escapes */ "./node_modules/markdown-escapes/index.js");

var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/remark-parse/lib/defaults.js");

module.exports = setOptions;

function setOptions(options) {
  var self = this;
  var current = self.options;
  var key;
  var value;

  if (options == null) {
    options = {};
  } else if (_typeof(options) === 'object') {
    options = xtend(options);
  } else {
    throw new Error('Invalid value `' + options + '` ' + 'for setting `options`');
  }

  for (key in defaults) {
    value = options[key];

    if (value == null) {
      value = current[key];
    }

    if (key !== 'blocks' && typeof value !== 'boolean' || key === 'blocks' && _typeof(value) !== 'object') {
      throw new Error('Invalid value `' + value + '` for setting `options.' + key + '`');
    }

    options[key] = value;
  }

  self.options = options;
  self.escape = escapes(options);
  return self;
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/auto-link.js":
/*!*************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/auto-link.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");

var decode = __webpack_require__(/*! parse-entities */ "./node_modules/parse-entities/index.js");

var locate = __webpack_require__(/*! ../locate/tag */ "./node_modules/remark-parse/lib/locate/tag.js");

module.exports = autoLink;
autoLink.locator = locate;
autoLink.notInLink = true;
var C_LT = '<';
var C_GT = '>';
var C_AT_SIGN = '@';
var C_SLASH = '/';
var MAILTO = 'mailto:';
var MAILTO_LENGTH = MAILTO.length;
/* Tokenise a link. */

function autoLink(eat, value, silent) {
  var self;
  var subvalue;
  var length;
  var index;
  var queue;
  var character;
  var hasAtCharacter;
  var link;
  var now;
  var content;
  var tokenizers;
  var exit;

  if (value.charAt(0) !== C_LT) {
    return;
  }

  self = this;
  subvalue = '';
  length = value.length;
  index = 0;
  queue = '';
  hasAtCharacter = false;
  link = '';
  index++;
  subvalue = C_LT;

  while (index < length) {
    character = value.charAt(index);

    if (whitespace(character) || character === C_GT || character === C_AT_SIGN || character === ':' && value.charAt(index + 1) === C_SLASH) {
      break;
    }

    queue += character;
    index++;
  }

  if (!queue) {
    return;
  }

  link += queue;
  queue = '';
  character = value.charAt(index);
  link += character;
  index++;

  if (character === C_AT_SIGN) {
    hasAtCharacter = true;
  } else {
    if (character !== ':' || value.charAt(index + 1) !== C_SLASH) {
      return;
    }

    link += C_SLASH;
    index++;
  }

  while (index < length) {
    character = value.charAt(index);

    if (whitespace(character) || character === C_GT) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);

  if (!queue || character !== C_GT) {
    return;
  }
  /* istanbul ignore if - never used (yet) */


  if (silent) {
    return true;
  }

  link += queue;
  content = link;
  subvalue += link + character;
  now = eat.now();
  now.column++;
  now.offset++;

  if (hasAtCharacter) {
    if (link.slice(0, MAILTO_LENGTH).toLowerCase() === MAILTO) {
      content = content.substr(MAILTO_LENGTH);
      now.column += MAILTO_LENGTH;
      now.offset += MAILTO_LENGTH;
    } else {
      link = MAILTO + link;
    }
  }
  /* Temporarily remove all tokenizers except text in autolinks. */


  tokenizers = self.inlineTokenizers;
  self.inlineTokenizers = {
    text: tokenizers.text
  };
  exit = self.enterLink();
  content = self.tokenizeInline(content, now);
  self.inlineTokenizers = tokenizers;
  exit();
  return eat(subvalue)({
    type: 'link',
    title: null,
    url: decode(link, {
      nonTerminated: false
    }),
    children: content
  });
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/blockquote.js":
/*!**************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/blockquote.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "./node_modules/trim/index.js");

var interrupt = __webpack_require__(/*! ../util/interrupt */ "./node_modules/remark-parse/lib/util/interrupt.js");

module.exports = blockquote;
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_GT = '>';
/* Tokenise a blockquote. */

function blockquote(eat, value, silent) {
  var self = this;
  var offsets = self.offset;
  var tokenizers = self.blockTokenizers;
  var interruptors = self.interruptBlockquote;
  var now = eat.now();
  var currentLine = now.line;
  var length = value.length;
  var values = [];
  var contents = [];
  var indents = [];
  var add;
  var index = 0;
  var character;
  var rest;
  var nextIndex;
  var content;
  var line;
  var startIndex;
  var prefixed;
  var exit;

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    index++;
  }

  if (value.charAt(index) !== C_GT) {
    return;
  }

  if (silent) {
    return true;
  }

  index = 0;

  while (index < length) {
    nextIndex = value.indexOf(C_NEWLINE, index);
    startIndex = index;
    prefixed = false;

    if (nextIndex === -1) {
      nextIndex = length;
    }

    while (index < length) {
      character = value.charAt(index);

      if (character !== C_SPACE && character !== C_TAB) {
        break;
      }

      index++;
    }

    if (value.charAt(index) === C_GT) {
      index++;
      prefixed = true;

      if (value.charAt(index) === C_SPACE) {
        index++;
      }
    } else {
      index = startIndex;
    }

    content = value.slice(index, nextIndex);

    if (!prefixed && !trim(content)) {
      index = startIndex;
      break;
    }

    if (!prefixed) {
      rest = value.slice(index);
      /* Check if the following code contains a possible
       * block. */

      if (interrupt(interruptors, tokenizers, self, [eat, rest, true])) {
        break;
      }
    }

    line = startIndex === index ? content : value.slice(startIndex, nextIndex);
    indents.push(index - startIndex);
    values.push(line);
    contents.push(content);
    index = nextIndex + 1;
  }

  index = -1;
  length = indents.length;
  add = eat(values.join(C_NEWLINE));

  while (++index < length) {
    offsets[currentLine] = (offsets[currentLine] || 0) + indents[index];
    currentLine++;
  }

  exit = self.enterBlock();
  contents = self.tokenizeBlock(contents.join(C_NEWLINE), now);
  exit();
  return add({
    type: 'blockquote',
    children: contents
  });
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/break.js":
/*!*********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/break.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var locate = __webpack_require__(/*! ../locate/break */ "./node_modules/remark-parse/lib/locate/break.js");

module.exports = hardBreak;
hardBreak.locator = locate;
var MIN_BREAK_LENGTH = 2;

function hardBreak(eat, value, silent) {
  var length = value.length;
  var index = -1;
  var queue = '';
  var character;

  while (++index < length) {
    character = value.charAt(index);

    if (character === '\n') {
      if (index < MIN_BREAK_LENGTH) {
        return;
      }
      /* istanbul ignore if - never used (yet) */


      if (silent) {
        return true;
      }

      queue += character;
      return eat(queue)({
        type: 'break'
      });
    }

    if (character !== ' ') {
      return;
    }

    queue += character;
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/code-fenced.js":
/*!***************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/code-fenced.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim-trailing-lines */ "./node_modules/trim-trailing-lines/index.js");

module.exports = fencedCode;
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_TILDE = '~';
var C_TICK = '`';
var MIN_FENCE_COUNT = 3;
var CODE_INDENT_COUNT = 4;

function fencedCode(eat, value, silent) {
  var self = this;
  var settings = self.options;
  var length = value.length + 1;
  var index = 0;
  var subvalue = '';
  var fenceCount;
  var marker;
  var character;
  var flag;
  var queue;
  var content;
  var exdentedContent;
  var closing;
  var exdentedClosing;
  var indent;
  var now;

  if (!settings.gfm) {
    return;
  }
  /* Eat initial spacing. */


  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    subvalue += character;
    index++;
  }

  indent = index;
  /* Eat the fence. */

  character = value.charAt(index);

  if (character !== C_TILDE && character !== C_TICK) {
    return;
  }

  index++;
  marker = character;
  fenceCount = 1;
  subvalue += character;

  while (index < length) {
    character = value.charAt(index);

    if (character !== marker) {
      break;
    }

    subvalue += character;
    fenceCount++;
    index++;
  }

  if (fenceCount < MIN_FENCE_COUNT) {
    return;
  }
  /* Eat spacing before flag. */


  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    subvalue += character;
    index++;
  }
  /* Eat flag. */


  flag = '';
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_NEWLINE || character === C_TILDE || character === C_TICK) {
      break;
    }

    if (character === C_SPACE || character === C_TAB) {
      queue += character;
    } else {
      flag += queue + character;
      queue = '';
    }

    index++;
  }

  character = value.charAt(index);

  if (character && character !== C_NEWLINE) {
    return;
  }

  if (silent) {
    return true;
  }

  now = eat.now();
  now.column += subvalue.length;
  now.offset += subvalue.length;
  subvalue += flag;
  flag = self.decode.raw(self.unescape(flag), now);

  if (queue) {
    subvalue += queue;
  }

  queue = '';
  closing = '';
  exdentedClosing = '';
  content = '';
  exdentedContent = '';
  /* Eat content. */

  while (index < length) {
    character = value.charAt(index);
    content += closing;
    exdentedContent += exdentedClosing;
    closing = '';
    exdentedClosing = '';

    if (character !== C_NEWLINE) {
      content += character;
      exdentedClosing += character;
      index++;
      continue;
    }
    /* Add the newline to `subvalue` if its the first
     * character.  Otherwise, add it to the `closing`
     * queue. */


    if (content) {
      closing += character;
      exdentedClosing += character;
    } else {
      subvalue += character;
    }

    queue = '';
    index++;

    while (index < length) {
      character = value.charAt(index);

      if (character !== C_SPACE) {
        break;
      }

      queue += character;
      index++;
    }

    closing += queue;
    exdentedClosing += queue.slice(indent);

    if (queue.length >= CODE_INDENT_COUNT) {
      continue;
    }

    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (character !== marker) {
        break;
      }

      queue += character;
      index++;
    }

    closing += queue;
    exdentedClosing += queue;

    if (queue.length < fenceCount) {
      continue;
    }

    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (character !== C_SPACE && character !== C_TAB) {
        break;
      }

      closing += character;
      exdentedClosing += character;
      index++;
    }

    if (!character || character === C_NEWLINE) {
      break;
    }
  }

  subvalue += content + closing;
  return eat(subvalue)({
    type: 'code',
    lang: flag || null,
    value: trim(exdentedContent)
  });
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/code-indented.js":
/*!*****************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/code-indented.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js");

var trim = __webpack_require__(/*! trim-trailing-lines */ "./node_modules/trim-trailing-lines/index.js");

module.exports = indentedCode;
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var CODE_INDENT_COUNT = 4;
var CODE_INDENT = repeat(C_SPACE, CODE_INDENT_COUNT);
/* Tokenise indented code. */

function indentedCode(eat, value, silent) {
  var index = -1;
  var length = value.length;
  var subvalue = '';
  var content = '';
  var subvalueQueue = '';
  var contentQueue = '';
  var character;
  var blankQueue;
  var indent;

  while (++index < length) {
    character = value.charAt(index);

    if (indent) {
      indent = false;
      subvalue += subvalueQueue;
      content += contentQueue;
      subvalueQueue = '';
      contentQueue = '';

      if (character === C_NEWLINE) {
        subvalueQueue = character;
        contentQueue = character;
      } else {
        subvalue += character;
        content += character;

        while (++index < length) {
          character = value.charAt(index);

          if (!character || character === C_NEWLINE) {
            contentQueue = character;
            subvalueQueue = character;
            break;
          }

          subvalue += character;
          content += character;
        }
      }
    } else if (character === C_SPACE && value.charAt(index + 1) === character && value.charAt(index + 2) === character && value.charAt(index + 3) === character) {
      subvalueQueue += CODE_INDENT;
      index += 3;
      indent = true;
    } else if (character === C_TAB) {
      subvalueQueue += character;
      indent = true;
    } else {
      blankQueue = '';

      while (character === C_TAB || character === C_SPACE) {
        blankQueue += character;
        character = value.charAt(++index);
      }

      if (character !== C_NEWLINE) {
        break;
      }

      subvalueQueue += blankQueue + character;
      contentQueue += character;
    }
  }

  if (content) {
    if (silent) {
      return true;
    }

    return eat(subvalue)({
      type: 'code',
      lang: null,
      value: trim(content)
    });
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/code-inline.js":
/*!***************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/code-inline.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");

var locate = __webpack_require__(/*! ../locate/code-inline */ "./node_modules/remark-parse/lib/locate/code-inline.js");

module.exports = inlineCode;
inlineCode.locator = locate;
var C_TICK = '`';
/* Tokenise inline code. */

function inlineCode(eat, value, silent) {
  var length = value.length;
  var index = 0;
  var queue = '';
  var tickQueue = '';
  var contentQueue;
  var subqueue;
  var count;
  var openingCount;
  var subvalue;
  var character;
  var found;
  var next;

  while (index < length) {
    if (value.charAt(index) !== C_TICK) {
      break;
    }

    queue += C_TICK;
    index++;
  }

  if (!queue) {
    return;
  }

  subvalue = queue;
  openingCount = index;
  queue = '';
  next = value.charAt(index);
  count = 0;

  while (index < length) {
    character = next;
    next = value.charAt(index + 1);

    if (character === C_TICK) {
      count++;
      tickQueue += character;
    } else {
      count = 0;
      queue += character;
    }

    if (count && next !== C_TICK) {
      if (count === openingCount) {
        subvalue += queue + tickQueue;
        found = true;
        break;
      }

      queue += tickQueue;
      tickQueue = '';
    }

    index++;
  }

  if (!found) {
    if (openingCount % 2 !== 0) {
      return;
    }

    queue = '';
  }
  /* istanbul ignore if - never used (yet) */


  if (silent) {
    return true;
  }

  contentQueue = '';
  subqueue = '';
  length = queue.length;
  index = -1;

  while (++index < length) {
    character = queue.charAt(index);

    if (whitespace(character)) {
      subqueue += character;
      continue;
    }

    if (subqueue) {
      if (contentQueue) {
        contentQueue += subqueue;
      }

      subqueue = '';
    }

    contentQueue += character;
  }

  return eat(subvalue)({
    type: 'inlineCode',
    value: contentQueue
  });
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/definition.js":
/*!**************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/definition.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");

var normalize = __webpack_require__(/*! ../util/normalize */ "./node_modules/remark-parse/lib/util/normalize.js");

module.exports = definition;
definition.notInList = true;
definition.notInBlock = true;
var C_DOUBLE_QUOTE = '"';
var C_SINGLE_QUOTE = '\'';
var C_BACKSLASH = '\\';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_COLON = ':';
var C_LT = '<';
var C_GT = '>';

function definition(eat, value, silent) {
  var self = this;
  var commonmark = self.options.commonmark;
  var index = 0;
  var length = value.length;
  var subvalue = '';
  var beforeURL;
  var beforeTitle;
  var queue;
  var character;
  var test;
  var identifier;
  var url;
  var title;

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    subvalue += character;
    index++;
  }

  character = value.charAt(index);

  if (character !== C_BRACKET_OPEN) {
    return;
  }

  index++;
  subvalue += character;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_BRACKET_CLOSE) {
      break;
    } else if (character === C_BACKSLASH) {
      queue += character;
      index++;
      character = value.charAt(index);
    }

    queue += character;
    index++;
  }

  if (!queue || value.charAt(index) !== C_BRACKET_CLOSE || value.charAt(index + 1) !== C_COLON) {
    return;
  }

  identifier = queue;
  subvalue += queue + C_BRACKET_CLOSE + C_COLON;
  index = subvalue.length;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE && character !== C_NEWLINE) {
      break;
    }

    subvalue += character;
    index++;
  }

  character = value.charAt(index);
  queue = '';
  beforeURL = subvalue;

  if (character === C_LT) {
    index++;

    while (index < length) {
      character = value.charAt(index);

      if (!isEnclosedURLCharacter(character)) {
        break;
      }

      queue += character;
      index++;
    }

    character = value.charAt(index);

    if (character === isEnclosedURLCharacter.delimiter) {
      subvalue += C_LT + queue + character;
      index++;
    } else {
      if (commonmark) {
        return;
      }

      index -= queue.length + 1;
      queue = '';
    }
  }

  if (!queue) {
    while (index < length) {
      character = value.charAt(index);

      if (!isUnclosedURLCharacter(character)) {
        break;
      }

      queue += character;
      index++;
    }

    subvalue += queue;
  }

  if (!queue) {
    return;
  }

  url = queue;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE && character !== C_NEWLINE) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);
  test = null;

  if (character === C_DOUBLE_QUOTE) {
    test = C_DOUBLE_QUOTE;
  } else if (character === C_SINGLE_QUOTE) {
    test = C_SINGLE_QUOTE;
  } else if (character === C_PAREN_OPEN) {
    test = C_PAREN_CLOSE;
  }

  if (!test) {
    queue = '';
    index = subvalue.length;
  } else if (queue) {
    subvalue += queue + character;
    index = subvalue.length;
    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (character === test) {
        break;
      }

      if (character === C_NEWLINE) {
        index++;
        character = value.charAt(index);

        if (character === C_NEWLINE || character === test) {
          return;
        }

        queue += C_NEWLINE;
      }

      queue += character;
      index++;
    }

    character = value.charAt(index);

    if (character !== test) {
      return;
    }

    beforeTitle = subvalue;
    subvalue += queue + character;
    index++;
    title = queue;
    queue = '';
  } else {
    return;
  }

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    subvalue += character;
    index++;
  }

  character = value.charAt(index);

  if (!character || character === C_NEWLINE) {
    if (silent) {
      return true;
    }

    beforeURL = eat(beforeURL).test().end;
    url = self.decode.raw(self.unescape(url), beforeURL, {
      nonTerminated: false
    });

    if (title) {
      beforeTitle = eat(beforeTitle).test().end;
      title = self.decode.raw(self.unescape(title), beforeTitle);
    }

    return eat(subvalue)({
      type: 'definition',
      identifier: normalize(identifier),
      title: title || null,
      url: url
    });
  }
}
/* Check if `character` can be inside an enclosed URI. */


function isEnclosedURLCharacter(character) {
  return character !== C_GT && character !== C_BRACKET_OPEN && character !== C_BRACKET_CLOSE;
}

isEnclosedURLCharacter.delimiter = C_GT;
/* Check if `character` can be inside an unclosed URI. */

function isUnclosedURLCharacter(character) {
  return character !== C_BRACKET_OPEN && character !== C_BRACKET_CLOSE && !whitespace(character);
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/delete.js":
/*!**********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/delete.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");

var locate = __webpack_require__(/*! ../locate/delete */ "./node_modules/remark-parse/lib/locate/delete.js");

module.exports = strikethrough;
strikethrough.locator = locate;
var C_TILDE = '~';
var DOUBLE = '~~';

function strikethrough(eat, value, silent) {
  var self = this;
  var character = '';
  var previous = '';
  var preceding = '';
  var subvalue = '';
  var index;
  var length;
  var now;

  if (!self.options.gfm || value.charAt(0) !== C_TILDE || value.charAt(1) !== C_TILDE || whitespace(value.charAt(2))) {
    return;
  }

  index = 1;
  length = value.length;
  now = eat.now();
  now.column += 2;
  now.offset += 2;

  while (++index < length) {
    character = value.charAt(index);

    if (character === C_TILDE && previous === C_TILDE && (!preceding || !whitespace(preceding))) {
      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true;
      }

      return eat(DOUBLE + subvalue + DOUBLE)({
        type: 'delete',
        children: self.tokenizeInline(subvalue, now)
      });
    }

    subvalue += previous;
    preceding = previous;
    previous = character;
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/emphasis.js":
/*!************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/emphasis.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "./node_modules/trim/index.js");

var word = __webpack_require__(/*! is-word-character */ "./node_modules/is-word-character/index.js");

var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");

var locate = __webpack_require__(/*! ../locate/emphasis */ "./node_modules/remark-parse/lib/locate/emphasis.js");

module.exports = emphasis;
emphasis.locator = locate;
var C_ASTERISK = '*';
var C_UNDERSCORE = '_';

function emphasis(eat, value, silent) {
  var self = this;
  var index = 0;
  var character = value.charAt(index);
  var now;
  var pedantic;
  var marker;
  var queue;
  var subvalue;
  var length;
  var prev;

  if (character !== C_ASTERISK && character !== C_UNDERSCORE) {
    return;
  }

  pedantic = self.options.pedantic;
  subvalue = character;
  marker = character;
  length = value.length;
  index++;
  queue = '';
  character = '';

  if (pedantic && whitespace(value.charAt(index))) {
    return;
  }

  while (index < length) {
    prev = character;
    character = value.charAt(index);

    if (character === marker && (!pedantic || !whitespace(prev))) {
      character = value.charAt(++index);

      if (character !== marker) {
        if (!trim(queue) || prev === marker) {
          return;
        }

        if (!pedantic && marker === C_UNDERSCORE && word(character)) {
          queue += marker;
          continue;
        }
        /* istanbul ignore if - never used (yet) */


        if (silent) {
          return true;
        }

        now = eat.now();
        now.column++;
        now.offset++;
        return eat(subvalue + queue + marker)({
          type: 'emphasis',
          children: self.tokenizeInline(queue, now)
        });
      }

      queue += marker;
    }

    if (!pedantic && character === '\\') {
      queue += character;
      character = value.charAt(++index);
    }

    queue += character;
    index++;
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/escape.js":
/*!**********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/escape.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var locate = __webpack_require__(/*! ../locate/escape */ "./node_modules/remark-parse/lib/locate/escape.js");

module.exports = escape;
escape.locator = locate;

function escape(eat, value, silent) {
  var self = this;
  var character;
  var node;

  if (value.charAt(0) === '\\') {
    character = value.charAt(1);

    if (self.escape.indexOf(character) !== -1) {
      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true;
      }

      if (character === '\n') {
        node = {
          type: 'break'
        };
      } else {
        node = {
          type: 'text',
          value: character
        };
      }

      return eat('\\' + character)(node);
    }
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/footnote-definition.js":
/*!***********************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/footnote-definition.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");

var normalize = __webpack_require__(/*! ../util/normalize */ "./node_modules/remark-parse/lib/util/normalize.js");

module.exports = footnoteDefinition;
footnoteDefinition.notInList = true;
footnoteDefinition.notInBlock = true;
var C_BACKSLASH = '\\';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_CARET = '^';
var C_COLON = ':';
var EXPRESSION_INITIAL_TAB = /^( {4}|\t)?/gm;

function footnoteDefinition(eat, value, silent) {
  var self = this;
  var offsets = self.offset;
  var index;
  var length;
  var subvalue;
  var now;
  var currentLine;
  var content;
  var queue;
  var subqueue;
  var character;
  var identifier;
  var add;
  var exit;

  if (!self.options.footnotes) {
    return;
  }

  index = 0;
  length = value.length;
  subvalue = '';
  now = eat.now();
  currentLine = now.line;

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    subvalue += character;
    index++;
  }

  if (value.charAt(index) !== C_BRACKET_OPEN || value.charAt(index + 1) !== C_CARET) {
    return;
  }

  subvalue += C_BRACKET_OPEN + C_CARET;
  index = subvalue.length;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_BRACKET_CLOSE) {
      break;
    } else if (character === C_BACKSLASH) {
      queue += character;
      index++;
      character = value.charAt(index);
    }

    queue += character;
    index++;
  }

  if (!queue || value.charAt(index) !== C_BRACKET_CLOSE || value.charAt(index + 1) !== C_COLON) {
    return;
  }

  if (silent) {
    return true;
  }

  identifier = normalize(queue);
  subvalue += queue + C_BRACKET_CLOSE + C_COLON;
  index = subvalue.length;

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    subvalue += character;
    index++;
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  queue = '';
  content = '';
  subqueue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_NEWLINE) {
      subqueue = character;
      index++;

      while (index < length) {
        character = value.charAt(index);

        if (character !== C_NEWLINE) {
          break;
        }

        subqueue += character;
        index++;
      }

      queue += subqueue;
      subqueue = '';

      while (index < length) {
        character = value.charAt(index);

        if (character !== C_SPACE) {
          break;
        }

        subqueue += character;
        index++;
      }

      if (subqueue.length === 0) {
        break;
      }

      queue += subqueue;
    }

    if (queue) {
      content += queue;
      queue = '';
    }

    content += character;
    index++;
  }

  subvalue += content;
  content = content.replace(EXPRESSION_INITIAL_TAB, function (line) {
    offsets[currentLine] = (offsets[currentLine] || 0) + line.length;
    currentLine++;
    return '';
  });
  add = eat(subvalue);
  exit = self.enterBlock();
  content = self.tokenizeBlock(content, now);
  exit();
  return add({
    type: 'footnoteDefinition',
    identifier: identifier,
    children: content
  });
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/heading-atx.js":
/*!***************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/heading-atx.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = atxHeading;
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_HASH = '#';
var MAX_ATX_COUNT = 6;

function atxHeading(eat, value, silent) {
  var self = this;
  var settings = self.options;
  var length = value.length + 1;
  var index = -1;
  var now = eat.now();
  var subvalue = '';
  var content = '';
  var character;
  var queue;
  var depth;
  /* Eat initial spacing. */

  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      index--;
      break;
    }

    subvalue += character;
  }
  /* Eat hashes. */


  depth = 0;

  while (++index <= length) {
    character = value.charAt(index);

    if (character !== C_HASH) {
      index--;
      break;
    }

    subvalue += character;
    depth++;
  }

  if (depth > MAX_ATX_COUNT) {
    return;
  }

  if (!depth || !settings.pedantic && value.charAt(index + 1) === C_HASH) {
    return;
  }

  length = value.length + 1;
  /* Eat intermediate white-space. */

  queue = '';

  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      index--;
      break;
    }

    queue += character;
  }
  /* Exit when not in pedantic mode without spacing. */


  if (!settings.pedantic && queue.length === 0 && character && character !== C_NEWLINE) {
    return;
  }

  if (silent) {
    return true;
  }
  /* Eat content. */


  subvalue += queue;
  queue = '';
  content = '';

  while (++index < length) {
    character = value.charAt(index);

    if (!character || character === C_NEWLINE) {
      break;
    }

    if (character !== C_SPACE && character !== C_TAB && character !== C_HASH) {
      content += queue + character;
      queue = '';
      continue;
    }

    while (character === C_SPACE || character === C_TAB) {
      queue += character;
      character = value.charAt(++index);
    }

    while (character === C_HASH) {
      queue += character;
      character = value.charAt(++index);
    }

    while (character === C_SPACE || character === C_TAB) {
      queue += character;
      character = value.charAt(++index);
    }

    index--;
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  subvalue += content + queue;
  return eat(subvalue)({
    type: 'heading',
    depth: depth,
    children: self.tokenizeInline(content, now)
  });
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/heading-setext.js":
/*!******************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/heading-setext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = setextHeading;
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_EQUALS = '=';
var C_DASH = '-';
var MAX_HEADING_INDENT = 3;
/* Map of characters which can be used to mark setext
 * headers, mapping to their corresponding depth. */

var SETEXT_MARKERS = {};
SETEXT_MARKERS[C_EQUALS] = 1;
SETEXT_MARKERS[C_DASH] = 2;

function setextHeading(eat, value, silent) {
  var self = this;
  var now = eat.now();
  var length = value.length;
  var index = -1;
  var subvalue = '';
  var content;
  var queue;
  var character;
  var marker;
  var depth;
  /* Eat initial indentation. */

  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE || index >= MAX_HEADING_INDENT) {
      index--;
      break;
    }

    subvalue += character;
  }
  /* Eat content. */


  content = '';
  queue = '';

  while (++index < length) {
    character = value.charAt(index);

    if (character === C_NEWLINE) {
      index--;
      break;
    }

    if (character === C_SPACE || character === C_TAB) {
      queue += character;
    } else {
      content += queue + character;
      queue = '';
    }
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  subvalue += content + queue;
  /* Ensure the content is followed by a newline and a
   * valid marker. */

  character = value.charAt(++index);
  marker = value.charAt(++index);

  if (character !== C_NEWLINE || !SETEXT_MARKERS[marker]) {
    return;
  }

  subvalue += character;
  /* Eat Setext-line. */

  queue = marker;
  depth = SETEXT_MARKERS[marker];

  while (++index < length) {
    character = value.charAt(index);

    if (character !== marker) {
      if (character !== C_NEWLINE) {
        return;
      }

      index--;
      break;
    }

    queue += character;
  }

  if (silent) {
    return true;
  }

  return eat(subvalue + queue)({
    type: 'heading',
    depth: depth,
    children: self.tokenizeInline(content, now)
  });
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/html-block.js":
/*!**************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/html-block.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var openCloseTag = __webpack_require__(/*! ../util/html */ "./node_modules/remark-parse/lib/util/html.js").openCloseTag;

module.exports = blockHTML;
var C_TAB = '\t';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_LT = '<';

function blockHTML(eat, value, silent) {
  var self = this;
  var blocks = self.options.blocks;
  var length = value.length;
  var index = 0;
  var next;
  var line;
  var offset;
  var character;
  var count;
  var sequence;
  var subvalue;
  var sequences = [[/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, true], [/^<!--/, /-->/, true], [/^<\?/, /\?>/, true], [/^<![A-Za-z]/, />/, true], [/^<!\[CDATA\[/, /\]\]>/, true], [new RegExp('^</?(' + blocks.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true], [new RegExp(openCloseTag.source + '\\s*$'), /^$/, false]];
  /* Eat initial spacing. */

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    index++;
  }

  if (value.charAt(index) !== C_LT) {
    return;
  }

  next = value.indexOf(C_NEWLINE, index + 1);
  next = next === -1 ? length : next;
  line = value.slice(index, next);
  offset = -1;
  count = sequences.length;

  while (++offset < count) {
    if (sequences[offset][0].test(line)) {
      sequence = sequences[offset];
      break;
    }
  }

  if (!sequence) {
    return;
  }

  if (silent) {
    return sequence[2];
  }

  index = next;

  if (!sequence[1].test(line)) {
    while (index < length) {
      next = value.indexOf(C_NEWLINE, index + 1);
      next = next === -1 ? length : next;
      line = value.slice(index + 1, next);

      if (sequence[1].test(line)) {
        if (line) {
          index = next;
        }

        break;
      }

      index = next;
    }
  }

  subvalue = value.slice(0, index);
  return eat(subvalue)({
    type: 'html',
    value: subvalue
  });
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/html-inline.js":
/*!***************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/html-inline.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabetical = __webpack_require__(/*! is-alphabetical */ "./node_modules/is-alphabetical/index.js");

var locate = __webpack_require__(/*! ../locate/tag */ "./node_modules/remark-parse/lib/locate/tag.js");

var tag = __webpack_require__(/*! ../util/html */ "./node_modules/remark-parse/lib/util/html.js").tag;

module.exports = inlineHTML;
inlineHTML.locator = locate;
var EXPRESSION_HTML_LINK_OPEN = /^<a /i;
var EXPRESSION_HTML_LINK_CLOSE = /^<\/a>/i;

function inlineHTML(eat, value, silent) {
  var self = this;
  var length = value.length;
  var character;
  var subvalue;

  if (value.charAt(0) !== '<' || length < 3) {
    return;
  }

  character = value.charAt(1);

  if (!alphabetical(character) && character !== '?' && character !== '!' && character !== '/') {
    return;
  }

  subvalue = value.match(tag);

  if (!subvalue) {
    return;
  }
  /* istanbul ignore if - not used yet. */


  if (silent) {
    return true;
  }

  subvalue = subvalue[0];

  if (!self.inLink && EXPRESSION_HTML_LINK_OPEN.test(subvalue)) {
    self.inLink = true;
  } else if (self.inLink && EXPRESSION_HTML_LINK_CLOSE.test(subvalue)) {
    self.inLink = false;
  }

  return eat(subvalue)({
    type: 'html',
    value: subvalue
  });
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/link.js":
/*!********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/link.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");

var locate = __webpack_require__(/*! ../locate/link */ "./node_modules/remark-parse/lib/locate/link.js");

module.exports = link;
link.locator = locate;
var own = {}.hasOwnProperty;
var C_BACKSLASH = '\\';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_LT = '<';
var C_GT = '>';
var C_TICK = '`';
var C_DOUBLE_QUOTE = '"';
var C_SINGLE_QUOTE = '\'';
/* Map of characters, which can be used to mark link
 * and image titles. */

var LINK_MARKERS = {};
LINK_MARKERS[C_DOUBLE_QUOTE] = C_DOUBLE_QUOTE;
LINK_MARKERS[C_SINGLE_QUOTE] = C_SINGLE_QUOTE;
/* Map of characters, which can be used to mark link
 * and image titles in commonmark-mode. */

var COMMONMARK_LINK_MARKERS = {};
COMMONMARK_LINK_MARKERS[C_DOUBLE_QUOTE] = C_DOUBLE_QUOTE;
COMMONMARK_LINK_MARKERS[C_SINGLE_QUOTE] = C_SINGLE_QUOTE;
COMMONMARK_LINK_MARKERS[C_PAREN_OPEN] = C_PAREN_CLOSE;

function link(eat, value, silent) {
  var self = this;
  var subvalue = '';
  var index = 0;
  var character = value.charAt(0);
  var pedantic = self.options.pedantic;
  var commonmark = self.options.commonmark;
  var gfm = self.options.gfm;
  var closed;
  var count;
  var opening;
  var beforeURL;
  var beforeTitle;
  var subqueue;
  var hasMarker;
  var markers;
  var isImage;
  var content;
  var marker;
  var length;
  var title;
  var depth;
  var queue;
  var url;
  var now;
  var exit;
  var node;
  /* Detect whether this is an image. */

  if (character === '!') {
    isImage = true;
    subvalue = character;
    character = value.charAt(++index);
  }
  /* Eat the opening. */


  if (character !== C_BRACKET_OPEN) {
    return;
  }
  /* Exit when this is a link and we’re already inside
   * a link. */


  if (!isImage && self.inLink) {
    return;
  }

  subvalue += character;
  queue = '';
  index++;
  /* Eat the content. */

  length = value.length;
  now = eat.now();
  depth = 0;
  now.column += index;
  now.offset += index;

  while (index < length) {
    character = value.charAt(index);
    subqueue = character;

    if (character === C_TICK) {
      /* Inline-code in link content. */
      count = 1;

      while (value.charAt(index + 1) === C_TICK) {
        subqueue += character;
        index++;
        count++;
      }

      if (!opening) {
        opening = count;
      } else if (count >= opening) {
        opening = 0;
      }
    } else if (character === C_BACKSLASH) {
      /* Allow brackets to be escaped. */
      index++;
      subqueue += value.charAt(index);
      /* In GFM mode, brackets in code still count.
       * In all other modes, they don’t.  This empty
       * block prevents the next statements are
       * entered. */
    } else if ((!opening || gfm) && character === C_BRACKET_OPEN) {
      depth++;
    } else if ((!opening || gfm) && character === C_BRACKET_CLOSE) {
      if (depth) {
        depth--;
      } else {
        /* Allow white-space between content and
         * url in GFM mode. */
        if (!pedantic) {
          while (index < length) {
            character = value.charAt(index + 1);

            if (!whitespace(character)) {
              break;
            }

            subqueue += character;
            index++;
          }
        }

        if (value.charAt(index + 1) !== C_PAREN_OPEN) {
          return;
        }

        subqueue += C_PAREN_OPEN;
        closed = true;
        index++;
        break;
      }
    }

    queue += subqueue;
    subqueue = '';
    index++;
  }
  /* Eat the content closing. */


  if (!closed) {
    return;
  }

  content = queue;
  subvalue += queue + subqueue;
  index++;
  /* Eat white-space. */

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    subvalue += character;
    index++;
  }
  /* Eat the URL. */


  character = value.charAt(index);
  markers = commonmark ? COMMONMARK_LINK_MARKERS : LINK_MARKERS;
  queue = '';
  beforeURL = subvalue;

  if (character === C_LT) {
    index++;
    beforeURL += C_LT;

    while (index < length) {
      character = value.charAt(index);

      if (character === C_GT) {
        break;
      }

      if (commonmark && character === '\n') {
        return;
      }

      queue += character;
      index++;
    }

    if (value.charAt(index) !== C_GT) {
      return;
    }

    subvalue += C_LT + queue + C_GT;
    url = queue;
    index++;
  } else {
    character = null;
    subqueue = '';

    while (index < length) {
      character = value.charAt(index);

      if (subqueue && own.call(markers, character)) {
        break;
      }

      if (whitespace(character)) {
        if (!pedantic) {
          break;
        }

        subqueue += character;
      } else {
        if (character === C_PAREN_OPEN) {
          depth++;
        } else if (character === C_PAREN_CLOSE) {
          if (depth === 0) {
            break;
          }

          depth--;
        }

        queue += subqueue;
        subqueue = '';

        if (character === C_BACKSLASH) {
          queue += C_BACKSLASH;
          character = value.charAt(++index);
        }

        queue += character;
      }

      index++;
    }

    subvalue += queue;
    url = queue;
    index = subvalue.length;
  }
  /* Eat white-space. */


  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);
  subvalue += queue;
  /* Eat the title. */

  if (queue && own.call(markers, character)) {
    index++;
    subvalue += character;
    queue = '';
    marker = markers[character];
    beforeTitle = subvalue;
    /* In commonmark-mode, things are pretty easy: the
     * marker cannot occur inside the title.
     *
     * Non-commonmark does, however, support nested
     * delimiters. */

    if (commonmark) {
      while (index < length) {
        character = value.charAt(index);

        if (character === marker) {
          break;
        }

        if (character === C_BACKSLASH) {
          queue += C_BACKSLASH;
          character = value.charAt(++index);
        }

        index++;
        queue += character;
      }

      character = value.charAt(index);

      if (character !== marker) {
        return;
      }

      title = queue;
      subvalue += queue + character;
      index++;

      while (index < length) {
        character = value.charAt(index);

        if (!whitespace(character)) {
          break;
        }

        subvalue += character;
        index++;
      }
    } else {
      subqueue = '';

      while (index < length) {
        character = value.charAt(index);

        if (character === marker) {
          if (hasMarker) {
            queue += marker + subqueue;
            subqueue = '';
          }

          hasMarker = true;
        } else if (!hasMarker) {
          queue += character;
        } else if (character === C_PAREN_CLOSE) {
          subvalue += queue + marker + subqueue;
          title = queue;
          break;
        } else if (whitespace(character)) {
          subqueue += character;
        } else {
          queue += marker + subqueue + character;
          subqueue = '';
          hasMarker = false;
        }

        index++;
      }
    }
  }

  if (value.charAt(index) !== C_PAREN_CLOSE) {
    return;
  }
  /* istanbul ignore if - never used (yet) */


  if (silent) {
    return true;
  }

  subvalue += C_PAREN_CLOSE;
  url = self.decode.raw(self.unescape(url), eat(beforeURL).test().end, {
    nonTerminated: false
  });

  if (title) {
    beforeTitle = eat(beforeTitle).test().end;
    title = self.decode.raw(self.unescape(title), beforeTitle);
  }

  node = {
    type: isImage ? 'image' : 'link',
    title: title || null,
    url: url
  };

  if (isImage) {
    node.alt = self.decode.raw(self.unescape(content), now) || null;
  } else {
    exit = self.enterLink();
    node.children = self.tokenizeInline(content, now);
    exit();
  }

  return eat(subvalue)(node);
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/list.js":
/*!********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/list.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable max-params */

var trim = __webpack_require__(/*! trim */ "./node_modules/trim/index.js");

var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js");

var decimal = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js");

var getIndent = __webpack_require__(/*! ../util/get-indentation */ "./node_modules/remark-parse/lib/util/get-indentation.js");

var removeIndent = __webpack_require__(/*! ../util/remove-indentation */ "./node_modules/remark-parse/lib/util/remove-indentation.js");

var interrupt = __webpack_require__(/*! ../util/interrupt */ "./node_modules/remark-parse/lib/util/interrupt.js");

module.exports = list;
var C_ASTERISK = '*';
var C_UNDERSCORE = '_';
var C_PLUS = '+';
var C_DASH = '-';
var C_DOT = '.';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_PAREN_CLOSE = ')';
var C_X_LOWER = 'x';
var TAB_SIZE = 4;
var EXPRESSION_LOOSE_LIST_ITEM = /\n\n(?!\s*$)/;
var EXPRESSION_TASK_ITEM = /^\[([ \t]|x|X)][ \t]/;
var EXPRESSION_BULLET = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/;
var EXPRESSION_PEDANTIC_BULLET = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/;
var EXPRESSION_INITIAL_INDENT = /^( {1,4}|\t)?/gm;
/* Map of characters which can be used to mark
 * list-items. */

var LIST_UNORDERED_MARKERS = {};
LIST_UNORDERED_MARKERS[C_ASTERISK] = true;
LIST_UNORDERED_MARKERS[C_PLUS] = true;
LIST_UNORDERED_MARKERS[C_DASH] = true;
/* Map of characters which can be used to mark
 * list-items after a digit. */

var LIST_ORDERED_MARKERS = {};
LIST_ORDERED_MARKERS[C_DOT] = true;
/* Map of characters which can be used to mark
 * list-items after a digit. */

var LIST_ORDERED_COMMONMARK_MARKERS = {};
LIST_ORDERED_COMMONMARK_MARKERS[C_DOT] = true;
LIST_ORDERED_COMMONMARK_MARKERS[C_PAREN_CLOSE] = true;

function list(eat, value, silent) {
  var self = this;
  var commonmark = self.options.commonmark;
  var pedantic = self.options.pedantic;
  var tokenizers = self.blockTokenizers;
  var interuptors = self.interruptList;
  var markers;
  var index = 0;
  var length = value.length;
  var start = null;
  var size = 0;
  var queue;
  var ordered;
  var character;
  var marker;
  var nextIndex;
  var startIndex;
  var prefixed;
  var currentMarker;
  var content;
  var line;
  var prevEmpty;
  var empty;
  var items;
  var allLines;
  var emptyLines;
  var item;
  var enterTop;
  var exitBlockquote;
  var isLoose;
  var node;
  var now;
  var end;
  var indented;

  while (index < length) {
    character = value.charAt(index);

    if (character === C_TAB) {
      size += TAB_SIZE - size % TAB_SIZE;
    } else if (character === C_SPACE) {
      size++;
    } else {
      break;
    }

    index++;
  }

  if (size >= TAB_SIZE) {
    return;
  }

  character = value.charAt(index);
  markers = commonmark ? LIST_ORDERED_COMMONMARK_MARKERS : LIST_ORDERED_MARKERS;

  if (LIST_UNORDERED_MARKERS[character] === true) {
    marker = character;
    ordered = false;
  } else {
    ordered = true;
    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (!decimal(character)) {
        break;
      }

      queue += character;
      index++;
    }

    character = value.charAt(index);

    if (!queue || markers[character] !== true) {
      return;
    }

    start = parseInt(queue, 10);
    marker = character;
  }

  character = value.charAt(++index);

  if (character !== C_SPACE && character !== C_TAB) {
    return;
  }

  if (silent) {
    return true;
  }

  index = 0;
  items = [];
  allLines = [];
  emptyLines = [];

  while (index < length) {
    nextIndex = value.indexOf(C_NEWLINE, index);
    startIndex = index;
    prefixed = false;
    indented = false;

    if (nextIndex === -1) {
      nextIndex = length;
    }

    end = index + TAB_SIZE;
    size = 0;

    while (index < length) {
      character = value.charAt(index);

      if (character === C_TAB) {
        size += TAB_SIZE - size % TAB_SIZE;
      } else if (character === C_SPACE) {
        size++;
      } else {
        break;
      }

      index++;
    }

    if (size >= TAB_SIZE) {
      indented = true;
    }

    if (item && size >= item.indent) {
      indented = true;
    }

    character = value.charAt(index);
    currentMarker = null;

    if (!indented) {
      if (LIST_UNORDERED_MARKERS[character] === true) {
        currentMarker = character;
        index++;
        size++;
      } else {
        queue = '';

        while (index < length) {
          character = value.charAt(index);

          if (!decimal(character)) {
            break;
          }

          queue += character;
          index++;
        }

        character = value.charAt(index);
        index++;

        if (queue && markers[character] === true) {
          currentMarker = character;
          size += queue.length + 1;
        }
      }

      if (currentMarker) {
        character = value.charAt(index);

        if (character === C_TAB) {
          size += TAB_SIZE - size % TAB_SIZE;
          index++;
        } else if (character === C_SPACE) {
          end = index + TAB_SIZE;

          while (index < end) {
            if (value.charAt(index) !== C_SPACE) {
              break;
            }

            index++;
            size++;
          }

          if (index === end && value.charAt(index) === C_SPACE) {
            index -= TAB_SIZE - 1;
            size -= TAB_SIZE - 1;
          }
        } else if (character !== C_NEWLINE && character !== '') {
          currentMarker = null;
        }
      }
    }

    if (currentMarker) {
      if (!pedantic && marker !== currentMarker) {
        break;
      }

      prefixed = true;
    } else {
      if (!commonmark && !indented && value.charAt(startIndex) === C_SPACE) {
        indented = true;
      } else if (commonmark && item) {
        indented = size >= item.indent || size > TAB_SIZE;
      }

      prefixed = false;
      index = startIndex;
    }

    line = value.slice(startIndex, nextIndex);
    content = startIndex === index ? line : value.slice(index, nextIndex);

    if (currentMarker === C_ASTERISK || currentMarker === C_UNDERSCORE || currentMarker === C_DASH) {
      if (tokenizers.thematicBreak.call(self, eat, line, true)) {
        break;
      }
    }

    prevEmpty = empty;
    empty = !trim(content).length;

    if (indented && item) {
      item.value = item.value.concat(emptyLines, line);
      allLines = allLines.concat(emptyLines, line);
      emptyLines = [];
    } else if (prefixed) {
      if (emptyLines.length !== 0) {
        item.value.push('');
        item.trail = emptyLines.concat();
      }

      item = {
        value: [line],
        indent: size,
        trail: []
      };
      items.push(item);
      allLines = allLines.concat(emptyLines, line);
      emptyLines = [];
    } else if (empty) {
      if (prevEmpty) {
        break;
      }

      emptyLines.push(line);
    } else {
      if (prevEmpty) {
        break;
      }

      if (interrupt(interuptors, tokenizers, self, [eat, line, true])) {
        break;
      }

      item.value = item.value.concat(emptyLines, line);
      allLines = allLines.concat(emptyLines, line);
      emptyLines = [];
    }

    index = nextIndex + 1;
  }

  node = eat(allLines.join(C_NEWLINE)).reset({
    type: 'list',
    ordered: ordered,
    start: start,
    loose: null,
    children: []
  });
  enterTop = self.enterList();
  exitBlockquote = self.enterBlock();
  isLoose = false;
  index = -1;
  length = items.length;

  while (++index < length) {
    item = items[index].value.join(C_NEWLINE);
    now = eat.now();
    item = eat(item)(listItem(self, item, now), node);

    if (item.loose) {
      isLoose = true;
    }

    item = items[index].trail.join(C_NEWLINE);

    if (index !== length - 1) {
      item += C_NEWLINE;
    }

    eat(item);
  }

  enterTop();
  exitBlockquote();
  node.loose = isLoose;
  return node;
}

function listItem(ctx, value, position) {
  var offsets = ctx.offset;
  var fn = ctx.options.pedantic ? pedanticListItem : normalListItem;
  var checked = null;
  var task;
  var indent;
  value = fn.apply(null, arguments);

  if (ctx.options.gfm) {
    task = value.match(EXPRESSION_TASK_ITEM);

    if (task) {
      indent = task[0].length;
      checked = task[1].toLowerCase() === C_X_LOWER;
      offsets[position.line] += indent;
      value = value.slice(indent);
    }
  }

  return {
    type: 'listItem',
    loose: EXPRESSION_LOOSE_LIST_ITEM.test(value) || value.charAt(value.length - 1) === C_NEWLINE,
    checked: checked,
    children: ctx.tokenizeBlock(value, position)
  };
}
/* Create a list-item using overly simple mechanics. */


function pedanticListItem(ctx, value, position) {
  var offsets = ctx.offset;
  var line = position.line;
  /* Remove the list-item’s bullet. */

  value = value.replace(EXPRESSION_PEDANTIC_BULLET, replacer);
  /* The initial line was also matched by the below, so
   * we reset the `line`. */

  line = position.line;
  return value.replace(EXPRESSION_INITIAL_INDENT, replacer);
  /* A simple replacer which removed all matches,
   * and adds their length to `offset`. */

  function replacer($0) {
    offsets[line] = (offsets[line] || 0) + $0.length;
    line++;
    return '';
  }
}
/* Create a list-item using sane mechanics. */


function normalListItem(ctx, value, position) {
  var offsets = ctx.offset;
  var line = position.line;
  var max;
  var bullet;
  var rest;
  var lines;
  var trimmedLines;
  var index;
  var length;
  /* Remove the list-item’s bullet. */

  value = value.replace(EXPRESSION_BULLET, replacer);
  lines = value.split(C_NEWLINE);
  trimmedLines = removeIndent(value, getIndent(max).indent).split(C_NEWLINE);
  /* We replaced the initial bullet with something
   * else above, which was used to trick
   * `removeIndentation` into removing some more
   * characters when possible.  However, that could
   * result in the initial line to be stripped more
   * than it should be. */

  trimmedLines[0] = rest;
  offsets[line] = (offsets[line] || 0) + bullet.length;
  line++;
  index = 0;
  length = lines.length;

  while (++index < length) {
    offsets[line] = (offsets[line] || 0) + lines[index].length - trimmedLines[index].length;
    line++;
  }

  return trimmedLines.join(C_NEWLINE);

  function replacer($0, $1, $2, $3, $4) {
    bullet = $1 + $2 + $3;
    rest = $4;
    /* Make sure that the first nine numbered list items
     * can indent with an extra space.  That is, when
     * the bullet did not receive an extra final space. */

    if (Number($2) < 10 && bullet.length % 2 === 1) {
      $2 = C_SPACE + $2;
    }

    max = $1 + repeat(C_SPACE, $2.length) + $3;
    return max + rest;
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/newline.js":
/*!***********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/newline.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");

module.exports = newline;
/* Tokenise newline. */

function newline(eat, value, silent) {
  var character = value.charAt(0);
  var length;
  var subvalue;
  var queue;
  var index;

  if (character !== '\n') {
    return;
  }
  /* istanbul ignore if - never used (yet) */


  if (silent) {
    return true;
  }

  index = 1;
  length = value.length;
  subvalue = character;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;

    if (character === '\n') {
      subvalue += queue;
      queue = '';
    }

    index++;
  }

  eat(subvalue);
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/paragraph.js":
/*!*************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/paragraph.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "./node_modules/trim/index.js");

var decimal = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js");

var trimTrailingLines = __webpack_require__(/*! trim-trailing-lines */ "./node_modules/trim-trailing-lines/index.js");

var interrupt = __webpack_require__(/*! ../util/interrupt */ "./node_modules/remark-parse/lib/util/interrupt.js");

module.exports = paragraph;
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var TAB_SIZE = 4;
/* Tokenise paragraph. */

function paragraph(eat, value, silent) {
  var self = this;
  var settings = self.options;
  var commonmark = settings.commonmark;
  var gfm = settings.gfm;
  var tokenizers = self.blockTokenizers;
  var interruptors = self.interruptParagraph;
  var index = value.indexOf(C_NEWLINE);
  var length = value.length;
  var position;
  var subvalue;
  var character;
  var size;
  var now;

  while (index < length) {
    /* Eat everything if there’s no following newline. */
    if (index === -1) {
      index = length;
      break;
    }
    /* Stop if the next character is NEWLINE. */


    if (value.charAt(index + 1) === C_NEWLINE) {
      break;
    }
    /* In commonmark-mode, following indented lines
     * are part of the paragraph. */


    if (commonmark) {
      size = 0;
      position = index + 1;

      while (position < length) {
        character = value.charAt(position);

        if (character === C_TAB) {
          size = TAB_SIZE;
          break;
        } else if (character === C_SPACE) {
          size++;
        } else {
          break;
        }

        position++;
      }

      if (size >= TAB_SIZE) {
        index = value.indexOf(C_NEWLINE, index + 1);
        continue;
      }
    }

    subvalue = value.slice(index + 1);
    /* Check if the following code contains a possible
     * block. */

    if (interrupt(interruptors, tokenizers, self, [eat, subvalue, true])) {
      break;
    }
    /* Break if the following line starts a list, when
     * already in a list, or when in commonmark, or when
     * in gfm mode and the bullet is *not* numeric. */


    if (tokenizers.list.call(self, eat, subvalue, true) && (self.inList || commonmark || gfm && !decimal(trim.left(subvalue).charAt(0)))) {
      break;
    }

    position = index;
    index = value.indexOf(C_NEWLINE, index + 1);

    if (index !== -1 && trim(value.slice(position, index)) === '') {
      index = position;
      break;
    }
  }

  subvalue = value.slice(0, index);

  if (trim(subvalue) === '') {
    eat(subvalue);
    return null;
  }
  /* istanbul ignore if - never used (yet) */


  if (silent) {
    return true;
  }

  now = eat.now();
  subvalue = trimTrailingLines(subvalue);
  return eat(subvalue)({
    type: 'paragraph',
    children: self.tokenizeInline(subvalue, now)
  });
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/reference.js":
/*!*************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/reference.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");

var locate = __webpack_require__(/*! ../locate/link */ "./node_modules/remark-parse/lib/locate/link.js");

var normalize = __webpack_require__(/*! ../util/normalize */ "./node_modules/remark-parse/lib/util/normalize.js");

module.exports = reference;
reference.locator = locate;
var T_LINK = 'link';
var T_IMAGE = 'image';
var T_FOOTNOTE = 'footnote';
var REFERENCE_TYPE_SHORTCUT = 'shortcut';
var REFERENCE_TYPE_COLLAPSED = 'collapsed';
var REFERENCE_TYPE_FULL = 'full';
var C_CARET = '^';
var C_BACKSLASH = '\\';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';

function reference(eat, value, silent) {
  var self = this;
  var character = value.charAt(0);
  var index = 0;
  var length = value.length;
  var subvalue = '';
  var intro = '';
  var type = T_LINK;
  var referenceType = REFERENCE_TYPE_SHORTCUT;
  var content;
  var identifier;
  var now;
  var node;
  var exit;
  var queue;
  var bracketed;
  var depth;
  /* Check whether we’re eating an image. */

  if (character === '!') {
    type = T_IMAGE;
    intro = character;
    character = value.charAt(++index);
  }

  if (character !== C_BRACKET_OPEN) {
    return;
  }

  index++;
  intro += character;
  queue = '';
  /* Check whether we’re eating a footnote. */

  if (self.options.footnotes && value.charAt(index) === C_CARET) {
    /* Exit if `![^` is found, so the `!` will be seen as text after this,
     * and we’ll enter this function again when `[^` is found. */
    if (type === T_IMAGE) {
      return;
    }

    intro += C_CARET;
    index++;
    type = T_FOOTNOTE;
  }
  /* Eat the text. */


  depth = 0;

  while (index < length) {
    character = value.charAt(index);

    if (character === C_BRACKET_OPEN) {
      bracketed = true;
      depth++;
    } else if (character === C_BRACKET_CLOSE) {
      if (!depth) {
        break;
      }

      depth--;
    }

    if (character === C_BACKSLASH) {
      queue += C_BACKSLASH;
      character = value.charAt(++index);
    }

    queue += character;
    index++;
  }

  subvalue = queue;
  content = queue;
  character = value.charAt(index);

  if (character !== C_BRACKET_CLOSE) {
    return;
  }

  index++;
  subvalue += character;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);
  /* Inline footnotes cannot have an identifier. */

  if (type !== T_FOOTNOTE && character === C_BRACKET_OPEN) {
    identifier = '';
    queue += character;
    index++;

    while (index < length) {
      character = value.charAt(index);

      if (character === C_BRACKET_OPEN || character === C_BRACKET_CLOSE) {
        break;
      }

      if (character === C_BACKSLASH) {
        identifier += C_BACKSLASH;
        character = value.charAt(++index);
      }

      identifier += character;
      index++;
    }

    character = value.charAt(index);

    if (character === C_BRACKET_CLOSE) {
      referenceType = identifier ? REFERENCE_TYPE_FULL : REFERENCE_TYPE_COLLAPSED;
      queue += identifier + character;
      index++;
    } else {
      identifier = '';
    }

    subvalue += queue;
    queue = '';
  } else {
    if (!content) {
      return;
    }

    identifier = content;
  }
  /* Brackets cannot be inside the identifier. */


  if (referenceType !== REFERENCE_TYPE_FULL && bracketed) {
    return;
  }

  subvalue = intro + subvalue;

  if (type === T_LINK && self.inLink) {
    return null;
  }
  /* istanbul ignore if - never used (yet) */


  if (silent) {
    return true;
  }

  if (type === T_FOOTNOTE && content.indexOf(' ') !== -1) {
    return eat(subvalue)({
      type: 'footnote',
      children: this.tokenizeInline(content, eat.now())
    });
  }

  now = eat.now();
  now.column += intro.length;
  now.offset += intro.length;
  identifier = referenceType === REFERENCE_TYPE_FULL ? identifier : content;
  node = {
    type: type + 'Reference',
    identifier: normalize(identifier)
  };

  if (type === T_LINK || type === T_IMAGE) {
    node.referenceType = referenceType;
  }

  if (type === T_LINK) {
    exit = self.enterLink();
    node.children = self.tokenizeInline(content, now);
    exit();
  } else if (type === T_IMAGE) {
    node.alt = self.decode.raw(self.unescape(content), now) || null;
  }

  return eat(subvalue)(node);
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/strong.js":
/*!**********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/strong.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "./node_modules/trim/index.js");

var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");

var locate = __webpack_require__(/*! ../locate/strong */ "./node_modules/remark-parse/lib/locate/strong.js");

module.exports = strong;
strong.locator = locate;
var C_ASTERISK = '*';
var C_UNDERSCORE = '_';

function strong(eat, value, silent) {
  var self = this;
  var index = 0;
  var character = value.charAt(index);
  var now;
  var pedantic;
  var marker;
  var queue;
  var subvalue;
  var length;
  var prev;

  if (character !== C_ASTERISK && character !== C_UNDERSCORE || value.charAt(++index) !== character) {
    return;
  }

  pedantic = self.options.pedantic;
  marker = character;
  subvalue = marker + marker;
  length = value.length;
  index++;
  queue = '';
  character = '';

  if (pedantic && whitespace(value.charAt(index))) {
    return;
  }

  while (index < length) {
    prev = character;
    character = value.charAt(index);

    if (character === marker && value.charAt(index + 1) === marker && (!pedantic || !whitespace(prev))) {
      character = value.charAt(index + 2);

      if (character !== marker) {
        if (!trim(queue)) {
          return;
        }
        /* istanbul ignore if - never used (yet) */


        if (silent) {
          return true;
        }

        now = eat.now();
        now.column += 2;
        now.offset += 2;
        return eat(subvalue + queue + subvalue)({
          type: 'strong',
          children: self.tokenizeInline(queue, now)
        });
      }
    }

    if (!pedantic && character === '\\') {
      queue += character;
      character = value.charAt(++index);
    }

    queue += character;
    index++;
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/table.js":
/*!*********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/table.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");

module.exports = table;
var C_BACKSLASH = '\\';
var C_TICK = '`';
var C_DASH = '-';
var C_PIPE = '|';
var C_COLON = ':';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var MIN_TABLE_COLUMNS = 1;
var MIN_TABLE_ROWS = 2;
var TABLE_ALIGN_LEFT = 'left';
var TABLE_ALIGN_CENTER = 'center';
var TABLE_ALIGN_RIGHT = 'right';
var TABLE_ALIGN_NONE = null;

function table(eat, value, silent) {
  var self = this;
  var index;
  var alignments;
  var alignment;
  var subvalue;
  var row;
  var length;
  var lines;
  var queue;
  var character;
  var hasDash;
  var align;
  var cell;
  var preamble;
  var count;
  var opening;
  var now;
  var position;
  var lineCount;
  var line;
  var rows;
  var table;
  var lineIndex;
  var pipeIndex;
  var first;
  /* Exit when not in gfm-mode. */

  if (!self.options.gfm) {
    return;
  }
  /* Get the rows.
   * Detecting tables soon is hard, so there are some
   * checks for performance here, such as the minimum
   * number of rows, and allowed characters in the
   * alignment row. */


  index = 0;
  lineCount = 0;
  length = value.length + 1;
  lines = [];

  while (index < length) {
    lineIndex = value.indexOf(C_NEWLINE, index);
    pipeIndex = value.indexOf(C_PIPE, index + 1);

    if (lineIndex === -1) {
      lineIndex = value.length;
    }

    if (pipeIndex === -1 || pipeIndex > lineIndex) {
      if (lineCount < MIN_TABLE_ROWS) {
        return;
      }

      break;
    }

    lines.push(value.slice(index, lineIndex));
    lineCount++;
    index = lineIndex + 1;
  }
  /* Parse the alignment row. */


  subvalue = lines.join(C_NEWLINE);
  alignments = lines.splice(1, 1)[0] || [];
  index = 0;
  length = alignments.length;
  lineCount--;
  alignment = false;
  align = [];

  while (index < length) {
    character = alignments.charAt(index);

    if (character === C_PIPE) {
      hasDash = null;

      if (alignment === false) {
        if (first === false) {
          return;
        }
      } else {
        align.push(alignment);
        alignment = false;
      }

      first = false;
    } else if (character === C_DASH) {
      hasDash = true;
      alignment = alignment || TABLE_ALIGN_NONE;
    } else if (character === C_COLON) {
      if (alignment === TABLE_ALIGN_LEFT) {
        alignment = TABLE_ALIGN_CENTER;
      } else if (hasDash && alignment === TABLE_ALIGN_NONE) {
        alignment = TABLE_ALIGN_RIGHT;
      } else {
        alignment = TABLE_ALIGN_LEFT;
      }
    } else if (!whitespace(character)) {
      return;
    }

    index++;
  }

  if (alignment !== false) {
    align.push(alignment);
  }
  /* Exit when without enough columns. */


  if (align.length < MIN_TABLE_COLUMNS) {
    return;
  }
  /* istanbul ignore if - never used (yet) */


  if (silent) {
    return true;
  }
  /* Parse the rows. */


  position = -1;
  rows = [];
  table = eat(subvalue).reset({
    type: 'table',
    align: align,
    children: rows
  });

  while (++position < lineCount) {
    line = lines[position];
    row = {
      type: 'tableRow',
      children: []
    };
    /* Eat a newline character when this is not the
     * first row. */

    if (position) {
      eat(C_NEWLINE);
    }
    /* Eat the row. */


    eat(line).reset(row, table);
    length = line.length + 1;
    index = 0;
    queue = '';
    cell = '';
    preamble = true;
    count = null;
    opening = null;

    while (index < length) {
      character = line.charAt(index);

      if (character === C_TAB || character === C_SPACE) {
        if (cell) {
          queue += character;
        } else {
          eat(character);
        }

        index++;
        continue;
      }

      if (character === '' || character === C_PIPE) {
        if (preamble) {
          eat(character);
        } else {
          if (character && opening) {
            queue += character;
            index++;
            continue;
          }

          if ((cell || character) && !preamble) {
            subvalue = cell;

            if (queue.length > 1) {
              if (character) {
                subvalue += queue.slice(0, queue.length - 1);
                queue = queue.charAt(queue.length - 1);
              } else {
                subvalue += queue;
                queue = '';
              }
            }

            now = eat.now();
            eat(subvalue)({
              type: 'tableCell',
              children: self.tokenizeInline(cell, now)
            }, row);
          }

          eat(queue + character);
          queue = '';
          cell = '';
        }
      } else {
        if (queue) {
          cell += queue;
          queue = '';
        }

        cell += character;

        if (character === C_BACKSLASH && index !== length - 2) {
          cell += line.charAt(index + 1);
          index++;
        }

        if (character === C_TICK) {
          count = 1;

          while (line.charAt(index + 1) === character) {
            cell += character;
            index++;
            count++;
          }

          if (!opening) {
            opening = count;
          } else if (count >= opening) {
            opening = 0;
          }
        }
      }

      preamble = false;
      index++;
    }
    /* Eat the alignment row. */


    if (!position) {
      eat(C_NEWLINE + alignments);
    }
  }

  return table;
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/text.js":
/*!********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/text.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = text;

function text(eat, value, silent) {
  var self = this;
  var methods;
  var tokenizers;
  var index;
  var length;
  var subvalue;
  var position;
  var tokenizer;
  var name;
  var min;
  var now;
  /* istanbul ignore if - never used (yet) */

  if (silent) {
    return true;
  }

  methods = self.inlineMethods;
  length = methods.length;
  tokenizers = self.inlineTokenizers;
  index = -1;
  min = value.length;

  while (++index < length) {
    name = methods[index];

    if (name === 'text' || !tokenizers[name]) {
      continue;
    }

    tokenizer = tokenizers[name].locator;

    if (!tokenizer) {
      eat.file.fail('Missing locator: `' + name + '`');
    }

    position = tokenizer.call(self, value, 1);

    if (position !== -1 && position < min) {
      min = position;
    }
  }

  subvalue = value.slice(0, min);
  now = eat.now();
  self.decode(subvalue, now, function (content, position, source) {
    eat(source || content)({
      type: 'text',
      value: content
    });
  });
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/thematic-break.js":
/*!******************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/thematic-break.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = thematicBreak;
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_ASTERISK = '*';
var C_UNDERSCORE = '_';
var C_DASH = '-';
var THEMATIC_BREAK_MARKER_COUNT = 3;

function thematicBreak(eat, value, silent) {
  var index = -1;
  var length = value.length + 1;
  var subvalue = '';
  var character;
  var marker;
  var markerCount;
  var queue;

  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    subvalue += character;
  }

  if (character !== C_ASTERISK && character !== C_DASH && character !== C_UNDERSCORE) {
    return;
  }

  marker = character;
  subvalue += character;
  markerCount = 1;
  queue = '';

  while (++index < length) {
    character = value.charAt(index);

    if (character === marker) {
      markerCount++;
      subvalue += queue + marker;
      queue = '';
    } else if (character === C_SPACE) {
      queue += character;
    } else if (markerCount >= THEMATIC_BREAK_MARKER_COUNT && (!character || character === C_NEWLINE)) {
      subvalue += queue;

      if (silent) {
        return true;
      }

      return eat(subvalue)({
        type: 'thematicBreak'
      });
    } else {
      return;
    }
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/url.js":
/*!*******************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/url.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var decode = __webpack_require__(/*! parse-entities */ "./node_modules/parse-entities/index.js");

var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");

var locate = __webpack_require__(/*! ../locate/url */ "./node_modules/remark-parse/lib/locate/url.js");

module.exports = url;
url.locator = locate;
url.notInLink = true;
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_LT = '<';
var C_AT_SIGN = '@';
var HTTP_PROTOCOL = 'http://';
var HTTPS_PROTOCOL = 'https://';
var MAILTO_PROTOCOL = 'mailto:';
var PROTOCOLS = [HTTP_PROTOCOL, HTTPS_PROTOCOL, MAILTO_PROTOCOL];
var PROTOCOLS_LENGTH = PROTOCOLS.length;

function url(eat, value, silent) {
  var self = this;
  var subvalue;
  var content;
  var character;
  var index;
  var position;
  var protocol;
  var match;
  var length;
  var queue;
  var parenCount;
  var nextCharacter;
  var exit;

  if (!self.options.gfm) {
    return;
  }

  subvalue = '';
  index = -1;
  length = PROTOCOLS_LENGTH;

  while (++index < length) {
    protocol = PROTOCOLS[index];
    match = value.slice(0, protocol.length);

    if (match.toLowerCase() === protocol) {
      subvalue = match;
      break;
    }
  }

  if (!subvalue) {
    return;
  }

  index = subvalue.length;
  length = value.length;
  queue = '';
  parenCount = 0;

  while (index < length) {
    character = value.charAt(index);

    if (whitespace(character) || character === C_LT) {
      break;
    }

    if (character === '.' || character === ',' || character === ':' || character === ';' || character === '"' || character === '\'' || character === ')' || character === ']') {
      nextCharacter = value.charAt(index + 1);

      if (!nextCharacter || whitespace(nextCharacter)) {
        break;
      }
    }

    if (character === C_PAREN_OPEN || character === C_BRACKET_OPEN) {
      parenCount++;
    }

    if (character === C_PAREN_CLOSE || character === C_BRACKET_CLOSE) {
      parenCount--;

      if (parenCount < 0) {
        break;
      }
    }

    queue += character;
    index++;
  }

  if (!queue) {
    return;
  }

  subvalue += queue;
  content = subvalue;

  if (protocol === MAILTO_PROTOCOL) {
    position = queue.indexOf(C_AT_SIGN);

    if (position === -1 || position === length - 1) {
      return;
    }

    content = content.substr(MAILTO_PROTOCOL.length);
  }
  /* istanbul ignore if - never used (yet) */


  if (silent) {
    return true;
  }

  exit = self.enterLink();
  content = self.tokenizeInline(content, eat.now());
  exit();
  return eat(subvalue)({
    type: 'link',
    title: null,
    url: decode(subvalue, {
      nonTerminated: false
    }),
    children: content
  });
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenizer.js":
/*!****************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenizer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory;
var MERGEABLE_NODES = {
  text: mergeText,
  blockquote: mergeBlockquote
};
/* Check whether a node is mergeable with adjacent nodes. */

function mergeable(node) {
  var start;
  var end;

  if (node.type !== 'text' || !node.position) {
    return true;
  }

  start = node.position.start;
  end = node.position.end;
  /* Only merge nodes which occupy the same size as their
   * `value`. */

  return start.line !== end.line || end.column - start.column === node.value.length;
}
/* Merge two text nodes: `node` into `prev`. */


function mergeText(prev, node) {
  prev.value += node.value;
  return prev;
}
/* Merge two blockquotes: `node` into `prev`, unless in
 * CommonMark mode. */


function mergeBlockquote(prev, node) {
  if (this.options.commonmark) {
    return node;
  }

  prev.children = prev.children.concat(node.children);
  return prev;
}
/* Construct a tokenizer.  This creates both
 * `tokenizeInline` and `tokenizeBlock`. */


function factory(type) {
  return tokenize;
  /* Tokenizer for a bound `type`. */

  function tokenize(value, location) {
    var self = this;
    var offset = self.offset;
    var tokens = [];
    var methods = self[type + 'Methods'];
    var tokenizers = self[type + 'Tokenizers'];
    var line = location.line;
    var column = location.column;
    var index;
    var length;
    var method;
    var name;
    var matched;
    var valueLength;
    /* Trim white space only lines. */

    if (!value) {
      return tokens;
    }
    /* Expose on `eat`. */


    eat.now = now;
    eat.file = self.file;
    /* Sync initial offset. */

    updatePosition('');
    /* Iterate over `value`, and iterate over all
     * tokenizers.  When one eats something, re-iterate
     * with the remaining value.  If no tokenizer eats,
     * something failed (should not happen) and an
     * exception is thrown. */

    while (value) {
      index = -1;
      length = methods.length;
      matched = false;

      while (++index < length) {
        name = methods[index];
        method = tokenizers[name];

        if (method && (
        /* istanbul ignore next */
        !method.onlyAtStart || self.atStart) && (!method.notInList || !self.inList) && (!method.notInBlock || !self.inBlock) && (!method.notInLink || !self.inLink)) {
          valueLength = value.length;
          method.apply(self, [eat, value]);
          matched = valueLength !== value.length;

          if (matched) {
            break;
          }
        }
      }
      /* istanbul ignore if */


      if (!matched) {
        self.file.fail(new Error('Infinite loop'), eat.now());
      }
    }

    self.eof = now();
    return tokens;
    /* Update line, column, and offset based on
     * `value`. */

    function updatePosition(subvalue) {
      var lastIndex = -1;
      var index = subvalue.indexOf('\n');

      while (index !== -1) {
        line++;
        lastIndex = index;
        index = subvalue.indexOf('\n', index + 1);
      }

      if (lastIndex === -1) {
        column += subvalue.length;
      } else {
        column = subvalue.length - lastIndex;
      }

      if (line in offset) {
        if (lastIndex !== -1) {
          column += offset[line];
        } else if (column <= offset[line]) {
          column = offset[line] + 1;
        }
      }
    }
    /* Get offset.  Called before the first character is
     * eaten to retrieve the range's offsets. */


    function getOffset() {
      var indentation = [];
      var pos = line + 1;
      /* Done.  Called when the last character is
       * eaten to retrieve the range’s offsets. */

      return function () {
        var last = line + 1;

        while (pos < last) {
          indentation.push((offset[pos] || 0) + 1);
          pos++;
        }

        return indentation;
      };
    }
    /* Get the current position. */


    function now() {
      var pos = {
        line: line,
        column: column
      };
      pos.offset = self.toOffset(pos);
      return pos;
    }
    /* Store position information for a node. */


    function Position(start) {
      this.start = start;
      this.end = now();
    }
    /* Throw when a value is incorrectly eaten.
     * This shouldn’t happen but will throw on new,
     * incorrect rules. */


    function validateEat(subvalue) {
      /* istanbul ignore if */
      if (value.substring(0, subvalue.length) !== subvalue) {
        /* Capture stack-trace. */
        self.file.fail(new Error('Incorrectly eaten value: please report this ' + 'warning on http://git.io/vg5Ft'), now());
      }
    }
    /* Mark position and patch `node.position`. */


    function position() {
      var before = now();
      return update;
      /* Add the position to a node. */

      function update(node, indent) {
        var prev = node.position;
        var start = prev ? prev.start : before;
        var combined = [];
        var n = prev && prev.end.line;
        var l = before.line;
        node.position = new Position(start);
        /* If there was already a `position`, this
         * node was merged.  Fixing `start` wasn’t
         * hard, but the indent is different.
         * Especially because some information, the
         * indent between `n` and `l` wasn’t
         * tracked.  Luckily, that space is
         * (should be?) empty, so we can safely
         * check for it now. */

        if (prev && indent && prev.indent) {
          combined = prev.indent;

          if (n < l) {
            while (++n < l) {
              combined.push((offset[n] || 0) + 1);
            }

            combined.push(before.column);
          }

          indent = combined.concat(indent);
        }

        node.position.indent = indent || [];
        return node;
      }
    }
    /* Add `node` to `parent`s children or to `tokens`.
     * Performs merges where possible. */


    function add(node, parent) {
      var children = parent ? parent.children : tokens;
      var prev = children[children.length - 1];

      if (prev && node.type === prev.type && node.type in MERGEABLE_NODES && mergeable(prev) && mergeable(node)) {
        node = MERGEABLE_NODES[node.type].call(self, prev, node);
      }

      if (node !== prev) {
        children.push(node);
      }

      if (self.atStart && tokens.length !== 0) {
        self.exitStart();
      }

      return node;
    }
    /* Remove `subvalue` from `value`.
     * `subvalue` must be at the start of `value`. */


    function eat(subvalue) {
      var indent = getOffset();
      var pos = position();
      var current = now();
      validateEat(subvalue);
      apply.reset = reset;
      reset.test = test;
      apply.test = test;
      value = value.substring(subvalue.length);
      updatePosition(subvalue);
      indent = indent();
      return apply;
      /* Add the given arguments, add `position` to
       * the returned node, and return the node. */

      function apply(node, parent) {
        return pos(add(pos(node), parent), indent);
      }
      /* Functions just like apply, but resets the
       * content:  the line and column are reversed,
       * and the eaten value is re-added.
       * This is useful for nodes with a single
       * type of content, such as lists and tables.
       * See `apply` above for what parameters are
       * expected. */


      function reset() {
        var node = apply.apply(null, arguments);
        line = current.line;
        column = current.column;
        value = subvalue + value;
        return node;
      }
      /* Test the position, after eating, and reverse
       * to a not-eaten state. */


      function test() {
        var result = pos({});
        line = current.line;
        column = current.column;
        value = subvalue + value;
        return result.position;
      }
    }
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/unescape.js":
/*!***************************************************!*\
  !*** ./node_modules/remark-parse/lib/unescape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory;
/* Factory to de-escape a value, based on a list at `key`
 * in `ctx`. */

function factory(ctx, key) {
  return unescape;
  /* De-escape a string using the expression at `key`
   * in `ctx`. */

  function unescape(value) {
    var prev = 0;
    var index = value.indexOf('\\');
    var escape = ctx[key];
    var queue = [];
    var character;

    while (index !== -1) {
      queue.push(value.slice(prev, index));
      prev = index + 1;
      character = value.charAt(prev);
      /* If the following character is not a valid escape,
       * add the slash. */

      if (!character || escape.indexOf(character) === -1) {
        queue.push('\\');
      }

      index = value.indexOf('\\', prev);
    }

    queue.push(value.slice(prev));
    return queue.join('');
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/util/get-indentation.js":
/*!***************************************************************!*\
  !*** ./node_modules/remark-parse/lib/util/get-indentation.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = indentation;
/* Map of characters, and their column length,
 * which can be used as indentation. */

var characters = {
  ' ': 1,
  '\t': 4
};
/* Gets indentation information for a line. */

function indentation(value) {
  var index = 0;
  var indent = 0;
  var character = value.charAt(index);
  var stops = {};
  var size;

  while (character in characters) {
    size = characters[character];
    indent += size;

    if (size > 1) {
      indent = Math.floor(indent / size) * size;
    }

    stops[indent] = index;
    character = value.charAt(++index);
  }

  return {
    indent: indent,
    stops: stops
  };
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/util/html.js":
/*!****************************************************!*\
  !*** ./node_modules/remark-parse/lib/util/html.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var attributeName = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
var unquoted = "[^\"'=<>`\\u0000-\\u0020]+";
var singleQuoted = '\'[^\']*\'';
var doubleQuoted = '"[^"]*"';
var attributeValue = '(?:' + unquoted + '|' + singleQuoted + '|' + doubleQuoted + ')';
var attribute = '(?:\\s+' + attributeName + '(?:\\s*=\\s*' + attributeValue + ')?)';
var openTag = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';
var closeTag = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
var comment = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
var processing = '<[?].*?[?]>';
var declaration = '<![A-Za-z]+\\s+[^>]*>';
var cdata = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';
exports.openCloseTag = new RegExp('^(?:' + openTag + '|' + closeTag + ')');
exports.tag = new RegExp('^(?:' + openTag + '|' + closeTag + '|' + comment + '|' + processing + '|' + declaration + '|' + cdata + ')');

/***/ }),

/***/ "./node_modules/remark-parse/lib/util/interrupt.js":
/*!*********************************************************!*\
  !*** ./node_modules/remark-parse/lib/util/interrupt.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = interrupt;

function interrupt(interruptors, tokenizers, ctx, params) {
  var bools = ['pedantic', 'commonmark'];
  var count = bools.length;
  var length = interruptors.length;
  var index = -1;
  var interruptor;
  var config;
  var fn;
  var offset;
  var bool;
  var ignore;

  while (++index < length) {
    interruptor = interruptors[index];
    config = interruptor[1] || {};
    fn = interruptor[0];
    offset = -1;
    ignore = false;

    while (++offset < count) {
      bool = bools[offset];

      if (config[bool] !== undefined && config[bool] !== ctx.options[bool]) {
        ignore = true;
        break;
      }
    }

    if (ignore) {
      continue;
    }

    if (tokenizers[fn].apply(ctx, params)) {
      return true;
    }
  }

  return false;
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/util/normalize.js":
/*!*********************************************************!*\
  !*** ./node_modules/remark-parse/lib/util/normalize.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var collapseWhiteSpace = __webpack_require__(/*! collapse-white-space */ "./node_modules/collapse-white-space/index.js");

module.exports = normalize;
/* Normalize an identifier.  Collapses multiple white space
 * characters into a single space, and removes casing. */

function normalize(value) {
  return collapseWhiteSpace(value).toLowerCase();
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/util/remove-indentation.js":
/*!******************************************************************!*\
  !*** ./node_modules/remark-parse/lib/util/remove-indentation.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "./node_modules/trim/index.js");

var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js");

var getIndent = __webpack_require__(/*! ./get-indentation */ "./node_modules/remark-parse/lib/util/get-indentation.js");

module.exports = indentation;
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';
/* Remove the minimum indent from every line in `value`.
 * Supports both tab, spaced, and mixed indentation (as
 * well as possible). */

function indentation(value, maximum) {
  var values = value.split(C_NEWLINE);
  var position = values.length + 1;
  var minIndent = Infinity;
  var matrix = [];
  var index;
  var indentation;
  var stops;
  var padding;
  values.unshift(repeat(C_SPACE, maximum) + '!');

  while (position--) {
    indentation = getIndent(values[position]);
    matrix[position] = indentation.stops;

    if (trim(values[position]).length === 0) {
      continue;
    }

    if (indentation.indent) {
      if (indentation.indent > 0 && indentation.indent < minIndent) {
        minIndent = indentation.indent;
      }
    } else {
      minIndent = Infinity;
      break;
    }
  }

  if (minIndent !== Infinity) {
    position = values.length;

    while (position--) {
      stops = matrix[position];
      index = minIndent;

      while (index && !(index in stops)) {
        index--;
      }

      if (trim(values[position]).length !== 0 && minIndent && index !== minIndent) {
        padding = C_TAB;
      } else {
        padding = '';
      }

      values[position] = padding + values[position].slice(index in stops ? stops[index] + 1 : 0);
    }
  }

  values.shift();
  return values.join(C_NEWLINE);
}

/***/ }),

/***/ "./node_modules/repeat-string/index.js":
/*!*********************************************!*\
  !*** ./node_modules/repeat-string/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

/**
 * Results cache
 */

var res = '';
var cache;
/**
 * Expose `repeat`
 */

module.exports = repeat;
/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  } // cover common, quick use cases


  if (num === 1) return str;
  if (num === 2) return str + str;
  var max = str.length * num;

  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}

/***/ }),

/***/ "./node_modules/replace-ext/index.js":
/*!*******************************************!*\
  !*** ./node_modules/replace-ext/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

function replaceExt(npath, ext) {
  if (typeof npath !== 'string') {
    return npath;
  }

  if (npath.length === 0) {
    return npath;
  }

  var nFileName = path.basename(npath, path.extname(npath)) + ext;
  return path.join(path.dirname(npath), nFileName);
}

module.exports = replaceExt;

/***/ }),

/***/ "./node_modules/shortid/index.js":
/*!***************************************!*\
  !*** ./node_modules/shortid/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./lib/index */ "./node_modules/shortid/lib/index.js");

/***/ }),

/***/ "./node_modules/shortid/lib/alphabet.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/alphabet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomFromSeed = __webpack_require__(/*! ./random/random-from-seed */ "./node_modules/shortid/lib/random/random-from-seed.js");

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;
var shuffled;

function reset() {
  shuffled = false;
}

function setCharacters(_alphabet_) {
  if (!_alphabet_) {
    if (alphabet !== ORIGINAL) {
      alphabet = ORIGINAL;
      reset();
    }

    return;
  }

  if (_alphabet_ === alphabet) {
    return;
  }

  if (_alphabet_.length !== ORIGINAL.length) {
    throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
  }

  var unique = _alphabet_.split('').filter(function (item, ind, arr) {
    return ind !== arr.lastIndexOf(item);
  });

  if (unique.length) {
    throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
  }

  alphabet = _alphabet_;
  reset();
}

function characters(_alphabet_) {
  setCharacters(_alphabet_);
  return alphabet;
}

function setSeed(seed) {
  randomFromSeed.seed(seed);

  if (previousSeed !== seed) {
    reset();
    previousSeed = seed;
  }
}

function shuffle() {
  if (!alphabet) {
    setCharacters(ORIGINAL);
  }

  var sourceArray = alphabet.split('');
  var targetArray = [];
  var r = randomFromSeed.nextValue();
  var characterIndex;

  while (sourceArray.length > 0) {
    r = randomFromSeed.nextValue();
    characterIndex = Math.floor(r * sourceArray.length);
    targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
  }

  return targetArray.join('');
}

function getShuffled() {
  if (shuffled) {
    return shuffled;
  }

  shuffled = shuffle();
  return shuffled;
}
/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */


function lookup(index) {
  var alphabetShuffled = getShuffled();
  return alphabetShuffled[index];
}

function get() {
  return alphabet || ORIGINAL;
}

module.exports = {
  get: get,
  characters: characters,
  seed: setSeed,
  lookup: lookup,
  shuffled: getShuffled
};

/***/ }),

/***/ "./node_modules/shortid/lib/build.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/build.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var generate = __webpack_require__(/*! ./generate */ "./node_modules/shortid/lib/generate.js");

var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js"); // Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!


var REDUCE_TIME = 1567752802062; // don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16

var version = 7; // Counter is used when shortid is called multiple times in one second.

var counter; // Remember the last time shortid was called in case counter is needed.

var previousSeconds;
/**
 * Generate unique id
 * Returns string id
 */

function build(clusterWorkerId) {
  var str = '';
  var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

  if (seconds === previousSeconds) {
    counter++;
  } else {
    counter = 0;
    previousSeconds = seconds;
  }

  str = str + generate(version);
  str = str + generate(clusterWorkerId);

  if (counter > 0) {
    str = str + generate(counter);
  }

  str = str + generate(seconds);
  return str;
}

module.exports = build;

/***/ }),

/***/ "./node_modules/shortid/lib/generate.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/generate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

var random = __webpack_require__(/*! ./random/random-byte */ "./node_modules/shortid/lib/random/random-byte-browser.js");

var format = __webpack_require__(/*! nanoid/format */ "./node_modules/nanoid/format.browser.js");

function generate(number) {
  var loopCounter = 0;
  var done;
  var str = '';

  while (!done) {
    str = str + format(random, alphabet.get(), 1);
    done = number < Math.pow(16, loopCounter + 1);
    loopCounter++;
  }

  return str;
}

module.exports = generate;

/***/ }),

/***/ "./node_modules/shortid/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/shortid/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

var build = __webpack_require__(/*! ./build */ "./node_modules/shortid/lib/build.js");

var isValid = __webpack_require__(/*! ./is-valid */ "./node_modules/shortid/lib/is-valid.js"); // if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.


var clusterWorkerId = __webpack_require__(/*! ./util/cluster-worker-id */ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js") || 0;
/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */

function seed(seedValue) {
  alphabet.seed(seedValue);
  return module.exports;
}
/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */


function worker(workerId) {
  clusterWorkerId = workerId;
  return module.exports;
}
/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */


function characters(newCharacters) {
  if (newCharacters !== undefined) {
    alphabet.characters(newCharacters);
  }

  return alphabet.shuffled();
}
/**
 * Generate unique id
 * Returns string id
 */


function generate() {
  return build(clusterWorkerId);
} // Export all other functions as properties of the generate function


module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.isValid = isValid;

/***/ }),

/***/ "./node_modules/shortid/lib/is-valid.js":
/*!**********************************************!*\
  !*** ./node_modules/shortid/lib/is-valid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(/*! ./alphabet */ "./node_modules/shortid/lib/alphabet.js");

function isShortId(id) {
  if (!id || typeof id !== 'string' || id.length < 6) {
    return false;
  }

  var nonAlphabetic = new RegExp('[^' + alphabet.get().replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') + ']');
  return !nonAlphabetic.test(id);
}

module.exports = isShortId;

/***/ }),

/***/ "./node_modules/shortid/lib/random/random-byte-browser.js":
/*!****************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-byte-browser.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var crypto = (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

var randomByte;

if (!crypto || !crypto.getRandomValues) {
  randomByte = function randomByte(size) {
    var bytes = [];

    for (var i = 0; i < size; i++) {
      bytes.push(Math.floor(Math.random() * 256));
    }

    return bytes;
  };
} else {
  randomByte = function randomByte(size) {
    return crypto.getRandomValues(new Uint8Array(size));
  };
}

module.exports = randomByte;

/***/ }),

/***/ "./node_modules/shortid/lib/random/random-from-seed.js":
/*!*************************************************************!*\
  !*** ./node_modules/shortid/lib/random/random-from-seed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;
/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */

function getNextValue() {
  seed = (seed * 9301 + 49297) % 233280;
  return seed / 233280.0;
}

function setSeed(_seed_) {
  seed = _seed_;
}

module.exports = {
  nextValue: getNextValue,
  seed: setSeed
};

/***/ }),

/***/ "./node_modules/shortid/lib/util/cluster-worker-id-browser.js":
/*!********************************************************************!*\
  !*** ./node_modules/shortid/lib/util/cluster-worker-id-browser.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 0;

/***/ }),

/***/ "./node_modules/state-toggle/index.js":
/*!********************************************!*\
  !*** ./node_modules/state-toggle/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory; // Construct a state `toggler`: a function which inverses `property` in context
// based on its current value.
// The by `toggler` returned function restores that value.

function factory(key, state, ctx) {
  return enter;

  function enter() {
    var context = ctx || this;
    var current = context[key];
    context[key] = !state;
    return exit;

    function exit() {
      context[key] = current;
    }
  }
}

/***/ }),

/***/ "./node_modules/trim-trailing-lines/index.js":
/*!***************************************************!*\
  !*** ./node_modules/trim-trailing-lines/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = trimTrailingLines;
var line = '\n'; // Remove final newline characters from `value`.

function trimTrailingLines(value) {
  var val = String(value);
  var index = val.length;

  while (val.charAt(--index) === line) {// Empty
  }

  return val.slice(0, index + 1);
}

/***/ }),

/***/ "./node_modules/trim/index.js":
/*!************************************!*\
  !*** ./node_modules/trim/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports = module.exports = trim;

function trim(str) {
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function (str) {
  return str.replace(/^\s*/, '');
};

exports.right = function (str) {
  return str.replace(/\s*$/, '');
};

/***/ }),

/***/ "./node_modules/trough/index.js":
/*!**************************************!*\
  !*** ./node_modules/trough/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var wrap = __webpack_require__(/*! ./wrap.js */ "./node_modules/trough/wrap.js");

module.exports = trough;
trough.wrap = wrap;
var slice = [].slice; // Create new middleware.

function trough() {
  var fns = [];
  var middleware = {};
  middleware.run = run;
  middleware.use = use;
  return middleware; // Run `fns`.  Last argument must be a completion handler.

  function run() {
    var index = -1;
    var input = slice.call(arguments, 0, -1);
    var done = arguments[arguments.length - 1];

    if (typeof done !== 'function') {
      throw new Error('Expected function as last argument, not ' + done);
    }

    next.apply(null, [null].concat(input)); // Run the next `fn`, if any.

    function next(err) {
      var fn = fns[++index];
      var params = slice.call(arguments, 0);
      var values = params.slice(1);
      var length = input.length;
      var pos = -1;

      if (err) {
        done(err);
        return;
      } // Copy non-nully input into values.


      while (++pos < length) {
        if (values[pos] === null || values[pos] === undefined) {
          values[pos] = input[pos];
        }
      }

      input = values; // Next or done.

      if (fn) {
        wrap(fn, next).apply(null, input);
      } else {
        done.apply(null, [null].concat(input));
      }
    }
  } // Add `fn` to the list.


  function use(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Expected `fn` to be a function, not ' + fn);
    }

    fns.push(fn);
    return middleware;
  }
}

/***/ }),

/***/ "./node_modules/trough/wrap.js":
/*!*************************************!*\
  !*** ./node_modules/trough/wrap.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = [].slice;
module.exports = wrap; // Wrap `fn`.
// Can be sync or async; return a promise, receive a completion handler, return
// new values and errors.

function wrap(fn, callback) {
  var invoked;
  return wrapped;

  function wrapped() {
    var params = slice.call(arguments, 0);
    var callback = fn.length > params.length;
    var result;

    if (callback) {
      params.push(done);
    }

    try {
      result = fn.apply(null, params);
    } catch (error) {
      // Well, this is quite the pickle.
      // `fn` received a callback and invoked it (thus continuing the pipeline),
      // but later also threw an error.
      // We’re not about to restart the pipeline again, so the only thing left
      // to do is to throw the thing instead.
      if (callback && invoked) {
        throw error;
      }

      return done(error);
    }

    if (!callback) {
      if (result && typeof result.then === 'function') {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  } // Invoke `next`, only once.


  function done() {
    if (!invoked) {
      invoked = true;
      callback.apply(null, arguments);
    }
  } // Invoke `done` with one value.
  // Tracks if an error is passed, too.


  function then(value) {
    done(null, value);
  }
}

/***/ }),

/***/ "./node_modules/unherit/index.js":
/*!***************************************!*\
  !*** ./node_modules/unherit/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

var inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

module.exports = unherit; // Create a custom constructor which can be modified without affecting the
// original class.

function unherit(Super) {
  var result;
  var key;
  var value;
  inherits(Of, Super);
  inherits(From, Of); // Clone values.

  result = Of.prototype;

  for (key in result) {
    value = result[key];

    if (value && _typeof(value) === 'object') {
      result[key] = 'concat' in value ? value.concat() : xtend(value);
    }
  }

  return Of; // Constructor accepting a single argument, which itself is an `arguments`
  // object.

  function From(parameters) {
    return Super.apply(this, parameters);
  } // Constructor accepting variadic arguments.


  function Of() {
    if (!(this instanceof Of)) {
      return new From(arguments);
    }

    return Super.apply(this, arguments);
  }
}

/***/ }),

/***/ "./node_modules/unified/index.js":
/*!***************************************!*\
  !*** ./node_modules/unified/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* Dependencies. */

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var extend = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");

var bail = __webpack_require__(/*! bail */ "./node_modules/bail/index.js");

var vfile = __webpack_require__(/*! vfile */ "./node_modules/vfile/index.js");

var trough = __webpack_require__(/*! trough */ "./node_modules/trough/index.js");

var string = __webpack_require__(/*! x-is-string */ "./node_modules/x-is-string/index.js");

var plain = __webpack_require__(/*! is-plain-obj */ "./node_modules/is-plain-obj/index.js");
/* Expose a frozen processor. */


module.exports = unified().freeze();
var slice = [].slice;
var own = {}.hasOwnProperty;
/* Process pipeline. */

var pipeline = trough().use(pipelineParse).use(pipelineRun).use(pipelineStringify);

function pipelineParse(p, ctx) {
  ctx.tree = p.parse(ctx.file);
}

function pipelineRun(p, ctx, next) {
  p.run(ctx.tree, ctx.file, done);

  function done(err, tree, file) {
    if (err) {
      next(err);
    } else {
      ctx.tree = tree;
      ctx.file = file;
      next();
    }
  }
}

function pipelineStringify(p, ctx) {
  ctx.file.contents = p.stringify(ctx.tree, ctx.file);
}
/* Function to create the first processor. */


function unified() {
  var attachers = [];
  var transformers = trough();
  var namespace = {};
  var frozen = false;
  var freezeIndex = -1;
  /* Data management. */

  processor.data = data;
  /* Lock. */

  processor.freeze = freeze;
  /* Plug-ins. */

  processor.attachers = attachers;
  processor.use = use;
  /* API. */

  processor.parse = parse;
  processor.stringify = stringify;
  processor.run = run;
  processor.runSync = runSync;
  processor.process = process;
  processor.processSync = processSync;
  /* Expose. */

  return processor;
  /* Create a new processor based on the processor
   * in the current scope. */

  function processor() {
    var destination = unified();
    var length = attachers.length;
    var index = -1;

    while (++index < length) {
      destination.use.apply(null, attachers[index]);
    }

    destination.data(extend(true, {}, namespace));
    return destination;
  }
  /* Freeze: used to signal a processor that has finished
   * configuration.
   *
   * For example, take unified itself.  It’s frozen.
   * Plug-ins should not be added to it.  Rather, it should
   * be extended, by invoking it, before modifying it.
   *
   * In essence, always invoke this when exporting a
   * processor. */


  function freeze() {
    var values;
    var plugin;
    var options;
    var transformer;

    if (frozen) {
      return processor;
    }

    while (++freezeIndex < attachers.length) {
      values = attachers[freezeIndex];
      plugin = values[0];
      options = values[1];
      transformer = null;

      if (options === false) {
        continue;
      }

      if (options === true) {
        values[1] = undefined;
      }

      transformer = plugin.apply(processor, values.slice(1));

      if (typeof transformer === 'function') {
        transformers.use(transformer);
      }
    }

    frozen = true;
    freezeIndex = Infinity;
    return processor;
  }
  /* Data management.
   * Getter / setter for processor-specific informtion. */


  function data(key, value) {
    if (string(key)) {
      /* Set `key`. */
      if (arguments.length === 2) {
        assertUnfrozen('data', frozen);
        namespace[key] = value;
        return processor;
      }
      /* Get `key`. */


      return own.call(namespace, key) && namespace[key] || null;
    }
    /* Set space. */


    if (key) {
      assertUnfrozen('data', frozen);
      namespace = key;
      return processor;
    }
    /* Get space. */


    return namespace;
  }
  /* Plug-in management.
   *
   * Pass it:
   * *   an attacher and options,
   * *   a preset,
   * *   a list of presets, attachers, and arguments (list
   *     of attachers and options). */


  function use(value) {
    var settings;
    assertUnfrozen('use', frozen);

    if (value === null || value === undefined) {
      /* Empty */
    } else if (typeof value === 'function') {
      addPlugin.apply(null, arguments);
    } else if (_typeof(value) === 'object') {
      if ('length' in value) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new Error('Expected usable value, not `' + value + '`');
    }

    if (settings) {
      namespace.settings = extend(namespace.settings || {}, settings);
    }

    return processor;

    function addPreset(result) {
      addList(result.plugins);

      if (result.settings) {
        settings = extend(settings || {}, result.settings);
      }
    }

    function add(value) {
      if (typeof value === 'function') {
        addPlugin(value);
      } else if (_typeof(value) === 'object') {
        if ('length' in value) {
          addPlugin.apply(null, value);
        } else {
          addPreset(value);
        }
      } else {
        throw new Error('Expected usable value, not `' + value + '`');
      }
    }

    function addList(plugins) {
      var length;
      var index;

      if (plugins === null || plugins === undefined) {
        /* Empty */
      } else if (_typeof(plugins) === 'object' && 'length' in plugins) {
        length = plugins.length;
        index = -1;

        while (++index < length) {
          add(plugins[index]);
        }
      } else {
        throw new Error('Expected a list of plugins, not `' + plugins + '`');
      }
    }

    function addPlugin(plugin, value) {
      var entry = find(plugin);

      if (entry) {
        if (plain(entry[1]) && plain(value)) {
          value = extend(entry[1], value);
        }

        entry[1] = value;
      } else {
        attachers.push(slice.call(arguments));
      }
    }
  }

  function find(plugin) {
    var length = attachers.length;
    var index = -1;
    var entry;

    while (++index < length) {
      entry = attachers[index];

      if (entry[0] === plugin) {
        return entry;
      }
    }
  }
  /* Parse a file (in string or VFile representation)
   * into a Unist node using the `Parser` on the
   * processor. */


  function parse(doc) {
    var file = vfile(doc);
    var Parser;
    freeze();
    Parser = processor.Parser;
    assertParser('parse', Parser);

    if (newable(Parser)) {
      return new Parser(String(file), file).parse();
    }

    return Parser(String(file), file); // eslint-disable-line new-cap
  }
  /* Run transforms on a Unist node representation of a file
   * (in string or VFile representation), async. */


  function run(node, file, cb) {
    assertNode(node);
    freeze();

    if (!cb && typeof file === 'function') {
      cb = file;
      file = null;
    }

    if (!cb) {
      return new Promise(executor);
    }

    executor(null, cb);

    function executor(resolve, reject) {
      transformers.run(node, vfile(file), done);

      function done(err, tree, file) {
        tree = tree || node;

        if (err) {
          reject(err);
        } else if (resolve) {
          resolve(tree);
        } else {
          cb(null, tree, file);
        }
      }
    }
  }
  /* Run transforms on a Unist node representation of a file
   * (in string or VFile representation), sync. */


  function runSync(node, file) {
    var complete = false;
    var result;
    run(node, file, done);
    assertDone('runSync', 'run', complete);
    return result;

    function done(err, tree) {
      complete = true;
      bail(err);
      result = tree;
    }
  }
  /* Stringify a Unist node representation of a file
   * (in string or VFile representation) into a string
   * using the `Compiler` on the processor. */


  function stringify(node, doc) {
    var file = vfile(doc);
    var Compiler;
    freeze();
    Compiler = processor.Compiler;
    assertCompiler('stringify', Compiler);
    assertNode(node);

    if (newable(Compiler)) {
      return new Compiler(node, file).compile();
    }

    return Compiler(node, file); // eslint-disable-line new-cap
  }
  /* Parse a file (in string or VFile representation)
   * into a Unist node using the `Parser` on the processor,
   * then run transforms on that node, and compile the
   * resulting node using the `Compiler` on the processor,
   * and store that result on the VFile. */


  function process(doc, cb) {
    freeze();
    assertParser('process', processor.Parser);
    assertCompiler('process', processor.Compiler);

    if (!cb) {
      return new Promise(executor);
    }

    executor(null, cb);

    function executor(resolve, reject) {
      var file = vfile(doc);
      pipeline.run(processor, {
        file: file
      }, done);

      function done(err) {
        if (err) {
          reject(err);
        } else if (resolve) {
          resolve(file);
        } else {
          cb(null, file);
        }
      }
    }
  }
  /* Process the given document (in string or VFile
   * representation), sync. */


  function processSync(doc) {
    var complete = false;
    var file;
    freeze();
    assertParser('processSync', processor.Parser);
    assertCompiler('processSync', processor.Compiler);
    file = vfile(doc);
    process(file, done);
    assertDone('processSync', 'process', complete);
    return file;

    function done(err) {
      complete = true;
      bail(err);
    }
  }
}
/* Check if `func` is a constructor. */


function newable(value) {
  return typeof value === 'function' && keys(value.prototype);
}
/* Check if `value` is an object with keys. */


function keys(value) {
  var key;

  for (key in value) {
    return true;
  }

  return false;
}
/* Assert a parser is available. */


function assertParser(name, Parser) {
  if (typeof Parser !== 'function') {
    throw new Error('Cannot `' + name + '` without `Parser`');
  }
}
/* Assert a compiler is available. */


function assertCompiler(name, Compiler) {
  if (typeof Compiler !== 'function') {
    throw new Error('Cannot `' + name + '` without `Compiler`');
  }
}
/* Assert the processor is not frozen. */


function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error(['Cannot invoke `' + name + '` on a frozen processor.\nCreate a new ', 'processor first, by invoking it: use `processor()` instead of ', '`processor`.'].join(''));
  }
}
/* Assert `node` is a Unist node. */


function assertNode(node) {
  if (!node || !string(node.type)) {
    throw new Error('Expected node, got `' + node + '`');
  }
}
/* Assert that `complete` is `true`. */


function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error('`' + name + '` finished async. Use `' + asyncName + '` instead');
  }
}

/***/ }),

/***/ "./node_modules/unist-util-is/convert.js":
/*!***********************************************!*\
  !*** ./node_modules/unist-util-is/convert.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = convert;

function convert(test) {
  if (typeof test === 'string') {
    return typeFactory(test);
  }

  if (test === null || test === undefined) {
    return ok;
  }

  if (_typeof(test) === 'object') {
    return ('length' in test ? anyFactory : matchesFactory)(test);
  }

  if (typeof test === 'function') {
    return test;
  }

  throw new Error('Expected function, string, or object as test');
}

function convertAll(tests) {
  var results = [];
  var length = tests.length;
  var index = -1;

  while (++index < length) {
    results[index] = convert(tests[index]);
  }

  return results;
} // Utility assert each property in `test` is represented in `node`, and each
// values are strictly equal.


function matchesFactory(test) {
  return matches;

  function matches(node) {
    var key;

    for (key in test) {
      if (node[key] !== test[key]) {
        return false;
      }
    }

    return true;
  }
}

function anyFactory(tests) {
  var checks = convertAll(tests);
  var length = checks.length;
  return matches;

  function matches() {
    var index = -1;

    while (++index < length) {
      if (checks[index].apply(this, arguments)) {
        return true;
      }
    }

    return false;
  }
} // Utility to convert a string into a function which checks a given node’s type
// for said string.


function typeFactory(test) {
  return type;

  function type(node) {
    return Boolean(node && node.type === test);
  }
} // Utility to return true.


function ok() {
  return true;
}

/***/ }),

/***/ "./node_modules/unist-util-remove-position/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/unist-util-remove-position/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js");

module.exports = removePosition;

function removePosition(node, force) {
  visit(node, force ? hard : soft);
  return node;
}

function hard(node) {
  delete node.position;
}

function soft(node) {
  node.position = undefined;
}

/***/ }),

/***/ "./node_modules/unist-util-stringify-position/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/unist-util-stringify-position/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var own = {}.hasOwnProperty;
module.exports = stringify;

function stringify(value) {
  /* Nothing. */
  if (!value || _typeof(value) !== 'object') {
    return null;
  }
  /* Node. */


  if (own.call(value, 'position') || own.call(value, 'type')) {
    return position(value.position);
  }
  /* Position. */


  if (own.call(value, 'start') || own.call(value, 'end')) {
    return position(value);
  }
  /* Point. */


  if (own.call(value, 'line') || own.call(value, 'column')) {
    return point(value);
  }
  /* ? */


  return null;
}

function point(point) {
  if (!point || _typeof(point) !== 'object') {
    point = {};
  }

  return index(point.line) + ':' + index(point.column);
}

function position(pos) {
  if (!pos || _typeof(pos) !== 'object') {
    pos = {};
  }

  return point(pos.start) + '-' + point(pos.end);
}

function index(value) {
  return value && typeof value === 'number' ? value : 1;
}

/***/ }),

/***/ "./node_modules/unist-util-visit-parents/index.js":
/*!********************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* Expose. */

module.exports = visitParents;
/* Visit. */

function visitParents(tree, type, visitor) {
  var stack = [];

  if (typeof type === 'function') {
    visitor = type;
    type = null;
  }

  one(tree);
  /* Visit a single node. */

  function one(node) {
    var result;

    if (!type || node.type === type) {
      result = visitor(node, stack.concat());
    }

    if (node.children && result !== false) {
      return all(node.children, node);
    }

    return result;
  }
  /* Visit children in `parent`. */


  function all(children, parent) {
    var length = children.length;
    var index = -1;
    var child;
    stack.push(parent);

    while (++index < length) {
      child = children[index];

      if (child && one(child) === false) {
        return false;
      }
    }

    stack.pop();
    return true;
  }
}

/***/ }),

/***/ "./node_modules/unist-util-visit/index.js":
/*!************************************************!*\
  !*** ./node_modules/unist-util-visit/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visit;

var visitParents = __webpack_require__(/*! unist-util-visit-parents */ "./node_modules/unist-util-visit/node_modules/unist-util-visit-parents/index.js");

var CONTINUE = visitParents.CONTINUE;
var SKIP = visitParents.SKIP;
var EXIT = visitParents.EXIT;
visit.CONTINUE = CONTINUE;
visit.SKIP = SKIP;
visit.EXIT = EXIT;

function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor;
    visitor = test;
    test = null;
  }

  visitParents(tree, test, overload, reverse);

  function overload(node, parents) {
    var parent = parents[parents.length - 1];
    var index = parent ? parent.children.indexOf(node) : null;
    return visitor(node, index, parent);
  }
}

/***/ }),

/***/ "./node_modules/unist-util-visit/node_modules/unist-util-visit-parents/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/unist-util-visit/node_modules/unist-util-visit-parents/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = visitParents;

var convert = __webpack_require__(/*! unist-util-is/convert */ "./node_modules/unist-util-is/convert.js");

var CONTINUE = true;
var SKIP = 'skip';
var EXIT = false;
visitParents.CONTINUE = CONTINUE;
visitParents.SKIP = SKIP;
visitParents.EXIT = EXIT;

function visitParents(tree, test, visitor, reverse) {
  var is;

  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor;
    visitor = test;
    test = null;
  }

  is = convert(test);
  one(tree, null, []); // Visit a single node.

  function one(node, index, parents) {
    var result = [];
    var subresult;

    if (!test || is(node, index, parents[parents.length - 1] || null)) {
      result = toResult(visitor(node, parents));

      if (result[0] === EXIT) {
        return result;
      }
    }

    if (node.children && result[0] !== SKIP) {
      subresult = toResult(all(node.children, parents.concat(node)));
      return subresult[0] === EXIT ? subresult : result;
    }

    return result;
  } // Visit children in `parent`.


  function all(children, parents) {
    var min = -1;
    var step = reverse ? -1 : 1;
    var index = (reverse ? children.length : min) + step;
    var result;

    while (index > min && index < children.length) {
      result = one(children[index], index, parents);

      if (result[0] === EXIT) {
        return result;
      }

      index = typeof result[1] === 'number' ? result[1] : index + step;
    }
  }
}

function toResult(value) {
  if (value !== null && _typeof(value) === 'object' && 'length' in value) {
    return value;
  }

  if (typeof value === 'number') {
    return [CONTINUE, value];
  }

  return [value];
}

/***/ }),

/***/ "./node_modules/vfile-location/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vfile-location/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory;

function factory(file) {
  var contents = indices(String(file));
  return {
    toPosition: offsetToPositionFactory(contents),
    toOffset: positionToOffsetFactory(contents)
  };
} // Factory to get the line and column-based `position` for `offset` in the bound
// indices.


function offsetToPositionFactory(indices) {
  return offsetToPosition; // Get the line and column-based `position` for `offset` in the bound indices.

  function offsetToPosition(offset) {
    var index = -1;
    var length = indices.length;

    if (offset < 0) {
      return {};
    }

    while (++index < length) {
      if (indices[index] > offset) {
        return {
          line: index + 1,
          column: offset - (indices[index - 1] || 0) + 1,
          offset: offset
        };
      }
    }

    return {};
  }
} // Factory to get the `offset` for a line and column-based `position` in the
// bound indices.


function positionToOffsetFactory(indices) {
  return positionToOffset; // Get the `offset` for a line and column-based `position` in the bound
  // indices.

  function positionToOffset(position) {
    var line = position && position.line;
    var column = position && position.column;

    if (!isNaN(line) && !isNaN(column) && line - 1 in indices) {
      return (indices[line - 2] || 0) + column - 1 || 0;
    }

    return -1;
  }
} // Get indices of line-breaks in `value`.


function indices(value) {
  var result = [];
  var index = value.indexOf('\n');

  while (index !== -1) {
    result.push(index + 1);
    index = value.indexOf('\n', index + 1);
  }

  result.push(value.length + 1);
  return result;
}

/***/ }),

/***/ "./node_modules/vfile-message/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vfile-message/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! unist-util-stringify-position */ "./node_modules/unist-util-stringify-position/index.js");

module.exports = VMessage; // Inherit from `Error#`.

function VMessagePrototype() {}

VMessagePrototype.prototype = Error.prototype;
VMessage.prototype = new VMessagePrototype(); // Message properties.

var proto = VMessage.prototype;
proto.file = '';
proto.name = '';
proto.reason = '';
proto.message = '';
proto.stack = '';
proto.fatal = null;
proto.column = null;
proto.line = null; // Construct a new VMessage.
//
// Note: We cannot invoke `Error` on the created context, as that adds readonly
// `line` and `column` attributes on Safari 9, thus throwing and failing the
// data.

function VMessage(reason, position, origin) {
  var parts;
  var range;
  var location;

  if (typeof position === 'string') {
    origin = position;
    position = null;
  }

  parts = parseOrigin(origin);
  range = stringify(position) || '1:1';
  location = {
    start: {
      line: null,
      column: null
    },
    end: {
      line: null,
      column: null
    }
  }; // Node.

  if (position && position.position) {
    position = position.position;
  }

  if (position) {
    // Position.
    if (position.start) {
      location = position;
      position = position.start;
    } else {
      // Point.
      location.start = position;
    }
  }

  if (reason.stack) {
    this.stack = reason.stack;
    reason = reason.message;
  }

  this.message = reason;
  this.name = range;
  this.reason = reason;
  this.line = position ? position.line : null;
  this.column = position ? position.column : null;
  this.location = location;
  this.source = parts[0];
  this.ruleId = parts[1];
}

function parseOrigin(origin) {
  var result = [null, null];
  var index;

  if (typeof origin === 'string') {
    index = origin.indexOf(':');

    if (index === -1) {
      result[1] = origin;
    } else {
      result[0] = origin.slice(0, index);
      result[1] = origin.slice(index + 1);
    }
  }

  return result;
}

/***/ }),

/***/ "./node_modules/vfile/core.js":
/*!************************************!*\
  !*** ./node_modules/vfile/core.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

var replace = __webpack_require__(/*! replace-ext */ "./node_modules/replace-ext/index.js");

var buffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");

module.exports = VFile;
var own = {}.hasOwnProperty;
var proto = VFile.prototype;
proto.toString = toString;
/* Order of setting (least specific to most), we need this because
 * otherwise `{stem: 'a', path: '~/b.js'}` would throw, as a path
 * is needed before a stem can be set. */

var order = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
/* Construct a new file. */

function VFile(options) {
  var prop;
  var index;
  var length;

  if (!options) {
    options = {};
  } else if (typeof options === 'string' || buffer(options)) {
    options = {
      contents: options
    };
  } else if ('message' in options && 'messages' in options) {
    return options;
  }

  if (!(this instanceof VFile)) {
    return new VFile(options);
  }

  this.data = {};
  this.messages = [];
  this.history = [];
  this.cwd = process.cwd();
  /* Set path related properties in the correct order. */

  index = -1;
  length = order.length;

  while (++index < length) {
    prop = order[index];

    if (own.call(options, prop)) {
      this[prop] = options[prop];
    }
  }
  /* Set non-path related properties. */


  for (prop in options) {
    if (order.indexOf(prop) === -1) {
      this[prop] = options[prop];
    }
  }
}
/* Access full path (`~/index.min.js`). */


Object.defineProperty(proto, 'path', {
  get: function get() {
    return this.history[this.history.length - 1];
  },
  set: function set(path) {
    assertNonEmpty(path, 'path');

    if (path !== this.path) {
      this.history.push(path);
    }
  }
});
/* Access parent path (`~`). */

Object.defineProperty(proto, 'dirname', {
  get: function get() {
    return typeof this.path === 'string' ? path.dirname(this.path) : undefined;
  },
  set: function set(dirname) {
    assertPath(this.path, 'dirname');
    this.path = path.join(dirname || '', this.basename);
  }
});
/* Access basename (`index.min.js`). */

Object.defineProperty(proto, 'basename', {
  get: function get() {
    return typeof this.path === 'string' ? path.basename(this.path) : undefined;
  },
  set: function set(basename) {
    assertNonEmpty(basename, 'basename');
    assertPart(basename, 'basename');
    this.path = path.join(this.dirname || '', basename);
  }
});
/* Access extname (`.js`). */

Object.defineProperty(proto, 'extname', {
  get: function get() {
    return typeof this.path === 'string' ? path.extname(this.path) : undefined;
  },
  set: function set(extname) {
    var ext = extname || '';
    assertPart(ext, 'extname');
    assertPath(this.path, 'extname');

    if (ext) {
      if (ext.charAt(0) !== '.') {
        throw new Error('`extname` must start with `.`');
      }

      if (ext.indexOf('.', 1) !== -1) {
        throw new Error('`extname` cannot contain multiple dots');
      }
    }

    this.path = replace(this.path, ext);
  }
});
/* Access stem (`index.min`). */

Object.defineProperty(proto, 'stem', {
  get: function get() {
    return typeof this.path === 'string' ? path.basename(this.path, this.extname) : undefined;
  },
  set: function set(stem) {
    assertNonEmpty(stem, 'stem');
    assertPart(stem, 'stem');
    this.path = path.join(this.dirname || '', stem + (this.extname || ''));
  }
});
/* Get the value of the file. */

function toString(encoding) {
  var value = this.contents || '';
  return buffer(value) ? value.toString(encoding) : String(value);
}
/* Assert that `part` is not a path (i.e., does
 * not contain `path.sep`). */


function assertPart(part, name) {
  if (part.indexOf(path.sep) !== -1) {
    throw new Error('`' + name + '` cannot be a path: did not expect `' + path.sep + '`');
  }
}
/* Assert that `part` is not empty. */


function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty');
  }
}
/* Assert `path` exists. */


function assertPath(path, name) {
  if (!path) {
    throw new Error('Setting `' + name + '` requires `path` to be set too');
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/vfile/index.js":
/*!*************************************!*\
  !*** ./node_modules/vfile/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var VMessage = __webpack_require__(/*! vfile-message */ "./node_modules/vfile-message/index.js");

var VFile = __webpack_require__(/*! ./core.js */ "./node_modules/vfile/core.js");

module.exports = VFile;
var proto = VFile.prototype;
proto.message = message;
proto.info = info;
proto.fail = fail;
/* Slight backwards compatibility.  Remove in the future. */

proto.warn = message;
/* Create a message with `reason` at `position`.
 * When an error is passed in as `reason`, copies the stack. */

function message(reason, position, origin) {
  var filePath = this.path;
  var message = new VMessage(reason, position, origin);

  if (filePath) {
    message.name = filePath + ':' + message.name;
    message.file = filePath;
  }

  message.fatal = false;
  this.messages.push(message);
  return message;
}
/* Fail. Creates a vmessage, associates it with the file,
 * and throws it. */


function fail() {
  var message = this.message.apply(this, arguments);
  message.fatal = true;
  throw message;
}
/* Info. Creates a vmessage, associates it with the file,
 * and marks the fatality as null. */


function info() {
  var message = this.message.apply(this, arguments);
  message.fatal = null;
  return message;
}

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/x-is-string/index.js":
/*!*******************************************!*\
  !*** ./node_modules/x-is-string/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = Object.prototype.toString;
module.exports = isString;

function isString(obj) {
  return toString.call(obj) === "[object String]";
}

/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/*!*****************************************!*\
  !*** ./node_modules/xtend/immutable.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
  var target = {};

  for (var i = 0; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
}

/***/ }),

/***/ "./srcjs/customSlider.jsx":
/*!********************************!*\
  !*** ./srcjs/customSlider.jsx ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reactR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reactR */ "reactR");
/* harmony import */ var reactR__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reactR__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_ion_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ion-slider */ "./node_modules/react-ion-slider/dist/index.es.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var SingleSliderInput = function SingleSliderInput(_ref) {
  var configuration = _ref.configuration,
      value = _ref.value,
      setValue = _ref.setValue;
  var sliderEl = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var id = shortid__WEBPACK_IMPORTED_MODULE_3___default.a.generate();
  var ionStyle = {
    display: "inline-block",
    'vertical-align': "middle",
    'max-width': "25%",
    'min-width': "20%",
    'padding-right': "1.5rem"
  };
  var tinputStyle = {
    display: "inline-block",
    'vertical-align': "middle",
    'padding-top': "2%",
    'max-width': "10%"
  };
  var contentStyle = {
    "display": "inline-block",
    "vertical-align": "middle",
    "padding-top": "2%",
    "max-width": "62%"
  };

  var handle_ion = function handle_ion(val) {
    setValue(_objectSpread(_objectSpread({}, value), {}, {
      state: val.from
    }));
  };

  var handle_numeric = function handle_numeric(evt) {
    var val = evt.target.value;
    val = val > 100 ? 100 : val;
    val = val < 0 ? 0 : val;
    sliderEl.current.update({
      from: val
    });
    setValue(_objectSpread(_objectSpread({}, value), {}, {
      state: val
    }));
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: 'react-slider'
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: id
  }, value.label), /*#__PURE__*/React.createElement(react_ion_slider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: id,
    type: "single",
    min: 0,
    max: 100,
    from: value.state,
    step: 1,
    onChange: handle_ion,
    ref: sliderEl,
    grid: true,
    postfix: "%"
  })), /*#__PURE__*/React.createElement("div", {
    className: 'react-tbox'
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value.state,
    min: 0,
    max: 100,
    onChange: handle_numeric
  })), /*#__PURE__*/React.createElement("div", {
    className: 'react-content'
  }, /*#__PURE__*/React.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a, {
    source: value.content
  })));
};

Object(reactR__WEBPACK_IMPORTED_MODULE_0__["reactShinyInput"])('.customSlider', 'customSlider.customSlider', SingleSliderInput);

/***/ }),

/***/ "react":
/*!*******************************!*\
  !*** external "window.React" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.React;

/***/ }),

/***/ "reactR":
/*!********************************!*\
  !*** external "window.reactR" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.reactR;

/***/ })

/******/ });
//# sourceMappingURL=single.js.map