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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/orders/orders.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.css":
/*!****************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./node_modules/@fortawesome/fontawesome-free/css/all.css?");

/***/ }),

/***/ "./src/basket/scripts/menu.js":
/*!************************************!*\
  !*** ./src/basket/scripts/menu.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var menuToggle = document.querySelector('#menuToggle');\nvar menu = document.querySelector('aside');\nvar blackFilter = document.querySelector('#blackFilter');\nmenuToggle.addEventListener('click', toggleMenu);\n\nfunction toggleMenu(e) {\n  e.stopPropagation();\n  menuToggle.classList.toggle('move');\n  menu.classList.toggle('show');\n  blackFilter.classList.toggle('show');\n  if (menu.classList.contains('show')) document.addEventListener('click', menuDocHandler);else document.removeEventListener('click', menuDocHandler);\n}\n\nfunction menuDocHandler(e) {\n  e.stopPropagation();\n  var clickedElm = e.target;\n\n  if (!menu.contains(clickedElm)) {\n    menuToggle.classList.remove('move');\n    menu.classList.remove('show');\n    blackFilter.classList.remove('show');\n    document.removeEventListener('click', menuDocHandler);\n  }\n}\n\n//# sourceURL=webpack:///./src/basket/scripts/menu.js?");

/***/ }),

/***/ "./src/basket/styles/menu.scss":
/*!*************************************!*\
  !*** ./src/basket/styles/menu.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/basket/styles/menu.scss?");

/***/ }),

/***/ "./src/framework.scss":
/*!****************************!*\
  !*** ./src/framework.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/framework.scss?");

/***/ }),

/***/ "./src/index/scripts/search.js":
/*!*************************************!*\
  !*** ./src/index/scripts/search.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var searchForm = document.querySelector('form#searchForm');\nvar productsList = searchForm.querySelector('.productsWrapper');\nvar productsListTrigger = productsList.querySelector('.title');\nvar productsCategories = productsList.querySelector('.categories');\nproductsListTrigger.addEventListener('click', toggleProductsList);\n\nfunction toggleProductsList(e) {\n  e.stopPropagation();\n  productsCategories.classList.toggle('show');\n  if (productsCategories.classList.contains('show')) document.addEventListener('click', productsDocHandler);else document.removeEventListener('click', productsDocHandler);\n}\n\nfunction productsDocHandler(e) {\n  e.stopPropagation();\n  var clickedElm = e.target;\n\n  if (!productsList.contains(clickedElm)) {\n    productsCategories.classList.remove('show');\n    document.removeEventListener('click', productsDocHandler);\n  }\n}\n\n//# sourceURL=webpack:///./src/index/scripts/search.js?");

/***/ }),

/***/ "./src/index/scripts/topMenu.js":
/*!**************************************!*\
  !*** ./src/index/scripts/topMenu.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var topMenu = document.querySelector('header #topMenu');\nvar mobileMenu = topMenu.querySelector('#mobileMenu ul');\nvar mobileMenuTrigger = topMenu.querySelector('#mobileMenu .fa-bars');\nmobileMenuTrigger.addEventListener('click', toggleMobileMenu);\n\nfunction toggleMobileMenu(e) {\n  e.stopPropagation();\n  mobileMenu.classList.toggle('show');\n  if (mobileMenu.classList.contains('show')) document.addEventListener('click', mobileDocHandler);else document.removeEventListener('click', mobileDocHandler);\n}\n\nfunction mobileDocHandler(e) {\n  e.stopPropagation();\n  var clickedElm = e.target;\n\n  if (!mobileMenu.contains(clickedElm)) {\n    mobileMenu.classList.remove('show');\n    document.removeEventListener('click', mobileDocHandler);\n  }\n}\n\n//# sourceURL=webpack:///./src/index/scripts/topMenu.js?");

/***/ }),

/***/ "./src/index/styles/footer.scss":
/*!**************************************!*\
  !*** ./src/index/styles/footer.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index/styles/footer.scss?");

/***/ }),

/***/ "./src/index/styles/search.scss":
/*!**************************************!*\
  !*** ./src/index/styles/search.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index/styles/search.scss?");

/***/ }),

/***/ "./src/index/styles/topMenu.scss":
/*!***************************************!*\
  !*** ./src/index/styles/topMenu.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index/styles/topMenu.scss?");

/***/ }),

/***/ "./src/init.scss":
/*!***********************!*\
  !*** ./src/init.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/init.scss?");

/***/ }),

/***/ "./src/orders/orders.js":
/*!******************************!*\
  !*** ./src/orders/orders.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/@fortawesome/fontawesome-free/css/all.css */ \"./node_modules/@fortawesome/fontawesome-free/css/all.css\");\n/* harmony import */ var _node_modules_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _framework_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../framework.scss */ \"./src/framework.scss\");\n/* harmony import */ var _framework_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_framework_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utilities_styles_form_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/styles/form.scss */ \"./src/utilities/styles/form.scss\");\n/* harmony import */ var _utilities_styles_form_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utilities_styles_form_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _init_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../init.scss */ \"./src/init.scss\");\n/* harmony import */ var _init_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_init_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_styles_topMenu_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index/styles/topMenu.scss */ \"./src/index/styles/topMenu.scss\");\n/* harmony import */ var _index_styles_topMenu_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_styles_topMenu_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _index_styles_search_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index/styles/search.scss */ \"./src/index/styles/search.scss\");\n/* harmony import */ var _index_styles_search_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_styles_search_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _basket_styles_menu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../basket/styles/menu.scss */ \"./src/basket/styles/menu.scss\");\n/* harmony import */ var _basket_styles_menu_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_basket_styles_menu_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _orders_styles_orders_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../orders/styles/orders.scss */ \"./src/orders/styles/orders.scss\");\n/* harmony import */ var _orders_styles_orders_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_orders_styles_orders_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _index_styles_footer_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../index/styles/footer.scss */ \"./src/index/styles/footer.scss\");\n/* harmony import */ var _index_styles_footer_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_styles_footer_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _index_scripts_topMenu_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../index/scripts/topMenu.js */ \"./src/index/scripts/topMenu.js\");\n/* harmony import */ var _index_scripts_topMenu_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_scripts_topMenu_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _index_scripts_search_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../index/scripts/search.js */ \"./src/index/scripts/search.js\");\n/* harmony import */ var _index_scripts_search_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_scripts_search_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _basket_scripts_menu_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../basket/scripts/menu.js */ \"./src/basket/scripts/menu.js\");\n/* harmony import */ var _basket_scripts_menu_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_basket_scripts_menu_js__WEBPACK_IMPORTED_MODULE_11__);\n//load styles\n\n\n\n\n\n\n\n\n //load scripts\n\n\n\n //load videos\n\n//# sourceURL=webpack:///./src/orders/orders.js?");

/***/ }),

/***/ "./src/orders/styles/orders.scss":
/*!***************************************!*\
  !*** ./src/orders/styles/orders.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/orders/styles/orders.scss?");

/***/ }),

/***/ "./src/utilities/styles/form.scss":
/*!****************************************!*\
  !*** ./src/utilities/styles/form.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/utilities/styles/form.scss?");

/***/ })

/******/ });