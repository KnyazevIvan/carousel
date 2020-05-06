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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/*! exports provided: client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"client\", function() { return client; });\nconst client = contentful.createClient({\r\n  space: 'n6oa629q9bmv',\r\n  accessToken: 'JXfj8dbTJaTLSgK9qsjhzndxmYy9fYOq5vnWFC7aFXY'\r\n});\n\n//# sourceURL=webpack:///./src/client.js?");

/***/ }),

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/*! exports provided: fetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetch\", function() { return fetch; });\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ \"./src/client.js\");\n/* harmony import */ var _setimg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setimg */ \"./src/setimg.js\");\n\r\n\r\n\r\nasync function fetch() {\r\n  const entries = await _client__WEBPACK_IMPORTED_MODULE_0__[\"client\"].getEntries({\r\n    content_type: \"hotel\"\r\n  })\r\n  let array = entries.items;\r\n  array.unshift(entries.items[entries.items.length - 1])\r\n  array.push(entries.items[1])\r\n  console.log(array)\r\n  Object(_setimg__WEBPACK_IMPORTED_MODULE_1__[\"setImgs\"])(entries.items)\r\n}\r\n\n\n//# sourceURL=webpack:///./src/fetch.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: carousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"carousel\", function() { return carousel; });\n/* harmony import */ var _touch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./touch */ \"./src/touch.js\");\n/* harmony import */ var _setimg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setimg */ \"./src/setimg.js\");\n/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch */ \"./src/fetch.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst carousel = document.querySelector('.carousel');\r\nconst leftBtn = document.querySelector('.fa-arrow-left');\r\nconst rightBtn = document.querySelector('.fa-arrow-right');\r\n\r\nlet index = 1;\r\nlet size = carousel.clientWidth;\r\ncarousel.style.transform = `translatex(${index * size * -1}px)`;\r\n\r\n\r\nObject(_fetch__WEBPACK_IMPORTED_MODULE_2__[\"fetch\"])()\r\n\r\nleftBtn.addEventListener('click', leftSlide);\r\nrightBtn.addEventListener('click', rightSlide);\r\ncarousel.addEventListener('touchstart', _touch__WEBPACK_IMPORTED_MODULE_0__[\"dragStart\"])\r\ncarousel.addEventListener('touchmove', _touch__WEBPACK_IMPORTED_MODULE_0__[\"dragAction\"]);\r\ncarousel.addEventListener('touchend', _touch__WEBPACK_IMPORTED_MODULE_0__[\"dragEnd\"])\r\ncarousel.onmousedown = _touch__WEBPACK_IMPORTED_MODULE_0__[\"dragStart\"];\r\n\r\n\r\n\r\ncarousel.addEventListener('transitionend', function () {\r\n  if (index === 0) {\r\n    index = _setimg__WEBPACK_IMPORTED_MODULE_1__[\"totalImgAmount\"] - 2;\r\n    carousel.style.transform = `translatex(${-size * index}px)`;\r\n  }\r\n  if (index === _setimg__WEBPACK_IMPORTED_MODULE_1__[\"totalImgAmount\"] - 1) {\r\n    carousel.style.transition = 'none';\r\n    index = 1;\r\n    carousel.style.transform = `translatex(${-size * index}px)`;\r\n  }\r\n})\r\n\r\n\r\nfunction leftSlide() {\r\n  if (index <= 0) {\r\n    return;\r\n  }\r\n  index--;\r\n  carousel.style.transform = `translatex(${-size * index}px)`;\r\n  carousel.style.transition = 'transform 0.4s ease';\r\n}\r\n\r\nfunction rightSlide() {\r\n  if (index >= _setimg__WEBPACK_IMPORTED_MODULE_1__[\"totalImgAmount\"] - 1) {\r\n    return;\r\n  }\r\n  carousel.style.transition = 'transform 0.4s ease';\r\n  index++;\r\n  carousel.style.transform = `translatex(${-size * index}px)`;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/setimg.js":
/*!***********************!*\
  !*** ./src/setimg.js ***!
  \***********************/
/*! exports provided: totalImgAmount, setImgs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"totalImgAmount\", function() { return totalImgAmount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setImgs\", function() { return setImgs; });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/main.js\");\n\r\n\r\nlet totalImgAmount = 0;\r\n\r\nfunction setImgs(state) {\r\n\r\n  totalImgAmount = state.length;\r\n  for (let i = 0; i < totalImgAmount; i++) {\r\n    let img = document.createElement('img')\r\n    _main__WEBPACK_IMPORTED_MODULE_0__[\"carousel\"].appendChild(img).setAttribute('src', state[i].fields.img.fields.file.url);\r\n    _main__WEBPACK_IMPORTED_MODULE_0__[\"carousel\"].appendChild(img).setAttribute('alt', state[i].fields.name);\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/setimg.js?");

/***/ }),

/***/ "./src/touch.js":
/*!**********************!*\
  !*** ./src/touch.js ***!
  \**********************/
/*! exports provided: dragAction, dragStart, dragEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dragAction\", function() { return dragAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dragStart\", function() { return dragStart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dragEnd\", function() { return dragEnd; });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/main.js\");\n\r\n\r\nvar clientX, shift;\r\n\r\nfunction dragAction(e) {\r\n  \r\n  _main__WEBPACK_IMPORTED_MODULE_0__[\"carousel\"].style.transition = 'none';\r\n\r\n\r\n    \r\n    if (e.type == 'touchmove') {\r\n      clientX = e.touches[0].clientX - shift;\r\n    } else {\r\n      clientX = e.clientX-shift;\r\n    }\r\n\r\n  _main__WEBPACK_IMPORTED_MODULE_0__[\"carousel\"].style.transform = `translatex(${-size * index + clientX}px)`;\r\n\r\n  console.log('clientx:', clientX, 'translateX', -size * index + clientX)\r\n}\r\n\r\n\r\nfunction dragStart(e){\r\n  e = e || window.event;\r\n  e.preventDefault();\r\n  \r\n  if (e.type == 'touchstart') {\r\n    shift = e.touches[0].clientX;\r\n  }\r\n  else {\r\n    shift = e.clientX;\r\n    document.onmouseup = dragEnd;\r\n    document.onmousemove = dragAction;\r\n  }\r\n}\r\nfunction dragEnd(e) {\r\n  e = e || window.event;\r\n\r\n  if (clientX < -60) {\r\n    rightSlide();\r\n  }\r\n  if (clientX > 60) {\r\n    leftSlide();\r\n  }\r\n  else {\r\n    _main__WEBPACK_IMPORTED_MODULE_0__[\"carousel\"].style.transform = `translatex(${-size * index}px)`;\r\n    _main__WEBPACK_IMPORTED_MODULE_0__[\"carousel\"].style.transition = 'transform 0.4s ease';\r\n  }\r\n\r\n  document.onmouseup = null;\r\n  document.onmousemove = null;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/touch.js?");

/***/ })

/******/ });