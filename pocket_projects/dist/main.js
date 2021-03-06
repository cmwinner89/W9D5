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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\r\n\r\n// const htmlGenerator = require (\"./warmup\");\r\n\r\nclass Clock {\r\n    constructor() {\r\n      // 1. Create a Date object.\r\n      const currentTime = new Date();\r\n  \r\n      // 2. Store the hour, minute, and second.\r\n      this.hours = currentTime.getHours();\r\n      this.minutes = currentTime.getMinutes();\r\n      this.seconds = currentTime.getSeconds();\r\n  \r\n      // 3. Call printTime.\r\n\r\n      Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(this.printTime(), clockEle);\r\n\r\n      // 4. Schedule the tick at 1 second intervals.\r\n      setInterval(this._tick.bind(this), 1000);\r\n    }\r\n  \r\n    printTime() {\r\n      // Format the time in HH:MM:SS\r\n      const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\r\n      \r\n      // Use console.log to print it.\r\n        return timeString;\r\n\r\n  \r\n    }\r\n    \r\n    _tick() {\r\n      // 1. Increment the time by one second.\r\n      this._incrementSeconds();\r\n  \r\n      // 2. Call printTime.\r\n      Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"htmlGenerator\"])(clock.printTime(), clockEle);\r\n    }\r\n  \r\n    _incrementSeconds() {\r\n      // 1. Increment the time by one second.\r\n      this.seconds += 1;\r\n      if (this.seconds === 60) {\r\n        this.seconds = 0;\r\n        this._incrementMinutes();\r\n      }\r\n    }\r\n  \r\n    _incrementMinutes() {\r\n      this.minutes += 1;\r\n      if (this.minutes === 60) {\r\n        this.minutes = 0;\r\n        this._incrementHours();\r\n      }\r\n    }\r\n  \r\n    _incrementHours() {\r\n      this.hours = (this.hours + 1) % 24;\r\n    }\r\n  }\r\n  \r\n  const clockEle = document.getElementById(\"clock\");\r\n  const clock = new Clock();\r\n//   const textNode = document.createTextNode(clock.printTime());\r\n//   clockEle.appendChild(textNode)\r\n//   debugge\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: htmlGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlGenerator\", function() { return htmlGenerator; });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    // debugger\n    const pEl = document.createElement(\"p\");\n    const textNode = document.createTextNode(string);\n    pEl.appendChild(textNode);\n    htmlElement.append(pEl);\n};\n\nhtmlGenerator('Party Time.', partyHeader);\nhtmlGenerator('I <3 Vanilla DOM manipulation.', partyHeader);\n\n// module.exports = Warmup;\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });