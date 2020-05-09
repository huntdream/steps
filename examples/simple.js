/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"examples/simple": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([9,"common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/simple.js":
/*!****************************!*\
  !*** ./examples/simple.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rc_steps_assets_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-steps/assets/index.less */ "./assets/index.less");
/* harmony import */ var rc_steps_assets_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rc_steps_assets_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_steps_assets_iconfont_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-steps/assets/iconfont.less */ "./assets/iconfont.less");
/* harmony import */ var rc_steps_assets_iconfont_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rc_steps_assets_iconfont_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_steps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-steps */ "./index.js");
/* harmony import */ var rc_steps__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_steps__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var container = document.getElementById('__react-content');
var description = '这里是多信息的描述啊描述啊描述啊描述啊哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶哦耶';

var ControlSteps = function ControlSteps() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      current = _React$useState2[0],
      setCurrent = _React$useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_steps__WEBPACK_IMPORTED_MODULE_4___default.a, {
    current: current,
    onChange: function onChange(val) {
      console.log('Change:', val);
      setCurrent(val);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_steps__WEBPACK_IMPORTED_MODULE_4__["Step"], {
    title: "\u5DF2\u5B8C\u6210"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_steps__WEBPACK_IMPORTED_MODULE_4__["Step"], {
    title: "\u8FDB\u884C\u4E2D"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_steps__WEBPACK_IMPORTED_MODULE_4__["Step"], {
    title: "\u5F85\u8FD0\u884C",
    description: "Hello World!"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_steps__WEBPACK_IMPORTED_MODULE_4__["Step"], {
    title: "\u5F85\u8FD0\u884C"
  }));
};

react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_steps__WEBPACK_IMPORTED_MODULE_4___default.a, {
  current: 1
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_steps__WEBPACK_IMPORTED_MODULE_4__["Step"], {
  title: "\u5DF2\u5B8C\u6210"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_steps__WEBPACK_IMPORTED_MODULE_4__["Step"], {
  title: "\u8FDB\u884C\u4E2D"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_steps__WEBPACK_IMPORTED_MODULE_4__["Step"], {
  title: "\u5F85\u8FD0\u884C"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_steps__WEBPACK_IMPORTED_MODULE_4__["Step"], {
  title: "\u5F85\u8FD0\u884C"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_steps__WEBPACK_IMPORTED_MODULE_4___default.a, {
  current: 1,
  style: {
    marginTop: 40
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_steps__WEBPACK_IMPORTED_MODULE_4__["Step"], {
  title: "\u5DF2\u5B8C\u6210",
  description: description
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_steps__WEBPACK_IMPORTED_MODULE_4__["Step"], {
  title: "\u8FDB\u884C\u4E2D",
  subTitle: "\u5269\u4F59 00:00:07",
  description: description
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_steps__WEBPACK_IMPORTED_MODULE_4__["Step"], {
  title: "\u5F85\u8FD0\u884C",
  description: description
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_steps__WEBPACK_IMPORTED_MODULE_4__["Step"], {
  title: "\u5F85\u8FD0\u884C",
  description: description
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_steps__WEBPACK_IMPORTED_MODULE_4___default.a, {
  current: 1,
  style: {
    marginTop: 40
  },
  status: "error"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_steps__WEBPACK_IMPORTED_MODULE_4__["Step"], {
  title: "\u5DF2\u5B8C\u6210",
  description: description
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_steps__WEBPACK_IMPORTED_MODULE_4__["Step"], {
  title: "\u8FDB\u884C\u4E2D",
  description: description
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_steps__WEBPACK_IMPORTED_MODULE_4__["Step"], {
  title: "\u5F85\u8FD0\u884C",
  description: description
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_steps__WEBPACK_IMPORTED_MODULE_4__["Step"], {
  title: "\u5F85\u8FD0\u884C",
  description: description
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ControlSteps, null)), container);

/***/ }),

/***/ 9:
/*!**********************************!*\
  !*** multi ./examples/simple.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./examples/simple.js */"./examples/simple.js");


/***/ })

/******/ });
//# sourceMappingURL=simple.js.map