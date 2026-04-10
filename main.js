/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.game {\r\n    display:flex;\r\n    justify-content: space-evenly;\r\n    flex-wrap: wrap;\r\n}\r\n\r\nh1, h2 {\r\n    text-align: center;\r\n}\r\n\r\nbutton {\r\n    margin: 5px auto;\r\n}\r\n\r\n.outerBoard{\r\n    display: grid;\r\n    grid-template-columns: repeat(11, 30px);\r\n    grid-template-rows:  repeat(11, 30px);\r\n    width: fit-content;\r\n    margin: auto;\r\n    padding:10px;\r\n}\r\n\r\n .board {\r\n    border: 4px solid black;\r\n    grid-column: 2 / 12; \r\n    grid-row: 2 / 12; \r\n    display: grid;\r\n    grid-template-columns: subgrid;\r\n    grid-template-rows:subgrid;\r\n }\r\n\r\n.square {\r\n    border: 1px solid grey;\r\n    transform: scale(1, 1);\r\n    transform-origin: 0 0;\r\n }\r\n\r\n.squaresssss:hover { background-color: cadetblue;\r\n                transform: scaleX(2);\r\n                }\r\n\r\n.numbers {\r\n    text-align: center;\r\n} \r\n\r\n\r\n.ships {\r\n    display:flex;\r\n    justify-content:flex-start;\r\n    flex-wrap: wrap;\r\n    max-width: 350px;\r\n}\r\n\r\n[display=\"SH\"] {\r\n    background-color: red;\r\n}\r\n[display=\"S\"] {\r\n    background-color:slategrey  ;\r\n}\r\n[display=\"WH\"] {\r\n    background-color: blue;\r\n}\r\n[display=\"U\"] {\r\n    background-color: lightblue;\r\n}\r\n\r\n.s100 {width: 100px;\r\n    border: 4px solid black;\r\n} \r\n\r\n\r\n.s60 {width: 60px;\r\nborder: 4px solid black;\r\nmargin:0;} \r\n\r\n#addShips1, #addShips2 {\r\n    text-align: center;\r\n}\r\n\r\n.ships span{\r\n    border: 1px solid black;\r\n    margin: auto 3px;\r\n}\r\n\r\n.ships [pressed=\"current\"] {\r\n    color:blue;\r\n    border-color: blue;\r\n}\r\n.ships [pressed=\"done\"] {\r\n    color:gray;\r\n    border-color: gray;\r\n}\r\n\r\n\r\n\r\n.orientation {\r\n    margin:5px auto; \r\n    width: fit-content; \r\n}\r\n\r\n#ob1, #ob2 {\r\n   margin:5px;\r\n}\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/Battleship.js"
/*!***************************!*\
  !*** ./src/Battleship.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard),\n/* harmony export */   Player: () => (/* binding */ Player),\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nconst shipSizes =[5,4,4,3,3,3,2,2,2,2]; \r\n\r\nclass Ship {\r\n    constructor(size){\r\n        this.size = size;\r\n        this.hits = 0;\r\n        this.sunk = false;\r\n    }\r\n\r\n    hit(){               //returns = is it sunk? (t/f)\r\n        this.hits+=1;\r\n        if(this.hits >= this.size){ return true}\r\n        else {return false} \r\n    }\r\n\r\n}\r\n\r\nclass Gameboard {\r\n    constructor(){\r\n        this.squares=[]\r\n        for(let i=0; i<10; i++){\r\n            let linea=[];\r\n            for(let j=0; j<10; j++){\r\n                linea[j]=[\"W\", false];\r\n            }\r\n            this.squares[i]=linea;\r\n        }\r\n        this.ships = [] \r\n    }\r\n\r\n    placeShip(size, orientation , position) {    // orientation= v or h (vertical/horizontal) / position = [i,j] \r\n        let next=[0,1];\r\n        let [i,j]=position;\r\n        if (orientation == \"v\"){ next=[1,0]};\r\n        for(let k=0; k<size; k++){ \r\n            if (this.squares[i+k*next[0]] == undefined || this.squares[i+k*next[0]][j+k*next[1]] == undefined || this.squares[i+k*next[0]][j+k*next[1]][0] !=\"W\" ){ \r\n                return false;\r\n            }\r\n        }\r\n        let ship = new Ship(size);   \r\n        for(let k=0; k<size; k++){ \r\n            this.squares[i+k*next[0]][j+k*next[1]][0] = ship;\r\n        }\r\n        this.ships.push(ship); \r\n        return true; \r\n    }\r\n\r\n    removeAllShips(){\r\n        this.ships = [];\r\n        this.squares=[];\r\n        for(let i=0; i<10; i++){\r\n            let linea=[];\r\n            for(let j=0; j<10; j++){\r\n                linea[j]=[\"W\", false];\r\n            }\r\n            this.squares[i]=linea;\r\n        }\r\n    }\r\n\r\n    receiveAttack([i,j]){\r\n        if(this.squares[i][j][1]){ console.log( \"You can´t hit same place twice\"); return false } \r\n        this.squares[i][j][1]=true;\r\n        if (this.squares[i][j][0]==\"W\"){ \r\n            return \"W\"}  \r\n         else {\r\n            this.squares[i][j][0].sunk = this.squares[i][j][0].hit();}\r\n            return \"S\"\r\n    }\r\n      \r\n    \r\n    checkWin(){\r\n        for(let ship of this.ships){\r\n            if(ship.sunk == false){ return false}     \r\n        }\r\n        return true\r\n    }\r\n\r\n}\r\n\r\nclass Player {\r\n    constructor(name) {\r\n        this.name=name;\r\n        this.board = new Gameboard();  \r\n        this.human = true\r\n        this.hittedSquares=[];\r\n        this.nextSquares=[];\r\n        this.lastMove=[[], \"W\"];\r\n        this.hits=[];\r\n    }\r\n\r\n    randomSquare(){\r\n        let i=Math.floor(Math.random()*10);\r\n        let j=Math.floor(Math.random()*10);\r\n        return [i,j];\r\n    }\r\n    \r\n    randomOrientation(){\r\n        let o=Math.floor(Math.random()*2);\r\n        if (o == 0){ return \"v\"}\r\n        else {return \"h\"}\r\n    }\r\n\r\n    addShipRandom(size){\r\n        let placed=false;\r\n        while (placed==false) {\r\n          placed =this.board.placeShip(size, this.randomOrientation() , this.randomSquare() )   \r\n        } \r\n    }\r\n\r\n    addAllShipsRandom(){\r\n                this.board.removeAllShips();\r\n                for(let size of shipSizes){\r\n                    this.addShipRandom(size);\r\n                }\r\n    }\r\n\r\n    isShip([i,j]){\r\n        if(i<0 ||i>9){return false} \r\n        if(j<0 ||j>9){return false} \r\n        for(let sqw of this.hits){\r\n            if(i == sqw[0] && j == sqw[1]){ return true}\r\n        }\r\n        return false;\r\n    }\r\n\r\n    chooseMove(){\r\n        if(this.lastMove[1]==\"S\"){\r\n            let [li, lj]=this.lastMove[0];\r\n            this.hits.push([li, lj]);\r\n            if (this.isShip([li+1, lj])){\r\n                if(li>0){this.nextSquares.push([li-1, lj])};    \r\n            } else if  (this.isShip([li-1, lj])){\r\n                if(li<9){ this.nextSquares.push([li+1, lj])};    \r\n            } else if  (this.isShip([li, lj+1])){\r\n                if(lj>0){ this.nextSquares.push([li, lj-1])};    \r\n            } else if  (this.isShip([li, lj-1])){\r\n                if(lj<9){this.nextSquares.push([li, lj+1])};   \r\n            } else {\r\n                if(li>0){this.nextSquares.push([li-1, lj])};\r\n                if(li<9){ this.nextSquares.push([li+1, lj])};\r\n                if(lj>0){ this.nextSquares.push([li, lj-1])};\r\n                if(lj<9){this.nextSquares.push([li, lj+1])};\r\n            }\r\n            this.lastMove[1]=\"W\";\r\n        }\r\n\r\n        let i=0;\r\n        let j=0;\r\n        if(this.nextSquares.length > 0){\r\n            let next=this.nextSquares.pop()\r\n            i= next[0];\r\n            j= next[1];      //   this.nextSquares.pop()\r\n        } else {\r\n            [i,j] = this.randomSquare()\r\n        }\r\n\r\n        for(let sqw of this.hittedSquares){\r\n            if(i == sqw[0] && j == sqw[1]){ \r\n                 return this.chooseMove()} \r\n        } \r\n        this.hittedSquares.push([i,j])\r\n        return [i,j]\r\n    }\r\n\r\n} \r\n\r\n\r\n\r\n \n\n//# sourceURL=webpack://battleship/./src/Battleship.js?\n}");

/***/ },

/***/ "./src/BattleshipDisplay.js"
/*!**********************************!*\
  !*** ./src/BattleshipDisplay.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBoard: () => (/* binding */ createBoard),\n/* harmony export */   displayBoard: () => (/* binding */ displayBoard),\n/* harmony export */   displayGameInteraction: () => (/* binding */ displayGameInteraction),\n/* harmony export */   displayShipAdd: () => (/* binding */ displayShipAdd),\n/* harmony export */   initialSetup: () => (/* binding */ initialSetup)\n/* harmony export */ });\n/* harmony import */ var _Battleship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Battleship.js */ \"./src/Battleship.js\");\n\r\n\r\n\r\nlet pressedSize=0;\r\nlet orientation=\"v\";\r\n\r\n\r\nfunction createBoard(boardNumber){\r\n    const boardn= document.querySelector(\"#board\"+boardNumber);\r\n    for(let i=0; i<10; i++){\r\n        for(let j=0; j<10; j++){\r\n            let square=document.createElement(\"div\");\r\n            square.setAttribute('class', 'square');\r\n            square.setAttribute('id', `s${i}-${j}`);\r\n            square.setAttribute('content', 'W');\r\n            square.setAttribute('display', 'U');\r\n            boardn.appendChild(square)\r\n\r\n            square.addEventListener('mouseover', eventHandlerHover );  \r\n            square.addEventListener('mouseout', eventHandlerUnhover );  \r\n        }         \r\n    }\r\n}\r\n\r\nfunction eventHandlerHover(e){\r\n    if(pressedSize==0){ return} \r\n    e.target.style.borderColor=\"black\";\r\n    e.target.style.zIndex=3;\r\n    if (orientation == \"v\"){\r\n            e.target.style.transform = `scale(1,${pressedSize})`;\r\n    } else if (orientation == \"h\"){\r\n            e.target.style.transform = `scale(${pressedSize},1)`;\r\n    }\r\n} \r\n\r\nfunction eventHandlerUnhover(e){\r\n    e.target.style.borderColor=\"grey\";\r\n    e.target.style.transform = `scale(1,1)`;\r\n    e.target.style.zIndex=0;\r\n    \r\n}       \r\n\r\n\r\nfunction displayBoard(boardNumber , player, shipDisplay){             // shipDisplay = \"S\" when adding ships, \"U\" when playing\r\n    const boardn= document.querySelector(\"#board\"+boardNumber);\r\n    let square =[];\r\n    for(let i=0; i<10; i++){\r\n        for(let j=0; j<10; j++){\r\n            square = boardn.querySelector(`#s${i}-${j}`);\r\n            if(player.board.squares[i][j][0] ==\"W\" && player.board.squares[i][j][1] == false ){\r\n                square.setAttribute('display', 'U');\r\n            }\r\n            if(player.board.squares[i][j][0] ==\"W\" && player.board.squares[i][j][1] == true ){\r\n                square.setAttribute('display', 'WH');\r\n            }\r\n            if(player.board.squares[i][j][0] !=\"W\" && player.board.squares[i][j][1] == true ){\r\n                square.setAttribute('display', 'SH');\r\n            }\r\n            if(player.board.squares[i][j][0] !=\"W\" && player.board.squares[i][j][1] == false ){\r\n                square.setAttribute('display', shipDisplay);\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\r\nfunction displayShipAdd(boardNumber, player){\r\n    let currentShip=undefined;\r\n    const ships= document.querySelector(\"#ships\"+boardNumber);\r\n    ships.addEventListener('click',(e)=> {\r\n        if(e.target.getAttribute(\"pressed\")==\"done\" ){ return}\r\n        let targetClass = e.target.className; \r\n        pressedSize= Number(targetClass[4]);\r\n        currentShip =e.target\r\n        e.target.setAttribute(\"pressed\", \"current\" )\r\n    });  \r\n\r\n    const compu= document.querySelector(\"#compu\"+boardNumber);\r\n    compu.addEventListener('click',(e)=> {\r\n        player.human=false;\r\n        player.addAllShipsRandom();\r\n        displayBoard(boardNumber, player, \"U\" );\r\n        boardn.removeEventListener(\"click\", eventHandlerSetup);\r\n        initialSteps(); \r\n    })\r\n    \r\n    const random= document.querySelector(\"#random\"+boardNumber);\r\n    random.addEventListener('click',(e)=> {\r\n            player.addAllShipsRandom()\r\n            let allShips=ships.children;\r\n            for(let ship of allShips ){\r\n                ship.setAttribute(\"pressed\", \"done\" );\r\n            }\r\n            currentShip = undefined;\r\n            pressedSize=0;\r\n            displayBoard(boardNumber, player, \"S\" )\r\n        })\r\n\r\n    const orientSpan= document.querySelector(\"#o\"+boardNumber);\r\n    const orientButton= document.querySelector(\"#ob\"+boardNumber);\r\n   \r\n    orientButton.addEventListener('click',()=> {\r\n        if(orientation == \"v\"){\r\n            orientation = \"h\"\r\n            orientSpan.innerHTML=\"horizontal\"\r\n        } else if(orientation == \"h\"){\r\n            orientation = \"v\"\r\n            orientSpan.innerHTML=\"vertical\"\r\n        }\r\n    });    \r\n\r\n    function eventHandlerSetup(e){\r\n    if(pressedSize==0){console.log( \"choose ship\"); return} \r\n        let targetID = e.target.id; \r\n        let i= Number(targetID[1]);\r\n        let j= Number(targetID[3]);  \r\n        let set=player.board.placeShip(pressedSize, orientation , [i,j]) \r\n        if (set==true){\r\n            currentShip.setAttribute(\"pressed\", \"done\" );\r\n            currentShip = undefined;\r\n            pressedSize=0;\r\n            displayBoard(boardNumber, player, \"S\" )\r\n        }\r\n    }  \r\n        \r\n    const boardn= document.querySelector(\"#board\"+boardNumber);\r\n    boardn.addEventListener('click', eventHandlerSetup );  \r\n    \r\n    const done = document.querySelector(\"#done\"+boardNumber);\r\n    done.addEventListener('click',(e)=> { \r\n        displayBoard(boardNumber, player, \"U\" );\r\n        boardn.removeEventListener(\"click\", eventHandlerSetup);\r\n        initialSteps();    \r\n    })\r\n}    \r\n\r\n\r\n\r\nlet setupStep =0;\r\nconst player1 = new _Battleship_js__WEBPACK_IMPORTED_MODULE_0__.Player(\"Player 1\");\r\nconst player2 = new _Battleship_js__WEBPACK_IMPORTED_MODULE_0__.Player(\"Player 2\");\r\n\r\nfunction initialSetup(){\r\n    const divAdd2 = document.querySelector(\"#addShips2\");\r\n    createBoard(1);\r\n    createBoard(2);\r\n    displayBoard(1, player1, \"S\");\r\n    displayBoard(2, player2, \"S\");\r\n    divAdd2.style.display=\"none\";\r\n    displayShipAdd(1, player1);\r\n}\r\n\r\nfunction initialSteps(){\r\n    const divAdd1 = document.querySelector(\"#addShips1\");\r\n    const divAdd2 = document.querySelector(\"#addShips2\");\r\n    pressedSize=0;\r\n    switch(setupStep){\r\n     case 0:    \r\n        divAdd1.style.display=\"none\";\r\n        divAdd2.style.display=\"block\";\r\n        displayShipAdd(2, player2);\r\n        setupStep +=1;\r\n        break;\r\n     case 1:\r\n        divAdd2.style.display=\"none\";\r\n        displayGameInteraction(1, player1, player2);\r\n        displayGameInteraction(2, player2, player1);\r\n        if(player1.human == false){ \r\n            if(player2.human == false){computerAlone(); return};\r\n            let move=player1.chooseMove();\r\n            let result= player2.board.receiveAttack(move);\r\n            player1.lastMove =[move, result];\r\n             displayBoard(2, player2, \"U\");\r\n        }\r\n        break;\r\n    }\r\n\r\n}\r\n\r\n\r\nfunction displayGameInteraction(boardNumber, player, against){\r\n    if(against.human==true){\r\n        const boardn= document.querySelector(\"#board\"+boardNumber);\r\n        boardn.addEventListener('click',(e)=> {\r\n            let targetID = e.target.id; \r\n            if(targetID[0] != \"s\"){return }\r\n            let i=targetID[1];\r\n            let j=targetID[3];\r\n            let attackDone = player.board.receiveAttack([i,j]);\r\n            if (attackDone == false ){return}\r\n            displayBoard(boardNumber , player, \"U\");\r\n            if(player.board.checkWin() == true){ \r\n                alert( `End of game ${against.name} won`)\r\n                displayBoard(2, player2, \"S\");\r\n            }\r\n            else if (player.human == false) { \r\n                let move=player.chooseMove()\r\n                let result= against.board.receiveAttack(move);\r\n                player.lastMove =[move, result];\r\n                displayBoard(1+boardNumber%2 , against, \"U\");\r\n                if(against.board.checkWin() == true){ \r\n                    alert( `End of game ${player.name} won`)\r\n                    displayBoard(1, player1, \"S\");\r\n                    displayBoard(2, player2, \"S\");\r\n                }\r\n            }\r\n        })\r\n    }\r\n}\r\n\r\n\r\nfunction computerAlone(){\r\n    let step=1;\r\n    while(true){\r\n     if (step%2==0){\r\n        let move=player2.chooseMove()\r\n        let result= player1.board.receiveAttack(move);\r\n        player2.lastMove =[move, result];\r\n        displayBoard(1 , player1, \"U\");\r\n        if(player1.board.checkWin() == true){ \r\n            alert( `End of game ${player2.name} won`)\r\n            displayBoard(1, player1, \"S\");\r\n            displayBoard(2, player2, \"S\");\r\n            return;\r\n        }\r\n     } else {\r\n        let move=player1.chooseMove()\r\n        let result= player2.board.receiveAttack(move);\r\n        player1.lastMove =[move, result];\r\n        displayBoard(2 , player2, \"U\");\r\n        if(player2.board.checkWin() == true){ \r\n            alert( `End of game ${player1.name} won`)\r\n            displayBoard(1, player1, \"S\");\r\n            displayBoard(2, player2, \"S\");\r\n            return;\r\n        }\r\n     }\r\n    step += 1;\r\n    }\r\n}    \r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/BattleshipDisplay.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Battleship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Battleship.js */ \"./src/Battleship.js\");\n/* harmony import */ var _BattleshipDisplay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BattleshipDisplay.js */ \"./src/BattleshipDisplay.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\n\r\n\r\n(0,_BattleshipDisplay_js__WEBPACK_IMPORTED_MODULE_1__.initialSetup)()\r\n// displayGameInteraction( \"board1\", player1);\r\n\r\n//player1.board.placeShip(4, \"v\" , [1,2]);\r\n//player1.board.placeShip(3, \"v\" , [4,8]);\r\n//player1.board.placeShip(2, \"h\" , [3,5]);\r\n\r\n\r\n//player2.board.placeShip(2, \"v\" , [2,8]);\r\n//player2.board.placeShip(3, \"h\" , [8,5]);\r\n//player2.board.placeShip(4, \"v\" , [2,3]);\r\n\r\n//compu.addShip(4);\r\n//compu.addShip(9);\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;