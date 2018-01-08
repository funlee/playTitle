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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(1);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-01-09 02:10:26
 * @Last Modified time: 2018-01-09 02:10:26
 * @Description: just play 
 */
function playTitle() {
  var funny = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '页面出bug了';

  var title = document.title;
  var hidden = void 0;
  var visibilityChange = void 0;
  if (typeof document.hidden !== 'undefind') {
    hidden = 'hidden';
    visibilityChange = 'visibilitychange';
  } else if (typeof document.mozHidden !== 'undefind') {
    hidden = 'mozhidden';
    visibilityChange = 'mozvisibilitychange';
  } else if (typeof document.webkitHidden !== 'undefind') {
    hidden = 'webkithidden';
    visibilityChange = 'webkitvisibilitychange';
  } else if (typeof document.msHidden !== 'undefind') {
    hidden = 'mshidden';
    visibilityChange = 'msvisibilitychange';
  }
  document.addEventListener(visibilityChange, function () {
    document.title = document[hidden] ? funny : title;
  }, false);
}

module.exports = playTitle;

/***/ })
/******/ ]);